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
    <div className="h-screen flex overflow-hidden">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-evenly w-full md:w-1/2 bg-white px-6 lg:px-10 relative">
        <div className="space-y-6 w-full">
          {/* Header */}
          <div className="text-center relative">
            <button className="absolute left-0 top-2 text-gray-600 hover:text-gray-800">
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
            </button>
            <h1 className="text-2xl font-bold">Student Login</h1>
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

            <div className="flex items-center justify-between mt-2">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm underline text-gray-600 hover:text-gray-800">
                Forgot your password?
              </a>
            </div>

            <Link type="submit" href="../admin/adminpage" className="btn-primary w-full mt-4">
              Log in
            </Link>

            <a href="#" className="underline text-sm text-gray-600 hover:text-gray-800 mt-2 block text-center">
              Register as Student
            </a>
          </form>

          <hr className="w-[70%] mx-auto border-black mt-4" />

          {/* Logos */}
          <div className="flex justify-center space-x-4 mt-4">
            <img src="/images/csit.png" alt="CSIT" className="h-20" />
            <img src="/images/iiee.png" alt="IIEE" className="h-20" />
            <img src="/images/pice.jpg" alt="PICE" className="h-20" />
            <img src="/images/sliss.png" alt="SLISS" className="h-20" />
          </div>
        </div>
      </div>

      {/* Right: Background with overlay */}
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bfe6d0c4-dfbf-4c0c-8c54-1db80dd644ba.jpeg')" }}
      >
        <div className="bg-[#5c0e0f]/90 w-full h-full flex items-center justify-center text-white p-10">
          <div className="text-center">
            <img src="/images/licoes.png" alt="Logo" className="w-72 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              LEAGUE OF INTEGRATED COMPUTER AND ENGINEERING STUDENTS
            </h1>
            <p className="text-sm mt-2 opacity-80">Welcome to your portal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
