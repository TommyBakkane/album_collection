using Microsoft.EntityFrameworkCore;
using AlbumApi.Models;

#nullable disable
namespace AlbumApi.Context;

public class AlbumApiContext : DbContext
{
    public AlbumApiContext(DbContextOptions<AlbumApiContext> options) : base(options){}
    public DbSet<Album> Albums {get; set;}
}