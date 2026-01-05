"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import { OptionButton } from "@/components/OptionButton";
import { getQuizProgress, setQuizProgress } from "@/utils/quizStorage";

export default function QuestionsPage() {
  const { category } = useParams<{ category: string }>();
  const storageKey = `quiz-progress-${category}`;

  const filteredQuestions = questions.filter(
    q => q.category === category
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = getQuizProgress(storageKey);
    if (saved) {
      setCurrentPage(saved.currentPage);
      setAnswers(saved.answers);
    }
  }, [storageKey]);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    setQuizProgress(storageKey, {
      currentPage,
      answers
    });
  }, [currentPage, answers, storageKey]);

  const question = filteredQuestions[currentPage];

  const handleSelect = (id: number, option: string) => {
    if (answers[id]) return;

    setAnswers(prev => ({
      ...prev,
      [id]: option
    }));
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Questions
      </h2>

      <div className="rounded-xl bg-slate-50 p-6 shadow">
        <p className="font-semibold mb-4">
          Q{currentPage + 1}. {question.question}
        </p>

        {question.code && (
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            {question.code}
          </pre>
        )}

        <div className="space-y-3">
          {question.options.map(option => (
            <OptionButton
              key={option}
              option={option}
              selectedOption={answers[question.id] ?? null}
              correctAnswer={question.correctAnswer}
              onSelect={() => handleSelect(question.id, option)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(p => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <button
          disabled={currentPage === filteredQuestions.length - 1}
          onClick={() => setCurrentPage(p => p + 1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
