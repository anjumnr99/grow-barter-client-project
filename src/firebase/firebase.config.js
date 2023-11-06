// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy3bvrEOQ3w28t0ZH371ztSXi0mwp0Lus",
  authDomain: "grow-barter-project.firebaseapp.com",
  projectId: "grow-barter-project",
  storageBucket: "grow-barter-project.appspot.com",
  messagingSenderId: "352803062992",
  appId: "1:352803062992:web:d30ecc2406a03469760ad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;