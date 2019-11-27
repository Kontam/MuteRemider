(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/login_index"],{

/***/ "./resources/img/arrow_down.svg":
/*!**************************************!*\
  !*** ./resources/img/arrow_down.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/arrow_down.svg?4949493d7b47066988b3e7c05e77e21b";

/***/ }),

/***/ "./resources/js/LoginPage/Actions/index.ts":
/*!*************************************************!*\
  !*** ./resources/js/LoginPage/Actions/index.ts ***!
  \*************************************************/
/*! exports provided: setAppName, setBasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppName", function() { return setAppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasePath", function() { return setBasePath; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/LoginPage/Actions/types.ts");

const setAppName = (appName) => (dispatch) => {
    dispatch({ type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_APPNAME, payload: appName });
};
const setBasePath = (basePath) => (dispatch) => {
    dispatch({ type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_BASEPATH, payload: basePath });
};


/***/ }),

/***/ "./resources/js/LoginPage/Actions/types.ts":
/*!*************************************************!*\
  !*** ./resources/js/LoginPage/Actions/types.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ActionTypes = {
    SET_APPNAME: 'SET_APPNAME',
    SET_BASEPATH: 'SET_BASEPATH',
};
/* harmony default export */ __webpack_exports__["default"] = (ActionTypes);


/***/ }),

/***/ "./resources/js/LoginPage/LoginConst.ts":
/*!**********************************************!*\
  !*** ./resources/js/LoginPage/LoginConst.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LoginConst = {
    OWNER_LINK: 'https://konkonta.com',
    OWNER_TWITTER_LINK: 'https://twitter.com/cha_han5656',
    LOGIN_SLAG: '/login',
    BREAKPOINT_SP: 768,
    BREAKPOINT_TABLET: 1024,
    APPNAME_MUTER: 'MuteReminder',
    APPNAME_BLOCKER: 'BlockReminder',
    DESCRIPTION_FIRST_MUTER: 'あなたがミュートしている\r\nユーザーを整理しましょう',
    DESCRIPTION_SECOND_MUTER: '見ても良いと思ったら\r\nミュートを解除しましょう',
    DESCRIPTION_LOGIN_TWITTER: 'このツールがあなたのアカウントで\r\nツイートすることはありません',
};
/* harmony default export */ __webpack_exports__["default"] = (LoginConst);


/***/ }),

/***/ "./resources/js/LoginPage/actions/index.ts":
/*!*************************************************!*\
  !*** ./resources/js/LoginPage/actions/index.ts ***!
  \*************************************************/
/*! exports provided: setAppName, setBasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppName", function() { return setAppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasePath", function() { return setBasePath; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/LoginPage/actions/types.ts");

const setAppName = (appName) => (dispatch) => {
    dispatch({ type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_APPNAME, payload: appName });
};
const setBasePath = (basePath) => (dispatch) => {
    dispatch({ type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_BASEPATH, payload: basePath });
};


/***/ }),

/***/ "./resources/js/LoginPage/actions/types.ts":
/*!*************************************************!*\
  !*** ./resources/js/LoginPage/actions/types.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ActionTypes = {
    SET_APPNAME: 'SET_APPNAME',
    SET_BASEPATH: 'SET_BASEPATH',
};
/* harmony default export */ __webpack_exports__["default"] = (ActionTypes);


/***/ }),

/***/ "./resources/js/LoginPage/components/ApplicationTop.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/LoginPage/components/ApplicationTop.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions */ "./resources/js/LoginPage/Actions/index.ts");
/* harmony import */ var _auganisms_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auganisms/PageHeader */ "./resources/js/LoginPage/components/auganisms/PageHeader.tsx");
/* harmony import */ var _auganisms_LoginSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auganisms/LoginSection */ "./resources/js/LoginPage/components/auganisms/LoginSection.tsx");
/* harmony import */ var _molecules_ReadMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./molecules/ReadMore */ "./resources/js/LoginPage/components/molecules/ReadMore.tsx");
/* harmony import */ var _auganisms_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auganisms/Carousel */ "./resources/js/LoginPage/components/auganisms/Carousel.tsx");
/* harmony import */ var _auganisms_SwitchSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auganisms/SwitchSection */ "./resources/js/LoginPage/components/auganisms/SwitchSection.tsx");
/* harmony import */ var _auganisms_SNSAdSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auganisms/SNSAdSection */ "./resources/js/LoginPage/components/auganisms/SNSAdSection.tsx");
/* harmony import */ var _auganisms_PageFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auganisms/PageFooter */ "./resources/js/LoginPage/components/auganisms/PageFooter.tsx");










