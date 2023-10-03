import { Container } from "@mui/material";
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
          <Container component="main">{children}</Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
