import { GroupEntity } from "../types/group-entity";
import { problemGroupsMock } from "./mocks";

export type GetProblemGroupsResponse = GroupEntity[];

export const getProblemGroups =
  async (): Promise<GetProblemGroupsResponse | null> => {
    return problemGroupsMock;
  };
