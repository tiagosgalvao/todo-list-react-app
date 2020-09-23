import * as filterTypes from "./types";

export function filterToggle(filter) {
  return {
    type: filterTypes.FILTER_TOGGLE,
    payload: {
      filter: filter, // could leave only filter - : filter is redundant
    },
  };
}
