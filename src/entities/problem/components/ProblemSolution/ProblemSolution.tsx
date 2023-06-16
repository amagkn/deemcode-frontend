import React, { useEffect, useRef } from "react";
import { Box, List, ListItem } from "@mui/material";
import { hljs } from "../../../../shared/lib/hljs/hljs";

type ProblemSolutionProps = {
  clues: string[];
  solution: string;
};

const ProblemSolution: React.FC<ProblemSolutionProps> = ({
  clues,
  solution,
}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeRef]);

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
        <pre>
          <code ref={codeRef}>{solution}</code>
        </pre>
      </Box>
    </Box>
  );
};

export { ProblemSolution };
