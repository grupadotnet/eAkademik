using AutoMapper;

namespace eAkademik.API.Installers.InstallServices;

public class MapperInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
        var mapperConfig = new MapperConfiguration(mc => { mc.AddProfile(new MappingProfiles()); });

        mapperConfig.AssertConfigurationIsValid();
        var mapper = mapperConfig.CreateMapper();
        services.AddSingleton(mapper);
    }
}