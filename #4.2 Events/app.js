// #4.2 Events

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// preventDefault 함수: 웹페이지의 기본적인 기능을 제한. (ex. submit을 통한 새로고침)