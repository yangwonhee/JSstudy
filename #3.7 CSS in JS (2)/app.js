// #3.7 CSS in JavaScript (2)

const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleh1Click(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleh1Click);