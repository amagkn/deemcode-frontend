import React from "react";
import { Box } from "@mui/material";
import { ConstraintText } from "../text/ConstraintText";
import { BoldText } from "../text/BoldText";

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
        {items.map((constraint) => {
          return (
            <li>
              <ConstraintText>{constraint}</ConstraintText>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export { ConstraintsBlock };
