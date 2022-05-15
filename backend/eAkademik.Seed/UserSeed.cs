using eAkademik.Model;

namespace eAkademik.Seed;

public static class UserSeed
{
    public static User[] UserSeedDev => new[]
    {
        new User()
        {
            Id = new Guid("2bebdce4-307b-4b33-8be5-7aa48ad99296"),
            Email = "jankowalski@gmail.com",
            Password = "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm",
            FirstName = "Jan",
            LastName = "Kowalski"
        },
        new User()
        {
            Id = new Guid("46e57479-fd7e-4a88-98d6-1e4955d120b9"),
            Email = "adamnowak@gmail.com",
            Password = "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm",
            FirstName = "Adam",
            LastName = "Nowak"
        },
        new User()
        {
            Id = new Guid("3cc29f11-4b32-4b36-8d2f-8c1d65da046e"),
            Email = "ewakiwak@gmail.com",
            Password = "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm",
            FirstName = "Ewa",
            LastName = "Kiwak"
        }
    };
}