import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHaPf5mM_6TSA22yUe3FcEKYv-Xk5hrDE',
  authDomain: 'food-ordering-app-d1885.firebaseapp.com',
  projectId: 'food-ordering-app-d1885',
  storageBucket: 'food-ordering-app-d1885.firebasestorage.app',
  messagingSenderId: '589721281210',
  appId: '1:589721281210:web:7e8dcd92dbf5075313d883',
  measurementId: 'G-4NZR8G1VXR',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
