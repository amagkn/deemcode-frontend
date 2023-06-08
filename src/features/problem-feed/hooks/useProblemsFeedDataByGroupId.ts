import { useMemo } from "react";
import { problemsFeedData } from "../problemsFeedData";
import { GroupEnum } from "../../../entities/problem/types/group-enum";
import { ProblemEntity } from "../../../entities/problem/types/problem-entity";

export const useProblemsFeedDataByGroupId = () => {
  return useMemo(() => {
    return problemsFeedData.reduce<{ [key in GroupEnum]?: ProblemEntity[] }>(
      (acc, el) => {
        if (acc[el.groupId]) {
          acc[el.groupId]!.push(el);
        } else {
          acc[el.groupId] = [el];
        }

        return acc;
      },
      {}
    );
  }, []);
};
