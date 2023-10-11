import React from "react";
import "../styles/Style.css"; 
import Logo from "../images/Logo.png";


function Header() {
    // Import result is the URL of your image
    return(
        <header>
            <img className="logo" src={Logo} alt="Logo" />
        </header>
    );
  }
  
  export default Header;