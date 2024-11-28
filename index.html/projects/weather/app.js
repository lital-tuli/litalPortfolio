const API_KEY = "8d14752e475d4669568e9efd5708b5f2";

const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const query = document.getElementById("inputCity");
const city = document.getElementById("city");
const button = document.querySelector("button");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const img = document.querySelector("img");
async function getWeather(city) {
  try {
    const response = await fetch(URL + city); // 1.5 s respone = undefind
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}
function displayWeather(weatherData) {
  if (weatherData.cod === 200) {
    city.innerText = query.value;
    description.innerText = weatherData.weather[0].description;
    temp.innerText = weatherData.main.temp;
    img.src = `https://openweathermap.org/img/wn/10d@2x.png`
  } else {
  }
}
button.addEventListener("click", () => {
  getWeather(query.value);
});