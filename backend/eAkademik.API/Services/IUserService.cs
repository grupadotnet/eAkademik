using eAkademik.Model;
using eAkademik.API.ViewModel.User;
using eAkademik.API.ViewModel.CreateUser;

namespace eAkademik.API.Services;

public interface IUserService
{
    public Task<List<User>> GetUsers();

    public Task<User> GetUser(Guid id);
    public Task<User> GetUser(string email);

    public Task DeleteUser(Guid id);

    public Task EditUser(UserViewModel user);

    public Task<User> CreateUser(CreateUserViewModel createUserRequest);
}