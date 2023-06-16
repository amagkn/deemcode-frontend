import { useMemo } from "react";
import { GroupEnum } from "../../../entities/problem/types/group-enum";
import { ProblemFeedItem } from "../../../entities/problem/types/problem-feed-item";

export const useProblemsByGroupId = (problems: ProblemFeedItem[]) => {
  return useMemo(() => {
    return problems.reduce<{ [key in GroupEnum]: ProblemFeedItem[] }>(
      (acc, el) => {
        if (acc[el.groupId]) {
          acc[el.groupId]!.push(el);
        } else {
          acc[el.groupId] = [el];
        }

        return acc;
      },
      {
        [GroupEnum.arrayAndHashing]: [],
      }
    );
  }, [problems]);
};