const ApplicationTop = ({ basePath, match, setAppName }) => {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        setAppName(match.params.appName);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_LoginSection__WEBPACK_IMPORTED_MODULE_4__["default"], { basePath: basePath }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_ReadMore__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_SwitchSection__WEBPACK_IMPORTED_MODULE_7__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_SNSAdSection__WEBPACK_IMPORTED_MODULE_8__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auganisms_PageFooter__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({
    appName: state.appName,
}), {
    setAppName: _Actions__WEBPACK_IMPORTED_MODULE_2__["setAppName"],
})(ApplicationTop));


/***/ }),

/***/ "./resources/js/LoginPage/components/LoginPage.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/LoginPage/components/LoginPage.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./resources/js/LoginPage/actions/index.ts");
/* harmony import */ var _ApplicationTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationTop */ "./resources/js/LoginPage/components/ApplicationTop.tsx");






const LoginPage = ({ basePath, setBasePath }) => {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        setBasePath(basePath);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { exact: true, path: "/", render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], { to: "/MuteReminder" }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: "/:appName", component: _ApplicationTop__WEBPACK_IMPORTED_MODULE_5__["default"] })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(() => ({}), { setBasePath: _actions__WEBPACK_IMPORTED_MODULE_4__["setBasePath"] })(LoginPage));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    overflow-x: hidden;
`;


/***/ }),

/***/ "./resources/js/LoginPage/components/atoms/CarouselPage/index.tsx":
/*!************************************************************************!*\
  !*** ./resources/js/LoginPage/components/atoms/CarouselPage/index.tsx ***!
  \************************************************************************/
/*! exports provided: default, StyledImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImg", function() { return StyledImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../commonModules/media */ "./resources/js/commonModules/media.ts");



const CarouselPage = ({ carouselInfo }) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Img, { src: carouselInfo.src, alt: carouselInfo.alt, className: "loginCarousel__slideImg" })));
CarouselPage.displayName = "CarouselPage";
/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
    max-height: 90vh;
    width: 100vw;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
      margin: 0 auto;
      max-width: 1200px;
      width: auto;
    }
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].tablet}{
      max-width: 90%;
    }
`;
Img.displayName = "Img";
const StyledImg = Img;


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/Carousel.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/Carousel.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_setSlickCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/setSlickCarousel */ "./resources/js/LoginPage/modules/setSlickCarousel.js");
/* harmony import */ var _atoms_CarouselPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/CarouselPage */ "./resources/js/LoginPage/components/atoms/CarouselPage/index.tsx");
/* harmony import */ var _molecules_CrouselArrows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/CrouselArrows */ "./resources/js/LoginPage/components/molecules/CrouselArrows/index.tsx");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");







;
// =============================================
// slick-carouselを使用しているためstyled-component化できない部分がある
// 後の課題として、ひとまずscssファイルとクラス名付きのjsxを残す
// =============================================
const Carousel = () => {
    const [hidden, setHidden] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
    // slickのカルーセル化の処理が終わるまで隠す
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        Object(_modules_setSlickCarousel__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-js-slick="container"]');
        setHidden(false);
    }, []);
    // カルーセルの情報
    const carouselInfos = [
        {
            src: "img/slides/muter-slide1.jpg",
            alt: "Twitterのミュートを有効活用しましょう",
        },
        {
            src: "img/slides/muter-slide2.jpg",
            alt: "あなたがミュートしたユーザーを一覧表示 その場でミュート解除もできます",
        },
        {
            src: "img/slides/muter-slide3.jpg",
            alt: "「チラ見」機能で、その人のツイートをいくつか見ることができます",
        },
        {
            src: "img/slides/muter-slide4.jpg",
            alt: "安全なアプリです。あなたのアカウントからツイートすることは決してありません",
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselBody, { style: hidden ? { opacity: 0 } : { opacity: 1 } }, carouselInfos.map((carouselInfo, index) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_CarouselPage__WEBPACK_IMPORTED_MODULE_3__["default"], { carouselInfo: carouselInfo, key: index })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_CrouselArrows__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  background-color: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].muterGreen};
  padding: 50px 0 120px;
  position: relative;
`;
const Slick = ({ className, children }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className, "data-js-slick": "container" }, children));
const CarouselBody = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Slick) `
  width: 120%;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_6__["mediaQ"].pc}{
    margin: 0 auto;
    width: 1400px;
    max-width: 95%;
    min-height: 620px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/LoginForm.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/LoginForm.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");
/* harmony import */ var _molecules_LoginButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../molecules/LoginButton */ "./resources/js/LoginPage/components/molecules/LoginButton/index.tsx");
/* harmony import */ var _molecules_OwnerLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../molecules/OwnerLink */ "./resources/js/LoginPage/components/molecules/OwnerLink.tsx");







const LoginForm = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_OwnerLink__WEBPACK_IMPORTED_MODULE_6__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginContainer, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_LoginButton__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginDescription, null, _LoginConst__WEBPACK_IMPORTED_MODULE_4__["default"].DESCRIPTION_LOGIN_TWITTER))));
const LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  background-color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].muterGreen};
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].basicWhite};
  padding: 70px 0 45px;
  width: 100%;

  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    display: flex;
    flex-direction: column-reverse;
    height: 340px;
    justify-content: flex-end;
    padding: 48px;
    max-width: 500px;
  }
