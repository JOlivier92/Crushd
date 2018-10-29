import React, { Component } from "react";
import Favicon from "react-favicon";
import "./App.css";
// import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import HeaderContainer from "./components/header/header_container";
import HomeContainer from "./components/home/home_container";
import { ProtectedRoute } from "./util/route_util";
import Modal from "./components/modal/modal";
import UploadVideoContainer from "./components/upload_video/upload_video_container";
import ChatRoomContainer from "./components/chatroom/chatroom_container";
import NoMatch from "./components/no_match/no_match";

// random comment
class App extends Component {
  render() {
    return (
      <div className="App">
        <Favicon url="./favicon.ico" />
        <Modal />
        <Route path="/" component={HeaderContainer} />
        <Switch>
          <ProtectedRoute exact path="/" component={HomeContainer} />
          <ProtectedRoute exact path="/upload" component={UploadVideoContainer} />
          <ProtectedRoute path="/:userid/reply" component={UploadVideoContainer} />
          {/* Protected Matches Route */}
          <ProtectedRoute
            path="/chatroom"
            component={ChatRoomContainer}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
