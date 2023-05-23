//select DOM elements
let adviceId = document.querySelector(".adviceId");
let advice = document.querySelector(".advice");
let btn = document.querySelector("button");

//get advice function
function getAdvice() {
  let url = "https://api.adviceslip.com/advice";

  adviceId.textContent = "Loading...";
  advice.textContent = "";
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      adviceId.textContent = `Advice #${response.slip.id}`;
      advice.textContent = `"${response.slip.advice}"`;
    })
    .catch(error);
  console.error("Error fetching advice:", error);
  return { error: "An error occured while fetching advice." };
}

// Call getAdvice() immediately on page load
document.addEventListener("DOMContentLoaded", getAdvice);

//add event listener
btn.addEventListener("click", () => {
  getAdvice();
  adviceId.textContent = "";
  advice.textContent = "";
});
