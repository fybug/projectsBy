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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);

// 项目公共 js
$(function () {
  var head = document.querySelector("body > header");

  // 移动端菜单
  var mob = "";
  var pc = "";
  var _iterator = _createForOfIteratorHelper(menudata),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var v = _step.value;
      mob += "<li><a href=\"" + v.link + "\"class=\"padding-1\" target='_blank'>" + v.name + "</a></li>";
      pc += "<li><a href=\"" + v.link + "\" class=\"padding-horizontal-2\" target='_blank'>" + v.name + "</a></li>";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  head.innerHTML = "<!-- \u79FB\u52A8\u8BBE\u5907\u9876\u680F -->\n        <div id=\"mobile_menu\" class=\"leftload hide-for-large\">\n        <!-- \u9876\u680F -->\n            <div class=\"title-bar\">\n                <!--<div class=\"title-bar-left\">-->\n        <!-- \u83DC\u5355\u6309\u94AE -->\n                <button class=\"menu-icon\" type=\"button\" data-toggle=\"mobile_menu_list\"></button>\n                <h4 class=\"title-bar-title margin-bottom-0\" style=\"margin-left:.5rem\">fybug`s log</h4>\n                <!--</div>-->\n            </div>\n        \n        <!-- \u83DC\u5355\u90E8\u5206 -->\n            <aside class=\"off-canvas position-left\" id=\"mobile_menu_list\" data-off-canvas>\n        <!-- \u83DC\u5355\u5217\u8868 -->\n                <ul class=\"vertical menu\">\n        <!-- \u6807\u9898 -->\n                    <ti>\n        <!-- \u5173\u95ED\u6309\u94AE -->\n                        <button class=\"padding-top-1 padding-left-1 close-button position-static\"\n                                aria-label=\"Close menu\" type=\"button\" data-close>\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                        <h4 class=\"margin-0\">fybug`s log</h4>\n                    </ti>\n                    ".concat(mob, "\n                </ul>\n            </aside>\n        </div>\n        \n        <!-- pc \u7AEF\u9876\u680F -->\n        <div id=\"pc_menu\" class=\"showload grid-container padding-vertical-0 top-bar show-for-large\">\n        <!-- \u56FE\u6807 -->\n            <div class=\"top-bar-left padding-horizontal-2\">\n                <h4 class=\"margin-0 font-bold font-wide\">fybug`s log</h4>\n            </div>\n        \n        <!-- \u83DC\u5355 -->\n            <div class=\"top-bar-right\">\n                <ul class=\"horizontal menu\">\n                    ").concat(pc, "\n                </ul>\n            </div>\n        </div>");
});

