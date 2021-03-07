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
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/utils/viewUtils.ts");






const index = ({
  router
}) => {
  const data = {
    getMenuAuth: {
      OUT_RET_CODE: "00",
      OUT_RET_MSG: "정상",
      OUT_RESULT: [{
        MENU_ID: "login",
        DEFAULT_URL: "/login",
        AUTH_GUBUN: "N"
      }, {
        MENU_ID: "adm0020",
        DEFAULT_URL: "/adm0020",
        AUTH_GUBUN: "N"
      }]
    }
  }; // 메뉴 권한 DATA

  const resultMenuAuthData = Object(_utils_viewUtils__WEBPACK_IMPORTED_MODULE_3__["getProcOutCursorResult"])({
    gqlData: data
  });
  console.log('resultMenuAuthData');
  console.log(resultMenuAuthData);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // 메뉴 디폴트 URL 로 리다이렉트
    if (data) {
      const defaultUrl = resultMenuAuthData ? resultMenuAuthData[0].DEFAULT_URL : '/login';
      router.push(defaultUrl);
    }
  }, [data]);
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

/***/ "./src/utils/viewUtils.ts":
/*!********************************!*\
  !*** ./src/utils/viewUtils.ts ***!
  \********************************/
/*! exports provided: toDefault, toDefaultInt, floorCalc, floorCalc10, convertHH24mmText, convertCompanynoText, convertZipCodeText, convertAddrZipCode, convertPhoneText, convertDateText, convertDateTextFormat, sumCol, sumArrayCol, countCol, totAmt, numberFormatGeneral, numberFormatThound, numberFormatRegNo, numberFormatPwd, numberFormatFloat, numberFormatYYYYMMDD, updateObjWithKeys, getProcOutCursorResult, convertOption, getDuedayArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDefault", function() { return toDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDefaultInt", function() { return toDefaultInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorCalc", function() { return floorCalc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorCalc10", function() { return floorCalc10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHH24mmText", function() { return convertHH24mmText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCompanynoText", function() { return convertCompanynoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertZipCodeText", function() { return convertZipCodeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertAddrZipCode", function() { return convertAddrZipCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertPhoneText", function() { return convertPhoneText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateText", function() { return convertDateText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateTextFormat", function() { return convertDateTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumCol", function() { return sumCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumArrayCol", function() { return sumArrayCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countCol", function() { return countCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totAmt", function() { return totAmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatGeneral", function() { return numberFormatGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatThound", function() { return numberFormatThound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatRegNo", function() { return numberFormatRegNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatPwd", function() { return numberFormatPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatFloat", function() { return numberFormatFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatYYYYMMDD", function() { return numberFormatYYYYMMDD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateObjWithKeys", function() { return updateObjWithKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcOutCursorResult", function() { return getProcOutCursorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertOption", function() { return convertOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuedayArray", function() { return getDuedayArray; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);

 //import { ValueFormatterParams } from '@ag-grid-enterprise/all-modules';
//import { IRefAgExcelExport } from '~/components/aggrid/AgExcelExport';

/**
 *  default value 세팅
 *  @param val - original value
 *  @defaultValue - 대체 value
 */

const toDefault = (val, defaultValue) => {
  try {
    var _defaultValue;

    defaultValue = (_defaultValue = defaultValue) !== null && _defaultValue !== void 0 ? _defaultValue : '';
    return val === '' ? defaultValue : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultTo(val, defaultValue);
  } catch (e) {
    return defaultValue;
  }
};
/**
 * default value 세팅 - parse int
 * @param val 숫자형태의 스트링 값
 * @param defaultValue 대체 value
 */

