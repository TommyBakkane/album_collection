using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;
using Microsoft.AspNetCore.Mvc;

#nullable disable

namespace AlbumApi.Context;

public class AlbumApiContext : DbContext
{
    public AlbumApiContext(DbContextOptions<AlbumApiContext> options) : base(options){}
    public DbSet<AlbumApi.Models.Album> GetAlbum { get; set; }
}


