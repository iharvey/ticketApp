export function filter(payload) {
  return function(dispatch) {
    dispatch({
      type: "FILTER",
      payload
    });
  };
}
