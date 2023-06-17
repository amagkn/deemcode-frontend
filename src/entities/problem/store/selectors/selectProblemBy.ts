import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

const selectProblem = (state: RootState, slug: string) =>
  state.problems.problems[slug];
const selectProblemLoadingStatus = (state: RootState, slug: string) =>
  state.problems.problemLoading[slug];

export const selectProblemBy = createSelector(
  [selectProblem, selectProblemLoadingStatus],

  (problem, loading) => ({ problem, loading })
);
