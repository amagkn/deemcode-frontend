import React from "react";
import { Box, List, ListItem } from "@mui/material";

type ProblemSolutionProps = {
  clues: string[];
  solution: string;
};

const ProblemSolution: React.FC<ProblemSolutionProps> = ({
  clues,
  solution,
}) => {
  return (
    <Box>
      <h4 style={{ margin: 0 }}>Подсказки:</h4>
      <List>
        {clues.map((c, i) => (
          <ListItem key={i} disableGutters divider>
            {c}
          </ListItem>
        ))}
      </List>

      <Box>
        <h4>Решение:</h4>
        <pre className="prettyprint">
          <code>{solution}</code>
        </pre>
      </Box>
    </Box>
  );
};

export { ProblemSolution };
