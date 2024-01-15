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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
var Aout_blog = new window.Aout_blog('main');

/** 数据错误处理回调生成
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 *
 * @return {function}
 */
window.error = function (Aout_blog) {
  return function () {
    var dom = document.createElement("div");
    dom.innerHTML = "\n            <section class=\"grid-y shadow alert callout\">\n                <div class=\"cell text-center\">\n                    <h3>\u6CA1\u67E5\u5230\u6570\u636E</h3>\n                </div>\n                <div class=\"cell titleimg grid-x align-center\">\n                    <img class=\"cell\" src=\"data:image/jpeg;base64,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\" alt=\"\"/>\n                </div>\n            </section>";
    Aout_blog.data('root').before(dom.children[0]);
  };
};

// 分页相关
__webpack_require__(20);
// 内容获取
__webpack_require__(21);
(function () {
  Aout_blog.conts.paging(2, plushpagedata(Aout_blog), plushpageedge(Aout_blog)).conts(plushcont(Aout_blog), void 0, error(Aout_blog)).tags(function (tag) {
    var root = Aout_blog.data("tags");
    var html = "<div class=\"cell shrink\">\n                    <a href=\"?tag=".concat(tag, "\">").concat(tag, "</a>\n                </div>");
    root.forEach(function (v) {
      return v.innerHTML += html;
    });
  }, undefined, function () {
    var root = Aout_blog.data("tags");
    var i = 0;
    var _iterator = _createForOfIteratorHelper(root),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        if (i >= 5) return;
        ++i;
        v.innerHTML += "<div class=\"cell shrink\">\n                    <p>null \u83B7\u53D6\u5931\u8D25</p>\n                </div>";
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
})();

// 标签页面
__webpack_require__(22);
(function () {
  Aout_blog.tags.tags(showtag(Aout_blog), void 0, error(Aout_blog));
  Aout_blog.tags.tagconts(plushcont(Aout_blog), void 0, error(Aout_blog));
})();
window.addEventListener("load", function () {
  // 临时节点
  Aout_blog.data('dom', document.createElement("div"));
  // 数据根对象
  Aout_blog.data('root', document.querySelector("#contlist > div nav"));
  Aout_blog.data("tags", document.querySelectorAll(".tags"));

  // tag 参数数据
  var tag = vhannels.tool.getQueryString("tag");
  if (tag !== undefined) {
    document.querySelectorAll(".tags").forEach(function (v) {
      return v.remove();
    });
    if (tag !== '') Aout_blog.tags.tagpaging(2, plushpagedata(Aout_blog, "tag=".concat(tag, "&")), plushpageedge(Aout_blog, "tag=".concat(tag, "&")));
    Aout_blog.tags.showtag(tag);
  } else Aout_blog.conts.run();
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  return __webpack_require__(__webpack_require__.s = 12);
  /******/
}
/************************************************************************/
/******/)({
  /***/12: ( /***/function _(module, exports) {
    vhannels.setName(['tool']);
    /** 获取地址栏参数
     *
     * @param {string} key 获取的参数名称
     * @param {string} defaval 默认值
     *
     * @return {string} 获取的值
     */

    vhannels.tool.getQueryString = function (key) {
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
     * @param {function(number,boolean,number,number)} fun 分页生成，传入：当前分页位置，是否是当前页码，最大分页，分页数量
     */

    vhannels.tool.Paging = function (nowpage, maxpage, pagnum, edge, fun) {
      // 向前快速索引
      if (nowpage > pagnum && maxpage > pagnum * 2 + 1) {
        edge(nowpage, false, nowpage > pagnum + 1, maxpage, pagnum);
      }
      for (var i =
      // 计算需要向前偏移的页数，以尾页为基数计算需要向前溢出的页数
      Math.max(0, nowpage - pagnum - Math.max(0, nowpage - maxpage + pagnum + 1)); i <= nowpage; ++i) {
        fun(i, nowpage === i, maxpage, pagnum);
      }
      for (var _i = nowpage + 1, len =
        // 计算需要向后偏移的页数，以当前页数为基数计算向后溢出的页数
        Math.min(_i + pagnum + Math.max(0, pagnum - nowpage), maxpage); _i < len; ++_i) {
        fun(_i, nowpage === _i, maxpage, pagnum);
      } // 向后快速索引

      if (nowpage < maxpage - pagnum - 1 && maxpage > pagnum * 2 + 1) {
        edge(nowpage, true, nowpage < maxpage - pagnum - 2, maxpage, pagnum);
      }
    };

    /***/
  })

  /******/
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var _class;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** Aout.blog 静态数据快速处理工具
 *
 * 用于在网页中获取已经生成好的博客静态数据
 *
 * 并使用预设的数据处理方法去处理它
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog
 */
var Aout_blog = (_class = /*#__PURE__*/function () {
  /**
   * @param {string} page 页面名称
   * @param {string} pageque 用于标识页面的地址栏参数名称
   * @param {string} publicpath url 地址名称
   */
  function Aout_blog(page) {
    var pageque = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "p";
    var publicpath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : './static/blogs/';
    _classCallCheck(this, Aout_blog);
    /** 内容数据处理对象
     *
     * @type {Aout_blog.Conts}
     */
    _defineProperty(this, "conts", void 0);
    /** 标签数据处理对象
     *
     * @type {Aout_blog.Tags}
     */
    _defineProperty(this, "tags", void 0);
    /** 跨文件数据映射 */
    _defineProperty(this, "datamap", {});
    var path = publicpath + page + '/';
    var nowpage = vhannels.tool.getQueryString(pageque, '0');
    this.conts = new Aout_blog.Conts(nowpage, path);
    this.tags = new Aout_blog.Tags(nowpage, path);
  }

  /** 添加附加数据
   *
   * @param {string} name 数据名
   * @param {any} val 数据值
   *
   * @return {this|any} 数据值为空时返回数据，有数据时返回 this
   */
  _createClass(Aout_blog, [{
    key: "data",
    value: function data(name) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      if (val === undefined) return this.datamap[name];
      this.datamap[name] = val;
      return this;
    }

    /** 填充页码索引
     *
     * @param {number} index 当前页面页码
     * @param {number} maxnum 最大页码
     * @param {number} pagnum 分页数量
     * @param {{}} runof 回调存储对象
     *
     * @return {boolean}
     */
  }], [{
    key: "__plushpagelist",
    value: function __plushpagelist(index, maxnum, pagnum, runof) {
      // 向前快速索引
      if (runof.calledge(index, false, maxnum, pagnum)) return true;
      for (var i =
      // 计算需要向前偏移的页数，以尾页为基数计算需要向前溢出的页数
      Math.max(0, index - pagnum - Math.max(0, index - maxnum + pagnum + 1)); i <= index; ++i) {
        if (runof.fun(i, index === i, maxnum, pagnum)) return true;
      }
      for (var _i = index + 1, len =
        // 计算需要向后偏移的页数，以当前页数为基数计算向后溢出的页数
        Math.min(_i + pagnum + Math.max(0, pagnum - index), maxnum); _i < len; ++_i) {
        if (runof.fun(_i, index === _i, maxnum, pagnum)) return true;
      }

      // 向后快速索引
      return runof.calledge(index, true, maxnum, pagnum);
    }

    /** 填充内容区的数据
     *
     * @param {{}} runof 回调对象
     * @param {Promise<Response>} fatch fetch 对象
     *
     * @return {boolean}
     */
  }, {
    key: "__plushconts",
    value: function __plushconts(runof, fatch) {
      var re = undefined;
      fatch.then(function (re) {
        return re.json();
      })["catch"](runof.error).then(function (json) {
        // 前边缘处理
        if (runof.calledge(json, false)) return true;

        // 内容生成
        for (var i = 0, len = json.length; i < len; ++i) if (runof.fun(json[i], i, json)) return true;

        // 后边缘处理
        return runof.calledge(json, true);
      }).then(function (r) {
        return re = r;
      });
      return re;
    }
  }]);
  return Aout_blog;
}(), _defineProperty(_class, "emptyfun", function () {}), _class);

/** 标签数据处理对象
 *
 * 无标签时打印所有标签，有标签时打印对应的标签页面内容
 *
 * 无标签时 仅 tags 流程
 * 有标签时 tagpagenum -> tagpaging -> tagconts
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog.Tags
 */
Aout_blog.Tags = /*#__PURE__*/function () {
  /**
   * @param {string} nowpage 当前页码
   * @param {string} publicpath 当前 url 地址
   */
  function Tags(nowpage, publicpath) {
    _classCallCheck(this, Tags);
    /** 根目录
     *
     * @param {string}
     */
    _defineProperty(this, "publicpath", void 0);
    /** 当前页面页码
     *
     * @type {number}
     */
    _defineProperty(this, "nowpage", void 0);
    /** 运行数据映射 */
    _defineProperty(this, "__runof", void 0);
    this.publicpath = publicpath;
    this.nowpage = Number(nowpage);
    this.__runof = {
      alltag: {
        publicpath: this.publicpath,
        filename: 'tags.js',
        error: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun,
        calledge: Aout_blog.emptyfun
      },
      tagpagenum: {
        publicpath: this.publicpath,
        error: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun
      },
      tagpaging: {
        pagnum: 2,
        fun: Aout_blog.emptyfun,
        calledge: Aout_blog.emptyfun
      },
      tagconts: {
        publicpath: this.publicpath,
        error: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun,
        calledge: Aout_blog.emptyfun
      }
    };
  }

  /** 注册标签列表数据处理回调
   *
   * 作用于无标签名称打印所有标签数据的时候
   *
   * @param {function(string,number,string[]):boolean|undefined} fun 标签数据处理方法，传入：当前标签，标签的位置，标签数据集
   * @param {function(string[],boolean):boolean|undefined} calledge 数据边缘处理方法，传入：当前标签数据集，[true 在后边缘 false 在前边缘]
   * @param {function(any)} error 错误处理回调
   * @param {string} publicpath 重新定位 url 地址
   * @param {string} filname 重新指定文件名称
   *
   * @return this
   */
  _createClass(Tags, [{
    key: "tags",
    value: function tags(fun) {
      var calledge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var publicpath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.publicpath;
      var filname = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'tags.js';
      this.__runof.alltag.fun = fun;
      if (calledge) this.__runof.alltag.calledge = calledge;
      if (error) this.__runof.alltag.error = error;
      this.__runof.alltag.publicpath = publicpath;
      this.__runof.alltag.filename = filname;
      return this;
    }

    /** 注册获取数据总量时的处理
     *
     * @param {function(number,number):boolean|undefined} fun 页数数据处理回调，传入：最大页数，当前页码
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新定位 url 地址
     *
     * @return this
     */
  }, {
    key: "tagpagenum",
    value: function tagpagenum(fun) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var publicpath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.publicpath;
      this.__runof.tagpagenum.fun = fun;
      if (error) this.__runof.tagpagenum.error = error;
      this.__runof.tagpagenum.publicpath = publicpath;
      return this;
    }

    /** 注册分页处理
     *
     * @param {number} pagnum 每边的页码数量
     * @param {function(number,boolean,number,number):boolean|undefined} fun 分页处理回调，传入：当前页码，当前生成的页码是否与页面页码相同，最大数量，分页数量
     * @param {function(number,boolean,number,number):boolean|undefined} calledge 分页边缘处理回调，传入：当前页码，[true 是后面的边缘 false 是前面的边缘]，最大数量，分页数量
     *
     * @return this
     */
  }, {
    key: "tagpaging",
    value: function tagpaging(pagnum, fun) {
      var calledge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      this.__runof.tagpaging.pagnum = pagnum;
      this.__runof.tagpaging.fun = fun;
      if (calledge) this.__runof.tagpaging.calledge = calledge;
      return this;
    }

    /** 注册标签页面内容数据
     *
     * 带有对应标签的文章数据
     *
     * @param {function({},number,{}[]):boolean|undefined} fun 数据处理回调，传入：当前内容的数据对象，当前内容的位置，当前页面所有内容的数据对象组
     * @param {function({}[],boolean):boolean|undefined} calledge 数据边缘处理，传入：当前页面所有内容的数据对象组，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新定位 url 地址
     *
     * @return this
     */
  }, {
    key: "tagconts",
    value: function tagconts(fun) {
      var calledge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var publicpath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.publicpath;
      this.__runof.tagconts.fun = fun;
      if (calledge) this.__runof.tagconts.calledge = calledge;
      if (error) this.__runof.tagconts.error = error;
      this.__runof.tagconts.publicpath = publicpath;
      return this;
    }

    /** 启动标签数据处理
     *
     * @param {string} tagname 标签的名称，可为空
     * @param {function()} fun 结束后的回调
     */
  }, {
    key: "showtag",
    value: function showtag() {
      var _this = this;
      var tagname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var fun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Aout_blog.emptyfun;
      var fa;
      if (tagname === '') {
        fa = fetch(this.__runof.alltag.publicpath + this.__runof.alltag.filename).then(function (response) {
          return response.json();
        })["catch"](this.__runof.alltag.error).then(function (json) {
          if (_this.__runof.alltag.calledge(json, false)) return;
          for (var i = 0, len = json.length; i < len; ++i) if (_this.__runof.alltag.fun(json[i], i, json)) return;
          _this.__runof.alltag.calledge(json, true);
        });
      } else {
        fa = fetch(this.__runof.tagconts.publicpath + "tag_".concat(tagname, ".js")).then(function (response) {
          return response.json();
        })["catch"](this.__runof.tagpagenum.error).then(function (json) {
          // 最大页数
          var maxnum = json[0];
          // 当前页码
          var index = _this.nowpage;
          if (_this.__runof.tagpagenum.fun(maxnum, index)) return;

          // 生成分页
          if (Aout_blog.__plushpagelist(index, maxnum, _this.__runof.tagpaging.pagnum, _this.__runof.tagpaging)) return;
          // 获取内容数据
          Aout_blog.__plushconts(_this.__runof.tagconts, fetch(_this.__runof.tagconts.publicpath + "tag_".concat(index, "_").concat(tagname, ".js")));
        });
      }
      fa.then(function () {
        return fun();
      });
    }
  }]);
  return Tags;
}();

/** 内容数据处理对象
 *
 * 处理顺序 pagenum -> paging -> conts -> tags
 *
 * 在 pagenum 获取失败的时候后面的都将不会运行
 *
 * 获取列表项内容使用 {@link Aout_blog.Conts.run}，获取单独的 id 内容使用 {@link Aout_blog.Conts.runofCont}
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog.Conts
 */
Aout_blog.Conts = /*#__PURE__*/function () {
  /**
   * @param {string} nowpage 当前页码
   * @param {string} publicpath 当前 url 地址
   */
  function Conts(nowpage, publicpath) {
    _classCallCheck(this, Conts);
    /** 根目录
     *
     * @param {string}
     */
    _defineProperty(this, "publicpath", void 0);
    /** 当前页面页码
     *
     * @type {number}
     */
    _defineProperty(this, "nowpage", void 0);
    /** 运行数据映射 */
    _defineProperty(this, "__runof", void 0);
    this.publicpath = publicpath;
    this.nowpage = Number(nowpage);

    // 初始化数据映射
    this.__runof = {
      pagenum: {
        publicpath: this.publicpath,
        filename: 'indexlist.js',
        error: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun
      },
      paging: {
        calledge: void 0,
        fun: Aout_blog.emptyfun,
        pagnum: 5
      },
      conts: {
        publicpath: this.publicpath,
        calledge: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun,
        error: Aout_blog.emptyfun
      },
      tags: {
        publicpath: this.publicpath,
        filename: 'tags.js',
        error: Aout_blog.emptyfun,
        calledge: Aout_blog.emptyfun,
        fun: Aout_blog.emptyfun
      }
    };
  }

  /** 注册获取数据总量时的处理
   *
   * @param {function(number,number):boolean|undefined} fun 处理页面数量相关时的函数，传入最大的页数，当前页数
   * @param {function(any)} error 发生错误时的处理回调
   * @param {string} publicpath 重新指定 url 地址
   * @param {string} filname 重新指定数据文件的名称
   *
   * @return this
   */
  _createClass(Conts, [{
    key: "pagenum",
    value: function pagenum(fun) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var publicpath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.publicpath;
      var filname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'indexlist.js';
      this.__runof.pagenum.fun = fun;
      if (error) this.__runof.pagenum.error = error;
      this.__runof.pagenum.publicpath = publicpath;
      this.__runof.pagenum.filename = filname;
      return this;
    }

    /** 注册分页数据处理方法
     *
     * @param {number} pagnum 前后每一边留出多少分页
     * @param {function(number,boolean,number,number):boolean|undefined} fun 页码生成方法：当前生成的页码，当前生成的页码是否与页面页码相同，最大数量，分页数量
     * @param {function(number,boolean,number,number):boolean|undefined} calledge 生成页码边缘的内容传入：当前页面页码，[true 是后面的边缘 false 是前面的边缘]，最大数量，分页数量
     *
     * @return this
     */
  }, {
    key: "paging",
    value: function paging(pagnum, fun) {
      var calledge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      this.__runof.paging.pagnum = pagnum;
      this.__runof.paging.fun = fun;
      if (calledge) this.__runof.paging.calledge = calledge;
      return this;
    }

    /** 注册内容列表数据处理方法
     *
     * @param {function({},number,{}[]):boolean|undefined} fun 内容数据填充方法，传入：当前内容的 json 数据对象，当前内容的位置，当前页面所有内容的 json 数据对象数组
     * @param {function({}[],boolean):boolean|undefined} calledge 内容边缘数据处理，传入：当前内容的 json 数据对象数组，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新指定的 url 地址
     *
     * @return this
     */
  }, {
    key: "conts",
    value: function conts(fun) {
      var calledge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var publicpath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.publicpath;
      this.__runof.conts.fun = fun;
      if (calledge) this.__runof.conts.calledge = calledge;
      if (error) this.__runof.conts.error = error;
      this.__runof.conts.publicpath = publicpath;
      return this;
    }

    /** 注册标签数据处理方法
     *
     * @param {function(string,number,string[]):boolean|undefined} fun 标签数据填充方法，传入：当前标签，当前标签的位置，所有标签的数据集
     * @param {function(string[],boolean):boolean|undefined} calledge 边缘数据处理，传入：全部标签的数据集，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新指定的 url 地址
     * @param {string} filname 重新指定的文件名称
     *
     * @return this
     */
  }, {
    key: "tags",
    value: function tags(fun) {
      var calledge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var publicpath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.publicpath;
      var filname = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'tags.js';
      this.__runof.tags.fun = fun;
      if (calledge) this.__runof.tags.calledge = calledge;
      if (error) this.__runof.tags.error = error;
      this.__runof.tags.publicpath = publicpath;
      this.__runof.tags.filname = filname;
      return this;
    }

    /** 启动列表内容处理
     *
     * 此前注册的处理接口如果返回 true 则会在当前流程中断
     *
     * @param {function()} fun 结束后的回调
     */
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;
      var fun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Aout_blog.emptyfun;
      fetch(this.__runof.pagenum.publicpath + this.__runof.pagenum.filename).then(function (response) {
        return response.json();
      })["catch"](this.__runof.pagenum.error).then(function (json) {
        // 最大页数
        var maxnum = json[0];
        // 当前页码
        var index = _this2.nowpage;

        // 总页码处理方法
        if (_this2.__runof.pagenum.fun(maxnum, index)) return;

        // 生成分页
        if (Aout_blog.__plushpagelist(index, maxnum, _this2.__runof.paging.pagnum, _this2.__runof.paging)) return;
        // 获取内容数据
        if (Aout_blog.__plushconts(_this2.__runof.conts, fetch(_this2.__runof.conts.publicpath + index + '.js'))) return;
        // 获取标签数据
        _this2.__plushtags();
      }).then(function () {
        return fun();
      });
    }

    /** 启动内容处理
     *
     * 此前注册的处理接口如果返回 true 则会在当前流程中断
     *
     * @param {string|number} id 内容的 id 的 get 参数名或者直接输入 id
     * @param {{
     *     error: function(any),
     *     calledge: function({},boolean):boolean|undefined,
     *     fun: function({},number):boolean|undefined
     * }} runof 数据处理接口对象，内部函数类型与 {@link conts} 的参数类似，但是只有一个数据对象了，并且数据的位置变成了数据的 id
     * @param {function()} fun 结束后的回调
     */
  }, {
    key: "runofCont",
    value: function runofCont(id) {
      var _this3 = this;
      var runof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var fun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Aout_blog.emptyfun;
      if (typeof id === "string") id = vhannels.tool.getQueryString(id, -1);
      runof = Object.assign({
        error: Aout_blog.emptyfun(),
        calledge: Aout_blog.emptyfun(),
        fun: Aout_blog.emptyfun()
      }, runof);

      // 当前页码
      var index = this.nowpage;
      fetch(this.__runof.conts.publicpath + index + '.js').then(function (re) {
        return re.json();
      })["catch"](runof.error).then(function (json) {
        // 提取当前数据属性
        for (var i = 0, len = json.length; i < len; ++i) if (json[i]["index"] === id) return json[i];
        throw new Error("无法获取属性，页码 " + index + "，id " + id + " !");
      }).then(function (json) {
        // 获取数据
        fetch(_this3.__runof.conts.publicpath + id + '_data.html').then(function (da) {
          return json.content = da;
        })["catch"](runof.error).then(function () {
          // 前边缘处理
          if (runof.calledge(json, false)) return true;
          // 数据处理
          if (runof.fun(json, id)) return true;
          // 后边缘处理
          return runof.calledge(json, true);
        }).then(function () {
          return fun();
        });
      });
    }

    /** 填充标签区的数据 */
  }, {
    key: "__plushtags",
    value: function __plushtags() {
      var _this4 = this;
      fetch(this.__runof.tags.publicpath + this.__runof.tags.filename).then(function (response) {
        return response.json();
      })["catch"](this.__runof.tags.error).then(function (json) {
        // 前边缘处理
        if (_this4.__runof.tags.calledge(json, false)) return;
        // 标签内容生成
        for (var i = 0, len = json.length; i < len; ++i) if (_this4.__runof.tags.fun(json[i], i, json)) return;
        // 后边缘处理
        _this4.__runof.tags.calledge(json, true);
      });
    }
  }]);
  return Conts;
}();

/**
 * @class Aout_blog
 */
window.Aout_blog = Aout_blog;
module.exports = Aout_blog;

/***/ }),
/* 20 */
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

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * @param {string[]} data
 * @param {function(string,string,string)} fun
 */
