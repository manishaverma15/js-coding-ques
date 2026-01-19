"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RegisterModal from "@/components/RegisterModal";
import { getUser, clearUser } from "@/utils/userStorage";
import type { User } from "@/types/user";

const categories = [
  { label: "JavaScript", value: "javascript" },
  { label: "React.js", value: "react" },
  { label: "Next.js", value: "nextjs" }
];

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    clearUser();
    setUser(null);
  }

  return (
    <>
      {!user && <RegisterModal onSuccess={setUser} />}

      {user && (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-bold">
            Welcome, {user.name}
          </h1>

          <div className="flex gap-4">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => router.push(`/questions/${category.value}`)}
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                {category.label}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
