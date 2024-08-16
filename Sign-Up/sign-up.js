import { auth, createUserWithEmailAndPassword} from '../firebase.js'

let formFields = document.querySelectorAll("form input");

const [username, email, password, confirmPassword] = formFields;

// console.log(username, email, password);

let signUpBtn = document.querySelector("#signUp-btn");

const signUp = (event) => {
    event.preventDefault();
    signUpBtn.innerText = 'Loading............'
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    signUpBtn.innerText = 'SignUp............'
    const user = userCredential.user;
    Toastify({

        text: `Successfully sign up`,
        
        duration: 3000
        
        }).showToast();
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    signUpBtn.innerText = 'SignUp'
    Toastify({

        text: `${errorMessage}`,
        
        duration: 3000
        
        }).showToast();

  });
}

signUpBtn.addEventListener("click", signUp);
