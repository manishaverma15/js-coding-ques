"use client";

import { useState } from "react";
import type { User } from "@/types/user";
import { setUser } from "@/utils/userStorage";
import { generateToken } from "@/utils/jwt";

type Props = {
  onSuccess: (user: User) => void;
};

const RegisterModal = ({ onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = () => {
    if (!name || !email) return;  

    const user: User = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      token: generateToken(email),
    };

    setUser(user);
    onSuccess(user);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-96 p-6 rounded-xl space-y-4">
        <h2 className="text-xl font-bold text-center">
          Register to Continue
        </h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
         <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
