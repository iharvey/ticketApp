export default function reducer(
  state = {
    event: {},
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_EVENT_PENDING":
      return { ...state, fetching: true };
    case "FETCH_EVENT_FULFILLED":
      return { ...state, fetching: false, fetched: true, event: action.payload.data };
    case "FETCH_EVENT_REJECTED":
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}
