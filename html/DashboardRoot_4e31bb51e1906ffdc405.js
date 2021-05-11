(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardRoot"],{

/***/ "./src/client/components/AppMenu.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/AppMenu.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_components_Icons_DocumentationSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/DocumentationSVG */ "./src/client/components/Icons/DocumentationSVG.tsx");
/* harmony import */ var _components_PlainButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ "./src/client/components/Sidebar.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/AppMenu.tsx";

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
  target: "ezlisng0"
})({
  name: "1mmtv2s",
  styles: "width:220px;"
});

const HeadBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng1"
})({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 15px',
  userSelect: 'none',
  cursor: 'default',
  borderBottom: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_GRAY}`
});

const ActionBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng2"
})({
  borderBottom: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_GRAY}`,
  marginBottom: 5,
  padding: '10px 0',
  maxHeight: '60vh',
  overflow: 'auto'
});

const OrgContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_components_PlainButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "ezlisng3"
})({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  margin: 0,
  width: 'auto',
  cursor: 'pointer',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY
});

const OrgName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng4"
})(({
  active
}) => _objectSpread(_objectSpread({
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  padding: 0
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
  color: active ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN : '#4d4d4d',
  ':hover': {
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN
  }
}));

const StyledName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng5"
})(_objectSpread({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  marginBottom: 2
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]));

const StyledEmail = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng6"
})(_objectSpread({
  fontSize: 13,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
  fontWeight: 400
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng7"
})({
  name: "1ss7i2n",
  styles: "display:flex;flex-direction:row;align-items:center;padding:5px 10px;width:100%;"
});

const Text = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ezlisng8"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  marginLeft: 15
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
  target: "ezlisng9"
})({
  margin: 0,
  padding: 0,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 16
});

const AppMenu = props => {
  const {
    togglePortal,
    switchUserOrg,
    menuProps,
    name,
    email,
    organizations,
    current_organization_id,
    toggleModalPortal
  } = props;
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEmail, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, organizations.map(({
    name,
    id
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrgContainer, {
    key: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_9__["Brand"], {
    active: id === current_organization_id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, _optionalChain([name, 'optionalAccess', _ => _.charAt, 'call', _2 => _2(0)])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OrgName, {
    onClick: () => {
      togglePortal();
      switchUserOrg(id);
    },
    active: id === current_organization_id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Documentation'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      }
    }, "add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      }
    }, "Add organization")),
    onClick: () => {
      toggleModalPortal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_DocumentationSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      }
    }, "Documentation")),
    onClick: () => window.open('https://docs.humanlambdas.com/', '_blank'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'User menu'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    }, "exit_to_app"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      }
    }, "Sign out")),
    onClick: () => history.push('/signout'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AppMenu);

/***/ }),

/***/ "./src/client/components/Dot.tsx":
/*!***************************************!*\
  !*** ./src/client/components/Dot.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Dot.tsx";


const StyledDot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e9ugbr60"
})(({
  color
}) => ({
  height: 10,
  width: 10,
  borderRadius: 50,
  backgroundColor: color,
  marginRight: 10
}));

const Dot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](props => {
  const {
    color
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledDot, {
    color: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Dot);

/***/ }),

/***/ "./src/client/components/Icons/ArrowDownSVG.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/Icons/ArrowDownSVG.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ArrowDownSVG.tsx";


const ArrowDownSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "13",
    viewBox: "0 0 515.555 515.555",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M400 216a23.928 23.928 0 01-16.971-7.029L256 81.941l-127.029 127.03a24 24 0 01-33.942-33.942l144-144a24 24 0 0133.942 0l144 144A24 24 0 01400 216zM272.971 480.971l144-144a24 24 0 00-33.942-33.942L256 430.059l-127.029-127.03a24 24 0 00-33.942 33.942l144 144a24 24 0 0033.942 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ArrowDownSVG);

/***/ }),

/***/ "./src/client/components/Icons/AuditsSVG.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/Icons/AuditsSVG.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/AuditsSVG.tsx";


const UsersSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "17",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M325.5 40h-75.426c-8.258-23.281-30.5-40-56.574-40s-48.316 16.719-56.574 40H60.5c-33.086 0-60 26.914-60 60v352c0 33.086 26.914 60 60 60h265.063c33.05-.035 59.937-26.95 59.937-60V100c0-33.086-26.914-60-60-60zm-152 40V60c0-11.027 8.973-20 20-20s20 8.973 20 20v20h40v39h-120V80zm172 372c0 11.016-8.965 19.988-19.957 20H60.5c-11.027 0-20-8.973-20-20V100c0-11.027 8.973-20 20-20h33v79h200V80h32c11.027 0 20 8.973 20 20zm-75.793-221.96l29.582 26.92L171.2 397.71l-84.605-81.835 27.812-28.75 54.965 53.164zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (UsersSVG);

/***/ }),

/***/ "./src/client/components/Icons/DocumentationSVG.tsx":
/*!**********************************************************!*\
  !*** ./src/client/components/Icons/DocumentationSVG.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/DocumentationSVG.tsx";


const DocumentationSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M484.333 256c0-19.73-2.515-39.248-7.484-58.162l28.9-21.261-56.093-97.155-32.913 14.42c-28.138-27.938-62.594-47.847-100.689-58.18L312.093 0H199.907l-3.962 35.662c-38.096 10.333-72.551 30.242-100.689 58.18l-32.912-14.42-56.093 97.155 28.9 21.261c-4.97 18.914-7.484 38.432-7.484 58.162s2.515 39.248 7.484 58.162l-28.9 21.26 56.093 97.155 32.912-14.42c28.139 27.939 62.594 47.848 100.689 58.18L199.907 512h112.186l3.962-35.663c38.096-10.332 72.551-30.242 100.689-58.18l32.912 14.42 56.093-97.155-28.9-21.26c4.969-18.914 7.484-38.432 7.484-58.162zM299.061 449.633l-10.481 2.32L285.241 482h-58.482l-3.339-30.047-10.481-2.32c-39.739-8.795-75.382-29.389-103.074-59.555l-7.25-7.898-27.716 12.143-29.241-50.647 24.325-17.894-3.216-10.228c-6.038-19.207-9.1-39.244-9.1-59.554 0-20.311 3.062-40.348 9.1-59.554l3.216-10.228-24.325-17.894 29.241-50.647 27.716 12.143 7.25-7.898c27.692-30.166 63.335-50.76 103.074-59.555l10.481-2.32L226.759 30h58.482l3.339 30.047 10.481 2.32c39.739 8.796 75.382 29.39 103.074 59.555l7.25 7.898 27.716-12.143 29.241 50.647-24.325 17.894 3.216 10.228c6.038 19.207 9.1 39.244 9.1 59.554s-3.061 40.347-9.1 59.554l-3.216 10.228 24.325 17.894-29.241 50.647-27.716-12.143-7.25 7.898c-27.692 30.166-63.334 50.76-103.074 59.555z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M196.448 221.66l-21.433-20.99-54.863 56.019 56.02 54.863 20.99-21.434-34.586-33.872zM315.552 221.66l33.872 34.586-34.586 33.872 20.99 21.434 56.02-54.863-54.863-56.019zM220.097 354.176l42.664-202.76 29.371 6.18-42.664 202.76z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (DocumentationSVG);

/***/ }),

/***/ "./src/client/components/Icons/MetricsSVG.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/Icons/MetricsSVG.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/MetricsSVG.tsx";


const MetricSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M298.667 85.333l48.96 48.96-104.107 104-85.333-85.333L0 311.147l30.187 30.186 128-128 85.333 85.334 134.187-134.294 48.96 48.96v-128z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (MetricSVG);

/***/ }),

/***/ "./src/client/components/Icons/QueueSVG.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/Icons/QueueSVG.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/QueueSVG.tsx";


const QueueSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 426.667 426.667",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M341.333 53.333L256 138.667h64V288c0 23.573-19.093 42.667-42.667 42.667-23.573 0-42.667-19.093-42.667-42.667V138.667c0-47.04-38.293-85.333-85.333-85.333S64 91.627 64 138.667V288H0l85.333 85.333L170.667 288h-64V138.667c0-23.573 19.093-42.667 42.667-42.667S192 115.093 192 138.667V288c0 47.04 38.293 85.333 85.333 85.333S362.666 335.04 362.666 288V138.667h64l-85.333-85.334z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (QueueSVG);

/***/ }),

/***/ "./src/client/components/Icons/SettingsSVG.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/Icons/SettingsSVG.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/SettingsSVG.tsx";


const SettingsSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 01-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0158.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0113.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 01192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0132.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0113.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 01-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 01-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0045.831 19.025 14.999 14.999 0 0111.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0111.252-14.524 176.812 176.812 0 0045.831-19.025 15 15 0 0118.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 01-2.305-18.242 176.78 176.78 0 0019.024-45.831 15 15 0 0114.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 01-14.524-11.251 176.815 176.815 0 00-19.024-45.831 15 15 0 012.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 01-18.243 2.305 176.812 176.812 0 00-45.831-19.025 14.999 14.999 0 01-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 01-11.252 14.524 176.812 176.812 0 00-45.831 19.025 15.002 15.002 0 01-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 012.305 18.242 176.78 176.78 0 00-19.024 45.831 15 15 0 01-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0114.524 11.251 176.815 176.815 0 0019.024 45.831 15 15 0 01-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (SettingsSVG);

/***/ }),

/***/ "./src/client/components/Icons/UsersSVG.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/Icons/UsersSVG.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/UsersSVG.tsx";


const UsersSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "17",
    xmlns: "http://www.w3.org/2000/svg",
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M210.352 246.633c33.882 0 63.218-12.153 87.195-36.13 23.969-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.13 87.195 23.98 23.969 53.316 36.125 87.19 36.125zM144.379 57.34c18.394-18.395 39.973-27.336 65.973-27.336 25.996 0 47.578 8.941 65.976 27.336 18.395 18.398 27.34 39.98 27.34 65.972 0 26-8.945 47.579-27.34 65.977-18.398 18.399-39.98 27.34-65.976 27.34-25.993 0-47.57-8.945-65.973-27.34-18.399-18.394-27.344-39.976-27.344-65.976 0-25.993 8.945-47.575 27.344-65.973zm0 0M426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.312-10.34-7.808-20.55-13.375-30.336-5.77-10.156-12.55-19-20.16-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 01-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.043 5.34-10.968 0-22.086-1.797-33.043-5.34-11.21-3.622-20.3-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.754-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.609 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.063 11.476-3.457 22.363-4.149 32.363C.343 403.492 0 413.668 0 423.949c0 26.727 8.496 48.363 25.25 64.32C41.797 504.017 63.688 512 90.316 512h246.532c26.62 0 48.511-7.984 65.062-23.73 16.758-15.946 25.254-37.59 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm-44.906 72.828c-10.934 10.406-25.45 15.465-44.38 15.465H90.317c-18.933 0-33.449-5.059-44.379-15.46-10.722-10.208-15.933-24.141-15.933-42.587 0-9.594.316-19.066.95-28.16.616-8.922 1.878-18.723 3.75-29.137 1.847-10.285 4.198-19.937 6.995-28.675 2.684-8.38 6.344-16.676 10.883-24.668 4.332-7.618 9.316-14.153 14.816-19.418 5.145-4.926 11.63-8.957 19.27-11.98 7.066-2.798 15.008-4.329 23.629-4.56 1.05.56 2.922 1.626 5.953 3.602 6.168 4.02 13.277 8.606 21.137 13.625 8.86 5.649 20.273 10.75 33.91 15.152 13.941 4.508 28.16 6.797 42.273 6.797 14.114 0 28.336-2.289 42.27-6.793 13.648-4.41 25.058-9.507 33.93-15.164 8.043-5.14 14.953-9.593 21.12-13.617 3.032-1.973 4.903-3.043 5.954-3.601 8.625.23 16.566 1.761 23.636 4.558 7.637 3.024 14.122 7.059 19.266 11.98 5.5 5.262 10.484 11.798 14.816 19.423 4.543 7.988 8.208 16.289 10.887 24.66 2.801 8.75 5.156 18.398 7 28.675 1.867 10.434 3.133 20.239 3.75 29.145v.008c.637 9.058.957 18.527.961 28.148-.004 18.45-5.215 32.38-15.937 42.582zm0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (UsersSVG);

