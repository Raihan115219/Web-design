let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let themeToggler = document.querySelector("#theme-toggler");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let midday;

  hours = updateTime(hours);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);
  let name = "Jhon Doe";
  // define AM-Pm condition
  midday = hours >= 12 ? " PM" : " AM";
  mainHours = hours > 12 ? hours - 12 : hours;

  document.getElementById("clock").innerHTML =
    "<span>" +
    mainHours +
    "</span>" +
    "<span>" +
    minutes +
    "</span>" +
    "<span>" +
    seconds +
    "</span>" +
    "<span>" +
    midday +
    "</span>";

  let time = setTimeout(function () {
    clock();
  }, 500);

  // grettings Msg
  if (hours < 12) {
    var greeting = "Good Morning ";
  }
  if (hours >= 12 && hours <= 16) {
    var greeting = "Good Afternoon ";
  }
  if (hours >= 16 && hours <= 20) {
    var greeting = "Good Evening ";
  }
  if (hours >= 20 && hours <= 24) {
    var greeting = "Good Night ";
  }
  document.getElementById("greetings").innerHTML = greeting;
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
clock();
