using eAkademik.Model;
using eAkademik.Seed;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace eAkademik.API.EntityTypeConfiguration;

public class UserEntityTypeConfiguration: IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(x => x.Id);
        
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Email)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.FirstName).HasMaxLength(100);
            
        builder.Property(x => x.LastName).HasMaxLength(100);

        builder.Property(x => x.Password)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        
        builder.HasData(UserSeed.UserSeedDev);
    }
}