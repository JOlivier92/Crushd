import React from "react";

const ResponseVideosIndexItem = ({ firebaseURL, videoURLProp, createNewChat}) => {
    return <div className="response-videos-index-view">
        <video id="movie" src={firebaseURL} height="" width="80%" autoPlay controls muted loop play="true">
          {" "}
        </video>
        <div className="video-view-btns">
          <div className="btn-outer-one">
            <div className="btn-inner-one">
              <i 
              className="fas fa-comments"
              onClick= {() => createNewChat(videoURLProp.slice(14, -4).split("_"))} 
              />
            </div>
          </div>
        </div>
      </div>;
};

export default ResponseVideosIndexItem;
