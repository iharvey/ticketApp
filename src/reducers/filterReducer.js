export default function reducer(state = {
  filters: {},
  eventsFiltered: [],
}, action) {

  switch (action.type) {
    case "FILTER":

      if (state.filters.hasOwnProperty(Object.keys(action.payload))) {

        switch (Object.keys(action.payload)[0]) {
          case "query":
            // null query
            if (action.payload.query.length === 0) {
              let newFilters = {...state.filters}
              delete newFilters.query;
              return {...state, filters: {...newFilters}}
            // valid query
            } else {
              return {...state, filters: {...state.filters, query: action.payload.query} }
            }

          case "type":
            // previously selected element, clear the query
            if (!!state.filters.type && action.payload.type === state.filters.type) {
              let newFilters = {...state.filters}
              delete newFilters.type;
              return {...state, filters: {...newFilters}}
            } else {
              // previously selected element, clear the query
              return {...state, filters: {...state.filters, type: action.payload.type} }
            }

          case "locale":
            // previously selected element, clear the query
            if (!!state.filters.locale && action.payload.locale === state.filters.locale) {
              let newFilters = {...state.filters}
              delete newFilters.locale;
              return {...state, filters: {...newFilters}}
            } else {
              // previously selected element, clear the query
              return {...state, filters: {...state.filters, locale: action.payload.locale} }
            }

            return state
        }

      } else {
        // filter does not exist, add
        return {...state, filters: {...state.filters, ...action.payload} }
      }

    default:
      return state;
  }
}
