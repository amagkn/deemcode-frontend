import {
  ExampleItem,
  ExamplesBlock,
} from "../../../../shared/components/ExamplesBlock/ExamplesBlock";
import { Box } from "@mui/material";
import { ConstraintsBlock } from "../../../../shared/components/ConstraintsBlock/ConstraintsBlock";
import React, { ReactNode } from "react";

type ProblemDescriptionProps = {
  examples: ExampleItem[];
  constraints: string[];
  description: ReactNode;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  description,
  constraints,
  examples,
}) => {
  return (
    <Box>
      <Box>{description}</Box>

      <ExamplesBlock items={examples} />
      <ConstraintsBlock items={constraints} />
    </Box>
  );
};

export { ProblemDescription };
