import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TimeFrame from "./pages/TimeFrame";
import { token } from "./spotify";


const App  = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
      <div className="App">
        {accessToken ? <TimeFrame /> : <LoginPage />}
      </div>
  );
}

export default App;