using eAkademik.Model;
using Microsoft.EntityFrameworkCore;
using eAkademik.API.ViewModel.User;
using eAkademik.API.ViewModel.CreateUser;
using AutoMapper;

namespace eAkademik.API.Services;

public class UserService : IUserService
{
    private readonly Context _context;
    private readonly IMapper _mapper;

    public UserService(Context context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
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

    public async Task<User> CreateUser(CreateUserViewModel createUserViewModel)
    {
        var existingUser = await _context.Users.SingleOrDefaultAsync(e => e.Email == createUserViewModel.Email);

        if (existingUser is not null) 
            throw new Exception("User with the same e-mail address already exists");
        
        var user = _mapper.Map<User>(createUserViewModel);
        
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        return user;
    }
}