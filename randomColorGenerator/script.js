//select DOM elements
let button = document.querySelector("button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let slider = document.querySelector("input");

//create a range of characters for hex code
const characters = "0123456789ABCDEF";

//function to create random color
function generateRandomColor() {
  //variable with # symbol
  let color = "#";
  //loop through characters
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * characters.length)];
  }
  return color;
}
function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgba(hex, opacity) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

let hex = "";
button.addEventListener("click", () => {
  hex = generateRandomColor();
  h1.textContent = hex;
  body.style.backgroundColor = hex;
  h2.textContent = hexToRgb(hex);
});

slider.addEventListener("input", function () {
  let opacity = slider.value / 100;
  let newShade = hexToRgba(hex, opacity);
  body.style.backgroundColor = newShade;
  h2.textContent = newShade;
});
