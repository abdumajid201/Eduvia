import { useEffect, useState } from "react";

interface ListeningPlayerProps {
  script: string;
}

const MAX_PLAYS = 2;

export default function ListeningPlayer({ script }: ListeningPlayerProps) {
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  function playAudio() {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
      setError("Brauzeringiz audio tinglashni qo'llab-quvvatlamaydi.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(script);
    utterance.lang = "en-US";
    utterance.rate = 0.88;
    const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;

    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => {
      setPlaying(false);
      setError("Audioni ijro etib bo'lmadi.");
    };

    setError("");
    setPlays((count) => count + 1);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="mb-5 rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Listening audio</p>
          <p className="mt-1 text-xs text-slate-500">Matnni ko'rmasdan tinglang. Brauzer ovozi audio yozuvni ko'pi bilan 2 marta ijro etadi.</p>
        </div>
        <button
          type="button"
          onClick={playAudio}
          disabled={playing || plays >= MAX_PLAYS}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          {playing ? "Tinglanmoqda..." : "Audioni tinglash"}
          <span className="text-indigo-100">{plays}/{MAX_PLAYS}</span>
        </button>
      </div>
      {error && <p role="alert" className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
