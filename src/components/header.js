import React from "react";
import "../styles/Style.css"; 
import Logo from "../images/Logo.png";

const logoStyle = { 
    width: "525px"
};

function Header() {
    // Import result is the URL of your image
    return(
        <header>
            <div class="score">
                <div class="left">SCORE: 000000</div>
                <div class="right">HIGH SCORE: 999999</div>
            </div>
            <img style={logoStyle} src={Logo} alt="Logo" />
        </header>
    );
  }
  
  export default Header;