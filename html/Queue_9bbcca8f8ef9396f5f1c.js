(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Queue"],{

/***/ "./src/client/components/CSVInput.tsx":
/*!********************************************!*\
  !*** ./src/client/components/CSVInput.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! csvtojson */ "./node_modules/csvtojson/browser/browser.js");
/* harmony import */ var csvtojson__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(csvtojson__WEBPACK_IMPORTED_MODULE_4__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/CSVInput.tsx";





const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
  target: "e1co46le0"
})(() => ({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  background: '#fff',
  cursor: 'text',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 12,
  position: 'relative',
  transition: '.3s ease all',
  width: '100%',
  marginTop: '5px'
}));

const CSVInput = ({
  label,
  setCanImport,
  setOptions,
  initialValue
}) => {
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const setCsvRow = value => {
    csvtojson__WEBPACK_IMPORTED_MODULE_4___default()({
      noheader: true,
      output: 'csv',
      ignoreEmpty: true
    }).fromString(value).then(csvRow => {
      const hasInvalidValues = csvRow.length > 1;

      if (hasInvalidValues) {
        setCanImport(false);
        setError(true);
      } else {
        setError(false);
        setCanImport(true);
        setOptions(csvRow[0]);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCsvRow(text);
  }, [text]);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;
    setText(value);
    setCsvRow(value);
  }, [text]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    minRows: 3,
    maxRows: 9,
    onChange: handleChange,
    error: error,
    value: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, label));
};

CSVInput.defaultProps = {
  options: []
};
/* harmony default export */ __webpack_exports__["default"] = (CSVInput);

/***/ }),

/***/ "./src/client/components/StandardMenu.tsx":
/*!************************************************!*\
  !*** ./src/client/components/StandardMenu.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/StandardMenu.tsx";




const StandardMenu = props => {
  const {
    menuProps,
    menuItems
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Standard dropdown menu'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), menuItems.map(({
    label,
    onClick
  }, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: idx,
    label: label,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardMenu);

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

/***/ "./src/universal/components/UnderlinedInputField.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/components/UnderlinedInputField.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/UnderlinedInputField.tsx";





const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezeuyml0"
})({
  name: "wkdq21",
  styles: "display:flex;flex-direction:row;width:100%;position:relative;"
});

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "ezeuyml1"
})(({
  error,
  disabled,
  icon
}) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  textAlign: 'center',
  border: 0,
  borderBottom: `1px solid ${error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : '#CACACB'}`,
  boxSizing: 'border-box',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].SANS_SERIF,
  fontWeight: 500,
  cursor: disabled ? 'not-allowed' : 'input',
  fontSize: 16,
  lineHeight: '32px',
  backgroundColor: 'inherit',
  height: 32,
  padding: icon ? '0 10px 0 30px' : '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    borderColor: error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
  target: "ezeuyml2"
})({
  name: "g3bvxd",
  styles: "font-size:16px;position:absolute;line-height:32px;padding-left:8px;"
});

const UnderlinedInputField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    disabled,
    error,
    name,
    onBlur,
    onFocus,
    onKeyDown,
    onChange,
    icon,
    placeholder,
    type = 'text',
    value,
    style,
    spellCheck,
    readOnly
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    icon: icon,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    disabled: Boolean(disabled),
    name: name,
    placeholder: placeholder,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onChange: onChange,
    ref: ref,
    type: type,
    value: value,
    error: Boolean(error),
    spellCheck: spellCheck,
    style: style,
    readOnly: readOnly,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (UnderlinedInputField);

/***/ }),

/***/ "./src/universal/hooks/useKeyPress.ts":
/*!********************************************!*\
  !*** ./src/universal/hooks/useKeyPress.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useKeyPress = targetKey => {
  const [keyPressed, setKeyPressed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function downHandler({
    key
  }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({
    key
  }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
};

/* harmony default export */ __webpack_exports__["default"] = (useKeyPress);

/***/ }),

/***/ "./src/universal/modules/queue/Queue.tsx":
/*!***********************************************!*\
  !*** ./src/universal/modules/queue/Queue.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_QueueBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/QueueBuilder */ "./src/universal/modules/queue/components/QueueBuilder.tsx");
/* harmony import */ var _client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/isEmptyArray */ "./src/universal/utils/isEmptyArray.ts");
/* harmony import */ var _client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var _client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var _client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/redux/queuesReducers */ "./src/client/redux/queuesReducers.ts");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/Queue.tsx";

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














const Queue = props => {
  const {
    user: {
      orgId
    }
  } = props || {};
  const [queue, setQueue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const networker = Object(_client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    history
  } = Object(_client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    pathname,
    state
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const {
    queueId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    async function fetchQueue() {
      if (pathname.indexOf('edit') !== -1 && orgId) {
        const {
          data,
          errors
        } = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(`/orgs/${orgId}/queues/${queueId}`, {
          method: 'GET'
        })]);

        if (Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_5__["default"])(errors)) {
          setQueue(data);
        }
      }
    }

    fetchQueue();
  }, [orgId, pathname]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    async function fetchQueue() {
      if (_optionalChain([state, 'optionalAccess', _3 => _3.templateId]) && orgId) {
        const {
          data,
          errors
        } = await _optionalChain([networker, 'optionalAccess', _4 => _4.httpHandler, 'call', _5 => _5(`/orgs/40/queues/${state.templateId}`, {
          method: 'GET'
        })]);

        if (Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_5__["default"])(errors)) {
          setQueue(data);
        }
      }

      if (_optionalChain([state, 'optionalAccess', _6 => _6.hasClone])) {
        setQueue(state.clonedQueue);
      }
    }

    fetchQueue();
  }, [orgId, pathname]);
  const onSubmitHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async (values, orgId) => {
    const {
      name,
      data
    } = values || {};
    const newData = data.map(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_11__["transformDates"]).map(block => {
      const blockType = block[block.type];

      const {
        value
      } = blockType,
            rest = _objectWithoutProperties(blockType, ["value"]); // strip out value


      const {
        history
      } = rest,
            blockVals = _objectWithoutProperties(rest, ["history"]); // strip out history


      const noHistory = block.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].FORM_SEQUENCE ? [] : undefined;
      return _objectSpread(_objectSpread({}, block), {}, {
        [block.type]: _objectSpread(_objectSpread({}, blockVals), {}, {
          history: noHistory
        })
      });
    });
    const newValues = {
      name,
      data: newData
    };
    const payload = {
      method: queueId ? 'PATCH' : 'POST',
      data: newValues
    };

    if (name) {
      if (queueId) {
        const {
          errors,
          data
        } = await _optionalChain([networker, 'optionalAccess', _7 => _7.httpHandler, 'call', _8 => _8(`/orgs/${orgId}/queues/${queueId}`, payload)]);

        if (!Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_5__["default"])(errors)) {
          errors.map(error => dispatch(Object(_client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message)));
          Object(_client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_7__["segmentTrack"])(`Queue Update Failed`, {
            orgId,
            name,
            queueId
          });
        } else {
          dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_10__["workfllowActions"].updateQueue(data));
          Object(_client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_7__["segmentTrack"])('Queue Update Successful', {
            orgId,
            name,
            queueId
          });
          dispatch(Object(_client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])('Queue successfuly updated'));
          history.push(`/queues/${queueId}`);
        }
      } else {
        const {
          errors,
          data
        } = await _optionalChain([networker, 'optionalAccess', _9 => _9.httpHandler, 'call', _10 => _10(`/orgs/${orgId}/queues/create`, payload)]);

        if (!Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_5__["default"])(errors)) {
          Object(_client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_7__["segmentTrack"])('Error creating new queue');
          errors.map(error => {
            dispatch(Object(_client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addFailureNotification"])(error.message));
            throw new Error(error.message);
          });
        } else {
          const {
            id,
            name
          } = data;
          dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_10__["workfllowActions"].addQueue(data));
          dispatch(Object(_client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_6__["addSuccessNotification"])('Queue successfuly created'));
          Object(_client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_7__["segmentTrack"])('3 - Queue Created - [QUEUE FUNNEL]', {
            queueId: id,
            orgId,
            name
          });
          history.push(`/queues/${id}`);
        }
      }
    }
  }, [orgId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_QueueBuilder__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmitHandler: onSubmitHandler,
    orgId: orgId,
    queue: queue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

/***/ "./src/universal/modules/queue/components/BinaryMenu.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/queue/components/BinaryMenu.tsx ***!
  \***************************************************************/
/*! exports provided: SmallLabel, StyledButton, StyledIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallLabel", function() { return SmallLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledIcon", function() { return StyledIcon; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/BinaryMenu.tsx";

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








const SmallLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("b", {
  target: "e17chzkp0"
})({
  fontSize: 10,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e17chzkp1"
})({
  name: "1ktdlux",
  styles: "display:grid;grid-template-columns:100px 1fr 10px;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

const StyledButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e17chzkp2"
})({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: 13,
  fontWeight: 400,
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BORDER_GRAY_NEW}`
});
const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
  target: "e17chzkp3"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BORDER_GRAY_NEW
});

const BinaryMenu = props => {
  const {
    data,
    index,
    type,
    seqIdx,
    setFieldValue
  } = props;
  const {
    togglePortal: togglePortalYes,
    originRef: originRefYes,
    menuPortal: menuPortalYes,
    menuProps: menuPropsYes
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__["MenuPosition"].UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  });
  const {
    togglePortal: togglePortalNo,
    originRef: originRefNo,
    menuPortal: menuPortalNo,
    menuProps: menuPropsNo
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__["MenuPosition"].UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  });
  const menuItemsTrue = data[index][type].data.filter(({
    id,
    name
  }) => id !== data[index][type].data[seqIdx].id && id !== '' && name !== '').map(({
    id,
    name
  }) => ({
    label: name,
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, id)
  }));
  menuItemsTrue.push({
    label: 'Continue to next question',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, undefined)
  }, {
    label: 'End',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.true`, null)
  });
  const menuItemsFalse = data[index][type].data.filter(({
    id,
    name
  }) => id !== data[index][type].data[seqIdx].id && id !== '' && name !== '').map(({
    id,
    name
  }) => ({
    label: name,
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, id)
  }));
  menuItemsFalse.push({
    label: 'Continue to next question',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, undefined)
  }, {
    label: 'End',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.false`, null)
  });

  const trueValue = _optionalChain([data, 'access', _ => _[index], 'access', _2 => _2[type], 'access', _3 => _3.data, 'access', _4 => _4[seqIdx], 'optionalAccess', _5 => _5.logic_jump, 'optionalAccess', _6 => _6.true]);

  const falseValue = _optionalChain([data, 'access', _7 => _7[index], 'access', _8 => _8[type], 'access', _9 => _9.data, 'access', _10 => _10[seqIdx], 'optionalAccess', _11 => _11.logic_jump, 'optionalAccess', _12 => _12.false]);

  const trueLabel = trueValue === null ? 'End' : trueValue ? trueValue : 'Continue to next question';
  const falseLabel = falseValue === null ? 'End' : falseValue ? falseValue : 'Continue to next question';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, "If YES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    ref: originRefYes,
    onClick: togglePortalYes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, trueLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, "expand_more"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, "If NO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledButton, {
    ref: originRefNo,
    onClick: togglePortalNo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, falseLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "expand_more"))), menuPortalYes( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuProps: menuPropsYes,
    menuItems: menuItemsTrue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  })), menuPortalNo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuProps: menuPropsNo,
    menuItems: menuItemsFalse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BinaryMenu);

/***/ }),

/***/ "./src/universal/modules/queue/components/BuilderHeader.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/modules/queue/components/BuilderHeader.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_UnderlinedInputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/UnderlinedInputField */ "./src/universal/components/UnderlinedInputField.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var universal_components_AppHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/AppHeader */ "./src/universal/components/AppHeader.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/BuilderHeader.tsx";







const InputWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e5n8j4f0"
})({
  name: "1fxi1ss",
  styles: "display:flex;flex-direction:row;justify-content:center;width:300px;margin:0 auto;"
});

const BuilderHeader = props => {
  const {
    queueId,
    isValid,
    handleChange,
    handleBlur,
    value,
    error,
    setQueueHasChanges,
    queueHasChanges,
    toggleConfirmation
  } = props;
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const cancelUrl = queueId ? `/queues/${queueId}` : `/queues`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_AppHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    leftBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "button",
      onClick: () => {
        if (isValid && queueHasChanges) {
          toggleConfirmation();
        } else {
          history.replace(cancelUrl);
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, "Cancel"),
    midBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_UnderlinedInputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onKeyDown: handleKeyPress,
      icon: 'edit',
      autoComplete: "off",
      autoFocus: false,
      name: "name",
      type: "text",
      onChange: e => {
        setQueueHasChanges(true);
        handleChange(e);
      },
      onBlur: handleBlur,
      value: value,
      error: error,
      placeholder: 'Queue Title',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    })),
    rightBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: !isValid,
      type: "submit",
      style: {
        float: 'right'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, queueId ? 'Save' : 'Create'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BuilderHeader);

/***/ }),

/***/ "./src/universal/modules/queue/components/NewBlockModal.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/modules/queue/components/NewBlockModal.tsx ***!
  \******************************************************************/
/*! exports provided: Label, Note, FieldWrapper, ContentBlock, ModalFooter, ContentWrapper, InlineWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBlock", function() { return ContentBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineWrapper", function() { return InlineWrapper; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var _client_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Checkbox */ "./src/universal/components/Checkbox.tsx");
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_utils_slugify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/utils/slugify */ "./src/universal/utils/slugify.ts");
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! universal/components/DatePicker */ "./src/universal/components/DatePicker.tsx");
/* harmony import */ var _Sequence__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Sequence */ "./src/universal/modules/queue/components/Sequence.tsx");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Selection */ "./src/universal/modules/queue/components/Selection.tsx");
/* harmony import */ var _hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../hooks/useKeyPress */ "./src/universal/hooks/useKeyPress.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/NewBlockModal.tsx";

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





















const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml0"
})(({
  isExtendedType
}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: isExtendedType ? 1000 : 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: _client_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BoxShadow"].MODAL,
  paddingTop: 35,
  paddingBottom: 35,
  maxHeight: 'calc(100vh - 100px)'
}));

const ModalWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml1"
})({
  name: "mm2ghz",
  styles: "display:flex;flex-direction:row;width:100%;overflow:auto;"
});

const ModalHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml2"
})({
  name: "dhf95b",
  styles: "text-align:center;font-weight:600;font-size:22px;line-height:27px;margin-bottom:45px;padding-left:35px;padding-right:35px;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml3"
})({
  fontSize: 15,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__["PALETTE"].TEXT_MAIN,
  fontWeight: 400,
  textTransform: 'capitalize'
});
const Note = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e175cnml4"
})({
  fontSize: 12,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__["PALETTE"].TEXT_GRAY,
  fontWeight: 400
});
const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml5"
})(({
  vertAlign
}) => ({
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  alignItems: vertAlign ? 'top' : 'center',
  marginBottom: 5
}));
const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml6"
})({
  name: "1stswx2",
  styles: "display:flex;flex-direction:column;margin-bottom:15px;"
});
const ModalFooter = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml7"
})({
  name: "1lfejyb",
  styles: "margin-top:15px;display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-between;padding-left:35px;padding-right:35px;"
});
const ContentWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml8"
})({
  name: "2lgtuc",
  styles: "background-color:#fff;width:100%;padding-left:35px;padding-right:35px;"
});
const InlineWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e175cnml9"
})({
  name: "vxcmzt",
  styles: "display:inline-flex;"
});

