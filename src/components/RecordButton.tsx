"use client";

import { Button, Stack } from "@mui/material";
import { useState } from "react";

export function RecordButton({ recog }: { recog: SpeechRecognition }) {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState("");

  recog.onstart = (e) => {
    console.log(e);
    setIsRecording(true);
  };

  recog.onerror = console.log;

  recog.onend = (e) => {
    console.log(e);
    setIsRecording(false);
  };

  recog.onresult = (e) => {
    setResult(e.results[0][0].transcript);
    setIsRecording(false);
  };

  function handleClick() {
    if (isRecording) {
      recog.stop();
    } else {
      recog.start();
    }
  }

  return (
    <Stack spacing={3}>
      <Button variant="contained" onClick={handleClick}>
        {isRecording ? "Stop" : "Record"}
      </Button>
      {result}
    </Stack>
  );
}
