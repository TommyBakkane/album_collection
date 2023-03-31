import { useState, ChangeEvent, useContext, useEffect } from "react";
import { AlbumContext } from "../../../context/AlbumContext";
import { AlbumService } from "../../../services/AlbumService";
import { IAlbum } from "../../../interfaces/IAlbum";
import { ImageUploadService } from "../../../services/ImageUploadService";
import { useLocation } from "react-router-dom";

export const UpdateAlbum = () => {

    const location = useLocation();
    const id = location.state?.id;

    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [artist, setArtist] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

    const albumContext = useContext(AlbumContext);

    const getAlbumFromService = async (id: number) => {
        console.log("I am trying to get:" + id);
        const album = await AlbumService.getAlbumById(id);
        setTitle(album.title);
        setArtist(album.artist);
        setGenre(album.genre);
        setYear(album.year);
        setRating(album.rating)
        setImageFile(album.imageFile)
        setImage(album.image);
    };

    useEffect(()=> {
        if (albumContext?.albumToEdit && albumContext.albumToEdit.id) {
            getAlbumFromService(albumContext?.albumToEdit.id)
        }
    },[albumContext?.albumToEdit?.id]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case "title":
                setTitle(value);
                break;
            case "artist":
                setArtist(value);
                break;
            case "genre":
                setGenre(value);
                break;
            case "year":
                setYear(parseInt(value));
                break;
            case "rating":
                setRating(parseInt(value));
                break;
            case "image":
                const {files} = e.target;
                if (files != null) {
                    const file = files[0]
                setImageFile(file);
                setImage(file.name)
            }
        }
    };

    const editAlbum = async () => {
        const album: IAlbum = {
            title,
            artist,
            genre,
            year,
            rating,
            image
        };
        await AlbumService.updateAlbum(album);
        window.location.reload();
    };

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
        } 
    }

    const submitChange = () => {
        editAlbum();
        uploadImage();
        window.location.reload();
    }

    return(

        <section className="update-container" id="update-character">

            <input 
                className="text-input" 
                type="text" 
                placeholder="Title" 
                onChange={changeHandler}
                name='title'
                value={title}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Artist" 
                onChange={changeHandler}
                name='artist'
                value={artist}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Genre"
                onChange={changeHandler}
                name='genre'
                value={genre}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Year" 
                onChange={changeHandler}
                name='year'
                value={year}
            />

            <input 
                className="text-input" 
                type="text" 
                placeholder="Rating"
                onChange={changeHandler}
                name='rating'
                value={rating}
            />

            <input 
                className="file-input" 
                onChange={changeHandler} 
                type="file"
                placeholder="Image"
                name="image"
            /> 

            <button 
                className="btn" 
                onClick={submitChange}>
                Save Changes
            </button>

        </section>
    )
};
