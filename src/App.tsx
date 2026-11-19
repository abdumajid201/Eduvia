import { useEffect, useState } from "react";
import type { AppStep, ReviewItem, Result, SubjectSummary } from "./types";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SubjectSelect from "./components/SubjectSelect";
import QuizRunner from "./components/QuizRunner";
import SmartLevelEvaluation from "./components/SmartLevelEvaluation";
import ReviewPanel from "./components/ReviewPanel";
import Certificate from "./components/Certificate";
import Header from "./components/Header";
import { getLevelInfo } from "./utils/evaluation";

export default function App() {
  const [step, setStep] = useState<AppStep>("landing");
  const [userName, setUserName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<SubjectSummary | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [review, setReview] = useState<ReviewItem[] | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [quizAttempt, setQuizAttempt] = useState(0);

  useEffect(() => () => {
    review?.forEach((item) => {
      if (item.recordingUrl) URL.revokeObjectURL(item.recordingUrl);
    });
  }, [review]);

  function handleLogin(fullName: string) {
    setUserName(fullName);
    setStep("select-subject");
  }

  function handleStartQuiz(subject: SubjectSummary) {
    document.documentElement.requestFullscreen?.().catch(() => {});
    setQuizAttempt((attempt) => attempt + 1);
    setSelectedSubject(subject);
    setResult(null);
    setReview(null);
    setReviewOpen(false);
    setStep("quiz");
  }

  function handleFinishQuiz(computedResult: Result, computedReview: ReviewItem[]) {
    setResult(computedResult);
    setReview(computedReview);
    setReviewOpen(false);
    setStep("result");
  }

  function handleRetrySameSubject() {
    document.documentElement.requestFullscreen?.().catch(() => {});
    setQuizAttempt((attempt) => attempt + 1);
    setResult(null);
    setReview(null);
    setReviewOpen(false);
    setStep("quiz");
  }

  function handleBackToSubjects() {
    setSelectedSubject(null);
    setResult(null);
    setReview(null);
    setStep("select-subject");
  }

  function handleLogout() {
    setUserName("");
    setSelectedSubject(null);
    setResult(null);
    setReview(null);
    setStep("landing");
  }

  if (step === "landing") {
    return <Landing onEnter={() => setStep("login")} />;
  }

  if (step === "login") {
    return (
      <>
        <Header />
        <Login onLogin={handleLogin} />
      </>
    );
  }

  if (step === "select-subject") {
    return (
      <>
        <Header userName={userName} right={<LogoutButton onClick={handleLogout} />} />
        <SubjectSelect userName={userName} onStart={handleStartQuiz} />
      </>
    );
  }

  if (step === "quiz" && selectedSubject) {
    return (
      <QuizRunner
        key={`${selectedSubject.id}-${quizAttempt}`}
        subject={selectedSubject}
        userName={userName}
        onFinish={handleFinishQuiz}
        onCancel={handleBackToSubjects}
      />
    );
  }

  if (step === "certificate" && result && selectedSubject) {
    return (
      <Certificate
        userName={userName}
        subjectName={selectedSubject.name}
        scorePercent={result.scorePercent}
        level={getLevelInfo(result.scorePercent)}
        onBack={() => setStep("result")}
      />
    );
  }

  if (step === "result" && result && review && selectedSubject) {
    return (
      <>
        <Header userName={userName} right={<LogoutButton onClick={handleLogout} />} />
        <div className="min-h-screen py-10 px-4 sm:py-12">
          <div className="max-w-2xl mx-auto mb-7 text-center">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-indigo-600 mb-2">Sizning natijangiz</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {selectedSubject.icon} {selectedSubject.name} — natijangiz
            </h1>
          </div>

          {result.autoSubmitted && (
            <div className="max-w-2xl mx-auto mb-4 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 text-sm px-3 py-2 text-center">
              {result.forcedReason === "violation"
                ? `Test xavfsizlik qoidalari ${result.violationCount ?? ""} marta buzilgani sababli avtomatik yakunlandi.`
                : "Vaqt tugagani sababli test avtomatik yakunlandi."}
            </div>
          )}

          <SmartLevelEvaluation
            result={result}
            onRetry={handleRetrySameSubject}
            onViewCertificate={() => setStep("certificate")}
            onToggleReview={() => setReviewOpen((v) => !v)}
            reviewOpen={reviewOpen}
          />

          {reviewOpen && <ReviewPanel review={review} />}

          <div className="max-w-2xl mx-auto mt-3">
            <button
              onClick={handleBackToSubjects}
              className="w-full py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Boshqa fan tanlash
            </button>
          </div>
        </div>
      </>
    );
  }

  return null;
}

function LogoutButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
      Chiqish
    </button>
  );
}