`;
const LoginDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].basicWhite};
  font-size: 1.25rem;
  font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].fwBold};
  line-height: 2.5;
  margin-top: 50px;
  text-align: center;
  white-space: pre;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    font-size: 1.5rem;
    margin-top: 0;
  }
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].tablet}{
    font-size: 1.25rem;
    min-width: 340px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/LoginSection.tsx":
/*!**********************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/LoginSection.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./resources/js/LoginPage/components/auganisms/LoginForm.tsx");






;
const LoginSection = ({ basePath }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginContainer, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginDiscription, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph1, null, _LoginConst__WEBPACK_IMPORTED_MODULE_4__["default"].DESCRIPTION_FIRST_MUTER),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph2, null, _LoginConst__WEBPACK_IMPORTED_MODULE_4__["default"].DESCRIPTION_SECOND_MUTER)),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginRightColumn, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
const LoginContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    max-width: 1200px;
    margin: 0 auto;
    padding: 75px 0;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 400px;
    height: calc(100vh - ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].pcHeaderHeight} - ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].pcReadmoreHeight});
  }
`;
const LoginDiscription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  padding: 44px 60px 35px;
  text-align: center;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    padding: 0;
    margin-right: 9%;
    text-align: left;
  }
`;
const ParagraphCommon = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"] `
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].twitterBlue};
  font-size: 1.25rem;
  font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].fwMedium};
  line-height: 3;
  white-space: pre;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    font-size: 2rem;
    font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].fwMedium};
    line-height: 2;
  }
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].tablet}{
    font-size: 1.25rem;
    margin-left: 5%;
    min-width: 260px;
  }
`;
const Paragraph1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  ${ParagraphCommon}
`;
const Paragraph2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  ${ParagraphCommon}
  margin-top: 14px;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    margin-top: 55px;
  }
`;
const LoginRightColumn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div ``;
/* harmony default export */ __webpack_exports__["default"] = (LoginSection);


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/PageFooter.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/PageFooter.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _molecules_OwnerInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/OwnerInfo */ "./resources/js/LoginPage/components/molecules/OwnerInfo.tsx");





const PageFooter = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_OwnerInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null, "Copyright \u00A9 Konkonta All right reserved"))));
/* harmony default export */ __webpack_exports__["default"] = (PageFooter);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer `
  background-color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].twitterBlue};
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].basicWhite};
  padding: 10px;
  text-align: center;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    height: 150px;
    padding: 75px 0 8px;
    text-align: right;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    margin: 0 auto;
    max-width: 1220px;
    padding-right: 20px;
  }
`;
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
    font-size: 12px;
    margin-top: 40px;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
      font-size: 1.25rem;
      margin-top: 8px;
    }
`;


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/PageHeader.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/PageHeader.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");






const PageHeader = ({ appName }) => {
    const muterLabel = {
        line1: 'あの人は今？',
        line2: 'チェッカー',
        eng: 'Mute Reminder',
    };
    const blockerLabel = {
        line1: 'ブロック',
        line2: 'リマインダー',
        eng: 'Block Reminder',
    };
    const headLabel = appName === _LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].APPNAME_MUTER ? muterLabel : blockerLabel;
    const muterGradient = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"] `linear-gradient(to bottom right, #84FAB1, #8FD3F4)`;
    const blockerGradient = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"] `linear-gradient(to bottom right, #8FD3F4, #79DAE3)`;
    const ContainerBG = appName === _LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].APPNAME_MUTER ? muterGradient : blockerGradient;
    const PageHeadContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    color: #fff;
    background: ${ContainerBG};
    height: 200px;
    padding: 30px 35px 15px;
    width: 100%;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
      height: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].pcHeaderHeight};
      padding: 25px 0;
    }
  `;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageHeadContainer, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageHead, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeadLine1, null, headLabel.line1),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeadLine2, null, headLabel.line2)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnglishHead, null, headLabel.eng)));
};
const PageHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1 `
    font-size: 2.125rem;
    font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].fwBold};
    margin: 0 auto;
    max-width: 350px;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc} {
      display: flex;
      font-size: 5.25rem;
      justify-content: center;
      line-height: 140px;
      max-width: none;
    }
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].tablet}{
      font-size: 4rem;
    }
`;
const HeadLine1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
`;
const HeadLine2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    margin-top: 17px;
    text-align: right;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
      margin: 0;
    }
