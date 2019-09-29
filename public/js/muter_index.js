(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/muter_index"],{

/***/ "./resources/js/TwApps/TwAppsConst.js":
/*!********************************************!*\
  !*** ./resources/js/TwApps/TwAppsConst.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TwAppsConst = {
  STYLE_DARK_GRAY: '#bcbcbc',
  IMG_DIR_PATH: 'img',
  USER_INFO_ENDPOINT: '/user_api',
  MUTED_USERS_ENDPOINT: '/list_api',
  UNMUTE_USER_ENDPOINT: '/unmute',
  MUTE_USER_ENDPOINT: '/mute',
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
/* harmony default export */ __webpack_exports__["default"] = (TwAppsConst);

/***/ }),

/***/ "./resources/js/TwApps/actions/index.js":
/*!**********************************************!*\
  !*** ./resources/js/TwApps/actions/index.js ***!
  \**********************************************/
/*! exports provided: setBaseUrl, setIsMuterMenuOpened, setUserInfo, setMutedUsers, setMuted, toggleMuted, startMuteRequest, endMuteRequest, startUserRequest, endUserRequest, setErrMessage, setPopUpMessage, requestUserInfo, requestMutedUsers, requestUnmuteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMuterMenuOpened", function() { return setIsMuterMenuOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserInfo", function() { return setUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMutedUsers", function() { return setMutedUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMuted", function() { return setMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMuted", function() { return toggleMuted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startMuteRequest", function() { return startMuteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endMuteRequest", function() { return endMuteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startUserRequest", function() { return startUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endUserRequest", function() { return endUserRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrMessage", function() { return setErrMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPopUpMessage", function() { return setPopUpMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUserInfo", function() { return requestUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestMutedUsers", function() { return requestMutedUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUnmuteUser", function() { return requestUnmuteUser; });
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/requestToServer */ "./resources/js/TwApps/modules/requestToServer.js");


var setBaseUrl = function setBaseUrl(baseUrl) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_BASE_URL,
      baseUrl: baseUrl
    });
  };
};
var setIsMuterMenuOpened = function setIsMuterMenuOpened(isMuterMenuOpened) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_ISMUTERMENU_OPENED,
      isMuterMenuOpened: isMuterMenuOpened
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
}; // ユーザーごとにミュートされているかどうかのフラグ

var setMuted = function setMuted(muted) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_MUTED,
      muted: muted
    });
  };
}; // インデックス番号で指定されたユーザーのミュートフラグをトグルする

var toggleMuted = function toggleMuted(index) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_TOGGLE_MUTED,
      index: index
    });
  };
}; // ミュートAPIへのリクエストステータス

var startMuteRequest = function startMuteRequest() {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_MUTE_REQUEST_START
    });
  };
}; // ミュートAPIへのリクエストステータス

var endMuteRequest = function endMuteRequest() {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_MUTE_REQUEST_END
    });
  };
}; // ユーザーAPIへのリクエストステータス

var startUserRequest = function startUserRequest() {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_USER_REQUEST_START
    });
  };
}; // ユーザーAPIへのリクエストステータス

var endUserRequest = function endUserRequest() {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_USER_REQUEST_END
    });
  };
}; // 致命的なエラーメッセージの指定

var setErrMessage = function setErrMessage(message) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_ERR_MESSAGE,
      message: message
    });
  };
}; // ポップアップ表示するメッセージの設定

var setPopUpMessage = function setPopUpMessage(message) {
  return function (dispatch) {
    dispatch({
      type: _TwAppsConst__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_CHANGE_ERR_MESSAGE,
      message: message
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
}; // ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する

var requestMutedUsers = function requestMutedUsers(endpoint) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch) {
    dispatch(startUserRequest());
    console.log(params);
    Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint, params).then(function (_ref2) {
      var data = _ref2.data;

      if ('code' in data[0]) {
        dispatch(setErrMessage(data[0].message));
        dispatch(endUserRequest());
        return;
      } // 全てミュートフラグを立てた配列をミュートの初期値としてdispatch
      // ユーザーリストよりも先にこちらを作る（依存しているため）


      dispatch(endUserRequest());
      var initializedMuted = Array(data.length).fill(true);
      dispatch(setMuted(initializedMuted)); // ミュートユーザーをstoreに登録

      dispatch(setMutedUsers(data));
    });
  };
};
var requestUnmuteUser = function requestUnmuteUser(endpoint, screenName, index) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return function (dispatch) {
    dispatch(startMuteRequest());
    Object(_modules_requestToServer__WEBPACK_IMPORTED_MODULE_1__["default"])(endpoint, params).then(function (_ref3) {
      var data = _ref3.data,
          status = _ref3.status;
      // ミュート解除に成功した場合はユーザー情報objectが返される
      // スクリーンネームを照合して成否を確認する
      dispatch(endMuteRequest());

      if (data.screen_name === screenName) {
        dispatch(toggleMuted(index));
      }
    });
  };
};

