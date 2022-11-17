const API_KEY = '2408e0bdb33c31c4304363b4753369a6';

/**
 *  Make a 5 days forecast request from OpenWeatherMap
 * @param {string} location can be either 'City', 'City, Country', 'Country'
 * @returns {JSON} a 5 days / 3 hour forecast in JSON format - read more at https://openweathermap.org/forecast5#JSON
 */
export async function fetchForecastData(location) {
  // fetch data
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`, { mode: 'cors' });
    // return data in JSON format
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * Make a timestamp object with the attributes actually being used by the app
 * @param {Object} timeStamp a timestamp object from OpenWeatherMap
 * @returns an object contianing the useful attributes
 */
function filterTimestamp(timeStamp) {
  return {
    date: timeStamp.dt,
    temperature: timeStamp.main.temp,
    humidity: timeStamp.main.humidity,
    weather: timeStamp.weather[0].main,
    description: timeStamp.weather[0].description,
    iconId: timeStamp.weather[0].icon,
    wind: timeStamp.wind.speed,
    preciption: timeStamp.pop,
  };
}

/**
 * Converts the original timestamp OWM forecast units
 * @param {Object} timeStamp filteredTimestamp
 * @returns an object with the right unit type
 */
function convertUnitsTimestamp(timeStamp) {
  const convertedTimestamp = timeStamp;
  // convert time from unix to Date object
  convertedTimestamp.date = new Date(timeStamp.date * 1000);
  // convert temperature from kelvin to celsius
  convertedTimestamp.temperature = Math.round(timeStamp.temperature - 273.15);
  // convert wind from meter/s to km/h
  convertedTimestamp.wind = Math.round(timeStamp.wind * 3.6);

  return convertedTimestamp;
}

/**
 * Call filter and convertUnits on the timeStamp
 * @param {Object} timeStamp a timestamp object from OpenWeatherMap
 * @returns a formatted timestamp
 */
function processTimestamp(timeStamp) {
  return convertUnitsTimestamp(filterTimestamp(timeStamp));
}

export function processForecastData(json) {
  const timeStamps = json.list.map((timeStamp) => processTimestamp(timeStamp));
  console.log(timeStamps);
}
