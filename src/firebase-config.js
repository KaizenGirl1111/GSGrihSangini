
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBwazSUEk9slLJEt0FvOmg35BC600-LPsQ",
  authDomain: "grih-abcc4.firebaseapp.com",
  projectId: "grih-abcc4",
  storageBucket: "grih-abcc4.appspot.com",
  messagingSenderId: "110144547618",
  appId: "1:110144547618:web:070cd947ec0a5f5f29d37b"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);