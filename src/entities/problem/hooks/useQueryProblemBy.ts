import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { problemBySelector } from "../store/selectors/problemBySelector";
import { fetchProblemBy } from "../store/thunks/problemsThunks";

export const useQueryProblemBy = (slug: string) => {
  const { problem, loading } = useAppSelector((state) =>
    problemBySelector(state, slug)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(fetchProblemBy(slug));
    }
  }, [dispatch, loading, slug]);

  return {
    problem,
  };
};
