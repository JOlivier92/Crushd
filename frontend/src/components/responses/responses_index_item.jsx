import React from "react";
import {Link} from "react-router-dom";
const ResponseVideosIndexItem = ({ firebaseURL, videoURLProp, createNewChat}) => {
    return <div className="response-videos-index-view">
        <video id="movie" src={firebaseURL} height="" width="80%" autoPlay controls muted loop play="true">
          {" "}
        </video>
        <div className="video-view-btns">
          <div className="btn-outer-one">
            <div className="btn-inner-one">
              <Link to={`/chatroom/${videoURLProp.slice(14,-4)}`}
                    className="chat-link"
                    textDecoration="none"
                    onClick={() => createNewChat(videoURLProp
                                    .slice(14, -4)
                                    .split("_"))}>
                <i className="fas fa-comments" />
              </Link>
            </div>
          </div>
        </div>
      </div>;
};

export default ResponseVideosIndexItem;
