(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AuditsRoot"],{

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/client/components/EmptyPage.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/EmptyPage.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/EmptyPage.tsx";




const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm0"
})({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  fontFamily: styles_typography__WEBPACK_IMPORTED_MODULE_2__["FONT_FAMILY"].SANS_SERIF
});

const Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm1"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 24,
  fontWeight: 500,
  margin: '20px 0 15px'
});

const SubTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm2"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 16,
  fontWeight: 400,
  margin: '0px 0 20px',
  '> div > a': {
    color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN
  }
});

const EmptyPage = ({
  svg,
  header,
  subHeader,
  button
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, svg, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, subHeader), button);
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyPage);

/***/ }),

/***/ "./src/client/components/IconButtonWrapper.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/IconButtonWrapper.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var components_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PlainButton */ "./src/client/components/PlainButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/IconButtonWrapper.tsx"; // TODO replace IconButton





const Container = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(components_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e110poak0"
})({
  cursor: 'pointer',
  backgroundColor: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  width: 25,
  height: 25,
  padding: 0,
  margin: 0,
  transition: 'all 200ms ease-in',
  ':hover': {
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_HOVER
  }
});

const IconButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    onClick,
    type,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    onClick: onClick,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/client/components/Icons/ArrowLeftSVG.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/Icons/ArrowLeftSVG.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ArrowLeftSVG.tsx";


const ArrowLeftSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "13",
    viewBox: "0 0 515.555 515.555",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftSVG);

/***/ }),

/***/ "./src/client/components/Icons/ArrowRightSVG.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/Icons/ArrowRightSVG.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ArrowRightSVG.tsx";


const ArrowRightSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "13",
    viewBox: "0 0 515.555 515.555",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ArrowRightSVG);

/***/ }),

/***/ "./src/client/components/Icons/EmptyAuditsSVG.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/Icons/EmptyAuditsSVG.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/EmptyAuditsSVG.tsx";


const EmptyAuditsSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].BACKGROUND_GRAY_MID,
    height: 100,
    width: 100,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (EmptyAuditsSVG);

/***/ }),

/***/ "./src/client/components/Icons/FilterSVG.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/Icons/FilterSVG.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/FilterSVG.tsx";


const FilterSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const {
    color
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color || styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (FilterSVG);

/***/ }),

/***/ "./src/client/components/StandardMenu.tsx":
/*!************************************************!*\
  !*** ./src/client/components/StandardMenu.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/StandardMenu.tsx";




const StandardMenu = props => {
  const {
    menuProps,
    menuItems
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Standard dropdown menu'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), menuItems.map(({
    label,
    onClick
  }, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: idx,
    label: label,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardMenu);

/***/ }),

/***/ "./src/universal/modules/audits/AuditsRoot.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/modules/audits/AuditsRoot.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Audits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Audits */ "./src/universal/modules/audits/components/Audits.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/audits/AuditsRoot.tsx";






const AuditsRoot = props => {
  const {
    user,
    users
  } = props || {};
  const [audits, setAudits] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [queueId, setQueueId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [userId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const orgId = user.current_organization_id;
  const {
    tasks,
    count
  } = audits || {};
  const PAGE_LIMIT = 50;
  const onNext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset < Math.abs(count - PAGE_LIMIT)) {
      setOffset(offset + PAGE_LIMIT);
    }
  }, [count, offset]);
  const onBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset >= PAGE_LIMIT) {
      setOffset(offset - PAGE_LIMIT);
    }
  }, [count, offset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchAudits() {
      setLoading(true);
      const payload = {
        method: 'GET',
        params: {
          limit: PAGE_LIMIT,
          queue_id: queueId,
          worker_id: userId,
          offset
        }
      };
      const {
        data
      } = await networker.httpHandler(`/orgs/${orgId}/queues/tasks/completed`, payload);
      const {
        data: queues
      } = await networker.httpHandler(`/orgs/${orgId}/queues`, {
        method: 'GET',
        params: {
          task_status: 'completed'
        }
      });
      setAudits(data);
      setQueues(queues);
      setLoading(false);
    }

    fetchAudits();
  }, [queueId, userId, offset, user]);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Audits__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tasks: tasks || [],
    count: count,
    onNext: onNext,
    onBack: onBack,
    limit: PAGE_LIMIT,
    offset: offset,
    queues: queues,
    setQueueId: setQueueId,
    queueId: queueId,
    users: users,
    setUserId: setUserId,
    userId: userId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  });
};

const mapStateToProps = state => ({
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(AuditsRoot));

/***/ }),

/***/ "./src/universal/modules/audits/components/Audits.tsx":
/*!************************************************************!*\
  !*** ./src/universal/modules/audits/components/Audits.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/ListPage/ListPage */ "./src/client/components/ListPage/ListPage.tsx");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/ArrowLeftSVG */ "./src/client/components/Icons/ArrowLeftSVG.tsx");
/* harmony import */ var client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/Icons/ArrowRightSVG */ "./src/client/components/Icons/ArrowRightSVG.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/ListPage/ListTitle */ "./src/client/components/ListPage/ListTitle.tsx");
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/Icons/FilterSVG */ "./src/client/components/Icons/FilterSVG.tsx");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/components/Icons/EmptyAuditsSVG */ "./src/client/components/Icons/EmptyAuditsSVG.tsx");
/* harmony import */ var client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! client/components/IconButtonWrapper */ "./src/client/components/IconButtonWrapper.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! universal/modules/task/components/Sidebar */ "./src/universal/modules/task/components/Sidebar.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/audits/components/Audits.tsx";
























const ColumnContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob0"
})({
  name: "i6hear",
  styles: "line-height:40px;height:40px;display:grid;grid-template-columns:100px 1fr 180px 100px 100px 80px 100px;grid-column-gap:15px;"
});

const Footer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob1"
})({
  name: "y8ru05",
  styles: "height:45px;display:grid;max-width:80%;grid-template-columns:200px 200px;justify-content:space-between;align-items:center;"
});

const Paginator = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob2"
})({
  name: "192qrng",
  styles: "display:flex;align-items:center;justify-content:flex-end;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16d2yob3"
})(_objectSpread({
  marginLeft: 7,
  width: '100%'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const Spacer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob4"
})({
  name: "jgwfcl",
  styles: "margin-right:7px;display:flex;align-items:center;"
});

const LineItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob5"
})(_objectSpread({
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer !important',
  display: 'block'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const SmallText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16d2yob6"
})({
  textAlign: 'left',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  userSelect: 'none'
});

const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob7"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const PageCount = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e16d2yob8"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  fontWeight: 400,
  userSelect: 'none',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER,
  marginLeft: 2,
  marginRight: 2,
  width: 'auto',
  borderRadius: 0,
  height: 25,
  lineHeight: '25px'
});

const PaginateBtn = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e16d2yob9"
})(({
  left
}) => {
  return {
    height: 25,
    lineHeight: '25px',
    width: 30,
    padding: 0,
    margin: 0,
    background: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER,
    borderTopRightRadius: left ? 0 : 4,
    borderBottomRightRadius: left ? 0 : 4,
    borderBottomLeftRadius: left ? 4 : 0,
    borderTopLeftRadius: left ? 4 : 0
  };
});

const StyledEl = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob10"
})(_objectSpread({
  margin: '0 15px',
  padding: '7px 0',
  fontWeight: 500,
  maxWidth: 350
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const HR = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob11"
})({
  height: 1,
  width: '100%',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY
});

const StyledCommentsIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_23__["default"], {
  target: "e16d2yob12"
})({
  display: 'block',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
  marginRight: 15,
  marginLeft: 4,
  fontSize: 17
});

