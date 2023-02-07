//select dom elements
let input = document.querySelector("input");
let btn = document.querySelector("button");
let displayWord = document.querySelector(".word");
let meaningContainer = document.querySelector(".meaning-container");
let exampleContainer = document.querySelector(".example-container");
let synonymnContainer = document.querySelector(".synonyms-container");

// //hide containers
(() => {
  let containers = document.querySelectorAll(".container");
  for (const item of containers) {
    item.style.display = "none";
  }
})();

//get word function
function getWord(word) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "014ed6c455msh3d07a40010bdc95p193a11jsn55cd2e8cdd08",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  fetch(
    "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      displayWord.textContent = response.word;
      response.definitions.forEach((element) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.textContent = element.definition;
        span.textContent = `  ${element.partOfSpeech}`;
        li.appendChild(span);
        meaningContainer.style.display = "block";
        meaningContainer.appendChild(li);
      });
      return fetch(
        "https://wordsapiv1.p.rapidapi.com/words/" + word + "/examples",
        options
      );
    })
    .then((response) => response.json())
    .then((response) => {
      response.examples.forEach((element) => {
        let li = document.createElement("li");
        li.classList.add("numbered-list");
        li.textContent = element;
        exampleContainer.style.display = "block";
        exampleContainer.appendChild(li);
      });
      return fetch(
        "https://wordsapiv1.p.rapidapi.com/words/" + word + "/synonyms",
        options
      );
    })
    .then((response) => response.json())
    .then((response) => {
      response.synonyms.forEach((element) => {
        let p = document.createElement("p");
        p.textContent = element;
        synonymnContainer.style.display = "block";
        synonymnContainer.appendChild(p);
      });
    })
    .catch((err) => console.error(err));
}
//button event listener
btn.addEventListener("click", () => {
  const word = input.value;
  getWord(word);
});
