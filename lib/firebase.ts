import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMaV5bz7FalbwhKaDDvH0mjCGD9sH6voY",
  authDomain: "smgw-7e5a2.firebaseapp.com",
  projectId: "smgw-7e5a2",
  storageBucket: "smgw-7e5a2.firebasestorage.app",
  messagingSenderId: "554112553400",
  appId: "1:554112553400:web:3b78ebcb8e746720bbbf4d",
  measurementId: "G-3JTL7ESFRG"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
