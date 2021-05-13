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
        console.error('Error fetching queues!', JSON.stringify(errors));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbkJ1dHRvbldyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd0xlZnRTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd1JpZ2h0U1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlBdWRpdHNTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9hdWRpdHMvQXVkaXRzUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9jb21wb25lbnRzL0F1ZGl0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL091dHN0YW5kaW5nUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL2NvbXBvbmVudHMvT3V0c3RhbmRpbmcudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIldyYXBwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIndpZHRoIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsIlRpdGxlIiwiY29sb3IiLCJQQUxFVFRFIiwiVEVYVF9NQUlOIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiU3ViVGl0bGUiLCJQUklNQVJZX01BSU4iLCJFbXB0eVBhZ2UiLCJzdmciLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJidXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkNvbnRhaW5lciIsIlBsYWluQnV0dG9uIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJCQUNLR1JPVU5EX0hPVkVSIiwiSWNvbkJ1dHRvbiIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJ0eXBlIiwiY2hpbGRyZW4iLCJBcnJvd0xlZnRTVkciLCJtZW1vIiwidmlld0JveCIsInhtbG5zIiwiZmlsbCIsImQiLCJBcnJvd1JpZ2h0U1ZHIiwiRW1wdHlBdWRpdHNTVkciLCJCQUNLR1JPVU5EX0dSQVlfTUlEIiwiRmlsdGVyU1ZHIiwiU3RhbmRhcmRNZW51IiwibWVudVByb3BzIiwibWVudUl0ZW1zIiwiTWVudSIsImFyaWFMYWJlbCIsIm1hcCIsImxhYmVsIiwiaWR4IiwiTWVudUl0ZW0iLCJrZXkiLCJBdWRpdHNSb290IiwidXNlciIsInVzZXJzIiwiYXVkaXRzIiwic2V0QXVkaXRzIiwidXNlU3RhdGUiLCJxdWV1ZXMiLCJzZXRRdWV1ZXMiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInF1ZXVlSWQiLCJzZXRRdWV1ZUlkIiwidW5kZWZpbmVkIiwidXNlcklkIiwic2V0VXNlcklkIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwib3JnSWQiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsInRhc2tzIiwiY291bnQiLCJQQUdFX0xJTUlUIiwib25OZXh0IiwidXNlQ2FsbGJhY2siLCJNYXRoIiwiYWJzIiwib25CYWNrIiwidXNlRWZmZWN0IiwiZmV0Y2hBdWRpdHMiLCJwYXlsb2FkIiwibWV0aG9kIiwicGFyYW1zIiwibGltaXQiLCJxdWV1ZV9pZCIsIndvcmtlcl9pZCIsImRhdGEiLCJodHRwSGFuZGxlciIsInRhc2tfc3RhdHVzIiwiTG9hZGluZ1BhZ2UiLCJBdWRpdHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiLCJDb2x1bW5Db250YWluZXIiLCJGb290ZXIiLCJQYWdpbmF0b3IiLCJMYWJlbCIsIm1hcmdpbkxlZnQiLCJ0ZXh0T3ZlcmZsb3ciLCJTcGFjZXIiLCJMaW5lSXRlbSIsIlNtYWxsVGV4dCIsInRleHRBbGlnbiIsInVzZXJTZWxlY3QiLCJBdmF0YXJCbG9jayIsIlBhZ2VDb3VudCIsIm1hcmdpblJpZ2h0IiwibGluZUhlaWdodCIsIlBhZ2luYXRlQnRuIiwibGVmdCIsImJhY2tncm91bmQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJTdHlsZWRFbCIsIm1heFdpZHRoIiwiSFIiLCJCT1JERVJfTUFJTl9HUkFZIiwiU3R5bGVkQ29tbWVudHNJY29uIiwiSWNvbiIsIlRFWFRfR1JBWSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5Iiwic2VwYXJhdG9yIiwid01lbnVJdGVtcyIsInciLCJpZCIsIm5hbWUiLCJwcmV2IiwidW5zaGlmdCIsImNiTWVudUl0ZW1zIiwidSIsIm1lbnVQb3J0YWwiLCJtZW51UG9ydGFsUXVldWUiLCJvcmlnaW5SZWYiLCJvcmlnaW5SZWZRdWV1ZSIsIm1lbnVQcm9wc1F1ZXVlIiwidG9nZ2xlUG9ydGFsIiwidG9nZ2xlUG9ydGFsUXVldWUiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfUklHSFQiLCJpc0Ryb3Bkb3duIiwibWVudUNvbnRlbnRTdHlsZXMiLCJtZW51UG9ydGFsQ2IiLCJvcmlnaW5SZWZDYiIsIm1lbnVQcm9wc0NiIiwidG9nZ2xlUG9ydGFsQ2IiLCJwYWdlSGVhZGVyIiwiTGlzdFRpdGxlIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uV3JhcHBlciIsIkZpbHRlckljb24iLCJhbGlnbiIsInBhZ2VGb290ZXIiLCJkaXNhYmxlZCIsIkFycm93TGVmdEljb24iLCJ0b0ZpeGVkIiwiY2VpbCIsIkFycm93UmlnaHRJY29uIiwiYXVkaXREZWNpc2lvbkljb24iLCJudWxsIiwiZmFsc2UiLCJBdWRpdERlY2lzaW9uSWNvbiIsIlNUQVRVU19QQUxFVFRFIiwiSU5fUFJPR1JFU1MiLCJ0cnVlIiwiQ09NUExFVEVEIiwiaXRlbUxpc3QiLCJ0YXNrSWQiLCJjb21wbGV0ZWRfYnkiLCJjb21wbGV0ZWRCeSIsImNvbXBsZXRlZF9hdCIsImNvbXBsZXRlZEF0IiwiY29ycmVjdCIsInF1ZXVlIiwic291cmNlIiwibl9jb21tZW50cyIsInNvdXJjZVRleHRTdHlsZSIsImluY2x1ZGVzIiwicHVzaCIsInBhdGhuYW1lIiwiaXNBdWRpdHMiLCJBdmF0YXIiLCJpbml0aWFscyIsImdldEluaXRpYWxzIiwiY29sb3JGcm9tU3RyaW5nIiwiZGF5anMiLCJmb3JtYXQiLCJzdHlsZSIsInRleHRUcmFuc2Zvcm0iLCJqdXN0aWZ5U2VsZiIsIkxpc3RQYWdlIiwiZW1wdHlMaXN0IiwiRW1wdHlBdWRpdHNJY29uIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiT3V0c3RhbmRpbmdSb290Iiwic2V0Q291bnQiLCJmZXRjaFF1ZXVlcyIsImVycm9ycyIsIl8iLCJfMiIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VEb2N1bWVudFRpdGxlIiwiT3V0c3RhbmRpbmciLCJjcmVhdGVkX2F0Iiwib3JnX2lkIiwibl90YXNrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsdUVBQXJCO0FBQTZGO0FBRTdGO0FBQ0E7O0FBU0EsTUFB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LEVBQUU7QUFBQ0MsY0FBUSxFQUFFOUIsWUFBWDtBQUF5QitCLGdCQUFVLEVBQUU7QUFBckM7QUFBMUUsR0FBbEMsQ0FBRCxDQWRoQixDQURGO0FBa0JELENBMUlEOztBQTRJZTRNLDBFQUFmLEUiLCJmaWxlIjoiQXVkaXRzUm9vdF9hZmQ3Yjk0ZjE2N2I4NGQyNDFkMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICdzdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUZcbn0pXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDI0LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1hcmdpbjogJzIwcHggMCAxNXB4J1xufSlcblxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMTYsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgbWFyZ2luOiAnMHB4IDAgMjBweCcsXG4gICc+IGRpdiA+IGEnOiB7XG4gICAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pXG5cbmNvbnN0IEVtcHR5UGFnZSA9ICh7c3ZnLCBoZWFkZXIsIHN1YkhlYWRlciwgYnV0dG9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319XG4gICAgICAsIHN2Z1xuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX0sIGhlYWRlcilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19LCBzdWJIZWFkZXIpXG4gICAgICAsIGJ1dHRvblxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXB0eVBhZ2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29uQnV0dG9uV3JhcHBlci50c3hcIjsvLyBUT0RPIHJlcGxhY2UgSWNvbkJ1dHRvblxuaW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnaW5oZXJpdCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYm9yZGVyUmFkaXVzOiA1MCxcbiAgd2lkdGg6IDI1LFxuICBoZWlnaHQ6IDI1LFxuICBwYWRkaW5nOiAwLFxuICBtYXJnaW46IDAsXG4gIHRyYW5zaXRpb246ICdhbGwgMjAwbXMgZWFzZS1pbicsXG4gICc6aG92ZXInOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVJcbiAgfVxufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGUsIGNoaWxkcmVufSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHR5cGU6IHR5cGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319XG4gICAgICAsIGNoaWxkcmVuXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvQXJyb3dMZWZ0U1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQXJyb3dMZWZ0U1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaGVpZ2h0OiBcIjEzXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA1MTUuNTU1IDUxNS41NTVcIiAgICxcbiAgICAgIHdpZHRoOiBcIjEzXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogUEFMRVRURS5URVhUX01BSU4sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMTQzLjQ5MiAyMjEuODYzTDMzNi4yMjYgMjkuMTI5YzYuNjYzLTYuNjY0IDYuNjYzLTE3LjQ2OCAwLTI0LjEzMi02LjY2NS02LjY2Mi0xNy40NjgtNi42NjItMjQuMTMyIDBsLTIwNC44IDIwNC44Yy02LjY2MiA2LjY2NC02LjY2MiAxNy40NjggMCAyNC4xMzJsMjA0LjggMjA0LjhjNi43OCA2LjU0OCAxNy41ODQgNi4zNiAyNC4xMzItLjQyIDYuMzg3LTYuNjE0IDYuMzg3LTE3LjA5OSAwLTIzLjcxMkwxNDMuNDkyIDIyMS44NjN6XCIgICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xlZnRTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd1JpZ2h0U1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQXJyb3dSaWdodFNWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGhlaWdodDogXCIxM1wiLFxuICAgICAgdmlld0JveDogXCIwIDAgNTE1LjU1NSA1MTUuNTU1XCIgICAsXG4gICAgICB3aWR0aDogXCIxM1wiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFBBTEVUVEUuVEVYVF9NQUlOLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTMzNi4yMjYgMjA5LjU5MWwtMjA0LjgtMjA0LjhjLTYuNzgtNi41NDgtMTcuNTg0LTYuMzYtMjQuMTMyLjQyLTYuMzg4IDYuNjE0LTYuMzg4IDE3LjA5OSAwIDIzLjcxMmwxOTIuNzM0IDE5Mi43MzQtMTkyLjczNCAxOTIuNzM0Yy02LjY2MyA2LjY2NC02LjY2MyAxNy40NjggMCAyNC4xMzIgNi42NjUgNi42NjMgMTcuNDY4IDYuNjYzIDI0LjEzMiAwbDIwNC44LTIwNC44YzYuNjYzLTYuNjY1IDYuNjYzLTE3LjQ2OCAwLTI0LjEzMnpcIiAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFycm93UmlnaHRTVkdcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eUF1ZGl0c1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEVtcHR5QXVkaXRzU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgZmlsbDogUEFMRVRURS5CQUNLR1JPVU5EX0dSQVlfTUlELFxuICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICB3aWR0aDogMTAwLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIiAgICxcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMCAwaDI0djI0SDB6XCIgLCBmaWxsOiBcIm5vbmVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzfX0gKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0xOSAzaC00LjE4QzE0LjQgMS44NCAxMy4zIDEgMTIgMWMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS02IDE1aC0ydi0yaDJ2MnptMC00aC0yVjhoMnY2em0tMS05Yy0uNTUgMC0xLS40NS0xLTFzLjQ1LTEgMS0xIDEgLjQ1IDEgMS0uNDUgMS0xIDF6XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNH19IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5QXVkaXRzU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRmlsdGVyU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5jb25zdCBGaWx0ZXJTVkcgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7Y29sb3J9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBoZWlnaHQ6IFwiMTVcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDUxNS41NTUgNTE1LjU1NVwiICAgLFxuICAgICAgd2lkdGg6IFwiMTVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBjb2xvciB8fCBQQUxFVFRFLlRFWFRfTUFJTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExfX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMTc4LjUgMzgyLjVoMTAydi01MWgtMTAydjUxek0wIDc2LjV2NTFoNDU5di01MUgwek03Ni41IDI1NWgzMDZ2LTUxaC0zMDZ2NTF6XCIgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOH19IClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclNWR1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1N0YW5kYXJkTWVudS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuXG5cblxuXG5cblxuY29uc3QgU3RhbmRhcmRNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHttZW51UHJvcHMsIG1lbnVJdGVtc30gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgeyBhcmlhTGFiZWw6ICdTdGFuZGFyZCBkcm9wZG93biBtZW51JywgLi4ubWVudVByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTR9fVxuICAgICAgLCBtZW51SXRlbXMubWFwKCh7bGFiZWwsIG9uQ2xpY2t9LCBpZHgpID0+IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBrZXk6IGlkeCwgbGFiZWw6IGxhYmVsLCBvbkNsaWNrOiBvbkNsaWNrLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTZ9fSApXG4gICAgICApKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZE1lbnVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9hdWRpdHMvQXVkaXRzUm9vdC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEF1ZGl0cyBmcm9tICcuL2NvbXBvbmVudHMvQXVkaXRzJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5cblxuXG5cblxuXG5jb25zdCBBdWRpdHNSb290ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1c2VyLCB1c2Vyc30gPSBwcm9wcyB8fCB7fVxuICBjb25zdCBbYXVkaXRzLCBzZXRBdWRpdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtxdWV1ZXMsIHNldFF1ZXVlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcXVldWVJZCwgc2V0UXVldWVJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IG9yZ0lkID0gdXNlci5jdXJyZW50X29yZ2FuaXphdGlvbl9pZFxuICBjb25zdCB7dGFza3MsIGNvdW50fSA9IGF1ZGl0cyB8fCB7fVxuICBjb25zdCBQQUdFX0xJTUlUID0gNTBcblxuICBjb25zdCBvbk5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9mZnNldCA8IE1hdGguYWJzKGNvdW50IC0gUEFHRV9MSU1JVCkpIHtcbiAgICAgIHNldE9mZnNldChvZmZzZXQgKyBQQUdFX0xJTUlUKVxuICAgIH1cbiAgfSwgW2NvdW50LCBvZmZzZXRdKVxuXG4gIGNvbnN0IG9uQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAob2Zmc2V0ID49IFBBR0VfTElNSVQpIHtcbiAgICAgIHNldE9mZnNldChvZmZzZXQgLSBQQUdFX0xJTUlUKVxuICAgIH1cbiAgfSwgW2NvdW50LCBvZmZzZXRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdWRpdHMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsaW1pdDogUEFHRV9MSU1JVCxcbiAgICAgICAgICBxdWV1ZV9pZDogcXVldWVJZCxcbiAgICAgICAgICB3b3JrZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgICBvZmZzZXRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKFxuICAgICAgICBgL29yZ3MvJHtvcmdJZH0vcXVldWVzL3Rhc2tzL2NvbXBsZXRlZGAsXG4gICAgICAgIHBheWxvYWRcbiAgICAgIClcbiAgICAgIGNvbnN0IHtkYXRhOiBxdWV1ZXN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHRhc2tfc3RhdHVzOiAnY29tcGxldGVkJ1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBzZXRBdWRpdHMoZGF0YSlcbiAgICAgIHNldFF1ZXVlcyhxdWV1ZXMpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIGZldGNoQXVkaXRzKClcbiAgfSwgW3F1ZXVlSWQsIHVzZXJJZCwgb2Zmc2V0LCB1c2VyXSlcblxuICBpZiAobG9hZGluZykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ1BhZ2UsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fSApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF1ZGl0cywge1xuICAgICAgdGFza3M6IHRhc2tzIHx8IFtdLFxuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgb25OZXh0OiBvbk5leHQsXG4gICAgICBvbkJhY2s6IG9uQmFjayxcbiAgICAgIGxpbWl0OiBQQUdFX0xJTUlULFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBxdWV1ZXM6IHF1ZXVlcyxcbiAgICAgIHNldFF1ZXVlSWQ6IHNldFF1ZXVlSWQsXG4gICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgc2V0VXNlcklkOiBzZXRVc2VySWQsXG4gICAgICB1c2VySWQ6IHVzZXJJZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX1cbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2Vyczogc3RhdGUudXNlcnNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShBdWRpdHNSb290KVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9jb21wb25lbnRzL0F1ZGl0cy50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IExpc3RQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RQYWdlL0xpc3RQYWdlJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCBBcnJvd0xlZnRJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93TGVmdFNWRydcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd1JpZ2h0U1ZHJ1xuaW1wb3J0IEF2YXRhciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgZ2V0SW5pdGlhbHMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuaW1wb3J0IHVzZU1lbnUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCBMaXN0VGl0bGUgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFRpdGxlJ1xuaW1wb3J0IFN0YW5kYXJkTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUnXG5pbXBvcnQgRmlsdGVySWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcnXG5pbXBvcnQgRW1wdHlQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZSdcbmltcG9ydCBFbXB0eUF1ZGl0c0ljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlBdWRpdHNTVkcnXG5pbXBvcnQgSWNvbkJ1dHRvbldyYXBwZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbkJ1dHRvbldyYXBwZXInXG5cbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQge0F1ZGl0RGVjaXNpb25JY29ufSBmcm9tICd1bml2ZXJzYWwvbW9kdWxlcy90YXNrL2NvbXBvbmVudHMvU2lkZWJhcidcbmltcG9ydCB7U1RBVFVTX1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29sdW1uQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgaGVpZ2h0OiA0MCxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMTAwcHggMWZyIDE4MHB4IDEwMHB4IDEwMHB4IDgwcHggMTAwcHgnLFxuICBncmlkQ29sdW1uR2FwOiAxNVxufSlcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdih7XG4gIGhlaWdodDogNDUsXG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgbWF4V2lkdGg6ICc4MCUnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMjAwcHggMjAwcHgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgUGFnaW5hdG9yID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG59KVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5zcGFuKHtcbiAgbWFyZ2luTGVmdDogNyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBTcGFjZXIgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luUmlnaHQ6IDcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IExpbmVJdGVtID0gc3R5bGVkLmRpdih7XG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgY3Vyc29yOiAncG9pbnRlciAhaW1wb3J0YW50JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBTbWFsbFRleHQgPSBzdHlsZWQuc3Bhbih7XG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNCxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KVxuXG5jb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBQYWdlQ291bnQgPSBzdHlsZWQoUGxhaW5CdXR0b24pKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMTQsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUixcbiAgbWFyZ2luTGVmdDogMixcbiAgbWFyZ2luUmlnaHQ6IDIsXG4gIHdpZHRoOiAnYXV0bycsXG4gIGJvcmRlclJhZGl1czogMCxcbiAgaGVpZ2h0OiAyNSxcbiAgbGluZUhlaWdodDogJzI1cHgnXG59KVxuXG5jb25zdCBQYWdpbmF0ZUJ0biA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHtsZWZ0fSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMjUsXG4gICAgbGluZUhlaWdodDogJzI1cHgnLFxuICAgIHdpZHRoOiAzMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBiYWNrZ3JvdW5kOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVIsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IGxlZnQgPyAwIDogNCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogbGVmdCA/IDAgOiA0LFxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGxlZnQgPyA0IDogMCxcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBsZWZ0ID8gNCA6IDBcbiAgfVxufSlcblxuY29uc3QgU3R5bGVkRWwgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luOiAnMCAxNXB4JyxcbiAgcGFkZGluZzogJzdweCAwJyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBtYXhXaWR0aDogMzUwLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IEhSID0gc3R5bGVkLmRpdih7XG4gIGhlaWdodDogMSxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVlcbn0pXG5cbmNvbnN0IFN0eWxlZENvbW1lbnRzSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luUmlnaHQ6IDE1LFxuICBtYXJnaW5MZWZ0OiA0LFxuICBmb250U2l6ZTogMTdcbn0pXG5cbmNvbnN0IEF1ZGl0cyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGFza3MsXG4gICAgY291bnQsXG4gICAgb25OZXh0LFxuICAgIG9uQmFjayxcbiAgICBsaW1pdCxcbiAgICBvZmZzZXQsXG4gICAgcXVldWVzLFxuICAgIHNldFF1ZXVlSWQsXG4gICAgc2V0VXNlcklkLFxuICAgIHF1ZXVlSWQsXG4gICAgdXNlcklkLFxuICAgIHVzZXJzXG4gIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0ge2xhYmVsOiBSZWFjdC5jcmVhdGVFbGVtZW50KEhSLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Nn19ICl9XG5cbiAgY29uc3Qgd01lbnVJdGVtcyA9IHF1ZXVlcy5tYXAoKHcpID0+ICh7XG4gICAgbGFiZWw6IHF1ZXVlSWQgPT09IHcuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2OX19LCB3Lm5hbWUpIDogdy5uYW1lLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFF1ZXVlSWQoKHByZXYpID0+IChwcmV2ID09PSB3LmlkID8gdW5kZWZpbmVkIDogdy5pZCkpXG4gIH0pKVxuICBpZiAocXVldWVJZCkge1xuICAgIHdNZW51SXRlbXMudW5zaGlmdChzZXBhcmF0b3IpXG4gICAgd01lbnVJdGVtcy51bnNoaWZ0KHtsYWJlbDogJ0NsZWFyIGZpbHRlcicsIG9uQ2xpY2s6ICgpID0+IHNldFF1ZXVlSWQodW5kZWZpbmVkKX0pXG4gIH1cblxuICBjb25zdCBjYk1lbnVJdGVtcyA9IHVzZXJzLm1hcCgodSkgPT4gKHtcbiAgICBsYWJlbDogdXNlcklkID09PSB1LmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fSwgdS5uYW1lKSA6IHUubmFtZSxcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRVc2VySWQoKHByZXYpID0+IChwcmV2ID09PSB1LmlkID8gdW5kZWZpbmVkIDogdS5pZCkpXG4gIH0pKVxuICBpZiAodXNlcklkKSB7XG4gICAgY2JNZW51SXRlbXMudW5zaGlmdChzZXBhcmF0b3IpXG4gICAgY2JNZW51SXRlbXMudW5zaGlmdCh7bGFiZWw6ICdDbGVhciBmaWx0ZXInLCBvbkNsaWNrOiAoKSA9PiBzZXRVc2VySWQodW5kZWZpbmVkKX0pXG4gIH1cblxuICBjb25zdCB7XG4gICAgbWVudVBvcnRhbDogbWVudVBvcnRhbFF1ZXVlLFxuICAgIG9yaWdpblJlZjogb3JpZ2luUmVmUXVldWUsXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNRdWV1ZSxcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbFF1ZXVlXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgbWVudUNvbnRlbnRTdHlsZXM6IHt3aWR0aDogMzUwfVxuICB9KVxuXG4gIGNvbnN0IHtcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ2IsXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5SZWZDYixcbiAgICBtZW51UHJvcHM6IG1lbnVQcm9wc0NiLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsQ2JcbiAgfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBtZW51Q29udGVudFN0eWxlczoge3dpZHRoOiAzNTB9XG4gIH0pXG5cbiAgY29uc3QgcGFnZUhlYWRlciA9IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDd9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDh9fSwgXCJUYXNrIElEXCIgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDl9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxMX19LCBcIlF1ZXVlIE5hbWVcIiApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b25XcmFwcGVyLCB7IHJlZjogb3JpZ2luUmVmUXVldWUsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbFF1ZXVlLCB0eXBlOiBcImJ1dHRvblwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjEyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWx0ZXJJY29uLCB7IGNvbG9yOiBxdWV1ZUlkID8gUEFMRVRURS5URVhUX01BSU4gOiBQQUxFVFRFLlRFWFRfR1JBWSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxM319IClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwibGVmdFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE3fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fSwgXCJDb21wbGV0ZWQgQnlcIiApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b25XcmFwcGVyLCB7IHJlZjogb3JpZ2luUmVmQ2IsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbENiLCB0eXBlOiBcImJ1dHRvblwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjIwfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWx0ZXJJY29uLCB7IGNvbG9yOiB1c2VySWQgPyBQQUxFVFRFLlRFWFRfTUFJTiA6IFBBTEVUVEUuVEVYVF9HUkFZLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjIxfX0gKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjV9fSwgXCJDb21wbGV0ZWQgQXRcIiApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IGFsaWduOiBcImNlbnRlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjI2fX0sIFwiU291cmNlXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFRpdGxlLCB7IGFsaWduOiBcImNlbnRlclwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjI3fX0sIFwiQ29tbWVudHNcIilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjI4fX0sIFwiQXVkaXRcIilcbiAgICApXG4gIClcblxuICBjb25zdCBwYWdlRm9vdGVyID0gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzM319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU21hbGxUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzNH19LCBjb3VudCwgXCIgQ29tcGxldGVkIHRhc2tzXCIgIClcbiAgICAgICwgY291bnQgPiBsaW1pdCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdG9yLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzNn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRlQnRuLCB7IGxlZnQ6IHRydWUsIG9uQ2xpY2s6IG9uQmFjaywgZGlzYWJsZWQ6IG9mZnNldCA8IGxpbWl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM3fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBcnJvd0xlZnRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOH19IClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VDb3VudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDB9fSwgYCR7KG9mZnNldCAvIGxpbWl0ICsgMSkudG9GaXhlZCgpfSAvICR7TWF0aC5jZWlsKGNvdW50IC8gbGltaXQpfWApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRlQnRuLCB7IG9uQ2xpY2s6IG9uTmV4dCwgZGlzYWJsZWQ6IG9mZnNldCA+PSBNYXRoLmFicyhjb3VudCAtIGxpbWl0KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0MX19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3dSaWdodEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQyfX0gKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IGF1ZGl0RGVjaXNpb25JY29uID0ge1xuICAgIG51bGw6IG51bGwsXG4gICAgZmFsc2U6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXREZWNpc2lvbkljb24sIHsgY29sb3I6IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjUxfX0sIFwiY2FuY2VsXCIpLFxuICAgIHRydWU6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXREZWNpc2lvbkljb24sIHsgY29sb3I6IFNUQVRVU19QQUxFVFRFLkNPTVBMRVRFRCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1Mn19LCBcImNoZWNrX2NpcmNsZVwiKVxuICB9XG5cbiAgY29uc3QgaXRlbUxpc3QgPSB0YXNrcy5tYXAoXG4gICAgKHtcbiAgICAgIGlkOiB0YXNrSWQsXG4gICAgICBjb21wbGV0ZWRfYnk6IGNvbXBsZXRlZEJ5LFxuICAgICAgY29tcGxldGVkX2F0OiBjb21wbGV0ZWRBdCxcbiAgICAgIGNvcnJlY3QsXG4gICAgICBxdWV1ZTogbmFtZSxcbiAgICAgIHNvdXJjZSxcbiAgICAgIG5fY29tbWVudHNcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgc291cmNlVGV4dFN0eWxlID0gJ25vbmUnXG4gICAgICBzb3VyY2VUZXh0U3R5bGUgPSBbJ21hbnVhbCcsICd6YXBpZXInXS5pbmNsdWRlcyhzb3VyY2UpID8gJ2NhcGl0YWxpemUnIDogc291cmNlVGV4dFN0eWxlXG4gICAgICBzb3VyY2VUZXh0U3R5bGUgPSBbJ2FwaSddLmluY2x1ZGVzKHNvdXJjZSkgPyAndXBwZXJjYXNlJyA6IHNvdXJjZVRleHRTdHlsZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2x1bW5Db250YWluZXIsIHtcbiAgICAgICAgICBrZXk6IHRhc2tJZCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcXVldWVzL3Rhc2tzLyR7dGFza0lkfS9hdWRpdGAsXG4gICAgICAgICAgICAgIHN0YXRlOiB7aXNBdWRpdHM6IHRydWV9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2OX19XG4gICAgICAgIFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzh9fSwgdGFza0lkKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzl9fSwgbmFtZSlcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjgwfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXJCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODF9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCB7IGluaXRpYWxzOiBnZXRJbml0aWFscyhjb21wbGV0ZWRCeSksIGNvbG9yOiBjb2xvckZyb21TdHJpbmcoY29tcGxldGVkQnkpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjgyfX0gKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjgzfX0sIGNvbXBsZXRlZEJ5KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjg2fX0sIGRheWpzKGNvbXBsZXRlZEF0KS5mb3JtYXQoJ0RELU1NLVlZWVknKSlcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IHNvdXJjZVRleHRTdHlsZSxcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4N319XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIHNvdXJjZVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAganVzdGlmeVNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVlcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOTd9fVxuICAgICAgICAgIFxuICAgICAgICAgICAgLCBuX2NvbW1lbnRzID4gMCAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgICAsIG5fY29tbWVudHNcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkQ29tbWVudHNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwN319LCBcImNvbW1lbnRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluZUl0ZW0sIHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAganVzdGlmeVNlbGY6ICdmbGV4LXN0YXJ0J1xuICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxMX19XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIGF1ZGl0RGVjaXNpb25JY29uW2NvcnJlY3RdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBhZ2UsIHtcbiAgICAgICAgcGFnZUhlYWRlcjogcGFnZUhlYWRlcixcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1MaXN0LFxuICAgICAgICBwYWdlRm9vdGVyOiBwYWdlRm9vdGVyLFxuICAgICAgICBlbXB0eUxpc3Q6IFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlQYWdlLCB7XG4gICAgICAgICAgICBzdmc6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlBdWRpdHNJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzMn19ICksXG4gICAgICAgICAgICBoZWFkZXI6ICdObyB0YXNrcyBoZXJl4oCmJyxcbiAgICAgICAgICAgIHN1YkhlYWRlcjogJ1RyeSB1c2luZyBkaWZmZXJlbnQgZmlsdGVycy4nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMxfX1cbiAgICAgICAgICApXG4gICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyNn19XG4gICAgICApXG4gICAgICAsIG1lbnVQb3J0YWxRdWV1ZShSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc1F1ZXVlLCBtZW51SXRlbXM6IHdNZW51SXRlbXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzh9fSApKVxuICAgICAgLCBtZW51UG9ydGFsQ2IoUmVhY3QuY3JlYXRlRWxlbWVudChTdGFuZGFyZE1lbnUsIHsgbWVudVByb3BzOiBtZW51UHJvcHNDYiwgbWVudUl0ZW1zOiBjYk1lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOX19ICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGl0c1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL291dHN0YW5kaW5nL091dHN0YW5kaW5nUm9vdC50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IE91dHN0YW5kaW5nIGZyb20gJy4vY29tcG9uZW50cy9PdXRzdGFuZGluZydcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcblxuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xvYWRpbmdQYWdlJ1xuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5cblxuXG5cblxuXG5jb25zdCBPdXRzdGFuZGluZ1Jvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXIsIHVzZXJzfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IFtxdWV1ZXMsIHNldFF1ZXVlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxdWV1ZUlkLCBzZXRRdWV1ZUlkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IFBBR0VfTElNSVQgPSA1MFxuXG4gIGNvbnN0IG9uTmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAob2Zmc2V0IDwgTWF0aC5hYnMoY291bnQgLSBQQUdFX0xJTUlUKSkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCArIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgY29uc3Qgb25CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvZmZzZXQgPj0gUEFHRV9MSU1JVCkge1xuICAgICAgc2V0T2Zmc2V0KG9mZnNldCAtIFBBR0VfTElNSVQpXG4gICAgfVxuICB9LCBbY291bnQsIG9mZnNldF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlcygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgICAgY29uc3Qge2Vycm9ycywgZGF0YTogcXVldWVzfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5odHRwSGFuZGxlciwgJ2NhbGwnLCBfMiA9PiBfMihgL29yZ3MvJHtvcmdJZH0vcXVldWVzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KV0pXG5cbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVldWVzIScsIEpTT04uc3RyaW5naWZ5KGVycm9ycykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocXVldWVzKSB7XG4gICAgICAgICAgc2V0Q291bnQocXVldWVzLmxlbmd0aClcbiAgICAgICAgICBzZXRRdWV1ZXMocXVldWVzKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaFF1ZXVlcygpXG4gIH0sIFtxdWV1ZUlkLCB1c2VySWQsIG9mZnNldCwgdXNlcl0pXG5cbiAgdXNlRG9jdW1lbnRUaXRsZSgnT3V0c3RhbmRpbmcgUXVldWVzIHwgSHVtYW4gTGFtYmRhcycpXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdQYWdlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX0gKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChPdXRzdGFuZGluZywge1xuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgb25OZXh0OiBvbk5leHQsXG4gICAgICBvbkJhY2s6IG9uQmFjayxcbiAgICAgIGxpbWl0OiBQQUdFX0xJTUlULFxuICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICBxdWV1ZXM6IHF1ZXVlcyxcbiAgICAgIHNldFF1ZXVlSWQ6IHNldFF1ZXVlSWQsXG4gICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgc2V0VXNlcklkOiBzZXRVc2VySWQsXG4gICAgICB1c2VySWQ6IHVzZXJJZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2Vyczogc3RhdGUudXNlcnNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShPdXRzdGFuZGluZ1Jvb3QpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvb3V0c3RhbmRpbmcvY29tcG9uZW50cy9PdXRzdGFuZGluZy50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZUhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IExpc3RQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RQYWdlL0xpc3RQYWdlJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCBBcnJvd0xlZnRJY29uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0Fycm93TGVmdFNWRydcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9BcnJvd1JpZ2h0U1ZHJ1xuaW1wb3J0IEF2YXRhciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgZ2V0SW5pdGlhbHMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuaW1wb3J0IHVzZU1lbnUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCBMaXN0VGl0bGUgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFRpdGxlJ1xuaW1wb3J0IFN0YW5kYXJkTWVudSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TdGFuZGFyZE1lbnUnXG5pbXBvcnQgRmlsdGVySWNvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9GaWx0ZXJTVkcnXG5pbXBvcnQgRW1wdHlQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZSdcbmltcG9ydCBFbXB0eUF1ZGl0c0ljb24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlBdWRpdHNTVkcnXG5pbXBvcnQgSWNvbkJ1dHRvbldyYXBwZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvSWNvbkJ1dHRvbldyYXBwZXInXG5cbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbHVtbkNvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gIGhlaWdodDogNDAsXG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzgwcHggMTAwcHggMWZyIDE4MHB4IDE1MHB4JyxcbiAgZ3JpZENvbHVtbkdhcDogMTVcbn0pXG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6IDQ1LFxuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIG1heFdpZHRoOiAnODAlJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzIwMHB4IDIwMHB4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IFBhZ2luYXRvciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xufSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuc3Bhbih7XG4gIG1hcmdpbkxlZnQ6IDcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpblJpZ2h0OiA3LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBMaW5lSXRlbSA9IHN0eWxlZC5kaXYoe1xuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGN1cnNvcjogJ3BvaW50ZXIgIWltcG9ydGFudCcsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgU21hbGxUZXh0ID0gc3R5bGVkLnNwYW4oe1xuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMTQsXG4gIHVzZXJTZWxlY3Q6ICdub25lJ1xufSlcblxuY29uc3QgQXZhdGFyQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgUGFnZUNvdW50ID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDE0LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfSE9WRVIsXG4gIG1hcmdpbkxlZnQ6IDIsXG4gIG1hcmdpblJpZ2h0OiAyLFxuICB3aWR0aDogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIGhlaWdodDogMjUsXG4gIGxpbmVIZWlnaHQ6ICcyNXB4J1xufSlcblxuY29uc3QgUGFnaW5hdGVCdG4gPSBzdHlsZWQoUGxhaW5CdXR0b24pKCh7bGVmdH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IDI1LFxuICAgIGxpbmVIZWlnaHQ6ICcyNXB4JyxcbiAgICB3aWR0aDogMzAsXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgYmFja2dyb3VuZDogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBsZWZ0ID8gMCA6IDQsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IGxlZnQgPyAwIDogNCxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBsZWZ0ID8gNCA6IDAsXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogbGVmdCA/IDQgOiAwXG4gIH1cbn0pXG5cbmNvbnN0IFN0eWxlZEVsID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbjogJzAgMTVweCcsXG4gIHBhZGRpbmc6ICc3cHggMCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgLi4udGV4dE92ZXJmbG93XG59KVxuXG5jb25zdCBIUiA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6IDEsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZXG59KVxuXG5jb25zdCBPdXRzdGFuZGluZyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY291bnQsXG4gICAgb25OZXh0LFxuICAgIG9uQmFjayxcbiAgICBsaW1pdCxcbiAgICBvZmZzZXQsXG4gICAgcXVldWVzLFxuICAgIHNldFF1ZXVlSWQsXG4gICAgc2V0VXNlcklkLFxuICAgIHF1ZXVlSWQsXG4gICAgdXNlcklkLFxuICAgIHVzZXJzXG4gIH0gPSBwcm9wc1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3Qgc2VwYXJhdG9yID0ge2xhYmVsOiBSZWFjdC5jcmVhdGVFbGVtZW50KEhSLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1Mn19ICl9XG5cbiAgY29uc3Qgd01lbnVJdGVtcyA9IHF1ZXVlcy5tYXAoKHcpID0+ICh7XG4gICAgbGFiZWw6IHF1ZXVlSWQgPT09IHcuaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1NX19LCB3Lm5hbWUpIDogdy5uYW1lLFxuICAgIG9uQ2xpY2s6ICgpID0+IHNldFF1ZXVlSWQoKHByZXYpID0+IChwcmV2ID09PSB3LmlkID8gdW5kZWZpbmVkIDogdy5pZCkpXG4gIH0pKVxuICBpZiAocXVldWVJZCkge1xuICAgIHdNZW51SXRlbXMudW5zaGlmdChzZXBhcmF0b3IpXG4gICAgd01lbnVJdGVtcy51bnNoaWZ0KHtsYWJlbDogJ0NsZWFyIGZpbHRlcicsIG9uQ2xpY2s6ICgpID0+IHNldFF1ZXVlSWQodW5kZWZpbmVkKX0pXG4gIH1cblxuICBjb25zdCBjYk1lbnVJdGVtcyA9IHVzZXJzLm1hcCgodSkgPT4gKHtcbiAgICBsYWJlbDogdXNlcklkID09PSB1LmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjR9fSwgdS5uYW1lKSA6IHUubmFtZSxcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRVc2VySWQoKHByZXYpID0+IChwcmV2ID09PSB1LmlkID8gdW5kZWZpbmVkIDogdS5pZCkpXG4gIH0pKVxuICBpZiAodXNlcklkKSB7XG4gICAgY2JNZW51SXRlbXMudW5zaGlmdChzZXBhcmF0b3IpXG4gICAgY2JNZW51SXRlbXMudW5zaGlmdCh7bGFiZWw6ICdDbGVhciBmaWx0ZXInLCBvbkNsaWNrOiAoKSA9PiBzZXRVc2VySWQodW5kZWZpbmVkKX0pXG4gIH1cblxuICBjb25zdCB7XG4gICAgbWVudVBvcnRhbDogbWVudVBvcnRhbFF1ZXVlLFxuICAgIG9yaWdpblJlZjogb3JpZ2luUmVmUXVldWUsXG4gICAgbWVudVByb3BzOiBtZW51UHJvcHNRdWV1ZSxcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZVBvcnRhbFF1ZXVlXG4gIH0gPSB1c2VNZW51KE1lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVCwge1xuICAgIGlzRHJvcGRvd246IHRydWUsXG4gICAgbWVudUNvbnRlbnRTdHlsZXM6IHt3aWR0aDogMzUwfVxuICB9KVxuXG4gIGNvbnN0IHtcbiAgICBtZW51UG9ydGFsOiBtZW51UG9ydGFsQ2IsXG4gICAgb3JpZ2luUmVmOiBvcmlnaW5SZWZDYixcbiAgICBtZW51UHJvcHM6IG1lbnVQcm9wc0NiLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlUG9ydGFsQ2JcbiAgfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZSxcbiAgICBtZW51Q29udGVudFN0eWxlczoge3dpZHRoOiAzNTB9XG4gIH0pXG5cbiAgY29uc3QgcGFnZUhlYWRlciA9IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTN9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTR9fSwgXCJRdWV1ZSBJRFwiIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk1fX0sIFwiT3JnIElEXCIgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTZ9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5OH19LCBcIlF1ZXVlIE5hbWVcIiApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b25XcmFwcGVyLCB7IHJlZjogb3JpZ2luUmVmUXVldWUsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbFF1ZXVlLCB0eXBlOiBcImJ1dHRvblwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk5fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWx0ZXJJY29uLCB7IGNvbG9yOiBxdWV1ZUlkID8gUEFMRVRURS5URVhUX01BSU4gOiBQQUxFVFRFLlRFWFRfR1JBWSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwMH19IClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0VGl0bGUsIHsgYWxpZ246IFwiY2VudGVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDR9fSwgXCJDcmVhdGVkIEF0XCIgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RUaXRsZSwgeyBhbGlnbjogXCJjZW50ZXJcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNX19LCBcIlBlbmRpbmcgVGFza3NcIiApXG4gICAgKVxuICApXG5cbiAgY29uc3QgcGFnZUZvb3RlciA9IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3Rlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTB9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNtYWxsVGV4dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTF9fSwgY291bnQsIFwiIENvbXBsZXRlZCB0YXNrc1wiICApXG4gICAgICAsIGNvdW50ID4gbGltaXQgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTN9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0ZUJ0biwgeyBsZWZ0OiB0cnVlLCBvbkNsaWNrOiBvbkJhY2ssIGRpc2FibGVkOiBvZmZzZXQgPCBsaW1pdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3dMZWZ0SWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTV9fSApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlQ291bnQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE3fX0sIGAkeyhvZmZzZXQgLyBsaW1pdCArIDEpLnRvRml4ZWQoKX0gLyAke01hdGguY2VpbChjb3VudCAvIGxpbWl0KX1gKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0ZUJ0biwgeyBvbkNsaWNrOiBvbk5leHQsIGRpc2FibGVkOiBvZmZzZXQgPj0gTWF0aC5hYnMoY291bnQgLSBsaW1pdCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFycm93UmlnaHRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxOX19IClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBjb25zdCBpdGVtTGlzdCA9IHF1ZXVlcy5tYXAoKHtpZCwgY3JlYXRlZF9hdCwgb3JnX2lkLCBuX3Rhc2tzLCBuYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbkNvbnRhaW5lciwge1xuICAgICAgICBrZXk6IGlkLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PlxuICAgICAgICAgIGhpc3RvcnkucHVzaChgL3F1ZXVlcy8ke2lkfWApXG4gICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOH19XG4gICAgICBcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzNH19LCBpZClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzNX19LCBvcmdfaWQpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5lSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzZ9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzN319XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCB7IGluaXRpYWxzOiBnZXRJbml0aWFscyhuYW1lKSwgY29sb3I6IGNvbG9yRnJvbVN0cmluZyhuYW1lKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOX19IClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDB9fSwgY3JlYXRlZF9hdClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVJdGVtLCB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDN9fVxuICAgICAgICBcbiAgICAgICAgICAsIG5fdGFza3NcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0UGFnZSwge1xuICAgICAgICBwYWdlSGVhZGVyOiBwYWdlSGVhZGVyLFxuICAgICAgICBpdGVtTGlzdDogaXRlbUxpc3QsXG4gICAgICAgIHBhZ2VGb290ZXI6IHBhZ2VGb290ZXIsXG4gICAgICAgIGVtcHR5TGlzdDogXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVBhZ2UsIHtcbiAgICAgICAgICAgIHN2ZzogUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eUF1ZGl0c0ljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY0fX0gKSxcbiAgICAgICAgICAgIGhlYWRlcjogJ05vIHRhc2tzIGhlcmXigKYnLFxuICAgICAgICAgICAgc3ViSGVhZGVyOiAnVHJ5IHVzaW5nIGRpZmZlcmVudCBmaWx0ZXJzLicsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjN9fVxuICAgICAgICAgIClcbiAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjU4fX1cbiAgICAgIClcbiAgICAgICwgbWVudVBvcnRhbFF1ZXVlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhbmRhcmRNZW51LCB7IG1lbnVQcm9wczogbWVudVByb3BzUXVldWUsIG1lbnVJdGVtczogd01lbnVJdGVtcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3MH19ICkpXG4gICAgICAsIG1lbnVQb3J0YWxDYihSZWFjdC5jcmVhdGVFbGVtZW50KFN0YW5kYXJkTWVudSwgeyBtZW51UHJvcHM6IG1lbnVQcm9wc0NiLCBtZW51SXRlbXM6IGNiTWVudUl0ZW1zLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjcxfX0gKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0c3RhbmRpbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=