﻿using eAkademik.Model;

namespace eAkademik.API.Services;

public interface IUserService
{
    public Task<List<User>> GetUsers();

    public Task<User> GetUser(Guid id);

    public Task DeleteUser(Guid id);
}