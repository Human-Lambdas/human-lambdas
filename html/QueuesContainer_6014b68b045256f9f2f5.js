(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["QueuesContainer"],{

/***/ "./src/client/components/ActionButton.tsx":
/*!************************************************!*\
  !*** ./src/client/components/ActionButton.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");




const ActionButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e469vky0"
})(({
  waiting,
  disabled
}) => {
  //const {waiting, disabled} = props
  //const isDisabled = disabled || waiting
  return {
    height: 28,
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
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
      backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    },
    ':focus, :active': {
      boxShadow: `0 0 0 3px ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
      backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  };
});

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

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

/***/ "./src/client/components/Icons/EmptyQueuesSVG.tsx":
/*!********************************************************!*\
  !*** ./src/client/components/Icons/EmptyQueuesSVG.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/EmptyQueuesSVG.tsx";


const EmptyQueuesSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    height: 100,
    viewBox: "0 0 24 24",
    width: 100,
    fill: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].BACKGROUND_GRAY_MID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    fill: "none",
    height: "24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    fill: "none",
    height: "24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    fill: "none",
    height: "24",
    width: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (EmptyQueuesSVG);

/***/ }),

/***/ "./src/client/hooks/useDocumentTitle.ts":
/*!**********************************************!*\
  !*** ./src/client/hooks/useDocumentTitle.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDocumentTitle = title => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.title = title;
  }, [title]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDocumentTitle);

/***/ }),

/***/ "./src/client/modules/metrics/containers/Queues/QueuesContainer.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/modules/metrics/containers/Queues/QueuesContainer.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Charts_Charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Charts/Charts */ "./src/client/modules/metrics/components/Charts/Charts.tsx");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var components_LoadingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/metrics/containers/Queues/QueuesContainer.tsx";







const QueuesContainer = props => {
  const {
    queues,
    setActive,
    queueIds,
    user
  } = props;
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [range, setRange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('weekly');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const orgId = user.current_organization_id;
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchQueues() {
      setLoading(true);
      const type = [utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].COMPLETED, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].AHT, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].PENDING, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].TAT, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].ACCURACY];
      const {
        data
      } = await networker.httpHandler(`/orgs/${orgId}/metrics/queues`, {
        method: 'GET',
        params: {
          range,
          type,
          queue_id: queueIds
        },
        paramsSerializer: params => qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params, {
          arrayFormat: 'repeat'
        }),
        data: {
          range,
          type,
          queue_id: queueIds
        }
      });
      setChartData(data);
      setLoading(false);
    }

    fetchQueues();
  }, [range, queueIds]);
  let renderComp;
  const {
    completed,
    pending,
    aht,
    tat,
    accuracy
  } = chartData;
  const charts = [{
    data: completed,
    title: 'Completed Tasks Over Time',
    lines: queues
  }, {
    data: pending,
    title: 'Pending Tasks Over Time',
    lines: queues
  }, {
    data: aht,
    title: 'Average Handling Time (AHT)',
    inSeconds: true,
    lines: queues
  }, {
    data: tat,
    title: 'Turn Around Time (TAT)',
    inSeconds: true,
    lines: queues
  }, {
    data: accuracy,
    title: 'Accuracy',
    inPercent: true,
    lines: queues
  }];

  if (completed && pending && aht && tat && accuracy) {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Charts_Charts__WEBPACK_IMPORTED_MODULE_2__["default"], {
      filterMenu: true,
      loading: loading,
      lines: queues,
      charts: charts,
      range: range,
      setRange: setRange,
      setActive: setActive,
      title: 'Queue Performance',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    });
  } else {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    });
  }

  return renderComp;
};

/* harmony default export */ __webpack_exports__["default"] = (QueuesContainer);

/***/ }),

/***/ "./src/client/utils/formatCommas.ts":
/*!******************************************!*\
  !*** ./src/client/utils/formatCommas.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formatCommas = number => ('' + number).split('').reverse().join('').replace(/(...)/g, '$1,').split('').reverse().join('').replace(/^,/, '');

/* harmony default export */ __webpack_exports__["default"] = (formatCommas);

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

/***/ "./src/universal/components/Avatar.tsx":
/*!*********************************************!*\
  !*** ./src/universal/components/Avatar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/getFirstLetter */ "./src/universal/utils/getFirstLetter.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/Avatar.tsx";



const Avatar = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    initials,
    color,
    onClick,
    style,
    trim = true
  } = props;
  const backgroundColor = color || _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN;

  const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
    target: "ebmair80"
  })({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    testAlign: 'center',
    height: `20px`,
    width: `20px`,
    minWidth: `20px`,
    fontWeight: 700,
    fontSize: 11,
    color: '#fff',
    borderRadius: '100%',
    backgroundColor: backgroundColor,
    userSelect: 'none',
    margin: '0px 2px'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
    ref: ref,
    onClick: onClick,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, trim ? Object(universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__["default"])(initials) : initials);
});
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/universal/modules/queue/components/Queues.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/modules/queue/components/Queues.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var client_components_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/ActionButton */ "./src/client/components/ActionButton.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_utils_formatCommas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/utils/formatCommas */ "./src/client/utils/formatCommas.ts");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var client_components_Icons_EmptyQueuesSVG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/components/Icons/EmptyQueuesSVG */ "./src/client/components/Icons/EmptyQueuesSVG.tsx");
/* harmony import */ var client_hooks_useModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var _TemplatesModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TemplatesModal */ "./src/universal/modules/queue/components/TemplatesModal.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/Queues.tsx";















const Page = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1r4nhuv0"
})({
  name: "x5g8l3",
  styles: "background:#fff;overflow-y:auto;min-width:800px;padding:0 10%;height:100%;"
});

const Header = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1r4nhuv1"
})({
  name: "1f1nedc",
  styles: "display:flex;justify-content:space-between;padding:96px 0 28px 0;font-weight:600;font-size:24px;line-height:32px;"
});

const ItemListContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1r4nhuv2"
})({
  name: "106j7d6",
  styles: "display:flex;flex-direction:column;flex-wrap:wrap;padding-top:32px;"
});

const ListItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1r4nhuv3"
})({
  lineHeight: '40px',
  height: 136,
  maxWidth: '100%',
  marginBottom: 32,
  border: `1px solid ${client_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].BORDER_GRAY}`,
  borderRadius: '16px',
  padding: '24px 40px 24px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  ':hover': {
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.02)'
  }
});

const QueueTitle = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  target: "e1r4nhuv4"
})({
  color: `${client_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].PRIMARY_MAIN}`,
  fontWeight: 600,
  fontSize: '22px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

const SubInfo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1r4nhuv5"
})({
  name: "ivrut9",
  styles: "display:grid;grid-template-columns:1fr 1fr;"
});

const PendingTasksContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1r4nhuv6"
})({
  name: "dyue77",
  styles: "width:184px;"
});

const PendingTasks = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1r4nhuv7"
})({
  color: `${client_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].PRIMARY_MAIN}`,
  fontWeight: 600
});

const NewQueueButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e1r4nhuv8"
})({
  name: "1ssbn0c",
  styles: "height:30px;"
});

