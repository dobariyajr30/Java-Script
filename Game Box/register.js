import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD7G8i_sWghk-kJOA4jyKpEPejXahssGKY",
    authDomain: "game-box-18c66.firebaseapp.com",
    projectId: "game-box-18c66",
    storageBucket: "game-box-18c66.appspot.com",
    messagingSenderId: "218165891212",
    appId: "1:218165891212:web:c9b7961648c13226e82ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//my code........
const register = document.getElementById('register');



register.addEventListener("click", function (event) {

    event.preventDefault();
    // Register button click

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Account created successfully. Please log in to start having fun!")
            window.location.href="login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

});

