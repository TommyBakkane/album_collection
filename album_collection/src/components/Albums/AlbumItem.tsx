import {FC} from 'react';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../interfaces/IAlbum';

export const AlbumItem: FC<IAlbum> = ({id, title, image, artist}) => {
    return(      
        <Link to={
            `/Album`}
            state={{id}}
        className='album-card'>
                <img className='album-cover' src={`https://localhost:7180/images/${image}`} alt={title} width="300px" height="300px"/>
                <div className='card-body'>
                    <h1 className='title--medium card-title'>{title}</h1>
                    <p className='title--small card-sub-title'>{artist}</p>
                </div>
        </Link>  
    );
}

