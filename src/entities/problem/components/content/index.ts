import { createSlug } from "../../../../shared/lib/helpers/createSlug";
import { ProblemEntity } from "../../types/problem-entity";
import { v4 as uuidv4 } from "uuid";
import { GroupEnum } from "../../types/group-enum";
import { MergeIntervalsDescription } from "./MergeIntervals/merge-intervals.description";
import { MergeIntervalsSolution } from "./MergeIntervals/merge-intervals.solution";
import { DifficultyEnum } from "../../types/difficulty-enum";

export const problemsData: ProblemEntity[] = [
  {
    title: "Merge Intervals",
    slug: createSlug("Merge Intervals"),
    id: uuidv4(),
    groupId: GroupEnum.arrayAndHashing,
    description: MergeIntervalsDescription,
    solution: MergeIntervalsSolution,
    difficulty: DifficultyEnum.medium,
  },
];
