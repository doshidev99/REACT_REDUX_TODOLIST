import { FILTER } from "./constant";

export const setVisibilityFilter = filter => ({
  type: FILTER,
  filter
});
