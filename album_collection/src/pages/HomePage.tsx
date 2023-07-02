import { ShowGenre } from "../components/GenreList/ShowGenre"
import { Navbar } from "../components/Navigation/Navbar"


export const HomePage = () => {  
    return (
        <div className='page-container'>
            <Navbar />
            <ShowGenre />
            <div className="side-container">
                <h2>sidebar</h2>
            </div>
            <div className="footer"></div>
        </div>
    )
}

