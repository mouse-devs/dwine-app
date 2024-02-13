import { Theme } from "@mui/material";

export const ButtonOverrides = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: 8,
      }),
    },
  },
};
