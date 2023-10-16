import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../interfaces/IAlbum";
import { AlbumService } from "../services/AlbumService";
import * as AiIcons from "react-icons/ai";
import {FaTrashCan} from "react-icons/fa6";
import "../styles/Detail.css"

export const Detail  = () => {
    const location = useLocation();
    const id = location.state?.id;

    const [album, setAlbum] = useState<IAlbum>();

    useEffect(() => {
        const fetchAlbum = async () => {
            const album = await AlbumService.getAlbumById(id);
            setAlbum(album);
        };
        fetchAlbum();
    }, [id]);

    const handleDelete = async () => {
        if (album && album.id !== undefined){
        try {
            await AlbumService.deleteAlbum(album?.id);
            alert("Album deleted");
        }catch (error){
            console.error("Error deleting album:", error);
        }
    }else {
        console.error("Album not found");
    }
    };

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
                <img src={`https://localhost:7180/images/${album?.image}`} alt={album?.title} width="300px" className="detail-image"/>
            </div>

            <div className="detail-info">
                <h2 className="detail-rating">{album?.rating}%</h2>
                <h5 className="detail-genre">Genre: {album?.genre}</h5>
                <h5 className="detail-release">Release Year: {album?.year}</h5>
            </div>

             
            <div className="function-container">

            <div onClick={handleDelete}>
                <FaTrashCan />
                </div>
            
                <Link 
                to={"/update"}
                state={{id}} 
                className="edit-icon">
                    <AiIcons.AiTwotoneEdit />
                </Link>
            </div>
        </div>
    )

}