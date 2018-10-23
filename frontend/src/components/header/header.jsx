import React from "react";
import { Link } from "react-router-dom";
import SplashContainer from '../splash/splash_container';

const Header = ({ currentUser, logout, openModal, closeModal }) => {
  
    const sessionLinks = () => (
      <div>
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

    if(false) {
      closeModal();
      return nav();
    } else {
      openModal({ modal: "ShowSignup" });
      return sessionLinks();
    }
}

export default Header;
