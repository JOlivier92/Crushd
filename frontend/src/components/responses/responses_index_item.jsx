import React from "react";

const ResponseVideosIndexItem = ({ firebaseURL }) => {
    return <div className="response-videos-index-view">
        <video id="movie" src={firebaseURL} height="" width="80%" autoPlay controls muted loop play="true">
          {" "}
        </video>
        <div className="video-view-btns">
          <div className="btn-outer-one">
            <div className="btn-inner-one">
              <i class="far fa-comments"></i>
            </div>
          </div>
        </div>
      </div>;
};

export default ResponseVideosIndexItem;
