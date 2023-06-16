import { Box } from "@mui/material";
import React from "react";

import { BoldText } from "../text/BoldText";
import { ConstraintText } from "../text/ConstraintText";

type ConstraintsBlockProps = {
  items: string[];
};

const ConstraintsBlock: React.FC<ConstraintsBlockProps> = ({ items }) => {
  return (
    <Box sx={{ paddingTop: "3rem" }}>
      <Box>
        <BoldText>Constraints:</BoldText>
      </Box>
      <ul>
        {items.map((constraint, i) => {
          return (
            <li key={i}>
              <ConstraintText>{constraint}</ConstraintText>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export { ConstraintsBlock };
