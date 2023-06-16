import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

type BoldTextProps = {};

const BoldText: React.FC<PropsWithChildren<BoldTextProps>> = ({ children }) => {
  return (
    <Box sx={{ fontWeight: "bold" }} component="span">
      {children}
    </Box>
  );
};

export { BoldText };
