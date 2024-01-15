/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports) {

/** 分页生成回调
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 * @param {string} link 附加参数
 *
 * @return {function}
 */
window.plushpagedata = function (Aout_blog) {
  var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (index, isac) {
    var html = '<li class="cell shrink';
    if (isac) html += " current\">".concat(index + 1, "</li>");else html += "\"><a href=\"?".concat(link, "p=").concat(index, "\">").concat(index + 1, "</a></li>");
    Aout_blog.data('root').children[0].innerHTML += html;
  };
};

/** 分页边缘生成回调
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 * @param {string} link 附加参数
 *
 * @return {function}
 */
window.plushpageedge = function (Aout_blog) {
  var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (index, after, maxnum, pagenum) {
    var html = '';

    // 向前快速索引
    if (!after) {
      if (index > pagenum && maxnum > pagenum * 2 + 1) {
        html += "<li class=\"cell shrink\"><a href=\"?".concat(link, "p=0\">1</a></li>");
        if (index > pagenum + 1) html += "<li class=\"ellipsis\" aria-hidden=\"true\"></li>";
        Aout_blog.data('root').children[0].innerHTML += html;
      }
    } else {
      // 向后快速索引
      if (index < maxnum - pagenum - 1 && maxnum > pagenum * 2 + 1) {
        if (index < maxnum - pagenum - 2) html += "<li class=\"ellipsis\" aria-hidden=\"true\"></li>";
        html += "<li class=\"cell shrink\"><a href=\"?".concat(link, "p=").concat(maxnum - 1, "\">").concat(maxnum, "</a></li>");
        Aout_blog.data('root').children[0].innerHTML += html;
      }
    }
  };
};

/***/ })

/******/ });