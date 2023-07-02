import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import './Album.css';
import * as AiIcons from "react-icons/ai";
import {AiTwotoneEdit} from "react-icons/ai";
import { DeleteAlbum } from "../functions/Delete/DeleteAlbum";

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

    return(
        <div className="album-container__album">
            <div className="title-container">
                <Link to="/Home">
                    <AiIcons.AiOutlineArrowLeft className="back-icon" />
                </Link>
                <div>
                    <h1 className="album-title">{album?.title}</h1>
                    <h5 className="album-artist">{album?.artist}</h5>
                </div>
                <AiIcons.AiOutlineUser className="user-icon" />
            </div>
            <div className="image-container">
                <img className="image" src={`https://localhost:7180/images/${album?.image}`} alt={album?.title}/>
                <div className="info-container">
                    <h2 className="album-rating">{album?.rating}</h2>
                    <h5 className="album-genre">Genre: {album?.genre}</h5>
                    <h5 className="album-year">Release Year: {album?.year}</h5>
                </div>
            </div>

            <div className="function-container">

                <DeleteAlbum id={album?.id!} />
    
                <Link 
                to={"/Update"}
                state={{id}} 
                className="edit-icon">
                    <AiTwotoneEdit />
                </Link>
            </div>
        </div>
    )

}