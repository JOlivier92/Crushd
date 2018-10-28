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
            <h2>Who is Crush'd?</h2>
            <p>
                Lorem ipsum dolor amet butcher 3 wolf moon narwhal portland
                stumptown hexagon chillwave, pickled readymade taiyaki. Fixie hella
                poutine keytar tumblr mustache kickstarter fanny pack try-hard
                single-origin coffee whatever.{" "}
            </p>
            <h2>How do I use this app?</h2>
            <p>
                Tumeric tousled gentrify readymade offal salvia venmo af humblebrag
                kombucha literally hoodie. Hammock synth subway tile master cleanse
                vexillologist blog dreamcatcher tofu cold-pressed everyday carry
                tilde.
            </p>
            </div>
        </div>
        <div className="pulse-outer">
          <button 
            className="pulse-button"
            onClick={() => this.props.closeModal()}>EXIT</button>
        </div>
      </div>
    );
  }
}

export default Faq;
