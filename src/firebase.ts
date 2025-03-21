import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoDavgU9aSWVwtBlIsdrjZA9OBrQ7HQSo",
  authDomain: "hackthon-learnneural.firebaseapp.com",
  projectId: "hackthon-learnneural",
  storageBucket: "hackthon-learnneural.firebasestorage.app",
  messagingSenderId: "115366212087",
  appId: "1:115366212087:web:64d22c48e970fc7a463ef2",
  measurementId: "G-GBXBBJ7CS5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Note: You need to set up the following Firebase Security Rules in your Firebase Console:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{registration} {
      allow read: if true;
      allow write: if true;
    }
  }
}
*/