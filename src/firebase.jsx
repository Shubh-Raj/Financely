// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// since using 2 types of auth -> google and email password 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAe-q6VDV3CzWhW5a8s1FIlgEQhHXDnZGk",
    authDomain: "fintrack-f40b8.firebaseapp.com",
    projectId: "fintrack-f40b8",
    storageBucket: "fintrack-f40b8.firebasestorage.app",
    messagingSenderId: "148169117430",
    appId: "1:148169117430:web:a52efb1d32282b8f6126d7",
    measurementId: "G-EFVWTY3MTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };