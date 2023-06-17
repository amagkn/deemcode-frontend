import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

const selectGroups = (state: RootState) => state.problems.groups;
const selectLoadingStatus = (state: RootState) => state.problems.groupsLoading;

export const selectProblemGroups = createSelector(
  [selectGroups, selectLoadingStatus],

  (groups, loading) => ({ groups, loading })
);
