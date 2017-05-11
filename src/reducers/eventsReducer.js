// TODO - get unique all
const getUniques = (data) => {
  return data.reduce((acc, curr) => {
    if (acc.types.indexOf(curr.type) < 0) {
      acc.types = [...acc.types, curr.type]
    }
    let trimVenue = curr.venue.trim();
    if (trimVenue.substr(-1) === ",") {
      trimVenue.slice(trimVenue.length - 1)
    }
    trimVenue = trimVenue.split(', ');
    trimVenue = trimVenue[trimVenue.length - 1];

    if (acc.locales.indexOf(trimVenue) < 0) {
      acc.locales = [...acc.locales, trimVenue]
    }
    return acc;
  }, { types: [], locales: [] })
}


export default function reducer(state = {
  events: [],
  // filters: {},
  // filterQuery: "",
  // filterType: "",
  // eventsFiltered: [],
  // uniqueTypes: [],
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
