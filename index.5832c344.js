function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function r(r){return function(r){if(Array.isArray(r))return t(r)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e=document.getElementsByTagName("li"),n=r(e).sort(function(t,r){return+r.getAttribute("data-salary").replace(/\D/g,"")-+t.getAttribute("data-salary").replace(/\D/g,"")});!function(t){r(t).map(function(t){return{name:t.innerText,position:t.getAttribute("data-position"),salary:t.getAttribute("data-salary"),age:t.getAttribute("data-age")}})}(e);for(var a=0;a<e.length;a++)e[a].outerHTML=n[a].outerHTML;
//# sourceMappingURL=index.5832c344.js.map
