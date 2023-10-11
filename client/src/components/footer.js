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
            <div className="foot">
                <a className="links" href='https://github.com/sydlester'>SYDNEY LESTER</a>
                <p className="links"> | </p>
                <a className="links" href='/'>PRIVACY POLICY</a>
                <p className="links"> | </p>
                <a className='links' href='/' onClick={logout}>LOG OUT</a>
            </div>
        </footer>
    );
  }
  
  export default Footer;