import React from "react";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import VideosIndexContainer from "./../videos/videos_index_container";
import UploadVideoContainer from "./../upload_video/upload_video_container";
import HomeNavContainer from "./home_nav/home_nav_container";
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
  }

  async componentDidMount() {
    this.setState({ loading: false });
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentWillReceiveProps(nextProps) {
    const {ui} = this.props
    if (nextProps.ui !== ui) {
      this.setState({ navOption: nextProps.ui });
    }
  }

  render() {
    const {
      navOption,
      mainScreen,
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
      <div className="home-content-section">
       {<HomeNavContainer />}
        <div>
          {navOption ? <ResponsesIndexContainer /> : <MessagesIndexContainer />}
        </div>
        {mainScreen === "videosIndex" ? <VideosIndexContainer /> : <UploadVideoContainer />}
        <div className="arrow-keys">
          <div className="arrow">
            <img className="arrow-key" src={LeftArrow} />
            <p className="arrow-text">NOPE</p>
            &emsp;
            <img className="arrow-key" src={RightArrow} />
            <p className="arrow-text">SUBMIT RESPONSE</p>
          </div>
        </div>
      </div>;
  }
}

export default Home;
