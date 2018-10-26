import React from "react";
import "./responses_index.css";

class ResponsesIndex extends React.Component {
  render() {
    const uploadVideo = () => (
      <div className="upload-video-option-container">
        <h3>No responses yet...</h3>
        <button>Upload a new video</button>
      </div>
    );
    return (
      <div className="responses-index-view">
        <div className="response-outer">
          <div className="response-inner">
            <div className="image-thumbnail">
              <img
                className="profile-img"
                src="https://bit.ly/2Pmd5FK"
                alt="profile-thumb"
              />
              <p>Andrea</p>
            </div>
          </div>
          {uploadVideo()}
        </div>
      </div>
    );
  }
}

export default ResponsesIndex;
