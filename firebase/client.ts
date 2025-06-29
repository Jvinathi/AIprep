// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQM-sgGFzLbool48KiBElvK4qNhxvDfk",
  authDomain: "aiprep-f2a64.firebaseapp.com",
  projectId: "aiprep-f2a64",
  storageBucket: "aiprep-f2a64.firebasestorage.app",
  messagingSenderId: "708755007143",
  appId: "1:708755007143:web:299eee6d5e0167a54f5d82",
  measurementId: "G-6V3YGQ7GS5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);