import axios from 'axios';
import { IAlbum } from '../interfaces/IAlbum';

export const AlbumService = (()=> {
    const endpoints = {"Albums": "https://localhost:7275/Album"}

    const getAlbums = async () => {
        const response = await axios.get(endpoints.Albums);
        return response.data
    }

    const getAlbumById = async (id: number) => {
        const response = await axios.get(`${endpoints.Albums}/${id}`);
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
        const response = await axios.delete(`${endpoints.Albums}/${id}`);
        return response.data;
    }

    return{
        getAlbums,
        getAlbumById,
        addAlbum,
        updateAlbum,
        deleteAlbum
    }
})(); 