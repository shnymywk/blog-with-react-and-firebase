import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtx1GZTXefVQylU64evXyScebU0zW21AM",
    authDomain: "blog-ab5f5.firebaseapp.com",
    projectId: "blog-ab5f5",
    storageBucket: "blog-ab5f5.firebasestorage.app",
    messagingSenderId: "756299172398",
    appId: "1:756299172398:web:6bbf13a11b8c579148edbf",
    measurementId: "G-JD1S920S9V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Firebase公式document参照
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };