export interface Question {
  readonly id: number;
  readonly question: string;
  readonly code: string;
  readonly options: readonly string[];
  readonly correctAnswer: string;
  readonly explanation: string;
}
