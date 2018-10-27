import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./splash.css";
import Logo from "./crushd_logo_gradient.png";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoHidden: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.firstClick = true;
  }

  handleClick(type) {
    this.props.hideLogo();

    this.props.openModal({ modal: type });
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (this.firstClick === true) {
      this.firstClick = !this.firstClick;
      this.setState({ logoHidden: !nextProps.ui.type });
    }
    if (nextProps.ui.type !== this.props.ui.type) {
      this.setState({ logoHidden: !nextProps.ui.type });
    }
  }
  render() {
    const { logoHidden } = this.state;

    return (
      <div>
        <div className="header-logo">
          {logoHidden ? <img src={Logo} alt="logo" /> : <div />}
        </div>
        <nav className="splash-btns">
          <div
            className="signup-btn btns"
            onClick={() => this.handleClick("ShowSignup")}
          >
            <p>Sign up</p>
          </div>
          <div
            className="login-btn btns"
            onClick={() => this.handleClick("ShowLogin")}
          >
            <p>Log in</p>
          </div>
        </nav>
        <div className="splash-container">
          <div className="logo">
            {!logoHidden ? <img src={Logo} alt="logo" /> : <div />}
            {!logoHidden ? (
              <h2>A video revolution in online dating.</h2>
            ) : (
              <h2 />
            )}
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
        <div className="mobile-splash-container">
          <div className="logo">
            <img src={Logo} />
            <h2>A video revolution in online dating.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
