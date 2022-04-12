using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eAkademik.API.Migrations
{
    public partial class CreateUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    first_name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    last_name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    email = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    password = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_users", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "users",
                columns: new[] { "id", "email", "first_name", "last_name", "password" },
                values: new object[,]
                {
                    { new Guid("2bebdce4-307b-4b33-8be5-7aa48ad99296"), "jankowalski@gmail.com", "Jan", "Kowalski", "test" },
                    { new Guid("3cc29f11-4b32-4b36-8d2f-8c1d65da046e"), "ewakiwak@gmail.com", "Ewa", "Kiwak", "test" },
                    { new Guid("46e57479-fd7e-4a88-98d6-1e4955d120b9"), "adamnowak@gmail.com", "Adam", "Nowak", "test" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
