import { useState, useEffect } from "react";
import { AlbumService } from "../services/AlbumService";
import { IAlbum } from "../interfaces/IAlbum";
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const AlbumItem: FC<IAlbum> = ({ id, title, image, artist }) => {
    return (
        <div className="album-card">
            <Link to={`/album`} state={{ id }}>
                    <img className='album-cover' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px" />
            </Link>
        </div>
    );
}

export const Albums: FC = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const albums = await AlbumService.getAlbums();
            setAlbums(albums);
        };
        fetchAlbums();
    }, []);

    const getAlbumItemsByGenre = () => {
        const albumsByGenre: Record<string, IAlbum[]> = {};
        albums.forEach(album => {
            if (!albumsByGenre[album.genre]) {
                albumsByGenre[album.genre] = [];
            }
            albumsByGenre[album.genre].push(album);
        });

        return Object.keys(albumsByGenre).map((genre, i) => (
            <div key={`genre-${i}`} className="genre-container">
                <h2  className="genre-title">{genre}</h2>
                <div className="genre-box">
                    {albumsByGenre[genre].map((album, j) => (
                        <AlbumItem
                            key={`album-${j}`}
                            id={album.id}
                            title={album.title}
                            image={album.image}
                            artist={album.artist}
                            genre={album.genre}
                            year={album.year}
                            rating={album.rating}
                        />
                        
                    ), [])}
                </div>
            </div>
        ));
    }

    return (
        <div className="album-container">
            {getAlbumItemsByGenre()}
        </div>
    )
}