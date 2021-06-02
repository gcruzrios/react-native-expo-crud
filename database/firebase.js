import firebase from "firebase";
import "firebase/firestore";



var firebaseConfig = {
  apiKey: "AIzaSyC2aP6KqZDjUOe18SbAPUjH47CfCDMlzzM",
  authDomain: "react-native-firebase-d0957.firebaseapp.com",
  projectId: "react-native-firebase-d0957",
  storageBucket: "react-native-firebase-d0957.appspot.com",
  messagingSenderId: "931687469456",
  appId: "1:931687469456:web:b3a7fadf83611a8829a315"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export default {
  firebase,
  auth,
  db
};
