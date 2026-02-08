"use client";

import { useState } from "react";
import AdminPage from "../admin/page";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // simple front-end login
    if (email === "admin@example.com" && password === "admin123") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password");
    }
  }

  if (isLoggedIn) return <AdminPage />;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] h-[80vh] md:h-[80vh] ">
        {/* Left: Login Form */}
        <div className="flex flex-col  justify-center w-full md:w-1/2 bg-white shadow-2xl  rounded-lg md:rounded-l-lg p-8 md:px-28 mx-auto md:mx-0">
          {/* Header */}
          <div className="text-center mb-6 relative">
            <Link href="/" className="absolute left-0 top-0 text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold">Admin Login</h1>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Link
              href="../admin/adminpage"
              className="w-full text-center bg-blue-600 text-white rounded-xl py-3 mt-2 hover:bg-blue-700 transition"
            >
              Log In
            </Link>
          </form>
        </div>

        {/* Right: Background with overlay (hidden on mobile) */}
        <div
          className="hidden md:flex md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bfe6d0c4-dfbf-4c0c-8c54-1db80dd644ba.jpeg')" }}
        >
          <div className="bg-blue-600 w-full h-full flex items-center rounded-r-lg justify-center text-white p-10">
            <div className="text-center">
              <img src="/images/logo.jpg" alt="Logo" className="w-72 rounded-full mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">
                Print On The Go
              </h1>
              <p className="text-sm mt-2 opacity-80">Fast, easy, and stress-free — printing made simple from home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
