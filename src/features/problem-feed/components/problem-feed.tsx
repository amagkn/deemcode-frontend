import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { difficultyDictionary } from "../../../entities/problem/constants/difficulty";
import { useQueryProblemGroups } from "../../../entities/problem/hooks/useQueryProblemGroups";
import { useQueryProblems } from "../../../entities/problem/hooks/useQueryProblems";
import { useProblemsByGroupId } from "../hooks/useProblemsByGroupId";

const ProblemFeed: React.FC = () => {
  const navigate = useNavigate();

  const { problems } = useQueryProblems();
  const dataByGroupId = useProblemsByGroupId(problems ? problems : []);
  const { groups } = useQueryProblemGroups();

  const redirectToProblem = (problemSlug: string) => {
    navigate(`/problems/${problemSlug}`);
  };

  return (
    <div>
      {groups.map((group) => (
        <Accordion key={group.id}>
          <AccordionSummary id={group.id}>
            <Typography>{group.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="problems table">
                <TableHead>
                  <TableRow>
                    <TableCell>Задача</TableCell>
                    <TableCell>Сложность</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {dataByGroupId[group.id]!.map((problem) => (
                    <TableRow
                      onClick={() => redirectToProblem(problem.slug)}
                      key={problem.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {problem.title}
                      </TableCell>
                      <TableCell align="left">
                        {difficultyDictionary[problem.difficulty]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { ProblemFeed };
