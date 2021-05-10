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
  const API_HOST = `${"https://api.stg.humanlambdas.com"}/orgs/${orgId}/queues/${queueId}/tasks/completed`;
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
  const API_HOST = `${"https://api.stg.humanlambdas.com"}/orgs/${orgId}/queues/${queueId}/tasks/create`;
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
        console.error(error);
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
            complete: () => {
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
      lineNumber: 146
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvZGF0ZXBpY2tlci1vdmVycmlkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9NZW51QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3R5bGVkRXJyb3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9QYWdlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvZHlDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tDb21wbGV0ZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tVcGxvYWQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FkZFRhc2tzU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0NvZGVCb3gudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0Nvbm5lY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9Eb3dubG9hZENTVi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvSW5zdHJ1Y3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TdHlsZWRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1VwZGF0ZVdlYmhvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1phcGllckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbnRhaW5lcnMvQ29ubmVjdGlvbnNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcz84ODU0Iiwid2VicGFjazovLy8uL3V0aWwuaW5zcGVjdCAoaWdub3JlZCkiXSwibmFtZXMiOlsiQWN0aW9uQnV0dG9uIiwiUGxhaW5CdXR0b24iLCJ3YWl0aW5nIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQQUxFVFRFIiwiUFJJTUFSWV9NQUlOIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwib3V0bGluZSIsImJveFNoYWRvdyIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInRyYW5zaXRpb24iLCJwYWRkaW5nIiwiUFJJTUFSWV9NQUlOX0RBUksiLCJCT1hfU0hBRE9XX1BSSU1BUlkiLCJfanN4RmlsZU5hbWUiLCJUaHJlZURvdHNTVkciLCJtZW1vIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwidmlld0JveCIsIndpZHRoIiwieG1sbnMiLCJmaWxsIiwiVEVYVF9NQUlOIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJkIiwiSW5wdXQiLCJlcnJvciIsImRpc3BsYXkiLCJhcHBlYXJhbmNlIiwiRVJST1JfTUFJTiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJib3hTaXppbmciLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiY3Vyc29yIiwiYm9yZGVyQ29sb3IiLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJzdHlsZSIsInNwZWxsQ2hlY2siLCJGcmFnbWVudCIsIkJvb2xlYW4iLCJTdHlsZWRFcnJvciIsIkNvbnRhaW5lciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIkJBQ0tHUk9VTkRfSE9WRVIiLCJNZW51QnV0dG9uIiwib25DbGljayIsIlRocmVlRG90c0ljb24iLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZ0xlZnQiLCJwb3NpdGlvbiIsInVzZXJTZWxlY3QiLCJCQUNLR1JPVU5EX01BSU4iLCJjb250ZW50IiwibGVmdCIsInRvcCIsIkNoZWNrYm94IiwiaWQiLCJjaGVja2VkIiwiaHRtbEZvciIsIlN0eWxlZERhdGVQaWNrZXIiLCJEYXRlUGlja2VyIiwiRGF0ZUlucHV0IiwiaGlkZUVycm9yTWVzc2FnZSIsIkN1c3RvbURhdGVQaWNrZXIiLCJyZWFkT25seSIsImlzVGFza01lbnUiLCJzZXRWYWx1ZSIsInVzZUZpZWxkIiwiY29udGFpbmVyU3R5bGUiLCJoYW5kbGVDaGFuZ2VSYXciLCJldmVudCIsInZhbGlkQ2hhcnMiLCJ0ZXN0IiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwiRGF0ZSIsImhhbmRsZUNoYW5nZSIsImRhdGUiLCJCb2R5Q29udGFpbmVyIiwiY3VzdG9tSW5wdXQiLCJzZWxlY3RlZCIsImNhbGVuZGFyQ2xhc3NOYW1lIiwiZGF5Q2xhc3NOYW1lIiwic2hvdWxkQ2xvc2VPblNlbGVjdCIsIm9uQ2hhbmdlUmF3IiwicGxhY2Vob2xkZXJUZXh0IiwiZ2V0RGlzcGxheUZvcm1hdCIsImRhdGVGb3JtYXQiLCJkaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbiIsIm11bHRpQ29sdW1uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRDb2x1bW5HYXAiLCJBcHBIZWFkZXIiLCJsZWZ0QmFySXRlbXMiLCJyaWdodEJhckl0ZW1zIiwicm93IiwiZmxvYXQiLCJwYWRkaW5nVG9wIiwiZmxleERpcmVjdGlvbiIsImNoaWxkcmVuIiwiQVBJVGFza0NvbXBsZXRlZCIsImFwaUtleSIsIm9yZ0lkIiwicXVldWUiLCJxdWV1ZUlkIiwiQVBJX0hPU1QiLCJfX0FQUF9VUkxfXyIsImNvZGVTdHJpbmciLCJDb2RlQm94IiwiaXNBcGkiLCJpbnN0cnVjdGlvbnMiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiU3R5bGVkQ29udGFpbmVyIiwiSW5zdHJ1Y3Rpb25zIiwibWFyZ2luQm90dG9tIiwiY3VzdG9tU3R5bGUiLCJNT05PU1BBQ0UiLCJ3aGl0ZVNwYWNlIiwic2FtcGxlVmFsdWVzIiwidGV4dCIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsImVtYWlsIiwibGluayIsIm51bWJlciIsImJpbmFyeSIsInNpbmdsZV9zZWxlY3Rpb24iLCJtdWx0aXBsZV9zZWxlY3Rpb24iLCJmb3JtX3NlcXVlbmNlIiwiZW1iZWQiLCJwZGYiLCJib3VuZGluZ19ib3hlcyIsIm5hbWVkX2VudGl0eV9yZWNvZ25pdGlvbiIsInJpY2hfdGV4dCIsInRleHRfc2VxdWVuY2UiLCJnZW5lcmF0ZVZhbHVlIiwiaW5wdXQiLCJzcGFjZXMiLCJCTE9DS19UWVBFIiwiTlVNQkVSIiwiXyIsIl8yIiwiU0lOR0xFX1NFTEVDVElPTiIsIl8zIiwiXzQiLCJvcHRpb25zIiwiXzUiLCJfNiIsIk1VTFRJUExFX1NFTEVDVElPTiIsIl83IiwiXzgiLCJfOSIsIl8xMCIsIkZPUk1fU0VRVUVOQ0UiLCJzZXF1ZW5jZV9kYXRhIiwiRU9MIiwiaW5wdXRzIiwiZGF0YSIsImVsIiwiZ2VuZXJhdGVSb3ciLCJOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04iLCJuZXJfdGV4dF92YWx1ZSIsIl8xMSIsIl8xMiIsIl8xMyIsIl8xNCIsIl8xNSIsIkpTT04iLCJzdHJpbmdpZnkiLCJCT1VORElOR19CT1hFUyIsImJiX3RleHRfdmFsdWUiLCJfMTYiLCJfMTciLCJfMTgiLCJfMTkiLCJfMjAiLCJURVhUX1NFUVVFTkNFIiwiXzIxIiwiXzIyIiwiXzIzIiwiXzI0IiwiXzI1IiwiXzI2IiwiXzI3IiwiXzI4IiwiXzI5IiwicGF5bG9hZFNhbXBsZVRleHQiLCJnZW5lcmF0ZURhdGFTYW1wbGUiLCJwYXlsb2FkU3RyaW5nIiwiQVBJVGFza1VwbG9hZCIsImRhdGFPYmoiLCJtYXJnaW5Ub3AiLCJib3JkZXJSaWdodCIsIkJBQ0tHUk9VTkRfR1JBWV9NSUQiLCJTZWN0aW9uIiwiTWVudUhlYWRlciIsIk1lbnVJdGVtIiwiYWN0aXZlIiwiQWRkVGFza3NTd2l0Y2hlciIsInNldEFwaVZpZXciLCJhcGlWaWV3IiwiU3R5bGVkVGV4dCIsIlRFWFRfREFSS19HUkFZIiwibGFuZ3VhZ2UiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInVzZVN0YXRlIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJiYXNlMTZBdGVsaWVyc3VscGh1cnBvb2xMaWdodCIsImNvZGVUYWdQcm9wcyIsIndyYXBMaW5lcyIsIkNvcHlUb0NsaXBib2FyZCIsIm9uQ29weSIsImRlZmF1bHRQcm9wcyIsIlBhZ2VDb250YWluZXIiLCJNYWluQ29udGVudHMiLCJDb250ZW50Qm9keSIsIkRyb3BXcmFwcGVyIiwiU2VsZWN0ZWRSZWdpb24iLCJSZWdpb25UZXh0IiwiUmVnaW9uQ29udGFpbmVyIiwiWm9uZSIsImlzRHJhZ0FjdGl2ZSIsInVwbG9hZENvbXBsZXRlIiwiYmFja2VuZFByb2Nlc3NpbmciLCJQUklNQVJZX0dSRUVOIiwibWluSGVpZ2h0IiwiU3R5bGVkSWNvbiIsIkljb24iLCJEcm9wSWNvbiIsInN1Y2Nlc3NmdWwiLCJ2ZXJ0aWNhbEFsaWduIiwiSUNPTl9TSVpFIiwiTUQyNCIsIm1hcmdpblJpZ2h0IiwiU3R5bGVkTGluZSIsIkxpbmtDb250YWluZXIiLCJMaW5rIiwiUm9vdEJ1dHRvbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJnZXRWYWx1ZSIsImJsb2NrIiwiYmJJbWFnZSIsIlNBTVBMRV9WQUxVRVMiLCJiYlZhbHVlIiwibmVyVGV4dCIsIm5lclZhbHVlIiwiZm9ybVNlcXVlbmNlU3RyaW5nIiwicmVkdWNlIiwiYWNjIiwiYmxrIiwiaW5kZXgiLCJibG9ja3MiLCJ2YWwiLCJzZXAiLCJ0ZXh0U2VxdWVuY2VWYWx1ZSIsIm1hcCIsImEiLCJDb25uZWN0aW9ucyIsIm9uRHJvcEhhbmRsZXIiLCJoaXN0b3J5IiwiY29tcGxldGVkIiwiZmlsZSIsInVzZXIiLCJyZWdpb24iLCJzZXRSZWdpb24iLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsImNzdlN0cmluZyIsInNldENTViIsIm1lbnVQb3J0YWwiLCJ0b2dnbGVQb3J0YWwiLCJvcmlnaW5SZWYiLCJtZW51UHJvcHMiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfUklHSFQiLCJpc0Ryb3Bkb3duIiwidXNlRWZmZWN0IiwiZ2VuZXJhdGVTYW1wbGVDc3YiLCJoZWFkZXJzIiwidmFsdWVzIiwibWFwcGVkVmFsdWVzIiwiZm9yRWFjaCIsIm9wdHMiLCJxdW90ZSIsImVzY2FwZWRRdW90ZSIsImNzdiIsInBhcnNlIiwiZXJyIiwiY29uc29sZSIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJ1c2VEcm9wem9uZSIsIm9uRHJvcCIsIm1heFNpemUiLCJNQVhfRklMRV9TSVpFIiwiYWNjZXB0IiwiU1VQUE9SVEVEX0ZJTEVTIiwiaXNVcGxvYWRpbmciLCJyZW5kZXJJY29uIiwicmVuZGVyVXNlck1lc3NhZ2UiLCJQYWdlSGVhZGVyIiwicHVzaCIsIkZFQVRVUkVfVE9HR0xFUyIsIlVQTE9BRF9DU1ZfUkVHSU9OX09SR1MiLCJpbmNsdWRlcyIsIk1lbnUiLCJhcmlhTGFiZWwiLCJaYXBpZXJDb250YWluZXIiLCJVcGRhdGVXZWJob29rIiwiRG93bmxvYWRDU1YiLCJ3aXRoUm91dGVyIiwiVGV4dCIsIkRvd25sb2FkQnV0dG9uIiwiRm9ybUNvbnRhaW5lciIsIkZvcm0iLCJDb250ZW50QmxvY2siLCJGaWVsZFdyYXBwZXIiLCJDaGVja0ZpZWxkV3JhcHBlciIsImRpc3BhdGNoIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiaGFuZGxlRG93bmxvYWRDU1YiLCJ1c2VDYWxsYmFjayIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjb3JyZWN0IiwiZXJyb3JzIiwiaHR0cEhhbmRsZXIiLCJtZXRob2QiLCJyZXNwb25zZVR5cGUiLCJwYXJhbXMiLCJxdWV1ZV9pZCIsInN0YXJ0X2RhdGUiLCJ0b0lzb1N0cmluZyIsImVuZF9kYXRlIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQmxvYiIsImNzdkxpbmsiLCJkb2N1bWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJpbml0aWFsVmFsdWVzIiwiRm9ybWlrIiwib25TdWJtaXQiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uTW91bnQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiY3N2RG93bmxvYWRTY2hlbWEiLCJpc1N1Ym1pdHRpbmciLCJGaWVsZCIsImZpZWxkIiwiY29ubmVjdCIsIm5ld1dlYmhvb2siLCJzZXROZXdXZWJob29rIiwid2ViaG9vayIsImUiLCJoYW5kbGVTdWJtaXQiLCJyZXFCb2R5IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsIkRFU1RJTkFUSU9OX1RFTVBMQVRFUyIsIlNPVVJDRV9URU1QTEFURVMiLCJTdHlsZWRaYXBpZXJDb250YWluZXIiLCJCQUNLR1JPVU5EX0hPVkVSX0xJR0hUIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiaW5zdHJ1Y3Rpb24iLCJ0ZW1wbGF0ZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsInNjcmlwdCIsImh0bWxfaWQiLCJpbmhlcml0Rm9udCIsImJ1dHRvblR5cGUiLCJndWlkZWRfemFwcyIsInNyYyIsInFzIiwiY3VycmVudCIsInJlbCIsIkNvbm5lY3Rpb25zQ29udGFpbmVyIiwidXNlUm91dGVyIiwidXNlUGFyYW1zIiwic2V0UXVldWUiLCJzZXRFcnJvciIsInNldENvbXBsZXRlZCIsInNldEJhY2tlbmRQcm9jZXNzaW5nIiwic2V0RmlsZSIsInNldEFQSUtleSIsImZldGNoUXVldWUiLCJ0b2tlbiIsImhhbmRsZUZpbGVVcGxvYWQiLCJ1cGxvYWRGaWxlIiwiY29uZmlnIiwiY29udGVudFR5cGUiLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3MiLCJNYXRoIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsInVwbG9hZFBhdGgiLCJyZXMiLCJTZW50cnkiLCJzY29wZSIsInNldExldmVsIiwiRXJyb3IiLCJhY2NlcHRlZEZpbGVzIiwicmVqZWN0ZWRGaWxlcyIsIl9maWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFwYSIsImhlYWRlciIsIm5ld2xpbmUiLCJza2lwRW1wdHlMaW5lcyIsImNvbXBsZXRlIiwib25hYm9ydCIsIm9uZXJyb3IiLCJyZWFkQXNCaW5hcnlTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLGlDQUFpQyxrQkFBa0IsZ0JBQWdCLDhCQUE4QixxQkFBcUIsR0FBRyx3RUFBd0UscUJBQXFCLDhCQUE4QixHQUFHLG9GQUFvRiw4QkFBOEIsR0FBRyxtQkFBbUIsNkJBQTZCLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLEdBQUcseUNBQXlDLDZCQUE2QixHQUFHO0FBQ3ZwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQVVBLE1BQU1BLFlBQVksR0FBRyxrRkFBT0Msb0RBQVA7QUFBQTtBQUFBLEdBQW9CLENBQUM7QUFBQ0MsU0FBRDtBQUFVQztBQUFWLENBQUQsS0FBeUI7QUFDaEU7QUFDQTtBQUNBLFNBQU87QUFDTEMsVUFBTSxFQUFFLEVBREg7QUFFTEMsY0FBVSxFQUFFLE1BRlA7QUFHTEMsU0FBSyxFQUFFLE1BSEY7QUFJTEMsbUJBQWUsRUFBRUMsc0RBQU8sQ0FBQ0MsWUFKcEI7QUFLTEMsY0FBVSxFQUFFLEdBTFA7QUFNTEMsWUFBUSxFQUFFLEVBTkw7QUFPTEMsV0FBTyxFQUFFLENBUEo7QUFRTEMsYUFBUyxFQUFFLGdGQVJOO0FBU0xDLFVBQU0sRUFBRSxDQVRIO0FBVUxDLGdCQUFZLEVBQUUsQ0FWVDtBQVdMQyxVQUFNLEVBQUcsdUJBWEo7QUFZTEMsY0FBVSxFQUFFLHVCQVpQO0FBYUxDLFdBQU8sRUFBRSxRQWJKO0FBY0wsY0FBVTtBQUNSWCxxQkFBZSxFQUFFQyxzREFBTyxD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WmYsR0FBakMsQ0FERjtBQWdCRCxDQWpKRDs7QUFtSmV3WCwwSEFBTyxHQUFHK0Isb0JBQUgsQ0FBdEIsRTs7Ozs7Ozs7Ozs7QUNsS0EsVUFBVSxtQkFBTyxDQUFDLDRKQUFpRjtBQUNuRywwQkFBMEIsbUJBQU8sQ0FBQyw0S0FBNkU7O0FBRS9HOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxlIiwiZmlsZSI6IkNvbm5lY3Rpb25zQ29udGFpbmVyXzdkMzI4ZGU3OTUxODQ4ZGIwODg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5obC1jYWxlbmRhciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY0OGVlO1xcbiAgb3BhY2l0eTogMC4xNTtcXG4gIHotaW5kZXg6IDEwOyAqL1xcbiAgZm9udC1mYW1pbHk6ICdMYW1iZGFzJztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkLCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NDhlZTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ODZkZjQ7XFxufVxcblxcbi5obC1kYXk6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4Zjk7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHt3YWl0aW5nLCBkaXNhYmxlZH0pID0+IHtcbiAgLy9jb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMjgsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke1BBTEVUVEUuQk9YX1NIQURPV19QUklNQVJZfWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1RocmVlRG90c1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFRocmVlRG90c1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNlwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNlwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTQ5Ni42NzkgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTMwMy4zNDcgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwTTExMC4wMTQgMjEyLjIwOGMyNS4xNjcgMjUuMTY3IDI1LjE2NyA2NS45NzEgMCA5MS4xMzhzLTY1Ljk3MSAyNS4xNjctOTEuMTM4IDAtMjUuMTY3LTY1Ljk3MSAwLTkxLjEzOCA2NS45NzEtMjUuMTY3IDkxLjEzOCAwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRocmVlRG90c1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAnc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAnY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWR9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ2lucHV0JyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250U2l6ZTogMTUsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2Vycm9yID8gJyNmZmRhY2MnIDogUEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG59KVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuY29uc3QgTGFiZWxIZWxwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEyLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luTGVmdDogNlxufSlcblxuY29uc3QgSW5wdXRGaWVsZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgZXJyb3IsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBsYWJlbCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgIClcbiAgICAgICwgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbi50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRocmVlRG90c0ljb24gZnJvbSAnY29tcG9uZW50cy9JY29ucy9UaHJlZURvdHNTVkcnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGJvcmRlclJhZGl1czogNTAsXG4gIHdpZHRoOiAyNSxcbiAgaGVpZ2h0OiAyNSxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAwLFxuICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2UtaW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSXG4gIH1cbn0pXG5cbmNvbnN0IE1lbnVCdXR0b24gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtvbkNsaWNrLCB0eXBlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHR5cGU6IHR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhyZWVEb3RzSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuRVJST1JfTUFJTixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkRXJyb3JcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbCgoLyoge2Rpc2FibGVkfSAqLykgPT4gKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxMixcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYWxsJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiBQQUxFVFRFLkJBQ0tHUk9VTkRfTUFJTixcbiAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gICAgY29udGVudDogJ1wiXCInLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgbGVmdDogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICdjYWxjKDUwJSAtIDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYmFja2dyb3VuZC1jb2xvcidcbiAgfVxufSkpXG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJjpjaGVja2VkICsgJHtMYWJlbH0ge1xuICAgIC8qIGJhY2tncm91bmQ6ICR7UEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFU1R9OyAqL1xuICAgIGJvcmRlci1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gIH1cbiAgJjpjaGVja2VkICsgJHtMYWJlbH06YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OGMzWm5JSGRwWkhSb1BTSXlOaUlnYUdWcFoyaDBQU0l5TUNJZ2RtVnljMmx2YmowaU1TNHhJaUIyYVdWM1FtOTRQU0l5TGpBeU9UWTRJQzAwTUM0d09UQXpJREkySURJd0lpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OElTMHRSMlZ1WlhKaGRHVmtJR0o1SUVsS1UxWkhJQ2hvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YVdOdmJtcGhjaTlKU2xOV1J5a3RMVDQ4Y0dGMGFDQmtQU0pOTWpjdU9UYzBNeXd0TXpZdU1USTNNbU13TERBdU5EUTJOREk0SUMwd0xqRTFOakkxTERBdU9ESTFPRGt6SUMwd0xqUTJPRGMxTERFdU1UTTRNemxzTFRFeUxqRXlNRFVzTVRJdU1USXdOV3d0TWk0eU56WTNPU3d5TGpJM05qYzVZeTB3TGpNeE1qVXNNQzR6TVRJMUlDMHdMalk1TVRrMk5Dd3dMalEyT0RjMUlDMHhMakV6T0RNNUxEQXVORFk0TnpWakxUQXVORFEyTkRJNExEQWdMVEF1T0RJMU9Ea3pMQzB3TGpFMU5qSTFJQzB4TGpFek9ETTVMQzB3TGpRMk9EYzFiQzB5TGpJM05qYzVMQzB5TGpJM05qYzViQzAyTGpBMk1ESTNMQzAyTGpBMk1ESTNZeTB3TGpNeE1qVXNMVEF1TXpFeU5TQXRNQzQwTmpnM05Td3RNQzQyT1RFNU5qVWdMVEF1TkRZNE56VXNMVEV1TVRNNE16bGpNQ3d0TUM0ME5EWTBNamtnTUM0eE5UWXlOU3d0TUM0NE1qVTRPVE1nTUM0ME5qZzNOU3d0TVM0eE16Z3pPV3d5TGpJM05qYzVMQzB5TGpJM05qYzVZekF1TXpFeU5Td3RNQzR6TVRJMUlEQXVOamt4T1RZMUxDMHdMalEyT0RjMUlERXVNVE00TXprc0xUQXVORFk0TnpWak1DNDBORFkwTWprc01DQXdMamd5TlRnNU15d3dMakUxTmpJMUlERXVNVE00TXprc01DNDBOamczTld3MExqa3lNVGc0TERRdU9UTTROakpzTVRBdU9UZ3lNU3d0TVRBdU9UazRPV013TGpNeE1qVXNMVEF1TXpFeU5TQXdMalk1TVRrMk5Dd3RNQzQwTmpnM05TQXhMakV6T0RNNUxDMHdMalEyT0RjMVl6QXVORFEyTkRJNExEQWdNQzQ0TWpVNE9UTXNNQzR4TlRZeU5TQXhMakV6T0RNNUxEQXVORFk0TnpWc01pNHlOelkzT0N3eUxqSTNOamM1WXpBdU16RXlOU3d3TGpNeE1qVWdNQzQwTmpnM05Td3dMalk1TVRrMk5DQXdMalEyT0RjMUxERXVNVE00TXpsYUlpQjBjbUZ1YzJadmNtMDlJbk5qWVd4bEtERXVNREF4T1RncElpQm1hV3hzUFNJalptWm1JajQ4TDNCaGRHZytQQzl6ZG1jKycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOXB4O1xuICB9XG5gXG5cbmNvbnN0IENoZWNrYm94ID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2F1dG9Gb2N1cywgZGlzYWJsZWQsIGlkLCBjaGVja2VkLCBuYW1lLCBvbkNoYW5nZSwgbGFiZWwsIHZhbHVlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX1cbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBodG1sRm9yOiBpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc0fX0gLyogZGlzYWJsZWQ9e2Rpc2FibGVkfSAqLywgbGFiZWwpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7dXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7aXNWYWxpZH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgRGF0ZVBpY2tlciwge30gZnJvbSAncmVhY3QtZGF0ZXBpY2tlcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IHtnZXREaXNwbGF5Rm9ybWF0fSBmcm9tICdjbGllbnQvdXRpbHMvZGF0ZUhlbHBlcnMnXG5cbmltcG9ydCAncmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZERhdGVQaWNrZXIgPSBzdHlsZWQoRGF0ZVBpY2tlcilgXG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbmBcblxuY29uc3QgRGF0ZUlucHV0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7IGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsIHJlZjogcmVmLCAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX0gKVxufSlcblxuY29uc3QgQ3VzdG9tRGF0ZVBpY2tlciA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtuYW1lLCBwbGFjZWhvbGRlciwgcmVhZE9ubHksIHZhbHVlLCBpc1Rhc2tNZW51LCBlcnJvcn0gPSBwcm9wc1xuICBjb25zdCBbLCAsIHtzZXRWYWx1ZX1dID0gdXNlRmllbGQobmFtZSlcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIC4uLihpc1Rhc2tNZW51ICYmIHtwYWRkaW5nOiAnMHB4J30pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXcgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWxpZENoYXJzID0gL15cXGR7MCwyfVsuL117MCwxfVxcZHswLDJ9Wy4vXXswLDF9XFxkezAsNH0kL1xuICAgIGlmICghdmFsaWRDaGFycy50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZChuZXcgRGF0ZSh2YWx1ZSkpKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGlmIChkYXRlICYmIGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHNldFZhbHVlKGRhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZhbHVlKCcnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHN0eWxlOiBjb250YWluZXJTdHlsZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWREYXRlUGlja2VyLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgY3VzdG9tSW5wdXQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUlucHV0LCB7IGVycm9yOiBlcnJvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY5fX0gKSxcbiAgICAgICAgc2VsZWN0ZWQ6IHZhbHVlICYmIG5ldyBEYXRlKHZhbHVlKSxcbiAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU6IFwiaGwtY2FsZW5kYXJcIixcbiAgICAgICAgZGF5Q2xhc3NOYW1lOiAoKSA9PiAnaGwtZGF5JyxcbiAgICAgICAgc2hvdWxkQ2xvc2VPblNlbGVjdDogZmFsc2UsXG4gICAgICAgIG9uQ2hhbmdlUmF3OiBoYW5kbGVDaGFuZ2VSYXcsXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dDogZ2V0RGlzcGxheUZvcm1hdChwbGFjZWhvbGRlciksXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvTU0veXl5eVwiLFxuICAgICAgICBkaXNhYmxlZDogcmVhZE9ubHksXG4gICAgICAgIGRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRGF0ZVBpY2tlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1BhZ2VIZWFkZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdigoe211bHRpQ29sdW1ufSkgPT4gKHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBtdWx0aUNvbHVtbiA/ICc1MCUgNTAlJyA6ICcxZnInLFxuICBncmlkQ29sdW1uR2FwOiA1MCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHBhZGRpbmc6ICc5NXB4IDgwcHggNDBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnXG59KSlcblxuY29uc3QgQXBwSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtsZWZ0QmFySXRlbXMsIHJpZ2h0QmFySXRlbXN9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBtdWx0aUNvbHVtbjogcmlnaHRCYXJJdGVtcyAmJiBsZWZ0QmFySXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjN9fSwgbGVmdEJhckl0ZW1zKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0fX0sIHJpZ2h0QmFySXRlbXMpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEhlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyLnRzeFwiO2ltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcblxuXG5cblxuXG5cblxuY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHtyb3d9KSA9PiAoe1xuICBmbG9hdDogJ2xlZnQnLFxuICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246IHJvdyA/ICdyb3cnIDogJ2NvbHVtbidcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVuLCByb3csIHN0eWxlfSkgPT4gKFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHsgc3R5bGU6IHN0eWxlLCByb3c6IHJvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5fX1cbiAgICAsIGNoaWxkcmVuXG4gIClcbilcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tDb21wbGV0ZWQudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvZGVCb3ggZnJvbSAnLi9Db2RlQm94J1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFQSVRhc2tDb21wbGV0ZWQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2FwaUtleSwgb3JnSWQsIHF1ZXVlfSA9IHByb3BzXG4gIGNvbnN0IHtpZDogcXVldWVJZH0gPSBxdWV1ZVxuICBjb25zdCBBUElfSE9TVCA9IGAke19fQVBQX1VSTF9ffS9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzL2NvbXBsZXRlZGBcblxuICBjb25zdCBjb2RlU3RyaW5nID0gYGN1cmwgLXYgJHtBUElfSE9TVH0gXFxcXFxuICAtSCBcIkNvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblwiIFxcXFxcbiAgLUggXCJBdXRob3JpemF0aW9uOiBUb2tlbiAke2FwaUtleX1cIlxuICBgXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvZGVCb3gsIHtcbiAgICAgIGlzQXBpOiB0cnVlLFxuICAgICAgcXVldWU6IHF1ZXVlLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBcIlRvIGZldGNoIGFsbCBvZiB0aGlzIHF1ZXVlJ3MgY29tcGxldGVkIHRhc2tzLCBydW4gdGhlIGZvbGxvd2luZyBQT1NUIHJlcXVlc3RcIiAgICAgICAgICAgICxcbiAgICAgIGNvZGVTdHJpbmc6IGNvZGVTdHJpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMn19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSVRhc2tDb21wbGV0ZWRcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0FQSVRhc2tVcGxvYWQudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcblxuaW1wb3J0IENvZGVCb3ggZnJvbSAnLi9Db2RlQm94J1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgcGFkZGluZzogMjUsXG4gICc+IHByZSc6IHtcbiAgICBib3JkZXJSYWRpdXM6IDhcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IEluc3RydWN0aW9ucyA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDI1LFxuICBsaW5lSGVpZ2h0OiAxLjQsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0J1xufSlcblxuZXhwb3J0IGNvbnN0IGN1c3RvbVN0eWxlID0ge1xuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5NT05PU1BBQ0UsXG4gIGZvbnRTaXplOiAxMyxcbiAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJ1xufVxuXG5jb25zdCBzYW1wbGVWYWx1ZXMgPSB7XG4gIHRleHQ6IGBcIlRoaXMgaXMgc29tZSByYW5kb20gdGV4dFwiYCxcbiAgaW1hZ2U6IGBcImh0dHBzOi8vZXhhbXBsZS5jb20vcmFuZG9tLXBpY3R1cmUuanBnXCJgLFxuICBhdWRpbzogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tc29uZy5tcDNcImAsXG4gIHZpZGVvOiBgXCJodHRwczovL2V4YW1wbGUuY29tL3JhbmRvbS12aWRlby5tcDRcImAsXG4gIGVtYWlsOiBgXCJhbGljZUBleGFtcGxlLmNvbVwiYCxcbiAgbGluazogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiYCxcbiAgbnVtYmVyOiA0MixcbiAgZGF0ZTogYFwiTU0vREQvWVlZWVwiYCxcbiAgYmluYXJ5OiBgdHJ1ZWAsXG4gIHNpbmdsZV9zZWxlY3Rpb246IGBcIjxpZC0xPlwiYCxcbiAgbXVsdGlwbGVfc2VsZWN0aW9uOiBgWzxpZC0xPiwgPGlkLTI+XWAsXG4gIGZvcm1fc2VxdWVuY2U6IGB7PHExLWlkPjogPHExLXZhbHVlPiwgPHEyLWlkPjogPHEyLXZhbHVlPn1gLFxuICBlbWJlZDogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiYCxcbiAgcGRmOiBgXCJodHRwczovL2V4YW1wbGUuY29tL2ZpbGUucGRmXCJgLFxuICBib3VuZGluZ19ib3hlczogYFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tcGljdHVyZS5qcGdcImAsXG4gIG5hbWVkX2VudGl0eV9yZWNvZ25pdGlvbjogYHtcInRleHRcIjogXCJUaGlzIGlzIHNvbWUgcmFuZG9tIHRleHRcIiwgXCJlbnRpdGllc1wiOiBbXX1gLFxuICByaWNoX3RleHQ6IGBcIlRlbGwgYSBzdG9yeVwiYCxcbiAgdGV4dF9zZXF1ZW5jZTogWydmb28nLCAnYmFyJ11cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVWYWx1ZShpbnB1dCwgc3BhY2VzKSB7XG4gIGNvbnN0IHR5cGUgPSBpbnB1dC50eXBlXG4gIGxldCB2YWx1ZVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTlVNQkVSOlxuICAgICAgdmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfID0+IF9bdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yLnBsYWNlaG9sZGVyXSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IGBcIiR7X29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzMgPT4gXzNbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80Lm9wdGlvbnMsICdhY2Nlc3MnLCBfNSA9PiBfNVswXSwgJ2FjY2VzcycsIF82ID0+IF82WydpZCddXSl9XCJgXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IGBbXCIke19vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF83ID0+IF83W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOCA9PiBfOC5vcHRpb25zLCAnYWNjZXNzJywgXzkgPT4gXzlbMF0sICdhY2Nlc3MnLCBfMTAgPT4gXzEwWydpZCddXSl9XCJdYFxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRTpcbiAgICAgIGxldCBzZXF1ZW5jZV9kYXRhID0gJ3tcXG4nXG4gICAgICBsZXQgRU9MID0gJyxcXG4nXG4gICAgICBjb25zdCBpbnB1dHMgPSBpbnB1dFt0eXBlXS5kYXRhXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbCA9IGlucHV0c1tpXVxuICAgICAgICBFT0wgPSBpIDwgaW5wdXRzLmxlbmd0aCAtIDEgPyBFT0wgOiAnXFxuJ1xuICAgICAgICBzZXF1ZW5jZV9kYXRhID0gc2VxdWVuY2VfZGF0YSArIGdlbmVyYXRlUm93KGVsLCBzcGFjZXMgKyAnICAnKSArIEVPTFxuICAgICAgfVxuICAgICAgdmFsdWUgPSBzZXF1ZW5jZV9kYXRhICsgc3BhY2VzICsgJ30nXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT046XG4gICAgICBjb25zdCBuZXJfdGV4dF92YWx1ZSA9XG4gICAgICAgIF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8xMSA9PiBfMTFbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8xMiA9PiBfMTIucGxhY2Vob2xkZXJdKSAmJiBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfMTMgPT4gXzEzW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTQgPT4gXzE0LnBsYWNlaG9sZGVyLCAnYWNjZXNzJywgXzE1ID0+IF8xNS5sZW5ndGhdKSA+IDBcbiAgICAgICAgICA/IGlucHV0W3R5cGVdLnBsYWNlaG9sZGVyXG4gICAgICAgICAgOiAnVGhpcyBpcyBzb21lIHJhbmRvbSB0ZXh0J1xuICAgICAgdmFsdWUgPSBge1widGV4dFwiOiAke0pTT04uc3RyaW5naWZ5KG5lcl90ZXh0X3ZhbHVlKX0sIFwiZW50aXRpZXNcIjogW119YFxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVM6XG4gICAgICBjb25zdCBiYl90ZXh0X3ZhbHVlID1cbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzE2ID0+IF8xNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE3ID0+IF8xNy5wbGFjZWhvbGRlcl0pICYmIF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8xOCA9PiBfMThbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8xOSA9PiBfMTkucGxhY2Vob2xkZXIsICdhY2Nlc3MnLCBfMjAgPT4gXzIwLmxlbmd0aF0pID4gMFxuICAgICAgICAgID8gaW5wdXRbdHlwZV0ucGxhY2Vob2xkZXJcbiAgICAgICAgICA6IHNhbXBsZVZhbHVlcy5ib3VuZGluZ19ib3hlc1xuICAgICAgdmFsdWUgPSBge1widmFsdWVcIjoge1wiaW1hZ2VcIjogJHtiYl90ZXh0X3ZhbHVlfX0sIFwib2JqZWN0c1wiOiBbXX1gXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFOlxuICAgICAgdmFsdWUgPVxuICAgICAgICBfb3B0aW9uYWxDaGFpbihbaW5wdXQsICdhY2Nlc3MnLCBfMjEgPT4gXzIxW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjIgPT4gXzIyLnBsYWNlaG9sZGVyLCAnYWNjZXNzJywgXzIzID0+IF8yMy5sZW5ndGhdKSA+IDBcbiAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KF9vcHRpb25hbENoYWluKFtpbnB1dCwgJ2FjY2VzcycsIF8yNCA9PiBfMjRbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yNSA9PiBfMjUucGxhY2Vob2xkZXJdKSlcbiAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHNhbXBsZVZhbHVlc1t0eXBlXSlcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzI2ID0+IF8yNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzI3ID0+IF8yNy5wbGFjZWhvbGRlcl0pID8gSlNPTi5zdHJpbmdpZnkoX29wdGlvbmFsQ2hhaW4oW2lucHV0LCAnYWNjZXNzJywgXzI4ID0+IF8yOFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzI5ID0+IF8yOS5wbGFjZWhvbGRlcl0pKSA6IG51bGxcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSb3coaW5wdXQsIHNwYWNlcykge1xuICBjb25zdCB0eXBlID0gaW5wdXQudHlwZVxuICBjb25zdCB2YWx1ZSA9IGdlbmVyYXRlVmFsdWUoaW5wdXQsIHNwYWNlcylcblxuICBjb25zdCBwYXlsb2FkU2FtcGxlVGV4dCA9IGAke3ZhbHVlIHx8IHNhbXBsZVZhbHVlc1t0eXBlXX1gXG5cbiAgcmV0dXJuIGAke3NwYWNlc31cIiR7aW5wdXQuaWR9XCI6ICR7cGF5bG9hZFNhbXBsZVRleHR9YFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZURhdGFTYW1wbGUoaW5wdXRzKSB7XG4gIGxldCBwYXlsb2FkU3RyaW5nID0gJydcbiAgbGV0IEVPTCA9ICcsXFxuJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgRU9MID0gaSA8IGlucHV0cy5sZW5ndGggLSAxID8gRU9MIDogJydcbiAgICBwYXlsb2FkU3RyaW5nID0gcGF5bG9hZFN0cmluZyArIGdlbmVyYXRlUm93KGlucHV0c1tpXSwgJyAgICAgICcpICsgRU9MXG4gIH1cbiAgcmV0dXJuIHBheWxvYWRTdHJpbmdcbn1cblxuY29uc3QgQVBJVGFza1VwbG9hZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YXBpS2V5LCBvcmdJZCwgcXVldWVJZCwgcXVldWV9ID0gcHJvcHNcbiAgY29uc3Qge2RhdGEgPSBbXX0gPSBxdWV1ZVxuXG4gIGNvbnN0IEFQSV9IT1NUID0gYCR7X19BUFBfVVJMX199L29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvY3JlYXRlYFxuICBjb25zdCBkYXRhT2JqID0gZ2VuZXJhdGVEYXRhU2FtcGxlKGRhdGEpXG5cbiAgY29uc3QgY29kZVN0cmluZyA9IGBjdXJsIC12ICR7QVBJX0hPU1R9IFxcXFxcbiAgLUggXCJDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cIiBcXFxcXG4gIC1IIFwiQXV0aG9yaXphdGlvbjogVG9rZW4gJHthcGlLZXl9XCIgXFxcXFxuICAtZCAne1wiZGF0YVwiOlxuICAgIHtcbiR7W2RhdGFPYmpdfVxuICAgIH1cbiAgfSdcbmBcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29kZUJveCwge1xuICAgICAgaXNBcGk6IHRydWUsXG4gICAgICBxdWV1ZTogcXVldWUsXG4gICAgICBjb2RlU3RyaW5nOiBjb2RlU3RyaW5nLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBgXG4gICAgICAgIFRvIGVuYWJsZSB3b3JrZXJzIHRvIHdvcmsgdGFza3Mgb24gdGhpcyBxdWV1ZSB5b3Ugd2lsbCBuZWVkIHRvIGFkZCBzb21lIHRhc2tzLiBUaGVcbiAgICAgICAgZmFzdGVzdCB3YXkgdG8gYWRkIHRhc2tzIGlzIGJ5IHV0aWxpemluZyB0aGUgSHVtYW4gTGFtYmRhcyBBUEkuIFRvIGNyZWF0ZSB5b3VyIGZpcnN0IHRhc2tcbiAgICAgICAgcnVuIHRoZSBmb2xsb3dpbmcgUE9TVCByZXF1ZXN0OlxuICAgICAgICBgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ5fX1cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJVGFza1VwbG9hZFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQWRkVGFza3NTd2l0Y2hlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBwYWRkaW5nTGVmdDogODAsXG4gIG1hcmdpblRvcDogMjUsXG4gIHdpZHRoOiAyNTAsXG4gIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7UEFMRVRURS5CQUNLR1JPVU5EX0dSQVlfTUlEfWBcbn0pXG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2KHttYXJnaW5Cb3R0b206IDMyfSlcblxuY29uc3QgTWVudUhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA1MDAsXG4gIGZvbnRTaXplOiAnMTZweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOXB4JyxcbiAgbWFyZ2luQm90dG9tOiA4XG59KVxuXG5jb25zdCBNZW51SXRlbSA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHthY3RpdmV9KSA9PiAoe1xuICB3aWR0aDogMTAwLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIGNvbG9yOiBhY3RpdmUgPyBQQUxFVFRFLlBSSU1BUllfTUFJTiA6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIGhlaWdodDogMjQsXG4gIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIGZvbnRTaXplOiAxNCxcbiAgbWFyZ2luVG9wOiAxMFxufSkpXG5cbmNvbnN0IEFkZFRhc2tzU3dpdGNoZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3NldEFwaVZpZXcsIGFwaVZpZXd9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX0sIFwiU291cmNlc1wiKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsgb25DbGljazogKCkgPT4gc2V0QXBpVmlldygnc291cmNlcy9hcGknKSwgYWN0aXZlOiBhcGlWaWV3ID09PSAnc291cmNlcy9hcGknLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSwgXCJBUElcIlxuXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IG9uQ2xpY2s6ICgpID0+IHNldEFwaVZpZXcoJ3NvdXJjZXMvY3N2JyksIGFjdGl2ZTogYXBpVmlldyA9PT0gJ3NvdXJjZXMvY3N2JywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX0sIFwiQ1NWXCJcblxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdzb3VyY2VzL3phcGllcicpLCBhY3RpdmU6IGFwaVZpZXcgPT09ICdzb3VyY2VzL3phcGllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1N319LCBcIlphcGllclwiXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjF9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUhlYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19LCBcIkRlc3RpbmF0aW9uc1wiKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdkZXN0aW5hdGlvbnMvd2ViaG9va3MnKSxcbiAgICAgICAgICBhY3RpdmU6IGFwaVZpZXcgPT09ICdkZXN0aW5hdGlvbnMvd2ViaG9va3MnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgICAsIFwiV2ViaG9va3NcIlxuXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgb25DbGljazogKCkgPT4gc2V0QXBpVmlldygnZGVzdGluYXRpb25zL2FwaScpLFxuICAgICAgICAgIGFjdGl2ZTogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9hcGknLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAsIFwiQVBJXCJcblxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldEFwaVZpZXcoJ2Rlc3RpbmF0aW9ucy9jc3YnKSxcbiAgICAgICAgICBhY3RpdmU6IGFwaVZpZXcgPT09ICdkZXN0aW5hdGlvbnMvY3N2JywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICAgLCBcIkNTVlwiXG5cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRBcGlWaWV3KCdkZXN0aW5hdGlvbnMvemFwaWVyJyksXG4gICAgICAgICAgYWN0aXZlOiBhcGlWaWV3ID09PSAnZGVzdGluYXRpb25zL3phcGllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MX19XG4gICAgICAgICwgXCJaYXBpZXJcIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFza3NTd2l0Y2hlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQ29kZUJveC50c3hcIjsvKipcbiAqIFRPRE9cbiAqIDEpIENyZWF0ZSB0aGVtZSBmcm9tIHBhbGV0dGVcbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7UHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXJ9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcidcbmltcG9ydCB7YmFzZTE2QXRlbGllcnN1bHBodXJwb29sTGlnaHR9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2VzbS9zdHlsZXMvcHJpc20nXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHknXG5cbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7aXNBcGl9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBwYWRkaW5nOiAyNSxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICc+IHByZSc6IHtcbiAgICBwYWRkaW5nOiAnMjBweCAyMHB4IDMwcHggMjBweCAhaW1wb3J0YW50JyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgLi4uKGlzQXBpICYmIHtcbiAgICAgICc+IGNvZGUgPiBzcGFuJzoge1xuICAgICAgICBjb2xvcjogJ3JnYigzNCwgMTYyLCAyMDEpICFpbXBvcnRhbnQnXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSkpXG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQuZGl2YFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxN3B4O1xuICByaWdodDogMTJweDtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIG1hcmdpbjogMjVweDtcbiAgY29sb3I6ICM2NjQ4ZWU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnN0cnVjdGlvbnMgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNSxcbiAgbGluZUhlaWdodDogMS40LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0J1xufSlcblxuZXhwb3J0IGNvbnN0IHN0eWxlID0ge1xuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5NT05PU1BBQ0UsXG4gIGZvbnRTaXplOiAxM1xufVxuXG5jb25zdCBBUElUYXNrVXBsb2FkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpbnN0cnVjdGlvbnMsIGNvZGVTdHJpbmcsIHBhZGRpbmcsIGxhbmd1YWdlLCBpc0FwaX0gPSBwcm9wc1xuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZSgnQ29weSB0byBjbGlwYm9hcmQnKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRDb250YWluZXIsIHsgaXNBcGk6IGlzQXBpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEluc3RydWN0aW9ucywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3Mn19LCBpbnN0cnVjdGlvbnMpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ludGF4SGlnaGxpZ2h0ZXIsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgICBzdHlsZTogYmFzZTE2QXRlbGllcnN1bHBodXJwb29sTGlnaHQsXG4gICAgICAgIGNvZGVUYWdQcm9wczoge3N0eWxlfSxcbiAgICAgICAgd3JhcExpbmVzOiB0cnVlLFxuICAgICAgICBjdXN0b21TdHlsZToge3BhZGRpbmc6IHBhZGRpbmcgfHwgJzIwcHgnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDczfX1cbiAgICAgIFxuICAgICAgICAsIGNvZGVTdHJpbmdcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb3B5VG9DbGlwYm9hcmQsIHtcbiAgICAgICAgdGV4dDogY29kZVN0cmluZyxcbiAgICAgICAgb25Db3B5OiAoKSA9PiB7XG4gICAgICAgICAgc2V0QnV0dG9uVGV4dCgnQ29waWVkJylcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19LCBidXR0b25UZXh0KVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5BUElUYXNrVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFuZ3VhZ2U6ICdiYXNoJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUElUYXNrVXBsb2FkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9Db25uZWN0aW9ucy50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRHJvcHpvbmV9IGZyb20gJ3JlYWN0LWRyb3B6b25lJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge3BhcnNlfSBmcm9tICdqc29uMmNzdidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtJQ09OX1NJWkV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQge1NVUFBPUlRFRF9GSUxFUywgTUFYX0ZJTEVfU0laRX0gZnJvbSAnY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IHtCTE9DS19UWVBFLCBTQU1QTEVfVkFMVUVTLCBGRUFUVVJFX1RPR0dMRVN9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgQWRkVGFza3NTd2l0Y2hlciBmcm9tICcuL0FkZFRhc2tzU3dpdGNoZXInXG5pbXBvcnQgQVBJVGFza1VwbG9hZCBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5pbXBvcnQgQVBJVGFza0NvbXBsZXRlZCBmcm9tICcuL0FQSVRhc2tDb21wbGV0ZWQnXG5pbXBvcnQgRG93bmxvYWRDU1YgZnJvbSAnLi9Eb3dubG9hZENTVidcbmltcG9ydCBVcGRhdGVXZWJob29rIGZyb20gJy4vVXBkYXRlV2ViaG9vaydcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1BhZ2VIZWFkZXInXG5pbXBvcnQgUm9vdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Sb290QnV0dG9uJ1xuaW1wb3J0IFphcGllckNvbnRhaW5lciBmcm9tICcuL1phcGllckNvbnRhaW5lcidcbmltcG9ydCBDb2RlQm94IGZyb20gJy4vQ29kZUJveCdcbmltcG9ydCBNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTWVudUl0ZW0nXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTWVudUJ1dHRvbidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbn0pXG5cbmNvbnN0IE1haW5Db250ZW50cyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59KVxuXG5jb25zdCBDb250ZW50Qm9keSA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnMCA1MHB4JyxcbiAgbWluV2lkdGg6IDUwMCxcbiAgbWF4V2lkdGg6IDgwMCxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgbWFyZ2luOiAnMCBhdXRvJ1xufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuc3Bhbih7XG4gIGZvbnRTaXplOiAyNCxcbiAgZm9udFdlaWdodDogNjAwLFxuICBsaW5lSGVpZ2h0OiAnMzBweCdcbn0pXG5cbmNvbnN0IERyb3BXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIHBhZGRpbmc6ICcyOHB4IDI1cHggNTBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCBTZWxlY3RlZFJlZ2lvbiA9IHN0eWxlZC5kaXZgXG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAmIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgfVxuYFxuXG5jb25zdCBSZWdpb25UZXh0ID0gc3R5bGVkLmRpdmBcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbmBcblxuY29uc3QgUmVnaW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIDI1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgWm9uZSA9IHN0eWxlZC5kaXYoKHtpc0RyYWdBY3RpdmUsIHVwbG9hZENvbXBsZXRlLCBlcnJvciwgYmFja2VuZFByb2Nlc3Npbmd9KSA9PiB7XG4gIGxldCBib3JkZXJDb2xvciA9IGlzRHJhZ0FjdGl2ZVxuICAgID8gUEFMRVRURS5QUklNQVJZX01BSU5cbiAgICA6IHVwbG9hZENvbXBsZXRlICYmICFlcnJvciAmJiBiYWNrZW5kUHJvY2Vzc2luZyA9PSAyXG4gICAgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU5cbiAgICA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxuXG4gIGlmIChlcnJvcikge1xuICAgIGJvcmRlckNvbG9yID0gUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1pbkhlaWdodDogJzIwdmgnLFxuICAgIGJvcmRlcjogYDJweCAke2lzRHJhZ0FjdGl2ZSA/ICdzb2xpZCcgOiAnZGFzaGVkJ30gJHtib3JkZXJDb2xvcn1gLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0J1xuICB9XG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDg0LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbn0pXG5cbmNvbnN0IERyb3BJY29uID0gc3R5bGVkKEljb24pKCh7c3VjY2Vzc2Z1bH0pID0+IHtcbiAgY29uc3QgY29sb3IgPSBzdWNjZXNzZnVsID8gUEFMRVRURS5QUklNQVJZX0dSRUVOIDogUEFMRVRURS5URVhUX0dSQVlcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBmb250U2l6ZTogSUNPTl9TSVpFLk1EMjQsXG4gICAgY29sb3IsXG4gICAgbWFyZ2luUmlnaHQ6IDVcbiAgfVxufSlcblxuY29uc3QgU3R5bGVkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luOiAnMCAyMHB4J1xufSlcblxuY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnaW5saW5lLWJveCdcbn0pXG5cbmNvbnN0IExpbmsgPSBzdHlsZWQoUm9vdEJ1dHRvbikoe1xuICBwYWRkaW5nOiAwLFxuICBtYXJnaW5SaWdodDogMTAsXG4gIGZvbnRTaXplOiAyNCxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZSdcbn0pXG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQuZGl2XG5cblxuXG4oKHtpc0RyYWdBY3RpdmUsIHN1Y2Nlc3NmdWwsIGVycm9yfSkgPT4ge1xuICBsZXQgY29sb3IgPSBpc0RyYWdBY3RpdmVcbiAgICA/IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gICAgOiBzdWNjZXNzZnVsXG4gICAgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU5cbiAgICA6IFBBTEVUVEUuVEVYVF9NQUlOXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29sb3IgPSBQQUxFVFRFLkVSUk9SX01BSU5cbiAgfVxuICByZXR1cm4ge1xuICAgIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUYsXG4gICAgY29sb3IsXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IDUwMFxuICB9XG59KVxuXG5jb25zdCBnZXRWYWx1ZSA9IChibG9jaykgPT4ge1xuICBjb25zdCB0eXBlID0gYmxvY2sudHlwZVxuICBsZXQgdmFsdWVcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT046XG4gICAgICB2YWx1ZSA9IF9vcHRpb25hbENoYWluKFtibG9jaywgJ2FjY2VzcycsIF8gPT4gX1t0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIub3B0aW9ucywgJ2FjY2VzcycsIF8zID0+IF8zWzBdLCAnYWNjZXNzJywgXzQgPT4gXzRbJ2lkJ11dKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OOlxuICAgICAgdmFsdWUgPSBgW1wiJHtfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfNSA9PiBfNVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYub3B0aW9ucywgJ2FjY2VzcycsIF83ID0+IF83WzBdLCAnYWNjZXNzJywgXzggPT4gXzhbJ2lkJ11dKX1cIl1gXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFUzpcbiAgICAgIGNvbnN0IGJiSW1hZ2UgPSBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfOSA9PiBfOVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzEwID0+IF8xMC5wbGFjZWhvbGRlcl0pIHx8IFNBTVBMRV9WQUxVRVNbJ2ltYWdlJ11cbiAgICAgIGNvbnN0IGJiVmFsdWUgPSBgeydpbWFnZSc6ICcke2JiSW1hZ2V9JywgJ29iamVjdHMnOiBbXX1gXG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGJiVmFsdWUpXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT046XG4gICAgICBjb25zdCBuZXJUZXh0ID0gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzExID0+IF8xMVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzEyID0+IF8xMi5wbGFjZWhvbGRlcl0pIHx8IFNBTVBMRV9WQUxVRVNbJ3RleHQnXVxuICAgICAgY29uc3QgbmVyVmFsdWUgPSBgeyd0ZXh0JzogJyR7bmVyVGV4dH0nLCAnZW50aXRpZXMnOiBbXX1gXG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG5lclZhbHVlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRTpcbiAgICAgIGNvbnN0IGZvcm1TZXF1ZW5jZVN0cmluZyA9IGJsb2NrW3R5cGVdLmRhdGEucmVkdWNlKChhY2MsIGJsaywgaW5kZXgsIGJsb2NrcykgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBnZXRWYWx1ZShibGspIHx8IFNBTVBMRV9WQUxVRVNbYmxrLnR5cGVdXG4gICAgICAgIGNvbnN0IHNlcCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gXCInXCIgOiAnJ1xuICAgICAgICBpZiAoaW5kZXggPCBibG9ja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHJldHVybiBgJHthY2N9JyR7YmxrLmlkfSc6ICR7c2VwfSR7dmFsfSR7c2VwfSwgYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHthY2N9JyR7YmxrLmlkfSc6ICR7c2VwfSR7dmFsfSR7c2VwfX1gXG4gICAgICAgIH1cbiAgICAgIH0sICd7JylcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZm9ybVNlcXVlbmNlU3RyaW5nKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVEVYVF9TRVFVRU5DRTpcbiAgICAgIGNvbnN0IHRleHRTZXF1ZW5jZVZhbHVlID1cbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzEzID0+IF8xM1t0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE0ID0+IF8xNC5wbGFjZWhvbGRlciwgJ2FjY2VzcycsIF8xNSA9PiBfMTUubGVuZ3RoXSkgPiAwID8gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzE2ID0+IF8xNlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE3ID0+IF8xNy5wbGFjZWhvbGRlcl0pIDogU0FNUExFX1ZBTFVFU1t0eXBlXVxuICAgICAgdmFsdWUgPSAnXCJbJyArIHRleHRTZXF1ZW5jZVZhbHVlLm1hcCgoYSkgPT4gYCcke2F9J2ApICsgJ11cIidcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzE4ID0+IF8xOFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzE5ID0+IF8xOS5wbGFjZWhvbGRlcl0pID8gX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXzIwID0+IF8yMFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzIxID0+IF8yMS5wbGFjZWhvbGRlcl0pIDogU0FNUExFX1ZBTFVFU1t0eXBlXVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5jb25zdCBDb25uZWN0aW9ucyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXBpS2V5LFxuICAgIG9uRHJvcEhhbmRsZXIsXG4gICAgcXVldWVJZCxcbiAgICBoaXN0b3J5LFxuICAgIGNvbXBsZXRlZCxcbiAgICBmaWxlLFxuICAgIHVzZXIsXG4gICAgcXVldWUsXG4gICAgYmFja2VuZFByb2Nlc3NpbmcsXG4gICAgZXJyb3IsXG4gICAgcmVnaW9uLFxuICAgIHNldFJlZ2lvblxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBvcmdJZH0gPSB1c2VyXG4gIGNvbnN0IFthcGlWaWV3LCBzZXRBcGlWaWV3XSA9IHVzZVN0YXRlKCdzb3VyY2VzL2FwaScpXG4gIGNvbnN0IFtjc3ZTdHJpbmcsIHNldENTVl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qge25hbWV9ID0gcXVldWUgfHwge31cblxuICBjb25zdCB7bWVudVBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWVcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdlbmVyYXRlU2FtcGxlQ3N2ID0gKHF1ZXVlKSA9PiB7XG4gICAgICBjb25zdCB7ZGF0YSA9IFtdfSA9IHF1ZXVlXG4gICAgICBsZXQgaGVhZGVycyA9ICcnXG4gICAgICBsZXQgdmFsdWVzID0gJydcbiAgICAgIGxldCBFT0wgPSAnLCdcbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlcyA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgIEVPTCA9IGkgPCBkYXRhLmxlbmd0aCAtIDEgPyBFT0wgOiAnJ1xuICAgICAgICBoZWFkZXJzID0gaGVhZGVycyArIGJsb2NrLmlkICsgRU9MXG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcyArIGdldFZhbHVlKGJsb2NrKSArIEVPTFxuICAgICAgICBtYXBwZWRWYWx1ZXNbYmxvY2suaWRdID0gZ2V0VmFsdWUoYmxvY2spXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBxdW90ZTogJycsXG4gICAgICAgIGVzY2FwZWRRdW90ZTogJydcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNzdiA9IHBhcnNlKFttYXBwZWRWYWx1ZXNdLCBvcHRzKVxuICAgICAgICBzZXRDU1YoY3N2KVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICBzZXRDU1YoJycpXG4gICAgICB9XG4gICAgfVxuICAgIGdlbmVyYXRlU2FtcGxlQ3N2KHF1ZXVlKVxuICB9LCBbcXVldWVdKVxuXG4gIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZX0gPSB1c2VEcm9wem9uZSh7XG4gICAgb25Ecm9wOiBvbkRyb3BIYW5kbGVyLFxuICAgIG1heFNpemU6IE1BWF9GSUxFX1NJWkUsXG4gICAgYWNjZXB0OiBTVVBQT1JURURfRklMRVNcbiAgfSlcbiAgY29uc3QgdXBsb2FkQ29tcGxldGUgPSBmaWxlICYmIGZpbGUubmFtZSAmJiBjb21wbGV0ZWQgPT09IDEwMFxuICBjb25zdCBpc1VwbG9hZGluZyA9IGZpbGUgJiYgZmlsZS5uYW1lICYmIGNvbXBsZXRlZCAhPT0gdW5kZWZpbmVkICYmIGNvbXBsZXRlZCA8IDEwMFxuXG4gIGNvbnN0IHJlbmRlckljb24gPSAoKSA9PiB7XG4gICAgaWYgKHVwbG9hZENvbXBsZXRlICYmICFlcnJvcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcEljb24sIHsgc3VjY2Vzc2Z1bDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwMn19LCBcImNsb3VkX2RvbmVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA0fX0sIGlzVXBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMDR9fSwgXCJjbG91ZF9xdWV1ZVwiKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA0fX0sIFwiYWRkXCIpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbmRlclVzZXJNZXNzYWdlID0gKCkgPT4ge1xuICAgIGlmICh1cGxvYWRDb21wbGV0ZSAmJiBiYWNrZW5kUHJvY2Vzc2luZyA9PT0gMiAmJiAhZXJyb3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHsgc3VjY2Vzc2Z1bDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxMH19LCBgJHtmaWxlLm5hbWV9IHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCFgKVxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzEyfX0sIGBUaGVyZSB3YXMgYW4gZXJyb3Igd2l0aCBwcm9jZXNzaW5nICR7ZmlsZS5uYW1lfTogJHtlcnJvcn1gKVxuICAgIH0gZWxzZSBpZiAoaXNVcGxvYWRpbmcgfHwgYmFja2VuZFByb2Nlc3NpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMTV9fSwgYCR7Y29tcGxldGVkfSUke1xuICAgICAgICAgIGJhY2tlbmRQcm9jZXNzaW5nID09PSAxID8gJyB1cGxvYWRlZCwgcHJvY2Vzc2luZyBvbiBzZXJ2ZXIgLi4uJyA6ICcnXG4gICAgICAgIH1gKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHQsIHsgaXNEcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjF9fSwgXCJDbGljayBvciBEcm9wIGEgQ1NWIGZpbGUgaGVyZSB0byBjcmVhdGUgdGFza3NcIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VIZWFkZXIsIHtcbiAgICAgICAgbGVmdEJhckl0ZW1zOiBcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IG9uQ2xpY2s6ICgpID0+IGhpc3RvcnkucHVzaChgL3F1ZXVlcy8ke3F1ZXVlSWR9YCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzN9fSwgbmFtZSlcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzR9fSwgXCIvIENvbm5lY3Rpb25zXCIgKVxuICAgICAgICAgIClcbiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMwfX1cbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNYWluQ29udGVudHMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM4fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFkZFRhc2tzU3dpdGNoZXIsIHsgc2V0QXBpVmlldzogc2V0QXBpVmlldywgYXBpVmlldzogYXBpVmlldywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOX19IClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCb2R5LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0MH19XG4gICAgICAgICAgLCBhcGlWaWV3ID09PSAnc291cmNlcy9hcGknID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBUElUYXNrVXBsb2FkLCB7IG9yZ0lkOiBvcmdJZCwgcXVldWVJZDogcXVldWVJZCwgcXVldWU6IHF1ZXVlLCBhcGlLZXk6IGFwaUtleSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0Mn19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ3NvdXJjZXMvY3N2JyA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvZGVCb3gsIHtcbiAgICAgICAgICAgICAgICBxdWV1ZTogcXVldWUsXG4gICAgICAgICAgICAgICAgY29kZVN0cmluZzogY3N2U3RyaW5nLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBpbnN0cnVjdGlvbnM6IGBcbiAgICAgICAgICAgICAgICAgIFRvIGFkZCB0YXNrcyBvbiB0aGlzIHdvcmtmbG93IHlvdSB3aWxsIG5lZWQgdG8gY3JlYXRlIGEgQ1NWIChjb21tYS1zZXBhcmF0ZWQgdmFsdWVzKSBmaWxlLlxuICAgICAgICAgICAgICAgICAgVG8gY3JlYXRlIHlvdXIgZmlyc3QgdGFzayB1c2UgdGhlIGNvcHkgdGhlIGZvcm1hdCBpbiB0aGUgdGV4dCBiZWxvdyBpbnRvIGEgLmNzdiBmaWxlIGFuZCB1cGxvYWQgdG8gdGhlIGRyYWcgYXJlYS5cbiAgICAgICAgICAgICAgICAgIGAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDV9fVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLCBGRUFUVVJFX1RPR0dMRVMuVVBMT0FEX0NTVl9SRUdJT05fT1JHUy5pbmNsdWRlcyhvcmdJZCkgJiYgKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaW9uQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1Nn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaW9uVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTd9fSwgXCJVcGxvYWQgdG8gYSBzcGVjaWZpYyByZWdpb246IFwiICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0ZWRSZWdpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzU4fX1cbiAgICAgICAgICAgICAgICAgICAgLCByZWdpb24sIFwiIFwiICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbCwgcmVmOiBvcmlnaW5SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTl9fSApXG4gICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0ZpbHRlciByYW5nZScsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2M319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGxhYmVsOiAnRGVmYXVsdCcsIG9uQ2xpY2s6ICgpID0+IHNldFJlZ2lvbignRGVmYXVsdCcpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY0fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ0VVJywgb25DbGljazogKCkgPT4gc2V0UmVnaW9uKCdFVScpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY1fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ1VTJywgb25DbGljazogKCkgPT4gc2V0UmVnaW9uKCdVUycpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzY2fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBsYWJlbDogJ0F1c3RyYWxpYScsIG9uQ2xpY2s6ICgpID0+IHNldFJlZ2lvbignQVUnKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2N319IClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNzN9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChab25lLCB7XG4gICAgICAgICAgICAgICAgICAuLi5nZXRSb290UHJvcHMoKSxcbiAgICAgICAgICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgdXBsb2FkQ29tcGxldGU6IHVwbG9hZENvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgYmFja2VuZFByb2Nlc3Npbmc6IGJhY2tlbmRQcm9jZXNzaW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzc0fX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IC4uLmdldElucHV0UHJvcHMoKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4MX19IClcbiAgICAgICAgICAgICAgICAgICwgaXNEcmFnQWN0aXZlID8gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzgzfX0sIFwiY2xvdWRfdXBsb2FkXCIpXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg1fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIHJlbmRlckljb24oKVxuICAgICAgICAgICAgICAgICAgICAgICwgcmVuZGVyVXNlck1lc3NhZ2UoKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IGFwaVZpZXcgPT09ICdzb3VyY2VzL3phcGllcicgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFphcGllckNvbnRhaW5lciwgeyB0eXBlOiBcInNvdXJjZVwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzk0fX0gKVxuICAgICAgICAgICkgOiBhcGlWaWV3ID09PSAnZGVzdGluYXRpb25zL3dlYmhvb2tzJyA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXBkYXRlV2ViaG9vaywgeyBvcmdJZDogb3JnSWQsIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5Nn19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9hcGknID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBUElUYXNrQ29tcGxldGVkLCB7IG9yZ0lkOiBvcmdJZCwgcXVldWVJZDogcXVldWVJZCwgYXBpS2V5OiBhcGlLZXksIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5OH19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy9jc3YnID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZENTViwgeyBvcmdJZDogb3JnSWQsIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwMH19IClcbiAgICAgICAgICApIDogYXBpVmlldyA9PT0gJ2Rlc3RpbmF0aW9ucy96YXBpZXInID8gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChaYXBpZXJDb250YWluZXIsIHsgdHlwZTogXCJkZXN0aW5hdGlvblwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDAyfX0gKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMScsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDA0fX0sIFwiY29ubmVjdGlvbiBub3QgZm91bmRcIiAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbm5lY3Rpb25zKVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvRG93bmxvYWRDU1YudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0FjdGlvbkJ1dHRvbidcbmltcG9ydCB7SW5zdHJ1Y3Rpb25zfSBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5pbXBvcnQge2NzdkRvd25sb2FkU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9EYXRlUGlja2VyJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0NoZWNrYm94J1xuaW1wb3J0IHt0b0lzb1N0cmluZ30gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuaW1wb3J0IHthZGRGYWlsdXJlTm90aWZpY2F0aW9ufSBmcm9tICdjbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcblxuXG5cblxuXG5cblxuY29uc3QgVGV4dCA9IHN0eWxlZChJbnN0cnVjdGlvbnMpKHtcbiAgd2lkdGg6IDMwMCxcbiAgY29sb3I6ICdyZ2IoMCwgMCwgMCwgMC41KSdcbn0pXG5cbmNvbnN0IERvd25sb2FkQnV0dG9uID0gc3R5bGVkKEFjdGlvbkJ1dHRvbikoe1xuICBtYXJnaW5Ub3A6IDE1LFxuICB3aWR0aDogOTYsXG4gIGhlaWdodDogMzJcbn0pXG5cbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQoRm9ybSkoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgcGFkZGluZzogMjUsXG4gIHdpZHRoOiAnY2FsYygxMDB2dyAvIDIpJ1xufSlcblxuY29uc3QgQ29udGVudEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1hcmdpbkJvdHRvbTogMTUsXG4gIHdpZHRoOiAzMDBcbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgYXV0bycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBDaGVja0ZpZWxkV3JhcHBlciA9IHN0eWxlZChGaWVsZFdyYXBwZXIpKHtcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2F1dG8gYXV0bycsXG4gIG1hcmdpblRvcDogMTBcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgY29sb3I6ICdyZ2IoMCwgMCwgMCwgMC41KScsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgcGFkZGluZ1RvcDogJzEwcHgnXG59KVxuXG5jb25zdCBEb3dubG9hZENTViA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b3JnSWQsIHF1ZXVlLCBkaXNwYXRjaH0gPSBwcm9wc1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkQ1NWID0gdXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGNvbnN0IHtpZCwgbmFtZX0gPSBxdWV1ZVxuICAgIGNvbnN0IHtzdGFydERhdGUsIGVuZERhdGUsIGNvcnJlY3R9ID0gdmFsdWVzXG4gICAgaWYgKGlkKSB7XG4gICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihcbiAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy90YXNrcy9jb21wbGV0ZWQtdGFza3MtY3N2YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dC9jc3YnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcXVldWVfaWQ6IGlkLFxuICAgICAgICAgICAgLi4uKGNvcnJlY3QgJiYge2NvcnJlY3R9KSxcbiAgICAgICAgICAgIC4uLihzdGFydERhdGUgJiYge3N0YXJ0X2RhdGU6IHRvSXNvU3RyaW5nKHN0YXJ0RGF0ZSl9KSxcbiAgICAgICAgICAgIC4uLihlbmREYXRlICYmIHtlbmRfZGF0ZTogdG9Jc29TdHJpbmcoZW5kRGF0ZSl9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtkYXRhXSkpXG4gICAgICAgIGNvbnN0IGNzdkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgY3N2TGluay5ocmVmID0gdXJsXG4gICAgICAgIGNzdkxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGAke25hbWV9LWNvbXBsZXRlZC10YXNrcy5jc3ZgKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzdkxpbmspXG4gICAgICAgIGNzdkxpbmsuY2xpY2soKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignTm8gdGFza3MgdG8gZXhwb3J0JykpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgIHN0YXJ0RGF0ZTogbnVsbCxcbiAgICBlbmREYXRlOiBudWxsLFxuICAgIGNvcnJlY3Q6IGZhbHNlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgICAgb25TdWJtaXQ6IGhhbmRsZURvd25sb2FkQ1NWLFxuICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgdmFsaWRhdGVPbk1vdW50OiB0cnVlLFxuICAgICAgdmFsaWRhdGlvblNjaGVtYTogY3N2RG93bmxvYWRTY2hlbWEsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDd9fVxuICAgIFxuICAgICAgLCAoe3ZhbHVlcywgZXJyb3JzLCBpc1ZhbGlkLCBpc1N1Ym1pdHRpbmd9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJFeHBvcnQgYWxsIHRhc2tzIGluIHRoaXMgcXVldWUgYXMgQ1NWLlwiICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjB9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjF9fSwgXCJTdGFydCBEYXRlXCIgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGlja2VyLCB7IGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uc3RhcnREYXRlXSksIG5hbWU6IGBzdGFydERhdGVgLCB2YWx1ZTogdmFsdWVzLnN0YXJ0RGF0ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19IClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjV9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyN319LCBcIkVuZCBEYXRlXCIgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlUGlja2VyLCB7IGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5lbmREYXRlXSksIG5hbWU6IGBlbmREYXRlYCwgdmFsdWU6IHZhbHVlcy5lbmREYXRlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI4fX0gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja0ZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzJ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBcImNvcnJlY3RcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzM319XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY29ycmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzNX19XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IHN0eWxlOiB7d2lkdGg6IDMwMCwgcGFkZGluZzogMCwgbGluZUhlaWdodDogJzIwcHgnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0NH19LCBcIk9ubHkgaW5jbHVkZSBhcHByb3ZlZCB0YXNrcyBmcm9tIEF1ZGl0c1wiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZEJ1dHRvbiwgeyBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFpc1ZhbGlkLCB0eXBlOiBcInN1Ym1pdFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ5fX0sIFwiRXhwb3J0XCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoRG93bmxvYWRDU1YpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBJbnN0cnVjdGlvbnMgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNSxcbiAgbGluZUhlaWdodDogMS40LFxuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgJz4gcCc6IHtcbiAgICBwYWRkaW5nVG9wOiAxMFxuICB9LFxuICAnPiBwID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25zXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogMjUsXG4gICAgJz4gcHJlJzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4XG4gICAgfVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRDb250YWluZXIiLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9VcGRhdGVXZWJob29rLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5cbmltcG9ydCB7SW5zdHJ1Y3Rpb25zfSBmcm9tICcuL0FQSVRhc2tVcGxvYWQnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHBhZGRpbmdUb3A6IDk2XG59KVxuXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgd2lkdGg6IDcwMFxufSlcblxuY29uc3QgVGV4dCA9IHN0eWxlZChJbnN0cnVjdGlvbnMpKHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufSlcblxuY29uc3QgRG93bmxvYWRCdXR0b24gPSBzdHlsZWQoQWN0aW9uQnV0dG9uKSh7XG4gIHdpZHRoOiA5NixcbiAgaGVpZ2h0OiAzMixcbiAgbWFyZ2luTGVmdDogOFxufSlcblxuY29uc3QgVXBkYXRlV2ViaG9vayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b3JnSWQsIHF1ZXVlfSA9IHByb3BzXG4gIGNvbnN0IFtuZXdXZWJob29rLCBzZXROZXdXZWJob29rXSA9IHVzZVN0YXRlKFxuICAgIHF1ZXVlLndlYmhvb2sgIT09IHVuZGVmaW5lZCAmJiBxdWV1ZS53ZWJob29rLnRhcmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHF1ZXVlLndlYmhvb2sudGFyZ2V0XG4gICAgICA6ICcnXG4gIClcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcblxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TmV3V2ViaG9vayhlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgZGF0YToge3RhcmdldDogbmV3V2ViaG9va31cbiAgICB9IFxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWUuaWR9L3dlYmhvb2tgLFxuICAgICAgcmVxQm9keVxuICAgIClcblxuICAgIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIHByb3BzLmFkZEZhaWx1cmVOb3RpZmljYXRpb24oZS5tZXNzYWdlKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignV2ViaG9vayBVUkwgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgxfX0sIFwiVXBkYXRlIHRoaXMgcXVldWUncyB3ZWJob29rIFVSTFwiICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHsgb25DaGFuZ2U6IG9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogJ05ldyBXZWJob29rIFVSTCcsIHZhbHVlOiBuZXdXZWJob29rLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODN9fSApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3dubG9hZEJ1dHRvbiwge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpXG4gICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg0fX1cbiAgICAgICAgLCBcIlN1Ym1pdFwiXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uOiAoYXJnKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGFyZykpLFxuICAgIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYXJnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXBkYXRlV2ViaG9vaylcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1phcGllckNvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zJ1xuaW1wb3J0IFN0eWxlZENvbnRhaW5lciBmcm9tICcuL1N0eWxlZENvbnRhaW5lcidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBERVNUSU5BVElPTl9URU1QTEFURVMgPSAnNDE1MDM1LDQxNTE2OCw0MTUyMDgsNDE1MjY0LDQxNTI2Nyw0MTUzMDMsNDE1Mjc4J1xuY29uc3QgU09VUkNFX1RFTVBMQVRFUyA9ICc0MTQ5MjcsNDE0OTgwLDQxNTAzMCw0MTUwNDIsNDE1MTkyLDQxNTI1MCw0MTUyOTMsNDE1Mjc4J1xuXG5jb25zdCBTdHlsZWRaYXBpZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAuemFwaWVyLXRlbXBsYXRlcy13aWRnZXQgPiAuemFwLXdpZGdldCA+IC56YXAtcm93ID4gLnphcC1pbm5lci1jb250YWluZXIge1xuICAgICYgPiAuemFwLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgY29sb3I6ICR7UEFMRVRURS5URVhUX0RBUktfR1JBWX07XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgICYgPiAuemFwLWN0YSA+IC56YXAtYnV0dG9uLW91dGxpbmUge1xuICAgICAgY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4O1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke1BBTEVUVEUuQkFDS0dST1VORF9IT1ZFUl9MSUdIVH07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS307XG4gICAgICAgIGNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5cblxuXG5cbmNvbnN0IFphcGllckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dHlwZX0gPSBwcm9wc1xuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbClcbiAgY29uc3QgaW5zdHJ1Y3Rpb24gPVxuICAgIHR5cGUgPT09ICdzb3VyY2UnXG4gICAgICA/ICdDb25uZWN0IDIsMDAwKyBhcHBzIGludG8geW91ciBxdWV1ZSB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBuZXcgdGFza3Mgd2l0aCBvdXIgWmFwaWVyIGludGVncmF0aW9uLidcbiAgICAgIDogJ0Nvbm5lY3QgeW91ciBxdWV1ZSBpbnRvIDIsMDAwKyBhcHBzIHRvIGF1dG9tYXRpY2FsbHkgc2VuZCBjb21wbGV0ZWQgdGFza3MgdG8geW91ciBmYXZvcml0ZSBhcHBzIHdpdGggb3VyIFphcGllciBpbnRlZ3JhdGlvbi4nXG5cbiAgY29uc3QgdGVtcGxhdGVzID0ge1xuICAgIHNvdXJjZTogU09VUkNFX1RFTVBMQVRFUyxcbiAgICBkZXN0aW5hdGlvbjogREVTVElOQVRJT05fVEVNUExBVEVTXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaHRtbF9pZDogJ3phcGllcl9lbWJlZGRhYmxlJyxcbiAgICAgIGluaGVyaXRGb250OiB0cnVlLFxuICAgICAgYnV0dG9uVHlwZTogJ291dGxpbmUnLFxuICAgICAgZ3VpZGVkX3phcHM6IHRlbXBsYXRlc1t0eXBlXVxuICAgIH1cbiAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vemFwaWVyLmNvbS9hcHBzL2VtYmVkL3dpZGdldC5qcz8ke3FzLnN0cmluZ2lmeShwYXJhbXMpfWBcbiAgICBjb250YWluZXJSZWYgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9LCBbdHlwZV0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3Mn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zdHJ1Y3Rpb25zLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDczfX1cbiAgICAgICAgLCBpbnN0cnVjdGlvblxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vemFwaWVyLmNvbS9hcHBzL2h1bWFuLWxhbWJkYXMvaW50ZWdyYXRpb25zXCIsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICByZWw6IFwibm9yZWZlcnJlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAgICwgXCJaYXBpZXJcIlxuXG4gICAgICAgICAgKSwgJyAnLCBcImxldHMgeW91IGNvbm5lY3QgSHVtYW4gTGFtYmRhcyB0byAyLDAwMCsgb3RoZXIgd2ViIHNlcnZpY2VzLiBBdXRvbWF0ZWQgY29ubmVjdGlvbnMgY2FsbGVkIFphcHMsIHNldCB1cCBpbiBtaW51dGVzIHdpdGggbm8gY29kaW5nLCBjYW4gYXV0b21hdGUgeW91ciBkYXktdG8tZGF5IHRhc2tzIGFuZCBidWlsZCBxdWV1ZXMgYmV0d2VlbiBhcHBzIHRoYXQgb3RoZXJ3aXNlIHdvdWxkbid0IGJlIHBvc3NpYmxlLlwiXG5cblxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRaYXBpZXJDb250YWluZXIsIHsgaWQ6IFwiemFwaWVyX2VtYmVkZGFibGVcIiwgcmVmOiBjb250YWluZXJSZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19IClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgWmFwaWVyQ29udGFpbmVyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29udGFpbmVycy9Db25uZWN0aW9uc0NvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9icm93c2VyJ1xuaW1wb3J0IHBhcGEgZnJvbSAncGFwYXBhcnNlJ1xuaW1wb3J0IENvbm5lY3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvQ29ubmVjdGlvbnMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbm5lY3Rpb25zQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1c2VyfSA9IHByb3BzXG4gIGNvbnN0IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogb3JnSWR9ID0gdXNlciB8fCB7fVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3Qge3F1ZXVlSWR9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgW3F1ZXVlLCBzZXRRdWV1ZV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtiYWNrZW5kUHJvY2Vzc2luZywgc2V0QmFja2VuZFByb2Nlc3NpbmddID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2FwaUtleSwgc2V0QVBJS2V5XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcmVnaW9uLCBzZXRSZWdpb25dID0gdXNlU3RhdGUoJ0RlZmF1bHQnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWV1ZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtkYXRhOiBxdWV1ZX0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHtkYXRhOiBhcGlLZXl9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvYXBpLXRva2VuYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgICBzZXRRdWV1ZShxdWV1ZSlcbiAgICAgICAgc2V0QVBJS2V5KGFwaUtleS50b2tlbilcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKCdVbmFibGUgdG8gZmV0Y2ggcXVldWUhJylcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVgKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFF1ZXVlKClcbiAgfSwgW3F1ZXVlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMClcbiAgICAgICAgc2V0Q29tcGxldGVkKDApXG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgY29udGVudFR5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKChlLmxvYWRlZCAqIDEwMCkgLyBlLnRvdGFsKVxuICAgICAgICAgICAgc2V0Q29tcGxldGVkKHByb2dyZXNzKVxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09PSAxMDApIHtcbiAgICAgICAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXBsb2FkUGF0aCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS91cGxvYWRgXG5cbiAgICAgICAgaWYgKHJlZ2lvbiA9PSAnVVMnIHx8IHJlZ2lvbiA9PSBcIkFVXCIpIHtcbiAgICAgICAgICB1cGxvYWRQYXRoID0gYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3VwbG9hZD9yZWdpb249JHtyZWdpb259YFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKFxuICAgICAgICAgIHVwbG9hZFBhdGgsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgIClcbiAgICAgICAgc2V0QmFja2VuZFByb2Nlc3NpbmcoMilcblxuICAgICAgICBpZiAocmVzLmVycm9ycykge1xuICAgICAgICAgIHJlcy5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIFNlbnRyeS53aXRoU2NvcGUoKHNjb3BlKSA9PiB7XG4gICAgICAgICAgICAgIHNjb3BlLnNldExldmVsKFNlbnRyeS5TZXZlcml0eS5FcnJvcilcbiAgICAgICAgICAgICAgU2VudHJ5LmNhcHR1cmVFeGNlcHRpb24oZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBsb2FkRmlsZSgpXG4gICAgfSxcbiAgICBbbmV0d29ya2VyLCBmaWxlLCByZWdpb25dXG4gIClcblxuICBjb25zdCBvbkRyb3BIYW5kbGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICAgIHJlamVjdGVkRmlsZXMuZm9yRWFjaCgoX2ZpbGUpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoJ1RoaXMgZmlsZXR5cGUgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQhJylcbiAgICAgIH0pXG5cbiAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHF1ZXVlSWQpIHtcbiAgICAgICAgICAgIHNldEZpbGUoZmlsZSlcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICAgICAgICAgIHBhcGEucGFyc2UoZmlsZSwge1xuICAgICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICAgIG5ld2xpbmU6ICdcXHJcXG4nLFxuICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdGaWxlIG5vdCBmb3JtYXR0ZWQgY29yZWN0bHknKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlRmlsZVVwbG9hZChkYXRhKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcignJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRFcnJvcignJylcblxuICAgICAgICByZWFkZXIub25hYm9ydCA9ICgpID0+IHNldEVycm9yKCdGaWxlIHVwbG9hZCBoYXMgYmVlbiBhYm9ydGVkIScpXG5cbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgZmlsZSEnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKVxuICAgICAgfSlcbiAgICB9LFxuICAgIFtuZXR3b3JrZXIsIGNvbXBsZXRlZCwgcXVldWVJZCwgcXVldWUsIHJlZ2lvbl1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0aW9ucywge1xuICAgICAgYXBpS2V5OiBhcGlLZXksXG4gICAgICBvbkRyb3BIYW5kbGVyOiBvbkRyb3BIYW5kbGVyLFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgICAgZmlsZTogZmlsZSxcbiAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICB1c2VyOiBwcm9wcy51c2VyLFxuICAgICAgcXVldWU6IHF1ZXVlLFxuICAgICAgYmFja2VuZFByb2Nlc3Npbmc6IGJhY2tlbmRQcm9jZXNzaW5nLFxuICAgICAgcmVnaW9uOiByZWdpb24sXG4gICAgICBzZXRSZWdpb246IHNldFJlZ2lvbiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0Nn19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShDb25uZWN0aW9uc0NvbnRhaW5lcilcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXRlcGlja2VyLW92ZXJyaWRlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==