// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAClmyFnW68O2OG9UDau7M0GEfx8tMoy8",
  authDomain: "fashionweb-9fee4.firebaseapp.com",
  projectId: "fashionweb-9fee4",
  storageBucket: "fashionweb-9fee4.firebasestorage.app",
  messagingSenderId: "892440483523",
  appId: "1:892440483523:web:2a9496000730b8e135f476",
  measurementId: "G-H0ESYWHL9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);