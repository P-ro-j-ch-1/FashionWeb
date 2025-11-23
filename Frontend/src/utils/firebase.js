import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBZOS9l0Ia_aD3gMSH-NDVZO8rTAvZXGj8",
  authDomain: "fashionweb-auth.firebaseapp.com",
  projectId: "fashionweb-auth",
  storageBucket: "fashionweb-auth.firebasestorage.app",
  messagingSenderId: "969946638333",
  appId: "1:969946638333:web:608c4ef8707a07216a9b94",
  measurementId: "G-JBG8T8PBQ0"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app); 
export const analytics = getAnalytics(app);
