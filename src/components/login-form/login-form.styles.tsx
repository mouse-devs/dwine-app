import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

export const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const AppLoginButton = styled(LoadingButton)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
