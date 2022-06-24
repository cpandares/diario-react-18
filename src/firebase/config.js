// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfkuwfEzs90LsQlEgYLROXNrzXy9v10IM",
  authDomain: "diario-react-c2bb0.firebaseapp.com",
  projectId: "diario-react-c2bb0",
  storageBucket: "diario-react-c2bb0.appspot.com",
  messagingSenderId: "745960193408",
  appId: "1:745960193408:web:bc822022f89aa2a5f35565"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDb = getFirestore( firebaseApp );