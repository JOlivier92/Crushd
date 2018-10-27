import React, { Component } from "react";
import Favicon from "react-favicon";
import "./App.css";
// import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";

import HeaderContainer from "./components/header/header_container";
import HomeContainer from "./components/home/home_container";
import { AuthRoute, ProtectedRoute } from "./util/route_util";
import Modal from "./components/modal/modal";
import UploadVideoContainer from "./components/upload_video/upload_video_container";
import ChatRoomContainer from "./components/chatroom/chatroom_container";

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
          <ProtectedRoute
            exact
            path="/upload"
            component={UploadVideoContainer}
          />
          {/* Protected Matches Route */}
          <ProtectedRoute
            exact
            patch="/chatroom"
            component={ChatRoomContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
