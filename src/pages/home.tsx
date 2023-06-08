import React from "react";
import { Container } from "@mui/material";
import { ProblemFeed } from "../features/problem-feed/components/problem-feed";
import { ColorThemeToggler } from "../features/color-theme/color-theme-toggler";

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
