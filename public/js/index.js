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
  STYLE_DARK_GRAY: '#bcbcbc',
  USER_INFO_ENDPOINT: '/user_api',
  MUTED_USERS_ENDPOINT: '/list_api',
  ACTION_CHANGE_BASE_URL: 'CHANGE_BASE_URL',
  ACTION_CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  ACTION_CHANGE_MUTED_USERS: 'CHANGE_MUTED_USERS',
  HEADER_MENU_INITIAL: 'initial',
  HEADER_MENU_CLOSED: 'closed',
  HEADER_MENU_OPENED: 'opened',
  SHOW_TWEETS_INITIAL: 'initial',
  SHOW_TWEETS_CLOSED: 'closed',
  SHOW_TWEETS_OPENED: 'opened'
};
/* harmony default export */ __webpack_exports__["default"] = (TwAppsConst);

/***/ }),

/***/ "./resources/js/actions/index.js":
/*!***************************************!*\
  !*** ./resources/js/actions/index.js ***!
  \***************************************/
/*! exports provided: setBaseUrl, setUserInfo, setMutedUsers, requestUserInfo, requestMutedUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserInfo", function() { return setUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMutedUsers", function() { return setMutedUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUserInfo", function() { return requestUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestMutedUsers", function() { return requestMutedUsers; });
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
/* harmony import */ var _modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/requestToServer */ "./resources/js/modules/requestToServer.js");


var setBaseUrl = function setBaseUrl(baseUrl) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_BASE_URL,
      baseUrl: baseUrl
    });
  };
};
var setUserInfo = function setUserInfo(userInfo) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_USER_INFO,
      userInfo: userInfo
    });
  };
};
var setMutedUsers = function setMutedUsers(mutedUsers) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_MUTED_USERS,
      mutedUsers: mutedUsers
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
var requestMutedUsers = function requestMutedUsers(endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch) {
    Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint, params).then(function (_ref2) {
      var data = _ref2.data,
          status = _ref2.status;
      dispatch(setMutedUsers(data));
      return 0;
    });
  };
};

/***/ }),

/***/ "./resources/js/components/MutedTweet.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/MutedTweet.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_convertBreak__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/convertBreak */ "./resources/js/modules/convertBreak.js");




var MutedTweet = function MutedTweet(_ref) {
  var mutedTweet = _ref.mutedTweet,
      itemClassName = _ref.itemClassName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "muted-tweet ".concat(itemClassName)
  }, mutedTweet.tweet_text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "tweet-media-container"
  }, mutedTweet.media_infos.map(function (media) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "tweet-media-item",
      key: media.media_url_https
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "media",
      className: "tweet-media",
      src: media.media_url_https
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tweet-info-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tweet-count-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "retweet-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tweet-retweet-count"
  }, mutedTweet.retweet_count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tweet-count-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "favorite-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tweet-favorite-count"
  }, mutedTweet.favorite_count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: mutedTweet.tweet_url,
    className: "open-twitter-link",
    alt: "tw"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "twitter-icon"
  }))));
};

MutedTweet.propTypes = {
  mutedTweet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tweet_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    tweet_text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    retweet_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    favorite_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    media_infos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      media_url_https: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }))
  }).isRequired,
  itemClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MutedTweet);

/***/ }),

/***/ "./resources/js/components/MutedTweetList.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/MutedTweetList.jsx ***!
  \****************************************************/
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
/* harmony import */ var _MutedTweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutedTweet */ "./resources/js/components/MutedTweet.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MutedTweetList =
/*#__PURE__*/
function (_Component) {
  _inherits(MutedTweetList, _Component);

  function MutedTweetList(props) {
    var _this;

    _classCallCheck(this, MutedTweetList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MutedTweetList).call(this, props));
    _this.ulStyle = {}; // this.listClassName = `list-${this.props.screenName}`;
    // this.itemClassName = `user-${this.props.screenName}`;

    return _this;
  } // componentDidMount() {
  //   this.itemElems = document.getElementsByClassName(this.itemClassName);
  //   this.listElems = document.getElementsByClassName(this.listClassName);
  //   this.listElems[0].addEventListener('load', () => {
  //     console.log('laode');
  //     this.listHeight = 0;
  //     for (let i = 0; i < this.listElems.length; i += 1) {
  //       this.listHeight += this.listElems[i].clientHeight;
  //     }
  //   });
  // }


  _createClass(MutedTweetList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showTweets = _this$props.showTweets,
          mutedTweets = _this$props.mutedTweets,
          listHeight = _this$props.listHeight,
          listClassName = _this$props.listClassName,
          itemClassName = _this$props.itemClassName;

      switch (showTweets) {
        case _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].SHOW_TWEETS_OPENED:
          this.ulStyle = {
            borderTop: "1px solid ".concat(_TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].STYLE_DARK_GRAY),
            display: 'block',
            maxHeight: listHeight
          };
          break;

        case _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].SHOW_TWEETS_CLOSED:
          this.ulStyle = {
            maxHeight: 0
          };
          break;

        default:
          this.ulStyle = {
            maxHeight: 0
          };
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "muted-tweet-list ".concat(listClassName),
        style: this.ulStyle
      }, mutedTweets.map(function (mutedTweet) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutedTweet__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: mutedTweet.tweet_id,
          mutedTweet: mutedTweet,
          itemClassName: itemClassName
        });
      }));
    }
  }]);

  return MutedTweetList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MutedTweetList.propTypes = {
  showTweets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  mutedTweets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape()).isRequired,
  // screenName: PropTypes.string.isRequired,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  itemClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    mutedUsers: state.mutedUsers
  };
})(MutedTweetList));

