"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import type { Question } from "@/types/question";
import QuestionCard from "@/components/QuestionCard";
import Pagination from "@/components/Pagination";

const PER_PAGE = 5;

const QuizPage = () => {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const totalPages = Math.ceil(questions.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleQuestions = questions.slice(
    start,
    start + PER_PAGE
  ) as Question[];

  const handleAnswer = (id: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    let total = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        total++;
      }
    });

    setScore(total);
    setSubmitted(true);
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

        <Pagination current={page} total={totalPages} onChange={setPage} />

        {page === totalPages && !submitted && (
          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Submit Quiz
          </button>
        )}

        {submitted && (
          <div className="mt-6 text-center text-xl font-semibold text-green-700">
            Your Score: {score} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
