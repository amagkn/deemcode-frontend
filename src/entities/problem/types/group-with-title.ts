import { GroupEntity } from "./group-entity";

export interface GroupWithTitle extends GroupEntity {
  title: string;
}
