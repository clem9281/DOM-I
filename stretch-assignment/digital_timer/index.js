let ms = 0,
  seconds = 0;

//get elements
let digits = document.querySelector(".digits");
let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

//milliseconds
setInterval(function() {
  if (seconds === 10) {
    digits.style.color = "red";
  } else if (ms < 1000 && seconds < 10) {
    ms += 10;
    msHundreds.textContent = Math.floor(ms / 10);
    msTens.textContent = ms % 10;
    if (ms === 1000) {
      seconds++;
      msHundreds.textContent = "00";
      msTens.textContent = "00";
      ms = 0;
      secondOnes.textContent = seconds % 10;
      secondTens.textContent = Math.floor(seconds / 10);
      console.log(seconds);
    }
  }
}, 10);
