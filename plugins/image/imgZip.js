(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define("imgZip",[],r);else if(typeof exports==="object")exports["imgZip"]=r();else t["imgZip"]=r()})(window,function(){return function(e){var t={};function r(n){if(t[n]){return t[n].exports}var o=t[n]={i:n,l:false,exports:{}};e[n].call(o.exports,o,o.exports,r);o.l=true;return o.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="";return r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r.d(t,"photoCompress",function(){return o});r.d(t,"convertBase64UrlToBlob",function(){return i});function n(e,t,r){var n=new Image;n.src=e;n.onload=function(){var e=this;var n=e.width,o=e.height,i=n/o;n=t.width||n;o=t.height||n/i;var u=.7;var a=document.createElement("canvas");var f=a.getContext("2d");var l=document.createAttribute("width");l.nodeValue=n;var c=document.createAttribute("height");c.nodeValue=o;a.setAttributeNode(l);a.setAttributeNode(c);f.drawImage(e,0,0,n,o);if(t.quality&&t.quality<=1&&t.quality>0){u=t.quality}var d=a.toDataURL("image/jpeg",u);r(d)}}function o(e,t,r){var o=new FileReader;o.readAsDataURL(e);o.onload=function(){var e=this.result;n(e,t,r)}}function i(e){var t=e.split(","),r=t[0].match(/:(.*?);/)[1],n=atob(t[1]),o=n.length,i=new Uint8Array(o);while(o--){i[o]=n.charCodeAt(o)}return new Blob([i],{type:r})}t["default"]={photoCompress:o,convertBase64UrlToBlob:i}}])});