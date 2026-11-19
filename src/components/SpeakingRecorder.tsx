import { useEffect, useRef, useState } from "react";

interface SpeakingRecorderProps {
  recording: Blob | null;
  onChange: (recording: Blob | null) => void;
}

export default function SpeakingRecorder({ recording, onChange }: SpeakingRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState("");
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!recording) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(recording);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [recording]);

  useEffect(() => () => {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    streamRef.current?.getTracks().forEach((track) => track.stop());
  }, []);

  async function startRecording() {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("Bu brauzerda audio yozib olish ishlamaydi. Quyidagi maydonga javobingizni yozing.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
        if (blob.size > 0) onChange(blob);
        stream.getTracks().forEach((track) => track.stop());
        if (streamRef.current === stream) streamRef.current = null;
        setIsRecording(false);
      };
      recorder.start();
      setIsRecording(true);
    } catch {
      setError("Mikrofon ruxsatini olib bo'lmadi. Ruxsat bering yoki javobingizni yozing.");
    }
  }

  function stopRecording() {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  }

  return (
    <div className="rounded-xl border border-violet-100 bg-violet-50/60 p-4">
      <div className="flex flex-wrap items-center gap-3">
        {isRecording ? (
          <button type="button" onClick={stopRecording} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
            Yozishni to'xtatish
          </button>
        ) : (
          <button type="button" onClick={startRecording} className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-800">
            {recording ? "Qayta yozib olish" : "Javobni yozib olish"}
          </button>
        )}
        {isRecording && <span className="inline-flex items-center gap-2 text-sm text-red-700"><span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />Mikrofon yozmoqda</span>}
        {previewUrl && !isRecording && <audio controls src={previewUrl} className="h-10 max-w-full" aria-label="Yozib olingan javob" />}
      </div>
      {error && <p role="alert" className="mt-2 text-xs text-amber-800">{error}</p>}
      <p className="mt-2 text-xs text-slate-500">Yozuv hozircha faqat shu brauzer sessiyasida ko'rib chiqiladi; serverga yuborilmaydi.</p>
    </div>
  );
}
