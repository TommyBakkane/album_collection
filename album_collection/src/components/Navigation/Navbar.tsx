import * as AiIcon from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HomePage } from '../../pages/HomePage';

export const Navbar = () => {

    return(
        <>  
            <nav className="navbar">
                <ul className="navbar-links">
                    <li className="navbar-link">
                        <Link to="/Home"><AiIcon.AiFillHome/></Link>
                    </li>
                    <li className="navbar-link">
                        <a><AiIcon.AiOutlineSearch/></a>
                    </li>
                    <li className="navbar-link">
                        <a><AiIcon.AiOutlineUser/></a>
                    </li>
                    <li className="navbar-link">
                        <a href="/Add"><AiIcon.AiFillPlusCircle/></a>
                    </li>
                    
                    
                </ul>
            </nav>
        </>
    )
}