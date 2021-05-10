(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UsersRoot"],{

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

/***/ "./src/client/components/AppTopbar.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/AppTopbar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/AppTopbar.tsx";



const TopbarContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header", {
  target: "eusekzx0"
})({
  width: '100%',
  position: 'relative',
  background: '#fff',
  minHeight: 45,
  display: 'flex',
  borderBottom: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY}`
});

const Topbar = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eusekzx1"
})({
  name: "1uskag1",
  styles: "width:100%;padding:0 35px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;"
});

const ActionBar = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eusekzx2"
})(({
  barLength
}) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${barLength}, auto)`,
  justifyContent: 'center',
  alignItems: 'center'
}));

const AppTopbar = props => {
  const {
    leftBarItems = [],
    rightBarItems = [],
    midBarItems = []
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TopbarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Topbar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBar, {
    barLength: leftBarItems.length || 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, leftBarItems.map((el, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: idx,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, el))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBar, {
    barLength: midBarItems.length || 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, midBarItems.map((el, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: idx,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, el))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBar, {
    barLength: rightBarItems.length || 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, rightBarItems.map((el, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    key: idx,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, el)))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppTopbar);

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

/***/ "./src/client/components/Icons/ThreeDotsSVG.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/Icons/ThreeDotsSVG.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ThreeDotsSVG.tsx";


const ThreeDotsSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "16",
    viewBox: "0 0 515.555 515.555",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ThreeDotsSVG);

/***/ }),

/***/ "./src/client/components/InvitationModal.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/InvitationModal.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlatButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/InvitationModal.tsx";









const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1w6dr670"
})({
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_6__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: utils_constants__WEBPACK_IMPORTED_MODULE_7__["BoxShadow"].MODAL
});

const MainTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1w6dr671"
})({
  name: "1xxpbhg",
  styles: "font-size:22px;font-weight:600;display:flex;align-items:center;margin-bottom:35px;"
});

const SubTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1w6dr672"
})({
  name: "81aqjy",
  styles: "margin-bottom:18px;font-weight:500;"
});

const FormContent = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
  target: "e1w6dr673"
})({
  name: "r9hl0f",
  styles: "padding:50px 50px 30px;"
});

const SubmissionSection = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1w6dr674"
})({
  name: "1htoikp",
  styles: "display:grid;grid-template-columns:repeat(2, auto);justify-content:space-between;padding-top:25px;"
});

const InvitationModal = ({
  closePortal,
  handleUsersInvite
}) => {
  const onSubmitHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((values, actions) => {
    handleUsersInvite(values);
    actions.setSubmitting();
    closePortal();
  }, [closePortal, handleUsersInvite]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      emails: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_4__["emailListSchema"],
    onSubmit: onSubmitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, ({
    isSubmitting,
    isValid,
    values,
    handleChange,
    handleBlur
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Invite workers to team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "Send invites by email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "mike@humanlambdas.com, jeff@humanlambdas.com, sarah@humanlambdas.com, alice@humanlambdas.com",
    name: "emails",
    value: values.emails,
    onChange: handleChange,
    onBlur: handleBlur,
    minRows: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmissionSection, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "button",
    onClick: closePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlatButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    disabled: isSubmitting || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "Send Invitation")))));
};

/* harmony default export */ __webpack_exports__["default"] = (InvitationModal);

/***/ }),

/***/ "./src/client/components/MenuButton.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/MenuButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Icons_ThreeDotsSVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Icons/ThreeDotsSVG */ "./src/client/components/Icons/ThreeDotsSVG.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var components_PlainButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/PlainButton */ "./src/client/components/PlainButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/MenuButton.tsx";





const Container = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(components_PlainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
  target: "etdyqpz0"
})({
  cursor: 'pointer',
  backgroundColor: '#fff',
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
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER
  }
});

const MenuButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    onClick,
    type
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    onClick: onClick,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Icons_ThreeDotsSVG__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./src/client/components/UserRoleMenu.tsx":
/*!************************************************!*\
  !*** ./src/client/components/UserRoleMenu.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/UserRoleMenu.tsx";





const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1p9ndcu0"
})({
  name: "1mmtv2s",
  styles: "width:220px;"
});

const Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1p9ndcu1"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  marginBottom: 2
});

const Desc = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1p9ndcu2"
})({
  fontSize: 13,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
  fontWeight: 400
});

const MenuContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1p9ndcu3"
})({
  name: "1u5bkqb",
  styles: "padding:5px 15px;"
});

const UserRoleMenu = props => {
  const {
    menuProps,
    user,
    changeUserRole
  } = props;
  const CustomMenuItem = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Desc, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, props.desc));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Change user permissions'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomMenuItem, {
      title: "Admin",
      desc: "Can create new queues, invite workers and change user permissions.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }),
    onClick: () => changeUserRole(user, true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomMenuItem, {
      title: "Worker",
      desc: "Limited access. Can not create queues or invite workers.",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }),
    onClick: () => changeUserRole(user, false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserRoleMenu);

/***/ }),

/***/ "./src/client/modules/users/components/UserRole/UserRole.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/modules/users/components/UserRole/UserRole.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var components_UserRoleMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UserRoleMenu */ "./src/client/components/UserRoleMenu.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/ConfirmationModal */ "./src/client/components/ConfirmationModal.tsx");
/* harmony import */ var components_PlainButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var components_MenuButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/MenuButton */ "./src/client/components/MenuButton.tsx");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/users/components/UserRole/UserRole.tsx";

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















const Actions = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(components_PlainButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
  target: "e1tp00xh0"
})(({
  color
}) => ({
  color,
  fontSize: 13,
  width: 'auto',
  lineHeight: '32px',
  height: 32,
  padding: '0 15px',
  margin: 0,
  ':hover': {
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_HOVER
  }
}));

const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh1"
})({
  name: "lvyu5j",
  styles: "margin-right:10px;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh2"
})(_objectSpread({
  fontSize: 15,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontWeight: 400
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_13__["default"]));

const ListItems = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh3"
})({
  name: "1267hyb",
  styles: "display:grid;grid-template-columns:1fr 200px 150px 150px 150px;justify-content:space-between;"
});

const ListItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh4"
})(({
  clickable,
  align,
  padLeft
}) => ({
  cursor: clickable ? 'pointer' : 'default',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: align ? align : 'left',
  paddingLeft: padLeft ? padLeft : 'none',
  paddingTop: 5,
  paddingBottom: 5,
  '&:last-child': {
    borderRight: 0
  }
}));

const Row = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh5"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const Inactive = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh6"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY
});

const DeleteName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1tp00xh7"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontWeight: 500,
  fontSize: 15
});

const StyledMsg = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1tp00xh8"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontWeight: 400,
  fontSize: 14
});

const UserRole = props => {
  const {
    menuPortal,
    originRef,
    menuProps,
    togglePortal
  } = Object(hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__["MenuPosition"].UPPER_CENTER, {
    isDropdown: true
  });
  const {
    togglePortal: toggleModalPortal,
    closePortal: closeModalPortal,
    modalPortal
  } = Object(hooks_useModal__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    user,
    userId,
    changeUserRole,
    resendUserInvite,
    deleteUserOrInvite
  } = props;
  const message = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledMsg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "This will permanently remove", ' ', user.pending ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, user.email.length > 15 ? user.email.substr(0, 15) + '...' : user.email, "'s"), ' ', "invitation from this organization") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, user.name.length > 15 ? user.name.substr(0, 15) + '...' : user.name), ' ', "from this organization"), ". This action can not be undone. Are you sure you want to continue?");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItems, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_8__["default"])(_optionalChain([user, 'optionalAccess', _ => _.name]) || user.email.charAt(0) || ''),
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_7__["colorFromString"])(user.name || user.email),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  })), user.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, user.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, user.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    align: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, user.pending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Actions, {
    type: "button",
    color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_GREEN_DARK,
    onClick: () => resendUserInvite(user.email),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, "Resend"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    padLeft: 15,
    clickable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, userId === user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inactive, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }, user.is_admin ? 'Admin' : 'Worker') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, user.is_admin ? 'Admin' : 'Worker'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_MenuButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: togglePortal,
    ref: originRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    align: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  }, userId !== user.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Actions, {
    type: "button",
    onClick: toggleModalPortal,
    color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, 'Delete'))), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UserRoleMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menuProps: menuProps,
    user: user,
    changeUserRole: changeUserRole,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  })), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: 'Delete',
    closePortal: closeModalPortal,
    message: message,
    onConfirm: () => deleteUserOrInvite(user),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UserRole);

/***/ }),

/***/ "./src/client/modules/users/components/Users.tsx":
/*!*******************************************************!*\
  !*** ./src/client/modules/users/components/Users.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_AppTopbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AppTopbar */ "./src/client/components/AppTopbar.tsx");
/* harmony import */ var hooks_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var components_InvitationModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/InvitationModal */ "./src/client/components/InvitationModal.tsx");
/* harmony import */ var components_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ActionButton */ "./src/client/components/ActionButton.tsx");
/* harmony import */ var components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ListPage/ListPage */ "./src/client/components/ListPage/ListPage.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var _UserRole_UserRole__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserRole/UserRole */ "./src/client/modules/users/components/UserRole/UserRole.tsx");
/* harmony import */ var components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/ListPage/ListTitle */ "./src/client/components/ListPage/ListTitle.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/users/components/Users.tsx";











const PageHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e4euriu0"
})({
  name: "p7exkj",
  styles: "line-height:40px;height:40px;display:grid;grid-template-columns:1fr 200px 150px 150px 150px;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "e4euriu1"
})({
  color: '#fff',
  fontSize: styles_typography__WEBPACK_IMPORTED_MODULE_4__["ICON_SIZE"].MD16,
  marginRight: 2
});

const Users = props => {
  const {
    usersList,
    userId,
    handleUsersInvite,
    resendUserInvite,
    changeUserRole,
    deleteUserOrInvite
  } = props;
  const {
    modalPortal,
    togglePortal,
    closePortal
  } = Object(hooks_useModal__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const leftBarItems = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ActionButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "invite",
    type: "button",
    onClick: () => togglePortal(),
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
  }, "add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Invite"))];
  const pageHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    padLeft: 15,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    align: 'center',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "Action"));
  const itemList = usersList.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserRole_UserRole__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: user.email,
    userId: userId,
    user: user,
    resendUserInvite: resendUserInvite,
    changeUserRole: changeUserRole,
    deleteUserOrInvite: deleteUserOrInvite,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_AppTopbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    leftBarItems: leftBarItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pageHeader: pageHeader,
    itemList: itemList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_InvitationModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    closePortal: closePortal,
    handleUsersInvite: handleUsersInvite,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./src/client/modules/users/containers/UsersRoot.tsx":
/*!***********************************************************!*\
  !*** ./src/client/modules/users/containers/UsersRoot.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Users */ "./src/client/modules/users/components/Users.tsx");
/* harmony import */ var utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var _notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/users/containers/UsersRoot.tsx";









const UsersRoot = props => {
  const {
    user,
    dispatch
  } = props || {};
  const {
    current_organization_id: orgId,
    email
  } = user || {};
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    userId
  } = networker || {};
  const [usersList, setUserList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [usersLoading, setUsersLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchUserList() {
      setUsersLoading(true);
      const {
        data: {
          invited_users: inviteData
        },
        errors: inviteErrors
      } = await networker.httpHandler(`/orgs/${orgId}/invite`, {
        method: 'GET'
      });
      const {
        data: userData,
        errors: userErrors
      } = await networker.httpHandler(`/orgs/${orgId}/users`, {
        method: 'GET'
      });

      if (inviteErrors || userErrors) {
        console.error('Error fetching users!');
      } else {
        setUserList([...userData, ...inviteData]);
      }

      setUsersLoading(false);
    }

    fetchUserList();
  }, [user]);
  const resendUserInvite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async email => {
    if (email) {
      const {
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/invite`, {
        method: 'POST',
        data: {
          emails: email
        }
      });

      if (errors) {
        errors.forEach(error => dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message)));
      } else {
        dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])('Invite was re-sent succesfully'));
      }
    } else {
      console.error('Error resending user invite'); // TODO send through Sentry

      dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])('Error resending invite!'));
    }
  }, [usersList]);

  const changeUserRole = async (user, isAdmin) => {
    const {
      id: userId,
      name,
      email
    } = user;

    if (userId) {
      const {
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/users/${userId}`, {
        method: 'PATCH',
        data: _objectSpread(_objectSpread({}, user), {
          admin: isAdmin
        })
      });

      if (errors) {
        errors.forEach(error => dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message)));
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('User Role Update Failed', {
          orgId,
          email,
          userId: user.user_id
        });
      } else {
        dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(`${name}'s role successfully changed!`));
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('User Role Update Successful', {
          orgId,
          email,
          userId: user.user_id
        });
      }
    } else {
      const {
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/invite`, {
        method: 'PATCH',
        data: {
          email,
          admin: isAdmin
        }
      });

      if (errors) {
        errors.forEach(error => dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message)));
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Invite Role Update Failed', {
          orgId,
          email,
          userId: user.user_id
        });
      } else {
        dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(`${email}'s user role has been updated!`));
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Invite Role Update Successful', {
          orgId,
          email,
          userId: user.user_id
        });
      }
    }

    setUserList(list => list.map(user => user.id === userId ? _objectSpread(_objectSpread({}, user), {}, {
      is_admin: isAdmin
    }) : user));
  };

  const deleteUserOrInvite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async user => {
    let deleteErrors = [];

    if (user.id) {
      const {
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/users/${user.id}`, {
        method: 'DELETE'
      });
      deleteErrors = errors;
    } else {
      const {
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/invite`, {
        method: 'DELETE',
        data: {
          email: user.email
        }
      });
      deleteErrors = errors;
    }

    if (deleteErrors) {
      Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Failed To Remove User', {
        orgId,
        email: user.email,
        inviteeUserId: userId,
        inviteeEmail: email,
        userId: user.user_id
      });
      deleteErrors.forEach(error => dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message)));
    } else {
      let successMsg;
      const newUsers = usersList.filter(i => i.email !== user.email);
      setUserList(newUsers);

      if (user.id) {
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('User Removed', {
          orgId,
          email: user.email,
          inviteeUserId: userId,
          inviteeEmail: email,
          userId: user.user_id
        });
        successMsg = `Successfully removed ${user.name}!`;
      } else {
        Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Invite Removed', {
          orgId,
          email: user.email,
          inviteeUserId: userId,
          inviteeEmail: email,
          userId: user.user_id
        });
        successMsg = 'Successfully removed user invite!';
      }

      dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(successMsg));
    }
  }, [usersList]);
  const handleUsersInvite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async values => {
    const payload = {
      method: 'POST',
      data: values
    };
    const res = await networker.httpHandler(`/orgs/${user.current_organization_id}/invite`, payload);
    const {
      errors
    } = res;

    if (errors) {
      errors.forEach(e => dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(e.message)));
      Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Invite Failed', {
        orgId,
        email: user.email,
        inviteeUserId: userId,
        inviteeEmail: email,
        userId: user.user_id
      });
    } else {
      const emails = values.emails.split(',').map(item => item.trim());
      const newInvites = emails.map(email => ({
        email,
        pending: true,
        is_admin: false,
        current_organization_id: orgId
      }));
      const userEmails = new Set(usersList.map(u => u.email));
      setUserList(usersList.concat(newInvites.filter(u => !userEmails.has(u.email))));
      Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_5__["segmentTrack"])('Invite Successful', {
        orgId,
        email: user.email,
        inviteeUserId: userId,
        inviteeEmail: email,
        userId: user.user_id
      });
      const successMsg = values.emails.length > 1 ? 'Users succesfully invited!' : 'User succesfully invited!';
      dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(successMsg));
    }
  }, [usersList]);
  Object(hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('User Management | Human Lambdas');
  if (usersLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Users__WEBPACK_IMPORTED_MODULE_4__["default"], {
    usersList: usersList,
    user: user,
    userId: userId,
    resendUserInvite: resendUserInvite,
    handleUsersInvite: handleUsersInvite,
    changeUserRole: changeUserRole,
    deleteUserOrInvite: deleteUserOrInvite,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(UsersRoot));

/***/ }),

/***/ "./src/client/utils/segmentIo.ts":
/*!***************************************!*\
  !*** ./src/client/utils/segmentIo.ts ***!
  \***************************************/
