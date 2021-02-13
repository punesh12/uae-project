import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCfgria2ABj2sj-hSbFpkmekZgIFHqkowk",
    authDomain: "uae-project-af527.firebaseapp.com",
    projectId: "uae-project-af527",
    storageBucket: "uae-project-af527.appspot.com",
    messagingSenderId: "601793957013",
    appId: "1:601793957013:web:8a9b287ce8aa13fe32df9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export {db}