const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const signup = async () => {
    console.log("signup clicked");
    const email = document.getElementById("signupEmailID").value;
    const password = document.getElementById("signupPassID").value;
    const username = document.getElementById("usernameID").value;

    const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password}),
    })

    console.log(response);

}