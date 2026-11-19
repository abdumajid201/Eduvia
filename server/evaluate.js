function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/['`´’‘]/g, "'")
    .replace(/\s+/g, " ")
    .replace(/[.,!?;:]+$/g, "");
}

function isShortAnswerCorrect(question, textAnswer) {
  const normalizedAnswer = normalizeText(textAnswer);
  if (!normalizedAnswer) return false;
  return question.acceptedAnswers.some((accepted) => normalizeText(accepted) === normalizedAnswer);
}

export function gradeAnswer(question, userAnswer) {
  if (question.type === "mcq") {
    const selectedIndex = userAnswer?.selectedIndex;
    return {
      status: selectedIndex === question.correctAnswerIndex ? "correct" : "incorrect",
    };
  }
  if (question.type === "short") {
    const correct = isShortAnswerCorrect(question, userAnswer?.textAnswer);
    return { status: correct ? "correct" : "incorrect" };
  }
  // Writing and speaking responses need human review.
  return { status: "pending" };
}

export function evaluateResult(questions, answers) {
  const answerMap = new Map(answers.map((a) => [a.questionId, a]));
  const topicMap = new Map();

  let correctCount = 0;
  let wrongCount = 0;
  let pendingCount = 0;
  let pendingSpeakingCount = 0;
  let gradableCount = 0;

  for (const question of questions) {
    const answer = answerMap.get(question.id);
    const { status } = gradeAnswer(question, answer);

    if (status !== "pending") {
      gradableCount += 1;
      if (status === "correct") correctCount += 1;
      else wrongCount += 1;

      const stat = topicMap.get(question.topic) ?? { correct: 0, total: 0 };
      stat.total += 1;
      if (status === "correct") stat.correct += 1;
      topicMap.set(question.topic, stat);
    } else {
      if (question.type === "speaking") pendingSpeakingCount += 1;
      else pendingCount += 1;
    }
  }

  const scorePercent = gradableCount === 0 ? 0 : Math.round((correctCount / gradableCount) * 100);

  const topicBreakdown = Array.from(topicMap.entries()).map(([topic, stat]) => ({
    topic,
    correct: stat.correct,
    total: stat.total,
    percent: stat.total === 0 ? 0 : Math.round((stat.correct / stat.total) * 100),
  }));

  return {
    totalQuestions: gradableCount,
    correctCount,
    wrongCount,
    scorePercent,
    topicBreakdown,
    pendingEssayCount: pendingCount,
    pendingSpeakingCount,
  };
}
