// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCI2Br69s_1E3S77qXqtB60wggkmyD35U",
  authDomain: "anime-finder-89b23.firebaseapp.com",
  projectId: "anime-finder-89b23",
  storageBucket: "anime-finder-89b23.appspot.com",
  messagingSenderId: "670716242302",
  appId: "1:670716242302:web:67df507577f321a1ad6b2f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;