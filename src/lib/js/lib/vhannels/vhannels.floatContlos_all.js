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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

/** 消息对象
 *
 * 用于显示多种状态的消息，每种状态都可以设定对应显示方式
 *
 * @extends vhannels.View
 * @class vhannels.floatContlos.Message
 * @see vhannels.floatContlos.FloatMessage
 * @author fybug
 * @version 0.0.1
 */
var Message = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(Message, _vhannels$ViewGroup);

  var _super = _createSuper(Message);

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
  function Message() {
    var _this;

    var styrun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Message);

    _this = _super.call(this, document.createElement("message"));

    _defineProperty(_assertThisInitialized(_this), "stylemap", {
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
      destroy: function destroy(v) {
        return setTimeout(function () {
          return v.remove();
        }, 600);
      }
    });

    _this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage.Message"
    });

    if (styrun["default"]) {
      var messagelist = ["load", "success", "error", "warning"];
      messagelist.forEach(function (v) {
        return _this.stylemap[v] = styrun["default"];
      });
      delete styrun["default"];
    }

    _this.stylemap = Object.assign(_this.stylemap, styrun);
    return _this;
  }
  /** 加载中的消息
   *
   * 追加 primary 类，并运行 load 显示处理
   *
   * @param {string} message 消息内容
   *
   * @return this
   */


  _createClass(Message, [{
    key: "message_load",
    value: function message_load(message) {
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
     * @return this
     */

  }, {
    key: "message_success",
    value: function message_success(message) {
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
     * @return this
     */

  }, {
    key: "message_error",
    value: function message_error(message) {
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
     * @return this
     */

  }, {
    key: "message_warnning",
    value: function message_warnning(message) {
      this.__toclass("warning");

      this.stylemap.warning(message, this);
      return this;
    }
    /** 销毁当前消息
     *
     * 追加 destroy 类，并运行 destroy 显示处理
     */

  }, {
    key: "message_destroy",
    value: function message_destroy() {
      this["class"](["destroy"]);
      this.stylemap.destroy(this);
    }
    /**
     * @param {"destroy"|"primary"|"secondary"|"success"|"alert"|"warning"} classna
     */

  }, {
    key: "__toclass",
    value: function __toclass(classna) {
      var a = {
        "primary": false,
        "secondary": false,
        "success": false,
        "alert": false,
        "warning": false
      };
      a[classna] = true;
      this["class"]({
        "toggle": a
      });
    }
  }]);

  return Message;
}(vhannels.ViewGroup);
/** @type vhannels.floatContlos.Message */


var _nullfun = {
  writable: true,
  value: function value(message, v) {
    return v.querySelector("p").getDom().innerText = message;
  }
};
vhannels.setName(["floatContlos"]).Message = Message;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
var FloatMessage = /*#__PURE__*/function (_vhannels$ViewGroup) {
  _inherits(FloatMessage, _vhannels$ViewGroup);

  var _super = _createSuper(FloatMessage);

  /**
   * @param {HTMLElement|vhannels.ViewGroup} dom 容器添加到该节点内
   */
  function FloatMessage() {
    var _this;

    var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

    _classCallCheck(this, FloatMessage);

    _this = _super.call(this, document.createElement("messagegroup")); // 插入消息容器

    dom.append(_this.getDom()); // 赋予消息组样式

    _this.attrs({
      vhannels: "vhannels.floatContlos.FloatMessage"
    });

    return _this;
  }
  /** 展示消息对象
   *
   * @param {vhannels.floatContlos.Message} message 要展示的消息
   * @param {number} time 消息展示的时长，不传入则为无限
   *
   * @return vhannels.floatContlos.Message 消息对象
   */


  _createClass(FloatMessage, [{
    key: "showMessage",
    value: function showMessage(message, time) {
      this.append(message);
      setTimeout(function () {
        return message["class"]({
          toggle: {
            "show": true,
            "destroy": false
          }
        });
      }, 10);
      time !== undefined && setTimeout(function () {
        return message.message_destroy();
      }, time + 9);
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
     * @return vhannels.floatContlos.Message 消息对象
     */

  }, {
    key: "createMessage",
    value: function createMessage() {
      var styrun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var bestyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
        return v.append(new vhannels.View(document.createElement("p")));
      };
      var v = new vhannels.floatContlos.Message(styrun);
      bestyle(v);
      return v;
    }
  }]);

  return FloatMessage;
}(vhannels.ViewGroup);

vhannels.setName(["floatContlos"]).FloatMessage = FloatMessage;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

/***/ })
/******/ ]);
