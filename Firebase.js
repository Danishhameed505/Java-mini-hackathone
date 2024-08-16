  import {initializeApp} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  

  const firebaseConfig = {
    apiKey: "AIzaSyD1RnCOx3pj_NNk9scsq7ujtP_q6DJCaI4",
    authDomain: "smit-batch-11-a620a.firebaseapp.com",
    projectId: "smit-batch-11-a620a",
    storageBucket: "smit-batch-11-a620a.appspot.com",
    messagingSenderId: "260300839611",
    appId: "1:260300839611:web:fdb05bc211bd729688a79e",
    measurementId: "G-Q6WQ42497M"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
  