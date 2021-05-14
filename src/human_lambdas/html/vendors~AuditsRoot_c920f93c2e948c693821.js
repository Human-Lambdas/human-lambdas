(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~AuditsRoot"],{

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_latest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-latest */ "./node_modules/use-latest/dist/use-latest.esm.js");
/* harmony import */ var use_composed_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-composed-ref */ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js");






var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

//   export type CalculatedNodeHeights = [height: number, rowHeight: number];
// https://github.com/microsoft/TypeScript/issues/28259

var hiddenTextarea = null;

var getHeight = function getHeight(node, sizingData) {
  var height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  } // remove padding, since height = content


  return height - sizingData.paddingSize;
};

function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }

  if (maxRows === void 0) {
    maxRows = Infinity;
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  var paddingSize = sizingData.paddingSize,
      borderSize = sizingData.borderSize,
      sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function (_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData); // measure height of a textarea with a single row

  hiddenTextarea.value = 'x';
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;

  if (boxSizing === 'border-box') {
    minHeight = minHeight + paddingSize + borderSize;
  }

  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;

  if (boxSizing === 'border-box') {
    maxHeight = maxHeight + paddingSize + borderSize;
  }

  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}

var noop = function noop() {};
var pick = function pick(props, obj) {
  return props.reduce(function (acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};

var SIZING_STYLE = ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'boxSizing', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'letterSpacing', 'lineHeight', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', // non-standard
'tabSize', 'textIndent', // non-standard
'textRendering', 'textTransform', 'width'];
var isIE = !!document.documentElement.currentStyle ;

var getSizingData = function getSizingData(node) {
  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize
  };
};

var useWindowResizeListener = function useWindowResizeListener(listener) {
  var latestListener = Object(use_latest__WEBPACK_IMPORTED_MODULE_3__["default"])(listener);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    var handler = function handler(event) {
      latestListener.current(event);
    };

    window.addEventListener('resize', handler);
    return function () {
      window.removeEventListener('resize', handler);
    };
  }, []);
};

var TextareaAutosize = function TextareaAutosize(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements,
      maxRows = _ref.maxRows,
      minRows = _ref.minRows,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      _ref$onHeightChange = _ref.onHeightChange,
      onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);

  if ( true && props.style) {
    if ('maxHeight' in props.style) {
      throw new Error('Using `style.maxHeight` for <TextareaAutosize/> is not supported. Please use `maxRows`.');
    }

    if ('minHeight' in props.style) {
      throw new Error('Using `style.minHeight` for <TextareaAutosize/> is not supported. Please use `minRows`.');
    }
  }

  var isControlled = props.value !== undefined;
  var libRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var ref = Object(use_composed_ref__WEBPACK_IMPORTED_MODULE_4__["default"])(libRef, userRef);
  var heightRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);
  var measurementsCacheRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var resizeTextarea = function resizeTextarea() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || 'x', minRows, maxRows),
        height = _calculateNodeHeight[0],
        rowHeight = _calculateNodeHeight[1];

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', height + "px", 'important');
      onHeightChange(height, {
        rowHeight: rowHeight
      });
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      resizeTextarea();
    }

    onChange(event);
  };

  {
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onChange: handleChange,
    ref: ref
  }));
};

var index = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(TextareaAutosize);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var updateRef = function updateRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }
  ref.current = value;
};

var useComposedRef = function useComposedRef(libRef, userRef) {
  var prevUserRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (instance) {
    libRef.current = instance;

    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }

    prevUserRef.current = userRef;

    if (!userRef) {
      return;
    }

    updateRef(userRef, instance);
  }, [userRef]);
};

/* harmony default export */ __webpack_exports__["default"] = (useComposedRef);


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index =  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] ;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/use-latest/dist/use-latest.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/use-latest/dist/use-latest.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");



var useLatest = function useLatest(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    ref.current = value;
  });
  return ref;
};

