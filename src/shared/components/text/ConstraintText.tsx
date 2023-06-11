import React, { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

type ConstraintTextProps = {};

const ConstraintText: React.FC<PropsWithChildren<ConstraintTextProps>> = ({
  children,
}) => {
  return (
    <Typography
      sx={{
        backgroundColor: "#ffffff12",
        borderColor: "#f7faff1f",
        color: "#eff1f6bf",
        padding: 0.5,
      }}
      component="code"
    >
      {children}
    </Typography>
  );
};

export { ConstraintText };
