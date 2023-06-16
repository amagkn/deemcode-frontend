import { v4 as uuidv4 } from "uuid";

import { MergeIntervalsDescription } from "../../../features/problem-content/MergeIntervals/merge-intervals.description";
import { MergeIntervalsSolution } from "../../../features/problem-content/MergeIntervals/merge-intervals.solution";
import { createSlug } from "../../../shared/lib/helpers/createSlug";
import { DifficultyEnum } from "../types/difficulty-enum";
import { GroupEnum } from "../types/group-enum";
import { ProblemEntity } from "../types/problem-entity";
import { GetProblemGroupsResponse } from "./getProblemGroups";
import { GetProblemsResponse } from "./getProblemsFeed";

const problems: ProblemEntity[] = [
  {
    title: "Объединить интервалы",
    slug: createSlug("Merge Intervals"),
    id: uuidv4(),
    groupId: GroupEnum.arrayAndHashing,
    description: MergeIntervalsDescription,
    solution: MergeIntervalsSolution,
    difficulty: DifficultyEnum.medium,
  },
];

export const problemFeedDataMock: GetProblemsResponse = problems.map((p) => ({
  groupId: p.groupId,
  id: p.id,
  slug: p.slug,
  difficulty: p.difficulty,
  title: p.title,
}));

export const getProblemBySlugFromMock = (slug: string) =>
  problems.find((p) => p.slug === slug);

export const problemGroupsMock: GetProblemGroupsResponse = [
  {
    id: GroupEnum.arrayAndHashing,
  },
];
