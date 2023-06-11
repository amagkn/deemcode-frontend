import { ProblemEntity } from "../types/problem-entity";
import { problemsData } from "../components/content";

export const getProblems = async (): Promise<ProblemEntity[] | null> => {
  return problemsData;
};

export const getProblemBy = async (
  slug: string
): Promise<ProblemEntity | null> => {
  const [problem] = problemsData.filter((p) => p.slug === slug);

  return problem ?? null;
};
