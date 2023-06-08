import React from "react";
import { CssBaseline } from "@mui/material";
import { HomePage } from "../pages/home-page";
import { ColorThemeProvider } from "../features/color-theme/color-theme-provider";

const App: React.FC = () => {
  return (
    <ColorThemeProvider>
      <CssBaseline />
      <HomePage />
    </ColorThemeProvider>
  );
};

export { App };
