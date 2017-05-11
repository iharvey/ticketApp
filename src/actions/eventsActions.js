import axios from "axios";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({
      type: "FETCH_EVENTS",
      payload: axios.get("http://tech-test.egtools.co.uk/events/")
    })
  }
}

export function filterQuery(payload) {
  return function(dispatch) {
    dispatch({
      type: "FILTER_QUERY",
      payload
    })
  }
}

export function filterType(payload) {
  return function(dispatch) {
    dispatch({
      type: "FILTER_TYPE",
      payload
    })
  }
}