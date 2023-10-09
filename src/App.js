import React, { useState, useEffect } from "react";
import "./styles/Style.css";
import LoginPage from "./pages/LoginPage";
import TopTrackList from "./pages/TopTrackList";
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
          {accessToken ? <TopTrackList /> : <LoginPage />}
        </div>
        <Footer />
      </div>
  );
}

export default App;