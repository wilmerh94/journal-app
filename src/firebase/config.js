// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyAIEmCZv0qg8jX_Mt41tnw_Czm5y2FvtuU',
   authDomain: 'blog-will.firebaseapp.com',
   projectId: 'blog-will',
   storageBucket: 'blog-will.appspot.com',
   messagingSenderId: '219357780165',
   appId: '1:219357780165:web:50e5f2074464b5942478ac',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
