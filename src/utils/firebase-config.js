import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHztkIhKiX1oNi9AL7ABgF5M8L2BT7iOA",
  authDomain: "deu-farra.firebaseapp.com",
  projectId: "deu-farra",
  storageBucket: "deu-farra.appspot.com",
  messagingSenderId: "774160067042",
  appId: "1:774160067042:web:86b4defd0483b72c2531bb",
  measurementId: "G-2WY0LFHER2"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

