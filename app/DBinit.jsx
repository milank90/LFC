import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhTlQWHRKNVFaAAu8E4WTBdD8pdVsmyYU",
    authDomain: "lfc-website-31dd4.firebaseapp.com",
    projectId: "lfc-website-31dd4",
    storageBucket: "lfc-website-31dd4.appspot.com",
    messagingSenderId: "1082810451787",
    appId: "1:1082810451787:web:3c2467e3ae8a4ad8f8cace"
  }


initializeApp(firebaseConfig);
// connectFirestoreEmulator(db, '127.0.0.1', 4000);

// init services
export const db = getFirestore();


  