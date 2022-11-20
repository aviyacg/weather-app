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

function toggleButtons(button) {
  const clickedButton = document.querySelector('.clicked');
  if (clickedButton) { clickedButton.classList.remove('clicked'); }
  button.classList.add('clicked');
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

function updateInputPlaceholder(city) {
  const input = document.querySelector('input');
  input.placeholder = city;
  input.value = '';
}

function updateButtonsText() {
  const weekdays = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  document.querySelector('.day3').textContent = weekdays[dailyForecast.day3[0].date.getDay()];
  document.querySelector('.day4').textContent = weekdays[dailyForecast.day4[0].date.getDay()];
  document.querySelector('.day5').textContent = weekdays[dailyForecast.day5[0].date.getDay()];
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

    // render today forecast
    renderDailyForecast(dailyForecast.day1);
    toggleButtons(document.querySelector('.day1'));
    // update input and buttons
    updateInputPlaceholder(forecast.city);
    updateButtonsText();
    //
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
buttons.forEach((button) => button.addEventListener('click', () => {
  // render data
  const day = button.classList[0];
  renderDailyForecast(dailyForecast[day]);

  toggleButtons(button);
}));

// search event listener
const searchButton = document.querySelector('.search > button');
searchButton.addEventListener('click', () => {
  const input = document.querySelector('.search > input');
  search(input.value);
});
