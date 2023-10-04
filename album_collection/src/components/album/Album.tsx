import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
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
        <div className="main-container__album">
            <div className="title-container__album">
                <Link to="/Home">
                    <AiIcons.AiOutlineArrowLeft className="back-icon__album" />
                </Link>
                <div>
                    <h1 className="title__album">{album?.title}</h1>
                    <h5 className="artist__album">{album?.artist}</h5>
                </div>
                <AiIcons.AiOutlineUser className="user-icon__album" />
            </div>
            <div className="image-container__album">
                <img className="cover__album" src={`https://localhost:7180/images/${album?.image}`} alt={album?.title}/>
                <div className="info-container__album">
                    <h2 className="rating__album">{album?.rating}</h2>
                    <h5 className="genre__album">Genre: {album?.genre}</h5>
                    <h5 className="release-year__album">Release Year: {album?.year}</h5>
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