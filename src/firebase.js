import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkwQ4MeKWGyflcXniHtMJJWQlf4_ob4Xc",
  authDomain: "chat-app-first-bc21a.firebaseapp.com",
  projectId: "chat-app-first-bc21a",
  storageBucket: "chat-app-first-bc21a.appspot.com",
  messagingSenderId: "405300101910",
  appId: "1:405300101910:web:9df38e9dc6b0c1ea0f4637",
  measurementId: "G-RZ3CWXN8L9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
