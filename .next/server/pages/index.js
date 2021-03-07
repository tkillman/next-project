module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./envConfig/routes.js":
/*!*****************************!*\
  !*** ./envConfig/routes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @typedef { import("next-routes").Registry } NextRoutes
 */
const nextRoutes = __webpack_require__(/*! next-routes */ "next-routes");
/**
 * @type { NextRoutes }
 */


(module.exports = nextRoutes()). // 페이지명, 패턴
add({
  name: 'index',
  page: '/index',
  pattern: '/'
}).add({
  name: 'login',
  page: '/login',
  pattern: '/login'
}).add({
  name: 'loginRefurl',
  page: '/login',
  pattern: '/login/:refurl'
}).add({
  name: '_errorRefVal',
  page: '/_error',
  pattern: '/_error/:statusCode/:errName?/:errMsg?/:errStack?'
}).add({
  name: '/adm2010',
  page: '/adm2010',
  pattern: '/adm2010'
}).add({
  name: '/adm2020',
  page: '/adm2020',
  pattern: '/adm2020'
}).add({
  name: '/adm2030',
  page: '/adm2030',
  pattern: '/adm2030'
}).add({
  name: '/adm2040',
  page: '/adm2040',
  pattern: '/adm2040'
}).add({
  name: '/adm2210',
  page: '/adm2210',
  pattern: '/adm2210'
}).add({
  name: '/adm6010',
  page: '/adm6010',
  pattern: '/adm6010'
}).add({
  name: '/adm6020',
  page: '/adm6020',
  pattern: '/adm6020'
}).add({
  name: '/adm6310',
  page: '/adm6310',
  pattern: '/adm6310'
}).add({
  name: '/adm6320',
  page: '/adm6320',
  pattern: '/adm6320'
}).add({
  name: '/adm6330',
  page: '/adm6330',
  pattern: '/adm6330'
}).add({
  name: '/adm6340',
  page: '/adm6340',
  pattern: '/adm6340'
}).add({
  name: '/adm6350',
  page: '/adm6350',
  pattern: '/adm6350'
}).add({
  name: '/adm6360',
  page: '/adm6360',
  pattern: '/adm6360'
}).add({
  name: '/adm7010',
  page: '/adm7010',
  pattern: '/adm7010'
}).add({
  name: '/adm7020',
  page: '/adm7020',
  pattern: '/adm7020'
}).add({
  name: '/adm7030',
  page: '/adm7030',
  pattern: '/adm7030'
}).add({
  name: '/adm7040',
  page: '/adm7040',
  pattern: '/adm7040'
}).add({
  name: '/adm7060',
  page: '/adm7060',
  pattern: '/adm7060'
}).add({
  name: '/adm7070',
  page: '/adm7070',
  pattern: '/adm7070'
}).add({
  name: '/adm9010',
  page: '/adm9010',
  pattern: '/adm9010'
}).add({
  name: '/adm9020',
  page: '/adm9020',
  pattern: '/adm9020'
});

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_routeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routeLink */ "./src/utils/routeLink.ts");




/** props */

const index = ({
  router
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const defaultUrl = '/login';
    router.push(defaultUrl);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_routeLink__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(index));

/***/ }),

/***/ "./src/utils/routeLink.ts":
/*!********************************!*\
  !*** ./src/utils/routeLink.ts ***!
  \********************************/
/*! exports provided: Link, Router, withRouter, NextRouter, SingletonRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NextRouter", function() { return next_router__WEBPACK_IMPORTED_MODULE_0__["NextRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingletonRouter", function() { return next_router__WEBPACK_IMPORTED_MODULE_0__["SingletonRouter"]; });

/* harmony import */ var _envConfig_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../envConfig/routes */ "./envConfig/routes.js");
/* harmony import */ var _envConfig_routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_envConfig_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _envConfig_routes__WEBPACK_IMPORTED_MODULE_1__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _envConfig_routes__WEBPACK_IMPORTED_MODULE_1__["Router"]; });


 // @ts-ignore



