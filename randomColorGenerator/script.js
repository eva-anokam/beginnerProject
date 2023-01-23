//select DOM elements
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let button = document.querySelector("button");

//create characters
const characters = "0123456789abcdef";

//generate random color function
function generateRandomColor() {
    let randomColor = "#";
    for (let i = 0; i < 6; i++){
        randomColor += characters[Math.floor(Math.random() * characters.length)];
    }
    return randomColor;
}

//add event listener to button
button.addEventListener("click", () => {
    let newColor = generateRandomColor();
    h1.textContent = newColor;
    body.style.backgroundColor = newColor;
});