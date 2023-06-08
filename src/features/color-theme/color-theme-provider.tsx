import React, { PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { ColorModeContext } from "./color-mode-context";

type ThemeProps = {};

const ColorThemeProvider: React.FC<PropsWithChildren<ThemeProps>> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorThemeProvider };
