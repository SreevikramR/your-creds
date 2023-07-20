// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnvpvBoxjBGFAZvGrZGmLBWcuCpAeSJBc",
  authDomain: "passwordmanager-2ee42.firebaseapp.com",
  projectId: "passwordmanager-2ee42",
  storageBucket: "passwordmanager-2ee42.appspot.com",
  messagingSenderId: "600317986157",
  appId: "1:600317986157:web:7a2fd3c1620b3063568664",
  measurementId: "G-6X4SEFSYSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);