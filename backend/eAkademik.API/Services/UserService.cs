using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using eAkademik.Model;
using Microsoft.EntityFrameworkCore;

namespace eAkademik.API.Services
{
    public class UserService: IUserService
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
    }
}