`;
const EnglishHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    font-family: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].engHeadFont};
    font-size: 2.5rem;
    font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].fwMedium};
    text-align: center;
    margin-top: 25px;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
      font-size: 5.25rem;
      margin: 0;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    appName: state.appName,
}))(PageHeader));


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/SNSAdSection.tsx":
/*!**********************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/SNSAdSection.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SNSLinks_components_SNSLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../SNSLinks/components/SNSLinks */ "./resources/js/SNSLinks/components/SNSLinks.jsx");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");





const SNSAdSection = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, null, "\u6C17\u306B\u5165\u3063\u3066\u304F\u3060\u3055\u3044\u307E\u3057\u305F\u3089"),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FirstP, null, '「あの人は今？チェッカー」は\r\n個人で開発されました'),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecondP, null, 'たくさんのユーザーに利用されることが\r\n開発者の励みになります'),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThirdP, null, 'あなたのお友達にもこのアプリを\r\nぜひご紹介ください'),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SNSLinks_components_SNSLinks__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
/* harmony default export */ __webpack_exports__["default"] = (SNSAdSection);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  padding: 150px 0;
  text-align: center;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    padding: 150px 0;
    text-align: center;
  }
`;
const Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2 `
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].twitterBlue};
  font-size: 1.625rem;
  font-weight: bold;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    font-size: 3rem;
  }
`;
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"] `
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].lightLabelColor};
  font-size: 1.125rem;
  line-height: 2.5;
  white-space: pre-wrap;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    font-size: 1.25rem;
    line-height: 3;
    white-space: normal;
  }
`;
const FirstP = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  ${Paragraph}
  margin-top: 30px;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    margin-top: 100px;
  }
`;
const SecondP = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  ${Paragraph}
  margin-top: 45px;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    margin-top: 0;
  }
`;
const ThirdP = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  ${Paragraph}
  margin-top: 45px;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_4__["mediaQ"].pc}{
    margin-top: 0;
  }
`;


/***/ }),

/***/ "./resources/js/LoginPage/components/auganisms/SwitchSection.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/LoginPage/components/auganisms/SwitchSection.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");
/* harmony import */ var _molecules_AppButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../molecules/AppButtons */ "./resources/js/LoginPage/components/molecules/AppButtons/index.tsx");






;
const SwitchSection = ({ appName }) => {
    const backgroundColor = appName === _LoginConst__WEBPACK_IMPORTED_MODULE_4__["default"].APPNAME_MUTER ?
        _styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].muterGreen : _styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].blockerBlue;
    const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    font-size: 26px;
    font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].fwBold};
    color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].basicWhite};
    background: ${backgroundColor};
    padding: 50px 0 100px;
    text-align: center;
    transition: .3s;
  `;
    const Head = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2 ``;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, null, "\u4ED6\u306E\u30A2\u30D7\u30EA\u3082\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_AppButtons__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    appName: state.appName,
}))(SwitchSection));


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/AppButtons/index.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/AppButtons/index.tsx ***!
  \**************************************************************************/
/*! exports provided: MuterButton, BlockerButton, List, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuterButton", function() { return MuterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockerButton", function() { return BlockerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions */ "./resources/js/LoginPage/actions/index.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");







const Button = (props) => {
    const { className, children, linkTo, onClick } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: `${linkTo}`, className: className, type: "button", onClick: onClick }, children));
};
const commonButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Button) `
  ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["resetAnchor"]}
  width: 250px;
  height: 50px;
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].basicWhite};
  font-weight: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].fwBold};
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
`;
const MuterButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(commonButton) `
  background: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].muterLightGreen};
  opacity: ${(props) => props.appName !== _LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_MUTER ? 1 : .5};
`;
const BlockerButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(commonButton) `
  background: ${_styles_define__WEBPACK_IMPORTED_MODULE_5__["default"].blockerBlue};
  opacity: ${(props) => props.appName === _LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_MUTER ? 1 : .5};
  margin-top: 80px;
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul `
  margin-top: 80px;
`;
const AppButtons = ({ appName, setAppName }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](List, null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MuterButton, { appName: appName, linkTo: `/${_LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_MUTER}`, onClick: () => { setAppName(_LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_MUTER); } }, "\u30DF\u30E5\u30FC\u30C8\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BlockerButton, { appName: appName, linkTo: `/${_LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_BLOCKER}`, onClick: () => { setAppName(_LoginConst__WEBPACK_IMPORTED_MODULE_6__["default"].APPNAME_BLOCKER); } }, "\u30D6\u30ED\u30C3\u30AF\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state) => ({
    appName: state.appName,
}), { setAppName: _actions__WEBPACK_IMPORTED_MODULE_4__["setAppName"] })(AppButtons));


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/CrouselArrows/index.tsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/CrouselArrows/index.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../commonModules/media */ "./resources/js/commonModules/media.ts");




