import type { Result } from "../types";
import { getLevelInfo, getPersonalizedRecommendations, isCertificateEligible } from "../utils/evaluation";

interface SmartLevelEvaluationProps {
  result: Result;
  onRetry?: () => void;
  onViewCertificate?: () => void;
  onToggleReview?: () => void;
  reviewOpen?: boolean;
}

export default function SmartLevelEvaluation({
  result,
  onRetry,
  onViewCertificate,
  onToggleReview,
  reviewOpen,
}: SmartLevelEvaluationProps) {
  const level = getLevelInfo(result.scorePercent);
  const recommendations = getPersonalizedRecommendations(result, level);
  const canGetCertificate = isCertificateEligible(level);

  return (
    <div className={`w-full max-w-2xl mx-auto rounded-3xl border p-5 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ${level.colors.cardBg} ${level.colors.cardBorder}`}>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className={`font-display text-xl sm:text-2xl tracking-tight font-bold ${level.colors.titleText}`}>Test natijasi</h2>
        <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold ${level.colors.badgeBg} ${level.colors.badgeText}`}>
          {level.title}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-6 text-center">
        <div className="bg-white/80 rounded-2xl py-4 ring-1 ring-black/[0.03]">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{result.correctCount}</p>
          <p className="text-xs text-slate-500 mt-1">To'g'ri javob</p>
        </div>
        <div className="bg-white/80 rounded-2xl py-4 ring-1 ring-black/[0.03]">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{result.wrongCount}</p>
          <p className="text-xs text-slate-500 mt-1">Xato javob</p>
        </div>
        <div className="bg-white/80 rounded-2xl py-4 ring-1 ring-black/[0.03]">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{result.scorePercent}%</p>
          <p className="text-xs text-slate-500 mt-1">Umumiy foiz</p>
        </div>
      </div>

      {result.pendingEssayCount > 0 && (
        <p className="text-xs text-slate-500 mt-2 text-center">
          + {result.pendingEssayCount} ta writing javobi avtomatik ballga kiritilmadi.
        </p>
      )}
      {(result.pendingSpeakingCount ?? 0) > 0 && (
        <p className="text-xs text-slate-500 mt-1 text-center">
          + {result.pendingSpeakingCount} ta speaking javobi avtomatik baholanmadi; yozuv natija oynasida qoladi.
        </p>
      )}

      <div className="mt-5">
        <div className="flex justify-between text-sm mb-1 text-slate-600">
          <span>Natija</span>
          <span>{result.scorePercent}%</span>
        </div>
        <div className={`w-full h-3 rounded-full overflow-hidden ${level.colors.progressTrack}`}>
          <div
            className={`h-full rounded-full transition-all duration-700 ${level.colors.progressBar}`}
            style={{ width: `${result.scorePercent}%` }}
            role="progressbar"
            aria-valuenow={result.scorePercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <p className={`mt-4 text-sm font-medium ${level.colors.titleText}`}>{level.summary}</p>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-slate-700 mb-2">Shaxsiylashtirilgan tavsiyalar</h3>
        <ul className="space-y-2">
          {recommendations.map((rec, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-white/80 rounded-xl px-3.5 py-3 ring-1 ring-black/[0.03]">
              <span className="mt-0.5">📌</span>
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {result.topicBreakdown.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Mavzular bo'yicha natija</h3>
          <div className="space-y-2">
            {result.topicBreakdown.map((t) => (
              <div key={t.topic} className="text-sm">
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>{t.topic}</span>
                  <span>
                    {t.correct}/{t.total} ({t.percent}%)
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${t.percent >= WEAK_TOPIC_BAR_THRESHOLD ? "bg-green-500" : "bg-red-400"}`}
                    style={{ width: `${t.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-2">
        {onToggleReview && (
          <button
            onClick={onToggleReview}
            className="w-full py-3 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            {reviewOpen ? "Javoblarni yashirish" : "Javoblarni ko'rish"}
          </button>
        )}
        {canGetCertificate && onViewCertificate && (
          <button
            onClick={onViewCertificate}
            className="w-full py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 shadow-sm transition-colors"
          >
            🎓 Sertifikatni ko'rish
          </button>
        )}
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 shadow-sm transition-colors"
          >
            Testni qayta ishlash
          </button>
        )}
      </div>
    </div>
  );
}

const WEAK_TOPIC_BAR_THRESHOLD = 70;
