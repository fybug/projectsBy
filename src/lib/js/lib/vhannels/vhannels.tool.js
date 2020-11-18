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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** 获取地址栏参数
 *
 * @param {string} key 获取的参数名称
 * @param {string} defaval 默认值
 *
 * @return {string} 获取的值
 */
vhannels.setName(['tool']).getQueryString = function (key) {
  var defaval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var str = location.href;
  var num = str.indexOf("?"); // 截取参数数据

  str = str.substr(num + 1); // 无数据

  if (num === -1) return defaval; // 拆解参数列表

  var _iterator = _createForOfIteratorHelper(str.split("&")),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      str = _step.value;
      num = str.indexOf("="); // 检查属性名称是否是请求的名称

      if (num > 0 && str.substring(0, num).trim() === key) {
        if (num === str.length - 1) return '';
        return str.substr(num + 1).trim();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return defaval;
};
/** 分页辅助工具
 *
 * @param {number} nowpage 当前页码
 * @param {number} maxpage 最大页码
 * @param {number} pagnum 分页数量
 * @param {function(number,boolean,boolean,number,number)} edge 边缘导航生成，传入：当前页码，是否是后边缘，是否远离边缘，最大页码，分页数量
 * @param {function(number,boolean,number,number)} fun 分页生成，传入：当前分页位置，时候是当前页码，最大分页，分页数量
 */


vhannels.tool.Paging = function (nowpage, maxpage, pagnum, edge, fun) {
  // 向前快速索引
  if (nowpage > pagnum && maxpage > pagnum * 2 + 1) {
    edge(nowpage, false, nowpage > pagnum + 1, maxpage, pagnum);
  }

  for (var i = // 计算需要向前偏移的页数，以尾页为基数计算需要向前溢出的页数
  Math.max(0, nowpage - pagnum - Math.max(0, nowpage - maxpage + pagnum + 1)); i <= nowpage; ++i) {
    fun(i, nowpage === i, maxpage, pagnum);
  }

  for (var _i = nowpage + 1, len = // 计算需要向后偏移的页数，以当前页数为基数计算向后溢出的页数
  Math.min(_i + pagnum + Math.max(0, pagnum - nowpage), maxpage); _i < len; ++_i) {
    fun(_i, nowpage === _i, maxpage, pagnum);
  } // 向后快速索引


  if (nowpage < maxpage - pagnum - 1 && maxpage > pagnum * 2 + 1) {
    edge(nowpage, true, nowpage < maxpage - pagnum - 2, maxpage, pagnum);
  }
};

/***/ })

/******/ });
