import { Stack } from "@mui/material";
import AppBar from "components/AppBar";
import ThemeRegistry from "components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Sabiá",
  description: "Ferramenta de auxílio à alfabetização.",
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
