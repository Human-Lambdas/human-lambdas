(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["QueueContainer"],{

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,t,e,o){return n.fromToBase(r,t,e,o)}e.en.relativeTime=o,n.fromToBase=function(t,n,i,d,u){for(var a,f,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(a=d?e(t).diff(i,y.d,!0):i.diff(t,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(a));if(s=a>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),f="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return f;var M=s?l.future:l.past;return"function"==typeof M?M(f):M.replace("%s",f)},n.to=function(r,t){return i(r,t,this,!0)},n.from=function(r,t){return i(r,t,this)};var d=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}});


/***/ }),

/***/ "./src/client/components/ActionButton.tsx":
/*!************************************************!*\
  !*** ./src/client/components/ActionButton.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");




const ActionButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e469vky0"
})(({
  waiting,
  disabled
}) => {
  //const {waiting, disabled} = props
  //const isDisabled = disabled || waiting
  return {
    height: 28,
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
    fontWeight: 500,
    fontSize: 14,
    outline: 0,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    margin: 0,
    borderRadius: 4,
    border: `1px solid transparent`,
    transition: 'all 0.25s ease-in-out',
    padding: '0 10px',
    ':hover': {
      backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    },
    ':focus, :active': {
      boxShadow: `0 0 0 3px ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
      backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  };
});

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

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

/***/ "./src/client/components/FlatButton.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/FlatButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");




const FlatButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "ef4saif0"
})(props => {
  const {
    waiting,
    disabled
  } = props;
  const isDisabled = disabled || waiting;
  return {
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
    color: '#fff',
    borderRadius: 4,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    ':hover': {
      backgroundColor: !isDisabled && styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK
    },
    ':active, :focus': {
      boxShadow: `0 0 0 3px ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
      backgroundColor: !isDisabled && styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_LIGHTER
    }
  };
});

/* harmony default export */ __webpack_exports__["default"] = (FlatButton);

/***/ }),

/***/ "./src/client/components/QueueActionsMenu.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/QueueActionsMenu.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/QueueActionsMenu.tsx";








const MenuContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "exa4tei0"
})({
  name: "1domaf0",
  styles: "width:200px;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "exa4tei1"
})({
  display: 'block',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_GRAY,
  marginRight: 15,
  fontSize: 18
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "exa4tei2"
})({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  fontWeight: 400,
  padding: '5px 15px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN
});

const QueueActionsMenu = props => {
  const {
    menuProps,
    queueId,
    onDelete,
    onFlush,
    selectedQueue
  } = props;
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Add queue tasks'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, "edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, "Edit queue")),
    onClick: () => history.push({
      pathname: `/queues/${queueId}/edit`,
      state: {
        prevRoute: history.location.pathname
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, "content_copy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, "Clone queue")),
    onClick: () => history.push({
      pathname: '/queues/new',
      state: {
        hasClone: true,
        clonedQueue: {
          data: selectedQueue.data,
          name: `${selectedQueue.name} Copy`,
          id: selectedQueue.id
        }
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    }, "undo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, "Delete all tasks")),
    onClick: onFlush,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      }
    }, "delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      }
    }, "Delete queue")),
    onClick: onDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  })));
};

const mapStateToProps = state => ({
  selectedQueue: state.queues.selectedQueue
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(QueueActionsMenu));

/***/ }),

/***/ "./src/client/components/QueueFilterColumnMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/client/components/QueueFilterColumnMenu.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/QueueFilterColumnMenu.tsx";

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









const MenuContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fl7lhr0"
})({
  name: "1domaf0",
  styles: "width:200px;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e1fl7lhr1"
})({
  display: 'block',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_GRAY,
  marginRight: 15,
  fontSize: 18
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fl7lhr2"
})({
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  fontWeight: 400,
  padding: '5px 5px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN
});

const LabelText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fl7lhr3"
})({
  name: "1h2ruwl",
  styles: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
});

const QueueFilterColumnMenu = props => {
  const {
    menuProps,
    queue,
    setPinnedBlock,
    activeBlockName
  } = props;

  if (!queue || !Array.isArray(queue.data)) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Filter queue tasks'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), queue.data.map((block, id) => {
    if (!universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["FILTER_BLOCK_TYPES"].includes(block.type)) {
      return null;
    } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: id,
      isActive: activeBlockName === block.name,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _optionalChain([universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCKS"], 'access', _ => _.find, 'call', _2 => _2(b => b.type === block.type), 'optionalAccess', _3 => _3.icon])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, block.name)),
      onClick: () => {
        setPinnedBlock(block.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    });
  }), activeBlockName != '' && activeBlockName != null && activeBlockName != 'ID' && typeof activeBlockName !== 'undefined' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraSpace: true,
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }, "refresh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    }, "Reset to ID")),
    onClick: () => {
      setPinnedBlock(null);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })));
};

const mapStateToProps = state => ({
  selectedQueue: state.queues.selectedQueue
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(QueueFilterColumnMenu));

/***/ }),

/***/ "./src/client/hooks/useDocumentTitle.ts":
/*!**********************************************!*\
  !*** ./src/client/hooks/useDocumentTitle.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDocumentTitle = title => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.title = title;
  }, [title]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDocumentTitle);

/***/ }),

/***/ "./src/client/utils/capitalizeFirstLetter.ts":
/*!***************************************************!*\
  !*** ./src/client/utils/capitalizeFirstLetter.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

/* harmony default export */ __webpack_exports__["default"] = (capitalizeFirstLetter);

/***/ }),

/***/ "./src/universal/components/Avatar.tsx":
/*!*********************************************!*\
  !*** ./src/universal/components/Avatar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/getFirstLetter */ "./src/universal/utils/getFirstLetter.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/Avatar.tsx";



const Avatar = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    initials,
    color,
    onClick,
    style,
    trim = true
  } = props;
  const backgroundColor = color || _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN;

  const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
    target: "ebmair80"
  })({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    testAlign: 'center',
    height: `20px`,
    width: `20px`,
    minWidth: `20px`,
    fontWeight: 700,
    fontSize: 11,
    color: '#fff',
    borderRadius: '100%',
    backgroundColor: backgroundColor,
    userSelect: 'none',
    margin: '0px 2px'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
    ref: ref,
    onClick: onClick,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, trim ? Object(universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__["default"])(initials) : initials);
});
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/universal/components/NewTaskMenu.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/NewTaskMenu.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var _client_components_FlatButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client/components/FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var client_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/utils/capitalizeFirstLetter */ "./src/client/utils/capitalizeFirstLetter.ts");
/* harmony import */ var universal_utils_cutOffString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/cutOffString */ "./src/universal/utils/cutOffString.ts");
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/TaskCheckbox */ "./src/universal/components/TaskCheckbox.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/TextEditor */ "./src/universal/components/TextEditor.tsx");
/* harmony import */ var universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! universal/components/DatePicker */ "./src/universal/components/DatePicker.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/NewTaskMenu.tsx";

















const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg0"
})({
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: client_utils_constants__WEBPACK_IMPORTED_MODULE_3__["BoxShadow"].MODAL
});

const MainTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg1"
})({
  name: "1xxpbhg",
  styles: "font-size:22px;font-weight:600;display:flex;align-items:center;margin-bottom:35px;"
});

const FormContent = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
  target: "ehbk6cg2"
})({
  name: "1yphs5z",
  styles: "padding:35px;"
});

const SubmissionSection = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg3"
})({
  name: "1htoikp",
  styles: "display:grid;grid-template-columns:repeat(2, auto);justify-content:space-between;padding-top:25px;"
});

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg4"
})({
  name: "1yqpl9u",
  styles: "display:grid;grid-gap:5px;align-items:center;margin-bottom:24px;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg5"
})({
  name: "r63kdz",
  styles: "font-weight:400;margin-right:20px;font-size:16px;width:100%;text-transform:capitalize;"
});

const Box = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg6"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const Options = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg7"
})({
  name: "32wkxh",
  styles: "max-height:62vh;overflow:auto;padding:8px 0px;"
});

const Question = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehbk6cg8"
})({
  name: "1m2twwy",
  styles: "font-weight:500;font-size:16px;"
});

const NewTaskMenu = props => {
  const {
    closePortal,
    format,
    onSubmitHandler
  } = props;
  const initialValues = {
    data: {},
    required: {}
  };
  format.map(item => {
    if (initialValues.data[item.type]) {
      initialValues.data[item.type][item.id] = '';
    } else {
      initialValues.data[item.type] = {
        [item.id]: ''
      };
    }

    if (item.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].BOUNDING_BOXES) {
      initialValues.data[item.type] = {
        [item.id]: {
          image: ''
        }
      };
    }

    if (item[item.type].is_required) {
      if (initialValues.required[item.type]) {
        initialValues.required[item.type][item.id] = true;
      } else {
        initialValues.required[item.type] = {
          [item.id]: true
        };
      }
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_14__["taskMenuSchema"],
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: onSubmitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    values,
    errors,
    setFieldValue
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, "New Task"), format.map(input => {
    // this single and multiple selection code will currently never be invoked as the back end will not return these types
    return input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].SINGLE_SELECTION ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      key: input.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Question, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }, Object(universal_utils_cutOffString__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(client_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_9__["default"])(input.name), 18)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Options, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      }
    }, input[input.type].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: input.id,
      id: optionIndex,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: option.id === values[input.id],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      }
    }))))) : input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].MULTIPLE_SELECTION ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      key: input.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Question, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      }
    }, Object(universal_utils_cutOffString__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(client_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_9__["default"])(input.name), 18)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Options, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    }, input[input.type].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: input.id,
      id: option.id,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: values[input.id] && values[input.id].includes(option.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      }
    }))))) : input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: input.name,
      type: input.type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    }, input.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: values && values.data && values.data[input.type] ? values.data[input.type][input.id] : null,
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      name: `data[${input.type}][${input.id}]`,
      error: touched && touched.data && touched.data[input.type] && touched.data[input.type][input.id] && errors && errors.data && errors.data[input.type] && errors.data[input.type][input.id],
      hideErrorMessage: true,
      onChange: handleChange,
      onBlur: handleBlur,
      maxRows: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    })) : input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].BOUNDING_BOXES ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: input.name,
      type: input.type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      }
    }, input.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      value: values && values.data && values.data[input.type] && values.data[input.type][input.id] ? values.data[input.type][input.id]['image'] : 'bbb',
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      type: input.type,
      format: values.data[input.type].format,
      name: `data[${input.type}][${input.id}][image]`,
      error: errors && errors.data && errors.data[input.type] ? errors.data[input.type][input.id] : '',
      hideErrorMessage: true,
      onChange: handleChange,
      onBlur: handleBlur,
      containerStyles: {
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      }
    })) : input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].RICH_TEXT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: input.name,
      type: input.type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      }
    }, input.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_15__["default"], {
      isTaskMenu: true,
      value: values && values.data && values.data[input.type] ? values.data[input.type][input.id] : '',
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      name: `data[${input.type}][${input.id}]`,
      format: input[input.type].format,
      error: errors && errors.data && errors.data[input.type] ? errors.data[input.type][input.id] : '',
      setFieldValue: setFieldValue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      }
    })) : input.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].DATE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: input.name,
      type: input.type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      }
    }, input.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
      isTaskMenu: true,
      value: values && values.data && values.data[input.type] ? values.data[input.type][input.id] : '',
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      name: `data[${input.type}][${input.id}]`,
      error: errors && errors.data && errors.data[input.type] ? errors.data[input.type][input.id] : '',
      setFieldValue: setFieldValue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: input.name,
      type: input.type,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      }
    }, input.name), input.type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].TEXT ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      value: values && values.data && values.data[input.type] ? values.data[input.type][input.id] : '',
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      type: input.type === 'number' ? 'number' : 'text',
      format: values.data[input.type].format,
      name: `data[${input.type}][${input.id}]`,
      error: errors && errors.data && errors.data[input.type] ? errors.data[input.type][input.id] : '',
      hideErrorMessage: true,
      onChange: handleChange,
      onBlur: handleBlur,
      containerStyles: {
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: values[input.id] || '',
      placeholder: input[input.type].placeholder ? input[input.type].placeholder : universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["SAMPLE_VALUES"][input.type],
      name: input.id,
      onChange: handleChange,
      onBlur: handleBlur,
      maxRows: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      }
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmissionSection, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    onClick: closePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_components_FlatButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    disabled: !isValid || isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    }
  }, "Create")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewTaskMenu);

/***/ }),

/***/ "./src/universal/components/StatusTag.tsx":
/*!************************************************!*\
  !*** ./src/universal/components/StatusTag.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_utils_getQueueStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/utils/getQueueStatus */ "./src/universal/utils/getQueueStatus.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/StatusTag.tsx";





const StatusTag = ({
  status,
  centered
}) => {
  let backgroundColor;

  switch (status) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].OPEN:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].OPEN;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].IN_PROGRESS:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].IN_PROGRESS;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].NEW:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].NEW;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].COMPLETED:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].COMPLETED;
      break;

    default:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].IN_PROGRESS;
  }

  const Tag = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    target: "e1ciaeyc0"
  })(_objectSpread({
    padding: '5px 15px',
    borderRadius: 5,
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
    userSelect: 'none',
    backgroundColor
  }, centered && {
    margin: '0px auto'
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, Object(universal_utils_getQueueStatus__WEBPACK_IMPORTED_MODULE_4__["default"])(status));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusTag);

/***/ }),

/***/ "./src/universal/modules/queue/components/Queue.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/modules/queue/components/Queue.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/ActionButton */ "./src/client/components/ActionButton.tsx");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_cutOffString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/cutOffString */ "./src/universal/utils/cutOffString.ts");
/* harmony import */ var client_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/utils/capitalizeFirstLetter */ "./src/client/utils/capitalizeFirstLetter.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_components_QueueActionsMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/components/QueueActionsMenu */ "./src/client/components/QueueActionsMenu.tsx");
/* harmony import */ var client_components_QueueFilterColumnMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/components/QueueFilterColumnMenu */ "./src/client/components/QueueFilterColumnMenu.tsx");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var client_hooks_useModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/ConfirmationModal */ "./src/client/components/ConfirmationModal.tsx");
/* harmony import */ var universal_components_NewTaskMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! universal/components/NewTaskMenu */ "./src/universal/components/NewTaskMenu.tsx");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! universal/utils/formatValues */ "./src/universal/utils/formatValues.ts");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
/* harmony import */ var _QueueSettingsModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./QueueSettingsModal */ "./src/universal/modules/queue/components/QueueSettingsModal.tsx");
/* harmony import */ var client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! client/redux/queuesReducers */ "./src/client/redux/queuesReducers.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var universal_components_StatusTag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! universal/components/StatusTag */ "./src/universal/components/StatusTag.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/Queue.tsx";

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





























dayjs__WEBPACK_IMPORTED_MODULE_14___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_18___default.a);

const Page = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg60"
})({
  name: "1rlocen",
  styles: "background:#fff;min-width:800px;padding:0 10% 0 10%;height:100%;"
});

const Header = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg61"
})({
  name: "1ainrib",
  styles: "display:flex;justify-content:space-between;padding:96px 0 70px 0;font-weight:600;font-size:24px;line-height:30px;"
});

const Buttons = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg62"
})({
  name: "gg4vpm",
  styles: "display:flex;justify-content:space-between;"
});

const PlayButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  target: "em4uhg63"
})({
  name: "15woith",
  styles: "width:100px;height:32px;font-size:14px;"
});

const TableHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg64"
})({
  name: "erbukt",
  styles: "border:1px solid #E8ECEE;height:42px;border-radius:10px;display:flex;box-shadow:0px 20px 40px rgba(0, 0, 0, 0.02);margin-bottom:24px;padding:0px 15px;"
});

const TableItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg65"
})({
  name: "1h1cj0z",
  styles: "display:flex;flex-direction:column;justify-content:center;width:20%;"
});

const TableHeaderItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(TableItem, {
  target: "em4uhg66"
})({
  fontWeight: 600,
  fontSize: '14px',
  borderLeft: `1px solid ${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_GRAY}`,
  paddingLeft: 10
});

const IDHeaderItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(TableHeaderItem, {
  target: "em4uhg67"
})({
  name: "1ts6wgu",
  styles: "border-left:none;position:relative;"
});

const HeaderItemText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg68"
})({
  name: "tjo5vg",
  styles: "padding-right:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
});

const TasksContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg69"
})({
  border: `1px solid ${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_GRAY}`,
  height: 'calc(100% - 240px - 80px)',
  maxHeight: 470,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px'
});

const NavContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg610"
})({
  name: "ogrv91",
  styles: "display:flex;justify-content:center;padding:12px 0px;height:48px;background-color:#f8f8fa;border-top:1px solid #e8ecee;user-select:none;"
});

const Task = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg611"
})({
  height: 42,
  padding: '0 25px',
  borderBottom: `1px solid ${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_GRAY}`,
  display: 'flex',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#f7f8f9'
  }
});

const GrayText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg612"
})({
  fontSize: '14px',
  color: `${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY}`,
  paddingLeft: 15,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center'
});

const ID = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "em4uhg613"
})({
  color: `${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN}`
});

const AssignedTo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "em4uhg614"
})({
  name: "k008qs",
  styles: "display:flex;"
});

const Name = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "em4uhg615"
})({
  name: "1xt068c",
  styles: "margin-left:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
});

const ColoredText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "em4uhg616"
})({
  color: `${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN}`,
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 600,
  marginTop: 1
});

const Tasks = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg617"
})({
  name: "ruyzf7",
  styles: "height:calc(100% - 48px);overflow-y:auto;"
});

const QueueTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg618"
})({
  name: "k008qs",
  styles: "display:flex;"
});

const MenuButtonContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg619"
})({
  name: "1a3dugn",
  styles: "width:30px;height:30px;padding-top:2.5px;padding-left:5px;"
});

const FilterMenuButtonContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "em4uhg620"
})({
  name: "19hw8cp",
  styles: "width:30px;height:30px;position:absolute;right:10px;top:18px;"
});

const MenuButtonSecondary = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
  target: "em4uhg621"
})({
  name: "1ay9vb9",
  styles: "margin-right:16px;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "em4uhg622"
})({
  name: "1xzpdvy",
  styles: "font-size:15px;align-items:center;margin:2px 0 0 5px;"
});

const StyledMenuIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "em4uhg623"
})({
  fontSize: 24,
  alignItems: 'center',
  margin: '-10px 0 0 5px',
  cursor: 'pointer',
  ':hover': {
    color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN
  }
});

const Queue = props => {
  const {
    orgId,
    queue,
    startNextTask,
    queueId,
    deleteQueue,
    flushQueueTasks,
    format,
    tasks,
    taskPage,
    setTaskPage,
    user,
    isStaff,
    setQueue,
    setSelectedQueue,
    updateQueue
  } = props;
  const {
    is_running: isRunning,
    pinned_block: pinnedBlock
  } = queue;
  const [pinnedBlockId, setPinnedBlockId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pinnedBlock || '');
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_19__["default"])();
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    menuPortal,
    originRef,
    menuProps,
    togglePortal
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_10__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_9__["MenuPosition"].UPPER_LEFT, {
    isDropdown: true
  });
  const {
    modalPortal,
    togglePortal: newTaskTogglePortal,
    closePortal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_15__["default"])({
    overflow: 'auto'
  });
  const {
    modalPortal: queueSettingsPortal,
    togglePortal: toggleQueueSettingsModal,
    closePortal: closeQueueSettingsModal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_15__["default"])({});
  const {
    modalPortal: confirmModalPortal,
    togglePortal: confirmTogglePortal,
    closePortal: confirmClosePortal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const {
    modalPortal: confirmFlushModalPortal,
    togglePortal: confirmFlushTogglePortal,
    closePortal: confirmFlushClosePortal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const {
    menuPortal: filterMenuPortal,
    originRef: originFilterMenuRef,
    menuProps: filterMenuProps,
    togglePortal: toggleFilterMenuPortal
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_10__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_9__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true
  });

  const onSubmitHandler = async values => {
    const returnData = [];
    format.forEach(({
      id,
      type,
      name
    }) => {
      let value = values[id];

      if (values.data && values.data[type] && values.data[type][id]) {
        value = values.data[type][id];
      }

      const returnObj = {
        id,
        type,
        name,
        [type]: {
          value
        }
      };
      returnData.push(returnObj);
    });
    const payload = {
      method: 'POST',
      data: {
        data: Object(universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_23__["default"])(returnData).map(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_24__["transformDates"])
      }
    };
    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/form`, payload);

    if (res.errors) {
      props.addFailureNotification('An error occurred');
    }

    res.errors && closePortal();
    const fetchTaskPayload = {
      method: 'GET'
    };
    const fetchTaskRes = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/${res.data.id}`, fetchTaskPayload);
    const {
      data
    } = fetchTaskRes || {};
    const route = data.id ? `/queues/${queueId}/tasks/${data.id}` : `/queues/${queueId}/connections`;
    const taskState = data.id ? {
      hasChanged: false
    } : null;
    history.push({
      pathname: route,
      state: taskState
    });
    closePortal();
  };

  const runQueue = async values => {
    const updatedQueue = _objectSpread(_objectSpread({}, values), {}, {
      is_running: true
    });

    const payload = {
      method: 'PUT',
      data: updatedQueue
    };
    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload);

    if (_optionalChain([res, 'optionalAccess', _ => _.errors])) {
      props.addFailureNotification('An error occurred');
    } else {
      setQueue(updatedQueue);
      setSelectedQueue(updatedQueue);
      updateQueue(updatedQueue);
      props.addSuccessNotification('This queue is now being executed by Human Lambdas');
    }

    closeQueueSettingsModal();
  };

  const finalPage = Math.floor((queue.n_tasks - 1) / 10) + 1 || 1;

  const BackNavIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    target: "em4uhg624"
  })({
    color: taskPage === 1 ? client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY : client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN,
    cursor: taskPage === 1 ? 'auto' : 'pointer',
    margin: '0px 12px'
  });

  const ForwardNavIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    target: "em4uhg625"
  })({
    color: taskPage === finalPage ? `${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY}` : `${client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN}`,
    cursor: taskPage === finalPage ? 'auto' : 'pointer',
    margin: '0px 12px'
  });

  const pauseQueue = async () => {
    const updatedQueue = _objectSpread(_objectSpread({}, queue), {}, {
      is_running: false
    });

    setQueue(updatedQueue);
    const payload = {
      method: 'PUT',
      data: updatedQueue
    };
    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload);

    if (_optionalChain([res, 'optionalAccess', _2 => _2.errors])) {
      props.addFailureNotification('An error occurred');
    } else {
      props.addSuccessNotification('Queue execution has been successfully paused');
    }
  };

  const handleRunOrPause = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (isRunning) {
      pauseQueue();
    } else {
      toggleQueueSettingsModal();
    }
  }, [queue]);

  const setPinnedBlock = async id => {
    setPinnedBlockId(id);
    await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, {
      method: 'PATCH',
      data: {
        pinned_block: id
      }
    });
  };

  const extractPinnedValue = (data, id) => {
    let pinnedValue = '';

    if (data && Array.isArray(data)) {
      data.map(block => {
        if (pinnedBlockId) {
          if (block.id === pinnedBlockId) {
            pinnedValue = _optionalChain([block, 'access', _3 => _3[block.type], 'optionalAccess', _4 => _4.value]);
          }
        } else {
          pinnedValue = '#' + id;
        }
      });
    }

    return pinnedValue;
  };

  const extractPinnedTitle = queue => {
    let pinnedTitle = '';

    if (queue.data && Array.isArray(queue.data)) {
      queue.data.map(block => {
        if (pinnedBlockId) {
          if (block.id === pinnedBlockId) {
            pinnedTitle = block.name;
          }
        } else {
          pinnedTitle = 'ID';
        }
      });
    }

    return pinnedTitle;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Page, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    }
  }, queue.name && Object(client_utils_capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(universal_utils_cutOffString__WEBPACK_IMPORTED_MODULE_6__["default"])(queue.name, 25)), _optionalChain([user, 'optionalAccess', _5 => _5.is_admin]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledMenuIcon, {
    onClick: togglePortal,
    ref: originRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    }
  }, "expand_more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Buttons, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    }
  }, _optionalChain([user, 'optionalAccess', _6 => _6.is_admin]) && !isStaff && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuButtonSecondary, {
    onClick: () => {
      history.push(`/queues/${queueId}/connections`);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    }
  }, "Connections"), queue.data && queue.data.length > 0 && !isStaff && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuButtonSecondary, {
    onClick: () => {
      format.length > 0 ? newTaskTogglePortal() : onSubmitHandler({});
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    }
  }, "New Task"), (!_optionalChain([user, 'optionalAccess', _7 => _7.is_admin]) || isStaff) && queue.n_tasks > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayButton, {
    onClick: startNextTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    }
  }, "Play") : null, _optionalChain([user, 'optionalAccess', _8 => _8.is_admin]) && !isStaff && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayButton, {
    onClick: handleRunOrPause,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    }
  }, isRunning ? 'Pause' : 'Run'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IDHeaderItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItemText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    }
  }, extractPinnedTitle(queue)), _optionalChain([user, 'optionalAccess', _9 => _9.is_admin]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FilterMenuButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledMenuIcon, {
    onClick: toggleFilterMenuPortal,
    ref: originFilterMenuRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    }
  }, "expand_more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeaderItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeaderItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    }
  }, "Assigned To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeaderItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    }
  }, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableHeaderItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    }
  }, "Created At")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TasksContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tasks, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    }
  }, tasks.length > 0 ? tasks.map(task => {
    const {
      id,
      status,
      created_at,
      assigned_to,
      n_comments,
      data
    } = task;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Task, {
      key: id,
      onClick: () => history.push(`/queues/${queueId}/tasks/${id}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ID, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderItemText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      }
    }, extractPinnedValue(data, id)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_StatusTag__WEBPACK_IMPORTED_MODULE_28__["default"], {
      status: status,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      }
    }, assigned_to && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AssignedTo, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      initials: assigned_to.charAt(0).toUpperCase(),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__["colorFromString"])(assigned_to),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521
      }
    }, assigned_to))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
      }
    }, n_comments > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GrayText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      }
    }, n_comments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      }
    }, "comment"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GrayText, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_14___default()(created_at).fromNow())));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    header: 'This queue currently has no tasks',
    subHeader: "You can upload tasks at this queue's connections page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackNavIcon, {
    onClick: () => setTaskPage(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    }
  }, "first_page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackNavIcon, {
    onClick: () => {
      if (taskPage > 1) setTaskPage(taskPage - 1);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    }
  }, "navigate_before"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColoredText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    }
  }, taskPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ForwardNavIcon, {
    onClick: () => {
      if (taskPage !== finalPage) setTaskPage(taskPage + 1);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    }
  }, "navigate_next"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ForwardNavIcon, {
    onClick: () => {
      setTaskPage(finalPage);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    }
  }, "last_page"))), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_QueueActionsMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    queueId: queueId,
    orgId: orgId,
    menuProps: menuProps,
    onDelete: confirmTogglePortal,
    onFlush: confirmFlushTogglePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    }
  })), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_NewTaskMenu__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onSubmitHandler: onSubmitHandler,
    closePortal: closePortal,
    format: format,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    }
  })), confirmModalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: 'Delete',
    closePortal: confirmClosePortal,
    message: 'Are you sure you want to permanently delete this queue?',
    onConfirm: () => {
      deleteQueue();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585
    }
  })), confirmFlushModalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: 'Delete',
    closePortal: confirmFlushClosePortal,
    message: 'Are you sure you want to permanently delete all tasks from this queue?',
    onConfirm: () => {
      flushQueueTasks();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    }
  })), queueSettingsPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QueueSettingsModal__WEBPACK_IMPORTED_MODULE_25__["default"], {
    closePortal: closeQueueSettingsModal,
    runQueue: runQueue,
    queue: queue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    }
  })), filterMenuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_QueueFilterColumnMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    queue: queue,
    activeBlockName: extractPinnedTitle(queue),
    menuProps: filterMenuProps,
    setPinnedBlock: setPinnedBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    }
  })));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_27__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_27__["addSuccessNotification"])(arg)),
    updateQueue: arg => dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_26__["workfllowActions"].updateQueue(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_22__["connect"])(null, mapDispatchToProps)(Queue));

