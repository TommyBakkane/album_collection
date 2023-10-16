import axios from 'axios';
import { IAlbum } from '../interfaces/IAlbum';

export const AlbumService = (()=> {
    const endpoints = {
        "Albums": "https://localhost:7180/Album"
    }

    const getAlbums = async () => {
        const response = await axios.get(endpoints.Albums);
        return response.data
    }

    const getAlbumById = async (id: number) => {
        const response = await axios.get(`${endpoints.Albums}/${id}`);
        return response.data
    }
    
    const getAlbumByGenre = async (genre: string) => {
        const response = await axios.get(`${endpoints.Albums}/${genre}`);
        return response.data
    }

    const addAlbum = async (album: IAlbum) => {
        const response = await axios.post(endpoints.Albums, album);
        return response.data
    }

    const updateAlbum = async (album: IAlbum) => {
        const response = await axios.put(`${endpoints.Albums}/${album.id}`, album);
        return response.data
    }

    const deleteAlbum = async (id: number) => {
        try{
        const response = await axios.delete(`${endpoints.Albums}/${id}`);
        if(response.status === 200){
            return;
        }else {
            throw new Error("Error deleting album");
            }
        } catch (error){
            throw error;
        }
    }

    return{
        getAlbums,
        getAlbumById,
        addAlbum,
        updateAlbum,
        deleteAlbum,
        getAlbumByGenre
    }
})(); 