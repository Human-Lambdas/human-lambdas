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
        console.error('Error fetching organization');
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
      console.error('Error updating organization name');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1N0eWxlZEVycm9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9CdXR0b25GaWVsZExpbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0NvbXBhbnkudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0NvcHlGaWVsZExpbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0ZpZWxkTGluZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL1RpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29udGFpbmVycy9Db21wYW55Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2lzRW1wdHlBcnJheS50cyJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJrZXlmcmFtZXNTcGluIiwia2V5ZnJhbWVzIiwiTG9hZGVyIiwiYm9yZGVyIiwiUEFMRVRURSIsIkJPUkRFUl9HUkFZIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wIiwiUFJJTUFSWV9NQUlOIiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRpb25OYW1lIiwidG9TdHJpbmciLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiU3Bpbm5lciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiQ29udGFpbmVyIiwiUGxhaW5CdXR0b24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJjb2xvciIsIkljb25CdXR0b24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwidHlwZSIsImNoaWxkcmVuIiwic3R5bGUiLCJJbnB1dCIsImVycm9yIiwiZGlzYWJsZWQiLCJyZWFkT25seSIsImFwcGVhcmFuY2UiLCJvdXRsaW5lIiwiRVJST1JfTUFJTiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJib3hTaXppbmciLCJURVhUX01BSU4iLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImJvcmRlckNvbG9yIiwiQk9SREVSX0hPVkVSIiwiTGFiZWwiLCJTdHlsZWRMYWJlbCIsIkxhYmVsSGVscGVyIiwiVEVYVF9HUkFZIiwibWFyZ2luTGVmdCIsIklucHV0RmllbGQiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJpc09wdGlvbmFsIiwiaXNSZXF1aXJlZCIsIm5hbWUiLCJoaWRlRXJyb3JNZXNzYWdlIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicGF0dGVybiIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJsYWJlbCIsInNwZWxsQ2hlY2siLCJjb250YWluZXJTdHlsZXMiLCJTdHlsZWRFcnJvciIsIkJvb2xlYW4iLCJQcmltYXJ5QnV0dG9uIiwiaGlkZUZvY3VzIiwiYm94U2hhZG93IiwiUFJJTUFSWV9NQUlOX0RBUksiLCJ0ZXh0QWxpZ24iLCJCdXR0b25GaWVsZExpbmUiLCJDb21wYW55IiwiaGFuZGxlU3VibWl0Iiwic2F2ZWQiLCJvcmdhbml6YXRpb24iLCJpc0xvYWRpbmciLCJvcmdJZCIsImNvcGllZCIsInNldENvcGllZCIsInVzZVN0YXRlIiwiaGFuZGxlS2V5Q29weSIsInVzZUNhbGxiYWNrIiwic2V0SW50ZXJ2YWwiLCJQYWdlV3JhcHBlciIsIkZvcm1payIsImVuYWJsZVJlaW5pdGlhbGl6ZSIsInZhbGlkYXRlT25DaGFuZ2UiLCJ2YWxpZGF0ZU9uQmx1ciIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwidmFsdWVzIiwiZXJyb3JzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsIkZvcm0iLCJUaXRsZSIsIkZpZWxkTGluZSIsIkNvcHlGaWVsZExpbmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJDb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0Iiwib25Db3B5IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIkljb24iLCJQUklNQVJZX0dSRUVOIiwiVEVYVF9EQVJLX0dSQVkiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQ29tcGFueUNvbnRhaW5lciIsInVzZXIiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJzZXRPcmdhbml6YXRpb24iLCJzZXRTYXZlZCIsInNldElzTG9hZGluZyIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwiZ2V0T3JnYW5pemF0aW9uIiwiZGF0YSIsIl8iLCJodHRwSGFuZGxlciIsIl8yIiwibWV0aG9kIiwiaXNFbXB0eUFycmF5IiwiY29uc29sZSIsInVzZUVmZmVjdCIsImFjdGlvbnMiLCJfMyIsIl80Iiwic2V0U3VibWl0dGluZyIsInJlc2V0Rm9ybSIsInNldFRpbWVvdXQiLCJpZCIsIkFycmF5IiwiaXNBcnJheSIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcscUVBQXJCO0FBQTJGO0FBQzNGO0FBRUE7QUFFQSxNQUFNQyxhQUFhLEdBQUdDLHVEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7O0FBU0EsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQSxHQUFXO0FBQ3hCQyxRQUFNLEVBQUcsYUFBWUMsc0RBQU8sQ0FBQ0MsV0FBWSxFQURqQjtBQUV4QkMsY0FBWSxFQUFFLEtBRlU7QUFHeEJDLFdBQVMsRUFBRyxhQUFZSCxzREFBTyxDQUFDSSxZQUFhLEVBSHJCO0FBSXhCQyxPQUFLLEVBQUUsRUFKaUI7QUFLeEJDLFFBQU0sRUFBRSxFQUxnQjtBQU14QkMsZUFBYSxFQUFFWCxhQUFhLENBQUNZLFFBQWQsRUFOUztBQU94QkMsbUJBQWlCLEVBQUUsSUFQSztBQVF4QkMseUJBQXVCLEVBQUU7QUFSRCxDQUFYLENBQWY7O0FBV0EsTUFBTUMsT0FBTyxHQUFHLG1CQUFNQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZixNQUFwQixFQUE0QjtBQUFDZ0IsUUFBTSxFQUFFLFNBQVQ7QUFBZUMsVUFBUSxFQUFFO0FBQUNDLFlBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixjQUFVLEVBQUU7QUFBckM7QUFBekIsQ0FBNUIsQ0FBdEI7O0FBRWVOLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsTUFBTWhCLFlBQVksR0FBRywyRUFBckI7QUFBaUc7QUFFakc7QUFDQTs7QUFTQSxNQUFNdUIsU0FBUyxHQUFHLGtGQUFPQyxxRUFBUDtBQUFBO0FBQUEs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QUFELENBQVI7QUFDQUMsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQsR0FsQjZCLEVBbUI5QixDQUFDcEQsS0FBRCxDQW5COEIsQ0FBaEM7QUFzQkEsU0FBT0YsWUFBWSxJQUFJQSxZQUFZLENBQUN1RSxFQUE3QixnQkFDTG5KLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J3RSwyREFBcEIsRUFBNkI7QUFDM0JJLGFBQVMsRUFBRUEsU0FEZ0I7QUFFM0JELGdCQUFZLEVBQUVBLFlBRmE7QUFHM0JFLFNBQUssRUFBRUEsS0FIb0I7QUFJM0JKLGdCQUFZLEVBQUVBLFlBSmE7QUFLM0JDLFNBQUssRUFBRUEsS0FMb0I7QUFLYnpFLFVBQU0sRUFBRSxTQUxLO0FBS0NDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsZ0JBQVUsRUFBRTtBQUFyQztBQUxYLEdBQTdCLENBREssR0FRSCxJQVJKO0FBU0QsQ0FyREQ7O0FBdURldUgsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUEsTUFBTWMsWUFBWSxHQUFJN0UsS0FBRCxJQUFXO0FBQzlCLE1BQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUt3RCxTQUFoQyxFQUEyQyxPQUFPLElBQVA7O0FBQzNDLE1BQUkrQixLQUFLLENBQUNDLE9BQU4sQ0FBY3hGLEtBQWQsS0FBd0IsT0FBT0EsS0FBUCxLQUFpQixRQUF6QyxJQUFxRCxPQUFPQSxLQUFLLENBQUN5RixNQUFiLEtBQXdCLFVBQWpGLEVBQTZGO0FBQzNGLFdBQU8sQ0FBQ3pGLEtBQUssQ0FBQzBELE1BQWQ7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQU5EOztBQVFlbUIsMkVBQWYsRSIsImZpbGUiOiJDb21wYW55Q29udGFpbmVyX2E0NTE5ZmY0N2E4OWI4MjQyMTVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtrZXlmcmFtZXN9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IGtleWZyYW1lc1NwaW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gXG5cbmNvbnN0IExvYWRlciA9IHN0eWxlZC5kaXYoe1xuICBib3JkZXI6IGAycHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIGJvcmRlclRvcDogYDJweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIHdpZHRoOiAyMCxcbiAgaGVpZ2h0OiAyMCxcbiAgYW5pbWF0aW9uTmFtZToga2V5ZnJhbWVzU3Bpbi50b1N0cmluZygpLFxuICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZSdcbn0pXG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNn19IClcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24udHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBQbGFpbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcblxuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGJvcmRlclJhZGl1czogNTAsXG4gIHdpZHRoOiAyNSxcbiAgaGVpZ2h0OiAyNSxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAwLFxuICB0cmFuc2l0aW9uOiAnYWxsIDIwMG1zIGVhc2UtaW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KVxuXG5jb25zdCBJY29uQnV0dG9uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7b25DbGljaywgdHlwZSwgY2hpbGRyZW4sIHN0eWxlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHR5cGU6IHR5cGUsIHN0eWxlOiBzdHlsZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX1cbiAgICAgICwgY2hpbGRyZW5cbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWYsfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU3R5bGVkRXJyb3InXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dCgoe2Vycm9yLCBkaXNhYmxlZCwgcmVhZE9ubHl9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGN1cnNvcjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyAnbm90LWFsbG93ZWQnIDogJ2lucHV0JyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250U2l6ZTogMTUsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiBlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH0sXG4gICc6aG92ZXInOiB7XG4gICAgYm9yZGVyQ29sb3I6ICFyZWFkT25seSAmJiBQQUxFVFRFLkJPUkRFUl9IT1ZFUlxuICB9LFxuICAnOmFjdGl2ZSwgOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiAhcmVhZE9ubHkgJiYgUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSkpXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkxlZnQ6IDVcbn0pXG5cbmNvbnN0IExhYmVsSGVscGVyID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxMixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIG1hcmdpbkxlZnQ6IDZcbn0pXG5cbmNvbnN0IElucHV0RmllbGQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzLFxuICAgIGRpc2FibGVkLFxuICAgIGVycm9yLFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBuYW1lLFxuICAgIGhpZGVFcnJvck1lc3NhZ2UsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgb25LZXlEb3duLFxuICAgIHBhdHRlcm4sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdmFsdWUsXG4gICAgbGFiZWwsXG4gICAgc3R5bGUsXG4gICAgc3BlbGxDaGVjayxcbiAgICByZWFkT25seSxcbiAgICBjb250YWluZXJTdHlsZXMsXG4gICAgdHlwZVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHsuLi5jb250YWluZXJTdHlsZXN9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEzfX1cbiAgICAgICwgbGFiZWwgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNn19LCBsYWJlbClcbiAgICAgICAgICAsIGlzUmVxdWlyZWQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTd9fSwgXCJSZXF1aXJlZFwiKVxuICAgICAgICAgICwgaXNPcHRpb25hbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19LCBcIk9wdGlvbmFsXCIpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgZXJyb3IgJiYgIWhpZGVFcnJvck1lc3NhZ2UgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjF9fSwgZXJyb3IpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbihkaXNhYmxlZCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlIHx8ICd0ZXh0JyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlcnJvcjogQm9vbGVhbihlcnJvcikgJiYgQm9vbGVhbih2YWx1ZSAhPT0gJycpLFxuICAgICAgICBzcGVsbENoZWNrOiBzcGVsbENoZWNrLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19XG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkXG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuLi8uLi9jbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQcmltYXJ5QnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSgocHJvcHMpID0+IHtcbiAgY29uc3Qge2hpZGVGb2N1c30gPSBwcm9wc1xuICAvL2NvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCB3YWl0aW5nXG4gIHJldHVybiB7XG4gICAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgLi4uKCFoaWRlRm9jdXMgJiYge1xuICAgICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5QnV0dG9uXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLkVSUk9SX01BSU4sXG4gIHdpZHRoOiAnMTAwJScsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBsaW5lSGVpZ2h0OiAnMjRweCdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEVycm9yXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQnV0dG9uRmllbGRMaW5lID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uRmllbGRMaW5lXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9Db21wYW55LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1paywgRm9ybX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TcGlubmVyJ1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4vUGFnZVdyYXBwZXInXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSdcbmltcG9ydCBGaWVsZExpbmUgZnJvbSAnLi9GaWVsZExpbmUnXG5pbXBvcnQgQ29weUZpZWxkTGluZSBmcm9tICcuL0NvcHlGaWVsZExpbmUnXG5pbXBvcnQgQnV0dG9uRmllbGRMaW5lIGZyb20gJy4vQnV0dG9uRmllbGRMaW5lJ1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbkJ1dHRvbidcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbXBhbnkgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgc2F2ZWQsIG9yZ2FuaXphdGlvbiwgaXNMb2FkaW5nfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lfSA9IG9yZ2FuaXphdGlvblxuICBjb25zdCBvcmdJZCA9IHByb3BzLm9yZ0lkXG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVLZXlDb3B5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldENvcGllZChmYWxzZSlcbiAgICB9LCAxMDAwKVxuICAgIHNldENvcGllZCh0cnVlKVxuICB9LCBbY29waWVkLCBvcmdJZF0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWssIHtcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge25hbWV9LFxuICAgICAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgXG4gICAgICAgICwgKHt0b3VjaGVkLCBpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgZXJyb3JzLCBoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ3fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19LCBcIkNvbXBhbnlcIilcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZExpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9yZ2FuaXphdGlvbiBOYW1lXCIgLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb3B5RmllbGRMaW5lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSxcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJPcmdhbml6YXRpb24gSURcIiAsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiT3JnSWRcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm9yZ0lkXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9yZ0lkLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb3B5VG9DbGlwYm9hcmQsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBvcmdJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICBvbkNvcHk6ICgpID0+IGhhbmRsZUtleUNvcHkoKSxcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDE1LCByaWdodDogMzB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiBudWxsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzd9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvcGllZCA/IFBBTEVUVEUuUFJJTUFSWV9HUkVFTiA6IFBBTEVUVEUuVEVYVF9EQVJLX0dSQVlcbiAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc4fX1cbiAgICAgICAgICAgICAgICAgICwgXCJjb250ZW50X2NvcHlcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uRmllbGRMaW5lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6ICFpc1ZhbGlkIHx8IGlzU3VibWl0dGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkwfX1cbiAgICAgICAgICAgICAgICAsIGlzU3VibWl0dGluZyB8fCBpc0xvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTF9fSApIDogc2F2ZWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQ29weUZpZWxkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMHB4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBDb3B5RmllbGRMaW5lXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgRmllbGRMaW5lID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbkJvdHRvbTogMTVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkTGluZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgbWF4V2lkdGg6IDYwMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgcGFkZGluZzogJzEwMHB4IDAgMzBweCAwJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL0NvbXBhbnlDb250YWluZXIudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wYW55J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQgaXNFbXB0eUFycmF5IGZyb20gJ3VuaXZlcnNhbC91dGlscy9pc0VtcHR5QXJyYXknXG5cblxuXG5cblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9ICh7dXNlcn0pID0+IHtcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3QgW29yZ2FuaXphdGlvbiwgc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2F2ZWQsIHNldFNhdmVkXSA9IHVzZVN0YXRlKCdTYXZlJylcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvcmdJZCA9IHVzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWRcblxuICBjb25zdCBnZXRPcmdhbml6YXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKG9yZ0lkKSB7XG4gICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5odHRwSGFuZGxlciwgJ2NhbGwnLCBfMiA9PiBfMihgL29yZ3MvJHtvcmdJZH1gLCB7bWV0aG9kOiAnR0VUJ30pXSlcbiAgICAgIGlmIChpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgICBzZXRPcmdhbml6YXRpb24oZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9yZ2FuaXphdGlvbicpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE9yZ2FuaXphdGlvbigpXG4gIH0sIFtvcmdJZF0pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF80ID0+IF80KGAvb3Jncy8ke29yZ0lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiB2YWx1ZXNcbiAgICAgIH0pXSlcbiAgICAgIGlmICghaXNFbXB0eUFycmF5KGVycm9ycykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgb3JnYW5pemF0aW9uIG5hbWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0T3JnYW5pemF0aW9uKGRhdGEpXG4gICAgICB9XG4gICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2F2ZWQoJ1NhdmVkIScpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0sIDEwMDApXG4gICAgfSxcbiAgICBbb3JnSWRdXG4gIClcblxuICByZXR1cm4gb3JnYW5pemF0aW9uICYmIG9yZ2FuaXphdGlvbi5pZCA/IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBhbnksIHtcbiAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgb3JnYW5pemF0aW9uOiBvcmdhbml6YXRpb24sXG4gICAgICBvcmdJZDogb3JnSWQsXG4gICAgICBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICAgIHNhdmVkOiBzYXZlZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU2fX1cbiAgICApXG4gICkgOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlDb250YWluZXJcbiIsImNvbnN0IGlzRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAhdmFsdWUubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHlBcnJheVxuIl0sInNvdXJjZVJvb3QiOiIifQ==