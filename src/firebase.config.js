// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSseXaLyuyxdqUMfpKKIL62QI9m7u1YY0",
  authDomain: "email-password-firebase-fun.firebaseapp.com",
  projectId: "email-password-firebase-fun",
  storageBucket: "email-password-firebase-fun.appspot.com",
  messagingSenderId: "366878377492",
  appId: "1:366878377492:web:cbbf0aa06c2427d13c4901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;