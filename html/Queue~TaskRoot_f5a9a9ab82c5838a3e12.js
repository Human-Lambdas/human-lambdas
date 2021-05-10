(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Queue~TaskRoot"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/datepicker-override.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/datepicker-override.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hl-calendar {\n  /* background-color: #6648ee;\n  opacity: 0.15;\n  z-index: 10; */\n  font-family: 'Lambdas';\n  font-weight: 500;\n}\n\n.react-datepicker__day--selected, .react-datepicker__day--selected {\n  font-weight: 600;\n  background-color: #6648ee;\n}\n\n.react-datepicker__day--selected:hover, .react-datepicker__day--selected:hover {\n  background-color: #886df4;\n}\n\n.hl-day:focus {\n  outline: none !important;\n}\n\n.react-datepicker__header {\n  background-color: #f6f8f9;\n}\n\n.react-datepicker__navigation {\n  height: 15px;\n  width: 15px;\n}\n\n.react-datepicker__navigation:focus {\n  outline: none !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.dropping {\n  visibility: hidden;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n  opacity: 0;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.react-resizable-hide > .react-resizable-handle {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-item.react-grid-placeholder {\n  background-color: #6648ee;\n  opacity: 0.15;\n  z-index: 10;\n}\n\n.react-draggable-dragging, .react-draggable.resizing {\n  z-index: 100 !important;\n}\n\n.react-grid-item:hover > .react-resizable-handle {\n  opacity: 1;\n}\n\n.react-grid-item.cssTransforms {\n  transition-property: none;\n}\n.animated .react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/client/components/InputField.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/InputField.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StyledError */ "./src/client/components/StyledError.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/InputField.tsx";





const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "e10b86x70"
})(({
  error,
  disabled
}) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontFamily: styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].SANS_SERIF,
  fontWeight: 400,
  cursor: disabled ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    boxShadow: `0 0 0 3px ${error ? '#ffdacc' : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
    borderColor: error ? styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x71"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x72"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x73"
})({
  fontSize: 12,
  fontWeight: 400,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  marginLeft: 6
});

const InputField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    disabled,
    error,
    isOptional,
    isRequired,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    type = 'text',
    value,
    label,
    style,
    spellCheck
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "Optional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    disabled: Boolean(disabled),
    name: name,
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    ref: ref,
    type: type,
    value: value,
    error: Boolean(error),
    spellCheck: spellCheck,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/client/components/ListFilter.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/ListFilter.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ "./src/client/components/InputField.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListFilter.tsx";




const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1op9xzz0"
})({
  name: "iktmnx",
  styles: "margin:10px 0px;"
});

const ListFilter = ({
  list,
  setList,
  keys
}) => {
  const handleChange = e => {
    const term = e.target.value;
    setList(Object(match_sorter__WEBPACK_IMPORTED_MODULE_2__["matchSorter"])(list, term, {
      keys
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Filter",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListFilter);

/***/ }),

/***/ "./src/client/components/StyledError.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/StyledError.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");



const StyledError = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e19ph0k60"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].ERROR_MAIN,
  width: '100%',
  textAlign: 'left',
  fontSize: '12px',
  lineHeight: '24px',
  marginLeft: 5
});

/* harmony default export */ __webpack_exports__["default"] = (StyledError);

/***/ }),

/***/ "./src/client/components/TextArea.tsx":
/*!********************************************!*\
  !*** ./src/client/components/TextArea.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StyledError */ "./src/client/components/StyledError.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/TextArea.tsx"; // https://github.com/andreypopp/react-textarea-autosize






const StyledTextArea = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
  target: "eegneta0"
})(({
  error,
  disabled,
  readOnly,
  scrollable
}) => ({
  cursor: disabled || readOnly ? 'not-allowed' : 'text',
  backgroundColor: '#fff',
  borderRadius: 4,
  border: `1px solid ${error === 'true' ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_MAIN_GRAY}`,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  display: 'block',
  fontSize: 15,
  overflow: scrollable ? 'auto' : 'hidden',
  outline: 'none',
  padding: '5px 10px',
  resize: 'none',
  width: '100%',
  transition: 'border-color 200ms ease-in',
  ':focus': {
    borderColor: error === 'true' ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta1"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta2"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta3"
})({
  fontSize: 12,
  fontWeight: 400,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  marginLeft: 6
});

const BasicTextArea = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    autoFocus,
    disabled,
    isOptional,
    isRequired,
    minRows,
    maxRows,
    error,
    maxLength,
    label,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    value,
    style,
    cacheMeasurements,
    readOnly,
    positionErrorBelow,
    scrollable
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Optional")), !positionErrorBelow && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea, {
    ref: ref,
    autoFocus: autoFocus,
    disabled: disabled,
    minRows: minRows,
    maxRows: maxRows,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    style: style,
    value: value,
    maxLength: maxLength,
    error: String(Boolean(error)),
    cacheMeasurements: cacheMeasurements,
    readOnly: readOnly,
    scrollable: scrollable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }), positionErrorBelow && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, error));
});
BasicTextArea.defaultProps = {
  positionErrorBelow: true,
  scrollable: false
};
/* harmony default export */ __webpack_exports__["default"] = (BasicTextArea);

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

/***/ "./src/universal/components/AppHeader.tsx":
/*!************************************************!*\
  !*** ./src/universal/components/AppHeader.tsx ***!
  \************************************************/
/*! exports provided: APP_HEADER_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_HEADER_HEIGHT", function() { return APP_HEADER_HEIGHT; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/isEmptyArray */ "./src/universal/utils/isEmptyArray.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/AppHeader.tsx";



const APP_HEADER_HEIGHT = 50;

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1vjj9hv0"
})({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 25px',
  backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
  borderBottom: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY_NEW}`,
  minHeight: APP_HEADER_HEIGHT,
  minWidth: '100%'
});

const FlexItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1vjj9hv1"
})(prop => {
  return {
    flex: '1 1 0',
    textAlign: prop.center ? 'center' : 'inherit'
  };
});

const AppHeader = props => {
  const {
    leftBarItems,
    rightBarItems,
    midBarItems
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, rightBarItems), !Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__["default"])(rightBarItems) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    center: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, midBarItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, leftBarItems));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./src/universal/components/BasicTextArea.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/BasicTextArea.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_StyledError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/StyledError */ "./src/universal/components/StyledError.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/BasicTextArea.tsx"; // https://github.com/andreypopp/react-textarea-autosize





const StyledTextArea = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("textarea", {
  target: "eimzrls0"
})(({
  disabled,
  readOnly,
  error
}) => ({
  cursor: disabled || readOnly ? 'not-allowed' : 'input',
  backgroundColor: '#fff',
  borderRadius: 4,
  border: `1px solid ${error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  display: 'block',
  fontSize: 15,
  overflow: 'hidden',
  outline: 'none',
  padding: '5px 10px',
  resize: 'none',
  width: '100%',
  transition: 'border-color 200ms ease-in',
  ':hover': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_HOVER
  },
  ':active, :focus': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eimzrls1"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eimzrls2"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eimzrls3"
})({
  fontSize: 12,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  marginLeft: 6
});

const BasicTextArea = props => {
  const {
    autoFocus,
    disabled,
    isOptional,
    isRequired,
    minRows,
    error,
    hideErrorMessage,
    maxLength,
    label,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    value,
    style,
    readOnly
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Optional")), error && !hideErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_StyledError__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea, {
    autoFocus: autoFocus,
    disabled: disabled,
    minRows: minRows,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    style: style,
    value: value || "",
    maxLength: maxLength,
    readOnly: readOnly,
    error: error,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicTextArea);

/***/ }),

/***/ "./src/universal/components/BlockComponent.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/components/BlockComponent.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_blocks_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/blocks/Image */ "./src/universal/components/blocks/Image.tsx");
/* harmony import */ var universal_components_blocks_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/blocks/Number */ "./src/universal/components/blocks/Number.tsx");
/* harmony import */ var universal_components_blocks_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/blocks/Text */ "./src/universal/components/blocks/Text.tsx");
/* harmony import */ var universal_components_blocks_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/blocks/Email */ "./src/universal/components/blocks/Email.tsx");
/* harmony import */ var universal_components_blocks_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/blocks/Link */ "./src/universal/components/blocks/Link.tsx");
/* harmony import */ var universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/blocks/MediaBlock */ "./src/universal/components/blocks/MediaBlock.tsx");
/* harmony import */ var universal_components_blocks_Binary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/blocks/Binary */ "./src/universal/components/blocks/Binary.tsx");
/* harmony import */ var universal_components_blocks_Embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/blocks/Embed */ "./src/universal/components/blocks/Embed.tsx");
/* harmony import */ var universal_components_blocks_PdfReader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/blocks/PdfReader */ "./src/universal/components/blocks/PdfReader.tsx");
/* harmony import */ var universal_components_blocks_SingleSelection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/blocks/SingleSelection */ "./src/universal/components/blocks/SingleSelection.tsx");
/* harmony import */ var universal_components_blocks_NamedEntityRecognition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/blocks/NamedEntityRecognition */ "./src/universal/components/blocks/NamedEntityRecognition.tsx");
/* harmony import */ var universal_components_blocks_MultipleSelection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/components/blocks/MultipleSelection */ "./src/universal/components/blocks/MultipleSelection.tsx");
/* harmony import */ var universal_components_blocks_FormSequence__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/components/blocks/FormSequence */ "./src/universal/components/blocks/FormSequence.tsx");
/* harmony import */ var universal_components_blocks_RichTextEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/blocks/RichTextEditor */ "./src/universal/components/blocks/RichTextEditor.tsx");
/* harmony import */ var universal_components_blocks_BoundingBoxes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! universal/components/blocks/BoundingBoxes */ "./src/universal/components/blocks/BoundingBoxes.tsx");
/* harmony import */ var universal_components_blocks_TextSequence__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! universal/components/blocks/TextSequence */ "./src/universal/components/blocks/TextSequence.tsx");
/* harmony import */ var universal_components_blocks_Date__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! universal/components/blocks/Date */ "./src/universal/components/blocks/Date.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/BlockComponent.tsx";

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




















const BlockComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const {
    isAudits,
    setFieldValue,
    isEditing,
    index,
    block,
    onDelete,
    handleChange,
    handleBlur,
    onEdit,
    errors
  } = props || {};
  let renderCmp;

  switch (block.type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].TEXT:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].EMAIL:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Email__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        error: _optionalChain([errors, 'optionalAccess', _ => _.email]),
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        handleBlur: handleBlur,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].NUMBER:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Number__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].LINK:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        error: _optionalChain([errors, 'optionalAccess', _2 => _2.link]),
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        handleBlur: handleBlur,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].IMAGE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].AUDIO:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].VIDEO:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].BINARY:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Binary__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_NamedEntityRecognition__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].BOUNDING_BOXES:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_BoundingBoxes__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        index: index,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].EMBED:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Embed__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].PDF:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_PdfReader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].SINGLE_SELECTION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_SingleSelection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].MULTIPLE_SELECTION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MultipleSelection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].FORM_SEQUENCE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_FormSequence__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].RICH_TEXT:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_RichTextEditor__WEBPACK_IMPORTED_MODULE_15__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].TEXT_SEQUENCE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_TextSequence__WEBPACK_IMPORTED_MODULE_17__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Date__WEBPACK_IMPORTED_MODULE_18__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      });
      break;

    default:
      renderCmp = null;
  }

  return renderCmp;
});
/* harmony default export */ __webpack_exports__["default"] = (BlockComponent);

/***/ }),

/***/ "./src/universal/components/BlockHeader.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/BlockHeader.tsx ***!
  \**************************************************/
/*! exports provided: Container, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/IconButton */ "./src/universal/components/IconButton.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/BlockHeader.tsx";

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






const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ec495x90"
})({
  name: "1tvufdm",
  styles: "display:grid;grid-template-columns:25px 25px;visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.250s linear;position:absolute;right:-5px;background-color:#fff;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "ec495x91"
})({
  textAlign: 'center',
  display: 'block',
  fontSize: 18,
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN
});

const TypeIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(StyledIcon, {
  target: "ec495x92"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_GRAY_MID,
  cursor: 'default'
});

const BlockHeader = props => {
  const {
    onDelete,
    onEdit,
    isEditing,
    blockType
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "button",
    onClick: onEdit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "button",
    onClick: onDelete,
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
  }, "delete"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _optionalChain([universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCKS"], 'access', _ => _.find, 'call', _2 => _2(b => b.type === blockType), 'optionalAccess', _3 => _3.icon])));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockHeader);

/***/ }),

/***/ "./src/universal/components/BlockWrapper.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/BlockWrapper.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const BlockWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e91a4cv0"
})(({
  type,
  index
}) => ({
  width: '100%',
  backgroundColor: '#fff !important',
  borderRadius: 4,
  border: '1px solid #e7e9ec',
  boxShadow: 'rgba(0, 0, 0, 0.025) 0px 2px 4px',
  zIndex: type === 'date' ? 10 - index : 1
}));

/* harmony default export */ __webpack_exports__["default"] = (BlockWrapper);

/***/ }),

/***/ "./src/universal/components/DatePicker.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/DatePicker.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var _blocks_BodyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var universal_styles_css_datepicker_override_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/styles/css/datepicker-override.css */ "./src/universal/styles/css/datepicker-override.css");
/* harmony import */ var universal_styles_css_datepicker_override_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_datepicker_override_css__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/DatePicker.tsx";










const StyledDatePicker = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
  target: "e12mjqt80"
})({
  name: "65ftw",
  styles: "height:100%;font-family:inherit !important;"
});

const DateInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
    hideErrorMessage: true,
    ref: ref
  }, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }));
});
const CustomDatePicker = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    name,
    placeholder,
    readOnly,
    value,
    isTaskMenu,
    error
  } = props;
  const [,, {
    setValue
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useField"])(name);

  const containerStyle = _objectSpread({
    width: '100%'
  }, isTaskMenu && {
    padding: '0px'
  });

  const handleChangeRaw = event => {
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/;

    if (!validChars.test(event.target.value)) {
      event.preventDefault();
    }

    if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isValid"])(new Date(value))) {
      setValue(value);
    }
  };

  const handleChange = date => {
    if (date && Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isValid"])(date)) {
      setValue(date);
    } else {
      setValue('');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blocks_BodyContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: containerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledDatePicker, {
    name: name,
    autoComplete: "off",
    customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DateInput, {
      error: error,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }),
    selected: value && new Date(value),
    onChange: handleChange,
    calendarClassName: "hl-calendar",
    dayClassName: () => 'hl-day',
    shouldCloseOnSelect: false,
    onChangeRaw: handleChangeRaw,
    placeholderText: Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_7__["getDisplayFormat"])(placeholder),
    dateFormat: "dd/MM/yyyy",
    disabled: readOnly,
    disabledKeyboardNavigation: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (CustomDatePicker);

/***/ }),

/***/ "./src/universal/components/IconButton.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/IconButton.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/IconButton.tsx";




const Container = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "ek186l90"
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
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
});

const IconButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    onClick,
    type,
    children,
    style
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    onClick: onClick,
    type: type,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/universal/components/RGL.tsx":
/*!******************************************!*\
  !*** ./src/universal/components/RGL.tsx ***!
  \******************************************/
/*! exports provided: RGL_COLUMNS, RGL_ROWS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGL_COLUMNS", function() { return RGL_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGL_ROWS", function() { return RGL_ROWS; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/css/react-grid-layout.css */ "./src/universal/styles/css/react-grid-layout.css");
/* harmony import */ var universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/css/react-resizable.css */ "./src/universal/styles/css/react-resizable.css");
/* harmony import */ var universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/css/rgl-overide.css */ "./src/universal/styles/css/rgl-overide.css");
/* harmony import */ var universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/RGL.tsx";





const RGLWidthProvider = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["Responsive"]);
const RGL_COLUMNS = 20;
const RGL_ROWS = 40;

const RGLContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(RGLWidthProvider, {
  target: "epfjvic0"
})({
  name: "1xs5ypw",
  styles: "width:100%;min-height:calc(100vh - 50px);background-color:#f8f8fa;"
});

const RGLWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "epfjvic1"
})({
  name: "kjhdb2",
  styles: "height:100%;width:100%;overflow:scroll;"
});

const RGL = props => {
  const {
    children,
    isDraggable,
    isDroppable,
    isResizable,
    onDragStart,
    onDragStop,
    onDrop,
    onLayoutChange,
    layouts,
    droppingItem
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RGLWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RGLContainer, _objectSpread(_objectSpread({}, props), {}, {
    autoSize: true,
    breakpoints: {
      all: RGL_COLUMNS
    },
    cols: {
      all: RGL_COLUMNS
    },
    compactType: 'vertical',
    isDraggable: isDraggable,
    isDroppable: isDroppable,
    isBounded: true,
    droppingItem: droppingItem,
    isResizable: isResizable,
    layouts: {
      all: layouts
    },
    measureBeforeMount: true,
    useCSSTransforms: true,
    preventCollision: false,
    containerPadding: [10, 10],
    margin: [10, 10],
    onDragStart: onDragStart,
    onDragStop: onDragStop,
    onDrop: onDrop,
    rowHeight: RGL_ROWS,
    onLayoutChange: onLayoutChange,
    draggableHandle: ".drag-handle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (RGL);

/***/ }),

/***/ "./src/universal/components/TaggableListWrapper.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/TaggableListWrapper.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TaggableListWrapper.tsx";






const ListWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox0"
})({
  name: "2apgry",
  styles: "width:195px;min-width:195px;user-select:none;"
});

const List = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox1"
})({
  name: "u70tf2",
  styles: "cursor:auto;"
});

const ListLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox2"
})({
  name: "1ut2p5e",
  styles: "font-weight:400;margin-top:20px;"
});

const CategoryButton = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox3"
})(({
  active
}) => ({
  cursor: 'pointer',
  background: 'white',
  clear: 'both',
  width: '100%',
  marginBottom: '5px',
  padding: '10px 10px',
  textAlign: 'left',
  border: active ? '1px solid #6648EE !important' : '1px solid #E8ECEE',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  ':hover': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.024)'
  }
}));

const EntityText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox4"
})({
  name: "qv8mh2",
  styles: "background:white;clear:both;width:100%;marginbottom:5px;padding:10px 10px;position:relative;textalign:left;border:1px solid white;boxshadow:0px 2px 4px rgba(0,0,0,0.024);borderradius:4px;display:flex;flexdirection:row;alignitems:center;cursor:default;&::selection{background:transparent;}&:hover{border:1px solid #e8ecee !important;border-radius:4px;i{display:block !important;opacity:0.6 !important;}}i{cursor:pointer;}"
});

const ColorArtifact = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox5"
})(({
  color
}) => ({
  background: color,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  marginRight: '10px',
  border: `1px solid ${Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.3, color)}`
}));

const TaggableListWrapper = props => {
  const {
    options,
    text,
    selectedCategory,
    onSelect,
    disabled,
    objects,
    onHover,
    onClick
  } = props;

  const getOptionIndex = id => {
    let index;
    options.map((option, i) => {
      if (option.id === id) {
        index = i;
      }
    });
    return index;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryButton, {
    key: optionIndex,
    onClick: () => {
      if (!disabled) {
        onSelect({
          tag: option.id,
          color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(optionIndex)
        });
      }
    },
    type: "button",
    active: !disabled && selectedCategory.tag === option.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(optionIndex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }), option.name))), Array.isArray(text) && text.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, "Entities"), text.map((item, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntityText, {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
      key: key,
      color: item.color,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    }), item.text);
  })), Array.isArray(objects) && objects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Objects"), objects.map((item, key) => {
    const name = item.category.replace('_', ' ');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntityText, {
      key: key,
      onMouseEnter: () => {
        onHover(key);
      },
      onMouseLeave: () => {
        onHover(null);
      },
      onClick: e => {
        e.stopPropagation();
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
      key: key,
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(getOptionIndex(item.category)),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      }
    }), name.charAt(0).toUpperCase() + name.slice(1), !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        fontSize: 18,
        position: 'absolute',
        right: '5px',
        top: '11px',
        display: 'none',
        color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN
      },
      onClick: () => {
        onClick(key);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      }
    }, "close"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaggableListWrapper);

/***/ }),

/***/ "./src/universal/components/TaskCheckbox.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/TaskCheckbox.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TaskCheckbox.tsx";



const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
  target: "eik4ec80"
})(({
  disabled
}) => ({
  background: '#fff',
  border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  borderRadius: 4,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 500,
  padding: '10px 10px 10px 45px',
  position: 'relative',
  userSelect: 'none',
  transition: '.3s ease all',
  width: '100%',
  '&::before': {
    background: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
    borderRadius: 2,
    border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
    content: '""',
    height: '20px',
    width: '20px',
    left: '10px',
    position: 'absolute',
    top: 'calc(50% - 10px)',
    transition: '.3s ease background-color'
  },
  ':hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
  },
  minHeight: '41.25px'
}));

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "eik4ec81"
})("position:absolute;visibility:hidden;&:checked + ", Label, "{border-color:", styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";}&:checked + ", Label, ":before{background-color:", styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIyLjAyOTY4IC00MC4wOTAzIDI2IDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT48cGF0aCBkPSJNMjcuOTc0MywtMzYuMTI3MmMwLDAuNDQ2NDI4IC0wLjE1NjI1LDAuODI1ODkzIC0wLjQ2ODc1LDEuMTM4MzlsLTEyLjEyMDUsMTIuMTIwNWwtMi4yNzY3OSwyLjI3Njc5Yy0wLjMxMjUsMC4zMTI1IC0wLjY5MTk2NCwwLjQ2ODc1IC0xLjEzODM5LDAuNDY4NzVjLTAuNDQ2NDI4LDAgLTAuODI1ODkzLC0wLjE1NjI1IC0xLjEzODM5LC0wLjQ2ODc1bC0yLjI3Njc5LC0yLjI3Njc5bC02LjA2MDI3LC02LjA2MDI3Yy0wLjMxMjUsLTAuMzEyNSAtMC40Njg3NSwtMC42OTE5NjUgLTAuNDY4NzUsLTEuMTM4MzljMCwtMC40NDY0MjkgMC4xNTYyNSwtMC44MjU4OTMgMC40Njg3NSwtMS4xMzgzOWwyLjI3Njc5LC0yLjI3Njc5YzAuMzEyNSwtMC4zMTI1IDAuNjkxOTY1LC0wLjQ2ODc1IDEuMTM4MzksLTAuNDY4NzVjMC40NDY0MjksMCAwLjgyNTg5MywwLjE1NjI1IDEuMTM4MzksMC40Njg3NWw0LjkyMTg4LDQuOTM4NjJsMTAuOTgyMSwtMTAuOTk4OWMwLjMxMjUsLTAuMzEyNSAwLjY5MTk2NCwtMC40Njg3NSAxLjEzODM5LC0wLjQ2ODc1YzAuNDQ2NDI4LDAgMC44MjU4OTMsMC4xNTYyNSAxLjEzODM5LDAuNDY4NzVsMi4yNzY3OCwyLjI3Njc5YzAuMzEyNSwwLjMxMjUgMC40Njg3NSwwLjY5MTk2NCAwLjQ2ODc1LDEuMTM4MzlaIiB0cmFuc2Zvcm09InNjYWxlKDEuMDAxOTgpIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-position:center;background-size:9px;}");

const Checkbox = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    autoFocus,
    disabled,
    id,
    checked,
    name,
    onChange,
    label,
    value
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoFocus: autoFocus,
    disabled: disabled,
    checked: checked,
    id: id,
    name: name,
    type: "checkbox",
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: id,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, label)));
});
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/universal/components/TaskRadio.tsx":
/*!************************************************!*\
  !*** ./src/universal/components/TaskRadio.tsx ***!
  \************************************************/
/*! exports provided: Input, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TaskRadio.tsx";



const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
  target: "e1ivm8dm0"
})(({
  disabled,
  noShadow
}) => _objectSpread(_objectSpread({}, !noShadow && {
  background: '#fff',
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  ':hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
  }
}), {}, {
  borderRadius: 4,
  cursor: disabled ? 'not-allowed' : 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: noShadow ? 400 : 500,
  padding: '10px 35px 10px 35px',
  position: 'relative',
  userSelect: 'none',
  transition: '.3s ease all',
  '&::before': {
    background: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
    borderRadius: '50%',
    border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
    content: '""',
    height: '20px',
    width: '20px',
    left: noShadow ? '0px' : '10px',
    position: 'absolute',
    top: 'calc(50% - 10px)',
    transition: '.3s ease background-color'
  },
  minHeight: '41.25px'
}));

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "e1ivm8dm1"
})("position:absolute;visibility:hidden;&:checked + ", Label, "{border-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";}&:checked + ", Label, ":before{background-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIyLjAyOTY4IC00MC4wOTAzIDI2IDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT48cGF0aCBkPSJNMjcuOTc0MywtMzYuMTI3MmMwLDAuNDQ2NDI4IC0wLjE1NjI1LDAuODI1ODkzIC0wLjQ2ODc1LDEuMTM4MzlsLTEyLjEyMDUsMTIuMTIwNWwtMi4yNzY3OSwyLjI3Njc5Yy0wLjMxMjUsMC4zMTI1IC0wLjY5MTk2NCwwLjQ2ODc1IC0xLjEzODM5LDAuNDY4NzVjLTAuNDQ2NDI4LDAgLTAuODI1ODkzLC0wLjE1NjI1IC0xLjEzODM5LC0wLjQ2ODc1bC0yLjI3Njc5LC0yLjI3Njc5bC02LjA2MDI3LC02LjA2MDI3Yy0wLjMxMjUsLTAuMzEyNSAtMC40Njg3NSwtMC42OTE5NjUgLTAuNDY4NzUsLTEuMTM4MzljMCwtMC40NDY0MjkgMC4xNTYyNSwtMC44MjU4OTMgMC40Njg3NSwtMS4xMzgzOWwyLjI3Njc5LC0yLjI3Njc5YzAuMzEyNSwtMC4zMTI1IDAuNjkxOTY1LC0wLjQ2ODc1IDEuMTM4MzksLTAuNDY4NzVjMC40NDY0MjksMCAwLjgyNTg5MywwLjE1NjI1IDEuMTM4MzksMC40Njg3NWw0LjkyMTg4LDQuOTM4NjJsMTAuOTgyMSwtMTAuOTk4OWMwLjMxMjUsLTAuMzEyNSAwLjY5MTk2NCwtMC40Njg3NSAxLjEzODM5LC0wLjQ2ODc1YzAuNDQ2NDI4LDAgMC44MjU4OTMsMC4xNTYyNSAxLjEzODM5LDAuNDY4NzVsMi4yNzY3OCwyLjI3Njc5YzAuMzEyNSwwLjMxMjUgMC40Njg3NSwwLjY5MTk2NCAwLjQ2ODc1LDEuMTM4MzlaIiB0cmFuc2Zvcm09InNjYWxlKDEuMDAxOTgpIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-position:center;background-size:9px;}");

const Radio = props => {
  const {
    autoFocus,
    disabled,
    id,
    checked,
    name,
    onChange,
    label,
    value,
    noShadow
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoFocus: autoFocus,
    checked: !!checked,
    id: id,
    name: name,
    type: "radio",
    value: value,
    onChange: onChange,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: id,
    disabled: disabled,
    noShadow: noShadow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, label)));
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./src/universal/components/TextEditor.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/TextEditor.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rte */ "./node_modules/react-rte/dist/react-rte.js");
/* harmony import */ var react_rte__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rte__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_BodyContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TextEditor.tsx";





const StyledTextEditor = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_rte__WEBPACK_IMPORTED_MODULE_2___default.a, {
  target: "e11v4bvf0"
})("height:100%;font-family:inherit !important;& .wysiwyg-btn{opacity:0.7;}", ({
  isTaskMenu,
  readOnly
}) => !isTaskMenu && readOnly ? `
  border: none !important;
` : ``, " ", ({
  isTaskMenu,
  error
}) => isTaskMenu ? `
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid ${error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY};
    outline: none;
    font-size: 15px !important;
    & .text-editor-body {
      height: 60px;
    }
    & .text-editor-tooolbar {
      font-size: 10px !important;
      margin: 0 7px;
    }
    & :active, :focus, :hover {
      border-color: ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN};
    }
    & .DraftEditor-editorContainer {
      border: none !important;
    }
    & .public-DraftEditorPlaceholder-root {
      height: 100%;
      overflow: auto;
    }
  ` : ``);

const toolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS: [{
    label: 'Bold',
    style: 'BOLD',
    className: 'wysiwyg-btn'
  }, {
    label: 'Italic',
    style: 'ITALIC',
    className: 'wysiwyg-btn'
  }, {
    label: 'Underline',
    style: 'UNDERLINE',
    className: 'wysiwyg-btn'
  }],
  BLOCK_TYPE_DROPDOWN: [{
    label: 'Normal',
    style: 'unstyled'
  }, {
    label: 'Heading Large',
    style: 'header-one'
  }, {
    label: 'Heading Medium',
    style: 'header-two'
  }, {
    label: 'Heading Small',
    style: 'header-three'
  }],
  BLOCK_TYPE_BUTTONS: [{
    label: 'UL',
    style: 'unordered-list-item',
    className: 'wysiwyg-btn'
  }, {
    label: 'OL',
    style: 'ordered-list-item',
    className: 'wysiwyg-btn'
  }]
};
const editorText = react_rte__WEBPACK_IMPORTED_MODULE_2___default.a.createValueFromString('', 'html');
const TextEditor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    name,
    placeholder,
    value,
    format,
    readOnly,
    setFieldValue,
    isTaskMenu
  } = props;
  const renderValue = value;

  const editorValueFromProps = value => {
    if (format && value) {
      return [value, format];
    }

    return ['', 'html'];
  };

  const [editorValue, setEditorValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(editorText.setContentFromString(...editorValueFromProps(renderValue)));

  const handleEditorChange = value => {
    setEditorValue(value);
  };

  const didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (didMountRef.current) {
      setEditorValue(editorText.setContentFromString(...editorValueFromProps(renderValue)));
    } else {
      didMountRef.current = true;
    }
  }, [renderValue, editorText]);

  const containerStyle = _objectSpread({
    width: '100%'
  }, isTaskMenu && {
    padding: '0px'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blocks_BodyContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: containerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextEditor, {
    className: "text-editor",
    isTaskMenu: isTaskMenu,
    toolbarConfig: toolbarConfig,
    toolbarClassName: "text-editor-tooolbar",
    editorClassName: "text-editor-body",
    name: name,
    value: editorValue,
    readOnly: readOnly,
    placeholder: placeholder,
    onChange: handleEditorChange,
    onBlur: () => {
      setFieldValue(name, editorValue.toString(format));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ }),

/***/ "./src/universal/components/TextSequence.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/TextSequence.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getItemStyle */ "./src/universal/utils/getItemStyle.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TextSequence.tsx";

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











const portal = document.createElement('div');

if (!document.body) {
  throw new Error('body not ready for portal creation!');
}

document.body.appendChild(portal);

const IconButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
  target: "e14q0dhs0"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].PRIMARY_MAIN
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs1"
})({
  name: "139y8lg",
  styles: "display:grid;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

const ContentWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldWrapper, {
  target: "e14q0dhs2"
})("grid-template-columns:1fr;", ({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && !orderingDisabled && !deleteDisabled ? `
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    &.focused {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
    &:hover {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
` : ``, " ", ({
  isEditing
}) => isEditing ? `
  &.focused {
    grid-template-columns: 1fr auto;
  }
  &:hover {
    grid-template-columns: 1fr auto;
  }
` : ``, " ", ({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && orderingDisabled && !deleteDisabled ? `
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
  ` : ``, " ", ({
  isTask,
  deleteDisabled,
  orderingDisabled
}) => isTask && deleteDisabled && !orderingDisabled ? `
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
` : ``, " ", ({
  isAudits
}) => isAudits ? `
    grid-template-columns: 1fr;
  ` : ``);

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs3"
})({
  name: "1hb0vzk",
  styles: "padding:5px 0;display:flex;flex-direction:column;"
});

const InputWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs4"
})(({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && !orderingDisabled && !deleteDisabled ? `
      margin: 0px;
      ` : ``, " ", ({
  isTask,
  deleteDisabled,
  orderingDisabled
}) => isTask && deleteDisabled && orderingDisabled ? `
      margin: 0px;
      ` : ``, " ", ({
  isEditing,
  deleteDisabled
}) => isEditing && !deleteDisabled ? `
      margin-right: 25px;
      ${ContentWrapper}:hover & {
        margin-right: 10px;
      }
      &.focused {
        margin-right: 10px;
      }
      ` : ``);

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
  target: "e14q0dhs5"
})(({
  isTask,
  orderingDisabled
}) => isTask && !orderingDisabled ? `
    visibility: hidden;
    &.focused {
      visibility: visible;
    }
    ${ContentWrapper}:hover & {
      visibility: visible;
    }
  ` : ``, " ", ({
  isTask,
  orderingDisabled
}) => isTask && orderingDisabled ? `
    display: none;
  ` : ``, " ", ({
  isEditing
}) => isEditing ? `
      display: none;
      &.focused {
        display: block;
      }

      ${ContentWrapper}:hover & {
        display: block;
      }
    ` : ``);

const BlockInput = ({
  provided,
  snapshot,
  seqIdx,
  data,
  index,
  type,
  setFieldValue,
  targetName,
  placeholder,
  isAudits,
  arrayHelpers,
  isEditing,
  settings
}) => {
  const setFocusStyles = (elements, action) => {
    elements.forEach(id => {
      const element = document.getElementById(id);

      _optionalChain([element, 'optionalAccess', _2 => _2.classList, 'access', _3 => _3[action], 'call', _4 => _4('focused')]);
    });
  };

  const isTask = !isEditing && !isAudits;
  const showDelete = isAudits ? false : !settings.deleteDisabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, _objectSpread(_objectSpread({}, provided.draggableProps), {}, {
    ref: provided.innerRef,
    style: Object(universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_10__["default"])(snapshot.isDragging, provided.draggableProps.style),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }), data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    id: `content-wrapper-${seqIdx}`,
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    orderingDisabled: settings.orderingDisabled,
    deleteDisabled: settings.deleteDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, isTask && !settings.orderingDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    id: `drag-icon-${seqIdx}`,
    orderingDisabled: settings.orderingDisabled,
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].TEXT_MAIN
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }), "drag_indicator") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
    id: `input-wrapper-${seqIdx}`,
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    orderingDisabled: settings.orderingDisabled,
    deleteDisabled: settings.deleteDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: `data[${index}][${type}].value[${seqIdx}]`,
    cacheMeasurements: true,
    type: "text",
    onFocus: () => setFocusStyles([`content-wrapper-${seqIdx}`, `drag-icon-${seqIdx}`, `close-icon-${seqIdx}`, `input-wrapper-${seqIdx}`], 'add'),
    onBlur: () => setFocusStyles([`content-wrapper-${seqIdx}`, `drag-icon-${seqIdx}`, `close-icon-${seqIdx}`, `input-wrapper-${seqIdx}`], 'remove'),
    onKeyDown: e => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    },
    onChange: e => {
      const {
        value
      } = e.target;
      setFieldValue(`${targetName}[${seqIdx}]`, value);
    },
    value: data[seqIdx],
    placeholder: _optionalChain([placeholder, 'optionalAccess', _5 => _5[seqIdx]]) || 'Text',
    readOnly: isAudits,
    disabled: settings.editDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    }
  })), showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    type: "button",
    disabled: isAudits,
    onClick: () => arrayHelpers.remove(seqIdx),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    isAudits: isAudits,
    isEditing: isEditing,
    deleteDisabled: settings.deleteDisabled,
    id: `close-icon-${seqIdx}`,
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].TEXT_MAIN
    },
    isTask: isTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    }
  }, "close"))));
};

const TextSequence = props => {
  const {
    name,
    data,
    index,
    isEditing,
    type,
    isAudits,
    targetName,
    setFieldValue,
    placeholder,
    settings
  } = props;
  const onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(result => {
    const {
      destination,
      source,
      draggableId
    } = result;

    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const changedItem = data[draggableId];
    const newList = data;
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, changedItem);
    setFieldValue(`data[${index}][${type}].value`, newList);
  }, [data, index]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
    name: name,
    render: arrayHelpers => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"], {
        onDragEnd: onDragEnd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Droppable"], {
        droppableId: "dropable-list",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, provided => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
        ref: provided.innerRef,
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, Array.isArray(data) && data.map((_, seqIdx) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: seqIdx,
          draggableId: String(seqIdx),
          isDragDisabled: isEditing || isAudits || settings.orderingDisabled,
          index: seqIdx,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          }
        }, (provided, snapshot) => {
          const usePortal = snapshot.isDragging;
          const child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockInput, {
            provided: provided,
            snapshot: snapshot,
            seqIdx: seqIdx,
            data: data,
            index: index,
            type: type,
            setFieldValue: setFieldValue,
            targetName: targetName,
            placeholder: placeholder,
            isAudits: isAudits,
            arrayHelpers: arrayHelpers,
            isEditing: isEditing,
            settings: settings,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            }
          });

          if (!usePortal) {
            return child;
          }

          return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(child, portal);
        });
      })), provided.placeholder, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "button",
        disabled: isAudits || settings.editDisabled,
        onClick: () => {
          arrayHelpers.push('');
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, "Add Item")))));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  });
};

TextSequence.defaultProps = {
  settings: {
    deleteDisabled: false,
    editDisabled: false,
    orderingDisabled: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TextSequence);

/***/ }),

/***/ "./src/universal/components/bbox-annotator/BBoxAnnotator.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/components/bbox-annotator/BBoxAnnotator.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BBoxSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BBoxSelector */ "./src/universal/components/bbox-annotator/BBoxSelector.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/bbox-annotator/BBoxAnnotator.tsx";

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






const BBoxAnnotator = ({
  url,
  borderWidth = 2,
  selectedLabel,
  onChange,
  objects,
  disabled,
  highlightIndex
}) => {
  const [pointer, setPointer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [entries, setEntries] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(objects);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onChange(entries.map(entry => ({
      w: +parseFloat(entry.w).toFixed(2),
      h: +parseFloat(entry.h).toFixed(2),
      y: +parseFloat(entry.y).toFixed(2),
      x: +parseFloat(entry.x).toFixed(2),
      category: entry.category,
      color: entry.color
    })));
  }, [entries]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Array.isArray(objects) && Array.isArray(entries) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(objects.sort(), entries.sort())) {
      setEntries(objects);
    }
  }, [objects]);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('free');
  const [imageFrameStyle, setImageFrameStyle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const bBoxImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const imageElement = new Image();
    imageElement.src = url;

    imageElement.onload = () => {
      const width = imageElement.width;
      const height = imageElement.height;
      setImageFrameStyle({
        backgroundImageSrc: imageElement.src,
        width: width,
        height: height
      });
    };
  }, [bBoxImageRef, url]);

  const crop = (pageX, pageY) => {
    const x = bBoxImageRef.current && imageFrameStyle.width ? Math.min(Math.max(Math.round(pageX - bBoxImageRef.current.getBoundingClientRect().x), 0), _optionalChain([bBoxImageRef, 'access', _2 => _2.current, 'optionalAccess', _3 => _3.offsetWidth])) / _optionalChain([bBoxImageRef, 'access', _4 => _4.current, 'optionalAccess', _5 => _5.offsetWidth]) * 100 : 0;
    const y = bBoxImageRef.current && imageFrameStyle.height ? Math.min(Math.max(Math.round(pageY - bBoxImageRef.current.getBoundingClientRect().y), 0), _optionalChain([bBoxImageRef, 'access', _6 => _6.current, 'optionalAccess', _7 => _7.offsetHeight])) / _optionalChain([bBoxImageRef, 'access', _8 => _8.current, 'optionalAccess', _9 => _9.offsetHeight]) * 100 : 0;
    return {
      x,
      y
    };
  };

  const updateRectangle = (pageX, pageY) => {
    setPointer(crop(pageX, pageY));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!disabled) {
      const mouseMoveHandler = e => {
        e.preventDefault();

        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY);
        }
      };

      _optionalChain([bBoxImageRef, 'access', _10 => _10.current, 'optionalAccess', _11 => _11.addEventListener, 'call', _12 => _12('mousemove', mouseMoveHandler)]);

      return () => _optionalChain([bBoxImageRef, 'access', _13 => _13.current, 'optionalAccess', _14 => _14.removeEventListener, 'call', _15 => _15('mousemove', mouseMoveHandler)]);
    }
  }, [status]);

  const mouseDownHandler = e => {
    e.stopPropagation();

    if (e.button !== 2 && !disabled) {
      setOffset(crop(e.pageX, e.pageY));
      setPointer(crop(e.pageX, e.pageY));
      setStatus('hold');
    }
  };

  const mouseMoveHandler = e => {
    e.stopPropagation();
    const currentPointer = crop(e.pageX, e.pageY);
    setPointer(currentPointer);

    const hasMoved = currentPointer.x !== _optionalChain([offset, 'optionalAccess', _16 => _16.x]) && currentPointer.y !== _optionalChain([offset, 'optionalAccess', _17 => _17.y]);

    if (status === 'hold' && hasMoved) {
      setStatus('moved');
    }
  };

  const rectangle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const x1 = offset && pointer ? Math.min(offset.x, pointer.x) : 0;
    const x2 = offset && pointer ? Math.max(offset.x, pointer.x) : 0;
    const y1 = offset && pointer ? Math.min(offset.y, pointer.y) : 0;
    const y2 = offset && pointer ? Math.max(offset.y, pointer.y) : 0;
    return {
      x: x1,
      y: y1,
      w: x2 - x1,
      h: y2 - y1
    };
  }, [pointer, offset]);
  const rect = rectangle();
  const boxRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!disabled) {
      const mouseUpHandler = e => {
        e.preventDefault();
        e.stopPropagation();

        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY);
          setEntries([...entries, _objectSpread(_objectSpread({}, rect), {}, {
            category: selectedLabel.tag,
            color: selectedLabel.color
          })]);
        }

        setStatus('free');
      };

      _optionalChain([boxRef, 'optionalAccess', _18 => _18.current, 'optionalAccess', _19 => _19.addEventListener, 'call', _20 => _20('mouseup', mouseUpHandler)]);

      return () => _optionalChain([boxRef, 'optionalAccess', _21 => _21.current, 'optionalAccess', _22 => _22.removeEventListener, 'call', _23 => _23('mouseup', mouseUpHandler)]);
    }
  }, [boxRef, status, rect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    onMouseDownCapture: mouseDownHandler,
    onMouseMoveCapture: mouseMoveHandler,
    draggable: false,
    ref: boxRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      position: 'relative',
      float: `left`,
      cursor: !disabled ? 'crosshair' : 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
    draggable: false,
    style: {
      maxWidth: `100%`,
      maxHeight: `100%`,
      float: `left`
    },
    ref: bBoxImageRef,
    src: imageFrameStyle.backgroundImageSrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }), status === 'moved' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BBoxSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rectangle: rect,
    color: selectedLabel.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }) : null, entries.map((entry, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      border: `${borderWidth}px solid ${entry.color || Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__["colorByIndex"])(i)}`,
      position: 'absolute',
      top: `${entry.y}%`,
      left: `${entry.x}%`,
      width: `${entry.w}%`,
      height: `${entry.h}%`,
      pointerEvents: 'none'
    },
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      height: `100%`,
      background: `${entry.color || Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__["colorByIndex"])(i)}`,
      opacity: highlightIndex === i ? `0.5` : `0.2`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (BBoxAnnotator);

/***/ }),

/***/ "./src/universal/components/bbox-annotator/BBoxSelector.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/components/bbox-annotator/BBoxSelector.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/bbox-annotator/BBoxSelector.tsx";


const BBoxSelector = ({
  rectangle,
  borderWidth = 2,
  color
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      left: `${rectangle.x}%`,
      top: `${rectangle.y}%`,
      width: `${rectangle.w}%`,
      height: `${rectangle.h}%`,
      border: `${borderWidth || 2}px solid ${color}`,
      borderWidth: `${borderWidth || 2}px`,
      position: 'absolute',
      pointerEvents: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      height: `100%`,
      background: `${color}`,
      opacity: `0.2`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BBoxSelector);

/***/ }),

/***/ "./src/universal/components/blocks/Binary.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/blocks/Binary.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Binary.tsx";









const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "etqvrm70"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const Binary = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    setFieldValue,
    index
  } = props || {};
  const {
    binary,
    name,
    id,
    _id
  } = block;
  const {
    value
  } = binary || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].BINARY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    autoFocus: false,
    name: `data.${index}.binary.value`,
    id: `${_id}-true`,
    value: "true",
    label: "Yes",
    onChange: () => setFieldValue(`data.${index}.binary.value`, true),
    checked: value === true,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    autoFocus: false,
    name: `data.${index}.binary.value`,
    id: `${_id}-false`,
    value: "false",
    label: "No",
    onChange: () => setFieldValue(`data.${index}.binary.value`, false),
    checked: value === false,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Binary);

/***/ }),

/***/ "./src/universal/components/blocks/BodyContainer.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/components/blocks/BodyContainer.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/BodyContainer.tsx";


const BodyContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezggttw0"
})(({
  row
}) => ({
  float: 'left',
  paddingTop: '10px',
  display: 'flex',
  height: '100%',
  flexDirection: row ? 'row' : 'column'
}));

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  row,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BodyContainer, {
  style: style,
  row: row,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, children));

/***/ }),

/***/ "./src/universal/components/blocks/BoundingBoxes.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/components/blocks/BoundingBoxes.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/TaggableListWrapper */ "./src/universal/components/TaggableListWrapper.tsx");
/* harmony import */ var _bbox_annotator_BBoxAnnotator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bbox-annotator/BBoxAnnotator */ "./src/universal/components/bbox-annotator/BBoxAnnotator.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/BoundingBoxes.tsx";

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












const ImageWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "es0uq7l0"
})({
  name: "1w4x1lc",
  styles: "flex-grow:1;margin-right:10px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;"
});

const BoundingBoxes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing,
    setFieldValue,
    index,
    isAudits
  } = props;
  const {
    name
  } = block;
  const {
    placeholder,
    options,
    value
  } = block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES] || {};
  const [objects, setObjects] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_optionalChain([value, 'optionalAccess', _2 => _2.objects]) || []);
  const [highlightIndex, setHighlightIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const renderValue = isEditing || value.image === '' ? placeholder || '' : value.image;
  const [selectedLabel, setSelectedLabel] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    tag: options[0].id,
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__["colorByIndex"])(0)
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setObjects(_optionalChain([value, 'optionalAccess', _3 => _3.objects]));
  }, [block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES]]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES}].value.objects`, isEditing ? [] : _optionalChain([value, 'optionalAccess', _4 => _4.objects]));
    setObjects(isEditing ? [] : _optionalChain([value, 'optionalAccess', _5 => _5.objects]));
  }, [placeholder, options]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    style: {
      display: 'block',
      maxWidth: '100%',
      minWidth: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWrapper, {
    onMouseDown: e => {
      e.stopPropagation();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, renderValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bbox_annotator_BBoxAnnotator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    url: renderValue,
    selectedLabel: selectedLabel,
    objects: objects,
    highlightIndex: highlightIndex,
    disabled: isAudits,
    onChange: e => {
      setObjects(e);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES}].value.objects`, e);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: options,
    objects: objects,
    disabled: isAudits,
    onSelect: label => {
      setSelectedLabel(label);
    },
    onHover: index => {
      setHighlightIndex(index);
    },
    onClick: index => {
      setObjects(objects.filter((_, i) => i !== index));
    },
    selectedCategory: selectedLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (BoundingBoxes);

/***/ }),

/***/ "./src/universal/components/blocks/Content.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/components/blocks/Content.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentWrapper; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Content.tsx";




const Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1eg38ed0"
})("height:100%;padding:10px;display:flex;flex-direction:column;z-index:1;overflow:", ({
  overflow
}) => overflow ? overflow : 'auto', ";&:hover ", _components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["Container"], "{visibility:visible;opacity:1;}");

const ContentContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1eg38ed1"
})({
  name: "1g4yje1",
  styles: "display:flex;flex-direction:column;height:100%;"
});

const DragHandle = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e1eg38ed2"
})("height:30px;width:30px;position:fixed;left:50%;z-index:10;top:-15px;cursor:", ({
  isEditing
}) => isEditing ? 'grab' : 'inherit', ";display:none !important;display:", ({
  isEditing
}) => isEditing ? 'block' : 'none', ";", ContentContainer, ":hover &{display:", ({
  isEditing
}) => isEditing ? 'block' : 'none', " !important;}&.dragging{cursor:grabbing;}");

function ContentWrapper({
  children,
  isEditing,
  overflow
}) {
  const addDraggingStyles = e => {
    e.target.classList.add('dragging');
  };

  const removeDraggingStyles = e => {
    e.target.classList.remove('dragging');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DragHandle, {
    className: "drag-handle",
    isEditing: isEditing,
    style: {
      fontSize: 18,
      color: '#686869'
    },
    onMouseOut: removeDraggingStyles,
    onMouseDown: addDraggingStyles,
    onMouseUp: removeDraggingStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "drag_handle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    isEditing: isEditing,
    overflow: overflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, children));
}

/***/ }),

/***/ "./src/universal/components/blocks/Date.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Date.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/DatePicker */ "./src/universal/components/DatePicker.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Date.tsx";










const DateBlock = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    setFieldValue,
    isEditing,
    index
  } = props;
  const {
    date,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = date || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].DATE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, readOnly || isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_8__["getDisplayFormat"])(renderValue)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.date.value`,
    value: renderValue,
    readOnly: readOnly || isAudits,
    placeholder: placeholder,
    setFieldValue: setFieldValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DateBlock);

/***/ }),

