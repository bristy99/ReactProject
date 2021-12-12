import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5L1Z9tnd2XQcyNQprc81ZEWc1UiaNHZo",
    authDomain: "challange-4d5b1.firebaseapp.com",
    projectId: "challange-4d5b1",
    storageBucket: "challange-4d5b1.appspot.com",
    messagingSenderId: "354467606412",
    appId: "1:354467606412:web:238c61e701d10f62f170a9",
    measurementId: "${config.measurementId}"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);
 
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
