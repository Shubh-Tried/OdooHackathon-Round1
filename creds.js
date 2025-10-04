// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0pjY2usiFlT_SH5Ey5IrKCDghyEO_cus",
  authDomain: "odoo-hackathon-r1.firebaseapp.com",
  projectId: "odoo-hackathon-r1",
  storageBucket: "odoo-hackathon-r1.firebasestorage.app",
  messagingSenderId: "323381302215",
  appId: "1:323381302215:web:593e0be725321fd7cd3fe2",
  measurementId: "G-9R5V0PPGXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);