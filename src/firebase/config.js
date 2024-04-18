import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCheENJGEgnlV7-8fqbOn_y4GchOzrJ13E",
  authDomain: "vue-sites-e9873.firebaseapp.com",
  projectId: "vue-sites-e9873",
  storageBucket: "vue-sites-e9873.appspot.com",
  messagingSenderId: "932275354953",
  appId: "1:932275354953:web:2c0280d96f96ed3b04ae98",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
