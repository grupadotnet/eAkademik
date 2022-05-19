using System.Security.Claims;
using eAkademik.API.Services;
using eAkademik.API.ViewModel.CreateUser;
using eAkademik.API.ViewModel.User;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;

namespace eAkademik.API.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ITokenService _tokenService;
    private readonly IUserService _userService;

    public AuthController(IAuthService authService, ITokenService tokenService, IUserService userService)
    {
        _authService = authService;
        _tokenService = tokenService;
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login(LoginViewModel loginRequest)
    {
        var isRequestValid = await _authService.VerifyUser(loginRequest);

        if (!isRequestValid)
            return Unauthorized();

        var user = await _userService.GetUser(loginRequest.Email);

        var (claimsIdentity, authProperties) = _tokenService.BuildClaims(user);
        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);

        return Ok();
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        return Ok();
    }
    
    [HttpPost("create-user")]
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