import { Theme } from "@mui/material";
export const CardOverrides = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: theme.shape.borderRadius * 2.5,
        boxShadow: "rgba(76, 78, 100, 0.22) 0px 2px 10px 0px",
      }),
    },
  },
};
