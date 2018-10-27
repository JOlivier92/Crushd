import React from "react";
import Heart from "./like-heart.svg";
import "./videos_index.css";
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
    };

    this.checkKey = this.checkKey.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    document.onkeydown = this.checkKey;
    await this.props.fetchVideos(this.props.currentUser.id);
    await this.sleep(1000);
    this.setState({ loading: false }, () => {
      this.setState(
        {
          videos: this.shuffle(this.props.videos)
        },
        () => (this.videoIndexCount = this.props.videos.length)
      );
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  checkKey(e) {
    e = e || window.event;
    console.log(this.videoIndexCount);
    if (e.keyCode == "38") {
      // up arrow
    } else if (e.keyCode == "40") {
      // down arrow
    } else if (e.keyCode == "37") {
      if (this.videoIndexCount - 1 >= 0) {
        let video = document.getElementsByClassName("videos-index-view")[
          this.videoIndexCount - 1
        ];
        console.log(video);
        video.classList.toggle("animated");
        video.classList.toggle("fadeOutLeft");
        this.videoIndexCount--;
      }
      // left arrow
    } else if (e.keyCode == "39") {
      // right arrow
      if (this.videoIndexCount - 1 >= 0) {
        let video = document.getElementsByClassName("videos-index-view")[
          this.videoIndexCount - 1
        ];
        console.log(video);
        video.classList.toggle("animated");
        video.classList.toggle("fadeOutRight");
        this.videoIndexCount--;
      }
    }
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    }
    return (
      <div className="videos-index-container">
        {this.props.videos.map(video => (
          <VideosIndexItem
            className="video-index-view"
            key={video.id}
            firebaseURL={
              "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/" +
              video.videoURL +
              "?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9"
            }
          />
        ))}
      </div>
    );
  }
}

export default VideosIndex;
