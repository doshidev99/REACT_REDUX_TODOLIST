import { FILTER } from "./constant";

export default (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
};
