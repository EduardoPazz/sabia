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

  const buildWordContent = async (result: string) => {
    const word = result.toLowerCase();

    setContent({
      word,
      syllables: await requestSyllables(word),
      spelling: word.replace("-", "").split("").join("-"),
    });
  };

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      flexGrow={1}
      pb={3}
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
              <Typography
                key={it}
                fontStyle="italic"
                variant="h5"
                component="p"
                dangerouslySetInnerHTML={{ __html: it }}
              />
            ))
          : "..."}
      </Stack>

      <RecordButton recog={recog} onResult={buildWordContent} />

      <Button
        variant="outlined"
        size="large"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
        onClick={() => speak(content?.word as string)}
      >
        repetir
      </Button>

      <Button
        variant="outlined"
        size="large"
        fullWidth
        startIcon={<RecordVoiceOverIcon />}
        sx={{ maxWidth: 180 }}
        disabled={!content}
        onClick={() => content?.spelling.split("-").forEach(speak)}
      >
        soletrar
      </Button>
    </Stack>
  );
}
