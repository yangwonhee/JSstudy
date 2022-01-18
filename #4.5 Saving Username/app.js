// #4.5 Saving Username

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const hiddenClassName = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(hiddenClassName);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    // greeting.innerText = "Hello " + username + "!";
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(hiddenClassName);
}


loginForm.addEventListener("submit", onLoginSubmit);
