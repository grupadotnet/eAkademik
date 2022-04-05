using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eAkademik.Model;

namespace eAkademik.API.Services
{
    public interface IUserService
    {
        public Task<List<User>> GetUsers();

        public Task<User> GetUser(Guid id);
    }
}