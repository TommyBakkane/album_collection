namespace AlbumApi.Interfaces
{
    public interface IAlbum
    {
        string Title { get; set; }
        string Image { get; set; }
        string Artist { get; set; }
        string Genre { get; set; }
        int Year { get; set; }
    }
}