import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useState } from "react";

export function RecordButton({
  recog,
  onResult,
}: {
  recog: SpeechRecognition;
  onResult: (result: string) => void;
}) {
  const [isRecording, setIsRecording] = useState(false);

  recog.onstart = () => setIsRecording(true);

  recog.onerror = console.log;

  recog.onend = () => setIsRecording(false);

  recog.onresult = (e) => {
    const transcript = e.results[0][0].transcript;

    console.log({ transcript });

    setIsRecording(false);

    onResult(transcript.split(" ")[0]);
  };

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<MicIcon />}
      disabled={isRecording}
      onClick={() => recog.start()}
      sx={{ maxWidth: 180 }}
    >
      {isRecording ? "gravando" : "gravar"}
    </Button>
  );
}
