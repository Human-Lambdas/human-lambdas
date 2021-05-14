(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["APIKeyContainer"],{

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

/***/ "./src/universal/modules/settings/components/APIKey.tsx":
/*!**************************************************************!*\
  !*** ./src/universal/modules/settings/components/APIKey.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageWrapper */ "./src/universal/modules/settings/components/PageWrapper.tsx");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Title */ "./src/universal/modules/settings/components/Title.tsx");
/* harmony import */ var _CopyFieldLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CopyFieldLine */ "./src/universal/modules/settings/components/CopyFieldLine.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_components_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/IconButton */ "./src/universal/components/IconButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/components/APIKey.tsx";










const Text = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e435eao0"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  fontSize: 15,
  fontWeight: 400,
  marginBottom: 15
});

const Note = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e435eao1"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 13,
  fontWeight: 400,
  marginBottom: 5
});

const APIKey = ({
  apiKey
}) => {
  const [copied, setCopied] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleKeyCopy = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setInterval(() => {
      setCopied(false);
    }, 1000);
    setCopied(true);
  }, [copied, apiKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "API"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Human Lambdas provides an easy to use API interface to create and access your organization’s tasks."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Your secret API key is:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Remember, this key is secret and should be kept hidden from public view."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CopyFieldLine__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: () => null,
    disabled: true,
    value: apiKey.token || '',
    spellCheck: false,
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__["CopyToClipboard"], {
    text: apiKey.token || '',
    onCopy: () => handleKeyCopy(),
    style: {
      position: 'relative',
      top: 0,
      right: 30
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "button",
    onClick: () => null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontSize: 15,
      color: copied ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_DARK_GRAY
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "content_copy")))));
};

/* harmony default export */ __webpack_exports__["default"] = (APIKey);

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

/***/ "./src/universal/modules/settings/containers/APIKeyContainer.tsx":
/*!***********************************************************************!*\
  !*** ./src/universal/modules/settings/containers/APIKeyContainer.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_APIKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/APIKey */ "./src/universal/modules/settings/components/APIKey.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/APIKeyContainer.tsx";




