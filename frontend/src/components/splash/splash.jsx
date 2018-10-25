import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./splash.css";

class Splash extends Component {
  render() {
    return <div>
        <div className="splash-container">
          <Carousel showArrows={false} autoPlay showIndicators={false} showThumbs={false} infiniteLoop={true} stopOnHover={true} transitionTime={950} showStatus={false} interval={5000}>
            <div>
              <img src="https://bit.ly/2SeV0YP" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2D3xpFU" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2Sh3fUi" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://bit.ly/2SeV0YP" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2D3xpFU" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2Sh3fUi" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://bit.ly/2SeV0YP" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://bit.ly/2D3xpFU" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://bit.ly/2Sh3fUi" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="mobile-splash-container">
 </div>
      </div>;
  }
}

export default Splash;
