"use client";

import { Stack } from "@mui/material";
import { RecordButton } from "components/RecordButton";
import { useRecog } from "hooks/recog";

export default function HomePage() {
  const recog = useRecog();
  return (
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
      {recog ? (
        <RecordButton recog={recog} />
      ) : (
        "Não é possível usar o reconhecimento de voz."
      )}
    </Stack>
  );
}
