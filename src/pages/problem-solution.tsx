import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useQueryProblemBy } from "../entities/problem/hooks/useQueryProblemBy";

const ProblemSolutionPage = () => {
  const { slug } = useParams() as { slug: string };

  const { problem } = useQueryProblemBy(slug);

  if (!problem) return null;

  const ProblemDescription = problem.description;
  const ProblemSolution = problem.solution;

  return (
    <Grid sx={{ padding: 5, minHeight: "100vh" }} container spacing={0}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderLeft: "1px solid pink",
            paddingX: 2,
            height: "100%",
          }}
        >
          <ProblemDescription />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            paddingX: 2,
            borderLeft: "1px solid pink",
          }}
        >
          <ProblemSolution />
        </Box>
      </Grid>
    </Grid>
  );
};

export { ProblemSolutionPage };
