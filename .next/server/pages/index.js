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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routeLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/routeLink */ "./src/utils/routeLink.ts");
/* harmony import */ var _utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/viewUtils */ "./src/utils/viewUtils.ts");
/* harmony import */ var _utils_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/withAuth */ "./src/utils/withAuth.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const index = ({
  router
}) => {
  console.log('index');
  const data = {
    getMenuAuth: {
      OUT_RET_CODE: "00",
      OUT_RET_MSG: "정상",
      OUT_RESULT: [{
        MENU_ID: "login",
        DEFAULT_URL: "/login",
        AUTH_GUBUN: "N",
        __typename: "ENTITY_MENU_AUTH"
      }, {
        MENU_ID: "adm0020",
        DEFAULT_URL: "/adm0020",
        AUTH_GUBUN: "N",
        __typename: "ENTITY_MENU_AUTH"
      }]
    }
  }; // 메뉴 권한 DATA

  const resultMenuAuthData = Object(_utils_viewUtils__WEBPACK_IMPORTED_MODULE_2__["getProcOutCursorResult"])({
    gqlData: data
  });
  console.log(resultMenuAuthData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // 메뉴 디폴트 URL 로 리다이렉트
    if (data) {
      // const defaultUrl = resultMenuAuthData
      // 	? resultMenuAuthData[0].DEFAULT_URL
      // 	: '/login';
      const query = 'adm0020';
      const defaultUrl = `/login/${query}`;
      router.push(defaultUrl);
    }
  }, [data]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_utils_routeLink__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(index)));

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

  if (outResult && outRetCode === '00' && outResult.length > 0) {
    var _outResult$0$curName;

    const retCursor = (_outResult$0$curName = outResult[0][curName]) !== null && _outResult$0$curName !== void 0 ? _outResult$0$curName : outResult;
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

/***/ "./src/utils/withAuth.tsx":
/*!********************************!*\
  !*** ./src/utils/withAuth.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\next-project\\src\\utils\\withAuth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const withAuth = (AppComponent, menuAuthCheck = true) => {
  return class AuthComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(_ref) {
      let {
        apolloClient
      } = _ref,
          ctx = _objectWithoutProperties(_ref, ["apolloClient"]);

      let appProps = {};

      if (AppComponent.getInitialProps) {
        const initProps = _objectSpread({
          apolloClient
        }, ctx);

        appProps = await AppComponent.getInitialProps(initProps);
      }

      const res = {}; //const refUrl = !!ctx.pathname ? ctx.pathname : '';

      return _objectSpread({}, appProps);
    }

    constructor(props) {
      super(props);
      this.state = {
        isOpen: true,
        defaultUrl: '/login',
        modalBodyContents: ''
      };
    }

    render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(AppComponent, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 22
        }
      })));
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW52Q29uZmlnL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9yb3V0ZUxpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZpZXdVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvd2l0aEF1dGgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsibmV4dFJvdXRlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkIiwibmFtZSIsInBhZ2UiLCJwYXR0ZXJuIiwiaW5kZXgiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImdldE1lbnVBdXRoIiwiT1VUX1JFVF9DT0RFIiwiT1VUX1JFVF9NU0ciLCJPVVRfUkVTVUxUIiwiTUVOVV9JRCIsIkRFRkFVTFRfVVJMIiwiQVVUSF9HVUJVTiIsIl9fdHlwZW5hbWUiLCJyZXN1bHRNZW51QXV0aERhdGEiLCJnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0IiwiZ3FsRGF0YSIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiZGVmYXVsdFVybCIsInB1c2giLCJ3aXRoQXV0aCIsIndpdGhSb3V0ZXIiLCJ0b0RlZmF1bHQiLCJ2YWwiLCJkZWZhdWx0VmFsdWUiLCJfIiwiZGVmYXVsdFRvIiwiZSIsInRvRGVmYXVsdEludCIsInVuZGVmaW5lZCIsIk51bWJlciIsImZsb29yQ2FsYyIsInBvaW50Q2FsYyIsIk1hdGgiLCJmbG9vciIsImZsb29yQ2FsYzEwIiwicGFyYW1WYWwiLCJwYXJzZUZsb2F0IiwiY29udmVydEhIMjRtbVRleHQiLCJtaXNzVmFsIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiY29udmVydENvbXBhbnlub1RleHQiLCJjb252ZXJ0WmlwQ29kZVRleHQiLCJsZW5ndGgiLCJjb252ZXJ0QWRkclppcENvZGUiLCJ6aXBDb2RlIiwiYWRkcjEiLCJhZGRyMiIsImNvbnZlcnRQaG9uZVRleHQiLCJ0eXBlIiwiZm9ybWF0TnVtIiwiaW5kZXhPZiIsImNvbnZlcnREYXRlVGV4dCIsInJlc3VsdCIsInNsaWNlIiwiZGF5anMiLCJmb3JtYXQiLCJjb252ZXJ0RGF0ZVRleHRGb3JtYXQiLCJzdW1Db2wiLCJyZXN1bHREYXRhIiwiY29sTmFtZSIsInN1bVZhbCIsInN1bUJ5Iiwic3VtQXJyYXlDb2wiLCJhcnJheUNvbE5hbWUiLCJydG5WYWwiLCJlYWNoIiwiY29sIiwiY291bnRDb2wiLCJmaWx0ZXIiLCJ0b3RBbXQiLCJwcmVmaXgiLCJudW1iZXJGb3JtYXRHZW5lcmFsIiwiZGlzcGxheVR5cGUiLCJ0aG91c2FuZFNlcGFyYXRvciIsImRlY2ltYWxTY2FsZSIsIm51bWJlckZvcm1hdFRob3VuZCIsIm51bWJlckZvcm1hdFJlZ05vIiwibnVtYmVyRm9ybWF0UHdkIiwibnVtYmVyRm9ybWF0RmxvYXQiLCJudW1iZXJGb3JtYXRZWVlZTU1ERCIsInBsYWNlaG9sZGVyIiwibWFzayIsInVwZGF0ZU9ialdpdGhLZXlzIiwiYmFzZU9iaiIsInRhcmdldE9iaiIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaGFzIiwiaXNPbmx5U2luZ2xlUm93IiwiY3Vyc29yTmFtZSIsImNhbGxiYWNrIiwiZmllbGROYW1lIiwiT2JqZWN0Iiwib3V0UmVzdWx0Iiwib3V0UmV0Q29kZSIsIm91dEN1cnNvclJlc3VsdCIsImN1ck5hbWUiLCJyZXRDdXJzb3IiLCJydG5WYWx1ZSIsInRvdGFsQ291bnQiLCJUT1RBTF9DT1VOVCIsImNvbnZlcnRPcHRpb24iLCJzZWxlY3REYXRhIiwidmFsdWVGaWVsZCIsImxhYmVsRmllbGQiLCJtYXAiLCJvcHQiLCJ2YWx1ZSIsImxhYmVsIiwiZ2V0RHVlZGF5QXJyYXkiLCJkYXRlIiwiZHVyYXRpb24iLCJvdXRGb3JtYXQiLCJub3dEYXkiLCJ4IiwiQXBwQ29tcG9uZW50IiwibWVudUF1dGhDaGVjayIsIkF1dGhDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImFwb2xsb0NsaWVudCIsImN0eCIsImFwcFByb3BzIiwiaW5pdFByb3BzIiwicmVzIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaXNPcGVuIiwibW9kYWxCb2R5Q29udGVudHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENB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QUE5RDtBQTBDSCxDQS9DRDs7QUFpRGU5Ryx1RUFBZixFOzs7Ozs7Ozs7OztBQzVEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsIi8qKlxyXG4gKiBAdHlwZWRlZiB7IGltcG9ydChcIm5leHQtcm91dGVzXCIpLlJlZ2lzdHJ5IH0gTmV4dFJvdXRlc1xyXG4gKi9cclxuY29uc3QgbmV4dFJvdXRlcyA9IHJlcXVpcmUoJ25leHQtcm91dGVzJyk7XHJcblxyXG4vKipcclxuICogQHR5cGUgeyBOZXh0Um91dGVzIH1cclxuICovXHJcbihtb2R1bGUuZXhwb3J0cyA9IG5leHRSb3V0ZXMoKSlcclxuXHQvLyDtjpjsnbTsp4DrqoUsIO2MqO2EtFxyXG5cdC5hZGQoeyBuYW1lOiAnaW5kZXgnLCBwYWdlOiAnL2luZGV4JywgcGF0dGVybjogJy8nIH0pXHJcblx0LmFkZCh7IG5hbWU6ICdsb2dpbicsIHBhZ2U6ICcvbG9naW4nLCBwYXR0ZXJuOiAnL2xvZ2luJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnbG9naW5SZWZ1cmwnLCBwYWdlOiAnL2xvZ2luJywgcGF0dGVybjogJy9sb2dpbi86cmVmdXJsJyB9KVxyXG5cdC5hZGQoe1xyXG5cdFx0bmFtZTogJ19lcnJvclJlZlZhbCcsXHJcblx0XHRwYWdlOiAnL19lcnJvcicsXHJcblx0XHRwYXR0ZXJuOiAnL19lcnJvci86c3RhdHVzQ29kZS86ZXJyTmFtZT8vOmVyck1zZz8vOmVyclN0YWNrPydcclxuXHR9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwMTAnLCBwYWdlOiAnL2FkbTIwMTAnLCBwYXR0ZXJuOiAnL2FkbTIwMTAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjAyMCcsIHBhZ2U6ICcvYWRtMjAyMCcsIHBhdHRlcm46ICcvYWRtMjAyMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG0yMDMwJywgcGFnZTogJy9hZG0yMDMwJywgcGF0dGVybjogJy9hZG0yMDMwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTIwNDAnLCBwYWdlOiAnL2FkbTIwNDAnLCBwYXR0ZXJuOiAnL2FkbTIwNDAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtMjIxMCcsIHBhZ2U6ICcvYWRtMjIxMCcsIHBhdHRlcm46ICcvYWRtMjIxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MDEwJywgcGFnZTogJy9hZG02MDEwJywgcGF0dGVybjogJy9hZG02MDEwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYwMjAnLCBwYWdlOiAnL2FkbTYwMjAnLCBwYXR0ZXJuOiAnL2FkbTYwMjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjMxMCcsIHBhZ2U6ICcvYWRtNjMxMCcsIHBhdHRlcm46ICcvYWRtNjMxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzIwJywgcGFnZTogJy9hZG02MzIwJywgcGF0dGVybjogJy9hZG02MzIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzMzAnLCBwYWdlOiAnL2FkbTYzMzAnLCBwYXR0ZXJuOiAnL2FkbTYzMzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNjM0MCcsIHBhZ2U6ICcvYWRtNjM0MCcsIHBhdHRlcm46ICcvYWRtNjM0MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG02MzUwJywgcGFnZTogJy9hZG02MzUwJywgcGF0dGVybjogJy9hZG02MzUwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTYzNjAnLCBwYWdlOiAnL2FkbTYzNjAnLCBwYXR0ZXJuOiAnL2FkbTYzNjAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzAxMCcsIHBhZ2U6ICcvYWRtNzAxMCcsIHBhdHRlcm46ICcvYWRtNzAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDIwJywgcGFnZTogJy9hZG03MDIwJywgcGF0dGVybjogJy9hZG03MDIwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwMzAnLCBwYWdlOiAnL2FkbTcwMzAnLCBwYXR0ZXJuOiAnL2FkbTcwMzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtNzA0MCcsIHBhZ2U6ICcvYWRtNzA0MCcsIHBhdHRlcm46ICcvYWRtNzA0MCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG03MDYwJywgcGFnZTogJy9hZG03MDYwJywgcGF0dGVybjogJy9hZG03MDYwJyB9KVxyXG5cdC5hZGQoeyBuYW1lOiAnL2FkbTcwNzAnLCBwYWdlOiAnL2FkbTcwNzAnLCBwYXR0ZXJuOiAnL2FkbTcwNzAnIH0pXHJcblx0LmFkZCh7IG5hbWU6ICcvYWRtOTAxMCcsIHBhZ2U6ICcvYWRtOTAxMCcsIHBhdHRlcm46ICcvYWRtOTAxMCcgfSlcclxuXHQuYWRkKHsgbmFtZTogJy9hZG05MDIwJywgcGFnZTogJy9hZG05MDIwJywgcGF0dGVybjogJy9hZG05MDIwJyB9KTtcclxuXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH0gZnJvbSAnfi91dGlscy9yb3V0ZUxpbmsnO1xyXG5pbXBvcnQgeyBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0IH0gZnJvbSAnfi91dGlscy92aWV3VXRpbHMnO1xyXG5pbXBvcnQgeyBFbnRpdHlfTWVudV9BdXRoIH0gZnJvbSAnfi9nZW4vZ3JhcGhxbC10eXBlcyc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICd+L3V0aWxzL3dpdGhBdXRoJztcclxuaW1wb3J0IHJlZGlyZWN0IGZyb20gJ34vdXRpbHMvcmVkaXJlY3QnO1xyXG5cclxuLyoqIHByb3BzICovXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgcm91dGVyOiBTaW5nbGV0b25Sb3V0ZXI7XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcm91dGVyIH0pID0+IHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ2luZGV4Jyk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBnZXRNZW51QXV0aCA6IHtcclxuICAgICAgICAgICAgT1VUX1JFVF9DT0RFIDogXCIwMFwiXHJcbiAgICAgICAgICAgICwgT1VUX1JFVF9NU0cgOiBcIuygleyDgVwiXHJcbiAgICAgICAgICAgICwgT1VUX1JFU1VMVCA6IFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgTUVOVV9JRCA6IFwibG9naW5cIiAsREVGQVVMVF9VUkwgOiBcIi9sb2dpblwiICxBVVRIX0dVQlVOIDogXCJOXCIsIF9fdHlwZW5hbWUgOiBcIkVOVElUWV9NRU5VX0FVVEhcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBNRU5VX0lEIDogXCJhZG0wMDIwXCIgLERFRkFVTFRfVVJMIDogXCIvYWRtMDAyMFwiICxBVVRIX0dVQlVOIDogXCJOXCIsIF9fdHlwZW5hbWUgOiBcIkVOVElUWV9NRU5VX0FVVEhcIn1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g66mU64m0IOq2jO2VnCBEQVRBXHJcbiAgICBjb25zdCByZXN1bHRNZW51QXV0aERhdGEgPSBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0PEVudGl0eV9NZW51X0F1dGhbXT4oe1xyXG4gICAgICAgIGdxbERhdGE6IGRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdE1lbnVBdXRoRGF0YSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyDrqZTribQg65SU7Y+07Yq4IFVSTCDroZwg66as64uk7J2066CJ7Yq4XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHQvLyBjb25zdCBkZWZhdWx0VXJsID0gcmVzdWx0TWVudUF1dGhEYXRhXHJcblx0XHRcdC8vIFx0PyByZXN1bHRNZW51QXV0aERhdGFbMF0uREVGQVVMVF9VUkxcclxuXHRcdFx0Ly8gXHQ6ICcvbG9naW4nO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAnYWRtMDAyMCc7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRVcmwgPSBgL2xvZ2luLyR7cXVlcnl9YDtcclxuXHRcdFx0cm91dGVyLnB1c2goZGVmYXVsdFVybCk7XHJcblx0XHR9XHJcblx0fSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gPD48Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKHdpdGhSb3V0ZXIoaW5kZXgpKTtcclxuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciwgTmV4dFJvdXRlciwgU2luZ2xldG9uUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi9lbnZDb25maWcvcm91dGVzJztcclxuXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IHsgTGluaywgUm91dGVyLCB3aXRoUm91dGVyLCBOZXh0Um91dGVyLCBTaW5nbGV0b25Sb3V0ZXIgfTtcclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTXV0YWJsZVJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0UHJvcHMsIEZvcm1hdElucHV0VmFsdWVGdW5jdGlvbiB9IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG4vL2ltcG9ydCB7IFZhbHVlRm9ybWF0dGVyUGFyYW1zIH0gZnJvbSAnQGFnLWdyaWQtZW50ZXJwcmlzZS9hbGwtbW9kdWxlcyc7XHJcbi8vaW1wb3J0IHsgSVJlZkFnRXhjZWxFeHBvcnQgfSBmcm9tICd+L2NvbXBvbmVudHMvYWdncmlkL0FnRXhjZWxFeHBvcnQnO1xyXG5cclxuLyoqXHJcbiAqICBkZWZhdWx0IHZhbHVlIOyEuO2MhVxyXG4gKiAgQHBhcmFtIHZhbCAtIG9yaWdpbmFsIHZhbHVlXHJcbiAqICBAZGVmYXVsdFZhbHVlIC0g64yA7LK0IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdG9EZWZhdWx0ID0gKHZhbDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0ZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlID8/ICcnO1xyXG5cclxuXHRcdHJldHVybiB2YWwgPT09ICcnID8gZGVmYXVsdFZhbHVlIDogXy5kZWZhdWx0VG8odmFsLCBkZWZhdWx0VmFsdWUpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGRlZmF1bHQgdmFsdWUg7IS47YyFIC0gcGFyc2UgaW50XHJcbiAqIEBwYXJhbSB2YWwg7Iir7J6Q7ZiV7YOc7J2YIOyKpO2KuOungSDqsJJcclxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDrjIDssrQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b0RlZmF1bHRJbnQgPSAodmFsPzogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU/OiBudW1iZXIpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Ly8gZGVmYXVsdFZhbHVlIOyXkCBudWxsIOuhnCDshYvtjIXtlZjripQg6rK97Jqw64+EIOyeiOycvOuvgOuhnCB1bmRlZmluZWQg7JeQIOuMgO2VtOyEnOunjCAwIOycvOuhnCDshKTsoJXtlZzri6QuXHJcblx0XHRkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgPT09IHVuZGVmaW5lZCA/IDAgOiBkZWZhdWx0VmFsdWU7XHJcblxyXG5cdFx0cmV0dXJuICEhdmFsID8gTnVtYmVyKHZhbCkgOiBkZWZhdWx0VmFsdWU7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICogIOyGjOyImOygkCDsnpDrpqzsiJjrp4ztgbwg7J6Y65+s7IScIOuwmO2ZmFxyXG4gKiBAcGFyYW0gdmFsICAtIOuwlOq/gCAg7Iir7J6QXHJcbiAqIEBwYXJhbSBwb2ludENhbGMgLSAxMDog7IaM7IiY7KCQIO2VnOyekOumrOunjCDrgqjquLTri6QsIDEwMDog7IaM7IiY7KCQIDLsnpDrpqwuLi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmbG9vckNhbGMgPSAodmFsLCBwb2ludENhbGMpID0+IHtcclxuXHRyZXR1cm4gTWF0aC5mbG9vcih2YWwgKiBwb2ludENhbGMpIC8gcG9pbnRDYWxjO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICDshozsiJjsoJAg7ZWc7J6Q66as6rmM7KeA66eMIO2RnOyLnO2VtOyEnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCAgLSDrsJTqv4AgIOyIq+yekFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZsb29yQ2FsYzEwID0gdmFsID0+IHtcclxuXHRjb25zdCBwYXJhbVZhbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xyXG5cclxuXHRyZXR1cm4gZmxvb3JDYWxjKHBhcmFtVmFsLCAxMCk7XHJcbn07XHJcblxyXG4vKipcclxuICogIOyGjOyImOygkCDtlZzsnpDrpqzquYzsp4Drp4wg7ZGc7Iuc7ZWY6rOgIOyynOuLqOychCDsvaTrp4jssI3slrTshJwg7Iqk7Yq466eBIO2Yle2DnOuhnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCAgLSDrsJTqv4AgIOyIq+yekFxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGdyaWRGbG9vckNhbGNQYXJzZSA9ICh2YWw6IGFueSkgPT4ge1xyXG4vLyBcdHJldHVybiB2YWwudmFsdWUgIT09ICcnICYmIHZhbC52YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbi8vIFx0XHQ/IGNvbnZlcnRNb25leVRleHQoZmxvb3JDYWxjMTAodmFsLnZhbHVlKS50b1N0cmluZygpKVxyXG4vLyBcdFx0OiAnJztcclxuLy8gfTtcclxuXHJcbi8qKlxyXG4gKiAg64+I7ZGc7IucIOy9pOuniCDtkZztmITsnLzroZwgY29udmVydCAtIOydvOuwmOyIq+yekO2Yle2DnOydmCDsiqTtirjrp4HsnYQg7L2k66eI64uo7JyE66GcIOywjeyWtOyEnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCDsiKvsnpDtmJXtg5zsnZggdmFsdWVcclxuICovXHJcbi8vIGV4cG9ydCBjb25zdCBjb252ZXJ0TW9uZXlUZXh0ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgVmFsdWVGb3JtYXR0ZXJQYXJhbXMpID0+IHtcclxuLy8gXHQvLyBhZy1ncmlk7J2YIFZhbHVlRm9ybWF0dGVyUGFyYW1zIO2Yle2DnCDsnbjsp4Ag7Jes67aAIHRydWUvZmFsc2VcclxuLy8gXHRjb25zdCBpc1ZhbHVlRm9ybWF0ID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgJ2FwaScgaW4gKHZhbCBhcyBhbnkpO1xyXG5cclxuLy8gXHRjb25zdCBtb25leVZhbCA9XHJcbi8vIFx0XHR0eXBlb2YgdmFsID09PSAnbnVtYmVyJ1xyXG4vLyBcdFx0XHQ/IHZhbC50b1N0cmluZygpXHJcbi8vIFx0XHRcdDogaXNWYWx1ZUZvcm1hdFxyXG4vLyBcdFx0XHQ/ICh2YWwgYXMgVmFsdWVGb3JtYXR0ZXJQYXJhbXMpLnZhbHVlPy50b1N0cmluZygpXHJcbi8vIFx0XHRcdDogdmFsO1xyXG5cclxuLy8gXHRyZXR1cm4gISFtb25leVZhbCA/IG1vbmV5VmFsLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAnMCc7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVydEhIMjRtbVRleHQgPSAodmFsOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuXHRjb25zdCBtaXNzVmFsID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyB2YWwudG9TdHJpbmcoKSA6IHZhbDtcclxuXHJcblx0cmV0dXJuICEhbWlzc1ZhbCA/IG1pc3NWYWwucmVwbGFjZSgvXFxCKD89KFxcZHsyfSkrKD8hXFxkKSkvZywgJzonKSA6ICcnO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOyCrOyXheyekOuyiO2YuCDrs4Dqsr1cclxuICogQHBhcmFtIHZhbCAxNTE1MTIxNTE1IC0+IDE1MS01MS0yMTUxNVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRDb21wYW55bm9UZXh0ID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcblx0cmV0dXJuIHZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGR7Mn0pKFxcZHs1fSkvLCAnJDEtJDItJDMnKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBaSVBDT0RFIOuzgOqyvSA1OTAzNiAtPiA1OS0wMzZcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb252ZXJ0WmlwQ29kZVRleHQgPSAodmFsOiBzdHJpbmcpID0+IHtcclxuXHRpZiAoIXZhbCkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0aWYgKHZhbC5sZW5ndGggPT09IDUpIHtcclxuXHRcdHJldHVybiB2YWwucmVwbGFjZSgvKFxcZHsyfSkoXFxkezN9KS8sICckMS0kMicpO1xyXG5cdH0gZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0cmV0dXJuIHZhbC5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pLywgJyQxLSQyJyk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFpJUF9DT0RFLCBBRERSMSwgQUREUjIg66W8IOuwm+yVhOyEnCAoNTMtNzc2KSDso7zshowxIOyjvOyGjDIg7ZiV7Iud7Jy866GcIOuwmO2ZmFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBZGRyWmlwQ29kZSA9IChcclxuXHR6aXBDb2RlOiBzdHJpbmcsXHJcblx0YWRkcjE6IHN0cmluZyxcclxuXHRhZGRyMjogc3RyaW5nXHJcbikgPT4ge1xyXG5cdHppcENvZGUgPSB6aXBDb2RlID8gYCgke2NvbnZlcnRaaXBDb2RlVGV4dCh6aXBDb2RlKX0pIGAgOiAnJztcclxuXHJcblx0cmV0dXJuIGAke3ppcENvZGV9JHthZGRyMSA/PyAnJ30gJHthZGRyMiA/PyAnJ31gO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOyghO2ZlOuyiO2YuCwg7ZW465Oc7Y+w7ZiV7Iud7Jy866GcIOuzgO2ZmFxyXG4gKiBAcGFyYW0gdmFsIDAxMDk5ODg3NzcyXHJcbiAqIEBwYXJhbSB0eXBlIDA6ICoqKiog7Jy866GcIO2RnOyLnCwgMTog66qo65GQIO2RnOyLnFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRQaG9uZVRleHQgPSAodmFsOiBzdHJpbmcsIHR5cGU6IDAgfCAxKSA9PiB7XHJcblx0bGV0IGZvcm1hdE51bSA9ICcnO1xyXG5cclxuXHRpZiAoIXZhbCkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0aWYgKHZhbC5sZW5ndGggPT09IDExKSB7XHJcblx0XHRmb3JtYXROdW0gPVxyXG5cdFx0XHR0eXBlID09PSAwXHJcblx0XHRcdFx0PyB2YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkezR9KShcXGR7NH0pLywgJyQxLSoqKiotJDMnKVxyXG5cdFx0XHRcdDogdmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZHs0fSkoXFxkezR9KS8sICckMS0kMi0kMycpO1xyXG5cdH0gZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gOCkge1xyXG5cdFx0Zm9ybWF0TnVtID0gdmFsLnJlcGxhY2UoLyhcXGR7NH0pKFxcZHs0fSkvLCAnJDEtJDInKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKHZhbC5pbmRleE9mKCcwMicpID09PSAwKSB7XHJcblx0XHRcdGZvcm1hdE51bSA9XHJcblx0XHRcdFx0dHlwZSA9PT0gMFxyXG5cdFx0XHRcdFx0PyB2YWwucmVwbGFjZSgvKFxcZHsyfSkoXFxkezR9KShcXGR7NH0pLywgJyQxLSoqKiotJDMnKVxyXG5cdFx0XHRcdFx0OiB2YWwucmVwbGFjZSgvKFxcZHsyfSkoXFxkezR9KShcXGR7NH0pLywgJyQxLSQyLSQzJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3JtYXROdW0gPVxyXG5cdFx0XHRcdHR5cGUgPT09IDBcclxuXHRcdFx0XHRcdD8gdmFsLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sICckMS0qKiotJDMnKVxyXG5cdFx0XHRcdFx0OiB2YWwucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgJyQxLSQyLSQzJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZm9ybWF0TnVtO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICAyMDIwMTEyMyDtmJXtg5zsnZgg64Kg7Kec6rCS7J2EIDIwMjAtMTEtMjMg7Iqk7Yq466eB7Jy866GcIOuzgOqyve2VtOyEnCDrsJjtmZhcclxuICogQHBhcmFtIHZhbCDrs4Dqsr3tlaAg7Iir7J6Q6rCSKGV4OiAyMDIwMTEyMylcclxuICogQHBhcmFtIGNoYXJWYWwgIOuCoOynnCDtkZzsi5wg7LqQ66at7YSwIOusuOyekChleDogLSlcclxuICovXHJcbi8vIGV4cG9ydCBjb25zdCBjb252ZXJ0WVlZWW1tZGRUZXh0ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyLCBjaGFyVmFsOiBzdHJpbmcpID0+IHtcclxuLy8gXHRjb25zdCB5eXl5TU1kZCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8gdmFsLnRvU3RyaW5nKCkgOiB2YWw7XHJcbi8vIFx0Y29uc3QgbWF0Y2hSZXN1bHQgPSB5eXl5TU1kZC5tYXRjaCgvXihcXGR7NH0pKFxcZHsxLDJ9KShcXGR7MSwyfSkkLyk7XHJcblxyXG4vLyBcdGNvbnN0IGlzTWF0Y2ggPSAhIW1hdGNoUmVzdWx0ICYmIG1hdGNoUmVzdWx0Lmxlbmd0aCA+IDA7XHJcbi8vIFx0Y29uc3QgeXl5eSA9IGlzTWF0Y2ggPyBtYXRjaFJlc3VsdFsxXSA6ICcnO1xyXG4vLyBcdGNvbnN0IG1tID0gaXNNYXRjaCA/IG1hdGNoUmVzdWx0WzJdIDogJyc7XHJcbi8vIFx0Y29uc3QgZGQgPSBpc01hdGNoID8gbWF0Y2hSZXN1bHRbM10gOiAnJztcclxuLy8gXHRjaGFyVmFsID0gISFjaGFyVmFsID8gY2hhclZhbCA6ICctJztcclxuXHJcbi8vIFx0cmV0dXJuIGlzTWF0Y2ggPyBgJHt5eXl5fSR7Y2hhclZhbH0ke21tfSR7Y2hhclZhbH0ke2RkfWAgOiAnJztcclxuLy8gfTtcclxuXHJcbi8qKlxyXG4gKiAgMjAyMDExMjMg7ZiV7YOc7J2YIOuCoOynnOqwkuydhCAyMDIwLTExLTIzIOyKpO2KuOungeycvOuhnCDrs4Dqsr3tlbTshJwg67CY7ZmYXHJcbiAqIEBwYXJhbSB2YWwg67OA6rK97ZWgIOyIq+yekOqwkihleDogMjAyMDExMjMpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydERhdGVUZXh0ID0gKHZhbDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcblx0aWYgKCF2YWwpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGxldCByZXN1bHQgPSB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IHZhbC50b1N0cmluZygpIDogdmFsO1xyXG5cclxuXHQvLyDrp4zslb0gMTPsnpDrpqwg7KO866+867KI7Zi46rCAIO2MjOudvOuplO2EsOuhnCDrk6TslrQg7JmU7J2EIOqyveyasFxyXG5cdGlmIChyZXN1bHQubGVuZ3RoID09PSAxMykge1xyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnNsaWNlKDAsIDYpO1xyXG5cdH1cclxuXHJcblx0Ly8gODYwMjEzIO2YleyLnSBjb252ZXJ0XHJcblx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDYpIHtcclxuXHRcdHJldHVybiByZXN1bHQucmVwbGFjZSgvKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgJyQxLSQyLSQzJyk7XHJcblx0fVxyXG5cclxuXHQvLyAwMDAwLTAwLTAwIO2YleyLnVxyXG5cdGlmIChyZXN1bHQgPT09ICcwMDAwMDAwMCcpIHtcclxuXHRcdHJldHVybiAnMDAwMC0wMC0wMCc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZGF5anModmFsKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiAgMjAyMDExMjMg7ZiV7YOc7J2YIOuCoOynnOqwkuydhCBmb3RtYXQoWVlZWS1NTS1ERCDtmJXtg5wpIOyKpO2KuOungeycvOuhnCDrs4Dqsr3tlbTshJwg67CY7ZmYXHJcbiAqIEBwYXJhbSB2YWwg67OA6rK97ZWgIOyIq+yekOqwkihleDogMjAyMDExMjMpXHJcbiAqIEBwYXJhbSBmb3JtYXQgIOuCoOynnCDtkZzsi5wgRk9STUFUIChZWVlZLU1NLUREKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnREYXRlVGV4dEZvcm1hdCA9ICh2YWw6IHN0cmluZyB8IG51bWJlciwgZm9ybWF0OiBzdHJpbmcpID0+IHtcclxuXHRpZiAoIXZhbCkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGRheWpzKHZhbCkuZm9ybWF0KGZvcm1hdCk7XHJcbn07XHJcblxyXG4vKipcclxuICog7Lus65+867OEIO2VqeqzhCDtlajsiJhcclxuICogQHBhcmFtIHJlc3VsdERhdGEgLSBkYXRhXHJcbiAqIEBwYXJhbSBjb2xOYW1lIC0g7Lus65+866qFXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3VtQ29sID0gKHJlc3VsdERhdGE6IGFueSwgY29sTmFtZTogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3Qgc3VtVmFsID0gXy5zdW1CeShyZXN1bHREYXRhLCAodmFsOiBhbnkpID0+IHBhcnNlRmxvYXQodmFsW2NvbE5hbWVdID8/IDApKTtcclxuXHJcblx0cmV0dXJuIHJlc3VsdERhdGEgPyBzdW1WYWwgOiAwO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOyXrOufrOqwnCDsu6zrn7zrs4Qg7ZWp6rOEIO2VqOyImFxyXG4gKiBAcGFyYW0gcmVzdWx0RGF0YSAtIGRhdGFcclxuICogQHBhcmFtIGFycmF5Q29sTmFtZSAtIO2VqeqzhOulvCDqsIDsoLjsmKwg7Lus65+865OkIChleC4gWydUT1RfQ05UJywgJ09LX0NOVCddKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN1bUFycmF5Q29sID0gPFQgZXh0ZW5kcyBvYmplY3Q+KFxyXG5cdGRhdGE6IFRbXSxcclxuXHRhcnJheUNvbE5hbWU6IEFycmF5PGtleW9mIFQ+XHJcbik6IFQgPT4ge1xyXG5cdGNvbnN0IHJ0blZhbDogYW55ID0ge307XHJcblxyXG5cdF8uZWFjaChkYXRhLCB2YWwgPT4ge1xyXG5cdFx0Xy5lYWNoKGFycmF5Q29sTmFtZSwgY29sID0+IHtcclxuXHRcdFx0cnRuVmFsW2NvbF0gPSAocnRuVmFsW2NvbF0gPz8gMCkgKyB2YWxbY29sXTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcnRuVmFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIO2VtOuLuey7rOufvOyXkOyEnCAw67O064ukIO2BsCDqsJLsnbQg7J6I64qUIOqwnOyytOydmCBjb3VudCDsiJgoZXguIOq4sOyCrOuzhCDqt7zrrLTtmITtmansnZgg6re866y06rOE7JeQ7IScIOyTsOyehClcclxuICogQHBhcmFtIHJlc3VsdERhdGEgLSBkYXRhXHJcbiAqIEBwYXJhbSBjb2xOYW1lIC0g7Lus65+866qFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRDb2wgPSAocmVzdWx0RGF0YTogYW55LCBjb2xOYW1lOiBzdHJpbmcpID0+IHtcclxuXHRyZXR1cm4gXy5maWx0ZXIocmVzdWx0RGF0YSwgdmFsID0+IHZhbFtjb2xOYW1lXSA+IDApLmxlbmd0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEMDEgfiBEMzEgb3IgQTAxIH4gQTMxIOq5jOyngOydmCDquIjslaEg7ZWp6rOEXHJcbiAqIEBwYXJhbSByZXN1bHREYXRhIC0gZGF0YVxyXG4gKiBAcGFyYW0gcHJlZml4IC0gRDAxIOy7rOufvOydtOuptCBEIOunjCDsnoXroKUgQTAxIOy7rOufvOydtOuptCBBIOunjCDsnoXroKVcclxuICovXHJcbmV4cG9ydCBjb25zdCB0b3RBbXQgPSAocmVzdWx0RGF0YTogYW55LCBwcmVmaXg6IHN0cmluZykgPT4ge1xyXG5cdGNvbnN0IHN1bVZhbCA9IF8uc3VtQnkoXHJcblx0XHRyZXN1bHREYXRhLFxyXG5cdFx0KHZhbDogYW55KSA9PlxyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzAxJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzAyJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzAzJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA0J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA1J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA2J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA3J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA4J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzA5J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzEwJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzExJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzEyJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzEzJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE0J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE1J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE2J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE3J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE4J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzE5J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzIwJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzIxJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzIyJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzIzJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI0J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI1J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI2J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI3J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI4J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzI5J10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzMwJ10gK1xyXG5cdFx0XHR2YWxbcHJlZml4ICsgJzMxJ11cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gIXJlc3VsdERhdGEgPyAwIDogc3VtVmFsO1xyXG59O1xyXG5cclxuLy8gRDAxIH4gRDMxIOq5jOyngOydmCDquIjslaEg7ZWp6rOEKOyXsOyCsOycvOuhnCDsnbjtlZwg7Iuc6rCE7IaM67mE6rCAIOyeiOycvOuvgOuhnCDqs6DroKQpXHJcbi8vIGV4cG9ydCBjb25zdCB0b3RBbXQgPSAocmVzdWx0RGF0YSwgcHJlZml4KSA9PlxyXG4vLyBcdCFyZXN1bHREYXRhXHJcbi8vIFx0XHQ/IDBcclxuLy8gXHRcdDogXy5zdW1CeShyZXN1bHREYXRhLCAodmFsOiBhbnkpID0+IHtcclxuLy8gXHRcdFx0XHRsZXQgc3VtVmFsID0gMDtcclxuXHJcbi8vIFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xyXG4vLyBcdFx0XHRcdFx0bGV0IGNvbE51bU5tID0gcHJlZml4O1xyXG5cclxuLy8gXHRcdFx0XHRcdGlmIChpLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xyXG4vLyBcdFx0XHRcdFx0XHRjb2xOdW1ObSArPSAnMCc7XHJcbi8vIFx0XHRcdFx0XHR9XHJcblxyXG4vLyBcdFx0XHRcdFx0Y29sTnVtTm0gKz0gaS50b1N0cmluZygpO1xyXG5cclxuLy8gXHRcdFx0XHRcdHN1bVZhbCArPSB2YWxbY29sTnVtTm1dO1xyXG4vLyBcdFx0XHRcdH1cclxuXHJcbi8vIFx0XHRcdFx0cmV0dXJuIHN1bVZhbDtcclxuLy8gXHRcdCAgfSk7XHJcblxyXG4vKipcclxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCDsu6jtirjroaTsl5Ag7KCE64us7ZWgIO2UhOuhnO2NvO2LsOqwklxyXG4gKiDssLjqs6A6IGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcclxuICog7Iir7J6Q66eMIOyeheugpeuwm+uKlCDtmJXsi51cclxuICogQHBhcmFtIHZhbCAtIOuUlO2PtO2KuOqwklxyXG4gKiBAcGFyYW0gZGlzcGxheVR5cGUgLSAnaW5wdXQnIHwgJ3RleHQnXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnVtYmVyRm9ybWF0R2VuZXJhbCA9IChcclxuXHR2YWw6IHN0cmluZyxcclxuXHRkaXNwbGF5VHlwZTogJ2lucHV0JyB8ICd0ZXh0JyxcclxuXHRmb3JtYXQ/OiBzdHJpbmcgfCBGb3JtYXRJbnB1dFZhbHVlRnVuY3Rpb25cclxuKSA9PiB7XHJcblx0Y29uc3QgcnRuVmFsOiBOdW1iZXJGb3JtYXRQcm9wcyA9IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogdmFsLFxyXG5cdFx0dGhvdXNhbmRTZXBhcmF0b3I6IGZhbHNlLFxyXG5cdFx0ZGVjaW1hbFNjYWxlOiAwLFxyXG5cdFx0ZGlzcGxheVR5cGUsXHJcblx0XHRmb3JtYXRcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gcnRuVmFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQg7Luo7Yq466Gk7JeQIOyghOuLrO2VoCDtlITroZztjbzti7DqsJJcclxuICog7LC46rOgOiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XHJcbiAqIOyynOuLqOychOuhnCDsvaTrp4gg7LCN64qUIO2YleyLnVxyXG4gKiBAcGFyYW0gdmFsIC0g65SU7Y+07Yq46rCSXHJcbiAqIEBwYXJhbSBkaXNwbGF5VHlwZSAtICdpbnB1dCcgfCAndGV4dCdcclxuICovXHJcbmV4cG9ydCBjb25zdCBudW1iZXJGb3JtYXRUaG91bmQgPSAoXHJcblx0dmFsOiBzdHJpbmcsXHJcblx0ZGlzcGxheVR5cGU6ICdpbnB1dCcgfCAndGV4dCdcclxuKTogTnVtYmVyRm9ybWF0UHJvcHMgPT4ge1xyXG5cdGNvbnN0IHJ0blZhbCA9IG51bWJlckZvcm1hdEdlbmVyYWwodmFsLCBkaXNwbGF5VHlwZSk7XHJcblxyXG5cdHJ0blZhbC5kZWNpbWFsU2NhbGUgPSAwO1xyXG5cdHJ0blZhbC50aG91c2FuZFNlcGFyYXRvciA9IHRydWU7XHJcblxyXG5cdHJldHVybiBydG5WYWw7XHJcbn07XHJcblxyXG4vKipcclxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCDsu6jtirjroaTsl5Ag7KCE64us7ZWgIO2UhOuhnO2NvO2LsOqwklxyXG4gKiDssLjqs6A6IGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcclxuICog7KO866+867KI7Zi4IO2YleyLnVxyXG4gKiBAcGFyYW0gdmFsIC0g65SU7Y+07Yq46rCSXHJcbiAqIEBwYXJhbSBkaXNwbGF5VHlwZSAtICdpbnB1dCcgfCAndGV4dCdcclxuICovXHJcbmV4cG9ydCBjb25zdCBudW1iZXJGb3JtYXRSZWdObyA9IChcclxuXHR2YWw6IHN0cmluZyxcclxuXHRkaXNwbGF5VHlwZTogJ2lucHV0JyB8ICd0ZXh0J1xyXG4pOiBOdW1iZXJGb3JtYXRQcm9wcyA9PiB7XHJcblx0Y29uc3QgcnRuVmFsID0gbnVtYmVyRm9ybWF0R2VuZXJhbCh2YWwsIGRpc3BsYXlUeXBlKTtcclxuXHRydG5WYWwuZm9ybWF0ID0gJyMjIyMjIy0jIyMjIyMjJztcclxuXHJcblx0cmV0dXJuIHJ0blZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZWFjdC1udW1iZXItZm9ybWF0IOy7qO2KuOuhpOyXkCDsoITri6ztlaAg7ZSE66Gc7Y287Yuw6rCSXHJcbiAqIOywuOqzoDogaHR0cHM6Ly9naXRodWIuY29tL3MteWFkYXYvcmVhY3QtbnVtYmVyLWZvcm1hdFxyXG4gKiDtjKjsiqTsm4zrk5wg7ZiV7IudXHJcbiAqIEBwYXJhbSB2YWwgLSDrlJTtj7TtirjqsJJcclxuICogQHBhcmFtIGRpc3BsYXlUeXBlIC0gJ2lucHV0JyB8ICd0ZXh0J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdFB3ZCA9IChcclxuXHR2YWw6IHN0cmluZyxcclxuXHRkaXNwbGF5VHlwZTogJ2lucHV0JyB8ICd0ZXh0J1xyXG4pOiBOdW1iZXJGb3JtYXRQcm9wcyA9PiB7XHJcblx0Y29uc3QgcnRuVmFsOiBOdW1iZXJGb3JtYXRQcm9wcyA9IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogdmFsLFxyXG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcclxuXHRcdGRpc3BsYXlUeXBlXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHJ0blZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZWFjdC1udW1iZXItZm9ybWF0IOy7qO2KuOuhpOyXkCDsoITri6ztlaAg7ZSE66Gc7Y287Yuw6rCSXHJcbiAqIOywuOqzoDogaHR0cHM6Ly9naXRodWIuY29tL3MteWFkYXYvcmVhY3QtbnVtYmVyLWZvcm1hdFxyXG4gKiDshozsiJjsoJAg7ZiV7YOcKGV4LiA3MjMuMTU1MTIpXHJcbiAqIEBwYXJhbSB2YWwgLSDrlJTtj7TtirjqsJJcclxuICogQHBhcmFtIGRpc3BsYXlUeXBlIC0gJ2lucHV0JyB8ICd0ZXh0J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdEZsb2F0ID0gKFxyXG5cdHZhbDogc3RyaW5nLFxyXG5cdGRpc3BsYXlUeXBlOiAnaW5wdXQnIHwgJ3RleHQnXHJcbik6IE51bWJlckZvcm1hdFByb3BzID0+IHtcclxuXHRjb25zdCBydG5WYWw6IE51bWJlckZvcm1hdFByb3BzID0ge1xyXG5cdFx0ZGVmYXVsdFZhbHVlOiB2YWwsXHJcblx0XHRkaXNwbGF5VHlwZSxcclxuXHRcdGRlY2ltYWxTY2FsZTogMTBcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gcnRuVmFsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQg7Luo7Yq466Gk7JeQIOyghOuLrO2VoCDtlITroZztjbzti7DqsJJcclxuICog7LC46rOgOiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XHJcbiAqIOuCoOynnCAtIFlZWVktTU0tREQg7ZiV7IudXHJcbiAqIEBwYXJhbSB2YWwgLSDrlJTtj7TtirjqsJJcclxuICogQHBhcmFtIGRpc3BsYXlUeXBlIC0gJ2lucHV0JyB8ICd0ZXh0J1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWJlckZvcm1hdFlZWVlNTUREID0gKFxyXG5cdHZhbDogc3RyaW5nLFxyXG5cdGRpc3BsYXlUeXBlOiAnaW5wdXQnIHwgJ3RleHQnXHJcbikgPT4ge1xyXG5cdGNvbnN0IHJ0blZhbDogTnVtYmVyRm9ybWF0UHJvcHMgPSB7XHJcblx0XHRkZWZhdWx0VmFsdWU6IHZhbCxcclxuXHRcdGZvcm1hdDogJyMjIyMtIyMtIyMnLFxyXG5cdFx0cGxhY2Vob2xkZXI6ICdZWVlZLU1NLUREJyxcclxuXHRcdG1hc2s6IFsnWScsICdZJywgJ1knLCAnWScsICdNJywgJ00nLCAnRCcsICdEJ10sXHJcblx0XHRkaXNwbGF5VHlwZVxyXG5cdH07XHJcblxyXG5cdHJldHVybiBydG5WYWw7XHJcbn07XHJcblxyXG4vKipcclxuICog7YOA6rKfIGpzb24g7Jik67iM7KCd7Yq4KHRhcmdldE9iainsl5AgYmFzZSBqc29uIOyYpOu4jOygne2KuChiYXNlT2JqKeydmCDqsJLsnYQg67O17IKs7JeQIO2CpOqwkiDquLDspIDsnLzroZwgdXBkYXRlIO2VnOuLpC5cclxuICogQHBhcmFtIGJhc2VPYmogdXBkYXRlIOydmCDquLDspIDsnbQg65CY64qUIGJhc2UganNvbiDsmKTruIzsoJ3tirhcclxuICogQHBhcmFtIHRhcmdldE9iaiB1cGRhdGUg64yA7IOB7J20IOuQmOuKlCB0YXJnZXQganNvbiDsmKTruIzsoJ3tirhcclxuICovXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVPYmpXaXRoS2V5cyA9IChiYXNlT2JqLCB0YXJnZXRPYmopID0+IHtcclxuXHRfLmtleXMoYmFzZU9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0aWYgKF8uaGFzKHRhcmdldE9iaiwga2V5KSkge1xyXG5cdFx0XHR0YXJnZXRPYmpba2V5XSA9IGJhc2VPYmpba2V5XTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDtlITroZzsi5zsoIAg6rKw6rO86rCSIOqwgOyguOyYpOq4sCDtjIzrnbzrqZTthLAg7YOA7J6FXHJcbiAqIEBpbnRlcmZhY2UgSVByb2NPdXRDdXJzb3JSZXN1bHRcclxuICovXHJcbmludGVyZmFjZSBJUHJvY091dEN1cnNvclJlc3VsdCB7XHJcblx0Z3FsRGF0YTogYW55O1xyXG5cdGRlZmF1bHRWYWx1ZT86IGFueTtcclxuXHRpc09ubHlTaW5nbGVSb3c/OiBib29sZWFuO1xyXG5cdGN1cnNvck5hbWU/OiBzdHJpbmc7XHJcblx0Y2FsbGJhY2s/OiAocmVzdWx0RGF0YTogYW55LCB0b3RhbENvdW50PzogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKiog7ZSE66Gc7Iuc7KCAIOuYkOuKlCDri6TsnbTrgpjrr7nsv7zrpqzqsrDqs7zqsJIg6rCA7KC47Jik6riwICovXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0ID0gPFQgPSBhbnk+KHtcclxuXHRncWxEYXRhLFxyXG5cdGRlZmF1bHRWYWx1ZSxcclxuXHRpc09ubHlTaW5nbGVSb3csXHJcblx0Y3Vyc29yTmFtZSxcclxuXHRjYWxsYmFja1xyXG59OiBJUHJvY091dEN1cnNvclJlc3VsdCkgPT4ge1xyXG5cdGNvbnN0IGZpZWxkTmFtZSA9IGdxbERhdGEgPyBPYmplY3Qua2V5cyhncWxEYXRhKVswXSA6ICcnO1xyXG5cdGNvbnN0IGRhdGEgPSBncWxEYXRhID8gZ3FsRGF0YVtmaWVsZE5hbWVdIDogbnVsbDtcclxuXHRjb25zdCBvdXRSZXN1bHQgPSBkYXRhID8gZGF0YS5PVVRfUkVTVUxUIDogbnVsbDtcclxuXHRjb25zdCBvdXRSZXRDb2RlID0gb3V0UmVzdWx0ID8gZGF0YS5PVVRfUkVUX0NPREUgOiAnOTknO1xyXG5cdGxldCBvdXRDdXJzb3JSZXN1bHQgPSBudWxsO1xyXG5cdGNvbnN0IGN1ck5hbWUgPSBjdXJzb3JOYW1lID8/ICdPVVRfUkVUX0NVUlNPUic7XHJcblxyXG5cdGlmIChvdXRSZXN1bHQgJiYgb3V0UmV0Q29kZSA9PT0gJzAwJyAmJiBvdXRSZXN1bHQubGVuZ3RoID4gMCkge1xyXG5cdFx0Y29uc3QgcmV0Q3Vyc29yID0gb3V0UmVzdWx0WzBdW2N1ck5hbWVdID8/IG91dFJlc3VsdDtcclxuXHRcdG91dEN1cnNvclJlc3VsdCA9XHJcblx0XHRcdHJldEN1cnNvcj8ubGVuZ3RoID4gMFxyXG5cdFx0XHRcdD8gcmV0Q3Vyc29yXHJcblx0XHRcdFx0OiAhcmV0Q3Vyc29yICYmIG91dFJlc3VsdC5sZW5ndGggPiAwXHJcblx0XHRcdFx0PyBvdXRSZXN1bHRcclxuXHRcdFx0XHQ6IG51bGw7XHJcblx0fVxyXG5cclxuXHQvLyByZXR1cm4gdmFsdWVcclxuXHRjb25zdCBydG5WYWx1ZSA9IG91dEN1cnNvclJlc3VsdFxyXG5cdFx0PyBvdXRDdXJzb3JSZXN1bHRcclxuXHRcdDogZGVmYXVsdFZhbHVlXHJcblx0XHQ/IGRlZmF1bHRWYWx1ZVxyXG5cdFx0OiBudWxsO1xyXG5cclxuXHQvLyDtlITroZzsi5zsoIAg66as7YS0IOy7rOufvOykkSBUT1RBTF9DT1VOVCDqsIAg7J6I7Jy866m0IOuwmO2ZmFxyXG5cdGNvbnN0IHRvdGFsQ291bnQgPVxyXG5cdFx0b3V0Q3Vyc29yUmVzdWx0ICYmIG91dEN1cnNvclJlc3VsdC5sZW5ndGggPiAwICYmIG91dEN1cnNvclJlc3VsdFswXS5UT1RBTF9DT1VOVFxyXG5cdFx0XHQ/IG91dEN1cnNvclJlc3VsdFswXS5UT1RBTF9DT1VOVFxyXG5cdFx0XHQ6IDA7XHJcblxyXG5cdC8vIOy9nOuwse2VqOyImCDsiJjtlolcclxuXHRjYWxsYmFjaz8uKHJ0blZhbHVlLCB0b3RhbENvdW50KTtcclxuXHJcblx0cmV0dXJuIHJ0blZhbHVlIGFzIFQ7XHJcbn07XHJcblxyXG4vKipcclxuICog7Jik67iM7KCd7Yq4IGFycmF5IOqwkuuTpOykkeyXkOyEnFxyXG4gKiDsp4DsoJXrkJwgdmFsdWVGaWVsZOuqhSBsYWJlbEZpZWxk66qF7JeQIO2VtOuLue2VmOuKlCDqsJLsnYQg7LC+7J2A65KkXHJcbiAqIHZhbHVlIC8gbGFiZWwg67Cw7Je06rCS7Jy866GcIOuwmO2ZmO2VqFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRPcHRpb24gPSAoXHJcblx0c2VsZWN0RGF0YTogYW55W10sXHJcblx0dmFsdWVGaWVsZDogc3RyaW5nLFxyXG5cdGxhYmVsRmllbGQ6IHN0cmluZ1xyXG4pOiBBcnJheTx7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRsYWJlbDogc3RyaW5nO1xyXG59PiA9PiB7XHJcblx0Y29uc3QgcmVzdWx0ID0gXy5tYXAoc2VsZWN0RGF0YSwgdmFsID0+IHtcclxuXHRcdGNvbnN0IG9wdCA9IHtcclxuXHRcdFx0dmFsdWU6IHZhbFt2YWx1ZUZpZWxkXSxcclxuXHRcdFx0bGFiZWw6IHZhbFtsYWJlbEZpZWxkXVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gb3B0O1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOyXkeyFgOuLpOyatOuhnOuTnCDtjIzrnbzrqZTthLAg7YOA7J6FXHJcbiAqIEBpbnRlcmZhY2UgSUV4Y2VsRG93blxyXG4gKi9cclxuLy8gaW50ZXJmYWNlIElFeGNlbERvd24ge1xyXG4vLyBcdHJlZmV0Y2hNZXRob2Q6ICh2YXJzOiBhbnkpID0+IFByb21pc2U8YW55PjtcclxuLy8gXHRyZWZldGNoVmFyczogYW55O1xyXG4vLyBcdHJlZkV4Y2VsQ29tcG9uZW50OiBNdXRhYmxlUmVmT2JqZWN0PElSZWZBZ0V4Y2VsRXhwb3J0PjtcclxuLy8gfVxyXG5cclxuLyoqXHJcbiAqIOyXkeyFgOuLpOyatOuhnOuTnFxyXG4gKiBAcGFyYW0gcGFyYW1zIElFeGNlbERvd24gdHlwZVxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGV4Y2VsRG93biA9IGFzeW5jIChwYXJhbXM6IElFeGNlbERvd24pID0+IHtcclxuLy8gXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHBhcmFtcy5yZWZldGNoTWV0aG9kKHtcclxuLy8gXHRcdC4uLnBhcmFtcy5yZWZldGNoVmFyc1xyXG4vLyBcdH0pO1xyXG5cclxuLy8gXHRnZXRQcm9jT3V0Q3Vyc29yUmVzdWx0KHtcclxuLy8gXHRcdGdxbERhdGE6IGRhdGEsXHJcbi8vIFx0XHRjYWxsYmFjazogKHJlc0RhdGEsIHRvdGFsQ291bnQpID0+IHtcclxuLy8gXHRcdFx0cGFyYW1zLnJlZkV4Y2VsQ29tcG9uZW50LmN1cnJlbnQuc2V0RGF0YShyZXNEYXRhKTtcclxuLy8gXHRcdFx0cGFyYW1zLnJlZkV4Y2VsQ29tcG9uZW50LmN1cnJlbnQuZXhwb3J0RXhjZWwoKTtcclxuLy8gXHRcdH1cclxuLy8gXHR9KTtcclxuLy8gfTtcclxuXHJcbi8qKiDqsoDsg4nsnbzsnpAg6riw7KSAIGR1cmF0aW9uIOuCoOynnOq5jOyngCDrsLDsl7Qg67CY7ZmYXHJcbiAqIGRhdGU6IOq4sOykgOuCoOynnCAoWVlZWU1NREQg7ZiV7IudKVxyXG4gKiBkdXJhdGlvbjog67CY7ZmY7ZWgIOuwlOyatOuNlOumrCDrgqDsp5xcclxuICogZXguIC03IOydtOuptCAtN+ydvOynuOu2gO2EsCDquLDspIDrgqDsp5zquYzsp4Ag67CY7ZmYLCA3IOydtOuptCDquLDspIDrgqDsp5zrtoDthLAgN+ydvOynuOq5jOyngCDrsJjtmZhcclxuICogb3V0Rm9ybWF0OiBvdXRwdXQg67CY7ZmYIOuCoOynnCDtmJXsi51cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0RHVlZGF5QXJyYXkoXHJcblx0ZGF0ZTogc3RyaW5nLFxyXG5cdGR1cmF0aW9uOiBudW1iZXIsXHJcblx0b3V0Rm9ybWF0OiBzdHJpbmdcclxuKSB7XHJcblx0Y29uc3Qgbm93RGF5ID0gZGF5anMoZGF0ZSwgJ1lZWVlNTUREJyk7XHJcblxyXG5cdGlmIChkdXJhdGlvbiA8IDApIHtcclxuXHRcdGZvciAobGV0IHggPSA2OyB4ID4gMDsgeC0tKSB7XHJcblx0XHRcdHlpZWxkIGRheWpzKG5vd0RheSlcclxuXHRcdFx0XHQuYWRkKHggKiAtMSwgJ2RheScpXHJcblx0XHRcdFx0LmZvcm1hdCgnTU0vREQnKTtcclxuXHRcdH1cclxuXHJcblx0XHR5aWVsZCBub3dEYXkuZm9ybWF0KCdNTS9ERCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR5aWVsZCBub3dEYXkuZm9ybWF0KCdNTS9ERCcpO1xyXG5cclxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgZHVyYXRpb247IHgrKykge1xyXG5cdFx0XHR5aWVsZCBkYXlqcyhub3dEYXkpXHJcblx0XHRcdFx0LmFkZCh4LCAnZGF5JylcclxuXHRcdFx0XHQuZm9ybWF0KCdNTS9ERCcpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgcmVkaXJlY3QgZnJvbSAnfi91dGlscy9yZWRpcmVjdCc7XHJcbmltcG9ydCB7IElOZXh0Q29udGV4dFdpdGhBcG9sbG8gfSBmcm9tICd+L3R5cGVzL25leHRDb250ZXh0JztcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG5cdGlzT3BlbjogYm9vbGVhbjtcclxuXHRkZWZhdWx0VXJsOiBzdHJpbmc7XHJcblx0bW9kYWxCb2R5Q29udGVudHM6IHN0cmluZztcclxufVxyXG5cclxuY29uc3Qgd2l0aEF1dGggPSA8VCwgSyBleHRlbmRzIG9iamVjdD4oXHJcblx0QXBwQ29tcG9uZW50OiBOZXh0UGFnZTxULCBLPixcclxuXHRtZW51QXV0aENoZWNrOiBib29sZWFuID0gdHJ1ZVxyXG4pID0+IHtcclxuXHJcbiAgICByZXR1cm4gY2xhc3MgQXV0aENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxULCBJU3RhdGU+IHtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7YXBvbGxvQ2xpZW50LCAuLi5jdHh9IDogSU5leHRDb250ZXh0V2l0aEFwb2xsbyl7XHJcbiAgICAgICAgICAgIGxldCBhcHBQcm9wcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKEFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRQcm9wcyA9IHtcclxuXHRcdFx0XHRcdGFwb2xsb0NsaWVudCxcclxuXHRcdFx0XHRcdC4uLmN0eFxyXG5cdFx0XHRcdH07XHJcbiAgICAgICAgICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoaW5pdFByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0ge307XHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IHJlZlVybCA9ICEhY3R4LnBhdGhuYW1lID8gY3R4LnBhdGhuYW1lIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5hcHBQcm9wc1xyXG4gICAgICAgICAgICAgICAgLy8sbG9naW5JbmZvOiByZXMuZGF0YS5nZXRMb2dpblNlc3Npb24uT1VUX1JFU1VMVFswXSxcclxuICAgICAgICAgICAgICAgIC8vbWVudUF1dGg6IHJlc3VsdE1lbnVBdXRoRGF0YSA/IHJlc3VsdE1lbnVBdXRoRGF0YVswXSA6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAsZGVmYXVsdFVybCA6ICcvbG9naW4nXHJcbiAgICAgICAgICAgICAgICAsIG1vZGFsQm9keUNvbnRlbnRzIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHs8QXBwQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9