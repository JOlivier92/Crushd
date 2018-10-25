import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import videos from "./videos_reducer";

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  userVideo: videos
});

export default rootReducer;
