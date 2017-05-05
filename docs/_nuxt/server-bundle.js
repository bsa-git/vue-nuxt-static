module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 420);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_env_index__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_global__ = __webpack_require__(103);



var config = _.merge(__WEBPACK_IMPORTED_MODULE_1__config_global__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__config_env_index__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = config;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(412)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\header\\breadcrumbs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] breadcrumbs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(345)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\header\\navigation.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] navigation.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(135)

/* template */
var __vue_template__ = __webpack_require__(342)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(43)('wks')
  , uid        = __webpack_require__(30)
  , Symbol     = __webpack_require__(9).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(123)

/* template */
var __vue_template__ = __webpack_require__(372)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\customers.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] customers.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(58);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(16)
  , createDesc = __webpack_require__(28);
module.exports = __webpack_require__(13) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(61)
  , toPrimitive    = __webpack_require__(46)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(62)
  , defined = __webpack_require__(38);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(66)
  , enumBugKeys = __webpack_require__(40);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(114)

/* template */
var __vue_template__ = __webpack_require__(340)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\popular.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] popular.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(9)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(25)
  , hide      = __webpack_require__(15)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(37);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f
  , has = __webpack_require__(14)
  , TAG = __webpack_require__(6)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(110)

/* template */
var __vue_template__ = __webpack_require__(398)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\categories.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] categories.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(113)

/* template */
var __vue_template__ = __webpack_require__(331)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\pager.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] pager.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(116)

/* template */
var __vue_template__ = __webpack_require__(399)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] search.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(356)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\side-widget.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] side-widget.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(146)

/* template */
var __vue_template__ = __webpack_require__(361)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\pager.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] pager.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(241), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23)
  , document = __webpack_require__(9).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(43)('keys')
  , uid    = __webpack_require__(30);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(38);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(23);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(9)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(48)
  , defineProperty = __webpack_require__(16).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(268)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(63)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(271);
var global        = __webpack_require__(9)
  , hide          = __webpack_require__(15)
  , Iterators     = __webpack_require__(24)
  , TO_STRING_TAG = __webpack_require__(6)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(126)

/* template */
var __vue_template__ = __webpack_require__(332)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(130)

/* template */
var __vue_template__ = __webpack_require__(416)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\team.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] team.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(148)

/* template */
var __vue_template__ = __webpack_require__(402)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\social.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] social.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'enterClass', 'leaveClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'enterToClass', 'leaveToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ __webpack_exports__["a"] = {
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_mutation_types__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_api_about__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_api_blog__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_api_customers__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_api_gallery__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_api_slider__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_api_services__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_api_team__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_api_testimonials__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_api_socials__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_api_faq__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_api_welcome__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_api_pricing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_api_portfolio__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_js_validation_contact_me_js__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config_index__ = __webpack_require__(2);
//--- Mutation types ---//

//--- API modules ---//













//--- Plugins modules ---//


///////////////////////////////////////////////////////////////
//--- System ---// 

var receiveError = function receiveError(store, error) {
    store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].SET_ERROR, error);
};

var delayPage = function delayPage(store) {
    setTimeout(function () {
        store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].DELAY_PAGE);
    }, 100);
};

var receiveConfig = function receiveConfig(store) {
    store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_CONFIG, __WEBPACK_IMPORTED_MODULE_15__config_index__["a" /* default */]);
};

var iniSlider = function iniSlider(store, params) {
    // params = {id: "selector", opts: {...}}
    if ($(params.id).length === 0) {
        return;
    }
    // Check the Jquery plugin (owlCarousel)
    if ($(params.id).owlCarousel) {
        // console.log('Is owlCarousel');
        $(params.id).owlCarousel(params.opts);
    } else {
        (function () {
            // Expect the appearance of the Jquery plugin (owlCarousel)
            var intervalID = setInterval(function () {
                if ($(params.id).owlCarousel) {
                    // console.log('Is owlCarousel');
                    $(params.id).owlCarousel(params.opts);
                    clearInterval(intervalID);
                } else {
                    // console.log('No owlCarousel')
                }
            }, 100);
        })();
    }
};

var iniBootstrapValidation = function iniBootstrapValidation(store, params) {
    // params = {id: "selector", opts: {...}}
    if ($(params.id).length === 0) {
        return;
    }
    // Check the Jquery plugin (jqBootstrapValidation)
    if ($(params.id).jqBootstrapValidation) {
        // console.log('Is jqBootstrapValidation');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__static_js_validation_contact_me_js__["a" /* default */])(params.urlForm);
    } else {
        (function () {
            // Expect the appearance of the Jquery plugin (jqBootstrapValidation)
            var intervalID = setInterval(function () {
                if ($(params.id).jqBootstrapValidation) {
                    // console.log('Is jqBootstrapValidation');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__static_js_validation_contact_me_js__["a" /* default */])(params.urlForm);
                    clearInterval(intervalID);
                } else {
                    // console.log('No jqBootstrapValidation')
                }
            }, 100);
        })();
    }
};

//--- About ---// 
var receivePersonalData = function receivePersonalData(store) {
    if (_.isEmpty(store.state.about.personal_data)) {
        __WEBPACK_IMPORTED_MODULE_1__store_api_about__["a" /* default */].getPersonalData(function (personal_data) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_PERSONAL_DATA, personal_data);
        });
    }
};

var receiveBusinessData = function receiveBusinessData(store) {
    if (_.isEmpty(store.state.about.business)) {
        __WEBPACK_IMPORTED_MODULE_1__store_api_about__["a" /* default */].getBusinessData(function (business) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_BUSINESS_DATA, business);
        });
    }
};

var receiveSubscribeData = function receiveSubscribeData(store) {
    if (_.isEmpty(store.state.about.subscribe)) {
        __WEBPACK_IMPORTED_MODULE_1__store_api_about__["a" /* default */].getSubscribeData(function (subscribe) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SUBSCRIBE_DATA, subscribe);
        });
    }
};

var receiveWidgetsData = function receiveWidgetsData(store) {
    if (_.isEmpty(store.state.about.widgets)) {
        __WEBPACK_IMPORTED_MODULE_1__store_api_about__["a" /* default */].getWidgetsData(function (widgets) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_WIDGETS_DATA, widgets);
        });
    }
};

//--- Blog ---// 
var receiveBlogPosts = function receiveBlogPosts(store, id) {
    __WEBPACK_IMPORTED_MODULE_2__store_api_blog__["a" /* default */].getPosts(function (blog) {
        store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_BLOG_POSTS, blog);
    }, id);
};

var receiveBlogPost = function receiveBlogPost(store, id) {
    __WEBPACK_IMPORTED_MODULE_2__store_api_blog__["a" /* default */].getPost(function (blog) {
        store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_BLOG_POST, blog);
    }, id);
};

var receiveBlogCategories = function receiveBlogCategories(store) {
    if (_.isEmpty(store.state.blog.categories)) {
        __WEBPACK_IMPORTED_MODULE_2__store_api_blog__["a" /* default */].getCategories(function (blog) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_BLOG_CATEGORIES, blog);
        });
    }
};

var receiveBlogPopular = function receiveBlogPopular(store) {
    if (_.isEmpty(store.state.blog.popular)) {
        __WEBPACK_IMPORTED_MODULE_2__store_api_blog__["a" /* default */].getPopular(function (blog) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_BLOG_POPULAR, blog);
        });
    }
};

//--- Slider ---//
var receiveSlider = function receiveSlider(store) {
    if (_.isEmpty(store.state.slider.items)) {
        __WEBPACK_IMPORTED_MODULE_5__store_api_slider__["a" /* default */].getSlider(function (slider) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SLIDER, slider);
        });
    }
};

//--- Customers ---//
var receiveCustomers = function receiveCustomers(store) {
    if (_.isEmpty(store.state.customers.items)) {
        __WEBPACK_IMPORTED_MODULE_3__store_api_customers__["a" /* default */].getCustomers(function (customers) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_CUSTOMERS, customers);
        });
    }
};

//--- Gallery ---//
var receiveGallery = function receiveGallery(store) {
    if (_.isEmpty(store.state.gallery.items)) {
        __WEBPACK_IMPORTED_MODULE_4__store_api_gallery__["a" /* default */].getGallery(function (gallery) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_GALLERY, gallery);
        });
    }
};

var receiveInstagram = function receiveInstagram(store) {
    if (_.isEmpty(store.state.gallery.instagram)) {
        __WEBPACK_IMPORTED_MODULE_4__store_api_gallery__["a" /* default */].getInstagram(function (gallery) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_INSTAGRAM, gallery);
        });
    }
};

//--- Services ---// 
var receiveServicesHome = function receiveServicesHome(store) {
    if (_.isEmpty(store.state.services.home)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesHome(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_HOME, services);
        });
    }
};

var receiveServicesAccordion = function receiveServicesAccordion(store) {
    if (_.isEmpty(store.state.services.accordion)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesAccordion(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_ACCORDION, services);
        });
    }
};

var receiveServicesList = function receiveServicesList(store) {
    if (_.isEmpty(store.state.services.list)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesList(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_LIST, services);
        });
    }
};

var receiveServicesPanels = function receiveServicesPanels(store) {
    if (_.isEmpty(store.state.services.panels)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesPanels(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_PANELS, services);
        });
    }
};

var receiveServicesTabs = function receiveServicesTabs(store) {
    if (_.isEmpty(store.state.services.tabs)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesTabs(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_TABS, services);
        });
    }
};

var receiveServicesPurchase = function receiveServicesPurchase(store) {
    if (_.isEmpty(store.state.services.purchase)) {
        __WEBPACK_IMPORTED_MODULE_6__store_api_services__["a" /* default */].getServicesPurchase(function (services) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SERVICES_PURCHASE, services);
        });
    }
};

//--- Team ---// 
var receiveTeamInfo = function receiveTeamInfo(store) {
    if (_.isEmpty(store.state.team.info)) {
        __WEBPACK_IMPORTED_MODULE_7__store_api_team__["a" /* default */].getInfo(function (info) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_TEAM_INFO, info);
        });
    }
};

var receiveTeamMembers = function receiveTeamMembers(store) {
    if (_.isEmpty(store.state.team.members)) {
        __WEBPACK_IMPORTED_MODULE_7__store_api_team__["a" /* default */].getMembers(function (members) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_TEAM_MEMBERS, members);
        });
    }
};

var receiveTeamSummary = function receiveTeamSummary(store) {
    if (_.isEmpty(store.state.team.summary)) {
        __WEBPACK_IMPORTED_MODULE_7__store_api_team__["a" /* default */].getSummary(function (summary) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_TEAM_SUMMARY, summary);
        });
    }
};

//--- Testimonials ---//
var receiveTestimonials = function receiveTestimonials(store) {
    if (_.isEmpty(store.state.testimonials.items)) {
        __WEBPACK_IMPORTED_MODULE_8__store_api_testimonials__["a" /* default */].getTestimonials(function (testimonials) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_TESTIMONIALS, testimonials);
        });
    }
};

//--- Socials ---//
var receiveTwitter = function receiveTwitter(store) {
    if (_.isEmpty(store.state.socials.twitter)) {
        __WEBPACK_IMPORTED_MODULE_9__store_api_socials__["a" /* default */].getTwitter(function (twitter) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_TWITTER, twitter);
        });
    }
};

var receiveMySocials = function receiveMySocials(store) {
    if (_.isEmpty(store.state.socials.my)) {
        __WEBPACK_IMPORTED_MODULE_9__store_api_socials__["a" /* default */].getMySocials(function (my_socials) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_MY_SOCIALS, my_socials);
        });
    }
};

var receiveShareSocials = function receiveShareSocials(store) {
    if (_.isEmpty(store.state.socials.share)) {
        __WEBPACK_IMPORTED_MODULE_9__store_api_socials__["a" /* default */].getShareSocials(function (share_socials) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_SHARE_SOCIALS, share_socials);
        });
    }
};

//--- Faq ---//
var receiveFaq = function receiveFaq(store) {
    if (_.isEmpty(store.state.faq.items)) {
        __WEBPACK_IMPORTED_MODULE_10__store_api_faq__["a" /* default */].getFaq(function (faq) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_FAQ, faq);
        });
    }
};

//--- Welcome ---//
var receiveWelcome = function receiveWelcome(store) {
    if (_.isEmpty(store.state.welcome.items)) {
        __WEBPACK_IMPORTED_MODULE_11__store_api_welcome__["a" /* default */].getWelcome(function (welcome) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_WELCOME, welcome);
        });
    }
};

//--- Pricing ---//
var receivePricing = function receivePricing(store) {
    if (_.isEmpty(store.state.pricing)) {
        __WEBPACK_IMPORTED_MODULE_12__store_api_pricing__["a" /* default */].getPricing(function (pricing) {
            store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_PRICING, pricing);
        });
    }
};

//--- Portfolio ---//
var receivePortfolioItems = function receivePortfolioItems(store, params) {
    //params = { id: 1, nCol: 1 },
    __WEBPACK_IMPORTED_MODULE_13__store_api_portfolio__["a" /* default */].getPortfolioItems(function (portfolio) {
        store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_PORTFOLIO_ITEMS, portfolio);
    }, params);
};

var receivePortfolioItem = function receivePortfolioItem(store, id) {
    __WEBPACK_IMPORTED_MODULE_13__store_api_portfolio__["a" /* default */].getPortfolioItem(function (portfolio) {
        store.commit(__WEBPACK_IMPORTED_MODULE_0__store_mutation_types__["default"].RECEIVE_PORTFOLIO_ITEM, portfolio);
    }, id);
};

/* harmony default export */ __webpack_exports__["default"] = {
    //--- System --//
    receiveError: receiveError,
    delayPage: delayPage,
    receiveConfig: receiveConfig,
    iniSlider: iniSlider,
    iniBootstrapValidation: iniBootstrapValidation,
    //--- About ---// 
    receivePersonalData: receivePersonalData,
    receiveBusinessData: receiveBusinessData,
    receiveSubscribeData: receiveSubscribeData,
    receiveWidgetsData: receiveWidgetsData,
    //--- Blog ---//
    receiveBlogPosts: receiveBlogPosts,
    receiveBlogPost: receiveBlogPost,
    receiveBlogCategories: receiveBlogCategories,
    receiveBlogPopular: receiveBlogPopular,
    //--- Slider ---//
    receiveSlider: receiveSlider,
    //--- Customers ---//
    receiveCustomers: receiveCustomers,
    //--- Gallery ---//
    receiveGallery: receiveGallery,
    receiveInstagram: receiveInstagram,
    //--- Services ---//
    receiveServicesHome: receiveServicesHome,
    receiveServicesAccordion: receiveServicesAccordion,
    receiveServicesList: receiveServicesList,
    receiveServicesPanels: receiveServicesPanels,
    receiveServicesTabs: receiveServicesTabs,
    receiveServicesPurchase: receiveServicesPurchase,
    //--- Team ---// 
    receiveTeamInfo: receiveTeamInfo,
    receiveTeamMembers: receiveTeamMembers,
    receiveTeamSummary: receiveTeamSummary,
    //--- Testimonials ---//
    receiveTestimonials: receiveTestimonials,
    //--- Socials ---//
    receiveTwitter: receiveTwitter,
    receiveMySocials: receiveMySocials,
    receiveShareSocials: receiveShareSocials,
    //--- Faq ---//
    receiveFaq: receiveFaq,
    //--- Welcome ---//
    receiveWelcome: receiveWelcome,
    //--- Pricing ---//
    receivePricing: receivePricing,
    //--- Portfolio ---//
    receivePortfolioItems: receivePortfolioItems,
    receivePortfolioItem: receivePortfolioItem
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//--- System ---//

var getSystem = function getSystem(state) {
    return state.system;
};

var getShowPage = function getShowPage(state) {
    return state.system.showPage;
};

var getConfig = function getConfig(state) {
    return state.system.config;
};

//--- About ---//
var getAbout = function getAbout(state) {
    return state.about;
};

//--- Blog ---//
var getBlog = function getBlog(state) {
    return state.blog;
};

//--- Slider ---//
var getSlider = function getSlider(state) {
    return state.slider;
};

//--- Customers ---//
var getCustomers = function getCustomers(state) {
    return state.customers.items;
};

//--- Gallery ---//
var getGallery = function getGallery(state) {
    return state.gallery;
};

//--- Services ---//
var getServices = function getServices(state) {
    return state.services;
};

//--- Team ---//
var getTeam = function getTeam(state) {
    return state.team;
};

//--- Testimonials ---//
var getTestimonials = function getTestimonials(state) {
    return state.testimonials;
};

//--- Welcome --//
var getWelcome = function getWelcome(state) {
    return state.welcome;
};

//--- Socials ---//
var getSocials = function getSocials(state) {
    return state.socials;
};

//--- Faq --//
var getFaq = function getFaq(state) {
    return state.faq;
};

//--- Pricing --//
var getPricing = function getPricing(state) {
    return state.pricing;
};

//--- Portfolio ---//
var getPortfolio = function getPortfolio(state) {
    return state.portfolio;
};

/* harmony default export */ __webpack_exports__["default"] = {
    //--- System ---//
    getSystem: getSystem,
    getShowPage: getShowPage,
    getConfig: getConfig,
    //--- About ---//
    getAbout: getAbout,
    //--- Blog ---//
    getBlog: getBlog,
    //--- Slider ---//
    getSlider: getSlider,
    //--- Customers ---//
    getCustomers: getCustomers,
    //--- Gallery ---//
    getGallery: getGallery,
    //--- Services ---//
    getServices: getServices,
    //--- Team ---//
    getTeam: getTeam,
    //--- Testimonials ---//
    getTestimonials: getTestimonials,
    //--- Welcome --//
    getWelcome: getWelcome,
    //--- Socials ---//
    getSocials: getSocials,
    //--- Faq --//
    getFaq: getFaq,
    //--- Pricing --//
    getPricing: getPricing,
    //--- Portfolio ---//
    getPortfolio: getPortfolio
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = {
    //--- SYSTEM --//
    SET_ERROR: 'SET_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    DELAY_PAGE: 'DELAY_PAGE',
    RECEIVE_CONFIG: 'RECEIVE_CONFIG',
    //--- ABOUT ---//
    RECEIVE_PERSONAL_DATA: 'RECEIVE_PERSONAL_DATA',
    RECEIVE_BUSINESS_DATA: 'RECEIVE_BUSINESS_DATA',
    RECEIVE_SUBSCRIBE_DATA: 'RECEIVE_SUBSCRIBE_DATA',
    RECEIVE_WIDGETS_DATA: 'RECEIVE_WIDGETS_DATA',
    //--- BLOG ---//
    RECEIVE_BLOG_POSTS: 'RECEIVE_BLOG_POSTS',
    RECEIVE_BLOG_POST: 'RECEIVE_BLOG_POST',
    RECEIVE_BLOG_CATEGORIES: 'RECEIVE_BLOG_CATEGORIES',
    RECEIVE_BLOG_POPULAR: 'RECEIVE_BLOG_POPULAR',
    //--- SLIDER ---//
    RECEIVE_SLIDER: 'RECEIVE_SLIDER',
    //--- CUSTOMERS ---//
    RECEIVE_CUSTOMERS: 'RECEIVE_CUSTOMERS',
    //--- GALLERY ---//
    RECEIVE_GALLERY: 'RECEIVE_GALLERY',
    RECEIVE_INSTAGRAM: 'RECEIVE_INSTAGRAM',
    //--- SERVICES ---//
    RECEIVE_SERVICES_HOME: 'RECEIVE_SERVICES_HOME',
    RECEIVE_SERVICES_ACCORDION: 'RECEIVE_SERVICES_ACCORDION',
    RECEIVE_SERVICES_LIST: 'RECEIVE_SERVICES_LIST',
    RECEIVE_SERVICES_PANELS: 'RECEIVE_SERVICES_PANELS',
    RECEIVE_SERVICES_TABS: 'RECEIVE_SERVICES_TABS',
    RECEIVE_SERVICES_PURCHASE: 'RECEIVE_SERVICES_PURCHASE',
    //--- TEAM ---//
    RECEIVE_TEAM_INFO: 'RECEIVE_TEAM_INFO',
    RECEIVE_TEAM_MEMBERS: 'RECEIVE_TEAM_MEMBERS',
    RECEIVE_TEAM_SUMMARY: 'RECEIVE_TEAM_SUMMARY',
    //--- TESTIMONIALS ---//
    RECEIVE_TESTIMONIALS: 'RECEIVE_TESTIMONIALS',
    //--- SOCIALS ---//
    RECEIVE_MY_SOCIALS: 'RECEIVE_MY_SOCIALS',
    RECEIVE_SHARE_SOCIALS: 'RECEIVE_SHARE_SOCIALS',
    RECEIVE_TWITTER: 'RECEIVE_TWITTER',
    //--- FAQ ---//
    RECEIVE_FAQ: 'RECEIVE_FAQ',
    //--- WELCOME ---//
    RECEIVE_WELCOME: 'RECEIVE_WELCOME',
    //--- PRICING ---//
    RECEIVE_PRICING: 'RECEIVE_PRICING',
    //--- PORTFOLIO ---//
    RECEIVE_PORTFOLIO_ITEMS: 'RECEIVE_PORTFOLIO_ITEMS',
    RECEIVE_PORTFOLIO_ITEM: 'RECEIVE_PORTFOLIO_ITEM'
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(239), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(21)
  , TAG = __webpack_require__(6)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9).document && document.documentElement;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(18)(function(){
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(67)
  , hide           = __webpack_require__(15)
  , has            = __webpack_require__(14)
  , Iterators      = __webpack_require__(24)
  , $iterCreate    = __webpack_require__(253)
  , setToStringTag = __webpack_require__(29)
  , getPrototypeOf = __webpack_require__(263)
  , ITERATOR       = __webpack_require__(6)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(260)
  , enumBugKeys = __webpack_require__(40)
  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(66)
  , hiddenKeys = __webpack_require__(40).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(14)
  , toIObject    = __webpack_require__(17)
  , arrayIndexOf = __webpack_require__(246)(false)
  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(25)
  , invoke             = __webpack_require__(249)
  , html               = __webpack_require__(60)
  , cel                = __webpack_require__(39)
  , global             = __webpack_require__(9)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(21)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(44)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(59)
  , ITERATOR  = __webpack_require__(6)('iterator')
  , Iterators = __webpack_require__(24);
module.exports = __webpack_require__(8).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(108)

/* template */
var __vue_template__ = __webpack_require__(394)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\about\\business.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] business.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(109)

/* template */
var __vue_template__ = __webpack_require__(353)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\about\\purchase.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] purchase.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(111)

/* template */
var __vue_template__ = __webpack_require__(357)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\home1-post-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] home1-post-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(112)

/* template */
var __vue_template__ = __webpack_require__(405)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\home2-post-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] home2-post-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(115)

