import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const email= document.getElementById("semail").value;
const password=document.getElementById("spassword").value;


const submit = document.getElementById('submitsignin');
submit.addEventListener("click",function(event){
  event.preventDefault()
  alert(5)
})


// submit = addEventListener('click',function()
// const submit = document.getElementById('submitsignin');
// submit = addEventListener('click',function(){
//     const email= document.getElementById("semail").value;
//     const password=document.getElementById("spassword").value;

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("registration succesfull");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// })

