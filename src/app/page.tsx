"use client";
import { Stack } from "@mui/material";
import { RecogSection } from "components/RecogSection";
import { useRecog } from "hooks/useRecog";

export default function HomePage() {
  const recog = useRecog();

  return recog ? (
    <RecogSection recog={recog} />
  ) : (
    <Stack
      position="absolute"
      left={0}
      top={0}
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      Não é possível usar o reconhecimento de voz.
    </Stack>
  );
}
