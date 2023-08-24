import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDPlfs5MJGFC9qpyF6sRGskhFn5acDkgxw",
    authDomain: "email-app-71b4e.firebaseapp.com",
    projectId: "email-app-71b4e",
    storageBucket: "email-app-71b4e.appspot.com",
    messagingSenderId: "264144433318",
    appId: "1:264144433318:web:f404628e402f101060c467"
  };
  

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app)