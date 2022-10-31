// select the time display elements
const dayBox = document.getElementById("day-box");
const hrBox = document.getElementById("hr-box");
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");
// select the time text
const dayText = document.querySelector(".day-text");
const hrText = document.querySelector(".hour-text");
const minText = document.querySelector(".min-text");
const secText = document.querySelector(".sec-text");
const endTime = new Date("2022-11-20").getTime();
// convert to milliseconds
const sec = 1000;
const min = 60 * sec; // 60000
const hr = 60 * min; // 3600000
const day = 24 * hr; // 86400000

function countdown() {
  // get the current time and find the difference between the future and present
  const todayTime = new Date().getTime();
  const gap = endTime - todayTime;

  if (endTime < todayTime) {
    clearInterval(CI);
    return;
  }
  // calculate the shit
  const daysLeft = gap / day;
  const hrsLeft = (gap % day) / hr;
  const minsLeft = (gap % hr) / min;
  const secsLeft = (gap % min) / sec;

  dayText.innerText = daysLeft < 2 ? "Day" : "Days";
  hrText.innerText = hrsLeft < 2 ? "Hour" : "Hours";
  minText.innerText = minsLeft < 2 ? "Minute" : "Minutes";
  secText.innerText = secsLeft < 2 ? "Second" : "Seconds";

  // display to the page
  dayBox.innerText = concatZero(daysLeft);
  hrBox.innerText = concatZero(hrsLeft);
  minBox.innerText = concatZero(minsLeft);
  secBox.innerText = concatZero(secsLeft);
}

countdown();
const CI = setInterval(countdown, 1000);

function concatZero(num) {
  const rounded = Math.floor(num);
  return rounded < 10 ? "0" + rounded : rounded;
}