const NewBlockModal = props => {
  const {
    errors,
    arrayHelpers,
    currentBlockId,
    closePortal,
    setFieldValue,
    values,
    handleChange,
    isValid
  } = props;
  const {
    data
  } = values || {};
  const blockFormat = {
    number: 'number',
    default: 'text'
  };
  if (!data.length) return null;
  const index = data.findIndex(block => block._id === currentBlockId);
  if (index === -1) return null;
  const {
    type,
    isNew
  } = data[index];
  const currentBlock = data[index] || {};
  const {
    title = '',
    placeholder = null
  } = universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCKS"].find(block => block.type === type) || {};
  const readOnlyBlocks = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NUMBER, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].TEXT, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].EMAIL, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].LINK, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].RICH_TEXT, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].DATE];
  /**
   * Form sequence values are always
   * required and can not be disabled below.
   */

  const requiredBlocks = [...readOnlyBlocks, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].SINGLE_SELECTION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].MULTIPLE_SELECTION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BOUNDING_BOXES];
  const multiBlocks = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].SINGLE_SELECTION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].MULTIPLE_SELECTION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].FORM_SEQUENCE, universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BOUNDING_BOXES];
  const isReadOnly = readOnlyBlocks.includes(type) && !_optionalChain([data, 'access', _ => _[index], 'optionalAccess', _2 => _2[type], 'optionalAccess', _3 => _3.is_required]);
  const isRequired = requiredBlocks.includes(type) && !_optionalChain([data, 'access', _4 => _4[index], 'optionalAccess', _5 => _5[type], 'optionalAccess', _6 => _6.read_only]);
  const isExtendedType = multiBlocks.includes(type);
  const hasPlaceholder = type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY && !isExtendedType && type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].TEXT_SEQUENCE || type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION || type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BOUNDING_BOXES;
  const allowEdits = type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION;
  const hasErrors = errors ? Object.values(errors).length > 0 : false;

  const blockError = errors.data && (_optionalChain([errors, 'access', _7 => _7.data, 'access', _8 => _8[index], 'optionalAccess', _9 => _9.id]) || _optionalChain([errors, 'access', _10 => _10.data, 'access', _11 => _11[index], 'optionalAccess', _12 => _12.name]) || _optionalChain([errors, 'access', _13 => _13.data, 'access', _14 => _14[index], 'optionalAccess', _15 => _15[type], 'optionalAccess', _16 => _16.placeholder]) || _optionalChain([errors, 'access', _17 => _17.data, 'access', _18 => _18[index], 'optionalAccess', _19 => _19[type], 'optionalAccess', _20 => _20.data]) || _optionalChain([errors, 'access', _21 => _21.data, 'access', _22 => _22[index], 'optionalAccess', _23 => _23[type], 'optionalAccess', _24 => _24.options])) || errors && _optionalChain([errors, 'access', _25 => _25[index], 'optionalAccess', _26 => _26.id]);

  const idError =
  /**
   * TODO: Use Formiks `touched` field
   * once we are able to hook up `NewBlockModal`
   * to `QueueBuilder`. i.e. currently we are
   * portal'ing outside `form`.
   */
  currentBlock.id !== undefined && (errors.data && _optionalChain([errors, 'access', _27 => _27.data, 'access', _28 => _28[index], 'optionalAccess', _29 => _29.id]) || errors && _optionalChain([errors, 'access', _30 => _30[index], 'optionalAccess', _31 => _31.id]));

  const question = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  }, "Label"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, "Required")); // eslint-disable-next-line

  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (isNew) {
      arrayHelpers.remove(index);
    } else {
      setFieldValue(`data[${index}]`, currentBlock, false);
    }

    closePortal();
  }, []); // eslint-disable-next-line

  const onSave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (isNew) {
      setFieldValue(`data[${index}].isNew`, undefined);
    }

    setFieldValue(`data[${index}][${type}].history`, []);
    closePortal();
  }, []); // eslint-disable-next-line

  const onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(result => {
    const {
      destination,
      source,
      draggableId
    } = result;

    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const changedItem = type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].FORM_SEQUENCE ? data[index][type].data[draggableId] : data[index][type].options[draggableId];
    const newList = type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].FORM_SEQUENCE ? data[index][type].data : data[index][type].options;
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, changedItem);
    setFieldValue(type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].FORM_SEQUENCE ? data[index][type].data : data[index][type].options, newList);
  }, [data, index]);
  const [userHasChangedIdentifier, setUserHasChangedIdentifier] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onIdentifierChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;
    setFieldValue(`data[${index}].id`, value);
    setUserHasChangedIdentifier(false);

    if (value != '') {
      setUserHasChangedIdentifier(true);
    }
  }, []);

  const onPlaceholderChange = (e, setFieldValue) => {
    const {
      value
    } = e.target;
    setFieldValue(`data[${index}].${[type]}.placeholder`, value);
  };

  const onRichTextFormatChange = (e, setFieldValue) => {
    const {
      value
    } = e.target;
    setFieldValue(`data[${index}][${type}].format`, value.toLowerCase());
  };

  const {
    togglePortal,
    originRef,
    menuPortal,
    menuProps
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    parentId: 'portal'
  });
  const escape = Object(_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_19__["default"])('Escape');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (escape) {
      if (isNew) {
        return () => {
          arrayHelpers.remove(index);
        };
      } else {
        return () => {
          onClose();
        };
      }
    }
  }, [escape]);

  const menuItems = arrayHelpers => {
    return [{
      label: 'Text',
      onClick: () => arrayHelpers.push({
        id: 'text_id',
        name: 'Text Question',
        type: 'text',
        text: {}
      })
    }, {
      label: 'Email',
      onClick: () => arrayHelpers.push({
        id: 'email_id',
        name: 'Email Question',
        type: 'email',
        email: {}
      })
    }, {
      label: 'Number',
      onClick: () => arrayHelpers.push({
        id: 'number_id',
        name: 'Number Question',
        type: 'number',
        number: {}
      })
    }, {
      label: 'Link',
      onClick: () => arrayHelpers.push({
        id: 'link_id',
        name: 'Link Question',
        type: 'link',
        link: {}
      })
    }, {
      label: 'Binary',
      onClick: () => arrayHelpers.push({
        id: 'binary_id',
        name: 'Binary Question',
        type: 'binary',
        binary: {}
      })
    }, {
      label: 'Single Selection',
      onClick: () => arrayHelpers.push({
        id: 'single_selection_id',
        name: 'Single Selection Question',
        type: 'single_selection',
        single_selection: {
          options: [{
            id: 'option_1',
            name: 'Option 1'
          }, {
            id: 'option_2',
            name: 'Option 2'
          }, {
            id: 'option_3',
            name: 'Option 3'
          }]
        }
      })
    }, {
      label: 'Multiple Selection',
      onClick: () => arrayHelpers.push({
        id: 'multiple_selection_id',
        name: 'Multiple Selection Question',
        type: 'multiple_selection',
        multiple_selection: {
          options: [{
            id: 'option_1',
            name: 'Option 1'
          }, {
            id: 'option_2',
            name: 'Option 2'
          }, {
            id: 'option_3',
            name: 'Option 3'
          }]
        }
      })
    }];
  };

  const idInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const nameInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  if (nameInput.current) {
    if (nameInput.current.value === '') {
      nameInput.current.value = _optionalChain([values, 'optionalAccess', _32 => _32.data, 'access', _33 => _33[index], 'optionalAccess', _34 => _34.name]) || '';
    }
  }

  if (idInput.current) {
    if (idInput.current.value === '') {
      idInput.current.value = _optionalChain([values, 'optionalAccess', _35 => _35.data, 'access', _36 => _36[index], 'optionalAccess', _37 => _37.id]) || '';
    }
  }

  const [userHasChangedName, setUserHasChangedName] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onNameBlur = (e, setFieldValue) => {
    const {
      value
    } = e.target;
    setFieldValue(`data[${index}].name`, value);
    if (!isNew || userHasChangedIdentifier) return;
    const slugId = Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_14__["default"])(value.substring(0, 30));

    if (userHasChangedName) {
      setFieldValue(`data[${index}].id`, slugId);
    }
  };

  const onNameChange = e => {
    if (!userHasChangedName) setUserHasChangedName(true);
    const {
      value
    } = e.target;
    if (!isNew || userHasChangedIdentifier) return;
    const slugId = Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_14__["default"])(value.substring(0, 30));
    idInput.current.value = slugId;

    if (!isValid) {
      setFieldValue(`data[${index}].name`, value);
      setFieldValue(`data[${index}].id`, slugId);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
    isExtendedType: isExtendedType,
    id: "parentId",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    }
  }, `${title} Settings`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    vertAlign: type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    }
  }, type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY ? question : 'Label'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "text",
    ref: nameInput,
    onBlur: e => onNameBlur(e, setFieldValue),
    onChange: onNameChange,
    autoFocus: true,
    placeholder: type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY ? `${type} question` : `${type} Label`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    }
  })), type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BINARY && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    }
  }, "Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    }
  }, "Displayed to users as this block's title"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    }
  }, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    error: idError,
    hideErrorMessage: true,
    name: `data[${index}].id`,
    ref: idInput,
    type: "text",
    onChange: e => onIdentifierChange(e),
    placeholder: `${type}-id`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    }
  }, "Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    }
  }, "A unique identifier for this block in the underlying queue data schema"))), hasPlaceholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    }
  }, "Placeholder"), type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].TEXT && type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION && type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].DATE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: `data[${index}].${[type]}.placeholder`,
    type: blockFormat[type] || blockFormat.default,
    onChange: e => {
      onPlaceholderChange(e, setFieldValue);
    },
    error: errors.data && _optionalChain([errors, 'access', _38 => _38.data, 'access', _39 => _39[index], 'optionalAccess', _40 => _40[type], 'optionalAccess', _41 => _41.placeholder]),
    hideErrorMessage: true,
    value: _optionalChain([values, 'optionalAccess', _42 => _42.data, 'access', _43 => _43[index], 'optionalAccess', _44 => _44[type], 'optionalAccess', _45 => _45.placeholder]),
    placeholder: placeholder,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].DATE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_16__["default"], {
    name: `data[${index}].${[type]}.placeholder`,
    value: _optionalChain([values, 'optionalAccess', _46 => _46.data, 'access', _47 => _47[index], 'optionalAccess', _48 => _48[type], 'optionalAccess', _49 => _49.placeholder]) || '',
    placeholder: placeholder,
    setFieldValue: setFieldValue,
    error: errors.data && _optionalChain([errors, 'access', _50 => _50.data, 'access', _51 => _51[index], 'optionalAccess', _52 => _52[type], 'optionalAccess', _53 => _53.placeholder]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
    hideErrorMessage: true,
    value: _optionalChain([values, 'optionalAccess', _54 => _54.data, 'access', _55 => _55[index], 'optionalAccess', _56 => _56[type], 'optionalAccess', _57 => _57.placeholder]) || '',
    placeholder: placeholder,
    name: `data[${index}].${[type]}.placeholder`,
    error: errors.data && _optionalChain([errors, 'access', _58 => _58.data, 'access', _59 => _59[index], 'optionalAccess', _60 => _60[type], 'optionalAccess', _61 => _61.placeholder]),
    onChange: handleChange,
    maxRows: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    }
  }, "Optional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    }
  }, "Used as a sample value when creating or editing a queue"))), hasPlaceholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    }
  }, "Use Placeholder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}].${[type]}.use_placeholder`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
    type: "checkbox",
    id: "use_placeholder",
    checked: field.value,
    label: 'Fallback to using the placeholder when no value is provided in the task',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    }
  }))))), isReadOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    }
  }, "Read-only"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}].${[type]}.read_only`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
    type: "checkbox",
    id: "read_only",
    checked: field.value,
    label: 'Makes this block’s value unmodifiable after task creation',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    }
  }))))), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    }
  }, "Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}].${[type]}.is_required`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
    type: "checkbox",
    id: "is_required",
    checked: field.value,
    label: "Prevents tasks with an empty value from being submitted.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    }
  }))))), allowEdits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    }
  }, "Enable Text Editing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}].${[type]}.allow_edits`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
    type: "checkbox",
    id: "allow_edits",
    checked: field.value,
    label: 'Allows the text content of this block to be edited in task mode.',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    }
  }))))), type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].TEXT_SEQUENCE && [{
    setting: 'ordering_disabled',
    label: 'Disable Ordering',
    fieldLabel: 'Prevents re-ordering of fields in tasks.'
  }, {
    setting: 'delete_disabled',
    label: 'Disable Deletes',
    fieldLabel: 'Prevents deletion of fields in tasks.'
  }, {
    setting: 'edit_disabled',
    label: 'Disable Edits',
    fieldLabel: 'Prevents editing of fields in tasks.'
  }].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    key: item.setting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    }
  }, item.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}].${[type]}[${item.setting}]`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    }
  }, ({
    field
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, field), {}, {
    type: "checkbox",
    id: item.setting,
    checked: field.value,
    label: item.fieldLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    }
  })))))), type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].RICH_TEXT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    }
  }, "format"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InlineWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: `data[${index}][${type}].format`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    }
  }, ({
    field
  }) => ['HTML', 'Markdown'].map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, field), {}, {
    key: optionIndex,
    id: `${index}-${optionIndex}`,
    checked: field.value === option.toLowerCase(),
    value: option,
    label: option,
    noShadow: true,
    onChange: e => {
      onRichTextFormatChange(e, setFieldValue);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    }
  })))))))), (type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].SINGLE_SELECTION || type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].MULTIPLE_SELECTION || type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].BOUNDING_BOXES || type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    style: {
      marginLeft: 15,
      overflow: 'auto',
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    name: `data[${index}][${type}].options`,
    render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Selection__WEBPACK_IMPORTED_MODULE_18__["default"], {
      index: index,
      type: type,
      onDragEnd: onDragEnd,
      data: data,
      handleChange: handleChange,
      arrayHelpers: arrayHelpers,
      setFieldValue: setFieldValue,
      errors: errors,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    }
  })), type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].FORM_SEQUENCE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    style: {
      marginLeft: 15,
      overflow: 'auto',
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    name: `data[${index}][${type}].data`,
    render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sequence__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onDragEnd: onDragEnd,
      index: index,
      type: type,
      data: data,
      handleChange: handleChange,
      arrayHelpers: arrayHelpers,
      originRef: originRef,
      togglePortal: togglePortal,
      setFieldValue: setFieldValue,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677
      }
    }), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      menuProps: menuProps,
      menuItems: menuItems(arrayHelpers),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalFooter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "submit",
    onClick: onSave,
    disabled: blockError || hasErrors,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "button",
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701
    }
  }, "Cancel")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewBlockModal);

/***/ }),

/***/ "./src/universal/modules/queue/components/QueueBuilder.tsx":
/*!*****************************************************************!*\
  !*** ./src/universal/modules/queue/components/QueueBuilder.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var uuidjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuidjs */ "./node_modules/uuidjs/src/uuid.js");
/* harmony import */ var uuidjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuidjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_utils_getBlockDims__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/getBlockDims */ "./src/universal/utils/getBlockDims.ts");
/* harmony import */ var _client_hooks_useModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../client/hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var _NewBlockModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewBlockModal */ "./src/universal/modules/queue/components/NewBlockModal.tsx");
/* harmony import */ var _BuilderHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuilderHeader */ "./src/universal/modules/queue/components/BuilderHeader.tsx");
/* harmony import */ var universal_components_BlockComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/BlockComponent */ "./src/universal/components/BlockComponent.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_components_RGL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/components/RGL */ "./src/universal/components/RGL.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var universal_components_BlockWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/BlockWrapper */ "./src/universal/components/BlockWrapper.tsx");
/* harmony import */ var client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/ConfirmationModal */ "./src/client/components/ConfirmationModal.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/QueueBuilder.tsx";

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
/**
* FIXME: Issue with firefox when
* droped on placeholder.
* https://github.com/STRML/react-grid-layout/pull/1053
*/



















const FormContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
  target: "e16r3flq0"
})({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_11__["PALETTE"].RGL_BACKGROUND
});

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq1"
})({
  name: "1lc15sc",
  styles: "width:100%;display:flex;flex-direction:row;height:calc(100vh - 50px);overflow:scroll;"
});

const DraggableEl = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq2"
})({
  name: "ggez01",
  styles: "text-align:center;border:1px solid #e8eCee;background-color:#fff;margin:5px 10px;padding:10px;min-height:72px;border-radius:4px;display:flex;flex-direction:row;align-items:center;cursor:grab;:hover{border-color:#d1d9dd;}"
});

const IconBox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq3"
})(({
  backgroundColor
}) => ({
  backgroundColor,
  borderRadius: 5,
  marginRight: 10,
  padding: 5,
  width: 48,
  minWidth: 48
}));

const EmptyState = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq4"
})({
  name: "152sjdr",
  styles: "display:flex;flex-direction:column;height:100%;width:100%;align-items:center;justify-content:center;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
  target: "e16r3flq5"
})({
  name: "13f9alf",
  styles: "display:block;font-size:38px;color:#fff;"
});

const BlockInfo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq6"
})({
  name: "207d6f",
  styles: "display:flex;flex-direction:column;text-align:left;"
});

const Note = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16r3flq7"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_11__["PALETTE"].TEXT_GRAY,
  fontSize: 12,
  marginTop: 2.5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
});

const BlockContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq8"
})({
  name: "161ez0w",
  styles: "border-right:1px solid #e8eCee;background-color:#f6f8f9;height:100%;overflow:scroll;width:350px;display:flex;flex-direction:column;position:sticky;top:0px;"
});

const BlockArea = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq9"
})({
  name: "3j596c",
  styles: "display:flex;flex-direction:column;height:100%;width:100%;"
});

const PrimaryText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq10"
})({
  height: 50,
  fontWeight: 600,
  padding: 15,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_11__["PALETTE"].TEXT_MAIN
});

const SecondaryText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16r3flq11"
})({
  height: 50,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_11__["PALETTE"].TEXT_GRAY,
  width: '30%',
  textAlign: 'center'
});

const NewQueue = props => {
  const {
    queue,
    onSubmitHandler,
    orgId
  } = props;
  const [isDragging, setIsDragging] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    id: queueId
  } = queue || {};
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [currentBlockId, setCurrentBlockId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const [droppingItem, setDroppingItem] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [queueHasChanges, setQueueHasChanges] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    modalPortal,
    togglePortal,
    closePortal
  } = Object(_client_hooks_useModal__WEBPACK_IMPORTED_MODULE_7__["default"])({
    noClose: true
  });
  const {
    modalPortal: confirmConfirmation,
    togglePortal: toggleConfirmation,
    closePortal: closeConfirmation
  } = Object(_client_hooks_useModal__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const initialValues = queueId ? queue : {
    name: 'Queue Title',
    data: []
  };
  const cancelUrl = queueId ? `/queues/${queueId}` : `/queues`;
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((layout, item, arrayHelpers, setFieldValue, data) => {
    const {
      i
    } = item;

    if (i) {
      const newData = data.map(item => {
        const newLayout = layout.filter(f => f.i === item.layout.i)[0];
        return _objectSpread(_objectSpread({}, item), {}, {
          layout: newLayout
        });
      });
      setFieldValue(`data`, newData);
      const {
        type
      } = droppingItem || {};
      const isExtendedType = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BOUNDING_BOXES, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].MULTIPLE_SELECTION].includes(type);
      const usesPlaceholder = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].EMAIL, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].EMBED, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].IMAGE, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].LINK, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NUMBER, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].RICH_TEXT, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].TEXT, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].VIDEO, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].DATE].includes(type);
      const formSequence = {
        [type]: {
          is_required: true,
          history: [],
          data: []
        }
      };
      const textSequence = {
        [type]: {
          placeholder: [],
          ordering_disabled: false,
          delete_disabled: false,
          edit_disabled: false
        }
      };
      const singleOrMultiSelection = {
        [type]: {
          options: [{
            id: 'option_1',
            name: 'Option 1'
          }, {
            id: 'option_2',
            name: 'Option 2'
          }, {
            id: 'option_3',
            name: 'Option 3'
          }]
        }
      };
      const nameEntitySelection = {
        [type]: {
          options: [{
            id: 'option_1',
            name: 'Option 1'
          }, {
            id: 'option_2',
            name: 'Option 2'
          }],
          use_placeholder: false,
          allow_edits: false
        }
      };
      const boundingBoxSelection = {
        [type]: {
          options: [{
            id: 'option_1',
            name: 'Option 1'
          }, {
            id: 'option_2',
            name: 'Option 2'
          }]
        }
      };
      const otherTypes = {
        [type]: _objectSpread(_objectSpread({}, type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].RICH_TEXT && {
          format: 'html'
        }), usesPlaceholder && {
          use_placeholder: false
        })
      };
      let options = type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].FORM_SEQUENCE ? formSequence : isExtendedType ? singleOrMultiSelection : otherTypes;

      if (type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION) {
        options = nameEntitySelection;
      }

      if (type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BOUNDING_BOXES) {
        options = boundingBoxSelection;
      }

      if (type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].TEXT_SEQUENCE) {
        options = textSequence;
      }

      const newBlock = _objectSpread({
        isNew: true,
        type,
        _id: i,
        id: `${type}_id`,
        name: `${universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCKS"].filter(b => b.type === type)[0].title} Block Title`,
        layout: _objectSpread(_objectSpread({}, item), {}, {
          isDraggable: undefined
        })
      }, options);

      arrayHelpers.push(newBlock);
      setCurrentBlockId(newBlock._id);
      setIsDragging(false);
      togglePortal();
    } else {
      return;
    }
  }, [isDragging, droppingItem]);
  const onLayoutChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((layout, data, setFieldValue) => {
    const newData = data.map(item => {
      const newLayout = layout.filter(f => f.i === item.layout.i)[0];
      return _objectSpread(_objectSpread({}, item), {}, {
        layout: newLayout
      });
    });
    setFieldValue(`data`, newData);
  }, [isDragging, droppingItem]);
  const onMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setIsDragging(true);
    setQueueHasChanges(true);
  }, []);
  const onMouseUp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setIsDragging(false);
  }, []);
  const onDragStart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.dataTransfer.setData('text/plain', '');
    e.target.style.cursor = 'grabbing';
    const {
      type
    } = e.target.dataset || {};
    const elLayout = Object(universal_utils_getBlockDims__WEBPACK_IMPORTED_MODULE_6__["default"])(type);
    setDroppingItem(Object.assign({}, {
      i: uuidjs__WEBPACK_IMPORTED_MODULE_3___default.a.genV4().toString()
    }, elLayout, {
      type
    }));
  }, [isDragging, droppingItem]);
  const onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setIsDragging(false);
    e.target.style.cursor = 'grab';
  }, [isDragging, droppingItem]); // memoize

  const renderBlocks = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback((values, arrayHelpers, handleChange, setFieldValue, errors) => {
    return values.data.map((block, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: _optionalChain([block, 'access', _ => _.layout, 'optionalAccess', _2 => _2.i]) || block._id,
      type: block.type,
      'data-grid': block.layout,
      index: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      index: idx,
      handleChange: e => {
        setQueueHasChanges(true);
        handleChange(e);
      },
      isEditing: true,
      setFieldValue: setFieldValue,
      block: block,
      errors: errors,
      onDelete: () => {
        arrayHelpers.remove(idx);
        setIsDragging(false);
      },
      onEdit: () => {
        setCurrentBlockId(block._id);
        togglePortal();
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      }
    })));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: initialValues,
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_14__["queueSchema"],
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: async values => {
      try {
        await onSubmitHandler(values, orgId);
        setQueueHasChanges(false);
      } catch (e) {
        setQueueHasChanges(true);
      }
    },
    enableReinitialize: true,
    innerRef: formRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    }
  }, ({
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
    isValid
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BuilderHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      queueId: queueId,
      setQueueHasChanges: setQueueHasChanges,
      queueHasChanges: queueHasChanges,
      toggleConfirmation: toggleConfirmation,
      handleChange: handleChange,
      handleBlur: handleBlur,
      value: values.name,
      error: Boolean(touched.name && errors.name),
      isValid: isValid,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["FieldArray"], {
      name: "data",
      render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockContainer, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrimaryText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, "Blocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockArea, {
        onDragOver: e => e.preventDefault(),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCKS"].map(({
        title,
        description,
        type,
        placeholder,
        iconColor,
        icon
      }, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DraggableEl, {
        'data-placeholder': placeholder,
        'data-type': type,
        draggable: true,
        key: idx,
        unselectable: "on",
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconBox, {
        backgroundColor: iconColor,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockInfo, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('b', {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Note, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, description)))))), !values.data.length && !isDragging ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyState, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrimaryText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, "Drag a Block"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondaryText, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, "This queue is currently empty. Drag and drop any block into the canvas to get started.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_RGL__WEBPACK_IMPORTED_MODULE_13__["default"], {
        droppingItem: droppingItem,
        isDraggable: true,
        isDroppable: true,
        isResizable: true,
        onDrop: (layout, item) => onDrop(layout, item, arrayHelpers, setFieldValue, _optionalChain([values, 'optionalAccess', _3 => _3.data])),
        onDragStart: () => {
          setIsDragging(true);
          setQueueHasChanges(true);
        },
        onLayoutChange: layout => onLayoutChange(layout, _optionalChain([values, 'optionalAccess', _4 => _4.data]), setFieldValue),
        layouts: values.data.map(block => block.layout),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, renderBlocks(values, arrayHelpers, handleChange, setFieldValue, errors)), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        closePortal: closePortal,
        setFieldValue: (field, data, hasChanges = true) => {
          if (hasChanges) {
            setQueueHasChanges(true);
            setFieldValue(field, data);
          } else {
            setQueueHasChanges(false);
            setFieldValue(field, data);
          }
        },
        values: values,
        currentBlockId: currentBlockId,
        handleChange: e => {
          setQueueHasChanges(true);
          handleChange(e);
        },
        arrayHelpers: arrayHelpers,
        errors: errors,
        isValid: isValid,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      })), confirmConfirmation( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
        closePortal: closeConfirmation,
        label: `Exit without saving`,
        cancelLabel: `Save and Exit`,
        message: `You have made changes but they haven't been saved.`,
        onConfirm: () => {
          history.replace(cancelUrl);
        },
        onCancel: async () => {
          if (formRef.current) {
            _optionalChain([formRef, 'optionalAccess', _5 => _5.current, 'optionalAccess', _6 => _6.handleSubmit, 'call', _7 => _7()]);
          } // await onSave(values)

        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        }
      }))),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NewQueue);

/***/ }),

/***/ "./src/universal/modules/queue/components/Selection.tsx":
/*!**************************************************************!*\
  !*** ./src/universal/modules/queue/components/Selection.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selection; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var client_components_CSVInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/CSVInput */ "./src/client/components/CSVInput.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_slugify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/slugify */ "./src/universal/utils/slugify.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/utils/getItemStyle */ "./src/universal/utils/getItemStyle.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/Selection.tsx";

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















const RemoveButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "ex8hmc60"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].PRIMARY_MAIN,
  fontWeight: '500',
  marginTop: '5px',
  ':hover': {
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].ERROR_MAIN
  }
});

const InputWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc61"
})();

const ContentWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc62"
})({
  name: "1tft8cq",
  styles: "display:grid;grid-template-columns:1fr auto auto 1fr;align-items:center;grid-gap:10px;"
});

const CSVWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc63"
})({
  name: "10mctww",
  styles: "margin:10px 15px;"
});

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc64"
})({
  name: "1hb0vzk",
  styles: "padding:5px 0;display:flex;flex-direction:column;"
});

const SelectionTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc65"
})({
  name: "63mr1",
  styles: "display:flex;margin:5px 15px;flex-direction:row;justify-content:space-between;"
});

const ActionsBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ex8hmc66"
})({
  name: "lrhmny",
  styles: "margin:5px 15px;line-height:32px;display:grid;grid-template-columns:1fr 1fr;"
});

const ImportText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "ex8hmc67"
})({
  color: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].PRIMARY_MAIN}`,
  fontSize: '15px',
  fontWeight: 500,
  outline: 0,
  cursor: 'pointer',
  justifySelf: 'end'
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
  target: "ex8hmc68"
})("visibility:hidden;", ContentWrapper, ":hover &{visibility:visible;}", ContentWrapper, ".focused &{visibility:visible;}");

const SelectionOption = ({
  provided,
  snapshot,
  optIdx,
  data,
  index,
  type,
  setFieldValue,
  arrayHelpers,
  errors,
  minOptions,
  optionRefs,
  focusedOption,
  setFocusedOption
}) => {
  const {
    isNew
  } = data[index];
  const [identifier, setIdentifier] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data[index][type].options[optIdx].id);
  const [identifierChanged, setIdentifierChanged] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data[index][type].options[optIdx].name);
  const [_idField, _idMeta, idHelper] = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useField"])(`data[${index}][${type}].options[${optIdx}].id`);
  const canSlugify = isNew || data[index][type].options[optIdx].isNew;

  const setTouched = () => {
    idHelper.setTouched(true, true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (_optionalChain([optionRefs, 'access', _2 => _2.current, 'access', _3 => _3[focusedOption], 'optionalAccess', _4 => _4.current])) {
      optionRefs.current[focusedOption].current.focus();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTouched();
  }, [identifier]);

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      arrayHelpers.insert(optIdx + 1, {
        id: '',
        name: ''
      });
      setFocusedOption(optIdx + 1);
      e.preventDefault();
    }
  };

  const setFocusStyles = (elements, action) => {
    elements.forEach(id => {
      const element = document.getElementById(id);

      _optionalChain([element, 'optionalAccess', _5 => _5.classList, 'access', _6 => _6[action], 'call', _7 => _7('focused')]);
    });
  };

  const onNameBlur = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (canSlugify || !identifierChanged) {
      setFieldValue(`data[${index}][${type}].options[${optIdx}].id`, identifier);
    }

    setFieldValue(`data[${index}][${type}].options[${optIdx}].name`, name);
    setFocusStyles([`selection-wrapper-${optIdx}`], 'remove');
  }, [name, identifier]);

  const onIdBlur = e => {
    setFieldValue(`data[${index}][${type}].options[${optIdx}].id`, identifier);
    setIdentifier(identifier);
  };

  const onNameChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;
    setName(value);
    if (!canSlugify) return;

    if (!identifierChanged) {
      const slugId = Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_10__["default"])(value.substring(0, 30));
      setIdentifier(slugId);
    }
  }, [name, identifier]);
  const onIdentifierChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;

    if (value != '') {
      setIdentifierChanged(true);
    }

    setIdentifier(value);
  }, [identifier]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, _objectSpread(_objectSpread({}, provided.draggableProps), {}, {
    ref: provided.innerRef,
    style: Object(universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_12__["default"])(snapshot.isDragging, provided.draggableProps.style),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    id: `selection-wrapper-${optIdx}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    }
  }), "drag_indicator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: optionRefs.current[optIdx],
    name: `data[${index}][${type}].options[${optIdx}].name`,
    type: "text",
    onChange: onNameChange,
    value: name,
    placeholder: 'Label',
    onFocus: e => {
      setFocusStyles([`selection-wrapper-${optIdx}`], 'add');
    },
    onBlur: onNameBlur,
    onKeyDown: onKeyDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    id: `selection-input-id-${optIdx}`,
    as: universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"],
    error: errors && errors[optIdx] && errors[optIdx][type] && errors[optIdx][type].options && errors[optIdx][type].options.id,
    validate: value => {
      let error;

      if (value === '' && identifier === '') {
        error = 'Field ID is required';
      }

      return error;
    },
    value: identifier,
    name: `data[${index}][${type}].options[${optIdx}].id`,
    type: "text",
    onChange: onIdentifierChange,
    placeholder: "Identifier",
    onBlur: onIdBlur,
    hideErrorMessage: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  })), data[index][type].options.length > minOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RemoveButton, {
    type: "button",
    onClick: () => arrayHelpers.remove(optIdx),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    }
  }, "close"))));
};

