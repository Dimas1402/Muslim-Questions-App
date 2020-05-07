import firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDEZP0dZqVk5aX8NlOdpbk-z_39qyN7feg",
    authDomain: "muslim-apps-f8400.firebaseapp.com",
    databaseURL: "https://muslim-apps-f8400.firebaseio.com",
    projectId: "muslim-apps-f8400",
    storageBucket: "muslim-apps-f8400.appspot.com",
    messagingSenderId: "1027233414085",
    appId: "1:1027233414085:web:36466c17e2c819070269ac"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;