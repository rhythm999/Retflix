import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";


let firebaseConfig = {
    apiKey: "AIzaSyBkaFrQ10K8QB5RgpFVr7T-WotEw_OyWEw",
    authDomain: "retflix-b639a.firebaseapp.com",
    projectId: "retflix-b639a",
    storageBucket: "retflix-b639a.appspot.com",
    messagingSenderId: "925647284197",
    appId: "1:925647284197:web:767cbbb04d7be7fba7710c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

let GoogleProvider=new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle=()=> auth.signInWithPopup(GoogleProvider);
export default firebase;


