"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import type { Question } from "@/types/question";
import QuestionCard from "@/components/QuestionCard";
import Pagination from "@/components/Pagination";
import Toast from "@/components/Toast";

const PER_PAGE = 5;

const QuizPage = () => {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [toast, setToast] = useState<null | "correct" | "wrong">(null);

  const totalPages = Math.ceil(questions.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;
  const visibleQuestions = questions.slice(start, start + PER_PAGE) as Question[];

  const handleAnswer = (id: number, value: string) => {
    const question = questions.find((q) => q.id === id);
    if (!question) return;

    setAnswers((prev) => ({ ...prev, [id]: value }));
    setToast(value === question.correctAnswer ? "correct" : "wrong");

    setTimeout(() => setToast(null), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        {visibleQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            selected={answers[q.id]}
            onAnswer={handleAnswer}
          />
        ))}

        <Pagination
          current={page}
          total={totalPages}
          onChange={setPage}
        />
      </div>

      {toast && <Toast type={toast} />}
    </div>
  );
};

export default QuizPage;
