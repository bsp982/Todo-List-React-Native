import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEj_gEHISHjvC1brxtsMtgnRKMq4WRQYQ",
  authDomain: "todo-list-app-73df8.firebaseapp.com",
  projectId: "todo-list-app-73df8",
  storageBucket: "todo-list-app-73df8.firebasestorage.app",
  messagingSenderId: "562578976792",
  appId: "1:562578976792:web:2c758094d687185c87536d",
  measurementId: "G-EHK672351L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 