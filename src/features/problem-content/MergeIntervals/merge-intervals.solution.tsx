import React from "react";

import { ProblemSolution } from "../../../entities/problem/components/ProblemSolution/ProblemSolution";
import { solutionString } from "./solutionString";

type MergeIntervalsSolutionProps = {};

const clues: string[] = [
  "1. Нужно отсортировать каждый подмассив по старту его интервала т.е. по первому элементу",
  "2. Нужно перебрать интервалы отсортированного массива. Лучше сразу положить первый интервал в результирующий массив, и начать перебор со второго элемента",
  "3. Сравниваем старт текущего интервала, и конец у последнего интервал в результирующем массиве",
];

const MergeIntervalsSolution: React.FC<MergeIntervalsSolutionProps> = () => {
  return <ProblemSolution solutions={[{ clues, solution: solutionString }]} />;
};

export { MergeIntervalsSolution };
