import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import HeaderContainer from "./components/header/header_container";
import SignUpFormContainer from "./components/session_form/signup_form_container";
import LogInFormContainer from "./components/session_form/login_form_container";
import HomeContainer from "./components/home/home_container";
import { AuthRoute, ProtectedRoute } from "./util/route_util";
import Modal from "./modal/modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Switch>
          <ProtectedRoute exact path="/home" component={HomeContainer} />
          <AuthRoute exact path="/" component={HeaderContainer} />
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
