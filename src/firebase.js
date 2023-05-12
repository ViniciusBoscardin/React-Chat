// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYS9EgR7mIHh4waNtFxDzIyRoTQwMzGWk',
  authDomain: 'chat-1a1aa.firebaseapp.com',
  projectId: 'chat-1a1aa',
  storageBucket: 'chat-1a1aa.appspot.com',
  messagingSenderId: '907610348871',
  appId: '1:907610348871:web:41fc73f67cc8120f660062',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
