function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "f7747c3a0fa9c8617cedbbd16fe79e6a";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}$units=metric`;

axios.get(apiUrl).then(displayTemperature);
