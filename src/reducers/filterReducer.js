export default function reducer(
  state = {
    filters: {}
  },
  action
) {
  let newFilters = { ...state.filters };

  switch (action.type) {
    case 'FILTER':
      if (state.filters.hasOwnProperty(Object.keys(action.payload))) {
        switch (Object.keys(action.payload)[0]) {
          case 'query':
            if (action.payload.query.length === 0) {
              // null query
              delete newFilters.query;
              return { ...state, filters: { ...newFilters } };
            } else {
              // valid query
              return { ...state, filters: { ...state.filters, query: action.payload.query } };
            }

          case 'type':
            if (action.payload.type === state.filters.type) {
              // previously selected element, clear the query
              delete newFilters.type;
              return { ...state, filters: { ...newFilters } };
            } else {
              return { ...state, filters: { ...state.filters, type: action.payload.type } };
            }

          case 'locale':
            if (action.payload.locale === state.filters.locale) {
              // previously selected element, clear the query
              delete newFilters.locale;
              return { ...state, filters: { ...newFilters } };
            } else {
              return { ...state, filters: { ...state.filters, locale: action.payload.locale } };
            }
          default:
            return state;
        }
      } else {
        // filter does not exist, add
        return { ...state, filters: { ...state.filters, ...action.payload } };
      }

    default:
      return state;
  }
}
