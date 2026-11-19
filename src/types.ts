export type QuestionType = "mcq" | "short" | "essay" | "speaking";
export type EnglishSkill = "reading" | "writing" | "listening" | "speaking";
export type Difficulty = "medium" | "hard";

interface BaseClientQuestion {
  id: number;
  topic: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  imageUrl?: string;
  skill?: EnglishSkill;
  listeningScript?: string;
}

export interface McqClientQuestion extends BaseClientQuestion {
  type: "mcq";
  options: string[];
}

export interface ShortClientQuestion extends BaseClientQuestion {
  type: "short";
}

export interface EssayClientQuestion extends BaseClientQuestion {
  type: "essay";
}

export interface SpeakingClientQuestion extends BaseClientQuestion {
  type: "speaking";
}

export type ClientQuestion = McqClientQuestion | ShortClientQuestion | EssayClientQuestion | SpeakingClientQuestion;

export interface SubjectSummary {
  id: string;
  name: string;
  icon: string;
  description: string;
  questionCount: number;
}

export interface QuestionsResponse {
  subjectId: string;
  subjectName: string;
  seed: number;
  questions: ClientQuestion[];
}

export interface UserAnswer {
  questionId: number;
  type: QuestionType;
  selectedIndex: number | null;
  textAnswer: string | null;
  recording?: Blob | null;
}

export interface TopicStat {
  topic: string;
  correct: number;
  total: number;
  percent: number;
}

export type ForcedReason = "violation" | "timeout";

export interface Result {
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  scorePercent: number;
  topicBreakdown: TopicStat[];
  pendingEssayCount: number;
  pendingSpeakingCount?: number;
  autoSubmitted?: boolean;
  forcedReason?: ForcedReason;
  violationCount?: number;
}

export type AnswerStatus = "correct" | "incorrect" | "pending";

export interface ReviewItem {
  questionId: number;
  topic: string;
  type: QuestionType;
  question: string;
  imageUrl?: string;
  options?: string[];
  correctAnswerIndex?: number;
  acceptedAnswers?: string[];
  selectedIndex: number | null;
  textAnswer: string | null;
  status: AnswerStatus;
  explanation: string | null;
  modelAnswer?: string;
  recordingUrl?: string;
}

export interface SubmitResponse {
  result: Result;
  review: ReviewItem[];
}

export interface HistoryEntry {
  id: string;
  userName: string;
  subjectId: string;
  subjectName: string;
  timestamp: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  scorePercent: number;
  pendingEssayCount: number;
  pendingSpeakingCount?: number;
  autoSubmitted: boolean;
  forcedReason: ForcedReason | null;
  violationCount: number | null;
}

export type LevelCode = "A" | "B" | "C" | "D";

export interface LevelColorPalette {
  cardBg: string;
  cardBorder: string;
  titleText: string;
  badgeBg: string;
  badgeText: string;
  progressTrack: string;
  progressBar: string;
}

export interface LevelInfo {
  code: LevelCode;
  title: string;
  minPercent: number;
  maxPercent: number;
  summary: string;
  colors: LevelColorPalette;
}

export type AppStep = "landing" | "login" | "select-subject" | "quiz" | "result" | "certificate";
