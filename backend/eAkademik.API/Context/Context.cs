using System.Reflection;
using eAkademik.Model;
using Microsoft.EntityFrameworkCore;

namespace eAkademik.API;

public class Context: DbContext
{
    public Context(DbContextOptions options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }

    #region Entities
    
    public DbSet<User> Users { get; set; }
    

    #endregion
   
}