/***/ "./src/universal/components/blocks/Email.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Email.tsx ***!
  \***************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Email; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Email.tsx";

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










const StyledLink = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "e16yuwdr0"
})({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].LINK,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word'
});
function Email(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    index,
    error,
    handleBlur,
    handleChange
  } = props;
  const {
    email,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = email || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].EMAIL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "email",
    name: `data.${index}.email.value`,
    value: renderValue || "",
    hideErrorMessage: true,
    error: _optionalChain([error, 'optionalAccess', _ => _.value]),
    autoFocus: false,
    onChange: handleChange,
    onBlur: handleBlur,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    href: `mailto:${renderValue}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, renderValue)));
}

/***/ }),

/***/ "./src/universal/components/blocks/Embed.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Embed.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Embed.tsx";








const IFrame = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("iframe", {
  target: "eevjo720"
})({
  name: "np0iat",
  styles: "width:100%;height:100%;border:0;"
});

const Embed = props => {
  const {
    block,
    onEdit,
    onDelete,
    isEditing,
    error,
    index
  } = props || {};
  const {
    embed,
    name
  } = block;
  const {
    value,
    placeholder
  } = embed || {};
  let sourceUrl = isEditing ? placeholder : value;

  if (error.data && error.data[index] && error.data.length) {
    sourceUrl = '';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    overflow: `hidden`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].EMBED,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IFrame, {
    src: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Embed);

/***/ }),

/***/ "./src/universal/components/blocks/FormSequence.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/blocks/FormSequence.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/TaskCheckbox */ "./src/universal/components/TaskCheckbox.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/FormSequence.tsx";

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
















const ButtonBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox0"
})({
  name: "1hx5wtv",
  styles: "display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;flex:0 0 auto;"
});

const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox1"
})({
  name: "o6l5fu",
  styles: "padding:5px 0;"
});

const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox2"
})({
  name: "tjjfeh",
  styles: "height:100%;width:100%;display:flex;flex-direction:column;"
});

const Item = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox3"
})({
  name: "1rr4qq7",
  styles: "flex:1;"
});

const assignNextAndBackVisibility = (currentIdx, currentType, nextBlockId, nextBlockIndex, value, data) => {
  let isNextDisabled = false;
  let isBackDisabled = false;
  isBackDisabled = currentIdx === 0;

  if (currentIdx === data.length - 1) {
    if (nextBlockIndex === -1) {
      isNextDisabled = true;
    }
  } else {
    if (currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION || currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY) {
      if (!value) isNextDisabled = true;
    } else {
      if (value === '' || value === null) {
        isNextDisabled = true;
      } else {
        isNextDisabled = false;
      }
    }
  }

  if (!nextBlockId !== null && nextBlockId !== undefined) {
    isNextDisabled = false;
  } else if (nextBlockId === null) {
    isNextDisabled = true;
  }

  return {
    isNextDisabled,
    isBackDisabled
  };
};

const FormSequence = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const [currentIdx, setCurrentIdx] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    isAudits,
    block,
    onDelete,
    handleChange,
    index,
    isEditing,
    onEdit,
    setFieldValue
  } = props;
  const {
    name,
    type,
    _id
  } = block || {};
  const {
    data,
    history = []
  } = block[type];
  const currentBlock = data[currentIdx];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isAudits) return;

    if (currentBlock && _optionalChain([history, 'optionalAccess', _ => _.length]) > 0) {
      const lastBlockId = history.pop();
      const lastBlockIdx = data.findIndex(({
        id
      }) => id === lastBlockId);
      setCurrentIdx(lastBlockIdx + 1);
    }
  }, []);
  if (!currentBlock) return null;
  const {
    type: currentType,
    name: currentBlockName
  } = currentBlock;
  const {
    value = ''
  } = currentBlock[currentType];
  const nextBlockId = _optionalChain([currentBlock, 'optionalAccess', _2 => _2.logic_jump]) ? currentBlock.logic_jump[value] : undefined;
  const nextBlockIndex = data.findIndex(block => block.id === nextBlockId);
  const logicBlocks = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION];

  const handleNext = arrayHelpers => {
    if (logicBlocks.includes(currentType)) {
      if (!nextBlockId) {
        arrayHelpers.push(currentBlock.id);
        setCurrentIdx(currentIdx + 1);
      } else {
        if (nextBlockIndex !== -1) {
          arrayHelpers.push(currentBlock.id);
          setCurrentIdx(nextBlockIndex);
        } else {
          console.error('Error: unable to find next block ID');
        }
      }
    } else {
      // pop current index into history
      arrayHelpers.push(currentBlock.id);
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleBack = () => {
    if (_optionalChain([history, 'optionalAccess', _3 => _3.length]) <= 0) {
      setCurrentIdx(0);
    } else {
      const stackedId = history.pop();
      const nextBlockIndex = data.findIndex(block => block.id === stackedId);

      if (nextBlockIndex !== -1) {
        setCurrentIdx(nextBlockIndex);
      } else {
        setCurrentIdx(0);
      }
    }
  };

  const {
    isNextDisabled,
    isBackDisabled
  } = assignNextAndBackVisibility(currentIdx, currentType, nextBlockId, nextBlockIndex, value, data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    name: `data.${index}.${type}.history`,
    render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_14__["default"], _objectSpread(_objectSpread({}, props), {}, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      }
    }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDelete: onDelete,
      onEdit: onEdit,
      isEditing: isEditing,
      blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].FORM_SEQUENCE,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "button",
      disabled: isBackDisabled,
      onClick: () => handleBack(arrayHelpers),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "button",
      disabled: isNextDisabled,
      onClick: () => handleNext(arrayHelpers),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      }
    }, "Next")), currentBlockName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      }
    }, currentBlockName), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].TEXT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      autoFocus: false,
      value: value,
      style: {
        flex: 1
      },
      disabled: isAudits,
      key: _optionalChain([currentBlock, 'optionalAccess', _4 => _4.id]),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      }
    }), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NUMBER && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "number",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].EMAIL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "email",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].LINK && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "text",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${_id}-${currentIdx}-true`,
      value: "true",
      label: "Yes",
      onChange: () => setFieldValue(`data.${index}.${type}.data.${currentIdx}.${currentType}.value`, true),
      checked: value === true,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${_id}-${currentIdx}-false`,
      value: "false",
      label: "No",
      onChange: () => setFieldValue(`data.${index}.${type}.data.${currentIdx}.${currentType}.value`, false),
      checked: value === false,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      }
    }))), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      }
    }, currentBlock[currentType].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${index}-${optionIndex}`,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: option.id === value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    })))), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].MULTIPLE_SELECTION && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      }
    }, currentBlock[currentType].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${index}-${optionIndex}`,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: value && value.includes(option.id),
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      }
    }))))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (FormSequence);

/***/ }),

/***/ "./src/universal/components/blocks/HeaderContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/components/blocks/HeaderContainer.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/HeaderContainer.tsx";


const HeaderContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e20h3ap0"
})({
  name: "gum8km",
  styles: "align-items:center;display:flex;flex-direction:row;justify-content:space-between;flex:0 0 auto;height:auto;background:white;z-index:11;position:relative;user-select:none;"
});

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
}, children));

/***/ }),

/***/ "./src/universal/components/blocks/Image.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Image.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Image.tsx";








const StyledImg = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img", {
  target: "e1vflmxe0"
})({
  name: "10tv4cy",
  styles: "object-fit:contain;max-width:100%;max-height:100%;width:auto;height:auto;"
});

const Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing
  } = props;
  const {
    name,
    type,
    id,
    image
  } = block;
  const {
    value,
    placeholder
  } = image || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    style: {
      display: 'block',
      maxWidth: '100%',
      minWidth: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].IMAGE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, renderValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledImg, {
    src: renderValue,
    alt: name || type,
    title: name || type,
    onDragStart: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/universal/components/blocks/Label.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Label.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e13k15rh0"
})({
  name: "18ugfwx",
  styles: "font-weight:500;font-size:15px;"
});

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/universal/components/blocks/Link.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Link.tsx ***!
  \**************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Link.tsx";

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










const StyledLink = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "e1fp8dlm0"
})({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].LINK,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word'
});
function Link(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    index,
    error,
    handleBlur,
    handleChange
  } = props;
  const {
    link,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = link || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].LINK,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "text",
    name: `data.${index}.link.value`,
    value: renderValue || "",
    hideErrorMessage: true,
    error: _optionalChain([error, 'optionalAccess', _ => _.value]),
    autoFocus: false,
    onChange: handleChange,
    onBlur: handleBlur,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    href: `${renderValue}`,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, renderValue)));
}

/***/ }),

/***/ "./src/universal/components/blocks/MediaBlock.tsx":
/*!********************************************************!*\
  !*** ./src/universal/components/blocks/MediaBlock.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/hooks/usePrevious */ "./src/universal/hooks/usePrevious.ts");
/* harmony import */ var _BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/MediaBlock.tsx";









const options = {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
};

const VideoPlayer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ez974t10"
})(({
  show,
  hideOverflow
}) => ({
  display: show === false ? 'none' : 'block',
  overflow: hideOverflow ? 'hidden' : 'visible',
  zIndex: 1
}));

const MediaBlock = props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing
  } = props;
  const {
    name,
    type,
    id
  } = block;
  const {
    value,
    placeholder
  } = block[type] || {};
  const sourceUrl = isEditing ? value || placeholder : value;
  const prevSourceUrl = Object(universal_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceUrl);
  const sources = {
    type: type,
    sources: [{
      src: sourceUrl
    }]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (prevSourceUrl !== sourceUrl) {
      const el = document.getElementById(`plyr-${id}`); // @ts-ignore

      const player = new plyr__WEBPACK_IMPORTED_MODULE_8___default.a(el, options); // @ts-ignore

      player.source = sources;
      return () => player.destroy();
    }

    return;
  }, [sourceUrl]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoPlayer, {
    show: sourceUrl !== '' && sourceUrl !== undefined,
    hideOverflow: type === 'video',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('video', {
    id: `plyr-${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaBlock);

