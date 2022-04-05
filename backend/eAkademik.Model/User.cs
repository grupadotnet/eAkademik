using System;
using eAkademik.Model.Shared;

namespace eAkademik.Model
{
    public class User: IEntity
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }

        public string Email { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }
    }
}