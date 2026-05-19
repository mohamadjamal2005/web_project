import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "../../data/users";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "token",
      "fake-token"
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#3f3f3f] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-10">

        <h1 className="text-4xl font-light mb-10 text-gray-700">
          Login to your account
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full border-l-4 border-green-500 border border-gray-300 p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-l-4 border-green-500 border border-gray-300 p-4 outline-none"
          />

          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleLogin}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-xl"
            >
              Login
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;