import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./splash.css";
import Logo from "./crushd_logo_gradient.png";

class Splash extends Component {
  render() {
    return (
      <div>
        <div className="splash-container">
          <div className="logo">
            <img src={Logo} />
            <h2>A video revolution in online dating.</h2>
          </div>
          <Carousel
            showArrows={false}
            autoPlay
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={true}
            transitionTime={1250}
            showStatus={false}
            interval={7500}
          >
            <div>
              <img src="https://bit.ly/2SeV0YP" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2D3xpFU" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2Rd4tye" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://bit.ly/2OM0TP8" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2PmJwUl" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2Sh3fUi" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://bit.ly/2AqCvK1" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2D3xpFU" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2CDH9Ws" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="mobile-splash-container" />
      </div>
    );
  }
}

export default Splash;
