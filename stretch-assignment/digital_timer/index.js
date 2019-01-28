let ms = 0,
  seconds = 0,
  counter = 0;

//get elements
let digits = document.querySelector(".digits");
let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

//milliseconds
setInterval(function() {
  if (counter <= 10) {
    if (counter === 10) {
      digits.style.color = "red";
    } else if (ms < 1000 && counter < 10) {
      ms += 10;
      msHundreds.textContent = Math.floor(ms / 10);
      msTens.textContent = ms % 10;
      console.log(Math.floor(ms / 100), ms / 10);
      if (ms === 1000) {
        counter++;
        msHundreds.textContent = "00";
        msTens.textContent = "00";
        ms = 0;
      }
      //   console.log(ms);
    }
  }
}, 10);

//seconds
setInterval(function() {
  if (seconds <= 10) {
    if (seconds === 10) {
      digits.style.color = "red;";
    } else {
      seconds++;
      secondOnes.textContent = seconds % 10;
      secondTens.textContent = Math.floor(seconds / 10);
    }
  }
}, 1000);
