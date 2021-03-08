webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_0__["useObserver"])(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/assertEnvironment.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/assertEnvironment.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["useStaticRendering"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["observer"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return _useObserver__WEBPACK_IMPORTED_MODULE_5__["useObserver"]; });

/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["Observer"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _utils__WEBPACK_IMPORTED_MODULE_7__["useForceUpdate"]; });

/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__["useAsObservableSource"]; });

/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return _useLocalStore__WEBPACK_IMPORTED_MODULE_9__["useLocalStore"]; });

/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdate", function() { return _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__["useQueuedForceUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdateBlock", function() { return _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__["useQueuedForceUpdateBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return _observerBatching__WEBPACK_IMPORTED_MODULE_2__["isObserverBatched"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return _observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });




Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__["observerBatching"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__["unstable_batchedUpdates"]);











/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__["useObserver"])(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observerBatching.js":
/*!*************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observerBatching.js ***!
  \*************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNoopBatch", function() { return defaultNoopBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return observerBatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObserverBatched", function() { return isObserverBatched; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSymbol"])("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: reactionScheduler });
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobal"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobal"])()[observerBatchingConfiguredSymbol]; };


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/printDebugValue.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/printDebugValue.js ***!
  \************************************************************/
/*! exports provided: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDebugValue", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function printDebugValue(v) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js ***!
  \********************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrackingData", function() { return createTrackingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS", function() { return CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMER_LOOP_MILLIS", function() { return CLEANUP_TIMER_LOOP_MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleCleanupOfReactionIfLeaked", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordReactionAsCommitted", function() { return recordReactionAsCommitted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCleanupTimerToRunNowForTests", function() { return forceCleanupTimerToRunNowForTests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCleanupScheduleForTests", function() { return resetCleanupScheduleForTests; });
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSourceInternal", function() { return useAsObservableSourceInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if ( true && usedByLocalStore) {
        var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1), initialSource = _a[0];
        if ((initialSource !== undefined && current === undefined) ||
            (initialSource === undefined && current !== undefined)) {
            throw new Error("make sure you never pass `undefined` to " + culprit);
        }
    }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(current)) {
        throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
    }
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(current, {}, { deep: false }); }), 1), res = _b[0];
    if ( true &&
        Object.keys(res).length !== Object.keys(current).length) {
        throw new Error("the shape of objects passed to " + culprit + " should be stable");
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
    var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSourceInternal"])(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
        var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source));
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(local)) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["transaction"])(function () { return fn.apply(context, args); });
    };
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__["isUsingStaticRendering"])()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__["useForceUpdate"];
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useQueuedForceUpdate"])(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["createTrackingData"])(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["scheduleCleanupOfReactionIfLeaked"])(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__["printDebugValue"]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        // Called on first mount only
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__["recordReactionAsCommitted"])(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__["useQueuedForceUpdateBlock"])(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \*****************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdate", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQueuedForceUpdateBlock", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils.js ***!
  \**************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnmount", function() { return useUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbol", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobal", function() { return getGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });




/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return MobXProviderContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return PropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return disposeOnUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observerBatching", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observerBatching"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["useStaticRendering"]; });






var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__["$mobx"] || "$mobx";
var mobxObserverProperty =
/*#__PURE__*/
newSymbol("isMobXReactObserver");
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["isUsingStaticRendering"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsStart"] && mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateReadsEnd"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["Observer"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _stores_rootStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores/rootStore */ "./src/stores/rootStore.ts");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var mobx_state_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-state-tree */ "./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mobx-devtools-mst */ "./node_modules/mobx-devtools-mst/lib/index.js");
/* harmony import */ var mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/withApollo */ "./src/utils/withApollo.tsx");








var _jsxFileName = "C:\\next-project\\src\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







 //import { ThemeProvider } from '@material-ui/core/styles';
//import theme from '../../envConfig/muiTheme';

var RootApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RootApp, _App);

  var _super = _createSuper(RootApp);

  function RootApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RootApp);

    _this = _super.call(this, props);
    _this.store = void 0;
    _this.store = Object(_stores_rootStore__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(props.isServer, props.initialState); // mst 디버깅 로그

    if (true) {
      // 크롬 console 에 해당값의 변화가 있을 때 나타나게 함
      Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_12__["onPatch"])(_this.store, function (patch) {}); // 크롬 mobx tools 에 MST 로 상태변화를 볼 수 있게 한다.

      mobx_devtools_mst__WEBPACK_IMPORTED_MODULE_13___default()(_this.store);
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RootApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient;
      return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_14__["ApolloProvider"], {
        client: apolloClient,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx(mobx_react__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: this.store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, isServer, store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};
                isServer = false;
                store = Object(_stores_rootStore__WEBPACK_IMPORTED_MODULE_9__["initializeStore"])(isServer);

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return Component.getInitialProps(ctx);

              case 7:
                pageProps = _context.sent;

              case 8:
                return _context.abrupt("return", {
                  initialState: Object(mobx_state_tree__WEBPACK_IMPORTED_MODULE_12__["getSnapshot"])(store),
                  isServer: isServer,
                  pageProps: pageProps
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RootApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_15__["default"])(RootApp));

var _c;

$RefreshReg$(_c, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9PYnNlcnZlckNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9hc3NlcnRFbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9vYnNlcnZlckJhdGNoaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3ByaW50RGVidWdWYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9yZWFjdGlvbkNsZWFudXBUcmFja2luZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QtbGl0ZS9lcy9zdGF0aWNSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlQXNPYnNlcnZhYmxlU291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC1saXRlL2VzL3VzZUxvY2FsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXNlUXVldWVkRm9yY2VVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tb2J4LXJlYWN0LWxpdGUvZXMvdXRpbHMvcmVhY3RCYXRjaGVkVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QvZGlzdC9tb2J4cmVhY3QuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiUm9vdEFwcCIsInByb3BzIiwic3RvcmUiLCJpbml0aWFsaXplU3RvcmUiLCJpc1NlcnZlciIsImluaXRpYWxTdGF0ZSIsIm9uUGF0Y2giLCJwYXRjaCIsIm1ha2VJbnNwZWN0YWJsZSIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsImdldFNuYXBzaG90IiwiQXBwIiwid2l0aEFwb2xsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdFQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNNO0FBQ2pDLEtBQUssOENBQVE7QUFDYjtBQUNBO0FBQ0EsS0FBSyx3Q0FBRztBQUNSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDa0Q7QUFDekI7QUFDdEQsMEVBQWdCLENBQUMsa0ZBQUs7QUFDeUQ7QUFDekM7QUFDTTtBQUNHO0FBQ047QUFDdUI7QUFDaEI7QUFDeUM7QUFDaEI7Ozs7Ozs7Ozs7Ozs7QUNaekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QztBQUNrQjtBQUNmO0FBQzVDO0FBQ087QUFDUDtBQUNBLFFBQVEsK0VBQXNCO0FBQzlCO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0E7QUFDQSxlQUFlLGdFQUFXLGNBQWMsa0NBQWtDLEVBQUU7QUFDNUU7QUFDQTtBQUNBLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQUksQ0FBQyx3REFBVTtBQUN2QztBQUNBO0FBQ0Esd0JBQXdCLGtEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ2M7QUFDL0MsdUNBQXVDLHdEQUFTO0FBQ3pDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBUyxFQUFFLHVDQUF1QztBQUN0RCxJQUFJLHdEQUFTO0FBQ2I7QUFDTyxxQ0FBcUMsVUFBVSx3REFBUyxxQ0FBcUM7Ozs7Ozs7Ozs7Ozs7QUNoQnBHO0FBQUE7QUFBQTtBQUF5QztBQUNsQztBQUNQLFdBQVcsOERBQWlCO0FBQzVCOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDK0M7QUFDckI7QUFDYztBQUNqQztBQUNQO0FBQ0EsUUFBUSxLQUFxQztBQUM3Qyx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUMsS0FBSyw0REFBYTtBQUMvRDtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLLHVCQUF1QixRQUFRLHVEQUFVLFlBQVksR0FBRyxjQUFjLEVBQUUsRUFBRTtBQUNuRyxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVc7QUFDZjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQ2xDO0FBQzhDO0FBQ2hDO0FBQ2pDO0FBQ1AsaUJBQWlCLDRGQUE2QjtBQUM5QyxXQUFXLDRDQUFLO0FBQ2hCLG9CQUFvQix1REFBVTtBQUM5QixZQUFZLDREQUFhO0FBQ3pCLFlBQVksd0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQSxlQUFlLHdEQUFXLGNBQWMsZ0NBQWdDLEVBQUU7QUFDMUU7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUNOO0FBQzBCO0FBQ3lFO0FBQ2xFO0FBQ2xCO0FBQ2dEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx1Q0FBdUMsZ0NBQWdDO0FBQ3ZFLDZCQUE2Qix3QkFBd0I7QUFDckQsUUFBUSwrRUFBc0I7QUFDOUI7QUFDQTtBQUNBLDBEQUEwRCxxREFBYztBQUN4RTtBQUNBLDRCQUE0QixrRkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsbUZBQWtCO0FBQy9DO0FBQ0EsUUFBUSxrR0FBaUM7QUFDekM7QUFDQTtBQUNBLElBQUksNENBQUsseUJBQXlCLGdFQUFlO0FBQ2pELElBQUksNENBQUs7QUFDVDtBQUNBLFFBQVEsMEZBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQVE7QUFDdEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyx1RkFBeUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUMxQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBSztBQUNiO0FBQ0EsOENBQThDLFlBQVksRUFBRTtBQUM1RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU0sZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDeUQ7QUFDekQ7QUFDTztBQUNQLElBQUksdURBQVMsY0FBYyxXQUFXLEVBQUU7QUFDeEM7QUFDTztBQUNQLG9CQUFvQixzREFBUTtBQUM1QixpQkFBaUIseURBQVc7QUFDNUIsaUNBQWlDLGlCQUFpQixFQUFFO0FBQ3BELEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDs7Ozs7Ozs7Ozs7OztBQ0FwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrTTtBQUNoRztBQUNQO0FBQ2lFOztBQUU1Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0ZBQXdGLGFBQWE7QUFDckc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSx3QkFBd0IsMENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQSxzQ0FBc0MsbURBQWE7QUFDbkQsa0ZBQWtGO0FBQ2xGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsOEVBQXNCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sOEVBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsK0NBQVM7QUFDOUM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUFrQjtBQUN0QyxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0sOEVBQXNCO0FBQzVCO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsdURBQVU7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsMERBQXFCLElBQUksd0RBQW1CO0FBQ3RELHdCQUF3QixrRUFBcUI7QUFDN0M7O0FBRUE7O0FBRUEsVUFBVSwwREFBcUIsSUFBSSx3REFBbUI7QUFDdEQsUUFBUSxnRUFBbUI7QUFDM0I7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQSx5Q0FBeUMsZ0RBQVU7QUFDbkQ7QUFDQSx3REFBVTtBQUNWO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQ0FBa0MsMENBQUk7QUFDdEM7QUFDQSxrREFBSTtBQUNKO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQVU7QUFDckI7QUFDQSxhQUFhLDJEQUFhLENBQUMsd0RBQVE7QUFDbkM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7OztBQUdILHFLQUFxSywrQ0FBUztBQUM5SyxXQUFXLGdFQUFVO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRDQUFjO0FBQ2xDLDJCQUEyQiw0Q0FBYyxtQkFBbUI7QUFDNUQ7O0FBRUEsTUFBTSxJQUFxQztBQUMzQyw4QkFBOEIsaUJBQWlCOzs7QUFHL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyw0Q0FBYztBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDRDQUFjO0FBQy9CLDhCQUE4Qjs7QUFFOUIsa0JBQWtCLDRDQUFjO0FBQ2hDLHNEQUFzRCxpQkFBaUI7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDRDQUFjO0FBQ3pCLEdBQUc7QUFDSDtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxxREFBcUQ7O0FBRXJEOztBQUVBLGNBQWMsNENBQWMsb0JBQW9CLDRDQUFjLHlCQUF5Qiw0Q0FBYyxxQkFBcUIsNENBQWMseUJBQXlCLDRDQUFjLHFCQUFxQiw0Q0FBYztBQUNsTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUEsV0FBVyxzREFBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHNEQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFpQjtBQUN6Qzs7QUFFQTtBQUNBLHdCQUF3Qix1REFBa0I7QUFDMUM7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQWU7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBLFdBQVcsc0RBQVM7QUFDcEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssK0NBQVM7QUFDZCxLQUFLLCtDQUFVOztBQUV5RTtBQUN4Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5eUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0lBV01BLE87Ozs7O0FBZ0JGLG1CQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3BCLDhCQUFNQSxLQUFOO0FBRG9CLFVBRmhCQyxLQUVnQjtBQUVwQixVQUFLQSxLQUFMLEdBQWFDLHlFQUFlLENBQUNGLEtBQUssQ0FBQ0csUUFBUCxFQUFpQkgsS0FBSyxDQUFDSSxZQUF2QixDQUE1QixDQUZvQixDQUlwQjs7QUFDTixjQUE0QztBQUMzQztBQUNBQyxzRUFBTyxDQUFDLE1BQUtKLEtBQU4sRUFBYSxVQUFBSyxLQUFLLEVBQUksQ0FBRSxDQUF4QixDQUFQLENBRjJDLENBSTNDOztBQUNBQywrREFBZSxDQUFDLE1BQUtOLEtBQU4sQ0FBZjtBQUNBOztBQVh5QjtBQWF2Qjs7OztXQUVELDZCQUEyQjtBQUM3QixVQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBbEI7O0FBRUEsVUFBSUYsU0FBUyxJQUFJQSxTQUFTLENBQUNHLFVBQTNCLEVBQXVDO0FBQ3RDSCxpQkFBUyxDQUFDRyxVQUFWLENBQXFCQyxXQUFyQixDQUFpQ0osU0FBakM7QUFDQTtBQUNEOzs7V0FFRSxrQkFBZ0I7QUFBQSx3QkFDbUMsS0FBS1IsS0FEeEM7QUFBQSxVQUNKYSxTQURJLGVBQ0pBLFNBREk7QUFBQSxVQUNPQyxTQURQLGVBQ09BLFNBRFA7QUFBQSxVQUNrQkMsWUFEbEIsZUFDa0JBLFlBRGxCO0FBR1osYUFDSSxNQUFDLDhEQUFEO0FBQWdCLGNBQU0sRUFBRUEsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsb0RBQUQ7QUFBVSxhQUFLLEVBQUUsS0FBS2QsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsU0FBRCx5RkFBZWEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREosQ0FESixDQURKO0FBT0g7Ozs7OE1BL0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQ0QseUJBQXRDLFFBQXNDQSxTQUF0QyxFQUFpREcsR0FBakQsUUFBaURBLEdBQWpEO0FBQ1FGLHlCQURSLEdBQ29CLEVBRHBCO0FBRUlYLHdCQUZKO0FBR0lGLHFCQUhKLEdBR1lDLHlFQUFlLENBQUNDLFFBQUQsQ0FIM0I7O0FBQUEscUJBS0VVLFNBQVMsQ0FBQ0ksZUFMWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQU1pQkosU0FBUyxDQUFDSSxlQUFWLENBQTBCRCxHQUExQixDQU5qQjs7QUFBQTtBQU1ERix5QkFOQzs7QUFBQTtBQUFBLGlEQVNLO0FBQUVWLDhCQUFZLEVBQUVjLG9FQUFXLENBQUNqQixLQUFELENBQTNCO0FBQW9DRSwwQkFBUSxFQUFSQSxRQUFwQztBQUE4Q1csMkJBQVMsRUFBVEE7QUFBOUMsaUJBVEw7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7RUFGa0JLLGdEOztBQW9EUCxvRUFBQUMsa0VBQVUsQ0FBQ3JCLE9BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMDhlNTE0ZjgxMWM2MDRmZDkyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwiLi91c2VPYnNlcnZlclwiO1xuZnVuY3Rpb24gT2JzZXJ2ZXJDb21wb25lbnQoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgcmVuZGVyID0gX2EucmVuZGVyO1xuICAgIHZhciBjb21wb25lbnQgPSBjaGlsZHJlbiB8fCByZW5kZXI7XG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKGNvbXBvbmVudCk7XG59XG5PYnNlcnZlckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IE9ic2VydmVyUHJvcHNDaGVjayxcbiAgICByZW5kZXI6IE9ic2VydmVyUHJvcHNDaGVja1xufTtcbk9ic2VydmVyQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJPYnNlcnZlclwiO1xuZXhwb3J0IHsgT2JzZXJ2ZXJDb21wb25lbnQgYXMgT2JzZXJ2ZXIgfTtcbmZ1bmN0aW9uIE9ic2VydmVyUHJvcHNDaGVjayhwcm9wcywga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGV4dHJhS2V5ID0ga2V5ID09PSBcImNoaWxkcmVuXCIgPyBcInJlbmRlclwiIDogXCJjaGlsZHJlblwiO1xuICAgIHZhciBoYXNQcm9wID0gdHlwZW9mIHByb3BzW2tleV0gPT09IFwiZnVuY3Rpb25cIjtcbiAgICB2YXIgaGFzRXh0cmFQcm9wID0gdHlwZW9mIHByb3BzW2V4dHJhS2V5XSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIGlmIChoYXNQcm9wICYmIGhhc0V4dHJhUHJvcCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiTW9iWCBPYnNlcnZlcjogRG8gbm90IHVzZSBjaGlsZHJlbiBhbmQgcmVuZGVyIGluIHRoZSBzYW1lIHRpbWUgaW5gXCIgKyBjb21wb25lbnROYW1lKTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3AgfHwgaGFzRXh0cmFQcm9wKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArXG4gICAgICAgIHByb3BGdWxsTmFtZSArXG4gICAgICAgIFwiYCBvZiB0eXBlIGBcIiArXG4gICAgICAgIHR5cGVvZiBwcm9wc1trZXldICtcbiAgICAgICAgXCJgIHN1cHBsaWVkIHRvXCIgK1xuICAgICAgICBcIiBgXCIgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgXCJgLCBleHBlY3RlZCBgZnVuY3Rpb25gLlwiKTtcbn1cbiIsImltcG9ydCB7IHNweSB9IGZyb20gXCJtb2J4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaWYgKCF1c2VTdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QtbGl0ZSByZXF1aXJlcyBSZWFjdCB3aXRoIEhvb2tzIHN1cHBvcnRcIik7XG59XG5pZiAoIXNweSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QtbGl0ZSByZXF1aXJlcyBtb2J4IGF0IGxlYXN0IHZlcnNpb24gNCB0byBiZSBhdmFpbGFibGVcIik7XG59XG4iLCJpbXBvcnQgXCIuL2Fzc2VydEVudmlyb25tZW50XCI7XG5pbXBvcnQgeyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyBhcyBiYXRjaCB9IGZyb20gXCIuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXNcIjtcbmltcG9ydCB7IG9ic2VydmVyQmF0Y2hpbmcgfSBmcm9tIFwiLi9vYnNlcnZlckJhdGNoaW5nXCI7XG5vYnNlcnZlckJhdGNoaW5nKGJhdGNoKTtcbmV4cG9ydCB7IGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcsIHVzZVN0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xuZXhwb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwiLi9vYnNlcnZlclwiO1xuZXhwb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwiLi91c2VPYnNlcnZlclwiO1xuZXhwb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwiLi9PYnNlcnZlckNvbXBvbmVudFwiO1xuZXhwb3J0IHsgdXNlRm9yY2VVcGRhdGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IHsgdXNlQXNPYnNlcnZhYmxlU291cmNlIH0gZnJvbSBcIi4vdXNlQXNPYnNlcnZhYmxlU291cmNlXCI7XG5leHBvcnQgeyB1c2VMb2NhbFN0b3JlIH0gZnJvbSBcIi4vdXNlTG9jYWxTdG9yZVwiO1xuZXhwb3J0IHsgdXNlUXVldWVkRm9yY2VVcGRhdGUsIHVzZVF1ZXVlZEZvcmNlVXBkYXRlQmxvY2sgfSBmcm9tIFwiLi91c2VRdWV1ZWRGb3JjZVVwZGF0ZVwiO1xuZXhwb3J0IHsgaXNPYnNlcnZlckJhdGNoZWQsIG9ic2VydmVyQmF0Y2hpbmcgfSBmcm9tIFwiLi9vYnNlcnZlckJhdGNoaW5nXCI7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwiLi91c2VPYnNlcnZlclwiO1xuLy8gbi5iLiBiYXNlIGNhc2UgaXMgbm90IHVzZWQgZm9yIGFjdHVhbCB0eXBpbmdzIG9yIGV4cG9ydGVkIGluIHRoZSB0eXBpbmcgZmlsZXNcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlcihiYXNlQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gICAgLy8gVGhlIHdvcmtpbmcgb2Ygb2JzZXJ2ZXIgaXMgZXhwbGFpbmVkIHN0ZXAgYnkgc3RlcCBpbiB0aGlzIHRhbGs6IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Y1BGNGlCZWRvRjAmZmVhdHVyZT15b3V0dS5iZSZ0PTEzMDdcbiAgICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpKSB7XG4gICAgICAgIHJldHVybiBiYXNlQ29tcG9uZW50O1xuICAgIH1cbiAgICB2YXIgcmVhbE9wdGlvbnMgPSBfX2Fzc2lnbih7IGZvcndhcmRSZWY6IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIHZhciBiYXNlQ29tcG9uZW50TmFtZSA9IGJhc2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgYmFzZUNvbXBvbmVudC5uYW1lO1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIHVzZU9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJhc2VDb21wb25lbnQocHJvcHMsIHJlZik7IH0sIGJhc2VDb21wb25lbnROYW1lKTtcbiAgICB9O1xuICAgIHdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBiYXNlQ29tcG9uZW50TmFtZTtcbiAgICAvLyBtZW1vOyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gZGVlcCB1cGRhdGVzXG4gICAgLy8gaW4gcHJvcHM7IHdlIGFzc3VtZSB0aGF0IGlmIGRlZXAgb2JqZWN0cyBhcmUgY2hhbmdlZCxcbiAgICAvLyB0aGlzIGlzIGluIG9ic2VydmFibGVzLCB3aGljaCB3b3VsZCBoYXZlIGJlZW4gdHJhY2tlZCBhbnl3YXlcbiAgICB2YXIgbWVtb0NvbXBvbmVudDtcbiAgICBpZiAocmVhbE9wdGlvbnMuZm9yd2FyZFJlZikge1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIHVzZSBmb3J3YXJkUmVmIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgLy8gMS4gaXQgY2Fubm90IGdvIGJlZm9yZSBtZW1vLCBvbmx5IGFmdGVyIGl0XG4gICAgICAgIC8vIDIuIGZvcndhcmRSZWYgY29udmVydHMgdGhlIGZ1bmN0aW9uIGludG8gYW4gYWN0dWFsIGNvbXBvbmVudCwgc28gd2UgY2FuJ3QgbGV0IHRoZSBiYXNlQ29tcG9uZW50IGRvIGl0XG4gICAgICAgIC8vICAgIHNpbmNlIGl0IHdvdWxkbid0IGJlIGEgY2FsbGFibGUgZnVuY3Rpb24gYW55bW9yZVxuICAgICAgICBtZW1vQ29tcG9uZW50ID0gbWVtbyhmb3J3YXJkUmVmKHdyYXBwZWRDb21wb25lbnQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lbW9Db21wb25lbnQgPSBtZW1vKHdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICBjb3B5U3RhdGljUHJvcGVydGllcyhiYXNlQ29tcG9uZW50LCBtZW1vQ29tcG9uZW50KTtcbiAgICBtZW1vQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYmFzZUNvbXBvbmVudE5hbWU7XG4gICAgcmV0dXJuIG1lbW9Db21wb25lbnQ7XG59XG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG52YXIgaG9pc3RCbGFja0xpc3QgPSB7XG4gICAgJCR0eXBlb2Y6IHRydWUsXG4gICAgcmVuZGVyOiB0cnVlLFxuICAgIGNvbXBhcmU6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2UsIHRhcmdldCkge1xuICAgIE9iamVjdC5rZXlzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWhvaXN0QmxhY2tMaXN0W2tleV0pIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgY29uZmlndXJlIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCB7IGdldEdsb2JhbCwgZ2V0U3ltYm9sIH0gZnJvbSBcIi4vdXRpbHNcIjtcbnZhciBvYnNlcnZlckJhdGNoaW5nQ29uZmlndXJlZFN5bWJvbCA9IGdldFN5bWJvbChcIm9ic2VydmVyQmF0Y2hpbmdcIik7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZXJCYXRjaGluZyhyZWFjdGlvblNjaGVkdWxlcikge1xuICAgIGlmICghcmVhY3Rpb25TY2hlZHVsZXIpIHtcbiAgICAgICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBkZWZhdWx0Tm9vcEJhdGNoO1xuICAgICAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbTW9iWF0gRmFpbGVkIHRvIGdldCB1bnN0YWJsZV9iYXRjaGVkIHVwZGF0ZXMgZnJvbSByZWFjdC1kb20gLyByZWFjdC1uYXRpdmVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlndXJlKHsgcmVhY3Rpb25TY2hlZHVsZXI6IHJlYWN0aW9uU2NoZWR1bGVyIH0pO1xuICAgIGdldEdsb2JhbCgpW29ic2VydmVyQmF0Y2hpbmdDb25maWd1cmVkU3ltYm9sXSA9IHRydWU7XG59XG5leHBvcnQgdmFyIGlzT2JzZXJ2ZXJCYXRjaGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gISFnZXRHbG9iYWwoKVtvYnNlcnZlckJhdGNoaW5nQ29uZmlndXJlZFN5bWJvbF07IH07XG4iLCJpbXBvcnQgeyBnZXREZXBlbmRlbmN5VHJlZSB9IGZyb20gXCJtb2J4XCI7XG5leHBvcnQgZnVuY3Rpb24gcHJpbnREZWJ1Z1ZhbHVlKHYpIHtcbiAgICByZXR1cm4gZ2V0RGVwZW5kZW5jeVRyZWUodik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2tpbmdEYXRhKHJlYWN0aW9uKSB7XG4gICAgdmFyIHRyYWNraW5nRGF0YSA9IHtcbiAgICAgICAgY2xlYW5BdDogRGF0ZS5ub3coKSArIENMRUFOVVBfTEVBS0VEX1JFQUNUSU9OU19BRlRFUl9NSUxMSVMsXG4gICAgICAgIHJlYWN0aW9uOiByZWFjdGlvblxuICAgIH07XG4gICAgcmV0dXJuIHRyYWNraW5nRGF0YTtcbn1cbi8qKlxuICogVGhlIG1pbmltdW0gdGltZSBiZWZvcmUgd2UnbGwgY2xlYW4gdXAgYSBSZWFjdGlvbiBjcmVhdGVkIGluIGEgcmVuZGVyXG4gKiBmb3IgYSBjb21wb25lbnQgdGhhdCBoYXNuJ3QgbWFuYWdlZCB0byBydW4gaXRzIGVmZmVjdHMuIFRoaXMgbmVlZHMgdG9cbiAqIGJlIGJpZyBlbm91Z2ggdG8gZW5zdXJlIHRoYXQgYSBjb21wb25lbnQgd29uJ3QgdHVybiB1cCBhbmQgaGF2ZSBpdHNcbiAqIGVmZmVjdHMgcnVuIHdpdGhvdXQgYmVpbmcgcmUtcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCB2YXIgQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJUyA9IDEwMDAwO1xuLyoqXG4gKiBUaGUgZnJlcXVlbmN5IHdpdGggd2hpY2ggd2UnbGwgY2hlY2sgZm9yIGxlYWtlZCByZWFjdGlvbnMuXG4gKi9cbmV4cG9ydCB2YXIgQ0xFQU5VUF9USU1FUl9MT09QX01JTExJUyA9IDEwMDAwO1xuLyoqXG4gKiBSZWFjdGlvbnMgY3JlYXRlZCBieSBjb21wb25lbnRzIHRoYXQgaGF2ZSB5ZXQgdG8gYmUgZnVsbHkgbW91bnRlZC5cbiAqL1xudmFyIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzID0gbmV3IFNldCgpO1xuLyoqXG4gKiBMYXRlc3QgJ3VuY29tbWl0dGVkIHJlYWN0aW9ucycgY2xlYW51cCB0aW1lciBoYW5kbGUuXG4gKi9cbnZhciByZWFjdGlvbkNsZWFudXBIYW5kbGU7XG5mdW5jdGlvbiBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCkge1xuICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWFjdGlvbkNsZWFudXBIYW5kbGUgPSBzZXRUaW1lb3V0KGNsZWFuVW5jb21taXR0ZWRSZWFjdGlvbnMsIENMRUFOVVBfVElNRVJfTE9PUF9NSUxMSVMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUNsZWFudXBPZlJlYWN0aW9uSWZMZWFrZWQocmVmKSB7XG4gICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuYWRkKHJlZik7XG4gICAgZW5zdXJlQ2xlYW51cFRpbWVyUnVubmluZygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZFJlYWN0aW9uQXNDb21taXR0ZWQocmVhY3Rpb25SZWYpIHtcbiAgICB1bmNvbW1pdHRlZFJlYWN0aW9uUmVmcy5kZWxldGUocmVhY3Rpb25SZWYpO1xufVxuLyoqXG4gKiBSdW4gYnkgdGhlIGNsZWFudXAgdGltZXIgdG8gZGlzcG9zZSBhbnkgb3V0c3RhbmRpbmcgcmVhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIGNsZWFuVW5jb21taXR0ZWRSZWFjdGlvbnMoKSB7XG4gICAgcmVhY3Rpb25DbGVhbnVwSGFuZGxlID0gdW5kZWZpbmVkO1xuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIGNhbmRpZGF0ZSBsZWFrZWQgcmVhY3Rpb25zOyB0aG9zZSBvbGRlclxuICAgIC8vIHRoYW4gQ0xFQU5VUF9MRUFLRURfUkVBQ1RJT05TX0FGVEVSX01JTExJUyBnZXQgdGlkaWVkLlxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgdHJhY2tpbmcgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHRyYWNraW5nKSB7XG4gICAgICAgICAgICBpZiAobm93ID49IHRyYWNraW5nLmNsZWFuQXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJdCdzIHRpbWUgdG8gdGlkeSB1cCB0aGlzIGxlYWtlZCByZWFjdGlvbi5cbiAgICAgICAgICAgICAgICB0cmFja2luZy5yZWFjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLmRlbGV0ZShyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHVuY29tbWl0dGVkUmVhY3Rpb25SZWZzLnNpemUgPiAwKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGp1c3QgZmluaXNoZWQgYSByb3VuZCBvZiBjbGVhbnVwcyBidXQgdGhlcmUgYXJlIHN0aWxsXG4gICAgICAgIC8vIHNvbWUgbGVhayBjYW5kaWRhdGVzIG91dHN0YW5kaW5nLlxuICAgICAgICBlbnN1cmVDbGVhbnVwVGltZXJSdW5uaW5nKCk7XG4gICAgfVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8qKlxuICogT25seSB0byBiZSB1c2VkIGJ5IHRlc3QgZnVuY3Rpb25zOyBkbyBub3QgZXhwb3J0IG91dHNpZGUgb2YgbW9ieC1yZWFjdC1saXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JjZUNsZWFudXBUaW1lclRvUnVuTm93Rm9yVGVzdHMoKSB7XG4gICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gY29udHJvbCB0aGUgZXhlY3V0aW9uIG9mIHRoZSBjbGVhbnVwIHRpbWVyXG4gICAgLy8gdG8gZm9yY2UgaXQgdG8gcnVuIGF0IGF3a3dhcmQgdGltZXMgaW4gdW5pdCB0ZXN0cy5cbiAgICBpZiAocmVhY3Rpb25DbGVhbnVwSGFuZGxlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWFjdGlvbkNsZWFudXBIYW5kbGUpO1xuICAgICAgICBjbGVhblVuY29tbWl0dGVkUmVhY3Rpb25zKCk7XG4gICAgfVxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldENsZWFudXBTY2hlZHVsZUZvclRlc3RzKCkge1xuICAgIGlmIChyZWFjdGlvbkNsZWFudXBIYW5kbGUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlYWN0aW9uQ2xlYW51cEhhbmRsZSk7XG4gICAgICAgIHJlYWN0aW9uQ2xlYW51cEhhbmRsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdW5jb21taXR0ZWRSZWFjdGlvblJlZnMuY2xlYXIoKTtcbn1cbiIsInZhciBnbG9iYWxJc1VzaW5nU3RhdGljUmVuZGVyaW5nID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGljUmVuZGVyaW5nKGVuYWJsZSkge1xuICAgIGdsb2JhbElzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPSBlbmFibGU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVc2luZ1N0YXRpY1JlbmRlcmluZygpIHtcbiAgICByZXR1cm4gZ2xvYmFsSXNVc2luZ1N0YXRpY1JlbmRlcmluZztcbn1cbiIsInZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IG9ic2VydmFibGUsIHJ1bkluQWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzT2JzZXJ2YWJsZVNvdXJjZUludGVybmFsKGN1cnJlbnQsIHVzZWRCeUxvY2FsU3RvcmUpIHtcbiAgICB2YXIgY3VscHJpdCA9IHVzZWRCeUxvY2FsU3RvcmUgPyBcInVzZUxvY2FsU3RvcmVcIiA6IFwidXNlQXNPYnNlcnZhYmxlU291cmNlXCI7XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiB1c2VkQnlMb2NhbFN0b3JlKSB7XG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShjdXJyZW50KSwgMSksIGluaXRpYWxTb3VyY2UgPSBfYVswXTtcbiAgICAgICAgaWYgKChpbml0aWFsU291cmNlICE9PSB1bmRlZmluZWQgJiYgY3VycmVudCA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgKGluaXRpYWxTb3VyY2UgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50ICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYWtlIHN1cmUgeW91IG5ldmVyIHBhc3MgYHVuZGVmaW5lZGAgdG8gXCIgKyBjdWxwcml0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlZEJ5TG9jYWxTdG9yZSAmJiBjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJiAhaXNQbGFpbk9iamVjdChjdXJyZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY3VscHJpdCArIFwiIGV4cGVjdHMgYSBwbGFpbiBvYmplY3QgYXMgXCIgKyAodXNlZEJ5TG9jYWxTdG9yZSA/IFwic2Vjb25kXCIgOiBcImZpcnN0XCIpICsgXCIgYXJndW1lbnRcIik7XG4gICAgfVxuICAgIHZhciBfYiA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBvYnNlcnZhYmxlKGN1cnJlbnQsIHt9LCB7IGRlZXA6IGZhbHNlIH0pOyB9KSwgMSksIHJlcyA9IF9iWzBdO1xuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgICAgICAgT2JqZWN0LmtleXMocmVzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgc2hhcGUgb2Ygb2JqZWN0cyBwYXNzZWQgdG8gXCIgKyBjdWxwcml0ICsgXCIgc2hvdWxkIGJlIHN0YWJsZVwiKTtcbiAgICB9XG4gICAgcnVuSW5BY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHJlcywgY3VycmVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc09ic2VydmFibGVTb3VyY2UoY3VycmVudCkge1xuICAgIHJldHVybiB1c2VBc09ic2VydmFibGVTb3VyY2VJbnRlcm5hbChjdXJyZW50LCBmYWxzZSk7XG59XG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBydW5JbkFjdGlvbiwgdHJhbnNhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwgfSBmcm9tIFwiLi91c2VBc09ic2VydmFibGVTb3VyY2VcIjtcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmUoaW5pdGlhbGl6ZXIsIGN1cnJlbnQpIHtcbiAgICB2YXIgc291cmNlID0gdXNlQXNPYnNlcnZhYmxlU291cmNlSW50ZXJuYWwoY3VycmVudCwgdHJ1ZSk7XG4gICAgcmV0dXJuIFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxvY2FsID0gb2JzZXJ2YWJsZShpbml0aWFsaXplcihzb3VyY2UpKTtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QobG9jYWwpKSB7XG4gICAgICAgICAgICBydW5JbkFjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobG9jYWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgTm8gaWRlYSB3aHkgdHMyNTM2IGlzIHBvcHBpbmcgb3V0IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsW2tleV0gPSB3cmFwSW5UcmFuc2FjdGlvbih2YWx1ZSwgbG9jYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWw7XG4gICAgfSlbMF07XG59XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZnVuY3Rpb24gd3JhcEluVHJhbnNhY3Rpb24oZm4sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7IHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzKTsgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFJlYWN0aW9uIH0gZnJvbSBcIm1vYnhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHByaW50RGVidWdWYWx1ZSB9IGZyb20gXCIuL3ByaW50RGVidWdWYWx1ZVwiO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2tpbmdEYXRhLCByZWNvcmRSZWFjdGlvbkFzQ29tbWl0dGVkLCBzY2hlZHVsZUNsZWFudXBPZlJlYWN0aW9uSWZMZWFrZWQgfSBmcm9tIFwiLi9yZWFjdGlvbkNsZWFudXBUcmFja2luZ1wiO1xuaW1wb3J0IHsgaXNVc2luZ1N0YXRpY1JlbmRlcmluZyB9IGZyb20gXCIuL3N0YXRpY1JlbmRlcmluZ1wiO1xuaW1wb3J0IHsgdXNlRm9yY2VVcGRhdGUgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgdXNlUXVldWVkRm9yY2VVcGRhdGUsIHVzZVF1ZXVlZEZvcmNlVXBkYXRlQmxvY2sgfSBmcm9tIFwiLi91c2VRdWV1ZWRGb3JjZVVwZGF0ZVwiO1xudmFyIEVNUFRZX09CSkVDVCA9IHt9O1xuZnVuY3Rpb24gb2JzZXJ2ZXJDb21wb25lbnROYW1lRm9yKGJhc2VDb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIFwib2JzZXJ2ZXJcIiArIGJhc2VDb21wb25lbnROYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZU9ic2VydmVyKGZuLCBiYXNlQ29tcG9uZW50TmFtZSwgb3B0aW9ucykge1xuICAgIGlmIChiYXNlQ29tcG9uZW50TmFtZSA9PT0gdm9pZCAwKSB7IGJhc2VDb21wb25lbnROYW1lID0gXCJvYnNlcnZlZFwiOyB9XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gRU1QVFlfT0JKRUNUOyB9XG4gICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcoKSkge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgdmFyIHdhbnRlZEZvcmNlVXBkYXRlSG9vayA9IG9wdGlvbnMudXNlRm9yY2VVcGRhdGUgfHwgdXNlRm9yY2VVcGRhdGU7XG4gICAgdmFyIGZvcmNlVXBkYXRlID0gd2FudGVkRm9yY2VVcGRhdGVIb29rKCk7XG4gICAgdmFyIHF1ZXVlZEZvcmNlVXBkYXRlID0gdXNlUXVldWVkRm9yY2VVcGRhdGUoZm9yY2VVcGRhdGUpO1xuICAgIC8vIFN0cmljdE1vZGUvQ29uY3VycmVudE1vZGUvU3VzcGVuc2UgbWF5IG1lYW4gdGhhdCBvdXIgY29tcG9uZW50IGlzXG4gICAgLy8gcmVuZGVyZWQgYW5kIGFiYW5kb25lZCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byB0cmFjayBsZWFrZWRcbiAgICAvLyBSZWFjdGlvbnMuXG4gICAgdmFyIHJlYWN0aW9uVHJhY2tpbmdSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgaWYgKCFyZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gRmlyc3QgcmVuZGVyIGZvciB0aGlzIGNvbXBvbmVudCAob3IgZmlyc3QgdGltZSBzaW5jZSBhIHByZXZpb3VzXG4gICAgICAgIC8vIHJlYWN0aW9uIGZyb20gYW4gYWJhbmRvbmVkIHJlbmRlciB3YXMgZGlzcG9zZWQpLlxuICAgICAgICB2YXIgbmV3UmVhY3Rpb25fMSA9IG5ldyBSZWFjdGlvbihvYnNlcnZlckNvbXBvbmVudE5hbWVGb3IoYmFzZUNvbXBvbmVudE5hbWUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBPYnNlcnZhYmxlIGhhcyBjaGFuZ2VkLCBtZWFuaW5nIHdlIHdhbnQgdG8gcmUtcmVuZGVyXG4gICAgICAgICAgICAvLyBCVVQgaWYgd2UncmUgYSBjb21wb25lbnQgdGhhdCBoYXNuJ3QgeWV0IGdvdCB0byB0aGUgdXNlRWZmZWN0KClcbiAgICAgICAgICAgIC8vIHN0YWdlLCB3ZSBtaWdodCBiZSBhIGNvbXBvbmVudCB0aGF0IF9zdGFydGVkXyB0byByZW5kZXIsIGJ1dFxuICAgICAgICAgICAgLy8gZ290IGRyb3BwZWQsIGFuZCB3ZSBkb24ndCB3YW50IHRvIG1ha2Ugc3RhdGUgY2hhbmdlcyB0aGVuLlxuICAgICAgICAgICAgLy8gKEl0IHRyaWdnZXJzIHdhcm5pbmdzIGluIFN0cmljdE1vZGUsIGZvciBhIHN0YXJ0LilcbiAgICAgICAgICAgIGlmICh0cmFja2luZ0RhdGFfMS5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSByZWFjaGVkIHVzZUVmZmVjdCgpLCBzbyB3ZSdyZSBtb3VudGVkLCBhbmQgY2FuIHRyaWdnZXIgYW4gdXBkYXRlXG4gICAgICAgICAgICAgICAgcXVldWVkRm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgeWV0IHJlYWNoZWQgdXNlRWZmZWN0KCksIHNvIHdlJ2xsIG5lZWQgdG8gdHJpZ2dlciBhIHJlLXJlbmRlclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gKGFuZCBpZikgdXNlRWZmZWN0KCkgYXJyaXZlcy4gIFRoZSBlYXNpZXN0IHdheSB0byBkbyB0aGF0IGlzIGp1c3QgdG9cbiAgICAgICAgICAgICAgICAvLyBkcm9wIG91ciBjdXJyZW50IHJlYWN0aW9uIGFuZCBhbGxvdyB1c2VFZmZlY3QoKSB0byByZWNyZWF0ZSBpdC5cbiAgICAgICAgICAgICAgICBuZXdSZWFjdGlvbl8xLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNraW5nRGF0YV8xID0gY3JlYXRlVHJhY2tpbmdEYXRhKG5ld1JlYWN0aW9uXzEpO1xuICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQgPSB0cmFja2luZ0RhdGFfMTtcbiAgICAgICAgc2NoZWR1bGVDbGVhbnVwT2ZSZWFjdGlvbklmTGVha2VkKHJlYWN0aW9uVHJhY2tpbmdSZWYpO1xuICAgIH1cbiAgICB2YXIgcmVhY3Rpb24gPSByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQucmVhY3Rpb247XG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZShyZWFjdGlvbiwgcHJpbnREZWJ1Z1ZhbHVlKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBDYWxsZWQgb24gZmlyc3QgbW91bnQgb25seVxuICAgICAgICByZWNvcmRSZWFjdGlvbkFzQ29tbWl0dGVkKHJlYWN0aW9uVHJhY2tpbmdSZWYpO1xuICAgICAgICBpZiAocmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBHcmVhdC4gV2UndmUgYWxyZWFkeSBnb3Qgb3VyIHJlYWN0aW9uIGZyb20gb3VyIHJlbmRlcjtcbiAgICAgICAgICAgIC8vIGFsbCB3ZSBuZWVkIHRvIGRvIGlzIHRvIHJlY29yZCB0aGF0IGl0J3Mgbm93IG1vdW50ZWQsXG4gICAgICAgICAgICAvLyB0byBhbGxvdyBmdXR1cmUgb2JzZXJ2YWJsZSBjaGFuZ2VzIHRvIHRyaWdnZXIgcmUtcmVuZGVyc1xuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIHJlYWN0aW9uIHdlIHNldCB1cCBpbiBvdXIgcmVuZGVyIGhhcyBiZWVuIGRpc3Bvc2VkLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBlaXRoZXIgZHVlIHRvIGJhZCB0aW1pbmdzIG9mIHJlbmRlcmluZ3MsIGUuZy4gb3VyXG4gICAgICAgICAgICAvLyBjb21wb25lbnQgd2FzIHBhdXNlZCBmb3IgYSBfdmVyeV8gbG9uZyB0aW1lLCBhbmQgb3VyXG4gICAgICAgICAgICAvLyByZWFjdGlvbiBnb3QgY2xlYW5lZCB1cCwgb3Igd2UgZ290IGEgb2JzZXJ2YWJsZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGJldHdlZW4gcmVuZGVyIGFuZCB1c2VFZmZlY3RcbiAgICAgICAgICAgIC8vIFJlLWNyZWF0ZSB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIHJlYWN0aW9uVHJhY2tpbmdSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICByZWFjdGlvbjogbmV3IFJlYWN0aW9uKG9ic2VydmVyQ29tcG9uZW50TmFtZUZvcihiYXNlQ29tcG9uZW50TmFtZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UndmUgZGVmaW5pdGVseSBhbHJlYWR5IGJlZW4gbW91bnRlZCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlZEZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2xlYW5BdDogSW5maW5pdHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBxdWV1ZWRGb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWFjdGlvblRyYWNraW5nUmVmLmN1cnJlbnQucmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmVhY3Rpb25UcmFja2luZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgLy8gZGVsYXkgYWxsIGZvcmNlLXVwZGF0ZSBjYWxscyBhZnRlciByZW5kZXJpbmcgb2YgdGhpcyBjb21wb25lbnRcbiAgICByZXR1cm4gdXNlUXVldWVkRm9yY2VVcGRhdGVCbG9jayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgb3JpZ2luYWwgY29tcG9uZW50LCBidXQgaGF2ZSB0aGVcbiAgICAgICAgLy8gcmVhY3Rpb24gdHJhY2sgdGhlIG9ic2VydmFibGVzLCBzbyB0aGF0IHJlbmRlcmluZ1xuICAgICAgICAvLyBjYW4gYmUgaW52YWxpZGF0ZWQgKHNlZSBhYm92ZSkgb25jZSBhIGRlcGVuZGVuY3kgY2hhbmdlc1xuICAgICAgICB2YXIgcmVuZGVyaW5nO1xuICAgICAgICB2YXIgZXhjZXB0aW9uO1xuICAgICAgICByZWFjdGlvbi50cmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmluZyA9IGZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBleGNlcHRpb247IC8vIHJlLXRocm93IGFueSBleGNlcHRpb25zIGNhdWdodCBkdXJpbmcgcmVuZGVyaW5nXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbmRlcmluZztcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBpbnNpZGVSZW5kZXIgPSBmYWxzZTtcbnZhciBmb3JjZVVwZGF0ZVF1ZXVlID0gW107XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVldWVkRm9yY2VVcGRhdGUoZm9yY2VVcGRhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICBmb3JjZVVwZGF0ZVF1ZXVlLnB1c2goZm9yY2VVcGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVldWVkRm9yY2VVcGRhdGVCbG9jayhjYWxsYmFjaykge1xuICAgIC8vIHN0YXJ0IGludGVyY2VwdGluZyBmb3JjZS11cGRhdGUgY2FsbHNcbiAgICBpbnNpZGVSZW5kZXIgPSB0cnVlO1xuICAgIGZvcmNlVXBkYXRlUXVldWUgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICAgICAgLy8gc3RvcCBpbnRlcmNlcHRpbmcgZm9yY2UtdXBkYXRlXG4gICAgICAgIGluc2lkZVJlbmRlciA9IGZhbHNlO1xuICAgICAgICAvLyBzdG9yZSBxdWV1ZSBvciBub3RoaW5nIGlmIGl0IHdhcyBlbXB0eSB0byBleGVjdXRlIHVzZUxheW91dEVmZmVjdCBvbmx5IHdoZW4gbmVjZXNzYXJ5XG4gICAgICAgIHZhciBxdWV1ZV8xID0gZm9yY2VVcGRhdGVRdWV1ZS5sZW5ndGggPiAwID8gZm9yY2VVcGRhdGVRdWV1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gcnVuIGZvcmNlLXVwZGF0ZSBxdWV1ZSBpbiB1c2VMYXlvdXRFZmZlY3RcbiAgICAgICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChxdWV1ZV8xKSB7XG4gICAgICAgICAgICAgICAgcXVldWVfMS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4KCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbcXVldWVfMV0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgaW5zaWRlUmVuZGVyID0gZmFsc2U7XG4gICAgfVxufVxuIiwidmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVubW91bnQoZm4pIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZm47IH0sIEVNUFRZX0FSUkFZKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoMCksIDIpLCBzZXRUaWNrID0gX2FbMV07XG4gICAgdmFyIHVwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0VGljayhmdW5jdGlvbiAodGljaykgeyByZXR1cm4gdGljayArIDE7IH0pO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgcmV0dXJuICFwcm90byB8fCBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2wobmFtZSkge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIFN5bWJvbC5mb3IobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBcIl9fJG1vYngtcmVhY3QgXCIgKyBuYW1lICsgXCJfX1wiO1xufVxudmFyIG1vY2tHbG9iYWwgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICByZXR1cm4gbW9ja0dsb2JhbDtcbn1cbiIsImV4cG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuIiwiaW1wb3J0IHsgUmVhY3Rpb24sIF9hbGxvd1N0YXRlQ2hhbmdlcywgX2FsbG93U3RhdGVSZWFkc1N0YXJ0LCBfYWxsb3dTdGF0ZVJlYWRzRW5kLCAkbW9ieCwgY3JlYXRlQXRvbSwgdW50cmFja2VkLCBpc09ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU9iamVjdCwgaXNPYnNlcnZhYmxlQXJyYXksIG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCBSZWFjdF9fZGVmYXVsdCwgeyBQdXJlQ29tcG9uZW50LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIG1lbW8sIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc1VzaW5nU3RhdGljUmVuZGVyaW5nLCBPYnNlcnZlciwgb2JzZXJ2ZXIgYXMgb2JzZXJ2ZXIkMSB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5leHBvcnQgeyBPYnNlcnZlciwgaXNVc2luZ1N0YXRpY1JlbmRlcmluZywgb2JzZXJ2ZXJCYXRjaGluZywgdXNlQXNPYnNlcnZhYmxlU291cmNlLCB1c2VMb2NhbFN0b3JlLCB1c2VPYnNlcnZlciwgdXNlU3RhdGljUmVuZGVyaW5nIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcblxudmFyIHN5bWJvbElkID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlU3ltYm9sKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBTeW1ib2wobmFtZSk7XG4gIH1cblxuICB2YXIgc3ltYm9sID0gXCJfXyRtb2J4LXJlYWN0IFwiICsgbmFtZSArIFwiIChcIiArIHN5bWJvbElkICsgXCIpXCI7XG4gIHN5bWJvbElkKys7XG4gIHJldHVybiBzeW1ib2w7XG59XG5cbnZhciBjcmVhdGVkU3ltYm9scyA9IHt9O1xuZnVuY3Rpb24gbmV3U3ltYm9sKG5hbWUpIHtcbiAgaWYgKCFjcmVhdGVkU3ltYm9sc1tuYW1lXSkge1xuICAgIGNyZWF0ZWRTeW1ib2xzW25hbWVdID0gY3JlYXRlU3ltYm9sKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWRTeW1ib2xzW25hbWVdO1xufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgLy9Gcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufSAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbXJpZGd3YXkvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG5cblxudmFyIGhvaXN0QmxhY2tMaXN0ID0ge1xuICAkJHR5cGVvZjogMSxcbiAgcmVuZGVyOiAxLFxuICBjb21wYXJlOiAxLFxuICB0eXBlOiAxLFxuICBjaGlsZENvbnRleHRUeXBlczogMSxcbiAgY29udGV4dFR5cGU6IDEsXG4gIGNvbnRleHRUeXBlczogMSxcbiAgZGVmYXVsdFByb3BzOiAxLFxuICBnZXREZWZhdWx0UHJvcHM6IDEsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogMSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiAxLFxuICBtaXhpbnM6IDEsXG4gIHByb3BUeXBlczogMVxufTtcbmZ1bmN0aW9uIGNvcHlTdGF0aWNQcm9wZXJ0aWVzKGJhc2UsIHRhcmdldCkge1xuICB2YXIgcHJvdG9Qcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlKSk7XG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaG9pc3RCbGFja0xpc3Rba2V5XSAmJiBwcm90b1Byb3BzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXHJcbiAqIEhlbHBlciB0byBzZXQgYHByb3BgIHRvIGB0aGlzYCBhcyBub24tZW51bWVyYWJsZSAoaGlkZGVuIHByb3ApXHJcbiAqIEBwYXJhbSB0YXJnZXRcclxuICogQHBhcmFtIHByb3BcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqL1xuXG5mdW5jdGlvbiBzZXRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKCFPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByb3ApKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICB9XG59XG4vKipcclxuICogVXRpbGl0aWVzIGZvciBwYXRjaGluZyBjb21wb25lbnRXaWxsVW5tb3VudCwgdG8gbWFrZSBzdXJlIEBkaXNwb3NlT25Vbm1vdW50IHdvcmtzIGNvcnJlY3RseSBpY20gd2l0aCB1c2VyIGRlZmluZWQgaG9va3NcclxuICogYW5kIHRoZSBoYW5kbGVyIHByb3ZpZGVkIGJ5IG1vYngtcmVhY3RcclxuICovXG5cbnZhciBtb2J4TWl4aW5zID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcInBhdGNoTWl4aW5zXCIpO1xudmFyIG1vYnhQYXRjaGVkRGVmaW5pdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5uZXdTeW1ib2woXCJwYXRjaGVkRGVmaW5pdGlvblwiKTtcblxuZnVuY3Rpb24gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSkge1xuICB2YXIgbWl4aW5zID0gdGFyZ2V0W21vYnhNaXhpbnNdID0gdGFyZ2V0W21vYnhNaXhpbnNdIHx8IHt9O1xuICB2YXIgbWV0aG9kTWl4aW5zID0gbWl4aW5zW21ldGhvZE5hbWVdID0gbWl4aW5zW21ldGhvZE5hbWVdIHx8IHt9O1xuICBtZXRob2RNaXhpbnMubG9ja3MgPSBtZXRob2RNaXhpbnMubG9ja3MgfHwgMDtcbiAgbWV0aG9kTWl4aW5zLm1ldGhvZHMgPSBtZXRob2RNaXhpbnMubWV0aG9kcyB8fCBbXTtcbiAgcmV0dXJuIG1ldGhvZE1peGlucztcbn1cblxuZnVuY3Rpb24gd3JhcHBlcihyZWFsTWV0aG9kLCBtaXhpbnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBsb2NrcyBhcmUgdXNlZCB0byBlbnN1cmUgdGhhdCBtaXhpbnMgYXJlIGludm9rZWQgb25seSBvbmNlIHBlciBpbnZvY2F0aW9uLCBldmVuIG9uIHJlY3Vyc2l2ZSBjYWxsc1xuICBtaXhpbnMubG9ja3MrKztcblxuICB0cnkge1xuICAgIHZhciByZXRWYWw7XG5cbiAgICBpZiAocmVhbE1ldGhvZCAhPT0gdW5kZWZpbmVkICYmIHJlYWxNZXRob2QgIT09IG51bGwpIHtcbiAgICAgIHJldFZhbCA9IHJlYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfSBmaW5hbGx5IHtcbiAgICBtaXhpbnMubG9ja3MtLTtcblxuICAgIGlmIChtaXhpbnMubG9ja3MgPT09IDApIHtcbiAgICAgIG1peGlucy5tZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG14KSB7XG4gICAgICAgIG14LmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24ocmVhbE1ldGhvZCwgbWl4aW5zKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHdyYXBwZXIuY2FsbC5hcHBseSh3cmFwcGVyLCBbdGhpcywgcmVhbE1ldGhvZCwgbWl4aW5zXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gcGF0Y2godGFyZ2V0LCBtZXRob2ROYW1lLCBtaXhpbk1ldGhvZCkge1xuICB2YXIgbWl4aW5zID0gZ2V0TWl4aW5zKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG1peGlucy5tZXRob2RzLmluZGV4T2YobWl4aW5NZXRob2QpIDwgMCkge1xuICAgIG1peGlucy5tZXRob2RzLnB1c2gobWl4aW5NZXRob2QpO1xuICB9XG5cbiAgdmFyIG9sZERlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbWV0aG9kTmFtZSk7XG5cbiAgaWYgKG9sZERlZmluaXRpb24gJiYgb2xkRGVmaW5pdGlvblttb2J4UGF0Y2hlZERlZmluaXRpb25dKSB7XG4gICAgLy8gYWxyZWFkeSBwYXRjaGVkIGRlZmluaXRpb24sIGRvIG5vdCByZXBhdGNoXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsTWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdO1xuICB2YXIgbmV3RGVmaW5pdGlvbiA9IGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBvbGREZWZpbml0aW9uID8gb2xkRGVmaW5pdGlvbi5lbnVtZXJhYmxlIDogdW5kZWZpbmVkLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbWV0aG9kTmFtZSwgbmV3RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmluaXRpb24odGFyZ2V0LCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIG9yaWdpbmFsTWV0aG9kKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciB3cmFwcGVkRnVuYyA9IHdyYXBGdW5jdGlvbihvcmlnaW5hbE1ldGhvZCwgbWl4aW5zKTtcbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZlttb2J4UGF0Y2hlZERlZmluaXRpb25dID0gdHJ1ZSwgX3JlZi5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHdyYXBwZWRGdW5jO1xuICB9LCBfcmVmLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIGlmICh0aGlzID09PSB0YXJnZXQpIHtcbiAgICAgIHdyYXBwZWRGdW5jID0gd3JhcEZ1bmN0aW9uKHZhbHVlLCBtaXhpbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aGVuIGl0IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBwcm90b3R5cGUvYSBjaGlsZCBwcm90b3R5cGUgcGF0Y2ggdGhhdCBwYXJ0aWN1bGFyIGNhc2UgYWdhaW4gc2VwYXJhdGVseVxuICAgICAgLy8gc2luY2Ugd2UgbmVlZCB0byBzdG9yZSBzZXBhcmF0ZSB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdldGhlciBpdCBpcyB0aGUgYWN0dWFsIGluc3RhbmNlLCB0aGUgcHJvdG90eXBlLCBldGNcbiAgICAgIC8vIGUuZy4gdGhlIG1ldGhvZCBmb3Igc3VwZXIgbWlnaHQgbm90IGJlIHRoZSBzYW1lIGFzIHRoZSBtZXRob2QgZm9yIHRoZSBwcm90b3R5cGUgd2hpY2ggbWlnaHQgYmUgbm90IHRoZSBzYW1lXG4gICAgICAvLyBhcyB0aGUgbWV0aG9kIGZvciB0aGUgaW5zdGFuY2VcbiAgICAgIHZhciBuZXdEZWZpbml0aW9uID0gY3JlYXRlRGVmaW5pdGlvbih0aGlzLCBtZXRob2ROYW1lLCBlbnVtZXJhYmxlLCBtaXhpbnMsIHZhbHVlKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBtZXRob2ROYW1lLCBuZXdEZWZpbml0aW9uKTtcbiAgICB9XG4gIH0sIF9yZWYuY29uZmlndXJhYmxlID0gdHJ1ZSwgX3JlZi5lbnVtZXJhYmxlID0gZW51bWVyYWJsZSwgX3JlZjtcbn1cblxudmFyIG1vYnhBZG1pblByb3BlcnR5ID0gJG1vYnggfHwgXCIkbW9ieFwiO1xudmFyIG1vYnhPYnNlcnZlclByb3BlcnR5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImlzTW9iWFJlYWN0T2JzZXJ2ZXJcIik7XG52YXIgbW9ieElzVW5tb3VudGVkID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImlzVW5tb3VudGVkXCIpO1xudmFyIHNraXBSZW5kZXJLZXkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwic2tpcFJlbmRlclwiKTtcbnZhciBpc0ZvcmNpbmdVcGRhdGVLZXkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiaXNGb3JjaW5nVXBkYXRlXCIpO1xuZnVuY3Rpb24gbWFrZUNsYXNzQ29tcG9uZW50T2JzZXJ2ZXIoY29tcG9uZW50Q2xhc3MpIHtcbiAgdmFyIHRhcmdldCA9IGNvbXBvbmVudENsYXNzLnByb3RvdHlwZTtcblxuICBpZiAoY29tcG9uZW50Q2xhc3NbbW9ieE9ic2VydmVyUHJvcGVydHldKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUodGFyZ2V0KTtcbiAgICBjb25zb2xlLndhcm4oXCJUaGUgcHJvdmlkZWQgY29tcG9uZW50IGNsYXNzIChcIiArIGRpc3BsYXlOYW1lICsgXCIpIFxcbiAgICAgICAgICAgICAgICBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkIGFzIGFuIG9ic2VydmVyIGNvbXBvbmVudC5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50Q2xhc3NbbW9ieE9ic2VydmVyUHJvcGVydHldID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0YXJnZXQuY29tcG9uZW50V2lsbFJlYWN0KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29tcG9uZW50V2lsbFJlYWN0IGxpZmUtY3ljbGUgZXZlbnQgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFwiKTtcblxuICBpZiAoY29tcG9uZW50Q2xhc3NbXCJfX3Byb3RvX19cIl0gIT09IFB1cmVDb21wb25lbnQpIHtcbiAgICBpZiAoIXRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUpIHRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBvYnNlcnZlclNDVTtlbHNlIGlmICh0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9PSBvYnNlcnZlclNDVSkgLy8gbi5iLiB1bmVxdWFsIGNoZWNrLCBpbnN0ZWFkIG9mIGV4aXN0ZW5jZSBjaGVjaywgYXMgQG9ic2VydmVyIG1pZ2h0IGJlIG9uIHN1cGVyY2xhc3MgYXMgd2VsbFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgaXMgbm90IGFsbG93ZWQgdG8gdXNlIHNob3VsZENvbXBvbmVudFVwZGF0ZSBpbiBvYnNlcnZlciBiYXNlZCBjb21wb25lbnRzLlwiKTtcbiAgfSAvLyB0aGlzLnByb3BzIGFuZCB0aGlzLnN0YXRlIGFyZSBtYWRlIG9ic2VydmFibGUsIGp1c3QgdG8gbWFrZSBzdXJlIEBjb21wdXRlZCBmaWVsZHMgdGhhdFxuICAvLyBhcmUgZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCwgYW5kIHdoaWNoIHJlbHkgb24gc3RhdGUgb3IgcHJvcHMsIHJlLWNvbXB1dGUgaWYgc3RhdGUgb3IgcHJvcHMgY2hhbmdlXG4gIC8vIChvdGhlcndpc2UgdGhlIGNvbXB1dGVkIHdvdWxkbid0IHVwZGF0ZSBhbmQgYmVjb21lIHN0YWxlIG9uIHByb3BzIGNoYW5nZSwgc2luY2UgcHJvcHMgYXJlIG5vdCBvYnNlcnZhYmxlKVxuICAvLyBIb3dldmVyLCB0aGlzIHNvbHV0aW9uIGlzIG5vdCB3aXRob3V0IGl0J3Mgb3duIHByb2JsZW1zOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QvaXNzdWVzP3V0Zjg9JUUyJTlDJTkzJnE9aXMlM0Fpc3N1ZStsYWJlbCUzQW9ic2VydmFibGUtcHJvcHMtb3Itbm90K1xuXG5cbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJwcm9wc1wiKTtcbiAgbWFrZU9ic2VydmFibGVQcm9wKHRhcmdldCwgXCJzdGF0ZVwiKTtcbiAgdmFyIGJhc2VSZW5kZXIgPSB0YXJnZXQucmVuZGVyO1xuXG4gIHRhcmdldC5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1ha2VDb21wb25lbnRSZWFjdGl2ZS5jYWxsKHRoaXMsIGJhc2VSZW5kZXIpO1xuICB9O1xuXG4gIHBhdGNoKHRhcmdldCwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzJHJlbmRlciRtb2J4QWRtaTtcblxuICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkgPT09IHRydWUpIHJldHVybjtcbiAgICAoX3RoaXMkcmVuZGVyJG1vYnhBZG1pID0gdGhpcy5yZW5kZXJbbW9ieEFkbWluUHJvcGVydHldKSA9PT0gbnVsbCB8fCBfdGhpcyRyZW5kZXIkbW9ieEFkbWkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHJlbmRlciRtb2J4QWRtaS5kaXNwb3NlKCk7XG4gICAgdGhpc1ttb2J4SXNVbm1vdW50ZWRdID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5yZW5kZXJbbW9ieEFkbWluUHJvcGVydHldKSB7XG4gICAgICAvLyBSZW5kZXIgbWF5IGhhdmUgYmVlbiBob3Qtc3dhcHBlZCBhbmQvb3Igb3ZlcnJpZGVuIGJ5IGEgc3ViY2xhc3MuXG4gICAgICB2YXIgX2Rpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUodGhpcyk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSByZWFjdGl2ZSByZW5kZXIgb2YgYW4gb2JzZXJ2ZXIgY2xhc3MgY29tcG9uZW50IChcIiArIF9kaXNwbGF5TmFtZSArIFwiKSBcXG4gICAgICAgICAgICAgICAgd2FzIG92ZXJyaWRlbiBhZnRlciBNb2JYIGF0dGFjaGVkLiBUaGlzIG1heSByZXN1bHQgaW4gYSBtZW1vcnkgbGVhayBpZiB0aGUgXFxuICAgICAgICAgICAgICAgIG92ZXJyaWRlbiByZWFjdGl2ZSByZW5kZXIgd2FzIG5vdCBwcm9wZXJseSBkaXNwb3NlZC5cIik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbXBvbmVudENsYXNzO1xufSAvLyBHZW5lcmF0ZXMgYSBmcmllbmRseSBuYW1lIGZvciBkZWJ1Z2dpbmdcblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoY29tcCkge1xuICByZXR1cm4gY29tcC5kaXNwbGF5TmFtZSB8fCBjb21wLm5hbWUgfHwgY29tcC5jb25zdHJ1Y3RvciAmJiAoY29tcC5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBjb21wLmNvbnN0cnVjdG9yLm5hbWUpIHx8IFwiPGNvbXBvbmVudD5cIjtcbn1cblxuZnVuY3Rpb24gbWFrZUNvbXBvbmVudFJlYWN0aXZlKHJlbmRlcikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkgPT09IHRydWUpIHJldHVybiByZW5kZXIuY2FsbCh0aGlzKTtcbiAgLyoqXHJcbiAgICogSWYgcHJvcHMgYXJlIHNoYWxsb3dseSBtb2RpZmllZCwgcmVhY3Qgd2lsbCByZW5kZXIgYW55d2F5LFxyXG4gICAqIHNvIGF0b20ucmVwb3J0Q2hhbmdlZCgpIHNob3VsZCBub3QgcmVzdWx0IGluIHlldCBhbm90aGVyIHJlLXJlbmRlclxyXG4gICAqL1xuXG4gIHNldEhpZGRlblByb3AodGhpcywgc2tpcFJlbmRlcktleSwgZmFsc2UpO1xuICAvKipcclxuICAgKiBmb3JjZVVwZGF0ZSB3aWxsIHJlLWFzc2lnbiB0aGlzLnByb3BzLiBXZSBkb24ndCB3YW50IHRoYXQgdG8gY2F1c2UgYSBsb29wLFxyXG4gICAqIHNvIGRldGVjdCB0aGVzZSBjaGFuZ2VzXHJcbiAgICovXG5cbiAgc2V0SGlkZGVuUHJvcCh0aGlzLCBpc0ZvcmNpbmdVcGRhdGVLZXksIGZhbHNlKTtcbiAgdmFyIGluaXRpYWxOYW1lID0gZ2V0RGlzcGxheU5hbWUodGhpcyk7XG4gIHZhciBiYXNlUmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIHZhciBpc1JlbmRlcmluZ1BlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKGluaXRpYWxOYW1lICsgXCIucmVuZGVyKClcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNSZW5kZXJpbmdQZW5kaW5nKSB7XG4gICAgICAvLyBOLkIuIEdldHRpbmcgaGVyZSAqYmVmb3JlIG1vdW50aW5nKiBtZWFucyB0aGF0IGEgY29tcG9uZW50IGNvbnN0cnVjdG9yIGhhcyBzaWRlIGVmZmVjdHMgKHNlZSB0aGUgcmVsZXZhbnQgdGVzdCBpbiBtaXNjLmpzKVxuICAgICAgLy8gVGhpcyB1bmlkaW9tYXRpYyBSZWFjdCB1c2FnZSBidXQgUmVhY3Qgd2lsbCBjb3JyZWN0bHkgd2FybiBhYm91dCB0aGlzIHNvIHdlIGNvbnRpbnVlIGFzIHVzdWFsXG4gICAgICAvLyBTZWUgIzg1IC8gUHVsbCAjNDRcbiAgICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChfdGhpc1ttb2J4SXNVbm1vdW50ZWRdICE9PSB0cnVlKSB7XG4gICAgICAgIHZhciBoYXNFcnJvciA9IHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZXRIaWRkZW5Qcm9wKF90aGlzLCBpc0ZvcmNpbmdVcGRhdGVLZXksIHRydWUpO1xuICAgICAgICAgIGlmICghX3RoaXNbc2tpcFJlbmRlcktleV0pIENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUuY2FsbChfdGhpcyk7XG4gICAgICAgICAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBzZXRIaWRkZW5Qcm9wKF90aGlzLCBpc0ZvcmNpbmdVcGRhdGVLZXksIGZhbHNlKTtcbiAgICAgICAgICBpZiAoaGFzRXJyb3IpIHJlYWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJlYWN0aW9uW1wicmVhY3RDb21wb25lbnRcIl0gPSB0aGlzO1xuICByZWFjdGl2ZVJlbmRlclttb2J4QWRtaW5Qcm9wZXJ0eV0gPSByZWFjdGlvbjtcbiAgdGhpcy5yZW5kZXIgPSByZWFjdGl2ZVJlbmRlcjtcblxuICBmdW5jdGlvbiByZWFjdGl2ZVJlbmRlcigpIHtcbiAgICBpc1JlbmRlcmluZ1BlbmRpbmcgPSBmYWxzZTtcbiAgICB2YXIgZXhjZXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHZhciByZW5kZXJpbmcgPSB1bmRlZmluZWQ7XG4gICAgcmVhY3Rpb24udHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyaW5nID0gX2FsbG93U3RhdGVDaGFuZ2VzKGZhbHNlLCBiYXNlUmVuZGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXhjZXB0aW9uID0gZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHJlYWN0aXZlUmVuZGVyLmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVyU0NVKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKCkpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbbW9ieC1yZWFjdF0gSXQgc2VlbXMgdGhhdCBhIHJlLXJlbmRlcmluZyBvZiBhIFJlYWN0IGNvbXBvbmVudCBpcyB0cmlnZ2VyZWQgd2hpbGUgaW4gc3RhdGljIChzZXJ2ZXItc2lkZSkgbW9kZS4gUGxlYXNlIG1ha2Ugc3VyZSBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbmx5IG9uY2Ugc2VydmVyLXNpZGUuXCIpO1xuICB9IC8vIHVwZGF0ZSBvbiBhbnkgc3RhdGUgY2hhbmdlcyAoYXMgaXMgdGhlIGRlZmF1bHQpXG5cblxuICBpZiAodGhpcy5zdGF0ZSAhPT0gbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdXBkYXRlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbm90IGVxdWFsLCBpbnNwaXJlZCBieSBQdXJlUmVuZGVyTWl4aW5cbiAgLy8gd2UgY291bGQgcmV0dXJuIGp1c3QgJ2ZhbHNlJyBoZXJlLCBhbmQgYXZvaWQgdGhlIGBza2lwUmVuZGVyYCBjaGVja3MgZXRjXG4gIC8vIGhvd2V2ZXIsIGl0IGlzIG5pY2VyIGlmIGxpZmVjeWNsZSBldmVudHMgYXJlIHRyaWdnZXJlZCBsaWtlIHVzdWFsbHksXG4gIC8vIHNvIHdlIHJldHVybiB0cnVlIGhlcmUgaWYgcHJvcHMgYXJlIHNoYWxsb3dseSBtb2RpZmllZC5cblxuXG4gIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VPYnNlcnZhYmxlUHJvcCh0YXJnZXQsIHByb3BOYW1lKSB7XG4gIHZhciB2YWx1ZUhvbGRlcktleSA9IG5ld1N5bWJvbChcInJlYWN0UHJvcF9cIiArIHByb3BOYW1lICsgXCJfdmFsdWVIb2xkZXJcIik7XG4gIHZhciBhdG9tSG9sZGVyS2V5ID0gbmV3U3ltYm9sKFwicmVhY3RQcm9wX1wiICsgcHJvcE5hbWUgKyBcIl9hdG9tSG9sZGVyXCIpO1xuXG4gIGZ1bmN0aW9uIGdldEF0b20oKSB7XG4gICAgaWYgKCF0aGlzW2F0b21Ib2xkZXJLZXldKSB7XG4gICAgICBzZXRIaWRkZW5Qcm9wKHRoaXMsIGF0b21Ib2xkZXJLZXksIGNyZWF0ZUF0b20oXCJyZWFjdGl2ZSBcIiArIHByb3BOYW1lKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbYXRvbUhvbGRlcktleV07XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHByZXZSZWFkU3RhdGUgPSBmYWxzZTtcblxuICAgICAgaWYgKF9hbGxvd1N0YXRlUmVhZHNTdGFydCAmJiBfYWxsb3dTdGF0ZVJlYWRzRW5kKSB7XG4gICAgICAgIHByZXZSZWFkU3RhdGUgPSBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGdldEF0b20uY2FsbCh0aGlzKS5yZXBvcnRPYnNlcnZlZCgpO1xuXG4gICAgICBpZiAoX2FsbG93U3RhdGVSZWFkc1N0YXJ0ICYmIF9hbGxvd1N0YXRlUmVhZHNFbmQpIHtcbiAgICAgICAgX2FsbG93U3RhdGVSZWFkc0VuZChwcmV2UmVhZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXNbdmFsdWVIb2xkZXJLZXldO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodikge1xuICAgICAgaWYgKCF0aGlzW2lzRm9yY2luZ1VwZGF0ZUtleV0gJiYgIXNoYWxsb3dFcXVhbCh0aGlzW3ZhbHVlSG9sZGVyS2V5XSwgdikpIHtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCB2YWx1ZUhvbGRlcktleSwgdik7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgc2tpcFJlbmRlcktleSwgdHJ1ZSk7XG4gICAgICAgIGdldEF0b20uY2FsbCh0aGlzKS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIHNldEhpZGRlblByb3AodGhpcywgc2tpcFJlbmRlcktleSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGlkZGVuUHJvcCh0aGlzLCB2YWx1ZUhvbGRlcktleSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuZm9yOyAvLyBVc2luZyByZWFjdC1pcyBoYWQgc29tZSBpc3N1ZXMgKGFuZCBvcGVyYXRlcyBvbiBlbGVtZW50cywgbm90IG9uIHR5cGVzKSwgc2VlICM2MDggLyAjNjA5XG5cbnZhciBSZWFjdEZvcndhcmRSZWZTeW1ib2wgPSBoYXNTeW1ib2wgP1xuLyojX19QVVJFX18qL1xuU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpIDogdHlwZW9mIGZvcndhcmRSZWYgPT09IFwiZnVuY3Rpb25cIiAmJlxuLyojX19QVVJFX18qL1xuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG51bGw7XG59KVtcIiQkdHlwZW9mXCJdO1xudmFyIFJlYWN0TWVtb1N5bWJvbCA9IGhhc1N5bWJvbCA/XG4vKiNfX1BVUkVfXyovXG5TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSA6IHR5cGVvZiBtZW1vID09PSBcImZ1bmN0aW9uXCIgJiZcbi8qI19fUFVSRV9fKi9cbm1lbW8oZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBudWxsO1xufSlbXCIkJHR5cGVvZlwiXTtcbi8qKlxyXG4gKiBPYnNlcnZlciBmdW5jdGlvbiAvIGRlY29yYXRvclxyXG4gKi9cblxuZnVuY3Rpb24gb2JzZXJ2ZXIoY29tcG9uZW50KSB7XG4gIGlmIChjb21wb25lbnRbXCJpc01vYnhJbmplY3RvclwiXSA9PT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUud2FybihcIk1vYnggb2JzZXJ2ZXI6IFlvdSBhcmUgdHJ5aW5nIHRvIHVzZSAnb2JzZXJ2ZXInIG9uIGEgY29tcG9uZW50IHRoYXQgYWxyZWFkeSBoYXMgJ2luamVjdCcuIFBsZWFzZSBhcHBseSAnb2JzZXJ2ZXInIGJlZm9yZSBhcHBseWluZyAnaW5qZWN0J1wiKTtcbiAgfVxuXG4gIGlmIChSZWFjdE1lbW9TeW1ib2wgJiYgY29tcG9uZW50W1wiJCR0eXBlb2ZcIl0gPT09IFJlYWN0TWVtb1N5bWJvbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1vYnggb2JzZXJ2ZXI6IFlvdSBhcmUgdHJ5aW5nIHRvIHVzZSAnb2JzZXJ2ZXInIG9uIGEgZnVuY3Rpb24gY29tcG9uZW50IHdyYXBwZWQgaW4gZWl0aGVyIGFub3RoZXIgb2JzZXJ2ZXIgb3IgJ1JlYWN0Lm1lbW8nLiBUaGUgb2JzZXJ2ZXIgYWxyZWFkeSBhcHBsaWVzICdSZWFjdC5tZW1vJyBmb3IgeW91LlwiKTtcbiAgfSAvLyBVbndyYXAgZm9yd2FyZCByZWZzIGludG8gYDxPYnNlcnZlcj5gIGNvbXBvbmVudFxuICAvLyB3ZSBuZWVkIHRvIHVud3JhcCB0aGUgcmVuZGVyLCBiZWNhdXNlIGl0IGlzIHRoZSBpbm5lciByZW5kZXIgdGhhdCBuZWVkcyB0byBiZSB0cmFja2VkLFxuICAvLyBub3QgdGhlIEZvcndhcmRSZWYgSG9DXG5cblxuICBpZiAoUmVhY3RGb3J3YXJkUmVmU3ltYm9sICYmIGNvbXBvbmVudFtcIiQkdHlwZW9mXCJdID09PSBSZWFjdEZvcndhcmRSZWZTeW1ib2wpIHtcbiAgICB2YXIgYmFzZVJlbmRlciA9IGNvbXBvbmVudFtcInJlbmRlclwiXTtcbiAgICBpZiAodHlwZW9mIGJhc2VSZW5kZXIgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwicmVuZGVyIHByb3BlcnR5IG9mIEZvcndhcmRSZWYgd2FzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybiBmb3J3YXJkUmVmKGZ1bmN0aW9uIE9ic2VydmVyRm9yd2FyZFJlZigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoT2JzZXJ2ZXIsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VSZW5kZXIuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IC8vIEZ1bmN0aW9uIGNvbXBvbmVudFxuXG5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIiAmJiAoIWNvbXBvbmVudC5wcm90b3R5cGUgfHwgIWNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKSAmJiAhY29tcG9uZW50W1wiaXNSZWFjdENsYXNzXCJdICYmICFPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YuY2FsbChDb21wb25lbnQsIGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXIkMShjb21wb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VDbGFzc0NvbXBvbmVudE9ic2VydmVyKGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgTW9iWFByb3ZpZGVyQ29udGV4dCA9XG4vKiNfX1BVUkVfXyovXG5SZWFjdF9fZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtcbmZ1bmN0aW9uIFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgc3RvcmVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgcGFyZW50VmFsdWUgPSBSZWFjdF9fZGVmYXVsdC51c2VDb250ZXh0KE1vYlhQcm92aWRlckNvbnRleHQpO1xuICB2YXIgbXV0YWJsZVByb3ZpZGVyUmVmID0gUmVhY3RfX2RlZmF1bHQudXNlUmVmKF9leHRlbmRzKHt9LCBwYXJlbnRWYWx1ZSwgc3RvcmVzKSk7XG4gIHZhciB2YWx1ZSA9IG11dGFibGVQcm92aWRlclJlZi5jdXJyZW50O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgdmFsdWUsIHN0b3Jlcyk7IC8vIHNwcmVhZCBpbiBwcmV2aW91cyBzdGF0ZSBmb3IgdGhlIGNvbnRleHQgYmFzZWQgc3RvcmVzXG5cblxuICAgIGlmICghc2hhbGxvd0VxdWFsKHZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1vYlggUHJvdmlkZXI6IFRoZSBzZXQgb2YgcHJvdmlkZWQgc3RvcmVzIGhhcyBjaGFuZ2VkLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC1yZWFjdCN0aGUtc2V0LW9mLXByb3ZpZGVkLXN0b3Jlcy1oYXMtY2hhbmdlZC1lcnJvci5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTW9iWFByb3ZpZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5Qcm92aWRlci5kaXNwbGF5TmFtZSA9IFwiTW9iWFByb3ZpZGVyXCI7XG5cbi8qKlxyXG4gKiBTdG9yZSBJbmplY3Rpb25cclxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0ZuLCBjb21wb25lbnQsIGluamVjdE5hbWVzLCBtYWtlUmVhY3RpdmUpIHtcbiAgLy8gU3VwcG9ydCBmb3J3YXJkIHJlZnNcbiAgdmFyIEluamVjdG9yID0gUmVhY3RfX2RlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG5cbiAgICB2YXIgY29udGV4dCA9IFJlYWN0X19kZWZhdWx0LnVzZUNvbnRleHQoTW9iWFByb3ZpZGVyQ29udGV4dCk7XG4gICAgT2JqZWN0LmFzc2lnbihuZXdQcm9wcywgZ3JhYlN0b3Jlc0ZuKGNvbnRleHQgfHwge30sIG5ld1Byb3BzKSB8fCB7fSk7XG5cbiAgICBpZiAocmVmKSB7XG4gICAgICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBuZXdQcm9wcyk7XG4gIH0pO1xuICBpZiAobWFrZVJlYWN0aXZlKSBJbmplY3RvciA9IG9ic2VydmVyKEluamVjdG9yKTtcbiAgSW5qZWN0b3JbXCJpc01vYnhJbmplY3RvclwiXSA9IHRydWU7IC8vIGFzc2lnbmVkIGxhdGUgdG8gc3VwcHJlc3Mgb2JzZXJ2ZXIgd2FybmluZ1xuICAvLyBTdGF0aWMgZmllbGRzIGZyb20gY29tcG9uZW50IHNob3VsZCBiZSB2aXNpYmxlIG9uIHRoZSBnZW5lcmF0ZWQgSW5qZWN0b3JcblxuICBjb3B5U3RhdGljUHJvcGVydGllcyhjb21wb25lbnQsIEluamVjdG9yKTtcbiAgSW5qZWN0b3JbXCJ3cmFwcGVkQ29tcG9uZW50XCJdID0gY29tcG9uZW50O1xuICBJbmplY3Rvci5kaXNwbGF5TmFtZSA9IGdldEluamVjdE5hbWUoY29tcG9uZW50LCBpbmplY3ROYW1lcyk7XG4gIHJldHVybiBJbmplY3Rvcjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5qZWN0TmFtZShjb21wb25lbnQsIGluamVjdE5hbWVzKSB7XG4gIHZhciBkaXNwbGF5TmFtZTtcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Lm5hbWUgfHwgY29tcG9uZW50LmNvbnN0cnVjdG9yICYmIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG4gIGlmIChpbmplY3ROYW1lcykgZGlzcGxheU5hbWUgPSBcImluamVjdC13aXRoLVwiICsgaW5qZWN0TmFtZXMgKyBcIihcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtlbHNlIGRpc3BsYXlOYW1lID0gXCJpbmplY3QoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBkaXNwbGF5TmFtZTtcbn1cblxuZnVuY3Rpb24gZ3JhYlN0b3Jlc0J5TmFtZShzdG9yZU5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYmFzZVN0b3JlcywgbmV4dFByb3BzKSB7XG4gICAgc3RvcmVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAgIGlmIChzdG9yZU5hbWUgaW4gbmV4dFByb3BzIC8vIHByZWZlciBwcm9wcyBvdmVyIHN0b3Jlc1xuICAgICAgKSByZXR1cm47XG4gICAgICBpZiAoIShzdG9yZU5hbWUgaW4gYmFzZVN0b3JlcykpIHRocm93IG5ldyBFcnJvcihcIk1vYlggaW5qZWN0b3I6IFN0b3JlICdcIiArIHN0b3JlTmFtZSArIFwiJyBpcyBub3QgYXZhaWxhYmxlISBNYWtlIHN1cmUgaXQgaXMgcHJvdmlkZWQgYnkgc29tZSBQcm92aWRlclwiKTtcbiAgICAgIG5leHRQcm9wc1tzdG9yZU5hbWVdID0gYmFzZVN0b3Jlc1tzdG9yZU5hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXh0UHJvcHM7XG4gIH07XG59XG4vKipcclxuICogaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0aGF0IGluamVjdHMgc3RvcmVzIHRvIGEgY2hpbGQuXHJcbiAqIHRha2VzIGVpdGhlciBhIHZhcmFyZ3MgbGlzdCBvZiBzdHJpbmdzLCB3aGljaCBhcmUgc3RvcmVzIHJlYWQgZnJvbSB0aGUgY29udGV4dCxcclxuICogb3IgYSBmdW5jdGlvbiB0aGF0IG1hbnVhbGx5IG1hcHMgdGhlIGF2YWlsYWJsZSBzdG9yZXMgZnJvbSB0aGUgY29udGV4dCB0byBwcm9wczpcclxuICogc3RvcmVzVG9Qcm9wcyhtb2J4U3RvcmVzLCBwcm9wcywgY29udGV4dCkgPT4gbmV3UHJvcHNcclxuICovXG5cblxuZnVuY3Rpb24gaW5qZWN0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdG9yZU5hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBncmFiU3RvcmVzRm4gPSBhcmd1bWVudHNbMF07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0ZuLCBjb21wb25lbnRDbGFzcywgZ3JhYlN0b3Jlc0ZuLm5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0J5TmFtZShzdG9yZU5hbWVzKSwgY29tcG9uZW50Q2xhc3MsIHN0b3JlTmFtZXMuam9pbihcIi1cIiksIGZhbHNlKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBwcm90b1N0b3JlS2V5ID1cbi8qI19fUFVSRV9fKi9cbm5ld1N5bWJvbChcImRpc3Bvc2VPblVubW91bnRQcm90b1wiKTtcbnZhciBpbnN0U3RvcmVLZXkgPVxuLyojX19QVVJFX18qL1xubmV3U3ltYm9sKFwiZGlzcG9zZU9uVW5tb3VudEluc3RcIik7XG5cbmZ1bmN0aW9uIHJ1bkRpc3Bvc2Vyc09uV2lsbFVubW91bnQoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIFtdLmNvbmNhdCh0aGlzW3Byb3RvU3RvcmVLZXldIHx8IFtdLCB0aGlzW2luc3RTdG9yZUtleV0gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHByb3BLZXlPckZ1bmN0aW9uKSB7XG4gICAgdmFyIHByb3AgPSB0eXBlb2YgcHJvcEtleU9yRnVuY3Rpb24gPT09IFwic3RyaW5nXCIgPyBfdGhpc1twcm9wS2V5T3JGdW5jdGlvbl0gOiBwcm9wS2V5T3JGdW5jdGlvbjtcblxuICAgIGlmIChwcm9wICE9PSB1bmRlZmluZWQgJiYgcHJvcCAhPT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcCkpIHByb3AubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHJldHVybiBmKCk7XG4gICAgICB9KTtlbHNlIHByb3AoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwb3NlT25Vbm1vdW50KHRhcmdldCwgcHJvcGVydHlLZXlPckZ1bmN0aW9uKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnR5S2V5T3JGdW5jdGlvbikpIHtcbiAgICByZXR1cm4gcHJvcGVydHlLZXlPckZ1bmN0aW9uLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBkaXNwb3NlT25Vbm1vdW50KHRhcmdldCwgZm4pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KS5jb25zdHJ1Y3RvcjtcbiAgdmFyIGMyID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldC5jb25zdHJ1Y3Rvcik7IC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVhY3QtaG90LWxvYWRlclxuXG4gIHZhciBjMyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSk7XG5cbiAgaWYgKCEoYyA9PT0gUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHx8IGMgPT09IFJlYWN0X19kZWZhdWx0LlB1cmVDb21wb25lbnQgfHwgYzIgPT09IFJlYWN0X19kZWZhdWx0LkNvbXBvbmVudCB8fCBjMiA9PT0gUmVhY3RfX2RlZmF1bHQuUHVyZUNvbXBvbmVudCB8fCBjMyA9PT0gUmVhY3RfX2RlZmF1bHQuQ29tcG9uZW50IHx8IGMzID09PSBSZWFjdF9fZGVmYXVsdC5QdXJlQ29tcG9uZW50KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LXJlYWN0XSBkaXNwb3NlT25Vbm1vdW50IG9ubHkgc3VwcG9ydHMgZGlyZWN0IHN1YmNsYXNzZXMgb2YgUmVhY3QuQ29tcG9uZW50IG9yIFJlYWN0LlB1cmVDb21wb25lbnQuXCIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eUtleU9yRnVuY3Rpb24gIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHByb3BlcnR5S2V5T3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiICYmICFBcnJheS5pc0FycmF5KHByb3BlcnR5S2V5T3JGdW5jdGlvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC1yZWFjdF0gZGlzcG9zZU9uVW5tb3VudCBvbmx5IHdvcmtzIGlmIHRoZSBwYXJhbWV0ZXIgaXMgZWl0aGVyIGEgcHJvcGVydHkga2V5IG9yIGEgZnVuY3Rpb24uXCIpO1xuICB9IC8vIGRlY29yYXRvcidzIHRhcmdldCBpcyB0aGUgcHJvdG90eXBlLCBzbyBpdCBkb2Vzbid0IGhhdmUgYW55IGluc3RhbmNlIHByb3BlcnRpZXMgbGlrZSBwcm9wc1xuXG5cbiAgdmFyIGlzRGVjb3JhdG9yID0gdHlwZW9mIHByb3BlcnR5S2V5T3JGdW5jdGlvbiA9PT0gXCJzdHJpbmdcIjsgLy8gYWRkIHByb3BlcnR5IGtleSAvIGZ1bmN0aW9uIHdlIHdhbnQgcnVuIChkaXNwb3NlZCkgdG8gdGhlIHN0b3JlXG5cbiAgdmFyIGNvbXBvbmVudFdhc0FscmVhZHlNb2RpZmllZCA9ICEhdGFyZ2V0W3Byb3RvU3RvcmVLZXldIHx8ICEhdGFyZ2V0W2luc3RTdG9yZUtleV07XG4gIHZhciBzdG9yZSA9IGlzRGVjb3JhdG9yID8gLy8gZGVjb3JhdG9ycyBhcmUgYWRkZWQgdG8gdGhlIHByb3RvdHlwZSBzdG9yZVxuICB0YXJnZXRbcHJvdG9TdG9yZUtleV0gfHwgKHRhcmdldFtwcm90b1N0b3JlS2V5XSA9IFtdKSA6IC8vIGZ1bmN0aW9ucyBhcmUgYWRkZWQgdG8gdGhlIGluc3RhbmNlIHN0b3JlXG4gIHRhcmdldFtpbnN0U3RvcmVLZXldIHx8ICh0YXJnZXRbaW5zdFN0b3JlS2V5XSA9IFtdKTtcbiAgc3RvcmUucHVzaChwcm9wZXJ0eUtleU9yRnVuY3Rpb24pOyAvLyB0d2VhayB0aGUgY29tcG9uZW50IGNsYXNzIGNvbXBvbmVudFdpbGxVbm1vdW50IGlmIG5vdCBkb25lIGFscmVhZHlcblxuICBpZiAoIWNvbXBvbmVudFdhc0FscmVhZHlNb2RpZmllZCkge1xuICAgIHBhdGNoKHRhcmdldCwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCBydW5EaXNwb3NlcnNPbldpbGxVbm1vdW50KTtcbiAgfSAvLyByZXR1cm4gdGhlIGRpc3Bvc2VyIGFzIGlzIGlmIGludm9rZWQgYXMgYSBub24gZGVjb3JhdG9yXG5cblxuICBpZiAodHlwZW9mIHByb3BlcnR5S2V5T3JGdW5jdGlvbiAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBwcm9wZXJ0eUtleU9yRnVuY3Rpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdG9yKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuID4gNiA/IF9sZW4gLSA2IDogMCksIF9rZXkgPSA2OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSA2XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IFwiPDxhbm9ueW1vdXM+PlwiO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsID0gcHJvcHNbcHJvcE5hbWVdID09PSBudWxsID8gXCJudWxsXCIgOiBcInVuZGVmaW5lZFwiO1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgXCIgKyBcImluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYFwiICsgYWN0dWFsICsgXCJgLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSByZXN0IGFyZyBpcyBuZWNlc3NhcnkgZm9yIHNvbWUgUmVhY3QgaW50ZXJuYWxzIC0gZmFpbHMgdGVzdHMgb3RoZXJ3aXNlXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXBwbHkodm9pZCAwLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lXS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7IC8vIEFkZCBpc1JlcXVpcmVkIHRvIHNhdGlzZnkgUmVxdWlyYWJsZVxuXG4gIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbn0gLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5cblxuZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAvLyBOYXRpdmUgU3ltYm9sLlxuICBpZiAocHJvcFR5cGUgPT09IFwic3ltYm9sXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuXG5cbiAgaWYgKHByb3BWYWx1ZVtcIkBAdG9TdHJpbmdUYWdcIl0gPT09IFwiU3ltYm9sXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG5cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcblxuXG5mdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiYXJyYXlcIjtcbiAgfVxuXG4gIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgcmV0dXJuIFwib2JqZWN0XCI7XG4gIH1cblxuICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xcIjtcbiAgfVxuXG4gIHJldHVybiBwcm9wVHlwZTtcbn0gLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5cblxuZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG5cbiAgaWYgKHByb3BUeXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiBcImRhdGVcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIFwicmVnZXhwXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BUeXBlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGFsbG93TmF0aXZlVHlwZSwgbW9ieFR5cGUpIHtcbiAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhbGxvd05hdGl2ZVR5cGUpIHtcbiAgICAgICAgaWYgKGdldFByb3BUeXBlKHByb3BzW3Byb3BOYW1lXSkgPT09IG1vYnhUeXBlLnRvTG93ZXJDYXNlKCkpIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW9ieENoZWNrZXI7XG5cbiAgICAgIHN3aXRjaCAobW9ieFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVBcnJheTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVPYmplY3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIk1hcFwiOlxuICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlTWFwO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBtb2J4VHlwZTogXCIgKyBtb2J4VHlwZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICAgIGlmICghbW9ieENoZWNrZXIocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICB2YXIgbmF0aXZlVHlwZUV4cGVjdGF0aW9uTWVzc2FnZSA9IGFsbG93TmF0aXZlVHlwZSA/IFwiIG9yIGphdmFzY3JpcHQgYFwiICsgbW9ieFR5cGUudG9Mb3dlckNhc2UoKSArIFwiYFwiIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcmVjaXNlVHlwZSArIFwiYCBzdXBwbGllZCB0b1wiICsgXCIgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG1vYnguT2JzZXJ2YWJsZVwiICsgbW9ieFR5cGUgKyBcImBcIiArIG5hdGl2ZVR5cGVFeHBlY3RhdGlvbk1lc3NhZ2UgKyBcIi5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5T2ZUeXBlQ2hlY2tlcihhbGxvd05hdGl2ZVR5cGUsIHR5cGVDaGVja2VyKSB7XG4gIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4yID4gNSA/IF9sZW4yIC0gNSA6IDApLCBfa2V5MiA9IDU7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIHJlc3RbX2tleTIgLSA1XSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlByb3BlcnR5IGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiBjb21wb25lbnQgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBoYXMgXCIgKyBcImludmFsaWQgUHJvcFR5cGUgbm90YXRpb24uXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihhbGxvd05hdGl2ZVR5cGUsIFwiQXJyYXlcIikocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVycm9yID0gdHlwZUNoZWNrZXIuYXBwbHkodm9pZCAwLCBbcHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCJbXCIgKyBpICsgXCJdXCJdLmNvbmNhdChyZXN0KSk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIG9ic2VydmFibGVBcnJheSA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIkFycmF5XCIpO1xudmFyIG9ic2VydmFibGVBcnJheU9mID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIuYmluZChudWxsLCBmYWxzZSk7XG52YXIgb2JzZXJ2YWJsZU1hcCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIk1hcFwiKTtcbnZhciBvYnNlcnZhYmxlT2JqZWN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiT2JqZWN0XCIpO1xudmFyIGFycmF5T3JPYnNlcnZhYmxlQXJyYXkgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcih0cnVlLCBcIkFycmF5XCIpO1xudmFyIGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZiA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyLmJpbmQobnVsbCwgdHJ1ZSk7XG52YXIgb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IodHJ1ZSwgXCJPYmplY3RcIik7XG52YXIgUHJvcFR5cGVzID0ge1xuICBvYnNlcnZhYmxlQXJyYXk6IG9ic2VydmFibGVBcnJheSxcbiAgb2JzZXJ2YWJsZUFycmF5T2Y6IG9ic2VydmFibGVBcnJheU9mLFxuICBvYnNlcnZhYmxlTWFwOiBvYnNlcnZhYmxlTWFwLFxuICBvYnNlcnZhYmxlT2JqZWN0OiBvYnNlcnZhYmxlT2JqZWN0LFxuICBhcnJheU9yT2JzZXJ2YWJsZUFycmF5OiBhcnJheU9yT2JzZXJ2YWJsZUFycmF5LFxuICBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2Y6IGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZixcbiAgb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0OiBvYmplY3RPck9ic2VydmFibGVPYmplY3Rcbn07XG5cbmlmICghQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIFJlYWN0IHRvIGJlIGF2YWlsYWJsZVwiKTtcbmlmICghb2JzZXJ2YWJsZSkgdGhyb3cgbmV3IEVycm9yKFwibW9ieC1yZWFjdCByZXF1aXJlcyBtb2J4IHRvIGJlIGF2YWlsYWJsZVwiKTtcblxuZXhwb3J0IHsgTW9iWFByb3ZpZGVyQ29udGV4dCwgUHJvcFR5cGVzLCBQcm92aWRlciwgZGlzcG9zZU9uVW5tb3VudCwgaW5qZWN0LCBvYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9ieHJlYWN0LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IGluaXRpYWxpemVTdG9yZSwgSVN0b3JlIH0gZnJvbSAnfi9zcmMvc3RvcmVzL3Jvb3RTdG9yZSc7XHJcbmltcG9ydCBBcHAsIHsgQXBwQ29udGV4dCB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IHsgZ2V0U25hcHNob3QsIG9uUGF0Y2ggfSBmcm9tICdtb2J4LXN0YXRlLXRyZWUnO1xyXG5pbXBvcnQgbWFrZUluc3BlY3RhYmxlIGZyb20gJ21vYngtZGV2dG9vbHMtbXN0JztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ34vdXRpbHMvd2l0aEFwb2xsbyc7XHJcbi8vaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2VudkNvbmZpZy9tdWlUaGVtZSc7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuXHRpc1NlcnZlcjogYm9vbGVhbjtcclxuXHRpbml0aWFsU3RhdGU6IElTdG9yZTtcclxuXHRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlO1xyXG5cdHBhZ2VQcm9wczogYW55O1xyXG5cdHJvdXRlcjogYW55O1xyXG5cdGFwb2xsb0NsaWVudDogYW55O1xyXG59XHJcblxyXG5jbGFzcyBSb290QXBwIGV4dGVuZHMgQXBwPElQcm9wcz4ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfTogQXBwQ29udGV4dCkge1xyXG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuXHRcdGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcblx0XHRjb25zdCBzdG9yZSA9IGluaXRpYWxpemVTdG9yZShpc1NlcnZlcik7XHJcblxyXG5cdFx0aWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFx0cGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7IGluaXRpYWxTdGF0ZTogZ2V0U25hcHNob3Qoc3RvcmUpLCBpc1NlcnZlciwgcGFnZVByb3BzIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yZTogSVN0b3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdG9yZSA9IGluaXRpYWxpemVTdG9yZShwcm9wcy5pc1NlcnZlciwgcHJvcHMuaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAgICAgLy8gbXN0IOuUlOuyhOq5hSDroZzqt7hcclxuXHRcdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0XHQvLyDtgazroawgY29uc29sZSDsl5Ag7ZW064u56rCS7J2YIOuzgO2ZlOqwgCDsnojsnYQg65WMIOuCmO2DgOuCmOqyjCDtlahcclxuXHRcdFx0b25QYXRjaCh0aGlzLnN0b3JlLCBwYXRjaCA9PiB7fSk7XHJcblxyXG5cdFx0XHQvLyDtgazroawgbW9ieCB0b29scyDsl5AgTVNUIOuhnCDsg4Htg5zrs4DtmZTrpbwg67O8IOyImCDsnojqsowg7ZWc64ukLlxyXG5cdFx0XHRtYWtlSW5zcGVjdGFibGUodGhpcy5zdG9yZSk7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcclxuXHJcblx0XHRpZiAoanNzU3R5bGVzICYmIGpzc1N0eWxlcy5wYXJlbnROb2RlKSB7XHJcblx0XHRcdGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvQ2xpZW50IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICAgICApXHJcbiAgICB9ICAgIFxyXG59ICAgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhSb290QXBwKTsiXSwic291cmNlUm9vdCI6IiJ9