import "../styles/Navbar.css";
import { useState } from "react";
import {HiOutlineMenu, HiX} from "react-icons/hi"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">


      {/* Mobile navbar */}
      <div className="nav-container">
        <img
          src={require("../assets/icons/vinyl.png")}
          alt="icon of a vinyl"
          className="nav-icon"
        />

        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            {isMenuOpen ? (
              <HiX onClick={toggleMenu} className="burger-icon" />
            ) : (
              <HiOutlineMenu onClick={toggleMenu} className="burger-icon" />
            )}
            <div className="menu-content">
            <ul>
              <li>Home</li>
              <li>Search</li>
              <li>Genre</li>
              <li>Add Album</li>
            </ul>
          </div>
          </div>
      </div>
    </nav>
  );
};