const Assigned = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1r4nhuv9"
})({
  name: "131wcsq",
  styles: "padding-left:4px;"
});

const Queues = props => {
  const {
    user: {
      is_admin: isAdmin
    }
  } = props;
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    queues = [],
    templates = []
  } = props;
  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_7__["default"])('Queues Home | Human Lambdas');
  const {
    modalPortal,
    togglePortal,
    closePortal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_13__["default"])({
    noClose: false
  });

  const showTemplatesModal = () => {
    Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__["segmentTrack"])('1 - Template Modal Clicked - [QUEUE FUNNEL]', {});
    togglePortal();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Page, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, queues.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, "Queues"), isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewQueueButton, {
    key: 'add_queue',
    onClick: showTemplatesModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, "New queue"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemListContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, queues.map(queue => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItem, {
    key: queue.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueTitle, {
    to: `/queues/${queue.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, queue.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }, "Currently assigned:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Assigned, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, queue.active_users && queue.active_users.map((user, index, list) => {
    const items = list.length;
    if (index > 3) return null;

    if (items > 4 && index === 3) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__["colorFromString"])(user),
        initials: `+${items - 3}`,
        trim: false,
        key: index,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__["colorFromString"])(user),
      initials: user.charAt(0).toUpperCase(),
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PendingTasksContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    }
  }, "Pending Tasks: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PendingTasks, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }, Object(client_utils_formatCommas__WEBPACK_IMPORTED_MODULE_5__["default"])(queue.n_tasks)))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_EmptyPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
    svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Icons_EmptyQueuesSVG__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      }
    }),
    header: "Looks like there aren't any queues yet.",
    subHeader: isAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      }
    }, "Create your first queue, or read our", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
      href: "https://docs.humanlambdas.com/quickstart/creating-a-queue",
      target: "_blank",
      rel: "noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    }, "documentation"), ' ', "to learn more.") : 'Before you can access queues, you will need to be added to one.',
    button: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      }
    }, isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewQueueButton, {
      key: 'add_queue',
      onClick: showTemplatesModal,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      }
    }, "New queue")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  })), modalPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TemplatesModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    templates: templates,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Queues);

/***/ }),

/***/ "./src/universal/modules/queue/components/TemplatesModal.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/modules/queue/components/TemplatesModal.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var _client_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../client/utils/constants */ "./src/client/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/components/TemplatesModal.tsx";






const ModalRoot = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt0"
})({
  display: 'flex',
  flexDirection: 'column',
  width: 550,
  borderRadius: 10,
  backgroundColor: '#fff',
  border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxShadow: _client_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BoxShadow"].MODAL,
  paddingTop: 35,
  paddingBottom: 15,
  maxHeight: 'calc(100vh - 100px)'
});

const Overlay = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt1"
})({
  name: "1ru33mk",
  styles: "position:absolute;bottom:0px;display:block;overflow:overlay;opacity:1;height:50px;width:100%;border-radius:0px 0px 10px 10px;background:linear-gradient(to bottom, transparent, white);"
});

const ModalWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt2"
})({
  name: "oqidzo",
  styles: "display:flex;flex-direction:row;width:100%;overflow:auto;padding-bottom:20px;"
});

const ModalTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt3"
})({
  name: "18wc10g",
  styles: "margin-bottom:25px;padding-left:35px;"
});

const ModalHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt4"
})({
  name: "1n8fo46",
  styles: "font-weight:600;font-size:22px;line-height:27px;margin-bottom:15px;"
});

const TemplatesArea = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt5"
})({
  name: "3j596c",
  styles: "display:flex;flex-direction:column;height:100%;width:100%;"
});

const ItemWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt6"
})({
  name: "172ic6o",
  styles: "background-color:#fff;padding:10px 25px;"
});

const TemplateItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt7"
})({
  name: "1cplrvp",
  styles: "text-align:center;display:flex;flex-direction:row;align-items:center;padding:10px;cursor:pointer;:hover{cursor:pointer;}"
});

const ThumbnailWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt8"
})("border-radius:9px;margin-right:35px;", TemplateItem, ":hover &{box-shadow:0px 5px 10px rgb(0,0,0,0.1);}");

const StyledThumbnail = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img", {
  target: "e1a7t0dt9"
})({
  name: "e5o2m2",
  styles: "display:block;font-size:38px;color:#fff;object-fit:contain;max-width:100px;max-height:100px;border-radius:9px;"
});

const EmptyThumbnail = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt10"
})({
  display: 'block',
  fontSize: 38,
  color: '#fff',
  objectFit: 'contain',
  height: '100px',
  width: '100px',
  border: `1px dashed ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_GRAY_NEW}`,
  borderRadius: 9
});

const TemplateInfo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1a7t0dt11"
})({
  name: "207d6f",
  styles: "display:flex;flex-direction:column;text-align:left;"
});

const TemplateName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("b", {
  target: "e1a7t0dt12"
})({
  name: "6xix1i",
  styles: "font-size:16px;"
});

const Summary = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1a7t0dt13"
})(({
  fontSize,
  fontWeight
}) => ({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARKER_GRAY,
  fontSize: fontSize || 14,
  fontWeight: fontWeight || 400,
  marginTop: 5,
  paddingRight: 10,
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2
}));

const TemplatesModal = props => {
  const {
    templates
  } = props;
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const emptyTemplate = {
    id: null,
    name: 'Blank',
    summary: 'Start with an empty canvas and build exactly what you need.',
    thumbnail: null
  };
  const allTemplates = [emptyTemplate, ...templates];
  const handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((id, name) => {
    Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_3__["segmentTrack"])(`2 - Queue Creation from Template - [QUEUE FUNNEL]`, {
      templateName: name
    });
    if (!id) return history.push(`/queues/new`);
    return history.push({
      pathname: '/queues/new',
      state: {
        templateId: id
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalRoot, {
    id: "parentId",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, "New Queue"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Summary, {
    fontSize: 16,
    fontWeight: 500,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, "Start from scratch or choose from one of the templates below")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TemplatesArea, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, allTemplates.map(({
    id,
    name,
    summary,
    thumbnail
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper, {
      key: id,
      onClick: () => handleClick(id, name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TemplateItem, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThumbnailWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      }
    }, thumbnail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledThumbnail, {
      src: thumbnail,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyThumbnail, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TemplateInfo, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TemplateName, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Summary, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      }
    }, summary))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Overlay, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatesModal);

/***/ }),

/***/ "./src/universal/modules/queue/containers/QueuesContainer.tsx":
/*!********************************************************************!*\
  !*** ./src/universal/modules/queue/containers/QueuesContainer.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Queues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Queues */ "./src/universal/modules/queue/components/Queues.tsx");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/LoadingPage */ "./src/client/components/LoadingPage.tsx");
/* harmony import */ var client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/redux/queuesReducers */ "./src/client/redux/queuesReducers.ts");
/* harmony import */ var client_redux_usersReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/redux/usersReducer */ "./src/client/redux/usersReducer.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/queue/containers/QueuesContainer.tsx";

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










const QueuesContainer = props => {
  const {
    user
  } = props || {};
  const {
    current_organization_id: orgId
  } = user;
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [templates, setTemplates] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [templatesLoading, setTemplatesLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [usersLoading, setUsersLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__["default"])();

  async function fetchQueues() {
    setLoading(true);
    const payload = {
      method: 'GET'
    };
    const res = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(`/orgs/${orgId}/queues`, payload)]);
    const {
      errors,
      data
    } = res || {};

    if (errors) {
      setError(errors);
      console.error('Error fetching queues!', errors);
    } else {
      if (data) {
        const sortedQueue = data.sort((a, b) => a.n_tasks < b.n_tasks ? 1 : -1);
        setQueues(sortedQueue);
        props.setQueues(sortedQueue);
        props.clearSelectedQueue();
      }
    }

    setLoading(false);
  }

  async function fetchTemplates() {
    setTemplatesLoading(true);
    const payload = {
      method: 'GET'
    };
    const res = await _optionalChain([networker, 'optionalAccess', _3 => _3.httpHandler, 'call', _4 => _4(`/templates`, payload)]);
    const {
      errors,
      data
    } = res || {};

    if (errors) {
      setError(errors);
      console.error('Error fetching Templates!', errors);
    } else {
      if (data) {
        setTemplates(data);
      }
    }

    setTemplatesLoading(false);
  }

  async function fetchUsers() {
    setUsersLoading(true);
    const payload = {
      method: 'GET'
    };
    const res = await _optionalChain([networker, 'optionalAccess', _5 => _5.httpHandler, 'call', _6 => _6(`/orgs/${orgId}/users`, payload)]);
    const {
      errors,
      data
    } = res || {};

    if (errors) {
      setError(errors);
      console.error('Error fetching Users for org!', errors);
    } else {
      if (data) {
        props.setUsers(data);
      }
    }

    setUsersLoading(false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchQueues();
  }, [orgId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchTemplates();
  }, [orgId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUsers();
  }, [orgId]);
  let renderComp;

  if (loading) {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    });
  } else {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Queues__WEBPACK_IMPORTED_MODULE_2__["default"], {
      queues: queues,
      templates: templates,
      loading: loading || templatesLoading || usersLoading,
      error: error,
      user: props.user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      }
    });
  }

  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])(`Queues | Human Lambdas`);
  return renderComp;
};

const mapDispatchToProps = dispatch => ({
  setQueues: arg => dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_6__["workfllowActions"].setQueues(arg)),
  clearSelectedQueue: arg => dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_6__["workfllowActions"].clearSelectedQueue()),
  setUsers: arg => dispatch(client_redux_usersReducer__WEBPACK_IMPORTED_MODULE_7__["usersActions"].setUsers(arg))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(QueuesContainer));

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

/***/ "./src/universal/utils/getFirstLetter.ts":
/*!***********************************************!*\
  !*** ./src/universal/utils/getFirstLetter.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getFirstLetter = str => {
  let firstLetter = str;

  if (str && str.length > 1) {
    firstLetter = str.charAt(0).toUpperCase();
  }

  return firstLetter;
};

/* harmony default export */ __webpack_exports__["default"] = (getFirstLetter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlRdWV1ZXNTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaG9va3MvdXNlRG9jdW1lbnRUaXRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9jb250YWluZXJzL1F1ZXVlcy9RdWV1ZXNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvZm9ybWF0Q29tbWFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvVGVtcGxhdGVzTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2dldEZpcnN0TGV0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvc3RyaW5nVG9IYXNoLnRzIl0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsIlBsYWluQnV0dG9uIiwid2FpdGluZyIsImRpc2FibGVkIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiUEFMRVRURSIsIlBSSU1BUllfTUFJTiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsIlBSSU1BUllfTUFJTl9EQVJLIiwiQk9YX1NIQURPV19QUklNQVJZIiwiX2pzeEZpbGVOYW1lIiwiV3JhcHBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiVGl0bGUiLCJURVhUX01BSU4iLCJTdWJUaXRsZSIsIkVtcHR5UGFnZSIsInN2ZyIsImhlYWRlciIsInN1YkhlYWRlciIsImJ1dHRvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRW1wdHlRdWV1ZXNTVkciLCJtZW1vIiwieG1sbnMiLCJlbmFibGVCYWNrZ3JvdW5kIiwidmlld0JveCIsImZpbGwiLCJCQUNLR1JPVU5EX0dSQVlfTUlEIiwiZCIsInVzZURvY3VtZW50VGl0bGUiLCJ0aXRsZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiUXVldWVzQ29udGFpbmVyIiwicHJvcHMiLCJxdWV1ZXMiLCJzZXRBY3RpdmUiLCJxdWV1ZUlkcyIsInVzZXIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJ1c2VTdGF0ZSIsInJhbmdlIiwic2V0UmFuZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9yZ0lkIiwiY3VycmVudF9vcmdhbml6YXRpb25faWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJmZXRjaFF1ZXVlcyIsInR5cGUiLCJDaGFydCIsIkNPTVBMRVRFRCIsIkFIVCIsIlBFTkRJTkciLCJUQVQiLCJBQ0NVUkFDWSIsImRhdGEiLCJodHRwSGFuZGxlciIsIm1ldGhvZCIsInBhcmFtcyIsInF1ZXVlX2lkIiwicGFyYW1zU2VyaWFsaXplciIsInFzIiwic3RyaW5naWZ5IiwiYXJyYXlGb3JtYXQiLCJyZW5kZXJDb21wIiwiY29tcGxldGVkIiwicGVuZGluZyIsImFodCIsInRhdCIsImFjY3VyYWN5IiwiY2hhcnRzIiwibGluZXMiLCJpblNlY29uZHMiLCJpblBlcmNlbnQiLCJDaGFydHMiLCJmaWx0ZXJNZW51IiwiTG9hZGluZ1BhZ2UiLCJmb3JtYXRDb21tYXMiLCJudW1iZXIiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSIsInNlZ21lbnRUcmFjayIsImV2ZW50IiwicHJvcGVydGllcyIsImFuYWx5dGljcyIsIndpbmRvdyIsInVuZGVmaW5lZCIsInRyYWNrIiwiQXZhdGFyIiwiZm9yd2FyZFJlZiIsInJlZiIsImluaXRpYWxzIiwib25DbGljayIsInN0eWxlIiwidHJpbSIsIkF2YXRhckJsb2NrIiwidGVzdEFsaWduIiwibWluV2lkdGgiLCJ1c2VyU2VsZWN0IiwiZ2V0Rmlyc3RMZXR0ZXIiLCJQYWdlIiwiSGVhZGVyIiwiSXRlbUxpc3RDb250YWluZXIiLCJMaXN0SXRlbSIsIm1heFdpZHRoIiwibWFyZ2luQm90dG9tIiwiQk9SREVSX0dSQVkiLCJRdWV1ZVRpdGxlIiwiTGluayIsImN1cnNvciIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIlN1YkluZm8iLCJQZW5kaW5nVGFza3NDb250YWluZXIiLCJQZW5kaW5nVGFza3MiLCJOZXdRdWV1ZUJ1dHRvbiIsIkFzc2lnbmVkIiwiUXVldWVzIiwiaXNfYWRtaW4iLCJpc0FkbWluIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInRlbXBsYXRlcyIsIm1vZGFsUG9ydGFsIiwidG9nZ2xlUG9ydGFsIiwiY2xvc2VQb3J0YWwiLCJ1c2VNb2RhbCIsIm5vQ2xvc2UiLCJzaG93VGVtcGxhdGVzTW9kYWwiLCJsZW5ndGgiLCJGcmFnbWVudCIsImtleSIsIm1hcCIsInF1ZXVlIiwiaWQiLCJ0byIsIm5hbWUiLCJhY3RpdmVfdXNlcnMiLCJpbmRleCIsImxpc3QiLCJpdGVtcyIsImNvbG9yRnJvbVN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibl90YXNrcyIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJUZW1wbGF0ZXNNb2RhbCIsIk1vZGFsUm9vdCIsIkJPUkRFUl9NQUlOX0dSQVkiLCJCb3hTaGFkb3ciLCJNT0RBTCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsIk1vZGFsV3JhcHBlciIsIk1vZGFsVGl0bGUiLCJNb2RhbEhlYWRlciIsIlRlbXBsYXRlc0FyZWEiLCJJdGVtV3JhcHBlciIsIlRlbXBsYXRlSXRlbSIsIlRodW1ibmFpbFdyYXBwZXIiLCJTdHlsZWRUaHVtYm5haWwiLCJFbXB0eVRodW1ibmFpbCIsIm9iamVjdEZpdCIsIkJPUkRFUl9HUkFZX05FVyIsIlRlbXBsYXRlSW5mbyIsIlRlbXBsYXRlTmFtZSIsIlN1bW1hcnkiLCJURVhUX0RBUktFUl9HUkFZIiwibWFyZ2luVG9wIiwicGFkZGluZ1JpZ2h0IiwiV2Via2l0TGluZUNsYW1wIiwiZW1wdHlUZW1wbGF0ZSIsInN1bW1hcnkiLCJ0aHVtYm5haWwiLCJhbGxUZW1wbGF0ZXMiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwidGVtcGxhdGVOYW1lIiwicHVzaCIsInBhdGhuYW1lIiwic3RhdGUiLCJ0ZW1wbGF0ZUlkIiwic3JjIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidmFsdWUiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwic2V0UXVldWVzIiwic2V0VGVtcGxhdGVzIiwidGVtcGxhdGVzTG9hZGluZyIsInNldFRlbXBsYXRlc0xvYWRpbmciLCJ1c2Vyc0xvYWRpbmciLCJzZXRVc2Vyc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInJlcyIsIl8iLCJfMiIsImVycm9ycyIsImNvbnNvbGUiLCJzb3J0ZWRRdWV1ZSIsInNvcnQiLCJhIiwiYiIsImNsZWFyU2VsZWN0ZWRRdWV1ZSIsImZldGNoVGVtcGxhdGVzIiwiXzMiLCJfNCIsImZldGNoVXNlcnMiLCJfNSIsIl82Iiwic2V0VXNlcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFyZyIsIndvcmtmbGxvd0FjdGlvbnMiLCJ1c2Vyc0FjdGlvbnMiLCJjb25uZWN0IiwiZ2V0Q29sb3IiLCJpZGVudGlmaWVyIiwiQmFja2dyb3VuZENvbG9ycyIsInN0cmluZyIsIk1hdGgiLCJhYnMiLCJzdHJpbmdUb0hhc2giLCJjb2xvckJ5SW5kZXgiLCJzdHIiLCJmaXJzdExldHRlciIsImhhc2giLCJjaHIiLCJjaGFyQ29kZUF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQVVBLE1BQU1BLFlBQVksR0FBRyxrRkFBT0Msb0RBQVA7QUFBQTtBQUFBLEdBQW9CLENBQUM7QUFBQ0MsU0FBRDtBQUFVQztBQUFWLENBQUQsS0FBeUI7QUFDaEU7QUFDQTtBQUNBLFNBQU87QUFDTEMsVUFBTSxFQUFFLEVBREg7QUFFTEMsY0FBVSxFQUFFLE1BRlA7QUFHTEMsU0FBSyxFQUFFLE1BSEY7QUFJTEMsbUJBQWUsRUFBRUMsc0RBQU8sQ0FBQ0MsWUFKcEI7QUFLTEMsY0FBVSxFQUFFLEdBTFA7QUFNTEMsWUFBUSxFQUFFLEVBTkw7QUFPTEMsV0FBTyxFQUFFLENBUEo7QUFRTEMsYUFBUyxFQUFFLGdGQVJOO0FBU0xDLFVBQU0sRUFBRSxDQVRIO0FBVUxDLGdCQUFZLEVBQUUsQ0FWVDtBQVdMQyxVQUFNLEVBQUcsdUJBWEo7QUFZTEMsY0FBVSxFQUFFLHVCQVpQO0FBYUxDLFdBQU8sRUFBRSxRQWJKO0FBY0wsY0FBVTtBQUNSWCxxQkFBZSxFQUFFQyxzREFBTyxDQUFDVyxpQkFEakI7QUFFUkgsWUFBTSxFQUFHLGFBQVlSLHNEQUFPLENBQUNXLGlCQUFrQjtBQUZ2QyxL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RyxlQUFXLEdBQUdELEdBQUcsQ0FBQzlGLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsRUFBZDtBQUNEOztBQUVELFNBQU84RixXQUFQO0FBQ0QsQ0FSRDs7QUFVZTNJLDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUEsTUFBTXdJLFlBQVksR0FBSUgsTUFBRCxJQUFZO0FBQy9CLE1BQUlPLElBQUksR0FBRyxDQUFYO0FBQUEsTUFDRS9DLENBREY7QUFBQSxNQUVFZ0QsR0FGRjs7QUFHQSxPQUFLaEQsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHd0MsTUFBTSxDQUFDdEcsTUFBdkIsRUFBK0I4RCxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDZ0QsT0FBRyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0JqRCxDQUFsQixDQUFOO0FBQ0ErQyxRQUFJLEdBQUcsQ0FBQ0EsSUFBSSxJQUFJLENBQVQsSUFBY0EsSUFBZCxHQUFxQkMsR0FBNUI7QUFDQUQsUUFBSSxJQUFJLENBQVI7QUFDRDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0QsQ0FWRDs7QUFZZUosMkVBQWYsRSIsImZpbGUiOiJRdWV1ZXNDb250YWluZXJfNjAxNGI2OGIwNDUyNTZmOWYyZjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHt3YWl0aW5nLCBkaXNhYmxlZH0pID0+IHtcbiAgLy9jb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMjgsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke1BBTEVUVEUuQk9YX1NIQURPV19QUklNQVJZfWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRlxufSlcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMjQsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWFyZ2luOiAnMjBweCAwIDE1cHgnXG59KVxuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNixcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW46ICcwcHggMCAyMHB4JyxcbiAgJz4gZGl2ID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgRW1wdHlQYWdlID0gKHtzdmcsIGhlYWRlciwgc3ViSGVhZGVyLCBidXR0b259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICwgc3ZnXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fSwgaGVhZGVyKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIHN1YkhlYWRlcilcbiAgICAgICwgYnV0dG9uXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UGFnZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5UXVldWVzU1ZHLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgRW1wdHlRdWV1ZXNTVkcgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuICggICAgXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywgeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCAyNCAyNFwiICAgICxcbiAgICAgIGhlaWdodDogMTAwLCBcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgICAsIFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGZpbGw6IFBBTEVUVEUuQkFDS0dST1VORF9HUkFZX01JRCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDZ9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdnJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCB3aWR0aDogXCIyNFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTR9fSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdyZWN0JywgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIHdpZHRoOiBcIjI0XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNX19KVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgd2lkdGg6IFwiMjRcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2fX0pXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZycsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTl9fSlcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMCAwaDI0djI0SDB6XCIgLCBmaWxsOiBcIm5vbmVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwfX0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiBcIk0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bS01IDE0SDR2LTRoMTF2NHptMC01SDRWOWgxMXY0em01IDVoLTRWOWg0djl6XCIgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjB9fSlcbiAgICAgIClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UXVldWVzU1ZHXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZURvY3VtZW50VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0sIFt0aXRsZV0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURvY3VtZW50VGl0bGVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy9tZXRyaWNzL2NvbnRhaW5lcnMvUXVldWVzL1F1ZXVlc0NvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBDaGFydHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGFydHMvQ2hhcnRzJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQge0NoYXJ0fSBmcm9tICd1dGlscy9jb25zdGFudHMnXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY29tcG9uZW50cy9Mb2FkaW5nUGFnZSdcblxuY29uc3QgUXVldWVzQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtxdWV1ZXMsIHNldEFjdGl2ZSwgcXVldWVJZHMsIHVzZXJ9ID0gcHJvcHNcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlKCd3ZWVrbHknKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlcygpIHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHR5cGUgPSBbQ2hhcnQuQ09NUExFVEVELCBDaGFydC5BSFQsIENoYXJ0LlBFTkRJTkcsIENoYXJ0LlRBVCwgQ2hhcnQuQUNDVVJBQ1ldXG4gICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzLyR7b3JnSWR9L21ldHJpY3MvcXVldWVzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXJhbXM6IHtyYW5nZSwgdHlwZSwgcXVldWVfaWQ6IHF1ZXVlSWRzfSxcbiAgICAgICAgcGFyYW1zU2VyaWFsaXplcjogKHBhcmFtcykgPT4gcXMuc3RyaW5naWZ5KHBhcmFtcywge2FycmF5Rm9ybWF0OiAncmVwZWF0J30pLFxuICAgICAgICBkYXRhOiB7cmFuZ2UsIHR5cGUsIHF1ZXVlX2lkOiBxdWV1ZUlkc31cbiAgICAgIH0pXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZmV0Y2hRdWV1ZXMoKVxuICB9LCBbcmFuZ2UsIHF1ZXVlSWRzXSlcblxuICBsZXQgcmVuZGVyQ29tcFxuICBjb25zdCB7Y29tcGxldGVkLCBwZW5kaW5nLCBhaHQsIHRhdCwgYWNjdXJhY3l9ID0gY2hhcnREYXRhXG5cbiAgY29uc3QgY2hhcnRzID0gW1xuICAgIHtkYXRhOiBjb21wbGV0ZWQsIHRpdGxlOiAnQ29tcGxldGVkIFRhc2tzIE92ZXIgVGltZScsIGxpbmVzOiBxdWV1ZXN9LFxuICAgIHtkYXRhOiBwZW5kaW5nLCB0aXRsZTogJ1BlbmRpbmcgVGFza3MgT3ZlciBUaW1lJywgbGluZXM6IHF1ZXVlc30sXG4gICAge2RhdGE6IGFodCwgdGl0bGU6ICdBdmVyYWdlIEhhbmRsaW5nIFRpbWUgKEFIVCknLCBpblNlY29uZHM6IHRydWUsIGxpbmVzOiBxdWV1ZXN9LFxuICAgIHtkYXRhOiB0YXQsIHRpdGxlOiAnVHVybiBBcm91bmQgVGltZSAoVEFUKScsIGluU2Vjb25kczogdHJ1ZSwgbGluZXM6IHF1ZXVlc30sXG4gICAge2RhdGE6IGFjY3VyYWN5LCB0aXRsZTogJ0FjY3VyYWN5JywgaW5QZXJjZW50OiB0cnVlLCBsaW5lczogcXVldWVzfVxuICBdXG5cbiAgaWYgKGNvbXBsZXRlZCAmJiBwZW5kaW5nICYmIGFodCAmJiB0YXQgJiYgYWNjdXJhY3kpIHtcbiAgICByZW5kZXJDb21wID0gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFydHMsIHtcbiAgICAgICAgZmlsdGVyTWVudTogdHJ1ZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgbGluZXM6IHF1ZXVlcyxcbiAgICAgICAgY2hhcnRzOiBjaGFydHMsXG4gICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgc2V0UmFuZ2U6IHNldFJhbmdlLFxuICAgICAgICBzZXRBY3RpdmU6IHNldEFjdGl2ZSxcbiAgICAgICAgdGl0bGU6ICdRdWV1ZSBQZXJmb3JtYW5jZScsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19XG4gICAgICApXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJlbmRlckNvbXAgPSBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdQYWdlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU4fX0gKVxuICB9XG5cbiAgcmV0dXJuIHJlbmRlckNvbXBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVldWVzQ29udGFpbmVyXG4iLCJjb25zdCBmb3JtYXRDb21tYXMgPSAobnVtYmVyKSA9PlxuICAoJycgKyBudW1iZXIpXG4gICAgLnNwbGl0KCcnKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbignJylcbiAgICAucmVwbGFjZSgvKC4uLikvZywgJyQxLCcpXG4gICAgLnNwbGl0KCcnKVxuICAgIC5yZXZlcnNlKClcbiAgICAuam9pbignJylcbiAgICAucmVwbGFjZSgvXiwvLCAnJylcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0Q29tbWFzXG4iLCJleHBvcnQgY29uc3Qgc2VnbWVudFRyYWNrID0gYXN5bmMgKGV2ZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHthbmFseXRpY3N9ID0gd2luZG93IHx8IHVuZGVmaW5lZFxuICBpZiAoIWFuYWx5dGljcykgcmV0dXJuXG4gIGFuYWx5dGljcy50cmFjayhldmVudCwgcHJvcGVydGllcylcbn1cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnLi4vLi4vY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IGdldEZpcnN0TGV0dGVyIGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRGaXJzdExldHRlcidcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQXZhdGFyID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7aW5pdGlhbHMsIGNvbG9yLCBvbkNsaWNrLCBzdHlsZSwgdHJpbSA9IHRydWV9ID0gcHJvcHNcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvciB8fCBQQUxFVFRFLlBSSU1BUllfTUFJTlxuXG4gIGNvbnN0IEF2YXRhckJsb2NrID0gc3R5bGVkLnNwYW4oe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHRlc3RBbGlnbjogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiBgMjBweGAsXG4gICAgd2lkdGg6IGAyMHB4YCxcbiAgICBtaW5XaWR0aDogYDIwcHhgLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBmb250U2l6ZTogMTEsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgbWFyZ2luOiAnMHB4IDJweCdcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyQmxvY2ssIHsgcmVmOiByZWYsIG9uQ2xpY2s6IG9uQ2xpY2ssIHN0eWxlOiBzdHlsZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICwgdHJpbSA/IGdldEZpcnN0TGV0dGVyKGluaXRpYWxzKSA6IGluaXRpYWxzXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlcy50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9BY3Rpb25CdXR0b24nXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgZm9ybWF0Q29tbWFzIGZyb20gJ2NsaWVudC91dGlscy9mb3JtYXRDb21tYXMnXG5pbXBvcnQge3NlZ21lbnRUcmFja30gZnJvbSAnY2xpZW50L3V0aWxzL3NlZ21lbnRJbydcblxuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBBdmF0YXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyJ1xuaW1wb3J0IHtjb2xvckZyb21TdHJpbmd9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCBFbXB0eVBhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlJ1xuaW1wb3J0IEVtcHR5UXVldWVzU1ZHIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5UXVldWVzU1ZHJ1xuaW1wb3J0IHVzZU1vZGFsIGZyb20gJ2NsaWVudC9ob29rcy91c2VNb2RhbCdcbmltcG9ydCBUZW1wbGF0ZXNNb2RhbCBmcm9tICcuL1RlbXBsYXRlc01vZGFsJ1xuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUGFnZSA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIG92ZXJmbG93WTogJ2F1dG8nLFxuICBtaW5XaWR0aDogODAwLFxuICBwYWRkaW5nOiAnMCAxMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufSlcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZzogJzk2cHggMCAyOHB4IDAnLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGxpbmVIZWlnaHQ6ICczMnB4J1xufSlcblxuY29uc3QgSXRlbUxpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgZmxleFdyYXA6ICd3cmFwJyxcbiAgcGFkZGluZ1RvcDogJzMycHgnXG59KVxuXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5kaXYoe1xuICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gIGhlaWdodDogMTM2LFxuICBtYXhXaWR0aDogJzEwMCUnLFxuICBtYXJnaW5Cb3R0b206IDMyLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIGJvcmRlclJhZGl1czogJzE2cHgnLFxuICBwYWRkaW5nOiAnMjRweCA0MHB4IDI0cHggNDBweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICc6aG92ZXInOiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMDIpJ1xuICB9XG59KVxuXG5jb25zdCBRdWV1ZVRpdGxlID0gc3R5bGVkKExpbmspKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgZm9udFNpemU6ICcyMnB4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xufSlcblxuY29uc3QgU3ViSW5mbyA9IHN0eWxlZC5zcGFuKHtcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcidcbn0pXG5cbmNvbnN0IFBlbmRpbmdUYXNrc0NvbnRhaW5lciA9IHN0eWxlZC5zcGFuKHtcbiAgd2lkdGg6IDE4NFxufSlcblxuY29uc3QgUGVuZGluZ1Rhc2tzID0gc3R5bGVkLnNwYW4oe1xuICBjb2xvcjogYCR7UEFMRVRURS5QUklNQVJZX01BSU59YCxcbiAgZm9udFdlaWdodDogNjAwXG59KVxuXG5jb25zdCBOZXdRdWV1ZUJ1dHRvbiA9IHN0eWxlZChBY3Rpb25CdXR0b24pKHtcbiAgaGVpZ2h0OiAzMFxufSlcblxuY29uc3QgQXNzaWduZWQgPSBzdHlsZWQuc3Bhbih7XG4gIHBhZGRpbmdMZWZ0OiA0XG59KVxuXG5jb25zdCBRdWV1ZXMgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXI6IHtpc19hZG1pbjogaXNBZG1pbn1cbiAgfSA9IHByb3BzXG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpIFxuICBjb25zdCB7cXVldWVzID0gW10sIHRlbXBsYXRlcyA9IFtdfSA9IHByb3BzXG5cbiAgdXNlRG9jdW1lbnRUaXRsZSgnUXVldWVzIEhvbWUgfCBIdW1hbiBMYW1iZGFzJylcbiAgY29uc3Qge21vZGFsUG9ydGFsLCB0b2dnbGVQb3J0YWwsIGNsb3NlUG9ydGFsfSA9IHVzZU1vZGFsKHtub0Nsb3NlOiBmYWxzZX0pXG5cbiAgY29uc3Qgc2hvd1RlbXBsYXRlc01vZGFsID0gKCkgPT4ge1xuICAgIHNlZ21lbnRUcmFjaygnMSAtIFRlbXBsYXRlIE1vZGFsIENsaWNrZWQgLSBbUVVFVUUgRlVOTkVMXScsIHt9KVxuICAgIHRvZ2dsZVBvcnRhbCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTV9fVxuICAgICAgLCBxdWV1ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE4fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTl9fSwgXCJRdWV1ZXNcIilcbiAgICAgICAgICAgICwgaXNBZG1pbiAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIxfX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmV3UXVldWVCdXR0b24sIHsga2V5OiAnYWRkX3F1ZXVlJywgb25DbGljazogc2hvd1RlbXBsYXRlc01vZGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIyfX0sIFwiTmV3IHF1ZXVlXCJcblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbUxpc3RDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI4fX1cbiAgICAgICAgICAgICwgcXVldWVzLm1hcCgocXVldWUpID0+IChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwgeyBrZXk6IHF1ZXVlLmlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMwfX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVUaXRsZSwgeyB0bzogYC9xdWV1ZXMvJHtxdWV1ZS5pZH1gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMxfX0sIHF1ZXVlLm5hbWUpXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YkluZm8sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMyfX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMzfX0sIFwiQ3VycmVudGx5IGFzc2lnbmVkOlwiXG5cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFzc2lnbmVkLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzNX19XG4gICAgICAgICAgICAgICAgICAgICAgLCBxdWV1ZS5hY3RpdmVfdXNlcnMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLmFjdGl2ZV91c2Vycy5tYXAoKHVzZXIsIGluZGV4LCBsaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gbGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMykgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zID4gNCAmJiBpbmRleCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JGcm9tU3RyaW5nKHVzZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsczogYCske2l0ZW1zIC0gM31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmltOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0Mn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvckZyb21TdHJpbmcodXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsczogdXNlci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFBlbmRpbmdUYXNrc0NvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjB9fSwgXCJQZW5kaW5nIFRhc2tzOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQZW5kaW5nVGFza3MsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYxfX0sIGZvcm1hdENvbW1hcyhxdWV1ZS5uX3Rhc2tzKSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5UGFnZSwge1xuICAgICAgICAgICAgc3ZnOiBSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5UXVldWVzU1ZHLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3MX19ICksXG4gICAgICAgICAgICBoZWFkZXI6IFwiTG9va3MgbGlrZSB0aGVyZSBhcmVuJ3QgYW55IHF1ZXVlcyB5ZXQuXCIsXG4gICAgICAgICAgICBzdWJIZWFkZXI6IFxuICAgICAgICAgICAgICBpc0FkbWluID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc1fX0sIFwiQ3JlYXRlIHlvdXIgZmlyc3QgcXVldWUsIG9yIHJlYWQgb3VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICwgJyAnXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kb2NzLmh1bWFubGFtYmRhcy5jb20vcXVpY2tzdGFydC9jcmVhdGluZy1hLXF1ZXVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vcmVmZXJyZXJcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3N319XG4gICAgICAgICAgICAgICAgICAsIFwiZG9jdW1lbnRhdGlvblwiXG5cbiAgICAgICAgICAgICAgICAgICksICcgJywgXCJ0byBsZWFybiBtb3JlLlwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgJ0JlZm9yZSB5b3UgY2FuIGFjY2VzcyBxdWV1ZXMsIHlvdSB3aWxsIG5lZWQgdG8gYmUgYWRkZWQgdG8gb25lLidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgYnV0dG9uOiBcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTF9fVxuICAgICAgICAgICAgICAgICwgaXNBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5ld1F1ZXVlQnV0dG9uLCB7IGtleTogJ2FkZF9xdWV1ZScsIG9uQ2xpY2s6IHNob3dUZW1wbGF0ZXNNb2RhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5M319LCBcIk5ldyBxdWV1ZVwiXG5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3MH19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIG1vZGFsUG9ydGFsKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVtcGxhdGVzTW9kYWwsIHsgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDJ9fSApKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZXNcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1RlbXBsYXRlc01vZGFsLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ2NsaWVudC91dGlscy9zZWdtZW50SW8nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Qm94U2hhZG93fSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvdXRpbHMvY29uc3RhbnRzJ1xuXG5cblxuXG5cblxuY29uc3QgTW9kYWxSb290ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiA1NTAsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3cuTU9EQUwsXG4gIHBhZGRpbmdUb3A6IDM1LFxuICBwYWRkaW5nQm90dG9tOiAxNSxcbiAgbWF4SGVpZ2h0OiAnY2FsYygxMDB2aCAtIDEwMHB4KSdcbn0pXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBib3R0b206ICcwcHgnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICBvdmVyZmxvdzogJ292ZXJsYXknLFxuICBvcGFjaXR5OiAxLFxuICBoZWlnaHQ6ICc1MHB4JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgYm9yZGVyUmFkaXVzOiAnMHB4IDBweCAxMHB4IDEwcHgnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIHdoaXRlKSdcbn0pXG5cbmNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB3aWR0aDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2F1dG8nLFxuICBwYWRkaW5nQm90dG9tOiAnMjBweCdcbn0pXG5cbmNvbnN0IE1vZGFsVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNSxcbiAgcGFkZGluZ0xlZnQ6IDM1XG59KVxuXG5jb25zdCBNb2RhbEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyN3B4JyxcbiAgbWFyZ2luQm90dG9tOiAnMTVweCdcbn0pXG5cbmNvbnN0IFRlbXBsYXRlc0FyZWEgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJSdcbn0pXG5cbmNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBwYWRkaW5nOiAnMTBweCAyNXB4J1xufSlcblxuY29uc3QgVGVtcGxhdGVJdGVtID0gc3R5bGVkLmRpdih7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBwYWRkaW5nOiAnMTBweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICAnOmhvdmVyJzoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH1cbn0pXG5cbmNvbnN0IFRodW1ibmFpbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbiAgJHtUZW1wbGF0ZUl0ZW19OmhvdmVyICYge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgfVxuYFxuXG5jb25zdCBTdHlsZWRUaHVtYm5haWwgPSBzdHlsZWQuaW1nKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDM4LFxuICBjb2xvcjogJyNmZmYnLFxuICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgbWF4V2lkdGg6ICcxMDBweCcsXG4gIG1heEhlaWdodDogJzEwMHB4JyxcbiAgYm9yZGVyUmFkaXVzOiA5XG59KVxuXG5jb25zdCBFbXB0eVRodW1ibmFpbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBmb250U2l6ZTogMzgsXG4gIGNvbG9yOiAnI2ZmZicsXG4gIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxuICBoZWlnaHQ6ICcxMDBweCcsXG4gIHdpZHRoOiAnMTAwcHgnLFxuICBib3JkZXI6IGAxcHggZGFzaGVkICR7UEFMRVRURS5CT1JERVJfR1JBWV9ORVd9YCxcbiAgYm9yZGVyUmFkaXVzOiA5XG59KVxuXG5jb25zdCBUZW1wbGF0ZUluZm8gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgdGV4dEFsaWduOiAnbGVmdCdcbn0pXG5cbmNvbnN0IFRlbXBsYXRlTmFtZSA9IHN0eWxlZC5iKHtcbiAgZm9udFNpemU6IDE2XG59KVxuXG5jb25zdCBTdW1tYXJ5ID0gc3R5bGVkLnNwYW4oKHtmb250U2l6ZSwgZm9udFdlaWdodH0pID0+ICh7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfREFSS0VSX0dSQVksXG4gIGZvbnRTaXplOiBmb250U2l6ZSB8fCAxNCxcbiAgZm9udFdlaWdodDogZm9udFdlaWdodCB8fCA0MDAsXG4gIG1hcmdpblRvcDogNSxcbiAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxuICBXZWJraXRMaW5lQ2xhbXA6IDJcbn0pKVxuXG5jb25zdCBUZW1wbGF0ZXNNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dGVtcGxhdGVzfSA9IHByb3BzXG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpIFxuICBjb25zdCBlbXB0eVRlbXBsYXRlID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG5hbWU6ICdCbGFuaycsXG4gICAgc3VtbWFyeTogJ1N0YXJ0IHdpdGggYW4gZW1wdHkgY2FudmFzIGFuZCBidWlsZCBleGFjdGx5IHdoYXQgeW91IG5lZWQuJyxcbiAgICB0aHVtYm5haWw6IG51bGxcbiAgfVxuXG4gIGNvbnN0IGFsbFRlbXBsYXRlcyA9IFtlbXB0eVRlbXBsYXRlLCAuLi50ZW1wbGF0ZXNdXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoaWQsIG5hbWUpID0+IHtcbiAgICBzZWdtZW50VHJhY2soYDIgLSBRdWV1ZSBDcmVhdGlvbiBmcm9tIFRlbXBsYXRlIC0gW1FVRVVFIEZVTk5FTF1gLCB7XG4gICAgICB0ZW1wbGF0ZU5hbWU6IG5hbWVcbiAgICB9KVxuICAgIGlmICghaWQpIHJldHVybiBoaXN0b3J5LnB1c2goYC9xdWV1ZXMvbmV3YClcbiAgICByZXR1cm4gaGlzdG9yeS5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL3F1ZXVlcy9uZXcnLFxuICAgICAgc3RhdGU6IHt0ZW1wbGF0ZUlkOiBpZH1cbiAgICB9KVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxSb290LCB7IGlkOiBcInBhcmVudElkXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTV9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1N319LCBcIk5ldyBRdWV1ZVwiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1bW1hcnksIHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA1MDAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTh9fSwgXCJTdGFydCBmcm9tIHNjcmF0Y2ggb3IgY2hvb3NlIGZyb20gb25lIG9mIHRoZSB0ZW1wbGF0ZXMgYmVsb3dcIlxuXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRlbXBsYXRlc0FyZWEsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYzfX1cbiAgICAgICAgICAsIGFsbFRlbXBsYXRlcy5tYXAoKHtpZCwgbmFtZSwgc3VtbWFyeSwgdGh1bWJuYWlsfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtV3JhcHBlciwgeyBrZXk6IGlkLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVDbGljayhpZCwgbmFtZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjZ9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZW1wbGF0ZUl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY3fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2OH19XG4gICAgICAgICAgICAgICAgICAgICwgdGh1bWJuYWlsID8gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUaHVtYm5haWwsIHsgc3JjOiB0aHVtYm5haWwsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjl9fSApIDogUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVRodW1ibmFpbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjl9fSApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVtcGxhdGVJbmZvLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3MX19XG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZW1wbGF0ZU5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcyfX0sIG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdW1tYXJ5LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3M319LCBzdW1tYXJ5KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChPdmVybGF5LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MX19IClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVzTW9kYWxcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlc0NvbnRhaW5lci50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUXVldWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUXVldWVzJ1xuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5cbmltcG9ydCB7d29ya2ZsbG93QWN0aW9uc30gZnJvbSAnY2xpZW50L3JlZHV4L3F1ZXVlc1JlZHVjZXJzJ1xuaW1wb3J0IHt1c2Vyc0FjdGlvbnN9IGZyb20gJ2NsaWVudC9yZWR1eC91c2Vyc1JlZHVjZXInXG5cblxuXG5cblxuXG5cblxuY29uc3QgUXVldWVzQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1c2VyfSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZDogb3JnSWR9ID0gdXNlclxuICBjb25zdCBbcXVldWVzLCBzZXRRdWV1ZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IFt0ZW1wbGF0ZXMsIHNldFRlbXBsYXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3RlbXBsYXRlc0xvYWRpbmcsIHNldFRlbXBsYXRlc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2Vyc0xvYWRpbmcsIHNldFVzZXJzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFF1ZXVlcygpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8yID0+IF8yKGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXNgLCBwYXlsb2FkKV0pXG4gICAgY29uc3Qge2Vycm9ycywgZGF0YX0gPSByZXMgfHwge31cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBzZXRFcnJvcihlcnJvcnMpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBxdWV1ZXMhJywgZXJyb3JzKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zdCBzb3J0ZWRRdWV1ZSA9IGRhdGEuc29ydCgoYSwgYikgPT4gKGEubl90YXNrcyA8IGIubl90YXNrcyA/IDEgOiAtMSkpXG4gICAgICAgIHNldFF1ZXVlcyhzb3J0ZWRRdWV1ZSlcbiAgICAgICAgcHJvcHMuc2V0UXVldWVzKHNvcnRlZFF1ZXVlKVxuICAgICAgICBwcm9wcy5jbGVhclNlbGVjdGVkUXVldWUoKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUZW1wbGF0ZXMoKSB7XG4gICAgc2V0VGVtcGxhdGVzTG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmh0dHBIYW5kbGVyLCAnY2FsbCcsIF80ID0+IF80KGAvdGVtcGxhdGVzYCwgcGF5bG9hZCldKVxuICAgIGNvbnN0IHtlcnJvcnMsIGRhdGF9ID0gcmVzIHx8IHt9XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgc2V0RXJyb3IoZXJyb3JzKVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgVGVtcGxhdGVzIScsIGVycm9ycylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc2V0VGVtcGxhdGVzKGRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIHNldFRlbXBsYXRlc0xvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xuICAgIHNldFVzZXJzTG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF82ID0+IF82KGAvb3Jncy8ke29yZ0lkfS91c2Vyc2AsIHBheWxvYWQpXSlcbiAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IHJlcyB8fCB7fVxuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIHNldEVycm9yKGVycm9ycylcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIFVzZXJzIGZvciBvcmchJywgZXJyb3JzKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBwcm9wcy5zZXRVc2VycyhkYXRhKVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRVc2Vyc0xvYWRpbmcoZmFsc2UpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUXVldWVzKClcbiAgfSwgW29yZ0lkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVGVtcGxhdGVzKClcbiAgfSwgW29yZ0lkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlcnMoKVxuICB9LCBbb3JnSWRdKVxuXG4gIGxldCByZW5kZXJDb21wXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZW5kZXJDb21wID0gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDJ9fSApXG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyQ29tcCA9IChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVzLCB7XG4gICAgICAgIHF1ZXVlczogcXVldWVzLFxuICAgICAgICB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCB0ZW1wbGF0ZXNMb2FkaW5nIHx8IHVzZXJzTG9hZGluZyxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICB1c2VyOiBwcm9wcy51c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA1fX1cbiAgICAgIClcbiAgICApXG4gIH1cblxuICB1c2VEb2N1bWVudFRpdGxlKGBRdWV1ZXMgfCBIdW1hbiBMYW1iZGFzYClcblxuICByZXR1cm4gcmVuZGVyQ29tcFxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIHNldFF1ZXVlczogKGFyZykgPT4gZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy5zZXRRdWV1ZXMoYXJnKSksXG4gIGNsZWFyU2VsZWN0ZWRRdWV1ZTogKGFyZykgPT4gZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy5jbGVhclNlbGVjdGVkUXVldWUoKSksXG4gIHNldFVzZXJzOiAoYXJnKSA9PiBkaXNwYXRjaCh1c2Vyc0FjdGlvbnMuc2V0VXNlcnMoYXJnKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShRdWV1ZXNDb250YWluZXIpXG4iLCJpbXBvcnQgc3RyaW5nVG9IYXNoIGZyb20gJy4vc3RyaW5nVG9IYXNoJ1xuaW1wb3J0IHtCYWNrZ3JvdW5kQ29sb3JzfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IGdldENvbG9yID0gKGlkZW50aWZpZXIpID0+IEJhY2tncm91bmRDb2xvcnNbaWRlbnRpZmllciAlIEJhY2tncm91bmRDb2xvcnMubGVuZ3RoXVxuXG5leHBvcnQgY29uc3QgY29sb3JGcm9tU3RyaW5nID0gKHN0cmluZykgPT4gZ2V0Q29sb3IoTWF0aC5hYnMoc3RyaW5nVG9IYXNoKHN0cmluZykpKVxuXG5leHBvcnQgY29uc3QgY29sb3JCeUluZGV4ID0gKGluZGV4KSA9PiBnZXRDb2xvcihpbmRleClcbiIsImNvbnN0IGdldEZpcnN0TGV0dGVyID0gKHN0cikgPT4ge1xuICBsZXQgZmlyc3RMZXR0ZXIgPSBzdHJcblxuICBpZiAoc3RyICYmIHN0ci5sZW5ndGggPiAxKSB7XG4gICAgZmlyc3RMZXR0ZXIgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBmaXJzdExldHRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXJzdExldHRlclxuIiwiY29uc3Qgc3RyaW5nVG9IYXNoID0gKHN0cmluZykgPT4ge1xuICBsZXQgaGFzaCA9IDAsXG4gICAgaSxcbiAgICBjaHJcbiAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNociA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNoclxuICAgIGhhc2ggfD0gMFxuICB9XG4gIHJldHVybiBoYXNoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvSGFzaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==