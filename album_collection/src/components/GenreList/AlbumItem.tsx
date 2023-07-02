import {FC} from 'react';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';

export const AlbumItem: FC<IAlbum> = ({id, title, image}) => {
    return(      
        <Link to={
            `/Album`}
            state={{id}}
        className='album-container__home'>


            <article className='album-card'>
                <img className='album-cover' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px"/>
            </article>
        </Link>  
    );
}

