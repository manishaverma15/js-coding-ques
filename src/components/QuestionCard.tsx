import type { Question } from "@/types/question";
import CodeBlock from "./CodeBlock";
import Options from "./Options";

interface Props {
  readonly question: Question;
  readonly selected?: string;
  readonly onAnswer: (id: number, value: string) => void;
}

const QuestionCard = ({ question, selected, onAnswer }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold">{question.question}</h2>

      <CodeBlock code={question.code} />

      <Options
        options={question.options}
        selected={selected}
        onSelect={(value) => onAnswer(question.id, value)}
      />
    </div>
  );
};

export default QuestionCard;
