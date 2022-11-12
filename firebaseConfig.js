import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAF-BszZNzqtXcZs8r0Evck5EbZl5HTzUY",
    authDomain: "hudl-tickets.firebaseapp.com",
    projectId: "hudl-tickets",
    storageBucket: "hudl-tickets.appspot.com",
    messagingSenderId: "63306839946",
    appId: "1:63306839946:web:eecb4dd9767b39f444ba73",
    measurementId: "G-3VC2XLCBRM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };

  