/***/ }),

/***/ "./src/universal/modules/queue/components/QueueSettingsModal.tsx":
/*!***********************************************************************!*\
  !*** ./src/universal/modules/queue/components/QueueSettingsModal.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var _client_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/QueueSettingsModal.tsx";










const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel0"
})({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 700,
  width: 700,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: _client_utils_constants__WEBPACK_IMPORTED_MODULE_4__["BoxShadow"].MODAL,
  paddingTop: 35,
  paddingBottom: 35,
  maxHeight: 'calc(100vh - 100px)'
});

const ModalWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel1"
})({
  name: "mm2ghz",
  styles: "display:flex;flex-direction:row;width:100%;overflow:auto;"
});

const ModalHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel2"
})({
  name: "1tg1vh9",
  styles: "font-weight:600;font-size:22px;line-height:27px;margin-bottom:10px;padding-left:35px;padding-right:35px;"
});

const ModalNote = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel3"
})({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '20px',
  marginBottom: 25,
  paddingLeft: 35,
  paddingRight: 35,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_DARKER_GRAY
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel4"
})({
  fontSize: 15,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontWeight: 400,
  marginBottom: 5
});

const Note = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e14z3qel5"
})({
  fontSize: 12,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  fontWeight: 400
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel6"
})({
  name: "1dy0fl1",
  styles: "display:grid;align-items:top;margin-bottom:5px;"
});

const FormContent = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  target: "e14z3qel7"
})({
  name: "y109xp",
  styles: "overflow:auto;position:relative;height:inherit;"
});

const QuotaInfoWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel8"
})({
  name: "1q8ugqq",
  styles: "display:grid;align-items:top;margin-top:10px;grid-gap:10px;background-color:#fcfbff;padding:20px;border-radius:4px;"
});

const QuotaInfo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e14z3qel9"
})({
  name: "18bu3f0",
  styles: "font-size:12px;color:#846cf1;font-weight:400;"
});

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel10"
})({
  name: "9jmnaf",
  styles: "display:flex;flex-direction:column;margin-bottom:10px;"
});

const ModalFooter = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel11"
})({
  name: "1to1nwm",
  styles: "margin-top:10px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;padding-left:35px;padding-right:35px;"
});

const ContentWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14z3qel12"
})({
  name: "2lgtuc",
  styles: "background-color:#fff;width:100%;padding-left:35px;padding-right:35px;"
});

const SettingFields = () => {
  const [descriptionField, descriptionMeta, _descriptionHelper] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('task_description');
  const [guidelinesField, guidelinesMeta, _guidelinesHelper] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])('guidelines_url');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, "Describe the goal of the task "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, descriptionField), {}, {
    cacheMeasurements: true,
    error: descriptionMeta.error,
    placeholder: "Description",
    minRows: 4,
    maxRows: 8,
    positionErrorBelow: false,
    scrollable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, "Required field. This will help us understand how tasks in this queue should be delivered."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, "Include a link to a guidelines document or instructional video"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, guidelinesField), {}, {
    error: guidelinesMeta.error,
    type: "text",
    placeholder: "https://example.com/link-to-document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }, "Optional field with a URL to publicly accessible instructions. The more detailed context and examples, the higher the output quality we'll be able to provide."))));
};

const QueueSettingsModal = ({
  runQueue,
  queue,
  closePortal
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
  id: "queue-settings-modal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
  validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_9__["queueSettingsSchema"],
  validateOnChange: true,
  validateOnBlur: true,
  initialValues: queue,
  enableReinitialize: true,
  onSubmit: runQueue,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  }
}, ({
  isValid,
  isSubmitting
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContent, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  }
}, "Automate your queue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalNote, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  }
}, "Tell us how this queue should be run and we'll handle it for you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SettingFields, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuotaInfoWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuotaInfo, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  }
}, "Your account includes a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('b', {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  }
}, "monthly quota of 100 tasks handled by us at no cost. "), "We will send you an email once you approach your limit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QuotaInfo, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195
  }
}, "If you are anticipating a large task load, have specific SLA requirements or want to ask additiional questions, don't hesitate to contact us at", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('b', {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  }
}, "contact@humanlambdas.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalFooter, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  type: "submit",
  disabled: !isValid || isSubmitting,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  }
}, "Enable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
  type: "button",
  onClick: () => closePortal(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  }
}, "Cancel")))));

/* harmony default export */ __webpack_exports__["default"] = (QueueSettingsModal);

/***/ }),

/***/ "./src/universal/modules/queue/containers/QueueContainer.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/modules/queue/containers/QueueContainer.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_modules_queue_components_Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/modules/queue/components/Queue */ "./src/universal/modules/queue/components/Queue.tsx");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/redux/queuesReducers */ "./src/client/redux/queuesReducers.ts");
/* harmony import */ var client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/utils/isUserStaff */ "./src/client/utils/isUserStaff.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/containers/QueueContainer.tsx";












