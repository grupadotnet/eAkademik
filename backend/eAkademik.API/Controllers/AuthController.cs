using eAkademik.API.Services;
using eAkademik.API.Settings;
using eAkademik.API.ViewModel.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace eAkademik.API.Controllers;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ITokenService _tokenService;
    private readonly IUserService _userService;
    private readonly IOptions<JwtSettings> _options;

    public AuthController(IAuthService authService, ITokenService tokenService, IUserService userService, IOptions<JwtSettings> options)
    {
        _authService = authService;
        _tokenService = tokenService;
        _userService = userService;
        _options = options;
    }
    
    [HttpPost("login")]
    public async Task<ActionResult> Login(LoginViewModel loginRequest)
    {
        var isRequestValid = await _authService.VerifyUser(loginRequest);

        if (!isRequestValid)
            return Unauthorized();
        
        var user = await _userService.GetUser(loginRequest.Email);

        var token = _tokenService.BuildToken(user);
        
        HttpContext.Response.Cookies.Append("access_token", token, new CookieOptions()
        {
            HttpOnly = true,
            Expires = DateTimeOffset.UtcNow.AddMinutes(_options.Value.TokenLife)
        });
        
        HttpContext.Response.Cookies.Append("expires_in", DateTimeOffset.Now.AddMinutes(_options.Value.TokenLife).ToUnixTimeSeconds().ToString(), new CookieOptions()
        {
            Expires = DateTimeOffset.UtcNow.AddMinutes(_options.Value.TokenLife)
        });

        return Ok();
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Response.Cookies.Append("access_token", "", new CookieOptions()
        {
            HttpOnly = true,
            Expires = DateTimeOffset.UtcNow.AddMinutes(0)
        });
        
        HttpContext.Response.Cookies.Append("expires_in", DateTimeOffset.Now.AddMinutes(_options.Value.TokenLife).ToUnixTimeSeconds().ToString(), new CookieOptions()
        {
            Expires = DateTimeOffset.UtcNow.AddMinutes(0)
        });

        return Ok();
    }
}