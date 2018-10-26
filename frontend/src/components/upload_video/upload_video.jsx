import React from "react";

import "./../home/home.css";
import Loader from "react-loader-spinner";
import HomeNavContainer from "./../home/home_nav/home_nav_container";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import { createNewVideo } from "./../../util/video_api_util";

const videoType = "video/webm";
const firebase = require("firebase");
require("firebase/firestore");

class UploadVideo extends React.Component {
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
    this.secondsRemaining = null;
    this.intervalHandle = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.uploadVideo = this.uploadVideo.bind(this);
    this.tick = this.tick.bind(this);
    this.homeNavClicked = this.homeNavClicked.bind(this);
    this.closeRecorder = this.closeRecorder.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDsZyTtsdAELZyX9Q6QeNwvw1aOrFmE81o",
        authDomain: "crushd-efd3f.firebaseapp.com",
        projectId: "crushd-efd3f",
        storageBucket: "crushd-efd3f.appspot.com"
      });
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    // Initialize recording
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: videoType
    });

    // Store video in chunks
    this.chunks = [];

    // Listen for new data
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
    await this.sleep(1500);
    this.setState({ loading: false });

    // Show video recorder to user
    this.video.src = window.URL.createObjectURL(stream);
    this.video.play();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  homeNavClicked() {
    this.setState({
      navOption: !this.state.navOption
    });
  }

  startRecording(e) {
    e.preventDefault();

    // Reset data chunks
    this.chunks = [];

    // Start video with 10ms buffer to prevent data loss
    this.mediaRecorder.start(10);

    // Set state to recording
    this.setState({ recording: true });
    this.startCountDown();
  }

  stopRecording(e) {
    e.preventDefault();

    // Stop the recorder
    this.mediaRecorder.stop();
    this.setState({
      recording: false,
      recorded: true
    });

    this.saveVideo();
    this.stopCountDown();
    this.popOffVideo();
  }

  saveVideo() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, { type: videoType });
    const videoURL = window.URL.createObjectURL(blob);

    // append videoURL to list of saved videos
    const videos = this.state.videos.concat([videoURL]);

    this.setState({
      videos
    });
  }

  popOffVideo() {
    const { videos } = this.state;
    if (videos.length > 2) {
      const newVids = videos;
      newVids.shift();
      this.setState({ videos: newVids });
    }

    return null;
  }

  deleteVideo(videoURL) {
    const videos = this.state.videos.filter(v => v !== videoURL);
    this.setState({ videos });
  }

  closeRecorder() {
    this.setState({ videos: [], recorded: false });
  }

  tick() {
    let sec = this.secondsRemaining;
    this.setState({ seconds: sec });
    if (sec < 10) {
      this.setState({ seconds: `0${this.state.seconds}` });
    }
    if (sec === 0) {
      this.stopCountDown();
    }
    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = this.state.seconds;
  }

  stopCountDown() {
    clearInterval(this.intervalHandle);
    this.secondsRemaining = null;
    this.setState({ seconds: "30" });
  }

  async uploadVideo(index) {
    // Initialize Cloud Firestore through firebase
    let db = firebase.firestore();
    let storageRef = firebase.storage().ref();
    let ref = storageRef.child(`userVideo_${this.props.currentUser.id}.mp4`);

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });

    let video = this.state.videos[index];
    let currentUser = this.props.currentUser

    let blob = await fetch(video).then(r => {
      var blob = null;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", r.url);
      xhr.responseType = "blob";
      debugger;
      xhr.onload = function() {
        blob = xhr.response;
        ref.put(blob).then(function(snapshot) {
          console.log("Uploaded a blob!");
          createNewVideo({
            user_id: currentUser.id,
            videoURL: `userVideo_${currentUser.id}.mp4`,
            sexual_preference: currentUser.sexual_preference,
            gender: currentUser.gender 
          });
        });
      };
      xhr.send();
    });
  }

  render() {
    const { navOption, recording, videos, recorded, loading } = this.state;
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="250" width="250" />;
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
    return (
      <div className="home-content-section">
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
        {!this.state.recorded ? (
          <div className="recorded-videos-section slide-out" />
        ) : (
          <div className="recorded-videos-section slide-in">
            <div className="recorded-video-box">
              <h3>Recorded Videos</h3>
              {videos.map((videoURL, i) => (
                <div key={`video_${i}`}>
                  <video
                    className="recorded-inner"
                    src={videoURL}
                    autoPlay
                    loop
                    muted
                  />
                  <div className="video-options-section">
                    <button onClick={() => this.deleteVideo(videoURL)}>
                      Delete
                    </button>
                    <button>
                      <a href={videoURL}>Download</a>
                    </button>
                    <button onClick={() => this.uploadVideo(i)}>
                      Upload Video
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="close-recorded">
              <span
                className="close-modal"
                onClick={() => this.closeRecorder()}
              >
                <i className="fas fa-times" />
              </span>
              <p>CLOSE</p>
            </div>
          </div>
        )}

        <div className="camera">
          <video
            style={{ width: 400 }}
            ref={v => {
              this.video = v;
            }}
          >
            Video stream not available
          </video>
          <div className="recording-options-section">
            {!recording && (
              <div className="button" onClick={e => this.startRecording(e)}>
                <div className="inner" />
              </div>
            )}
            {recording && (
              <div
                className="button active"
                onClick={e => this.stopRecording(e)}
              >
                <div className="inner" />
              </div>
            )}
            <div className="timer">{this.state.seconds}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadVideo;
