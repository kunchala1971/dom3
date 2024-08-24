
let bulbElement = document.getElementById("bulb");
let catElement = document.getElementById("cat");
let btntextElement = document.getElementById("btntext");
function showHide() {
  if (btntextElement.textContent == "Light On") {
    bulbElement.src = "./images/bulb-go-on-img.png";
    catElement.src = "./images/cat-img.png";
    btntextElement.textContent = "Light Off";
  } else {
    bulbElement.src = "./images/bulb-go-off-img.png";
    catElement.src = "./images/cat-eyes-img.png";
    btntextElement.textContent = "Light On";
  }
}
