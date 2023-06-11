import { useEffect, useState } from "react";
import { ProblemEntity } from "../types/problem-entity";
import { getProblemBy } from "../api";

export const useQueryProblemBy = (slug: string) => {
  const [problem, setProblem] = useState<ProblemEntity | null>(null);

  useEffect(() => {
    const fn = async () => {
      const data = await getProblemBy(slug);

      if (data) {
        setProblem(data);
      }
    };

    fn();
  }, [slug]);

  return {
    problem,
  };
};
