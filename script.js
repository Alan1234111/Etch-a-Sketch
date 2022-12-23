// choose mode
//   take all buttons
//   if(this== color mode)
//      take value from colors
//      give him class active
//      change color to picked
//   if(this== rainbow mode)
//      create a random color
//      give him class active
//      change color to random
//   if(this== eraser)
//      give him class active
//      change color to white
//   if(this== clear)
//      clear board

// selecting the table size
// input value
//  when valueofinput change
// set value of number-col-row in class
// remove all divs
// add divs

//drawing
// when clicked and push
//  divs change to chosen color
//

const modeButtons = document.querySelectorAll(".btn");
const customizationColor = document.querySelector(".customization__color");
const customizationRange = document.querySelector(".customization__range");
const rangeNumbers = document.querySelectorAll(".customization__range-number");
const drawingBoard = document.querySelector(".drawing__board");

let drawingColor = "black";

function changeDrawingMode() {
  if (!this.classList.contains("customization__clear")) {
    modeButtons.forEach((modeButton) => modeButton.classList.remove("active"));
  }

  if (this.classList.contains("customization__color-mode")) {
    this.classList.add("active");
    drawingColor = customizationColor.value;
  } else if (this.classList.contains("customization__rainbow-mode")) {
    this.classList.add("active");
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${red} ${green} ${blue})`;
    drawingColor = randomColor;
  } else if (this.classList.contains("customization__eraser")) {
    this.classList.add("active");
    drawingColor = "white";
  } else if (this.classList.contains("customization__clear")) {
    const boardDivs = document.querySelectorAll(".drawing__board div");
    boardDivs.forEach((boardDiv) => (boardDiv.style.backgroundColor = "white"));
  }
}

function addDrawingsElements() {
  let inputValue = 0;
  // check it is initial function or change function
  if (!this.value) {
    inputValue = 16;
  } else {
    inputValue = this.value;
  }
  rangeNumbers.forEach((rangeNumber) => (rangeNumber.textContent = inputValue));
  document.documentElement.style.setProperty("--number-col-row", `${inputValue}`);
  drawingBoard.innerHTML = "";

  // adding Divs to board
  for (let i = 0; i < inputValue; i++) {
    for (let i = 0; i < inputValue; i++) {
      const div = document.createElement("div");
      div.style.backgroundColor = "white";
      drawingBoard.appendChild(div);
    }
  }
  const drawingElements = document.querySelectorAll(".drawing__board div");

  drawingElements.forEach((drawingElement) =>
    drawingElement.addEventListener("click", startDrawing)
  );

  drawingBoard.addEventListener("mousedown", () => {
    drawingElements.forEach((drawingElement) =>
      drawingElement.addEventListener("mouseover", startDrawing)
    );
  });

  drawingBoard.addEventListener("mouseup", () => {
    drawingElements.forEach((drawingElement) =>
      drawingElement.removeEventListener("mouseover", startDrawing)
    );
  });
}

function startDrawing() {
  this.style.backgroundColor = drawingColor;
}
// inital function
addDrawingsElements();

modeButtons.forEach((modeButton) => modeButton.addEventListener("click", changeDrawingMode));
customizationRange.addEventListener("change", addDrawingsElements);
