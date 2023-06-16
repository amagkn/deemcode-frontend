import { Box } from "@mui/material";
import React from "react";

import { BoldText } from "../../../../../shared/components/text/BoldText";
import { InlineCode } from "../../../../../shared/components/text/InlineCode";

type ConstraintsBlockProps = {
  constraints: string[];
};

const ConstraintsBlock: React.FC<ConstraintsBlockProps> = ({ constraints }) => {
  return (
    <Box>
      <Box>
        <BoldText>Ограничения:</BoldText>
      </Box>
      <ul>
        {constraints.map((constraint, i) => {
          return (
            <li key={i} style={{ paddingBottom: "0.5rem" }}>
              <InlineCode>{constraint}</InlineCode>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export { ConstraintsBlock };