/***/ }),

/***/ "./src/universal/components/blocks/MultipleSelection.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/components/blocks/MultipleSelection.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskCheckbox */ "./src/universal/components/TaskCheckbox.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/ListFilter */ "./src/client/components/ListFilter.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/MultipleSelection.tsx";










const Checkbox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ayrd540"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const MultiClass = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    isAudits,
    block,
    onDelete,
    handleChange,
    index,
    isEditing,
    onEdit
  } = props;
  const {
    name,
    type
  } = block;
  const {
    value
  } = block['multiple_selection'] || {};
  const isTask = !isEditing && !isAudits;
  const [list, setList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(block[type].options);
  const options = isEditing ? block[type].options : list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].MULTIPLE_SELECTION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })), isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    list: block[type].options,
    setList: setList,
    keys: ['name'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, {
    key: optionIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: `data.${index}.multiple_selection.value`,
    id: `${index}-${optionIndex}`,
    value: option.id,
    label: option.name,
    onChange: handleChange,
    checked: value && value.includes(option.id),
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (MultiClass);

/***/ }),

/***/ "./src/universal/components/blocks/NamedEntityRecognition.tsx":
/*!********************************************************************!*\
  !*** ./src/universal/components/blocks/NamedEntityRecognition.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/TaggableListWrapper */ "./src/universal/components/TaggableListWrapper.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_text_annotator_TextAnnotator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/text-annotator/TextAnnotator */ "./src/universal/components/text-annotator/TextAnnotator.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/NamedEntityRecognition.tsx";

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















const ButtonBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis0"
})({
  name: "12h07at",
  styles: "display:grid;margin-bottom:10px;margin-top:10px;grid-template-columns:80px 80px;grid-gap:10px;"
});

const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis1"
})(({
  editMode
}) => _objectSpread({}, editMode && {
  display: 'grid',
  gridTemplateRows: 'auto 50px'
}));

const TextWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis2"
})(({
  highlightColor
}) => `
    cursor: auto;
    flex-grow: 1;
    padding-right: 10px;
    padding-bottom: 10px;
    line-height: 25px;
    margin-left: -10px;
    white-space: pre-wrap;
    & mark {
      padding: 4px !important;
      position: relative;
      cursor: pointer;
      &:hover:after {
        font-size: 8px;
        color: #000;
        white-space:nowrap;
        top: 0;
        line-height: 11px;
        left: 0;
        position: absolute;
        content: 'x';
        font-weight: bold;
        z-index: 11;
        width: 11px;
        background: white;
        text-align: center;
        opacity: 0.5;
      }
    }
    & mark > span {
      display: none;
    }

    & span {

      &::selection {
        background: ${highlightColor};
      }
    }
`);

const NamedEntityRecognition = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    block,
    onDelete,
    isEditing,
    onEdit,
    setFieldValue,
    index,
    isAudits
  } = props;
  const {
    name
  } = block;
  const {
    allow_edits: allowEdits,
    placeholder,
    options,
    value = '',
    entities = []
  } = block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION] || {};
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(entities);
  const [userSelect, setUserSelect] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [disableSelection, setDisableSelection] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [editMode, togglEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [selectedCategory, setSelectedCategory] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    tag: options[0].id,
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(0)
  });
  const renderText = isEditing || value === '' ? placeholder || '' : value;
  let textFieldName = `data.${index}.${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}.value`;

  if (isEditing || value === '') {
    textFieldName = `data.${index}.${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}.placeholder`;
  }

  const [textFieldValue, setTextFieldValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(renderText);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // reset tags when placeholder and options changed
    if (isEditing) {
      setText([]);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, []);
    } else {
      setText(entities);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, entities);
    }
  }, [placeholder, options]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, isEditing ? [] : text);
  }, [text]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSelectedCategory({
      tag: options[0].id,
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(0)
    });
  }, [options]);
  const handleTextChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;
    setTextFieldValue(value);
  }, [textFieldValue]);

  const formatEntitiesForUIRendering = entities => {
    const entitiesInstance = entities;
    return entitiesInstance.filter(itm => {
      const [optionName, index] = findOptionNameFromId(itm.tag);

      if (!optionName) {
        return false;
      }

      itm.color = Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(index);
      return itm;
    });
  };

  const findOptionNameFromId = id => {
    let name;
    let index;
    options.map((option, i) => {
      if (option.id === id) {
        name = option.name;
        index = i;
      }
    });
    return [name, index];
  };

  const handleAnnotate = text => {
    if (userSelect) {
      setUserSelect(false);
      return false;
    }

    if (!isAudits) {
      setText(text);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, isEditing ? [] : text);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].value`, renderText);
    }
  };

  const boxRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const inputRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (boxRef !== undefined && boxRef.current !== undefined) {
      boxRef.current.addEventListener('mouseup', e => {
        if (e.detail >= 3) {
          setUserSelect(true);
          e.preventDefault();
        }
      });
    }
  }, [boxRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (_optionalChain([inputRef, 'optionalAccess', _ => _.current])) {
      _optionalChain([inputRef, 'optionalAccess', _2 => _2.current, 'optionalAccess', _3 => _3.style, 'access', _4 => _4.setProperty, 'call', _5 => _5('height', '100%', 'important')]);
    }
  }, [inputRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    row: true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 195px',
      gridGap: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    editMode: editMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    style: {
      height: '90% !important'
    },
    positionErrorBelow: false,
    value: textFieldValue,
    onChange: handleTextChange,
    scrollable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, {
    onMouseDown: e => {
      e.stopPropagation();
    },
    onMouseEnter: () => {
      setDisableSelection(false);
    },
    onMouseLeave: () => {
      setDisableSelection(true);
      window.getSelection().empty();
    },
    style: {
      userSelect: disableSelection ? 'none' : 'auto'
    },
    highlightColor: selectedCategory.color,
    ref: boxRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_text_annotator_TextAnnotator__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      paddingLeft: '10px'
    },
    content: renderText,
    value: formatEntitiesForUIRendering(text),
    onChange: handleAnnotate,
    getSpan: span => _objectSpread(_objectSpread({}, span), selectedCategory),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    }
  })), allowEdits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: '100%',
      marginRight: 10
    },
    type: "button",
    disabled: false,
    onClick: () => {
      togglEditMode(false);
      setTextFieldValue(renderText);
    },
    hideFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    type: "button",
    disabled: false,
    onClick: () => {
      if (!isEditing) {
        setText([]);
        setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, []);
      }

      setFieldValue(textFieldName, textFieldValue);
      togglEditMode(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    }
  }, "Save")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: '100%'
    },
    type: "button",
    onClick: () => togglEditMode(true),
    hideFocus: true,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    }
  }, "Edit Text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: options,
    onSelect: category => {
      setSelectedCategory(category);
    },
    selectedCategory: selectedCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (NamedEntityRecognition);

/***/ }),

/***/ "./src/universal/components/blocks/Number.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/blocks/Number.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Number.tsx";








function NumberBlock(props) {
  const {
    block,
    onDelete,
    handleChange,
    index,
    isAudits,
    isEditing,
    onEdit
  } = props;
  const {
    number,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = number || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].NUMBER,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BodyContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, readOnly || isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('div', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, renderValue) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](universal_components_InputField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.number.value`,
    onChange: handleChange,
    type: "number",
    autoFocus: false,
    value: renderValue || "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })));
}

/***/ }),

/***/ "./src/universal/components/blocks/PdfReader.tsx":
/*!*******************************************************!*\
  !*** ./src/universal/components/blocks/PdfReader.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/PdfReader.tsx";








const IFrame = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("iframe", {
  target: "eiejtyd0"
})({
  name: "np0iat",
  styles: "width:100%;height:100%;border:0;"
});

const PdfReader = props => {
  const {
    block,
    onEdit,
    onDelete,
    isEditing,
    error,
    index
  } = props || {};
  const {
    pdf,
    name
  } = block;
  const {
    value,
    placeholder
  } = pdf || {};
  let sourceUrl = isEditing ? placeholder : value;

  if (error.data && error.data[index] && error.data.length) {
    sourceUrl = '';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    overflow: `hidden`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].PDF,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IFrame, {
    src: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PdfReader);

/***/ }),

/***/ "./src/universal/components/blocks/RichTextEditor.tsx":
/*!************************************************************!*\
  !*** ./src/universal/components/blocks/RichTextEditor.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/TextEditor */ "./src/universal/components/TextEditor.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/RichTextEditor.tsx";