/***/ }),

/***/ "./resources/js/TwApps/components/FatalMessage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/TwApps/components/FatalMessage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




var FatalMessage = function FatalMessage(_ref) {
  var errMessage = _ref.errMessage,
      baseUrl = _ref.baseUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fatal-message-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fatal-message-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "fatal-message"
  }, errMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: baseUrl,
    className: "fatalLink"
  }, "Top\u3078\u623B\u308B")));
};

FatalMessage.propTypes = {
  errMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    errMessage: state.errMessage,
    baseUrl: state.baseUrl
  };
})(FatalMessage));

/***/ }),

/***/ "./resources/js/TwApps/components/LoadingImg.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/TwApps/components/LoadingImg.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");





var LoadingImg = function LoadingImg(_ref) {
  var muteRequestStatus = _ref.muteRequestStatus,
      userRequestStatus = _ref.userRequestStatus;
  var style = {}; // いずれかの要素がロード中の時は表示する

  if (muteRequestStatus === _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].REQUEST_STATUS_COMPLETE && userRequestStatus === _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].REQUEST_STATUS_COMPLETE) {
    style = {
      display: 'none'
    };
  } // background-imageは表示の優先順位が低いらしいのでimgタグを使用する


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-img-container",
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "loading-img",
    src: "img/loading_anim.svg",
    alt: "loading"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "loading-caption"
  }, "loading..."));
};

LoadingImg.propTypes = {
  muteRequestStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  userRequestStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    muteRequestStatus: state.muteRequestStatus,
    userRequestStatus: state.userRequestStatus
  };
})(LoadingImg));

/***/ }),

/***/ "./resources/js/TwApps/components/MutedTweet.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/TwApps/components/MutedTweet.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_convertBreak__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/convertBreak */ "./resources/js/TwApps/modules/convertBreak.js");




var MutedTweet = function MutedTweet(_ref) {
  var mutedTweet = _ref.mutedTweet,
      itemClassName = _ref.itemClassName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "muted-tweet ".concat(itemClassName)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "muted-tweet-text"
  }, mutedTweet.tweet_text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
    className: "favorite-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tweet-favorite-count"
  }, mutedTweet.favorite_count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tweet-count-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "retweet-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "tweet-retweet-count"
  }, mutedTweet.retweet_count)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: mutedTweet.tweet_url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "open-twitter-link",
    alt: "tw"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "twitter-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pc-twitter-label"
  }, "twitter\u3067\u898B\u308B"))));
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

/***/ "./resources/js/TwApps/components/MutedTweetList.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/TwApps/components/MutedTweetList.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _MutedTweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MutedTweet */ "./resources/js/TwApps/components/MutedTweet.jsx");
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

  function MutedTweetList() {
    _classCallCheck(this, MutedTweetList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MutedTweetList).apply(this, arguments));
  }

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
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  itemClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    mutedUsers: state.mutedUsers
  };
})(MutedTweetList));

/***/ }),

