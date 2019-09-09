import { createSelector } from "reselect";

import Types from "Types";

const getState = (state: Types.RootState) => state;

export const getIsFetching = createSelector(
  getState,
  state => state.isFetching
);
