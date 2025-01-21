import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [gifSrc, setGifSrc] = useState(
    "https://media.tenor.com/Vy46BTSo3hsAAAAC/bear-love.gif"
  );
  const [message, setMessage] = useState("Ready to spend the entire life with me?");
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const maxHeight = window.innerHeight;
  const maxWidth = window.innerWidth;

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleYesClick = () => {
    setGifSrc("https://media.tenor.com/KFkmX5T_5LEAAAAC/love-you-brown-bear.gif");
    setMessage("Thank you so much!!! and I love you soooo sooo soo soo soo soo.....much");
  };

  const handleNoClick = () => {
    setGifSrc("https://media.tenor.com/jsQumF2np4kAAAAC/bear-shocked.gif");
    setMessage("HOW THE FUCK, but anyways, you love me.");
  };

  const handleNoHover = () => {
    setNoButtonStyle({
      transform: `translate(${getRandomNumber(-maxWidth / 5, maxWidth / 5)}px, ${getRandomNumber(
        -maxHeight / 5,
        maxHeight / 5
      )}px)`,
    });
  };

  return (
    <div className="main">
      <img className="gif" src={gifSrc} alt="bear gif" />
      <h3>{message}</h3>
      <div className="btn-group">
        <div className="btn" id="yes" onClick={handleYesClick}>
          <p>YES</p>
        </div>
        <div
          className="btn floating"
          id="no"
          onClick={handleNoClick}
          onMouseEnter={handleNoHover}
          style={noButtonStyle}
        >
          <p>NO</p>
        </div>
      </div>
    </div>
  );
};

export default App;
