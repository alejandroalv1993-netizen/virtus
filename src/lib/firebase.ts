import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "virtus-blog-2026-v1",
  appId: "1:760719458272:web:fdbd7e81ec416f2f75b585",
  storageBucket: "virtus-blog-2026-v1.firebasestorage.app",
  apiKey: "AIzaSyDvLTpnG8nM24oL_sIkvSAmKHsrygu9FuE",
  authDomain: "virtus-blog-2026-v1.firebaseapp.com",
  messagingSenderId: "760719458272",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
