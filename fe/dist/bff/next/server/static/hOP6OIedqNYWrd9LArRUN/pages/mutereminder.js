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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/svM":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMy4xMzEiIGhlaWdodD0iMjIuMzg4IiB2aWV3Qm94PSIwIDAgMjMuMTMxIDIyLjM4OCI+CiAgPGcgaWQ9ImhpZGVfaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1Mi43ODggLTE1MS4wMDMpIj4KICAgIDxnIGlkPSJleWVfaWNvbl/jgqLjg7zjg4jjg5zjg7zjg4lfMSIgZGF0YS1uYW1lPSJleWVfaWNvbl/jgqLjg7zjg4jjg5zjg7zjg4kgMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQ5LjA2IDExNi4yNSkiPgogICAgICA8cGF0aCBpZD0i44OR44K5XzEwIiBkYXRhLW5hbWU9IuODkeOCuSAxMCIgZD0iTTE1LjYxMSw5OC4xNTljLTQuNTEyLDAtOC43NTQtMi42NTEtMTEuMzQ3LTcuMDlsLS4wOTQtLjE2LjA5NC0uMTZjMi41OTMtNC40MzksNi44MzUtNy4wOSwxMS4zNDctNy4wOXM4Ljc1NCwyLjY1MSwxMS4zNDcsNy4wOWwuMDk0LjE2LS4wOTQuMTZDMjQuMzY1LDk1LjUwOSwyMC4xMjMsOTguMTU5LDE1LjYxMSw5OC4xNTlabS0xMC43LTcuMjVjMi40ODQsNC4xNDMsNi40NzIsNi42MTEsMTAuNyw2LjYxMXM4LjIxNS0yLjQ2NywxMC43LTYuNjExYy0yLjQ4NC00LjE0NC02LjQ3Mi02LjYxMi0xMC43LTYuNjEyUzcuNCw4Ni43NjUsNC45MTIsOTAuOTA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEyIC00My4xNTkpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICAgIDxjaXJjbGUgaWQ9IualleWGhuW9ol8xIiBkYXRhLW5hbWU9IualleWGhuW9oiAxIiBjeD0iNS43MjgiIGN5PSI1LjcyOCIgcj0iNS43MjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuNjcxIDQyLjAyMSkiIGZpbGw9IiMwMDUzNWQiLz4KICAgICAgPGNpcmNsZSBpZD0i5qWV5YaG5b2iXzIiIGRhdGEtbmFtZT0i5qWV5YaG5b2iIDIiIGN4PSIxLjU0IiBjeT0iMS41NCIgcj0iMS41NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNDUzIDQ0LjA5MikiIGZpbGw9IiNmZjkxYWIiLz4KICAgICAgPGNpcmNsZSBpZD0i5qWV5YaG5b2iXzMiIGRhdGEtbmFtZT0i5qWV5YaG5b2iIDMiIGN4PSIwLjk2MyIgY3k9IjAuOTYzIiByPSIwLjk2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuNTU1IDQ5Ljc3MSkiIGZpbGw9IiNmZjkxYWIiLz4KICAgICAgPGxpbmUgaWQ9Iue3ml81IiBkYXRhLW5hbWU9Iue3miA1IiB4Mj0iMC43MTciIHkyPSIxLjIyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC42OTcgMzguMjk2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzciIGRhdGEtbmFtZT0i6ZW35pa55b2iIDciIHdpZHRoPSIwLjY0IiBoZWlnaHQ9IjEuNDIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjQyIDM4LjQ1Nykgcm90YXRlKC0zMC4yNykiIGZpbGw9IiMwMDUzNWQiLz4KICAgICAgPGxpbmUgaWQ9Iue3ml82IiBkYXRhLW5hbWU9Iue3miA2IiB4Mj0iMC44NzQiIHkyPSIxLjEyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS44MTIgNDAuMDY1KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzgiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDgiIHdpZHRoPSIwLjY0IiBoZWlnaHQ9IjEuNDIyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjc4OSwgLTAuNjE1LCAwLjYxNSwgMC43ODksIDUuNTYsIDQwLjI2MSkiIGZpbGw9IiMwMDUzNWQiLz4KICAgICAgPGxpbmUgaWQ9Iue3ml83IiBkYXRhLW5hbWU9Iue3miA3IiB4Mj0iMC4zMjkiIHkyPSIxLjM4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMTYyIDM3LjE2KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzkiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDkiIHdpZHRoPSIwLjY0IiBoZWlnaHQ9IjEuNDIyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MywgLTAuMjMxLCAwLjIzMSwgMC45NzMsIDExLjg1LCAzNy4yMzQpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICAgIDxsaW5lIGlkPSLnt5pfOCIgZGF0YS1uYW1lPSLnt5ogOCIgeDE9IjAuMDA4IiB5Mj0iMS40MjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjQwNyAzNi43NTIpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTAiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEwIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMDUsIC0xLCAxLCAwLjAwNSwgMTUuMDg3LCAzOC4xNzMpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICAgIDxwYXRoIGlkPSLjg5HjgrlfMTEiIGRhdGEtbmFtZT0i44OR44K5IDExIiBkPSJNMjYuMzY5LDU3LjY4M2ExNS4yMDgsMTUuMjA4LDAsMCwwLTEwLjktNS4yNzdoLS4wNzRBMTUuMTg0LDE1LjE4NCwwLDAsMCw0LjQyOSw1Ny42NzlsLS40ODktLjQxMWExNS44ODIsMTUuODgyLDAsMCwxLDExLjM3OS01LjVoLjA4YTE1Ljg2MSwxNS44NjEsMCwwLDEsMTEuNDYsNS41MDVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMy44MTkpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICAgIDxsaW5lIGlkPSLnt5pfOSIgZGF0YS1uYW1lPSLnt5ogOSIgeDE9IjAuNzE3IiB5Mj0iMS4yMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjM4MyAzOC4yOTMpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTEiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDExIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMTA2IDM5LjM2MSkgcm90YXRlKC01OS43MykiIGZpbGw9IiMwMDUzNWQiLz4KICAgICAgPGxpbmUgaWQ9Iue3ml8xMCIgZGF0YS1uYW1lPSLnt5ogMTAiIHgxPSIwLjg3NSIgeTI9IjEuMTIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4xOTEgMzkuOTgzKSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzEyIiBkYXRhLW5hbWU9IumVt+aWueW9oiAxMiIgd2lkdGg9IjEuNDIzIiBoZWlnaHQ9IjAuNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjkzOSA0MC45MDgpIHJvdGF0ZSgtNTIuMDcpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICAgIDxsaW5lIGlkPSLnt5pfMTEiIGRhdGEtbmFtZT0i57eaIDExIiB4MT0iMC4zMjkiIHkyPSIxLjM4NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMzAzIDM3LjE1NikiIGZpbGw9IiNmZmYiLz4KICAgICAgPHJlY3QgaWQ9IumVt+aWueW9ol8xMyIgZGF0YS1uYW1lPSLplbfmlrnlvaIgMTMiIHdpZHRoPSIxLjQyMyIgaGVpZ2h0PSIwLjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNy45OTIgMzguNDY2KSByb3RhdGUoLTc2LjYzKSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPC9nPgogICAgPGcgaWQ9IuODkOODhOWNsCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAtNDMxKSI+CiAgICAgIDxwYXRoIGlkPSLjg5HjgrlfMTIiIGRhdGEtbmFtZT0i44OR44K5IDEyIiBkPSJNMjQ5LjE0Miw1ODIuMzU2bDIxLjY4MSwyMS42ODEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSLjg5HjgrlfMTMiIGRhdGEtbmFtZT0i44OR44K5IDEzIiBkPSJNMjcwLjgyMyw1ODIuMzU2bC0yMS41NTEsMjEuNTUxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NZ4q");


/***/ }),

