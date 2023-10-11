import React, { useState, useEffect } from "react";
import "./styles/Style.css";
import LoginPage from "./pages/LoginPage";
import TopTrackList from "./pages/TopTrackList";
import { token } from "./spotify";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App  = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
      <div>
        <Header />
        <div>
          {accessToken ? <TopTrackList /> : <LoginPage />}
        </div>
        <Footer />
      </div>
  );
}

export default App;