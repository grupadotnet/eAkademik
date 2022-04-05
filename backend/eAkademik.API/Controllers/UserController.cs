using System;
using System.Threading.Tasks;
using eAkademik.API.Services;
using eAkademik.Model;
using Microsoft.AspNetCore.Mvc;

namespace eAkademik.API.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet()]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();

            return Ok(users);
        }
        
        [HttpGet(":id")]
        public async Task<IActionResult> GetUser(Guid id)
        {
            try
            {
                var user = await _userService.GetUser(id);

                return Ok(user);

            }
            catch (Exception)
            {
                return Ok(new User());
            }
        }
    }
}