import { useEffect, useState } from "react";

import { GroupEntity } from "../types/group-entity";
import { getProblemGroups } from "../api/getProblemGroups";
import { groupsDictionary } from "../constants/groups";

interface GroupWithTitle extends GroupEntity {
  title: string;
}

export const useQueryProblemGroups = () => {
  const [groups, setGroups] = useState<GroupWithTitle[]>([]);

  useEffect(() => {
    const fn = async () => {
      const data = await getProblemGroups();

      if (data) {
        const groupsWithTitle: GroupWithTitle[] = data.map((group) => {
          return { ...group, title: groupsDictionary[group.id] };
        });

        setGroups(groupsWithTitle);
      }
    };

    fn();
  }, []);

  return { groups };
};
