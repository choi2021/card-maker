import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId: process.env.REACT_APP_FIREBASE_APP_ID,
  appId: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
