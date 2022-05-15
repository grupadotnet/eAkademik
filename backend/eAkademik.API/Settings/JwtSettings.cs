namespace eAkademik.API.Settings;

public class JwtSettings
{
    public string Secret { get; set; }
    public int TokenLife { get; set; }
}