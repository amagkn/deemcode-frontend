import React from "react";
import { IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../color-mode-context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type ColorThemeTogglerProps = {};

const ColorThemeToggler: React.FC<ColorThemeTogglerProps> = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export { ColorThemeToggler };
