import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import ThemeSwitch from "@/components/theme-switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { Box, Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Router from "next/router";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    dark: true,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== Router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = (url: string) => {
      if (url === Router.asPath) {
        setLoading(false);
      }
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <AppCacheProvider>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            color: "text.primary",
            bgcolor: "background.default",
            minHeight: "100vh",
          }}
          className={roboto.variable}
        >
          <ThemeSwitch />
          <Container fixed>
            {/* Currently I only handle loading for our specific table view */}
            {/* Would be much easier with /app router and loading */}
            {loading && <TableSkeleton />}
            {!loading && <Component {...pageProps} />}
          </Container>
        </Box>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
