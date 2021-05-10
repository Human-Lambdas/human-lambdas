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
      console.error('Error fetching organization information!');
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
const AuditsRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | AuditsRoot */[__webpack_require__.e("vendors~AuditsRoot~Queue~TaskRoot"), __webpack_require__.e("AuditsRoot~TaskRoot"), __webpack_require__.e("AuditsRoot~UsersRoot"), __webpack_require__.e("AuditsRoot")]).then(__webpack_require__.bind(null, /*! universal/modules/audits/AuditsRoot */ "./src/universal/modules/audits/AuditsRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
const OutstandingRoot = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | AuditsRoot */[__webpack_require__.e("vendors~AuditsRoot~Queue~TaskRoot"), __webpack_require__.e("AuditsRoot~TaskRoot"), __webpack_require__.e("AuditsRoot~UsersRoot"), __webpack_require__.e("AuditsRoot")]).then(__webpack_require__.bind(null, /*! universal/modules/outstanding/OutstandingRoot */ "./src/universal/modules/outstanding/OutstandingRoot.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_6__["default"])(error)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQXBwTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0RvdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93RG93blNWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0F1ZGl0c1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0RvY3VtZW50YXRpb25TVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9NZXRyaWNzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvUXVldWVTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9TZXR0aW5nc1NWRy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1VzZXJzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTmV3T3JnTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZGFzaGJvYXJkL0Rhc2hib2FyZFJvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9EYXNoYm9hcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidW5kZWZpbmVkIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiQ29udGFpbmVyIiwiSGVhZEJsb2NrIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwidXNlclNlbGVjdCIsImN1cnNvciIsImJvcmRlckJvdHRvbSIsIlBBTEVUVEUiLCJCT1JERVJfR1JBWSIsIkFjdGlvbkJsb2NrIiwibWFyZ2luQm90dG9tIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJPcmdDb250YWluZXIiLCJQbGFpbkJ1dHRvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsIndpZHRoIiwiY29sb3IiLCJURVhUX0dSQVkiLCJPcmdOYW1lIiwiYWN0aXZlIiwidGV4dE92ZXJmbG93IiwiVEVYVF9NQUlOIiwiU3R5bGVkTmFtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIlN0eWxlZEVtYWlsIiwiTGFiZWwiLCJUZXh0IiwibWFyZ2luTGVmdCIsIlN0eWxlZEljb24iLCJJY29uIiwiQXBwTWVudSIsInByb3BzIiwidG9nZ2xlUG9ydGFsIiwic3dpdGNoVXNlck9yZyIsIm1lbnVQcm9wcyIsIm5hbWUiLCJlbWFpbCIsIm9yZ2FuaXphdGlvbnMiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsInRvZ2dsZU1vZGFsUG9ydGFsIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwibWFwIiwiaWQiLCJrZXkiLCJCcmFuZCIsIl8iLCJjaGFyQXQiLCJfMiIsIm9uQ2xpY2siLCJNZW51IiwiYXJpYUxhYmVsIiwiTWVudUl0ZW0iLCJsYWJlbCIsIkRvY3VtZW50YXRpb25TVkciLCJ3aW5kb3ciLCJvcGVuIiwicHVzaCIsIlN0eWxlZERvdCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiRG90IiwiQXJyb3dEb3duU1ZHIiwibWVtbyIsInZpZXdCb3giLCJ4bWxucyIsImZpbGwiLCJkIiwiVXNlcnNTVkciLCJNZXRyaWNTVkciLCJRdWV1ZVNWRyIsIlNldHRpbmdzU1ZHIiwiTW9kYWxSb290IiwiYm9yZGVyIiwiQk9SREVSX01BSU5fR1JBWSIsImJveFNoYWRvdyIsIkJveFNoYWRvdyIsIk1PREFMIiwiTWFpblRpdGxlIiwiRm9ybUNvbnRlbnQiLCJGb3JtIiwiQnV0dG9uU2VjdGlvbiIsIk5ld09yZ01vZGFsIiwiY2xvc2VQb3J0YWwiLCJoYW5kbGVOZXdPcmdhbml6YXRpb24iLCJvblN1Ym1pdEhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsInZhbHVlcyIsImFjdGlvbnMiLCJzZXRTdWJtaXR0aW5nIiwiRm9ybWlrIiwidmFsaWRhdGVPbkNoYW5nZSIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwib3JnYW5pemF0aW9uU2NoZW1hIiwib25TdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJoYW5kbGVDaGFuZ2UiLCJJbnB1dEZpZWxkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlNlY29uZGFyeUJ1dHRvbiIsInR5cGUiLCJQcmltYXJ5QnV0dG9uIiwiZGlzYWJsZWQiLCJTdHlsZWRSb290IiwicG9zaXRpb24iLCJCQUNLR1JPVU5EX01BSU4iLCJib3JkZXJSaWdodCIsIk5hdkNvbnRlbnRzIiwiTWVudUJsb2NrIiwidHJhbnNpdGlvbiIsIlBSSU1BUllfTUFJTl9MSUdIVEVTVCIsIlBSSU1BUllfTUFJTiIsIkZvb3RlciIsIlBSSU1BUllfTUFJTl9EQVJLIiwiQ29tcGFueSIsImxpbmVIZWlnaHQiLCJOYXZJdGVtcyIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwidGV4dERlY29yYXRpb24iLCJwYWRkaW5nTGVmdCIsIm9wYWNpdHkiLCJCQUNLR1JPVU5EX0hPVkVSX0xJR0hUIiwiTmF2U3ViSXRlbSIsImFjdGl2ZUxpbmtTdHlsZXMiLCJCQUNLR1JPVU5EX0hPVkVSIiwiU2lkZWJhciIsInVzZXIiLCJsb2NhdGlvbiIsIm9yZ05hbWUiLCJpc01ldHJpY1JvdXRlIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsIm1lbnVQb3J0YWwiLCJvcmlnaW5SZWYiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfTEVGVCIsImlzRHJvcGRvd24iLCJtb2RhbFBvcnRhbCIsImNsb3NlTW9kYWxQb3J0YWwiLCJ1c2VNb2RhbCIsInJlZiIsIkNsYXNzTmFtZXMiLCJjc3MiLCJGcmFnbWVudCIsImlzVXNlclN0YWZmIiwidG8iLCJhY3RpdmVDbGFzc05hbWUiLCJVc2Vyc0ljb24iLCJpc19hZG1pbiIsIkF1ZGl0c1NWRyIsIlF1ZXVlSWNvbiIsIk1ldHJpY3NJY29uIiwiZXhhY3QiLCJMSU5LIiwiUFJJTUFSWV9HUkVFTiIsIndpdGhSb3V0ZXIiLCJEYXNoYm9hcmRSb290IiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwiYWNjZXNzT2JqIiwidXNlcl9pZCIsInVzZXJJZCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRPcmdJZCIsIm9yZ2FuaXphdGlvbiIsInNldE9yZyIsInNldE9yZ3MiLCJmZXRjaFVzZXJBbmRPcmdJbmZvIiwicmVzcCIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwiZGF0YSIsImVycm9ycyIsIm9yZyIsIm9yZ3MiLCJpc1N0YWZmIiwiYWRkVXNlciIsImNvbnNvbGUiLCJlcnJvciIsImZvckVhY2giLCJlIiwibWVzc2FnZSIsInVzZUVmZmVjdCIsIm5ld09yZ0lkIiwiRGFzaGJvYXJkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhcmciLCJjb25uZWN0IiwiRGFzaExheW91dCIsIkRhc2hNYWluIiwiZmxleCIsImJhY2tncm91bmQiLCJRdWV1ZXNSb290IiwibGF6eSIsImNhdGNoIiwiaGFuZGxlQ2h1bmtFcnJvciIsIlVzZXJzUm9vdCIsIkF1ZGl0c1Jvb3QiLCJPdXRzdGFuZGluZ1Jvb3QiLCJNZXRyaWNzUm9vdCIsIk5vdEZvdW5kIiwiaGlkZVNpZGViYXIiLCJTd2l0Y2giLCJSb3V0ZSIsInBhdGgiLCJyZW5kZXIiLCJwIiwiUmVkaXJlY3QiLCJjb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiU1RBRkZfT1JHX0lEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHFFQUFyQjs7QUFBNEYsU0FBU0MsY0FBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFBRSxNQUFJQyxhQUFhLEdBQUdDLFNBQXBCO0FBQStCLE1BQUlDLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBZjtBQUFvQixNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFBVyxTQUFPQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBZixFQUF1QjtBQUFFLFVBQU1DLEVBQUUsR0FBR04sR0FBRyxDQUFDSSxDQUFELENBQWQ7QUFBbUIsVUFBTUcsRUFBRSxHQUFHUCxHQUFHLENBQUNJLENBQUMsR0FBRyxDQUFMLENBQWQ7QUFBdUJBLEtBQUMsSUFBSSxDQUFMOztBQUFRLFFBQUksQ0FBQ0UsRUFBRSxLQUFLLGdCQUFQLElBQTJCQSxFQUFFLEtBQUssY0FBbkMsS0FBc0RILEtBQUssSUFBSSxJQUFuRSxFQUF5RTtBQUFFLGFBQU9ELFNBQVA7QUFBbUI7O0FBQUMsUUFBSUksRUFBRSxLQUFLLFFBQVAsSUFBbUJBLEVBQUUsS0FBSyxnQkFBOUIsRUFBZ0Q7QUFBRUwsbUJBQWEsR0FBR0UsS0FBaEI7QUFBdUJBLFdBQUssR0FBR0ksRUFBRSxDQUFDSixLQUFELENBQVY7QUFBb0IsS0FBN0YsTUFBbUcsSUFBSUcsRUFBRSxLQUFLLE1BQVAsSUFBaUJBLEVBQUUsS0FBSyxjQUE1QixFQUE0QztBQUFFSCxXQUFLLEdBQUdJLEVBQUUsQ0FBQyxDQUFDLEdBQUdDLElBQUosS0FBYUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSLGFBQVgsRUFBMEIsR0FBR08sSUFBN0IsQ0FBZCxDQUFWO0FBQTZEUCxtQkFBYSxHQUFHQyxTQUFoQjtBQUE0QjtB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LE9BQUssTUFBTW9KLEdBQVgsSUFBa0JySixhQUFsQixFQUFpQztBQUMvQixRQUFJcUosR0FBRyxDQUFDekksRUFBSixLQUFXaUwsc0VBQVgsSUFBMkI1TCx1QkFBdUIsS0FBSzRMLHNFQUEzRCxFQUF5RSxPQUFPLElBQVA7QUFDMUU7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FORDs7QUFPZXRFLDBFQUFmLEUiLCJmaWxlIjoiRGFzaGJvYXJkUm9vdF9hNzhlNDkzMDY1MTdiMWQ0MTY2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9BcHBNZW51LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IERvY3VtZW50YXRpb25TVkcgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRG9jdW1lbnRhdGlvblNWRydcbmltcG9ydCBQbGFpbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtCcmFuZH0gZnJvbSAnLi9TaWRlYmFyJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHdpZHRoOiAyMjBcbn0pXG5cbmNvbnN0IEhlYWRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gXG59KVxuXG5jb25zdCBBY3Rpb25CbG9jayA9IHN0eWxlZC5kaXYoe1xuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIG1hcmdpbkJvdHRvbTogNSxcbiAgcGFkZGluZzogJzEwcHggMCcsXG4gIG1heEhlaWdodDogJzYwdmgnLFxuICBvdmVyZmxvdzogJ2F1dG8nXG59KVxuXG5jb25zdCBPcmdDb250YWluZXIgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgbWFyZ2luOiAwLFxuICB3aWR0aDogJ2F1dG8nLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZXG59KVxuXG5jb25zdCBPcmdOYW1lID0gc3R5bGVkLmRpdigoe2FjdGl2ZX0pID0+ICh7XG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBhZGRpbmc6IDAsXG4gIC4uLnRleHRPdmVyZmxvdyxcbiAgY29sb3I6IGFjdGl2ZSA/IFBBTEVUVEUuVEVYVF9NQUlOIDogJyM0ZDRkNGQnLFxuICAnOmhvdmVyJzoge1xuICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxuICB9XG59KSlcblxuY29uc3QgU3R5bGVkTmFtZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBtYXJnaW5Cb3R0b206IDIsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgU3R5bGVkRW1haWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEzLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcGFkZGluZzogJzVweCAxMHB4JyxcbiAgd2lkdGg6ICcxMDAlJ1xufSlcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIG1hcmdpbkxlZnQ6IDE1XG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNlxufSlcblxuY29uc3QgQXBwTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdG9nZ2xlUG9ydGFsLFxuICAgIHN3aXRjaFVzZXJPcmcsXG4gICAgbWVudVByb3BzLFxuICAgIG5hbWUsXG4gICAgZW1haWwsXG4gICAgb3JnYW5pemF0aW9ucyxcbiAgICBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCxcbiAgICB0b2dnbGVNb2RhbFBvcnRhbFxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTExfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZE5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEzfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFbWFpbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTR9fSwgZW1haWwpXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE2fX1cbiAgICAgICAgLCBvcmdhbml6YXRpb25zLm1hcCgoe25hbWUsIGlkfSkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3JnQ29udGFpbmVyLCB7IGtleTogaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJyYW5kLCB7IGFjdGl2ZTogaWQgPT09IGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE5fX0sIF9vcHRpb25hbENoYWluKFtuYW1lLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uY2hhckF0LCAnY2FsbCcsIF8yID0+IF8yKDApXSkpXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3JnTmFtZSwge1xuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUG9ydGFsKClcbiAgICAgICAgICAgICAgICBzd2l0Y2hVc2VyT3JnKGlkKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhY3RpdmU6IGlkID09PSBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMH19XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLCBuYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGlvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0RvY3VtZW50YXRpb24nLCAuLi5tZW51UHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzN9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzNn19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM3fX0sIFwiYWRkXCIpXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM4fX0sIFwiQWRkIG9yZ2FuaXphdGlvblwiIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICB0b2dnbGVNb2RhbFBvcnRhbCgpXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM0fX1cbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ3fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnRhdGlvblNWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDh9fSApXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ5fX0sIFwiRG9jdW1lbnRhdGlvblwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB3aW5kb3cub3BlbignaHR0cHM6Ly9kb2NzLmh1bWFubGFtYmRhcy5jb20vJywgJ19ibGFuaycpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ1fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ1VzZXIgbWVudScsIC4uLm1lbnVQcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1Nn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIGxhYmVsOiBcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX0sIFwiZXhpdF90b19hcHBcIilcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYxfX0sIFwiU2lnbiBvdXRcIiApXG4gICAgICAgICAgICApXG4gICAgICAgICAgLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IGhpc3RvcnkucHVzaCgnL3NpZ25vdXQnKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1N319XG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0RvdC50c3hcIjtpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5cblxuXG5cbmNvbnN0IFN0eWxlZERvdCA9IHN0eWxlZC5kaXYoKHtjb2xvcn0pID0+ICh7XG4gIGhlaWdodDogMTAsXG4gIHdpZHRoOiAxMCxcbiAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgbWFyZ2luUmlnaHQ6IDEwXG59KSlcblxuY29uc3QgRG90ID0gUmVhY3QubWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2NvbG9yfSA9IHByb3BzXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZERvdCwgeyBjb2xvcjogY29sb3IsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOH19IClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IERvdFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93RG93blNWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEFycm93RG93blNWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxM1wiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxM1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTQwMCAyMTZhMjMuOTI4IDIzLjkyOCAwIDAxLTE2Ljk3MS03LjAyOUwyNTYgODEuOTQxbC0xMjcuMDI5IDEyNy4wM2EyNCAyNCAwIDAxLTMzLjk0Mi0zMy45NDJsMTQ0LTE0NGEyNCAyNCAwIDAxMzMuOTQyIDBsMTQ0IDE0NEEyNCAyNCAwIDAxNDAwIDIxNnpNMjcyLjk3MSA0ODAuOTcxbDE0NC0xNDRhMjQgMjQgMCAwMC0zMy45NDItMzMuOTQyTDI1NiA0MzAuMDU5bC0xMjcuMDI5LTEyNy4wM2EyNCAyNCAwIDAwLTMzLjk0MiAzMy45NDJsMTQ0IDE0NGEyNCAyNCAwIDAwMzMuOTQyIDB6XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dEb3duU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXVkaXRzU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgVXNlcnNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTVcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTdcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0zMjUuNSA0MGgtNzUuNDI2Yy04LjI1OC0yMy4yODEtMzAuNS00MC01Ni41NzQtNDBzLTQ4LjMxNiAxNi43MTktNTYuNTc0IDQwSDYwLjVjLTMzLjA4NiAwLTYwIDI2LjkxNC02MCA2MHYzNTJjMCAzMy4wODYgMjYuOTE0IDYwIDYwIDYwaDI2NS4wNjNjMzMuMDUtLjAzNSA1OS45MzctMjYuOTUgNTkuOTM3LTYwVjEwMGMwLTMzLjA4Ni0yNi45MTQtNjAtNjAtNjB6bS0xNTIgNDBWNjBjMC0xMS4wMjcgOC45NzMtMjAgMjAtMjBzMjAgOC45NzMgMjAgMjB2MjBoNDB2MzloLTEyMFY4MHptMTcyIDM3MmMwIDExLjAxNi04Ljk2NSAxOS45ODgtMTkuOTU3IDIwSDYwLjVjLTExLjAyNyAwLTIwLTguOTczLTIwLTIwVjEwMGMwLTExLjAyNyA4Ljk3My0yMCAyMC0yMGgzM3Y3OWgyMDBWODBoMzJjMTEuMDI3IDAgMjAgOC45NzMgMjAgMjB6bS03NS43OTMtMjIxLjk2bDI5LjU4MiAyNi45MkwxNzEuMiAzOTcuNzFsLTg0LjYwNS04MS44MzUgMjcuODEyLTI4Ljc1IDU0Ljk2NSA1My4xNjR6bTAgMFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9Eb2N1bWVudGF0aW9uU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgRG9jdW1lbnRhdGlvblNWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTQ4NC4zMzMgMjU2YzAtMTkuNzMtMi41MTUtMzkuMjQ4LTcuNDg0LTU4LjE2MmwyOC45LTIxLjI2MS01Ni4wOTMtOTcuMTU1LTMyLjkxMyAxNC40MmMtMjguMTM4LTI3LjkzOC02Mi41OTQtNDcuODQ3LTEwMC42ODktNTguMThMMzEyLjA5MyAwSDE5OS45MDdsLTMuOTYyIDM1LjY2MmMtMzguMDk2IDEwLjMzMy03Mi41NTEgMzAuMjQyLTEwMC42ODkgNTguMThsLTMyLjkxMi0xNC40Mi01Ni4wOTMgOTcuMTU1IDI4LjkgMjEuMjYxYy00Ljk3IDE4LjkxNC03LjQ4NCAzOC40MzItNy40ODQgNTguMTYyczIuNTE1IDM5LjI0OCA3LjQ4NCA1OC4xNjJsLTI4LjkgMjEuMjYgNTYuMDkzIDk3LjE1NSAzMi45MTItMTQuNDJjMjguMTM5IDI3LjkzOSA2Mi41OTQgNDcuODQ4IDEwMC42ODkgNTguMThMMTk5LjkwNyA1MTJoMTEyLjE4NmwzLjk2Mi0zNS42NjNjMzguMDk2LTEwLjMzMiA3Mi41NTEtMzAuMjQyIDEwMC42ODktNTguMThsMzIuOTEyIDE0LjQyIDU2LjA5My05Ny4xNTUtMjguOS0yMS4yNmM0Ljk2OS0xOC45MTQgNy40ODQtMzguNDMyIDcuNDg0LTU4LjE2MnpNMjk5LjA2MSA0NDkuNjMzbC0xMC40ODEgMi4zMkwyODUuMjQxIDQ4MmgtNTguNDgybC0zLjMzOS0zMC4wNDctMTAuNDgxLTIuMzJjLTM5LjczOS04Ljc5NS03NS4zODItMjkuMzg5LTEwMy4wNzQtNTkuNTU1bC03LjI1LTcuODk4LTI3LjcxNiAxMi4xNDMtMjkuMjQxLTUwLjY0NyAyNC4zMjUtMTcuODk0LTMuMjE2LTEwLjIyOGMtNi4wMzgtMTkuMjA3LTkuMS0zOS4yNDQtOS4xLTU5LjU1NCAwLTIwLjMxMSAzLjA2Mi00MC4zNDggOS4xLTU5LjU1NGwzLjIxNi0xMC4yMjgtMjQuMzI1LTE3Ljg5NCAyOS4yNDEtNTAuNjQ3IDI3LjcxNiAxMi4xNDMgNy4yNS03Ljg5OGMyNy42OTItMzAuMTY2IDYzLjMzNS01MC43NiAxMDMuMDc0LTU5LjU1NWwxMC40ODEtMi4zMkwyMjYuNzU5IDMwaDU4LjQ4MmwzLjMzOSAzMC4wNDcgMTAuNDgxIDIuMzJjMzkuNzM5IDguNzk2IDc1LjM4MiAyOS4zOSAxMDMuMDc0IDU5LjU1NWw3LjI1IDcuODk4IDI3LjcxNi0xMi4xNDMgMjkuMjQxIDUwLjY0Ny0yNC4zMjUgMTcuODk0IDMuMjE2IDEwLjIyOGM2LjAzOCAxOS4yMDcgOS4xIDM5LjI0NCA5LjEgNTkuNTU0cy0zLjA2MSA0MC4zNDctOS4xIDU5LjU1NGwtMy4yMTYgMTAuMjI4IDI0LjMyNSAxNy44OTQtMjkuMjQxIDUwLjY0Ny0yNy43MTYtMTIuMTQzLTcuMjUgNy44OThjLTI3LjY5MiAzMC4xNjYtNjMuMzM0IDUwLjc2LTEwMy4wNzQgNTkuNTU1elwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMTk2LjQ0OCAyMjEuNjZsLTIxLjQzMy0yMC45OS01NC44NjMgNTYuMDE5IDU2LjAyIDU0Ljg2MyAyMC45OS0yMS40MzQtMzQuNTg2LTMzLjg3MnpNMzE1LjU1MiAyMjEuNjZsMzMuODcyIDM0LjU4Ni0zNC41ODYgMzMuODcyIDIwLjk5IDIxLjQzNCA1Ni4wMi01NC44NjMtNTQuODYzLTU2LjAxOXpNMjIwLjA5NyAzNTQuMTc2bDQyLjY2NC0yMDIuNzYgMjkuMzcxIDYuMTgtNDIuNjY0IDIwMi43NnpcIiAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRhdGlvblNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL01ldHJpY3NTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBNZXRyaWNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTVcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0yOTguNjY3IDg1LjMzM2w0OC45NiA0OC45Ni0xMDQuMTA3IDEwNC04NS4zMzMtODUuMzMzTDAgMzExLjE0N2wzMC4xODcgMzAuMTg2IDEyOC0xMjggODUuMzMzIDg1LjMzNCAxMzQuMTg3LTEzNC4yOTQgNDguOTYgNDguOTZ2LTEyOHpcIiAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9RdWV1ZVNWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFF1ZXVlU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjE1XCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjE1XCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB2aWV3Qm94OiBcIjAgMCA0MjYuNjY3IDQyNi42NjdcIiAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0zNDEuMzMzIDUzLjMzM0wyNTYgMTM4LjY2N2g2NFYyODhjMCAyMy41NzMtMTkuMDkzIDQyLjY2Ny00Mi42NjcgNDIuNjY3LTIzLjU3MyAwLTQyLjY2Ny0xOS4wOTMtNDIuNjY3LTQyLjY2N1YxMzguNjY3YzAtNDcuMDQtMzguMjkzLTg1LjMzMy04NS4zMzMtODUuMzMzUzY0IDkxLjYyNyA2NCAxMzguNjY3VjI4OEgwbDg1LjMzMyA4NS4zMzNMMTcwLjY2NyAyODhoLTY0VjEzOC42NjdjMC0yMy41NzMgMTkuMDkzLTQyLjY2NyA0Mi42NjctNDIuNjY3UzE5MiAxMTUuMDkzIDE5MiAxMzguNjY3VjI4OGMwIDQ3LjA0IDM4LjI5MyA4NS4zMzMgODUuMzMzIDg1LjMzM1MzNjIuNjY2IDMzNS4wNCAzNjIuNjY2IDI4OFYxMzguNjY3aDY0bC04NS4zMzMtODUuMzM0elwiICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTR9fSApXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZVNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL1NldHRpbmdzU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU2V0dGluZ3NTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTVcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0yNzIuMDY2IDUxMmgtMzIuMTMzYy0yNS45ODkgMC00Ny4xMzQtMjEuMTQ0LTQ3LjEzNC00Ny4xMzN2LTEwLjg3MWEyMDYuNjk4IDIwNi42OTggMCAwMS0zMi4wOTctMTMuMzIzbC03LjcwNCA3LjcwNGMtMTguNjU5IDE4LjY4Mi00OC41NDggMTguMTM0LTY2LjY2NS0uMDA3bC0yMi43MTEtMjIuNzFjLTE4LjE0OS0xOC4xMjktMTguNjcxLTQ4LjAwOC4wMDYtNjYuNjY1bDcuNjk4LTcuNjk4QTIwNi43MTQgMjA2LjcxNCAwIDAxNTguMDAzIDMxOS4yaC0xMC44N0MyMS4xNDUgMzE5LjIgMCAyOTguMDU2IDAgMjcyLjA2N3YtMzIuMTM0QzAgMjEzLjk0NCAyMS4xNDUgMTkyLjggNDcuMTM0IDE5Mi44aDEwLjg3YTIwNi43NTUgMjA2Ljc1NSAwIDAxMTMuMzIzLTMyLjA5N0w2My42MjMgMTUzYy0xOC42NjYtMTguNjQ2LTE4LjE1MS00OC41MjguMDA2LTY2LjY2NWwyMi43MTMtMjIuNzEyYzE4LjE1OS0xOC4xODQgNDguMDQxLTE4LjYzOCA2Ni42NjQuMDA2bDcuNjk3IDcuNjk3QTIwNi44OTMgMjA2Ljg5MyAwIDAxMTkyLjggNTguMDAzdi0xMC44N0MxOTIuOCAyMS4xNDQgMjEzLjk0NCAwIDIzOS45MzQgMGgzMi4xMzNDMjk4LjA1NiAwIDMxOS4yIDIxLjE0NCAzMTkuMiA0Ny4xMzN2MTAuODcxYTIwNi42OTggMjA2LjY5OCAwIDAxMzIuMDk3IDEzLjMyM2w3LjcwNC03LjcwNGMxOC42NTktMTguNjgyIDQ4LjU0OC0xOC4xMzQgNjYuNjY1LjAwN2wyMi43MTEgMjIuNzFjMTguMTQ5IDE4LjEyOSAxOC42NzEgNDguMDA4LS4wMDYgNjYuNjY1bC03LjY5OCA3LjY5OGEyMDYuNzE0IDIwNi43MTQgMCAwMTEzLjMyMyAzMi4wOTdoMTAuODdjMjUuOTg5IDAgNDcuMTM0IDIxLjE0NCA0Ny4xMzQgNDcuMTMzdjMyLjEzNGMwIDI1Ljk4OS0yMS4xNDUgNDcuMTMzLTQ3LjEzNCA0Ny4xMzNoLTEwLjg3YTIwNi43NTUgMjA2Ljc1NSAwIDAxLTEzLjMyMyAzMi4wOTdsNy43MDQgNy43MDRjMTguNjY2IDE4LjY0NiAxOC4xNTEgNDguNTI4LS4wMDYgNjYuNjY1bC0yMi43MTMgMjIuNzEyYy0xOC4xNTkgMTguMTg0LTQ4LjA0MSAxOC42MzgtNjYuNjY0LS4wMDZsLTcuNjk3LTcuNjk3YTIwNi44OTMgMjA2Ljg5MyAwIDAxLTMyLjA5NyAxMy4zMjN2MTAuODcxYzAgMjUuOTg3LTIxLjE0NCA0Ny4xMzEtNDcuMTM0IDQ3LjEzMXpNMTY1LjcxNyA0MDkuMTdhMTc2LjgxMiAxNzYuODEyIDAgMDA0NS44MzEgMTkuMDI1IDE0Ljk5OSAxNC45OTkgMCAwMTExLjI1MiAxNC41MjR2MjIuMTQ4YzAgOS40NDcgNy42ODcgMTcuMTMzIDE3LjEzNCAxNy4xMzNoMzIuMTMzYzkuNDQ3IDAgMTcuMTM0LTcuNjg2IDE3LjEzNC0xNy4xMzN2LTIyLjE0OGExNC45OTkgMTQuOTk5IDAgMDExMS4yNTItMTQuNTI0IDE3Ni44MTIgMTc2LjgxMiAwIDAwNDUuODMxLTE5LjAyNSAxNSAxNSAwIDAxMTguMjQzIDIuMzA1bDE1LjY4OCAxNS42ODljNi43NjQgNi43NzIgMTcuNjI2IDYuNjE1IDI0LjIyNC4wMDdsMjIuNzI3LTIyLjcyNmM2LjU4Mi02LjU3NCA2LjgwMi0xNy40MzguMDA2LTI0LjIyNWwtMTUuNjk1LTE1LjY5NWExNSAxNSAwIDAxLTIuMzA1LTE4LjI0MiAxNzYuNzggMTc2Ljc4IDAgMDAxOS4wMjQtNDUuODMxIDE1IDE1IDAgMDExNC41MjQtMTEuMjUxaDIyLjE0N2M5LjQ0NyAwIDE3LjEzNC03LjY4NiAxNy4xMzQtMTcuMTMzdi0zMi4xMzRjMC05LjQ0Ny03LjY4Ny0xNy4xMzMtMTcuMTM0LTE3LjEzM0g0NDIuNzJhMTUgMTUgMCAwMS0xNC41MjQtMTEuMjUxIDE3Ni44MTUgMTc2LjgxNSAwIDAwLTE5LjAyNC00NS44MzEgMTUgMTUgMCAwMTIuMzA1LTE4LjI0MmwxNS42ODktMTUuNjg5YzYuNzgyLTYuNzc0IDYuNjA1LTE3LjYzNC4wMDYtMjQuMjI1bC0yMi43MjUtMjIuNzI1Yy02LjU4Ny02LjU5Ni0xNy40NTEtNi43ODktMjQuMjI1LS4wMDZsLTE1LjY5NCAxNS42OTVhMTUgMTUgMCAwMS0xOC4yNDMgMi4zMDUgMTc2LjgxMiAxNzYuODEyIDAgMDAtNDUuODMxLTE5LjAyNSAxNC45OTkgMTQuOTk5IDAgMDEtMTEuMjUyLTE0LjUyNHYtMjIuMTVjMC05LjQ0Ny03LjY4Ny0xNy4xMzMtMTcuMTM0LTE3LjEzM2gtMzIuMTMzYy05LjQ0NyAwLTE3LjEzNCA3LjY4Ni0xNy4xMzQgMTcuMTMzdjIyLjE0OGExNC45OTkgMTQuOTk5IDAgMDEtMTEuMjUyIDE0LjUyNCAxNzYuODEyIDE3Ni44MTIgMCAwMC00NS44MzEgMTkuMDI1IDE1LjAwMiAxNS4wMDIgMCAwMS0xOC4yNDMtMi4zMDVsLTE1LjY4OC0xNS42ODljLTYuNzY0LTYuNzcyLTE3LjYyNy02LjYxNS0yNC4yMjQtLjAwN2wtMjIuNzI3IDIyLjcyNmMtNi41ODIgNi41NzQtNi44MDIgMTcuNDM3LS4wMDYgMjQuMjI1bDE1LjY5NSAxNS42OTVhMTUgMTUgMCAwMTIuMzA1IDE4LjI0MiAxNzYuNzggMTc2Ljc4IDAgMDAtMTkuMDI0IDQ1LjgzMSAxNSAxNSAwIDAxLTE0LjUyNCAxMS4yNTFINDcuMTM0QzM3LjY4NyAyMjIuOCAzMCAyMzAuNDg2IDMwIDIzOS45MzN2MzIuMTM0YzAgOS40NDcgNy42ODcgMTcuMTMzIDE3LjEzNCAxNy4xMzNoMjIuMTQ3YTE1IDE1IDAgMDExNC41MjQgMTEuMjUxIDE3Ni44MTUgMTc2LjgxNSAwIDAwMTkuMDI0IDQ1LjgzMSAxNSAxNSAwIDAxLTIuMzA1IDE4LjI0MmwtMTUuNjg5IDE1LjY4OWMtNi43ODIgNi43NzQtNi42MDUgMTcuNjM0LS4wMDYgMjQuMjI1bDIyLjcyNSAyMi43MjVjNi41ODcgNi41OTYgMTcuNDUxIDYuNzg5IDI0LjIyNS4wMDZsMTUuNjk0LTE1LjY5NWMzLjU2OC0zLjU2NyAxMC45OTEtNi41OTQgMTguMjQ0LTIuMzA0elwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTI1NiAzNjcuNGMtNjEuNDI3IDAtMTExLjQtNDkuOTc0LTExMS40LTExMS40UzE5NC41NzMgMTQ0LjYgMjU2IDE0NC42IDM2Ny40IDE5NC41NzQgMzY3LjQgMjU2IDMxNy40MjcgMzY3LjQgMjU2IDM2Ny40em0wLTE5Mi44Yy00NC44ODUgMC04MS40IDM2LjUxNi04MS40IDgxLjRzMzYuNTE2IDgxLjQgODEuNCA4MS40IDgxLjQtMzYuNTE2IDgxLjQtODEuNC0zNi41MTUtODEuNC04MS40LTgxLjR6XCIgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvVXNlcnNTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBVc2Vyc1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxN1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTIxMC4zNTIgMjQ2LjYzM2MzMy44ODIgMCA2My4yMTgtMTIuMTUzIDg3LjE5NS0zNi4xMyAyMy45NjktMjMuOTcyIDM2LjEyNS01My4zMDQgMzYuMTI1LTg3LjE5IDAtMzMuODc2LTEyLjE1Mi02My4yMTEtMzYuMTI5LTg3LjE5MkMyNzMuNTY2IDEyLjE1MiAyNDQuMjMgMCAyMTAuMzUyIDBjLTMzLjg4NyAwLTYzLjIyIDEyLjE1Mi04Ny4xOTIgMzYuMTI1cy0zNi4xMjkgNTMuMzA5LTM2LjEyOSA4Ny4xODhjMCAzMy44ODYgMTIuMTU2IDYzLjIyMiAzNi4xMyA4Ny4xOTUgMjMuOTggMjMuOTY5IDUzLjMxNiAzNi4xMjUgODcuMTkgMzYuMTI1ek0xNDQuMzc5IDU3LjM0YzE4LjM5NC0xOC4zOTUgMzkuOTczLTI3LjMzNiA2NS45NzMtMjcuMzM2IDI1Ljk5NiAwIDQ3LjU3OCA4Ljk0MSA2NS45NzYgMjcuMzM2IDE4LjM5NSAxOC4zOTggMjcuMzQgMzkuOTggMjcuMzQgNjUuOTcyIDAgMjYtOC45NDUgNDcuNTc5LTI3LjM0IDY1Ljk3Ny0xOC4zOTggMTguMzk5LTM5Ljk4IDI3LjM0LTY1Ljk3NiAyNy4zNC0yNS45OTMgMC00Ny41Ny04Ljk0NS02NS45NzMtMjcuMzQtMTguMzk5LTE4LjM5NC0yNy4zNDQtMzkuOTc2LTI3LjM0NC02NS45NzYgMC0yNS45OTMgOC45NDUtNDcuNTc1IDI3LjM0NC02NS45NzN6bTAgME00MjYuMTI5IDM5My43MDNjLS42OTItOS45NzYtMi4wOS0yMC44Ni00LjE0OS0zMi4zNTEtMi4wNzgtMTEuNTc5LTQuNzUzLTIyLjUyNC03Ljk1Ny0zMi41MjgtMy4zMTItMTAuMzQtNy44MDgtMjAuNTUtMTMuMzc1LTMwLjMzNi01Ljc3LTEwLjE1Ni0xMi41NS0xOS0yMC4xNi0yNi4yNzctNy45NTctNy42MTMtMTcuNjk5LTEzLjczNC0yOC45NjUtMTguMi0xMS4yMjYtNC40NC0yMy42NjgtNi42OS0zNi45NzYtNi42OS01LjIyNyAwLTEwLjI4MSAyLjE0NC0yMC4wNDMgOC41YTI3MTEuMDMgMjcxMS4wMyAwIDAxLTIwLjg3OSAxMy40NmMtNi43MDcgNC4yNzQtMTUuNzkzIDguMjc4LTI3LjAxNiAxMS45MDMtMTAuOTQ5IDMuNTQzLTIyLjA2NiA1LjM0LTMzLjA0MyA1LjM0LTEwLjk2OCAwLTIyLjA4Ni0xLjc5Ny0zMy4wNDMtNS4zNC0xMS4yMS0zLjYyMi0yMC4zLTcuNjI1LTI2Ljk5Ni0xMS44OTktNy43Ny00Ljk2NS0xNC44LTkuNDk2LTIwLjg5OC0xMy40NjktOS43NTQtNi4zNTUtMTQuODA5LTguNS0yMC4wMzUtOC41LTEzLjMxMyAwLTI1Ljc1IDIuMjU0LTM2Ljk3MyA2LjctMTEuMjU4IDQuNDU3LTIxLjAwNCAxMC41NzgtMjguOTY5IDE4LjE5OS03LjYwOSA3LjI4MS0xNC4zOSAxNi4xMi0yMC4xNTYgMjYuMjczLTUuNTU4IDkuNzg1LTEwLjA1OCAxOS45OTItMTMuMzcxIDMwLjM0LTMuMiAxMC4wMDQtNS44NzUgMjAuOTQ1LTcuOTUzIDMyLjUyNC0yLjA2MyAxMS40NzYtMy40NTcgMjIuMzYzLTQuMTQ5IDMyLjM2M0MuMzQzIDQwMy40OTIgMCA0MTMuNjY4IDAgNDIzLjk0OWMwIDI2LjcyNyA4LjQ5NiA0OC4zNjMgMjUuMjUgNjQuMzJDNDEuNzk3IDUwNC4wMTcgNjMuNjg4IDUxMiA5MC4zMTYgNTEyaDI0Ni41MzJjMjYuNjIgMCA0OC41MTEtNy45ODQgNjUuMDYyLTIzLjczIDE2Ljc1OC0xNS45NDYgMjUuMjU0LTM3LjU5IDI1LjI1NC02NC4zMjUtLjAwNC0xMC4zMTYtLjM1MS0yMC40OTItMS4wMzUtMzAuMjQyem0tNDQuOTA2IDcyLjgyOGMtMTAuOTM0IDEwLjQwNi0yNS40NSAxNS40NjUtNDQuMzggMTUuNDY1SDkwLjMxN2MtMTguOTMzIDAtMzMuNDQ5LTUuMDU5LTQ0LjM3OS0xNS40Ni0xMC43MjItMTAuMjA4LTE1LjkzMy0yNC4xNDEtMTUuOTMzLTQyLjU4NyAwLTkuNTk0LjMxNi0xOS4wNjYuOTUtMjguMTYuNjE2LTguOTIyIDEuODc4LTE4LjcyMyAzLjc1LTI5LjEzNyAxLjg0Ny0xMC4yODUgNC4xOTgtMTkuOTM3IDYuOTk1LTI4LjY3NSAyLjY4NC04LjM4IDYuMzQ0LTE2LjY3NiAxMC44ODMtMjQuNjY4IDQuMzMyLTcuNjE4IDkuMzE2LTE0LjE1MyAxNC44MTYtMTkuNDE4IDUuMTQ1LTQuOTI2IDExLjYzLTguOTU3IDE5LjI3LTExLjk4IDcuMDY2LTIuNzk4IDE1LjAwOC00LjMyOSAyMy42MjktNC41NiAxLjA1LjU2IDIuOTIyIDEuNjI2IDUuOTUzIDMuNjAyIDYuMTY4IDQuMDIgMTMuMjc3IDguNjA2IDIxLjEzNyAxMy42MjUgOC44NiA1LjY0OSAyMC4yNzMgMTAuNzUgMzMuOTEgMTUuMTUyIDEzLjk0MSA0LjUwOCAyOC4xNiA2Ljc5NyA0Mi4yNzMgNi43OTcgMTQuMTE0IDAgMjguMzM2LTIuMjg5IDQyLjI3LTYuNzkzIDEzLjY0OC00LjQxIDI1LjA1OC05LjUwNyAzMy45My0xNS4xNjQgOC4wNDMtNS4xNCAxNC45NTMtOS41OTMgMjEuMTItMTMuNjE3IDMuMDMyLTEuOTczIDQuOTAzLTMuMDQzIDUuOTU0LTMuNjAxIDguNjI1LjIzIDE2LjU2NiAxLjc2MSAyMy42MzYgNC41NTggNy42MzcgMy4wMjQgMTQuMTIyIDcuMDU5IDE5LjI2NiAxMS45OCA1LjUgNS4yNjIgMTAuNDg0IDExLjc5OCAxNC44MTYgMTkuNDIzIDQuNTQzIDcuOTg4IDguMjA4IDE2LjI4OSAxMC44ODcgMjQuNjYgMi44MDEgOC43NSA1LjE1NiAxOC4zOTggNyAyOC42NzUgMS44NjcgMTAuNDM0IDMuMTMzIDIwLjIzOSAzLjc1IDI5LjE0NXYuMDA4Yy42MzcgOS4wNTguOTU3IDE4LjUyNy45NjEgMjguMTQ4LS4wMDQgMTguNDUtNS4yMTUgMzIuMzgtMTUuOTM3IDQyLjU4MnptMCAwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1NWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL05ld09yZ01vZGFsLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7b3JnYW5pemF0aW9uU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtCb3hTaGFkb3d9IGZyb20gJ2NsaWVudC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5cblxuXG5cblxuXG5jb25zdCBNb2RhbFJvb3QgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgd2lkdGg6IDUwMCxcbiAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaGFkb3c6IEJveFNoYWRvdy5NT0RBTFxufSlcblxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAyMixcbiAgZm9udFdlaWdodDogNjAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5Cb3R0b206IDM1XG59KVxuXG5jb25zdCBGb3JtQ29udGVudCA9IHN0eWxlZChGb3JtKSh7XG4gIHBhZGRpbmc6ICc1MHB4IDUwcHggMzBweCdcbn0pXG5cbmNvbnN0IEJ1dHRvblNlY3Rpb24gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDIsIGF1dG8pJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZ1RvcDogJzI1cHgnXG59KVxuXG5jb25zdCBOZXdPcmdNb2RhbCA9ICh7Y2xvc2VQb3J0YWwsIGhhbmRsZU5ld09yZ2FuaXphdGlvbn0pID0+IHtcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgaGFuZGxlTmV3T3JnYW5pemF0aW9uKHZhbHVlcylcbiAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZygpXG4gICAgICBjbG9zZVBvcnRhbCgpXG4gICAgfSxcbiAgICBbY2xvc2VQb3J0YWwsIGhhbmRsZU5ld09yZ2FuaXphdGlvbl1cbiAgKVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWssIHtcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge25hbWU6ICcnfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogb3JnYW5pemF0aW9uU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogb25TdWJtaXRIYW5kbGVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTZ9fVxuICAgICAgXG4gICAgICAgICwgKHtpc1N1Ym1pdHRpbmcsIHZhbHVlcywgaGFuZGxlQ2hhbmdlfSkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRlbnQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW5UaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19LCBcIkFkZCBuZXcgb3JnYW5pemF0aW9uXCIgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIG9yZ2FuaXphdGlvbiBuYW1lXCIgICxcbiAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMubmFtZSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25TZWN0aW9uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcxfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBjbG9zZVBvcnRhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX0sIFwiQ2FuY2VsXCJcblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQcmltYXJ5QnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3NX19LCBcIkNyZWF0ZVwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdPcmdNb2RhbFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1NpZGViYXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0NsYXNzTmFtZXN9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQge05hdkxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9oZWxwZXJzL3RleHRPdmVyZmxvdydcblxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFF1ZXVlSWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9RdWV1ZVNWRydcbmltcG9ydCBVc2Vyc0ljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvVXNlcnNTVkcnXG5pbXBvcnQgTWV0cmljc0ljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvTWV0cmljc1NWRydcbmltcG9ydCBTZXR0aW5nc1NWRyBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9TZXR0aW5nc1NWRydcbmltcG9ydCBBdWRpdHNTVkcgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXVkaXRzU1ZHJ1xuaW1wb3J0IHVzZU1lbnUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQgQXBwTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9BcHBNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQgQXJyb3dEb3duU1ZHIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93RG93blNWRydcbmltcG9ydCBEb3QgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvRG90J1xuaW1wb3J0IHVzZU1vZGFsIGZyb20gJ2NsaWVudC9ob29rcy91c2VNb2RhbCdcbmltcG9ydCBOZXdPcmdNb2RhbCBmcm9tICdjbGllbnQvY29tcG9uZW50cy9OZXdPcmdNb2RhbCdcbmltcG9ydCBpc1VzZXJTdGFmZiBmcm9tICdjbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYnXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZFJvb3QgPSBzdHlsZWQuZGl2KHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX01BSU4sXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHVzZXJTZWxlY3Q6ICdub25lJ1xufSlcblxuY29uc3QgTmF2Q29udGVudHMgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHBhZGRpbmc6IDAsXG4gIHdpZHRoOiAyNTAsXG4gIG92ZXJmbG93WTogJ2F1dG8nXG59KVxuXG5jb25zdCBNZW51QmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgZm9udFNpemU6IDE1LFxuICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnLFxuICBtYXJnaW5Cb3R0b206IDUwLFxuICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXInLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFU1QsXG4gICAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfSAhaW1wb3J0YW50YFxuICB9XG59KVxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNVxufSlcblxuZXhwb3J0IGNvbnN0IEJyYW5kID0gc3R5bGVkLmRpdigoe2FjdGl2ZX0pID0+ICh7XG4gIGhlaWdodDogMjUsXG4gIHdpZHRoOiAyNSxcbiAgY29sb3I6IGFjdGl2ZSA/IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUksgOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7YWN0aXZlID8gUEFMRVRURS5QUklNQVJZX01BSU4gOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIG1hcmdpblJpZ2h0OiAxMFxufSkpXG5cbmNvbnN0IENvbXBhbnkgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBtYXJnaW5SaWdodDogNSxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBOYXZJdGVtcyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICAvLyBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIG1hcmdpbkxlZnQ6IDE1LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxNVxufSlcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZChOYXZMaW5rKSh7XG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgaGVpZ2h0OiAzMCxcbiAgbGluZUhlaWdodDogJzMwcHgnLFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIG1hcmdpbjogJzJweCAxMHB4JyxcbiAgb3BhY2l0eTogMC43NSxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSX0xJR0hULFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgTmF2U3ViSXRlbSA9IHN0eWxlZChOYXZMaW5rKSh7XG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGhlaWdodDogMjUsXG4gIGxpbmVIZWlnaHQ6ICcyNXB4JyxcbiAgcGFkZGluZ0xlZnQ6IDEwLFxuICBtYXJnaW46ICcycHggMTBweCAycHggNDBweCcsXG4gIG9wYWNpdHk6IDAuNzUsXG4gIGZvbnRTaXplOiAxNCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSX0xJR0hULFxuICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGFjdGl2ZUxpbmtTdHlsZXMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogYCR7UEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSfSAhaW1wb3J0YW50YCxcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfSAhaW1wb3J0YW50YCxcbiAgb3BhY2l0eTogJzEgIWltcG9ydGFudCdcbn1cblxuY29uc3QgU2lkZWJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBsb2NhdGlvbixcbiAgICBvcmdhbml6YXRpb25zLFxuICAgIG9yZ05hbWUgPSAnSHVtYW4gTGFtYmRhcycsXG4gICAgc3dpdGNoVXNlck9yZyxcbiAgICBoYW5kbGVOZXdPcmdhbml6YXRpb25cbiAgfSA9IHByb3BzXG4gIGNvbnN0IHtlbWFpbCwgbmFtZSwgY3VycmVudF9vcmdhbml6YXRpb25faWR9ID0gdXNlclxuICBjb25zdCBpc01ldHJpY1JvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9tZXRyaWNzJylcbiAgY29uc3Qge21lbnVQb3J0YWwsIHRvZ2dsZVBvcnRhbCwgb3JpZ2luUmVmLCBtZW51UHJvcHN9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfTEVGVCwge1xuICAgIGlzRHJvcGRvd246IHRydWVcbiAgfSlcbiAgY29uc3Qge21vZGFsUG9ydGFsLCB0b2dnbGVQb3J0YWw6IHRvZ2dsZU1vZGFsUG9ydGFsLCBjbG9zZVBvcnRhbDogY2xvc2VNb2RhbFBvcnRhbH0gPSB1c2VNb2RhbCh7fSlcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZFJvb3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY0fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZDb250ZW50cywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjV9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUJsb2NrLCB7IG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2N319XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnJhbmQsIHsgcmVmOiBvcmlnaW5SZWYsIGFjdGl2ZTogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2OH19XG4gICAgICAgICAgICAgICwgb3JnTmFtZS5jaGFyQXQoMClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb21wYW55LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3MX19LCBvcmdOYW1lKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93RG93blNWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzJ9fSApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZJdGVtcywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzR9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENsYXNzTmFtZXMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc1fX1cbiAgICAgICAgICAgICAgLCAoe2Nzc30pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAsIGlzVXNlclN0YWZmKG9yZ2FuaXphdGlvbnMsIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvb3V0c3RhbmRpbmctcXVldWVzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcnNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4Mn19IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4M319LCBcIk91dHN0YW5kaW5nIFF1ZXVlc1wiIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICwgIXVzZXIuaXNfYWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvYXVkaXRzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODZ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdHNTVkcsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg3fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODh9fSwgXCJBdWRpdHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICwgIWlzVXNlclN0YWZmKG9yZ2FuaXphdGlvbnMsIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZJdGVtLCB7IHRvOiBgL3F1ZXVlc2AsIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk1fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZUljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk2fX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5N319LCBcIlF1ZXVlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIHVzZXIuaXNfYWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC91c2Vyc2AsIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChVc2Vyc0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAyfX0gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwM319LCBcIlVzZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgdXNlci5pc19hZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvYXVkaXRzYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXRzU1ZHLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxMH19LCBcIkF1ZGl0c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvbWV0cmljc2AsIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEyfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY3NJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxM319IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNH19LCBcIk1ldHJpY3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICwgaXNNZXRyaWNSb3V0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2U3ViSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYC9tZXRyaWNzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3QsIHsgY29sb3I6IFBBTEVUVEUuTElOSywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyM319IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjI0fX0sIFwiT3ZlcnZpZXdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdlN1Ykl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBgL21ldHJpY3MvcXVldWVzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjI2fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEb3QsIHsgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9HUkVFTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzMH19IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMxfX0sIFwiUXVldWVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZTdWJJdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogYC9tZXRyaWNzL3dvcmtlcnNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERvdCwgeyBjb2xvcjogXCIjZmY0YzRjXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzd9fSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOH19LCBcIldvcmtlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3Rlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTB9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZJdGVtLCB7IHRvOiBgL3NldHRpbmdzL3Byb2ZpbGVgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjUxfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZXR0aW5nc1NWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTJ9fSApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjUzfX0sIFwiU2V0dGluZ3NcIilcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHBNZW51LCB7XG4gICAgICAgICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWwsXG4gICAgICAgICAgdG9nZ2xlTW9kYWxQb3J0YWw6IHRvZ2dsZU1vZGFsUG9ydGFsLFxuICAgICAgICAgIG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsXG4gICAgICAgICAgc3dpdGNoVXNlck9yZzogc3dpdGNoVXNlck9yZyxcbiAgICAgICAgICBtZW51UHJvcHM6IG1lbnVQcm9wcyxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogY3VycmVudF9vcmdhbml6YXRpb25faWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTh9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIG1vZGFsUG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5ld09yZ01vZGFsLCB7IGNsb3NlUG9ydGFsOiBjbG9zZU1vZGFsUG9ydGFsLCBoYW5kbGVOZXdPcmdhbml6YXRpb246IGhhbmRsZU5ld09yZ2FuaXphdGlvbiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MH19IClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTaWRlYmFyKVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9tb2R1bGVzL2Rhc2hib2FyZC9EYXNoYm9hcmRSb290LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb250YWluZXJzL0Rhc2hib2FyZCdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7YWRkVXNlcn0gZnJvbSAnY2xpZW50L3JlZHV4L2N1cnJlbnRVc2VyUmVkdWNlcidcbmltcG9ydCBpc1VzZXJTdGFmZiBmcm9tICdjbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYnXG5cblxuXG5cblxuXG5jb25zdCBEYXNoYm9hcmRSb290ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoaXN0b3J5fSA9IHByb3BzXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHtcbiAgICBhY2Nlc3NPYmo6IHt1c2VyX2lkOiB1c2VySWR9XG4gIH0gPSBuZXR3b3JrZXIgfHwge2FjY2Vzc09iajoge319XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCB7Y3VycmVudF9vcmdhbml6YXRpb25faWQ6IGN1cnJlbnRPcmdJZH0gPSB1c2VyIHx8IHt9XG4gIGNvbnN0IFtvcmdhbml6YXRpb24sIHNldE9yZ10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW29yZ2FuaXphdGlvbnMsIHNldE9yZ3NdID0gdXNlU3RhdGUoW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyQW5kT3JnSW5mbygpIHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvJHt1c2VySWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgIGxldCBkYXRhLCBlcnJvcnNcblxuICAgIGlmIChyZXNwKSB7XG4gICAgICBkYXRhID0gcmVzcC5kYXRhXG4gICAgICBlcnJvcnMgPSByZXNwLmVycm9yc1xuICAgIH1cbiAgICBjb25zdCB7Y3VycmVudF9vcmdhbml6YXRpb25faWR9ID0gZGF0YSB8fCB7fVxuICAgIGlmIChjdXJyZW50T3JnSWQgPT09IGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKSByZXR1cm5cbiAgICBpZiAoIWVycm9ycykge1xuICAgICAgaWYgKGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhOiBvcmd9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke2RhdGEuY3VycmVudF9vcmdhbml6YXRpb25faWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qge2RhdGE6IG9yZ3N9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jnc2AsIHttZXRob2Q6ICdHRVQnfSlcbiAgICAgICAgc2V0VXNlcihkYXRhKVxuICAgICAgICBzZXRPcmcob3JnKVxuICAgICAgICBzZXRPcmdzKG9yZ3MpXG4gICAgICAgIGNvbnN0IGlzU3RhZmYgPSBpc1VzZXJTdGFmZihvcmdzLCBkYXRhLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKVxuICAgICAgICBwcm9wcy5hZGRVc2VyKHsuLi5kYXRhLCBpc1N0YWZmfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIG9yZ2FuaXphdGlvbiBJRCEnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMuZm9yRWFjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VyQW5kT3JnSW5mbygpXG4gIH0sIFt1c2VySWQsIHVzZXJdKVxuXG4gIGNvbnN0IHN3aXRjaFVzZXJPcmcgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzLyR7dXNlci5pZH1gLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkOiBpZFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BBVENIJ1xuICAgIH0pXG4gICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9yZ2FuaXphdGlvbiBpbmZvcm1hdGlvbiEnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU5ld09yZ2FuaXphdGlvbiA9IGFzeW5jIChvcmdOYW1lKSA9PiB7XG4gICAgaWYgKCFvcmdOYW1lKSByZXR1cm5cbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7aWQ6IG5ld09yZ0lkfVxuICAgIH0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzL2NyZWF0ZWAsIHtcbiAgICAgIGRhdGE6IG9yZ05hbWUsXG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pXG4gICAgYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvJHt1c2VyLmlkfWAsIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudF9vcmdhbml6YXRpb25faWQ6IG5ld09yZ0lkXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUEFUQ0gnXG4gICAgfSlcbiAgICBoaXN0b3J5LnB1c2goJy8nKVxuICB9XG5cbiAgaWYgKCF1c2VyLmlkICYmICFvcmdhbml6YXRpb24ubmFtZSkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGFzaGJvYXJkLCB7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIHVzZXI6IHVzZXIsXG4gICAgICBvcmdOYW1lOiBvcmdhbml6YXRpb24ubmFtZSxcbiAgICAgIG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsXG4gICAgICBzd2l0Y2hVc2VyT3JnOiBzd2l0Y2hVc2VyT3JnLFxuICAgICAgaGFuZGxlTmV3T3JnYW5pemF0aW9uOiBoYW5kbGVOZXdPcmdhbml6YXRpb24sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgKVxuICApXG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGFkZFVzZXI6IChhcmcpID0+IGRpc3BhdGNoKGFkZFVzZXIoYXJnKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShEYXNoYm9hcmRSb290KVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9tb2R1bGVzL2Rhc2hib2FyZC9jb250YWluZXJzL0Rhc2hib2FyZC50c3hcIjtpbXBvcnQgUmVhY3QsIHtsYXp5fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBTaWRlYmFyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1NpZGViYXInXG5pbXBvcnQgaGFuZGxlQ2h1bmtFcnJvciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaGFuZGxlQ2h1bmtFcnJvcidcblxuXG5cblxuXG5cblxuXG5jb25zdCBEYXNoTGF5b3V0ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn0pXG5cbmNvbnN0IERhc2hNYWluID0gc3R5bGVkKCdkaXYnKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOXG59KVxuXG5jb25zdCBRdWV1ZXNSb290ID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ1F1ZXVlc1Jvb3QnICovICdjbGllbnQvbW9kdWxlcy9xdWV1ZXMvUXVldWVzUm9vdCcpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IFVzZXJzUm9vdCA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdVc2Vyc1Jvb3QnICovICdjbGllbnQvbW9kdWxlcy91c2Vycy9jb250YWluZXJzL1VzZXJzUm9vdCdcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuXG5jb25zdCBBdWRpdHNSb290ID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ0F1ZGl0c1Jvb3QnICovICd1bml2ZXJzYWwvbW9kdWxlcy9hdWRpdHMvQXVkaXRzUm9vdCdcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuXG5jb25zdCBPdXRzdGFuZGluZ1Jvb3QgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQXVkaXRzUm9vdCcgKi8gJ3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL091dHN0YW5kaW5nUm9vdCdcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuXG5jb25zdCBNZXRyaWNzUm9vdCA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdNZXRyaWNzUm9vdCcgKi8gJ2NsaWVudC9tb2R1bGVzL21ldHJpY3MvTWV0cmljc1Jvb3QnXG4gICkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVDaHVua0Vycm9yKGVycm9yKSlcbilcblxuY29uc3QgTm90Rm91bmQgPSBsYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnTm90Rm91bmQnICovICdjbGllbnQvY29tcG9uZW50cy9Ob3RGb3VuZCcpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBvcmdOYW1lLFxuICAgIG9yZ2FuaXphdGlvbnMsXG4gICAgaGFuZGxlTmV3T3JnYW5pemF0aW9uLFxuICAgIHN3aXRjaFVzZXJPcmcsXG4gICAgaGlzdG9yeToge2xvY2F0aW9ufSxcbiAgICBpc1N0YWZmXG4gIH0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCBoaWRlU2lkZWJhciA9IGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCd0YXNrJylcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhc2hMYXlvdXQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzl9fVxuICAgICAgLCAhaGlkZVNpZGViYXIgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZGViYXIsIHtcbiAgICAgICAgICBzd2l0Y2hVc2VyT3JnOiBzd2l0Y2hVc2VyT3JnLFxuICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgb3JnTmFtZTogb3JnTmFtZSxcbiAgICAgICAgICBvcmdhbml6YXRpb25zOiBvcmdhbml6YXRpb25zLFxuICAgICAgICAgIGhhbmRsZU5ld09yZ2FuaXphdGlvbjogaGFuZGxlTmV3T3JnYW5pemF0aW9uLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGFzaE1haW4sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODl9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL291dHN0YW5kaW5nLXF1ZXVlc1wiLFxuICAgICAgICAgICAgcmVuZGVyOiAocCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNTdGFmZikgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0c3RhbmRpbmdSb290LCB7IC4uLnAsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5NH19IClcbiAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVkaXJlY3QsIHsgdG86IFwiL3F1ZXVlc1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTV9fSApXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTF9fVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL3F1ZXVlc1wiLFxuICAgICAgICAgICAgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZXNSb290LCB7IG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsIC4uLnAsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDB9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTh9fVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgcGF0aDogXCIvdXNlcnNcIiwgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChVc2Vyc1Jvb3QsIHsgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDJ9fSApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL2F1ZGl0c1wiLCByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KEF1ZGl0c1Jvb3QsIHsgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwM319ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDN9fSApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL21ldHJpY3NcIiwgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNzUm9vdCwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA0fX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNH19IClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgY29tcG9uZW50OiBOb3RGb3VuZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNX19IClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGlzU3RhZmY6IHN0YXRlLmN1cnJlbnRVc2VyLmlzU3RhZmZcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShEYXNoYm9hcmQpXG4iLCJpbXBvcnQge1NUQUZGX09SR19JRH0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuY29uc3QgaXNVc2VyU3RhZmYgPSAob3JnYW5pemF0aW9ucywgY3VycmVudF9vcmdhbml6YXRpb25faWQpID0+IHtcbiAgZm9yIChjb25zdCBvcmcgb2Ygb3JnYW5pemF0aW9ucykge1xuICAgIGlmIChvcmcuaWQgPT09IFNUQUZGX09SR19JRCAmJiBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCA9PT0gU1RBRkZfT1JHX0lEKSByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5leHBvcnQgZGVmYXVsdCBpc1VzZXJTdGFmZlxuIl0sInNvdXJjZVJvb3QiOiIifQ==