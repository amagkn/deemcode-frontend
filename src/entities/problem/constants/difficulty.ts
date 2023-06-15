import { DifficultyEnum } from "../types/difficulty-enum";

export const difficultyDictionary: { [key in DifficultyEnum]: string } = {
  [DifficultyEnum.easy]: "Easy",
  [DifficultyEnum.medium]: "Medium",
  [DifficultyEnum.hard]: "Hard",
};
