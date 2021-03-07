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
      OUT_RESULT: {
        OUT_RET_CURSOR: {
          MENU_ID: "adm0020",
          DEFAULT_URL: "/adm002",
          AUTH_GUBUN: "N"
        }
      }
    }
  }; // 메뉴 권한 DATA

  var resultMenuAuthData = Object(_utils_viewUtils__WEBPACK_IMPORTED_MODULE_3__["getProcOutCursorResult"])({
    gqlData: data
  });
  console.log('resultMenuAuthData');
  console.log(resultMenuAuthData);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var defaultUrl = '/login';
    router.push(defaultUrl);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsImRhdGEiLCJnZXRNZW51QXV0aCIsIk9VVF9SRVRfQ09ERSIsIk9VVF9SRVRfTVNHIiwiT1VUX1JFU1VMVCIsIk9VVF9SRVRfQ1VSU09SIiwiTUVOVV9JRCIsIkRFRkFVTFRfVVJMIiwiQVVUSF9HVUJVTiIsInJlc3VsdE1lbnVBdXRoRGF0YSIsImdldFByb2NPdXRDdXJzb3JSZXN1bHQiLCJncWxEYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRlZmF1bHRVcmwiLCJwdXNoIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxLQUF1QixHQUFHLFNBQTFCQSxLQUEwQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUU1QyxNQUFNQyxJQUFJLEdBQUc7QUFDVEMsZUFBVyxFQUFHO0FBQ1ZDLGtCQUFZLEVBQUcsSUFETDtBQUVSQyxpQkFBVyxFQUFHLElBRk47QUFHUkMsZ0JBQVUsRUFBRztBQUNYQyxzQkFBYyxFQUFHO0FBQzVCQyxpQkFBTyxFQUFHLFNBRGtCO0FBRTNCQyxxQkFBVyxFQUFHLFNBRmE7QUFHM0JDLG9CQUFVLEVBQUc7QUFIYztBQUROO0FBSEw7QUFETCxHQUFiLENBRjRDLENBZ0I1Qzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0MsK0VBQXNCLENBQXFCO0FBQ2xFQyxXQUFPLEVBQUVYO0FBRHlELEdBQXJCLENBQWpEO0FBSUFZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixrQkFBWjtBQUVBSyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxVQUFVLEdBQUcsUUFBbkI7QUFFQWhCLFVBQU0sQ0FBQ2lCLElBQVAsQ0FBWUQsVUFBWjtBQUNILEdBSlEsQ0FBVDtBQU1BLHNCQUFPLHVKQUFQO0FBQ0gsQ0EvQkQ7O0dBQU1qQixLOztBQWlDU21CLGtJQUFVLENBQUNuQixLQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlYzc5ZTZmOTNhOGY5OGY4YTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9IGZyb20gJ34vdXRpbHMvcm91dGVMaW5rJztcclxuaW1wb3J0IHsgZ2V0UHJvY091dEN1cnNvclJlc3VsdCB9IGZyb20gJ34vdXRpbHMvdmlld1V0aWxzJztcclxuaW1wb3J0IHsgRW50aXR5X01lbnVfQXV0aCB9IGZyb20gJ34vZ2VuL2dyYXBocWwtdHlwZXMnO1xyXG5cclxuLyoqIHByb3BzICovXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgcm91dGVyOiBTaW5nbGV0b25Sb3V0ZXI7XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcm91dGVyIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGdldE1lbnVBdXRoIDoge1xyXG4gICAgICAgICAgICBPVVRfUkVUX0NPREUgOiBcIjAwXCJcclxuICAgICAgICAgICAgLCBPVVRfUkVUX01TRyA6IFwi7KCV7IOBXCJcclxuICAgICAgICAgICAgLCBPVVRfUkVTVUxUIDoge1xyXG4gICAgICAgICAgICAgICAgT1VUX1JFVF9DVVJTT1IgOiB7XHJcblx0XHRcdFx0XHRNRU5VX0lEIDogXCJhZG0wMDIwXCJcclxuXHRcdFx0XHRcdCxERUZBVUxUX1VSTCA6IFwiL2FkbTAwMlwiXHJcblx0XHRcdFx0XHQsQVVUSF9HVUJVTiA6IFwiTlwiXHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOuplOuJtCDqtoztlZwgREFUQVxyXG4gICAgY29uc3QgcmVzdWx0TWVudUF1dGhEYXRhID0gZ2V0UHJvY091dEN1cnNvclJlc3VsdDxFbnRpdHlfTWVudV9BdXRoW10+KHtcclxuICAgICAgICBncWxEYXRhOiBkYXRhXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygncmVzdWx0TWVudUF1dGhEYXRhJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHRNZW51QXV0aERhdGEpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFVybCA9ICcvbG9naW4nO1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChkZWZhdWx0VXJsKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIDw+PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGluZGV4KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==