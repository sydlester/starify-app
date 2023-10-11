import React from "react";
import "../styles/Style.css"; 
import Ships from "../images/Ships.png";
import { logout } from "../spotify";

const imgStyle = { 
    width: "248px",
};

function Footer() {
    // Import result is the URL of your image
    return(
        <footer>
            <img style={imgStyle} src={Ships} alt="Ships" />
            <br/>
            <div>
                <a className="links" href='https://github.com/sydlester'>SYDNEY LESTER</a>
                <span className="links"> | </span>
                <a className="links" href='/'>PRIVACY POLICY</a>
                <span className="links"> | </span>
                <a className='links' href='/' onClick={logout}>LOG OUT</a>
            </div>
        </footer>
    );
  }
  
  export default Footer;