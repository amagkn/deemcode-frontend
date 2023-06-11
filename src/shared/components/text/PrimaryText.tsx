import React, { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

type PrimaryTextProps = {};

const PrimaryText: React.FC<PropsWithChildren<PrimaryTextProps>> = ({
  children,
}) => {
  return <Typography variant="body1">{children}</Typography>;
};

export { PrimaryText };
