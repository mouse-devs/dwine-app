"use client";
import { Box, styled } from "@mui/material";

export const LoginHeaderContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));
export const BrandContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));
export const Subtitle = styled(Box)(({ theme }) => ({}));
