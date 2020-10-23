import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBVPcebGQZYNuMY7o7azgYF7OmhAQSvvdw",
  authDomain: "notifications-examples.firebaseapp.com",
  databaseURL: "https://notifications-examples.firebaseio.com",
  projectId: "notifications-examples",
  storageBucket: "notifications-examples.appspot.com",
  messagingSenderId: "383671783933",
  appId: "1:383671783933:web:c9147b4ceb92ec7bcb8994",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const messaging = firebase.messaging();
export const database = firebase.firestore();