/***/ "58Wr":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC44NzgiIGhlaWdodD0iMjIuMzg4IiB2aWV3Qm94PSIwIDAgMjQuODc4IDIyLjM4OCI+CiAgPGcgaWQ9Im11dGVfaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2Ljc4OCAtMjA5LjAwMykiPgogICAgPGcgaWQ9InNwZWFrZXJfaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDcgMjExLjA2NSkiPgogICAgICA8cGF0aCBpZD0i44OR44K5XzYiIGRhdGEtbmFtZT0i44OR44K5IDYiIGQ9Ik0yMS4wOTMsOTQuMjl2OC40MWEuMTkzLjE5MywwLDAsMS0uMTkzLjE5M0gxOC40ODNhLjE5My4xOTMsMCwwLDEtLjE5My0uMTkzVjk0LjQ4M2EuMTkzLjE5MywwLDAsMSwuMTkzLS4xOTNoMi42MW0uMjktLjFBLjE5My4xOTMsMCwwLDAsMjEuMTksOTRoLTNhLjE5My4xOTMsMCwwLDAtLjE5My4xOTN2OC44YS4xOTMuMTkzLDAsMCwwLC4xOTMuMTkzaDNhLjE5My4xOTMsMCwwLDAsLjE5My0uMTkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4IC04OS42MTkpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSLjg5HjgrlfNyIgZGF0YS1uYW1lPSLjg5HjgrkgNyIgZD0iTTY2Ljc0MSw2NS40NDlhLjE3NS4xNzUsMCwwLDEtLjIyNS4wODdMNTIuMTg3LDYxLjUxNEEuMjcxLjI3MSwwLDAsMSw1Miw2MS4yNjlWNTIuNmEuMjc3LjI3NywwLDAsMSwuMTg1LS4yNTFMNjYuNyw0Ny45YS4xMzQuMTM0LDAsMCwxLC4xODUuMTQyVjY0Ljg4M2MwLC4xMDYtLjA2NS4xOTMtLjE0NS4xOTNzLS4xNDUtLjA4Ny0uMTQ1LS4xOTNWNDguNDM5YS4xMzUuMTM1LDAsMCwwLS4xODUtLjEzN0w1Mi40NzUsNTIuNTY3YS4yNzcuMjc3LDAsMCwwLS4xODUuMjQ5VjYxLjA1YS4yNzEuMjcxLDAsMCwwLC4xODcuMjQ2bDE0LjExMywzLjk2M0M2Ni42OTMsNjUuMjg1LDY2Ljc2Myw2NS4zNzIsNjYuNzQxLDY1LjQ0OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OC43MTMgLTQ3Ljk3KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8bGluZSBpZD0i57eaXzMiIGRhdGEtbmFtZT0i57eaIDMiIHkyPSIxNS40NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjEyMSAxLjE5MSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV84IiBkYXRhLW5hbWU9IuODkeOCuSA4IiBkPSJNMjM1LjUsNzYuMjczYS4yNTguMjU4LDAsMCwxLS41LDBWNjEuMTkzYS4yNTguMjU4LDAsMCwxLC41LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE0LjAyNCAtNTkuODA5KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8bGluZSBpZD0i57eaXzQiIGRhdGEtbmFtZT0i57eaIDQiIHkyPSIxMS42OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjMxMSAyLjkzMSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV85IiBkYXRhLW5hbWU9IuODkeOCuSA5IiBkPSJNMjY4LjUsOTAuNWEuMjU4LjI1OCwwLDAsMS0uNSwwVjc5LjE5M2EuMjU4LjI1OCwwLDAsMSwuNSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0My44MzQgLTc2LjA2OSkiIGZpbGw9IiNmZmYiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJfIiBkYXRhLW5hbWU9IsOXIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyIC0zNzMpIj4KICAgICAgPHBhdGggaWQ9IuODkeOCuV8xMiIgZGF0YS1uYW1lPSLjg5HjgrkgMTIiIGQ9Ik0yNDkuMTQyLDU4Mi4zNTZsMjEuNjgxLDIxLjY4MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV8xMyIgZGF0YS1uYW1lPSLjg5HjgrkgMTMiIGQ9Ik0yNzAuODIzLDU4Mi4zNTZsLTIxLjU1MSwyMS41NTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "62YN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI3MC4zMDgiIHZpZXdCb3g9IjAgMCA5MCA3MC4zMDgiPgogIDxnIGlkPSJtdXRlX2ljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC44NDgpIiBvcGFjaXR5PSIwLjI2Ij4KICAgIDxnIGlkPSLjgrnjg5Tjg7zjgqvjg7wiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMS4xMDUpIj4KICAgICAgPHJlY3QgaWQ9IumVt+aWueW9ol8yIiBkYXRhLW5hbWU9IumVt+aWueW9oiAyIiB3aWR0aD0iMTIuNDU3IiBoZWlnaHQ9IjMzLjgxMiIgcng9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTYuMzkpIiBmaWxsPSJub25lIi8+CiAgICAgIDxwYXRoIGlkPSLjg5HjgrlfMSIgZGF0YS1uYW1lPSLjg5HjgrkgMSIgZD0iTTI5LjM4OSw5NS4wNjh2MzAuOTY1YS43MTIuNzEyLDAsMCwxLS43MTIuNzEyaC04LjlhLjcxMi43MTIsMCwwLDEtLjcxMi0uNzEyVjk1Ljc4YS43MTIuNzEyLDAsMCwxLC43MTItLjcxMmg5LjYxbTEuMDY4LS4zNTZBLjcxMi43MTIsMCwwLDAsMjkuNzQ1LDk0SDE4LjcxMmEuNzEyLjcxMiwwLDAsMC0uNzEyLjcxMlYxMjcuMWEuNzEyLjcxMiwwLDAsMCwuNzEyLjcxMkgyOS43NDVhLjcxMi43MTIsMCwwLDAsLjcxMi0uNzEyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4IC03Ny42MSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV8yIiBkYXRhLW5hbWU9IuODkeOCuSAyIiBkPSJNMTA3LjI0NCwxMTMuODY4LDU0LjE4Nyw5OC45ODhhMSwxLDAsMCwxLS42ODctLjl2LTMxLjFhMS4wMjEsMS4wMjEsMCwwLDEsLjY4LS45MThsNTIuMzg0LTE2LjAwN2EuNDk1LjQ5NSwwLDAsMSwuNjguNVYxMTIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjg2NSAtNDkuMjY4KSIgZmlsbD0ibm9uZSIvPgogICAgICA8cGF0aCBpZD0i44OR44K5XzMiIGRhdGEtbmFtZT0i44OR44K5IDMiIGQ9Ik0xMDYuMjc4LDExMi40OTRhLjY0NC42NDQsMCwwLDEtLjgyOS4zMmwtNTIuNzYyLTE0LjhhMSwxLDAsMCwxLS42ODctLjlWNjUuMjE5YTEuMDIxLDEuMDIxLDAsMCwxLC42OC0uOTI1bDUzLjQ1Mi0xNi4zNjNhLjQ5NS40OTUsMCwwLDEsLjY4LjUyM3Y2MS45NTljMCwuMzkxLS4yMzguNzExLS41MzQuNzExcy0uNTM0LS4zMi0uNTM0LS43MTFWNDkuOWEuNS41LDAsMCwwLS42OC0uNTA1bC01MS4zMTcsMTUuN2ExLjAyMSwxLjAyMSwwLDAsMC0uNjguOTE4djMwLjNhMSwxLDAsMCwwLC42ODcuOUwxMDUuNzE5LDExMS44QzEwNi4xLDExMS44OTMsMTA2LjM1NiwxMTIuMjEzLDEwNi4yNzgsMTEyLjQ5NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOS44OTkgLTQ3Ljg5NCkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPGxpbmUgaWQ9Iue3ml8xIiBkYXRhLW5hbWU9Iue3miAxIiB5Mj0iNTYuOTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LjcyMSA0LjY2NSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV80IiBkYXRhLW5hbWU9IuODkeOCuSA0IiBkPSJNMjM2LjA2OCwxMTcuMmMwLC4zOTEtLjIzOC43MTEtLjUzNC43MTFzLS41MzQtLjMyLS41MzQtLjcxMVY2MS43MTFjMC0uMzkxLjIzOC0uNzExLjUzNC0uNzExcy41MzQuMzIuNTM0LjcxMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTcuODEzIC01Ni4zMzUpIiBmaWxsPSIjNjA2MDYwIi8+CiAgICAgIDxsaW5lIGlkPSLnt5pfMiIgZGF0YS1uYW1lPSLnt5ogMiIgeTI9IjQzLjAyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkuNDY2IDExLjA3MSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgICAgPHBhdGggaWQ9IuODkeOCuV81IiBkYXRhLW5hbWU9IuODkeOCuSA1IiBkPSJNMjY5LjA2OCwxMjEuMzE4YzAsLjM5MS0uMjM4LjcxMS0uNTM0LjcxMXMtLjUzNC0uMzItLjUzNC0uNzExVjc5LjcxMWMwLS4zOTEuMjM4LS43MTEuNTM0LS43MTFzLjUzNC4zMi41MzQuNzExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OS4wNjggLTY3LjkyOSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgIDwvZz4KICAgIDxnIGlkPSLjg5rjgrEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjM5NSAtMC44MjkpIj4KICAgICAgPHJlY3QgaWQ9IumVt+aWueW9ol8zIiBkYXRhLW5hbWU9IumVt+aWueW9oiAzIiB3aWR0aD0iMS42ODQiIGhlaWdodD0iOTcuNzQ2IiByeD0iMC44NDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMS4xNzMpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjYzQ2MDY4Ii8+CiAgICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfNCIgZGF0YS1uYW1lPSLplbfmlrnlvaIgNCIgd2lkdGg9Ijk3Ljc0NiIgaGVpZ2h0PSIxLjY4NCIgcng9IjAuODQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjE1NyA2OS4wOTgpIHJvdGF0ZSgtNDUpIiBmaWxsPSIjYzQ2MDY4Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"

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

