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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_rootStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/rootStore */ "./src/stores/rootStore.ts");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-devtools-mst */ "mobx-devtools-mst");
/* harmony import */ var mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/withApollo */ "./src/utils/withApollo.tsx");
var _jsxFileName = "C:\\next-project\\src\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







 //import { ThemeProvider } from '@material-ui/core/styles';
//import theme from '../../envConfig/muiTheme';

class RootApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};
    const isServer = true;
    const store = Object(_stores_rootStore__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(isServer);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      initialState: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__["getSnapshot"])(store),
      isServer,
      pageProps
    };
  }

  constructor(props) {
    super(props);
    this.store = void 0;
    this.store = Object(_stores_rootStore__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(props.isServer, props.initialState); // mst 디버깅 로그

    if (true) {
      // 크롬 console 에 해당값의 변화가 있을 때 나타나게 함
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_4__["onPatch"])(this.store, patch => {}); // 크롬 mobx tools 에 MST 로 상태변화를 볼 수 있게 한다.

      mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_5___default()(this.store);
    }
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps,
      apolloClient
    } = this.props;
    return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
      client: apolloClient,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: this.store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_7__["default"])(RootApp));

/***/ }),

/***/ "./src/stores/adm0020/adm0020SearchStore.ts":
/*!**************************************************!*\
  !*** ./src/stores/adm0020/adm0020SearchStore.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



/**
 *  AD0020 검색 모델
 */
const model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('ad0020SearchModel', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'ad0020SearchModel'),

  /** 검색 mcode */
  orderDate: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD')),
  errMsg: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '')
}).actions(self => ({
  /** search field set */
  setSearchField(fieldName, val) {
    self[fieldName] = val;
  },

  /** orderDate set */
  setOrderDate(val) {
    self.orderDate = val;
  },

  /** 초기화 */
  setInit() {
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(self, defaultValue);
  }

}));
/** 초기화 값 */

const defaultValue = {
  identifier: 'ad0020SearchModel',
  orderDate: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().subtract(1, 'days').format('YYYY-MM-DD'),
  dateRange: '1',
  isInvalidDate: false,
  errMsg: ''
};
/** create or initialize */

const create = model.create(defaultValue);
const ad0020SearchStore = {
  create,
  defaultValue,
  model
};
/** 모델 타입 */

/* harmony default export */ __webpack_exports__["default"] = (ad0020SearchStore);

/***/ }),

/***/ "./src/stores/adm0020/adm0020Store.ts":
/*!********************************************!*\
  !*** ./src/stores/adm0020/adm0020Store.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adm0020SearchStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adm0020SearchStore */ "./src/stores/adm0020/adm0020SearchStore.ts");


/**
 *  AD0020 모델
 */

const model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('adm0020Model', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'adm0020Model'),

  /** mcode */
  mcode: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),

  /** orderDate */
  orderDate: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),

  /** 검색 모델 */
  searchModel: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_adm0020SearchStore__WEBPACK_IMPORTED_MODULE_1__["default"].model, _adm0020SearchStore__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValue)
}).actions(self => ({
  /** 상태값 초기화 */
  setInit() {
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(self, defaultValue);
  },

  setData(mcode, orderDate) {
    self.mcode = mcode;
    self.orderDate = orderDate;
  }

})).views(self => ({}));
/** 초기화 값 */

const defaultValue = {
  identifier: 'adm0020Model',
  searchModel: _adm0020SearchStore__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValue
};
/** create or initialize */

const create = model.create(defaultValue);
const adm0020Store = {
  create,
  defaultValue,
  model
};
/** 모델 타입 */

/* harmony default export */ __webpack_exports__["default"] = (adm0020Store);

/***/ }),

/***/ "./src/stores/common/modalStore.ts":
/*!*****************************************!*\
  !*** ./src/stores/common/modalStore.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 모달창 모델
 */
const model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('modalModel', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'modalModel'),
  isOpen: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false),
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  bodyContents: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  firstBtnText: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  firstBtnClassName: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  secondBtnText: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  secondBtnClassName: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  verticalCentered: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  isFade: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, true),
  isClosedInit: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false)
}).volatile(self => ({
  /** 첫번째 버튼 클릭 이벤트 핸들러 */
  opFirstBtnClick: null,

  /** 두번째 버튼 클릭 이벤트 핸들러 */
  opSecondBtnClick: null,

  /** closed 이벤트 핸들러 */
  opClosed: null
})).actions(self => ({
  /** 첫번째 버튼 이벤트 핸들러 등록 */
  setFirstBtnClick(callback) {
    self.opFirstBtnClick = callback;
  },

  /** 두번째 버튼 이벤트 핸들러 등록 */
  setSecondBtnClick(callback) {
    self.opSecondBtnClick = callback;
  },

  setClosed(callback) {
    self.opClosed = callback;

    if (self.isClosedInit) {
      self.setInit();
    }
  },

  /** 토글 */
  setToggle() {
    self.isOpen = !self.isOpen;
  },

  /** 토글 with 세팅정보 */
  setToggleWithSetting(params) {
    if (params.title) {
      self.title = params.title;
    }

    if (params.bodyContents) {
      self.bodyContents = params.bodyContents;
    }

    if (params.firstBtnText) {
      self.firstBtnText = params.firstBtnText;
    }

    if (params.firstBtnClassName) {
      self.firstBtnClassName = params.firstBtnClassName;
    }

    if (params.opFirstBtnClick) {
      self.opFirstBtnClick = params.opFirstBtnClick;
    }

    if (params.secondBtnText) {
      self.secondBtnText = params.secondBtnText;
    }

    if (params.secondBtnClassName) {
      self.secondBtnClassName = params.secondBtnClassName;
    }

    if (params.opSecondBtnClick) {
      self.opSecondBtnClick = params.opSecondBtnClick;
    }

    if (params.verticalCentered !== undefined) {
      self.verticalCentered = params.verticalCentered;
    }

    if (params.opClosed) {
      self.opClosed = params.opClosed;
    }

    if (params.isFade !== undefined) {
      self.isFade = params.isFade;
    }

    if (params.isClosedInit !== undefined) {
      self.isClosedInit = params.isClosedInit;
    }

    self.isOpen = !self.isOpen;
  },

  /** 오픈 여부 */
  setOpen(val) {
    self.isOpen = val;
  },

  /** 타이틀 set */
  setTitle(val) {
    self.title = val;
  },

  /** 컨텐츠 바디 set */
  setBodyContents(val) {
    self.bodyContents = val;
  },

  /** 첫번째 버튼 set */
  setFirstBtnText(val) {
    self.firstBtnText = val;
  },

  /** 첫번째 버튼 css class set */
  setFirstBtnClassName(val) {
    self.firstBtnClassName = val;
  },

  /** 두번째 버튼 set */
  setSecondBtnText(val) {
    self.secondBtnText = val;
  },

  /** 두번째 버튼 css class set */
  setSecondBtnClassName(val) {
    self.secondBtnClassName = val;
  },

  /** 세로측에서 센터로 위치 할지 여부 */
  setVerticalCentered(val) {
    self.verticalCentered = val;
  },

  /** fade set */
  setIsFade(val) {
    self.isFade = val;
  },

  /** 초기화 */
  setInit() {
    // volatile init
    self.opFirstBtnClick = null;
    self.opSecondBtnClick = null;
    self.opClosed = null;
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(self, defaultValue);
  }

}));
/** 초기화 값 */

const defaultValue = {
  identifier: 'modalModel',
  isOpen: false,
  title: '알림',
  bodyContents: '',
  firstBtnText: '확인',
  firstBtnClassName: 'd-block',
  opFirstBtnClick: null,
  secondBtnText: '',
  secondBtnClassName: 'd-none',
  opSecondBtnClick: null,
  verticalCentered: true,
  isFade: true,
  opClosed: null,
  isClosedInit: false
};
const create = model.create(defaultValue);
const modalStore = {
  create,
  defaultValue,
  model
};
/* harmony default export */ __webpack_exports__["default"] = (modalStore);

/***/ }),

/***/ "./src/stores/rootStore.ts":
/*!*********************************!*\
  !*** ./src/stores/rootStore.ts ***!
  \*********************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_uiStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/uiStore */ "./src/stores/ui/uiStore.ts");
/* harmony import */ var _adm0020_adm0020Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adm0020/adm0020Store */ "./src/stores/adm0020/adm0020Store.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/** adm */


let initStore = null;
/**
 * store
 */

const store = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('store', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'store'),

  /** UI 모델 */
  uiModel: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_ui_uiStore__WEBPACK_IMPORTED_MODULE_1__["default"].model, () => _ui_uiStore__WEBPACK_IMPORTED_MODULE_1__["default"].create),

  /** adm */

  /** adm0020 모델 */
  adm0020Model: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_adm0020_adm0020Store__WEBPACK_IMPORTED_MODULE_2__["default"].model, () => _adm0020_adm0020Store__WEBPACK_IMPORTED_MODULE_2__["default"].create)
});
/** 스토어 initialize */

const initializeStore = (isServer, snapshot = null) => {
  const defaultValue = {
    uiModel: _objectSpread({}, _ui_uiStore__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValue),

    /** adm Model */
    adm0020Model: _objectSpread({}, _adm0020_adm0020Store__WEBPACK_IMPORTED_MODULE_2__["default"].defaultValue)
  }; // 서버일 경우에 대한 로직 작성

  if (isServer) {
    initStore = store.create(defaultValue);
  } // 클라이언트일 경우에 대한 로직 작성


  if (store === null) {
    initStore = store.create(defaultValue);
  } // 스냅샷 있을 경우 스토어에 스냅샷을 적용


  if (snapshot) {
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(initStore, snapshot);
  }

  return initStore;
};



/***/ }),

/***/ "./src/stores/ui/leftMenuStore.ts":
/*!****************************************!*\
  !*** ./src/stores/ui/leftMenuStore.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 레프트메뉴
 */

const model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('leftMenuModel', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'leftMenuModel'),
  id: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),
  refId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '')),
  depth: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].integer, 1)),
  title: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '')),
  icon: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '')),
  linkUrl: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, '')),
  isActive: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].boolean, false)),
  menuType: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].maybeNull(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, 'F'))
});
/** 초기화 값 */

const defaultValue = {
  identifier: '',
  id: '',
  refId: '',
  depth: 1,
  title: '',
  icon: '',
  linkUrl: '',
  isActive: false,
  menuType: 'F'
};
const create = model.create(defaultValue);
const leftMenuStore = {
  create,
  defaultValue,
  model
};
/* harmony default export */ __webpack_exports__["default"] = (leftMenuStore);

/***/ }),

/***/ "./src/stores/ui/uiStore.ts":
/*!**********************************!*\
  !*** ./src/stores/ui/uiStore.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-state-tree */ "mobx-state-tree");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leftMenuStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leftMenuStore */ "./src/stores/ui/leftMenuStore.ts");
