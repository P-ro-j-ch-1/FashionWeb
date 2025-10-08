import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBZOS9l0Ia_aD3gMSH-NDVZO8rTAvZXGj8",
  authDomain: "fashionweb-auth.firebaseapp.com",
  projectId: "fashionweb-auth",
  storageBucket: "fashionweb-auth.firebasestorage.app",
  messagingSenderId: "969946638333",
  appId: "1:969946638333:web:608c4ef8707a07216a9b94",
  measurementId: "G-JBG8T8PBQ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))