module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "+lRa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("s+ck");
var step = __webpack_require__("JFuE");
var Iterators = __webpack_require__("sipE");
var toIObject = __webpack_require__("aput");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("5Kld")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/aHj":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("G1Wo");


/***/ }),

/***/ "/ab8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("8+AD");
module.exports = __webpack_require__("p9MR").Object.keys;


/***/ }),

/***/ "/wxW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("Q8jq");
var toObject = __webpack_require__("AYVP");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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

/***/ "0lY0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("2jw7");
var has = __webpack_require__("Q8jq");
var DESCRIPTORS = __webpack_require__("fZVS");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var META = __webpack_require__("YndH").KEY;
var $fails = __webpack_require__("14Ie");
var shared = __webpack_require__("d3Kl");
var setToStringTag = __webpack_require__("wNhr");
var uid = __webpack_require__("ewAR");
var wks = __webpack_require__("G1Wo");
var wksExt = __webpack_require__("/aHj");
var wksDefine = __webpack_require__("CgoH");
var enumKeys = __webpack_require__("0tY/");
var isArray = __webpack_require__("taoM");
var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var toObject = __webpack_require__("AYVP");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var createDesc = __webpack_require__("+EWW");
var _create = __webpack_require__("cQhG");
var gOPNExt = __webpack_require__("Vl3p");
var $GOPD = __webpack_require__("Ym6j");
var $GOPS = __webpack_require__("McIs");
var $DP = __webpack_require__("OtwA");
var $keys = __webpack_require__("djPm");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("2HZK").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("1077").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("tFdt")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("jOCL")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0tY/":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Q0q4");


/***/ }),

/***/ "1077":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lt0m");

/***/ }),

/***/ "2HZK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("JpU4");
var hiddenKeys = __webpack_require__("ACkF").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "3QTP":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Ev2V");
__webpack_require__("k8Q4");
__webpack_require__("tCzM");
__webpack_require__("W1+3");
__webpack_require__("tgSc");
__webpack_require__("xglJ");
module.exports = __webpack_require__("p9MR").Promise;


/***/ }),

/***/ "3s9C":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var isObject = __webpack_require__("b4pn");
var newPromiseCapability = __webpack_require__("A8op");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "3wqb":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("vCXk");
var invoke = __webpack_require__("GWyB");
var html = __webpack_require__("EDr4");
var cel = __webpack_require__("Ev2A");
var global = __webpack_require__("2jw7");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("bh8V")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "40Gw":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperty: __webpack_require__("OtwA").f });


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Vphk");

/***/ }),

/***/ "5Kld":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var $export = __webpack_require__("0T/a");
var redefine = __webpack_require__("IxLI");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var $iterCreate = __webpack_require__("XOdh");
var setToStringTag = __webpack_require__("wNhr");
var getPrototypeOf = __webpack_require__("/wxW");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "7FvJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("40Gw");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "8+AD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("AYVP");
var $keys = __webpack_require__("djPm");

__webpack_require__("wWUK")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8Vlj":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("fYqa");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var Iterators = __webpack_require__("sipE");
module.exports = __webpack_require__("p9MR").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9Wj7":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var anObject = __webpack_require__("D4ny");
var getKeys = __webpack_require__("djPm");