/* template */
var __vue_template__ = __webpack_require__(349)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\blog\\post-content.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] post-content.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(118)

/* template */
var __vue_template__ = __webpack_require__(410)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\contact\\form.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] form.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(119)

/* template */
var __vue_template__ = __webpack_require__(389)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\contact\\info.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] info.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(382)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\contact\\map.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] map.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(380)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\errors\\404.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] 404.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(121)

/* template */
var __vue_template__ = __webpack_require__(396)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\faq\\accordion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] accordion.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(373)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\col1-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col1-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(367)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\col2-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col2-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(359)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\col3-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col3-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(144)

/* template */
var __vue_template__ = __webpack_require__(354)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\col4-list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col4-list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(145)

/* template */
var __vue_template__ = __webpack_require__(355)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\item-content.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] item-content.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(343)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\portfolio\\related-projects.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] related-projects.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(149)

/* template */
var __vue_template__ = __webpack_require__(383)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\services\\accordion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] accordion.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(376)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\services\\list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(151)

/* template */
var __vue_template__ = __webpack_require__(360)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\services\\panels.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] panels.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(152)

/* template */
var __vue_template__ = __webpack_require__(365)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\services\\tabs.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__App_vue__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__router_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__store_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });













// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins


// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_4__router_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_5__store_js__["a" /* default */],
  _nuxt: {
    defaultTransition: defaultTransition,
    transitions: [defaultTransition],
    setTransitions: function setTransitions(transitions) {
      if (!Array.isArray(transitions)) {
        transitions = [transitions];
      }
      transitions = transitions.map(function (transition) {
        if (!transition) {
          transition = defaultTransition;
        } else if (typeof transition === 'string') {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
        } else {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
        }
        return transition;
      });
      this.$options._nuxt.transitions = transitions;
      return transitions;
    },

    err: null,
    error: function error(err) {
      err = err || null;
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_9__App_vue___default.a);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ __webpack_exports__["b"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ __webpack_exports__["c"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["d"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ __webpack_exports__["a"] = urlJoin;
/* unused harmony export compile */






function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,
    store: context.store,
    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/',
    env: { "baseUrl": "http://localhost:3000" }
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a)) {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ __webpack_exports__["a"] = {
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _bba677bc =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\index.vue');
} : __webpack_require__(306);

var _125d7266 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\faq.vue');
} : __webpack_require__(304);

var _fb162d46 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\about.vue');
} : __webpack_require__(297);

var _341a3b50 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\error.vue');
} : __webpack_require__(303);

var _89464b20 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\contact.vue');
} : __webpack_require__(301);

var _15cc1316 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\pricing.vue');
} : __webpack_require__(312);

var _bf1c78a8 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar.vue');
} : __webpack_require__(314);

var _fd8d5154 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\index.vue');
} : __webpack_require__(323);

var _3bc57acc =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\faq.vue');
} : __webpack_require__(321);

var _61817c91 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\about.vue');
} : __webpack_require__(315);

var _099170a4 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\contact.vue');
} : __webpack_require__(319);

var _6400a94a =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\pricing.vue');
} : __webpack_require__(329);

var _14da10ec =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\services.vue');
} : __webpack_require__(330);

var _afd4b822 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-post.vue');
} : __webpack_require__(318);

var _225b2bf7 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\error-404.vue');
} : __webpack_require__(320);

var _6186def3 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-home1.vue');
} : __webpack_require__(316);

var _6194f674 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-home2.vue');
} : __webpack_require__(317);

var _c3822b98 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\full-width.vue');
} : __webpack_require__(322);

var _114d0970 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-1.vue');
} : __webpack_require__(324);

var _115b20f1 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-2.vue');
} : __webpack_require__(325);

var _11693872 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-3.vue');
} : __webpack_require__(326);

var _11774ff3 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-4.vue');
} : __webpack_require__(327);

var _6688efa4 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-item.vue');
} : __webpack_require__(328);

var _7d34c73e =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\services.vue');
} : __webpack_require__(313);

var _5b7bc522 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\post.vue');
} : __webpack_require__(300);

var _e2195a7a =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\error-404.vue');
} : __webpack_require__(302);

var _1af2fba1 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\home2.vue');
} : __webpack_require__(299);

var _1ae4e420 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\home1.vue');
} : __webpack_require__(298);

var _76a8c630 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\full-width.vue');
} : __webpack_require__(305);

var _5641aa6c =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col2.vue');
} : __webpack_require__(308);

var _56257b6a =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col3.vue');
} : __webpack_require__(309);

var _56094c68 =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col4.vue');
} : __webpack_require__(310);

var _43f2deab =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\item.vue');
} : __webpack_require__(311);

var _565dd96e =  false ? function () {
	return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col1.vue');
} : __webpack_require__(307);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
	if (savedPosition) {
		// savedPosition is only available for popstate navigations.
		return savedPosition;
	} else {
		var position = {};
		// if no children detected
		if (to.matched.length < 2) {
			position = { x: 0, y: 0 };
		} else if (to.matched.some(function (r) {
			return r.components.default.scrollToTop || r.components.default.options && r.components.default.options.scrollToTop;
		})) {
			position = { x: 0, y: 0 };
		}
		// if link has anchor,  scroll to anchor by returning the selector
		if (to.hash) {
			position = { selector: to.hash };
		}
		return position;
	}
};

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
	mode: 'history',
	base: '/',
	linkActiveClass: 'nuxt-link-active',
	scrollBehavior: scrollBehavior,
	routes: [{
		path: "/",
		component: _bba677bc,
		name: "index"
	}, {
		path: "/faq",
		component: _125d7266,
		name: "faq"
	}, {
		path: "/about",
		component: _fb162d46,
		name: "about"
	}, {
		path: "/error",
		component: _341a3b50,
		name: "error"
	}, {
		path: "/contact",
		component: _89464b20,
		name: "contact"
	}, {
		path: "/pricing",
		component: _15cc1316,
		name: "pricing"
	}, {
		path: "/sidebar",
		component: _bf1c78a8,
		children: [{
			path: "",
			component: _fd8d5154,
			name: "sidebar"
		}, {
			path: "faq",
			component: _3bc57acc,
			name: "sidebar-faq"
		}, {
			path: "about",
			component: _61817c91,
			name: "sidebar-about"
		}, {
			path: "contact",
			component: _099170a4,
			name: "sidebar-contact"
		}, {
			path: "pricing",
			component: _6400a94a,
			name: "sidebar-pricing"
		}, {
			path: "services",
			component: _14da10ec,
			name: "sidebar-services"
		}, {
			path: "blog-post",
			component: _afd4b822,
			name: "sidebar-blog-post"
		}, {
			path: "error-404",
			component: _225b2bf7,
			name: "sidebar-error-404"
		}, {
			path: "blog-home1",
			component: _6186def3,
			name: "sidebar-blog-home1"
		}, {
			path: "blog-home2",
			component: _6194f674,
			name: "sidebar-blog-home2"
		}, {
			path: "full-width",
			component: _c3822b98,
			name: "sidebar-full-width"
		}, {
			path: "portfolio-1",
			component: _114d0970,
			name: "sidebar-portfolio-1"
		}, {
			path: "portfolio-2",
			component: _115b20f1,
			name: "sidebar-portfolio-2"
		}, {
			path: "portfolio-3",
			component: _11693872,
			name: "sidebar-portfolio-3"
		}, {
			path: "portfolio-4",
			component: _11774ff3,
			name: "sidebar-portfolio-4"
		}, {
			path: "portfolio-item",
			component: _6688efa4,
			name: "sidebar-portfolio-item"
		}]
	}, {
		path: "/services",
		component: _7d34c73e,
		name: "services"
	}, {
		path: "/blog/post",
		component: _5b7bc522,
		name: "blog-post"
	}, {
		path: "/error-404",
		component: _e2195a7a,
		name: "error-404"
	}, {
		path: "/blog/home2",
		component: _1af2fba1,
		name: "blog-home2"
	}, {
		path: "/blog/home1",
		component: _1ae4e420,
		name: "blog-home1"
	}, {
		path: "/full-width",
		component: _76a8c630,
		name: "full-width"
	}, {
		path: "/portfolio/col2",
		component: _5641aa6c,
		name: "portfolio-col2"
	}, {
		path: "/portfolio/col3",
		component: _56257b6a,
		name: "portfolio-col3"
	}, {
		path: "/portfolio/col4",
		component: _56094c68,
		name: "portfolio-col4"
	}, {
		path: "/portfolio/item",
		component: _43f2deab,
		name: "portfolio-item"
	}, {
		path: "/portfolio/col1",
		component: _565dd96e,
		name: "portfolio-col1"
	}]
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex___default.a);

var files = void 0;
var filenames = [];

try {
  files = __webpack_require__(417);
  filenames = files.keys();
} catch (e) {
  console.warn('Nuxt.js store:', e.message);
}

function getModule(filename) {
  var file = files(filename);
  return file.default ? file.default : file;
}

var store = void 0;
var storeData = {};

// Check if store/index.js returns a vuex store
if (filenames.indexOf('./index.js') !== -1) {
  var mainModule = getModule('./index.js');
  if (mainModule.commit) {
    store = mainModule;
  } else {
    storeData = mainModule;
  }
}

// Generate the store if there is no store yet
if (store == null) {
  storeData.modules = storeData.modules || {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var filename = _step.value;

      var name = filename.replace(/^\.\//, '').replace(/\.js$/, '');
      if (name === 'index') continue;
      storeData.modules[name] = getModule(filename);
      storeData.modules[name].namespaced = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  store = new __WEBPACK_IMPORTED_MODULE_2_vuex___default.a.Store(storeData);
}

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    env: 'development',
    api: {
        base_url: 'http://localhost:8000/api',
        defaultRequest: {
            headers: {
                'X-Requested-With': 'rest.js',
                'Content-Type': 'application/json'
            }
        }
    }
};

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env_development__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_env_production__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_env_testing__ = __webpack_require__(102);





var app_env = __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */].env ? __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */].env : 'development';

var config = {
    development: __WEBPACK_IMPORTED_MODULE_1__config_env_development__["a" /* default */],
    production: __WEBPACK_IMPORTED_MODULE_2__config_env_production__["a" /* default */],
    testing: __WEBPACK_IMPORTED_MODULE_3__config_env_testing__["a" /* default */]
};

