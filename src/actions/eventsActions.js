import axios from "axios";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({
      type: "FETCH_EVENTS",
      payload: axios.get("http://tech-test.egtools.co.uk/events/")
    })
  }
}

