"use client";
import { LoadingOrErrorSection } from "components/LoadingOrErrorSection";
import { RecogSection } from "components/RecogSection";
import { useRecog } from "hooks/useRecog";

export default function HomePage() {
  const recog = useRecog();

  return recog ? <RecogSection recog={recog} /> : <LoadingOrErrorSection />;
}
