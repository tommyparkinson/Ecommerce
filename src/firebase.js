import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCii8HujPKsVLlfT3jh3tU-dHP7crnq37M",
  authDomain: "e-commerce-app-53ca2.firebaseapp.com",
  databaseURL: "https://e-commerce-app-53ca2.firebaseio.com",
  projectId: "e-commerce-app-53ca2",
  storageBucket: "e-commerce-app-53ca2.appspot.com",
  messagingSenderId: "302326510249",
  appId: "1:302326510249:web:d8e122e08c354c3fe7afb8",
  measurementId: "G-JKKLCRBJ9H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };