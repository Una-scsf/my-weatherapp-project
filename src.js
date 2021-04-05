let now = new Date();

let dayHeader = document.querySelector("#dayTime");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let minutes = now.getMinutes();
let hours = now.getHours();

dayHeader.innerHTML = day + " " + hours + ":" + minutes;

function updateCity(event) {
  let city = document.querySelector("#city-search");
  let cityHeader = document.querySelector("#city");
  console.log(city.value);
  alert("Lets see what the weather is like in " + city.value + "!");
  cityHeader.innerHTML = city.value;
}

let currentCity = document.querySelector("#search-form");
currentCity.addEventListener("submit", updateCity);

function updateTempatureFahrenheit(event) {
  event.preventDefault;
  let tempature = document.querySelector("#temp");
  tempature.innerHTML = "66";
}

function updateTempatureCelsius(event) {
  event.preventDefault;
  let tempature = document.querySelector("#temp");
  tempature.innerHTML = "19";
}

let changeUnitF = document.querySelector("#fahrenheit");
changeUnitF.addEventListener("click", updateTempatureFahrenheit);

let changeUnitC = document.querySelector("#celsius");
changeUnitC.addEventListener("click", updateTempatureCelsius);
