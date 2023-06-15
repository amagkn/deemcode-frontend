import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { solutionString } from "./constants";

type MergeIntervalsSolutionProps = {};

const MergeIntervalsSolution: React.FC<MergeIntervalsSolutionProps> = () => {
  return (
    <Box>
      <List>
        <ListItem disableGutters divider>
          1. Нужно отсортировать каждый подмассив по старту его интервала т.е.
          по первому элементу
        </ListItem>
        <ListItem disableGutters divider>
          2. Нужно перебрать интервалы отсортированного массива. Лучше сразу
          положить первый интервал в результирующий массив, и начать перебор со
          второго элемента
        </ListItem>
        <ListItem disableGutters divider>
          3. Сравниваем старт текущего интервала, и конец у последнего интервала
          в результирующем массиве
        </ListItem>
      </List>

      <Box>
        <h4>Решение:</h4>
        <pre>{solutionString}</pre>
      </Box>
    </Box>
  );
};

export { MergeIntervalsSolution };
