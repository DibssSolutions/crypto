/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nymaps.ready(init);\n\nfunction init() {\n  var myMap = new ymaps.Map('map', {\n    center: [55.755773, 37.617761],\n    zoom: 9\n  }, {\n    searchControlProvider: 'yandex#search'\n  }),\n      myPlacemark = new ymaps.Placemark([55.755773, 37.617761]);\n\n  myMap.geoObjects.add(myPlacemark);\n\n  myPlacemark.events.add('mouseenter', function (e) {\n    // Ссылку на объект, вызвавший событие,\n    // можно получить из поля 'target'.\n    e.get('target').options.set('preset', 'islands#greenIcon');\n  }).add('mouseleave', function (e) {\n    e.get('target').options.unset('preset');\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsieW1hcHMucmVhZHkoaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICAgIGNlbnRlcjogWzU1Ljc1NTc3MywgMzcuNjE3NzYxXSxcbiAgICAgIHpvb206IDlcbiAgICB9LCB7XG4gICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xuICAgIH0pLFxuICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU1NzczLCAzNy42MTc3NjFdKTtcblxuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG5cbiAgbXlQbGFjZW1hcmsuZXZlbnRzXG4gICAgLmFkZCgnbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vINCh0YHRi9C70LrRgyDQvdCwINC+0LHRitC10LrRgiwg0LLRi9C30LLQsNCy0YjQuNC5INGB0L7QsdGL0YLQuNC1LFxuICAgICAgLy8g0LzQvtC20L3QviDQv9C+0LvRg9GH0LjRgtGMINC40Lcg0L/QvtC70Y8gJ3RhcmdldCcuXG4gICAgICBlLmdldCgndGFyZ2V0Jykub3B0aW9ucy5zZXQoJ3ByZXNldCcsICdpc2xhbmRzI2dyZWVuSWNvbicpO1xuICAgIH0pXG4gICAgLmFkZCgnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuZ2V0KCd0YXJnZXQnKS5vcHRpb25zLnVuc2V0KCdwcmVzZXQnKTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFEQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);