/***/ "./resources/js/TwApps/components/MutedUserInfo.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/TwApps/components/MutedUserInfo.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UnmuteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnmuteButton */ "./resources/js/TwApps/components/UnmuteButton.jsx");
/* harmony import */ var _ShowTweetsButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowTweetsButton */ "./resources/js/TwApps/components/ShowTweetsButton.jsx");
/* harmony import */ var _MutedTweetList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MutedTweetList */ "./resources/js/TwApps/components/MutedTweetList.jsx");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./resources/js/TwApps/actions/index.js");
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
      showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].SHOW_TWEETS_INITIAL,
      listHeight: 0
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
      var _this$props = this.props,
          index = _this$props.index,
          mutedUserInfo = _this$props.mutedUserInfo,
          baseUrl = _this$props.baseUrl,
          isUserMuted = _this$props.isUserMuted;
      var accessPath = isUserMuted ? _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].UNMUTE_USER_ENDPOINT : _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].MUTE_USER_ENDPOINT; // 対象ユーザーがミュートか非ミュートかでエンドポイントが変わる

      var endpoint = "".concat(baseUrl).concat(accessPath, "/").concat(mutedUserInfo.muted_user.screen_name);
      this.props.requestUnmuteUser(endpoint, mutedUserInfo.muted_user.screen_name, index);
    }
  }, {
    key: "handleShowTweetsClicked",
    value: function handleShowTweetsClicked() {
      var showTweets = this.state.showTweets;

      if (showTweets === _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].SHOW_TWEETS_OPENED) {
        this.setState({
          showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].SHOW_TWEETS_CLOSED
        }); // 固定ヘッダで隠れる分を考慮してスクロールする

        window.scrollTo(0, this.userElems[0].offsetTop - 50);
        return;
      } // アニメーション用にツイートリストの高さを計算する
      // ListのComponentDidMountでは画像ロード前の高さになってしまうためズレる


      var listHeight = 0;

      for (var i = 0; i < this.itemElems.length; i += 1) {
        // border-bottomの分1pxを加算する
        listHeight += this.itemElems[i].clientHeight + 1;
      }

      this.setState({
        listHeight: listHeight
      });
      this.setState({
        showTweets: _TwAppsConst__WEBPACK_IMPORTED_MODULE_6__["default"].SHOW_TWEETS_OPENED
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          mutedUserInfo = _this$props2.mutedUserInfo,
          isUserMuted = _this$props2.isUserMuted;
      var mutedUser = mutedUserInfo.muted_user;
      var _this$state = this.state,
          showTweets = _this$state.showTweets,
          listHeight = _this$state.listHeight;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "muted-user-info ".concat(this.userClassName)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muted-top-container ".concat(isUserMuted ? '' : 'unmuted-user-bg')
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
      }, "@", mutedUser.screen_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnmuteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isForMobile: false,
        muted: isUserMuted,
        onClick: function onClick() {
          _this2.handleUnmuteClicked();
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutedTweetList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        showTweets: showTweets,
        listClassName: this.listClassName,
        itemClassName: this.itemClassName,
        listHeight: listHeight,
        mutedTweets: mutedUserInfo.tweets_info
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muted-bottom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnmuteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        muted: isUserMuted,
        onClick: function onClick() {
          _this2.handleUnmuteClicked();
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowTweetsButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      profile_image_url_https: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
    }),
    tweets_info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape())
  }).isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isUserMuted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    baseUrl: state.baseUrl
  };
}, {
  requestUnmuteUser: _actions__WEBPACK_IMPORTED_MODULE_7__["requestUnmuteUser"],
  toggleMuted: _actions__WEBPACK_IMPORTED_MODULE_7__["toggleMuted"]
})(MutedUserInfo));

/***/ }),

/***/ "./resources/js/TwApps/components/MuterMenu.jsx":
/*!******************************************************!*\
  !*** ./resources/js/TwApps/components/MuterMenu.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_ToggleMuterMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/ToggleMuterMenuButton */ "./resources/js/TwApps/containers/ToggleMuterMenuButton.jsx");





var MuterMenu = function MuterMenu(_ref) {
  var isMuterMenuOpened = _ref.isMuterMenuOpened;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "muter-menu ".concat(isMuterMenuOpened ? 'muter-menu-opened' : 'muter-menu-closed')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ToggleMuterMenuButton__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "tweets-count-button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tweets-count"
  }, "3")));
};

MuterMenu.propTypes = {
  isMuterMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    isMuterMenuOpened: state.isMuterMenuOpened
  };
})(MuterMenu));

/***/ }),

