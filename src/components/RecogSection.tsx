"use client";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { RecordButton } from "components/RecordButton";
import Image from "next/image";
import { useState } from "react";
import parrot from "../../public/parrot.png";

export function RecogSection({ recog }: { recog: SpeechRecognition }) {
  const [content, setContent] = useState("paraguaio");

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      flexGrow={1}
      pb={1}
    >
      <Stack
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Image src={parrot} alt="paraguaio" width={100} />
        {content ? (
          <Typography fontStyle="italic">— {content}</Typography>
        ) : (
          "..."
        )}
      </Stack>

      <RecordButton recog={recog} onResult={setContent} />

      <Button
        variant="outlined"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
      >
        sílabas
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
      >
        soletrar
      </Button>
    </Stack>
  );
}
