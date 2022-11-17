import * as api from './weather-api';

import './style.css';

/**
 * Render all the data in a timeStamp to a card
 * @param {Object} timeStamp
 * @param {Node} card
 */
function updateCardData(timeStamp, card) {
  const TIME = card.querySelector('.time');
  TIME.textContent = timeStamp.date.toTimeString().slice(0, 5);
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
  PRECIP.textContent = `Chance of rain: ${timeStamp.preciption}%`;
}

// on load the page show the forecast for jerusalem
api.fetchForecastData('Jerusalem')
  .then((json) => api.processForecastData(json))
  .then((obj) => {
    console.log(obj);
    updateCardData(obj.timeStamps[0], document.querySelector('.card'));
  });
