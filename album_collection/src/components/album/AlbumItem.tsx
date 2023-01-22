import {FC, useContext} from 'react';
import { AlbumContext } from '../../context/AlbumContext';
import { IAlbum } from '../../interfaces/IAlbum';

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist, genre}) => {
    const albumContext = useContext(AlbumContext);

    return(
        <article className='album-card'>
            <h3 className='album-title'>{title}</h3>
            <img className='album-cover' src={`https://localhost:7119/images/${image}`} alt={title} />
        </article>
    );
}
