import type { LevelInfo, Result } from "../types";

const LEVELS: LevelInfo[] = [
  {
    code: "A",
    title: "Yuqori (A+ / A daraja)",
    minPercent: 86,
    maxPercent: 100,
    summary: "A'lo natija — siz imtihonga to'liq tayyorsiz.",
    colors: {
      cardBg: "bg-green-50",
      cardBorder: "border-green-300",
      titleText: "text-green-800",
      badgeBg: "bg-green-600",
      badgeText: "text-white",
      progressTrack: "bg-green-100",
      progressBar: "bg-green-600",
    },
  },
  {
    code: "B",
    title: "O'rta (B+ / B daraja)",
    minPercent: 70,
    maxPercent: 85,
    summary: "Yaxshi natija, lekin ba'zi mavzularni takrorlash kerak.",
    colors: {
      cardBg: "bg-blue-50",
      cardBorder: "border-blue-300",
      titleText: "text-blue-800",
      badgeBg: "bg-blue-600",
      badgeText: "text-white",
      progressTrack: "bg-blue-100",
      progressBar: "bg-blue-600",
    },
  },
  {
    code: "C",
    title: "Qoniqarli (C daraja)",
    minPercent: 55,
    maxPercent: 69,
    summary: "Asosiy tushunchalarni mustahkamlash lozim.",
    colors: {
      cardBg: "bg-yellow-50",
      cardBorder: "border-yellow-300",
      titleText: "text-yellow-800",
      badgeBg: "bg-yellow-500",
      badgeText: "text-white",
      progressTrack: "bg-yellow-100",
      progressBar: "bg-yellow-500",
    },
  },
  {
    code: "D",
    title: "Boshlang'ich / Qoniqarsiz",
    minPercent: 0,
    maxPercent: 54,
    summary: "Jiddiy tayyorgarlik ko'rish kerak.",
    colors: {
      cardBg: "bg-red-50",
      cardBorder: "border-red-300",
      titleText: "text-red-800",
      badgeBg: "bg-red-600",
      badgeText: "text-white",
      progressTrack: "bg-red-100",
      progressBar: "bg-red-600",
    },
  },
];

export function getLevelInfo(scorePercent: number): LevelInfo {
  const clamped = Math.min(100, Math.max(0, scorePercent));
  const level = LEVELS.find((l) => clamped >= l.minPercent && clamped <= l.maxPercent);
  return level ?? LEVELS[LEVELS.length - 1];
}

export function isCertificateEligible(level: LevelInfo): boolean {
  return level.code === "A" || level.code === "B";
}

const WEAK_TOPIC_THRESHOLD = 70;

export function getPersonalizedRecommendations(result: Result, level: LevelInfo): string[] {
  const recommendations: string[] = [];

  const weakTopics = result.topicBreakdown
    .filter((t) => t.percent < WEAK_TOPIC_THRESHOLD)
    .sort((a, b) => a.percent - b.percent);

  if (weakTopics.length > 0) {
    for (const t of weakTopics) {
      recommendations.push(`"${t.topic}" mavzusini takrorlang — bu bo'yicha natijangiz ${t.percent}% (${t.correct}/${t.total} to'g'ri).`);
    }
  } else {
    recommendations.push("Barcha mavzular bo'yicha natijangiz yaxshi — mavjud bilimingizni mustahkamlashda davom eting.");
  }

  if (result.pendingEssayCount > 0) {
    recommendations.push(
      `${result.pendingEssayCount} ta erkin yozma javobingiz ballga qo'shilmadi — ular alohida ko'rib chiqiladi, natijalarni "Javoblarni ko'rish" bo'limidan tekshiring.`
    );
  }

  switch (level.code) {
    case "A":
      recommendations.push("Imtihonga tayyorsiz. Murakkab va amaliy misollarni yechib, tezlikni oshiring.");
      break;
    case "B":
      recommendations.push("Zaif mavzularni takrorlab, qo'shimcha mashqlar bilan bilimingizni mustahkamlang.");
      break;
    case "C":
      recommendations.push("Asosiy nazariy tushunchalarni qaytadan o'qib chiqing va ko'proq mashq ishlang.");
      break;
    case "D":
      recommendations.push("Mavzularni boshidan sinchiklab o'rganishni tavsiya qilamiz. Darslik va video darslardan boshlang.");
      break;
  }

  return recommendations;
}