/***/ }),

/***/ "./resources/js/components/MutedUserInfo.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/MutedUserInfo.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnmuteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnmuteButton */ "./resources/js/components/UnmuteButton.jsx");
/* harmony import */ var _ShowTweetsButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowTweetsButton */ "./resources/js/components/ShowTweetsButton.jsx");
/* harmony import */ var _MutedTweetList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutedTweetList */ "./resources/js/components/MutedTweetList.jsx");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MutedUserInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(MutedUserInfo, _Component);

  function MutedUserInfo(props) {
    var _this;

    _classCallCheck(this, MutedUserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MutedUserInfo).call(this, props));
    _this.state = {
      showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_5__["default"].SHOW_TWEETS_INITIAL,
      listHeight: 0,
      muted: true
    };
    var mutedUser = _this.props.mutedUserInfo.muted_user;
    _this.userClassName = "user-".concat(mutedUser.screen_name);
    _this.listClassName = "list-".concat(mutedUser.screen_name);
    _this.itemClassName = "item-".concat(mutedUser.screen_name);
    return _this;
  }

  _createClass(MutedUserInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.itemElems = document.getElementsByClassName(this.itemClassName);
      this.userElems = document.getElementsByClassName(this.userClassName);
    }
  }, {
    key: "handleUnmuteClicked",
    value: function handleUnmuteClicked() {
      var muted = this.state.muted;
      this.setState({
        muted: !muted
      });
    }
  }, {
    key: "handleShowTweetsClicked",
    value: function handleShowTweetsClicked() {
      var showTweets = this.state.showTweets;

      if (showTweets === _TwAppsConst__WEBPACK_IMPORTED_MODULE_5__["default"].SHOW_TWEETS_OPENED) {
        this.setState({
          showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_5__["default"].SHOW_TWEETS_CLOSED
        }); // 固定ヘッダで隠れる分を考慮してスクロールする

        window.scrollTo(0, this.userElems[0].offsetTop - 50);
        return;
      } // アニメーション用にツイートリストの高さを計算する
      // ListのComponentDidMountでは画像ロード前の高さになってしまうためズレる


      var listHeight = 0;

      for (var i = 0; i < this.itemElems.length; i += 1) {
        listHeight += this.itemElems[i].clientHeight;
      }

      this.setState({
        listHeight: listHeight
      });
      this.setState({
        showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_5__["default"].SHOW_TWEETS_OPENED
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mutedUserInfo = this.props.mutedUserInfo;
      var mutedUser = mutedUserInfo.muted_user;
      var _this$state = this.state,
          showTweets = _this$state.showTweets,
          muted = _this$state.muted,
          listHeight = _this$state.listHeight;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "muted-user-info ".concat(this.userClassName)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muted-top-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "muted-user-icon",
        src: mutedUser.profile_image_url_https,
        alt: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muted-username-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "muted-user-name"
      }, mutedUser.user_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "muted-user-name"
      }, "@", mutedUser.screen_name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutedTweetList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        showTweets: showTweets,
        listClassName: this.listClassName,
        itemClassName: this.itemClassName,
        listHeight: listHeight,
        mutedTweets: mutedUserInfo.tweets_info
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muted-bottom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnmuteButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        muted: muted,
        onClick: function onClick() {
          _this2.handleUnmuteClicked();
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowTweetsButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showTweets: showTweets,
        onClick: function onClick() {
          _this2.handleShowTweetsClicked();
        }
      })));
    }
  }]);

  return MutedUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MutedUserInfo.propTypes = {
  mutedUserInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    muted_user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      user_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      screen_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      profile_image_url_https: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }),
    tweets_info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape())
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MutedUserInfo);

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

/***/ "./resources/js/components/ShowTweetsButton.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/ShowTweetsButton.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");




var ShowTweetsButton = function ShowTweetsButton(_ref) {
  var showTweets = _ref.showTweets,
      onClick = _ref.onClick;
  var buttonClassName = 'muted-hide-button';
  var iconClassName = 'hide-icon';
  var buttonLabel = '隠す';

  if (showTweets !== _TwAppsConst__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW_TWEETS_OPENED) {
    buttonClassName = 'muted-show-button';
    iconClassName = 'show-icon';
    buttonLabel = 'チラ見';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: buttonClassName,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: iconClassName
  }), buttonLabel);
};

