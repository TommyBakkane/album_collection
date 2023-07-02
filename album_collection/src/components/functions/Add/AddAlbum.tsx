import { ChangeEvent, useState } from "react";
import { AlbumService } from "../../../services/AlbumService";
import { IAlbum } from "../../../interfaces/IAlbum";
import { ImageUploadService } from "../../../services/ImageUploadService";
import "./AddFunction.css"

export const AddAlbum = () => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [artist, setArtist] = useState<string>("");
    const [genre, setGenre] = useState<string>("");
    const [year, setYear] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);

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
                setGenre(value);
                break;
            case "year":
                setYear(parseInt(value));
                break;
            case "rating":
                setRating(parseInt(value));
                break;
        }
    }

    const addAlbum = async () => {
        const album: IAlbum = {
            title,
            image,
            artist,
            genre,
            year,
            rating,
        }
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
    }

    console.log(title);

    return(
        <>
        <section className="add-container" id="add-function">

            <label
                className="add-header"
                >Add Album:
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
                type="number"
                placeholder="Release Year"
                name="year"
                onChange={changeHandler}
            />

            <input
                className="text-input"
                type="number"
                placeholder="Rating"
                name="rating"
                onChange={changeHandler}
            />

            <label>
                <input 
                    className="file-input" 
                    onChange={changeHandler} 
                    type="file"
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

        <section className="album-preview">
        <div className="title-container__preview">
                <div>
                    <h1 className="album-title__preview">{title}</h1>
                    <h5 className="album-artist__preview">{artist}</h5>
                </div>
            </div>
            <div className="image-container__preview">
                <img className="image" src={image} alt={title}/>
                <div className="info-container__preview">
                    <h2 className="album-rating__preview">{rating}</h2>
                    <h5 className="album-genre__preview">Genre: {genre}</h5>
                    <h5 className="album-year__preview">Release Year: {year}</h5>
                </div>
            </div>
        </section>
        </>
    )
}