function Selection(props) {
  const {
    onDragEnd,
    data,
    index,
    type,
    handleChange,
    arrayHelpers,
    setFieldValue,
    errors
  } = props;
  const minOptions = type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_13__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION ? 1 : 2;
  const [view, setView] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('manual');
  const [canImport, setCanImport] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [csvOptions, setCsvOptions] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleCsvImport = () => {
    const previousOptions = data[index][type].options.map(i => i.name);
    previousOptions.forEach((_v, idx) => {
      arrayHelpers.remove(idx);
    });
    csvOptions.forEach((value, idx) => {
      arrayHelpers.replace(idx, {
        id: Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_10__["default"])(value.substring(0, 30)),
        name: value
      });
    });
    setView('manual');
  };

  const optionRefs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);
  const [focusedOption, setFocusedOption] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  const dataLength = data[index][type].options.length;

  if (optionRefs.current.length !== dataLength) {
    if (focusedOption !== -1) {
      optionRefs.current = [...optionRefs.current.slice(0, focusedOption), null, ...optionRefs.current.slice(focusedOption)];
    }

    optionRefs.current = Array(dataLength).fill().map((_, i) => optionRefs.current[i] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Droppable"], {
    droppableId: 'choiceDroppable',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    }
  }, provided => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
    ref: provided.innerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectionTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('b', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    }
  }, 'Options')), view === 'manual' && data[index][type].options.map((option, optIdx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
    key: `${option.name}-${optIdx}`,
    draggableId: String(optIdx),
    index: optIdx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    }
  }, (provided, snapshot) => {
    const usePortal = snapshot.isDragging;
    const child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectionOption, {
      provided: provided,
      snapshot: snapshot,
      optIdx: optIdx,
      data: data,
      index: index,
      type: type,
      setFieldValue: setFieldValue,
      handleChange: handleChange,
      arrayHelpers: arrayHelpers,
      errors: errors,
      minOptions: minOptions,
      optionRefs: optionRefs,
      focusedOption: focusedOption,
      setFocusedOption: setFocusedOption,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      }
    });

    if (!usePortal) {
      return child;
    }

    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(child, portal);
  })), provided.placeholder, view === 'import' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CSVWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_CSVInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: `Enter a list of comma-separated options to import`,
    setCanImport: setCanImport,
    setOptions: setCsvOptions,
    initialValue: _optionalChain([data, 'access', _8 => _8[index], 'access', _9 => _9[type], 'access', _10 => _10.options, 'access', _11 => _11.map, 'call', _12 => _12(i => i.name), 'optionalAccess', _13 => _13.join, 'call', _14 => _14(',')]) || '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    }
  })), view === 'manual' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionsBlock, {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    onClick: () => {
      arrayHelpers.push({
        id: '',
        name: '',
        isNew: true
      });
      setFocusedOption(dataLength);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }, "Add option"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImportText, {
    onClick: e => setView('import'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    }
  }, "Batch Import...")), view === 'import' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionsBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    disabled: !canImport || !csvOptions,
    onClick: handleCsvImport,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    }
  }, "Import"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImportText, {
    onClick: e => setView('manual'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    }
  }, "Add Manually...")))));
}

/***/ }),

/***/ "./src/universal/modules/queue/components/Sequence.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/modules/queue/components/Sequence.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sequence; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _NewBlockModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewBlockModal */ "./src/universal/modules/queue/components/NewBlockModal.tsx");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_slugify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/slugify */ "./src/universal/utils/slugify.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var _BinaryMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BinaryMenu */ "./src/universal/modules/queue/components/BinaryMenu.tsx");
/* harmony import */ var _SequenceSelectionOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SequenceSelectionOptions */ "./src/universal/modules/queue/components/SequenceSelectionOptions.tsx");
/* harmony import */ var universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/utils/getItemStyle */ "./src/universal/utils/getItemStyle.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/Sequence.tsx";

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
















const IconButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "e1qua3700"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].PRIMARY_MAIN
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1qua3701"
})({
  name: "1ktdlux",
  styles: "display:grid;grid-template-columns:100px 1fr 10px;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1qua3702"
})({
  padding: '10px 0',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `0.5px solid #eceef0`
});

const Type = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1qua3703"
})({
  fontWeight: 500,
  fontSize: 12,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].PRIMARY_MAIN,
  textTransform: 'capitalize'
});

const FieldTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1qua3704"
})({
  marginRight: -5,
  display: 'flex',
  justifyContent: 'space-between'
});

