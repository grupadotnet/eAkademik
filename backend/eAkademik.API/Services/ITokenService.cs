using eAkademik.Model;

namespace eAkademik.API.Services;

public interface ITokenService
{
    string BuildToken(User user);
    IDictionary<string, string> DecodeToken(string token);
}