webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_routeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/routeLink */ "./src/utils/routeLink.ts");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/utils/viewUtils.ts");



var _s = $RefreshSig$();





var index = function index(_ref) {
  _s();

  var router = _ref.router;
  var data = {
    getMenuAuth: {
      OUT_RET_CODE: "00",
      OUT_RET_MSG: "정상",
      OUT_RESULT: [{
        MENU_ID: "adm0020",
        DEFAULT_URL: "/adm0020",
        AUTH_GUBUN: "N"
      }]
    }
  }; // 메뉴 권한 DATA

  var resultMenuAuthData = Object(_utils_viewUtils__WEBPACK_IMPORTED_MODULE_3__["getProcOutCursorResult"])({
    gqlData: data
  });
  console.log('resultMenuAuthData');
  console.log(resultMenuAuthData);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // 메뉴 디폴트 URL 로 리다이렉트
    if (data) {
      var defaultUrl = resultMenuAuthData ? resultMenuAuthData[0].DEFAULT_URL : '/login';
      router.push(defaultUrl);
    }
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
};

_s(index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_routeLink__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(index));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsImRhdGEiLCJnZXRNZW51QXV0aCIsIk9VVF9SRVRfQ09ERSIsIk9VVF9SRVRfTVNHIiwiT1VUX1JFU1VMVCIsIk1FTlVfSUQiLCJERUZBVUxUX1VSTCIsIkFVVEhfR1VCVU4iLCJyZXN1bHRNZW51QXV0aERhdGEiLCJnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0IiwiZ3FsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJkZWZhdWx0VXJsIiwicHVzaCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsS0FBdUIsR0FBRyxTQUExQkEsS0FBMEIsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFFNUMsTUFBTUMsSUFBSSxHQUFHO0FBQ1RDLGVBQVcsRUFBRztBQUNWQyxrQkFBWSxFQUFHLElBREw7QUFFUkMsaUJBQVcsRUFBRyxJQUZOO0FBR1JDLGdCQUFVLEVBQ1IsQ0FDSTtBQUFFQyxlQUFPLEVBQUcsU0FBWjtBQUF1QkMsbUJBQVcsRUFBRyxVQUFyQztBQUFpREMsa0JBQVUsRUFBRztBQUE5RCxPQURKO0FBSk07QUFETCxHQUFiLENBRjRDLENBYTVDOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHQywrRUFBc0IsQ0FBcUI7QUFDbEVDLFdBQU8sRUFBRVY7QUFEeUQsR0FBckIsQ0FBakQ7QUFJQVcsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlKLGtCQUFaO0FBRUhLLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0EsUUFBSWIsSUFBSixFQUFVO0FBQ1QsVUFBTWMsVUFBVSxHQUFHTixrQkFBa0IsR0FDbENBLGtCQUFrQixDQUFDLENBQUQsQ0FBbEIsQ0FBc0JGLFdBRFksR0FFbEMsUUFGSDtBQUlBUCxZQUFNLENBQUNnQixJQUFQLENBQVlELFVBQVo7QUFDQTtBQUNELEdBVFEsRUFTTixDQUFDZCxJQUFELENBVE0sQ0FBVDtBQVdHLHNCQUFPLHVKQUFQO0FBQ0gsQ0FqQ0Q7O0dBQU1GLEs7O0FBbUNTa0Isa0lBQVUsQ0FBQ2xCLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWM1NmQ0NzBlOTk1YTE4MDA3N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH0gZnJvbSAnfi91dGlscy9yb3V0ZUxpbmsnO1xyXG5pbXBvcnQgeyBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0IH0gZnJvbSAnfi91dGlscy92aWV3VXRpbHMnO1xyXG5pbXBvcnQgeyBFbnRpdHlfTWVudV9BdXRoIH0gZnJvbSAnfi9nZW4vZ3JhcGhxbC10eXBlcyc7XHJcblxyXG4vKiogcHJvcHMgKi9cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICByb3V0ZXI6IFNpbmdsZXRvblJvdXRlcjtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZ2V0TWVudUF1dGggOiB7XHJcbiAgICAgICAgICAgIE9VVF9SRVRfQ09ERSA6IFwiMDBcIlxyXG4gICAgICAgICAgICAsIE9VVF9SRVRfTVNHIDogXCLsoJXsg4FcIlxyXG4gICAgICAgICAgICAsIE9VVF9SRVNVTFQgOiBcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7IE1FTlVfSUQgOiBcImFkbTAwMjBcIiAsREVGQVVMVF9VUkwgOiBcIi9hZG0wMDIwXCIgLEFVVEhfR1VCVU4gOiBcIk5cIn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g66mU64m0IOq2jO2VnCBEQVRBXHJcbiAgICBjb25zdCByZXN1bHRNZW51QXV0aERhdGEgPSBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0PEVudGl0eV9NZW51X0F1dGhbXT4oe1xyXG4gICAgICAgIGdxbERhdGE6IGRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXN1bHRNZW51QXV0aERhdGEnKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdE1lbnVBdXRoRGF0YSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyDrqZTribQg65SU7Y+07Yq4IFVSTCDroZwg66as64uk7J2066CJ7Yq4XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRjb25zdCBkZWZhdWx0VXJsID0gcmVzdWx0TWVudUF1dGhEYXRhXHJcblx0XHRcdFx0PyByZXN1bHRNZW51QXV0aERhdGFbMF0uREVGQVVMVF9VUkxcclxuXHRcdFx0XHQ6ICcvbG9naW4nO1xyXG5cclxuXHRcdFx0cm91dGVyLnB1c2goZGVmYXVsdFVybCk7XHJcblx0XHR9XHJcblx0fSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gPD48Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoaW5kZXgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9