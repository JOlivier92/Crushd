import React from "react";
import "./animate.css";

const VideosIndexItem = ({ firebaseURL }) => {
  return (
    <div className="videos-index-view">
      <h1>This is the videos index section</h1>
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
