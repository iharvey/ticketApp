// Get all unique locations and event types
const getUniques = (data) => {
  return data.reduce((acc, curr) => {
    // unique event types
    if (acc.types.indexOf(curr.type) < 0) {
      acc.types = [...acc.types, curr.type]
    }
    // quick sanitisation of location string
    let trimVenue = curr.venue.trim();
    if (trimVenue.substr(-1) === ",") {
      trimVenue.slice(trimVenue.length - 1)
    }
    trimVenue = trimVenue.split(', ');
    trimVenue = trimVenue[trimVenue.length - 1];
    // unique location names
    if (acc.locales.indexOf(trimVenue) < 0) {
      acc.locales = [...acc.locales, trimVenue]
    }
    return acc;
  }, { types: [], locales: [] })
}

export default function reducer(state = {
  events: [],
  unique: {
    types: [],
    locales: []
  },
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_EVENTS_PENDING":
      return {...state, fetching: true }

    case "FETCH_EVENTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        events: action.payload.data,
        unique: getUniques(action.payload.data)
      }

    case "FETCH_EVENTS_REJECTED":
      return {...state, fetching: false, error: action.payload }

    default:
      return state;
  }
}
