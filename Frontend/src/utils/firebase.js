import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAAClmyFnW68O2OG9UDau7M0GEfx8tMoy8", 
  authDomain: "fashionweb-9fee4.firebaseapp.com",
  projectId: "fashionweb-9fee4",
  storageBucket: "fashionweb-9fee4.firebasestorage.app",
  messagingSenderId: "892440483523",
  appId: "1:892440483523:web:2a9496000730b8e135f476",
  measurementId: "G-H0ESYWHL9Y"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app); 
export const analytics = getAnalytics(app);
