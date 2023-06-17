import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoadingStatusEnum } from "../../../shared/types/loadingStatusEnum";
import { groupsDictionary } from "../constants/groups";
import { GroupEntity } from "../types/group-entity";
import { GroupWithTitle } from "../types/group-with-title";
import { ProblemEntity } from "../types/problem-entity";
import { ProblemFeedItem } from "../types/problem-feed-item";
import {
  fetchProblemBy,
  fetchProblemsFeed,
  fetchProblemsGroups,
} from "./thunks/problemsThunks";

interface ProblemsSLice {
  feedLoading: LoadingStatusEnum;
  feed: ProblemFeedItem[];

  groups: (GroupEntity & { title: string })[];
  groupsLoading: LoadingStatusEnum;

  problems: { [key: string]: ProblemEntity };
  problemLoading: {
    [key: string]:
      | LoadingStatusEnum.loaded
      | LoadingStatusEnum.loading
      | LoadingStatusEnum.error
      | undefined;
  };
}

const initialState: ProblemsSLice = {
  feed: [],
  feedLoading: LoadingStatusEnum.idle,

  groups: [],
  groupsLoading: LoadingStatusEnum.idle,

  problems: {},
  problemLoading: {},
};

export const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    addProblem(state, action: PayloadAction<ProblemEntity>) {
      state.problems[action.payload.id] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProblemsFeed.pending, (state) => {
      state.feedLoading = LoadingStatusEnum.loading;
    });
    builder.addCase(fetchProblemsFeed.fulfilled, (state, action) => {
      state.feedLoading = LoadingStatusEnum.loaded;
      state.feed = action.payload;
    });

    builder.addCase(fetchProblemsGroups.pending, (state) => {
      state.groupsLoading = LoadingStatusEnum.loading;
    });
    builder.addCase(fetchProblemsGroups.fulfilled, (state, action) => {
      state.groupsLoading = LoadingStatusEnum.loaded;

      const groupsWithTitle: GroupWithTitle[] = action.payload.map((group) => {
        return { ...group, title: groupsDictionary[group.id] };
      });

      state.groups = groupsWithTitle;
    });

    builder.addCase(fetchProblemBy.pending, (state, action) => {
      state.problemLoading[action.meta.arg] = LoadingStatusEnum.loading;
    });
    builder.addCase(fetchProblemBy.fulfilled, (state, action) => {
      state.problemLoading[action.meta.arg] = LoadingStatusEnum.loaded;
      state.problems[action.meta.arg] = action.payload;
    });
  },
});

export const problemsReducer = problemsSlice.reducer;