const toDefaultInt = (val, defaultValue) => {
  try {
    // defaultValue 에 null 로 셋팅하는 경우도 있으므로 undefined 에 대해서만 0 으로 설정한다.
    defaultValue = defaultValue === undefined ? 0 : defaultValue;
    return !!val ? Number(val) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};
/**
 *  소수점 자리수만큼 잘러서 반환
 * @param val  - 바꿀  숫자
 * @param pointCalc - 10: 소수점 한자리만 남긴다, 100: 소수점 2자리...
 */

const floorCalc = (val, pointCalc) => {
  return Math.floor(val * pointCalc) / pointCalc;
};
/**
 *  소수점 한자리까지만 표시해서 반환
 * @param val  - 바꿀  숫자
 */

const floorCalc10 = val => {
  const paramVal = typeof val === 'string' ? parseFloat(val) : val;
  return floorCalc(paramVal, 10);
};
/**
 *  소수점 한자리까지만 표시하고 천단위 콤마찍어서 스트링 형태로 반환
 * @param val  - 바꿀  숫자
 */
// export const gridFloorCalcParse = (val: any) => {
// 	return val.value !== '' && val.value !== undefined
// 		? convertMoneyText(floorCalc10(val.value).toString())
// 		: '';
// };

/**
 *  돈표시 콤마 표현으로 convert - 일반숫자형태의 스트링을 콤마단위로 찍어서 반환
 * @param val 숫자형태의 value
 */
// export const convertMoneyText = (val: string | number | ValueFormatterParams) => {
// 	// ag-grid의 ValueFormatterParams 형태 인지 여부 true/false
// 	const isValueFormat = typeof val === 'object' && 'api' in (val as any);
// 	const moneyVal =
// 		typeof val === 'number'
// 			? val.toString()
// 			: isValueFormat
// 			? (val as ValueFormatterParams).value?.toString()
// 			: val;
// 	return !!moneyVal ? moneyVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
// };

const convertHH24mmText = val => {
  const missVal = typeof val === 'number' ? val.toString() : val;
  return !!missVal ? missVal.replace(/\B(?=(\d{2})+(?!\d))/g, ':') : '';
};
/**
 * 사업자번호 변경
 * @param val 1515121515 -> 151-51-21515
 */

const convertCompanynoText = val => {
  return val.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
};
/**
 * ZIPCODE 변경 59036 -> 59-036
 */

const convertZipCodeText = val => {
  if (!val) {
    return '';
  }

  if (val.length === 5) {
    return val.replace(/(\d{2})(\d{3})/, '$1-$2');
  } else if (val.length === 6) {
    return val.replace(/(\d{3})(\d{3})/, '$1-$2');
  }
};
/**
 * ZIP_CODE, ADDR1, ADDR2 를 받아서 (53-776) 주소1 주소2 형식으로 반환
 */

const convertAddrZipCode = (zipCode, addr1, addr2) => {
  zipCode = zipCode ? `(${convertZipCodeText(zipCode)}) ` : '';
  return `${zipCode}${addr1 !== null && addr1 !== void 0 ? addr1 : ''} ${addr2 !== null && addr2 !== void 0 ? addr2 : ''}`;
};
/**
 * 전화번호, 핸드폰형식으로 변환
 * @param val 01099887772
 * @param type 0: **** 으로 표시, 1: 모두 표시
 */

const convertPhoneText = (val, type) => {
  let formatNum = '';

  if (!val) {
    return '';
  }

  if (val.length === 11) {
    formatNum = type === 0 ? val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3') : val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (val.length === 8) {
    formatNum = val.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else {
    if (val.indexOf('02') === 0) {
      formatNum = type === 0 ? val.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3') : val.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      formatNum = type === 0 ? val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3') : val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  }

  return formatNum;
};
/**
 *  20201123 형태의 날짜값을 2020-11-23 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 * @param charVal  날짜 표시 캐릭터 문자(ex: -)
 */
// export const convertYYYYmmddText = (val: string | number, charVal: string) => {
// 	const yyyyMMdd = typeof val === 'number' ? val.toString() : val;
// 	const matchResult = yyyyMMdd.match(/^(\d{4})(\d{1,2})(\d{1,2})$/);
// 	const isMatch = !!matchResult && matchResult.length > 0;
// 	const yyyy = isMatch ? matchResult[1] : '';
// 	const mm = isMatch ? matchResult[2] : '';
// 	const dd = isMatch ? matchResult[3] : '';
// 	charVal = !!charVal ? charVal : '-';
// 	return isMatch ? `${yyyy}${charVal}${mm}${charVal}${dd}` : '';
// };

/**
 *  20201123 형태의 날짜값을 2020-11-23 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 */

const convertDateText = val => {
  if (!val) {
    return '';
  }

  let result = typeof val === 'number' ? val.toString() : val; // 만약 13자리 주민번호가 파라메터로 들어 왔을 경우

  if (result.length === 13) {
    result = result.slice(0, 6);
  } // 860213 형식 convert


  if (result.length === 6) {
    return result.replace(/(\d{2})(\d{2})(\d{2})/, '$1-$2-$3');
  } // 0000-00-00 형식


  if (result === '00000000') {
    return '0000-00-00';
  }

  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(val).format('YYYY-MM-DD');
};
/**
 *  20201123 형태의 날짜값을 fotmat(YYYY-MM-DD 형태) 스트링으로 변경해서 반환
 * @param val 변경할 숫자값(ex: 20201123)
 * @param format  날짜 표시 FORMAT (YYYY-MM-DD)
 */

const convertDateTextFormat = (val, format) => {
  if (!val) {
    return '';
  }

  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(val).format(format);
};
/**
 * 컬럼별 합계 함수
 * @param resultData - data
 * @param colName - 컬럼명
 */

const sumCol = (resultData, colName) => {
  const sumVal = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sumBy(resultData, val => {
    var _val$colName;

    return parseFloat((_val$colName = val[colName]) !== null && _val$colName !== void 0 ? _val$colName : 0);
  });

  return resultData ? sumVal : 0;
};
/**
 * 여러개 컬럼별 합계 함수
 * @param resultData - data
 * @param arrayColName - 합계를 가져올 컬럼들 (ex. ['TOT_CNT', 'OK_CNT'])
 */

const sumArrayCol = (data, arrayColName) => {
  const rtnVal = {};

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(data, val => {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(arrayColName, col => {
      var _rtnVal$col;

      rtnVal[col] = ((_rtnVal$col = rtnVal[col]) !== null && _rtnVal$col !== void 0 ? _rtnVal$col : 0) + val[col];
    });
  });

  return rtnVal;
};
/**
 * 해당컬럼에서 0보다 큰 값이 있는 개체의 count 수(ex. 기사별 근무현황의 근무계에서 쓰임)
 * @param resultData - data
 * @param colName - 컬럼명
 */

const countCol = (resultData, colName) => {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(resultData, val => val[colName] > 0).length;
};
/**
 * D01 ~ D31 or A01 ~ A31 까지의 금액 합계
 * @param resultData - data
 * @param prefix - D01 컬럼이면 D 만 입력 A01 컬럼이면 A 만 입력
 */

const totAmt = (resultData, prefix) => {
  const sumVal = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sumBy(resultData, val => val[prefix + '01'] + val[prefix + '02'] + val[prefix + '03'] + val[prefix + '04'] + val[prefix + '05'] + val[prefix + '06'] + val[prefix + '07'] + val[prefix + '08'] + val[prefix + '09'] + val[prefix + '10'] + val[prefix + '11'] + val[prefix + '12'] + val[prefix + '13'] + val[prefix + '14'] + val[prefix + '15'] + val[prefix + '16'] + val[prefix + '17'] + val[prefix + '18'] + val[prefix + '19'] + val[prefix + '20'] + val[prefix + '21'] + val[prefix + '22'] + val[prefix + '23'] + val[prefix + '24'] + val[prefix + '25'] + val[prefix + '26'] + val[prefix + '27'] + val[prefix + '28'] + val[prefix + '29'] + val[prefix + '30'] + val[prefix + '31']);

  return !resultData ? 0 : sumVal;
}; // D01 ~ D31 까지의 금액 합계(연산으로 인한 시간소비가 있으므로 고려)
// export const totAmt = (resultData, prefix) =>
// 	!resultData
// 		? 0
// 		: _.sumBy(resultData, (val: any) => {
// 				let sumVal = 0;
// 				for (let i = 1; i <= 31; i++) {
// 					let colNumNm = prefix;
// 					if (i.toString().length < 2) {
// 						colNumNm += '0';
// 					}
// 					colNumNm += i.toString();
// 					sumVal += val[colNumNm];
// 				}
// 				return sumVal;
// 		  });

/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 숫자만 입력받는 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatGeneral = (val, displayType, format) => {
  const rtnVal = {
    defaultValue: val,
    thousandSeparator: false,
    decimalScale: 0,
    displayType,
    format
  };
  return rtnVal;
};
/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 천단위로 콤마 찍는 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatThound = (val, displayType) => {
  const rtnVal = numberFormatGeneral(val, displayType);
  rtnVal.decimalScale = 0;
  rtnVal.thousandSeparator = true;
  return rtnVal;
};
/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 주민번호 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatRegNo = (val, displayType) => {
  const rtnVal = numberFormatGeneral(val, displayType);
  rtnVal.format = '######-#######';
  return rtnVal;
};
/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 패스워드 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatPwd = (val, displayType) => {
  const rtnVal = {
    defaultValue: val,
    type: 'password',
    displayType
  };
  return rtnVal;
};
/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 소수점 형태(ex. 723.15512)
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatFloat = (val, displayType) => {
  const rtnVal = {
    defaultValue: val,
    displayType,
    decimalScale: 10
  };
  return rtnVal;
};
/**
 * react-number-format 컨트롤에 전달할 프로퍼티값
 * 참고: https://github.com/s-yadav/react-number-format
 * 날짜 - YYYY-MM-DD 형식
 * @param val - 디폴트값
 * @param displayType - 'input' | 'text'
 */

const numberFormatYYYYMMDD = (val, displayType) => {
  const rtnVal = {
    defaultValue: val,
    format: '####-##-##',
    placeholder: 'YYYY-MM-DD',
    mask: ['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D'],
    displayType
  };
  return rtnVal;
};
/**
 * 타겟 json 오브젝트(targetObj)에 base json 오브젝트(baseObj)의 값을 복사에 키값 기준으로 update 한다.
 * @param baseObj update 의 기준이 되는 base json 오브젝트
 * @param targetObj update 대상이 되는 target json 오브젝트
 */

const updateObjWithKeys = (baseObj, targetObj) => {
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(baseObj).forEach(key => {
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(targetObj, key)) {
      targetObj[key] = baseObj[key];
    }
  });
};
/**
 * 프로시저 결과값 가져오기 파라메터 타입
 * @interface IProcOutCursorResult
 */

/** 프로시저 또는 다이나믹쿼리결과값 가져오기 */
const getProcOutCursorResult = ({
  gqlData,
  defaultValue,
  isOnlySingleRow,
  cursorName,
  callback
}) => {
  const fieldName = gqlData ? Object.keys(gqlData)[0] : '';
  const data = gqlData ? gqlData[fieldName] : null;
  const outResult = data ? data.OUT_RESULT : null;
  const outRetCode = outResult ? data.OUT_RET_CODE : '99';
  let outCursorResult = null;
  const curName = cursorName !== null && cursorName !== void 0 ? cursorName : 'OUT_RET_CURSOR';
  console.log(fieldName);
  console.log(data);
  console.log(outResult);
  console.log(outRetCode);
  console.log(curName);

  if (outResult && outRetCode === '00' && outResult.length > 0) {
    var _outResult$0$curName;

    console.log('in');
    const retCursor = (_outResult$0$curName = outResult[0][curName]) !== null && _outResult$0$curName !== void 0 ? _outResult$0$curName : outResult;
    console.log(retCursor);
    outCursorResult = (retCursor === null || retCursor === void 0 ? void 0 : retCursor.length) > 0 ? retCursor : !retCursor && outResult.length > 0 ? outResult : null;
  } // return value


  const rtnValue = outCursorResult ? outCursorResult : defaultValue ? defaultValue : null; // 프로시저 리턴 컬럼중 TOTAL_COUNT 가 있으면 반환

  const totalCount = outCursorResult && outCursorResult.length > 0 && outCursorResult[0].TOTAL_COUNT ? outCursorResult[0].TOTAL_COUNT : 0; // 콜백함수 수행

  callback === null || callback === void 0 ? void 0 : callback(rtnValue, totalCount);
  return rtnValue;
};
/**
 * 오브젝트 array 값들중에서
 * 지정된 valueField명 labelField명에 해당하는 값을 찾은뒤
 * value / label 배열값으로 반환함
 */

const convertOption = (selectData, valueField, labelField) => {
  const result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectData, val => {
    const opt = {
      value: val[valueField],
      label: val[labelField]
    };
    return opt;
  });

  return result;
};
/**
 * 엑셀다운로드 파라메터 타입
 * @interface IExcelDown
 */
// interface IExcelDown {
// 	refetchMethod: (vars: any) => Promise<any>;
// 	refetchVars: any;
// 	refExcelComponent: MutableRefObject<IRefAgExcelExport>;
// }

/**
 * 엑셀다운로드
 * @param params IExcelDown type
 */
// export const excelDown = async (params: IExcelDown) => {
// 	const { data } = await params.refetchMethod({
// 		...params.refetchVars
// 	});
// 	getProcOutCursorResult({
// 		gqlData: data,
// 		callback: (resData, totalCount) => {
// 			params.refExcelComponent.current.setData(resData);
// 			params.refExcelComponent.current.exportExcel();
// 		}
// 	});
// };

/** 검색일자 기준 duration 날짜까지 배열 반환
 * date: 기준날짜 (YYYYMMDD 형식)
 * duration: 반환할 바운더리 날짜
 * ex. -7 이면 -7일째부터 기준날짜까지 반환, 7 이면 기준날짜부터 7일째까지 반환
 * outFormat: output 반환 날짜 형식
 */

