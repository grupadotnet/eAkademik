using System;
using System.Linq;
using eAkademik.API.Services;
using eAkademik.API.Settings;
using eAkademik.Model;
using FluentAssertions;
using Microsoft.Extensions.Options;
using Xunit;

namespace eAkademik.UnitTests.Authentication;

public class TokenServiceTest
{
    private readonly IOptions<JwtSettings> _jwtSettings;
    private readonly ITokenService _tokenService;
    private readonly User _testUser;

    public TokenServiceTest()
    {
        _jwtSettings = Options.Create(new JwtSettings()
        {
            Secret = "test",
            TokenLife = 20
        });
        _tokenService = new TokenService(_jwtSettings);
        _testUser = new User()
        {
            Id = Guid.NewGuid(),
            Email = "test@test.com",
            Password = "test",
            FirstName = "test",
            IsDeleted = false,
            LastName = "test"
        };
    }

    [Fact]
    public void WhenBuildTokenThenItShouldNotBeEmpty()
    {
        var token = _tokenService.BuildToken(_testUser);

        token.Should().BeOfType<string>().And.NotBeEmpty();
    }

    [Fact]
    public void WhenBuildTokenThenDecodeShouldBeValid()
    {
        var token = _tokenService.BuildToken(_testUser);

        var decodedToken = _tokenService.DecodeToken(token);

        decodedToken.Should().NotBeNull().And.HaveCount(3);
    }

    [Fact]
    public void WhenDecodeTokenExpirationDateShouldBeValid()
    {
        //Arrange
        var tokenLife = DateTimeOffset.UtcNow.AddMinutes(_jwtSettings.Value.TokenLife).ToUnixTimeSeconds();
        var tokenLifeMargin = DateTimeOffset.UtcNow.AddMinutes(_jwtSettings.Value.TokenLife + 1).ToUnixTimeSeconds();
        

        var token = _tokenService.BuildToken(_testUser);


        //Act
        var decodedToken = _tokenService.DecodeToken(token);

        //Assert
        var exp = long.Parse(decodedToken.FirstOrDefault(x => x.Key == "exp").Value);

        exp.Should().BeGreaterOrEqualTo(tokenLife).And.BeLessOrEqualTo(tokenLifeMargin);
    }

    [Fact]
    public void WhenDecodeInvalidTokenShouldReturnEmptyCollection()
    {
        var decodedToken = _tokenService.DecodeToken("token");

        decodedToken.Should().BeEmpty();
    }
}