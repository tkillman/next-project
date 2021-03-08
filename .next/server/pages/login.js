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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.tsx");
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

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routeLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/routeLink */ "./src/utils/routeLink.ts");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\next-project\\src\\pages\\login.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/** props */

const Login = ({
  router
}) => {
  console.log(router);
  const [cookies, setCookie, removeCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__["useCookies"])(['donggyu']);

  const userId = () => cookies && cookies.userId ? cookies.userId : '';

  const isSaveId = () => cookies && cookies.isSaveId === 'true' ? true : false;

  let refUrl = '/';

  if (router && router.query.refurl) {
    const {
      refurl
    } = router.query;
  } // formik 설정


  const formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      userId: userId(),
      userPass: '',
      errorMsg: '',
      isSaveId: isSaveId()
    },
    onSubmit: async values => {
      console.log('aa', router.query.refurl);
      await console.log('bb');
    }
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: formik.handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "mb-2",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
    addonType: "prepend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ti-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    id: "userId",
    name: "userId",
    value: formik.values.userId,
    onChange: e => {
      formik.handleChange(e);
      formik.setFieldValue('errorMsg', '');
    },
    placeholder: "ID",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Log In"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_routeLink__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Login));

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW52Q29uZmlnL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9yb3V0ZUxpbmsudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIl0sIm5hbWVzIjpbIm5leHRSb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZCIsIm5hbWUiLCJwYWdlIiwicGF0dGVybiIsIkxvZ2luIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyZW1vdmVDb29raWUiLCJ1c2VDb29raWVzIiwidXNlcklkIiwiaXNTYXZlSWQiLCJyZWZVcmwiLCJxdWVyeSIsInJlZnVybCIsImZvcm1payIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJ1c2VyUGFzcyIsImVycm9yTXNnIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwiaGFuZGxlQ2hhbmdlIiwic2V0RmllbGRWYWx1ZSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Ozs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvbG9naW4udHN4XCIpO1xuIiwiLyoqXHJcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KFwibmV4dC1yb3V0ZXNcIikuUmVnaXN0cnkgfSBOZXh0Um91dGVzXHJcbiAqL1xyXG5jb25zdCBuZXh0Um91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7IE5leHRSb3V0ZXMgfVxyXG4gKi9cclxuKG1vZHVsZS5leHBvcnRzID0gbmV4dFJvdXRlcygpKVxyXG5cdC8vIO2OmOydtOyngOuqhSwg7Yyo7YS0XHJcblx0LmFkZCh7IG5hbWU6ICdpbmRleCcsIHBhZ2U6ICcvaW5kZXgnLCBwYXR0ZXJuOiAnLycgfSlcclxuXHQuYWRkKHsgbmFtZTogJ2xvZ2luJywgcGFnZTogJy9sb2dpbicsIHBhdHRlcm46ICcvbG9naW4nIH0pXHJcblx0LmFkZCh7IG5hbWU6ICdsb2dpblJlZnVybCcsIHBhZ2U6ICcvbG9naW4nLCBwYXR0ZXJuOiAnL2xvZ2luLzpyZWZ1cmwnIH0pXHJcblx0LmFkZCh7XHJcblx0XHRuYW1lOiAnX2Vycm9yUmVmVmFsJyxcclxuXHRcdHBhZ2U6ICcvX2Vycm9yJyxcclxuXHRcdHBhdHRlcm46ICcvX2Vycm9yLzpzdGF0dXNDb2RlLzplcnJOYW1lPy86ZXJyTXNnPy86ZXJyU3RhY2s/J1xyXG5cdH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjAxMCcsIHBhZ2U6ICcvYWRtMjAxMCcsIHBhdHRlcm46ICcvYWRtMjAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMDIwJywgcGFnZTogJy9hZG0yMDIwJywgcGF0dGVybjogJy9hZG0yMDIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwMzAnLCBwYWdlOiAnL2FkbTIwMzAnLCBwYXR0ZXJuOiAnL2FkbTIwMzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjA0MCcsIHBhZ2U6ICcvYWRtMjA0MCcsIHBhdHRlcm46ICcvYWRtMjA0MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMjEwJywgcGFnZTogJy9hZG0yMjEwJywgcGF0dGVybjogJy9hZG0yMjEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYwMTAnLCBwYWdlOiAnL2FkbTYwMTAnLCBwYXR0ZXJuOiAnL2FkbTYwMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjAyMCcsIHBhZ2U6ICcvYWRtNjAyMCcsIHBhdHRlcm46ICcvYWRtNjAyMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzEwJywgcGFnZTogJy9hZG02MzEwJywgcGF0dGVybjogJy9hZG02MzEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzMjAnLCBwYWdlOiAnL2FkbTYzMjAnLCBwYXR0ZXJuOiAnL2FkbTYzMjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjMzMCcsIHBhZ2U6ICcvYWRtNjMzMCcsIHBhdHRlcm46ICcvYWRtNjMzMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzQwJywgcGFnZTogJy9hZG02MzQwJywgcGF0dGVybjogJy9hZG02MzQwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzNTAnLCBwYWdlOiAnL2FkbTYzNTAnLCBwYXR0ZXJuOiAnL2FkbTYzNTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjM2MCcsIHBhZ2U6ICcvYWRtNjM2MCcsIHBhdHRlcm46ICcvYWRtNjM2MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDEwJywgcGFnZTogJy9hZG03MDEwJywgcGF0dGVybjogJy9hZG03MDEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwMjAnLCBwYWdlOiAnL2FkbTcwMjAnLCBwYXR0ZXJuOiAnL2FkbTcwMjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzAzMCcsIHBhZ2U6ICcvYWRtNzAzMCcsIHBhdHRlcm46ICcvYWRtNzAzMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDQwJywgcGFnZTogJy9hZG03MDQwJywgcGF0dGVybjogJy9hZG03MDQwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwNjAnLCBwYWdlOiAnL2FkbTcwNjAnLCBwYXR0ZXJuOiAnL2FkbTcwNjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzA3MCcsIHBhZ2U6ICcvYWRtNzA3MCcsIHBhdHRlcm46ICcvYWRtNzA3MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG05MDEwJywgcGFnZTogJy9hZG05MDEwJywgcGF0dGVybjogJy9hZG05MDEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTkwMjAnLCBwYWdlOiAnL2FkbTkwMjAnLCBwYXR0ZXJuOiAnL2FkbTkwMjAnIH0pO1xyXG5cclxuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH0gZnJvbSAnfi91dGlscy9yb3V0ZUxpbmsnO1xyXG5pbXBvcnQge1xyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgRm9ybSxcclxuICAgIExhYmVsLFxyXG4gICAgSW5wdXRHcm91cCxcclxuICAgIElucHV0R3JvdXBBZGRvbixcclxuICAgIElucHV0R3JvdXBUZXh0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDdXN0b21JbnB1dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbi8qKiBwcm9wcyAqL1xyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHJvdXRlcjogU2luZ2xldG9uUm91dGVyO1xyXG59XHJcblxyXG5jb25zdCBMb2dpbjogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZSwgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWydkb25nZ3l1J10pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJJZCA9ICgpID0+IChjb29raWVzICYmIGNvb2tpZXMudXNlcklkID8gY29va2llcy51c2VySWQgOiAnJyk7XHJcbiAgICBjb25zdCBpc1NhdmVJZCA9ICgpID0+IChjb29raWVzICYmIGNvb2tpZXMuaXNTYXZlSWQgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSk7XHJcblxyXG4gICAgbGV0IHJlZlVybCA9ICcvJztcclxuXHJcblx0aWYgKHJvdXRlciAmJiByb3V0ZXIucXVlcnkucmVmdXJsKSB7XHJcblx0XHRjb25zdCB7IHJlZnVybH0gPSByb3V0ZXIucXVlcnk7XHJcblx0fVxyXG5cclxuICAgIC8vIGZvcm1payDshKTsoJVcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCgpLFxyXG4gICAgICAgICAgICB1c2VyUGFzczogJycsXHJcbiAgICAgICAgICAgIGVycm9yTXNnOiAnJyxcclxuICAgICAgICAgICAgaXNTYXZlSWQ6IGlzU2F2ZUlkKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyB2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWEnLCByb3V0ZXIucXVlcnkucmVmdXJsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKCdiYicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9J21iLTInIHNpemU9J2xnJz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPSdwcmVwZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0ndGktdXNlcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3VzZXJJZCdcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VySWQnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMudXNlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmhhbmRsZUNoYW5nZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoJ2Vycm9yTXNnJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0lEJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+TG9nIEluPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExvZ2luKTsiLCJpbXBvcnQgeyB3aXRoUm91dGVyLCBOZXh0Um91dGVyLCBTaW5nbGV0b25Sb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uL2VudkNvbmZpZy9yb3V0ZXMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgeyBMaW5rLCBSb3V0ZXIsIHdpdGhSb3V0ZXIsIE5leHRSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==