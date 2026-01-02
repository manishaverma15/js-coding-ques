import { OptionButton } from "./OptionButton";
import type { Question } from "@/types/question";

type QuestionCardProps = {
  question: Question;
  selected: string | undefined;
  onAnswer: (id: number, value: string) => void;
};

const QuestionCard = ({
  question,
  selected,
  onAnswer
}: QuestionCardProps) => {
  return (
    <div className="mb-6 rounded-xl bg-slate-100 border border-slate-300 p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">
        {question.question}
      </h2>

      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm mb-5 overflow-x-auto">
        <code>{question.code}</code>
      </pre>

      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option}
            option={option}
            selectedOption={selected ?? null}
            correctAnswer={question.correctAnswer}
            onSelect={(value) => onAnswer(question.id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
