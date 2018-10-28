import React from "react";
import SplashContainer from "../splash/splash_container";
import Loader from "react-loader-spinner";
import { Link, withRouter } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.sleep(1500);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sessionLinks() {
    return (
      <div>
        <SplashContainer />
      </div>
    );
  }

  nav() {
    const { logout, currentUser, loading } = this.props;
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    } else {
      return (
        <div>
          <hgroup className="header-group">
            <h2 className="header-name">
              Hi, {currentUser.name}!
            </h2>
            <Link to="/" className="header-button" onClick={logout}>
              Log Out
            </Link>
  
            <div id="menuToggle">
              <input type="checkbox" />
              <span />
              <span />
              <span />
              <ul id="menu" className="mobile-header-btn-group">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">My Profile</Link>
                </li>
                <li>
                  <Link to="/">Matches</Link>
                </li>
                <li>
                  <Link to="/">Messages</Link>
                </li>
                <li>
                  <Link to="/">Responses</Link>
                </li>
                <li>
                  <Link to="/" className="mobile-header-button" onClick={logout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </hgroup>
        </div>
      );
    }
  }

  render() {
    if (this.props.currentUser.id) {
      this.props.closeModal();
      return this.nav();
    } else {
      return this.sessionLinks();
    }
  }
}

export default withRouter(Header);
