import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