const QueueContainer = props => {
  const [queue, setQueue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [format, setFormat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [formatLoading, setFormatLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tasks, setTasks] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [taskLoading, setTaskLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [taskPage, setTaskPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const orgId = props.user.current_organization_id;
  const queueId = props.match.params.queueId;
  const organizations = props.organizations;
  const isStaff = Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_10__["default"])(organizations, orgId);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueue() {
      setLoading(true);
      const payload = {
        method: 'GET'
      };
      const {
        data
      } = (await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, payload)) || {};

      if (data) {
        setQueue(data);
        props.setSelectedQueue(data);
      }

      setLoading(false);
    }

    fetchQueue();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueueFormat() {
      if (organizations.length > 0 && // If orgs aren't loaded isStaff may be incorrect
      !isStaff && Array.isArray(format) && format.length === 0) {
        setFormatLoading(true);
        const payload = {
          method: 'GET'
        };
        const {
          data
        } = (await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/form`, payload)) || {};

        if (data) {
          const {
            data: formatData
          } = data || {};
          setFormat(formatData);
        }

        setFormatLoading(false);
      }
    }

    fetchQueueFormat();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchTasks() {
      setTaskLoading(true);
      const payload = {
        method: 'GET'
      };
      const {
        data
      } = (await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/pending?limit=10&offset=${(taskPage - 1) * 10 || 0}`, payload)) || {};

      if (data) {
        setTasks(data.tasks);
      }

      setTaskLoading(false);
    }

    fetchTasks();
  }, [taskPage]);

  const deleteQueue = async () => {
    try {
      await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, {
        method: 'PATCH',
        data: {
          disabled: true
        }
      });
      Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_8__["segmentTrack"])('Queue Deleted', {
        orgId,
        queueId,
        userId: props.user.id,
        name
      });
      props.addSuccessNotification('This queue has now been deleted');
      history.push(`/queues`);
    } catch (e) {
      console.error(e);
    }
  };

  const flushQueueTasks = async () => {
    try {
      await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/flush`, {
        method: 'PUT'
      });
      Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_8__["segmentTrack"])('Queue Tasks Deleted', {
        orgId,
        queueId,
        userId: props.user.id
      });
      props.addSuccessNotification(`The queue's tasks have now been deleted`);
      setTasks([]);
    } catch (e) {
      console.error(e);
    }
  };

  const startNextTask = async () => {
    const payload = {
      method: 'GET'
    };
    const res = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}/tasks/next`, payload);
    const {
      data
    } = res || {};
    const route = data.id ? `/queues/${queueId}/tasks/${data.id}` : `/queues/${queueId}/connections`;
    history.push(route);
  };

  let renderComp;

  if (loading || taskLoading || formatLoading || queue === undefined) {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      }
    });
  } else {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_modules_queue_components_Queue__WEBPACK_IMPORTED_MODULE_1__["default"], {
      queue: queue,
      user: props.user,
      orgId: orgId,
      queueId: queueId,
      deleteQueue: deleteQueue,
      flushQueueTasks: flushQueueTasks,
      startNextTask: startNextTask,
      format: format,
      tasks: tasks,
      isStaff: isStaff,
      taskPage: taskPage,
      setTaskPage: setTaskPage,
      taskLoading: taskLoading,
      setQueue: setQueue,
      setSelectedQueue: props.setSelectedQueue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      }
    });
  }

  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])(`Queue | Human Lambdas`);
  return renderComp;
};

const mapDispatchToProps = dispatch => ({
  addSuccessNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(arg)),
  setSelectedQueue: arg => dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_9__["workfllowActions"].setSelectedQueue(arg))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(QueueContainer));

/***/ }),

/***/ "./src/universal/utils/cutOffString.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/cutOffString.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cutOffString = (string, length) => string.length > length ? `${string.substring(0, length)}...` : string;

/* harmony default export */ __webpack_exports__["default"] = (cutOffString);

/***/ }),

/***/ "./src/universal/utils/formatValues.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/formatValues.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
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



const formatValues = values => {
  let fields;

  if (Array.isArray(values.data)) {
    fields = values.data;
  } else if (Array.isArray(values)) {
    fields = values;
  } else {
    return values;
  }

  fields.filter(val => {
    if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION] !== undefined) {
      _optionalChain([val, 'access', _ => _[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION], 'access', _2 => _2.entities, 'optionalAccess', _3 => _3.filter, 'call', _4 => _4(entity => {
        delete entity.color;
        delete entity.text;
      })]);
    }

    if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES] !== undefined) {
      if (Array.isArray(val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.objects)) {
        val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.objects.filter(entity => {
          delete entity.color;
        });
      }

      if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.image === '') {
        val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.image = null;
      }
    }

    return val;
  });
  return values;
};

/* harmony default export */ __webpack_exports__["default"] = (formatValues);

/***/ }),

/***/ "./src/universal/utils/getFirstLetter.ts":
/*!***********************************************!*\
  !*** ./src/universal/utils/getFirstLetter.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getFirstLetter = str => {
  let firstLetter = str;

  if (str && str.length > 1) {
    firstLetter = str.charAt(0).toUpperCase();
  }

  return firstLetter;
};

/* harmony default export */ __webpack_exports__["default"] = (getFirstLetter);

/***/ }),

/***/ "./src/universal/utils/getQueueStatus.ts":
/*!***********************************************!*\
  !*** ./src/universal/utils/getQueueStatus.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


const getQueueStatus = type => {
  let status = '';

  switch (type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].COMPLETED:
      status = 'COMPLETED';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].NEW:
      status = 'NEW';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].IN_PROGRESS:
      status = 'IN PROGRESS';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].OPEN:
      status = 'OPEN';
      break;

    default:
      break;
  }

  return status;
};

/* harmony default export */ __webpack_exports__["default"] = (getQueueStatus);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9GbGF0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUXVldWVBY3Rpb25zTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1F1ZXVlRmlsdGVyQ29sdW1uTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ob29rcy91c2VEb2N1bWVudFRpdGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9OZXdUYXNrTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1N0YXR1c1RhZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvUXVldWUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlU2V0dGluZ3NNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbnRhaW5lcnMvUXVldWVDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvY3V0T2ZmU3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZm9ybWF0VmFsdWVzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRRdWV1ZVN0YXR1cy50cyJdLCJuYW1lcyI6WyJBY3Rpb25CdXR0b24iLCJQbGFpbkJ1dHRvbiIsIndhaXRpbmciLCJkaXNhYmxlZCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIlBBTEVUVEUiLCJQUklNQVJZX01BSU4iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJQUklNQVJZX01BSU5fREFSSyIsIkJPWF9TSEFET1dfUFJJTUFSWSIsIl9qc3hGaWxlTmFtZSIsIldyYXBwZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsIlRpdGxlIiwiVEVYVF9NQUlOIiwiU3ViVGl0bGUiLCJFbXB0eVBhZ2UiLCJzdmciLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJidXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZsYXRCdXR0b24iLCJwcm9wcyIsImlzRGlzYWJsZWQiLCJQUklNQVJZX01BSU5fTElHSFRFUiIsIk1lbnVDb250YWluZXIiLCJTdHlsZWRJY29uIiwiSWNvbiIsIlRFWFRfR1JBWSIsIm1hcmdpblJpZ2h0IiwiTGFiZWwiLCJRdWV1ZUFjdGlvbnNNZW51IiwibWVudVByb3BzIiwicXVldWVJZCIsIm9uRGVsZXRlIiwib25GbHVzaCIsInNlbGVjdGVkUXVldWUiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwiTWVudSIsImFyaWFMYWJlbCIsIk1lbnVJdGVtIiwibGFiZWwiLCJvbkNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwic3RhdGUiLCJwcmV2Um91dGUiLCJsb2NhdGlvbiIsImhhc0Nsb25lIiwiY2xvbmVkUXVldWUiLCJkYXRhIiwibmFtZSIsImlkIiwibWFwU3RhdGVUb1Byb3BzIiwicXVldWVzIiwiY29ubmVjdCIsIl9vcHRpb25hbENoYWluIiwib3BzIiwibGFzdEFjY2Vzc0xIUyIsInVuZGVmaW5lZCIsInZhbHVlIiwiaSIsImxlbmd0aCIsIm9wIiwiZm4iLCJhcmdzIiwiY2FsbCIsIkxhYmVsVGV4dCIsIlF1ZXVlRmlsdGVyQ29sdW1uTWVudSIsInF1ZXVlIiwic2V0UGlubmVkQmxvY2siLCJhY3RpdmVCbG9ja05hbWUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJibG9jayIsIkZJTFRFUl9CTE9DS19UWVBFUyIsImluY2x1ZGVzIiwidHlwZSIsImtleSIsImlzQWN0aXZlIiwiQkxPQ0tTIiwiXyIsImZpbmQiLCJfMiIsImIiLCJfMyIsImljb24iLCJleHRyYVNwYWNlIiwidXNlRG9jdW1lbnRUaXRsZSIsInRpdGxlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiQXZhdGFyIiwiZm9yd2FyZFJlZiIsInJlZiIsImluaXRpYWxzIiwic3R5bGUiLCJ0cmltIiwiQXZhdGFyQmxvY2siLCJ0ZXN0QWxpZ24iLCJtaW5XaWR0aCIsInVzZXJTZWxlY3QiLCJnZXRGaXJzdExldHRlciIsIk1vZGFsUm9vdCIsIkJPUkRFUl9NQUlOX0dSQVkiLCJCb3hTaGFkb3ciLCJNT0RBTCIsIk1haW5UaXRsZSIsIkZvcm1Db250ZW50IiwiRm9ybSIsIlN1Ym1pc3Npb25TZWN0aW9uIiwiSW5wdXQiLCJCb3giLCJPcHRpb25zIiwiUXVlc3Rpb24iLCJOZXdUYXNrTWVudSIsImNsb3NlUG9ydGFsIiwiZm9ybWF0Iiwib25TdWJtaXRIYW5kbGVyIiwiaW5pdGlhbFZhbHVlcyIsInJlcXVpcmVkIiwiaXRlbSIsIkJMT0NLX1RZUEUiLCJCT1VORElOR19CT1hFUyIsImltYWdlIiwiaXNfcmVxdWlyZWQiLCJGb3JtaWsiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidGFza01lbnVTY2hlbWEiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uTW91bnQiLCJlbmFibGVSZWluaXRpYWxpemUiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInZhbHVlcyIsImVycm9ycyIsInNldEZpZWxkVmFsdWUiLCJpbnB1dCIsIlNJTkdMRV9TRUxFQ1RJT04iLCJjdXRPZmZTdHJpbmciLCJvcHRpb25zIiwib3B0aW9uIiwib3B0aW9uSW5kZXgiLCJUYXNrUmFkaW8iLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJNVUxUSVBMRV9TRUxFQ1RJT04iLCJUYXNrQ2hlY2tib3giLCJOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04iLCJCYXNpY1RleHRBcmVhIiwicGxhY2Vob2xkZXIiLCJTQU1QTEVfVkFMVUVTIiwiZXJyb3IiLCJoaWRlRXJyb3JNZXNzYWdlIiwib25CbHVyIiwibWF4Um93cyIsIklucHV0RmllbGQiLCJjb250YWluZXJTdHlsZXMiLCJSSUNIX1RFWFQiLCJUZXh0RWRpdG9yIiwiaXNUYXNrTWVudSIsIkRBVEUiLCJEYXRlUGlja2VyIiwiVEVYVCIsIlNlY29uZGFyeUJ1dHRvbiIsIlN0YXR1c1RhZyIsInN0YXR1cyIsImNlbnRlcmVkIiwiUVVFVUVfU1RBVFVTIiwiT1BFTiIsIlNUQVRVU19QQUxFVFRFIiwiSU5fUFJPR1JFU1MiLCJORVciLCJDT01QTEVURUQiLCJUYWciLCJ0ZXh0VHJhbnNmb3JtIiwiZ2V0UXVldWVTdGF0dXMiLCJkYXlqcyIsImV4dGVuZCIsInJlbGF0aXZlVGltZSIsIlBhZ2UiLCJIZWFkZXIiLCJCdXR0b25zIiwiUGxheUJ1dHRvbiIsIlRhYmxlSGVhZGVyIiwiVGFibGVJdGVtIiwiVGFibGVIZWFkZXJJdGVtIiwiYm9yZGVyTGVmdCIsIkJPUkRFUl9HUkFZIiwicGFkZGluZ0xlZnQiLCJJREhlYWRlckl0ZW0iLCJIZWFkZXJJdGVtVGV4dCIsIlRhc2tzQ29udGFpbmVyIiwibWF4SGVpZ2h0IiwiTmF2Q29udGFpbmVyIiwiVGFzayIsImJvcmRlckJvdHRvbSIsImN1cnNvciIsIkdyYXlUZXh0IiwiSUQiLCJBc3NpZ25lZFRvIiwiTmFtZSIsIkNvbG9yZWRUZXh0IiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiVGFza3MiLCJRdWV1ZVRpdGxlIiwiTWVudUJ1dHRvbkNvbnRhaW5lciIsIkZpbHRlck1lbnVCdXR0b25Db250YWluZXIiLCJNZW51QnV0dG9uU2Vjb25kYXJ5IiwiU3R5bGVkTWVudUljb24iLCJRdWV1ZSIsIm9yZ0lkIiwic3RhcnROZXh0VGFzayIsImRlbGV0ZVF1ZXVlIiwiZmx1c2hRdWV1ZVRhc2tzIiwidGFza3MiLCJ0YXNrUGFnZSIsInNldFRhc2tQYWdlIiwidXNlciIsImlzU3RhZmYiLCJzZXRRdWV1ZSIsInNldFNlbGVjdGVkUXVldWUiLCJ1cGRhdGVRdWV1ZSIsImlzX3J1bm5pbmciLCJpc1J1bm5pbmciLCJwaW5uZWRfYmxvY2siLCJwaW5uZWRCbG9jayIsInBpbm5lZEJsb2NrSWQiLCJzZXRQaW5uZWRCbG9ja0lkIiwidXNlU3RhdGUiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJtZW51UG9ydGFsIiwib3JpZ2luUmVmIiwidG9nZ2xlUG9ydGFsIiwidXNlTWVudSIsIk1lbnVQb3NpdGlvbiIsIlVQUEVSX0xFRlQiLCJpc0Ryb3Bkb3duIiwibW9kYWxQb3J0YWwiLCJuZXdUYXNrVG9nZ2xlUG9ydGFsIiwidXNlTW9kYWwiLCJvdmVyZmxvdyIsInF1ZXVlU2V0dGluZ3NQb3J0YWwiLCJ0b2dnbGVRdWV1ZVNldHRpbmdzTW9kYWwiLCJjbG9zZVF1ZXVlU2V0dGluZ3NNb2RhbCIsImNvbmZpcm1Nb2RhbFBvcnRhbCIsImNvbmZpcm1Ub2dnbGVQb3J0YWwiLCJjb25maXJtQ2xvc2VQb3J0YWwiLCJjb25maXJtRmx1c2hNb2RhbFBvcnRhbCIsImNvbmZpcm1GbHVzaFRvZ2dsZVBvcnRhbCIsImNvbmZpcm1GbHVzaENsb3NlUG9ydGFsIiwiZmlsdGVyTWVudVBvcnRhbCIsIm9yaWdpbkZpbHRlck1lbnVSZWYiLCJmaWx0ZXJNZW51UHJvcHMiLCJ0b2dnbGVGaWx0ZXJNZW51UG9ydGFsIiwiVVBQRVJfUklHSFQiLCJyZXR1cm5EYXRhIiwiZm9yRWFjaCIsInJldHVybk9iaiIsInBheWxvYWQiLCJtZXRob2QiLCJmb3JtYXRWYWx1ZXMiLCJ0cmFuc2Zvcm1EYXRlcyIsInJlcyIsImh0dHBIYW5kbGVyIiwiYWRkRmFpbHVyZU5vdGlmaWNhdGlvbiIsImZldGNoVGFza1BheWxvYWQiLCJmZXRjaFRhc2tSZXMiLCJyb3V0ZSIsInRhc2tTdGF0ZSIsImhhc0NoYW5nZWQiLCJydW5RdWV1ZSIsInVwZGF0ZWRRdWV1ZSIsImFkZFN1Y2Nlc3NOb3RpZmljYXRpb24iLCJmaW5hbFBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJuX3Rhc2tzIiwiQmFja05hdkljb24iLCJGb3J3YXJkTmF2SWNvbiIsInBhdXNlUXVldWUiLCJoYW5kbGVSdW5PclBhdXNlIiwidXNlQ2FsbGJhY2siLCJleHRyYWN0UGlubmVkVmFsdWUiLCJwaW5uZWRWYWx1ZSIsIl80IiwiZXh0cmFjdFBpbm5lZFRpdGxlIiwicGlubmVkVGl0bGUiLCJfNSIsImlzX2FkbWluIiwiXzYiLCJfNyIsIl84IiwiXzkiLCJ0YXNrIiwiY3JlYXRlZF9hdCIsImFzc2lnbmVkX3RvIiwibl9jb21tZW50cyIsImNvbG9yRnJvbVN0cmluZyIsImZyb21Ob3ciLCJDb25maXJtYXRpb25Nb2RhbCIsIm1lc3NhZ2UiLCJvbkNvbmZpcm0iLCJRdWV1ZVNldHRpbmdzTW9kYWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFyZyIsIndvcmtmbGxvd0FjdGlvbnMiLCJtYXhXaWR0aCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiTW9kYWxXcmFwcGVyIiwiTW9kYWxIZWFkZXIiLCJNb2RhbE5vdGUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nUmlnaHQiLCJURVhUX0RBUktFUl9HUkFZIiwiTm90ZSIsIkZpZWxkV3JhcHBlciIsIlF1b3RhSW5mb1dyYXBwZXIiLCJRdW90YUluZm8iLCJDb250ZW50QmxvY2siLCJNb2RhbEZvb3RlciIsIkNvbnRlbnRXcmFwcGVyIiwiU2V0dGluZ0ZpZWxkcyIsImRlc2NyaXB0aW9uRmllbGQiLCJkZXNjcmlwdGlvbk1ldGEiLCJfZGVzY3JpcHRpb25IZWxwZXIiLCJ1c2VGaWVsZCIsImd1aWRlbGluZXNGaWVsZCIsImd1aWRlbGluZXNNZXRhIiwiX2d1aWRlbGluZXNIZWxwZXIiLCJGcmFnbWVudCIsIlRleHRBcmVhIiwiY2FjaGVNZWFzdXJlbWVudHMiLCJtaW5Sb3dzIiwicG9zaXRpb25FcnJvckJlbG93Iiwic2Nyb2xsYWJsZSIsInF1ZXVlU2V0dGluZ3NTY2hlbWEiLCJQcmltYXJ5QnV0dG9uIiwiUXVldWVDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEZvcm1hdCIsImZvcm1hdExvYWRpbmciLCJzZXRGb3JtYXRMb2FkaW5nIiwic2V0VGFza3MiLCJ0YXNrTG9hZGluZyIsInNldFRhc2tMb2FkaW5nIiwiY3VycmVudF9vcmdhbml6YXRpb25faWQiLCJtYXRjaCIsInBhcmFtcyIsIm9yZ2FuaXphdGlvbnMiLCJpc1VzZXJTdGFmZiIsImZldGNoUXVldWUiLCJmZXRjaFF1ZXVlRm9ybWF0IiwiZm9ybWF0RGF0YSIsImZldGNoVGFza3MiLCJzZWdtZW50VHJhY2siLCJ1c2VySWQiLCJlIiwiY29uc29sZSIsInJlbmRlckNvbXAiLCJMb2FkaW5nUGFnZSIsInN0cmluZyIsInN1YnN0cmluZyIsImZpZWxkcyIsImZpbHRlciIsInZhbCIsImVudGl0aWVzIiwiZW50aXR5IiwidGV4dCIsIm9iamVjdHMiLCJmaXJzdExldHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBMkQsQ0FBQyxpQkFBaUIsYUFBYSxvSEFBb0gsRUFBRSxVQUFVLElBQUksV0FBVyxJQUFJLFlBQVksSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLGlDQUFpQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksVUFBVSxtTUFBbU0sbUJBQW1CLGdCQUFnQix5REFBeUQsSUFBSSxrQkFBa0IsNkRBQTZELCtDQUErQyxtQkFBbUIsbUNBQW1DLDhHQUE4RyxtQ0FBbUMsZUFBZSx5Q0FBeUMsZUFBZSxPQUFPLHlDQUF5QyxrREFBa0QsZUFBZSxtQkFBbUIsYUFBYSxPQUFPLGtCQUFrQixzQkFBc0IsbUJBQW1CLE1BQU0sZUFBZSxrREFBa0QsS0FBSyxhQUFhLFdBQVcsNEJBQTRCLGlCQUFpQix5QkFBeUIsOEJBQThCLDBDQUEwQyxLQUFLLDhCQUE4QixZQUFZLDhDQUE4QyxHQUFHLGlCQUFpQixjQUFjLDBDQUEwQyxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsaUNBQWlDLDBCQUEwQix3Q0FBd0MsdUNBQXVDLGlCQUFpQixNQUFNLDZDQUE2QywwSEFBMEgsbUJBQW1CLG1CQUFtQixhQUFhLG1CQUFtQixjQUFjLG9MQUFvTCxxQkFBcUIsU0FBUyxzQkFBc0IsNkNBQTZDLHdCQUF3QixXQUFXLDRDQUE0Qyx5QkFBeUIsNEJBQTRCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLG9DQUFvQyxtQkFBbUIsc0NBQXNDLHNCQUFzQix5QkFBeUIseUJBQXlCLGtEQUFrRCx3REFBd0Qsc0JBQXNCLGlCQUFpQix1RkFBdUYsMERBQTBELFVB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QUFLRSxzRUFBWSxDQUFDQyxJQUFsQjtBQUNFSCxZQUFNLEdBQUcsTUFBVDtBQUNBOztBQUNGO0FBQ0U7QUFkSjs7QUFnQkEsU0FBT0EsTUFBUDtBQUNELENBbkJEOztBQXFCZVUsNkVBQWYsRSIsImZpbGUiOiJRdWV1ZUNvbnRhaW5lcl8zNjUwNjIyMTg3ZDVjYjQyYTQ3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQuZGF5anM9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLGU9XCJzZWNvbmRcIixuPVwibWludXRlXCIscj1cImhvdXJcIixpPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixhPVwicXVhcnRlclwiLG89XCJ5ZWFyXCIsZj1cImRhdGVcIixoPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyxjPS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxkPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LCQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSxsPXtzOiQsejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpKyQociwyLFwiMFwiKStcIjpcIiskKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsdSkscz1uLWk8MCxhPWUuY2xvbmUoKS5hZGQocisocz8tMToxKSx1KTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLWE6YS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24oaCl7cmV0dXJue006dSx5Om8sdzpzLGQ6aSxEOmYsaDpyLG06bixzOmUsbXM6dCxROmF9W2hdfHxTdHJpbmcoaHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSx5PVwiZW5cIixNPXt9O01beV09ZDt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIFN9LEQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByO2lmKCF0KXJldHVybiB5O2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KU1bdF0mJihyPXQpLGUmJihNW3RdPWUscj10KTtlbHNle3ZhciBpPXQubmFtZTtNW2ldPXQscj1pfXJldHVybiFuJiZyJiYoeT1yKSxyfHwhbiYmeX0sdj1mdW5jdGlvbih0LGUpe2lmKG0odCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBTKG4pfSxnPWw7Zy5sPUQsZy5pPW0sZy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHYodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBTPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZCh0KXt0aGlzLiRMPUQodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgJD1kLnByb3RvdHlwZTtyZXR1cm4gJC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGcudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaChoKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LCQuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LCQuJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGd9LCQuaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEoXCJJbnZhbGlkIERhdGVcIj09PXRoaXMuJGQudG9TdHJpbmcoKSl9LCQuaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dih0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSwkLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdih0KTx0aGlzLnN0YXJ0T2YoZSl9LCQuaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx2KHQpfSwkLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gZy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sJC51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sJC52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSwkLnN0YXJ0T2Y9ZnVuY3Rpb24odCxhKXt2YXIgaD10aGlzLGM9ISFnLnUoYSl8fGEsZD1nLnAodCksJD1mdW5jdGlvbih0LGUpe3ZhciBuPWcudyhoLiR1P0RhdGUuVVRDKGguJHksZSx0KTpuZXcgRGF0ZShoLiR5LGUsdCksaCk7cmV0dXJuIGM/bjpuLmVuZE9mKGkpfSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGcudyhoLnRvRGF0ZSgpW3RdLmFwcGx5KGgudG9EYXRlKFwic1wiKSwoYz9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxoKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsRD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGQpe2Nhc2UgbzpyZXR1cm4gYz8kKDEsMCk6JCgzMSwxMSk7Y2FzZSB1OnJldHVybiBjPyQoMSxNKTokKDAsTSsxKTtjYXNlIHM6dmFyIHY9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLFM9KHk8dj95Kzc6eSktdjtyZXR1cm4gJChjP20tUzptKyg2LVMpLE0pO2Nhc2UgaTpjYXNlIGY6cmV0dXJuIGwoRCtcIkhvdXJzXCIsMCk7Y2FzZSByOnJldHVybiBsKEQrXCJNaW51dGVzXCIsMSk7Y2FzZSBuOnJldHVybiBsKEQrXCJTZWNvbmRzXCIsMik7Y2FzZSBlOnJldHVybiBsKEQrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSwkLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LCQuJHNldD1mdW5jdGlvbihzLGEpe3ZhciBoLGM9Zy5wKHMpLGQ9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLCQ9KGg9e30saFtpXT1kK1wiRGF0ZVwiLGhbZl09ZCtcIkRhdGVcIixoW3VdPWQrXCJNb250aFwiLGhbb109ZCtcIkZ1bGxZZWFyXCIsaFtyXT1kK1wiSG91cnNcIixoW25dPWQrXCJNaW51dGVzXCIsaFtlXT1kK1wiU2Vjb25kc1wiLGhbdF09ZCtcIk1pbGxpc2Vjb25kc1wiLGgpW2NdLGw9Yz09PWk/dGhpcy4kRCsoYS10aGlzLiRXKTphO2lmKGM9PT11fHxjPT09byl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChmLDEpO3kuJGRbJF0obCkseS5pbml0KCksdGhpcy4kZD15LnNldChmLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSAkJiZ0aGlzLiRkWyRdKGwpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSwkLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSwkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tnLnAodCldKCl9LCQuYWRkPWZ1bmN0aW9uKHQsYSl7dmFyIGYsaD10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPWcucChhKSxkPWZ1bmN0aW9uKGUpe3ZhciBuPXYoaCk7cmV0dXJuIGcudyhuLmRhdGUobi5kYXRlKCkrTWF0aC5yb3VuZChlKnQpKSxoKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09bylyZXR1cm4gdGhpcy5zZXQobyx0aGlzLiR5K3QpO2lmKGM9PT1pKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShmPXt9LGZbbl09NmU0LGZbcl09MzZlNSxmW2VdPTFlMyxmKVtjXXx8MSxsPXRoaXMuJGQuZ2V0VGltZSgpK3QqJDtyZXR1cm4gZy53KGwsdGhpcyl9LCQuc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sJC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgbj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1nLnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPWkud2Vla2RheXMsZj1pLm1vbnRocyxoPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChlLG4pKXx8aVtyXS5zdWJzdHIoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gZy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOmcucyhhKzEsMixcIjBcIiksTU1NOmgoaS5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOmcucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgoaS53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Zy5zKHMsMixcIjBcIiksaDpkKDEpLGhoOmQoMiksYTokKHMsdSwhMCksQTokKHMsdSwhMSksbTpTdHJpbmcodSksbW06Zy5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Zy5zKHRoaXMuJHMsMixcIjBcIiksU1NTOmcucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBuLnJlcGxhY2UoYyxmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxyLnJlcGxhY2UoXCI6XCIsXCJcIil9KX0sJC51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sJC5kaWZmPWZ1bmN0aW9uKHQsZixoKXt2YXIgYyxkPWcucChmKSwkPXYodCksbD02ZTQqKCQudXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkseT10aGlzLSQsTT1nLm0odGhpcywkKTtyZXR1cm4gTT0oYz17fSxjW29dPU0vMTIsY1t1XT1NLGNbYV09TS8zLGNbc109KHktbCkvNjA0OGU1LGNbaV09KHktbCkvODY0ZTUsY1tyXT15LzM2ZTUsY1tuXT15LzZlNCxjW2VdPXkvMWUzLGMpW2RdfHx5LGg/TTpnLmEoTSl9LCQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZih1KS4kRH0sJC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIE1bdGhpcy4kTF19LCQubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9RCh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSwkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIGcudyh0aGlzLiRkLHRoaXMpfSwkLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LCQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSwkLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sJC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LGR9KCkscD1TLnByb3RvdHlwZTtyZXR1cm4gdi5wcm90b3R5cGU9cCxbW1wiJG1zXCIsdF0sW1wiJHNcIixlXSxbXCIkbVwiLG5dLFtcIiRIXCIscl0sW1wiJFdcIixpXSxbXCIkTVwiLHVdLFtcIiR5XCIsb10sW1wiJERcIixmXV0uZm9yRWFjaChmdW5jdGlvbih0KXtwW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSx2LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLFMsdiksdC4kaT0hMCksdn0sdi5sb2NhbGU9RCx2LmlzRGF5anM9bSx2LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHYoMWUzKnQpfSx2LmVuPU1beV0sdi5Mcz1NLHYucD17fSx2fSk7XG4iLCIhZnVuY3Rpb24ocix0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTpyLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKHIsdCxlKXtyPXJ8fHt9O3ZhciBuPXQucHJvdG90eXBlLG89e2Z1dHVyZTpcImluICVzXCIscGFzdDpcIiVzIGFnb1wiLHM6XCJhIGZldyBzZWNvbmRzXCIsbTpcImEgbWludXRlXCIsbW06XCIlZCBtaW51dGVzXCIsaDpcImFuIGhvdXJcIixoaDpcIiVkIGhvdXJzXCIsZDpcImEgZGF5XCIsZGQ6XCIlZCBkYXlzXCIsTTpcImEgbW9udGhcIixNTTpcIiVkIG1vbnRoc1wiLHk6XCJhIHllYXJcIix5eTpcIiVkIHllYXJzXCJ9O2Z1bmN0aW9uIGkocix0LGUsbyl7cmV0dXJuIG4uZnJvbVRvQmFzZShyLHQsZSxvKX1lLmVuLnJlbGF0aXZlVGltZT1vLG4uZnJvbVRvQmFzZT1mdW5jdGlvbih0LG4saSxkLHUpe2Zvcih2YXIgYSxmLHMsbD1pLiRsb2NhbGUoKS5yZWxhdGl2ZVRpbWV8fG8saD1yLnRocmVzaG9sZHN8fFt7bDpcInNcIixyOjQ0LGQ6XCJzZWNvbmRcIn0se2w6XCJtXCIscjo4OX0se2w6XCJtbVwiLHI6NDQsZDpcIm1pbnV0ZVwifSx7bDpcImhcIixyOjg5fSx7bDpcImhoXCIscjoyMSxkOlwiaG91clwifSx7bDpcImRcIixyOjM1fSx7bDpcImRkXCIscjoyNSxkOlwiZGF5XCJ9LHtsOlwiTVwiLHI6NDV9LHtsOlwiTU1cIixyOjEwLGQ6XCJtb250aFwifSx7bDpcInlcIixyOjE3fSx7bDpcInl5XCIsZDpcInllYXJcIn1dLG09aC5sZW5ndGgsYz0wO2M8bTtjKz0xKXt2YXIgeT1oW2NdO3kuZCYmKGE9ZD9lKHQpLmRpZmYoaSx5LmQsITApOmkuZGlmZih0LHkuZCwhMCkpO3ZhciBwPShyLnJvdW5kaW5nfHxNYXRoLnJvdW5kKShNYXRoLmFicyhhKSk7aWYocz1hPjAscDw9eS5yfHwheS5yKXtwPD0xJiZjPjAmJih5PWhbYy0xXSk7dmFyIHY9bFt5LmxdO3UmJihwPXUoXCJcIitwKSksZj1cInN0cmluZ1wiPT10eXBlb2Ygdj92LnJlcGxhY2UoXCIlZFwiLHApOnYocCxuLHkubCxzKTticmVha319aWYobilyZXR1cm4gZjt2YXIgTT1zP2wuZnV0dXJlOmwucGFzdDtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBNP00oZik6TS5yZXBsYWNlKFwiJXNcIixmKX0sbi50bz1mdW5jdGlvbihyLHQpe3JldHVybiBpKHIsdCx0aGlzLCEwKX0sbi5mcm9tPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIGkocix0LHRoaXMpfTt2YXIgZD1mdW5jdGlvbihyKXtyZXR1cm4gci4kdT9lLnV0YygpOmUoKX07bi50b05vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy50byhkKHRoaXMpLHIpfSxuLmZyb21Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuZnJvbShkKHRoaXMpLHIpfX19KTtcbiIsIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJy4vUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQWN0aW9uQnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe3dhaXRpbmcsIGRpc2FibGVkfSkgPT4ge1xuICAvL2NvbnN0IHt3YWl0aW5nLCBkaXNhYmxlZH0gPSBwcm9wc1xuICAvL2NvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCB3YWl0aW5nXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAyOCxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogMCxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDFweCAycHgnLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgfSxcbiAgICAnOmZvY3VzLCA6YWN0aXZlJzoge1xuICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7UEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAnc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGXG59KVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAyNCxcbiAgZm9udFdlaWdodDogNTAwLFxuICBtYXJnaW46ICcyMHB4IDAgMTVweCdcbn0pXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE2LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIG1hcmdpbjogJzBweCAwIDIwcHgnLFxuICAnPiBkaXYgPiBhJzoge1xuICAgIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KVxuXG5jb25zdCBFbXB0eVBhZ2UgPSAoe3N2ZywgaGVhZGVyLCBzdWJIZWFkZXIsIGJ1dHRvbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDN9fVxuICAgICAgLCBzdmdcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NX19LCBoZWFkZXIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fSwgc3ViSGVhZGVyKVxuICAgICAgLCBidXR0b25cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlQYWdlXG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEZsYXRCdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKChwcm9wcykgPT4ge1xuICBjb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLXG4gICAgfSxcbiAgICAnOmFjdGl2ZSwgOmZvY3VzJzoge1xuICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7UEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgUEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFUlxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmxhdEJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1F1ZXVlQWN0aW9uc01lbnUudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdob29rcy91c2VSb3V0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6IDIwMFxufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luUmlnaHQ6IDE1LFxuICBmb250U2l6ZTogMThcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBwYWRkaW5nOiAnNXB4IDE1cHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFF1ZXVlQWN0aW9uc01lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgcXVldWVJZCwgb25EZWxldGUsIG9uRmx1c2gsIHNlbGVjdGVkUXVldWV9ID0gcHJvcHNcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0FkZCBxdWV1ZSB0YXNrcycsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5fX0sIFwiZWRpdFwiKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX0sIFwiRWRpdCBxdWV1ZVwiIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAsXG4gICAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3F1ZXVlcy8ke3F1ZXVlSWR9L2VkaXRgLFxuICAgICAgICAgICAgICBzdGF0ZToge3ByZXZSb3V0ZTogaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZX1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjJ9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319LCBcImNvbnRlbnRfY29weVwiKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX0sIFwiQ2xvbmUgcXVldWVcIiApXG4gICAgICAgICAgICApXG4gICAgICAgICAgLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogJy9xdWV1ZXMvbmV3JyxcbiAgICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBoYXNDbG9uZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbG9uZWRRdWV1ZToge1xuICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZWN0ZWRRdWV1ZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgbmFtZTogYCR7c2VsZWN0ZWRRdWV1ZS5uYW1lfSBDb3B5YCxcbiAgICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZFF1ZXVlLmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwfX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgzfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODR9fSwgXCJ1bmRvXCIpXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODV9fSwgXCJEZWxldGUgYWxsIHRhc2tzXCIgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAsXG4gICAgICAgICAgb25DbGljazogb25GbHVzaCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgxfX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTN9fSwgXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NH19LCBcIkRlbGV0ZSBxdWV1ZVwiIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAsXG4gICAgICAgICAgb25DbGljazogb25EZWxldGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBzZWxlY3RlZFF1ZXVlOiBzdGF0ZS5xdWV1ZXMuc2VsZWN0ZWRRdWV1ZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFF1ZXVlQWN0aW9uc01lbnUpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUXVldWVGaWx0ZXJDb2x1bW5NZW51LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcblxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuaW1wb3J0IHtCTE9DS1MsIEZJTFRFUl9CTE9DS19UWVBFU30gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuXG5cblxuXG5cblxuXG5jb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHdpZHRoOiAyMDBcbn0pXG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIG1hcmdpblJpZ2h0OiAxNSxcbiAgZm9udFNpemU6IDE4XG59KVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgcGFkZGluZzogJzVweCA1cHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IExhYmVsVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG59KVxuXG5jb25zdCBRdWV1ZUZpbHRlckNvbHVtbk1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgcXVldWUsIHNldFBpbm5lZEJsb2NrLCBhY3RpdmVCbG9ja05hbWV9ID0gcHJvcHNcblxuICBpZiAoIXF1ZXVlIHx8ICFBcnJheS5pc0FycmF5KHF1ZXVlLmRhdGEpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0ZpbHRlciBxdWV1ZSB0YXNrcycsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX1cbiAgICAgICAgLCBxdWV1ZS5kYXRhLm1hcCgoYmxvY2ssIGlkKSA9PiB7XG4gICAgICAgICAgaWYgKCFGSUxURVJfQkxPQ0tfVFlQRVMuaW5jbHVkZXMoYmxvY2sudHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICAgICAga2V5OiBpZCxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogYWN0aXZlQmxvY2tOYW1lID09PSBibG9jay5uYW1lLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19LCBfb3B0aW9uYWxDaGFpbihbQkxPQ0tTLCAnYWNjZXNzJywgXyA9PiBfLmZpbmQsICdjYWxsJywgXzIgPT4gXzIoKGIpID0+IGIudHlwZSA9PT0gYmxvY2sudHlwZSksICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmljb25dKSlcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Nn19LCBibG9jay5uYW1lKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRQaW5uZWRCbG9jayhibG9jay5pZClcbiAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgICwgYWN0aXZlQmxvY2tOYW1lICE9ICcnICYmXG4gICAgICAgICAgYWN0aXZlQmxvY2tOYW1lICE9IG51bGwgJiZcbiAgICAgICAgICBhY3RpdmVCbG9ja05hbWUgIT0gJ0lEJyAmJlxuICAgICAgICAgIHR5cGVvZiBhY3RpdmVCbG9ja05hbWUgIT09ICd1bmRlZmluZWQnICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICAgICAgZXh0cmFTcGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODJ9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODN9fSwgXCJyZWZyZXNoXCIpXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg0fX0sIFwiUmVzZXQgdG8gSURcIiAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGlubmVkQmxvY2sobnVsbClcbiAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc5fX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgc2VsZWN0ZWRRdWV1ZTogc3RhdGUucXVldWVzLnNlbGVjdGVkUXVldWVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShRdWV1ZUZpbHRlckNvbHVtbk1lbnUpXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZURvY3VtZW50VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0sIFt0aXRsZV0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURvY3VtZW50VGl0bGVcbiIsImNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuZXhwb3J0IGRlZmF1bHQgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJy4uLy4uL2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBnZXRGaXJzdExldHRlciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEF2YXRhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge2luaXRpYWxzLCBjb2xvciwgb25DbGljaywgc3R5bGUsIHRyaW0gPSB0cnVlfSA9IHByb3BzXG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgfHwgUEFMRVRURS5QUklNQVJZX01BSU5cblxuICBjb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5zcGFuKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB0ZXN0QWxpZ246ICdjZW50ZXInLFxuICAgIGhlaWdodDogYDIwcHhgLFxuICAgIHdpZHRoOiBgMjBweGAsXG4gICAgbWluV2lkdGg6IGAyMHB4YCxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IDExLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIG1hcmdpbjogJzBweCAycHgnXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19XG4gICAgICAsIHRyaW0gPyBnZXRGaXJzdExldHRlcihpbml0aWFscykgOiBpbml0aWFsc1xuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvTmV3VGFza01lbnUudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Qm94U2hhZG93fSBmcm9tICdjbGllbnQvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvRmxhdEJ1dHRvbidcbmltcG9ydCBCYXNpY1RleHRBcmVhIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jhc2ljVGV4dEFyZWEnXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkJ1xuaW1wb3J0IGNhcGl0YWxpemVGaXJzdExldHRlciBmcm9tICdjbGllbnQvdXRpbHMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJ1xuaW1wb3J0IGN1dE9mZlN0cmluZyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY3V0T2ZmU3RyaW5nJ1xuaW1wb3J0IFRhc2tSYWRpbyBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UYXNrUmFkaW8nXG5pbXBvcnQgVGFza0NoZWNrYm94IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tDaGVja2JveCdcbmltcG9ydCB7QkxPQ0tfVFlQRSwgU0FNUExFX1ZBTFVFU30gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7dGFza01lbnVTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0RWRpdG9yJ1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvRGF0ZVBpY2tlcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTW9kYWxSb290ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiA1MDAsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3cuTU9EQUxcbn0pXG5cbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMjIsXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luQm90dG9tOiAzNVxufSlcblxuY29uc3QgRm9ybUNvbnRlbnQgPSBzdHlsZWQoRm9ybSkoe1xuICBwYWRkaW5nOiAnMzVweCdcbn0pXG5cbmNvbnN0IFN1Ym1pc3Npb25TZWN0aW9uID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdCgyLCBhdXRvKScsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHBhZGRpbmdUb3A6ICcyNXB4J1xufSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkR2FwOiA1LFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luQm90dG9tOiAyNFxufSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW5SaWdodDogMjAsXG4gIGZvbnRTaXplOiAxNixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXG59KVxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAxMFxufSlcblxuY29uc3QgT3B0aW9ucyA9IHN0eWxlZC5kaXYoe1xuICBtYXhIZWlnaHQ6ICc2MnZoJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgcGFkZGluZzogJzhweCAwcHgnXG59KVxuXG5jb25zdCBRdWVzdGlvbiA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA1MDAsXG4gIGZvbnRTaXplOiAxNlxufSlcblxuY29uc3QgTmV3VGFza01lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2Nsb3NlUG9ydGFsLCBmb3JtYXQsIG9uU3VibWl0SGFuZGxlcn0gPSBwcm9wc1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7ZGF0YToge30sIHJlcXVpcmVkOiB7fX1cbiAgZm9ybWF0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIGlmIChpbml0aWFsVmFsdWVzLmRhdGFbaXRlbS50eXBlXSkge1xuICAgICAgaW5pdGlhbFZhbHVlcy5kYXRhW2l0ZW0udHlwZV1baXRlbS5pZF0gPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsVmFsdWVzLmRhdGFbaXRlbS50eXBlXSA9IHtbaXRlbS5pZF06ICcnfVxuICAgIH1cblxuICAgIGlmIChpdGVtLnR5cGUgPT09IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMpIHtcbiAgICAgIGluaXRpYWxWYWx1ZXMuZGF0YVtpdGVtLnR5cGVdID0ge1tpdGVtLmlkXToge2ltYWdlOiAnJ319XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1baXRlbS50eXBlXS5pc19yZXF1aXJlZCkge1xuICAgICAgaWYgKGluaXRpYWxWYWx1ZXMucmVxdWlyZWRbaXRlbS50eXBlXSkge1xuICAgICAgICBpbml0aWFsVmFsdWVzLnJlcXVpcmVkW2l0ZW0udHlwZV1baXRlbS5pZF0gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsVmFsdWVzLnJlcXVpcmVkW2l0ZW0udHlwZV0gPSB7W2l0ZW0uaWRdOiB0cnVlfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHRhc2tNZW51U2NoZW1hLFxuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbk1vdW50OiB0cnVlLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU6IHRydWUsXG4gICAgICAgIG9uU3VibWl0OiBvblN1Ym1pdEhhbmRsZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTZ9fVxuICAgICAgXG4gICAgICAgICwgKHtcbiAgICAgICAgICB0b3VjaGVkLFxuICAgICAgICAgIGlzU3VibWl0dGluZyxcbiAgICAgICAgICBpc1ZhbGlkLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgc2V0RmllbGRWYWx1ZVxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzV9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW5UaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzZ9fSwgXCJOZXcgVGFza1wiIClcbiAgICAgICAgICAgICwgZm9ybWF0Lm1hcCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgLy8gdGhpcyBzaW5nbGUgYW5kIG11bHRpcGxlIHNlbGVjdGlvbiBjb2RlIHdpbGwgY3VycmVudGx5IG5ldmVyIGJlIGludm9rZWQgYXMgdGhlIGJhY2sgZW5kIHdpbGwgbm90IHJldHVybiB0aGVzZSB0eXBlc1xuICAgICAgICAgICAgICByZXR1cm4gaW5wdXQudHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiBpbnB1dC5uYW1lLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQwfX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fSwgY3V0T2ZmU3RyaW5nKGNhcGl0YWxpemVGaXJzdExldHRlcihpbnB1dC5uYW1lKSwgMTgpKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbnMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX1cbiAgICAgICAgICAgICAgICAgICAgLCBpbnB1dFtpbnB1dC50eXBlXS5vcHRpb25zLm1hcCgob3B0aW9uLCBvcHRpb25JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogb3B0aW9uSW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9wdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG9wdGlvbi5pZCA9PT0gdmFsdWVzW2lucHV0LmlkXSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0NX19XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IGlucHV0LnR5cGUgPT09IEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiBpbnB1dC5uYW1lLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU4fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTl9fSwgY3V0T2ZmU3RyaW5nKGNhcGl0YWxpemVGaXJzdExldHRlcihpbnB1dC5uYW1lKSwgMTgpKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbnMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX1cbiAgICAgICAgICAgICAgICAgICAgLCBpbnB1dFtpbnB1dC50eXBlXS5vcHRpb25zLm1hcCgob3B0aW9uLCBvcHRpb25JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogb3B0aW9uSW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpbnB1dC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB2YWx1ZXNbaW5wdXQuaWRdICYmIHZhbHVlc1tpbnB1dC5pZF0uaW5jbHVkZXMob3B0aW9uLmlkKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2M319XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IGlucHV0LnR5cGUgPT09IEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsga2V5OiBpbnB1dC5uYW1lLCB0eXBlOiBpbnB1dC50eXBlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc2fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzd9fSwgaW5wdXQubmFtZSlcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgJiYgdmFsdWVzLmRhdGEgJiYgdmFsdWVzLmRhdGFbaW5wdXQudHlwZV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVzLmRhdGFbaW5wdXQudHlwZV1baW5wdXQuaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogU0FNUExFX1ZBTFVFU1tpbnB1dC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5wdXQudHlwZX1dWyR7aW5wdXQuaWR9XWAsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5kYXRhW2lucHV0LnR5cGVdICYmXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZC5kYXRhW2lucHV0LnR5cGVdW2lucHV0LmlkXSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJlxuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmRhdGFbaW5wdXQudHlwZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZGF0YVtpbnB1dC50eXBlXVtpbnB1dC5pZF1cbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgICAgICAgIG1heFJvd3M6IDMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IGlucHV0LnR5cGUgPT09IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMgPyAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBrZXk6IGlucHV0Lm5hbWUsIHR5cGU6IGlucHV0LnR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDd9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19LCBpbnB1dC5uYW1lKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmRhdGFbaW5wdXQudHlwZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZGF0YVtpbnB1dC50eXBlXVtpbnB1dC5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVzLmRhdGFbaW5wdXQudHlwZV1baW5wdXQuaWRdWydpbWFnZSddXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiYmInXG4gICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0W2lucHV0LnR5cGVdLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGlucHV0W2lucHV0LnR5cGVdLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFNBTVBMRV9WQUxVRVNbaW5wdXQudHlwZV1cbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbnB1dC50eXBlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHZhbHVlcy5kYXRhW2lucHV0LnR5cGVdLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbnB1dC50eXBlfV1bJHtpbnB1dC5pZH1dW2ltYWdlXWAsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmRhdGEgJiYgZXJyb3JzLmRhdGFbaW5wdXQudHlwZV1cbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLmRhdGFbaW5wdXQudHlwZV1baW5wdXQuaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZXM6IHt3aWR0aDogJzEwMCUnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogaW5wdXQudHlwZSA9PT0gQkxPQ0tfVFlQRS5SSUNIX1RFWFQgPyAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBrZXk6IGlucHV0Lm5hbWUsIHR5cGU6IGlucHV0LnR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzh9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOX19LCBpbnB1dC5uYW1lKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRFZGl0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgaXNUYXNrTWVudTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAmJiB2YWx1ZXMuZGF0YSAmJiB2YWx1ZXMuZGF0YVtpbnB1dC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZXMuZGF0YVtpbnB1dC50eXBlXVtpbnB1dC5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogU0FNUExFX1ZBTFVFU1tpbnB1dC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5wdXQudHlwZX1dWyR7aW5wdXQuaWR9XWAsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogaW5wdXRbaW5wdXQudHlwZV0uZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzICYmIGVycm9ycy5kYXRhICYmIGVycm9ycy5kYXRhW2lucHV0LnR5cGVdXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5kYXRhW2lucHV0LnR5cGVdW2lucHV0LmlkXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDB9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSA6IGlucHV0LnR5cGUgPT09IEJMT0NLX1RZUEUuREFURSA/IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IGtleTogaW5wdXQubmFtZSwgdHlwZTogaW5wdXQudHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2M319XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY0fX0sIGlucHV0Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwge1xuICAgICAgICAgICAgICAgICAgICBpc1Rhc2tNZW51OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICYmIHZhbHVlcy5kYXRhICYmIHZhbHVlcy5kYXRhW2lucHV0LnR5cGVdXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlcy5kYXRhW2lucHV0LnR5cGVdW2lucHV0LmlkXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFtpbnB1dC50eXBlXS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpbnB1dFtpbnB1dC50eXBlXS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBTQU1QTEVfVkFMVUVTW2lucHV0LnR5cGVdXG4gICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbnB1dC50eXBlfV1bJHtpbnB1dC5pZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyAmJiBlcnJvcnMuZGF0YSAmJiBlcnJvcnMuZGF0YVtpbnB1dC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvcnMuZGF0YVtpbnB1dC50eXBlXVtpbnB1dC5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY1fX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBrZXk6IGlucHV0Lm5hbWUsIHR5cGU6IGlucHV0LnR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODd9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4OH19LCBpbnB1dC5uYW1lKVxuICAgICAgICAgICAgICAgICAgLCBpbnB1dC50eXBlICE9PSBCTE9DS19UWVBFLlRFWFQgPyAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAmJiB2YWx1ZXMuZGF0YSAmJiB2YWx1ZXMuZGF0YVtpbnB1dC50eXBlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHZhbHVlcy5kYXRhW2lucHV0LnR5cGVdW2lucHV0LmlkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0W2lucHV0LnR5cGVdLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBTQU1QTEVfVkFMVUVTW2lucHV0LnR5cGVdXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGlucHV0LnR5cGUgPT09ICdudW1iZXInID8gJ251bWJlcicgOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZXMuZGF0YVtpbnB1dC50eXBlXS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbnB1dC50eXBlfV1bJHtpbnB1dC5pZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgJiYgZXJyb3JzLmRhdGEgJiYgZXJyb3JzLmRhdGFbaW5wdXQudHlwZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvcnMuZGF0YVtpbnB1dC50eXBlXVtpbnB1dC5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlczoge3dpZHRoOiAnMTAwJSd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjkwfX1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpbnB1dC5pZF0gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbaW5wdXQudHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpbnB1dFtpbnB1dC50eXBlXS5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFNBTVBMRV9WQUxVRVNbaW5wdXQudHlwZV1cbiAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogaW5wdXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4Um93czogMywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxNX19XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWlzc2lvblNlY3Rpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMxfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBjbG9zZVBvcnRhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzMn19LCBcIkNhbmNlbFwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxhdEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIWlzVmFsaWQgfHwgaXNTdWJtaXR0aW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM1fX0sIFwiQ3JlYXRlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2tNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvU3RhdHVzVGFnLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtTVEFUVVNfUEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtRVUVVRV9TVEFUVVN9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgZ2V0UXVldWVTdGF0dXMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldFF1ZXVlU3RhdHVzJ1xuXG5cblxuXG5cblxuY29uc3QgU3RhdHVzVGFnID0gKHtzdGF0dXMsIGNlbnRlcmVkfSkgPT4ge1xuICBsZXQgYmFja2dyb3VuZENvbG9yXG5cbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5PUEVOOlxuICAgICAgYmFja2dyb3VuZENvbG9yID0gU1RBVFVTX1BBTEVUVEUuT1BFTlxuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5JTl9QUk9HUkVTUzpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTXG4gICAgICBicmVha1xuICAgIGNhc2UgUVVFVUVfU1RBVFVTLk5FVzpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLk5FV1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5DT01QTEVURUQ6XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBTVEFUVVNfUEFMRVRURS5DT01QTEVURURcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTXG4gIH1cblxuICBjb25zdCBUYWcgPSBzdHlsZWQuZGl2KHtcbiAgICBwYWRkaW5nOiAnNXB4IDE1cHgnLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250U2l6ZTogMTEsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAuLi4oY2VudGVyZWQgJiYge21hcmdpbjogJzBweCBhdXRvJ30pXG4gIH0pXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX0sIGdldFF1ZXVlU3RhdHVzKHN0YXR1cykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c1RhZ1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvUXVldWUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCBBdmF0YXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IGN1dE9mZlN0cmluZyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY3V0T2ZmU3RyaW5nJ1xuaW1wb3J0IGNhcGl0YWxpemVGaXJzdExldHRlciBmcm9tICdjbGllbnQvdXRpbHMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCB7TWVudVBvc2l0aW9ufSBmcm9tICdjbGllbnQvaG9va3MvdXNlQ29vcmRzJ1xuaW1wb3J0IHVzZU1lbnUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQgUXVldWVBY3Rpb25zTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9RdWV1ZUFjdGlvbnNNZW51J1xuaW1wb3J0IFF1ZXVlRmlsdGVyQ29sdW1uTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9RdWV1ZUZpbHRlckNvbHVtbk1lbnUnXG5pbXBvcnQgRW1wdHlQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB1c2VNb2RhbCBmcm9tICdjbGllbnQvaG9va3MvdXNlTW9kYWwnXG5pbXBvcnQgQ29uZmlybWF0aW9uTW9kYWwgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvQ29uZmlybWF0aW9uTW9kYWwnXG5pbXBvcnQgTmV3VGFza01lbnUgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvTmV3VGFza01lbnUnXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUnXG5cbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgZm9ybWF0VmFsdWVzIGZyb20gJ3VuaXZlcnNhbC91dGlscy9mb3JtYXRWYWx1ZXMnXG5pbXBvcnQge3RyYW5zZm9ybURhdGVzfSBmcm9tICdjbGllbnQvdXRpbHMvZGF0ZUhlbHBlcnMnXG5pbXBvcnQgUXVldWVTZXR0aW5nc01vZGFsIGZyb20gJy4vUXVldWVTZXR0aW5nc01vZGFsJ1xuaW1wb3J0IHt3b3JrZmxsb3dBY3Rpb25zfSBmcm9tICdjbGllbnQvcmVkdXgvcXVldWVzUmVkdWNlcnMnXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IFN0YXR1c1RhZyBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TdGF0dXNUYWcnXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUGFnZSA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIG1pbldpZHRoOiA4MDAsXG4gIHBhZGRpbmc6ICcwIDEwJSAwIDEwJScsXG4gIGhlaWdodDogJzEwMCUnXG59KVxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nOiAnOTZweCAwIDcwcHggMCcsXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgZm9udFNpemU6ICcyNHB4JyxcbiAgbGluZUhlaWdodDogJzMwcHgnXG59KVxuXG5jb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xufSlcblxuY29uc3QgUGxheUJ1dHRvbiA9IHN0eWxlZChBY3Rpb25CdXR0b24pKHtcbiAgd2lkdGg6IDEwMCxcbiAgaGVpZ2h0OiAzMixcbiAgZm9udFNpemU6ICcxNHB4J1xufSlcblxuY29uc3QgVGFibGVIZWFkZXIgPSBzdHlsZWQuZGl2KHtcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNFOEVDRUUnLFxuICBoZWlnaHQ6IDQyLFxuICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBib3hTaGFkb3c6ICcwcHggMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wMiknLFxuICBtYXJnaW5Cb3R0b206IDI0LFxuICBwYWRkaW5nOiAnMHB4IDE1cHgnXG59KVxuXG5jb25zdCBUYWJsZUl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzIwJSdcbn0pXG5cbmNvbnN0IFRhYmxlSGVhZGVySXRlbSA9IHN0eWxlZChUYWJsZUl0ZW0pKHtcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzE0cHgnLFxuICBib3JkZXJMZWZ0OiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gLFxuICBwYWRkaW5nTGVmdDogMTBcbn0pXG5cbmNvbnN0IElESGVhZGVySXRlbSA9IHN0eWxlZChUYWJsZUhlYWRlckl0ZW0pKHtcbiAgYm9yZGVyTGVmdDogJ25vbmUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSlcblxuY29uc3QgSGVhZGVySXRlbVRleHQgPSBzdHlsZWQuZGl2KHtcbiAgcGFkZGluZ1JpZ2h0OiAzNSxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG59KVxuXG5jb25zdCBUYXNrc0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIGhlaWdodDogJ2NhbGMoMTAwJSAtIDI0MHB4IC0gODBweCknLFxuICBtYXhIZWlnaHQ6IDQ3MCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCdcbn0pXG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgcGFkZGluZzogJzEycHggMHB4JyxcbiAgaGVpZ2h0OiA0OCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjhmYScsXG4gIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZThlY2VlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KVxuXG5jb25zdCBUYXNrID0gc3R5bGVkLmRpdih7XG4gIGhlaWdodDogNDIsXG4gIHBhZGRpbmc6ICcwIDI1cHgnLFxuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y3ZjhmOSdcbiAgfVxufSlcblxuY29uc3QgR3JheVRleHQgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6ICcxNHB4JyxcbiAgY29sb3I6IGAke1BBTEVUVEUuVEVYVF9HUkFZfWAsXG4gIHBhZGRpbmdMZWZ0OiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBJRCA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWBcbn0pXG5cbmNvbnN0IEFzc2lnbmVkVG8gPSBzdHlsZWQuc3Bhbih7XG4gIGRpc3BsYXk6ICdmbGV4J1xufSlcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5zcGFuKHtcbiAgbWFyZ2luTGVmdDogNCxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG59KVxuXG5jb25zdCBDb2xvcmVkVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIGZvbnRTaXplOiAxNixcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogNjAwLFxuICBtYXJnaW5Ub3A6IDFcbn0pXG5cbmNvbnN0IFRhc2tzID0gc3R5bGVkLmRpdih7XG4gIGhlaWdodDogJ2NhbGMoMTAwJSAtIDQ4cHgpJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bydcbn0pXG5cbmNvbnN0IFF1ZXVlVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnXG59KVxuXG5jb25zdCBNZW51QnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHdpZHRoOiAzMCxcbiAgaGVpZ2h0OiAzMCxcbiAgcGFkZGluZ1RvcDogMi41LFxuICBwYWRkaW5nTGVmdDogNVxufSlcblxuY29uc3QgRmlsdGVyTWVudUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogMzAsXG4gIGhlaWdodDogMzAsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogMTAsXG4gIHRvcDogMThcbn0pXG5cbmNvbnN0IE1lbnVCdXR0b25TZWNvbmRhcnkgPSBzdHlsZWQoU2Vjb25kYXJ5QnV0dG9uKSh7XG4gIG1hcmdpblJpZ2h0OiAxNlxufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIGZvbnRTaXplOiAxNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbjogJzJweCAwIDAgNXB4J1xufSlcblxuY29uc3QgU3R5bGVkTWVudUljb24gPSBzdHlsZWQoSWNvbikoe1xuICBmb250U2l6ZTogMjQsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW46ICctMTBweCAwIDAgNXB4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pXG5cbmNvbnN0IFF1ZXVlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvcmdJZCxcbiAgICBxdWV1ZSxcbiAgICBzdGFydE5leHRUYXNrLFxuICAgIHF1ZXVlSWQsXG4gICAgZGVsZXRlUXVldWUsXG4gICAgZmx1c2hRdWV1ZVRhc2tzLFxuICAgIGZvcm1hdCxcbiAgICB0YXNrcyxcbiAgICB0YXNrUGFnZSxcbiAgICBzZXRUYXNrUGFnZSxcbiAgICB1c2VyLFxuICAgIGlzU3RhZmYsXG4gICAgc2V0UXVldWUsXG4gICAgc2V0U2VsZWN0ZWRRdWV1ZSxcbiAgICB1cGRhdGVRdWV1ZVxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7aXNfcnVubmluZzogaXNSdW5uaW5nLCBwaW5uZWRfYmxvY2s6IHBpbm5lZEJsb2NrfSA9IHF1ZXVlXG5cbiAgY29uc3QgW3Bpbm5lZEJsb2NrSWQsIHNldFBpbm5lZEJsb2NrSWRdID0gdXNlU3RhdGUocGlubmVkQmxvY2sgfHwgJycpXG5cbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IHttZW51UG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQcm9wcywgdG9nZ2xlUG9ydGFsfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX0xFRlQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlXG4gIH0pXG4gIGNvbnN0IHttb2RhbFBvcnRhbCwgdG9nZ2xlUG9ydGFsOiBuZXdUYXNrVG9nZ2xlUG9ydGFsLCBjbG9zZVBvcnRhbH0gPSB1c2VNb2RhbCh7b3ZlcmZsb3c6ICdhdXRvJ30pXG4gIGNvbnN0IHtcbiAgICBtb2RhbFBvcnRhbDogcXVldWVTZXR0aW5nc1BvcnRhbCxcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVF1ZXVlU2V0dGluZ3NNb2RhbCxcbiAgICBjbG9zZVBvcnRhbDogY2xvc2VRdWV1ZVNldHRpbmdzTW9kYWxcbiAgfSA9IHVzZU1vZGFsKHt9KVxuICBjb25zdCB7XG4gICAgbW9kYWxQb3J0YWw6IGNvbmZpcm1Nb2RhbFBvcnRhbCxcbiAgICB0b2dnbGVQb3J0YWw6IGNvbmZpcm1Ub2dnbGVQb3J0YWwsXG4gICAgY2xvc2VQb3J0YWw6IGNvbmZpcm1DbG9zZVBvcnRhbFxuICB9ID0gdXNlTW9kYWwoKVxuXG4gIGNvbnN0IHtcbiAgICBtb2RhbFBvcnRhbDogY29uZmlybUZsdXNoTW9kYWxQb3J0YWwsXG4gICAgdG9nZ2xlUG9ydGFsOiBjb25maXJtRmx1c2hUb2dnbGVQb3J0YWwsXG4gICAgY2xvc2VQb3J0YWw6IGNvbmZpcm1GbHVzaENsb3NlUG9ydGFsXG4gIH0gPSB1c2VNb2RhbCgpXG5cbiAgY29uc3Qge1xuICAgIG1lbnVQb3J0YWw6IGZpbHRlck1lbnVQb3J0YWwsXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5GaWx0ZXJNZW51UmVmLFxuICAgIG1lbnVQcm9wczogZmlsdGVyTWVudVByb3BzLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlRmlsdGVyTWVudVBvcnRhbFxuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlXG4gIH0pXG5cbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGNvbnN0IHJldHVybkRhdGEgPSBbXVxuICAgIGZvcm1hdC5mb3JFYWNoKCh7aWQsIHR5cGUsIG5hbWV9KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaWRdXG4gICAgICBpZiAodmFsdWVzLmRhdGEgJiYgdmFsdWVzLmRhdGFbdHlwZV0gJiYgdmFsdWVzLmRhdGFbdHlwZV1baWRdKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWVzLmRhdGFbdHlwZV1baWRdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJldHVybk9iaiA9IHtpZCwgdHlwZSwgbmFtZSwgW3R5cGVdOiB7dmFsdWV9fSBcbiAgICAgIHJldHVybkRhdGEucHVzaChyZXR1cm5PYmopXG4gICAgfSlcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtkYXRhOiBmb3JtYXRWYWx1ZXMocmV0dXJuRGF0YSkubWFwKHRyYW5zZm9ybURhdGVzKX1cbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzL2Zvcm1gLCBwYXlsb2FkKVxuXG4gICAgaWYgKHJlcy5lcnJvcnMpIHtcbiAgICAgIHByb3BzLmFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICB9XG5cbiAgICByZXMuZXJyb3JzICYmIGNsb3NlUG9ydGFsKClcblxuICAgIGNvbnN0IGZldGNoVGFza1BheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hUYXNrUmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKFxuICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzLyR7cmVzLmRhdGEuaWR9YCxcbiAgICAgIGZldGNoVGFza1BheWxvYWRcbiAgICApXG5cbiAgICBjb25zdCB7ZGF0YX0gPSBmZXRjaFRhc2tSZXMgfHwge31cblxuICAgIGNvbnN0IHJvdXRlID0gZGF0YS5pZCA/IGAvcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHtkYXRhLmlkfWAgOiBgL3F1ZXVlcy8ke3F1ZXVlSWR9L2Nvbm5lY3Rpb25zYFxuICAgIGNvbnN0IHRhc2tTdGF0ZSA9IGRhdGEuaWQgPyB7aGFzQ2hhbmdlZDogZmFsc2V9IDogbnVsbFxuXG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiByb3V0ZSxcbiAgICAgIHN0YXRlOiB0YXNrU3RhdGVcbiAgICB9KVxuXG4gICAgY2xvc2VQb3J0YWwoKVxuICB9XG5cbiAgY29uc3QgcnVuUXVldWUgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFF1ZXVlID0ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgaXNfcnVubmluZzogdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGRhdGE6IHVwZGF0ZWRRdWV1ZVxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH1gLCBwYXlsb2FkKVxuICAgIGlmIChfb3B0aW9uYWxDaGFpbihbcmVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uZXJyb3JzXSkpIHtcbiAgICAgIHByb3BzLmFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0FuIGVycm9yIG9jY3VycmVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UXVldWUodXBkYXRlZFF1ZXVlKVxuICAgICAgc2V0U2VsZWN0ZWRRdWV1ZSh1cGRhdGVkUXVldWUpXG4gICAgICB1cGRhdGVRdWV1ZSh1cGRhdGVkUXVldWUpXG4gICAgICBwcm9wcy5hZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdUaGlzIHF1ZXVlIGlzIG5vdyBiZWluZyBleGVjdXRlZCBieSBIdW1hbiBMYW1iZGFzJylcbiAgICB9XG4gICAgY2xvc2VRdWV1ZVNldHRpbmdzTW9kYWwoKVxuICB9XG5cbiAgY29uc3QgZmluYWxQYWdlID0gTWF0aC5mbG9vcigocXVldWUubl90YXNrcyAtIDEpIC8gMTApICsgMSB8fCAxXG5cbiAgY29uc3QgQmFja05hdkljb24gPSBzdHlsZWQoSWNvbikoe1xuICAgIGNvbG9yOiB0YXNrUGFnZSA9PT0gMSA/IFBBTEVUVEUuVEVYVF9HUkFZIDogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gICAgY3Vyc29yOiB0YXNrUGFnZSA9PT0gMSA/ICdhdXRvJyA6ICdwb2ludGVyJyxcbiAgICBtYXJnaW46ICcwcHggMTJweCdcbiAgfSlcblxuICBjb25zdCBGb3J3YXJkTmF2SWNvbiA9IHN0eWxlZChJY29uKSh7XG4gICAgY29sb3I6IHRhc2tQYWdlID09PSBmaW5hbFBhZ2UgPyBgJHtQQUxFVFRFLlRFWFRfR1JBWX1gIDogYCR7UEFMRVRURS5QUklNQVJZX01BSU59YCxcbiAgICBjdXJzb3I6IHRhc2tQYWdlID09PSBmaW5hbFBhZ2UgPyAnYXV0bycgOiAncG9pbnRlcicsXG4gICAgbWFyZ2luOiAnMHB4IDEycHgnXG4gIH0pXG5cbiAgY29uc3QgcGF1c2VRdWV1ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkUXVldWUgPSB7XG4gICAgICAuLi5xdWV1ZSxcbiAgICAgIGlzX3J1bm5pbmc6IGZhbHNlXG4gICAgfVxuICAgIHNldFF1ZXVlKHVwZGF0ZWRRdWV1ZSlcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGRhdGE6IHVwZGF0ZWRRdWV1ZVxuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH1gLCBwYXlsb2FkKVxuICAgIGlmIChfb3B0aW9uYWxDaGFpbihbcmVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5lcnJvcnNdKSkge1xuICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignQW4gZXJyb3Igb2NjdXJyZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5hZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdRdWV1ZSBleGVjdXRpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHBhdXNlZCcpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUnVuT3JQYXVzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICBwYXVzZVF1ZXVlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlUXVldWVTZXR0aW5nc01vZGFsKClcbiAgICB9XG4gIH0sIFtxdWV1ZV0pXG5cbiAgY29uc3Qgc2V0UGlubmVkQmxvY2sgPSBhc3luYyAoaWQpID0+IHtcbiAgICBzZXRQaW5uZWRCbG9ja0lkKGlkKVxuXG4gICAgYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGRhdGE6IHtwaW5uZWRfYmxvY2s6IGlkfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBleHRyYWN0UGlubmVkVmFsdWUgPSAoZGF0YSwgaWQpID0+IHtcbiAgICBsZXQgcGlubmVkVmFsdWUgPSAnJ1xuICAgIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEubWFwKChibG9jaykgPT4ge1xuICAgICAgICBpZiAocGlubmVkQmxvY2tJZCkge1xuICAgICAgICAgIGlmIChibG9jay5pZCA9PT0gcGlubmVkQmxvY2tJZCkge1xuICAgICAgICAgICAgcGlubmVkVmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfMyA9PiBfM1tibG9jay50eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzQgPT4gXzQudmFsdWVdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaW5uZWRWYWx1ZSA9ICcjJyArIGlkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHBpbm5lZFZhbHVlXG4gIH1cblxuICBjb25zdCBleHRyYWN0UGlubmVkVGl0bGUgPSAocXVldWUpID0+IHtcbiAgICBsZXQgcGlubmVkVGl0bGUgPSAnJ1xuXG4gICAgaWYgKHF1ZXVlLmRhdGEgJiYgQXJyYXkuaXNBcnJheShxdWV1ZS5kYXRhKSkge1xuICAgICAgcXVldWUuZGF0YS5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIGlmIChwaW5uZWRCbG9ja0lkKSB7XG4gICAgICAgICAgaWYgKGJsb2NrLmlkID09PSBwaW5uZWRCbG9ja0lkKSB7XG4gICAgICAgICAgICBwaW5uZWRUaXRsZSA9IGJsb2NrLm5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGlubmVkVGl0bGUgPSAnSUQnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHBpbm5lZFRpdGxlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDJ9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDN9fVxuICAgICAgICAgICwgcXVldWUubmFtZSAmJiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoY3V0T2ZmU3RyaW5nKHF1ZXVlLm5hbWUsIDI1KSlcbiAgICAgICAgICAsIF9vcHRpb25hbENoYWluKFt1c2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5pc19hZG1pbl0pICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUJ1dHRvbkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDZ9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTWVudUljb24sIHsgb25DbGljazogdG9nZ2xlUG9ydGFsLCByZWY6IG9yaWdpblJlZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0N319LCBcImV4cGFuZF9tb3JlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25zLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1M319XG4gICAgICAgICAgLCBfb3B0aW9uYWxDaGFpbihbdXNlciwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYuaXNfYWRtaW5dKSAmJiAhaXNTdGFmZiAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVCdXR0b25TZWNvbmRhcnksIHtcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChgL3F1ZXVlcy8ke3F1ZXVlSWR9L2Nvbm5lY3Rpb25zYClcbiAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1NX19XG4gICAgICAgICAgICAsIFwiQ29ubmVjdGlvbnNcIlxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgcXVldWUuZGF0YSAmJiBxdWV1ZS5kYXRhLmxlbmd0aCA+IDAgJiYgIWlzU3RhZmYgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QnV0dG9uU2Vjb25kYXJ5LCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQubGVuZ3RoID4gMCA/IG5ld1Rhc2tUb2dnbGVQb3J0YWwoKSA6IG9uU3VibWl0SGFuZGxlcih7fSlcbiAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2NH19XG4gICAgICAgICAgICAsIFwiTmV3IFRhc2tcIlxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgKCFfb3B0aW9uYWxDaGFpbihbdXNlciwgJ29wdGlvbmFsQWNjZXNzJywgXzcgPT4gXzcuaXNfYWRtaW5dKSB8fCBpc1N0YWZmKSAmJiBxdWV1ZS5uX3Rhc2tzID4gMCA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxheUJ1dHRvbiwgeyBvbkNsaWNrOiBzdGFydE5leHRUYXNrLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDczfX0sIFwiUGxheVwiKVxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgLCBfb3B0aW9uYWxDaGFpbihbdXNlciwgJ29wdGlvbmFsQWNjZXNzJywgXzggPT4gXzguaXNfYWRtaW5dKSAmJiAhaXNTdGFmZiAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBsYXlCdXR0b24sIHsgb25DbGljazogaGFuZGxlUnVuT3JQYXVzZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ3Nn19LCBpc1J1bm5pbmcgPyAnUGF1c2UnIDogJ1J1bicpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVIZWFkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDgwfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElESGVhZGVySXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0ODF9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJJdGVtVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0ODJ9fSwgZXh0cmFjdFBpbm5lZFRpdGxlKHF1ZXVlKSlcbiAgICAgICAgICAsIF9vcHRpb25hbENoYWluKFt1c2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOSA9PiBfOS5pc19hZG1pbl0pICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsdGVyTWVudUJ1dHRvbkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0ODR9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTWVudUljb24sIHsgb25DbGljazogdG9nZ2xlRmlsdGVyTWVudVBvcnRhbCwgcmVmOiBvcmlnaW5GaWx0ZXJNZW51UmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDg1fX0sIFwiZXhwYW5kX21vcmVcIlxuXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSGVhZGVySXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OTF9fSwgXCJTdGF0dXNcIilcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSGVhZGVySXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OTJ9fSwgXCJBc3NpZ25lZCBUb1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSGVhZGVySXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OTN9fSwgXCJDb21tZW50c1wiKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVIZWFkZXJJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5NH19LCBcIkNyZWF0ZWQgQXRcIiApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza3NDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDk2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tzLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5N319XG4gICAgICAgICAgLCB0YXNrcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHtpZCwgc3RhdHVzLCBjcmVhdGVkX2F0LCBhc3NpZ25lZF90bywgbl9jb21tZW50cywgZGF0YX0gPSB0YXNrXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2ssIHsga2V5OiBpZCwgb25DbGljazogKCkgPT4gaGlzdG9yeS5wdXNoKGAvcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHtpZH1gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwM319XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwNH19XG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJRCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MDV9fVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJJdGVtVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MDZ9fSwgZXh0cmFjdFBpbm5lZFZhbHVlKGRhdGEsIGlkKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MDl9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdHVzVGFnLCB7IHN0YXR1czogc3RhdHVzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTExfX0gKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxNH19XG4gICAgICAgICAgICAgICAgICAgICwgYXNzaWduZWRfdG8gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXNzaWduZWRUbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MTZ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsczogYXNzaWduZWRfdG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvckZyb21TdHJpbmcoYXNzaWduZWRfdG8pLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTE3fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyMX19LCBhc3NpZ25lZF90bylcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTI1fX1cbiAgICAgICAgICAgICAgICAgICAgLCBuX2NvbW1lbnRzID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmF5VGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mjd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyOH19LCBuX2NvbW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTI5fX0sIFwiY29tbWVudFwiKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MzN9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JheVRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTM0fX0sIGRheWpzKGNyZWF0ZWRfYXQpLmZyb21Ob3coKSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlQYWdlLCB7XG4gICAgICAgICAgICAgIGhlYWRlcjogJ1RoaXMgcXVldWUgY3VycmVudGx5IGhhcyBubyB0YXNrcycsXG4gICAgICAgICAgICAgIHN1YkhlYWRlcjogXCJZb3UgY2FuIHVwbG9hZCB0YXNrcyBhdCB0aGlzIHF1ZXVlJ3MgY29ubmVjdGlvbnMgcGFnZVwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTQwfX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NDZ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCYWNrTmF2SWNvbiwgeyBvbkNsaWNrOiAoKSA9PiBzZXRUYXNrUGFnZSgxKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0N319LCBcImZpcnN0X3BhZ2VcIilcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFja05hdkljb24sIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhc2tQYWdlID4gMSkgc2V0VGFza1BhZ2UodGFza1BhZ2UgLSAxKVxuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0OH19XG4gICAgICAgICAgLCBcIm5hdmlnYXRlX2JlZm9yZVwiXG5cbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbG9yZWRUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1NX19LCB0YXNrUGFnZSlcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9yd2FyZE5hdkljb24sIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhc2tQYWdlICE9PSBmaW5hbFBhZ2UpIHNldFRhc2tQYWdlKHRhc2tQYWdlICsgMSlcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NTZ9fVxuICAgICAgICAgICwgXCJuYXZpZ2F0ZV9uZXh0XCJcblxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9yd2FyZE5hdkljb24sIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGFza1BhZ2UoZmluYWxQYWdlKVxuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU2M319XG4gICAgICAgICAgLCBcImxhc3RfcGFnZVwiXG5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZUFjdGlvbnNNZW51LCB7XG4gICAgICAgICAgcXVldWVJZDogcXVldWVJZCxcbiAgICAgICAgICBvcmdJZDogb3JnSWQsXG4gICAgICAgICAgbWVudVByb3BzOiBtZW51UHJvcHMsXG4gICAgICAgICAgb25EZWxldGU6IGNvbmZpcm1Ub2dnbGVQb3J0YWwsXG4gICAgICAgICAgb25GbHVzaDogY29uZmlybUZsdXNoVG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTczfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBtb2RhbFBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOZXdUYXNrTWVudSwgeyBvblN1Ym1pdEhhbmRsZXI6IG9uU3VibWl0SGFuZGxlciwgY2xvc2VQb3J0YWw6IGNsb3NlUG9ydGFsLCBmb3JtYXQ6IGZvcm1hdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU4Mn19IClcbiAgICAgIClcbiAgICAgICwgY29uZmlybU1vZGFsUG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICAgIGNsb3NlUG9ydGFsOiBjb25maXJtQ2xvc2VQb3J0YWwsXG4gICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtYW5lbnRseSBkZWxldGUgdGhpcyBxdWV1ZT8nLFxuICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlUXVldWUoKVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1ODV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGNvbmZpcm1GbHVzaE1vZGFsUG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxuICAgICAgICAgIGNsb3NlUG9ydGFsOiBjb25maXJtRmx1c2hDbG9zZVBvcnRhbCxcbiAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1hbmVudGx5IGRlbGV0ZSBhbGwgdGFza3MgZnJvbSB0aGlzIHF1ZXVlPycsXG4gICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICBmbHVzaFF1ZXVlVGFza3MoKVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1OTV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIHF1ZXVlU2V0dGluZ3NQb3J0YWwoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVTZXR0aW5nc01vZGFsLCB7XG4gICAgICAgICAgY2xvc2VQb3J0YWw6IGNsb3NlUXVldWVTZXR0aW5nc01vZGFsLFxuICAgICAgICAgIHJ1blF1ZXVlOiBydW5RdWV1ZSxcbiAgICAgICAgICBxdWV1ZTogcXVldWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MDV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGZpbHRlck1lbnVQb3J0YWwoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVGaWx0ZXJDb2x1bW5NZW51LCB7XG4gICAgICAgICAgcXVldWU6IHF1ZXVlLFxuICAgICAgICAgIGFjdGl2ZUJsb2NrTmFtZTogZXh0cmFjdFBpbm5lZFRpdGxlKHF1ZXVlKSxcbiAgICAgICAgICBtZW51UHJvcHM6IGZpbHRlck1lbnVQcm9wcyxcbiAgICAgICAgICBzZXRQaW5uZWRCbG9jazogc2V0UGlubmVkQmxvY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MTJ9fVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEZhaWx1cmVOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oYXJnKSksXG4gICAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihhcmcpKSxcbiAgICB1cGRhdGVRdWV1ZTogKGFyZykgPT4gZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy51cGRhdGVRdWV1ZShhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdWV1ZSlcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlU2V0dGluZ3NNb2RhbC50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgdXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9UZXh0QXJlYSdcbmltcG9ydCB7cXVldWVTZXR0aW5nc1NjaGVtYX0gZnJvbSAndW5pdmVyc2FsL3ZhbGlkYXRpb25zL3l1cFNjaGVtYSdcblxuXG5cblxuXG5cblxuY29uc3QgTW9kYWxSb290ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1heFdpZHRoOiA3MDAsXG4gIHdpZHRoOiA3MDAsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3cuTU9EQUwsXG4gIHBhZGRpbmdUb3A6IDM1LFxuICBwYWRkaW5nQm90dG9tOiAzNSxcbiAgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KSdcbn0pXG5cbmNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB3aWR0aDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nXG59KVxuXG5jb25zdCBNb2RhbEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyN3B4JyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwYWRkaW5nUmlnaHQ6IDM1XG59KVxuXG5jb25zdCBNb2RhbE5vdGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250U2l6ZTogJzE4cHgnLFxuICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gIG1hcmdpbkJvdHRvbTogMjUsXG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgcGFkZGluZ1JpZ2h0OiAzNSxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9EQVJLRVJfR1JBWVxufSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgbWFyZ2luQm90dG9tOiA1XG59KVxuXG5jb25zdCBOb3RlID0gc3R5bGVkLnNwYW4oe1xuICBmb250U2l6ZTogMTIsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFdlaWdodDogNDAwXG59KVxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBhbGlnbkl0ZW1zOiAndG9wJyxcbiAgbWFyZ2luQm90dG9tOiA1XG59KVxuXG5jb25zdCBGb3JtQ29udGVudCA9IHN0eWxlZChGb3JtKSh7XG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBoZWlnaHQ6ICdpbmhlcml0J1xufSlcblxuY29uc3QgUXVvdGFJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGFsaWduSXRlbXM6ICd0b3AnLFxuICBtYXJnaW5Ub3A6IDEwLFxuICBncmlkR2FwOiAxMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmJmZicsXG4gIHBhZGRpbmc6IDIwLFxuICBib3JkZXJSYWRpdXM6IDRcbn0pXG5cbmNvbnN0IFF1b3RhSW5mbyA9IHN0eWxlZC5zcGFuKHtcbiAgZm9udFNpemU6IDEyLFxuICBjb2xvcjogJyM4NDZjZjEnLFxuICBmb250V2VpZ2h0OiA0MDBcbn0pXG5cbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtYXJnaW5Cb3R0b206IDEwXG59KVxuXG5jb25zdCBNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Ub3A6IDEwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nTGVmdDogMzUsXG4gIHBhZGRpbmdSaWdodDogMzVcbn0pXG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nTGVmdDogMzUsXG4gIHBhZGRpbmdSaWdodDogMzVcbn0pXG5cbmNvbnN0IFNldHRpbmdGaWVsZHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbkZpZWxkLCBkZXNjcmlwdGlvbk1ldGEsIF9kZXNjcmlwdGlvbkhlbHBlcl0gPSB1c2VGaWVsZCgndGFza19kZXNjcmlwdGlvbicpXG4gIGNvbnN0IFtndWlkZWxpbmVzRmllbGQsIGd1aWRlbGluZXNNZXRhLCBfZ3VpZGVsaW5lc0hlbHBlcl0gPSB1c2VGaWVsZCgnZ3VpZGVsaW5lc191cmwnKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjl9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19LCBcIkRlc2NyaWJlIHRoZSBnb2FsIG9mIHRoZSB0YXNrIFwiICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwge1xuICAgICAgICAgICAgLi4uZGVzY3JpcHRpb25GaWVsZCxcbiAgICAgICAgICAgIGNhY2hlTWVhc3VyZW1lbnRzOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IGRlc2NyaXB0aW9uTWV0YS5lcnJvcixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBtaW5Sb3dzOiA0LFxuICAgICAgICAgICAgbWF4Um93czogOCxcbiAgICAgICAgICAgIHBvc2l0aW9uRXJyb3JCZWxvdzogZmFsc2UsXG4gICAgICAgICAgICBzY3JvbGxhYmxlOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMyfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDN9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0NH19LCBcIlJlcXVpcmVkIGZpZWxkLiBUaGlzIHdpbGwgaGVscCB1cyB1bmRlcnN0YW5kIGhvdyB0YXNrcyBpbiB0aGlzIHF1ZXVlIHNob3VsZCBiZSBkZWxpdmVyZWQuXCJcblxuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1MH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUxfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUyfX0sIFwiSW5jbHVkZSBhIGxpbmsgdG8gYSBndWlkZWxpbmVzIGRvY3VtZW50IG9yIGluc3RydWN0aW9uYWwgdmlkZW9cIiAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgLi4uZ3VpZGVsaW5lc0ZpZWxkLFxuICAgICAgICAgICAgZXJyb3I6IGd1aWRlbGluZXNNZXRhLmVycm9yLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJodHRwczovL2V4YW1wbGUuY29tL2xpbmstdG8tZG9jdW1lbnRcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1M319XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjF9fSwgXCJPcHRpb25hbCBmaWVsZCB3aXRoIGEgVVJMIHRvIHB1YmxpY2x5IGFjY2Vzc2libGUgaW5zdHJ1Y3Rpb25zLiBUaGUgbW9yZSBkZXRhaWxlZCBjb250ZXh0IGFuZCBleGFtcGxlcywgdGhlIGhpZ2hlciB0aGUgb3V0cHV0IHF1YWxpdHkgd2UnbGwgYmUgYWJsZSB0byBwcm92aWRlLlwiXG5cblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBRdWV1ZVNldHRpbmdzTW9kYWwgPSAoe3J1blF1ZXVlLCBxdWV1ZSwgY2xvc2VQb3J0YWx9KSA9PiAoXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7IGlkOiBcInF1ZXVlLXNldHRpbmdzLW1vZGFsXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzJ9fVxuICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWssIHtcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHF1ZXVlU2V0dGluZ3NTY2hlbWEsXG4gICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICBpbml0aWFsVmFsdWVzOiBxdWV1ZSxcbiAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgIG9uU3VibWl0OiBydW5RdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3M319XG4gICAgXG4gICAgICAsICh7aXNWYWxpZCwgaXNTdWJtaXR0aW5nfSkgPT4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250ZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4Mn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4M319LCBcIkF1dG9tYXRlIHlvdXIgcXVldWVcIiAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg0fX0sIFwiVGVsbCB1cyBob3cgdGhpcyBxdWV1ZSBzaG91bGQgYmUgcnVuIGFuZCB3ZSdsbCBoYW5kbGUgaXQgZm9yIHlvdS5cIiAgICAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODV9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4Nn19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZXR0aW5nRmllbGRzLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4N319IClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODh9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdW90YUluZm9XcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4OX19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVvdGFJbmZvLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5MH19LCBcIllvdXIgYWNjb3VudCBpbmNsdWRlcyBhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgLCAnICdcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTJ9fSwgXCJtb250aGx5IHF1b3RhIG9mIDEwMCB0YXNrcyBoYW5kbGVkIGJ5IHVzIGF0IG5vIGNvc3QuIFwiICAgICAgICAgICApLCBcIldlIHdpbGwgc2VuZCB5b3UgYW4gZW1haWwgb25jZSB5b3UgYXBwcm9hY2ggeW91ciBsaW1pdC5cIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVvdGFJbmZvLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5NX19LCBcIklmIHlvdSBhcmUgYW50aWNpcGF0aW5nIGEgbGFyZ2UgdGFzayBsb2FkLCBoYXZlIHNwZWNpZmljIFNMQSByZXF1aXJlbWVudHMgb3Igd2FudCB0byBhc2sgYWRkaXRpaW9uYWwgcXVlc3Rpb25zLCBkb24ndCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIGF0XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAnICdcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTh9fSwgXCJjb250YWN0QGh1bWFubGFtYmRhcy5jb21cIilcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsRm9vdGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIWlzVmFsaWQgfHwgaXNTdWJtaXR0aW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA1fX0sIFwiRW5hYmxlXCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiBjbG9zZVBvcnRhbCgpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA4fX0sIFwiQ2FuY2VsXCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxuKVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZVNldHRpbmdzTW9kYWxcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFF1ZXVlIGZyb20gJ3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvUXVldWUnXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICdjbGllbnQvaG9va3MvdXNlRG9jdW1lbnRUaXRsZSdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcblxuaW1wb3J0IHthZGRTdWNjZXNzTm90aWZpY2F0aW9ufSBmcm9tICdjbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NlZ21lbnRUcmFja30gZnJvbSAnY2xpZW50L3V0aWxzL3NlZ21lbnRJbydcbmltcG9ydCB7d29ya2ZsbG93QWN0aW9uc30gZnJvbSAnY2xpZW50L3JlZHV4L3F1ZXVlc1JlZHVjZXJzJ1xuaW1wb3J0IGlzVXNlclN0YWZmIGZyb20gJ2NsaWVudC91dGlscy9pc1VzZXJTdGFmZidcblxuXG5cblxuXG5cblxuY29uc3QgUXVldWVDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3F1ZXVlLCBzZXRRdWV1ZV0gPSB1c2VTdGF0ZSh7fSApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZm9ybWF0LCBzZXRGb3JtYXRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtmb3JtYXRMb2FkaW5nLCBzZXRGb3JtYXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdIClcbiAgY29uc3QgW3Rhc2tMb2FkaW5nLCBzZXRUYXNrTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Rhc2tQYWdlLCBzZXRUYXNrUGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcblxuICBjb25zdCBvcmdJZCA9IHByb3BzLnVzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWRcbiAgY29uc3QgcXVldWVJZCA9IHByb3BzLm1hdGNoLnBhcmFtcy5xdWV1ZUlkXG4gIGNvbnN0IG9yZ2FuaXphdGlvbnMgPSBwcm9wcy5vcmdhbml6YXRpb25zXG4gIGNvbnN0IGlzU3RhZmYgPSBpc1VzZXJTdGFmZihvcmdhbml6YXRpb25zLCBvcmdJZClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVldWUoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9XG4gICAgICBjb25zdCB7ZGF0YX0gPVxuICAgICAgICAoYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfWAsIHBheWxvYWQpKSB8fCB7fVxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc2V0UXVldWUoZGF0YSlcbiAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRRdWV1ZShkYXRhKVxuICAgICAgfVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBmZXRjaFF1ZXVlKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlRm9ybWF0KCkge1xuICAgICAgaWYgKFxuICAgICAgICBvcmdhbml6YXRpb25zLmxlbmd0aCA+IDAgJiYgLy8gSWYgb3JncyBhcmVuJ3QgbG9hZGVkIGlzU3RhZmYgbWF5IGJlIGluY29ycmVjdFxuICAgICAgICAhaXNTdGFmZiAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KGZvcm1hdCkgJiZcbiAgICAgICAgZm9ybWF0Lmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHNldEZvcm1hdExvYWRpbmcodHJ1ZSlcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge2RhdGF9ID1cbiAgICAgICAgICAoYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy9mb3JtYCwgcGF5bG9hZCkpIHx8XG4gICAgICAgICAge31cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBjb25zdCB7ZGF0YTogZm9ybWF0RGF0YX0gPSBkYXRhIHx8IHt9XG4gICAgICAgICAgc2V0Rm9ybWF0KGZvcm1hdERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgc2V0Rm9ybWF0TG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaFF1ZXVlRm9ybWF0KClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRhc2tzKCkge1xuICAgICAgc2V0VGFza0xvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtkYXRhfSA9XG4gICAgICAgIChhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzL3BlbmRpbmc/bGltaXQ9MTAmb2Zmc2V0PSR7XG4gICAgICAgICAgICAodGFza1BhZ2UgLSAxKSAqIDEwIHx8IDBcbiAgICAgICAgICB9YCxcbiAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICkpIHx8IHt9XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBzZXRUYXNrcyhkYXRhLnRhc2tzKVxuICAgICAgfVxuICAgICAgc2V0VGFza0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZmV0Y2hUYXNrcygpXG4gIH0sIFt0YXNrUGFnZV0pXG5cbiAgY29uc3QgZGVsZXRlUXVldWUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgZGF0YToge2Rpc2FibGVkOiB0cnVlfVxuICAgICAgfSlcbiAgICAgIHNlZ21lbnRUcmFjaygnUXVldWUgRGVsZXRlZCcsIHtcbiAgICAgICAgb3JnSWQsXG4gICAgICAgIHF1ZXVlSWQsXG4gICAgICAgIHVzZXJJZDogcHJvcHMudXNlci5pZCxcbiAgICAgICAgbmFtZVxuICAgICAgfSlcbiAgICAgIHByb3BzLmFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oJ1RoaXMgcXVldWUgaGFzIG5vdyBiZWVuIGRlbGV0ZWQnKVxuICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVzYClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmx1c2hRdWV1ZVRhc2tzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L2ZsdXNoYCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnXG4gICAgICB9KVxuICAgICAgc2VnbWVudFRyYWNrKCdRdWV1ZSBUYXNrcyBEZWxldGVkJywge1xuICAgICAgICBvcmdJZCxcbiAgICAgICAgcXVldWVJZCxcbiAgICAgICAgdXNlcklkOiBwcm9wcy51c2VyLmlkXG4gICAgICB9KVxuICAgICAgcHJvcHMuYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihgVGhlIHF1ZXVlJ3MgdGFza3MgaGF2ZSBub3cgYmVlbiBkZWxldGVkYClcbiAgICAgIHNldFRhc2tzKFtdKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGFydE5leHRUYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvbmV4dGAsIHBheWxvYWQpXG4gICAgY29uc3Qge2RhdGF9ID0gcmVzIHx8IHt9XG4gICAgY29uc3Qgcm91dGUgPSBkYXRhLmlkID8gYC9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy8ke2RhdGEuaWR9YCA6IGAvcXVldWVzLyR7cXVldWVJZH0vY29ubmVjdGlvbnNgXG4gICAgaGlzdG9yeS5wdXNoKHJvdXRlKVxuICB9XG5cbiAgbGV0IHJlbmRlckNvbXBcblxuICBpZiAobG9hZGluZyB8fCB0YXNrTG9hZGluZyB8fCBmb3JtYXRMb2FkaW5nIHx8IHF1ZXVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZW5kZXJDb21wID0gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTF9fSApXG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyQ29tcCA9IChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWUsIHtcbiAgICAgICAgcXVldWU6IHF1ZXVlLFxuICAgICAgICB1c2VyOiBwcm9wcy51c2VyLFxuICAgICAgICBvcmdJZDogb3JnSWQsXG4gICAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICAgIGRlbGV0ZVF1ZXVlOiBkZWxldGVRdWV1ZSxcbiAgICAgICAgZmx1c2hRdWV1ZVRhc2tzOiBmbHVzaFF1ZXVlVGFza3MsXG4gICAgICAgIHN0YXJ0TmV4dFRhc2s6IHN0YXJ0TmV4dFRhc2ssXG4gICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICB0YXNrczogdGFza3MsXG4gICAgICAgIGlzU3RhZmY6IGlzU3RhZmYsXG4gICAgICAgIHRhc2tQYWdlOiB0YXNrUGFnZSxcbiAgICAgICAgc2V0VGFza1BhZ2U6IHNldFRhc2tQYWdlLFxuICAgICAgICB0YXNrTG9hZGluZzogdGFza0xvYWRpbmcsXG4gICAgICAgIHNldFF1ZXVlOiBzZXRRdWV1ZSxcbiAgICAgICAgc2V0U2VsZWN0ZWRRdWV1ZTogcHJvcHMuc2V0U2VsZWN0ZWRRdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1NH19XG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgUXVldWUgfCBIdW1hbiBMYW1iZGFzYClcblxuICByZXR1cm4gcmVuZGVyQ29tcFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYXJnKSksXG4gIHNldFNlbGVjdGVkUXVldWU6IChhcmcpID0+IGRpc3BhdGNoKHdvcmtmbGxvd0FjdGlvbnMuc2V0U2VsZWN0ZWRRdWV1ZShhcmcpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFF1ZXVlQ29udGFpbmVyKVxuIiwiY29uc3QgY3V0T2ZmU3RyaW5nID0gKHN0cmluZywgbGVuZ3RoKSA9PlxuICBzdHJpbmcubGVuZ3RoID4gbGVuZ3RoID8gYCR7c3RyaW5nLnN1YnN0cmluZygwLCBsZW5ndGgpfS4uLmAgOiBzdHJpbmdcbmV4cG9ydCBkZWZhdWx0IGN1dE9mZlN0cmluZ1xuIiwiIGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBmb3JtYXRWYWx1ZXMgPSAodmFsdWVzKSA9PiB7XG4gIGxldCBmaWVsZHNcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMuZGF0YSkpIHtcbiAgICBmaWVsZHMgPSB2YWx1ZXMuZGF0YVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZpZWxkcyA9IHZhbHVlc1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIGZpZWxkcy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9vcHRpb25hbENoYWluKFt2YWwsICdhY2Nlc3MnLCBfID0+IF9bQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dLCAnYWNjZXNzJywgXzIgPT4gXzIuZW50aXRpZXMsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmZpbHRlciwgJ2NhbGwnLCBfNCA9PiBfNCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBlbnRpdHkuY29sb3JcbiAgICAgICAgZGVsZXRlIGVudGl0eS50ZXh0XG4gICAgICB9KV0pXG4gICAgfVxuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLm9iamVjdHMpKSB7XG4gICAgICAgIHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5vYmplY3RzLmZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGVudGl0eS5jb2xvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5pbWFnZSA9PT0gJycpIHtcbiAgICAgICAgdmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLmltYWdlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH0pXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VmFsdWVzXG4iLCJjb25zdCBnZXRGaXJzdExldHRlciA9IChzdHIpID0+IHtcbiAgbGV0IGZpcnN0TGV0dGVyID0gc3RyXG5cbiAgaWYgKHN0ciAmJiBzdHIubGVuZ3RoID4gMSkge1xuICAgIGZpcnN0TGV0dGVyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gIH1cblxuICByZXR1cm4gZmlyc3RMZXR0ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rmlyc3RMZXR0ZXJcbiIsImltcG9ydCB7UVVFVUVfU1RBVFVTfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBnZXRRdWV1ZVN0YXR1cyA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdGF0dXMgPSAnJ1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5DT01QTEVURUQ6XG4gICAgICBzdGF0dXMgPSAnQ09NUExFVEVEJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5ORVc6XG4gICAgICBzdGF0dXMgPSAnTkVXJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5JTl9QUk9HUkVTUzpcbiAgICAgIHN0YXR1cyA9ICdJTiBQUk9HUkVTUydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBRVUVVRV9TVEFUVVMuT1BFTjpcbiAgICAgIHN0YXR1cyA9ICdPUEVOJ1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4gc3RhdHVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFF1ZXVlU3RhdHVzXG4iXSwic291cmNlUm9vdCI6IiJ9