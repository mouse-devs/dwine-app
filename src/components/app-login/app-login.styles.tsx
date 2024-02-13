"use client";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const LoginContainer = styled(Box)<{ isXs: boolean }>(
  ({ theme, isXs }) => ({
    backgroundColor: isXs
      ? theme.palette.common.white
      : theme.palette.background.default,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const MobileLoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 4),
  "& a": {
    textDecoration: "none",
  },
}));

export const LoginCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  padding: theme.spacing(0, 2),
}));

export const LoginCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));
