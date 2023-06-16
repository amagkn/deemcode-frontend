import { useEffect, useState } from "react";

import { getProblemsFeed } from "../api/getProblemsFeed";
import { ProblemFeedItem } from "../types/problem-feed-item";

export const useQueryProblems = () => {
  const [problems, setProblems] = useState<ProblemFeedItem[]>([]);

  useEffect(() => {
    const fn = async () => {
      const data = await getProblemsFeed();

      if (data) {
        setProblems(data);
      }
    };

    fn();
  }, []);

  return { problems };
};
