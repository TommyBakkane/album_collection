import { ChangeEvent, useState } from "react";
import { AlbumService } from "../../services/AlbumService";
import { IAlbum } from "../../interfaces/IAlbum";
import { ImageUploadService } from "../../services/ImageUploadService";
import "./AddFunction.css"

export const AddAlbum = () => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [artist, setArtist] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [releaseDate, setReleaseDate] = useState<string>("");
    const [rating, setRating] = useState<string>("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        switch (name){
            case "title":
                setTitle(value);
                break;
            case "image":
                const {files} = e.target;
                if (files != null){
                    const file = files[0]
                    setImageFile(file);
                    setImage(file.name)
                }
                break;
            case "artist":
                setArtist(value);
                break;
            case "genre":
                setTitle(value);
                break;
            case "releaseDate":
                setReleaseDate(value);
                break;
            case "rating":
                setRating(value);
                break;
            case "genre":
                setGenre(value);
                break;
        }
    }

    const addAlbum = async () => {
        const album: IAlbum = {
            title,
            image,
            artist,
            genre,
            releaseDate,
            rating
        }
        console.log(album);
        await AlbumService.addAlbum(album)
    }

    const uploadImage = async () => {
        if (image != null) {
            ImageUploadService.uploadImage(imageFile!);
            console.log(imageFile);
            
        } 
    }

    const submitAlbum = () => {
        addAlbum();
        uploadImage();
    };


    return(
        <section className="add-container" id="add-function">

            <label
                className="add-header"
                >Add an Album:
            </label>

            <input 
                className="text-input" 
                type="text" 
                placeholder="Title"
                name="title"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Artist"
                name="artist"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Genre"
                name="genre"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Release Date"
                name="releaseDate"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="text"
                placeholder="Rating"
                name="rating"
                onChange={changeHandler}
            />

            <label className="input-label">
                Press to Add Image
                <input 
                    className="file__input" 
                    onChange={changeHandler} 
                    type="file"
                    placeholder="Image"
                    name="image"
                /> 
            </label>

            <input 
                className="btn" 
                type="button" 
                value="Submit"
                onClick={submitAlbum} 
            />  

        </section>
    )
}