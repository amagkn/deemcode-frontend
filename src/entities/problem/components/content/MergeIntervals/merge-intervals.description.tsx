import React from "react";
import { PrimaryText } from "../../../../../shared/components/text/PrimaryText";
import { ConstraintText } from "../../../../../shared/components/text/ConstraintText";
import { Box } from "@mui/material";
import {
  ExamplesBlock,
  ExampleItem,
} from "../../../../../shared/components/ExamplesBlock/ExamplesBlock";
import { ConstraintsBlock } from "../../../../../shared/components/ConstraintsBlock/ConstraintsBlock";

type MergeIntervalsDescriptionProps = {};

const examples: ExampleItem[] = [
  {
    input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    output: "[[1,6],[8,10],[15,18]]",
    explanation:
      "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
  },

  {
    input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    output: "[[1,6],[8,10],[15,18]]",
    explanation:
      "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
  },
];

const constraints = [
  "1 <= intervals.length <= 104",
  "intervals[i].length == 2",
  "0 <= start<i> <= end<i> <= 104",
];

const MergeIntervalsDescription: React.FC<
  MergeIntervalsDescriptionProps
> = () => {
  return (
    <Box>
      <PrimaryText>
        Given an array of <ConstraintText>intervals</ConstraintText> where{" "}
        <ConstraintText>
          intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]
        </ConstraintText>
        , merge all overlapping intervals, and return an array of the
        non-overlapping intervals that cover all the intervals in the input.
      </PrimaryText>

      <ExamplesBlock items={examples} />
      <ConstraintsBlock items={constraints} />
    </Box>
  );
};

export { MergeIntervalsDescription };