/***/ "BZmR":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC42NjYiIGhlaWdodD0iMTcuNjU1IiB2aWV3Qm94PSIwIDAgMjQuNjY2IDE3LjY1NSI+CiAgPGcgaWQ9InNwZWFrZXJfaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjA3NikiPgogICAgPHBhdGggaWQ9IuODkeOCuV82IiBkYXRhLW5hbWU9IuODkeOCuSA2IiBkPSJNMjEuMDkzLDk0LjI5djguNDFhLjE5My4xOTMsMCwwLDEtLjE5My4xOTNIMTguNDgzYS4xOTMuMTkzLDAsMCwxLS4xOTMtLjE5M1Y5NC40ODNhLjE5My4xOTMsMCwwLDEsLjE5My0uMTkzaDIuNjFtLjI5LS4xQS4xOTMuMTkzLDAsMCwwLDIxLjE5LDk0aC0zYS4xOTMuMTkzLDAsMCwwLS4xOTMuMTkzdjguOGEuMTkzLjE5MywwLDAsMCwuMTkzLjE5M2gzYS4xOTMuMTkzLDAsMCwwLC4xOTMtLjE5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOCAtODkuNjE5KSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPHBhdGggaWQ9IuODkeOCuV83IiBkYXRhLW5hbWU9IuODkeOCuSA3IiBkPSJNNjYuNzQxLDY1LjQ0OWEuMTc1LjE3NSwwLDAsMS0uMjI1LjA4N0w1Mi4xODcsNjEuNTE0QS4yNzEuMjcxLDAsMCwxLDUyLDYxLjI2OVY1Mi42YS4yNzcuMjc3LDAsMCwxLC4xODUtLjI1MUw2Ni43LDQ3LjlhLjEzNC4xMzQsMCwwLDEsLjE4NS4xNDJWNjQuODgzYzAsLjEwNi0uMDY1LjE5My0uMTQ1LjE5M3MtLjE0NS0uMDg3LS4xNDUtLjE5M1Y0OC40MzlhLjEzNS4xMzUsMCwwLDAtLjE4NS0uMTM3TDUyLjQ3NSw1Mi41NjdhLjI3Ny4yNzcsMCwwLDAtLjE4NS4yNDlWNjEuMDVhLjI3MS4yNzEsMCwwLDAsLjE4Ny4yNDZsMTQuMTEzLDMuOTYzQzY2LjY5Myw2NS4yODUsNjYuNzYzLDY1LjM3Miw2Ni43NDEsNjUuNDQ5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ4LjcxMyAtNDcuOTcpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICA8bGluZSBpZD0i57eaXzMiIGRhdGEtbmFtZT0i57eaIDMiIHkyPSIxNS40NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjEyMSAxLjE5MSkiIGZpbGw9IiM2MDYwNjAiLz4KICAgIDxwYXRoIGlkPSLjg5HjgrlfOCIgZGF0YS1uYW1lPSLjg5HjgrkgOCIgZD0iTTIzNS41LDc2LjI3M2EuMjU4LjI1OCwwLDAsMS0uNSwwVjYxLjE5M2EuMjU4LjI1OCwwLDAsMSwuNSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNC4wMjQgLTU5LjgwOSkiIGZpbGw9IiMwMDUzNWQiLz4KICAgIDxsaW5lIGlkPSLnt5pfNCIgZGF0YS1uYW1lPSLnt5ogNCIgeTI9IjExLjY5NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMzExIDIuOTMxKSIgZmlsbD0iIzYwNjA2MCIvPgogICAgPHBhdGggaWQ9IuODkeOCuV85IiBkYXRhLW5hbWU9IuODkeOCuSA5IiBkPSJNMjY4LjUsOTAuNWEuMjU4LjI1OCwwLDAsMS0uNSwwVjc5LjE5M2EuMjU4LjI1OCwwLDAsMSwuNSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0My44MzQgLTc2LjA2OSkiIGZpbGw9IiMwMDUzNWQiLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "G3cN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMjEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyNC4zMjEgMTUiPgogIDxwYXRoIGlkPSJyZXR3ZWV0LXNvbGlkIiBkPSJNMjcuMzY1LDcxLjU1LDIzLjUsNzUuNDE2YS45MjIuOTIyLDAsMCwxLTEuMywwTDE4LjMyOSw3MS41NWEuOTIyLjkyMiwwLDAsMSwwLTEuM2wuNDE2LS40MTZhLjkyMi45MjIsMCwwLDEsMS4zMjIuMDE5bDEuNTUyLDEuNjQzVjY0LjVoLTcuMmEuOTIyLjkyMiwwLDAsMS0uNjUyLS4yN2wtLjYxNC0uNjE0YS45MjIuOTIyLDAsMCwxLC42NTItMS41NzNoOS4zNTJhLjkyMi45MjIsMCwwLDEsLjkyMi45MjJ2OC41MjlsMS41NTItMS42NDNhLjkyMi45MjIsMCwwLDEsMS4zMjItLjAxOWwuNDE2LjQxNmEuOTIyLjkyMiwwLDAsMSwwLDEuM1ptLTEwLjE4MS41OTNhLjkyMS45MjEsMCwwLDAtLjY1Mi0uMjdIOS4zM1Y2NC44NzlsMS41NTIsMS42NDNhLjkyMi45MjIsMCwwLDAsMS4zMjIuMDE5bC40MTYtLjQxNmEuOTIyLjkyMiwwLDAsMCwwLTEuM0w4Ljc1Myw2MC45NTZhLjkyMi45MjIsMCwwLDAtMS4zLDBMMy41ODMsNjQuODIzYS45MjIuOTIyLDAsMCwwLDAsMS4zTDQsNjYuNTQxYS45MjIuOTIyLDAsMCwwLDEuMzIyLS4wMTlsMS41NTItMS42NDN2OC41MjlhLjkyMi45MjIsMCwwLDAsLjkyMi45MjJoOS4zNTJhLjkyMi45MjIsMCwwLDAsLjY1Mi0xLjU3M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjMxMyAtNjAuNjg2KSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "LeLG":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVENUQ1RDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmst44OQ44OEaWNvbjwvdGl0bGU+PGcgaWQ9Iue0sOWtlyI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTkxLjMsMTUxLjQzYy0zLjYsMy40Mi05LjY0LDMtMTMuNDMtMUw1OS4wNSwyNS40Yy0zLjc4LTQtMy45NC0xMC0uMzUtMTMuNDZTNjguMzQsOSw3Mi4xMywxM0wxOTEsMTM4QzE5NC43MywxNDIsMTk0Ljg5LDE0OCwxOTEuMywxNTEuNDNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTguNywxNTEuNDNjMy42LDMuNDIsOS42NCwzLDEzLjQzLTFMMTkxLDI1LjRjMy43OC00LDMuOTQtMTAsLjM1LTEzLjQ2UzE4MS42Niw5LDE3Ny44NywxM0w1OS4wNSwxMzhDNTUuMjcsMTQyLDU1LjExLDE0OCw1OC43LDE1MS40M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Ny40LDIzMi41MWwtLjU3LDYuNkE0MC44Niw0MC44NiwwLDAsMSwzNSwyNDAuNzVxLTE1LjI0LDAtMjIuOS04LjM1QTI5LjA1LDI5LjA1LDAsMCwxLDQuMzksMjEyYTMwLjc5LDMwLjc5LDAsMCwxLDguNTUtMjEuNzdxOC41NS05LjE1LDIzLTkuMTVhMzIuNjYsMzIuNjYsMCwwLDEsOC40MiwxLjE5bC0xLjI0LDdhMzAuNjksMzAuNjksMCwwLDAtOS4wOS0xLjZxLTEwLjcxLDAtMTYuMjYsNi42NWEyNC41NiwyNC41NiwwLDAsMC01LjUzLDE2LjI2LDI0LDI0LDAsMCwwLDYuMzgsMTYuNzlxNi4zOCw3LDE3LjYzLDdBNDMuODQsNDMuODQsMCwwLDAsNDcuNCwyMzIuNTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTMuMywyMzMsOTMsMjM5LjU2SDU4LjE3cS41My0xMSwuNTMtMzAuMzEsMC0xNi42NS0uNTMtMjcuMzdoOC4yNHEtLjU0LDguOTQtLjUzLDI3LjM3LDAsMTUuMTUtLjQ5LDI0LjI4UTc4LjY4LDIzMy41Myw5My4zLDIzM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTIuODQsMjA5LjgzcTAsMTQuMzEtOC4zNywyMi44OHQtMTkuMzYsOC41N2EyNS41MSwyNS41MSwwLDAsMS0xOC41LTcuODZxLTgtNy44Ni04LTIxLjI0LDAtMTQuNDksOC4zNy0yM3QxOS4zNi04LjQ5YTI1LjQ5LDI1LjQ5LDAsMCwxLDE4LjUsNy44N1ExNTIuODQsMTk2LjQ1LDE1Mi44NCwyMDkuODNabS03Ljg4LDFxMC0xMS40My02LTE3Ljd0LTEzLjg0LTYuMjdxLTcuMjcsMC0xMi45NCw2LjZ0LTUuNjcsMTcuNjRxMCwxMS40Niw2LDE3Ljc0dDEzLjg0LDYuMjdxNy4yOCwwLDEyLjkyLTYuNjlUMTQ1LDIxMC44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTkuMjMsMjI0LjYzcTAsMTYuMzgtMjIuODIsMTYuMzlhNTIuNDYsNTIuNDYsMCwwLDEtMTQuOC0xLjkxbDEuNTUtN2E0My40OSw0My40OSwwLDAsMCwxNC4xNCwyLjU3cTE1LjA2LDAsMTUuMDYtOC41MWE5LjEsOS4xLDAsMCwwLTMuOS03LjM1cS0yLjYxLTItMTAuMjgtNS40NS04LjA2LTMuNTgtMTEuMjktNi42YTE0LjYxLDE0LjYxLDAsMCwxLC4wOC0yMS4xM3E1LjEtNC42MiwxNC40LTQuNjEsMTAuNTUsMCwxNC40NCwxLjM3bC0xLjA2LDcuMDVhNDcuMTksNDcuMTksMCwwLDAtMTQuMzEtMi4xM3EtMTEuMzgsMC0xMS4zOCw3LjYyYTcuNDgsNy40OCwwLDAsMCwzLjI3LDYuMTYsNTkuMiw1OS4yLDAsMCwwLDkuNCw0LjY5cTguMjgsMy42LDEyLDYuODNBMTUuMzMsMTUuMzMsMCwwLDEsMTk5LjIzLDIyNC42M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNDcuOTEsMjMyLjg3bC0uMjYsNi42OUgyMTEuOTRxLjYyLTEzLjc0LjYyLTMwLjMxLDAtMTUuNTgtLjYyLTI3LjM3aDMzLjQ5bC0uMzUsNi42cS0xMi4xOC0uNTQtMjUuODMtLjU0LjI3LDYuODcuMjcsMTguNTcsMTEuNzgsMCwyMS0uNTN2Ni42cS05LjgyLS40MS0yMS0uNCwwLDExLjM4LjM5LDIxLjM1UTIzNC42MywyMzMuNTMsMjQ3LjkxLDIzMi44N1oiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "NZ4q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/components/TwApps/TwAppsConst.ts
var TwAppsConst = __webpack_require__("PpGW");

// CONCATENATED MODULE: ./src/components/TwApps/organisms/TwAppsHeader/index.tsx
var __jsx = external_react_default.a.createElement;




const ImgIcon = external_styled_components_default.a.img.withConfig({
  displayName: "TwAppsHeader__ImgIcon",
  componentId: "n8pwxe-0"
})(["border-radius:50%;height:40px;width:40px;"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "TwAppsHeader__Header",
  componentId: "n8pwxe-1"
})(["align-items:center;background-color:", ";border-bottom:", " 1px solid;display:flex;height:50px;justify-content:flex-end;padding:5px;position:fixed;top:0;width:100%;"], ({
  theme
}) => theme.colors.basicGray, ({
  theme
}) => theme.colors.darkGray);

/**
 * TwitterAppsの共通ヘッダ
 * 全アプリ感で共通のアイコン、メニューなどを提供する
 */
class TwAppsHeader_TwAppsHeader extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: TwAppsConst["a" /* default */].HEADER_MENU_INITIAL
    };
  }

  render() {
    const imgUrl = this.props.userInfo.profile_image_url_https;
    const imgIconDOM = imgUrl ? __jsx(ImgIcon, {
      src: imgUrl,
      alt: "icon"
    }) : '';
    return __jsx(Header, null, imgIconDOM);
  }

}

/* harmony default export */ var organisms_TwAppsHeader = (Object(external_react_redux_["connect"])(state => ({
  userInfo: state.userInfo
}))(TwAppsHeader_TwAppsHeader));
// EXTERNAL MODULE: ./src/modules/styles/theme.ts
var theme = __webpack_require__("A6DK");

// CONCATENATED MODULE: ./src/modules/styles/media.ts
const mediaQ = {
  pc: '@media screen and (min-width: 768px)',
  tablet: '@media screen and (min-width: 768px) and (max-width: 1024px)',
  notMobile: '@media screen and (min-width: 1024px)'
};
// EXTERNAL MODULE: ./src/redux/reducers/page/isMuterMenuOpened.ts
var page_isMuterMenuOpened = __webpack_require__("WOYG");

// CONCATENATED MODULE: ./src/components/TwApps/atoms/ToggleMenuButton/index.tsx
var ToggleMenuButton_jsx = external_react_default.a.createElement;





const cross_icon = __webpack_require__("LeLG");

const hambargar_icon = __webpack_require__("z8Hb");

const ToggleMenuButton_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ToggleMenuButton__Container",
  componentId: "sc-1j4btll-0"
})(["display:none;", "{display:block;text-align:right;}"], mediaQ.pc);
const ToggleMenuButton_Icon = external_styled_components_default.a.img.withConfig({
  displayName: "ToggleMenuButton__Icon",
  componentId: "sc-1j4btll-1"
})(["", "{font-size:20px;height:40px;width:40px;}"], mediaQ.pc);
const ToggleMenuButton_Button = external_styled_components_default.a.button.withConfig({
  displayName: "ToggleMenuButton__Button",
  componentId: "sc-1j4btll-2"
})(["", "{cursor:pointer;font-size:20px;", "}"], mediaQ.pc, theme["g" /* resetButton */]);

/**
 * メニュー開閉状態をトグルするボタン
 * 状態に応じてアイコン画像を変える
 * @param {boolean} isMenuOpened 開いてるときはtrue
 * @param {function} onClick メニュー開閉処理
 */
const ToggleMuterMenuButton = ({
  onClick,
  isMenuOpened
}) => {
  const imgUrl = isMenuOpened ? `${cross_icon}` : `${hambargar_icon}`;
  return ToggleMenuButton_jsx(ToggleMenuButton_Container, null, ToggleMenuButton_jsx(ToggleMenuButton_Button, {
    onClick: onClick
  }, ToggleMenuButton_jsx(ToggleMenuButton_Icon, {
    className: "menu-toggle-icon",
    src: imgUrl,
    alt: "close"
  })));
};

/* harmony default export */ var ToggleMenuButton = (ToggleMuterMenuButton);
// CONCATENATED MODULE: ./src/components/TwApps/molecules/MuterMenu/index.tsx
var MuterMenu_jsx = external_react_default.a.createElement;







const transparent_eye_icon = __webpack_require__("rE1Z");


