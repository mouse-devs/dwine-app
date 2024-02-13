"use client";
import { Box, styled } from "@mui/material";

export const LoginContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
