(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CompanyContainer"],{

/***/ "./src/client/components/Spinner.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/Spinner.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Spinner.tsx";



const keyframesSpin = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1rnj20u0"
})({
  border: `2px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_GRAY}`,
  borderRadius: '50%',
  borderTop: `2px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN}`,
  width: 20,
  height: 20,
  animationName: keyframesSpin.toString(),
  animationDuration: '1s',
  animationIterationCount: 'infinite'
});

const Spinner = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

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

/***/ "./src/universal/components/InputField.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/InputField.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var universal_components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/StyledError */ "./src/universal/components/StyledError.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/InputField.tsx";





const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "e1jceiyv0"
})(({
  error,
  disabled,
  readOnly
}) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].SANS_SERIF,
  fontWeight: 400,
  cursor: disabled || readOnly ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    borderColor: error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  },
  ':hover': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_HOVER
  },
  ':active, :focus': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv1"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv2"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv3"
})({
  fontSize: 12,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
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
    hideErrorMessage,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    pattern,
    placeholder,
    value,
    label,
    style,
    spellCheck,
    readOnly,
    containerStyles,
    type
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    style: _objectSpread({}, containerStyles),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "Optional")), error && !hideErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    disabled: Boolean(disabled),
    name: name,
    pattern: pattern,
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    onKeyDown: onKeyDown,
    ref: ref,
    type: type || 'text',
    value: value,
    error: Boolean(error) && Boolean(value !== ''),
    spellCheck: spellCheck,
    style: style,
    readOnly: readOnly,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/universal/components/PrimaryButton.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/PrimaryButton.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const PrimaryButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e1jbkvpx0"
})(props => {
  const {
    hideFocus
  } = props; //const isDisabled = disabled || waiting

  return _objectSpread({
    width: 'fit-content',
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
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
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  }, !hideFocus && {
    ':focus, :active': {
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/universal/components/StyledError.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/StyledError.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");



const StyledError = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1e67x3d0"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].ERROR_MAIN,
  width: '100%',
  textAlign: 'left',
  fontSize: '12px',
  lineHeight: '24px'
});

/* harmony default export */ __webpack_exports__["default"] = (StyledError);

/***/ }),

/***/ "./src/universal/modules/settings/components/ButtonFieldLine.tsx":
/*!***********************************************************************!*\
  !*** ./src/universal/modules/settings/components/ButtonFieldLine.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const ButtonFieldLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eppwgta0"
})({
  name: "l256j9",
  styles: "display:flex;flex-direction:row-reverse;"
});

/* harmony default export */ __webpack_exports__["default"] = (ButtonFieldLine);

/***/ }),

/***/ "./src/universal/modules/settings/components/Company.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/settings/components/Company.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageWrapper */ "./src/universal/modules/settings/components/PageWrapper.tsx");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Title */ "./src/universal/modules/settings/components/Title.tsx");
/* harmony import */ var _FieldLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FieldLine */ "./src/universal/modules/settings/components/FieldLine.tsx");
/* harmony import */ var _CopyFieldLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CopyFieldLine */ "./src/universal/modules/settings/components/CopyFieldLine.tsx");
/* harmony import */ var _ButtonFieldLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonFieldLine */ "./src/universal/modules/settings/components/ButtonFieldLine.tsx");
/* harmony import */ var universal_components_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/IconButton */ "./src/universal/components/IconButton.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/components/Company.tsx";















const Company = props => {
  const {
    handleSubmit,
    saved,
    organization,
    isLoading
  } = props;
  const {
    name
  } = organization;
  const orgId = props.orgId;
  const [copied, setCopied] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleKeyCopy = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setInterval(() => {
      setCopied(false);
    }, 1000);
    setCopied(true);
  }, [copied, orgId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      name
    },
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FieldLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Organization Name",
    placeholder: "Organization",
    type: "text",
    name: "name",
    value: values.name,
    error: touched.name && errors.name,
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CopyFieldLine__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: e => e.preventDefault(),
    label: "Organization ID",
    placeholder: "OrgId",
    type: "text",
    name: "orgId",
    value: orgId,
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], {
    text: orgId || '',
    onCopy: () => handleKeyCopy(),
    style: {
      position: 'relative',
      top: 15,
      right: 30
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "button",
    onClick: () => null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      fontSize: 15,
      color: copied ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_13__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_13__["PALETTE"].TEXT_DARK_GRAY
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "content_copy")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonFieldLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    disabled: !isValid || isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, isSubmitting || isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }) : saved)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Company);