module.exports = __webpack_require__("fZVS") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "A6DK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return resetAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return resetButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return divIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pcDivIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mobileMuteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pcShowButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pcMuteButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  colors: {
    basicWhite: '#ffffff',
    basicLabelColor: '#5D5D5D',
    lightLabelColor: '#7A7A7A',
    basicGray: '#ececec',
    darkGray: '#bcbcbc',
    iconGray: '#6E6E6E',
    blackTransparent: 'rgba(0, 0, 0, .5)',
    muterGreen: '#86F3B0',
    muterLightGreen: '#AFFFCE',
    blockerBlue: '#8DCAFF',
    unmutedUserBg: '#C7FFDF',
    buttonLabelColor: '#00535D',
    unmuteButtonColor: '#AAF9CC',
    muteButtonColor: '#FF5B62',
    showButtonColor: '#AAF9EE',
    hideButtonColor: '#FF91AB',
    twitterBlue: '#58C6E8',
    twitterShadowBlue: '#3D89A7',
    facebookBlue: '#7EA7E5'
  },
  fonts: {
    fwBold: 700,
    fwMedium: 500,
    fwNormal: 400,
    fwLight: 300,
    engHeadFont: "'brush-script-std', sans-serif"
  },
  sizes: {
    menuAmimationDistance: 220,
    muterMenuWidth: 300,
    pcHeaderHeight: '280px',
    pcReadmoreHeight: '100px'
  },
  z_index: {
    ZI_carouselArrow: 9999
  }
};
const resetAnchor = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:inherit;text-decoration:none;"]);
const resetButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["appearance:none;background-color:transparent;border:0;padding:0;&:focus{outline:0;}"]);
const divIcon = iconUrl => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:url(", ") center center / contain no-repeat;flex-shrink:0;height:18px;margin-right:3px;width:25px;"], iconUrl);
const pcDivIcon = iconUrl => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:url(", ") center center / contain no-repeat;height:25px;margin-right:5px;width:35px;"], iconUrl);
/**
 * ミュートもしくはミュート解除を行うモバイル用のボタン
 * @param bgColor ボタンの背景色
 * @param labelColor ボタン中のラベルの色　デフォルト値あり
 */

const mobileMuteButton = (bgColor, labelColor = theme.colors.buttonLabelColor) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", ";background-color:", ";color:", ";display:flex;height:30px;justify-content:center;white-space:nowrap;width:50%;"], resetButton, bgColor, labelColor);
const pcShowButton = () => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;font-size:1.25rem;height:50px;justify-content:flex-start;padding-left:680px;white-space:nowrap;width:100%;"]);
const pcMuteButton = (bgColor, labelColor) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", " align-items:center;background-color:", ";color:", ";cursor:pointer;display:flex;font-size:1.25rem;height:50px;padding-left:15px;padding-top:5px;white-space:nowrap;width:200px;"], resetButton, bgColor, labelColor);

/***/ }),

/***/ "A8op":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("8v5W");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "ACkF":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "AYVP":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "CgoH":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var LIBRARY = __webpack_require__("tFdt");
var wksExt = __webpack_require__("/aHj");
var defineProperty = __webpack_require__("OtwA").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EDr4":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("2jw7").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Ev2V":
/***/ (function(module, exports) {



/***/ }),

/***/ "FVUN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_CHANGE_MUTED_USERS */
/* unused harmony export setMutedUsers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestMutedUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return requestUnmuteUser; });
/* harmony import */ var _page_errMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u4nc");
/* harmony import */ var _meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZW3t");
/* harmony import */ var _meta_muteRequestStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WM4y");
/* harmony import */ var _muted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wryu");
/* harmony import */ var _modules_requestToServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iHFp");






const ACTION_CHANGE_MUTED_USERS = "CHANGE_MUTED_USERS";
const setMutedUsers = mutedUsers => ({
  type: ACTION_CHANGE_MUTED_USERS,
  payload: mutedUsers
});
/**
 * ミュートユーザー一覧APIにリクエストを発行し、結果をdispatchする
 * @param {string} endpoint APIエンドポイント
 * @param {Dispatch} dispatch
 * @param {object} params 追加で渡すパラメータ　デフォルトは{}
 */

const requestMutedUsers = (endpoint, dispatch, params = {}) => {
  dispatch(Object(_meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_1__[/* startUserRequest */ "c"])());
  Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(endpoint, params).then(({
    data
  }) => {
    if ("code" in data[0]) {
      dispatch(Object(_page_errMessage__WEBPACK_IMPORTED_MODULE_0__[/* setErrMessage */ "b"])(data[0].message));
      dispatch(Object(_meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_1__[/* endUserRequest */ "b"])());
      return;
    } // 全てミュートフラグを立てた配列をミュートの初期値としてdispatch
    // ユーザーリストよりも先にこちらを作る（依存しているため）


    const initializedMuted = Array(data.length).fill(true);
    dispatch(Object(_muted__WEBPACK_IMPORTED_MODULE_3__[/* setMuted */ "b"])(initializedMuted));
    dispatch(Object(_meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_1__[/* endUserRequest */ "b"])()); // ミュートユーザーをstoreに登録

    dispatch(setMutedUsers(data));
  });
};
const requestUnmuteUser = (endpoint, screenName, index, dispatch) => {
  dispatch(Object(_meta_muteRequestStatus__WEBPACK_IMPORTED_MODULE_2__[/* startMuteRequest */ "c"])());
  Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(endpoint, {}).then(({
    data
  }) => {
    // ミュート解除に成功した場合はユーザー情報objectが返される
    // スクリーンネームを照合して成否を確認する
    dispatch(Object(_meta_muteRequestStatus__WEBPACK_IMPORTED_MODULE_2__[/* endMuteRequest */ "b"])());

    if (data.screen_name === screenName) {
      dispatch(Object(_muted__WEBPACK_IMPORTED_MODULE_3__[/* toggleMuted */ "c"])(index));
    }
  });
};

