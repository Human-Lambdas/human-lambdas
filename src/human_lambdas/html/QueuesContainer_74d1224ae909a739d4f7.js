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
      console.error('Error fetching queues!', JSON.stringify(errors));
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
      console.error('Error fetching Templates!', JSON.stringify(errors));
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
      console.error('Error fetching Users for org!', JSON.stringify(errors));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlRdWV1ZXNTVkcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvaG9va3MvdXNlRG9jdW1lbnRUaXRsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9jb250YWluZXJzL1F1ZXVlcy9RdWV1ZXNDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvZm9ybWF0Q29tbWFzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvc2VnbWVudElvLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb21wb25lbnRzL1F1ZXVlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbXBvbmVudHMvVGVtcGxhdGVzTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2dldEZpcnN0TGV0dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvc3RyaW5nVG9IYXNoLnRzIl0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsIlBsYWluQnV0dG9uIiwid2FpdGluZyIsImRpc2FibGVkIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiUEFMRVRURSIsIlBSSU1BUllfTUFJTiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsIlBSSU1BUllfTUFJTl9EQVJLIiwiQk9YX1NIQURPV19QUklNQVJZIiwiX2pzeEZpbGVOYW1lIiwiV3JhcHBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJmb250RmFtaWx5IiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiVGl0bGUiLCJURVhUX01BSU4iLCJTdWJUaXRsZSIsIkVtcHR5UGFnZSIsInN2ZyIsImhlYWRlciIsInN1YkhlYWRlciIsImJ1dHRvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRW1wdHlRdWV1ZXNTVkciLCJtZW1vIiwieG1sbnMiLCJlbmFibGVCYWNrZ3JvdW5kIiwidmlld0JveCIsImZpbGwiLCJCQUNLR1JPVU5EX0dSQVlfTUlEIiwiZCIsInVzZURvY3VtZW50VGl0bGUiLCJ0aXRsZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiUXVldWVzQ29udGFpbmVyIiwicHJvcHMiLCJxdWV1ZXMiLCJzZXRBY3RpdmUiLCJxdWV1ZUlkcyIsInVzZXIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJ1c2VTdGF0ZSIsInJhbmdlIiwic2V0UmFuZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9yZ0lkIiwiY3VycmVudF9vcmdhbml6YXRpb25faWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJmZXRjaFF1ZXVlcyIsInR5cGUiLCJDaGFydCIsIkNPTVBMRVRFRCIsIkFIVCIsIlBFTkRJTkciLCJUQVQiLCJBQ0NVUkFDWSIsImRhdGEiLCJodHRwSGFuZGxlciIsIm1ldGhvZCIsInBhcmFtcyIsInF1ZXVlX2lkIiwicGFyYW1zU2VyaWFsaXplciIsInFzIiwic3RyaW5naWZ5IiwiYXJyYXlGb3JtYXQiLCJyZW5kZXJDb21wIiwiY29tcGxldGVkIiwicGVuZGluZyIsImFodCIsInRhdCIsImFjY3VyYWN5IiwiY2hhcnRzIiwibGluZXMiLCJpblNlY29uZHMiLCJpblBlcmNlbnQiLCJDaGFydHMiLCJmaWx0ZXJNZW51IiwiTG9hZGluZ1BhZ2UiLCJmb3JtYXRDb21tYXMiLCJudW1iZXIiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSIsInNlZ21lbnRUcmFjayIsImV2ZW50IiwicHJvcGVydGllcyIsImFuYWx5dGljcyIsIndpbmRvdyIsInVuZGVmaW5lZCIsInRyYWNrIiwiQXZhdGFyIiwiZm9yd2FyZFJlZiIsInJlZiIsImluaXRpYWxzIiwib25DbGljayIsInN0eWxlIiwidHJpbSIsIkF2YXRhckJsb2NrIiwidGVzdEFsaWduIiwibWluV2lkdGgiLCJ1c2VyU2VsZWN0IiwiZ2V0Rmlyc3RMZXR0ZXIiLCJQYWdlIiwiSGVhZGVyIiwiSXRlbUxpc3RDb250YWluZXIiLCJMaXN0SXRlbSIsIm1heFdpZHRoIiwibWFyZ2luQm90dG9tIiwiQk9SREVSX0dSQVkiLCJRdWV1ZVRpdGxlIiwiTGluayIsImN1cnNvciIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIlN1YkluZm8iLCJQZW5kaW5nVGFza3NDb250YWluZXIiLCJQZW5kaW5nVGFza3MiLCJOZXdRdWV1ZUJ1dHRvbiIsIkFzc2lnbmVkIiwiUXVldWVzIiwiaXNfYWRtaW4iLCJpc0FkbWluIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInRlbXBsYXRlcyIsIm1vZGFsUG9ydGFsIiwidG9nZ2xlUG9ydGFsIiwiY2xvc2VQb3J0YWwiLCJ1c2VNb2RhbCIsIm5vQ2xvc2UiLCJzaG93VGVtcGxhdGVzTW9kYWwiLCJsZW5ndGgiLCJGcmFnbWVudCIsImtleSIsIm1hcCIsInF1ZXVlIiwiaWQiLCJ0byIsIm5hbWUiLCJhY3RpdmVfdXNlcnMiLCJpbmRleCIsImxpc3QiLCJpdGVtcyIsImNvbG9yRnJvbVN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibl90YXNrcyIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJUZW1wbGF0ZXNNb2RhbCIsIk1vZGFsUm9vdCIsIkJPUkRFUl9NQUlOX0dSQVkiLCJCb3hTaGFkb3ciLCJNT0RBTCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWF4SGVpZ2h0IiwiT3ZlcmxheSIsIk1vZGFsV3JhcHBlciIsIk1vZGFsVGl0bGUiLCJNb2RhbEhlYWRlciIsIlRlbXBsYXRlc0FyZWEiLCJJdGVtV3JhcHBlciIsIlRlbXBsYXRlSXRlbSIsIlRodW1ibmFpbFdyYXBwZXIiLCJTdHlsZWRUaHVtYm5haWwiLCJFbXB0eVRodW1ibmFpbCIsIm9iamVjdEZpdCIsIkJPUkRFUl9HUkFZX05FVyIsIlRlbXBsYXRlSW5mbyIsIlRlbXBsYXRlTmFtZSIsIlN1bW1hcnkiLCJURVhUX0RBUktFUl9HUkFZIiwibWFyZ2luVG9wIiwicGFkZGluZ1JpZ2h0IiwiV2Via2l0TGluZUNsYW1wIiwiZW1wdHlUZW1wbGF0ZSIsInN1bW1hcnkiLCJ0aHVtYm5haWwiLCJhbGxUZW1wbGF0ZXMiLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwidGVtcGxhdGVOYW1lIiwicHVzaCIsInBhdGhuYW1lIiwic3RhdGUiLCJ0ZW1wbGF0ZUlkIiwic3JjIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidmFsdWUiLCJpIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwic2V0UXVldWVzIiwic2V0VGVtcGxhdGVzIiwidGVtcGxhdGVzTG9hZGluZyIsInNldFRlbXBsYXRlc0xvYWRpbmciLCJ1c2Vyc0xvYWRpbmciLCJzZXRVc2Vyc0xvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInJlcyIsIl8iLCJfMiIsImVycm9ycyIsImNvbnNvbGUiLCJKU09OIiwic29ydGVkUXVldWUiLCJzb3J0IiwiYSIsImIiLCJjbGVhclNlbGVjdGVkUXVldWUiLCJmZXRjaFRlbXBsYXRlcyIsIl8zIiwiXzQiLCJmZXRjaFVzZXJzIiwiXzUiLCJfNiIsInNldFVzZXJzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhcmciLCJ3b3JrZmxsb3dBY3Rpb25zIiwidXNlcnNBY3Rpb25zIiwiY29ubmVjdCIsImdldENvbG9yIiwiaWRlbnRpZmllciIsIkJhY2tncm91bmRDb2xvcnMiLCJzdHJpbmciLCJNYXRoIiwiYWJzIiwic3RyaW5nVG9IYXNoIiwiY29sb3JCeUluZGV4Iiwic3RyIiwiZmlyc3RMZXR0ZXIiLCJoYXNoIiwiY2hyIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFVQSxNQUFNQSxZQUFZLEdBQUcsa0ZBQU9DLG9EQUFQO0FBQUE7QUFBQSxHQUFvQixDQUFDO0FBQUNDLFNBQUQ7QUFBVUM7QUFBVixDQUFELEtBQXlCO0FBQ2hFO0FBQ0E7QUFDQSxTQUFPO0FBQ0xDLFVBQU0sRUFBRSxFQURIO0FBRUxDLGNBQVUsRUFBRSxNQUZQO0FBR0xDLFNBQUssRUFBRSxNQUhGO0FBSUxDLG1CQUFlLEVBQUVDLHNEQUFPLENBQUNDLFlBSnBCO0FBS0xDLGNBQVUsRUFBRSxHQUxQO0FBTUxDLFlBQVEsRUFBRSxFQU5MO0FBT0xDLFdBQU8sRUFBRSxDQVBKO0FBUUxDLGFBQVMsRUFBRSxnRkFSTjtBQVNMQyxVQUFNLEVBQUUsQ0FUSDtBQVVMQyxnQkFBWSxFQUFFLENBVlQ7QUFXTEMsVUFBTSxFQUFHLHVCQVhKO0FBWUxDLGNBQVUsRUFBRSx1QkFaUDtBQWFMQyxXQUFPLEVBQUUsUUFiSjtBQWNMLGNBQVU7QUFDUlgscUJBQWUsRUFBRUMsc0RBQU8sQ0FBQ1csaUJBRGpCO0FBRVJILFlBQU0sRUFBRyxhQUFZUixzREFBTyxDQUFDVyxpQkFBa0I7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UztBQUM5QixNQUFJQyxXQUFXLEdBQUdELEdBQWxCOztBQUVBLE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDNUcsTUFBSixHQUFhLENBQXhCLEVBQTJCO0FBQ3pCNkcsZUFBVyxHQUFHRCxHQUFHLENBQUMvRixNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQWQ7QUFDRDs7QUFFRCxTQUFPK0YsV0FBUDtBQUNELENBUkQ7O0FBVWU1SSw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBLE1BQU15SSxZQUFZLEdBQUlILE1BQUQsSUFBWTtBQUMvQixNQUFJTyxJQUFJLEdBQUcsQ0FBWDtBQUFBLE1BQ0VoRCxDQURGO0FBQUEsTUFFRWlELEdBRkY7O0FBR0EsT0FBS2pELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3lDLE1BQU0sQ0FBQ3ZHLE1BQXZCLEVBQStCOEQsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQ2lELE9BQUcsR0FBR1IsTUFBTSxDQUFDUyxVQUFQLENBQWtCbEQsQ0FBbEIsQ0FBTjtBQUNBZ0QsUUFBSSxHQUFHLENBQUNBLElBQUksSUFBSSxDQUFULElBQWNBLElBQWQsR0FBcUJDLEdBQTVCO0FBQ0FELFFBQUksSUFBSSxDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsSUFBUDtBQUNELENBVkQ7O0FBWWVKLDJFQUFmLEUiLCJmaWxlIjoiUXVldWVzQ29udGFpbmVyXzc0ZDEyMjRhZTkwOWE3MzlkNGY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnLi9QbGFpbkJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBBY3Rpb25CdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKCh7d2FpdGluZywgZGlzYWJsZWR9KSA9PiB7XG4gIC8vY29uc3Qge3dhaXRpbmcsIGRpc2FibGVkfSA9IHByb3BzXG4gIC8vY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IDI4LFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBib3JkZXI6IGAxcHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9LFxuICAgICc6Zm9jdXMsIDphY3RpdmUnOiB7XG4gICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtQQUxFVFRFLkJPWF9TSEFET1dfUFJJTUFSWX1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9FbXB0eVBhZ2UudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICdzdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUZcbn0pXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZm9udFNpemU6IDI0LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIG1hcmdpbjogJzIwcHggMCAxNXB4J1xufSlcblxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMTYsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgbWFyZ2luOiAnMHB4IDAgMjBweCcsXG4gICc+IGRpdiA+IGEnOiB7XG4gICAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pXG5cbmNvbnN0IEVtcHR5UGFnZSA9ICh7c3ZnLCBoZWFkZXIsIHN1YkhlYWRlciwgYnV0dG9ufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319XG4gICAgICAsIHN2Z1xuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX0sIGhlYWRlcilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19LCBzdWJIZWFkZXIpXG4gICAgICAsIGJ1dHRvblxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbXB0eVBhZ2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eVF1ZXVlc1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEVtcHR5UXVldWVzU1ZHID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoICAgIFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHsgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXG4gICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgMjQgMjRcIiAgICAsXG4gICAgICBoZWlnaHQ6IDEwMCwgXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiICAgLCBcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBmaWxsOiBQQUxFVFRFLkJBQ0tHUk9VTkRfR1JBWV9NSUQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2fX1cbiAgICBcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZycsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgd2lkdGg6IFwiMjRcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0pXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCB3aWR0aDogXCIyNFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTV9fSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdyZWN0JywgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIHdpZHRoOiBcIjI0XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNn19KVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdnJywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE5fX0pXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTAgMGgyNHYyNEgwelwiICwgZmlsbDogXCJub25lXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMH19KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5elwiICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwfX0pXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBFbXB0eVF1ZXVlc1NWR1xuIiwiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VEb2N1bWVudFRpdGxlID0gKHRpdGxlKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICB9LCBbdGl0bGVdKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEb2N1bWVudFRpdGxlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9jb250YWluZXJzL1F1ZXVlcy9RdWV1ZXNDb250YWluZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcXMgZnJvbSAncXMnXG5pbXBvcnQgQ2hhcnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2hhcnRzL0NoYXJ0cydcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtDaGFydH0gZnJvbSAndXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJ2NvbXBvbmVudHMvTG9hZGluZ1BhZ2UnXG5cbmNvbnN0IFF1ZXVlc0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7cXVldWVzLCBzZXRBY3RpdmUsIHF1ZXVlSWRzLCB1c2VyfSA9IHByb3BzXG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3JhbmdlLCBzZXRSYW5nZV0gPSB1c2VTdGF0ZSgnd2Vla2x5JylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IG9yZ0lkID0gdXNlci5jdXJyZW50X29yZ2FuaXphdGlvbl9pZFxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWV1ZXMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCB0eXBlID0gW0NoYXJ0LkNPTVBMRVRFRCwgQ2hhcnQuQUhULCBDaGFydC5QRU5ESU5HLCBDaGFydC5UQVQsIENoYXJ0LkFDQ1VSQUNZXVxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9tZXRyaWNzL3F1ZXVlc2AsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcGFyYW1zOiB7cmFuZ2UsIHR5cGUsIHF1ZXVlX2lkOiBxdWV1ZUlkc30sXG4gICAgICAgIHBhcmFtc1NlcmlhbGl6ZXI6IChwYXJhbXMpID0+IHFzLnN0cmluZ2lmeShwYXJhbXMsIHthcnJheUZvcm1hdDogJ3JlcGVhdCd9KSxcbiAgICAgICAgZGF0YToge3JhbmdlLCB0eXBlLCBxdWV1ZV9pZDogcXVldWVJZHN9XG4gICAgICB9KVxuICAgICAgc2V0Q2hhcnREYXRhKGRhdGEpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIGZldGNoUXVldWVzKClcbiAgfSwgW3JhbmdlLCBxdWV1ZUlkc10pXG5cbiAgbGV0IHJlbmRlckNvbXBcbiAgY29uc3Qge2NvbXBsZXRlZCwgcGVuZGluZywgYWh0LCB0YXQsIGFjY3VyYWN5fSA9IGNoYXJ0RGF0YVxuXG4gIGNvbnN0IGNoYXJ0cyA9IFtcbiAgICB7ZGF0YTogY29tcGxldGVkLCB0aXRsZTogJ0NvbXBsZXRlZCBUYXNrcyBPdmVyIFRpbWUnLCBsaW5lczogcXVldWVzfSxcbiAgICB7ZGF0YTogcGVuZGluZywgdGl0bGU6ICdQZW5kaW5nIFRhc2tzIE92ZXIgVGltZScsIGxpbmVzOiBxdWV1ZXN9LFxuICAgIHtkYXRhOiBhaHQsIHRpdGxlOiAnQXZlcmFnZSBIYW5kbGluZyBUaW1lIChBSFQpJywgaW5TZWNvbmRzOiB0cnVlLCBsaW5lczogcXVldWVzfSxcbiAgICB7ZGF0YTogdGF0LCB0aXRsZTogJ1R1cm4gQXJvdW5kIFRpbWUgKFRBVCknLCBpblNlY29uZHM6IHRydWUsIGxpbmVzOiBxdWV1ZXN9LFxuICAgIHtkYXRhOiBhY2N1cmFjeSwgdGl0bGU6ICdBY2N1cmFjeScsIGluUGVyY2VudDogdHJ1ZSwgbGluZXM6IHF1ZXVlc31cbiAgXVxuXG4gIGlmIChjb21wbGV0ZWQgJiYgcGVuZGluZyAmJiBhaHQgJiYgdGF0ICYmIGFjY3VyYWN5KSB7XG4gICAgcmVuZGVyQ29tcCA9IChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hhcnRzLCB7XG4gICAgICAgIGZpbHRlck1lbnU6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgIGxpbmVzOiBxdWV1ZXMsXG4gICAgICAgIGNoYXJ0czogY2hhcnRzLFxuICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgIHNldFJhbmdlOiBzZXRSYW5nZSxcbiAgICAgICAgc2V0QWN0aXZlOiBzZXRBY3RpdmUsXG4gICAgICAgIHRpdGxlOiAnUXVldWUgUGVyZm9ybWFuY2UnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fVxuICAgICAgKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJDb21wID0gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nUGFnZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1OH19IClcbiAgfVxuXG4gIHJldHVybiByZW5kZXJDb21wXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlc0NvbnRhaW5lclxuIiwiY29uc3QgZm9ybWF0Q29tbWFzID0gKG51bWJlcikgPT5cbiAgKCcnICsgbnVtYmVyKVxuICAgIC5zcGxpdCgnJylcbiAgICAucmV2ZXJzZSgpXG4gICAgLmpvaW4oJycpXG4gICAgLnJlcGxhY2UoLyguLi4pL2csICckMSwnKVxuICAgIC5zcGxpdCgnJylcbiAgICAucmV2ZXJzZSgpXG4gICAgLmpvaW4oJycpXG4gICAgLnJlcGxhY2UoL14sLywgJycpXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdENvbW1hc1xuIiwiZXhwb3J0IGNvbnN0IHNlZ21lbnRUcmFjayA9IGFzeW5jIChldmVudCwgcHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7YW5hbHl0aWNzfSA9IHdpbmRvdyB8fCB1bmRlZmluZWRcbiAgaWYgKCFhbmFseXRpY3MpIHJldHVyblxuICBhbmFseXRpY3MudHJhY2soZXZlbnQsIHByb3BlcnRpZXMpXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJy4uLy4uL2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBnZXRGaXJzdExldHRlciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEF2YXRhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge2luaXRpYWxzLCBjb2xvciwgb25DbGljaywgc3R5bGUsIHRyaW0gPSB0cnVlfSA9IHByb3BzXG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgfHwgUEFMRVRURS5QUklNQVJZX01BSU5cblxuICBjb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5zcGFuKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB0ZXN0QWxpZ246ICdjZW50ZXInLFxuICAgIGhlaWdodDogYDIwcHhgLFxuICAgIHdpZHRoOiBgMjBweGAsXG4gICAgbWluV2lkdGg6IGAyMHB4YCxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IDExLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIG1hcmdpbjogJzBweCAycHgnXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19XG4gICAgICAsIHRyaW0gPyBnZXRGaXJzdExldHRlcihpbml0aWFscykgOiBpbml0aWFsc1xuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9RdWV1ZXMudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvQWN0aW9uQnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IGZvcm1hdENvbW1hcyBmcm9tICdjbGllbnQvdXRpbHMvZm9ybWF0Q29tbWFzJ1xuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ2NsaWVudC91dGlscy9zZWdtZW50SW8nXG5cbmltcG9ydCB1c2VEb2N1bWVudFRpdGxlIGZyb20gJ2NsaWVudC9ob29rcy91c2VEb2N1bWVudFRpdGxlJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0F2YXRhcidcbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQgRW1wdHlQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZSdcbmltcG9ydCBFbXB0eVF1ZXVlc1NWRyBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29ucy9FbXB0eVF1ZXVlc1NWRydcbmltcG9ydCB1c2VNb2RhbCBmcm9tICdjbGllbnQvaG9va3MvdXNlTW9kYWwnXG5pbXBvcnQgVGVtcGxhdGVzTW9kYWwgZnJvbSAnLi9UZW1wbGF0ZXNNb2RhbCdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFBhZ2UgPSBzdHlsZWQuZGl2KHtcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxuICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgbWluV2lkdGg6IDgwMCxcbiAgcGFkZGluZzogJzAgMTAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn0pXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHBhZGRpbmc6ICc5NnB4IDAgMjhweCAwJyxcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMzJweCdcbn0pXG5cbmNvbnN0IEl0ZW1MaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGZsZXhXcmFwOiAnd3JhcCcsXG4gIHBhZGRpbmdUb3A6ICczMnB4J1xufSlcblxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgbGluZUhlaWdodDogJzQwcHgnLFxuICBoZWlnaHQ6IDEzNixcbiAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luQm90dG9tOiAzMixcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gLFxuICBib3JkZXJSYWRpdXM6ICcxNnB4JyxcbiAgcGFkZGluZzogJzI0cHggNDBweCAyNHB4IDQwcHgnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAnOmhvdmVyJzoge1xuICAgIGJveFNoYWRvdzogJzBweCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjAyKSdcbiAgfVxufSlcblxuY29uc3QgUXVldWVUaXRsZSA9IHN0eWxlZChMaW5rKSh7XG4gIGNvbG9yOiBgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn1gLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjJweCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbn0pXG5cbmNvbnN0IFN1YkluZm8gPSBzdHlsZWQuc3Bhbih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInXG59KVxuXG5jb25zdCBQZW5kaW5nVGFza3NDb250YWluZXIgPSBzdHlsZWQuc3Bhbih7XG4gIHdpZHRoOiAxODRcbn0pXG5cbmNvbnN0IFBlbmRpbmdUYXNrcyA9IHN0eWxlZC5zcGFuKHtcbiAgY29sb3I6IGAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIGZvbnRXZWlnaHQ6IDYwMFxufSlcblxuY29uc3QgTmV3UXVldWVCdXR0b24gPSBzdHlsZWQoQWN0aW9uQnV0dG9uKSh7XG4gIGhlaWdodDogMzBcbn0pXG5cbmNvbnN0IEFzc2lnbmVkID0gc3R5bGVkLnNwYW4oe1xuICBwYWRkaW5nTGVmdDogNFxufSlcblxuY29uc3QgUXVldWVzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyOiB7aXNfYWRtaW46IGlzQWRtaW59XG4gIH0gPSBwcm9wc1xuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3Qge3F1ZXVlcyA9IFtdLCB0ZW1wbGF0ZXMgPSBbXX0gPSBwcm9wc1xuXG4gIHVzZURvY3VtZW50VGl0bGUoJ1F1ZXVlcyBIb21lIHwgSHVtYW4gTGFtYmRhcycpXG4gIGNvbnN0IHttb2RhbFBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBjbG9zZVBvcnRhbH0gPSB1c2VNb2RhbCh7bm9DbG9zZTogZmFsc2V9KVxuXG4gIGNvbnN0IHNob3dUZW1wbGF0ZXNNb2RhbCA9ICgpID0+IHtcbiAgICBzZWdtZW50VHJhY2soJzEgLSBUZW1wbGF0ZSBNb2RhbCBDbGlja2VkIC0gW1FVRVVFIEZVTk5FTF0nLCB7fSlcbiAgICB0b2dnbGVQb3J0YWwoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2UsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE1fX1cbiAgICAgICwgcXVldWVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE5fX0sIFwiUXVldWVzXCIpXG4gICAgICAgICAgICAsIGlzQWRtaW4gJiYgKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMX19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5ld1F1ZXVlQnV0dG9uLCB7IGtleTogJ2FkZF9xdWV1ZScsIG9uQ2xpY2s6IHNob3dUZW1wbGF0ZXNNb2RhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19LCBcIk5ldyBxdWV1ZVwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW1MaXN0Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyOH19XG4gICAgICAgICAgICAsIHF1ZXVlcy5tYXAoKHF1ZXVlKSA9PiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHsga2V5OiBxdWV1ZS5pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlVGl0bGUsIHsgdG86IGAvcXVldWVzLyR7cXVldWUuaWR9YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19LCBxdWV1ZS5uYW1lKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJJbmZvLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzM319LCBcIkN1cnJlbnRseSBhc3NpZ25lZDpcIlxuXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBc3NpZ25lZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzV9fVxuICAgICAgICAgICAgICAgICAgICAgICwgcXVldWUuYWN0aXZlX3VzZXJzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5hY3RpdmVfdXNlcnMubWFwKCh1c2VyLCBpbmRleCwgbGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGxpc3QubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDMpIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtcyA+IDQgJiYgaW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yRnJvbVN0cmluZyh1c2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbHM6IGArJHtpdGVtcyAtIDN9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpbTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JGcm9tU3RyaW5nKHVzZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbHM6IHVzZXIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChQZW5kaW5nVGFza3NDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYwfX0sIFwiUGVuZGluZyBUYXNrczogXCJcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGVuZGluZ1Rhc2tzLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2MX19LCBmb3JtYXRDb21tYXMocXVldWUubl90YXNrcykpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVBhZ2UsIHtcbiAgICAgICAgICAgIHN2ZzogUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eVF1ZXVlc1NWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzF9fSApLFxuICAgICAgICAgICAgaGVhZGVyOiBcIkxvb2tzIGxpa2UgdGhlcmUgYXJlbid0IGFueSBxdWV1ZXMgeWV0LlwiLFxuICAgICAgICAgICAgc3ViSGVhZGVyOiBcbiAgICAgICAgICAgICAgaXNBZG1pbiA/IChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3NX19LCBcIkNyZWF0ZSB5b3VyIGZpcnN0IHF1ZXVlLCBvciByZWFkIG91clwiXG4gICAgICAgICAgICAgICAgICAgICAgICAsICcgJ1xuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZG9jcy5odW1hbmxhbWJkYXMuY29tL3F1aWNrc3RhcnQvY3JlYXRpbmctYS1xdWV1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJub3JlZmVycmVyXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzd9fVxuICAgICAgICAgICAgICAgICAgLCBcImRvY3VtZW50YXRpb25cIlxuXG4gICAgICAgICAgICAgICAgICApLCAnICcsIFwidG8gbGVhcm4gbW9yZS5cIlxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICdCZWZvcmUgeW91IGNhbiBhY2Nlc3MgcXVldWVzLCB5b3Ugd2lsbCBuZWVkIHRvIGJlIGFkZGVkIHRvIG9uZS4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIGJ1dHRvbjogXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkxfX1cbiAgICAgICAgICAgICAgICAsIGlzQWRtaW4gJiYgKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOZXdRdWV1ZUJ1dHRvbiwgeyBrZXk6ICdhZGRfcXVldWUnLCBvbkNsaWNrOiBzaG93VGVtcGxhdGVzTW9kYWwsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTN9fSwgXCJOZXcgcXVldWVcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzB9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBtb2RhbFBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFRlbXBsYXRlc01vZGFsLCB7IHRlbXBsYXRlczogdGVtcGxhdGVzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAyfX0gKSlcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVldWVzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29tcG9uZW50cy9UZW1wbGF0ZXNNb2RhbC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCB7c2VnbWVudFRyYWNrfSBmcm9tICdjbGllbnQvdXRpbHMvc2VnbWVudElvJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuXG5cblxuXG5cbmNvbnN0IE1vZGFsUm9vdCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB3aWR0aDogNTUwLFxuICBib3JkZXJSYWRpdXM6IDEwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJveFNoYWRvdzogQm94U2hhZG93Lk1PREFMLFxuICBwYWRkaW5nVG9wOiAzNSxcbiAgcGFkZGluZ0JvdHRvbTogMTUsXG4gIG1heEhlaWdodDogJ2NhbGMoMTAwdmggLSAxMDBweCknXG59KVxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAnMHB4JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgb3ZlcmZsb3c6ICdvdmVybGF5JyxcbiAgb3BhY2l0eTogMSxcbiAgaGVpZ2h0OiAnNTBweCcsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGJvcmRlclJhZGl1czogJzBweCAwcHggMTBweCAxMHB4JyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB3aGl0ZSknXG59KVxuXG5jb25zdCBNb2RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgcGFkZGluZ0JvdHRvbTogJzIwcHgnXG59KVxuXG5jb25zdCBNb2RhbFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMjUsXG4gIHBhZGRpbmdMZWZ0OiAzNVxufSlcblxuY29uc3QgTW9kYWxIZWFkZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzIycHgnLFxuICBsaW5lSGVpZ2h0OiAnMjdweCcsXG4gIG1hcmdpbkJvdHRvbTogJzE1cHgnXG59KVxuXG5jb25zdCBUZW1wbGF0ZXNBcmVhID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnXG59KVxuXG5jb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgcGFkZGluZzogJzEwcHggMjVweCdcbn0pXG5cbmNvbnN0IFRlbXBsYXRlSXRlbSA9IHN0eWxlZC5kaXYoe1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcGFkZGluZzogJzEwcHgnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG59KVxuXG5jb25zdCBUaHVtYm5haWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICR7VGVtcGxhdGVJdGVtfTpob3ZlciAmIHtcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMSk7XG4gIH1cbmBcblxuY29uc3QgU3R5bGVkVGh1bWJuYWlsID0gc3R5bGVkLmltZyh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZvbnRTaXplOiAzOCxcbiAgY29sb3I6ICcjZmZmJyxcbiAgb2JqZWN0Rml0OiAnY29udGFpbicsXG4gIG1heFdpZHRoOiAnMTAwcHgnLFxuICBtYXhIZWlnaHQ6ICcxMDBweCcsXG4gIGJvcmRlclJhZGl1czogOVxufSlcblxuY29uc3QgRW1wdHlUaHVtYm5haWwgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDM4LFxuICBjb2xvcjogJyNmZmYnLFxuICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgaGVpZ2h0OiAnMTAwcHgnLFxuICB3aWR0aDogJzEwMHB4JyxcbiAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke1BBTEVUVEUuQk9SREVSX0dSQVlfTkVXfWAsXG4gIGJvcmRlclJhZGl1czogOVxufSlcblxuY29uc3QgVGVtcGxhdGVJbmZvID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHRleHRBbGlnbjogJ2xlZnQnXG59KVxuXG5jb25zdCBUZW1wbGF0ZU5hbWUgPSBzdHlsZWQuYih7XG4gIGZvbnRTaXplOiAxNlxufSlcblxuY29uc3QgU3VtbWFyeSA9IHN0eWxlZC5zcGFuKCh7Zm9udFNpemUsIGZvbnRXZWlnaHR9KSA9PiAoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktFUl9HUkFZLFxuICBmb250U2l6ZTogZm9udFNpemUgfHwgMTQsXG4gIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQgfHwgNDAwLFxuICBtYXJnaW5Ub3A6IDUsXG4gIHBhZGRpbmdSaWdodDogMTAsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgV2Via2l0TGluZUNsYW1wOiAyXG59KSlcblxuY29uc3QgVGVtcGxhdGVzTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3RlbXBsYXRlc30gPSBwcm9wc1xuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3QgZW1wdHlUZW1wbGF0ZSA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiAnQmxhbmsnLFxuICAgIHN1bW1hcnk6ICdTdGFydCB3aXRoIGFuIGVtcHR5IGNhbnZhcyBhbmQgYnVpbGQgZXhhY3RseSB3aGF0IHlvdSBuZWVkLicsXG4gICAgdGh1bWJuYWlsOiBudWxsXG4gIH1cblxuICBjb25zdCBhbGxUZW1wbGF0ZXMgPSBbZW1wdHlUZW1wbGF0ZSwgLi4udGVtcGxhdGVzXVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGlkLCBuYW1lKSA9PiB7XG4gICAgc2VnbWVudFRyYWNrKGAyIC0gUXVldWUgQ3JlYXRpb24gZnJvbSBUZW1wbGF0ZSAtIFtRVUVVRSBGVU5ORUxdYCwge1xuICAgICAgdGVtcGxhdGVOYW1lOiBuYW1lXG4gICAgfSlcbiAgICBpZiAoIWlkKSByZXR1cm4gaGlzdG9yeS5wdXNoKGAvcXVldWVzL25ld2ApXG4gICAgcmV0dXJuIGhpc3RvcnkucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9xdWV1ZXMvbmV3JyxcbiAgICAgIHN0YXRlOiB7dGVtcGxhdGVJZDogaWR9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsUm9vdCwgeyBpZDogXCJwYXJlbnRJZFwiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU1fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1Nn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEhlYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTd9fSwgXCJOZXcgUXVldWVcIiApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdW1tYXJ5LCB7IGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogNTAwLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU4fX0sIFwiU3RhcnQgZnJvbSBzY3JhdGNoIG9yIGNob29zZSBmcm9tIG9uZSBvZiB0aGUgdGVtcGxhdGVzIGJlbG93XCJcblxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Mn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZW1wbGF0ZXNBcmVhLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2M319XG4gICAgICAgICAgLCBhbGxUZW1wbGF0ZXMubWFwKCh7aWQsIG5hbWUsIHN1bW1hcnksIHRodW1ibmFpbH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbVdyYXBwZXIsIHsga2V5OiBpZCwgb25DbGljazogKCkgPT4gaGFuZGxlQ2xpY2soaWQsIG5hbWUpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY2fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVtcGxhdGVJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2N319XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjh9fVxuICAgICAgICAgICAgICAgICAgICAsIHRodW1ibmFpbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGh1bWJuYWlsLCB7IHNyYzogdGh1bWJuYWlsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX0gKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlUaHVtYm5haWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX0gKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRlbXBsYXRlSW5mbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzF9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGVtcGxhdGVOYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3Mn19LCBuYW1lKVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VtbWFyeSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzN9fSwgc3VtbWFyeSlcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3ZlcmxheSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODF9fSApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlc01vZGFsXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29udGFpbmVycy9RdWV1ZXNDb250YWluZXIudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFF1ZXVlcyBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXVlcydcbmltcG9ydCB1c2VEb2N1bWVudFRpdGxlIGZyb20gJ2NsaWVudC9ob29rcy91c2VEb2N1bWVudFRpdGxlJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IExvYWRpbmdQYWdlIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xvYWRpbmdQYWdlJ1xuXG5pbXBvcnQge3dvcmtmbGxvd0FjdGlvbnN9IGZyb20gJ2NsaWVudC9yZWR1eC9xdWV1ZXNSZWR1Y2VycydcbmltcG9ydCB7dXNlcnNBY3Rpb25zfSBmcm9tICdjbGllbnQvcmVkdXgvdXNlcnNSZWR1Y2VyJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IFF1ZXVlc0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlcn0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCB7Y3VycmVudF9vcmdhbml6YXRpb25faWQ6IG9yZ0lkfSA9IHVzZXJcbiAgY29uc3QgW3F1ZXVlcywgc2V0UXVldWVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbdGVtcGxhdGVzLCBzZXRUZW1wbGF0ZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFt0ZW1wbGF0ZXNMb2FkaW5nLCBzZXRUZW1wbGF0ZXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlcnNMb2FkaW5nLCBzZXRVc2Vyc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hRdWV1ZXMoKSB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5odHRwSGFuZGxlciwgJ2NhbGwnLCBfMiA9PiBfMihgL29yZ3MvJHtvcmdJZH0vcXVldWVzYCwgcGF5bG9hZCldKVxuICAgIGNvbnN0IHtlcnJvcnMsIGRhdGF9ID0gcmVzIHx8IHt9XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgc2V0RXJyb3IoZXJyb3JzKVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVldWVzIScsIEpTT04uc3RyaW5naWZ5KGVycm9ycykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZFF1ZXVlID0gZGF0YS5zb3J0KChhLCBiKSA9PiAoYS5uX3Rhc2tzIDwgYi5uX3Rhc2tzID8gMSA6IC0xKSlcbiAgICAgICAgc2V0UXVldWVzKHNvcnRlZFF1ZXVlKVxuICAgICAgICBwcm9wcy5zZXRRdWV1ZXMoc29ydGVkUXVldWUpXG4gICAgICAgIHByb3BzLmNsZWFyU2VsZWN0ZWRRdWV1ZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRlbXBsYXRlcygpIHtcbiAgICBzZXRUZW1wbGF0ZXNMb2FkaW5nKHRydWUpXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgX29wdGlvbmFsQ2hhaW4oW25ldHdvcmtlciwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuaHR0cEhhbmRsZXIsICdjYWxsJywgXzQgPT4gXzQoYC90ZW1wbGF0ZXNgLCBwYXlsb2FkKV0pXG4gICAgY29uc3Qge2Vycm9ycywgZGF0YX0gPSByZXMgfHwge31cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBzZXRFcnJvcihlcnJvcnMpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBUZW1wbGF0ZXMhJywgSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgc2V0VGVtcGxhdGVzKGRhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIHNldFRlbXBsYXRlc0xvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJzKCkge1xuICAgIHNldFVzZXJzTG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF82ID0+IF82KGAvb3Jncy8ke29yZ0lkfS91c2Vyc2AsIHBheWxvYWQpXSlcbiAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IHJlcyB8fCB7fVxuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgIHNldEVycm9yKGVycm9ycylcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIFVzZXJzIGZvciBvcmchJywgSlNPTi5zdHJpbmdpZnkoZXJyb3JzKSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcHJvcHMuc2V0VXNlcnMoZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VXNlcnNMb2FkaW5nKGZhbHNlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFF1ZXVlcygpXG4gIH0sIFtvcmdJZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFRlbXBsYXRlcygpXG4gIH0sIFtvcmdJZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFVzZXJzKClcbiAgfSwgW29yZ0lkXSlcblxuICBsZXQgcmVuZGVyQ29tcFxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmVuZGVyQ29tcCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ1BhZ2UsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAyfX0gKVxuICB9IGVsc2Uge1xuICAgIHJlbmRlckNvbXAgPSAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlcywge1xuICAgICAgICBxdWV1ZXM6IHF1ZXVlcyxcbiAgICAgICAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgdGVtcGxhdGVzTG9hZGluZyB8fCB1c2Vyc0xvYWRpbmcsXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgdXNlcjogcHJvcHMudXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNX19XG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgdXNlRG9jdW1lbnRUaXRsZShgUXVldWVzIHwgSHVtYW4gTGFtYmRhc2ApXG5cbiAgcmV0dXJuIHJlbmRlckNvbXBcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBzZXRRdWV1ZXM6IChhcmcpID0+IGRpc3BhdGNoKHdvcmtmbGxvd0FjdGlvbnMuc2V0UXVldWVzKGFyZykpLFxuICBjbGVhclNlbGVjdGVkUXVldWU6IChhcmcpID0+IGRpc3BhdGNoKHdvcmtmbGxvd0FjdGlvbnMuY2xlYXJTZWxlY3RlZFF1ZXVlKCkpLFxuICBzZXRVc2VyczogKGFyZykgPT4gZGlzcGF0Y2godXNlcnNBY3Rpb25zLnNldFVzZXJzKGFyZykpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUXVldWVzQ29udGFpbmVyKVxuIiwiaW1wb3J0IHN0cmluZ1RvSGFzaCBmcm9tICcuL3N0cmluZ1RvSGFzaCdcbmltcG9ydCB7QmFja2dyb3VuZENvbG9yc30gZnJvbSAnY2xpZW50L3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBnZXRDb2xvciA9IChpZGVudGlmaWVyKSA9PiBCYWNrZ3JvdW5kQ29sb3JzW2lkZW50aWZpZXIgJSBCYWNrZ3JvdW5kQ29sb3JzLmxlbmd0aF1cblxuZXhwb3J0IGNvbnN0IGNvbG9yRnJvbVN0cmluZyA9IChzdHJpbmcpID0+IGdldENvbG9yKE1hdGguYWJzKHN0cmluZ1RvSGFzaChzdHJpbmcpKSlcblxuZXhwb3J0IGNvbnN0IGNvbG9yQnlJbmRleCA9IChpbmRleCkgPT4gZ2V0Q29sb3IoaW5kZXgpXG4iLCJjb25zdCBnZXRGaXJzdExldHRlciA9IChzdHIpID0+IHtcbiAgbGV0IGZpcnN0TGV0dGVyID0gc3RyXG5cbiAgaWYgKHN0ciAmJiBzdHIubGVuZ3RoID4gMSkge1xuICAgIGZpcnN0TGV0dGVyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gIH1cblxuICByZXR1cm4gZmlyc3RMZXR0ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Rmlyc3RMZXR0ZXJcbiIsImNvbnN0IHN0cmluZ1RvSGFzaCA9IChzdHJpbmcpID0+IHtcbiAgbGV0IGhhc2ggPSAwLFxuICAgIGksXG4gICAgY2hyXG4gIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaHJcbiAgICBoYXNoIHw9IDBcbiAgfVxuICByZXR1cm4gaGFzaFxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdUb0hhc2hcbiJdLCJzb3VyY2VSb290IjoiIn0=