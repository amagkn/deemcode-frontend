import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";

import { ColorThemeProvider } from "../../features/color-theme/color-theme-provider";
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
