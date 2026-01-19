import type { User } from "@/types/user";

const USER_KEY = "quiz_user";

export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const setUser = (user: User) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearUser = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(USER_KEY);
};
