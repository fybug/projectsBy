!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}({27:function(e,t,n){n(28),n(29),n(30),n(31);var r=function(e){return function(t,n){o.add(n),n.setHtml('\n                <div style="display: flex;flex-direction: row">\n                    <p style="flex: 1"><i class="fa '.concat(e,'" style="margin-right: .5rem"></i>').concat(t,'</p>\n                    <p style="flex: 0;margin-left: 0;margin-right: .5rem"><a class="fa fa-close"></a></p>\n                </div>')),n.querySelector("a.fa-close").getDom().addEventListener("click",(function(){return n.message_destroy()}))}},o=new Set,a=new vhannels.floatContlos.FloatMessage(document.getElementById("floatmessageshow"));document.querySelectorAll('button[name="floatmessageshow"]').forEach((function(e){e.addEventListener("click",(function(e){var t=new vhannels.ViewGroup(e.currentTarget),n=a.createMessage({load:r("fa-circle-o-notch fa-spin"),success:r("fa-check"),warning:r("fa-exclamation-triangle"),error:r("fa-close"),destroy:function(e){o.delete(e),setTimeout((function(){return e.remove()}),350)}},(function(){}));n["message_"+t.value()](t.text()),a.showMessage(n)}))})),document.querySelector('button[name="floatmessagehide"]').addEventListener("click",(function(){o.forEach((function(e){return e.querySelector("a.fa-close").getDom().click()}))}));var i=new vhannels.floatContlos.FloatDialog(document.getElementById("floatdialogshow"));i.showListern((function(){document.querySelector('[name="floatdialoggrouplistern"]').value="对话框容器正在展示"})),i.destroyListern((function(){new vhannels.View(document.querySelector('[name="callfloatdialog"]')).attrs({disabled:void 0}).setHtml("唤起对话框"),document.querySelector('[name="floatdialoggrouplistern"]').value="对话框容器曾经或已经销毁"}));var l=new vhannels.floatContlos.Dialog;l.showListern((function(){document.querySelector('[name="floatdialoglistern"]').value="对话框正在展示"})),l.destroyListern((function(){document.querySelector('[name="floatdialoglistern"]').value="对话框被销毁"})),l.show_Html((function(){var e=new vhannels.ViewGroup(document.createElement("div"));return e.style({"margin-top":"1rem",display:"flex","flex-direction":"column"}),e.setHtml('<h2>示例对话框</h2>\n                <a class="button">点击我关闭</a>'),e.querySelector("a").getDom().addEventListener("click",(function(){return i.destroy()})),[e]})),document.querySelector('[name="callfloatdialog"]').addEventListener("click",(function(e){i.show(l,!0),new vhannels.View(e.currentTarget).attrs({disabled:""}).setHtml("单击灰色容器部分也可关闭")}))},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===h(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){vhannels.setName(["floatContlos"]),n(1),n(2),n(3)},function(e,t,n){},function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n){return function(e,t){if(e!==t)throw new TypeError("Private static access of wrong provenance")}(e,t),function(e,t){if(void 0===e)throw new TypeError("attempted to "+t+" private static field before its declaration")}(n,"get"),function(e,t){if(t.get)return t.get.call(e);return t.value}(e,n)}var a=function(e){l(a,vhannels.ViewGroup);var t=u(a);function a(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o(this,a),n(f(e=t.call(this,document.createElement("message"))),"stylemap",{load:r(a,a,s),success:r(a,a,s),error:r(a,a,s),warning:r(a,a,s),destroy:function(e){return setTimeout((function(){return e.remove()}),350)}}),e.attrs({vhannels:"vhannels.floatContlos.FloatMessage.Message"}),i.default){var l=["load","success","error","warning"];l.forEach((function(t){return e.stylemap[t]=i.default})),delete i.default}return e.stylemap=Object.assign(e.stylemap,i),e}return i(a,[{key:"message_load",value:function(e){return this.__toclass("primary"),this.stylemap.load(e,this),this}},{key:"message_success",value:function(e){return this.__toclass("success"),this.stylemap.success(e,this),this}},{key:"message_error",value:function(e){return this.__toclass("alert"),this.stylemap.error(e,this),this}},{key:"message_warnning",value:function(e){return this.__toclass("warning"),this.stylemap.warning(e,this),this}},{key:"message_destroy",value:function(){this.class(["destroy"]),this.stylemap.destroy(this)}},{key:"__toclass",value:function(e){var t={primary:!1,secondary:!1,success:!1,alert:!1,warning:!1};t[e]=!0,this.class({toggle:t})}}]),a}(),s={writable:!0,value:function(e,t){return t.querySelector("p").getDom().innerText=e}};vhannels.floatContlos.Message=a},function(e,t){var n=function(e){l(n,vhannels.ViewGroup);var t=u(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vhannels.View.Body;return o(this,n),e=t.call(this,document.createElement("messagegroup")),r.append(e.getDom()),e.attrs({vhannels:"vhannels.floatContlos.FloatMessage"}),e}return i(n,[{key:"showMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return this.append(e),setTimeout((function(){return e.class({toggle:{show:!0,destroy:!1}})}),10),void 0!==t&&setTimeout((function(){return e.message_destroy()}),t+9),e}},{key:"createMessage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.append(document.createElement("p"))},n=new vhannels.floatContlos.Message(e);return t(n),n}}]),n}();vhannels.floatContlos.FloatMessage=n},function(e,t,n){vhannels.setName(["floatContlos"]),n(5),n(6),n(7)},function(e,t,n){},function(e,t){function r(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function a(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,c(e,t,"get"))}function s(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,c(e,t,"set"),n),n}function c(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var d=new WeakMap,h=new WeakMap,v=new WeakMap,y=new WeakMap,p=function(e){l(c,vhannels.ViewGroup);var t=u(c);function c(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(this,c),r(f(e=t.call(this,document.createElement("dialog"))),d,{writable:!0,value:void 0}),r(f(e),h,{writable:!0,value:function(e){}}),r(f(e),v,{writable:!0,value:function(e){}}),r(f(e),y,{writable:!0,value:function(e){return""}}),e.attrs({vhannels:"vhannels.floatContlos.FloatDialog.Dialog"}),e.attrs(n),e.getDom().addEventListener("click",(function(e){return e.stopPropagation()})),e}return i(c,[{key:"show_Html",value:function(e){return s(this,y,e),this}},{key:"showListern",value:function(e){return s(this,h,e),this}},{key:"destroyListern",value:function(e){return s(this,v,e),this}},{key:"__binFloatDialog",value:function(e){return s(this,d,e),this}},{key:"__show",value:function(){var e=this,t=a(this,y).call(this,this);return"string"==typeof t?this.setHtml(t):this.append.apply(this,n(t)),a(this,h).call(this,this),setTimeout((function(){return e.class({toggle:{show:!0}})}),1),this}},{key:"__destroy",value:function(){var e=this;this.class({toggle:{show:!1}}),setTimeout((function(){a(e,v).call(e,e),s(e,d,void 0),e.setHtml(""),e.remove()}),300)}}]),c}();vhannels.floatContlos.Dialog=p},function(e,t){function n(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function r(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,s(e,t,"set"),n),n}function a(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,s(e,t,"get"))}function s(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var c=new WeakMap,d=new WeakMap,h=new WeakMap,v=new WeakMap,y=function(e){l(s,vhannels.ViewGroup);var t=u(s);function s(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vhannels.View.Body;return o(this,s),n(f(e=t.call(this,document.createElement("floatdialog"))),c,{writable:!0,value:function(e){}}),n(f(e),d,{writable:!0,value:function(e){}}),n(f(e),h,{writable:!0,value:void 0}),n(f(e),v,{writable:!0,value:!1}),s.__toViewGroup(r).append(f(e)),e.attrs({vhannels:"vhannels.floatContlos.FloatDialog"}),e.getDom().addEventListener("click",(function(t){a(f(e),v)&&e.destroy()})),e}return i(s,[{key:"showListern",value:function(e){return r(this,c,e),this}},{key:"destroyListern",value:function(e){return r(this,d,e),this}},{key:"show",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===a(this,h)&&(r(this,v,t),this.class({toggle:{show:!0,canend:t}}),this.append(e),r(this,h,e),a(this,c).call(this,e),e.__binFloatDialog(this),e.__show(),!0)}},{key:"destroy",value:function(){var e=this;a(this,h).__destroy(),setTimeout((function(){e.class({toggle:{show:!1}}),a(e,d).call(e,a(e,h)),r(e,h,void 0)}),300)}}]),s}();vhannels.floatContlos.FloatDialog=y},,,,function(e,t,n){n(0),n(4)}])}});