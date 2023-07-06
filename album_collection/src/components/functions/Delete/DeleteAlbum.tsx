import { useContext } from "react";
import { IAlbum } from "../../../interfaces/IAlbum";
import { AlbumContext } from "../../../context/AlbumContext";
import { IAlbumContext } from "../../../interfaces/IAlbumContext";
import { FC } from "react";
import {FaTrash} from "react-icons/fa";
import "../../../styles/Delete.css";

export const DeleteAlbum: FC<Pick<IAlbum, "id">> = ({ id }) => {
    const {albums, deleteAlbumById} = useContext(AlbumContext) as IAlbumContext;

    const album = albums.find(thisAlbum => {
        return thisAlbum.id === id;
    });

    const deleteAlbum = () => {
        if (window.confirm("Are you sure you want to delete: " + album?.title + "?")) {
            deleteAlbumById(id!);
            window.location.reload();
        }else{
            return;
        }
    }

    return (
        <button className="delete-btn" onClick={deleteAlbum}>
            <FaTrash/>
        </button>
    )
}