import { useState } from "react";
import { useNavigate } from "react-router-dom";

import mjx_school from "../../assets/mjx_school.png";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
      setError("Invalid username or password");
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
    <div className="min-h-screen flex bg-gray-100">

      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center mb-7">

            <div className="flex justify-center mb-6">
                <img
                  src={mjx_school}
                  alt="MJX School Logo"
                  className="h-32 object-contain"
                />
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>

            <p className="text-gray-500">
              Login to your account
            </p>

          </div>

          {/* Username */}
          <div className="mb-6">

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Username
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-blue-600 transition">

              <PersonOutlinedIcon
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="w-full p-4 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 focus-within:border-blue-600 transition">

              <LockOutlinedIcon
                className="text-gray-400"
              />

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full p-4 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-8">
            © 2026 MJX School System
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;