let startTime;
let running = false;
let seconds = 0;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (seconds * 1000);
    running = true;
    runTimer();
  }
}

function stopTimer() {
  running = false;
}

function resetTimer() {
  seconds = 0;
  updateDisplay();
}

function runTimer() {
  if (running) {
    const currentTime = new Date().getTime();
    seconds = Math.floor((currentTime - startTime) / 1000);
    updateDisplay();
    setTimeout(runTimer, 1000);
  }
}

function updateDisplay() {
  const display = document.getElementById('timer');
  display.textContent = padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}

//stylingwith DOM
const heading =document.querySelector('h1');
heading.style.textTransform='uppercase';
heading.style.color='maroon';