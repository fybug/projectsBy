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

/***/ 10:
/***/ (function(module, exports) {

/** vhannels 视图容器对象
 *
 * 存放一个原始节点，并支持子对象操作
 *
 * @author fybug
 * @version 0.0.1
 * @extends vhannels.View
 * @class vhannels.ViewGroup
 */
class ViewGroup extends vhannels.View {
  /** @param {HTMLElement|vhannels.View} dom 当前节点 */
  constructor(dom = document.body) {
    super(dom);
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 获取子节点集合
   *
   * 与 {@link views} 的区别为直接返回原始数据
   *
   * @return {Element[]} 节点集合
   */


  doms() {
    let re = [];
    let node = this.getDom().firstElementChild;
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


  views() {
    let views = [];

    for (let v of this.doms()) views.push(new vhannels.ViewGroup(v));

    return views;
  }
  /** 查找子视图
   *
   * @param {string} select 查找规则
   * @return {vhannels.ViewGroup[]}
   */


  querySelectorAll(select) {
    let d = this.getDom(); // 查询的数据

    let nods = d.querySelectorAll(select);
    /* 转化 */

    let re = [];
    nods.forEach(v => re.push(new vhannels.ViewGroup(v)));
    return re;
  }
  /** 查找子视图
   *
   * @param {string} select 查找规则
   * @return {vhannels.ViewGroup}
   */


  querySelector(select) {
    let d = this.getDom(); // 查询的数据

    let node = d.querySelector(select);
    return new vhannels.ViewGroup(node);
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 在容器前面插入视图
   *
   * @param {vhannels.View|HTMLElement} view
   * @return {vhannels.ViewGroup} this
   */


  prepend(...view) {
    let d = this.getDom();

    for (let v of view) d.insertBefore(ViewGroup.__toDom(v), d.firstChild);

    return this;
  }
  /*-------------------------*/

  /** 在容器后面追加视图
   *
   * @param {vhannels.View|HTMLElement} view
   * @return {vhannels.ViewGroup} this
   */


  append(...view) {
    let d = this.getDom();

    for (let v of view) d.appendChild(ViewGroup.__toDom(v));

    return this;
  }
  /** 追加 html 内容
   *
   * @param {string} html 追加的 html 内容
   * @return {vhannels.ViewGroup} this
   */


  addHtml(html) {
    this.getDom().innerHTML += html;
    return this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 删除容器内指定的视图
   *
   * @param {vhannels.View|HTMLElement} view 要删除的视图
   * @return {vhannels.ViewGroup} this
   */


  delete(...view) {
    let d = this.getDom();

    for (let v of view) d.removeChild(ViewGroup.__toDom(v));

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


  replace(...viewto) {
    let d = this.getDom();

    for (let vt of viewto) d.replaceChild(ViewGroup.__toDom(vt.to), ViewGroup.__toDom(vt.of));

    return this;
  }
  /** 清空内容
   *
   * 可通过查询表达式删除指定的所有内容
   *
   * @param {string|undefined} query 查询表达式
   * @return {vhannels.ViewGroup} this
   */


  clean(query = undefined) {
    if (query === undefined) this.getDom().innerHTML = '';else this.querySelectorAll(query).forEach(v => v.remove());
    return this;
  }
  /*--------------------------------------------------------------------------------------------*/


  static creaViewGroup(dom) {
    if (typeof dom === 'string') return new ViewGroup(document.createElement(dom));else return new ViewGroup(dom);
  }
  /** 确保对象为 ViewGroup 对象
   *
   * @return vhannels.ViewGroup
   */


  static __toViewGroup(dom) {
    if (dom instanceof vhannels.ViewGroup) return dom;
    return this.creaViewGroup(dom);
  }

}

vhannels.ViewGroup = ViewGroup;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

window.vhannels || (window.vhannels = {});
/** 检查命名空间
 *
 * @param {[string]} names 命名空间
 */

vhannels.setName = names => {
  let last = window.vhannels;

  for (let name of names) {
    if (name === undefined) continue; // 命名空间未就绪

    if (last[name] === undefined) last[name] = {}; // 记录当前命名空间

    last = last[name];
  }

  return last;
};

__webpack_require__(9);

__webpack_require__(10); // 全局 Body 对象


window.addEventListener("load", () => vhannels.View.Body = new vhannels.ViewGroup(document.body));

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _dom = /*#__PURE__*/new WeakMap();

/** vhannels 视图对象
 *
 * 存放一个原始节点，并包含对应的操作封装
 *
 * @author fybug
 * @version 0.0.1
 * @class vhannels.View
 */
class View {
  /** 当前节点
   *
   *  @type HTMLElement
   */

  /** @param {HTMLElement|vhannels.View} dom 当前节点 */
  constructor(dom) {
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


  getDom() {
    return _classPrivateFieldGet(this, _dom);
  }
  /** 刷新 html 内容
   *
   * @param {string} html 新的 html 内容
   * @return {vhannels.View} this
   */


  setHtml(html) {
    this.getDom().innerHTML = html;
    return this;
  }
  /** 获取 html 内容
   *
   * @return {string}
   */


  html() {
    return this.getDom().innerHTML;
  }
  /** 获取 innerText 的内容
   *
   * @return {string}
   */


  text() {
    return this.getDom().innerText;
  }
  /** 设置 innerText 的内容
   *
   * @param {string} t 文本内容
   *
   * @return {vhannels.View} this
   */


  settext(t) {
    this.getDom().innerText = t;
    return this;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 属性修改
   *
   * @param {Object} data { 属性名：属性值 }，属性值为 undefined 则是消除属性
   * @return {vhannels.View} this
   */


  attrs(data) {
    let d = this.getDom();
    let v;

    for (let key in data) {
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


  getattrs(data) {
    let d = this.getDom();
    let ats = {};

    for (let v of data) ats[v] = d.getAttribute(v);

    return ats;
  }
  /** 获取 value 的内容
   *
   * @return {string} 获取的属性值
   */


  value() {
    return this.getDom().value;
  }
  /** 设置 value 的内容
   *
   * @param {string} v 要设置的值
   *
   * @return {vhannels.View} this
   */


  setvalue(v) {
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


  class(clas) {
    let d = this.getDom();
    let a = d.classList;
    let re = {}; // 追加

    if (Array.isArray(clas)) a.add(...clas);else {
      // 检查
      if (clas.check) for (let v of clas.check) re[v] = a.contains(v); // 移除

      clas.remove && a.remove(...clas.remove); // 切换

      if (clas.toggle) if (Array.isArray(clas.toggle)) {
        for (let cla of clas.toggle) re[cla] = a.toggle(cla);
      } else {
        for (let cla in clas.toggle) re[cla] = a.toggle(cla, clas.toggle[cla]);
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


  style(sty) {
    let d = this.getDom();
    let s = d.style;
    let re = {};

    for (let v in sty) if (v === "remove") // 移除
      for (let res of v) {
        s.removeProperty(res);
        re[res] && (re[res] = undefined);
      } else if (v === "get") for (let res of v) re[res] = {
      "val": s.getPropertyValue(res),
      "important": s.getPropertyPriority(res)
    };else {
      // 设置 important
      if (Array.isArray(sty[v])) s.setProperty(v, sty[v][0], sty[v][1]);else s.setProperty(v, sty[v]);
    }

    return re;
  }
  /*--------------------------------------------------------------------------------------------*/

  /** 移除此视图 */


  remove() {
    let d = this.getDom();
    d.parentNode.removeChild(d);
  }
  /** 确保为原始元素节点
   *
   * @param {HTMLElement|vhannels.View} view 要确保的对象
   * @return {HTMLElement} 元素节点
   */


  static __toDom(view) {
    if (view instanceof vhannels.View) return view.getDom();
    return view;
  }

  static creaView(dom) {
    if (typeof dom === 'string') return new View(document.createElement(dom));else return new View(dom);
  }

}

vhannels.View = View;

/***/ })

/******/ });