const CarouselArrows = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrows, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, { data_js_slick: "prev" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowImg, { src: "img/slick/slick-arrow-left.svg", alt: "prev" })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, { data_js_slick: "next" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ArrowImg, { src: "img/slick/slick-arrow-right.svg", alt: "next" }))));
};
/* harmony default export */ __webpack_exports__["default"] = (CarouselArrows);
const Arrows = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  display: none;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].pc}{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    left: 50%;
    margin: 0 auto;
    width: 1400px;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    min-width: 1000px;
  }
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].tablet}{
    display: none;
  }
`;
const ArrowImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
  max-width: 50px;
`;
const SlickArrow = ({ className, data_js_slick, children }) => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { "data-js-slick": data_js_slick, className: className }, children));
const Arrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SlickArrow) `
 ${_commonModules_media__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].pc}{
     ${_styles_define__WEBPACK_IMPORTED_MODULE_2__["resetButton"]};
     cursor: pointer;
 }
`;


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/LoginButton/index.tsx":
/*!***************************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/LoginButton/index.tsx ***!
  \***************************************************************************/
/*! exports provided: LoginLink, TwitterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLink", function() { return LoginLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../commonModules/media */ "./resources/js/commonModules/media.ts");






const LoginButton = ({ basePath }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoginLink, { href: `${basePath}${_LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIN_SLAG}` },
        "\u30ED\u30B0\u30A4\u30F3",
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TwitterIcon, { src: "img/twitter_white_icon.svg", alt: "twitter" })));
};
const LoginLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a `
  ${_styles_define__WEBPACK_IMPORTED_MODULE_4__["resetAnchor"]}
  align-items: center;
  background-color: ${_styles_define__WEBPACK_IMPORTED_MODULE_4__["default"].twitterBlue};
  border-radius: 5px;
  box-shadow: 0 5px ${_styles_define__WEBPACK_IMPORTED_MODULE_4__["default"].twitterShadowBlue};
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_4__["default"].basicWhite};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 55px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transition: .2s;
  width: 280px;
  &:active {
      box-shadow: 0 0 ${_styles_define__WEBPACK_IMPORTED_MODULE_4__["default"].twitterShadowBlue};
      transform: translateY(5px);
  }
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_5__["mediaQ"].pc} {
    margin: 60px auto 0;
  }
`;
const TwitterIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img `
    margin-left: 15px;
    width: 40px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])((state) => ({ basePath: state.basePath, }), {})(LoginButton));


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/OwnerInfo.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/OwnerInfo.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");



// import StyleConst from '../styles/define';

const OwnerInfo = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerHead, null, "\u5236\u4F5C"),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerName, null, "\u30B3\u30F3\u30B3\u30F3\u30BF"),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerLink, { href: _LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].OWNER_LINK, target: "_blank", rel: "noopener noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeIcon, { src: "img/house_white_icon.svg", alt: "home", className: "footerOwnerInfo__homeIcon" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerLink, { href: _LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].OWNER_TWITTER_LINK, target: "_blank", rel: "noopener noreferrer" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TwitterIcon, { src: "img/twitter_white_icon.svg", alt: "twitter", className: "footerOwnerInfo__twitterIcon" }))))));
/* harmony default export */ __webpack_exports__["default"] = (OwnerInfo);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  }
`;
const OwnerHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2 `
  font-size: 1.125rem;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    font-size: 1.375rem;
    margin-right: 25px;
  }
`;
const OwnerName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p `
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    font-size: 1.375rem;
    margin-top: 0;
  }
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul `
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
      margin-top: 0;
    }
`;
const OwnerLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a `
    margin: 0 12px;
    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
      margin: 0 0 0 15px;
    }
`;
const HomeIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
    width: 26px;
`;
const TwitterIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
    width: 26px;
`;


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/OwnerLink.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/OwnerLink.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _LoginConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoginConst */ "./resources/js/LoginPage/LoginConst.ts");




const OwnerLink = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerLinkText, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OwnerIcon, { src: "img/house_icon.svg", alt: "home" }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, { href: _LoginConst__WEBPACK_IMPORTED_MODULE_3__["default"].OWNER_LINK, target: "_blank", rel: "noopener noreferrer" }, "\u5236\u4F5C\u8005\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8")));
const OwnerLinkText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  text-align: right;
  padding: 0 10px;
  margin-bottom: 3px;
  cursor: pointer;
`;
const OwnerIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img `
  margin-right: 3px;
  width: 12px;
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a `
  ${_styles_define__WEBPACK_IMPORTED_MODULE_2__["resetAnchor"]}
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_2__["default"].twitterBlue};
  font-size: 0.66rem;
  vertical-align: 1px;
