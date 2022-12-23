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
  console.log(this.value);
}

modeButtons.forEach((modeButton) => modeButton.addEventListener("click", changeDrawingMode));
customizationRange.addEventListener("change", addDrawingsElements);
