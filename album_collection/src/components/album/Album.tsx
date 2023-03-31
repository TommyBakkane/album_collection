import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import './Album.css';

export const Album  = () => {
    const location = useLocation();
    const id = location.state?.id;

    const [album, setAlbum] = useState<IAlbum>();

    useEffect(() => {
        const fetchAlbum = async () => {
            const album = await AlbumService.getAlbumById(id);
            setAlbum(album);
        };
        fetchAlbum();
    }, []);

    console.log(album);

    return(
        <>
            <div className="container">
                <h1>{album?.title}</h1>
                <h2>{album?.artist}</h2>
                <h3>{album?.year}</h3>
                <img src={`https://localhost:7180/images/${album?.image}`} alt={album?.title}/>
            </div>
        </>
    )

}