import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkK5JTnDgVfCT8-wQEdhYwfeM41zjIH6o",
  authDomain: "shaun-pant-portfolio.firebaseapp.com",
  projectId: "shaun-pant-portfolio",
  storageBucket: "shaun-pant-portfolio.appspot.com",
  messagingSenderId: "908939341498",
  appId: "1:908939341498:web:88b6370f45077a56a41c83",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
