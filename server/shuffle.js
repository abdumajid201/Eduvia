function mulberry32(seed) {
  let state = seed | 0;
  return function random() {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(items, random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const QUESTIONS_PER_TEST = 20;

export function shuffleQuestions(questions, seed) {
  const random = mulberry32(seed);
  const orderedQuestions = seededShuffle(questions, random);

  return orderedQuestions.map((question) => {
    if (question.type !== "mcq") return question;
    const correctOption = question.options[question.correctAnswerIndex];
    const shuffledOptions = seededShuffle(question.options, random);
    return {
      ...question,
      options: shuffledOptions,
      correctAnswerIndex: shuffledOptions.indexOf(correctOption),
    };
  });
}

export function selectTestQuestions(questions, seed) {
  const shuffled = shuffleQuestions(questions, seed);
  if (shuffled.length <= QUESTIONS_PER_TEST) return shuffled;

  if (shuffled.some((question) => question.skill === "listening" || question.skill === "speaking")) {
    const choose = (items, count) => items.slice(0, Math.min(count, items.length));
    const reading = shuffled.filter((question) => question.skill === "reading");
    const listening = shuffled.filter((question) => question.skill === "listening");
    const writing = shuffled.filter((question) => question.skill === "writing");
    const speaking = shuffled.filter((question) => question.skill === "speaking");
    const shortAnswers = shuffled.filter((question) => question.type === "short");
    const otherMultipleChoice = shuffled.filter((question) => question.type === "mcq" && !question.skill);

    const selected = [
      ...choose(reading, 2),
      ...choose(listening, 3),
      ...choose(writing, 1),
      ...choose(speaking, 1),
      ...choose(shortAnswers, 3),
      ...choose(otherMultipleChoice, 10),
    ];
    return seededShuffle(selected, mulberry32(seed ^ 0x9e3779b9));
  }

  // Keep a mix of question types in every attempt while choosing different
  // questions from each pool. Reusing the seed makes submission grading match.
  const essays = shuffled.filter((question) => question.type === "essay");
  const shortAnswers = shuffled.filter((question) => question.type === "short");
  const multipleChoice = shuffled.filter((question) => question.type === "mcq");

  const essayCount = Math.min(1, essays.length);
  const shortCount = Math.min(2, shortAnswers.length);
  const mcqCount = QUESTIONS_PER_TEST - essayCount - shortCount;
  const selected = [
    ...essays.slice(0, essayCount),
    ...shortAnswers.slice(0, shortCount),
    ...multipleChoice.slice(0, mcqCount),
  ];

  return seededShuffle(selected, mulberry32(seed ^ 0x9e3779b9));
}
