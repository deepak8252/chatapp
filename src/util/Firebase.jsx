// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA5QOn7xU2295EI1KZ6NOL73WsR57kbWJk",
    authDomain: "chatapplication-ae596.firebaseapp.com",
    projectId: "chatapplication-ae596",
    storageBucket: "chatapplication-ae596.appspot.com",
    messagingSenderId: "686281070426",
    appId: "1:686281070426:web:4a88d434ae4ebb1d478563",
    measurementId: "G-LZERQ0Q35G"
  };

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
  export const storage = getStorage();
  export const db = getFirestore();
