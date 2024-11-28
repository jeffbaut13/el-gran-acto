// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Importar getStorage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Ni40NnLpfT-i-qcvmtVrJeRGv07Rjps",
  authDomain: "el-gran-acto.firebaseapp.com",
  projectId: "el-gran-acto",
  storageBucket: "el-gran-acto.firebasestorage.app",
  messagingSenderId: "380993577402",
  appId: "1:380993577402:web:70b82d575d09e3d520bd83",
  measurementId: "G-ZZP1YBQXBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Inicializa Firebase Storage

export { firestore, storage, app };