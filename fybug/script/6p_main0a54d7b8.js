!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=19)}([,function(t,n){window.plushpagedata=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e,r){var o='<li class="cell shrink';o+=r?' current">'.concat(e+1,"</li>"):'"><a href="?'.concat(n,"p=").concat(e,'">').concat(e+1,"</a></li>"),t.data("root").children[0].innerHTML+=o}},window.plushpageedge=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e,r,o,i){var a="";r?e<o-i-1&&o>2*i+1&&(e<o-i-2&&(a+='<li class="ellipsis" aria-hidden="true"></li>'),a+='<li class="cell shrink"><a href="?'.concat(n,"p=").concat(o-1,'">').concat(o,"</a></li>"),t.data("root").children[0].innerHTML+=a):e>i&&o>2*i+1&&(a+='<li class="cell shrink"><a href="?'.concat(n,'p=0">1</a></li>'),e>i+1&&(a+='<li class="ellipsis" aria-hidden="true"></li>'),t.data("root").children[0].innerHTML+=a)}}},function(t,n){window.plushcont=function(t){return function(n,e){var r,o=t.data("dom");document.querySelectorAll("#contlist > div > loadfun").forEach((function(t){return t.remove()})),setTimeout((function(){if(r='\n            <section class="grid-y shadow">\n                <div class="cell"><h3 class="h3 margin-bottom-0">'.concat(n.title,"</h3></div>"),n.date&&(r+='<div class="cell">\n                    <p>\n                        <i class="fa fa-calendar"></i>\n                        <small><b>'.concat(n.date,"</b></small>\n                    </p>\n                </div>")),n.label&&(r+='<div class="cell">',function(t,n){t.forEach((function(t){0!==(t=(t=t.trim()).split(":")).length&&(1===t.length&&n("",t[0].trim(),""),2===t.length&&n(t[0].trim(),t[1].trim(),""),3===t.length&&n(t[0].trim(),t[1].trim(),t[2].trim()))}))}(n.label.split(","),(function(t,n,e){r+='<label class="',""!==t&&(r+="".concat(t," ")),r+='label radius"',""!==e&&(r+='style="background-color: '.concat(e,'"')),r+=">".concat(n,"</label> ")})),r+="</div>"),n.icon&&(r+='<div class="cell titleimg grid-x align-center">\n                    <img class="cell" src="'.concat(n.icon,'" alt=""/>\n                </div>')),n.des&&(r+='<div class="cell">\n                    '.concat(n.des,"\n                </div>")),r+="</section>",o.innerHTML=r,n.link){var e=n.link;o.children[0].addEventListener("click",(function(){return window.open(e,"_blank")}))}t.data("root").before(o.children[0])}),200*e)}}},function(t,n){window.showtag=function(t){return function(n){document.querySelectorAll("#contlist > div > loadfun").forEach((function(t){return t.remove()}));var e=t.data("dom");e.innerHTML='<section class="grid-y shadow" onclick="window.open(\'?tag='.concat(n,'\',\'_blank\')">\n                <div class="cell"><h3 class="h3 margin-bottom-0"><i class="fa fa-tag"></i> ').concat(n,"</h3></div>\n            </section>"),t.data("root").before(e.children[0])}}},,,,,,,,,,,,,,,,function(t,n,e){function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw a}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e(20),e(21),e(22);var i=new window.Aout_blog("main");window.error=function(t){return function(){var n=document.createElement("div");n.innerHTML='\n            <section class="grid-y shadow alert callout">\n                <div class="cell text-center">\n                    <h3>没查到数据</h3>\n                </div>\n                <div class="cell titleimg grid-x align-center">\n                    <img class="cell" src="data:image/jpeg;base64,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" alt=""/>\n                </div>\n            </section>',t.data("root").before(n.children[0])}},e(1),e(2),i.conts.paging(2,plushpagedata(i),plushpageedge(i)).conts(plushcont(i),void 0,error(i)).tags((function(t){var n=i.data("tags"),e='<div class="cell shrink">\n                    <a href="?tag='.concat(t,'">').concat(t,"</a>\n                </div>");n.forEach((function(t){return t.innerHTML+=e}))}),void 0,(function(){var t,n=0,e=r(i.data("tags"));try{for(e.s();!(t=e.n()).done;){var o=t.value;if(n>=5)return;++n,o.innerHTML+='<div class="cell shrink">\n                    <p>null 获取失败</p>\n                </div>'}}catch(t){e.e(t)}finally{e.f()}})),e(3),i.tags.tags(showtag(i),void 0,error(i)),i.tags.tagconts(plushcont(i),void 0,error(i)),window.addEventListener("load",(function(){i.data("dom",document.createElement("div")),i.data("root",document.querySelector("#contlist > div nav")),i.data("tags",document.querySelectorAll(".tags"));var t=vhannels.tool.getQueryString("tag");void 0!==t?(document.querySelectorAll(".tags").forEach((function(t){return t.remove()})),""!==t&&i.tags.tagpaging(2,plushpagedata(i,"tag=".concat(t,"&")),plushpageedge(i,"tag=".concat(t,"&"))),i.tags.showtag(t)):i.conts.run()}))},function(t,n,e){},function(t,n){function e(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw a}}}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===o(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=12)}({12:function(t,n){vhannels.setName(["tool"]),vhannels.tool.getQueryString=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=location.href,o=r.indexOf("?");if(r=r.substr(o+1),-1===o)return n;var i,a=e(r.split("&"));try{for(a.s();!(i=a.n()).done;)if((o=(r=i.value).indexOf("="))>0&&r.substring(0,o).trim()===t)return o===r.length-1?"":r.substr(o+1).trim()}catch(t){a.e(t)}finally{a.f()}return n},vhannels.tool.Paging=function(t,n,e,r,o){t>e&&n>2*e+1&&r(t,!1,t>e+1,n,e);for(var i=Math.max(0,t-e-Math.max(0,t-n+e+1));i<=t;++i)o(i,t===i,n,e);for(var a=t+1,u=Math.min(a+e+Math.max(0,e-t),n);a<u;++a)o(a,t===a,n,e);t<n-e-1&&n>2*e+1&&r(t,!0,t<n-e-2,n,e)}}})},function(t,n){var e,r;function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var l=(r=e=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"./static/blogs/";o(this,t),u(this,"conts",void 0),u(this,"tags",void 0),u(this,"datamap",{});var i=r+n+"/",a=vhannels.tool.getQueryString(e,"0");this.conts=new t.Conts(a,i),this.tags=new t.Tags(a,i)}return a(t,[{key:"data",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return void 0===n?this.datamap[t]:(this.datamap[t]=n,this)}}],[{key:"__plushpagelist",value:function(t,n,e,r){if(r.calledge(t,!1,n,e))return!0;for(var o=Math.max(0,t-e-Math.max(0,t-n+e+1));o<=t;++o)if(r.fun(o,t===o,n,e))return!0;for(var i=t+1,a=Math.min(i+e+Math.max(0,e-t),n);i<a;++i)if(r.fun(i,t===i,n,e))return!0;return r.calledge(t,!0,n,e)}},{key:"__plushconts",value:function(t,n){var e=void 0;return n.then((function(t){return t.json()})).catch(t.error).then((function(n){if(t.calledge(n,!1))return!0;for(var e=0,r=n.length;e<r;++e)if(t.fun(n[e],e,n))return!0;return t.calledge(n,!0)})).then((function(t){return e=t})),e}}]),t}(),u(e,"emptyfun",(function(){})),r);l.Tags=function(){function t(n,e){o(this,t),u(this,"publicpath",void 0),u(this,"nowpage",void 0),u(this,"__runof",void 0),this.publicpath=e,this.nowpage=Number(n),this.__runof={alltag:{publicpath:this.publicpath,filename:"tags.js",error:l.emptyfun,fun:l.emptyfun,calledge:l.emptyfun},tagpagenum:{publicpath:this.publicpath,error:l.emptyfun,fun:l.emptyfun},tagpaging:{pagnum:2,fun:l.emptyfun,calledge:l.emptyfun},tagconts:{publicpath:this.publicpath,error:l.emptyfun,fun:l.emptyfun,calledge:l.emptyfun}}}return a(t,[{key:"tags",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.publicpath,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"tags.js";return this.__runof.alltag.fun=t,n&&(this.__runof.alltag.calledge=n),e&&(this.__runof.alltag.error=e),this.__runof.alltag.publicpath=r,this.__runof.alltag.filename=o,this}},{key:"tagpagenum",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.publicpath;return this.__runof.tagpagenum.fun=t,n&&(this.__runof.tagpagenum.error=n),this.__runof.tagpagenum.publicpath=e,this}},{key:"tagpaging",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return this.__runof.tagpaging.pagnum=t,this.__runof.tagpaging.fun=n,e&&(this.__runof.tagpaging.calledge=e),this}},{key:"tagconts",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.publicpath;return this.__runof.tagconts.fun=t,n&&(this.__runof.tagconts.calledge=n),e&&(this.__runof.tagconts.error=e),this.__runof.tagconts.publicpath=r,this}},{key:"showtag",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.emptyfun;(""===n?fetch(this.__runof.alltag.publicpath+this.__runof.alltag.filename).then((function(t){return t.json()})).catch(this.__runof.alltag.error).then((function(n){if(!t.__runof.alltag.calledge(n,!1)){for(var e=0,r=n.length;e<r;++e)if(t.__runof.alltag.fun(n[e],e,n))return;t.__runof.alltag.calledge(n,!0)}})):fetch(this.__runof.tagconts.publicpath+"tag_".concat(n,".js")).then((function(t){return t.json()})).catch(this.__runof.tagpagenum.error).then((function(e){var r=e[0],o=t.nowpage;t.__runof.tagpagenum.fun(r,o)||l.__plushpagelist(o,r,t.__runof.tagpaging.pagnum,t.__runof.tagpaging)||l.__plushconts(t.__runof.tagconts,fetch(t.__runof.tagconts.publicpath+"tag_".concat(o,"_").concat(n,".js")))}))).then((function(){return e()}))}}]),t}(),l.Conts=function(){function t(n,e){o(this,t),u(this,"publicpath",void 0),u(this,"nowpage",void 0),u(this,"__runof",void 0),this.publicpath=e,this.nowpage=Number(n),this.__runof={pagenum:{publicpath:this.publicpath,filename:"indexlist.js",error:l.emptyfun,fun:l.emptyfun},paging:{calledge:void 0,fun:l.emptyfun,pagnum:5},conts:{publicpath:this.publicpath,calledge:l.emptyfun,fun:l.emptyfun,error:l.emptyfun},tags:{publicpath:this.publicpath,filename:"tags.js",error:l.emptyfun,calledge:l.emptyfun,fun:l.emptyfun}}}return a(t,[{key:"pagenum",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.publicpath,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"indexlist.js";return this.__runof.pagenum.fun=t,n&&(this.__runof.pagenum.error=n),this.__runof.pagenum.publicpath=e,this.__runof.pagenum.filename=r,this}},{key:"paging",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return this.__runof.paging.pagnum=t,this.__runof.paging.fun=n,e&&(this.__runof.paging.calledge=e),this}},{key:"conts",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.publicpath;return this.__runof.conts.fun=t,n&&(this.__runof.conts.calledge=n),e&&(this.__runof.conts.error=e),this.__runof.conts.publicpath=r,this}},{key:"tags",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.publicpath,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"tags.js";return this.__runof.tags.fun=t,n&&(this.__runof.tags.calledge=n),e&&(this.__runof.tags.error=e),this.__runof.tags.publicpath=r,this.__runof.tags.filname=o,this}},{key:"run",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.emptyfun;fetch(this.__runof.pagenum.publicpath+this.__runof.pagenum.filename).then((function(t){return t.json()})).catch(this.__runof.pagenum.error).then((function(n){var e=n[0],r=t.nowpage;t.__runof.pagenum.fun(e,r)||l.__plushpagelist(r,e,t.__runof.paging.pagnum,t.__runof.paging)||l.__plushconts(t.__runof.conts,fetch(t.__runof.conts.publicpath+r+".js"))||t.__plushtags()})).then((function(){return n()}))}},{key:"runofCont",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.emptyfun;"string"==typeof t&&(t=vhannels.tool.getQueryString(t,-1)),e=Object.assign({error:l.emptyfun(),calledge:l.emptyfun(),fun:l.emptyfun()},e);var o=this.nowpage;fetch(this.__runof.conts.publicpath+o+".js").then((function(t){return t.json()})).catch(e.error).then((function(n){for(var e=0,r=n.length;e<r;++e)if(n[e].index===t)return n[e];throw new Error("无法获取属性，页码 "+o+"，id "+t+" !")})).then((function(o){fetch(n.__runof.conts.publicpath+t+"_data.html").then((function(t){return o.content=t})).catch(e.error).then((function(){return!!e.calledge(o,!1)||(!!e.fun(o,t)||e.calledge(o,!0))})).then((function(){return r()}))}))}},{key:"__plushtags",value:function(){var t=this;fetch(this.__runof.tags.publicpath+this.__runof.tags.filename).then((function(t){return t.json()})).catch(this.__runof.tags.error).then((function(n){if(!t.__runof.tags.calledge(n,!1)){for(var e=0,r=n.length;e<r;++e)if(t.__runof.tags.fun(n[e],e,n))return;t.__runof.tags.calledge(n,!0)}}))}}]),t}(),window.Aout_blog=l,t.exports=l}]);