// src/components/configure/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBka9IN-K8pcUwv-18aGueC8mhSrZtaSPQ",
  authDomain: "basket-929d0.firebaseapp.com",
  projectId: "basket-929d0",
  storageBucket: "basket-929d0.appspot.com", // ✅ دي كانت غلط في كودك
  messagingSenderId: "1077461154973",
  appId: "1:1077461154973:web:08d2fcae2382f71b76e874",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
