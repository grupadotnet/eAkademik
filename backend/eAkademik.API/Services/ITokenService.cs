using System.Security.Claims;
using eAkademik.Model;
using Microsoft.AspNetCore.Authentication;

namespace eAkademik.API.Services;

public interface ITokenService
{
    string BuildToken(User user);
    IDictionary<string, string> DecodeToken(string token);
    (ClaimsIdentity claimsIdentity, AuthenticationProperties authProperties) BuildClaims(User user);
}