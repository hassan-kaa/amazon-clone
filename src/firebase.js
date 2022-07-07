// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBHL1v_UHl3Pv0qZXviv0pnwq9HvRNQm8E",
    authDomain: "clone-e2175.firebaseapp.com",
    projectId: "clone-e2175",
    storageBucket: "clone-e2175.appspot.com",
    messagingSenderId: "851887689601",
    appId: "1:851887689601:web:1a103094b9f4b2591da280",
    measurementId: "G-NE59SPKHVJ"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore()
  const auth= firebase.auth()
  export {db,auth}