`;
/* harmony default export */ __webpack_exports__["default"] = (OwnerLink);


/***/ }),

/***/ "./resources/js/LoginPage/components/molecules/ReadMore.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/LoginPage/components/molecules/ReadMore.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commonModules_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModules/media */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _styles_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/define */ "./resources/js/LoginPage/styles/define.ts");
/* harmony import */ var _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../img/arrow_down.svg */ "./resources/img/arrow_down.svg");
/* harmony import */ var _img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4__);





const ReadMore = () => (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, "\u4F55\u306E\u305F\u3081\u306E\u30C4\u30FC\u30EB\uFF1F"),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, null)));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  background-color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].muterGreen};
  text-align: center;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    height: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].pcReadmoreHeight};
    padding: 20px;
  }
`;
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
  color: ${_styles_define__WEBPACK_IMPORTED_MODULE_3__["default"].basicWhite};
  font-size: .875rem;
  ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
    font-size: 1.5rem;
  }
`;
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div `
    background: url(${_img_arrow_down_svg__WEBPACK_IMPORTED_MODULE_4___default.a}) center / contain no-repeat;
    height: 7px;
    margin-top: 5px;

    ${_commonModules_media__WEBPACK_IMPORTED_MODULE_2__["mediaQ"].pc}{
      height: 15px;
      margin-top: 15px;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (ReadMore);


/***/ }),

/***/ "./resources/js/LoginPage/modules/setSlickCarousel.js":
/*!************************************************************!*\
  !*** ./resources/js/LoginPage/modules/setSlickCarousel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoginConst_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoginConst.ts */ "./resources/js/LoginPage/LoginConst.ts");




var setSlickCarousel = function setSlickCarousel(containerSelector) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(containerSelector)).slick({
    infinite: true,
    dots: true,
    arrows: true,
    dragable: true,
    nextArrow: '[data-js-slick="next"]',
    prevArrow: '[data-js-slick="prev"]',
    responsive: [{
      breakpoint: _LoginConst_ts__WEBPACK_IMPORTED_MODULE_2__["default"].BREAKPOINT_TABLET,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: _LoginConst_ts__WEBPACK_IMPORTED_MODULE_2__["default"].BREAKPOINT_SP,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        fade: false,
        arrows: false
      }
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setSlickCarousel);

/***/ }),

/***/ "./resources/js/LoginPage/reducers/index.ts":
/*!**************************************************!*\
  !*** ./resources/js/LoginPage/reducers/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./resources/js/LoginPage/actions/types.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


const appName = (state = "", action) => {
    switch (action.type) {
        case _actions_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_APPNAME:
            return action.payload;
        default:
            return state;
    }
    ;
};
const basePath = (state = "", action) => {
    switch (action.type) {
        case _actions_types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_BASEPATH:
            return action.payload;
        default:
            return state;
    }
    ;
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    appName,
    basePath
}));


/***/ }),

/***/ "./resources/js/LoginPage/styles/define.ts":
/*!*************************************************!*\
  !*** ./resources/js/LoginPage/styles/define.ts ***!
  \*************************************************/
/*! exports provided: resetAnchor, resetButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAnchor", function() { return resetAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetButton", function() { return resetButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const StyleConst = {
    // Colors
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
    facebookBlue: '#7EA7E5',
    //font-weight
    fwBold: 700,
    fwMedium: 500,
    fwNormal: 400,
    fwLight: 300,
    //font-family
    engHeadFont: "'brush-script-std', sans-serif",
    // //numbers
    menuAmimationDistance: '220px',
    muterMenuWidth: '300px',
    pcHeaderHeight: '280px',
    pcReadmoreHeight: '100px',
};
const resetAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"] `
  color: inherit;
  text-decoration: none;
`;
const resetButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["css"] `
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:focus {
    outline: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyleConst);


/***/ }),

/***/ "./resources/js/SNSLinks/SNSLinksConst.js":
/*!************************************************!*\
  !*** ./resources/js/SNSLinks/SNSLinksConst.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SNSLinksConst = {
  LOG_FILENAME_KEY: 'f_name',
  LOG_SNS_FILENAME: 'js_sns',
  LOG_SNS_KEY_NAME: 'sns_name',
  LOG_SNS_KEY_SHARE_URL: 'share_url'
};
/* harmony default export */ __webpack_exports__["default"] = (SNSLinksConst);

/***/ }),

/***/ "./resources/js/SNSLinks/components/FacebookLinkButton.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/SNSLinks/components/FacebookLinkButton.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SNSLinkButton */ "./resources/js/SNSLinks/components/SNSLinkButton.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FacebookLinkButton =
/*#__PURE__*/
function (_SNSLinkButton) {
  _inherits(FacebookLinkButton, _SNSLinkButton);

  function FacebookLinkButton(props) {
    var _this;

    _classCallCheck(this, FacebookLinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FacebookLinkButton).call(this, props));
    _this.sns_name = 'Facebook'; // ログ出力用

    _this.endPoint = 'https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&display=popup&ref=plugin&src=share_button';
    _this.href = "".concat(_this.endPoint, "&u=").concat(_this.shareURL);
    _this.className = 'facebook-share-button';
    _this.text = "".concat(_this.sns_name, "\u3067\u7D39\u4ECB");
    _this.styledComponent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
      displayName: "FacebookLinkButton__styledComponent",
      componentId: "x06qd0-0"
    })(["", " background-color:#7EA7E5"], _this.commonStyle);
    return _this;
  }

  return FacebookLinkButton;
}(_SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FacebookLinkButton);

