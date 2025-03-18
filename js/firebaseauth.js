  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCg4r-vFgWG4oZ5H1dqhl2pY_9YIA4pNcc",
    authDomain: "test-193d7.firebaseapp.com",
    projectId: "test-193d7",
    storageBucket: "test-193d7.firebasestorage.app",
    messagingSenderId: "427429647626",
    appId: "1:427429647626:web:e6c8d0e813b8c99c1956f3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  const submit = document.getElementById('submitsignin');
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const email=document.getElementById("semail").value;
    const password=document.getElementById("spassword").value;
    const username=document.getElementById("suser").value;
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('create account succesfully');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     
    });
  });

