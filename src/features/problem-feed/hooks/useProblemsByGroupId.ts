import { useMemo } from "react";
import { GroupEnum } from "../../../entities/problem/types/group-enum";
import { ProblemEntity } from "../../../entities/problem/types/problem-entity";

export const useProblemsByGroupId = (problems: ProblemEntity[]) => {
  return useMemo(() => {
    return problems.reduce<{ [key in GroupEnum]: ProblemEntity[] }>(
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
