using AutoFixture;
using AutoFixture.AutoMoq;
using eAkademik.API;
using eAkademik.API.Services;
using FluentAssertions;
using Xunit;

namespace eAkademik.UnitTests.Authentication;

public class AuthServiceTest
{
    private readonly IAuthService _authService;
    private readonly Context _context;

    public AuthServiceTest()
    {
        var fixture = new Fixture();
        fixture.Customize(new AutoMoqCustomization());
        _context = fixture.Create<Context>();
        _authService = new AuthService(_context);
    }

    [Fact]
    public void WhenPasswordProvidedReturnValidHashAndSalt()
    {
        //Arrange
        var password = "test";

        //Act
        var (hash, salt) = _authService.GenerateHashedPassword(password);

        //Assert
        Assert.NotEmpty(hash);
        Assert.NotEmpty(salt);
    }


    [Fact]
    public void WhenPasswordProvidedPasswordCompareToHashValid()
    {
        //Arrange
        const string password = "test";
        const string hash = "$2a$09$mUos5BLwqrsjFUzVASjO2.rSXva6OU9sDNHHJm4kJ9.wW09.65lhu";
        
        //Act
        var verificationResult = _authService.VerifyPassword(password, hash);

        //Assert
        verificationResult.Should().BeTrue();
    }

    [Fact]
    public void WhenPasswordProvidedPasswordCompareToHashInvalidValid()
    {
        //Arrange
        const string password = "test";
        const string hash = "$2aadasd$mUos5BLwqrsjFUzVASjO2.rSXva6OU9sDNHHJm4kJ9.wW09.65lhu";
        
        //Act
        var verificationResult = _authService.VerifyPassword(password, hash);

        //Assert
        verificationResult.Should().BeFalse();
    }
}