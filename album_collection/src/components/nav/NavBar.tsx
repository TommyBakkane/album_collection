import { Link, Route, Routes } from "react-router-dom";
import { AddPage } from "../../pages/AddPage";
import { AlbumPage } from "../../pages/AlbumPage";
import {TbVinyl} from 'react-icons/tb'
import "./NavBar.css"

export const NavBar = () => {
    return (
    <>
      <nav className="navbar">
        <a href="Home">
          <TbVinyl className="logo"/>
        </a>

        <div className="navbar-links">
          <ul>
            <li><Link to="Home"><h4>Home</h4></Link></li>
            <li><Link to="Add"><h4>Add</h4></Link></li>
          </ul>
        </div>

       </nav>


      <Routes>
        <Route path="Home" element={ <AlbumPage/> }></Route>
        <Route path="Add" element={ <AddPage/> }></Route>
      </Routes>
    </>
        
    );
}