import React from "react";
import { Link } from "react-router-dom";
import SplashContainer from '../splash/splash_container';

const Header = ({ currentUser, logout, openModal, closeModal }) => {
  
    const sessionLinks = () => (
      <div>
        <nav className="splash-btns">
          <div className="signup-btn" onClick={() => openModal({
            modal: "ShowSignup"
          })}>
            <p>Sign up</p>
          </div>
          <div className="login-btn" onClick={() => openModal({
            modal: "ShowLogin"
          })}>
            <p>Log in</p>
          </div>
        </nav>
        <SplashContainer />
      </div>
    );

    const nav = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </hgroup>
    );

  return (currentUser.id) ? nav() : sessionLinks();
}

export default Header;
