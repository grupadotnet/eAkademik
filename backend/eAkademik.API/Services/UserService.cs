using eAkademik.Model;
using Microsoft.EntityFrameworkCore;
using eAkademik.API.ViewModel.User;

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

    public async Task EditUser(UserViewModel user)
    {
        var existingUser = await _context.Users.SingleOrDefaultAsync(x => x.Id == user.Id);
        
        if (existingUser is null)
            throw new Exception("User not found");
        
        existingUser.FirstName = user.FirstName;
        existingUser.LastName = user.LastName;
        existingUser.Email = user.Email;

        await _context.SaveChangesAsync();
    }
}