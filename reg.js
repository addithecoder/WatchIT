const txtName = document.getElementById("txtName");
const txtEmailRegister = document.getElementById("txtEmail_register");
const txtPasswordRegister = document.getElementById("txtPassword_register");
const btnSignup = document.getElementById("btnSignup");

//Add Signup Event
btnSignup.addEventListener('click', e => {

    e.preventDefault();
    //get email and password
    const email = txtEmailRegister.value;
    const password = txtPasswordRegister.value;

    const auth = firebase.auth();

    //sign in with firebase auth
    const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
        
        if (user !== null) window.location.href = "./index.html";
    }).catch(err => {
        alert(err.message);
    });

});
