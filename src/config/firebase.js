// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYVs6N56Z12Fm3spZwWgNB_NnZdxv9rY",
  authDomain: "react-firebase-auth-f1039.firebaseapp.com",
  projectId: "react-firebase-auth-f1039",
  storageBucket: "react-firebase-auth-f1039.appspot.com",
  messagingSenderId: "273776555646",
  appId: "1:273776555646:web:2254e9d086c4b81088ca2f",
  measurementId: "G-L9NLJC6V32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);