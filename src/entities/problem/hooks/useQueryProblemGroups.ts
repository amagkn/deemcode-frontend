import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { LoadingStatusEnum } from "../../../shared/types/loadingStatusEnum";
import { problemsGroupsSelector } from "../store/selectors/problemsGroupsSelector";
import { fetchProblemsGroups } from "../store/thunks/problemsThunks";

export const useQueryProblemGroups = () => {
  const { groups, loading } = useAppSelector(problemsGroupsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading === LoadingStatusEnum.idle) {
      dispatch(fetchProblemsGroups());
    }
  }, [dispatch, loading]);

  return { groups, loading };
};
