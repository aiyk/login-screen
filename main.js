let userData = {
    username: "aiyk",
    password: "pass123"
}
const submit = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username != userData.username || password != userData.password) {
        document.getElementById("err").style.visibility = "visible";
    } else {
        document.getElementById("err").style.visibility = "hidden";
    }
}