/***/ "./resources/js/TwApps/components/ShowTweetsButton.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/TwApps/components/ShowTweetsButton.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");




var ShowTweetsButton = function ShowTweetsButton(_ref) {
  var showTweets = _ref.showTweets,
      onClick = _ref.onClick;
  var buttonClassName = 'muted-hide-button';
  var iconClassName = 'hide-icon';
  var buttonLabel = '隠す';
  var forPCDOM = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pc-show-button-label"
  }, "\u30C4\u30A4\u30FC\u30C8\u3092");

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
  }), forPCDOM, buttonLabel);
};

ShowTweetsButton.propTypes = {
  showTweets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShowTweetsButton);

/***/ }),

/***/ "./resources/js/TwApps/components/TwAppsHeader.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/TwApps/components/TwAppsHeader.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
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

/***/ "./resources/js/TwApps/components/UnmuteButton.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/TwApps/components/UnmuteButton.jsx ***!
  \*********************************************************/
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
      _onClick = _ref.onClick,
      isForMobile = _ref.isForMobile;
  var btnClassName = muted ? 'muted-unmute-button' : 'muted-mute-button';

  if (!isForMobile) {
    btnClassName = muted ? 'pc-muted-unmute-button' : 'pc-muted-mute-button';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: btnClassName,
    onClick: function onClick() {
      _onClick();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: muted ? 'unmute-icon' : 'mute-icon'
  }), muted ? 'ミュート解除' : 'ミュート');
};

UnmuteButton.propTypes = {
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isForMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
UnmuteButton.defaultProps = {
  isForMobile: true
};
/* harmony default export */ __webpack_exports__["default"] = (UnmuteButton);

/***/ }),

/***/ "./resources/js/TwApps/containers/MuteReminder.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/TwApps/containers/MuteReminder.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_MuterMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MuterMenu */ "./resources/js/TwApps/components/MuterMenu.jsx");
/* harmony import */ var _MutedUserList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MutedUserList */ "./resources/js/TwApps/containers/MutedUserList.jsx");
/* harmony import */ var _components_FatalMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FatalMessage */ "./resources/js/TwApps/components/FatalMessage.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MuteReminder =
/*#__PURE__*/
function (_Component) {
  _inherits(MuteReminder, _Component);

  function MuteReminder(props) {
    _classCallCheck(this, MuteReminder);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuteReminder).call(this, props));
  }

  _createClass(MuteReminder, [{
    key: "render",
    value: function render() {
      var errMessage = this.props.errMessage;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mutereminder"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MuterMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null), errMessage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FatalMessage__WEBPACK_IMPORTED_MODULE_4__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MutedUserList__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return MuteReminder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    errMessage: state.errMessage
  };
})(MuteReminder));

/***/ }),

/***/ "./resources/js/TwApps/containers/MutedUserList.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/TwApps/containers/MutedUserList.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _components_MutedUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MutedUserInfo */ "./resources/js/TwApps/components/MutedUserInfo.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./resources/js/TwApps/actions/index.js");
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
    var _this;

    _classCallCheck(this, MutedUserList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MutedUserList).call(this, props));
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  _createClass(MutedUserList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var baseUrl = this.props.baseUrl;
      this.props.requestMutedUsers(baseUrl + _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].MUTED_USERS_ENDPOINT);
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mutedUsers = _this$props.mutedUsers,
          muted = _this$props.muted,
          isMuterMenuOpened = _this$props.isMuterMenuOpened;
      var isLoading = this.state.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "muter-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "muter-discription"
      }, "\u3042\u306A\u305F\u304C\u30DF\u30E5\u30FC\u30C8\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "muted-user-list ".concat(isMuterMenuOpened ? 'list-menu-opened' : 'list-menu-closed')
      }, mutedUsers.map(function (mutedUserInfo, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MutedUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: mutedUserInfo.muted_user.user_id,
          mutedUserInfo: mutedUserInfo,
          index: index,
          isUserMuted: muted[index]
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
  })).isRequired,
  muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool).isRequired,
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isMuterMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    mutedUsers: state.mutedUsers,
    muted: state.muted,
    baseUrl: state.baseUrl,
    isMuterMenuOpened: state.isMuterMenuOpened,
    userInfo: state.userInfo
  };
}, {
  requestMutedUsers: _actions__WEBPACK_IMPORTED_MODULE_5__["requestMutedUsers"]
})(MutedUserList));

