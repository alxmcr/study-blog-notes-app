// notes-app/src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBoDgnn4mxXdPHwoQq-hzT2t8PS0ddPRs",
  authDomain: "notes-app-bedc0.firebaseapp.com",
  projectId: "notes-app-bedc0",
  storageBucket: "notes-app-bedc0.appspot.com",
  messagingSenderId: "995615229947",
  appId: "1:995615229947:web:94b7c4fddafb582a2f2d5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
