"use client";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

export const LoginTitle = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: 600,
}));

export const LoginSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));
