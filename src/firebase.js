// firebaseの機能をimport

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//firebaseの情報を定義でまとめる（本来はenvで管理してignoreでgitにupしない）
const firebaseConfig = {
    apiKey: "AIzaSyCtx1GZTXefVQylU64evXyScebU0zW21AM",
    authDomain: "blog-ab5f5.firebaseapp.com",
    projectId: "blog-ab5f5",
    storageBucket: "blog-ab5f5.firebasestorage.app",
    messagingSenderId: "756299172398",
    appId: "1:756299172398:web:6bbf13a11b8c579148edbf",
    measurementId: "G-JD1S920S9V"
};

// firebaseConfigの情報からプロジェクトを特定し接続までを行う
const app = initializeApp(firebaseConfig);
// 接続したfirebaseから解析情報を取得する
const analytics = getAnalytics(app);


// Firebase公式document参照

// 認証機能を取得
const auth = getAuth(app);

// Googleアカウントでログインする機能を取得
const provider = new GoogleAuthProvider();

//DB機能を取得
const db = getFirestore(app);

export { auth, provider, db };