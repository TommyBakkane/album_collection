import { Link} from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import "./Navbar.css"
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      
      <div className="navbar">
      <h1 className="title">Album Collection</h1>
        <Link to="#" className="menu-bars">
          <HiIcons.HiMenu onClick={showSidebar}/>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <HiIcons.HiX />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>

      </nav>
      
      </IconContext.Provider>
    </>
        
    );
}