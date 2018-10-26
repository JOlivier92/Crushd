import React from "react";

const FIREBASE_VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/userVideo_5bcd152cad51222e4005d4a5.mp4?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9";

class VideosIndex extends React.Component {
  render() {
    return (
      <div className="videos-index-view">
        <h1>This is the videos index section</h1>
        <video
          id="movie"
          src={FIREBASE_VIDEO_URL}
          height="600px"
          width="600px"
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
  }
}

export default VideosIndex;
