import React from "react";
import SplashContainer from "../splash/splash_container";
import "./header.css";
const Header = ({ currentUser, logout, openModal, closeModal }) => {
  const sessionLinks = () =>
    <div>
      <nav className="splash-btns">
        <div
          className="signup-btn btns"
          onClick={() =>
            openModal({
              modal: "ShowSignup"
            })}
        >
          <p>Sign up</p>
        </div>
        <div
          className="login-btn btns"
          onClick={() =>
            openModal({
              modal: "ShowLogin"
            })}
        >
          <p>Log in</p>
        </div>
      </nav>
      <SplashContainer />
    </div>;

  const nav = () => 
 
      <div>
        <hgroup className="header-group">
          <h2 className="header-name">
            Hi, {currentUser.name}!
      </h2>
          <button className="header-button" onClick={logout}>
            Log Out
      </button>
        </hgroup>
      </div>;


  if (currentUser.id) {
    closeModal();
    return nav();
  } else {
    return sessionLinks();
  }
};

export default Header;
