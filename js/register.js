 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 import { getFirestore,setDoc,doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

 const firebaseConfig = {
  apiKey: "AIzaSyCkfJ06gQljkwfhrwK2Mk4m6cfcbmXKbvU",
  authDomain: "test2-2982c.firebaseapp.com",
  projectId: "test2-2982c",
  storageBucket: "test2-2982c.firebasestorage.app",
  messagingSenderId: "813880324506",
  appId: "1:813880324506:web:38c64be7a9a68867a00a23",
  measurementId: "G-1DKB1QFD1D"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db=getFirestore(app);


 
 function showMessage(message,divId) {
  var messageDiv=document.getElementById(divId);
  messageDiv.style.display="block";
  messageDiv.innerHTML=message;
  messageDiv.style.opacity=1;
  setTimeout(function(){
    messageDiv.style.opacity=0;
  },5000);
    
//  }

 const signup = document.getElementById('submitsignin');
 signup.addEventListener('click',function(event){
    event.preventDefault();
    const email=document.getElementById('semail').value;
    const password=document.getElementById('spassword').value;
    const username=document.getElementById('suser').value;

    
    const auth=getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        const userdata={
            email:email,
            username:username,
        }; 
        showMessage('account created succesfully','signupmessage');
        const docRef=doc(db,"users",user.uid);
        setDoc(docRef,userdata)
        .then(()=>{
            window.location.href='home.html';
        })
        .catch((error)=>{
            console.error("error wrirting document",error);

        });
    })
    .catch((error)=>{
       const errorCode=errorCode.code;
       if(errorCode=='auth/email-already-in-use'){
        showMessage(' email already exists','signupmessage');
       }
       else{
        showMessage('unable create account','signupmessage')
       }
    })
 });
}