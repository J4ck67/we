import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


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


const submit = document.getElementById('submitsignin');
submit = addEventListener('click',function(){
    const email= document.getElementById("semail").value;
    const password=document.getElementById("spassword").value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("registration succesfull");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})

