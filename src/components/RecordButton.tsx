"use client";

import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

function speech(content: string) {
  const msg = new SpeechSynthesisUtterance();

  msg.volume = 1; //define o volume do áudio (de 0 a 1)
  msg.rate = 1; // define a velocidade do áudio (0.1 a 1)
  msg.pitch = 1; // define o tom em que o áudio é falado ( de 0 a 2)
  msg.text = content;
  msg.lang = "pt-BR"; //define o idioma do áudio
  msg.voice = speechSynthesis.getVoices()[0]; //define a voz a ser usada

  console.log("trying to speak", msg);

  speechSynthesis.speak(msg); //executa a voz
}

export function RecordButton({ recog }: { recog: SpeechRecognition }) {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState("");
  const [syllables, setSyllables] = useState("");

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
    const transcript = e.results[0][0].transcript;
    setResult(transcript);
    setIsRecording(false);
    const timeoutId = setTimeout(() => speech(transcript), 1000);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    console.log("starting to process syllables");

    const word = result.split(" ")[0].trim();

    if (word.length == 0) {
      return;
    }

    console.log("fetching syllables for", word);

    fetch(`/api/${result}`)
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        setSyllables(res["syllables"]);
      });
  }, [result]);

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
      {syllables}
    </Stack>
  );
}
