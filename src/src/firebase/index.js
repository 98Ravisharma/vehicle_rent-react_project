// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZQIxD3sC3c3PlXzibkgfv6FJ9s3bwoT8",
  authDomain: "vehicle-rent-system-eca9f.firebaseapp.com",
  projectId: "vehicle-rent-system-eca9f",
  storageBucket: "vehicle-rent-system-eca9f.appspot.com",
  messagingSenderId: "191500706628",
  appId: "1:191500706628:web:f5de09a79e75780748ad11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;