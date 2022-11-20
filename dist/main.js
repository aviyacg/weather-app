/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  --caryola-blue: #1D71F2;\r\n  --button-blue: #1C9CF6;\r\n  --spiro-disco-ball: #1D71F2;\r\n  --bubbles: #E3F4FE;\r\n  --cornsilk: #FFFAE0;\r\n  --tangerine-yellow: #FFCD00;\r\n\r\n\r\n  --shade: rgba(255,255,255,.2);\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  background-color: var(--button-blue);\r\n  box-shadow: inset 0px 0px 20px 0px var(--bubbles);\r\n\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.content{\r\n  min-height: 100vh;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.content > div {\r\n  background-color: var(--shade);\r\n  border-radius: 4px;\r\n\r\n  padding: 8px;\r\n}\r\n\r\n.current-weather{\r\n  min-height: 100px;\r\n  min-width: 300px;\r\n}\r\n\r\ninput{\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid var(--bubbles);\r\n  font-size: 1.4rem;\r\n  color: var(--bubbles);\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n  caret-color: var(--bubbles);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: var(--bubbles);\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\nbutton{\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--bubbles);\r\n  font-size: 1.4rem;\r\n  padding: 4px 8px;\r\n}\r\n\r\nbutton:hover{\r\n  cursor: pointer;\r\n  background-color: var(--shade);\r\n}\r\n\r\n.switch-forecast,\r\n.forecast{\r\n  width: clamp(300px, 90vw, 1200px);\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.content > .forecast{\r\n  background-color: transparent;\r\n}\r\n\r\n.card{\r\n  flex: 120px 1 0;\r\n  height: 200px;\r\n  background-color: var(--shade);\r\n\r\n  color: var(--bubbles);\r\n  padding: 4px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.time{\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.main{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon{\r\n  width: 4rem;\r\n}\r\n\r\n.temperature{\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.description{\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.details{\r\n  font-size: 1rem;\r\n}\r\n\r\n.current-weather{\r\n  display: grid;\r\n  grid-template: 1fr auto / 1fr 2fr;\r\n}\r\n\r\n.current-weather > div{\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.current-weather > .main{\r\n  grid-column: 1 / 3;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;;;EAG3B,6BAA6B;EAC7B,2DAA2D;AAC7D;;AAEA;EACE,SAAS;EACT,UAAU;;EAEV,oCAAoC;EACpC,iDAAiD;;EAEjD,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;;EAElB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,uCAAuC;EACvC,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA,gBAAgB,yCAAyC;EACvD,qBAAqB;EACrB,UAAU,EAAE,YAAY;AAC1B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;;EAEE,iCAAiC;;EAEjC,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;;EAE9B,qBAAqB;EACrB,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[":root{\r\n  --caryola-blue: #1D71F2;\r\n  --button-blue: #1C9CF6;\r\n  --spiro-disco-ball: #1D71F2;\r\n  --bubbles: #E3F4FE;\r\n  --cornsilk: #FFFAE0;\r\n  --tangerine-yellow: #FFCD00;\r\n\r\n\r\n  --shade: rgba(255,255,255,.2);\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  background-color: var(--button-blue);\r\n  box-shadow: inset 0px 0px 20px 0px var(--bubbles);\r\n\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.content{\r\n  min-height: 100vh;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.content > div {\r\n  background-color: var(--shade);\r\n  border-radius: 4px;\r\n\r\n  padding: 8px;\r\n}\r\n\r\n.current-weather{\r\n  min-height: 100px;\r\n  min-width: 300px;\r\n}\r\n\r\ninput{\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid var(--bubbles);\r\n  font-size: 1.4rem;\r\n  color: var(--bubbles);\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n  caret-color: var(--bubbles);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: var(--bubbles);\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\nbutton{\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--bubbles);\r\n  font-size: 1.4rem;\r\n  padding: 4px 8px;\r\n}\r\n\r\nbutton:hover{\r\n  cursor: pointer;\r\n  background-color: var(--shade);\r\n}\r\n\r\n.switch-forecast,\r\n.forecast{\r\n  width: clamp(300px, 90vw, 1200px);\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.content > .forecast{\r\n  background-color: transparent;\r\n}\r\n\r\n.card{\r\n  flex: 120px 1 0;\r\n  height: 200px;\r\n  background-color: var(--shade);\r\n\r\n  color: var(--bubbles);\r\n  padding: 4px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.time{\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.main{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon{\r\n  width: 4rem;\r\n}\r\n\r\n.temperature{\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.description{\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.details{\r\n  font-size: 1rem;\r\n}\r\n\r\n.current-weather{\r\n  display: grid;\r\n  grid-template: 1fr auto / 1fr 2fr;\r\n}\r\n\r\n.current-weather > div{\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.current-weather > .main{\r\n  grid-column: 1 / 3;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchForecastData": () => (/* binding */ fetchForecastData),
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "processForecastData": () => (/* binding */ processForecastData),
/* harmony export */   "processWeatherData": () => (/* binding */ processWeatherData)
/* harmony export */ });
const API_KEY = '2408e0bdb33c31c4304363b4753369a6';

