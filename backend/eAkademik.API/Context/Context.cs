using System.Reflection;
using eAkademik.Model;
using Microsoft.EntityFrameworkCore;

namespace eAkademik.API
{
    public class Context: DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSnakeCaseNamingConvention();
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
        
        public DbSet<User> Users { get; set; }
    }
}