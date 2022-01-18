// #3.7 CSS in JavaScript (2)
/* toggle code

const h1 = document.querySelector(".hello:first-child h1");

function handleh1Click(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleh1Click);
*/

const h1 = document.querySelector(".hello:first-child h1");

function handleh1Click(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);