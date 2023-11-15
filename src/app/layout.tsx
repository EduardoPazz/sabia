import { Stack } from "@mui/material";
import AppBar from "components/AppBar";
import ThemeRegistry from "components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Stack
            sx={{ height: "100%" }}
            component="main"
            maxWidth="lg"
            mx="auto"
          >
            <AppBar />
            {children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