/***/ }),

/***/ "./resources/js/SNSLinks/components/LineLinkButton.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/SNSLinks/components/LineLinkButton.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SNSLinkButton */ "./resources/js/SNSLinks/components/SNSLinkButton.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var LineLinkButton =
/*#__PURE__*/
function (_SNSLinkButton) {
  _inherits(LineLinkButton, _SNSLinkButton);

  function LineLinkButton(props) {
    var _this;

    _classCallCheck(this, LineLinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineLinkButton).call(this, props));
    _this.sns_name = 'Line'; // ログ出力用

    _this.endPoint = 'https://social-plugins.line.me/lineit/share';
    _this.href = "".concat(_this.endPoint, "?url=").concat(_this.shareURL); // this.className = 'line-share-button';

    _this.styledComponent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
      displayName: "LineLinkButton__styledComponent",
      componentId: "sc-12gksux-0"
    })(["", " background-color:#86F3B0;"], _this.commonStyle);
    _this.text = "".concat(_this.sns_name, "\u3067\u7D39\u4ECB");
    return _this;
  }

  return LineLinkButton;
}(_SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (LineLinkButton);

/***/ }),

/***/ "./resources/js/SNSLinks/components/SNSLinkButton.jsx":
/*!************************************************************!*\
  !*** ./resources/js/SNSLinks/components/SNSLinkButton.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonModules_media_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonModules/media.ts */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _commonModules_sendLogData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonModules/sendLogData */ "./resources/js/commonModules/sendLogData.js");
/* harmony import */ var _SNSLinksConst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SNSLinksConst */ "./resources/js/SNSLinks/SNSLinksConst.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SNSLinkButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SNSLinkButton, _Component);

  function SNSLinkButton(props) {
    var _this;

    _classCallCheck(this, SNSLinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SNSLinkButton).call(this, props));
    _this.width = 800;
    _this.height = 470;
    var _window$location = window.location,
        origin = _window$location.origin,
        pathname = _window$location.pathname;
    _this.shareURL = origin + pathname;
    _this.href = ''; // リンク先

    _this.text = ''; // ラベル

    _this.styledComponent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
      displayName: "SNSLinkButton__styledComponent",
      componentId: "sc-1ndq1gc-0"
    })([""]); // ボタンの共通スタイルを定義

    _this.commonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["appearance:none;background-color:transparent;border:0;padding:0;&:focus{outline:0;}border-radius:5px;color:#fff;cursor:pointer;display:block;font-size:1.25rem;font-weight:bold;height:50px;margin:40px auto 0;width:180px;", "{display:inline;margin:0 50px;}", "{margin:0 25px;}"], _commonModules_media_ts__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].pc, _commonModules_media_ts__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].tablet);
    return _this;
  }

  _createClass(SNSLinkButton, [{
    key: "makeLogParams",
    value: function makeLogParams() {
      var logParams = {};
      logParams[_SNSLinksConst__WEBPACK_IMPORTED_MODULE_5__["default"].LOG_FILENAME_KEY] = _SNSLinksConst__WEBPACK_IMPORTED_MODULE_5__["default"].LOG_SNS_FILENAME;
      logParams[_SNSLinksConst__WEBPACK_IMPORTED_MODULE_5__["default"].LOG_SNS_KEY_NAME] = this.sns_name;
      logParams[_SNSLinksConst__WEBPACK_IMPORTED_MODULE_5__["default"].LOG_SNS_KEY_SHARE_URL] = this.shareURL;
      return logParams;
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var logEndPoint = this.props.logEndPoint;
      window.open(encodeURI(decodeURI(this.href)), 'sns-window', "width=".concat(this.width, ",") + "height=".concat(this.height, ",") + 'personalbar=0,' + 'toolbar=0,' + 'scrollbars=1,' + 'sizable=1'); // ログ送信先があればログ送信

      if (logEndPoint) {
        Object(_commonModules_sendLogData__WEBPACK_IMPORTED_MODULE_4__["default"])(logEndPoint, this.makeLogParams());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.styledComponent, {
        type: "button",
        onClick: function onClick() {
          _this2.handleClick();
        }
      }, this.text);
    }
  }]);

  return SNSLinkButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SNSLinkButton.propTypes = {
  logEndPoint: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
SNSLinkButton.defaultProps = {
  logEndPoint: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SNSLinkButton);

/***/ }),

