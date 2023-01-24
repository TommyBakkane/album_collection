import {FC, useContext} from 'react';
import { AlbumContext } from '../../context/AlbumContext';
import { IAlbum } from '../../interfaces/IAlbum';
import './Album.css';

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist, genre, year}) => {
    const albumContext = useContext(AlbumContext);

    return(
        <article className='album-card'>
            <h3 className='album-title'>{title}</h3>
            <img className='album-cover' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px"/>
            <h5 className='album-artist'>{artist}</h5>
        </article>
    );
}
