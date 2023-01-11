import { useEffect, useState, createContext, ReactNode } from "react";
import { IAlbumContext } from "../interfaces/IAlbumContext";
import { IAlbum } from "../interfaces/IAlbum";
import { AlbumService } from "../services/AlbumService";

export const AlbumContext = createContext<IAlbumContext | null>(null);

type Props = {
    children: ReactNode
}

const AlbumProvider = ({children} : Props) => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [albumToEdit, setAlbumToEdit] = useState<IAlbum | null>(null);
    

    useEffect(()=>{
        getAlbumsFromService();
    }, [])

    const getAlbumsFromService = async () => {
        const albumsFromService = await AlbumService.getAlbums();
        setAlbums(albumsFromService);
    }

    const getAlbumById = async (id: number) => {
        await AlbumService.getAlbumById(id);
    }
 
    const deleteAlbumById = async (id: number) => {
        await AlbumService.deleteAlbum(id);
    }

    const addAlbum = async (album : IAlbum) => {
        await AlbumService.addAlbum(album);
    }

    return(
        <AlbumContext.Provider value={{albums ,albumToEdit, setAlbumToEdit, getAlbumById, deleteAlbumById, addAlbum}}>
            {children}
        </AlbumContext.Provider>
    )

}

export default AlbumProvider