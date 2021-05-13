(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConnectionsContainer"],{

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

/***/ "./src/universal/components/Checkbox.tsx":
/*!***********************************************!*\
  !*** ./src/universal/components/Checkbox.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/Checkbox.tsx";



const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
  target: "esvdrc80"
})(() => (
/* {disabled} */
{
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  background: '#fff',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 12,
  paddingLeft: 35,
  position: 'relative',
  userSelect: 'none',
  transition: '.3s ease all',
  width: '100%',
  '&::before': {
    background: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
    borderRadius: 2,
    border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
    content: '""',
    height: '20px',
    width: '20px',
    left: 0,
    position: 'absolute',
    top: 'calc(50% - 10px)',
    transition: '.3s ease background-color'
  }
}));

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "esvdrc81"
})("position:absolute;visibility:hidden;&:checked + ", Label, "{border-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";}&:checked + ", Label, ":before{background-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIyLjAyOTY4IC00MC4wOTAzIDI2IDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT48cGF0aCBkPSJNMjcuOTc0MywtMzYuMTI3MmMwLDAuNDQ2NDI4IC0wLjE1NjI1LDAuODI1ODkzIC0wLjQ2ODc1LDEuMTM4MzlsLTEyLjEyMDUsMTIuMTIwNWwtMi4yNzY3OSwyLjI3Njc5Yy0wLjMxMjUsMC4zMTI1IC0wLjY5MTk2NCwwLjQ2ODc1IC0xLjEzODM5LDAuNDY4NzVjLTAuNDQ2NDI4LDAgLTAuODI1ODkzLC0wLjE1NjI1IC0xLjEzODM5LC0wLjQ2ODc1bC0yLjI3Njc5LC0yLjI3Njc5bC02LjA2MDI3LC02LjA2MDI3Yy0wLjMxMjUsLTAuMzEyNSAtMC40Njg3NSwtMC42OTE5NjUgLTAuNDY4NzUsLTEuMTM4MzljMCwtMC40NDY0MjkgMC4xNTYyNSwtMC44MjU4OTMgMC40Njg3NSwtMS4xMzgzOWwyLjI3Njc5LC0yLjI3Njc5YzAuMzEyNSwtMC4zMTI1IDAuNjkxOTY1LC0wLjQ2ODc1IDEuMTM4MzksLTAuNDY4NzVjMC40NDY0MjksMCAwLjgyNTg5MywwLjE1NjI1IDEuMTM4MzksMC40Njg3NWw0LjkyMTg4LDQuOTM4NjJsMTAuOTgyMSwtMTAuOTk4OWMwLjMxMjUsLTAuMzEyNSAwLjY5MTk2NCwtMC40Njg3NSAxLjEzODM5LC0wLjQ2ODc1YzAuNDQ2NDI4LDAgMC44MjU4OTMsMC4xNTYyNSAxLjEzODM5LDAuNDY4NzVsMi4yNzY3OCwyLjI3Njc5YzAuMzEyNSwwLjMxMjUgMC40Njg3NSwwLjY5MTk2NCAwLjQ2ODc1LDEuMTM4MzlaIiB0cmFuc2Zvcm09InNjYWxlKDEuMDAxOTgpIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-position:center;background-size:9px;}");

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
      lineNumber: 64
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }
  /* disabled={disabled} */
  , label));
});
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

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

/***/ "./src/universal/components/PageHeader.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/PageHeader.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/PageHeader.tsx";


const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15cd91d0"
})(({
  multiColumn
}) => ({
  display: 'grid',
  gridTemplateColumns: multiColumn ? '50% 50%' : '1fr',
  gridColumnGap: 50,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '95px 80px 40px',
  backgroundColor: '#fff'
}));

const AppHeader = props => {
  const {
    leftBarItems,
    rightBarItems
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    multiColumn: rightBarItems && leftBarItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, leftBarItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, rightBarItems));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

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

/***/ "./src/universal/modules/queue/components/APITaskCompleted.tsx":
/*!*********************************************************************!*\
  !*** ./src/universal/modules/queue/components/APITaskCompleted.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CodeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeBox */ "./src/universal/modules/queue/components/CodeBox.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/APITaskCompleted.tsx";



const APITaskCompleted = props => {
  const {
    apiKey,
    orgId,
    queue
  } = props;
  const {
    id: queueId
  } = queue;
  const API_HOST = `${"http://localhost:8000"}/orgs/${orgId}/queues/${queueId}/tasks/completed`;
  const codeString = `curl -v ${API_HOST} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Token ${apiKey}"
  `;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CodeBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isApi: true,
    queue: queue,
    instructions: "To fetch all of this queue's completed tasks, run the following POST request",
    codeString: codeString,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (APITaskCompleted);

/***/ }),

/***/ "./src/universal/modules/queue/components/APITaskUpload.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/modules/queue/components/APITaskUpload.tsx ***!
  \******************************************************************/
/*! exports provided: StyledContainer, Instructions, customStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructions", function() { return Instructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customStyle", function() { return customStyle; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var _CodeBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeBox */ "./src/universal/modules/queue/components/CodeBox.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/APITaskUpload.tsx";

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






const StyledContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ervdepk0"
})({
  name: "fyoyof",
  styles: "display:flex;flex-direction:column;margin:0 auto;padding:25px;> pre{border-radius:8px;}"
});
const Instructions = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ervdepk1"
})({
  marginBottom: 25,
  lineHeight: 1.4,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  fontSize: 15,
  textAlign: 'left'
});
const customStyle = {
  fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].MONOSPACE,
  fontSize: 13,
  whiteSpace: 'pre-wrap'
};
const sampleValues = {
  text: `"This is some random text"`,
  image: `"https://example.com/random-picture.jpg"`,
  audio: `"https://example.com/random-song.mp3"`,
  video: `"https://example.com/random-video.mp4"`,
  email: `"alice@example.com"`,
  link: `"https://example.com"`,
  number: 42,
  date: `"MM/DD/YYYY"`,
  binary: `true`,
  single_selection: `"<id-1>"`,
  multiple_selection: `[<id-1>, <id-2>]`,
  form_sequence: `{<q1-id>: <q1-value>, <q2-id>: <q2-value>}`,
  embed: `"https://example.com"`,
  pdf: `"https://example.com/file.pdf"`,
  bounding_boxes: `"https://example.com/random-picture.jpg"`,
  named_entity_recognition: `{"text": "This is some random text", "entities": []}`,
  rich_text: `"Tell a story"`,
  text_sequence: ['foo', 'bar']
};

function generateValue(input, spaces) {
  const type = input.type;
  let value;

  switch (type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NUMBER:
      value = _optionalChain([input, 'access', _ => _[type], 'optionalAccess', _2 => _2.placeholder]);
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION:
      value = `"${_optionalChain([input, 'access', _3 => _3[type], 'optionalAccess', _4 => _4.options, 'access', _5 => _5[0], 'access', _6 => _6['id']])}"`;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].MULTIPLE_SELECTION:
      value = `["${_optionalChain([input, 'access', _7 => _7[type], 'optionalAccess', _8 => _8.options, 'access', _9 => _9[0], 'access', _10 => _10['id']])}"]`;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].FORM_SEQUENCE:
      let sequence_data = '{\n';
      let EOL = ',\n';
      const inputs = input[type].data;

      for (let i = 0; i < inputs.length; i++) {
        const el = inputs[i];
        EOL = i < inputs.length - 1 ? EOL : '\n';
        sequence_data = sequence_data + generateRow(el, spaces + '  ') + EOL;
      }

      value = sequence_data + spaces + '}';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION:
      const ner_text_value = _optionalChain([input, 'access', _11 => _11[type], 'optionalAccess', _12 => _12.placeholder]) && _optionalChain([input, 'access', _13 => _13[type], 'optionalAccess', _14 => _14.placeholder, 'access', _15 => _15.length]) > 0 ? input[type].placeholder : 'This is some random text';
      value = `{"text": ${JSON.stringify(ner_text_value)}, "entities": []}`;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BOUNDING_BOXES:
      const bb_text_value = _optionalChain([input, 'access', _16 => _16[type], 'optionalAccess', _17 => _17.placeholder]) && _optionalChain([input, 'access', _18 => _18[type], 'optionalAccess', _19 => _19.placeholder, 'access', _20 => _20.length]) > 0 ? input[type].placeholder : sampleValues.bounding_boxes;
      value = `{"value": {"image": ${bb_text_value}}, "objects": []}`;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].TEXT_SEQUENCE:
      value = _optionalChain([input, 'access', _21 => _21[type], 'optionalAccess', _22 => _22.placeholder, 'access', _23 => _23.length]) > 0 ? JSON.stringify(_optionalChain([input, 'access', _24 => _24[type], 'optionalAccess', _25 => _25.placeholder])) : JSON.stringify(sampleValues[type]);
      break;

    default:
      value = _optionalChain([input, 'access', _26 => _26[type], 'optionalAccess', _27 => _27.placeholder]) ? JSON.stringify(_optionalChain([input, 'access', _28 => _28[type], 'optionalAccess', _29 => _29.placeholder])) : null;
  }

  return value;
}

function generateRow(input, spaces) {
  const type = input.type;
  const value = generateValue(input, spaces);
  const payloadSampleText = `${value || sampleValues[type]}`;
  return `${spaces}"${input.id}": ${payloadSampleText}`;
}

function generateDataSample(inputs) {
  let payloadString = '';
  let EOL = ',\n';

  for (let i = 0; i < inputs.length; i++) {
    EOL = i < inputs.length - 1 ? EOL : '';
    payloadString = payloadString + generateRow(inputs[i], '      ') + EOL;
  }

  return payloadString;
}

const APITaskUpload = props => {
  const {
    apiKey,
    orgId,
    queueId,
    queue
  } = props;
  const {
    data = []
  } = queue;
  const API_HOST = `${"http://localhost:8000"}/orgs/${orgId}/queues/${queueId}/tasks/create`;
  const dataObj = generateDataSample(data);
  const codeString = `curl -v ${API_HOST} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Token ${apiKey}" \\
  -d '{"data":
    {
${[dataObj]}
    }
  }'
`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isApi: true,
    queue: queue,
    codeString: codeString,
    instructions: `
        To enable workers to work tasks on this queue you will need to add some tasks. The
        fastest way to add tasks is by utilizing the Human Lambdas API. To create your first task
        run the following POST request:
        `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (APITaskUpload);

/***/ }),

/***/ "./src/universal/modules/queue/components/AddTasksSwitcher.tsx":
/*!*********************************************************************!*\
  !*** ./src/universal/modules/queue/components/AddTasksSwitcher.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/AddTasksSwitcher.tsx";




const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eabkxst0"
})({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  paddingLeft: 80,
  marginTop: 25,
  width: 250,
  borderRight: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_GRAY_MID}`
});

const Section = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eabkxst1"
})({
  name: "1yjvs5a",
  styles: "margin-bottom:32px;"
});

const MenuHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eabkxst2"
})({
  name: "vs2nz5",
  styles: "font-weight:500;font-size:16px;line-height:19px;margin-bottom:8px;"
});

const MenuItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  target: "eabkxst3"
})(({
  active
}) => ({
  width: 100,
  borderRadius: 0,
  color: active ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  paddingLeft: 10,
  height: 24,
  justifyContent: 'left',
  fontSize: 14,
  marginTop: 10
}));

const AddTasksSwitcher = props => {
  const {
    setApiView,
    apiView
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Sources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('sources/api'),
    active: apiView === 'sources/api',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('sources/csv'),
    active: apiView === 'sources/csv',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "CSV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('sources/zapier'),
    active: apiView === 'sources/zapier',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "Zapier")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "Destinations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('destinations/webhooks'),
    active: apiView === 'destinations/webhooks',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Webhooks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('destinations/api'),
    active: apiView === 'destinations/api',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('destinations/csv'),
    active: apiView === 'destinations/csv',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "CSV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItem, {
    onClick: () => setApiView('destinations/zapier'),
    active: apiView === 'destinations/zapier',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "Zapier")));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTasksSwitcher);

/***/ }),

/***/ "./src/universal/modules/queue/components/CodeBox.tsx":
/*!************************************************************!*\
  !*** ./src/universal/modules/queue/components/CodeBox.tsx ***!
  \************************************************************/
/*! exports provided: StyledContainer, Instructions, style, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructions", function() { return Instructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/index.js");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/CodeBox.tsx";
/**
* TODO
* 1) Create theme from palette
*/







const StyledContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezl4svf0"
})(({
  isApi
}) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: 25,
  position: 'relative',
  '> pre': _objectSpread({
    padding: '20px 20px 30px 20px !important',
    borderRadius: 8
  }, isApi && {
    '> code > span': {
      color: 'rgb(34, 162, 201) !important'
    }
  })
}));

const StyledText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezl4svf1"
})({
  name: "82sb5r",
  styles: "cursor:pointer;position:absolute;bottom:17px;right:12px;font-size:9pt;margin:25px;color:#6648ee;font-weight:500;"
});

const Instructions = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezl4svf2"
})({
  marginBottom: 25,
  lineHeight: 1.4,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_DARK_GRAY,
  fontSize: 15,
  textAlign: 'left'
});
const style = {
  fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_5__["FONT_FAMILY"].MONOSPACE,
  fontSize: 13
};

const APITaskUpload = props => {
  const {
    instructions,
    codeString,
    padding,
    language,
    isApi
  } = props;
  const [buttonText, setButtonText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Copy to clipboard');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, {
    isApi: isApi,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Instructions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, instructions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["Prism"], {
    language: language,
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_4__["base16AteliersulphurpoolLight"],
    codeTagProps: {
      style
    },
    wrapLines: true,
    customStyle: {
      padding: padding || '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, codeString), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_6__["CopyToClipboard"], {
    text: codeString,
    onCopy: () => {
      setButtonText('Copied');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, buttonText)));
};

APITaskUpload.defaultProps = {
  language: 'bash'
};
/* harmony default export */ __webpack_exports__["default"] = (APITaskUpload);

/***/ }),

/***/ "./src/universal/modules/queue/components/Connections.tsx":
/*!****************************************************************!*\
  !*** ./src/universal/modules/queue/components/Connections.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json2csv */ "./node_modules/json2csv/dist/json2csv.umd.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json2csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _AddTasksSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddTasksSwitcher */ "./src/universal/modules/queue/components/AddTasksSwitcher.tsx");
/* harmony import */ var _APITaskUpload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./APITaskUpload */ "./src/universal/modules/queue/components/APITaskUpload.tsx");
/* harmony import */ var _APITaskCompleted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./APITaskCompleted */ "./src/universal/modules/queue/components/APITaskCompleted.tsx");
/* harmony import */ var _DownloadCSV__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DownloadCSV */ "./src/universal/modules/queue/components/DownloadCSV.tsx");
/* harmony import */ var _UpdateWebhook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./UpdateWebhook */ "./src/universal/modules/queue/components/UpdateWebhook.tsx");
/* harmony import */ var universal_components_PageHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/PageHeader */ "./src/universal/components/PageHeader.tsx");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var _ZapierContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ZapierContainer */ "./src/universal/modules/queue/components/ZapierContainer.tsx");
/* harmony import */ var _CodeBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CodeBox */ "./src/universal/modules/queue/components/CodeBox.tsx");
/* harmony import */ var client_components_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! client/components/Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var client_components_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! client/components/MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_components_MenuButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! client/components/MenuButton */ "./src/client/components/MenuButton.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/Connections.tsx";

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


























const PageContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f0"
})({
  name: "kwpy6p",
  styles: "display:flex;flex:1;flex-direction:column;overflow:hidden;background-color:#fff;"
});

const MainContents = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f1"
})({
  name: "1y4zoqs",
  styles: "display:flex;background-color:#fff;height:100%;width:100%;overflow:hidden;"
});

const ContentBody = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f2"
})({
  name: "sawbab",
  styles: "padding:0 50px;min-width:500px;max-width:800px;overflow:auto;margin:0 auto;"
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "eifie8f3"
})({
  name: "y4izj1",
  styles: "font-size:24px;font-weight:600;line-height:30px;"
});

const DropWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f4"
})({
  name: "4ivt70",
  styles: "padding:28px 25px 50px;background-color:#fff;height:100%;display:flex;flex-direction:column;margin:0 auto;justify-content:space-between;align-items:center;position:relative;"
});

const SelectedRegion = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f5"
})({
  name: "nln4uz",
  styles: "float:left;font-weight:bold;font-size:15px;& button{float:right;margin-left:5px;margin-top:-3px;}"
});

const RegionText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f6"
})({
  name: "lq620h",
  styles: "float:left;margin-right:5px;font-size:15px;color:rgb(0,0,0,0.5);"
});

const RegionContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f7"
})({
  name: "re6bs7",
  styles: "margin:0 25px;float:left;width:100%;"
});

const Zone = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f8"
})(({
  isDragActive,
  uploadComplete,
  error,
  backendProcessing
}) => {
  let borderColor = isDragActive ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN : uploadComplete && !error && backendProcessing == 2 ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BORDER_MAIN_GRAY;

  if (error) {
    borderColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].ERROR_MAIN;
  }

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20vh',
    border: `2px ${isDragActive ? 'solid' : 'dashed'} ${borderColor}`,
    outline: 'none',
    borderRadius: 4,
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.25s ease-in-out'
  };
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
  target: "eifie8f9"
})({
  display: 'block',
  fontSize: 84,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_GRAY
});

const DropIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
  target: "eifie8f10"
})(({
  successful
}) => {
  const color = successful ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_GRAY;
  return {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: universal_styles_typography__WEBPACK_IMPORTED_MODULE_6__["ICON_SIZE"].MD24,
    color,
    marginRight: 5
  };
});

const StyledLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f11"
})({
  name: "r1w8cg",
  styles: "display:flex;flex-direction:row;align-items:center;margin:0 20px;"
});

const LinkContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f12"
})({
  name: "ncg23o",
  styles: "display:inline-box;"
});

const Link = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
  target: "eifie8f13"
})({
  padding: 0,
  marginRight: 10,
  fontSize: 24,
  maxWidth: 350,
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: 600,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN,
  textDecoration: 'underline',
  textTransform: 'capitalize'
});

const StyledText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eifie8f14"
})(({
  isDragActive,
  successful,
  error
}) => {
  let color = isDragActive ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN : successful ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN;

  if (error) {
    color = universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].ERROR_MAIN;
  }

  return {
    fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_6__["FONT_FAMILY"].SANS_SERIF,
    color,
    fontSize: 18,
    fontWeight: 500
  };
});

const getValue = block => {
  const type = block.type;
  let value;

  switch (type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].SINGLE_SELECTION:
      value = _optionalChain([block, 'access', _ => _[type], 'optionalAccess', _2 => _2.options, 'access', _3 => _3[0], 'access', _4 => _4['id']]);
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].MULTIPLE_SELECTION:
      value = `["${_optionalChain([block, 'access', _5 => _5[type], 'optionalAccess', _6 => _6.options, 'access', _7 => _7[0], 'access', _8 => _8['id']])}"]`;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].BOUNDING_BOXES:
      const bbImage = _optionalChain([block, 'access', _9 => _9[type], 'optionalAccess', _10 => _10.placeholder]) || universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["SAMPLE_VALUES"]['image'];
      const bbValue = `{'image': '${bbImage}', 'objects': []}`;
      value = JSON.stringify(bbValue);
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION:
      const nerText = _optionalChain([block, 'access', _11 => _11[type], 'optionalAccess', _12 => _12.placeholder]) || universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["SAMPLE_VALUES"]['text'];
      const nerValue = `{'text': '${nerText}', 'entities': []}`;
      value = JSON.stringify(nerValue);
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].FORM_SEQUENCE:
      const formSequenceString = block[type].data.reduce((acc, blk, index, blocks) => {
        const val = getValue(blk) || universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["SAMPLE_VALUES"][blk.type];
        const sep = typeof val === 'string' ? "'" : '';

        if (index < blocks.length - 1) {
          return `${acc}'${blk.id}': ${sep}${val}${sep}, `;
        } else {
          return `${acc}'${blk.id}': ${sep}${val}${sep}}`;
        }
      }, '{');
      value = JSON.stringify(formSequenceString);
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].TEXT_SEQUENCE:
      const textSequenceValue = _optionalChain([block, 'access', _13 => _13[type], 'optionalAccess', _14 => _14.placeholder, 'access', _15 => _15.length]) > 0 ? _optionalChain([block, 'access', _16 => _16[type], 'optionalAccess', _17 => _17.placeholder]) : universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["SAMPLE_VALUES"][type];
      value = '"[' + textSequenceValue.map(a => `'${a}'`) + ']"';
      break;

    default:
      value = _optionalChain([block, 'access', _18 => _18[type], 'optionalAccess', _19 => _19.placeholder]) ? _optionalChain([block, 'access', _20 => _20[type], 'optionalAccess', _21 => _21.placeholder]) : universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["SAMPLE_VALUES"][type];
  }

  return value;
};

const Connections = props => {
  const {
    apiKey,
    onDropHandler,
    queueId,
    history,
    completed,
    file,
    user,
    queue,
    backendProcessing,
    error,
    region,
    setRegion
  } = props;
  const {
    current_organization_id: orgId
  } = user;
  const [apiView, setApiView] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('sources/api');
  const [csvString, setCSV] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    name
  } = queue || {};
  const {
    menuPortal,
    togglePortal,
    originRef,
    menuProps
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_22__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_21__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const generateSampleCsv = queue => {
      const {
        data = []
      } = queue;
      let headers = '';
      let values = '';
      let EOL = ',';
      const mappedValues = {};
      data.forEach((block, i) => {
        EOL = i < data.length - 1 ? EOL : '';
        headers = headers + block.id + EOL;
        values = values + getValue(block) + EOL;
        mappedValues[block.id] = getValue(block);
      });
      const opts = {
        quote: '',
        escapedQuote: ''
      };

      try {
        const csv = Object(json2csv__WEBPACK_IMPORTED_MODULE_4__["parse"])([mappedValues], opts);
        setCSV(csv);
      } catch (err) {
        console.error(err);
        setCSV('');
      }
    };

    generateSampleCsv(queue);
  }, [queue]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    onDrop: onDropHandler,
    maxSize: client_utils_constants__WEBPACK_IMPORTED_MODULE_8__["MAX_FILE_SIZE"],
    accept: client_utils_constants__WEBPACK_IMPORTED_MODULE_8__["SUPPORTED_FILES"]
  });
  const uploadComplete = file && file.name && completed === 100;
  const isUploading = file && file.name && completed !== undefined && completed < 100;

  const renderIcon = () => {
    if (uploadComplete && !error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropIcon, {
        successful: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, "cloud_done");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, isUploading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropIcon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "cloud_queue") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropIcon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, "add"));
    }
  };

  const renderUserMessage = () => {
    if (uploadComplete && backendProcessing === 2 && !error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
        successful: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, `${file.name} successfully uploaded!`);
    } else if (error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, `There was an error with processing ${file.name}: ${error}`);
    } else if (isUploading || backendProcessing) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, `${completed}%${backendProcessing === 1 ? ' uploaded, processing on server ...' : ''}`);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
        isDragActive: isDragActive,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, "Click or Drop a CSV file here to create tasks");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PageHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
    leftBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
      onClick: () => history.push(`/queues/${queueId}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      }
    }, "/ Connections")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainContents, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddTasksSwitcher__WEBPACK_IMPORTED_MODULE_10__["default"], {
    setApiView: setApiView,
    apiView: apiView,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBody, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    }
  }, apiView === 'sources/api' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_APITaskUpload__WEBPACK_IMPORTED_MODULE_11__["default"], {
    orgId: orgId,
    queueId: queueId,
    queue: queue,
    apiKey: apiKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    }
  }) : apiView === 'sources/csv' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CodeBox__WEBPACK_IMPORTED_MODULE_18__["default"], {
    queue: queue,
    codeString: csvString,
    language: "text",
    instructions: `
                  To add tasks on this workflow you will need to create a CSV (comma-separated values) file.
                  To create your first task use the copy the format in the text below into a .csv file and upload to the drag area.
                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    }
  }), universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["FEATURE_TOGGLES"].UPLOAD_CSV_REGION_ORGS.includes(orgId) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RegionContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RegionText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    }
  }, "Upload to a specific region: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectedRegion, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    }
  }, region, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
    type: "button",
    onClick: togglePortal,
    ref: originRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    }
  })), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Menu__WEBPACK_IMPORTED_MODULE_19__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Filter range'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: 'Default',
    onClick: () => setRegion('Default'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: 'EU',
    onClick: () => setRegion('EU'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: 'US',
    onClick: () => setRegion('US'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    label: 'Australia',
    onClick: () => setRegion('AU'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DropWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Zone, _objectSpread(_objectSpread({}, getRootProps()), {}, {
    isDragActive: isDragActive,
    uploadComplete: uploadComplete,
    error: error,
    backendProcessing: backendProcessing,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', _objectSpread(_objectSpread({}, getInputProps()), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    }
  })), isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    }
  }, "cloud_upload") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLine, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    }
  }, renderIcon(), renderUserMessage())))) : apiView === 'sources/zapier' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ZapierContainer__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "source",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    }
  }) : apiView === 'destinations/webhooks' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UpdateWebhook__WEBPACK_IMPORTED_MODULE_14__["default"], {
    orgId: orgId,
    queue: queue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    }
  }) : apiView === 'destinations/api' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_APITaskCompleted__WEBPACK_IMPORTED_MODULE_12__["default"], {
    orgId: orgId,
    queueId: queueId,
    apiKey: apiKey,
    queue: queue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    }
  }) : apiView === 'destinations/csv' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DownloadCSV__WEBPACK_IMPORTED_MODULE_13__["default"], {
    orgId: orgId,
    queue: queue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    }
  }) : apiView === 'destinations/zapier' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ZapierContainer__WEBPACK_IMPORTED_MODULE_17__["default"], {
    type: "destination",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('h1', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    }
  }, "connection not found"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Connections));

/***/ }),

/***/ "./src/universal/modules/queue/components/DownloadCSV.tsx":
/*!****************************************************************!*\
  !*** ./src/universal/modules/queue/components/DownloadCSV.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/ActionButton */ "./src/client/components/ActionButton.tsx");
/* harmony import */ var _APITaskUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./APITaskUpload */ "./src/universal/modules/queue/components/APITaskUpload.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/DatePicker */ "./src/universal/components/DatePicker.tsx");
/* harmony import */ var universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Checkbox */ "./src/universal/components/Checkbox.tsx");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/DownloadCSV.tsx";

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













const Text = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_APITaskUpload__WEBPACK_IMPORTED_MODULE_6__["Instructions"], {
  target: "e1ksqat10"
})({
  name: "61kktm",
  styles: "width:300px;color:rgb(0, 0, 0, 0.5);"
});

const DownloadButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_ActionButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e1ksqat11"
})({
  name: "17us1a6",
  styles: "margin-top:15px;width:96px;height:32px;"
});

const FormContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  target: "e1ksqat12"
})({
  name: "1v010y4",
  styles: "display:flex;height:100%;flex-direction:column;padding:25px;width:calc(100vw / 2);"
});

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ksqat13"
})({
  name: "qnadp9",
  styles: "display:flex;flex-direction:column;margin-bottom:15px;width:300px;"
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ksqat14"
})({
  name: "108zu42",
  styles: "display:grid;grid-template-columns:1fr auto;align-items:center;"
});

const CheckFieldWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldWrapper, {
  target: "e1ksqat15"
})({
  name: "cdzxb5",
  styles: "grid-template-columns:auto auto;margin-top:10px;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ksqat16"
})({
  name: "s8mgpy",
  styles: "font-size:15px;color:rgb(0, 0, 0, 0.5);line-height:1.4;padding-top:10px;"
});

const DownloadCSV = props => {
  const {
    orgId,
    queue,
    dispatch
  } = props;
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const handleDownloadCSV = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async values => {
    const {
      id,
      name
    } = queue;
    const {
      startDate,
      endDate,
      correct
    } = values;

    if (id) {
      const {
        data,
        errors
      } = await networker.httpHandler(`/orgs/${orgId}/queues/tasks/completed-tasks-csv`, {
        method: 'GET',
        responseType: 'text/csv',
        params: _objectSpread(_objectSpread(_objectSpread({
          queue_id: id
        }, correct && {
          correct
        }), startDate && {
          start_date: Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_10__["toIsoString"])(startDate)
        }), endDate && {
          end_date: Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_10__["toIsoString"])(endDate)
        })
      }, false);

      if (!errors) {
        const url = window.URL.createObjectURL(new Blob([data]));
        const csvLink = document.createElement('a');
        csvLink.href = url;
        csvLink.setAttribute('download', `${name}-completed-tasks.csv`);
        document.body.appendChild(csvLink);
        csvLink.click();
      } else {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__["addFailureNotification"])('No tasks to export'));
      }
    }
  }, []);
  const initialValues = {
    startDate: null,
    endDate: null,
    correct: false
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: handleDownloadCSV,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__["csvDownloadSchema"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, ({
    values,
    errors,
    isValid,
    isSubmitting
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      }
    }, "Export all tasks in this queue as CSV."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      }
    }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: _optionalChain([errors, 'optionalAccess', _ => _.startDate]),
      name: `startDate`,
      value: values.startDate,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      }
    }, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: _optionalChain([errors, 'optionalAccess', _2 => _2.endDate]),
      name: `endDate`,
      value: values.endDate,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckFieldWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      name: "correct",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      }
    }, ({
      field
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
      type: "checkbox",
      id: "correct",
      checked: field.value,
      label: '',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      style: {
        width: 300,
        padding: 0,
        lineHeight: '20px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      }
    }, "Only include approved tasks from Audits"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DownloadButton, {
      disabled: isSubmitting || !isValid,
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      }
    }, "Export"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(DownloadCSV));

/***/ }),

/***/ "./src/universal/modules/queue/components/Instructions.tsx":
/*!*****************************************************************!*\
  !*** ./src/universal/modules/queue/components/Instructions.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");



const Instructions = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e20t8q80"
})({
  marginBottom: 25,
  lineHeight: 1.4,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_DARK_GRAY,
  fontSize: 15,
  textAlign: 'left',
  '> p': {
    paddingTop: 10
  },
  '> p > a': {
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].PRIMARY_MAIN
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Instructions);

/***/ }),

/***/ "./src/universal/modules/queue/components/StyledContainer.tsx":
/*!********************************************************************!*\
  !*** ./src/universal/modules/queue/components/StyledContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const StyledContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14ydh0m0"
})({
  name: "fyoyof",
  styles: "display:flex;flex-direction:column;margin:0 auto;padding:25px;> pre{border-radius:8px;}"
});

/* harmony default export */ __webpack_exports__["default"] = (StyledContainer);