var envResult = _.merge(config[app_env], __WEBPACK_IMPORTED_MODULE_0__env__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = envResult;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    env: 'production',
    api: {
        base_url: 'http://localhost:8000/api',
        defaultRequest: {
            headers: {
                'X-Requested-With': 'rest.js',
                'Content-Type': 'application/json'
            }
        }
    }
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
	env: 'testing',
	api: {
		base_url: 'http://localhost:8000/api',
		defaultRequest: {
			headers: {
				'X-Requested-With': 'rest.js',
				'Content-Type': 'application/json'
			}
		}
	}
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Global values for application" 
/* harmony default export */ __webpack_exports__["a"] = {
    debug: false
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The values in the configuration files "/config"
// will be overwritten by the values of "env.js" file
/* harmony default export */ __webpack_exports__["a"] = {
    env: 'testing', // development, production, testing
    debug: true,
    personal_data: {
        copyright: '© 2016 OSAHAN - All Rights Reserved',
        designed_with: 'Osahan Studio',
        designed_with_url: 'https://www.facebook.com/iamgurdeeposahan',
        contact: {
            location: '795 Folsom Ave, Suite 600',
            phone: '+01 234 567 890',
            fax: '+01 234 567 890',
            email: 'company@company.com',
            website: 'www.yourdomain.com'
        },
        twitter: { url: '#', tag: '@Osahan' },
        socials: {
            facebook: { url: '#', icon: 'fa-facebook' },
            twitter: { url: '#', icon: 'fa-twitter' },
            google: { url: '#', icon: 'fa-google-plus' },
            linkdin: { url: '#', icon: 'fa-linkedin' },
            flickr: { url: '#', icon: 'fa-flickr' },
            skype: { url: '#', icon: 'fa-skype' }
        },
        blog: {
            url: '/blog/home1',
            total: 3 // Count of posts on page
        },
        portfolio: {
            url: '/portfolio/col-1',
            total: 6 }
    }
};

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//

var layouts = {

  "_default":  false ? function () {
    return System.import('C:\\OpenServer\\domains\\vue-nuxt-static\\layouts\\default.vue');
  } : __webpack_require__(295)

};

/* harmony default export */ __webpack_exports__["default"] = {
  head: { "title": "Vue Nuxt Static", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "content": "Vue Nuxt static project" }], "script": [{ "src": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" }, { "src": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }, { "rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" }, { "rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" }, { "rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" }, { "rel": "stylesheet", "href": "/css/style.css" }] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout);
      }
      this.layout = layouts[_layout];
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.layout);
    },
    loadLayout: function loadLayout(_layout) {
      var _this = this;

      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        _this.layout = layouts[_layout];
        return _this.layout;
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  }
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#3B8070',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
};

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_OpenServer_domains_vue_nuxt_static_layouts_error_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_OpenServer_domains_vue_nuxt_static_layouts_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_C_OpenServer_domains_vue_nuxt_static_layouts_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__);
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2_C_OpenServer_domains_vue_nuxt_static_layouts_error_vue___default.a,
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default.a
  }
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receiveBusinessData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        about: 'getAbout'
    })
};

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receiveServicesPurchase');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogCategories');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPosts', 1);
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPosts', 1);
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPopular');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    mounted: function mounted() {
        // Set focus
        $('#blog-search').focus();
    }
};

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- About ---//
            this.$store.dispatch('receiveWidgetsData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        about: 'getAbout'
    })
};

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            urlForm: "bin/contact_me.php"
        };
    },
    mounted: function mounted() {
        try {
            var urlForm = this.urlForm;
            this.iniBootstrapValidation({
                id: "#contactForm",
                urlForm: this.urlForm
            });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['iniBootstrapValidation']))
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- About ---//
            this.$store.dispatch('receivePersonalData');
            this.$store.dispatch('receiveSubscribeData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        about: 'getAbout'
    })
};

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            errMessage: 'We\'re sorry, but the page you were looking for doesn\'t exist.'
        };
    }
};

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //            const e = new Error('Faq Error');
            //            e.name = 'FaqError';
            //            e.statusCode = 401;
            //            throw e;

            //--- Faq ---//
            this.$store.dispatch('receiveFaq');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        faq: 'getFaq'
    })
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPosts', 1);
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        blog: 'getBlog'
    })
};

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Customers ---//
            this.$store.dispatch('receiveCustomers');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    mounted: function mounted() {
        try {
            this.iniSlider({
                id: "#customers",
                opts: {
                    lazyLoad: true,
                    pagination: true,
                    autoPlay: 2000,
                    stopOnHover: true
                }
            });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])({
        customers: 'getCustomers'
    }),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['iniSlider']))
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Gallery ---//
            this.$store.dispatch('receiveGallery');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        gallery: 'getGallery'
    })
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesHome');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Slider ---//
            this.$store.dispatch('receiveSlider');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    mounted: function mounted() {
        try {
            this.iniSlider({
                id: "#osahan-slider",
                opts: {
                    slideSpeed: 300,
                    autoPlay: true,
                    pagination: true,
                    singleItem: true
                }
            });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])({
        slider: 'getSlider'
    }),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['iniSlider']))
};

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Team ---//
            this.$store.dispatch('receiveTeamInfo');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        team: 'getTeam'
    })
};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Team ---//
            this.$store.dispatch('receiveTeamMembers');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        team: 'getTeam'
    })
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Team ---//
            this.$store.dispatch('receiveTeamSummary');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        team: 'getTeam'
    })
};

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_team_info_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_team_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_team_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_team_members_vue__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_team_members_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_home_team_members_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_team_summary_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_team_summary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_team_summary_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        TeamInfo: __WEBPACK_IMPORTED_MODULE_1__components_home_team_info_vue___default.a,
        TeamMembers: __WEBPACK_IMPORTED_MODULE_2__components_home_team_members_vue___default.a,
        TeamSummary: __WEBPACK_IMPORTED_MODULE_3__components_home_team_summary_vue___default.a
    }
};

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Testimonials ---//
            this.$store.dispatch('receiveTestimonials');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    mounted: function mounted() {
        try {
            this.iniSlider({
                id: "#testimonials",
                opts: {
                    slideSpeed: 300,
                    autoPlay: true,
                    navigation: false,
                    pagination: true,
                    singleItem: true
                }
            });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])({
        testimonials: 'getTestimonials'
    }),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['iniSlider']))
};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Welcome ---//
            this.$store.dispatch('receiveWelcome');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        welcome: 'getWelcome'
    })
};

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receivePersonalData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        about: 'getAbout'
    })
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Personal data ---//
            this.$store.dispatch('receivePersonalData');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        about: 'getAbout'
    }),
    data: function data() {
        return {
            footer_nav: [{ url: '/about', title: 'About Us' }, { url: '#', title: 'Sitemap' }, { url: '#', title: 'Privacy Policy' }, { url: '/contact', title: 'Contact' }]
        };
    }
};

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_footer_copyright_vue__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_footer_copyright_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_footer_copyright_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_footer_contact_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_footer_contact_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_footer_contact_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_social_vue__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_social_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_social_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_subscribe_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_subscribe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_layout_footer_subscribe_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout_footer_twitter_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout_footer_twitter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_layout_footer_twitter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout_footer_instagram_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout_footer_instagram_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_layout_footer_instagram_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    FooterCopyright: __WEBPACK_IMPORTED_MODULE_0__components_layout_footer_copyright_vue___default.a,
    FooterContact: __WEBPACK_IMPORTED_MODULE_1__components_layout_footer_contact_vue___default.a,
    FooterSocial: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_social_vue___default.a,
    FooterSubscribe: __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_subscribe_vue___default.a,
    FooterTwitter: __WEBPACK_IMPORTED_MODULE_4__components_layout_footer_twitter_vue___default.a,
    FooterInstagram: __WEBPACK_IMPORTED_MODULE_5__components_layout_footer_instagram_vue___default.a
  }
};

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Gallery instagram ---//
            this.$store.dispatch('receiveInstagram');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        gallery: 'getGallery'
    })
};

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Socials ---//
            this.$store.dispatch('receiveMySocials');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        socials: 'getSocials'
    })
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Twitter ---//
            this.$store.dispatch('receiveTwitter');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        socials: 'getSocials'
    })
};

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: ['title', 'description']
};

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['groupMenu']
};

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioSocial: __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue___default.a,
        PortfolioPager: __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default.a
    },
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 1 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioPager: __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default.a
    },
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 2 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioPager: __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default.a
    },
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 3 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioPager: __WEBPACK_IMPORTED_MODULE_1__components_portfolio_pager_vue___default.a
    },
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 4 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItem', 1);
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    })
};

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 0 });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    mounted: function mounted() {
        try {
            this.iniSlider({
                id: "#customers",
                opts: {
                    items: 4,
                    lazyLoad: true,
                    pagination: true,
                    autoPlay: 2000,
                    stopOnHover: true
                }
            });
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])({
        portfolio: 'getPortfolio'
    }),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['iniSlider']))
};

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Socials ---//
            this.$store.dispatch('receiveShareSocials');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        socials: 'getSocials'
    })
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesAccordion');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesList');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesPanels');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    created: function created() {
        try {
            //--- Services ---//
            this.$store.dispatch('receiveServicesTabs');
        } catch (error) {
            this.$store.commit('SET_ERROR', error);
            this.$router.replace('/error');
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        services: 'getServices'
    })
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    components: {},
    created: function created() {
        //--- Receive Config ---//
        this.receiveConfig();
    },
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['receiveConfig']))
};

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a
    },
    props: ['error'],
    data: function data() {
        return {
            title: '',
            description: ''
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    },

    created: function created() {
        this.title = this.error.statusCode ? this.error.statusCode : this.error.name;
        this.description = this.error.message;
        var isServer = this.$isServer;
        if (isServer) {
            var message = 'ErrorCode: ' + ((this.error.statusCode ? '(' + this.error.statusCode + ') ' : '') + ' ErrorMessage: ' + this.error.message);
            console.log(message);
        }
    }
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_business_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_business_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_about_business_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_purchase_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_purchase_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_about_purchase_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_team_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_team_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_home_team_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
    PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
    PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
    AboutBusiness: __WEBPACK_IMPORTED_MODULE_3__components_about_business_vue___default.a,
    AboutPurchase: __WEBPACK_IMPORTED_MODULE_4__components_about_purchase_vue___default.a,
    AboutTeam: __WEBPACK_IMPORTED_MODULE_5__components_home_team_vue___default.a,
    AboutCustomers: __WEBPACK_IMPORTED_MODULE_6__components_home_customers_vue___default.a
  },
  data: function data() {
    return {
      title: 'About',
      description: 'Lorem ipsum dolor sit ame'
    };
  },
  head: function head() {
    return {
      title: this.title,
      meta: [{ hid: 'description', name: 'description', content: this.description }],
      script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
      link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
    };
  }
};

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_home1_post_list_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_home1_post_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_home1_post_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_search_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_blog_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blog_categories_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blog_categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_blog_categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_side_widget_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_side_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_blog_side_widget_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        BlogPostList: __WEBPACK_IMPORTED_MODULE_3__components_blog_home1_post_list_vue___default.a,
        BlogPager: __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue___default.a,
        BlogSearch: __WEBPACK_IMPORTED_MODULE_5__components_blog_search_vue___default.a,
        BlogCategories: __WEBPACK_IMPORTED_MODULE_6__components_blog_categories_vue___default.a,
        BlogPopular: __WEBPACK_IMPORTED_MODULE_7__components_blog_popular_vue___default.a,
        BlogSideWidget: __WEBPACK_IMPORTED_MODULE_8__components_blog_side_widget_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Home One',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_home2_post_list_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_home2_post_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_home2_post_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        BlogPostList: __WEBPACK_IMPORTED_MODULE_3__components_blog_home2_post_list_vue___default.a,
        BlogPager: __WEBPACK_IMPORTED_MODULE_4__components_blog_pager_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Home Two',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_post_content_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_post_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_post_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_search_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_blog_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_categories_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_blog_categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_side_widget_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_side_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_blog_side_widget_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        BlogPostContent: __WEBPACK_IMPORTED_MODULE_3__components_blog_post_content_vue___default.a,
        BlogSearch: __WEBPACK_IMPORTED_MODULE_4__components_blog_search_vue___default.a,
        BlogCategories: __WEBPACK_IMPORTED_MODULE_5__components_blog_categories_vue___default.a,
        BlogPopular: __WEBPACK_IMPORTED_MODULE_6__components_blog_popular_vue___default.a,
        BlogSideWidget: __WEBPACK_IMPORTED_MODULE_7__components_blog_side_widget_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Post',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    },
    fetch: function fetch(_ref) {
        var store = _ref.store,
            error = _ref.error;

        try {
            store.dispatch('receiveBlogPost', 1);
        } catch (e) {
            error(e);
        }
    }
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_form_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contact_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_contact_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contact_info_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_contact_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_contact_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contact_map_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contact_map_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_contact_map_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        ContactForm: __WEBPACK_IMPORTED_MODULE_3__components_contact_form_vue___default.a,
        ContactInfo: __WEBPACK_IMPORTED_MODULE_4__components_contact_info_vue___default.a,
        ContactMap: __WEBPACK_IMPORTED_MODULE_5__components_contact_map_vue___default.a
    },
    data: function data() {
        return {
            title: 'Contact',
            description: 'Our contact information'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/jquery-plugins/jqBootstrapValidation.js' }]
        };
    }
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_errors_404_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_errors_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_errors_404_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default.a,
        Error404: __WEBPACK_IMPORTED_MODULE_3__components_errors_404_vue___default.a
    },
    data: function data() {
        return {
            title: '404',
            description: 'This page doesn\'t exist'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default.a
    },
    data: function data() {
        return {
            title: '',
            description: ''
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    },

    created: function created() {
        if (this.system.error) {
            this.title = this.system.error.statusCode ? this.system.error.statusCode : this.system.error.name;
            this.description = this.system.error.message;
        } else {
            this.title = 'No Error';
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        system: 'getSystem'
    }),
    beforeDestroy: function beforeDestroy() {
        this.$store.commit('CLEAR_ERROR');
    }
};

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_faq_accordion_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_faq_accordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_faq_accordion_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        FaqBlogPopular: __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue___default.a,
        FaqAccordion: __WEBPACK_IMPORTED_MODULE_4__components_faq_accordion_vue___default.a
    },
    data: function data() {
        return {
            title: 'FAQ',
            description: 'A list of questions and answers'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a
    },
    data: function data() {
        return {
            title: 'Full Width Page',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_blog_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_blog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_blog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_gallery_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_gallery_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_home_gallery_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_service_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_service_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_home_service_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_slider_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_home_slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_team_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_team_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_home_team_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_testimonials_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_testimonials_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_home_testimonials_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_welcome_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_welcome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_home_welcome_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
    PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
    PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
    HomeBlog: __WEBPACK_IMPORTED_MODULE_3__components_home_blog_vue___default.a,
    HomeCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a,
    HomeGallery: __WEBPACK_IMPORTED_MODULE_5__components_home_gallery_vue___default.a,
    HomeService: __WEBPACK_IMPORTED_MODULE_6__components_home_service_vue___default.a,
    HomeSlider: __WEBPACK_IMPORTED_MODULE_7__components_home_slider_vue___default.a,
    HomeTeam: __WEBPACK_IMPORTED_MODULE_8__components_home_team_vue___default.a,
    HomeTestimonials: __WEBPACK_IMPORTED_MODULE_9__components_home_testimonials_vue___default.a,
    HomeWelcome: __WEBPACK_IMPORTED_MODULE_10__components_home_welcome_vue___default.a
  },
  data: function data() {
    return {
      title: 'VueNuxt',
      description: 'Universal Vue.js Applications'
    };
  },
  head: function head() {
    return {
      title: this.title,
      meta: [{ hid: 'description', name: 'description', content: this.description }],
      script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
      link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
    };
  }
};

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col1_list_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col1_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_portfolio_col1_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        PortfolioCol1List: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col1_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'One Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col2_list_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col2_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_portfolio_col2_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        PortfolioCol2List: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col2_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Two Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col3_list_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col3_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_portfolio_col3_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        PortfolioCol3List: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col3_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Three Column Portfolio', description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col4_list_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col4_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_portfolio_col4_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        PortfolioCol4List: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_col4_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Four Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_slider_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_portfolio_item_content_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_portfolio_item_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_portfolio_item_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_social_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_social_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_portfolio_social_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_portfolio_related_projects_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_portfolio_related_projects_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_portfolio_related_projects_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        PortfolioSlider: __WEBPACK_IMPORTED_MODULE_3__components_home_slider_vue___default.a,
        PortfolioItemContent: __WEBPACK_IMPORTED_MODULE_4__components_portfolio_item_content_vue___default.a,
        PortfolioSocial: __WEBPACK_IMPORTED_MODULE_5__components_portfolio_social_vue___default.a,
        PortfolioRelatedProjects: __WEBPACK_IMPORTED_MODULE_6__components_portfolio_related_projects_vue___default.a
    },
    data: function data() {
        return {
            title: 'Portfolio Item',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_layout_footer_index_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_2__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_3__components_layout_footer_index_vue___default.a
    },
    data: function data() {
        return {
            title: 'Pricing Table',
            description: 'Our pricing information'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    },
    fetch: function fetch(_ref) {
        var store = _ref.store,
            error = _ref.error;

        try {

            //                const e = new Error('Pricing Error');
            //                e.name = 'PricingError';
            //                e.statusCode = 402;
            //                throw e;

            store.dispatch('receivePricing');
        } catch (e) {
            error(e);
        }
    },

    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        pricing: 'getPricing'
    })
};

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_services_accordion_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_services_accordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_services_accordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_services_list_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_services_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_services_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_services_panels_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_services_panels_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_services_panels_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_services_tabs_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_services_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_services_tabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a,
        ServicesAccordion: __WEBPACK_IMPORTED_MODULE_3__components_services_accordion_vue___default.a,
        ServicesList: __WEBPACK_IMPORTED_MODULE_4__components_services_list_vue___default.a,
        ServicesPanels: __WEBPACK_IMPORTED_MODULE_5__components_services_panels_vue___default.a,
        ServicesTabs: __WEBPACK_IMPORTED_MODULE_6__components_services_tabs_vue___default.a,
        ServicesCustomers: __WEBPACK_IMPORTED_MODULE_7__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Services',
            description: 'We Are Professional'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }],
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    }
};

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PageNavigation: __WEBPACK_IMPORTED_MODULE_0__components_layout_header_navigation_vue___default.a,
        PageBreadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_layout_header_breadcrumbs_vue___default.a,
        PageFooter: __WEBPACK_IMPORTED_MODULE_2__components_layout_footer_index_vue___default.a
    },
    data: function data() {
        return {
            title: 'Sidebar',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            title: this.title,
            meta: [{ hid: 'description', name: 'description', content: this.description }]
        };
    }
};

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_about_business_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_about_business_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_about_business_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_purchase_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_purchase_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_about_purchase_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_team_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_team_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_home_team_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        AboutBusiness: __WEBPACK_IMPORTED_MODULE_0__components_about_business_vue___default.a,
        AboutPurchase: __WEBPACK_IMPORTED_MODULE_1__components_about_purchase_vue___default.a,
        AboutTeam: __WEBPACK_IMPORTED_MODULE_2__components_home_team_vue___default.a,
        AboutCustomers: __WEBPACK_IMPORTED_MODULE_3__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'About',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_home1_post_list_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_home1_post_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_blog_home1_post_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_blog_search_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_blog_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_blog_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_categories_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_side_widget_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_blog_side_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_blog_side_widget_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        BlogPostList: __WEBPACK_IMPORTED_MODULE_0__components_blog_home1_post_list_vue___default.a,
        BlogPager: __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue___default.a,
        BlogSearch: __WEBPACK_IMPORTED_MODULE_2__components_blog_search_vue___default.a,
        BlogCategories: __WEBPACK_IMPORTED_MODULE_3__components_blog_categories_vue___default.a,
        BlogPopular: __WEBPACK_IMPORTED_MODULE_4__components_blog_popular_vue___default.a,
        BlogSideWidget: __WEBPACK_IMPORTED_MODULE_5__components_blog_side_widget_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Home One',
            description: 'Lorem ipsum dolor sit ame'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_home2_post_list_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_home2_post_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_blog_home2_post_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        BlogPostList: __WEBPACK_IMPORTED_MODULE_0__components_blog_home2_post_list_vue___default.a,
        BlogPager: __WEBPACK_IMPORTED_MODULE_1__components_blog_pager_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Home Two',
            description: 'Lorem ipsum dolor sit ame'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_post_content_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_post_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_blog_post_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_search_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blog_search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_blog_search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_blog_categories_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_blog_categories_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_blog_categories_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_side_widget_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blog_side_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_blog_side_widget_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        BlogPostContent: __WEBPACK_IMPORTED_MODULE_0__components_blog_post_content_vue___default.a,
        BlogSearch: __WEBPACK_IMPORTED_MODULE_1__components_blog_search_vue___default.a,
        BlogCategories: __WEBPACK_IMPORTED_MODULE_2__components_blog_categories_vue___default.a,
        BlogPopular: __WEBPACK_IMPORTED_MODULE_3__components_blog_popular_vue___default.a,
        BlogSideWidget: __WEBPACK_IMPORTED_MODULE_4__components_blog_side_widget_vue___default.a
    },
    data: function data() {
        return {
            title: 'Blog Post',
            description: 'Lorem ipsum dolor sit ame'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
    fetch: function fetch(_ref) {
        var store = _ref.store,
            error = _ref.error;

        try {
            //--- Blog ---//
            store.dispatch('receiveBlogPost', 1);
        } catch (e) {
            error(e);
        }
    }
};

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_contact_form_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_contact_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_contact_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_info_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contact_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_contact_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_contact_map_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_contact_map_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_contact_map_vue__);
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        ContactForm: __WEBPACK_IMPORTED_MODULE_0__components_contact_form_vue___default.a,
        ContactInfo: __WEBPACK_IMPORTED_MODULE_1__components_contact_info_vue___default.a,
        ContactMap: __WEBPACK_IMPORTED_MODULE_2__components_contact_map_vue___default.a
    },
    data: function data() {
        return {
            title: 'Contact',
            description: 'Our contact information'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/jquery-plugins/jqBootstrapValidation.js' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_errors_404_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_errors_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_errors_404_vue__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Error404: __WEBPACK_IMPORTED_MODULE_0__components_errors_404_vue___default.a
    },
    data: function data() {
        return {
            title: '404',
            description: 'This page doesn\'t exist'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_popular_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blog_popular_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_blog_popular_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_faq_accordion_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_faq_accordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_faq_accordion_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        FaqBlogPopular: __WEBPACK_IMPORTED_MODULE_0__components_blog_popular_vue___default.a,
        FaqAccordion: __WEBPACK_IMPORTED_MODULE_1__components_faq_accordion_vue___default.a
    },
    data: function data() {
        return {
            title: 'FAQ',
            description: 'A list of questions and answers'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            title: 'Full Width Page',
            description: 'Lorem ipsum dolor sit ame'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            title: 'Sidebar Home',
            description: 'Lorem ipsum dolor sit ame'
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col1_list_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col1_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_portfolio_col1_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioCol1List: __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col1_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'One Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col2_list_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col2_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_portfolio_col2_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioCol2List: __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col2_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Two Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col3_list_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col3_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_portfolio_col3_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioCol3List: __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col3_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Three Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col4_list_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col4_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_portfolio_col4_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioCol4List: __WEBPACK_IMPORTED_MODULE_0__components_portfolio_col4_list_vue___default.a,
        PortfolioCustomers: __WEBPACK_IMPORTED_MODULE_1__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Four Column Portfolio',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_slider_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_home_slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_item_content_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_portfolio_item_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_portfolio_item_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_related_projects_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portfolio_related_projects_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_portfolio_related_projects_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        PortfolioSlider: __WEBPACK_IMPORTED_MODULE_0__components_home_slider_vue___default.a,
        PortfolioItemContent: __WEBPACK_IMPORTED_MODULE_1__components_portfolio_item_content_vue___default.a,
        PortfolioSocial: __WEBPACK_IMPORTED_MODULE_2__components_portfolio_social_vue___default.a,
        PortfolioRelatedProjects: __WEBPACK_IMPORTED_MODULE_3__components_portfolio_related_projects_vue___default.a
    },
    data: function data() {
        return {
            title: 'Portfolio Item',
            description: 'Lorem ipsum dolor sit ame'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            title: 'Pricing Table',
            description: 'Our pricing information'
        };
    },
    fetch: function fetch(_ref) {
        var store = _ref.store,
            error = _ref.error;

        try {
            //--- Pricing ---//
            store.dispatch('receivePricing');
        } catch (e) {
            error(e);
        }
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        pricing: 'getPricing'
    })
};

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_services_accordion_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_services_accordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_services_accordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_services_list_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_services_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_services_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_panels_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_services_panels_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_services_panels_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_services_tabs_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_services_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_services_tabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        ServicesAccordion: __WEBPACK_IMPORTED_MODULE_0__components_services_accordion_vue___default.a,
        ServicesList: __WEBPACK_IMPORTED_MODULE_1__components_services_list_vue___default.a,
        ServicesPanels: __WEBPACK_IMPORTED_MODULE_2__components_services_panels_vue___default.a,
        ServicesTabs: __WEBPACK_IMPORTED_MODULE_3__components_services_tabs_vue___default.a,
        ServicesCustomers: __WEBPACK_IMPORTED_MODULE_4__components_home_customers_vue___default.a
    },
    data: function data() {
        return {
            title: 'Services',
            description: 'We Are Professional'
        };
    },
    head: function head() {
        return {
            script: [{ src: '/js/owl-carousel/owl.carousel.js' }],
            link: [{ rel: 'stylesheet', href: '/js/owl-carousel/owl.carousel.css' }, { rel: 'stylesheet', href: '/js/owl-carousel/owl.theme.css' }]
        };
    },

    created: function created() {
        // Set parent data (title, description)
        this.$parent.title = this.title;
        this.$parent.description = this.description;
    }
};

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
*/
var contact_me = function contact_me(urlForm) {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function submitError($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function submitSuccess($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: urlForm,
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function success() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success').append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function error() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com;>me@example.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                }
            });
        },
        filter: function filter() {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    /*When clicking on Full hide fail/success boxes */
    $('#name').focus(function () {
        $('#success').html('');
    });
};
/* harmony default export */ __webpack_exports__["a"] = contact_me;

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getPersonalData = function getPersonalData(cb) {
    var about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['personal_data']);
    cb(about.personal_data);
};

var getBusinessData = function getBusinessData(cb) {
    var about = void 0;
    if (env === 'testing') {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['business']);
        cb(about.business);
    } else {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['business']);
        cb(about.business);
    }
};

var getSubscribeData = function getSubscribeData(cb) {
    var about = void 0;
    if (env === 'testing') {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['subscribe']);
        cb(about.subscribe);
    } else {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['subscribe']);
        cb(about.subscribe);
    }
};

var getWidgetsData = function getWidgetsData(cb) {
    var about = void 0;
    if (env === 'testing') {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['widgets']);
        cb(about.widgets);
    } else {
        about = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_about__["a" /* default */], ['widgets']);
        cb(about.widgets);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getPersonalData: getPersonalData,
    getBusinessData: getBusinessData,
    getSubscribeData: getSubscribeData,
    getWidgetsData: getWidgetsData
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_blog__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getPosts = function getPosts(cb, id) {
    var blog = void 0;
    if (env === 'testing') {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
        cb(blog);
    } else {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['url', 'title1', 'title2', 'title3', 'posts', 'pager']);
        cb(blog);
    }
};

var getPost = function getPost(cb, id) {
    var blog = void 0;
    if (env === 'testing') {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['url', 'post']);
        cb(blog);
    } else {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['url', 'post']);
        cb(blog);
    }
};

var getCategories = function getCategories(cb) {
    var blog = void 0;
    if (env === 'testing') {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['categories']);
        cb(blog);
    } else {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['categories']);
        cb(blog);
    }
};

