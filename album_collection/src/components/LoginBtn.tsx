import { useEffect, useState } from "react"


export const LoginBtn = () => {  
    const CLIENT_ID = "62bf343d6e6c4ab8842ca7e7100f5f7a"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
    
        if (!token && hash) {
            const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1] ?? null;

            window.location.hash = "";
            window.localStorage.setItem("token", token || "");   
        }
        setToken(token || "");
    }, []);

    const logout = () => {
        window.localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <>  
            {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
            : <button onClick={logout}>Logout</button>
            }

        </>
    )
}

 