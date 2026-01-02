type OptionButtonProps = {
  option: string;
  selectedOption: string | null;
  correctAnswer: string;
  onSelect: (option: string) => void;
};

export const OptionButton = ({
  option,
  selectedOption,
  correctAnswer,
  onSelect
}: OptionButtonProps) => {
  const isSelected = selectedOption === option;
  const isCorrect = option === correctAnswer;
  const isWrong = isSelected && option !== correctAnswer;

  const baseStyle =
    "w-full text-left px-4 py-3 rounded-lg border transition-colors duration-200";

  const defaultStyle =
    "bg-white border-slate-300 hover:bg-slate-100";

  const correctStyle =
    "bg-green-100 border-green-400 text-green-800";

  const wrongStyle =
    "bg-red-100 border-red-400 text-red-800";

  let finalStyle = defaultStyle;

  if (isSelected && isCorrect) {
    finalStyle = correctStyle;
  }

  if (isWrong) {
    finalStyle = wrongStyle;
  }

  return (
    <button
      className={`${baseStyle} ${finalStyle}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
};
