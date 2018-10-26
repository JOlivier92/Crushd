import React from "react";
import Heart from "./like-heart.svg";
import "./videos_index.css";

import VideosIndexItem from "./videos_index_item";
import "./animate.css";

const FIREBASE_VIDEO_URL =
  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/userVideo_5bd392cc24e31b0cd2834338.mp4?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    this.checkKey = this.checkKey.bind(this);
    this.filterVideos = this.filterVideos.bind(this);
  }

  async componentDidMount() {
    document.onkeydown = this.checkKey;
    this.props.fetchVideos();
    if (this.props.videos.length > 0) {
      this.filterVideos();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videos.length > 0) {
      this.filterVideos(nextProps.videos);
    }
  }

  filterVideos(videos) {
    let filteredVideos = [];

    for (let i = 0; i < videos.length; i++) {
      if (
        videos[i].gender === this.props.currentUser.sexual_preference &&
        videos[i].sexual_preference === this.props.currentUser.gender
      ) {
        filteredVideos.push(videos[i]);
      }
    }

    console.log(filteredVideos);

    this.setState({
      videos: filteredVideos
    });
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
    console.log(this.state.videos);
    return (
      <div className="videos-index-container">
        {this.state.videos.map(video => {
          return (
            <VideosIndexItem
              key={video.id}
              firebaseURL={`https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/${
                video.videoURL
              }?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9`}
            />
          );
        })}
      </div>
    );
  }
}

export default VideosIndex;