const openKeyframes = Object(external_styled_components_["keyframes"])(["0%{left:-", "px;}100%{left:0;}"], theme["h" /* theme */].sizes.menuAmimationDistance);
const closeKeyframes = Object(external_styled_components_["keyframes"])(["0%{left:0;}100%{left:-", "px;}"], theme["h" /* theme */].sizes.menuAmimationDistance);
/**
 * ContainerのsyledComponentを生成する
 * 開閉状態を動的に変更し、かつテスト可能にするために関数にする
 * @param {boolean} isOpened メニューの開閉を表すboolean
 */

const createContainer = isOpened => external_styled_components_default.a.div.withConfig({
  displayName: "MuterMenu__createContainer",
  componentId: "sc-16a7922-0"
})(["background-color:", ";bottom:0;display:flex;height:50px;justify-content:space-between;padding:0 50px;position:fixed;width:100%;", "{border-right:solid 1px ", ";display:block;height:100vh;padding:20px;position:fixed;top:50px;width:300px;animation:", " .3s both;}"], ({
  theme
}) => theme.colors.basicGray, mediaQ.pc, ({
  theme
}) => theme.colors.darkGray, isOpened ? openKeyframes : closeKeyframes);
const CountButton = external_styled_components_default.a.button.withConfig({
  displayName: "MuterMenu__CountButton",
  componentId: "sc-16a7922-1"
})(["background:url(", ") center center / 35px no-repeat;color:", ";font-size:1.8rem;font-weight:bold;padding-top:7px;width:50px;", ";", "{background:url(", ") 222px / 35px no-repeat;font-size:2rem;margin-top:30px;width:100%;&::before{content:'\u30C1\u30E9\u898B\u30C4\u30A4\u30FC\u30C8\u6570';font-size:1.125rem;font-weight:bold;margin-right:75px;vertical-align:5px;}}"], transparent_eye_icon, ({
  theme
}) => theme.colors.iconGray, theme["g" /* resetButton */], mediaQ.pc, transparent_eye_icon);

const isOpendSelector = state => state.isMuterMenuOpened;

const MuterMenu = () => {
  const isOpened = Object(external_react_redux_["useSelector"])(isOpendSelector);
  const Container = createContainer(isOpened);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onMenuButtonClick = () => {
    isOpened ? dispatch(Object(page_isMuterMenuOpened["b" /* setIsMuterMenuOpened */])(false)) : dispatch(Object(page_isMuterMenuOpened["b" /* setIsMuterMenuOpened */])(true));
  };

  return MuterMenu_jsx(Container, null, MuterMenu_jsx(ToggleMenuButton, {
    onClick: () => {
      onMenuButtonClick();
    },
    isMenuOpened: isOpened
  }), MuterMenu_jsx(CountButton, null, MuterMenu_jsx("span", {
    className: "tweets-count"
  }, "3")));
};

/* harmony default export */ var molecules_MuterMenu = (MuterMenu);
// CONCATENATED MODULE: ./src/components/TwApps/atoms/UnmuteButton/index.tsx
var UnmuteButton_jsx = external_react_default.a.createElement;





const speaker_icon = __webpack_require__("BZmR");

const mute_button_icon = __webpack_require__("58Wr");

const createMobileButton = isMuted => {
  const bgColor = isMuted ? theme["h" /* theme */].colors.unmuteButtonColor : theme["h" /* theme */].colors.muteButtonColor;
  const labelColor = isMuted ? theme["h" /* theme */].colors.buttonLabelColor : theme["h" /* theme */].colors.basicWhite;
  return external_styled_components_default.a.button.withConfig({
    displayName: "UnmuteButton",
    componentId: "ilk2jo-0"
  })(["", " ", "{display:none;}"], Object(theme["b" /* mobileMuteButton */])(bgColor, labelColor), mediaQ.pc);
};
const createIcon = isMuted => {
  const imgUrl = isMuted ? speaker_icon : mute_button_icon;
  return external_styled_components_default.a.div.withConfig({
    displayName: "UnmuteButton",
    componentId: "ilk2jo-1"
  })(["", ";", "{", ";margin-right:10px;}"], Object(theme["a" /* divIcon */])(imgUrl), mediaQ.pc, Object(theme["c" /* pcDivIcon */])(imgUrl));
};
const createPcButton = isMuted => {
  const bgColor = isMuted ? theme["h" /* theme */].colors.unmuteButtonColor : theme["h" /* theme */].colors.muteButtonColor;
  const labelColor = isMuted ? undefined : theme["h" /* theme */].colors.basicWhite;
  return external_styled_components_default.a.button.withConfig({
    displayName: "UnmuteButton",
    componentId: "ilk2jo-2"
  })(["display:none;", "{", "}"], mediaQ.pc, Object(theme["d" /* pcMuteButton */])(bgColor, labelColor));
};

const UnmuteButton = ({
  muted,
  onClick,
  isForMobile = true
}) => {
  const Icon = createIcon(muted);
  let Button = createMobileButton(muted);

  if (!isForMobile) {
    Button = createPcButton(muted);
  }

  return UnmuteButton_jsx(Button, {
    type: "button",
    onClick: () => {
      onClick();
    }
  }, UnmuteButton_jsx(Icon, {
    className: muted ? 'unmute-icon' : 'mute-icon'
  }), muted ? 'ミュート解除' : 'ミュート');
};

/* harmony default export */ var atoms_UnmuteButton = (UnmuteButton);
// CONCATENATED MODULE: ./src/components/TwApps/atoms/ShowTweetsButton/index.tsx
var ShowTweetsButton_jsx = external_react_default.a.createElement;






const eye_icon = __webpack_require__("Y7Lh");

const hide_icon = __webpack_require__("/svM");

const createButton = showTweets => {
  const bgColor = showTweets !== TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED ? theme["h" /* theme */].colors.showButtonColor : theme["h" /* theme */].colors.hideButtonColor;
  const labelColor = showTweets !== TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED ? theme["h" /* theme */].colors.buttonLabelColor : theme["h" /* theme */].colors.basicWhite;
  return external_styled_components_default.a.button.withConfig({
    displayName: "ShowTweetsButton",
    componentId: "sc-128p3im-0"
  })(["", " ", "{", "}"], Object(theme["b" /* mobileMuteButton */])(bgColor, labelColor), mediaQ.pc, Object(theme["e" /* pcShowButton */])());
};
const ShowTweetsButton_createIcon = showTweets => {
  const imgUrl = showTweets !== TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED ? eye_icon : hide_icon;
  return external_styled_components_default.a.div.withConfig({
    displayName: "ShowTweetsButton",
    componentId: "sc-128p3im-1"
  })(["", ";", "{", ";}"], Object(theme["a" /* divIcon */])(imgUrl), mediaQ.pc, Object(theme["c" /* pcDivIcon */])(imgUrl));
};
const LabelForPC = external_styled_components_default.a.span.withConfig({
  displayName: "ShowTweetsButton__LabelForPC",
  componentId: "sc-128p3im-2"
})(["display:none;", "{display:inline;}"], mediaQ.pc);

const ShowTweetsButton = ({
  showTweets,
  onClick
}) => {
  const Button = createButton(showTweets);
  const Icon = ShowTweetsButton_createIcon(showTweets);
  return ShowTweetsButton_jsx(Button, {
    type: "button",
    onClick: onClick
  }, ShowTweetsButton_jsx(Icon, null), ShowTweetsButton_jsx(LabelForPC, null, "\u30C4\u30A4\u30FC\u30C8\u3092"), showTweets === TwAppsConst["a" /* default */].SHOW_TWEETS_CLOSED ? 'チラ見' : '隠す');
};

/* harmony default export */ var atoms_ShowTweetsButton = (ShowTweetsButton);
// CONCATENATED MODULE: ./src/components/TwApps/atoms/Tweet/index.tsx
var Tweet_jsx = external_react_default.a.createElement;





const retweet_icon = __webpack_require__("G3cN");

const favorite_icon = __webpack_require__("i4tx");

const twitter_icon = __webpack_require__("r2VE");

const twitter_white_icon = __webpack_require__("t7DL");

const Tweet_Container = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__Container",
  componentId: "sc-5mree0-0"
})(["border-bottom:1px solid ", ";;padding:10px;white-space:pre-line;", "{font-size:1.25rem;line-height:1.8rem;padding:50px 100px 15px 250px;}"], ({
  theme
}) => theme.colors.darkGray, mediaQ.pc);
const TweetText = external_styled_components_default.a.p.withConfig({
  displayName: "Tweet__TweetText",
  componentId: "sc-5mree0-1"
})(["max-width:1200px;"]);
const MediaList = external_styled_components_default.a.ul.withConfig({
  displayName: "Tweet__MediaList",
  componentId: "sc-5mree0-2"
})(["display:flex;flex-wrap:wrap;margin:20px auto;max-height:121px;max-width:251px;overflow:hidden;"]);
const MediaItem = external_styled_components_default.a.li.withConfig({
  displayName: "Tweet__MediaItem",
  componentId: "sc-5mree0-3"
})(["align-items:center;display:flex;justify-content:center;max-height:60px;max-width:120px;overflow:hidden;"]);
const Media = external_styled_components_default.a.img.withConfig({
  displayName: "Tweet__Media",
  componentId: "sc-5mree0-4"
})(["max-width:250px;"]);
const TweetInfoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__TweetInfoContainer",
  componentId: "sc-5mree0-5"
})(["align-items:center;display:flex;justify-content:space-between;padding:15px 30px 0;", "{justify-content:flex-start;padding:0;}"], mediaQ.pc);
const TweetCountInfo = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__TweetCountInfo",
  componentId: "sc-5mree0-6"
})(["display:flex;", "{line-height:1;width:210px;}"], mediaQ.pc);
const RetweetIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__RetweetIcon",
  componentId: "sc-5mree0-7"
})(["", ";margin-bottom:3px;margin-right:8px;"], Object(theme["a" /* divIcon */])(retweet_icon));
const FavoriteIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__FavoriteIcon",
  componentId: "sc-5mree0-8"
})(["", ";margin-right:8px;"], Object(theme["a" /* divIcon */])(favorite_icon));
const FavoriteCount = external_styled_components_default.a.p.withConfig({
  displayName: "Tweet__FavoriteCount",
  componentId: "sc-5mree0-9"
})(["margin-top:1px;"]);
const RetweetCount = external_styled_components_default.a.p.withConfig({
  displayName: "Tweet__RetweetCount",
  componentId: "sc-5mree0-10"
})(["margin-top:2px;"]);
const TwitterLink = external_styled_components_default.a.a.withConfig({
  displayName: "Tweet__TwitterLink",
  componentId: "sc-5mree0-11"
})(["display:block;", "{", ";align-items:center;background-color:", ";border-radius:5px;color:", ";;display:flex;font-size:1rem;height:25px;padding-left:15px;width:165px;}"], mediaQ.pc, theme["f" /* resetAnchor */], ({
  theme
}) => theme.colors.twitterBlue, ({
  theme
}) => theme.colors.basicWhite);
const TwitterIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Tweet__TwitterIcon",
  componentId: "sc-5mree0-12"
})(["background:url(", ") center center / contain no-repeat;height:22px;width:26px;", "{background:url(", ") center center / contain no-repeat;height:18px;width:25px;}"], twitter_icon, mediaQ.pc, twitter_white_icon);
const LabelForPc = external_styled_components_default.a.span.withConfig({
  displayName: "Tweet__LabelForPc",
  componentId: "sc-5mree0-13"
})(["display:none;", "{display:inline;margin-left:10px;}"], mediaQ.pc);

