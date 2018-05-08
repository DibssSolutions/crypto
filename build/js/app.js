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
eval("\n\nymaps.ready(init);\n\nfunction init() {\n  var myMap = new ymaps.Map('map', {\n    center: [55.755773, 37.617761],\n    zoom: 9\n  }, {\n    searchControlProvider: 'yandex#search'\n  }),\n      myPlacemark = new ymaps.Placemark([55.755773, 37.617761]);\n\n  myMap.geoObjects.add(myPlacemark);\n\n  myPlacemark.events.add('mouseenter', function (e) {\n    // Ссылку на объект, вызвавший событие,\n    // можно получить из поля 'target'.\n    e.get('target').options.set('preset', 'islands#greenIcon');\n  }).add('mouseleave', function (e) {\n    e.get('target').options.unset('preset');\n  });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsieW1hcHMucmVhZHkoaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgICAgY2VudGVyOiBbNTUuNzU1NzczLCAzNy42MTc3NjFdLFxyXG4gICAgICB6b29tOiA5XHJcbiAgICB9LCB7XHJcbiAgICAgIHNlYXJjaENvbnRyb2xQcm92aWRlcjogJ3lhbmRleCNzZWFyY2gnXHJcbiAgICB9KSxcclxuICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU1NzczLCAzNy42MTc3NjFdKTtcclxuXHJcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cclxuICBteVBsYWNlbWFyay5ldmVudHNcclxuICAgIC5hZGQoJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8vINCh0YHRi9C70LrRgyDQvdCwINC+0LHRitC10LrRgiwg0LLRi9C30LLQsNCy0YjQuNC5INGB0L7QsdGL0YLQuNC1LFxyXG4gICAgICAvLyDQvNC+0LbQvdC+INC/0L7Qu9GD0YfQuNGC0Ywg0LjQtyDQv9C+0LvRjyAndGFyZ2V0Jy5cclxuICAgICAgZS5nZXQoJ3RhcmdldCcpLm9wdGlvbnMuc2V0KCdwcmVzZXQnLCAnaXNsYW5kcyNncmVlbkljb24nKTtcclxuICAgIH0pXHJcbiAgICAuYWRkKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLmdldCgndGFyZ2V0Jykub3B0aW9ucy51bnNldCgncHJlc2V0Jyk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBREE7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);