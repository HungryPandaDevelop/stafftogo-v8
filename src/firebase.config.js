// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgCtLAVCKTolBukeD21eGBidzuidOOgdY',
  authDomain: 'stafftogo-8721b.firebaseapp.com',
  projectId: 'stafftogo-8721b',
  storageBucket: 'stafftogo-8721b.appspot.com',
  messagingSenderId: '567188253365',
  appId: '1:567188253365:web:ea655f40dbb35315432cfc',
  measurementId: 'G-N655462NJK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

