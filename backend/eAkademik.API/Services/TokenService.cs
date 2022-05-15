using eAkademik.API.Settings;
using eAkademik.Model;
using JWT.Algorithms;
using JWT.Builder;
using Microsoft.Extensions.Options;

namespace eAkademik.API.Services;

public class TokenService: ITokenService
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

    public IDictionary<string, string> DecodeToken (string token)
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