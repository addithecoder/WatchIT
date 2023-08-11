const txtEmailLogin = document.getElementById("txtEmail_login");
    const txtPasswordLogin = document.getElementById("txtPassword_login");    
    const btnLogin = document.getElementById("btnLogin");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        e.preventDefault();
        const email = txtEmailLogin.value;
        const password = txtPasswordLogin.value;

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            if (user !== null) window.location.href = "./panel.html";
        }).catch(err => {
            alert(err.message);
        });
        
    });