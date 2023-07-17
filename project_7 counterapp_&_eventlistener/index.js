const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");


decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});


resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});



// EventListner

const oneClickElement = document.getElementById("onclick");
const doubleClickElement = document.getElementById("doubleclick");
const mouseoverElement = document.getElementById("mouseover");
const mouseoutElement = document.getElementById("mouseout");
let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')
let container_2 = document.getElementById("container_2");
let display_2 = document.getElementById("display_2");



oneClickElement.addEventListener("click", function(){
  alert("you just clicked me 👍")
});

doubleClickElement.addEventListener("dblclick", function(){
  alert("you just clicked me two times👍")
});


mouseoverElement.addEventListener("mouseover", function(){
  alert("you entered in Restricted Area 🙅 (mouse over event is working properly)")
});

mouseoutElement.addEventListener("mouseout", function(){
  alert("you left the safe zone 🙅 (mouse out event working properly)")
});

inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});