(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AuditsRoot"],{

/***/ "./src/client/components/EmptyPage.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/EmptyPage.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/EmptyPage.tsx";




const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm0"
})({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  fontFamily: styles_typography__WEBPACK_IMPORTED_MODULE_2__["FONT_FAMILY"].SANS_SERIF
});

const Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm1"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 24,
  fontWeight: 500,
  margin: '20px 0 15px'
});

const SubTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1mrkvlm2"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 16,
  fontWeight: 400,
  margin: '0px 0 20px',
  '> div > a': {
    color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN
  }
});

const EmptyPage = ({
  svg,
  header,
  subHeader,
  button
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, svg, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, subHeader), button);
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyPage);

/***/ }),

/***/ "./src/client/components/IconButtonWrapper.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/IconButtonWrapper.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var components_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PlainButton */ "./src/client/components/PlainButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/IconButtonWrapper.tsx"; // TODO replace IconButton





const Container = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(components_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e110poak0"
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
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_HOVER
  }
});

const IconButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    onClick,
    type,
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    onClick: onClick,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/client/components/Icons/ArrowLeftSVG.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/Icons/ArrowLeftSVG.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ArrowLeftSVG.tsx";


const ArrowLeftSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
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
    d: "M143.492 221.863L336.226 29.129c6.663-6.664 6.663-17.468 0-24.132-6.665-6.662-17.468-6.662-24.132 0l-204.8 204.8c-6.662 6.664-6.662 17.468 0 24.132l204.8 204.8c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L143.492 221.863z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ArrowLeftSVG);

/***/ }),

/***/ "./src/client/components/Icons/ArrowRightSVG.tsx":
/*!*******************************************************!*\
  !*** ./src/client/components/Icons/ArrowRightSVG.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/ArrowRightSVG.tsx";


const ArrowRightSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
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
    d: "M336.226 209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.712l192.734 192.734-192.734 192.734c-6.663 6.664-6.663 17.468 0 24.132 6.665 6.663 17.468 6.663 24.132 0l204.8-204.8c6.663-6.665 6.663-17.468 0-24.132z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ArrowRightSVG);

/***/ }),

/***/ "./src/client/components/Icons/EmptyAuditsSVG.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/Icons/EmptyAuditsSVG.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/EmptyAuditsSVG.tsx";


const EmptyAuditsSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].BACKGROUND_GRAY_MID,
    height: 100,
    width: 100,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (EmptyAuditsSVG);

/***/ }),

/***/ "./src/client/components/Icons/FilterSVG.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/Icons/FilterSVG.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/FilterSVG.tsx";


const FilterSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const {
    color
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    height: "15",
    viewBox: "0 0 515.555 515.555",
    width: "15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color || styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M178.5 382.5h102v-51h-102v51zM0 76.5v51h459v-51H0zM76.5 255h306v-51h-306v51z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (FilterSVG);

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

/***/ "./src/universal/modules/audits/AuditsRoot.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/modules/audits/AuditsRoot.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Audits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Audits */ "./src/universal/modules/audits/components/Audits.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/audits/AuditsRoot.tsx";






const AuditsRoot = props => {
  const {
    user,
    users
  } = props || {};
  const [audits, setAudits] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [queueId, setQueueId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [userId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const orgId = user.current_organization_id;
  const {
    tasks,
    count
  } = audits || {};
  const PAGE_LIMIT = 50;
  const onNext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset < Math.abs(count - PAGE_LIMIT)) {
      setOffset(offset + PAGE_LIMIT);
    }
  }, [count, offset]);
  const onBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset >= PAGE_LIMIT) {
      setOffset(offset - PAGE_LIMIT);
    }
  }, [count, offset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchAudits() {
      setLoading(true);
      const payload = {
        method: 'GET',
        params: {
          limit: PAGE_LIMIT,
          queue_id: queueId,
          worker_id: userId,
          offset
        }
      };
      const {
        data
      } = await networker.httpHandler(`/orgs/${orgId}/queues/tasks/completed`, payload);
      const {
        data: queues
      } = await networker.httpHandler(`/orgs/${orgId}/queues`, {
        method: 'GET',
        params: {
          task_status: 'completed'
        }
      });
      setAudits(data);
      setQueues(queues);
      setLoading(false);
    }

    fetchAudits();
  }, [queueId, userId, offset, user]);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Audits__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tasks: tasks || [],
    count: count,
    onNext: onNext,
    onBack: onBack,
    limit: PAGE_LIMIT,
    offset: offset,
    queues: queues,
    setQueueId: setQueueId,
    queueId: queueId,
    users: users,
    setUserId: setUserId,
    userId: userId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  });
};

const mapStateToProps = state => ({
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(AuditsRoot));

/***/ }),

/***/ "./src/universal/modules/audits/components/Audits.tsx":
/*!************************************************************!*\
  !*** ./src/universal/modules/audits/components/Audits.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/ListPage/ListPage */ "./src/client/components/ListPage/ListPage.tsx");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/ArrowLeftSVG */ "./src/client/components/Icons/ArrowLeftSVG.tsx");
/* harmony import */ var client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/components/Icons/ArrowRightSVG */ "./src/client/components/Icons/ArrowRightSVG.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/ListPage/ListTitle */ "./src/client/components/ListPage/ListTitle.tsx");
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/Icons/FilterSVG */ "./src/client/components/Icons/FilterSVG.tsx");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/components/Icons/EmptyAuditsSVG */ "./src/client/components/Icons/EmptyAuditsSVG.tsx");
/* harmony import */ var client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! client/components/IconButtonWrapper */ "./src/client/components/IconButtonWrapper.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! universal/modules/task/components/Sidebar */ "./src/universal/modules/task/components/Sidebar.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/audits/components/Audits.tsx";
























const ColumnContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob0"
})({
  name: "i6hear",
  styles: "line-height:40px;height:40px;display:grid;grid-template-columns:100px 1fr 180px 100px 100px 80px 100px;grid-column-gap:15px;"
});

const Footer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob1"
})({
  name: "y8ru05",
  styles: "height:45px;display:grid;max-width:80%;grid-template-columns:200px 200px;justify-content:space-between;align-items:center;"
});

const Paginator = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob2"
})({
  name: "192qrng",
  styles: "display:flex;align-items:center;justify-content:flex-end;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16d2yob3"
})(_objectSpread({
  marginLeft: 7,
  width: '100%'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const Spacer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob4"
})({
  name: "jgwfcl",
  styles: "margin-right:7px;display:flex;align-items:center;"
});

const LineItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob5"
})(_objectSpread({
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer !important',
  display: 'block'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const SmallText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16d2yob6"
})({
  textAlign: 'left',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  userSelect: 'none'
});

const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob7"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const PageCount = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e16d2yob8"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  fontWeight: 400,
  userSelect: 'none',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER,
  marginLeft: 2,
  marginRight: 2,
  width: 'auto',
  borderRadius: 0,
  height: 25,
  lineHeight: '25px'
});

const PaginateBtn = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
  target: "e16d2yob9"
})(({
  left
}) => {
  return {
    height: 25,
    lineHeight: '25px',
    width: 30,
    padding: 0,
    margin: 0,
    background: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_HOVER,
    borderTopRightRadius: left ? 0 : 4,
    borderBottomRightRadius: left ? 0 : 4,
    borderBottomLeftRadius: left ? 4 : 0,
    borderTopLeftRadius: left ? 4 : 0
  };
});

const StyledEl = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob10"
})(_objectSpread({
  margin: '0 15px',
  padding: '7px 0',
  fontWeight: 500,
  maxWidth: 350
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_11__["default"]));

const HR = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16d2yob11"
})({
  height: 1,
  width: '100%',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY
});

const StyledCommentsIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_23__["default"], {
  target: "e16d2yob12"
})({
  display: 'block',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
  marginRight: 15,
  marginLeft: 4,
  fontSize: 17
});

