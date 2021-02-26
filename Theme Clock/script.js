const [hourEl, minuteEl, secondEl] = [
  document.querySelector(".hour"),
  document.querySelector(".minute"),
  document.querySelector(".second"),
];
const [timeEl, dateEl, toggle] = [
  document.querySelector(".time"),
  document.querySelector(".date"),
  document.querySelector(".toggle"),
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

toggle.addEventListener("ontouchstart", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      e.target.innerHTML = "Dark mode";
    } else {
      html.classList.add("dark");
      e.target.innerHTML = "Light mode";
    }
  });

function setTime() {
    const time = new Date();
    const hours = time.getHours();
  const [
    month,
    day,
    date,
    hoursForClock,
    minutes,
    seconds,
    ampm,
  ] = [
    time.getMonth(),
    time.getDay(),
    time.getDate(),
    hours >= 13 ? hours % 12 : hours,
    time.getMinutes(),
    time.getSeconds(),
    hours >= 12 ? "PM" : "AM",
  ];

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
