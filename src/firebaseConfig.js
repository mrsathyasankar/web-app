// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-7kIXFzC6pCyssjjozytW7jvGabiolE4",
  authDomain: "sathya-s-project.firebaseapp.com",
  projectId: "sathya-s-project",
  storageBucket: "sathya-s-project.appspot.com",
  messagingSenderId: "290100433287",
  appId: "1:290100433287:web:9ae176a070ce0c9d560322",
  measurementId: "G-PPVNWVER51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;