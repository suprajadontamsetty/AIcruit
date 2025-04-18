// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy-722oPpIReUB1jEBIUiJVmViA3ajbbU",
  authDomain: "aicruit-9d7a6.firebaseapp.com",
  projectId: "aicruit-9d7a6",
  storageBucket: "aicruit-9d7a6.firebasestorage.app",
  messagingSenderId: "468119130531",
  appId: "1:468119130531:web:86b8ed9ce3695a1abb8a16",
  measurementId: "G-QJ4GE2YBCC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app)
