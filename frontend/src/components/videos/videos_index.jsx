import React from "react";
import './videos_index.css';
import Loader from "react-loader-spinner";
import VideosIndexItem from "./videos_index_item";
import "./animate.css";

const FIREBASE_VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/userVideo_5bcd152cad51222e4005d4a5.mp4?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: true
    }

    this.checkKey = this.checkKey.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    document.onkeydown = this.checkKey;
    await this.props.fetchVideos(this.props.currentUser.id);
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  checkKey(e) {
    e = e || window.event;

    if (e.keyCode === "38") {
      // up arrow
    } else if (e.keyCode === "40") {
      // down arrow
    } else if (e.keyCode === "37") {
      // left arrow
    } else if (e.keyCode === "39") {
      // right arrow
      let video = document.getElementsByClassName("videos-index-view")[0];
      video.classList.toggle("animated");
      video.classList.toggle("fadeOutRight");
    }
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    }
    return (
      <div className="videos-index-container">
        <VideosIndexItem firebaseURL={FIREBASE_VIDEO_URL} />
      </div>
    );
  }
}


export default VideosIndex;
