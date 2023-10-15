# servease1
A server to connect between waiters and customers in the most convience way.

Useful links:
https://dubhacks.notion.site/The-DubHacks-23-Hacker-Guide-e330785fde864245a5a46fb576f070fd
http://servease1.co/

How to add Firebase SDK:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDOxKG6pujHdspdngO5Fc6AmpIq0AjDU",
  authDomain: "dubhusky-50ac6.firebaseapp.com",
  projectId: "dubhusky-50ac6",
  storageBucket: "dubhusky-50ac6.appspot.com",
  messagingSenderId: "92307109872",
  appId: "1:92307109872:web:3b57b674200059698e4f35",
  measurementId: "G-8DK39SYPPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
