import { ChangeEvent, useState } from "react";
import { AlbumService } from "../../services/AlbumService";
import { IAlbum } from "../../interfaces/IAlbum";
import { ImageUploadService } from "../../services/ImageUploadService";
import "../../styles/Add.css";

export const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [artist, setArtist] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "image":
        const { files } = e.target;
        if (files != null) {
          const file = files[0];
          setImageFile(file);
          setImage(file.name);
        }
        break;
      case "artist":
        setArtist(value);
        break;
      case "year":
        setYear(parseInt(value));
        break;
      case "rating":
        setRating(parseInt(value));
        break;
    }
  };

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "genre") {
      setGenre(value);
    }
  };

  const addAlbum = async () => {
    const album: IAlbum = {
      title,
      image,
      artist,
      genre,
      year,
      rating,
    };
    console.log(album);
    await AlbumService.addAlbum(album);
  };

  const uploadImage = async () => {
    if (image != null) {
      ImageUploadService.uploadImage(imageFile!);
      console.log(imageFile);
    }
  };

  const submitAlbum = () => {
    addAlbum();
    uploadImage();
  };

  console.log(title);

  return (
    <div className="add-container">
      <h2 className="add-title">Add new Album</h2>
      <div className="add-preview-container">
        <form className="add-form" id="add-function">
          <label className="form-label">Title</label>
          <input
            className="text-input"
            type="text"
            placeholder="Title"
            name="title"
            onChange={changeHandler}
          />
          <label className="form-label">Artist</label>
          <input
            className="text-input"
            type="text"
            placeholder="Artist"
            name="artist"
            onChange={changeHandler}
          />
          <label className="form-label">Genre</label>
          <select
            className="text-input"
            name="genre"
            onChange={selectChangeHandler}
            style={{ width: "98%" }}
          >
            <option value="">Select Genre</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Folk">Folk</option>
            <option value="R&B">R&B</option>
            <option value="Country">Country</option>
            <option value="Soul">Soul</option>
            <option value="Electronic">Electronic</option>
          </select>

          <label className="form-label">Release Year</label>
          <input
            className="text-input"
            type="number"
            placeholder="Release Year"
            name="year"
            min="0"
            max="3000"
            onChange={changeHandler}
          />

          <label className="form-label">Rating</label>
          <input
            className="text-input"
            type="number"
            min="0"
            max="100"
            placeholder="Rating"
            name="rating"
            onChange={changeHandler}
          />

          <label className="form-label">Album Cover</label>
          <label>
            <input
              className="file-input"
              onChange={changeHandler}
              type="file"
              name="image"
            />
          </label>
        </form>

        <section className="album-preview">
          <div className="title-container__preview">
            <div>
              <h1 className="album-title__preview">
                {title ? title : "Title"}
              </h1>
              <h5 className="album-artist__preview">
                {artist ? artist : "Artists"}
              </h5>
            </div>
          </div>
          <div className="image-container__preview">
            <img className="image" src={image} alt={title} />
            <div className="info-container">
              <h2 className="album-rating__preview">
                {rating ? rating : "100"}
              </h2>
              <h5 className="album-genre">{genre ? genre : "Genre"}</h5>
              <h5 className="album-year__preview">
                {year ? year : "Release Year"}
              </h5>
            </div>
          </div>
        </section>
      </div>
      <div className="btn-container">
        <input
              className="btn"
              type="button"
              value="Add Album"
              onClick={submitAlbum}
            />
        </div>
    </div>
  );
};
