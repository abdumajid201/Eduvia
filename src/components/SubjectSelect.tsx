import { useEffect, useState } from "react";
import type { HistoryEntry, SubjectSummary } from "../types";
import { fetchHistory, fetchSubjects } from "../api";

interface SubjectSelectProps {
  userName: string;
  onStart: (subject: SubjectSummary) => void;
}

export default function SubjectSelect({ userName, onStart }: SubjectSelectProps) {
  const [subjects, setSubjects] = useState<SubjectSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);

  useEffect(() => {
    fetchSubjects()
      .then(setSubjects)
      .catch(() => setError("Fanlar ro'yxatini yuklab bo'lmadi. Server ishlab turganini tekshiring (npm run dev)."));
  }, []);

  function toggleHistory() {
    if (!showHistory && !history) {
      fetchHistory(userName)
        .then(setHistory)
        .catch(() => setHistory([]));
    }
    setShowHistory((v) => !v);
  }

  const selectedSubject = subjects?.find((s) => s.id === selectedId) ?? null;

  return (
    <div className="min-h-[calc(100vh-64px)] py-10 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto text-left mb-8 sm:mb-10">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-indigo-600 mb-2">Imtihonga tayyorgarlik</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Xush kelibsiz, {userName}!</h1>
            <p className="text-slate-500 text-sm mt-2">Test topshirmoqchi bo'lgan fanni tanlang</p>
          </div>
        <button onClick={toggleHistory} className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs text-indigo-700 font-semibold shadow-sm hover:border-indigo-200 hover:bg-indigo-50 transition-colors">
          {showHistory ? "Tarixni yashirish" : "📈 Mening tarixim"}
        </button>
        </div>
      </div>

      {showHistory && (
        <div className="max-w-5xl mx-auto mb-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
          {history === null && <p className="text-sm text-slate-400">Yuklanmoqda...</p>}
          {history && history.length === 0 && (
            <p className="text-sm text-slate-400">Hali hech qanday test topshirmagansiz.</p>
          )}
          {history && history.length > 0 && (
            <div className="space-y-2">
              {history.map((h) => (
                <div key={h.id} className="flex items-center justify-between text-sm border-b border-slate-100 last:border-0 pb-2 last:pb-0">
                  <div>
                    <span className="font-medium text-slate-700">{h.subjectName}</span>
                    <span className="text-slate-400 ml-2 text-xs">
                      {new Date(h.timestamp).toLocaleString("uz-UZ")}
                    </span>
                  </div>
                  <span className="font-semibold text-indigo-600">{h.scorePercent}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="max-w-3xl mx-auto mb-4 rounded-lg bg-red-50 border border-red-300 text-red-700 text-sm px-3 py-2 text-center">
          {error}
        </div>
      )}

      {!subjects && !error && (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 rounded-2xl bg-white/60 border border-slate-200/60 animate-pulse" />
          ))}
        </div>
      )}

      {subjects && (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => {
            const isSelected = subject.id === selectedId;
            return (
              <button
                key={subject.id}
                onClick={() => setSelectedId(subject.id)}
                className={`group relative text-left rounded-2xl border p-5 transition-all duration-200 ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50/80 shadow-md shadow-indigo-100 ring-2 ring-indigo-100"
                    : "border-slate-200/80 bg-white shadow-sm hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-950/5 hover:-translate-y-0.5"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                    ✓
                  </span>
                )}
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 text-2xl mb-3 ring-1 ring-slate-100 group-hover:bg-indigo-50 transition-colors">{subject.icon}</div>
                <div className="font-semibold tracking-tight text-slate-900">{subject.name}</div>
                <div className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9">{subject.description}</div>
                <div className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-100 font-semibold">Savollar banki: {subject.questionCount} ta</div>
              </button>
            );
          })}
        </div>
      )}

      {subjects && (
        <div className="max-w-5xl mx-auto mt-8">
          <button
            onClick={() => selectedSubject && onStart(selectedSubject)}
            disabled={!selectedSubject}
            className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5"
          >
            {selectedSubject ? `${selectedSubject.icon} ${selectedSubject.name} — testni boshlash` : "Avval fan tanlang"}
          </button>
          <p className="text-xs text-slate-400 text-center mt-2.5">
            Test davomida to'liq ekran rejimi yoqiladi, boshqa oynaga o'tish va nusxa olish kuzatiladi.
          </p>
        </div>
      )}
    </div>
  );
}