var getPopular = function getPopular(cb) {
    var blog = void 0;
    if (env === 'testing') {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['popular']);
        cb(blog);
    } else {
        blog = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_blog__["a" /* default */], ['popular']);
        cb(blog);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getPosts: getPosts,
    getPost: getPost,
    getCategories: getCategories,
    getPopular: getPopular
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_customers__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getCustomers = function getCustomers(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_customers__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_customers__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getCustomers: getCustomers
};

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_faq__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getFaq = function getFaq(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_faq__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_faq__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getFaq: getFaq
};

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_gallery__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getGallery = function getGallery(cb) {
    var gallery = void 0;
    if (env === 'testing') {
        gallery = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_gallery__["a" /* default */], ['title1', 'title2', 'title3', 'items']);
        cb(gallery);
    } else {
        gallery = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_gallery__["a" /* default */], ['title1', 'title2', 'title3', 'items']);
        cb(gallery);
    }
};

var getInstagram = function getInstagram(cb) {
    var gallery = void 0;
    if (env === 'testing') {
        gallery = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_gallery__["a" /* default */], ['instagram']);
        cb(gallery);
    } else {
        gallery = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_gallery__["a" /* default */], ['instagram']);
        cb(gallery);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getGallery: getGallery,
    getInstagram: getInstagram
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_portfolio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

//=== API functions ==//

var getPortfolioItems = function getPortfolioItems(cb, params) {
    // params = { id: 1, nCol: 1 },
    var portfolio = void 0;
    if (env === 'testing') {
        // Change Portfolio items
        portfolio = _changePortfolioItems(params);
        cb(portfolio);
    } else {
        // Change Portfolio items
        portfolio = _changePortfolioItems(params);
        cb(portfolio);
    }
};

var getPortfolioItem = function getPortfolioItem(cb, id) {
    var portfolio = void 0;
    if (env === 'testing') {
        portfolio = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_portfolio__["a" /* default */], ['url', 'item']);
        cb(portfolio);
    } else {
        portfolio = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_portfolio__["a" /* default */], ['url', 'item']);
        cb(portfolio);
    }
};

// Change Portfolio items
var _changePortfolioItems = function _changePortfolioItems(params) {
    // params = { id: 1, nCol: 1 },
    // Get Portfolio
    var portfolio = _.cloneDeep(_.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_portfolio__["a" /* default */], ['url', 'pager', 'items']));
    if (!_.isUndefined(params) && !_.isUndefined(params.nCol)) {
        (function () {
            var nCol = params.nCol;
            var col = __WEBPACK_IMPORTED_MODULE_0__store_data_portfolio__["a" /* default */]['col' + nCol];
            portfolio.pager.total = col.total;
            var total = col.total;
            // Limit the size of the collection (portfolio.items) to the value (col.total)
            portfolio.items = _.filter(portfolio.items, function (item) {
                var result = total > 0;
                total--;
                return result;
            });
            // Change img from collection of portfolio.items
            portfolio.items = _.forEach(portfolio.items, function (item) {
                item.img = col.img;
            });

            // Group array elements (portfolio.items)
            if (!_.isUndefined(col.groups)) {
                (function () {
                    var newGroups = [];
                    var indexItem = 0;
                    var indexInGroup = void 0;
                    portfolio.items = _.forEach(portfolio.items, function (item) {
                        indexItem++;
                        var nGroup = col.groups[indexItem];
                        if (_.isUndefined(newGroups[nGroup - 1])) {
                            newGroups.push({});
                            indexInGroup = 0;
                        }
                        // Add item to group
                        indexInGroup++;
                        newGroups[nGroup - 1]['item' + indexInGroup] = item;
                    });
                    portfolio.items = newGroups;
                })();
            }
        })();
    }
    return portfolio;
};

/* harmony default export */ __webpack_exports__["a"] = {
    getPortfolioItems: getPortfolioItems,
    getPortfolioItem: getPortfolioItem
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_pricing__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getPricing = function getPricing(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_pricing__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_pricing__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getPricing: getPricing
};

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_services__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getServicesHome = function getServicesHome(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['home']);
        cb(services.home);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['home']);
        cb(services.home);
    }
};

var getServicesAccordion = function getServicesAccordion(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['accordion']);
        cb(services.accordion);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['accordion']);
        cb(services.accordion);
    }
};

var getServicesList = function getServicesList(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['list']);
        cb(services.list);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['list']);
        cb(services.list);
    }
};

var getServicesPanels = function getServicesPanels(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['panels']);
        cb(services.panels);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['panels']);
        cb(services.panels);
    }
};

var getServicesTabs = function getServicesTabs(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['tabs']);
        cb(services.tabs);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['tabs']);
        cb(services.tabs);
    }
};

var getServicesPurchase = function getServicesPurchase(cb) {
    var services = void 0;
    if (env === 'testing') {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['purchase']);
        cb(services.purchase);
    } else {
        services = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_services__["a" /* default */], ['purchase']);
        cb(services.purchase);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getServicesHome: getServicesHome,
    getServicesAccordion: getServicesAccordion,
    getServicesList: getServicesList,
    getServicesPanels: getServicesPanels,
    getServicesTabs: getServicesTabs,
    getServicesPurchase: getServicesPurchase
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_slider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getSlider = function getSlider(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_slider__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_slider__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getSlider: getSlider
};

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_socials__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getMySocials = function getMySocials(cb) {
    var socials = void 0;
    if (env === 'testing') {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['my']);
        cb(socials.my);
    } else {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['my']);
        cb(socials.my);
    }
};

var getShareSocials = function getShareSocials(cb) {
    var socials = void 0;
    if (env === 'testing') {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['share']);
        cb(socials.share);
    } else {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['share']);
        cb(socials.share);
    }
};

var getTwitter = function getTwitter(cb) {
    var socials = void 0;
    if (env === 'testing') {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['twitter']);
        cb(socials.twitter);
    } else {
        socials = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_socials__["a" /* default */], ['twitter']);
        cb(socials.twitter);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getTwitter: getTwitter,
    getMySocials: getMySocials,
    getShareSocials: getShareSocials
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_team__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getInfo = function getInfo(cb) {
    var team = void 0;
    if (env === 'testing') {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['info']);
        cb(team.info);
    } else {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['info']);
        cb(team.info);
    }
};

var getSummary = function getSummary(cb) {
    var team = void 0;
    if (env === 'testing') {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['summary']);
        cb(team.summary);
    } else {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['summary']);
        cb(team.summary);
    }
};

var getMembers = function getMembers(cb) {
    var team = void 0;
    if (env === 'testing') {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['members']);
        cb(team.members);
    } else {
        team = _.pick(__WEBPACK_IMPORTED_MODULE_0__store_data_team__["a" /* default */], ['members']);
        cb(team.members);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getInfo: getInfo,
    getSummary: getSummary,
    getMembers: getMembers
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_testimonials__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getTestimonials = function getTestimonials(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_testimonials__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_testimonials__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getTestimonials: getTestimonials
};

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_data_welcome__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(2);



// Get env
var env = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].env;

var getWelcome = function getWelcome(cb) {
    if (env === 'testing') {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_welcome__["a" /* default */]);
    } else {
        cb(__WEBPACK_IMPORTED_MODULE_0__store_data_welcome__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    getWelcome: getWelcome
};

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(2);


// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    business: {
        img_url: '/images/about-us.jpg',
        img_alt: '',
        title: 'About Osahan Business',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>'
    },
    subscribe: {
        about_us: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias',
        get_in_touch: 'Join our mailing list to stay up to date and get notices about our new releases!'
    },
    widgets: [{
        title: 'Side Widget Well-1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.'
    }, {
        title: 'Side Widget Well-2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.'
    }],
    personal_data: {
        copyright: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.copyright,
        designed_with: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.designed_with,
        designed_with_url: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.designed_with_url,
        contact: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.contact
    }
};

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(2);


// Get env
var total = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.blog.total; // the amount of posts per page
var url = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.blog.url; // blog url

/* harmony default export */ __webpack_exports__["a"] = {
    url: url,
    title1: 'blog',
    title2: 'Lorem ipsum',
    title3: 'In maximus auctor fringilla.',
    categories: [{
        url: '#',
        type: 'Brandign'
    }, {
        url: '#',
        type: 'Design'
    }, {
        url: '#',
        type: 'Development'
    }, {
        url: '#',
        type: 'Graphic'
    }],
    popular: [{
        url: '#',
        img: '/images/instagram-01.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
        creation_date: 'Jul 29 2016'
    }, {
        url: '#',
        img: '/images/instagram-02.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
        creation_date: 'Jul 29 2016'
    }, {
        url: '#',
        img: '/images/instagram-03.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
        creation_date: 'Jul 29 2016'
    }, {
        url: '#',
        img: '/images/instagram-04.jpg',
        creation_date: 'Jul 29 2016',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...'
    }, {
        url: '#',
        img: '/images/instagram-05.jpg',
        creation_date: 'Jul 29 2016',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...'
    }, {
        url: '#',
        img: '/images/instagram-06.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
        creation_date: 'Jul 29 2016'
    }, {
        url: '#',
        img: '/images/instagram-07.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, verit...',
        creation_date: 'Jul 29 2016'
    }],
    pager: {
        total: total,
        first_url: '#',
        last_url: '#',
        next_url: '#',
        prev_url: '#'
    },
    posts: [{
        title: 'Blog Post Title',
        url: '#',
        img: '/images/blog-01.jpg',
        icon: 'fa-camera',
        date: 'June 17, 2016',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        meta: {
            user: { name: 'Osahan', url: '#' },
            date: 'August 28, 2016 at 10:00 PM',
            tags: [{ url: '#', item: 'WordPress' }, { url: '#', item: 'Graphic' }],
            comments: { count: 4, url: '#' }
        }
    }, {
        title: 'Blog Post Title',
        url: '#',
        img: '/images/blog-02.jpg',
        icon: 'fa-film',
        date: 'June 17, 2016',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        meta: {
            user: { name: 'Osahan', url: '#' },
            date: 'August 28, 2016 at 10:00 PM',
            tags: [{ url: '#', item: 'WordPress' }, { url: '#', item: 'Graphic' }],
            comments: { count: 4, url: '#' }
        }
    }, {
        title: 'Blog Post Title',
        url: '#',
        img: '/images/blog-03.jpg',
        icon: 'fa-file-text',
        date: 'June 17, 2016',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
        meta: {
            user: { name: 'Osahan', url: '#' },
            date: 'August 28, 2016 at 10:00 PM',
            tags: [{ url: '#', item: 'WordPress' }, { url: '#', item: 'Graphic' }],
            comments: { count: 4, url: '#' }
        }
    }],
    post: {
        img: '/images/blog-03.jpg',
        content: '<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>\
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>',
        meta: {
            user: { name: 'Osahan', url: '#' },
            date: 'August 28, 2016 at 10:00 PM',
            tags: [{ url: '#', item: 'WordPress' }, { url: '#', item: 'Graphic' }],
            comments: { count: 4, url: '#' }
        },
        comments: [{
            img: '/images/instagram-05.jpg',
            user_url: '#',
            user_name: 'John Doe',
            date: 'February 15, 2016 at 11:39 pm',
            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
            reply_url: '#',
            reply: [{
                img: '/images/instagram-07.jpg',
                user_url: '#',
                user_name: 'John Doe',
                date: 'February 15, 2016 at 11:39 pm',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                reply_url: '#',
                reply: [{
                    img: '/images/instagram-02.jpg',
                    user_url: '#',
                    user_name: 'John Doe',
                    date: 'February 15, 2016 at 11:39 pm',
                    content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                    reply_url: '#',
                    reply: []
                }]
            }, {
                img: '/images/instagram-01.jpg',
                user_url: '#',
                user_name: 'John Doe',
                date: 'February 15, 2016 at 11:39 pm',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                reply_url: '#',
                reply: []
            }]
        }, {
            img: '/images/instagram-02.jpg',
            user_url: '#',
            user_name: 'John Doe',
            date: 'February 15, 2016 at 11:39 pm',
            content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
            reply_url: '#',
            reply: [{
                img: '/images/instagram-04.jpg',
                user_url: '#',
                user_name: 'John Doe',
                date: 'February 15, 2016 at 11:39 pm',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                reply_url: '#',
                reply: []
            }, {
                img: '/images/instagram-01.jpg',
                user_url: '#',
                user_name: 'John Doe',
                date: 'February 15, 2016 at 11:39 pm',
                content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
                reply_url: '#',
                reply: []
            }]
        }]
    }
};

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = [{
    url: '#',
    img: '/images/c1.png'
}, {
    url: '#',
    img: '/images/c2.png'
}, {
    url: '#',
    img: '/images/c3.png'
}, {
    url: '#',
    img: '/images/c4.png'
}, {
    url: '#',
    img: '/images/c5.png'
}, {
    url: '#',
    img: '/images/c6.png'
}, {
    url: '#',
    img: '/images/c7.png'
}, {
    url: '#',
    img: '/images/c8.png'
}];

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    items: [{
        id: 'collapseOne',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseTwo',
        title: 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseThree',
        title: 'Aenean consequat lorem ut felis ullamcorper?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseFour',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseFive',
        title: 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseSix',
        title: 'Aenean consequat lorem ut felis ullamcorper?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseSeven',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }, {
        id: 'collapseNine',
        title: 'Aenean consequat lorem ut felis ullamcorper?',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    }]
};

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    title1: 'Responsive gallery',
    title2: 'Lorem ipsum',
    title3: 'Phasellus eleifend ex enim, non viverra justo pretium vel.',
    instagram: ['/images/instagram-01.jpg', '/images/instagram-02.jpg', '/images/instagram-03.jpg', '/images/instagram-04.jpg', '/images/instagram-05.jpg', '/images/instagram-06.jpg', '/images/instagram-07.jpg', '/images/instagram-08.jpg', '/images/instagram-09.jpg'],
    items: [{
        id: '1',
        url: '#',
        img: '/images/gallery-01.jpg',
        description: 'This is the first one on my Gallery'
    }, {
        id: '2',
        url: '#',
        img: '/images/instagram-02.jpg',
        description: 'This is the second one on my Gallery'
    }, {
        id: '3',
        url: '#',
        img: '/images/gallery-03.jpg',
        description: 'This is the third one on my Gallery'
    }, {
        id: '4',
        url: '#',
        img: '/images/instagram-04.jpg',
        description: 'This is the fourth one on my Gallery'
    }, {
        id: '5',
        url: '#',
        img: '/images/instagram-05.jpg',
        description: 'This is the fifth one on my Gallery'
    }, {
        id: '6',
        url: '#',
        img: '/images/instagram-06.jpg',
        description: 'This is the sixth one on my Gallery'
    }, {
        id: '7',
        url: '#',
        img: '/images/instagram-07.jpg',
        description: 'This is the seventh one on my Gallery'
    }, {
        id: '8',
        url: '#',
        img: '/images/instagram-08.jpg',
        description: 'This is the eighth one on my Gallery'
    }, {
        id: '9',
        url: '#',
        img: '/images/gallery-09.jpg',
        description: 'This is the ninth one on my Gallery'
    }]
};

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(2);


var total = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.portfolio.total; // the amount of items per page
var url = __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.portfolio.url; // portfolio url

// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    url: url,
    col0: {
        img: '/images/related-projects.jpg',
        total: 9
    },
    col1: {
        img: '/images/blog1.jpg',
        total: 6
    },
    col2: {
        groups: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3 },
        img: '/images/blog-2.jpg',
        total: 6
    },
    col3: {
        groups: { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 3, 9: 3 },
        img: '/images/blog-2.jpg',
        total: 9
    },
    col4: {
        groups: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3 },
        img: '/images/blog-4.jpg',
        total: 12
    },
    pager: {
        total: total,
        first_url: '#',
        last_url: '#',
        next_url: '#',
        prev_url: '#'
    },
    item: {
        details: {
            title: 'Project Details',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed facilisis purus. Donec interdum massa at ipsum\
                           vehicula tristique. Maecenas bibendum dictum tincidunt. Sed nec justo ac libero consequat tincidunt. Cras\
                           eget molestie justo.</p>\
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed facilisis purus. Donec interdum massa at ipsum\
                           vehicula tristique. Maecenas bibendum dictum tincidunt. Sed nec justo ac libero consequat tincidunt. Cras\
                           eget molestie justo.</p>'
        },
        details2: {
            title: 'Project Details2',
            client: 'Osahan',
            status: 'Finish on 30 Dec, 2016',
            skills: 'creative, web design'
        }
    },
    items: [{
        id: '1',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project One',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '2',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Two',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '3',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Three',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '4',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Four',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '5',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Five',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '6',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Six',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '7',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Seven',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '8',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Eight',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '9',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Nine',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '10',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Ten',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '11',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project Eleven',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }, {
        id: '12',
        url: '/portfolio/item',
        img: '/images/blog1.jpg',
        title: 'Project twelve',
        subheading: 'Subheading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
    }]
};

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    items: [{
        panel_class: 'panel-default basic-plan',
        btn_class: 'btn-default',
        title: 'Basic',
        price_value: '$49',
        user: 1,
        projects: 5,
        email_accounts: 'Unlimited',
        disk_space: '10GB',
        monthly_bandwidth: '100GB'
    }, {
        panel_class: 'panel-primary advanced-plan',
        btn_class: 'btn-primary btn-lg',
        title: 'Advanced',
        price_value: '$99',
        user: 10,
        projects: 500,
        email_accounts: 'Unlimited',
        disk_space: '1000GB',
        monthly_bandwidth: '10000GB'
    }, {
        panel_class: 'panel-default basic-plan',
        btn_class: 'btn-default',
        title: 'Professional',
        price_value: '$199',
        user: 'Unlimted',
        projects: 'Unlimted',
        email_accounts: 'Unlimited',
        disk_space: '10000GB',
        monthly_bandwidth: 'Unlimited'
    }]
};

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    purchase: {
        url: '#',
        business: {
            title: '<strong>Osahan</strong> is the best theme to create an <strong>awesome website!</strong>',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.'
        }
    },
    home: {
        title1: 'serivces',
        title2: 'We Provide',
        title3: 'Phasellus eleifend ex enim, non viverra justo pretium vel.',
        items: [{
            icon: 'fa-leaf',
            duration: '1s',
            title: 'High Quality Theme',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-desktop',
            duration: '2s',
            title: 'Full Responsive',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-eye',
            duration: '3s',
            title: 'Retina Display Ready',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-code',
            duration: '4s',
            title: 'Clean Modern Code',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-rocket',
            duration: '5s',
            title: 'Fast &amp; Light Theme',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-css3',
            duration: '6s',
            title: 'Css3 Transitions',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-download',
            duration: '7s',
            title: 'Free Updates',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }, {
            icon: 'fa-umbrella',
            duration: '8s',
            title: 'Help &amp; Support',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur'
        }]
    },
    accordion: {
        items: [{
            id: 'collapseOne',
            title: 'Lorem ipsum dolor sit adipiscing elit?',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
        }, {
            id: 'collapseTwo',
            title: 'Curabitur eget leo at velit imperdiet?',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
        }, {
            id: 'collapseThree',
            title: 'Aenean consequat lorem ut felis ullamcorper?',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
        }]
    },
    list: {
        items_1: [{
            title: 'Service One',
            icon: 'fa-tree',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Two',
            icon: 'fa-car',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Three',
            icon: 'fa-support',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }],
        items_2: [{
            title: 'Service Four',
            icon: 'fa-database',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Five',
            icon: 'fa-bomb',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Six',
            icon: 'fa-bank',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }],
        items_3: [{
            title: 'Service Seven',
            icon: 'fa-paper-plane',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Eight',
            icon: 'fa-space-shuttle',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Nine',
            icon: 'fa-recycle',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }]
    },
    panels: {
        items: [{
            title: 'Service One',
            icon: 'fa-tree',
            url: '#',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Two',
            icon: 'fa-car',
            url: '#',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Three',
            icon: 'fa-support',
            url: '#',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }, {
            title: 'Service Four',
            icon: 'fa-database',
            url: '#',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
        }]
    },
    tabs: {
        items: [{
            id: 'service-one',
            title: 'Service One',
            icon: 'fa-tree',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
        }, {
            id: 'service-two',
            title: 'Service Two',
            icon: 'fa-car',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
        }, {
            id: 'service-three',
            title: 'Service Three',
            icon: 'fa-support',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
        }, {
            id: 'service-four',
            title: 'Service Four',
            icon: 'fa-database',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
        }, {
            id: 'service-five',
            title: 'Service Five',
            icon: 'fa-bank',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
        }]
    }

};

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    items: [{
        img: {
            src: '/images/slider/first.jpg',
            title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
        },
        body: {
            img_src: '/images/big-logo.png',
            img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            read_more_url: '#',
            live_demo_url: '#',
            title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
        }
    }, {
        img: {
            src: '/images/slider/second.jpg',
            title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
        },
        body: {
            img_src: '/images/big-logo.png',
            img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            read_more_url: '#',
            live_demo_url: '#',
            title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
        }
    }, {
        img: {
            src: '/images/slider/third.jpg',
            title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
        },
        body: {
            img_src: '/images/big-logo.png',
            img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
            read_more_url: '#',
            live_demo_url: '#',
            title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
        }
    }]
};

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_index__ = __webpack_require__(2);


// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    my: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.socials,
    share: {
        facebook: { url: '#', icon: 'fa-facebook' },
        twitter: { url: '#', icon: 'fa-twitter' },
        google: { url: '#', icon: 'fa-google-plus' },
        linkdin: { url: '#', icon: 'fa-linkedin' },
        flickr: { url: '#', icon: 'fa-flickr' },
        skype: { url: '#', icon: 'fa-skype' }
    },
    twitter: {
        url: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.twitter.url,
        tag: __WEBPACK_IMPORTED_MODULE_0__config_index__["a" /* default */].personal_data.twitter.tag,
        msgs: [{
            title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
            date: '28 February 2014'
        }, {
            title: 'Lorem ipsum dolor et, consectetur adipiscing eli.An Fusce eleifend aliquet nis application.',
            date: '28 February 2014'
        }, {
            title: 'Lorem ipsum dolor et, consectetur adipiscing eli.',
            date: '28 February 2014'
        }]
    }

};

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    info: {
        title: 'Our Great Team',
        description: 'Duis id tortor nec justo vehicula aliquet at non magna. Integer fermentum eros eu gravida vestibulum. Vivamus eget ultrices quam, in semper nibh. Vivamus tincidunt euismod justo.'
    },
    summary: [{
        title: 'Clients',
        sum: '253',
        icon: 'fa-smile-o'
    }, {
        title: 'Projects',
        sum: '592',
        icon: 'fa-briefcase'
    }, {
        title: 'Trophies',
        sum: '35',
        icon: 'fa-trophy'
    }],
    members: [{
        name: 'Chip Mayer',
        position: 'Founder & CEO',
        about: 'Hello. I love my work.',
        img_src: '/images/team/1.png',
        img_alt: 'Member',
        social_icons: [{
            class: 'facebook',
            url: '#',
            icon: 'fa-facebook'
        }, {
            class: 'twitter',
            url: '#',
            icon: 'fa-twitter'
        }, {
            class: 'google',
            url: '#',
            icon: 'fa-google-plus'
        }]
    }, {
        name: 'James Hillier',
        position: 'Creative Director',
        about: 'Hi! I take beautiful photos.',
        img_src: '/images/team/2.png',
        img_alt: 'Member',
        social_icons: [{
            class: 'facebook',
            url: '#',
            icon: 'fa-facebook'
        }, {
            class: 'twitter',
            url: '#',
            icon: 'fa-twitter'
        }, {
            class: 'google',
            url: '#',
            icon: 'fa-google-plus'
        }]
    }, {
        name: 'Louis Williams',
        position: 'Operator',
        about: 'Whoa! I\'m video junkie.',
        img_src: '/images/team/3.png',
        img_alt: 'Member',
        social_icons: [{
            class: 'facebook',
            url: '#',
            icon: 'fa-facebook'
        }, {
            class: 'twitter',
            url: '#',
            icon: 'fa-twitter'
        }, {
            class: 'google',
            url: '#',
            icon: 'fa-google-plus'
        }]
    }, {
        name: 'Joy Heuser',
        position: 'Manager',
        about: 'Hello. I love my clients.',
        img_src: '/images/team/4.png',
        img_alt: 'Member',
        social_icons: [{
            class: 'facebook',
            url: '#',
            icon: 'fa-facebook'
        }, {
            class: 'twitter',
            url: '#',
            icon: 'fa-twitter'
        }, {
            class: 'google',
            url: '#',
            icon: 'fa-google-plus'
        }]
    }]
};

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    title1: 'Testimonials',
    title2: 'Lorem ipsum',
    title3: 'In maximus auctor fringilla.',
    items: [{
        author_name: 'John Doe',
        author_position: 'Customer',
        author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
    }, {
        author_name: 'John Doe',
        author_position: 'Customer',
        author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
    }, {
        author_name: 'John Doe',
        author_position: 'Customer',
        author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
    }]
};

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// initial state
/* harmony default export */ __webpack_exports__["a"] = {
    items: [{
        url: 'http://vuejs.org/',
        icon: 'fa-globe',
        class: 'primary',
        head: 'Vue',
        body: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries.'
    }, {
        url: 'http://vuex.vuejs.org/en/',
        icon: 'fa-magic',
        class: 'warning',
        head: 'Vuex',
        body: 'Vuex is a state management pattern + library for <a href="http://vuejs.org/">Vue.js</a> applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue\'s official <a href="https://github.com/vuejs/vue-devtools">devtools extension</a> to provide advanced features.'
    }, {
        url: 'https://nuxtjs.org/guide',
        icon: 'fa-rocket',
        class: 'success',
        head: 'Nuxt.js',
        body: 'Nuxt.js is a framework for creating Universal Vue.js Applications. As a framework, Nuxt.js comes with a lot of features to help you in your development between the client side and the server side such as Asynchronous Data, Middleware, Layouts, etc.'
    }]
};

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_getters__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_modules_system__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_modules_about__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_modules_slider__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_modules_blog__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_modules_customers__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_modules_gallery__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_modules_services__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_modules_team__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_modules_testimonials__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_modules_welcome__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_modules_socials__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_modules_faq__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_modules_pricing__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_modules_portfolio__ = __webpack_require__(222);
// Vue

// Vuex

// Config

// Actions

// Getters

// Modules















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

// A Vuex instance is created by combining the modules, getters, actions
var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    strict: __WEBPACK_IMPORTED_MODULE_2__config_index__["a" /* default */].env !== 'production',
    actions: __WEBPACK_IMPORTED_MODULE_3__store_actions__["default"],
    getters: __WEBPACK_IMPORTED_MODULE_4__store_getters__["default"],
    modules: {
        system: __WEBPACK_IMPORTED_MODULE_5__store_modules_system__["a" /* default */],
        about: __WEBPACK_IMPORTED_MODULE_6__store_modules_about__["a" /* default */],
        slider: __WEBPACK_IMPORTED_MODULE_7__store_modules_slider__["a" /* default */],
        blog: __WEBPACK_IMPORTED_MODULE_8__store_modules_blog__["a" /* default */],
        customers: __WEBPACK_IMPORTED_MODULE_9__store_modules_customers__["a" /* default */],
        gallery: __WEBPACK_IMPORTED_MODULE_10__store_modules_gallery__["a" /* default */],
        services: __WEBPACK_IMPORTED_MODULE_11__store_modules_services__["a" /* default */],
        team: __WEBPACK_IMPORTED_MODULE_12__store_modules_team__["a" /* default */],
        testimonials: __WEBPACK_IMPORTED_MODULE_13__store_modules_testimonials__["a" /* default */],
        welcome: __WEBPACK_IMPORTED_MODULE_14__store_modules_welcome__["a" /* default */],
        socials: __WEBPACK_IMPORTED_MODULE_15__store_modules_socials__["a" /* default */],
        faq: __WEBPACK_IMPORTED_MODULE_16__store_modules_faq__["a" /* default */],
        pricing: __WEBPACK_IMPORTED_MODULE_17__store_modules_pricing__["a" /* default */],
        portfolio: __WEBPACK_IMPORTED_MODULE_18__store_modules_portfolio__["a" /* default */]
    }
});

/* harmony default export */ __webpack_exports__["default"] = store;

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_PERSONAL_DATA: function RECEIVE_PERSONAL_DATA(state, personal_data) {
        // Clone the object passed, that there was no link between them
        state.personal_data = _.cloneDeep(personal_data);
    },

    RECEIVE_BUSINESS_DATA: function RECEIVE_BUSINESS_DATA(state, business) {
        // Clone the object passed, that there was no link between them
        state.business = _.cloneDeep(business);
    },

    RECEIVE_SUBSCRIBE_DATA: function RECEIVE_SUBSCRIBE_DATA(state, subscribe) {
        // Clone the object passed, that there was no link between them
        state.subscribe = _.cloneDeep(subscribe);
    },

    RECEIVE_WIDGETS_DATA: function RECEIVE_WIDGETS_DATA(state, widgets) {
        // Clone the object passed, that there was no link between them
        state.widgets = _.cloneDeep(widgets);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_BLOG_POSTS: function RECEIVE_BLOG_POSTS(state, blog) {
        // Clone the object passed, that there was no link between them
        var cloneBlog = _.cloneDeep(blog);
        state.url = cloneBlog.url;
        state.title1 = cloneBlog.title1;
        state.title2 = cloneBlog.title2;
        state.title3 = cloneBlog.title3;
        state.pager = cloneBlog.pager;
        state.posts = cloneBlog.posts;
    },

    RECEIVE_BLOG_POST: function RECEIVE_BLOG_POST(state, blog) {
        // Clone the object passed, that there was no link between them
        var cloneBlog = _.cloneDeep(blog);
        state.url = cloneBlog.url;
        state.post = cloneBlog.post;
    },

    RECEIVE_BLOG_CATEGORIES: function RECEIVE_BLOG_CATEGORIES(state, blog) {
        // Clone the object passed, that there was no link between them
        var cloneBlog = _.cloneDeep(blog);
        state.categories = cloneBlog.categories;
    },

    RECEIVE_BLOG_POPULAR: function RECEIVE_BLOG_POPULAR(state, blog) {
        // Clone the object passed, that there was no link between them
        var cloneBlog = _.cloneDeep(blog);
        state.popular = cloneBlog.popular;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_CUSTOMERS: function RECEIVE_CUSTOMERS(state, customers) {
        // Clone the object passed, that there was no link between them
        state.items = _.cloneDeep(customers);
    }

};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_FAQ: function RECEIVE_FAQ(state, faq) {
        // Clone the object passed, that there was no link between them
        var cloneFaq = _.cloneDeep(faq);
        state.items = cloneFaq.items;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_GALLERY: function RECEIVE_GALLERY(state, gallery) {
        // Clone the object passed, that there was no link between them
        var cloneGallery = _.cloneDeep(gallery);
        state.items = cloneGallery.items;
        state.title1 = cloneGallery.title1;
        state.title2 = cloneGallery.title2;
        state.title3 = cloneGallery.title3;
    },

    RECEIVE_INSTAGRAM: function RECEIVE_INSTAGRAM(state, gallery) {
        // Clone the object passed, that there was no link between them
        var cloneGallery = _.cloneDeep(gallery);
        state.instagram = cloneGallery.instagram;
    }

};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_PORTFOLIO_ITEMS: function RECEIVE_PORTFOLIO_ITEMS(state, portfolio) {
        // Clone the object passed, that there was no link between them
        var clonePortfolio = _.cloneDeep(portfolio);
        state.url = clonePortfolio.url;
        state.pager = clonePortfolio.pager;
        state.items = clonePortfolio.items;
    },

    RECEIVE_PORTFOLIO_ITEM: function RECEIVE_PORTFOLIO_ITEM(state, portfolio) {
        // Clone the object passed, that there was no link between them
        var clonePortfolio = _.cloneDeep(portfolio);
        state.url = clonePortfolio.url;
        state.item = clonePortfolio.item;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {
// initial state
var state = {};

var mutations = {

    RECEIVE_PRICING: function RECEIVE_PRICING(state, pricing) {
        // Clone the object passed, that there was no link between them
        var clonePricing = _.cloneDeep(pricing);
        state.items = clonePricing.items;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_SERVICES_HOME: function RECEIVE_SERVICES_HOME(state, services) {
        // Clone the object passed, that there was no link between them
        state.home = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_ACCORDION: function RECEIVE_SERVICES_ACCORDION(state, services) {
        // Clone the object passed, that there was no link between them
        state.accordion = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_LIST: function RECEIVE_SERVICES_LIST(state, services) {
        // Clone the object passed, that there was no link between them
        state.list = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_PANELS: function RECEIVE_SERVICES_PANELS(state, services) {
        // Clone the object passed, that there was no link between them
        state.panels = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_TABS: function RECEIVE_SERVICES_TABS(state, services) {
        // Clone the object passed, that there was no link between them
        state.tabs = _.cloneDeep(services);
    },

    RECEIVE_SERVICES_PURCHASE: function RECEIVE_SERVICES_PURCHASE(state, services) {
        // Clone the object passed, that there was no link between them
        state.purchase = _.cloneDeep(services);
    }

};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_SLIDER: function RECEIVE_SLIDER(state, slider) {
        // Clone the object passed, that there was no link between them
        var cloneSlider = _.cloneDeep(slider);
        state.items = cloneSlider.items;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_MY_SOCIALS: function RECEIVE_MY_SOCIALS(state, my_socials) {
        // Clone the object passed, that there was no link between them
        state.my = _.cloneDeep(my_socials);
    },

    RECEIVE_SHARE_SOCIALS: function RECEIVE_SHARE_SOCIALS(state, share_socials) {
        // Clone the object passed, that there was no link between them
        state.share = _.cloneDeep(share_socials);
    },

    RECEIVE_TWITTER: function RECEIVE_TWITTER(state, twitter) {
        // Clone the object passed, that there was no link between them
        state.twitter = _.cloneDeep(twitter);
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {};

var mutations = {
    SET_ERROR: function SET_ERROR(state, error) {
        state.error = {
            statusCode: error.statusCode,
            name: error.name,
            message: error.message,
            stack: error.stack
        };
    },
    CLEAR_ERROR: function CLEAR_ERROR(state) {
        state.error.statusCode = 0;
        state.error.name = '';
        state.error.message = '';
        state.error.stack = '';
    },
    DELAY_PAGE: function DELAY_PAGE(state) {
        state.showPage = true;
    },
    RECEIVE_CONFIG: function RECEIVE_CONFIG(state, config) {
        state.config = config;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_TEAM_INFO: function RECEIVE_TEAM_INFO(state, info) {
        // Clone the object passed, that there was no link between them
        state.info = _.cloneDeep(info);
    },

    RECEIVE_TEAM_MEMBERS: function RECEIVE_TEAM_MEMBERS(state, members) {
        // Clone the object passed, that there was no link between them
        state.members = _.cloneDeep(members);
    },

    RECEIVE_TEAM_SUMMARY: function RECEIVE_TEAM_SUMMARY(state, summary) {
        // Clone the object passed, that there was no link between them
        state.summary = _.cloneDeep(summary);
    }

};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_TESTIMONIALS: function RECEIVE_TESTIMONIALS(state, testimonials) {
        // Clone the object passed, that there was no link between them
        var cloneTestimonials = _.cloneDeep(testimonials);
        state.items = cloneTestimonials.items;
        state.title1 = cloneTestimonials.title1;
        state.title2 = cloneTestimonials.title2;
        state.title3 = cloneTestimonials.title3;
    }

};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {var state = {};

var mutations = {

    RECEIVE_WELCOME: function RECEIVE_WELCOME(state, welcome) {
        // Clone the object passed, that there was no link between them
        var cloneWelcome = _.cloneDeep(welcome);
        state.items = cloneWelcome.items;
    }
};

/* harmony default export */ __webpack_exports__["a"] = {
    state: state,
    mutations: mutations
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(237), __esModule: true };

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(238), __esModule: true };

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(240), __esModule: true };

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(242), __esModule: true };

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(235);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(234);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(49);
module.exports = __webpack_require__(270);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(8)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(272);
module.exports = __webpack_require__(8).Object.assign;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(273);
module.exports = __webpack_require__(8).Object.keys;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(274);
module.exports = __webpack_require__(8).Promise;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(275);
__webpack_require__(71);
__webpack_require__(276);
__webpack_require__(277);
module.exports = __webpack_require__(8).Symbol;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(50);
module.exports = __webpack_require__(48).f('iterator');

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 245 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(17)
  , toLength  = __webpack_require__(69)
  , toIndex   = __webpack_require__(269);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19)
  , gOPS    = __webpack_require__(41)
  , pIE     = __webpack_require__(27);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(25)
  , call        = __webpack_require__(252)
  , isArrayIter = __webpack_require__(250)
  , anObject    = __webpack_require__(11)
  , toLength    = __webpack_require__(69)
  , getIterFn   = __webpack_require__(70)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 249 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(24)
  , ITERATOR   = __webpack_require__(6)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(64)
  , descriptor     = __webpack_require__(28)
  , setToStringTag = __webpack_require__(29)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(6)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(6)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(19)
  , toIObject = __webpack_require__(17);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(30)('meta')
  , isObject = __webpack_require__(23)
  , has      = __webpack_require__(14)
  , setDesc  = __webpack_require__(16).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(18)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(9)
  , macrotask = __webpack_require__(68).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(21)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(19)
  , gOPS     = __webpack_require__(41)
  , pIE      = __webpack_require__(27)
  , toObject = __webpack_require__(45)
  , IObject  = __webpack_require__(62)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(16)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(19);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(27)
  , createDesc     = __webpack_require__(28)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(46)
  , has            = __webpack_require__(14)
  , IE8_DOM_DEFINE = __webpack_require__(61)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(17)
  , gOPN      = __webpack_require__(65).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(14)
  , toObject    = __webpack_require__(45)
  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(22)
  , core    = __webpack_require__(8)
  , fails   = __webpack_require__(18);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(9)
  , core        = __webpack_require__(8)
  , dP          = __webpack_require__(16)
  , DESCRIPTORS = __webpack_require__(13)
  , SPECIES     = __webpack_require__(6)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(11)
  , aFunction = __webpack_require__(37)
  , SPECIES   = __webpack_require__(6)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44)
  , defined   = __webpack_require__(38);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11)
  , get      = __webpack_require__(70);
module.exports = __webpack_require__(8).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(244)
  , step             = __webpack_require__(255)
  , Iterators        = __webpack_require__(24)
  , toIObject        = __webpack_require__(17);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(63)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(22);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(259)});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(45)
  , $keys    = __webpack_require__(19);

__webpack_require__(264)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(9)
  , ctx                = __webpack_require__(25)
  , classof            = __webpack_require__(59)
  , $export            = __webpack_require__(22)
  , isObject           = __webpack_require__(23)
  , aFunction          = __webpack_require__(37)
  , anInstance         = __webpack_require__(245)
  , forOf              = __webpack_require__(248)
  , speciesConstructor = __webpack_require__(267)
  , task               = __webpack_require__(68).set
  , microtask          = __webpack_require__(258)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(265)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(29)($Promise, PROMISE);
__webpack_require__(266)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(254)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(9)
  , has            = __webpack_require__(14)
  , DESCRIPTORS    = __webpack_require__(13)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(67)
  , META           = __webpack_require__(257).KEY
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(43)
  , setToStringTag = __webpack_require__(29)
  , uid            = __webpack_require__(30)
  , wks            = __webpack_require__(6)
  , wksExt         = __webpack_require__(48)
  , wksDefine      = __webpack_require__(47)
  , keyOf          = __webpack_require__(256)
  , enumKeys       = __webpack_require__(247)
  , isArray        = __webpack_require__(251)
  , anObject       = __webpack_require__(11)
  , toIObject      = __webpack_require__(17)
  , toPrimitive    = __webpack_require__(46)
  , createDesc     = __webpack_require__(28)
  , _create        = __webpack_require__(64)
  , gOPNExt        = __webpack_require__(262)
  , $GOPD          = __webpack_require__(261)
  , $DP            = __webpack_require__(16)
  , $keys          = __webpack_require__(19)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f  = $propertyIsEnumerable;
  __webpack_require__(41).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(379)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\.nuxt\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(106)

/* template */
var __vue_template__ = __webpack_require__(368)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\.nuxt\\components\\nuxt-loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-508f36ed"
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(377)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\.nuxt\\components\\nuxt.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(122)

/* template */
var __vue_template__ = __webpack_require__(397)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\blog.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] blog.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(381)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\gallery.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] gallery.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(125)

/* template */
var __vue_template__ = __webpack_require__(370)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\service.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] service.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(127)

/* template */
var __vue_template__ = __webpack_require__(395)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\team-info.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] team-info.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(128)

/* template */
var __vue_template__ = __webpack_require__(341)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\team-members.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] team-members.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(129)

/* template */
var __vue_template__ = __webpack_require__(387)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\team-summary.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] team-summary.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(131)

/* template */
var __vue_template__ = __webpack_require__(375)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\testimonials.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] testimonials.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(132)