/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW52Q29uZmlnL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9yb3V0ZUxpbmsudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibmV4dFJvdXRlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkIiwibmFtZSIsInBhZ2UiLCJwYXR0ZXJuIiwiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VFZmZlY3QiLCJkZWZhdWx0VXJsIiwicHVzaCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEw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RSxrSUFBVSxDQUFDTCxLQUFELENBQXpCLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOzs7Ozs7Ozs7Ozs7O0FDSEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCIvKipcclxuICogQHR5cGVkZWYgeyBpbXBvcnQoXCJuZXh0LXJvdXRlc1wiKS5SZWdpc3RyeSB9IE5leHRSb3V0ZXNcclxuICovXHJcbmNvbnN0IG5leHRSb3V0ZXMgPSByZXF1aXJlKCduZXh0LXJvdXRlcycpO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHsgTmV4dFJvdXRlcyB9XHJcbiAqL1xyXG4obW9kdWxlLmV4cG9ydHMgPSBuZXh0Um91dGVzKCkpXHJcblx0Ly8g7Y6Y7J207KeA66qFLCDtjKjthLRcclxuXHQuYWRkKHsgbmFtZTogJ2luZGV4JywgcGFnZTogJy9pbmRleCcsIHBhdHRlcm46ICcvJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnbG9naW4nLCBwYWdlOiAnL2xvZ2luJywgcGF0dGVybjogJy9sb2dpbicgfSlcclxuXHQuYWRkKHsgbmFtZTogJ2xvZ2luUmVmdXJsJywgcGFnZTogJy9sb2dpbicsIHBhdHRlcm46ICcvbG9naW4vOnJlZnVybCcgfSlcclxuXHQuYWRkKHtcclxuXHRcdG5hbWU6ICdfZXJyb3JSZWZWYWwnLFxyXG5cdFx0cGFnZTogJy9fZXJyb3InLFxyXG5cdFx0cGF0dGVybjogJy9fZXJyb3IvOnN0YXR1c0NvZGUvOmVyck5hbWU/LzplcnJNc2c/LzplcnJTdGFjaz8nXHJcblx0fSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMDEwJywgcGFnZTogJy9hZG0yMDEwJywgcGF0dGVybjogJy9hZG0yMDEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwMjAnLCBwYWdlOiAnL2FkbTIwMjAnLCBwYXR0ZXJuOiAnL2FkbTIwMjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjAzMCcsIHBhZ2U6ICcvYWRtMjAzMCcsIHBhdHRlcm46ICcvYWRtMjAzMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMDQwJywgcGFnZTogJy9hZG0yMDQwJywgcGF0dGVybjogJy9hZG0yMDQwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIyMTAnLCBwYWdlOiAnL2FkbTIyMTAnLCBwYXR0ZXJuOiAnL2FkbTIyMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjAxMCcsIHBhZ2U6ICcvYWRtNjAxMCcsIHBhdHRlcm46ICcvYWRtNjAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MDIwJywgcGFnZTogJy9hZG02MDIwJywgcGF0dGVybjogJy9hZG02MDIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzMTAnLCBwYWdlOiAnL2FkbTYzMTAnLCBwYXR0ZXJuOiAnL2FkbTYzMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjMyMCcsIHBhZ2U6ICcvYWRtNjMyMCcsIHBhdHRlcm46ICcvYWRtNjMyMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzMwJywgcGFnZTogJy9hZG02MzMwJywgcGF0dGVybjogJy9hZG02MzMwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzNDAnLCBwYWdlOiAnL2FkbTYzNDAnLCBwYXR0ZXJuOiAnL2FkbTYzNDAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjM1MCcsIHBhZ2U6ICcvYWRtNjM1MCcsIHBhdHRlcm46ICcvYWRtNjM1MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzYwJywgcGFnZTogJy9hZG02MzYwJywgcGF0dGVybjogJy9hZG02MzYwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwMTAnLCBwYWdlOiAnL2FkbTcwMTAnLCBwYXR0ZXJuOiAnL2FkbTcwMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzAyMCcsIHBhZ2U6ICcvYWRtNzAyMCcsIHBhdHRlcm46ICcvYWRtNzAyMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDMwJywgcGFnZTogJy9hZG03MDMwJywgcGF0dGVybjogJy9hZG03MDMwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwNDAnLCBwYWdlOiAnL2FkbTcwNDAnLCBwYXR0ZXJuOiAnL2FkbTcwNDAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzA2MCcsIHBhZ2U6ICcvYWRtNzA2MCcsIHBhdHRlcm46ICcvYWRtNzA2MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDcwJywgcGFnZTogJy9hZG03MDcwJywgcGF0dGVybjogJy9hZG03MDcwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTkwMTAnLCBwYWdlOiAnL2FkbTkwMTAnLCBwYXR0ZXJuOiAnL2FkbTkwMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtOTAyMCcsIHBhZ2U6ICcvYWRtOTAyMCcsIHBhdHRlcm46ICcvYWRtOTAyMCcgfSk7XHJcblxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9IGZyb20gJ34vdXRpbHMvcm91dGVMaW5rJztcclxuXHJcbi8qKiBwcm9wcyAqL1xyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuXHRyb3V0ZXI6IFNpbmdsZXRvblJvdXRlcjtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3JvdXRlcn0pID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFVybCA9ICcvbG9naW4nO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChkZWZhdWx0VXJsKTtcclxuICAgIH0pICAgIFxyXG5cclxuICAgIHJldHVybiA8PjwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihpbmRleCk7XHJcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIsIE5leHRSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSAnLi4vLi4vZW52Q29uZmlnL3JvdXRlcyc7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCB7IExpbmssIFJvdXRlciwgd2l0aFJvdXRlciwgTmV4dFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9