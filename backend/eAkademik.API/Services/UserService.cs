using eAkademik.Model;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace eAkademik.API.Services;

public class UserService : IUserService
{
    private readonly Context _context;

    public UserService(Context context)
    {
        _context = context;
    }

    public async Task<List<User>> GetUsers()
    {
        return await _context.Users.AsNoTracking().ToListAsync();
    }

    public async Task<User> GetUser(Guid id)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == id);

        if (user is null)
            throw new Exception("User not found");

        return user;
    }

    public async Task DeleteUser(Guid id)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == id);

        if (user is null)
            throw new Exception("User not found");

        user.IsDeleted = true;
        await _context.SaveChangesAsync();
    }

    public async Task<User> CreateUser(string firstName, string lastName, string email, string password)
    {
        if (!new EmailAddressAttribute().IsValid(email))
            throw new Exception("E-mail adress is incorrect");

        var sameUser = await _context.Users.SingleOrDefaultAsync(x => x.Email == email);
        if (!(sameUser is null))
        {
            throw new Exception("User with the same e-mail adress allready exists");

        }
        var user = new User
        {
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            Password = password,
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
}