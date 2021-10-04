// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfwN4zqJXbwM12E9vzgfnaFsJ475GuoXs',
  authDomain: 'coderhouse-ecommerce-9a7e5.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-9a7e5',
  storageBucket: 'coderhouse-ecommerce-9a7e5.appspot.com',
  messagingSenderId: '746896859655',
  appId: '1:746896859655:web:c6643e5ff8d4fe707200a2',
  measurementId: 'G-RYLNB0N2C6',
};

export const snapshotToData = (snapshot) => snapshot.docs.map(
  (doc) => ({ id: doc.id, ...doc.data() }),
);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
