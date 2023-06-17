import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
} from "@mui/material";
import React, { useEffect, useRef } from "react";

import { hljs } from "../../../../shared/lib/hljs/hljs";

type ProblemSolutionProps = {
  solutions: { clues: string[]; solution: string }[];
};

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ solutions }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeRef]);

  return (
    <Box>
      {solutions.map(({ solution, clues }, solutionIndex) => {
        return (
          <Box
            style={{ marginTop: solutionIndex > 0 ? "2rem" : undefined }}
            key={solutionIndex}
          >
            <h2 style={{ margin: 0, textAlign: "center" }}>
              Решение {solutions.length > 1 ? solutionIndex + 1 : null}
            </h2>
            <h4 style={{ margin: 0, marginTop: "1rem" }}>Подсказки:</h4>
            <List>
              {clues.map((clue, clueIndex) => (
                <ListItem
                  key={solutionIndex + clueIndex}
                  disableGutters
                  divider
                >
                  {clue}
                </ListItem>
              ))}
            </List>

            <Box>
              <Accordion>
                <AccordionSummary>
                  <h4 style={{ margin: 0 }}>Код</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <pre>
                    <code ref={codeRef}>{solution}</code>
                  </pre>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export { ProblemSolution };
