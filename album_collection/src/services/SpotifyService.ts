import { FormEvent} from "react";
import axios from "axios";

export const SpotifyService = (()=> {

    const getAlbums = async (token: string) => {
        try {
            const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: "mac miller",
                    type: "artist"
                }
            });
            console.log(data)
            return data;
        } catch (error) {
            console.log(error)
        }
        
    }

      
    const searchArtists = async (token: string, search: string) => {   
        try {
            const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: search,
                    type: "artist"
                }
            });
            console.log(data)
            return data;
        } catch (error) {
            console.log(error)
        }
        
    }

return{
    searchArtists,
    getAlbums   
}
})();