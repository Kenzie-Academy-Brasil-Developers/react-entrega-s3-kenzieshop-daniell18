import { FILTER_SEARCH } from "./actionsTypes";
export const filtersearch = (name) => ({
  type: FILTER_SEARCH,
  name,
});
