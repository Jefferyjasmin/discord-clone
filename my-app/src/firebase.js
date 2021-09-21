import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD28aMUY5ar0Hpc-5Iy7vafkTCAxnH44Ec",
  authDomain: "discord-clone-f4d6f.firebaseapp.com",
  projectId: "discord-clone-f4d6f",
  storageBucket: "discord-clone-f4d6f.appspot.com",
  messagingSenderId: "1092580484213",
  appId: "1:1092580484213:web:6a3d42f0f1fd272f80843c",
  measurementId: "G-6D2T833FXH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