/* template */
var __vue_template__ = __webpack_require__(362)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\home\\welcome.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] welcome.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(133)

/* template */
var __vue_template__ = __webpack_require__(407)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\contact.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] contact.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(401)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\copyright.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] copyright.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(136)

/* template */
var __vue_template__ = __webpack_require__(378)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\instagram.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] instagram.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(137)

/* template */
var __vue_template__ = __webpack_require__(351)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\social.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] social.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(358)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\subscribe.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] subscribe.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(138)

/* template */
var __vue_template__ = __webpack_require__(347)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\components\\layout\\footer\\twitter.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] twitter.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(153)

/* template */
var __vue_template__ = __webpack_require__(404)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\layouts\\default.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] default.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(154)

/* template */
var __vue_template__ = __webpack_require__(384)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\layouts\\error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(155)

/* template */
var __vue_template__ = __webpack_require__(411)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\about.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(156)

/* template */
var __vue_template__ = __webpack_require__(415)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\home1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] home1.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(157)

/* template */
var __vue_template__ = __webpack_require__(414)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\home2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] home2.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(158)

/* template */
var __vue_template__ = __webpack_require__(409)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\blog\\post.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] post.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(159)

/* template */
var __vue_template__ = __webpack_require__(408)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\contact.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] contact.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(160)

/* template */
var __vue_template__ = __webpack_require__(374)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\error-404.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] error-404.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(161)

/* template */
var __vue_template__ = __webpack_require__(346)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(162)

/* template */
var __vue_template__ = __webpack_require__(406)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\faq.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] faq.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(163)

/* template */
var __vue_template__ = __webpack_require__(352)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\full-width.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] full-width.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(164)

/* template */
var __vue_template__ = __webpack_require__(403)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(165)

/* template */
var __vue_template__ = __webpack_require__(393)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col1.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(166)

/* template */
var __vue_template__ = __webpack_require__(392)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col2.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(167)

/* template */
var __vue_template__ = __webpack_require__(391)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col3.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(168)

/* template */
var __vue_template__ = __webpack_require__(390)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\col4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] col4.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(169)

/* template */
var __vue_template__ = __webpack_require__(350)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\portfolio\\item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] item.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(170)

/* template */
var __vue_template__ = __webpack_require__(348)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\pricing.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] pricing.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(171)

/* template */
var __vue_template__ = __webpack_require__(371)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\services.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] services.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(172)

/* template */
var __vue_template__ = __webpack_require__(386)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] sidebar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(173)

/* template */
var __vue_template__ = __webpack_require__(344)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\about.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(174)

/* template */
var __vue_template__ = __webpack_require__(363)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-home1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] blog-home1.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(175)

/* template */
var __vue_template__ = __webpack_require__(364)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-home2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] blog-home2.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(176)

/* template */
var __vue_template__ = __webpack_require__(333)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\blog-post.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] blog-post.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(177)

/* template */
var __vue_template__ = __webpack_require__(400)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\contact.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] contact.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(178)

/* template */
var __vue_template__ = __webpack_require__(385)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\error-404.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] error-404.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(179)

/* template */
var __vue_template__ = __webpack_require__(366)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\faq.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] faq.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(180)

/* template */
var __vue_template__ = __webpack_require__(413)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\full-width.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] full-width.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(181)

/* template */
var __vue_template__ = __webpack_require__(334)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(182)

/* template */
var __vue_template__ = __webpack_require__(335)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] portfolio-1.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(183)

/* template */
var __vue_template__ = __webpack_require__(336)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] portfolio-2.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(184)

/* template */
var __vue_template__ = __webpack_require__(337)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] portfolio-3.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(185)

/* template */
var __vue_template__ = __webpack_require__(338)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] portfolio-4.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(186)

/* template */
var __vue_template__ = __webpack_require__(388)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\portfolio-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] portfolio-item.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(187)

/* template */
var __vue_template__ = __webpack_require__(339)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\pricing.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] pricing.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(188)

