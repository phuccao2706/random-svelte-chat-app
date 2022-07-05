// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASx_SqWlVlGmmqmXJO1JRbDQ--euA7zaY",
  authDomain: "random-chat-app-6ac14.firebaseapp.com",
  projectId: "random-chat-app-6ac14",
  storageBucket: "random-chat-app-6ac14.appspot.com",
  messagingSenderId: "990355042702",
  appId: "1:990355042702:web:79ddefaf75ce499187b4df",
  measurementId: "G-933DH2YME1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
