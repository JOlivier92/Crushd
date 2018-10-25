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
      videos: [],
      loading: true
    };
    this.uploadVideo = this.uploadVideo.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });

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
    this.setState({ loading: false });
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
  }

  stopRecording(e) {
    e.preventDefault();

    // Stop the recorder
    this.mediaRecorder.stop();
    this.setState({
      recording: false
    });

    // Save the video to memory
    this.saveVideo();
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
    this.props.createNewVideo(videoURL);
  }

  deleteVideo(videoURL) {
    const videos = this.state.videos.filter(v => v !== videoURL);
    this.setState({ videos });
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
          this.props.createNewVideo({
            user_id: this.props.currentUser.id,
            videoURL: `userVideo_${this.props.currentUser.id}.mp4`
          });
        });
      };
      xhr.send();

      console.log(blob);
    });
  }

  render() {
    const { recording, videos, loading } = this.state;
    if (this.state.loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="250" width="250" />;
        </div>
      );
    }
    return (
      <div className="home-content-section">
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
              <button onClick={e => this.startRecording(e)}>Record</button>
            )}
            {recording && (
              <button onClick={e => this.stopRecording(e)}>Stop</button>
            )}
          </div>

          <div className="recorded-videos-section">
            <h3>Recorded Videos:</h3>
            {videos.map((videoURL, i) => (
              <div key={`video_${i}`}>
                <video style={{ width: 200 }} src={videoURL} autoPlay loop />
                <div className="video-options-section">
                  <button onClick={() => this.deleteVideo(videoURL)}>
                    Delete
                  </button>
                  <a href={videoURL}>Download</a>
                  <button onClick={() => this.uploadVideo(i)}>
                    Upload Video
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
