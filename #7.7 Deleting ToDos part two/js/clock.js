const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);

// function.padStart(길이, 함수와 길이가 일치하지 않으면 맨앞에 "숫자"를 추가);
// function.padEnd(길이, 함수와 길이가 일치하지 않으면 맨뒤에 "숫자"를 추가);
