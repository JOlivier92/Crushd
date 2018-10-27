import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import videos from "./videos_reducer";
import video_idx from "./video_index_reducer";
import response_idx from './video_response_index_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  ui,
  userVideo: videos,
  videoIndex: video_idx,
  responseIndex: response_idx
});

export default rootReducer;
