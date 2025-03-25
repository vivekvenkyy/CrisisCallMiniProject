import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Paste the copied configuration object here
const firebaseConfig = {
    apiKey: "AIzaSyBKGHoODB9K7jXAOtS2EaeQs6uViKZ9qes",
    authDomain: "crisiscall-981db.firebaseapp.com",
    projectId: "crisiscall-981db",
    storageBucket: "crisiscall-981db.firebasestorage.app",
    messagingSenderId: "95590345874",
    appId: "1:95590345874:web:d743ef8a1e76dfcbe78a4b",
    measurementId: "G-329VDKX1X3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };