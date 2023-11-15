export function speak(content: string) {
  const message = new SpeechSynthesisUtterance();

  message.volume = 1;
  message.rate = 1;
  message.pitch = 1;
  message.lang = "pt-BR";
  message.text = content;

  console.log("trying to speak ", message);

  speechSynthesis.speak(message);
}