/* template */
var __vue_template__ = __webpack_require__(369)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\OpenServer\\domains\\vue-nuxt-static\\pages\\sidebar\\services.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] services.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "pager"
  }, [_c('li', {
    staticClass: "previous"
  }, [_c('a', {
    attrs: {
      "href": _vm.blog.pager.prev_url
    }
  }, [_vm._v("← Older")])]), _c('li', {
    staticClass: "next"
  }, [_c('a', {
    attrs: {
      "href": _vm.blog.pager.next_url
    }
  }, [_vm._v("Newer →")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "owl-carousel owl-theme",
    attrs: {
      "id": "osahan-slider"
    }
  }, _vm._l((_vm.slider.items), function(item) {
    return _c('div', {
      staticClass: "item"
    }, [_c('img', {
      staticClass: "slider-img",
      attrs: {
        "src": item.img.src,
        "title": item.img.title,
        "alt": item.img.alt
      }
    }), _c('div', {
      staticClass: "carousel-text"
    }, [_c('div', {
      staticClass: "line"
    }, [_c('img', {
      attrs: {
        "src": item.body.img_src,
        "title": item.body.img_title,
        "alt": "item.body.img_alt"
      }
    }), _c('h1', {
      domProps: {
        "innerHTML": _vm._s(item.body.title)
      }
    }), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.body.description)
      }
    }), _c('div', {
      staticClass: "carousel-btns"
    }, [_c('a', {
      staticClass: "btn btn-default btn-lg",
      attrs: {
        "href": item.body.read_more_url
      }
    }, [_vm._v("Read More")]), _c('a', {
      staticClass: "btn btn-primary btn-lg",
      attrs: {
        "href": item.body.live_demo_url
      }
    }, [_vm._v("Live Demo")])])])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-8"
  }, [_c('blog-post-content')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('blog-search'), _c('blog-categories'), _c('blog-popular'), _c('blog-side-widget')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": "/images/sidebar-page.jpg",
      "alt": ""
    }
  })])]), _c('h2', [_vm._v("Section Heading")]), _c('p', [_vm._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, et temporibus, facere perferendis veniam beatae non debitis, numquam blanditiis necessitatibus vel mollitia dolorum laudantium, voluptate dolores iure maxime ducimus fugit.\n    ")]), _c('div', {
    staticClass: "main-content"
  }, [_c('p', [_vm._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.")]), _c('h1', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h2', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h3', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h4', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h5', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h6', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n            ")]), _c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n            ")]), _c('button', {
    staticClass: "btn btn-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n            ")]), _c('button', {
    staticClass: "btn btn-info btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n            ")]), _c('button', {
    staticClass: "btn btn-warning btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n            ")]), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n            ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n            ")]), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n            ")]), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n            ")]), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n            ")]), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n            ")]), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n            ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n            ")]), _c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n            ")]), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n            ")]), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n            ")]), _c('button', {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n            ")]), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n            ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n            ")]), _c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n            ")]), _c('button', {
    staticClass: "btn btn-success btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n            ")]), _c('button', {
    staticClass: "btn btn-info btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n            ")]), _c('button', {
    staticClass: "btn btn-warning btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n            ")]), _c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n            ")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('portfolio-col1-list'), _c('portfolio-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('portfolio-col2-list'), _c('portfolio-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('portfolio-col3-list'), _c('portfolio-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('portfolio-col4-list'), _c('portfolio-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row pricing-page"
  }, _vm._l((_vm.pricing.items), function(plan) {
    return _c('div', {
      staticClass: "col-md-4"
    }, [_c('div', {
      class: ['panel', 'text-center', plan.panel_class]
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h3', {
      staticClass: "panel-title"
    }, [_vm._v(_vm._s(plan.title))])]), _c('div', {
      staticClass: "panel-body"
    }, [_c('div', {
      staticClass: "plan-price"
    }, [_c('div', {
      staticClass: "price-value"
    }, [_vm._v(_vm._s(plan.price_value)), _c('span', [_vm._v(".00")])]), _c('div', {
      staticClass: "interval"
    }, [_vm._v("per month")])])]), _c('ul', {
      staticClass: "list-group"
    }, [_c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.user))]), _vm._v(" User")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.projects))]), _vm._v(" Projects")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.email_accounts))]), _vm._v(" Email Accounts")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.disk_space))]), _vm._v(" Disk Space")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.monthly_bandwidth))]), _vm._v(" Monthly Bandwidth")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('a', {
      class: ['btn', plan.btn_class],
      attrs: {
        "href": "#"
      }
    }, [_vm._v("Sign Up!")])])])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "widget widget-popular-posts"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Popular Post")]), _c('ul', _vm._l((_vm.blog.popular), function(post) {
    return _c('li', [_c('div', {
      staticClass: "widget-thumb"
    }, [_c('a', {
      attrs: {
        "href": post.url
      }
    }, [_c('img', {
      attrs: {
        "alt": "",
        "src": post.img
      }
    })])]), _c('div', {
      staticClass: "widget-content"
    }, [_c('h5', [_c('a', {
      attrs: {
        "href": post.url
      }
    }, [_vm._v(_vm._s(post.content))])]), _c('span', [_vm._v(_vm._s(post.creation_date))])]), _c('div', {
      staticClass: "clearfix"
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "members"
  }, _vm._l((_vm.team.members), function(member) {
    return _c('div', {
      staticClass: "col-sm-3"
    }, [_c('div', {
      staticClass: "member-block"
    }, [_c('p', [_vm._v(_vm._s(member.about))]), _c('img', {
      attrs: {
        "alt": member.img_alt,
        "src": member.img_src
      }
    }), _c('div', {
      staticClass: "details"
    }, [_c('h6', [_vm._v(_vm._s(member.name))]), _c('span', {
      staticClass: "small-text"
    }, [_vm._v(_vm._s(member.position))]), _c('div', {
      staticClass: "social-widget"
    }, [_c('ul', {
      staticClass: "social-icons"
    }, _vm._l((member.social_icons), function(icon) {
      return _c('li', [_c('a', {
        class: icon.class,
        attrs: {
          "href": icon.url
        }
      }, [_c('i', {
        class: ['fa', icon.icon]
      })])])
    }))])])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "bounceInUp animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "2s",
      "animation-name": "bounceInUp"
    },
    attrs: {
      "data-wow-duration": "2s"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row footer-widgets"
  }, [_c('div', {
    staticClass: "col-md-3 col-xs-12"
  }, [_c('footer-subscribe')], 1), _c('div', {
    staticClass: "col-md-3 col-xs-12"
  }, [_c('footer-twitter')], 1), _c('div', {
    staticClass: "col-md-3 col-xs-12"
  }, [_c('footer-instagram')], 1), _c('div', {
    staticClass: "col-md-3 col-xs-12"
  }, [_c('footer-contact'), _c('footer-social')], 1)]), _c('footer-copyright')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section section-customers"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "owl-carousel owl-carousel-featured",
    attrs: {
      "id": "customers"
    }
  }, _vm._l((_vm.portfolio.items), function(project) {
    return _c('div', {
      staticClass: "item"
    }, [_c('a', {
      attrs: {
        "href": project.url
      }
    }, [_c('img', {
      attrs: {
        "alt": "",
        "src": project.img
      }
    })])])
  }))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Related Projects")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('about-business'), _c('about-team'), _c('about-purchase'), _c('about-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar navbar-inverse osahan-header",
    attrs: {
      "role": "navigation"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_vm._m(0), _c('nuxt-link', {
    staticClass: "exotic navbar-brand flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "7s",
      "animation-name": "flipInY"
    },
    attrs: {
      "to": "/",
      "data-wow-duration": "7s"
    }
  }, [_c('i', {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" NuxtStatic\n      ")])], 1), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-example-navbar-collapse-1"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', {
    staticClass: "flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "1s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "1s"
    }
  }, [_c('nuxt-link', {
    class: {
      'active': _vm.$route.name == 'index'
    },
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "fa fa-home"
  }), _vm._v(" Home")])], 1), _c('li', {
    staticClass: "flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "1s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "1s"
    }
  }, [_c('nuxt-link', {
    class: {
      'active': _vm.$route.name == 'about'
    },
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About")])], 1), _c('li', {
    staticClass: "flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "3s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "3s"
    }
  }, [_c('nuxt-link', {
    class: {
      'active': _vm.$route.name == 'services'
    },
    attrs: {
      "to": "/services"
    }
  }, [_vm._v("Services")])], 1), _c('li', {
    staticClass: "dropdown flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "4s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "4s"
    }
  }, [_c('a', {
    class: ['dropdown-toggle', {
      'active': _vm.groupMenu == 'portfolio'
    }],
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Portfolio "), _c('b', {
    staticClass: "caret"
  })]), _c('ul', {
    staticClass: "dropdown-menu flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "1s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "1s"
    }
  }, [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/portfolio/col1"
    }
  }, [_vm._v("1 Column Portfolio")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/portfolio/col2"
    }
  }, [_vm._v("2 Column Portfolio")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/portfolio/col3"
    }
  }, [_vm._v("3 Column Portfolio")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/portfolio/col4"
    }
  }, [_vm._v("4 Column Portfolio")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/portfolio/item"
    }
  }, [_vm._v("Single Portfolio Item")])], 1)])]), _c('li', {
    staticClass: "dropdown flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "5s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "5s"
    }
  }, [_c('a', {
    class: ['dropdown-toggle', {
      'active': _vm.groupMenu == 'blog'
    }],
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Blog "), _c('b', {
    staticClass: "caret"
  })]), _c('ul', {
    staticClass: "dropdown-menu flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "1s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "1s"
    }
  }, [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/blog/home1"
    }
  }, [_vm._v("Blog Home 1")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/blog/home2"
    }
  }, [_vm._v("Blog Home 2")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/blog/post"
    }
  }, [_vm._v("Blog Post")])], 1)])]), _c('li', {
    staticClass: "dropdown flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "6s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "6s"
    }
  }, [_c('a', {
    class: ['dropdown-toggle', {
      'active': _vm.groupMenu == 'other-pages'
    }],
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Other Pages "), _c('b', {
    staticClass: "caret"
  })]), _c('ul', {
    staticClass: "dropdown-menu flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "1s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "1s"
    }
  }, [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/full-width"
    }
  }, [_vm._v("Full Width Page")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/sidebar"
    }
  }, [_vm._v("Sidebar Page")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/faq"
    }
  }, [_vm._v("FAQ")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/error-404"
    }
  }, [_vm._v("Error-404")])], 1), _c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/pricing"
    }
  }, [_vm._v("Pricing Table")])], 1)])]), _c('li', {
    staticClass: "flipInY animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "7s",
      "animation-name": "flipInY"
    },
    attrs: {
      "data-wow-duration": "7s"
    }
  }, [_c('nuxt-link', {
    class: {
      'active': _vm.$route.name == 'contact'
    },
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "navbar-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _c('span', {
    staticClass: "icon-bar"
  }), _c('span', {
    staticClass: "icon-bar"
  }), _c('span', {
    staticClass: "icon-bar"
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "error-page text-center"
  }, [(_vm.system.error) ? _c('h1', [_vm._v(_vm._s(_vm.system.error.statusCode))]) : _c('h3', [_vm._v("No Error")]), (_vm.system.error) ? _c('h3', [_vm._v(_vm._s(_vm.system.error.name))]) : _vm._e(), (_vm.system.error) ? _c('p', [_vm._v(_vm._s(_vm.description))]) : _vm._e(), _c('br'), _c('div', {
    staticClass: "text-center"
  }, [_c('nuxt-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back To Home\n                            ")])], 1)])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-widget twitter-widget"
  }, [_vm._m(0), _c('ul', _vm._l((_vm.socials.twitter.msgs), function(msg) {
    return _c('li', [_c('p', [_c('a', {
      attrs: {
        "href": _vm.socials.twitter.url
      }
    }, [_vm._v(_vm._s(_vm.socials.twitter.tag) + " ")]), _vm._v(" " + _vm._s(msg.title))]), _c('span', [_c('i', {
      staticClass: "fa fa-clock-o"
    }), _vm._v(" " + _vm._s(msg.date))])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_vm._v("Twitter "), _c('i', {
    staticClass: "fa fa-twitter-square"
  }), _vm._v(" Feed"), _c('span', {
    staticClass: "head-line"
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row pricing-page"
  }, _vm._l((_vm.pricing.items), function(plan) {
    return _c('div', {
      staticClass: "col-md-4"
    }, [_c('div', {
      class: ['panel', 'text-center', plan.panel_class]
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h3', {
      staticClass: "panel-title"
    }, [_vm._v(_vm._s(plan.title))])]), _c('div', {
      staticClass: "panel-body"
    }, [_c('div', {
      staticClass: "plan-price"
    }, [_c('div', {
      staticClass: "price-value"
    }, [_vm._v(_vm._s(plan.price_value)), _c('span', [_vm._v(".00")])]), _c('div', {
      staticClass: "interval"
    }, [_vm._v("per month")])])]), _c('ul', {
      staticClass: "list-group"
    }, [_c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.user))]), _vm._v(" User")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.projects))]), _vm._v(" Projects")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.email_accounts))]), _vm._v(" Email Accounts")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.disk_space))]), _vm._v(" Disk Space")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('strong', [_vm._v(_vm._s(plan.monthly_bandwidth))]), _vm._v(" Monthly Bandwidth\n                        ")]), _c('li', {
      staticClass: "list-group-item"
    }, [_c('a', {
      class: ['btn', plan.btn_class],
      attrs: {
        "href": "#"
      }
    }, [_vm._v("Sign Up!")])])])])])
  }))]), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "post-content"
    }
  }, [_c('img', {
    staticClass: "img-responsive img-hover",
    attrs: {
      "src": _vm.blog.post.img,
      "alt": ""
    }
  }), _c('hr'), _c('ul', {
    staticClass: "post-meta"
  }, [_c('li', [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" By "), _c('a', {
    attrs: {
      "href": _vm.blog.post.meta.user.url
    }
  }, [_vm._v(_vm._s(_vm.blog.post.meta.user.name))])]), _c('li', [_c('i', {
    staticClass: "fa fa-clock-o"
  }), _vm._v("Posted on " + _vm._s(_vm.blog.post.meta.date))]), _c('li', [_c('i', {
    staticClass: "fa fa-tag"
  }), _vm._l((_vm.blog.post.meta.tags), function(tag, index) {
    return _c('a', {
      attrs: {
        "href": tag.url
      }
    }, [(index) ? _c('span', [_vm._v(", ")]) : _vm._e(), _vm._v(_vm._s(tag.item))])
  })], 2), _c('li', [_c('i', {
    staticClass: "fa fa-comment-o"
  }), _c('a', {
    attrs: {
      "href": _vm.blog.post.meta.comments.url
    }
  }, [_vm._v(_vm._s(_vm.blog.post.meta.comments.count) + " Comments")])])]), _c('hr'), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.blog.post.content)
    }
  }), _c('hr'), _c('h1', {
    staticClass: "comments-title"
  }, [_vm._v("(" + _vm._s(_vm.blog.post.meta.comments.count) + ") Comments")]), _vm._l((_vm.blog.post.comments), function(comment, index) {
    return _c('div', {
      class: ['media', (index + 1) % 2 ? 'comment-box' : '']
    }, [_c('a', {
      staticClass: "pull-left",
      attrs: {
        "href": comment.user_url
      }
    }, [_c('img', {
      staticClass: "media-object",
      attrs: {
        "src": comment.img,
        "alt": ""
      }
    })]), _c('div', {
      staticClass: "media-body"
    }, [_c('div', {
      staticClass: "comment-meta"
    }, [_c('span', {
      staticClass: "comment-by"
    }, [_vm._v(_vm._s(comment.user_name))]), _c('span', {
      staticClass: "comment-date"
    }, [_vm._v(_vm._s(comment.date))]), _c('span', {
      staticClass: "reply-link"
    }, [_c('a', {
      attrs: {
        "href": comment.reply_url
      }
    }, [_vm._v("Reply")])])]), _c('div', {
      domProps: {
        "innerHTML": _vm._s(comment.content)
      }
    }), _vm._l((comment.reply), function(reply_comment1, index) {
      return _c('div', {
        class: ['media', (index + 1) % 2 ? 'comment-box' : '']
      }, [_c('a', {
        staticClass: "pull-left",
        attrs: {
          "href": reply_comment1.user_url
        }
      }, [_c('img', {
        staticClass: "media-object",
        attrs: {
          "src": reply_comment1.img,
          "alt": ""
        }
      })]), _c('div', {
        staticClass: "media-body"
      }, [_c('div', {
        staticClass: "comment-meta"
      }, [_c('span', {
        staticClass: "comment-by"
      }, [_vm._v(_vm._s(reply_comment1.user_name))]), _c('span', {
        staticClass: "comment-date"
      }, [_vm._v(_vm._s(reply_comment1.date))]), _c('span', {
        staticClass: "reply-link"
      }, [_c('a', {
        attrs: {
          "href": reply_comment1.reply_url
        }
      }, [_vm._v("Reply")])])]), _c('div', {
        domProps: {
          "innerHTML": _vm._s(reply_comment1.content)
        }
      }), _vm._l((reply_comment1.reply), function(reply_comment2, index) {
        return _c('div', {
          class: ['media', (index + 1) % 2 ? 'comment-box' : '']
        }, [_c('a', {
          staticClass: "pull-left",
          attrs: {
            "href": reply_comment2.user_url
          }
        }, [_c('img', {
          staticClass: "media-object",
          attrs: {
            "src": reply_comment2.img,
            "alt": ""
          }
        })]), _c('div', {
          staticClass: "media-body"
        }, [_c('div', {
          staticClass: "comment-meta"
        }, [_c('span', {
          staticClass: "comment-by"
        }, [_vm._v(_vm._s(reply_comment2.user_name))]), _c('span', {
          staticClass: "comment-date"
        }, [_vm._v(_vm._s(reply_comment2.date))]), _c('span', {
          staticClass: "reply-link"
        }, [_c('a', {
          attrs: {
            "href": reply_comment2.reply_url
          }
        }, [_vm._v("Reply")])])]), _c('div', {
          domProps: {
            "innerHTML": _vm._s(reply_comment2.content)
          }
        }), _vm._l((reply_comment2.reply), function(reply_comment3, index) {
          return _c('div', {
            class: ['media', (index + 1) % 2 ? 'comment-box' : '']
          }, [_c('a', {
            staticClass: "pull-left",
            attrs: {
              "href": reply_comment3.user_url
            }
          }, [_c('img', {
            staticClass: "media-object",
            attrs: {
              "src": reply_comment3.img,
              "alt": ""
            }
          })]), _c('div', {
            staticClass: "media-body"
          }, [_c('div', {
            staticClass: "comment-meta"
          }, [_c('span', {
            staticClass: "comment-by"
          }, [_vm._v(_vm._s(reply_comment3.user_name))]), _c('span', {
            staticClass: "comment-date"
          }, [_vm._v(_vm._s(reply_comment3.date))]), _c('span', {
            staticClass: "reply-link"
          }, [_c('a', {
            attrs: {
              "href": reply_comment3.reply_url
            }
          }, [_vm._v("Reply")])])]), _c('div', {
            domProps: {
              "innerHTML": _vm._s(reply_comment3.content)
            }
          })])])
        })], 2)])
      })], 2)])
    })], 2)])
  }), _vm._m(0)], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "well"
  }, [_c('h4', [_vm._v("Leave a Comment:")]), _c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "author"
    }
  }, [_vm._v("Name"), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "aria-required": "true",
      "size": "30",
      "value": "",
      "name": "author",
      "id": "author"
    }
  })]), _c('div', {
    staticClass: "col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email"), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "aria-required": "true",
      "size": "30",
      "value": "",
      "name": "author",
      "id": "email"
    }
  })]), _c('div', {
    staticClass: "col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "url"
    }
  }, [_vm._v("Website"), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "aria-required": "true",
      "size": "30",
      "value": "",
      "name": "url",
      "id": "url"
    }
  })])]), _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "comment"
    }
  }, [_vm._v("Add Your Comment")]), _c('textarea', {
    staticClass: "form-control",
    attrs: {
      "aria-required": "true",
      "name": "comment",
      "id": "comment"
    }
  }), _c('input', {
    staticClass: "btn btn-primary",
    staticStyle: {
      "margin-top": "15px"
    },
    attrs: {
      "type": "submit",
      "value": "Submit Comment",
      "id": "submit",
      "name": "submit"
    }
  })])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 350 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "portfolio"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('portfolio-slider')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('portfolio-item-content'), _c('portfolio-social')], 1)])]), _c('portfolio-related-projects')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-widget social-widget"
  }, [_vm._m(0), _c('ul', {
    staticClass: "social-icons"
  }, _vm._l((_vm.socials.my), function(val, key) {
    return _c('li', [_c('a', {
      class: key,
      attrs: {
        "href": val.url
      }
    }, [_c('i', {
      class: ['fa', val.icon]
    })])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_vm._v("Follow Us"), _c('span', {
    staticClass: "head-line"
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _vm._m(0), _c('page-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('p', [_vm._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.")]), _c('p', [_vm._v("\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.")]), _c('h1', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h2', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h3', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h4', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h5', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h6', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                        ")]), _c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                        ")]), _c('button', {
    staticClass: "btn btn-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                        ")]), _c('button', {
    staticClass: "btn btn-info btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                        ")]), _c('button', {
    staticClass: "btn btn-warning btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                        ")]), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                        ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                        ")]), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                        ")]), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                        ")]), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                        ")]), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                        ")]), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                        ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                        ")]), _c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                        ")]), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                        ")]), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                        ")]), _c('button', {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                        ")]), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                        ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                        ")]), _c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                        ")]), _c('button', {
    staticClass: "btn btn-success btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                        ")]), _c('button', {
    staticClass: "btn btn-info btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                        ")]), _c('button', {
    staticClass: "btn btn-warning btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                        ")]), _c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                        ")])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 353 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-well"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('h2', {
    domProps: {
      "innerHTML": _vm._s(_vm.services.purchase.business.title)
    }
  }), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.services.purchase.business.summary)
    }
  })]), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "button-side text-right"
  }, [_vm._m(0), _c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": _vm.services.purchase.url
    }
  }, [_c('i', {
    staticClass: "fa fa-shopping-cart"
  }), _vm._v(" Purchase It Now")])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "/services"
    }
  }, [_c('i', {
    staticClass: "fa fa-gift"
  }), _vm._v(" See Features")])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 354 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._l((_vm.portfolio.items), function(item) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-3 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item1.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item1.img,
        "alt": ""
      }
    })])]), _c('div', {
      staticClass: "col-md-3 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item2.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item2.img,
        "alt": ""
      }
    })])]), _c('div', {
      staticClass: "col-md-3 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item3.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item3.img,
        "alt": ""
      }
    })])]), _c('div', {
      staticClass: "col-md-3 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item4.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item4.img,
        "alt": ""
      }
    })])])])
  }), _c('hr'), _c('portfolio-pager')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 355 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', {
    staticStyle: {
      "margin": "0 0 8px"
    }
  }, [_vm._v(_vm._s(_vm.portfolio.item.details.title))]), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.portfolio.item.details.text)
    }
  }), _c('h3', {
    staticStyle: {
      "margin": "17px 0 8px"
    }
  }, [_vm._v(_vm._s(_vm.portfolio.item.details2.title))]), _c('ul', [_c('li', [_c('strong', [_vm._v("Client:")]), _vm._v(" " + _vm._s(_vm.portfolio.item.details2.client))]), _c('li', [_c('strong', [_vm._v("Status:")]), _vm._v(" " + _vm._s(_vm.portfolio.item.details2.status))]), _c('li', [_c('strong', [_vm._v("Skills:")]), _vm._v(" " + _vm._s(_vm.portfolio.item.details2.skills))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 356 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.about.widgets), function(widget) {
    return _c('div', {
      staticClass: "well"
    }, [_c('h4', [_vm._v(_vm._s(widget.title))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(widget.content)
      }
    })])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.blog.posts), function(post) {
    return _c('div', [_c('h2', [_c('a', {
      attrs: {
        "href": post.url
      }
    }, [_vm._v(_vm._s(post.title))])]), _c('ul', {
      staticClass: "post-meta"
    }, [_c('li', [_c('i', {
      staticClass: "fa fa-user"
    }), _vm._v(" By "), _c('a', {
      attrs: {
        "href": post.meta.user.url
      }
    }, [_vm._v(_vm._s(post.meta.user.name))])]), _c('li', [_c('i', {
      staticClass: "fa fa-clock-o"
    }), _vm._v("Posted on " + _vm._s(post.meta.date))]), _c('li', [_c('i', {
      staticClass: "fa fa-tag"
    }), _vm._l((post.meta.tags), function(tag, index) {
      return _c('a', {
        attrs: {
          "href": tag.url
        }
      }, [(index) ? _c('span', [_vm._v(", ")]) : _vm._e(), _vm._v(_vm._s(tag.item))])
    })], 2), _c('li', [_c('i', {
      staticClass: "fa fa-comment-o"
    }), _c('a', {
      attrs: {
        "href": post.meta.comments.url
      }
    }, [_vm._v(_vm._s(post.meta.comments.count) + " Comments")])])]), _c('hr'), _c('a', {
      attrs: {
        "href": post.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": post.img,
        "alt": ""
      }
    })]), _c('hr'), _c('p', {
      domProps: {
        "innerHTML": _vm._s(post.content)
      }
    }), _c('a', {
      staticClass: "btn btn-primary",
      attrs: {
        "href": post.url
      }
    }, [_vm._v("Read More "), _c('i', {
      staticClass: "fa fa-angle-right"
    })]), _c('hr')])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "footer-widget mail-subscribe-widget"
  }, [_c('h4', [_vm._v("About"), _c('span', {
    staticClass: "head-line"
  })]), _c('p', [_vm._v("Learn about the project's history, meet the maintaining teams, and find out how to use the Feathers framework.")])]), _c('div', {
    staticClass: "footer-widget mail-subscribe-widget"
  }, [_c('h4', [_vm._v("Get in touch"), _c('span', {
    staticClass: "head-line"
  })]), _c('p', [_vm._v("Join our mailing list to stay up to date and get notices about our new releases!")]), _c('form', {
    staticClass: "subscribe"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "mail@example.com"
    }
  }), _c('input', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "value": "Send"
    }
  })])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._l((_vm.portfolio.items), function(item) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-4 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item1.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item1.img,
        "alt": ""
      }
    })]), _c('h3', [_c('a', {
      attrs: {
        "href": item.item1.url
      }
    }, [_vm._v(_vm._s(item.item1.title))])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.item1.content)
      }
    })]), _c('div', {
      staticClass: "col-md-4 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item2.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item2.img,
        "alt": ""
      }
    })]), _c('h3', [_c('a', {
      attrs: {
        "href": item.item2.url
      }
    }, [_vm._v(_vm._s(item.item2.title))])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.item2.content)
      }
    })]), _c('div', {
      staticClass: "col-md-4 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item3.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item3.img,
        "alt": ""
      }
    })]), _c('h3', [_c('a', {
      attrs: {
        "href": item.item3.url
      }
    }, [_vm._v(_vm._s(item.item3.title))])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.item3.content)
      }
    })])])
  }), _c('hr'), _c('portfolio-pager')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._l((_vm.services.panels.items), function(service) {
    return _c('div', {
      staticClass: "col-md-3 col-sm-6"
    }, [_c('div', {
      staticClass: "panel panel-default text-center"
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('span', {
      staticClass: "fa-stack fa-5x"
    }, [_c('i', {
      staticClass: "fa fa-square fa-stack-2x text-primary"
    }), _c('i', {
      class: ['fa', service.icon, 'fa-stack-1x', 'fa-inverse']
    })])]), _c('div', {
      staticClass: "panel-body"
    }, [_c('h4', [_vm._v(_vm._s(service.title))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    }), _c('a', {
      staticClass: "btn btn-primary",
      attrs: {
        "href": service.url
      }
    }, [_vm._v("Learn More")])])])])
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Services Panels")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row text-center"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": _vm.portfolio.pager.prev_url
    }
  }, [_vm._v("«")])]), _vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _c('li', [_c('a', {
    attrs: {
      "href": _vm.portfolio.pager.next_url
    }
  }, [_vm._v("»")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("5")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section welcome-panel"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.welcome.items), function(item) {
    return _c('div', {
      staticClass: "col-md-4"
    }, [_c('div', {
      class: ['panel', 'panel-' + item.class]
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h4', [_c('i', {
      class: ['fa', 'fa-fw', item.icon]
    }), _vm._v(" " + _vm._s(item.head))])]), _c('div', {
      staticClass: "panel-body"
    }, [_c('p', {
      domProps: {
        "innerHTML": _vm._s(item.body)
      }
    }), _c('a', {
      class: ['btn', 'btn-' + item.class],
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v("Learn More")])])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 blog-listing"
  }, [_c('blog-post-list'), _c('blog-pager')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('blog-search'), _c('blog-categories'), _c('blog-popular'), _c('blog-side-widget')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('blog-post-list'), _c('blog-pager')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Service Tabs")]), _c('ul', {
    staticClass: "nav nav-tabs nav-justified",
    attrs: {
      "id": "myTab"
    }
  }, _vm._l((_vm.services.tabs.items), function(service, index) {
    return _c('li', {
      class: {
        'active': !index
      }
    }, [_c('a', {
      attrs: {
        "href": '#' + service.id,
        "data-toggle": "tab"
      }
    }, [_c('i', {
      class: ['fa', service.icon]
    }), _vm._v(" " + _vm._s(service.title))])])
  })), _c('div', {
    staticClass: "tab-content",
    attrs: {
      "id": "myTabContent"
    }
  }, _vm._l((_vm.services.tabs.items), function(service, index) {
    return _c('div', {
      class: ['tab-pane', 'fade', {
        'active': !index,
        'in': !index
      }],
      attrs: {
        "id": service.id
      }
    }, [_c('h4', [_vm._v(_vm._s(service.title))]), _c('div', {
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container faqs"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('faq-blog-popular')], 1), _c('div', {
    staticClass: "col-lg-8"
  }, [_c('faq-accordion')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container portfolio-2-col"
  }, [_vm._l((_vm.portfolio.items), function(item) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item1.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item1.img,
        "alt": ""
      }
    })]), _c('h3', [_c('a', {
      attrs: {
        "href": item.item1.url
      }
    }, [_vm._v(_vm._s(item.item1.title))])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.item1.content)
      }
    })]), _c('div', {
      staticClass: "col-md-6 img-portfolio"
    }, [_c('a', {
      attrs: {
        "href": item.item2.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.item2.img,
        "alt": ""
      }
    })]), _c('h3', [_c('a', {
      attrs: {
        "href": item.item2.url
      }
    }, [_vm._v(_vm._s(item.item2.title))])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.item2.content)
      }
    })])])
  }), _c('hr'), _c('portfolio-pager')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('services-panels'), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-8"
  }, [_c('services-tabs')], 1), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('services-accordion')], 1)])]), _c('services-list'), _c('services-customers')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section service"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.services.home.title2))]), _c('h1', [_vm._v(_vm._s(_vm.services.home.title1))]), _c('p', [_vm._v(_vm._s(_vm.services.home.title3))])]), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.services.home.items), function(service) {
    return _c('div', {
      staticClass: "col-md-3 col-sm-6 service-box service-center flipInY animated",
      style: ({
        'visibility': 'visible',
        'animation-duration': service.duration,
        'animation-name': 'flipInY'
      }),
      attrs: {
        "data-wow-duration": service.duration
      }
    }, [_c('div', {
      staticClass: "service-icon"
    }, [_c('i', {
      class: ['fa', service.icon]
    })]), _c('div', {
      staticClass: "service-content"
    }, [_c('h4', [_vm._v(_vm._s(service.title))]), _c('p', [_vm._v(_vm._s(service.description))])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('services-panels'), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-8"
  }, [_c('services-tabs')], 1), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('services-accordion')], 1)])]), _c('services-list'), _c('services-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section section-customers"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "owl-carousel owl-carousel-featured",
    attrs: {
      "id": "customers"
    }
  }, _vm._l((_vm.customers), function(customer) {
    return _c('div', {
      staticClass: "item"
    }, [_c('a', {
      attrs: {
        "href": customer.url
      }
    }, [_c('img', {
      attrs: {
        "alt": "",
        "src": customer.img
      }
    })])])
  }))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Our Happy Customers")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._l((_vm.portfolio.items), function(item) {
    return _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-7"
    }, [_c('a', {
      attrs: {
        "href": item.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": item.img,
        "alt": ""
      }
    })])]), _c('div', {
      staticClass: "col-md-5"
    }, [_c('h3', [_vm._v(_vm._s(item.title))]), _c('h4', [_vm._v(_vm._s(item.subheading))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(item.content)
      }
    }), _c('portfolio-social'), _c('a', {
      staticClass: "btn btn-primary",
      attrs: {
        "href": item.url
      }
    }, [_vm._v("View Project")])], 1)]), _c('hr')])
  }), _c('portfolio-pager')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('error-404')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section testimonials"
  }, [_c('div', {
    staticClass: "container text-center"
  }, [_c('div', {
    staticClass: "title text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.testimonials.title2))]), _c('h1', [_vm._v(_vm._s(_vm.testimonials.title1))]), _c('p', [_vm._v(_vm._s(_vm.testimonials.title3))])]), _c('div', {
    staticClass: "owl-carousel owl-theme",
    attrs: {
      "id": "testimonials"
    }
  }, _vm._l((_vm.testimonials.items), function(testimonial) {
    return _c('div', {
      staticClass: "item"
    }, [_c('p', {
      staticClass: "s-12 m-12 l-8 center",
      domProps: {
        "innerHTML": _vm._s(testimonial.author_text)
      }
    }), _c('div', {
      staticClass: "testimonial-author"
    }, [_c('span', [_vm._v(_vm._s(testimonial.author_name))]), _vm._v(" - " + _vm._s(testimonial.author_position))])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _c('div', {
    staticClass: "col-md-4"
  }, _vm._l((_vm.services.list.items_1), function(service) {
    return _c('div', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "pull-left"
    }, [_c('span', {
      staticClass: "fa-stack fa-2x"
    }, [_c('i', {
      staticClass: "fa fa-square fa-stack-2x text-primary"
    }), _c('i', {
      class: ['fa', service.icon, 'fa-stack-1x', 'fa-inverse']
    })])]), _c('div', {
      staticClass: "media-body"
    }, [_c('h4', {
      staticClass: "media-heading"
    }, [_vm._v(_vm._s(service.title))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    })])])
  })), _c('div', {
    staticClass: "col-md-4"
  }, _vm._l((_vm.services.list.items_2), function(service) {
    return _c('div', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "pull-left"
    }, [_c('span', {
      staticClass: "fa-stack fa-2x"
    }, [_c('i', {
      staticClass: "fa fa-square fa-stack-2x text-primary"
    }), _c('i', {
      class: ['fa', service.icon, 'fa-stack-1x', 'fa-inverse']
    })])]), _c('div', {
      staticClass: "media-body"
    }, [_c('h4', {
      staticClass: "media-heading"
    }, [_vm._v(_vm._s(service.title))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    })])])
  })), _c('div', {
    staticClass: "col-md-4"
  }, _vm._l((_vm.services.list.items_3), function(service) {
    return _c('div', {
      staticClass: "media"
    }, [_c('div', {
      staticClass: "pull-left"
    }, [_c('span', {
      staticClass: "fa-stack fa-2x"
    }, [_c('i', {
      staticClass: "fa fa-square fa-stack-2x text-primary"
    }), _c('i', {
      class: ['fa', service.icon, 'fa-stack-1x', 'fa-inverse']
    })])]), _c('div', {
      staticClass: "media-body"
    }, [_c('h4', {
      staticClass: "media-heading"
    }, [_vm._v(_vm._s(service.title))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    })])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Service List")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nuxt-loading', {
    ref: "loading"
  }), (!_vm.nuxt.err) ? _c('nuxt-child') : _vm._e(), (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-widget instagram-widget"
  }, [_vm._m(0), _c('ul', {
    staticClass: "instagram-list"
  }, _vm._l((_vm.gallery.instagram), function(img) {
    return _c('li', [_c('a', {
      staticClass: "lightbox",
      attrs: {
        "href": img
      }
    }, [_c('img', {
      attrs: {
        "src": img,
        "alt": ""
      }
    })])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_vm._v("Insta "), _c('i', {
    staticClass: "fa fa-instagram"
  }), _vm._v(" Gram"), _c('span', {
    staticClass: "head-line"
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [(_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "error-page text-center"
  }, [_c('h1', [_vm._v("404")]), _c('h3', [_vm._v("File not Found")]), _c('p', [_vm._v(_vm._s(_vm.errMessage))]), _c('div', {
    staticClass: "text-center"
  }, [_c('nuxt-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back To Home")])], 1)])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section gallery"
  }, [_c('div', {
    staticClass: "title text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.gallery.title2))]), _c('h1', [_vm._v(_vm._s(_vm.gallery.title1))]), _c('p', [_vm._v(_vm._s(_vm.gallery.title3))])]), _c('div', {
    staticClass: "container gal-container"
  }, _vm._l((_vm.gallery.items), function(item) {
    return _c('div', {
      staticClass: "col-md-6 col-sm-12 co-xs-12 gal-item"
    }, [_c('div', {
      staticClass: "box"
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "data-toggle": "modal",
        "data-target": '#' + item.id
      }
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })]), _c('div', {
      staticClass: "modal fade",
      attrs: {
        "id": item.id,
        "tabindex": "-1",
        "role": "dialog"
      }
    }, [_c('div', {
      staticClass: "modal-dialog",
      attrs: {
        "role": "document"
      }
    }, [_c('div', {
      staticClass: "modal-content"
    }, [_vm._m(0, true), _c('div', {
      staticClass: "modal-body"
    }, [_c('img', {
      attrs: {
        "src": item.img
      }
    })]), _c('div', {
      staticClass: "col-md-12 description"
    }, [_c('h4', {
      domProps: {
        "innerHTML": _vm._s(item.description)
      }
    })])])])])])])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin-bottom": "-6px",
      "margin-top": "35px"
    }
  }, [_c('iframe', {
    attrs: {
      "width": "100%",
      "height": "400px",
      "frameborder": "0",
      "scrolling": "no",
      "marginheight": "0",
      "marginwidth": "0",
      "src": "https://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Accordion")]), _c('div', {
    staticClass: "panel-group",
    attrs: {
      "id": "accordion"
    }
  }, _vm._l((_vm.services.accordion.items), function(service, index) {
    return _c('div', {
      staticClass: "panel panel-default"
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h4', {
      staticClass: "panel-title"
    }, [_c('a', {
      staticClass: "accordion-toggle",
      attrs: {
        "data-toggle": "collapse",
        "data-parent": "#accordion",
        "href": '#' + service.id
      }
    }, [_vm._v(_vm._s(service.title))])])]), _c('div', {
      class: ['panel-collapse', 'collapse', { in: !index
      }],
      attrs: {
        "id": service.id
      }
    }, [_c('div', {
      staticClass: "panel-body",
      domProps: {
        "innerHTML": _vm._s(service.text)
      }
    })])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('div', {
    staticClass: "error-page text-center"
  }, [_c('h1', [_vm._v(_vm._s(_vm.error.statusCode))]), (!_vm.error.statusCode) ? _c('h3', [_vm._v(_vm._s(_vm.error.name))]) : _vm._e(), _c('p', [_vm._v(_vm._s(_vm.error.message))]), _c('div', {
    staticClass: "text-center"
  }, [_c('nuxt-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back To Home\n                            ")])], 1)])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('error-404')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "other-pages"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar'
    }],
    attrs: {
      "to": "/sidebar"
    }
  }, [_vm._v("Home")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-about'
    }],
    attrs: {
      "to": "/sidebar/about"
    }
  }, [_vm._v("About")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-services'
    }],
    attrs: {
      "to": "/sidebar/services"
    }
  }, [_vm._v("Services")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-portfolio-1'
    }],
    attrs: {
      "to": "/sidebar/portfolio-1"
    }
  }, [_vm._v("1 Column Portfolio")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-portfolio-2'
    }],
    attrs: {
      "to": "/sidebar/portfolio-2"
    }
  }, [_vm._v("2 Column Portfolio")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-portfolio-3'
    }],
    attrs: {
      "to": "/sidebar/portfolio-3"
    }
  }, [_vm._v("3 Column Portfolio")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-portfolio-4'
    }],
    attrs: {
      "to": "/sidebar/portfolio-4"
    }
  }, [_vm._v("4 Column Portfolio")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-portfolio-item'
    }],
    attrs: {
      "to": "/sidebar/portfolio-item"
    }
  }, [_vm._v("Single Portfolio Item")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-blog-home1'
    }],
    attrs: {
      "to": "/sidebar/blog-home1"
    }
  }, [_vm._v("Blog Home 1")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-blog-home2'
    }],
    attrs: {
      "to": "/sidebar/blog-home2"
    }
  }, [_vm._v("Blog Home 2")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-blog-post'
    }],
    attrs: {
      "to": "/sidebar/blog-post"
    }
  }, [_vm._v("Blog Post")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-full-width'
    }],
    attrs: {
      "to": "/sidebar/full-width"
    }
  }, [_vm._v("Full Width Page")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-faq'
    }],
    attrs: {
      "to": "/sidebar/faq"
    }
  }, [_vm._v("FAQ")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-error-404'
    }],
    attrs: {
      "to": "/sidebar/error-404"
    }
  }, [_vm._v("404")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-pricing'
    }],
    attrs: {
      "to": "/sidebar/pricing"
    }
  }, [_vm._v("Pricing Table")]), _c('nuxt-link', {
    class: ['list-group-item', {
      'active': _vm.$route.name == 'sidebar-contact'
    }],
    attrs: {
      "to": "/sidebar/contact"
    }
  }, [_vm._v("Contact")])], 1)]), _c('div', {
    staticClass: "col-md-9"
  }, [_c('nuxt-child')], 1)])]), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counters"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.team.summary), function(counter) {
    return _c('div', {
      staticClass: "col-sm-4"
    }, [_c('div', {
      staticClass: "counter-block"
    }, [_c('i', {
      class: ['fa', counter.icon]
    }), _c('h2', [_vm._v(_vm._s(counter.sum))]), _c('p', [_vm._v(_vm._s(counter.title))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('portfolio-slider')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('portfolio-item-content'), _c('portfolio-social')], 1)])]), _c('portfolio-related-projects')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "Contact-Info"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Contact Details")]), _c('div', {
    staticClass: "tex-contact"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.about.subscribe.about_us)
    }
  })]), _c('div', {
    staticClass: "block-contact"
  }, [_c('p', [_vm._v("Address :")]), _c('ul', [_c('li', [_c('i', {
    staticClass: "fa fa-map-marker"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.about.personal_data.contact.location))])])])]), _c('div', {
    staticClass: "block-contact"
  }, [_c('p', [_vm._v("Phone :")]), _c('ul', [_c('li', [_c('i', {
    staticClass: "fa fa-phone"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.about.personal_data.contact.phone))])]), _c('li', [_c('i', {
    staticClass: "fa fa-fax"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.about.personal_data.contact.fax))])])])]), _c('div', {
    staticClass: "block-contact"
  }, [_c('p', [_vm._v("Email :")]), _c('ul', [_c('li', [_c('i', {
    staticClass: "fa fa-envelope"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.about.personal_data.contact.email))])])])]), _c('div', {
    staticClass: "block-contact"
  }, [_c('p', [_vm._v("Website :")]), _c('ul', [_c('li', [_c('i', {
    staticClass: "fa fa-globe"
  }), _c('span', [_vm._v(" " + _vm._s(_vm.about.personal_data.contact.website))])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "portfolio"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('portfolio-col4-list'), _c('portfolio-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "portfolio"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('portfolio-col3-list'), _c('portfolio-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "portfolio"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('portfolio-col2-list'), _c('portfolio-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "portfolio"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('portfolio-col1-list'), _c('portfolio-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.about.business.img_url,
      "alt": _vm.about.business.img_alt
    }
  })]), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h1', [_vm._v(_vm._s(_vm.about.business.title))]), _c('h3', {
    staticStyle: {
      "margin": "8px 0"
    }
  }, [_vm._v(_vm._s(_vm.about.business.summary))]), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.about.business.text)
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "intro"
  }, [_c('h1', [_vm._v(_vm._s(_vm.team.info.title))]), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.team.info.description)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-group",
    attrs: {
      "id": "accordion"
    }
  }, _vm._l((_vm.faq.items), function(faq, index) {
    return _c('div', {
      staticClass: "panel panel-default"
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h4', {
      staticClass: "panel-title"
    }, [_c('a', {
      staticClass: "accordion-toggle",
      attrs: {
        "data-toggle": "collapse",
        "data-parent": "#accordion",
        "href": '#' + faq.id
      }
    }, [_vm._v(_vm._s(faq.title))])])]), _c('div', {
      class: ['panel-collapse', 'collapse', { in: !index
      }],
      attrs: {
        "id": faq.id
      }
    }, [_c('div', {
      staticClass: "panel-body",
      domProps: {
        "innerHTML": _vm._s(faq.text)
      }
    })])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section section-blog"
  }, [_c('div', {
    staticClass: "spacer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title text-center"
  }, [_c('span', [_vm._v(_vm._s(_vm.blog.title2))]), _c('h1', [_vm._v(_vm._s(_vm.blog.title1))]), _c('p', [_vm._v(_vm._s(_vm.blog.title3))])]), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.blog.posts), function(post) {
    return _c('div', {
      staticClass: "col-sm-4"
    }, [_c('div', {
      staticClass: "blog-post post-image"
    }, [_c('a', {
      staticClass: "blog-title",
      attrs: {
        "href": post.url
      }
    }, [_c('img', {
      staticClass: "img-responsive",
      attrs: {
        "src": post.img,
        "alt": ""
      }
    }), _vm._v(" " + _vm._s(post.title) + "\n                        ")]), _c('span', {
      staticClass: "small-text blog-time"
    }, [_vm._v(_vm._s(post.date))]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(post.content)
      }
    })])])
  })), _c('div', {
    staticClass: "text-center blog-btns"
  }, [_c('a', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "href": _vm.blog.url
    }
  }, [_vm._v("view blog")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "widget widget-categories"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Categories")]), _c('ul', _vm._l((_vm.blog.categories), function(category) {
    return _c('li', [_c('a', {
      attrs: {
        "href": category.url
      }
    }, [_vm._v(_vm._s(category.type))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "widget widget-categories"
  }, [_c('h2', {
    staticClass: "page-header",
    staticStyle: {
      "margin-top": "0"
    }
  }, [_vm._v("Blog Search")]), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "blog-search",
      "type": "text"
    }
  }), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('contact-form'), _c('contact-info')], 1)]), _c('contact-map')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "copyright-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('p', [_vm._v(_vm._s(_vm.about.personal_data.copyright) + "    |    Designed With "), _c('i', {
    staticClass: "fa fa-heart red"
  }), _vm._v(" By\n                "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": _vm.about.personal_data.designed_with_url
    }
  }, [_vm._v(" " + _vm._s(_vm.about.personal_data.designed_with))])])]), _c('div', {
    staticClass: "col-md-6"
  }, [_c('ul', {
    staticClass: "footer-nav"
  }, [_vm._m(0), _vm._l((_vm.footer_nav), function(item) {
    return _c('li', [_c('a', {
      attrs: {
        "href": item.url
      }
    }, [_vm._v(_vm._s(item.title))])])
  })], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('i', {
    staticClass: "fa fa-home"
  })])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "social-widget portfolio-share",
    staticStyle: {
      "margin-top": "19px"
    }
  }, [_c('h4', {
    staticStyle: {
      "margin": "0 0 7px"
    }
  }, [_vm._v(" Share This:")]), _c('ul', {
    staticClass: "social-icons"
  }, _vm._l((_vm.socials.share), function(val, key) {
    return _c('li', [_c('a', {
      class: key,
      attrs: {
        "href": val.url
      }
    }, [_c('i', {
      class: ['fa', val.icon]
    })])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('div', {
    attrs: {
      "id": "carousel"
    }
  }, [_c('home-slider')], 1), _c('home-welcome'), _c('home-service'), _c('home-gallery'), _c('home-team'), _c('home-blog'), _c('home-testimonials'), _c('home-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nuxt')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.blog.posts), function(post) {
    return _c('div', [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-1 text-center"
    }, [_c('p', [_c('i', {
      class: ['fa', 'fa-4x', post.icon]
    })]), _c('p', [_vm._v(_vm._s(post.date))])]), _c('div', {
      staticClass: "col-md-5"
    }, [_c('a', {
      attrs: {
        "href": post.url
      }
    }, [_c('img', {
      staticClass: "img-responsive img-hover",
      attrs: {
        "src": post.img,
        "alt": ""
      }
    })])]), _c('div', {
      staticClass: "col-md-6"
    }, [_c('h3', [_c('a', {
      attrs: {
        "href": post.url
      }
    }, [_vm._v(_vm._s(post.title))])]), _c('ul', {
      staticClass: "post-meta"
    }, [_c('li', [_c('i', {
      staticClass: "fa fa-user"
    }), _vm._v(" By "), _c('a', {
      attrs: {
        "href": post.meta.user.url
      }
    }, [_vm._v(_vm._s(post.meta.user.name))])]), _c('li', [_c('i', {
      staticClass: "fa fa-clock-o"
    }), _vm._v(" Posted on " + _vm._s(post.meta.date))]), _c('li', [_c('i', {
      staticClass: "fa fa-tag"
    }), _vm._l((post.meta.tags), function(tag, index) {
      return _c('a', {
        attrs: {
          "href": tag.url
        }
      }, [(index) ? _c('span', [_vm._v(", ")]) : _vm._e(), _vm._v(_vm._s(tag.item))])
    })], 2), _c('li', [_c('i', {
      staticClass: "fa fa-comment-o"
    }), _c('a', {
      attrs: {
        "href": post.meta.comments.url
      }
    }, [_vm._v(_vm._s(post.meta.comments.count) + " Comments")])])]), _c('p', {
      domProps: {
        "innerHTML": _vm._s(post.content)
      }
    }), _c('a', {
      staticClass: "btn btn-primary",
      attrs: {
        "href": post.url
      }
    }, [_vm._v("Read More "), _c('i', {
      staticClass: "fa fa-angle-right"
    })])])]), _c('hr')])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "other-pages"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container faqs"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('faq-blog-popular')], 1), _c('div', {
    staticClass: "col-lg-8"
  }, [_c('faq-accordion')], 1)])]), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-widget contact-widget"
  }, [_vm._m(0), _c('ul', [_c('li', [_vm._m(1), _vm._v(" " + _vm._s(_vm.about.personal_data.contact.location) + " ")]), _c('li', [_vm._m(2), _vm._v(" " + _vm._s(_vm.about.personal_data.contact.phone))]), _c('li', [_vm._m(3), _vm._v(" " + _vm._s(_vm.about.personal_data.contact.email))]), _c('li', [_vm._m(4), _vm._v(" " + _vm._s(_vm.about.personal_data.contact.website))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_vm._v("Contact Us"), _c('span', {
    staticClass: "head-line"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "fa fa-map-marker"
  }), _vm._v(" Location:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" Phone Number:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "fa fa-envelope-o"
  }), _vm._v(" Email:")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "fa fa-globe"
  }), _vm._v(" Website:")])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('contact-form'), _c('contact-info')], 1)]), _c('contact-map')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "blog"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-8"
  }, [_c('blog-post-content')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('blog-search'), _c('blog-categories'), _c('blog-popular'), _c('blog-side-widget')], 1)])]), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-8"
  }, [_c('h2', {
    staticClass: "page-header"
  }, [_vm._v("Send us a Message")]), _c('form', {
    attrs: {
      "name": "sentMessage",
      "id": "contactForm",
      "novalidate": ""
    }
  }, [_c('div', {
    staticClass: "control-group form-group"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('label', [_vm._v("Full Name:")]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "name",
      "required": "",
      "data-validation-required-message": "Please enter your name."
    }
  }), _c('p', {
    staticClass: "help-block"
  })])]), _c('div', {
    staticClass: "control-group form-group"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('label', [_vm._v("Phone Number:")]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "tel",
      "id": "phone",
      "required": "",
      "data-validation-required-message": "Please enter your phone number."
    }
  })])]), _c('div', {
    staticClass: "control-group form-group"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('label', [_vm._v("Email Address:")]), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email",
      "required": "",
      "data-validation-required-message": "Please enter your email address."
    }
  })])]), _c('div', {
    staticClass: "control-group form-group"
  }, [_c('div', {
    staticClass: "controls"
  }, [_c('label', [_vm._v("Message:")]), _c('textarea', {
    staticClass: "form-control",
    staticStyle: {
      "resize": "none"
    },
    attrs: {
      "id": "message",
      "required": "",
      "data-validation-required-message": "Please enter your message",
      "maxlength": "999"
    }
  })])]), _c('div', {
    attrs: {
      "id": "success"
    }
  }), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Send Message")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation'), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', [_c('about-business'), _c('about-team'), _c('about-purchase'), _c('about-customers')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section sub-header"
  }, [_c('div', {
    staticClass: "container bounceInRight animated",
    staticStyle: {
      "visibility": "visible",
      "animation-duration": "4s",
      "animation-name": "bounceInRight"
    },
    attrs: {
      "data-wow-duration": "4s"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h1', {
    staticClass: "page-header"
  }, [_vm._v(_vm._s(_vm.title) + "\n                    "), _c('small', [_vm._v(_vm._s(_vm.description))])]), _c('ol', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "fa fa-home"
  }), _vm._v(" Home")])], 1), (_vm.$route.name !== 'index') ? _c('li', {
    staticClass: "active"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('p', [_vm._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.")]), _c('p', [_vm._v("\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis impedit rerum totam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.")]), _c('h1', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h2', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h3', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h4', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h5', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('h6', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae repudiandae fugiat illo")]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                    ")]), _c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                    ")]), _c('button', {
    staticClass: "btn btn-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                    ")]), _c('button', {
    staticClass: "btn btn-info btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                    ")]), _c('button', {
    staticClass: "btn btn-warning btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                    ")]), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                    ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                    ")]), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                    ")]), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                    ")]), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                    ")]), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                    ")]), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                    ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                    ")]), _c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                    ")]), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                    ")]), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                    ")]), _c('button', {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                    ")]), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                    ")])]), _c('p', [_c('button', {
    staticClass: "btn btn-default btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Default\n                    ")]), _c('button', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary\n                    ")]), _c('button', {
    staticClass: "btn btn-success btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success\n                    ")]), _c('button', {
    staticClass: "btn btn-info btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info\n                    ")]), _c('button', {
    staticClass: "btn btn-warning btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning\n                    ")]), _c('button', {
    staticClass: "btn btn-danger btn-xs",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger\n                    ")])])])])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "blog"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('blog-post-list'), _c('blog-pager')], 1), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-navigation', {
    attrs: {
      "groupMenu": "blog"
    }
  }), _c('page-breadcrumbs', {
    attrs: {
      "title": _vm.title,
      "description": _vm.description
    }
  }), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 blog-listing"
  }, [_c('blog-post-list'), _c('blog-pager')], 1), _c('div', {
    staticClass: "col-md-4"
  }, [_c('blog-search'), _c('blog-categories'), _c('blog-popular'), _c('blog-side-widget')], 1)])]), _c('page-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section section-team"
  }, [_c('div', {
    staticClass: "spacer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-5"
  }, [_c('team-info')], 1), _c('div', {
    staticClass: "col-sm-6 col-sm-offset-1"
  }, [_c('team-summary')], 1)]), _c('team-members')], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actions.js": 55,
	"./getters.js": 56,
	"./index.js": 216,
	"./mutation-types.js": 57
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 417;


