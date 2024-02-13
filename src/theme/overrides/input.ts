import { Theme } from "@mui/material";

export const InputOverrides = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: 8,
      }),
    },
  },
};
