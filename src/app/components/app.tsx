import React from "react";
import { CssBaseline } from "@mui/material";
import { ColorThemeProvider } from "../../features/color-theme/color-theme-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "../../pages/router";

const App: React.FC = () => {
  return (
    <ColorThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ColorThemeProvider>
  );
};

export { App };
