interface PaginationProps {
  readonly current: number;
  readonly total: number;
  readonly onChange: (page: number) => void;
}

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`px-3 py-1 rounded
            ${page === current
              ? "bg-indigo-600 text-white"
              : "border hover:bg-indigo-50"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
