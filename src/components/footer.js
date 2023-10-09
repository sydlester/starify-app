import React from "react";
import "../styles/Style.css"; 
import Ships from "../images/Ships.png";

const imgStyle = { 
    width: "15%",
};

function Footer() {
    // Import result is the URL of your image
    return(
        <footer>
            <img style={imgStyle} src={Ships} alt="Ships" />
            <br/>
            <p>sydney lester | privacy policy</p>
        </footer>
    );
  }
  
  export default Footer;