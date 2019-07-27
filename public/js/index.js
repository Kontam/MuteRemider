(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/index"],{

/***/ "./resources/js/TwAppsConst.js":
/*!*************************************!*\
  !*** ./resources/js/TwAppsConst.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TwAppsConst = {
  USER_INFO_ENDPOINT: "".concat(window.location.origin, "/user_api"),
  ACTION_CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  HEADER_MENU_INITIAL: 'initial',
  HEADER_MENU_CLOSED: 'closed',
  HEADER_MENU_OPENED: 'opened'
};
/* harmony default export */ __webpack_exports__["default"] = (TwAppsConst);

/***/ }),

/***/ "./resources/js/actions/index.js":
/*!***************************************!*\
  !*** ./resources/js/actions/index.js ***!
  \***************************************/
/*! exports provided: setUserInfo, requestUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserInfo", function() { return setUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUserInfo", function() { return requestUserInfo; });
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
/* harmony import */ var _modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/requestToServer */ "./resources/js/modules/requestToServer.js");


var setUserInfo = function setUserInfo(userInfo) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_USER_INFO,
      userInfo: userInfo
    });
  };
}; // 認証ユーザーの情報を取得する

var requestUserInfo = function requestUserInfo(endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch) {
    Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint, params).then(function (_ref) {
      var data = _ref.data,
          status = _ref.status;
      dispatch(setUserInfo(data));
      return 0;
    });
  };
};

/***/ }),

/***/ "./resources/js/components/MuterMenu.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/MuterMenu.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MuterMenu = function MuterMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "muter-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "tweets-count-button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tweets-count"
  }, "3")));
};

/* harmony default export */ __webpack_exports__["default"] = (MuterMenu);

/***/ }),

/***/ "./resources/js/components/TwAppsHeader.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/TwAppsHeader.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TwAppsHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(TwAppsHeader, _Component);

  function TwAppsHeader(props) {
    var _this;

    _classCallCheck(this, TwAppsHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwAppsHeader).call(this, props));
    _this.state = {
      menu: _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].HEADER_MENU_INITIAL
    };
    return _this;
  }

  _createClass(TwAppsHeader, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "twapps-header"
      });
    }
  }]);

  return TwAppsHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TwAppsHeader);

/***/ }),

/***/ "./resources/js/containers/MuteReminder.jsx":
/*!**************************************************!*\
  !*** ./resources/js/containers/MuteReminder.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MuterMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MuterMenu */ "./resources/js/components/MuterMenu.jsx");



var MuteReminder = function MuteReminder() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mutereminder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MuterMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (MuteReminder);

/***/ }),

/***/ "./resources/js/containers/TwitterApps.jsx":
/*!*************************************************!*\
  !*** ./resources/js/containers/TwitterApps.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
/* harmony import */ var _components_TwAppsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TwAppsHeader */ "./resources/js/components/TwAppsHeader.jsx");
/* harmony import */ var _MuteReminder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MuteReminder */ "./resources/js/containers/MuteReminder.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./resources/js/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var TwitterApps =
/*#__PURE__*/
function (_Component) {
  _inherits(TwitterApps, _Component);

  function TwitterApps() {
    _classCallCheck(this, TwitterApps);

    return _possibleConstructorReturn(this, _getPrototypeOf(TwitterApps).apply(this, arguments));
  }

  _createClass(TwitterApps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.requestUserInfo(_TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].USER_INFO_ENDPOINT);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "twitter-apps"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TwAppsHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MuteReminder__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return TwitterApps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TwitterApps.propTypes = {
  requestUserInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
}, {
  requestUserInfo: _actions__WEBPACK_IMPORTED_MODULE_6__["requestUserInfo"]
})(TwitterApps));

/***/ }),

/***/ "./resources/js/index.jsx":
/*!********************************!*\
  !*** ./resources/js/index.jsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./resources/js/reducers/index.js");
/* harmony import */ var _containers_TwitterApps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/TwitterApps */ "./resources/js/containers/TwitterApps.jsx");








var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])) // applyMiddleware(thunk),
);
var appElem = document.querySelector('.react-homeapp');

if (appElem) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_TwitterApps__WEBPACK_IMPORTED_MODULE_7__["default"], null)), appElem);
}

/***/ }),

/***/ "./resources/js/modules/requestToServer.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/requestToServer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var requestToServer = function requestToServer(endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(endpoint, params).then(function (result) {
    var data = result.data,
        status = result.status;
    return {
      data: data,
      status: status
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (requestToServer);

/***/ }),

/***/ "./resources/js/reducers/index.js":
/*!****************************************!*\
  !*** ./resources/js/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");



var userInfo = function userInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_USER_INFO:
      return action.userInfo;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  userInfo: userInfo
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/index.scss":
/*!***********************************!*\
  !*** ./resources/sass/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./resources/js/index.jsx ./resources/sass/index.scss ./resources/sass/app.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\js\index.jsx */"./resources/js/index.jsx");
__webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\sass\index.scss */"./resources/sass/index.scss");
module.exports = __webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=index.js.map