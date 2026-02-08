import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEptvXw512BowjisPDfQBhN-Rnp0RFhJE",
  authDomain: "print-on-the-go-54942.firebaseapp.com",
  projectId: "print-on-the-go-54942",
  storageBucket: "print-on-the-go-54942.firebasestorage.app",
  messagingSenderId: "814075228651",
  appId: "1:814075228651:web:952b25409937d8d41ae9ae",
  measurementId: "G-P01V31M71Q",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
