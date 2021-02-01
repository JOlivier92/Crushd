import React from "react";
import "./animate.css";

const VideosIndexItem = ({ firebaseURL }) => {
  return (
    <div>
      <h1>Your bachelorettes</h1>
      <video
        id="movie"
        src={firebaseURL}
        height=""
        width="400px"
        autoPlay
        controls
        muted
        loop
        play="true"
      >
        {" "}
      </video>
    </div>
  );
};

export default VideosIndexItem;
