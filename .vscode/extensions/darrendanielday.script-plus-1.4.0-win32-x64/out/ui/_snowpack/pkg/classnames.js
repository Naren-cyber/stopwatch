import{c as l}from"./common/_commonjsHelpers-913f9c4a.js";var u=l(function(r){/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){var f={}.hasOwnProperty;function s(){for(var n=[],o=0;o<arguments.length;o++){var t=arguments[o];if(!!t){var e=typeof t;if(e==="string"||e==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var c=s.apply(null,t);c&&n.push(c)}}else if(e==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var i in t)f.call(t,i)&&t[i]&&n.push(i)}}}return n.join(" ")}r.exports?(s.default=s,r.exports=s):window.classNames=s})()});export default u;
