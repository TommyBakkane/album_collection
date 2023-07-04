import { useState, useEffect } from "react";
import { AlbumItem } from "./AlbumItem";
import { AlbumService } from "../../services/AlbumService";
import { IAlbum } from "../../interfaces/IAlbum";
import './Albums.css'

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
        <section className="main-container">

            <div className="genre-wrapper">
                <h2 className="title--big">Rap</h2>
                <div className="album-carousel">
                    {getAlbumItems().filter(album => album.props.genre === "Rap")}
                </div>
            </div>

            <div className="genre-wrapper">
                <h2 className="title--big">Rock</h2>
                <div className="album-carousel">
                    {getAlbumItems().filter(album => album.props.genre === "Rock")}
                </div>
            </div>

            <div className="genre-wrapper">
                <h2 className="title--big">Folk</h2>
                <div className="album-carousel">
                    {getAlbumItems().filter(album => album.props.genre === "Folk")}
                </div>
            </div>
        
        </section>
    )
}