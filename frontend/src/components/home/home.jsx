import React from "react";
import "./home.css";

const videoType = "video/webm";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videos: []
    };
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    // Show video recorder to user
    this.video.src = window.URL.createObjectURL(stream);
    this.video.play();

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
  }

  deleteVideo(videoURL) {
    const videos = this.state.videos.filter(v => v !== videoURL);
    this.setState({ videos });
  }

  render() {
    const { recording, videos } = this.state;
    return (
      <div className="home-content-section">
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {this.props.currentUser.name}!</h2>
          <button className="header-button" onClick={this.props.logout}>
            Log Out
          </button>
        </hgroup>

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
