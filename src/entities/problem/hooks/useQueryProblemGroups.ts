import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { LoadingStatusEnum } from "../../../shared/types/loadingStatusEnum";
import { selectProblemGroups } from "../store/selectors/selectProblemGroups";
import { fetchProblemsGroups } from "../store/thunks/problemsThunks";

export const useQueryProblemGroups = () => {
  const { groups, loading } = useAppSelector(selectProblemGroups);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading === LoadingStatusEnum.idle) {
      dispatch(fetchProblemsGroups());
    }
  }, [dispatch, loading]);

  return { groups, loading };
};
