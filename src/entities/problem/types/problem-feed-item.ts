import { ProblemEntity } from "./problem-entity";

export type ProblemFeedItem = Omit<ProblemEntity, "description" | "solution">;