/***/ "./resources/js/SNSLinks/components/SNSLinks.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/SNSLinks/components/SNSLinks.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonModules_media_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonModules/media.ts */ "./resources/js/commonModules/media.ts");
/* harmony import */ var _TwitterLinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TwitterLinkButton */ "./resources/js/SNSLinks/components/TwitterLinkButton.jsx");
/* harmony import */ var _LineLinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineLinkButton */ "./resources/js/SNSLinks/components/LineLinkButton.jsx");
/* harmony import */ var _FacebookLinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FacebookLinkButton */ "./resources/js/SNSLinks/components/FacebookLinkButton.jsx");








var SNSLinks = function SNSLinks(_ref) {
  var logEndPoint = _ref.logEndPoint;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TwitterLinkButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    logEndPoint: logEndPoint
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineLinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    logEndPoint: logEndPoint
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FacebookLinkButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    logEndPoint: logEndPoint
  }));
};

SNSLinks.propTypes = {
  logEndPoint: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
SNSLinks.defaultProps = {
  logEndPoint: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SNSLinks);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SNSLinks__Container",
  componentId: "sc-1037eaf-0"
})(["margin-top:50px;", "{margin-top:130px;}"], _commonModules_media_ts__WEBPACK_IMPORTED_MODULE_3__["mediaQ"].pc);

/***/ }),

/***/ "./resources/js/SNSLinks/components/TwitterLinkButton.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/SNSLinks/components/TwitterLinkButton.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SNSLinkButton */ "./resources/js/SNSLinks/components/SNSLinkButton.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TwitterLinkButton =
/*#__PURE__*/
function (_SNSLinkButton) {
  _inherits(TwitterLinkButton, _SNSLinkButton);

  function TwitterLinkButton(props) {
    var _this;

    _classCallCheck(this, TwitterLinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TwitterLinkButton).call(this, props));
    _this.sns_name = 'Twitter'; // ログ出力用

    _this.endPoint = 'http://twitter.com/share';
    _this.shareText = 'Twitter連携アプリ｜あの人は今？チェッカー';
    _this.href = "".concat(_this.endPoint, "?text=").concat(_this.shareText, "%0a&url=").concat(_this.shareURL);
    _this.text = "".concat(_this.sns_name, "\u3067\u7D39\u4ECB");
    _this.styledComponent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
      displayName: "TwitterLinkButton__styledComponent",
      componentId: "sc-18sjpcu-0"
    })(["", " background-color:#58C6E8;"], _this.commonStyle);
    return _this;
  }

  return TwitterLinkButton;
}(_SNSLinkButton__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TwitterLinkButton);

/***/ }),

/***/ "./resources/js/commonModules/media.ts":
/*!*********************************************!*\
  !*** ./resources/js/commonModules/media.ts ***!
  \*********************************************/
/*! exports provided: mediaQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQ", function() { return mediaQ; });
const breakPoints = {
    PC: 'screen and (min-width: 768px)',
    Tablet: 'screen and (min-width: 768px) and (max-width: 1024px)',
    notMobile: 'screen and (min-width: 1024px)',
};
const mediaQ = {
    pc: '@media screen and (min-width: 768px)',
    tablet: '@media screen and (min-width: 768px) and (max-width: 1024px)',
    notMobile: '@media screen and (min-width: 1024px)',
};
// const media = {
//   pc: (...args :any) => {
//     return (css`
//     @media ${breakPoints.PC} {
//       ${css(...args)}
//     }`)},
//   tablet: (...args :any) => css`
//     @media ${breakPoints.Tablet} {
//       ${css(...args)}
//     }`,
// };
// export default media;


/***/ }),

/***/ "./resources/js/commonModules/sendLogData.js":
/*!***************************************************!*\
  !*** ./resources/js/commonModules/sendLogData.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var sendLogData = function sendLogData(logEndPoint, params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(logEndPoint, {
    params: params
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sendLogData);

/***/ }),

/***/ "./resources/js/login_index.tsx":
/*!**************************************!*\
  !*** ./resources/js/login_index.tsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _LoginPage_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginPage/reducers */ "./resources/js/LoginPage/reducers/index.ts");
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! base_path */ "base_path");
/* harmony import */ var base_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(base_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LoginPage_components_LoginPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginPage/components/LoginPage */ "./resources/js/LoginPage/components/LoginPage.tsx");









const loginElem = document.querySelector('.react-login');
const store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_LoginPage_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], { store: store },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage_components_LoginPage__WEBPACK_IMPORTED_MODULE_8__["default"], { basePath: base_path__WEBPACK_IMPORTED_MODULE_7___default.a })), loginElem);


/***/ }),

/***/ 1:
/*!********************************************!*\
  !*** multi ./resources/js/login_index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kanta/Desktop/WORKSPACE/10.Development/20.Web/MuteReminder/resources/js/login_index.tsx */"./resources/js/login_index.tsx");


/***/ }),

/***/ "base_path":
/*!****************************!*\
  !*** external "base_path" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = base_path;

/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=login_index.js.map