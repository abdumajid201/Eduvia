import { useEffect, useMemo, useRef, useState } from "react";
import type { ForcedReason, QuestionsResponse, ReviewItem, Result, SubjectSummary, UserAnswer } from "../types";
import { fetchSubjectQuestions, submitAnswers } from "../api";
import { useCountdown, formatSeconds } from "../hooks/useCountdown";
import { useExamSecurity } from "../hooks/useExamSecurity";
import Watermark from "./Watermark";
import ListeningPlayer from "./ListeningPlayer";
import SpeakingRecorder from "./SpeakingRecorder";

interface QuizRunnerProps {
  subject: SubjectSummary;
  userName: string;
  onFinish: (result: Result, review: ReviewItem[]) => void;
  onCancel: () => void;
}

const SECONDS_PER_QUESTION = 50;
const MAX_VIOLATIONS = 3;

export default function QuizRunner({ subject, userName, onFinish, onCancel }: QuizRunnerProps) {
  const [data, setData] = useState<QuestionsResponse | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const answersRef = useRef<UserAnswer[]>([]);
  answersRef.current = answers;
  const finishedRef = useRef(false);
  const lastFinalizeArgs = useRef<{ reason?: ForcedReason; violations?: number }>({});

  useEffect(() => {
    document.body.classList.add("exam-active");
    return () => document.body.classList.remove("exam-active");
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchSubjectQuestions(subject.id)
      .then((response) => {
        if (cancelled) return;
        setData(response);
        setAnswers(
          response.questions.map((q) => ({
            questionId: q.id,
            type: q.type,
            selectedIndex: null,
            textAnswer: null,
            recording: null,
          }))
        );
      })
      .catch(() => {
        if (!cancelled) setLoadError("Savollarni yuklab bo'lmadi. Server ishlab turganini tekshiring.");
      });
    return () => {
      cancelled = true;
    };
  }, [subject.id]);

  const watermarkText = useMemo(() => `${userName} · ${new Date().toLocaleDateString("uz-UZ")}`, [userName]);

  async function finalize(reason?: ForcedReason, violations?: number) {
    if (finishedRef.current || !data) return;
    finishedRef.current = true;
    lastFinalizeArgs.current = { reason, violations };
    setSubmitting(true);
    setSubmitError(null);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    try {
      const response = await submitAnswers(subject.id, {
        seed: data.seed,
        userName,
        answers: answersRef.current.map(({ questionId, type, selectedIndex, textAnswer }) => ({
          questionId,
          type,
          selectedIndex,
          textAnswer,
        })),
        violationCount: reason === "violation" ? violations : undefined,
        forcedReason: reason,
      });
      const recordings = new Map(
        answersRef.current
          .filter((answer) => answer.recording)
          .map((answer) => [answer.questionId, URL.createObjectURL(answer.recording as Blob)])
      );
      onFinish(
        response.result,
        response.review.map((item) => ({ ...item, recordingUrl: recordings.get(item.questionId) }))
      );
    } catch {
      finishedRef.current = false;
      setSubmitting(false);
      setSubmitError("Natijani yuborishda xatolik yuz berdi. Internetni tekshirib, qayta urinib ko'ring.");
    }
  }

  const total = data?.questions.length ?? 0;
  const secondsLeft = useCountdown(
    total * SECONDS_PER_QUESTION,
    () => finalize("timeout"),
    Boolean(data) && !finishedRef.current
  );

  const { violationCount, lastWarning } = useExamSecurity({
    enabled: Boolean(data) && !finishedRef.current,
    maxViolations: MAX_VIOLATIONS,
    onForceSubmit: (count) => finalize("violation", count),
  });

  function updateAnswer(questionId: number, patch: Partial<UserAnswer>) {
    setAnswers((prev) => prev.map((a) => (a.questionId === questionId ? { ...a, ...patch } : a)));
  }

  function handleCancel() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    onCancel();
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md bg-white rounded-xl border border-red-200 p-6 text-center">
          <p className="text-red-600 font-medium mb-3">{loadError}</p>
          <button onClick={onCancel} className="text-sm text-slate-500 hover:text-slate-700">
            ← Fanlarga qaytish
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-slate-500 text-sm">Savollar yuklanmoqda...</p>
      </div>
    );
  }

  const answeredCount = answers.filter((a) =>
    a.type === "mcq"
      ? a.selectedIndex !== null
      : a.type === "speaking"
      ? Boolean(a.recording || a.textAnswer?.trim())
      : Boolean(a.textAnswer && a.textAnswer.trim().length > 0)
  ).length;
  const allAnswered = answeredCount === total;
  const currentQuestion = data.questions[currentIndex];
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);
  const isLast = currentIndex === total - 1;
  const timeCritical = secondsLeft <= 60;

  return (
    <div className="min-h-screen py-10 px-4 select-none">
      <Watermark text={watermarkText} />

      <div className="max-w-2xl mx-auto mb-4 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="font-display text-xl font-bold text-slate-800">
            {subject.icon} {subject.name}
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Savol {currentIndex + 1} / {total}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold tabular-nums ${
              timeCritical ? "bg-red-100 text-red-700" : "bg-slate-200 text-slate-700"
            }`}
          >
            ⏱ {formatSeconds(secondsLeft)}
          </span>
          <button onClick={handleCancel} className="text-sm text-slate-500 hover:text-slate-700">
            ← Fanlarga qaytish
          </button>
        </div>
      </div>

      {lastWarning && (
        <div className="max-w-2xl mx-auto mb-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-sm px-3 py-2">
          ⚠️ Ogohlantirish: {lastWarning} ({violationCount}/{MAX_VIOLATIONS}).{" "}
          {MAX_VIOLATIONS - violationCount > 0
            ? `Yana ${MAX_VIOLATIONS - violationCount} marta buzilsa, test avtomatik yakunlanadi.`
            : "Test yakunlanmoqda."}
        </div>
      )}

      {submitError && (
        <div className="max-w-2xl mx-auto mb-4 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm px-3 py-2 flex items-center justify-between gap-3">
          <span>{submitError}</span>
          <button
            onClick={() => finalize(lastFinalizeArgs.current.reason, lastFinalizeArgs.current.violations)}
            className="shrink-0 px-3 py-1 rounded-md bg-red-600 text-white text-xs font-medium hover:bg-red-700"
          >
            Qayta urinish
          </button>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-5">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/70 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-slate-400">{currentQuestion.topic}</p>
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
              {currentQuestion.difficulty === "hard" ? "Qiyin" : "O'rta"}
            </span>
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600">
              {currentQuestion.skill
                ? { reading: "Reading", writing: "Writing", listening: "Listening", speaking: "Speaking" }[currentQuestion.skill]
                : currentQuestion.type === "mcq"
                ? "Variantli"
                : currentQuestion.type === "short"
                ? "Qisqa javob"
                : "Erkin javob"}
            </span>
          </div>
          <p className="font-medium text-slate-800 mb-4 whitespace-pre-wrap">{currentQuestion.question}</p>

          {currentQuestion.skill === "listening" && currentQuestion.listeningScript && (
            <ListeningPlayer key={currentQuestion.id} script={currentQuestion.listeningScript} />
          )}

          {currentQuestion.imageUrl && (
            <img
              src={currentQuestion.imageUrl}
              alt=""
              draggable={false}
              className="w-full max-h-72 object-contain rounded-lg border border-slate-200 mb-4 bg-slate-50"
            />
          )}

          {currentQuestion.type === "mcq" && (
            <div className="grid gap-2">
              {currentQuestion.options.map((opt, optIdx) => {
                const isSelected = currentAnswer?.selectedIndex === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => updateAnswer(currentQuestion.id, { selectedIndex: optIdx })}
                    className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                      isSelected
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {currentQuestion.type === "short" && (
            <input
              type="text"
              value={currentAnswer?.textAnswer ?? ""}
              onChange={(e) => updateAnswer(currentQuestion.id, { textAnswer: e.target.value })}
              placeholder="Javobingizni shu yerga yozing..."
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          )}

          {currentQuestion.type === "essay" && (
            <textarea
              value={currentAnswer?.textAnswer ?? ""}
              onChange={(e) => updateAnswer(currentQuestion.id, { textAnswer: e.target.value })}
              placeholder="Fikringizni to'liq va erkin yozing..."
              rows={5}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          )}

          {currentQuestion.type === "speaking" && (
            <div className="space-y-3">
              <SpeakingRecorder
                recording={currentAnswer?.recording ?? null}
                onChange={(recording) => updateAnswer(currentQuestion.id, { recording })}
              />
              <label className="block text-xs font-medium text-slate-600" htmlFor="speaking-notes">
                Xohlasangiz, aytgan javobingizdan qisqa qayd yozing
              </label>
              <textarea
                id="speaking-notes"
                value={currentAnswer?.textAnswer ?? ""}
                onChange={(e) => updateAnswer(currentQuestion.id, { textAnswer: e.target.value })}
                placeholder="Your spoken answer or a short transcript..."
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4 justify-center">
          {data.questions.map((q, idx) => {
            const ans = answers.find((a) => a.questionId === q.id);
            const isAnswered = ans && (
              ans.type === "mcq"
                ? ans.selectedIndex !== null
                : ans.type === "speaking"
                ? Boolean(ans.recording || ans.textAnswer?.trim())
                : Boolean(ans.textAnswer?.trim())
            );
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded-md text-xs font-medium border transition-colors ${
                  isCurrent
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : isAnswered
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-white text-slate-500 border-slate-200"
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="flex-1 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
          >
            ← Oldingi
          </button>
          {isLast ? (
            <button
              onClick={() => finalize()}
              disabled={!allAnswered || submitting}
              className="flex-1 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
              {submitting ? "Yuborilmoqda..." : `Testni yakunlash (${answeredCount}/${total})`}
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex((i) => Math.min(total - 1, i + 1))}
              className="flex-1 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Keyingi →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
