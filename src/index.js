import * as api from './weather-api';

import './style.css';
//
api.fetchForecastData('Jerusalem')
  .then((json) => api.processForecastData(json));
