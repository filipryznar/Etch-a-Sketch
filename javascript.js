const container = document.querySelector(".container");
const div = document.createElement("div");
// add class to new div
div.classList.add("square");

//div.className = "square"
makeCanvas(30);

function makeCanvas(z) {
  for (let i = 0; i < z; i++) {
    const rows = document.createElement("div");
    rows.classList.add("row");
    for (let n = 0; n < z; n++) {
      rows.appendChild(div.cloneNode(true));
    }
    container.appendChild(rows);
  }
  const divs = document.querySelectorAll(".square");
  divs.forEach((square) => square.addEventListener("mouseenter", func, false));
}

//divs.forEach((square) => square.addEventListener("mouseout", func1, false));
let mode = "default";
function func(e) {
  if (mode === "default") {
    e.target.setAttribute("style", "background-color:orange;");
    e.target.style.opacity = 1;
  } else if (mode === "fade") {
    e.target.style.backgroundColor = "#707070";
    e.target.count += 1;
    console.log((e.target.count += 1));
    e.target.style.opacity = 0.5 * e.target.count;
  } else if (mode === "random") {
    // e.target.setAttribute("style", "background-color:black;");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
    e.target.style.opacity = 1;
  }
}
// Erasing function
function func1(e) {
  e.target.setAttribute("style", "background-color:white;");
}

// Button for reset
const button = document.querySelector("button");
button.addEventListener("click", askForNumber);

let num = 30;
// Function
function askForNumber() {
  num = +prompt("Type how many squares you would like", "");
  if (num > 100) {
    return (num = 100);
  }
  container.textContent = "";
  makeCanvas(num);
}

const def = document.querySelector(".default");
const fade = document.querySelector(".fade");
const random = document.querySelector(".random");

//def.addEventListener("click");
fade.addEventListener("click", () => (mode = "fade"));
def.addEventListener("click", () => (mode = "default"));
random.addEventListener("click", () => (mode = "random"));

function colorChanger(e) {
  e.target.setAttribute("style", "background-color:black;");
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  container.textContent = "";
  if (num > 0) {
    return makeCanvas(num);
  } else return makeCanvas(30);
});