/***/ }),

/***/ "./src/universal/modules/queue/components/UpdateWebhook.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/modules/queue/components/UpdateWebhook.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/ActionButton */ "./src/client/components/ActionButton.tsx");
/* harmony import */ var _APITaskUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APITaskUpload */ "./src/universal/modules/queue/components/APITaskUpload.tsx");
/* harmony import */ var client_components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/InputField */ "./src/client/components/InputField.tsx");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/UpdateWebhook.tsx";








const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mo2lr50"
})({
  name: "d7ynra",
  styles: "display:flex;flex-direction:column;margin:0 auto;align-items:center;padding-top:96px;"
});

const Form = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mo2lr51"
})({
  name: "16fpczb",
  styles: "display:flex;width:700px;"
});

const Text = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_APITaskUpload__WEBPACK_IMPORTED_MODULE_4__["Instructions"], {
  target: "e1mo2lr52"
})({
  name: "fzwid6",
  styles: "width:100%;text-align:center;"
});

const DownloadButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e1mo2lr53"
})({
  name: "2h61ue",
  styles: "width:96px;height:32px;margin-left:8px;"
});

const UpdateWebhook = props => {
  const {
    orgId,
    queue
  } = props;
  const [newWebhook, setNewWebhook] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(queue.webhook !== undefined && queue.webhook.target !== undefined ? queue.webhook.target : '');
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const onChange = e => {
    setNewWebhook(e.target.value);
  };

  const handleSubmit = async () => {
    const reqBody = {
      method: 'PATCH',
      data: {
        target: newWebhook
      }
    };
    const response = await networker.httpHandler(`/orgs/${orgId}/queues/${queue.id}/webhook`, reqBody);

    if (response.errors) {
      response.errors.forEach(e => {
        props.addFailureNotification(e.message);
      });
    } else {
      props.addSuccessNotification('Webhook URL successfully updated!');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "Update this queue's webhook URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: onChange,
    placeholder: 'New Webhook URL',
    value: newWebhook,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DownloadButton, {
    onClick: () => {
      handleSubmit();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "Submit")));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(UpdateWebhook));

/***/ }),

/***/ "./src/universal/modules/queue/components/ZapierContainer.tsx":
/*!********************************************************************!*\
  !*** ./src/universal/modules/queue/components/ZapierContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instructions */ "./src/universal/modules/queue/components/Instructions.tsx");
/* harmony import */ var _StyledContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledContainer */ "./src/universal/modules/queue/components/StyledContainer.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/ZapierContainer.tsx";





const DESTINATION_TEMPLATES = '415035,415168,415208,415264,415267,415303,415278';
const SOURCE_TEMPLATES = '414927,414980,415030,415042,415192,415250,415293,415278';

const StyledZapierContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1sbzhe50"
})(".zapier-templates-widget > .zap-widget > .zap-row > .zap-inner-container{& > .zap-description{margin-bottom:25px;line-height:1.4;color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_DARK_GRAY, ";font-size:15px;text-align:left;padding-top:10px;}& > .zap-cta > .zap-button-outline{color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN, ";border:1px solid ", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN, ";border-radius:4px;font-size:14px;font-weight:500;box-shadow:rgba(15,15,15,0.1) 0px 0px 0px 1px inset,rgba(15,15,15,0.1) 0px 1px 2px;outline:0;transition:all 0.25s ease-in-out;padding:0 10px;&:focus,&:hover,&:active{background:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BACKGROUND_HOVER_LIGHT, ";border:1px solid ", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN_DARK, ";color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN_DARK, ";}}}");

const ZapierContainer = props => {
  const {
    type
  } = props;
  const containerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  const instruction = type === 'source' ? 'Connect 2,000+ apps into your queue to automatically create new tasks with our Zapier integration.' : 'Connect your queue into 2,000+ apps to automatically send completed tasks to your favorite apps with our Zapier integration.';
  const templates = {
    source: SOURCE_TEMPLATES,
    destination: DESTINATION_TEMPLATES
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const script = document.createElement('script');
    const params = {
      html_id: 'zapier_embeddable',
      inheritFont: true,
      buttonType: 'outline',
      guided_zaps: templates[type]
    };
    script.src = `https://zapier.com/apps/embed/widget.js?${qs__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(params)}`;
    containerRef && containerRef.current.appendChild(script);
  }, [type]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Instructions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, instruction, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('p', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
    href: "https://zapier.com/apps/human-lambdas/integrations",
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Zapier"), ' ', "lets you connect Human Lambdas to 2,000+ other web services. Automated connections called Zaps, set up in minutes with no coding, can automate your day-to-day tasks and build queues between apps that otherwise wouldn't be possible.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledZapierContainer, {
    id: "zapier_embeddable",
    ref: containerRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ZapierContainer);

/***/ }),

/***/ "./src/universal/modules/queue/containers/ConnectionsContainer.tsx":
/*!*************************************************************************!*\
  !*** ./src/universal/modules/queue/containers/ConnectionsContainer.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Connections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Connections */ "./src/universal/modules/queue/components/Connections.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/containers/ConnectionsContainer.tsx";








const CSV_ROW_LIMIT = 1000;
const CONTACT_EMAIL = 'contact@humanlambdas.com';

