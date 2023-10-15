import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import * as AiIcons from "react-icons/ai";
import {AiTwotoneEdit} from "react-icons/ai";
import { DeleteAlbum } from "../functions/DeleteAlbum";
import "../../styles/AlbumDetail.css"

export const AlbumDetail  = () => {
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
        <div className="detail-container">
            <Link to="/">
                <AiIcons.AiOutlineArrowLeft className="icon-detail" />
            </Link>

            <div className="detail-header">
                    <h1 className="detail-title">{album?.title}</h1>
                    <h5 className="detail-artist">{album?.artist}</h5>
            </div>

            <div className="detail-image-container">
                <img src={`https://localhost:7180/images/${album?.image}`} alt={album?.title} className="detail-image"/>
            </div>

            <div className="detail-info">
                <h2 className="detail-rating">{album?.rating}%</h2>
                <h5 className="detail-genre">Genre: {album?.genre}</h5>
                <h5 className="detail-release">Release Year: {album?.year}</h5>
            </div>

            {/* 
            <div className="function-container">

                <DeleteAlbum id={album?.id!} />
    
                <Link 
                to={"/update"}
                state={{id}} 
                className="edit-icon">
                    <AiTwotoneEdit />
                </Link>
            </div>
            */}
        </div>
    )

}