/***/ }),

/***/ "./resources/js/TwApps/containers/ToggleMuterMenuButton.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/TwApps/containers/ToggleMuterMenuButton.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./resources/js/TwApps/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ToggleMuterMenuButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ToggleMuterMenuButton, _Component);

  function ToggleMuterMenuButton(props) {
    var _this;

    _classCallCheck(this, ToggleMuterMenuButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleMuterMenuButton).call(this, props)); // メニュー開閉アニメーション用クラス

    _this.toggleAnimationClass = '';
    return _this;
  }

  _createClass(ToggleMuterMenuButton, [{
    key: "handleToggleClicked",
    value: function handleToggleClicked() {
      var isMuterMenuOpened = this.props.isMuterMenuOpened;

      if (isMuterMenuOpened) {
        this.props.setIsMuterMenuOpened(false);
        this.toggleAnimationClass = 'muter-menu-closed';
        return;
      }

      this.props.setIsMuterMenuOpened(true);
      this.toggleAnimationClass = 'muter-menu-opened';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isMuterMenuOpened = this.props.isMuterMenuOpened;
      var imgUrl = isMuterMenuOpened ? "".concat(_TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].IMG_DIR_PATH, "/cross_icon.svg") : "".concat(_TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].IMG_DIR_PATH, "/hambargar_icon.svg");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-button-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "menu-toggle-button",
        onClick: function onClick() {
          _this2.handleToggleClicked();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "menu-toggle-icon",
        src: imgUrl,
        alt: "close"
      })));
    }
  }]);

  return ToggleMuterMenuButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ToggleMuterMenuButton.propTypes = {
  isMuterMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsMuterMenuOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    isMuterMenuOpened: state.isMuterMenuOpened
  };
}, {
  setIsMuterMenuOpened: _actions__WEBPACK_IMPORTED_MODULE_4__["setIsMuterMenuOpened"]
})(ToggleMuterMenuButton));

/***/ }),

/***/ "./resources/js/TwApps/containers/TwitterApps.jsx":
/*!********************************************************!*\
  !*** ./resources/js/TwApps/containers/TwitterApps.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");
/* harmony import */ var _components_TwAppsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TwAppsHeader */ "./resources/js/TwApps/components/TwAppsHeader.jsx");
/* harmony import */ var _MuteReminder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MuteReminder */ "./resources/js/TwApps/containers/MuteReminder.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./resources/js/TwApps/actions/index.js");
/* harmony import */ var _components_LoadingImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingImg */ "./resources/js/TwApps/components/LoadingImg.jsx");
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

  function TwitterApps(props) {
    var _this;

    _classCallCheck(this, TwitterApps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwitterApps).call(this, props));
    var baseUrl = _this.props.baseUrl; // 全コンポーネントの処理の中で最初にurlのセットを行うために
    // componentDidMountではなくConsoructorで処理を行う

    _this.props.setBaseUrl(baseUrl);

    return _this;
  }

  _createClass(TwitterApps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var baseUrl = this.props.baseUrl;
      this.props.requestUserInfo(baseUrl + _TwAppsConst__WEBPACK_IMPORTED_MODULE_3__["default"].USER_INFO_ENDPOINT);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "twitter-apps"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoadingImg__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TwAppsHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MuteReminder__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return TwitterApps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

TwitterApps.propTypes = {
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  requestUserInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setBaseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
}, {
  setBaseUrl: _actions__WEBPACK_IMPORTED_MODULE_6__["setBaseUrl"],
  requestUserInfo: _actions__WEBPACK_IMPORTED_MODULE_6__["requestUserInfo"]
})(TwitterApps));

/***/ }),

/***/ "./resources/js/TwApps/modules/convertBreak.js":
/*!*****************************************************!*\
  !*** ./resources/js/TwApps/modules/convertBreak.js ***!
  \*****************************************************/
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

/***/ "./resources/js/TwApps/modules/requestToServer.js":
/*!********************************************************!*\
  !*** ./resources/js/TwApps/modules/requestToServer.js ***!
  \********************************************************/
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

