import React from "react";
import { withRouter } from "react-router-dom";
import ResponseVideosIndexItem from "./responses_index_item";

import "./responses_index.css";

class ResponsesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async componentDidMount() {
    await this.props.fetchResponseVideos(this.props.currentUser.id);
    debugger;
    await this.sleep(1000);
    this.setState({ loading: false });
  }
  

  render() {
    const uploadVideo = (
          <div className="upload-video-option-container">
            <h3>No responses yet...</h3>
            <div className="upload-inner">
              <button
                className="add-btn"
                onClick={() => this.props.history.push("/upload")}
              >
                <i className="fa fa-plus fa-lg" />
              </button>
            </div>
          </div>
    );
    debugger;
    const showMatches = (
      <div className="upload-video-option-container">
        <div className="upload-inner">
          <div className="response-videos-index-container">
            {Object.values(this.props.responseVideos).map(video => (
              <ResponseVideosIndexItem
                className="response-video-index-view"
                key={video.id}
                firebaseURL={
                  "https://firebasestorage.googleapis.com/v0/b/crushd-efd3f.appspot.com/o/" +
                  video.videoURL +
                  "?alt=media&token=d2acb0e3-28d7-4f43-b43e-dfd7bb3c1ae9"
                }
              />
            ))}
          </div>
        </div>
    </div>
    );
    debugger;
    if (this.props.responseVideos.length > 0) {
      return (
        <div className="responses-index-view">
          <div className="response-outer">
            {showMatches}
          </div>
        </div>
      ); 
    } else {
      return (
        <div className="responses-index-view">
          <div className="response-outer">
            {uploadVideo}
          </div>
        </div>
      );
    }  
  }
}

export default withRouter(ResponsesIndex);
