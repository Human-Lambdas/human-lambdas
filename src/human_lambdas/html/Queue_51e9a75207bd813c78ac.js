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
      }, renderBlocks(values, arrayHelpers, handleChange, setFieldValue, JSON.stringify(errors))), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewBlockModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ1NWSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1VuZGVybGluZWRJbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2hvb2tzL3VzZUtleVByZXNzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9RdWV1ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQmluYXJ5TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvQnVpbGRlckhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvTmV3QmxvY2tNb2RhbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvUXVldWVCdWlsZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0QmxvY2tEaW1zLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvc2x1Z2lmeS50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJMYWJlbCIsImNvbG9yIiwiUEFMRVRURSIsIlRFWFRfR1JBWSIsImJhY2tncm91bmQiLCJjdXJzb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJDU1ZJbnB1dCIsImxhYmVsIiwic2V0Q2FuSW1wb3J0Iiwic2V0T3B0aW9ucyIsImluaXRpYWxWYWx1ZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2V0Q3N2Um93IiwidmFsdWUiLCJjc3YiLCJub2hlYWRlciIsIm91dHB1dCIsImlnbm9yZUVtcHR5IiwiZnJvbVN0cmluZyIsInRoZW4iLCJjc3ZSb3ciLCJoYXNJbnZhbGlkVmFsdWVzIiwibGVuZ3RoIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJUZXh0QXJlYSIsIm1pblJvd3MiLCJtYXhSb3dzIiwib25DaGFuZ2UiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImRlZmF1bHRQcm9wcyIsIm9wdGlvbnMiLCJTdGFuZGFyZE1lbnUiLCJwcm9wcyIsIm1lbnVQcm9wcyIsIm1lbnVJdGVtcyIsIk1lbnUiLCJhcmlhTGFiZWwiLCJtYXAiLCJvbkNsaWNrIiwiaWR4IiwiTWVudUl0ZW0iLCJrZXkiLCJwYWRkaW5nTGVmdCIsInVzZXJTZWxlY3QiLCJCQUNLR1JPVU5EX01BSU4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJCT1JERVJfTUFJTl9HUkFZIiwiY29udGVudCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJJbnB1dCIsIlBSSU1BUllfTUFJTiIsIkNoZWNrYm94IiwibWVtbyIsImF1dG9Gb2N1cyIsImRpc2FibGVkIiwiaWQiLCJjaGVja2VkIiwibmFtZSIsInR5cGUiLCJodG1sRm9yIiwiV3JhcHBlciIsImljb24iLCJhcHBlYXJhbmNlIiwib3V0bGluZSIsIm1hcmdpbiIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbSIsIkVSUk9SX01BSU4iLCJib3hTaXppbmciLCJURVhUX01BSU4iLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwibGluZUhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJDb2xvciIsIlN0eWxlZEljb24iLCJJY29uIiwiVW5kZXJsaW5lZElucHV0RmllbGQiLCJmb3J3YXJkUmVmIiwicmVmIiwiYXV0b0NvbXBsZXRlIiwib25CbHVyIiwib25Gb2N1cyIsIm9uS2V5RG93biIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJCb29sZWFuIiwidXNlS2V5UHJlc3MiLCJ0YXJnZXRLZXkiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsImRvd25IYW5kbGVyIiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ1bmRlZmluZWQiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiUXVldWUiLCJ1c2VyIiwib3JnSWQiLCJxdWV1ZSIsInNldFF1ZXVlIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0YXRlIiwidXNlTG9jYXRpb24iLCJxdWV1ZUlkIiwidXNlUGFyYW1zIiwiZmV0Y2hRdWV1ZSIsImluZGV4T2YiLCJkYXRhIiwiZXJyb3JzIiwiXyIsImh0dHBIYW5kbGVyIiwiXzIiLCJtZXRob2QiLCJpc0VtcHR5QXJyYXkiLCJfMyIsInRlbXBsYXRlSWQiLCJfNCIsIl81IiwiXzYiLCJoYXNDbG9uZSIsImNsb25lZFF1ZXVlIiwib25TdWJtaXRIYW5kbGVyIiwidmFsdWVzIiwibmV3RGF0YSIsInRyYW5zZm9ybURhdGVzIiwiYmxvY2siLCJibG9ja1R5cGUiLCJyZXN0IiwiYmxvY2tWYWxzIiwibm9IaXN0b3J5IiwiQkxPQ0tfVFlQRSIsIkZPUk1fU0VRVUVOQ0UiLCJuZXdWYWx1ZXMiLCJwYXlsb2FkIiwiXzciLCJfOCIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwic2VnbWVudFRyYWNrIiwid29ya2ZsbG93QWN0aW9ucyIsInVwZGF0ZVF1ZXVlIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsInB1c2giLCJfOSIsIl8xMCIsIkVycm9yIiwiYWRkUXVldWUiLCJRdWV1ZUJ1aWxkZXIiLCJTbWFsbExhYmVsIiwiRmllbGRXcmFwcGVyIiwiU3R5bGVkQnV0dG9uIiwiUGxhaW5CdXR0b24iLCJmbGV4RGlyZWN0aW9uIiwiQk9SREVSX0dSQVlfTkVXIiwiQmluYXJ5TWVudSIsImluZGV4Iiwic2VxSWR4Iiwic2V0RmllbGRWYWx1ZSIsInRvZ2dsZVBvcnRhbCIsInRvZ2dsZVBvcnRhbFllcyIsIm9yaWdpblJlZiIsIm9yaWdpblJlZlllcyIsIm1lbnVQb3J0YWwiLCJtZW51UG9ydGFsWWVzIiwibWVudVByb3BzWWVzIiwidXNlTWVudSIsIk1lbnVQb3NpdGlvbiIsIlVQUEVSX0xFRlQiLCJpc0Ryb3Bkb3duIiwicGFyZW50SWQiLCJ0b2dnbGVQb3J0YWxObyIsIm9yaWdpblJlZk5vIiwibWVudVBvcnRhbE5vIiwibWVudVByb3BzTm8iLCJtZW51SXRlbXNUcnVlIiwiZmlsdGVyIiwibWVudUl0ZW1zRmFsc2UiLCJ0cnVlVmFsdWUiLCJsb2dpY19qdW1wIiwidHJ1ZSIsImZhbHNlVmFsdWUiLCJfMTEiLCJfMTIiLCJmYWxzZSIsInRydWVMYWJlbCIsImZhbHNlTGFiZWwiLCJJbnB1dFdyYXBwZXIiLCJCdWlsZGVySGVhZGVyIiwiaXNWYWxpZCIsImhhbmRsZUJsdXIiLCJzZXRRdWV1ZUhhc0NoYW5nZXMiLCJxdWV1ZUhhc0NoYW5nZXMiLCJ0b2dnbGVDb25maXJtYXRpb24iLCJoYW5kbGVLZXlQcmVzcyIsImtleUNvZGUiLCJibHVyIiwiY2FuY2VsVXJsIiwiQXBwSGVhZGVyIiwibGVmdEJhckl0ZW1zIiwiU2Vjb25kYXJ5QnV0dG9uIiwicmVwbGFjZSIsIm1pZEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsIlByaW1hcnlCdXR0b24iLCJmbG9hdCIsIk1vZGFsUm9vdCIsImlzRXh0ZW5kZWRUeXBlIiwiYm94U2hhZG93IiwiQm94U2hhZG93IiwiTU9EQUwiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1heEhlaWdodCIsIk1vZGFsV3JhcHBlciIsIk1vZGFsSGVhZGVyIiwidGV4dFRyYW5zZm9ybSIsIk5vdGUiLCJ2ZXJ0QWxpZ24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luQm90dG9tIiwiQ29udGVudEJsb2NrIiwiTW9kYWxGb290ZXIiLCJDb250ZW50V3JhcHBlciIsIklubGluZVdyYXBwZXIiLCJOZXdCbG9ja01vZGFsIiwiYXJyYXlIZWxwZXJzIiwiY3VycmVudEJsb2NrSWQiLCJjbG9zZVBvcnRhbCIsImJsb2NrRm9ybWF0IiwibnVtYmVyIiwiZGVmYXVsdCIsImZpbmRJbmRleCIsIl9pZCIsImlzTmV3IiwiY3VycmVudEJsb2NrIiwidGl0bGUiLCJCTE9DS1MiLCJmaW5kIiwicmVhZE9ubHlCbG9ja3MiLCJOVU1CRVIiLCJURVhUIiwiRU1BSUwiLCJMSU5LIiwiUklDSF9URVhUIiwiREFURSIsInJlcXVpcmVkQmxvY2tzIiwiTkFNRURfRU5USVRZX1JFQ09HTklUSU9OIiwiU0lOR0xFX1NFTEVDVElPTiIsIk1VTFRJUExFX1NFTEVDVElPTiIsIkJJTkFSWSIsIkJPVU5ESU5HX0JPWEVTIiwibXVsdGlCbG9ja3MiLCJpc1JlYWRPbmx5IiwiaW5jbHVkZXMiLCJpc19yZXF1aXJlZCIsImlzUmVxdWlyZWQiLCJyZWFkX29ubHkiLCJoYXNQbGFjZWhvbGRlciIsIlRFWFRfU0VRVUVOQ0UiLCJhbGxvd0VkaXRzIiwiaGFzRXJyb3JzIiwiT2JqZWN0IiwiYmxvY2tFcnJvciIsIl8xMyIsIl8xNCIsIl8xNSIsIl8xNiIsIl8xNyIsIl8xOCIsIl8xOSIsIl8yMCIsIl8yMSIsIl8yMiIsIl8yMyIsIl8yNCIsIl8yNSIsIl8yNiIsImlkRXJyb3IiLCJfMjciLCJfMjgiLCJfMjkiLCJfMzAiLCJfMzEiLCJxdWVzdGlvbiIsIm9uQ2xvc2UiLCJyZW1vdmUiLCJvblNhdmUiLCJvbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsImRyYWdnYWJsZUlkIiwiZHJvcHBhYmxlSWQiLCJjaGFuZ2VkSXRlbSIsIm5ld0xpc3QiLCJzcGxpY2UiLCJ1c2VySGFzQ2hhbmdlZElkZW50aWZpZXIiLCJzZXRVc2VySGFzQ2hhbmdlZElkZW50aWZpZXIiLCJvbklkZW50aWZpZXJDaGFuZ2UiLCJvblBsYWNlaG9sZGVyQ2hhbmdlIiwib25SaWNoVGV4dEZvcm1hdENoYW5nZSIsInRvTG93ZXJDYXNlIiwiVVBQRVJfUklHSFQiLCJlc2NhcGUiLCJlbWFpbCIsImxpbmsiLCJiaW5hcnkiLCJzaW5nbGVfc2VsZWN0aW9uIiwibXVsdGlwbGVfc2VsZWN0aW9uIiwiaWRJbnB1dCIsInVzZVJlZiIsIm5hbWVJbnB1dCIsImN1cnJlbnQiLCJfMzIiLCJfMzMiLCJfMzQiLCJfMzUiLCJfMzYiLCJfMzciLCJ1c2VySGFzQ2hhbmdlZE5hbWUiLCJzZXRVc2VySGFzQ2hhbmdlZE5hbWUiLCJvbk5hbWVCbHVyIiwic2x1Z0lkIiwic2x1Z2lmeSIsInN1YnN0cmluZyIsIm9uTmFtZUNoYW5nZSIsIklucHV0RmllbGQiLCJoaWRlRXJyb3JNZXNzYWdlIiwiXzM4IiwiXzM5IiwiXzQwIiwiXzQxIiwiXzQyIiwiXzQzIiwiXzQ0IiwiXzQ1IiwiRGF0ZVBpY2tlciIsIl80NiIsIl80NyIsIl80OCIsIl80OSIsIl81MCIsIl81MSIsIl81MiIsIl81MyIsIkJhc2ljVGV4dEFyZWEiLCJfNTQiLCJfNTUiLCJfNTYiLCJfNTciLCJfNTgiLCJfNTkiLCJfNjAiLCJfNjEiLCJGaWVsZCIsImZpZWxkIiwic2V0dGluZyIsImZpZWxkTGFiZWwiLCJpdGVtIiwib3B0aW9uIiwib3B0aW9uSW5kZXgiLCJUYXNrUmFkaW8iLCJub1NoYWRvdyIsIm1hcmdpbkxlZnQiLCJvdmVyZmxvdyIsIkZpZWxkQXJyYXkiLCJyZW5kZXIiLCJTZWxlY3Rpb24iLCJTZXF1ZW5jZSIsIkZvcm1Db250YWluZXIiLCJGb3JtIiwiUkdMX0JBQ0tHUk9VTkQiLCJDb250YWluZXIiLCJEcmFnZ2FibGVFbCIsIkljb25Cb3giLCJtYXJnaW5SaWdodCIsIm1pbldpZHRoIiwiRW1wdHlTdGF0ZSIsIkJsb2NrSW5mbyIsInRleHRPdmVyZmxvdyIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsIkJsb2NrQ29udGFpbmVyIiwiQmxvY2tBcmVhIiwiUHJpbWFyeVRleHQiLCJTZWNvbmRhcnlUZXh0IiwiTmV3UXVldWUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNldEN1cnJlbnRCbG9ja0lkIiwiZHJvcHBpbmdJdGVtIiwic2V0RHJvcHBpbmdJdGVtIiwibW9kYWxQb3J0YWwiLCJ1c2VNb2RhbCIsIm5vQ2xvc2UiLCJjb25maXJtQ29uZmlybWF0aW9uIiwiY2xvc2VDb25maXJtYXRpb24iLCJmb3JtUmVmIiwiaW5pdGlhbFZhbHVlcyIsIm9uRHJvcCIsImxheW91dCIsIm5ld0xheW91dCIsImYiLCJ1c2VzUGxhY2Vob2xkZXIiLCJFTUJFRCIsIklNQUdFIiwiVklERU8iLCJmb3JtU2VxdWVuY2UiLCJ0ZXh0U2VxdWVuY2UiLCJvcmRlcmluZ19kaXNhYmxlZCIsImRlbGV0ZV9kaXNhYmxlZCIsImVkaXRfZGlzYWJsZWQiLCJzaW5nbGVPck11bHRpU2VsZWN0aW9uIiwibmFtZUVudGl0eVNlbGVjdGlvbiIsInVzZV9wbGFjZWhvbGRlciIsImFsbG93X2VkaXRzIiwiYm91bmRpbmdCb3hTZWxlY3Rpb24iLCJvdGhlclR5cGVzIiwiZm9ybWF0IiwibmV3QmxvY2siLCJiIiwiaXNEcmFnZ2FibGUiLCJvbkxheW91dENoYW5nZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25EcmFnU3RhcnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZGF0YXNldCIsImVsTGF5b3V0IiwiZ2V0QmxvY2tEaW1zIiwiYXNzaWduIiwiVVVJRCIsImdlblY0IiwidG9TdHJpbmciLCJyZW5kZXJCbG9ja3MiLCJCbG9ja1dyYXBwZXIiLCJCbG9ja0NvbXBvbmVudCIsImlzRWRpdGluZyIsIm9uRGVsZXRlIiwib25FZGl0IiwiRm9ybWlrIiwidmFsaWRhdGlvblNjaGVtYSIsInF1ZXVlU2NoZW1hIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbk1vdW50Iiwib25TdWJtaXQiLCJlbmFibGVSZWluaXRpYWxpemUiLCJpbm5lclJlZiIsInRvdWNoZWQiLCJvbkRyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJkZXNjcmlwdGlvbiIsImljb25Db2xvciIsImRyYWdnYWJsZSIsInVuc2VsZWN0YWJsZSIsIlJHTCIsImlzRHJvcHBhYmxlIiwiaXNSZXNpemFibGUiLCJsYXlvdXRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhc0NoYW5nZXMiLCJDb25maXJtYXRpb25Nb2RhbCIsImNhbmNlbExhYmVsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJoYW5kbGVTdWJtaXQiLCJSZW1vdmVCdXR0b24iLCJSb290QnV0dG9uIiwiQ1NWV3JhcHBlciIsIlNlbGVjdGlvblRpdGxlIiwiQWN0aW9uc0Jsb2NrIiwiSW1wb3J0VGV4dCIsImp1c3RpZnlTZWxmIiwiU2VsZWN0aW9uT3B0aW9uIiwicHJvdmlkZWQiLCJzbmFwc2hvdCIsIm9wdElkeCIsIm1pbk9wdGlvbnMiLCJvcHRpb25SZWZzIiwiZm9jdXNlZE9wdGlvbiIsInNldEZvY3VzZWRPcHRpb24iLCJpZGVudGlmaWVyIiwic2V0SWRlbnRpZmllciIsImlkZW50aWZpZXJDaGFuZ2VkIiwic2V0SWRlbnRpZmllckNoYW5nZWQiLCJzZXROYW1lIiwiX2lkRmllbGQiLCJfaWRNZXRhIiwiaWRIZWxwZXIiLCJ1c2VGaWVsZCIsImNhblNsdWdpZnkiLCJzZXRUb3VjaGVkIiwiZm9jdXMiLCJpbnNlcnQiLCJzZXRGb2N1c1N0eWxlcyIsImVsZW1lbnRzIiwiYWN0aW9uIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0Iiwib25JZEJsdXIiLCJkcmFnZ2FibGVQcm9wcyIsImdldEl0ZW1TdHlsZSIsImRyYWdIYW5kbGVQcm9wcyIsImFzIiwidmFsaWRhdGUiLCJ2aWV3Iiwic2V0VmlldyIsImNhbkltcG9ydCIsImNzdk9wdGlvbnMiLCJzZXRDc3ZPcHRpb25zIiwiaGFuZGxlQ3N2SW1wb3J0IiwicHJldmlvdXNPcHRpb25zIiwiX3YiLCJkYXRhTGVuZ3RoIiwic2xpY2UiLCJBcnJheSIsImZpbGwiLCJjcmVhdGVSZWYiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJkcm9wcGFibGVQcm9wcyIsIkRyYWdnYWJsZSIsIlN0cmluZyIsInVzZVBvcnRhbCIsImNoaWxkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwb3J0YWwiLCJqb2luIiwiSWNvbkJ1dHRvbiIsIlR5cGUiLCJGaWVsZFRpdGxlIiwic2VxdWVuY2UiLCJTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMiLCJzZXFUeXBlIiwiQnV0dG9uQmxvY2siLCJfb3B0aW9uIiwiU2VxdWVuY2VTZWxlY3Rpb25PcHRpb25zTWVudSIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRWYWx1ZSIsIkFVRElPIiwibWluVyIsIm1pbkgiLCJ3IiwiaCIsIlBERiIsInN0ciIsImEiLCJwIiwiUmVnRXhwIiwic3BsaXQiLCJjIiwiY2hhckF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHNFQUFyQjtBQUE0RjtBQUU1RjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsS0FBSyxHQUFHO0FBQUE7QUFBQSxHQUFhLE9BQU87QUFDaENDLE9BQUssRUFBRUMsZ0VBQU8sQ0FBQ0MsU0FEaUI7QUFFaENDLFlBQVUsRUFBRSxNQUZvQjtBQUdoQ0MsUUFBTSxFQUFFLE1BSHdCO0FBSWhDQyxTQUFPLEVBQUUsTUFKdUI7QUFLaENDLGdCQUFjLEVBQUUsZUFMZ0I7QUFNaENDLFlBQVUsRUFBRSxRQU5vQjtBQU9oQ0MsWUFBVSxFQUFFLEdBUG9CO0FBUWhDQyxVQUFRLEVBQUUsRUFSc0I7QUFTaENDLFVBQVEsRUFBRSxVQVRzQjtBQVVoQ0MsWUFBVSxFQUFFLGNBVm9CO0FBV2hDQyxPQUFLLEVBQUUsTUFYeUI7QUFZaENDLFdBQVMsRUFBRTtBQVpxQixDQUFQLENBQWIsQ0FBZDs7QUFzQkEsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBQ0MsT0FBRDtBQUFRQyxjQUFSO0FBQXNCQyxZQUF0QjtBQUFrQ0M7QUFBbEMsQ0FBRCxLQUFxRDtBQUNwRSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsc0RBQVEsQ0FBQ0gsWUFBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ0ksS0FBRCxFQUFRQyxRQUFSLElBQW9CRixzREFBUSxDQUFDLEtBQUQsQ0FBbEM7O0FBRUEsUUFBTUcsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFDM0JDLG9EQUFHLENBQUM7QUFDRkMsY0FBUSxFQUFFLElBRFI7QUFFRkMsWUFBTSxFQUFFLEtBRk47QUFHRkMsaUJBQVcsRUFBRTtBQUhYLEtBQUQsQ0FBSCxD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T0FQSSxDQU9JLFFBUEosRUFPYyxHQVBkLEVBUUpBLE9BUkksQ0FRSSxLQVJKLEVBUVcsRUFSWCxFQVNKQSxPQVRJLENBU0ksS0FUSixFQVNXLEVBVFgsQ0FBUDtBQVVELEM7Ozs7Ozs7Ozs7O0FDcEJELGUiLCJmaWxlIjoiUXVldWVfNTFlOWE3NTIwN2JkODEzYzc4YWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ1NWSW5wdXQudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBjc3YgZnJvbSAnY3N2dG9qc29uJ1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbCgoKSA9PiAoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgY3Vyc29yOiAndGV4dCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udFNpemU6IDEyLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGFsbCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpblRvcDogJzVweCdcbn0pKVxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENTVklucHV0ID0gKHtsYWJlbCwgc2V0Q2FuSW1wb3J0LCBzZXRPcHRpb25zLCBpbml0aWFsVmFsdWV9KSA9PiB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRDc3ZSb3cgPSAodmFsdWUpID0+IHtcbiAgICBjc3Yoe1xuICAgICAgbm9oZWFkZXI6IHRydWUsXG4gICAgICBvdXRwdXQ6ICdjc3YnLFxuICAgICAgaWdub3JlRW1wdHk6IHRydWVcbiAgICB9KVxuICAgICAgLmZyb21TdHJpbmcodmFsdWUpXG4gICAgICAudGhlbigoY3N2Um93KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhc0ludmFsaWRWYWx1ZXMgPSBjc3ZSb3cubGVuZ3RoID4gMVxuICAgICAgICBpZiAoaGFzSW52YWxpZFZhbHVlcykge1xuICAgICAgICAgIHNldENhbkltcG9ydChmYWxzZSlcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKGZhbHNlKVxuICAgICAgICAgIHNldENhbkltcG9ydCh0cnVlKVxuICAgICAgICAgIHNldE9wdGlvbnMoY3N2Um93WzBdKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDc3ZSb3codGV4dClcbiAgfSwgW3RleHRdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgIHNldFRleHQodmFsdWUpXG4gICAgICBzZXRDc3ZSb3codmFsdWUpXG4gICAgfSxcbiAgICBbdGV4dF1cbiAgKVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwgeyBtaW5Sb3dzOiAzLCBtYXhSb3dzOiA5LCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCBlcnJvcjogZXJyb3IsIHZhbHVlOiB0ZXh0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjd9fSApXG4gICAgICAsIGxhYmVsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjh9fSwgbGFiZWwpXG4gICAgKVxuICApXG59XG5cbkNTVklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1NWSW5wdXRcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcblxuXG5cblxuXG5cbmNvbnN0IFN0YW5kYXJkTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bWVudVByb3BzLCBtZW51SXRlbXN9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIHsgYXJpYUxhYmVsOiAnU3RhbmRhcmQgZHJvcGRvd24gbWVudScsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX1cbiAgICAgICwgbWVudUl0ZW1zLm1hcCgoe2xhYmVsLCBvbkNsaWNrfSwgaWR4KSA9PiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsga2V5OiBpZHgsIGxhYmVsOiBsYWJlbCwgb25DbGljazogb25DbGljaywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2fX0gKVxuICAgICAgKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQ2hlY2tib3gudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWwoKC8qIHtkaXNhYmxlZH0gKi8pID0+ICh7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgZm9udFdlaWdodDogNDAwLFxuICBmb250U2l6ZTogMTIsXG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGFsbCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZDogUEFMRVRURS5CQUNLR1JPVU5EX01BSU4sXG4gICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGxlZnQ6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnY2FsYyg1MCUgLSAxMHB4KScsXG4gICAgdHJhbnNpdGlvbjogJy4zcyBlYXNlIGJhY2tncm91bmQtY29sb3InXG4gIH1cbn0pKVxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9IHtcbiAgICAvKiBiYWNrZ3JvdW5kOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0xJR0hURVNUfTsgKi9cbiAgICBib3JkZXItY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICB9XG4gICY6Y2hlY2tlZCArICR7TGFiZWx9OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhjM1puSUhkcFpIUm9QU0l5TmlJZ2FHVnBaMmgwUFNJeU1DSWdkbVZ5YzJsdmJqMGlNUzR4SWlCMmFXVjNRbTk0UFNJeUxqQXlPVFk0SUMwME1DNHdPVEF6SURJMklESXdJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNDhJUzB0UjJWdVpYSmhkR1ZrSUdKNUlFbEtVMVpISUNob2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFXTnZibXBoY2k5SlNsTldSeWt0TFQ0OGNHRjBhQ0JrUFNKTk1qY3VPVGMwTXl3dE16WXVNVEkzTW1Nd0xEQXVORFEyTkRJNElDMHdMakUxTmpJMUxEQXVPREkxT0RreklDMHdMalEyT0RjMUxERXVNVE00TXpsc0xURXlMakV5TURVc01USXVNVEl3Tld3dE1pNHlOelkzT1N3eUxqSTNOamM1WXkwd0xqTXhNalVzTUM0ek1USTFJQzB3TGpZNU1UazJOQ3d3TGpRMk9EYzFJQzB4TGpFek9ETTVMREF1TkRZNE56VmpMVEF1TkRRMk5ESTRMREFnTFRBdU9ESTFPRGt6TEMwd0xqRTFOakkxSUMweExqRXpPRE01TEMwd0xqUTJPRGMxYkMweUxqSTNOamM1TEMweUxqSTNOamM1YkMwMkxqQTJNREkzTEMwMkxqQTJNREkzWXkwd0xqTXhNalVzTFRBdU16RXlOU0F0TUM0ME5qZzNOU3d0TUM0Mk9URTVOalVnTFRBdU5EWTROelVzTFRFdU1UTTRNemxqTUN3dE1DNDBORFkwTWprZ01DNHhOVFl5TlN3dE1DNDRNalU0T1RNZ01DNDBOamczTlN3dE1TNHhNemd6T1d3eUxqSTNOamM1TEMweUxqSTNOamM1WXpBdU16RXlOU3d0TUM0ek1USTFJREF1TmpreE9UWTFMQzB3TGpRMk9EYzFJREV1TVRNNE16a3NMVEF1TkRZNE56VmpNQzQwTkRZME1qa3NNQ0F3TGpneU5UZzVNeXd3TGpFMU5qSTFJREV1TVRNNE16a3NNQzQwTmpnM05XdzBMamt5TVRnNExEUXVPVE00TmpKc01UQXVPVGd5TVN3dE1UQXVPVGs0T1dNd0xqTXhNalVzTFRBdU16RXlOU0F3TGpZNU1UazJOQ3d0TUM0ME5qZzNOU0F4TGpFek9ETTVMQzB3TGpRMk9EYzFZekF1TkRRMk5ESTRMREFnTUM0NE1qVTRPVE1zTUM0eE5UWXlOU0F4TGpFek9ETTVMREF1TkRZNE56VnNNaTR5TnpZM09Dd3lMakkzTmpjNVl6QXVNekV5TlN3d0xqTXhNalVnTUM0ME5qZzNOU3d3TGpZNU1UazJOQ0F3TGpRMk9EYzFMREV1TVRNNE16bGFJaUIwY21GdWMyWnZjbTA5SW5OallXeGxLREV1TURBeE9UZ3BJaUJtYVd4c1BTSWpabVptSWo0OEwzQmhkR2crUEM5emRtYysnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDlweDtcbiAgfVxuYFxuXG5jb25zdCBDaGVja2JveCA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHthdXRvRm9jdXMsIGRpc2FibGVkLCBpZCwgY2hlY2tlZCwgbmFtZSwgb25DaGFuZ2UsIGxhYmVsLCB2YWx1ZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHsgaHRtbEZvcjogaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3NH19IC8qIGRpc2FibGVkPXtkaXNhYmxlZH0gKi8sIGxhYmVsKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9VbmRlcmxpbmVkSW5wdXRGaWVsZC50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dCgoe2Vycm9yLCBkaXNhYmxlZCwgaWNvbn0pID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBtYXJnaW46IDAsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7ZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiAnI0NBQ0FDQid9YCxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRixcbiAgZm9udFdlaWdodDogNTAwLFxuICBjdXJzb3I6IGRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdpbnB1dCcsXG4gIGZvbnRTaXplOiAxNixcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgaGVpZ2h0OiAzMixcbiAgcGFkZGluZzogaWNvbiA/ICcwIDEwcHggMCAzMHB4JyA6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiBlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZm9udFNpemU6IDE2LFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBwYWRkaW5nTGVmdDogOFxufSlcblxuY29uc3QgVW5kZXJsaW5lZElucHV0RmllbGQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzLFxuICAgIGRpc2FibGVkLFxuICAgIGVycm9yLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25LZXlEb3duLFxuICAgIG9uQ2hhbmdlLFxuICAgIGljb24sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrLFxuICAgIHJlYWRPbmx5XG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgICwgaWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTN9fSwgaWNvbilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuKGRpc2FibGVkKSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBvbkJsdXI6IG9uQmx1cixcbiAgICAgICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4oZXJyb3IpLFxuICAgICAgICBzcGVsbENoZWNrOiBzcGVsbENoZWNrLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHJlYWRPbmx5OiByZWFkT25seSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk0fX1cbiAgICAgIClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFVuZGVybGluZWRJbnB1dEZpZWxkXG4iLCJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VLZXlQcmVzcyA9ICh0YXJnZXRLZXkpID0+IHtcbiAgY29uc3QgW2tleVByZXNzZWQsIHNldEtleVByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoe2tleX0pIHtcbiAgICBpZiAoa2V5ID09PSB0YXJnZXRLZXkpIHtcbiAgICAgIHNldEtleVByZXNzZWQodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cEhhbmRsZXIgPSAoe2tleX0pID0+IHtcbiAgICBpZiAoa2V5ID09PSB0YXJnZXRLZXkpIHtcbiAgICAgIHNldEtleVByZXNzZWQoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiBrZXlQcmVzc2VkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUtleVByZXNzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvUXVldWUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3VzZUxvY2F0aW9uLCB1c2VQYXJhbXN9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUXVldWVCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9RdWV1ZUJ1aWxkZXInXG5cblxuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICcuLi8uLi8uLi9jbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IGlzRW1wdHlBcnJheSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5J1xuaW1wb3J0IHtcbiAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbixcbiAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvblxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7c2VnbWVudFRyYWNrfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvdXRpbHMvc2VnbWVudElvJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICcuLi8uLi8uLi9jbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHt3b3JrZmxsb3dBY3Rpb25zfSBmcm9tICdjbGllbnQvcmVkdXgvcXVldWVzUmVkdWNlcnMnXG5pbXBvcnQge3RyYW5zZm9ybURhdGVzfSBmcm9tICdjbGllbnQvdXRpbHMvZGF0ZUhlbHBlcnMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUXVldWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXI6IHtvcmdJZH1cbiAgfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IFtxdWV1ZSwgc2V0UXVldWVdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3Qge3BhdGhuYW1lLCBzdGF0ZX0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHtxdWV1ZUlkfSA9IHVzZVBhcmFtcygpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlKCkge1xuICAgICAgaWYgKHBhdGhuYW1lLmluZGV4T2YoJ2VkaXQnKSAhPT0gLTEgJiYgb3JnSWQpIHtcbiAgICAgICAgY29uc3Qge2RhdGEsIGVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uaHR0cEhhbmRsZXIsICdjYWxsJywgXzIgPT4gXzIoXG4gICAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgfVxuICAgICAgICApXSlcbiAgICAgICAgaWYgKGlzRW1wdHlBcnJheShlcnJvcnMpKSB7XG4gICAgICAgICAgc2V0UXVldWUoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFF1ZXVlKClcbiAgfSwgW29yZ0lkLCBwYXRobmFtZV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlKCkge1xuICAgICAgaWYgKF9vcHRpb25hbENoYWluKFtzdGF0ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMudGVtcGxhdGVJZF0pICYmIG9yZ0lkKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBlcnJvcnN9ID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXzQgPT4gXzQuaHR0cEhhbmRsZXIsICdjYWxsJywgXzUgPT4gXzUoXG4gICAgICAgICAgYC9vcmdzLzQwL3F1ZXVlcy8ke3N0YXRlLnRlbXBsYXRlSWR9YCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgfVxuICAgICAgICApXSlcbiAgICAgICAgaWYgKGlzRW1wdHlBcnJheShlcnJvcnMpKSB7XG4gICAgICAgICAgc2V0UXVldWUoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKF9vcHRpb25hbENoYWluKFtzdGF0ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzYgPT4gXzYuaGFzQ2xvbmVdKSkge1xuICAgICAgICBzZXRRdWV1ZShzdGF0ZS5jbG9uZWRRdWV1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hRdWV1ZSgpXG4gIH0sIFtvcmdJZCwgcGF0aG5hbWVdKVxuXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh2YWx1ZXMsIG9yZ0lkKSA9PiB7XG4gICAgICBjb25zdCB7bmFtZSwgZGF0YX0gPSB2YWx1ZXMgfHwge31cbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcCh0cmFuc2Zvcm1EYXRlcykubWFwKChibG9jaykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1R5cGUgPSBibG9ja1tibG9jay50eXBlXVxuICAgICAgICBjb25zdCB7dmFsdWUsIC4uLnJlc3R9ID0gYmxvY2tUeXBlIC8vIHN0cmlwIG91dCB2YWx1ZVxuICAgICAgICBjb25zdCB7aGlzdG9yeSwgLi4uYmxvY2tWYWxzfSA9IHJlc3QgLy8gc3RyaXAgb3V0IGhpc3RvcnlcbiAgICAgICAgY29uc3Qgbm9IaXN0b3J5ID0gYmxvY2sudHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFID8gW10gOiB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHsuLi5ibG9jaywgW2Jsb2NrLnR5cGVdOiB7Li4uYmxvY2tWYWxzLCBoaXN0b3J5OiBub0hpc3Rvcnl9fVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGF0YTogbmV3RGF0YVxuICAgICAgfVxuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgbWV0aG9kOiBxdWV1ZUlkID8gJ1BBVENIJyA6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogbmV3VmFsdWVzXG4gICAgICB9IFxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgaWYgKHF1ZXVlSWQpIHtcbiAgICAgICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF83ID0+IF83Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF84ID0+IF84KFxuICAgICAgICAgICAgYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9YCxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICApXSlcbiAgICAgICAgICBpZiAoIWlzRW1wdHlBcnJheShlcnJvcnMpKSB7XG4gICAgICAgICAgICBlcnJvcnMubWFwKChlcnJvcikgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKSkpXG4gICAgICAgICAgICBzZWdtZW50VHJhY2soYFF1ZXVlIFVwZGF0ZSBGYWlsZWRgLCB7b3JnSWQsIG5hbWUsIHF1ZXVlSWR9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh3b3JrZmxsb3dBY3Rpb25zLnVwZGF0ZVF1ZXVlKGRhdGEpKVxuICAgICAgICAgICAgc2VnbWVudFRyYWNrKCdRdWV1ZSBVcGRhdGUgU3VjY2Vzc2Z1bCcsIHtvcmdJZCwgbmFtZSwgcXVldWVJZH0pXG4gICAgICAgICAgICBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdRdWV1ZSBzdWNjZXNzZnVseSB1cGRhdGVkJykpXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXMvJHtxdWV1ZUlkfWApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtlcnJvcnMsIGRhdGF9ID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXzkgPT4gXzkuaHR0cEhhbmRsZXIsICdjYWxsJywgXzEwID0+IF8xMChcbiAgICAgICAgICAgIGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvY3JlYXRlYCxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICApXSlcbiAgICAgICAgICBpZiAoIWlzRW1wdHlBcnJheShlcnJvcnMpKSB7XG4gICAgICAgICAgICBzZWdtZW50VHJhY2soJ0Vycm9yIGNyZWF0aW5nIG5ldyBxdWV1ZScpXG4gICAgICAgICAgICBlcnJvcnMubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHtpZCwgbmFtZX0gPSBkYXRhXG4gICAgICAgICAgICBkaXNwYXRjaCh3b3JrZmxsb3dBY3Rpb25zLmFkZFF1ZXVlKGRhdGEpKVxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignUXVldWUgc3VjY2Vzc2Z1bHkgY3JlYXRlZCcpKVxuICAgICAgICAgICAgc2VnbWVudFRyYWNrKCczIC0gUXVldWUgQ3JlYXRlZCAtIFtRVUVVRSBGVU5ORUxdJywge1xuICAgICAgICAgICAgICBxdWV1ZUlkOiBpZCxcbiAgICAgICAgICAgICAgb3JnSWQsXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXMvJHtpZH1gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW29yZ0lkXVxuICApXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVCdWlsZGVyLCB7IG9uU3VibWl0SGFuZGxlcjogb25TdWJtaXRIYW5kbGVyLCBvcmdJZDogb3JnSWQsIHF1ZXVlOiBxdWV1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzOH19IClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVldWVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL0JpbmFyeU1lbnUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5cbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTbWFsbExhYmVsID0gc3R5bGVkLmIoe1xuICBmb250U2l6ZTogMTAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgRmllbGRXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzEwMHB4IDFmciAxMHB4JyxcbiAgbWFyZ2luQm90dG9tOiAyLjUsXG4gIG1hcmdpblRvcDogMi41LFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBmb250U2l6ZTogMTMsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWV9ORVd9YFxufSlcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBjb2xvcjogUEFMRVRURS5CT1JERVJfR1JBWV9ORVdcbn0pXG5cbmNvbnN0IEJpbmFyeU1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2RhdGEsIGluZGV4LCB0eXBlLCBzZXFJZHgsIHNldEZpZWxkVmFsdWV9ID0gcHJvcHNcbiAgY29uc3Qge1xuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsWWVzLFxuICAgIG9yaWdpblJlZjogb3JpZ2luUmVmWWVzLFxuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxZZXMsXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNZZXNcbiAgfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX0xFRlQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIHBhcmVudElkOiAncG9ydGFsJ1xuICB9KVxuICBjb25zdCB7XG4gICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWxObyxcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZk5vLFxuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxObyxcbiAgICBtZW51UHJvcHM6IG1lbnVQcm9wc05vXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9MRUZULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBwYXJlbnRJZDogJ3BvcnRhbCdcbiAgfSlcbiAgY29uc3QgbWVudUl0ZW1zVHJ1ZSA9IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFcbiAgICAuZmlsdGVyKCh7aWQsIG5hbWV9KSA9PiBpZCAhPT0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmlkICYmIGlkICE9PSAnJyAmJiBuYW1lICE9PSAnJylcbiAgICAubWFwKCh7aWQsIG5hbWV9KSA9PiAoe1xuICAgICAgbGFiZWw6IG5hbWUsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC50cnVlYCwgaWQpXG4gICAgfSkpXG4gIG1lbnVJdGVtc1RydWUucHVzaChcbiAgICB7XG4gICAgICBsYWJlbDogJ0NvbnRpbnVlIHRvIG5leHQgcXVlc3Rpb24nLFxuICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXAudHJ1ZWAsIHVuZGVmaW5lZClcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRW5kJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLnRydWVgLCBudWxsKVxuICAgIH1cbiAgKVxuICBjb25zdCBtZW51SXRlbXNGYWxzZSA9IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFcbiAgICAuZmlsdGVyKCh7aWQsIG5hbWV9KSA9PiBpZCAhPT0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmlkICYmIGlkICE9PSAnJyAmJiBuYW1lICE9PSAnJylcbiAgICAubWFwKCh7aWQsIG5hbWV9KSA9PiAoe1xuICAgICAgbGFiZWw6IG5hbWUsXG4gICAgICBvbkNsaWNrOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC5mYWxzZWAsIGlkKVxuICAgIH0pKVxuICBtZW51SXRlbXNGYWxzZS5wdXNoKFxuICAgIHtcbiAgICAgIGxhYmVsOiAnQ29udGludWUgdG8gbmV4dCBxdWVzdGlvbicsXG4gICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC5mYWxzZWAsIHVuZGVmaW5lZClcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRW5kJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLmZhbHNlYCwgbnVsbClcbiAgICB9XG4gIClcblxuICBjb25zdCB0cnVlVmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdhY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ2FjY2VzcycsIF8zID0+IF8zLmRhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5sb2dpY19qdW1wLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi50cnVlXSlcbiAgY29uc3QgZmFsc2VWYWx1ZSA9IF9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzcgPT4gXzdbaW5kZXhdLCAnYWNjZXNzJywgXzggPT4gXzhbdHlwZV0sICdhY2Nlc3MnLCBfOSA9PiBfOS5kYXRhLCAnYWNjZXNzJywgXzEwID0+IF8xMFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTEgPT4gXzExLmxvZ2ljX2p1bXAsICdvcHRpb25hbEFjY2VzcycsIF8xMiA9PiBfMTIuZmFsc2VdKVxuICBjb25zdCB0cnVlTGFiZWwgPSB0cnVlVmFsdWUgPT09IG51bGwgPyAnRW5kJyA6IHRydWVWYWx1ZSA/IHRydWVWYWx1ZSA6ICdDb250aW51ZSB0byBuZXh0IHF1ZXN0aW9uJ1xuICBjb25zdCBmYWxzZUxhYmVsID1cbiAgICBmYWxzZVZhbHVlID09PSBudWxsID8gJ0VuZCcgOiBmYWxzZVZhbHVlID8gZmFsc2VWYWx1ZSA6ICdDb250aW51ZSB0byBuZXh0IHF1ZXN0aW9uJ1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA3fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNtYWxsTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA4fX0sIFwiSWYgWUVTXCIgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQnV0dG9uLCB7IHJlZjogb3JpZ2luUmVmWWVzLCBvbkNsaWNrOiB0b2dnbGVQb3J0YWxZZXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDl9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEwfX0sIHRydWVMYWJlbClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTF9fSwgXCJleHBhbmRfbW9yZVwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNX19LCBcIklmIE5PXCIgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQnV0dG9uLCB7IHJlZjogb3JpZ2luUmVmTm8sIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbE5vLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319LCBmYWxzZUxhYmVsKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19LCBcImV4cGFuZF9tb3JlXCIpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbFllcyhSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc1llcywgbWVudUl0ZW1zOiBtZW51SXRlbXNUcnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIxfX0gKSlcbiAgICAgICwgbWVudVBvcnRhbE5vKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhbmRhcmRNZW51LCB7IG1lbnVQcm9wczogbWVudVByb3BzTm8sIG1lbnVJdGVtczogbWVudUl0ZW1zRmFsc2UsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fSApKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5hcnlNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9CdWlsZGVySGVhZGVyLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFVuZGVybGluZWRJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1VuZGVybGluZWRJbnB1dEZpZWxkJ1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbidcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IEFwcEhlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9BcHBIZWFkZXInXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHdpZHRoOiAnMzAwcHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxufSlcblxuY29uc3QgQnVpbGRlckhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcXVldWVJZCxcbiAgICBpc1ZhbGlkLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVCbHVyLFxuICAgIHZhbHVlLFxuICAgIGVycm9yLFxuICAgIHNldFF1ZXVlSGFzQ2hhbmdlcyxcbiAgICBxdWV1ZUhhc0NoYW5nZXMsXG4gICAgdG9nZ2xlQ29uZmlybWF0aW9uXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnRhcmdldC5ibHVyKClcbiAgICB9XG4gIH1cbiAgY29uc3QgY2FuY2VsVXJsID0gcXVldWVJZCA/IGAvcXVldWVzLyR7cXVldWVJZH1gIDogYC9xdWV1ZXNgXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBIZWFkZXIsIHtcbiAgICAgIGxlZnRCYXJJdGVtczogXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiBxdWV1ZUhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ29uZmlybWF0aW9uKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShjYW5jZWxVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX1cbiAgICAgICAgLCBcIkNhbmNlbFwiXG5cbiAgICAgICAgKVxuICAgICAgLFxuICAgICAgbWlkQmFySXRlbXM6IFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0V3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFVuZGVybGluZWRJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICBvbktleURvd246IGhhbmRsZUtleVByZXNzLFxuICAgICAgICAgICAgaWNvbjogJ2VkaXQnLFxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnUXVldWUgVGl0bGUnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgLFxuICAgICAgcmlnaHRCYXJJdGVtczogXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwgeyBkaXNhYmxlZDogIWlzVmFsaWQsIHR5cGU6IFwic3VibWl0XCIsIHN0eWxlOiB7ZmxvYXQ6ICdyaWdodCd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODV9fVxuICAgICAgICAgICwgcXVldWVJZCA/ICdTYXZlJyA6ICdDcmVhdGUnXG4gICAgICAgIClcbiAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ5fX1cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVpbGRlckhlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvTmV3QmxvY2tNb2RhbC50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RmllbGQsIEZpZWxkQXJyYXl9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBDaGVja2JveCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveCdcbmltcG9ydCBUYXNrUmFkaW8gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFza1JhZGlvJ1xuaW1wb3J0IHtCTE9DS19UWVBFLCBCTE9DS1N9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TZWNvbmRhcnlCdXR0b24nXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvc2x1Z2lmeSdcbmltcG9ydCBCYXNpY1RleHRBcmVhIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jhc2ljVGV4dEFyZWEnXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9EYXRlUGlja2VyJ1xuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4vU2VxdWVuY2UnXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gJy4vU2VsZWN0aW9uJ1xuaW1wb3J0IHVzZUtleVByZXNzIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUtleVByZXNzJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTW9kYWxSb290ID0gc3R5bGVkLmRpdigoe2lzRXh0ZW5kZWRUeXBlfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgd2lkdGg6IGlzRXh0ZW5kZWRUeXBlID8gMTAwMCA6IDUwMCxcbiAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaGFkb3c6IEJveFNoYWRvdy5NT0RBTCxcbiAgcGFkZGluZ1RvcDogMzUsXG4gIHBhZGRpbmdCb3R0b206IDM1LFxuICBtYXhIZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTAwcHgpJ1xufSkpXG5cbmNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB3aWR0aDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nXG59KVxuXG5jb25zdCBNb2RhbEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyN3B4JyxcbiAgbWFyZ2luQm90dG9tOiA0NSxcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwYWRkaW5nUmlnaHQ6IDM1XG59KVxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXG59KVxuXG5leHBvcnQgY29uc3QgTm90ZSA9IHN0eWxlZC5zcGFuKHtcbiAgZm9udFNpemU6IDEyLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGZvbnRXZWlnaHQ6IDQwMFxufSlcblxuZXhwb3J0IGNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoKHt2ZXJ0QWxpZ259KSA9PiAoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxNTBweCAxZnInLFxuICBhbGlnbkl0ZW1zOiB2ZXJ0QWxpZ24gPyAndG9wJyA6ICdjZW50ZXInLFxuICBtYXJnaW5Cb3R0b206IDVcbn0pKVxuXG5leHBvcnQgY29uc3QgQ29udGVudEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG1hcmdpbkJvdHRvbTogMTVcbn0pXG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Ub3A6IDE1LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nTGVmdDogMzUsXG4gIHBhZGRpbmdSaWdodDogMzVcbn0pXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwYWRkaW5nUmlnaHQ6IDM1XG59KVxuXG5leHBvcnQgY29uc3QgSW5saW5lV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG59KVxuXG5jb25zdCBOZXdCbG9ja01vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBlcnJvcnMsXG4gICAgYXJyYXlIZWxwZXJzLFxuICAgIGN1cnJlbnRCbG9ja0lkLFxuICAgIGNsb3NlUG9ydGFsLFxuICAgIHNldEZpZWxkVmFsdWUsXG4gICAgdmFsdWVzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBpc1ZhbGlkXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHtkYXRhfSA9IHZhbHVlcyB8fCB7fVxuXG4gIGNvbnN0IGJsb2NrRm9ybWF0ID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgZGVmYXVsdDogJ3RleHQnXG4gIH1cblxuICBpZiAoIWRhdGEubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KChibG9jaykgPT4gYmxvY2suX2lkID09PSBjdXJyZW50QmxvY2tJZClcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGxcblxuICBjb25zdCB7dHlwZSwgaXNOZXd9ID0gZGF0YVtpbmRleF1cbiAgY29uc3QgY3VycmVudEJsb2NrID0gZGF0YVtpbmRleF0gfHwge31cbiAgY29uc3Qge3RpdGxlID0gJycsIHBsYWNlaG9sZGVyID0gbnVsbH0gPSBCTE9DS1MuZmluZCgoYmxvY2spID0+IGJsb2NrLnR5cGUgPT09IHR5cGUpIHx8IHt9XG5cbiAgY29uc3QgcmVhZE9ubHlCbG9ja3MgPSBbXG4gICAgQkxPQ0tfVFlQRS5OVU1CRVIsXG4gICAgQkxPQ0tfVFlQRS5URVhULFxuICAgIEJMT0NLX1RZUEUuRU1BSUwsXG4gICAgQkxPQ0tfVFlQRS5MSU5LLFxuICAgIEJMT0NLX1RZUEUuUklDSF9URVhULFxuICAgIEJMT0NLX1RZUEUuREFURVxuICBdXG5cbiAgLyoqXG4gICAqIEZvcm0gc2VxdWVuY2UgdmFsdWVzIGFyZSBhbHdheXNcbiAgICogcmVxdWlyZWQgYW5kIGNhbiBub3QgYmUgZGlzYWJsZWQgYmVsb3cuXG4gICAqL1xuICBjb25zdCByZXF1aXJlZEJsb2NrcyA9IFtcbiAgICAuLi5yZWFkT25seUJsb2NrcyxcbiAgICBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTixcbiAgICBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04sXG4gICAgQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT04sXG4gICAgQkxPQ0tfVFlQRS5CSU5BUlksXG4gICAgQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU1xuICBdXG5cbiAgY29uc3QgbXVsdGlCbG9ja3MgPSBbXG4gICAgQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04sXG4gICAgQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OLFxuICAgIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OLFxuICAgIEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRSxcbiAgICBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXG4gIF1cbiAgY29uc3QgaXNSZWFkT25seSA9IHJlYWRPbmx5QmxvY2tzLmluY2x1ZGVzKHR5cGUpICYmICFfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy5pc19yZXF1aXJlZF0pXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSByZXF1aXJlZEJsb2Nrcy5pbmNsdWRlcyh0eXBlKSAmJiAhX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81W3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi5yZWFkX29ubHldKVxuICBjb25zdCBpc0V4dGVuZGVkVHlwZSA9IG11bHRpQmxvY2tzLmluY2x1ZGVzKHR5cGUpXG4gIGNvbnN0IGhhc1BsYWNlaG9sZGVyID1cbiAgICAodHlwZSAhPT0gQkxPQ0tfVFlQRS5CSU5BUlkgJiYgIWlzRXh0ZW5kZWRUeXBlICYmIHR5cGUgIT09IEJMT0NLX1RZUEUuVEVYVF9TRVFVRU5DRSkgfHxcbiAgICB0eXBlID09PSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTiB8fFxuICAgIHR5cGUgPT09IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNcblxuICBjb25zdCBhbGxvd0VkaXRzID0gdHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05cblxuICBjb25zdCBoYXNFcnJvcnMgPSBlcnJvcnMgPyBPYmplY3QudmFsdWVzKGVycm9ycykubGVuZ3RoID4gMCA6IGZhbHNlXG5cbiAgY29uc3QgYmxvY2tFcnJvciA9XG4gICAgKGVycm9ycy5kYXRhICYmXG4gICAgICAoX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF83ID0+IF83LmRhdGEsICdhY2Nlc3MnLCBfOCA9PiBfOFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF85ID0+IF85LmlkXSkgfHxcbiAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8xMCA9PiBfMTAuZGF0YSwgJ2FjY2VzcycsIF8xMSA9PiBfMTFbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTIgPT4gXzEyLm5hbWVdKSB8fFxuICAgICAgICBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzEzID0+IF8xMy5kYXRhLCAnYWNjZXNzJywgXzE0ID0+IF8xNFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8xNSA9PiBfMTVbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8xNiA9PiBfMTYucGxhY2Vob2xkZXJdKSB8fFxuICAgICAgICBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzE3ID0+IF8xNy5kYXRhLCAnYWNjZXNzJywgXzE4ID0+IF8xOFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8xOSA9PiBfMTlbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yMCA9PiBfMjAuZGF0YV0pIHx8XG4gICAgICAgIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfMjEgPT4gXzIxLmRhdGEsICdhY2Nlc3MnLCBfMjIgPT4gXzIyW2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzIzID0+IF8yM1t0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzI0ID0+IF8yNC5vcHRpb25zXSkpKSB8fFxuICAgIChlcnJvcnMgJiYgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8yNSA9PiBfMjVbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjYgPT4gXzI2LmlkXSkpXG5cbiAgY29uc3QgaWRFcnJvciA9XG4gICAgLyoqXG4gICAgICogVE9ETzogVXNlIEZvcm1pa3MgYHRvdWNoZWRgIGZpZWxkXG4gICAgICogb25jZSB3ZSBhcmUgYWJsZSB0byBob29rIHVwIGBOZXdCbG9ja01vZGFsYFxuICAgICAqIHRvIGBRdWV1ZUJ1aWxkZXJgLiBpLmUuIGN1cnJlbnRseSB3ZSBhcmVcbiAgICAgKiBwb3J0YWwnaW5nIG91dHNpZGUgYGZvcm1gLlxuICAgICAqL1xuICAgIGN1cnJlbnRCbG9jay5pZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgKChlcnJvcnMuZGF0YSAmJiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzI3ID0+IF8yNy5kYXRhLCAnYWNjZXNzJywgXzI4ID0+IF8yOFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8yOSA9PiBfMjkuaWRdKSkgfHwgKGVycm9ycyAmJiBfb3B0aW9uYWxDaGFpbihbZXJyb3JzLCAnYWNjZXNzJywgXzMwID0+IF8zMFtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8zMSA9PiBfMzEuaWRdKSkpXG5cbiAgY29uc3QgcXVlc3Rpb24gPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwMH19LCBcIkxhYmVsXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDF9fSwgXCJSZXF1aXJlZFwiKVxuICAgIClcbiAgKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChpc05ldykge1xuICAgICAgYXJyYXlIZWxwZXJzLnJlbW92ZShpbmRleClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1gLCBjdXJyZW50QmxvY2ssIGZhbHNlKVxuICAgIH1cbiAgICBjbG9zZVBvcnRhbCgpXG4gIH0sIFtdKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS5pc05ld2AsIHVuZGVmaW5lZClcbiAgICB9XG4gICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uaGlzdG9yeWAsIFtdKVxuICAgIGNsb3NlUG9ydGFsKClcbiAgfSwgW10pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHtkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZH0gPSByZXN1bHRcbiAgICAgIGlmIChcbiAgICAgICAgIWRlc3RpbmF0aW9uIHx8XG4gICAgICAgIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYW5nZWRJdGVtID1cbiAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFXG4gICAgICAgICAgPyBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW2RyYWdnYWJsZUlkXVxuICAgICAgICAgIDogZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9uc1tkcmFnZ2FibGVJZF1cbiAgICAgIGNvbnN0IG5ld0xpc3QgPVxuICAgICAgICB0eXBlID09PSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UgPyBkYXRhW2luZGV4XVt0eXBlXS5kYXRhIDogZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9uc1xuICAgICAgbmV3TGlzdC5zcGxpY2Uoc291cmNlLmluZGV4LCAxKVxuICAgICAgbmV3TGlzdC5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIGNoYW5nZWRJdGVtKVxuICAgICAgc2V0RmllbGRWYWx1ZShcbiAgICAgICAgdHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFID8gZGF0YVtpbmRleF1bdHlwZV0uZGF0YSA6IGRhdGFbaW5kZXhdW3R5cGVdLm9wdGlvbnMsXG4gICAgICAgIG5ld0xpc3RcbiAgICAgIClcbiAgICB9LFxuICAgIFtkYXRhLCBpbmRleF1cbiAgKVxuXG4gIGNvbnN0IFt1c2VySGFzQ2hhbmdlZElkZW50aWZpZXIsIHNldFVzZXJIYXNDaGFuZ2VkSWRlbnRpZmllcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBvbklkZW50aWZpZXJDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dLmlkYCwgdmFsdWUpXG4gICAgc2V0VXNlckhhc0NoYW5nZWRJZGVudGlmaWVyKGZhbHNlKVxuICAgIGlmICh2YWx1ZSAhPSAnJykge1xuICAgICAgc2V0VXNlckhhc0NoYW5nZWRJZGVudGlmaWVyKHRydWUpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvblBsYWNlaG9sZGVyQ2hhbmdlID0gKGUsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0ucGxhY2Vob2xkZXJgLCB2YWx1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uUmljaFRleHRGb3JtYXRDaGFuZ2UgPSAoZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmZvcm1hdGAsIHZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gIH1cblxuICBjb25zdCB7dG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQb3J0YWwsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgcGFyZW50SWQ6ICdwb3J0YWwnXG4gIH0pXG5cbiAgY29uc3QgZXNjYXBlID0gdXNlS2V5UHJlc3MoJ0VzY2FwZScpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXNjYXBlKSB7XG4gICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBhcnJheUhlbHBlcnMucmVtb3ZlKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIG9uQ2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbZXNjYXBlXSlcblxuICBjb25zdCBtZW51SXRlbXMgPSAoYXJyYXlIZWxwZXJzKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUZXh0JyxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ3RleHRfaWQnLFxuICAgICAgICAgICAgbmFtZTogJ1RleHQgUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDoge31cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdlbWFpbF9pZCcsXG4gICAgICAgICAgICBuYW1lOiAnRW1haWwgUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgIGVtYWlsOiB7fVxuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ051bWJlcicsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdudW1iZXJfaWQnLFxuICAgICAgICAgICAgbmFtZTogJ051bWJlciBRdWVzdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIG51bWJlcjoge31cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdMaW5rJyxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ2xpbmtfaWQnLFxuICAgICAgICAgICAgbmFtZTogJ0xpbmsgUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgICAgbGluazoge31cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdCaW5hcnknLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnYmluYXJ5X2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdCaW5hcnkgUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ2JpbmFyeScsXG4gICAgICAgICAgICBiaW5hcnk6IHt9XG4gICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2luZ2xlIFNlbGVjdGlvbicsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzaW5nbGVfc2VsZWN0aW9uX2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdTaW5nbGUgU2VsZWN0aW9uIFF1ZXN0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdzaW5nbGVfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHNpbmdsZV9zZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8xJywgbmFtZTogJ09wdGlvbiAxJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzInLCBuYW1lOiAnT3B0aW9uIDInfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMycsIG5hbWU6ICdPcHRpb24gMyd9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdNdWx0aXBsZSBTZWxlY3Rpb24nLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnbXVsdGlwbGVfc2VsZWN0aW9uX2lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdNdWx0aXBsZSBTZWxlY3Rpb24gUXVlc3Rpb24nLFxuICAgICAgICAgICAgdHlwZTogJ211bHRpcGxlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICBtdWx0aXBsZV9zZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtpZDogJ29wdGlvbl8xJywgbmFtZTogJ09wdGlvbiAxJ30sXG4gICAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzInLCBuYW1lOiAnT3B0aW9uIDInfSxcbiAgICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMycsIG5hbWU6ICdPcHRpb24gMyd9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIF1cbiAgfVxuXG4gIGNvbnN0IGlkSW5wdXQgPSB1c2VSZWYoKVxuICBjb25zdCBuYW1lSW5wdXQgPSB1c2VSZWYoKVxuXG4gIGlmIChuYW1lSW5wdXQuY3VycmVudCkge1xuICAgIGlmIChuYW1lSW5wdXQuY3VycmVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIG5hbWVJbnB1dC5jdXJyZW50LnZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzMyID0+IF8zMi5kYXRhLCAnYWNjZXNzJywgXzMzID0+IF8zM1tpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF8zNCA9PiBfMzQubmFtZV0pIHx8ICcnXG4gICAgfVxuICB9XG5cbiAgaWYgKGlkSW5wdXQuY3VycmVudCkge1xuICAgIGlmIChpZElucHV0LmN1cnJlbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICBpZElucHV0LmN1cnJlbnQudmFsdWUgPSBfb3B0aW9uYWxDaGFpbihbdmFsdWVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMzUgPT4gXzM1LmRhdGEsICdhY2Nlc3MnLCBfMzYgPT4gXzM2W2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzM3ID0+IF8zNy5pZF0pIHx8ICcnXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3VzZXJIYXNDaGFuZ2VkTmFtZSwgc2V0VXNlckhhc0NoYW5nZWROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IG9uTmFtZUJsdXIgPSAoZSwgc2V0RmllbGRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dLm5hbWVgLCB2YWx1ZSlcbiAgICBpZiAoIWlzTmV3IHx8IHVzZXJIYXNDaGFuZ2VkSWRlbnRpZmllcikgcmV0dXJuXG4gICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuXG4gICAgaWYgKHVzZXJIYXNDaGFuZ2VkTmFtZSkge1xuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV0uaWRgLCBzbHVnSWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25OYW1lQ2hhbmdlID0gKGUpID0+IHtcbiAgICBpZiAoIXVzZXJIYXNDaGFuZ2VkTmFtZSkgc2V0VXNlckhhc0NoYW5nZWROYW1lKHRydWUpXG4gICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG5cbiAgICBpZiAoIWlzTmV3IHx8IHVzZXJIYXNDaGFuZ2VkSWRlbnRpZmllcikgcmV0dXJuXG4gICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuICAgIGlkSW5wdXQuY3VycmVudC52YWx1ZSA9IHNsdWdJZFxuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS5uYW1lYCwgdmFsdWUpXG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XS5pZGAsIHNsdWdJZClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7IGlzRXh0ZW5kZWRUeXBlOiBpc0V4dGVuZGVkVHlwZSwgaWQ6IFwicGFyZW50SWRcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyM319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxIZWFkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDI0fX0sIGAke3RpdGxlfSBTZXR0aW5nc2ApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyNX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50V3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjZ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDI3fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHsgdmVydEFsaWduOiB0eXBlID09PSBCTE9DS19UWVBFLkJJTkFSWSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyOH19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mjl9fSwgdHlwZSA9PT0gQkxPQ0tfVFlQRS5CSU5BUlkgPyBxdWVzdGlvbiA6ICdMYWJlbCcpXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgcmVmOiBuYW1lSW5wdXQsXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gb25OYW1lQmx1cihlLCBzZXRGaWVsZFZhbHVlKSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogb25OYW1lQ2hhbmdlLFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdHlwZSA9PT0gQkxPQ0tfVFlQRS5CSU5BUlkgPyBgJHt0eXBlfSBxdWVzdGlvbmAgOiBgJHt0eXBlfSBMYWJlbGAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MzB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIHR5cGUgIT09IEJMT0NLX1RZUEUuQklOQVJZICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQwfX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDF9fSwgXCJSZXF1aXJlZFwiKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0Mn19LCBcIkRpc3BsYXllZCB0byB1c2VycyBhcyB0aGlzIGJsb2NrJ3MgdGl0bGVcIiAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0Nn19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0N319XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NDh9fSwgXCJJZGVudGlmaWVyXCIpXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGlkRXJyb3IsXG4gICAgICAgICAgICAgICAgaGlkZUVycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV0uaWRgLFxuICAgICAgICAgICAgICAgIHJlZjogaWRJbnB1dCxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IG9uSWRlbnRpZmllckNoYW5nZShlKSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogYCR7dHlwZX0taWRgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQ5fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NTl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NjB9fSwgXCJSZXF1aXJlZFwiKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NjF9fSwgXCJBIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGJsb2NrIGluIHRoZSB1bmRlcmx5aW5nIHF1ZXVlIGRhdGEgc2NoZW1hXCIgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBoYXNQbGFjZWhvbGRlciAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NjV9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2Nn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2N319LCBcIlBsYWNlaG9sZGVyXCIpXG4gICAgICAgICAgICAgICAgLCB0eXBlICE9PSBCTE9DS19UWVBFLlRFWFQgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9PSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTiAmJlxuICAgICAgICAgICAgICAgIHR5cGUgIT09IEJMT0NLX1RZUEUuREFURSA/IChcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV0uJHtbdHlwZV19LnBsYWNlaG9sZGVyYCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYmxvY2tGb3JtYXRbdHlwZV0gfHwgYmxvY2tGb3JtYXQuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25QbGFjZWhvbGRlckNoYW5nZShlLCBzZXRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JzLmRhdGEgJiYgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF8zOCA9PiBfMzguZGF0YSwgJ2FjY2VzcycsIF8zOSA9PiBfMzlbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNDAgPT4gXzQwW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNDEgPT4gXzQxLnBsYWNlaG9sZGVyXSksXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfb3B0aW9uYWxDaGFpbihbdmFsdWVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNDIgPT4gXzQyLmRhdGEsICdhY2Nlc3MnLCBfNDMgPT4gXzQzW2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzQ0ID0+IF80NFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzQ1ID0+IF80NS5wbGFjZWhvbGRlcl0pLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NzF9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgICAgICwgdHlwZSA9PT0gQkxPQ0tfVFlQRS5EQVRFID8gKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dLiR7W3R5cGVdfS5wbGFjZWhvbGRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzQ2ID0+IF80Ni5kYXRhLCAnYWNjZXNzJywgXzQ3ID0+IF80N1tpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF80OCA9PiBfNDhbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF80OSA9PiBfNDkucGxhY2Vob2xkZXJdKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JzLmRhdGEgJiYgX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ2FjY2VzcycsIF81MCA9PiBfNTAuZGF0YSwgJ2FjY2VzcycsIF81MSA9PiBfNTFbaW5kZXhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNTIgPT4gXzUyW3R5cGVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNTMgPT4gXzUzLnBsYWNlaG9sZGVyXSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0ODV9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhc2ljVGV4dEFyZWEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX29wdGlvbmFsQ2hhaW4oW3ZhbHVlcywgJ29wdGlvbmFsQWNjZXNzJywgXzU0ID0+IF81NC5kYXRhLCAnYWNjZXNzJywgXzU1ID0+IF81NVtpbmRleF0sICdvcHRpb25hbEFjY2VzcycsIF81NiA9PiBfNTZbdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF81NyA9PiBfNTcucGxhY2Vob2xkZXJdKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0ucGxhY2Vob2xkZXJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9ycy5kYXRhICYmIF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdhY2Nlc3MnLCBfNTggPT4gXzU4LmRhdGEsICdhY2Nlc3MnLCBfNTkgPT4gXzU5W2luZGV4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzYwID0+IF82MFt0eXBlXSwgJ29wdGlvbmFsQWNjZXNzJywgXzYxID0+IF82MS5wbGFjZWhvbGRlcl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M6IDMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OTN9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwNn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTA3fX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90ZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MDh9fSwgXCJVc2VkIGFzIGEgc2FtcGxlIHZhbHVlIHdoZW4gY3JlYXRpbmcgb3IgZWRpdGluZyBhIHF1ZXVlXCIgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgaGFzUGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTEzfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MTR9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MTV9fSwgXCJVc2UgUGxhY2Vob2xkZXJcIiApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0udXNlX3BsYWNlaG9sZGVyYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxNn19XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXNlX3BsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ZhbGxiYWNrIHRvIHVzaW5nIHRoZSBwbGFjZWhvbGRlciB3aGVuIG5vIHZhbHVlIGlzIHByb3ZpZGVkIGluIHRoZSB0YXNrJ1xuICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxOH19XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBpc1JlYWRPbmx5ICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzM319XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTM0fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTM1fX0sIFwiUmVhZC1vbmx5XCIpXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0ucmVhZF9vbmx5YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzNn19XG4gICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVhZF9vbmx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNYWtlcyB0aGlzIGJsb2Nr4oCZcyB2YWx1ZSB1bm1vZGlmaWFibGUgYWZ0ZXIgdGFzayBjcmVhdGlvbicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mzh9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NTF9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1Mn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1M319LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0uaXNfcmVxdWlyZWRgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTU0fX1cbiAgICAgICAgICAgICAgICAgICwgKHtmaWVsZH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpc19yZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlByZXZlbnRzIHRhc2tzIHdpdGggYW4gZW1wdHkgdmFsdWUgZnJvbSBiZWluZyBzdWJtaXR0ZWQuXCIgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1Nn19XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBhbGxvd0VkaXRzICYmIChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU2OX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTcwfX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTcxfX0sIFwiRW5hYmxlIFRleHQgRWRpdGluZ1wiICApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX0uYWxsb3dfZWRpdHNgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTcyfX1cbiAgICAgICAgICAgICAgICAgICwgKHtmaWVsZH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhbGxvd19lZGl0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWxsb3dzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhpcyBibG9jayB0byBiZSBlZGl0ZWQgaW4gdGFzayBtb2RlLicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NzR9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgdHlwZSA9PT0gQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFICYmXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nOiAnb3JkZXJpbmdfZGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGlzYWJsZSBPcmRlcmluZycsXG4gICAgICAgICAgICAgICAgZmllbGRMYWJlbDogJ1ByZXZlbnRzIHJlLW9yZGVyaW5nIG9mIGZpZWxkcyBpbiB0YXNrcy4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nOiAnZGVsZXRlX2Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0Rpc2FibGUgRGVsZXRlcycsXG4gICAgICAgICAgICAgICAgZmllbGRMYWJlbDogJ1ByZXZlbnRzIGRlbGV0aW9uIG9mIGZpZWxkcyBpbiB0YXNrcy4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nOiAnZWRpdF9kaXNhYmxlZCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEaXNhYmxlIEVkaXRzJyxcbiAgICAgICAgICAgICAgICBmaWVsZExhYmVsOiAnUHJldmVudHMgZWRpdGluZyBvZiBmaWVsZHMgaW4gdGFza3MuJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywgeyBrZXk6IGl0ZW0uc2V0dGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwNH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MDV9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwNn19LCBpdGVtLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCB7IG5hbWU6IGBkYXRhWyR7aW5kZXh9XS4ke1t0eXBlXX1bJHtpdGVtLnNldHRpbmd9XWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MDd9fVxuICAgICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5zZXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5maWVsZExhYmVsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjA5fX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgLCB0eXBlID09PSBCTE9DS19UWVBFLlJJQ0hfVEVYVCAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MjJ9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyM319XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyNH19LCBcImZvcm1hdFwiKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbmxpbmVXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyNX19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGQsIHsgbmFtZTogYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmZvcm1hdGAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MjZ9fVxuICAgICAgICAgICAgICAgICAgICAsICh7ZmllbGR9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIFsnSFRNTCcsICdNYXJrZG93biddLm1hcCgob3B0aW9uLCBvcHRpb25JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYXNrUmFkaW8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogb3B0aW9uSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBgJHtpbmRleH0tJHtvcHRpb25JbmRleH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBmaWVsZC52YWx1ZSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vU2hhZG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJpY2hUZXh0Rm9ybWF0Q2hhbmdlKGUsIHNldEZpZWxkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mjl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAsICh0eXBlID09PSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04gfHxcbiAgICAgICAgICB0eXBlID09PSBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTiB8fFxuICAgICAgICAgIHR5cGUgPT09IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMgfHxcbiAgICAgICAgICB0eXBlID09PSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTikgJiYgKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFdyYXBwZXIsIHsgc3R5bGU6IHttYXJnaW5MZWZ0OiAxNSwgb3ZlcmZsb3c6ICdhdXRvJywgbWFyZ2luQm90dG9tOiAxNX0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NTN9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNgLFxuICAgICAgICAgICAgICByZW5kZXI6IChhcnJheUhlbHBlcnMpID0+IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZDogb25EcmFnRW5kLFxuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgYXJyYXlIZWxwZXJzOiBhcnJheUhlbHBlcnMsXG4gICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NTd9fVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1NH19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgdHlwZSA9PT0gQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFICYmIChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7IHN0eWxlOiB7bWFyZ2luTGVmdDogMTUsIG92ZXJmbG93OiAnYXV0bycsIG1hcmdpbkJvdHRvbTogMTV9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjcyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEFycmF5LCB7XG4gICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhYCxcbiAgICAgICAgICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NzZ9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlcXVlbmNlLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZDogb25EcmFnRW5kLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBhcnJheUhlbHBlcnM6IGFycmF5SGVscGVycyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luUmVmOiBvcmlnaW5SZWYsXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsLFxuICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjc3fX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGFuZGFyZE1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHMsIG1lbnVJdGVtczogbWVudUl0ZW1zKGFycmF5SGVscGVycyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2ODl9fSApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjczfX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEZvb3Rlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OTd9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBvbkNsaWNrOiBvblNhdmUsIGRpc2FibGVkOiBibG9ja0Vycm9yIHx8IGhhc0Vycm9ycywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY5OH19LCBcIlNhdmVcIlxuXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBvbkNsb3NlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzAxfX0sIFwiQ2FuY2VsXCJcblxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0Jsb2NrTW9kYWxcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlQnVpbGRlci50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0vKipcbiAqIEZJWE1FOiBJc3N1ZSB3aXRoIGZpcmVmb3ggd2hlblxuICogZHJvcGVkIG9uIHBsYWNlaG9sZGVyLlxuICogaHR0cHM6Ly9naXRodWIuY29tL1NUUk1ML3JlYWN0LWdyaWQtbGF5b3V0L3B1bGwvMTA1M1xuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IFVVSUQgZnJvbSAndXVpZGpzJ1xuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkQXJyYXksfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge0JMT0NLUywgQkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBnZXRCbG9ja0RpbXMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEJsb2NrRGltcydcblxuaW1wb3J0IHVzZU1vZGFsIGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ob29rcy91c2VNb2RhbCdcbmltcG9ydCBOZXdCbG9ja01vZGFsIGZyb20gJy4vTmV3QmxvY2tNb2RhbCdcbmltcG9ydCBCdWlsZGVySGVhZGVyIGZyb20gJy4vQnVpbGRlckhlYWRlcidcbmltcG9ydCBCbG9ja0NvbXBvbmVudCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0NvbXBvbmVudCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCBSR0wgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvUkdMJ1xuaW1wb3J0IHtxdWV1ZVNjaGVtYX0gZnJvbSAndW5pdmVyc2FsL3ZhbGlkYXRpb25zL3l1cFNjaGVtYSdcbmltcG9ydCBCbG9ja1dyYXBwZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tXcmFwcGVyJ1xuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsJ1xuXG5cblxuXG5cblxuXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlJHTF9CQUNLR1JPVU5EXG59KVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDUwcHgpJyxcbiAgb3ZlcmZsb3c6ICdzY3JvbGwnXG59KVxuXG5jb25zdCBEcmFnZ2FibGVFbCA9IHN0eWxlZC5kaXYoe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBib3JkZXI6ICcxcHggc29saWQgI2U4ZUNlZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBtYXJnaW46ICc1cHggMTBweCcsXG4gIHBhZGRpbmc6ICcxMHB4JyxcbiAgbWluSGVpZ2h0OiAnNzJweCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGN1cnNvcjogJ2dyYWInLFxuICAnOmhvdmVyJzoge1xuICAgIGJvcmRlckNvbG9yOiAnI2QxZDlkZCdcbiAgfVxufSlcblxuY29uc3QgSWNvbkJveCA9IHN0eWxlZC5kaXYoKHtiYWNrZ3JvdW5kQ29sb3J9KSA9PiAoe1xuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIGJvcmRlclJhZGl1czogNSxcbiAgbWFyZ2luUmlnaHQ6IDEwLFxuICBwYWRkaW5nOiA1LFxuICB3aWR0aDogNDgsXG4gIG1pbldpZHRoOiA0OFxufSkpXG5cbmNvbnN0IEVtcHR5U3RhdGUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBmb250U2l6ZTogMzgsXG4gIGNvbG9yOiAnI2ZmZidcbn0pXG5cbmNvbnN0IEJsb2NrSW5mbyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB0ZXh0QWxpZ246ICdsZWZ0J1xufSlcblxuY29uc3QgTm90ZSA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBmb250U2l6ZTogMTIsXG4gIG1hcmdpblRvcDogMi41LFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgV2Via2l0TGluZUNsYW1wOiAyLFxuICBXZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCdcbn0pXG5cbmNvbnN0IEJsb2NrQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkICNlOGVDZWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjZmOGY5JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgd2lkdGg6IDM1MCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgcG9zaXRpb246ICdzdGlja3knLFxuICB0b3A6ICcwcHgnXG59KVxuXG5jb25zdCBCbG9ja0FyZWEgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJSdcbn0pXG5cbmNvbnN0IFByaW1hcnlUZXh0ID0gc3R5bGVkLmRpdih7XG4gIGhlaWdodDogNTAsXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgcGFkZGluZzogMTUsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgU2Vjb25kYXJ5VGV4dCA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6IDUwLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgd2lkdGg6ICczMCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInXG59KVxuXG5jb25zdCBOZXdRdWV1ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7cXVldWUsIG9uU3VibWl0SGFuZGxlciwgb3JnSWR9ID0gcHJvcHNcbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHtpZDogcXVldWVJZH0gPSBxdWV1ZSB8fCB7fVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3QgW2N1cnJlbnRCbG9ja0lkLCBzZXRDdXJyZW50QmxvY2tJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFtkcm9wcGluZ0l0ZW0sIHNldERyb3BwaW5nSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbcXVldWVIYXNDaGFuZ2VzLCBzZXRRdWV1ZUhhc0NoYW5nZXNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qge21vZGFsUG9ydGFsLCB0b2dnbGVQb3J0YWwsIGNsb3NlUG9ydGFsfSA9IHVzZU1vZGFsKHtub0Nsb3NlOiB0cnVlfSlcbiAgY29uc3Qge1xuICAgIG1vZGFsUG9ydGFsOiBjb25maXJtQ29uZmlybWF0aW9uLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlQ29uZmlybWF0aW9uLFxuICAgIGNsb3NlUG9ydGFsOiBjbG9zZUNvbmZpcm1hdGlvblxuICB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKClcblxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gcXVldWVJZCA/IHF1ZXVlIDoge25hbWU6ICdRdWV1ZSBUaXRsZScsIGRhdGE6IFtdfVxuICBjb25zdCBjYW5jZWxVcmwgPSBxdWV1ZUlkID8gYC9xdWV1ZXMvJHtxdWV1ZUlkfWAgOiBgL3F1ZXVlc2BcblxuICBjb25zdCBvbkRyb3AgPSB1c2VDYWxsYmFjayhcbiAgICAoXG4gICAgICBsYXlvdXQsXG4gICAgICBpdGVtLFxuICAgICAgYXJyYXlIZWxwZXJzLFxuICAgICAgc2V0RmllbGRWYWx1ZSxcbiAgICAgIGRhdGFcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHtpfSA9IGl0ZW1cbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0xheW91dCA9IGxheW91dC5maWx0ZXIoKGYpID0+IGYuaSA9PT0gaXRlbS5sYXlvdXQuaSlbMF1cbiAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIGxheW91dDogbmV3TGF5b3V0fVxuICAgICAgICB9KVxuICAgICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhYCwgbmV3RGF0YSlcbiAgICAgICAgY29uc3Qge3R5cGV9ID0gZHJvcHBpbmdJdGVtIHx8IHt9XG4gICAgICAgIGNvbnN0IGlzRXh0ZW5kZWRUeXBlID0gW1xuICAgICAgICAgIEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTixcbiAgICAgICAgICBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTixcbiAgICAgICAgICBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTLFxuICAgICAgICAgIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OXG4gICAgICAgIF0uaW5jbHVkZXModHlwZSlcblxuICAgICAgICBjb25zdCB1c2VzUGxhY2Vob2xkZXIgPSBbXG4gICAgICAgICAgQkxPQ0tfVFlQRS5FTUFJTCxcbiAgICAgICAgICBCTE9DS19UWVBFLkVNQkVELFxuICAgICAgICAgIEJMT0NLX1RZUEUuSU1BR0UsXG4gICAgICAgICAgQkxPQ0tfVFlQRS5MSU5LLFxuICAgICAgICAgIEJMT0NLX1RZUEUuTlVNQkVSLFxuICAgICAgICAgIEJMT0NLX1RZUEUuUklDSF9URVhULFxuICAgICAgICAgIEJMT0NLX1RZUEUuVEVYVCxcbiAgICAgICAgICBCTE9DS19UWVBFLlZJREVPLFxuICAgICAgICAgIEJMT0NLX1RZUEUuREFURVxuICAgICAgICBdLmluY2x1ZGVzKHR5cGUpXG5cbiAgICAgICAgY29uc3QgZm9ybVNlcXVlbmNlID0ge1xuICAgICAgICAgIFt0eXBlXToge1xuICAgICAgICAgICAgaXNfcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGV4dFNlcXVlbmNlID0ge1xuICAgICAgICAgIFt0eXBlXToge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFtdLFxuICAgICAgICAgICAgb3JkZXJpbmdfZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVsZXRlX2Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVkaXRfZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2luZ2xlT3JNdWx0aVNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzEnLCBuYW1lOiAnT3B0aW9uIDEnfSxcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzInLCBuYW1lOiAnT3B0aW9uIDInfSxcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzMnLCBuYW1lOiAnT3B0aW9uIDMnfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lRW50aXR5U2VsZWN0aW9uID0ge1xuICAgICAgICAgIFt0eXBlXToge1xuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMScsIG5hbWU6ICdPcHRpb24gMSd9LFxuICAgICAgICAgICAgICB7aWQ6ICdvcHRpb25fMicsIG5hbWU6ICdPcHRpb24gMid9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdXNlX3BsYWNlaG9sZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93X2VkaXRzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib3VuZGluZ0JveFNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBbdHlwZV06IHtcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzEnLCBuYW1lOiAnT3B0aW9uIDEnfSxcbiAgICAgICAgICAgICAge2lkOiAnb3B0aW9uXzInLCBuYW1lOiAnT3B0aW9uIDInfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdGhlclR5cGVzID0ge1xuICAgICAgICAgIFt0eXBlXToge1xuICAgICAgICAgICAgLi4uKHR5cGUgPT09IEJMT0NLX1RZUEUuUklDSF9URVhUICYmIHtmb3JtYXQ6ICdodG1sJ30pLFxuICAgICAgICAgICAgLi4uKHVzZXNQbGFjZWhvbGRlciAmJiB7dXNlX3BsYWNlaG9sZGVyOiBmYWxzZX0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRpb25zID1cbiAgICAgICAgICB0eXBlID09PSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0VcbiAgICAgICAgICAgID8gZm9ybVNlcXVlbmNlXG4gICAgICAgICAgICA6IGlzRXh0ZW5kZWRUeXBlXG4gICAgICAgICAgICA/IHNpbmdsZU9yTXVsdGlTZWxlY3Rpb25cbiAgICAgICAgICAgIDogb3RoZXJUeXBlc1xuXG4gICAgICAgIGlmICh0eXBlID09PSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTikge1xuICAgICAgICAgIG9wdGlvbnMgPSBuYW1lRW50aXR5U2VsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMpIHtcbiAgICAgICAgICBvcHRpb25zID0gYm91bmRpbmdCb3hTZWxlY3Rpb25cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHRleHRTZXF1ZW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3QmxvY2sgPSB7XG4gICAgICAgICAgaXNOZXc6IHRydWUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBfaWQ6IGksXG4gICAgICAgICAgaWQ6IGAke3R5cGV9X2lkYCxcbiAgICAgICAgICBuYW1lOiBgJHtCTE9DS1MuZmlsdGVyKChiKSA9PiBiLnR5cGUgPT09IHR5cGUpWzBdLnRpdGxlfSBCbG9jayBUaXRsZWAsXG4gICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgaXNEcmFnZ2FibGU6IHVuZGVmaW5lZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGFycmF5SGVscGVycy5wdXNoKG5ld0Jsb2NrKVxuICAgICAgICBzZXRDdXJyZW50QmxvY2tJZChuZXdCbG9jay5faWQpXG4gICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpXG4gICAgICAgIHRvZ2dsZVBvcnRhbCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0RyYWdnaW5nLCBkcm9wcGluZ0l0ZW1dXG4gIClcblxuICBjb25zdCBvbkxheW91dENoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChsYXlvdXQsIGRhdGEsIHNldEZpZWxkVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMYXlvdXQgPSBsYXlvdXQuZmlsdGVyKChmKSA9PiBmLmkgPT09IGl0ZW0ubGF5b3V0LmkpWzBdXG4gICAgICAgIHJldHVybiB7Li4uaXRlbSwgbGF5b3V0OiBuZXdMYXlvdXR9XG4gICAgICB9KVxuICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YWAsIG5ld0RhdGEpXG4gICAgfSxcbiAgICBbaXNEcmFnZ2luZywgZHJvcHBpbmdJdGVtXVxuICApXG5cbiAgY29uc3Qgb25Nb3VzZURvd24gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIHNldElzRHJhZ2dpbmcodHJ1ZSlcbiAgICBzZXRRdWV1ZUhhc0NoYW5nZXModHJ1ZSlcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25Nb3VzZVVwID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICB9LCBbXSlcblxuICBjb25zdCBvbkRyYWdTdGFydCA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgJycpXG4gICAgICBlLnRhcmdldC5zdHlsZS5jdXJzb3IgPSAnZ3JhYmJpbmcnXG4gICAgICBjb25zdCB7dHlwZX0gPSBlLnRhcmdldC5kYXRhc2V0IHx8IHt9XG4gICAgICBjb25zdCBlbExheW91dCA9IGdldEJsb2NrRGltcyh0eXBlKVxuICAgICAgc2V0RHJvcHBpbmdJdGVtKE9iamVjdC5hc3NpZ24oe30sIHtpOiBVVUlELmdlblY0KCkudG9TdHJpbmcoKX0sIGVsTGF5b3V0LCB7dHlwZX0pKVxuICAgIH0sXG4gICAgW2lzRHJhZ2dpbmcsIGRyb3BwaW5nSXRlbV1cbiAgKVxuXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBzZXRJc0RyYWdnaW5nKGZhbHNlKVxuICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ2dyYWInXG4gICAgfSxcbiAgICBbaXNEcmFnZ2luZywgZHJvcHBpbmdJdGVtXVxuICApXG5cbiAgLy8gbWVtb2l6ZVxuICBjb25zdCByZW5kZXJCbG9ja3MgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAodmFsdWVzLCBhcnJheUhlbHBlcnMsIGhhbmRsZUNoYW5nZSwgc2V0RmllbGRWYWx1ZSwgZXJyb3JzKSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWVzLmRhdGEubWFwKChibG9jaywgaWR4KSA9PiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tXcmFwcGVyLCB7XG4gICAgICAgICAga2V5OiBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfID0+IF8ubGF5b3V0LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5pXSkgfHwgYmxvY2suX2lkLFxuICAgICAgICAgIHR5cGU6IGJsb2NrLnR5cGUsXG4gICAgICAgICAgJ2RhdGEtZ3JpZCc6IGJsb2NrLmxheW91dCxcbiAgICAgICAgICBpbmRleDogaWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzI2fX1cbiAgICAgICAgXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBpbmRleDogaWR4LFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXModHJ1ZSlcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNFZGl0aW5nOiB0cnVlLFxuICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgb25EZWxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgYXJyYXlIZWxwZXJzLnJlbW92ZShpZHgpXG4gICAgICAgICAgICAgIHNldElzRHJhZ2dpbmcoZmFsc2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FZGl0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEN1cnJlbnRCbG9ja0lkKGJsb2NrLl9pZClcbiAgICAgICAgICAgICAgdG9nZ2xlUG9ydGFsKClcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzJ9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSlcbiAgICB9LFxuICAgIFtdXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLFxuICAgICAgdmFsaWRhdGlvblNjaGVtYTogcXVldWVTY2hlbWEsXG4gICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgICB2YWxpZGF0ZU9uTW91bnQ6IHRydWUsXG4gICAgICBvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IG9uU3VibWl0SGFuZGxlcih2YWx1ZXMsIG9yZ0lkKVxuICAgICAgICAgIHNldFF1ZXVlSGFzQ2hhbmdlcyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFF1ZXVlSGFzQ2hhbmdlcyh0cnVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlLFxuICAgICAgaW5uZXJSZWY6IGZvcm1SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTh9fVxuICAgIFxuICAgICAgLCAoe2hhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZSwgdmFsdWVzLCBlcnJvcnMsIHRvdWNoZWQsIHNldEZpZWxkVmFsdWUsIGlzVmFsaWR9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3N319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnVpbGRlckhlYWRlciwge1xuICAgICAgICAgICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXM6IHNldFF1ZXVlSGFzQ2hhbmdlcyxcbiAgICAgICAgICAgICAgcXVldWVIYXNDaGFuZ2VzOiBxdWV1ZUhhc0NoYW5nZXMsXG4gICAgICAgICAgICAgIHRvZ2dsZUNvbmZpcm1hdGlvbjogdG9nZ2xlQ29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgaGFuZGxlQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICBlcnJvcjogQm9vbGVhbih0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWUpLFxuICAgICAgICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzc4fX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEFycmF5LCB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiZGF0YVwiLFxuICAgICAgICAgICAgICByZW5kZXI6IChhcnJheUhlbHBlcnMpID0+IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOTJ9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5M319XG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQcmltYXJ5VGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOTR9fSwgXCJCbG9ja3NcIilcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrQXJlYSwgeyBvbkRyYWdPdmVyOiAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzk1fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIEJMT0NLUy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3RpdGxlLCBkZXNjcmlwdGlvbiwgdHlwZSwgcGxhY2Vob2xkZXIsIGljb25Db2xvciwgaWNvbn0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZUVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS10eXBlJzogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zZWxlY3RhYmxlOiBcIm9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnU3RhcnQ6IG9uRHJhZ1N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZDogb25EcmFnRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA6IG9uTW91c2VVcCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5OH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQm94LCB7IGJhY2tncm91bmRDb2xvcjogaWNvbkNvbG9yLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDA5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxMH19LCBpY29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tJbmZvLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxMn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2InLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxM319LCB0aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxNH19LCBkZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgIXZhbHVlcy5kYXRhLmxlbmd0aCAmJiAhaXNEcmFnZ2luZyA/IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVN0YXRlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyMn19XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyM319LCBcIkRyYWcgYSBCbG9ja1wiICApXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeVRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDI0fX0sIFwiVGhpcyBxdWV1ZSBpcyBjdXJyZW50bHkgZW1wdHkuIERyYWcgYW5kIGRyb3AgYW55IGJsb2NrIGludG8gdGhlIGNhbnZhcyB0byBnZXQgc3RhcnRlZC5cIlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUkdMLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZHJvcHBpbmdJdGVtOiBkcm9wcGluZ0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNEcm9wcGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNSZXNpemFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgb25Ecm9wOiAobGF5b3V0LCBpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wKGxheW91dCwgaXRlbSwgYXJyYXlIZWxwZXJzLCBzZXRGaWVsZFZhbHVlLCBfb3B0aW9uYWxDaGFpbihbdmFsdWVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy5kYXRhXSkpXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0RyYWdnaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXModHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlOiAobGF5b3V0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgb25MYXlvdXRDaGFuZ2UobGF5b3V0LCBfb3B0aW9uYWxDaGFpbihbdmFsdWVzLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNCA9PiBfNC5kYXRhXSksIHNldEZpZWxkVmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dHM6IHZhbHVlcy5kYXRhLm1hcCgoYmxvY2spID0+IGJsb2NrLmxheW91dCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MzB9fVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAsIHJlbmRlckJsb2Nrcyh2YWx1ZXMsIGFycmF5SGVscGVycywgaGFuZGxlQ2hhbmdlLCBzZXRGaWVsZFZhbHVlLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIG1vZGFsUG9ydGFsKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5ld0Jsb2NrTW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VQb3J0YWwsXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogKGZpZWxkLCBkYXRhLCBoYXNDaGFuZ2VzID0gdHJ1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWV1ZUhhc0NoYW5nZXMoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGQsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2tJZDogY3VycmVudEJsb2NrSWQsXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVldWVIYXNDaGFuZ2VzKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NTF9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIGNvbmZpcm1Db25maXJtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybWF0aW9uTW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VDb25maXJtYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBFeGl0IHdpdGhvdXQgc2F2aW5nYCxcbiAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogYFNhdmUgYW5kIEV4aXRgLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UoY2FuY2VsVXJsKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2Zvcm1SZWYsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF82ID0+IF82LmhhbmRsZVN1Ym1pdCwgJ2NhbGwnLCBfNyA9PiBfNygpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgb25TYXZlKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDc0fX1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4OX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1F1ZXVlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZWxlY3Rpb24udHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtGaWVsZCwgdXNlRmllbGR9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBDU1ZJbnB1dCBmcm9tICdjbGllbnQvY29tcG9uZW50cy9DU1ZJbnB1dCdcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IFJvb3RCdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUm9vdEJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAndW5pdmVyc2FsL3V0aWxzL3NsdWdpZnknXG5cbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5pbXBvcnQgZ2V0SXRlbVN0eWxlIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJdGVtU3R5bGUnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkKFJvb3RCdXR0b24pKHtcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgbWFyZ2luVG9wOiAnNXB4JyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbn0pXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YGBcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIGF1dG8gMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogMTBweDtcbmBcbmNvbnN0IENTVldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggMTVweDtcbmBcbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnNXB4IDAnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuY29uc3QgU2VsZWN0aW9uVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCAxNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5jb25zdCBBY3Rpb25zQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDVweCAxNXB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuYFxuY29uc3QgSW1wb3J0VGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIGZvbnRTaXplOiAnMTVweCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgb3V0bGluZTogMCxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGp1c3RpZnlTZWxmOiAnZW5kJ1xufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRlbnRXcmFwcGVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gICR7Q29udGVudFdyYXBwZXJ9LmZvY3VzZWQgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYFxuXG5jb25zdCBTZWxlY3Rpb25PcHRpb24gPSAoe1xuICBwcm92aWRlZCxcbiAgc25hcHNob3QsXG4gIG9wdElkeCxcbiAgZGF0YSxcbiAgaW5kZXgsXG4gIHR5cGUsXG4gIHNldEZpZWxkVmFsdWUsXG4gIGFycmF5SGVscGVycyxcbiAgZXJyb3JzLFxuICBtaW5PcHRpb25zLFxuICBvcHRpb25SZWZzLFxuICBmb2N1c2VkT3B0aW9uLFxuICBzZXRGb2N1c2VkT3B0aW9uXG59KSA9PiB7XG4gIGNvbnN0IHtpc05ld30gPSBkYXRhW2luZGV4XVxuICBjb25zdCBbaWRlbnRpZmllciwgc2V0SWRlbnRpZmllcl0gPSB1c2VTdGF0ZShkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zW29wdElkeF0uaWQpXG4gIGNvbnN0IFtpZGVudGlmaWVyQ2hhbmdlZCwgc2V0SWRlbnRpZmllckNoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9uc1tvcHRJZHhdLm5hbWUpXG4gIGNvbnN0IFtfaWRGaWVsZCwgX2lkTWV0YSwgaWRIZWxwZXJdID0gdXNlRmllbGQoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGApXG5cbiAgY29uc3QgY2FuU2x1Z2lmeSA9IGlzTmV3IHx8IGRhdGFbaW5kZXhdW3R5cGVdLm9wdGlvbnNbb3B0SWR4XS5pc05ld1xuICBjb25zdCBzZXRUb3VjaGVkID0gKCkgPT4ge1xuICAgIGlkSGVscGVyLnNldFRvdWNoZWQodHJ1ZSwgdHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtvcHRpb25SZWZzLCAnYWNjZXNzJywgXzIgPT4gXzIuY3VycmVudCwgJ2FjY2VzcycsIF8zID0+IF8zW2ZvY3VzZWRPcHRpb25dLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNCA9PiBfNC5jdXJyZW50XSkpIHtcbiAgICAgIG9wdGlvblJlZnMuY3VycmVudFtmb2N1c2VkT3B0aW9uXS5jdXJyZW50LmZvY3VzKClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG91Y2hlZCgpXG4gIH0sIFtpZGVudGlmaWVyXSlcblxuICBjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgYXJyYXlIZWxwZXJzLmluc2VydChvcHRJZHggKyAxLCB7aWQ6ICcnLCBuYW1lOiAnJ30pXG4gICAgICBzZXRGb2N1c2VkT3B0aW9uKG9wdElkeCArIDEpXG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEZvY3VzU3R5bGVzID0gKGVsZW1lbnRzLCBhY3Rpb24pID0+IHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgX29wdGlvbmFsQ2hhaW4oW2VsZW1lbnQsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LmNsYXNzTGlzdCwgJ2FjY2VzcycsIF82ID0+IF82W2FjdGlvbl0sICdjYWxsJywgXzcgPT4gXzcoJ2ZvY3VzZWQnKV0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IG9uTmFtZUJsdXIgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGNhblNsdWdpZnkgfHwgIWlkZW50aWZpZXJDaGFuZ2VkKSB7XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGAsIGlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5vcHRpb25zWyR7b3B0SWR4fV0ubmFtZWAsIG5hbWUpXG4gICAgICBzZXRGb2N1c1N0eWxlcyhbYHNlbGVjdGlvbi13cmFwcGVyLSR7b3B0SWR4fWBdLCAncmVtb3ZlJylcbiAgICB9LFxuICAgIFtuYW1lLCBpZGVudGlmaWVyXVxuICApXG5cbiAgY29uc3Qgb25JZEJsdXIgPSAoZSkgPT4ge1xuICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5pZGAsIGlkZW50aWZpZXIpXG4gICAgc2V0SWRlbnRpZmllcihpZGVudGlmaWVyKVxuICB9XG5cbiAgY29uc3Qgb25OYW1lQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnN0IHt2YWx1ZX0gPSBlLnRhcmdldFxuICAgICAgc2V0TmFtZSh2YWx1ZSlcbiAgICAgIGlmICghY2FuU2x1Z2lmeSkgcmV0dXJuXG4gICAgICBpZiAoIWlkZW50aWZpZXJDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IHNsdWdJZCA9IHNsdWdpZnkodmFsdWUuc3Vic3RyaW5nKDAsIDMwKSlcbiAgICAgICAgc2V0SWRlbnRpZmllcihzbHVnSWQpXG4gICAgICB9XG4gICAgfSxcbiAgICBbbmFtZSwgaWRlbnRpZmllcl1cbiAgKVxuXG4gIGNvbnN0IG9uSWRlbnRpZmllckNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgIGlmICh2YWx1ZSAhPSAnJykge1xuICAgICAgICBzZXRJZGVudGlmaWVyQ2hhbmdlZCh0cnVlKVxuICAgICAgfVxuICAgICAgc2V0SWRlbnRpZmllcih2YWx1ZSlcbiAgICB9LFxuICAgIFtpZGVudGlmaWVyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge1xuICAgICAgLi4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMsXG4gICAgICByZWY6IHByb3ZpZGVkLmlubmVyUmVmLFxuICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRXcmFwcGVyLCB7IGlkOiBgc2VsZWN0aW9uLXdyYXBwZXItJHtvcHRJZHh9YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7IC4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcywgc3R5bGU6IHtmb250U2l6ZTogMTUsIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTn0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODJ9fSwgXCJkcmFnX2luZGljYXRvclwiXG5cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4NX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHJlZjogb3B0aW9uUmVmcy5jdXJyZW50W29wdElkeF0sXG4gICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0ub3B0aW9uc1ske29wdElkeH1dLm5hbWVgLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBvbkNoYW5nZTogb25OYW1lQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0xhYmVsJyxcbiAgICAgICAgICAgIG9uRm9jdXM6IChlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvY3VzU3R5bGVzKFtgc2VsZWN0aW9uLXdyYXBwZXItJHtvcHRJZHh9YF0sICdhZGQnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmx1cjogb25OYW1lQmx1cixcbiAgICAgICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg2fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0V3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwge1xuICAgICAgICAgICAgaWQ6IGBzZWxlY3Rpb24taW5wdXQtaWQtJHtvcHRJZHh9YCxcbiAgICAgICAgICAgIGFzOiBJbnB1dEZpZWxkLFxuICAgICAgICAgICAgZXJyb3I6IFxuICAgICAgICAgICAgICBlcnJvcnMgJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF0gJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF1bdHlwZV0gJiZcbiAgICAgICAgICAgICAgZXJyb3JzW29wdElkeF1bdHlwZV0ub3B0aW9ucyAmJlxuICAgICAgICAgICAgICBlcnJvcnNbb3B0SWR4XVt0eXBlXS5vcHRpb25zLmlkXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBlcnJvclxuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnICYmIGlkZW50aWZpZXIgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSAnRmllbGQgSUQgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IGlkZW50aWZpZXIsXG4gICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG9uSWRlbnRpZmllckNoYW5nZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIklkZW50aWZpZXJcIixcbiAgICAgICAgICAgIG9uQmx1cjogb25JZEJsdXIsXG4gICAgICAgICAgICBoaWRlRXJyb3JNZXNzYWdlOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAxfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zLmxlbmd0aCA+IG1pbk9wdGlvbnMgJiYgKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVtb3ZlQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGFycmF5SGVscGVycy5yZW1vdmUob3B0SWR4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwgeyBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOX19LCBcImNsb3NlXCIpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdGlvbihwcm9wcykge1xuICBjb25zdCB7b25EcmFnRW5kLCBkYXRhLCBpbmRleCwgdHlwZSwgaGFuZGxlQ2hhbmdlLCBhcnJheUhlbHBlcnMsIHNldEZpZWxkVmFsdWUsIGVycm9yc30gPSBwcm9wc1xuICBjb25zdCBtaW5PcHRpb25zID0gdHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04gPyAxIDogMlxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnbWFudWFsJylcbiAgY29uc3QgW2NhbkltcG9ydCwgc2V0Q2FuSW1wb3J0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtjc3ZPcHRpb25zLCBzZXRDc3ZPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBoYW5kbGVDc3ZJbXBvcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNPcHRpb25zID0gZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9ucy5tYXAoKGkpID0+IGkubmFtZSlcbiAgICBwcmV2aW91c09wdGlvbnMuZm9yRWFjaCgoX3YsIGlkeCkgPT4ge1xuICAgICAgYXJyYXlIZWxwZXJzLnJlbW92ZShpZHgpXG4gICAgfSlcbiAgICBjc3ZPcHRpb25zLmZvckVhY2goKHZhbHVlLCBpZHgpID0+IHtcbiAgICAgIGFycmF5SGVscGVycy5yZXBsYWNlKGlkeCwge2lkOiBzbHVnaWZ5KHZhbHVlLnN1YnN0cmluZygwLCAzMCkpLCBuYW1lOiB2YWx1ZX0pXG4gICAgfSlcbiAgICBzZXRWaWV3KCdtYW51YWwnKVxuICB9XG4gIGNvbnN0IG9wdGlvblJlZnMgPSB1c2VSZWYoW10pXG4gIGNvbnN0IFtmb2N1c2VkT3B0aW9uLCBzZXRGb2N1c2VkT3B0aW9uXSA9IHVzZVN0YXRlKC0xKVxuICBjb25zdCBkYXRhTGVuZ3RoID0gZGF0YVtpbmRleF1bdHlwZV0ub3B0aW9ucy5sZW5ndGhcblxuICBpZiAob3B0aW9uUmVmcy5jdXJyZW50Lmxlbmd0aCAhPT0gZGF0YUxlbmd0aCkge1xuICAgIGlmIChmb2N1c2VkT3B0aW9uICE9PSAtMSkge1xuICAgICAgb3B0aW9uUmVmcy5jdXJyZW50ID0gW1xuICAgICAgICAuLi5vcHRpb25SZWZzLmN1cnJlbnQuc2xpY2UoMCwgZm9jdXNlZE9wdGlvbiksXG4gICAgICAgIG51bGwsXG4gICAgICAgIC4uLm9wdGlvblJlZnMuY3VycmVudC5zbGljZShmb2N1c2VkT3B0aW9uKVxuICAgICAgXVxuICAgIH1cbiAgICBvcHRpb25SZWZzLmN1cnJlbnQgPSBBcnJheShkYXRhTGVuZ3RoKVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoXywgaSkgPT4gb3B0aW9uUmVmcy5jdXJyZW50W2ldIHx8IFJlYWN0LmNyZWF0ZVJlZigpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcHBhYmxlLCB7IGRyb3BwYWJsZUlkOiAnY2hvaWNlRHJvcHBhYmxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3Mn19XG4gICAgICAgICwgKHByb3ZpZGVkKSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wcywgcmVmOiBwcm92aWRlZC5pbm5lclJlZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3NH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0aW9uVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjc1fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzZ9fSwgJ09wdGlvbnMnKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCB2aWV3ID09PSAnbWFudWFsJyAmJlxuICAgICAgICAgICAgICBkYXRhW2luZGV4XVt0eXBlXS5vcHRpb25zLm1hcCgob3B0aW9uLCBvcHRJZHgpID0+IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZSwge1xuICAgICAgICAgICAgICAgICAga2V5OiBgJHtvcHRpb24ubmFtZX0tJHtvcHRJZHh9YCxcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkOiBTdHJpbmcob3B0SWR4KSxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiBvcHRJZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODB9fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLCAocHJvdmlkZWQsIHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZVBvcnRhbCA9IHNuYXBzaG90LmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3Rpb25PcHRpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkOiBwcm92aWRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBzaG90OiBzbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdElkeDogb3B0SWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheUhlbHBlcnM6IGFycmF5SGVscGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluT3B0aW9uczogbWluT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlZnM6IG9wdGlvblJlZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNlZE9wdGlvbjogc2V0Rm9jdXNlZE9wdGlvbiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4OH19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlUG9ydGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgcG9ydGFsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLCBwcm92aWRlZC5wbGFjZWhvbGRlclxuICAgICAgICAgICAgLCB2aWV3ID09PSAnaW1wb3J0JyAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NWV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMTV9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDU1ZJbnB1dCwge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGBFbnRlciBhIGxpc3Qgb2YgY29tbWEtc2VwYXJhdGVkIG9wdGlvbnMgdG8gaW1wb3J0YCxcbiAgICAgICAgICAgICAgICAgIHNldENhbkltcG9ydDogc2V0Q2FuSW1wb3J0LFxuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uczogc2V0Q3N2T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfOCA9PiBfOFtpbmRleF0sICdhY2Nlc3MnLCBfOSA9PiBfOVt0eXBlXSwgJ2FjY2VzcycsIF8xMCA9PiBfMTAub3B0aW9ucywgJ2FjY2VzcycsIF8xMSA9PiBfMTEubWFwLCAnY2FsbCcsIF8xMiA9PiBfMTIoKGkpID0+IGkubmFtZSksICdvcHRpb25hbEFjY2VzcycsIF8xMyA9PiBfMTMuam9pbiwgJ2NhbGwnLCBfMTQgPT4gXzE0KCcsJyldKSB8fCAnJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxNn19XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIHZpZXcgPT09ICdtYW51YWwnICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25zQmxvY2ssIHsgc3R5bGU6IHtwYWRkaW5nOiAxMH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjV9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtpZDogJycsIG5hbWU6ICcnLCBpc05ldzogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgICAgIHNldEZvY3VzZWRPcHRpb24oZGF0YUxlbmd0aClcbiAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjZ9fVxuICAgICAgICAgICAgICAgICwgXCJBZGQgb3B0aW9uXCJcblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW1wb3J0VGV4dCwgeyBvbkNsaWNrOiAoZSkgPT4gc2V0VmlldygnaW1wb3J0JyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzV9fSwgXCJCYXRjaCBJbXBvcnQuLi5cIiApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgdmlldyA9PT0gJ2ltcG9ydCcgJiYgKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbnNCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzl9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWNhbkltcG9ydCB8fCAhY3N2T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNzdkltcG9ydCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0MH19XG4gICAgICAgICAgICAgICAgLCBcIkltcG9ydFwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEltcG9ydFRleHQsIHsgb25DbGljazogKGUpID0+IHNldFZpZXcoJ21hbnVhbCcpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzQ3fX0sIFwiQWRkIE1hbnVhbGx5Li4uXCIgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZS50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RmllbGRBcnJheX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJhZ2dhYmxlfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJ1xuaW1wb3J0IHtMYWJlbH0gZnJvbSAnLi9OZXdCbG9ja01vZGFsJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IHtCTE9DS19UWVBFLCBCTE9DS1N9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgUm9vdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Sb290QnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvc2x1Z2lmeSdcblxuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCBCaW5hcnlNZW51IGZyb20gJy4vQmluYXJ5TWVudSdcbmltcG9ydCBTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMgZnJvbSAnLi9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMnXG5pbXBvcnQgZ2V0SXRlbVN0eWxlIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJdGVtU3R5bGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEljb25CdXR0b24gPSBzdHlsZWQoUm9vdEJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnMTBweCAwJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYm9yZGVyQm90dG9tOiBgMC41cHggc29saWQgI2VjZWVmMGBcbn0pXG5cbmNvbnN0IFR5cGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250U2l6ZTogMTIsXG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXG59KVxuXG5jb25zdCBGaWVsZFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpblJpZ2h0OiAtNSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXF1ZW5jZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgb3JpZ2luUmVmLFxuICAgIHRvZ2dsZVBvcnRhbCxcbiAgICBvbkRyYWdFbmQsXG4gICAgZGF0YSxcbiAgICBpbmRleCxcbiAgICB0eXBlLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBhcnJheUhlbHBlcnMsXG4gICAgc2V0RmllbGRWYWx1ZVxuICB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wcGFibGUsIHsgZHJvcHBhYmxlSWQ6ICdjaG9pY2VEcm9wcGFibGUnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAsIChwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgLi4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHMsIHJlZjogcHJvdmlkZWQuaW5uZXJSZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdiJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19LCAnQmxvY2tzJylcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCByZWY6IG9yaWdpblJlZiwgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fSwgXCIrIEFkZCB0eXBlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIGRhdGFbaW5kZXhdW3R5cGVdLmRhdGEubWFwKChzZXF1ZW5jZSwgc2VxSWR4KSA9PiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhZ2dhYmxlLCB7IGtleTogc2VxSWR4LCBkcmFnZ2FibGVJZDogU3RyaW5nKHNlcUlkeCksIGluZGV4OiBzZXFJZHgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAgICAgICAgICAgLCAocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRCbG9jaywge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBwcm92aWRlZC5pbm5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NH19XG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NX19LCBfb3B0aW9uYWxDaGFpbihbQkxPQ0tTLCAnYWNjZXNzJywgXyA9PiBfLmZpbHRlciwgJ2NhbGwnLCBfMiA9PiBfMigoZikgPT4gZi50eXBlID09PSBfb3B0aW9uYWxDaGFpbihbc2VxdWVuY2UsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLnR5cGVdKSksICdhY2Nlc3MnLCBfNCA9PiBfNFswXSwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUudGl0bGVdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5Nn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICwgKHNlcXVlbmNlLnR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2UudHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmxvZ2ljX2p1bXBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzYgPT4gXzZbaW5kZXhdLCAnYWNjZXNzJywgXzcgPT4gXzdbdHlwZV0sICdhY2Nlc3MnLCBfOCA9PiBfOC5kYXRhLCAnYWNjZXNzJywgXzkgPT4gXzlbc2VxSWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzEwID0+IF8xMC5sb2dpY19qdW1wXSkgPyBudWxsIDoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IF9vcHRpb25hbENoYWluKFtkYXRhLCAnYWNjZXNzJywgXzExID0+IF8xMVtpbmRleF0sICdhY2Nlc3MnLCBfMTIgPT4gXzEyW3R5cGVdLCAnYWNjZXNzJywgXzEzID0+IF8xMy5kYXRhLCAnYWNjZXNzJywgXzE0ID0+IF8xNFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTUgPT4gXzE1LmxvZ2ljX2p1bXBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBQQUxFVFRFLlRFWFRfTUFJTlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgXCJjYWxsX3NwbGl0XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyM319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNH19LCBcIk5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5uYW1lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0uaWRgLCBzbHVnSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdOYW1lJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNX19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGFycmF5SGVscGVycy5yZW1vdmUoc2VxSWR4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzN319XG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzOH19LCBcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQxfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX0sIFwiSWRlbnRpZmllclwiKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0lkZW50aWZpZXInLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQzfX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Zm9udFNpemU6IDE1LCBjb2xvcjogUEFMRVRURS5URVhUX01BSU59LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFwiZHJhZ19pbmRpY2F0b3JcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLnR5cGUgPT09IEJMT0NLX1RZUEUuQklOQVJZICYmXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF1bdHlwZV0uZGF0YS5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfMTYgPT4gXzE2W2luZGV4XSwgJ2FjY2VzcycsIF8xNyA9PiBfMTdbdHlwZV0sICdhY2Nlc3MnLCBfMTggPT4gXzE4LmRhdGEsICdhY2Nlc3MnLCBfMTkgPT4gXzE5W3NlcUlkeF0sICdvcHRpb25hbEFjY2VzcycsIF8yMCA9PiBfMjAubG9naWNfanVtcF0pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmluYXJ5TWVudSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcUlkeDogc2VxSWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgKGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS50eXBlID09PSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04gfHxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0udHlwZSA9PT0gQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT04pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF0udHlwZX1dLm9wdGlvbnNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTczfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VxdWVuY2VTZWxlY3Rpb25PcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXFJZHg6IHNlcUlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcVR5cGU6IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFbc2VxSWR4XS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5SGVscGVyczogYXJyYXlIZWxwZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3NH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcwfX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAsIHByb3ZpZGVkLnBsYWNlaG9sZGVyXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnMudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9LyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXRsYXNzaWFuL3JlYWN0LWJlYXV0aWZ1bC1kbmQvaXNzdWVzLzEzMVxuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcbmltcG9ydCB7TGFiZWx9IGZyb20gJy4vTmV3QmxvY2tNb2RhbCdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBSb290QnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1Jvb3RCdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3VuaXZlcnNhbC91dGlscy9zbHVnaWZ5J1xuXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUgZnJvbSAnLi9TZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnNNZW51J1xuaW1wb3J0IGdldEl0ZW1TdHlsZSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SXRlbVN0eWxlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUmVtb3ZlQnV0dG9uID0gc3R5bGVkKFJvb3RCdXR0b24pKHtcbiAgdGV4dEFsaWduOiAnZW5kJyxcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOXG4gIH1cbn0pXG5cbmNvbnN0IEZpZWxkVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59KVxuXG5jb25zdCBCdXR0b25CbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICBtYXJnaW5SaWdodDogMTBcbn0pXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdGlvbihwcm9wcykge1xuICBjb25zdCB7ZGF0YSwgaW5kZXgsIHR5cGUsIHNlcUlkeCwgaGFuZGxlQ2hhbmdlLCBhcnJheUhlbHBlcnMsIHNldEZpZWxkVmFsdWUsIHNlcVR5cGV9ID0gcHJvcHNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHtkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZH0gPSByZXN1bHRcbiAgICAgIGlmIChcbiAgICAgICAgIWRlc3RpbmF0aW9uIHx8XG4gICAgICAgIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYW5nZWRJdGVtID0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnNbZHJhZ2dhYmxlSWRdXG4gICAgICBjb25zdCBuZXdMaXN0ID0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnNcbiAgICAgIG5ld0xpc3Quc3BsaWNlKHNvdXJjZS5pbmRleCwgMSlcbiAgICAgIG5ld0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjaGFuZ2VkSXRlbSlcbiAgICAgIHNldEZpZWxkVmFsdWUoZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnMsIG5ld0xpc3QpXG4gICAgfSxcbiAgICBbZGF0YSwgaW5kZXhdXG4gIClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdEcm9wQ29udGV4dCwgeyBvbkRyYWdFbmQ6IG9uRHJhZ0VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc5fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wcGFibGUsIHsgZHJvcHBhYmxlSWQ6ICdvcHRpb25zRHJvcHBhYmxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICAgLCAocHJvdmlkZWQpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IC4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzLCByZWY6IHByb3ZpZGVkLmlubmVyUmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODJ9fVxuICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9ucy5tYXAoKF9vcHRpb24sIG9wdElkeCkgPT4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZSwgeyBrZXk6IG9wdElkeCwgZHJhZ2dhYmxlSWQ6IFN0cmluZyhvcHRJZHgpLCBpbmRleDogb3B0SWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODR9fVxuICAgICAgICAgICAgICAgICwgKHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBwcm92aWRlZC5pbm5lclJlZixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGdldEl0ZW1TdHlsZShzbmFwc2hvdC5pc0RyYWdnaW5nLCBwcm92aWRlZC5kcmFnZ2FibGVQcm9wcy5zdHlsZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX0sICdPcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YVske2luZGV4fV1bJHt0eXBlfV0uZGF0YVske3NlcUlkeH1dWyR7c2VxVHlwZX1dLm9wdGlvbnNbJHtvcHRJZHh9XS5uYW1lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2x1Z0lkID0gc2x1Z2lmeSh2YWx1ZS5zdWJzdHJpbmcoMCwgMzApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtzZXFUeXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9uc1tvcHRJZHhdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ09wdGlvbicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5M319XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICwgZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdW3NlcVR5cGVdLm9wdGlvbnMubGVuZ3RoID4gMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA5fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExMH19IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlbW92ZUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiBhcnJheUhlbHBlcnMucmVtb3ZlKG9wdElkeCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHN0eWxlOiB7Zm9udFNpemU6IDE1LCBjb2xvcjogUEFMRVRURS5URVhUX01BSU59LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEyfX0sIFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19LCAnSWRlbnRpZmllcicpXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV1bJHtzZXFUeXBlfV0ub3B0aW9uc1ske29wdElkeH1dLmlkYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW2luZGV4XVt0eXBlXS5kYXRhW3NlcUlkeF1bc2VxVHlwZV0ub3B0aW9uc1tvcHRJZHhdLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdPcHRpb24gaWRlbnRpZmllcicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTl9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogMTUsIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTn0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjZ9fVxuICAgICAgICAgICAgICAgICAgICAgICwgXCJkcmFnX2luZGljYXRvclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhW2luZGV4XVt0eXBlXS5kYXRhLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdhY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ2FjY2VzcycsIF8zID0+IF8zLmRhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5sb2dpY19qdW1wXSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZXF1ZW5jZVNlbGVjdGlvbk9wdGlvbnNNZW51LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxSWR4OiBzZXFJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcVR5cGU6IHNlcVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdElkeDogb3B0SWR4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM1fX1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLCBwcm92aWRlZC5wbGFjZWhvbGRlclxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1M319XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGFycmF5SGVscGVycy5wdXNoKHtpZDogJycsIG5hbWU6ICcnfSlcbiAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU0fX1cbiAgICAgICAgLCBcIkFkZCBvcHRpb25cIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1NlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQge0NvbnRlbnRCbG9ja30gZnJvbSAnLi9OZXdCbG9ja01vZGFsJ1xuaW1wb3J0IHtTbWFsbExhYmVsLCBTdHlsZWRCdXR0b24sIFN0eWxlZEljb259IGZyb20gJy4vQmluYXJ5TWVudSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTBweCcsXG4gIG1hcmdpbkJvdHRvbTogMi41LFxuICBtYXJnaW5Ub3A6IDIuNSxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2RhdGEsIGluZGV4LCB0eXBlLCBzZXFUeXBlLCBzZXFJZHgsIG9wdElkeCwgc2V0RmllbGRWYWx1ZX0gPSBwcm9wc1xuICBjb25zdCB7dG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQb3J0YWwsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9MRUZULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBwYXJlbnRJZDogJ3BvcnRhbCdcbiAgfSlcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBfb3B0aW9uYWxDaGFpbihbZGF0YSwgJ2FjY2VzcycsIF8gPT4gX1tpbmRleF0sICdhY2Nlc3MnLCBfMiA9PiBfMlt0eXBlXSwgJ2FjY2VzcycsIF8zID0+IF8zLmRhdGEsICdhY2Nlc3MnLCBfNCA9PiBfNFtzZXFJZHhdLCAnYWNjZXNzJywgXzUgPT4gXzVbc2VxVHlwZV0sICdhY2Nlc3MnLCBfNiA9PiBfNi5vcHRpb25zLCAnYWNjZXNzJywgXzcgPT4gXzdbb3B0SWR4XSwgJ29wdGlvbmFsQWNjZXNzJywgXzggPT4gXzguaWRdKVxuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gX29wdGlvbmFsQ2hhaW4oW2RhdGEsICdhY2Nlc3MnLCBfOSA9PiBfOVtpbmRleF0sICdhY2Nlc3MnLCBfMTAgPT4gXzEwW3R5cGVdLCAnYWNjZXNzJywgXzExID0+IF8xMS5kYXRhLCAnYWNjZXNzJywgXzEyID0+IF8xMltzZXFJZHhdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTMgPT4gXzEzLmxvZ2ljX2p1bXBdKVxuICAgID8gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmxvZ2ljX2p1bXBbc2VsZWN0ZWRPcHRpb25dXG4gICAgOiBudWxsXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRhdGFbaW5kZXhdW3R5cGVdLmRhdGFcbiAgICAuZmlsdGVyKCh7aWR9KSA9PiBpZCAhPT0gZGF0YVtpbmRleF1bdHlwZV0uZGF0YVtzZXFJZHhdLmlkKVxuICAgIC5tYXAoKHtpZCwgbmFtZX0pID0+ICh7XG4gICAgICBsYWJlbDogbmFtZSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLiR7c2VsZWN0ZWRPcHRpb259YCwgaWQpXG4gICAgfSkpXG4gIG1lbnVJdGVtcy5wdXNoKFxuICAgIHtcbiAgICAgIGxhYmVsOiAnQ29udGludWUgdG8gbmV4dCBxdWVzdGlvbicsXG4gICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5kYXRhWyR7c2VxSWR4fV0ubG9naWNfanVtcC4ke3NlbGVjdGVkT3B0aW9ufWAsXG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIClcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRW5kJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLmRhdGFbJHtzZXFJZHh9XS5sb2dpY19qdW1wLiR7c2VsZWN0ZWRPcHRpb259YCwgbnVsbClcbiAgICB9XG4gIClcbiAgY29uc3QgbGFiZWwgPVxuICAgIHNlbGVjdGVkVmFsdWUgPT09IG51bGwgPyAnRW5kJyA6IHNlbGVjdGVkVmFsdWUgPyBzZWxlY3RlZFZhbHVlIDogJ0NvbnRpbnVlIHRvIG5leHQgcXVlc3Rpb24nXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX0sIFwiSnVtcCB0b1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEJ1dHRvbiwgeyByZWY6IG9yaWdpblJlZiwgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjd9fSwgc2VsZWN0ZWRWYWx1ZSB8fCBsYWJlbClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OH19LCBcImV4cGFuZF9tb3JlXCIpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wcywgbWVudUl0ZW1zOiBtZW51SXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MX19ICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlU2VsZWN0aW9uT3B0aW9uc01lbnVcbiIsIlxuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBnZXRCbG9ja0RpbXMgPSAodHlwZSkgPT4ge1xuICBsZXQgbGF5b3V0ID0ge31cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQVVESU86XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDUsXG4gICAgICAgIG1pbkg6IDIsXG4gICAgICAgIHc6IDUsXG4gICAgICAgIGg6IDJcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkJJTkFSWTpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMyxcbiAgICAgICAgdzogNCxcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuSU1BR0U6XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDQsXG4gICAgICAgIG1pbkg6IDMsXG4gICAgICAgIHc6IDQsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk5VTUJFUjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuREFURTpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogMyxcbiAgICAgICAgdzogNSxcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiAzLFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBtaW5IOiAyLFxuICAgICAgICBoOiAzXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5FTUFJTDpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgdzogNSxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTElOSzpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgdzogNSxcbiAgICAgICAgbWluSDogMixcbiAgICAgICAgaDogMlxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVklERU86XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDUsXG4gICAgICAgIG1pbkg6IDQsXG4gICAgICAgIHc6IDYsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogMTAsXG4gICAgICAgIG1pbkg6IDEwLFxuICAgICAgICB3OiAxMCxcbiAgICAgICAgaDogMTBcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA1LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiAxMCxcbiAgICAgICAgaDogOVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRU1CRUQ6XG4gICAgICBsYXlvdXQgPSB7XG4gICAgICAgIG1pblc6IDQsXG4gICAgICAgIG1pbkg6IDQsXG4gICAgICAgIHc6IDYsXG4gICAgICAgIGg6IDRcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlBERjpcbiAgICAgIGxheW91dCA9IHtcbiAgICAgICAgbWluVzogNCxcbiAgICAgICAgbWluSDogNCxcbiAgICAgICAgdzogNixcbiAgICAgICAgaDogNFxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuUklDSF9URVhUOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA1LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA2LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFOlxuICAgICAgbGF5b3V0ID0ge1xuICAgICAgICBtaW5XOiA0LFxuICAgICAgICBtaW5IOiA0LFxuICAgICAgICB3OiA1LFxuICAgICAgICBoOiA0XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBsYXlvdXRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QmxvY2tEaW1zXG4iLCIvKipcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2hhZ2VtYW5uLzM4MmFkZmM1N2FkYmQ1YWYwNzhkYzkzZmVlZjAxZmUxXG4gKiBtb2RpZmllZDogUmVwbGFjZSBoeXBoZW5zIHdpdGggdW5kZXJzY29yZXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbHVnaWZ5KHN0cikge1xuICBjb25zdCBhID0gJ8Ogw6HDosOkw6bDo8OlxIHEg8SFw6fEh8SNxJHEj8Oow6nDqsOrxJPEl8SZxJvEn8e14binw67Dr8OtxKvEr8OsxYLhuL/DscWEx7nFiMO0w7bDssOzxZPDuMWNw7XFkeG5lcWVxZnDn8WbxaHFn8iZxaXIm8O7w7zDucO6xavHmMWvxbHFs+G6g+G6jcO/w73FvsW6xbzCty9fLDo7J1xuICBjb25zdCBiID0gJ2FhYWFhYWFhYWFjY2NkZGVlZWVlZWVlZ2doaWlpaWlpbG1ubm5ub29vb29vb29vcHJyc3Nzc3N0dHV1dXV1dXV1dXd4eXl6enpfX19fX18nXG4gIGNvbnN0IHAgPSBuZXcgUmVnRXhwKGEuc3BsaXQoJycpLmpvaW4oJ3wnKSwgJ2cnKVxuXG4gIHJldHVybiBzdHJcbiAgICAudG9TdHJpbmcoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgJ18nKVxuICAgIC5yZXBsYWNlKHAsIChjKSA9PiBiLmNoYXJBdChhLmluZGV4T2YoYykpKVxuICAgIC5yZXBsYWNlKC8mL2csICdfYW5kXycpXG4gICAgLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgJycpXG4gICAgLnJlcGxhY2UoL1xcLVxcLSsvZywgJ18nKVxuICAgIC5yZXBsYWNlKC9eLSsvLCAnJylcbiAgICAucmVwbGFjZSgvLSskLywgJycpXG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9