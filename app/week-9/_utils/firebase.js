// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1yzHMGwmwR-4eIJ76lzgQaHqqunQwKyc",
  authDomain: "cprg306-assignments-8f767.firebaseapp.com",
  projectId: "cprg306-assignments-8f767",
  storageBucket: "cprg306-assignments-8f767.firebasestorage.app",
  messagingSenderId: "550397256718",
  appId: "1:550397256718:web:19400d23f77f9b1cfac85f",
  measurementId: "G-HMCPV6ZX47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
