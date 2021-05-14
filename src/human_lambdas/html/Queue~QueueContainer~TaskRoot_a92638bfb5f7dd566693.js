(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Queue~QueueContainer~TaskRoot"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvZGF0ZXBpY2tlci1vdmVycmlkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1N0eWxlZEVycm9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CYXNpY1RleHRBcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvRGF0ZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tDaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1RleHRFZGl0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvQm9keUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvY3NzL2RhdGVwaWNrZXItb3ZlcnJpZGUuY3NzPzg4NTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL3N0cmluZ1RvSGFzaC50cyJdLCJuYW1lcyI6WyJTdHlsZWRFcnJvciIsImNvbG9yIiwiUEFMRVRURSIsIkVSUk9SX01BSU4iLCJ3aWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbkxlZnQiLCJfanN4RmlsZU5hbWUiLCJTdHlsZWRUZXh0QXJlYSIsIlRleHRBcmVhIiwiZXJyb3IiLCJkaXNhYmxlZCIsInJlYWRPbmx5Iiwic2Nyb2xsYWJsZSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIkJPUkRFUl9NQUlOX0dSQVkiLCJURVhUX01BSU4iLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJvdXRsaW5lIiwicGFkZGluZyIsInJlc2l6ZSIsInRyYW5zaXRpb24iLCJib3JkZXJDb2xvciIsIlBSSU1BUllfTUFJTiIsIkxhYmVsIiwiZm9udFdlaWdodCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJCYXNpY1RleHRBcmVhIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiYXV0b0ZvY3VzIiwiaXNPcHRpb25hbCIsImlzUmVxdWlyZWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsIm1heExlbmd0aCIsImxhYmVsIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJzdHlsZSIsImNhY2hlTWVhc3VyZW1lbnRzIiwicG9zaXRpb25FcnJvckJlbG93IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIlN0cmluZyIsIkJvb2xlYW4iLCJkZWZhdWx0UHJvcHMiLCJzZWdtZW50VHJhY2siLCJldmVudCIsInByb3BlcnRpZXMiLCJhbmFseXRpY3MiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJ0cmFjayIsIkJPUkRFUl9IT1ZFUiIsImhpZGVFcnJvck1lc3NhZ2UiLCJTdHlsZWREYXRlUGlja2VyIiwiRGF0ZVBpY2tlciIsIkRhdGVJbnB1dCIsIklucHV0RmllbGQiLCJDdXN0b21EYXRlUGlja2VyIiwibWVtbyIsImlzVGFza01lbnUiLCJzZXRWYWx1ZSIsInVzZUZpZWxkIiwiY29udGFpbmVyU3R5bGUiLCJoYW5kbGVDaGFuZ2VSYXciLCJ2YWxpZENoYXJzIiwidGVzdCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsIkRhdGUiLCJoYW5kbGVDaGFuZ2UiLCJkYXRlIiwiQm9keUNvbnRhaW5lciIsImF1dG9Db21wbGV0ZSIsImN1c3RvbUlucHV0Iiwic2VsZWN0ZWQiLCJjYWxlbmRhckNsYXNzTmFtZSIsImRheUNsYXNzTmFtZSIsInNob3VsZENsb3NlT25TZWxlY3QiLCJvbkNoYW5nZVJhdyIsInBsYWNlaG9sZGVyVGV4dCIsImdldERpc3BsYXlGb3JtYXQiLCJkYXRlRm9ybWF0IiwiZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24iLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJ1c2VyU2VsZWN0IiwiQkFDS0dST1VORF9NQUlOIiwiY29udGVudCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJtaW5IZWlnaHQiLCJJbnB1dCIsIkNoZWNrYm94IiwiaWQiLCJjaGVja2VkIiwidHlwZSIsImh0bWxGb3IiLCJub1NoYWRvdyIsIlJhZGlvIiwiU3R5bGVkVGV4dEVkaXRvciIsIlJpY2hUZXh0RWRpdG9yIiwidG9vbGJhckNvbmZpZyIsIklOTElORV9TVFlMRV9CVVRUT05TIiwiY2xhc3NOYW1lIiwiQkxPQ0tfVFlQRV9EUk9QRE9XTiIsIkJMT0NLX1RZUEVfQlVUVE9OUyIsImVkaXRvclRleHQiLCJjcmVhdGVWYWx1ZUZyb21TdHJpbmciLCJUZXh0RWRpdG9yIiwiZm9ybWF0Iiwic2V0RmllbGRWYWx1ZSIsInJlbmRlclZhbHVlIiwiZWRpdG9yVmFsdWVGcm9tUHJvcHMiLCJlZGl0b3JWYWx1ZSIsInNldEVkaXRvclZhbHVlIiwidXNlU3RhdGUiLCJzZXRDb250ZW50RnJvbVN0cmluZyIsImhhbmRsZUVkaXRvckNoYW5nZSIsImRpZE1vdW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInRvb2xiYXJDbGFzc05hbWUiLCJlZGl0b3JDbGFzc05hbWUiLCJ0b1N0cmluZyIsInJvdyIsImZsb2F0IiwicGFkZGluZ1RvcCIsImZsZXhEaXJlY3Rpb24iLCJjaGlsZHJlbiIsImdldENvbG9yIiwiaWRlbnRpZmllciIsIkJhY2tncm91bmRDb2xvcnMiLCJsZW5ndGgiLCJjb2xvckZyb21TdHJpbmciLCJzdHJpbmciLCJNYXRoIiwiYWJzIiwic3RyaW5nVG9IYXNoIiwiY29sb3JCeUluZGV4IiwiaW5kZXgiLCJoYXNoIiwiaSIsImNociIsImNoYXJDb2RlQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLGlDQUFpQyxrQkFBa0IsZ0JBQWdCLDhCQUE4QixxQkFBcUIsR0FBRyx3RUFBd0UscUJBQXFCLDhCQUE4QixHQUFHLG9GQUFvRiw4QkFBOEIsR0FBRyxtQkFBbUIsNkJBQTZCLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLEdBQUcseUNBQXlDLDZCQUE2QixHQUFHO0FBQ3ZwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBLE1BQU1BLFdBQVcsR0FBRztBQUFBO0FBQUEsR0FBVztBQUM3QkMsT0FBSyxFQUFFQyxzREFBTyxDQUFDQyxVQURjO0FBRTdCQyxPQUFLLEVBQUUsTUFGc0I7QUFHN0JDLFdBQVMsRUFBRSxNQUhrQjtBQUk3QkMsVUFBUSxFQUFFLE1BSm1CO0FBSzdCQyxZQUFVLEVBQUUsTUFMaUI7QUFNN0JDLFlBQVUsRUFBRTtBQU5pQixDQUFYLENBQXBCOztBQVNlUiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLE1BQU1TLFlBQVksR0FBRyxzRUFBckIsQyxDQUE0Rjs7QUFDNUY7QUFDQTtBQUVBO0FBQ0E7O0FBeUJBLE1BQU1DLGNBQWMsR0FBRyxrRkFBT0MsK0RBQVA7QUFBQTtBQUFBLEdBQWlCLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxVQUFSO0FBQWtCQyxVQUFsQjtBQUE0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QUFMLENBQVNDLDZEQUFZLENBQUNILE1BQUQsQ0FBckIsQ0FBRCxDQUE1QztBQUVBLE1BQU1JLFlBQVksR0FBSUMsS0FBRCxJQUFXVixRQUFRLENBQUNVLEtBQUQsQ0FBeEMsQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQSxNQUFNRixZQUFZLEdBQUlILE1BQUQsSUFBWTtBQUMvQixNQUFJTSxJQUFJLEdBQUcsQ0FBWDtBQUFBLE1BQ0VDLENBREY7QUFBQSxNQUVFQyxHQUZGOztBQUdBLE9BQUtELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR1AsTUFBTSxDQUFDRixNQUF2QixFQUErQlMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQ0MsT0FBRyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0JGLENBQWxCLENBQU47QUFDQUQsUUFBSSxHQUFHLENBQUNBLElBQUksSUFBSSxDQUFULElBQWNBLElBQWQsR0FBcUJFLEdBQTVCO0FBQ0FGLFFBQUksSUFBSSxDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsSUFBUDtBQUNELENBVkQ7O0FBWWVILDJFQUFmLEUiLCJmaWxlIjoiUXVldWV+UXVldWVDb250YWluZXJ+VGFza1Jvb3RfYTkyNjM4YmZiNWY3ZGQ1NjY2OTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhsLWNhbGVuZGFyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM2NjQ4ZWU7XFxuICBvcGFjaXR5OiAwLjE1O1xcbiAgei1pbmRleDogMTA7ICovXFxuICBmb250LWZhbWlseTogJ0xhbWJkYXMnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY0OGVlO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZDpob3ZlciwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NmRmNDtcXG59XFxuXFxuLmhsLWRheTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24ge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuRVJST1JfTUFJTixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkRXJyb3JcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9UZXh0QXJlYS50c3hcIjsvLyBodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5cG9wcC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZVxuaW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAnY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZFRleHRBcmVhID0gc3R5bGVkKFRleHRBcmVhKSgoe2Vycm9yLCBkaXNhYmxlZCwgcmVhZE9ubHksIHNjcm9sbGFibGV9KSA9PiAoe1xuICBjdXJzb3I6IGRpc2FibGVkIHx8IHJlYWRPbmx5ID8gJ25vdC1hbGxvd2VkJyA6ICd0ZXh0JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZXJyb3IgPT09ICd0cnVlJyA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZvbnRTaXplOiAxNSxcbiAgb3ZlcmZsb3c6IHNjcm9sbGFibGUgPyAnYXV0bycgOiAnaGlkZGVuJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxuICByZXNpemU6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPT09ICd0cnVlJyA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5jb25zdCBMYWJlbEhlbHBlciA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTIsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5MZWZ0OiA2XG59KVxuXG5jb25zdCBCYXNpY1RleHRBcmVhID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0b0ZvY3VzLFxuICAgIGRpc2FibGVkLFxuICAgIGlzT3B0aW9uYWwsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtaW5Sb3dzLFxuICAgIG1heFJvd3MsXG4gICAgZXJyb3IsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGxhYmVsLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgY2FjaGVNZWFzdXJlbWVudHMsXG4gICAgcmVhZE9ubHksXG4gICAgcG9zaXRpb25FcnJvckJlbG93LFxuICAgIHNjcm9sbGFibGVcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIGxhYmVsICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5OH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk5fX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMH19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCAhcG9zaXRpb25FcnJvckJlbG93ICYmIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRXJyb3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA0fX0sIGVycm9yKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHRBcmVhLCB7XG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBtaW5Sb3dzOiBtaW5Sb3dzLFxuICAgICAgICBtYXhSb3dzOiBtYXhSb3dzLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvbkJsdXI6IG9uQmx1cixcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgICAgICAgZXJyb3I6IFN0cmluZyhCb29sZWFuKGVycm9yKSksXG4gICAgICAgIGNhY2hlTWVhc3VyZW1lbnRzOiBjYWNoZU1lYXN1cmVtZW50cyxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA1fX1cbiAgICAgIClcbiAgICAgICwgcG9zaXRpb25FcnJvckJlbG93ICYmIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRXJyb3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI0fX0sIGVycm9yKVxuICAgIClcbiAgKVxufSlcblxuQmFzaWNUZXh0QXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc2l0aW9uRXJyb3JCZWxvdzogdHJ1ZSxcbiAgc2Nyb2xsYWJsZTogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNUZXh0QXJlYVxuIiwiZXhwb3J0IGNvbnN0IHNlZ21lbnRUcmFjayA9IGFzeW5jIChldmVudCwgcHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7YW5hbHl0aWNzfSA9IHdpbmRvdyB8fCB1bmRlZmluZWRcbiAgaWYgKCFhbmFseXRpY3MpIHJldHVyblxuICBhbmFseXRpY3MudHJhY2soZXZlbnQsIHByb3BlcnRpZXMpXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQmFzaWNUZXh0QXJlYS50c3hcIjsvLyBodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5cG9wcC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFN0eWxlZEVycm9yIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBTdHlsZWRUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYSgoe2Rpc2FibGVkLCByZWFkT25seSwgZXJyb3J9KSA9PiAoe1xuICBjdXJzb3I6IGRpc2FibGVkIHx8IHJlYWRPbmx5ID8gJ25vdC1hbGxvd2VkJyA6ICdpbnB1dCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke2Vycm9yID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDE1LFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgcGFkZGluZzogJzVweCAxMHB4JyxcbiAgcmVzaXplOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbicsXG4gICc6aG92ZXInOiB7XG4gICAgYm9yZGVyQ29sb3I6ICFyZWFkT25seSAmJiBQQUxFVFRFLkJPUkRFUl9IT1ZFUlxuICB9LFxuICAnOmFjdGl2ZSwgOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiAhcmVhZE9ubHkgJiYgUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSkpXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkxlZnQ6IDVcbn0pXG5cbmNvbnN0IExhYmVsSGVscGVyID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxMixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIG1hcmdpbkxlZnQ6IDZcbn0pXG5cbmNvbnN0IEJhc2ljVGV4dEFyZWEgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZCxcbiAgICBpc09wdGlvbmFsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbWluUm93cyxcbiAgICBlcnJvcixcbiAgICBoaWRlRXJyb3JNZXNzYWdlLFxuICAgIG1heExlbmd0aCxcbiAgICBsYWJlbCxcbiAgICBuYW1lLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uQ2hhbmdlLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHZhbHVlLFxuICAgIHN0eWxlLFxuICAgIHJlYWRPbmx5XG4gIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgbGFiZWwgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk4fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGVycm9yICYmICFoaWRlRXJyb3JNZXNzYWdlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRXJyb3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA0fX0sIGVycm9yKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFRleHRBcmVhLCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG1pblJvd3M6IG1pblJvd3MsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICB2YWx1ZTogdmFsdWUgfHwgXCJcIixcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICAgICAgZXJyb3I6IGVycm9yLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA1fX1cbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNUZXh0QXJlYVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7dXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7aXNWYWxpZH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgRGF0ZVBpY2tlciwge30gZnJvbSAncmVhY3QtZGF0ZXBpY2tlcidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL2Jsb2Nrcy9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IHtnZXREaXNwbGF5Rm9ybWF0fSBmcm9tICdjbGllbnQvdXRpbHMvZGF0ZUhlbHBlcnMnXG5cbmltcG9ydCAncmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9kYXRlcGlja2VyLW92ZXJyaWRlLmNzcydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZERhdGVQaWNrZXIgPSBzdHlsZWQoRGF0ZVBpY2tlcilgXG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbmBcblxuY29uc3QgRGF0ZUlucHV0ID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7IGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsIHJlZjogcmVmLCAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX0gKVxufSlcblxuY29uc3QgQ3VzdG9tRGF0ZVBpY2tlciA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtuYW1lLCBwbGFjZWhvbGRlciwgcmVhZE9ubHksIHZhbHVlLCBpc1Rhc2tNZW51LCBlcnJvcn0gPSBwcm9wc1xuICBjb25zdCBbLCAsIHtzZXRWYWx1ZX1dID0gdXNlRmllbGQobmFtZSlcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIC4uLihpc1Rhc2tNZW51ICYmIHtwYWRkaW5nOiAnMHB4J30pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXcgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWxpZENoYXJzID0gL15cXGR7MCwyfVsuL117MCwxfVxcZHswLDJ9Wy4vXXswLDF9XFxkezAsNH0kL1xuICAgIGlmICghdmFsaWRDaGFycy50ZXN0KGV2ZW50LnRhcmdldC52YWx1ZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZChuZXcgRGF0ZSh2YWx1ZSkpKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGlmIChkYXRlICYmIGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHNldFZhbHVlKGRhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZhbHVlKCcnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHN0eWxlOiBjb250YWluZXJTdHlsZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWREYXRlUGlja2VyLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgY3VzdG9tSW5wdXQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUlucHV0LCB7IGVycm9yOiBlcnJvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY5fX0gKSxcbiAgICAgICAgc2VsZWN0ZWQ6IHZhbHVlICYmIG5ldyBEYXRlKHZhbHVlKSxcbiAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgY2FsZW5kYXJDbGFzc05hbWU6IFwiaGwtY2FsZW5kYXJcIixcbiAgICAgICAgZGF5Q2xhc3NOYW1lOiAoKSA9PiAnaGwtZGF5JyxcbiAgICAgICAgc2hvdWxkQ2xvc2VPblNlbGVjdDogZmFsc2UsXG4gICAgICAgIG9uQ2hhbmdlUmF3OiBoYW5kbGVDaGFuZ2VSYXcsXG4gICAgICAgIHBsYWNlaG9sZGVyVGV4dDogZ2V0RGlzcGxheUZvcm1hdChwbGFjZWhvbGRlciksXG4gICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvTU0veXl5eVwiLFxuICAgICAgICBkaXNhYmxlZDogcmVhZE9ubHksXG4gICAgICAgIGRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRGF0ZVBpY2tlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tDaGVja2JveC50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWwoKHtkaXNhYmxlZH0pID0+ICh7XG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBwYWRkaW5nOiAnMTBweCAxMHB4IDEwcHggNDVweCcsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIHRyYW5zaXRpb246ICcuM3MgZWFzZSBhbGwnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJjo6YmVmb3JlJzoge1xuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiAnMTBweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnY2FsYyg1MCUgLSAxMHB4KScsXG4gICAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGJhY2tncm91bmQtY29sb3InXG4gIH0sXG4gICc6aG92ZXInOiB7XG4gICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4wNSknXG4gIH0sXG4gIG1pbkhlaWdodDogJzQxLjI1cHgnXG59KSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAmOmNoZWNrZWQgKyAke0xhYmVsfSB7XG4gICAgLyogYmFja2dyb3VuZDogJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9MSUdIVEVTVH07ICovXG4gICAgYm9yZGVyLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgfVxuICAmOmNoZWNrZWQgKyAke0xhYmVsfTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4YzNabklIZHBaSFJvUFNJeU5pSWdhR1ZwWjJoMFBTSXlNQ0lnZG1WeWMybHZiajBpTVM0eElpQjJhV1YzUW05NFBTSXlMakF5T1RZNElDMDBNQzR3T1RBeklESTJJREl3SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajQ4SVMwdFIyVnVaWEpoZEdWa0lHSjVJRWxLVTFaSElDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhV052Ym1waGNpOUpTbE5XUnlrdExUNDhjR0YwYUNCa1BTSk5NamN1T1RjME15d3RNell1TVRJM01tTXdMREF1TkRRMk5ESTRJQzB3TGpFMU5qSTFMREF1T0RJMU9Ea3pJQzB3TGpRMk9EYzFMREV1TVRNNE16bHNMVEV5TGpFeU1EVXNNVEl1TVRJd05Xd3RNaTR5TnpZM09Td3lMakkzTmpjNVl5MHdMak14TWpVc01DNHpNVEkxSUMwd0xqWTVNVGsyTkN3d0xqUTJPRGMxSUMweExqRXpPRE01TERBdU5EWTROelZqTFRBdU5EUTJOREk0TERBZ0xUQXVPREkxT0RrekxDMHdMakUxTmpJMUlDMHhMakV6T0RNNUxDMHdMalEyT0RjMWJDMHlMakkzTmpjNUxDMHlMakkzTmpjNWJDMDJMakEyTURJM0xDMDJMakEyTURJM1l5MHdMak14TWpVc0xUQXVNekV5TlNBdE1DNDBOamczTlN3dE1DNDJPVEU1TmpVZ0xUQXVORFk0TnpVc0xURXVNVE00TXpsak1Dd3RNQzQwTkRZME1qa2dNQzR4TlRZeU5Td3RNQzQ0TWpVNE9UTWdNQzQwTmpnM05Td3RNUzR4TXpnek9Xd3lMakkzTmpjNUxDMHlMakkzTmpjNVl6QXVNekV5TlN3dE1DNHpNVEkxSURBdU5qa3hPVFkxTEMwd0xqUTJPRGMxSURFdU1UTTRNemtzTFRBdU5EWTROelZqTUM0ME5EWTBNamtzTUNBd0xqZ3lOVGc1TXl3d0xqRTFOakkxSURFdU1UTTRNemtzTUM0ME5qZzNOV3cwTGpreU1UZzRMRFF1T1RNNE5qSnNNVEF1T1RneU1Td3RNVEF1T1RrNE9XTXdMak14TWpVc0xUQXVNekV5TlNBd0xqWTVNVGsyTkN3dE1DNDBOamczTlNBeExqRXpPRE01TEMwd0xqUTJPRGMxWXpBdU5EUTJOREk0TERBZ01DNDRNalU0T1RNc01DNHhOVFl5TlNBeExqRXpPRE01TERBdU5EWTROelZzTWk0eU56WTNPQ3d5TGpJM05qYzVZekF1TXpFeU5Td3dMak14TWpVZ01DNDBOamczTlN3d0xqWTVNVGsyTkNBd0xqUTJPRGMxTERFdU1UTTRNemxhSWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RFdU1EQXhPVGdwSWlCbWFXeHNQU0lqWm1abUlqNDhMM0JoZEdnK1BDOXpkbWMrJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5cHg7XG4gIH1cbmBcblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzB9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBkaXNhYmxlZDogZGlzYWJsZWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fSwgbGFiZWwpXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpby50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsKCh7ZGlzYWJsZWQsIG5vU2hhZG93fSkgPT4gKHtcbiAgLi4uKCFub1NoYWRvdyAmJiB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICAgIGJveFNoYWRvdzogJzAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCA0cHggOHB4IHJnYmEoMCwwLDAsMC4wNSknXG4gICAgfVxuICB9KSxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogbm9TaGFkb3cgPyA0MDAgOiA1MDAsXG4gIHBhZGRpbmc6ICcxMHB4IDM1cHggMTBweCAzNXB4JyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGFsbCcsXG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZDogUEFMRVRURS5CQUNLR1JPVU5EX01BSU4sXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiBub1NoYWRvdyA/ICcwcHgnIDogJzEwcHgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJ2NhbGMoNTAlIC0gMTBweCknLFxuICAgIHRyYW5zaXRpb246ICcuM3MgZWFzZSBiYWNrZ3JvdW5kLWNvbG9yJ1xuICB9LFxuICBtaW5IZWlnaHQ6ICc0MS4yNXB4J1xufSkpXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9IHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0xJR0hURVNUfTsgKi9cbiAgICBib3JkZXItY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICB9XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhjM1puSUhkcFpIUm9QU0l5TmlJZ2FHVnBaMmgwUFNJeU1DSWdkbVZ5YzJsdmJqMGlNUzR4SWlCMmFXVjNRbTk0UFNJeUxqQXlPVFk0SUMwME1DNHdPVEF6SURJMklESXdJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNDhJUzB0UjJWdVpYSmhkR1ZrSUdKNUlFbEtVMVpISUNob2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFXTnZibXBoY2k5SlNsTldSeWt0TFQ0OGNHRjBhQ0JrUFNKTk1qY3VPVGMwTXl3dE16WXVNVEkzTW1Nd0xEQXVORFEyTkRJNElDMHdMakUxTmpJMUxEQXVPREkxT0RreklDMHdMalEyT0RjMUxERXVNVE00TXpsc0xURXlMakV5TURVc01USXVNVEl3Tld3dE1pNHlOelkzT1N3eUxqSTNOamM1WXkwd0xqTXhNalVzTUM0ek1USTFJQzB3TGpZNU1UazJOQ3d3TGpRMk9EYzFJQzB4TGpFek9ETTVMREF1TkRZNE56VmpMVEF1TkRRMk5ESTRMREFnTFRBdU9ESTFPRGt6TEMwd0xqRTFOakkxSUMweExqRXpPRE01TEMwd0xqUTJPRGMxYkMweUxqSTNOamM1TEMweUxqSTNOamM1YkMwMkxqQTJNREkzTEMwMkxqQTJNREkzWXkwd0xqTXhNalVzTFRBdU16RXlOU0F0TUM0ME5qZzNOU3d0TUM0Mk9URTVOalVnTFRBdU5EWTROelVzTFRFdU1UTTRNemxqTUN3dE1DNDBORFkwTWprZ01DNHhOVFl5TlN3dE1DNDRNalU0T1RNZ01DNDBOamczTlN3dE1TNHhNemd6T1d3eUxqSTNOamM1TEMweUxqSTNOamM1WXpBdU16RXlOU3d0TUM0ek1USTFJREF1TmpreE9UWTFMQzB3TGpRMk9EYzFJREV1TVRNNE16a3NMVEF1TkRZNE56VmpNQzQwTkRZME1qa3NNQ0F3TGpneU5UZzVNeXd3TGpFMU5qSTFJREV1TVRNNE16a3NNQzQwTmpnM05XdzBMamt5TVRnNExEUXVPVE00TmpKc01UQXVPVGd5TVN3dE1UQXVPVGs0T1dNd0xqTXhNalVzTFRBdU16RXlOU0F3TGpZNU1UazJOQ3d0TUM0ME5qZzNOU0F4TGpFek9ETTVMQzB3TGpRMk9EYzFZekF1TkRRMk5ESTRMREFnTUM0NE1qVTRPVE1zTUM0eE5UWXlOU0F4TGpFek9ETTVMREF1TkRZNE56VnNNaTR5TnpZM09Dd3lMakkzTmpjNVl6QXVNekV5TlN3d0xqTXhNalVnTUM0ME5qZzNOU3d3TGpZNU1UazJOQ0F3TGpRMk9EYzFMREV1TVRNNE16bGFJaUIwY21GdWMyWnZjbTA5SW5OallXeGxLREV1TURBeE9UZ3BJaUJtYVd4c1BTSWpabVptSWo0OEwzQmhkR2crUEM5emRtYysnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDlweDtcbiAgfVxuYFxuXG5jb25zdCBSYWRpbyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWUsIG5vU2hhZG93fSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBjaGVja2VkOiAhIWNoZWNrZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBkaXNhYmxlZDogZGlzYWJsZWQsIG5vU2hhZG93OiBub1NoYWRvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4M319LCBsYWJlbClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0RWRpdG9yLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgbWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBSaWNoVGV4dEVkaXRvciwge30gZnJvbSAncmVhY3QtcnRlJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9ibG9ja3MvQm9keUNvbnRhaW5lcidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkVGV4dEVkaXRvciA9IHN0eWxlZChSaWNoVGV4dEVkaXRvcilgXG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgJiAud3lzaXd5Zy1idG4ge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAkeyh7aXNUYXNrTWVudSwgcmVhZE9ubHl9KSA9PlxuICAgICFpc1Rhc2tNZW51ICYmIHJlYWRPbmx5XG4gICAgICA/IGBcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5gXG4gICAgICA6IGBgfVxuICAkeyh7aXNUYXNrTWVudSwgZXJyb3J9KSA9PlxuICAgIGlzVGFza01lbnVcbiAgICAgID8gYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgJiAudGV4dC1lZGl0b3ItYm9keSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgICYgLnRleHQtZWRpdG9yLXRvb29sYmFyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDdweDtcbiAgICB9XG4gICAgJiA6YWN0aXZlLCA6Zm9jdXMsIDpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIH1cbiAgICAmIC5EcmFmdEVkaXRvci1lZGl0b3JDb250YWluZXIge1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYgLnB1YmxpYy1EcmFmdEVkaXRvclBsYWNlaG9sZGVyLXJvb3Qge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICBgXG4gICAgICA6IGBgfVxuYFxuXG5jb25zdCB0b29sYmFyQ29uZmlnID0ge1xuICBkaXNwbGF5OiBbXG4gICAgJ0lOTElORV9TVFlMRV9CVVRUT05TJyxcbiAgICAnQkxPQ0tfVFlQRV9CVVRUT05TJyxcbiAgICAnTElOS19CVVRUT05TJyxcbiAgICAnQkxPQ0tfVFlQRV9EUk9QRE9XTicsXG4gICAgJ0hJU1RPUllfQlVUVE9OUydcbiAgXSxcbiAgSU5MSU5FX1NUWUxFX0JVVFRPTlM6IFtcbiAgICB7bGFiZWw6ICdCb2xkJywgc3R5bGU6ICdCT0xEJywgY2xhc3NOYW1lOiAnd3lzaXd5Zy1idG4nfSxcbiAgICB7bGFiZWw6ICdJdGFsaWMnLCBzdHlsZTogJ0lUQUxJQycsIGNsYXNzTmFtZTogJ3d5c2l3eWctYnRuJ30sXG4gICAge2xhYmVsOiAnVW5kZXJsaW5lJywgc3R5bGU6ICdVTkRFUkxJTkUnLCBjbGFzc05hbWU6ICd3eXNpd3lnLWJ0bid9XG4gIF0sXG4gIEJMT0NLX1RZUEVfRFJPUERPV046IFtcbiAgICB7bGFiZWw6ICdOb3JtYWwnLCBzdHlsZTogJ3Vuc3R5bGVkJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyBMYXJnZScsIHN0eWxlOiAnaGVhZGVyLW9uZSd9LFxuICAgIHtsYWJlbDogJ0hlYWRpbmcgTWVkaXVtJywgc3R5bGU6ICdoZWFkZXItdHdvJ30sXG4gICAge2xhYmVsOiAnSGVhZGluZyBTbWFsbCcsIHN0eWxlOiAnaGVhZGVyLXRocmVlJ31cbiAgXSxcbiAgQkxPQ0tfVFlQRV9CVVRUT05TOiBbXG4gICAge2xhYmVsOiAnVUwnLCBzdHlsZTogJ3Vub3JkZXJlZC1saXN0LWl0ZW0nLCBjbGFzc05hbWU6ICd3eXNpd3lnLWJ0bid9LFxuICAgIHtsYWJlbDogJ09MJywgc3R5bGU6ICdvcmRlcmVkLWxpc3QtaXRlbScsIGNsYXNzTmFtZTogJ3d5c2l3eWctYnRuJ31cbiAgXVxufVxuXG5jb25zdCBlZGl0b3JUZXh0ID0gUmljaFRleHRFZGl0b3IuY3JlYXRlVmFsdWVGcm9tU3RyaW5nKCcnLCAnaHRtbCcpXG5cbmNvbnN0IFRleHRFZGl0b3IgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7bmFtZSwgcGxhY2Vob2xkZXIsIHZhbHVlLCBmb3JtYXQsIHJlYWRPbmx5LCBzZXRGaWVsZFZhbHVlLCBpc1Rhc2tNZW51fSA9IHByb3BzXG4gIGNvbnN0IHJlbmRlclZhbHVlID0gdmFsdWVcblxuICBjb25zdCBlZGl0b3JWYWx1ZUZyb21Qcm9wcyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmIChmb3JtYXQgJiYgdmFsdWUpIHtcbiAgICAgIHJldHVybiBbdmFsdWUsIGZvcm1hdF1cbiAgICB9XG4gICAgcmV0dXJuIFsnJywgJ2h0bWwnXVxuICB9XG5cbiAgY29uc3QgW2VkaXRvclZhbHVlLCBzZXRFZGl0b3JWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBlZGl0b3JUZXh0LnNldENvbnRlbnRGcm9tU3RyaW5nKC4uLmVkaXRvclZhbHVlRnJvbVByb3BzKHJlbmRlclZhbHVlKSlcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUVkaXRvckNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldEVkaXRvclZhbHVlKHZhbHVlKVxuICB9XG5cbiAgY29uc3QgZGlkTW91bnRSZWYgPSB1c2VSZWYoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpZE1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldEVkaXRvclZhbHVlKGVkaXRvclRleHQuc2V0Q29udGVudEZyb21TdHJpbmcoLi4uZWRpdG9yVmFsdWVGcm9tUHJvcHMocmVuZGVyVmFsdWUpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGlkTW91bnRSZWYuY3VycmVudCA9IHRydWVcbiAgICB9XG4gIH0sIFtyZW5kZXJWYWx1ZSwgZWRpdG9yVGV4dF0pXG5cbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAuLi4oaXNUYXNrTWVudSAmJiB7cGFkZGluZzogJzBweCd9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHsgc3R5bGU6IGNvbnRhaW5lclN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUZXh0RWRpdG9yLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWVkaXRvclwiLFxuICAgICAgICBpc1Rhc2tNZW51OiBpc1Rhc2tNZW51LFxuICAgICAgICB0b29sYmFyQ29uZmlnOiB0b29sYmFyQ29uZmlnLFxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lOiBcInRleHQtZWRpdG9yLXRvb29sYmFyXCIsXG4gICAgICAgIGVkaXRvckNsYXNzTmFtZTogXCJ0ZXh0LWVkaXRvci1ib2R5XCIsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHZhbHVlOiBlZGl0b3JWYWx1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVFZGl0b3JDaGFuZ2UsXG4gICAgICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZWRpdG9yVmFsdWUudG9TdHJpbmcoZm9ybWF0KSlcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNH19XG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0RWRpdG9yXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvZHlDb250YWluZXIudHN4XCI7aW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUmVhY3QsIHt9IGZyb20gJ3JlYWN0J1xuXG5cblxuXG5cblxuXG5jb25zdCBCb2R5Q29udGFpbmVyID0gc3R5bGVkLmRpdigoe3Jvd30pID0+ICh7XG4gIGZsb2F0OiAnbGVmdCcsXG4gIHBhZGRpbmdUb3A6ICcxMHB4JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZmxleERpcmVjdGlvbjogcm93ID8gJ3JvdycgOiAnY29sdW1uJ1xufSkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW4sIHJvdywgc3R5bGV9KSA9PiAoXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwgeyBzdHlsZTogc3R5bGUsIHJvdzogcm93LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTl9fVxuICAgICwgY2hpbGRyZW5cbiAgKVxuKVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhdGVwaWNrZXItb3ZlcnJpZGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgc3RyaW5nVG9IYXNoIGZyb20gJy4vc3RyaW5nVG9IYXNoJ1xuaW1wb3J0IHtCYWNrZ3JvdW5kQ29sb3JzfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IGdldENvbG9yID0gKGlkZW50aWZpZXIpID0+IEJhY2tncm91bmRDb2xvcnNbaWRlbnRpZmllciAlIEJhY2tncm91bmRDb2xvcnMubGVuZ3RoXVxuXG5leHBvcnQgY29uc3QgY29sb3JGcm9tU3RyaW5nID0gKHN0cmluZykgPT4gZ2V0Q29sb3IoTWF0aC5hYnMoc3RyaW5nVG9IYXNoKHN0cmluZykpKVxuXG5leHBvcnQgY29uc3QgY29sb3JCeUluZGV4ID0gKGluZGV4KSA9PiBnZXRDb2xvcihpbmRleClcbiIsImNvbnN0IHN0cmluZ1RvSGFzaCA9IChzdHJpbmcpID0+IHtcbiAgbGV0IGhhc2ggPSAwLFxuICAgIGksXG4gICAgY2hyXG4gIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaHJcbiAgICBoYXNoIHw9IDBcbiAgfVxuICByZXR1cm4gaGFzaFxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdUb0hhc2hcbiJdLCJzb3VyY2VSb290IjoiIn0=