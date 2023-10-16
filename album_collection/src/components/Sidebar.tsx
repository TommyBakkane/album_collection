import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import React from "react";
import "../styles/Sidebar.css";

type ContentType = "Albums" | "AddAlbum";

interface SidebarProps {
  changeContent: (newContent: ContentType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ changeContent }) => {
  return (
    <div className="sidebar-container">
      <div className="profile-container">
        <img
          src={require("../assets/images/profile-img.jpg")}
          alt="profile"
          className="profile-img"
        />
        <p>Tommy</p>
      </div>

      <ul className="sidebar-list">
        <li className="list-item" onClick={() => changeContent("Albums")}>
          <AiFillHome
            className="sidebar-icon"
          />
          <span>Home</span>
        </li>
        <li className="list-item">
          <AiOutlineSearch className="sidebar-icon" />
          <span>Search</span>
        </li>
      </ul>

      <div className="underline"></div>

      <ul className="sidebar-list">
        <li className="list-item">
          <BsFillPersonFill className="sidebar-icon" />
         <span>Profile</span>
         </li>
        <li className="list-item" onClick={() => changeContent("AddAlbum")}>
          <AiOutlinePlus className="sidebar-icon" />
          <span>New Album</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
