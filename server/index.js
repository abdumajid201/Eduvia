import express from "express";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { subjects, findSubject } from "./data/subjects.js";
import { selectTestQuestions } from "./shuffle.js";
import { evaluateResult, gradeAnswer } from "./evaluate.js";
import { appendResult, readResults } from "./resultsStore.js";

const PORT = Number(process.env.PORT) || 3001;
const ROOT_DIR = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST_DIR = join(ROOT_DIR, "dist");
const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "64kb" }));

const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS || "http://localhost:5173,http://127.0.0.1:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
);

app.use((req, res, next) => {
  const origin = req.get("Origin");
  let isSameOrigin = false;
  if (origin) {
    try {
      isSameOrigin = new URL(origin).host === req.get("host");
    } catch {
      return res.status(403).json({ error: "origin_not_allowed" });
    }
  }

  if (origin && !isSameOrigin && !allowedOrigins.has(origin)) {
    return res.status(403).json({ error: "origin_not_allowed" });
  }

  if (origin && !isSameOrigin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

function sanitizeQuestion(question) {
  const base = {
    id: question.id,
    topic: question.topic,
    type: question.type,
    difficulty: question.difficulty,
    question: question.question,
    imageUrl: question.imageUrl,
    skill: question.skill,
    listeningScript: question.listeningScript,
  };
  if (question.type === "mcq") return { ...base, options: question.options };
  return base;
}

app.get("/api/subjects", (_req, res) => {
  res.json(
    subjects.map((s) => ({
      id: s.id,
      name: s.name,
      icon: s.icon,
      description: s.description,
      questionCount: s.questions.length,
    }))
  );
});

app.get("/api/subjects/:id/questions", (req, res) => {
  const subject = findSubject(req.params.id);
  if (!subject) return res.status(404).json({ error: "subject_not_found" });

  const seed = Date.now() ^ Math.floor(Math.random() * 1_000_000);
  const shuffled = selectTestQuestions(subject.questions, seed);

  res.json({
    subjectId: subject.id,
    subjectName: subject.name,
    seed,
    questions: shuffled.map(sanitizeQuestion),
  });
});

app.post("/api/subjects/:id/submit", (req, res) => {
  const subject = findSubject(req.params.id);
  if (!subject) return res.status(404).json({ error: "subject_not_found" });

  const { seed, userName, answers, violationCount, forcedReason } = req.body ?? {};
  if (typeof seed !== "number" || !Array.isArray(answers)) {
    return res.status(400).json({ error: "invalid_payload" });
  }

  const shuffled = selectTestQuestions(subject.questions, seed);
  const result = evaluateResult(shuffled, answers);

  const answerMap = new Map(answers.map((a) => [a.questionId, a]));
  const review = shuffled.map((question) => {
    const answer = answerMap.get(question.id);
    const { status } = gradeAnswer(question, answer);
    return {
      questionId: question.id,
      topic: question.topic,
      type: question.type,
      question: question.question,
      imageUrl: question.imageUrl,
      options: question.type === "mcq" ? question.options : undefined,
      correctAnswerIndex: question.type === "mcq" ? question.correctAnswerIndex : undefined,
      acceptedAnswers: question.type === "short" ? question.acceptedAnswers : undefined,
      selectedIndex: answer?.selectedIndex ?? null,
      textAnswer: answer?.textAnswer ?? null,
      status,
      explanation: question.explanation ?? null,
      modelAnswer: question.type === "essay" ? question.modelAnswer : undefined,
    };
  });

  const record = {
    userName: String(userName || "Noma'lum"),
    subjectId: subject.id,
    subjectName: subject.name,
    timestamp: new Date().toISOString(),
    ...result,
    autoSubmitted: Boolean(forcedReason),
    forcedReason: forcedReason ?? null,
    violationCount: violationCount ?? null,
  };
  appendResult(record);

  res.json({
    result: {
      ...result,
      autoSubmitted: record.autoSubmitted,
      forcedReason: record.forcedReason,
      violationCount: record.violationCount,
    },
    review,
  });
});

app.get("/api/results", (req, res) => {
  const { userName } = req.query;
  const all = readResults();
  const filtered = userName ? all.filter((r) => r.userName === userName) : all;
  filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  res.json(filtered);
});

app.use("/api", (_req, res) => {
  res.status(404).json({ error: "api_route_not_found" });
});

if (existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR, { index: false, maxAge: "1h" }));
  app.get("*", (req, res, next) => {
    if (req.method !== "GET") return next();
    res.sendFile(join(DIST_DIR, "index.html"), (error) => {
      if (error) next(error);
    });
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Eduvia serveri ${PORT}-portda ishga tushdi`);
});
