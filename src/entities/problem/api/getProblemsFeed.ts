import { problemFeedDataMock } from "./mocks";
import { ProblemFeedItem } from "../types/problem-feed-item";

export type GetProblemsResponse = ProblemFeedItem[];

export const getProblemsFeed =
  async (): Promise<GetProblemsResponse | null> => {
    return problemFeedDataMock;
  };
