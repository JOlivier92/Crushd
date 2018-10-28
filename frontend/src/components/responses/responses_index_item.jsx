import React from "react";

const ResponseVideosIndexItem = ({ firebaseURL }) => {
    return <div className="response-videos-index-view">
        <video id="movie" src={firebaseURL} height="" width="80%" autoPlay controls muted loop play="true">
          {" "}
        </video>
        <div className="video-view-btns">
          <div className="btn-outer-one">
            <div className="btn-inner-one">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="btn-outer-two">
            <div className="btn-inner-two">
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
      </div>;
};

export default ResponseVideosIndexItem;