function passlabel(data, fun) {
  data.forEach(function (v) {
    v = v.trim();
    v = v.split(':');
    if (v.length === 0) return;
    if (v.length === 1) fun("", v[0].trim(), "");
    if (v.length === 2) fun(v[0].trim(), v[1].trim(), '');
    if (v.length === 3) fun(v[0].trim(), v[1].trim(), v[2].trim());
  });
}

/** 填充数据
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 *
 * @return {function}
 */
window.plushcont = function (Aout_blog) {
  return function (data, index) {
    var html;
    var dom = Aout_blog.data('dom');
    var step = 200;

    // 移除动画
    document.querySelectorAll("#contlist > div > loadfun").forEach(function (v) {
      return v.remove();
    });
    setTimeout(function () {
      html = "\n            <section class=\"grid-y shadow\">\n                <div class=\"cell\"><h3 class=\"h3 margin-bottom-0\">".concat(data.title, "</h3></div>");
      // 插入日期
      if (data.date) {
        html += "<div class=\"cell\">\n                    <p>\n                        <i class=\"fa fa-calendar\"></i>\n                        <small><b>".concat(data.date, "</b></small>\n                    </p>\n                </div>");
      }
      // 插入标签
      if (data.label) {
        html += '<div class="cell">';
        passlabel(data.label.split(","), function (clas, val, color) {
          html += "<label class=\"";
          if (clas !== '') html += "".concat(clas, " ");
          html += "label radius\"";
          if (color !== '') html += "style=\"background-color: ".concat(color, "\"");
          html += ">".concat(val, "</label> ");
        });
        html += '</div>';
      }
      // 插入图标
      if (data.icon) {
        html += "<div class=\"cell titleimg grid-x align-center\">\n                    <img class=\"cell\" src=\"".concat(data.icon, "\" alt=\"\"/>\n                </div>");
      }
      // 插入描述
      if (data.des) {
        html += "<div class=\"cell\">\n                    ".concat(data.des, "\n                </div>");
      }
      html += "</section>";
      dom.innerHTML = html;
      // 连接
      if (data.link) {
        var link = data.link;
        dom.children[0].addEventListener('click', function () {
          return window.open(link, '_blank');
        });
      }
      Aout_blog.data('root').before(dom.children[0]);
    }, step * index);
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** 标签打印处理回调
 *
 * @param {Aout_blog} Aout_blog Aout.blog 数据对象
 *
 * @return {function}
 */
window.showtag = function (Aout_blog) {
  return function (tag) {
    // 移除动画
    document.querySelectorAll("#contlist > div > loadfun").forEach(function (v) {
      return v.remove();
    });
    var dom = Aout_blog.data('dom');
    dom.innerHTML = "<section class=\"grid-y shadow\" onclick=\"window.open('?tag=".concat(tag, "','_blank')\">\n                <div class=\"cell\"><h3 class=\"h3 margin-bottom-0\"><i class=\"fa fa-tag\"></i> ").concat(tag, "</h3></div>\n            </section>");
    Aout_blog.data("root").before(dom.children[0]);
  };
};

/***/ })
/******/ ]);