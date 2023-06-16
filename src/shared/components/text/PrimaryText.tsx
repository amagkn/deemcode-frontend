import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

type PrimaryTextProps = {};

const PrimaryText: React.FC<PropsWithChildren<PrimaryTextProps>> = ({
  children,
}) => {
  return <Typography variant="body1">{children}</Typography>;
};

export { PrimaryText };
