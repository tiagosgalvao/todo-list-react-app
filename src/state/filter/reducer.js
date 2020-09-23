import * as filterTypes from "./types";

function reducer(_, action) {
  switch (action.type) {
    case filterTypes.FILTER_TOGGLE:
      return action.payload.filter;
    default:
      throw new Error();
  }
}

export default reducer;
