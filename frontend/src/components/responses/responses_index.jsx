import React from "react";
import "./responses_index.css";

class ResponsesIndex extends React.Component {
  render() {
    return <div className="responses-index-view">
        <div className="response-outer">
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Andrea</p>
            </div>
          </div>
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Heather</p>
            </div>
          </div>
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Liz</p>
            </div>
          </div>
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Ashley</p>
            </div>
          </div>
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Monique</p>
            </div>
          </div>
          <div className="response-inner">
            <div className="image-thumbnail">
              <img className="profile-img" src="https://bit.ly/2Pmd5FK" alt="profile-thumb" />
              <p>Patrice</p>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default ResponsesIndex;
