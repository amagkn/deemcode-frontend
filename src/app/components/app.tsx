import { CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ColorThemeProvider } from "../../features/color-theme/color-theme-provider";
import { router } from "../../pages/router";
import { store } from "../../shared/store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ColorThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ColorThemeProvider>
    </Provider>
  );
};

export { App };