/***/ }),

/***/ "./src/client/components/NewOrgModal.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/NewOrgModal.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/NewOrgModal.tsx";









const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eizdsro0"
})({
  display: 'flex',
  flexDirection: 'column',
  width: 500,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${client_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: client_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BoxShadow"].MODAL
});

const MainTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eizdsro1"
})({
  name: "1xxpbhg",
  styles: "font-size:22px;font-weight:600;display:flex;align-items:center;margin-bottom:35px;"
});

const FormContent = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  target: "eizdsro2"
})({
  name: "r9hl0f",
  styles: "padding:50px 50px 30px;"
});

const ButtonSection = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eizdsro3"
})({
  name: "1htoikp",
  styles: "display:grid;grid-template-columns:repeat(2, auto);justify-content:space-between;padding-top:25px;"
});

const NewOrgModal = ({
  closePortal,
  handleNewOrganization
}) => {
  const onSubmitHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((values, actions) => {
    handleNewOrganization(values);
    actions.setSubmitting();
    closePortal();
  }, [closePortal, handleNewOrganization]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validateOnChange: true,
    initialValues: {
      name: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__["organizationSchema"],
    onSubmit: onSubmitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, ({
    isSubmitting,
    values,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Add new organization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    placeholder: "Enter organization name",
    name: "name",
    value: values.name,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonSection, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    onClick: closePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Create")))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewOrgModal);

/***/ }),

/***/ "./src/client/components/Sidebar.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/Sidebar.tsx ***!
  \*******************************************/
/*! exports provided: Brand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_components_Icons_QueueSVG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/Icons/QueueSVG */ "./src/client/components/Icons/QueueSVG.tsx");
/* harmony import */ var client_components_Icons_UsersSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/UsersSVG */ "./src/client/components/Icons/UsersSVG.tsx");
/* harmony import */ var client_components_Icons_MetricsSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/Icons/MetricsSVG */ "./src/client/components/Icons/MetricsSVG.tsx");
/* harmony import */ var client_components_Icons_SettingsSVG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/Icons/SettingsSVG */ "./src/client/components/Icons/SettingsSVG.tsx");
/* harmony import */ var client_components_Icons_AuditsSVG__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/components/Icons/AuditsSVG */ "./src/client/components/Icons/AuditsSVG.tsx");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_components_AppMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/components/AppMenu */ "./src/client/components/AppMenu.tsx");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_Icons_ArrowDownSVG__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/Icons/ArrowDownSVG */ "./src/client/components/Icons/ArrowDownSVG.tsx");
/* harmony import */ var client_components_Dot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/Dot */ "./src/client/components/Dot.tsx");
/* harmony import */ var client_hooks_useModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var client_components_NewOrgModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/NewOrgModal */ "./src/client/components/NewOrgModal.tsx");
/* harmony import */ var client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/utils/isUserStaff */ "./src/client/utils/isUserStaff.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Sidebar.tsx";




















const StyledRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh0"
})({
  position: 'relative',
  backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_MAIN,
  overflow: 'hidden',
  borderRight: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY}`,
  height: '100%',
  userSelect: 'none'
});

const NavContents = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh1"
})({
  name: "bozjad",
  styles: "display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:0;width:250px;overflow-y:auto;"
});

const MenuBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh2"
})({
  height: 45,
  display: 'flex',
  flexDirection: 'row',
  fontSize: 15,
  padding: '0 15px',
  fontWeight: 500,
  alignItems: 'center',
  cursor: 'pointer',
  backgroundColor: 'inherit',
  marginBottom: 50,
  transition: 'background-color 0.25s linear',
  ':hover': {
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN_LIGHTEST,
    color: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN} !important`
  }
});

const Footer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh3"
})({
  name: "d2znx6",
  styles: "margin-bottom:25px;"
});

const Brand = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh4"
})(({
  active
}) => ({
  height: 25,
  width: 25,
  color: active ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN_DARK : universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
  borderRadius: 4,
  backgroundColor: '#fff',
  border: `1px solid ${active ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  marginRight: 10
}));

const Company = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh5"
})(_objectSpread({
  lineHeight: '32px',
  marginRight: 5
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]));

const NavItems = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh6"
})({
  name: "j7qwjs",
  styles: "display:flex;flex-direction:column;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ei3w2qh7"
})({
  name: "455iix",
  styles: "margin-left:15px;font-weight:400;font-size:15px;"
});

const NavItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
  target: "ei3w2qh8"
})({
  textDecoration: 'none',
  borderRadius: 4,
  height: 30,
  lineHeight: '30px',
  paddingLeft: 10,
  margin: '2px 10px',
  opacity: 0.75,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER_LIGHT,
    opacity: 1
  }
});

const NavSubItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
  target: "ei3w2qh9"
})({
  textDecoration: 'none',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  borderRadius: 4,
  fontWeight: 400,
  height: 25,
  lineHeight: '25px',
  paddingLeft: 10,
  margin: '2px 10px 2px 40px',
  opacity: 0.75,
  fontSize: 14,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER_LIGHT,
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
    opacity: 1
  }
});

const activeLinkStyles = {
  backgroundColor: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER} !important`,
  color: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN} !important`,
  opacity: '1 !important'
};

const Sidebar = props => {
  const {
    user,
    location,
    organizations,
    orgName = 'Human Lambdas',
    switchUserOrg,
    handleNewOrganization
  } = props;
  const {
    email,
    name,
    current_organization_id
  } = user;
  const isMetricRoute = location.pathname.includes('/metrics');
  const {
    menuPortal,
    togglePortal,
    originRef,
    menuProps
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__["MenuPosition"].UPPER_LEFT, {
    isDropdown: true
  });
  const {
    modalPortal,
    togglePortal: toggleModalPortal,
    closePortal: closeModalPortal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_16__["default"])({});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRoot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavContents, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBlock, {
    onClick: togglePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Brand, {
    ref: originRef,
    active: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, orgName.charAt(0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Company, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, orgName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowDownSVG__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItems, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ClassNames"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, ({
    css
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_18__["default"])(organizations, current_organization_id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/outstanding-queues`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_UsersSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      }
    }, "Outstanding Queues")), !user.is_admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/audits`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_AuditsSVG__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      }
    }, "Audits"))), !Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_18__["default"])(organizations, current_organization_id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/queues`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_QueueSVG__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      }
    }, "Queues")), user.is_admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/users`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_UsersSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      }
    }, "Users")), user.is_admin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/audits`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_AuditsSVG__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      }
    }, "Audits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/metrics`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_MetricsSVG__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      }
    }, "Metrics")), isMetricRoute && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSubItem, {
      exact: true,
      to: `/metrics`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Dot__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].LINK,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      }
    }, "Overview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSubItem, {
      to: `/metrics/queues`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Dot__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_GREEN,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      }
    }, "Queues")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSubItem, {
      to: `/metrics/workers`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Dot__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "#ff4c4c",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      }
    }, "Workers")))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
    to: `/settings/profile`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_SettingsSVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    }
  }, "Settings")))), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_AppMenu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    togglePortal: togglePortal,
    toggleModalPortal: toggleModalPortal,
    organizations: organizations,
    switchUserOrg: switchUserOrg,
    menuProps: menuProps,
    name: name,
    email: email,
    current_organization_id: current_organization_id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    }
  })), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_NewOrgModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
    closePortal: closeModalPortal,
    handleNewOrganization: handleNewOrganization,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Sidebar));

/***/ }),

/***/ "./src/client/modules/dashboard/DashboardRoot.tsx":
/*!********************************************************!*\
  !*** ./src/client/modules/dashboard/DashboardRoot.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Dashboard */ "./src/client/modules/dashboard/containers/Dashboard.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_redux_currentUserReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/redux/currentUserReducer */ "./src/client/redux/currentUserReducer.ts");
/* harmony import */ var client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/utils/isUserStaff */ "./src/client/utils/isUserStaff.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/dashboard/DashboardRoot.tsx";







const DashboardRoot = props => {
  const {
    history
  } = props;
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    accessObj: {
      user_id: userId
    }
  } = networker || {
    accessObj: {}
  };
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    current_organization_id: currentOrgId
  } = user || {};
  const [organization, setOrg] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [organizations, setOrgs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  async function fetchUserAndOrgInfo() {
    const resp = await networker.httpHandler(`/users/${userId}`, {
      method: 'GET'
    });
    let data, errors;

    if (resp) {
      data = resp.data;
      errors = resp.errors;
    }

    const {
      current_organization_id
    } = data || {};
    if (currentOrgId === current_organization_id) return;

    if (!errors) {
      if (current_organization_id) {
        const {
          data: org
        } = await networker.httpHandler(`/orgs/${data.current_organization_id}`, {
          method: 'GET'
        });
        const {
          data: orgs
        } = await networker.httpHandler(`/orgs`, {
          method: 'GET'
        });
        setUser(data);
        setOrg(org);
        setOrgs(orgs);
        const isStaff = Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_5__["default"])(orgs, data.current_organization_id);
        props.addUser(_objectSpread(_objectSpread({}, data), {}, {
          isStaff
        }));
      } else {
        console.error('No organization ID!');
      }
    } else {
      errors.forEach(e => console.error(e.message));
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUserAndOrgInfo();
  }, [userId, user]);

  const switchUserOrg = async id => {
    const {
      errors
    } = await networker.httpHandler(`/users/${user.id}`, {
      data: {
        current_organization_id: id
      },
      method: 'PATCH'
    });

    if (!errors) {
      history.push('/');
    } else {
      console.error('Error fetching organization information!', JSON.stringify(errors));
    }
  };

  const handleNewOrganization = async orgName => {
    if (!orgName) return;
    const {
      data: {
        id: newOrgId
      }
    } = await networker.httpHandler(`/orgs/create`, {
      data: orgName,
      method: 'POST'
    });
    await networker.httpHandler(`/users/${user.id}`, {
      data: {
        current_organization_id: newOrgId
      },
      method: 'PATCH'
    });
    history.push('/');
  };

  if (!user.id && !organization.name) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    user: user,
    orgName: organization.name,
    organizations: organizations,
    switchUserOrg: switchUserOrg,
    handleNewOrganization: handleNewOrganization,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }));
};

