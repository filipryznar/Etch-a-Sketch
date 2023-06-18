const container = document.querySelector(".container");
const div = document.createElement("div");
// add class to new div
div.classList.add("square");

//div.className = "square"

for (let i = 0; i < 16; i++) {
  console.log(i);
  const rows = document.createElement("div");
  rows.classList.add("row");
  for (let n = 0; n < 16; n++) {
    rows.appendChild(div.cloneNode(true));
  }
  container.appendChild(rows);
}

const divs = document.querySelectorAll(".square");
divs.forEach((square) => square.addEventListener("mouseover", func, false));
//divs.forEach((square) => square.addEventListener("mouseout", func1, false));

function func(e) {
  e.target.setAttribute("style", "background-color:orange;");
}
// Erasing function
function func1(e) {
  e.target.setAttribute("style", "background-color:white;");
}
