import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBgfOh0bx8kMxnlIt1tTQD0nvCsw4Hdm1g",
    authDomain: "dragon-news-369d3.firebaseapp.com",
    projectId: "dragon-news-369d3",
    storageBucket: "dragon-news-369d3.appspot.com",
    messagingSenderId: "405054302539",
    appId: "1:405054302539:web:9fc35e1debdfdc78b5a0ce"
};

const app = initializeApp(firebaseConfig);

export default app;