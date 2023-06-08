import { ProblemEntity } from "../../types/problem-entity";
import { ShuffleArrayDescription } from "./shuffle-array-description";
import { ShuffleArraySolution } from "./shuffle-array-solution";
import { DifficultyEnum } from "../../types/difficulty-enum";
import { createSlug } from "../../../../shared/lib/helpers/createSlug";
import { GroupEnum } from "../../types/group-enum";

const title = "Перемешать массив";
const slug = createSlug(title);

export const ShuffleArray: ProblemEntity = {
  id: "1",
  groupId: GroupEnum.arrayAndHashing,
  title,
  slug,
  description: ShuffleArrayDescription,
  solution: ShuffleArraySolution,
  difficulty: DifficultyEnum.easy,
};