const mapDispatchToProps = dispatch => ({
  addUser: arg => dispatch(Object(client_redux_currentUserReducer__WEBPACK_IMPORTED_MODULE_4__["addUser"])(arg))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(DashboardRoot));

/***/ }),

/***/ "./src/client/modules/dashboard/containers/Dashboard.tsx":
/*!***************************************************************!*\
  !*** ./src/client/modules/dashboard/containers/Dashboard.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/Sidebar */ "./src/client/components/Sidebar.tsx");
/* harmony import */ var universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/handleChunkError */ "./src/universal/utils/handleChunkError.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/dashboard/containers/Dashboard.tsx";







const DashLayout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ehhunrg0"
})({
  name: "7axs56",
  styles: "display:flex;overflow:auto;height:100%;"
});

const DashMain = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "ehhunrg1"
})({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  background: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_MAIN
});

const QueuesRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | QueuesRoot */ "QueuesRoot").then(__webpack_require__.bind(null, /*! client/modules/queues/QueuesRoot */ "./src/client/modules/queues/QueuesRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const UsersRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | UsersRoot */[__webpack_require__.e("AuditsRoot~UsersRoot"), __webpack_require__.e("UsersRoot")]).then(__webpack_require__.bind(null, /*! client/modules/users/containers/UsersRoot */ "./src/client/modules/users/containers/UsersRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const AuditsRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | AuditsRoot */[__webpack_require__.e("vendors~AuditsRoot~Queue~TaskRoot"), __webpack_require__.e("vendors~AuditsRoot"), __webpack_require__.e("AuditsRoot~TaskRoot"), __webpack_require__.e("AuditsRoot~UsersRoot"), __webpack_require__.e("AuditsRoot")]).then(__webpack_require__.bind(null, /*! universal/modules/audits/AuditsRoot */ "./src/universal/modules/audits/AuditsRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const OutstandingRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | AuditsRoot */[__webpack_require__.e("vendors~AuditsRoot~Queue~TaskRoot"), __webpack_require__.e("vendors~AuditsRoot"), __webpack_require__.e("AuditsRoot~TaskRoot"), __webpack_require__.e("AuditsRoot~UsersRoot"), __webpack_require__.e("AuditsRoot")]).then(__webpack_require__.bind(null, /*! universal/modules/outstanding/OutstandingRoot */ "./src/universal/modules/outstanding/OutstandingRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const MetricsRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | MetricsRoot */ "MetricsRoot").then(__webpack_require__.bind(null, /*! client/modules/metrics/MetricsRoot */ "./src/client/modules/metrics/MetricsRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const NotFound = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | NotFound */ "NotFound").then(__webpack_require__.bind(null, /*! client/components/NotFound */ "./src/client/components/NotFound.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));

const Dashboard = props => {
  const {
    user,
    orgName,
    organizations,
    handleNewOrganization,
    switchUserOrg,
    history: {
      location
    },
    isStaff
  } = props || {};
  const hideSidebar = location.pathname.includes('task');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashLayout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, !hideSidebar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    switchUserOrg: switchUserOrg,
    user: user,
    orgName: orgName,
    organizations: organizations,
    handleNewOrganization: handleNewOrganization,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DashMain, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/outstanding-queues",
    render: p => {
      if (isStaff) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OutstandingRoot, _objectSpread(_objectSpread({}, p), {}, {
        user: user,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/queues",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/queues",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueuesRoot, _objectSpread(_objectSpread({
      organizations: organizations
    }, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/users",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UsersRoot, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/audits",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuditsRoot, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/metrics",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MetricsRoot, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: NotFound,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }))));
};

const mapStateToProps = state => ({
  isStaff: state.currentUser.isStaff
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Dashboard));

/***/ }),

/***/ "./src/client/utils/isUserStaff.ts":
/*!*****************************************!*\
  !*** ./src/client/utils/isUserStaff.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


const isUserStaff = (organizations, current_organization_id) => {
  for (const org of organizations) {
    if (org.id === universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["STAFF_ORG_ID"] && current_organization_id === universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["STAFF_ORG_ID"]) return true;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (isUserStaff);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQXBwTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0RvdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93RG93blNWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0F1ZGl0c1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0RvY3VtZW50YXRpb25TVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9NZXRyaWNzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvUXVldWVTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9TZXR0aW5nc1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1VzZXJzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTmV3T3JnTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZGFzaGJvYXJkL0Rhc2hib2FyZFJvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidW5kZWZpbmVkIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQ29udGFpbmVyIiwiSGVhZEJsb2NrIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwidXNlclNlbGVjdCIsImN1cnNvciIsImJvcmRlckJvdHRvbSIsIlBBTEVUVEUiLCJCT1JERVJfR1JBWSIsIkFjdGlvbkJsb2NrIiwibWFyZ2luQm90dG9tIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJPcmdDb250YWluZXIiLCJQbGFpbkJ1dHRvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsIndpZHRoIiwiY29sb3IiLCJURVhUX0dSQVkiLCJPcmdOYW1lIiwiYWN0aXZlIiwidGV4dE92ZXJmbG93IiwiVEVYVF9NQUlOIiwiU3R5bGVkTmFtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIlN0eWxlZEVtYWlsIiwiTGFiZWwiLCJUZXh0IiwibWFyZ2luTGVmdCIsIlN0eWxlZEljb24iLCJJY29uIiwiQXBwTWVudSIsInByb3BzIiwidG9nZ2xlUG9ydGFsIiwic3dpdGNoVXNlck9yZyIsIm1lbnVQcm9wcyIsIm5hbWUiLCJlbWFpbCIsIm9yZ2FuaXphdGlvbnMiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsInRvZ2dsZU1vZGFsUG9ydGFsIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwibWFwIiwiaWQiLCJrZXkiLCJCcmFuZCIsIl8iLCJjaGFyQXQiLCJfMiIsIm9uQ2xpY2siLCJNZW51IiwiYXJpYUxhYmVsIiwiTWVudUl0ZW0iLCJsYWJlbCIsIkRvY3VtZW50YXRpb25TVkciLCJ3aW5kb3ciLCJvcGVuIiwicHVzaCIsIlN0eWxlZERvdCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiRG90IiwiQXJyb3dEb3duU1ZHIiwibWVtbyIsInZpZXdCb3giLCJ4bWxucyIsImZpbGwiLCJkIiwiVXNlcnNTVkciLCJNZXRyaWNTVkciLCJRdWV1ZVNWRyIsIlNldHRpbmdzU1ZHIiwiTW9kYWxSb290IiwiYm9yZGVyIiwiQk9SREVSX01BSU5fR1JBWSIsImJveFNoYWRvdyIsIkJveFNoYWRvdyIsIk1PREFMIiwiTWFpblRpdGxlIiwiRm9ybUNvbnRlbnQiLCJGb3JtIiwiQnV0dG9uU2VjdGlvbiIsIk5ld09yZ01vZGFsIiwiY2xvc2VQb3J0YWwiLCJoYW5kbGVOZXdPcmdhbml6YXRpb24iLCJvblN1Ym1pdEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwiRm9ybWlrIiwidmFsaWRhdGVPbkNoYW5nZSIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib3JnYW5pemF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJoYW5kbGVDaGFuZ2UiLCJJbnB1dEZpZWxkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlNlY29uZGFyeUJ1dHRvbiIsInR5cGUiLCJQcmltYXJ5QnV0dG9uIiwiZGlzYWJsZWQiLCJTdHlsZWRSb290IiwicG9zaXRpb24iLCJCQUNLR1JPVU5EX01BSU4iLCJib3JkZXJSaWdodCIsIk5hdkNvbnRlbnRzIiwiTWVudUJsb2NrIiwidHJhbnNpdGlvbiIsIlBSSU1BUllfTUFJTl9MSUdIVEVTVCIsIlBSSU1BUllfTUFJTiIsIkZvb3RlciIsIlBSSU1BUllfTUFJTl9EQVJLIiwiQ29tcGFueSIsImxpbmVIZWlnaHQiLCJOYXZJdGVtcyIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwidGV4dERlY29yYXRpb24iLCJwYWRkaW5nTGVmdCIsIm9wYWNpdHkiLCJCQUNLR1JPVU5EX0hPVkVSX0xJR0hUIiwiTmF2U3ViSXRlbSIsImFjdGl2ZUxpbmtTdHlsZXMiLCJCQUNLR1JPVU5EX0hPVkVSIiwiU2lkZWJhciIsInVzZXIiLCJsb2NhdGlvbiIsIm9yZ05hbWUiLCJpc01ldHJpY1JvdXRlIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIm1lbnVQb3J0YWwiLCJvcmlnaW5SZWYiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfTEVGVCIsImlzRHJvcGRvd24iLCJtb2RhbFBvcnRhbCIsImNsb3NlTW9kYWxQb3J0YWwiLCJ1c2VNb2RhbCIsInJlZiIsIkNsYXNzTmFtZXMiLCJjc3MiLCJGcmFnbWVudCIsImlzVXNlclN0YWZmIiwidG8iLCJhY3RpdmVDbGFzc05hbWUiLCJVc2Vyc0ljb24iLCJpc19hZG1pbiIsIkF1ZGl0c1NWRyIsIlF1ZXVlSWNvbiIsIk1ldHJpY3NJY29uIiwiZXhhY3QiLCJMSU5LIiwiUFJJTUFSWV9HUkVFTiIsIndpdGhSb3V0ZXIiLCJEYXNoYm9hcmRSb290IiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiYWNjZXNzT2JqIiwidXNlcl9pZCIsInVzZXJJZCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRPcmdJZCIsIm9yZ2FuaXphdGlvbiIsInNldE9yZyIsInNldE9yZ3MiLCJmZXRjaFVzZXJBbmRPcmdJbmZvIiwicmVzcCIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwiZGF0YSIsImVycm9ycyIsIm9yZyIsIm9yZ3MiLCJpc1N0YWZmIiwiYWRkVXNlciIsImNvbnNvbGUiLCJlcnJvciIsImZvckVhY2giLCJlIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdPcmdJZCIsIkRhc2hib2FyZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCIsIkRhc2hMYXlvdXQiLCJEYXNoTWFpbiIsImZsZXgiLCJiYWNrZ3JvdW5kIiwiUXVldWVzUm9vdCIsImxhenkiLCJjYXRjaCIsImhhbmRsZUNodW5rRXJyb3IiLCJVc2Vyc1Jvb3QiLCJBdWRpdHNSb290IiwiT3V0c3RhbmRpbmdSb290IiwiTWV0cmljc1Jvb3QiLCJOb3RGb3VuZCIsImhpZGVTaWRlYmFyIiwiU3dpdGNoIiwiUm91dGUiLCJwYXRoIiwicmVuZGVyIiwicCIsIlJlZGlyZWN0IiwiY29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjdXJyZW50VXNlciIsIlNUQUZGX09SR19JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxxRUFBckI7O0FBQTRGLFNBQVNDLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQUUsTUFBSUMsYUFBYSxHQUFHQyxTQUFwQjtBQUErQixNQUFJQyxLQUFLLEdBQUdILEdBQUcsQ0FBQyxDQUFELENBQWY7QUFBb0IsTUFBSUksQ0FBQyxHQUFHLENBQVI7O0FBQVcsU0FBT0EsQ0FBQyxHQUFHSixHQUFHLENBQUNLLE1BQWYsRUFBdUI7QUFBRSxVQUFNQyxFQUFFLEdBQUdOLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFkO0FBQW1CLFVBQU1HLEVBQUUsR0FBR1AsR0FBRyxDQUFDSSxDQUFDLEdBQUcsQ0FBTCxDQUFkO0FBQXVCQSxLQUFDLElBQUksQ0FBTDs7QUFBUSxRQUFJLENBQUNFLEVBQUUsS0FBSyxnQkFBUCxJQUEyQkEsRUFBRSxLQUFLLGNBQW5DLEtBQXNESCxLQUFLLElBQUksSUFBbkUsRUFBeUU7QUFBRSxhQUFPRCxTQUFQO0FBQW1COztBQUFDLFFBQUlJLEVBQUUsS0FBSyxRQUFQLElBQW1CQSxFQUFFLEtBQUssZ0JBQTlCLEVBQWdEO0FBQUVMLG1CQUFhLEdBQUdFLEtBQWhCO0FBQXVCQSxXQUFLLEdBQUdJLEVBQUUsQ0FBQ0osS0FBRCxDQUFWO0FBQW9CLEtBQTdGLE1BQW1HLElBQUlHLEVBQUUsS0FBSyxNQUFQLElBQWlCQSxFQUFFLEtBQUssY0FBNUIsRUFBNEM7QUFBRUgsV0FBSyxHQUFHSSxFQUFFLENBQUMsQ0FBQyxHQUFHQyxJQUFKLEtBQWFMLEtBQUssQ0FBQ00sSUFBTixDQUFXUixhQUFYLEVBQTBCLEdBQUdPLElBQTdCLENBQWQsQ0FBVjtBQUE2RFAsbUJBQWEs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QUFFQSxNQUFNM0MsV0FBVyxHQUFHLENBQUN2SCxhQUFELEVBQWdCQyx1QkFBaEIsS0FBNEM7QUFDOUQsT0FBSyxNQUFNb0osR0FBWCxJQUFrQnJKLGFBQWxCLEVBQWlDO0FBQy9CLFFBQUlxSixHQUFHLENBQUN6SSxFQUFKLEtBQVdtTCxzRUFBWCxJQUEyQjlMLHVCQUF1QixLQUFLOEwsc0VBQTNELEVBQXlFLE9BQU8sSUFBUDtBQUMxRTs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDQU5EOztBQU9leEUsMEVBQWYsRSIsImZpbGUiOiJEYXNoYm9hcmRSb290XzRlMzFiYjUxZTE5MDZmZmRjNDA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0FwcE1lbnUudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cnXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgRG9jdW1lbnRhdGlvblNWRyBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9Eb2N1bWVudGF0aW9uU1ZHJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge0JyYW5kfSBmcm9tICcuL1NpZGViYXInXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6IDIyMFxufSlcblxuY29uc3QgSGVhZEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGN1cnNvcjogJ2RlZmF1bHQnLFxuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWBcbn0pXG5cbmNvbnN0IEFjdGlvbkJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVl9YCxcbiAgbWFyZ2luQm90dG9tOiA1LFxuICBwYWRkaW5nOiAnMTBweCAwJyxcbiAgbWF4SGVpZ2h0OiAnNjB2aCcsXG4gIG92ZXJmbG93OiAnYXV0bydcbn0pXG5cbmNvbnN0IE9yZ0NvbnRhaW5lciA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBtYXJnaW5Cb3R0b206IDEwLFxuICBtYXJnaW46IDAsXG4gIHdpZHRoOiAnYXV0bycsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbn0pXG5cbmNvbnN0IE9yZ05hbWUgPSBzdHlsZWQuZGl2KCh7YWN0aXZlfSkgPT4gKHtcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcGFkZGluZzogMCxcbiAgLi4udGV4dE92ZXJmbG93LFxuICBjb2xvcjogYWN0aXZlID8gUEFMRVRURS5URVhUX01BSU4gOiAnIzRkNGQ0ZCcsXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBTdHlsZWROYW1lID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1hcmdpbkJvdHRvbTogMixcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBTdHlsZWRFbWFpbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTMsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFdlaWdodDogNDAwLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxuICB3aWR0aDogJzEwMCUnXG59KVxuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgbWFyZ2luTGVmdDogMTVcbn0pXG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE2XG59KVxuXG5jb25zdCBBcHBNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0b2dnbGVQb3J0YWwsXG4gICAgc3dpdGNoVXNlck9yZyxcbiAgICBtZW51UHJvcHMsXG4gICAgbmFtZSxcbiAgICBlbWFpbCxcbiAgICBvcmdhbml6YXRpb25zLFxuICAgIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkLFxuICAgIHRvZ2dsZU1vZGFsUG9ydGFsXG4gIH0gPSBwcm9wc1xuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTJ9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTN9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVtYWlsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExNH19LCBlbWFpbClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTZ9fVxuICAgICAgICAsIG9yZ2FuaXphdGlvbnMubWFwKCh7bmFtZSwgaWR9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcmdDb250YWluZXIsIHsga2V5OiBpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJhbmQsIHsgYWN0aXZlOiBpZCA9PT0gY3VycmVudF9vcmdhbml6YXRpb25faWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTl9fSwgX29wdGlvbmFsQ2hhaW4oW25hbWUsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5jaGFyQXQsICdjYWxsJywgXzIgPT4gXzIoMCldKSlcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChPcmdOYW1lLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b2dnbGVQb3J0YWwoKVxuICAgICAgICAgICAgICAgIHN3aXRjaFVzZXJPcmcoaWQpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFjdGl2ZTogaWQgPT09IGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIwfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAsIG5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkpXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIHsgYXJpYUxhYmVsOiAnRG9jdW1lbnRhdGlvbicsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzM319XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM2fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzd9fSwgXCJhZGRcIilcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzh9fSwgXCJBZGQgb3JnYW5pemF0aW9uXCIgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsUG9ydGFsKClcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzR9fVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHtcbiAgICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDd9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb2N1bWVudGF0aW9uU1ZHLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0OH19IClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDl9fSwgXCJEb2N1bWVudGF0aW9uXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2RvY3MuaHVtYW5sYW1iZGFzLmNvbS8nLCAnX2JsYW5rJyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDV9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIHsgYXJpYUxhYmVsOiAnVXNlciBtZW51JywgLi4ubWVudVByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjB9fSwgXCJleGl0X3RvX2FwcFwiKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjF9fSwgXCJTaWduIG91dFwiIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gaGlzdG9yeS5wdXNoKCcvc2lnbm91dCcpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU3fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRG90LnRzeFwiO2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cblxuXG5cblxuY29uc3QgU3R5bGVkRG90ID0gc3R5bGVkLmRpdigoe2NvbG9yfSkgPT4gKHtcbiAgaGVpZ2h0OiAxMCxcbiAgd2lkdGg6IDEwLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICBtYXJnaW5SaWdodDogMTBcbn0pKVxuXG5jb25zdCBEb3QgPSBSZWFjdC5tZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7Y29sb3J9ID0gcHJvcHNcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRG90LCB7IGNvbG9yOiBjb2xvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4fX0gKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRG90XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dEb3duU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQXJyb3dEb3duU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjEzXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjEzXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNNDAwIDIxNmEyMy45MjggMjMuOTI4IDAgMDEtMTYuOTcxLTcuMDI5TDI1NiA4MS45NDFsLTEyNy4wMjkgMTI3LjAzYTI0IDI0IDAgMDEtMzMuOTQyLTMzLjk0MmwxNDQtMTQ0YTI0IDI0IDAgMDEzMy45NDIgMGwxNDQgMTQ0QTI0IDI0IDAgMDE0MDAgMjE2ek0yNzIuOTcxIDQ4MC45NzFsMTQ0LTE0NGEyNCAyNCAwIDAwLTMzLjk0Mi0zMy45NDJMMjU2IDQzMC4wNTlsLTEyNy4wMjktMTI3LjAzYTI0IDI0IDAgMDAtMzMuOTQyIDMzLjk0MmwxNDQgMTQ0YTI0IDI0IDAgMDAzMy45NDIgMHpcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0Rvd25TVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BdWRpdHNTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBVc2Vyc1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxN1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTMyNS41IDQwaC03NS40MjZjLTguMjU4LTIzLjI4MS0zMC41LTQwLTU2LjU3NC00MHMtNDguMzE2IDE2LjcxOS01Ni41NzQgNDBINjAuNWMtMzMuMDg2IDAtNjAgMjYuOTE0LTYwIDYwdjM1MmMwIDMzLjA4NiAyNi45MTQgNjAgNjAgNjBoMjY1LjA2M2MzMy4wNS0uMDM1IDU5LjkzNy0yNi45NSA1OS45MzctNjBWMTAwYzAtMzMuMDg2LTI2LjkxNC02MC02MC02MHptLTE1MiA0MFY2MGMwLTExLjAyNyA4Ljk3My0yMCAyMC0yMHMyMCA4Ljk3MyAyMCAyMHYyMGg0MHYzOWgtMTIwVjgwem0xNzIgMzcyYzAgMTEuMDE2LTguOTY1IDE5Ljk4OC0xOS45NTcgMjBINjAuNWMtMTEuMDI3IDAtMjAtOC45NzMtMjAtMjBWMTAwYzAtMTEuMDI3IDguOTczLTIwIDIwLTIwaDMzdjc5aDIwMFY4MGgzMmMxMS4wMjcgMCAyMCA4Ljk3MyAyMCAyMHptLTc1Ljc5My0yMjEuOTZsMjkuNTgyIDI2LjkyTDE3MS4yIDM5Ny43MWwtODQuNjA1LTgxLjgzNSAyNy44MTItMjguNzUgNTQuOTY1IDUzLjE2NHptMCAwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0RvY3VtZW50YXRpb25TVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBEb2N1bWVudGF0aW9uU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjE1XCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjE1XCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNNDg0LjMzMyAyNTZjMC0xOS43My0yLjUxNS0zOS4yNDgtNy40ODQtNTguMTYybDI4LjktMjEuMjYxLTU2LjA5My05Ny4xNTUtMzIuOTEzIDE0LjQyYy0yOC4xMzgtMjcuOTM4LTYyLjU5NC00Ny44NDctMTAwLjY4OS01OC4xOEwzMTIuMDkzIDBIMTk5LjkwN2wtMy45NjIgMzUuNjYyYy0zOC4wOTYgMTAuMzMzLTcyLjU1MSAzMC4yNDItMTAwLjY4OSA1OC4xOGwtMzIuOTEyLTE0LjQyLTU2LjA5MyA5Ny4xNTUgMjguOSAyMS4yNjFjLTQuOTcgMTguOTE0LTcuNDg0IDM4LjQzMi03LjQ4NCA1OC4xNjJzMi41MTUgMzkuMjQ4IDcuNDg0IDU4LjE2MmwtMjguOSAyMS4yNiA1Ni4wOTMgOTcuMTU1IDMyLjkxMi0xNC40MmMyOC4xMzkgMjcuOTM5IDYyLjU5NCA0Ny44NDggMTAwLjY4OSA1OC4xOEwxOTkuOTA3IDUxMmgxMTIuMTg2bDMuOTYyLTM1LjY2M2MzOC4wOTYtMTAuMzMyIDcyLjU1MS0zMC4yNDIgMTAwLjY4OS01OC4xOGwzMi45MTIgMTQuNDIgNTYuMDkzLTk3LjE1NS0yOC45LTIxLjI2YzQuOTY5LTE4LjkxNCA3LjQ4NC0zOC40MzIgNy40ODQtNTguMTYyek0yOTkuMDYxIDQ0OS42MzNsLTEwLjQ4MSAyLjMyTDI4NS4yNDEgNDgyaC01OC40ODJsLTMuMzM5LTMwLjA0Ny0xMC40ODEtMi4zMmMtMzkuNzM5LTguNzk1LTc1LjM4Mi0yOS4zODktMTAzLjA3NC01OS41NTVsLTcuMjUtNy44OTgtMjcuNzE2IDEyLjE0My0yOS4yNDEtNTAuNjQ3IDI0LjMyNS0xNy44OTQtMy4yMTYtMTAuMjI4Yy02LjAzOC0xOS4yMDctOS4xLTM5LjI0NC05LjEtNTkuNTU0IDAtMjAuMzExIDMuMDYyLTQwLjM0OCA5LjEtNTkuNTU0bDMuMjE2LTEwLjIyOC0yNC4zMjUtMTcuODk0IDI5LjI0MS01MC42NDcgMjcuNzE2IDEyLjE0MyA3LjI1LTcuODk4YzI3LjY5Mi0zMC4xNjYgNjMuMzM1LTUwLjc2IDEwMy4wNzQtNTkuNTU1bDEwLjQ4MS0yLjMyTDIyNi43NTkgMzBoNTguNDgybDMuMzM5IDMwLjA0NyAxMC40ODEgMi4zMmMzOS43MzkgOC43OTYgNzUuMzgyIDI5LjM5IDEwMy4wNzQgNTkuNTU1bDcuMjUgNy44OTggMjcuNzE2LTEyLjE0MyAyOS4yNDEgNTAuNjQ3LTI0LjMyNSAxNy44OTQgMy4yMTYgMTAuMjI4YzYuMDM4IDE5LjIwNyA5LjEgMzkuMjQ0IDkuMSA1OS41NTRzLTMuMDYxIDQwLjM0Ny05LjEgNTkuNTU0bC0zLjIxNiAxMC4yMjggMjQuMzI1IDE3Ljg5NC0yOS4yNDEgNTAuNjQ3LTI3LjcxNi0xMi4xNDMtNy4yNSA3Ljg5OGMtMjcuNjkyIDMwLjE2Ni02My4zMzQgNTAuNzYtMTAzLjA3NCA1OS41NTV6XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xOTYuNDQ4IDIyMS42NmwtMjEuNDMzLTIwLjk5LTU0Ljg2MyA1Ni4wMTkgNTYuMDIgNTQuODYzIDIwLjk5LTIxLjQzNC0zNC41ODYtMzMuODcyek0zMTUuNTUyIDIyMS42NmwzMy44NzIgMzQuNTg2LTM0LjU4NiAzMy44NzIgMjAuOTkgMjEuNDM0IDU2LjAyLTU0Ljg2My01NC44NjMtNTYuMDE5ek0yMjAuMDk3IDM1NC4xNzZsNDIuNjY0LTIwMi43NiAyOS4zNzEgNi4xOC00Mi42NjQgMjAyLjc2elwiICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTR9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvTWV0cmljc1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IE1ldHJpY1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTI5OC42NjcgODUuMzMzbDQ4Ljk2IDQ4Ljk2LTEwNC4xMDcgMTA0LTg1LjMzMy04NS4zMzNMMCAzMTEuMTQ3bDMwLjE4NyAzMC4xODYgMTI4LTEyOCA4NS4zMzMgODUuMzM0IDEzNC4xODctMTM0LjI5NCA0OC45NiA0OC45NnYtMTI4elwiICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE1ldHJpY1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1F1ZXVlU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgUXVldWVTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTVcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHZpZXdCb3g6IFwiMCAwIDQyNi42NjcgNDI2LjY2N1wiICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTM0MS4zMzMgNTMuMzMzTDI1NiAxMzguNjY3aDY0VjI4OGMwIDIzLjU3My0xOS4wOTMgNDIuNjY3LTQyLjY2NyA0Mi42NjctMjMuNTczIDAtNDIuNjY3LTE5LjA5My00Mi42NjctNDIuNjY3VjEzOC42NjdjMC00Ny4wNC0zOC4yOTMtODUuMzMzLTg1LjMzMy04NS4zMzNTNjQgOTEuNjI3IDY0IDEzOC42NjdWMjg4SDBsODUuMzMzIDg1LjMzM0wxNzAuNjY3IDI4OGgtNjRWMTM4LjY2N2MwLTIzLjU3MyAxOS4wOTMtNDIuNjY3IDQyLjY2Ny00Mi42NjdTMTkyIDExNS4wOTMgMTkyIDEzOC42NjdWMjg4YzAgNDcuMDQgMzguMjkzIDg1LjMzMyA4NS4zMzMgODUuMzMzUzM2Mi42NjYgMzM1LjA0IDM2Mi42NjYgMjg4VjEzOC42NjdoNjRsLTg1LjMzMy04NS4zMzR6XCIgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19IClcbiAgICAgIClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvU2V0dGluZ3NTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTZXR0aW5nc1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTI3Mi4wNjYgNTEyaC0zMi4xMzNjLTI1Ljk4OSAwLTQ3LjEzNC0yMS4xNDQtNDcuMTM0LTQ3LjEzM3YtMTAuODcxYTIwNi42OTggMjA2LjY5OCAwIDAxLTMyLjA5Ny0xMy4zMjNsLTcuNzA0IDcuNzA0Yy0xOC42NTkgMTguNjgyLTQ4LjU0OCAxOC4xMzQtNjYuNjY1LS4wMDdsLTIyLjcxMS0yMi43MWMtMTguMTQ5LTE4LjEyOS0xOC42NzEtNDguMDA4LjAwNi02Ni42NjVsNy42OTgtNy42OThBMjA2LjcxNCAyMDYuNzE0IDAgMDE1OC4wMDMgMzE5LjJoLTEwLjg3QzIxLjE0NSAzMTkuMiAwIDI5OC4wNTYgMCAyNzIuMDY3di0zMi4xMzRDMCAyMTMuOTQ0IDIxLjE0NSAxOTIuOCA0Ny4xMzQgMTkyLjhoMTAuODdhMjA2Ljc1NSAyMDYuNzU1IDAgMDExMy4zMjMtMzIuMDk3TDYzLjYyMyAxNTNjLTE4LjY2Ni0xOC42NDYtMTguMTUxLTQ4LjUyOC4wMDYtNjYuNjY1bDIyLjcxMy0yMi43MTJjMTguMTU5LTE4LjE4NCA0OC4wNDEtMTguNjM4IDY2LjY2NC4wMDZsNy42OTcgNy42OTdBMjA2Ljg5MyAyMDYuODkzIDAgMDExOTIuOCA1OC4wMDN2LTEwLjg3QzE5Mi44IDIxLjE0NCAyMTMuOTQ0IDAgMjM5LjkzNCAwaDMyLjEzM0MyOTguMDU2IDAgMzE5LjIgMjEuMTQ0IDMxOS4yIDQ3LjEzM3YxMC44NzFhMjA2LjY5OCAyMDYuNjk4IDAgMDEzMi4wOTcgMTMuMzIzbDcuNzA0LTcuNzA0YzE4LjY1OS0xOC42ODIgNDguNTQ4LTE4LjEzNCA2Ni42NjUuMDA3bDIyLjcxMSAyMi43MWMxOC4xNDkgMTguMTI5IDE4LjY3MSA0OC4wMDgtLjAwNiA2Ni42NjVsLTcuNjk4IDcuNjk4YTIwNi43MTQgMjA2LjcxNCAwIDAxMTMuMzIzIDMyLjA5N2gxMC44N2MyNS45ODkgMCA0Ny4xMzQgMjEuMTQ0IDQ3LjEzNCA0Ny4xMzN2MzIuMTM0YzAgMjUuOTg5LTIxLjE0NSA0Ny4xMzMtNDcuMTM0IDQ3LjEzM2gtMTAuODdhMjA2Ljc1NSAyMDYuNzU1IDAgMDEtMTMuMzIzIDMyLjA5N2w3LjcwNCA3LjcwNGMxOC42NjYgMTguNjQ2IDE4LjE1MSA0OC41MjgtLjAwNiA2Ni42NjVsLTIyLjcxMyAyMi43MTJjLTE4LjE1OSAxOC4xODQtNDguMDQxIDE4LjYzOC02Ni42NjQtLjAwNmwtNy42OTctNy42OTdhMjA2Ljg5MyAyMDYuODkzIDAgMDEtMzIuMDk3IDEzLjMyM3YxMC44NzFjMCAyNS45ODctMjEuMTQ0IDQ3LjEzMS00Ny4xMzQgNDcuMTMxek0xNjUuNzE3IDQwOS4xN2ExNzYuODEyIDE3Ni44MTIgMCAwMDQ1LjgzMSAxOS4wMjUgMTQuOTk5IDE0Ljk5OSAwIDAxMTEuMjUyIDE0LjUyNHYyMi4xNDhjMCA5LjQ0NyA3LjY4NyAxNy4xMzMgMTcuMTM0IDE3LjEzM2gzMi4xMzNjOS40NDcgMCAxNy4xMzQtNy42ODYgMTcuMTM0LTE3LjEzM3YtMjIuMTQ4YTE0Ljk5OSAxNC45OTkgMCAwMTExLjI1Mi0xNC41MjQgMTc2LjgxMiAxNzYuODEyIDAgMDA0NS44MzEtMTkuMDI1IDE1IDE1IDAgMDExOC4yNDMgMi4zMDVsMTUuNjg4IDE1LjY4OWM2Ljc2NCA2Ljc3MiAxNy42MjYgNi42MTUgMjQuMjI0LjAwN2wyMi43MjctMjIuNzI2YzYuNTgyLTYuNTc0IDYuODAyLTE3LjQzOC4wMDYtMjQuMjI1bC0xNS42OTUtMTUuNjk1YTE1IDE1IDAgMDEtMi4zMDUtMTguMjQyIDE3Ni43OCAxNzYuNzggMCAwMDE5LjAyNC00NS44MzEgMTUgMTUgMCAwMTE0LjUyNC0xMS4yNTFoMjIuMTQ3YzkuNDQ3IDAgMTcuMTM0LTcuNjg2IDE3LjEzNC0xNy4xMzN2LTMyLjEzNGMwLTkuNDQ3LTcuNjg3LTE3LjEzMy0xNy4xMzQtMTcuMTMzSDQ0Mi43MmExNSAxNSAwIDAxLTE0LjUyNC0xMS4yNTEgMTc2LjgxNSAxNzYuODE1IDAgMDAtMTkuMDI0LTQ1LjgzMSAxNSAxNSAwIDAxMi4zMDUtMTguMjQybDE1LjY4OS0xNS42ODljNi43ODItNi43NzQgNi42MDUtMTcuNjM0LjAwNi0yNC4yMjVsLTIyLjcyNS0yMi43MjVjLTYuNTg3LTYuNTk2LTE3LjQ1MS02Ljc4OS0yNC4yMjUtLjAwNmwtMTUuNjk0IDE1LjY5NWExNSAxNSAwIDAxLTE4LjI0MyAyLjMwNSAxNzYuODEyIDE3Ni44MTIgMCAwMC00NS44MzEtMTkuMDI1IDE0Ljk5OSAxNC45OTkgMCAwMS0xMS4yNTItMTQuNTI0di0yMi4xNWMwLTkuNDQ3LTcuNjg3LTE3LjEzMy0xNy4xMzQtMTcuMTMzaC0zMi4xMzNjLTkuNDQ3IDAtMTcuMTM0IDcuNjg2LTE3LjEzNCAxNy4xMzN2MjIuMTQ4YTE0Ljk5OSAxNC45OTkgMCAwMS0xMS4yNTIgMTQuNTI0IDE3Ni44MTIgMTc2LjgxMiAwIDAwLTQ1LjgzMSAxOS4wMjUgMTUuMDAyIDE1LjAwMiAwIDAxLTE4LjI0My0yLjMwNWwtMTUuNjg4LTE1LjY4OWMtNi43NjQtNi43NzItMTcuNjI3LTYuNjE1LTI0LjIyNC0uMDA3bC0yMi43MjcgMjIuNzI2Yy02LjU4MiA2LjU3NC02LjgwMiAxNy40MzctLjAwNiAyNC4yMjVsMTUuNjk1IDE1LjY5NWExNSAxNSAwIDAxMi4zMDUgMTguMjQyIDE3Ni43OCAxNzYuNzggMCAwMC0xOS4wMjQgNDUuODMxIDE1IDE1IDAgMDEtMTQuNTI0IDExLjI1MUg0Ny4xMzRDMzcuNjg3IDIyMi44IDMwIDIzMC40ODYgMzAgMjM5LjkzM3YzMi4xMzRjMCA5LjQ0NyA3LjY4NyAxNy4xMzMgMTcuMTM0IDE3LjEzM2gyMi4xNDdhMTUgMTUgMCAwMTE0LjUyNCAxMS4yNTEgMTc2LjgxNSAxNzYuODE1IDAgMDAxOS4wMjQgNDUuODMxIDE1IDE1IDAgMDEtMi4zMDUgMTguMjQybC0xNS42ODkgMTUuNjg5Yy02Ljc4MiA2Ljc3NC02LjYwNSAxNy42MzQtLjAwNiAyNC4yMjVsMjIuNzI1IDIyLjcyNWM2LjU4NyA2LjU5NiAxNy40NTEgNi43ODkgMjQuMjI1LjAwNmwxNS42OTQtMTUuNjk1YzMuNTY4LTMuNTY3IDEwLjk5MS02LjU5NCAxOC4yNDQtMi4zMDR6XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMjU2IDM2Ny40Yy02MS40MjcgMC0xMTEuNC00OS45NzQtMTExLjQtMTExLjRTMTk0LjU3MyAxNDQuNiAyNTYgMTQ0LjYgMzY3LjQgMTk0LjU3NCAzNjcuNCAyNTYgMzE3LjQyNyAzNjcuNCAyNTYgMzY3LjR6bTAtMTkyLjhjLTQ0Ljg4NSAwLTgxLjQgMzYuNTE2LTgxLjQgODEuNHMzNi41MTYgODEuNCA4MS40IDgxLjQgODEuNC0zNi41MTYgODEuNC04MS40LTM2LjUxNS04MS40LTgxLjQtODEuNHpcIiAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9Vc2Vyc1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFVzZXJzU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjE1XCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjE3XCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMjEwLjM1MiAyNDYuNjMzYzMzLjg4MiAwIDYzLjIxOC0xMi4xNTMgODcuMTk1LTM2LjEzIDIzLjk2OS0yMy45NzIgMzYuMTI1LTUzLjMwNCAzNi4xMjUtODcuMTkgMC0zMy44NzYtMTIuMTUyLTYzLjIxMS0zNi4xMjktODcuMTkyQzI3My41NjYgMTIuMTUyIDI0NC4yMyAwIDIxMC4zNTIgMGMtMzMuODg3IDAtNjMuMjIgMTIuMTUyLTg3LjE5MiAzNi4xMjVzLTM2LjEyOSA1My4zMDktMzYuMTI5IDg3LjE4OGMwIDMzLjg4NiAxMi4xNTYgNjMuMjIyIDM2LjEzIDg3LjE5NSAyMy45OCAyMy45NjkgNTMuMzE2IDM2LjEyNSA4Ny4xOSAzNi4xMjV6TTE0NC4zNzkgNTcuMzRjMTguMzk0LTE4LjM5NSAzOS45NzMtMjcuMzM2IDY1Ljk3My0yNy4zMzYgMjUuOTk2IDAgNDcuNTc4IDguOTQxIDY1Ljk3NiAyNy4zMzYgMTguMzk1IDE4LjM5OCAyNy4zNCAzOS45OCAyNy4zNCA2NS45NzIgMCAyNi04Ljk0NSA0Ny41NzktMjcuMzQgNjUuOTc3LTE4LjM5OCAxOC4zOTktMzkuOTggMjcuMzQtNjUuOTc2IDI3LjM0LTI1Ljk5MyAwLTQ3LjU3LTguOTQ1LTY1Ljk3My0yNy4zNC0xOC4zOTktMTguMzk0LTI3LjM0NC0zOS45NzYtMjcuMzQ0LTY1Ljk3NiAwLTI1Ljk5MyA4Ljk0NS00Ny41NzUgMjcuMzQ0LTY1Ljk3M3ptMCAwTTQyNi4xMjkgMzkzLjcwM2MtLjY5Mi05Ljk3Ni0yLjA5LTIwLjg2LTQuMTQ5LTMyLjM1MS0yLjA3OC0xMS41NzktNC43NTMtMjIuNTI0LTcuOTU3LTMyLjUyOC0zLjMxMi0xMC4zNC03LjgwOC0yMC41NS0xMy4zNzUtMzAuMzM2LTUuNzctMTAuMTU2LTEyLjU1LTE5LTIwLjE2LTI2LjI3Ny03Ljk1Ny03LjYxMy0xNy42OTktMTMuNzM0LTI4Ljk2NS0xOC4yLTExLjIyNi00LjQ0LTIzLjY2OC02LjY5LTM2Ljk3Ni02LjY5LTUuMjI3IDAtMTAuMjgxIDIuMTQ0LTIwLjA0MyA4LjVhMjcxMS4wMyAyNzExLjAzIDAgMDEtMjAuODc5IDEzLjQ2Yy02LjcwNyA0LjI3NC0xNS43OTMgOC4yNzgtMjcuMDE2IDExLjkwMy0xMC45NDkgMy41NDMtMjIuMDY2IDUuMzQtMzMuMDQzIDUuMzQtMTAuOTY4IDAtMjIuMDg2LTEuNzk3LTMzLjA0My01LjM0LTExLjIxLTMuNjIyLTIwLjMtNy42MjUtMjYuOTk2LTExLjg5OS03Ljc3LTQuOTY1LTE0LjgtOS40OTYtMjAuODk4LTEzLjQ2OS05Ljc1NC02LjM1NS0xNC44MDktOC41LTIwLjAzNS04LjUtMTMuMzEzIDAtMjUuNzUgMi4yNTQtMzYuOTczIDYuNy0xMS4yNTggNC40NTctMjEuMDA0IDEwLjU3OC0yOC45NjkgMTguMTk5LTcuNjA5IDcuMjgxLTE0LjM5IDE2LjEyLTIwLjE1NiAyNi4yNzMtNS41NTggOS43ODUtMTAuMDU4IDE5Ljk5Mi0xMy4zNzEgMzAuMzQtMy4yIDEwLjAwNC01Ljg3NSAyMC45NDUtNy45NTMgMzIuNTI0LTIuMDYzIDExLjQ3Ni0zLjQ1NyAyMi4zNjMtNC4xNDkgMzIuMzYzQy4zNDMgNDAzLjQ5MiAwIDQxMy42NjggMCA0MjMuOTQ5YzAgMjYuNzI3IDguNDk2IDQ4LjM2MyAyNS4yNSA2NC4zMkM0MS43OTcgNTA0LjAxNyA2My42ODggNTEyIDkwLjMxNiA1MTJoMjQ2LjUzMmMyNi42MiAwIDQ4LjUxMS03Ljk4NCA2NS4wNjItMjMuNzMgMTYuNzU4LTE1Ljk0NiAyNS4yNTQtMzcuNTkgMjUuMjU0LTY0LjMyNS0uMDA0LTEwLjMxNi0uMzUxLTIwLjQ5Mi0xLjAzNS0zMC4yNDJ6bS00NC45MDYgNzIuODI4Yy0xMC45MzQgMTAuNDA2LTI1LjQ1IDE1LjQ2NS00NC4zOCAxNS40NjVIOTAuMzE3Yy0xOC45MzMgMC0zMy40NDktNS4wNTktNDQuMzc5LTE1LjQ2LTEwLjcyMi0xMC4yMDgtMTUuOTMzLTI0LjE0MS0xNS45MzMtNDIuNTg3IDAtOS41OTQuMzE2LTE5LjA2Ni45NS0yOC4xNi42MTYtOC45MjIgMS44NzgtMTguNzIzIDMuNzUtMjkuMTM3IDEuODQ3LTEwLjI4NSA0LjE5OC0xOS45MzcgNi45OTUtMjguNjc1IDIuNjg0LTguMzggNi4zNDQtMTYuNjc2IDEwLjg4My0yNC42NjggNC4zMzItNy42MTggOS4zMTYtMTQuMTUzIDE0LjgxNi0xOS40MTggNS4xNDUtNC45MjYgMTEuNjMtOC45NTcgMTkuMjctMTEuOTggNy4wNjYtMi43OTggMTUuMDA4LTQuMzI5IDIzLjYyOS00LjU2IDEuMDUuNTYgMi45MjIgMS42MjYgNS45NTMgMy42MDIgNi4xNjggNC4wMiAxMy4yNzcgOC42MDYgMjEuMTM3IDEzLjYyNSA4Ljg2IDUuNjQ5IDIwLjI3MyAxMC43NSAzMy45MSAxNS4xNTIgMTMuOTQxIDQuNTA4IDI4LjE2IDYuNzk3IDQyLjI3MyA2Ljc5NyAxNC4xMTQgMCAyOC4zMzYtMi4yODkgNDIuMjctNi43OTMgMTMuNjQ4LTQuNDEgMjUuMDU4LTkuNTA3IDMzLjkzLTE1LjE2NCA4LjA0My01LjE0IDE0Ljk1My05LjU5MyAyMS4xMi0xMy42MTcgMy4wMzItMS45NzMgNC45MDMtMy4wNDMgNS45NTQtMy42MDEgOC42MjUuMjMgMTYuNTY2IDEuNzYxIDIzLjYzNiA0LjU1OCA3LjYzNyAzLjAyNCAxNC4xMjIgNy4wNTkgMTkuMjY2IDExLjk4IDUuNSA1LjI2MiAxMC40ODQgMTEuNzk4IDE0LjgxNiAxOS40MjMgNC41NDMgNy45ODggOC4yMDggMTYuMjg5IDEwLjg4NyAyNC42NiAyLjgwMSA4Ljc1IDUuMTU2IDE4LjM5OCA3IDI4LjY3NSAxLjg2NyAxMC40MzQgMy4xMzMgMjAuMjM5IDMuNzUgMjkuMTQ1di4wMDhjLjYzNyA5LjA1OC45NTcgMTguNTI3Ljk2MSAyOC4xNDgtLjAwNCAxOC40NS01LjIxNSAzMi4zOC0xNS45MzcgNDIuNTgyem0wIDBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTmV3T3JnTW9kYWwudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0Zvcm1paywgRm9ybX0gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtvcmdhbml6YXRpb25TY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAnY2xpZW50L3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbidcblxuXG5cblxuXG5cbmNvbnN0IE1vZGFsUm9vdCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB3aWR0aDogNTAwLFxuICBib3JkZXJSYWRpdXM6IDEwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJveFNoYWRvdzogQm94U2hhZG93Lk1PREFMXG59KVxuXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDIyLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkJvdHRvbTogMzVcbn0pXG5cbmNvbnN0IEZvcm1Db250ZW50ID0gc3R5bGVkKEZvcm0pKHtcbiAgcGFkZGluZzogJzUwcHggNTBweCAzMHB4J1xufSlcblxuY29uc3QgQnV0dG9uU2VjdGlvbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoMiwgYXV0byknLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nVG9wOiAnMjVweCdcbn0pXG5cbmNvbnN0IE5ld09yZ01vZGFsID0gKHtjbG9zZVBvcnRhbCwgaGFuZGxlTmV3T3JnYW5pemF0aW9ufSkgPT4ge1xuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XG4gICAgICBoYW5kbGVOZXdPcmdhbml6YXRpb24odmFsdWVzKVxuICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKClcbiAgICAgIGNsb3NlUG9ydGFsKClcbiAgICB9LFxuICAgIFtjbG9zZVBvcnRhbCwgaGFuZGxlTmV3T3JnYW5pemF0aW9uXVxuICApXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFJvb3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7bmFtZTogJyd9LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBvcmdhbml6YXRpb25TY2hlbWEsXG4gICAgICAgIG9uU3VibWl0OiBvblN1Ym1pdEhhbmRsZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Nn19XG4gICAgICBcbiAgICAgICAgLCAoe2lzU3VibWl0dGluZywgdmFsdWVzLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX0sIFwiQWRkIG5ldyBvcmdhbml6YXRpb25cIiAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgb3JnYW5pemF0aW9uIG5hbWVcIiAgLFxuICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjV9fVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvblNlY3Rpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzF9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGNsb3NlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fSwgXCJDYW5jZWxcIlxuXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX0sIFwiQ3JlYXRlXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld09yZ01vZGFsXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU2lkZWJhci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Q2xhc3NOYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7TmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUXVldWVJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL1F1ZXVlU1ZHJ1xuaW1wb3J0IFVzZXJzSWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9Vc2Vyc1NWRydcbmltcG9ydCBNZXRyaWNzSWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9NZXRyaWNzU1ZHJ1xuaW1wb3J0IFNldHRpbmdzU1ZHIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL1NldHRpbmdzU1ZHJ1xuaW1wb3J0IEF1ZGl0c1NWRyBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9BdWRpdHNTVkcnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdjbGllbnQvaG9va3MvdXNlTWVudSdcbmltcG9ydCBBcHBNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0FwcE1lbnUnXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCBBcnJvd0Rvd25TVkcgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dEb3duU1ZHJ1xuaW1wb3J0IERvdCBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Eb3QnXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1vZGFsJ1xuaW1wb3J0IE5ld09yZ01vZGFsIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL05ld09yZ01vZGFsJ1xuaW1wb3J0IGlzVXNlclN0YWZmIGZyb20gJ2NsaWVudC91dGlscy9pc1VzZXJTdGFmZidcblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkUm9vdCA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfTUFJTixcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KVxuXG5jb25zdCBOYXZDb250ZW50cyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgcGFkZGluZzogMCxcbiAgd2lkdGg6IDI1MCxcbiAgb3ZlcmZsb3dZOiAnYXV0bydcbn0pXG5cbmNvbnN0IE1lbnVCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6IDQ1LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBmb250U2l6ZTogMTUsXG4gIHBhZGRpbmc6ICcwIDE1cHgnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXG4gIG1hcmdpbkJvdHRvbTogNTAsXG4gIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGxpbmVhcicsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9MSUdIVEVTVCxcbiAgICBjb2xvcjogYCR7UEFMRVRURS5QUklNQVJZX01BSU59ICFpbXBvcnRhbnRgXG4gIH1cbn0pXG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDI1XG59KVxuXG5leHBvcnQgY29uc3QgQnJhbmQgPSBzdHlsZWQuZGl2KCh7YWN0aXZlfSkgPT4gKHtcbiAgaGVpZ2h0OiAyNSxcbiAgd2lkdGg6IDI1LFxuICBjb2xvcjogYWN0aXZlID8gUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyA6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHthY3RpdmUgPyBQQUxFVFRFLlBSSU1BUllfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgbWFyZ2luUmlnaHQ6IDEwXG59KSlcblxuY29uc3QgQ29tcGFueSA9IHN0eWxlZC5kaXYoe1xuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIG1hcmdpblJpZ2h0OiA1LFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IE5hdkl0ZW1zID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIC8vIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgbWFyZ2luTGVmdDogMTUsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udFNpemU6IDE1XG59KVxuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkKE5hdkxpbmspKHtcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBoZWlnaHQ6IDMwLFxuICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gIHBhZGRpbmdMZWZ0OiAxMCxcbiAgbWFyZ2luOiAnMnB4IDEwcHgnLFxuICBvcGFjaXR5OiAwLjc1LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJfTElHSFQsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KVxuXG5jb25zdCBOYXZTdWJJdGVtID0gc3R5bGVkKE5hdkxpbmspKHtcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgaGVpZ2h0OiAyNSxcbiAgbGluZUhlaWdodDogJzI1cHgnLFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIG1hcmdpbjogJzJweCAxMHB4IDJweCA0MHB4JyxcbiAgb3BhY2l0eTogMC43NSxcbiAgZm9udFNpemU6IDE0LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJfTElHSFQsXG4gICAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgYWN0aXZlTGlua1N0eWxlcyA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiBgJHtQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJ9ICFpbXBvcnRhbnRgLFxuICBjb2xvcjogYCR7UEFMRVRURS5QUklNQVJZX01BSU59ICFpbXBvcnRhbnRgLFxuICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50J1xufVxuXG5jb25zdCBTaWRlYmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGxvY2F0aW9uLFxuICAgIG9yZ2FuaXphdGlvbnMsXG4gICAgb3JnTmFtZSA9ICdIdW1hbiBMYW1iZGFzJyxcbiAgICBzd2l0Y2hVc2VyT3JnLFxuICAgIGhhbmRsZU5ld09yZ2FuaXphdGlvblxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2VtYWlsLCBuYW1lLCBjdXJyZW50X29yZ2FuaXphdGlvbl9pZH0gPSB1c2VyXG4gIGNvbnN0IGlzTWV0cmljUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL21ldHJpY3MnKVxuICBjb25zdCB7bWVudVBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBvcmlnaW5SZWYsIG1lbnVQcm9wc30gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9MRUZULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZVxuICB9KVxuICBjb25zdCB7bW9kYWxQb3J0YWwsIHRvZ2dsZVBvcnRhbDogdG9nZ2xlTW9kYWxQb3J0YWwsIGNsb3NlUG9ydGFsOiBjbG9zZU1vZGFsUG9ydGFsfSA9IHVzZU1vZGFsKHt9KVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkUm9vdCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjR9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkNvbnRlbnRzLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2NX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjZ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QmxvY2ssIHsgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY3fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCcmFuZCwgeyByZWY6IG9yaWdpblJlZiwgYWN0aXZlOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY4fX1cbiAgICAgICAgICAgICAgLCBvcmdOYW1lLmNoYXJBdCgwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBhbnksIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcxfX0sIG9yZ05hbWUpXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3dEb3duU1ZHLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3Mn19IClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW1zLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3NH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xhc3NOYW1lcywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzV9fVxuICAgICAgICAgICAgICAsICh7Y3NzfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgICAgICwgaXNVc2VyU3RhZmYob3JnYW5pemF0aW9ucywgY3VycmVudF9vcmdhbml6YXRpb25faWQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9vdXRzdGFuZGluZy1xdWV1ZXNgLCBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChVc2Vyc0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTgyfX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTgzfX0sIFwiT3V0c3RhbmRpbmcgUXVldWVzXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAhdXNlci5pc19hZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9hdWRpdHNgLCBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4Nn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF1ZGl0c1NWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODd9fSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4OH19LCBcIkF1ZGl0c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgLCAhaXNVc2VyU3RhZmYob3JnYW5pemF0aW9ucywgY3VycmVudF9vcmdhbml6YXRpb25faWQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvcXVldWVzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTZ9fSApXG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk3fX0sIFwiUXVldWVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgdXNlci5pc19hZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZJdGVtLCB7IHRvOiBgL3VzZXJzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJzSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDJ9fSApXG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAzfX0sIFwiVXNlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLCB1c2VyLmlzX2FkbWluICYmIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9hdWRpdHNgLCBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdHNTVkcsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA5fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEwfX0sIFwiQXVkaXRzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9tZXRyaWNzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljc0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEzfX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE0fX0sIFwiTWV0cmljc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBpc01ldHJpY1JvdXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZTdWJJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBgL21ldHJpY3NgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERvdCwgeyBjb2xvcjogUEFMRVRURS5MSU5LLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjIzfX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjR9fSwgXCJPdmVydmlld1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2U3ViSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IGAvbWV0cmljcy9xdWV1ZXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjZ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERvdCwgeyBjb2xvcjogUEFMRVRURS5QUklNQVJZX0dSRUVOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMwfX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzF9fSwgXCJRdWV1ZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdlN1Ykl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBgL21ldHJpY3Mvd29ya2Vyc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG90LCB7IGNvbG9yOiBcIiNmZjRjNGNcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzN319IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM4fX0sIFwiV29ya2Vyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1MH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvc2V0dGluZ3MvcHJvZmlsZWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTF9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNldHRpbmdzU1ZHLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1Mn19IClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTN9fSwgXCJTZXR0aW5nc1wiKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBtZW51UG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcE1lbnUsIHtcbiAgICAgICAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbCxcbiAgICAgICAgICB0b2dnbGVNb2RhbFBvcnRhbDogdG9nZ2xlTW9kYWxQb3J0YWwsXG4gICAgICAgICAgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9ucyxcbiAgICAgICAgICBzd2l0Y2hVc2VyT3JnOiBzd2l0Y2hVc2VyT3JnLFxuICAgICAgICAgIG1lbnVQcm9wczogbWVudVByb3BzLFxuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1OH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbW9kYWxQb3J0YWwoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmV3T3JnTW9kYWwsIHsgY2xvc2VQb3J0YWw6IGNsb3NlTW9kYWxQb3J0YWwsIGhhbmRsZU5ld09yZ2FuaXphdGlvbjogaGFuZGxlTmV3T3JnYW5pemF0aW9uLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjcwfX0gKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNpZGViYXIpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvZGFzaGJvYXJkL0Rhc2hib2FyZFJvb3QudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbnRhaW5lcnMvRGFzaGJvYXJkJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHthZGRVc2VyfSBmcm9tICdjbGllbnQvcmVkdXgvY3VycmVudFVzZXJSZWR1Y2VyJ1xuaW1wb3J0IGlzVXNlclN0YWZmIGZyb20gJ2NsaWVudC91dGlscy9pc1VzZXJTdGFmZidcblxuXG5cblxuXG5cbmNvbnN0IERhc2hib2FyZFJvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2hpc3Rvcnl9ID0gcHJvcHNcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3Qge1xuICAgIGFjY2Vzc09iajoge3VzZXJfaWQ6IHVzZXJJZH1cbiAgfSA9IG5ldHdvcmtlciB8fCB7YWNjZXNzT2JqOiB7fX1cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogY3VycmVudE9yZ0lkfSA9IHVzZXIgfHwge31cbiAgY29uc3QgW29yZ2FuaXphdGlvbiwgc2V0T3JnXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbb3JnYW5pemF0aW9ucywgc2V0T3Jnc10gPSB1c2VTdGF0ZShbXSlcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJBbmRPcmdJbmZvKCkge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy8ke3VzZXJJZH1gLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgbGV0IGRhdGEsIGVycm9yc1xuXG4gICAgaWYgKHJlc3ApIHtcbiAgICAgIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgIGVycm9ycyA9IHJlc3AuZXJyb3JzXG4gICAgfVxuICAgIGNvbnN0IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZH0gPSBkYXRhIHx8IHt9XG4gICAgaWYgKGN1cnJlbnRPcmdJZCA9PT0gY3VycmVudF9vcmdhbml6YXRpb25faWQpIHJldHVyblxuICAgIGlmICghZXJyb3JzKSB7XG4gICAgICBpZiAoY3VycmVudF9vcmdhbml6YXRpb25faWQpIHtcbiAgICAgICAgY29uc3Qge2RhdGE6IG9yZ30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7ZGF0YS5jdXJyZW50X29yZ2FuaXphdGlvbl9pZH1gLCB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB7ZGF0YTogb3Jnc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgICBzZXRVc2VyKGRhdGEpXG4gICAgICAgIHNldE9yZyhvcmcpXG4gICAgICAgIHNldE9yZ3Mob3JncylcbiAgICAgICAgY29uc3QgaXNTdGFmZiA9IGlzVXNlclN0YWZmKG9yZ3MsIGRhdGEuY3VycmVudF9vcmdhbml6YXRpb25faWQpXG4gICAgICAgIHByb3BzLmFkZFVzZXIoey4uLmRhdGEsIGlzU3RhZmZ9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gb3JnYW5pemF0aW9uIElEIScpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9ycy5mb3JFYWNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUubWVzc2FnZSkpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFVzZXJBbmRPcmdJbmZvKClcbiAgfSwgW3VzZXJJZCwgdXNlcl0pXG5cbiAgY29uc3Qgc3dpdGNoVXNlck9yZyA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvJHt1c2VyLmlkfWAsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudF9vcmdhbml6YXRpb25faWQ6IGlkXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUEFUQ0gnXG4gICAgfSlcbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3JnYW5pemF0aW9uIGluZm9ybWF0aW9uIScsIEpTT04uc3RyaW5naWZ5KGVycm9ycykpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTmV3T3JnYW5pemF0aW9uID0gYXN5bmMgKG9yZ05hbWUpID0+IHtcbiAgICBpZiAoIW9yZ05hbWUpIHJldHVyblxuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHtpZDogbmV3T3JnSWR9XG4gICAgfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvY3JlYXRlYCwge1xuICAgICAgZGF0YTogb3JnTmFtZSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy8ke3VzZXIuaWR9YCwge1xuICAgICAgZGF0YToge1xuICAgICAgICBjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogbmV3T3JnSWRcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQQVRDSCdcbiAgICB9KVxuICAgIGhpc3RvcnkucHVzaCgnLycpXG4gIH1cblxuICBpZiAoIXVzZXIuaWQgJiYgIW9yZ2FuaXphdGlvbi5uYW1lKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChEYXNoYm9hcmQsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgdXNlcjogdXNlcixcbiAgICAgIG9yZ05hbWU6IG9yZ2FuaXphdGlvbi5uYW1lLFxuICAgICAgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9ucyxcbiAgICAgIHN3aXRjaFVzZXJPcmc6IHN3aXRjaFVzZXJPcmcsXG4gICAgICBoYW5kbGVOZXdPcmdhbml6YXRpb246IGhhbmRsZU5ld09yZ2FuaXphdGlvbiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkxfX1cbiAgICApXG4gIClcbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYWRkVXNlcjogKGFyZykgPT4gZGlzcGF0Y2goYWRkVXNlcihhcmcpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERhc2hib2FyZFJvb3QpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvZGFzaGJvYXJkL2NvbnRhaW5lcnMvRGFzaGJvYXJkLnRzeFwiO2ltcG9ydCBSZWFjdCwge2xhenl9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCBoYW5kbGVDaHVua0Vycm9yIGZyb20gJ3VuaXZlcnNhbC91dGlscy9oYW5kbGVDaHVua0Vycm9yJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IERhc2hMYXlvdXQgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICBoZWlnaHQ6ICcxMDAlJ1xufSlcblxuY29uc3QgRGFzaE1haW4gPSBzdHlsZWQoJ2RpdicpKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYmFja2dyb3VuZDogUEFMRVRURS5CQUNLR1JPVU5EX01BSU5cbn0pXG5cbmNvbnN0IFF1ZXVlc1Jvb3QgPSBsYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUXVldWVzUm9vdCcgKi8gJ2NsaWVudC9tb2R1bGVzL3F1ZXVlcy9RdWV1ZXNSb290JykuY2F0Y2goKGVycm9yKSA9PlxuICAgIGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpXG4gIClcbilcblxuY29uc3QgVXNlcnNSb290ID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ1VzZXJzUm9vdCcgKi8gJ2NsaWVudC9tb2R1bGVzL3VzZXJzL2NvbnRhaW5lcnMvVXNlcnNSb290J1xuICApLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5cbmNvbnN0IEF1ZGl0c1Jvb3QgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQXVkaXRzUm9vdCcgKi8gJ3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9BdWRpdHNSb290J1xuICApLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5cbmNvbnN0IE91dHN0YW5kaW5nUm9vdCA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdBdWRpdHNSb290JyAqLyAndW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvT3V0c3RhbmRpbmdSb290J1xuICApLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5cbmNvbnN0IE1ldHJpY3NSb290ID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ01ldHJpY3NSb290JyAqLyAnY2xpZW50L21vZHVsZXMvbWV0cmljcy9NZXRyaWNzUm9vdCdcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuXG5jb25zdCBOb3RGb3VuZCA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdOb3RGb3VuZCcgKi8gJ2NsaWVudC9jb21wb25lbnRzL05vdEZvdW5kJykuY2F0Y2goKGVycm9yKSA9PlxuICAgIGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpXG4gIClcbilcblxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIG9yZ05hbWUsXG4gICAgb3JnYW5pemF0aW9ucyxcbiAgICBoYW5kbGVOZXdPcmdhbml6YXRpb24sXG4gICAgc3dpdGNoVXNlck9yZyxcbiAgICBoaXN0b3J5OiB7bG9jYXRpb259LFxuICAgIGlzU3RhZmZcbiAgfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IGhpZGVTaWRlYmFyID0gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3Rhc2snKVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGFzaExheW91dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OX19XG4gICAgICAsICFoaWRlU2lkZWJhciAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwge1xuICAgICAgICAgIHN3aXRjaFVzZXJPcmc6IHN3aXRjaFVzZXJPcmcsXG4gICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICBvcmdOYW1lOiBvcmdOYW1lLFxuICAgICAgICAgIG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgaGFuZGxlTmV3T3JnYW5pemF0aW9uOiBoYW5kbGVOZXdPcmdhbml6YXRpb24sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEYXNoTWFpbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTB9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgICAgcGF0aDogXCIvb3V0c3RhbmRpbmctcXVldWVzXCIsXG4gICAgICAgICAgICByZW5kZXI6IChwKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc1N0YWZmKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChPdXRzdGFuZGluZ1Jvb3QsIHsgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk0fX0gKVxuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWRpcmVjdCwgeyB0bzogXCIvcXVldWVzXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NX19IClcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgICAgcGF0aDogXCIvcXVldWVzXCIsXG4gICAgICAgICAgICByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlc1Jvb3QsIHsgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9ucywgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMH19ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5OH19XG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiBcIi91c2Vyc1wiLCByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJzUm9vdCwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAyfX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19IClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvYXVkaXRzXCIsIHJlbmRlcjogKHApID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXRzUm9vdCwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwM319IClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvbWV0cmljc1wiLCByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY3NSb290LCB7IC4uLnAsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDR9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA0fX0gKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBjb21wb25lbnQ6IE5vdEZvdW5kLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA1fX0gKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgaXNTdGFmZjogc3RhdGUuY3VycmVudFVzZXIuaXNTdGFmZlxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKERhc2hib2FyZClcbiIsImltcG9ydCB7U1RBRkZfT1JHX0lEfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBpc1VzZXJTdGFmZiA9IChvcmdhbml6YXRpb25zLCBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCkgPT4ge1xuICBmb3IgKGNvbnN0IG9yZyBvZiBvcmdhbml6YXRpb25zKSB7XG4gICAgaWYgKG9yZy5pZCA9PT0gU1RBRkZfT1JHX0lEICYmIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkID09PSBTVEFGRl9PUkdfSUQpIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IGlzVXNlclN0YWZmXG4iXSwic291cmNlUm9vdCI6IiJ9