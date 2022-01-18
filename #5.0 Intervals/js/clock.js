const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
// setInterval(호출되는 함수 이름, 사이의 시간);
setInterval(sayHello, 5000);