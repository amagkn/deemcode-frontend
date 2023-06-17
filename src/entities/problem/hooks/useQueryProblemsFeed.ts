import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { LoadingStatusEnum } from "../../../shared/types/loadingStatusEnum";
import { problemsFeedSelector } from "../store/selectors/problemsFeedSelector";
import { fetchProblemsFeed } from "../store/thunks/problemsThunks";

export const useQueryProblemsFeed = () => {
  const { feed, loading } = useAppSelector(problemsFeedSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading === LoadingStatusEnum.idle) {
      dispatch(fetchProblemsFeed());
    }
  }, [dispatch, loading]);

  return { feed, loading };
};
