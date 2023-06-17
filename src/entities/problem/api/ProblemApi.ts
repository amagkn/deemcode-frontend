import { GroupEntity } from "../types/group-entity";
import { ProblemEntity } from "../types/problem-entity";
import { ProblemFeedItem } from "../types/problem-feed-item";
import {
  getProblemBySlugFromMock,
  problemFeedDataMock,
  problemGroupsMock,
} from "./mocks";

export type GetProblemGroupsResponse = GroupEntity[];
export type GetProblemsFeedResponse = ProblemFeedItem[];
export type GetProblemByResponse = ProblemEntity;

class ProblemApi {
  async fetchProblemsFeed(): Promise<GetProblemsFeedResponse | null> {
    return problemFeedDataMock;
  }

  async fetchProblemGroups(): Promise<GetProblemGroupsResponse | null> {
    return problemGroupsMock;
  }

  async fetchProblemBy(slug: string): Promise<GetProblemByResponse | null> {
    const problem = getProblemBySlugFromMock(slug);

    return problem ?? null;
  }
}

export const problemsApi = new ProblemApi();