const Audits = props => {
  const {
    tasks,
    count,
    onNext,
    onBack,
    limit,
    offset,
    queues,
    setQueueId,
    setUserId,
    queueId,
    userId,
    users
  } = props;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const separator = {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HR, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    })
  };
  const wMenuItems = queues.map(w => ({
    label: queueId === w.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    }, w.name) : w.name,
    onClick: () => setQueueId(prev => prev === w.id ? undefined : w.id)
  }));

  if (queueId) {
    wMenuItems.unshift(separator);
    wMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setQueueId(undefined)
    });
  }

  const cbMenuItems = users.map(u => ({
    label: userId === u.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }, u.name) : u.name,
    onClick: () => setUserId(prev => prev === u.id ? undefined : u.id)
  }));

  if (userId) {
    cbMenuItems.unshift(separator);
    cbMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setUserId(undefined)
    });
  }

  const {
    menuPortal: menuPortalQueue,
    originRef: originRefQueue,
    menuProps: menuPropsQueue,
    togglePortal: togglePortalQueue
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const {
    menuPortal: menuPortalCb,
    originRef: originRefCb,
    menuProps: menuPropsCb,
    togglePortal: togglePortalCb
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const pageHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, "Task ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, "Queue Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: originRefQueue,
    onClick: togglePortalQueue,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: queueId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, "Completed By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: originRefCb,
    onClick: togglePortalCb,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: userId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  }, "Completed At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    }
  }, "Source"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    }
  }, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, "Audit"));
  const pageFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }, count, " Completed tasks"), count > limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paginator, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    left: true,
    onClick: onBack,
    disabled: offset < limit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageCount, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }, `${(offset / limit + 1).toFixed()} / ${Math.ceil(count / limit)}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    onClick: onNext,
    disabled: offset >= Math.abs(count - limit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    }
  }))));
  const auditDecisionIcon = {
    null: null,
    false: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__["AuditDecisionIcon"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__["STATUS_PALETTE"].IN_PROGRESS,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      }
    }, "cancel"),
    true: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__["AuditDecisionIcon"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__["STATUS_PALETTE"].COMPLETED,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      }
    }, "check_circle")
  };
  const itemList = tasks.map(({
    id: taskId,
    completed_by: completedBy,
    completed_at: completedAt,
    correct,
    queue: name,
    source,
    n_comments
  }) => {
    let sourceTextStyle = 'none';
    sourceTextStyle = ['manual', 'zapier'].includes(source) ? 'capitalize' : sourceTextStyle;
    sourceTextStyle = ['api'].includes(source) ? 'uppercase' : sourceTextStyle;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
      key: taskId,
      onClick: () => history.push({
        pathname: `/queues/tasks/${taskId}/audit`,
        state: {
          isAudits: true
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      }
    }, taskId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_10__["default"])(completedBy),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__["colorFromString"])(completedBy),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      }
    }, completedBy))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(completedAt).format('DD-MM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        textTransform: sourceTextStyle,
        display: 'inline-block',
        justifySelf: 'center',
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      }
    }, source), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'center',
        color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      }
    }, n_comments > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, n_comments, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCommentsIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      }
    }, "comment"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'flex-start'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      }
    }, auditDecisionIcon[correct]));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageHeader: pageHeader,
    itemList: itemList,
    pageFooter: pageFooter,
    emptyList: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_17__["default"], {
      svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }),
      header: 'No tasks here…',
      subHeader: 'Try using different filters.',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }), menuPortalQueue( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuProps: menuPropsQueue,
    menuItems: wMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  })), menuPortalCb( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuProps: menuPropsCb,
    menuItems: cbMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Audits);

/***/ }),

/***/ "./src/universal/modules/outstanding/OutstandingRoot.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/outstanding/OutstandingRoot.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Outstanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Outstanding */ "./src/universal/modules/outstanding/components/Outstanding.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/outstanding/OutstandingRoot.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}








const OutstandingRoot = props => {
  const {
    user,
    users
  } = props || {};
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [queueId, setQueueId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [userId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const orgId = user.current_organization_id;
  const PAGE_LIMIT = 50;
  const onNext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset < Math.abs(count - PAGE_LIMIT)) {
      setOffset(offset + PAGE_LIMIT);
    }
  }, [count, offset]);
  const onBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset >= PAGE_LIMIT) {
      setOffset(offset - PAGE_LIMIT);
    }
  }, [count, offset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueues() {
      setLoading(true);
      const {
        errors,
        data: queues
      } = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(`/orgs/${orgId}/queues`, {
        method: 'GET'
      })]);

      if (errors) {
        console.error('Error fetching queues!', errors);
      } else {
        if (queues) {
          setCount(queues.length);
          setQueues(queues);
          setLoading(false);
        }
      }
    }

    fetchQueues();
  }, [queueId, userId, offset, user]);
  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Outstanding Queues | Human Lambdas');
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Outstanding__WEBPACK_IMPORTED_MODULE_2__["default"], {
    count: count,
    onNext: onNext,
    onBack: onBack,
    limit: PAGE_LIMIT,
    offset: offset,
    queues: queues,
    setQueueId: setQueueId,
    queueId: queueId,
    users: users,
    setUserId: setUserId,
    userId: userId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  });
};

const mapStateToProps = state => ({
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(OutstandingRoot));

/***/ }),

/***/ "./src/universal/modules/outstanding/components/Outstanding.tsx":
/*!**********************************************************************!*\
  !*** ./src/universal/modules/outstanding/components/Outstanding.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/ListPage/ListPage */ "./src/client/components/ListPage/ListPage.tsx");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/Icons/ArrowLeftSVG */ "./src/client/components/Icons/ArrowLeftSVG.tsx");
/* harmony import */ var client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/ArrowRightSVG */ "./src/client/components/Icons/ArrowRightSVG.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/components/ListPage/ListTitle */ "./src/client/components/ListPage/ListTitle.tsx");
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/Icons/FilterSVG */ "./src/client/components/Icons/FilterSVG.tsx");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/Icons/EmptyAuditsSVG */ "./src/client/components/Icons/EmptyAuditsSVG.tsx");
/* harmony import */ var client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/components/IconButtonWrapper */ "./src/client/components/IconButtonWrapper.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/outstanding/components/Outstanding.tsx";




















const ColumnContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno50"
})({
  name: "19b2y6p",
  styles: "line-height:40px;height:40px;display:grid;grid-template-columns:80px 100px 1fr 180px 150px;grid-column-gap:15px;"
});

const Footer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno51"
})({
  name: "y8ru05",
  styles: "height:45px;display:grid;max-width:80%;grid-template-columns:200px 200px;justify-content:space-between;align-items:center;"
});

const Paginator = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno52"
})({
  name: "192qrng",
  styles: "display:flex;align-items:center;justify-content:flex-end;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16vkno53"
})(_objectSpread({
  marginLeft: 7,
  width: '100%'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const Spacer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno54"
})({
  name: "jgwfcl",
  styles: "margin-right:7px;display:flex;align-items:center;"
});

const LineItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno55"
})(_objectSpread({
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer !important',
  display: 'block'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const SmallText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16vkno56"
})({
  textAlign: 'left',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  userSelect: 'none'
});

const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno57"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const PageCount = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e16vkno58"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  fontWeight: 400,
  userSelect: 'none',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER,
  marginLeft: 2,
  marginRight: 2,
  width: 'auto',
  borderRadius: 0,
  height: 25,
  lineHeight: '25px'
});

const PaginateBtn = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e16vkno59"
})(({
  left
}) => {
  return {
    height: 25,
    lineHeight: '25px',
    width: 30,
    padding: 0,
    margin: 0,
    background: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER,
    borderTopRightRadius: left ? 0 : 4,
    borderBottomRightRadius: left ? 0 : 4,
    borderBottomLeftRadius: left ? 4 : 0,
    borderTopLeftRadius: left ? 4 : 0
  };
});

const StyledEl = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno510"
})(_objectSpread({
  margin: '0 15px',
  padding: '7px 0',
  fontWeight: 500,
  maxWidth: 350
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const HR = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno511"
})({
  height: 1,
  width: '100%',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_MAIN_GRAY
});

const Outstanding = props => {
  const {
    count,
    onNext,
    onBack,
    limit,
    offset,
    queues,
    setQueueId,
    setUserId,
    queueId,
    userId,
    users
  } = props;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const separator = {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HR, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      }
    })
  };
  const wMenuItems = queues.map(w => ({
    label: queueId === w.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      }
    }, w.name) : w.name,
    onClick: () => setQueueId(prev => prev === w.id ? undefined : w.id)
  }));

  if (queueId) {
    wMenuItems.unshift(separator);
    wMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setQueueId(undefined)
    });
  }

  const cbMenuItems = users.map(u => ({
    label: userId === u.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }, u.name) : u.name,
    onClick: () => setUserId(prev => prev === u.id ? undefined : u.id)
  }));

  if (userId) {
    cbMenuItems.unshift(separator);
    cbMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setUserId(undefined)
    });
  }

  const {
    menuPortal: menuPortalQueue,
    originRef: originRefQueue,
    menuProps: menuPropsQueue,
    togglePortal: togglePortalQueue
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const {
    menuPortal: menuPortalCb,
    originRef: originRefCb,
    menuProps: menuPropsCb,
    togglePortal: togglePortalCb
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const pageHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }, "Queue ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, "Org ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }, "Queue Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    ref: originRefQueue,
    onClick: togglePortalQueue,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: queueId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }, "Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  }, "Pending Tasks"));
  const pageFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, count, " Completed tasks"), count > limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paginator, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    left: true,
    onClick: onBack,
    disabled: offset < limit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageCount, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, `${(offset / limit + 1).toFixed()} / ${Math.ceil(count / limit)}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    onClick: onNext,
    disabled: offset >= Math.abs(count - limit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }))));
  const itemList = queues.map(({
    id,
    created_at,
    org_id,
    n_tasks,
    name
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
      key: id,
      onClick: () => history.push(`/queues/${id}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      }
    }, id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      }
    }, org_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_9__["default"])(name),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_19__["colorFromString"])(name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      }
    }, created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'center',
        color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      }
    }, n_tasks));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageHeader: pageHeader,
    itemList: itemList,
    pageFooter: pageFooter,
    emptyList: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_16__["default"], {
      svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }),
      header: 'No tasks here…',
      subHeader: 'Try using different filters.',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    }
  }), menuPortalQueue( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    menuProps: menuPropsQueue,
    menuItems: wMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    }
  })), menuPortalCb( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    menuProps: menuPropsCb,
    menuItems: cbMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Outstanding);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29uQnV0dG9uV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93TGVmdFNWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93UmlnaHRTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eUF1ZGl0c1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0ZpbHRlclNWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9BdWRpdHNSb290LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvT3V0c3RhbmRpbmdSb290LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvY29tcG9uZW50cy9PdXRzdGFuZGluZy50c3giXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiV3JhcHBlciIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiVGl0bGUiLCJjb2xvciIsIlBBTEVUVEUiLCJURVhUX01BSU4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJTdWJUaXRsZSIsIlBSSU1BUllfTUFJTiIsIkVtcHR5UGFnZSIsInN2ZyIsImhlYWRlciIsInN1YkhlYWRlciIsImJ1dHRvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiQ29udGFpbmVyIiwiUGxhaW5CdXR0b24iLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsIkJBQ0tHUk9VTkRfSE9WRVIiLCJJY29uQnV0dG9uIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwib25DbGljayIsInR5cGUiLCJjaGlsZHJlbiIsIkFycm93TGVmdFNWRyIsIm1lbW8iLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsIiwiZCIsIkFycm93UmlnaHRTVkciLCJFbXB0eUF1ZGl0c1NWRyIsIkJBQ0tHUk9VTkRfR1JBWV9NSUQiLCJGaWx0ZXJTVkciLCJTdGFuZGFyZE1lbnUiLCJtZW51UHJvcHMiLCJtZW51SXRlbXMiLCJNZW51IiwiYXJpYUxhYmVsIiwibWFwIiwibGFiZWwiLCJpZHgiLCJNZW51SXRlbSIsImtleSIsIkF1ZGl0c1Jvb3QiLCJ1c2VyIiwidXNlcnMiLCJhdWRpdHMiLCJzZXRBdWRpdHMiLCJ1c2VTdGF0ZSIsInF1ZXVlcyIsInNldFF1ZXVlcyIsIm9mZnNldCIsInNldE9mZnNldCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicXVldWVJZCIsInNldFF1ZXVlSWQiLCJ1bmRlZmluZWQiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJvcmdJZCIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwidGFza3MiLCJjb3VudCIsIlBBR0VfTElNSVQiLCJvbk5leHQiLCJ1c2VDYWxsYmFjayIsIk1hdGgiLCJhYnMiLCJvbkJhY2siLCJ1c2VFZmZlY3QiLCJmZXRjaEF1ZGl0cyIsInBheWxvYWQiLCJtZXRob2QiLCJwYXJhbXMiLCJsaW1pdCIsInF1ZXVlX2lkIiwid29ya2VyX2lkIiwiZGF0YSIsImh0dHBIYW5kbGVyIiwidGFza19zdGF0dXMiLCJMb2FkaW5nUGFnZSIsIkF1ZGl0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCIsIkNvbHVtbkNvbnRhaW5lciIsIkZvb3RlciIsIlBhZ2luYXRvciIsIkxhYmVsIiwibWFyZ2luTGVmdCIsInRleHRPdmVyZmxvdyIsIlNwYWNlciIsIkxpbmVJdGVtIiwiU21hbGxUZXh0IiwidGV4dEFsaWduIiwidXNlclNlbGVjdCIsIkF2YXRhckJsb2NrIiwiUGFnZUNvdW50IiwibWFyZ2luUmlnaHQiLCJsaW5lSGVpZ2h0IiwiUGFnaW5hdGVCdG4iLCJsZWZ0IiwiYmFja2dyb3VuZCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsIlN0eWxlZEVsIiwibWF4V2lkdGgiLCJIUiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJTdHlsZWRDb21tZW50c0ljb24iLCJJY29uIiwiVEVYVF9HUkFZIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJzZXBhcmF0b3IiLCJ3TWVudUl0ZW1zIiwidyIsImlkIiwibmFtZSIsInByZXYiLCJ1bnNoaWZ0IiwiY2JNZW51SXRlbXMiLCJ1IiwibWVudVBvcnRhbCIsIm1lbnVQb3J0YWxRdWV1ZSIsIm9yaWdpblJlZiIsIm9yaWdpblJlZlF1ZXVlIiwibWVudVByb3BzUXVldWUiLCJ0b2dnbGVQb3J0YWwiLCJ0b2dnbGVQb3J0YWxRdWV1ZSIsInVzZU1lbnUiLCJNZW51UG9zaXRpb24iLCJVUFBFUl9SSUdIVCIsImlzRHJvcGRvd24iLCJtZW51Q29udGVudFN0eWxlcyIsIm1lbnVQb3J0YWxDYiIsIm9yaWdpblJlZkNiIiwibWVudVByb3BzQ2IiLCJ0b2dnbGVQb3J0YWxDYiIsInBhZ2VIZWFkZXIiLCJMaXN0VGl0bGUiLCJGcmFnbWVudCIsIkljb25CdXR0b25XcmFwcGVyIiwiRmlsdGVySWNvbiIsImFsaWduIiwicGFnZUZvb3RlciIsImRpc2FibGVkIiwiQXJyb3dMZWZ0SWNvbiIsInRvRml4ZWQiLCJjZWlsIiwiQXJyb3dSaWdodEljb24iLCJhdWRpdERlY2lzaW9uSWNvbiIsIm51bGwiLCJmYWxzZSIsIkF1ZGl0RGVjaXNpb25JY29uIiwiU1RBVFVTX1BBTEVUVEUiLCJJTl9QUk9HUkVTUyIsInRydWUiLCJDT01QTEVURUQiLCJpdGVtTGlzdCIsInRhc2tJZCIsImNvbXBsZXRlZF9ieSIsImNvbXBsZXRlZEJ5IiwiY29tcGxldGVkX2F0IiwiY29tcGxldGVkQXQiLCJjb3JyZWN0IiwicXVldWUiLCJzb3VyY2UiLCJuX2NvbW1lbnRzIiwic291cmNlVGV4dFN0eWxlIiwiaW5jbHVkZXMiLCJwdXNoIiwicGF0aG5hbWUiLCJpc0F1ZGl0cyIsIkF2YXRhciIsImluaXRpYWxzIiwiZ2V0SW5pdGlhbHMiLCJjb2xvckZyb21TdHJpbmciLCJkYXlqcyIsImZvcm1hdCIsInN0eWxlIiwidGV4dFRyYW5zZm9ybSIsImp1c3RpZnlTZWxmIiwiTGlzdFBhZ2UiLCJlbXB0eUxpc3QiLCJFbXB0eUF1ZGl0c0ljb24iLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ2YWx1ZSIsImkiLCJsZW5ndGgiLCJvcCIsImZuIiwiYXJncyIsImNhbGwiLCJPdXRzdGFuZGluZ1Jvb3QiLCJzZXRDb3VudCIsImZldGNoUXVldWVzIiwiZXJyb3JzIiwiXyIsIl8yIiwiY29uc29sZSIsImVycm9yIiwidXNlRG9jdW1lbnRUaXRsZSIsIk91dHN0YW5kaW5nIiwiY3JlYXRlZF9hdCIsIm9yZ19pZCIsIm5fdGFza3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsS0FBb0Qsb0JBQW9CLFNBQTJELENBQUMs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SHRDLEtBQS9CLENBTDRCO0FBVTVCSCxVQUFNLEVBQUUsU0FWb0I7QUFVZEMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBVkksR0FBOUIsQ0FESixFQWFJeUgsZUFBZSxlQUFDOUgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZCLHVFQUFwQixFQUFrQztBQUFFQyxhQUFTLEVBQUVrRyxjQUFiO0FBQTZCakcsYUFBUyxFQUFFcUYsVUFBeEM7QUFBb0RuSCxVQUFNLEVBQUUsU0FBNUQ7QUFBa0VDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUE1RSxHQUFsQyxDQUFELENBYm5CLEVBY0lvSSxZQUFZLGVBQUN6SSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNkIsdUVBQXBCLEVBQWtDO0FBQUVDLGFBQVMsRUFBRTRHLFdBQWI7QUFBMEIzRyxhQUFTLEVBQUUyRixXQUFyQztBQUFrRHpILFVBQU0sRUFBRSxTQUExRDtBQUFnRUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQTFFLEdBQWxDLENBQUQsQ0FkaEIsQ0FERjtBQWtCRCxDQTFJRDs7QUE0SWUwTSwwRUFBZixFIiwiZmlsZSI6IkF1ZGl0c1Jvb3RfYWQwY2U2ZjI2MzRhNjE3NGQ1YWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LmRheWpzPWUoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWlsbGlzZWNvbmRcIixlPVwic2Vjb25kXCIsbj1cIm1pbnV0ZVwiLHI9XCJob3VyXCIsaT1cImRheVwiLHM9XCJ3ZWVrXCIsdT1cIm1vbnRoXCIsYT1cInF1YXJ0ZXJcIixvPVwieWVhclwiLGY9XCJkYXRlXCIsaD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVteMC05XSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8sYz0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csZD17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSwkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sbD17czokLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSskKHIsMixcIjBcIikrXCI6XCIrJChpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLHUpLHM9bi1pPDAsYT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksdSk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS1hOmEtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTpvLHc6cyxkOmksRDpmLGg6cixtOm4sczplLG1zOnQsUTphfVtoXXx8U3RyaW5nKGh8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0seT1cImVuXCIsTT17fTtNW3ldPWQ7dmFyIG09ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBTfSxEPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcjtpZighdClyZXR1cm4geTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClNW3RdJiYocj10KSxlJiYoTVt0XT1lLHI9dCk7ZWxzZXt2YXIgaT10Lm5hbWU7TVtpXT10LHI9aX1yZXR1cm4hbiYmciYmKHk9cikscnx8IW4mJnl9LHY9ZnVuY3Rpb24odCxlKXtpZihtKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgUyhuKX0sZz1sO2cubD1ELGcuaT1tLGcudz1mdW5jdGlvbih0LGUpe3JldHVybiB2KHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgUz1mdW5jdGlvbigpe2Z1bmN0aW9uIGQodCl7dGhpcy4kTD1EKHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCl9dmFyICQ9ZC5wcm90b3R5cGU7cmV0dXJuICQucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihnLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goaCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy4keD10Lnh8fHt9LHRoaXMuaW5pdCgpfSwkLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSwkLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBnfSwkLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKFwiSW52YWxpZCBEYXRlXCI9PT10aGlzLiRkLnRvU3RyaW5nKCkpfSwkLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPXYodCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sJC5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHYodCk8dGhpcy5zdGFydE9mKGUpfSwkLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8dih0KX0sJC4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGcudSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LCQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LCQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sJC5zdGFydE9mPWZ1bmN0aW9uKHQsYSl7dmFyIGg9dGhpcyxjPSEhZy51KGEpfHxhLGQ9Zy5wKHQpLCQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1nLncoaC4kdT9EYXRlLlVUQyhoLiR5LGUsdCk6bmV3IERhdGUoaC4keSxlLHQpLGgpO3JldHVybiBjP246bi5lbmRPZihpKX0sbD1mdW5jdGlvbih0LGUpe3JldHVybiBnLncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZShcInNcIiksKGM/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksaCl9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELEQ9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChkKXtjYXNlIG86cmV0dXJuIGM/JCgxLDApOiQoMzEsMTEpO2Nhc2UgdTpyZXR1cm4gYz8kKDEsTSk6JCgwLE0rMSk7Y2FzZSBzOnZhciB2PXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxTPSh5PHY/eSs3OnkpLXY7cmV0dXJuICQoYz9tLVM6bSsoNi1TKSxNKTtjYXNlIGk6Y2FzZSBmOnJldHVybiBsKEQrXCJIb3Vyc1wiLDApO2Nhc2UgcjpyZXR1cm4gbChEK1wiTWludXRlc1wiLDEpO2Nhc2UgbjpyZXR1cm4gbChEK1wiU2Vjb25kc1wiLDIpO2Nhc2UgZTpyZXR1cm4gbChEK1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sJC5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSwkLiRzZXQ9ZnVuY3Rpb24ocyxhKXt2YXIgaCxjPWcucChzKSxkPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSwkPShoPXt9LGhbaV09ZCtcIkRhdGVcIixoW2ZdPWQrXCJEYXRlXCIsaFt1XT1kK1wiTW9udGhcIixoW29dPWQrXCJGdWxsWWVhclwiLGhbcl09ZCtcIkhvdXJzXCIsaFtuXT1kK1wiTWludXRlc1wiLGhbZV09ZCtcIlNlY29uZHNcIixoW3RdPWQrXCJNaWxsaXNlY29uZHNcIixoKVtjXSxsPWM9PT1pP3RoaXMuJEQrKGEtdGhpcy4kVyk6YTtpZihjPT09dXx8Yz09PW8pe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZiwxKTt5LiRkWyRdKGwpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZixNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgJCYmdGhpcy4kZFskXShsKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sJC5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sJC5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbZy5wKHQpXSgpfSwkLmFkZD1mdW5jdGlvbih0LGEpe3ZhciBmLGg9dGhpczt0PU51bWJlcih0KTt2YXIgYz1nLnAoYSksZD1mdW5jdGlvbihlKXt2YXIgbj12KGgpO3JldHVybiBnLncobi5kYXRlKG4uZGF0ZSgpK01hdGgucm91bmQoZSp0KSksaCl9O2lmKGM9PT11KXJldHVybiB0aGlzLnNldCh1LHRoaXMuJE0rdCk7aWYoYz09PW8pcmV0dXJuIHRoaXMuc2V0KG8sdGhpcy4keSt0KTtpZihjPT09aSlyZXR1cm4gZCgxKTtpZihjPT09cylyZXR1cm4gZCg3KTt2YXIgJD0oZj17fSxmW25dPTZlNCxmW3JdPTM2ZTUsZltlXT0xZTMsZilbY118fDEsbD10aGlzLiRkLmdldFRpbWUoKSt0KiQ7cmV0dXJuIGcudyhsLHRoaXMpfSwkLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LCQuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVyblwiSW52YWxpZCBEYXRlXCI7dmFyIG49dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLHI9Zy56KHRoaXMpLGk9dGhpcy4kbG9jYWxlKCkscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1pLndlZWtkYXlzLGY9aS5tb250aHMsaD1mdW5jdGlvbih0LHIsaSxzKXtyZXR1cm4gdCYmKHRbcl18fHQoZSxuKSl8fGlbcl0uc3Vic3RyKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGcucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1pLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpnLnMoYSsxLDIsXCIwXCIpLE1NTTpoKGkubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpnLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKGkud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKGkud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOmcucyhzLDIsXCIwXCIpLGg6ZCgxKSxoaDpkKDIpLGE6JChzLHUsITApLEE6JChzLHUsITEpLG06U3RyaW5nKHUpLG1tOmcucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOmcucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpnLnModGhpcy4kbXMsMyxcIjBcIiksWjpyfTtyZXR1cm4gbi5yZXBsYWNlKGMsZnVuY3Rpb24odCxlKXtyZXR1cm4gZXx8bFt0XXx8ci5yZXBsYWNlKFwiOlwiLFwiXCIpfSl9LCQudXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LCQuZGlmZj1mdW5jdGlvbih0LGYsaCl7dmFyIGMsZD1nLnAoZiksJD12KHQpLGw9NmU0KigkLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpLHk9dGhpcy0kLE09Zy5tKHRoaXMsJCk7cmV0dXJuIE09KGM9e30sY1tvXT1NLzEyLGNbdV09TSxjW2FdPU0vMyxjW3NdPSh5LWwpLzYwNDhlNSxjW2ldPSh5LWwpLzg2NGU1LGNbcl09eS8zNmU1LGNbbl09eS82ZTQsY1tlXT15LzFlMyxjKVtkXXx8eSxoP006Zy5hKE0pfSwkLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YodSkuJER9LCQuJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBNW3RoaXMuJExdfSwkLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPUQodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sJC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBnLncodGhpcy4kZCx0aGlzKX0sJC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSwkLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sJC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LCQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxkfSgpLHA9Uy5wcm90b3R5cGU7cmV0dXJuIHYucHJvdG90eXBlPXAsW1tcIiRtc1wiLHRdLFtcIiRzXCIsZV0sW1wiJG1cIixuXSxbXCIkSFwiLHJdLFtcIiRXXCIsaV0sW1wiJE1cIix1XSxbXCIkeVwiLG9dLFtcIiREXCIsZl1dLmZvckVhY2goZnVuY3Rpb24odCl7cFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSksdi5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxTLHYpLHQuJGk9ITApLHZ9LHYubG9jYWxlPUQsdi5pc0RheWpzPW0sdi51bml4PWZ1bmN0aW9uKHQpe3JldHVybiB2KDFlMyp0KX0sdi5lbj1NW3ldLHYuTHM9TSx2LnA9e30sdn0pO1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRlxufSlcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMjQsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWFyZ2luOiAnMjBweCAwIDE1cHgnXG59KVxuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNixcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW46ICcwcHggMCAyMHB4JyxcbiAgJz4gZGl2ID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgRW1wdHlQYWdlID0gKHtzdmcsIGhlYWRlciwgc3ViSGVhZGVyLCBidXR0b259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICwgc3ZnXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fSwgaGVhZGVyKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIHN1YkhlYWRlcilcbiAgICAgICwgYnV0dG9uXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UGFnZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25CdXR0b25XcmFwcGVyLnRzeFwiOy8vIFRPRE8gcmVwbGFjZSBJY29uQnV0dG9uXG5pbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUlxuICB9XG59KVxuXG5jb25zdCBJY29uQnV0dG9uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7b25DbGljaywgdHlwZSwgY2hpbGRyZW59ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyByZWY6IHJlZiwgb25DbGljazogb25DbGljaywgdHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX1cbiAgICAgICwgY2hpbGRyZW5cbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcnJvd0xlZnRTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTNcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTNcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xNDMuNDkyIDIyMS44NjNMMzM2LjIyNiAyOS4xMjljNi42NjMtNi42NjQgNi42NjMtMTcuNDY4IDAtMjQuMTMyLTYuNjY1LTYuNjYyLTE3LjQ2OC02LjY2Mi0yNC4xMzIgMGwtMjA0LjggMjA0LjhjLTYuNjYyIDYuNjY0LTYuNjYyIDE3LjQ2OCAwIDI0LjEzMmwyMDQuOCAyMDQuOGM2Ljc4IDYuNTQ4IDE3LjU4NCA2LjM2IDI0LjEzMi0uNDIgNi4zODctNi42MTQgNi4zODctMTcuMDk5IDAtMjMuNzEyTDE0My40OTIgMjIxLjg2M3pcIiAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFycm93TGVmdFNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93UmlnaHRTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcnJvd1JpZ2h0U1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjEzXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjEzXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMzM2LjIyNiAyMDkuNTkxbC0yMDQuOC0yMDQuOGMtNi43OC02LjU0OC0xNy41ODQtNi4zNi0yNC4xMzIuNDItNi4zODggNi42MTQtNi4zODggMTcuMDk5IDAgMjMuNzEybDE5Mi43MzQgMTkyLjczNC0xOTIuNzM0IDE5Mi43MzRjLTYuNjYzIDYuNjY0LTYuNjYzIDE3LjQ2OCAwIDI0LjEzMiA2LjY2NSA2LjY2MyAxNy40NjggNi42NjMgMjQuMTMyIDBsMjA0LjgtMjA0LjhjNi42NjMtNi42NjUgNi42NjMtMTcuNDY4IDAtMjQuMTMyelwiICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dSaWdodFNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5QXVkaXRzU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgRW1wdHlBdWRpdHNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBmaWxsOiBQQUxFVFRFLkJBQ0tHUk9VTkRfR1JBWV9NSUQsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiICAgLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0wIDBoMjR2MjRIMHpcIiAsIGZpbGw6IFwibm9uZVwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTYgMTVoLTJ2LTJoMnYyem0wLTRoLTJWOGgydjZ6bS0xLTljLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlBdWRpdHNTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cbmNvbnN0IEZpbHRlclNWRyA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjb2xvcn0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IGNvbG9yIHx8IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTF9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xNzguNSAzODIuNWgxMDJ2LTUxaC0xMDJ2NTF6TTAgNzYuNXY1MWg0NTl2LTUxSDB6TTc2LjUgMjU1aDMwNnYtNTFoLTMwNnY1MXpcIiAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3RhbmRhcmRNZW51LnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcblxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5cblxuXG5cblxuXG5jb25zdCBTdGFuZGFyZE1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgbWVudUl0ZW1zfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ1N0YW5kYXJkIGRyb3Bkb3duIG1lbnUnLCAuLi5tZW51UHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19XG4gICAgICAsIG1lbnVJdGVtcy5tYXAoKHtsYWJlbCwgb25DbGlja30sIGlkeCkgPT4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogaWR4LCBsYWJlbDogbGFiZWwsIG9uQ2xpY2s6IG9uQ2xpY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNn19IClcbiAgICAgICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9BdWRpdHNSb290LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXVkaXRzIGZyb20gJy4vY29tcG9uZW50cy9BdWRpdHMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5cbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Mb2FkaW5nUGFnZSdcblxuXG5cblxuXG5cbmNvbnN0IEF1ZGl0c1Jvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXIsIHVzZXJzfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IFthdWRpdHMsIHNldEF1ZGl0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3F1ZXVlcywgc2V0UXVldWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxdWV1ZUlkLCBzZXRRdWV1ZUlkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IHt0YXNrcywgY291bnR9ID0gYXVkaXRzIHx8IHt9XG4gIGNvbnN0IFBBR0VfTElNSVQgPSA1MFxuXG4gIGNvbnN0IG9uTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAob2Zmc2V0IDwgTWF0aC5hYnMoY291bnQgLSBQQUdFX0xJTUlUKSkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCArIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgY29uc3Qgb25CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvZmZzZXQgPj0gUEFHRV9MSU1JVCkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCAtIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEF1ZGl0cygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxpbWl0OiBQQUdFX0xJTUlULFxuICAgICAgICAgIHF1ZXVlX2lkOiBxdWV1ZUlkLFxuICAgICAgICAgIHdvcmtlcl9pZDogdXNlcklkLFxuICAgICAgICAgIG9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICAgIGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvdGFza3MvY29tcGxldGVkYCxcbiAgICAgICAgcGF5bG9hZFxuICAgICAgKVxuICAgICAgY29uc3Qge2RhdGE6IHF1ZXVlc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3F1ZXVlc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdGFza19zdGF0dXM6ICdjb21wbGV0ZWQnXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldEF1ZGl0cyhkYXRhKVxuICAgICAgc2V0UXVldWVzKHF1ZXVlcylcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZmV0Y2hBdWRpdHMoKVxuICB9LCBbcXVldWVJZCwgdXNlcklkLCBvZmZzZXQsIHVzZXJdKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OX19IClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXRzLCB7XG4gICAgICB0YXNrczogdGFza3MgfHwgW10sXG4gICAgICBjb3VudDogY291bnQsXG4gICAgICBvbk5leHQ6IG9uTmV4dCxcbiAgICAgIG9uQmFjazogb25CYWNrLFxuICAgICAgbGltaXQ6IFBBR0VfTElNSVQsXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIHF1ZXVlczogcXVldWVzLFxuICAgICAgc2V0UXVldWVJZDogc2V0UXVldWVJZCxcbiAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICB1c2VyczogdXNlcnMsXG4gICAgICBzZXRVc2VySWQ6IHNldFVzZXJJZCxcbiAgICAgIHVzZXJJZDogdXNlcklkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2Vyc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEF1ZGl0c1Jvb3QpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXRzLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgTGlzdFBhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFBhZ2UnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IEFycm93TGVmdEljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dMZWZ0U1ZHJ1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93UmlnaHRTVkcnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SW5pdGlhbHMnXG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdjbGllbnQvaG9va3MvdXNlTWVudSdcbmltcG9ydCB7TWVudVBvc2l0aW9ufSBmcm9tICdjbGllbnQvaG9va3MvdXNlQ29vcmRzJ1xuaW1wb3J0IExpc3RUaXRsZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0VGl0bGUnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCBGaWx0ZXJJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0ZpbHRlclNWRydcbmltcG9ydCBFbXB0eVBhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlJ1xuaW1wb3J0IEVtcHR5QXVkaXRzSWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eUF1ZGl0c1NWRydcbmltcG9ydCBJY29uQnV0dG9uV3JhcHBlciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29uQnV0dG9uV3JhcHBlcidcblxuaW1wb3J0IHtjb2xvckZyb21TdHJpbmd9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCB7QXVkaXREZWNpc2lvbkljb259IGZyb20gJ3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svY29tcG9uZW50cy9TaWRlYmFyJ1xuaW1wb3J0IHtTVEFUVVNfUEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDQwLFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTgwcHggMTAwcHggMTAwcHggODBweCAxMDBweCcsXG4gIGdyaWRDb2x1bW5HYXA6IDE1XG59KVxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBtYXhXaWR0aDogJzgwJScsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDBweCAyMDBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBQYWdpbmF0b3IgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW4oe1xuICBtYXJnaW5MZWZ0OiA3LFxuICB3aWR0aDogJzEwMCUnLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5SaWdodDogNyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgTGluZUl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdwb2ludGVyICFpbXBvcnRhbnQnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE0LFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFBhZ2VDb3VudCA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNCxcbiAgZm9udFdlaWdodDogNDAwLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSLFxuICBtYXJnaW5MZWZ0OiAyLFxuICBtYXJnaW5SaWdodDogMixcbiAgd2lkdGg6ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICBoZWlnaHQ6IDI1LFxuICBsaW5lSGVpZ2h0OiAnMjVweCdcbn0pXG5cbmNvbnN0IFBhZ2luYXRlQnRuID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe2xlZnR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAyNSxcbiAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgd2lkdGg6IDMwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogbGVmdCA/IDAgOiA0LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBsZWZ0ID8gMCA6IDQsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogbGVmdCA/IDQgOiAwLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGxlZnQgPyA0IDogMFxuICB9XG59KVxuXG5jb25zdCBTdHlsZWRFbCA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW46ICcwIDE1cHgnLFxuICBwYWRkaW5nOiAnN3B4IDAnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1heFdpZHRoOiAzNTAsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgSFIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiAxLFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxufSlcblxuY29uc3QgU3R5bGVkQ29tbWVudHNJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5SaWdodDogMTUsXG4gIG1hcmdpbkxlZnQ6IDQsXG4gIGZvbnRTaXplOiAxN1xufSlcblxuY29uc3QgQXVkaXRzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXNrcyxcbiAgICBjb3VudCxcbiAgICBvbk5leHQsXG4gICAgb25CYWNrLFxuICAgIGxpbWl0LFxuICAgIG9mZnNldCxcbiAgICBxdWV1ZXMsXG4gICAgc2V0UXVldWVJZCxcbiAgICBzZXRVc2VySWQsXG4gICAgcXVldWVJZCxcbiAgICB1c2VySWQsXG4gICAgdXNlcnNcbiAgfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBzZXBhcmF0b3IgPSB7bGFiZWw6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSFIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY2fX0gKX1cblxuICBjb25zdCB3TWVudUl0ZW1zID0gcXVldWVzLm1hcCgodykgPT4gKHtcbiAgICBsYWJlbDogcXVldWVJZCA9PT0gdy5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX0sIHcubmFtZSkgOiB3Lm5hbWUsXG4gICAgb25DbGljazogKCkgPT4gc2V0UXVldWVJZCgocHJldikgPT4gKHByZXYgPT09IHcuaWQgPyB1bmRlZmluZWQgOiB3LmlkKSlcbiAgfSkpXG4gIGlmIChxdWV1ZUlkKSB7XG4gICAgd01lbnVJdGVtcy51bnNoaWZ0KHNlcGFyYXRvcilcbiAgICB3TWVudUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiAnQ2xlYXIgZmlsdGVyJywgb25DbGljazogKCkgPT4gc2V0UXVldWVJZCh1bmRlZmluZWQpfSlcbiAgfVxuXG4gIGNvbnN0IGNiTWVudUl0ZW1zID0gdXNlcnMubWFwKCh1KSA9PiAoe1xuICAgIGxhYmVsOiB1c2VySWQgPT09IHUuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3OH19LCB1Lm5hbWUpIDogdS5uYW1lLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFVzZXJJZCgocHJldikgPT4gKHByZXYgPT09IHUuaWQgPyB1bmRlZmluZWQgOiB1LmlkKSlcbiAgfSkpXG4gIGlmICh1c2VySWQpIHtcbiAgICBjYk1lbnVJdGVtcy51bnNoaWZ0KHNlcGFyYXRvcilcbiAgICBjYk1lbnVJdGVtcy51bnNoaWZ0KHtsYWJlbDogJ0NsZWFyIGZpbHRlcicsIG9uQ2xpY2s6ICgpID0+IHNldFVzZXJJZCh1bmRlZmluZWQpfSlcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsUXVldWUsXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5SZWZRdWV1ZSxcbiAgICBtZW51UHJvcHM6IG1lbnVQcm9wc1F1ZXVlLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsUXVldWVcbiAgfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBtZW51Q29udGVudFN0eWxlczoge3dpZHRoOiAzNTB9XG4gIH0pXG5cbiAgY29uc3Qge1xuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDYixcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZkNiLFxuICAgIG1lbnVQcm9wczogbWVudVByb3BzQ2IsXG4gICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWxDYlxuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIG1lbnVDb250ZW50U3R5bGVzOiB7d2lkdGg6IDM1MH1cbiAgfSlcblxuICBjb25zdCBwYWdlSGVhZGVyID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sdW1uQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwN319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19LCBcIlRhc2sgSURcIiApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjExfX0sIFwiUXVldWUgTmFtZVwiIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbldyYXBwZXIsIHsgcmVmOiBvcmlnaW5SZWZRdWV1ZSwgb25DbGljazogdG9nZ2xlUG9ydGFsUXVldWUsIHR5cGU6IFwiYnV0dG9uXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTJ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbHRlckljb24sIHsgY29sb3I6IHF1ZXVlSWQgPyBQQUxFVFRFLlRFWFRfTUFJTiA6IFBBTEVUVEUuVEVYVF9HUkFZLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEzfX0gKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwgeyBhbGlnbjogXCJsZWZ0XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTd9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxOX19LCBcIkNvbXBsZXRlZCBCeVwiIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbldyYXBwZXIsIHsgcmVmOiBvcmlnaW5SZWZDYiwgb25DbGljazogdG9nZ2xlUG9ydGFsQ2IsIHR5cGU6IFwiYnV0dG9uXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjB9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbHRlckljb24sIHsgY29sb3I6IHVzZXJJZCA/IFBBTEVUVEUuVEVYVF9NQUlOIDogUEFMRVRURS5URVhUX0dSQVksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjF9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyNX19LCBcIkNvbXBsZXRlZCBBdFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjZ9fSwgXCJTb3VyY2VcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjd9fSwgXCJDb21tZW50c1wiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjh9fSwgXCJBdWRpdFwiKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM0fX0sIGNvdW50LCBcIiBDb21wbGV0ZWQgdGFza3NcIiAgKVxuICAgICAgLCBjb3VudCA+IGxpbWl0ICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0b3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgbGVmdDogdHJ1ZSwgb25DbGljazogb25CYWNrLCBkaXNhYmxlZDogb2Zmc2V0IDwgbGltaXQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzd9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93TGVmdEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM4fX0gKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvdW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0MH19LCBgJHsob2Zmc2V0IC8gbGltaXQgKyAxKS50b0ZpeGVkKCl9IC8gJHtNYXRoLmNlaWwoY291bnQgLyBsaW1pdCl9YClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgb25DbGljazogb25OZXh0LCBkaXNhYmxlZDogb2Zmc2V0ID49IE1hdGguYWJzKGNvdW50IC0gbGltaXQpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQxfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvd1JpZ2h0SWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDJ9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgY29uc3QgYXVkaXREZWNpc2lvbkljb24gPSB7XG4gICAgbnVsbDogbnVsbCxcbiAgICBmYWxzZTogUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdERlY2lzaW9uSWNvbiwgeyBjb2xvcjogU1RBVFVTX1BBTEVUVEUuSU5fUFJPR1JFU1MsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTF9fSwgXCJjYW5jZWxcIiksXG4gICAgdHJ1ZTogUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdERlY2lzaW9uSWNvbiwgeyBjb2xvcjogU1RBVFVTX1BBTEVUVEUuQ09NUExFVEVELCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjUyfX0sIFwiY2hlY2tfY2lyY2xlXCIpXG4gIH1cblxuICBjb25zdCBpdGVtTGlzdCA9IHRhc2tzLm1hcChcbiAgICAoe1xuICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgIGNvbXBsZXRlZF9ieTogY29tcGxldGVkQnksXG4gICAgICBjb21wbGV0ZWRfYXQ6IGNvbXBsZXRlZEF0LFxuICAgICAgY29ycmVjdCxcbiAgICAgIHF1ZXVlOiBuYW1lLFxuICAgICAgc291cmNlLFxuICAgICAgbl9jb21tZW50c1xuICAgIH0pID0+IHtcbiAgICAgIGxldCBzb3VyY2VUZXh0U3R5bGUgPSAnbm9uZSdcbiAgICAgIHNvdXJjZVRleHRTdHlsZSA9IFsnbWFudWFsJywgJ3phcGllciddLmluY2x1ZGVzKHNvdXJjZSkgPyAnY2FwaXRhbGl6ZScgOiBzb3VyY2VUZXh0U3R5bGVcbiAgICAgIHNvdXJjZVRleHRTdHlsZSA9IFsnYXBpJ10uaW5jbHVkZXMoc291cmNlKSA/ICd1cHBlcmNhc2UnIDogc291cmNlVGV4dFN0eWxlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkNvbnRhaW5lciwge1xuICAgICAgICAgIGtleTogdGFza0lkLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogYC9xdWV1ZXMvdGFza3MvJHt0YXNrSWR9L2F1ZGl0YCxcbiAgICAgICAgICAgICAgc3RhdGU6IHtpc0F1ZGl0czogdHJ1ZX1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY5fX1cbiAgICAgICAgXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OH19LCB0YXNrSWQpXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OX19LCBuYW1lKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODB9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4MX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHsgaW5pdGlhbHM6IGdldEluaXRpYWxzKGNvbXBsZXRlZEJ5KSwgY29sb3I6IGNvbG9yRnJvbVN0cmluZyhjb21wbGV0ZWRCeSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODJ9fSApXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODN9fSwgY29tcGxldGVkQnkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODZ9fSwgZGF5anMoY29tcGxldGVkQXQpLmZvcm1hdCgnREQtTU0tWVlZWScpKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogc291cmNlVGV4dFN0eWxlLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAganVzdGlmeVNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjg3fX1cbiAgICAgICAgICBcbiAgICAgICAgICAgICwgc291cmNlXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWVxuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5N319XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIG5fY29tbWVudHMgPiAwICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICwgbl9jb21tZW50c1xuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRDb21tZW50c0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA3fX0sIFwiY29tbWVudFwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2ZsZXgtc3RhcnQnXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzExfX1cbiAgICAgICAgICBcbiAgICAgICAgICAgICwgYXVkaXREZWNpc2lvbkljb25bY29ycmVjdF1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0UGFnZSwge1xuICAgICAgICBwYWdlSGVhZGVyOiBwYWdlSGVhZGVyLFxuICAgICAgICBpdGVtTGlzdDogaXRlbUxpc3QsXG4gICAgICAgIHBhZ2VGb290ZXI6IHBhZ2VGb290ZXIsXG4gICAgICAgIGVtcHR5TGlzdDogXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVBhZ2UsIHtcbiAgICAgICAgICAgIHN2ZzogUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eUF1ZGl0c0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMyfX0gKSxcbiAgICAgICAgICAgIGhlYWRlcjogJ05vIHRhc2tzIGhlcmXigKYnLFxuICAgICAgICAgICAgc3ViSGVhZGVyOiAnVHJ5IHVzaW5nIGRpZmZlcmVudCBmaWx0ZXJzLicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzF9fVxuICAgICAgICAgIClcbiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzI2fX1cbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbFF1ZXVlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhbmRhcmRNZW51LCB7IG1lbnVQcm9wczogbWVudVByb3BzUXVldWUsIG1lbnVJdGVtczogd01lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOH19ICkpXG4gICAgICAsIG1lbnVQb3J0YWxDYihSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc0NiLCBtZW51SXRlbXM6IGNiTWVudUl0ZW1zLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM5fX0gKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaXRzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvT3V0c3RhbmRpbmdSb290LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgT3V0c3RhbmRpbmcgZnJvbSAnLi9jb21wb25lbnRzL091dHN0YW5kaW5nJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICdjbGllbnQvaG9va3MvdXNlRG9jdW1lbnRUaXRsZSdcblxuXG5cblxuXG5cbmNvbnN0IE91dHN0YW5kaW5nUm9vdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlciwgdXNlcnN9ID0gcHJvcHMgfHwge31cbiAgY29uc3QgW3F1ZXVlcywgc2V0UXVldWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3F1ZXVlSWQsIHNldFF1ZXVlSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCBvcmdJZCA9IHVzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWRcbiAgY29uc3QgUEFHRV9MSU1JVCA9IDUwXG5cbiAgY29uc3Qgb25OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvZmZzZXQgPCBNYXRoLmFicyhjb3VudCAtIFBBR0VfTElNSVQpKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0ICsgUEFHRV9MSU1JVClcbiAgICB9XG4gIH0sIFtjb3VudCwgb2Zmc2V0XSlcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9mZnNldCA+PSBQQUdFX0xJTUlUKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0IC0gUEFHRV9MSU1JVClcbiAgICB9XG4gIH0sIFtjb3VudCwgb2Zmc2V0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVldWVzKCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhOiBxdWV1ZXN9ID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8yID0+IF8yKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pXSlcblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWV1ZXMhJywgZXJyb3JzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHF1ZXVlcykge1xuICAgICAgICAgIHNldENvdW50KHF1ZXVlcy5sZW5ndGgpXG4gICAgICAgICAgc2V0UXVldWVzKHF1ZXVlcylcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hRdWV1ZXMoKVxuICB9LCBbcXVldWVJZCwgdXNlcklkLCBvZmZzZXQsIHVzZXJdKVxuXG4gIHVzZURvY3VtZW50VGl0bGUoJ091dHN0YW5kaW5nIFF1ZXVlcyB8IEh1bWFuIExhbWJkYXMnKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19IClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0c3RhbmRpbmcsIHtcbiAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgIG9uTmV4dDogb25OZXh0LFxuICAgICAgb25CYWNrOiBvbkJhY2ssXG4gICAgICBsaW1pdDogUEFHRV9MSU1JVCxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgcXVldWVzOiBxdWV1ZXMsXG4gICAgICBzZXRRdWV1ZUlkOiBzZXRRdWV1ZUlkLFxuICAgICAgcXVldWVJZDogcXVldWVJZCxcbiAgICAgIHVzZXJzOiB1c2VycyxcbiAgICAgIHNldFVzZXJJZDogc2V0VXNlcklkLFxuICAgICAgdXNlcklkOiB1c2VySWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoT3V0c3RhbmRpbmdSb290KVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL2NvbXBvbmVudHMvT3V0c3RhbmRpbmcudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBMaXN0UGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZSdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQgQXJyb3dMZWZ0SWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcnXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dSaWdodFNWRydcbmltcG9ydCBBdmF0YXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IGdldEluaXRpYWxzIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJbml0aWFscydcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9oZWxwZXJzL3RleHRPdmVyZmxvdydcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQgTGlzdFRpdGxlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RQYWdlL0xpc3RUaXRsZSdcbmltcG9ydCBTdGFuZGFyZE1lbnUgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvU3RhbmRhcmRNZW51J1xuaW1wb3J0IEZpbHRlckljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRmlsdGVyU1ZHJ1xuaW1wb3J0IEVtcHR5UGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UnXG5pbXBvcnQgRW1wdHlBdWRpdHNJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5QXVkaXRzU1ZHJ1xuaW1wb3J0IEljb25CdXR0b25XcmFwcGVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25CdXR0b25XcmFwcGVyJ1xuXG5pbXBvcnQge2NvbG9yRnJvbVN0cmluZ30gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldENvbG9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDQwLFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICc4MHB4IDEwMHB4IDFmciAxODBweCAxNTBweCcsXG4gIGdyaWRDb2x1bW5HYXA6IDE1XG59KVxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBtYXhXaWR0aDogJzgwJScsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDBweCAyMDBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBQYWdpbmF0b3IgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW4oe1xuICBtYXJnaW5MZWZ0OiA3LFxuICB3aWR0aDogJzEwMCUnLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5SaWdodDogNyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgTGluZUl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdwb2ludGVyICFpbXBvcnRhbnQnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE0LFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFBhZ2VDb3VudCA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNCxcbiAgZm9udFdlaWdodDogNDAwLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSLFxuICBtYXJnaW5MZWZ0OiAyLFxuICBtYXJnaW5SaWdodDogMixcbiAgd2lkdGg6ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICBoZWlnaHQ6IDI1LFxuICBsaW5lSGVpZ2h0OiAnMjVweCdcbn0pXG5cbmNvbnN0IFBhZ2luYXRlQnRuID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe2xlZnR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAyNSxcbiAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgd2lkdGg6IDMwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogbGVmdCA/IDAgOiA0LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBsZWZ0ID8gMCA6IDQsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogbGVmdCA/IDQgOiAwLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGxlZnQgPyA0IDogMFxuICB9XG59KVxuXG5jb25zdCBTdHlsZWRFbCA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW46ICcwIDE1cHgnLFxuICBwYWRkaW5nOiAnN3B4IDAnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1heFdpZHRoOiAzNTAsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgSFIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiAxLFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxufSlcblxuY29uc3QgT3V0c3RhbmRpbmcgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvdW50LFxuICAgIG9uTmV4dCxcbiAgICBvbkJhY2ssXG4gICAgbGltaXQsXG4gICAgb2Zmc2V0LFxuICAgIHF1ZXVlcyxcbiAgICBzZXRRdWV1ZUlkLFxuICAgIHNldFVzZXJJZCxcbiAgICBxdWV1ZUlkLFxuICAgIHVzZXJJZCxcbiAgICB1c2Vyc1xuICB9ID0gcHJvcHNcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGNvbnN0IHNlcGFyYXRvciA9IHtsYWJlbDogUmVhY3QuY3JlYXRlRWxlbWVudChIUiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTJ9fSApfVxuXG4gIGNvbnN0IHdNZW51SXRlbXMgPSBxdWV1ZXMubWFwKCh3KSA9PiAoe1xuICAgIGxhYmVsOiBxdWV1ZUlkID09PSB3LmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTV9fSwgdy5uYW1lKSA6IHcubmFtZSxcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRRdWV1ZUlkKChwcmV2KSA9PiAocHJldiA9PT0gdy5pZCA/IHVuZGVmaW5lZCA6IHcuaWQpKVxuICB9KSlcbiAgaWYgKHF1ZXVlSWQpIHtcbiAgICB3TWVudUl0ZW1zLnVuc2hpZnQoc2VwYXJhdG9yKVxuICAgIHdNZW51SXRlbXMudW5zaGlmdCh7bGFiZWw6ICdDbGVhciBmaWx0ZXInLCBvbkNsaWNrOiAoKSA9PiBzZXRRdWV1ZUlkKHVuZGVmaW5lZCl9KVxuICB9XG5cbiAgY29uc3QgY2JNZW51SXRlbXMgPSB1c2Vycy5tYXAoKHUpID0+ICh7XG4gICAgbGFiZWw6IHVzZXJJZCA9PT0gdS5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY0fX0sIHUubmFtZSkgOiB1Lm5hbWUsXG4gICAgb25DbGljazogKCkgPT4gc2V0VXNlcklkKChwcmV2KSA9PiAocHJldiA9PT0gdS5pZCA/IHVuZGVmaW5lZCA6IHUuaWQpKVxuICB9KSlcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNiTWVudUl0ZW1zLnVuc2hpZnQoc2VwYXJhdG9yKVxuICAgIGNiTWVudUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiAnQ2xlYXIgZmlsdGVyJywgb25DbGljazogKCkgPT4gc2V0VXNlcklkKHVuZGVmaW5lZCl9KVxuICB9XG5cbiAgY29uc3Qge1xuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxRdWV1ZSxcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZlF1ZXVlLFxuICAgIG1lbnVQcm9wczogbWVudVByb3BzUXVldWUsXG4gICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWxRdWV1ZVxuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIG1lbnVDb250ZW50U3R5bGVzOiB7d2lkdGg6IDM1MH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgbWVudVBvcnRhbDogbWVudVBvcnRhbENiLFxuICAgIG9yaWdpblJlZjogb3JpZ2luUmVmQ2IsXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNDYixcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbENiXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgbWVudUNvbnRlbnRTdHlsZXM6IHt3aWR0aDogMzUwfVxuICB9KVxuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Db250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk0fX0sIFwiUXVldWUgSURcIiApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5NX19LCBcIk9yZyBJRFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTh9fSwgXCJRdWV1ZSBOYW1lXCIgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uV3JhcHBlciwgeyByZWY6IG9yaWdpblJlZlF1ZXVlLCBvbkNsaWNrOiB0b2dnbGVQb3J0YWxRdWV1ZSwgdHlwZTogXCJidXR0b25cIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5OX19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsdGVySWNvbiwgeyBjb2xvcjogcXVldWVJZCA/IFBBTEVUVEUuVEVYVF9NQUlOIDogUEFMRVRURS5URVhUX0dSQVksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IGFsaWduOiBcImNlbnRlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA0fX0sIFwiQ3JlYXRlZCBBdFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDV9fSwgXCJQZW5kaW5nIFRhc2tzXCIgKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjExfX0sIGNvdW50LCBcIiBDb21wbGV0ZWQgdGFza3NcIiAgKVxuICAgICAgLCBjb3VudCA+IGxpbWl0ICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0b3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEzfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgbGVmdDogdHJ1ZSwgb25DbGljazogb25CYWNrLCBkaXNhYmxlZDogb2Zmc2V0IDwgbGltaXQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTR9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93TGVmdEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE1fX0gKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvdW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxN319LCBgJHsob2Zmc2V0IC8gbGltaXQgKyAxKS50b0ZpeGVkKCl9IC8gJHtNYXRoLmNlaWwoY291bnQgLyBsaW1pdCl9YClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgb25DbGljazogb25OZXh0LCBkaXNhYmxlZDogb2Zmc2V0ID49IE1hdGguYWJzKGNvdW50IC0gbGltaXQpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE4fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvd1JpZ2h0SWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgY29uc3QgaXRlbUxpc3QgPSBxdWV1ZXMubWFwKCh7aWQsIGNyZWF0ZWRfYXQsIG9yZ19pZCwgbl90YXNrcywgbmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Db250YWluZXIsIHtcbiAgICAgICAga2V5OiBpZCxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXMvJHtpZH1gKVxuICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjh9fVxuICAgICAgXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzR9fSwgaWQpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzV9fSwgb3JnX2lkKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzd9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXJCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwgeyBpbml0aWFsczogZ2V0SW5pdGlhbHMobmFtZSksIGNvbG9yOiBjb2xvckZyb21TdHJpbmcobmFtZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzl9fSApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQwfX0sIGNyZWF0ZWRfYXQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbiAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQzfX1cbiAgICAgICAgXG4gICAgICAgICAgLCBuX3Rhc2tzXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBhZ2UsIHtcbiAgICAgICAgcGFnZUhlYWRlcjogcGFnZUhlYWRlcixcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1MaXN0LFxuICAgICAgICBwYWdlRm9vdGVyOiBwYWdlRm9vdGVyLFxuICAgICAgICBlbXB0eUxpc3Q6IFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlQYWdlLCB7XG4gICAgICAgICAgICBzdmc6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlBdWRpdHNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2NH19ICksXG4gICAgICAgICAgICBoZWFkZXI6ICdObyB0YXNrcyBoZXJl4oCmJyxcbiAgICAgICAgICAgIHN1YkhlYWRlcjogJ1RyeSB1c2luZyBkaWZmZXJlbnQgZmlsdGVycy4nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjYzfX1cbiAgICAgICAgICApXG4gICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1OH19XG4gICAgICApXG4gICAgICAsIG1lbnVQb3J0YWxRdWV1ZShSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc1F1ZXVlLCBtZW51SXRlbXM6IHdNZW51SXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzB9fSApKVxuICAgICAgLCBtZW51UG9ydGFsQ2IoUmVhY3QuY3JlYXRlRWxlbWVudChTdGFuZGFyZE1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHNDYiwgbWVudUl0ZW1zOiBjYk1lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MX19ICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dHN0YW5kaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9