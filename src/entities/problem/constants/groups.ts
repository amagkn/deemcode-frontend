import { GroupEnum } from "../types/group-enum";

export const groupsDictionary: { [key in GroupEnum]: string } = {
  [GroupEnum.arrayAndHashing]: "Массивы и хеширование",
};

export const groupsByOrder: {
  id: GroupEnum;
  title: string;
}[] = [
  {
    id: GroupEnum.arrayAndHashing,
    title: groupsDictionary[GroupEnum.arrayAndHashing],
  },
];
