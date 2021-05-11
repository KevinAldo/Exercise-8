import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDj26n_EEcNz25dlvLxu9VvTMQUCDLpGBI",
    authDomain: "moneytracker-fd711.firebaseapp.com",
    databaseURL: "https://moneytracker-fd711-default-rtdb.firebaseio.com",
    projectId: "moneytracker-fd711",
    storageBucket: "moneytracker-fd711.appspot.com",
    messagingSenderId: "742669465706",
    appId: "1:742669465706:web:8156103a5c2c09055ff213"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;