ShowTweetsButton.propTypes = {
  showTweets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShowTweetsButton);

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwAppsConst.js");
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
      menu: _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].HEADER_MENU_INITIAL
    };
    return _this;
  }

  _createClass(TwAppsHeader, [{
    key: "render",
    value: function render() {
      var imgUrl = this.props.userInfo.profile_image_url_https;
      var imgIconDOM = imgUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "twapps-header-icon",
        src: imgUrl,
        alt: "icon"
      }) : '';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "twapps-header"
      }, imgIconDOM);
    }
  }]);

  return TwAppsHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TwAppsHeader.propTypes = {
  userInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    profile_image_url_https: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    userInfo: state.userInfo
  };
})(TwAppsHeader));

/***/ }),

/***/ "./resources/js/components/UnmuteButton.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/UnmuteButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var UnmuteButton = function UnmuteButton(_ref) {
  var muted = _ref.muted,
      _onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: muted ? 'muted-unmute-button' : 'muted-mute-button',
    onClick: function onClick() {
      _onClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: muted ? 'unmute-icon' : 'mute-icon'
  }), muted ? 'ミュート解除' : 'ミュート');
};

UnmuteButton.propTypes = {
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnmuteButton);

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
/* harmony import */ var _MutedUserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutedUserList */ "./resources/js/containers/MutedUserList.jsx");




var MuteReminder = function MuteReminder() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mutereminder"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MuterMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutedUserList__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (MuteReminder);

/***/ }),

/***/ "./resources/js/containers/MutedUserList.jsx":
/*!***************************************************!*\
  !*** ./resources/js/containers/MutedUserList.jsx ***!
  \***************************************************/
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
/* harmony import */ var _components_MutedUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MutedUserInfo */ "./resources/js/components/MutedUserInfo.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./resources/js/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MutedUserList =
/*#__PURE__*/
function (_Component) {
  _inherits(MutedUserList, _Component);

  function MutedUserList(props) {
    _classCallCheck(this, MutedUserList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MutedUserList).call(this, props));
  }

  _createClass(MutedUserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.requestMutedUsers(_TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].MUTED_USERS_ENDPOINT);
    }
  }, {
    key: "render",
    value: function render() {
      var mutedUsers = this.props.mutedUsers;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muter-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "muter-discription"
      }, "\u3042\u306A\u305F\u304C\u30DF\u30E5\u30FC\u30C8\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "muted-user-list"
      }, mutedUsers.map(function (mutedUserInfo) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MutedUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: mutedUserInfo.muted_user.user_id,
          mutedUserInfo: mutedUserInfo
        });
      })));
    }
  }]);

  return MutedUserList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

MutedUserList.propTypes = {
  requestMutedUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  mutedUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    muted_user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      user_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
    })
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    mutedUsers: state.mutedUsers
  };
}, {
  requestMutedUsers: _actions__WEBPACK_IMPORTED_MODULE_5__["requestMutedUsers"]
})(MutedUserList));

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
      var baseUrl = this.props.baseUrl;
      this.props.setBaseUrl(baseUrl);
      this.props.requestUserInfo(baseUrl + _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].USER_INFO_ENDPOINT);
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
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  requestUserInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
}, {
  setBaseUrl: _actions__WEBPACK_IMPORTED_MODULE_6__["setBaseUrl"],
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
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base_path */ "base_path");
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(base_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _containers_TwitterApps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/TwitterApps */ "./resources/js/containers/TwitterApps.jsx");









var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])) // applyMiddleware(thunk),
);
var appElem = document.querySelector('.react-homeapp');

if (appElem) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_TwitterApps__WEBPACK_IMPORTED_MODULE_8__["default"], {
    baseUrl: base_path__WEBPACK_IMPORTED_MODULE_7___default.a
  })), appElem);
}

/***/ }),

/***/ "./resources/js/modules/convertBreak.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/convertBreak.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var convertBreak = function convertBreak(str) {
  var convertedStr = str.replace(/\r?\n/g, '<br>');
  return convertedStr;
};

/* harmony default export */ __webpack_exports__["default"] = (convertBreak);

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



var baseUrl = function baseUrl() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_BASE_URL:
      return action.baseUrl;

    default:
      return state;
  }
};

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

var mutedUsers = function mutedUsers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_MUTED_USERS:
      return action.mutedUsers;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  baseUrl: baseUrl,
  userInfo: userInfo,
  mutedUsers: mutedUsers
}));

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
/*!******************************************************************!*\
  !*** multi ./resources/js/index.jsx ./resources/sass/index.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\js\index.jsx */"./resources/js/index.jsx");
module.exports = __webpack_require__(/*! C:\Users\tehay\Desktop\WORKSPACE\10.Development\20.Web\MuteReminder\MuteReminder\resources\sass\index.scss */"./resources/sass/index.scss");


/***/ }),

/***/ "base_path":
/*!****************************!*\
  !*** external "base_path" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = base_path;

/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=index.js.map