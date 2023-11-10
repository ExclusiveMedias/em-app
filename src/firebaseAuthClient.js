// firebaseAuthClient.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://exclusivemedias-default-rtdb.firebaseio.com",
  projectId: "exclusivemedias",
  storageBucket: "exclusivemedias.appspot.com",
  messagingSenderId: "514401272783",
  appId: "1:514401272783:web:a50a015cd184c0028d48ba",
  measurementId: "G-7WZ6W61373",
  // ... other config variables
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider(); // Create a GoogleAuthProvider instance

export { app, db, auth, googleAuthProvider };
