import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="header-container">
      <div className="header-text">
        <h1 className="header-title">Album Collection</h1>
        <img src={require("../assets/icons/vinyl.png")} alt="vinyl icon" className="header-icon"/>
      </div>   
      
    </div>
  );
};