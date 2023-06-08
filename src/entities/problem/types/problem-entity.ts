import React from "react";
import { DifficultyEnum } from "./difficulty-enum";
import { GroupEnum } from "./group-enum";

export interface ProblemEntity {
  id: string;
  slug: string;
  groupId: GroupEnum;
  title: string;
  difficulty: DifficultyEnum;
  description: React.FC;
  solution: React.FC;
}
