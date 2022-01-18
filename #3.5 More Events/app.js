// # 3.3 ~ 3.4 events
const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleh1Click(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.style.color = "black";
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.style.color = "red";
    h1.innerText = "Mouse is gone..";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI!");
}

function handleWindowOnline(){
    alert("ALL GOOOD");
}

// h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;
// h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);




window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);