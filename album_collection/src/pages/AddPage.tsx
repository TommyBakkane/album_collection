import { Navbar } from "../components/Navigation/Navbar"
import { AddAlbum } from "../components/functions/Add/AddAlbum"

export const AddPage = () => {
    return (
        <div className='page-container'>
            <Navbar />
            <AddAlbum />
        </div>
    )
}

