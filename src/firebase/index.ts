// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ZeHipefLZ4JxErr8SKHKk0r2yVVxaE0",
  authDomain: "choice-1012.firebaseapp.com",
  databaseURL: "https://choice-1012-default-rtdb.firebaseio.com",
  projectId: "choice-1012",
  storageBucket: "choice-1012.appspot.com",
  messagingSenderId: "782667329315",
  appId: "1:782667329315:web:ab1244bc041ea54262a696"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const firebasedb = getFirestore();
// Initialize Firebase

export { firebaseApp, firebasedb, auth };
