import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9KV8BG5dTdSJsKdgLipTWrC4YhevlFSk",
  authDomain: "filmyverse-51ebe.firebaseapp.com",
  projectId: "filmyverse-51ebe",
  storageBucket: "filmyverse-51ebe.appspot.com",
  messagingSenderId: "900124109349",
  appId: "1:900124109349:web:3f426a377f125580c72dcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
