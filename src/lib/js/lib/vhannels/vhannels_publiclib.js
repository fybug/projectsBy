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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.vhannels || (window.vhannels = {});
/** 检查命名空间
 *
 * @param {[string]} names 命名空间
 */

vhannels.setName = function (names) {
  var last = window.vhannels;

  var _iterator = _createForOfIteratorHelper(names),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      if (name === undefined) continue; // 命名空间未就绪

      if (last[name] === undefined) last[name] = {}; // 记录当前命名空间

      last = last[name];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return last;
};

__webpack_require__(5);

__webpack_require__(6);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _dom = new WeakMap();

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

    _dom.set(this, {
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
    /** 查找子视图
     *
     * @param {string} select 查找规则
     * @return vhannels.ViewGroup[]
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
     * @return vhannels.ViewGroup
     */

  }, {
    key: "querySelector",
    value: function querySelector(select) {
      var d = this.getDom(); // 查询的数据

      var node = d.querySelector(select);
      return new vhannels.ViewGroup(node);
    }
    /*--------------------------------------------------------------------------------------------*/

    /** 属性修改
     *
     * @param {Object} data { 属性名：属性值 }，属性值为 undefined 则是消除属性
     * @return this
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
          var _iterator = _createForOfIteratorHelper(clas.check),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;
              re[v] = a.contains(v);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } // 移除


        clas.remove && a.remove.apply(a, _toConsumableArray(clas)); // 切换

        if (clas.toggle) if (Array.isArray(clas.toggle)) {
          var _iterator2 = _createForOfIteratorHelper(clas.toggle),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var cla = _step2.value;
              re[cla] = a.toggle(cla);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          for (var _cla in clas.toggle) {
            re[_cla] = a.toggle(_cla, clas.toggle[_cla]);
          }
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

      for (var v in sty) {
        if (v === "remove") {
          // 移除
          var _iterator3 = _createForOfIteratorHelper(v),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var res = _step3.value;
              s.removeProperty(res);
              re[res] && (re[res] = undefined);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (v === "get") {
          var _iterator4 = _createForOfIteratorHelper(v),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _res = _step4.value;
              re[_res] = {
                "val": s.getPropertyValue(_res),
                "important": s.getPropertyPriority(_res)
              };
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } else {
          // 设置 important
          if (Array.isArray(sty[v])) s.setProperty(v, sty[v][0], sty[v][1]);else s.setProperty(v, sty[v]);
        }
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
     * @param {HTMLElement|View} view 要确保的对象
     * @return {HTMLElement} 元素节点
     */

  }], [{
    key: "__toDom",
    value: function __toDom(view) {
      if (view instanceof vhannels.View) return view.getDom();
      return view;
    }
  }]);

  return View;
}();
/** @type View */


vhannels.View = View;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

  var _super = _createSuper(ViewGroup);

  /** @param {HTMLElement|vhannels.View} dom 当前节点 */
  function ViewGroup() {
    var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

    _classCallCheck(this, ViewGroup);

    return _super.call(this, dom);
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 获取子节点集合
   *
   * 与 {@link views} 的区别为直接返回原始数据
   *
   * @return HTMLCollection 节点集合
   */


  _createClass(ViewGroup, [{
    key: "doms",
    value: function doms() {
      return this.getDom().children;
    }
    /** 获取子视图集合
     *
     * 于 {@link doms} 的区别为返回包装后的数据
     *
     * @return vhannels.View[] 视图集合
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
          views.push(new vhannels.View(v));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return views;
    }
    /*--------------------------------------------------------------------------------------------*/

    /** 在容器前面插入视图
     *
     * @param {vhannels.View|HTMLElement} view
     * @return this
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
     * @return this
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
    /*--------------------------------------------------------------------------------------------*/

    /** 删除指定的视图
     *
     * @param {vhannels.View|HTMLElement} view 要删除的视图
     * @return this
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
     * @return this
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
  }]);

  return ViewGroup;
}(vhannels.View);
/** @type ViewGroup */


vhannels.ViewGroup = ViewGroup;

/***/ })
/******/ ]);
