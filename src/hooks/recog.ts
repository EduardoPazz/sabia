export function useRecog() {
  if (typeof window === "undefined") {
    return null;
  }

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return null;
  }

  const recog = new SpeechRecognition();

  recog.lang = "pt-BR";

  return recog;
}
