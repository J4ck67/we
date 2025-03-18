import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCg4r-vFgWG4oZ5H1dqhl2pY_9YIA4pNcc",
    authDomain: "test-193d7.firebaseapp.com",
    projectId: "test-193d7",
    storageBucket: "test-193d7.firebasestorage.app",
    messagingSenderId: "427429647626",
    appId: "1:427429647626:web:e6c8d0e813b8c99c1956f3"
  };

const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

function login() {
    const email = document.getElementById("semail").value;
    const password = document.getElementById("spassword").value;

    const auth=firebase.auth();
    signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login Successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
}
