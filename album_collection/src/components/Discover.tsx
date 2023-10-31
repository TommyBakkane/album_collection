import React, { FormEvent, useState, useEffect } from "react";
import { SpotifyService } from "../services/SpotifyService";

export const Discover = () => {
    const [artist, setArtist] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const token = window.localStorage.getItem('token');
    const [albums, setAlbums] = useState<any[]>([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const fetchedAlbums = await SpotifyService.getAlbums(token || '');
            setAlbums(fetchedAlbums);
        };

        fetchAlbums();
    }, [token]);

    const renderAlbums = () => {
        return albums.map((album) => (
            <div key={album.id}>
                {album.images.length ? (
                    <img src={album.images[0].url} alt={album.name} />
                ) : (
                    <div>No Image</div>
                )}
                <h2>{album.name}</h2>
            </div>
        ));
    };

    return (
        <div>
            {renderAlbums()}
        </div>
    );
};
