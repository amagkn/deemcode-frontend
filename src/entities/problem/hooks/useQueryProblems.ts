import { useEffect, useState } from "react";
import { ProblemEntity } from "../types/problem-entity";
import { getProblems } from "../api";

export const useQueryProblems = () => {
  const [problems, setProblems] = useState<ProblemEntity[]>([]);

  useEffect(() => {
    const fn = async () => {
      const data = await getProblems();

      if (data) {
        setProblems(data);
      }
    };

    fn();
  }, []);

  return { problems };
};