/* foundation 初始化 */
$(function () {
  var a = document.createElement("script");
  document.body.appendChild(a);
  a.innerHTML = "$(document).foundation();";
});
window.menudata = [{
  link: "https://fybug.gitee.io/main.html",
  name: "我的主页"
}, {
  link: "https://fybug.gitee.io/projectsBy/main.html",
  name: "开源 项目 / 作品 列表"
}];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ? /******/function getDefault() {
      return module['default'];
    } : /******/function getModuleExports() {
      return module;
    };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 8);
  /******/
}
/************************************************************************/
/******/)({
  /***/10: ( /***/function _(module, exports) {
    /** vhannels 视图容器对象
     *
     * 存放一个原始节点，并支持子对象操作
     *
     * @author fybug
     * @version 0.0.1
     * @extends vhannels.View
     * @class vhannels.ViewGroup
     */
    var ViewGroup = /*#__PURE__*/function (_vhannels$View) {
      _inherits(ViewGroup, _vhannels$View);
      /** @param {HTMLElement|vhannels.View} dom 当前节点 */
      function ViewGroup() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
        _classCallCheck(this, ViewGroup);
        return _callSuper(this, ViewGroup, [dom]);
      }
      /*--------------------------------------------------------------------------------------------*/

      /** 获取子节点集合
       *
       * 与 {@link views} 的区别为直接返回原始数据
       *
       * @return {Element[]} 节点集合
       */
      _createClass(ViewGroup, [{
        key: "doms",
        value: function doms() {
          var re = [];
          var node = this.getDom().firstElementChild;
          /* 转化 */

          while (node) {
            re.push(node);
            node = node.nextElementSibling;
          }
          return re;
        }
        /** 获取子视图集合
         *
         * 于 {@link doms} 的区别为返回包装后的数据
         *
         * @return {vhannels.ViewGroup[]} 视图集合
         */
      }, {
        key: "views",
        value: function views() {
          var views = [];
          var _iterator = _createForOfIteratorHelper(this.doms()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;
              views.push(new vhannels.ViewGroup(v));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return views;
        }
        /** 查找子视图
         *
         * @param {string} select 查找规则
         * @return {vhannels.ViewGroup[]}
         */
      }, {
        key: "querySelectorAll",
        value: function querySelectorAll(select) {
          var d = this.getDom(); // 查询的数据

          var nods = d.querySelectorAll(select);
          /* 转化 */

          var re = [];
          nods.forEach(function (v) {
            return re.push(new vhannels.ViewGroup(v));
          });
          return re;
        }
        /** 查找子视图
         *
         * @param {string} select 查找规则
         * @return {vhannels.ViewGroup}
         */
      }, {
        key: "querySelector",
        value: function querySelector(select) {
          var d = this.getDom(); // 查询的数据

          var node = d.querySelector(select);
          return new vhannels.ViewGroup(node);
        }
        /*--------------------------------------------------------------------------------------------*/

        /** 在容器前面插入视图
         *
         * @param {vhannels.View|HTMLElement} view
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "prepend",
        value: function prepend() {
          var d = this.getDom();
          for (var _len = arguments.length, view = new Array(_len), _key = 0; _key < _len; _key++) {
            view[_key] = arguments[_key];
          }
          for (var _i = 0, _view = view; _i < _view.length; _i++) {
            var v = _view[_i];
            d.insertBefore(ViewGroup.__toDom(v), d.firstChild);
          }
          return this;
        }
        /*-------------------------*/

        /** 在容器后面追加视图
         *
         * @param {vhannels.View|HTMLElement} view
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "append",
        value: function append() {
          var d = this.getDom();
          for (var _len2 = arguments.length, view = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            view[_key2] = arguments[_key2];
          }
          for (var _i2 = 0, _view2 = view; _i2 < _view2.length; _i2++) {
            var v = _view2[_i2];
            d.appendChild(ViewGroup.__toDom(v));
          }
          return this;
        }
        /** 追加 html 内容
         *
         * @param {string} html 追加的 html 内容
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "addHtml",
        value: function addHtml(html) {
          this.getDom().innerHTML += html;
          return this;
        }
        /*--------------------------------------------------------------------------------------------*/

        /** 删除容器内指定的视图
         *
         * @param {vhannels.View|HTMLElement} view 要删除的视图
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "delete",
        value: function _delete() {
          var d = this.getDom();
          for (var _len3 = arguments.length, view = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            view[_key3] = arguments[_key3];
          }
          for (var _i3 = 0, _view3 = view; _i3 < _view3.length; _i3++) {
            var v = _view3[_i3];
            d.removeChild(ViewGroup.__toDom(v));
          }
          return this;
        }
        /** 替换指定视图
         *
         * 通过替换映射进行，of 表示要替换的视图，to 标识替换成的视图
         *
         * @param {{
         *     of:HTMLElement|vhannels.View,
         *     to:HTMLElement|vhannels.View
         * }} viewto 替换列表
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "replace",
        value: function replace() {
          var d = this.getDom();
          for (var _len4 = arguments.length, viewto = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            viewto[_key4] = arguments[_key4];
          }
          for (var _i4 = 0, _viewto = viewto; _i4 < _viewto.length; _i4++) {
            var vt = _viewto[_i4];
            d.replaceChild(ViewGroup.__toDom(vt.to), ViewGroup.__toDom(vt.of));
          }
          return this;
        }
        /** 清空内容
         *
         * 可通过查询表达式删除指定的所有内容
         *
         * @param {string|undefined} query 查询表达式
         * @return {vhannels.ViewGroup} this
         */
      }, {
        key: "clean",
        value: function clean() {
          var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (query === undefined) this.getDom().innerHTML = '';else this.querySelectorAll(query).forEach(function (v) {
            return v.remove();
          });
          return this;
        }
        /*--------------------------------------------------------------------------------------------*/
      }], [{
        key: "creaViewGroup",
        value: function creaViewGroup(dom) {
          if (typeof dom === 'string') return new ViewGroup(document.createElement(dom));else return new ViewGroup(dom);
        }
        /** 确保对象为 ViewGroup 对象
         *
         * @return vhannels.ViewGroup
         */
      }, {
        key: "__toViewGroup",
        value: function __toViewGroup(dom) {
          if (dom instanceof vhannels.ViewGroup) return dom;
          return this.creaViewGroup(dom);
        }
      }]);
      return ViewGroup;
    }(vhannels.View);
    vhannels.ViewGroup = ViewGroup;

    /***/
  }),
  /***/8: ( /***/function _(module, exports, __webpack_require__) {
    window.vhannels || (window.vhannels = {});
    /** 检查命名空间
     *
     * @param {[string]} names 命名空间
     */

    vhannels.setName = function (names) {
      var last = window.vhannels;
      var _iterator2 = _createForOfIteratorHelper(names),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var name = _step2.value;
          if (name === undefined) continue; // 命名空间未就绪

          if (last[name] === undefined) last[name] = {}; // 记录当前命名空间

          last = last[name];
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return last;
    };
    __webpack_require__(9);
    __webpack_require__(10); // 全局 Body 对象

    window.addEventListener("load", function () {
      return vhannels.View.Body = new vhannels.ViewGroup(document.body);
    });

    /***/
  }),
  /***/9: ( /***/function _(module, exports) {
    function _classPrivateFieldInitSpec(obj, privateMap, value) {
      _checkPrivateRedeclaration(obj, privateMap);
      privateMap.set(obj, value);
    }
    function _checkPrivateRedeclaration(obj, privateCollection) {
      if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
    }
    function _classPrivateFieldGet(receiver, privateMap) {
      var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
      return _classApplyDescriptorGet(receiver, descriptor);
    }
    function _classApplyDescriptorGet(receiver, descriptor) {
      if (descriptor.get) {
        return descriptor.get.call(receiver);
      }
      return descriptor.value;
    }
    function _classPrivateFieldSet(receiver, privateMap, value) {
      var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
      _classApplyDescriptorSet(receiver, descriptor, value);
      return value;
    }
    function _classExtractFieldDescriptor(receiver, privateMap, action) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function _classApplyDescriptorSet(receiver, descriptor, value) {
      if (descriptor.set) {
        descriptor.set.call(receiver, value);
      } else {
        if (!descriptor.writable) {
          throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
      }
    }
    var _dom = /*#__PURE__*/new WeakMap();

    /** vhannels 视图对象
     *
     * 存放一个原始节点，并包含对应的操作封装
     *
     * @author fybug
     * @version 0.0.1
     * @class vhannels.View
     */
    var View = /*#__PURE__*/function () {
      /** 当前节点
       *
       *  @type HTMLElement
       */

      /** @param {HTMLElement|vhannels.View} dom 当前节点 */
      function View(dom) {
        _classCallCheck(this, View);
        _classPrivateFieldInitSpec(this, _dom, {
          writable: true,
          value: void 0
        });
        _classPrivateFieldSet(this, _dom, View.__toDom(dom));
      }
      /*--------------------------------------------------------------------------------------------*/

      /** 获取当前节点
       *
       * @return {HTMLElement}
       */
      _createClass(View, [{
        key: "getDom",
        value: function getDom() {
          return _classPrivateFieldGet(this, _dom);
        }
        /** 刷新 html 内容
         *
         * @param {string} html 新的 html 内容
         * @return {vhannels.View} this
         */
      }, {
        key: "setHtml",
        value: function setHtml(html) {
          this.getDom().innerHTML = html;
          return this;
        }
        /** 获取 html 内容
         *
         * @return {string}
         */
      }, {
        key: "html",
        value: function html() {
          return this.getDom().innerHTML;
        }
        /** 获取 innerText 的内容
         *
         * @return {string}
         */
      }, {
        key: "text",
        value: function text() {
          return this.getDom().innerText;
        }
        /** 设置 innerText 的内容
         *
         * @param {string} t 文本内容
         *
         * @return {vhannels.View} this
         */
      }, {
        key: "settext",
        value: function settext(t) {
          this.getDom().innerText = t;
          return this;
        }
        /*--------------------------------------------------------------------------------------------*/

        /** 属性修改
         *
         * @param {Object} data { 属性名：属性值 }，属性值为 undefined 则是消除属性
         * @return {vhannels.View} this
         */
      }, {
        key: "attrs",
        value: function attrs(data) {
          var d = this.getDom();
          var v;
          for (var key in data) {
            if (key === undefined) continue;
            v = data[key]; // 检查是否删除

            v !== undefined ? d.setAttribute(key, v) : d.removeAttribute(key);
          }
          return this;
        }
        /** 获取属性
         *
         * @param {[string]} data 要获取的属性列表
         * @return {{"string":string}} 获取的属性映射
         */
      }, {
        key: "getattrs",
        value: function getattrs(data) {
          var d = this.getDom();
          var ats = {};
          var _iterator3 = _createForOfIteratorHelper(data),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var v = _step3.value;
              ats[v] = d.getAttribute(v);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return ats;
        }
        /** 获取 value 的内容
         *
         * @return {string} 获取的属性值
         */
      }, {
        key: "value",
        value: function value() {
          return this.getDom().value;
        }
        /** 设置 value 的内容
         *
         * @param {string} v 要设置的值
         *
         * @return {vhannels.View} this
         */
      }, {
        key: "setvalue",
        value: function setvalue(v) {
          this.getDom().value = v;
          return this;
        }
        /*------------------------*/

        /** 类操作
         *
         * 提供一体化类操作的接口
         *
         * - 追加类<br/>
         * class("a","s");
         *
         * - 移除类<br/>
         * class({"remove":["a","s"]});
         *
         * - 检查是否有对应的类<br/>
         * class({"check":["a","s"]});
         *
         * - 切换类操作<br/>
         * class({"toggle":["a","s"]});
         *
         * 在检查或者切换类的操作后会返回对应的结果，其他操作则是空对象
         *
         * @param {{
         *     check:undefined|[string],
         *     remove:undefined|[string],
         *     toggle:undefined|{
         *         classname:undefined|boolean
         *     }|[string]
         * }|[string]} clas
         * @return {{
         *     classname:boolean
         * }}
         */
      }, {
        key: "class",
        value: function _class(clas) {
          var d = this.getDom();
          var a = d.classList;
          var re = {}; // 追加

          if (Array.isArray(clas)) a.add.apply(a, _toConsumableArray(clas));else {
            // 检查
            if (clas.check) {
              var _iterator4 = _createForOfIteratorHelper(clas.check),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var v = _step4.value;
                  re[v] = a.contains(v);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } // 移除

            clas.remove && a.remove.apply(a, _toConsumableArray(clas.remove)); // 切换

            if (clas.toggle) if (Array.isArray(clas.toggle)) {
              var _iterator5 = _createForOfIteratorHelper(clas.toggle),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var cla = _step5.value;
                  re[cla] = a.toggle(cla);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            } else {
              for (var _cla in clas.toggle) re[_cla] = a.toggle(_cla, clas.toggle[_cla]);
            }
          }
          return re;
        }
        /** css 样式操作
         *
         * 操作一体化样式操作
         *
         * 传入的对象示意需要进行的操作，
         * 含有 "remove" 字段将会对声明的样式进行移除，
         * 含有 "get" 字段将会获取声明的样式的值以及是否 !important，
         * 在对象中直接声明要修改的样式，可以和上面的两个字段混合使用
         *
         * - 移除样式<br/>
         * style({"remove":["color"]});
         *
         * - 获取样式内容<br/>
         * style({"get":["color"]});
         *
         * - 设置样式<br/>
         * style({"color":"red"});
         *
         * @param {{
         *     cssname:string|[string],
         *     "remove":[string],
         *     "get":[string]
         * }} sty
         *
         * @return {{
         *     cssname:{
         *         "val":string,
         *         "important":"important"|""
         *     }
         * }}
         */
      }, {
        key: "style",
        value: function style(sty) {
          var d = this.getDom();
          var s = d.style;
          var re = {};
          for (var v in sty) if (v === "remove") {
            // 移除
            var _iterator6 = _createForOfIteratorHelper(v),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var res = _step6.value;
                s.removeProperty(res);
                re[res] && (re[res] = undefined);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else if (v === "get") {
            var _iterator7 = _createForOfIteratorHelper(v),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _res = _step7.value;
                re[_res] = {
                  "val": s.getPropertyValue(_res),
                  "important": s.getPropertyPriority(_res)
                };
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } else {
            // 设置 important
            if (Array.isArray(sty[v])) s.setProperty(v, sty[v][0], sty[v][1]);else s.setProperty(v, sty[v]);
          }
          return re;
        }
        /*--------------------------------------------------------------------------------------------*/

        /** 移除此视图 */
      }, {
        key: "remove",
        value: function remove() {
          var d = this.getDom();
          d.parentNode.removeChild(d);
        }
        /** 确保为原始元素节点
         *
         * @param {HTMLElement|vhannels.View} view 要确保的对象
         * @return {HTMLElement} 元素节点
         */
      }], [{
        key: "__toDom",
        value: function __toDom(view) {
          if (view instanceof vhannels.View) return view.getDom();
          return view;
        }
      }, {
        key: "creaView",
        value: function creaView(dom) {
          if (typeof dom === 'string') return new View(document.createElement(dom));else return new View(dom);
        }
      }]);
      return View;
    }();
    vhannels.View = View;

    /***/
  })

  /******/
});

/***/ })
/******/ ]);