const ConnectionsContainer = props => {
  const {
    user
  } = props;
  const {
    current_organization_id: orgId
  } = user || {};
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    queueId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [queue, setQueue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [completed, setCompleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [backendProcessing, setBackendProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [file, setFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [apiKey, setAPIKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [region, setRegion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Default');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueue() {
      try {
        const {
          data: queue
        } = await networker.httpHandler(`/orgs/${orgId}/queues/${queueId}`, {
          method: 'GET'
        });
        const {
          data: apiKey
        } = await networker.httpHandler(`/users/api-token`, {
          method: 'GET'
        });
        setQueue(queue);
        setAPIKey(apiKey.token);
      } catch (error) {
        setError('Unable to fetch queue!');
        console.error(JSON.stringify(error));
        history.push(`/queue`);
      }
    }

    fetchQueue();
  }, [queueId]);
  const handleFileUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    async function uploadFile() {
      setBackendProcessing(0);
      setCompleted(0);
      const config = {
        data,
        method: 'POST',
        contentType: 'multipart/form-data',
        onUploadProgress: e => {
          const progress = Math.round(e.loaded * 100 / e.total);
          setCompleted(progress);

          if (progress === 100) {
            setBackendProcessing(1);
          }
        }
      };
      let uploadPath = `/orgs/${orgId}/queues/${queueId}/upload`;

      if (region == 'US' || region == "AU") {
        uploadPath = `/orgs/${orgId}/queues/${queueId}/upload?region=${region}`;
      }

      const res = await networker.httpHandler(uploadPath, config);
      setBackendProcessing(2);

      if (res.errors) {
        res.errors.forEach(error => {
          _sentry_browser__WEBPACK_IMPORTED_MODULE_3__["withScope"](scope => {
            scope.setLevel(_sentry_browser__WEBPACK_IMPORTED_MODULE_3__["Severity"].Error);
            _sentry_browser__WEBPACK_IMPORTED_MODULE_3__["captureException"](error.message);
          });
          setError(error.message);
        });
      }
    }

    uploadFile();
  }, [networker, file, region]);
  const onDropHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((acceptedFiles, rejectedFiles) => {
    rejectedFiles.forEach(_file => {
      setError('This filetype is currently not supported!');
    });
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = async () => {
        if (queueId) {
          setFile(file);
          const data = new FormData();
          data.append('file', file);
          papaparse__WEBPACK_IMPORTED_MODULE_4___default.a.parse(file, {
            header: true,
            newline: '\r\n',
            skipEmptyLines: false,
            error: error => {
              if (error) {
                setError('File not formatted corectly');
              }
            },
            complete: papaData => {
              if (papaData.data.length > CSV_ROW_LIMIT) {
                setError(`You cannot upload more than ${CSV_ROW_LIMIT} tasks. Please contact ${CONTACT_EMAIL} to increase this limit`);
              }

              return handleFileUpload(data);
            }
          });
        } else {
          setError('');
        }
      };

      setError('');

      reader.onabort = () => setError('File upload has been aborted!');

      reader.onerror = () => {
        setError('Error processing file!');
      };

      reader.readAsBinaryString(file);
    });
  }, [networker, completed, queueId, queue, region]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Connections__WEBPACK_IMPORTED_MODULE_5__["default"], {
    apiKey: apiKey,
    onDropHandler: onDropHandler,
    error: error,
    history: history,
    completed: completed,
    file: file,
    queueId: queueId,
    user: props.user,
    queue: queue,
    backendProcessing: backendProcessing,
    region: region,
    setRegion: setRegion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(ConnectionsContainer));

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

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvZGF0ZXBpY2tlci1vdmVycmlkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NZW51QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3R5bGVkRXJyb3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9QYWdlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvZHlDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tDb21wbGV0ZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tVcGxvYWQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FkZFRhc2tzU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0NvZGVCb3gudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0Nvbm5lY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9Eb3dubG9hZENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvSW5zdHJ1Y3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TdHlsZWRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1VwZGF0ZVdlYmhvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1phcGllckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbnRhaW5lcnMvQ29ubmVjdGlvbnNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcz84ODU0Iiwid2VicGFjazovLy8uL3V0aWwuaW5zcGVjdCAoaWdub3JlZCkiXSwibmFtZXMiOlsiQWN0aW9uQnV0dG9uIiwiUGxhaW5CdXR0b24iLCJ3YWl0aW5nIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQQUxFVFRFIiwiUFJJTUFSWV9NQUlOIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwib3V0bGluZSIsImJveFNoYWRvdyIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInRyYW5zaXRpb24iLCJwYWRkaW5nIiwiUFJJTUFSWV9NQUlOX0RBUksiLCJCT1hfU0hBRE9XX1BSSU1BUlkiLCJfanN4RmlsZU5hbWUiLCJUaHJlZURvdHNTVkciLCJtZW1vIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwidmlld0JveCIsIndpZHRoIiwieG1sbnMiLCJmaWxsIiwiVEVYVF9NQUlOIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkIiwiSW5wdXQiLCJlcnJvciIsImRpc3BsYXkiLCJhcHBlYXJhbmNlIiwiRVJST1JfTUFJTiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJib3hTaXppbmciLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiY3Vyc29yIiwiYm9yZGVyQ29sb3IiLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJzdHlsZSIsInNwZWxsQ2hlY2siLCJGcmFnbWVudCIsIkJvb2xlYW4iLCJTdHlsZWRFcnJvciIsIkNvbnRhaW5lciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkJBQ0tHUk9VTkRfSE9WRVIiLCJNZW51QnV0dG9uIiwib25DbGljayIsIlRocmVlRG90c0ljb24iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZ0xlZnQiLCJwb3NpdGlvbiIsInVzZXJTZWxlY3QiLCJCQUNLR1JPVU5EX01BSU4iLCJjb250ZW50IiwibGVmdCIsInRvcCIsIkNoZWNrYm94IiwiaWQiLCJjaGVja2VkIiwiaHRtbEZvciIsIlN0eWxlZERhdGVQaWNrZXIiLCJEYXRlUGlja2VyIiwiRGF0ZUlucHV0IiwiaGlkZUVycm9yTWVzc2FnZSIsIkN1c3RvbURhdGVQaWNrZXIiLCJyZWFkT25seSIsImlzVGFza01lbnUiLCJzZXRWYWx1ZSIsInVzZUZpZWxkIiwiY29udGFpbmVyU3R5bGUiLCJoYW5kbGVDaGFuZ2VSYXciLCJldmVudCIsInZhbGlkQ2hhcnMiLCJ0ZXN0IiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwiRGF0ZSIsImhhbmRsZUNoYW5nZSIsImRhdGUiLCJCb2R5Q29udGFpbmVyIiwiY3VzdG9tSW5wdXQiLCJzZWxlY3RlZCIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZGF5Q2xhc3NOYW1lIiwic2hvdWxkQ2xvc2VPblNlbGVjdCIsIm9uQ2hhbmdlUmF3IiwicGxhY2Vob2xkZXJUZXh0IiwiZ2V0RGlzcGxheUZvcm1hdCIsImRhdGVGb3JtYXQiLCJkaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbiIsIm11bHRpQ29sdW1uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRDb2x1bW5HYXAiLCJBcHBIZWFkZXIiLCJsZWZ0QmFySXRlbXMiLCJyaWdodEJhckl0ZW1zIiwicm93IiwiZmxvYXQiLCJwYWRkaW5nVG9wIiwiZmxleERpcmVjdGlvbiIsImNoaWxkcmVuIiwiQVBJVGFza0NvbXBsZXRlZCIsImFwaUtleSIsIm9yZ0lkIiwicXVldWUiLCJxdWV1ZUlkIiwiQVBJX0hPU1QiLCJfX0FQUF9VUkxfXyIsImNvZGVTdHJpbmciLCJDb2RlQm94IiwiaXNBcGkiLCJpbnN0cnVjdGlvbnMiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiU3R5bGVkQ29udGFpbmVyIiwiSW5zdHJ1Y3Rpb25zIiwibWFyZ2luQm90dG9tIiwiY3VzdG9tU3R5bGUiLCJNT05PU1BBQ0UiLCJ3aGl0ZVNwYWNlIiwic2FtcGxlVmFsdWVzIiwidGV4dCIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsImVtYWlsIiwibGluayIsIm51bWJlciIsImJpbmFyeSIsInNpbmdsZV9zZWxlY3Rpb24iLCJtdWx0aXBsZV9zZWxlY3Rpb24iLCJmb3JtX3NlcXVlbmNlIiwiZW1iZWQiLCJwZGYiLCJib3VuZGluZ19ib3hlcyIsIm5hbWVkX2VudGl0eV9yZWNvZ25pdGlvbiIsInJpY2hfdGV4dCIsInRleHRfc2VxdWVuY2UiLCJnZW5lcmF0ZVZhbHVlIiwiaW5wdXQiLCJzcGFjZXMiLCJCTE9DS19UWVBFIiwiTlVNQkVSIiwiXyIsIl8yIiwiU0lOR0xFX1NFTEVDVElPTiIsIl8zIiwiXzQiLCJvcHRpb25zIiwiXzUiLCJfNiIsIk1VTFRJUExFX1NFTEVDVElPTiIsIl83IiwiXzgiLCJfOSIsIl8xMCIsIkZPUk1fU0VRVUVOQ0UiLCJzZXF1ZW5jZV9kYXRhIiwiRU9MIiwiaW5wdXRzIiwiZGF0YSIsImVsIiwiZ2VuZXJhdGVSb3ciLCJOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04iLCJuZXJfdGV4dF92YWx1ZSIsIl8xMSIsIl8xMiIsIl8xMyIsIl8xNCIsIl8xNSIsIkpTT04iLCJzdHJpbmdpZnkiLCJCT1VORElOR19CT1hFUyIsImJiX3RleHRfdmFsdWUiLCJfMTYiLCJfMTciLCJfMTgiLCJfMTkiLCJfMjAiLCJURVhUX1NFUVVFTkNFIiwiXzIxIiwiXzIyIiwiXzIzIiwiXzI0IiwiXzI1IiwiXzI2IiwiXzI3IiwiXzI4IiwiXzI5IiwicGF5bG9hZFNhbXBsZVRleHQiLCJnZW5lcmF0ZURhdGFTYW1wbGUiLCJwYXlsb2FkU3RyaW5nIiwiQVBJVGFza1VwbG9hZCIsImRhdGFPYmoiLCJtYXJnaW5Ub3AiLCJib3JkZXJSaWdodCIsIkJBQ0tHUk9VTkRfR1JBWV9NSUQiLCJTZWN0aW9uIiwiTWVudUhlYWRlciIsIk1lbnVJdGVtIiwiYWN0aXZlIiwiQWRkVGFza3NTd2l0Y2hlciIsInNldEFwaVZpZXciLCJhcGlWaWV3IiwiU3R5bGVkVGV4dCIsIlRFWFRfREFSS19HUkFZIiwibGFuZ3VhZ2UiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInVzZVN0YXRlIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJiYXNlMTZBdGVsaWVyc3VscGh1cnBvb2xMaWdodCIsImNvZGVUYWdQcm9wcyIsIndyYXBMaW5lcyIsIkNvcHlUb0NsaXBib2FyZCIsIm9uQ29weSIsImRlZmF1bHRQcm9wcyIsIlBhZ2VDb250YWluZXIiLCJNYWluQ29udGVudHMiLCJDb250ZW50Qm9keSIsIkRyb3BXcmFwcGVyIiwiU2VsZWN0ZWRSZWdpb24iLCJSZWdpb25UZXh0IiwiUmVnaW9uQ29udGFpbmVyIiwiWm9uZSIsImlzRHJhZ0FjdGl2ZSIsInVwbG9hZENvbXBsZXRlIiwiYmFja2VuZFByb2Nlc3NpbmciLCJQUklNQVJZX0dSRUVOIiwibWluSGVpZ2h0IiwiU3R5bGVkSWNvbiIsIkljb24iLCJEcm9wSWNvbiIsInN1Y2Nlc3NmdWwiLCJ2ZXJ0aWNhbEFsaWduIiwiSUNPTl9TSVpFIiwiTUQyNCIsIm1hcmdpblJpZ2h0IiwiU3R5bGVkTGluZSIsIkxpbmtDb250YWluZXIiLCJMaW5rIiwiUm9vdEJ1dHRvbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJnZXRWYWx1ZSIsImJsb2NrIiwiYmJJbWFnZSIsIlNBTVBMRV9WQUxVRVMiLCJiYlZhbHVlIiwibmVyVGV4dCIsIm5lclZhbHVlIiwiZm9ybVNlcXVlbmNlU3RyaW5nIiwicmVkdWNlIiwiYWNjIiwiYmxrIiwiaW5kZXgiLCJibG9ja3MiLCJ2YWwiLCJzZXAiLCJ0ZXh0U2VxdWVuY2VWYWx1ZSIsIm1hcCIsImEiLCJDb25uZWN0aW9ucyIsIm9uRHJvcEhhbmRsZXIiLCJoaXN0b3J5IiwiY29tcGxldGVkIiwiZmlsZSIsInVzZXIiLCJyZWdpb24iLCJzZXRSZWdpb24iLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsImNzdlN0cmluZyIsInNldENTViIsIm1lbnVQb3J0YWwiLCJ0b2dnbGVQb3J0YWwiLCJvcmlnaW5SZWYiLCJtZW51UHJvcHMiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfUklHSFQiLCJpc0Ryb3Bkb3duIiwidXNlRWZmZWN0IiwiZ2VuZXJhdGVTYW1wbGVDc3YiLCJoZWFkZXJzIiwidmFsdWVzIiwibWFwcGVkVmFsdWVzIiwiZm9yRWFjaCIsIm9wdHMiLCJxdW90ZSIsImVzY2FwZWRRdW90ZSIsImNzdiIsInBhcnNlIiwiZXJyIiwiY29uc29sZSIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJ1c2VEcm9wem9uZSIsIm9uRHJvcCIsIm1heFNpemUiLCJNQVhfRklMRV9TSVpFIiwiYWNjZXB0IiwiU1VQUE9SVEVEX0ZJTEVTIiwiaXNVcGxvYWRpbmciLCJyZW5kZXJJY29uIiwicmVuZGVyVXNlck1lc3NhZ2UiLCJQYWdlSGVhZGVyIiwicHVzaCIsIkZFQVRVUkVfVE9HR0xFUyIsIlVQTE9BRF9DU1ZfUkVHSU9OX09SR1MiLCJpbmNsdWRlcyIsIk1lbnUiLCJhcmlhTGFiZWwiLCJaYXBpZXJDb250YWluZXIiLCJVcGRhdGVXZWJob29rIiwiRG93bmxvYWRDU1YiLCJ3aXRoUm91dGVyIiwiVGV4dCIsIkRvd25sb2FkQnV0dG9uIiwiRm9ybUNvbnRhaW5lciIsIkZvcm0iLCJDb250ZW50QmxvY2siLCJGaWVsZFdyYXBwZXIiLCJDaGVja0ZpZWxkV3JhcHBlciIsImRpc3BhdGNoIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiaGFuZGxlRG93bmxvYWRDU1YiLCJ1c2VDYWxsYmFjayIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjb3JyZWN0IiwiZXJyb3JzIiwiaHR0cEhhbmRsZXIiLCJtZXRob2QiLCJyZXNwb25zZVR5cGUiLCJwYXJhbXMiLCJxdWV1ZV9pZCIsInN0YXJ0X2RhdGUiLCJ0b0lzb1N0cmluZyIsImVuZF9kYXRlIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsImNzdkxpbmsiLCJkb2N1bWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJpbml0aWFsVmFsdWVzIiwiRm9ybWlrIiwib25TdWJtaXQiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uTW91bnQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiY3N2RG93bmxvYWRTY2hlbWEiLCJpc1N1Ym1pdHRpbmciLCJGaWVsZCIsImZpZWxkIiwiY29ubmVjdCIsIm5ld1dlYmhvb2siLCJzZXROZXdXZWJob29rIiwid2ViaG9vayIsImUiLCJoYW5kbGVTdWJtaXQiLCJyZXFCb2R5IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsIkRFU1RJTkFUSU9OX1RFTVBMQVRFUyIsIlNPVVJDRV9URU1QTEFURVMiLCJTdHlsZWRaYXBpZXJDb250YWluZXIiLCJCQUNLR1JPVU5EX0hPVkVSX0xJR0hUIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiaW5zdHJ1Y3Rpb24iLCJ0ZW1wbGF0ZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNjcmlwdCIsImh0bWxfaWQiLCJpbmhlcml0Rm9udCIsImJ1dHRvblR5cGUiLCJndWlkZWRfemFwcyIsInNyYyIsInFzIiwiY3VycmVudCIsInJlbCIsIkNTVl9ST1dfTElNSVQiLCJDT05UQUNUX0VNQUlMIiwiQ29ubmVjdGlvbnNDb250YWluZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VQYXJhbXMiLCJzZXRRdWV1ZSIsInNldEVycm9yIiwic2V0Q29tcGxldGVkIiwic2V0QmFja2VuZFByb2Nlc3NpbmciLCJzZXRGaWxlIiwic2V0QVBJS2V5IiwiZmV0Y2hRdWV1ZSIsInRva2VuIiwiaGFuZGxlRmlsZVVwbG9hZCIsInVwbG9hZEZpbGUiLCJjb25maWciLCJjb250ZW50VHlwZSIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsIk1hdGgiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwidXBsb2FkUGF0aCIsInJlcyIsIlNlbnRyeSIsInNjb3BlIiwic2V0TGV2ZWwiLCJFcnJvciIsImFjY2VwdGVkRmlsZXMiLCJyZWplY3RlZEZpbGVzIiwiX2ZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwYXBhIiwiaGVhZGVyIiwibmV3bGluZSIsInNraXBFbXB0eUxpbmVzIiwiY29tcGxldGUiLCJwYXBhRGF0YSIsIm9uYWJvcnQiLCJvbmVycm9yIiwicmVhZEFzQmluYXJ5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixpQ0FBaUMsa0JBQWtCLGdCQUFnQiw4QkFBOEIscUJBQXFCLEdBQUcsd0VBQXdFLHFCQUFxQiw4QkFBOEIsR0FBRyxvRkFBb0YsOEJBQThCLEdBQUcsbUJBQW1CLDZCQUE2QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxtQ0FBbUMsaUJBQWlCLGdCQUFnQixHQUFHLHlDQUF5Qyw2QkFBNkIsR0FBRztBQUN2cEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFVQSxNQUFNQSxZQUFZLEdBQUcsa0ZBQU9DLG9EQUFQO0FBQUE7QUFBQSxHQUFvQixDQUFDO0FBQUNDLFNBQUQ7QUFBVUM7QUFBVixDQUFELEtBQXlCO0FBQ2hFO0FBQ0E7QUFDQSxTQUFPO0FBQ0xDLFVBQU0sRUFBRSxFQURIO0FBRUxDLGNBQVUsRUFBRSxNQUZQO0FBR0xDLFNBQUssRUFBRSxNQUhGO0FBSUxDLG1CQUFlLEVBQUVDLHNEQUFPLENBQUNDLFlBSnBCO0FBS0xDLGNBQVUsRUFBRSxHQUxQO0FBTUxDLFlBQVEsRUFBRSxFQU5MO0FBT0xDLFdBQU8sRUFBRSxDQVBKO0FBUUxDLGFBQVMsRUFBRSxnRkFSTjtBQVNMQyxVQUFNLEVBQUUsQ0FUSDtBQVVMQyxnQkFBWSxFQUFFLENBVlQ7QUFXTEMsVUFBTSxFQUFHLHVCQVhKO0FBWUxDLGNBQVUsRUFBRSx1QkFaUDtBQWFMQyxXQUFPLEVB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QSxJQU55QjtBQU8vQjVLLFdBQU8sRUFBRUEsT0FQc0I7QUFRL0I2SyxRQUFJLEVBQUVsUSxLQUFLLENBQUNrUSxJQVJtQjtBQVMvQjlLLFNBQUssRUFBRUEsS0FUd0I7QUFVL0JtSSxxQkFBaUIsRUFBRUEsaUJBVlk7QUFXL0I0QyxVQUFNLEVBQUVBLE1BWHVCO0FBWS9CQyxhQUFTLEVBQUVBLFNBWm9CO0FBWVQ1UixVQUFNLEVBQUUsU0FaQztBQVlLQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFWixZQUFYO0FBQXlCYSxnQkFBVSxFQUFFO0FBQXJDO0FBWmYsR0FBakMsQ0FERjtBQWdCRCxDQXRKRDs7QUF3SmV3WCwwSEFBTyxHQUFHaUMsb0JBQUgsQ0FBdEIsRTs7Ozs7Ozs7Ozs7QUMxS0EsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw0S0FBNkU7O0FBRS9HOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxlIiwiZmlsZSI6IkNvbm5lY3Rpb25zQ29udGFpbmVyXzY4NGNmYTdiMWEyYzA0MmFjMmMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5obC1jYWxlbmRhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY0OGVlO1xcbiAgb3BhY2l0eTogMC4xNTtcXG4gIHotaW5kZXg6IDEwOyAqL1xcbiAgZm9udC1mYW1pbHk6ICdMYW1iZGFzJztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkLCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NDhlZTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZkZjQ7XFxufVxcblxcbi5obC1kYXk6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4Zjk7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHt3YWl0aW5nLCBkaXNhYmxlZH0pID0+IHtcbiAgLy9jb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMjgsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke1BBTEVUVEUuQk9YX1NIQURPV19QUklNQVJZfWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFRocmVlRG90c1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTQ5Ni42NzkgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTMwMy4zNDcgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlRG90c1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAnc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAnY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWR9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ2lucHV0JyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250U2l6ZTogMTUsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2Vycm9yID8gJyNmZmRhY2MnIDogUEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG59KVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuY29uc3QgTGFiZWxIZWxwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEyLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luTGVmdDogNlxufSlcblxuY29uc3QgSW5wdXRGaWVsZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgZXJyb3IsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBsYWJlbCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgIClcbiAgICAgICwgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbi50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRocmVlRG90c0ljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9UaHJlZURvdHNTVkcnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGJvcmRlclJhZGl1czogNTAsXG4gIHdpZHRoOiAyNSxcbiAgaGVpZ2h0OiAyNSxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAwLFxuICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2UtaW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSXG4gIH1cbn0pXG5cbmNvbnN0IE1lbnVCdXR0b24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtvbkNsaWNrLCB0eXBlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHR5cGU6IHR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhyZWVEb3RzSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuRVJST1JfTUFJTixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkRXJyb3JcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbCgoLyoge2Rpc2FibGVkfSAqLykgPT4gKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxMixcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYWxsJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiBQQUxFVFRFLkJBQ0tHUk9VTkRfTUFJTixcbiAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gICAgY29udGVudDogJ1wiXCInLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgbGVmdDogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICdjYWxjKDUwJSAtIDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYmFja2dyb3VuZC1jb2xvcidcbiAgfVxufSkpXG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJjpjaGVja2VkICsgJHtMYWJlbH0ge1xuICAgIC8qIGJhY2tncm91bmQ6ICR7UEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFU1R9OyAqL1xuICAgIGJvcmRlci1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gIH1cbiAgJjpjaGVja2VkICsgJHtMYWJlbH06YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OGMzWm5JSGRwWkhSb1BTSXlOaUlnYUdWcFoyaDBQU0l5TUNJZ2RtVnljMmx2YmowaU1TNHhJaUIyYVdWM1FtOTRQU0l5TGpBeU9UWTRJQzAwTUM0d09UQXpJREkySURJd0lpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OElTMHRSMlZ1WlhKaGRHVmtJR0o1SUVsS1UxWkhJQ2hvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YVdOdmJtcGhjaTlKU2xOV1J5a3RMVDQ4Y0dGMGFDQmtQU0pOTWpjdU9UYzBNeXd0TXpZdU1USTNNbU13TERBdU5EUTJOREk0SUMwd0xqRTFOakkxTERBdU9ESTFPRGt6SUMwd0xqUTJPRGMxTERFdU1UTTRNemxzTFRFeUxqRXlNRFVzTVRJdU1USXdOV3d0TWk0eU56WTNPU3d5TGpJM05qYzVZeTB3TGpNeE1qVXNNQzR6TVRJMUlDMHdMalk1TVRrMk5Dd3dMalEyT0RjMUlDMHhMakV6T0RNNUxEQXVORFk0TnpWakxUQXVORFEyTkRJNExEQWdMVEF1T0RJMU9Ea3pMQzB3TGpFMU5qSTFJQzB4TGpFek9ETTVMQzB3TGpRMk9EYzFiQzB5TGpJM05qYzVMQzB5TGpJM05qYzViQzAyTGpBMk1ESTNMQzAyTGpBMk1ESTNZeTB3TGpNeE1qVXNMVEF1TXpFeU5TQXRNQzQwTmpnM05Td3RNQzQyT1RFNU5qVWdMVEF1TkRZNE56VXNMVEV1TVRNNE16bGpNQ3d0TUM0ME5EWTBNamtnTUM0eE5UWXlOU3d0TUM0NE1qVTRPVE1nTUM0ME5qZzNOU3d0TVM0eE16Z3pPV3d5TGpJM05qYzVMQzB5TGpJM05qYzVZekF1TXpFeU5Td3RNQzR6TVRJMUlEQXVOamt4T1RZMUxDMHdMalEyT0RjMUlERXVNVE00TXprc0xUQXVORFk0TnpWak1DNDBORFkwTWprc01DQXdMamd5TlRnNU15d3dMakUxTmpJMUlERXVNVE00TXprc01DNDBOamczTld3MExqa3lNVGc0TERRdU9UTTROakpzTVRBdU9UZ3lNU3d0TVRBdU9UazRPV013TGpNeE1qVXNMVEF1TXpFeU5TQXdMalk1TVRrMk5Dd3RNQzQwTmpnM05TQXhMakV6T0RNNUxDMHdMalEyT0RjMVl6QXVORFEyTkRJNExEQWdNQzQ0TWpVNE9UTXNNQzR4TlRZeU5TQXhMakV6T0RNNUxEQXVORFk0TnpWc01pNHlOelkzT0N3eUxqSTNOamM1WXpBdU16RXlOU3d3TGpNeE1qVWdNQzQwTmpnM05Td3dMalk1TVRrMk5DQXdMalEyT0RjMUxERXVNVE00TXpsYUlpQjBjbUZ1YzJadmNtMDlJbk5qWVd4bEtERXVNREF4T1RncElpQm1hV3hzUFNJalptWm1JajQ4TDNCaGRHZytQQzl6ZG1jKycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOXB4O1xuICB9XG5gXG5cbmNvbnN0IENoZWNrYm94ID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2F1dG9Gb2N1cywgZGlzYWJsZWQsIGlkLCBjaGVja2VkLCBuYW1lLCBvbkNoYW5nZSwgbGFiZWwsIHZhbHVlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX1cbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBodG1sRm9yOiBpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc0fX0gLyogZGlzYWJsZWQ9e2Rpc2FibGVkfSAqLywgbGFiZWwpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7dXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7aXNWYWxpZH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgRGF0ZVBpY2tlciwge30gZnJvbSAncmVhY3QtZGF0ZXBpY2tlcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IHtnZXREaXNwbGF5Rm9ybWF0fSBmcm9tICdjbGllbnQvdXRpbHMvZGF0ZUhlbHBlcnMnXG5cbmltcG9ydCAncmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZERhdGVQaWNrZXIgPSBzdHlsZWQoRGF0ZVBpY2tlcilgXG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbmBcblxuY29uc3QgRGF0ZUlucHV0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7IGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsIHJlZjogcmVmLCAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX0gKVxufSlcblxuY29uc3QgQ3VzdG9tRGF0ZVBpY2tlciA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtuYW1lLCBwbGFjZWhvbGRlciwgcmVhZE9ubHksIHZhbHVlLCBpc1Rhc2tNZW51LCBlcnJvcn0gPSBwcm9wc1xuICBjb25zdCBbLCAsIHtzZXRWYWx1ZX1dID0gdXNlRmllbGQobmFtZSlcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIC4uLihpc1Rhc2tNZW51ICYmIHtwYWRkaW5nOiAnMHB4J30pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXcgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWxpZENoYXJzID0gL15cXGR7MCwyfVsuL117MCwxfVxcZHswLDJ9Wy4vXXswLDF9XFxkezAsNH0kL1xuICAgIGlmICghdmFsaWRDaGFycy50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZChuZXcgRGF0ZSh2YWx1ZSkpKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGlmIChkYXRlICYmIGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHNldFZhbHVlKGRhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZhbHVlKCcnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHN0eWxlOiBjb250YWluZXJTdHlsZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWREYXRlUGlja2VyLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgY3VzdG9tSW5wdXQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUlucHV0LCB7IGVycm9yOiBlcnJvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY5fX0gKSxcbiAgICAgICAgc2VsZWN0ZWQ6IHZhbHVlICYmIG5ldyBEYXRlKHZhbHVlKSxcbiAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU6IFwiaGwtY2FsZW5kYXJcIixcbiAgICAgICAgZGF5Q2xhc3NOYW1lOiAoKSA9PiAnaGwtZGF5JyxcbiAgICAgICAgc2hvdWxkQ2xvc2VPblNlbGVjdDogZmFsc2UsXG4gICAgICAgIG9uQ2hhbmdlUmF3OiBoYW5kbGVDaGFuZ2VSYXcsXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dDogZ2V0RGlzcGxheUZvcm1hdChwbGFjZWhvbGRlciksXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvTU0veXl5eVwiLFxuICAgICAgICBkaXNhYmxlZDogcmVhZE9ubHksXG4gICAgICAgIGRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRGF0ZVBpY2tlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1BhZ2VIZWFkZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdigoe211bHRpQ29sdW1ufSkgPT4gKHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBtdWx0aUNvbHVtbiA/ICc1MCUgNTAlJyA6ICcxZnInLFxuICBncmlkQ29sdW1uR2FwOiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHBhZGRpbmc6ICc5NXB4IDgwcHggNDBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnXG59KSlcblxuY29uc3QgQXBwSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtsZWZ0QmFySXRlbXMsIHJpZ2h0QmFySXRlbXN9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBtdWx0aUNvbHVtbjogcmlnaHRCYXJJdGVtcyAmJiBsZWZ0QmFySXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjN9fSwgbGVmdEJhckl0ZW1zKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0fX0sIHJpZ2h0QmFySXRlbXMpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyLnRzeFwiO2ltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcblxuXG5cblxuXG5cblxuY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHtyb3d9KSA9PiAoe1xuICBmbG9hdDogJ2xlZnQnLFxuICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246IHJvdyA/ICdyb3cnIDogJ2NvbHVtbidcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVuLCByb3csIHN0eWxlfSkgPT4gKFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHsgc3R5bGU6IHN0eWxlLCByb3c6IHJvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5fX1cbiAgICAsIGNoaWxkcmVuXG4gIClcbilcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tDb21wbGV0ZWQudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvZGVCb3ggZnJvbSAnLi9Db2RlQm94J1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFQSVRhc2tDb21wbGV0ZWQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2FwaUtleSwgb3JnSWQsIHF1ZXVlfSA9IHByb3BzXG4gIGNvbnN0IHtpZDogcXVldWVJZH0gPSBxdWV1ZVxuICBjb25zdCBBUElfSE9TVCA9IGAke19fQVBQX1VSTF9ffS9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzL2NvbXBsZXRlZGBcblxuICBjb25zdCBjb2RlU3RyaW5nID0gYGN1cmwgLXYgJHtBUElfSE9TVH0gXFxcXFxuICAtSCBcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblwiIFxcXFxcbiAgLUggXCJBdXRob3JpemF0aW9uOiBUb2tlbiAke2FwaUtleX1cIlxuICBgXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvZGVCb3gsIHtcbiAgICAgIGlzQXBpOiB0cnVlLFxuICAgICAgcXVldWU6IHF1ZXVlLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBcIlRvIGZldGNoIGFsbCBvZiB0aGlzIHF1ZXVlJ3MgY29tcGxldGVkIHRhc2tzLCBydW4gdGhlIGZvbGxvd2luZyBQT1NUIHJlcXVlc3RcIiAgICAgICAgICAgICxcbiAgICAgIGNvZGVTdHJpbmc6IGNvZGVTdHJpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMn19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSVRhc2tDb21wbGV0ZWRcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tVcGxvYWQudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcblxuaW1wb3J0IENvZGVCb3ggZnJvbSAnLi9Db2RlQm94J1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgcGFkZGluZzogMjUsXG4gICc+IHByZSc6IHtcbiAgICBib3JkZXJSYWRpdXM6IDhcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IEluc3RydWN0aW9ucyA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDI1LFxuICBsaW5lSGVpZ2h0OiAxLjQsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0J1xufSlcblxuZXhwb3J0IGNvbnN0IGN1c3RvbVN0eWxlID0ge1xuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5NT05PU1BBQ0UsXG4gIGZvbnRTaXplOiAxMyxcbiAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJ1xufVxuXG5jb25zdCBzYW1wbGVWYWx1ZXMgPSB7XG4gIHRleHQ6IGBcIlRoaXMgaXMgc29tZSByYW5kb20gdGV4dFwiYCxcbiAgaW1hZ2U6IGBcImh0dHBzOi8vZXhhbXBsZS5jb20vcmFuZG9tLXBpY3R1cmUuanBnXCJgLFxuICBhdWRpbzogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tc29uZy5tcDNcImAsXG4gIHZpZGVvOiBgXCJodHRwczovL2V4YW1wbGUuY29tL3JhbmRvbS12aWRlby5tcDRcImAsXG4gIGVtYWlsOiBgXCJhbGljZUBleGFtcGxlLmNvbVwiYCxcbiAgbGluazogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiYCxcbiAgbnVtYmVyOiA0MixcbiAgZGF0ZTogYFwiTU0vREQvWVlZWVwiYCxcbiAgYmluYXJ5OiBgdHJ1ZWAsXG4gIHNpbmdsZV9zZWxlY3Rpb246IGBcIjxpZC0xPlwiYCxcbiAgbXVsdGlwbGVfc2VsZWN0aW9uOiBgWzxpZC0xPiwgPGlkLTI+XWAsXG4gIGZvcm1fc2VxdWVuY2U6IGB7PHExLWlkPjogPHExLXZhbHVlPiwgPHEyLWlkPjogPHEyLXZhbHVlPn1gLFxuICBlbWJlZDogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiYCxcbiAgcGRmOiBgXCJodHRwczovL2V4YW1wbGUuY29tL2ZpbGUucGRmXCJgLFxuICBib3VuZGluZ19ib3hlczogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tcGljdHVyZS5qcGdcImAsXG4gIG5hbWVkX2VudGl0eV9yZWNvZ25pdGlvbjogYHtcInRleHRcIjogXCJUaGlzIGlzIHNvbWUgcmFuZG9tIHRleHRcIiwgXCJlbnRpdGllc1wiOiBbXX1gLFxuICByaWNoX3RleHQ6IGBcIlRlbGwgYSBzdG9yeVwiYCxcbiAgdGV4dF9zZXF1ZW5jZTogWydmb28nLCAnYmFyJ11cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVWYWx1ZShpbnB1dCwgc3BhY2VzKSB7XG4gIGNvbnN0IHR5cGUgPSBpbnB1dC50eXBlXG4gIGxldCB2YWx1ZVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTlVNQkVSOlxuICAgICAgdmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfID0+IF9bdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yLnBsYWNlaG9sZGVyXSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IGBcIiR7X29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzMgPT4gXzNbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80Lm9wdGlvbnMsICdhY2Nlc3MnLCBfNSA9PiBfNVswXSwgJ2FjY2VzcycsIF82ID0+IF82WydpZCddXSl9XCJgXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IGBbXCIke19vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF83ID0+IF83W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOCA9PiBfOC5vcHRpb25zLCAnYWNjZXNzJywgXzkgPT4gXzlbMF0sICdhY2Nlc3MnLCBfMTAgPT4gXzEwWydpZCddXSl9XCJdYFxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRTpcbiAgICAgIGxldCBzZXF1ZW5jZV9kYXRhID0gJ3tcXG4nXG4gICAgICBsZXQgRU9MID0gJyxcXG4nXG4gICAgICBjb25zdCBpbnB1dHMgPSBpbnB1dFt0eXBlXS5kYXRhXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbCA9IGlucHV0c1tpXVxuICAgICAgICBFT0wgPSBpIDwgaW5wdXRzLmxlbmd0aCAtIDEgPyBFT0wgOiAnXFxuJ1xuICAgICAgICBzZXF1ZW5jZV9kYXRhID0gc2VxdWVuY2VfZGF0YSArIGdlbmVyYXRlUm93KGVsLCBzcGFjZXMgKyAnICAnKSArIEVPTFxuICAgICAgfVxuICAgICAgdmFsdWUgPSBzZXF1ZW5jZV9kYXRhICsgc3BhY2VzICsgJ30nXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT046XG4gICAgICBjb25zdCBuZXJfdGV4dF92YWx1ZSA9XG4gICAgICAgIF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8xMSA9PiBfMTFbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8xMiA9PiBfMTIucGxhY2Vob2xkZXJdKSAmJiBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfMTMgPT4gXzEzW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTQgPT4gXzE0LnBsYWNlaG9sZGVyLCAnYWNjZXNzJywgXzE1ID0+IF8xNS5sZW5ndGhdKSA+IDBcbiAgICAgICAgICA/IGlucHV0W3R5cGVdLnBsYWNlaG9sZGVyXG4gICAgICAgICAgOiAnVGhpcyBpcyBzb21lIHJhbmRvbSB0ZXh0J1xuICAgICAgdmFsdWUgPSBge1widGV4dFwiOiAke0pTT04uc3RyaW5naWZ5KG5lcl90ZXh0X3ZhbHVlKX0sIFwiZW50aXRpZXNcIjogW119YFxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVM6XG4gICAgICBjb25zdCBiYl90ZXh0X3ZhbHVlID1cbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzE2ID0+IF8xNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE3ID0+IF8xNy5wbGFjZWhvbGRlcl0pICYmIF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8xOCA9PiBfMThbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8xOSA9PiBfMTkucGxhY2Vob2xkZXIsICdhY2Nlc3MnLCBfMjAgPT4gXzIwLmxlbmd0aF0pID4gMFxuICAgICAgICAgID8gaW5wdXRbdHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICA6IHNhbXBsZVZhbHVlcy5ib3VuZGluZ19ib3hlc1xuICAgICAgdmFsdWUgPSBge1widmFsdWVcIjoge1wiaW1hZ2VcIjogJHtiYl90ZXh0X3ZhbHVlfX0sIFwib2JqZWN0c1wiOiBbXX1gXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFOlxuICAgICAgdmFsdWUgPVxuICAgICAgICBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfMjEgPT4gXzIxW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjIgPT4gXzIyLnBsYWNlaG9sZGVyLCAnYWNjZXNzJywgXzIzID0+IF8yMy5sZW5ndGhdKSA+IDBcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8yNCA9PiBfMjRbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yNSA9PiBfMjUucGxhY2Vob2xkZXJdKSlcbiAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHNhbXBsZVZhbHVlc1t0eXBlXSlcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzI2ID0+IF8yNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzI3ID0+IF8yNy5wbGFjZWhvbGRlcl0pID8gSlNPTi5zdHJpbmdpZnkoX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzI4ID0+IF8yOFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzI5ID0+IF8yOS5wbGFjZWhvbGRlcl0pKSA6IG51bGxcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3coaW5wdXQsIHNwYWNlcykge1xuICBjb25zdCB0eXBlID0gaW5wdXQudHlwZVxuICBjb25zdCB2YWx1ZSA9IGdlbmVyYXRlVmFsdWUoaW5wdXQsIHNwYWNlcylcblxuICBjb25zdCBwYXlsb2FkU2FtcGxlVGV4dCA9IGAke3ZhbHVlIHx8IHNhbXBsZVZhbHVlc1t0eXBlXX1gXG5cbiAgcmV0dXJuIGAke3NwYWNlc31cIiR7aW5wdXQuaWR9XCI6ICR7cGF5bG9hZFNhbXBsZVRleHR9YFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGFTYW1wbGUoaW5wdXRzKSB7XG4gIGxldCBwYXlsb2FkU3RyaW5nID0gJydcbiAgbGV0IEVPTCA9ICcsXFxuJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgRU9MID0gaSA8IGlucHV0cy5sZW5ndGggLSAxID8gRU9MIDogJydcbiAgICBwYXlsb2FkU3RyaW5nID0gcGF5bG9hZFN0cmluZyArIGdlbmVyYXRlUm93KGlucHV0c1tpXSwgJyAgICAgICcpICsgRU9MXG4gIH1cbiAgcmV0dXJuIHBheWxvYWRTdHJpbmdcbn1cblxuY29uc3QgQVBJVGFza1VwbG9hZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YXBpS2V5LCBvcmdJZCwgcXVldWVJZCwgcXVldWV9ID0gcHJvcHNcbiAgY29uc3Qge2RhdGEgPSBbXX0gPSBxdWV1ZVxuXG4gIGNvbnN0IEFQSV9IT1NUID0gYCR7X19BUFBfVVJMX199L29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvY3JlYXRlYFxuICBjb25zdCBkYXRhT2JqID0gZ2VuZXJhdGVEYXRhU2FtcGxlKGRhdGEpXG5cbiAgY29uc3QgY29kZVN0cmluZyA9IGBjdXJsIC12ICR7QVBJX0hPU1R9IFxcXFxcbiAgLUggXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIiBcXFxcXG4gIC1IIFwiQXV0aG9yaXphdGlvbjogVG9rZW4gJHthcGlLZXl9XCIgXFxcXFxuICAtZCAne1wiZGF0YVwiOlxuICAgIHtcbiR7W2RhdGFPYmpdfVxuICAgIH1cbiAgfSdcbmBcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29kZUJveCwge1xuICAgICAgaXNBcGk6IHRydWUsXG4gICAgICBxdWV1ZTogcXVldWUsXG4gICAgICBjb2RlU3RyaW5nOiBjb2RlU3RyaW5nLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBgXG4gICAgICAgIFRvIGVuYWJsZSB3b3JrZXJzIHRvIHdvcmsgdGFza3Mgb24gdGhpcyBxdWV1ZSB5b3Ugd2lsbCBuZWVkIHRvIGFkZCBzb21lIHRhc2tzLiBUaGVcbiAgICAgICAgZmFzdGVzdCB3YXkgdG8gYWRkIHRhc2tzIGlzIGJ5IHV0aWxpemluZyB0aGUgSHVtYW4gTGFtYmRhcyBBUEkuIFRvIGNyZWF0ZSB5b3VyIGZpcnN0IHRhc2tcbiAgICAgICAgcnVuIHRoZSBmb2xsb3dpbmcgUE9TVCByZXF1ZXN0OlxuICAgICAgICBgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ5fX1cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJVGFza1VwbG9hZFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQWRkVGFza3NTd2l0Y2hlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBwYWRkaW5nTGVmdDogODAsXG4gIG1hcmdpblRvcDogMjUsXG4gIHdpZHRoOiAyNTAsXG4gIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7UEFMRVRURS5CQUNLR1JPVU5EX0dSQVlfTUlEfWBcbn0pXG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2KHttYXJnaW5Cb3R0b206IDMyfSlcblxuY29uc3QgTWVudUhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA1MDAsXG4gIGZvbnRTaXplOiAnMTZweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOXB4JyxcbiAgbWFyZ2luQm90dG9tOiA4XG59KVxuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHthY3RpdmV9KSA9PiAoe1xuICB3aWR0aDogMTAwLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIGNvbG9yOiBhY3RpdmUgPyBQQUxFVFRFLlBSSU1BUllfTUFJTiA6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIGhlaWdodDogMjQsXG4gIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIGZvbnRTaXplOiAxNCxcbiAgbWFyZ2luVG9wOiAxMFxufSkpXG5cbmNvbnN0IEFkZFRhc2tzU3dpdGNoZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldEFwaVZpZXcsIGFwaVZpZXd9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX0sIFwiU291cmNlc1wiKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsgb25DbGljazogKCkgPT4gc2V0QXBpVmlldygnc291cmNlcy9hcGknKSwgYWN0aXZlOiBhcGlWaWV3ID09PSAnc291cmNlcy9hcGknLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSwgXCJBUElcIlxuXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IG9uQ2xpY2s6ICgpID0+IHNldEFwaVZpZXcoJ3NvdXJjZXMvY3N2JyksIGFjdGl2ZTogYXBpVmlldyA9PT0gJ3NvdXJjZXMvY3N2JywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX0sIFwiQ1NWXCJcblxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdzb3VyY2VzL3phcGllcicpLCBhY3RpdmU6IGFwaVZpZXcgPT09ICdzb3VyY2VzL3phcGllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1N319LCBcIlphcGllclwiXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjF9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUhlYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19LCBcIkRlc3RpbmF0aW9uc1wiKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdkZXN0aW5hdGlvbnMvd2ViaG9va3MnKSxcbiAgICAgICAgICBhY3RpdmU6IGFwaVZpZXcgPT09ICdkZXN0aW5hdGlvbnMvd2ViaG9va3MnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgICAsIFwiV2ViaG9va3NcIlxuXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgb25DbGljazogKCkgPT4gc2V0QXBpVmlldygnZGVzdGluYXRpb25zL2FwaScpLFxuICAgICAgICAgIGFjdGl2ZTogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9hcGknLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAsIFwiQVBJXCJcblxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldEFwaVZpZXcoJ2Rlc3RpbmF0aW9ucy9jc3YnKSxcbiAgICAgICAgICBhY3RpdmU6IGFwaVZpZXcgPT09ICdkZXN0aW5hdGlvbnMvY3N2JywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICAgLCBcIkNTVlwiXG5cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdkZXN0aW5hdGlvbnMvemFwaWVyJyksXG4gICAgICAgICAgYWN0aXZlOiBhcGlWaWV3ID09PSAnZGVzdGluYXRpb25zL3phcGllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MX19XG4gICAgICAgICwgXCJaYXBpZXJcIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFza3NTd2l0Y2hlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQ29kZUJveC50c3hcIjsvKipcbiAqIFRPRE9cbiAqIDEpIENyZWF0ZSB0aGVtZSBmcm9tIHBhbGV0dGVcbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7UHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXJ9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcidcbmltcG9ydCB7YmFzZTE2QXRlbGllcnN1bHBodXJwb29sTGlnaHR9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2VzbS9zdHlsZXMvcHJpc20nXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHknXG5cbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7aXNBcGl9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBwYWRkaW5nOiAyNSxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICc+IHByZSc6IHtcbiAgICBwYWRkaW5nOiAnMjBweCAyMHB4IDMwcHggMjBweCAhaW1wb3J0YW50JyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgLi4uKGlzQXBpICYmIHtcbiAgICAgICc+IGNvZGUgPiBzcGFuJzoge1xuICAgICAgICBjb2xvcjogJ3JnYigzNCwgMTYyLCAyMDEpICFpbXBvcnRhbnQnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSkpXG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxN3B4O1xuICByaWdodDogMTJweDtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIG1hcmdpbjogMjVweDtcbiAgY29sb3I6ICM2NjQ4ZWU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnN0cnVjdGlvbnMgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNSxcbiAgbGluZUhlaWdodDogMS40LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0J1xufSlcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0ge1xuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5NT05PU1BBQ0UsXG4gIGZvbnRTaXplOiAxM1xufVxuXG5jb25zdCBBUElUYXNrVXBsb2FkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpbnN0cnVjdGlvbnMsIGNvZGVTdHJpbmcsIHBhZGRpbmcsIGxhbmd1YWdlLCBpc0FwaX0gPSBwcm9wc1xuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZSgnQ29weSB0byBjbGlwYm9hcmQnKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRDb250YWluZXIsIHsgaXNBcGk6IGlzQXBpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEluc3RydWN0aW9ucywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3Mn19LCBpbnN0cnVjdGlvbnMpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ludGF4SGlnaGxpZ2h0ZXIsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgICBzdHlsZTogYmFzZTE2QXRlbGllcnN1bHBodXJwb29sTGlnaHQsXG4gICAgICAgIGNvZGVUYWdQcm9wczoge3N0eWxlfSxcbiAgICAgICAgd3JhcExpbmVzOiB0cnVlLFxuICAgICAgICBjdXN0b21TdHlsZToge3BhZGRpbmc6IHBhZGRpbmcgfHwgJzIwcHgnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDczfX1cbiAgICAgIFxuICAgICAgICAsIGNvZGVTdHJpbmdcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb3B5VG9DbGlwYm9hcmQsIHtcbiAgICAgICAgdGV4dDogY29kZVN0cmluZyxcbiAgICAgICAgb25Db3B5OiAoKSA9PiB7XG4gICAgICAgICAgc2V0QnV0dG9uVGV4dCgnQ29waWVkJylcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19LCBidXR0b25UZXh0KVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5BUElUYXNrVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZ3VhZ2U6ICdiYXNoJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUElUYXNrVXBsb2FkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9Db25uZWN0aW9ucy50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRHJvcHpvbmV9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge3BhcnNlfSBmcm9tICdqc29uMmNzdidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtJQ09OX1NJWkV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQge1NVUFBPUlRFRF9GSUxFUywgTUFYX0ZJTEVfU0laRX0gZnJvbSAnY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IHtCTE9DS19UWVBFLCBTQU1QTEVfVkFMVUVTLCBGRUFUVVJFX1RPR0dMRVN9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgQWRkVGFza3NTd2l0Y2hlciBmcm9tICcuL0FkZFRhc2tzU3dpdGNoZXInXG5pbXBvcnQgQVBJVGFza1VwbG9hZCBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5pbXBvcnQgQVBJVGFza0NvbXBsZXRlZCBmcm9tICcuL0FQSVRhc2tDb21wbGV0ZWQnXG5pbXBvcnQgRG93bmxvYWRDU1YgZnJvbSAnLi9Eb3dubG9hZENTVidcbmltcG9ydCBVcGRhdGVXZWJob29rIGZyb20gJy4vVXBkYXRlV2ViaG9vaydcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1BhZ2VIZWFkZXInXG5pbXBvcnQgUm9vdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Sb290QnV0dG9uJ1xuaW1wb3J0IFphcGllckNvbnRhaW5lciBmcm9tICcuL1phcGllckNvbnRhaW5lcidcbmltcG9ydCBDb2RlQm94IGZyb20gJy4vQ29kZUJveCdcbmltcG9ydCBNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTWVudUl0ZW0nXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbn0pXG5cbmNvbnN0IE1haW5Db250ZW50cyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59KVxuXG5jb25zdCBDb250ZW50Qm9keSA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnMCA1MHB4JyxcbiAgbWluV2lkdGg6IDUwMCxcbiAgbWF4V2lkdGg6IDgwMCxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgbWFyZ2luOiAnMCBhdXRvJ1xufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuc3Bhbih7XG4gIGZvbnRTaXplOiAyNCxcbiAgZm9udFdlaWdodDogNjAwLFxuICBsaW5lSGVpZ2h0OiAnMzBweCdcbn0pXG5cbmNvbnN0IERyb3BXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIHBhZGRpbmc6ICcyOHB4IDI1cHggNTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCBTZWxlY3RlZFJlZ2lvbiA9IHN0eWxlZC5kaXZgXG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgfVxuYFxuXG5jb25zdCBSZWdpb25UZXh0ID0gc3R5bGVkLmRpdmBcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbmBcblxuY29uc3QgUmVnaW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgWm9uZSA9IHN0eWxlZC5kaXYoKHtpc0RyYWdBY3RpdmUsIHVwbG9hZENvbXBsZXRlLCBlcnJvciwgYmFja2VuZFByb2Nlc3Npbmd9KSA9PiB7XG4gIGxldCBib3JkZXJDb2xvciA9IGlzRHJhZ0FjdGl2ZVxuICAgID8gUEFMRVRURS5QUklNQVJZX01BSU5cbiAgICA6IHVwbG9hZENvbXBsZXRlICYmICFlcnJvciAmJiBiYWNrZW5kUHJvY2Vzc2luZyA9PSAyXG4gICAgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU5cbiAgICA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxuXG4gIGlmIChlcnJvcikge1xuICAgIGJvcmRlckNvbG9yID0gUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzIwdmgnLFxuICAgIGJvcmRlcjogYDJweCAke2lzRHJhZ0FjdGl2ZSA/ICdzb2xpZCcgOiAnZGFzaGVkJ30gJHtib3JkZXJDb2xvcn1gLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0J1xuICB9XG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDg0LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbn0pXG5cbmNvbnN0IERyb3BJY29uID0gc3R5bGVkKEljb24pKCh7c3VjY2Vzc2Z1bH0pID0+IHtcbiAgY29uc3QgY29sb3IgPSBzdWNjZXNzZnVsID8gUEFMRVRURS5QUklNQVJZX0dSRUVOIDogUEFMRVRURS5URVhUX0dSQVlcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBmb250U2l6ZTogSUNPTl9TSVpFLk1EMjQsXG4gICAgY29sb3IsXG4gICAgbWFyZ2luUmlnaHQ6IDVcbiAgfVxufSlcblxuY29uc3QgU3R5bGVkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luOiAnMCAyMHB4J1xufSlcblxuY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnaW5saW5lLWJveCdcbn0pXG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoUm9vdEJ1dHRvbikoe1xuICBwYWRkaW5nOiAwLFxuICBtYXJnaW5SaWdodDogMTAsXG4gIGZvbnRTaXplOiAyNCxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZSdcbn0pXG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQuZGl2XG5cblxuXG4oKHtpc0RyYWdBY3RpdmUsIHN1Y2Nlc3NmdWwsIGVycm9yfSkgPT4ge1xuICBsZXQgY29sb3IgPSBpc0RyYWdBY3RpdmVcbiAgICA/IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gICAgOiBzdWNjZXNzZnVsXG4gICAgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU5cbiAgICA6IFBBTEVUVEUuVEVYVF9NQUlOXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29sb3IgPSBQQUxFVFRFLkVSUk9SX01BSU5cbiAgfVxuICByZXR1cm4ge1xuICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUYsXG4gICAgY29sb3IsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IDUwMFxuICB9XG59KVxuXG5jb25zdCBnZXRWYWx1ZSA9IChibG9jaykgPT4ge1xuICBjb25zdCB0eXBlID0gYmxvY2sudHlwZVxuICBsZXQgdmFsdWVcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IF9vcHRpb25hbENoYWluKFtibG9jaywgJ2FjY2VzcycsIF8gPT4gX1t0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIub3B0aW9ucywgJ2FjY2VzcycsIF8zID0+IF8zWzBdLCAnYWNjZXNzJywgXzQgPT4gXzRbJ2lkJ11dKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OOlxuICAgICAgdmFsdWUgPSBgW1wiJHtfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfNSA9PiBfNVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYub3B0aW9ucywgJ2FjY2VzcycsIF83ID0+IF83WzBdLCAnYWNjZXNzJywgXzggPT4gXzhbJ2lkJ11dKX1cIl1gXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFUzpcbiAgICAgIGNvbnN0IGJiSW1hZ2UgPSBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfOSA9PiBfOVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzEwID0+IF8xMC5wbGFjZWhvbGRlcl0pIHx8IFNBTVBMRV9WQUxVRVNbJ2ltYWdlJ11cbiAgICAgIGNvbnN0IGJiVmFsdWUgPSBgeydpbWFnZSc6ICcke2JiSW1hZ2V9JywgJ29iamVjdHMnOiBbXX1gXG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGJiVmFsdWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT046XG4gICAgICBjb25zdCBuZXJUZXh0ID0gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzExID0+IF8xMVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzEyID0+IF8xMi5wbGFjZWhvbGRlcl0pIHx8IFNBTVBMRV9WQUxVRVNbJ3RleHQnXVxuICAgICAgY29uc3QgbmVyVmFsdWUgPSBgeyd0ZXh0JzogJyR7bmVyVGV4dH0nLCAnZW50aXRpZXMnOiBbXX1gXG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG5lclZhbHVlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRTpcbiAgICAgIGNvbnN0IGZvcm1TZXF1ZW5jZVN0cmluZyA9IGJsb2NrW3R5cGVdLmRhdGEucmVkdWNlKChhY2MsIGJsaywgaW5kZXgsIGJsb2NrcykgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBnZXRWYWx1ZShibGspIHx8IFNBTVBMRV9WQUxVRVNbYmxrLnR5cGVdXG4gICAgICAgIGNvbnN0IHNlcCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gXCInXCIgOiAnJ1xuICAgICAgICBpZiAoaW5kZXggPCBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiBgJHthY2N9JyR7YmxrLmlkfSc6ICR7c2VwfSR7dmFsfSR7c2VwfSwgYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHthY2N9JyR7YmxrLmlkfSc6ICR7c2VwfSR7dmFsfSR7c2VwfX1gXG4gICAgICAgIH1cbiAgICAgIH0sICd7JylcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZm9ybVNlcXVlbmNlU3RyaW5nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVEVYVF9TRVFVRU5DRTpcbiAgICAgIGNvbnN0IHRleHRTZXF1ZW5jZVZhbHVlID1cbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzEzID0+IF8xM1t0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE0ID0+IF8xNC5wbGFjZWhvbGRlciwgJ2FjY2VzcycsIF8xNSA9PiBfMTUubGVuZ3RoXSkgPiAwID8gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzE2ID0+IF8xNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE3ID0+IF8xNy5wbGFjZWhvbGRlcl0pIDogU0FNUExFX1ZBTFVFU1t0eXBlXVxuICAgICAgdmFsdWUgPSAnXCJbJyArIHRleHRTZXF1ZW5jZVZhbHVlLm1hcCgoYSkgPT4gYCcke2F9J2ApICsgJ11cIidcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzE4ID0+IF8xOFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE5ID0+IF8xOS5wbGFjZWhvbGRlcl0pID8gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzIwID0+IF8yMFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzIxID0+IF8yMS5wbGFjZWhvbGRlcl0pIDogU0FNUExFX1ZBTFVFU1t0eXBlXVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5jb25zdCBDb25uZWN0aW9ucyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXBpS2V5LFxuICAgIG9uRHJvcEhhbmRsZXIsXG4gICAgcXVldWVJZCxcbiAgICBoaXN0b3J5LFxuICAgIGNvbXBsZXRlZCxcbiAgICBmaWxlLFxuICAgIHVzZXIsXG4gICAgcXVldWUsXG4gICAgYmFja2VuZFByb2Nlc3NpbmcsXG4gICAgZXJyb3IsXG4gICAgcmVnaW9uLFxuICAgIHNldFJlZ2lvblxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBvcmdJZH0gPSB1c2VyXG4gIGNvbnN0IFthcGlWaWV3LCBzZXRBcGlWaWV3XSA9IHVzZVN0YXRlKCdzb3VyY2VzL2FwaScpXG4gIGNvbnN0IFtjc3ZTdHJpbmcsIHNldENTVl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qge25hbWV9ID0gcXVldWUgfHwge31cblxuICBjb25zdCB7bWVudVBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWVcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYXRlU2FtcGxlQ3N2ID0gKHF1ZXVlKSA9PiB7XG4gICAgICBjb25zdCB7ZGF0YSA9IFtdfSA9IHF1ZXVlXG4gICAgICBsZXQgaGVhZGVycyA9ICcnXG4gICAgICBsZXQgdmFsdWVzID0gJydcbiAgICAgIGxldCBFT0wgPSAnLCdcbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlcyA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgIEVPTCA9IGkgPCBkYXRhLmxlbmd0aCAtIDEgPyBFT0wgOiAnJ1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyArIGJsb2NrLmlkICsgRU9MXG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcyArIGdldFZhbHVlKGJsb2NrKSArIEVPTFxuICAgICAgICBtYXBwZWRWYWx1ZXNbYmxvY2suaWRdID0gZ2V0VmFsdWUoYmxvY2spXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBxdW90ZTogJycsXG4gICAgICAgIGVzY2FwZWRRdW90ZTogJydcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNzdiA9IHBhcnNlKFttYXBwZWRWYWx1ZXNdLCBvcHRzKVxuICAgICAgICBzZXRDU1YoY3N2KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICBzZXRDU1YoJycpXG4gICAgICB9XG4gICAgfVxuICAgIGdlbmVyYXRlU2FtcGxlQ3N2KHF1ZXVlKVxuICB9LCBbcXVldWVdKVxuXG4gIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZX0gPSB1c2VEcm9wem9uZSh7XG4gICAgb25Ecm9wOiBvbkRyb3BIYW5kbGVyLFxuICAgIG1heFNpemU6IE1BWF9GSUxFX1NJWkUsXG4gICAgYWNjZXB0OiBTVVBQT1JURURfRklMRVNcbiAgfSlcbiAgY29uc3QgdXBsb2FkQ29tcGxldGUgPSBmaWxlICYmIGZpbGUubmFtZSAmJiBjb21wbGV0ZWQgPT09IDEwMFxuICBjb25zdCBpc1VwbG9hZGluZyA9IGZpbGUgJiYgZmlsZS5uYW1lICYmIGNvbXBsZXRlZCAhPT0gdW5kZWZpbmVkICYmIGNvbXBsZXRlZCA8IDEwMFxuXG4gIGNvbnN0IHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgaWYgKHVwbG9hZENvbXBsZXRlICYmICFlcnJvcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcEljb24sIHsgc3VjY2Vzc2Z1bDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwMn19LCBcImNsb3VkX2RvbmVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA0fX0sIGlzVXBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMDR9fSwgXCJjbG91ZF9xdWV1ZVwiKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA0fX0sIFwiYWRkXCIpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbmRlclVzZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmICh1cGxvYWRDb21wbGV0ZSAmJiBiYWNrZW5kUHJvY2Vzc2luZyA9PT0gMiAmJiAhZXJyb3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHsgc3VjY2Vzc2Z1bDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxMH19LCBgJHtmaWxlLm5hbWV9IHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCFgKVxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzEyfX0sIGBUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCBwcm9jZXNzaW5nICR7ZmlsZS5uYW1lfTogJHtlcnJvcn1gKVxuICAgIH0gZWxzZSBpZiAoaXNVcGxvYWRpbmcgfHwgYmFja2VuZFByb2Nlc3NpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMTV9fSwgYCR7Y29tcGxldGVkfSUke1xuICAgICAgICAgIGJhY2tlbmRQcm9jZXNzaW5nID09PSAxID8gJyB1cGxvYWRlZCwgcHJvY2Vzc2luZyBvbiBzZXJ2ZXIgLi4uJyA6ICcnXG4gICAgICAgIH1gKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHsgaXNEcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjF9fSwgXCJDbGljayBvciBEcm9wIGEgQ1NWIGZpbGUgaGVyZSB0byBjcmVhdGUgdGFza3NcIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VIZWFkZXIsIHtcbiAgICAgICAgbGVmdEJhckl0ZW1zOiBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IG9uQ2xpY2s6ICgpID0+IGhpc3RvcnkucHVzaChgL3F1ZXVlcy8ke3F1ZXVlSWR9YCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzN9fSwgbmFtZSlcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzR9fSwgXCIvIENvbm5lY3Rpb25zXCIgKVxuICAgICAgICAgIClcbiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMwfX1cbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNYWluQ29udGVudHMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM4fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFkZFRhc2tzU3dpdGNoZXIsIHsgc2V0QXBpVmlldzogc2V0QXBpVmlldywgYXBpVmlldzogYXBpVmlldywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOX19IClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCb2R5LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0MH19XG4gICAgICAgICAgLCBhcGlWaWV3ID09PSAnc291cmNlcy9hcGknID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBUElUYXNrVXBsb2FkLCB7IG9yZ0lkOiBvcmdJZCwgcXVldWVJZDogcXVldWVJZCwgcXVldWU6IHF1ZXVlLCBhcGlLZXk6IGFwaUtleSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0Mn19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ3NvdXJjZXMvY3N2JyA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvZGVCb3gsIHtcbiAgICAgICAgICAgICAgICBxdWV1ZTogcXVldWUsXG4gICAgICAgICAgICAgICAgY29kZVN0cmluZzogY3N2U3RyaW5nLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGBcbiAgICAgICAgICAgICAgICAgIFRvIGFkZCB0YXNrcyBvbiB0aGlzIHdvcmtmbG93IHlvdSB3aWxsIG5lZWQgdG8gY3JlYXRlIGEgQ1NWIChjb21tYS1zZXBhcmF0ZWQgdmFsdWVzKSBmaWxlLlxuICAgICAgICAgICAgICAgICAgVG8gY3JlYXRlIHlvdXIgZmlyc3QgdGFzayB1c2UgdGhlIGNvcHkgdGhlIGZvcm1hdCBpbiB0aGUgdGV4dCBiZWxvdyBpbnRvIGEgLmNzdiBmaWxlIGFuZCB1cGxvYWQgdG8gdGhlIGRyYWcgYXJlYS5cbiAgICAgICAgICAgICAgICAgIGAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDV9fVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLCBGRUFUVVJFX1RPR0dMRVMuVVBMT0FEX0NTVl9SRUdJT05fT1JHUy5pbmNsdWRlcyhvcmdJZCkgJiYgKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaW9uQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1Nn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaW9uVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTd9fSwgXCJVcGxvYWQgdG8gYSBzcGVjaWZpYyByZWdpb246IFwiICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0ZWRSZWdpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzU4fX1cbiAgICAgICAgICAgICAgICAgICAgLCByZWdpb24sIFwiIFwiICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbCwgcmVmOiBvcmlnaW5SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTl9fSApXG4gICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0ZpbHRlciByYW5nZScsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2M319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGxhYmVsOiAnRGVmYXVsdCcsIG9uQ2xpY2s6ICgpID0+IHNldFJlZ2lvbignRGVmYXVsdCcpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY0fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ0VVJywgb25DbGljazogKCkgPT4gc2V0UmVnaW9uKCdFVScpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY1fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ1VTJywgb25DbGljazogKCkgPT4gc2V0UmVnaW9uKCdVUycpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY2fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ0F1c3RyYWxpYScsIG9uQ2xpY2s6ICgpID0+IHNldFJlZ2lvbignQVUnKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2N319IClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNzN9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChab25lLCB7XG4gICAgICAgICAgICAgICAgICAuLi5nZXRSb290UHJvcHMoKSxcbiAgICAgICAgICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgdXBsb2FkQ29tcGxldGU6IHVwbG9hZENvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgYmFja2VuZFByb2Nlc3Npbmc6IGJhY2tlbmRQcm9jZXNzaW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzc0fX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IC4uLmdldElucHV0UHJvcHMoKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4MX19IClcbiAgICAgICAgICAgICAgICAgICwgaXNEcmFnQWN0aXZlID8gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzgzfX0sIFwiY2xvdWRfdXBsb2FkXCIpXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg1fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIHJlbmRlckljb24oKVxuICAgICAgICAgICAgICAgICAgICAgICwgcmVuZGVyVXNlck1lc3NhZ2UoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IGFwaVZpZXcgPT09ICdzb3VyY2VzL3phcGllcicgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFphcGllckNvbnRhaW5lciwgeyB0eXBlOiBcInNvdXJjZVwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzk0fX0gKVxuICAgICAgICAgICkgOiBhcGlWaWV3ID09PSAnZGVzdGluYXRpb25zL3dlYmhvb2tzJyA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXBkYXRlV2ViaG9vaywgeyBvcmdJZDogb3JnSWQsIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5Nn19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9hcGknID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBUElUYXNrQ29tcGxldGVkLCB7IG9yZ0lkOiBvcmdJZCwgcXVldWVJZDogcXVldWVJZCwgYXBpS2V5OiBhcGlLZXksIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5OH19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9jc3YnID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZENTViwgeyBvcmdJZDogb3JnSWQsIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwMH19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy96YXBpZXInID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChaYXBpZXJDb250YWluZXIsIHsgdHlwZTogXCJkZXN0aW5hdGlvblwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDAyfX0gKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMScsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDA0fX0sIFwiY29ubmVjdGlvbiBub3QgZm91bmRcIiAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbm5lY3Rpb25zKVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvRG93bmxvYWRDU1YudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbidcbmltcG9ydCB7SW5zdHJ1Y3Rpb25zfSBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5pbXBvcnQge2NzdkRvd25sb2FkU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9EYXRlUGlja2VyJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0NoZWNrYm94J1xuaW1wb3J0IHt0b0lzb1N0cmluZ30gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuaW1wb3J0IHthZGRGYWlsdXJlTm90aWZpY2F0aW9ufSBmcm9tICdjbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcblxuXG5cblxuXG5cblxuY29uc3QgVGV4dCA9IHN0eWxlZChJbnN0cnVjdGlvbnMpKHtcbiAgd2lkdGg6IDMwMCxcbiAgY29sb3I6ICdyZ2IoMCwgMCwgMCwgMC41KSdcbn0pXG5cbmNvbnN0IERvd25sb2FkQnV0dG9uID0gc3R5bGVkKEFjdGlvbkJ1dHRvbikoe1xuICBtYXJnaW5Ub3A6IDE1LFxuICB3aWR0aDogOTYsXG4gIGhlaWdodDogMzJcbn0pXG5cbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSkoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgcGFkZGluZzogMjUsXG4gIHdpZHRoOiAnY2FsYygxMDB2dyAvIDIpJ1xufSlcblxuY29uc3QgQ29udGVudEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1hcmdpbkJvdHRvbTogMTUsXG4gIHdpZHRoOiAzMDBcbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgYXV0bycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBDaGVja0ZpZWxkV3JhcHBlciA9IHN0eWxlZChGaWVsZFdyYXBwZXIpKHtcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2F1dG8gYXV0bycsXG4gIG1hcmdpblRvcDogMTBcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgY29sb3I6ICdyZ2IoMCwgMCwgMCwgMC41KScsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgcGFkZGluZ1RvcDogJzEwcHgnXG59KVxuXG5jb25zdCBEb3dubG9hZENTViA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b3JnSWQsIHF1ZXVlLCBkaXNwYXRjaH0gPSBwcm9wc1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkQ1NWID0gdXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGNvbnN0IHtpZCwgbmFtZX0gPSBxdWV1ZVxuICAgIGNvbnN0IHtzdGFydERhdGUsIGVuZERhdGUsIGNvcnJlY3R9ID0gdmFsdWVzXG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihcbiAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy90YXNrcy9jb21wbGV0ZWQtdGFza3MtY3N2YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dC9jc3YnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcXVldWVfaWQ6IGlkLFxuICAgICAgICAgICAgLi4uKGNvcnJlY3QgJiYge2NvcnJlY3R9KSxcbiAgICAgICAgICAgIC4uLihzdGFydERhdGUgJiYge3N0YXJ0X2RhdGU6IHRvSXNvU3RyaW5nKHN0YXJ0RGF0ZSl9KSxcbiAgICAgICAgICAgIC4uLihlbmREYXRlICYmIHtlbmRfZGF0ZTogdG9Jc29TdHJpbmcoZW5kRGF0ZSl9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtkYXRhXSkpXG4gICAgICAgIGNvbnN0IGNzdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgY3N2TGluay5ocmVmID0gdXJsXG4gICAgICAgIGNzdkxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGAke25hbWV9LWNvbXBsZXRlZC10YXNrcy5jc3ZgKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzdkxpbmspXG4gICAgICAgIGNzdkxpbmsuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignTm8gdGFza3MgdG8gZXhwb3J0JykpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgIHN0YXJ0RGF0ZTogbnVsbCxcbiAgICBlbmREYXRlOiBudWxsLFxuICAgIGNvcnJlY3Q6IGZhbHNlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgICAgb25TdWJtaXQ6IGhhbmRsZURvd25sb2FkQ1NWLFxuICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgdmFsaWRhdGVPbk1vdW50OiB0cnVlLFxuICAgICAgdmFsaWRhdGlvblNjaGVtYTogY3N2RG93bmxvYWRTY2hlbWEsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDd9fVxuICAgIFxuICAgICAgLCAoe3ZhbHVlcywgZXJyb3JzLCBpc1ZhbGlkLCBpc1N1Ym1pdHRpbmd9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJFeHBvcnQgYWxsIHRhc2tzIGluIHRoaXMgcXVldWUgYXMgQ1NWLlwiICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjB9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjF9fSwgXCJTdGFydCBEYXRlXCIgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGlja2VyLCB7IGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uc3RhcnREYXRlXSksIG5hbWU6IGBzdGFydERhdGVgLCB2YWx1ZTogdmFsdWVzLnN0YXJ0RGF0ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19IClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjV9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyN319LCBcIkVuZCBEYXRlXCIgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGlja2VyLCB7IGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5lbmREYXRlXSksIG5hbWU6IGBlbmREYXRlYCwgdmFsdWU6IHZhbHVlcy5lbmREYXRlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI4fX0gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja0ZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzJ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBcImNvcnJlY3RcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzM319XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29ycmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzNX19XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IHN0eWxlOiB7d2lkdGg6IDMwMCwgcGFkZGluZzogMCwgbGluZUhlaWdodDogJzIwcHgnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0NH19LCBcIk9ubHkgaW5jbHVkZSBhcHByb3ZlZCB0YXNrcyBmcm9tIEF1ZGl0c1wiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZEJ1dHRvbiwgeyBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFpc1ZhbGlkLCB0eXBlOiBcInN1Ym1pdFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ5fX0sIFwiRXhwb3J0XCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoRG93bmxvYWRDU1YpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBJbnN0cnVjdGlvbnMgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNSxcbiAgbGluZUhlaWdodDogMS40LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgJz4gcCc6IHtcbiAgICBwYWRkaW5nVG9wOiAxMFxuICB9LFxuICAnPiBwID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25zXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogMjUsXG4gICAgJz4gcHJlJzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4XG4gICAgfVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRDb250YWluZXIiLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9VcGRhdGVXZWJob29rLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5cbmltcG9ydCB7SW5zdHJ1Y3Rpb25zfSBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBhZGRpbmdUb3A6IDk2XG59KVxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6IDcwMFxufSlcblxuY29uc3QgVGV4dCA9IHN0eWxlZChJbnN0cnVjdGlvbnMpKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufSlcblxuY29uc3QgRG93bmxvYWRCdXR0b24gPSBzdHlsZWQoQWN0aW9uQnV0dG9uKSh7XG4gIHdpZHRoOiA5NixcbiAgaGVpZ2h0OiAzMixcbiAgbWFyZ2luTGVmdDogOFxufSlcblxuY29uc3QgVXBkYXRlV2ViaG9vayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b3JnSWQsIHF1ZXVlfSA9IHByb3BzXG4gIGNvbnN0IFtuZXdXZWJob29rLCBzZXROZXdXZWJob29rXSA9IHVzZVN0YXRlKFxuICAgIHF1ZXVlLndlYmhvb2sgIT09IHVuZGVmaW5lZCAmJiBxdWV1ZS53ZWJob29rLnRhcmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHF1ZXVlLndlYmhvb2sudGFyZ2V0XG4gICAgICA6ICcnXG4gIClcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcblxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TmV3V2ViaG9vayhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgZGF0YToge3RhcmdldDogbmV3V2ViaG9va31cbiAgICB9IFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWUuaWR9L3dlYmhvb2tgLFxuICAgICAgcmVxQm9keVxuICAgIClcblxuICAgIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIHByb3BzLmFkZEZhaWx1cmVOb3RpZmljYXRpb24oZS5tZXNzYWdlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignV2ViaG9vayBVUkwgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgxfX0sIFwiVXBkYXRlIHRoaXMgcXVldWUncyB3ZWJob29rIFVSTFwiICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHsgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogJ05ldyBXZWJob29rIFVSTCcsIHZhbHVlOiBuZXdXZWJob29rLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODN9fSApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZEJ1dHRvbiwge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpXG4gICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg0fX1cbiAgICAgICAgLCBcIlN1Ym1pdFwiXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uOiAoYXJnKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGFyZykpLFxuICAgIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYXJnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXBkYXRlV2ViaG9vaylcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1phcGllckNvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zJ1xuaW1wb3J0IFN0eWxlZENvbnRhaW5lciBmcm9tICcuL1N0eWxlZENvbnRhaW5lcidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBERVNUSU5BVElPTl9URU1QTEFURVMgPSAnNDE1MDM1LDQxNTE2OCw0MTUyMDgsNDE1MjY0LDQxNTI2Nyw0MTUzMDMsNDE1Mjc4J1xuY29uc3QgU09VUkNFX1RFTVBMQVRFUyA9ICc0MTQ5MjcsNDE0OTgwLDQxNTAzMCw0MTUwNDIsNDE1MTkyLDQxNTI1MCw0MTUyOTMsNDE1Mjc4J1xuXG5jb25zdCBTdHlsZWRaYXBpZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAuemFwaWVyLXRlbXBsYXRlcy13aWRnZXQgPiAuemFwLXdpZGdldCA+IC56YXAtcm93ID4gLnphcC1pbm5lci1jb250YWluZXIge1xuICAgICYgPiAuemFwLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgY29sb3I6ICR7UEFMRVRURS5URVhUX0RBUktfR1JBWX07XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgICYgPiAuemFwLWN0YSA+IC56YXAtYnV0dG9uLW91dGxpbmUge1xuICAgICAgY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4O1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke1BBTEVUVEUuQkFDS0dST1VORF9IT1ZFUl9MSUdIVH07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS307XG4gICAgICAgIGNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5cblxuXG5cbmNvbnN0IFphcGllckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dHlwZX0gPSBwcm9wc1xuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbClcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPVxuICAgIHR5cGUgPT09ICdzb3VyY2UnXG4gICAgICA/ICdDb25uZWN0IDIsMDAwKyBhcHBzIGludG8geW91ciBxdWV1ZSB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBuZXcgdGFza3Mgd2l0aCBvdXIgWmFwaWVyIGludGVncmF0aW9uLidcbiAgICAgIDogJ0Nvbm5lY3QgeW91ciBxdWV1ZSBpbnRvIDIsMDAwKyBhcHBzIHRvIGF1dG9tYXRpY2FsbHkgc2VuZCBjb21wbGV0ZWQgdGFza3MgdG8geW91ciBmYXZvcml0ZSBhcHBzIHdpdGggb3VyIFphcGllciBpbnRlZ3JhdGlvbi4nXG5cbiAgY29uc3QgdGVtcGxhdGVzID0ge1xuICAgIHNvdXJjZTogU09VUkNFX1RFTVBMQVRFUyxcbiAgICBkZXN0aW5hdGlvbjogREVTVElOQVRJT05fVEVNUExBVEVTXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaHRtbF9pZDogJ3phcGllcl9lbWJlZGRhYmxlJyxcbiAgICAgIGluaGVyaXRGb250OiB0cnVlLFxuICAgICAgYnV0dG9uVHlwZTogJ291dGxpbmUnLFxuICAgICAgZ3VpZGVkX3phcHM6IHRlbXBsYXRlc1t0eXBlXVxuICAgIH1cbiAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vemFwaWVyLmNvbS9hcHBzL2VtYmVkL3dpZGdldC5qcz8ke3FzLnN0cmluZ2lmeShwYXJhbXMpfWBcbiAgICBjb250YWluZXJSZWYgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9LCBbdHlwZV0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3Mn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zdHJ1Y3Rpb25zLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDczfX1cbiAgICAgICAgLCBpbnN0cnVjdGlvblxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vemFwaWVyLmNvbS9hcHBzL2h1bWFuLWxhbWJkYXMvaW50ZWdyYXRpb25zXCIsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICByZWw6IFwibm9yZWZlcnJlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAgICwgXCJaYXBpZXJcIlxuXG4gICAgICAgICAgKSwgJyAnLCBcImxldHMgeW91IGNvbm5lY3QgSHVtYW4gTGFtYmRhcyB0byAyLDAwMCsgb3RoZXIgd2ViIHNlcnZpY2VzLiBBdXRvbWF0ZWQgY29ubmVjdGlvbnMgY2FsbGVkIFphcHMsIHNldCB1cCBpbiBtaW51dGVzIHdpdGggbm8gY29kaW5nLCBjYW4gYXV0b21hdGUgeW91ciBkYXktdG8tZGF5IHRhc2tzIGFuZCBidWlsZCBxdWV1ZXMgYmV0d2VlbiBhcHBzIHRoYXQgb3RoZXJ3aXNlIHdvdWxkbid0IGJlIHBvc3NpYmxlLlwiXG5cblxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRaYXBpZXJDb250YWluZXIsIHsgaWQ6IFwiemFwaWVyX2VtYmVkZGFibGVcIiwgcmVmOiBjb250YWluZXJSZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19IClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgWmFwaWVyQ29udGFpbmVyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29udGFpbmVycy9Db25uZWN0aW9uc0NvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJ1xuaW1wb3J0IHBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuaW1wb3J0IENvbm5lY3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvQ29ubmVjdGlvbnMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5cblxuY29uc3QgQ1NWX1JPV19MSU1JVCA9IDEwMDBcbmNvbnN0IENPTlRBQ1RfRU1BSUwgPSAnY29udGFjdEBodW1hbmxhbWJkYXMuY29tJ1xuXG5cblxuXG5cblxuY29uc3QgQ29ubmVjdGlvbnNDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXJ9ID0gcHJvcHNcbiAgY29uc3Qge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBvcmdJZH0gPSB1c2VyIHx8IHt9XG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpIFxuICBjb25zdCB7cXVldWVJZH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2JhY2tlbmRQcm9jZXNzaW5nLCBzZXRCYWNrZW5kUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYXBpS2V5LCBzZXRBUElLZXldID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZWdpb24sIHNldFJlZ2lvbl0gPSB1c2VTdGF0ZSgnRGVmYXVsdCcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGE6IHF1ZXVlfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihcbiAgICAgICAgICBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgY29uc3Qge2RhdGE6IGFwaUtleX0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy9hcGktdG9rZW5gLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICAgIHNldFF1ZXVlKHF1ZXVlKVxuICAgICAgICBzZXRBUElLZXkoYXBpS2V5LnRva2VuKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBxdWV1ZSEnKVxuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycm9yKSlcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVgKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFF1ZXVlKClcbiAgfSwgW3F1ZXVlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMClcbiAgICAgICAgc2V0Q29tcGxldGVkKDApXG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKChlLmxvYWRlZCAqIDEwMCkgLyBlLnRvdGFsKVxuICAgICAgICAgICAgc2V0Q29tcGxldGVkKHByb2dyZXNzKVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXBsb2FkUGF0aCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS91cGxvYWRgXG5cbiAgICAgICAgaWYgKHJlZ2lvbiA9PSAnVVMnIHx8IHJlZ2lvbiA9PSBcIkFVXCIpIHtcbiAgICAgICAgICB1cGxvYWRQYXRoID0gYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3VwbG9hZD9yZWdpb249JHtyZWdpb259YFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKFxuICAgICAgICAgIHVwbG9hZFBhdGgsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgIClcbiAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMilcblxuICAgICAgICBpZiAocmVzLmVycm9ycykge1xuICAgICAgICAgIHJlcy5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIFNlbnRyeS53aXRoU2NvcGUoKHNjb3BlKSA9PiB7XG4gICAgICAgICAgICAgIHNjb3BlLnNldExldmVsKFNlbnRyeS5TZXZlcml0eS5FcnJvcilcbiAgICAgICAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBsb2FkRmlsZSgpXG4gICAgfSxcbiAgICBbbmV0d29ya2VyLCBmaWxlLCByZWdpb25dXG4gIClcblxuICBjb25zdCBvbkRyb3BIYW5kbGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICAgIHJlamVjdGVkRmlsZXMuZm9yRWFjaCgoX2ZpbGUpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoJ1RoaXMgZmlsZXR5cGUgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQhJylcbiAgICAgIH0pXG5cbiAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXVlSWQpIHtcbiAgICAgICAgICAgIHNldEZpbGUoZmlsZSlcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICAgICAgICAgIHBhcGEucGFyc2UoZmlsZSwge1xuICAgICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICAgIG5ld2xpbmU6ICdcXHJcXG4nLFxuICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdGaWxlIG5vdCBmb3JtYXR0ZWQgY29yZWN0bHknKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29tcGxldGU6IChwYXBhRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXBhRGF0YS5kYXRhLmxlbmd0aCA+IENTVl9ST1dfTElNSVQpIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgWW91IGNhbm5vdCB1cGxvYWQgbW9yZSB0aGFuICR7Q1NWX1JPV19MSU1JVH0gdGFza3MuIFBsZWFzZSBjb250YWN0ICR7Q09OVEFDVF9FTUFJTH0gdG8gaW5jcmVhc2UgdGhpcyBsaW1pdGBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZUZpbGVVcGxvYWQoZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3IoJycpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0RXJyb3IoJycpXG5cbiAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiBzZXRFcnJvcignRmlsZSB1cGxvYWQgaGFzIGJlZW4gYWJvcnRlZCEnKVxuXG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgIHNldEVycm9yKCdFcnJvciBwcm9jZXNzaW5nIGZpbGUhJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbbmV0d29ya2VyLCBjb21wbGV0ZWQsIHF1ZXVlSWQsIHF1ZXVlLCByZWdpb25dXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdGlvbnMsIHtcbiAgICAgIGFwaUtleTogYXBpS2V5LFxuICAgICAgb25Ecm9wSGFuZGxlcjogb25Ecm9wSGFuZGxlcixcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgIGZpbGU6IGZpbGUsXG4gICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgdXNlcjogcHJvcHMudXNlcixcbiAgICAgIHF1ZXVlOiBxdWV1ZSxcbiAgICAgIGJhY2tlbmRQcm9jZXNzaW5nOiBiYWNrZW5kUHJvY2Vzc2luZyxcbiAgICAgIHJlZ2lvbjogcmVnaW9uLFxuICAgICAgc2V0UmVnaW9uOiBzZXRSZWdpb24sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTR9fVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQ29ubmVjdGlvbnNDb250YWluZXIpXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGF0ZXBpY2tlci1vdmVycmlkZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=