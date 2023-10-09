import React from "react";
import "../styles/Style.css";
import OrangeSprites from "../images/Orange_Sprites.png";
import PurpleSprites from "../images/Purple_Sprites.png";
import PinkSprites from "../images/Pink_Sprites.png";

const LOGIN_URI = "http://localhost:3001/login";


function LoginPage(){
  return( 
    <div>
      <div>
        <img src={OrangeSprites} alt="Orange Sprites" />
        <br/>
        <a href={ LOGIN_URI } className="login-button">LOG IN WITH SPOTIFY</a>
        <br/>
        <img src={PurpleSprites} alt="Purple Sprites" />
        <br/>
        <img src={PinkSprites} alt="Pink Sprites" />
      </div>
    </div>
  );
}; 

export default LoginPage;