/***/ }),

/***/ "./src/universal/modules/settings/components/CopyFieldLine.tsx":
/*!*********************************************************************!*\
  !*** ./src/universal/modules/settings/components/CopyFieldLine.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const CopyFieldLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15ulyfu0"
})({
  name: "17afgix",
  styles: "display:grid;grid-template-columns:1fr 0px;align-items:center;width:100%;position:relative;margin-bottom:15px;"
});

/* harmony default export */ __webpack_exports__["default"] = (CopyFieldLine);

/***/ }),

/***/ "./src/universal/modules/settings/components/FieldLine.tsx":
/*!*****************************************************************!*\
  !*** ./src/universal/modules/settings/components/FieldLine.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const FieldLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14zl4v0"
})({
  name: "10beoar",
  styles: "display:flex;flex-direction:column;width:100%;margin-bottom:15px;"
});

/* harmony default export */ __webpack_exports__["default"] = (FieldLine);

/***/ }),

/***/ "./src/universal/modules/settings/components/PageWrapper.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/modules/settings/components/PageWrapper.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const PageWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yt5stn0"
})({
  name: "2oq6pe",
  styles: "display:flex;max-width:600px;width:100%;height:100%;flex-direction:column;background-color:#fff;"
});

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/universal/modules/settings/components/Title.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/modules/settings/components/Title.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "el4y3bt0"
})({
  name: "9vcn3f",
  styles: "font-weight:600;font-size:24px;line-height:32px;padding:100px 0 30px 0;"
});

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/universal/modules/settings/containers/CompanyContainer.tsx":
/*!************************************************************************!*\
  !*** ./src/universal/modules/settings/containers/CompanyContainer.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Company */ "./src/universal/modules/settings/components/Company.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/isEmptyArray */ "./src/universal/utils/isEmptyArray.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/CompanyContainer.tsx";

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