/**
 * Make a current weather request from openWeatherMap
 * @param {String} location City name
 * @returns current weather in JSON format
 */
async function fetchWeatherData(location) {
  // fetch data
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`, { mode: 'cors' });
    // return data in JSON format
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return error;
  }
}

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
  // convert precip from 0 to 1 float to 0-100 %
  convertedTimestamp.preciption = Math.round(timeStamp.preciption * 100);

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

/**
 *  Process JSON format 5 days forecast
 * @param {JSON} json 5 days forecast in JSON format
 * @returns City name and list of timeStamps
 */
function processForecastData(json) {
  const timeStamps = json.list.map((timeStamp) => processTimestamp(timeStamp));
  return { city: json.city.name, timeStamps };
}

function processWeatherData(json) {
  return (processTimestamp(json));
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




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
    const weatherJson = await _weather_api__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData(location);
    const weather = _weather_api__WEBPACK_IMPORTED_MODULE_0__.processWeatherData(weatherJson);
    renderCurrentWeather(weather);

    // 5 days forecast
    const forecastJson = await _weather_api__WEBPACK_IMPORTED_MODULE_0__.fetchForecastData(location);
    const forecast = _weather_api__WEBPACK_IMPORTED_MODULE_0__.processForecastData(forecastJson);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDhCQUE4Qiw2QkFBNkIsa0NBQWtDLHlCQUF5QiwwQkFBMEIsa0NBQWtDLDRDQUE0QyxrRUFBa0UsS0FBSyxhQUFhLGdCQUFnQixpQkFBaUIsK0NBQStDLHdEQUF3RCw0QkFBNEIsbUJBQW1CLEtBQUssaUJBQWlCLHdCQUF3Qix3QkFBd0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZUFBZSxLQUFLLHdCQUF3QixxQ0FBcUMseUJBQXlCLHVCQUF1QixLQUFLLHlCQUF5Qix3QkFBd0IsdUJBQXVCLEtBQUssY0FBYyxvQ0FBb0MsbUJBQW1CLDhDQUE4Qyx3QkFBd0IsNEJBQTRCLEtBQUssb0JBQW9CLG9CQUFvQixrQ0FBa0MsS0FBSyx3QkFBd0Isc0VBQXNFLGtCQUFrQixrQkFBa0IsZUFBZSxvQ0FBb0MsbUJBQW1CLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQixxQ0FBcUMsS0FBSyx1Q0FBdUMsd0NBQXdDLHdCQUF3QixvQ0FBb0Msc0JBQXNCLGVBQWUsS0FBSyw2QkFBNkIsb0NBQW9DLEtBQUssY0FBYyxzQkFBc0Isb0JBQW9CLHFDQUFxQyxnQ0FBZ0MsbUJBQW1CLHdCQUF3Qiw2QkFBNkIsb0NBQW9DLDBCQUEwQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssY0FBYyxvQkFBb0IsMEJBQTBCLEtBQUssY0FBYyxrQkFBa0IsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyx5QkFBeUIsb0JBQW9CLHdDQUF3QyxLQUFLLCtCQUErQiwyQkFBMkIseUJBQXlCLEtBQUssaUNBQWlDLHlCQUF5QixLQUFLLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxlQUFlLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLG1CQUFtQixhQUFhLHFCQUFxQixPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksZ0NBQWdDLDhCQUE4Qiw2QkFBNkIsa0NBQWtDLHlCQUF5QiwwQkFBMEIsa0NBQWtDLDRDQUE0QyxrRUFBa0UsS0FBSyxhQUFhLGdCQUFnQixpQkFBaUIsK0NBQStDLHdEQUF3RCw0QkFBNEIsbUJBQW1CLEtBQUssaUJBQWlCLHdCQUF3Qix3QkFBd0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZUFBZSxLQUFLLHdCQUF3QixxQ0FBcUMseUJBQXlCLHVCQUF1QixLQUFLLHlCQUF5Qix3QkFBd0IsdUJBQXVCLEtBQUssY0FBYyxvQ0FBb0MsbUJBQW1CLDhDQUE4Qyx3QkFBd0IsNEJBQTRCLEtBQUssb0JBQW9CLG9CQUFvQixrQ0FBa0MsS0FBSyx3QkFBd0Isc0VBQXNFLGtCQUFrQixrQkFBa0IsZUFBZSxvQ0FBb0MsbUJBQW1CLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEtBQUsscUJBQXFCLHNCQUFzQixxQ0FBcUMsS0FBSyx1Q0FBdUMsd0NBQXdDLHdCQUF3QixvQ0FBb0Msc0JBQXNCLGVBQWUsS0FBSyw2QkFBNkIsb0NBQW9DLEtBQUssY0FBYyxzQkFBc0Isb0JBQW9CLHFDQUFxQyxnQ0FBZ0MsbUJBQW1CLHdCQUF3Qiw2QkFBNkIsb0NBQW9DLDBCQUEwQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssY0FBYyxvQkFBb0IsMEJBQTBCLEtBQUssY0FBYyxrQkFBa0IsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyx5QkFBeUIsb0JBQW9CLHdDQUF3QyxLQUFLLCtCQUErQiwyQkFBMkIseUJBQXlCLEtBQUssaUNBQWlDLHlCQUF5QixLQUFLLG1CQUFtQjtBQUMvcE07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxzRkFBc0YsU0FBUyxTQUFTLFFBQVEsS0FBSyxjQUFjO0FBQ25JO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUyxTQUFTLFFBQVEsS0FBSyxjQUFjO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDTztBQUNQO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNoR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDckM7QUFDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxpQkFBaUI7QUFDbkU7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUI7QUFDekQ7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQSw4QkFBOEIsMERBQW9CO0FBQ2xELG9CQUFvQiw0REFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUFxQjtBQUNwRCxxQkFBcUIsNkRBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgLS1jYXJ5b2xhLWJsdWU6ICMxRDcxRjI7XFxyXFxuICAtLWJ1dHRvbi1ibHVlOiAjMUM5Q0Y2O1xcclxcbiAgLS1zcGlyby1kaXNjby1iYWxsOiAjMUQ3MUYyO1xcclxcbiAgLS1idWJibGVzOiAjRTNGNEZFO1xcclxcbiAgLS1jb3Juc2lsazogI0ZGRkFFMDtcXHJcXG4gIC0tdGFuZ2VyaW5lLXllbGxvdzogI0ZGQ0QwMDtcXHJcXG5cXHJcXG5cXHJcXG4gIC0tc2hhZGU6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xcclxcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDBweCB2YXIoLS1idWJibGVzKTtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVye1xcclxcbiAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYnViYmxlcyk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3Vze1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcclxcbiAgY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLWZvcmVjYXN0LFxcclxcbi5mb3JlY2FzdHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTB2dywgMTIwMHB4KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IC5mb3JlY2FzdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHtcXHJcXG4gIGZsZXg6IDEyMHB4IDEgMDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tYnViYmxlcyk7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWV7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW57XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb257XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJle1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbntcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsc3tcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtd2VhdGhlcntcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgYXV0byAvIDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXIgPiBkaXZ7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtd2VhdGhlciA+IC5tYWlue1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkI7OztFQUczQiw2QkFBNkI7RUFDN0IsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0VBRVYsb0NBQW9DO0VBQ3BDLGlEQUFpRDs7RUFFakQsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7O0VBRWxCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQSxnQkFBZ0IseUNBQXlDO0VBQ3ZELHFCQUFxQjtFQUNyQixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGlDQUFpQzs7RUFFakMsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7O0VBRTlCLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAtLWNhcnlvbGEtYmx1ZTogIzFENzFGMjtcXHJcXG4gIC0tYnV0dG9uLWJsdWU6ICMxQzlDRjY7XFxyXFxuICAtLXNwaXJvLWRpc2NvLWJhbGw6ICMxRDcxRjI7XFxyXFxuICAtLWJ1YmJsZXM6ICNFM0Y0RkU7XFxyXFxuICAtLWNvcm5zaWxrOiAjRkZGQUUwO1xcclxcbiAgLS10YW5nZXJpbmUteWVsbG93OiAjRkZDRDAwO1xcclxcblxcclxcblxcclxcbiAgLS1zaGFkZTogcmdiYSgyNTUsMjU1LDI1NSwuMik7XFxyXFxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMHB4IHZhcigtLWJ1YmJsZXMpO1xcclxcblxcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXJ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnViYmxlcyk7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXN7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY2FyZXQtY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxyXFxuICBjb2xvcjogdmFyKC0tYnViYmxlcyk7XFxyXFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtZm9yZWNhc3QsXFxyXFxuLmZvcmVjYXN0e1xcclxcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA5MHZ3LCAxMjAwcHgpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50ID4gLmZvcmVjYXN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJke1xcclxcbiAgZmxleDogMTIwcHggMSAwO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZXtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbntcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmV7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9ue1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxze1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVye1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciBhdXRvIC8gMWZyIDJmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtd2VhdGhlciA+IGRpdntcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyID4gLm1haW57XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSAnMjQwOGUwYmRiMzNjMzFjNDMwNDM2M2I0NzUzMzY5YTYnO1xyXG5cclxuLyoqXHJcbiAqIE1ha2UgYSBjdXJyZW50IHdlYXRoZXIgcmVxdWVzdCBmcm9tIG9wZW5XZWF0aGVyTWFwXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBsb2NhdGlvbiBDaXR5IG5hbWVcclxuICogQHJldHVybnMgY3VycmVudCB3ZWF0aGVyIGluIEpTT04gZm9ybWF0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIC8vIGZldGNoIGRhdGFcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke0FQSV9LRVl9YCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAvLyByZXR1cm4gZGF0YSBpbiBKU09OIGZvcm1hdFxyXG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqICBNYWtlIGEgNSBkYXlzIGZvcmVjYXN0IHJlcXVlc3QgZnJvbSBPcGVuV2VhdGhlck1hcFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gY2FuIGJlIGVpdGhlciAnQ2l0eScsICdDaXR5LCBDb3VudHJ5JywgJ0NvdW50cnknXHJcbiAqIEByZXR1cm5zIHtKU09OfSBhIDUgZGF5cyAvIDMgaG91ciBmb3JlY2FzdCBpbiBKU09OIGZvcm1hdCAtIHJlYWQgbW9yZSBhdCBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9mb3JlY2FzdDUjSlNPTlxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRm9yZWNhc3REYXRhKGxvY2F0aW9uKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke0FQSV9LRVl9YCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAvLyByZXR1cm4gZGF0YSBpbiBKU09OIGZvcm1hdFxyXG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2UgYSB0aW1lc3RhbXAgb2JqZWN0IHdpdGggdGhlIGF0dHJpYnV0ZXMgYWN0dWFsbHkgYmVpbmcgdXNlZCBieSB0aGUgYXBwXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lU3RhbXAgYSB0aW1lc3RhbXAgb2JqZWN0IGZyb20gT3BlbldlYXRoZXJNYXBcclxuICogQHJldHVybnMgYW4gb2JqZWN0IGNvbnRpYW5pbmcgdGhlIHVzZWZ1bCBhdHRyaWJ1dGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBmaWx0ZXJUaW1lc3RhbXAodGltZVN0YW1wKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGU6IHRpbWVTdGFtcC5kdCxcclxuICAgIHRlbXBlcmF0dXJlOiB0aW1lU3RhbXAubWFpbi50ZW1wLFxyXG4gICAgaHVtaWRpdHk6IHRpbWVTdGFtcC5tYWluLmh1bWlkaXR5LFxyXG4gICAgd2VhdGhlcjogdGltZVN0YW1wLndlYXRoZXJbMF0ubWFpbixcclxuICAgIGRlc2NyaXB0aW9uOiB0aW1lU3RhbXAud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgIGljb25JZDogdGltZVN0YW1wLndlYXRoZXJbMF0uaWNvbixcclxuICAgIHdpbmQ6IHRpbWVTdGFtcC53aW5kLnNwZWVkLFxyXG4gICAgcHJlY2lwdGlvbjogdGltZVN0YW1wLnBvcCxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIG9yaWdpbmFsIHRpbWVzdGFtcCBPV00gZm9yZWNhc3QgdW5pdHNcclxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVTdGFtcCBmaWx0ZXJlZFRpbWVzdGFtcFxyXG4gKiBAcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgcmlnaHQgdW5pdCB0eXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHNUaW1lc3RhbXAodGltZVN0YW1wKSB7XHJcbiAgY29uc3QgY29udmVydGVkVGltZXN0YW1wID0gdGltZVN0YW1wO1xyXG4gIC8vIGNvbnZlcnQgdGltZSBmcm9tIHVuaXggdG8gRGF0ZSBvYmplY3RcclxuICBjb252ZXJ0ZWRUaW1lc3RhbXAuZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcC5kYXRlICogMTAwMCk7XHJcbiAgLy8gY29udmVydCB0ZW1wZXJhdHVyZSBmcm9tIGtlbHZpbiB0byBjZWxzaXVzXHJcbiAgY29udmVydGVkVGltZXN0YW1wLnRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAudGVtcGVyYXR1cmUgLSAyNzMuMTUpO1xyXG4gIC8vIGNvbnZlcnQgd2luZCBmcm9tIG1ldGVyL3MgdG8ga20vaFxyXG4gIGNvbnZlcnRlZFRpbWVzdGFtcC53aW5kID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAud2luZCAqIDMuNik7XHJcbiAgLy8gY29udmVydCBwcmVjaXAgZnJvbSAwIHRvIDEgZmxvYXQgdG8gMC0xMDAgJVxyXG4gIGNvbnZlcnRlZFRpbWVzdGFtcC5wcmVjaXB0aW9uID0gTWF0aC5yb3VuZCh0aW1lU3RhbXAucHJlY2lwdGlvbiAqIDEwMCk7XHJcblxyXG4gIHJldHVybiBjb252ZXJ0ZWRUaW1lc3RhbXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsIGZpbHRlciBhbmQgY29udmVydFVuaXRzIG9uIHRoZSB0aW1lU3RhbXBcclxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVTdGFtcCBhIHRpbWVzdGFtcCBvYmplY3QgZnJvbSBPcGVuV2VhdGhlck1hcFxyXG4gKiBAcmV0dXJucyBhIGZvcm1hdHRlZCB0aW1lc3RhbXBcclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NUaW1lc3RhbXAodGltZVN0YW1wKSB7XHJcbiAgcmV0dXJuIGNvbnZlcnRVbml0c1RpbWVzdGFtcChmaWx0ZXJUaW1lc3RhbXAodGltZVN0YW1wKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgUHJvY2VzcyBKU09OIGZvcm1hdCA1IGRheXMgZm9yZWNhc3RcclxuICogQHBhcmFtIHtKU09OfSBqc29uIDUgZGF5cyBmb3JlY2FzdCBpbiBKU09OIGZvcm1hdFxyXG4gKiBAcmV0dXJucyBDaXR5IG5hbWUgYW5kIGxpc3Qgb2YgdGltZVN0YW1wc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGb3JlY2FzdERhdGEoanNvbikge1xyXG4gIGNvbnN0IHRpbWVTdGFtcHMgPSBqc29uLmxpc3QubWFwKCh0aW1lU3RhbXApID0+IHByb2Nlc3NUaW1lc3RhbXAodGltZVN0YW1wKSk7XHJcbiAgcmV0dXJuIHsgY2l0eToganNvbi5jaXR5Lm5hbWUsIHRpbWVTdGFtcHMgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShqc29uKSB7XHJcbiAgcmV0dXJuIChwcm9jZXNzVGltZXN0YW1wKGpzb24pKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi93ZWF0aGVyLWFwaSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmxldCBkYWlseUZvcmVjYXN0ID0ge307XHJcblxyXG4vKipcclxuICogUmVuZGVyIGFsbCB0aGUgZGF0YSBpbiBhIHRpbWVTdGFtcCB0byBhIGNhcmRcclxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVTdGFtcFxyXG4gKiBAcGFyYW0ge05vZGV9IGNhcmRcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNhcmREYXRhKHRpbWVTdGFtcCwgY2FyZCkge1xyXG4gIGNvbnN0IFRJTUUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XHJcbiAgaWYgKFRJTUUpIHtcclxuICAgIFRJTUUudGV4dENvbnRlbnQgPSB0aW1lU3RhbXAuZGF0ZS50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IElDT04gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XHJcbiAgSUNPTi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dGltZVN0YW1wLmljb25JZH1AMngucG5nYDtcclxuXHJcbiAgY29uc3QgVEVNUCA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XHJcbiAgVEVNUC50ZXh0Q29udGVudCA9IGAke3RpbWVTdGFtcC50ZW1wZXJhdHVyZX1DwrBgO1xyXG5cclxuICBjb25zdCBERVNDUklQVElPTiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbiAgREVTQ1JJUFRJT04udGV4dENvbnRlbnQgPSB0aW1lU3RhbXAuZGVzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0IEhVTUlESVRZID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICBIVU1JRElUWS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt0aW1lU3RhbXAuaHVtaWRpdHl9JWA7XHJcblxyXG4gIGNvbnN0IFdJTkQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XHJcbiAgV0lORC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3RpbWVTdGFtcC53aW5kfWttL2hgO1xyXG5cclxuICBjb25zdCBQUkVDSVAgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXAnKTtcclxuICBpZiAoUFJFQ0lQKSB7XHJcbiAgICBQUkVDSVAudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIHJhaW46ICR7dGltZVN0YW1wLnByZWNpcHRpb259JWA7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDdXJyZW50V2VhdGhlcih0aW1lU3RhbXApIHtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC13ZWF0aGVyJyk7XHJcbiAgdXBkYXRlQ2FyZERhdGEodGltZVN0YW1wLCBjdXJyZW50V2VhdGhlckNhcmQpO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVyIHNpbmdsZSBkYXkgZm9yZWNhc3RcclxuICogQHBhcmFtIHtBcnJheX0gdGltZVN0YW1wcyBhbiBhcnJheSBvZiA4IHRpbWVzdGFtcHNcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlckRhaWx5Rm9yZWNhc3QodGltZVN0YW1wcykge1xyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICB0aW1lU3RhbXBzLmZvckVhY2goKHRpbWVTdGFtcCwgaW5kZXgpID0+IHtcclxuICAgIHVwZGF0ZUNhcmREYXRhKHRpbWVTdGFtcCwgY2FyZHNbaW5kZXhdKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGRpdmlkZSB0aW1lc3RhbXBzIGxpc3QgYnkgZGF5c1xyXG4gKiBkYXkxIC0gdGhlIG5leHQgMjQgaG91cnMsIGRheTIgLSB0b21vcnJvdyBldGMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbWVTdGFtcHMgbGlzdCBvZiB0aW1lc3RhbXBzXHJcbiAqIEByZXR1cm5zIGFuIE9iamVjdCB3aXRoIGEgbGlzdCBvZiB0aW1lc3RhbXBzIGZvciBlYWNoIGRheVxyXG4gKi9cclxuZnVuY3Rpb24gZ3JvdXBUaW1lU3RhbXBzQnlEYXlzKHRpbWVTdGFtcHMpIHtcclxuICBjb25zdCBkYXlzTGlzdCA9IFtdO1xyXG4gIHRpbWVTdGFtcHMuZm9yRWFjaCgodGltZVN0YW1wKSA9PiB7XHJcbiAgICBjb25zdCBkYXkgPSB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKTtcclxuICAgIGlmICghZGF5c0xpc3QuaW5jbHVkZXMoZGF5KSkge1xyXG4gICAgICBkYXlzTGlzdC5wdXNoKGRheSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRheTEgPSB0aW1lU3RhbXBzLnNsaWNlKDAsIDgpO1xyXG4gIGNvbnN0IGRheTIgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbMV0pO1xyXG4gIGNvbnN0IGRheTMgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbMl0pO1xyXG4gIGNvbnN0IGRheTQgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbM10pO1xyXG4gIGNvbnN0IGRheTUgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbNF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF5MSwgZGF5MiwgZGF5MywgZGF5NCwgZGF5NSxcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2gobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coYHNlYXJjaGluZzogJHtsb2NhdGlvbn1gKTtcclxuICAgIC8vIGN1cnJlbnQgd2VhdGhlclxyXG4gICAgY29uc3Qgd2VhdGhlckpzb24gPSBhd2FpdCBhcGkuZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbik7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gYXBpLnByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVySnNvbik7XHJcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKTtcclxuXHJcbiAgICAvLyA1IGRheXMgZm9yZWNhc3RcclxuICAgIGNvbnN0IGZvcmVjYXN0SnNvbiA9IGF3YWl0IGFwaS5mZXRjaEZvcmVjYXN0RGF0YShsb2NhdGlvbik7XHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGFwaS5wcm9jZXNzRm9yZWNhc3REYXRhKGZvcmVjYXN0SnNvbik7XHJcbiAgICBkYWlseUZvcmVjYXN0ID0gZ3JvdXBUaW1lU3RhbXBzQnlEYXlzKGZvcmVjYXN0LnRpbWVTdGFtcHMpO1xyXG4gICAgcmVuZGVyRGFpbHlGb3JlY2FzdChkYWlseUZvcmVjYXN0LmRheTEpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIG9uIGxvYWQgdGhlIHBhZ2Ugc2hvdyB0aGUgZm9yZWNhc3QgZm9yIGplcnVzYWxlbVxyXG5jb25zdCBpc0Vycm9yID0gIXNlYXJjaCgnSmVydXNhbGVtJyk7XHJcbmlmIChpc0Vycm9yKSB7IGNvbnNvbGUubG9nKCdzZWFyY2ggZXJyb3InKTsgfVxyXG5cclxuLy8gc3dpdGNoIGZvcmVjYXN0IGJ1dHRvbnMgZXZlbnQgbGlzdGVuZXJzXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoLWZvcmVjYXN0ID4gYnV0dG9uJyk7XHJcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGRheSA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcclxuICByZW5kZXJEYWlseUZvcmVjYXN0KGRhaWx5Rm9yZWNhc3RbZGF5XSk7XHJcbn0pKTtcclxuXHJcbi8vIHNlYXJjaCBldmVudCBsaXN0ZW5lclxyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoID4gYnV0dG9uJyk7XHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2ggPiBpbnB1dCcpO1xyXG4gIHNlYXJjaChpbnB1dC52YWx1ZSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=