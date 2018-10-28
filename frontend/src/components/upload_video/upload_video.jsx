import React from "react";
import "./../home/home.css";
import Loader from "react-loader-spinner";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import { createNewVideo } from "./../../util/video_api_util";
import HomeNavContainer from "../home/home_nav/home_nav_container";
import { createNewResponseVideo } from "../../util/response_video_api_util";

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
      seconds: "30",
      loading: true
    };
    this.secondsRemaining = null;
    this.intervalHandle = null;
    this.startCountDown = this.startCountDown.bind(this);
    this.uploadVideo = this.uploadVideo.bind(this);
    this.tick = this.tick.bind(this);
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
    await this.sleep(1000);
    this.setState({ loading: false });

    // Show video recorder to user
    this.video.src = window.URL.createObjectURL(stream);
    this.video.play();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentWillReceiveProps(nextProps) {
    const { ui } = this.props
    if (nextProps.ui !== ui) {
      this.setState({ navOption: nextProps.ui });
    }
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

    this.popOffVideo();

    this.saveVideo();
    this.stopCountDown();
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
    if (videos.length === 0) {
      this.setState({ recorded: false });
    }
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

    let response = false;
    let reply_to_id ;
    let video = this.state.videos[index];
    let currentUser = this.props.currentUser;
    if (this.props.match.path === "/:userid/reply") {
      reply_to_id = this.props.match.url.slice(1, -6)
      response = true;
      ref = storageRef.child(`responseVideo_${ reply_to_id }_${ currentUser.id }.mp4`);
    }
    await fetch(video).then(r => {
      var blob = null;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", r.url);
      xhr.responseType = "blob";
      xhr.onload = function() {
        blob = xhr.response;
        ref.put(blob).then(function(snapshot) {
          console.log("Uploaded a blob!");
          if (response) {
            createNewResponseVideo({
              user_id: currentUser.id,
              videoURL: `responseVideo_${reply_to_id}_${currentUser.id}.mp4`,
              response_to_id: `${reply_to_id}`
            });
          } else {
            createNewVideo({
              user_id: currentUser.id,
              videoURL: `userVideo_${currentUser.id}.mp4`,
              sexual_preference: currentUser.sexual_preference,
              gender: currentUser.gender
            });
          }
        });
      };
      xhr.send();
    });
  }

  render() {
    const { navOption, recording, videos, recorded, loading } = this.state;
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    }
    return (
      <div className="home-content-section">
        {<HomeNavContainer />}
          <div>

          {navOption ? <ResponsesIndexContainer /> : <MessagesIndexContainer />}
        </div>
        {!recorded ? (
          <div className="recorded-videos-section slide-out">
            <h3>Recorded Videos</h3>
            <div className="recorded-video-box black" />
            <div className="recorded-video-box black" />
            <div className="recorded-video-box black" />
          </div>
        ) : (
          <div className="recorded-videos-section slide-in">
            <h3>Recorded Videos</h3>
            <div>
              {videos.map((videoURL, i) => (
                <div className="recorded-video-box">
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
              <p>CLEAR</p>
            </div>
          </div>
        )}

        <div className="camera">
          <video
            muted
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
        <button className="help" onClick={() => this.props.openModal({ modal: "faq" })}>
          <p>HELP</p>
          <i class="fas fa-question" />
        </button>
      </div>
    );
  }
}

export default UploadVideo;
