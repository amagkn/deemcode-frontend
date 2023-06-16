import { ProblemEntity } from "../types/problem-entity";
import { getProblemBySlugFromMock } from "./mocks";

export type GetProblemByResponse = ProblemEntity;

export const getProblemBy = async (
  slug: string
): Promise<GetProblemByResponse | null> => {
  const problem = getProblemBySlugFromMock(slug);

  return problem ?? null;
};
