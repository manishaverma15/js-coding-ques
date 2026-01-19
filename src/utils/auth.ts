import { getUser } from "./userStorage";
import { verifyToken } from "./jwt";

export const isAuthenticated = () => {
  const user = getUser();
  if (!user?.token) return false;

  return verifyToken(user.token);
};
