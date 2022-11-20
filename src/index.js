import * as api from './weather-api';

import './style.css';

let dailyForecast = {};

/**
 * Render all the data in a timeStamp to a card
 * @param {Object} timeStamp
 * @param {Node} card
 */
function updateCardData(timeStamp, card) {
  const TIME = card.querySelector('.time');
  if (TIME) {
    TIME.textContent = timeStamp.date.toTimeString().slice(0, 5);
  }

  const ICON = card.querySelector('.icon');
  ICON.src = `https://openweathermap.org/img/wn/${timeStamp.iconId}@2x.png`;

  const TEMP = card.querySelector('.temperature');
  TEMP.textContent = `${timeStamp.temperature}C°`;

  const DESCRIPTION = card.querySelector('.description');
  DESCRIPTION.textContent = timeStamp.description;

  const HUMIDITY = card.querySelector('.humidity');
  HUMIDITY.textContent = `Humidity: ${timeStamp.humidity}%`;

  const WIND = card.querySelector('.wind');
  WIND.textContent = `Wind: ${timeStamp.wind}km/h`;

  const PRECIP = card.querySelector('.precip');
  if (PRECIP) {
    PRECIP.textContent = `Chance of rain: ${timeStamp.preciption}%`;
  }
}

function renderCurrentWeather(timeStamp) {
  const currentWeatherCard = document.querySelector('.current-weather');
  updateCardData(timeStamp, currentWeatherCard);
}

/**
 * Render single day forecast
 * @param {Array} timeStamps an array of 8 timestamps
 */
function renderDailyForecast(timeStamps) {
  const cards = document.querySelectorAll('.card');
  timeStamps.forEach((timeStamp, index) => {
    updateCardData(timeStamp, cards[index]);
  });
}

/**
 * divide timestamps list by days
 * day1 - the next 24 hours, day2 - tomorrow etc.
 * @param {Array} timeStamps list of timestamps
 * @returns an Object with a list of timestamps for each day
 */
function groupTimeStampsByDays(timeStamps) {
  const daysList = [];
  timeStamps.forEach((timeStamp) => {
    const day = timeStamp.date.getDay();
    if (!daysList.includes(day)) {
      daysList.push(day);
    }
  });

  const day1 = timeStamps.slice(0, 8);
  const day2 = timeStamps.filter((timeStamp) => timeStamp.date.getDay() === daysList[1]);
  const day3 = timeStamps.filter((timeStamp) => timeStamp.date.getDay() === daysList[2]);
  const day4 = timeStamps.filter((timeStamp) => timeStamp.date.getDay() === daysList[3]);
  const day5 = timeStamps.filter((timeStamp) => timeStamp.date.getDay() === daysList[4]);

  return {
    day1, day2, day3, day4, day5,
  };
}

async function search(location) {
  try {
    console.log(`searching: ${location}`);
    // current weather
    const weatherJson = await api.fetchWeatherData(location);
    const weather = api.processWeatherData(weatherJson);
    renderCurrentWeather(weather);

    // 5 days forecast
    const forecastJson = await api.fetchForecastData(location);
    const forecast = api.processForecastData(forecastJson);
    dailyForecast = groupTimeStampsByDays(forecast.timeStamps);
    renderDailyForecast(dailyForecast.day1);
    return true;
  } catch (error) {
    return false;
  }
}

// on load the page show the forecast for jerusalem
const isError = !search('Jerusalem');
if (isError) { console.log('search error'); }

// switch forecast buttons event listeners
const buttons = document.querySelectorAll('.switch-forecast > button');
buttons.forEach((button) => button.addEventListener('click', (e) => {
  const day = e.target.classList;
  renderDailyForecast(dailyForecast[day]);
}));

// search event listener
const searchButton = document.querySelector('.search > button');
searchButton.addEventListener('click', () => {
  const input = document.querySelector('.search > input');
  search(input.value);
});
