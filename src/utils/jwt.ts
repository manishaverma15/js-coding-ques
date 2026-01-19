
export const generateToken = (email: string) => {
  const payload = {
    email,
    issuedAt: Date.now(),
    expiresAt: Date.now() + 1000 * 60 * 60 * 24,
  };

  return btoa(JSON.stringify(payload));
};

export const verifyToken = (token: string) => {
  try {
    const decoded = JSON.parse(atob(token));

    if (!decoded.expiresAt) return false;

    return decoded.expiresAt > Date.now();
  } catch {
    return false;
  }
};
