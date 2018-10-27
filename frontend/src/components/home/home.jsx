import React from "react";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import VideosIndexContainer from "./../videos/videos_index_container";
import UploadVideoContainer from "./../upload_video/upload_video_container";
import "./home.css";
import RightArrow from "./right-arrow.png";
import LeftArrow from "./left-arrow.png";
import Loader from "react-loader-spinner";

import { createNewVideo } from "../../util/video_api_util";

const videoType = "video/webm";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videos: [],
      navOption: true,
      mainScreen: "videosIndex",
      recorded: false,
      videos: [],
      seconds: "30",
      loading: true
    };

    this.homeNavClicked = this.homeNavClicked.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: false });
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  homeNavClicked() {
    this.setState({
      navOption: !this.state.navOption
    });
  }

  render() {
    const {
      navOption,
      mainScreen,
      recording,
      videos,
      recorded,
      loading
    } = this.state;

    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    }

    let buttonOne = null;
    let buttonTwo = null;
    if (navOption) {
      buttonOne = "nav-chosen-button active";
      buttonTwo = "nav-chosen-button";
    } else {
      buttonOne = "nav-chosen-button";
      buttonTwo = "nav-chosen-button active";
    }

    return <div className="home-content-section">
        <div className="home-nav-container">
          <div className="home-nav">
            <button className={buttonOne} onClick={this.homeNavClicked}>
              Responses
            </button>
            <button className={buttonTwo} onClick={this.homeNavClicked}>
              Matches
            </button>
          </div>
          {navOption ? <ResponsesIndexContainer /> : <MessagesIndexContainer />}
        </div>
        {mainScreen === "videosIndex" ? <VideosIndexContainer /> : <UploadVideoContainer />}
        <div className="arrow-keys">
          <div className="arrow">
            <img className="arrow-key" src={LeftArrow} />
            <p className="arrow-text">NAH</p>
            &emsp;
            <img className="arrow-key" src={RightArrow} />
            <p className="arrow-text">START RECORDING</p>
          </div>
        </div>
      </div>
  }
}

export default Home;
