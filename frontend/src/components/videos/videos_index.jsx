import React from "react";
import Heart from "./like-heart.svg";
import './videos_index.css';

const FIREBASE_VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/userVideo_5bcd152cad51222e4005d4a5.mp4?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9";

class VideosIndex extends React.Component {
  render() {
    return (
      <div className="videos-index-view">
        <h1>Shivani, 24</h1>
        <video
          id="movie"
          src={FIREBASE_VIDEO_URL}
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
        <div className="video-view-btns">
          <div className="btn-outer-one">
            <div className="btn-inner-one">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="btn-outer-two">
            <div className="btn-inner-two">
              <img src={Heart} alt="like" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default VideosIndex;
