import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { DeleteAlbum } from "../functions/Delete/DeleteAlbum";
import './Album.css';
import * as AiIcons from "react-icons/ai";

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
            <div className="title-container">
                <h1>{album?.title}</h1>
                <h5>{album?.artist}</h5>
                <h5>{album?.year}</h5>
            </div>
            <div className="image-container">
                <img className="image" src={`https://localhost:7180/images/${album?.image}`} alt={album?.title}/>
            </div>
            <div className="genre-container">
                <h5>Genre: {album?.genre}</h5>
            </div>

            <div className="delete-update-container">

                <DeleteAlbum id={id}/>

                <Link to={
                    "/Update"}
                    state={{id}}
                >
                    <AiIcons.AiOutlineEdit/>
                </Link>
            </div>
            
        </>
    )

}