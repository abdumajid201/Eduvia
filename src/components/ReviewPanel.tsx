import type { ReviewItem } from "../types";

interface ReviewPanelProps {
  review: ReviewItem[];
}

function statusBadge(status: ReviewItem["status"]) {
  if (status === "correct") return { label: "To'g'ri", className: "bg-green-100 text-green-700" };
  if (status === "incorrect") return { label: "Xato", className: "bg-red-100 text-red-700" };
  return { label: "Ko'rib chiqilmoqda", className: "bg-slate-100 text-slate-600" };
}

export default function ReviewPanel({ review }: ReviewPanelProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-4 space-y-3">
      {review.map((item, idx) => {
        const badge = statusBadge(item.status);
        return (
          <div key={item.questionId} className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <p className="text-xs text-slate-400">
                {idx + 1}-savol · {item.topic}
              </p>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${badge.className}`}>{badge.label}</span>
            </div>
            <p className="text-sm font-medium text-slate-800 mb-3 whitespace-pre-wrap">{item.question}</p>

            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt=""
                className="w-full max-h-56 object-contain rounded-lg border border-slate-200 mb-3 bg-slate-50"
              />
            )}

            {item.type === "mcq" && item.options && (
              <div className="grid gap-1.5">
                {item.options.map((opt, optIdx) => {
                  const isCorrect = optIdx === item.correctAnswerIndex;
                  const isSelected = optIdx === item.selectedIndex;
                  return (
                    <div
                      key={optIdx}
                      className={`text-sm px-3 py-1.5 rounded-lg border ${
                        isCorrect
                          ? "border-green-400 bg-green-50 text-green-800"
                          : isSelected
                          ? "border-red-400 bg-red-50 text-red-700"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {opt}
                      {isCorrect && <span className="ml-2 text-xs">✓ to'g'ri javob</span>}
                      {isSelected && !isCorrect && <span className="ml-2 text-xs">✗ sizning javobingiz</span>}
                    </div>
                  );
                })}
              </div>
            )}

            {item.type === "short" && (
              <div className="text-sm space-y-1">
                <p className="text-slate-600">
                  Sizning javobingiz: <span className="font-medium">{item.textAnswer || "(bo'sh)"}</span>
                </p>
                {item.status === "incorrect" && item.acceptedAnswers && (
                  <p className="text-green-700">To'g'ri javob: {item.acceptedAnswers[0]}</p>
                )}
              </div>
            )}

            {item.type === "essay" && (
              <div className="text-sm space-y-2">
                <p className="text-slate-600 whitespace-pre-wrap">
                  Sizning javobingiz: <span className="font-medium">{item.textAnswer || "(bo'sh)"}</span>
                </p>
                {item.modelAnswer && (
                  <p className="text-slate-500 bg-slate-50 rounded-lg px-3 py-2">
                    <span className="font-medium">Namunaviy javob:</span> {item.modelAnswer}
                  </p>
                )}
              </div>
            )}

            {item.type === "speaking" && (
              <div className="space-y-2">
                {item.recordingUrl && <audio controls src={item.recordingUrl} className="h-10 max-w-full" aria-label="Yozilgan speaking javobi" />}
                {item.textAnswer && <p className="text-sm text-slate-600 whitespace-pre-wrap">Qisqa qayd: {item.textAnswer}</p>}
                <p className="text-xs text-slate-500">Og'zaki javob avtomatik baholanmaydi.</p>
              </div>
            )}

            {item.explanation && item.type !== "essay" && item.type !== "speaking" && (
              <p className="text-xs text-slate-500 mt-2 bg-slate-50 rounded-lg px-3 py-2">💡 {item.explanation}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
