export type QuizProgress = {
  currentPage: number;
  answers: Record<number, string>;
};

export const getQuizProgress = (key: string): QuizProgress | null => {
  if (typeof window === "undefined") return null;

  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setQuizProgress = (key: string, value: QuizProgress) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearQuizProgress = (key: string) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
};
