export type QuestionCategory = "javascript" | "react" | "nextjs";

export type Question = {
  readonly id: number;
  readonly category: QuestionCategory;
  readonly question: string;
  readonly code?: string;
  readonly options: readonly string[];
  readonly correctAnswer: string;
  readonly explanation: string;

};
