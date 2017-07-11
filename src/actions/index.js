import axios from 'axios';

export function fetchEvent(id) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_EVENT',
      payload: axios.get(`http://tech-test.egtools.co.uk/events/${id}`),
    });
  };
}

export function fetchEvents() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_EVENTS',
      payload: axios.get('http://tech-test.egtools.co.uk/events/'),
    });
  };
}

export function filter(payload) {
  return function(dispatch) {
    dispatch({
      type: 'FILTER',
      payload,
    });
  };
}
