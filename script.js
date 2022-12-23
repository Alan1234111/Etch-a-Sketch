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

function changeMode() {
  if (!this.classList.contains("customization__clear")) {
    modeButtons.forEach((modeButton) => modeButton.classList.remove("active"));
  }

  if (this.classList.contains("customization__color-mode")) {
    this.classList.add("active");
    console.log(this);
  } else if (this.classList.contains("customization__rainbow-mode")) {
    this.classList.add("active");
  } else if (this.classList.contains("customization__eraser")) {
    this.classList.add("active");
  } else if (this.classList.contains("customization__clear")) {
    console.log("clear");
  }
}

modeButtons.forEach((modeButton) => modeButton.addEventListener("click", changeMode));