/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(93);



var debug = __webpack_require__(94)('nuxt:render');
debug.color = 4; // force blue color






var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* app */]);

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)


// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ __webpack_exports__["default"] = function (context) {
  // Add store to the context
  context.store = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */];
  // Nuxt object
  context.nuxt = { data: [], error: null, state: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_4__index__["c" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_4__index__["c" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */]._actions && __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */]._actions.nuxtServerInit ? __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].dispatch('nuxtServerInit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["omit"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getContext */])(context), 'redirect', 'error')) : null;
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a)) promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();

  return promise.then(function () {
    // Sanitize Components
    Components = Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      return Component;
    });
    // Set layout
    return _app.setLayout(Components.length ? Components[0].options.layout : '');
  }).then(function () {
    // Call .validate()
    var isValid = true;
    Components.forEach(function (Component) {
      if (!isValid) return;
      if (typeof Component.options.validate !== 'function') return;
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query || {}
      });
    });
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false;
      }
      // Call the 404 error by making the Components array empty
      Components = [];
      return _app;
    }
    // Call data & fetch hooks on components matched by the route.
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component) {
      var promises = [];
      var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getContext */])(context);
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path });
      context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;
    // Add the state from the vuex store
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
    return _app;
  }).catch(function (error) {
    if (error && error instanceof Error) {
      error = { statusCode: 500, message: error.message };
    }
    context.nuxt.error = context.error(error);
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
    return _app;
  });
};

/***/ })
/******/ ]);