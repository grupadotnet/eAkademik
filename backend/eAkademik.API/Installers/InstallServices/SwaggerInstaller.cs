using Microsoft.OpenApi.Models;

namespace eAkademik.API.Installers.InstallServices;

public class SwaggerInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
        services.AddSwaggerGen(c => { c.SwaggerDoc("v1", new OpenApiInfo { Title = "eAkademik", Version = "v1" }); });
    }
}