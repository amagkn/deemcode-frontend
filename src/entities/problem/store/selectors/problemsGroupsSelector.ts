import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../shared/store/store";

export const problemsGroupsSelector = createSelector(
  [
    (state: RootState) => state.problems.groups,
    (state: RootState) => state.problems.groupsLoading,
  ],

  (groups, loading) => ({ groups, loading })
);
