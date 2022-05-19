using System.ComponentModel.DataAnnotations;

namespace eAkademik.API.ViewModel.CreateUser
{
    public class CreateUserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public bool IsEmailValid() => new EmailAddressAttribute().IsValid(Email);

        public (bool, string) IsValid()
        {
            if (string.IsNullOrEmpty(FirstName))
                return (false, "FirstName is required");

            if (string.IsNullOrEmpty(LastName))
                return (false, "LastName is required");

            if (!IsEmailValid())
                return (false, "E-mail adress is incorrect");

            if (string.IsNullOrEmpty(Password))
                return (false, "Password is required");

            return (true, string.Empty);
        }
    }
}