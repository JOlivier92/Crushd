import React from "react";
import "./faq.css";

class Faq extends React.Component {
  render() {
    return (
      <div className="helper-outer">
        <div className="helper-inner">
          <div className="intro-video">
            <img src="https://bit.ly/2zchocj" alt="intro video" />
          </div>
          <div className="helper-text">
            <h2>How do I use Crush'd?</h2>
            <p>
              You can swipe left and right on your potential crushees videos. If
              you like their video, you can respond with a video.
            </p>
            <p>
              You can then message those that respond to your video or get
              messages from people who liked your response.
            </p>
            <h2>Who is Crush'd?</h2>
            <p>
              Four guys with a dream to change the ways in which we connect,
              have fun, and help others spark a love connection.
            </p>
          </div>
        </div>
        <div className="pulse-outer">
          <button
            className="pulse-button"
            onClick={() => this.props.closeModal()}
          >
            EXIT
          </button>
        </div>
      </div>
    );
  }
}

export default Faq;
