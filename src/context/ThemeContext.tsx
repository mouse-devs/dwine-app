"use client";
import { createContext, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { ThemeContextType } from "@/types/themeContext";
import DefaultPalette from "@/theme/palette";
import { CardOverrides } from "@/theme/overrides/card";
import { InputOverrides } from "@/theme/overrides/input";
import { ButtonOverrides } from "@/theme/overrides/button";
type ThemeProviderPros = {
  children: React.ReactNode;
};

export const themeContextDefault: ThemeContextType = {
  mode: "light",
  handleModeChange: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(themeContextDefault);

export default function ThemeProvider({ children }: ThemeProviderPros) {
  const [mode, setMode] = useState<PaletteMode>("light");
  // TODO: move this to a separate file in theme folder
  const darkTheme = createTheme({
    palette: DefaultPalette(mode),
    components: {
      ...CardOverrides,
      ...InputOverrides,
      ...ButtonOverrides,
    },
    typography: {
      // TODO: add this in overrides
      fontFamily: [
        "Inter",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MuiThemeProvider theme={darkTheme}>
      <ThemeContext.Provider
        value={{
          mode,
          handleModeChange,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
}