/**
 * ユーザーのツイートを表すコンポーネント
 * @param {TweetsInfo} mutedTweet ツイート情報（１件）
 */
const Tweet = ({
  mutedTweet
}) => {
  return Tweet_jsx(Tweet_Container, null, Tweet_jsx(TweetText, null, mutedTweet.tweet_text), Tweet_jsx(MediaList, null, mutedTweet.media_infos.map(media => Tweet_jsx(MediaItem, {
    key: media.media_url_https
  }, Tweet_jsx(Media, {
    alt: "media",
    src: media.media_url_https
  })))), Tweet_jsx(TweetInfoContainer, null, Tweet_jsx(TweetCountInfo, null, Tweet_jsx(FavoriteIcon, null), Tweet_jsx(FavoriteCount, null, mutedTweet.favorite_count)), Tweet_jsx(TweetCountInfo, null, Tweet_jsx(RetweetIcon, null), Tweet_jsx(RetweetCount, null, mutedTweet.retweet_count)), Tweet_jsx(TwitterLink, {
    href: mutedTweet.tweet_url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "open-twitter-link"
  }, Tweet_jsx(TwitterIcon, {
    className: "twitter-icon"
  }), Tweet_jsx(LabelForPc, {
    className: "pc-twitter-label"
  }, "twitter\u3067\u898B\u308B"))));
};

/* harmony default export */ var atoms_Tweet = (Tweet);
// CONCATENATED MODULE: ./src/components/TwApps/molecules/TweetList/index.tsx
var TweetList_jsx = external_react_default.a.createElement;




// 子コンポーネントの高さを取得するためにwapperで包む
const ItemWrapper = external_styled_components_default.a.li.withConfig({
  displayName: "TweetList__ItemWrapper",
  componentId: "qcuuci-0"
})([""]);
const TweetList_List = external_styled_components_default.a.ul.withConfig({
  displayName: "TweetList__List",
  componentId: "qcuuci-1"
})(["overflow:hidden;transition:.5s;max-height:", "px;border-top:", ";"], ({
  maxHeight
}) => maxHeight, ({
  theme,
  visible
}) => visible ? `1px solid ${theme.colors.darkGray}` : 'none');

/**
 * ツイートのリスト
 * 渡された開閉状態に応じてリストの内容のコンテンツ高さに応じた開閉アニメーションを行う
 * @param {ShowTweets} showTweets 開閉状態を示す定数値
 * @param {TweetsInfo[]} mutedTweets ツイート情報の配列
 */
const TweetList = ({
  showTweets,
  mutedTweets
}) => {
  const {
    0: maxHeight,
    1: setMaxHeight
  } = Object(external_react_["useState"])(0);
  const itemWrapperRefs = [];
  mutedTweets.forEach(() => {
    itemWrapperRefs.push(external_react_default.a.createRef());
  });
  Object(external_react_["useEffect"])(() => {
    let height = 0;
    itemWrapperRefs.forEach(ref => {
      height += ref.current.clientHeight;
    });
    setMaxHeight(height);
  }, [showTweets]);
  return TweetList_jsx(TweetList_List, {
    visible: showTweets === TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED,
    maxHeight: showTweets === TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED ? maxHeight : 0
  }, mutedTweets.map((mutedTweet, index) => TweetList_jsx(ItemWrapper, {
    ref: itemWrapperRefs[index],
    key: mutedTweet.tweet_id
  }, TweetList_jsx(atoms_Tweet, {
    mutedTweet: mutedTweet
  }))));
};

/* harmony default export */ var molecules_TweetList = (TweetList);
// EXTERNAL MODULE: ./src/redux/reducers/resource/mutedUsers.ts
var resource_mutedUsers = __webpack_require__("FVUN");

// CONCATENATED MODULE: ./src/components/TwApps/molecules/ListedUser/index.tsx
var ListedUser_jsx = external_react_default.a.createElement;









const Item = external_styled_components_default.a.li.withConfig({
  displayName: "ListedUser__Item",
  componentId: "sc-1o71l5t-0"
})(["list-style:none;width:100%;"]);

const createTopContainer = isMuted => external_styled_components_default.a.div.withConfig({
  displayName: "ListedUser__createTopContainer",
  componentId: "sc-1o71l5t-1"
})(["align-items:center;background:", ";display:flex;height:95px;transition:.5s;", "{height:190px;}"], isMuted ? ({
  theme
}) => theme.colors.basicWhite : ({
  theme
}) => theme.colors.unmutedUserBg, mediaQ.pc);

const BottomContainer = external_styled_components_default.a.div.withConfig({
  displayName: "ListedUser__BottomContainer",
  componentId: "sc-1o71l5t-2"
})(["display:flex;"]);
const ListedUser_Icon = external_styled_components_default.a.img.withConfig({
  displayName: "ListedUser__Icon",
  componentId: "sc-1o71l5t-3"
})(["border-radius:50%;height:70px;margin:0 40px 0 10px;width:70px;", "{height:140px;width:140px;margin:0 70px 0 40px;}"], mediaQ.pc);
const UserNameContainer = external_styled_components_default.a.div.withConfig({
  displayName: "ListedUser__UserNameContainer",
  componentId: "sc-1o71l5t-4"
})(["align-items:flex-start;display:flex;flex-direction:column;font-weight:bold;height:100%;justify-content:center;max-width:70%;padding-top:8px;", "{width:420px;}"], mediaQ.pc);
const UserName = external_styled_components_default.a.p.withConfig({
  displayName: "ListedUser__UserName",
  componentId: "sc-1o71l5t-5"
})(["font-size:18px;margin-bottom:5px;", "{font-size:1.5rem;margin-bottom:17px;line-height:1.9rem;padding-right:30px;}"], mediaQ.pc);

const stateSelector = state => state.basePath;

const ListedUser = ({
  mutedUserInfo,
  index,
  isUserMuted
}) => {
  let {
    0: showTweets,
    1: setShowTweets
  } = Object(external_react_["useState"])(TwAppsConst["a" /* default */].SHOW_TWEETS_INITIAL);
  const baseUrl = Object(external_react_redux_["useSelector"])(stateSelector);
  const mutedUser = mutedUserInfo.muted_user;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const listedUserRef = external_react_default.a.createRef();

  const handleUnmuteClicked = () => {
    const accessPath = isUserMuted ? TwAppsConst["a" /* default */].UNMUTE_USER_ENDPOINT : TwAppsConst["a" /* default */].MUTE_USER_ENDPOINT; // 対象ユーザーがミュートか非ミュートかでエンドポイントが変わる

    const endpoint = `${baseUrl}${accessPath}/${mutedUserInfo.muted_user.screen_name}`;
    Object(resource_mutedUsers["c" /* requestUnmuteUser */])(endpoint, mutedUserInfo.muted_user.screen_name, index, dispatch);
  };
  /**
   * 「ツイートを見る」ボタンクリック時の動作
   * ユーザーのツイート数とツイートリストの高さをステートに保存する
   */


  const handleShowTweetsClicked = () => {
    if (showTweets === TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED) {
      setShowTweets(TwAppsConst["a" /* default */].SHOW_TWEETS_CLOSED);
      return;
    }

    setShowTweets(TwAppsConst["a" /* default */].SHOW_TWEETS_OPENED);
  };

  const TopContainer = createTopContainer(isUserMuted);
  return ListedUser_jsx(Item, {
    ref: listedUserRef
  }, ListedUser_jsx(TopContainer, null, ListedUser_jsx(ListedUser_Icon, {
    src: mutedUser.profile_image_url_https,
    alt: "icon"
  }), ListedUser_jsx(UserNameContainer, null, ListedUser_jsx(UserName, null, mutedUser.user_name), ListedUser_jsx(UserName, null, "@", mutedUser.screen_name)), ListedUser_jsx(atoms_UnmuteButton, {
    isForMobile: false,
    muted: isUserMuted,
    onClick: () => {
      handleUnmuteClicked();
    }
  })), ListedUser_jsx(molecules_TweetList, {
    showTweets: showTweets,
    mutedTweets: mutedUserInfo.tweets_info
  }), ListedUser_jsx(BottomContainer, null, ListedUser_jsx(atoms_UnmuteButton, {
    muted: isUserMuted,
    onClick: () => {
      handleUnmuteClicked();
    }
  }), ListedUser_jsx(atoms_ShowTweetsButton, {
    showTweets: showTweets,
    onClick: () => {
      handleShowTweetsClicked();
    }
  })));
};

/* harmony default export */ var molecules_ListedUser = (ListedUser);
// CONCATENATED MODULE: ./src/components/TwApps/molecules/UserList/index.tsx
var UserList_jsx = external_react_default.a.createElement;









const mute_icon = __webpack_require__("62YN");

const animationToLeft = Object(external_styled_components_["keyframes"])(["0%{padding-left:", "px;}100%{padding-left:", "px;}"], theme["h" /* theme */].sizes.muterMenuWidth, theme["h" /* theme */].sizes.muterMenuWidth - theme["h" /* theme */].sizes.menuAmimationDistance);
const animationToRight = Object(external_styled_components_["keyframes"])(["0%{padding-left:", "px;}100%{padding-left:", "px;}"], theme["h" /* theme */].sizes.muterMenuWidth - theme["h" /* theme */].sizes.menuAmimationDistance, theme["h" /* theme */].sizes.muterMenuWidth);
const Discription = external_styled_components_default.a.h2.withConfig({
  displayName: "UserList__Discription",
  componentId: "pm1jgv-0"
})(["background:", " url(", ") center center / auto 70px no-repeat;color:", ";font-size:1.25rem;height:80px;line-height:80px;margin-top:50px;text-align:center;width:100%;", "{font-size:2.5rem;font-weight:bold;height:120px;line-height:120px;}"], ({
  theme
}) => theme.colors.basicGray, mute_icon, ({
  theme
}) => theme.colors.iconGray, mediaQ.pc);

const createList = isMenuOpened => external_styled_components_default.a.ul.withConfig({
  displayName: "UserList__createList",
  componentId: "pm1jgv-1"
})(["padding-bottom:50px;", "{border-bottom:solid 2px ", ";border-top:solid 2px ", ";padding-bottom:0;animation:", " .3s forwards;}"], mediaQ.pc, ({
  theme
}) => theme.colors.darkGray, ({
  theme
}) => theme.colors.darkGray, isMenuOpened ? animationToRight : animationToLeft);

const UserList_stateSelector = state => ({
  mutedUsers: state.mutedUsers,
  muted: state.muted,
  basePath: state.basePath,
  isMuterMenuOpened: state.isMuterMenuOpened,
  userInfo: state.userInfo
});

