import React from "react";
import { Box } from "@mui/material";
import { BoldText } from "../text/BoldText";

export type ExampleItem = {
  input: string;
  output: string;
  explanation: string;
};

type ExampleBlockProps = {
  items: ExampleItem[];
};

const ExamplesBlock: React.FC<ExampleBlockProps> = ({ items }) => {
  return (
    <Box sx={{ paddingTop: "2rem" }}>
      {items.map((example, i) => (
        <Box
          key={i}
          sx={{ marginBottom: i !== items.length - 1 ? "1rem" : undefined }}
        >
          <Box sx={{ paddingBottom: "1rem" }}>
            <BoldText>Example {i + 1}:</BoldText>
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
              <BoldText>Input:</BoldText> {example.input}
            </Box>
            <Box sx={{ paddingBottom: 1 }}>
              <BoldText>Output:</BoldText> {example.output}
            </Box>
            <Box>
              <BoldText>Explanation:</BoldText> {example.explanation}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export { ExamplesBlock };
