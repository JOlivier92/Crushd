import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import GreetingContainer from "./components/greeting/greeting_container";
import SignUpFormContainer from "./components/session_form/signup_form_container";
import LogInFormContainer from "./components/session_form/login_form_container";
import HomeContainer from "./components/home/home_container";
import { AuthRoute, ProtectedRoute } from "./util/route_util";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Crush'd</h1>
        </header>

        <Switch>
          <ProtectedRoute exact path="/home" component={HomeContainer} />
          <AuthRoute exact path="/" component={GreetingContainer} />
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
