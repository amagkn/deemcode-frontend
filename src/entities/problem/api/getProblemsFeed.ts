import { ProblemFeedItem } from "../types/problem-feed-item";
import { problemFeedDataMock } from "./mocks";

export type GetProblemsResponse = ProblemFeedItem[];

export const getProblemsFeed =
  async (): Promise<GetProblemsResponse | null> => {
    return problemFeedDataMock;
  };
