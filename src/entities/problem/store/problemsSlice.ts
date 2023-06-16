import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GroupEntity } from "../types/group-entity";
import { ProblemEntity } from "../types/problem-entity";
import { ProblemFeedItem } from "../types/problem-feed-item";

interface ProblemsSLice {
  feed: ProblemFeedItem[];

  problems: { [key: string]: ProblemEntity };

  groups: GroupEntity[];
}

const initialState: ProblemsSLice = {
  feed: [],
  groups: [],
  problems: {},
};

export const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    setFeed(state, action: PayloadAction<ProblemFeedItem[]>) {
      state.feed = action.payload;
    },
    setGroups(state, action: PayloadAction<GroupEntity[]>) {
      state.groups = action.payload;
    },

    addProblem(state, action: PayloadAction<ProblemEntity>) {
      state.problems[action.payload.id] = action.payload;
    },
  },
});

export const problemsReducer = problemsSlice.reducer;