const UserList = () => {
  const {
    basePath,
    mutedUsers,
    muted,
    isMuterMenuOpened
  } = Object(external_react_redux_["useSelector"])(UserList_stateSelector);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const List = createList(isMuterMenuOpened);
  Object(external_react_["useEffect"])(() => {
    Object(resource_mutedUsers["b" /* requestMutedUsers */])(basePath + TwAppsConst["a" /* default */].MUTED_USERS_ENDPOINT, dispatch);
  }, []);
  return UserList_jsx("div", {
    className: "muter-content"
  }, UserList_jsx(Discription, null, "\u3042\u306A\u305F\u304C\u30DF\u30E5\u30FC\u30C8\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC"), UserList_jsx(List, null, mutedUsers.map((mutedUserInfo, index) => UserList_jsx(molecules_ListedUser, {
    key: mutedUserInfo.muted_user.user_id,
    mutedUserInfo: mutedUserInfo,
    index: index,
    isUserMuted: muted[index]
  }))));
};

/* harmony default export */ var molecules_UserList = (UserList);
// CONCATENATED MODULE: ./src/components/TwApps/molecules/FatalMessage/index.tsx
var FatalMessage_jsx = external_react_default.a.createElement;






const StateSelector = state => ({
  errMessage: state.errMessage,
  basePath: state.basePath
});

const FatalMessage_Container = external_styled_components_default.a.div.withConfig({
  displayName: "FatalMessage__Container",
  componentId: "sc-19z9rkt-0"
})(["align-items:center;display:flex;height:100vh;justify-content:center;flex-wrap:wrap;width:100%;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "FatalMessage__Content",
  componentId: "sc-19z9rkt-1"
})(["text-align:center;width:100%;"]);
const Message = external_styled_components_default.a.h2.withConfig({
  displayName: "FatalMessage__Message",
  componentId: "sc-19z9rkt-2"
})(["white-space:pre-wrap;color:", ";font-weight:bold;line-height:2;width:100%;", "{font-size:1.5rem;text-align:center;}"], ({
  theme
}) => theme.colors.lightLabelColor, mediaQ.pc);
const Link = external_styled_components_default.a.a.withConfig({
  displayName: "FatalMessage__Link",
  componentId: "sc-19z9rkt-3"
})(["", " border-radius:5px;display:flex;margin:30px auto 0;width:50%;max-width:200px;height:40px;background-color:", ";color:", ";align-items:center;justify-content:center;box-shadow:0px 5px ", ";transition:.3s;font-weight:bold;&:active{transform:translateY(5px);box-shadow:0 0 ", ";}"], theme["f" /* resetAnchor */], ({
  theme
}) => theme.colors.twitterBlue, ({
  theme
}) => theme.colors.basicWhite, ({
  theme
}) => theme.colors.twitterShadowBlue, ({
  theme
}) => theme.colors.twitterShadowBlue);

const FatalMessage = () => {
  const {
    errMessage,
    basePath
  } = Object(external_react_redux_["useSelector"])(StateSelector);
  return FatalMessage_jsx(FatalMessage_Container, null, FatalMessage_jsx(Content, null, FatalMessage_jsx(Message, null, errMessage), FatalMessage_jsx(Link, {
    href: basePath
  }, "Top\u3078\u623B\u308B")));
};

/* harmony default export */ var molecules_FatalMessage = (FatalMessage);
// CONCATENATED MODULE: ./src/components/TwApps/organisms/AppContent/index.jsx
var AppContent_jsx = external_react_default.a.createElement;





/**
 *
 */

class AppContent_ListContainer extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      errMessage
    } = this.props;
    return AppContent_jsx("div", {
      className: "mutereminder"
    }, AppContent_jsx(molecules_MuterMenu, null), errMessage ? AppContent_jsx(molecules_FatalMessage, null) : AppContent_jsx(molecules_UserList, null));
  }

}

/* harmony default export */ var AppContent = (Object(external_react_redux_["connect"])(state => ({
  errMessage: state.errMessage
}))(AppContent_ListContainer));
// CONCATENATED MODULE: ./src/components/TwApps/molecules/FrontDisplayContainer/index.tsx
var FrontDisplayContainer_jsx = external_react_default.a.createElement;





const loading_anim = __webpack_require__("uqPz");

const FrontDisplayContainer_StateSelector = state => ({
  muteRequestStatus: state.muteRequestStatus,
  userRequestStatus: state.userRequestStatus
});

const FrontDisplayContainer_Container = external_styled_components_default.a.div.withConfig({
  displayName: "FrontDisplayContainer__Container",
  componentId: "sc-1fmjlgq-0"
})(["align-items:center;background-color:", ";border-radius:5px;display:flex;flex-wrap:wrap;height:80px;justify-content:center;left:calc(50% - 35px);position:fixed;top:50%;width:70px;"], ({
  theme
}) => theme.colors.blackTransparent);
const Img = external_styled_components_default.a.img.withConfig({
  displayName: "FrontDisplayContainer__Img",
  componentId: "sc-1fmjlgq-1"
})(["height:50px;width:50px;"]);
const Caption = external_styled_components_default.a.p.withConfig({
  displayName: "FrontDisplayContainer__Caption",
  componentId: "sc-1fmjlgq-2"
})(["color:", ";font-size:.8rem;"], ({
  theme
}) => theme.colors.basicWhite);
/**
 *　画面の前面に出てくるエリア
 *　主にポップアップメッセージや、ロード画像の表示に使用する
 */

const FrontDisplayContainer = () => {
  const {
    userRequestStatus,
    muteRequestStatus
  } = Object(external_react_redux_["useSelector"])(FrontDisplayContainer_StateSelector);
  let style = {}; // いずれかの要素がロード中の時は表示する

  if (muteRequestStatus === TwAppsConst["a" /* default */].REQUEST_STATUS_COMPLETE && userRequestStatus === TwAppsConst["a" /* default */].REQUEST_STATUS_COMPLETE) {
    style = {
      display: 'none'
    };
  } // background-imageは表示の優先順位が低いらしいのでimgタグを使用する


  return FrontDisplayContainer_jsx(FrontDisplayContainer_Container, {
    style: style
  }, FrontDisplayContainer_jsx(Img, {
    src: loading_anim,
    alt: "loading"
  }), FrontDisplayContainer_jsx(Caption, null, "loading..."));
};

/* harmony default export */ var molecules_FrontDisplayContainer = (FrontDisplayContainer);
// EXTERNAL MODULE: ./src/redux/reducers/resource/userInfo.ts
var userInfo = __webpack_require__("qUPm");

// CONCATENATED MODULE: ./src/components/TwApps/templates/TwitterApps/index.tsx
var TwitterApps_jsx = external_react_default.a.createElement;








const TwitterApps = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    // 利用者自身のユーザー情報を取得
    dispatch(Object(userInfo["b" /* requestUserInfo */])(TwAppsConst["a" /* default */].USER_INFO_ENDPOINT));
  }, []);
  return TwitterApps_jsx("div", {
    className: "twitter-apps"
  }, TwitterApps_jsx(molecules_FrontDisplayContainer, null), TwitterApps_jsx(organisms_TwAppsHeader, null), TwitterApps_jsx(AppContent, null));
};

/* harmony default export */ var templates_TwitterApps = (TwitterApps);
// EXTERNAL MODULE: ./src/components/Common/Header/index.tsx
var Common_Header = __webpack_require__("m+Pj");

// CONCATENATED MODULE: ./src/pages/mutereminder.tsx

var mutereminder_jsx = external_react_default.a.createElement;



const Page = () => {
  const base_path = true ? "http://127.0.0.1" : undefined;
  return mutereminder_jsx(external_react_default.a.Fragment, null, mutereminder_jsx(Common_Header["a" /* default */], null), mutereminder_jsx(templates_TwitterApps // basePath={base_path}
  // appName={TwAppsConst.APPNAME_MUTER}
  , null));
};

/* harmony default export */ var mutereminder = __webpack_exports__["default"] = (Page);

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

