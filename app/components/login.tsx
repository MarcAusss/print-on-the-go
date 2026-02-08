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
    <div className="flex items-center justify-center h-screen">
        <div className="h-[80vh] w-[60vw] flex">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-evenly w-full md:w-1/2 bg-white shadow-2xl rounded-l-lg px-6 lg:px-10 relative">
        <div className="space-y-6 w-full">
          {/* Header */}
          <div className="text-center relative">
            <Link href="/" className="absolute left-0 top-2 text-gray-600 hover:text-gray-800">
              {/* back arrow */}
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

          <hr className="pb-5" />

          {/* Login Form */}
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="input !rounded-none !bg-white !text-black w-full p-3 border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input rounded-none! bg-white! text-black! w-full p-3 border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Link type="submit" href="../admin/adminpage" className="btn-primary text-center w-full mt-4">
              Log in
            </Link>
          </form>

        </div>
      </div>

      {/* Right: Background with overlay */}
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
