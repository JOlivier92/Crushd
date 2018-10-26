import React from "react";
import Heart from "./like-heart.svg";
import './videos_index.css';

import VideosIndexItem from "./videos_index_item";
import "./animate.css";

const FIREBASE_VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/userVideo_5bcd152cad51222e4005d4a5.mp4?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }

    this.checkKey = this.checkKey.bind(this);
  }

  async componentDidMount() {
    document.onkeydown = this.checkKey;
    await this.props.fetchVideos();
    debugger;
  }

  checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
      // up arrow
    } else if (e.keyCode == "40") {
      // down arrow
    } else if (e.keyCode == "37") {
      // left arrow
    } else if (e.keyCode == "39") {
      // right arrow
      let video = document.getElementsByClassName("videos-index-view")[0];
      video.classList.toggle("animated");
      video.classList.toggle("fadeOutRight");
    }
  }

  render() {
    return (
      <div className="videos-index-container">
        <VideosIndexItem firebaseURL={FIREBASE_VIDEO_URL} />
      </div>
    );
  }
}


export default VideosIndex;