/***/ "Y7Lh":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi45MiIgaGVpZ2h0PSIxOC4yNSIgdmlld0JveD0iMCAwIDIyLjkyIDE4LjI1Ij4KICA8ZyBpZD0iZXllX2ljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjk0IC0zNi43NSkiPgogICAgPHBhdGggaWQ9IuODkeOCuV8xMCIgZGF0YS1uYW1lPSLjg5HjgrkgMTAiIGQ9Ik0xNS42MTEsOTguMTU5Yy00LjUxMiwwLTguNzU0LTIuNjUxLTExLjM0Ny03LjA5bC0uMDk0LS4xNi4wOTQtLjE2YzIuNTkzLTQuNDM5LDYuODM1LTcuMDksMTEuMzQ3LTcuMDlzOC43NTQsMi42NTEsMTEuMzQ3LDcuMDlsLjA5NC4xNi0uMDk0LjE2QzI0LjM2NSw5NS41MDksMjAuMTIzLDk4LjE1OSwxNS42MTEsOTguMTU5Wm0tMTAuNy03LjI1YzIuNDg0LDQuMTQzLDYuNDcyLDYuNjExLDEwLjcsNi42MTFzOC4yMTUtMi40NjcsMTAuNy02LjYxMWMtMi40ODQtNC4xNDQtNi40NzItNi42MTItMTAuNy02LjYxMlM3LjQsODYuNzY1LDQuOTEyLDkwLjkwOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxMiAtNDMuMTU5KSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPGNpcmNsZSBpZD0i5qWV5YaG5b2iXzEiIGRhdGEtbmFtZT0i5qWV5YaG5b2iIDEiIGN4PSI1LjcyOCIgY3k9IjUuNzI4IiByPSI1LjcyOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS42NzEgNDIuMDIxKSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPGNpcmNsZSBpZD0i5qWV5YaG5b2iXzIiIGRhdGEtbmFtZT0i5qWV5YaG5b2iIDIiIGN4PSIxLjU0IiBjeT0iMS41NCIgcj0iMS41NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuNDUzIDQ0LjA5MikiIGZpbGw9IiNhYWY5ZWUiLz4KICAgIDxjaXJjbGUgaWQ9IualleWGhuW9ol8zIiBkYXRhLW5hbWU9IualleWGhuW9oiAzIiBjeD0iMC45NjMiIGN5PSIwLjk2MyIgcj0iMC45NjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjU1NSA0OS43NzEpIiBmaWxsPSIjYWFmOWVlIi8+CiAgICA8bGluZSBpZD0i57eaXzUiIGRhdGEtbmFtZT0i57eaIDUiIHgyPSIwLjcxNyIgeTI9IjEuMjI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjY5NyAzOC4yOTYpIiBmaWxsPSIjZmZmIi8+CiAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzciIGRhdGEtbmFtZT0i6ZW35pa55b2iIDciIHdpZHRoPSIwLjY0IiBoZWlnaHQ9IjEuNDIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjQyIDM4LjQ1Nykgcm90YXRlKC0zMC4yNykiIGZpbGw9IiMwMDUzNWQiLz4KICAgIDxsaW5lIGlkPSLnt5pfNiIgZGF0YS1uYW1lPSLnt5ogNiIgeDI9IjAuODc0IiB5Mj0iMS4xMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuODEyIDQwLjA2NSkiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfOCIgZGF0YS1uYW1lPSLplbfmlrnlvaIgOCIgd2lkdGg9IjAuNjQiIGhlaWdodD0iMS40MjIiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzg5LCAtMC42MTUsIDAuNjE1LCAwLjc4OSwgNS41NiwgNDAuMjYxKSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPGxpbmUgaWQ9Iue3ml83IiBkYXRhLW5hbWU9Iue3miA3IiB4Mj0iMC4zMjkiIHkyPSIxLjM4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuMTYyIDM3LjE2KSIgZmlsbD0iI2ZmZiIvPgogICAgPHJlY3QgaWQ9IumVt+aWueW9ol85IiBkYXRhLW5hbWU9IumVt+aWueW9oiA5IiB3aWR0aD0iMC42NCIgaGVpZ2h0PSIxLjQyMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NzMsIC0wLjIzMSwgMC4yMzEsIDAuOTczLCAxMS44NSwgMzcuMjM0KSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPGxpbmUgaWQ9Iue3ml84IiBkYXRhLW5hbWU9Iue3miA4IiB4MT0iMC4wMDgiIHkyPSIxLjQyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuNDA3IDM2Ljc1MikiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTAiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEwIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMDUsIC0xLCAxLCAwLjAwNSwgMTUuMDg3LCAzOC4xNzMpIiBmaWxsPSIjMDA1MzVkIi8+CiAgICA8cGF0aCBpZD0i44OR44K5XzExIiBkYXRhLW5hbWU9IuODkeOCuSAxMSIgZD0iTTI2LjM2OSw1Ny42ODNhMTUuMjA4LDE1LjIwOCwwLDAsMC0xMC45LTUuMjc3aC0uMDc0QTE1LjE4NCwxNS4xODQsMCwwLDAsNC40MjksNTcuNjc5bC0uNDg5LS40MTFhMTUuODgyLDE1Ljg4MiwwLDAsMSwxMS4zNzktNS41aC4wOGExNS44NjEsMTUuODYxLDAsMCwxLDExLjQ2LDUuNTA1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTMuODE5KSIgZmlsbD0iIzAwNTM1ZCIvPgogICAgPGxpbmUgaWQ9Iue3ml85IiBkYXRhLW5hbWU9Iue3miA5IiB4MT0iMC43MTciIHkyPSIxLjIyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMzgzIDM4LjI5MykiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTEiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDExIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMTA2IDM5LjM2MSkgcm90YXRlKC01OS43MykiIGZpbGw9IiMwMDUzNWQiLz4KICAgIDxsaW5lIGlkPSLnt5pfMTAiIGRhdGEtbmFtZT0i57eaIDEwIiB4MT0iMC44NzUiIHkyPSIxLjEyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMTkxIDM5Ljk4MykiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTIiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEyIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuOTM5IDQwLjkwOCkgcm90YXRlKC01Mi4wNykiIGZpbGw9IiMwMDUzNWQiLz4KICAgIDxsaW5lIGlkPSLnt5pfMTEiIGRhdGEtbmFtZT0i57eaIDExIiB4MT0iMC4zMjkiIHkyPSIxLjM4NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMzAzIDM3LjE1NikiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTMiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEzIiB3aWR0aD0iMS40MjMiIGhlaWdodD0iMC42NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuOTkyIDM4LjQ2Nikgcm90YXRlKC03Ni42MykiIGZpbGw9IiMwMDUzNWQiLz4KICA8L2c+Cjwvc3ZnPgo="

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i4tx":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNy4xMzgiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNy4xMzggMTUiPgogIDxwYXRoIGlkPSJoZWFydC1yZWd1bGFyIiBkPSJNMTUuMzQ0LDMzLjA2YTUuMDQyLDUuMDQyLDAsMCwwLTYuNzc1LjUsNS4wMzgsNS4wMzgsMCwwLDAtNi43NzUtLjUsNS4wNjUsNS4wNjUsMCwwLDAtLjM1NSw3LjRMNy4zMSw0Ni40NDZhMS43NTgsMS43NTgsMCwwLDAsMi41MTcsMEwxNS43LDQwLjQ2OEE1LjA2OCw1LjA2OCwwLDAsMCwxNS4zNDQsMzMuMDZabS0uNzksNi4yNzZMOC42ODMsNDUuMzE4YS4xMzguMTM4LDAsMCwxLS4yMjgsMEwyLjU4NCwzOS4zMzZhMy40NTIsMy40NTIsMCwwLDEsLjI0NC01LjA0NCwzLjM5NCwzLjM5NCwwLDAsMSw0LjU2OS4zNTFsMS4xNzIsMS4xOTUsMS4xNzItMS4xOTVhMy4zOTEsMy4zOTEsMCwwLDEsNC41NjktLjM1NUEzLjQ2NywzLjQ2NywwLDAsMSwxNC41NTQsMzkuMzM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuOTc4KSIgZmlsbD0iIzZlNmU2ZSIvPgo8L3N2Zz4K"

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

/***/ "m+Pj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


/* harmony default export */ __webpack_exports__["a"] = (() => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "my title"), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/jdw4aor.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/Carousel.css"
  }));
});

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

/***/ "r2VE":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC42MjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNC42MjUgMjAiPgogIDxwYXRoIGlkPSJ0d2l0dGVyLWJyYW5kcyIgZD0iTTIyLjA5NCw1My4wNjZjLjAxNi4yMTkuMDE2LjQzOC4wMTYuNjU2QTE0LjI2MSwxNC4yNjEsMCwwLDEsNy43NSw2OC4wODIsMTQuMjYyLDE0LjI2MiwwLDAsMSwwLDY1LjgxNmExMC40NDEsMTAuNDQxLDAsMCwwLDEuMjE5LjA2MiwxMC4xMDcsMTAuMTA3LDAsMCwwLDYuMjY2LTIuMTU2LDUuMDU2LDUuMDU2LDAsMCwxLTQuNzE5LTMuNSw2LjM2NSw2LjM2NSwwLDAsMCwuOTUzLjA3OCw1LjMzOCw1LjMzOCwwLDAsMCwxLjMyOC0uMTcyQTUuMDQ4LDUuMDQ4LDAsMCwxLDEsNTUuMTc2di0uMDYyYTUuMDgzLDUuMDgzLDAsMCwwLDIuMjgxLjY0MUE1LjA1NCw1LjA1NCwwLDAsMSwxLjcxOSw0OWExNC4zNDYsMTQuMzQ2LDAsMCwwLDEwLjQwNiw1LjI4MUE1LjcsNS43LDAsMCwxLDEyLDUzLjEyOWE1LjA1Miw1LjA1MiwwLDAsMSw4LjczNC0zLjQ1Myw5LjkzNiw5LjkzNiwwLDAsMCwzLjItMS4yMTksNS4wMzMsNS4wMzMsMCwwLDEtMi4yMTksMi43ODEsMTAuMTE4LDEwLjExOCwwLDAsMCwyLjkwNi0uNzgxQTEwLjg0OSwxMC44NDksMCwwLDEsMjIuMDk0LDUzLjA2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjA4MikiIGZpbGw9IiMwMWU1ZjYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "rE1Z":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNy40OTgiIGhlaWdodD0iMjkuODU4IiB2aWV3Qm94PSIwIDAgMzcuNDk4IDI5Ljg1OCI+CiAgPGcgaWQ9ImV5ZV9pY29uX+OCouODvOODiOODnOODvOODiV8xIiBkYXRhLW5hbWU9ImV5ZV9pY29uX+OCouODvOODiOODnOODvOODiSAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy45NCAtMzYuNzUpIiBvcGFjaXR5PSIwLjUiPgogICAgPHBhdGggaWQ9IuODkeOCuV8xMCIgZGF0YS1uYW1lPSLjg5HjgrkgMTAiIGQ9Ik0yMi44ODgsMTA3LjM4MmMtNy4zODIsMC0xNC4zMjEtNC4zMzYtMTguNTY0LTExLjZsLS4xNTQtLjI2Mi4xNTQtLjI2MkM4LjU2Nyw4OCwxNS41MDYsODMuNjYsMjIuODg4LDgzLjY2UzM3LjIxLDg4LDQxLjQ1Miw5NS4yNTlsLjE1NC4yNjItLjE1NC4yNjJDMzcuMjEsMTAzLjA0NSwzMC4yNywxMDcuMzgyLDIyLjg4OCwxMDcuMzgyWk01LjM4NCw5NS41MmM0LjA2NCw2Ljc3OSwxMC41ODgsMTAuODE2LDE3LjUsMTAuODE2czEzLjQ0LTQuMDM3LDE3LjUtMTAuODE2QzM2LjMyOCw4OC43NCwyOS44LDg0LjcsMjIuODg4LDg0LjdTOS40NDgsODguNzQsNS4zODQsOTUuNTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4yIC00MC43NzQpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8Y2lyY2xlIGlkPSLmpZXlhoblvaJfMSIgZGF0YS1uYW1lPSLmpZXlhoblvaIgMSIgY3g9IjkuMzcxIiBjeT0iOS4zNzEiIHI9IjkuMzcxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4zMTcgNDUuMzc0KSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPGNpcmNsZSBpZD0i5qWV5YaG5b2iXzIiIGRhdGEtbmFtZT0i5qWV5YaG5b2iIDIiIGN4PSIyLjUxOSIgY3k9IjIuNTE5IiByPSIyLjUxOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMjMxIDQ4Ljc2MSkiIGZpbGw9IiNlY2VjZWMiLz4KICAgIDxjaXJjbGUgaWQ9IualleWGhuW9ol8zIiBkYXRhLW5hbWU9IualleWGhuW9oiAzIiBjeD0iMS41NzUiIGN5PSIxLjU3NSIgcj0iMS41NzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjU3OCA1OC4wNTMpIiBmaWxsPSIjZWNlY2VjIi8+CiAgICA8bGluZSBpZD0i57eaXzUiIGRhdGEtbmFtZT0i57eaIDUiIHgyPSIxLjE3MyIgeTI9IjIuMDA5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS43MjIgMzkuMjgpIiBmaWxsPSIjZmZmIi8+CiAgICA8cmVjdCBpZD0i6ZW35pa55b2iXzciIGRhdGEtbmFtZT0i6ZW35pa55b2iIDciIHdpZHRoPSIxLjA0NyIgaGVpZ2h0PSIyLjMyNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjY5IDM5LjU0Mykgcm90YXRlKC0zMC4yNykiIGZpbGw9IiM2ZTZlNmUiLz4KICAgIDxsaW5lIGlkPSLnt5pfNiIgZGF0YS1uYW1lPSLnt5ogNiIgeDI9IjEuNDMiIHkyPSIxLjgzNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy4wMDIgNDIuMTczKSIgZmlsbD0iI2ZmZiIvPgogICAgPHJlY3QgaWQ9IumVt+aWueW9ol84IiBkYXRhLW5hbWU9IumVt+aWueW9oiA4IiB3aWR0aD0iMS4wNDciIGhlaWdodD0iMi4zMjciIHRyYW5zZm9ybT0ibWF0cml4KDAuNzg5LCAtMC42MTUsIDAuNjE1LCAwLjc4OSwgNi41OSwgNDIuNDk0KSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPGxpbmUgaWQ9Iue3ml83IiBkYXRhLW5hbWU9Iue3miA3IiB4Mj0iMC41MzgiIHkyPSIyLjI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMzkyIDM3LjQyMSkiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfOSIgZGF0YS1uYW1lPSLplbfmlrnlvaIgOSIgd2lkdGg9IjEuMDQ3IiBoZWlnaHQ9IjIuMzI3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3MywgLTAuMjMxLCAwLjIzMSwgMC45NzMsIDE2Ljg4MiwgMzcuNTQyKSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPGxpbmUgaWQ9Iue3ml84IiBkYXRhLW5hbWU9Iue3miA4IiB4MT0iMC4wMTMiIHkyPSIyLjMyNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuNzAxIDM2Ljc1NCkiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTAiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEwIiB3aWR0aD0iMi4zMjgiIGhlaWdodD0iMS4wNDciIHRyYW5zZm9ybT0ibWF0cml4KDAuMDA1LCAtMSwgMSwgMC4wMDUsIDIyLjE3NywgMzkuMDc4KSIgZmlsbD0iIzZlNmU2ZSIvPgogICAgPHBhdGggaWQ9IuODkeOCuV8xMSIgZGF0YS1uYW1lPSLjg5HjgrkgMTEiIGQ9Ik00MC42MzYsNjEuNDQ0QTI0Ljg4MiwyNC44ODIsMCwwLDAsMjIuOCw1Mi44MWgtLjEyMmMtNi40LDAtMTMuNiwzLjQ2Ny0xNy45MzcsOC42MjdsLS44LS42NzJBMjUuOTgzLDI1Ljk4MywwLDAsMSwyMi41NTcsNTEuNzdoLjEzMWM2LjcsMCwxNC4yMzEsMy42MTgsMTguNzUsOS4wMDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMy4wNTUpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgICA8bGluZSBpZD0i57eaXzkiIGRhdGEtbmFtZT0i57eaIDkiIHgxPSIxLjE3MyIgeTI9IjIuMDExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi40NzcgMzkuMjc1KSIgZmlsbD0iI2ZmZiIvPgogICAgPHJlY3QgaWQ9IumVt+aWueW9ol8xMSIgZGF0YS1uYW1lPSLplbfmlrnlvaIgMTEiIHdpZHRoPSIyLjMyOCIgaGVpZ2h0PSIxLjA0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIuMDI0IDQxLjAyMikgcm90YXRlKC01OS43MykiIGZpbGw9IiM2ZTZlNmUiLz4KICAgIDxsaW5lIGlkPSLnt5pfMTAiIGRhdGEtbmFtZT0i57eaIDEwIiB4MT0iMS40MzEiIHkyPSIxLjgzNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcuMDcyIDQyLjAzOSkiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTIiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEyIiB3aWR0aD0iMi4zMjgiIGhlaWdodD0iMS4wNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LjY2IDQzLjU1Mykgcm90YXRlKC01Mi4wNykiIGZpbGw9IiM2ZTZlNmUiLz4KICAgIDxsaW5lIGlkPSLnt5pfMTEiIGRhdGEtbmFtZT0i57eaIDExIiB4MT0iMC41MzkiIHkyPSIyLjI2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuNDM5IDM3LjQxNCkiIGZpbGw9IiNmZmYiLz4KICAgIDxyZWN0IGlkPSLplbfmlrnlvaJfMTMiIGRhdGEtbmFtZT0i6ZW35pa55b2iIDEzIiB3aWR0aD0iMi4zMjgiIGhlaWdodD0iMS4wNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjkyOSAzOS41NTcpIHJvdGF0ZSgtNzYuNjMpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "t7DL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC42MjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNC42MjUgMjAiPgogIDxwYXRoIGlkPSJ0d2l0dGVyLWJyYW5kcyIgZD0iTTIyLjA5NCw1My4wNjZjLjAxNi4yMTkuMDE2LjQzOC4wMTYuNjU2QTE0LjI2MSwxNC4yNjEsMCwwLDEsNy43NSw2OC4wODIsMTQuMjYyLDE0LjI2MiwwLDAsMSwwLDY1LjgxNmExMC40NDEsMTAuNDQxLDAsMCwwLDEuMjE5LjA2MiwxMC4xMDcsMTAuMTA3LDAsMCwwLDYuMjY2LTIuMTU2LDUuMDU2LDUuMDU2LDAsMCwxLTQuNzE5LTMuNSw2LjM2NSw2LjM2NSwwLDAsMCwuOTUzLjA3OCw1LjMzOCw1LjMzOCwwLDAsMCwxLjMyOC0uMTcyQTUuMDQ4LDUuMDQ4LDAsMCwxLDEsNTUuMTc2di0uMDYyYTUuMDgzLDUuMDgzLDAsMCwwLDIuMjgxLjY0MUE1LjA1NCw1LjA1NCwwLDAsMSwxLjcxOSw0OWExNC4zNDYsMTQuMzQ2LDAsMCwwLDEwLjQwNiw1LjI4MUE1LjcsNS43LDAsMCwxLDEyLDUzLjEyOWE1LjA1Miw1LjA1MiwwLDAsMSw4LjczNC0zLjQ1Myw5LjkzNiw5LjkzNiwwLDAsMCwzLjItMS4yMTksNS4wMzMsNS4wMzMsMCwwLDEtMi4yMTksMi43ODEsMTAuMTE4LDEwLjExOCwwLDAsMCwyLjkwNi0uNzgxQTEwLjg0OSwxMC44NDksMCwwLDEsMjIuMDk0LDUzLjA2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTQ4LjA4MikiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+Cg=="

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

