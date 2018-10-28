import React from "react";
import { withRouter } from "react-router-dom";
import ResponseVideosIndexItem from "./responses_index_item";
import Loader from "react-loader-spinner";

import "./responses_index.css";

class ResponsesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.openResponseModal = this.openResponseModal.bind(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async componentDidMount() {
    await this.props.fetchResponseVideos(this.props.currentUser.id);
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  openResponseModal() {
    return ("hiii")
  }
  
  render() {
    const { loading } = this.state;
    if (loading) {
      return (
      <div className="responses-index-view">
        <div className="response-outer">
          <div className="loader-sidebar-container">
            <Loader className="spinner" type="Hearts" height="200" width="200" />
          </div>
        </div>
      </div>
      )
    }
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
    const showMatches = (
      <div className="upload-video-option-container">
        <h3>Your potential crushes</h3>
        <div className="upload-inner">
          <div className="response-videos-index-container">
            {Object.values(this.props.responseVideos).map(video => (
              <ResponseVideosIndexItem
                className="response-video-index-view"
                onClick={console.log("hi")}
                key={video.videoURL}
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
