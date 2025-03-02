// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQq8Layfly1VxYK3dZzUQ4f9SzeBJVJnw",
  authDomain: "yapnest-81ee4.firebaseapp.com",
  projectId: "yapnest-81ee4",
  storageBucket: "yapnest-81ee4.firebasestorage.app",
  messagingSenderId: "81814644390",
  appId: "1:81814644390:web:de76841b18b6a815247667",
  measurementId: "G-342E2S0HGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
