// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDR8zUEKWQlDqLxOfjDlitrGY43t29WjE4",
  authDomain: "tematicos-cb5ab.firebaseapp.com",
  projectId: "tematicos-cb5ab",
  storageBucket: "tematicos-cb5ab.appspot.com",
  messagingSenderId: "408523095878",
  appId: "1:408523095878:web:ff07fd67d91046edab2f47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // ✅ Certifique-se de passar o `app` aqui
export { auth, provider, db };