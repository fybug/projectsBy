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

vhannels.setName(["floatContlos"]);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _float = /*#__PURE__*/new WeakMap();

var _showlistern = /*#__PURE__*/new WeakMap();

var _destroylistern = /*#__PURE__*/new WeakMap();

var _showhtml = /*#__PURE__*/new WeakMap();

/** 子对话框对象
 *
 * 用于以控件的形式展示子窗口
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.Dialog
 * @see vhannels.floatContlos.FloatDialog
 * @author fybug
 * @version 0.0.1
 */
class Dialog extends vhannels.ViewGroup {
  /** 当前所属的容器
   * @type vhannels.floatContlos.FloatDialog
   */

  /** 展示监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 销毁监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 内容初始化方法
   * @type function(vhannels.floatContlos.Dialog):(string|[Element]|[vhannels.ViewGroup])
   */

  /*--------------------------------------------------------------------------------------------*/

  /**
   * 通过传入的对象来指定控件的属性
   *
   * @param {{}} attrs 属性映射，属性名: 属性值
   */
  constructor(attrs = {}) {
    super(document.createElement("dialog"));

    _classPrivateFieldInitSpec(this, _float, {
      writable: true,
      value: undefined
    });

    _classPrivateFieldInitSpec(this, _showlistern, {
      writable: true,
      value: d => void 0
    });

    _classPrivateFieldInitSpec(this, _destroylistern, {
      writable: true,
      value: d => void 0
    });

    _classPrivateFieldInitSpec(this, _showhtml, {
      writable: true,
      value: d => ""
    });

    this.attrs({
      "vhannels": "vhannels.floatContlos.FloatDialog.Dialog"
    });
    this.attrs(attrs);
    this.getDom().addEventListener("click", e => e.stopPropagation());
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 展示的 html
   *
   * 每次展示的时候使用该方法重新生成 html 内容或者 dom 对象
   *
   * @param {function(vhannels.floatContlos.Dialog):(string|[Element]|[vhannels.ViewGroup])} html 生成 html 内容的方法
   * @return {vhannels.floatContlos.Dialog} this
   */


  show_Html(html) {
    _classPrivateFieldSet(this, _showhtml, html);

    return this;
  }
  /** 展示监听
   *
   * 控件展示时的监听，参数传入控件本身
   *
   * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
   * @return {vhannels.floatContlos.Dialog} this
   */


  showListern(run) {
    _classPrivateFieldSet(this, _showlistern, run);

    return this;
  }
  /** 销毁监听
   *
   * 控件销毁时的监听，参数传入控件本身
   *
   * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
   * @return {vhannels.floatContlos.Dialog} this
   */


  destroyListern(run) {
    _classPrivateFieldSet(this, _destroylistern, run);

    return this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 绑定对话框容器
   *
   * @param {vhannels.floatContlos.FloatDialog} flo 对话框容器对象
   * @return {vhannels.floatContlos.Dialog} this
   */


  __binFloatDialog(flo) {
    _classPrivateFieldSet(this, _float, flo);

    return this;
  }
  /** 展示对话框
   * @return {vhannels.floatContlos.Dialog} this
   */


  __show() {
    let ht = _classPrivateFieldGet(this, _showhtml).call(this, this);

    if (typeof ht === "string") this.setHtml(ht);else this.append(...ht);

    _classPrivateFieldGet(this, _showlistern).call(this, this);

    setTimeout(() => this.class({
      toggle: {
        "show": true
      }
    }), 1);
    return this;
  }
  /** 销毁对话框 */


  __destroy() {
    this.class({
      toggle: {
        "show": false
      }
    });
    setTimeout(() => {
      _classPrivateFieldGet(this, _destroylistern).call(this, this);

      _classPrivateFieldSet(this, _float, undefined);

      this.setHtml("");
      this.remove();
    }, 300);
  }

}

vhannels.floatContlos.Dialog = Dialog;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _showlistern = /*#__PURE__*/new WeakMap();

var _destroylistern = /*#__PURE__*/new WeakMap();

var _nowdialog = /*#__PURE__*/new WeakMap();

var _canend = /*#__PURE__*/new WeakMap();

/** 悬浮对话框工具
 *
 * 用于容纳对话框对象，并且提供展示与销毁的方法<br/>
 * 一次只能使用一个对话框对象，不可堆积多个
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.FloatDialog
 * @see vhannels.floatContlos.Dialog
 * @author fybug
 * @version 0.0.1
 */
class FloatDialog extends vhannels.ViewGroup {
  /** 展示监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 销毁监听
   * @type function(vhannels.floatContlos.Dialog)
   */

  /** 子控件
   * @type vhannels.floatContlos.Dialog
   */

  /**
   * @type boolean
   */

  /*--------------------------------------------------------------------------------------------*/

  /**
   * @param {Element|vhannels.ViewGroup} dom
   */
  constructor(dom = vhannels.View.Body) {
    super(document.createElement("floatdialog"));

    _classPrivateFieldInitSpec(this, _showlistern, {
      writable: true,
      value: d => void 0
    });

    _classPrivateFieldInitSpec(this, _destroylistern, {
      writable: true,
      value: d => void 0
    });

    _classPrivateFieldInitSpec(this, _nowdialog, {
      writable: true,
      value: undefined
    });

    _classPrivateFieldInitSpec(this, _canend, {
      writable: true,
      value: false
    });

    FloatDialog.__toViewGroup(dom).append(this);

    this.attrs({
      "vhannels": "vhannels.floatContlos.FloatDialog"
    }); // 关闭监听

    this.getDom().addEventListener("click", e => {
      if (_classPrivateFieldGet(this, _canend)) this.destroy();
    });
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 展示监听
   *
   * 控件展示时的监听，参数传入当前子控件
   *
   * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
   * @return {vhannels.floatContlos.FloatDialog} this
   */


  showListern(run) {
    _classPrivateFieldSet(this, _showlistern, run);

    return this;
  }
  /** 销毁监听
   *
   * 控件销毁时的监听，参数传入当前子控件
   *
   * @param {function(vhannels.floatContlos.Dialog)} run 监听方法
   * @return {vhannels.floatContlos.FloatDialog} this
   */


  destroyListern(run) {
    _classPrivateFieldSet(this, _destroylistern, run);

    return this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 展示对话框和容器
   *
   * 展示容器后使用 {@link vhannels.floatContlos.Dialog.__show} 方法展示对话框
   *
   * @param {vhannels.floatContlos.Dialog} dailog 对话框对象
   * @param {boolean} canhide 是否可以通过外部关闭
   *
   * @return {boolean}
   */


  show(dailog, canhide = false) {
    // 一次只能展示一个
    if (_classPrivateFieldGet(this, _nowdialog) !== undefined) return false;

    _classPrivateFieldSet(this, _canend, canhide); // 展示容器


    this.class({
      toggle: {
        "show": true,
        "canend": canhide
      }
    });
    this.append(dailog); // 启动监听

    _classPrivateFieldSet(this, _nowdialog, dailog);

    _classPrivateFieldGet(this, _showlistern).call(this, dailog);

    dailog.__binFloatDialog(this);

    dailog.__show();

    return true;
  }
  /** 销毁对话框容器
   *
   * 使用 {@link vhannels.floatContlos.Dialog.__destroy} 方法销毁对话框后隐藏容器
   */


  destroy() {
    _classPrivateFieldGet(this, _nowdialog).__destroy();

    setTimeout(() => {
      this.class({
        toggle: {
          "show": false
        }
      });

      _classPrivateFieldGet(this, _destroylistern).call(this, _classPrivateFieldGet(this, _nowdialog));

      _classPrivateFieldSet(this, _nowdialog, undefined);
    }, 300);
  }

}

vhannels.floatContlos.FloatDialog = FloatDialog;

/***/ })
/******/ ]);
