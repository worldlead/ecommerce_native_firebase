import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAna_4-79yCdxW1DwORLX9Q-p70CLpJ7oA",
  authDomain: "first-ecommerce-6c2b5.firebaseapp.com",
  databaseURL: "https://first-ecommerce-6c2b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-ecommerce-6c2b5",
  storageBucket: "first-ecommerce-6c2b5.appspot.com",
  messagingSenderId: "611951967662",
  appId: "1:611951967662:web:577c25690562147e819c3f",
  measurementId: "G-1M3H90GEHL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;