const mutedUsers = (state = [], action) => {
  switch (action.type) {
    case ACTION_CHANGE_MUTED_USERS:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (mutedUsers);

/***/ }),

/***/ "G+Sp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var dP = __webpack_require__("OtwA");
var DESCRIPTORS = __webpack_require__("fZVS");
var SPECIES = __webpack_require__("G1Wo")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "G1Wo":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("d3Kl")('wks');
var uid = __webpack_require__("ewAR");
var Symbol = __webpack_require__("2jw7").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "G492":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "GWyB":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
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
  } return fn.apply(that, args);
};


/***/ }),

/***/ "IxLI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jOCL");


/***/ }),

/***/ "JBiz":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aput");
var toLength = __webpack_require__("pasi");
var toAbsoluteIndex = __webpack_require__("G492");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "JFuE":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KgSv");

/***/ }),

/***/ "JpU4":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("Q8jq");
var toIObject = __webpack_require__("aput");
var arrayIndexOf = __webpack_require__("JBiz")(false);
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KgSv":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("STjA");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "Kk5c":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("qBJy");
var defined = __webpack_require__("5foh");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "MC82":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("D4ny");
var aFunction = __webpack_require__("8v5W");
var SPECIES = __webpack_require__("G1Wo")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "McIs":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "NtxZ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var macrotask = __webpack_require__("3wqb").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("bh8V")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "OQSD":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("jOCL");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "PpGW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TwAppsConst = {
  STORAGE_TOKEN: 'key',
  // STYLE_DARK_GRAY: '#bcbcbc',
  IMG_DIR_PATH: 'img',
  USER_INFO_ENDPOINT: '/user_info',
  MUTED_USERS_ENDPOINT: '/muted_list',
  UNMUTE_USER_ENDPOINT: '/unmute',
  MUTE_USER_ENDPOINT: '/mute',
  APPNAME_MUTER: 'MuteReminder',
  APPNAME_BLOCKER: 'BlockReminder',

  /*
    ==============================================
     アクション名
    ==============================================
  */
  ACTION_CHANGE_BASE_URL: 'CHANGE_BASE_URL',
  ACTION_CHANGE_ISMUTERMENU_OPENED: 'CHANGE_ISMUTERMENU_OPENED',
  ACTION_CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  ACTION_CHANGE_MUTED_USERS: 'CHANGE_MUTED_USERS',
  ACTION_TOGGLE_MUTED: 'TOGGLE_MUTED',
  ACTION_CHANGE_MUTED: 'CHANGE_MUTED',
  ACTION_USER_REQUEST_START: 'USER_REQUEST_START',
  ACTION_USER_REQUEST_END: 'USER_REQUEST_END',
  ACTION_MUTE_REQUEST_START: 'MUTE_REQUEST_START',
  ACTION_MUTE_REQUEST_END: 'MUTE_REQUEST_END',
  ACTION_CHANGE_ERR_MESSAGE: 'CHANG_ERR_MESSAGE',
  ACTION_CHANGE_POPUP_MESSAGE: 'CHANGE_POPUP_MESSAGE',
  HEADER_MENU_INITIAL: 'initial',
  HEADER_MENU_CLOSED: 'closed',
  HEADER_MENU_OPENED: 'opened',
  SHOW_TWEETS_INITIAL: 'initial',
  SHOW_TWEETS_CLOSED: 'closed',
  SHOW_TWEETS_OPENED: 'opened',
  REQUEST_STATUS_COMPLETE: 'complete',
  REQUEST_STATUS_LOADING: 'loading'
};
/* harmony default export */ __webpack_exports__["a"] = (TwAppsConst);

/***/ }),

