import { DifficultyEnum } from "../types/difficulty-enum";

export const difficultyDictionary: { [key in DifficultyEnum]: string } = {
  [DifficultyEnum.easy]: "Легко",
  [DifficultyEnum.medium]: "Средняя",
  [DifficultyEnum.hard]: "Тяжело",
};
