using System.Security.Claims;
using eAkademik.API.Settings;
using eAkademik.Model;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Options;

namespace eAkademik.API.Services;

public class TokenService : ITokenService
{
    private readonly IOptions<JwtSettings> _jwtSettings;

    public TokenService(IOptions<JwtSettings> jwtSettings)
    {
        _jwtSettings = jwtSettings;
    }

    public string BuildToken(User user)
    {
        var token = JwtBuilder.Create()
            .WithAlgorithm(new HMACSHA256Algorithm())
            .WithSecret(_jwtSettings.Value.Secret)
            .AddClaim("exp", DateTimeOffset.UtcNow.AddMinutes(_jwtSettings.Value.TokenLife).ToUnixTimeSeconds())
            .AddClaim("id", user.Id)
            // .AddClaim("role", user.Role)
            .AddClaim("jti", Guid.NewGuid())
            .Encode();
        
        return token;
    }

    public (ClaimsIdentity, AuthenticationProperties) BuildClaims(User user)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.Name, user.Email),
            new(ClaimTypes.Email, user.Email),
            new(ClaimTypes.NameIdentifier, user.Id.ToString()),
            // new Claim(ClaimTypes.Role, "Administrator"),
        };

        var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

        var authProperties = new AuthenticationProperties
        {
            AllowRefresh = true,
            ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(_jwtSettings.Value.TokenLife),
        };

        return (claimsIdentity, authProperties);
    }

    public IDictionary<string, string> DecodeToken(string token)
    {
        try
        {
            return new JwtBuilder()
                .WithAlgorithm(new HMACSHA256Algorithm())
                .WithSecret(_jwtSettings.Value.Secret)
                .MustVerifySignature()
                .Decode<IDictionary<string, string>>(token);
        }
        catch (Exception)
        {
            return new Dictionary<string, string>();
        }
    }
}