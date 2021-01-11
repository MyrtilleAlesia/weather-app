//1) First Part | getting the date
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  return `${currentDay} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//2) Displaying the temperature
function showTemperature(response) {
  //document.querySelector("#city").innerHTML = response.data.name;
  //let temperature = response.data.main.temp;
  //let tempElement = document.querySelector("temperature");
  //tempElement.innerHtml = response.data.main.temp;
  document.querySelector(".temperature").innerHTML = response.data.main.temp;
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let windElement = document.querySelector("#wind");
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

//3) Second Part | searching for the city
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let searchInput = document.querySelector("#search-input").value;
  cityElement.innerHTML = searchInput;

  //Including the api for the city in the search tab
  let apiKey = "81340edf12835f1a5e96084dd4940612";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);


//4) Converting Celsius Units to Fahrenheit
function convertToFahreinheit(event) {
  event.preventDefault();
  let fahrenheitElement = document.querySelector(".temperature");
  let fahrenheit = fahrenheitElement.innerHTML;
  fahrenheitElement.innerHTML = Math.round((fahrenheit * 9) / 5 + 32);
}
let fahrenheitTemp= document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", convertToFahreinheit);


//5) Converting Celsius Units to Celsius
function convertToCelsius(event) {
  event.preventDefault();
  let celsiusElement = document.querySelector(".temperature");
  let celsius = celsiusElement.innerHTML;
  celsiusElement.innerHTML = Math.round((celsius - 32) * 5 / 9);
}
let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", convertToCelsius);


// //6) Displaying weather conditions
// function displayWeatherCondition(response) {
//   document.querySelector("#city").innerHTML = response.data.name;
//   document.querySelector("#temperature").innerHTML = Math.round(
//     response.data.main.temp
//   );

//   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//   document.querySelector("#wind").innerHTML = Math.round(
//     response.data.wind.speed
//   );
//   document.querySelector("#description").innerHTML =
//     response.data.weather[0].main;
// }

