import { Box } from "@mui/material";
import React from "react";

import { BoldText } from "../../../../../shared/components/text/BoldText";
import { InlineCode } from "../../../../../shared/components/text/InlineCode";

export type ExampleItem = {
  input: string;
  output: string;
  explanation: string;
};

type ExampleBlockProps = {
  examples: ExampleItem[];
};

const ExamplesBlock: React.FC<ExampleBlockProps> = ({ examples }) => {
  return (
    <Box>
      {examples.map((example, i) => (
        <Box
          key={i}
          sx={{ marginBottom: i !== examples.length - 1 ? "1rem" : undefined }}
        >
          <Box sx={{ paddingBottom: "1rem" }}>
            <BoldText>Пример {i + 1}:</BoldText>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff12",
              borderRadius: "0.5rem",
              padding: "1rem",
              letterSpacing: "0.5px",
            }}
          >
            <Box sx={{ paddingBottom: 1 }}>
              <BoldText>Аргументы:</BoldText>{" "}
              <InlineCode>{example.input}</InlineCode>
            </Box>
            <Box sx={{ paddingBottom: 1 }}>
              <BoldText>Результат:</BoldText>{" "}
              <InlineCode>{example.output}</InlineCode>
            </Box>
            <Box>
              <BoldText>Объяснение:</BoldText> {example.explanation}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export { ExamplesBlock };
