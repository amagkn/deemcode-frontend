import React from "react";

import { ExampleItem } from "../../../entities/problem/components/ProblemDescription/ExamplesBlock/ExamplesBlock";
import { ProblemDescription } from "../../../entities/problem/components/ProblemDescription/ProblemDescription";
import { InlineCode } from "../../../shared/components/text/InlineCode";
import { PrimaryText } from "../../../shared/components/text/PrimaryText";

type MergeIntervalsDescriptionProps = {};

const examples: ExampleItem[] = [
  {
    input: "const intervals = [[1,3],[2,6],[8,10],[15,18]]",
    output: "[[1,6],[8,10],[15,18]]",
    explanation:
      "Интервалы [1,3] и [2,6] накладываются, они были объединены в вид [1,6].",
  },

  {
    input: "const intervals = [[1,4],[4,5]]",
    output: "[[1,5]]",
    explanation: "Интервалы [1,4] and [4,5] были объединены",
  },
];

const constraints = [
  "1 <= intervals.length <= 104",
  "intervals[i].length == 2",
  "0 <= start <= end <= 104",
];

const links = ["https://leetcode.com/problems/merge-intervals/"];

const MergeIntervalsDescription: React.FC<
  MergeIntervalsDescriptionProps
> = () => {
  return (
    <ProblemDescription
      examples={examples}
      constraints={constraints}
      links={links}
      description={
        <PrimaryText>
          Дан массив <InlineCode>intervals</InlineCode> где{" "}
          <InlineCode>intervals[i] = [start, end]</InlineCode>, требуется
          объединить накладывающиеся друг на друга интервалы, и вернуть массив
          содержащий в себе только объединенные
        </PrimaryText>
      }
    />
  );
};

export { MergeIntervalsDescription };
