/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IpaSoundElement: () => (/* reexport safe */ _sound_js__WEBPACK_IMPORTED_MODULE_0__.IpaSoundElement)\n/* harmony export */ });\n/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ \"./src/components/sound.js\");\n\r\n\n\n//# sourceURL=webpack://ipa-tables/./src/components/index.js?");

/***/ }),

/***/ "./src/components/sound.js":
/*!*********************************!*\
  !*** ./src/components/sound.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IpaSoundElement: () => (/* binding */ IpaSoundElement)\n/* harmony export */ });\nclass IpaSoundElement extends HTMLDivElement {\r\n  /**\r\n   * @note ***don't*** use ctor to get attributes, it's yet too early to\r\n   *       at the init time.\r\n   */\r\n  constructor() {\r\n    super();\r\n    // const shadowRoot = this.attachShadow({ mode: \"open\" });\r\n    // shadowRoot.appendChild()\r\n  }\r\n\r\n  connectedCallback() {\r\n    // Why can I see the innerHTML, if this thing says I couldn't\r\n    // https://javascript.info/custom-elements\r\n    // console.log(this.innerHTML);\r\n\r\n    const {\r\n      wiki = \"\",\r\n      sound = \"\",\r\n      shaded,\r\n    } = Object.fromEntries(\r\n      Array.from(this.attributes).map((item) => [item.name, item.value])\r\n    );\r\n\r\n    if (shaded !== undefined) {\r\n      this.setAttribute(\"class\", \"shaded\");\r\n      return;\r\n    } else {\r\n      this.setAttribute(\"class\", \"dropdown\");\r\n    }\r\n    if (\r\n      this.innerHTML.trim() === \"\" ||\r\n      this.innerHTML === null ||\r\n      wiki === \"\" ||\r\n      sound === \"\"\r\n    ) {\r\n      return;\r\n    }\r\n    const offset = this.calculateDropdownOffsetFromRight();\r\n    const dropdownContent = createDropdownWithTranslation(offset);\r\n    // create an anchor with the provided link (the `wiki` attr)\r\n    const wikipageLink = createWikiLinkElement(wiki);\r\n    const audioElement = createAudioElement(sound);\r\n    // assemble\r\n    dropdownContent.appendChild(wikipageLink);\r\n    dropdownContent.appendChild(audioElement);\r\n    // attach the dropdown element\r\n    this.appendChild(dropdownContent);\r\n  }\r\n\r\n  /**\r\n   * Calculates the offset of a dropdown element from the right side\r\n   * of the body.\r\n   * @returns {number} The offset of the dropdown element from the\r\n   * right side of the body.\r\n   */\r\n  calculateDropdownOffsetFromRight() {\r\n    const bodyRect = document.body.getBoundingClientRect();\r\n    const elemRect = this.getBoundingClientRect();\r\n    const offset = bodyRect.right - elemRect.right;\r\n\r\n    const halfWidthOfDropdown = 300 / 2; // hardcoded approx\r\n    return offset - halfWidthOfDropdown;\r\n  }\r\n}\r\n\r\n/**\r\n * Creates an audio element with the specified source.\r\n * @param {string} source The URL of the audio file.\r\n * @returns {HTMLElement} The created audio element.\r\n */\r\nfunction createAudioElement(source) {\r\n  const audioElement = document.createElement(\"audio\");\r\n  // show audioplayer controls\r\n  audioElement.setAttribute(\"controls\", \"\");\r\n  const soundSource = document.createElement(\"source\");\r\n  // attach the source of the sound sample\r\n  soundSource.setAttribute(\"src\", source);\r\n  soundSource.setAttribute(\"type\", \"audio/ogg\");\r\n  audioElement.appendChild(soundSource);\r\n  audioElement.appendChild(\r\n    document.createTextNode(\"Your browser does not support the audio element.\")\r\n  );\r\n  return audioElement;\r\n}\r\n\r\n/**\r\n * Creates a dropdown element with a dynamic translation based on the\r\n *  offset parameter.\r\n * @param {number} offset The offset of the dropdown element from\r\n * the right side of the body.\r\n * @returns {HTMLDivElement} The created dropdown element.\r\n */\r\nfunction createDropdownWithTranslation(offset) {\r\n  const dropdown = document.createElement(\"div\");\r\n  // dynamic translation, depending on the position on the screen\r\n  // (the distance to the window edge)\r\n  dropdown.setAttribute(\"class\", \"dropdown-content\");\r\n  let translate = \"-50% -0.1rem\";\r\n  if (offset < 0) {\r\n    offset = Math.floor(offset);\r\n    translate = `calc(-50% + ${offset}px) -0.1rem`;\r\n  }\r\n  dropdown.style.translate = translate;\r\n  return dropdown;\r\n}\r\n\r\n/**\r\n * Creates a hyperlink element for a Wikipedia page with the provided\r\n * link.\r\n * @param {string} link The URL of the Wikipedia page.\r\n * @returns {HTMLAnchorElement} The created hyperlink element.\r\n */\r\nfunction createWikiLinkElement(link) {\r\n  const wikipageLink = document.createElement(\"a\");\r\n  wikipageLink.href = link;\r\n  wikipageLink.innerHTML = \"Wiki\";\r\n  wikipageLink.setAttribute(\"class\", \"wikipage\");\r\n  return wikipageLink;\r\n}\r\n\n\n//# sourceURL=webpack://ipa-tables/./src/components/sound.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\r\n\r\ncustomElements.define(\"ipa-sound\", _components_index_js__WEBPACK_IMPORTED_MODULE_0__.IpaSoundElement, { extends: \"div\" });\r\n\n\n//# sourceURL=webpack://ipa-tables/./src/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;