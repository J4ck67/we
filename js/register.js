 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 import { getFirestore,setDoc,doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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