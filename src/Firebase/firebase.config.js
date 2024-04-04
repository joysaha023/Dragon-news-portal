// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAHJDg5z6eZsRwDz49jz1KdagUpSdDQQY",
  authDomain: "dragon-news-portal-abcab.firebaseapp.com",
  projectId: "dragon-news-portal-abcab",
  storageBucket: "dragon-news-portal-abcab.appspot.com",
  messagingSenderId: "949202055261",
  appId: "1:949202055261:web:01e5ecf27a41f795585db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;