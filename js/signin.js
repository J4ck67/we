import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkfJ06gQljkwfhrwK2Mk4m6cfcbmXKbvU",
    authDomain: "test2-2982c.firebaseapp.com",
    projectId: "test2-2982c",
    storageBucket: "test2-2982c.firebasestorage.app",
    messagingSenderId: "813880324506",
    appId: "1:813880324506:web:38c64be7a9a68867a00a23",
    measurementId: "G-1DKB1QFD1D"
  };

const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

const signup=document.getElementById('submitsignin');
signup.addEventListener('click',(event)=>{
    event.preventDefault();
    const email=document.getElementById('semail').value;
    const password=document.getElementById('spassword').value;
    const username=document.getElementById('suser').value;
    const auth = getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userdata={
            email: email,
            username: username
            
        };
        
    })

})

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('signed in')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
