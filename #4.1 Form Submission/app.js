const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);



/* 
    if(username === ""){
        alert("Please write your name.");
    }else if(username.length > 15){
        alert("Your name is too long.\nPlease write your name length less than 15.");
    }
*/