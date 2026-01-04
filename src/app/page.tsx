"use client";

import { useRouter } from "next/navigation";

const categories = [
  { label: "JavaScript", value: "javascript" },
  { label: "React.js", value: "react" },
  { label: "Next.js", value: "nextjs" }
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Choose a Category</h1>

      <div className="flex gap-4">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => router.push(`/questions/${cat.value}`)}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
