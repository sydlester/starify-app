import React, { useState, useEffect } from "react";
import "./styles/Style.css";
import LoginPage from "./pages/LoginPage";
import TimeFrame from "./pages/TimeFrame";
import { token } from "./spotify";
import Header from "./components/header";
import Footer from "./components/footer";


const App  = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
      <div>
        <Header />
        <div className="center-page">
          {accessToken ? <TimeFrame /> : <LoginPage />}
        </div>
        <Footer />
      </div>
  );
}

export default App;