/***/ "./resources/js/TwApps/reducers/index.js":
/*!***********************************************!*\
  !*** ./resources/js/TwApps/reducers/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TwAppsConst */ "./resources/js/TwApps/TwAppsConst.js");



var baseUrl = function baseUrl() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_BASE_URL:
      return action.baseUrl;

    default:
      return state;
  }
}; // メニュー開閉状態


var isMuterMenuOpened = function isMuterMenuOpened() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_ISMUTERMENU_OPENED:
      return action.isMuterMenuOpened;

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

var muted = function muted() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // stateのアドレスが変わらないとレンダリングがされない
  // 旧stateの値をコピーした変数を用意する
  var newMuted = state.concat();

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_MUTED:
      return action.muted;

    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_TOGGLE_MUTED:
      newMuted[action.index] = !state[action.index];
      return newMuted;

    default:
      return state;
  }
};

var muteRequestStatus = function muteRequestStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_COMPLETE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_MUTE_REQUEST_START:
      return _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_LOADING;

    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_MUTE_REQUEST_END:
      return _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_COMPLETE;

    default:
      return state;
  }
}; // ユーザー情報は最初に必ずロードするため、初期ステータスはロード中


var userRequestStatus = function userRequestStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_LOADING;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_USER_REQUEST_START:
      return _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_LOADING;

    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_USER_REQUEST_END:
      return _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].REQUEST_STATUS_COMPLETE;

    default:
      return state;
  }
}; // 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列


var errMessage = function errMessage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_ERR_MESSAGE:
      return action.message;

    default:
      return state;
  }
}; // ユーザーに通知する小さなメッセージ
// なにもない場合はから文字列


var popUpMessage = function popUpMessage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _TwAppsConst__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CHANGE_POPUP_MESSAGE:
      return action.message;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  baseUrl: baseUrl,
  isMuterMenuOpened: isMuterMenuOpened,
  userInfo: userInfo,
  mutedUsers: mutedUsers,
  muted: muted,
  muteRequestStatus: muteRequestStatus,
  userRequestStatus: userRequestStatus,
  errMessage: errMessage,
  popUpMessage: popUpMessage
}));

/***/ }),

/***/ "./resources/js/muter_index.jsx":
/*!**************************************!*\
  !*** ./resources/js/muter_index.jsx ***!
  \**************************************/
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
/* harmony import */ var _TwApps_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TwApps/reducers */ "./resources/js/TwApps/reducers/index.js");
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base_path */ "base_path");
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(base_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TwApps_containers_TwitterApps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TwApps/containers/TwitterApps */ "./resources/js/TwApps/containers/TwitterApps.jsx");









var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_TwApps_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
var appElem = document.querySelector('.react-homeapp');

if (appElem) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TwApps_containers_TwitterApps__WEBPACK_IMPORTED_MODULE_8__["default"], {
    baseUrl: base_path__WEBPACK_IMPORTED_MODULE_7___default.a
  })), appElem);
}

/***/ }),

/***/ "./resources/sass/LoginPage/login_index.scss":
/*!***************************************************!*\
  !*** ./resources/sass/LoginPage/login_index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/TwApps/muter_index.scss":
/*!************************************************!*\
  !*** ./resources/sass/TwApps/muter_index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************!*\
  !*** multi ./resources/js/muter_index.jsx ./resources/sass/TwApps/muter_index.scss ./resources/sass/LoginPage/login_index.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kanta/Desktop/WORKSPACE/10.Development/20.Web/MuteReminder/resources/js/muter_index.jsx */"./resources/js/muter_index.jsx");
__webpack_require__(/*! /Users/kanta/Desktop/WORKSPACE/10.Development/20.Web/MuteReminder/resources/sass/TwApps/muter_index.scss */"./resources/sass/TwApps/muter_index.scss");
module.exports = __webpack_require__(/*! /Users/kanta/Desktop/WORKSPACE/10.Development/20.Web/MuteReminder/resources/sass/LoginPage/login_index.scss */"./resources/sass/LoginPage/login_index.scss");


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
//# sourceMappingURL=muter_index.js.map