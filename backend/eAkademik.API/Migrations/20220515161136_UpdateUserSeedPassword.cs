using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eAkademik.API.Migrations
{
    public partial class UpdateUserSeedPassword : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("2bebdce4-307b-4b33-8be5-7aa48ad99296"),
                column: "password",
                value: "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("3cc29f11-4b32-4b36-8d2f-8c1d65da046e"),
                column: "password",
                value: "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("46e57479-fd7e-4a88-98d6-1e4955d120b9"),
                column: "password",
                value: "$2a$09$e0UfR4G9hzFYbvpPHLx3ruEJQ8PcMTg6kCXXn3ll1G2x6Qa90J5Lm");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("2bebdce4-307b-4b33-8be5-7aa48ad99296"),
                column: "password",
                value: "test");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("3cc29f11-4b32-4b36-8d2f-8c1d65da046e"),
                column: "password",
                value: "test");

            migrationBuilder.UpdateData(
                table: "users",
                keyColumn: "id",
                keyValue: new Guid("46e57479-fd7e-4a88-98d6-1e4955d120b9"),
                column: "password",
                value: "test");
        }
    }
}
