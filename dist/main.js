/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchForecastData": () => (/* binding */ fetchForecastData),
/* harmony export */   "processForecastData": () => (/* binding */ processForecastData)
/* harmony export */ });
const API_KEY = '2408e0bdb33c31c4304363b4753369a6';

/**
 *  Make a 5 days forecast request from OpenWeatherMap
 * @param {string} location can be either 'City', 'City, Country', 'Country'
 * @returns {JSON} a 5 days / 3 hour forecast in JSON format - read more at https://openweathermap.org/forecast5#JSON
 */
async function fetchForecastData(location) {
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
  convertedTimestamp.temperature = parseFloat((timeStamp.temperature - 273.15).toFixed(2));

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

function processForecastData(json) {
  const timeStamps = json.list.map((timeStamp) => processTimestamp(timeStamp));
  console.log(timeStamps);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ "./src/weather-api.js");

//
_weather_api__WEBPACK_IMPORTED_MODULE_0__.fetchForecastData('Jerusalem')
  .then((json) => _weather_api__WEBPACK_IMPORTED_MODULE_0__.processForecastData(json));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUyxTQUFTLFFBQVEsS0FBSyxjQUFjO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNyQztBQUNBLDJEQUFxQjtBQUNyQixrQkFBa0IsNkRBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gJzI0MDhlMGJkYjMzYzMxYzQzMDQzNjNiNDc1MzM2OWE2JztcclxuXHJcbi8qKlxyXG4gKiAgTWFrZSBhIDUgZGF5cyBmb3JlY2FzdCByZXF1ZXN0IGZyb20gT3BlbldlYXRoZXJNYXBcclxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGNhbiBiZSBlaXRoZXIgJ0NpdHknLCAnQ2l0eSwgQ291bnRyeScsICdDb3VudHJ5J1xyXG4gKiBAcmV0dXJucyB7SlNPTn0gYSA1IGRheXMgLyAzIGhvdXIgZm9yZWNhc3QgaW4gSlNPTiBmb3JtYXQgLSByZWFkIG1vcmUgYXQgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvZm9yZWNhc3Q1I0pTT05cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEZvcmVjYXN0RGF0YShsb2NhdGlvbikge1xyXG4gIC8vIGZldGNoIGRhdGFcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtBUElfS0VZfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgLy8gcmV0dXJuIGRhdGEgaW4gSlNPTiBmb3JtYXRcclxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNwb25zZUpzb247XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIGEgdGltZXN0YW1wIG9iamVjdCB3aXRoIHRoZSBhdHRyaWJ1dGVzIGFjdHVhbGx5IGJlaW5nIHVzZWQgYnkgdGhlIGFwcFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGltZVN0YW1wIGEgdGltZXN0YW1wIG9iamVjdCBmcm9tIE9wZW5XZWF0aGVyTWFwXHJcbiAqIEByZXR1cm5zIGFuIG9iamVjdCBjb250aWFuaW5nIHRoZSB1c2VmdWwgYXR0cmlidXRlc1xyXG4gKi9cclxuZnVuY3Rpb24gZmlsdGVyVGltZXN0YW1wKHRpbWVTdGFtcCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRlOiB0aW1lU3RhbXAuZHQsXHJcbiAgICB0ZW1wZXJhdHVyZTogdGltZVN0YW1wLm1haW4udGVtcCxcclxuICAgIGh1bWlkaXR5OiB0aW1lU3RhbXAubWFpbi5odW1pZGl0eSxcclxuICAgIHdlYXRoZXI6IHRpbWVTdGFtcC53ZWF0aGVyWzBdLm1haW4sXHJcbiAgICBkZXNjcmlwdGlvbjogdGltZVN0YW1wLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBvcmlnaW5hbCB0aW1lc3RhbXAgT1dNIGZvcmVjYXN0IHVuaXRzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lU3RhbXAgZmlsdGVyZWRUaW1lc3RhbXBcclxuICogQHJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHJpZ2h0IHVuaXQgdHlwZVxyXG4gKi9cclxuZnVuY3Rpb24gY29udmVydFVuaXRzVGltZXN0YW1wKHRpbWVTdGFtcCkge1xyXG4gIGNvbnN0IGNvbnZlcnRlZFRpbWVzdGFtcCA9IHRpbWVTdGFtcDtcclxuICAvLyBjb252ZXJ0IHRpbWUgZnJvbSB1bml4IHRvIERhdGUgb2JqZWN0XHJcbiAgY29udmVydGVkVGltZXN0YW1wLmRhdGUgPSBuZXcgRGF0ZSh0aW1lU3RhbXAuZGF0ZSAqIDEwMDApO1xyXG4gIC8vIGNvbnZlcnQgdGVtcGVyYXR1cmUgZnJvbSBrZWx2aW4gdG8gY2Vsc2l1c1xyXG4gIGNvbnZlcnRlZFRpbWVzdGFtcC50ZW1wZXJhdHVyZSA9IHBhcnNlRmxvYXQoKHRpbWVTdGFtcC50ZW1wZXJhdHVyZSAtIDI3My4xNSkudG9GaXhlZCgyKSk7XHJcblxyXG4gIHJldHVybiBjb252ZXJ0ZWRUaW1lc3RhbXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGZpbHRlciBhbmQgY29udmVydFVuaXRzIG9uIHRoZSB0aW1lU3RhbXBcclxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVTdGFtcCBhIHRpbWVzdGFtcCBvYmplY3QgZnJvbSBPcGVuV2VhdGhlck1hcFxyXG4gKiBAcmV0dXJucyBhIGZvcm1hdHRlZCB0aW1lc3RhbXBcclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NUaW1lc3RhbXAodGltZVN0YW1wKSB7XHJcbiAgcmV0dXJuIGNvbnZlcnRVbml0c1RpbWVzdGFtcChmaWx0ZXJUaW1lc3RhbXAodGltZVN0YW1wKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRm9yZWNhc3REYXRhKGpzb24pIHtcclxuICBjb25zdCB0aW1lU3RhbXBzID0ganNvbi5saXN0Lm1hcCgodGltZVN0YW1wKSA9PiBwcm9jZXNzVGltZXN0YW1wKHRpbWVTdGFtcCkpO1xyXG4gIGNvbnNvbGUubG9nKHRpbWVTdGFtcHMpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgYXBpIGZyb20gJy4vd2VhdGhlci1hcGknO1xyXG4vL1xyXG5hcGkuZmV0Y2hGb3JlY2FzdERhdGEoJ0plcnVzYWxlbScpXHJcbiAgLnRoZW4oKGpzb24pID0+IGFwaS5wcm9jZXNzRm9yZWNhc3REYXRhKGpzb24pKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9