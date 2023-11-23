"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

const nextFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

const styleOverrides = `
html, body {
  height: 100%;
}
a {
  color: inherit;
}
`;

const theme = createTheme({
  typography: {
    fontFamily: nextFont.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides,
    },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
