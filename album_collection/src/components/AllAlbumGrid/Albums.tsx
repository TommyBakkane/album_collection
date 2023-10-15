import { useState, useEffect } from "react";
import { AlbumItem } from "./AlbumItem";
import { AlbumService } from "../../services/AlbumService";
import { IAlbum } from "../../interfaces/IAlbum";
import "../../styles/ShowAll.css"

export const Albums = () => {
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
                year={album.year}
                rating={album.rating}
                />
        ))
    }

    return(
        <div className="album-wrapper">
            {getAlbumItems()}
        </div>
    )
}