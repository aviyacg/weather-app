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
 * @returns an object the useful attributes
 */
function filterTimestamp(timeStamp) {
  return {
    time: timeStamp.dt,
    temperature: timeStamp.main.temp,
    humidity: timeStamp.main.humidity,
    weather: timeStamp.weather[0].main,
    description: timeStamp.weather[0].description,
  };
}

export function processForecastData(json) {
  const timeStamps = json.list.map((timeStamp) => filterTimestamp(timeStamp));
  console.log(timeStamps);
}
