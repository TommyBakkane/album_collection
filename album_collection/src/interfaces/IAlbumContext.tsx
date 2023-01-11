import { IAlbum } from "./IAlbum";

export interface IAlbumContext {
    albums: IAlbum[];
    getAlbumById: (id: number) => void;
    addAlbum: (album: IAlbum) => void;
    albumToEdit: IAlbum | null;
    setAlbumToEdit: (album: IAlbum | null) => any;
    deleteAlbumById: (id: number) => void;



}