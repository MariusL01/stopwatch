let ms = 0;
let s = 0;
let m = 0;
let interval = null;

const mEl = document.querySelector("#m");
const sEl = document.querySelector("#s");
const msEl = document.querySelector("#ms");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  clearInterval(interval);
  interval = setInterval(() => {
    ms++;
    if (ms == 100) {
      s++;
      ms = 0;
    }
    if (s == 60) {
      m++;
      s = 0;
    }
    displayTime(ms, msEl);
    displayTime(s, sEl);
    displayTime(m, mEl);
  }, 10);
}

function displayTime(value, timeUnit) {
  const htmlElement = timeUnit;
  if (value <= 9) {
    value = "0" + value;
  }
  htmlElement.innerHTML = value;
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  ms = s = m = 0;
  msEl.textContent = sEl.textContent = mEl.textContent = "00";
}
