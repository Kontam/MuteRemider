(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/login_index"],{

/***/ "./resources/js/LoginPage/LoginConst.js":
/*!**********************************************!*\
  !*** ./resources/js/LoginPage/LoginConst.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LoginConst = {
  OWNER_LINK: 'https://konkonta.com',
  BREAKPOINT_PC: 1200,
  APPNAME_MUTER: 'APPNAME_MUTER',
  DESCRIPTION_FIRST_MUTER: 'あなたがミュートしている\r\nユーザーを整理しましょう',
  DESCRIPTION_SECOND_MUTER: '見ても良いと思ったら\r\nミュートを解除しましょう',
  DESCRIPTION_LOGIN_TWITTER: 'このツールがあなたのアカウントで\r\nツイートすることはありません'
};
/* harmony default export */ __webpack_exports__["default"] = (LoginConst);

/***/ }),

/***/ "./resources/js/LoginPage/components/Carousel.jsx":
/*!********************************************************!*\
  !*** ./resources/js/LoginPage/components/Carousel.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_setSlickCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/setSlickCarousel */ "./resources/js/LoginPage/modules/setSlickCarousel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, _getPrototypeOf(Carousel).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_modules_setSlickCarousel__WEBPACK_IMPORTED_MODULE_1__["default"])('loginCarousel');
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCarousel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCarousel__page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/slides/muter-slide1.jpg",
        alt: "Twitter\u306E\u30DF\u30E5\u30FC\u30C8\u3092\u6709\u52B9\u6D3B\u7528\u3057\u307E\u3057\u3087\u3046",
        className: "loginCarousel__slideImg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCarousel__page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/slides/muter-slide2.jpg",
        alt: "\u3042\u306A\u305F\u304C\u30DF\u30E5\u30FC\u30C8\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u3092\u4E00\u89A7\u8868\u793A \u305D\u306E\u5834\u3067\u30DF\u30E5\u30FC\u30C8\u89E3\u9664\u3082\u3067\u304D\u307E\u3059",
        className: "loginCarousel__slideImg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCarousel__page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/slides/muter-slide3.jpg",
        alt: "\u300C\u30C1\u30E9\u898B\u300D\u6A5F\u80FD\u3067\u3001\u305D\u306E\u4EBA\u306E\u30C4\u30A4\u30FC\u30C8\u3092\u3044\u304F\u3064\u304B\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059",
        className: "loginCarousel__slideImg"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginCarousel__page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "img/slides/muter-slide4.jpg",
        alt: "\u5B89\u5168\u306A\u30A2\u30D7\u30EA\u3067\u3059\u3002\u3042\u306A\u305F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u30C4\u30A4\u30FC\u30C8\u3059\u308B\u3053\u3068\u306F\u6C7A\u3057\u3066\u3042\u308A\u307E\u305B\u3093",
        className: "loginCarousel__slideImg"
      })));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./resources/js/LoginPage/components/LoginContainer.jsx":
/*!**************************************************************!*\
  !*** ./resources/js/LoginPage/components/LoginContainer.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoginConst */ "./resources/js/LoginPage/LoginConst.js");



var LoginSection = function LoginSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LoginContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LoginContainer__head"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "LoginContainer__Paragraph"
  }, _LoginConst__WEBPACK_IMPORTED_MODULE_1__["default"].DESCRIPTION_FIRST_MUTER), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "LoginContainer__Paragraph LoginContainer__Paragraph--second"
  }, _LoginConst__WEBPACK_IMPORTED_MODULE_1__["default"].DESCRIPTION_SECOND_MUTER)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LoginRightColumn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ownerLink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "ownerLink__icon",
    src: "img/house_icon.svg",
    alt: "home"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _LoginConst__WEBPACK_IMPORTED_MODULE_1__["default"].OWNER_LINK,
    className: "ownerLink__Link"
  }, "\u5236\u4F5C\u8005\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LoginForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "LoginForm__loginLink",
    href: "/login"
  }, "\u30ED\u30B0\u30A4\u30F3", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "LoginForm__icon",
    src: "img/twitter_white_icon.svg",
    alt: "twitter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "LoginForm__description"
  }, _LoginConst__WEBPACK_IMPORTED_MODULE_1__["default"].DESCRIPTION_LOGIN_TWITTER))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginSection);

/***/ }),

/***/ "./resources/js/LoginPage/components/LoginPage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/LoginPage/components/LoginPage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoginConst */ "./resources/js/LoginPage/LoginConst.js");
/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader */ "./resources/js/LoginPage/components/PageHeader.jsx");
/* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginContainer */ "./resources/js/LoginPage/components/LoginContainer.jsx");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel */ "./resources/js/LoginPage/components/Carousel.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LoginPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage(props) {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginPage).call(this, props));
    _this.state = {
      appName: _LoginConst__WEBPACK_IMPORTED_MODULE_1__["default"].APPNAME_MUTER
    };
    return _this;
  }

  _createClass(LoginPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginPage"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carouselContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }]);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./resources/js/LoginPage/components/PageHeader.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/LoginPage/components/PageHeader.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PageHeader = function PageHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pageHeadContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "pageHeadContainer__head"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pageHeadContainer__headLine1"
  }, " \u3042\u306E\u4EBA\u306F\u4ECA\uFF1F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pageHeadContainer__headLine2"
  }, " \u30C1\u30A7\u30C3\u30AB\u30FC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pageHeadContainer__engHead"
  }, "Mute Reminder"));
};

/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./resources/js/LoginPage/modules/setSlickCarousel.js":
/*!************************************************************!*\
  !*** ./resources/js/LoginPage/modules/setSlickCarousel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoginConst */ "./resources/js/LoginPage/LoginConst.js");




var setSlickCarousel = function setSlickCarousel(containerClass) {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".".concat(containerClass)).slick({
    infinite: true,
    responsive: [{
      breakpoint: _LoginConst__WEBPACK_IMPORTED_MODULE_2__["default"].BREAKPOINT_PC,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        fade: true,
        dots: true
      }
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setSlickCarousel);

/***/ }),

/***/ "./resources/js/login_index.jsx":
/*!**************************************!*\
  !*** ./resources/js/login_index.jsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoginPage_components_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPage/components/LoginPage */ "./resources/js/LoginPage/components/LoginPage.jsx");



var loginElem = document.querySelector('.react-login');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage_components_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"], null), loginElem);

/***/ }),

/***/ 1:
/*!********************************************!*\
  !*** multi ./resources/js/login_index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\js\login_index.jsx */"./resources/js/login_index.jsx");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=login_index.js.map