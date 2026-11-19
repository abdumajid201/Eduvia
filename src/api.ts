import type { HistoryEntry, QuestionsResponse, SubjectSummary, SubmitResponse, UserAnswer } from "./types";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? `So'rov muvaffaqiyatsiz tugadi (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function fetchSubjects(): Promise<SubjectSummary[]> {
  return request<SubjectSummary[]>("/api/subjects");
}

export function fetchSubjectQuestions(subjectId: string): Promise<QuestionsResponse> {
  return request<QuestionsResponse>(`/api/subjects/${subjectId}/questions`);
}

interface SubmitPayload {
  seed: number;
  userName: string;
  answers: UserAnswer[];
  violationCount?: number;
  forcedReason?: string;
}

export function submitAnswers(subjectId: string, payload: SubmitPayload): Promise<SubmitResponse> {
  return request<SubmitResponse>(`/api/subjects/${subjectId}/submit`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function fetchHistory(userName: string): Promise<HistoryEntry[]> {
  return request<HistoryEntry[]>(`/api/results?userName=${encodeURIComponent(userName)}`);
}
