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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  --caryola-blue: #1D71F2;\r\n  --button-blue: #1C9CF6;\r\n  --spiro-disco-ball: #1D71F2;\r\n  --bubbles: #E3F4FE;\r\n  --cornsilk: #FFFAE0;\r\n  --tangerine-yellow: #FFCD00;\r\n\r\n\r\n  --shade: rgba(255,255,255,.2);\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  background-color: var(--button-blue);\r\n  box-shadow: inset 0px 0px 20px 0px var(--bubbles);\r\n\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.content{\r\n  min-height: 100vh;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.content > div {\r\n  background-color: var(--shade);\r\n  border-radius: 4px;\r\n\r\n  padding: 8px;\r\n}\r\n\r\n.current-weather{\r\n  min-height: 100px;\r\n  min-width: 300px;\r\n}\r\n\r\ninput{\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid var(--bubbles);\r\n  font-size: 1.4rem;\r\n  color: var(--bubbles);\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n  caret-color: var(--bubbles);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: var(--bubbles);\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\nbutton{\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--bubbles);\r\n  font-size: 1.4rem;\r\n  padding: 4px 8px;\r\n}\r\n\r\nbutton:hover{\r\n  cursor: pointer;\r\n  background-color: var(--shade);\r\n}\r\n\r\n.clicked{\r\n  justify-self: stretch;\r\n  border-bottom: 2px solid var(--bubbles);\r\n}\r\n\r\n.switch-forecast,\r\n.forecast{\r\n  width: clamp(300px, 90vw, 1200px);\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.content > .forecast{\r\n  background-color: transparent;\r\n}\r\n\r\n.card{\r\n  flex: 120px 1 0;\r\n  min-height: 200px;\r\n  background-color: var(--shade);\r\n\r\n  color: var(--bubbles);\r\n  padding: 4px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.time{\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.main{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon{\r\n  width: 4rem;\r\n}\r\n\r\n.temperature{\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.description{\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.details{\r\n  font-size: 1rem;\r\n}\r\n\r\n.current-weather{\r\n  display: grid;\r\n  grid-template: 1fr auto / 1fr 2fr;\r\n}\r\n\r\n.current-weather > div{\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.current-weather > .main{\r\n  grid-column: 1 / 3;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;;;EAG3B,6BAA6B;EAC7B,2DAA2D;AAC7D;;AAEA;EACE,SAAS;EACT,UAAU;;EAEV,oCAAoC;EACpC,iDAAiD;;EAEjD,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;;EAElB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,uCAAuC;EACvC,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA,gBAAgB,yCAAyC;EACvD,qBAAqB;EACrB,UAAU,EAAE,YAAY;AAC1B;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;;EAEE,iCAAiC;;EAEjC,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,8BAA8B;;EAE9B,qBAAqB;EACrB,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[":root{\r\n  --caryola-blue: #1D71F2;\r\n  --button-blue: #1C9CF6;\r\n  --spiro-disco-ball: #1D71F2;\r\n  --bubbles: #E3F4FE;\r\n  --cornsilk: #FFFAE0;\r\n  --tangerine-yellow: #FFCD00;\r\n\r\n\r\n  --shade: rgba(255,255,255,.2);\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  background-color: var(--button-blue);\r\n  box-shadow: inset 0px 0px 20px 0px var(--bubbles);\r\n\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.content{\r\n  min-height: 100vh;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.content > div {\r\n  background-color: var(--shade);\r\n  border-radius: 4px;\r\n\r\n  padding: 8px;\r\n}\r\n\r\n.current-weather{\r\n  min-height: 100px;\r\n  min-width: 300px;\r\n}\r\n\r\ninput{\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid var(--bubbles);\r\n  font-size: 1.4rem;\r\n  color: var(--bubbles);\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n  caret-color: var(--bubbles);\r\n}\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: var(--bubbles);\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\nbutton{\r\n  background-color: transparent;\r\n  border: none;\r\n  color: var(--bubbles);\r\n  font-size: 1.4rem;\r\n  padding: 4px 8px;\r\n}\r\n\r\nbutton:hover{\r\n  cursor: pointer;\r\n  background-color: var(--shade);\r\n}\r\n\r\n.clicked{\r\n  justify-self: stretch;\r\n  border-bottom: 2px solid var(--bubbles);\r\n}\r\n\r\n.switch-forecast,\r\n.forecast{\r\n  width: clamp(300px, 90vw, 1200px);\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n}\r\n\r\n.content > .forecast{\r\n  background-color: transparent;\r\n}\r\n\r\n.card{\r\n  flex: 120px 1 0;\r\n  min-height: 200px;\r\n  background-color: var(--shade);\r\n\r\n  color: var(--bubbles);\r\n  padding: 4px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.time{\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.main{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon{\r\n  width: 4rem;\r\n}\r\n\r\n.temperature{\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.description{\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.details{\r\n  font-size: 1rem;\r\n}\r\n\r\n.current-weather{\r\n  display: grid;\r\n  grid-template: 1fr auto / 1fr 2fr;\r\n}\r\n\r\n.current-weather > div{\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.current-weather > .main{\r\n  grid-column: 1 / 3;\r\n}"],"sourceRoot":""}]);
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
    const weatherJson = await _weather_api__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData(location);
    const weather = _weather_api__WEBPACK_IMPORTED_MODULE_0__.processWeatherData(weatherJson);
    renderCurrentWeather(weather);

    // 5 days forecast
    const forecastJson = await _weather_api__WEBPACK_IMPORTED_MODULE_0__.fetchForecastData(location);
    const forecast = _weather_api__WEBPACK_IMPORTED_MODULE_0__.processForecastData(forecastJson);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgLS1jYXJ5b2xhLWJsdWU6ICMxRDcxRjI7XFxyXFxuICAtLWJ1dHRvbi1ibHVlOiAjMUM5Q0Y2O1xcclxcbiAgLS1zcGlyby1kaXNjby1iYWxsOiAjMUQ3MUYyO1xcclxcbiAgLS1idWJibGVzOiAjRTNGNEZFO1xcclxcbiAgLS1jb3Juc2lsazogI0ZGRkFFMDtcXHJcXG4gIC0tdGFuZ2VyaW5lLXllbGxvdzogI0ZGQ0QwMDtcXHJcXG5cXHJcXG5cXHJcXG4gIC0tc2hhZGU6IHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xcclxcbiAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMHB4IDBweCB2YXIoLS1idWJibGVzKTtcXHJcXG5cXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiBkaXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVye1xcclxcbiAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYnViYmxlcyk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3Vze1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNhcmV0LWNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcclxcbiAgY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2tlZHtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1idWJibGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC1mb3JlY2FzdCxcXHJcXG4uZm9yZWNhc3R7XFxyXFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDkwdncsIDEyMDBweCk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgPiAuZm9yZWNhc3R7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmR7XFxyXFxuICBmbGV4OiAxMjBweCAxIDA7XFxyXFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZXtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbntcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmV7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9ue1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxze1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVye1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciBhdXRvIC8gMWZyIDJmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtd2VhdGhlciA+IGRpdntcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyID4gLm1haW57XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjs7O0VBRzNCLDZCQUE2QjtFQUM3QiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTs7RUFFVixvQ0FBb0M7RUFDcEMsaURBQWlEOztFQUVqRCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjs7RUFFbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBLGdCQUFnQix5Q0FBeUM7RUFDdkQscUJBQXFCO0VBQ3JCLFVBQVUsRUFBRSxZQUFZO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLGlDQUFpQzs7RUFFakMsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw4QkFBOEI7O0VBRTlCLHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAtLWNhcnlvbGEtYmx1ZTogIzFENzFGMjtcXHJcXG4gIC0tYnV0dG9uLWJsdWU6ICMxQzlDRjY7XFxyXFxuICAtLXNwaXJvLWRpc2NvLWJhbGw6ICMxRDcxRjI7XFxyXFxuICAtLWJ1YmJsZXM6ICNFM0Y0RkU7XFxyXFxuICAtLWNvcm5zaWxrOiAjRkZGQUUwO1xcclxcbiAgLS10YW5nZXJpbmUteWVsbG93OiAjRkZDRDAwO1xcclxcblxcclxcblxcclxcbiAgLS1zaGFkZTogcmdiYSgyNTUsMjU1LDI1NSwuMik7XFxyXFxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMHB4IHZhcigtLWJ1YmJsZXMpO1xcclxcblxcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50e1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXJ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnViYmxlcyk7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idWJibGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXN7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY2FyZXQtY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxyXFxuICBjb2xvcjogdmFyKC0tYnViYmxlcyk7XFxyXFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2Vke1xcclxcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJ1YmJsZXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLWZvcmVjYXN0LFxcclxcbi5mb3JlY2FzdHtcXHJcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgOTB2dywgMTIwMHB4KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCA+IC5mb3JlY2FzdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHtcXHJcXG4gIGZsZXg6IDEyMHB4IDEgMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLWJ1YmJsZXMpO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aW1le1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWlue1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29ue1xcclxcbiAgd2lkdGg6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZXtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb257XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXJ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIGF1dG8gLyAxZnIgMmZyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyID4gZGl2e1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXIgPiAubWFpbntcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQVBJX0tFWSA9ICcyNDA4ZTBiZGIzM2MzMWM0MzA0MzYzYjQ3NTMzNjlhNic7XHJcblxyXG4vKipcclxuICogTWFrZSBhIGN1cnJlbnQgd2VhdGhlciByZXF1ZXN0IGZyb20gb3BlbldlYXRoZXJNYXBcclxuICogQHBhcmFtIHtTdHJpbmd9IGxvY2F0aW9uIENpdHkgbmFtZVxyXG4gKiBAcmV0dXJucyBjdXJyZW50IHdlYXRoZXIgaW4gSlNPTiBmb3JtYXRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIC8vIHJldHVybiBkYXRhIGluIEpTT04gZm9ybWF0XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogIE1ha2UgYSA1IGRheXMgZm9yZWNhc3QgcmVxdWVzdCBmcm9tIE9wZW5XZWF0aGVyTWFwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBjYW4gYmUgZWl0aGVyICdDaXR5JywgJ0NpdHksIENvdW50cnknLCAnQ291bnRyeSdcclxuICogQHJldHVybnMge0pTT059IGEgNSBkYXlzIC8gMyBob3VyIGZvcmVjYXN0IGluIEpTT04gZm9ybWF0IC0gcmVhZCBtb3JlIGF0IGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ZvcmVjYXN0NSNKU09OXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JlY2FzdERhdGEobG9jYXRpb24pIHtcclxuICAvLyBmZXRjaCBkYXRhXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7QVBJX0tFWX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIC8vIHJldHVybiBkYXRhIGluIEpTT04gZm9ybWF0XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIHRpbWVzdGFtcCBvYmplY3Qgd2l0aCB0aGUgYXR0cmlidXRlcyBhY3R1YWxseSBiZWluZyB1c2VkIGJ5IHRoZSBhcHBcclxuICogQHBhcmFtIHtPYmplY3R9IHRpbWVTdGFtcCBhIHRpbWVzdGFtcCBvYmplY3QgZnJvbSBPcGVuV2VhdGhlck1hcFxyXG4gKiBAcmV0dXJucyBhbiBvYmplY3QgY29udGlhbmluZyB0aGUgdXNlZnVsIGF0dHJpYnV0ZXNcclxuICovXHJcbmZ1bmN0aW9uIGZpbHRlclRpbWVzdGFtcCh0aW1lU3RhbXApIHtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0ZTogdGltZVN0YW1wLmR0LFxyXG4gICAgdGVtcGVyYXR1cmU6IHRpbWVTdGFtcC5tYWluLnRlbXAsXHJcbiAgICBodW1pZGl0eTogdGltZVN0YW1wLm1haW4uaHVtaWRpdHksXHJcbiAgICB3ZWF0aGVyOiB0aW1lU3RhbXAud2VhdGhlclswXS5tYWluLFxyXG4gICAgZGVzY3JpcHRpb246IHRpbWVTdGFtcC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgaWNvbklkOiB0aW1lU3RhbXAud2VhdGhlclswXS5pY29uLFxyXG4gICAgd2luZDogdGltZVN0YW1wLndpbmQuc3BlZWQsXHJcbiAgICBwcmVjaXB0aW9uOiB0aW1lU3RhbXAucG9wLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgb3JpZ2luYWwgdGltZXN0YW1wIE9XTSBmb3JlY2FzdCB1bml0c1xyXG4gKiBAcGFyYW0ge09iamVjdH0gdGltZVN0YW1wIGZpbHRlcmVkVGltZXN0YW1wXHJcbiAqIEByZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSByaWdodCB1bml0IHR5cGVcclxuICovXHJcbmZ1bmN0aW9uIGNvbnZlcnRVbml0c1RpbWVzdGFtcCh0aW1lU3RhbXApIHtcclxuICBjb25zdCBjb252ZXJ0ZWRUaW1lc3RhbXAgPSB0aW1lU3RhbXA7XHJcbiAgLy8gY29udmVydCB0aW1lIGZyb20gdW5peCB0byBEYXRlIG9iamVjdFxyXG4gIGNvbnZlcnRlZFRpbWVzdGFtcC5kYXRlID0gbmV3IERhdGUodGltZVN0YW1wLmRhdGUgKiAxMDAwKTtcclxuICAvLyBjb252ZXJ0IHRlbXBlcmF0dXJlIGZyb20ga2VsdmluIHRvIGNlbHNpdXNcclxuICBjb252ZXJ0ZWRUaW1lc3RhbXAudGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKHRpbWVTdGFtcC50ZW1wZXJhdHVyZSAtIDI3My4xNSk7XHJcbiAgLy8gY29udmVydCB3aW5kIGZyb20gbWV0ZXIvcyB0byBrbS9oXHJcbiAgY29udmVydGVkVGltZXN0YW1wLndpbmQgPSBNYXRoLnJvdW5kKHRpbWVTdGFtcC53aW5kICogMy42KTtcclxuICAvLyBjb252ZXJ0IHByZWNpcCBmcm9tIDAgdG8gMSBmbG9hdCB0byAwLTEwMCAlXHJcbiAgY29udmVydGVkVGltZXN0YW1wLnByZWNpcHRpb24gPSBNYXRoLnJvdW5kKHRpbWVTdGFtcC5wcmVjaXB0aW9uICogMTAwKTtcclxuXHJcbiAgcmV0dXJuIGNvbnZlcnRlZFRpbWVzdGFtcDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgZmlsdGVyIGFuZCBjb252ZXJ0VW5pdHMgb24gdGhlIHRpbWVTdGFtcFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGltZVN0YW1wIGEgdGltZXN0YW1wIG9iamVjdCBmcm9tIE9wZW5XZWF0aGVyTWFwXHJcbiAqIEByZXR1cm5zIGEgZm9ybWF0dGVkIHRpbWVzdGFtcFxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc1RpbWVzdGFtcCh0aW1lU3RhbXApIHtcclxuICByZXR1cm4gY29udmVydFVuaXRzVGltZXN0YW1wKGZpbHRlclRpbWVzdGFtcCh0aW1lU3RhbXApKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICBQcm9jZXNzIEpTT04gZm9ybWF0IDUgZGF5cyBmb3JlY2FzdFxyXG4gKiBAcGFyYW0ge0pTT059IGpzb24gNSBkYXlzIGZvcmVjYXN0IGluIEpTT04gZm9ybWF0XHJcbiAqIEByZXR1cm5zIENpdHkgbmFtZSBhbmQgbGlzdCBvZiB0aW1lU3RhbXBzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZvcmVjYXN0RGF0YShqc29uKSB7XHJcbiAgY29uc3QgdGltZVN0YW1wcyA9IGpzb24ubGlzdC5tYXAoKHRpbWVTdGFtcCkgPT4gcHJvY2Vzc1RpbWVzdGFtcCh0aW1lU3RhbXApKTtcclxuICByZXR1cm4geyBjaXR5OiBqc29uLmNpdHkubmFtZSwgdGltZVN0YW1wcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKGpzb24pIHtcclxuICByZXR1cm4gKHByb2Nlc3NUaW1lc3RhbXAoanNvbikpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGFwaSBmcm9tICcuL3dlYXRoZXItYXBpJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxubGV0IGRhaWx5Rm9yZWNhc3QgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXIgYWxsIHRoZSBkYXRhIGluIGEgdGltZVN0YW1wIHRvIGEgY2FyZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGltZVN0YW1wXHJcbiAqIEBwYXJhbSB7Tm9kZX0gY2FyZFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlQ2FyZERhdGEodGltZVN0YW1wLCBjYXJkKSB7XHJcbiAgY29uc3QgVElNRSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcclxuICBpZiAoVElNRSkge1xyXG4gICAgVElNRS50ZXh0Q29udGVudCA9IHRpbWVTdGFtcC5kYXRlLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgSUNPTiA9IGNhcmQucXVlcnlTZWxlY3RvcignLmljb24nKTtcclxuICBJQ09OLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt0aW1lU3RhbXAuaWNvbklkfUAyeC5wbmdgO1xyXG5cclxuICBjb25zdCBURU1QID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuICBURU1QLnRleHRDb250ZW50ID0gYCR7dGltZVN0YW1wLnRlbXBlcmF0dXJlfUPCsGA7XHJcblxyXG4gIGNvbnN0IERFU0NSSVBUSU9OID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuICBERVNDUklQVElPTi50ZXh0Q29udGVudCA9IHRpbWVTdGFtcC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3QgSFVNSURJVFkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xyXG4gIEhVTUlESVRZLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3RpbWVTdGFtcC5odW1pZGl0eX0lYDtcclxuXHJcbiAgY29uc3QgV0lORCA9IGNhcmQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcclxuICBXSU5ELnRleHRDb250ZW50ID0gYFdpbmQ6ICR7dGltZVN0YW1wLndpbmR9a20vaGA7XHJcblxyXG4gIGNvbnN0IFBSRUNJUCA9IGNhcmQucXVlcnlTZWxlY3RvcignLnByZWNpcCcpO1xyXG4gIGlmIChQUkVDSVApIHtcclxuICAgIFBSRUNJUC50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgcmFpbjogJHt0aW1lU3RhbXAucHJlY2lwdGlvbn0lYDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRXZWF0aGVyKHRpbWVTdGFtcCkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcclxuICB1cGRhdGVDYXJkRGF0YSh0aW1lU3RhbXAsIGN1cnJlbnRXZWF0aGVyQ2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbnMoYnV0dG9uKSB7XHJcbiAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGlja2VkJyk7XHJcbiAgaWYgKGNsaWNrZWRCdXR0b24pIHsgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7IH1cclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVyIHNpbmdsZSBkYXkgZm9yZWNhc3RcclxuICogQHBhcmFtIHtBcnJheX0gdGltZVN0YW1wcyBhbiBhcnJheSBvZiA4IHRpbWVzdGFtcHNcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlckRhaWx5Rm9yZWNhc3QodGltZVN0YW1wcykge1xyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcclxuICB0aW1lU3RhbXBzLmZvckVhY2goKHRpbWVTdGFtcCwgaW5kZXgpID0+IHtcclxuICAgIHVwZGF0ZUNhcmREYXRhKHRpbWVTdGFtcCwgY2FyZHNbaW5kZXhdKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGRpdmlkZSB0aW1lc3RhbXBzIGxpc3QgYnkgZGF5c1xyXG4gKiBkYXkxIC0gdGhlIG5leHQgMjQgaG91cnMsIGRheTIgLSB0b21vcnJvdyBldGMuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHRpbWVTdGFtcHMgbGlzdCBvZiB0aW1lc3RhbXBzXHJcbiAqIEByZXR1cm5zIGFuIE9iamVjdCB3aXRoIGEgbGlzdCBvZiB0aW1lc3RhbXBzIGZvciBlYWNoIGRheVxyXG4gKi9cclxuZnVuY3Rpb24gZ3JvdXBUaW1lU3RhbXBzQnlEYXlzKHRpbWVTdGFtcHMpIHtcclxuICBjb25zdCBkYXlzTGlzdCA9IFtdO1xyXG4gIHRpbWVTdGFtcHMuZm9yRWFjaCgodGltZVN0YW1wKSA9PiB7XHJcbiAgICBjb25zdCBkYXkgPSB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKTtcclxuICAgIGlmICghZGF5c0xpc3QuaW5jbHVkZXMoZGF5KSkge1xyXG4gICAgICBkYXlzTGlzdC5wdXNoKGRheSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRheTEgPSB0aW1lU3RhbXBzLnNsaWNlKDAsIDgpO1xyXG4gIGNvbnN0IGRheTIgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbMV0pO1xyXG4gIGNvbnN0IGRheTMgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbMl0pO1xyXG4gIGNvbnN0IGRheTQgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbM10pO1xyXG4gIGNvbnN0IGRheTUgPSB0aW1lU3RhbXBzLmZpbHRlcigodGltZVN0YW1wKSA9PiB0aW1lU3RhbXAuZGF0ZS5nZXREYXkoKSA9PT0gZGF5c0xpc3RbNF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF5MSwgZGF5MiwgZGF5MywgZGF5NCwgZGF5NSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVJbnB1dFBsYWNlaG9sZGVyKGNpdHkpIHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBjaXR5O1xyXG4gIGlucHV0LnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnNUZXh0KCkge1xyXG4gIGNvbnN0IHdlZWtkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1c2VkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkzJykudGV4dENvbnRlbnQgPSB3ZWVrZGF5c1tkYWlseUZvcmVjYXN0LmRheTNbMF0uZGF0ZS5nZXREYXkoKV07XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTQnKS50ZXh0Q29udGVudCA9IHdlZWtkYXlzW2RhaWx5Rm9yZWNhc3QuZGF5NFswXS5kYXRlLmdldERheSgpXTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5NScpLnRleHRDb250ZW50ID0gd2Vla2RheXNbZGFpbHlGb3JlY2FzdC5kYXk1WzBdLmRhdGUuZ2V0RGF5KCldO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2gobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc29sZS5sb2coYHNlYXJjaGluZzogJHtsb2NhdGlvbn1gKTtcclxuICAgIC8vIGN1cnJlbnQgd2VhdGhlclxyXG4gICAgY29uc3Qgd2VhdGhlckpzb24gPSBhd2FpdCBhcGkuZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbik7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gYXBpLnByb2Nlc3NXZWF0aGVyRGF0YSh3ZWF0aGVySnNvbik7XHJcbiAgICByZW5kZXJDdXJyZW50V2VhdGhlcih3ZWF0aGVyKTtcclxuXHJcbiAgICAvLyA1IGRheXMgZm9yZWNhc3RcclxuICAgIGNvbnN0IGZvcmVjYXN0SnNvbiA9IGF3YWl0IGFwaS5mZXRjaEZvcmVjYXN0RGF0YShsb2NhdGlvbik7XHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IGFwaS5wcm9jZXNzRm9yZWNhc3REYXRhKGZvcmVjYXN0SnNvbik7XHJcbiAgICBkYWlseUZvcmVjYXN0ID0gZ3JvdXBUaW1lU3RhbXBzQnlEYXlzKGZvcmVjYXN0LnRpbWVTdGFtcHMpO1xyXG5cclxuICAgIC8vIHJlbmRlciB0b2RheSBmb3JlY2FzdFxyXG4gICAgcmVuZGVyRGFpbHlGb3JlY2FzdChkYWlseUZvcmVjYXN0LmRheTEpO1xyXG4gICAgdG9nZ2xlQnV0dG9ucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MScpKTtcclxuICAgIC8vIHVwZGF0ZSBpbnB1dCBhbmQgYnV0dG9uc1xyXG4gICAgdXBkYXRlSW5wdXRQbGFjZWhvbGRlcihmb3JlY2FzdC5jaXR5KTtcclxuICAgIHVwZGF0ZUJ1dHRvbnNUZXh0KCk7XHJcbiAgICAvL1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIG9uIGxvYWQgdGhlIHBhZ2Ugc2hvdyB0aGUgZm9yZWNhc3QgZm9yIGplcnVzYWxlbVxyXG5jb25zdCBpc0Vycm9yID0gIXNlYXJjaCgnSmVydXNhbGVtJyk7XHJcbmlmIChpc0Vycm9yKSB7IGNvbnNvbGUubG9nKCdzZWFyY2ggZXJyb3InKTsgfVxyXG5cclxuLy8gc3dpdGNoIGZvcmVjYXN0IGJ1dHRvbnMgZXZlbnQgbGlzdGVuZXJzXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpdGNoLWZvcmVjYXN0ID4gYnV0dG9uJyk7XHJcbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy8gcmVuZGVyIGRhdGFcclxuICBjb25zdCBkYXkgPSBidXR0b24uY2xhc3NMaXN0WzBdO1xyXG4gIHJlbmRlckRhaWx5Rm9yZWNhc3QoZGFpbHlGb3JlY2FzdFtkYXldKTtcclxuXHJcbiAgdG9nZ2xlQnV0dG9ucyhidXR0b24pO1xyXG59KSk7XHJcblxyXG4vLyBzZWFyY2ggZXZlbnQgbGlzdGVuZXJcclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCA+IGJ1dHRvbicpO1xyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoID4gaW5wdXQnKTtcclxuICBzZWFyY2goaW5wdXQudmFsdWUpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9