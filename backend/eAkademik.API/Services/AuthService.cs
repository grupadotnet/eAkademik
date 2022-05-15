using eAkademik.API.ViewModel.User;
using Microsoft.EntityFrameworkCore;

namespace eAkademik.API.Services;

public class AuthService : IAuthService
{
    private readonly Context _context;
    private const int Cost = 9;
    
    public AuthService(Context context)
    {
        _context = context;
    }

    public (string hash, string salt) GenerateHashedPassword(string password)
    {
        var salt = BCrypt.Net.BCrypt.GenerateSalt(Cost);
        var hash = BCrypt.Net.BCrypt.HashPassword(password, salt);

        return (hash, salt);
    }
    
    public bool VerifyPassword(string password, string hash)
    {
        try
        {
            return BCrypt.Net.BCrypt.Verify(password, hash);
        }
        catch (Exception)
        {
            return false;
        }
    }

    public async Task<bool> VerifyUser(LoginViewModel loginRequest)
    {
        try
        {
            var user = await _context.Users.SingleOrDefaultAsync(x => x.Email == loginRequest.Email && !x.IsDeleted);

            return user is not null && VerifyPassword(loginRequest.Password, user.Password);
        }
        catch (Exception)
        {
            return false;
        }
    }
}