/***/ "Q0q4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./src/redux/reducers/resource/userInfo.ts
var userInfo = __webpack_require__("qUPm");

// EXTERNAL MODULE: ./src/redux/reducers/resource/mutedUsers.ts
var mutedUsers = __webpack_require__("FVUN");

// EXTERNAL MODULE: ./src/redux/reducers/page/isMuterMenuOpened.ts
var isMuterMenuOpened = __webpack_require__("WOYG");

// EXTERNAL MODULE: ./src/redux/reducers/resource/muted.ts
var muted = __webpack_require__("wryu");

// EXTERNAL MODULE: ./src/redux/reducers/meta/muteRequestStatus.ts
var muteRequestStatus = __webpack_require__("WM4y");

// EXTERNAL MODULE: ./src/redux/reducers/meta/userRequestStatus.ts
var userRequestStatus = __webpack_require__("ZW3t");

// EXTERNAL MODULE: ./src/redux/reducers/page/errMessage.ts
var errMessage = __webpack_require__("u4nc");

// CONCATENATED MODULE: ./src/redux/reducers/page/popUpMessage.ts
const ACTION_CHANGE_POPUP_MESSAGE = 'CHANGE_POPUP_MESSAGE'; // ポップアップ表示するメッセージの設定

const setPopUpMessage = message => dispatch => {
  dispatch({
    type: ACTION_CHANGE_POPUP_MESSAGE,
    message
  });
}; // ユーザーに通知する小さなメッセージ
// なにもない場合はから文字列

const popUpMessage = (state = '', action) => {
  switch (action.type) {
    case ACTION_CHANGE_POPUP_MESSAGE:
      return action.message;

    default:
      return state;
  }
};

/* harmony default export */ var page_popUpMessage = (popUpMessage);
// EXTERNAL MODULE: ./src/redux/reducers/meta/basePath.ts
var basePath = __webpack_require__("QmTT");

// EXTERNAL MODULE: ./src/redux/reducers/meta/appName.ts
var appName = __webpack_require__("mezj");

// CONCATENATED MODULE: ./src/redux/reducers/index.ts











/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  appName: appName["a" /* default */],
  basePath: basePath["a" /* default */],
  isMuterMenuOpened: isMuterMenuOpened["a" /* default */],
  userInfo: userInfo["a" /* default */],
  mutedUsers: mutedUsers["a" /* default */],
  muted: muted["a" /* default */],
  muteRequestStatus: muteRequestStatus["a" /* default */],
  userRequestStatus: userRequestStatus["a" /* default */],
  errMessage: errMessage["a" /* default */],
  popUpMessage: page_popUpMessage
}));
// EXTERNAL MODULE: ./src/components/TwApps/TwAppsConst.ts
var TwAppsConst = __webpack_require__("PpGW");

// CONCATENATED MODULE: ./src/redux/store/index.ts





const store_initialState = {
  appName: "",
  basePath: "",
  isMuterMenuOpened: true,
  userInfo: {},
  mutedUsers: [],
  muted: [],
  muteRequestStatus: TwAppsConst["a" /* default */].REQUEST_STATUS_COMPLETE,
  userRequestStatus: TwAppsConst["a" /* default */].REQUEST_STATUS_COMPLETE,
  errMessage: "",
  popUpMessage: ""
};
function initializeStore() {
  return Object(external_redux_["createStore"])(reducers, store_initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}
;
// CONCATENATED MODULE: ./src/modules/with-redux-store.js








var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }



