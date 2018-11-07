import React from "react";
import YouTube from "react-youtube";
import Bday from "./Bday.jsx"
const Youtube = () => {
  return (
    <div className="video-container">
      <Bday />
      <YouTube videoId="iWZmdoY1aTE" opts={opts} />
    </div>
  );
};

const opts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 0,
    loop: 1
  }
};

export default Youtube;
