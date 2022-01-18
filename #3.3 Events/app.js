/* 글  색 바꾸기
const title = document.querySelector(".hello h1");

console.dir(title);

title.style.color = "blue";
*/


// # 3.3 ~ 3.4 events
const title = document.querySelector(".hello:first-child h1");

console.dir(title);
// on__ : event listener
// on 제외하고 __부분만 사용해야 함.

title.innerText = "Click me!";

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.style.color = "black";
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.style.color = "red";
    title.innerText = "Mouse is gone..";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);



// how to search more events: "h1 html element mdn" && "Web APIs"