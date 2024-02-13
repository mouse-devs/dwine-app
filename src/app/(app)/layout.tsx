import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@/context/ThemeContext";
import BaseLayout from "@/layouts/base-layout";
export const metadata: Metadata = {
  title: "dwine - Home",
  description: "dwine Home",
};

export default function RootLayout({ children }: any) {
  return <BaseLayout>{children}</BaseLayout>;
}
