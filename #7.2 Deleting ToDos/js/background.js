const images = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);