const RichTextEditor = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    setFieldValue,
    isEditing,
    index
  } = props;
  const {
    rich_text: richText,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = '',
    format
  } = richText || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].RICH_TEXT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.rich_text.value`,
    value: renderValue,
    readOnly: readOnly || isAudits,
    placeholder: placeholder,
    setFieldValue: setFieldValue,
    format: format,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ }),

/***/ "./src/universal/components/blocks/SingleSelection.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/components/blocks/SingleSelection.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/ListFilter */ "./src/client/components/ListFilter.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/SingleSelection.tsx";










const Radio = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eg86qua0"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const SingleSelection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    block,
    onDelete,
    isAudits,
    handleChange,
    index,
    isEditing,
    onEdit
  } = props;
  const {
    name,
    type
  } = block;
  const {
    value
  } = block['single_selection'] || {};
  const isTask = !isEditing && !isAudits;
  const [list, setList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(block[type].options);
  const options = isEditing ? block[type].options : list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].SINGLE_SELECTION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    list: block[type].options,
    setList: setList,
    keys: ['name'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Radio, {
    key: optionIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: `data.${index}.single_selection.value`,
    id: `${index}-${optionIndex}`,
    value: option.id,
    label: option.name,
    onChange: handleChange,
    checked: option.id === value,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (SingleSelection);

/***/ }),

/***/ "./src/universal/components/blocks/Text.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Text.tsx ***!
  \**************************************************/
/*! exports provided: StyledText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledText", function() { return StyledText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Text.tsx";










const StyledText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p", {
  target: "efy0fkk0"
})({
  fontSize: 16,
  lineHeight: 1.35,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  cursor: 'text'
});
function Text(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    handleChange,
    isEditing,
    index
  } = props;
  const {
    text,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = text || {};
  const renderValue = isEditing ? placeholder : value;
  const decorator = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((href, text, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
      href: href,
      key: key,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].LINK
        /* textDecoration: 'underline' */

      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, text);
  }, [renderValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_10__["BLOCK_TYPE"].TEXT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: `data.${index}.text.value`,
    onChange: handleChange,
    autoFocus: false,
    style: {
      height: '100%'
    },
    value: renderValue || value,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_2___default.a, {
    componentDecorator: decorator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, renderValue))));
}

/***/ }),

/***/ "./src/universal/components/blocks/TextSequence.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/blocks/TextSequence.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextSequence; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_TextSequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/TextSequence */ "./src/universal/components/TextSequence.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/TextSequence.tsx";

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










const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ef6bqbm0"
})({
  name: "1hx5wtv",
  styles: "display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;flex:0 0 auto;"
});

function TextSequence(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    handleChange,
    isEditing,
    index,
    setFieldValue
  } = props;
  const {
    name,
    type
  } = block || {};
  const data = isEditing ? block[type].placeholder : block[type].value;
  const {
    delete_disabled: deleteDisabled,
    edit_disabled: editDisabled,
    ordering_disabled: orderingDisabled
  } = block[type];
  const settings = {
    deleteDisabled,
    editDisabled,
    orderingDisabled
  };
  const targetName = isEditing ? `data[${index}][${type}].placeholder` : `data[${index}][${type}].value`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].TEXT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TextSequence__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: targetName,
    targetName: targetName,
    data: data,
    type: type,
    setFieldValue: setFieldValue,
    index: index,
    handleChange: handleChange,
    isEditing: isEditing,
    isAudits: isAudits,
    placeholder: _optionalChain([block, 'access', _ => _[type], 'optionalAccess', _2 => _2.placeholder]) || [],
    settings: settings,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }))));
}

/***/ }),

/***/ "./src/universal/components/text-annotator/Functions.ts":
/*!**************************************************************!*\
  !*** ./src/universal/components/text-annotator/Functions.ts ***!
  \**************************************************************/
/*! exports provided: splitWithOffsets, splitTokensWithOffsets, selectionIsEmpty, selectionIsBackwards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitWithOffsets", function() { return splitWithOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitTokensWithOffsets", function() { return splitTokensWithOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionIsEmpty", function() { return selectionIsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionIsBackwards", function() { return selectionIsBackwards; });
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.sortby */ "./node_modules/lodash.sortby/index.js");
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sortby__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const splitWithOffsets = (text, offsets) => {
  let lastEnd = 0;
  const splits = [];

  for (let offset of lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default()(offsets, o => o.start)) {
    const {
      start,
      end
    } = offset;

    if (lastEnd < start) {
      splits.push({
        start: lastEnd,
        end: start,
        content: text.slice(lastEnd, start)
      });
    }

    splits.push(_objectSpread(_objectSpread({}, offset), {}, {
      mark: true,
      content: text.slice(start, end)
    }));
    lastEnd = end;
  }

  if (lastEnd < text.length) {
    splits.push({
      start: lastEnd,
      end: text.length,
      content: text.slice(lastEnd, text.length)
    });
  }

  return splits;
};
const splitTokensWithOffsets = (text, offsets) => {
  let lastEnd = 0;
  const splits = [];

  for (let offset of lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default()(offsets, o => o.start)) {
    const {
      start,
      end
    } = offset;

    if (lastEnd < start) {
      for (let i = lastEnd; i < start; i++) {
        splits.push({
          i,
          content: text[i]
        });
      }
    }

    splits.push(_objectSpread(_objectSpread({}, offset), {}, {
      mark: true,
      content: text.slice(start, end).join(' ')
    }));
    lastEnd = end;
  }

  for (let i = lastEnd; i < text.length; i++) {
    splits.push({
      i,
      content: text[i]
    });
  }

  return splits;
};
const selectionIsEmpty = selection => {
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
  return position === 0 && selection.focusOffset === selection.anchorOffset;
};
const selectionIsBackwards = selection => {
  if (selectionIsEmpty(selection)) return false;
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
  let backward = false;
  if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) backward = true;
  return backward;
};

/***/ }),

/***/ "./src/universal/components/text-annotator/Mark.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/text-annotator/Mark.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/text-annotator/Mark.tsx";


const Mark = props => {
  const {
    color,
    start,
    end,
    content,
    tag,
    onClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('mark', {
    style: {
      backgroundColor: color || '#84d2ff',
      padding: '0 4px'
    },
    'data-start': start,
    'data-end': end,
    onClick: () => onClick({
      start,
      end
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, content, tag && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
    style: {
      fontSize: '0.7em',
      fontWeight: 500,
      marginLeft: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, tag));
};

/* harmony default export */ __webpack_exports__["default"] = (Mark);

/***/ }),

/***/ "./src/universal/components/text-annotator/TextAnnotator.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/components/text-annotator/TextAnnotator.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mark */ "./src/universal/components/text-annotator/Mark.tsx");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Functions */ "./src/universal/components/text-annotator/Functions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/text-annotator/TextAnnotator.tsx";




const Split = props => {
  if (props.mark) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mark__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
    'data-start': props.start,
    'data-end': props.end,
    onClick: () => props.onClick({
      start: props.start,
      end: props.end
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.content);
};

const TextAnnotator = props => {
  const getSpan = span => {
    // TODO: Better typings here.
    if (props.getSpan) return props.getSpan(span);
    return {
      start: span.start,
      end: span.end
    };
  };

  const handleMouseUp = () => {
    if (!props.onChange) return;
    const selection = window.getSelection();
    if (!selection.anchorNode || !selection.focusNode || Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["selectionIsEmpty"])(selection)) return;
    let start = parseInt(selection.anchorNode.parentElement.getAttribute('data-start'), 10) + selection.anchorOffset;
    let end = parseInt(selection.focusNode.parentElement.getAttribute('data-start'), 10) + selection.focusOffset;

    if (!Number.isInteger(start) || !Number.isInteger(end) || selection.anchorNode.compareDocumentPosition(selection.focusNode) !== 0) {
      window.getSelection().empty();
      return;
    }

    if (Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["selectionIsBackwards"])(selection)) {
      ;
      [start, end] = [end, start];
    }

    props.onChange([...props.value, getSpan({
      start,
      end,
      text: content.slice(start, end)
    })]);
    window.getSelection().empty();
  };

  const handleSplitClick = ({
    start,
    end
  }) => {
    // Find and remove the matching split.
    const splitIndex = props.value.findIndex(s => s.start === start && s.end === end);

    if (splitIndex >= 0) {
      props.onChange([...props.value.slice(0, splitIndex), ...props.value.slice(splitIndex + 1)]);
    }
  };

  const {
    content,
    value,
    style
  } = props;
  const splits = Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["splitWithOffsets"])(content, value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    style: style,
    onMouseUp: handleMouseUp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, splits.map(split => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Split, _objectSpread(_objectSpread({
    key: `${split.start}-${split.end}`
  }, split), {}, {
    onClick: handleSplitClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAnnotator);

/***/ }),

/***/ "./src/universal/hooks/usePrevious.ts":
/*!********************************************!*\
  !*** ./src/universal/hooks/usePrevious.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const usePrevious = value => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ }),

/***/ "./src/universal/styles/css/datepicker-override.css":
/*!**********************************************************!*\
  !*** ./src/universal/styles/css/datepicker-override.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./datepicker-override.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/datepicker-override.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/styles/css/react-grid-layout.css":
/*!********************************************************!*\
  !*** ./src/universal/styles/css/react-grid-layout.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./react-grid-layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/styles/css/react-resizable.css":
/*!******************************************************!*\
  !*** ./src/universal/styles/css/react-resizable.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./react-resizable.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/styles/css/rgl-overide.css":
/*!**************************************************!*\
  !*** ./src/universal/styles/css/rgl-overide.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./rgl-overide.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/utils/getColor.ts":
/*!*****************************************!*\
  !*** ./src/universal/utils/getColor.ts ***!
  \*****************************************/
/*! exports provided: colorFromString, colorByIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFromString", function() { return colorFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorByIndex", function() { return colorByIndex; });
/* harmony import */ var _stringToHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringToHash */ "./src/universal/utils/stringToHash.ts");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");



const getColor = identifier => client_styles_palette__WEBPACK_IMPORTED_MODULE_1__["BackgroundColors"][identifier % client_styles_palette__WEBPACK_IMPORTED_MODULE_1__["BackgroundColors"].length];

const colorFromString = string => getColor(Math.abs(Object(_stringToHash__WEBPACK_IMPORTED_MODULE_0__["default"])(string)));
const colorByIndex = index => getColor(index);

/***/ }),

/***/ "./src/universal/utils/getItemStyle.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/getItemStyle.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getItemStyle = (_isDragging, draggableStyle) => {
  const {
    transform
  } = draggableStyle;
  let activeTransform = {};

  if (transform) {
    activeTransform = {
      transform: `translate(0, ${transform.substring(transform.indexOf(',') + 1, transform.indexOf(')'))})`
    };
  }

  return _objectSpread(_objectSpread({
    userSelect: 'none',
    // background: isDragging ? '#fff' : '#fff',
    background: '#fff',
    outline: 'none',
    width: '100%',
    height: '100%'
  }, draggableStyle), activeTransform);
};

/* harmony default export */ __webpack_exports__["default"] = (getItemStyle);

/***/ }),

/***/ "./src/universal/utils/isEmptyArray.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/isEmptyArray.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isEmptyArray = value => {
  if (value === null || value === undefined) return true;

  if (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function') {
    return !value.length;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmptyArray);

/***/ }),

/***/ "./src/universal/utils/stringToHash.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/stringToHash.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stringToHash = string => {
  let hash = 0,
      i,
      chr;

  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return hash;
};

/* harmony default export */ __webpack_exports__["default"] = (stringToHash);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvZGF0ZXBpY2tlci1vdmVycmlkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvY3NzL3JlYWN0LWdyaWQtbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvcmVhY3QtcmVzaXphYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvcmdsLW92ZXJpZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTGlzdEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1N0eWxlZEVycm9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BcHBIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CYXNpY1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUkdMLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvVGFnZ2FibGVMaXN0V3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tDaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1RleHRFZGl0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0U2VxdWVuY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9iYm94LWFubm90YXRvci9CQm94QW5ub3RhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmJveC1hbm5vdGF0b3IvQkJveFNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JpbmFyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvdW5kaW5nQm94ZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9EYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYmVkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0Zvcm1TZXF1ZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9IZWFkZXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvSW1hZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvTGFiZWwudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvTGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9NZWRpYUJsb2NrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL011bHRpcGxlU2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL05hbWVkRW50aXR5UmVjb2duaXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvTnVtYmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1BkZlJlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9SaWNoVGV4dEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9TaW5nbGVTZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvVGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0U2VxdWVuY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy90ZXh0LWFubm90YXRvci9GdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL3RleHQtYW5ub3RhdG9yL01hcmsudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy90ZXh0LWFubm90YXRvci9UZXh0QW5ub3RhdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2hvb2tzL3VzZVByZXZpb3VzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcz84ODU0Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZWFjdC1ncmlkLWxheW91dC5jc3M/YjlmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvcmVhY3QtcmVzaXphYmxlLmNzcz9iNzc2Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZ2wtb3ZlcmlkZS5jc3M/ZDdmMSIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2dldENvbG9yLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0SXRlbVN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvc3RyaW5nVG9IYXNoLnRzIl0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIklucHV0IiwiZXJyb3IiLCJkaXNhYmxlZCIsImRpc3BsYXkiLCJhcHBlYXJhbmNlIiwib3V0bGluZSIsIm1hcmdpbiIsImJvcmRlciIsIlBBTEVUVEUiLCJFUlJPUl9NQUlOIiwiQk9SREVSX01BSU5fR1JBWSIsImJveFNpemluZyIsImNvbG9yIiwiVEVYVF9NQUlOIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiYm94U2hhZG93IiwiQk9YX1NIQURPV19QUklNQVJZIiwiYm9yZGVyQ29sb3IiLCJQUklNQVJZX01BSU4iLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJzdHlsZSIsInNwZWxsQ2hlY2siLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiQm9vbGVhbiIsIlN0eWxlZEVycm9yIiwiV3JhcHBlciIsIkxpc3RGaWx0ZXIiLCJsaXN0Iiwic2V0TGlzdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGVybSIsInRhcmdldCIsIm1hdGNoU29ydGVyIiwidGV4dEFsaWduIiwiU3R5bGVkVGV4dEFyZWEiLCJUZXh0QXJlYSIsInJlYWRPbmx5Iiwic2Nyb2xsYWJsZSIsIm92ZXJmbG93IiwicmVzaXplIiwiQmFzaWNUZXh0QXJlYSIsIm1pblJvd3MiLCJtYXhSb3dzIiwibWF4TGVuZ3RoIiwiY2FjaGVNZWFzdXJlbWVudHMiLCJwb3NpdGlvbkVycm9yQmVsb3ciLCJTdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJzZWdtZW50VHJhY2siLCJldmVudCIsInByb3BlcnRpZXMiLCJhbmFseXRpY3MiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJ0cmFjayIsIkFQUF9IRUFERVJfSEVJR0hUIiwiQ29udGFpbmVyIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkJBQ0tHUk9VTkRfTUFJTiIsImJvcmRlckJvdHRvbSIsIkJPUkRFUl9HUkFZX05FVyIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwiRmxleEl0ZW0iLCJwcm9wIiwiZmxleCIsImNlbnRlciIsIkFwcEhlYWRlciIsImxlZnRCYXJJdGVtcyIsInJpZ2h0QmFySXRlbXMiLCJtaWRCYXJJdGVtcyIsImlzRW1wdHlBcnJheSIsIkJPUkRFUl9IT1ZFUiIsImhpZGVFcnJvck1lc3NhZ2UiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQmxvY2tDb21wb25lbnQiLCJtZW1vIiwiaXNBdWRpdHMiLCJzZXRGaWVsZFZhbHVlIiwiaXNFZGl0aW5nIiwiaW5kZXgiLCJibG9jayIsIm9uRGVsZXRlIiwiaGFuZGxlQmx1ciIsIm9uRWRpdCIsImVycm9ycyIsInJlbmRlckNtcCIsIkJMT0NLX1RZUEUiLCJURVhUIiwiVGV4dCIsIkVNQUlMIiwiRW1haWwiLCJfIiwiZW1haWwiLCJOVU1CRVIiLCJOdW1iZXIiLCJMSU5LIiwiTGluayIsIl8yIiwibGluayIsIklNQUdFIiwiSW1hZ2UiLCJBVURJTyIsIk1lZGlhQmxvY2siLCJWSURFTyIsIkJJTkFSWSIsIkJpbmFyeSIsIk5BTUVEX0VOVElUWV9SRUNPR05JVElPTiIsIk5hbWVkRW50aXR5UmVjb2duaXRpb24iLCJCT1VORElOR19CT1hFUyIsIkJvdW5kaW5nQm94ZXMiLCJFTUJFRCIsIkVtYmVkIiwiUERGIiwiUGRmUmVhZGVyIiwiU0lOR0xFX1NFTEVDVElPTiIsIlNpbmdsZVNlbGVjdGlvbiIsIk1VTFRJUExFX1NFTEVDVElPTiIsIk11bHRpcGxlU2VsZWN0aW9uIiwiRk9STV9TRVFVRU5DRSIsIkZvcm1TZXF1ZW5jZSIsIlJJQ0hfVEVYVCIsIlJpY2hUZXh0RWRpdG9yIiwiVEVYVF9TRVFVRU5DRSIsIlRleHRTZXF1ZW5jZSIsIkRBVEUiLCJEYXRlIiwiU3R5bGVkSWNvbiIsIkljb24iLCJUeXBlSWNvbiIsIkJBQ0tHUk9VTkRfR1JBWV9NSUQiLCJCbG9ja0hlYWRlciIsImJsb2NrVHlwZSIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiQkxPQ0tTIiwiZmluZCIsImIiLCJfMyIsImljb24iLCJCbG9ja1dyYXBwZXIiLCJ6SW5kZXgiLCJTdHlsZWREYXRlUGlja2VyIiwiRGF0ZVBpY2tlciIsIkRhdGVJbnB1dCIsIkN1c3RvbURhdGVQaWNrZXIiLCJpc1Rhc2tNZW51Iiwic2V0VmFsdWUiLCJ1c2VGaWVsZCIsImNvbnRhaW5lclN0eWxlIiwiaGFuZGxlQ2hhbmdlUmF3IiwidmFsaWRDaGFycyIsInRlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJkYXRlIiwiQm9keUNvbnRhaW5lciIsImN1c3RvbUlucHV0Iiwic2VsZWN0ZWQiLCJjYWxlbmRhckNsYXNzTmFtZSIsImRheUNsYXNzTmFtZSIsInNob3VsZENsb3NlT25TZWxlY3QiLCJvbkNoYW5nZVJhdyIsInBsYWNlaG9sZGVyVGV4dCIsImdldERpc3BsYXlGb3JtYXQiLCJkYXRlRm9ybWF0IiwiZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24iLCJQbGFpbkJ1dHRvbiIsImNoaWxkcmVuIiwiUkdMV2lkdGhQcm92aWRlciIsIldpZHRoUHJvdmlkZXIiLCJSZXNwb25zaXZlIiwiUkdMX0NPTFVNTlMiLCJSR0xfUk9XUyIsIlJHTENvbnRhaW5lciIsIlJHTFdyYXBwZXIiLCJSR0wiLCJpc0RyYWdnYWJsZSIsImlzRHJvcHBhYmxlIiwiaXNSZXNpemFibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ1N0b3AiLCJvbkRyb3AiLCJvbkxheW91dENoYW5nZSIsImxheW91dHMiLCJkcm9wcGluZ0l0ZW0iLCJhdXRvU2l6ZSIsImJyZWFrcG9pbnRzIiwiYWxsIiwiY29scyIsImNvbXBhY3RUeXBlIiwiaXNCb3VuZGVkIiwibWVhc3VyZUJlZm9yZU1vdW50IiwidXNlQ1NTVHJhbnNmb3JtcyIsInByZXZlbnRDb2xsaXNpb24iLCJjb250YWluZXJQYWRkaW5nIiwicm93SGVpZ2h0IiwiZHJhZ2dhYmxlSGFuZGxlIiwiTGlzdFdyYXBwZXIiLCJMaXN0IiwiTGlzdExhYmVsIiwiQ2F0ZWdvcnlCdXR0b24iLCJhY3RpdmUiLCJiYWNrZ3JvdW5kIiwiY2xlYXIiLCJtYXJnaW5Cb3R0b20iLCJFbnRpdHlUZXh0IiwiQ29sb3JBcnRpZmFjdCIsIm1hcmdpblJpZ2h0IiwiZGFya2VuIiwiVGFnZ2FibGVMaXN0V3JhcHBlciIsIm9wdGlvbnMiLCJ0ZXh0Iiwic2VsZWN0ZWRDYXRlZ29yeSIsIm9uU2VsZWN0Iiwib2JqZWN0cyIsIm9uSG92ZXIiLCJnZXRPcHRpb25JbmRleCIsImlkIiwibWFwIiwib3B0aW9uIiwib3B0aW9uSW5kZXgiLCJrZXkiLCJ0YWciLCJjb2xvckJ5SW5kZXgiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtIiwiY2F0ZWdvcnkiLCJyZXBsYWNlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ1c2VyU2VsZWN0IiwiY29udGVudCIsImxlZnQiLCJDaGVja2JveCIsImNoZWNrZWQiLCJodG1sRm9yIiwibm9TaGFkb3ciLCJSYWRpbyIsIlN0eWxlZFRleHRFZGl0b3IiLCJ0b29sYmFyQ29uZmlnIiwiSU5MSU5FX1NUWUxFX0JVVFRPTlMiLCJjbGFzc05hbWUiLCJCTE9DS19UWVBFX0RST1BET1dOIiwiQkxPQ0tfVFlQRV9CVVRUT05TIiwiZWRpdG9yVGV4dCIsImNyZWF0ZVZhbHVlRnJvbVN0cmluZyIsIlRleHRFZGl0b3IiLCJmb3JtYXQiLCJyZW5kZXJWYWx1ZSIsImVkaXRvclZhbHVlRnJvbVByb3BzIiwiZWRpdG9yVmFsdWUiLCJzZXRFZGl0b3JWYWx1ZSIsInVzZVN0YXRlIiwic2V0Q29udGVudEZyb21TdHJpbmciLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJkaWRNb3VudFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0b29sYmFyQ2xhc3NOYW1lIiwiZWRpdG9yQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJwb3J0YWwiLCJkb2N1bWVudCIsImJvZHkiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiUm9vdEJ1dHRvbiIsIkZpZWxkV3JhcHBlciIsIkNvbnRlbnRXcmFwcGVyIiwiaXNUYXNrIiwib3JkZXJpbmdEaXNhYmxlZCIsImRlbGV0ZURpc2FibGVkIiwiQ29udGVudEJsb2NrIiwiSW5wdXRXcmFwcGVyIiwiQmxvY2tJbnB1dCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJzZXFJZHgiLCJkYXRhIiwidGFyZ2V0TmFtZSIsImFycmF5SGVscGVycyIsInNldHRpbmdzIiwic2V0Rm9jdXNTdHlsZXMiLCJlbGVtZW50cyIsImFjdGlvbiIsImZvckVhY2giLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJfNCIsInNob3dEZWxldGUiLCJkcmFnZ2FibGVQcm9wcyIsImlubmVyUmVmIiwiZ2V0SXRlbVN0eWxlIiwiaXNEcmFnZ2luZyIsImRyYWdIYW5kbGVQcm9wcyIsIm9uS2V5RG93biIsImtleUNvZGUiLCJfNSIsImVkaXREaXNhYmxlZCIsInJlbW92ZSIsIm9uRHJhZ0VuZCIsInVzZUNhbGxiYWNrIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsImRyb3BwYWJsZUlkIiwiY2hhbmdlZEl0ZW0iLCJuZXdMaXN0Iiwic3BsaWNlIiwiRmllbGRBcnJheSIsInJlbmRlciIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsImRyb3BwYWJsZVByb3BzIiwiRHJhZ2dhYmxlIiwiaXNEcmFnRGlzYWJsZWQiLCJ1c2VQb3J0YWwiLCJjaGlsZCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiU2Vjb25kYXJ5QnV0dG9uIiwicHVzaCIsIkJCb3hBbm5vdGF0b3IiLCJ1cmwiLCJib3JkZXJXaWR0aCIsInNlbGVjdGVkTGFiZWwiLCJoaWdobGlnaHRJbmRleCIsInBvaW50ZXIiLCJzZXRQb2ludGVyIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiZW50cmllcyIsInNldEVudHJpZXMiLCJlbnRyeSIsInciLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImgiLCJ5IiwieCIsImlzRXF1YWwiLCJzb3J0Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaW1hZ2VGcmFtZVN0eWxlIiwic2V0SW1hZ2VGcmFtZVN0eWxlIiwiYkJveEltYWdlUmVmIiwiaW1hZ2VFbGVtZW50Iiwic3JjIiwib25sb2FkIiwiYmFja2dyb3VuZEltYWdlU3JjIiwiY3JvcCIsInBhZ2VYIiwicGFnZVkiLCJNYXRoIiwibWluIiwibWF4Iiwicm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRXaWR0aCIsIl82IiwiXzciLCJvZmZzZXRIZWlnaHQiLCJfOCIsIl85IiwidXBkYXRlUmVjdGFuZ2xlIiwibW91c2VNb3ZlSGFuZGxlciIsIl8xMCIsIl8xMSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfMTIiLCJfMTMiLCJfMTQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiXzE1IiwibW91c2VEb3duSGFuZGxlciIsImJ1dHRvbiIsImN1cnJlbnRQb2ludGVyIiwiaGFzTW92ZWQiLCJfMTYiLCJfMTciLCJyZWN0YW5nbGUiLCJ4MSIsIngyIiwieTEiLCJ5MiIsInJlY3QiLCJib3hSZWYiLCJtb3VzZVVwSGFuZGxlciIsIl8xOCIsIl8xOSIsIl8yMCIsIl8yMSIsIl8yMiIsIl8yMyIsIm9uTW91c2VEb3duQ2FwdHVyZSIsIm9uTW91c2VNb3ZlQ2FwdHVyZSIsImRyYWdnYWJsZSIsImZsb2F0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJCQm94U2VsZWN0b3IiLCJwb2ludGVyRXZlbnRzIiwib3BhY2l0eSIsIkJsb2NrIiwiYmluYXJ5IiwiX2lkIiwiQ29udGVudCIsIkhlYWRlckNvbnRhaW5lciIsIlRhc2tSYWRpbyIsInJvdyIsInBhZGRpbmdUb3AiLCJJbWFnZVdyYXBwZXIiLCJzZXRPYmplY3RzIiwic2V0SGlnaGxpZ2h0SW5kZXgiLCJpbWFnZSIsInNldFNlbGVjdGVkTGFiZWwiLCJvbk1vdXNlRG93biIsImZpbHRlciIsIkNvbnRlbnRDb250YWluZXIiLCJEcmFnSGFuZGxlIiwiYWRkRHJhZ2dpbmdTdHlsZXMiLCJhZGQiLCJyZW1vdmVEcmFnZ2luZ1N0eWxlcyIsIm9uTW91c2VPdXQiLCJvbk1vdXNlVXAiLCJEYXRlQmxvY2siLCJyZWFkX29ubHkiLCJTdHlsZWRMaW5rIiwid2hpdGVTcGFjZSIsIndvcmRXcmFwIiwid29yZEJyZWFrIiwiaHJlZiIsIklGcmFtZSIsImVtYmVkIiwic291cmNlVXJsIiwiQnV0dG9uQmxvY2siLCJJdGVtIiwiYXNzaWduTmV4dEFuZEJhY2tWaXNpYmlsaXR5IiwiY3VycmVudElkeCIsImN1cnJlbnRUeXBlIiwibmV4dEJsb2NrSWQiLCJuZXh0QmxvY2tJbmRleCIsImlzTmV4dERpc2FibGVkIiwiaXNCYWNrRGlzYWJsZWQiLCJzZXRDdXJyZW50SWR4IiwiaGlzdG9yeSIsImN1cnJlbnRCbG9jayIsImxhc3RCbG9ja0lkIiwicG9wIiwibGFzdEJsb2NrSWR4IiwiZmluZEluZGV4IiwiY3VycmVudEJsb2NrTmFtZSIsImxvZ2ljX2p1bXAiLCJsb2dpY0Jsb2NrcyIsImhhbmRsZU5leHQiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJoYW5kbGVCYWNrIiwic3RhY2tlZElkIiwiUHJpbWFyeUJ1dHRvbiIsIlRhc2tDaGVja2JveCIsIlN0eWxlZEltZyIsImFsdCIsInRpdGxlIiwiY29udHJvbHMiLCJWaWRlb1BsYXllciIsInNob3ciLCJoaWRlT3ZlcmZsb3ciLCJwcmV2U291cmNlVXJsIiwidXNlUHJldmlvdXMiLCJzb3VyY2VzIiwiZWwiLCJwbGF5ZXIiLCJQbHlyIiwiZGVzdHJveSIsIk11bHRpQ2xhc3MiLCJlZGl0TW9kZSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJUZXh0V3JhcHBlciIsImhpZ2hsaWdodENvbG9yIiwiYWxsb3dfZWRpdHMiLCJhbGxvd0VkaXRzIiwiZW50aXRpZXMiLCJzZXRUZXh0Iiwic2V0VXNlclNlbGVjdCIsImRpc2FibGVTZWxlY3Rpb24iLCJzZXREaXNhYmxlU2VsZWN0aW9uIiwidG9nZ2xFZGl0TW9kZSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJyZW5kZXJUZXh0IiwidGV4dEZpZWxkTmFtZSIsInRleHRGaWVsZFZhbHVlIiwic2V0VGV4dEZpZWxkVmFsdWUiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZm9ybWF0RW50aXRpZXNGb3JVSVJlbmRlcmluZyIsImVudGl0aWVzSW5zdGFuY2UiLCJpdG0iLCJvcHRpb25OYW1lIiwiZmluZE9wdGlvbk5hbWVGcm9tSWQiLCJoYW5kbGVBbm5vdGF0ZSIsImlucHV0UmVmIiwiY3JlYXRlUmVmIiwiZGV0YWlsIiwic2V0UHJvcGVydHkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZEdhcCIsImdldFNlbGVjdGlvbiIsImVtcHR5IiwiVGV4dEFubm90YXRvciIsInBhZGRpbmdMZWZ0IiwiZ2V0U3BhbiIsInNwYW4iLCJoaWRlRm9jdXMiLCJOdW1iZXJCbG9jayIsIm51bWJlciIsInBkZiIsInJpY2hfdGV4dCIsInJpY2hUZXh0IiwiU3R5bGVkVGV4dCIsImRlY29yYXRvciIsInJlbCIsIkxpbmtpZnkiLCJjb21wb25lbnREZWNvcmF0b3IiLCJkZWxldGVfZGlzYWJsZWQiLCJlZGl0X2Rpc2FibGVkIiwib3JkZXJpbmdfZGlzYWJsZWQiLCJTZXF1ZW5jZSIsInNwbGl0V2l0aE9mZnNldHMiLCJvZmZzZXRzIiwibGFzdEVuZCIsInNwbGl0cyIsInNvcnRCeSIsIm8iLCJzdGFydCIsImVuZCIsIm1hcmsiLCJzcGxpdFRva2Vuc1dpdGhPZmZzZXRzIiwiam9pbiIsInNlbGVjdGlvbklzRW1wdHkiLCJzZWxlY3Rpb24iLCJhbmNob3JOb2RlIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJmb2N1c05vZGUiLCJmb2N1c09mZnNldCIsImFuY2hvck9mZnNldCIsInNlbGVjdGlvbklzQmFja3dhcmRzIiwiYmFja3dhcmQiLCJOb2RlIiwiRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HIiwiTWFyayIsIlNwbGl0IiwiaGFuZGxlTW91c2VVcCIsInBhcnNlSW50IiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImlzSW50ZWdlciIsImhhbmRsZVNwbGl0Q2xpY2siLCJzcGxpdEluZGV4IiwicyIsInNwbGl0IiwiZ2V0Q29sb3IiLCJpZGVudGlmaWVyIiwiQmFja2dyb3VuZENvbG9ycyIsImNvbG9yRnJvbVN0cmluZyIsInN0cmluZyIsImFicyIsInN0cmluZ1RvSGFzaCIsIl9pc0RyYWdnaW5nIiwiZHJhZ2dhYmxlU3R5bGUiLCJ0cmFuc2Zvcm0iLCJhY3RpdmVUcmFuc2Zvcm0iLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiaGFzaCIsImNociIsImNoYXJDb2RlQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLGlDQUFpQyxrQkFBa0IsZ0JBQWdCLDhCQUE4QixxQkFBcUIsR0FBRyx3RUFBd0UscUJBQXFCLDhCQUE4QixHQUFHLG9GQUFvRiw4QkFBOEIsR0FBRyxtQkFBbUIsNkJBQTZCLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLEdBQUcseUNBQXlDLDZCQUE2QixHQUFHO0FBQ3ZwQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1Qix1QkFBdUIsa0NBQWtDLEdBQUcsb0JBQW9CLCtCQUErQixtQ0FBbUMsR0FBRyxrQ0FBa0MsbUNB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QUssS0FBSzJDLFNBQWhDLEVBQTJDLE9BQU8sSUFBUDs7QUFDM0MsTUFBSXNMLEtBQUssQ0FBQ0MsT0FBTixDQUFjbE8sS0FBZCxLQUF3QixPQUFPQSxLQUFQLEtBQWlCLFFBQXpDLElBQXFELE9BQU9BLEtBQUssQ0FBQ2dVLE1BQWIsS0FBd0IsVUFBakYsRUFBNkY7QUFDM0YsV0FBTyxDQUFDaFUsS0FBSyxDQUFDc0UsTUFBZDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTkQ7O0FBUWVQLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUEsTUFBTW9nQixZQUFZLEdBQUlGLE1BQUQsSUFBWTtBQUMvQixNQUFJUyxJQUFJLEdBQUcsQ0FBWDtBQUFBLE1BQ0VyZ0IsQ0FERjtBQUFBLE1BRUVzZ0IsR0FGRjs7QUFHQSxPQUFLdGdCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzRmLE1BQU0sQ0FBQzNmLE1BQXZCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDc2dCLE9BQUcsR0FBR1YsTUFBTSxDQUFDVyxVQUFQLENBQWtCdmdCLENBQWxCLENBQU47QUFDQXFnQixRQUFJLEdBQUcsQ0FBQ0EsSUFBSSxJQUFJLENBQVQsSUFBY0EsSUFBZCxHQUFxQkMsR0FBNUI7QUFDQUQsUUFBSSxJQUFJLENBQVI7QUFDRDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0QsQ0FWRDs7QUFZZVAsMkVBQWYsRSIsImZpbGUiOiJRdWV1ZX5UYXNrUm9vdF9mNWE5YTlhYjgyYzU4MzhhM2UxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGwtY2FsZW5kYXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzY2NDhlZTtcXG4gIG9wYWNpdHk6IDAuMTU7XFxuICB6LWluZGV4OiAxMDsgKi9cXG4gIGZvbnQtZmFtaWx5OiAnTGFtYmRhcyc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZCwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjQ4ZWU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkOmhvdmVyLCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2ZGY0O1xcbn1cXG5cXG4uaGwtZGF5OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGY5O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbiB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1ncmlkLWxheW91dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMgZWFzZTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHRvcDtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5jc3NUcmFuc2Zvcm1zIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbS5yZXNpemluZyB7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBoZWlnaHQ7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nIHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICB6LWluZGV4OiAzO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5kcm9wcGluZyB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZ3JpZC1wbGFjZWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBvcGFjaXR5OiAwLjI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcXG4gIHotaW5kZXg6IDI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICByaWdodDogLTEwcHg7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucmVhY3QtcmVzaXphYmxlLWhpZGUgPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1yZXNpemFibGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBMklEWWlJSE4wZVd4bFBTSmlZV05yWjNKdmRXNWtMV052Ykc5eU9pTm1abVptWm1Zd01DSWdlRDBpTUhCNElpQjVQU0l3Y0hnaUlIZHBaSFJvUFNJMmNIZ2lJR2hsYVdkb2REMGlObkI0SWo0OFp5QnZjR0ZqYVhSNVBTSXdMak13TWlJK1BIQmhkR2dnWkQwaVRTQTJJRFlnVENBd0lEWWdUQ0F3SURRdU1pQk1JRFFnTkM0eUlFd2dOQzR5SURRdU1pQk1JRFF1TWlBd0lFd2dOaUF3SUV3Z05pQTJJRXdnTmlBMklGb2lJR1pwYkd3OUlpTXdNREF3TURBaUx6NDhMMmMrUEM5emRtYysnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcXG4gIHBhZGRpbmc6IDAgM3B4IDNweCAwO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zdyB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBzdy1yZXNpemU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNlIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW53IHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IG53LXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5lIHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBuZS1yZXNpemU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13LFxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWUge1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13IHtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbixcXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXMge1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1ncmlkLWl0ZW0ucmVhY3QtZ3JpZC1wbGFjZWhvbGRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY0OGVlO1xcbiAgb3BhY2l0eTogMC4xNTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ucmVhY3QtZHJhZ2dhYmxlLWRyYWdnaW5nLCAucmVhY3QtZHJhZ2dhYmxlLnJlc2l6aW5nIHtcXG4gIHotaW5kZXg6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtOmhvdmVyID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5jc3NUcmFuc2Zvcm1zIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XFxufVxcbi5hbmltYXRlZCAucmVhY3QtZ3JpZC1pdGVtLmNzc1RyYW5zZm9ybXMge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAnc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAnY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWR9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ2lucHV0JyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250U2l6ZTogMTUsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2Vycm9yID8gJyNmZmRhY2MnIDogUEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG59KVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuY29uc3QgTGFiZWxIZWxwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEyLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luTGVmdDogNlxufSlcblxuY29uc3QgSW5wdXRGaWVsZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgZXJyb3IsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBsYWJlbCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgIClcbiAgICAgICwgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTGlzdEZpbHRlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7bWF0Y2hTb3J0ZXJ9IGZyb20gJ21hdGNoLXNvcnRlcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4vSW5wdXRGaWVsZCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IDBweDtcbmBcblxuY29uc3QgTGlzdEZpbHRlciA9ICh7bGlzdCwgc2V0TGlzdCwga2V5c30pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZXJtID0gZS50YXJnZXQudmFsdWVcbiAgICBzZXRMaXN0KG1hdGNoU29ydGVyKGxpc3QsIHRlcm0sIHtrZXlzfSkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzV9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHsgcGxhY2Vob2xkZXI6IFwiRmlsdGVyXCIsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19IClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEZpbHRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTdHlsZWRFcnJvciA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRFcnJvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1RleHRBcmVhLnRzeFwiOy8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL3JlYWN0LXRleHRhcmVhLWF1dG9zaXplXG5pbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBTdHlsZWRFcnJvciBmcm9tICdjb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkVGV4dEFyZWEgPSBzdHlsZWQoVGV4dEFyZWEpKCh7ZXJyb3IsIGRpc2FibGVkLCByZWFkT25seSwgc2Nyb2xsYWJsZX0pID0+ICh7XG4gIGN1cnNvcjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyAnbm90LWFsbG93ZWQnIDogJ3RleHQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA9PT0gJ3RydWUnID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDE1LFxuICBvdmVyZmxvdzogc2Nyb2xsYWJsZSA/ICdhdXRvJyA6ICdoaWRkZW4nLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICAnOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiBlcnJvciA9PT0gJ3RydWUnID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSkpXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkxlZnQ6IDVcbn0pXG5cbmNvbnN0IExhYmVsSGVscGVyID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxMixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIG1hcmdpbkxlZnQ6IDZcbn0pXG5cbmNvbnN0IEJhc2ljVGV4dEFyZWEgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1pblJvd3MsXG4gICAgbWF4Um93cyxcbiAgICBlcnJvcixcbiAgICBtYXhMZW5ndGgsXG4gICAgbGFiZWwsXG4gICAgbmFtZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBjYWNoZU1lYXN1cmVtZW50cyxcbiAgICByZWFkT25seSxcbiAgICBwb3NpdGlvbkVycm9yQmVsb3csXG4gICAgc2Nyb2xsYWJsZVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgbGFiZWwgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk4fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsICFwb3NpdGlvbkVycm9yQmVsb3cgJiYgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDR9fSwgZXJyb3IpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dEFyZWEsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG1pblJvd3M6IG1pblJvd3MsXG4gICAgICAgIG1heFJvd3M6IG1heFJvd3MsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICBlcnJvcjogU3RyaW5nKEJvb2xlYW4oZXJyb3IpKSxcbiAgICAgICAgY2FjaGVNZWFzdXJlbWVudHM6IGNhY2hlTWVhc3VyZW1lbnRzLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDV9fVxuICAgICAgKVxuICAgICAgLCBwb3NpdGlvbkVycm9yQmVsb3cgJiYgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjR9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5CYXNpY1RleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb25FcnJvckJlbG93OiB0cnVlLFxuICBzY3JvbGxhYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY1RleHRBcmVhXG4iLCJleHBvcnQgY29uc3Qgc2VnbWVudFRyYWNrID0gYXN5bmMgKGV2ZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHthbmFseXRpY3N9ID0gd2luZG93IHx8IHVuZGVmaW5lZFxuICBpZiAoIWFuYWx5dGljcykgcmV0dXJuXG4gIGFuYWx5dGljcy50cmFjayhldmVudCwgcHJvcGVydGllcylcbn1cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BcHBIZWFkZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgaXNFbXB0eUFycmF5IGZyb20gJ3VuaXZlcnNhbC91dGlscy9pc0VtcHR5QXJyYXknXG5cbmV4cG9ydCBjb25zdCBBUFBfSEVBREVSX0hFSUdIVCA9IDUwXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nOiAnMCAyNXB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfTUFJTixcbiAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWV9ORVd9YCxcbiAgbWluSGVpZ2h0OiBBUFBfSEVBREVSX0hFSUdIVCxcbiAgbWluV2lkdGg6ICcxMDAlJ1xufSlcblxuY29uc3QgRmxleEl0ZW0gPSBzdHlsZWQuZGl2KChwcm9wKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmxleDogJzEgMSAwJyxcbiAgICB0ZXh0QWxpZ246IHByb3AuY2VudGVyID8gJ2NlbnRlcic6ICdpbmhlcml0JyBcbiAgfVxufSlcblxuY29uc3QgQXBwSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtsZWZ0QmFySXRlbXMsIHJpZ2h0QmFySXRlbXMsIG1pZEJhckl0ZW1zfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzZ9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZsZXhJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3fX0sIHJpZ2h0QmFySXRlbXMpXG4gICAgICAsICFpc0VtcHR5QXJyYXkocmlnaHRCYXJJdGVtcykgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4SXRlbSwgeyBjZW50ZXI6IHRydWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19LCBtaWRCYXJJdGVtcylcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4SXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOX19LCBsZWZ0QmFySXRlbXMpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0Jhc2ljVGV4dEFyZWEudHN4XCI7Ly8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemVcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBTdHlsZWRFcnJvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkVGV4dEFyZWEgPSBzdHlsZWQudGV4dGFyZWEoKHtkaXNhYmxlZCwgcmVhZE9ubHksIGVycm9yfSkgPT4gKHtcbiAgY3Vyc29yOiBkaXNhYmxlZCB8fCByZWFkT25seSA/ICdub3QtYWxsb3dlZCcgOiAnaW5wdXQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZvbnRTaXplOiAxNSxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGJvcmRlckNvbG9yOiAhcmVhZE9ubHkgJiYgUEFMRVRURS5CT1JERVJfSE9WRVJcbiAgfSxcbiAgJzphY3RpdmUsIDpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogIXJlYWRPbmx5ICYmIFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5jb25zdCBMYWJlbEhlbHBlciA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTIsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5MZWZ0OiA2XG59KVxuXG5jb25zdCBCYXNpY1RleHRBcmVhID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1pblJvd3MsXG4gICAgZXJyb3IsXG4gICAgaGlkZUVycm9yTWVzc2FnZSxcbiAgICBtYXhMZW5ndGgsXG4gICAgbGFiZWwsXG4gICAgbmFtZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICByZWFkT25seVxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIGxhYmVsICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5OH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk5fX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMH19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBlcnJvciAmJiAhaGlkZUVycm9yTWVzc2FnZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVycm9yLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNH19LCBlcnJvcilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUZXh0QXJlYSwge1xuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBtaW5Sb3dzOiBtaW5Sb3dzLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvbkJsdXI6IG9uQmx1cixcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlIHx8IFwiXCIsXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIGVycm9yOiBlcnJvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNX19XG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljVGV4dEFyZWFcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0NvbXBvbmVudC50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IEltYWdlIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9JbWFnZSdcbmltcG9ydCBOdW1iZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL051bWJlcidcbmltcG9ydCBUZXh0IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0J1xuaW1wb3J0IEVtYWlsIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9FbWFpbCdcbmltcG9ydCBMaW5rIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MaW5rJ1xuaW1wb3J0IE1lZGlhQmxvY2sgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL01lZGlhQmxvY2snXG5pbXBvcnQgQmluYXJ5IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9CaW5hcnknXG5pbXBvcnQgRW1iZWQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYmVkJ1xuaW1wb3J0IFBkZlJlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvUGRmUmVhZGVyJ1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvU2luZ2xlU2VsZWN0aW9uJ1xuaW1wb3J0IE5hbWVkRW50aXR5UmVjb2duaXRpb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL05hbWVkRW50aXR5UmVjb2duaXRpb24nXG5pbXBvcnQgTXVsdGlwbGVTZWxlY3Rpb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL011bHRpcGxlU2VsZWN0aW9uJ1xuaW1wb3J0IEZvcm1TZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRm9ybVNlcXVlbmNlJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9SaWNoVGV4dEVkaXRvcidcbmltcG9ydCBCb3VuZGluZ0JveGVzIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Cb3VuZGluZ0JveGVzJ1xuaW1wb3J0IFRleHRTZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvVGV4dFNlcXVlbmNlJ1xuaW1wb3J0IERhdGUgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0RhdGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQmxvY2tDb21wb25lbnQgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgc2V0RmllbGRWYWx1ZSxcbiAgICBpc0VkaXRpbmcsXG4gICAgaW5kZXgsXG4gICAgYmxvY2ssXG4gICAgb25EZWxldGUsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIGhhbmRsZUJsdXIsXG4gICAgb25FZGl0LFxuICAgIGVycm9yc1xuICB9ID0gcHJvcHMgfHwge31cbiAgbGV0IHJlbmRlckNtcFxuXG4gIHN3aXRjaCAoYmxvY2sudHlwZSkge1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkVNQUlMOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVtYWlsLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgZXJyb3I6IF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5lbWFpbF0pLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OVU1CRVI6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTnVtYmVyLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5MSU5LOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBlcnJvcjogX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIubGlua10pLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTR9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5JTUFHRTpcbiAgICAgIHJlbmRlckNtcCA9IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA5fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQVVESU86XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVkaWFCbG9jaywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIwfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVklERU86XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVkaWFCbG9jaywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQklOQVJZOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpbmFyeSwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hbWVkRW50aXR5UmVjb2duaXRpb24sIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBlcnJvcjogZXJyb3JzLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU2fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVM6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm91bmRpbmdCb3hlcywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRU1CRUQ6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1iZWQsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBlcnJvcjogZXJyb3JzLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg1fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuUERGOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBkZlJlYWRlciwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGVycm9yOiBlcnJvcnMsXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVNlbGVjdGlvbiwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTjpcbiAgICAgIHJlbmRlckNtcCA9IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aXBsZVNlbGVjdGlvbiwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0U6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybVNlcXVlbmNlLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5SSUNIX1RFWFQ6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRFZGl0b3IsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1NX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlRFWFRfU0VRVUVOQ0U6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFNlcXVlbmNlLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjh9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5EQVRFOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGUsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4Mn19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlbmRlckNtcCA9IG51bGxcbiAgfVxuICByZXR1cm4gcmVuZGVyQ21wXG59KVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0NvbXBvbmVudFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24nXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JMT0NLUyx9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyNXB4IDI1cHgnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgb3BhY2l0eTogMCxcbiAgdHJhbnNpdGlvbjogJ3Zpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4yNTBzIGxpbmVhcicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJy01cHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZvbnRTaXplOiAxOCxcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG59KVxuXG5jb25zdCBUeXBlSWNvbiA9IHN0eWxlZChTdHlsZWRJY29uKSh7XG4gIGNvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfR1JBWV9NSUQsXG4gIGN1cnNvcjogJ2RlZmF1bHQnXG59KVxuXG5jb25zdCBCbG9ja0hlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nLCBibG9ja1R5cGV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyfX1cbiAgICAgICwgaXNFZGl0aW5nICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDR9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IG9uRWRpdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIFwic2V0dGluZ3NcIilcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogb25EZWxldGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19LCBcImRlbGV0ZVwiKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX0sIF9vcHRpb25hbENoYWluKFtCTE9DS1MsICdhY2Nlc3MnLCBfID0+IF8uZmluZCwgJ2NhbGwnLCBfMiA9PiBfMihiID0+IGIudHlwZSA9PT0gYmxvY2tUeXBlKSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuaWNvbl0pKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0hlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEJsb2NrV3JhcHBlciA9IHN0eWxlZC5kaXYoKHt0eXBlLCBpbmRleH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYgIWltcG9ydGFudCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlN2U5ZWMnLFxuICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMDI1KSAwcHggMnB4IDRweCcsXG4gIHpJbmRleDogdHlwZSA9PT0gJ2RhdGUnID8gMTAgLSBpbmRleCA6IDFcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1dyYXBwZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9EYXRlUGlja2VyLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge3VzZUZpZWxkfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge2lzVmFsaWR9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IERhdGVQaWNrZXIsIHt9IGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9ibG9ja3MvQm9keUNvbnRhaW5lcidcbmltcG9ydCB7Z2V0RGlzcGxheUZvcm1hdH0gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuXG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcydcbmltcG9ydCAndW5pdmVyc2FsL3N0eWxlcy9jc3MvZGF0ZXBpY2tlci1vdmVycmlkZS5jc3MnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBTdHlsZWREYXRlUGlja2VyID0gc3R5bGVkKERhdGVQaWNrZXIpYFxuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG5gXG5cbmNvbnN0IERhdGVJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwgeyBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLCByZWY6IHJlZiwgLi4ucHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319IClcbn0pXG5cbmNvbnN0IEN1c3RvbURhdGVQaWNrZXIgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7bmFtZSwgcGxhY2Vob2xkZXIsIHJlYWRPbmx5LCB2YWx1ZSwgaXNUYXNrTWVudSwgZXJyb3J9ID0gcHJvcHNcbiAgY29uc3QgWywgLCB7c2V0VmFsdWV9XSA9IHVzZUZpZWxkKG5hbWUpXG5cbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAuLi4oaXNUYXNrTWVudSAmJiB7cGFkZGluZzogJzBweCd9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmF3ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsaWRDaGFycyA9IC9eXFxkezAsMn1bLi9dezAsMX1cXGR7MCwyfVsuL117MCwxfVxcZHswLDR9JC9cbiAgICBpZiAoIXZhbGlkQ2hhcnMudGVzdChldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQobmV3IERhdGUodmFsdWUpKSkge1xuICAgICAgc2V0VmFsdWUodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBpZiAoZGF0ZSAmJiBpc1ZhbGlkKGRhdGUpKSB7XG4gICAgICBzZXRWYWx1ZShkYXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZSgnJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwgeyBzdHlsZTogY29udGFpbmVyU3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRGF0ZVBpY2tlciwge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgIGN1c3RvbUlucHV0OiBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVJbnB1dCwgeyBlcnJvcjogZXJyb3IsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OX19ICksXG4gICAgICAgIHNlbGVjdGVkOiB2YWx1ZSAmJiBuZXcgRGF0ZSh2YWx1ZSksXG4gICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIGNhbGVuZGFyQ2xhc3NOYW1lOiBcImhsLWNhbGVuZGFyXCIsXG4gICAgICAgIGRheUNsYXNzTmFtZTogKCkgPT4gJ2hsLWRheScsXG4gICAgICAgIHNob3VsZENsb3NlT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICBvbkNoYW5nZVJhdzogaGFuZGxlQ2hhbmdlUmF3LFxuICAgICAgICBwbGFjZWhvbGRlclRleHQ6IGdldERpc3BsYXlGb3JtYXQocGxhY2Vob2xkZXIpLFxuICAgICAgICBkYXRlRm9ybWF0OiBcImRkL01NL3l5eXlcIixcbiAgICAgICAgZGlzYWJsZWQ6IHJlYWRPbmx5LFxuICAgICAgICBkaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY2fX1cbiAgICAgIClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURhdGVQaWNrZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWYsfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGUsIGNoaWxkcmVuLCBzdHlsZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCB0eXBlOiB0eXBlLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319XG4gICAgICAsIGNoaWxkcmVuXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUkdMLnRzeFwiO2ltcG9ydCBSZWFjdCwge30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UmVzcG9uc2l2ZSwgV2lkdGhQcm92aWRlcix9IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0J1xuXG5cbmltcG9ydCAndW5pdmVyc2FsL3N0eWxlcy9jc3MvcmVhY3QtZ3JpZC1sYXlvdXQuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZWFjdC1yZXNpemFibGUuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZ2wtb3ZlcmlkZS5jc3MnXG5cbmNvbnN0IFJHTFdpZHRoUHJvdmlkZXIgPSBXaWR0aFByb3ZpZGVyKFJlc3BvbnNpdmUpXG5leHBvcnQgY29uc3QgUkdMX0NPTFVNTlMgPSAyMFxuZXhwb3J0IGNvbnN0IFJHTF9ST1dTID0gNDBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSR0xDb250YWluZXIgPSBzdHlsZWQoUkdMV2lkdGhQcm92aWRlcikoe1xuICB3aWR0aDogJzEwMCUnLFxuICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNTBweCknLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOGZhJ1xufSlcblxuY29uc3QgUkdMV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdzY3JvbGwnXG59KVxuXG5jb25zdCBSR0wgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGlzRHJhZ2dhYmxlLFxuICAgIGlzRHJvcHBhYmxlLFxuICAgIGlzUmVzaXphYmxlLFxuICAgIG9uRHJhZ1N0YXJ0LFxuICAgIG9uRHJhZ1N0b3AsXG4gICAgb25Ecm9wLFxuICAgIG9uTGF5b3V0Q2hhbmdlLFxuICAgIGxheW91dHMsXG4gICAgZHJvcHBpbmdJdGVtXG4gIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUkdMV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUkdMQ29udGFpbmVyLCB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBhdXRvU2l6ZTogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHthbGw6IFJHTF9DT0xVTU5TfSxcbiAgICAgICAgY29sczoge2FsbDogUkdMX0NPTFVNTlN9LFxuICAgICAgICBjb21wYWN0VHlwZTogJ3ZlcnRpY2FsJyxcbiAgICAgICAgaXNEcmFnZ2FibGU6IGlzRHJhZ2dhYmxlLFxuICAgICAgICBpc0Ryb3BwYWJsZTogaXNEcm9wcGFibGUsXG4gICAgICAgIGlzQm91bmRlZDogdHJ1ZSxcbiAgICAgICAgZHJvcHBpbmdJdGVtOiBkcm9wcGluZ0l0ZW0sXG4gICAgICAgIGlzUmVzaXphYmxlOiBpc1Jlc2l6YWJsZSxcbiAgICAgICAgbGF5b3V0czoge2FsbDogbGF5b3V0c30sXG4gICAgICAgIG1lYXN1cmVCZWZvcmVNb3VudDogdHJ1ZSxcbiAgICAgICAgdXNlQ1NTVHJhbnNmb3JtczogdHJ1ZSxcbiAgICAgICAgcHJldmVudENvbGxpc2lvbjogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IFsxMCwgMTBdLFxuICAgICAgICBtYXJnaW46IFsxMCwgMTBdLFxuICAgICAgICBvbkRyYWdTdGFydDogb25EcmFnU3RhcnQsXG4gICAgICAgIG9uRHJhZ1N0b3A6IG9uRHJhZ1N0b3AsXG4gICAgICAgIG9uRHJvcDogb25Ecm9wLFxuICAgICAgICByb3dIZWlnaHQ6IFJHTF9ST1dTLFxuICAgICAgICBvbkxheW91dENoYW5nZTogb25MYXlvdXRDaGFuZ2UsXG4gICAgICAgIGRyYWdnYWJsZUhhbmRsZTogXCIuZHJhZy1oYW5kbGVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX1cbiAgICAgIFxuICAgICAgICAsIGNoaWxkcmVuXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJHTFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1RhZ2dhYmxlTGlzdFdyYXBwZXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge2Rhcmtlbn0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge2NvbG9yQnlJbmRleH0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldENvbG9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6ICcxOTVweCcsXG4gIG1pbldpZHRoOiAnMTk1cHgnLFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAnYXV0bydcbn0pXG5cbmNvbnN0IExpc3RMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgbWFyZ2luVG9wOiAnMjBweCdcbn0pXG5cbmNvbnN0IENhdGVnb3J5QnV0dG9uID0gc3R5bGVkLnNwYW4oKHthY3RpdmV9KSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgY2xlYXI6ICdib3RoJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgcGFkZGluZzogJzEwcHggMTBweCcsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBib3JkZXI6IGFjdGl2ZSA/ICcxcHggc29saWQgIzY2NDhFRSAhaW1wb3J0YW50JyA6ICcxcHggc29saWQgI0U4RUNFRScsXG4gIGJvcmRlclJhZGl1czogJzRweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAnOmhvdmVyJzoge1xuICAgIGJveFNoYWRvdzogJzBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMjQpJ1xuICB9XG59KSlcblxuY29uc3QgRW50aXR5VGV4dCA9IHN0eWxlZC5zcGFuYFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW5ib3R0b206IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHRhbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJveHNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyNCk7XG4gIGJvcmRlcnJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4ZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduaXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICY6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZWNlZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmBcblxuY29uc3QgQ29sb3JBcnRpZmFjdCA9IHN0eWxlZC5zcGFuKCh7Y29sb3J9KSA9PiAoe1xuICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHdpZHRoOiAnMjBweCcsXG4gIGhlaWdodDogJzIwcHgnLFxuICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtkYXJrZW4oMC4zLCBjb2xvcil9YFxufSkpXG5cbmNvbnN0IFRhZ2dhYmxlTGlzdFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge29wdGlvbnMsIHRleHQsIHNlbGVjdGVkQ2F0ZWdvcnksIG9uU2VsZWN0LCBkaXNhYmxlZCwgb2JqZWN0cywgb25Ib3Zlciwgb25DbGlja30gPSBwcm9wc1xuICBjb25zdCBnZXRPcHRpb25JbmRleCA9IChpZCkgPT4ge1xuICAgIGxldCBpbmRleFxuICAgIG9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgIGlmIChvcHRpb24uaWQgPT09IGlkKSB7XG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5kZXhcbiAgfVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwN319XG4gICAgICAgICwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhdGVnb3J5QnV0dG9uLCB7XG4gICAgICAgICAgICBrZXk6IG9wdGlvbkluZGV4LFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3Qoe3RhZzogb3B0aW9uLmlkLCBjb2xvcjogY29sb3JCeUluZGV4KG9wdGlvbkluZGV4KX0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYWN0aXZlOiAhZGlzYWJsZWQgJiYgc2VsZWN0ZWRDYXRlZ29yeS50YWcgPT09IG9wdGlvbi5pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwOX19XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sb3JBcnRpZmFjdCwgeyBjb2xvcjogY29sb3JCeUluZGV4KG9wdGlvbkluZGV4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOX19IClcbiAgICAgICAgICAgICwgb3B0aW9uLm5hbWVcbiAgICAgICAgICApXG4gICAgICAgICkpXG4gICAgICApXG5cbiAgICAgICwgQXJyYXkuaXNBcnJheSh0ZXh0KSAmJiB0ZXh0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyN319LCBcIkVudGl0aWVzXCIpXG4gICAgICAgICAgLCB0ZXh0Lm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVudGl0eVRleHQsIHsga2V5OiBrZXksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzB9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xvckFydGlmYWN0LCB7IGtleToga2V5LCBjb2xvcjogaXRlbS5jb2xvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19IClcbiAgICAgICAgICAgICAgICAsIGl0ZW0udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICAsIEFycmF5LmlzQXJyYXkob2JqZWN0cykgJiYgb2JqZWN0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0MH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fSwgXCJPYmplY3RzXCIpXG4gICAgICAgICAgLCBvYmplY3RzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaXRlbS5jYXRlZ29yeS5yZXBsYWNlKCdfJywgJyAnKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbnRpdHlUZXh0LCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkhvdmVyKGtleSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25Ib3ZlcihudWxsKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ1fX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbG9yQXJ0aWZhY3QsIHsga2V5OiBrZXksIGNvbG9yOiBjb2xvckJ5SW5kZXgoZ2V0T3B0aW9uSW5kZXgoaXRlbS5jYXRlZ29yeSkpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU3fX0gKVxuICAgICAgICAgICAgICAgICwgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSlcblxuICAgICAgICAgICAgICAgICwgIWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAnMTFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljayhrZXkpXG4gICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjF9fVxuICAgICAgICAgICAgICAgICAgLCBcImNsb3NlXCJcblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnZ2FibGVMaXN0V3JhcHBlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tDaGVja2JveC50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWwoKHtkaXNhYmxlZH0pID0+ICh7XG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBwYWRkaW5nOiAnMTBweCAxMHB4IDEwcHggNDVweCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIHRyYW5zaXRpb246ICcuM3MgZWFzZSBhbGwnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJjo6YmVmb3JlJzoge1xuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiAnMTBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnY2FsYyg1MCUgLSAxMHB4KScsXG4gICAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGJhY2tncm91bmQtY29sb3InXG4gIH0sXG4gICc6aG92ZXInOiB7XG4gICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4wNSknXG4gIH0sXG4gIG1pbkhlaWdodDogJzQxLjI1cHgnXG59KSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAmOmNoZWNrZWQgKyAke0xhYmVsfSB7XG4gICAgLyogYmFja2dyb3VuZDogJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9MSUdIVEVTVH07ICovXG4gICAgYm9yZGVyLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgfVxuICAmOmNoZWNrZWQgKyAke0xhYmVsfTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4YzNabklIZHBaSFJvUFNJeU5pSWdhR1ZwWjJoMFBTSXlNQ0lnZG1WeWMybHZiajBpTVM0eElpQjJhV1YzUW05NFBTSXlMakF5T1RZNElDMDBNQzR3T1RBeklESTJJREl3SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajQ4SVMwdFIyVnVaWEpoZEdWa0lHSjVJRWxLVTFaSElDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhV052Ym1waGNpOUpTbE5XUnlrdExUNDhjR0YwYUNCa1BTSk5NamN1T1RjME15d3RNell1TVRJM01tTXdMREF1TkRRMk5ESTRJQzB3TGpFMU5qSTFMREF1T0RJMU9Ea3pJQzB3TGpRMk9EYzFMREV1TVRNNE16bHNMVEV5TGpFeU1EVXNNVEl1TVRJd05Xd3RNaTR5TnpZM09Td3lMakkzTmpjNVl5MHdMak14TWpVc01DNHpNVEkxSUMwd0xqWTVNVGsyTkN3d0xqUTJPRGMxSUMweExqRXpPRE01TERBdU5EWTROelZqTFRBdU5EUTJOREk0TERBZ0xUQXVPREkxT0RrekxDMHdMakUxTmpJMUlDMHhMakV6T0RNNUxDMHdMalEyT0RjMWJDMHlMakkzTmpjNUxDMHlMakkzTmpjNWJDMDJMakEyTURJM0xDMDJMakEyTURJM1l5MHdMak14TWpVc0xUQXVNekV5TlNBdE1DNDBOamczTlN3dE1DNDJPVEU1TmpVZ0xUQXVORFk0TnpVc0xURXVNVE00TXpsak1Dd3RNQzQwTkRZME1qa2dNQzR4TlRZeU5Td3RNQzQ0TWpVNE9UTWdNQzQwTmpnM05Td3RNUzR4TXpnek9Xd3lMakkzTmpjNUxDMHlMakkzTmpjNVl6QXVNekV5TlN3dE1DNHpNVEkxSURBdU5qa3hPVFkxTEMwd0xqUTJPRGMxSURFdU1UTTRNemtzTFRBdU5EWTROelZqTUM0ME5EWTBNamtzTUNBd0xqZ3lOVGc1TXl3d0xqRTFOakkxSURFdU1UTTRNemtzTUM0ME5qZzNOV3cwTGpreU1UZzRMRFF1T1RNNE5qSnNNVEF1T1RneU1Td3RNVEF1T1RrNE9XTXdMak14TWpVc0xUQXVNekV5TlNBd0xqWTVNVGsyTkN3dE1DNDBOamczTlNBeExqRXpPRE01TEMwd0xqUTJPRGMxWXpBdU5EUTJOREk0TERBZ01DNDRNalU0T1RNc01DNHhOVFl5TlNBeExqRXpPRE01TERBdU5EWTROelZzTWk0eU56WTNPQ3d5TGpJM05qYzVZekF1TXpFeU5Td3dMak14TWpVZ01DNDBOamczTlN3d0xqWTVNVGsyTkNBd0xqUTJPRGMxTERFdU1UTTRNemxhSWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RFdU1EQXhPVGdwSWlCbWFXeHNQU0lqWm1abUlqNDhMM0JoZEdnK1BDOXpkbWMrJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5cHg7XG4gIH1cbmBcblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzB9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBkaXNhYmxlZDogZGlzYWJsZWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fSwgbGFiZWwpXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpby50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsKCh7ZGlzYWJsZWQsIG5vU2hhZG93fSkgPT4gKHtcbiAgLi4uKCFub1NoYWRvdyAmJiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICAgIGJveFNoYWRvdzogJzAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4wNSknXG4gICAgfVxuICB9KSxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogbm9TaGFkb3cgPyA0MDAgOiA1MDAsXG4gIHBhZGRpbmc6ICcxMHB4IDM1cHggMTBweCAzNXB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGFsbCcsXG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZDogUEFMRVRURS5CQUNLR1JPVU5EX01BSU4sXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiBub1NoYWRvdyA/ICcwcHgnIDogJzEwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJ2NhbGMoNTAlIC0gMTBweCknLFxuICAgIHRyYW5zaXRpb246ICcuM3MgZWFzZSBiYWNrZ3JvdW5kLWNvbG9yJ1xuICB9LFxuICBtaW5IZWlnaHQ6ICc0MS4yNXB4J1xufSkpXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9IHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0xJR0hURVNUfTsgKi9cbiAgICBib3JkZXItY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICB9XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhjM1puSUhkcFpIUm9QU0l5TmlJZ2FHVnBaMmgwUFNJeU1DSWdkbVZ5YzJsdmJqMGlNUzR4SWlCMmFXVjNRbTk0UFNJeUxqQXlPVFk0SUMwME1DNHdPVEF6SURJMklESXdJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNDhJUzB0UjJWdVpYSmhkR1ZrSUdKNUlFbEtVMVpISUNob2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFXTnZibXBoY2k5SlNsTldSeWt0TFQ0OGNHRjBhQ0JrUFNKTk1qY3VPVGMwTXl3dE16WXVNVEkzTW1Nd0xEQXVORFEyTkRJNElDMHdMakUxTmpJMUxEQXVPREkxT0RreklDMHdMalEyT0RjMUxERXVNVE00TXpsc0xURXlMakV5TURVc01USXVNVEl3Tld3dE1pNHlOelkzT1N3eUxqSTNOamM1WXkwd0xqTXhNalVzTUM0ek1USTFJQzB3TGpZNU1UazJOQ3d3TGpRMk9EYzFJQzB4TGpFek9ETTVMREF1TkRZNE56VmpMVEF1TkRRMk5ESTRMREFnTFRBdU9ESTFPRGt6TEMwd0xqRTFOakkxSUMweExqRXpPRE01TEMwd0xqUTJPRGMxYkMweUxqSTNOamM1TEMweUxqSTNOamM1YkMwMkxqQTJNREkzTEMwMkxqQTJNREkzWXkwd0xqTXhNalVzTFRBdU16RXlOU0F0TUM0ME5qZzNOU3d0TUM0Mk9URTVOalVnTFRBdU5EWTROelVzTFRFdU1UTTRNemxqTUN3dE1DNDBORFkwTWprZ01DNHhOVFl5TlN3dE1DNDRNalU0T1RNZ01DNDBOamczTlN3dE1TNHhNemd6T1d3eUxqSTNOamM1TEMweUxqSTNOamM1WXpBdU16RXlOU3d0TUM0ek1USTFJREF1TmpreE9UWTFMQzB3TGpRMk9EYzFJREV1TVRNNE16a3NMVEF1TkRZNE56VmpNQzQwTkRZME1qa3NNQ0F3TGpneU5UZzVNeXd3TGpFMU5qSTFJREV1TVRNNE16a3NNQzQwTmpnM05XdzBMamt5TVRnNExEUXVPVE00TmpKc01UQXVPVGd5TVN3dE1UQXVPVGs0T1dNd0xqTXhNalVzTFRBdU16RXlOU0F3TGpZNU1UazJOQ3d0TUM0ME5qZzNOU0F4TGpFek9ETTVMQzB3TGpRMk9EYzFZekF1TkRRMk5ESTRMREFnTUM0NE1qVTRPVE1zTUM0eE5UWXlOU0F4TGpFek9ETTVMREF1TkRZNE56VnNNaTR5TnpZM09Dd3lMakkzTmpjNVl6QXVNekV5TlN3d0xqTXhNalVnTUM0ME5qZzNOU3d3TGpZNU1UazJOQ0F3TGpRMk9EYzFMREV1TVRNNE16bGFJaUIwY21GdWMyWnZjbTA5SW5OallXeGxLREV1TURBeE9UZ3BJaUJtYVd4c1BTSWpabVptSWo0OEwzQmhkR2crUEM5emRtYysnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDlweDtcbiAgfVxuYFxuXG5jb25zdCBSYWRpbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWUsIG5vU2hhZG93fSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBjaGVja2VkOiAhIWNoZWNrZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBkaXNhYmxlZDogZGlzYWJsZWQsIG5vU2hhZG93OiBub1NoYWRvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4M319LCBsYWJlbClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0RWRpdG9yLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgbWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciwge30gZnJvbSAncmVhY3QtcnRlJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9ibG9ja3MvQm9keUNvbnRhaW5lcidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkVGV4dEVkaXRvciA9IHN0eWxlZChSaWNoVGV4dEVkaXRvcilgXG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgJiAud3lzaXd5Zy1idG4ge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAkeyh7aXNUYXNrTWVudSwgcmVhZE9ubHl9KSA9PlxuICAgICFpc1Rhc2tNZW51ICYmIHJlYWRPbmx5XG4gICAgICA/IGBcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5gXG4gICAgICA6IGBgfVxuICAkeyh7aXNUYXNrTWVudSwgZXJyb3J9KSA9PlxuICAgIGlzVGFza01lbnVcbiAgICAgID8gYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgJiAudGV4dC1lZGl0b3ItYm9keSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgICYgLnRleHQtZWRpdG9yLXRvb29sYmFyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDdweDtcbiAgICB9XG4gICAgJiA6YWN0aXZlLCA6Zm9jdXMsIDpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIH1cbiAgICAmIC5EcmFmdEVkaXRvci1lZGl0b3JDb250YWluZXIge1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYgLnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLXJvb3Qge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICBgXG4gICAgICA6IGBgfVxuYFxuXG5jb25zdCB0b29sYmFyQ29uZmlnID0ge1xuICBkaXNwbGF5OiBbXG4gICAgJ0lOTElORV9TVFlMRV9CVVRUT05TJyxcbiAgICAnQkxPQ0tfVFlQRV9CVVRUT05TJyxcbiAgICAnTElOS19CVVRUT05TJyxcbiAgICAnQkxPQ0tfVFlQRV9EUk9QRE9XTicsXG4gICAgJ0hJU1RPUllfQlVUVE9OUydcbiAgXSxcbiAgSU5MSU5FX1NUWUxFX0JVVFRPTlM6IFtcbiAgICB7bGFiZWw6ICdCb2xkJywgc3R5bGU6ICdCT0xEJywgY2xhc3NOYW1lOiAnd3lzaXd5Zy1idG4nfSxcbiAgICB7bGFiZWw6ICdJdGFsaWMnLCBzdHlsZTogJ0lUQUxJQycsIGNsYXNzTmFtZTogJ3d5c2l3eWctYnRuJ30sXG4gICAge2xhYmVsOiAnVW5kZXJsaW5lJywgc3R5bGU6ICdVTkRFUkxJTkUnLCBjbGFzc05hbWU6ICd3eXNpd3lnLWJ0bid9XG4gIF0sXG4gIEJMT0NLX1RZUEVfRFJPUERPV046IFtcbiAgICB7bGFiZWw6ICdOb3JtYWwnLCBzdHlsZTogJ3Vuc3R5bGVkJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyBMYXJnZScsIHN0eWxlOiAnaGVhZGVyLW9uZSd9LFxuICAgIHtsYWJlbDogJ0hlYWRpbmcgTWVkaXVtJywgc3R5bGU6ICdoZWFkZXItdHdvJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyBTbWFsbCcsIHN0eWxlOiAnaGVhZGVyLXRocmVlJ31cbiAgXSxcbiAgQkxPQ0tfVFlQRV9CVVRUT05TOiBbXG4gICAge2xhYmVsOiAnVUwnLCBzdHlsZTogJ3Vub3JkZXJlZC1saXN0LWl0ZW0nLCBjbGFzc05hbWU6ICd3eXNpd3lnLWJ0bid9LFxuICAgIHtsYWJlbDogJ09MJywgc3R5bGU6ICdvcmRlcmVkLWxpc3QtaXRlbScsIGNsYXNzTmFtZTogJ3d5c2l3eWctYnRuJ31cbiAgXVxufVxuXG5jb25zdCBlZGl0b3JUZXh0ID0gUmljaFRleHRFZGl0b3IuY3JlYXRlVmFsdWVGcm9tU3RyaW5nKCcnLCAnaHRtbCcpXG5cbmNvbnN0IFRleHRFZGl0b3IgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7bmFtZSwgcGxhY2Vob2xkZXIsIHZhbHVlLCBmb3JtYXQsIHJlYWRPbmx5LCBzZXRGaWVsZFZhbHVlLCBpc1Rhc2tNZW51fSA9IHByb3BzXG4gIGNvbnN0IHJlbmRlclZhbHVlID0gdmFsdWVcblxuICBjb25zdCBlZGl0b3JWYWx1ZUZyb21Qcm9wcyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmIChmb3JtYXQgJiYgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIGZvcm1hdF1cbiAgICB9XG4gICAgcmV0dXJuIFsnJywgJ2h0bWwnXVxuICB9XG5cbiAgY29uc3QgW2VkaXRvclZhbHVlLCBzZXRFZGl0b3JWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBlZGl0b3JUZXh0LnNldENvbnRlbnRGcm9tU3RyaW5nKC4uLmVkaXRvclZhbHVlRnJvbVByb3BzKHJlbmRlclZhbHVlKSlcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUVkaXRvckNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldEVkaXRvclZhbHVlKHZhbHVlKVxuICB9XG5cbiAgY29uc3QgZGlkTW91bnRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpZE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldEVkaXRvclZhbHVlKGVkaXRvclRleHQuc2V0Q29udGVudEZyb21TdHJpbmcoLi4uZWRpdG9yVmFsdWVGcm9tUHJvcHMocmVuZGVyVmFsdWUpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGlkTW91bnRSZWYuY3VycmVudCA9IHRydWVcbiAgICB9XG4gIH0sIFtyZW5kZXJWYWx1ZSwgZWRpdG9yVGV4dF0pXG5cbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAuLi4oaXNUYXNrTWVudSAmJiB7cGFkZGluZzogJzBweCd9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHsgc3R5bGU6IGNvbnRhaW5lclN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUZXh0RWRpdG9yLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWVkaXRvclwiLFxuICAgICAgICBpc1Rhc2tNZW51OiBpc1Rhc2tNZW51LFxuICAgICAgICB0b29sYmFyQ29uZmlnOiB0b29sYmFyQ29uZmlnLFxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lOiBcInRleHQtZWRpdG9yLXRvb29sYmFyXCIsXG4gICAgICAgIGVkaXRvckNsYXNzTmFtZTogXCJ0ZXh0LWVkaXRvci1ib2R5XCIsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHZhbHVlOiBlZGl0b3JWYWx1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVFZGl0b3JDaGFuZ2UsXG4gICAgICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZWRpdG9yVmFsdWUudG9TdHJpbmcoZm9ybWF0KSlcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNH19XG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RWRpdG9yXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvVGV4dFNlcXVlbmNlLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RmllbGRBcnJheX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1RleHRBcmVhJ1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TZWNvbmRhcnlCdXR0b24nXG5pbXBvcnQgUm9vdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Sb290QnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IGdldEl0ZW1TdHlsZSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SXRlbVN0eWxlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBwb3J0YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5pZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdib2R5IG5vdCByZWFkeSBmb3IgcG9ydGFsIGNyZWF0aW9uIScpXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9ydGFsKVxuXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKFJvb3RCdXR0b24pKHtcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG59KVxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBtYXJnaW5Cb3R0b206IDIuNSxcbiAgbWFyZ2luVG9wOiAyLjUsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZChGaWVsZFdyYXBwZXIpYFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgJHsoe2lzVGFzaywgb3JkZXJpbmdEaXNhYmxlZCwgZGVsZXRlRGlzYWJsZWR9KSA9PlxuICAgIGlzVGFzayAmJiAhb3JkZXJpbmdEaXNhYmxlZCAmJiAhZGVsZXRlRGlzYWJsZWRcbiAgICAgID8gYFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICAmLmZvY3VzZWQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgfVxuYFxuICAgICAgOiBgYH1cblxuICAkeyh7aXNFZGl0aW5nfSkgPT5cbiAgICBpc0VkaXRpbmdcbiAgICAgID8gYFxuICAmLmZvY3VzZWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgfVxuYFxuICAgICAgOiBgYH1cbiAgJHsoe2lzVGFzaywgb3JkZXJpbmdEaXNhYmxlZCwgZGVsZXRlRGlzYWJsZWR9KSA9PlxuICAgIGlzVGFzayAmJiBvcmRlcmluZ0Rpc2FibGVkICYmICFkZWxldGVEaXNhYmxlZFxuICAgICAgPyBgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgICBncmlkLWdhcDogMTBweDtcbiAgYFxuICAgICAgOiBgYH1cblxuICAkeyh7aXNUYXNrLCBkZWxldGVEaXNhYmxlZCwgb3JkZXJpbmdEaXNhYmxlZH0pID0+XG4gICAgaXNUYXNrICYmIGRlbGV0ZURpc2FibGVkICYmICFvcmRlcmluZ0Rpc2FibGVkXG4gICAgICA/IGBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG5gXG4gICAgICA6IGBgfVxuICAkeyh7aXNBdWRpdHN9KSA9PlxuICAgIGlzQXVkaXRzXG4gICAgICA/IGBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgYFxuICAgICAgOiBgYH1cbmBcblxuY29uc3QgQ29udGVudEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIHBhZGRpbmc6ICc1cHggMCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn0pXG5cbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7KHtpc1Rhc2ssIG9yZGVyaW5nRGlzYWJsZWQsIGRlbGV0ZURpc2FibGVkfSkgPT5cbiAgICBpc1Rhc2sgJiYgIW9yZGVyaW5nRGlzYWJsZWQgJiYgIWRlbGV0ZURpc2FibGVkXG4gICAgICA/IGBcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYFxuICAgICAgOiBgYH1cblxuICAkeyh7aXNUYXNrLCBkZWxldGVEaXNhYmxlZCwgb3JkZXJpbmdEaXNhYmxlZH0pID0+XG4gICAgaXNUYXNrICYmIGRlbGV0ZURpc2FibGVkICYmIG9yZGVyaW5nRGlzYWJsZWRcbiAgICAgID8gYFxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBgXG4gICAgICA6IGBgfVxuXG4gICR7KHtpc0VkaXRpbmcsIGRlbGV0ZURpc2FibGVkfSkgPT5cbiAgICBpc0VkaXRpbmcgJiYgIWRlbGV0ZURpc2FibGVkXG4gICAgICA/IGBcbiAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICR7Q29udGVudFdyYXBwZXJ9OmhvdmVyICYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAmLmZvY3VzZWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBgXG4gICAgICA6IGBgfVxuYFxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuICAkeyh7aXNUYXNrLCBvcmRlcmluZ0Rpc2FibGVkfSkgPT5cbiAgICBpc1Rhc2sgJiYgIW9yZGVyaW5nRGlzYWJsZWRcbiAgICAgID8gYFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAmLmZvY3VzZWQge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gICAgJHtDb250ZW50V3JhcHBlcn06aG92ZXIgJiB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgYFxuICAgICAgOiBgYH1cbiAgJHsoe2lzVGFzaywgb3JkZXJpbmdEaXNhYmxlZH0pID0+XG4gICAgaXNUYXNrICYmIG9yZGVyaW5nRGlzYWJsZWRcbiAgICAgID8gYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGBcbiAgICAgIDogYGB9XG4gICR7KHtpc0VkaXRpbmd9KSA9PlxuICAgIGlzRWRpdGluZ1xuICAgICAgPyBgXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgJi5mb2N1c2VkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgICR7Q29udGVudFdyYXBwZXJ9OmhvdmVyICYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gICAgICA6IGBgfVxuYFxuXG5jb25zdCBCbG9ja0lucHV0ID0gKHtcbiAgcHJvdmlkZWQsXG4gIHNuYXBzaG90LFxuICBzZXFJZHgsXG4gIGRhdGEsXG4gIGluZGV4LFxuICB0eXBlLFxuICBzZXRGaWVsZFZhbHVlLFxuICB0YXJnZXROYW1lLFxuICBwbGFjZWhvbGRlcixcbiAgaXNBdWRpdHMsXG4gIGFycmF5SGVscGVycyxcbiAgaXNFZGl0aW5nLFxuICBzZXR0aW5nc1xufSkgPT4ge1xuICBjb25zdCBzZXRGb2N1c1N0eWxlcyA9IChlbGVtZW50cywgYWN0aW9uKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIF9vcHRpb25hbENoYWluKFtlbGVtZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5jbGFzc0xpc3QsICdhY2Nlc3MnLCBfMyA9PiBfM1thY3Rpb25dLCAnY2FsbCcsIF80ID0+IF80KCdmb2N1c2VkJyldKVxuICAgIH0pXG4gIH1cbiAgY29uc3QgaXNUYXNrID0gIWlzRWRpdGluZyAmJiAhaXNBdWRpdHNcbiAgY29uc3Qgc2hvd0RlbGV0ZSA9IGlzQXVkaXRzID8gZmFsc2UgOiAhc2V0dGluZ3MuZGVsZXRlRGlzYWJsZWRcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge1xuICAgICAgLi4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMsXG4gICAgICByZWY6IHByb3ZpZGVkLmlubmVyUmVmLFxuICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDF9fVxuICAgIFxuICAgICAgLCBkYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7XG4gICAgICAgICAgaWQ6IGBjb250ZW50LXdyYXBwZXItJHtzZXFJZHh9YCxcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaXNUYXNrOiBpc1Rhc2ssXG4gICAgICAgICAgb3JkZXJpbmdEaXNhYmxlZDogc2V0dGluZ3Mub3JkZXJpbmdEaXNhYmxlZCxcbiAgICAgICAgICBkZWxldGVEaXNhYmxlZDogc2V0dGluZ3MuZGVsZXRlRGlzYWJsZWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDd9fVxuICAgICAgICBcbiAgICAgICAgICAsIGlzVGFzayAmJiAhc2V0dGluZ3Mub3JkZXJpbmdEaXNhYmxlZCA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge1xuICAgICAgICAgICAgICAuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHMsXG4gICAgICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgICAgIGlzVGFzazogaXNUYXNrLFxuICAgICAgICAgICAgICBpZDogYGRyYWctaWNvbi0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgICBvcmRlcmluZ0Rpc2FibGVkOiBzZXR0aW5ncy5vcmRlcmluZ0Rpc2FibGVkLFxuICAgICAgICAgICAgICBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNn19XG4gICAgICAgICAgICAsIFwiZHJhZ19pbmRpY2F0b3JcIlxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0V3JhcHBlciwge1xuICAgICAgICAgICAgaWQ6IGBpbnB1dC13cmFwcGVyLSR7c2VxSWR4fWAsXG4gICAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICAgIGlzVGFzazogaXNUYXNrLFxuICAgICAgICAgICAgb3JkZXJpbmdEaXNhYmxlZDogc2V0dGluZ3Mub3JkZXJpbmdEaXNhYmxlZCxcbiAgICAgICAgICAgIGRlbGV0ZURpc2FibGVkOiBzZXR0aW5ncy5kZWxldGVEaXNhYmxlZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzMX19XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFyZWEsIHtcbiAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLnZhbHVlWyR7c2VxSWR4fV1gLFxuICAgICAgICAgICAgICBjYWNoZU1lYXN1cmVtZW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIG9uRm9jdXM6ICgpID0+XG4gICAgICAgICAgICAgICAgc2V0Rm9jdXNTdHlsZXMoXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGBjb250ZW50LXdyYXBwZXItJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICAgICAgYGRyYWctaWNvbi0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgICAgICAgICBgY2xvc2UtaWNvbi0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgICAgICAgICBgaW5wdXQtd3JhcHBlci0ke3NlcUlkeH1gXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgJ2FkZCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgb25CbHVyOiAoKSA9PlxuICAgICAgICAgICAgICAgIHNldEZvY3VzU3R5bGVzKFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBgY29udGVudC13cmFwcGVyLSR7c2VxSWR4fWAsXG4gICAgICAgICAgICAgICAgICAgIGBkcmFnLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICAgICAgYGNsb3NlLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICAgICAgYGlucHV0LXdyYXBwZXItJHtzZXFJZHh9YFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICdyZW1vdmUnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgIG9uS2V5RG93bjogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKGAke3RhcmdldE5hbWV9WyR7c2VxSWR4fV1gLCB2YWx1ZSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbc2VxSWR4XSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF9vcHRpb25hbENoYWluKFtwbGFjZWhvbGRlciwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzVbc2VxSWR4XV0pIHx8ICdUZXh0JyxcbiAgICAgICAgICAgICAgcmVhZE9ubHk6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogc2V0dGluZ3MuZWRpdERpc2FibGVkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM5fX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBzaG93RGVsZXRlICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwge1xuICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGFycmF5SGVscGVycy5yZW1vdmUoc2VxSWR4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4MX19XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtcbiAgICAgICAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgICAgICAgZGVsZXRlRGlzYWJsZWQ6IHNldHRpbmdzLmRlbGV0ZURpc2FibGVkLFxuICAgICAgICAgICAgICAgIGlkOiBgY2xvc2UtaWNvbi0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7Zm9udFNpemU6IDE1LCBjb2xvcjogUEFMRVRURS5URVhUX01BSU59LFxuICAgICAgICAgICAgICAgIGlzVGFzazogaXNUYXNrLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjg2fX1cbiAgICAgICAgICAgICAgLCBcImNsb3NlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IFRleHRTZXF1ZW5jZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBkYXRhLFxuICAgIGluZGV4LFxuICAgIGlzRWRpdGluZyxcbiAgICB0eXBlLFxuICAgIGlzQXVkaXRzLFxuICAgIHRhcmdldE5hbWUsXG4gICAgc2V0RmllbGRWYWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBzZXR0aW5nc1xuICB9ID0gcHJvcHNcbiAgY29uc3Qgb25EcmFnRW5kID0gdXNlQ2FsbGJhY2soXG4gICAgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3Qge2Rlc3RpbmF0aW9uLCBzb3VyY2UsIGRyYWdnYWJsZUlkfSA9IHJlc3VsdFxuICAgICAgaWYgKFxuICAgICAgICAhZGVzdGluYXRpb24gfHxcbiAgICAgICAgKGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiYgZGVzdGluYXRpb24uaW5kZXggPT09IHNvdXJjZS5pbmRleClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hhbmdlZEl0ZW0gPSBkYXRhW2RyYWdnYWJsZUlkXVxuXG4gICAgICBjb25zdCBuZXdMaXN0ID0gZGF0YVxuICAgICAgbmV3TGlzdC5zcGxpY2Uoc291cmNlLmluZGV4LCAxKVxuICAgICAgbmV3TGlzdC5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGNoYW5nZWRJdGVtKVxuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0udmFsdWVgLCBuZXdMaXN0KVxuICAgIH0sXG4gICAgW2RhdGEsIGluZGV4XVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICByZW5kZXI6IChhcnJheUhlbHBlcnMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0Mn19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcHBhYmxlLCB7IGRyb3BwYWJsZUlkOiBcImRyb3BhYmxlLWxpc3RcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0M319XG4gICAgICAgICAgICAgICwgKHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wcywgcmVmOiBwcm92aWRlZC5pbm5lclJlZiwgc3R5bGU6IHt3aWR0aDogJzEwMCUnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0NX19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0Nn19XG4gICAgICAgICAgICAgICAgICAgICwgQXJyYXkuaXNBcnJheShkYXRhKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChfLCBzZXFJZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhZ2dhYmxlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBzZXFJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlSWQ6IFN0cmluZyhzZXFJZHgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ0Rpc2FibGVkOiBpc0VkaXRpbmcgfHwgaXNBdWRpdHMgfHwgc2V0dGluZ3Mub3JkZXJpbmdEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc2VxSWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCAocHJvdmlkZWQsIHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VQb3J0YWwgPSBzbmFwc2hvdC5pc0RyYWdnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0lucHV0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZWQ6IHByb3ZpZGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXFJZHg6IHNlcUlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogdGFyZ2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBzZXR0aW5ncywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1OX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlUG9ydGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkLCBwb3J0YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgcHJvdmlkZWQucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg2fX1cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzIHx8IHNldHRpbmdzLmVkaXREaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaCgnJylcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg3fX1cbiAgICAgICAgICAgICAgICAgICAgLCBcIkFkZCBJdGVtXCJcblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM4fX1cbiAgICApXG4gIClcbn1cblxuVGV4dFNlcXVlbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2V0dGluZ3M6IHtcbiAgICBkZWxldGVEaXNhYmxlZDogZmFsc2UsXG4gICAgZWRpdERpc2FibGVkOiBmYWxzZSxcbiAgICBvcmRlcmluZ0Rpc2FibGVkOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRTZXF1ZW5jZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jib3gtYW5ub3RhdG9yL0JCb3hBbm5vdGF0b3IudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgQkJveFNlbGVjdG9yIGZyb20gJy4vQkJveFNlbGVjdG9yJ1xuaW1wb3J0IHtjb2xvckJ5SW5kZXh9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEJCb3hBbm5vdGF0b3IgPSAoe1xuICB1cmwsXG4gIGJvcmRlcldpZHRoID0gMixcbiAgc2VsZWN0ZWRMYWJlbCxcbiAgb25DaGFuZ2UsXG4gIG9iamVjdHMsXG4gIGRpc2FibGVkLFxuICBoaWdobGlnaHRJbmRleFxufSkgPT4ge1xuICBjb25zdCBbcG9pbnRlciwgc2V0UG9pbnRlcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2VudHJpZXMsIHNldEVudHJpZXNdID0gdXNlU3RhdGUob2JqZWN0cylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG9uQ2hhbmdlKFxuICAgICAgZW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICB3OiArcGFyc2VGbG9hdChlbnRyeS53KS50b0ZpeGVkKDIpLFxuICAgICAgICBoOiArcGFyc2VGbG9hdChlbnRyeS5oKS50b0ZpeGVkKDIpLFxuICAgICAgICB5OiArcGFyc2VGbG9hdChlbnRyeS55KS50b0ZpeGVkKDIpLFxuICAgICAgICB4OiArcGFyc2VGbG9hdChlbnRyeS54KS50b0ZpeGVkKDIpLFxuICAgICAgICBjYXRlZ29yeTogZW50cnkuY2F0ZWdvcnksXG4gICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvclxuICAgICAgfSkpXG4gICAgKVxuICB9LCBbZW50cmllc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KG9iamVjdHMpICYmXG4gICAgICBBcnJheS5pc0FycmF5KGVudHJpZXMpICYmXG4gICAgICAhXy5pc0VxdWFsKG9iamVjdHMuc29ydCgpLCBlbnRyaWVzLnNvcnQoKSlcbiAgICApIHtcbiAgICAgIHNldEVudHJpZXMob2JqZWN0cylcbiAgICB9XG4gIH0sIFtvYmplY3RzXSlcblxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ2ZyZWUnKVxuICBjb25zdCBbaW1hZ2VGcmFtZVN0eWxlLCBzZXRJbWFnZUZyYW1lU3R5bGVdID0gdXNlU3RhdGVcblxuXG5cbih7fSlcblxuICBjb25zdCBiQm94SW1hZ2VSZWYgPSB1c2VSZWYobnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB1cmxcbiAgICBpbWFnZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSBpbWFnZUVsZW1lbnQud2lkdGhcbiAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlRWxlbWVudC5oZWlnaHRcbiAgICAgIHNldEltYWdlRnJhbWVTdHlsZSh7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZVNyYzogaW1hZ2VFbGVtZW50LnNyYyxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtiQm94SW1hZ2VSZWYsIHVybF0pXG5cbiAgY29uc3QgY3JvcCA9IChwYWdlWCwgcGFnZVkpID0+IHtcbiAgICBjb25zdCB4ID1cbiAgICAgIGJCb3hJbWFnZVJlZi5jdXJyZW50ICYmIGltYWdlRnJhbWVTdHlsZS53aWR0aFxuICAgICAgICA/IChNYXRoLm1pbihcbiAgICAgICAgICAgIE1hdGgubWF4KE1hdGgucm91bmQocGFnZVggLSBiQm94SW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54KSwgMCksXG4gICAgICAgICAgICBfb3B0aW9uYWxDaGFpbihbYkJveEltYWdlUmVmLCAnYWNjZXNzJywgXzIgPT4gXzIuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMub2Zmc2V0V2lkdGhdKVxuICAgICAgICAgICkgL1xuICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2JCb3hJbWFnZVJlZiwgJ2FjY2VzcycsIF80ID0+IF80LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81Lm9mZnNldFdpZHRoXSkpICpcbiAgICAgICAgICAxMDBcbiAgICAgICAgOiAwXG5cbiAgICBjb25zdCB5ID1cbiAgICAgIGJCb3hJbWFnZVJlZi5jdXJyZW50ICYmIGltYWdlRnJhbWVTdHlsZS5oZWlnaHRcbiAgICAgICAgPyAoTWF0aC5taW4oXG4gICAgICAgICAgICBNYXRoLm1heChNYXRoLnJvdW5kKHBhZ2VZIC0gYkJveEltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSksIDApLFxuICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2JCb3hJbWFnZVJlZiwgJ2FjY2VzcycsIF82ID0+IF82LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF83ID0+IF83Lm9mZnNldEhlaWdodF0pXG4gICAgICAgICAgKSAvXG4gICAgICAgICAgICBfb3B0aW9uYWxDaGFpbihbYkJveEltYWdlUmVmLCAnYWNjZXNzJywgXzggPT4gXzguY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzkgPT4gXzkub2Zmc2V0SGVpZ2h0XSkpICpcbiAgICAgICAgICAxMDBcbiAgICAgICAgOiAwXG5cbiAgICByZXR1cm4ge3gsIHl9XG4gIH1cbiAgY29uc3QgdXBkYXRlUmVjdGFuZ2xlID0gKHBhZ2VYLCBwYWdlWSkgPT4ge1xuICAgIHNldFBvaW50ZXIoY3JvcChwYWdlWCwgcGFnZVkpKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdtb3ZlZCcpIHtcbiAgICAgICAgICB1cGRhdGVSZWN0YW5nbGUoZS5wYWdlWCwgZS5wYWdlWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfb3B0aW9uYWxDaGFpbihbYkJveEltYWdlUmVmLCAnYWNjZXNzJywgXzEwID0+IF8xMC5jdXJyZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTEgPT4gXzExLmFkZEV2ZW50TGlzdGVuZXIsICdjYWxsJywgXzEyID0+IF8xMignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcildKVxuICAgICAgcmV0dXJuICgpID0+IF9vcHRpb25hbENoYWluKFtiQm94SW1hZ2VSZWYsICdhY2Nlc3MnLCBfMTMgPT4gXzEzLmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF8xNCA9PiBfMTQucmVtb3ZlRXZlbnRMaXN0ZW5lciwgJ2NhbGwnLCBfMTUgPT4gXzE1KCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKV0pXG4gICAgfVxuICB9LCBbc3RhdHVzXSlcblxuICBjb25zdCBtb3VzZURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGUuYnV0dG9uICE9PSAyICYmICFkaXNhYmxlZCkge1xuICAgICAgc2V0T2Zmc2V0KGNyb3AoZS5wYWdlWCwgZS5wYWdlWSkpXG4gICAgICBzZXRQb2ludGVyKGNyb3AoZS5wYWdlWCwgZS5wYWdlWSkpXG4gICAgICBzZXRTdGF0dXMoJ2hvbGQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBjdXJyZW50UG9pbnRlciA9IGNyb3AoZS5wYWdlWCwgZS5wYWdlWSlcbiAgICBzZXRQb2ludGVyKGN1cnJlbnRQb2ludGVyKVxuICAgIGNvbnN0IGhhc01vdmVkID0gY3VycmVudFBvaW50ZXIueCAhPT0gX29wdGlvbmFsQ2hhaW4oW29mZnNldCwgJ29wdGlvbmFsQWNjZXNzJywgXzE2ID0+IF8xNi54XSkgJiYgY3VycmVudFBvaW50ZXIueSAhPT0gX29wdGlvbmFsQ2hhaW4oW29mZnNldCwgJ29wdGlvbmFsQWNjZXNzJywgXzE3ID0+IF8xNy55XSlcbiAgICBpZiAoc3RhdHVzID09PSAnaG9sZCcgJiYgaGFzTW92ZWQpIHtcbiAgICAgIHNldFN0YXR1cygnbW92ZWQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlY3RhbmdsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB4MSA9IG9mZnNldCAmJiBwb2ludGVyID8gTWF0aC5taW4ob2Zmc2V0LngsIHBvaW50ZXIueCkgOiAwXG4gICAgY29uc3QgeDIgPSBvZmZzZXQgJiYgcG9pbnRlciA/IE1hdGgubWF4KG9mZnNldC54LCBwb2ludGVyLngpIDogMFxuICAgIGNvbnN0IHkxID0gb2Zmc2V0ICYmIHBvaW50ZXIgPyBNYXRoLm1pbihvZmZzZXQueSwgcG9pbnRlci55KSA6IDBcbiAgICBjb25zdCB5MiA9IG9mZnNldCAmJiBwb2ludGVyID8gTWF0aC5tYXgob2Zmc2V0LnksIHBvaW50ZXIueSkgOiAwXG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogeDEsXG4gICAgICB5OiB5MSxcbiAgICAgIHc6IHgyIC0geDEsXG4gICAgICBoOiB5MiAtIHkxXG4gICAgfVxuICB9LCBbcG9pbnRlciwgb2Zmc2V0XSlcblxuICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlKClcbiAgY29uc3QgYm94UmVmID0gdXNlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ21vdmVkJykge1xuICAgICAgICAgIHVwZGF0ZVJlY3RhbmdsZShlLnBhZ2VYLCBlLnBhZ2VZKVxuICAgICAgICAgIHNldEVudHJpZXMoW1xuICAgICAgICAgICAgLi4uZW50cmllcyxcbiAgICAgICAgICAgIHsuLi5yZWN0LCBjYXRlZ29yeTogc2VsZWN0ZWRMYWJlbC50YWcsIGNvbG9yOiBzZWxlY3RlZExhYmVsLmNvbG9yfVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0U3RhdHVzKCdmcmVlJylcbiAgICAgIH1cbiAgICAgIF9vcHRpb25hbENoYWluKFtib3hSZWYsICdvcHRpb25hbEFjY2VzcycsIF8xOCA9PiBfMTguY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzE5ID0+IF8xOS5hZGRFdmVudExpc3RlbmVyLCAnY2FsbCcsIF8yMCA9PiBfMjAoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcildKVxuICAgICAgcmV0dXJuICgpID0+IF9vcHRpb25hbENoYWluKFtib3hSZWYsICdvcHRpb25hbEFjY2VzcycsIF8yMSA9PiBfMjEuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzIyID0+IF8yMi5yZW1vdmVFdmVudExpc3RlbmVyLCAnY2FsbCcsIF8yMyA9PiBfMjMoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcildKVxuICAgIH1cbiAgfSwgW2JveFJlZiwgc3RhdHVzLCByZWN0XSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIG9uTW91c2VEb3duQ2FwdHVyZTogbW91c2VEb3duSGFuZGxlcixcbiAgICAgIG9uTW91c2VNb3ZlQ2FwdHVyZTogbW91c2VNb3ZlSGFuZGxlcixcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICByZWY6IGJveFJlZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3OH19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogYDEwMCVgLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGZsb2F0OiBgbGVmdGAsXG4gICAgICAgICAgY3Vyc29yOiAhZGlzYWJsZWQgPyAnY3Jvc3NoYWlyJyA6ICdhdXRvJ1xuICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg0fX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogYDEwMCVgLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBgMTAwJWAsXG4gICAgICAgICAgICBmbG9hdDogYGxlZnRgXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWY6IGJCb3hJbWFnZVJlZixcbiAgICAgICAgICBzcmM6IGltYWdlRnJhbWVTdHlsZS5iYWNrZ3JvdW5kSW1hZ2VTcmMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTN9fVxuICAgICAgICApXG4gICAgICAgICwgc3RhdHVzID09PSAnbW92ZWQnID8gUmVhY3QuY3JlYXRlRWxlbWVudChCQm94U2VsZWN0b3IsIHsgcmVjdGFuZ2xlOiByZWN0LCBjb2xvcjogc2VsZWN0ZWRMYWJlbC5jb2xvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwM319ICkgOiBudWxsXG4gICAgICAgICwgZW50cmllcy5tYXAoKGVudHJ5LCBpKSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGh9cHggc29saWQgJHtlbnRyeS5jb2xvciB8fCBjb2xvckJ5SW5kZXgoaSl9YCxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogYCR7ZW50cnkueX0lYCxcbiAgICAgICAgICAgICAgbGVmdDogYCR7ZW50cnkueH0lYCxcbiAgICAgICAgICAgICAgd2lkdGg6IGAke2VudHJ5Lnd9JWAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7ZW50cnkuaH0lYCxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5OiBpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA1fX1cbiAgICAgICAgICBcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgMTAwJWAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgMTAwJWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYCR7ZW50cnkuY29sb3IgfHwgY29sb3JCeUluZGV4KGkpfWAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaGlnaGxpZ2h0SW5kZXggPT09IGkgPyBgMC41YCA6IGAwLjJgXG4gICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTh9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJCb3hBbm5vdGF0b3JcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9iYm94LWFubm90YXRvci9CQm94U2VsZWN0b3IudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5cblxuXG5cblxuY29uc3QgQkJveFNlbGVjdG9yID0gKHtyZWN0YW5nbGUsIGJvcmRlcldpZHRoID0gMiwgY29sb3J9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGxlZnQ6IGAke3JlY3RhbmdsZS54fSVgLFxuICAgICAgICB0b3A6IGAke3JlY3RhbmdsZS55fSVgLFxuICAgICAgICB3aWR0aDogYCR7cmVjdGFuZ2xlLnd9JWAsXG4gICAgICAgIGhlaWdodDogYCR7cmVjdGFuZ2xlLmh9JWAsXG4gICAgICAgIGJvcmRlcjogYCR7Ym9yZGVyV2lkdGggfHwgMn1weCBzb2xpZCAke2NvbG9yfWAsXG4gICAgICAgIGJvcmRlcldpZHRoOiBgJHtib3JkZXJXaWR0aCB8fCAyfXB4YCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwfX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBgMTAwJWAsXG4gICAgICAgICAgaGVpZ2h0OiBgMTAwJWAsXG4gICAgICAgICAgYmFja2dyb3VuZDogYCR7Y29sb3J9YCxcbiAgICAgICAgICBvcGFjaXR5OiBgMC4yYFxuICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjN9fVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQkJveFNlbGVjdG9yXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JpbmFyeS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBUYXNrUmFkaW8gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFza1JhZGlvJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAxMFxufSlcblxuY29uc3QgQmluYXJ5ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpc0F1ZGl0cywgYmxvY2ssIG9uRWRpdCwgb25EZWxldGUsIGlzRWRpdGluZywgc2V0RmllbGRWYWx1ZSwgaW5kZXh9ID0gcHJvcHMgfHwge31cbiAgY29uc3Qge2JpbmFyeSwgbmFtZSwgaWQsIF9pZH0gPSBibG9ja1xuICBjb25zdCB7dmFsdWV9ID0gYmluYXJ5IHx8IHt9XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMn19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuQklOQVJZLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzR9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LmJpbmFyeS52YWx1ZWAsXG4gICAgICAgICAgICBpZDogYCR7X2lkfS10cnVlYCxcbiAgICAgICAgICAgIHZhbHVlOiBcInRydWVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlllc1wiLFxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHNldEZpZWxkVmFsdWUoYGRhdGEuJHtpbmRleH0uYmluYXJ5LnZhbHVlYCwgdHJ1ZSksXG4gICAgICAgICAgICBjaGVja2VkOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0uYmluYXJ5LnZhbHVlYCxcbiAgICAgICAgICAgIGlkOiBgJHtfaWR9LWZhbHNlYCxcbiAgICAgICAgICAgIHZhbHVlOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJOb1wiLFxuICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHNldEZpZWxkVmFsdWUoYGRhdGEuJHtpbmRleH0uYmluYXJ5LnZhbHVlYCwgZmFsc2UpLFxuICAgICAgICAgICAgY2hlY2tlZDogdmFsdWUgPT09IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5hcnlcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvQm9keUNvbnRhaW5lci50c3hcIjtpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBSZWFjdCwge30gZnJvbSAncmVhY3QnXG5cblxuXG5cblxuXG5cbmNvbnN0IEJvZHlDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7cm93fSkgPT4gKHtcbiAgZmxvYXQ6ICdsZWZ0JyxcbiAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiByb3cgPyAncm93JyA6ICdjb2x1bW4nXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgKHtjaGlsZHJlbiwgcm93LCBzdHlsZX0pID0+IChcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHN0eWxlOiBzdHlsZSwgcm93OiByb3csIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOX19XG4gICAgLCBjaGlsZHJlblxuICApXG4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvdW5kaW5nQm94ZXMudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IFRhZ2dhYmxlTGlzdFdyYXBwZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFnZ2FibGVMaXN0V3JhcHBlcidcbmltcG9ydCBCQm94QW5ub3RhdG9yLCB7fSBmcm9tICcuLi9iYm94LWFubm90YXRvci9CQm94QW5ub3RhdG9yJ1xuaW1wb3J0IHtjb2xvckJ5SW5kZXh9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgQm91bmRpbmdCb3hlcyA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nLCBzZXRGaWVsZFZhbHVlLCBpbmRleCwgaXNBdWRpdHN9ID0gcHJvcHNcbiAgY29uc3Qge25hbWV9ID0gYmxvY2tcblxuICBjb25zdCB7cGxhY2Vob2xkZXIsIG9wdGlvbnMsIHZhbHVlfSA9IGJsb2NrW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdIHx8IHt9XG5cbiAgY29uc3QgW29iamVjdHMsIHNldE9iamVjdHNdID0gdXNlU3RhdGUoX29wdGlvbmFsQ2hhaW4oW3ZhbHVlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5vYmplY3RzXSkgfHwgW10pXG4gIGNvbnN0IFtoaWdobGlnaHRJbmRleCwgc2V0SGlnaGxpZ2h0SW5kZXhdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyB8fCB2YWx1ZS5pbWFnZSA9PT0gJycgPyBwbGFjZWhvbGRlciB8fCAnJyA6IHZhbHVlLmltYWdlXG5cbiAgY29uc3QgW3NlbGVjdGVkTGFiZWwsIHNldFNlbGVjdGVkTGFiZWxdID0gdXNlU3RhdGUoe1xuICAgIHRhZzogb3B0aW9uc1swXS5pZCxcbiAgICBjb2xvcjogY29sb3JCeUluZGV4KDApXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPYmplY3RzKF9vcHRpb25hbENoYWluKFt2YWx1ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMub2JqZWN0c10pKVxuICB9LCBbYmxvY2tbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU11dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmllbGRWYWx1ZShcbiAgICAgIGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVN9XS52YWx1ZS5vYmplY3RzYCxcbiAgICAgIGlzRWRpdGluZyA/IFtdIDogX29wdGlvbmFsQ2hhaW4oW3ZhbHVlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNCA9PiBfNC5vYmplY3RzXSlcbiAgICApXG4gICAgc2V0T2JqZWN0cyhpc0VkaXRpbmcgPyBbXSA6IF9vcHRpb25hbENoYWluKFt2YWx1ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUub2JqZWN0c10pKVxuICB9LCBbcGxhY2Vob2xkZXIsIG9wdGlvbnNdKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBzdHlsZToge2Rpc3BsYXk6ICdibG9jaycsIG1heFdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiAnMTAwJSd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjJ9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHJvdzogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlV3JhcHBlciwge1xuICAgICAgICAgIG9uTW91c2VEb3duOiAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3M319XG4gICAgICAgIFxuICAgICAgICAgICwgcmVuZGVyVmFsdWUgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCQm94QW5ub3RhdG9yLCB7XG4gICAgICAgICAgICAgIHVybDogcmVuZGVyVmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkTGFiZWw6IHNlbGVjdGVkTGFiZWwsXG4gICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgIGhpZ2hsaWdodEluZGV4OiBoaWdobGlnaHRJbmRleCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RzKGUpXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTfV0udmFsdWUub2JqZWN0c2AsIGUpXG4gICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUYWdnYWJsZUxpc3RXcmFwcGVyLCB7XG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cyxcbiAgICAgICAgICBvblNlbGVjdDogKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZExhYmVsKGxhYmVsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Ib3ZlcjogKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRJbmRleChpbmRleClcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2xpY2s6IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2V0T2JqZWN0cyhvYmplY3RzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogc2VsZWN0ZWRMYWJlbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQm91bmRpbmdCb3hlc1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Db250ZW50LnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuXG5cblxuXG5cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6ICR7KHtvdmVyZmxvd30pID0+IChvdmVyZmxvdyA/IG92ZXJmbG93IDogJ2F1dG8nKX07XG4gICY6aG92ZXIgJHtDb250YWluZXJ9IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmBcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBzdHlsZWQoSWNvbilgXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMTVweDtcbiAgY3Vyc29yOiAkeyh7aXNFZGl0aW5nfSkgPT4gKGlzRWRpdGluZyA/ICdncmFiJyA6ICdpbmhlcml0Jyl9O1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6ICR7KHtpc0VkaXRpbmd9KSA9PiAoaXNFZGl0aW5nID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xuICAke0NvbnRlbnRDb250YWluZXJ9OmhvdmVyICYge1xuICAgIGRpc3BsYXk6ICR7KHtpc0VkaXRpbmd9KSA9PiAoaXNFZGl0aW5nID8gJ2Jsb2NrJyA6ICdub25lJyl9ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50V3JhcHBlcih7Y2hpbGRyZW4sIGlzRWRpdGluZywgb3ZlcmZsb3d9KSB7XG4gIGNvbnN0IGFkZERyYWdnaW5nU3R5bGVzID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gIH1cblxuICBjb25zdCByZW1vdmVEcmFnZ2luZ1N0eWxlcyA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxuICB9XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcmFnSGFuZGxlLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkcmFnLWhhbmRsZVwiLFxuICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgY29sb3I6ICcjNjg2ODY5J1xuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlT3V0OiByZW1vdmVEcmFnZ2luZ1N0eWxlcyxcbiAgICAgICAgb25Nb3VzZURvd246IGFkZERyYWdnaW5nU3R5bGVzLFxuICAgICAgICBvbk1vdXNlVXA6IHJlbW92ZURyYWdnaW5nU3R5bGVzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTd9fVxuICAgICAgLCBcImRyYWdfaGFuZGxlXCJcblxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgaXNFZGl0aW5nOiBpc0VkaXRpbmcsIG92ZXJmbG93OiBvdmVyZmxvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcwfX1cbiAgICAgICAgLCBjaGlsZHJlblxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9EYXRlLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXInXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCB7Z2V0RGlzcGxheUZvcm1hdH0gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRGF0ZUJsb2NrID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpc0F1ZGl0cywgYmxvY2ssIG9uRWRpdCwgb25EZWxldGUsIHNldEZpZWxkVmFsdWUsIGlzRWRpdGluZywgaW5kZXh9ID0gcHJvcHNcbiAgY29uc3Qge2RhdGUsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IGRhdGUgfHwge31cblxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzJ9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLkRBVEUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgLCByZWFkT25seSB8fCBpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX0sIGdldERpc3BsYXlGb3JtYXQocmVuZGVyVmFsdWUpKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwge1xuICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0uZGF0ZS52YWx1ZWAsXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHkgfHwgaXNBdWRpdHMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlQmxvY2tcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRW1haWwudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSh7XG4gIGZvbnRTaXplOiAxNixcbiAgbGluZUhlaWdodDogMS41LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLkxJTkssXG4gIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWFpbChwcm9wcykge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgYmxvY2ssXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBpbmRleCxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZUNoYW5nZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2VtYWlsLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVhZF9vbmx5OiByZWFkT25seSwgdmFsdWUgPSAnJ30gPSBlbWFpbCB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTN9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLkVNQUlMLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICwgIXJlYWRPbmx5ICYmICFpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LmVtYWlsLnZhbHVlYCxcbiAgICAgICAgICAgIHZhbHVlOiByZW5kZXJWYWx1ZSB8fCBcIlwiLFxuICAgICAgICAgICAgaGlkZUVycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3IsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy52YWx1ZV0pLFxuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGluaywgeyBocmVmOiBgbWFpbHRvOiR7cmVuZGVyVmFsdWV9YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc2fX0sIHJlbmRlclZhbHVlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYmVkLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgQ29udGVudFdyYXBwZXIgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSUZyYW1lID0gc3R5bGVkLmlmcmFtZSh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBib3JkZXI6IDBcbn0pXG5cbmNvbnN0IEVtYmVkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25FZGl0LCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBlcnJvciwgaW5kZXh9ID0gcHJvcHMgfHwge31cbiAgY29uc3Qge2VtYmVkLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHt2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gZW1iZWQgfHwge31cblxuICBsZXQgc291cmNlVXJsID0gaXNFZGl0aW5nID8gcGxhY2Vob2xkZXIgOiB2YWx1ZVxuXG4gIGlmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGFbaW5kZXhdICYmIGVycm9yLmRhdGEubGVuZ3RoKSB7XG4gICAgc291cmNlVXJsID0gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50V3JhcHBlciwgeyAuLi5wcm9wcywgb3ZlcmZsb3c6IGBoaWRkZW5gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDB9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuRU1CRUQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElGcmFtZSwgeyBzcmM6IHNvdXJjZVVybCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX0gKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWJlZFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Gb3JtU2VxdWVuY2UudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7bWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RmllbGRBcnJheSx9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcblxuaW1wb3J0IEJhc2ljVGV4dEFyZWEgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmFzaWNUZXh0QXJlYSdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcbmltcG9ydCBUYXNrQ2hlY2tib3ggZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFza0NoZWNrYm94J1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQnV0dG9uQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgZmxleDogJzAgMCBhdXRvJ1xufSlcblxuY29uc3QgQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgcGFkZGluZzogJzVweCAwJ1xufSlcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSlcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXYoe1xuICBmbGV4OiAxXG59KVxuXG5jb25zdCBhc3NpZ25OZXh0QW5kQmFja1Zpc2liaWxpdHkgPSAoXG4gIGN1cnJlbnRJZHgsXG4gIGN1cnJlbnRUeXBlLFxuICBuZXh0QmxvY2tJZCxcbiAgbmV4dEJsb2NrSW5kZXgsXG4gIHZhbHVlLFxuICBkYXRhXG4pID0+IHtcbiAgbGV0IGlzTmV4dERpc2FibGVkID0gZmFsc2VcbiAgbGV0IGlzQmFja0Rpc2FibGVkID0gZmFsc2VcblxuICBpc0JhY2tEaXNhYmxlZCA9IGN1cnJlbnRJZHggPT09IDBcblxuICBpZiAoY3VycmVudElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgaWYgKG5leHRCbG9ja0luZGV4ID09PSAtMSkge1xuICAgICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjdXJyZW50VHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OIHx8IGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkJJTkFSWSkge1xuICAgICAgaWYgKCF2YWx1ZSkgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc05leHREaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFuZXh0QmxvY2tJZCAhPT0gbnVsbCAmJiBuZXh0QmxvY2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaXNOZXh0RGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2UgaWYgKG5leHRCbG9ja0lkID09PSBudWxsKSB7XG4gICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGlzQmFja0Rpc2FibGVkXG4gIH1cbn1cblxuY29uc3QgRm9ybVNlcXVlbmNlID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJZHgsIHNldEN1cnJlbnRJZHhdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qge2lzQXVkaXRzLCBibG9jaywgb25EZWxldGUsIGhhbmRsZUNoYW5nZSwgaW5kZXgsIGlzRWRpdGluZywgb25FZGl0LCBzZXRGaWVsZFZhbHVlfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBfaWR9ID0gYmxvY2sgfHwge31cbiAgY29uc3Qge2RhdGEsIGhpc3RvcnkgPSBbXX0gPSBibG9ja1t0eXBlXVxuXG4gIGNvbnN0IGN1cnJlbnRCbG9jayA9IGRhdGFbY3VycmVudElkeF1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0F1ZGl0cykgcmV0dXJuXG4gICAgaWYgKGN1cnJlbnRCbG9jayAmJiBfb3B0aW9uYWxDaGFpbihbaGlzdG9yeSwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmxlbmd0aF0pID4gMCkge1xuICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBoaXN0b3J5LnBvcCgpXG4gICAgICBjb25zdCBsYXN0QmxvY2tJZHggPSBkYXRhLmZpbmRJbmRleCgoe2lkfSkgPT4gaWQgPT09IGxhc3RCbG9ja0lkKVxuICAgICAgc2V0Q3VycmVudElkeChsYXN0QmxvY2tJZHggKyAxKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKCFjdXJyZW50QmxvY2spIHJldHVybiBudWxsXG5cbiAgY29uc3Qge3R5cGU6IGN1cnJlbnRUeXBlLCBuYW1lOiBjdXJyZW50QmxvY2tOYW1lfSA9IGN1cnJlbnRCbG9ja1xuICBjb25zdCB7dmFsdWUgPSAnJ30gPSBjdXJyZW50QmxvY2tbY3VycmVudFR5cGVdXG4gIGNvbnN0IG5leHRCbG9ja0lkID0gX29wdGlvbmFsQ2hhaW4oW2N1cnJlbnRCbG9jaywgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIubG9naWNfanVtcF0pID8gY3VycmVudEJsb2NrLmxvZ2ljX2p1bXBbdmFsdWVdIDogdW5kZWZpbmVkXG4gIGNvbnN0IG5leHRCbG9ja0luZGV4ID0gZGF0YS5maW5kSW5kZXgoKGJsb2NrKSA9PiBibG9jay5pZCA9PT0gbmV4dEJsb2NrSWQpXG4gIGNvbnN0IGxvZ2ljQmxvY2tzID0gW0JMT0NLX1RZUEUuQklOQVJZLCBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT05dXG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9IChhcnJheUhlbHBlcnMpID0+IHtcbiAgICBpZiAobG9naWNCbG9ja3MuaW5jbHVkZXMoY3VycmVudFR5cGUpKSB7XG4gICAgICBpZiAoIW5leHRCbG9ja0lkKSB7XG4gICAgICAgIGFycmF5SGVscGVycy5wdXNoKGN1cnJlbnRCbG9jay5pZClcbiAgICAgICAgc2V0Q3VycmVudElkeChjdXJyZW50SWR4ICsgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0QmxvY2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaChjdXJyZW50QmxvY2suaWQpXG4gICAgICAgICAgc2V0Q3VycmVudElkeChuZXh0QmxvY2tJbmRleClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogdW5hYmxlIHRvIGZpbmQgbmV4dCBibG9jayBJRCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcG9wIGN1cnJlbnQgaW5kZXggaW50byBoaXN0b3J5XG4gICAgICBhcnJheUhlbHBlcnMucHVzaChjdXJyZW50QmxvY2suaWQpXG4gICAgICBzZXRDdXJyZW50SWR4KGN1cnJlbnRJZHggKyAxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtoaXN0b3J5LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy5sZW5ndGhdKSA8PSAwKSB7XG4gICAgICBzZXRDdXJyZW50SWR4KDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YWNrZWRJZCA9IGhpc3RvcnkucG9wKClcbiAgICAgIGNvbnN0IG5leHRCbG9ja0luZGV4ID0gZGF0YS5maW5kSW5kZXgoKGJsb2NrKSA9PiBibG9jay5pZCA9PT0gc3RhY2tlZElkKVxuICAgICAgaWYgKG5leHRCbG9ja0luZGV4ICE9PSAtMSkge1xuICAgICAgICBzZXRDdXJyZW50SWR4KG5leHRCbG9ja0luZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q3VycmVudElkeCgwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHtpc05leHREaXNhYmxlZCwgaXNCYWNrRGlzYWJsZWR9ID0gYXNzaWduTmV4dEFuZEJhY2tWaXNpYmlsaXR5KFxuICAgIGN1cnJlbnRJZHgsXG4gICAgY3VycmVudFR5cGUsXG4gICAgbmV4dEJsb2NrSWQsXG4gICAgbmV4dEJsb2NrSW5kZXgsXG4gICAgdmFsdWUsXG4gICAgZGF0YVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uaGlzdG9yeWAsXG4gICAgICByZW5kZXI6IChhcnJheUhlbHBlcnMpID0+IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY1fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjZ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjd9fVxuICAgICAgICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjh9fSwgbmFtZSlcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc2fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3N319XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNCYWNrRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBoYW5kbGVCYWNrKGFycmF5SGVscGVycyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgICAgICAgICAgICAgICwgXCJCYWNrXCJcblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzTmV4dERpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gaGFuZGxlTmV4dChhcnJheUhlbHBlcnMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg1fX1cbiAgICAgICAgICAgICAgICAsIFwiTmV4dFwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBjdXJyZW50QmxvY2tOYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX0sIGN1cnJlbnRCbG9ja05hbWUpXG4gICAgICAgICAgICAgICwgY3VycmVudFR5cGUgPT09IEJMT0NLX1RZUEUuVEVYVCAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7ZmxleDogMX0sXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsXG4gICAgICAgICAgICAgICAgICBrZXk6IF9vcHRpb25hbENoYWluKFtjdXJyZW50QmxvY2ssICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80LmlkXSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTV9fVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLk5VTUJFUiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA3fX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBjdXJyZW50VHlwZSA9PT0gQkxPQ0tfVFlQRS5FTUFJTCAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxOH19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkxJTksgJiYgKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzB9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0uJHt0eXBlfS5kYXRhLiR7Y3VycmVudElkeH0uJHtjdXJyZW50VHlwZX0udmFsdWVgLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzF9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkJJTkFSWSAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0Mn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQzfX1cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7X2lkfS0ke2N1cnJlbnRJZHh9LXRydWVgLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJZZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDR9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjU5fX1cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7X2lkfS0ke2N1cnJlbnRJZHh9LWZhbHNlYCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjB9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgY3VycmVudFR5cGUgPT09IEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OH19XG4gICAgICAgICAgICAgICAgICAsIGN1cnJlbnRCbG9ja1tjdXJyZW50VHlwZV0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjgwfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogb3B0aW9uLmlkID09PSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4MX19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5NX19XG4gICAgICAgICAgICAgICAgICAsIGN1cnJlbnRCbG9ja1tjdXJyZW50VHlwZV0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjk3fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza0NoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdmFsdWUgJiYgdmFsdWUuaW5jbHVkZXMob3B0aW9uLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5OH19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Mn19XG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VxdWVuY2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvSGVhZGVyQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcblxuXG5cblxuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGZsZXg6ICcwIDAgYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nLFxuICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICB6SW5kZXg6IDExLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjF9fSwgY2hpbGRyZW4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0ltYWdlLnRzeFwiO2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWcoe1xuICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nXG59KVxuXG5jb25zdCBJbWFnZSA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBpZCwgaW1hZ2V9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlLCBwbGFjZWhvbGRlcn0gPSBpbWFnZSB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgc3R5bGU6IHtkaXNwbGF5OiAnYmxvY2snLCBtYXhXaWR0aDogJzEwMCUnLCBtaW5XaWR0aDogJzEwMCUnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzV9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLklNQUdFLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzd9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NH19XG4gICAgICAgICwgcmVuZGVyVmFsdWUgJiYgKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSW1nLCB7XG4gICAgICAgICAgICBzcmM6IHJlbmRlclZhbHVlLFxuICAgICAgICAgICAgYWx0OiBuYW1lIHx8IHR5cGUsXG4gICAgICAgICAgICB0aXRsZTogbmFtZSB8fCB0eXBlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udFNpemU6IDE1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MaW5rLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmEoe1xuICBmb250U2l6ZTogMTYsXG4gIGxpbmVIZWlnaHQ6IDEuNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5MSU5LLFxuICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICB3b3JkQnJlYWs6ICdicmVhay13b3JkJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgYmxvY2ssXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBpbmRleCxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZUNoYW5nZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2xpbmssIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IGxpbmsgfHwge31cbiAgY29uc3QgcmVuZGVyVmFsdWUgPSBpc0VkaXRpbmcgPyBwbGFjZWhvbGRlciA6IHZhbHVlXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgLi4ucHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX1cbiAgICAgICAgLCBuYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTR9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5MSU5LLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICwgIXJlYWRPbmx5ICYmICFpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0ubGluay52YWx1ZWAsXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUgfHwgXCJcIixcbiAgICAgICAgICAgIGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgICBlcnJvcjogX29wdGlvbmFsQ2hhaW4oW2Vycm9yLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8udmFsdWVdKSxcbiAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExpbmssIHsgaHJlZjogYCR7cmVuZGVyVmFsdWV9YCwgdGFyZ2V0OiBcIl9ibGFua1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAgICAgLCByZW5kZXJWYWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9NZWRpYUJsb2NrLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ3VuaXZlcnNhbC9ob29rcy91c2VQcmV2aW91cydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICcuLi9CbG9ja0hlYWRlcidcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBQbHlyIGZyb20gJ3BseXInXG5cbmltcG9ydCAncGx5ci9kaXN0L3BseXIuY3NzJ1xuXG5cblxuXG5cblxuXG5cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgY29udHJvbHM6IFsncGxheScsICdwcm9ncmVzcycsICdjdXJyZW50LXRpbWUnLCAnbXV0ZScsICd2b2x1bWUnLCAnc2V0dGluZ3MnLCAnZnVsbHNjcmVlbiddXG59XG5cbmNvbnN0IFZpZGVvUGxheWVyID0gc3R5bGVkLmRpdigoe3Nob3csIGhpZGVPdmVyZmxvd30pID0+ICh7XG4gIGRpc3BsYXk6IHNob3cgPT09IGZhbHNlID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgb3ZlcmZsb3c6IGhpZGVPdmVyZmxvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICB6SW5kZXg6IDFcbn0pKVxuXG5jb25zdCBNZWRpYUJsb2NrID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBpZH0gPSBibG9ja1xuICBjb25zdCB7dmFsdWUsIHBsYWNlaG9sZGVyfSA9IGJsb2NrW3R5cGVdIHx8IHt9XG4gIGNvbnN0IHNvdXJjZVVybCA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICBjb25zdCBwcmV2U291cmNlVXJsID0gdXNlUHJldmlvdXMoc291cmNlVXJsKVxuXG4gIGNvbnN0IHNvdXJjZXMgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzb3VyY2VzOiBbe3NyYzogc291cmNlVXJsfV1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZTb3VyY2VVcmwgIT09IHNvdXJjZVVybCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGx5ci0ke2lkfWApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cihlbCwgb3B0aW9ucylcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHBsYXllci5zb3VyY2UgPSBzb3VyY2VzXG5cbiAgICAgIHJldHVybiAoKSA9PiBwbGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9LCBbc291cmNlVXJsXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU5fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjB9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MX19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHsgb25EZWxldGU6IG9uRGVsZXRlLCBvbkVkaXQ6IG9uRWRpdCwgaXNFZGl0aW5nOiBpc0VkaXRpbmcsIGJsb2NrVHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX0gKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlkZW9QbGF5ZXIsIHsgc2hvdzogc291cmNlVXJsICE9PSAnJyAmJiBzb3VyY2VVcmwgIT09IHVuZGVmaW5lZCwgaGlkZU92ZXJmbG93OiB0eXBlID09PSAndmlkZW8nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjV9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgndmlkZW8nLCB7IGlkOiBgcGx5ci0ke2lkfWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Nn19IClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUJsb2NrXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL011bHRpcGxlU2VsZWN0aW9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRhc2tDaGVja2JveCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UYXNrQ2hlY2tib3gnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5cbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBMaXN0RmlsdGVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RGaWx0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENoZWNrYm94ID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMTBcbn0pXG5cbmNvbnN0IE11bHRpQ2xhc3MgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNFZGl0aW5nLCBvbkVkaXR9ID0gcHJvcHNcbiAgY29uc3Qge25hbWUsIHR5cGV9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlfSA9IGJsb2NrWydtdWx0aXBsZV9zZWxlY3Rpb24nXSB8fCB7fVxuICBjb25zdCBpc1Rhc2sgPSAhaXNFZGl0aW5nICYmICFpc0F1ZGl0c1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShibG9ja1t0eXBlXS5vcHRpb25zKVxuICBjb25zdCBvcHRpb25zID0gaXNFZGl0aW5nID8gYmxvY2tbdHlwZV0ub3B0aW9ucyA6IGxpc3RcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBpc1Rhc2sgJiYgQXJyYXkuaXNBcnJheShibG9ja1t0eXBlXS5vcHRpb25zKSAmJiBibG9ja1t0eXBlXS5vcHRpb25zLmxlbmd0aCA+IDEwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEZpbHRlciwgeyBsaXN0OiBibG9ja1t0eXBlXS5vcHRpb25zLCBzZXRMaXN0OiBzZXRMaXN0LCBrZXlzOiBbJ25hbWUnXSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ4fX0gKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDl9fVxuICAgICAgICAsIG9wdGlvbnMubWFwKChvcHRpb24sIG9wdGlvbkluZGV4KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tDaGVja2JveCwge1xuICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS5tdWx0aXBsZV9zZWxlY3Rpb24udmFsdWVgLFxuICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOiB2YWx1ZSAmJiB2YWx1ZS5pbmNsdWRlcyhvcHRpb24uaWQpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mn19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlDbGFzc1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9OYW1lZEVudGl0eVJlY29nbml0aW9uLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge21lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEnXG5cbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBUYWdnYWJsZUxpc3RXcmFwcGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1RhZ2dhYmxlTGlzdFdyYXBwZXInXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgVGV4dEFubm90YXRvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy90ZXh0LWFubm90YXRvci9UZXh0QW5ub3RhdG9yJ1xuaW1wb3J0IHtjb2xvckJ5SW5kZXh9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEJ1dHRvbkJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgbWFyZ2luVG9wOiAxMCxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzgwcHggODBweCcsXG4gIGdyaWRHYXA6IDEwXG59KVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdigoe2VkaXRNb2RlfSkgPT4gKHtcbiAgLi4uKGVkaXRNb2RlICYmIHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gNTBweCdcbiAgfSlcbn0pKVxuXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXYoXG4gICh7aGlnaGxpZ2h0Q29sb3J9KSA9PiBgXG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgJiBtYXJrIHtcbiAgICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICd4JztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgICAmIG1hcmsgPiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcblxuICAgICAgJjo6c2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtoaWdobGlnaHRDb2xvcn07XG4gICAgICB9XG4gICAgfVxuYFxuKVxuXG5jb25zdCBOYW1lZEVudGl0eVJlY29nbml0aW9uID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2Jsb2NrLCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBvbkVkaXQsIHNldEZpZWxkVmFsdWUsIGluZGV4LCBpc0F1ZGl0c30gPSBwcm9wc1xuICBjb25zdCB7bmFtZX0gPSBibG9ja1xuXG4gIGNvbnN0IHthbGxvd19lZGl0czogYWxsb3dFZGl0cywgcGxhY2Vob2xkZXIsIG9wdGlvbnMsIHZhbHVlID0gJycsIGVudGl0aWVzID0gW119ID1cbiAgICBibG9ja1tCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTl0gfHwge31cblxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShlbnRpdGllcylcbiAgY29uc3QgW3VzZXJTZWxlY3QsIHNldFVzZXJTZWxlY3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkaXNhYmxlU2VsZWN0aW9uLCBzZXREaXNhYmxlU2VsZWN0aW9uXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlZGl0TW9kZSwgdG9nZ2xFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSh7XG4gICAgdGFnOiBvcHRpb25zWzBdLmlkLFxuICAgIGNvbG9yOiBjb2xvckJ5SW5kZXgoMClcbiAgfSlcblxuICBjb25zdCByZW5kZXJUZXh0ID0gaXNFZGl0aW5nIHx8IHZhbHVlID09PSAnJyA/IHBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWVcbiAgbGV0IHRleHRGaWVsZE5hbWUgPSBgZGF0YS4ke2luZGV4fS4ke0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfS52YWx1ZWBcbiAgaWYgKGlzRWRpdGluZyB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICB0ZXh0RmllbGROYW1lID0gYGRhdGEuJHtpbmRleH0uJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn0ucGxhY2Vob2xkZXJgXG4gIH1cblxuICBjb25zdCBbdGV4dEZpZWxkVmFsdWUsIHNldFRleHRGaWVsZFZhbHVlXSA9IHVzZVN0YXRlKHJlbmRlclRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyByZXNldCB0YWdzIHdoZW4gcGxhY2Vob2xkZXIgYW5kIG9wdGlvbnMgY2hhbmdlZFxuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgIHNldFRleHQoW10pXG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0uZW50aXRpZXNgLCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGV4dChlbnRpdGllcylcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7QkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT059XS5lbnRpdGllc2AsIGVudGl0aWVzKVxuICAgIH1cbiAgfSwgW3BsYWNlaG9sZGVyLCBvcHRpb25zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICBgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn1dLmVudGl0aWVzYCxcbiAgICAgIGlzRWRpdGluZyA/IFtdIDogdGV4dFxuICAgIClcbiAgfSwgW3RleHRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeSh7XG4gICAgICB0YWc6IG9wdGlvbnNbMF0uaWQsXG4gICAgICBjb2xvcjogY29sb3JCeUluZGV4KDApXG4gICAgfSlcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICBzZXRUZXh0RmllbGRWYWx1ZSh2YWx1ZSlcbiAgICB9LFxuICAgIFt0ZXh0RmllbGRWYWx1ZV1cbiAgKVxuXG4gIGNvbnN0IGZvcm1hdEVudGl0aWVzRm9yVUlSZW5kZXJpbmcgPSAoZW50aXRpZXMpID0+IHtcbiAgICBjb25zdCBlbnRpdGllc0luc3RhbmNlID0gZW50aXRpZXNcbiAgICByZXR1cm4gZW50aXRpZXNJbnN0YW5jZS5maWx0ZXIoKGl0bSkgPT4ge1xuICAgICAgY29uc3QgW29wdGlvbk5hbWUsIGluZGV4XSA9IGZpbmRPcHRpb25OYW1lRnJvbUlkKGl0bS50YWcpXG4gICAgICBpZiAoIW9wdGlvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpdG0uY29sb3IgPSBjb2xvckJ5SW5kZXgoaW5kZXgpXG4gICAgICByZXR1cm4gaXRtXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGZpbmRPcHRpb25OYW1lRnJvbUlkID0gKGlkKSA9PiB7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgaW5kZXhcbiAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLmlkID09PSBpZCkge1xuICAgICAgICBuYW1lID0gb3B0aW9uLm5hbWVcbiAgICAgICAgaW5kZXggPSBpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBbbmFtZSwgaW5kZXhdXG4gIH1cblxuICBjb25zdCBoYW5kbGVBbm5vdGF0ZSA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKHVzZXJTZWxlY3QpIHtcbiAgICAgIHNldFVzZXJTZWxlY3QoZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWlzQXVkaXRzKSB7XG4gICAgICBzZXRUZXh0KHRleHQpXG4gICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICBgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn1dLmVudGl0aWVzYCxcbiAgICAgICAgaXNFZGl0aW5nID8gW10gOiB0ZXh0XG4gICAgICApXG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0udmFsdWVgLCByZW5kZXJUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJveFJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChib3hSZWYgIT09IHVuZGVmaW5lZCAmJiBib3hSZWYuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBib3hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZGV0YWlsID49IDMpIHtcbiAgICAgICAgICBzZXRVc2VyU2VsZWN0KHRydWUpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYm94UmVmXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChfb3B0aW9uYWxDaGFpbihbaW5wdXRSZWYsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5jdXJyZW50XSkpIHtcbiAgICAgIF9vcHRpb25hbENoYWluKFtpbnB1dFJlZiwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuc3R5bGUsICdhY2Nlc3MnLCBfNCA9PiBfNC5zZXRQcm9wZXJ0eSwgJ2NhbGwnLCBfNSA9PiBfNSgnaGVpZ2h0JywgJzEwMCUnLCAnaW1wb3J0YW50JyldKVxuICAgIH1cbiAgfSwgW2lucHV0UmVmXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwN319XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7XG4gICAgICAgIHJvdzogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IHtkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDE5NXB4JywgZ3JpZEdhcDogMjB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE2fX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyBlZGl0TW9kZTogZWRpdE1vZGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjB9fVxuICAgICAgICAgICwgZWRpdE1vZGUgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7XG4gICAgICAgICAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnOTAlICFpbXBvcnRhbnQnfSxcbiAgICAgICAgICAgICAgcG9zaXRpb25FcnJvckJlbG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHRleHRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlVGV4dENoYW5nZSxcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyMn19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlU2VsZWN0aW9uKGZhbHNlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlU2VsZWN0aW9uKHRydWUpXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt1c2VyU2VsZWN0OiBkaXNhYmxlU2VsZWN0aW9uID8gJ25vbmUnIDogJ2F1dG8nfSxcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IHNlbGVjdGVkQ2F0ZWdvcnkuY29sb3IsXG4gICAgICAgICAgICAgIHJlZjogYm94UmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMxfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFubm90YXRvciwge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZW5kZXJUZXh0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXRFbnRpdGllc0ZvclVJUmVuZGVyaW5nKHRleHQpLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVBbm5vdGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRTcGFuOiAoc3BhbikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnNwYW4sXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDZ9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgYWxsb3dFZGl0cyAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2MX19XG4gICAgICAgICAgICAgICwgZWRpdE1vZGUgPyAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJScsIG1hcmdpblJpZ2h0OiAxMH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsRWRpdE1vZGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWUocmVuZGVyVGV4dClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY0fX1cbiAgICAgICAgICAgICAgICAgICwgXCJDYW5jZWxcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dChbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0uZW50aXRpZXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKHRleHRGaWVsZE5hbWUsIHRleHRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsRWRpdE1vZGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzZ9fVxuICAgICAgICAgICAgICAgICAgLCBcIlNhdmVcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRvZ2dsRWRpdE1vZGUodHJ1ZSksXG4gICAgICAgICAgICAgICAgICBoaWRlRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOTZ9fVxuICAgICAgICAgICAgICAgICwgXCJFZGl0IFRleHRcIlxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZ2dhYmxlTGlzdFdyYXBwZXIsIHtcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgIG9uU2VsZWN0OiAoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiBzZWxlY3RlZENhdGVnb3J5LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzEwfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTmFtZWRFbnRpdHlSZWNvZ25pdGlvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9OdW1iZXIudHN4XCI7aW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVyQmxvY2socHJvcHMpIHtcbiAgY29uc3Qge2Jsb2NrLCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNBdWRpdHMsIGlzRWRpdGluZywgb25FZGl0fSA9IHByb3BzXG4gIGNvbnN0IHtudW1iZXIsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IG51bWJlciB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjl9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk5VTUJFUiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fVxuICAgICAgICAsIHJlYWRPbmx5IHx8IGlzQXVkaXRzID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDB9fSwgcmVuZGVyVmFsdWUpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS5udW1iZXIudmFsdWVgLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHJlbmRlclZhbHVlIHx8IFwiXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1BkZlJlYWRlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IENvbnRlbnRXcmFwcGVyIGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IElGcmFtZSA9IHN0eWxlZC5pZnJhbWUoe1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgYm9yZGVyOiAwXG59KVxuXG5jb25zdCBQZGZSZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2Jsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBpc0VkaXRpbmcsIGVycm9yLCBpbmRleH0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCB7cGRmLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHt2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gcGRmIHx8IHt9XG5cbiAgbGV0IHNvdXJjZVVybCA9IGlzRWRpdGluZyA/IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICBpZiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhW2luZGV4XSAmJiBlcnJvci5kYXRhLmxlbmd0aCkge1xuICAgIHNvdXJjZVVybCA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFdyYXBwZXIsIHsgLi4ucHJvcHMsIG92ZXJmbG93OiBgaGlkZGVuYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDF9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLlBERiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTB9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSUZyYW1lLCB7IHNyYzogc291cmNlVXJsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBkZlJlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9SaWNoVGV4dEVkaXRvci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0RWRpdG9yJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBzZXRGaWVsZFZhbHVlLCBpc0VkaXRpbmcsIGluZGV4fSA9IHByb3BzXG4gIGNvbnN0IHtyaWNoX3RleHQ6IHJpY2hUZXh0LCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVhZF9vbmx5OiByZWFkT25seSwgdmFsdWUgPSAnJywgZm9ybWF0fSA9IHJpY2hUZXh0IHx8IHt9XG4gIGNvbnN0IHJlbmRlclZhbHVlID0gaXNFZGl0aW5nID8gcGxhY2Vob2xkZXIgOiB2YWx1ZVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjh9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOX19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuUklDSF9URVhULCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzF9fVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RWRpdG9yLCB7XG4gICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LnJpY2hfdGV4dC52YWx1ZWAsXG4gICAgICAgIHZhbHVlOiByZW5kZXJWYWx1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5IHx8IGlzQXVkaXRzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgIGZvcm1hdDogZm9ybWF0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEVkaXRvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9TaW5nbGVTZWxlY3Rpb24udHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtbywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcblxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IExpc3RGaWx0ZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdEZpbHRlcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSYWRpbyA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDEwXG59KVxuXG5jb25zdCBTaW5nbGVTZWxlY3Rpb24gPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YmxvY2ssIG9uRGVsZXRlLCBpc0F1ZGl0cywgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNFZGl0aW5nLCBvbkVkaXR9ID0gcHJvcHNcbiAgY29uc3Qge25hbWUsIHR5cGV9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlfSA9IGJsb2NrWydzaW5nbGVfc2VsZWN0aW9uJ10gfHwge31cbiAgY29uc3QgaXNUYXNrID0gIWlzRWRpdGluZyAmJiAhaXNBdWRpdHNcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoYmxvY2tbdHlwZV0ub3B0aW9ucylcbiAgY29uc3Qgb3B0aW9ucyA9IGlzRWRpdGluZyA/IGJsb2NrW3R5cGVdLm9wdGlvbnMgOiBsaXN0XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgLi4ucHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3fX1cbiAgICAgICAgLCBuYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGlzVGFzayAmJiBBcnJheS5pc0FycmF5KGJsb2NrW3R5cGVdLm9wdGlvbnMpICYmIGJsb2NrW3R5cGVdLm9wdGlvbnMubGVuZ3RoID4gMTAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0RmlsdGVyLCB7IGxpc3Q6IGJsb2NrW3R5cGVdLm9wdGlvbnMsIHNldExpc3Q6IHNldExpc3QsIGtleXM6IFsnbmFtZSddLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0N319XG4gICAgICAgICwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJhZGlvLCB7IGtleTogb3B0aW9uSW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LnNpbmdsZV9zZWxlY3Rpb24udmFsdWVgLFxuICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOiBvcHRpb24uaWQgPT09IHZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2VsZWN0aW9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1RleHQudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTGlua2lmeSBmcm9tICdyZWFjdC1saW5raWZ5J1xuXG5pbXBvcnQgQmFzaWNUZXh0QXJlYSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CYXNpY1RleHRBcmVhJ1xuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQucCh7XG4gIGZvbnRTaXplOiAxNixcbiAgbGluZUhlaWdodDogMS4zNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICBjdXJzb3I6ICd0ZXh0J1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dChwcm9wcykge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBoYW5kbGVDaGFuZ2UsIGlzRWRpdGluZywgaW5kZXh9ID0gcHJvcHNcbiAgY29uc3Qge3RleHQsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IHRleHQgfHwge31cbiAgY29uc3QgcmVuZGVyVmFsdWUgPSBpc0VkaXRpbmcgPyBwbGFjZWhvbGRlciA6IHZhbHVlXG5cbiAgY29uc3QgZGVjb3JhdG9yID0gdXNlQ2FsbGJhY2soXG4gICAgKGhyZWYsIHRleHQsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiICxcbiAgICAgICAgICBzdHlsZToge2NvbG9yOiBQQUxFVFRFLkxJTksgLyogdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnICovfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX1cbiAgICAgICAgXG4gICAgICAgICAgLCB0ZXh0XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIFtyZW5kZXJWYWx1ZV1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MH19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYxfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuVEVYVCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAsICFyZWFkT25seSAmJiAhaXNBdWRpdHMgPyAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS50ZXh0LnZhbHVlYCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUgfHwgdmFsdWUsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MX19XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua2lmeSwgeyBjb21wb25lbnREZWNvcmF0b3I6IGRlY29yYXRvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgzfX0sIHJlbmRlclZhbHVlKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0U2VxdWVuY2UudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0U2VxdWVuY2UnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBtYXJnaW5Cb3R0b206IDEwLFxuICBmbGV4OiAnMCAwIGF1dG8nXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0U2VxdWVuY2UocHJvcHMpIHtcbiAgY29uc3Qge2lzQXVkaXRzLCBibG9jaywgb25FZGl0LCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpc0VkaXRpbmcsIGluZGV4LCBzZXRGaWVsZFZhbHVlfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlfSA9IGJsb2NrIHx8IHt9XG4gIGNvbnN0IGRhdGEgPSBpc0VkaXRpbmcgPyBibG9ja1t0eXBlXS5wbGFjZWhvbGRlciA6IGJsb2NrW3R5cGVdLnZhbHVlXG4gIGNvbnN0IHtcbiAgICBkZWxldGVfZGlzYWJsZWQ6IGRlbGV0ZURpc2FibGVkLFxuICAgIGVkaXRfZGlzYWJsZWQ6IGVkaXREaXNhYmxlZCxcbiAgICBvcmRlcmluZ19kaXNhYmxlZDogb3JkZXJpbmdEaXNhYmxlZFxuICB9ID0gYmxvY2tbdHlwZV1cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZGVsZXRlRGlzYWJsZWQsXG4gICAgZWRpdERpc2FibGVkLFxuICAgIG9yZGVyaW5nRGlzYWJsZWRcbiAgfVxuXG4gIGNvbnN0IHRhcmdldE5hbWUgPSBpc0VkaXRpbmdcbiAgICA/IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5wbGFjZWhvbGRlcmBcbiAgICA6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS52YWx1ZWBcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTJ9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLlRFWFQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYxfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VxdWVuY2UsIHtcbiAgICAgICAgICAgIG5hbWU6IHRhcmdldE5hbWUsXG4gICAgICAgICAgICB0YXJnZXROYW1lOiB0YXJnZXROYW1lLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfID0+IF9bdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yLnBsYWNlaG9sZGVyXSkgfHwgW10sXG4gICAgICAgICAgICBzZXR0aW5nczogc2V0dGluZ3MsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJpbXBvcnQgc29ydEJ5IGZyb20gJ2xvZGFzaC5zb3J0YnknXG5cblxuXG5cblxuXG5leHBvcnQgY29uc3Qgc3BsaXRXaXRoT2Zmc2V0cyA9ICh0ZXh0LCBvZmZzZXRzKSA9PiB7XG4gIGxldCBsYXN0RW5kID0gMFxuICBjb25zdCBzcGxpdHMgPSBbXVxuXG4gIGZvciAobGV0IG9mZnNldCBvZiBzb3J0Qnkob2Zmc2V0cywgKG8pID0+IG8uc3RhcnQpKSB7XG4gICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gb2Zmc2V0XG4gICAgaWYgKGxhc3RFbmQgPCBzdGFydCkge1xuICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICBzdGFydDogbGFzdEVuZCxcbiAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgY29udGVudDogdGV4dC5zbGljZShsYXN0RW5kLCBzdGFydClcbiAgICAgIH0pXG4gICAgfVxuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIC4uLm9mZnNldCxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgfSlcbiAgICBsYXN0RW5kID0gZW5kXG4gIH1cbiAgaWYgKGxhc3RFbmQgPCB0ZXh0Lmxlbmd0aCkge1xuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIHN0YXJ0OiBsYXN0RW5kLFxuICAgICAgZW5kOiB0ZXh0Lmxlbmd0aCxcbiAgICAgIGNvbnRlbnQ6IHRleHQuc2xpY2UobGFzdEVuZCwgdGV4dC5sZW5ndGgpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzcGxpdHNcbn1cblxuZXhwb3J0IGNvbnN0IHNwbGl0VG9rZW5zV2l0aE9mZnNldHMgPSAodGV4dCwgb2Zmc2V0cykgPT4ge1xuICBsZXQgbGFzdEVuZCA9IDBcbiAgY29uc3Qgc3BsaXRzID0gW11cblxuICBmb3IgKGxldCBvZmZzZXQgb2Ygc29ydEJ5KG9mZnNldHMsIChvKSA9PiBvLnN0YXJ0KSkge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IG9mZnNldFxuICAgIGlmIChsYXN0RW5kIDwgc3RhcnQpIHtcbiAgICAgIGZvciAobGV0IGkgPSBsYXN0RW5kOyBpIDwgc3RhcnQ7IGkrKykge1xuICAgICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgICAgaSxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0W2ldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIC4uLm9mZnNldCxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpLmpvaW4oJyAnKVxuICAgIH0pXG4gICAgbGFzdEVuZCA9IGVuZFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IGxhc3RFbmQ7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3BsaXRzLnB1c2goe1xuICAgICAgaSxcbiAgICAgIGNvbnRlbnQ6IHRleHRbaV1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHNwbGl0c1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uSXNFbXB0eSA9IChzZWxlY3Rpb24pID0+IHtcbiAgbGV0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmFuY2hvck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oc2VsZWN0aW9uLmZvY3VzTm9kZSlcblxuICByZXR1cm4gcG9zaXRpb24gPT09IDAgJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0ID09PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Jc0JhY2t3YXJkcyA9IChzZWxlY3Rpb24pID0+IHtcbiAgaWYgKHNlbGVjdGlvbklzRW1wdHkoc2VsZWN0aW9uKSkgcmV0dXJuIGZhbHNlXG5cbiAgbGV0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmFuY2hvck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oc2VsZWN0aW9uLmZvY3VzTm9kZSlcblxuICBsZXQgYmFja3dhcmQgPSBmYWxzZVxuICBpZiAoXG4gICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSB8fFxuICAgIHBvc2l0aW9uID09PSBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElOR1xuICApXG4gICAgYmFja3dhcmQgPSB0cnVlXG5cbiAgcmV0dXJuIGJhY2t3YXJkXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvdGV4dC1hbm5vdGF0b3IvTWFyay50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTWFyayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y29sb3IsIHN0YXJ0LCBlbmQsIGNvbnRlbnQsIHRhZywgb25DbGlja30gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbWFyaycsIHtcbiAgICAgIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiBjb2xvciB8fCAnIzg0ZDJmZicsIHBhZGRpbmc6ICcwIDRweCd9LFxuICAgICAgJ2RhdGEtc3RhcnQnOiBzdGFydCxcbiAgICAgICdkYXRhLWVuZCc6IGVuZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG9uQ2xpY2soe3N0YXJ0LCBlbmR9KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3fX1cbiAgICBcbiAgICAgICwgY29udGVudFxuICAgICAgLCB0YWcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgc3R5bGU6IHtmb250U2l6ZTogJzAuN2VtJywgZm9udFdlaWdodDogNTAwLCBtYXJnaW5MZWZ0OiA2fSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0fX0sIHRhZylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL3RleHQtYW5ub3RhdG9yL1RleHRBbm5vdGF0b3IudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWFyayBmcm9tICcuL01hcmsnXG5pbXBvcnQge3NlbGVjdGlvbklzRW1wdHksIHNlbGVjdGlvbklzQmFja3dhcmRzLCBzcGxpdFdpdGhPZmZzZXRzfSBmcm9tICcuL0Z1bmN0aW9ucydcblxuXG5jb25zdCBTcGxpdCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMubWFyaykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFyaywgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDh9fSApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgJ2RhdGEtc3RhcnQnOiBwcm9wcy5zdGFydCxcbiAgICAgICdkYXRhLWVuZCc6IHByb3BzLmVuZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHByb3BzLm9uQ2xpY2soe3N0YXJ0OiBwcm9wcy5zdGFydCwgZW5kOiBwcm9wcy5lbmR9KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExfX1cbiAgICBcbiAgICAgICwgcHJvcHMuY29udGVudFxuICAgIClcbiAgKVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgVGV4dEFubm90YXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBnZXRTcGFuID0gKHNwYW4pID0+IHtcbiAgICAvLyBUT0RPOiBCZXR0ZXIgdHlwaW5ncyBoZXJlLlxuICAgIGlmIChwcm9wcy5nZXRTcGFuKSByZXR1cm4gcHJvcHMuZ2V0U3BhbihzcGFuKSBcbiAgICByZXR1cm4ge3N0YXJ0OiBzcGFuLnN0YXJ0LCBlbmQ6IHNwYW4uZW5kfSBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5vbkNoYW5nZSkgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcblxuICAgIGlmICghc2VsZWN0aW9uLmFuY2hvck5vZGUgfHwgIXNlbGVjdGlvbi5mb2N1c05vZGUgfHwgc2VsZWN0aW9uSXNFbXB0eShzZWxlY3Rpb24pKSByZXR1cm5cblxuICAgIGxldCBzdGFydCA9XG4gICAgICBwYXJzZUludChzZWxlY3Rpb24uYW5jaG9yTm9kZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgK1xuICAgICAgc2VsZWN0aW9uLmFuY2hvck9mZnNldFxuICAgIGxldCBlbmQgPVxuICAgICAgcGFyc2VJbnQoc2VsZWN0aW9uLmZvY3VzTm9kZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgK1xuICAgICAgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0XG5cbiAgICBpZiAoXG4gICAgICAhTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgfHxcbiAgICAgICFOdW1iZXIuaXNJbnRlZ2VyKGVuZCkgfHxcbiAgICAgIHNlbGVjdGlvbi5hbmNob3JOb2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHNlbGVjdGlvbi5mb2N1c05vZGUpICE9PSAwXG4gICAgKSB7XG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvbklzQmFja3dhcmRzKHNlbGVjdGlvbikpIHtcbiAgICAgIDtbc3RhcnQsIGVuZF0gPSBbZW5kLCBzdGFydF1cbiAgICB9XG5cbiAgICBwcm9wcy5vbkNoYW5nZShbLi4ucHJvcHMudmFsdWUsIGdldFNwYW4oe3N0YXJ0LCBlbmQsIHRleHQ6IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCl9KV0pXG5cbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3BsaXRDbGljayA9ICh7c3RhcnQsIGVuZH0pID0+IHtcbiAgICAvLyBGaW5kIGFuZCByZW1vdmUgdGhlIG1hdGNoaW5nIHNwbGl0LlxuICAgIGNvbnN0IHNwbGl0SW5kZXggPSBwcm9wcy52YWx1ZS5maW5kSW5kZXgoKHMpID0+IHMuc3RhcnQgPT09IHN0YXJ0ICYmIHMuZW5kID09PSBlbmQpXG4gICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoWy4uLnByb3BzLnZhbHVlLnNsaWNlKDAsIHNwbGl0SW5kZXgpLCAuLi5wcm9wcy52YWx1ZS5zbGljZShzcGxpdEluZGV4ICsgMSldKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHtjb250ZW50LCB2YWx1ZSwgc3R5bGV9ID0gcHJvcHNcbiAgY29uc3Qgc3BsaXRzID0gc3BsaXRXaXRoT2Zmc2V0cyhjb250ZW50LCB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHN0eWxlLCBvbk1vdXNlVXA6IGhhbmRsZU1vdXNlVXAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAsIHNwbGl0cy5tYXAoKHNwbGl0KSA9PiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BsaXQsIHsga2V5OiBgJHtzcGxpdC5zdGFydH0tJHtzcGxpdC5lbmR9YCwgLi4uc3BsaXQsIG9uQ2xpY2s6IGhhbmRsZVNwbGl0Q2xpY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19IClcbiAgICAgICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbm5vdGF0b3JcbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VQcmV2aW91cyA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByZXZpb3VzIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhdGVwaWNrZXItb3ZlcnJpZGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVhY3QtZ3JpZC1sYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVhY3QtcmVzaXphYmxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JnbC1vdmVyaWRlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHN0cmluZ1RvSGFzaCBmcm9tICcuL3N0cmluZ1RvSGFzaCdcbmltcG9ydCB7QmFja2dyb3VuZENvbG9yc30gZnJvbSAnY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBnZXRDb2xvciA9IChpZGVudGlmaWVyKSA9PiBCYWNrZ3JvdW5kQ29sb3JzW2lkZW50aWZpZXIgJSBCYWNrZ3JvdW5kQ29sb3JzLmxlbmd0aF1cblxuZXhwb3J0IGNvbnN0IGNvbG9yRnJvbVN0cmluZyA9IChzdHJpbmcpID0+IGdldENvbG9yKE1hdGguYWJzKHN0cmluZ1RvSGFzaChzdHJpbmcpKSlcblxuZXhwb3J0IGNvbnN0IGNvbG9yQnlJbmRleCA9IChpbmRleCkgPT4gZ2V0Q29sb3IoaW5kZXgpXG4iLCJjb25zdCBnZXRJdGVtU3R5bGUgPSAoX2lzRHJhZ2dpbmcsIGRyYWdnYWJsZVN0eWxlKSA9PiB7XG4gIGNvbnN0IHt0cmFuc2Zvcm19ID0gZHJhZ2dhYmxlU3R5bGVcbiAgbGV0IGFjdGl2ZVRyYW5zZm9ybSA9IHt9XG4gIGlmICh0cmFuc2Zvcm0pIHtcbiAgICBhY3RpdmVUcmFuc2Zvcm0gPSB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMCwgJHt0cmFuc2Zvcm0uc3Vic3RyaW5nKFxuICAgICAgICB0cmFuc2Zvcm0uaW5kZXhPZignLCcpICsgMSxcbiAgICAgICAgdHJhbnNmb3JtLmluZGV4T2YoJyknKVxuICAgICAgKX0pYFxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAvLyBiYWNrZ3JvdW5kOiBpc0RyYWdnaW5nID8gJyNmZmYnIDogJyNmZmYnLFxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAuLi5kcmFnZ2FibGVTdHlsZSxcbiAgICAuLi5hY3RpdmVUcmFuc2Zvcm1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJdGVtU3R5bGVcbiIsImNvbnN0IGlzRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAhdmFsdWUubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHlBcnJheVxuIiwiY29uc3Qgc3RyaW5nVG9IYXNoID0gKHN0cmluZykgPT4ge1xuICBsZXQgaGFzaCA9IDAsXG4gICAgaSxcbiAgICBjaHJcbiAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNociA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNoclxuICAgIGhhc2ggfD0gMFxuICB9XG4gIHJldHVybiBoYXNoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvSGFzaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==