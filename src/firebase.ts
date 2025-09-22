// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAirA6cmSW2n7RyrTqoF6Z3CgV4f5W83Ck",
  authDomain: "timelec-website.firebaseapp.com",
  projectId: "timelec-website",
  storageBucket: "timelec-website.firebasestorage.app",
  messagingSenderId: "757652538433",
  appId: "1:757652538433:web:f615ae7d07decd4780f2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);