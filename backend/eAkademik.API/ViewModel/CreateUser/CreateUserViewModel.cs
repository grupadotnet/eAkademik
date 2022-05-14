using System.ComponentModel.DataAnnotations;

namespace eAkademik.API.ViewModel.CreateUser
{
    public class CreateUserViewModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }

        public bool isEmailValid()
        {
            return new EmailAddressAttribute().IsValid(Email);
        }

        public void isValid()
        {
            var errors = new List<string>();

            if (string.IsNullOrEmpty(FirstName))
                errors.Add("FirstName is required");

            if (string.IsNullOrEmpty(LastName))
                errors.Add("LastName is required");

            if (!isEmailValid())
                errors.Add("E-mail adress is incorrect");

            if (string.IsNullOrEmpty(Password))
                errors.Add("Password is required");

            var errorMessage = String.Join(", ", errors);

            if (!string.IsNullOrEmpty(errorMessage))
                throw new Exception(errorMessage);
        }
    }
}