const isServer = true;
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  //サーバーの時は必ずストアを生成する
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_store = (App => {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread({}, appProps, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./src/modules/styles/theme.ts
var theme = __webpack_require__("A6DK");

// EXTERNAL MODULE: external "styled-reset"
var external_styled_reset_ = __webpack_require__("x6ND");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_);

// CONCATENATED MODULE: ./src/modules/styles/GlobalStyle.ts


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  ${external_styled_reset_default.a}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 700;
    src: url('../fonts/NotoSans_bold.woff');
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 500;
    src: url('../fonts/NotoSans_medium.woff');
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 400;
    src: url('../fonts/NotoSans_regular.woff');
  }

  body {
    color: ${({
  theme
}) => theme.colors.basicLabelColor};
    font-family: 'Noto Sans', 'Noto ヒラギノ角ゴ ProN', '游ゴシック Medium', 'YuGothic', 'YuGothicM', 'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', sans-serif;
  }
`;
/* harmony default export */ var styles_GlobalStyle = (GlobalStyle);
// CONCATENATED MODULE: ./src/pages/_app.jsx
var _app_jsx = external_react_default.a.createElement;








class _app_MyApp extends app_default.a {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return _app_jsx(external_react_redux_["Provider"], {
      store: reduxStore
    }, _app_jsx(external_styled_components_["ThemeProvider"], {
      theme: theme["h" /* theme */]
    }, _app_jsx(styles_GlobalStyle, {
      props: theme["h" /* theme */]
    }), _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(_app_MyApp));

/***/ }),

/***/ "Q2zc":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("G1Wo")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "QmTT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_BASEPATH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setBasePath; });
const SET_BASEPATH = 'SET_BASEPATH';
const setBasePath = basePath => ({
  type: SET_BASEPATH,
  payload: basePath
});

const basePath = (state = "", action) => {
  switch (action.type) {
    case SET_BASEPATH:
      return action.payload;

    default:
      return state;
  }

  ;
};

/* harmony default export */ __webpack_exports__["a"] = (basePath);

/***/ }),

/***/ "STjA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("aput");
var $getOwnPropertyDescriptor = __webpack_require__("Ym6j").f;

__webpack_require__("wWUK")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ge64");

/***/ }),

/***/ "VgtN":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("vCXk");
var call = __webpack_require__("nJOo");
var isArrayIter = __webpack_require__("widk");
var anObject = __webpack_require__("D4ny");
var toLength = __webpack_require__("pasi");
var getIterFn = __webpack_require__("8Vlj");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "Vl3p":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("aput");
var gOPN = __webpack_require__("2HZK").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "Vphk":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("0lY0");
module.exports = __webpack_require__("p9MR").Object.getOwnPropertySymbols;


/***/ }),

/***/ "W1+3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("tFdt");
var global = __webpack_require__("2jw7");
var ctx = __webpack_require__("vCXk");
var classof = __webpack_require__("fYqa");
var $export = __webpack_require__("0T/a");
var isObject = __webpack_require__("b4pn");
var aFunction = __webpack_require__("8v5W");
var anInstance = __webpack_require__("sLxe");
var forOf = __webpack_require__("VgtN");
var speciesConstructor = __webpack_require__("MC82");
var task = __webpack_require__("3wqb").set;
var microtask = __webpack_require__("NtxZ")();
var newPromiseCapabilityModule = __webpack_require__("A8op");
var perform = __webpack_require__("dcnA");
var userAgent = __webpack_require__("ihIJ");
var promiseResolve = __webpack_require__("3s9C");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("G1Wo")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("OQSD")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("wNhr")($Promise, PROMISE);
__webpack_require__("G+Sp")(PROMISE);
Wrapper = __webpack_require__("p9MR")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("Q2zc")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "WM4y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_MUTE_REQUEST_START */
/* unused harmony export ACTION_MUTE_REQUEST_END */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return startMuteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return endMuteRequest; });
/* harmony import */ var _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PpGW");

const ACTION_MUTE_REQUEST_START = "MUTE_REQUEST_START";
const ACTION_MUTE_REQUEST_END = "MUTE_REQUEST_END";
// ミュートAPIへのリクエストステータス
const startMuteRequest = () => ({
  type: ACTION_MUTE_REQUEST_START
}); // ミュートAPIへのリクエストステータス

const endMuteRequest = () => ({
  type: ACTION_MUTE_REQUEST_END
});

const muteRequestStatus = (state = _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_COMPLETE, action) => {
  switch (action.type) {
    case ACTION_MUTE_REQUEST_START:
      return _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_LOADING;

    case ACTION_MUTE_REQUEST_END:
      return _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_COMPLETE;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (muteRequestStatus);

/***/ }),

/***/ "WOYG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_CHANGE_ISMUTERMENU_OPENED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setIsMuterMenuOpened; });
const ACTION_CHANGE_ISMUTERMENU_OPENED = 'CHANGE_ISMUTERMENU_OPENED';
const setIsMuterMenuOpened = isMuterMenuOpened => ({
  type: ACTION_CHANGE_ISMUTERMENU_OPENED,
  payload: isMuterMenuOpened
});

// メニュー開閉状態
const isMuterMenuOpened = (state = false, action) => {
  switch (action.type) {
    case ACTION_CHANGE_ISMUTERMENU_OPENED:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (isMuterMenuOpened);

/***/ }),

/***/ "XOdh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("cQhG");
var descriptor = __webpack_require__("+EWW");
var setToStringTag = __webpack_require__("wNhr");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("jOCL")(IteratorPrototype, __webpack_require__("G1Wo")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "XY+j":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("d3Kl")('keys');
var uid = __webpack_require__("ewAR");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aVTH");

/***/ }),

/***/ "Ym6j":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("1077");
var createDesc = __webpack_require__("+EWW");
var toIObject = __webpack_require__("aput");
var toPrimitive = __webpack_require__("LqFA");
var has = __webpack_require__("Q8jq");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("fZVS") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "YndH":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ewAR")('meta');
var isObject = __webpack_require__("b4pn");
var has = __webpack_require__("Q8jq");
var setDesc = __webpack_require__("OtwA").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("14Ie")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "ZW3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_USER_REQUEST_START */
/* unused harmony export ACTION_USER_REQUEST_END */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return startUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return endUserRequest; });
/* harmony import */ var _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PpGW");

const ACTION_USER_REQUEST_START = 'USER_REQUEST_START';
const ACTION_USER_REQUEST_END = 'USER_REQUEST_END';
// ユーザーAPIへのリクエストステータス
const startUserRequest = () => ({
  type: ACTION_USER_REQUEST_START
}); // ユーザーAPIへのリクエストステータス

const endUserRequest = () => ({
  type: ACTION_USER_REQUEST_END
}); // ユーザー情報は最初に必ずロードするため、初期ステータスはロード中

const userRequestStatus = (state = _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_LOADING, action) => {
  switch (action.type) {
    case ACTION_USER_REQUEST_START:
      return _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_LOADING;

    case ACTION_USER_REQUEST_END:
      return _components_TwApps_TwAppsConst__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REQUEST_STATUS_COMPLETE;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (userRequestStatus);

/***/ }),

/***/ "aVTH":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("rzGU");
module.exports = __webpack_require__("p9MR").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "aput":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("i6sE");
var defined = __webpack_require__("5foh");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bh8V":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cQhG":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("D4ny");
var dPs = __webpack_require__("9Wj7");
var enumBugKeys = __webpack_require__("ACkF");
var IE_PROTO = __webpack_require__("XY+j")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Ev2A")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("EDr4").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "d3Kl":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("tFdt") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcnA":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "djPm":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("JpU4");
var enumBugKeys = __webpack_require__("ACkF");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3QTP");

/***/ }),

/***/ "ewAR":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "fYqa":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("bh8V");
var TAG = __webpack_require__("G1Wo")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "ge64":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mlGW");
module.exports = __webpack_require__("p9MR").Object.assign;


/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7FvJ");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "i6sE":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("bh8V");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "iHFp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const requestToServer = (endpoint, params = {}) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(endpoint, params).then(result => {
  const {
    data,
    status
  } = result;
  return {
    data,
    status
  };
});

/* harmony default export */ __webpack_exports__["a"] = (requestToServer);

/***/ }),

/***/ "ihIJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "k8Q4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Kk5c")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("5Kld")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "lt0m":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ot2h");
var $Object = __webpack_require__("p9MR").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "mezj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_APPNAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAppName; });
const SET_APPNAME = 'SET_APPNAME';
const setAppName = appName => ({
  type: SET_APPNAME,
  payload: appName
});

const appName = (state = "", action) => {
  switch (action.type) {
    case SET_APPNAME:
      return action.payload;

    default:
      return state;
  }

  ;
};

/* harmony default export */ __webpack_exports__["a"] = (appName);

/***/ }),

/***/ "mlGW":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("0T/a");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("nkTw") });


/***/ }),

/***/ "nJOo":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("D4ny");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "nkTw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("fZVS");
var getKeys = __webpack_require__("djPm");
var gOPS = __webpack_require__("McIs");
var pIE = __webpack_require__("1077");
var toObject = __webpack_require__("AYVP");
var IObject = __webpack_require__("i6sE");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("14Ie")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "ot2h":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("fZVS"), 'Object', { defineProperties: __webpack_require__("9Wj7") });


/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/ab8");

/***/ }),

/***/ "pasi":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("qBJy");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "qBJy":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "qUPm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_CHANGE_USER_INFO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return requestUserInfo; });
/* unused harmony export setUserInfo */
/* harmony import */ var _meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZW3t");
/* harmony import */ var _modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iHFp");


const ACTION_CHANGE_USER_INFO = 'CHANGE_USER_INFO';
// ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する
const requestUserInfo = endpoint => dispatch => {
  dispatch(Object(_meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_0__[/* startUserRequest */ "c"])());
  Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(endpoint).then(({
    data
  }) => {
    // console.log(data);
    const userInfo = data; // if ('code' in data[0]) {
    //   dispatch(setErrMessage(data[0].message));
    //   dispatch(endUserRequest());
    //   return;
    // }

    dispatch(Object(_meta_userRequestStatus__WEBPACK_IMPORTED_MODULE_0__[/* endUserRequest */ "b"])()); // ミュートユーザーをstoreに登録

    dispatch(setUserInfo(userInfo));
  });
};
const setUserInfo = userInfo => ({
  type: ACTION_CHANGE_USER_INFO,
  payload: userInfo
});

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case ACTION_CHANGE_USER_INFO:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (userInfo);

/***/ }),

/***/ "qwsB":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("2HZK");
var gOPS = __webpack_require__("McIs");
var anObject = __webpack_require__("D4ny");
var Reflect = __webpack_require__("2jw7").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rzGU":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("0T/a");
var ownKeys = __webpack_require__("qwsB");
var toIObject = __webpack_require__("aput");
var gOPD = __webpack_require__("Ym6j");
var createProperty = __webpack_require__("s+zB");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "s+ck":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "s+zB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "sLxe":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "sipE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "tCzM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+lRa");
var global = __webpack_require__("2jw7");
var hide = __webpack_require__("jOCL");
var Iterators = __webpack_require__("sipE");
var TO_STRING_TAG = __webpack_require__("G1Wo")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "tFdt":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "taoM":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("bh8V");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "tgSc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var global = __webpack_require__("2jw7");
var speciesConstructor = __webpack_require__("MC82");
var promiseResolve = __webpack_require__("3s9C");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "u4nc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_CHANGE_ERR_MESSAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setErrMessage; });
const ACTION_CHANGE_ERR_MESSAGE = 'CHANG_ERR_MESSAGE';
// 致命的なエラーメッセージの指定
const setErrMessage = message => ({
  type: ACTION_CHANGE_ERR_MESSAGE,
  payload: message
}); // 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列

const errMessage = (state = '', action) => {
  switch (action.type) {
    case ACTION_CHANGE_ERR_MESSAGE:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (errMessage);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "wNhr":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("OtwA").f;
var has = __webpack_require__("Q8jq");
var TAG = __webpack_require__("G1Wo")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "wWUK":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("0T/a");
var core = __webpack_require__("p9MR");
var fails = __webpack_require__("14Ie");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "widk":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("sipE");
var ITERATOR = __webpack_require__("G1Wo")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "wryu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACTION_TOGGLE_MUTED */
/* unused harmony export ACTION_CHANGE_MUTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toggleMuted; });
const ACTION_TOGGLE_MUTED = 'TOGGLE_MUTED';
const ACTION_CHANGE_MUTED = 'CHANGE_MUTED';
// ユーザーごとにミュートされているかどうかのフラグ
const setMuted = muted => ({
  type: ACTION_CHANGE_MUTED,
  payload: muted
}); // インデックス番号で指定されたユーザーのミュートフラグをトグルする

const toggleMuted = index => ({
  type: ACTION_TOGGLE_MUTED,
  payload: index
});

const muted = (state = [], action) => {
  // stateのアドレスが変わらないとレンダリングがされない
  // 旧stateの値をコピーした変数を用意する
  const newMuted = state.concat();

  switch (action.type) {
    case ACTION_CHANGE_MUTED:
      return action.payload;

    case ACTION_TOGGLE_MUTED:
      newMuted[action.payload] = !state[action.payload];
      return newMuted;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (muted);

/***/ }),

/***/ "x6ND":
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),

/***/ "xglJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("0T/a");
var newPromiseCapability = __webpack_require__("A8op");
var perform = __webpack_require__("dcnA");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });