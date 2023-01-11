import {FC, useContext} from 'react';
import { AlbumContext } from '../../context/AlbumContext';
import { IAlbum } from '../../interfaces/IAlbum';

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist, genre, releaseDate, rating}) => {
    const albumContext = useContext(AlbumContext);

    return(
        <article className='album__card'>
            <img className='album__cover' src={`https://localhost:7119/images/${image}`} alt={title} />
        </article>
    )
}