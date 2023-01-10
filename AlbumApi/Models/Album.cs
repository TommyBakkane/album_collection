using AlbumApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace AlbumApi.Models;

public class Album : IAlbum
{
    [Key]
    public int Id {get; set;}
    public string Title {get; set;}
    public string Image {get; set;}
    public string Artist {get; set;}
    public string Genre {get; set;}
    public string ReleaseDate {get; set;}
    public double Rating {get; set;}
}