function Sequence(props) {
  const {
    originRef,
    togglePortal,
    onDragEnd,
    data,
    index,
    type,
    handleChange,
    arrayHelpers,
    setFieldValue
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Droppable"], {
    droppableId: 'choiceDroppable',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, provided => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
    ref: provided.innerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('b', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, 'Blocks'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "button",
    ref: originRef,
    onClick: togglePortal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "+ Add type")), data[index][type].data.map((sequence, seqIdx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    key: seqIdx,
    draggableId: String(seqIdx),
    index: seqIdx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, _objectSpread(_objectSpread({}, provided.draggableProps), {}, {
    ref: provided.innerRef,
    style: Object(universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_14__["default"])(snapshot.isDragging, provided.draggableProps.style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }), data[index][type].data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Type, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _optionalChain([universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCKS"], 'access', _ => _.filter, 'call', _2 => _2(f => f.type === _optionalChain([sequence, 'optionalAccess', _3 => _3.type])), 'access', _4 => _4[0], 'optionalAccess', _5 => _5.title])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, (sequence.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].BINARY || sequence.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].SINGLE_SELECTION) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    type: "button",
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump`, _optionalChain([data, 'access', _6 => _6[index], 'access', _7 => _7[type], 'access', _8 => _8.data, 'access', _9 => _9[seqIdx], 'optionalAccess', _10 => _10.logic_jump]) ? null : {}),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontSize: 15,
      color: _optionalChain([data, 'access', _11 => _11[index], 'access', _12 => _12[type], 'access', _13 => _13.data, 'access', _14 => _14[seqIdx], 'optionalAccess', _15 => _15.logic_jump]) ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].PRIMARY_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, "call_split")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: `data[${index}][${type}].data[${seqIdx}].name`,
    type: "text",
    onChange: e => {
      handleChange(e);
      const {
        value
      } = e.target;
      const slugId = Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_10__["default"])(value.substring(0, 30));
      setFieldValue(`data[${index}][${type}].data[${seqIdx}].id`, slugId);
    },
    value: data[index][type].data[seqIdx].name,
    placeholder: 'Name',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    type: "button",
    onClick: () => arrayHelpers.remove(seqIdx),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, "close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: `data[${index}][${type}].data[${seqIdx}].id`,
    type: "text",
    onChange: handleChange,
    value: data[index][type].data[seqIdx].id,
    placeholder: 'Identifier',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }), "drag_indicator")), data[index][type].data[seqIdx].type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].BINARY && data[index][type].data.length > 1 && _optionalChain([data, 'access', _16 => _16[index], 'access', _17 => _17[type], 'access', _18 => _18.data, 'access', _19 => _19[seqIdx], 'optionalAccess', _20 => _20.logic_jump]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BinaryMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: data,
    index: index,
    type: type,
    seqIdx: seqIdx,
    setFieldValue: setFieldValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }), (data[index][type].data[seqIdx].type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].SINGLE_SELECTION || data[index][type].data[seqIdx].type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].MULTIPLE_SELECTION) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    name: `data[${index}][${type}].data[${seqIdx}][${data[index][type].data[seqIdx].type}].options`,
    render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SequenceSelectionOptions__WEBPACK_IMPORTED_MODULE_13__["default"], {
      seqIdx: seqIdx,
      seqType: data[index][type].data[seqIdx].type,
      index: index,
      type: type,
      data: data,
      handleChange: handleChange,
      arrayHelpers: arrayHelpers,
      setFieldValue: setFieldValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  })))), provided.placeholder)));
}

/***/ }),

/***/ "./src/universal/modules/queue/components/SequenceSelectionOptions.tsx":
/*!*****************************************************************************!*\
  !*** ./src/universal/modules/queue/components/SequenceSelectionOptions.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selection; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _NewBlockModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewBlockModal */ "./src/universal/modules/queue/components/NewBlockModal.tsx");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_slugify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/slugify */ "./src/universal/utils/slugify.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var _SequenceSelectionOptionsMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SequenceSelectionOptionsMenu */ "./src/universal/modules/queue/components/SequenceSelectionOptionsMenu.tsx");
/* harmony import */ var universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/utils/getItemStyle */ "./src/universal/utils/getItemStyle.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/SequenceSelectionOptions.tsx";

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
/**
* https://github.com/atlassian/react-beautiful-dnd/issues/131
*/














const RemoveButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "ej7t5l80"
})({
  textAlign: 'end',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].PRIMARY_MAIN,
  fontWeight: '500',
  ':hover': {
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].ERROR_MAIN
  }
});

const FieldTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ej7t5l81"
})({
  name: "gg4vpm",
  styles: "display:flex;justify-content:space-between;"
});

const ButtonBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ej7t5l82"
})({
  name: "1tsaezp",
  styles: "display:flex;justify-content:flex-end;margin-right:10px;"
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ej7t5l83"
})({
  name: "1ktdlux",
  styles: "display:grid;grid-template-columns:100px 1fr 10px;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

function Selection(props) {
  const {
    data,
    index,
    type,
    seqIdx,
    handleChange,
    arrayHelpers,
    setFieldValue,
    seqType
  } = props; // eslint-disable-next-line

  const onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(result => {
    const {
      destination,
      source,
      draggableId
    } = result;

    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const changedItem = data[index][type].data[seqIdx][seqType].options[draggableId];
    const newList = data[index][type].data[seqIdx][seqType].options;
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, changedItem);
    setFieldValue(data[index][type].data[seqIdx][seqType].options, newList);
  }, [data, index]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Droppable"], {
    droppableId: 'optionsDroppable',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, provided => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
    ref: provided.innerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }), data[index][type].data[seqIdx][seqType].options.map((_option, optIdx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Draggable"], {
    key: optIdx,
    draggableId: String(optIdx),
    index: optIdx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.draggableProps), {}, {
    ref: provided.innerRef,
    style: Object(universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_11__["default"])(snapshot.isDragging, provided.draggableProps.style),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'Option'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: `data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].name`,
    type: "text",
    onChange: e => {
      handleChange(e);
      const {
        value
      } = e.target;
      const slugId = Object(universal_utils_slugify__WEBPACK_IMPORTED_MODULE_8__["default"])(value.substring(0, 30));
      setFieldValue(`data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].id`, slugId);
    },
    value: data[index][type].data[seqIdx][seqType].options[optIdx].name,
    placeholder: 'Option',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }), data[index][type].data[seqIdx][seqType].options.length > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RemoveButton, {
    type: "button",
    onClick: () => arrayHelpers.remove(optIdx),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].TEXT_MAIN
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, "close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, 'Identifier'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: `data[${index}][${type}].data[${seqIdx}][${seqType}].options[${optIdx}].id`,
    type: "text",
    onChange: handleChange,
    value: data[index][type].data[seqIdx][seqType].options[optIdx].id,
    placeholder: 'Option identifier',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].TEXT_MAIN
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }), "drag_indicator")), data[index][type].data.length > 1 && _optionalChain([data, 'access', _ => _[index], 'access', _2 => _2[type], 'access', _3 => _3.data, 'access', _4 => _4[seqIdx], 'optionalAccess', _5 => _5.logic_jump]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SequenceSelectionOptionsMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    setFieldValue: setFieldValue,
    data: data,
    type: type,
    index: index,
    seqIdx: seqIdx,
    seqType: seqType,
    optIdx: optIdx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  })))), provided.placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    onClick: () => {
      arrayHelpers.push({
        id: '',
        name: ''
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }, "Add option")));
}

/***/ }),

/***/ "./src/universal/modules/queue/components/SequenceSelectionOptionsMenu.tsx":
/*!*********************************************************************************!*\
  !*** ./src/universal/modules/queue/components/SequenceSelectionOptionsMenu.tsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var _NewBlockModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewBlockModal */ "./src/universal/modules/queue/components/NewBlockModal.tsx");
/* harmony import */ var _BinaryMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BinaryMenu */ "./src/universal/modules/queue/components/BinaryMenu.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/SequenceSelectionOptionsMenu.tsx";

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








const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14of4ve0"
})({
  name: "1ktdlux",
  styles: "display:grid;grid-template-columns:100px 1fr 10px;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

const SequenceSelectionOptionsMenu = props => {
  const {
    data,
    index,
    type,
    seqType,
    seqIdx,
    optIdx,
    setFieldValue
  } = props;
  const {
    togglePortal,
    originRef,
    menuPortal,
    menuProps
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_3__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__["MenuPosition"].UPPER_LEFT, {
    isDropdown: true,
    parentId: 'portal'
  });

  const selectedOption = _optionalChain([data, 'access', _ => _[index], 'access', _2 => _2[type], 'access', _3 => _3.data, 'access', _4 => _4[seqIdx], 'access', _5 => _5[seqType], 'access', _6 => _6.options, 'access', _7 => _7[optIdx], 'optionalAccess', _8 => _8.id]);

  const selectedValue = _optionalChain([data, 'access', _9 => _9[index], 'access', _10 => _10[type], 'access', _11 => _11.data, 'access', _12 => _12[seqIdx], 'optionalAccess', _13 => _13.logic_jump]) ? data[index][type].data[seqIdx].logic_jump[selectedOption] : null;
  const menuItems = data[index][type].data.filter(({
    id
  }) => id !== data[index][type].data[seqIdx].id).map(({
    id,
    name
  }) => ({
    label: name,
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`, id)
  }));
  menuItems.push({
    label: 'Continue to next question',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`, undefined)
  }, {
    label: 'End',
    onClick: () => setFieldValue(`data[${index}][${type}].data[${seqIdx}].logic_jump.${selectedOption}`, null)
  });
  const label = selectedValue === null ? 'End' : selectedValue ? selectedValue : 'Continue to next question';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_5__["ContentBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BinaryMenu__WEBPACK_IMPORTED_MODULE_6__["SmallLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, "Jump to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BinaryMenu__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
    ref: originRef,
    onClick: togglePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, selectedValue || label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BinaryMenu__WEBPACK_IMPORTED_MODULE_6__["StyledIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "expand_more"))), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menuProps: menuProps,
    menuItems: menuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SequenceSelectionOptionsMenu);

/***/ }),

/***/ "./src/universal/utils/getBlockDims.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/getBlockDims.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


const getBlockDims = type => {
  let layout = {};

  switch (type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].AUDIO:
      layout = {
        minW: 5,
        minH: 2,
        w: 5,
        h: 2
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BINARY:
      layout = {
        minW: 4,
        minH: 3,
        w: 4,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].IMAGE:
      layout = {
        minW: 4,
        minH: 3,
        w: 4,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NUMBER:
      layout = {
        minW: 4,
        minH: 2,
        w: 5,
        h: 2
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].DATE:
      layout = {
        minW: 4,
        minH: 2,
        w: 5,
        h: 2
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].SINGLE_SELECTION:
      layout = {
        minW: 4,
        minH: 3,
        w: 5,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].MULTIPLE_SELECTION:
      layout = {
        minW: 4,
        minH: 3,
        w: 5,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].FORM_SEQUENCE:
      layout = {
        minW: 4,
        minH: 4,
        w: 5,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].TEXT:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 3
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].EMAIL:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 2
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].LINK:
      layout = {
        minW: 4,
        w: 5,
        minH: 2,
        h: 2
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].VIDEO:
      layout = {
        minW: 5,
        minH: 4,
        w: 6,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION:
      layout = {
        minW: 10,
        minH: 10,
        w: 10,
        h: 10
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES:
      layout = {
        minW: 5,
        minH: 4,
        w: 10,
        h: 9
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].EMBED:
      layout = {
        minW: 4,
        minH: 4,
        w: 6,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].PDF:
      layout = {
        minW: 4,
        minH: 4,
        w: 6,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].RICH_TEXT:
      layout = {
        minW: 5,
        minH: 4,
        w: 6,
        h: 4
      };
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].TEXT_SEQUENCE:
      layout = {
        minW: 4,
        minH: 4,
        w: 5,
        h: 4
      };
      break;

    default:
      break;
  }

  return layout;
};

/* harmony default export */ __webpack_exports__["default"] = (getBlockDims);

/***/ }),

/***/ "./src/universal/utils/slugify.ts":
/*!****************************************!*\
  !*** ./src/universal/utils/slugify.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slugify; });
/**
 * https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
 * modified: Replace hyphens with underscores
 */
function slugify(str) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz______';
  const p = new RegExp(a.split('').join('|'), 'g');
  return str.toString().toLowerCase().replace(/\s+/g, '_').replace(p, c => b.charAt(a.indexOf(c))).replace(/&/g, '_and_').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '_').replace(/^-+/, '').replace(/-+$/, '');
}

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ1NWSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1VuZGVybGluZWRJbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2hvb2tzL3VzZUtleVByZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9RdWV1ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQmluYXJ5TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQnVpbGRlckhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvTmV3QmxvY2tNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvUXVldWVCdWlsZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0QmxvY2tEaW1zLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvc2x1Z2lmeS50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJMYWJlbCIsImNvbG9yIiwiUEFMRVRURSIsIlRFWFRfR1JBWSIsImJhY2tncm91bmQiLCJjdXJzb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJDU1ZJbnB1dCIsImxhYmVsIiwic2V0Q2FuSW1wb3J0Iiwic2V0T3B0aW9ucyIsImluaXRpYWxWYWx1ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2V0Q3N2Um93IiwidmFsdWUiLCJjc3YiLCJub2hlYWRlciIsIm91dHB1dCIsImlnbm9yZUVtcHR5IiwiZnJvbVN0cmluZyIsInRoZW4iLCJjc3ZSb3ciLCJoYXNJbnZhbGlkVmFsdWVzIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJUZXh0QXJlYSIsIm1pblJvd3MiLCJtYXhSb3dzIiwib25DaGFuZ2UiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJTdGFuZGFyZE1lbnUiLCJwcm9wcyIsIm1lbnVQcm9wcyIsIm1lbnVJdGVtcyIsIk1lbnUiLCJhcmlhTGFiZWwiLCJtYXAiLCJvbkNsaWNrIiwiaWR4IiwiTWVudUl0ZW0iLCJrZXkiLCJwYWRkaW5nTGVmdCIsInVzZXJTZWxlY3QiLCJCQUNLR1JPVU5EX01BSU4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJCT1JERVJfTUFJTl9HUkFZIiwiY29udGVudCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJJbnB1dCIsIlBSSU1BUllfTUFJTiIsIkNoZWNrYm94IiwibWVtbyIsImF1dG9Gb2N1cyIsImRpc2FibGVkIiwiaWQiLCJjaGVja2VkIiwibmFtZSIsInR5cGUiLCJodG1sRm9yIiwiV3JhcHBlciIsImljb24iLCJhcHBlYXJhbmNlIiwib3V0bGluZSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbSIsIkVSUk9SX01BSU4iLCJib3hTaXppbmciLCJURVhUX01BSU4iLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwibGluZUhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJDb2xvciIsIlN0eWxlZEljb24iLCJJY29uIiwiVW5kZXJsaW5lZElucHV0RmllbGQiLCJmb3J3YXJkUmVmIiwicmVmIiwiYXV0b0NvbXBsZXRlIiwib25CbHVyIiwib25Gb2N1cyIsIm9uS2V5RG93biIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJCb29sZWFuIiwidXNlS2V5UHJlc3MiLCJ0YXJnZXRLZXkiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiUXVldWUiLCJ1c2VyIiwib3JnSWQiLCJxdWV1ZSIsInNldFF1ZXVlIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0YXRlIiwidXNlTG9jYXRpb24iLCJxdWV1ZUlkIiwidXNlUGFyYW1zIiwiZmV0Y2hRdWV1ZSIsImluZGV4T2YiLCJkYXRhIiwiZXJyb3JzIiwiXyIsImh0dHBIYW5kbGVyIiwiXzIiLCJtZXRob2QiLCJpc0VtcHR5QXJyYXkiLCJfMyIsInRlbXBsYXRlSWQiLCJfNCIsIl81IiwiXzYiLCJoYXNDbG9uZSIsImNsb25lZFF1ZXVlIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWVzIiwibmV3RGF0YSIsInRyYW5zZm9ybURhdGVzIiwiYmxvY2siLCJibG9ja1R5cGUiLCJyZXN0IiwiYmxvY2tWYWxzIiwibm9IaXN0b3J5IiwiQkxPQ0tfVFlQRSIsIkZPUk1fU0VRVUVOQ0UiLCJuZXdWYWx1ZXMiLCJwYXlsb2FkIiwiXzciLCJfOCIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwic2VnbWVudFRyYWNrIiwid29ya2ZsbG93QWN0aW9ucyIsInVwZGF0ZVF1ZXVlIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsInB1c2giLCJfOSIsIl8xMCIsIkVycm9yIiwiYWRkUXVldWUiLCJRdWV1ZUJ1aWxkZXIiLCJTbWFsbExhYmVsIiwiRmllbGRXcmFwcGVyIiwiU3R5bGVkQnV0dG9uIiwiUGxhaW5CdXR0b24iLCJmbGV4RGlyZWN0aW9uIiwiQk9SREVSX0dSQVlfTkVXIiwiQmluYXJ5TWVudSIsImluZGV4Iiwic2VxSWR4Iiwic2V0RmllbGRWYWx1ZSIsInRvZ2dsZVBvcnRhbCIsInRvZ2dsZVBvcnRhbFllcyIsIm9yaWdpblJlZiIsIm9yaWdpblJlZlllcyIsIm1lbnVQb3J0YWwiLCJtZW51UG9ydGFsWWVzIiwibWVudVByb3BzWWVzIiwidXNlTWVudSIsIk1lbnVQb3NpdGlvbiIsIlVQUEVSX0xFRlQiLCJpc0Ryb3Bkb3duIiwicGFyZW50SWQiLCJ0b2dnbGVQb3J0YWxObyIsIm9yaWdpblJlZk5vIiwibWVudVBvcnRhbE5vIiwibWVudVByb3BzTm8iLCJtZW51SXRlbXNUcnVlIiwiZmlsdGVyIiwibWVudUl0ZW1zRmFsc2UiLCJ0cnVlVmFsdWUiLCJsb2dpY19qdW1wIiwidHJ1ZSIsImZhbHNlVmFsdWUiLCJfMTEiLCJfMTIiLCJmYWxzZSIsInRydWVMYWJlbCIsImZhbHNlTGFiZWwiLCJJbnB1dFdyYXBwZXIiLCJCdWlsZGVySGVhZGVyIiwiaXNWYWxpZCIsImhhbmRsZUJsdXIiLCJzZXRRdWV1ZUhhc0NoYW5nZXMiLCJxdWV1ZUhhc0NoYW5nZXMiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJoYW5kbGVLZXlQcmVzcyIsImtleUNvZGUiLCJibHVyIiwiY2FuY2VsVXJsIiwiQXBwSGVhZGVyIiwibGVmdEJhckl0ZW1zIiwiU2Vjb25kYXJ5QnV0dG9uIiwicmVwbGFjZSIsIm1pZEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsIlByaW1hcnlCdXR0b24iLCJmbG9hdCIsIk1vZGFsUm9vdCIsImlzRXh0ZW5kZWRUeXBlIiwiYm94U2hhZG93IiwiQm94U2hhZG93IiwiTU9EQUwiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1heEhlaWdodCIsIk1vZGFsV3JhcHBlciIsIk1vZGFsSGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsIk5vdGUiLCJ2ZXJ0QWxpZ24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luQm90dG9tIiwiQ29udGVudEJsb2NrIiwiTW9kYWxGb290ZXIiLCJDb250ZW50V3JhcHBlciIsIklubGluZVdyYXBwZXIiLCJOZXdCbG9ja01vZGFsIiwiYXJyYXlIZWxwZXJzIiwiY3VycmVudEJsb2NrSWQiLCJjbG9zZVBvcnRhbCIsImJsb2NrRm9ybWF0IiwibnVtYmVyIiwiZGVmYXVsdCIsImZpbmRJbmRleCIsIl9pZCIsImlzTmV3IiwiY3VycmVudEJsb2NrIiwidGl0bGUiLCJCTE9DS1MiLCJmaW5kIiwicmVhZE9ubHlCbG9ja3MiLCJOVU1CRVIiLCJURVhUIiwiRU1BSUwiLCJMSU5LIiwiUklDSF9URVhUIiwiREFURSIsInJlcXVpcmVkQmxvY2tzIiwiTkFNRURfRU5USVRZX1JFQ09HTklUSU9OIiwiU0lOR0xFX1NFTEVDVElPTiIsIk1VTFRJUExFX1NFTEVDVElPTiIsIkJJTkFSWSIsIkJPVU5ESU5HX0JPWEVTIiwibXVsdGlCbG9ja3MiLCJpc1JlYWRPbmx5IiwiaW5jbHVkZXMiLCJpc19yZXF1aXJlZCIsImlzUmVxdWlyZWQiLCJyZWFkX29ubHkiLCJoYXNQbGFjZWhvbGRlciIsIlRFWFRfU0VRVUVOQ0UiLCJhbGxvd0VkaXRzIiwiaGFzRXJyb3JzIiwiT2JqZWN0IiwiYmxvY2tFcnJvciIsIl8xMyIsIl8xNCIsIl8xNSIsIl8xNiIsIl8xNyIsIl8xOCIsIl8xOSIsIl8yMCIsIl8yMSIsIl8yMiIsIl8yMyIsIl8yNCIsIl8yNSIsIl8yNiIsImlkRXJyb3IiLCJfMjciLCJfMjgiLCJfMjkiLCJfMzAiLCJfMzEiLCJxdWVzdGlvbiIsIm9uQ2xvc2UiLCJyZW1vdmUiLCJvblNhdmUiLCJvbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsImRyYWdnYWJsZUlkIiwiZHJvcHBhYmxlSWQiLCJjaGFuZ2VkSXRlbSIsIm5ld0xpc3QiLCJzcGxpY2UiLCJ1c2VySGFzQ2hhbmdlZElkZW50aWZpZXIiLCJzZXRVc2VySGFzQ2hhbmdlZElkZW50aWZpZXIiLCJvbklkZW50aWZpZXJDaGFuZ2UiLCJvblBsYWNlaG9sZGVyQ2hhbmdlIiwib25SaWNoVGV4dEZvcm1hdENoYW5nZSIsInRvTG93ZXJDYXNlIiwiVVBQRVJfUklHSFQiLCJlc2NhcGUiLCJlbWFpbCIsImxpbmsiLCJiaW5hcnkiLCJzaW5nbGVfc2VsZWN0aW9uIiwibXVsdGlwbGVfc2VsZWN0aW9uIiwiaWRJbnB1dCIsInVzZVJlZiIsIm5hbWVJbnB1dCIsImN1cnJlbnQiLCJfMzIiLCJfMzMiLCJfMzQiLCJfMzUiLCJfMzYiLCJfMzciLCJ1c2VySGFzQ2hhbmdlZE5hbWUiLCJzZXRVc2VySGFzQ2hhbmdlZE5hbWUiLCJvbk5hbWVCbHVyIiwic2x1Z0lkIiwic2x1Z2lmeSIsInN1YnN0cmluZyIsIm9uTmFtZUNoYW5nZSIsIklucHV0RmllbGQiLCJoaWRlRXJyb3JNZXNzYWdlIiwiXzM4IiwiXzM5IiwiXzQwIiwiXzQxIiwiXzQyIiwiXzQzIiwiXzQ0IiwiXzQ1IiwiRGF0ZVBpY2tlciIsIl80NiIsIl80NyIsIl80OCIsIl80OSIsIl81MCIsIl81MSIsIl81MiIsIl81MyIsIkJhc2ljVGV4dEFyZWEiLCJfNTQiLCJfNTUiLCJfNTYiLCJfNTciLCJfNTgiLCJfNTkiLCJfNjAiLCJfNjEiLCJGaWVsZCIsImZpZWxkIiwic2V0dGluZyIsImZpZWxkTGFiZWwiLCJpdGVtIiwib3B0aW9uIiwib3B0aW9uSW5kZXgiLCJUYXNrUmFkaW8iLCJub1NoYWRvdyIsIm1hcmdpbkxlZnQiLCJvdmVyZmxvdyIsIkZpZWxkQXJyYXkiLCJyZW5kZXIiLCJTZWxlY3Rpb24iLCJTZXF1ZW5jZSIsIkZvcm1Db250YWluZXIiLCJGb3JtIiwiUkdMX0JBQ0tHUk9VTkQiLCJDb250YWluZXIiLCJEcmFnZ2FibGVFbCIsIkljb25Cb3giLCJtYXJnaW5SaWdodCIsIm1pbldpZHRoIiwiRW1wdHlTdGF0ZSIsIkJsb2NrSW5mbyIsInRleHRPdmVyZmxvdyIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsIkJsb2NrQ29udGFpbmVyIiwiQmxvY2tBcmVhIiwiUHJpbWFyeVRleHQiLCJTZWNvbmRhcnlUZXh0IiwiTmV3UXVldWUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNldEN1cnJlbnRCbG9ja0lkIiwiZHJvcHBpbmdJdGVtIiwic2V0RHJvcHBpbmdJdGVtIiwibW9kYWxQb3J0YWwiLCJ1c2VNb2RhbCIsIm5vQ2xvc2UiLCJjb25maXJtQ29uZmlybWF0aW9uIiwiY2xvc2VDb25maXJtYXRpb24iLCJmb3JtUmVmIiwiaW5pdGlhbFZhbHVlcyIsIm9uRHJvcCIsImxheW91dCIsIm5ld0xheW91dCIsImYiLCJ1c2VzUGxhY2Vob2xkZXIiLCJFTUJFRCIsIklNQUdFIiwiVklERU8iLCJmb3JtU2VxdWVuY2UiLCJ0ZXh0U2VxdWVuY2UiLCJvcmRlcmluZ19kaXNhYmxlZCIsImRlbGV0ZV9kaXNhYmxlZCIsImVkaXRfZGlzYWJsZWQiLCJzaW5nbGVPck11bHRpU2VsZWN0aW9uIiwibmFtZUVudGl0eVNlbGVjdGlvbiIsInVzZV9wbGFjZWhvbGRlciIsImFsbG93X2VkaXRzIiwiYm91bmRpbmdCb3hTZWxlY3Rpb24iLCJvdGhlclR5cGVzIiwiZm9ybWF0IiwibmV3QmxvY2siLCJiIiwiaXNEcmFnZ2FibGUiLCJvbkxheW91dENoYW5nZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25EcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZGF0YXNldCIsImVsTGF5b3V0IiwiZ2V0QmxvY2tEaW1zIiwiYXNzaWduIiwiVVVJRCIsImdlblY0IiwidG9TdHJpbmciLCJyZW5kZXJCbG9ja3MiLCJCbG9ja1dyYXBwZXIiLCJCbG9ja0NvbXBvbmVudCIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwib25FZGl0IiwiRm9ybWlrIiwidmFsaWRhdGlvblNjaGVtYSIsInF1ZXVlU2NoZW1hIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbk1vdW50Iiwib25TdWJtaXQiLCJlbmFibGVSZWluaXRpYWxpemUiLCJpbm5lclJlZiIsInRvdWNoZWQiLCJvbkRyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJkZXNjcmlwdGlvbiIsImljb25Db2xvciIsImRyYWdnYWJsZSIsInVuc2VsZWN0YWJsZSIsIlJHTCIsImlzRHJvcHBhYmxlIiwiaXNSZXNpemFibGUiLCJsYXlvdXRzIiwiaGFzQ2hhbmdlcyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiY2FuY2VsTGFiZWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImhhbmRsZVN1Ym1pdCIsIlJlbW92ZUJ1dHRvbiIsIlJvb3RCdXR0b24iLCJDU1ZXcmFwcGVyIiwiU2VsZWN0aW9uVGl0bGUiLCJBY3Rpb25zQmxvY2siLCJJbXBvcnRUZXh0IiwianVzdGlmeVNlbGYiLCJTZWxlY3Rpb25PcHRpb24iLCJwcm92aWRlZCIsInNuYXBzaG90Iiwib3B0SWR4IiwibWluT3B0aW9ucyIsIm9wdGlvblJlZnMiLCJmb2N1c2VkT3B0aW9uIiwic2V0Rm9jdXNlZE9wdGlvbiIsImlkZW50aWZpZXIiLCJzZXRJZGVudGlmaWVyIiwiaWRlbnRpZmllckNoYW5nZWQiLCJzZXRJZGVudGlmaWVyQ2hhbmdlZCIsInNldE5hbWUiLCJfaWRGaWVsZCIsIl9pZE1ldGEiLCJpZEhlbHBlciIsInVzZUZpZWxkIiwiY2FuU2x1Z2lmeSIsInNldFRvdWNoZWQiLCJmb2N1cyIsImluc2VydCIsInNldEZvY3VzU3R5bGVzIiwiZWxlbWVudHMiLCJhY3Rpb24iLCJmb3JFYWNoIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJvbklkQmx1ciIsImRyYWdnYWJsZVByb3BzIiwiZ2V0SXRlbVN0eWxlIiwiZHJhZ0hhbmRsZVByb3BzIiwiYXMiLCJ2YWxpZGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiY2FuSW1wb3J0IiwiY3N2T3B0aW9ucyIsInNldENzdk9wdGlvbnMiLCJoYW5kbGVDc3ZJbXBvcnQiLCJwcmV2aW91c09wdGlvbnMiLCJfdiIsImRhdGFMZW5ndGgiLCJzbGljZSIsIkFycmF5IiwiZmlsbCIsImNyZWF0ZVJlZiIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsImRyb3BwYWJsZVByb3BzIiwiRHJhZ2dhYmxlIiwiU3RyaW5nIiwidXNlUG9ydGFsIiwiY2hpbGQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsInBvcnRhbCIsImpvaW4iLCJJY29uQnV0dG9uIiwiVHlwZSIsIkZpZWxkVGl0bGUiLCJzZXF1ZW5jZSIsIlNlcXVlbmNlU2VsZWN0aW9uT3B0aW9ucyIsInNlcVR5cGUiLCJCdXR0b25CbG9jayIsIl9vcHRpb24iLCJTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnNNZW51Iiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZFZhbHVlIiwiQVVESU8iLCJtaW5XIiwibWluSCIsInciLCJoIiwiUERGIiwic3RyIiwiYSIsInAiLCJSZWdFeHAiLCJzcGxpdCIsImMiLCJjaGFyQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsc0VBQXJCO0FBQTRGO0FBRTVGO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFBQTtBQUFBLEdBQWEsT0FBTztBQUNoQ0MsT0FBSyxFQUFFQyxnRUFBTyxDQUFDQyxTQURpQjtBQUVoQ0MsWUFBVSxFQUFFLE1BRm9CO0FBR2hDQyxRQUFNLEVBQUUsTUFId0I7QUFJaENDLFNBQU8sRUFBRSxNQUp1QjtBQUtoQ0MsZ0JBQWMsRUFBRSxlQUxnQjtBQU1oQ0MsWUFBVSxFQUFFLFFBTm9CO0FBT2hDQyxZQUFVLEVBQUUsR0FQb0I7QUFRaENDLFVBQVEsRUFBRSxFQVJzQjtBQVNoQ0MsVUFBUSxFQUFFLFVBVHNCO0FBVWhDQyxZQUFVLEVBQUUsY0FWb0I7QUFXaENDLE9BQUssRUFBRSxNQVh5QjtBQVloQ0MsV0FBUyxFQUFFO0FBWnFCLENBQVAsQ0FBYixDQUFkOztBQXNCQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFDQyxPQUFEO0FBQVFDLGNBQVI7QUFBc0JDLFlBQXRCO0FBQWtDQztBQUFsQyxDQUFELEtBQXFEO0FBQ3BFLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyxzREFBUSxDQUFDSCxZQUFELENBQWhDO0FBQ0EsUUFBTSxDQUFDSSxLQUFELEVBQVFDLFFBQVIsSUFBb0JGLHNEQUFRLENBQUMsS0FBRCxDQUFsQzs7QUFFQSxRQUFNRyxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUMzQkMsb0RBQUcsQ0FBQztBQUNGQyxjQUFRLEVBQUUsSUFEUjtBQUVGQyxZQUFNLEVBQUUsS0FGTjtBQUdGQyxpQkFBVyxFQUFFO0FBSFgsS0FBRCxDQUFILENBS0dDLFVBTEgsQ0FLY0wsS0FM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LEVBUlgsRUFTSkEsT0FUSSxDQVNJLEtBVEosRUFTVyxFQVRYLENBQVA7QUFVRCxDOzs7Ozs7Ozs7OztBQ3BCRCxlIiwiZmlsZSI6IlF1ZXVlXzliYmNjYThmOGVmOTM5NmY1ZjFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0NTVklucHV0LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1RleHRBcmVhJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgY3N2IGZyb20gJ2NzdnRvanNvbidcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWwoKCkgPT4gKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGN1cnNvcjogJ3RleHQnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxMixcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHRyYW5zaXRpb246ICcuM3MgZWFzZSBhbGwnLFxuICB3aWR0aDogJzEwMCUnLFxuICBtYXJnaW5Ub3A6ICc1cHgnXG59KSlcblxuXG5cblxuXG5cblxuXG5jb25zdCBDU1ZJbnB1dCA9ICh7bGFiZWwsIHNldENhbkltcG9ydCwgc2V0T3B0aW9ucywgaW5pdGlhbFZhbHVlfSkgPT4ge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0Q3N2Um93ID0gKHZhbHVlKSA9PiB7XG4gICAgY3N2KHtcbiAgICAgIG5vaGVhZGVyOiB0cnVlLFxuICAgICAgb3V0cHV0OiAnY3N2JyxcbiAgICAgIGlnbm9yZUVtcHR5OiB0cnVlXG4gICAgfSlcbiAgICAgIC5mcm9tU3RyaW5nKHZhbHVlKVxuICAgICAgLnRoZW4oKGNzdlJvdykgPT4ge1xuICAgICAgICBjb25zdCBoYXNJbnZhbGlkVmFsdWVzID0gY3N2Um93Lmxlbmd0aCA+IDFcbiAgICAgICAgaWYgKGhhc0ludmFsaWRWYWx1ZXMpIHtcbiAgICAgICAgICBzZXRDYW5JbXBvcnQoZmFsc2UpXG4gICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcihmYWxzZSlcbiAgICAgICAgICBzZXRDYW5JbXBvcnQodHJ1ZSlcbiAgICAgICAgICBzZXRPcHRpb25zKGNzdlJvd1swXSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3N2Um93KHRleHQpXG4gIH0sIFt0ZXh0XSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICBzZXRUZXh0KHZhbHVlKVxuICAgICAgc2V0Q3N2Um93KHZhbHVlKVxuICAgIH0sXG4gICAgW3RleHRdXG4gIClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFyZWEsIHsgbWluUm93czogMywgbWF4Um93czogOSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgZXJyb3I6IGVycm9yLCB2YWx1ZTogdGV4dCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY3fX0gKVxuICAgICAgLCBsYWJlbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY4fX0sIGxhYmVsKVxuICAgIClcbiAgKVxufVxuXG5DU1ZJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IENTVklucHV0XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3RhbmRhcmRNZW51LnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcblxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5cblxuXG5cblxuXG5jb25zdCBTdGFuZGFyZE1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgbWVudUl0ZW1zfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ1N0YW5kYXJkIGRyb3Bkb3duIG1lbnUnLCAuLi5tZW51UHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19XG4gICAgICAsIG1lbnVJdGVtcy5tYXAoKHtsYWJlbCwgb25DbGlja30sIGlkeCkgPT4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogaWR4LCBsYWJlbDogbGFiZWwsIG9uQ2xpY2s6IG9uQ2xpY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNn19IClcbiAgICAgICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0NoZWNrYm94LnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsKCgvKiB7ZGlzYWJsZWR9ICovKSA9PiAoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udFNpemU6IDEyLFxuICBwYWRkaW5nTGVmdDogMzUsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIHRyYW5zaXRpb246ICcuM3MgZWFzZSBhbGwnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJjo6YmVmb3JlJzoge1xuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJ2NhbGMoNTAlIC0gMTBweCknLFxuICAgIHRyYW5zaXRpb246ICcuM3MgZWFzZSBiYWNrZ3JvdW5kLWNvbG9yJ1xuICB9XG59KSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAmOmNoZWNrZWQgKyAke0xhYmVsfSB7XG4gICAgLyogYmFja2dyb3VuZDogJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9MSUdIVEVTVH07ICovXG4gICAgYm9yZGVyLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgfVxuICAmOmNoZWNrZWQgKyAke0xhYmVsfTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4YzNabklIZHBaSFJvUFNJeU5pSWdhR1ZwWjJoMFBTSXlNQ0lnZG1WeWMybHZiajBpTVM0eElpQjJhV1YzUW05NFBTSXlMakF5T1RZNElDMDBNQzR3T1RBeklESTJJREl3SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajQ4SVMwdFIyVnVaWEpoZEdWa0lHSjVJRWxLVTFaSElDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhV052Ym1waGNpOUpTbE5XUnlrdExUNDhjR0YwYUNCa1BTSk5NamN1T1RjME15d3RNell1TVRJM01tTXdMREF1TkRRMk5ESTRJQzB3TGpFMU5qSTFMREF1T0RJMU9Ea3pJQzB3TGpRMk9EYzFMREV1TVRNNE16bHNMVEV5TGpFeU1EVXNNVEl1TVRJd05Xd3RNaTR5TnpZM09Td3lMakkzTmpjNVl5MHdMak14TWpVc01DNHpNVEkxSUMwd0xqWTVNVGsyTkN3d0xqUTJPRGMxSUMweExqRXpPRE01TERBdU5EWTROelZqTFRBdU5EUTJOREk0TERBZ0xUQXVPREkxT0RrekxDMHdMakUxTmpJMUlDMHhMakV6T0RNNUxDMHdMalEyT0RjMWJDMHlMakkzTmpjNUxDMHlMakkzTmpjNWJDMDJMakEyTURJM0xDMDJMakEyTURJM1l5MHdMak14TWpVc0xUQXVNekV5TlNBdE1DNDBOamczTlN3dE1DNDJPVEU1TmpVZ0xUQXVORFk0TnpVc0xURXVNVE00TXpsak1Dd3RNQzQwTkRZME1qa2dNQzR4TlRZeU5Td3RNQzQ0TWpVNE9UTWdNQzQwTmpnM05Td3RNUzR4TXpnek9Xd3lMakkzTmpjNUxDMHlMakkzTmpjNVl6QXVNekV5TlN3dE1DNHpNVEkxSURBdU5qa3hPVFkxTEMwd0xqUTJPRGMxSURFdU1UTTRNemtzTFRBdU5EWTROelZqTUM0ME5EWTBNamtzTUNBd0xqZ3lOVGc1TXl3d0xqRTFOakkxSURFdU1UTTRNemtzTUM0ME5qZzNOV3cwTGpreU1UZzRMRFF1T1RNNE5qSnNNVEF1T1RneU1Td3RNVEF1T1RrNE9XTXdMak14TWpVc0xUQXVNekV5TlNBd0xqWTVNVGsyTkN3dE1DNDBOamczTlNBeExqRXpPRE01TEMwd0xqUTJPRGMxWXpBdU5EUTJOREk0TERBZ01DNDRNalU0T1RNc01DNHhOVFl5TlNBeExqRXpPRE01TERBdU5EWTROelZzTWk0eU56WTNPQ3d5TGpJM05qYzVZekF1TXpFeU5Td3dMak14TWpVZ01DNDBOamczTlN3d0xqWTVNVGsyTkNBd0xqUTJPRGMxTERFdU1UTTRNemxhSWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RFdU1EQXhPVGdwSWlCbWFXeHNQU0lqWm1abUlqNDhMM0JoZEdnK1BDOXpkbWMrJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5cHg7XG4gIH1cbmBcblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzR9fSAvKiBkaXNhYmxlZD17ZGlzYWJsZWR9ICovLCBsYWJlbClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvVW5kZXJsaW5lZElucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWQsIGljb259KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke2Vycm9yID8gUEFMRVRURS5FUlJPUl9NQUlOIDogJyNDQUNBQ0InfWAsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUYsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgY3Vyc29yOiBkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAnaW5wdXQnLFxuICBmb250U2l6ZTogMTYsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6IGljb24gPyAnMCAxMHB4IDAgMzBweCcgOiAnMCAxMHB4JyxcbiAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAyMDBtcyBlYXNlLWluJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJzpmb2N1cyc6IHtcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIGZvbnRTaXplOiAxNixcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgcGFkZGluZ0xlZnQ6IDhcbn0pXG5cbmNvbnN0IFVuZGVybGluZWRJbnB1dEZpZWxkID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZCxcbiAgICBlcnJvcixcbiAgICBuYW1lLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uS2V5RG93bixcbiAgICBvbkNoYW5nZSxcbiAgICBpY29uLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHR5cGUgPSAndGV4dCcsXG4gICAgdmFsdWUsXG4gICAgc3R5bGUsXG4gICAgc3BlbGxDaGVjayxcbiAgICByZWFkT25seVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5Mn19XG4gICAgICAsIGljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkzfX0sIGljb24pXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbihkaXNhYmxlZCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NH19XG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBVbmRlcmxpbmVkSW5wdXRGaWVsZFxuIiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlS2V5UHJlc3MgPSAodGFyZ2V0S2V5KSA9PiB7XG4gIGNvbnN0IFtrZXlQcmVzc2VkLCBzZXRLZXlQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKHtrZXl9KSB7XG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICBzZXRLZXlQcmVzc2VkKHRydWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBIYW5kbGVyID0gKHtrZXl9KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICBzZXRLZXlQcmVzc2VkKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4ga2V5UHJlc3NlZFxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VLZXlQcmVzc1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL1F1ZXVlLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt1c2VMb2NhdGlvbiwgdXNlUGFyYW1zfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFF1ZXVlQnVpbGRlciBmcm9tICcuL2NvbXBvbmVudHMvUXVldWVCdWlsZGVyJ1xuXG5cbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnLi4vLi4vLi4vY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCBpc0VtcHR5QXJyYXkgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2lzRW1wdHlBcnJheSdcbmltcG9ydCB7XG4gIGFkZEZhaWx1cmVOb3RpZmljYXRpb24sXG4gIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb25cbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L21vZHVsZXMvbm90aWZpY2F0aW9uU3lzdGVtL2R1Y2tzL25vdGlmaWNhdGlvblN5c3RlbUR1Y2snXG5pbXBvcnQge3NlZ21lbnRUcmFja30gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3V0aWxzL3NlZ21lbnRJbydcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnLi4vLi4vLi4vY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7d29ya2ZsbG93QWN0aW9uc30gZnJvbSAnY2xpZW50L3JlZHV4L3F1ZXVlc1JlZHVjZXJzJ1xuaW1wb3J0IHt0cmFuc2Zvcm1EYXRlc30gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFF1ZXVlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyOiB7b3JnSWR9XG4gIH0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCBbcXVldWUsIHNldFF1ZXVlXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IHtwYXRobmFtZSwgc3RhdGV9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7cXVldWVJZH0gPSB1c2VQYXJhbXMoKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWV1ZSgpIHtcbiAgICAgIGlmIChwYXRobmFtZS5pbmRleE9mKCdlZGl0JykgIT09IC0xICYmIG9yZ0lkKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBlcnJvcnN9ID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8yID0+IF8yKFxuICAgICAgICAgIGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgIH1cbiAgICAgICAgKV0pXG4gICAgICAgIGlmIChpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgICAgIHNldFF1ZXVlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hRdWV1ZSgpXG4gIH0sIFtvcmdJZCwgcGF0aG5hbWVdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWV1ZSgpIHtcbiAgICAgIGlmIChfb3B0aW9uYWxDaGFpbihbc3RhdGUsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLnRlbXBsYXRlSWRdKSAmJiBvcmdJZCkge1xuICAgICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF81ID0+IF81KFxuICAgICAgICAgIGAvb3Jncy80MC9xdWV1ZXMvJHtzdGF0ZS50ZW1wbGF0ZUlkfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgIH1cbiAgICAgICAgKV0pXG4gICAgICAgIGlmIChpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgICAgIHNldFF1ZXVlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChfb3B0aW9uYWxDaGFpbihbc3RhdGUsICdvcHRpb25hbEFjY2VzcycsIF82ID0+IF82Lmhhc0Nsb25lXSkpIHtcbiAgICAgICAgc2V0UXVldWUoc3RhdGUuY2xvbmVkUXVldWUpXG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoUXVldWUoKVxuICB9LCBbb3JnSWQsIHBhdGhuYW1lXSlcblxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAodmFsdWVzLCBvcmdJZCkgPT4ge1xuICAgICAgY29uc3Qge25hbWUsIGRhdGF9ID0gdmFsdWVzIHx8IHt9XG4gICAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAodHJhbnNmb3JtRGF0ZXMpLm1hcCgoYmxvY2spID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tUeXBlID0gYmxvY2tbYmxvY2sudHlwZV1cbiAgICAgICAgY29uc3Qge3ZhbHVlLCAuLi5yZXN0fSA9IGJsb2NrVHlwZSAvLyBzdHJpcCBvdXQgdmFsdWVcbiAgICAgICAgY29uc3Qge2hpc3RvcnksIC4uLmJsb2NrVmFsc30gPSByZXN0IC8vIHN0cmlwIG91dCBoaXN0b3J5XG4gICAgICAgIGNvbnN0IG5vSGlzdG9yeSA9IGJsb2NrLnR5cGUgPT09IEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRSA/IFtdIDogdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB7Li4uYmxvY2ssIFtibG9jay50eXBlXTogey4uLmJsb2NrVmFscywgaGlzdG9yeTogbm9IaXN0b3J5fX1cbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRhdGE6IG5ld0RhdGFcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG1ldGhvZDogcXVldWVJZCA/ICdQQVRDSCcgOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlc1xuICAgICAgfSBcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGlmIChxdWV1ZUlkKSB7XG4gICAgICAgICAgY29uc3Qge2Vycm9ycywgZGF0YX0gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNyA9PiBfNy5odHRwSGFuZGxlciwgJ2NhbGwnLCBfOCA9PiBfOChcbiAgICAgICAgICAgIGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfWAsXG4gICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgKV0pXG4gICAgICAgICAgaWYgKCFpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgICAgICAgZXJyb3JzLm1hcCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgICAgICAgc2VnbWVudFRyYWNrKGBRdWV1ZSBVcGRhdGUgRmFpbGVkYCwge29yZ0lkLCBuYW1lLCBxdWV1ZUlkfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy51cGRhdGVRdWV1ZShkYXRhKSlcbiAgICAgICAgICAgIHNlZ21lbnRUcmFjaygnUXVldWUgVXBkYXRlIFN1Y2Nlc3NmdWwnLCB7b3JnSWQsIG5hbWUsIHF1ZXVlSWR9KVxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignUXVldWUgc3VjY2Vzc2Z1bHkgdXBkYXRlZCcpKVxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVzLyR7cXVldWVJZH1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF85ID0+IF85Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8xMCA9PiBfMTAoXG4gICAgICAgICAgICBgL29yZ3MvJHtvcmdJZH0vcXVldWVzL2NyZWF0ZWAsXG4gICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgKV0pXG4gICAgICAgICAgaWYgKCFpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgICAgICAgc2VnbWVudFRyYWNrKCdFcnJvciBjcmVhdGluZyBuZXcgcXVldWUnKVxuICAgICAgICAgICAgZXJyb3JzLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKSlcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7aWQsIG5hbWV9ID0gZGF0YVxuICAgICAgICAgICAgZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy5hZGRRdWV1ZShkYXRhKSlcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oJ1F1ZXVlIHN1Y2Nlc3NmdWx5IGNyZWF0ZWQnKSlcbiAgICAgICAgICAgIHNlZ21lbnRUcmFjaygnMyAtIFF1ZXVlIENyZWF0ZWQgLSBbUVVFVUUgRlVOTkVMXScsIHtcbiAgICAgICAgICAgICAgcXVldWVJZDogaWQsXG4gICAgICAgICAgICAgIG9yZ0lkLFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVzLyR7aWR9YClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtvcmdJZF1cbiAgKVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlQnVpbGRlciwgeyBvblN1Ym1pdEhhbmRsZXI6IG9uU3VibWl0SGFuZGxlciwgb3JnSWQ6IG9yZ0lkLCBxdWV1ZTogcXVldWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzh9fSApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9CaW5hcnlNZW51LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFN0YW5kYXJkTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdjbGllbnQvaG9va3MvdXNlTWVudSdcbmltcG9ydCB7TWVudVBvc2l0aW9ufSBmcm9tICdjbGllbnQvaG9va3MvdXNlQ29vcmRzJ1xuXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBQbGFpbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgU21hbGxMYWJlbCA9IHN0eWxlZC5iKHtcbiAgZm9udFNpemU6IDEwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgZm9udFNpemU6IDEzLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVlfTkVXfWBcbn0pXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgY29sb3I6IFBBTEVUVEUuQk9SREVSX0dSQVlfTkVXXG59KVxuXG5jb25zdCBCaW5hcnlNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBpbmRleCwgdHlwZSwgc2VxSWR4LCBzZXRGaWVsZFZhbHVlfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbFllcyxcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZlllcyxcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsWWVzLFxuICAgIG1lbnVQcm9wczogbWVudVByb3BzWWVzXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9MRUZULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBwYXJlbnRJZDogJ3BvcnRhbCdcbiAgfSlcbiAgY29uc3Qge1xuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsTm8sXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5SZWZObyxcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsTm8sXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNOb1xuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfTEVGVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgcGFyZW50SWQ6ICdwb3J0YWwnXG4gIH0pXG4gIGNvbnN0IG1lbnVJdGVtc1RydWUgPSBkYXRhW2luZGV4XVt0eXBlXS5kYXRhXG4gICAgLmZpbHRlcigoe2lkLCBuYW1lfSkgPT4gaWQgIT09IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS5pZCAmJiBpZCAhPT0gJycgJiYgbmFtZSAhPT0gJycpXG4gICAgLm1hcCgoe2lkLCBuYW1lfSkgPT4gKHtcbiAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgb25DbGljazogKCkgPT4gc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXAudHJ1ZWAsIGlkKVxuICAgIH0pKVxuICBtZW51SXRlbXNUcnVlLnB1c2goXG4gICAge1xuICAgICAgbGFiZWw6ICdDb250aW51ZSB0byBuZXh0IHF1ZXN0aW9uJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLnRydWVgLCB1bmRlZmluZWQpXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0VuZCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC50cnVlYCwgbnVsbClcbiAgICB9XG4gIClcbiAgY29uc3QgbWVudUl0ZW1zRmFsc2UgPSBkYXRhW2luZGV4XVt0eXBlXS5kYXRhXG4gICAgLmZpbHRlcigoe2lkLCBuYW1lfSkgPT4gaWQgIT09IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS5pZCAmJiBpZCAhPT0gJycgJiYgbmFtZSAhPT0gJycpXG4gICAgLm1hcCgoe2lkLCBuYW1lfSkgPT4gKHtcbiAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgb25DbGljazogKCkgPT4gc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXAuZmFsc2VgLCBpZClcbiAgICB9KSlcbiAgbWVudUl0ZW1zRmFsc2UucHVzaChcbiAgICB7XG4gICAgICBsYWJlbDogJ0NvbnRpbnVlIHRvIG5leHQgcXVlc3Rpb24nLFxuICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXAuZmFsc2VgLCB1bmRlZmluZWQpXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0VuZCcsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC5mYWxzZWAsIG51bGwpXG4gICAgfVxuICApXG5cbiAgY29uc3QgdHJ1ZVZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfID0+IF9baW5kZXhdLCAnYWNjZXNzJywgXzIgPT4gXzJbdHlwZV0sICdhY2Nlc3MnLCBfMyA9PiBfMy5kYXRhLCAnYWNjZXNzJywgXzQgPT4gXzRbc2VxSWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUubG9naWNfanVtcCwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYudHJ1ZV0pXG4gIGNvbnN0IGZhbHNlVmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF83ID0+IF83W2luZGV4XSwgJ2FjY2VzcycsIF84ID0+IF84W3R5cGVdLCAnYWNjZXNzJywgXzkgPT4gXzkuZGF0YSwgJ2FjY2VzcycsIF8xMCA9PiBfMTBbc2VxSWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzExID0+IF8xMS5sb2dpY19qdW1wLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTIgPT4gXzEyLmZhbHNlXSlcbiAgY29uc3QgdHJ1ZUxhYmVsID0gdHJ1ZVZhbHVlID09PSBudWxsID8gJ0VuZCcgOiB0cnVlVmFsdWUgPyB0cnVlVmFsdWUgOiAnQ29udGludWUgdG8gbmV4dCBxdWVzdGlvbidcbiAgY29uc3QgZmFsc2VMYWJlbCA9XG4gICAgZmFsc2VWYWx1ZSA9PT0gbnVsbCA/ICdFbmQnIDogZmFsc2VWYWx1ZSA/IGZhbHNlVmFsdWUgOiAnQ29udGludWUgdG8gbmV4dCBxdWVzdGlvbidcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwN319XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwOH19LCBcIklmIFlFU1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJ1dHRvbiwgeyByZWY6IG9yaWdpblJlZlllcywgb25DbGljazogdG9nZ2xlUG9ydGFsWWVzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA5fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExMH19LCB0cnVlTGFiZWwpXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTExfX0sIFwiZXhwYW5kX21vcmVcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTR9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU21hbGxMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTV9fSwgXCJJZiBOT1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJ1dHRvbiwgeyByZWY6IG9yaWdpblJlZk5vLCBvbkNsaWNrOiB0b2dnbGVQb3J0YWxObywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTd9fSwgZmFsc2VMYWJlbClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJleHBhbmRfbW9yZVwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIG1lbnVQb3J0YWxZZXMoUmVhY3QuY3JlYXRlRWxlbWVudChTdGFuZGFyZE1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHNZZXMsIG1lbnVJdGVtczogbWVudUl0ZW1zVHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMX19ICkpXG4gICAgICAsIG1lbnVQb3J0YWxObyhSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc05vLCBtZW51SXRlbXM6IG1lbnVJdGVtc0ZhbHNlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIyfX0gKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5TWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQnVpbGRlckhlYWRlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBVbmRlcmxpbmVkSW5wdXRGaWVsZCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9VbmRlcmxpbmVkSW5wdXRGaWVsZCdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCBBcHBIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXBwSGVhZGVyJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB3aWR0aDogJzMwMHB4JyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbn0pXG5cbmNvbnN0IEJ1aWxkZXJIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXVlSWQsXG4gICAgaXNWYWxpZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlQmx1cixcbiAgICB2YWx1ZSxcbiAgICBlcnJvcixcbiAgICBzZXRRdWV1ZUhhc0NoYW5nZXMsXG4gICAgcXVldWVIYXNDaGFuZ2VzLFxuICAgIHRvZ2dsZUNvbmZpcm1hdGlvblxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS50YXJnZXQuYmx1cigpXG4gICAgfVxuICB9XG4gIGNvbnN0IGNhbmNlbFVybCA9IHF1ZXVlSWQgPyBgL3F1ZXVlcy8ke3F1ZXVlSWR9YCA6IGAvcXVldWVzYFxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwSGVhZGVyLCB7XG4gICAgICBsZWZ0QmFySXRlbXM6IFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgcXVldWVIYXNDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgIHRvZ2dsZUNvbmZpcm1hdGlvbigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoY2FuY2VsVXJsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MX19XG4gICAgICAgICwgXCJDYW5jZWxcIlxuXG4gICAgICAgIClcbiAgICAgICxcbiAgICAgIG1pZEJhckl0ZW1zOiBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjV9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChVbmRlcmxpbmVkSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlQcmVzcyxcbiAgICAgICAgICAgIGljb246ICdlZGl0JyxcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgIHNldFF1ZXVlSGFzQ2hhbmdlcyh0cnVlKVxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1F1ZXVlIFRpdGxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY2fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICxcbiAgICAgIHJpZ2h0QmFySXRlbXM6IFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHsgZGlzYWJsZWQ6ICFpc1ZhbGlkLCB0eXBlOiBcInN1Ym1pdFwiLCBzdHlsZToge2Zsb2F0OiAncmlnaHQnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg1fX1cbiAgICAgICAgICAsIHF1ZXVlSWQgPyAnU2F2ZScgOiAnQ3JlYXRlJ1xuICAgICAgICApXG4gICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1aWxkZXJIZWFkZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL05ld0Jsb2NrTW9kYWwudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQge0ZpZWxkLCBGaWVsZEFycmF5fSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdjbGllbnQvaG9va3MvdXNlTWVudSdcbmltcG9ydCB7TWVudVBvc2l0aW9ufSBmcm9tICdjbGllbnQvaG9va3MvdXNlQ29vcmRzJ1xuaW1wb3J0IFN0YW5kYXJkTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtCb3hTaGFkb3d9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC91dGlscy9jb25zdGFudHMnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQ2hlY2tib3gnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcbmltcG9ydCB7QkxPQ0tfVFlQRSwgQkxPQ0tTfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbidcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAndW5pdmVyc2FsL3V0aWxzL3NsdWdpZnknXG5pbXBvcnQgQmFzaWNUZXh0QXJlYSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CYXNpY1RleHRBcmVhJ1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvRGF0ZVBpY2tlcidcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuL1NlcXVlbmNlJ1xuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuL1NlbGVjdGlvbidcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VLZXlQcmVzcydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IE1vZGFsUm9vdCA9IHN0eWxlZC5kaXYoKHtpc0V4dGVuZGVkVHlwZX0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiBpc0V4dGVuZGVkVHlwZSA/IDEwMDAgOiA1MDAsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3cuTU9EQUwsXG4gIHBhZGRpbmdUb3A6IDM1LFxuICBwYWRkaW5nQm90dG9tOiAzNSxcbiAgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KSdcbn0pKVxuXG5jb25zdCBNb2RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJ1xufSlcblxuY29uc3QgTW9kYWxIZWFkZXIgPSBzdHlsZWQuZGl2KHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzIycHgnLFxuICBsaW5lSGVpZ2h0OiAnMjdweCcsXG4gIG1hcmdpbkJvdHRvbTogNDUsXG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgcGFkZGluZ1JpZ2h0OiAzNVxufSlcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJ1xufSlcblxuZXhwb3J0IGNvbnN0IE5vdGUgPSBzdHlsZWQuc3Bhbih7XG4gIGZvbnRTaXplOiAxMixcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBmb250V2VpZ2h0OiA0MDBcbn0pXG5cbmV4cG9ydCBjb25zdCBGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2KCh7dmVydEFsaWdufSkgPT4gKHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMTUwcHggMWZyJyxcbiAgYWxpZ25JdGVtczogdmVydEFsaWduID8gJ3RvcCcgOiAnY2VudGVyJyxcbiAgbWFyZ2luQm90dG9tOiA1XG59KSlcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luVG9wOiAxNSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwYWRkaW5nUmlnaHQ6IDM1XG59KVxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgcGFkZGluZ1JpZ2h0OiAzNVxufSlcblxuZXhwb3J0IGNvbnN0IElubGluZVdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xufSlcblxuY29uc3QgTmV3QmxvY2tNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZXJyb3JzLFxuICAgIGFycmF5SGVscGVycyxcbiAgICBjdXJyZW50QmxvY2tJZCxcbiAgICBjbG9zZVBvcnRhbCxcbiAgICBzZXRGaWVsZFZhbHVlLFxuICAgIHZhbHVlcyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaXNWYWxpZFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7ZGF0YX0gPSB2YWx1ZXMgfHwge31cblxuICBjb25zdCBibG9ja0Zvcm1hdCA9IHtcbiAgICBudW1iZXI6ICdudW1iZXInLFxuICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICB9XG5cbiAgaWYgKCFkYXRhLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgY29uc3QgaW5kZXggPSBkYXRhLmZpbmRJbmRleCgoYmxvY2spID0+IGJsb2NrLl9pZCA9PT0gY3VycmVudEJsb2NrSWQpXG4gIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBudWxsXG5cbiAgY29uc3Qge3R5cGUsIGlzTmV3fSA9IGRhdGFbaW5kZXhdXG4gIGNvbnN0IGN1cnJlbnRCbG9jayA9IGRhdGFbaW5kZXhdIHx8IHt9XG4gIGNvbnN0IHt0aXRsZSA9ICcnLCBwbGFjZWhvbGRlciA9IG51bGx9ID0gQkxPQ0tTLmZpbmQoKGJsb2NrKSA9PiBibG9jay50eXBlID09PSB0eXBlKSB8fCB7fVxuXG4gIGNvbnN0IHJlYWRPbmx5QmxvY2tzID0gW1xuICAgIEJMT0NLX1RZUEUuTlVNQkVSLFxuICAgIEJMT0NLX1RZUEUuVEVYVCxcbiAgICBCTE9DS19UWVBFLkVNQUlMLFxuICAgIEJMT0NLX1RZUEUuTElOSyxcbiAgICBCTE9DS19UWVBFLlJJQ0hfVEVYVCxcbiAgICBCTE9DS19UWVBFLkRBVEVcbiAgXVxuXG4gIC8qKlxuICAgKiBGb3JtIHNlcXVlbmNlIHZhbHVlcyBhcmUgYWx3YXlzXG4gICAqIHJlcXVpcmVkIGFuZCBjYW4gbm90IGJlIGRpc2FibGVkIGJlbG93LlxuICAgKi9cbiAgY29uc3QgcmVxdWlyZWRCbG9ja3MgPSBbXG4gICAgLi4ucmVhZE9ubHlCbG9ja3MsXG4gICAgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04sXG4gICAgQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OLFxuICAgIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OLFxuICAgIEJMT0NLX1RZUEUuQklOQVJZLFxuICAgIEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNcbiAgXVxuXG4gIGNvbnN0IG11bHRpQmxvY2tzID0gW1xuICAgIEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OLFxuICAgIEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTixcbiAgICBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTixcbiAgICBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UsXG4gICAgQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU1xuICBdXG4gIGNvbnN0IGlzUmVhZE9ubHkgPSByZWFkT25seUJsb2Nrcy5pbmNsdWRlcyh0eXBlKSAmJiAhX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfID0+IF9baW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuaXNfcmVxdWlyZWRdKVxuICBjb25zdCBpc1JlcXVpcmVkID0gcmVxdWlyZWRCbG9ja3MuaW5jbHVkZXModHlwZSkgJiYgIV9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzQgPT4gXzRbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNVt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYucmVhZF9vbmx5XSlcbiAgY29uc3QgaXNFeHRlbmRlZFR5cGUgPSBtdWx0aUJsb2Nrcy5pbmNsdWRlcyh0eXBlKVxuICBjb25zdCBoYXNQbGFjZWhvbGRlciA9XG4gICAgKHR5cGUgIT09IEJMT0NLX1RZUEUuQklOQVJZICYmICFpc0V4dGVuZGVkVHlwZSAmJiB0eXBlICE9PSBCTE9DS19UWVBFLlRFWFRfU0VRVUVOQ0UpIHx8XG4gICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04gfHxcbiAgICB0eXBlID09PSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXG5cbiAgY29uc3QgYWxsb3dFZGl0cyA9IHR5cGUgPT09IEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OXG5cbiAgY29uc3QgaGFzRXJyb3JzID0gZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhlcnJvcnMpLmxlbmd0aCA+IDAgOiBmYWxzZVxuXG4gIGNvbnN0IGJsb2NrRXJyb3IgPVxuICAgIChlcnJvcnMuZGF0YSAmJlxuICAgICAgKF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfNyA9PiBfNy5kYXRhLCAnYWNjZXNzJywgXzggPT4gXzhbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOSA9PiBfOS5pZF0pIHx8XG4gICAgICAgIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfMTAgPT4gXzEwLmRhdGEsICdhY2Nlc3MnLCBfMTEgPT4gXzExW2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzEyID0+IF8xMi5uYW1lXSkgfHxcbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8xMyA9PiBfMTMuZGF0YSwgJ2FjY2VzcycsIF8xNCA9PiBfMTRbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTUgPT4gXzE1W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTYgPT4gXzE2LnBsYWNlaG9sZGVyXSkgfHxcbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8xNyA9PiBfMTcuZGF0YSwgJ2FjY2VzcycsIF8xOCA9PiBfMThbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTkgPT4gXzE5W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjAgPT4gXzIwLmRhdGFdKSB8fFxuICAgICAgICBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzIxID0+IF8yMS5kYXRhLCAnYWNjZXNzJywgXzIyID0+IF8yMltpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8yMyA9PiBfMjNbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yNCA9PiBfMjQub3B0aW9uc10pKSkgfHxcbiAgICAoZXJyb3JzICYmIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfMjUgPT4gXzI1W2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzI2ID0+IF8yNi5pZF0pKVxuXG4gIGNvbnN0IGlkRXJyb3IgPVxuICAgIC8qKlxuICAgICAqIFRPRE86IFVzZSBGb3JtaWtzIGB0b3VjaGVkYCBmaWVsZFxuICAgICAqIG9uY2Ugd2UgYXJlIGFibGUgdG8gaG9vayB1cCBgTmV3QmxvY2tNb2RhbGBcbiAgICAgKiB0byBgUXVldWVCdWlsZGVyYC4gaS5lLiBjdXJyZW50bHkgd2UgYXJlXG4gICAgICogcG9ydGFsJ2luZyBvdXRzaWRlIGBmb3JtYC5cbiAgICAgKi9cbiAgICBjdXJyZW50QmxvY2suaWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICgoZXJyb3JzLmRhdGEgJiYgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8yNyA9PiBfMjcuZGF0YSwgJ2FjY2VzcycsIF8yOCA9PiBfMjhbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjkgPT4gXzI5LmlkXSkpIHx8IChlcnJvcnMgJiYgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8zMCA9PiBfMzBbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMzEgPT4gXzMxLmlkXSkpKVxuXG4gIGNvbnN0IHF1ZXN0aW9uID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk5fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fSwgXCJMYWJlbFwiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAxfX0sIFwiUmVxdWlyZWRcIilcbiAgICApXG4gIClcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGFycmF5SGVscGVycy5yZW1vdmUoaW5kZXgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dYCwgY3VycmVudEJsb2NrLCBmYWxzZSlcbiAgICB9XG4gICAgY2xvc2VQb3J0YWwoKVxuICB9LCBbXSlcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChpc05ldykge1xuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV0uaXNOZXdgLCB1bmRlZmluZWQpXG4gICAgfVxuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmhpc3RvcnlgLCBbXSlcbiAgICBjbG9zZVBvcnRhbCgpXG4gIH0sIFtdKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBvbkRyYWdFbmQgPSB1c2VDYWxsYmFjayhcbiAgICAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCB7ZGVzdGluYXRpb24sIHNvdXJjZSwgZHJhZ2dhYmxlSWR9ID0gcmVzdWx0XG4gICAgICBpZiAoXG4gICAgICAgICFkZXN0aW5hdGlvbiB8fFxuICAgICAgICAoZGVzdGluYXRpb24uZHJvcHBhYmxlSWQgPT09IHNvdXJjZS5kcm9wcGFibGVJZCAmJiBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGFuZ2VkSXRlbSA9XG4gICAgICAgIHR5cGUgPT09IEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRVxuICAgICAgICAgID8gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtkcmFnZ2FibGVJZF1cbiAgICAgICAgICA6IGRhdGFbaW5kZXhdW3R5cGVdLm9wdGlvbnNbZHJhZ2dhYmxlSWRdXG4gICAgICBjb25zdCBuZXdMaXN0ID1cbiAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFID8gZGF0YVtpbmRleF1bdHlwZV0uZGF0YSA6IGRhdGFbaW5kZXhdW3R5cGVdLm9wdGlvbnNcbiAgICAgIG5ld0xpc3Quc3BsaWNlKHNvdXJjZS5pbmRleCwgMSlcbiAgICAgIG5ld0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjaGFuZ2VkSXRlbSlcbiAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgIHR5cGUgPT09IEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRSA/IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGEgOiBkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zLFxuICAgICAgICBuZXdMaXN0XG4gICAgICApXG4gICAgfSxcbiAgICBbZGF0YSwgaW5kZXhdXG4gIClcblxuICBjb25zdCBbdXNlckhhc0NoYW5nZWRJZGVudGlmaWVyLCBzZXRVc2VySGFzQ2hhbmdlZElkZW50aWZpZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgb25JZGVudGlmaWVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS5pZGAsIHZhbHVlKVxuICAgIHNldFVzZXJIYXNDaGFuZ2VkSWRlbnRpZmllcihmYWxzZSlcbiAgICBpZiAodmFsdWUgIT0gJycpIHtcbiAgICAgIHNldFVzZXJIYXNDaGFuZ2VkSWRlbnRpZmllcih0cnVlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25QbGFjZWhvbGRlckNoYW5nZSA9IChlLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LnBsYWNlaG9sZGVyYCwgdmFsdWUpXG4gIH1cblxuICBjb25zdCBvblJpY2hUZXh0Rm9ybWF0Q2hhbmdlID0gKGUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5mb3JtYXRgLCB2YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICB9XG5cbiAgY29uc3Qge3RvZ2dsZVBvcnRhbCwgb3JpZ2luUmVmLCBtZW51UG9ydGFsLCBtZW51UHJvcHN9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIHBhcmVudElkOiAncG9ydGFsJ1xuICB9KVxuXG4gIGNvbnN0IGVzY2FwZSA9IHVzZUtleVByZXNzKCdFc2NhcGUnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVzY2FwZSkge1xuICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnJlbW92ZShpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBvbkNsb3NlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2VzY2FwZV0pXG5cbiAgY29uc3QgbWVudUl0ZW1zID0gKGFycmF5SGVscGVycykgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICd0ZXh0X2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdUZXh0IFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6IHt9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnZW1haWxfaWQnLFxuICAgICAgICAgICAgbmFtZTogJ0VtYWlsIFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICBlbWFpbDoge31cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOdW1iZXInLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnbnVtYmVyX2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdOdW1iZXIgUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBudW1iZXI6IHt9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTGluaycsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdsaW5rX2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdMaW5rIFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICAgIGxpbms6IHt9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQmluYXJ5JyxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ2JpbmFyeV9pZCcsXG4gICAgICAgICAgICBuYW1lOiAnQmluYXJ5IFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdiaW5hcnknLFxuICAgICAgICAgICAgYmluYXJ5OiB7fVxuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1NpbmdsZSBTZWxlY3Rpb24nLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnc2luZ2xlX3NlbGVjdGlvbl9pZCcsXG4gICAgICAgICAgICBuYW1lOiAnU2luZ2xlIFNlbGVjdGlvbiBRdWVzdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnc2luZ2xlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICBzaW5nbGVfc2VsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMScsIG5hbWU6ICdPcHRpb24gMSd9LFxuICAgICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8yJywgbmFtZTogJ09wdGlvbiAyJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzMnLCBuYW1lOiAnT3B0aW9uIDMnfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnTXVsdGlwbGUgU2VsZWN0aW9uJyxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ211bHRpcGxlX3NlbGVjdGlvbl9pZCcsXG4gICAgICAgICAgICBuYW1lOiAnTXVsdGlwbGUgU2VsZWN0aW9uIFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdtdWx0aXBsZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgbXVsdGlwbGVfc2VsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMScsIG5hbWU6ICdPcHRpb24gMSd9LFxuICAgICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8yJywgbmFtZTogJ09wdGlvbiAyJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzMnLCBuYW1lOiAnT3B0aW9uIDMnfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBjb25zdCBpZElucHV0ID0gdXNlUmVmKClcbiAgY29uc3QgbmFtZUlucHV0ID0gdXNlUmVmKClcblxuICBpZiAobmFtZUlucHV0LmN1cnJlbnQpIHtcbiAgICBpZiAobmFtZUlucHV0LmN1cnJlbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICBuYW1lSW5wdXQuY3VycmVudC52YWx1ZSA9IF9vcHRpb25hbENoYWluKFt2YWx1ZXMsICdvcHRpb25hbEFjY2VzcycsIF8zMiA9PiBfMzIuZGF0YSwgJ2FjY2VzcycsIF8zMyA9PiBfMzNbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMzQgPT4gXzM0Lm5hbWVdKSB8fCAnJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChpZElucHV0LmN1cnJlbnQpIHtcbiAgICBpZiAoaWRJbnB1dC5jdXJyZW50LnZhbHVlID09PSAnJykge1xuICAgICAgaWRJbnB1dC5jdXJyZW50LnZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzM1ID0+IF8zNS5kYXRhLCAnYWNjZXNzJywgXzM2ID0+IF8zNltpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8zNyA9PiBfMzcuaWRdKSB8fCAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFt1c2VySGFzQ2hhbmdlZE5hbWUsIHNldFVzZXJIYXNDaGFuZ2VkTmFtZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBvbk5hbWVCbHVyID0gKGUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS5uYW1lYCwgdmFsdWUpXG4gICAgaWYgKCFpc05ldyB8fCB1c2VySGFzQ2hhbmdlZElkZW50aWZpZXIpIHJldHVyblxuICAgIGNvbnN0IHNsdWdJZCA9IHNsdWdpZnkodmFsdWUuc3Vic3RyaW5nKDAsIDMwKSlcblxuICAgIGlmICh1c2VySGFzQ2hhbmdlZE5hbWUpIHtcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dLmlkYCwgc2x1Z0lkKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uTmFtZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgaWYgKCF1c2VySGFzQ2hhbmdlZE5hbWUpIHNldFVzZXJIYXNDaGFuZ2VkTmFtZSh0cnVlKVxuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuXG4gICAgaWYgKCFpc05ldyB8fCB1c2VySGFzQ2hhbmdlZElkZW50aWZpZXIpIHJldHVyblxuICAgIGNvbnN0IHNsdWdJZCA9IHNsdWdpZnkodmFsdWUuc3Vic3RyaW5nKDAsIDMwKSlcbiAgICBpZElucHV0LmN1cnJlbnQudmFsdWUgPSBzbHVnSWRcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV0ubmFtZWAsIHZhbHVlKVxuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV0uaWRgLCBzbHVnSWQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsUm9vdCwgeyBpc0V4dGVuZGVkVHlwZTogaXNFeHRlbmRlZFR5cGUsIGlkOiBcInBhcmVudElkXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjN9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyNH19LCBgJHt0aXRsZX0gU2V0dGluZ3NgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjV9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDI2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyN319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7IHZlcnRBbGlnbjogdHlwZSA9PT0gQkxPQ0tfVFlQRS5CSU5BUlksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mjh9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDI5fX0sIHR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZID8gcXVlc3Rpb24gOiAnTGFiZWwnKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHJlZjogbmFtZUlucHV0LFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IG9uTmFtZUJsdXIoZSwgc2V0RmllbGRWYWx1ZSksXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IG9uTmFtZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZID8gYCR7dHlwZX0gcXVlc3Rpb25gIDogYCR7dHlwZX0gTGFiZWxgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDMwfX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCB0eXBlICE9PSBCTE9DS19UWVBFLkJJTkFSWSAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0MH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQxfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDJ9fSwgXCJEaXNwbGF5ZWQgdG8gdXNlcnMgYXMgdGhpcyBibG9jaydzIHRpdGxlXCIgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDZ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDd9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQ4fX0sIFwiSWRlbnRpZmllclwiKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIGVycm9yOiBpZEVycm9yLFxuICAgICAgICAgICAgICAgIGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dLmlkYCxcbiAgICAgICAgICAgICAgICByZWY6IGlkSW5wdXQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBvbklkZW50aWZpZXJDaGFuZ2UoZSksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGAke3R5cGV9LWlkYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0OX19XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDU5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDYwfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDYxfX0sIFwiQSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBibG9jayBpbiB0aGUgdW5kZXJseWluZyBxdWV1ZSBkYXRhIHNjaGVtYVwiICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgaGFzUGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDY1fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NjZ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Njd9fSwgXCJQbGFjZWhvbGRlclwiKVxuICAgICAgICAgICAgICAgICwgdHlwZSAhPT0gQkxPQ0tfVFlQRS5URVhUICYmXG4gICAgICAgICAgICAgICAgdHlwZSAhPT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04gJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9PSBCTE9DS19UWVBFLkRBVEUgPyAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dLiR7W3R5cGVdfS5wbGFjZWhvbGRlcmAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGJsb2NrRm9ybWF0W3R5cGVdIHx8IGJsb2NrRm9ybWF0LmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIG9uUGxhY2Vob2xkZXJDaGFuZ2UoZSwgc2V0RmllbGRWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9ycy5kYXRhICYmIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfMzggPT4gXzM4LmRhdGEsICdhY2Nlc3MnLCBfMzkgPT4gXzM5W2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzQwID0+IF80MFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzQxID0+IF80MS5wbGFjZWhvbGRlcl0pLFxuICAgICAgICAgICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzQyID0+IF80Mi5kYXRhLCAnYWNjZXNzJywgXzQzID0+IF80M1tpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF80NCA9PiBfNDRbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF80NSA9PiBfNDUucGxhY2Vob2xkZXJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDcxfX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAsIHR5cGUgPT09IEJMT0NLX1RZUEUuREFURSA/IChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQaWNrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0ucGxhY2Vob2xkZXJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF9vcHRpb25hbENoYWluKFt2YWx1ZXMsICdvcHRpb25hbEFjY2VzcycsIF80NiA9PiBfNDYuZGF0YSwgJ2FjY2VzcycsIF80NyA9PiBfNDdbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNDggPT4gXzQ4W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNDkgPT4gXzQ5LnBsYWNlaG9sZGVyXSkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9ycy5kYXRhICYmIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfNTAgPT4gXzUwLmRhdGEsICdhY2Nlc3MnLCBfNTEgPT4gXzUxW2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzUyID0+IF81Mlt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzUzID0+IF81My5wbGFjZWhvbGRlcl0pLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDg1fX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF9vcHRpb25hbENoYWluKFt2YWx1ZXMsICdvcHRpb25hbEFjY2VzcycsIF81NCA9PiBfNTQuZGF0YSwgJ2FjY2VzcycsIF81NSA9PiBfNTVbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNTYgPT4gXzU2W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNTcgPT4gXzU3LnBsYWNlaG9sZGVyXSkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LnBsYWNlaG9sZGVyYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcnMuZGF0YSAmJiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzU4ID0+IF81OC5kYXRhLCAnYWNjZXNzJywgXzU5ID0+IF81OVtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF82MCA9PiBfNjBbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF82MSA9PiBfNjEucGxhY2Vob2xkZXJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzOiAzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDkzfX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MDZ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwN319LCBcIk9wdGlvbmFsXCIpXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTA4fX0sIFwiVXNlZCBhcyBhIHNhbXBsZSB2YWx1ZSB3aGVuIGNyZWF0aW5nIG9yIGVkaXRpbmcgYSBxdWV1ZVwiICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIGhhc1BsYWNlaG9sZGVyICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxM319XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTE0fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTE1fX0sIFwiVXNlIFBsYWNlaG9sZGVyXCIgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LnVzZV9wbGFjZWhvbGRlcmAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MTZ9fVxuICAgICAgICAgICAgICAgICAgLCAoe2ZpZWxkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzZV9wbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICdGYWxsYmFjayB0byB1c2luZyB0aGUgcGxhY2Vob2xkZXIgd2hlbiBubyB2YWx1ZSBpcyBwcm92aWRlZCBpbiB0aGUgdGFzaydcbiAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MTh9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgaXNSZWFkT25seSAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MzN9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzNH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzNX19LCBcIlJlYWQtb25seVwiKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LnJlYWRfb25seWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MzZ9fVxuICAgICAgICAgICAgICAgICAgLCAoe2ZpZWxkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJlYWRfb25seVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWFrZXMgdGhpcyBibG9ja+KAmXMgdmFsdWUgdW5tb2RpZmlhYmxlIGFmdGVyIHRhc2sgY3JlYXRpb24nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTM4fX1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIGlzUmVxdWlyZWQgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTUxfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NTJ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NTN9fSwgXCJSZXF1aXJlZFwiKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LmlzX3JlcXVpcmVkYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1NH19XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaXNfcmVxdWlyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQcmV2ZW50cyB0YXNrcyB3aXRoIGFuIGVtcHR5IHZhbHVlIGZyb20gYmVpbmcgc3VibWl0dGVkLlwiICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NTZ9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgYWxsb3dFZGl0cyAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Njl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU3MH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU3MX19LCBcIkVuYWJsZSBUZXh0IEVkaXRpbmdcIiAgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LmFsbG93X2VkaXRzYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU3Mn19XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWxsb3dfZWRpdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FsbG93cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoaXMgYmxvY2sgdG8gYmUgZWRpdGVkIGluIHRhc2sgbW9kZS4nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTc0fX1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIHR5cGUgPT09IEJMT0NLX1RZUEUuVEVYVF9TRVFVRU5DRSAmJlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2V0dGluZzogJ29yZGVyaW5nX2Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0Rpc2FibGUgT3JkZXJpbmcnLFxuICAgICAgICAgICAgICAgIGZpZWxkTGFiZWw6ICdQcmV2ZW50cyByZS1vcmRlcmluZyBvZiBmaWVsZHMgaW4gdGFza3MuJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2V0dGluZzogJ2RlbGV0ZV9kaXNhYmxlZCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEaXNhYmxlIERlbGV0ZXMnLFxuICAgICAgICAgICAgICAgIGZpZWxkTGFiZWw6ICdQcmV2ZW50cyBkZWxldGlvbiBvZiBmaWVsZHMgaW4gdGFza3MuJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2V0dGluZzogJ2VkaXRfZGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGlzYWJsZSBFZGl0cycsXG4gICAgICAgICAgICAgICAgZmllbGRMYWJlbDogJ1ByZXZlbnRzIGVkaXRpbmcgb2YgZmllbGRzIGluIHRhc2tzLidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHsga2V5OiBpdGVtLnNldHRpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MDR9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjA1fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MDZ9fSwgaXRlbS5sYWJlbClcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwgeyBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19WyR7aXRlbS5zZXR0aW5nfV1gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjA3fX1cbiAgICAgICAgICAgICAgICAgICAgLCAoe2ZpZWxkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0uZmllbGRMYWJlbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwOX19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICAgICwgdHlwZSA9PT0gQkxPQ0tfVFlQRS5SSUNIX1RFWFQgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjIyfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MjN9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MjR9fSwgXCJmb3JtYXRcIilcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5saW5lV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MjV9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5mb3JtYXRgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjI2fX1cbiAgICAgICAgICAgICAgICAgICAgLCAoe2ZpZWxkfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICBbJ0hUTUwnLCAnTWFya2Rvd24nXS5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbkluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmllbGQudmFsdWUgPT09IG9wdGlvbi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBub1NoYWRvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SaWNoVGV4dEZvcm1hdENoYW5nZShlLCBzZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjI5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCAodHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OIHx8XG4gICAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT04gfHxcbiAgICAgICAgICB0eXBlID09PSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTIHx8XG4gICAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04pICYmIChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7IHN0eWxlOiB7bWFyZ2luTGVmdDogMTUsIG92ZXJmbG93OiAnYXV0bycsIG1hcmdpbkJvdHRvbTogMTV9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjUzfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEFycmF5LCB7XG4gICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5vcHRpb25zYCxcbiAgICAgICAgICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3Rpb24sIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjU3fX1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NTR9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAsIHR5cGUgPT09IEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRSAmJiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50V3JhcHBlciwgeyBzdHlsZToge21hcmdpbkxlZnQ6IDE1LCBvdmVyZmxvdzogJ2F1dG8nLCBtYXJnaW5Cb3R0b206IDE1fSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY3Mn19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRBcnJheSwge1xuICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YWAsXG4gICAgICAgICAgICAgIHJlbmRlcjogKGFycmF5SGVscGVycykgPT4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjc2fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZXF1ZW5jZSwge1xuICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlIZWxwZXJzOiBhcnJheUhlbHBlcnMsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblJlZjogb3JpZ2luUmVmLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbCxcbiAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY3N319XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIG1lbnVQb3J0YWwoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhbmRhcmRNZW51LCB7IG1lbnVQcm9wczogbWVudVByb3BzLCBtZW51SXRlbXM6IG1lbnVJdGVtcyhhcnJheUhlbHBlcnMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjg5fX0gKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY3M319XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxGb290ZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjk3fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgb25DbGljazogb25TYXZlLCBkaXNhYmxlZDogYmxvY2tFcnJvciB8fCBoYXNFcnJvcnMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OTh9fSwgXCJTYXZlXCJcblxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogb25DbG9zZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcwMX19LCBcIkNhbmNlbFwiXG5cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdCbG9ja01vZGFsXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9RdWV1ZUJ1aWxkZXIudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9LyoqXG4gKiBGSVhNRTogSXNzdWUgd2l0aCBmaXJlZm94IHdoZW5cbiAqIGRyb3BlZCBvbiBwbGFjZWhvbGRlci5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TVFJNTC9yZWFjdC1ncmlkLWxheW91dC9wdWxsLzEwNTNcbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCBVVUlEIGZyb20gJ3V1aWRqcydcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZEFycmF5LH0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtCTE9DS1MsIEJMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgZ2V0QmxvY2tEaW1zIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRCbG9ja0RpbXMnXG5cbmltcG9ydCB1c2VNb2RhbCBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvaG9va3MvdXNlTW9kYWwnXG5pbXBvcnQgTmV3QmxvY2tNb2RhbCBmcm9tICcuL05ld0Jsb2NrTW9kYWwnXG5pbXBvcnQgQnVpbGRlckhlYWRlciBmcm9tICcuL0J1aWxkZXJIZWFkZXInXG5pbXBvcnQgQmxvY2tDb21wb25lbnQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tDb21wb25lbnQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgUkdMIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1JHTCdcbmltcG9ydCB7cXVldWVTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgQmxvY2tXcmFwcGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrV3JhcHBlcidcbmltcG9ydCBDb25maXJtYXRpb25Nb2RhbCBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbCdcblxuXG5cblxuXG5cblxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5SR0xfQkFDS0dST1VORFxufSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGhlaWdodDogJ2NhbGMoMTAwdmggLSA1MHB4KScsXG4gIG92ZXJmbG93OiAnc2Nyb2xsJ1xufSlcblxuY29uc3QgRHJhZ2dhYmxlRWwgPSBzdHlsZWQuZGl2KHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlOGVDZWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgbWFyZ2luOiAnNXB4IDEwcHgnLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIG1pbkhlaWdodDogJzcycHgnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdncmFiJyxcbiAgJzpob3Zlcic6IHtcbiAgICBib3JkZXJDb2xvcjogJyNkMWQ5ZGQnXG4gIH1cbn0pXG5cbmNvbnN0IEljb25Cb3ggPSBzdHlsZWQuZGl2KCh7YmFja2dyb3VuZENvbG9yfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yLFxuICBib3JkZXJSYWRpdXM6IDUsXG4gIG1hcmdpblJpZ2h0OiAxMCxcbiAgcGFkZGluZzogNSxcbiAgd2lkdGg6IDQ4LFxuICBtaW5XaWR0aDogNDhcbn0pKVxuXG5jb25zdCBFbXB0eVN0YXRlID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDM4LFxuICBjb2xvcjogJyNmZmYnXG59KVxuXG5jb25zdCBCbG9ja0luZm8gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgdGV4dEFsaWduOiAnbGVmdCdcbn0pXG5cbmNvbnN0IE5vdGUgPSBzdHlsZWQuc3Bhbih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFNpemU6IDEyLFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXG4gIFdlYmtpdExpbmVDbGFtcDogMixcbiAgV2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnXG59KVxuXG5jb25zdCBCbG9ja0NvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZThlQ2VlJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y2ZjhmOScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gIHdpZHRoOiAzNTAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgdG9wOiAnMHB4J1xufSlcblxuY29uc3QgQmxvY2tBcmVhID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnXG59KVxuXG5jb25zdCBQcmltYXJ5VGV4dCA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6IDUwLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIHBhZGRpbmc6IDE1LFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFNlY29uZGFyeVRleHQgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA1MCxcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIHdpZHRoOiAnMzAlJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufSlcblxuY29uc3QgTmV3UXVldWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3F1ZXVlLCBvblN1Ym1pdEhhbmRsZXIsIG9yZ0lkfSA9IHByb3BzXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7aWQ6IHF1ZXVlSWR9ID0gcXVldWUgfHwge31cbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IFtjdXJyZW50QmxvY2tJZCwgc2V0Q3VycmVudEJsb2NrSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbZHJvcHBpbmdJdGVtLCBzZXREcm9wcGluZ0l0ZW1dID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3F1ZXVlSGFzQ2hhbmdlcywgc2V0UXVldWVIYXNDaGFuZ2VzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHttb2RhbFBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBjbG9zZVBvcnRhbH0gPSB1c2VNb2RhbCh7bm9DbG9zZTogdHJ1ZX0pXG4gIGNvbnN0IHtcbiAgICBtb2RhbFBvcnRhbDogY29uZmlybUNvbmZpcm1hdGlvbixcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZUNvbmZpcm1hdGlvbixcbiAgICBjbG9zZVBvcnRhbDogY2xvc2VDb25maXJtYXRpb25cbiAgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpXG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHF1ZXVlSWQgPyBxdWV1ZSA6IHtuYW1lOiAnUXVldWUgVGl0bGUnLCBkYXRhOiBbXX1cbiAgY29uc3QgY2FuY2VsVXJsID0gcXVldWVJZCA/IGAvcXVldWVzLyR7cXVldWVJZH1gIDogYC9xdWV1ZXNgXG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soXG4gICAgKFxuICAgICAgbGF5b3V0LFxuICAgICAgaXRlbSxcbiAgICAgIGFycmF5SGVscGVycyxcbiAgICAgIHNldEZpZWxkVmFsdWUsXG4gICAgICBkYXRhXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB7aX0gPSBpdGVtXG4gICAgICBpZiAoaSkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdMYXlvdXQgPSBsYXlvdXQuZmlsdGVyKChmKSA9PiBmLmkgPT09IGl0ZW0ubGF5b3V0LmkpWzBdXG4gICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBsYXlvdXQ6IG5ld0xheW91dH1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YWAsIG5ld0RhdGEpXG4gICAgICAgIGNvbnN0IHt0eXBlfSA9IGRyb3BwaW5nSXRlbSB8fCB7fVxuICAgICAgICBjb25zdCBpc0V4dGVuZGVkVHlwZSA9IFtcbiAgICAgICAgICBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04sXG4gICAgICAgICAgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04sXG4gICAgICAgICAgQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFUyxcbiAgICAgICAgICBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTlxuICAgICAgICBdLmluY2x1ZGVzKHR5cGUpXG5cbiAgICAgICAgY29uc3QgdXNlc1BsYWNlaG9sZGVyID0gW1xuICAgICAgICAgIEJMT0NLX1RZUEUuRU1BSUwsXG4gICAgICAgICAgQkxPQ0tfVFlQRS5FTUJFRCxcbiAgICAgICAgICBCTE9DS19UWVBFLklNQUdFLFxuICAgICAgICAgIEJMT0NLX1RZUEUuTElOSyxcbiAgICAgICAgICBCTE9DS19UWVBFLk5VTUJFUixcbiAgICAgICAgICBCTE9DS19UWVBFLlJJQ0hfVEVYVCxcbiAgICAgICAgICBCTE9DS19UWVBFLlRFWFQsXG4gICAgICAgICAgQkxPQ0tfVFlQRS5WSURFTyxcbiAgICAgICAgICBCTE9DS19UWVBFLkRBVEVcbiAgICAgICAgXS5pbmNsdWRlcyh0eXBlKVxuXG4gICAgICAgIGNvbnN0IGZvcm1TZXF1ZW5jZSA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIGlzX3JlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHRTZXF1ZW5jZSA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBbXSxcbiAgICAgICAgICAgIG9yZGVyaW5nX2Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlbGV0ZV9kaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBlZGl0X2Rpc2FibGVkOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpbmdsZU9yTXVsdGlTZWxlY3Rpb24gPSB7XG4gICAgICAgICAgW3R5cGVdOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8xJywgbmFtZTogJ09wdGlvbiAxJ30sXG4gICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8yJywgbmFtZTogJ09wdGlvbiAyJ30sXG4gICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8zJywgbmFtZTogJ09wdGlvbiAzJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZUVudGl0eVNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzEnLCBuYW1lOiAnT3B0aW9uIDEnfSxcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzInLCBuYW1lOiAnT3B0aW9uIDInfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHVzZV9wbGFjZWhvbGRlcjogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd19lZGl0czogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYm91bmRpbmdCb3hTZWxlY3Rpb24gPSB7XG4gICAgICAgICAgW3R5cGVdOiB7XG4gICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8xJywgbmFtZTogJ09wdGlvbiAxJ30sXG4gICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8yJywgbmFtZTogJ09wdGlvbiAyJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3RoZXJUeXBlcyA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIC4uLih0eXBlID09PSBCTE9DS19UWVBFLlJJQ0hfVEVYVCAmJiB7Zm9ybWF0OiAnaHRtbCd9KSxcbiAgICAgICAgICAgIC4uLih1c2VzUGxhY2Vob2xkZXIgJiYge3VzZV9wbGFjZWhvbGRlcjogZmFsc2V9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0aW9ucyA9XG4gICAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFXG4gICAgICAgICAgICA/IGZvcm1TZXF1ZW5jZVxuICAgICAgICAgICAgOiBpc0V4dGVuZGVkVHlwZVxuICAgICAgICAgICAgPyBzaW5nbGVPck11bHRpU2VsZWN0aW9uXG4gICAgICAgICAgICA6IG90aGVyVHlwZXNcblxuICAgICAgICBpZiAodHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04pIHtcbiAgICAgICAgICBvcHRpb25zID0gbmFtZUVudGl0eVNlbGVjdGlvblxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IGJvdW5kaW5nQm94U2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IEJMT0NLX1RZUEUuVEVYVF9TRVFVRU5DRSkge1xuICAgICAgICAgIG9wdGlvbnMgPSB0ZXh0U2VxdWVuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0Jsb2NrID0ge1xuICAgICAgICAgIGlzTmV3OiB0cnVlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgX2lkOiBpLFxuICAgICAgICAgIGlkOiBgJHt0eXBlfV9pZGAsXG4gICAgICAgICAgbmFtZTogYCR7QkxPQ0tTLmZpbHRlcigoYikgPT4gYi50eXBlID09PSB0eXBlKVswXS50aXRsZX0gQmxvY2sgVGl0bGVgLFxuICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIGlzRHJhZ2dhYmxlOiB1bmRlZmluZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfVxuICAgICAgICBhcnJheUhlbHBlcnMucHVzaChuZXdCbG9jaylcbiAgICAgICAgc2V0Q3VycmVudEJsb2NrSWQobmV3QmxvY2suX2lkKVxuICAgICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgICAgICB0b2dnbGVQb3J0YWwoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEcmFnZ2luZywgZHJvcHBpbmdJdGVtXVxuICApXG5cbiAgY29uc3Qgb25MYXlvdXRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAobGF5b3V0LCBkYXRhLCBzZXRGaWVsZFZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3TGF5b3V0ID0gbGF5b3V0LmZpbHRlcigoZikgPT4gZi5pID09PSBpdGVtLmxheW91dC5pKVswXVxuICAgICAgICByZXR1cm4gey4uLml0ZW0sIGxheW91dDogbmV3TGF5b3V0fVxuICAgICAgfSlcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFgLCBuZXdEYXRhKVxuICAgIH0sXG4gICAgW2lzRHJhZ2dpbmcsIGRyb3BwaW5nSXRlbV1cbiAgKVxuXG4gIGNvbnN0IG9uTW91c2VEb3duID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRJc0RyYWdnaW5nKHRydWUpXG4gICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uTW91c2VVcCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0SXNEcmFnZ2luZyhmYWxzZSlcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25EcmFnU3RhcnQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKVxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xuICAgICAgY29uc3Qge3R5cGV9ID0gZS50YXJnZXQuZGF0YXNldCB8fCB7fVxuICAgICAgY29uc3QgZWxMYXlvdXQgPSBnZXRCbG9ja0RpbXModHlwZSlcbiAgICAgIHNldERyb3BwaW5nSXRlbShPYmplY3QuYXNzaWduKHt9LCB7aTogVVVJRC5nZW5WNCgpLnRvU3RyaW5nKCl9LCBlbExheW91dCwge3R5cGV9KSlcbiAgICB9LFxuICAgIFtpc0RyYWdnaW5nLCBkcm9wcGluZ0l0ZW1dXG4gIClcblxuICBjb25zdCBvbkRyYWdFbmQgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0SXNEcmFnZ2luZyhmYWxzZSlcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdncmFiJ1xuICAgIH0sXG4gICAgW2lzRHJhZ2dpbmcsIGRyb3BwaW5nSXRlbV1cbiAgKVxuXG4gIC8vIG1lbW9pemVcbiAgY29uc3QgcmVuZGVyQmxvY2tzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlcywgYXJyYXlIZWxwZXJzLCBoYW5kbGVDaGFuZ2UsIHNldEZpZWxkVmFsdWUsIGVycm9ycykgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlcy5kYXRhLm1hcCgoYmxvY2ssIGlkeCkgPT4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrV3JhcHBlciwge1xuICAgICAgICAgIGtleTogX29wdGlvbmFsQ2hhaW4oW2Jsb2NrLCAnYWNjZXNzJywgXyA9PiBfLmxheW91dCwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIuaV0pIHx8IGJsb2NrLl9pZCxcbiAgICAgICAgICB0eXBlOiBibG9jay50eXBlLFxuICAgICAgICAgICdkYXRhLWdyaWQnOiBibG9jay5sYXlvdXQsXG4gICAgICAgICAgaW5kZXg6IGlkeCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyNn19XG4gICAgICAgIFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0NvbXBvbmVudCwge1xuICAgICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRWRpdGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgICAgICAgIG9uRGVsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGFycmF5SGVscGVycy5yZW1vdmUoaWR4KVxuICAgICAgICAgICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRWRpdDogKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50QmxvY2tJZChibG9jay5faWQpXG4gICAgICAgICAgICAgIHRvZ2dsZVBvcnRhbCgpXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMyfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICkpXG4gICAgfSxcbiAgICBbXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgaW5pdGlhbFZhbHVlczogaW5pdGlhbFZhbHVlcyxcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHF1ZXVlU2NoZW1hLFxuICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgdmFsaWRhdGVPbk1vdW50OiB0cnVlLFxuICAgICAgb25TdWJtaXQ6IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBvblN1Ym1pdEhhbmRsZXIodmFsdWVzLCBvcmdJZClcbiAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXMoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXModHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgIGlubmVyUmVmOiBmb3JtUmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzU4fX1cbiAgICBcbiAgICAgICwgKHtoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2UsIHZhbHVlcywgZXJyb3JzLCB0b3VjaGVkLCBzZXRGaWVsZFZhbHVlLCBpc1ZhbGlkfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNzd9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1aWxkZXJIZWFkZXIsIHtcbiAgICAgICAgICAgICAgcXVldWVJZDogcXVldWVJZCxcbiAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzOiBzZXRRdWV1ZUhhc0NoYW5nZXMsXG4gICAgICAgICAgICAgIHF1ZXVlSGFzQ2hhbmdlczogcXVldWVIYXNDaGFuZ2VzLFxuICAgICAgICAgICAgICB0b2dnbGVDb25maXJtYXRpb246IHRvZ2dsZUNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgIGhhbmRsZUJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICAgICAgZXJyb3I6IEJvb2xlYW4odG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lKSxcbiAgICAgICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3OH19XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRBcnJheSwge1xuICAgICAgICAgICAgICBuYW1lOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzkyfX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0NvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOTN9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeVRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzk0fX0sIFwiQmxvY2tzXCIpXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0FyZWEsIHsgb25EcmFnT3ZlcjogKGUpID0+IGUucHJldmVudERlZmF1bHQoKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5NX19XG4gICAgICAgICAgICAgICAgICAgICAgLCBCTE9DS1MubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHt0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUsIHBsYWNlaG9sZGVyLCBpY29uQ29sb3IsIGljb259LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcmFnZ2FibGVFbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdHlwZSc6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2VsZWN0YWJsZTogXCJvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0OiBvbkRyYWdTdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOTh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJveCwgeyBiYWNrZ3JvdW5kQ29sb3I6IGljb25Db2xvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwOX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTB9fSwgaWNvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSW5mbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTN9fSwgdGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTR9fSwgZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsICF2YWx1ZXMuZGF0YS5sZW5ndGggJiYgIWlzRHJhZ2dpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlTdGF0ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjJ9fVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQcmltYXJ5VGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjN9fSwgXCJEcmFnIGEgQmxvY2tcIiAgKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyNH19LCBcIlRoaXMgcXVldWUgaXMgY3VycmVudGx5IGVtcHR5LiBEcmFnIGFuZCBkcm9wIGFueSBibG9jayBpbnRvIHRoZSBjYW52YXMgdG8gZ2V0IHN0YXJ0ZWQuXCJcblxuXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJHTCwge1xuICAgICAgICAgICAgICAgICAgICAgIGRyb3BwaW5nSXRlbTogZHJvcHBpbmdJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcHBhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcDogKGxheW91dCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcChsYXlvdXQsIGl0ZW0sIGFycmF5SGVscGVycywgc2V0RmllbGRWYWx1ZSwgX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuZGF0YV0pKVxuICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNEcmFnZ2luZyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbkxheW91dENoYW5nZTogKGxheW91dCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlKGxheW91dCwgX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzQgPT4gXzQuZGF0YV0pLCBzZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRzOiB2YWx1ZXMuZGF0YS5tYXAoKGJsb2NrKSA9PiBibG9jay5sYXlvdXQpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDMwfX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLCByZW5kZXJCbG9ja3ModmFsdWVzLCBhcnJheUhlbHBlcnMsIGhhbmRsZUNoYW5nZSwgc2V0RmllbGRWYWx1ZSwgZXJyb3JzKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIG1vZGFsUG9ydGFsKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5ld0Jsb2NrTW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VQb3J0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogKGZpZWxkLCBkYXRhLCBoYXNDaGFuZ2VzID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXMoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2tJZDogY3VycmVudEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NTF9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIGNvbmZpcm1Db25maXJtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybWF0aW9uTW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VDb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBFeGl0IHdpdGhvdXQgc2F2aW5nYCxcbiAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogYFNhdmUgYW5kIEV4aXRgLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoY2FuY2VsVXJsKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Zvcm1SZWYsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF82ID0+IF82LmhhbmRsZVN1Ym1pdCwgJ2NhbGwnLCBfNyA9PiBfNygpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgb25TYXZlKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDc0fX1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4OX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1F1ZXVlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZWxlY3Rpb24udHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtGaWVsZCwgdXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBDU1ZJbnB1dCBmcm9tICdjbGllbnQvY29tcG9uZW50cy9DU1ZJbnB1dCdcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IFJvb3RCdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUm9vdEJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAndW5pdmVyc2FsL3V0aWxzL3NsdWdpZnknXG5cbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgZ2V0SXRlbVN0eWxlIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJdGVtU3R5bGUnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkKFJvb3RCdXR0b24pKHtcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgbWFyZ2luVG9wOiAnNXB4JyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbn0pXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YGBcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogMTBweDtcbmBcbmNvbnN0IENTVldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggMTVweDtcbmBcbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnNXB4IDAnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuY29uc3QgU2VsZWN0aW9uVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5jb25zdCBBY3Rpb25zQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDVweCAxNXB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuYFxuY29uc3QgSW1wb3J0VGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgb3V0bGluZTogMCxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGp1c3RpZnlTZWxmOiAnZW5kJ1xufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRlbnRXcmFwcGVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gICR7Q29udGVudFdyYXBwZXJ9LmZvY3VzZWQgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYFxuXG5jb25zdCBTZWxlY3Rpb25PcHRpb24gPSAoe1xuICBwcm92aWRlZCxcbiAgc25hcHNob3QsXG4gIG9wdElkeCxcbiAgZGF0YSxcbiAgaW5kZXgsXG4gIHR5cGUsXG4gIHNldEZpZWxkVmFsdWUsXG4gIGFycmF5SGVscGVycyxcbiAgZXJyb3JzLFxuICBtaW5PcHRpb25zLFxuICBvcHRpb25SZWZzLFxuICBmb2N1c2VkT3B0aW9uLFxuICBzZXRGb2N1c2VkT3B0aW9uXG59KSA9PiB7XG4gIGNvbnN0IHtpc05ld30gPSBkYXRhW2luZGV4XVxuICBjb25zdCBbaWRlbnRpZmllciwgc2V0SWRlbnRpZmllcl0gPSB1c2VTdGF0ZShkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zW29wdElkeF0uaWQpXG4gIGNvbnN0IFtpZGVudGlmaWVyQ2hhbmdlZCwgc2V0SWRlbnRpZmllckNoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9uc1tvcHRJZHhdLm5hbWUpXG4gIGNvbnN0IFtfaWRGaWVsZCwgX2lkTWV0YSwgaWRIZWxwZXJdID0gdXNlRmllbGQoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGApXG5cbiAgY29uc3QgY2FuU2x1Z2lmeSA9IGlzTmV3IHx8IGRhdGFbaW5kZXhdW3R5cGVdLm9wdGlvbnNbb3B0SWR4XS5pc05ld1xuICBjb25zdCBzZXRUb3VjaGVkID0gKCkgPT4ge1xuICAgIGlkSGVscGVyLnNldFRvdWNoZWQodHJ1ZSwgdHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtvcHRpb25SZWZzLCAnYWNjZXNzJywgXzIgPT4gXzIuY3VycmVudCwgJ2FjY2VzcycsIF8zID0+IF8zW2ZvY3VzZWRPcHRpb25dLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNCA9PiBfNC5jdXJyZW50XSkpIHtcbiAgICAgIG9wdGlvblJlZnMuY3VycmVudFtmb2N1c2VkT3B0aW9uXS5jdXJyZW50LmZvY3VzKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG91Y2hlZCgpXG4gIH0sIFtpZGVudGlmaWVyXSlcblxuICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgYXJyYXlIZWxwZXJzLmluc2VydChvcHRJZHggKyAxLCB7aWQ6ICcnLCBuYW1lOiAnJ30pXG4gICAgICBzZXRGb2N1c2VkT3B0aW9uKG9wdElkeCArIDEpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEZvY3VzU3R5bGVzID0gKGVsZW1lbnRzLCBhY3Rpb24pID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgX29wdGlvbmFsQ2hhaW4oW2VsZW1lbnQsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LmNsYXNzTGlzdCwgJ2FjY2VzcycsIF82ID0+IF82W2FjdGlvbl0sICdjYWxsJywgXzcgPT4gXzcoJ2ZvY3VzZWQnKV0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uTmFtZUJsdXIgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGNhblNsdWdpZnkgfHwgIWlkZW50aWZpZXJDaGFuZ2VkKSB7XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGAsIGlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5vcHRpb25zWyR7b3B0SWR4fV0ubmFtZWAsIG5hbWUpXG4gICAgICBzZXRGb2N1c1N0eWxlcyhbYHNlbGVjdGlvbi13cmFwcGVyLSR7b3B0SWR4fWBdLCAncmVtb3ZlJylcbiAgICB9LFxuICAgIFtuYW1lLCBpZGVudGlmaWVyXVxuICApXG5cbiAgY29uc3Qgb25JZEJsdXIgPSAoZSkgPT4ge1xuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGAsIGlkZW50aWZpZXIpXG4gICAgc2V0SWRlbnRpZmllcihpZGVudGlmaWVyKVxuICB9XG5cbiAgY29uc3Qgb25OYW1lQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgc2V0TmFtZSh2YWx1ZSlcbiAgICAgIGlmICghY2FuU2x1Z2lmeSkgcmV0dXJuXG4gICAgICBpZiAoIWlkZW50aWZpZXJDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IHNsdWdJZCA9IHNsdWdpZnkodmFsdWUuc3Vic3RyaW5nKDAsIDMwKSlcbiAgICAgICAgc2V0SWRlbnRpZmllcihzbHVnSWQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbbmFtZSwgaWRlbnRpZmllcl1cbiAgKVxuXG4gIGNvbnN0IG9uSWRlbnRpZmllckNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgIGlmICh2YWx1ZSAhPSAnJykge1xuICAgICAgICBzZXRJZGVudGlmaWVyQ2hhbmdlZCh0cnVlKVxuICAgICAgfVxuICAgICAgc2V0SWRlbnRpZmllcih2YWx1ZSlcbiAgICB9LFxuICAgIFtpZGVudGlmaWVyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge1xuICAgICAgLi4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMsXG4gICAgICByZWY6IHByb3ZpZGVkLmlubmVyUmVmLFxuICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7IGlkOiBgc2VsZWN0aW9uLXdyYXBwZXItJHtvcHRJZHh9YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7IC4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcywgc3R5bGU6IHtmb250U2l6ZTogMTUsIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTn0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODJ9fSwgXCJkcmFnX2luZGljYXRvclwiXG5cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4NX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHJlZjogb3B0aW9uUmVmcy5jdXJyZW50W29wdElkeF0sXG4gICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0ub3B0aW9uc1ske29wdElkeH1dLm5hbWVgLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBvbkNoYW5nZTogb25OYW1lQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xhYmVsJyxcbiAgICAgICAgICAgIG9uRm9jdXM6IChlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvY3VzU3R5bGVzKFtgc2VsZWN0aW9uLXdyYXBwZXItJHtvcHRJZHh9YF0sICdhZGQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmx1cjogb25OYW1lQmx1cixcbiAgICAgICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg2fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0V3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwge1xuICAgICAgICAgICAgaWQ6IGBzZWxlY3Rpb24taW5wdXQtaWQtJHtvcHRJZHh9YCxcbiAgICAgICAgICAgIGFzOiBJbnB1dEZpZWxkLFxuICAgICAgICAgICAgZXJyb3I6IFxuICAgICAgICAgICAgICBlcnJvcnMgJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF0gJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF1bdHlwZV0gJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF1bdHlwZV0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgICBlcnJvcnNbb3B0SWR4XVt0eXBlXS5vcHRpb25zLmlkXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBlcnJvclxuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnICYmIGlkZW50aWZpZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSAnRmllbGQgSUQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG9uSWRlbnRpZmllckNoYW5nZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIklkZW50aWZpZXJcIixcbiAgICAgICAgICAgIG9uQmx1cjogb25JZEJsdXIsXG4gICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAxfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zLmxlbmd0aCA+IG1pbk9wdGlvbnMgJiYgKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVtb3ZlQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGFycmF5SGVscGVycy5yZW1vdmUob3B0SWR4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwgeyBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOX19LCBcImNsb3NlXCIpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdGlvbihwcm9wcykge1xuICBjb25zdCB7b25EcmFnRW5kLCBkYXRhLCBpbmRleCwgdHlwZSwgaGFuZGxlQ2hhbmdlLCBhcnJheUhlbHBlcnMsIHNldEZpZWxkVmFsdWUsIGVycm9yc30gPSBwcm9wc1xuICBjb25zdCBtaW5PcHRpb25zID0gdHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04gPyAxIDogMlxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnbWFudWFsJylcbiAgY29uc3QgW2NhbkltcG9ydCwgc2V0Q2FuSW1wb3J0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtjc3ZPcHRpb25zLCBzZXRDc3ZPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBoYW5kbGVDc3ZJbXBvcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNPcHRpb25zID0gZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9ucy5tYXAoKGkpID0+IGkubmFtZSlcbiAgICBwcmV2aW91c09wdGlvbnMuZm9yRWFjaCgoX3YsIGlkeCkgPT4ge1xuICAgICAgYXJyYXlIZWxwZXJzLnJlbW92ZShpZHgpXG4gICAgfSlcbiAgICBjc3ZPcHRpb25zLmZvckVhY2goKHZhbHVlLCBpZHgpID0+IHtcbiAgICAgIGFycmF5SGVscGVycy5yZXBsYWNlKGlkeCwge2lkOiBzbHVnaWZ5KHZhbHVlLnN1YnN0cmluZygwLCAzMCkpLCBuYW1lOiB2YWx1ZX0pXG4gICAgfSlcbiAgICBzZXRWaWV3KCdtYW51YWwnKVxuICB9XG4gIGNvbnN0IG9wdGlvblJlZnMgPSB1c2VSZWYoW10pXG4gIGNvbnN0IFtmb2N1c2VkT3B0aW9uLCBzZXRGb2N1c2VkT3B0aW9uXSA9IHVzZVN0YXRlKC0xKVxuICBjb25zdCBkYXRhTGVuZ3RoID0gZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9ucy5sZW5ndGhcblxuICBpZiAob3B0aW9uUmVmcy5jdXJyZW50Lmxlbmd0aCAhPT0gZGF0YUxlbmd0aCkge1xuICAgIGlmIChmb2N1c2VkT3B0aW9uICE9PSAtMSkge1xuICAgICAgb3B0aW9uUmVmcy5jdXJyZW50ID0gW1xuICAgICAgICAuLi5vcHRpb25SZWZzLmN1cnJlbnQuc2xpY2UoMCwgZm9jdXNlZE9wdGlvbiksXG4gICAgICAgIG51bGwsXG4gICAgICAgIC4uLm9wdGlvblJlZnMuY3VycmVudC5zbGljZShmb2N1c2VkT3B0aW9uKVxuICAgICAgXVxuICAgIH1cbiAgICBvcHRpb25SZWZzLmN1cnJlbnQgPSBBcnJheShkYXRhTGVuZ3RoKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoXywgaSkgPT4gb3B0aW9uUmVmcy5jdXJyZW50W2ldIHx8IFJlYWN0LmNyZWF0ZVJlZigpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcHBhYmxlLCB7IGRyb3BwYWJsZUlkOiAnY2hvaWNlRHJvcHBhYmxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3Mn19XG4gICAgICAgICwgKHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wcywgcmVmOiBwcm92aWRlZC5pbm5lclJlZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3NH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aW9uVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjc1fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzZ9fSwgJ09wdGlvbnMnKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCB2aWV3ID09PSAnbWFudWFsJyAmJlxuICAgICAgICAgICAgICBkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zLm1hcCgob3B0aW9uLCBvcHRJZHgpID0+IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZSwge1xuICAgICAgICAgICAgICAgICAga2V5OiBgJHtvcHRpb24ubmFtZX0tJHtvcHRJZHh9YCxcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkOiBTdHJpbmcob3B0SWR4KSxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBvcHRJZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODB9fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLCAocHJvdmlkZWQsIHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZVBvcnRhbCA9IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3Rpb25PcHRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkOiBwcm92aWRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdElkeDogb3B0SWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheUhlbHBlcnM6IGFycmF5SGVscGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluT3B0aW9uczogbWluT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlZnM6IG9wdGlvblJlZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNlZE9wdGlvbjogc2V0Rm9jdXNlZE9wdGlvbiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4OH19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlUG9ydGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgcG9ydGFsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLCBwcm92aWRlZC5wbGFjZWhvbGRlclxuICAgICAgICAgICAgLCB2aWV3ID09PSAnaW1wb3J0JyAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NWV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMTV9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDU1ZJbnB1dCwge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGBFbnRlciBhIGxpc3Qgb2YgY29tbWEtc2VwYXJhdGVkIG9wdGlvbnMgdG8gaW1wb3J0YCxcbiAgICAgICAgICAgICAgICAgIHNldENhbkltcG9ydDogc2V0Q2FuSW1wb3J0LFxuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uczogc2V0Q3N2T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfOCA9PiBfOFtpbmRleF0sICdhY2Nlc3MnLCBfOSA9PiBfOVt0eXBlXSwgJ2FjY2VzcycsIF8xMCA9PiBfMTAub3B0aW9ucywgJ2FjY2VzcycsIF8xMSA9PiBfMTEubWFwLCAnY2FsbCcsIF8xMiA9PiBfMTIoKGkpID0+IGkubmFtZSksICdvcHRpb25hbEFjY2VzcycsIF8xMyA9PiBfMTMuam9pbiwgJ2NhbGwnLCBfMTQgPT4gXzE0KCcsJyldKSB8fCAnJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxNn19XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIHZpZXcgPT09ICdtYW51YWwnICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25zQmxvY2ssIHsgc3R5bGU6IHtwYWRkaW5nOiAxMH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjV9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtpZDogJycsIG5hbWU6ICcnLCBpc05ldzogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIHNldEZvY3VzZWRPcHRpb24oZGF0YUxlbmd0aClcbiAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjZ9fVxuICAgICAgICAgICAgICAgICwgXCJBZGQgb3B0aW9uXCJcblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1wb3J0VGV4dCwgeyBvbkNsaWNrOiAoZSkgPT4gc2V0VmlldygnaW1wb3J0JyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzV9fSwgXCJCYXRjaCBJbXBvcnQuLi5cIiApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgdmlldyA9PT0gJ2ltcG9ydCcgJiYgKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbnNCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzl9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWNhbkltcG9ydCB8fCAhY3N2T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNzdkltcG9ydCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0MH19XG4gICAgICAgICAgICAgICAgLCBcIkltcG9ydFwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEltcG9ydFRleHQsIHsgb25DbGljazogKGUpID0+IHNldFZpZXcoJ21hbnVhbCcpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzQ3fX0sIFwiQWRkIE1hbnVhbGx5Li4uXCIgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZS50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RmllbGRBcnJheX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuaW1wb3J0IHtMYWJlbH0gZnJvbSAnLi9OZXdCbG9ja01vZGFsJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IHtCTE9DS19UWVBFLCBCTE9DS1N9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgUm9vdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Sb290QnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvc2x1Z2lmeSdcblxuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCBCaW5hcnlNZW51IGZyb20gJy4vQmluYXJ5TWVudSdcbmltcG9ydCBTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMgZnJvbSAnLi9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMnXG5pbXBvcnQgZ2V0SXRlbVN0eWxlIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJdGVtU3R5bGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEljb25CdXR0b24gPSBzdHlsZWQoUm9vdEJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnMTBweCAwJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYm9yZGVyQm90dG9tOiBgMC41cHggc29saWQgI2VjZWVmMGBcbn0pXG5cbmNvbnN0IFR5cGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250U2l6ZTogMTIsXG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXG59KVxuXG5jb25zdCBGaWVsZFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpblJpZ2h0OiAtNSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXF1ZW5jZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgb3JpZ2luUmVmLFxuICAgIHRvZ2dsZVBvcnRhbCxcbiAgICBvbkRyYWdFbmQsXG4gICAgZGF0YSxcbiAgICBpbmRleCxcbiAgICB0eXBlLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBhcnJheUhlbHBlcnMsXG4gICAgc2V0RmllbGRWYWx1ZVxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wcGFibGUsIHsgZHJvcHBhYmxlSWQ6ICdjaG9pY2VEcm9wcGFibGUnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAsIChwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgLi4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHMsIHJlZjogcHJvdmlkZWQuaW5uZXJSZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19LCAnQmxvY2tzJylcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCByZWY6IG9yaWdpblJlZiwgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fSwgXCIrIEFkZCB0eXBlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIGRhdGFbaW5kZXhdW3R5cGVdLmRhdGEubWFwKChzZXF1ZW5jZSwgc2VxSWR4KSA9PiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhZ2dhYmxlLCB7IGtleTogc2VxSWR4LCBkcmFnZ2FibGVJZDogU3RyaW5nKHNlcUlkeCksIGluZGV4OiBzZXFJZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAgICAgICAgICAgLCAocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBwcm92aWRlZC5pbm5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NH19XG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NX19LCBfb3B0aW9uYWxDaGFpbihbQkxPQ0tTLCAnYWNjZXNzJywgXyA9PiBfLmZpbHRlciwgJ2NhbGwnLCBfMiA9PiBfMigoZikgPT4gZi50eXBlID09PSBfb3B0aW9uYWxDaGFpbihbc2VxdWVuY2UsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLnR5cGVdKSksICdhY2Nlc3MnLCBfNCA9PiBfNFswXSwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUudGl0bGVdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5Nn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICwgKHNlcXVlbmNlLnR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2UudHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzYgPT4gXzZbaW5kZXhdLCAnYWNjZXNzJywgXzcgPT4gXzdbdHlwZV0sICdhY2Nlc3MnLCBfOCA9PiBfOC5kYXRhLCAnYWNjZXNzJywgXzkgPT4gXzlbc2VxSWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzEwID0+IF8xMC5sb2dpY19qdW1wXSkgPyBudWxsIDoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzExID0+IF8xMVtpbmRleF0sICdhY2Nlc3MnLCBfMTIgPT4gXzEyW3R5cGVdLCAnYWNjZXNzJywgXzEzID0+IF8xMy5kYXRhLCAnYWNjZXNzJywgXzE0ID0+IF8xNFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTUgPT4gXzE1LmxvZ2ljX2p1bXBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBQQUxFVFRFLlRFWFRfTUFJTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgXCJjYWxsX3NwbGl0XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyM319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNH19LCBcIk5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5uYW1lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0uaWRgLCBzbHVnSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNX19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGFycmF5SGVscGVycy5yZW1vdmUoc2VxSWR4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzN319XG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzOH19LCBcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQxfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX0sIFwiSWRlbnRpZmllclwiKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0lkZW50aWZpZXInLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQzfX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Zm9udFNpemU6IDE1LCBjb2xvcjogUEFMRVRURS5URVhUX01BSU59LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFwiZHJhZ19pbmRpY2F0b3JcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLnR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZICYmXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bdHlwZV0uZGF0YS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfMTYgPT4gXzE2W2luZGV4XSwgJ2FjY2VzcycsIF8xNyA9PiBfMTdbdHlwZV0sICdhY2Nlc3MnLCBfMTggPT4gXzE4LmRhdGEsICdhY2Nlc3MnLCBfMTkgPT4gXzE5W3NlcUlkeF0sICdvcHRpb25hbEFjY2VzcycsIF8yMCA9PiBfMjAubG9naWNfanVtcF0pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmluYXJ5TWVudSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcUlkeDogc2VxSWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgKGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS50eXBlID09PSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04gfHxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0udHlwZSA9PT0gQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT04pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0udHlwZX1dLm9wdGlvbnNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTczfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VxdWVuY2VTZWxlY3Rpb25PcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXFJZHg6IHNlcUlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcVR5cGU6IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3NH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcwfX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAsIHByb3ZpZGVkLnBsYWNlaG9sZGVyXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9LyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXRsYXNzaWFuL3JlYWN0LWJlYXV0aWZ1bC1kbmQvaXNzdWVzLzEzMVxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcbmltcG9ydCB7TGFiZWx9IGZyb20gJy4vTmV3QmxvY2tNb2RhbCdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBSb290QnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1Jvb3RCdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3VuaXZlcnNhbC91dGlscy9zbHVnaWZ5J1xuXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUgZnJvbSAnLi9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnNNZW51J1xuaW1wb3J0IGdldEl0ZW1TdHlsZSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SXRlbVN0eWxlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkKFJvb3RCdXR0b24pKHtcbiAgdGV4dEFsaWduOiAnZW5kJyxcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbn0pXG5cbmNvbnN0IEZpZWxkVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59KVxuXG5jb25zdCBCdXR0b25CbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICBtYXJnaW5SaWdodDogMTBcbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdGlvbihwcm9wcykge1xuICBjb25zdCB7ZGF0YSwgaW5kZXgsIHR5cGUsIHNlcUlkeCwgaGFuZGxlQ2hhbmdlLCBhcnJheUhlbHBlcnMsIHNldEZpZWxkVmFsdWUsIHNlcVR5cGV9ID0gcHJvcHNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHtkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZH0gPSByZXN1bHRcbiAgICAgIGlmIChcbiAgICAgICAgIWRlc3RpbmF0aW9uIHx8XG4gICAgICAgIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYW5nZWRJdGVtID0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnNbZHJhZ2dhYmxlSWRdXG4gICAgICBjb25zdCBuZXdMaXN0ID0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnNcbiAgICAgIG5ld0xpc3Quc3BsaWNlKHNvdXJjZS5pbmRleCwgMSlcbiAgICAgIG5ld0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjaGFuZ2VkSXRlbSlcbiAgICAgIHNldEZpZWxkVmFsdWUoZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnMsIG5ld0xpc3QpXG4gICAgfSxcbiAgICBbZGF0YSwgaW5kZXhdXG4gIClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc5fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wcGFibGUsIHsgZHJvcHBhYmxlSWQ6ICdvcHRpb25zRHJvcHBhYmxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICAgLCAocHJvdmlkZWQpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IC4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzLCByZWY6IHByb3ZpZGVkLmlubmVyUmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODJ9fVxuICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9ucy5tYXAoKF9vcHRpb24sIG9wdElkeCkgPT4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZSwgeyBrZXk6IG9wdElkeCwgZHJhZ2dhYmxlSWQ6IFN0cmluZyhvcHRJZHgpLCBpbmRleDogb3B0SWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODR9fVxuICAgICAgICAgICAgICAgICwgKHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBwcm92aWRlZC5pbm5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX0sICdPcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dWyR7c2VxVHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5uYW1lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtzZXFUeXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9uc1tvcHRJZHhdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ09wdGlvbicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5M319XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICwgZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnMubGVuZ3RoID4gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExMH19IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlbW92ZUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiBhcnJheUhlbHBlcnMucmVtb3ZlKG9wdElkeCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHN0eWxlOiB7Zm9udFNpemU6IDE1LCBjb2xvcjogUEFMRVRURS5URVhUX01BSU59LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEyfX0sIFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19LCAnSWRlbnRpZmllcicpXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtzZXFUeXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9uc1tvcHRJZHhdLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdPcHRpb24gaWRlbnRpZmllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTl9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogMTUsIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTn0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjZ9fVxuICAgICAgICAgICAgICAgICAgICAgICwgXCJkcmFnX2luZGljYXRvclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdhY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ2FjY2VzcycsIF8zID0+IF8zLmRhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5sb2dpY19qdW1wXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnNNZW51LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxSWR4OiBzZXFJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcVR5cGU6IHNlcVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdElkeDogb3B0SWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM1fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLCBwcm92aWRlZC5wbGFjZWhvbGRlclxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1M319XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtpZDogJycsIG5hbWU6ICcnfSlcbiAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU0fX1cbiAgICAgICAgLCBcIkFkZCBvcHRpb25cIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQge0NvbnRlbnRCbG9ja30gZnJvbSAnLi9OZXdCbG9ja01vZGFsJ1xuaW1wb3J0IHtTbWFsbExhYmVsLCBTdHlsZWRCdXR0b24sIFN0eWxlZEljb259IGZyb20gJy4vQmluYXJ5TWVudSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2RhdGEsIGluZGV4LCB0eXBlLCBzZXFUeXBlLCBzZXFJZHgsIG9wdElkeCwgc2V0RmllbGRWYWx1ZX0gPSBwcm9wc1xuICBjb25zdCB7dG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQb3J0YWwsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9MRUZULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBwYXJlbnRJZDogJ3BvcnRhbCdcbiAgfSlcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdhY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ2FjY2VzcycsIF8zID0+IF8zLmRhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtzZXFJZHhdLCAnYWNjZXNzJywgXzUgPT4gXzVbc2VxVHlwZV0sICdhY2Nlc3MnLCBfNiA9PiBfNi5vcHRpb25zLCAnYWNjZXNzJywgXzcgPT4gXzdbb3B0SWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzggPT4gXzguaWRdKVxuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfOSA9PiBfOVtpbmRleF0sICdhY2Nlc3MnLCBfMTAgPT4gXzEwW3R5cGVdLCAnYWNjZXNzJywgXzExID0+IF8xMS5kYXRhLCAnYWNjZXNzJywgXzEyID0+IF8xMltzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTMgPT4gXzEzLmxvZ2ljX2p1bXBdKVxuICAgID8gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmxvZ2ljX2p1bXBbc2VsZWN0ZWRPcHRpb25dXG4gICAgOiBudWxsXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFcbiAgICAuZmlsdGVyKCh7aWR9KSA9PiBpZCAhPT0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmlkKVxuICAgIC5tYXAoKHtpZCwgbmFtZX0pID0+ICh7XG4gICAgICBsYWJlbDogbmFtZSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLiR7c2VsZWN0ZWRPcHRpb259YCwgaWQpXG4gICAgfSkpXG4gIG1lbnVJdGVtcy5wdXNoKFxuICAgIHtcbiAgICAgIGxhYmVsOiAnQ29udGludWUgdG8gbmV4dCBxdWVzdGlvbicsXG4gICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC4ke3NlbGVjdGVkT3B0aW9ufWAsXG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRW5kJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLiR7c2VsZWN0ZWRPcHRpb259YCwgbnVsbClcbiAgICB9XG4gIClcbiAgY29uc3QgbGFiZWwgPVxuICAgIHNlbGVjdGVkVmFsdWUgPT09IG51bGwgPyAnRW5kJyA6IHNlbGVjdGVkVmFsdWUgPyBzZWxlY3RlZFZhbHVlIDogJ0NvbnRpbnVlIHRvIG5leHQgcXVlc3Rpb24nXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX0sIFwiSnVtcCB0b1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJ1dHRvbiwgeyByZWY6IG9yaWdpblJlZiwgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjd9fSwgc2VsZWN0ZWRWYWx1ZSB8fCBsYWJlbClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OH19LCBcImV4cGFuZF9tb3JlXCIpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wcywgbWVudUl0ZW1zOiBtZW51SXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MX19ICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnVcbiIsIlxuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBnZXRCbG9ja0RpbXMgPSAodHlwZSkgPT4ge1xuICBsZXQgbGF5b3V0ID0ge31cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQVVESU86XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDUsXG4gICAgICAgIG1pbkg6IDIsXG4gICAgICAgIHc6IDUsXG4gICAgICAgIGg6IDJcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkJJTkFSWTpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMyxcbiAgICAgICAgdzogNCxcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuSU1BR0U6XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDQsXG4gICAgICAgIG1pbkg6IDMsXG4gICAgICAgIHc6IDQsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk5VTUJFUjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuREFURTpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMyxcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiAzLFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBtaW5IOiAyLFxuICAgICAgICBoOiAzXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5FTUFJTDpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgdzogNSxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTElOSzpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgdzogNSxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVklERU86XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDUsXG4gICAgICAgIG1pbkg6IDQsXG4gICAgICAgIHc6IDYsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogMTAsXG4gICAgICAgIG1pbkg6IDEwLFxuICAgICAgICB3OiAxMCxcbiAgICAgICAgaDogMTBcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA1LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiAxMCxcbiAgICAgICAgaDogOVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRU1CRUQ6XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDQsXG4gICAgICAgIG1pbkg6IDQsXG4gICAgICAgIHc6IDYsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlBERjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogNCxcbiAgICAgICAgdzogNixcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuUklDSF9URVhUOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA1LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA2LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBsYXlvdXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QmxvY2tEaW1zXG4iLCIvKipcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2hhZ2VtYW5uLzM4MmFkZmM1N2FkYmQ1YWYwNzhkYzkzZmVlZjAxZmUxXG4gKiBtb2RpZmllZDogUmVwbGFjZSBoeXBoZW5zIHdpdGggdW5kZXJzY29yZXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbHVnaWZ5KHN0cikge1xuICBjb25zdCBhID0gJ8Ogw6HDosOkw6bDo8OlxIHEg8SFw6fEh8SNxJHEj8Oow6nDqsOrxJPEl8SZxJvEn8e14binw67Dr8OtxKvEr8OsxYLhuL/DscWEx7nFiMO0w7bDssOzxZPDuMWNw7XFkeG5lcWVxZnDn8WbxaHFn8iZxaXIm8O7w7zDucO6xavHmMWvxbHFs+G6g+G6jcO/w73FvsW6xbzCty9fLDo7J1xuICBjb25zdCBiID0gJ2FhYWFhYWFhYWFjY2NkZGVlZWVlZWVlZ2doaWlpaWlpbG1ubm5ub29vb29vb29vcHJyc3Nzc3N0dHV1dXV1dXV1dXd4eXl6enpfX19fX18nXG4gIGNvbnN0IHAgPSBuZXcgUmVnRXhwKGEuc3BsaXQoJycpLmpvaW4oJ3wnKSwgJ2cnKVxuXG4gIHJldHVybiBzdHJcbiAgICAudG9TdHJpbmcoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJ18nKVxuICAgIC5yZXBsYWNlKHAsIChjKSA9PiBiLmNoYXJBdChhLmluZGV4T2YoYykpKVxuICAgIC5yZXBsYWNlKC8mL2csICdfYW5kXycpXG4gICAgLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpXG4gICAgLnJlcGxhY2UoL1xcLVxcLSsvZywgJ18nKVxuICAgIC5yZXBsYWNlKC9eLSsvLCAnJylcbiAgICAucmVwbGFjZSgvLSskLywgJycpXG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9