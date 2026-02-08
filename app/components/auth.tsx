"use client";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err instanceof FirebaseError) {
            setError(err.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
  };

  const signIn = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err instanceof FirebaseError) {
            setError(err.message);
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-sm mx-auto p-6 border rounded-lg space-y-4">
      {user ? (
        <>
          <p className="text-green-600">
            Logged in as <strong>{user.email}</strong>
          </p>
          <button
            onClick={logOut}
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Firebase Auth</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={signIn}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Sign In
          </button>

          <button
            onClick={signUp}
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}
