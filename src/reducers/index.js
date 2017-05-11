import { combineReducers } from "redux";
import events from "./eventsReducer";
import event from "./eventReducer";
import filter from "./filterReducer";

export default combineReducers({
  events,
  event,
  filter
})
