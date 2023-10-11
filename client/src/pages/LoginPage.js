import React from "react";
import "../styles/Style.css";
import OrangeSprites from "../images/Orange_Sprites.png";
import PurpleSprites from "../images/Purple_Sprites.png";
import PinkSprites from "../images/Pink_Sprites.png";

const LOGIN_URI = "http://localhost:3001/login";


function LoginPage(){
  return( 
    <div>
      <div className="login-page">
        <img className="login-sprites" src={OrangeSprites} alt="Orange Sprites" />
        <br/>
        <img className="login-sprites" src={PurpleSprites} alt="Purple Sprites" />
        <br/>
        <a href={ LOGIN_URI } className="login-button">LOG IN WITH SPOTIFY</a>
        <img className="login-sprites" src={PurpleSprites} alt="Purple Sprites" />
        <br/>
        <img className="login-sprites" src={PinkSprites} alt="Pink Sprites" />
      </div>
    </div>
  );
}; 

export default LoginPage;