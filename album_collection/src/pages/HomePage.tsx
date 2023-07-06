import { Albums } from "../components/Albums/Albums"
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navigation/Navbar"
import '../styles/HomePage.css';


export const HomePage = () => {  
    return (
        <div className="page-wrapper">  
            <Navbar />
            <Header />
            <Albums />
        </div>
    )
}

