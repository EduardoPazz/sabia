"use client";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { RecordButton } from "components/RecordButton";
import Image from "next/image";
import { useState } from "react";
import { Word } from "types/Word";
import { requestSyllables } from "utils/requestSyllables";
import { speak } from "utils/speak";
import parrot from "../../public/parrot.png";

export function RecogSection({ recog }: { recog: SpeechRecognition }) {
  const [content, setContent] = useState<Word>();

  const buildWordContent = async (result: string) =>
    setContent({
      word: result,
      syllables: await requestSyllables(result),
      spelling: result.split("").join("-"),
    });

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
        {content
          ? Object.values(content).map((it) => (
              <Typography key={it} fontStyle="italic">
                {it}
              </Typography>
            ))
          : "..."}
      </Stack>

      <RecordButton recog={recog} onResult={buildWordContent} />

      <Button
        variant="outlined"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
        onClick={() => speak(content?.syllables as string)}
      >
        sílabas
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
        onClick={() => speak(content?.spelling as string)}
      >
        soletrar
      </Button>
    </Stack>
  );
}