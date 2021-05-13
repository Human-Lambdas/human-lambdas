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
        console.error('Error fetching users!', JSON.stringify(inviteErrors), JSON.stringify(userErrors));
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
        console.log(`Error resending invite ${JSON.stringify(errors)}`);
      } else {
        dispatch(Object(_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])('Invite was re-sent succesfully'));
      }
    } else {
      console.error('Error resending user invite');
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
      lineNumber: 227
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
      lineNumber: 230
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvZGlzdC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWNvbXBvc2VkLXJlZi9kaXN0L3VzZS1jb21wb3NlZC1yZWYuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlLWxhdGVzdC9kaXN0L3VzZS1sYXRlc3QuZXNtLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHBUb3BiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9GbGF0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvVGhyZWVEb3RzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSW52aXRhdGlvbk1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1VzZXJSb2xlTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL3VzZXJzL2NvbXBvbmVudHMvVXNlclJvbGUvVXNlclJvbGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy91c2Vycy9jb21wb25lbnRzL1VzZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvdXNlcnMvY29udGFpbmVycy9Vc2Vyc1Jvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRJbml0aWFscy50cyJdLCJuYW1lcyI6WyJBY3Rpb25CdXR0b24iLCJQbGFpbkJ1dHRvbiIsIndhaXRpbmciLCJkaXNhYmxlZCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIlBBTEVUVEUiLCJQUklNQVJZX01BSU4iLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJQUklNQVJZX01BSU5fREFSSyIsIkJPWF9TSEFET1dfUFJJTUFSWSIsIl9qc3hGaWxlTmFtZSIsIlRvcGJhckNvbnRhaW5lciIsIndpZHRoIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImJvcmRlckJvdHRvbSIsIkJPUkRFUl9HUkFZIiwiVG9wYmFyIiwiQWN0aW9uQmFyIiwiYmFyTGVuZ3RoIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIkFwcFRvcGJhciIsInByb3BzIiwibGVmdEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsIm1pZEJhckl0ZW1zIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJsZW5ndGgiLCJtYXAiLCJlbCIsImlkeCIsIkZyYWdtZW50Iiwia2V5IiwiRmxhdEJ1dHRvbiIsImlzRGlzYWJsZWQiLCJQUklNQVJZX01BSU5fTElHSFRFUiIsIlRocmVlRG90c1NWRyIsIm1lbW8iLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsIiwiVEVYVF9NQUlOIiwiZCIsIk1vZGFsUm9vdCIsImZsZXhEaXJlY3Rpb24iLCJCT1JERVJfTUFJTl9HUkFZIiwiQm94U2hhZG93IiwiTU9EQUwiLCJNYWluVGl0bGUiLCJTdWJUaXRsZSIsIkZvcm1Db250ZW50IiwiRm9ybSIsIlN1Ym1pc3Npb25TZWN0aW9uIiwiSW52aXRhdGlvbk1vZGFsIiwiY2xvc2VQb3J0YWwiLCJoYW5kbGVVc2Vyc0ludml0ZSIsIm9uU3VibWl0SGFuZGxlciIsInVzZUNhbGxiYWNrIiwidmFsdWVzIiwiYWN0aW9ucyIsInNldFN1Ym1pdHRpbmciLCJGb3JtaWsiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJpbml0aWFsVmFsdWVzIiwiZW1haWxzIiwidmFsaWRhdGlvblNjaGVtYSIsImVtYWlsTGlzdFNjaGVtYSIsIm9uU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiaXNWYWxpZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJUZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJtaW5Sb3dzIiwiU2Vjb25kYXJ5QnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJDb250YWluZXIiLCJjdXJzb3IiLCJCQUNLR1JPVU5EX0hPVkVSIiwiTWVudUJ1dHRvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJUaHJlZURvdHNJY29uIiwiVGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJEZXNjIiwiVEVYVF9HUkFZIiwiTWVudUNvbnRhaW5lciIsIlVzZXJSb2xlTWVudSIsIm1lbnVQcm9wcyIsInVzZXIiLCJjaGFuZ2VVc2VyUm9sZSIsIkN1c3RvbU1lbnVJdGVtIiwidGl0bGUiLCJkZXNjIiwiTWVudSIsImFyaWFMYWJlbCIsIk1lbnVJdGVtIiwibGFiZWwiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQWN0aW9ucyIsIkF2YXRhckJsb2NrIiwiTGFiZWwiLCJ0ZXh0T3ZlcmZsb3ciLCJMaXN0SXRlbXMiLCJMaXN0SXRlbSIsImNsaWNrYWJsZSIsImFsaWduIiwicGFkTGVmdCIsInVzZXJTZWxlY3QiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJSb3ciLCJJbmFjdGl2ZSIsIkRlbGV0ZU5hbWUiLCJTdHlsZWRNc2ciLCJVc2VyUm9sZSIsIm1lbnVQb3J0YWwiLCJvcmlnaW5SZWYiLCJ0b2dnbGVQb3J0YWwiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfQ0VOVEVSIiwiaXNEcm9wZG93biIsInRvZ2dsZU1vZGFsUG9ydGFsIiwiY2xvc2VNb2RhbFBvcnRhbCIsIm1vZGFsUG9ydGFsIiwidXNlTW9kYWwiLCJ1c2VySWQiLCJyZXNlbmRVc2VySW52aXRlIiwiZGVsZXRlVXNlck9ySW52aXRlIiwibWVzc2FnZSIsInBlbmRpbmciLCJlbWFpbCIsInN1YnN0ciIsIkF2YXRhciIsImluaXRpYWxzIiwiZ2V0SW5pdGlhbHMiLCJfIiwiY2hhckF0IiwiY29sb3JGcm9tU3RyaW5nIiwiUFJJTUFSWV9HUkVFTl9EQVJLIiwiaWQiLCJpc19hZG1pbiIsIkVSUk9SX01BSU4iLCJDb25maXJtYXRpb25Nb2RhbCIsIm9uQ29uZmlybSIsIlBhZ2VIZWFkZXIiLCJTdHlsZWRJY29uIiwiSWNvbiIsIklDT05fU0laRSIsIk1EMTYiLCJtYXJnaW5SaWdodCIsIlVzZXJzIiwidXNlcnNMaXN0IiwicGFnZUhlYWRlciIsIkxpc3RUaXRsZSIsIml0ZW1MaXN0IiwiTGlzdFBhZ2UiLCJVc2Vyc1Jvb3QiLCJkaXNwYXRjaCIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwib3JnSWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJzZXRVc2VyTGlzdCIsInVzZVN0YXRlIiwidXNlcnNMb2FkaW5nIiwic2V0VXNlcnNMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hVc2VyTGlzdCIsImRhdGEiLCJpbnZpdGVkX3VzZXJzIiwiaW52aXRlRGF0YSIsImVycm9ycyIsImludml0ZUVycm9ycyIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwidXNlckRhdGEiLCJ1c2VyRXJyb3JzIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJhZGRGYWlsdXJlTm90aWZpY2F0aW9uIiwibG9nIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsImlzQWRtaW4iLCJhZG1pbiIsInNlZ21lbnRUcmFjayIsInVzZXJfaWQiLCJsaXN0IiwiZGVsZXRlRXJyb3JzIiwiaW52aXRlZVVzZXJJZCIsImludml0ZWVFbWFpbCIsInN1Y2Nlc3NNc2ciLCJuZXdVc2VycyIsImZpbHRlciIsInBheWxvYWQiLCJyZXMiLCJlIiwic3BsaXQiLCJpdGVtIiwidHJpbSIsIm5ld0ludml0ZXMiLCJ1c2VyRW1haWxzIiwiU2V0IiwidSIsImNvbmNhdCIsImhhcyIsInVzZURvY3VtZW50VGl0bGUiLCJMb2FkaW5nUGFnZSIsImNvbm5lY3QiLCJldmVudCIsInByb3BlcnRpZXMiLCJhbmFseXRpY3MiLCJ3aW5kb3ciLCJ0cmFjayIsInN0eWxlIiwidGVzdEFsaWduIiwibWluV2lkdGgiLCJnZXRGaXJzdExldHRlciIsInN0ciIsImZpcnN0TGV0dGVyIiwidG9VcHBlckNhc2UiLCJtYXRjaCIsInNoaWZ0IiwicG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDMEM7QUFDekI7QUFDeEM7QUFDVzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FB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UDtBQUNELENBSkQ7O0FBTWV4RiwwRUFBZixFIiwiZmlsZSI6IlVzZXJzUm9vdF8wYzBlZTJlYmJiOTNlYmQzMWM3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCwgZm9yd2FyZFJlZiwgdXNlUmVmLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUxhdGVzdCBmcm9tICd1c2UtbGF0ZXN0JztcbmltcG9ydCB1c2VDb21wb3NlZFJlZiBmcm9tICd1c2UtY29tcG9zZWQtcmVmJztcblxudmFyIEhJRERFTl9URVhUQVJFQV9TVFlMRSA9IHtcbiAgJ21pbi1oZWlnaHQnOiAnMCcsXG4gICdtYXgtaGVpZ2h0JzogJ25vbmUnLFxuICBoZWlnaHQ6ICcwJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICd6LWluZGV4JzogJy0xMDAwJyxcbiAgdG9wOiAnMCcsXG4gIHJpZ2h0OiAnMCdcbn07XG5cbnZhciBmb3JjZUhpZGRlblN0eWxlcyA9IGZ1bmN0aW9uIGZvcmNlSGlkZGVuU3R5bGVzKG5vZGUpIHtcbiAgT2JqZWN0LmtleXMoSElEREVOX1RFWFRBUkVBX1NUWUxFKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgSElEREVOX1RFWFRBUkVBX1NUWUxFW2tleV0sICdpbXBvcnRhbnQnKTtcbiAgfSk7XG59O1xuXG4vLyAgIGV4cG9ydCB0eXBlIENhbGN1bGF0ZWROb2RlSGVpZ2h0cyA9IFtoZWlnaHQ6IG51bWJlciwgcm93SGVpZ2h0OiBudW1iZXJdO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODI1OVxuXG52YXIgaGlkZGVuVGV4dGFyZWEgPSBudWxsO1xuXG52YXIgZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gZ2V0SGVpZ2h0KG5vZGUsIHNpemluZ0RhdGEpIHtcbiAgdmFyIGhlaWdodCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuXG4gIGlmIChzaXppbmdEYXRhLnNpemluZ1N0eWxlLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgLy8gYm9yZGVyLWJveDogYWRkIGJvcmRlciwgc2luY2UgaGVpZ2h0ID0gY29udGVudCArIHBhZGRpbmcgKyBib3JkZXJcbiAgICByZXR1cm4gaGVpZ2h0ICsgc2l6aW5nRGF0YS5ib3JkZXJTaXplO1xuICB9IC8vIHJlbW92ZSBwYWRkaW5nLCBzaW5jZSBoZWlnaHQgPSBjb250ZW50XG5cblxuICByZXR1cm4gaGVpZ2h0IC0gc2l6aW5nRGF0YS5wYWRkaW5nU2l6ZTtcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVIZWlnaHQoc2l6aW5nRGF0YSwgdmFsdWUsIG1pblJvd3MsIG1heFJvd3MpIHtcbiAgaWYgKG1pblJvd3MgPT09IHZvaWQgMCkge1xuICAgIG1pblJvd3MgPSAxO1xuICB9XG5cbiAgaWYgKG1heFJvd3MgPT09IHZvaWQgMCkge1xuICAgIG1heFJvd3MgPSBJbmZpbml0eTtcbiAgfVxuXG4gIGlmICghaGlkZGVuVGV4dGFyZWEpIHtcbiAgICBoaWRkZW5UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd0YWItaW5kZXgnLCAnLTEnKTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBmb3JjZUhpZGRlblN0eWxlcyhoaWRkZW5UZXh0YXJlYSk7XG4gIH1cblxuICBpZiAoaGlkZGVuVGV4dGFyZWEucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuVGV4dGFyZWEpO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdTaXplID0gc2l6aW5nRGF0YS5wYWRkaW5nU2l6ZSxcbiAgICAgIGJvcmRlclNpemUgPSBzaXppbmdEYXRhLmJvcmRlclNpemUsXG4gICAgICBzaXppbmdTdHlsZSA9IHNpemluZ0RhdGEuc2l6aW5nU3R5bGU7XG4gIHZhciBib3hTaXppbmcgPSBzaXppbmdTdHlsZS5ib3hTaXppbmc7XG4gIE9iamVjdC5rZXlzKHNpemluZ1N0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChfa2V5KSB7XG4gICAgdmFyIGtleSA9IF9rZXk7XG4gICAgaGlkZGVuVGV4dGFyZWEuc3R5bGVba2V5XSA9IHNpemluZ1N0eWxlW2tleV07XG4gIH0pO1xuICBmb3JjZUhpZGRlblN0eWxlcyhoaWRkZW5UZXh0YXJlYSk7XG4gIGhpZGRlblRleHRhcmVhLnZhbHVlID0gdmFsdWU7XG4gIHZhciBoZWlnaHQgPSBnZXRIZWlnaHQoaGlkZGVuVGV4dGFyZWEsIHNpemluZ0RhdGEpOyAvLyBtZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG5cbiAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSAneCc7XG4gIHZhciByb3dIZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgdmFyIG1pbkhlaWdodCA9IHJvd0hlaWdodCAqIG1pblJvd3M7XG5cbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgbWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICB9XG5cbiAgaGVpZ2h0ID0gTWF0aC5tYXgobWluSGVpZ2h0LCBoZWlnaHQpO1xuICB2YXIgbWF4SGVpZ2h0ID0gcm93SGVpZ2h0ICogbWF4Um93cztcblxuICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gIH1cblxuICBoZWlnaHQgPSBNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCk7XG4gIHJldHVybiBbaGVpZ2h0LCByb3dIZWlnaHRdO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbnZhciBwaWNrID0gZnVuY3Rpb24gcGljayhwcm9wcywgb2JqKSB7XG4gIHJldHVybiBwcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcHJvcCkge1xuICAgIGFjY1twcm9wXSA9IG9ialtwcm9wXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuXG52YXIgU0laSU5HX1NUWUxFID0gWydib3JkZXJCb3R0b21XaWR0aCcsICdib3JkZXJMZWZ0V2lkdGgnLCAnYm9yZGVyUmlnaHRXaWR0aCcsICdib3JkZXJUb3BXaWR0aCcsICdib3hTaXppbmcnLCAnZm9udEZhbWlseScsICdmb250U2l6ZScsICdmb250U3R5bGUnLCAnZm9udFdlaWdodCcsICdsZXR0ZXJTcGFjaW5nJywgJ2xpbmVIZWlnaHQnLCAncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ1RvcCcsIC8vIG5vbi1zdGFuZGFyZFxuJ3RhYlNpemUnLCAndGV4dEluZGVudCcsIC8vIG5vbi1zdGFuZGFyZFxuJ3RleHRSZW5kZXJpbmcnLCAndGV4dFRyYW5zZm9ybScsICd3aWR0aCddO1xudmFyIGlzSUUgPSAhIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jdXJyZW50U3R5bGUgO1xuXG52YXIgZ2V0U2l6aW5nRGF0YSA9IGZ1bmN0aW9uIGdldFNpemluZ0RhdGEobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICBpZiAoc3R5bGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzaXppbmdTdHlsZSA9IHBpY2soU0laSU5HX1NUWUxFLCBzdHlsZSk7XG4gIHZhciBib3hTaXppbmcgPSBzaXppbmdTdHlsZS5ib3hTaXppbmc7IC8vIHByb2JhYmx5IG5vZGUgaXMgZGV0YWNoZWQgZnJvbSBET00sIGNhbid0IHJlYWQgY29tcHV0ZWQgZGltZW5zaW9uc1xuXG4gIGlmIChib3hTaXppbmcgPT09ICcnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gSUUgKEVkZ2UgaGFzIGFscmVhZHkgY29ycmVjdCBiZWhhdmlvdXIpIHJldHVybnMgY29udGVudCB3aWR0aCBhcyBjb21wdXRlZCB3aWR0aFxuICAvLyBzbyB3ZSBuZWVkIHRvIGFkZCBtYW51YWxseSBwYWRkaW5nIGFuZCBib3JkZXIgd2lkdGhzXG5cblxuICBpZiAoaXNJRSAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIHNpemluZ1N0eWxlLndpZHRoID0gcGFyc2VGbG9hdChzaXppbmdTdHlsZS53aWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlclJpZ2h0V2lkdGgpICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5wYWRkaW5nUmlnaHQpICsgcGFyc2VGbG9hdChzaXppbmdTdHlsZS5wYWRkaW5nTGVmdCkgKyAncHgnO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdTaXplID0gcGFyc2VGbG9hdChzaXppbmdTdHlsZS5wYWRkaW5nQm90dG9tKSArIHBhcnNlRmxvYXQoc2l6aW5nU3R5bGUucGFkZGluZ1RvcCk7XG4gIHZhciBib3JkZXJTaXplID0gcGFyc2VGbG9hdChzaXppbmdTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCkgKyBwYXJzZUZsb2F0KHNpemluZ1N0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgcmV0dXJuIHtcbiAgICBzaXppbmdTdHlsZTogc2l6aW5nU3R5bGUsXG4gICAgcGFkZGluZ1NpemU6IHBhZGRpbmdTaXplLFxuICAgIGJvcmRlclNpemU6IGJvcmRlclNpemVcbiAgfTtcbn07XG5cbnZhciB1c2VXaW5kb3dSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIHVzZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIHZhciBsYXRlc3RMaXN0ZW5lciA9IHVzZUxhdGVzdChsaXN0ZW5lcik7XG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsYXRlc3RMaXN0ZW5lci5jdXJyZW50KGV2ZW50KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xufTtcblxudmFyIFRleHRhcmVhQXV0b3NpemUgPSBmdW5jdGlvbiBUZXh0YXJlYUF1dG9zaXplKF9yZWYsIHVzZXJSZWYpIHtcbiAgdmFyIGNhY2hlTWVhc3VyZW1lbnRzID0gX3JlZi5jYWNoZU1lYXN1cmVtZW50cyxcbiAgICAgIG1heFJvd3MgPSBfcmVmLm1heFJvd3MsXG4gICAgICBtaW5Sb3dzID0gX3JlZi5taW5Sb3dzLFxuICAgICAgX3JlZiRvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYkb25DaGFuZ2UgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uQ2hhbmdlLFxuICAgICAgX3JlZiRvbkhlaWdodENoYW5nZSA9IF9yZWYub25IZWlnaHRDaGFuZ2UsXG4gICAgICBvbkhlaWdodENoYW5nZSA9IF9yZWYkb25IZWlnaHRDaGFuZ2UgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjYWNoZU1lYXN1cmVtZW50c1wiLCBcIm1heFJvd3NcIiwgXCJtaW5Sb3dzXCIsIFwib25DaGFuZ2VcIiwgXCJvbkhlaWdodENoYW5nZVwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvcHMuc3R5bGUpIHtcbiAgICBpZiAoJ21heEhlaWdodCcgaW4gcHJvcHMuc3R5bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNpbmcgYHN0eWxlLm1heEhlaWdodGAgZm9yIDxUZXh0YXJlYUF1dG9zaXplLz4gaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBgbWF4Um93c2AuJyk7XG4gICAgfVxuXG4gICAgaWYgKCdtaW5IZWlnaHQnIGluIHByb3BzLnN0eWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIGBzdHlsZS5taW5IZWlnaHRgIGZvciA8VGV4dGFyZWFBdXRvc2l6ZS8+IGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYG1pblJvd3NgLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0NvbnRyb2xsZWQgPSBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgbGliUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgcmVmID0gdXNlQ29tcG9zZWRSZWYobGliUmVmLCB1c2VyUmVmKTtcbiAgdmFyIGhlaWdodFJlZiA9IHVzZVJlZigwKTtcbiAgdmFyIG1lYXN1cmVtZW50c0NhY2hlUmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIHJlc2l6ZVRleHRhcmVhID0gZnVuY3Rpb24gcmVzaXplVGV4dGFyZWEoKSB7XG4gICAgdmFyIG5vZGUgPSBsaWJSZWYuY3VycmVudDtcbiAgICB2YXIgbm9kZVNpemluZ0RhdGEgPSBjYWNoZU1lYXN1cmVtZW50cyAmJiBtZWFzdXJlbWVudHNDYWNoZVJlZi5jdXJyZW50ID8gbWVhc3VyZW1lbnRzQ2FjaGVSZWYuY3VycmVudCA6IGdldFNpemluZ0RhdGEobm9kZSk7XG5cbiAgICBpZiAoIW5vZGVTaXppbmdEYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbWVhc3VyZW1lbnRzQ2FjaGVSZWYuY3VycmVudCA9IG5vZGVTaXppbmdEYXRhO1xuXG4gICAgdmFyIF9jYWxjdWxhdGVOb2RlSGVpZ2h0ID0gY2FsY3VsYXRlTm9kZUhlaWdodChub2RlU2l6aW5nRGF0YSwgbm9kZS52YWx1ZSB8fCBub2RlLnBsYWNlaG9sZGVyIHx8ICd4JywgbWluUm93cywgbWF4Um93cyksXG4gICAgICAgIGhlaWdodCA9IF9jYWxjdWxhdGVOb2RlSGVpZ2h0WzBdLFxuICAgICAgICByb3dIZWlnaHQgPSBfY2FsY3VsYXRlTm9kZUhlaWdodFsxXTtcblxuICAgIGlmIChoZWlnaHRSZWYuY3VycmVudCAhPT0gaGVpZ2h0KSB7XG4gICAgICBoZWlnaHRSZWYuY3VycmVudCA9IGhlaWdodDtcbiAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGhlaWdodCArIFwicHhcIiwgJ2ltcG9ydGFudCcpO1xuICAgICAgb25IZWlnaHRDaGFuZ2UoaGVpZ2h0LCB7XG4gICAgICAgIHJvd0hlaWdodDogcm93SGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICByZXNpemVUZXh0YXJlYSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGV2ZW50KTtcbiAgfTtcblxuICB7XG4gICAgdXNlTGF5b3V0RWZmZWN0KHJlc2l6ZVRleHRhcmVhKTtcbiAgICB1c2VXaW5kb3dSZXNpemVMaXN0ZW5lcihyZXNpemVUZXh0YXJlYSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn07XG5cbnZhciBpbmRleCA9IC8qICNfX1BVUkVfXyAqL2ZvcndhcmRSZWYoVGV4dGFyZWFBdXRvc2l6ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxudmFyIHVwZGF0ZVJlZiA9IGZ1bmN0aW9uIHVwZGF0ZVJlZihyZWYsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmVmKHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbn07XG5cbnZhciB1c2VDb21wb3NlZFJlZiA9IGZ1bmN0aW9uIHVzZUNvbXBvc2VkUmVmKGxpYlJlZiwgdXNlclJlZikge1xuICB2YXIgcHJldlVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGxpYlJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XG5cbiAgICBpZiAocHJldlVzZXJSZWYuY3VycmVudCkge1xuICAgICAgdXBkYXRlUmVmKHByZXZVc2VyUmVmLmN1cnJlbnQsIG51bGwpO1xuICAgIH1cblxuICAgIHByZXZVc2VyUmVmLmN1cnJlbnQgPSB1c2VyUmVmO1xuXG4gICAgaWYgKCF1c2VyUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlUmVmKHVzZXJSZWYsIGluc3RhbmNlKTtcbiAgfSwgW3VzZXJSZWZdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUNvbXBvc2VkUmVmO1xuIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgaW5kZXggPSAgdXNlTGF5b3V0RWZmZWN0IDtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICd1c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0JztcblxudmFyIHVzZUxhdGVzdCA9IGZ1bmN0aW9uIHVzZUxhdGVzdCh2YWx1ZSkge1xuICB2YXIgcmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMYXRlc3Q7XG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHt3YWl0aW5nLCBkaXNhYmxlZH0pID0+IHtcbiAgLy9jb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMjgsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke1BBTEVUVEUuQk9YX1NIQURPV19QUklNQVJZfWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0FwcFRvcGJhci50c3hcIjtpbXBvcnQgUmVhY3QsIHt9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5jb25zdCBUb3BiYXJDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgbWluSGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWBcbn0pXG5cbmNvbnN0IFRvcGJhciA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAnMCAzNXB4JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbidcbn0pXG5cbmNvbnN0IEFjdGlvbkJhciA9IHN0eWxlZC5kaXYoKHtiYXJMZW5ndGh9KSA9PiAoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoJHtiYXJMZW5ndGh9LCBhdXRvKWAsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pKVxuXG5jb25zdCBBcHBUb3BiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2xlZnRCYXJJdGVtcyA9IFtdLCByaWdodEJhckl0ZW1zID0gW10sIG1pZEJhckl0ZW1zID0gW119ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRvcGJhckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9wYmFyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbkJhciwgeyBiYXJMZW5ndGg6IGxlZnRCYXJJdGVtcy5sZW5ndGggfHwgMCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgICAsIGxlZnRCYXJJdGVtcy5tYXAoKGVsLCBpZHgpID0+IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHsga2V5OiBpZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319LCBlbClcbiAgICAgICAgICApKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CYXIsIHsgYmFyTGVuZ3RoOiBtaWRCYXJJdGVtcy5sZW5ndGggfHwgMCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX1cbiAgICAgICAgICAsIG1pZEJhckl0ZW1zLm1hcCgoZWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgeyBrZXk6IGlkeCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ4fX0sIGVsKVxuICAgICAgICAgICkpXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbkJhciwgeyBiYXJMZW5ndGg6IHJpZ2h0QmFySXRlbXMubGVuZ3RoIHx8IDAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MX19XG4gICAgICAgICAgLCByaWdodEJhckl0ZW1zLm1hcCgoZWwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgeyBrZXk6IGlkeCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX0sIGVsKVxuICAgICAgICAgICkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwVG9wYmFyXG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEZsYXRCdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKChwcm9wcykgPT4ge1xuICBjb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLXG4gICAgfSxcbiAgICAnOmFjdGl2ZSwgOmZvY3VzJzoge1xuICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7UEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgUEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFUlxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmxhdEJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFRocmVlRG90c1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTQ5Ni42NzkgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTMwMy4zNDcgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlRG90c1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ludml0YXRpb25Nb2RhbC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBGbGF0QnV0dG9uIGZyb20gJy4vRmxhdEJ1dHRvbidcbmltcG9ydCB7Rm9ybWlrLCBGb3JtfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge2VtYWlsTGlzdFNjaGVtYX0gZnJvbSAndW5pdmVyc2FsL3ZhbGlkYXRpb25zL3l1cFNjaGVtYSdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Qm94U2hhZG93fSBmcm9tICd1dGlscy9jb25zdGFudHMnXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcblxuXG5cblxuXG5cbmNvbnN0IE1vZGFsUm9vdCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB3aWR0aDogNTAwLFxuICBib3JkZXJSYWRpdXM6IDEwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJveFNoYWRvdzogQm94U2hhZG93Lk1PREFMXG59KVxuXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDIyLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkJvdHRvbTogMzVcbn0pXG5cbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMTgsXG4gIGZvbnRXZWlnaHQ6IDUwMFxufSlcblxuY29uc3QgRm9ybUNvbnRlbnQgPSBzdHlsZWQoRm9ybSkoe1xuICBwYWRkaW5nOiAnNTBweCA1MHB4IDMwcHgnXG59KVxuXG5jb25zdCBTdWJtaXNzaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgYXV0byknLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nVG9wOiAnMjVweCdcbn0pXG5cbmNvbnN0IEludml0YXRpb25Nb2RhbCA9ICh7Y2xvc2VQb3J0YWwsIGhhbmRsZVVzZXJzSW52aXRlfSkgPT4ge1xuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICBoYW5kbGVVc2Vyc0ludml0ZSh2YWx1ZXMpXG4gICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoKVxuICAgICAgY2xvc2VQb3J0YWwoKVxuICAgIH0sXG4gICAgW2Nsb3NlUG9ydGFsLCBoYW5kbGVVc2Vyc0ludml0ZV1cbiAgKVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWssIHtcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtlbWFpbHM6ICcnfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogZW1haWxMaXN0U2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogb25TdWJtaXRIYW5kbGVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjF9fVxuICAgICAgXG4gICAgICAgICwgKHtpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVCbHVyfSkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRlbnQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW5UaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MH19LCBcIkludml0ZSB3b3JrZXJzIHRvIHRlYW1cIiAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MX19LCBcIlNlbmQgaW52aXRlcyBieSBlbWFpbDpcIiAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtaWtlQGh1bWFubGFtYmRhcy5jb20sIGplZmZAaHVtYW5sYW1iZGFzLmNvbSwgc2FyYWhAaHVtYW5sYW1iZGFzLmNvbSwgYWxpY2VAaHVtYW5sYW1iZGFzLmNvbVwiICAgLFxuICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsc1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLmVtYWlscyxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICBtaW5Sb3dzOiA1LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1Ym1pc3Npb25TZWN0aW9uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBjbG9zZVBvcnRhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgxfX0sIFwiQ2FuY2VsXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGbGF0QnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcgfHwgIWlzVmFsaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4NH19LCBcIlNlbmQgSW52aXRhdGlvblwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGF0aW9uTW9kYWxcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9NZW51QnV0dG9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgVGhyZWVEb3RzSWNvbiBmcm9tICdjb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRydcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcblxuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgd2lkdGg6IDI1LFxuICBoZWlnaHQ6IDI1LFxuICBwYWRkaW5nOiAwLFxuICBtYXJnaW46IDAsXG4gIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgZWFzZS1pbicsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJcbiAgfVxufSlcblxuY29uc3QgTWVudUJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyByZWY6IHJlZiwgb25DbGljazogb25DbGljaywgdHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaHJlZURvdHNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1VzZXJSb2xlTWVudS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcblxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogMjIwXG59KVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBtYXJnaW5Cb3R0b206IDJcbn0pXG5cbmNvbnN0IERlc2MgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEzLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGZvbnRXZWlnaHQ6IDQwMFxufSlcblxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnNXB4IDE1cHgnXG59KVxuXG5jb25zdCBVc2VyUm9sZU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgdXNlciwgY2hhbmdlVXNlclJvbGV9ID0gcHJvcHNcbiAgY29uc3QgQ3VzdG9tTWVudUl0ZW0gPSBSZWFjdC51c2VDYWxsYmFjaygocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyfX0sIHByb3BzLnRpdGxlKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEZXNjLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX0sIHByb3BzLmRlc2MpXG4gICAgICApXG4gICAgKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0NoYW5nZSB1c2VyIHBlcm1pc3Npb25zJywgLi4ubWVudVByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEN1c3RvbU1lbnVJdGVtLCB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFkbWluXCIsXG4gICAgICAgICAgICAgIGRlc2M6IFwiQ2FuIGNyZWF0ZSBuZXcgcXVldWVzLCBpbnZpdGUgd29ya2VycyBhbmQgY2hhbmdlIHVzZXIgcGVybWlzc2lvbnMuXCIgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19XG4gICAgICAgICAgICApXG4gICAgICAgICAgLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGNoYW5nZVVzZXJSb2xlKHVzZXIsIHRydWUpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTJ9fVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ3VzdG9tTWVudUl0ZW0sIHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiV29ya2VyXCIsXG4gICAgICAgICAgICAgIGRlc2M6IFwiTGltaXRlZCBhY2Nlc3MuIENhbiBub3QgY3JlYXRlIHF1ZXVlcyBvciBpbnZpdGUgd29ya2Vycy5cIiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgICxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBjaGFuZ2VVc2VyUm9sZSh1c2VyLCBmYWxzZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclJvbGVNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvdXNlcnMvY29tcG9uZW50cy9Vc2VyUm9sZS9Vc2VyUm9sZS50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB1c2VNZW51IGZyb20gJ2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnaG9va3MvdXNlQ29vcmRzJ1xuaW1wb3J0IFVzZXJSb2xlTWVudSBmcm9tICdjb21wb25lbnRzL1VzZXJSb2xlTWVudSdcbmltcG9ydCBBdmF0YXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHtjb2xvckZyb21TdHJpbmd9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SW5pdGlhbHMnXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnaG9va3MvdXNlTW9kYWwnXG5pbXBvcnQgQ29uZmlybWF0aW9uTW9kYWwgZnJvbSAnY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvTWVudUJ1dHRvbidcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9oZWxwZXJzL3RleHRPdmVyZmxvdydcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQoUGxhaW5CdXR0b24pKCh7Y29sb3J9KSA9PiAoe1xuICBjb2xvcixcbiAgZm9udFNpemU6IDEzLFxuICB3aWR0aDogJ2F1dG8nLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDE1cHgnLFxuICBtYXJnaW46IDAsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJcbiAgfVxufSkpXG5cbmNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpblJpZ2h0OiAxMFxufSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBMaXN0SXRlbXMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDIwMHB4IDE1MHB4IDE1MHB4IDE1MHB4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xufSlcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQuZGl2XG5cblxuXG4oKHtjbGlja2FibGUsIGFsaWduLCBwYWRMZWZ0fSkgPT4gKHtcbiAgY3Vyc29yOiBjbGlja2FibGUgPyAncG9pbnRlcicgOiAnZGVmYXVsdCcsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiBhbGlnbiA/IGFsaWduIDogJ2xlZnQnLFxuICBwYWRkaW5nTGVmdDogcGFkTGVmdCA/IHBhZExlZnQgOiAnbm9uZScsXG4gIHBhZGRpbmdUb3A6IDUsXG4gIHBhZGRpbmdCb3R0b206IDUsXG4gICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgYm9yZGVyUmlnaHQ6IDBcbiAgfVxufSkpXG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBJbmFjdGl2ZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbn0pXG5cbmNvbnN0IERlbGV0ZU5hbWUgPSBzdHlsZWQuc3Bhbih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250U2l6ZTogMTVcbn0pXG5cbmNvbnN0IFN0eWxlZE1zZyA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udFNpemU6IDE0XG59KVxuXG5jb25zdCBVc2VyUm9sZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bWVudVBvcnRhbCwgb3JpZ2luUmVmLCBtZW51UHJvcHMsIHRvZ2dsZVBvcnRhbH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9DRU5URVIsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlXG4gIH0pXG4gIGNvbnN0IHt0b2dnbGVQb3J0YWw6IHRvZ2dsZU1vZGFsUG9ydGFsLCBjbG9zZVBvcnRhbDogY2xvc2VNb2RhbFBvcnRhbCwgbW9kYWxQb3J0YWx9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7dXNlciwgdXNlcklkLCBjaGFuZ2VVc2VyUm9sZSwgcmVzZW5kVXNlckludml0ZSwgZGVsZXRlVXNlck9ySW52aXRlfSA9IHByb3BzXG5cbiAgY29uc3QgbWVzc2FnZSA9IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZE1zZywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDN9fSwgXCJUaGlzIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlXCJcbiAgICAgICAgICwgJyAnXG4gICAgICAsIHVzZXIucGVuZGluZyA/IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVsZXRlTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDd9fVxuICAgICAgICAgICAgLCB1c2VyLmVtYWlsLmxlbmd0aCA+IDE1ID8gdXNlci5lbWFpbC5zdWJzdHIoMCwgMTUpICsgJy4uLicgOiB1c2VyLmVtYWlsLCBcIidzXCJcbiAgICAgICAgICApLCAnICcsIFwiaW52aXRhdGlvbiBmcm9tIHRoaXMgb3JnYW5pemF0aW9uXCJcblxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTN9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEZWxldGVOYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNH19XG4gICAgICAgICAgICAsIHVzZXIubmFtZS5sZW5ndGggPiAxNSA/IHVzZXIubmFtZS5zdWJzdHIoMCwgMTUpICsgJy4uLicgOiB1c2VyLm5hbWVcbiAgICAgICAgICApLCAnICcsIFwiZnJvbSB0aGlzIG9yZ2FuaXphdGlvblwiXG5cbiAgICAgICAgKVxuICAgICAgKSwgXCIuIFRoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lLiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY29udGludWU/XCJcblxuICAgIClcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtcywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjZ9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI3fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm93LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwge1xuICAgICAgICAgICAgICAgIGluaXRpYWxzOiBnZXRJbml0aWFscyhfb3B0aW9uYWxDaGFpbihbdXNlciwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLm5hbWVdKSB8fCB1c2VyLmVtYWlsLmNoYXJBdCgwKSB8fCAnJyksXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yRnJvbVN0cmluZyh1c2VyLm5hbWUgfHwgdXNlci5lbWFpbCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIHVzZXIubmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzNX19LCB1c2VyLm5hbWUpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzh9fSwgdXNlci5lbWFpbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzOH19LCB1c2VyLmVtYWlsKSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCB7IGFsaWduOiAnY2VudGVyJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzOX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDB9fVxuICAgICAgICAgICAgLCB1c2VyLnBlbmRpbmcgJiYgKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbnMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfR1JFRU5fREFSSyxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiByZXNlbmRVc2VySW52aXRlKHVzZXIuZW1haWwpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX1cbiAgICAgICAgICAgICAgLCBcIlJlc2VuZFwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHsgcGFkTGVmdDogMTUsIGNsaWNrYWJsZTogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1Mn19XG4gICAgICAgICAgLCB1c2VySWQgPT09IHVzZXIuaWQgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluYWN0aXZlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1NH19LCB1c2VyLmlzX2FkbWluID8gJ0FkbWluJyA6ICdXb3JrZXInKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTd9fSwgdXNlci5pc19hZG1pbiA/ICdBZG1pbicgOiAnV29ya2VyJylcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVCdXR0b24sIHsgb25DbGljazogdG9nZ2xlUG9ydGFsLCByZWY6IG9yaWdpblJlZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1OH19IClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RJdGVtLCB7IGFsaWduOiAnY2VudGVyJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Mn19XG4gICAgICAgICAgLCB1c2VySWQgIT09IHVzZXIuaWQgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25zLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IHRvZ2dsZU1vZGFsUG9ydGFsLCBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY0fX1cbiAgICAgICAgICAgICAgLCAnRGVsZXRlJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBtZW51UG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJSb2xlTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wcywgdXNlcjogdXNlciwgY2hhbmdlVXNlclJvbGU6IGNoYW5nZVVzZXJSb2xlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcxfX0gKVxuICAgICAgKVxuICAgICAgLCBtb2RhbFBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb25maXJtYXRpb25Nb2RhbCwge1xuICAgICAgICAgIGxhYmVsOiAnRGVsZXRlJyxcbiAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VNb2RhbFBvcnRhbCxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4gZGVsZXRlVXNlck9ySW52aXRlKHVzZXIpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc0fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUm9sZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9tb2R1bGVzL3VzZXJzL2NvbXBvbmVudHMvVXNlcnMudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQXBwVG9wYmFyIGZyb20gJ2NvbXBvbmVudHMvQXBwVG9wYmFyJ1xuaW1wb3J0IHVzZU1vZGFsIGZyb20gJ2hvb2tzL3VzZU1vZGFsJ1xuaW1wb3J0IHtJQ09OX1NJWkV9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IEludml0YXRpb25Nb2RhbCBmcm9tICdjb21wb25lbnRzL0ludml0YXRpb25Nb2RhbCdcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgTGlzdFBhZ2UgZnJvbSAnY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgVXNlclJvbGUgZnJvbSAnLi9Vc2VyUm9sZS9Vc2VyUm9sZSdcblxuaW1wb3J0IExpc3RUaXRsZSBmcm9tICdjb21wb25lbnRzL0xpc3RQYWdlL0xpc3RUaXRsZSdcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUGFnZUhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gIGhlaWdodDogNDAsXG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAyMDBweCAxNTBweCAxNTBweCAxNTBweCdcbn0pXG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBjb2xvcjogJyNmZmYnLFxuICBmb250U2l6ZTogSUNPTl9TSVpFLk1EMTYsXG4gIG1hcmdpblJpZ2h0OiAyXG59KVxuXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcnNMaXN0LFxuICAgIHVzZXJJZCxcbiAgICBoYW5kbGVVc2Vyc0ludml0ZSxcbiAgICByZXNlbmRVc2VySW52aXRlLFxuICAgIGNoYW5nZVVzZXJSb2xlLFxuICAgIGRlbGV0ZVVzZXJPckludml0ZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge21vZGFsUG9ydGFsLCB0b2dnbGVQb3J0YWwsIGNsb3NlUG9ydGFsfSA9IHVzZU1vZGFsKClcblxuICBjb25zdCBsZWZ0QmFySXRlbXMgPSBbXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CdXR0b24sIHsga2V5OiBcImludml0ZVwiLCB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB0b2dnbGVQb3J0YWwoKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5fX0sIFwiYWRkXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX0sIFwiSW52aXRlXCIpXG4gICAgKVxuICBdXG5cbiAgY29uc3QgcGFnZUhlYWRlciA9IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VIZWFkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Nn19LCBcIk5hbWVcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTd9fSwgXCJFbWFpbFwiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwgeyBhbGlnbjogJ2NlbnRlcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1OH19LCBcIlBlbmRpbmdcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgcGFkTGVmdDogMTUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1OX19LCBcIlJvbGVcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246ICdjZW50ZXInLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjB9fSwgXCJBY3Rpb25cIilcbiAgICApXG4gIClcblxuICBjb25zdCBpdGVtTGlzdCA9IHVzZXJzTGlzdC5tYXAoKHVzZXIpID0+IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJSb2xlLCB7XG4gICAgICBrZXk6IHVzZXIuZW1haWwsXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICByZXNlbmRVc2VySW52aXRlOiByZXNlbmRVc2VySW52aXRlLFxuICAgICAgY2hhbmdlVXNlclJvbGU6IGNoYW5nZVVzZXJSb2xlLFxuICAgICAgZGVsZXRlVXNlck9ySW52aXRlOiBkZWxldGVVc2VyT3JJbnZpdGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgKVxuICApKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcFRvcGJhciwgeyBsZWZ0QmFySXRlbXM6IGxlZnRCYXJJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc3fX0gKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RQYWdlLCB7IHBhZ2VIZWFkZXI6IHBhZ2VIZWFkZXIsIGl0ZW1MaXN0OiBpdGVtTGlzdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc4fX0gKVxuICAgICAgLCBtb2RhbFBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnZpdGF0aW9uTW9kYWwsIHsgY2xvc2VQb3J0YWw6IGNsb3NlUG9ydGFsLCBoYW5kbGVVc2Vyc0ludml0ZTogaGFuZGxlVXNlcnNJbnZpdGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19IClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy91c2Vycy9jb250YWluZXJzL1VzZXJzUm9vdC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICdob29rcy91c2VEb2N1bWVudFRpdGxlJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcnMnXG5cbmltcG9ydCB7c2VnbWVudFRyYWNrfSBmcm9tICd1dGlscy9zZWdtZW50SW8nXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJy4uLy4uL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xvYWRpbmdQYWdlJ1xuXG5cblxuXG5cblxuY29uc3QgVXNlcnNSb290ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1c2VyLCBkaXNwYXRjaH0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCB7Y3VycmVudF9vcmdhbml6YXRpb25faWQ6IG9yZ0lkLCBlbWFpbH0gPSB1c2VyIHx8IHt9XG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHt1c2VySWR9ID0gbmV0d29ya2VyIHx8IHt9XG4gIGNvbnN0IFt1c2Vyc0xpc3QsIHNldFVzZXJMaXN0XSA9IHVzZVN0YXRlKFtdIClcbiAgY29uc3QgW3VzZXJzTG9hZGluZywgc2V0VXNlcnNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTGlzdCgpIHtcbiAgICAgIHNldFVzZXJzTG9hZGluZyh0cnVlKVxuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7aW52aXRlZF91c2VyczogaW52aXRlRGF0YX0sXG4gICAgICAgIGVycm9yczogaW52aXRlRXJyb3JzXG4gICAgICB9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9pbnZpdGVgLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6IHVzZXJEYXRhLFxuICAgICAgICBlcnJvcnM6IHVzZXJFcnJvcnNcbiAgICAgIH0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3VzZXJzYCwge21ldGhvZDogJ0dFVCd9KVxuXG4gICAgICBpZiAoaW52aXRlRXJyb3JzIHx8IHVzZXJFcnJvcnMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnRXJyb3IgZmV0Y2hpbmcgdXNlcnMhJyxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShpbnZpdGVFcnJvcnMpLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVzZXJFcnJvcnMpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXJMaXN0KFsuLi51c2VyRGF0YSwgLi4uaW52aXRlRGF0YV0pXG4gICAgICB9XG4gICAgICBzZXRVc2Vyc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGZldGNoVXNlckxpc3QoKVxuICB9LCBbdXNlcl0pXG5cbiAgY29uc3QgcmVzZW5kVXNlckludml0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChlbWFpbCkgPT4ge1xuICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgIGNvbnN0IHtlcnJvcnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9pbnZpdGVgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge2VtYWlsczogZW1haWx9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKSkpXG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlc2VuZGluZyBpbnZpdGUgJHtKU09OLnN0cmluZ2lmeShlcnJvcnMpfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignSW52aXRlIHdhcyByZS1zZW50IHN1Y2Nlc2Z1bGx5JykpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlc2VuZGluZyB1c2VyIGludml0ZScpXG4gICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0Vycm9yIHJlc2VuZGluZyBpbnZpdGUhJykpXG4gICAgICB9XG4gICAgfSxcbiAgICBbdXNlcnNMaXN0XVxuICApXG5cbiAgY29uc3QgY2hhbmdlVXNlclJvbGUgPSBhc3luYyAodXNlciwgaXNBZG1pbikgPT4ge1xuICAgIGNvbnN0IHtpZDogdXNlcklkLCBuYW1lLCBlbWFpbH0gPSB1c2VyXG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3VzZXJzLyR7dXNlcklkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiB7Li4udXNlciwgLi4ue2FkbWluOiBpc0FkbWlufX1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpKSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdVc2VyIFJvbGUgVXBkYXRlIEZhaWxlZCcsIHtcbiAgICAgICAgICBvcmdJZCxcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihgJHtuYW1lfSdzIHJvbGUgc3VjY2Vzc2Z1bGx5IGNoYW5nZWQhYCkpXG4gICAgICAgIHNlZ21lbnRUcmFjaygnVXNlciBSb2xlIFVwZGF0ZSBTdWNjZXNzZnVsJywge1xuICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtlcnJvcnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9pbnZpdGVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgZGF0YToge2VtYWlsLCBhZG1pbjogaXNBZG1pbn1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpKSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdJbnZpdGUgUm9sZSBVcGRhdGUgRmFpbGVkJywge1xuICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKGAke2VtYWlsfSdzIHVzZXIgcm9sZSBoYXMgYmVlbiB1cGRhdGVkIWApKVxuICAgICAgICBzZWdtZW50VHJhY2soJ0ludml0ZSBSb2xlIFVwZGF0ZSBTdWNjZXNzZnVsJywge1xuICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHVzZXJJZDogdXNlci51c2VyX2lkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNldFVzZXJMaXN0KChsaXN0KSA9PlxuICAgICAgbGlzdC5tYXAoKHVzZXIpID0+ICh1c2VyLmlkID09PSB1c2VySWQgPyB7Li4udXNlciwgaXNfYWRtaW46IGlzQWRtaW59IDogdXNlcikpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlVXNlck9ySW52aXRlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgIGxldCBkZWxldGVFcnJvcnMgPSBbXVxuICAgICAgaWYgKHVzZXIuaWQpIHtcbiAgICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3VzZXJzLyR7dXNlci5pZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICB9KVxuICAgICAgICBkZWxldGVFcnJvcnMgPSBlcnJvcnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHtlcnJvcnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9pbnZpdGVgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICBkYXRhOiB7ZW1haWw6IHVzZXIuZW1haWx9XG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZUVycm9ycyA9IGVycm9yc1xuICAgICAgfVxuICAgICAgaWYgKGRlbGV0ZUVycm9ycykge1xuICAgICAgICBzZWdtZW50VHJhY2soJ0ZhaWxlZCBUbyBSZW1vdmUgVXNlcicsIHtcbiAgICAgICAgICBvcmdJZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBpbnZpdGVlVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgaW52aXRlZUVtYWlsOiBlbWFpbCxcbiAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICB9KVxuICAgICAgICBkZWxldGVFcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHN1Y2Nlc3NNc2dcbiAgICAgICAgY29uc3QgbmV3VXNlcnMgPSB1c2Vyc0xpc3QuZmlsdGVyKChpKSA9PiBpLmVtYWlsICE9PSB1c2VyLmVtYWlsKVxuICAgICAgICBzZXRVc2VyTGlzdChuZXdVc2VycylcbiAgICAgICAgaWYgKHVzZXIuaWQpIHtcbiAgICAgICAgICBzZWdtZW50VHJhY2soJ1VzZXIgUmVtb3ZlZCcsIHtcbiAgICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBpbnZpdGVlVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICBpbnZpdGVlRW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHN1Y2Nlc3NNc2cgPSBgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgJHt1c2VyLm5hbWV9IWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWdtZW50VHJhY2soJ0ludml0ZSBSZW1vdmVkJywge1xuICAgICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGludml0ZWVVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGludml0ZWVFbWFpbDogZW1haWwsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXIudXNlcl9pZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc3VjY2Vzc01zZyA9ICdTdWNjZXNzZnVsbHkgcmVtb3ZlZCB1c2VyIGludml0ZSEnXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihzdWNjZXNzTXNnKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1c2Vyc0xpc3RdXG4gIClcblxuICBjb25zdCBoYW5kbGVVc2Vyc0ludml0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB2YWx1ZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKFxuICAgICAgICBgL29yZ3MvJHt1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkfS9pbnZpdGVgLFxuICAgICAgICBwYXlsb2FkXG4gICAgICApXG4gICAgICBjb25zdCB7ZXJyb3JzfSA9IHJlc1xuXG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKChlKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGUubWVzc2FnZSkpKVxuICAgICAgICBzZWdtZW50VHJhY2soJ0ludml0ZSBGYWlsZWQnLCB7XG4gICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgaW52aXRlZVVzZXJJZDogdXNlcklkLFxuICAgICAgICAgIGludml0ZWVFbWFpbDogZW1haWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVtYWlscyA9IHZhbHVlcy5lbWFpbHMuc3BsaXQoJywnKS5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKVxuICAgICAgICBjb25zdCBuZXdJbnZpdGVzID0gZW1haWxzLm1hcCgoZW1haWwpID0+ICh7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcGVuZGluZzogdHJ1ZSxcbiAgICAgICAgICBpc19hZG1pbjogZmFsc2UsXG4gICAgICAgICAgY3VycmVudF9vcmdhbml6YXRpb25faWQ6IG9yZ0lkXG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCB1c2VyRW1haWxzID0gbmV3IFNldCh1c2Vyc0xpc3QubWFwKCh1KSA9PiB1LmVtYWlsKSlcbiAgICAgICAgc2V0VXNlckxpc3QodXNlcnNMaXN0LmNvbmNhdChuZXdJbnZpdGVzLmZpbHRlcigodSkgPT4gIXVzZXJFbWFpbHMuaGFzKHUuZW1haWwpKSkpXG4gICAgICAgIHNlZ21lbnRUcmFjaygnSW52aXRlIFN1Y2Nlc3NmdWwnLCB7XG4gICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgaW52aXRlZVVzZXJJZDogdXNlcklkLFxuICAgICAgICAgIGludml0ZWVFbWFpbDogZW1haWwsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLnVzZXJfaWRcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc3VjY2Vzc01zZyA9XG4gICAgICAgICAgdmFsdWVzLmVtYWlscy5sZW5ndGggPiAxID8gJ1VzZXJzIHN1Y2Nlc2Z1bGx5IGludml0ZWQhJyA6ICdVc2VyIHN1Y2Nlc2Z1bGx5IGludml0ZWQhJ1xuICAgICAgICBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKHN1Y2Nlc3NNc2cpKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3VzZXJzTGlzdF1cbiAgKVxuXG4gIHVzZURvY3VtZW50VGl0bGUoJ1VzZXIgTWFuYWdlbWVudCB8IEh1bWFuIExhbWJkYXMnKVxuXG4gIGlmICh1c2Vyc0xvYWRpbmcpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdQYWdlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyN319IClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcnMsIHtcbiAgICAgIHVzZXJzTGlzdDogdXNlcnNMaXN0LFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgcmVzZW5kVXNlckludml0ZTogcmVzZW5kVXNlckludml0ZSxcbiAgICAgIGhhbmRsZVVzZXJzSW52aXRlOiBoYW5kbGVVc2Vyc0ludml0ZSxcbiAgICAgIGNoYW5nZVVzZXJSb2xlOiBjaGFuZ2VVc2VyUm9sZSxcbiAgICAgIGRlbGV0ZVVzZXJPckludml0ZTogZGVsZXRlVXNlck9ySW52aXRlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMwfX1cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFVzZXJzUm9vdClcbiIsImV4cG9ydCBjb25zdCBzZWdtZW50VHJhY2sgPSBhc3luYyAoZXZlbnQsIHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3Qge2FuYWx5dGljc30gPSB3aW5kb3cgfHwgdW5kZWZpbmVkXG4gIGlmICghYW5hbHl0aWNzKSByZXR1cm5cbiAgYW5hbHl0aWNzLnRyYWNrKGV2ZW50LCBwcm9wZXJ0aWVzKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0F2YXRhci50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICcuLi8uLi9jbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgZ2V0Rmlyc3RMZXR0ZXIgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEZpcnN0TGV0dGVyJ1xuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBBdmF0YXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtpbml0aWFscywgY29sb3IsIG9uQ2xpY2ssIHN0eWxlLCB0cmltID0gdHJ1ZX0gPSBwcm9wc1xuXG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGNvbG9yIHx8IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG5cbiAgY29uc3QgQXZhdGFyQmxvY2sgPSBzdHlsZWQuc3Bhbih7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgdGVzdEFsaWduOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6IGAyMHB4YCxcbiAgICB3aWR0aDogYDIwcHhgLFxuICAgIG1pbldpZHRoOiBgMjBweGAsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGZvbnRTaXplOiAxMSxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBtYXJnaW46ICcwcHggMnB4J1xuICB9KVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXJCbG9jaywgeyByZWY6IHJlZiwgb25DbGljazogb25DbGljaywgc3R5bGU6IHN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fVxuICAgICAgLCB0cmltID8gZ2V0Rmlyc3RMZXR0ZXIoaW5pdGlhbHMpIDogaW5pdGlhbHNcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhclxuIiwiY29uc3QgZ2V0Rmlyc3RMZXR0ZXIgPSAoc3RyKSA9PiB7XG4gIGxldCBmaXJzdExldHRlciA9IHN0clxuXG4gIGlmIChzdHIgJiYgc3RyLmxlbmd0aCA+IDEpIHtcbiAgICBmaXJzdExldHRlciA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIGZpcnN0TGV0dGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpcnN0TGV0dGVyXG4iLCJjb25zdCBnZXRJbml0aWFscyA9IChzdHIpID0+IHtcbiAgaWYgKCFzdHIgfHwgc3RyID09PSAnJykgcmV0dXJuXG4gIGNvbnN0IGluaXRpYWxzID0gc3RyLm1hdGNoKC9cXGJcXHcvZykgfHwgW11cbiAgcmV0dXJuICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEluaXRpYWxzXG4iXSwic291cmNlUm9vdCI6IiJ9