import { Box } from "@mui/material";
import React, { ReactNode } from "react";

import { ConstraintsBlock } from "./ConstraintsBlock/ConstraintsBlock";
import { ExampleItem, ExamplesBlock } from "./ExamplesBlock/ExamplesBlock";
import { UsefulLinksBlock } from "./UsefulLinksBlock/UsefulLinksBlock";

type ProblemDescriptionProps = {
  examples: ExampleItem[];
  description: ReactNode;
  constraints?: string[];
  links?: string[];
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  description,
  constraints,
  links,
  examples,
}) => {
  return (
    <Box>
      <Box>{description}</Box>

      <Box sx={{ paddingTop: 5 }}>
        <ExamplesBlock examples={examples} />
      </Box>

      {constraints && (
        <Box sx={{ paddingTop: 5 }}>
          <ConstraintsBlock constraints={constraints} />
        </Box>
      )}
      {links && (
        <Box sx={{ paddingTop: 5 }}>
          <UsefulLinksBlock links={links} />
        </Box>
      )}
    </Box>
  );
};

export { ProblemDescription };
