
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Other Firebase products you may use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAr0Lb2gPlR0ZFLGer4cPxzEdnE8NgBY",
  authDomain: "lostandfound-c04a2.firebaseapp.com",
  projectId: "lostandfound-c04a2",
  storageBucket: "lostandfound-c04a2.appspot.com",
  messagingSenderId: "308981291165",
  appId: "1:308981291165:web:d4dea5bb9793eb51cf1c74",
  measurementId: "G-K7R7GZR7YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export {  db };
