import React from "react";
// import { Link } from "react-router-dom";
import "./home.css";
import Loader from "react-loader-spinner";

const videoType = "video/webm";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,

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
    // this.popOffVideo = this.popOffVideo.bind(this);
  }

  async componentDidMount() {
    this.setState({loading: true})
    
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    
    console.log(this.state);
    //Initialize recording
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
    this.setState({ loading: false});
    // Show video recorder to user
    this.video.src = window.URL.createObjectURL(stream);
    this.video.play();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  startRecording(e) {
    e.preventDefault();

    //Reset data chunks
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

    // Save the video to memory
    this.saveVideo();
    this.stopCountDown();
    this.popOffVideo();
  }

  saveVideo() {
    // convert saved chunks to blob
    const blob = new Blob(this.chunks, { type: videoType });
    const videoURL = window.URL.createObjectURL(blob);

    // appened videoURL to list of saved videos
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

  closeRecorded() {
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
    firebase.initializeApp({
      apiKey: "AIzaSyDsZyTtsdAELZyX9Q6QeNwvw1aOrFmE81o",
      authDomain: "crushd-efd3f.firebaseapp.com",
      projectId: "crushd-efd3f",
      storageBucket: "crushd-efd3f.appspot.com"
    });

    // Initialize Cloud Firestore through Firebase
    let db = firebase.firestore();
    let storageRef = firebase.storage().ref();
    let ref = storageRef.child(`userVideo_${this.props.currentUser.id}.mp4`);

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });

    let video = this.state.videos[index];

    let blob = await fetch(video).then(r => {
      var blob = null;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", r.url);
      xhr.responseType = "blob"; //force the HTTP response, response-type header to be blob
      xhr.onload = function() {
        blob = xhr.response;
        console.log("Created blob");
        console.log(blob);
        //xhr.response is now a blob object
        ref.put(blob).then(function(snapshot) {
          console.log("Uploaded a blob!");
        });
      };
      xhr.send();

      console.log(blob);
    });
  }

  render() {

    const { recording, videos, recorded, loading } = this.state;
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="250" width="250" />;
        </div>
      )  
    }

    return (
      <div className="home-content-section">
        {!recorded
          ? <div className="recorded-videos-section slide-out" />
          : <div className="recorded-videos-section slide-in">
              <div className="recorded-video-box">
                <h3>Recorded Videos</h3>
                {videos.map((videoURL, i) =>
                  <div key={`video_${i}`}>
                    <video
                      className="recorded-inner"
                      src={videoURL}
                      autoPlay
                      loop
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
                )}
              </div>
              <div className="close-recorded">
                <span
                  className="close-modal"
                  onClick={() => this.closeRecorded()}
                >
                  <i className="fas fa-times" />
                </span>
                <p>CLOSE</p>
              </div>
            </div>}

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
            {!recording &&
              <div className="button" onClick={e => this.startRecording(e)}>
                <div className="inner" />
              </div>}
            {recording &&
              <div
                className="button active"
                onClick={e => this.stopRecording(e)}
              >
                <div className="inner" />
              </div>}
            <div className="timer">
              {this.state.seconds}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
