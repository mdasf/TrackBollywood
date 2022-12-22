import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //data
import { getStorage } from "firebase/storage"; //images

// import { getAuth } from "firebase/auth";

// import "./dotenv.env";

const firebaseConfig = {
  apiKey: "AIzaSyDdHqHhmvynl-akie-YqPF2uuNrHmay7Hw",
  authDomain: "trackbollywood-8b08e.firebaseapp.com",
  databaseURL: "trackbollywood-8b08e",
  projectId: "trackbollywood-8b08e.appspot.com",
  storageBucket: "416550912018",
  messagingSenderId: "1:416550912018:web:85b8b52ea87ff6b19e98cb",
  appId: "G-YZFB91R6JH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = initializeFireStore(app);

// const auth = getAuth(app);
const firestore = getFirestore(app); //data
const firestorage = getStorage(app); //images

export { firestore, firestorage };
