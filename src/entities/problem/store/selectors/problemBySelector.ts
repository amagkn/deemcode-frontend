import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

export const problemBySelector = createSelector(
  [
    (state: RootState, slug: string) => state.problems.problems[slug],
    (state: RootState, slug: string) => state.problems.problemLoading[slug],
  ],

  (problem, loading) => ({ problem, loading })
);
