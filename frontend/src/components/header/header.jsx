import React from "react";
import SplashContainer from "../splash/splash_container";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./header.css";

const Header = ({ currentUser, logout, openModal, closeModal }) => {
  const sessionLinks = () => (
    <div>
      <nav className="splash-btns">
        <div
          className="signup-btn btns"
          onClick={() =>
            openModal({
              modal: "ShowSignup"
            })
          }
        >
          <p>Sign up</p>
        </div>
        <div
          className="login-btn btns"
          onClick={() =>
            openModal({
              modal: "ShowLogin"
            })
          }
        >
          <p>Log in</p>
        </div>
      </nav>
      <SplashContainer />
    </div>
  );

  const nav = () => (
    <div>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
        <Link to="/" className="header-button" onClick={logout}>
          Log Out
        </Link>
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
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
            <Link to="/" className="mobile-header-button" onClick={logout}>
              Log Out
            </Link>
          </ul>
        </div>
      </hgroup>
    </div>
  );

  if (currentUser.id) {
    closeModal();
    return nav();
  } else {
    return sessionLinks();
  }
};

export default Header;