/* harmony import */ var _common_modalStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/modalStore */ "./src/stores/common/modalStore.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





/**
 * UI 모델 - HTML UI 컨트롤의 상태값
 */
const model = mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].model('uiModel', {
  /** 스토어 아이덴티티 */
  identifier: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].identifier, 'uiModel'),

  /** 레프트 메뉴 리스트 */
  leftMenuList: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].array(_leftMenuStore__WEBPACK_IMPORTED_MODULE_1__["default"].model), []),

  /** 레프트메뉴 depth 1 selected id  */
  depth1SelectedId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),

  /** 레프트메뉴 depth 2 selected id  */
  depth2SelectedId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),

  /** 레프트메뉴 depth 3 selected id  */
  depth3SelectedId: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].string, ''),

  /** 모달 컨텐츠 */
  modalModel: mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["types"].optional(_common_modalStore__WEBPACK_IMPORTED_MODULE_2__["default"].model, _common_modalStore__WEBPACK_IMPORTED_MODULE_2__["default"].defaultValue)
}).actions(self => ({
  /** 레프트메뉴 데이터 set */
  setLeftMenu(menuList) {
    const menuData = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(menuList, val => ({
      id: val.MENU_ID,
      refId: val.P_MENU_ID,
      depth: val.LEVEL,
      title: val.MENU_NAME,
      icon: val.ICON,
      linkUrl: val.URL,
      isActive: false,
      menuType: val.MENU_TYPE
    }));

    self.leftMenuList.clear();
    self.leftMenuList.push(...menuData);
  },

  /** 레프트메뉴 selected id set */
  setLeftMenuChangeId(selectedId) {
    const menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id: selectedId
    });

    const depth = menu.depth;

    if (depth === 1) {
      self.depth1SelectedId = selectedId;
    }

    if (depth === 2) {
      self.depth2SelectedId = selectedId;
      self.depth1SelectedId = menu.refId;
    }

    if (depth === 3) {
      self.depth3SelectedId = selectedId;
      self.depth2SelectedId = menu.refId;
      self.depth1SelectedId = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
        id: self.depth2SelectedId
      }).refId;
    }
  },

  setLeftMenuActive(id) {
    const menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id
    });

    const depth = menu.depth;

    const prevMenu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      depth,
      isActive: true
    });

    const prevMenuId = prevMenu && prevMenu.id;
    self.setLeftMenuChangeId(id); // depth2 메뉴 toggle 기능

    if (depth === 2) {
      menu.isActive = !menu.isActive;
    }

    if (depth === 3) {
      // 이전 선택한 depth3 메뉴 active false 로 set
      if (prevMenuId && prevMenuId !== menu.id) {
        prevMenu.isActive = false;
      } // depth3 메뉴 active set


      menu.isActive = true;
      /* depth3 이면 depth2(여러개 선택가능하므로 filter 적용) 도 active 바꿔줘야함 */
      // 이전에 선택한 depth2 메뉴들(현재 메뉴의 depth2 는 제외) 가져오기

      const prevDepth2Menu = lodash__WEBPACK_IMPORTED_MODULE_3___default()(self.leftMenuList).filter({
        depth: 2,
        isActive: true
      }).reject({
        id: menu.refId
      }).value(); // 현재 dpth3메뉴의 depth2 메뉴


      const nowDepth2Menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
        id: menu.refId
      }); // 지금 deph3 메뉴의 depth2 메뉴를 제외한  active  depth2 메뉴 모두  active를 false 로 set


      if (prevDepth2Menu) {
        prevDepth2Menu.map(val => val.isActive = false);
      } // 현재 depth3 메뉴의 depth2 메뉴 active=true 로 set


      nowDepth2Menu.isActive = true;
    }
  },

  setInit() {
    Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_0__["applySnapshot"])(self, defaultValue);
  }

})).views(self => ({
  /** 메뉴리스트 가져오기(더미데이터) */
  getAllLeftMenuList() {
    return self.leftMenuList;
  },

  /** navpath 가져오기 */
  getNavPaths() {
    // navpath 의 경우는 선택한  depth3 메뉴를 기준으로 데이터를 가져온다.
    //  사용자가 depth3 메뉴를  클릭해서 활성화 해놓은 상태에서 depth2(폴더)를 클릭할 수도 있으니
    // depth2SelectedId 값을 가져오면 안된다.
    if (!self.depth3SelectedId) {
      return null;
    }

    const depth3Menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id: self.depth3SelectedId
    });

    const depth2Menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id: depth3Menu.refId
    });

    const depth1Menu = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id: depth2Menu.refId
    });

    return [depth1Menu.title, depth2Menu.title, depth3Menu.title];
  },

  /** depth 1 메뉴 리스트 */
  getDepth1MenuList() {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(self.leftMenuList, {
      depth: 1
    });
  },

  /** depth 2 메뉴 리스트 */
  getDepth2MenuList(refId) {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(self.leftMenuList, {
      depth: 2,
      refId
    });
  },

  /** depth 3 메뉴 리스트 */
  getDepth3MenuList(refId) {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(self.leftMenuList, {
      depth: 3,
      refId
    });
  },

  /** id를 가지고 메뉴정보 가져오기 */
  getMenuById(id) {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      id
    });
  },

  /** linkUrl 을 가지고 메뉴정보 가져오기 */
  getMenuByLinkUrl(linkUrl) {
    return lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(self.leftMenuList, {
      linkUrl
    });
  }

}));
/** 초기화 값 */

const defaultValue = {
  identifier: 'uiModel',
  leftMenuList: [],
  depth1SelectedId: '',
  depth2SelectedId: '',
  depth3SelectedId: '',
  navPaths: [],
  modalModel: {
    isOpen: false,
    title: '알림',
    bodyContents: '',
    firstBtnText: '확인',
    firstBtnClassName: '',
    secondBtnText: '',
    secondBtnClassName: 'd-none',
    verticalCentered: true
  }
};
/** create or initialize */

const create = model.create(defaultValue);
const uiStore = {
  create,
  defaultValue,
  model
};
/** ui모델 타입 */

/* harmony default export */ __webpack_exports__["default"] = (uiStore);

/***/ }),

/***/ "./src/utils/initApollo.ts":
/*!*********************************!*\
  !*** ./src/utils/initApollo.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isBrowser */ "./src/utils/isBrowser.ts");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ "@apollo/client/link/context");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/error */ "@apollo/client/link/error");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let apolloClient = null;
const isDev = true;

const create = (router, initialState, {
  getToken
}) => {
  console.log('create init'); // Apollo GraphQL 서버 URL 세팅

  const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"])({
    uri: process.env.API_SERVER_URL,
    credentials: 'include' // 종류: omit(생략), include(다른 도메인일 경우), same-origin(같은 도메인일 경우)
    // credentials: 'same-origin'

  });
  const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((req, {
    headers
  }) => {
    const token = getToken();
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        cookie: token ? `qid=${token}` : '' // authorization: token ? `Bearer ${token}` : ''

      })
    };
  });
  const errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(({
    response,
    graphQLErrors,
    networkError,
    operation,
    forward
  }) => {
    if (graphQLErrors) {
      console.log('graphQLErrors');
    }
  });
  let apolloLink = [errorLink, authLink, httpLink];
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: _isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"],
    ssrMode: !_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Disables forceFetch on the server (so queries are only run once)
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from(apolloLink),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
};

const initApollo = (router, initialState, options) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return create(router, initialState, options);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(router, initialState, options);
  }

  return apolloClient;
};

/* harmony default export */ __webpack_exports__["default"] = (initApollo);

/***/ }),

/***/ "./src/utils/isBrowser.ts":
/*!********************************!*\
  !*** ./src/utils/isBrowser.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// false 이면 서버에서 실행. true 이면 클라이언트에서 실행되었다는 의미
/* harmony default export */ __webpack_exports__["default"] = (false);

/***/ }),

/***/ "./src/utils/withApollo.tsx":
/*!**********************************!*\
  !*** ./src/utils/withApollo.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initApollo */ "./src/utils/initApollo.ts");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isBrowser */ "./src/utils/isBrowser.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\next-project\\src\\utils\\withApollo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function parseCookies(req, options = {}) {
  return cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(req ? req.headers.cookie || '' : document.cookie, options);
}

const withApollo = App => {
  var _class, _temp;

  return _temp = _class = class WithData extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: {
          req,
          res
        }
      } = ctx;
      const apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(router, {}, {
        getToken: () => parseCookies(req).qid
      });
      ctx.ctx.apolloClient = apollo;
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!_isBrowser__WEBPACK_IMPORTED_MODULE_4__["default"]) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        // try {
        // 	// Run all GraphQL queries
        // 	await getDataFromTree(
        // 		<App
        // 			{...appProps}
        // 			Component={Component}
        // 			router={router}
        // 			apolloClient={apollo}
        // 		/>
        // 	);
        // } catch (error) {
        // 	// Prevent Apollo Client GraphQL errors from crashing SSR.
        // 	// Handle them in components via the data.error prop:
        // 	// https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        // 	console.error('Error while running `getDataFromTree`', error);
        // }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        next_head__WEBPACK_IMPORTED_MODULE_5___default.a.rewind();
      } // Extract query data from the Apollo's store


      const apolloState = apollo.cache.extract();
      return _objectSpread(_objectSpread({}, appProps), {}, {
        apolloState
      });
    }

    constructor(props) {
      super(props); // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline

      this.apolloClient = void 0;
      this.apolloClient = Object(_initApollo__WEBPACK_IMPORTED_MODULE_1__["default"])(props.router, props.apolloState, {
        getToken: () => {
          return parseCookies().token;
        }
      });
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        apolloClient: this.apolloClient,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }));
    }

  }, _class.propTypes = {
    apolloState: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
  }, _temp;
};

