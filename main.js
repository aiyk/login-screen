let userData = {
    username: "aiyk",
    password: "pass123"
}

const submit = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != userData.username || password != userData.password) {
        document.getElementById("err").style.display = "flex";
        document.getElementById("success").style.display = "none";
    } else {
        document.getElementById("err").style.display = "none";
        document.getElementById("success").style.display = "flex";
    }
}

const resetPass = () => {
    let email = document.getElementById("email").value;

    if (!email) {
        document.getElementById("inputErr").innerHTML = "We cannot do this without your email";
        document.getElementById("err").style.display = "none";
        document.getElementById("success").style.display = "none";
    } else {
        document.getElementById("err").style.display = "none";
        document.getElementById("btn").style.display = "none";
        document.getElementById("emailInput").style.display = "none";
        document.getElementById("title").innerHTML = "Check your email to complete your password reset";
        document.getElementById("subTitle").innerHTML = "If " + email + " has been registered with instanta, you will find a password reset email sent to you";
    }
}

const forgotPass = () => {
    document.getElementById("err").style.display = "none";
    document.getElementById("inputErr").innerHTML = "";
    document.getElementById("success").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("btn").style.display = "block";
    document.getElementById("emailInput").style.display = "block";
    document.getElementById("resetFrm").style.display = "block";
    document.getElementById("title").innerHTML = "Forgot your password?";
}

const login = () => {
    document.getElementById("err").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("resetFrm").style.display = "none";
    document.getElementById("title").innerHTML = "Login";
}