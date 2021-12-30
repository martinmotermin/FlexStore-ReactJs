// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmUKulcURQjBbgmswoI4zB-EBn0gqFFck",
  authDomain: "coderhouse-ecommerce-flexstore.firebaseapp.com",
  projectId: "coderhouse-ecommerce-flexstore",
  storageBucket: "coderhouse-ecommerce-flexstore.appspot.com",
  messagingSenderId: "900309610986",
  appId: "1:900309610986:web:f6586aaf0501e6baad0293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebaseApp = () => {
  return app;
};