/* harmony default export */ __webpack_exports__["default"] = (withApollo);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/context":
/*!**********************************************!*\
  !*** external "@apollo/client/link/context" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

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

/***/ "mobx-devtools-mst":
/*!************************************!*\
  !*** external "mobx-devtools-mst" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-devtools-mst");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/*!**********************************!*\
  !*** external "mobx-state-tree" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL2FkbTAwMjAvYWRtMDAyMFNlYXJjaFN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZXMvYWRtMDAyMC9hZG0wMDIwU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy9jb21tb24vbW9kYWxTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3Jvb3RTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmVzL3VpL2xlZnRNZW51U3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3Jlcy91aS91aVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbml0QXBvbGxvLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pc0Jyb3dzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3dpdGhBcG9sbG8udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1kZXZ0b29scy1tc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1zdGF0ZS10cmVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJSb290QXBwIiwiY3R4IiwiaXNTZXJ2ZXIiLCJzdG9yZSIsImluaXRpYWxpemVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImdldFNuYXBzaG90IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm9uUGF0Y2giLCJwYXRjaCIsIm1ha2VJbnNwZWN0YWJsZSIsImNvbXBvbmVudERpZE1vdW50IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYXBvbGxvQ2xpZW50Iiwid2l0aEFwb2xsbyIsIm1vZGVsIiwidHlwZXMiLCJpZGVudGlmaWVyIiwib3B0aW9uYWwiLCJvcmRlckRhdGUiLCJzdHJpbmciLCJkYXlqcyIsImZvcm1hdCIsImVyck1zZyIsImFjdGlvbnMiLCJzZWxmIiwic2V0U2VhcmNoRmllbGQiLCJmaWVsZE5hbWUiLCJ2YWwiLCJzZXRPcmRlckRhdGUiLCJzZXRJbml0IiwiYXBwbHlTbmFwc2hvdCIsImRlZmF1bHRWYWx1ZSIsInN1YnRyYWN0IiwiZGF0ZVJhbmdlIiwiaXNJbnZhbGlkRGF0ZSIsImNyZWF0ZSIsImFkMDAyMFNlYXJjaFN0b3JlIiwibWNvZGUiLCJzZWFyY2hNb2RlbCIsImFkbTAwMjBTZWFyY2hTdG9yZSIsInNldERhdGEiLCJ2aWV3cyIsImFkbTAwMjBTdG9yZSIsImlzT3BlbiIsImJvb2xlYW4iLCJ0aXRsZSIsImJvZHlDb250ZW50cyIsImZpcnN0QnRuVGV4dCIsImZpcnN0QnRuQ2xhc3NOYW1lIiwic2Vjb25kQnRuVGV4dCIsInNlY29uZEJ0bkNsYXNzTmFtZSIsInZlcnRpY2FsQ2VudGVyZWQiLCJpc0ZhZGUiLCJpc0Nsb3NlZEluaXQiLCJ2b2xhdGlsZSIsIm9wRmlyc3RCdG5DbGljayIsIm9wU2Vjb25kQnRuQ2xpY2siLCJvcENsb3NlZCIsInNldEZpcnN0QnRuQ2xpY2siLCJjYWxsYmFjayIsInNldFNlY29uZEJ0bkNsaWNrIiwic2V0Q2xvc2VkIiwic2V0VG9nZ2xlIiwic2V0VG9nZ2xlV2l0aFNldHRpbmciLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJzZXRPcGVuIiwic2V0VGl0bGUiLCJzZXRCb2R5Q29udGVudHMiLCJzZXRGaXJzdEJ0blRleHQiLCJzZXRGaXJzdEJ0bkNsYXNzTmFtZSIsInNldFNlY29uZEJ0blRleHQiLCJzZXRTZWNvbmRCdG5DbGFzc05hbWUiLCJzZXRWZXJ0aWNhbENlbnRlcmVkIiwic2V0SXNGYWRlIiwibW9kYWxTdG9yZSIsImluaXRTdG9yZSIsInVpTW9kZWwiLCJ1aVN0b3JlIiwiYWRtMDAyME1vZGVsIiwic25hcHNob3QiLCJpZCIsInJlZklkIiwibWF5YmVOdWxsIiwiZGVwdGgiLCJpbnRlZ2VyIiwiaWNvbiIsImxpbmtVcmwiLCJpc0FjdGl2ZSIsIm1lbnVUeXBlIiwibGVmdE1lbnVTdG9yZSIsImxlZnRNZW51TGlzdCIsImFycmF5IiwiZGVwdGgxU2VsZWN0ZWRJZCIsImRlcHRoMlNlbGVjdGVkSWQiLCJkZXB0aDNTZWxlY3RlZElkIiwibW9kYWxNb2RlbCIsInNldExlZnRNZW51IiwibWVudUxpc3QiLCJtZW51RGF0YSIsIl8iLCJtYXAiLCJNRU5VX0lEIiwiUF9NRU5VX0lEIiwiTEVWRUwiLCJNRU5VX05BTUUiLCJJQ09OIiwiVVJMIiwiTUVOVV9UWVBFIiwiY2xlYXIiLCJzZXRMZWZ0TWVudUNoYW5nZUlkIiwic2VsZWN0ZWRJZCIsIm1lbnUiLCJmaW5kIiwic2V0TGVmdE1lbnVBY3RpdmUiLCJwcmV2TWVudSIsInByZXZNZW51SWQiLCJwcmV2RGVwdGgyTWVudSIsImZpbHRlciIsInJlamVjdCIsInZhbHVlIiwibm93RGVwdGgyTWVudSIsImdldEFsbExlZnRNZW51TGlzdCIsImdldE5hdlBhdGhzIiwiZGVwdGgzTWVudSIsImRlcHRoMk1lbnUiLCJkZXB0aDFNZW51IiwiZ2V0RGVwdGgxTWVudUxpc3QiLCJnZXREZXB0aDJNZW51TGlzdCIsImdldERlcHRoM01lbnVMaXN0IiwiZ2V0TWVudUJ5SWQiLCJnZXRNZW51QnlMaW5rVXJsIiwibmF2UGF0aHMiLCJpc0RldiIsImdldFRva2VuIiwibG9nIiwiaHR0cExpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJBUElfU0VSVkVSX1VSTCIsImNyZWRlbnRpYWxzIiwiYXV0aExpbmsiLCJzZXRDb250ZXh0IiwicmVxIiwiaGVhZGVycyIsInRva2VuIiwiY29va2llIiwiZXJyb3JMaW5rIiwib25FcnJvciIsInJlc3BvbnNlIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsIm9wZXJhdGlvbiIsImZvcndhcmQiLCJhcG9sbG9MaW5rIiwiQXBvbGxvQ2xpZW50IiwiY29ubmVjdFRvRGV2VG9vbHMiLCJpc0Jyb3dzZXIiLCJzc3JNb2RlIiwibGluayIsIkFwb2xsb0xpbmsiLCJmcm9tIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSIsImluaXRBcG9sbG8iLCJvcHRpb25zIiwicGFyc2VDb29raWVzIiwicGFyc2UiLCJXaXRoRGF0YSIsInJlcyIsImFwb2xsbyIsInFpZCIsImFwcFByb3BzIiwiZmluaXNoZWQiLCJIZWFkIiwicmV3aW5kIiwiYXBvbGxvU3RhdGUiLCJleHRyYWN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTs7Ozs7QUFJ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dUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JlLCBJU3RvcmUgfSBmcm9tICd+L3NyYy9zdG9yZXMvcm9vdFN0b3JlJztcclxuaW1wb3J0IEFwcCwgeyBBcHBDb250ZXh0IH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRTbmFwc2hvdCwgb25QYXRjaCB9IGZyb20gJ21vYngtc3RhdGUtdHJlZSc7XHJcbmltcG9ydCBtYWtlSW5zcGVjdGFibGUgZnJvbSAnbW9ieC1kZXZ0b29scy1tc3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnfi91dGlscy93aXRoQXBvbGxvJztcclxuLy9pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuLy9pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vZW52Q29uZmlnL211aVRoZW1lJztcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG5cdGlzU2VydmVyOiBib29sZWFuO1xyXG5cdGluaXRpYWxTdGF0ZTogSVN0b3JlO1xyXG5cdENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU7XHJcblx0cGFnZVByb3BzOiBhbnk7XHJcblx0cm91dGVyOiBhbnk7XHJcblx0YXBvbGxvQ2xpZW50OiBhbnk7XHJcbn1cclxuXHJcbmNsYXNzIFJvb3RBcHAgZXh0ZW5kcyBBcHA8SVByb3BzPiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9OiBBcHBDb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG5cdFx0Y29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcclxuXHRcdGNvbnN0IHN0b3JlID0gaW5pdGlhbGl6ZVN0b3JlKGlzU2VydmVyKTtcclxuXHJcblx0XHRpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG5cdFx0XHRwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHsgaW5pdGlhbFN0YXRlOiBnZXRTbmFwc2hvdChzdG9yZSksIGlzU2VydmVyLCBwYWdlUHJvcHMgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3JlOiBJU3RvcmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0b3JlID0gaW5pdGlhbGl6ZVN0b3JlKHByb3BzLmlzU2VydmVyLCBwcm9wcy5pbml0aWFsU3RhdGUpO1xyXG5cclxuICAgICAgICAvLyBtc3Qg65SU67KE6rmFIOuhnOq3uFxyXG5cdFx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRcdC8vIO2BrOuhrCBjb25zb2xlIOyXkCDtlbTri7nqsJLsnZgg67OA7ZmU6rCAIOyeiOydhCDrlYwg64KY7YOA64KY6rKMIO2VqFxyXG5cdFx0XHRvblBhdGNoKHRoaXMuc3RvcmUsIHBhdGNoID0+IHt9KTtcclxuXHJcblx0XHRcdC8vIO2BrOuhrCBtb2J4IHRvb2xzIOyXkCBNU1Qg66GcIOyDge2DnOuzgO2ZlOulvCDrs7wg7IiYIOyeiOqyjCDtlZzri6QuXHJcblx0XHRcdG1ha2VJbnNwZWN0YWJsZSh0aGlzLnN0b3JlKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Y29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG5cclxuXHRcdGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcclxuXHRcdFx0anNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgICAgIClcclxuICAgIH0gICAgXHJcbn0gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKFJvb3RBcHApOyIsImltcG9ydCB7IEluc3RhbmNlLCB0eXBlcywgYXBwbHlTbmFwc2hvdCB9IGZyb20gJ21vYngtc3RhdGUtdHJlZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcblxyXG5leHBvcnQgdHlwZSBzZWFyY2hGaWVsZFR5cGUgPSAnb3JkZXJEYXRlJyB8ICdlcnJNc2cnO1xyXG5cclxuLyoqXHJcbiAqICBBRDAwMjAg6rKA7IOJIOuqqOuNuFxyXG4gKi9cclxuY29uc3QgbW9kZWwgPSB0eXBlc1xyXG5cdC5tb2RlbCgnYWQwMDIwU2VhcmNoTW9kZWwnLCB7XHJcblx0XHQvKiog7Iqk7Yag7Ja0IOyVhOydtOuNtO2LsO2LsCAqL1xyXG5cdFx0aWRlbnRpZmllcjogdHlwZXMub3B0aW9uYWwodHlwZXMuaWRlbnRpZmllciwgJ2FkMDAyMFNlYXJjaE1vZGVsJyksXHJcblx0XHQvKiog6rKA7IOJIG1jb2RlICovXHJcblx0XHRvcmRlckRhdGU6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSksXHJcblx0XHRlcnJNc2c6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgJycpXHJcblx0fSlcclxuXHQuYWN0aW9ucyhzZWxmID0+ICh7XHJcblx0XHQvKiogc2VhcmNoIGZpZWxkIHNldCAqL1xyXG5cdFx0c2V0U2VhcmNoRmllbGQoZmllbGROYW1lOiBzZWFyY2hGaWVsZFR5cGUsIHZhbDogYW55KSB7XHJcblx0XHRcdChzZWxmW2ZpZWxkTmFtZV0gYXMgYW55KSA9IHZhbDtcclxuXHRcdH0sXHJcblx0XHQvKiogb3JkZXJEYXRlIHNldCAqL1xyXG5cdFx0c2V0T3JkZXJEYXRlKHZhbDogc3RyaW5nKSB7XHJcblx0XHRcdHNlbGYub3JkZXJEYXRlID0gdmFsO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDstIjquLDtmZQgKi9cclxuXHRcdHNldEluaXQoKSB7XHJcblx0XHRcdGFwcGx5U25hcHNob3Qoc2VsZiwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdH1cclxuXHR9KSk7XHJcblxyXG4vKiog7LSI6riw7ZmUIOqwkiAqL1xyXG5jb25zdCBkZWZhdWx0VmFsdWUgPSB7XHJcblx0aWRlbnRpZmllcjogJ2FkMDAyMFNlYXJjaE1vZGVsJyxcclxuXHRvcmRlckRhdGU6IGRheWpzKClcclxuXHRcdC5zdWJ0cmFjdCgxLCAnZGF5cycpXHJcblx0XHQuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcblx0ZGF0ZVJhbmdlOiAnMScsXHJcblx0aXNJbnZhbGlkRGF0ZTogZmFsc2UsXHJcblx0ZXJyTXNnOiAnJ1xyXG59O1xyXG5cclxuLyoqIGNyZWF0ZSBvciBpbml0aWFsaXplICovXHJcbmNvbnN0IGNyZWF0ZSA9IG1vZGVsLmNyZWF0ZShkZWZhdWx0VmFsdWUpO1xyXG5cclxuY29uc3QgYWQwMDIwU2VhcmNoU3RvcmUgPSB7XHJcblx0Y3JlYXRlLFxyXG5cdGRlZmF1bHRWYWx1ZSxcclxuXHRtb2RlbFxyXG59O1xyXG5cclxuLyoqIOuqqOuNuCDtg4DsnoUgKi9cclxuZXhwb3J0IHR5cGUgSUFkMDAyMFNlYXJjaE1vZGVsVHlwZSA9IEluc3RhbmNlPHR5cGVvZiBtb2RlbD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZDAwMjBTZWFyY2hTdG9yZTtcclxuIiwiaW1wb3J0IHsgSW5zdGFuY2UsIHR5cGVzLCBhcHBseVNuYXBzaG90LCBkZXN0cm95IH0gZnJvbSAnbW9ieC1zdGF0ZS10cmVlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGFkbTAwMjBTZWFyY2hTdG9yZSBmcm9tICcuL2FkbTAwMjBTZWFyY2hTdG9yZSc7XHJcblxyXG4vKipcclxuICogIEFEMDAyMCDrqqjrjbhcclxuICovXHJcbmNvbnN0IG1vZGVsID0gdHlwZXNcclxuXHQubW9kZWwoJ2FkbTAwMjBNb2RlbCcsIHtcclxuXHRcdC8qKiDsiqTthqDslrQg7JWE7J2064207Yuw7YuwICovXHJcblx0XHRpZGVudGlmaWVyOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCAnYWRtMDAyME1vZGVsJyksXHJcblx0XHQvKiogbWNvZGUgKi9cclxuXHRcdG1jb2RlOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHRcdC8qKiBvcmRlckRhdGUgKi9cclxuXHRcdG9yZGVyRGF0ZTogdHlwZXMub3B0aW9uYWwodHlwZXMuc3RyaW5nLCAnJyksXHJcblx0XHQvKiog6rKA7IOJIOuqqOuNuCAqL1xyXG5cdFx0c2VhcmNoTW9kZWw6IHR5cGVzLm9wdGlvbmFsKFxyXG5cdFx0XHRhZG0wMDIwU2VhcmNoU3RvcmUubW9kZWwsXHJcblx0XHRcdGFkbTAwMjBTZWFyY2hTdG9yZS5kZWZhdWx0VmFsdWVcclxuXHRcdClcclxuXHR9KVxyXG5cdC5hY3Rpb25zKHNlbGYgPT4gKHtcclxuXHRcdC8qKiDsg4Htg5zqsJIg7LSI6riw7ZmUICovXHJcblx0XHRzZXRJbml0KCkge1xyXG5cdFx0XHRhcHBseVNuYXBzaG90KHNlbGYsIGRlZmF1bHRWYWx1ZSk7XHJcblx0XHR9LFxyXG5cdFx0c2V0RGF0YShtY29kZTogc3RyaW5nLCBvcmRlckRhdGU6IHN0cmluZykge1xyXG5cdFx0XHRzZWxmLm1jb2RlID0gbWNvZGU7XHJcblx0XHRcdHNlbGYub3JkZXJEYXRlID0gb3JkZXJEYXRlO1xyXG5cdFx0fVxyXG5cdH0pKVxyXG5cdC52aWV3cyhzZWxmID0+ICh7fSkpO1xyXG5cclxuLyoqIOy0iOq4sO2ZlCDqsJIgKi9cclxuY29uc3QgZGVmYXVsdFZhbHVlID0ge1xyXG5cdGlkZW50aWZpZXI6ICdhZG0wMDIwTW9kZWwnLFxyXG5cdHNlYXJjaE1vZGVsOiBhZG0wMDIwU2VhcmNoU3RvcmUuZGVmYXVsdFZhbHVlXHJcbn07XHJcblxyXG4vKiogY3JlYXRlIG9yIGluaXRpYWxpemUgKi9cclxuY29uc3QgY3JlYXRlID0gbW9kZWwuY3JlYXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG5jb25zdCBhZG0wMDIwU3RvcmUgPSB7XHJcblx0Y3JlYXRlLFxyXG5cdGRlZmF1bHRWYWx1ZSxcclxuXHRtb2RlbFxyXG59O1xyXG5cclxuLyoqIOuqqOuNuCDtg4DsnoUgKi9cclxuZXhwb3J0IHR5cGUgSUFkbTAwMjBNb2RlbFR5cGUgPSBJbnN0YW5jZTx0eXBlb2YgbW9kZWw+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRtMDAyMFN0b3JlO1xyXG4iLCJpbXBvcnQgeyBJbnN0YW5jZSwgdHlwZXMsIGFwcGx5U25hcHNob3QgfSBmcm9tICdtb2J4LXN0YXRlLXRyZWUnO1xyXG5cclxuaW50ZXJmYWNlIElNb2RhbFNldHRpbmdJbmZvIHtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRib2R5Q29udGVudHM/OiBzdHJpbmc7XHJcblx0Zmlyc3RCdG5UZXh0Pzogc3RyaW5nO1xyXG5cdGZpcnN0QnRuQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdG9wRmlyc3RCdG5DbGljaz86ICgpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xyXG5cdHNlY29uZEJ0blRleHQ/OiBzdHJpbmc7XHJcblx0c2Vjb25kQnRuQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdG9wU2Vjb25kQnRuQ2xpY2s/OiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcclxuXHR2ZXJ0aWNhbENlbnRlcmVkPzogYm9vbGVhbjtcclxuXHRpc0ZhZGU/OiBib29sZWFuO1xyXG5cdG9wQ2xvc2VkPzogKCkgPT4gdm9pZDtcclxuXHRpc0Nsb3NlZEluaXQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICog66qo64us7LC9IOuqqOuNuFxyXG4gKi9cclxuY29uc3QgbW9kZWwgPSB0eXBlc1xyXG5cdC5tb2RlbCgnbW9kYWxNb2RlbCcsIHtcclxuXHRcdC8qKiDsiqTthqDslrQg7JWE7J2064207Yuw7YuwICovXHJcblx0XHRpZGVudGlmaWVyOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCAnbW9kYWxNb2RlbCcpLFxyXG5cdFx0aXNPcGVuOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5ib29sZWFuLCBmYWxzZSksXHJcblx0XHR0aXRsZTogdHlwZXMub3B0aW9uYWwodHlwZXMuc3RyaW5nLCAnJyksXHJcblx0XHRib2R5Q29udGVudHM6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgJycpLFxyXG5cdFx0Zmlyc3RCdG5UZXh0OiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHRcdGZpcnN0QnRuQ2xhc3NOYW1lOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHRcdHNlY29uZEJ0blRleHQ6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgJycpLFxyXG5cdFx0c2Vjb25kQnRuQ2xhc3NOYW1lOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHRcdHZlcnRpY2FsQ2VudGVyZWQ6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLmJvb2xlYW4sIHRydWUpLFxyXG5cdFx0aXNGYWRlOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5ib29sZWFuLCB0cnVlKSxcclxuXHRcdGlzQ2xvc2VkSW5pdDogdHlwZXMub3B0aW9uYWwodHlwZXMuYm9vbGVhbiwgZmFsc2UpXHJcblx0fSlcclxuXHQudm9sYXRpbGUoc2VsZiA9PiAoe1xyXG5cdFx0LyoqIOyyq+uyiOynuCDrsoTtirwg7YG066atIOydtOuypO2KuCDtlbjrk6Trn6wgKi9cclxuXHRcdG9wRmlyc3RCdG5DbGljazogbnVsbCxcclxuXHRcdC8qKiDrkZDrsojsp7gg67KE7Yq8IO2BtOumrSDsnbTrsqTtirgg7ZW465Ok65+sICovXHJcblx0XHRvcFNlY29uZEJ0bkNsaWNrOiBudWxsLFxyXG5cdFx0LyoqIGNsb3NlZCDsnbTrsqTtirgg7ZW465Ok65+sICovXHJcblx0XHRvcENsb3NlZDogbnVsbFxyXG5cdH0pKVxyXG5cdC5hY3Rpb25zKHNlbGYgPT4gKHtcclxuXHRcdC8qKiDssqvrsojsp7gg67KE7Yq8IOydtOuypO2KuCDtlbjrk6Trn6wg65Ox66GdICovXHJcblx0XHRzZXRGaXJzdEJ0bkNsaWNrKGNhbGxiYWNrKSB7XHJcblx0XHRcdHNlbGYub3BGaXJzdEJ0bkNsaWNrID0gY2FsbGJhY2s7XHJcblx0XHR9LFxyXG5cdFx0LyoqIOuRkOuyiOynuCDrsoTtirwg7J2067Kk7Yq4IO2VuOuTpOufrCDrk7HroZ0gKi9cclxuXHRcdHNldFNlY29uZEJ0bkNsaWNrKGNhbGxiYWNrKSB7XHJcblx0XHRcdHNlbGYub3BTZWNvbmRCdG5DbGljayA9IGNhbGxiYWNrO1xyXG5cdFx0fSxcclxuXHRcdHNldENsb3NlZChjYWxsYmFjaykge1xyXG5cdFx0XHRzZWxmLm9wQ2xvc2VkID0gY2FsbGJhY2s7XHJcblxyXG5cdFx0XHRpZiAoc2VsZi5pc0Nsb3NlZEluaXQpIHtcclxuXHRcdFx0XHQoc2VsZiBhcyBJTW9kYWxNb2RlbFR5cGUpLnNldEluaXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8qKiDthqDquIAgKi9cclxuXHRcdHNldFRvZ2dsZSgpIHtcclxuXHRcdFx0c2VsZi5pc09wZW4gPSAhc2VsZi5pc09wZW47XHJcblx0XHR9LFxyXG5cdFx0LyoqIO2GoOq4gCB3aXRoIOyEuO2MheygleuztCAqL1xyXG5cdFx0c2V0VG9nZ2xlV2l0aFNldHRpbmcocGFyYW1zOiBJTW9kYWxTZXR0aW5nSW5mbykge1xyXG5cdFx0XHRpZiAocGFyYW1zLnRpdGxlKSB7IHNlbGYudGl0bGUgPSBwYXJhbXMudGl0bGU7IH1cclxuXHRcdFx0aWYgKHBhcmFtcy5ib2R5Q29udGVudHMpIHsgc2VsZi5ib2R5Q29udGVudHMgPSBwYXJhbXMuYm9keUNvbnRlbnRzOyB9XHJcblx0XHRcdGlmIChwYXJhbXMuZmlyc3RCdG5UZXh0KSB7IHNlbGYuZmlyc3RCdG5UZXh0ID0gcGFyYW1zLmZpcnN0QnRuVGV4dDsgfVxyXG5cdFx0XHRpZiAocGFyYW1zLmZpcnN0QnRuQ2xhc3NOYW1lKSB7IHNlbGYuZmlyc3RCdG5DbGFzc05hbWUgPSBwYXJhbXMuZmlyc3RCdG5DbGFzc05hbWU7IH1cclxuXHRcdFx0aWYgKHBhcmFtcy5vcEZpcnN0QnRuQ2xpY2spIHsgc2VsZi5vcEZpcnN0QnRuQ2xpY2sgPSBwYXJhbXMub3BGaXJzdEJ0bkNsaWNrOyB9XHJcblx0XHRcdGlmIChwYXJhbXMuc2Vjb25kQnRuVGV4dCkgeyBzZWxmLnNlY29uZEJ0blRleHQgPSBwYXJhbXMuc2Vjb25kQnRuVGV4dDsgfVxyXG5cdFx0XHRpZiAocGFyYW1zLnNlY29uZEJ0bkNsYXNzTmFtZSkgeyBzZWxmLnNlY29uZEJ0bkNsYXNzTmFtZSA9IHBhcmFtcy5zZWNvbmRCdG5DbGFzc05hbWU7IH1cclxuXHRcdFx0aWYgKHBhcmFtcy5vcFNlY29uZEJ0bkNsaWNrKSB7IHNlbGYub3BTZWNvbmRCdG5DbGljayA9IHBhcmFtcy5vcFNlY29uZEJ0bkNsaWNrOyB9XHJcblx0XHRcdGlmIChwYXJhbXMudmVydGljYWxDZW50ZXJlZCAhPT0gdW5kZWZpbmVkKSB7IHNlbGYudmVydGljYWxDZW50ZXJlZCA9IHBhcmFtcy52ZXJ0aWNhbENlbnRlcmVkOyB9XHJcblx0XHRcdGlmIChwYXJhbXMub3BDbG9zZWQpIHsgc2VsZi5vcENsb3NlZCA9IHBhcmFtcy5vcENsb3NlZDsgfVxyXG5cdFx0XHRpZiAocGFyYW1zLmlzRmFkZSAhPT0gdW5kZWZpbmVkKSB7IHNlbGYuaXNGYWRlID0gcGFyYW1zLmlzRmFkZTsgfVxyXG5cdFx0XHRpZiAocGFyYW1zLmlzQ2xvc2VkSW5pdCAhPT0gdW5kZWZpbmVkKSB7IHNlbGYuaXNDbG9zZWRJbml0ID0gcGFyYW1zLmlzQ2xvc2VkSW5pdDsgfVxyXG5cclxuXHRcdFx0c2VsZi5pc09wZW4gPSAhc2VsZi5pc09wZW47XHJcblx0XHR9LFxyXG5cdFx0LyoqIOyYpO2UiCDsl6zrtoAgKi9cclxuXHRcdHNldE9wZW4odmFsOiBib29sZWFuKSB7XHJcblx0XHRcdHNlbGYuaXNPcGVuID0gdmFsO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDtg4DsnbTti4Agc2V0ICovXHJcblx0XHRzZXRUaXRsZSh2YWw6IHN0cmluZykge1xyXG5cdFx0XHRzZWxmLnRpdGxlID0gdmFsO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDsu6jthZDsuKAg67CU65SUIHNldCAqL1xyXG5cdFx0c2V0Qm9keUNvbnRlbnRzKHZhbDogc3RyaW5nKSB7XHJcblx0XHRcdHNlbGYuYm9keUNvbnRlbnRzID0gdmFsO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDssqvrsojsp7gg67KE7Yq8IHNldCAqL1xyXG5cdFx0c2V0Rmlyc3RCdG5UZXh0KHZhbDogc3RyaW5nKSB7XHJcblx0XHRcdHNlbGYuZmlyc3RCdG5UZXh0ID0gdmFsO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDssqvrsojsp7gg67KE7Yq8IGNzcyBjbGFzcyBzZXQgKi9cclxuXHRcdHNldEZpcnN0QnRuQ2xhc3NOYW1lKHZhbDogc3RyaW5nKSB7XHJcblx0XHRcdHNlbGYuZmlyc3RCdG5DbGFzc05hbWUgPSB2YWw7XHJcblx0XHR9LFxyXG5cdFx0LyoqIOuRkOuyiOynuCDrsoTtirwgc2V0ICovXHJcblx0XHRzZXRTZWNvbmRCdG5UZXh0KHZhbDogc3RyaW5nKSB7XHJcblx0XHRcdHNlbGYuc2Vjb25kQnRuVGV4dCA9IHZhbDtcclxuXHRcdH0sXHJcblx0XHQvKiog65GQ67KI7Ke4IOuyhO2KvCBjc3MgY2xhc3Mgc2V0ICovXHJcblx0XHRzZXRTZWNvbmRCdG5DbGFzc05hbWUodmFsOiBzdHJpbmcpIHtcclxuXHRcdFx0c2VsZi5zZWNvbmRCdG5DbGFzc05hbWUgPSB2YWw7XHJcblx0XHR9LFxyXG5cdFx0LyoqIOyEuOuhnOy4oeyXkOyEnCDshLzthLDroZwg7JyE7LmYIO2VoOyngCDsl6zrtoAgKi9cclxuXHRcdHNldFZlcnRpY2FsQ2VudGVyZWQodmFsOiBib29sZWFuKSB7XHJcblx0XHRcdHNlbGYudmVydGljYWxDZW50ZXJlZCA9IHZhbDtcclxuXHRcdH0sXHJcblx0XHQvKiogZmFkZSBzZXQgKi9cclxuXHRcdHNldElzRmFkZSh2YWw6IGJvb2xlYW4pIHtcclxuXHRcdFx0c2VsZi5pc0ZhZGUgPSB2YWw7XHJcblx0XHR9LFxyXG5cdFx0LyoqIOy0iOq4sO2ZlCAqL1xyXG5cdFx0c2V0SW5pdCgpIHtcclxuXHRcdFx0Ly8gdm9sYXRpbGUgaW5pdFxyXG5cdFx0XHRzZWxmLm9wRmlyc3RCdG5DbGljayA9IG51bGw7XHJcblx0XHRcdHNlbGYub3BTZWNvbmRCdG5DbGljayA9IG51bGw7XHJcblx0XHRcdHNlbGYub3BDbG9zZWQgPSBudWxsO1xyXG5cclxuXHRcdFx0YXBwbHlTbmFwc2hvdChzZWxmLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0pKTtcclxuXHJcbi8qKiDstIjquLDtmZQg6rCSICovXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IHtcclxuXHRpZGVudGlmaWVyOiAnbW9kYWxNb2RlbCcsXHJcblx0aXNPcGVuOiBmYWxzZSxcclxuXHR0aXRsZTogJ+yVjOumvCcsXHJcblx0Ym9keUNvbnRlbnRzOiAnJyxcclxuXHRmaXJzdEJ0blRleHQ6ICftmZXsnbgnLFxyXG5cdGZpcnN0QnRuQ2xhc3NOYW1lOiAnZC1ibG9jaycsXHJcblx0b3BGaXJzdEJ0bkNsaWNrOiBudWxsLFxyXG5cdHNlY29uZEJ0blRleHQ6ICcnLFxyXG5cdHNlY29uZEJ0bkNsYXNzTmFtZTogJ2Qtbm9uZScsXHJcblx0b3BTZWNvbmRCdG5DbGljazogbnVsbCxcclxuXHR2ZXJ0aWNhbENlbnRlcmVkOiB0cnVlLFxyXG5cdGlzRmFkZTogdHJ1ZSxcclxuXHRvcENsb3NlZDogbnVsbCxcclxuXHRpc0Nsb3NlZEluaXQ6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGUgPSBtb2RlbC5jcmVhdGUoZGVmYXVsdFZhbHVlKTtcclxuXHJcbmNvbnN0IG1vZGFsU3RvcmUgPSB7XHJcblx0Y3JlYXRlLFxyXG5cdGRlZmF1bHRWYWx1ZSxcclxuXHRtb2RlbFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSU1vZGFsTW9kZWxUeXBlID0gSW5zdGFuY2U8dHlwZW9mIG1vZGVsPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsU3RvcmU7XHJcbiIsImltcG9ydCB7IGFwcGx5U25hcHNob3QsIEluc3RhbmNlLCB0eXBlcyB9IGZyb20gJ21vYngtc3RhdGUtdHJlZSc7XHJcbmltcG9ydCB1aVN0b3JlIGZyb20gJ34vc3RvcmVzL3VpL3VpU3RvcmUnO1xyXG4vKiogYWRtICovXHJcbmltcG9ydCBhZG0wMDIwU3RvcmUgZnJvbSAnfi9zdG9yZXMvYWRtMDAyMC9hZG0wMDIwU3RvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgSVN0b3JlID0gSW5zdGFuY2U8dHlwZW9mIHN0b3JlPjtcclxuXHJcbmxldCBpbml0U3RvcmU6IElTdG9yZSA9IG51bGwgYXMgYW55O1xyXG5cclxuLyoqXHJcbiAqIHN0b3JlXHJcbiAqL1xyXG5jb25zdCBzdG9yZSA9IHR5cGVzLm1vZGVsKCdzdG9yZScsIHtcclxuXHQvKiog7Iqk7Yag7Ja0IOyVhOydtOuNtO2LsO2LsCAqL1xyXG5cdGlkZW50aWZpZXI6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLmlkZW50aWZpZXIsICdzdG9yZScpLFxyXG5cclxuXHQvKiogVUkg66qo6424ICovXHJcblx0dWlNb2RlbDogdHlwZXMub3B0aW9uYWwodWlTdG9yZS5tb2RlbCwgKCkgPT4gdWlTdG9yZS5jcmVhdGUpLFxyXG5cclxuXHQvKiogYWRtICovXHJcblxyXG5cdC8qKiBhZG0wMDIwIOuqqOuNuCAqL1xyXG5cdGFkbTAwMjBNb2RlbDogdHlwZXMub3B0aW9uYWwoYWRtMDAyMFN0b3JlLm1vZGVsLCAoKSA9PiBhZG0wMDIwU3RvcmUuY3JlYXRlKSxcclxufSk7XHJcblxyXG4vKiog7Iqk7Yag7Ja0IGluaXRpYWxpemUgKi9cclxuY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKGlzU2VydmVyLCBzbmFwc2hvdCA9IG51bGwpID0+IHtcclxuXHRjb25zdCBkZWZhdWx0VmFsdWUgPSB7XHJcblx0XHR1aU1vZGVsOiB7IC4uLnVpU3RvcmUuZGVmYXVsdFZhbHVlIH0sXHJcblx0XHQvKiogYWRtIE1vZGVsICovXHJcblx0XHRhZG0wMDIwTW9kZWw6IHsgLi4uYWRtMDAyMFN0b3JlLmRlZmF1bHRWYWx1ZSB9LFxyXG5cdH07XHJcblxyXG5cdC8vIOyEnOuyhOydvCDqsr3smrDsl5Ag64yA7ZWcIOuhnOyngSDsnpHshLFcclxuXHRpZiAoaXNTZXJ2ZXIpIHtcclxuXHRcdGluaXRTdG9yZSA9IHN0b3JlLmNyZWF0ZShkZWZhdWx0VmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8g7YG065287J207Ja47Yq47J28IOqyveyasOyXkCDrjIDtlZwg66Gc7KeBIOyekeyEsVxyXG5cdGlmICgoc3RvcmUgYXMgYW55KSA9PT0gbnVsbCkge1xyXG5cdFx0aW5pdFN0b3JlID0gc3RvcmUuY3JlYXRlKGRlZmF1bHRWYWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyDsiqTrg4Xsg7cg7J6I7J2EIOqyveyasCDsiqTthqDslrTsl5Ag7Iqk64OF7IO37J2EIOyggeyaqVxyXG5cdGlmIChzbmFwc2hvdCkge1xyXG5cdFx0YXBwbHlTbmFwc2hvdChpbml0U3RvcmUsIHNuYXBzaG90KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBpbml0U3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplU3RvcmUgfTtcclxuIiwiaW1wb3J0IHsgSW5zdGFuY2UsIHR5cGVzIH0gZnJvbSAnbW9ieC1zdGF0ZS10cmVlJztcclxuXHJcbi8qKlxyXG4gKiDroIjtlITtirjrqZTribRcclxuICovXHJcbmNvbnN0IG1vZGVsID0gdHlwZXMubW9kZWwoJ2xlZnRNZW51TW9kZWwnLCB7XHJcblx0LyoqIOyKpO2GoOyWtCDslYTsnbTrjbTti7Dti7AgKi9cclxuXHRpZGVudGlmaWVyOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCAnbGVmdE1lbnVNb2RlbCcpLFxyXG5cdGlkOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHRyZWZJZDogdHlwZXMubWF5YmVOdWxsKHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgJycpKSxcclxuXHRkZXB0aDogdHlwZXMubWF5YmVOdWxsKHR5cGVzLm9wdGlvbmFsKHR5cGVzLmludGVnZXIsIDEpKSxcclxuXHR0aXRsZTogdHlwZXMubWF5YmVOdWxsKHR5cGVzLm9wdGlvbmFsKHR5cGVzLnN0cmluZywgJycpKSxcclxuXHRpY29uOiB0eXBlcy5tYXliZU51bGwodHlwZXMub3B0aW9uYWwodHlwZXMuc3RyaW5nLCAnJykpLFxyXG5cdGxpbmtVcmw6IHR5cGVzLm1heWJlTnVsbCh0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSksXHJcblx0aXNBY3RpdmU6IHR5cGVzLm1heWJlTnVsbCh0eXBlcy5vcHRpb25hbCh0eXBlcy5ib29sZWFuLCBmYWxzZSkpLFxyXG5cdG1lbnVUeXBlOiB0eXBlcy5tYXliZU51bGwodHlwZXMub3B0aW9uYWwodHlwZXMuc3RyaW5nLCAnRicpKVxyXG59KTtcclxuXHJcbi8qKiDstIjquLDtmZQg6rCSICovXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IHtcclxuXHRpZGVudGlmaWVyOiAnJyxcclxuXHRpZDogJycsXHJcblx0cmVmSWQ6ICcnLFxyXG5cdGRlcHRoOiAxLFxyXG5cdHRpdGxlOiAnJyxcclxuXHRpY29uOiAnJyxcclxuXHRsaW5rVXJsOiAnJyxcclxuXHRpc0FjdGl2ZTogZmFsc2UsXHJcblx0bWVudVR5cGU6ICdGJ1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlID0gbW9kZWwuY3JlYXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG5jb25zdCBsZWZ0TWVudVN0b3JlID0ge1xyXG5cdGNyZWF0ZSxcclxuXHRkZWZhdWx0VmFsdWUsXHJcblx0bW9kZWxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIElMZWZ0TWVudU1vZGVsVHlwZSA9IEluc3RhbmNlPHR5cGVvZiBtb2RlbD47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZWZ0TWVudVN0b3JlO1xyXG4iLCJpbXBvcnQgeyBJbnN0YW5jZSwgdHlwZXMsIGFwcGx5U25hcHNob3QsIGZsb3cgfSBmcm9tICdtb2J4LXN0YXRlLXRyZWUnO1xyXG5pbXBvcnQgbGVmdE1lbnVTdG9yZSBmcm9tICcuL2xlZnRNZW51U3RvcmUnO1xyXG5pbXBvcnQgbW9kYWxTdG9yZSBmcm9tICd+L3N0b3Jlcy9jb21tb24vbW9kYWxTdG9yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEVudGl0eV9NZW51X0xpc3QgfSBmcm9tICd+L2dlbi9ncmFwaHFsLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBVSSDrqqjrjbggLSBIVE1MIFVJIOy7qO2KuOuhpOydmCDsg4Htg5zqsJJcclxuICovXHJcbmNvbnN0IG1vZGVsID0gdHlwZXNcclxuXHQubW9kZWwoJ3VpTW9kZWwnLCB7XHJcblx0XHQvKiog7Iqk7Yag7Ja0IOyVhOydtOuNtO2LsO2LsCAqL1xyXG5cdFx0aWRlbnRpZmllcjogdHlwZXMub3B0aW9uYWwodHlwZXMuaWRlbnRpZmllciwgJ3VpTW9kZWwnKSxcclxuXHJcblx0XHQvKiog66CI7ZSE7Yq4IOuplOuJtCDrpqzsiqTtirggKi9cclxuXHRcdGxlZnRNZW51TGlzdDogdHlwZXMub3B0aW9uYWwodHlwZXMuYXJyYXkobGVmdE1lbnVTdG9yZS5tb2RlbCksIFtdKSxcclxuXHJcblx0XHQvKiog66CI7ZSE7Yq466mU64m0IGRlcHRoIDEgc2VsZWN0ZWQgaWQgICovXHJcblx0XHRkZXB0aDFTZWxlY3RlZElkOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHJcblx0XHQvKiog66CI7ZSE7Yq466mU64m0IGRlcHRoIDIgc2VsZWN0ZWQgaWQgICovXHJcblx0XHRkZXB0aDJTZWxlY3RlZElkOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHJcblx0XHQvKiog66CI7ZSE7Yq466mU64m0IGRlcHRoIDMgc2VsZWN0ZWQgaWQgICovXHJcblx0XHRkZXB0aDNTZWxlY3RlZElkOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5zdHJpbmcsICcnKSxcclxuXHJcblx0XHQvKiog66qo64usIOy7qO2FkOy4oCAqL1xyXG5cdFx0bW9kYWxNb2RlbDogdHlwZXMub3B0aW9uYWwobW9kYWxTdG9yZS5tb2RlbCwgbW9kYWxTdG9yZS5kZWZhdWx0VmFsdWUpLFxyXG5cdH0pXHJcblx0LmFjdGlvbnMoc2VsZiA9PiAoe1xyXG5cdFx0LyoqIOugiO2UhO2KuOuplOuJtCDrjbDsnbTthLAgc2V0ICovXHJcblx0XHRzZXRMZWZ0TWVudShtZW51TGlzdDogRW50aXR5X01lbnVfTGlzdFtdKSB7XHJcblx0XHRcdGNvbnN0IG1lbnVEYXRhID0gXy5tYXAobWVudUxpc3QsIHZhbCA9PiAoe1xyXG5cdFx0XHRcdGlkOiB2YWwuTUVOVV9JRCxcclxuXHRcdFx0XHRyZWZJZDogdmFsLlBfTUVOVV9JRCxcclxuXHRcdFx0XHRkZXB0aDogdmFsLkxFVkVMLFxyXG5cdFx0XHRcdHRpdGxlOiB2YWwuTUVOVV9OQU1FLFxyXG5cdFx0XHRcdGljb246IHZhbC5JQ09OLFxyXG5cdFx0XHRcdGxpbmtVcmw6IHZhbC5VUkwsXHJcblx0XHRcdFx0aXNBY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdG1lbnVUeXBlOiB2YWwuTUVOVV9UWVBFXHJcblx0XHRcdH0pKTtcclxuXHJcblx0XHRcdHNlbGYubGVmdE1lbnVMaXN0LmNsZWFyKCk7XHJcblx0XHRcdHNlbGYubGVmdE1lbnVMaXN0LnB1c2goLi4ubWVudURhdGEpO1xyXG5cdFx0fSxcclxuXHRcdC8qKiDroIjtlITtirjrqZTribQgc2VsZWN0ZWQgaWQgc2V0ICovXHJcblx0XHRzZXRMZWZ0TWVudUNoYW5nZUlkKHNlbGVjdGVkSWQ6IHN0cmluZykge1xyXG5cdFx0XHRjb25zdCBtZW51ID0gXy5maW5kKHNlbGYubGVmdE1lbnVMaXN0LCB7IGlkOiBzZWxlY3RlZElkIH0pO1xyXG5cdFx0XHRjb25zdCBkZXB0aCA9IG1lbnUuZGVwdGg7XHJcblxyXG5cdFx0XHRpZiAoZGVwdGggPT09IDEpIHtcclxuXHRcdFx0XHRzZWxmLmRlcHRoMVNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZGVwdGggPT09IDIpIHtcclxuXHRcdFx0XHRzZWxmLmRlcHRoMlNlbGVjdGVkSWQgPSBzZWxlY3RlZElkO1xyXG5cdFx0XHRcdHNlbGYuZGVwdGgxU2VsZWN0ZWRJZCA9IG1lbnUucmVmSWQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChkZXB0aCA9PT0gMykge1xyXG5cdFx0XHRcdHNlbGYuZGVwdGgzU2VsZWN0ZWRJZCA9IHNlbGVjdGVkSWQ7XHJcblx0XHRcdFx0c2VsZi5kZXB0aDJTZWxlY3RlZElkID0gbWVudS5yZWZJZDtcclxuXHRcdFx0XHRzZWxmLmRlcHRoMVNlbGVjdGVkSWQgPSBfLmZpbmQoc2VsZi5sZWZ0TWVudUxpc3QsIHtcclxuXHRcdFx0XHRcdGlkOiBzZWxmLmRlcHRoMlNlbGVjdGVkSWRcclxuXHRcdFx0XHR9KS5yZWZJZDtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNldExlZnRNZW51QWN0aXZlKGlkOiBzdHJpbmcpIHtcclxuXHRcdFx0Y29uc3QgbWVudSA9IF8uZmluZChzZWxmLmxlZnRNZW51TGlzdCwgeyBpZCB9KTtcclxuXHRcdFx0Y29uc3QgZGVwdGggPSBtZW51LmRlcHRoO1xyXG5cdFx0XHRjb25zdCBwcmV2TWVudSA9IF8uZmluZChzZWxmLmxlZnRNZW51TGlzdCwgeyBkZXB0aCwgaXNBY3RpdmU6IHRydWUgfSk7XHJcblx0XHRcdGNvbnN0IHByZXZNZW51SWQgPSBwcmV2TWVudSAmJiBwcmV2TWVudS5pZDtcclxuXHJcblx0XHRcdChzZWxmIGFzIElVaU1vZGVsVHlwZSkuc2V0TGVmdE1lbnVDaGFuZ2VJZChpZCk7XHJcblxyXG5cdFx0XHQvLyBkZXB0aDIg66mU64m0IHRvZ2dsZSDquLDriqVcclxuXHRcdFx0aWYgKGRlcHRoID09PSAyKSB7XHJcblx0XHRcdFx0bWVudS5pc0FjdGl2ZSA9ICFtZW51LmlzQWN0aXZlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZGVwdGggPT09IDMpIHtcclxuXHRcdFx0XHQvLyDsnbTsoIQg7ISg7YOd7ZWcIGRlcHRoMyDrqZTribQgYWN0aXZlIGZhbHNlIOuhnCBzZXRcclxuXHRcdFx0XHRpZiAocHJldk1lbnVJZCAmJiBwcmV2TWVudUlkICE9PSBtZW51LmlkKSB7XHJcblx0XHRcdFx0XHRwcmV2TWVudS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gZGVwdGgzIOuplOuJtCBhY3RpdmUgc2V0XHJcblx0XHRcdFx0bWVudS5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdC8qIGRlcHRoMyDsnbTrqbQgZGVwdGgyKOyXrOufrOqwnCDshKDtg53qsIDriqXtlZjrr4DroZwgZmlsdGVyIOyggeyaqSkg64+EIGFjdGl2ZSDrsJTqv5TspJjslbztlaggKi9cclxuXHRcdFx0XHQvLyDsnbTsoITsl5Ag7ISg7YOd7ZWcIGRlcHRoMiDrqZTribTrk6Qo7ZiE7J6sIOuplOuJtOydmCBkZXB0aDIg64qUIOygnOyZuCkg6rCA7KC47Jik6riwXHJcblx0XHRcdFx0Y29uc3QgcHJldkRlcHRoMk1lbnUgPSBfKHNlbGYubGVmdE1lbnVMaXN0KVxyXG5cdFx0XHRcdFx0LmZpbHRlcih7IGRlcHRoOiAyLCBpc0FjdGl2ZTogdHJ1ZSB9KVxyXG5cdFx0XHRcdFx0LnJlamVjdCh7IGlkOiBtZW51LnJlZklkIH0pXHJcblx0XHRcdFx0XHQudmFsdWUoKTtcclxuXHJcblx0XHRcdFx0Ly8g7ZiE7J6sIGRwdGgz66mU64m07J2YIGRlcHRoMiDrqZTribRcclxuXHRcdFx0XHRjb25zdCBub3dEZXB0aDJNZW51ID0gXy5maW5kKHNlbGYubGVmdE1lbnVMaXN0LCB7IGlkOiBtZW51LnJlZklkIH0pO1xyXG5cclxuXHRcdFx0XHQvLyDsp4DquIggZGVwaDMg66mU64m07J2YIGRlcHRoMiDrqZTribTrpbwg7KCc7Jm47ZWcICBhY3RpdmUgIGRlcHRoMiDrqZTribQg66qo65GQICBhY3RpdmXrpbwgZmFsc2Ug66GcIHNldFxyXG5cdFx0XHRcdGlmIChwcmV2RGVwdGgyTWVudSkge1xyXG5cdFx0XHRcdFx0cHJldkRlcHRoMk1lbnUubWFwKHZhbCA9PiAodmFsLmlzQWN0aXZlID0gZmFsc2UpKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIO2YhOyerCBkZXB0aDMg66mU64m07J2YIGRlcHRoMiDrqZTribQgYWN0aXZlPXRydWUg66GcIHNldFxyXG5cdFx0XHRcdG5vd0RlcHRoMk1lbnUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c2V0SW5pdCgpIHtcclxuXHRcdFx0YXBwbHlTbmFwc2hvdChzZWxmLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0pKVxyXG5cdC52aWV3cyhzZWxmID0+ICh7XHJcblx0XHQvKiog66mU64m066as7Iqk7Yq4IOqwgOyguOyYpOq4sCjrjZTrr7jrjbDsnbTthLApICovXHJcblx0XHRnZXRBbGxMZWZ0TWVudUxpc3QoKSB7XHJcblx0XHRcdHJldHVybiBzZWxmLmxlZnRNZW51TGlzdDtcclxuXHRcdH0sXHJcblx0XHQvKiogbmF2cGF0aCDqsIDsoLjsmKTquLAgKi9cclxuXHRcdGdldE5hdlBhdGhzKCkge1xyXG5cdFx0XHQvLyBuYXZwYXRoIOydmCDqsr3smrDripQg7ISg7YOd7ZWcICBkZXB0aDMg66mU64m066W8IOq4sOykgOycvOuhnCDrjbDsnbTthLDrpbwg6rCA7KC47Jio64ukLlxyXG5cdFx0XHQvLyAg7IKs7Jqp7J6Q6rCAIGRlcHRoMyDrqZTribTrpbwgIO2BtOumre2VtOyEnCDtmZzshLHtmZQg7ZW064aT7J2AIOyDge2DnOyXkOyEnCBkZXB0aDIo7Y+0642UKeulvCDtgbTrpq3tlaAg7IiY64+EIOyeiOycvOuLiFxyXG5cdFx0XHQvLyBkZXB0aDJTZWxlY3RlZElkIOqwkuydhCDqsIDsoLjsmKTrqbQg7JWI65Cc64ukLlxyXG5cdFx0XHRpZiAoIXNlbGYuZGVwdGgzU2VsZWN0ZWRJZCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBkZXB0aDNNZW51ID0gXy5maW5kKHNlbGYubGVmdE1lbnVMaXN0LCB7XHJcblx0XHRcdFx0aWQ6IHNlbGYuZGVwdGgzU2VsZWN0ZWRJZFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgZGVwdGgyTWVudSA9IF8uZmluZChzZWxmLmxlZnRNZW51TGlzdCwgeyBpZDogZGVwdGgzTWVudS5yZWZJZCB9KTtcclxuXHRcdFx0Y29uc3QgZGVwdGgxTWVudSA9IF8uZmluZChzZWxmLmxlZnRNZW51TGlzdCwgeyBpZDogZGVwdGgyTWVudS5yZWZJZCB9KTtcclxuXHJcblx0XHRcdHJldHVybiBbZGVwdGgxTWVudS50aXRsZSwgZGVwdGgyTWVudS50aXRsZSwgZGVwdGgzTWVudS50aXRsZV07XHJcblx0XHR9LFxyXG5cdFx0LyoqIGRlcHRoIDEg66mU64m0IOumrOyKpO2KuCAqL1xyXG5cdFx0Z2V0RGVwdGgxTWVudUxpc3QoKSB7XHJcblx0XHRcdHJldHVybiBfLmZpbHRlcihzZWxmLmxlZnRNZW51TGlzdCwgeyBkZXB0aDogMSB9KTtcclxuXHRcdH0sXHJcblx0XHQvKiogZGVwdGggMiDrqZTribQg66as7Iqk7Yq4ICovXHJcblx0XHRnZXREZXB0aDJNZW51TGlzdChyZWZJZDogc3RyaW5nKSB7XHJcblx0XHRcdHJldHVybiBfLmZpbHRlcihzZWxmLmxlZnRNZW51TGlzdCwgeyBkZXB0aDogMiwgcmVmSWQgfSk7XHJcblx0XHR9LFxyXG5cdFx0LyoqIGRlcHRoIDMg66mU64m0IOumrOyKpO2KuCAqL1xyXG5cdFx0Z2V0RGVwdGgzTWVudUxpc3QocmVmSWQ6IHN0cmluZykge1xyXG5cdFx0XHRyZXR1cm4gXy5maWx0ZXIoc2VsZi5sZWZ0TWVudUxpc3QsIHsgZGVwdGg6IDMsIHJlZklkIH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKiBpZOulvCDqsIDsp4Dqs6Ag66mU64m07KCV67O0IOqwgOyguOyYpOq4sCAqL1xyXG5cdFx0Z2V0TWVudUJ5SWQoaWQ6IHN0cmluZykge1xyXG5cdFx0XHRyZXR1cm4gXy5maW5kKHNlbGYubGVmdE1lbnVMaXN0LCB7IGlkIH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKiBsaW5rVXJsIOydhCDqsIDsp4Dqs6Ag66mU64m07KCV67O0IOqwgOyguOyYpOq4sCAqL1xyXG5cdFx0Z2V0TWVudUJ5TGlua1VybChsaW5rVXJsOiBzdHJpbmcpIHtcclxuXHRcdFx0cmV0dXJuIF8uZmluZChzZWxmLmxlZnRNZW51TGlzdCwgeyBsaW5rVXJsIH0pO1xyXG5cdFx0fVxyXG5cdH0pKTtcclxuXHJcbi8qKiDstIjquLDtmZQg6rCSICovXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZSA9IHtcclxuXHRpZGVudGlmaWVyOiAndWlNb2RlbCcsXHJcblx0bGVmdE1lbnVMaXN0OiBbXSxcclxuXHRkZXB0aDFTZWxlY3RlZElkOiAnJyxcclxuXHRkZXB0aDJTZWxlY3RlZElkOiAnJyxcclxuXHRkZXB0aDNTZWxlY3RlZElkOiAnJyxcclxuXHRuYXZQYXRoczogW10sXHJcblx0bW9kYWxNb2RlbDoge1xyXG5cdFx0aXNPcGVuOiBmYWxzZSxcclxuXHRcdHRpdGxlOiAn7JWM66a8JyxcclxuXHRcdGJvZHlDb250ZW50czogJycsXHJcblx0XHRmaXJzdEJ0blRleHQ6ICftmZXsnbgnLFxyXG5cdFx0Zmlyc3RCdG5DbGFzc05hbWU6ICcnLFxyXG5cdFx0c2Vjb25kQnRuVGV4dDogJycsXHJcblx0XHRzZWNvbmRCdG5DbGFzc05hbWU6ICdkLW5vbmUnLFxyXG5cdFx0dmVydGljYWxDZW50ZXJlZDogdHJ1ZVxyXG5cdH1cclxufTtcclxuXHJcbi8qKiBjcmVhdGUgb3IgaW5pdGlhbGl6ZSAqL1xyXG5jb25zdCBjcmVhdGUgPSBtb2RlbC5jcmVhdGUoZGVmYXVsdFZhbHVlKTtcclxuXHJcbmNvbnN0IHVpU3RvcmUgPSB7XHJcblx0Y3JlYXRlLFxyXG5cdGRlZmF1bHRWYWx1ZSxcclxuXHRtb2RlbFxyXG59O1xyXG5cclxuLyoqIHVp66qo6424IO2DgOyehSAqL1xyXG5leHBvcnQgdHlwZSBJVWlNb2RlbFR5cGUgPSBJbnN0YW5jZTx0eXBlb2YgbW9kZWw+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdWlTdG9yZTtcclxuIiwiXHJcbmltcG9ydCB7XHJcblx0QXBvbGxvQ2xpZW50LFxyXG5cdEluTWVtb3J5Q2FjaGUsXHJcblx0Tm9ybWFsaXplZENhY2hlT2JqZWN0LFxyXG5cdEFwb2xsb0xpbmssXHJcblx0Y3JlYXRlSHR0cExpbmtcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcclxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yXCI7XHJcblxyXG5pbnRlcmZhY2UgSU9wdGlvbnMge1xyXG5cdGdldFRva2VuOiAoKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+IHwgbnVsbCA9IG51bGw7XHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5jb25zdCBjcmVhdGUgPSAocm91dGVyOiBSb3V0ZXIsIGluaXRpYWxTdGF0ZTogYW55LCB7IGdldFRva2VuIH06IElPcHRpb25zKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlIGluaXQnKTtcclxuICAgIFx0Ly8gQXBvbGxvIEdyYXBoUUwg7ISc67KEIFVSTCDshLjtjIVcclxuXHRjb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcclxuXHRcdHVyaTogcHJvY2Vzcy5lbnYuQVBJX1NFUlZFUl9VUkwsXHJcblx0XHRjcmVkZW50aWFsczogJ2luY2x1ZGUnXHJcblx0XHQvLyDsooXrpZg6IG9taXQo7IOd6561KSwgaW5jbHVkZSjri6Trpbgg64+E66mU7J247J28IOqyveyasCksIHNhbWUtb3JpZ2luKOqwmeydgCDrj4TrqZTsnbjsnbwg6rK97JqwKVxyXG5cdFx0Ly8gY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuXHR9KTtcclxuXHJcbiAgICBjb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKHJlcSwgeyBoZWFkZXJzIH0pID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvb2tpZTogdG9rZW4gPyBgcWlkPSR7dG9rZW59YCA6ICcnXHJcbiAgICAgICAgICAgICAgICAvLyBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcihcclxuXHRcdCh7IHJlc3BvbnNlLCBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IsIG9wZXJhdGlvbiwgZm9yd2FyZCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChncmFwaFFMRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ3JhcGhRTEVycm9ycycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYXBvbGxvTGluayA9IFtlcnJvckxpbmssIGF1dGhMaW5rLCBodHRwTGlua10gYXMgQXBvbGxvTGlua1tdO1xyXG5cclxuICAgIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuXHRcdGNvbm5lY3RUb0RldlRvb2xzOiBpc0Jyb3dzZXIsXHJcblx0XHRzc3JNb2RlOiAhaXNCcm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXHJcblx0XHRsaW5rOiBBcG9sbG9MaW5rLmZyb20oYXBvbGxvTGluayksXHJcblx0XHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSlcclxuXHR9KTtcclxufSAgICBcclxuXHJcblxyXG5cclxuY29uc3QgaW5pdEFwb2xsbyA9IChcclxuXHRyb3V0ZXI6IFJvdXRlcixcclxuXHRpbml0aWFsU3RhdGU6IGFueSxcclxuXHRvcHRpb25zOiBJT3B0aW9uc1xyXG4pID0+IHtcclxuXHQvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcclxuXHQvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxyXG5cdGlmICghaXNCcm93c2VyKSB7XHJcblx0XHRyZXR1cm4gY3JlYXRlKHJvdXRlciwgaW5pdGlhbFN0YXRlLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcclxuXHRpZiAoIWFwb2xsb0NsaWVudCkge1xyXG5cdFx0YXBvbGxvQ2xpZW50ID0gY3JlYXRlKHJvdXRlciwgaW5pdGlhbFN0YXRlLCBvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0QXBvbGxvOyIsIi8vIGZhbHNlIOydtOuptCDshJzrsoTsl5DshJwg7Iuk7ZaJLiB0cnVlIOydtOuptCDtgbTrnbzsnbTslrjtirjsl5DshJwg7Iuk7ZaJ65CY7JeI64uk64qUIOydmOuvuFxyXG5leHBvcnQgZGVmYXVsdCAocHJvY2VzcyBhcyBhbnkpLmJyb3dzZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgTm9ybWFsaXplZENhY2hlT2JqZWN0IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgaW5pdEFwb2xsbyBmcm9tICcuL2luaXRBcG9sbG8nO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnfi91dGlscy9pc0Jyb3dzZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcT86IGFueSwgb3B0aW9ucyA9IHt9KSB7XHJcblx0cmV0dXJuIGNvb2tpZS5wYXJzZShyZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgJycgOiBkb2N1bWVudC5jb29raWUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5jb25zdCB3aXRoQXBvbGxvID0gKEFwcDogYW55KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdFx0YXBvbGxvU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG5cdFx0fTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBhbnkpIHtcclxuXHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdENvbXBvbmVudCxcclxuXHRcdFx0XHRyb3V0ZXIsXHJcblx0XHRcdFx0Y3R4OiB7IHJlcSwgcmVzIH1cclxuXHRcdFx0fSA9IGN0eDtcclxuXHRcdFx0Y29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbyhcclxuXHRcdFx0XHRyb3V0ZXIsXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Z2V0VG9rZW46ICgpID0+IHBhcnNlQ29va2llcyhyZXEpLnFpZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGN0eC5jdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvO1xyXG5cclxuXHRcdFx0bGV0IGFwcFByb3BzID0ge307XHJcblx0XHRcdGlmIChBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XHJcblx0XHRcdFx0YXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXMgJiYgcmVzLmZpbmlzaGVkKSB7XHJcblx0XHRcdFx0Ly8gV2hlbiByZWRpcmVjdGluZywgdGhlIHJlc3BvbnNlIGlzIGZpbmlzaGVkLlxyXG5cdFx0XHRcdC8vIE5vIHBvaW50IGluIGNvbnRpbnVpbmcgdG8gcmVuZGVyXHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzQnJvd3Nlcikge1xyXG5cdFx0XHRcdC8vIFJ1biBhbGwgZ3JhcGhxbCBxdWVyaWVzIGluIHRoZSBjb21wb25lbnQgdHJlZVxyXG5cdFx0XHRcdC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxyXG5cdFx0XHRcdC8vIHRyeSB7XHJcblx0XHRcdFx0Ly8gXHQvLyBSdW4gYWxsIEdyYXBoUUwgcXVlcmllc1xyXG5cdFx0XHRcdC8vIFx0YXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxyXG5cdFx0XHRcdC8vIFx0XHQ8QXBwXHJcblx0XHRcdFx0Ly8gXHRcdFx0ey4uLmFwcFByb3BzfVxyXG5cdFx0XHRcdC8vIFx0XHRcdENvbXBvbmVudD17Q29tcG9uZW50fVxyXG5cdFx0XHRcdC8vIFx0XHRcdHJvdXRlcj17cm91dGVyfVxyXG5cdFx0XHRcdC8vIFx0XHRcdGFwb2xsb0NsaWVudD17YXBvbGxvfVxyXG5cdFx0XHRcdC8vIFx0XHQvPlxyXG5cdFx0XHRcdC8vIFx0KTtcclxuXHRcdFx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdC8vIFx0Ly8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG5cdFx0XHRcdC8vIFx0Ly8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcclxuXHRcdFx0XHQvLyBcdC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxyXG5cdFx0XHRcdC8vIFx0Y29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcclxuXHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcblx0XHRcdFx0Ly8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcblx0XHRcdFx0SGVhZC5yZXdpbmQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbydzIHN0b3JlXHJcblx0XHRcdGNvbnN0IGFwb2xsb1N0YXRlID0gYXBvbGxvLmNhY2hlLmV4dHJhY3QoKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uYXBwUHJvcHMsXHJcblx0XHRcdFx0YXBvbGxvU3RhdGVcclxuXHRcdFx0fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHRcdC8vIGBnZXREYXRhRnJvbVRyZWVgIHJlbmRlcnMgdGhlIGNvbXBvbmVudCBmaXJzdCwgdGhlIGNsaWVudCBpcyBwYXNzZWQgb2ZmIGFzIGEgcHJvcGVydHkuXHJcblx0XHRcdC8vIEFmdGVyIHRoYXQgcmVuZGVyaW5nIGlzIGRvbmUgdXNpbmcgTmV4dCdzIG5vcm1hbCByZW5kZXJpbmcgcGlwZWxpbmVcclxuXHRcdFx0dGhpcy5hcG9sbG9DbGllbnQgPSBpbml0QXBvbGxvKHByb3BzLnJvdXRlciwgcHJvcHMuYXBvbGxvU3RhdGUsIHtcclxuXHRcdFx0XHRnZXRUb2tlbjogKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlQ29va2llcygpLnRva2VuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHJlbmRlcigpIHtcclxuXHRcdFx0cmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IGFwb2xsb0NsaWVudD17dGhpcy5hcG9sbG9DbGllbnR9IC8+O1xyXG5cdFx0fVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtZGV2dG9vbHMtbXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1zdGF0ZS10cmVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=