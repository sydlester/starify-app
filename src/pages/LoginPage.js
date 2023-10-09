import React from "react";

const LOGIN_URI = "http://localhost:3001/login";


function LoginPage(){
  return <a href={ LOGIN_URI }>log in with spotify</a>;
}; 

export default LoginPage;