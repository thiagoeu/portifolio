import { styled } from "@mui/material";
import React, { ReactNode } from "react";

interface IstyledButton {
  children: ReactNode;
}

export const StyledButton: React.FC<IstyledButton> = ({ children }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: `${theme.palette.primary.contrastText}`,
    width: "100%",
    padding: "5px 15px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  }));
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};
