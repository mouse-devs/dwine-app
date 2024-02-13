"use client";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NewAccountContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  margin: theme.spacing(1, 0, 2, 0),
}));

export const NewAccountTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

export const NewAccountLinkTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.primary.main,
  cursor: "pointer",
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 20,
  color: theme.palette.primary.main,
}));
