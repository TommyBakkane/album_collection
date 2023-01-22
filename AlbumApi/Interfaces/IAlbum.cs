namespace AlbumApi.Interfaces;

    public interface IAlbum
    {
        int Id {get; set;}
        string Title {get; set;}
        string Image {get; set;}
        string Artist {get; set;}
        string Genre {get; set;}
    }