const APIKeyContainer = () => {
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [apiKey, setAPIKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getAPIKey() {
      try {
        const {
          data
        } = await networker.httpHandler(`/users/api-token`, {
          method: 'GET'
        });
        setAPIKey(data);
      } catch (e) {
        console.error(e);
      }
    }

    getAPIKey();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_APIKey__WEBPACK_IMPORTED_MODULE_1__["default"], {
    apiKey: apiKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (APIKeyContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9TdHlsZWRFcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvQVBJS2V5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9Db3B5RmllbGRMaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL0FQSUtleUNvbnRhaW5lci50c3giXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udGFpbmVyIiwiUGxhaW5CdXR0b24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImNvbG9yIiwiUEFMRVRURSIsIlBSSU1BUllfTUFJTiIsIkljb25CdXR0b24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwidHlwZSIsImNoaWxkcmVuIiwic3R5bGUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIklucHV0IiwiZXJyb3IiLCJkaXNhYmxlZCIsInJlYWRPbmx5IiwiYXBwZWFyYW5jZSIsIm91dGxpbmUiLCJib3JkZXIiLCJFUlJPUl9NQUlOIiwiQk9SREVSX01BSU5fR1JBWSIsImJveFNpemluZyIsIlRFWFRfTUFJTiIsImZvbnRGYW1pbHkiLCJGT05UX0ZBTUlMWSIsIlNBTlNfU0VSSUYiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYm9yZGVyQ29sb3IiLCJCT1JERVJfSE9WRVIiLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibmFtZSIsImhpZGVFcnJvck1lc3NhZ2UiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJwYXR0ZXJuIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImxhYmVsIiwic3BlbGxDaGVjayIsImNvbnRhaW5lclN0eWxlcyIsIlN0eWxlZEVycm9yIiwiQm9vbGVhbiIsInRleHRBbGlnbiIsIlRleHQiLCJtYXJnaW5Cb3R0b20iLCJOb3RlIiwiQVBJS2V5IiwiYXBpS2V5IiwiY29waWVkIiwic2V0Q29waWVkIiwidXNlU3RhdGUiLCJoYW5kbGVLZXlDb3B5IiwidXNlQ2FsbGJhY2siLCJzZXRJbnRlcnZhbCIsIlBhZ2VXcmFwcGVyIiwiVGl0bGUiLCJDb3B5RmllbGRMaW5lIiwidG9rZW4iLCJDb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0Iiwib25Db3B5IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsIkljb24iLCJQUklNQVJZX0dSRUVOIiwiVEVYVF9EQVJLX0dSQVkiLCJBUElLZXlDb250YWluZXIiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJzZXRBUElLZXkiLCJ1c2VFZmZlY3QiLCJnZXRBUElLZXkiLCJkYXRhIiwi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QU0sRUFBRUEsTUFBVjtBQUFrQnBELFVBQU0sRUFBRSxTQUExQjtBQUFnQ0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTdCLFlBQVg7QUFBeUI4QixnQkFBVSxFQUFFO0FBQXJDO0FBQTFDLEdBQTVCLENBQVA7QUFDRCxDQWxCRDs7QUFvQmVxRSw4RUFBZixFIiwiZmlsZSI6IkFQSUtleUNvbnRhaW5lcl9lZWM0NDQ4MTVkY2ZlN2RlMTc1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWYsfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGUsIGNoaWxkcmVuLCBzdHlsZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCB0eXBlOiB0eXBlLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319XG4gICAgICAsIGNoaWxkcmVuXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IFN0eWxlZEVycm9yIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWQsIHJlYWRPbmx5fSkgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIG1hcmdpbjogMCxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjdXJzb3I6IGRpc2FibGVkIHx8IHJlYWRPbmx5ID8gJ25vdC1hbGxvd2VkJyA6ICdpbnB1dCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgZm9udFNpemU6IDE1LFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBoZWlnaHQ6IDMyLFxuICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9LFxuICAnOmhvdmVyJzoge1xuICAgIGJvcmRlckNvbG9yOiAhcmVhZE9ubHkgJiYgUEFMRVRURS5CT1JERVJfSE9WRVJcbiAgfSxcbiAgJzphY3RpdmUsIDpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogIXJlYWRPbmx5ICYmIFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5jb25zdCBMYWJlbEhlbHBlciA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTIsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5MZWZ0OiA2XG59KVxuXG5jb25zdCBJbnB1dEZpZWxkID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZCxcbiAgICBlcnJvcixcbiAgICBpc09wdGlvbmFsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbmFtZSxcbiAgICBoaWRlRXJyb3JNZXNzYWdlLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uS2V5RG93bixcbiAgICBwYXR0ZXJuLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHN0eWxlLFxuICAgIHNwZWxsQ2hlY2ssXG4gICAgcmVhZE9ubHksXG4gICAgY29udGFpbmVyU3R5bGVzLFxuICAgIHR5cGVcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiB7Li4uY29udGFpbmVyU3R5bGVzfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExM319XG4gICAgICAsIGxhYmVsICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTV9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTZ9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE3fX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGVycm9yICYmICFoaWRlRXJyb3JNZXNzYWdlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRXJyb3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIxfX0sIGVycm9yKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgdHlwZTogdHlwZSB8fCAndGV4dCcsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4oZXJyb3IpICYmIEJvb2xlYW4odmFsdWUgIT09ICcnKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTdHlsZWRFcnJvciA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzI0cHgnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRFcnJvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvQVBJS2V5LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuL1BhZ2VXcmFwcGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnXG5pbXBvcnQgQ29weUZpZWxkTGluZSBmcm9tICcuL0NvcHlGaWVsZExpbmUnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbkJ1dHRvbidcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgbWFyZ2luQm90dG9tOiAxNVxufSlcblxuY29uc3QgTm90ZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxMyxcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW5Cb3R0b206IDVcbn0pXG5cbmNvbnN0IEFQSUtleSA9ICh7YXBpS2V5fSkgPT4ge1xuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZUtleUNvcHkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q29waWVkKGZhbHNlKVxuICAgIH0sIDEwMDApXG4gICAgc2V0Q29waWVkKHRydWUpXG4gIH0sIFtjb3BpZWQsIGFwaUtleV0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NX19LCBcIkFQSVwiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fSwgXCJIdW1hbiBMYW1iZGFzIHByb3ZpZGVzIGFuIGVhc3kgdG8gdXNlIEFQSSBpbnRlcmZhY2UgdG8gY3JlYXRlIGFuZCBhY2Nlc3MgeW91ciBvcmdhbml6YXRpb27igJlzIHRhc2tzLlwiXG5cblxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTB9fSwgXCJZb3VyIHNlY3JldCBBUEkga2V5IGlzOlwiICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX0sIFwiUmVtZW1iZXIsIHRoaXMga2V5IGlzIHNlY3JldCBhbmQgc2hvdWxkIGJlIGtlcHQgaGlkZGVuIGZyb20gcHVibGljIHZpZXcuXCIgICAgICAgICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29weUZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgb25DaGFuZ2U6ICgpID0+IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IGFwaUtleS50b2tlbiB8fCAnJyxcbiAgICAgICAgICBzcGVsbENoZWNrOiBmYWxzZSxcbiAgICAgICAgICB0eXBlOiBcInRleHRcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29weVRvQ2xpcGJvYXJkLCB7XG4gICAgICAgICAgdGV4dDogYXBpS2V5LnRva2VuIHx8ICcnLFxuICAgICAgICAgIG9uQ29weTogKCkgPT4gaGFuZGxlS2V5Q29weSgpLFxuICAgICAgICAgIHN0eWxlOiB7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMCwgcmlnaHQ6IDMwfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwfX1cbiAgICAgICAgXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogKCkgPT4gbnVsbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb3BpZWQgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU4gOiBQQUxFVFRFLlRFWFRfREFSS19HUkFZXG4gICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Nn19XG4gICAgICAgICAgICAsIFwiY29udGVudF9jb3B5XCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUElLZXlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBDb3B5RmllbGRMaW5lID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAwcHgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG1hcmdpbkJvdHRvbTogMTVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENvcHlGaWVsZExpbmVcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQYWdlV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIG1heFdpZHRoOiA2MDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VXcmFwcGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIHBhZGRpbmc6ICcxMDBweCAwIDMwcHggMCdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29udGFpbmVycy9BUElLZXlDb250YWluZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQVBJS2V5IGZyb20gJy4uL2NvbXBvbmVudHMvQVBJS2V5J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5jb25zdCBBUElLZXlDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IFthcGlLZXksIHNldEFQSUtleV0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFQSUtleSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzL2FwaS10b2tlbmAsIHttZXRob2Q6ICdHRVQnfSlcbiAgICAgICAgc2V0QVBJS2V5KGRhdGEpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBUElLZXkoKVxuICB9LCBbXSlcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBUElLZXksIHsgYXBpS2V5OiBhcGlLZXksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMn19IClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQVBJS2V5Q29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9