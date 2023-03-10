const modeButtons = document.querySelectorAll(".btn");
const customizationColor = document.querySelector(".customization__color");
const customizationRange = document.querySelector(".customization__range");
const rangeNumbers = document.querySelectorAll(".customization__range-number");
const drawingBoard = document.querySelector(".drawing__board");

let mode = "color";

function changeDrawingMode() {
  if (!this.classList.contains("customization__clear")) {
    modeButtons.forEach((modeButton) => modeButton.classList.remove("active"));
  }

  if (this.classList.contains("customization__color-mode")) {
    this.classList.add("active");
    mode = "color";
  } else if (this.classList.contains("customization__rainbow-mode")) {
    this.classList.add("active");
    mode = "rainbow";
  } else if (this.classList.contains("customization__eraser")) {
    this.classList.add("active");
    mode = "eraser";
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

function takeColor() {
  if (mode == "color") {
    return (drawingColor = customizationColor.value);
  } else if (mode == "rainbow") {
    //create random color
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${red} ${green} ${blue})`;

    return (drawingColor = randomColor);
  } else if (mode == "eraser") {
    return (drawingColor = "white");
  }
}

function startDrawing() {
  this.style.backgroundColor = takeColor();
}
// inital function
addDrawingsElements();

modeButtons.forEach((modeButton) => modeButton.addEventListener("click", changeDrawingMode));
customizationRange.addEventListener("change", addDrawingsElements);