/*! exports provided: segmentTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentTrack", function() { return segmentTrack; });
const segmentTrack = async (event, properties) => {
  const {
    analytics
  } = window || undefined;
  if (!analytics) return;
  analytics.track(event, properties);
};

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

/***/ "./src/universal/utils/getInitials.ts":
/*!********************************************!*\
  !*** ./src/universal/utils/getInitials.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getInitials = str => {
  if (!str || str === '') return;
  const initials = str.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};

/* harmony default export */ __webpack_exports__["default"] = (getInitials);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvZGlzdC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWNvbXBvc2VkLXJlZi9kaXN0L3VzZS1jb21wb3NlZC1yZWYuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWxhdGVzdC9kaXN0L3VzZS1sYXRlc3QuZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHBUb3BiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9GbGF0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvVGhyZWVEb3RzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSW52aXRhdGlvbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1VzZXJSb2xlTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3VzZXJzL2NvbXBvbmVudHMvVXNlclJvbGUvVXNlclJvbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL1VzZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvdXNlcnMvY29udGFpbmVycy9Vc2Vyc1Jvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRJbml0aWFscy50cyJdLCJuYW1lcyI6WyJBY3Rpb25CdXR0b24iLCJQbGFpbkJ1dHRvbiIsIndhaXRpbmciLCJkaXNhYmxlZCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIlBBTEVUVEUiLCJQUklNQVJZX01BSU4iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJQUklNQVJZX01BSU5fREFSSyIsIkJPWF9TSEFET1dfUFJJTUFSWSIsIl9qc3hGaWxlTmFtZSIsIlRvcGJhckNvbnRhaW5lciIsIndpZHRoIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImJvcmRlckJvdHRvbSIsIkJPUkRFUl9HUkFZIiwiVG9wYmFyIiwiQWN0aW9uQmFyIiwiYmFyTGVuZ3RoIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIkFwcFRvcGJhciIsInByb3BzIiwibGVmdEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsIm1pZEJhckl0ZW1zIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJsZW5ndGgiLCJtYXAiLCJlbCIsImlkeCIsIkZyYWdtZW50Iiwia2V5IiwiRmxhdEJ1dHRvbiIsImlzRGlzYWJsZWQiLCJQUklNQVJZX01BSU5fTElHSFRFUiIsIlRocmVlRG90c1NWRyIsIm1lbW8iLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsIiwiVEVYVF9NQUlOIiwiZCIsIk1vZGFsUm9vdCIsImZsZXhEaXJlY3Rpb24iLCJCT1JERVJfTUFJTl9HUkFZIiwiQm94U2hhZG93IiwiTU9EQUwiLCJNYWluVGl0bGUiLCJTdWJUaXRsZSIsIkZvcm1Db250ZW50IiwiRm9ybSIsIlN1Ym1pc3Npb25TZWN0aW9uIiwiSW52aXRhdGlvbk1vZGFsIiwiY2xvc2VQb3J0YWwiLCJoYW5kbGVVc2Vyc0ludml0ZSIsIm9uU3VibWl0SGFuZGxlciIsInVzZUNhbGxiYWNrIiwidmFsdWVzIiwiYWN0aW9ucyIsInNldFN1Ym1pdHRpbmciLCJGb3JtaWsiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJpbml0aWFsVmFsdWVzIiwiZW1haWxzIiwidmFsaWRhdGlvblNjaGVtYSIsImVtYWlsTGlzdFNjaGVtYSIsIm9uU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiaXNWYWxpZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJUZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJtaW5Sb3dzIiwiU2Vjb25kYXJ5QnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJDb250YWluZXIiLCJjdXJzb3IiLCJCQUNLR1JPVU5EX0hPVkVSIiwiTWVudUJ1dHRvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJUaHJlZURvdHNJY29uIiwiVGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJEZXNjIiwiVEVYVF9HUkFZIiwiTWVudUNvbnRhaW5lciIsIlVzZXJSb2xlTWVudSIsIm1lbnVQcm9wcyIsInVzZXIiLCJjaGFuZ2VVc2VyUm9sZSIsIkN1c3RvbU1lbnVJdGVtIiwidGl0bGUiLCJkZXNjIiwiTWVudSIsImFyaWFMYWJlbCIsIk1lbnVJdGVtIiwibGFiZWwiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQWN0aW9ucyIsIkF2YXRhckJsb2NrIiwiTGFiZWwiLCJ0ZXh0T3ZlcmZsb3ciLCJMaXN0SXRlbXMiLCJMaXN0SXRlbSIsImNsaWNrYWJsZSIsImFsaWduIiwicGFkTGVmdCIsInVzZXJTZWxlY3QiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJSb3ciLCJJbmFjdGl2ZSIsIkRlbGV0ZU5hbWUiLCJTdHlsZWRNc2ciLCJVc2VyUm9sZSIsIm1lbnVQb3J0YWwiLCJvcmlnaW5SZWYiLCJ0b2dnbGVQb3J0YWwiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfQ0VOVEVSIiwiaXNEcm9wZG93biIsInRvZ2dsZU1vZGFsUG9ydGFsIiwiY2xvc2VNb2RhbFBvcnRhbCIsIm1vZGFsUG9ydGFsIiwidXNlTW9kYWwiLCJ1c2VySWQiLCJyZXNlbmRVc2VySW52aXRlIiwiZGVsZXRlVXNlck9ySW52aXRlIiwibWVzc2FnZSIsInBlbmRpbmciLCJlbWFpbCIsInN1YnN0ciIsIkF2YXRhciIsImluaXRpYWxzIiwiZ2V0SW5pdGlhbHMiLCJfIiwiY2hhckF0IiwiY29sb3JGcm9tU3RyaW5nIiwiUFJJTUFSWV9HUkVFTl9EQVJLIiwiaWQiLCJpc19hZG1pbiIsIkVSUk9SX01BSU4iLCJDb25maXJtYXRpb25Nb2RhbCIsIm9uQ29uZmlybSIsIlBhZ2VIZWFkZXIiLCJTdHlsZWRJY29uIiwiSWNvbiIsIklDT05fU0laRSIsIk1EMTYiLCJtYXJnaW5SaWdodCIsIlVzZXJzIiwidXNlcnNMaXN0IiwicGFnZUhlYWRlciIsIkxpc3RUaXRsZSIsIml0ZW1MaXN0IiwiTGlzdFBhZ2UiLCJVc2Vyc1Jvb3QiLCJkaXNwYXRjaCIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwib3JnSWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJzZXRVc2VyTGlzdCIsInVzZVN0YXRlIiwidXNlcnNMb2FkaW5nIiwic2V0VXNlcnNMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTGlzdCIsImRhdGEiLCJpbnZpdGVkX3VzZXJzIiwiaW52aXRlRGF0YSIsImVycm9ycyIsImludml0ZUVycm9ycyIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwidXNlckRhdGEiLCJ1c2VyRXJyb3JzIiwiY29uc29sZSIsImVycm9yIiwiZm9yRWFjaCIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJhZGRTdWNjZXNzTm90aWZpY2F0aW9uIiwiaXNBZG1pbiIsImFkbWluIiwic2VnbWVudFRyYWNrIiwidXNlcl9pZCIsImxpc3QiLCJkZWxldGVFcnJvcnMiLCJpbnZpdGVlVXNlcklkIiwiaW52aXRlZUVtYWlsIiwic3VjY2Vzc01zZyIsIm5ld1VzZXJzIiwiZmlsdGVyIiwicGF5bG9hZCIsInJlcyIsImUiLCJzcGxpdCIsIml0ZW0iLCJ0cmltIiwibmV3SW52aXRlcyIsInVzZXJFbWFpbHMiLCJTZXQiLCJ1IiwiY29uY2F0IiwiaGFzIiwidXNlRG9jdW1lbnRUaXRsZSIsIkxvYWRpbmdQYWdlIiwiY29ubmVjdCIsImV2ZW50IiwicHJvcGVydGllcyIsImFuYWx5dGljcyIsIndpbmRvdyIsInRyYWNrIiwic3R5bGUiLCJ0ZXN0QWxpZ24iLCJtaW5XaWR0aCIsImdldEZpcnN0TGV0dGVyIiwic3RyIiwiZmlyc3RMZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoIiwic2hpZnQiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMwQztBQUN6QjtBQUN4QztBQUNXOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7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QThCdUosU0FBSyxFQUFFQSxLQUFyQztBQUE0Q2xOLFVBQU0sRUFBRSxTQUFwRDtBQUEwREMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXhCLFlBQVg7QUFBeUJ5QixnQkFBVSxFQUFFO0FBQXJDO0FBQXBFLEdBQWpDLEVBQ0lnTSxJQUFJLEdBQUdrQiw4RUFBYyxDQUFDbkYsUUFBRCxDQUFqQixHQUE4QkEsUUFEdEMsQ0FERjtBQUtELENBM0J3QixDQUF6QjtBQTZCZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUEsTUFBTW9GLGNBQWMsR0FBSUMsR0FBRCxJQUFTO0FBQzlCLE1BQUlDLFdBQVcsR0FBR0QsR0FBbEI7O0FBRUEsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNsTixNQUFKLEdBQWEsQ0FBeEIsRUFBMkI7QUFDekJtTixlQUFXLEdBQUdELEdBQUcsQ0FBQ2pGLE1BQUosQ0FBVyxDQUFYLEVBQWNtRixXQUFkLEVBQWQ7QUFDRDs7QUFFRCxTQUFPRCxXQUFQO0FBQ0QsQ0FSRDs7QUFVZUYsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQSxNQUFNbEYsV0FBVyxHQUFJbUYsR0FBRCxJQUFTO0FBQzNCLE1BQUksQ0FBQ0EsR0FBRCxJQUFRQSxHQUFHLEtBQUssRUFBcEIsRUFBd0I7QUFDeEIsUUFBTXBGLFFBQVEsR0FBR29GLEdBQUcsQ0FBQ0csS0FBSixDQUFVLE9BQVYsS0FBc0IsRUFBdkM7QUFDQSxTQUFPLENBQUMsQ0FBQ3ZGLFFBQVEsQ0FBQ3dGLEtBQVQsTUFBb0IsRUFBckIsS0FBNEJ4RixRQUFRLENBQUN5RixHQUFULE1BQWtCLEVBQTlDLENBQUQsRUFBb0RILFdBQXBELEVBQVA7QUFDRCxDQUpEOztBQU1lckYsMEVBQWYsRSIsImZpbGUiOiJVc2Vyc1Jvb3RfYzMwMzUzNGQ5OTAwMDhjNGEyNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIGZvcndhcmRSZWYsIHVzZVJlZiwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VMYXRlc3QgZnJvbSAndXNlLWxhdGVzdCc7XG5pbXBvcnQgdXNlQ29tcG9zZWRSZWYgZnJvbSAndXNlLWNvbXBvc2VkLXJlZic7XG5cbnZhciBISURERU5fVEVYVEFSRUFfU1RZTEUgPSB7XG4gICdtaW4taGVpZ2h0JzogJzAnLFxuICAnbWF4LWhlaWdodCc6ICdub25lJyxcbiAgaGVpZ2h0OiAnMCcsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAnei1pbmRleCc6ICctMTAwMCcsXG4gIHRvcDogJzAnLFxuICByaWdodDogJzAnXG59O1xuXG52YXIgZm9yY2VIaWRkZW5TdHlsZXMgPSBmdW5jdGlvbiBmb3JjZUhpZGRlblN0eWxlcyhub2RlKSB7XG4gIE9iamVjdC5rZXlzKEhJRERFTl9URVhUQVJFQV9TVFlMRSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIEhJRERFTl9URVhUQVJFQV9TVFlMRVtrZXldLCAnaW1wb3J0YW50Jyk7XG4gIH0pO1xufTtcblxuLy8gICBleHBvcnQgdHlwZSBDYWxjdWxhdGVkTm9kZUhlaWdodHMgPSBbaGVpZ2h0OiBudW1iZXIsIHJvd0hlaWdodDogbnVtYmVyXTtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgyNTlcblxudmFyIGhpZGRlblRleHRhcmVhID0gbnVsbDtcblxudmFyIGdldEhlaWdodCA9IGZ1bmN0aW9uIGdldEhlaWdodChub2RlLCBzaXppbmdEYXRhKSB7XG4gIHZhciBoZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodDtcblxuICBpZiAoc2l6aW5nRGF0YS5zaXppbmdTdHlsZS5ib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIC8vIGJvcmRlci1ib3g6IGFkZCBib3JkZXIsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyXG4gICAgcmV0dXJuIGhlaWdodCArIHNpemluZ0RhdGEuYm9yZGVyU2l6ZTtcbiAgfSAvLyByZW1vdmUgcGFkZGluZywgc2luY2UgaGVpZ2h0ID0gY29udGVudFxuXG5cbiAgcmV0dXJuIGhlaWdodCAtIHNpemluZ0RhdGEucGFkZGluZ1NpemU7XG59O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb2RlSGVpZ2h0KHNpemluZ0RhdGEsIHZhbHVlLCBtaW5Sb3dzLCBtYXhSb3dzKSB7XG4gIGlmIChtaW5Sb3dzID09PSB2b2lkIDApIHtcbiAgICBtaW5Sb3dzID0gMTtcbiAgfVxuXG4gIGlmIChtYXhSb3dzID09PSB2b2lkIDApIHtcbiAgICBtYXhSb3dzID0gSW5maW5pdHk7XG4gIH1cblxuICBpZiAoIWhpZGRlblRleHRhcmVhKSB7XG4gICAgaGlkZGVuVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgndGFiLWluZGV4JywgJy0xJyk7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZm9yY2VIaWRkZW5TdHlsZXMoaGlkZGVuVGV4dGFyZWEpO1xuICB9XG5cbiAgaWYgKGhpZGRlblRleHRhcmVhLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlblRleHRhcmVhKTtcbiAgfVxuXG4gIHZhciBwYWRkaW5nU2l6ZSA9IHNpemluZ0RhdGEucGFkZGluZ1NpemUsXG4gICAgICBib3JkZXJTaXplID0gc2l6aW5nRGF0YS5ib3JkZXJTaXplLFxuICAgICAgc2l6aW5nU3R5bGUgPSBzaXppbmdEYXRhLnNpemluZ1N0eWxlO1xuICB2YXIgYm94U2l6aW5nID0gc2l6aW5nU3R5bGUuYm94U2l6aW5nO1xuICBPYmplY3Qua2V5cyhzaXppbmdTdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoX2tleSkge1xuICAgIHZhciBrZXkgPSBfa2V5O1xuICAgIGhpZGRlblRleHRhcmVhLnN0eWxlW2tleV0gPSBzaXppbmdTdHlsZVtrZXldO1xuICB9KTtcbiAgZm9yY2VIaWRkZW5TdHlsZXMoaGlkZGVuVGV4dGFyZWEpO1xuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xuICB2YXIgaGVpZ2h0ID0gZ2V0SGVpZ2h0KGhpZGRlblRleHRhcmVhLCBzaXppbmdEYXRhKTsgLy8gbWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuXG4gIGhpZGRlblRleHRhcmVhLnZhbHVlID0gJ3gnO1xuICB2YXIgcm93SGVpZ2h0ID0gaGlkZGVuVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZ1NpemU7XG4gIHZhciBtaW5IZWlnaHQgPSByb3dIZWlnaHQgKiBtaW5Sb3dzO1xuXG4gIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIG1pbkhlaWdodCA9IG1pbkhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgfVxuXG4gIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgdmFyIG1heEhlaWdodCA9IHJvd0hlaWdodCAqIG1heFJvd3M7XG5cbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICB9XG5cbiAgaGVpZ2h0ID0gTWF0aC5taW4obWF4SGVpZ2h0LCBoZWlnaHQpO1xuICByZXR1cm4gW2hlaWdodCwgcm93SGVpZ2h0XTtcbn1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG52YXIgcGljayA9IGZ1bmN0aW9uIHBpY2socHJvcHMsIG9iaikge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHByb3ApIHtcbiAgICBhY2NbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcblxudmFyIFNJWklOR19TVFlMRSA9IFsnYm9yZGVyQm90dG9tV2lkdGgnLCAnYm9yZGVyTGVmdFdpZHRoJywgJ2JvcmRlclJpZ2h0V2lkdGgnLCAnYm9yZGVyVG9wV2lkdGgnLCAnYm94U2l6aW5nJywgJ2ZvbnRGYW1pbHknLCAnZm9udFNpemUnLCAnZm9udFN0eWxlJywgJ2ZvbnRXZWlnaHQnLCAnbGV0dGVyU3BhY2luZycsICdsaW5lSGVpZ2h0JywgJ3BhZGRpbmdCb3R0b20nLCAncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0JywgJ3BhZGRpbmdUb3AnLCAvLyBub24tc3RhbmRhcmRcbid0YWJTaXplJywgJ3RleHRJbmRlbnQnLCAvLyBub24tc3RhbmRhcmRcbid0ZXh0UmVuZGVyaW5nJywgJ3RleHRUcmFuc2Zvcm0nLCAnd2lkdGgnXTtcbnZhciBpc0lFID0gISFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY3VycmVudFN0eWxlIDtcblxudmFyIGdldFNpemluZ0RhdGEgPSBmdW5jdGlvbiBnZXRTaXppbmdEYXRhKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgaWYgKHN0eWxlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgc2l6aW5nU3R5bGUgPSBwaWNrKFNJWklOR19TVFlMRSwgc3R5bGUpO1xuICB2YXIgYm94U2l6aW5nID0gc2l6aW5nU3R5bGUuYm94U2l6aW5nOyAvLyBwcm9iYWJseSBub2RlIGlzIGRldGFjaGVkIGZyb20gRE9NLCBjYW4ndCByZWFkIGNvbXB1dGVkIGRpbWVuc2lvbnNcblxuICBpZiAoYm94U2l6aW5nID09PSAnJykge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIElFIChFZGdlIGhhcyBhbHJlYWR5IGNvcnJlY3QgYmVoYXZpb3VyKSByZXR1cm5zIGNvbnRlbnQgd2lkdGggYXMgY29tcHV0ZWQgd2lkdGhcbiAgLy8gc28gd2UgbmVlZCB0byBhZGQgbWFudWFsbHkgcGFkZGluZyBhbmQgYm9yZGVyIHdpZHRoc1xuXG5cbiAgaWYgKGlzSUUgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICBzaXppbmdTdHlsZS53aWR0aCA9IHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUud2lkdGgpICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5ib3JkZXJSaWdodFdpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUucGFkZGluZ1JpZ2h0KSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUucGFkZGluZ0xlZnQpICsgJ3B4JztcbiAgfVxuXG4gIHZhciBwYWRkaW5nU2l6ZSA9IHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUucGFkZGluZ0JvdHRvbSkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLnBhZGRpbmdUb3ApO1xuICB2YXIgYm9yZGVyU2l6ZSA9IHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG4gIHJldHVybiB7XG4gICAgc2l6aW5nU3R5bGU6IHNpemluZ1N0eWxlLFxuICAgIHBhZGRpbmdTaXplOiBwYWRkaW5nU2l6ZSxcbiAgICBib3JkZXJTaXplOiBib3JkZXJTaXplXG4gIH07XG59O1xuXG52YXIgdXNlV2luZG93UmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiB1c2VXaW5kb3dSZXNpemVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICB2YXIgbGF0ZXN0TGlzdGVuZXIgPSB1c2VMYXRlc3QobGlzdGVuZXIpO1xuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgbGF0ZXN0TGlzdGVuZXIuY3VycmVudChldmVudCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcbn07XG5cbnZhciBUZXh0YXJlYUF1dG9zaXplID0gZnVuY3Rpb24gVGV4dGFyZWFBdXRvc2l6ZShfcmVmLCB1c2VyUmVmKSB7XG4gIHZhciBjYWNoZU1lYXN1cmVtZW50cyA9IF9yZWYuY2FjaGVNZWFzdXJlbWVudHMsXG4gICAgICBtYXhSb3dzID0gX3JlZi5tYXhSb3dzLFxuICAgICAgbWluUm93cyA9IF9yZWYubWluUm93cyxcbiAgICAgIF9yZWYkb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmJG9uQ2hhbmdlID09PSB2b2lkIDAgPyBub29wIDogX3JlZiRvbkNoYW5nZSxcbiAgICAgIF9yZWYkb25IZWlnaHRDaGFuZ2UgPSBfcmVmLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgb25IZWlnaHRDaGFuZ2UgPSBfcmVmJG9uSGVpZ2h0Q2hhbmdlID09PSB2b2lkIDAgPyBub29wIDogX3JlZiRvbkhlaWdodENoYW5nZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY2FjaGVNZWFzdXJlbWVudHNcIiwgXCJtYXhSb3dzXCIsIFwibWluUm93c1wiLCBcIm9uQ2hhbmdlXCIsIFwib25IZWlnaHRDaGFuZ2VcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb3BzLnN0eWxlKSB7XG4gICAgaWYgKCdtYXhIZWlnaHQnIGluIHByb3BzLnN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIGBzdHlsZS5tYXhIZWlnaHRgIGZvciA8VGV4dGFyZWFBdXRvc2l6ZS8+IGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYG1heFJvd3NgLicpO1xuICAgIH1cblxuICAgIGlmICgnbWluSGVpZ2h0JyBpbiBwcm9wcy5zdHlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2luZyBgc3R5bGUubWluSGVpZ2h0YCBmb3IgPFRleHRhcmVhQXV0b3NpemUvPiBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGBtaW5Sb3dzYC4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNDb250cm9sbGVkID0gcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgdmFyIGxpYlJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHJlZiA9IHVzZUNvbXBvc2VkUmVmKGxpYlJlZiwgdXNlclJlZik7XG4gIHZhciBoZWlnaHRSZWYgPSB1c2VSZWYoMCk7XG4gIHZhciBtZWFzdXJlbWVudHNDYWNoZVJlZiA9IHVzZVJlZigpO1xuXG4gIHZhciByZXNpemVUZXh0YXJlYSA9IGZ1bmN0aW9uIHJlc2l6ZVRleHRhcmVhKCkge1xuICAgIHZhciBub2RlID0gbGliUmVmLmN1cnJlbnQ7XG4gICAgdmFyIG5vZGVTaXppbmdEYXRhID0gY2FjaGVNZWFzdXJlbWVudHMgJiYgbWVhc3VyZW1lbnRzQ2FjaGVSZWYuY3VycmVudCA/IG1lYXN1cmVtZW50c0NhY2hlUmVmLmN1cnJlbnQgOiBnZXRTaXppbmdEYXRhKG5vZGUpO1xuXG4gICAgaWYgKCFub2RlU2l6aW5nRGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1lYXN1cmVtZW50c0NhY2hlUmVmLmN1cnJlbnQgPSBub2RlU2l6aW5nRGF0YTtcblxuICAgIHZhciBfY2FsY3VsYXRlTm9kZUhlaWdodCA9IGNhbGN1bGF0ZU5vZGVIZWlnaHQobm9kZVNpemluZ0RhdGEsIG5vZGUudmFsdWUgfHwgbm9kZS5wbGFjZWhvbGRlciB8fCAneCcsIG1pblJvd3MsIG1heFJvd3MpLFxuICAgICAgICBoZWlnaHQgPSBfY2FsY3VsYXRlTm9kZUhlaWdodFswXSxcbiAgICAgICAgcm93SGVpZ2h0ID0gX2NhbGN1bGF0ZU5vZGVIZWlnaHRbMV07XG5cbiAgICBpZiAoaGVpZ2h0UmVmLmN1cnJlbnQgIT09IGhlaWdodCkge1xuICAgICAgaGVpZ2h0UmVmLmN1cnJlbnQgPSBoZWlnaHQ7XG4gICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBoZWlnaHQgKyBcInB4XCIsICdpbXBvcnRhbnQnKTtcbiAgICAgIG9uSGVpZ2h0Q2hhbmdlKGhlaWdodCwge1xuICAgICAgICByb3dIZWlnaHQ6IHJvd0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgcmVzaXplVGV4dGFyZWEoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShldmVudCk7XG4gIH07XG5cbiAge1xuICAgIHVzZUxheW91dEVmZmVjdChyZXNpemVUZXh0YXJlYSk7XG4gICAgdXNlV2luZG93UmVzaXplTGlzdGVuZXIocmVzaXplVGV4dGFyZWEpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICByZWY6IHJlZlxuICB9KSk7XG59O1xuXG52YXIgaW5kZXggPSAvKiAjX19QVVJFX18gKi9mb3J3YXJkUmVmKFRleHRhcmVhQXV0b3NpemUpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbnZhciB1cGRhdGVSZWYgPSBmdW5jdGlvbiB1cGRhdGVSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZih2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlZi5jdXJyZW50ID0gdmFsdWU7XG59O1xuXG52YXIgdXNlQ29tcG9zZWRSZWYgPSBmdW5jdGlvbiB1c2VDb21wb3NlZFJlZihsaWJSZWYsIHVzZXJSZWYpIHtcbiAgdmFyIHByZXZVc2VyUmVmID0gdXNlUmVmKCk7XG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBsaWJSZWYuY3VycmVudCA9IGluc3RhbmNlO1xuXG4gICAgaWYgKHByZXZVc2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHVwZGF0ZVJlZihwcmV2VXNlclJlZi5jdXJyZW50LCBudWxsKTtcbiAgICB9XG5cbiAgICBwcmV2VXNlclJlZi5jdXJyZW50ID0gdXNlclJlZjtcblxuICAgIGlmICghdXNlclJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZVJlZih1c2VyUmVmLCBpbnN0YW5jZSk7XG4gIH0sIFt1c2VyUmVmXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDb21wb3NlZFJlZjtcbiIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGluZGV4ID0gIHVzZUxheW91dEVmZmVjdCA7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAndXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdCc7XG5cbnZhciB1c2VMYXRlc3QgPSBmdW5jdGlvbiB1c2VMYXRlc3QodmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTGF0ZXN0O1xuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnLi9QbGFpbkJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKCh7d2FpdGluZywgZGlzYWJsZWR9KSA9PiB7XG4gIC8vY29uc3Qge3dhaXRpbmcsIGRpc2FibGVkfSA9IHByb3BzXG4gIC8vY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IDI4LFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBib3JkZXI6IGAxcHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9LFxuICAgICc6Zm9jdXMsIDphY3RpdmUnOiB7XG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtQQUxFVFRFLkJPWF9TSEFET1dfUFJJTUFSWX1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHBUb3BiYXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuY29uc3QgVG9wYmFyQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcih7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIG1pbkhlaWdodDogNDUsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gXG59KVxuXG5jb25zdCBUb3BiYXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogJzAgMzVweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59KVxuXG5jb25zdCBBY3Rpb25CYXIgPSBzdHlsZWQuZGl2KCh7YmFyTGVuZ3RofSkgPT4gKHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7YmFyTGVuZ3RofSwgYXV0bylgLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KSlcblxuY29uc3QgQXBwVG9wYmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtsZWZ0QmFySXRlbXMgPSBbXSwgcmlnaHRCYXJJdGVtcyA9IFtdLCBtaWRCYXJJdGVtcyA9IFtdfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChUb3BiYXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRvcGJhciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CYXIsIHsgYmFyTGVuZ3RoOiBsZWZ0QmFySXRlbXMubGVuZ3RoIHx8IDAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgICAgLCBsZWZ0QmFySXRlbXMubWFwKChlbCwgaWR4KSA9PiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7IGtleTogaWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDN9fSwgZWwpXG4gICAgICAgICAgKSlcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQmFyLCB7IGJhckxlbmd0aDogbWlkQmFySXRlbXMubGVuZ3RoIHx8IDAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19XG4gICAgICAgICAgLCBtaWRCYXJJdGVtcy5tYXAoKGVsLCBpZHgpID0+IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHsga2V5OiBpZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19LCBlbClcbiAgICAgICAgICApKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CYXIsIHsgYmFyTGVuZ3RoOiByaWdodEJhckl0ZW1zLmxlbmd0aCB8fCAwLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fVxuICAgICAgICAgICwgcmlnaHRCYXJJdGVtcy5tYXAoKGVsLCBpZHgpID0+IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHsga2V5OiBpZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319LCBlbClcbiAgICAgICAgICApKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFRvcGJhclxuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnLi9QbGFpbkJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBGbGF0QnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSgocHJvcHMpID0+IHtcbiAgY29uc3Qge3dhaXRpbmcsIGRpc2FibGVkfSA9IHByb3BzXG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCB3YWl0aW5nXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDFweCAycHgnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgUEFMRVRURS5QUklNQVJZX01BSU5fREFSS1xuICAgIH0sXG4gICAgJzphY3RpdmUsIDpmb2N1cyc6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke1BBTEVUVEUuQk9YX1NIQURPV19QUklNQVJZfWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFpc0Rpc2FibGVkICYmIFBBTEVUVEUuUFJJTUFSWV9NQUlOX0xJR0hURVJcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEZsYXRCdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9UaHJlZURvdHNTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBUaHJlZURvdHNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTZcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTZcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk00OTYuNjc5IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggME0zMDMuMzQ3IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggME0xMTAuMDE0IDIxMi4yMDhjMjUuMTY3IDI1LjE2NyAyNS4xNjcgNjUuOTcxIDAgOTEuMTM4cy02NS45NzEgMjUuMTY3LTkxLjEzOCAwLTI1LjE2Ny02NS45NzEgMC05MS4xMzggNjUuOTcxLTI1LjE2NyA5MS4xMzggMFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBUaHJlZURvdHNTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JbnZpdGF0aW9uTW9kYWwudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICcuL0ZsYXRCdXR0b24nXG5pbXBvcnQge0Zvcm1paywgRm9ybX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtlbWFpbExpc3RTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAndXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TZWNvbmRhcnlCdXR0b24nXG5cblxuXG5cblxuXG5jb25zdCBNb2RhbFJvb3QgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgd2lkdGg6IDUwMCxcbiAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaGFkb3c6IEJveFNoYWRvdy5NT0RBTFxufSlcblxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAyMixcbiAgZm9udFdlaWdodDogNjAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5Cb3R0b206IDM1XG59KVxuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDE4LFxuICBmb250V2VpZ2h0OiA1MDBcbn0pXG5cbmNvbnN0IEZvcm1Db250ZW50ID0gc3R5bGVkKEZvcm0pKHtcbiAgcGFkZGluZzogJzUwcHggNTBweCAzMHB4J1xufSlcblxuY29uc3QgU3VibWlzc2lvblNlY3Rpb24gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIGF1dG8pJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZ1RvcDogJzI1cHgnXG59KVxuXG5jb25zdCBJbnZpdGF0aW9uTW9kYWwgPSAoe2Nsb3NlUG9ydGFsLCBoYW5kbGVVc2Vyc0ludml0ZX0pID0+IHtcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgaGFuZGxlVXNlcnNJbnZpdGUodmFsdWVzKVxuICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKClcbiAgICAgIGNsb3NlUG9ydGFsKClcbiAgICB9LFxuICAgIFtjbG9zZVBvcnRhbCwgaGFuZGxlVXNlcnNJbnZpdGVdXG4gIClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsUm9vdCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7ZW1haWxzOiAnJ30sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IGVtYWlsTGlzdFNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IG9uU3VibWl0SGFuZGxlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYxfX1cbiAgICAgIFxuICAgICAgICAsICh7aXNTdWJtaXR0aW5nLCBpc1ZhbGlkLCB2YWx1ZXMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1cn0pID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250ZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY5fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNYWluVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzB9fSwgXCJJbnZpdGUgd29ya2VycyB0byB0ZWFtXCIgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzF9fSwgXCJTZW5kIGludml0ZXMgYnkgZW1haWw6XCIgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFyZWEsIHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibWlrZUBodW1hbmxhbWJkYXMuY29tLCBqZWZmQGh1bWFubGFtYmRhcy5jb20sIHNhcmFoQGh1bWFubGFtYmRhcy5jb20sIGFsaWNlQGh1bWFubGFtYmRhcy5jb21cIiAgICxcbiAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbHNcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5lbWFpbHMsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgbWluUm93czogNSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJtaXNzaW9uU2VjdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogY2xvc2VQb3J0YWwsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MX19LCBcIkNhbmNlbFwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxhdEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFpc1ZhbGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODR9fSwgXCJTZW5kIEludml0YXRpb25cIlxuXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52aXRhdGlvbk1vZGFsXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbi50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRocmVlRG90c0ljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9UaHJlZURvdHNTVkcnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGJvcmRlclJhZGl1czogNTAsXG4gIHdpZHRoOiAyNSxcbiAgaGVpZ2h0OiAyNSxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAwLFxuICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2UtaW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSXG4gIH1cbn0pXG5cbmNvbnN0IE1lbnVCdXR0b24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtvbkNsaWNrLCB0eXBlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHR5cGU6IHR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhyZWVEb3RzSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9Vc2VyUm9sZU1lbnUudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6IDIyMFxufSlcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWFyZ2luQm90dG9tOiAyXG59KVxuXG5jb25zdCBEZXNjID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxMyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBmb250V2VpZ2h0OiA0MDBcbn0pXG5cbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgcGFkZGluZzogJzVweCAxNXB4J1xufSlcblxuY29uc3QgVXNlclJvbGVNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHttZW51UHJvcHMsIHVzZXIsIGNoYW5nZVVzZXJSb2xlfSA9IHByb3BzXG4gIGNvbnN0IEN1c3RvbU1lbnVJdGVtID0gUmVhY3QudXNlQ2FsbGJhY2soKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19LCBwcm9wcy50aXRsZSlcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVzYywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NH19LCBwcm9wcy5kZXNjKVxuICAgICAgKVxuICAgIClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgeyBhcmlhTGFiZWw6ICdDaGFuZ2UgdXNlciBwZXJtaXNzaW9ucycsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDdXN0b21NZW51SXRlbSwge1xuICAgICAgICAgICAgICB0aXRsZTogXCJBZG1pblwiLFxuICAgICAgICAgICAgICBkZXNjOiBcIkNhbiBjcmVhdGUgbmV3IHF1ZXVlcywgaW52aXRlIHdvcmtlcnMgYW5kIGNoYW5nZSB1c2VyIHBlcm1pc3Npb25zLlwiICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTR9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgICxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBjaGFuZ2VVc2VyUm9sZSh1c2VyLCB0cnVlKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyfX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEN1c3RvbU1lbnVJdGVtLCB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIldvcmtlclwiLFxuICAgICAgICAgICAgICBkZXNjOiBcIkxpbWl0ZWQgYWNjZXNzLiBDYW4gbm90IGNyZWF0ZSBxdWV1ZXMgb3IgaW52aXRlIHdvcmtlcnMuXCIgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYzfX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gY2hhbmdlVXNlclJvbGUodXNlciwgZmFsc2UpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSb2xlTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9tb2R1bGVzL3VzZXJzL2NvbXBvbmVudHMvVXNlclJvbGUvVXNlclJvbGUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCBVc2VyUm9sZU1lbnUgZnJvbSAnY29tcG9uZW50cy9Vc2VyUm9sZU1lbnUnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQgZ2V0SW5pdGlhbHMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IHVzZU1vZGFsIGZyb20gJ2hvb2tzL3VzZU1vZGFsJ1xuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvQ29uZmlybWF0aW9uTW9kYWwnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tICdjb21wb25lbnRzL01lbnVCdXR0b24nXG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cnXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe2NvbG9yfSkgPT4gKHtcbiAgY29sb3IsXG4gIGZvbnRTaXplOiAxMyxcbiAgd2lkdGg6ICdhdXRvJyxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBoZWlnaHQ6IDMyLFxuICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgbWFyZ2luOiAwLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSXG4gIH1cbn0pKVxuXG5jb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5SaWdodDogMTBcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgTGlzdEl0ZW1zID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAyMDBweCAxNTBweCAxNTBweCAxNTBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbidcbn0pXG5cbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmRpdlxuXG5cblxuKCh7Y2xpY2thYmxlLCBhbGlnbiwgcGFkTGVmdH0pID0+ICh7XG4gIGN1cnNvcjogY2xpY2thYmxlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogYWxpZ24gPyBhbGlnbiA6ICdsZWZ0JyxcbiAgcGFkZGluZ0xlZnQ6IHBhZExlZnQgPyBwYWRMZWZ0IDogJ25vbmUnLFxuICBwYWRkaW5nVG9wOiA1LFxuICBwYWRkaW5nQm90dG9tOiA1LFxuICAnJjpsYXN0LWNoaWxkJzoge1xuICAgIGJvcmRlclJpZ2h0OiAwXG4gIH1cbn0pKVxuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgSW5hY3RpdmUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZXG59KVxuXG5jb25zdCBEZWxldGVOYW1lID0gc3R5bGVkLnNwYW4oe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udFNpemU6IDE1XG59KVxuXG5jb25zdCBTdHlsZWRNc2cgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxNFxufSlcblxuY29uc3QgVXNlclJvbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQb3J0YWwsIG9yaWdpblJlZiwgbWVudVByb3BzLCB0b2dnbGVQb3J0YWx9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfQ0VOVEVSLCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZVxuICB9KVxuICBjb25zdCB7dG9nZ2xlUG9ydGFsOiB0b2dnbGVNb2RhbFBvcnRhbCwgY2xvc2VQb3J0YWw6IGNsb3NlTW9kYWxQb3J0YWwsIG1vZGFsUG9ydGFsfSA9IHVzZU1vZGFsKClcbiAgY29uc3Qge3VzZXIsIHVzZXJJZCwgY2hhbmdlVXNlclJvbGUsIHJlc2VuZFVzZXJJbnZpdGUsIGRlbGV0ZVVzZXJPckludml0ZX0gPSBwcm9wc1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRNc2csIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0sIFwiVGhpcyB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZVwiXG4gICAgICAgICAsICcgJ1xuICAgICAgLCB1c2VyLnBlbmRpbmcgPyAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZU5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA3fX1cbiAgICAgICAgICAgICwgdXNlci5lbWFpbC5sZW5ndGggPiAxNSA/IHVzZXIuZW1haWwuc3Vic3RyKDAsIDE1KSArICcuLi4nIDogdXNlci5lbWFpbCwgXCInc1wiXG4gICAgICAgICAgKSwgJyAnLCBcImludml0YXRpb24gZnJvbSB0aGlzIG9yZ2FuaXphdGlvblwiXG5cbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEzfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTR9fVxuICAgICAgICAgICAgLCB1c2VyLm5hbWUubGVuZ3RoID4gMTUgPyB1c2VyLm5hbWUuc3Vic3RyKDAsIDE1KSArICcuLi4nIDogdXNlci5uYW1lXG4gICAgICAgICAgKSwgJyAnLCBcImZyb20gdGhpcyBvcmdhbml6YXRpb25cIlxuXG4gICAgICAgIClcbiAgICAgICksIFwiLiBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZS4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbnRpbnVlP1wiXG5cbiAgICApXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbXMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyN319XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyOX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsczogZ2V0SW5pdGlhbHMoX29wdGlvbmFsQ2hhaW4oW3VzZXIsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5uYW1lXSkgfHwgdXNlci5lbWFpbC5jaGFyQXQoMCkgfHwgJycpLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvckZyb21TdHJpbmcodXNlci5uYW1lIHx8IHVzZXIuZW1haWwpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMwfX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCB1c2VyLm5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzV9fSwgdXNlci5uYW1lKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM4fX0sIHVzZXIuZW1haWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzh9fSwgdXNlci5lbWFpbCkpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBhbGlnbjogJ2NlbnRlcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzl9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3csIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQwfX1cbiAgICAgICAgICAgICwgdXNlci5wZW5kaW5nICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25zLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX0dSRUVOX0RBUkssXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gcmVzZW5kVXNlckludml0ZSh1c2VyLmVtYWlsKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0Mn19XG4gICAgICAgICAgICAgICwgXCJSZXNlbmRcIlxuXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCB7IHBhZExlZnQ6IDE1LCBjbGlja2FibGU6IHRydWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTJ9fVxuICAgICAgICAgICwgdXNlcklkID09PSB1c2VyLmlkID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmFjdGl2ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTR9fSwgdXNlci5pc19hZG1pbiA/ICdBZG1pbicgOiAnV29ya2VyJylcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU3fX0sIHVzZXIuaXNfYWRtaW4gPyAnQWRtaW4nIDogJ1dvcmtlcicpXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QnV0dG9uLCB7IG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbCwgcmVmOiBvcmlnaW5SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTh9fSApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBhbGlnbjogJ2NlbnRlcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjJ9fVxuICAgICAgICAgICwgdXNlcklkICE9PSB1c2VyLmlkICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9ucywgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiB0b2dnbGVNb2RhbFBvcnRhbCwgY29sb3I6IFBBTEVUVEUuRVJST1JfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2NH19XG4gICAgICAgICAgICAgICwgJ0RlbGV0ZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyUm9sZU1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHMsIHVzZXI6IHVzZXIsIGNoYW5nZVVzZXJSb2xlOiBjaGFuZ2VVc2VyUm9sZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3MX19IClcbiAgICAgIClcbiAgICAgICwgbW9kYWxQb3J0YWwoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybWF0aW9uTW9kYWwsIHtcbiAgICAgICAgICBsYWJlbDogJ0RlbGV0ZScsXG4gICAgICAgICAgY2xvc2VQb3J0YWw6IGNsb3NlTW9kYWxQb3J0YWwsXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IGRlbGV0ZVVzZXJPckludml0ZSh1c2VyKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3NH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclJvbGVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL1VzZXJzLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IEFwcFRvcGJhciBmcm9tICdjb21wb25lbnRzL0FwcFRvcGJhcidcbmltcG9ydCB1c2VNb2RhbCBmcm9tICdob29rcy91c2VNb2RhbCdcbmltcG9ydCB7SUNPTl9TSVpFfSBmcm9tICdzdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBJbnZpdGF0aW9uTW9kYWwgZnJvbSAnY29tcG9uZW50cy9JbnZpdGF0aW9uTW9kYWwnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uJ1xuaW1wb3J0IExpc3RQYWdlIGZyb20gJ2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFBhZ2UnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IFVzZXJSb2xlIGZyb20gJy4vVXNlclJvbGUvVXNlclJvbGUnXG5cbmltcG9ydCBMaXN0VGl0bGUgZnJvbSAnY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0VGl0bGUnXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFBhZ2VIZWFkZXIgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDQwLFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMjAwcHggMTUwcHggMTUwcHggMTUwcHgnXG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgY29sb3I6ICcjZmZmJyxcbiAgZm9udFNpemU6IElDT05fU0laRS5NRDE2LFxuICBtYXJnaW5SaWdodDogMlxufSlcblxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJzTGlzdCxcbiAgICB1c2VySWQsXG4gICAgaGFuZGxlVXNlcnNJbnZpdGUsXG4gICAgcmVzZW5kVXNlckludml0ZSxcbiAgICBjaGFuZ2VVc2VyUm9sZSxcbiAgICBkZWxldGVVc2VyT3JJbnZpdGVcbiAgfSA9IHByb3BzXG4gIGNvbnN0IHttb2RhbFBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBjbG9zZVBvcnRhbH0gPSB1c2VNb2RhbCgpXG5cbiAgY29uc3QgbGVmdEJhckl0ZW1zID0gW1xuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQnV0dG9uLCB7IGtleTogXCJpbnZpdGVcIiwgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gdG9nZ2xlUG9ydGFsKCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19LCBcImFkZFwiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19LCBcIkludml0ZVwiKVxuICAgIClcbiAgXVxuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTZ9fSwgXCJOYW1lXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU3fX0sIFwiRW1haWxcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246ICdjZW50ZXInLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTh9fSwgXCJQZW5kaW5nXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IHBhZExlZnQ6IDE1LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTl9fSwgXCJSb2xlXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IGFsaWduOiAnY2VudGVyJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwfX0sIFwiQWN0aW9uXCIpXG4gICAgKVxuICApXG5cbiAgY29uc3QgaXRlbUxpc3QgPSB1c2Vyc0xpc3QubWFwKCh1c2VyKSA9PiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyUm9sZSwge1xuICAgICAga2V5OiB1c2VyLmVtYWlsLFxuICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgcmVzZW5kVXNlckludml0ZTogcmVzZW5kVXNlckludml0ZSxcbiAgICAgIGNoYW5nZVVzZXJSb2xlOiBjaGFuZ2VVc2VyUm9sZSxcbiAgICAgIGRlbGV0ZVVzZXJPckludml0ZTogZGVsZXRlVXNlck9ySW52aXRlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjV9fVxuICAgIClcbiAgKSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBUb3BiYXIsIHsgbGVmdEJhckl0ZW1zOiBsZWZ0QmFySXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3N319IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0UGFnZSwgeyBwYWdlSGVhZGVyOiBwYWdlSGVhZGVyLCBpdGVtTGlzdDogaXRlbUxpc3QsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OH19IClcbiAgICAgICwgbW9kYWxQb3J0YWwoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW52aXRhdGlvbk1vZGFsLCB7IGNsb3NlUG9ydGFsOiBjbG9zZVBvcnRhbCwgaGFuZGxlVXNlcnNJbnZpdGU6IGhhbmRsZVVzZXJzSW52aXRlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODB9fSApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvdXNlcnMvY29udGFpbmVycy9Vc2Vyc1Jvb3QudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnaG9va3MvdXNlRG9jdW1lbnRUaXRsZSdcbmltcG9ydCBVc2VycyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzJ1xuXG5pbXBvcnQge3NlZ21lbnRUcmFja30gZnJvbSAndXRpbHMvc2VnbWVudElvJ1xuaW1wb3J0IHtcbiAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbixcbiAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvblxufSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Mb2FkaW5nUGFnZSdcblxuXG5cblxuXG5cbmNvbnN0IFVzZXJzUm9vdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlciwgZGlzcGF0Y2h9ID0gcHJvcHMgfHwge31cbiAgY29uc3Qge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBvcmdJZCwgZW1haWx9ID0gdXNlciB8fCB7fVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7dXNlcklkfSA9IG5ldHdvcmtlciB8fCB7fVxuICBjb25zdCBbdXNlcnNMaXN0LCBzZXRVc2VyTGlzdF0gPSB1c2VTdGF0ZShbXSApXG4gIGNvbnN0IFt1c2Vyc0xvYWRpbmcsIHNldFVzZXJzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckxpc3QoKSB7XG4gICAgICBzZXRVc2Vyc0xvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YToge2ludml0ZWRfdXNlcnM6IGludml0ZURhdGF9LFxuICAgICAgICBlcnJvcnM6IGludml0ZUVycm9yc1xuICAgICAgfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vaW52aXRlYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB1c2VyRGF0YSxcbiAgICAgICAgZXJyb3JzOiB1c2VyRXJyb3JzXG4gICAgICB9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS91c2Vyc2AsIHttZXRob2Q6ICdHRVQnfSlcblxuICAgICAgaWYgKGludml0ZUVycm9ycyB8fCB1c2VyRXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXJzIScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyTGlzdChbLi4udXNlckRhdGEsIC4uLmludml0ZURhdGFdKVxuICAgICAgfVxuICAgICAgc2V0VXNlcnNMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBmZXRjaFVzZXJMaXN0KClcbiAgfSwgW3VzZXJdKVxuXG4gIGNvbnN0IHJlc2VuZFVzZXJJbnZpdGUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZW1haWwpID0+IHtcbiAgICAgIGlmIChlbWFpbCkge1xuICAgICAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vaW52aXRlYCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtlbWFpbHM6IGVtYWlsfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oJ0ludml0ZSB3YXMgcmUtc2VudCBzdWNjZXNmdWxseScpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXNlbmRpbmcgdXNlciBpbnZpdGUnKSAvLyBUT0RPIHNlbmQgdGhyb3VnaCBTZW50cnlcbiAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignRXJyb3IgcmVzZW5kaW5nIGludml0ZSEnKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1c2Vyc0xpc3RdXG4gIClcblxuICBjb25zdCBjaGFuZ2VVc2VyUm9sZSA9IGFzeW5jICh1c2VyLCBpc0FkbWluKSA9PiB7XG4gICAgY29uc3Qge2lkOiB1c2VySWQsIG5hbWUsIGVtYWlsfSA9IHVzZXJcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vdXNlcnMvJHt1c2VySWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGRhdGE6IHsuLi51c2VyLCAuLi57YWRtaW46IGlzQWRtaW59fVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgICBzZWdtZW50VHJhY2soJ1VzZXIgUm9sZSBVcGRhdGUgRmFpbGVkJywge1xuICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKGAke25hbWV9J3Mgcm9sZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCFgKSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdVc2VyIFJvbGUgVXBkYXRlIFN1Y2Nlc3NmdWwnLCB7XG4gICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L2ludml0ZWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiB7ZW1haWwsIGFkbWluOiBpc0FkbWlufVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgICBzZWdtZW50VHJhY2soJ0ludml0ZSBSb2xlIFVwZGF0ZSBGYWlsZWQnLCB7XG4gICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYCR7ZW1haWx9J3MgdXNlciByb2xlIGhhcyBiZWVuIHVwZGF0ZWQhYCkpXG4gICAgICAgIHNlZ21lbnRUcmFjaygnSW52aXRlIFJvbGUgVXBkYXRlIFN1Y2Nlc3NmdWwnLCB7XG4gICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VXNlckxpc3QoKGxpc3QpID0+XG4gICAgICBsaXN0Lm1hcCgodXNlcikgPT4gKHVzZXIuaWQgPT09IHVzZXJJZCA/IHsuLi51c2VyLCBpc19hZG1pbjogaXNBZG1pbn0gOiB1c2VyKSlcbiAgICApXG4gIH1cblxuICBjb25zdCBkZWxldGVVc2VyT3JJbnZpdGUgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAodXNlcikgPT4ge1xuICAgICAgbGV0IGRlbGV0ZUVycm9ycyA9IFtdXG4gICAgICBpZiAodXNlci5pZCkge1xuICAgICAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vdXNlcnMvJHt1c2VyLmlkfWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZUVycm9ycyA9IGVycm9yc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L2ludml0ZWAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIGRhdGE6IHtlbWFpbDogdXNlci5lbWFpbH1cbiAgICAgICAgfSlcbiAgICAgICAgZGVsZXRlRXJyb3JzID0gZXJyb3JzXG4gICAgICB9XG4gICAgICBpZiAoZGVsZXRlRXJyb3JzKSB7XG4gICAgICAgIHNlZ21lbnRUcmFjaygnRmFpbGVkIFRvIFJlbW92ZSBVc2VyJywge1xuICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIGludml0ZWVVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICBpbnZpdGVlRW1haWw6IGVtYWlsLFxuICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZUVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgc3VjY2Vzc01zZ1xuICAgICAgICBjb25zdCBuZXdVc2VycyA9IHVzZXJzTGlzdC5maWx0ZXIoKGkpID0+IGkuZW1haWwgIT09IHVzZXIuZW1haWwpXG4gICAgICAgIHNldFVzZXJMaXN0KG5ld1VzZXJzKVxuICAgICAgICBpZiAodXNlci5pZCkge1xuICAgICAgICAgIHNlZ21lbnRUcmFjaygnVXNlciBSZW1vdmVkJywge1xuICAgICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGludml0ZWVVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGludml0ZWVFbWFpbDogZW1haWwsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc3VjY2Vzc01zZyA9IGBTdWNjZXNzZnVsbHkgcmVtb3ZlZCAke3VzZXIubmFtZX0hYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnRUcmFjaygnSW52aXRlIFJlbW92ZWQnLCB7XG4gICAgICAgICAgICBvcmdJZCxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgaW52aXRlZVVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgaW52aXRlZUVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICBzdWNjZXNzTXNnID0gJ1N1Y2Nlc3NmdWxseSByZW1vdmVkIHVzZXIgaW52aXRlISdcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKHN1Y2Nlc3NNc2cpKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3VzZXJzTGlzdF1cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZVVzZXJzSW52aXRlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHZhbHVlc1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICAgIGAvb3Jncy8ke3VzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWR9L2ludml0ZWAsXG4gICAgICAgIHBheWxvYWRcbiAgICAgIClcbiAgICAgIGNvbnN0IHtlcnJvcnN9ID0gcmVzXG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goKGUpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZS5tZXNzYWdlKSkpXG4gICAgICAgIHNlZ21lbnRUcmFjaygnSW52aXRlIEZhaWxlZCcsIHtcbiAgICAgICAgICBvcmdJZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBpbnZpdGVlVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgaW52aXRlZUVtYWlsOiBlbWFpbCxcbiAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZW1haWxzID0gdmFsdWVzLmVtYWlscy5zcGxpdCgnLCcpLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpXG4gICAgICAgIGNvbnN0IG5ld0ludml0ZXMgPSBlbWFpbHMubWFwKChlbWFpbCkgPT4gKHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwZW5kaW5nOiB0cnVlLFxuICAgICAgICAgIGlzX2FkbWluOiBmYWxzZSxcbiAgICAgICAgICBjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogb3JnSWRcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbHMgPSBuZXcgU2V0KHVzZXJzTGlzdC5tYXAoKHUpID0+IHUuZW1haWwpKVxuICAgICAgICBzZXRVc2VyTGlzdCh1c2Vyc0xpc3QuY29uY2F0KG5ld0ludml0ZXMuZmlsdGVyKCh1KSA9PiAhdXNlckVtYWlscy5oYXModS5lbWFpbCkpKSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdJbnZpdGUgU3VjY2Vzc2Z1bCcsIHtcbiAgICAgICAgICBvcmdJZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBpbnZpdGVlVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgaW52aXRlZUVtYWlsOiBlbWFpbCxcbiAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzdWNjZXNzTXNnID1cbiAgICAgICAgICB2YWx1ZXMuZW1haWxzLmxlbmd0aCA+IDEgPyAnVXNlcnMgc3VjY2VzZnVsbHkgaW52aXRlZCEnIDogJ1VzZXIgc3VjY2VzZnVsbHkgaW52aXRlZCEnXG4gICAgICAgIGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oc3VjY2Vzc01zZykpXG4gICAgICB9XG4gICAgfSxcbiAgICBbdXNlcnNMaXN0XVxuICApXG5cbiAgdXNlRG9jdW1lbnRUaXRsZSgnVXNlciBNYW5hZ2VtZW50IHwgSHVtYW4gTGFtYmRhcycpXG5cbiAgaWYgKHVzZXJzTG9hZGluZykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ1BhZ2UsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjIyfX0gKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChVc2Vycywge1xuICAgICAgdXNlcnNMaXN0OiB1c2Vyc0xpc3QsXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICByZXNlbmRVc2VySW52aXRlOiByZXNlbmRVc2VySW52aXRlLFxuICAgICAgaGFuZGxlVXNlcnNJbnZpdGU6IGhhbmRsZVVzZXJzSW52aXRlLFxuICAgICAgY2hhbmdlVXNlclJvbGU6IGNoYW5nZVVzZXJSb2xlLFxuICAgICAgZGVsZXRlVXNlck9ySW52aXRlOiBkZWxldGVVc2VyT3JJbnZpdGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjV9fVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVXNlcnNSb290KVxuIiwiZXhwb3J0IGNvbnN0IHNlZ21lbnRUcmFjayA9IGFzeW5jIChldmVudCwgcHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7YW5hbHl0aWNzfSA9IHdpbmRvdyB8fCB1bmRlZmluZWRcbiAgaWYgKCFhbmFseXRpY3MpIHJldHVyblxuICBhbmFseXRpY3MudHJhY2soZXZlbnQsIHByb3BlcnRpZXMpXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJy4uLy4uL2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBnZXRGaXJzdExldHRlciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEF2YXRhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge2luaXRpYWxzLCBjb2xvciwgb25DbGljaywgc3R5bGUsIHRyaW0gPSB0cnVlfSA9IHByb3BzXG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgfHwgUEFMRVRURS5QUklNQVJZX01BSU5cblxuICBjb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5zcGFuKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB0ZXN0QWxpZ246ICdjZW50ZXInLFxuICAgIGhlaWdodDogYDIwcHhgLFxuICAgIHdpZHRoOiBgMjBweGAsXG4gICAgbWluV2lkdGg6IGAyMHB4YCxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IDExLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIG1hcmdpbjogJzBweCAycHgnXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19XG4gICAgICAsIHRyaW0gPyBnZXRGaXJzdExldHRlcihpbml0aWFscykgOiBpbml0aWFsc1xuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iLCJjb25zdCBnZXRGaXJzdExldHRlciA9IChzdHIpID0+IHtcbiAgbGV0IGZpcnN0TGV0dGVyID0gc3RyXG5cbiAgaWYgKHN0ciAmJiBzdHIubGVuZ3RoID4gMSkge1xuICAgIGZpcnN0TGV0dGVyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gIH1cblxuICByZXR1cm4gZmlyc3RMZXR0ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rmlyc3RMZXR0ZXJcbiIsImNvbnN0IGdldEluaXRpYWxzID0gKHN0cikgPT4ge1xuICBpZiAoIXN0ciB8fCBzdHIgPT09ICcnKSByZXR1cm5cbiAgY29uc3QgaW5pdGlhbHMgPSBzdHIubWF0Y2goL1xcYlxcdy9nKSB8fCBbXVxuICByZXR1cm4gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5pdGlhbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=