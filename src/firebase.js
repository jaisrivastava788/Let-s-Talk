import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFywYk8RvvW1zKS4cI9myXtJQ9mETYgJI",
  authDomain: "messenger-clone-1088d.firebaseapp.com",
  projectId: "messenger-clone-1088d",
  storageBucket: "messenger-clone-1088d.appspot.com",
  messagingSenderId: "694335008945",
  appId: "1:694335008945:web:c2108151bda1fd983bb290",
  measurementId: "G-K2ED23WYD8"
});



const db = firebaseApp.firestore();

export default db;