/***/ "uqPz":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik02NC40IDE2YTQ5IDQ5IDAgMCAwLTUwIDQ4IDUxIDUxIDAgMCAwIDUwIDUyLjIgNTMgNTMgMCAwIDAgNTQtNTJjLS43LTQ4LTQ1LTU1LjctNDUtNTUuN3M0NS4zIDMuOCA0OSA1NS42Yy44IDMyLTI0LjggNTkuNS01OCA2MC4yLTMzIC44LTYxLjQtMjUuNy02Mi02MEMxLjMgMjkuOCAyOC44LjYgNjQuMyAwYzAgMCA4LjUgMCA4LjcgOC40IDAgOC04LjYgNy42LTguNiA3LjZ6Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA2NCA2NCIgdG89IjM2MCA2NCA2NCIgZHVyPSIxMjAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9wYXRoPjwvc3ZnPg=="

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z8Hb":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i57Sw5a2XIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzVENUQ1RDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPuODj+ODs+ODkOODvOOCrOODvGljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI1MCwxMGExMCwxMCwwLDAsMS0xMCwxMEgxMEExMCwxMCwwLDAsMSwwLDEwSDBBMTAsMTAsMCwwLDEsMTAsMEgyNDBhMTAsMTAsMCwwLDEsMTAsMTBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUwLDc1LjE5YTEwLDEwLDAsMCwxLTEwLDEwSDEwYTEwLDEwLDAsMCwxLTEwLTEwSDBhMTAsMTAsMCwwLDEsMTAtMTBIMjQwYTEwLDEwLDAsMCwxLDEwLDEwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI1MC4zOSwxNDAuMzlhMTAsMTAsMCwwLDEtMTAsMTBoLTIzMGExMCwxMCwwLDAsMS0xMC0xMGgwYTEwLDEwLDAsMCwxLDEwLTEwaDIzMGExMCwxMCwwLDAsMSwxMCwxMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MCwyNDEuMzhINjEuMzhxMC0xMC4xNy0xLjQxLTI5LjQ0dC0xLjUxLTIzLjFINThxLTQuNTYsMTQuODMtMTEuNTcsMzIuMjF0LTcsMjAuMzNIMzMuMjZxMC0zLjE5LTYuNTMtMjAuN3QtOC4yNi0yMy40NHEtMS43NC01Ljk0LTIuMzgtOC40aC0uNDVxLS4xMyw2LjI1LTEuODEsMjUuMjR0LTEuNjYsMjcuM0g0LjMycTAtLjQ1LDMuMS0yNS4xM3QzLjExLTM0LjMxaDEycTAsNSw3LjMxLDI1LjExdDcuMywyNC4zNGguNDZxMC00LjI0LDguMjEtMjQuNDF0OC4yMi0yNUg2NS43NnEwLDkuNjUsMi4xMSwzNC4xNVQ3MCwyNDEuMzhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTIzLjIsMjM0LjQ5bC0uMjgsNi44OUg4Ni4xM3EuNjMtMTQuMTUuNjMtMzEuMjIsMC0xNi4wOC0uNjMtMjguMjJoMzQuNTFsLS4zNyw2LjgxcS0xMi41NS0uNTYtMjYuNjEtLjU1LjI3LDcuMDguMjcsMTkuMTMsMTIuMTUsMCwyMS42NC0uNTV2Ni44cS0xMC4xMi0uNDEtMjEuNjQtLjQxLDAsMTEuNzMuNDEsMjJRMTA5LjUxLDIzNS4xNywxMjMuMiwyMzQuNDlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTgwLjYzLDI0MS4zOGgtNi4zOXEwLS43Ni0xNS0yMS44Ni0xNS42Ni0yMi4xNS0xNy44NS0yNy45NEgxNDFxLjgxLDExLC44MiwxOC44NSwwLDE1LjM0LjY4LDMwLjk1aC03LjY3cS43OC0xNC44My43OC0zMS4yMiwwLTE2LjEyLS43OC0yOC4yMmg4Ljc3cTAsMS4yOSwxMy43OCwyMC44MiwxNC40MywyMC41NSwxNi40NCwyNi43NWguNDZxLS43OC0xMS4xMy0uNzgtMTguOSwwLTE2Ljg5LS42NC0yOC42N2g3LjgxcS0uNzgsMTIuMS0uNzgsMjguMjJRMTc5Ljg1LDIyNi41NCwxODAuNjMsMjQxLjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0NS40NSwxODEuOTRxLS4xOCw4LjY0LS4yNywxNi4xMnQtLjA5LDE0cTAsMzAuNTgtMjQuMTUsMzAuNTlhMjkuMDYsMjkuMDYsMCwwLDEtMTAuOC0xLjgxLDE3LjM0LDE3LjM0LDAsMCwxLTcuMzktNS41MiwyNC4xLDI0LjEsMCwwLDEtNC4yNS05LjM4LDU4LjMyLDU4LjMyLDAsMCwxLTEuMzUtMTMuMzhxMC02Ljc1LS4wOS0xNC4zNnQtLjI3LTE2LjIzaDguNjdxLS41NCwxNy40LS41NSwyNy4yNmE4Nyw4NywwLDAsMCwuNzgsMTIuOTQsMjMuMjYsMjMuMjYsMCwwLDAsMi43Niw4LjMzLDExLjQ5LDExLjQ5LDAsMCwwLDUsNC43MywxOC4zMywxOC4zMywwLDAsMCw3LjY3LDEuMzksMTkuMjMsMTkuMjMsMCwwLDAsNy45NC0xLjM5LDExLjE5LDExLjE5LDAsMCwwLDUtNC42MSwyMy41NSwyMy41NSwwLDAsMCwyLjc0LTguMjcsODUsODUsMCwwLDAsLjgyLTEzLjIxcTAtNC44NS0uMTYtMTEuNThUMjM3LDE4MS45NFoiLz48L3N2Zz4="

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });