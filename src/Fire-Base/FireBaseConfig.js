
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID
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