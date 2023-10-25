"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export function RecordButton({ recog }: { recog: SpeechRecognition }) {
  const [isRecording, setIsRecording] = useState(false);

  recog.onstart = (e) => {
    console.log(e);
    setIsRecording(true);
  };

  recog.onerror = console.log;

  recog.onend = (e) => {
    console.log(e);
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
    <Button variant="contained" onClick={handleClick}>
      {isRecording ? "Stop" : "Record"}
    </Button>
  );
}
