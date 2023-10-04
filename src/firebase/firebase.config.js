// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbLncqgGZQPBqo4Imf2v1tqa2sFDprxFM",
    authDomain: "react-dragon-news-auth-project.firebaseapp.com",
    projectId: "react-dragon-news-auth-project",
    storageBucket: "react-dragon-news-auth-project.appspot.com",
    messagingSenderId: "438358305686",
    appId: "1:438358305686:web:93ba7df0d17605b1630bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;