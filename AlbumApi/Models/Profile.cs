using AlbumApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace AlbumApi.Models;

public class Profile : IProfile
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Image { get; set; } = null!;
}