
import { auth, signInWithEmailAndPassword } from "../firebase.js";

const form = document.querySelector("#signInForm");

const login = (event) => {
  event.preventDefault();
  
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    
      window.location.href = "../Dashboard/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode);
      console.error("Error Message:", errorMessage);
      alert("Error: " + errorMessage);
    });
};

form.addEventListener("submit", login);