function* getDuedayArray(date, duration, outFormat) {
  const nowDay = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date, 'YYYYMMDD');

  if (duration < 0) {
    for (let x = 6; x > 0; x--) {
      yield dayjs__WEBPACK_IMPORTED_MODULE_1___default()(nowDay).add(x * -1, 'day').format('MM/DD');
    }

    yield nowDay.format('MM/DD');
  } else {
    yield nowDay.format('MM/DD');

    for (let x = 0; x < duration; x++) {
      yield dayjs__WEBPACK_IMPORTED_MODULE_1___default()(nowDay).add(x, 'day').format('MM/DD');
    }
  }
}

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW52Q29uZmlnL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9yb3V0ZUxpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZpZXdVdGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXlqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIm5leHRSb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFkZCIsIm5hbWUiLCJwYWdlIiwicGF0dGVybiIsImluZGV4Iiwicm91dGVyIiwiZGF0YSIsImdldE1lbnVBdXRoIiwiT1VUX1JFVF9DT0RFIiwiT1VUX1JFVF9NU0ciLCJPVVRfUkVTVUxUIiwiTUVOVV9JRCIsIkRFRkFVTFRfVVJMIiwiQVVUSF9HVUJVTiIsInJlc3VsdE1lbnVBdXRoRGF0YSIsImdldFByb2NPdXRDdXJzb3JSZXN1bHQiLCJncWxEYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImRlZmF1bHRVcmwiLCJwdXNoIiwid2l0aFJvdXRlciIsInRvRGVmYXVsdCIsInZhbCIsImRlZmF1bHRWYWx1ZSIsIl8iLCJkZWZhdWx0VG8iLCJlIiwidG9EZWZhdWx0SW50IiwidW5kZWZpbmVkIiwiTnVtYmVyIiwiZmxvb3JDYWxjIiwicG9pbnRDYWxjIiwiTWF0aCIsImZsb29yIiwiZmxvb3JDYWxjMTAiLCJwYXJhbVZhbCIsInBhcnNlRmxvYXQiLCJjb252ZXJ0SEgyNG1tVGV4dCIsIm1pc3NWYWwiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJjb252ZXJ0Q29tcGFueW5vVGV4dCIsImNvbnZlcnRaaXBDb2RlVGV4dCIsImxlbmd0aCIsImNvbnZlcnRBZGRyWmlwQ29kZSIsInppcENvZGUiLCJhZGRyMSIsImFkZHIyIiwiY29udmVydFBob25lVGV4dCIsInR5cGUiLCJmb3JtYXROdW0iLCJpbmRleE9mIiwiY29udmVydERhdGVUZXh0IiwicmVzdWx0Iiwic2xpY2UiLCJkYXlqcyIsImZvcm1hdCIsImNvbnZlcnREYXRlVGV4dEZvcm1hdCIsInN1bUNvbCIsInJlc3VsdERhdGEiLCJjb2xOYW1lIiwic3VtVmFsIiwic3VtQnkiLCJzdW1BcnJheUNvbCIsImFycmF5Q29sTmFtZSIsInJ0blZhbCIsImVhY2giLCJjb2wiLCJjb3VudENvbCIsImZpbHRlciIsInRvdEFtdCIsInByZWZpeCIsIm51bWJlckZvcm1hdEdlbmVyYWwiLCJkaXNwbGF5VHlwZSIsInRob3VzYW5kU2VwYXJhdG9yIiwiZGVjaW1hbFNjYWxlIiwibnVtYmVyRm9ybWF0VGhvdW5kIiwibnVtYmVyRm9ybWF0UmVnTm8iLCJudW1iZXJGb3JtYXRQd2QiLCJudW1iZXJGb3JtYXRGbG9hdCIsIm51bWJlckZvcm1hdFlZWVlNTUREIiwicGxhY2Vob2xkZXIiLCJtYXNrIiwidXBkYXRlT2JqV2l0aEtleXMiLCJiYXNlT2JqIiwidGFyZ2V0T2JqIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJpc09ubHlTaW5nbGVSb3ciLCJjdXJzb3JOYW1lIiwiY2FsbGJhY2siLCJmaWVsZE5hbWUiLCJPYmplY3QiLCJvdXRSZXN1bHQiLCJvdXRSZXRDb2RlIiwib3V0Q3Vyc29yUmVzdWx0IiwiY3VyTmFtZSIsInJldEN1cnNvciIsInJ0blZhbHVlIiwidG90YWxDb3VudCIsIlRPVEFMX0NPVU5UIiwiY29udmVydE9wdGlvbiIsInNlbGVjdERhdGEiLCJ2YWx1ZUZpZWxkIiwibGFiZWxGaWVsZCIsIm1hcCIsIm9wdCIsInZhbHVlIiwibGFiZWwiLCJnZXREdWVkYXlBcnJheSIsImRhdGUiLCJkdXJhdGlvbiIsIm91dEZvcm1hdCIsIm5vd0RheSIsIngiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBMUI7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLENBQUNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsVUFBVSxFQUE1QixHQUNDO0FBQ0NJLEdBRkYsQ0FFTTtBQUFFQyxNQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFLFFBQXZCO0FBQWlDQyxTQUFPLEVBQUU7QUFBMUMsQ0FGTixFQUdFSCxHQUhGLENBR007QUFBRUMsTUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRSxR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RUFBL0IsRUFBbUM7QUFDbEMsWUFBTTdELDRDQUFLLENBQUM0RCxNQUFELENBQUwsQ0FDSnJILEdBREksQ0FDQXNILENBREEsRUFDRyxLQURILEVBRUo1RCxNQUZJLENBRUcsT0FGSCxDQUFOO0FBR0E7QUFDRDtBQUNELEM7Ozs7Ozs7Ozs7O0FDbm1CRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8qKlxyXG4gKiBAdHlwZWRlZiB7IGltcG9ydChcIm5leHQtcm91dGVzXCIpLlJlZ2lzdHJ5IH0gTmV4dFJvdXRlc1xyXG4gKi9cclxuY29uc3QgbmV4dFJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJyk7XHJcblxyXG4vKipcclxuICogQHR5cGUgeyBOZXh0Um91dGVzIH1cclxuICovXHJcbihtb2R1bGUuZXhwb3J0cyA9IG5leHRSb3V0ZXMoKSlcclxuXHQvLyDtjpjsnbTsp4DrqoUsIO2MqO2EtFxyXG5cdC5hZGQoeyBuYW1lOiAnaW5kZXgnLCBwYWdlOiAnL2luZGV4JywgcGF0dGVybjogJy8nIH0pXHJcblx0LmFkZCh7IG5hbWU6ICdsb2dpbicsIHBhZ2U6ICcvbG9naW4nLCBwYXR0ZXJuOiAnL2xvZ2luJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnbG9naW5SZWZ1cmwnLCBwYWdlOiAnL2xvZ2luJywgcGF0dGVybjogJy9sb2dpbi86cmVmdXJsJyB9KVxyXG5cdC5hZGQoe1xyXG5cdFx0bmFtZTogJ19lcnJvclJlZlZhbCcsXHJcblx0XHRwYWdlOiAnL19lcnJvcicsXHJcblx0XHRwYXR0ZXJuOiAnL19lcnJvci86c3RhdHVzQ29kZS86ZXJyTmFtZT8vOmVyck1zZz8vOmVyclN0YWNrPydcclxuXHR9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwMTAnLCBwYWdlOiAnL2FkbTIwMTAnLCBwYXR0ZXJuOiAnL2FkbTIwMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjAyMCcsIHBhZ2U6ICcvYWRtMjAyMCcsIHBhdHRlcm46ICcvYWRtMjAyMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMDMwJywgcGFnZTogJy9hZG0yMDMwJywgcGF0dGVybjogJy9hZG0yMDMwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwNDAnLCBwYWdlOiAnL2FkbTIwNDAnLCBwYXR0ZXJuOiAnL2FkbTIwNDAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjIxMCcsIHBhZ2U6ICcvYWRtMjIxMCcsIHBhdHRlcm46ICcvYWRtMjIxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MDEwJywgcGFnZTogJy9hZG02MDEwJywgcGF0dGVybjogJy9hZG02MDEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYwMjAnLCBwYWdlOiAnL2FkbTYwMjAnLCBwYXR0ZXJuOiAnL2FkbTYwMjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjMxMCcsIHBhZ2U6ICcvYWRtNjMxMCcsIHBhdHRlcm46ICcvYWRtNjMxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzIwJywgcGFnZTogJy9hZG02MzIwJywgcGF0dGVybjogJy9hZG02MzIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzMzAnLCBwYWdlOiAnL2FkbTYzMzAnLCBwYXR0ZXJuOiAnL2FkbTYzMzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjM0MCcsIHBhZ2U6ICcvYWRtNjM0MCcsIHBhdHRlcm46ICcvYWRtNjM0MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzUwJywgcGFnZTogJy9hZG02MzUwJywgcGF0dGVybjogJy9hZG02MzUwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzNjAnLCBwYWdlOiAnL2FkbTYzNjAnLCBwYXR0ZXJuOiAnL2FkbTYzNjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzAxMCcsIHBhZ2U6ICcvYWRtNzAxMCcsIHBhdHRlcm46ICcvYWRtNzAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDIwJywgcGFnZTogJy9hZG03MDIwJywgcGF0dGVybjogJy9hZG03MDIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwMzAnLCBwYWdlOiAnL2FkbTcwMzAnLCBwYXR0ZXJuOiAnL2FkbTcwMzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzA0MCcsIHBhZ2U6ICcvYWRtNzA0MCcsIHBhdHRlcm46ICcvYWRtNzA0MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDYwJywgcGFnZTogJy9hZG03MDYwJywgcGF0dGVybjogJy9hZG03MDYwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwNzAnLCBwYWdlOiAnL2FkbTcwNzAnLCBwYXR0ZXJuOiAnL2FkbTcwNzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtOTAxMCcsIHBhZ2U6ICcvYWRtOTAxMCcsIHBhdHRlcm46ICcvYWRtOTAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG05MDIwJywgcGFnZTogJy9hZG05MDIwJywgcGF0dGVybjogJy9hZG05MDIwJyB9KTtcclxuXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH0gZnJvbSAnfi91dGlscy9yb3V0ZUxpbmsnO1xyXG5pbXBvcnQgeyBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0IH0gZnJvbSAnfi91dGlscy92aWV3VXRpbHMnO1xyXG5pbXBvcnQgeyBFbnRpdHlfTWVudV9BdXRoIH0gZnJvbSAnfi9nZW4vZ3JhcGhxbC10eXBlcyc7XHJcblxyXG4vKiogcHJvcHMgKi9cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICByb3V0ZXI6IFNpbmdsZXRvblJvdXRlcjtcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZ2V0TWVudUF1dGggOiB7XHJcbiAgICAgICAgICAgIE9VVF9SRVRfQ09ERSA6IFwiMDBcIlxyXG4gICAgICAgICAgICAsIE9VVF9SRVRfTVNHIDogXCLsoJXsg4FcIlxyXG4gICAgICAgICAgICAsIE9VVF9SRVNVTFQgOiBcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7IE1FTlVfSUQgOiBcImxvZ2luXCIgLERFRkFVTFRfVVJMIDogXCIvbG9naW5cIiAsQVVUSF9HVUJVTiA6IFwiTlwifSxcclxuICAgICAgICAgICAgICAgICAgICB7IE1FTlVfSUQgOiBcImFkbTAwMjBcIiAsREVGQVVMVF9VUkwgOiBcIi9hZG0wMDIwXCIgLEFVVEhfR1VCVU4gOiBcIk5cIn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g66mU64m0IOq2jO2VnCBEQVRBXHJcbiAgICBjb25zdCByZXN1bHRNZW51QXV0aERhdGEgPSBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0PEVudGl0eV9NZW51X0F1dGhbXT4oe1xyXG4gICAgICAgIGdxbERhdGE6IGRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdyZXN1bHRNZW51QXV0aERhdGEnKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdE1lbnVBdXRoRGF0YSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyDrqZTribQg65SU7Y+07Yq4IFVSTCDroZwg66as64uk7J2066CJ7Yq4XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRjb25zdCBkZWZhdWx0VXJsID0gcmVzdWx0TWVudUF1dGhEYXRhXHJcblx0XHRcdFx0PyByZXN1bHRNZW51QXV0aERhdGFbMF0uREVGQVVMVF9VUkxcclxuXHRcdFx0XHQ6ICcvbG9naW4nO1xyXG5cclxuXHRcdFx0cm91dGVyLnB1c2goZGVmYXVsdFVybCk7XHJcblx0XHR9XHJcblx0fSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gPD48Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoaW5kZXgpO1xyXG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyLCBOZXh0Um91dGVyLCBTaW5nbGV0b25Sb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uL2VudkNvbmZpZy9yb3V0ZXMnO1xyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgeyBMaW5rLCBSb3V0ZXIsIHdpdGhSb3V0ZXIsIE5leHRSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9O1xyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNdXRhYmxlUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXRQcm9wcywgRm9ybWF0SW5wdXRWYWx1ZUZ1bmN0aW9uIH0gZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbi8vaW1wb3J0IHsgVmFsdWVGb3JtYXR0ZXJQYXJhbXMgfSBmcm9tICdAYWctZ3JpZC1lbnRlcnByaXNlL2FsbC1tb2R1bGVzJztcclxuLy9pbXBvcnQgeyBJUmVmQWdFeGNlbEV4cG9ydCB9IGZyb20gJ34vY29tcG9uZW50cy9hZ2dyaWQvQWdFeGNlbEV4cG9ydCc7XHJcblxyXG4vKipcclxuICogIGRlZmF1bHQgdmFsdWUg7IS47YyFXHJcbiAqICBAcGFyYW0gdmFsIC0gb3JpZ2luYWwgdmFsdWVcclxuICogIEBkZWZhdWx0VmFsdWUgLSDrjIDssrQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b0RlZmF1bHQgPSAodmFsOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgPz8gJyc7XHJcblxyXG5cdFx0cmV0dXJuIHZhbCA9PT0gJycgPyBkZWZhdWx0VmFsdWUgOiBfLmRlZmF1bHRUbyh2YWwsIGRlZmF1bHRWYWx1ZSk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogZGVmYXVsdCB2YWx1ZSDshLjtjIUgLSBwYXJzZSBpbnRcclxuICogQHBhcmFtIHZhbCDsiKvsnpDtmJXtg5zsnZgg7Iqk7Yq466eBIOqwklxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIOuMgOyytCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvRGVmYXVsdEludCA9ICh2YWw/OiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZT86IG51bWJlcikgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBkZWZhdWx0VmFsdWUg7JeQIG51bGwg66GcIOyFi+2Mhe2VmOuKlCDqsr3smrDrj4Qg7J6I7Jy866+A66GcIHVuZGVmaW5lZCDsl5Ag64yA7ZW07ISc66eMIDAg7Jy866GcIOyEpOygle2VnOuLpC5cclxuXHRcdGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gMCA6IGRlZmF1bHRWYWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gISF2YWwgPyBOdW1iZXIodmFsKSA6IGRlZmF1bHRWYWx1ZTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiAg7IaM7IiY7KCQIOyekOumrOyImOunjO2BvCDsnpjrn6zshJwg67CY7ZmYXHJcbiAqIEBwYXJhbSB2YWwgIC0g67CU6r+AICDsiKvsnpBcclxuICogQHBhcmFtIHBvaW50Q2FsYyAtIDEwOiDshozsiJjsoJAg7ZWc7J6Q66as66eMIOuCqOq4tOuLpCwgMTAwOiDshozsiJjsoJAgMuyekOumrC4uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZsb29yQ2FsYyA9ICh2YWwsIHBvaW50Q2FsYykgPT4ge1xyXG5cdHJldHVybiBNYXRoLmZsb29yKHZhbCAqIHBvaW50Q2FsYykgLyBwb2ludENhbGM7XHJcbn07XHJcblxyXG4vKipcclxuICogIOyGjOyImOygkCDtlZzsnpDrpqzquYzsp4Drp4wg7ZGc7Iuc7ZW07IScIOuwmO2ZmFxyXG4gKiBAcGFyYW0gdmFsICAtIOuwlOq/gCAg7Iir7J6QXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmxvb3JDYWxjMTAgPSB2YWwgPT4ge1xyXG5cdGNvbnN0IHBhcmFtVmFsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XHJcblxyXG5cdHJldHVybiBmbG9vckNhbGMocGFyYW1WYWwsIDEwKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiAg7IaM7IiY7KCQIO2VnOyekOumrOq5jOyngOunjCDtkZzsi5ztlZjqs6Ag7LKc64uo7JyEIOy9pOuniOywjeyWtOyEnCDsiqTtirjrp4Eg7ZiV7YOc66GcIOuwmO2ZmFxyXG4gKiBAcGFyYW0gdmFsICAtIOuwlOq/gCAg7Iir7J6QXHJcbiAqL1xyXG4vLyBleHBvcnQgY29uc3QgZ3JpZEZsb29yQ2FsY1BhcnNlID0gKHZhbDogYW55KSA9PiB7XHJcbi8vIFx0cmV0dXJuIHZhbC52YWx1ZSAhPT0gJycgJiYgdmFsLnZhbHVlICE9PSB1bmRlZmluZWRcclxuLy8gXHRcdD8gY29udmVydE1vbmV5VGV4dChmbG9vckNhbGMxMCh2YWwudmFsdWUpLnRvU3RyaW5nKCkpXHJcbi8vIFx0XHQ6ICcnO1xyXG4vLyB9O1xyXG5cclxuLyoqXHJcbiAqICDrj4jtkZzsi5wg7L2k66eIIO2RnO2YhOycvOuhnCBjb252ZXJ0IC0g7J2867CY7Iir7J6Q7ZiV7YOc7J2YIOyKpO2KuOungeydhCDsvaTrp4jri6jsnITroZwg7LCN7Ja07IScIOuwmO2ZmFxyXG4gKiBAcGFyYW0gdmFsIOyIq+yekO2Yle2DnOydmCB2YWx1ZVxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGNvbnZlcnRNb25leVRleHQgPSAodmFsOiBzdHJpbmcgfCBudW1iZXIgfCBWYWx1ZUZvcm1hdHRlclBhcmFtcykgPT4ge1xyXG4vLyBcdC8vIGFnLWdyaWTsnZggVmFsdWVGb3JtYXR0ZXJQYXJhbXMg7ZiV7YOcIOyduOyngCDsl6zrtoAgdHJ1ZS9mYWxzZVxyXG4vLyBcdGNvbnN0IGlzVmFsdWVGb3JtYXQgPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAnYXBpJyBpbiAodmFsIGFzIGFueSk7XHJcblxyXG4vLyBcdGNvbnN0IG1vbmV5VmFsID1cclxuLy8gXHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInXHJcbi8vIFx0XHRcdD8gdmFsLnRvU3RyaW5nKClcclxuLy8gXHRcdFx0OiBpc1ZhbHVlRm9ybWF0XHJcbi8vIFx0XHRcdD8gKHZhbCBhcyBWYWx1ZUZvcm1hdHRlclBhcmFtcykudmFsdWU/LnRvU3RyaW5nKClcclxuLy8gXHRcdFx0OiB2YWw7XHJcblxyXG4vLyBcdHJldHVybiAhIW1vbmV5VmFsID8gbW9uZXlWYWwucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6ICcwJztcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0SEgyNG1tVGV4dCA9ICh2YWw6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG5cdGNvbnN0IG1pc3NWYWwgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHZhbC50b1N0cmluZygpIDogdmFsO1xyXG5cclxuXHRyZXR1cm4gISFtaXNzVmFsID8gbWlzc1ZhbC5yZXBsYWNlKC9cXEIoPz0oXFxkezJ9KSsoPyFcXGQpKS9nLCAnOicpIDogJyc7XHJcbn07XHJcblxyXG4vKipcclxuICog7IKs7JeF7J6Q67KI7Zi4IOuzgOqyvVxyXG4gKiBAcGFyYW0gdmFsIDE1MTUxMjE1MTUgLT4gMTUxLTUxLTIxNTE1XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydENvbXBhbnlub1RleHQgPSAodmFsOiBzdHJpbmcpID0+IHtcclxuXHRyZXR1cm4gdmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZHsyfSkoXFxkezV9KS8sICckMS0kMi0kMycpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFpJUENPREUg67OA6rK9IDU5MDM2IC0+IDU5LTAzNlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRaaXBDb2RlVGV4dCA9ICh2YWw6IHN0cmluZykgPT4ge1xyXG5cdGlmICghdmFsKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRpZiAodmFsLmxlbmd0aCA9PT0gNSkge1xyXG5cdFx0cmV0dXJuIHZhbC5yZXBsYWNlKC8oXFxkezJ9KShcXGR7M30pLywgJyQxLSQyJyk7XHJcblx0fSBlbHNlIGlmICh2YWwubGVuZ3RoID09PSA2KSB7XHJcblx0XHRyZXR1cm4gdmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkvLCAnJDEtJDInKTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogWklQX0NPREUsIEFERFIxLCBBRERSMiDrpbwg67Cb7JWE7IScICg1My03NzYpIOyjvOyGjDEg7KO87IaMMiDtmJXsi53snLzroZwg67CY7ZmYXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydEFkZHJaaXBDb2RlID0gKFxyXG5cdHppcENvZGU6IHN0cmluZyxcclxuXHRhZGRyMTogc3RyaW5nLFxyXG5cdGFkZHIyOiBzdHJpbmdcclxuKSA9PiB7XHJcblx0emlwQ29kZSA9IHppcENvZGUgPyBgKCR7Y29udmVydFppcENvZGVUZXh0KHppcENvZGUpfSkgYCA6ICcnO1xyXG5cclxuXHRyZXR1cm4gYCR7emlwQ29kZX0ke2FkZHIxID8/ICcnfSAke2FkZHIyID8/ICcnfWA7XHJcbn07XHJcblxyXG4vKipcclxuICog7KCE7ZmU67KI7Zi4LCDtlbjrk5ztj7DtmJXsi53snLzroZwg67OA7ZmYXHJcbiAqIEBwYXJhbSB2YWwgMDEwOTk4ODc3NzJcclxuICogQHBhcmFtIHR5cGUgMDogKioqKiDsnLzroZwg7ZGc7IucLCAxOiDrqqjrkZAg7ZGc7IucXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydFBob25lVGV4dCA9ICh2YWw6IHN0cmluZywgdHlwZTogMCB8IDEpID0+IHtcclxuXHRsZXQgZm9ybWF0TnVtID0gJyc7XHJcblxyXG5cdGlmICghdmFsKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRpZiAodmFsLmxlbmd0aCA9PT0gMTEpIHtcclxuXHRcdGZvcm1hdE51bSA9XHJcblx0XHRcdHR5cGUgPT09IDBcclxuXHRcdFx0XHQ/IHZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGR7NH0pKFxcZHs0fSkvLCAnJDEtKioqKi0kMycpXHJcblx0XHRcdFx0OiB2YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkezR9KShcXGR7NH0pLywgJyQxLSQyLSQzJyk7XHJcblx0fSBlbHNlIGlmICh2YWwubGVuZ3RoID09PSA4KSB7XHJcblx0XHRmb3JtYXROdW0gPSB2YWwucmVwbGFjZSgvKFxcZHs0fSkoXFxkezR9KS8sICckMS0kMicpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAodmFsLmluZGV4T2YoJzAyJykgPT09IDApIHtcclxuXHRcdFx0Zm9ybWF0TnVtID1cclxuXHRcdFx0XHR0eXBlID09PSAwXHJcblx0XHRcdFx0XHQ/IHZhbC5yZXBsYWNlKC8oXFxkezJ9KShcXGR7NH0pKFxcZHs0fSkvLCAnJDEtKioqKi0kMycpXHJcblx0XHRcdFx0XHQ6IHZhbC5yZXBsYWNlKC8oXFxkezJ9KShcXGR7NH0pKFxcZHs0fSkvLCAnJDEtJDItJDMnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvcm1hdE51bSA9XHJcblx0XHRcdFx0dHlwZSA9PT0gMFxyXG5cdFx0XHRcdFx0PyB2YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgJyQxLSoqKi0kMycpXHJcblx0XHRcdFx0XHQ6IHZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCAnJDEtJDItJDMnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBmb3JtYXROdW07XHJcbn07XHJcblxyXG4vKipcclxuICogIDIwMjAxMTIzIO2Yle2DnOydmCDrgqDsp5zqsJLsnYQgMjAyMC0xMS0yMyDsiqTtirjrp4HsnLzroZwg67OA6rK97ZW07IScIOuwmO2ZmFxyXG4gKiBAcGFyYW0gdmFsIOuzgOqyve2VoCDsiKvsnpDqsJIoZXg6IDIwMjAxMTIzKVxyXG4gKiBAcGFyYW0gY2hhclZhbCAg64Kg7KecIO2RnOyLnCDsupDrpq3thLAg66y47J6QKGV4OiAtKVxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGNvbnZlcnRZWVlZbW1kZFRleHQgPSAodmFsOiBzdHJpbmcgfCBudW1iZXIsIGNoYXJWYWw6IHN0cmluZykgPT4ge1xyXG4vLyBcdGNvbnN0IHl5eXlNTWRkID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyB2YWwudG9TdHJpbmcoKSA6IHZhbDtcclxuLy8gXHRjb25zdCBtYXRjaFJlc3VsdCA9IHl5eXlNTWRkLm1hdGNoKC9eKFxcZHs0fSkoXFxkezEsMn0pKFxcZHsxLDJ9KSQvKTtcclxuXHJcbi8vIFx0Y29uc3QgaXNNYXRjaCA9ICEhbWF0Y2hSZXN1bHQgJiYgbWF0Y2hSZXN1bHQubGVuZ3RoID4gMDtcclxuLy8gXHRjb25zdCB5eXl5ID0gaXNNYXRjaCA/IG1hdGNoUmVzdWx0WzFdIDogJyc7XHJcbi8vIFx0Y29uc3QgbW0gPSBpc01hdGNoID8gbWF0Y2hSZXN1bHRbMl0gOiAnJztcclxuLy8gXHRjb25zdCBkZCA9IGlzTWF0Y2ggPyBtYXRjaFJlc3VsdFszXSA6ICcnO1xyXG4vLyBcdGNoYXJWYWwgPSAhIWNoYXJWYWwgPyBjaGFyVmFsIDogJy0nO1xyXG5cclxuLy8gXHRyZXR1cm4gaXNNYXRjaCA/IGAke3l5eXl9JHtjaGFyVmFsfSR7bW19JHtjaGFyVmFsfSR7ZGR9YCA6ICcnO1xyXG4vLyB9O1xyXG5cclxuLyoqXHJcbiAqICAyMDIwMTEyMyDtmJXtg5zsnZgg64Kg7Kec6rCS7J2EIDIwMjAtMTEtMjMg7Iqk7Yq466eB7Jy866GcIOuzgOqyve2VtOyEnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCDrs4Dqsr3tlaAg7Iir7J6Q6rCSKGV4OiAyMDIwMTEyMylcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0RGF0ZVRleHQgPSAodmFsOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuXHRpZiAoIXZhbCkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0bGV0IHJlc3VsdCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gdmFsLnRvU3RyaW5nKCkgOiB2YWw7XHJcblxyXG5cdC8vIOunjOyVvSAxM+yekOumrCDso7zrr7zrsojtmLjqsIAg7YyM652866mU7YSw66GcIOuTpOyWtCDsmZTsnYQg6rK97JqwXHJcblx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDEzKSB7XHJcblx0XHRyZXN1bHQgPSByZXN1bHQuc2xpY2UoMCwgNik7XHJcblx0fVxyXG5cclxuXHQvLyA4NjAyMTMg7ZiV7IudIGNvbnZlcnRcclxuXHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gNikge1xyXG5cdFx0cmV0dXJuIHJlc3VsdC5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCAnJDEtJDItJDMnKTtcclxuXHR9XHJcblxyXG5cdC8vIDAwMDAtMDAtMDAg7ZiV7IudXHJcblx0aWYgKHJlc3VsdCA9PT0gJzAwMDAwMDAwJykge1xyXG5cdFx0cmV0dXJuICcwMDAwLTAwLTAwJztcclxuXHR9XHJcblxyXG5cdHJldHVybiBkYXlqcyh2YWwpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICAyMDIwMTEyMyDtmJXtg5zsnZgg64Kg7Kec6rCS7J2EIGZvdG1hdChZWVlZLU1NLUREIO2Yle2DnCkg7Iqk7Yq466eB7Jy866GcIOuzgOqyve2VtOyEnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCDrs4Dqsr3tlaAg7Iir7J6Q6rCSKGV4OiAyMDIwMTEyMylcclxuICogQHBhcmFtIGZvcm1hdCAg64Kg7KecIO2RnOyLnCBGT1JNQVQgKFlZWVktTU0tREQpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydERhdGVUZXh0Rm9ybWF0ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXQ6IHN0cmluZykgPT4ge1xyXG5cdGlmICghdmFsKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZGF5anModmFsKS5mb3JtYXQoZm9ybWF0KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDsu6zrn7zrs4Qg7ZWp6rOEIO2VqOyImFxyXG4gKiBAcGFyYW0gcmVzdWx0RGF0YSAtIGRhdGFcclxuICogQHBhcmFtIGNvbE5hbWUgLSDsu6zrn7zrqoVcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdW1Db2wgPSAocmVzdWx0RGF0YTogYW55LCBjb2xOYW1lOiBzdHJpbmcpID0+IHtcclxuXHRjb25zdCBzdW1WYWwgPSBfLnN1bUJ5KHJlc3VsdERhdGEsICh2YWw6IGFueSkgPT4gcGFyc2VGbG9hdCh2YWxbY29sTmFtZV0gPz8gMCkpO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0RGF0YSA/IHN1bVZhbCA6IDA7XHJcbn07XHJcblxyXG4vKipcclxuICog7Jes65+s6rCcIOy7rOufvOuzhCDtlanqs4Qg7ZWo7IiYXHJcbiAqIEBwYXJhbSByZXN1bHREYXRhIC0gZGF0YVxyXG4gKiBAcGFyYW0gYXJyYXlDb2xOYW1lIC0g7ZWp6rOE66W8IOqwgOyguOyYrCDsu6zrn7zrk6QgKGV4LiBbJ1RPVF9DTlQnLCAnT0tfQ05UJ10pXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3VtQXJyYXlDb2wgPSA8VCBleHRlbmRzIG9iamVjdD4oXHJcblx0ZGF0YTogVFtdLFxyXG5cdGFycmF5Q29sTmFtZTogQXJyYXk8a2V5b2YgVD5cclxuKTogVCA9PiB7XHJcblx0Y29uc3QgcnRuVmFsOiBhbnkgPSB7fTtcclxuXHJcblx0Xy5lYWNoKGRhdGEsIHZhbCA9PiB7XHJcblx0XHRfLmVhY2goYXJyYXlDb2xOYW1lLCBjb2wgPT4ge1xyXG5cdFx0XHRydG5WYWxbY29sXSA9IChydG5WYWxbY29sXSA/PyAwKSArIHZhbFtjb2xdO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBydG5WYWw7XHJcbn07XHJcblxyXG4vKipcclxuICog7ZW064u57Lus65+87JeQ7IScIDDrs7Tri6Qg7YGwIOqwkuydtCDsnojripQg6rCc7LK07J2YIGNvdW50IOyImChleC4g6riw7IKs67OEIOq3vOustO2YhO2ZqeydmCDqt7zrrLTqs4Tsl5DshJwg7JOw7J6EKVxyXG4gKiBAcGFyYW0gcmVzdWx0RGF0YSAtIGRhdGFcclxuICogQHBhcmFtIGNvbE5hbWUgLSDsu6zrn7zrqoVcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb3VudENvbCA9IChyZXN1bHREYXRhOiBhbnksIGNvbE5hbWU6IHN0cmluZykgPT4ge1xyXG5cdHJldHVybiBfLmZpbHRlcihyZXN1bHREYXRhLCB2YWwgPT4gdmFsW2NvbE5hbWVdID4gMCkubGVuZ3RoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEQwMSB+IEQzMSBvciBBMDEgfiBBMzEg6rmM7KeA7J2YIOq4iOyVoSDtlanqs4RcclxuICogQHBhcmFtIHJlc3VsdERhdGEgLSBkYXRhXHJcbiAqIEBwYXJhbSBwcmVmaXggLSBEMDEg7Lus65+87J2066m0IEQg66eMIOyeheugpSBBMDEg7Lus65+87J2066m0IEEg66eMIOyeheugpVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvdEFtdCA9IChyZXN1bHREYXRhOiBhbnksIHByZWZpeDogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3Qgc3VtVmFsID0gXy5zdW1CeShcclxuXHRcdHJlc3VsdERhdGEsXHJcblx0XHQodmFsOiBhbnkpID0+XHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDEnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDInXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDMnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDQnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDUnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDYnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDcnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDgnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMDknXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTAnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTEnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTInXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTMnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTQnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTUnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTYnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTcnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTgnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMTknXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjAnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjEnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjInXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjMnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjQnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjUnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjYnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjcnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjgnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMjknXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMzAnXSArXHJcblx0XHRcdHZhbFtwcmVmaXggKyAnMzEnXVxyXG5cdCk7XHJcblxyXG5cdHJldHVybiAhcmVzdWx0RGF0YSA/IDAgOiBzdW1WYWw7XHJcbn07XHJcblxyXG4vLyBEMDEgfiBEMzEg6rmM7KeA7J2YIOq4iOyVoSDtlanqs4Qo7Jew7IKw7Jy866GcIOyduO2VnCDsi5zqsITshozruYTqsIAg7J6I7Jy866+A66GcIOqzoOugpClcclxuLy8gZXhwb3J0IGNvbnN0IHRvdEFtdCA9IChyZXN1bHREYXRhLCBwcmVmaXgpID0+XHJcbi8vIFx0IXJlc3VsdERhdGFcclxuLy8gXHRcdD8gMFxyXG4vLyBcdFx0OiBfLnN1bUJ5KHJlc3VsdERhdGEsICh2YWw6IGFueSkgPT4ge1xyXG4vLyBcdFx0XHRcdGxldCBzdW1WYWwgPSAwO1xyXG5cclxuLy8gXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSAzMTsgaSsrKSB7XHJcbi8vIFx0XHRcdFx0XHRsZXQgY29sTnVtTm0gPSBwcmVmaXg7XHJcblxyXG4vLyBcdFx0XHRcdFx0aWYgKGkudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XHJcbi8vIFx0XHRcdFx0XHRcdGNvbE51bU5tICs9ICcwJztcclxuLy8gXHRcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0XHRjb2xOdW1ObSArPSBpLnRvU3RyaW5nKCk7XHJcblxyXG4vLyBcdFx0XHRcdFx0c3VtVmFsICs9IHZhbFtjb2xOdW1ObV07XHJcbi8vIFx0XHRcdFx0fVxyXG5cclxuLy8gXHRcdFx0XHRyZXR1cm4gc3VtVmFsO1xyXG4vLyBcdFx0ICB9KTtcclxuXHJcbi8qKlxyXG4gKiByZWFjdC1udW1iZXItZm9ybWF0IOy7qO2KuOuhpOyXkCDsoITri6ztlaAg7ZSE66Gc7Y287Yuw6rCSXHJcbiAqIOywuOqzoDogaHR0cHM6Ly9naXRodWIuY29tL3MteWFkYXYvcmVhY3QtbnVtYmVyLWZvcm1hdFxyXG4gKiDsiKvsnpDrp4wg7J6F66Cl67Cb64qUIO2YleyLnVxyXG4gKiBAcGFyYW0gdmFsIC0g65SU7Y+07Yq46rCSXHJcbiAqIEBwYXJhbSBkaXNwbGF5VHlwZSAtICdpbnB1dCcgfCAndGV4dCdcclxuICovXHJcbmV4cG9ydCBjb25zdCBudW1iZXJGb3JtYXRHZW5lcmFsID0gKFxyXG5cdHZhbDogc3RyaW5nLFxyXG5cdGRpc3BsYXlUeXBlOiAnaW5wdXQnIHwgJ3RleHQnLFxyXG5cdGZvcm1hdD86IHN0cmluZyB8IEZvcm1hdElucHV0VmFsdWVGdW5jdGlvblxyXG4pID0+IHtcclxuXHRjb25zdCBydG5WYWw6IE51bWJlckZvcm1hdFByb3BzID0ge1xyXG5cdFx0ZGVmYXVsdFZhbHVlOiB2YWwsXHJcblx0XHR0aG91c2FuZFNlcGFyYXRvcjogZmFsc2UsXHJcblx0XHRkZWNpbWFsU2NhbGU6IDAsXHJcblx0XHRkaXNwbGF5VHlwZSxcclxuXHRcdGZvcm1hdFxyXG5cdH07XHJcblxyXG5cdHJldHVybiBydG5WYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCDsu6jtirjroaTsl5Ag7KCE64us7ZWgIO2UhOuhnO2NvO2LsOqwklxyXG4gKiDssLjqs6A6IGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcclxuICog7LKc64uo7JyE66GcIOy9pOuniCDssI3ripQg7ZiV7IudXHJcbiAqIEBwYXJhbSB2YWwgLSDrlJTtj7TtirjqsJJcclxuICogQHBhcmFtIGRpc3BsYXlUeXBlIC0gJ2lucHV0JyB8ICd0ZXh0J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdFRob3VuZCA9IChcclxuXHR2YWw6IHN0cmluZyxcclxuXHRkaXNwbGF5VHlwZTogJ2lucHV0JyB8ICd0ZXh0J1xyXG4pOiBOdW1iZXJGb3JtYXRQcm9wcyA9PiB7XHJcblx0Y29uc3QgcnRuVmFsID0gbnVtYmVyRm9ybWF0R2VuZXJhbCh2YWwsIGRpc3BsYXlUeXBlKTtcclxuXHJcblx0cnRuVmFsLmRlY2ltYWxTY2FsZSA9IDA7XHJcblx0cnRuVmFsLnRob3VzYW5kU2VwYXJhdG9yID0gdHJ1ZTtcclxuXHJcblx0cmV0dXJuIHJ0blZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZWFjdC1udW1iZXItZm9ybWF0IOy7qO2KuOuhpOyXkCDsoITri6ztlaAg7ZSE66Gc7Y287Yuw6rCSXHJcbiAqIOywuOqzoDogaHR0cHM6Ly9naXRodWIuY29tL3MteWFkYXYvcmVhY3QtbnVtYmVyLWZvcm1hdFxyXG4gKiDso7zrr7zrsojtmLgg7ZiV7IudXHJcbiAqIEBwYXJhbSB2YWwgLSDrlJTtj7TtirjqsJJcclxuICogQHBhcmFtIGRpc3BsYXlUeXBlIC0gJ2lucHV0JyB8ICd0ZXh0J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdFJlZ05vID0gKFxyXG5cdHZhbDogc3RyaW5nLFxyXG5cdGRpc3BsYXlUeXBlOiAnaW5wdXQnIHwgJ3RleHQnXHJcbik6IE51bWJlckZvcm1hdFByb3BzID0+IHtcclxuXHRjb25zdCBydG5WYWwgPSBudW1iZXJGb3JtYXRHZW5lcmFsKHZhbCwgZGlzcGxheVR5cGUpO1xyXG5cdHJ0blZhbC5mb3JtYXQgPSAnIyMjIyMjLSMjIyMjIyMnO1xyXG5cclxuXHRyZXR1cm4gcnRuVmFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQg7Luo7Yq466Gk7JeQIOyghOuLrO2VoCDtlITroZztjbzti7DqsJJcclxuICog7LC46rOgOiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XHJcbiAqIO2MqOyKpOybjOuTnCDtmJXsi51cclxuICogQHBhcmFtIHZhbCAtIOuUlO2PtO2KuOqwklxyXG4gKiBAcGFyYW0gZGlzcGxheVR5cGUgLSAnaW5wdXQnIHwgJ3RleHQnXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnVtYmVyRm9ybWF0UHdkID0gKFxyXG5cdHZhbDogc3RyaW5nLFxyXG5cdGRpc3BsYXlUeXBlOiAnaW5wdXQnIHwgJ3RleHQnXHJcbik6IE51bWJlckZvcm1hdFByb3BzID0+IHtcclxuXHRjb25zdCBydG5WYWw6IE51bWJlckZvcm1hdFByb3BzID0ge1xyXG5cdFx0ZGVmYXVsdFZhbHVlOiB2YWwsXHJcblx0XHR0eXBlOiAncGFzc3dvcmQnLFxyXG5cdFx0ZGlzcGxheVR5cGVcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gcnRuVmFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQg7Luo7Yq466Gk7JeQIOyghOuLrO2VoCDtlITroZztjbzti7DqsJJcclxuICog7LC46rOgOiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XHJcbiAqIOyGjOyImOygkCDtmJXtg5woZXguIDcyMy4xNTUxMilcclxuICogQHBhcmFtIHZhbCAtIOuUlO2PtO2KuOqwklxyXG4gKiBAcGFyYW0gZGlzcGxheVR5cGUgLSAnaW5wdXQnIHwgJ3RleHQnXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnVtYmVyRm9ybWF0RmxvYXQgPSAoXHJcblx0dmFsOiBzdHJpbmcsXHJcblx0ZGlzcGxheVR5cGU6ICdpbnB1dCcgfCAndGV4dCdcclxuKTogTnVtYmVyRm9ybWF0UHJvcHMgPT4ge1xyXG5cdGNvbnN0IHJ0blZhbDogTnVtYmVyRm9ybWF0UHJvcHMgPSB7XHJcblx0XHRkZWZhdWx0VmFsdWU6IHZhbCxcclxuXHRcdGRpc3BsYXlUeXBlLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAxMFxyXG5cdH07XHJcblxyXG5cdHJldHVybiBydG5WYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCDsu6jtirjroaTsl5Ag7KCE64us7ZWgIO2UhOuhnO2NvO2LsOqwklxyXG4gKiDssLjqs6A6IGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcclxuICog64Kg7KecIC0gWVlZWS1NTS1ERCDtmJXsi51cclxuICogQHBhcmFtIHZhbCAtIOuUlO2PtO2KuOqwklxyXG4gKiBAcGFyYW0gZGlzcGxheVR5cGUgLSAnaW5wdXQnIHwgJ3RleHQnXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnVtYmVyRm9ybWF0WVlZWU1NREQgPSAoXHJcblx0dmFsOiBzdHJpbmcsXHJcblx0ZGlzcGxheVR5cGU6ICdpbnB1dCcgfCAndGV4dCdcclxuKSA9PiB7XHJcblx0Y29uc3QgcnRuVmFsOiBOdW1iZXJGb3JtYXRQcm9wcyA9IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogdmFsLFxyXG5cdFx0Zm9ybWF0OiAnIyMjIy0jIy0jIycsXHJcblx0XHRwbGFjZWhvbGRlcjogJ1lZWVktTU0tREQnLFxyXG5cdFx0bWFzazogWydZJywgJ1knLCAnWScsICdZJywgJ00nLCAnTScsICdEJywgJ0QnXSxcclxuXHRcdGRpc3BsYXlUeXBlXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHJ0blZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDtg4Dqsp8ganNvbiDsmKTruIzsoJ3tirgodGFyZ2V0T2JqKeyXkCBiYXNlIGpzb24g7Jik67iM7KCd7Yq4KGJhc2VPYmop7J2YIOqwkuydhCDrs7Xsgqzsl5Ag7YKk6rCSIOq4sOykgOycvOuhnCB1cGRhdGUg7ZWc64ukLlxyXG4gKiBAcGFyYW0gYmFzZU9iaiB1cGRhdGUg7J2YIOq4sOykgOydtCDrkJjripQgYmFzZSBqc29uIOyYpOu4jOygne2KuFxyXG4gKiBAcGFyYW0gdGFyZ2V0T2JqIHVwZGF0ZSDrjIDsg4HsnbQg65CY64qUIHRhcmdldCBqc29uIOyYpOu4jOygne2KuFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU9ialdpdGhLZXlzID0gKGJhc2VPYmosIHRhcmdldE9iaikgPT4ge1xyXG5cdF8ua2V5cyhiYXNlT2JqKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRpZiAoXy5oYXModGFyZ2V0T2JqLCBrZXkpKSB7XHJcblx0XHRcdHRhcmdldE9ialtrZXldID0gYmFzZU9ialtrZXldO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIO2UhOuhnOyLnOyggCDqsrDqs7zqsJIg6rCA7KC47Jik6riwIO2MjOudvOuplO2EsCDtg4DsnoVcclxuICogQGludGVyZmFjZSBJUHJvY091dEN1cnNvclJlc3VsdFxyXG4gKi9cclxuaW50ZXJmYWNlIElQcm9jT3V0Q3Vyc29yUmVzdWx0IHtcclxuXHRncWxEYXRhOiBhbnk7XHJcblx0ZGVmYXVsdFZhbHVlPzogYW55O1xyXG5cdGlzT25seVNpbmdsZVJvdz86IGJvb2xlYW47XHJcblx0Y3Vyc29yTmFtZT86IHN0cmluZztcclxuXHRjYWxsYmFjaz86IChyZXN1bHREYXRhOiBhbnksIHRvdGFsQ291bnQ/OiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qKiDtlITroZzsi5zsoIAg65iQ64qUIOuLpOydtOuCmOuvuey/vOumrOqysOqzvOqwkiDqsIDsoLjsmKTquLAgKi9cclxuZXhwb3J0IGNvbnN0IGdldFByb2NPdXRDdXJzb3JSZXN1bHQgPSA8VCA9IGFueT4oe1xyXG5cdGdxbERhdGEsXHJcblx0ZGVmYXVsdFZhbHVlLFxyXG5cdGlzT25seVNpbmdsZVJvdyxcclxuXHRjdXJzb3JOYW1lLFxyXG5cdGNhbGxiYWNrXHJcbn06IElQcm9jT3V0Q3Vyc29yUmVzdWx0KSA9PiB7XHJcblx0Y29uc3QgZmllbGROYW1lID0gZ3FsRGF0YSA/IE9iamVjdC5rZXlzKGdxbERhdGEpWzBdIDogJyc7XHJcblx0Y29uc3QgZGF0YSA9IGdxbERhdGEgPyBncWxEYXRhW2ZpZWxkTmFtZV0gOiBudWxsO1xyXG5cdGNvbnN0IG91dFJlc3VsdCA9IGRhdGEgPyBkYXRhLk9VVF9SRVNVTFQgOiBudWxsO1xyXG5cdGNvbnN0IG91dFJldENvZGUgPSBvdXRSZXN1bHQgPyBkYXRhLk9VVF9SRVRfQ09ERSA6ICc5OSc7XHJcblx0bGV0IG91dEN1cnNvclJlc3VsdCA9IG51bGw7XHJcblx0Y29uc3QgY3VyTmFtZSA9IGN1cnNvck5hbWUgPz8gJ09VVF9SRVRfQ1VSU09SJztcclxuXHJcblx0Y29uc29sZS5sb2coZmllbGROYW1lKTtcclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRjb25zb2xlLmxvZyhvdXRSZXN1bHQpO1xyXG5cdGNvbnNvbGUubG9nKG91dFJldENvZGUpO1xyXG5cdGNvbnNvbGUubG9nKGN1ck5hbWUpO1xyXG5cclxuXHRpZiAob3V0UmVzdWx0ICYmIG91dFJldENvZGUgPT09ICcwMCcgJiYgb3V0UmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnNvbGUubG9nKCdpbicpO1xyXG5cdFx0Y29uc3QgcmV0Q3Vyc29yID0gb3V0UmVzdWx0WzBdW2N1ck5hbWVdID8/IG91dFJlc3VsdDtcclxuXHRcdGNvbnNvbGUubG9nKHJldEN1cnNvcik7XHJcblx0XHRvdXRDdXJzb3JSZXN1bHQgPVxyXG5cdFx0XHRyZXRDdXJzb3I/Lmxlbmd0aCA+IDBcclxuXHRcdFx0XHQ/IHJldEN1cnNvclxyXG5cdFx0XHRcdDogIXJldEN1cnNvciAmJiBvdXRSZXN1bHQubGVuZ3RoID4gMFxyXG5cdFx0XHRcdD8gb3V0UmVzdWx0XHJcblx0XHRcdFx0OiBudWxsO1xyXG5cdH1cclxuXHJcblx0Ly8gcmV0dXJuIHZhbHVlXHJcblx0Y29uc3QgcnRuVmFsdWUgPSBvdXRDdXJzb3JSZXN1bHRcclxuXHRcdD8gb3V0Q3Vyc29yUmVzdWx0XHJcblx0XHQ6IGRlZmF1bHRWYWx1ZVxyXG5cdFx0PyBkZWZhdWx0VmFsdWVcclxuXHRcdDogbnVsbDtcclxuXHJcblx0Ly8g7ZSE66Gc7Iuc7KCAIOumrO2EtCDsu6zrn7zspJEgVE9UQUxfQ09VTlQg6rCAIOyeiOycvOuptCDrsJjtmZhcclxuXHRjb25zdCB0b3RhbENvdW50ID1cclxuXHRcdG91dEN1cnNvclJlc3VsdCAmJiBvdXRDdXJzb3JSZXN1bHQubGVuZ3RoID4gMCAmJiBvdXRDdXJzb3JSZXN1bHRbMF0uVE9UQUxfQ09VTlRcclxuXHRcdFx0PyBvdXRDdXJzb3JSZXN1bHRbMF0uVE9UQUxfQ09VTlRcclxuXHRcdFx0OiAwO1xyXG5cclxuXHQvLyDsvZzrsLHtlajsiJgg7IiY7ZaJXHJcblx0Y2FsbGJhY2s/LihydG5WYWx1ZSwgdG90YWxDb3VudCk7XHJcblxyXG5cdHJldHVybiBydG5WYWx1ZSBhcyBUO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOyYpOu4jOygne2KuCBhcnJheSDqsJLrk6TspJHsl5DshJxcclxuICog7KeA7KCV65CcIHZhbHVlRmllbGTrqoUgbGFiZWxGaWVsZOuqheyXkCDtlbTri7ntlZjripQg6rCS7J2EIOywvuydgOuSpFxyXG4gKiB2YWx1ZSAvIGxhYmVsIOuwsOyXtOqwkuycvOuhnCDrsJjtmZjtlahcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0T3B0aW9uID0gKFxyXG5cdHNlbGVjdERhdGE6IGFueVtdLFxyXG5cdHZhbHVlRmllbGQ6IHN0cmluZyxcclxuXHRsYWJlbEZpZWxkOiBzdHJpbmdcclxuKTogQXJyYXk8e1xyXG5cdHZhbHVlOiBzdHJpbmc7XHJcblx0bGFiZWw6IHN0cmluZztcclxufT4gPT4ge1xyXG5cdGNvbnN0IHJlc3VsdCA9IF8ubWFwKHNlbGVjdERhdGEsIHZhbCA9PiB7XHJcblx0XHRjb25zdCBvcHQgPSB7XHJcblx0XHRcdHZhbHVlOiB2YWxbdmFsdWVGaWVsZF0sXHJcblx0XHRcdGxhYmVsOiB2YWxbbGFiZWxGaWVsZF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIG9wdDtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDsl5HshYDri6TsmrTroZzrk5wg7YyM652866mU7YSwIO2DgOyehVxyXG4gKiBAaW50ZXJmYWNlIElFeGNlbERvd25cclxuICovXHJcbi8vIGludGVyZmFjZSBJRXhjZWxEb3duIHtcclxuLy8gXHRyZWZldGNoTWV0aG9kOiAodmFyczogYW55KSA9PiBQcm9taXNlPGFueT47XHJcbi8vIFx0cmVmZXRjaFZhcnM6IGFueTtcclxuLy8gXHRyZWZFeGNlbENvbXBvbmVudDogTXV0YWJsZVJlZk9iamVjdDxJUmVmQWdFeGNlbEV4cG9ydD47XHJcbi8vIH1cclxuXHJcbi8qKlxyXG4gKiDsl5HshYDri6TsmrTroZzrk5xcclxuICogQHBhcmFtIHBhcmFtcyBJRXhjZWxEb3duIHR5cGVcclxuICovXHJcbi8vIGV4cG9ydCBjb25zdCBleGNlbERvd24gPSBhc3luYyAocGFyYW1zOiBJRXhjZWxEb3duKSA9PiB7XHJcbi8vIFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwYXJhbXMucmVmZXRjaE1ldGhvZCh7XHJcbi8vIFx0XHQuLi5wYXJhbXMucmVmZXRjaFZhcnNcclxuLy8gXHR9KTtcclxuXHJcbi8vIFx0Z2V0UHJvY091dEN1cnNvclJlc3VsdCh7XHJcbi8vIFx0XHRncWxEYXRhOiBkYXRhLFxyXG4vLyBcdFx0Y2FsbGJhY2s6IChyZXNEYXRhLCB0b3RhbENvdW50KSA9PiB7XHJcbi8vIFx0XHRcdHBhcmFtcy5yZWZFeGNlbENvbXBvbmVudC5jdXJyZW50LnNldERhdGEocmVzRGF0YSk7XHJcbi8vIFx0XHRcdHBhcmFtcy5yZWZFeGNlbENvbXBvbmVudC5jdXJyZW50LmV4cG9ydEV4Y2VsKCk7XHJcbi8vIFx0XHR9XHJcbi8vIFx0fSk7XHJcbi8vIH07XHJcblxyXG4vKiog6rKA7IOJ7J287J6QIOq4sOykgCBkdXJhdGlvbiDrgqDsp5zquYzsp4Ag67Cw7Je0IOuwmO2ZmFxyXG4gKiBkYXRlOiDquLDspIDrgqDsp5wgKFlZWVlNTUREIO2YleyLnSlcclxuICogZHVyYXRpb246IOuwmO2ZmO2VoCDrsJTsmrTrjZTrpqwg64Kg7KecXHJcbiAqIGV4LiAtNyDsnbTrqbQgLTfsnbzsp7jrtoDthLAg6riw7KSA64Kg7Kec6rmM7KeAIOuwmO2ZmCwgNyDsnbTrqbQg6riw7KSA64Kg7Kec67aA7YSwIDfsnbzsp7jquYzsp4Ag67CY7ZmYXHJcbiAqIG91dEZvcm1hdDogb3V0cHV0IOuwmO2ZmCDrgqDsp5wg7ZiV7IudXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24qIGdldER1ZWRheUFycmF5KFxyXG5cdGRhdGU6IHN0cmluZyxcclxuXHRkdXJhdGlvbjogbnVtYmVyLFxyXG5cdG91dEZvcm1hdDogc3RyaW5nXHJcbikge1xyXG5cdGNvbnN0IG5vd0RheSA9IGRheWpzKGRhdGUsICdZWVlZTU1ERCcpO1xyXG5cclxuXHRpZiAoZHVyYXRpb24gPCAwKSB7XHJcblx0XHRmb3IgKGxldCB4ID0gNjsgeCA+IDA7IHgtLSkge1xyXG5cdFx0XHR5aWVsZCBkYXlqcyhub3dEYXkpXHJcblx0XHRcdFx0LmFkZCh4ICogLTEsICdkYXknKVxyXG5cdFx0XHRcdC5mb3JtYXQoJ01NL0REJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0eWllbGQgbm93RGF5LmZvcm1hdCgnTU0vREQnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0eWllbGQgbm93RGF5LmZvcm1hdCgnTU0vREQnKTtcclxuXHJcblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IGR1cmF0aW9uOyB4KyspIHtcclxuXHRcdFx0eWllbGQgZGF5anMobm93RGF5KVxyXG5cdFx0XHRcdC5hZGQoeCwgJ2RheScpXHJcblx0XHRcdFx0LmZvcm1hdCgnTU0vREQnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9