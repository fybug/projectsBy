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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

vhannels.setName(["floatContlos"]);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/** 消息对象
 *
 * 用于显示多种状态的消息，每种状态都可以设定对应显示方式
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.Message
 * @see vhannels.floatContlos.FloatMessage
 * @author fybug
 * @version 0.0.1
 */
class Message extends vhannels.ViewGroup {
  /** 默认处理 */

  /** 消息样式列表 */

  /**
   * @param {{
   *    default:function(string,vhannels.ViewGroup)|undefined,
   *    load:function(string,vhannels.ViewGroup)|undefined,
   *    success:function(string,vhannels.ViewGroup)|undefined,
   *    error:function(string,vhannels.ViewGroup)|undefined,
   *    warning:function(string,vhannels.ViewGroup)|undefined,
   *    destroy:function(vhannels.ViewGroup)
   * }} styrun 每一个状态的显示处理，load/success/error 会额外传入当前请求的消息内容，在有消息的状态没有定义处理的时候会使用默认处理 default
   */
  constructor(styrun = {}) {
    super(document.createElement("message"));

    _defineProperty(this, "stylemap", {
      /** 表示正在加载中的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      load: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示成功消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      success: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示错误消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      error: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 表示警告消息的样式
       *
       * @type function(string,vhannels.ViewGroup)
       */
      warning: _classStaticPrivateFieldSpecGet(Message, Message, _nullfun),

      /** 指示消息如何销毁
       *
       * @type function(vhannels.ViewGroup)
       */
      destroy: v => setTimeout(() => v.remove(), 350)
    });

    this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage.Message"
    });

    if (styrun.default) {
      let messagelist = ["load", "success", "error", "warning"];
      messagelist.forEach(v => this.stylemap[v] = styrun.default);
      delete styrun.default;
    }

    this.stylemap = Object.assign(this.stylemap, styrun);
  }
  /** 加载中的消息
   *
   * 追加 primary 类，并运行 load 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return {vhannels.floatContlos.Message} this
   */


  message_load(message) {
    this.__toclass("primary");

    this.stylemap.load(message, this);
    return this;
  }
  /** 成功的消息
   *
   * 追加 success 类，并运行 success 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return {vhannels.floatContlos.Message} this
   */


  message_success(message) {
    this.__toclass("success");

    this.stylemap.success(message, this);
    return this;
  }
  /** 错误的消息
   *
   * 追加 alert 类，并运行 error 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return {vhannels.floatContlos.Message} this
   */


  message_error(message) {
    this.__toclass("alert");

    this.stylemap.error(message, this);
    return this;
  }
  /** 警告的消息
   *
   * 追加 warning 类，并运行 warning 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return {vhannels.floatContlos.Message} this
   */


  message_warnning(message) {
    this.__toclass("warning");

    this.stylemap.warning(message, this);
    return this;
  }
  /** 销毁当前消息
   *
   * 追加 destroy 类，并运行 destroy 显示处理
   */


  message_destroy() {
    this.class(["destroy"]);
    this.stylemap.destroy(this);
  }
  /**
   * @param {"destroy"|"primary"|"secondary"|"success"|"alert"|"warning"} classna
   */


  __toclass(classna) {
    let a = {
      "primary": false,
      "secondary": false,
      "success": false,
      "alert": false,
      "warning": false
    };
    a[classna] = true;
    this.class({
      "toggle": a
    });
  }

}

var _nullfun = {
  writable: true,
  value: (message, v) => v.querySelector("p").getDom().innerText = message
};
vhannels.floatContlos.Message = Message;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/** 悬浮消息工具
 *
 * 用于包装消息对象
 *
 * @extends vhannels.ViewGroup
 * @class vhannels.floatContlos.FloatMessage
 * @see vhannels.floatContlos.Message
 * @author fybug
 * @version 0.0.1
 */
class FloatMessage extends vhannels.ViewGroup {
  /**
   * @param {HTMLElement|vhannels.ViewGroup} dom 容器添加到该节点内
   */
  constructor(dom = vhannels.View.Body) {
    super(document.createElement("messagegroup")); // 插入消息容器

    dom.append(this.getDom()); // 赋予消息组样式

    this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage"
    });
  }
  /** 展示消息对象
   *
   * @param {vhannels.floatContlos.Message} message 要展示的消息
   * @param {number|undefined} time 消息展示的时长，不传入则为无限
   *
   * @return {vhannels.floatContlos.Message} 消息对象
   */


  showMessage(message, time = undefined) {
    this.append(message);
    setTimeout(() => message.class({
      toggle: {
        "show": true,
        "destroy": false
      }
    }), 10);
    time !== undefined && setTimeout(() => message.message_destroy(), time + 9);
    return message;
  }
  /** 创建消息对象
   *
   * 创建消息对象并赋予状态处理
   *
   * @param {{
   *    default:function(string,vhannels.ViewGroup)|undefined,
   *    load:function(string,vhannels.ViewGroup)|undefined,
   *    success:function(string,vhannels.ViewGroup)|undefined,
   *    error:function(string,vhannels.ViewGroup)|undefined,
   *    warning:function(string,vhannels.ViewGroup)|undefined,
   *    destroy:function(vhannels.ViewGroup)
   * }} styrun 每一个状态的显示处理，load/success/error 会额外传入当前请求的消息内容，在有消息的状态没有定义处理的时候会使用默认处理 default
   * @param {function(vhannels.ViewGroup)} bestyle 前置渲染，初始化视图的内容，传入消息视图对象
   *
   * @return {vhannels.floatContlos.Message} 消息对象
   */


  createMessage(styrun = {}, bestyle = v => v.append(document.createElement("p"))) {
    let v = new vhannels.floatContlos.Message(styrun);
    bestyle(v);
    return v;
  }

}

vhannels.floatContlos.FloatMessage = FloatMessage;

/***/ }),
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

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

__webpack_require__(4);

/***/ })
/******/ ]);