const CompanyContainer = ({
  user
}) => {
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [organization, setOrganization] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [saved, setSaved] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Save');
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const orgId = user.current_organization_id;
  const getOrganization = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (orgId) {
      const {
        data,
        errors
      } = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(`/orgs/${orgId}`, {
        method: 'GET'
      })]);

      if (Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__["default"])(errors)) {
        setOrganization(data);
      } else {
        console.error('Error fetching organization', JSON.stringify(errors));
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getOrganization();
  }, [orgId]);
  const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values, actions) => {
    setIsLoading(true);
    const {
      errors,
      data
    } = await _optionalChain([networker, 'optionalAccess', _3 => _3.httpHandler, 'call', _4 => _4(`/orgs/${orgId}`, {
      method: 'PATCH',
      data: values
    })]);

    if (!Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__["default"])(errors)) {
      console.error('Error updating organization name', JSON.stringify(errors));
    } else {
      setOrganization(data);
    }

    actions.setSubmitting(false);
    actions.resetForm();
    setTimeout(() => {
      setSaved('Saved!');
      setIsLoading(false);
    }, 1000);
  }, [orgId]);
  return organization && organization.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Company__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading,
    organization: organization,
    orgId: orgId,
    handleSubmit: handleSubmit,
    saved: saved,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (CompanyContainer);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1N0eWxlZEVycm9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9CdXR0b25GaWVsZExpbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0NvbXBhbnkudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0NvcHlGaWVsZExpbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0ZpZWxkTGluZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL1RpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29udGFpbmVycy9Db21wYW55Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2lzRW1wdHlBcnJheS50cyJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJrZXlmcmFtZXNTcGluIiwia2V5ZnJhbWVzIiwiTG9hZGVyIiwiYm9yZGVyIiwiUEFMRVRURSIsIkJPUkRFUl9HUkFZIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wIiwiUFJJTUFSWV9NQUlOIiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRpb25OYW1lIiwidG9TdHJpbmciLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiU3Bpbm5lciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiQ29udGFpbmVyIiwiUGxhaW5CdXR0b24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJjb2xvciIsIkljb25CdXR0b24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwidHlwZSIsImNoaWxkcmVuIiwic3R5bGUiLCJJbnB1dCIsImVycm9yIiwiZGlzYWJsZWQiLCJyZWFkT25seSIsImFwcGVhcmFuY2UiLCJvdXRsaW5lIiwiRVJST1JfTUFJTiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJib3hTaXppbmciLCJURVhUX01BSU4iLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJvcmRlckNvbG9yIiwiQk9SREVSX0hPVkVSIiwiTGFiZWwiLCJTdHlsZWRMYWJlbCIsIkxhYmVsSGVscGVyIiwiVEVYVF9HUkFZIiwibWFyZ2luTGVmdCIsIklucHV0RmllbGQiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJpc09wdGlvbmFsIiwiaXNSZXF1aXJlZCIsIm5hbWUiLCJoaWRlRXJyb3JNZXNzYWdlIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicGF0dGVybiIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJsYWJlbCIsInNwZWxsQ2hlY2siLCJjb250YWluZXJTdHlsZXMiLCJTdHlsZWRFcnJvciIsIkJvb2xlYW4iLCJQcmltYXJ5QnV0dG9uIiwiaGlkZUZvY3VzIiwiYm94U2hhZG93IiwiUFJJTUFSWV9NQUlOX0RBUksiLCJ0ZXh0QWxpZ24iLCJCdXR0b25GaWVsZExpbmUiLCJDb21wYW55IiwiaGFuZGxlU3VibWl0Iiwic2F2ZWQiLCJvcmdhbml6YXRpb24iLCJpc0xvYWRpbmciLCJvcmdJZCIsImNvcGllZCIsInNldENvcGllZCIsInVzZVN0YXRlIiwiaGFuZGxlS2V5Q29weSIsInVzZUNhbGxiYWNrIiwic2V0SW50ZXJ2YWwiLCJQYWdlV3JhcHBlciIsIkZvcm1payIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInZhbGlkYXRlT25DaGFuZ2UiLCJ2YWxpZGF0ZU9uQmx1ciIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwidmFsdWVzIiwiZXJyb3JzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsIkZvcm0iLCJUaXRsZSIsIkZpZWxkTGluZSIsIkNvcHlGaWVsZExpbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJDb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0Iiwib25Db3B5IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIkljb24iLCJQUklNQVJZX0dSRUVOIiwiVEVYVF9EQVJLX0dSQVkiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQ29tcGFueUNvbnRhaW5lciIsInVzZXIiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJzZXRPcmdhbml6YXRpb24iLCJzZXRTYXZlZCIsInNldElzTG9hZGluZyIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwiZ2V0T3JnYW5pemF0aW9uIiwiZGF0YSIsIl8iLCJodHRwSGFuZGxlciIsIl8yIiwibWV0aG9kIiwiaXNFbXB0eUFycmF5IiwiY29uc29sZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VFZmZlY3QiLCJhY3Rpb25zIiwiXzMiLCJfNCIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJzZXRUaW1lb3V0IiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHFFQUFyQjtBQUEyRjtBQUMzRjtBQUVBO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyx1REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLE1BQU1DLE1BQU0sR0FBRztBQUFBO0FBQUEsR0FBVztBQUN4QkMsUUFBTSxFQUFHLGFBQVlDLHNEQUFPLENBQUNDLFdBQVksRUFEakI7QUFFeEJDLGNBQVksRUFBRSxLQUZVO0FBR3hCQyxXQUFTLEVBQUcsYUFBWUgsc0RBQU8sQ0FBQ0ksWUFBYSxFQUhyQjtBQUl4QkMsT0FBSyxFQUFFLEVBSmlCO0FBS3hCQyxRQUFNLEVBQUUsRUFMZ0I7QUFNeEJDLGVBQWEsRUFBRVgsYUFBYSxDQUFDWSxRQUFkLEVBTlM7QUFPeEJDLG1CQUFpQixFQUFFLElBUEs7QUFReEJDLHlCQUF1QixFQUFFO0FBUkQsQ0FBWCxDQUFmOztBQVdBLE1BQU1DLE9BQU8sR0FBRyxtQkFBTUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmYsTUFBcEIsRUFBNEI7QUFBQ2dCLFFBQU0sRUFBRSxTQUFUO0FBQWVDLFVBQVEsRUFBRTtBQUFDQyxZQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsY0FBVSxFQUFFO0FBQXJDO0FBQXpCLENBQTVCLENBQXRCOztBQUVlTixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLE1BQU1oQixZQUFZLEdBQUcsMkVBQXJCO0FBQWlHO0FBRWpHO0FBQ0E7O0FBU0EsTUFBTXVCLFNBQVMsR0FBRyxrRkFB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ZmEyNmYwMjZkZjJmNDEwNmExMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9TcGlubmVyLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7a2V5ZnJhbWVzfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBrZXlmcmFtZXNTcGluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2KHtcbiAgYm9yZGVyOiBgMnB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBib3JkZXJUb3A6IGAycHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn1gLFxuICB3aWR0aDogMjAsXG4gIGhlaWdodDogMjAsXG4gIGFuaW1hdGlvbk5hbWU6IGtleWZyYW1lc1NwaW4udG9TdHJpbmcoKSxcbiAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnXG59KVxuXG5jb25zdCBTcGlubmVyID0gKCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjZ9fSApXG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWYsfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGUsIGNoaWxkcmVuLCBzdHlsZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCB0eXBlOiB0eXBlLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319XG4gICAgICAsIGNoaWxkcmVuXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IFN0eWxlZEVycm9yIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWQsIHJlYWRPbmx5fSkgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIG1hcmdpbjogMCxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjdXJzb3I6IGRpc2FibGVkIHx8IHJlYWRPbmx5ID8gJ25vdC1hbGxvd2VkJyA6ICdpbnB1dCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgZm9udFNpemU6IDE1LFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6IDMyLFxuICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9LFxuICAnOmhvdmVyJzoge1xuICAgIGJvcmRlckNvbG9yOiAhcmVhZE9ubHkgJiYgUEFMRVRURS5CT1JERVJfSE9WRVJcbiAgfSxcbiAgJzphY3RpdmUsIDpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogIXJlYWRPbmx5ICYmIFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5jb25zdCBMYWJlbEhlbHBlciA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTIsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5MZWZ0OiA2XG59KVxuXG5jb25zdCBJbnB1dEZpZWxkID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZCxcbiAgICBlcnJvcixcbiAgICBpc09wdGlvbmFsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbmFtZSxcbiAgICBoaWRlRXJyb3JNZXNzYWdlLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uS2V5RG93bixcbiAgICBwYXR0ZXJuLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHN0eWxlLFxuICAgIHNwZWxsQ2hlY2ssXG4gICAgcmVhZE9ubHksXG4gICAgY29udGFpbmVyU3R5bGVzLFxuICAgIHR5cGVcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiB7Li4uY29udGFpbmVyU3R5bGVzfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExM319XG4gICAgICAsIGxhYmVsICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTV9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTZ9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE3fX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGVycm9yICYmICFoaWRlRXJyb3JNZXNzYWdlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRXJyb3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIxfX0sIGVycm9yKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgdHlwZTogdHlwZSB8fCAndGV4dCcsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4oZXJyb3IpICYmIEJvb2xlYW4odmFsdWUgIT09ICcnKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZFxuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUHJpbWFyeUJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoaWRlRm9jdXN9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBib3JkZXI6IGAxcHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9LFxuICAgIC4uLighaGlkZUZvY3VzICYmIHtcbiAgICAgICc6Zm9jdXMsIDphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUJ1dHRvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTdHlsZWRFcnJvciA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzI0cHgnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRFcnJvclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEJ1dHRvbkZpZWxkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkZpZWxkTGluZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvQ29tcGFueS50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lcidcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuL1BhZ2VXcmFwcGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnXG5pbXBvcnQgRmllbGRMaW5lIGZyb20gJy4vRmllbGRMaW5lJ1xuaW1wb3J0IENvcHlGaWVsZExpbmUgZnJvbSAnLi9Db3B5RmllbGRMaW5lJ1xuaW1wb3J0IEJ1dHRvbkZpZWxkTGluZSBmcm9tICcuL0J1dHRvbkZpZWxkTGluZSdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24nXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDb21wYW55ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHNhdmVkLCBvcmdhbml6YXRpb24sIGlzTG9hZGluZ30gPSBwcm9wc1xuICBjb25zdCB7bmFtZX0gPSBvcmdhbml6YXRpb25cbiAgY29uc3Qgb3JnSWQgPSBwcm9wcy5vcmdJZFxuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlS2V5Q29weSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDb3BpZWQoZmFsc2UpXG4gICAgfSwgMTAwMClcbiAgICBzZXRDb3BpZWQodHJ1ZSlcbiAgfSwgW2NvcGllZCwgb3JnSWRdKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtuYW1lfSxcbiAgICAgICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5fX1cbiAgICAgIFxuICAgICAgICAsICh7dG91Y2hlZCwgaXNTdWJtaXR0aW5nLCBpc1ZhbGlkLCB2YWx1ZXMsIGVycm9ycywgaGFuZGxlQmx1ciwgaGFuZGxlQ2hhbmdlfSkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0N319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDh9fSwgXCJDb21wYW55XCIpXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRMaW5lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJPcmdhbml6YXRpb24gTmFtZVwiICxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNTdWJtaXR0aW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29weUZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiT3JnYW5pemF0aW9uIElEXCIgLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk9yZ0lkXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJvcmdJZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcmdJZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYzfX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29weVRvQ2xpcGJvYXJkLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogb3JnSWQgfHwgJycsXG4gICAgICAgICAgICAgICAgb25Db3B5OiAoKSA9PiBoYW5kbGVLZXlDb3B5KCksXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAxNSwgcmlnaHQ6IDMwfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gbnVsbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc3fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb3BpZWQgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU4gOiBQQUxFVFRFLlRFWFRfREFSS19HUkFZXG4gICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OH19XG4gICAgICAgICAgICAgICAgICAsIFwiY29udGVudF9jb3B5XCJcblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQcmltYXJ5QnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiAhaXNWYWxpZCB8fCBpc1N1Ym1pdHRpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MH19XG4gICAgICAgICAgICAgICAgLCBpc1N1Ym1pdHRpbmcgfHwgaXNMb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkxfX0gKSA6IHNhdmVkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IENvcHlGaWVsZExpbmUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDBweCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB3aWR0aDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgbWFyZ2luQm90dG9tOiAxNVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ29weUZpZWxkTGluZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEZpZWxkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZExpbmVcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQYWdlV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIG1heFdpZHRoOiA2MDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VXcmFwcGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIHBhZGRpbmc6ICcxMDBweCAwIDMwcHggMCdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29udGFpbmVycy9Db21wYW55Q29udGFpbmVyLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb21wYW55IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGFueSdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcblxuaW1wb3J0IGlzRW1wdHlBcnJheSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5J1xuXG5cblxuXG5cbmNvbnN0IENvbXBhbnlDb250YWluZXIgPSAoe3VzZXJ9KSA9PiB7XG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IFtvcmdhbml6YXRpb24sIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NhdmVkLCBzZXRTYXZlZF0gPSB1c2VTdGF0ZSgnU2F2ZScpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG5cbiAgY29uc3QgZ2V0T3JnYW5pemF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChvcmdJZCkge1xuICAgICAgY29uc3Qge2RhdGEsIGVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uaHR0cEhhbmRsZXIsICdjYWxsJywgXzIgPT4gXzIoYC9vcmdzLyR7b3JnSWR9YCwge21ldGhvZDogJ0dFVCd9KV0pXG4gICAgICBpZiAoaXNFbXB0eUFycmF5KGVycm9ycykpIHtcbiAgICAgICAgc2V0T3JnYW5pemF0aW9uKGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBvcmdhbml6YXRpb24nLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRPcmdhbml6YXRpb24oKVxuICB9LCBbb3JnSWRdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgY29uc3Qge2Vycm9ycywgZGF0YX0gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy5odHRwSGFuZGxlciwgJ2NhbGwnLCBfNCA9PiBfNChgL29yZ3MvJHtvcmdJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgZGF0YTogdmFsdWVzXG4gICAgICB9KV0pXG4gICAgICBpZiAoIWlzRW1wdHlBcnJheShlcnJvcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIG9yZ2FuaXphdGlvbiBuYW1lJywgSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE9yZ2FuaXphdGlvbihkYXRhKVxuICAgICAgfVxuICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgYWN0aW9ucy5yZXNldEZvcm0oKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFNhdmVkKCdTYXZlZCEnKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICB9LCAxMDAwKVxuICAgIH0sXG4gICAgW29yZ0lkXVxuICApXG5cbiAgcmV0dXJuIG9yZ2FuaXphdGlvbiAmJiBvcmdhbml6YXRpb24uaWQgPyAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wYW55LCB7XG4gICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgIG9yZ2FuaXphdGlvbjogb3JnYW5pemF0aW9uLFxuICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgaGFuZGxlU3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgICBzYXZlZDogc2F2ZWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Nn19XG4gICAgKVxuICApIDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55Q29udGFpbmVyXG4iLCJjb25zdCBpc0VtcHR5QXJyYXkgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZS5zcGxpY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gIXZhbHVlLmxlbmd0aFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5QXJyYXlcbiJdLCJzb3VyY2VSb290IjoiIn0=