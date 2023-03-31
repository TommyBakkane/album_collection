using AlbumApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace AlbumApi.Models;

public class Album : IAlbum
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Image { get; set; } = null!;
    public string Artist { get; set; } = null!;
    public string Genre { get; set; } = null!;
    public int Year { get; set; } = 0;
    public double Rating {get; set;} = 0;
}