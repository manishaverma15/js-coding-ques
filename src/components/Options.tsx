import React from "react";
interface OptionsProps {
  readonly options: readonly string[];
  readonly selected: string | undefined;
  readonly onSelect: (value: string) => void;
}

const Options = ({ options, selected, onSelect }: OptionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`border rounded-lg px-4 py-2 transition
            ${selected === option
              ? "bg-indigo-600 text-white"
              : "hover:bg-indigo-50"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
