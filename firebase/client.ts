// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAEkbWPK67UCP1qy8Q4GWQ5jnCNeRcJFrk",
  authDomain: "aiprep-9c477.firebaseapp.com",
  projectId: "aiprep-9c477",
  storageBucket: "aiprep-9c477.firebasestorage.app",
  messagingSenderId: "484404836048",
  appId: "1:484404836048:web:bd98d57d049192faa7d0d5",
  measurementId: "G-LVH85CEBMT"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEkbWPK67UCP1qy8Q4GWQ5jnCNeRcJFrk",
//   authDomain: "aiprep-9c477.firebaseapp.com",
//   projectId: "aiprep-9c477",
//   storageBucket: "aiprep-9c477.firebasestorage.app",
//   messagingSenderId: "484404836048",
//   appId: "1:484404836048:web:bd98d57d049192faa7d0d5",
//   measurementId: "G-LVH85CEBMT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);