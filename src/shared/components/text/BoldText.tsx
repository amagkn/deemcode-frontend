import React, { PropsWithChildren } from "react";
import { Box } from "@mui/material";

type BoldTextProps = {};

const BoldText: React.FC<PropsWithChildren<BoldTextProps>> = ({ children }) => {
  return (
    <Box sx={{ fontWeight: "bold" }} component="span">
      {children}
    </Box>
  );
};

export { BoldText };
