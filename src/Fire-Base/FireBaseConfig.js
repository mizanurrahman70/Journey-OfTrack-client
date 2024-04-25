// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBouQV9bUOhV-kVQ3kfiR5yi6wFRrN5fR4",
  authDomain: "torist-side.firebaseapp.com",
  projectId: "torist-side",
  storageBucket: "torist-side.appspot.com",
  messagingSenderId: "1006351011528",
  appId: "1:1006351011528:web:2551d97ab6601084a89ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth