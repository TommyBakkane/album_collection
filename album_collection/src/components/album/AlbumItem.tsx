import {FC, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AlbumContext } from '../../context/AlbumContext';
import { IAlbum } from '../../interfaces/IAlbum';
import { DeleteAlbum } from '../deleteFunction/DeleteAlbum';
import './Album.css';

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist, genre, year}) => {
    const albumContext = useContext(AlbumContext);

    return(      
        <Link to="/Album" className='album-container'>
            <article className='album-card'>
                <h3 className='album-title'>{title}</h3>
                <img className='album-cover' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px"/>
                <h5 className='album-artist'>{artist}</h5>

                <DeleteAlbum id={id}/>
                
            </article>
        </Link>  
    );
}

