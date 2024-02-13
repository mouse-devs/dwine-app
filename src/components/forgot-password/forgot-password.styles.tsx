import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";

export const ForgotPasswordTypography = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  color: theme.palette.primary.main,
  fontSize: 14,
  "&:hover": {
    cursor: "pointer",
  },
}));
