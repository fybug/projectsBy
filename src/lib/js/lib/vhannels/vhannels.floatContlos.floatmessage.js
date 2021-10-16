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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ })
/******/ ]);
