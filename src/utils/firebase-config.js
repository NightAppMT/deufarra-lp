import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdg_T8ZC20Be8NRgPU5DX6_2bEoXnG1_g",
  authDomain: "deufarra-8fa25.firebaseapp.com",
  projectId: "deufarra-8fa25",
  storageBucket: "deufarra-8fa25.appspot.com",
  messagingSenderId: "514525662923",
  appId: "1:514525662923:web:97fbaa9b1e0a15d9f6d54e",
  measurementId: "G-F3Y9345C20",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
