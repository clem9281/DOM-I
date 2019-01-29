// store seconds and milliseconds in variables so we can use them
let ms = 0,
  seconds = 0;

//get elements
let digits = document.querySelector(".digits");
let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

//timer
setInterval(function() {
  // if 10 seconds update the style
  if (seconds === 10) {
    digits.style.color = "red";
  }
  // otherwise every ten milliseconds update the millisecond timer text, this line also keeps us from going over 10 seconds
  else if (ms < 1000 && seconds < 10) {
    ms += 10;
    msHundreds.textContent = Math.floor(ms / 10);
    msTens.textContent = ms % 10;
    // every second update time seconds text, show milliseconds at 0 so we don't see milliseconds as 1000
    if (ms === 1000) {
      seconds++;
      msHundreds.textContent = "00";
      msTens.textContent = "00";
      ms = 0;
      secondOnes.textContent = seconds % 10;
      secondTens.textContent = Math.floor(seconds / 10);
    }
  }
}, 10);
