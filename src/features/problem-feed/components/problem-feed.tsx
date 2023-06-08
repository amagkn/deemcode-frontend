import React, { useMemo } from "react";
import { groupsByOrder } from "../../../entities/problem/constants/groups";
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
import { problemsFeedData } from "../problemsFeedData";
import { GroupEnum } from "../../../entities/problem/types/group-enum";
import { ProblemEntity } from "../../../entities/problem/types/problem-entity";

type ProblemFeedProps = {};

const ProblemFeed: React.FC<ProblemFeedProps> = () => {
  const dataByGroupId = useMemo(() => {
    return problemsFeedData.reduce<{ [key in GroupEnum]?: ProblemEntity[] }>(
      (acc, el) => {
        if (acc[el.groupId]) {
          acc[el.groupId]!.push(el);
        } else {
          acc[el.groupId] = [el];
        }

        return acc;
      },
      {}
    );
  }, []);

  return (
    <div>
      {groupsByOrder.map((group) => (
        <Accordion>
          <AccordionSummary id={group.id}>
            <Typography>{group.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Задача</TableCell>
                    <TableCell>Сложность</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {dataByGroupId[group.id]!.map((problem) => (
                    <TableRow
                      key={problem.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {problem.title}
                      </TableCell>
                      <TableCell align="left">{problem.difficulty}</TableCell>
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
