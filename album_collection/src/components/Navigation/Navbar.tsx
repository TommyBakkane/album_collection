import * as AiIcon from 'react-icons/ai';
import * as BiIcon from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

export const Navbar = () => {

    return(
        <nav className="navbar-container">
            <ul className="navbar-links">
                <li className="navbar-link">
                    <Link to="/Home"><BiIcon.BiHome/></Link>
                </li>
                <li className="navbar-link">
                    <a><AiIcon.AiOutlineSearch/></a>
                </li>
                <li className="navbar-link">
                    <a><AiIcon.AiOutlineUser/></a>
                </li>
                <li className="navbar-link">
                    <a href="/Add"><BiIcon.BiPlusCircle/></a>
                </li>
                
                
            </ul>
        </nav>
    )
}