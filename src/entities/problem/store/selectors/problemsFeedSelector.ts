import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

export const problemsFeedSelector = createSelector(
  [
    (state: RootState) => state.problems.feed,
    (state: RootState) => state.problems.feedLoading,
  ],

  (feed, loading) => ({ feed, loading })
);
