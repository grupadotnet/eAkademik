using AutoMapper;
using eAkademik.API.Services;
using eAkademik.API.ViewModel.CreateUser;
using eAkademik.API.ViewModel.User;
using Microsoft.AspNetCore.Mvc;

namespace eAkademik.API.Controllers;

[ApiController]
[Route("users")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IMapper _mapper;

    public UserController(IUserService userService, IMapper mapper)
    {
        _userService = userService;
        _mapper = mapper;
    }

    [HttpGet()]
    public async Task<ActionResult<List<UserViewModel>>> GetUsers()
    {
        var users = await _userService.GetUsers();

        var result = _mapper.Map<List<UserViewModel>>(users);

        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<UserViewModel>> GetUser(Guid id)
    {
        try
        {
            var user = await _userService.GetUser(id);
            var result = _mapper.Map<UserViewModel>(user);

            return Ok(result);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteUser(Guid id)
    {
        try
        {
            await _userService.DeleteUser(id);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPatch()]
    public async Task<IActionResult> EditUser([FromBody] UserViewModel userViewModel)
    {
        try
        {
            await _userService.EditUser(userViewModel);
            return Ok();
        }
        catch (Exception e)
        {
            return BadRequest("Couldn't update user");
        }
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateUser(CreateUserViewModel createUserRequest)
    {
        try
        {
            var (isValid, message) = createUserRequest.IsValid();

            if (!isValid)
                return BadRequest(message);

            var createdUser = await _userService.CreateUser(createUserRequest);
            return Ok(createdUser.Id);
            
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}


