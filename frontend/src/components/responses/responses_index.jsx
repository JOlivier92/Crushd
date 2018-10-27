import React from "react";
import { withRouter } from "react-router-dom";

import "./responses_index.css";

class ResponsesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      responseVideos: []
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async componentDidMount() {
    await this.props.fetchResponseVideos(this.props.currentUser.id);
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  render() {
    const uploadVideo = () => (
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
    return (
      <div className="responses-index-view">
        <div className="response-outer">
          {/* <div className="response-inner">
            <div className="image-thumbnail">
              <img
                className="profile-img"
                src="https://bit.ly/2Pmd5FK"
                alt="profile-thumb"
              />
              <p>Andrea</p>
            </div>
          </div> */}
          {uploadVideo()}
        </div>
      </div>
    );
  }
}

export default withRouter(ResponsesIndex);
