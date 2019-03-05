let sections = {
    login: true,
    forgetPass: false,
    resetSuccess: false
}

let userData = {
    username: "aiyk",
    password: "pass123"
}

const submit = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != userData.username || password != userData.password) {
        document.getElementById("err").style.display = "flex";
    } else {
        document.getElementById("err").style.display = "none";
    }
}

const resetPass = () => {
    let email = document.getElementById("email").value;

    if (!email) {
        document.getElementById("errMsg").innerHTML = "Kindly supply your email";
        document.getElementById("err").style.display = "flex";
    } else {
        document.getElementById("err").style.display = "none";
    }
}

const forgotPass = () => {
    document.getElementById("err").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("resetFrm").style.display = "block";
    document.getElementById("title").innerHTML = "Forgot your password?";
}

const login = () => {
    document.getElementById("err").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("resetFrm").style.display = "none";
    document.getElementById("title").innerHTML = "Login";
}