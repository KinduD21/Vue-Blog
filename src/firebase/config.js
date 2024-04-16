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

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
