import { Box } from "@mui/material";
import React, { ReactNode } from "react";

import { ConstraintsBlock } from "../../../../shared/components/ConstraintsBlock/ConstraintsBlock";
import {
  ExampleItem,
  ExamplesBlock,
} from "../../../../shared/components/ExamplesBlock/ExamplesBlock";

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
