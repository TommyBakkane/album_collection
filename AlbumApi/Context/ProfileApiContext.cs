using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;
using Microsoft.AspNetCore.Mvc;

#nullable disable

namespace AlbumApi.Context;

public class ProfileApiContext : DbContext
{
    public ProfileApiContext(DbContextOptions<ProfileApiContext> options) : base(options) { }
    public DbSet<Models.Profile> GetProfile { get; set; }
}