const Audits = props => {
  const {
    tasks,
    count,
    onNext,
    onBack,
    limit,
    offset,
    queues,
    setQueueId,
    setUserId,
    queueId,
    userId,
    users
  } = props;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const separator = {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HR, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    })
  };
  const wMenuItems = queues.map(w => ({
    label: queueId === w.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    }, w.name) : w.name,
    onClick: () => setQueueId(prev => prev === w.id ? undefined : w.id)
  }));

  if (queueId) {
    wMenuItems.unshift(separator);
    wMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setQueueId(undefined)
    });
  }

  const cbMenuItems = users.map(u => ({
    label: userId === u.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }, u.name) : u.name,
    onClick: () => setUserId(prev => prev === u.id ? undefined : u.id)
  }));

  if (userId) {
    cbMenuItems.unshift(separator);
    cbMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setUserId(undefined)
    });
  }

  const {
    menuPortal: menuPortalQueue,
    originRef: originRefQueue,
    menuProps: menuPropsQueue,
    togglePortal: togglePortalQueue
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const {
    menuPortal: menuPortalCb,
    originRef: originRefCb,
    menuProps: menuPropsCb,
    togglePortal: togglePortalCb
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_12__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_13__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const pageHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, "Task ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, "Queue Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: originRefQueue,
    onClick: togglePortalQueue,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: queueId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, "Completed By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: originRefCb,
    onClick: togglePortalCb,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: userId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  }, "Completed At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    }
  }, "Source"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    }
  }, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, "Audit"));
  const pageFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }, count, " Completed tasks"), count > limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paginator, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    left: true,
    onClick: onBack,
    disabled: offset < limit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageCount, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }, `${(offset / limit + 1).toFixed()} / ${Math.ceil(count / limit)}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    onClick: onNext,
    disabled: offset >= Math.abs(count - limit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    }
  }))));
  const auditDecisionIcon = {
    null: null,
    false: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__["AuditDecisionIcon"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__["STATUS_PALETTE"].IN_PROGRESS,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      }
    }, "cancel"),
    true: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_21__["AuditDecisionIcon"], {
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_22__["STATUS_PALETTE"].COMPLETED,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      }
    }, "check_circle")
  };
  const itemList = tasks.map(({
    id: taskId,
    completed_by: completedBy,
    completed_at: completedAt,
    correct,
    queue: name,
    source,
    n_comments
  }) => {
    let sourceTextStyle = 'none';
    sourceTextStyle = ['manual', 'zapier'].includes(source) ? 'capitalize' : sourceTextStyle;
    sourceTextStyle = ['api'].includes(source) ? 'uppercase' : sourceTextStyle;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
      key: taskId,
      onClick: () => history.push({
        pathname: `/queues/tasks/${taskId}/audit`,
        state: {
          isAudits: true
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      }
    }, taskId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_10__["default"])(completedBy),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_20__["colorFromString"])(completedBy),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      }
    }, completedBy))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(completedAt).format('DD-MM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        textTransform: sourceTextStyle,
        display: 'inline-block',
        justifySelf: 'center',
        width: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      }
    }, source), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'center',
        color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_GRAY
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      }
    }, n_comments > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, n_comments, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCommentsIcon, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      }
    }, "comment"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'flex-start'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      }
    }, auditDecisionIcon[correct]));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageHeader: pageHeader,
    itemList: itemList,
    pageFooter: pageFooter,
    emptyList: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_17__["default"], {
      svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }),
      header: 'No tasks here…',
      subHeader: 'Try using different filters.',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }), menuPortalQueue( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuProps: menuPropsQueue,
    menuItems: wMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  })), menuPortalCb( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    menuProps: menuPropsCb,
    menuItems: cbMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Audits);

/***/ }),

/***/ "./src/universal/modules/outstanding/OutstandingRoot.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/outstanding/OutstandingRoot.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Outstanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Outstanding */ "./src/universal/modules/outstanding/components/Outstanding.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/outstanding/OutstandingRoot.tsx";

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








const OutstandingRoot = props => {
  const {
    user,
    users
  } = props || {};
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [queueId, setQueueId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [userId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const orgId = user.current_organization_id;
  const PAGE_LIMIT = 50;
  const onNext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset < Math.abs(count - PAGE_LIMIT)) {
      setOffset(offset + PAGE_LIMIT);
    }
  }, [count, offset]);
  const onBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (offset >= PAGE_LIMIT) {
      setOffset(offset - PAGE_LIMIT);
    }
  }, [count, offset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueues() {
      setLoading(true);
      const {
        errors,
        data: queues
      } = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(`/orgs/${orgId}/queues`, {
        method: 'GET'
      })]);

      if (errors) {
        console.error('Error fetching queues!', errors);
      } else {
        if (queues) {
          setCount(queues.length);
          setQueues(queues);
          setLoading(false);
        }
      }
    }

    fetchQueues();
  }, [queueId, userId, offset, user]);
  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Outstanding Queues | Human Lambdas');
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Outstanding__WEBPACK_IMPORTED_MODULE_2__["default"], {
    count: count,
    onNext: onNext,
    onBack: onBack,
    limit: PAGE_LIMIT,
    offset: offset,
    queues: queues,
    setQueueId: setQueueId,
    queueId: queueId,
    users: users,
    setUserId: setUserId,
    userId: userId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  });
};

const mapStateToProps = state => ({
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(OutstandingRoot));

/***/ }),

/***/ "./src/universal/modules/outstanding/components/Outstanding.tsx":
/*!**********************************************************************!*\
  !*** ./src/universal/modules/outstanding/components/Outstanding.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/ListPage/ListPage */ "./src/client/components/ListPage/ListPage.tsx");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/Icons/ArrowLeftSVG */ "./src/client/components/Icons/ArrowLeftSVG.tsx");
/* harmony import */ var client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/Icons/ArrowRightSVG */ "./src/client/components/Icons/ArrowRightSVG.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/components/ListPage/ListTitle */ "./src/client/components/ListPage/ListTitle.tsx");
/* harmony import */ var client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/StandardMenu */ "./src/client/components/StandardMenu.tsx");
/* harmony import */ var client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/Icons/FilterSVG */ "./src/client/components/Icons/FilterSVG.tsx");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/Icons/EmptyAuditsSVG */ "./src/client/components/Icons/EmptyAuditsSVG.tsx");
/* harmony import */ var client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/components/IconButtonWrapper */ "./src/client/components/IconButtonWrapper.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/outstanding/components/Outstanding.tsx";




















const ColumnContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno50"
})({
  name: "19b2y6p",
  styles: "line-height:40px;height:40px;display:grid;grid-template-columns:80px 100px 1fr 180px 150px;grid-column-gap:15px;"
});

const Footer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno51"
})({
  name: "y8ru05",
  styles: "height:45px;display:grid;max-width:80%;grid-template-columns:200px 200px;justify-content:space-between;align-items:center;"
});

const Paginator = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno52"
})({
  name: "192qrng",
  styles: "display:flex;align-items:center;justify-content:flex-end;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16vkno53"
})(_objectSpread({
  marginLeft: 7,
  width: '100%'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const Spacer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno54"
})({
  name: "jgwfcl",
  styles: "margin-right:7px;display:flex;align-items:center;"
});

const LineItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno55"
})(_objectSpread({
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer !important',
  display: 'block'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const SmallText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e16vkno56"
})({
  textAlign: 'left',
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  userSelect: 'none'
});

const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno57"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const PageCount = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e16vkno58"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  fontSize: 14,
  fontWeight: 400,
  userSelect: 'none',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER,
  marginLeft: 2,
  marginRight: 2,
  width: 'auto',
  borderRadius: 0,
  height: 25,
  lineHeight: '25px'
});

const PaginateBtn = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e16vkno59"
})(({
  left
}) => {
  return {
    height: 25,
    lineHeight: '25px',
    width: 30,
    padding: 0,
    margin: 0,
    background: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER,
    borderTopRightRadius: left ? 0 : 4,
    borderBottomRightRadius: left ? 0 : 4,
    borderBottomLeftRadius: left ? 4 : 0,
    borderTopLeftRadius: left ? 4 : 0
  };
});

const StyledEl = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno510"
})(_objectSpread({
  margin: '0 15px',
  padding: '7px 0',
  fontWeight: 500,
  maxWidth: 350
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_10__["default"]));

const HR = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e16vkno511"
})({
  height: 1,
  width: '100%',
  backgroundColor: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_MAIN_GRAY
});

const Outstanding = props => {
  const {
    count,
    onNext,
    onBack,
    limit,
    offset,
    queues,
    setQueueId,
    setUserId,
    queueId,
    userId,
    users
  } = props;
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const separator = {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HR, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      }
    })
  };
  const wMenuItems = queues.map(w => ({
    label: queueId === w.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      }
    }, w.name) : w.name,
    onClick: () => setQueueId(prev => prev === w.id ? undefined : w.id)
  }));

  if (queueId) {
    wMenuItems.unshift(separator);
    wMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setQueueId(undefined)
    });
  }

  const cbMenuItems = users.map(u => ({
    label: userId === u.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledEl, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }, u.name) : u.name,
    onClick: () => setUserId(prev => prev === u.id ? undefined : u.id)
  }));

  if (userId) {
    cbMenuItems.unshift(separator);
    cbMenuItems.unshift({
      label: 'Clear filter',
      onClick: () => setUserId(undefined)
    });
  }

  const {
    menuPortal: menuPortalQueue,
    originRef: originRefQueue,
    menuProps: menuPropsQueue,
    togglePortal: togglePortalQueue
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const {
    menuPortal: menuPortalCb,
    originRef: originRefCb,
    menuProps: menuPropsCb,
    togglePortal: togglePortalCb
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_11__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_12__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true,
    menuContentStyles: {
      width: 350
    }
  });
  const pageHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }, "Queue ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, "Org ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spacer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    }
  }, "Queue Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButtonWrapper__WEBPACK_IMPORTED_MODULE_18__["default"], {
    ref: originRefQueue,
    onClick: togglePortalQueue,
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_FilterSVG__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: queueId ? client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN : client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    }
  }, "Created At"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListTitle__WEBPACK_IMPORTED_MODULE_13__["default"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  }, "Pending Tasks"));
  const pageFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallText, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, count, " Completed tasks"), count > limit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paginator, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    left: true,
    onClick: onBack,
    disabled: offset < limit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowLeftSVG__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PageCount, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, `${(offset / limit + 1).toFixed()} / ${Math.ceil(count / limit)}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaginateBtn, {
    onClick: onNext,
    disabled: offset >= Math.abs(count - limit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_ArrowRightSVG__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }))));
  const itemList = queues.map(({
    id,
    created_at,
    org_id,
    n_tasks,
    name
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColumnContainer, {
      key: id,
      onClick: () => history.push(`/queues/${id}`),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      }
    }, id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      }
    }, org_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_9__["default"])(name),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_19__["colorFromString"])(name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      }
    }, created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LineItem, {
      style: {
        display: 'flex',
        justifySelf: 'center',
        color: client_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      }
    }, n_tasks));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListPage_ListPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageHeader: pageHeader,
    itemList: itemList,
    pageFooter: pageFooter,
    emptyList: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_16__["default"], {
      svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_EmptyAuditsSVG__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }),
      header: 'No tasks here…',
      subHeader: 'Try using different filters.',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    }
  }), menuPortalQueue( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    menuProps: menuPropsQueue,
    menuItems: wMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    }
  })), menuPortalCb( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_StandardMenu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    menuProps: menuPropsCb,
    menuItems: cbMenuItems,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Outstanding);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbkJ1dHRvbldyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd1JpZ2h0U1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlBdWRpdHNTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9hdWRpdHMvQXVkaXRzUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9jb21wb25lbnRzL0F1ZGl0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL091dHN0YW5kaW5nUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL2NvbXBvbmVudHMvT3V0c3RhbmRpbmcudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIldyYXBwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIndpZHRoIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsIlRpdGxlIiwiY29sb3IiLCJQQUxFVFRFIiwiVEVYVF9NQUlOIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiU3ViVGl0bGUiLCJQUklNQVJZX01BSU4iLCJFbXB0eVBhZ2UiLCJzdmciLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJidXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkNvbnRhaW5lciIsIlBsYWluQnV0dG9uIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJCQUNLR1JPVU5EX0hPVkVSIiwiSWNvbkJ1dHRvbiIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJ0eXBlIiwiY2hpbGRyZW4iLCJBcnJvd0xlZnRTVkciLCJtZW1vIiwidmlld0JveCIsInhtbG5zIiwiZmlsbCIsImQiLCJBcnJvd1JpZ2h0U1ZHIiwiRW1wdHlBdWRpdHNTVkciLCJCQUNLR1JPVU5EX0dSQVlfTUlEIiwiRmlsdGVyU1ZHIiwiU3RhbmRhcmRNZW51IiwibWVudVByb3BzIiwibWVudUl0ZW1zIiwiTWVudSIsImFyaWFMYWJlbCIsIm1hcCIsImxhYmVsIiwiaWR4IiwiTWVudUl0ZW0iLCJrZXkiLCJBdWRpdHNSb290IiwidXNlciIsInVzZXJzIiwiYXVkaXRzIiwic2V0QXVkaXRzIiwidXNlU3RhdGUiLCJxdWV1ZXMiLCJzZXRRdWV1ZXMiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInF1ZXVlSWQiLCJzZXRRdWV1ZUlkIiwidW5kZWZpbmVkIiwidXNlcklkIiwic2V0VXNlcklkIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwib3JnSWQiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsInRhc2tzIiwiY291bnQiLCJQQUdFX0xJTUlUIiwib25OZXh0IiwidXNlQ2FsbGJhY2siLCJNYXRoIiwiYWJzIiwib25CYWNrIiwidXNlRWZmZWN0IiwiZmV0Y2hBdWRpdHMiLCJwYXlsb2FkIiwibWV0aG9kIiwicGFyYW1zIiwibGltaXQiLCJxdWV1ZV9pZCIsIndvcmtlcl9pZCIsImRhdGEiLCJodHRwSGFuZGxlciIsInRhc2tfc3RhdHVzIiwiTG9hZGluZ1BhZ2UiLCJBdWRpdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiLCJDb2x1bW5Db250YWluZXIiLCJGb290ZXIiLCJQYWdpbmF0b3IiLCJMYWJlbCIsIm1hcmdpbkxlZnQiLCJ0ZXh0T3ZlcmZsb3ciLCJTcGFjZXIiLCJMaW5lSXRlbSIsIlNtYWxsVGV4dCIsInRleHRBbGlnbiIsInVzZXJTZWxlY3QiLCJBdmF0YXJCbG9jayIsIlBhZ2VDb3VudCIsIm1hcmdpblJpZ2h0IiwibGluZUhlaWdodCIsIlBhZ2luYXRlQnRuIiwibGVmdCIsImJhY2tncm91bmQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJTdHlsZWRFbCIsIm1heFdpZHRoIiwiSFIiLCJCT1JERVJfTUFJTl9HUkFZIiwiU3R5bGVkQ29tbWVudHNJY29uIiwiSWNvbiIsIlRFWFRfR1JBWSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwic2VwYXJhdG9yIiwid01lbnVJdGVtcyIsInciLCJpZCIsIm5hbWUiLCJwcmV2IiwidW5zaGlmdCIsImNiTWVudUl0ZW1zIiwidSIsIm1lbnVQb3J0YWwiLCJtZW51UG9ydGFsUXVldWUiLCJvcmlnaW5SZWYiLCJvcmlnaW5SZWZRdWV1ZSIsIm1lbnVQcm9wc1F1ZXVlIiwidG9nZ2xlUG9ydGFsIiwidG9nZ2xlUG9ydGFsUXVldWUiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfUklHSFQiLCJpc0Ryb3Bkb3duIiwibWVudUNvbnRlbnRTdHlsZXMiLCJtZW51UG9ydGFsQ2IiLCJvcmlnaW5SZWZDYiIsIm1lbnVQcm9wc0NiIiwidG9nZ2xlUG9ydGFsQ2IiLCJwYWdlSGVhZGVyIiwiTGlzdFRpdGxlIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uV3JhcHBlciIsIkZpbHRlckljb24iLCJhbGlnbiIsInBhZ2VGb290ZXIiLCJkaXNhYmxlZCIsIkFycm93TGVmdEljb24iLCJ0b0ZpeGVkIiwiY2VpbCIsIkFycm93UmlnaHRJY29uIiwiYXVkaXREZWNpc2lvbkljb24iLCJudWxsIiwiZmFsc2UiLCJBdWRpdERlY2lzaW9uSWNvbiIsIlNUQVRVU19QQUxFVFRFIiwiSU5fUFJPR1JFU1MiLCJ0cnVlIiwiQ09NUExFVEVEIiwiaXRlbUxpc3QiLCJ0YXNrSWQiLCJjb21wbGV0ZWRfYnkiLCJjb21wbGV0ZWRCeSIsImNvbXBsZXRlZF9hdCIsImNvbXBsZXRlZEF0IiwiY29ycmVjdCIsInF1ZXVlIiwic291cmNlIiwibl9jb21tZW50cyIsInNvdXJjZVRleHRTdHlsZSIsImluY2x1ZGVzIiwicHVzaCIsInBhdGhuYW1lIiwiaXNBdWRpdHMiLCJBdmF0YXIiLCJpbml0aWFscyIsImdldEluaXRpYWxzIiwiY29sb3JGcm9tU3RyaW5nIiwiZGF5anMiLCJmb3JtYXQiLCJzdHlsZSIsInRleHRUcmFuc2Zvcm0iLCJqdXN0aWZ5U2VsZiIsIkxpc3RQYWdlIiwiZW1wdHlMaXN0IiwiRW1wdHlBdWRpdHNJY29uIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiT3V0c3RhbmRpbmdSb290Iiwic2V0Q291bnQiLCJmZXRjaFF1ZXVlcyIsImVycm9ycyIsIl8iLCJfMiIsImNvbnNvbGUiLCJlcnJvciIsInVzZURvY3VtZW50VGl0bGUiLCJPdXRzdGFuZGluZyIsImNyZWF0ZWRfYXQiLCJvcmdfaWQiLCJuX3Rhc2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyx1RUFBckI7QUFBNkY7QUFFN0Y7QUFDQTs7QUFTQSxNQUFNQyxPQUFPLEdBQUc7QUFBQTtBQUFBLEdBQVc7QUFDekJDLGlCQUFlLEVBQUUsTUFEUTtBQUV6QkMsU0FBTyxFQUFFLE1BRmdCO0FBR3pCQyxlQUFhLEVBQUUsUUFIVTtBQUl6QkMsWUFBVSxFQUFFLFFBSmE7QUFLekJDLGdCQUFjLEVBQUUsUUFMUztBQU16QkMsUUFBTSxFQUFFLE1BTmlCO0FBT3pCQyxPQUFLLEVBQUUsTUFQa0I7QUFRekJDLFlBQVUsRUFBRUMsNkRBQVcsQ0FBQ0M7QUFSQyxDQUFYLENBQWhCOztBQVdBLE1BQU1DLEtBQUssR0FBRztBQUFBO0FBQUEsR0FBVztBQUN2QkMsT0FBSyxFQUFFQyxzREFBTyxDQUFDQyxTQURRO0FBRXZCQyxVQUFRLEVBQUUsRUFGYTtBQUd2QkMsWUFBVSxFQUFFLEdBSFc7QUFJdkJDLFFBQU0sRUFBRTtBQUplLENBQVgsQ0FBZDs7QUFPQSxNQUFNQyxRQUFRLEdBQUc7QUFBQTtBQUFBLEdBQVc7QUFDMUJOLE9BQUssRUFBRUMsc0RBQU8sQ0FBQ0MsU0FEVztBQUUxQkMsVUFBUSxFQUFFLEVBRmdCO0FBRzFCQyxZQUFVLEVBQUUsR0FIYztBQUkxQkMsUUFBTSxFQUFFLFlBSmtCO0FBSzFCLGVBQWE7QUFDWEwsU0FBSyxFQUFFQyxzREFBTyxDQUFDTTtBQURKO0FBTGEsQ0FBWCxDQUFqQjs7QUFVQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFDQyxLQUFEO0FBQU1DLFFBQU47QUFBY0MsV0FBZDtBQUF5QkM7QUFBekIsQ0FBRCxLQUFzQztBQUN0RCxzQkFDRUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjFCLE9BQXBCLEVBQTZCO0FBQUMyQixVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBN0IsRUFDSVQsR0FESixlQUVJSSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZixLQUFwQixFQUEyQjtBQUFDZ0IsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQTNCLEVBQStGUixNQUEvRixDQUZKLGVBR0lHLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JSLFFBQXBCLEVBQThCO0FBQUNTLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUE5QixFQUFrR1AsU0FBbEcsQ0FISixFQUlJQyxNQUpKLENBREY7QUFRRCxDQVREOztBQVdlSix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBLE1BQU1yQixZQUFZLEdBQUcsK0VBQXJCLEMsQ0FBcUc7O0FBQ3JHO0FBRUE7QUFDQTs7QUFRQSxNQUFNZ0MsU0FBUyxHQUFHLGtGQUFPQyw4REFBUDtBQUFBO0FBQUEsR0FBb0I7QUFDcENDLFFBQU0sRUFBRSxTQUQ0QjtBQUVwQ2hDLGlCQUFlLEVBQUUsU0FGbUI7QUFHcENDLFNBQU8sRUFBRSxNQUgyQjtBQUlwQ0UsWUFBVSxFQUFFLFFBSndCO0FBS3BDQyxnQkFBYyxFQUFFLFFBTG9CO0FBTXBDNkIsY0FBWSxFQUFFLEVBTnNCO0FBT3BDM0IsT0FBSyxFQUFFLEVBUDZCO0FBUXBDRCxRQUFNLEVBQUUsRUFSNEI7QUFTcEM2QixTQUFPLEVBQUUsQ0FUMkI7QUFVcENsQixRQUFNLEVBQUUsQ0FWNEI7QUFXcENtQixZQUFVLEVBQUUsbUJBWHdCO0FBWXBDLFlBQVU7QUFDUm5DLG1CQUFlLEVBQUVZLHNEQUFPLENBQUN3QjtBQURqQjtBQVowQixDQUFwQixDQUFsQjs7QUFpQkEsTUFBTUMsVUFBVSxnQkFBR0Msd0RBQVUsQ0FBQyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDNUMsUUFBTTtBQUFDQyxXQUFEO0FBQVVDLFFBQVY7QUFBZ0JDO0FBQWhCLE1BQTRCSixLQUFsQztBQUNBLHNCQUNFZiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CSyxTQUFwQixFQUErQjtBQUFFVSxPQUFHLEVBQUVBLEdBQVA7QUFBWUMsV0FBTyxFQUFFQSxPQUFyQjtBQUE4QkMsUUFBSSxFQUFFQSxJQUFwQztBQUEwQ2hCLFVBQU0sRUFBRSxTQUFsRDtBQUF3REMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQWxFLEdBQS9CLEVBQ0ljLFFBREosQ0FERjtBQUtELENBUDRCLENBQTdCO0FBU2VOLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU12QyxZQUFZLEdBQUcsZ0ZBQXJCO0FBQXNHO0FBQ3RHO0FBRUEsTUFBTThDLFlBQVksZ0JBQUdDLGtEQUFJLENBQUMsTUFBTTtBQUM5QixzQkFDRXJCLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFDekJwQixVQUFNLEVBQUUsSUFEaUI7QUFFekJ5QyxXQUFPLEVBQUUscUJBRmdCO0FBR3pCeEMsU0FBSyxFQUFFLElBSGtCO0FBSXpCeUMsU0FBSyxFQUFFLDRCQUprQjtBQUt6QkMsUUFBSSxFQUFFcEMsc0RBQU8sQ0FBQ0MsU0FMVztBQUtBYSxVQUFNLEVBQUUsU0FMUjtBQUtjQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFMeEIsR0FBM0IsZUFPSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUFFd0IsS0FBQyxFQUFFLHNQQUFMO0FBQWdSdkIsVUFBTSxFQUFFLFNBQXhSO0FBQThSQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBeFMsR0FBNUIsQ0FQSixDQURGO0FBV0QsQ0Fad0IsQ0FBekI7QUFjZWUsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTTlDLFlBQVksR0FBRyxpRkFBckI7QUFBdUc7QUFDdkc7QUFFQSxNQUFNb0QsYUFBYSxnQkFBR0wsa0RBQUksQ0FBQyxNQUFNO0FBQy9CLHNCQUNFckIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUN6QnBCLFVBQU0sRUFBRSxJQURpQjtBQUV6QnlDLFdBQU8sRUFBRSxxQkFGZ0I7QUFHekJ4QyxTQUFLLEVBQUUsSUFIa0I7QUFJekJ5QyxTQUFLLEVBQUUsNEJBSmtCO0FBS3pCQyxRQUFJLEVBQUVwQyxzREFBTyxDQUFDQyxTQUxXO0FBS0FhLFVBQU0sRUFBRSxTQUxSO0FBS2NDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUx4QixHQUEzQixlQU9JTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUV3QixLQUFDLEVBQUUsdVBBQUw7QUFBaVJ2QixVQUFNLEVBQUUsU0FBelI7QUFBK1JDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6UyxHQUE1QixDQVBKLENBREY7QUFXRCxDQVp5QixDQUExQjtBQWNlcUIsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTXBELFlBQVksR0FBRyxrRkFBckI7QUFBd0c7QUFDeEc7QUFFQSxNQUFNcUQsY0FBYyxnQkFBR04sa0RBQUksQ0FBQyxNQUFNO0FBQ2hDLHNCQUNFckIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixLQUFwQixFQUEyQjtBQUN6QnVCLFFBQUksRUFBRXBDLHNEQUFPLENBQUN3QyxtQkFEVztBQUV6Qi9DLFVBQU0sRUFBRSxHQUZpQjtBQUd6QkMsU0FBSyxFQUFFLEdBSGtCO0FBSXpCd0MsV0FBTyxFQUFFLFdBSmdCO0FBS3pCQyxTQUFLLEVBQUUsNEJBTGtCO0FBS1lyQixVQUFNLEVBQUUsU0FMcEI7QUFLMEJDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUxwQyxHQUEzQixlQU9JTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUV3QixLQUFDLEVBQUUsZUFBTDtBQUF1QkQsUUFBSSxFQUFFLE1BQTdCO0FBQXFDdEIsVUFBTSxFQUFFLFNBQTdDO0FBQW1EQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBN0QsR0FBNUIsQ0FQSixlQVFJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE1BQXBCLEVBQTRCO0FBQUV3QixLQUFDLEVBQUUsbU5BQUw7QUFBcVB2QixVQUFNLEVBQUUsU0FBN1A7QUFBbVFDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUE3USxHQUE1QixDQVJKLENBREY7QUFZRCxDQWIwQixDQUEzQjtBQWVlc0IsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTXJELFlBQVksR0FBRyw2RUFBckI7QUFBbUc7QUFDbkc7QUFNQSxNQUFNdUQsU0FBUyxnQkFBR1Isa0RBQUksQ0FBRU4sS0FBRCxJQUFXO0FBQ2hDLFFBQU07QUFBQzVCO0FBQUQsTUFBVTRCLEtBQWhCO0FBQ0Esc0JBQ0VmLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFDekJwQixVQUFNLEVBQUUsSUFEaUI7QUFFekJ5QyxXQUFPLEVBQUUscUJBRmdCO0FBR3pCeEMsU0FBSyxFQUFFLElBSGtCO0FBSXpCeUMsU0FBSyxFQUFFLDRCQUprQjtBQUt6QkMsUUFBSSxFQUFFckMsS0FBSyxJQUFJQyxzREFBTyxDQUFDQyxTQUxFO0FBS1NhLFVBQU0sRUFBRSxTQUxqQjtBQUt1QkMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBTGpDLEdBQTNCLGVBT0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEI7QUFBRXdCLEtBQUMsRUFBRSw4RUFBTDtBQUF3RnZCLFVBQU0sRUFBRSxTQUFoRztBQUFzR0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQWhILEdBQTVCLENBUEosQ0FERjtBQVdELENBYnFCLENBQXRCO0FBZWV3Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxNQUFNdkQsWUFBWSxHQUFHLDBFQUFyQjtBQUFnRztBQUNoRztBQUVBOztBQU9BLE1BQU13RCxZQUFZLEdBQUlmLEtBQUQsSUFBVztBQUM5QixRQUFNO0FBQUNnQixhQUFEO0FBQVlDO0FBQVosTUFBeUJqQixLQUEvQjtBQUNBLHNCQUNFZiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ0MsNkNBQXBCO0FBQTRCQyxhQUFTLEVBQUU7QUFBdkMsS0FBb0VILFNBQXBFO0FBQStFN0IsVUFBTSxFQUFFLFNBQXZGO0FBQTZGQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBdkcsTUFDSTJCLFNBQVMsQ0FBQ0csR0FBVixDQUFjLENBQUM7QUFBQ0MsU0FBRDtBQUFRbkI7QUFBUixHQUFELEVBQW1Cb0IsR0FBbkIsa0JBQ2RyQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcUMsaURBQXBCLEVBQThCO0FBQUVDLE9BQUcsRUFBRUYsR0FBUDtBQUFZRCxTQUFLLEVBQUVBLEtBQW5CO0FBQTBCbkIsV0FBTyxFQUFFQSxPQUFuQztBQUE0Q2YsVUFBTSxFQUFFLFNBQXBEO0FBQTBEQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBcEUsR0FBOUIsQ0FEQSxDQURKLENBREY7QUFPRCxDQVREOztBQVdleUIsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTXhELFlBQVksR0FBRywrRUFBckI7QUFBcUc7QUFDckc7QUFDQTtBQUNBO0FBRUE7O0FBT0EsTUFBTWtFLFVBQVUsR0FBSXpCLEtBQUQsSUFBVztBQUM1QixRQUFNO0FBQUMwQixRQUFEO0FBQU9DO0FBQVAsTUFBZ0IzQixLQUFLLElBQUksRUFBL0I7QUFDQSxRQUFNLENBQUM0QixNQUFELEVBQVNDLFNBQVQsSUFBc0JDLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCRixzREFBUSxDQUFDLEVBQUQsQ0FBcEM7QUFDQSxRQUFNLENBQUNHLE1BQUQsRUFBU0MsU0FBVCxJQUFzQkosc0RBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTSxDQUFDSyxPQUFELEVBQVVDLFVBQVYsSUFBd0JOLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU0sQ0FBQ08sT0FBRCxFQUFVQyxVQUFWLElBQXdCUixzREFBUSxDQUFDUyxTQUFELENBQXRDO0FBQ0EsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JYLHNEQUFRLENBQUNTLFNBQUQsQ0FBcEM7QUFDQSxRQUFNRyxTQUFTLEdBQUdDLHlFQUFZLEVBQTlCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHbEIsSUFBSSxDQUFDbUIsdUJBQW5CO0FBQ0EsUUFBTTtBQUFDQyxTQUFEO0FBQVFDO0FBQVIsTUFBaUJuQixNQUFNLElBQUksRUFBakM7QUFDQSxRQUFNb0IsVUFBVSxHQUFHLEVBQW5CO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDL0IsUUFBSWpCLE1BQU0sR0FBR2tCLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxLQUFLLEdBQUdDLFVBQWpCLENBQWIsRUFBMkM7QUFDekNkLGVBQVMsQ0FBQ0QsTUFBTSxHQUFHZSxVQUFWLENBQVQ7QUFDRDtBQUNGLEdBSnlCLEVBSXZCLENBQUNELEtBQUQsRUFBUWQsTUFBUixDQUp1QixDQUExQjtBQU1BLFFBQU1vQixNQUFNLEdBQUdILHlEQUFXLENBQUMsTUFBTTtBQUMvQixRQUFJakIsTUFBTSxJQUFJZSxVQUFkLEVBQTBCO0FBQ3hCZCxlQUFTLENBQUNELE1BQU0sR0FBR2UsVUFBVixDQUFUO0FBQ0Q7QUFDRixHQUp5QixFQUl2QixDQUFDRCxLQUFELEVBQVFkLE1BQVIsQ0FKdUIsQ0FBMUI7QUFNQXFCLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxXQUFmLEdBQTZCO0FBQzNCbkIsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxZQUFNb0IsT0FBTyxHQUFHO0FBQ2RDLGNBQU0sRUFBRSxLQURNO0FBRWRDLGNBQU0sRUFBRTtBQUNOQyxlQUFLLEVBQUVYLFVBREQ7QUFFTlksa0JBQVEsRUFBRXZCLE9BRko7QUFHTndCLG1CQUFTLEVBQUVyQixNQUhMO0FBSU5QO0FBSk07QUFGTSxPQUFoQjtBQVNBLFlBQU07QUFBQzZCO0FBQUQsVUFBUyxNQUFNcEIsU0FBUyxDQUFDcUIsV0FBVixDQUNsQixTQUFRbkIsS0FBTSx5QkFESSxFQUVuQlksT0FGbUIsQ0FBckI7QUFJQSxZQUFNO0FBQUNNLFlBQUksRUFBRS9CO0FBQVAsVUFBaUIsTUFBTVcsU0FBUyxDQUFDcUIsV0FBVixDQUF1QixTQUFRbkIsS0FBTSxTQUFyQyxFQUErQztBQUMxRWEsY0FBTSxFQUFFLEtBRGtFO0FBRTFFQyxjQUFNLEVBQUU7QUFDTk0scUJBQVcsRUFBRTtBQURQO0FBRmtFLE9BQS9DLENBQTdCO0FBT0FuQyxlQUFTLENBQUNpQyxJQUFELENBQVQ7QUFDQTlCLGVBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0FLLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBRURtQixlQUFXO0FBQ1osR0E3QlEsRUE2Qk4sQ0FBQ2xCLE9BQUQsRUFBVUcsTUFBVixFQUFrQlAsTUFBbEIsRUFBMEJQLElBQTFCLENBN0JNLENBQVQ7QUErQkEsTUFBSVMsT0FBSixFQUFhLG9CQUFPbEQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitFLHFFQUFwQixFQUFpQztBQUFDOUUsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQWpDLENBQVA7QUFFYixzQkFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmdGLDBEQUFwQixFQUE0QjtBQUMxQnBCLFNBQUssRUFBRUEsS0FBSyxJQUFJLEVBRFU7QUFFMUJDLFNBQUssRUFBRUEsS0FGbUI7QUFHMUJFLFVBQU0sRUFBRUEsTUFIa0I7QUFJMUJJLFVBQU0sRUFBRUEsTUFKa0I7QUFLMUJNLFNBQUssRUFBRVgsVUFMbUI7QUFNMUJmLFVBQU0sRUFBRUEsTUFOa0I7QUFPMUJGLFVBQU0sRUFBRUEsTUFQa0I7QUFRMUJPLGNBQVUsRUFBRUEsVUFSYztBQVMxQkQsV0FBTyxFQUFFQSxPQVRpQjtBQVUxQlYsU0FBSyxFQUFFQSxLQVZtQjtBQVcxQmMsYUFBUyxFQUFFQSxTQVhlO0FBWTFCRCxVQUFNLEVBQUVBLE1BWmtCO0FBWVZyRCxVQUFNLEVBQUUsU0FaRTtBQVlJQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFaZCxHQUE1QixDQURGO0FBZ0JELENBMUVEOztBQTRFQSxNQUFNNkUsZUFBZSxHQUFJQyxLQUFELEtBQVk7QUFDbEN6QyxPQUFLLEVBQUV5QyxLQUFLLENBQUN6QztBQURxQixDQUFaLENBQXhCOztBQUllMEMsMEhBQU8sQ0FBQ0YsZUFBRCxFQUFrQixJQUFsQixDQUFQLENBQStCMUMsVUFBL0IsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQSxNQUFNbEUsWUFBWSxHQUFHLHNGQUFyQjtBQUE0RztBQUM1RztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFrQkEsTUFBTStHLGVBQWUsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBeEI7O0FBUUEsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmOztBQVNBLE1BQU1DLFNBQVMsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbEI7O0FBTUEsTUFBTUMsS0FBSyxHQUFHO0FBQUE7QUFBQTtBQUNaQyxZQUFVLEVBQUUsQ0FEQTtBQUVaM0csT0FBSyxFQUFFO0FBRkssR0FHVDRHLDhFQUhTLEVBQWQ7O0FBTUEsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmOztBQU1BLE1BQU1DLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFDZmxILGVBQWEsRUFBRSxLQURBO0FBRWZDLFlBQVUsRUFBRSxRQUZHO0FBR2Y2QixRQUFNLEVBQUUsb0JBSE87QUFJZi9CLFNBQU8sRUFBRTtBQUpNLEdBS1ppSCw4RUFMWSxFQUFqQjs7QUFRQSxNQUFNRyxTQUFTLEdBQUc7QUFBQTtBQUFBLEdBQVk7QUFDNUJDLFdBQVMsRUFBRSxNQURpQjtBQUU1QjNHLE9BQUssRUFBRUMsNkRBQU8sQ0FBQ0MsU0FGYTtBQUc1QkMsVUFBUSxFQUFFLEVBSGtCO0FBSTVCeUcsWUFBVSxFQUFFO0FBSmdCLENBQVosQ0FBbEI7O0FBT0EsTUFBTUMsV0FBVyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFwQjs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsa0ZBQU8xRixxRUFBUDtBQUFBO0FBQUEsR0FBb0I7QUFDcENwQixPQUFLLEVBQUVDLDZEQUFPLENBQUNDLFNBRHFCO0FBRXBDQyxVQUFRLEVBQUUsRUFGMEI7QUFHcENDLFlBQVUsRUFBRSxHQUh3QjtBQUlwQ3dHLFlBQVUsRUFBRSxNQUp3QjtBQUtwQ3ZILGlCQUFlLEVBQUVZLDZEQUFPLENBQUN3QixnQkFMVztBQU1wQzZFLFlBQVUsRUFBRSxDQU53QjtBQU9wQ1MsYUFBVyxFQUFFLENBUHVCO0FBUXBDcEgsT0FBSyxFQUFFLE1BUjZCO0FBU3BDMkIsY0FBWSxFQUFFLENBVHNCO0FBVXBDNUIsUUFBTSxFQUFFLEVBVjRCO0FBV3BDc0gsWUFBVSxFQUFFO0FBWHdCLENBQXBCLENBQWxCOztBQWNBLE1BQU1DLFdBQVcsR0FBRyxrRkFBTzdGLHFFQUFQO0FBQUE7QUFBQSxHQUFvQixDQUFDO0FBQUM4RjtBQUFELENBQUQsS0FBWTtBQUNsRCxTQUFPO0FBQ0x4SCxVQUFNLEVBQUUsRUFESDtBQUVMc0gsY0FBVSxFQUFFLE1BRlA7QUFHTHJILFNBQUssRUFBRSxFQUhGO0FBSUw0QixXQUFPLEVBQUUsQ0FKSjtBQUtMbEIsVUFBTSxFQUFFLENBTEg7QUFNTDhHLGNBQVUsRUFBRWxILDZEQUFPLENBQUN3QixnQkFOZjtBQU9MMkYsd0JBQW9CLEVBQUVGLElBQUksR0FBRyxDQUFILEdBQU8sQ0FQNUI7QUFRTEcsMkJBQXVCLEVBQUVILElBQUksR0FBRyxDQUFILEdBQU8sQ0FSL0I7QUFTTEksMEJBQXNCLEVBQUVKLElBQUksR0FBRyxDQUFILEdBQU8sQ0FUOUI7QUFVTEssdUJBQW1CLEVBQUVMLElBQUksR0FBRyxDQUFILEdBQU87QUFWM0IsR0FBUDtBQVlELENBYm1CLENBQXBCOztBQWVBLE1BQU1NLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFDZm5ILFFBQU0sRUFBRSxRQURPO0FBRWZrQixTQUFPLEVBQUUsT0FGTTtBQUdmbkIsWUFBVSxFQUFFLEdBSEc7QUFJZnFILFVBQVEsRUFBRTtBQUpLLEdBS1psQiw4RUFMWSxFQUFqQjs7QUFRQSxNQUFNbUIsRUFBRSxHQUFHO0FBQUE7QUFBQSxHQUFXO0FBQ3BCaEksUUFBTSxFQUFFLENBRFk7QUFFcEJDLE9BQUssRUFBRSxNQUZhO0FBR3BCTixpQkFBZSxFQUFFWSw2REFBTyxDQUFDMEg7QUFITCxDQUFYLENBQVg7O0FBTUEsTUFBTUMsa0JBQWtCLEdBQUcsa0ZBQU9DLGtFQUFQO0FBQUE7QUFBQSxHQUFhO0FBQ3RDdkksU0FBTyxFQUFFLE9BRDZCO0FBRXRDVSxPQUFLLEVBQUVDLDZEQUFPLENBQUM2SCxTQUZ1QjtBQUd0Q2YsYUFBVyxFQUFFLEVBSHlCO0FBSXRDVCxZQUFVLEVBQUUsQ0FKMEI7QUFLdENuRyxVQUFRLEVBQUU7QUFMNEIsQ0FBYixDQUEzQjs7QUFRQSxNQUFNMkYsTUFBTSxHQUFJbEUsS0FBRCxJQUFXO0FBQ3hCLFFBQU07QUFDSjhDLFNBREk7QUFFSkMsU0FGSTtBQUdKRSxVQUhJO0FBSUpJLFVBSkk7QUFLSk0sU0FMSTtBQU1KMUIsVUFOSTtBQU9KRixVQVBJO0FBUUpPLGNBUkk7QUFTSkcsYUFUSTtBQVVKSixXQVZJO0FBV0pHLFVBWEk7QUFZSmI7QUFaSSxNQWFGM0IsS0FiSjtBQWNBLFFBQU1tRyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCO0FBRUEsUUFBTUMsU0FBUyxHQUFHO0FBQUNoRixTQUFLLGVBQUVwQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNEcsRUFBcEIsRUFBd0I7QUFBQzNHLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBeEI7QUFBUixHQUFsQjtBQUVBLFFBQU1nSCxVQUFVLEdBQUd2RSxNQUFNLENBQUNYLEdBQVAsQ0FBWW1GLENBQUQsS0FBUTtBQUNwQ2xGLFNBQUssRUFBRWdCLE9BQU8sS0FBS2tFLENBQUMsQ0FBQ0MsRUFBZCxnQkFBbUJ2SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMEcsUUFBcEIsRUFBOEI7QUFBQ3pHLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUdpSCxDQUFDLENBQUNFLElBQXJHLENBQW5CLEdBQWdJRixDQUFDLENBQUNFLElBRHJHO0FBRXBDdkcsV0FBTyxFQUFFLE1BQU1vQyxVQUFVLENBQUVvRSxJQUFELElBQVdBLElBQUksS0FBS0gsQ0FBQyxDQUFDQyxFQUFYLEdBQWdCakUsU0FBaEIsR0FBNEJnRSxDQUFDLENBQUNDLEVBQTFDO0FBRlcsR0FBUixDQUFYLENBQW5COztBQUlBLE1BQUluRSxPQUFKLEVBQWE7QUFDWGlFLGNBQVUsQ0FBQ0ssT0FBWCxDQUFtQk4sU0FBbkI7QUFDQUMsY0FBVSxDQUFDSyxPQUFYLENBQW1CO0FBQUN0RixXQUFLLEVBQUUsY0FBUjtBQUF3Qm5CLGFBQU8sRUFBRSxNQUFNb0MsVUFBVSxDQUFDQyxTQUFEO0FBQWpELEtBQW5CO0FBQ0Q7O0FBRUQsUUFBTXFFLFdBQVcsR0FBR2pGLEtBQUssQ0FBQ1AsR0FBTixDQUFXeUYsQ0FBRCxLQUFRO0FBQ3BDeEYsU0FBSyxFQUFFbUIsTUFBTSxLQUFLcUUsQ0FBQyxDQUFDTCxFQUFiLGdCQUFrQnZILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IwRyxRQUFwQixFQUE4QjtBQUFDekcsWUFBTSxFQUFFLFNBQVQ7QUFBZUMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUF6QixLQUE5QixFQUFtR3VILENBQUMsQ0FBQ0osSUFBckcsQ0FBbEIsR0FBK0hJLENBQUMsQ0FBQ0osSUFEcEc7QUFFcEN2RyxXQUFPLEVBQUUsTUFBTXVDLFNBQVMsQ0FBRWlFLElBQUQsSUFBV0EsSUFBSSxLQUFLRyxDQUFDLENBQUNMLEVBQVgsR0FBZ0JqRSxTQUFoQixHQUE0QnNFLENBQUMsQ0FBQ0wsRUFBMUM7QUFGWSxHQUFSLENBQVYsQ0FBcEI7O0FBSUEsTUFBSWhFLE1BQUosRUFBWTtBQUNWb0UsZUFBVyxDQUFDRCxPQUFaLENBQW9CTixTQUFwQjtBQUNBTyxlQUFXLENBQUNELE9BQVosQ0FBb0I7QUFBQ3RGLFdBQUssRUFBRSxjQUFSO0FBQXdCbkIsYUFBTyxFQUFFLE1BQU11QyxTQUFTLENBQUNGLFNBQUQ7QUFBaEQsS0FBcEI7QUFDRDs7QUFFRCxRQUFNO0FBQ0p1RSxjQUFVLEVBQUVDLGVBRFI7QUFFSkMsYUFBUyxFQUFFQyxjQUZQO0FBR0pqRyxhQUFTLEVBQUVrRyxjQUhQO0FBSUpDLGdCQUFZLEVBQUVDO0FBSlYsTUFLRkMscUVBQU8sQ0FBQ0Msb0VBQVksQ0FBQ0MsV0FBZCxFQUEyQjtBQUNwQ0MsY0FBVSxFQUFFLElBRHdCO0FBRXBDQyxxQkFBaUIsRUFBRTtBQUFDMUosV0FBSyxFQUFFO0FBQVI7QUFGaUIsR0FBM0IsQ0FMWDtBQVVBLFFBQU07QUFDSitJLGNBQVUsRUFBRVksWUFEUjtBQUVKVixhQUFTLEVBQUVXLFdBRlA7QUFHSjNHLGFBQVMsRUFBRTRHLFdBSFA7QUFJSlQsZ0JBQVksRUFBRVU7QUFKVixNQUtGUixxRUFBTyxDQUFDQyxvRUFBWSxDQUFDQyxXQUFkLEVBQTJCO0FBQ3BDQyxjQUFVLEVBQUUsSUFEd0I7QUFFcENDLHFCQUFpQixFQUFFO0FBQUMxSixXQUFLLEVBQUU7QUFBUjtBQUZpQixHQUEzQixDQUxYO0FBVUEsUUFBTStKLFVBQVUsZ0JBQ2Q3SSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0YsZUFBcEIsRUFBcUM7QUFBQ25GLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUFyQyxlQUNJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNkksNkVBQXBCLEVBQStCO0FBQUM1SSxVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBL0IsRUFBb0csU0FBcEcsQ0FESixlQUVJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNkksNkVBQXBCLEVBQStCO0FBQUM1SSxVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBL0IsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkQsNENBQUssQ0FBQytJLFFBQTFCLEVBQW9DLElBQXBDLGVBQ0UvSSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMEYsTUFBcEIsRUFBNEI7QUFBQ3pGLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUE1QixFQUFpRyxZQUFqRyxDQURGLGVBRUVMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IrSSw0RUFBcEIsRUFBdUM7QUFBRWhJLE9BQUcsRUFBRWdILGNBQVA7QUFBdUIvRyxXQUFPLEVBQUVrSCxpQkFBaEM7QUFBbURqSCxRQUFJLEVBQUUsUUFBekQ7QUFBbUVoQixVQUFNLEVBQUUsU0FBM0U7QUFBaUZDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUEzRixHQUF2QyxlQUNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ0osMEVBQXBCLEVBQWdDO0FBQUU5SixTQUFLLEVBQUVpRSxPQUFPLEdBQUdoRSw2REFBTyxDQUFDQyxTQUFYLEdBQXVCRCw2REFBTyxDQUFDNkgsU0FBL0M7QUFBMEQvRyxVQUFNLEVBQUUsU0FBbEU7QUFBd0VDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUFsRixHQUFoQyxDQURGLENBRkYsQ0FERixDQUZKLGVBVUlMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2SSw2RUFBcEIsRUFBK0I7QUFBRUksU0FBSyxFQUFFLE1BQVQ7QUFBaUJoSixVQUFNLEVBQUUsU0FBekI7QUFBK0JDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QyxHQUEvQixlQUNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw0Q0FBSyxDQUFDK0ksUUFBMUIsRUFBb0MsSUFBcEMsZUFDRS9JLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IwRixNQUFwQixFQUE0QjtBQUFDekYsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQTVCLEVBQWlHLGNBQWpHLENBREYsZUFFRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitJLDRFQUFwQixFQUF1QztBQUFFaEksT0FBRyxFQUFFMEgsV0FBUDtBQUFvQnpILFdBQU8sRUFBRTJILGNBQTdCO0FBQTZDMUgsUUFBSSxFQUFFLFFBQW5EO0FBQTZEaEIsVUFBTSxFQUFFLFNBQXJFO0FBQTJFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBckYsR0FBdkMsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmdKLDBFQUFwQixFQUFnQztBQUFFOUosU0FBSyxFQUFFb0UsTUFBTSxHQUFHbkUsNkRBQU8sQ0FBQ0MsU0FBWCxHQUF1QkQsNkRBQU8sQ0FBQzZILFNBQTlDO0FBQXlEL0csVUFBTSxFQUFFLFNBQWpFO0FBQXVFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBakYsR0FBaEMsQ0FERixDQUZGLENBREYsQ0FWSixlQWtCSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZJLDZFQUFwQixFQUErQjtBQUFDNUksVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQS9CLEVBQW9HLGNBQXBHLENBbEJKLGVBbUJJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNkksNkVBQXBCLEVBQStCO0FBQUVJLFNBQUssRUFBRSxRQUFUO0FBQW1CaEosVUFBTSxFQUFFLFNBQTNCO0FBQWlDQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBM0MsR0FBL0IsRUFBc0gsUUFBdEgsQ0FuQkosZUFvQklMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2SSw2RUFBcEIsRUFBK0I7QUFBRUksU0FBSyxFQUFFLFFBQVQ7QUFBbUJoSixVQUFNLEVBQUUsU0FBM0I7QUFBaUNDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUEzQyxHQUEvQixFQUFzSCxVQUF0SCxDQXBCSixlQXFCSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZJLDZFQUFwQixFQUErQjtBQUFDNUksVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQS9CLEVBQW9HLE9BQXBHLENBckJKLENBREY7QUEwQkEsUUFBTThJLFVBQVUsZ0JBQ2RuSiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcUYsTUFBcEIsRUFBNEI7QUFBQ3BGLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUE1QixlQUNJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNEYsU0FBcEIsRUFBK0I7QUFBQzNGLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUEvQixFQUFvR3lELEtBQXBHLEVBQTJHLGtCQUEzRyxDQURKLEVBRUlBLEtBQUssR0FBR1ksS0FBUixpQkFDQTFFLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JzRixTQUFwQixFQUErQjtBQUFDckYsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQS9CLGVBQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JtRyxXQUFwQixFQUFpQztBQUFFQyxRQUFJLEVBQUUsSUFBUjtBQUFjcEYsV0FBTyxFQUFFbUQsTUFBdkI7QUFBK0JnRixZQUFRLEVBQUVwRyxNQUFNLEdBQUcwQixLQUFsRDtBQUF5RHhFLFVBQU0sRUFBRSxTQUFqRTtBQUF1RUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQWpGLEdBQWpDLGVBQ0VMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvSiw0RUFBcEIsRUFBbUM7QUFBQ25KLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUFuQyxDQURGLENBREosZUFJSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmdHLFNBQXBCLEVBQStCO0FBQUMvRixVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBL0IsRUFBcUcsR0FBRSxDQUFDMkMsTUFBTSxHQUFHMEIsS0FBVCxHQUFpQixDQUFsQixFQUFxQjRFLE9BQXJCLEVBQStCLE1BQUtwRixJQUFJLENBQUNxRixJQUFMLENBQVV6RixLQUFLLEdBQUdZLEtBQWxCLENBQXlCLEVBQXBLLENBSkosZUFLSTFFLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JtRyxXQUFwQixFQUFpQztBQUFFbkYsV0FBTyxFQUFFK0MsTUFBWDtBQUFtQm9GLFlBQVEsRUFBRXBHLE1BQU0sSUFBSWtCLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxLQUFLLEdBQUdZLEtBQWpCLENBQXZDO0FBQWdFeEUsVUFBTSxFQUFFLFNBQXhFO0FBQThFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBeEYsR0FBakMsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnVKLDZFQUFwQixFQUFvQztBQUFDdEosVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQXBDLENBREYsQ0FMSixDQUhKLENBREY7QUFpQkEsUUFBTW9KLGlCQUFpQixHQUFHO0FBQ3hCQyxRQUFJLEVBQUUsSUFEa0I7QUFFeEJDLFNBQUssZUFBRTNKLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IySiw0RkFBcEIsRUFBdUM7QUFBRXpLLFdBQUssRUFBRTBLLHdFQUFjLENBQUNDLFdBQXhCO0FBQXFDNUosWUFBTSxFQUFFLFNBQTdDO0FBQW1EQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQTdELEtBQXZDLEVBQWdKLFFBQWhKLENBRmlCO0FBR3hCMEosUUFBSSxlQUFFL0osNENBQUssQ0FBQ0MsYUFBTixDQUFvQjJKLDRGQUFwQixFQUF1QztBQUFFekssV0FBSyxFQUFFMEssd0VBQWMsQ0FBQ0csU0FBeEI7QUFBbUM5SixZQUFNLEVBQUUsU0FBM0M7QUFBaURDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBM0QsS0FBdkMsRUFBOEksY0FBOUk7QUFIa0IsR0FBMUI7QUFNQSxRQUFNNEosUUFBUSxHQUFHcEcsS0FBSyxDQUFDMUIsR0FBTixDQUNmLENBQUM7QUFDQ29GLE1BQUUsRUFBRTJDLE1BREw7QUFFQ0MsZ0JBQVksRUFBRUMsV0FGZjtBQUdDQyxnQkFBWSxFQUFFQyxXQUhmO0FBSUNDLFdBSkQ7QUFLQ0MsU0FBSyxFQUFFaEQsSUFMUjtBQU1DaUQsVUFORDtBQU9DQztBQVBELEdBQUQsS0FRTTtBQUNKLFFBQUlDLGVBQWUsR0FBRyxNQUF0QjtBQUNBQSxtQkFBZSxHQUFHLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUJDLFFBQXJCLENBQThCSCxNQUE5QixJQUF3QyxZQUF4QyxHQUF1REUsZUFBekU7QUFDQUEsbUJBQWUsR0FBRyxDQUFDLEtBQUQsRUFBUUMsUUFBUixDQUFpQkgsTUFBakIsSUFBMkIsV0FBM0IsR0FBeUNFLGVBQTNEO0FBQ0Esd0JBQ0UzSyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb0YsZUFBcEIsRUFBcUM7QUFDbkM5QyxTQUFHLEVBQUUySCxNQUQ4QjtBQUVuQ2pKLGFBQU8sRUFBRSxNQUNQaUcsT0FBTyxDQUFDMkQsSUFBUixDQUFhO0FBQ1hDLGdCQUFRLEVBQUcsaUJBQWdCWixNQUFPLFFBRHZCO0FBRVgvRSxhQUFLLEVBQUU7QUFBQzRGLGtCQUFRLEVBQUU7QUFBWDtBQUZJLE9BQWIsQ0FIaUM7QUFPakM3SyxZQUFNLEVBQUUsU0FQeUI7QUFPbkJDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFQUyxLQUFyQyxlQVNJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUc2SixNQUFuRyxDQVRKLGVBVUlsSyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUdtSCxJQUFuRyxDQVZKLGVBV0l4SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitGLFdBQXBCLEVBQWlDO0FBQUM5RixZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQWpDLGVBQ0VMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IrSyxtRUFBcEIsRUFBNEI7QUFBRUMsY0FBUSxFQUFFQyw0RUFBVyxDQUFDZCxXQUFELENBQXZCO0FBQXNDakwsV0FBSyxFQUFFZ00saUZBQWUsQ0FBQ2YsV0FBRCxDQUE1RDtBQUEyRWxLLFlBQU0sRUFBRSxTQUFuRjtBQUF5RkMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUFuRyxLQUE1QixDQURGLGVBRUVMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J1RixLQUFwQixFQUEyQjtBQUFDdEYsWUFBTSxFQUFFLFNBQVQ7QUFBZUMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUF6QixLQUEzQixFQUFnRytKLFdBQWhHLENBRkYsQ0FERixDQVhKLGVBaUJJcEssNENBQUssQ0FBQ0MsYUFBTixDQUFvQjJGLFFBQXBCLEVBQThCO0FBQUMxRixZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQTlCLEVBQW1HK0ssNENBQUssQ0FBQ2QsV0FBRCxDQUFMLENBQW1CZSxNQUFuQixDQUEwQixZQUExQixDQUFuRyxDQWpCSixlQWtCSXJMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IyRixRQUFwQixFQUE4QjtBQUM5QjBGLFdBQUssRUFBRTtBQUNMQyxxQkFBYSxFQUFFWixlQURWO0FBRUxsTSxlQUFPLEVBQUUsY0FGSjtBQUdMK00sbUJBQVcsRUFBRSxRQUhSO0FBSUwxTSxhQUFLLEVBQUU7QUFKRixPQUR1QjtBQU0zQm9CLFlBQU0sRUFBRSxTQU5tQjtBQU1iQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBTkcsS0FBOUIsRUFRRW9LLE1BUkYsQ0FsQkosZUE0Qkl6Syw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFDOUIwRixXQUFLLEVBQUU7QUFDTDdNLGVBQU8sRUFBRSxNQURKO0FBRUwrTSxtQkFBVyxFQUFFLFFBRlI7QUFHTHJNLGFBQUssRUFBRUMsNkRBQU8sQ0FBQzZIO0FBSFYsT0FEdUI7QUFLM0IvRyxZQUFNLEVBQUUsU0FMbUI7QUFLYkMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUxHLEtBQTlCLEVBT0VxSyxVQUFVLEdBQUcsQ0FBYixpQkFDQTFLLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUMrSSxRQUExQixFQUFvQyxJQUFwQyxFQUNJMkIsVUFESixlQUVJMUssNENBQUssQ0FBQ0MsYUFBTixDQUFvQjhHLGtCQUFwQixFQUF3QztBQUFDN0csWUFBTSxFQUFFLFNBQVQ7QUFBZUMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUF6QixLQUF4QyxFQUE2RyxTQUE3RyxDQUZKLENBUkYsQ0E1QkosZUEwQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IyRixRQUFwQixFQUE4QjtBQUM5QjBGLFdBQUssRUFBRTtBQUNMN00sZUFBTyxFQUFFLE1BREo7QUFFTCtNLG1CQUFXLEVBQUU7QUFGUixPQUR1QjtBQUkzQnRMLFlBQU0sRUFBRSxTQUptQjtBQUliQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBSkcsS0FBOUIsRUFNRW9KLGlCQUFpQixDQUFDYyxPQUFELENBTm5CLENBMUNKLENBREY7QUFxREQsR0FsRWMsQ0FBakI7QUFxRUEsc0JBQ0V2Syw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw0Q0FBSyxDQUFDK0ksUUFBMUIsRUFBb0MsSUFBcEMsZUFDSS9JLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J3TCwyRUFBcEIsRUFBOEI7QUFDOUI1QyxjQUFVLEVBQUVBLFVBRGtCO0FBRTlCb0IsWUFBUSxFQUFFQSxRQUZvQjtBQUc5QmQsY0FBVSxFQUFFQSxVQUhrQjtBQUk5QnVDLGFBQVMsZUFDUDFMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JOLG9FQUFwQixFQUErQjtBQUM3QkMsU0FBRyxlQUFFSSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMEwsK0VBQXBCLEVBQXFDO0FBQUN6TCxjQUFNLEVBQUUsU0FBVDtBQUFlQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isb0JBQVUsRUFBRTtBQUFyQztBQUF6QixPQUFyQyxDQUR3QjtBQUU3QlIsWUFBTSxFQUFFLGdCQUZxQjtBQUc3QkMsZUFBUyxFQUFFLDhCQUhrQjtBQUdjSSxZQUFNLEVBQUUsU0FIdEI7QUFHNEJDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFIdEMsS0FBL0IsQ0FMNEI7QUFVNUJILFVBQU0sRUFBRSxTQVZvQjtBQVVkQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFWSSxHQUE5QixDQURKLEVBYUl5SCxlQUFlLGVBQUM5SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNkIsdUVBQXBCLEVBQWtDO0FBQUVDLGFBQVMsRUFBRWtHLGNBQWI7QUFBNkJqRyxhQUFTLEVBQUVxRixVQUF4QztBQUFvRG5ILFVBQU0sRUFBRSxTQUE1RDtBQUFrRUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQTVFLEdBQWxDLENBQUQsQ0FibkIsRUFjSW9JLFlBQVksZUFBQ3pJLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2Qix1RUFBcEIsRUFBa0M7QUFBRUMsYUFBUyxFQUFFNEcsV0FBYjtBQUEwQjNHLGFBQVMsRUFBRTJGLFdBQXJDO0FBQWtEekgsVUFBTSxFQUFFLFNBQTFEO0FBQWdFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBMUUsR0FBbEMsQ0FBRCxDQWRoQixDQURGO0FBa0JELENBak1EOztBQW1NZTRFLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTTNHLFlBQVksR0FBRyx5RkFBckI7O0FBQWdILFNBQVNzTixjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUFFLE1BQUlDLGFBQWEsR0FBR3hJLFNBQXBCO0FBQStCLE1BQUl5SSxLQUFLLEdBQUdGLEdBQUcsQ0FBQyxDQUFELENBQWY7QUFBb0IsTUFBSUcsQ0FBQyxHQUFHLENBQVI7O0FBQVcsU0FBT0EsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLE1BQWYsRUFBdUI7QUFBRSxVQUFNQyxFQUFFLEdBQUdMLEdBQUcsQ0FBQ0csQ0FBRCxDQUFkO0FBQW1CLFVBQU1HLEVBQUUsR0FBR04sR0FBRyxDQUFDRyxDQUFDLEdBQUcsQ0FBTCxDQUFkO0FBQXVCQSxLQUFDLElBQUksQ0FBTDs7QUFBUSxRQUFJLENBQUNFLEVBQUUsS0FBSyxnQkFBUCxJQUEyQkEsRUFBRSxLQUFLLGNBQW5DLEtBQXNESCxLQUFLLElBQUksSUFBbkUsRUFBeUU7QUFBRSxhQUFPekksU0FBUDtBQUFtQjs7QUFBQyxRQUFJNEksRUFBRSxLQUFLLFFBQVAsSUFBbUJBLEVBQUUsS0FBSyxnQkFBOUIsRUFBZ0Q7QUFBRUosbUJBQWEsR0FBR0MsS0FBaEI7QUFBdUJBLFdBQUssR0FBR0ksRUFBRSxDQUFDSixLQUFELENBQVY7QUFBb0IsS0FBN0YsTUFBbUcsSUFBSUcsRUFBRSxLQUFLLE1BQVAsSUFBaUJBLEVBQUUsS0FBSyxjQUE1QixFQUE0QztBQUFFSCxXQUFLLEdBQUdJLEVBQUUsQ0FBQyxDQUFDLEdBQUdDLElBQUosS0FBYUwsS0FBSyxDQUFDTSxJQUFOLENBQVdQLGFBQVgsRUFBMEIsR0FBR00sSUFBN0IsQ0FBZCxDQUFWO0FBQTZETixtQkFBYSxHQUFHeEksU0FBaEI7QUFBNEI7QUFBRTs7QUFBQyxTQUFPeUksS0FBUDtBQUFlOztBQUFBO0FBQ25uQjtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU9BLE1BQU1PLGVBQWUsR0FBSXZMLEtBQUQsSUFBVztBQUNqQyxRQUFNO0FBQUMwQixRQUFEO0FBQU9DO0FBQVAsTUFBZ0IzQixLQUFLLElBQUksRUFBL0I7QUFDQSxRQUFNLENBQUMrQixNQUFELEVBQVNDLFNBQVQsSUFBc0JGLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU0sQ0FBQ0csTUFBRCxFQUFTQyxTQUFULElBQXNCSixzREFBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQSxRQUFNLENBQUNpQixLQUFELEVBQVF5SSxRQUFSLElBQW9CMUosc0RBQVEsQ0FBQyxDQUFELENBQWxDO0FBQ0EsUUFBTSxDQUFDSyxPQUFELEVBQVVDLFVBQVYsSUFBd0JOLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU0sQ0FBQ08sT0FBRCxFQUFVQyxVQUFWLElBQXdCUixzREFBUSxDQUFDUyxTQUFELENBQXRDO0FBQ0EsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JYLHNEQUFRLENBQUNTLFNBQUQsQ0FBcEM7QUFDQSxRQUFNRyxTQUFTLEdBQUdDLHlFQUFZLEVBQTlCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHbEIsSUFBSSxDQUFDbUIsdUJBQW5CO0FBQ0EsUUFBTUcsVUFBVSxHQUFHLEVBQW5CO0FBRUEsUUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDL0IsUUFBSWpCLE1BQU0sR0FBR2tCLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxLQUFLLEdBQUdDLFVBQWpCLENBQWIsRUFBMkM7QUFDekNkLGVBQVMsQ0FBQ0QsTUFBTSxHQUFHZSxVQUFWLENBQVQ7QUFDRDtBQUNGLEdBSnlCLEVBSXZCLENBQUNELEtBQUQsRUFBUWQsTUFBUixDQUp1QixDQUExQjtBQU1BLFFBQU1vQixNQUFNLEdBQUdILHlEQUFXLENBQUMsTUFBTTtBQUMvQixRQUFJakIsTUFBTSxJQUFJZSxVQUFkLEVBQTBCO0FBQ3hCZCxlQUFTLENBQUNELE1BQU0sR0FBR2UsVUFBVixDQUFUO0FBQ0Q7QUFDRixHQUp5QixFQUl2QixDQUFDRCxLQUFELEVBQVFkLE1BQVIsQ0FKdUIsQ0FBMUI7QUFNQXFCLHlEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlbUksV0FBZixHQUE2QjtBQUMzQnJKLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBRUEsWUFBTTtBQUFDc0osY0FBRDtBQUFTNUgsWUFBSSxFQUFFL0I7QUFBZixVQUF5QixNQUFNOEksY0FBYyxDQUFDLENBQUNuSSxTQUFELEVBQVksZ0JBQVosRUFBOEJpSixDQUFDLElBQUlBLENBQUMsQ0FBQzVILFdBQXJDLEVBQWtELE1BQWxELEVBQTBENkgsRUFBRSxJQUFJQSxFQUFFLENBQUUsU0FBUWhKLEtBQU0sU0FBaEIsRUFBMEI7QUFDOUlhLGNBQU0sRUFBRTtBQURzSSxPQUExQixDQUFsRSxDQUFELENBQW5EOztBQUlBLFVBQUlpSSxNQUFKLEVBQVk7QUFDVkcsZUFBTyxDQUFDQyxLQUFSLENBQWMsd0JBQWQsRUFBd0NKLE1BQXhDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSTNKLE1BQUosRUFBWTtBQUNWeUosa0JBQVEsQ0FBQ3pKLE1BQU0sQ0FBQ21KLE1BQVIsQ0FBUjtBQUNBbEosbUJBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0FLLG9CQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVEcUosZUFBVztBQUNaLEdBcEJRLEVBb0JOLENBQUNwSixPQUFELEVBQVVHLE1BQVYsRUFBa0JQLE1BQWxCLEVBQTBCUCxJQUExQixDQXBCTSxDQUFUO0FBc0JBcUssK0VBQWdCLENBQUMsb0NBQUQsQ0FBaEI7QUFFQSxNQUFJNUosT0FBSixFQUFhLG9CQUFPbEQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitFLHFFQUFwQixFQUFpQztBQUFDOUUsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQWpDLENBQVA7QUFFYixzQkFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjhNLCtEQUFwQixFQUFpQztBQUMvQmpKLFNBQUssRUFBRUEsS0FEd0I7QUFFL0JFLFVBQU0sRUFBRUEsTUFGdUI7QUFHL0JJLFVBQU0sRUFBRUEsTUFIdUI7QUFJL0JNLFNBQUssRUFBRVgsVUFKd0I7QUFLL0JmLFVBQU0sRUFBRUEsTUFMdUI7QUFNL0JGLFVBQU0sRUFBRUEsTUFOdUI7QUFPL0JPLGNBQVUsRUFBRUEsVUFQbUI7QUFRL0JELFdBQU8sRUFBRUEsT0FSc0I7QUFTL0JWLFNBQUssRUFBRUEsS0FUd0I7QUFVL0JjLGFBQVMsRUFBRUEsU0FWb0I7QUFXL0JELFVBQU0sRUFBRUEsTUFYdUI7QUFXZnJELFVBQU0sRUFBRSxTQVhPO0FBV0RDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQVhULEdBQWpDLENBREY7QUFlRCxDQWpFRDs7QUFtRUEsTUFBTTZFLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDekMsT0FBSyxFQUFFeUMsS0FBSyxDQUFDekM7QUFEcUIsQ0FBWixDQUF4Qjs7QUFJZTBDLDBIQUFPLENBQUNGLGVBQUQsRUFBa0IsSUFBbEIsQ0FBUCxDQUErQm9ILGVBQS9CLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBLE1BQU1oTyxZQUFZLEdBQUcsZ0dBQXJCO0FBQXNIO0FBQ3RIO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFpQkEsTUFBTStHLGVBQWUsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBeEI7O0FBUUEsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmOztBQVNBLE1BQU1DLFNBQVMsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbEI7O0FBTUEsTUFBTUMsS0FBSyxHQUFHO0FBQUE7QUFBQTtBQUNaQyxZQUFVLEVBQUUsQ0FEQTtBQUVaM0csT0FBSyxFQUFFO0FBRkssR0FHVDRHLDhFQUhTLEVBQWQ7O0FBTUEsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmOztBQU1BLE1BQU1DLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFDZmxILGVBQWEsRUFBRSxLQURBO0FBRWZDLFlBQVUsRUFBRSxRQUZHO0FBR2Y2QixRQUFNLEVBQUUsb0JBSE87QUFJZi9CLFNBQU8sRUFBRTtBQUpNLEdBS1ppSCw4RUFMWSxFQUFqQjs7QUFRQSxNQUFNRyxTQUFTLEdBQUc7QUFBQTtBQUFBLEdBQVk7QUFDNUJDLFdBQVMsRUFBRSxNQURpQjtBQUU1QjNHLE9BQUssRUFBRUMsNkRBQU8sQ0FBQ0MsU0FGYTtBQUc1QkMsVUFBUSxFQUFFLEVBSGtCO0FBSTVCeUcsWUFBVSxFQUFFO0FBSmdCLENBQVosQ0FBbEI7O0FBT0EsTUFBTUMsV0FBVyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFwQjs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsa0ZBQU8xRixxRUFBUDtBQUFBO0FBQUEsR0FBb0I7QUFDcENwQixPQUFLLEVBQUVDLDZEQUFPLENBQUNDLFNBRHFCO0FBRXBDQyxVQUFRLEVBQUUsRUFGMEI7QUFHcENDLFlBQVUsRUFBRSxHQUh3QjtBQUlwQ3dHLFlBQVUsRUFBRSxNQUp3QjtBQUtwQ3ZILGlCQUFlLEVBQUVZLDZEQUFPLENBQUN3QixnQkFMVztBQU1wQzZFLFlBQVUsRUFBRSxDQU53QjtBQU9wQ1MsYUFBVyxFQUFFLENBUHVCO0FBUXBDcEgsT0FBSyxFQUFFLE1BUjZCO0FBU3BDMkIsY0FBWSxFQUFFLENBVHNCO0FBVXBDNUIsUUFBTSxFQUFFLEVBVjRCO0FBV3BDc0gsWUFBVSxFQUFFO0FBWHdCLENBQXBCLENBQWxCOztBQWNBLE1BQU1DLFdBQVcsR0FBRyxrRkFBTzdGLHFFQUFQO0FBQUE7QUFBQSxHQUFvQixDQUFDO0FBQUM4RjtBQUFELENBQUQsS0FBWTtBQUNsRCxTQUFPO0FBQ0x4SCxVQUFNLEVBQUUsRUFESDtBQUVMc0gsY0FBVSxFQUFFLE1BRlA7QUFHTHJILFNBQUssRUFBRSxFQUhGO0FBSUw0QixXQUFPLEVBQUUsQ0FKSjtBQUtMbEIsVUFBTSxFQUFFLENBTEg7QUFNTDhHLGNBQVUsRUFBRWxILDZEQUFPLENBQUN3QixnQkFOZjtBQU9MMkYsd0JBQW9CLEVBQUVGLElBQUksR0FBRyxDQUFILEdBQU8sQ0FQNUI7QUFRTEcsMkJBQXVCLEVBQUVILElBQUksR0FBRyxDQUFILEdBQU8sQ0FSL0I7QUFTTEksMEJBQXNCLEVBQUVKLElBQUksR0FBRyxDQUFILEdBQU8sQ0FUOUI7QUFVTEssdUJBQW1CLEVBQUVMLElBQUksR0FBRyxDQUFILEdBQU87QUFWM0IsR0FBUDtBQVlELENBYm1CLENBQXBCOztBQWVBLE1BQU1NLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFDZm5ILFFBQU0sRUFBRSxRQURPO0FBRWZrQixTQUFPLEVBQUUsT0FGTTtBQUdmbkIsWUFBVSxFQUFFLEdBSEc7QUFJZnFILFVBQVEsRUFBRTtBQUpLLEdBS1psQiw4RUFMWSxFQUFqQjs7QUFRQSxNQUFNbUIsRUFBRSxHQUFHO0FBQUE7QUFBQSxHQUFXO0FBQ3BCaEksUUFBTSxFQUFFLENBRFk7QUFFcEJDLE9BQUssRUFBRSxNQUZhO0FBR3BCTixpQkFBZSxFQUFFWSw2REFBTyxDQUFDMEg7QUFITCxDQUFYLENBQVg7O0FBTUEsTUFBTWlHLFdBQVcsR0FBSWhNLEtBQUQsSUFBVztBQUM3QixRQUFNO0FBQ0orQyxTQURJO0FBRUpFLFVBRkk7QUFHSkksVUFISTtBQUlKTSxTQUpJO0FBS0oxQixVQUxJO0FBTUpGLFVBTkk7QUFPSk8sY0FQSTtBQVFKRyxhQVJJO0FBU0pKLFdBVEk7QUFVSkcsVUFWSTtBQVdKYjtBQVhJLE1BWUYzQixLQVpKO0FBYUEsUUFBTW1HLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFFQSxRQUFNQyxTQUFTLEdBQUc7QUFBQ2hGLFNBQUssZUFBRXBDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I0RyxFQUFwQixFQUF3QjtBQUFDM0csWUFBTSxFQUFFLFNBQVQ7QUFBZUMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUF6QixLQUF4QjtBQUFSLEdBQWxCO0FBRUEsUUFBTWdILFVBQVUsR0FBR3ZFLE1BQU0sQ0FBQ1gsR0FBUCxDQUFZbUYsQ0FBRCxLQUFRO0FBQ3BDbEYsU0FBSyxFQUFFZ0IsT0FBTyxLQUFLa0UsQ0FBQyxDQUFDQyxFQUFkLGdCQUFtQnZILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IwRyxRQUFwQixFQUE4QjtBQUFDekcsWUFBTSxFQUFFLFNBQVQ7QUFBZUMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUF6QixLQUE5QixFQUFtR2lILENBQUMsQ0FBQ0UsSUFBckcsQ0FBbkIsR0FBZ0lGLENBQUMsQ0FBQ0UsSUFEckc7QUFFcEN2RyxXQUFPLEVBQUUsTUFBTW9DLFVBQVUsQ0FBRW9FLElBQUQsSUFBV0EsSUFBSSxLQUFLSCxDQUFDLENBQUNDLEVBQVgsR0FBZ0JqRSxTQUFoQixHQUE0QmdFLENBQUMsQ0FBQ0MsRUFBMUM7QUFGVyxHQUFSLENBQVgsQ0FBbkI7O0FBSUEsTUFBSW5FLE9BQUosRUFBYTtBQUNYaUUsY0FBVSxDQUFDSyxPQUFYLENBQW1CTixTQUFuQjtBQUNBQyxjQUFVLENBQUNLLE9BQVgsQ0FBbUI7QUFBQ3RGLFdBQUssRUFBRSxjQUFSO0FBQXdCbkIsYUFBTyxFQUFFLE1BQU1vQyxVQUFVLENBQUNDLFNBQUQ7QUFBakQsS0FBbkI7QUFDRDs7QUFFRCxRQUFNcUUsV0FBVyxHQUFHakYsS0FBSyxDQUFDUCxHQUFOLENBQVd5RixDQUFELEtBQVE7QUFDcEN4RixTQUFLLEVBQUVtQixNQUFNLEtBQUtxRSxDQUFDLENBQUNMLEVBQWIsZ0JBQWtCdkgsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjBHLFFBQXBCLEVBQThCO0FBQUN6RyxZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQTlCLEVBQW1HdUgsQ0FBQyxDQUFDSixJQUFyRyxDQUFsQixHQUErSEksQ0FBQyxDQUFDSixJQURwRztBQUVwQ3ZHLFdBQU8sRUFBRSxNQUFNdUMsU0FBUyxDQUFFaUUsSUFBRCxJQUFXQSxJQUFJLEtBQUtHLENBQUMsQ0FBQ0wsRUFBWCxHQUFnQmpFLFNBQWhCLEdBQTRCc0UsQ0FBQyxDQUFDTCxFQUExQztBQUZZLEdBQVIsQ0FBVixDQUFwQjs7QUFJQSxNQUFJaEUsTUFBSixFQUFZO0FBQ1ZvRSxlQUFXLENBQUNELE9BQVosQ0FBb0JOLFNBQXBCO0FBQ0FPLGVBQVcsQ0FBQ0QsT0FBWixDQUFvQjtBQUFDdEYsV0FBSyxFQUFFLGNBQVI7QUFBd0JuQixhQUFPLEVBQUUsTUFBTXVDLFNBQVMsQ0FBQ0YsU0FBRDtBQUFoRCxLQUFwQjtBQUNEOztBQUVELFFBQU07QUFDSnVFLGNBQVUsRUFBRUMsZUFEUjtBQUVKQyxhQUFTLEVBQUVDLGNBRlA7QUFHSmpHLGFBQVMsRUFBRWtHLGNBSFA7QUFJSkMsZ0JBQVksRUFBRUM7QUFKVixNQUtGQyxxRUFBTyxDQUFDQyxvRUFBWSxDQUFDQyxXQUFkLEVBQTJCO0FBQ3BDQyxjQUFVLEVBQUUsSUFEd0I7QUFFcENDLHFCQUFpQixFQUFFO0FBQUMxSixXQUFLLEVBQUU7QUFBUjtBQUZpQixHQUEzQixDQUxYO0FBVUEsUUFBTTtBQUNKK0ksY0FBVSxFQUFFWSxZQURSO0FBRUpWLGFBQVMsRUFBRVcsV0FGUDtBQUdKM0csYUFBUyxFQUFFNEcsV0FIUDtBQUlKVCxnQkFBWSxFQUFFVTtBQUpWLE1BS0ZSLHFFQUFPLENBQUNDLG9FQUFZLENBQUNDLFdBQWQsRUFBMkI7QUFDcENDLGNBQVUsRUFBRSxJQUR3QjtBQUVwQ0MscUJBQWlCLEVBQUU7QUFBQzFKLFdBQUssRUFBRTtBQUFSO0FBRmlCLEdBQTNCLENBTFg7QUFVQSxRQUFNK0osVUFBVSxnQkFDZDdJLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvRixlQUFwQixFQUFxQztBQUFDbkYsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQXJDLGVBQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2SSw2RUFBcEIsRUFBK0I7QUFBQzVJLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUEvQixFQUFvRyxVQUFwRyxDQURKLGVBRUlMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2SSw2RUFBcEIsRUFBK0I7QUFBQzVJLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUEvQixFQUFvRyxRQUFwRyxDQUZKLGVBR0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2SSw2RUFBcEIsRUFBK0I7QUFBQzVJLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUEvQixlQUNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw0Q0FBSyxDQUFDK0ksUUFBMUIsRUFBb0MsSUFBcEMsZUFDRS9JLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IwRixNQUFwQixFQUE0QjtBQUFDekYsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQTVCLEVBQWlHLFlBQWpHLENBREYsZUFFRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitJLDRFQUFwQixFQUF1QztBQUFFaEksT0FBRyxFQUFFZ0gsY0FBUDtBQUF1Qi9HLFdBQU8sRUFBRWtILGlCQUFoQztBQUFtRGpILFFBQUksRUFBRSxRQUF6RDtBQUFtRWhCLFVBQU0sRUFBRSxTQUEzRTtBQUFpRkMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQTNGLEdBQXZDLGVBQ0VMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JnSiwwRUFBcEIsRUFBZ0M7QUFBRTlKLFNBQUssRUFBRWlFLE9BQU8sR0FBR2hFLDZEQUFPLENBQUNDLFNBQVgsR0FBdUJELDZEQUFPLENBQUM2SCxTQUEvQztBQUEwRC9HLFVBQU0sRUFBRSxTQUFsRTtBQUF3RUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQWxGLEdBQWhDLENBREYsQ0FGRixDQURGLENBSEosZUFXSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZJLDZFQUFwQixFQUErQjtBQUFFSSxTQUFLLEVBQUUsUUFBVDtBQUFtQmhKLFVBQU0sRUFBRSxTQUEzQjtBQUFpQ0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQTNDLEdBQS9CLEVBQXNILFlBQXRILENBWEosZUFZSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZJLDZFQUFwQixFQUErQjtBQUFFSSxTQUFLLEVBQUUsUUFBVDtBQUFtQmhKLFVBQU0sRUFBRSxTQUEzQjtBQUFpQ0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQTNDLEdBQS9CLEVBQXNILGVBQXRILENBWkosQ0FERjtBQWlCQSxRQUFNOEksVUFBVSxnQkFDZG5KLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JxRixNQUFwQixFQUE0QjtBQUFDcEYsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQTVCLGVBQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I0RixTQUFwQixFQUErQjtBQUFDM0YsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQS9CLEVBQW9HeUQsS0FBcEcsRUFBMkcsa0JBQTNHLENBREosRUFFSUEsS0FBSyxHQUFHWSxLQUFSLGlCQUNBMUUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnNGLFNBQXBCLEVBQStCO0FBQUNyRixVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBL0IsZUFDSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm1HLFdBQXBCLEVBQWlDO0FBQUVDLFFBQUksRUFBRSxJQUFSO0FBQWNwRixXQUFPLEVBQUVtRCxNQUF2QjtBQUErQmdGLFlBQVEsRUFBRXBHLE1BQU0sR0FBRzBCLEtBQWxEO0FBQXlEeEUsVUFBTSxFQUFFLFNBQWpFO0FBQXVFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBakYsR0FBakMsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm9KLDRFQUFwQixFQUFtQztBQUFDbkosVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQW5DLENBREYsQ0FESixlQUlJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ0csU0FBcEIsRUFBK0I7QUFBQy9GLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUEvQixFQUFxRyxHQUFFLENBQUMyQyxNQUFNLEdBQUcwQixLQUFULEdBQWlCLENBQWxCLEVBQXFCNEUsT0FBckIsRUFBK0IsTUFBS3BGLElBQUksQ0FBQ3FGLElBQUwsQ0FBVXpGLEtBQUssR0FBR1ksS0FBbEIsQ0FBeUIsRUFBcEssQ0FKSixlQUtJMUUsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm1HLFdBQXBCLEVBQWlDO0FBQUVuRixXQUFPLEVBQUUrQyxNQUFYO0FBQW1Cb0YsWUFBUSxFQUFFcEcsTUFBTSxJQUFJa0IsSUFBSSxDQUFDQyxHQUFMLENBQVNMLEtBQUssR0FBR1ksS0FBakIsQ0FBdkM7QUFBZ0V4RSxVQUFNLEVBQUUsU0FBeEU7QUFBOEVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF4RixHQUFqQyxlQUNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CdUosNkVBQXBCLEVBQW9DO0FBQUN0SixVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBcEMsQ0FERixDQUxKLENBSEosQ0FERjtBQWlCQSxRQUFNNEosUUFBUSxHQUFHbkgsTUFBTSxDQUFDWCxHQUFQLENBQVcsQ0FBQztBQUFDb0YsTUFBRDtBQUFLeUYsY0FBTDtBQUFpQkMsVUFBakI7QUFBeUJDLFdBQXpCO0FBQWtDMUY7QUFBbEMsR0FBRCxLQUE2QztBQUN2RSx3QkFDRXhILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvRixlQUFwQixFQUFxQztBQUNuQzlDLFNBQUcsRUFBRWdGLEVBRDhCO0FBRW5DdEcsYUFBTyxFQUFFLE1BQ1BpRyxPQUFPLENBQUMyRCxJQUFSLENBQWMsV0FBVXRELEVBQUcsRUFBM0IsQ0FIaUM7QUFJakNySCxZQUFNLEVBQUUsU0FKeUI7QUFJbkJDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFKUyxLQUFyQyxlQU1JTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUdrSCxFQUFuRyxDQU5KLGVBT0l2SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUc0TSxNQUFuRyxDQVBKLGVBUUlqTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsRUFBbUdtSCxJQUFuRyxDQVJKLGVBU0l4SCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMkYsUUFBcEIsRUFBOEI7QUFBQzFGLFlBQU0sRUFBRSxTQUFUO0FBQWVDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGtCQUFVLEVBQUU7QUFBckM7QUFBekIsS0FBOUIsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQitGLFdBQXBCLEVBQWlDO0FBQUM5RixZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQWpDLGVBQ0VMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IrSyxtRUFBcEIsRUFBNEI7QUFBRUMsY0FBUSxFQUFFQywyRUFBVyxDQUFDMUQsSUFBRCxDQUF2QjtBQUErQnJJLFdBQUssRUFBRWdNLGlGQUFlLENBQUMzRCxJQUFELENBQXJEO0FBQTZEdEgsWUFBTSxFQUFFLFNBQXJFO0FBQTJFQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXJGLEtBQTVCLENBREYsZUFFRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnVGLEtBQXBCLEVBQTJCO0FBQUN0RixZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQTNCLEVBQWdHMk0sVUFBaEcsQ0FGRixDQURGLENBVEosZUFlSWhOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IyRixRQUFwQixFQUE4QjtBQUM5QjBGLFdBQUssRUFBRTtBQUNMN00sZUFBTyxFQUFFLE1BREo7QUFFTCtNLG1CQUFXLEVBQUUsUUFGUjtBQUdMck0sYUFBSyxFQUFFQyw2REFBTyxDQUFDNkg7QUFIVixPQUR1QjtBQUszQi9HLFlBQU0sRUFBRSxTQUxtQjtBQUtiQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixrQkFBVSxFQUFFO0FBQXJDO0FBTEcsS0FBOUIsRUFPRTZNLE9BUEYsQ0FmSixDQURGO0FBMkJELEdBNUJnQixDQUFqQjtBQThCQSxzQkFDRWxOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUMrSSxRQUExQixFQUFvQyxJQUFwQyxlQUNJL0ksNENBQUssQ0FBQ0MsYUFBTixDQUFvQndMLDJFQUFwQixFQUE4QjtBQUM5QjVDLGNBQVUsRUFBRUEsVUFEa0I7QUFFOUJvQixZQUFRLEVBQUVBLFFBRm9CO0FBRzlCZCxjQUFVLEVBQUVBLFVBSGtCO0FBSTlCdUMsYUFBUyxlQUNQMUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQk4sb0VBQXBCLEVBQStCO0FBQzdCQyxTQUFHLGVBQUVJLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IwTCwrRUFBcEIsRUFBcUM7QUFBQ3pMLGNBQU0sRUFBRSxTQUFUO0FBQWVDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRTlCLFlBQVg7QUFBeUIrQixvQkFBVSxFQUFFO0FBQXJDO0FBQXpCLE9BQXJDLENBRHdCO0FBRTdCUixZQUFNLEVBQUUsZ0JBRnFCO0FBRzdCQyxlQUFTLEVBQUUsOEJBSGtCO0FBR2NJLFlBQU0sRUFBRSxTQUh0QjtBQUc0QkMsY0FBUSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU5QixZQUFYO0FBQXlCK0Isa0JBQVUsRUFBRTtBQUFyQztBQUh0QyxLQUEvQixDQUw0QjtBQVU1QkgsVUFBTSxFQUFFLFNBVm9CO0FBVWRDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQVZJLEdBQTlCLENBREosRUFhSXlILGVBQWUsZUFBQzlILDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2Qix1RUFBcEIsRUFBa0M7QUFBRUMsYUFBUyxFQUFFa0csY0FBYjtBQUE2QmpHLGFBQVMsRUFBRXFGLFVBQXhDO0FBQW9EbkgsVUFBTSxFQUFFLFNBQTVEO0FBQWtFQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBNUUsR0FBbEMsQ0FBRCxDQWJuQixFQWNJb0ksWUFBWSxlQUFDekksNENBQUssQ0FBQ0MsYUFBTixDQUFvQjZCLHVFQUFwQixFQUFrQztBQUFFQyxhQUFTLEVBQUU0RyxXQUFiO0FBQTBCM0csYUFBUyxFQUFFMkYsV0FBckM7QUFBa0R6SCxVQUFNLEVBQUUsU0FBMUQ7QUFBZ0VDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU5QixZQUFYO0FBQXlCK0IsZ0JBQVUsRUFBRTtBQUFyQztBQUExRSxHQUFsQyxDQUFELENBZGhCLENBREY7QUFrQkQsQ0ExSUQ7O0FBNEllME0sMEVBQWYsRSIsImZpbGUiOiJBdWRpdHNSb290X2NmNGI2ZGFlMzNmZThhMmZmOGMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRlxufSlcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMjQsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWFyZ2luOiAnMjBweCAwIDE1cHgnXG59KVxuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNixcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW46ICcwcHggMCAyMHB4JyxcbiAgJz4gZGl2ID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgRW1wdHlQYWdlID0gKHtzdmcsIGhlYWRlciwgc3ViSGVhZGVyLCBidXR0b259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICwgc3ZnXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fSwgaGVhZGVyKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIHN1YkhlYWRlcilcbiAgICAgICwgYnV0dG9uXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UGFnZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25CdXR0b25XcmFwcGVyLnRzeFwiOy8vIFRPRE8gcmVwbGFjZSBJY29uQnV0dG9uXG5pbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUlxuICB9XG59KVxuXG5jb25zdCBJY29uQnV0dG9uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7b25DbGljaywgdHlwZSwgY2hpbGRyZW59ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyByZWY6IHJlZiwgb25DbGljazogb25DbGljaywgdHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzfX1cbiAgICAgICwgY2hpbGRyZW5cbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcnJvd0xlZnRTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTNcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTNcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xNDMuNDkyIDIyMS44NjNMMzM2LjIyNiAyOS4xMjljNi42NjMtNi42NjQgNi42NjMtMTcuNDY4IDAtMjQuMTMyLTYuNjY1LTYuNjYyLTE3LjQ2OC02LjY2Mi0yNC4xMzIgMGwtMjA0LjggMjA0LjhjLTYuNjYyIDYuNjY0LTYuNjYyIDE3LjQ2OCAwIDI0LjEzMmwyMDQuOCAyMDQuOGM2Ljc4IDYuNTQ4IDE3LjU4NCA2LjM2IDI0LjEzMi0uNDIgNi4zODctNi42MTQgNi4zODctMTcuMDk5IDAtMjMuNzEyTDE0My40OTIgMjIxLjg2M3pcIiAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFycm93TGVmdFNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93UmlnaHRTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBBcnJvd1JpZ2h0U1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjEzXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjEzXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMzM2LjIyNiAyMDkuNTkxbC0yMDQuOC0yMDQuOGMtNi43OC02LjU0OC0xNy41ODQtNi4zNi0yNC4xMzIuNDItNi4zODggNi42MTQtNi4zODggMTcuMDk5IDAgMjMuNzEybDE5Mi43MzQgMTkyLjczNC0xOTIuNzM0IDE5Mi43MzRjLTYuNjYzIDYuNjY0LTYuNjYzIDE3LjQ2OCAwIDI0LjEzMiA2LjY2NSA2LjY2MyAxNy40NjggNi42NjMgMjQuMTMyIDBsMjA0LjgtMjA0LjhjNi42NjMtNi42NjUgNi42NjMtMTcuNDY4IDAtMjQuMTMyelwiICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dSaWdodFNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5QXVkaXRzU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgRW1wdHlBdWRpdHNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBmaWxsOiBQQUxFVFRFLkJBQ0tHUk9VTkRfR1JBWV9NSUQsXG4gICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiICAgLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0wIDBoMjR2MjRIMHpcIiAsIGZpbGw6IFwibm9uZVwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTE5IDNoLTQuMThDMTQuNCAxLjg0IDEzLjMgMSAxMiAxYy0xLjMgMC0yLjQuODQtMi44MiAySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTYgMTVoLTJ2LTJoMnYyem0wLTRoLTJWOGgydjZ6bS0xLTljLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTEgMSAuNDUgMSAxLS40NSAxLTEgMXpcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlBdWRpdHNTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtb30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cbmNvbnN0IEZpbHRlclNWRyA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjb2xvcn0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxNVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxNVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IGNvbG9yIHx8IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTF9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xNzguNSAzODIuNWgxMDJ2LTUxaC0xMDJ2NTF6TTAgNzYuNXY1MWg0NTl2LTUxSDB6TTc2LjUgMjU1aDMwNnYtNTFoLTMwNnY1MXpcIiAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3RhbmRhcmRNZW51LnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcblxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5cblxuXG5cblxuXG5jb25zdCBTdGFuZGFyZE1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge21lbnVQcm9wcywgbWVudUl0ZW1zfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ1N0YW5kYXJkIGRyb3Bkb3duIG1lbnUnLCAuLi5tZW51UHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19XG4gICAgICAsIG1lbnVJdGVtcy5tYXAoKHtsYWJlbCwgb25DbGlja30sIGlkeCkgPT4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogaWR4LCBsYWJlbDogbGFiZWwsIG9uQ2xpY2s6IG9uQ2xpY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNn19IClcbiAgICAgICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9BdWRpdHNSb290LnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQXVkaXRzIGZyb20gJy4vY29tcG9uZW50cy9BdWRpdHMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5cbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9Mb2FkaW5nUGFnZSdcblxuXG5cblxuXG5cbmNvbnN0IEF1ZGl0c1Jvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXIsIHVzZXJzfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IFthdWRpdHMsIHNldEF1ZGl0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3F1ZXVlcywgc2V0UXVldWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxdWV1ZUlkLCBzZXRRdWV1ZUlkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IHt0YXNrcywgY291bnR9ID0gYXVkaXRzIHx8IHt9XG4gIGNvbnN0IFBBR0VfTElNSVQgPSA1MFxuXG4gIGNvbnN0IG9uTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAob2Zmc2V0IDwgTWF0aC5hYnMoY291bnQgLSBQQUdFX0xJTUlUKSkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCArIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgY29uc3Qgb25CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvZmZzZXQgPj0gUEFHRV9MSU1JVCkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCAtIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEF1ZGl0cygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxpbWl0OiBQQUdFX0xJTUlULFxuICAgICAgICAgIHF1ZXVlX2lkOiBxdWV1ZUlkLFxuICAgICAgICAgIHdvcmtlcl9pZDogdXNlcklkLFxuICAgICAgICAgIG9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoXG4gICAgICAgIGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvdGFza3MvY29tcGxldGVkYCxcbiAgICAgICAgcGF5bG9hZFxuICAgICAgKVxuICAgICAgY29uc3Qge2RhdGE6IHF1ZXVlc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L3F1ZXVlc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdGFza19zdGF0dXM6ICdjb21wbGV0ZWQnXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNldEF1ZGl0cyhkYXRhKVxuICAgICAgc2V0UXVldWVzKHF1ZXVlcylcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZmV0Y2hBdWRpdHMoKVxuICB9LCBbcXVldWVJZCwgdXNlcklkLCBvZmZzZXQsIHVzZXJdKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OX19IClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXRzLCB7XG4gICAgICB0YXNrczogdGFza3MgfHwgW10sXG4gICAgICBjb3VudDogY291bnQsXG4gICAgICBvbk5leHQ6IG9uTmV4dCxcbiAgICAgIG9uQmFjazogb25CYWNrLFxuICAgICAgbGltaXQ6IFBBR0VfTElNSVQsXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIHF1ZXVlczogcXVldWVzLFxuICAgICAgc2V0UXVldWVJZDogc2V0UXVldWVJZCxcbiAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICB1c2VyczogdXNlcnMsXG4gICAgICBzZXRVc2VySWQ6IHNldFVzZXJJZCxcbiAgICAgIHVzZXJJZDogdXNlcklkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzJ9fVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2Vyc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEF1ZGl0c1Jvb3QpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXRzLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgTGlzdFBhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFBhZ2UnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IEFycm93TGVmdEljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dMZWZ0U1ZHJ1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93UmlnaHRTVkcnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCBnZXRJbml0aWFscyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0SW5pdGlhbHMnXG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cnXG5pbXBvcnQgdXNlTWVudSBmcm9tICdjbGllbnQvaG9va3MvdXNlTWVudSdcbmltcG9ydCB7TWVudVBvc2l0aW9ufSBmcm9tICdjbGllbnQvaG9va3MvdXNlQ29vcmRzJ1xuaW1wb3J0IExpc3RUaXRsZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0VGl0bGUnXG5pbXBvcnQgU3RhbmRhcmRNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudSdcbmltcG9ydCBGaWx0ZXJJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0ZpbHRlclNWRydcbmltcG9ydCBFbXB0eVBhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlJ1xuaW1wb3J0IEVtcHR5QXVkaXRzSWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eUF1ZGl0c1NWRydcbmltcG9ydCBJY29uQnV0dG9uV3JhcHBlciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29uQnV0dG9uV3JhcHBlcidcblxuaW1wb3J0IHtjb2xvckZyb21TdHJpbmd9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCB7QXVkaXREZWNpc2lvbkljb259IGZyb20gJ3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svY29tcG9uZW50cy9TaWRlYmFyJ1xuaW1wb3J0IHtTVEFUVVNfUEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDQwLFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxMDBweCAxZnIgMTgwcHggMTAwcHggMTAwcHggODBweCAxMDBweCcsXG4gIGdyaWRDb2x1bW5HYXA6IDE1XG59KVxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBtYXhXaWR0aDogJzgwJScsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDBweCAyMDBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBQYWdpbmF0b3IgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW4oe1xuICBtYXJnaW5MZWZ0OiA3LFxuICB3aWR0aDogJzEwMCUnLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5SaWdodDogNyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgTGluZUl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdwb2ludGVyICFpbXBvcnRhbnQnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE0LFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFBhZ2VDb3VudCA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNCxcbiAgZm9udFdlaWdodDogNDAwLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSLFxuICBtYXJnaW5MZWZ0OiAyLFxuICBtYXJnaW5SaWdodDogMixcbiAgd2lkdGg6ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICBoZWlnaHQ6IDI1LFxuICBsaW5lSGVpZ2h0OiAnMjVweCdcbn0pXG5cbmNvbnN0IFBhZ2luYXRlQnRuID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe2xlZnR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAyNSxcbiAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgd2lkdGg6IDMwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogbGVmdCA/IDAgOiA0LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBsZWZ0ID8gMCA6IDQsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogbGVmdCA/IDQgOiAwLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGxlZnQgPyA0IDogMFxuICB9XG59KVxuXG5jb25zdCBTdHlsZWRFbCA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW46ICcwIDE1cHgnLFxuICBwYWRkaW5nOiAnN3B4IDAnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1heFdpZHRoOiAzNTAsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgSFIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiAxLFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxufSlcblxuY29uc3QgU3R5bGVkQ29tbWVudHNJY29uID0gc3R5bGVkKEljb24pKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5SaWdodDogMTUsXG4gIG1hcmdpbkxlZnQ6IDQsXG4gIGZvbnRTaXplOiAxN1xufSlcblxuY29uc3QgQXVkaXRzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXNrcyxcbiAgICBjb3VudCxcbiAgICBvbk5leHQsXG4gICAgb25CYWNrLFxuICAgIGxpbWl0LFxuICAgIG9mZnNldCxcbiAgICBxdWV1ZXMsXG4gICAgc2V0UXVldWVJZCxcbiAgICBzZXRVc2VySWQsXG4gICAgcXVldWVJZCxcbiAgICB1c2VySWQsXG4gICAgdXNlcnNcbiAgfSA9IHByb3BzXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBjb25zdCBzZXBhcmF0b3IgPSB7bGFiZWw6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSFIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY2fX0gKX1cblxuICBjb25zdCB3TWVudUl0ZW1zID0gcXVldWVzLm1hcCgodykgPT4gKHtcbiAgICBsYWJlbDogcXVldWVJZCA9PT0gdy5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX0sIHcubmFtZSkgOiB3Lm5hbWUsXG4gICAgb25DbGljazogKCkgPT4gc2V0UXVldWVJZCgocHJldikgPT4gKHByZXYgPT09IHcuaWQgPyB1bmRlZmluZWQgOiB3LmlkKSlcbiAgfSkpXG4gIGlmIChxdWV1ZUlkKSB7XG4gICAgd01lbnVJdGVtcy51bnNoaWZ0KHNlcGFyYXRvcilcbiAgICB3TWVudUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiAnQ2xlYXIgZmlsdGVyJywgb25DbGljazogKCkgPT4gc2V0UXVldWVJZCh1bmRlZmluZWQpfSlcbiAgfVxuXG4gIGNvbnN0IGNiTWVudUl0ZW1zID0gdXNlcnMubWFwKCh1KSA9PiAoe1xuICAgIGxhYmVsOiB1c2VySWQgPT09IHUuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3OH19LCB1Lm5hbWUpIDogdS5uYW1lLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFVzZXJJZCgocHJldikgPT4gKHByZXYgPT09IHUuaWQgPyB1bmRlZmluZWQgOiB1LmlkKSlcbiAgfSkpXG4gIGlmICh1c2VySWQpIHtcbiAgICBjYk1lbnVJdGVtcy51bnNoaWZ0KHNlcGFyYXRvcilcbiAgICBjYk1lbnVJdGVtcy51bnNoaWZ0KHtsYWJlbDogJ0NsZWFyIGZpbHRlcicsIG9uQ2xpY2s6ICgpID0+IHNldFVzZXJJZCh1bmRlZmluZWQpfSlcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsUXVldWUsXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5SZWZRdWV1ZSxcbiAgICBtZW51UHJvcHM6IG1lbnVQcm9wc1F1ZXVlLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsUXVldWVcbiAgfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBtZW51Q29udGVudFN0eWxlczoge3dpZHRoOiAzNTB9XG4gIH0pXG5cbiAgY29uc3Qge1xuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDYixcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZkNiLFxuICAgIG1lbnVQcm9wczogbWVudVByb3BzQ2IsXG4gICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWxDYlxuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIG1lbnVDb250ZW50U3R5bGVzOiB7d2lkdGg6IDM1MH1cbiAgfSlcblxuICBjb25zdCBwYWdlSGVhZGVyID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sdW1uQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwN319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19LCBcIlRhc2sgSURcIiApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjExfX0sIFwiUXVldWUgTmFtZVwiIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbldyYXBwZXIsIHsgcmVmOiBvcmlnaW5SZWZRdWV1ZSwgb25DbGljazogdG9nZ2xlUG9ydGFsUXVldWUsIHR5cGU6IFwiYnV0dG9uXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTJ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbHRlckljb24sIHsgY29sb3I6IHF1ZXVlSWQgPyBQQUxFVFRFLlRFWFRfTUFJTiA6IFBBTEVUVEUuVEVYVF9HUkFZLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEzfX0gKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwgeyBhbGlnbjogXCJsZWZ0XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTd9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxOX19LCBcIkNvbXBsZXRlZCBCeVwiIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbldyYXBwZXIsIHsgcmVmOiBvcmlnaW5SZWZDYiwgb25DbGljazogdG9nZ2xlUG9ydGFsQ2IsIHR5cGU6IFwiYnV0dG9uXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjB9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbHRlckljb24sIHsgY29sb3I6IHVzZXJJZCA/IFBBTEVUVEUuVEVYVF9NQUlOIDogUEFMRVRURS5URVhUX0dSQVksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjF9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyNX19LCBcIkNvbXBsZXRlZCBBdFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjZ9fSwgXCJTb3VyY2VcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjd9fSwgXCJDb21tZW50c1wiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjh9fSwgXCJBdWRpdFwiKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM0fX0sIGNvdW50LCBcIiBDb21wbGV0ZWQgdGFza3NcIiAgKVxuICAgICAgLCBjb3VudCA+IGxpbWl0ICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0b3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgbGVmdDogdHJ1ZSwgb25DbGljazogb25CYWNrLCBkaXNhYmxlZDogb2Zmc2V0IDwgbGltaXQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzd9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93TGVmdEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM4fX0gKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvdW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0MH19LCBgJHsob2Zmc2V0IC8gbGltaXQgKyAxKS50b0ZpeGVkKCl9IC8gJHtNYXRoLmNlaWwoY291bnQgLyBsaW1pdCl9YClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgb25DbGljazogb25OZXh0LCBkaXNhYmxlZDogb2Zmc2V0ID49IE1hdGguYWJzKGNvdW50IC0gbGltaXQpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQxfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvd1JpZ2h0SWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDJ9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgY29uc3QgYXVkaXREZWNpc2lvbkljb24gPSB7XG4gICAgbnVsbDogbnVsbCxcbiAgICBmYWxzZTogUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdERlY2lzaW9uSWNvbiwgeyBjb2xvcjogU1RBVFVTX1BBTEVUVEUuSU5fUFJPR1JFU1MsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTF9fSwgXCJjYW5jZWxcIiksXG4gICAgdHJ1ZTogUmVhY3QuY3JlYXRlRWxlbWVudChBdWRpdERlY2lzaW9uSWNvbiwgeyBjb2xvcjogU1RBVFVTX1BBTEVUVEUuQ09NUExFVEVELCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjUyfX0sIFwiY2hlY2tfY2lyY2xlXCIpXG4gIH1cblxuICBjb25zdCBpdGVtTGlzdCA9IHRhc2tzLm1hcChcbiAgICAoe1xuICAgICAgaWQ6IHRhc2tJZCxcbiAgICAgIGNvbXBsZXRlZF9ieTogY29tcGxldGVkQnksXG4gICAgICBjb21wbGV0ZWRfYXQ6IGNvbXBsZXRlZEF0LFxuICAgICAgY29ycmVjdCxcbiAgICAgIHF1ZXVlOiBuYW1lLFxuICAgICAgc291cmNlLFxuICAgICAgbl9jb21tZW50c1xuICAgIH0pID0+IHtcbiAgICAgIGxldCBzb3VyY2VUZXh0U3R5bGUgPSAnbm9uZSdcbiAgICAgIHNvdXJjZVRleHRTdHlsZSA9IFsnbWFudWFsJywgJ3phcGllciddLmluY2x1ZGVzKHNvdXJjZSkgPyAnY2FwaXRhbGl6ZScgOiBzb3VyY2VUZXh0U3R5bGVcbiAgICAgIHNvdXJjZVRleHRTdHlsZSA9IFsnYXBpJ10uaW5jbHVkZXMoc291cmNlKSA/ICd1cHBlcmNhc2UnIDogc291cmNlVGV4dFN0eWxlXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkNvbnRhaW5lciwge1xuICAgICAgICAgIGtleTogdGFza0lkLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogYC9xdWV1ZXMvdGFza3MvJHt0YXNrSWR9L2F1ZGl0YCxcbiAgICAgICAgICAgICAgc3RhdGU6IHtpc0F1ZGl0czogdHJ1ZX1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY5fX1cbiAgICAgICAgXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OH19LCB0YXNrSWQpXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OX19LCBuYW1lKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODB9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4MX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHsgaW5pdGlhbHM6IGdldEluaXRpYWxzKGNvbXBsZXRlZEJ5KSwgY29sb3I6IGNvbG9yRnJvbVN0cmluZyhjb21wbGV0ZWRCeSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODJ9fSApXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODN9fSwgY29tcGxldGVkQnkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODZ9fSwgZGF5anMoY29tcGxldGVkQXQpLmZvcm1hdCgnREQtTU0tWVlZWScpKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogc291cmNlVGV4dFN0eWxlLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAganVzdGlmeVNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjg3fX1cbiAgICAgICAgICBcbiAgICAgICAgICAgICwgc291cmNlXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWVxuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5N319XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIG5fY29tbWVudHMgPiAwICYmIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICwgbl9jb21tZW50c1xuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRDb21tZW50c0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzA3fX0sIFwiY29tbWVudFwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2ZsZXgtc3RhcnQnXG4gICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzExfX1cbiAgICAgICAgICBcbiAgICAgICAgICAgICwgYXVkaXREZWNpc2lvbkljb25bY29ycmVjdF1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0UGFnZSwge1xuICAgICAgICBwYWdlSGVhZGVyOiBwYWdlSGVhZGVyLFxuICAgICAgICBpdGVtTGlzdDogaXRlbUxpc3QsXG4gICAgICAgIHBhZ2VGb290ZXI6IHBhZ2VGb290ZXIsXG4gICAgICAgIGVtcHR5TGlzdDogXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVBhZ2UsIHtcbiAgICAgICAgICAgIHN2ZzogUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eUF1ZGl0c0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMyfX0gKSxcbiAgICAgICAgICAgIGhlYWRlcjogJ05vIHRhc2tzIGhlcmXigKYnLFxuICAgICAgICAgICAgc3ViSGVhZGVyOiAnVHJ5IHVzaW5nIGRpZmZlcmVudCBmaWx0ZXJzLicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzF9fVxuICAgICAgICAgIClcbiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzI2fX1cbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbFF1ZXVlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhbmRhcmRNZW51LCB7IG1lbnVQcm9wczogbWVudVByb3BzUXVldWUsIG1lbnVJdGVtczogd01lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOH19ICkpXG4gICAgICAsIG1lbnVQb3J0YWxDYihSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc0NiLCBtZW51SXRlbXM6IGNiTWVudUl0ZW1zLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzM5fX0gKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXVkaXRzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvT3V0c3RhbmRpbmdSb290LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgT3V0c3RhbmRpbmcgZnJvbSAnLi9jb21wb25lbnRzL091dHN0YW5kaW5nJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICdjbGllbnQvaG9va3MvdXNlRG9jdW1lbnRUaXRsZSdcblxuXG5cblxuXG5cbmNvbnN0IE91dHN0YW5kaW5nUm9vdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlciwgdXNlcnN9ID0gcHJvcHMgfHwge31cbiAgY29uc3QgW3F1ZXVlcywgc2V0UXVldWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3F1ZXVlSWQsIHNldFF1ZXVlSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCBvcmdJZCA9IHVzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWRcbiAgY29uc3QgUEFHRV9MSU1JVCA9IDUwXG5cbiAgY29uc3Qgb25OZXh0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvZmZzZXQgPCBNYXRoLmFicyhjb3VudCAtIFBBR0VfTElNSVQpKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0ICsgUEFHRV9MSU1JVClcbiAgICB9XG4gIH0sIFtjb3VudCwgb2Zmc2V0XSlcblxuICBjb25zdCBvbkJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9mZnNldCA+PSBQQUdFX0xJTUlUKSB7XG4gICAgICBzZXRPZmZzZXQob2Zmc2V0IC0gUEFHRV9MSU1JVClcbiAgICB9XG4gIH0sIFtjb3VudCwgb2Zmc2V0XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUXVldWVzKCkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhOiBxdWV1ZXN9ID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8yID0+IF8yKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pXSlcblxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWV1ZXMhJywgZXJyb3JzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHF1ZXVlcykge1xuICAgICAgICAgIHNldENvdW50KHF1ZXVlcy5sZW5ndGgpXG4gICAgICAgICAgc2V0UXVldWVzKHF1ZXVlcylcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hRdWV1ZXMoKVxuICB9LCBbcXVldWVJZCwgdXNlcklkLCBvZmZzZXQsIHVzZXJdKVxuXG4gIHVzZURvY3VtZW50VGl0bGUoJ091dHN0YW5kaW5nIFF1ZXVlcyB8IEh1bWFuIExhbWJkYXMnKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19IClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0c3RhbmRpbmcsIHtcbiAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgIG9uTmV4dDogb25OZXh0LFxuICAgICAgb25CYWNrOiBvbkJhY2ssXG4gICAgICBsaW1pdDogUEFHRV9MSU1JVCxcbiAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgcXVldWVzOiBxdWV1ZXMsXG4gICAgICBzZXRRdWV1ZUlkOiBzZXRRdWV1ZUlkLFxuICAgICAgcXVldWVJZDogcXVldWVJZCxcbiAgICAgIHVzZXJzOiB1c2VycyxcbiAgICAgIHNldFVzZXJJZDogc2V0VXNlcklkLFxuICAgICAgdXNlcklkOiB1c2VySWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoT3V0c3RhbmRpbmdSb290KVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL2NvbXBvbmVudHMvT3V0c3RhbmRpbmcudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBMaXN0UGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZSdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQgQXJyb3dMZWZ0SWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcnXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dSaWdodFNWRydcbmltcG9ydCBBdmF0YXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IGdldEluaXRpYWxzIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRJbml0aWFscydcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9oZWxwZXJzL3RleHRPdmVyZmxvdydcbmltcG9ydCB1c2VNZW51IGZyb20gJ2NsaWVudC9ob29rcy91c2VNZW51J1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJ2NsaWVudC9ob29rcy91c2VDb29yZHMnXG5pbXBvcnQgTGlzdFRpdGxlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RQYWdlL0xpc3RUaXRsZSdcbmltcG9ydCBTdGFuZGFyZE1lbnUgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvU3RhbmRhcmRNZW51J1xuaW1wb3J0IEZpbHRlckljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRmlsdGVyU1ZHJ1xuaW1wb3J0IEVtcHR5UGFnZSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UnXG5pbXBvcnQgRW1wdHlBdWRpdHNJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5QXVkaXRzU1ZHJ1xuaW1wb3J0IEljb25CdXR0b25XcmFwcGVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25CdXR0b25XcmFwcGVyJ1xuXG5pbXBvcnQge2NvbG9yRnJvbVN0cmluZ30gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldENvbG9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDb2x1bW5Db250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDQwLFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICc4MHB4IDEwMHB4IDFmciAxODBweCAxNTBweCcsXG4gIGdyaWRDb2x1bW5HYXA6IDE1XG59KVxuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA0NSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBtYXhXaWR0aDogJzgwJScsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDBweCAyMDBweCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBQYWdpbmF0b3IgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbn0pXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW4oe1xuICBtYXJnaW5MZWZ0OiA3LFxuICB3aWR0aDogJzEwMCUnLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5SaWdodDogNyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgTGluZUl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjdXJzb3I6ICdwb2ludGVyICFpbXBvcnRhbnQnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IFNtYWxsVGV4dCA9IHN0eWxlZC5zcGFuKHtcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE0LFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFBhZ2VDb3VudCA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNCxcbiAgZm9udFdlaWdodDogNDAwLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSLFxuICBtYXJnaW5MZWZ0OiAyLFxuICBtYXJnaW5SaWdodDogMixcbiAgd2lkdGg6ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICBoZWlnaHQ6IDI1LFxuICBsaW5lSGVpZ2h0OiAnMjVweCdcbn0pXG5cbmNvbnN0IFBhZ2luYXRlQnRuID0gc3R5bGVkKFBsYWluQnV0dG9uKSgoe2xlZnR9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAyNSxcbiAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgd2lkdGg6IDMwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogbGVmdCA/IDAgOiA0LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBsZWZ0ID8gMCA6IDQsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogbGVmdCA/IDQgOiAwLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGxlZnQgPyA0IDogMFxuICB9XG59KVxuXG5jb25zdCBTdHlsZWRFbCA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW46ICcwIDE1cHgnLFxuICBwYWRkaW5nOiAnN3B4IDAnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1heFdpZHRoOiAzNTAsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgSFIgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiAxLFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWVxufSlcblxuY29uc3QgT3V0c3RhbmRpbmcgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvdW50LFxuICAgIG9uTmV4dCxcbiAgICBvbkJhY2ssXG4gICAgbGltaXQsXG4gICAgb2Zmc2V0LFxuICAgIHF1ZXVlcyxcbiAgICBzZXRRdWV1ZUlkLFxuICAgIHNldFVzZXJJZCxcbiAgICBxdWV1ZUlkLFxuICAgIHVzZXJJZCxcbiAgICB1c2Vyc1xuICB9ID0gcHJvcHNcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGNvbnN0IHNlcGFyYXRvciA9IHtsYWJlbDogUmVhY3QuY3JlYXRlRWxlbWVudChIUiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTJ9fSApfVxuXG4gIGNvbnN0IHdNZW51SXRlbXMgPSBxdWV1ZXMubWFwKCh3KSA9PiAoe1xuICAgIGxhYmVsOiBxdWV1ZUlkID09PSB3LmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTV9fSwgdy5uYW1lKSA6IHcubmFtZSxcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRRdWV1ZUlkKChwcmV2KSA9PiAocHJldiA9PT0gdy5pZCA/IHVuZGVmaW5lZCA6IHcuaWQpKVxuICB9KSlcbiAgaWYgKHF1ZXVlSWQpIHtcbiAgICB3TWVudUl0ZW1zLnVuc2hpZnQoc2VwYXJhdG9yKVxuICAgIHdNZW51SXRlbXMudW5zaGlmdCh7bGFiZWw6ICdDbGVhciBmaWx0ZXInLCBvbkNsaWNrOiAoKSA9PiBzZXRRdWV1ZUlkKHVuZGVmaW5lZCl9KVxuICB9XG5cbiAgY29uc3QgY2JNZW51SXRlbXMgPSB1c2Vycy5tYXAoKHUpID0+ICh7XG4gICAgbGFiZWw6IHVzZXJJZCA9PT0gdS5pZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkRWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY0fX0sIHUubmFtZSkgOiB1Lm5hbWUsXG4gICAgb25DbGljazogKCkgPT4gc2V0VXNlcklkKChwcmV2KSA9PiAocHJldiA9PT0gdS5pZCA/IHVuZGVmaW5lZCA6IHUuaWQpKVxuICB9KSlcbiAgaWYgKHVzZXJJZCkge1xuICAgIGNiTWVudUl0ZW1zLnVuc2hpZnQoc2VwYXJhdG9yKVxuICAgIGNiTWVudUl0ZW1zLnVuc2hpZnQoe2xhYmVsOiAnQ2xlYXIgZmlsdGVyJywgb25DbGljazogKCkgPT4gc2V0VXNlcklkKHVuZGVmaW5lZCl9KVxuICB9XG5cbiAgY29uc3Qge1xuICAgIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxRdWV1ZSxcbiAgICBvcmlnaW5SZWY6IG9yaWdpblJlZlF1ZXVlLFxuICAgIG1lbnVQcm9wczogbWVudVByb3BzUXVldWUsXG4gICAgdG9nZ2xlUG9ydGFsOiB0b2dnbGVQb3J0YWxRdWV1ZVxuICB9ID0gdXNlTWVudShNZW51UG9zaXRpb24uVVBQRVJfUklHSFQsIHtcbiAgICBpc0Ryb3Bkb3duOiB0cnVlLFxuICAgIG1lbnVDb250ZW50U3R5bGVzOiB7d2lkdGg6IDM1MH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgbWVudVBvcnRhbDogbWVudVBvcnRhbENiLFxuICAgIG9yaWdpblJlZjogb3JpZ2luUmVmQ2IsXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNDYixcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbENiXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgbWVudUNvbnRlbnRTdHlsZXM6IHt3aWR0aDogMzUwfVxuICB9KVxuXG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Db250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk0fX0sIFwiUXVldWUgSURcIiApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5NX19LCBcIk9yZyBJRFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTh9fSwgXCJRdWV1ZSBOYW1lXCIgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uV3JhcHBlciwgeyByZWY6IG9yaWdpblJlZlF1ZXVlLCBvbkNsaWNrOiB0b2dnbGVQb3J0YWxRdWV1ZSwgdHlwZTogXCJidXR0b25cIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5OX19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsdGVySWNvbiwgeyBjb2xvcjogcXVldWVJZCA/IFBBTEVUVEUuVEVYVF9NQUlOIDogUEFMRVRURS5URVhUX0dSQVksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IGFsaWduOiBcImNlbnRlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA0fX0sIFwiQ3JlYXRlZCBBdFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDV9fSwgXCJQZW5kaW5nIFRhc2tzXCIgKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IHBhZ2VGb290ZXIgPSAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTbWFsbFRleHQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjExfX0sIGNvdW50LCBcIiBDb21wbGV0ZWQgdGFza3NcIiAgKVxuICAgICAgLCBjb3VudCA+IGxpbWl0ICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0b3IsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEzfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgbGVmdDogdHJ1ZSwgb25DbGljazogb25CYWNrLCBkaXNhYmxlZDogb2Zmc2V0IDwgbGltaXQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTR9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93TGVmdEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE1fX0gKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZUNvdW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxN319LCBgJHsob2Zmc2V0IC8gbGltaXQgKyAxKS50b0ZpeGVkKCl9IC8gJHtNYXRoLmNlaWwoY291bnQgLyBsaW1pdCl9YClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGVCdG4sIHsgb25DbGljazogb25OZXh0LCBkaXNhYmxlZDogb2Zmc2V0ID49IE1hdGguYWJzKGNvdW50IC0gbGltaXQpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE4fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvd1JpZ2h0SWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fSApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgY29uc3QgaXRlbUxpc3QgPSBxdWV1ZXMubWFwKCh7aWQsIGNyZWF0ZWRfYXQsIG9yZ19pZCwgbl90YXNrcywgbmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Db250YWluZXIsIHtcbiAgICAgICAga2V5OiBpZCxcbiAgICAgICAgb25DbGljazogKCkgPT5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXMvJHtpZH1gKVxuICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjh9fVxuICAgICAgXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzR9fSwgaWQpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzV9fSwgb3JnX2lkKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzd9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXJCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwgeyBpbml0aWFsczogZ2V0SW5pdGlhbHMobmFtZSksIGNvbG9yOiBjb2xvckZyb21TdHJpbmcobmFtZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzl9fSApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQwfX0sIGNyZWF0ZWRfYXQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbiAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQzfX1cbiAgICAgICAgXG4gICAgICAgICAgLCBuX3Rhc2tzXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBhZ2UsIHtcbiAgICAgICAgcGFnZUhlYWRlcjogcGFnZUhlYWRlcixcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1MaXN0LFxuICAgICAgICBwYWdlRm9vdGVyOiBwYWdlRm9vdGVyLFxuICAgICAgICBlbXB0eUxpc3Q6IFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlQYWdlLCB7XG4gICAgICAgICAgICBzdmc6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlBdWRpdHNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2NH19ICksXG4gICAgICAgICAgICBoZWFkZXI6ICdObyB0YXNrcyBoZXJl4oCmJyxcbiAgICAgICAgICAgIHN1YkhlYWRlcjogJ1RyeSB1c2luZyBkaWZmZXJlbnQgZmlsdGVycy4nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjYzfX1cbiAgICAgICAgICApXG4gICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1OH19XG4gICAgICApXG4gICAgICAsIG1lbnVQb3J0YWxRdWV1ZShSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc1F1ZXVlLCBtZW51SXRlbXM6IHdNZW51SXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzB9fSApKVxuICAgICAgLCBtZW51UG9ydGFsQ2IoUmVhY3QuY3JlYXRlRWxlbWVudChTdGFuZGFyZE1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHNDYiwgbWVudUl0ZW1zOiBjYk1lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MX19ICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dHN0YW5kaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9