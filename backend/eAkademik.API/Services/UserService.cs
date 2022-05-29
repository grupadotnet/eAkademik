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
    private readonly IAuthService _authService;

    public UserService(Context context, IMapper mapper, IAuthService authService)
    {
        _context = context;
        _mapper = mapper;
        _authService = authService;
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

    public async Task<User> GetUser(string email)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.Email == email);

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

    public async Task<User> CreateUser(CreateUserViewModel createUserRequest)
    {
        var existingUser = await _context.Users.SingleOrDefaultAsync(e => e.Email == createUserRequest.Email);

        if (existingUser is not null) 
            throw new Exception("User with the same e-mail address already exists");
        
        var user = _mapper.Map<User>(createUserRequest);

        var (hash, salt) = _authService.GenerateHashedPassword(createUserRequest.Password);

        user.Password = hash;
        
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        return user;
    }
}