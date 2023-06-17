import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

const selectFeed = (state: RootState) => state.problems.feed;
const selectLoadingStatus = (state: RootState) => state.problems.feedLoading;

export const selectProblemFeed = createSelector(
  [selectFeed, selectLoadingStatus],

  (feed, loading) => ({ feed, loading })
);
