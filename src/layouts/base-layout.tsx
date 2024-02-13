import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@/context/ThemeContext";

function BaseLayout({ children }: any) {
  return (
    <html lang="es">
      <body>
        <CssBaseline>
          <ThemeProvider>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </ThemeProvider>
        </CssBaseline>
      </body>
    </html>
  );
}

export default BaseLayout;
