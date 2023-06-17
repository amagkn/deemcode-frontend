import { createAsyncThunk } from "@reduxjs/toolkit";

import { problemsApi } from "../../api/ProblemApi";

export const fetchProblemsFeed = createAsyncThunk(
  "/problems-feed",
  async () => {
    const data = await problemsApi.fetchProblemsFeed();

    return data ?? [];
  }
);

export const fetchProblemsGroups = createAsyncThunk(
  "/problems-groups",
  async () => {
    const data = await problemsApi.fetchProblemGroups();

    return data ?? [];
  }
);

export const fetchProblemBy = createAsyncThunk(
  "/problem-by",
  async (slug: string) => {
    const data = await problemsApi.fetchProblemBy(slug);

    if (!data) {
      return Promise.reject();
    }

    return data;
  }
);
