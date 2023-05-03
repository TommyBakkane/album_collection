import {FC} from 'react';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';
import "./allAlbum.css"

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist}) => {
    return(      
        <Link to={
            `/Album`}
            state={{id}}
        className='album-container__home'>


            <article className='album-card__home'>
                <h3 className='album-title__home'>{title}</h3>
                <img className='album-cover__home' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px"/>
                <h5 className='album-artist__home'>{artist}</h5>
            </article>
        </Link>  
    );
}

