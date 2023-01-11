import { useState, useEffect } from "react";
import { AlbumItem } from "./AlbumItem";
import { AlbumService } from "../../services/AlbumService";
import { IAlbum } from "../../interfaces/IAlbum";

const albumList = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const albums = await AlbumService.getAlbums();
            setAlbums(albums);
        };
        fetchAlbums();
    }, []);

    const getAlbumItems = () => {
        return albums?.map((album, i) => (
            <AlbumItem
            key={`album-${i}`}
            id={album.id}
            title={album.title}
            image={album.image}
            artist={album.artist}
            genre={album.genre}
            releaseDate={album.releaseDate}
            rating={album.rating}
            />
        ))
    }
    return(
        <section className="output__container">{getAlbumItems()}</section>
    )
}