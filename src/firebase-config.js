import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //data
import { getStorage } from "firebase/storage"; //images

import { getAuth } from "firebase/auth";

// import "./dotenv.env";

const firebaseConfig = {
  apiKey: "AIzaSyDdHqHhmvynl-akie-YqPF2uuNrHmay7Hw",
  authDomain: "trackbollywood-8b08e.firebaseapp.com",
  projectId: "trackbollywood-8b08e",
  storageBucket: "trackbollywood-8b08e.appspot.com",
  messagingSenderId: "416550912018",
  appId: "1:416550912018:web:85b8b52ea87ff6b19e98cb",
  measurementId: "G-YZFB91R6JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = initializeFireStore(app);

const auth = getAuth(app);
const firestore = getFirestore(app); //data
const firestorage = getStorage(app); //images

export { auth, firestore, firestorage };
