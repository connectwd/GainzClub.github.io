// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd_wPHN9-5Df-JP8ZEtTJD7wYkE8BQsi0",
  authDomain: "gainz-club.firebaseapp.com",
  projectId: "gainz-club",
  storageBucket: "gainz-club.appspot.com",
  messagingSenderId: "226828061942",
  appId: "1:226828061942:web:3172f4fd1496a99c29b0d7",
  measurementId: "G-NYGWQF84F0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };