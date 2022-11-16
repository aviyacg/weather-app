import * as api from './weather-api';
//
api.fetchForecastData('Jerusalem')
  .then((json) => api.processForecastData(json));
