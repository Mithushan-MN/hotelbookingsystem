// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBempNpByajipUvh6VJnxuW_ZPkeQA6Z8s",
  authDomain: "hotelbookingsystem-deae8.firebaseapp.com",
  projectId: "hotelbookingsystem-deae8",
  storageBucket: "hotelbookingsystem-deae8.appspot.com",
  messagingSenderId: "425968972810",
  appId: "1:425968972810:web:be1201f73aab043bdedbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const db = getFirestore(app);

// export function signup(email,password){
//    return createUserWithEmailAndPassword(auth,email,password);
// }

// export function Signin(email,password){
//    return signInWithEmailAndPassword(auth,email,password);
// }
