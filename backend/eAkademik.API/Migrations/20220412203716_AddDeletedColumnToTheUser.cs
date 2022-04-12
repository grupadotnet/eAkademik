using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eAkademik.API.Migrations
{
    public partial class AddDeletedColumnToTheUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "is_deleted",
                table: "users",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "is_deleted",
                table: "users");
        }
    }
}