/* harmony default export */ __webpack_exports__["default"] = (useLatest);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS9kaXN0L3JlYWN0LXRleHRhcmVhLWF1dG9zaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2UtY29tcG9zZWQtcmVmL2Rpc3QvdXNlLWNvbXBvc2VkLXJlZi5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QvZGlzdC91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2UtbGF0ZXN0L2Rpc3QvdXNlLWxhdGVzdC5lc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBMkQsQ0FBQyxpQkFBaUIsYUFBYSxvSEFBb0gsRUFBRSxVQUFVLElBQUksV0FBVyxJQUFJLFlBQVksSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlDQUFpQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksVUFBVSxtTUFBbU0sbUJBQW1CLGdCQUFnQix5REFBeUQsSUFBSSxrQkFBa0IsNkRBQTZELCtDQUErQyxtQkFBbUIsbUNBQW1DLDhHQUE4RyxtQ0FBbUMsZUFBZSx5Q0FBeUMsZUFBZSxPQUFPLHlDQUF5QyxrREFBa0QsZUFBZSxtQkFBbUIsYUFBYSxPQUFPLGtCQUFrQixzQkFBc0IsbUJBQW1CLE1BQU0sZUFBZSxrREFBa0QsS0FBSyxhQUFhLFdBQVcsNEJBQTRCLGlCQUFpQix5QkFBeUIsOEJBQThCLDBDQUEwQyxLQUFLLDhCQUE4QixZQUFZLDhDQUE4QyxHQUFHLGlCQUFpQixjQUFjLDBDQUEwQyxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsaUNBQWlDLDBCQUEwQix3Q0FBd0MsdUNBQXVDLGlCQUFpQixNQUFNLDZDQUE2QywwSEFBMEgsbUJBQW1CLG1CQUFtQixhQUFhLG1CQUFtQixjQUFjLG9MQUFvTCxxQkFBcUIsU0FBUyxzQkFBc0IsNkNBQTZDLHdCQUF3QixXQUFXLDRDQUE0Qyx5QkFBeUIsNEJBQTRCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLG9DQUFvQyxtQkFBbUIsc0NBQXNDLHNCQUFzQix5QkFBeUIseUJBQXlCLGtEQUFrRCx3REFBd0Qsc0JBQXNCLGlCQUFpQix1RkFBdUYsMERBQTBELFVBQVUsZ0NBQWdDLGdDQUFnQyx5REFBeUQsMEJBQTBCLG9DQUFvQywrQkFBK0IsK0JBQStCLG9DQUFvQyw2QkFBNkIscUJBQXFCLDBCQUEwQixzQkFBc0IsaURBQWlELHlLQUF5SyxpQkFBaUIsNEJBQTRCLDBFQUEwRSxzQkFBc0Isd0JBQXdCLHFCQUFxQiw4QkFBOEIsbUJBQW1CLHNCQUFzQixxQkFBcUIsYUFBYSxZQUFZLDJCQUEyQixXQUFXLGdEQUFnRCxzQ0FBc0Msc0NBQXNDLHFCQUFxQixxQkFBcUIsV0FBVyw4REFBOEQsbUJBQW1CLDBCQUEwQix3QkFBd0Isc0JBQXNCLFdBQVcsd0NBQXdDLHVJQUF1SSwyQ0FBMkMsZUFBZSwyQkFBMkIsK0JBQStCLHFCQUFxQiwyQkFBMkIsSUFBSSxrWkFBa1osaUNBQWlDLGtDQUFrQyxFQUFFLHdCQUF3QixzREFBc0Qsd0JBQXdCLG9GQUFvRixjQUFjLG9IQUFvSCwwQkFBMEIsd0JBQXdCLHNCQUFzQixrQkFBa0Isd0JBQXdCLHFCQUFxQiwrQkFBK0IscUJBQXFCLG9CQUFvQix5QkFBeUIscUJBQXFCLGdDQUFnQyxxQkFBcUIsOENBQThDLDBCQUEwQiw2QkFBNkIsdUJBQXVCLDZCQUE2QixHQUFHLGlCQUFpQixvSEFBb0gsb0JBQW9CLDZCQUE2Qix5QkFBeUIsa0NBQWtDLDJDQUEyQyxnQkFBZ0Isd0JBQXdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7QUNBeHhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQzBDO0FBQ3pCO0FBQ3hDO0FBQ1c7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMERBQVM7QUFDaEMsRUFBRSw2REFBZTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUdBQTZCOztBQUUzQyxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0RBQU07QUFDckIsWUFBWSxnRUFBYztBQUMxQixrQkFBa0Isb0RBQU07QUFDeEIsNkJBQTZCLG9EQUFNOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQWU7QUFDbkI7QUFDQTs7QUFFQSxzQkFBc0IsMkRBQWEsYUFBYSxrRkFBUSxHQUFHO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMkJBQTJCLHdEQUFVOztBQUV0QixvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMU5yQjtBQUFBO0FBQUE7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9EQUFNO0FBQzFCLFNBQVMseURBQVc7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSw2RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0I5QjtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDLGFBQWEscURBQWU7O0FBRWIsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNzQzs7QUFFckU7QUFDQSxZQUFZLG9EQUFNO0FBQ2xCLEVBQUUsNEVBQXlCO0FBQzNCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQyIsImZpbGUiOiJ2ZW5kb3JzfkF1ZGl0c1Jvb3RfYzkyMGY5M2MyZTk0OGM2OTM4MjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LmRheWpzPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWlsbGlzZWNvbmRcIixlPVwic2Vjb25kXCIsbj1cIm1pbnV0ZVwiLHI9XCJob3VyXCIsaT1cImRheVwiLHM9XCJ3ZWVrXCIsdT1cIm1vbnRoXCIsYT1cInF1YXJ0ZXJcIixvPVwieWVhclwiLGY9XCJkYXRlXCIsaD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVteMC05XSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8sYz0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csZD17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSwkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sbD17czokLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSskKHIsMixcIjBcIikrXCI6XCIrJChpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLHUpLHM9bi1pPDAsYT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksdSk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS1hOmEtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTpvLHc6cyxkOmksRDpmLGg6cixtOm4sczplLG1zOnQsUTphfVtoXXx8U3RyaW5nKGh8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0seT1cImVuXCIsTT17fTtNW3ldPWQ7dmFyIG09ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBTfSxEPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcjtpZighdClyZXR1cm4geTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClNW3RdJiYocj10KSxlJiYoTVt0XT1lLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7TVtpXT10LHI9aX1yZXR1cm4hbiYmciYmKHk9cikscnx8IW4mJnl9LHY9ZnVuY3Rpb24odCxlKXtpZihtKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgUyhuKX0sZz1sO2cubD1ELGcuaT1tLGcudz1mdW5jdGlvbih0LGUpe3JldHVybiB2KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgUz1mdW5jdGlvbigpe2Z1bmN0aW9uIGQodCl7dGhpcy4kTD1EKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyICQ9ZC5wcm90b3R5cGU7cmV0dXJuICQucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihnLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goaCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSwkLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSwkLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBnfSwkLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKFwiSW52YWxpZCBEYXRlXCI9PT10aGlzLiRkLnRvU3RyaW5nKCkpfSwkLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXYodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sJC5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHYodCk8dGhpcy5zdGFydE9mKGUpfSwkLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dih0KX0sJC4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGcudSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LCQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LCQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sJC5zdGFydE9mPWZ1bmN0aW9uKHQsYSl7dmFyIGg9dGhpcyxjPSEhZy51KGEpfHxhLGQ9Zy5wKHQpLCQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1nLncoaC4kdT9EYXRlLlVUQyhoLiR5LGUsdCk6bmV3IERhdGUoaC4keSxlLHQpLGgpO3JldHVybiBjP246bi5lbmRPZihpKX0sbD1mdW5jdGlvbih0LGUpe3JldHVybiBnLncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZShcInNcIiksKGM/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksaCl9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELEQ9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChkKXtjYXNlIG86cmV0dXJuIGM/JCgxLDApOiQoMzEsMTEpO2Nhc2UgdTpyZXR1cm4gYz8kKDEsTSk6JCgwLE0rMSk7Y2FzZSBzOnZhciB2PXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxTPSh5PHY/eSs3OnkpLXY7cmV0dXJuICQoYz9tLVM6bSsoNi1TKSxNKTtjYXNlIGk6Y2FzZSBmOnJldHVybiBsKEQrXCJIb3Vyc1wiLDApO2Nhc2UgcjpyZXR1cm4gbChEK1wiTWludXRlc1wiLDEpO2Nhc2UgbjpyZXR1cm4gbChEK1wiU2Vjb25kc1wiLDIpO2Nhc2UgZTpyZXR1cm4gbChEK1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sJC5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSwkLiRzZXQ9ZnVuY3Rpb24ocyxhKXt2YXIgaCxjPWcucChzKSxkPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSwkPShoPXt9LGhbaV09ZCtcIkRhdGVcIixoW2ZdPWQrXCJEYXRlXCIsaFt1XT1kK1wiTW9udGhcIixoW29dPWQrXCJGdWxsWWVhclwiLGhbcl09ZCtcIkhvdXJzXCIsaFtuXT1kK1wiTWludXRlc1wiLGhbZV09ZCtcIlNlY29uZHNcIixoW3RdPWQrXCJNaWxsaXNlY29uZHNcIixoKVtjXSxsPWM9PT1pP3RoaXMuJEQrKGEtdGhpcy4kVyk6YTtpZihjPT09dXx8Yz09PW8pe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZiwxKTt5LiRkWyRdKGwpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZixNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgJCYmdGhpcy4kZFskXShsKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sJC5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sJC5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbZy5wKHQpXSgpfSwkLmFkZD1mdW5jdGlvbih0LGEpe3ZhciBmLGg9dGhpczt0PU51bWJlcih0KTt2YXIgYz1nLnAoYSksZD1mdW5jdGlvbihlKXt2YXIgbj12KGgpO3JldHVybiBnLncobi5kYXRlKG4uZGF0ZSgpK01hdGgucm91bmQoZSp0KSksaCl9O2lmKGM9PT11KXJldHVybiB0aGlzLnNldCh1LHRoaXMuJE0rdCk7aWYoYz09PW8pcmV0dXJuIHRoaXMuc2V0KG8sdGhpcy4keSt0KTtpZihjPT09aSlyZXR1cm4gZCgxKTtpZihjPT09cylyZXR1cm4gZCg3KTt2YXIgJD0oZj17fSxmW25dPTZlNCxmW3JdPTM2ZTUsZltlXT0xZTMsZilbY118fDEsbD10aGlzLiRkLmdldFRpbWUoKSt0KiQ7cmV0dXJuIGcudyhsLHRoaXMpfSwkLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LCQuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVyblwiSW52YWxpZCBEYXRlXCI7dmFyIG49dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLHI9Zy56KHRoaXMpLGk9dGhpcy4kbG9jYWxlKCkscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1pLndlZWtkYXlzLGY9aS5tb250aHMsaD1mdW5jdGlvbih0LHIsaSxzKXtyZXR1cm4gdCYmKHRbcl18fHQoZSxuKSl8fGlbcl0uc3Vic3RyKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGcucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1pLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpnLnMoYSsxLDIsXCIwXCIpLE1NTTpoKGkubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpnLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKGkud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKGkud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOmcucyhzLDIsXCIwXCIpLGg6ZCgxKSxoaDpkKDIpLGE6JChzLHUsITApLEE6JChzLHUsITEpLG06U3RyaW5nKHUpLG1tOmcucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOmcucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpnLnModGhpcy4kbXMsMyxcIjBcIiksWjpyfTtyZXR1cm4gbi5yZXBsYWNlKGMsZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8bFt0XXx8ci5yZXBsYWNlKFwiOlwiLFwiXCIpfSl9LCQudXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LCQuZGlmZj1mdW5jdGlvbih0LGYsaCl7dmFyIGMsZD1nLnAoZiksJD12KHQpLGw9NmU0KigkLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpLHk9dGhpcy0kLE09Zy5tKHRoaXMsJCk7cmV0dXJuIE09KGM9e30sY1tvXT1NLzEyLGNbdV09TSxjW2FdPU0vMyxjW3NdPSh5LWwpLzYwNDhlNSxjW2ldPSh5LWwpLzg2NGU1LGNbcl09eS8zNmU1LGNbbl09eS82ZTQsY1tlXT15LzFlMyxjKVtkXXx8eSxoP006Zy5hKE0pfSwkLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YodSkuJER9LCQuJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBNW3RoaXMuJExdfSwkLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPUQodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sJC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBnLncodGhpcy4kZCx0aGlzKX0sJC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSwkLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sJC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LCQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxkfSgpLHA9Uy5wcm90b3R5cGU7cmV0dXJuIHYucHJvdG90eXBlPXAsW1tcIiRtc1wiLHRdLFtcIiRzXCIsZV0sW1wiJG1cIixuXSxbXCIkSFwiLHJdLFtcIiRXXCIsaV0sW1wiJE1cIix1XSxbXCIkeVwiLG9dLFtcIiREXCIsZl1dLmZvckVhY2goZnVuY3Rpb24odCl7cFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSksdi5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxTLHYpLHQuJGk9ITApLHZ9LHYubG9jYWxlPUQsdi5pc0RheWpzPW0sdi51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB2KDFlMyp0KX0sdi5lbj1NW3ldLHYuTHM9TSx2LnA9e30sdn0pO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCB1c2VSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTGF0ZXN0IGZyb20gJ3VzZS1sYXRlc3QnO1xuaW1wb3J0IHVzZUNvbXBvc2VkUmVmIGZyb20gJ3VzZS1jb21wb3NlZC1yZWYnO1xuXG52YXIgSElEREVOX1RFWFRBUkVBX1NUWUxFID0ge1xuICAnbWluLWhlaWdodCc6ICcwJyxcbiAgJ21heC1oZWlnaHQnOiAnbm9uZScsXG4gIGhlaWdodDogJzAnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgJ3otaW5kZXgnOiAnLTEwMDAnLFxuICB0b3A6ICcwJyxcbiAgcmlnaHQ6ICcwJ1xufTtcblxudmFyIGZvcmNlSGlkZGVuU3R5bGVzID0gZnVuY3Rpb24gZm9yY2VIaWRkZW5TdHlsZXMobm9kZSkge1xuICBPYmplY3Qua2V5cyhISURERU5fVEVYVEFSRUFfU1RZTEUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBISURERU5fVEVYVEFSRUFfU1RZTEVba2V5XSwgJ2ltcG9ydGFudCcpO1xuICB9KTtcbn07XG5cbi8vICAgZXhwb3J0IHR5cGUgQ2FsY3VsYXRlZE5vZGVIZWlnaHRzID0gW2hlaWdodDogbnVtYmVyLCByb3dIZWlnaHQ6IG51bWJlcl07XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MjU5XG5cbnZhciBoaWRkZW5UZXh0YXJlYSA9IG51bGw7XG5cbnZhciBnZXRIZWlnaHQgPSBmdW5jdGlvbiBnZXRIZWlnaHQobm9kZSwgc2l6aW5nRGF0YSkge1xuICB2YXIgaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKHNpemluZ0RhdGEuc2l6aW5nU3R5bGUuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAvLyBib3JkZXItYm94OiBhZGQgYm9yZGVyLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50ICsgcGFkZGluZyArIGJvcmRlclxuICAgIHJldHVybiBoZWlnaHQgKyBzaXppbmdEYXRhLmJvcmRlclNpemU7XG4gIH0gLy8gcmVtb3ZlIHBhZGRpbmcsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnRcblxuXG4gIHJldHVybiBoZWlnaHQgLSBzaXppbmdEYXRhLnBhZGRpbmdTaXplO1xufTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9kZUhlaWdodChzaXppbmdEYXRhLCB2YWx1ZSwgbWluUm93cywgbWF4Um93cykge1xuICBpZiAobWluUm93cyA9PT0gdm9pZCAwKSB7XG4gICAgbWluUm93cyA9IDE7XG4gIH1cblxuICBpZiAobWF4Um93cyA9PT0gdm9pZCAwKSB7XG4gICAgbWF4Um93cyA9IEluZmluaXR5O1xuICB9XG5cbiAgaWYgKCFoaWRkZW5UZXh0YXJlYSkge1xuICAgIGhpZGRlblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3RhYi1pbmRleCcsICctMScpO1xuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGZvcmNlSGlkZGVuU3R5bGVzKGhpZGRlblRleHRhcmVhKTtcbiAgfVxuXG4gIGlmIChoaWRkZW5UZXh0YXJlYS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoaWRkZW5UZXh0YXJlYSk7XG4gIH1cblxuICB2YXIgcGFkZGluZ1NpemUgPSBzaXppbmdEYXRhLnBhZGRpbmdTaXplLFxuICAgICAgYm9yZGVyU2l6ZSA9IHNpemluZ0RhdGEuYm9yZGVyU2l6ZSxcbiAgICAgIHNpemluZ1N0eWxlID0gc2l6aW5nRGF0YS5zaXppbmdTdHlsZTtcbiAgdmFyIGJveFNpemluZyA9IHNpemluZ1N0eWxlLmJveFNpemluZztcbiAgT2JqZWN0LmtleXMoc2l6aW5nU3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKF9rZXkpIHtcbiAgICB2YXIga2V5ID0gX2tleTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zdHlsZVtrZXldID0gc2l6aW5nU3R5bGVba2V5XTtcbiAgfSk7XG4gIGZvcmNlSGlkZGVuU3R5bGVzKGhpZGRlblRleHRhcmVhKTtcbiAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgdmFyIGhlaWdodCA9IGdldEhlaWdodChoaWRkZW5UZXh0YXJlYSwgc2l6aW5nRGF0YSk7IC8vIG1lYXN1cmUgaGVpZ2h0IG9mIGEgdGV4dGFyZWEgd2l0aCBhIHNpbmdsZSByb3dcblxuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9ICd4JztcbiAgdmFyIHJvd0hlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHBhZGRpbmdTaXplO1xuICB2YXIgbWluSGVpZ2h0ID0gcm93SGVpZ2h0ICogbWluUm93cztcblxuICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gIH1cblxuICBoZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodCk7XG4gIHZhciBtYXhIZWlnaHQgPSByb3dIZWlnaHQgKiBtYXhSb3dzO1xuXG4gIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgfVxuXG4gIGhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgcmV0dXJuIFtoZWlnaHQsIHJvd0hlaWdodF07XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xudmFyIHBpY2sgPSBmdW5jdGlvbiBwaWNrKHByb3BzLCBvYmopIHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wKSB7XG4gICAgYWNjW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBTSVpJTkdfU1RZTEUgPSBbJ2JvcmRlckJvdHRvbVdpZHRoJywgJ2JvcmRlckxlZnRXaWR0aCcsICdib3JkZXJSaWdodFdpZHRoJywgJ2JvcmRlclRvcFdpZHRoJywgJ2JveFNpemluZycsICdmb250RmFtaWx5JywgJ2ZvbnRTaXplJywgJ2ZvbnRTdHlsZScsICdmb250V2VpZ2h0JywgJ2xldHRlclNwYWNpbmcnLCAnbGluZUhlaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nVG9wJywgLy8gbm9uLXN0YW5kYXJkXG4ndGFiU2l6ZScsICd0ZXh0SW5kZW50JywgLy8gbm9uLXN0YW5kYXJkXG4ndGV4dFJlbmRlcmluZycsICd0ZXh0VHJhbnNmb3JtJywgJ3dpZHRoJ107XG52YXIgaXNJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSA7XG5cbnZhciBnZXRTaXppbmdEYXRhID0gZnVuY3Rpb24gZ2V0U2l6aW5nRGF0YShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIGlmIChzdHlsZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHNpemluZ1N0eWxlID0gcGljayhTSVpJTkdfU1RZTEUsIHN0eWxlKTtcbiAgdmFyIGJveFNpemluZyA9IHNpemluZ1N0eWxlLmJveFNpemluZzsgLy8gcHJvYmFibHkgbm9kZSBpcyBkZXRhY2hlZCBmcm9tIERPTSwgY2FuJ3QgcmVhZCBjb21wdXRlZCBkaW1lbnNpb25zXG5cbiAgaWYgKGJveFNpemluZyA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBJRSAoRWRnZSBoYXMgYWxyZWFkeSBjb3JyZWN0IGJlaGF2aW91cikgcmV0dXJucyBjb250ZW50IHdpZHRoIGFzIGNvbXB1dGVkIHdpZHRoXG4gIC8vIHNvIHdlIG5lZWQgdG8gYWRkIG1hbnVhbGx5IHBhZGRpbmcgYW5kIGJvcmRlciB3aWR0aHNcblxuXG4gIGlmIChpc0lFICYmIGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgc2l6aW5nU3R5bGUud2lkdGggPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLndpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdSaWdodCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdMZWZ0KSArICdweCc7XG4gIH1cblxuICB2YXIgcGFkZGluZ1NpemUgPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdCb3R0b20pICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5wYWRkaW5nVG9wKTtcbiAgdmFyIGJvcmRlclNpemUgPSBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlckJvdHRvbVdpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICByZXR1cm4ge1xuICAgIHNpemluZ1N0eWxlOiBzaXppbmdTdHlsZSxcbiAgICBwYWRkaW5nU2l6ZTogcGFkZGluZ1NpemUsXG4gICAgYm9yZGVyU2l6ZTogYm9yZGVyU2l6ZVxuICB9O1xufTtcblxudmFyIHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gdXNlV2luZG93UmVzaXplTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgdmFyIGxhdGVzdExpc3RlbmVyID0gdXNlTGF0ZXN0KGxpc3RlbmVyKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGxhdGVzdExpc3RlbmVyLmN1cnJlbnQoZXZlbnQpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG59O1xuXG52YXIgVGV4dGFyZWFBdXRvc2l6ZSA9IGZ1bmN0aW9uIFRleHRhcmVhQXV0b3NpemUoX3JlZiwgdXNlclJlZikge1xuICB2YXIgY2FjaGVNZWFzdXJlbWVudHMgPSBfcmVmLmNhY2hlTWVhc3VyZW1lbnRzLFxuICAgICAgbWF4Um93cyA9IF9yZWYubWF4Um93cyxcbiAgICAgIG1pblJvd3MgPSBfcmVmLm1pblJvd3MsXG4gICAgICBfcmVmJG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZiRvbkNoYW5nZSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25DaGFuZ2UsXG4gICAgICBfcmVmJG9uSGVpZ2h0Q2hhbmdlID0gX3JlZi5vbkhlaWdodENoYW5nZSxcbiAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3JlZiRvbkhlaWdodENoYW5nZSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25IZWlnaHRDaGFuZ2UsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNhY2hlTWVhc3VyZW1lbnRzXCIsIFwibWF4Um93c1wiLCBcIm1pblJvd3NcIiwgXCJvbkNoYW5nZVwiLCBcIm9uSGVpZ2h0Q2hhbmdlXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9wcy5zdHlsZSkge1xuICAgIGlmICgnbWF4SGVpZ2h0JyBpbiBwcm9wcy5zdHlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2luZyBgc3R5bGUubWF4SGVpZ2h0YCBmb3IgPFRleHRhcmVhQXV0b3NpemUvPiBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGBtYXhSb3dzYC4nKTtcbiAgICB9XG5cbiAgICBpZiAoJ21pbkhlaWdodCcgaW4gcHJvcHMuc3R5bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNpbmcgYHN0eWxlLm1pbkhlaWdodGAgZm9yIDxUZXh0YXJlYUF1dG9zaXplLz4gaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBgbWluUm93c2AuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQ29udHJvbGxlZCA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIHZhciBsaWJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciByZWYgPSB1c2VDb21wb3NlZFJlZihsaWJSZWYsIHVzZXJSZWYpO1xuICB2YXIgaGVpZ2h0UmVmID0gdXNlUmVmKDApO1xuICB2YXIgbWVhc3VyZW1lbnRzQ2FjaGVSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgcmVzaXplVGV4dGFyZWEgPSBmdW5jdGlvbiByZXNpemVUZXh0YXJlYSgpIHtcbiAgICB2YXIgbm9kZSA9IGxpYlJlZi5jdXJyZW50O1xuICAgIHZhciBub2RlU2l6aW5nRGF0YSA9IGNhY2hlTWVhc3VyZW1lbnRzICYmIG1lYXN1cmVtZW50c0NhY2hlUmVmLmN1cnJlbnQgPyBtZWFzdXJlbWVudHNDYWNoZVJlZi5jdXJyZW50IDogZ2V0U2l6aW5nRGF0YShub2RlKTtcblxuICAgIGlmICghbm9kZVNpemluZ0RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZWFzdXJlbWVudHNDYWNoZVJlZi5jdXJyZW50ID0gbm9kZVNpemluZ0RhdGE7XG5cbiAgICB2YXIgX2NhbGN1bGF0ZU5vZGVIZWlnaHQgPSBjYWxjdWxhdGVOb2RlSGVpZ2h0KG5vZGVTaXppbmdEYXRhLCBub2RlLnZhbHVlIHx8IG5vZGUucGxhY2Vob2xkZXIgfHwgJ3gnLCBtaW5Sb3dzLCBtYXhSb3dzKSxcbiAgICAgICAgaGVpZ2h0ID0gX2NhbGN1bGF0ZU5vZGVIZWlnaHRbMF0sXG4gICAgICAgIHJvd0hlaWdodCA9IF9jYWxjdWxhdGVOb2RlSGVpZ2h0WzFdO1xuXG4gICAgaWYgKGhlaWdodFJlZi5jdXJyZW50ICE9PSBoZWlnaHQpIHtcbiAgICAgIGhlaWdodFJlZi5jdXJyZW50ID0gaGVpZ2h0O1xuICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgaGVpZ2h0ICsgXCJweFwiLCAnaW1wb3J0YW50Jyk7XG4gICAgICBvbkhlaWdodENoYW5nZShoZWlnaHQsIHtcbiAgICAgICAgcm93SGVpZ2h0OiByb3dIZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHJlc2l6ZVRleHRhcmVhKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQpO1xuICB9O1xuXG4gIHtcbiAgICB1c2VMYXlvdXRFZmZlY3QocmVzaXplVGV4dGFyZWEpO1xuICAgIHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKHJlc2l6ZVRleHRhcmVhKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufTtcblxudmFyIGluZGV4ID0gLyogI19fUFVSRV9fICovZm9yd2FyZFJlZihUZXh0YXJlYUF1dG9zaXplKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG52YXIgdXBkYXRlUmVmID0gZnVuY3Rpb24gdXBkYXRlUmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuICByZWYuY3VycmVudCA9IHZhbHVlO1xufTtcblxudmFyIHVzZUNvbXBvc2VkUmVmID0gZnVuY3Rpb24gdXNlQ29tcG9zZWRSZWYobGliUmVmLCB1c2VyUmVmKSB7XG4gIHZhciBwcmV2VXNlclJlZiA9IHVzZVJlZigpO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgbGliUmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcblxuICAgIGlmIChwcmV2VXNlclJlZi5jdXJyZW50KSB7XG4gICAgICB1cGRhdGVSZWYocHJldlVzZXJSZWYuY3VycmVudCwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJldlVzZXJSZWYuY3VycmVudCA9IHVzZXJSZWY7XG5cbiAgICBpZiAoIXVzZXJSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVSZWYodXNlclJlZiwgaW5zdGFuY2UpO1xuICB9LCBbdXNlclJlZl0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tcG9zZWRSZWY7XG4iLCJpbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpbmRleCA9ICB1c2VMYXlvdXRFZmZlY3QgO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJ3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QnO1xuXG52YXIgdXNlTGF0ZXN0ID0gZnVuY3Rpb24gdXNlTGF0ZXN0KHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYodmFsdWUpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxhdGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=