parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(){var t=document.querySelector(".page__body"),n=document.querySelector(".menu");n.classList.contains("menu--opacity")?n.classList.contains("menu--opacity")&&t.classList.remove("page__body--with-menu"):t.classList.add("page__body--with-menu")}function n(n){var e=document.querySelector(".".concat(n));e.classList.contains("".concat(n,"--opacity"))?e.classList.remove("".concat(n,"--opacity")):e.classList.contains("".concat(n,"--opacity"))||e.classList.add("".concat(n,"--opacity")),t()}document.querySelectorAll(".top-actions__icon").forEach(function(t){return t.addEventListener("click",function(){return n("menu")})}),document.querySelector(".dropdown__btn").addEventListener("click",function(){return n("dropdown__content")}),document.querySelector(".dropdown__btn--menu").addEventListener("click",function(){return n("dropdown__content--menu")}),document.querySelectorAll(".menu__link").forEach(function(t){return t.addEventListener("click",function(){return n("menu")})}),document.querySelector(".menu__btn").addEventListener("click",function(){return n("menu")}),window.addEventListener("click",function(t){if(!t.target.matches(".dropdown__btn")){var n=document.querySelector(".dropdown__content");n.classList.contains(".dropdown__content--opacity")||n.classList.add("dropdown__content--opacity")}if(!t.target.matches(".dropdown__btn--menu")){var e=document.querySelector(".dropdown__content--menu");e.classList.contains(".dropdown__content--menu--opacity")||e.classList.add("dropdown__content--menu--opacity")}});var e=document.querySelector(".form");e.addEventListener("submit",function(t){t.preventDefault(),t.target.reset()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7947afc8.js.map