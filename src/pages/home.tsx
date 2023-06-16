import { Container } from "@mui/material";
import React from "react";

import { ColorThemeToggler } from "../features/color-theme/color-theme-toggler";
import { ProblemFeed } from "../features/problem-feed/components/problem-feed";

const HomePage: React.FC = () => {
  return (
    <>
      <ColorThemeToggler />
      <Container sx={{ marginTop: 5 }}>
        <ProblemFeed />
      </Container>
    </>
  );
};

export { HomePage };
