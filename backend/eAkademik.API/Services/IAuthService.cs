using eAkademik.API.ViewModel.User;

namespace eAkademik.API.Services;

public interface IAuthService
{
    (string hash, string salt) GenerateHashedPassword(string password);
    bool VerifyPassword(string password, string hash);

    Task<bool> VerifyUser(LoginViewModel loginViewModel);
}