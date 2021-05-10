(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MetricsRoot"],{

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

/***/ "./src/client/components/Icons/EmptyMetricsSVG.tsx":
/*!*********************************************************!*\
  !*** ./src/client/components/Icons/EmptyMetricsSVG.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Icons/EmptyMetricsSVG.tsx";


const EmptyMetricsSVG = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
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
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (EmptyMetricsSVG);

/***/ }),

/***/ "./src/client/modules/metrics/MetricsRoot.tsx":
/*!****************************************************!*\
  !*** ./src/client/modules/metrics/MetricsRoot.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_Metrics_Metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Metrics/Metrics */ "./src/client/modules/metrics/containers/Metrics/Metrics.tsx");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var components_EmptyPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/EmptyPage */ "./src/client/components/EmptyPage.tsx");
/* harmony import */ var components_Icons_EmptyMetricsSVG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Icons/EmptyMetricsSVG */ "./src/client/components/Icons/EmptyMetricsSVG.tsx");
/* harmony import */ var client_components_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/LoadingComponent */ "./src/client/components/LoadingComponent.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/metrics/MetricsRoot.tsx";








const MetricsRoot = props => {
  const {
    user,
    orgUsers
  } = props || {};
  const [queues, setQueues] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [queueLoading, setQueueLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [queueIds, setQueueIds] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const orgId = user.current_organization_id;
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const makeLineItem = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((id, name) => {
    return {
      id,
      name,
      isActive: true,
      stroke: '#' + Math.random().toString(16).substr(-6),
      dataKey: name,
      fill: '#fff'
    };
  }, [queues, orgUsers]);
  const [userIds, setUserIds] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(orgUsers.map(user => user.id));
  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(orgUsers.map(({
    name,
    id
  }) => makeLineItem(id, name)));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getData() {
      setQueueLoading(true);
      const {
        data
      } = await networker.httpHandler(`/orgs/${orgId}/queues`, {
        method: 'GET'
      });
      const sanitizedQueues = data.map((_ref) => {
        let {
          description,
          inputs,
          outputs,
          n_tasks
        } = _ref,
            keepAttr = _objectWithoutProperties(_ref, ["description", "inputs", "outputs", "n_tasks"]);

        return _objectSpread({}, keepAttr);
      });
      setQueueIds(sanitizedQueues.map(queue => queue.id));
      setQueues(sanitizedQueues.map(({
        name,
        id
      }) => makeLineItem(id, name)));
      setQueueLoading(false);
    }

    getData();
  }, [user]);
  /**
   * TODO combine setActive and setActiveUsers
   */

  const setActive = id => {
    const oldQueues = queues;
    const newQueue = oldQueues.find(queue => queue.id === id);
    const updatedQueue = newQueue['isActive'] = !newQueue.isActive;
    setQueues(Object.assign(oldQueues, updatedQueue));
    const index = queueIds.findIndex(queue => queue === id);

    if (index !== -1) {
      const newIds = queueIds.filter(queue => queue !== id);
      setQueueIds(newIds);
    } else {
      setQueueIds([...queueIds, id]);
    }
  };

  const setActiveUsers = id => {
    const oldUsers = users;
    const newUser = oldUsers.find(user => user.id === id);
    const updatedUsers = newUser['isActive'] = !newUser.isActive;
    setUsers(Object.assign(oldUsers, updatedUsers));
    const index = userIds.findIndex(user => user === id);

    if (index !== -1) {
      const newIds = userIds.filter(user => user !== id);
      setUserIds(newIds);
    } else {
      setUserIds([...userIds, id]);
    }
  };

  if (queueLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_LoadingComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  });
  return queues.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_EmptyPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    svg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icons_EmptyMetricsSVG__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      }
    }),
    header: 'Looks like there are no metrics available yet.',
    subHeader: 'Before you can access all metrics, some tasks will need to be created and completed.',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Metrics_Metrics__WEBPACK_IMPORTED_MODULE_2__["default"], {
    users: users,
    queues: queues,
    setActive: setActive,
    setActiveUsers: setActiveUsers,
    queueIds: queueIds,
    userIds: userIds,
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  });
};

const mapStateToProps = state => ({
  orgUsers: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(MetricsRoot));

/***/ }),

/***/ "./src/client/modules/metrics/containers/Metrics/Metrics.tsx":
/*!*******************************************************************!*\
  !*** ./src/client/modules/metrics/containers/Metrics/Metrics.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/utils/handleChunkError */ "./src/universal/utils/handleChunkError.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/metrics/containers/Metrics/Metrics.tsx";



const Overview = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | OverviewContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~b5e00a13"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer")]).then(__webpack_require__.bind(null, /*! ../Overview/OverviewContainer */ "./src/client/modules/metrics/containers/Overview/OverviewContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const Queues = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | QueuesContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~b5e00a13"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("QueuesContainer")]).then(__webpack_require__.bind(null, /*! ../Queues/QueuesContainer */ "./src/client/modules/metrics/containers/Queues/QueuesContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const Workers = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | WorkersContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~b5e00a13"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("WorkersContainer")]).then(__webpack_require__.bind(null, /*! ../Workers/WorkersContainer */ "./src/client/modules/metrics/containers/Workers/WorkersContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));

const QueuesRoot = props => {
  const {
    queues,
    setActive,
    setActiveUsers,
    queueIds,
    users,
    userIds,
    user
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: ' ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/metrics/queues",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Queues, _objectSpread(_objectSpread({}, p), {}, {
      queues: queues,
      queueIds: queueIds,
      setActive: setActive,
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/metrics/workers",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Workers, _objectSpread(_objectSpread({
      setActiveUsers: setActiveUsers,
      userIds: userIds,
      users: users
    }, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/metrics",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overview, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (QueuesRoot);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRW1wdHlQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbnMvRW1wdHlNZXRyaWNzU1ZHLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9NZXRyaWNzUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9tb2R1bGVzL21ldHJpY3MvY29udGFpbmVycy9NZXRyaWNzL01ldHJpY3MudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIldyYXBwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIndpZHRoIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsIlRpdGxlIiwiY29sb3IiLCJQQUxFVFRFIiwiVEVYVF9NQUlOIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiU3ViVGl0bGUiLCJQUklNQVJZX01BSU4iLCJFbXB0eVBhZ2UiLCJzdmciLCJoZWFkZXIiLCJzdWJIZWFkZXIiLCJidXR0b24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkVtcHR5TWV0cmljc1NWRyIsIm1lbW8iLCJmaWxsIiwiQkFDS0dST1VORF9HUkFZX01JRCIsInZpZXdCb3giLCJ4bWxucyIsImQiLCJNZXRyaWNzUm9vdCIsInByb3BzIiwidXNlciIsIm9yZ1VzZXJzIiwicXVldWVzIiwic2V0UXVldWVzIiwidXNlU3RhdGUiLCJxdWV1ZUxvYWRpbmciLCJzZXRRdWV1ZUxvYWRpbmciLCJxdWV1ZUlkcyIsInNldFF1ZXVlSWRzIiwib3JnSWQiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsIm1ha2VMaW5lSXRlbSIsInVzZUNhbGxiYWNrIiwiaWQiLCJuYW1lIiwiaXNBY3RpdmUiLCJzdHJva2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJkYXRhS2V5IiwidXNlcklkcyIsInNldFVzZXJJZHMiLCJtYXAiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsImRhdGEiLCJodHRwSGFuZGxlciIsIm1ldGhvZCIsInNhbml0aXplZFF1ZXVlcyIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwib3V0cHV0cyIsIm5fdGFza3MiLCJrZWVwQXR0ciIsInF1ZXVlIiwic2V0QWN0aXZlIiwib2xkUXVldWVzIiwibmV3UXVldWUiLCJmaW5kIiwidXBkYXRlZFF1ZXVlIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdJZHMiLCJmaWx0ZXIiLCJzZXRBY3RpdmVVc2VycyIsIm9sZFVzZXJzIiwibmV3VXNlciIsInVwZGF0ZWRVc2VycyIsIkxvYWRpbmdDb21wb25lbnQiLCJsZW5ndGgiLCJNZXRyaWNzQ29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0IiwiT3ZlcnZpZXciLCJsYXp5IiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZUNodW5rRXJyb3IiLCJRdWV1ZXMiLCJXb3JrZXJzIiwiUXVldWVzUm9vdCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJTd2l0Y2giLCJSb3V0ZSIsImV4YWN0IiwicGF0aCIsInJlbmRlciIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHVFQUFyQjtBQUE2RjtBQUU3RjtBQUNBOztBQVNBLE1BQU1DLE9BQU8sR0FBRztBQUFBO0FBQUEsR0FBVztBQUN6QkMsaUJBQWUsRUFBRSxNQURRO0FBRXpCQyxTQUFPLEVBQUUsTUFGZ0I7QUFHekJDLGVBQWEsRUFBRSxRQUhVO0FBSXpCQyxZQUFVLEVBQUUs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OlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0VtcHR5UGFnZS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRlxufSlcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250U2l6ZTogMjQsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbWFyZ2luOiAnMjBweCAwIDE1cHgnXG59KVxuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNixcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW46ICcwcHggMCAyMHB4JyxcbiAgJz4gZGl2ID4gYSc6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgRW1wdHlQYWdlID0gKHtzdmcsIGhlYWRlciwgc3ViSGVhZGVyLCBidXR0b259KSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICwgc3ZnXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fSwgaGVhZGVyKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIHN1YkhlYWRlcilcbiAgICAgICwgYnV0dG9uXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcHR5UGFnZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25zL0VtcHR5TWV0cmljc1NWRy50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEVtcHR5TWV0cmljc1NWRyA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGZpbGw6IFBBTEVUVEUuQkFDS0dST1VORF9HUkFZX01JRCxcbiAgICAgIGhlaWdodDogMTAwLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgICAsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNn19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6IFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yek05IDE3SDd2LTdoMnY3em00IDBoLTJWN2gydjEwem00IDBoLTJ2LTRoMnY0elwiICAgICAgICAgICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxM319IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogXCJNMCAwaDI0djI0SDB6XCIgLCBmaWxsOiBcIm5vbmVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0fX0gKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRW1wdHlNZXRyaWNzU1ZHXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9NZXRyaWNzUm9vdC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTWV0cmljc0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvTWV0cmljcy9NZXRyaWNzJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdob29rcy91c2VOZXR3b3JrZXInXG5pbXBvcnQgRW1wdHlQYWdlIGZyb20gJ2NvbXBvbmVudHMvRW1wdHlQYWdlJ1xuaW1wb3J0IEVtcHR5TWV0cmljc1NWRyBmcm9tICdjb21wb25lbnRzL0ljb25zL0VtcHR5TWV0cmljc1NWRydcblxuaW1wb3J0IExvYWRpbmdDb21wb25lbnQgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9hZGluZ0NvbXBvbmVudCdcblxuXG5cblxuXG5cbmNvbnN0IE1ldHJpY3NSb290ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt1c2VyLCBvcmdVc2Vyc30gPSBwcm9wcyB8fCB7fVxuICBjb25zdCBbcXVldWVzLCBzZXRRdWV1ZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtxdWV1ZUxvYWRpbmcsIHNldFF1ZXVlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3F1ZXVlSWRzLCBzZXRRdWV1ZUlkc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgY29uc3QgbWFrZUxpbmVJdGVtID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGlkLCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICAgIHN0cm9rZTogJyMnICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKC02KSxcbiAgICAgICAgZGF0YUtleTogbmFtZSxcbiAgICAgICAgZmlsbDogJyNmZmYnXG4gICAgICB9XG4gICAgfSxcbiAgICBbcXVldWVzLCBvcmdVc2Vyc11cbiAgKVxuXG4gIGNvbnN0IFt1c2VySWRzLCBzZXRVc2VySWRzXSA9IHVzZVN0YXRlKG9yZ1VzZXJzLm1hcCgodXNlcikgPT4gdXNlci5pZCkpXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUob3JnVXNlcnMubWFwKCh7bmFtZSwgaWR9KSA9PiBtYWtlTGluZUl0ZW0oaWQsIG5hbWUpKSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICBzZXRRdWV1ZUxvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3MvJHtvcmdJZH0vcXVldWVzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgY29uc3Qgc2FuaXRpemVkUXVldWVzID0gZGF0YS5tYXAoXG4gICAgICAgICh7ZGVzY3JpcHRpb24sIGlucHV0cywgb3V0cHV0cywgbl90YXNrcywgLi4ua2VlcEF0dHJ9KSA9PiAoey4uLmtlZXBBdHRyfSlcbiAgICAgIClcbiAgICAgIHNldFF1ZXVlSWRzKHNhbml0aXplZFF1ZXVlcy5tYXAoKHF1ZXVlKSA9PiBxdWV1ZS5pZCkpXG4gICAgICBzZXRRdWV1ZXMoc2FuaXRpemVkUXVldWVzLm1hcCgoe25hbWUsIGlkfSkgPT4gbWFrZUxpbmVJdGVtKGlkLCBuYW1lKSkpXG4gICAgICBzZXRRdWV1ZUxvYWRpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpXG4gIH0sIFt1c2VyXSlcblxuICAvKipcbiAgICogVE9ETyBjb21iaW5lIHNldEFjdGl2ZSBhbmQgc2V0QWN0aXZlVXNlcnNcbiAgICovXG4gIGNvbnN0IHNldEFjdGl2ZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG9sZFF1ZXVlcyA9IHF1ZXVlc1xuICAgIGNvbnN0IG5ld1F1ZXVlID0gb2xkUXVldWVzLmZpbmQoKHF1ZXVlKSA9PiBxdWV1ZS5pZCA9PT0gaWQpXG4gICAgY29uc3QgdXBkYXRlZFF1ZXVlID0gKG5ld1F1ZXVlWydpc0FjdGl2ZSddID0gIW5ld1F1ZXVlLmlzQWN0aXZlKVxuICAgIHNldFF1ZXVlcyhPYmplY3QuYXNzaWduKG9sZFF1ZXVlcywgdXBkYXRlZFF1ZXVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gcXVldWVJZHMuZmluZEluZGV4KChxdWV1ZSkgPT4gcXVldWUgPT09IGlkKVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IG5ld0lkcyA9IHF1ZXVlSWRzLmZpbHRlcigocXVldWUpID0+IHF1ZXVlICE9PSBpZClcbiAgICAgIHNldFF1ZXVlSWRzKG5ld0lkcylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UXVldWVJZHMoWy4uLnF1ZXVlSWRzLCBpZF0pXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0QWN0aXZlVXNlcnMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBvbGRVc2VycyA9IHVzZXJzXG4gICAgY29uc3QgbmV3VXNlciA9IG9sZFVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IGlkKVxuICAgIGNvbnN0IHVwZGF0ZWRVc2VycyA9IChuZXdVc2VyWydpc0FjdGl2ZSddID0gIW5ld1VzZXIuaXNBY3RpdmUpXG4gICAgc2V0VXNlcnMoT2JqZWN0LmFzc2lnbihvbGRVc2VycywgdXBkYXRlZFVzZXJzKSlcblxuICAgIGNvbnN0IGluZGV4ID0gdXNlcklkcy5maW5kSW5kZXgoKHVzZXIpID0+IHVzZXIgPT09IGlkKVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IG5ld0lkcyA9IHVzZXJJZHMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICE9PSBpZClcbiAgICAgIHNldFVzZXJJZHMobmV3SWRzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVc2VySWRzKFsuLi51c2VySWRzLCBpZF0pXG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXVlTG9hZGluZykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0NvbXBvbmVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19IClcblxuICByZXR1cm4gcXVldWVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5UGFnZSwge1xuICAgICAgc3ZnOiBSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5TWV0cmljc1NWRywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5Mn19ICksXG4gICAgICBoZWFkZXI6ICdMb29rcyBsaWtlIHRoZXJlIGFyZSBubyBtZXRyaWNzIGF2YWlsYWJsZSB5ZXQuJyxcbiAgICAgIHN1YkhlYWRlcjogXG4gICAgICAgICdCZWZvcmUgeW91IGNhbiBhY2Nlc3MgYWxsIG1ldHJpY3MsIHNvbWUgdGFza3Mgd2lsbCBuZWVkIHRvIGJlIGNyZWF0ZWQgYW5kIGNvbXBsZXRlZC4nXG4gICAgICAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgKVxuICApIDogKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljc0NvbnRhaW5lciwge1xuICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgcXVldWVzOiBxdWV1ZXMsXG4gICAgICBzZXRBY3RpdmU6IHNldEFjdGl2ZSxcbiAgICAgIHNldEFjdGl2ZVVzZXJzOiBzZXRBY3RpdmVVc2VycyxcbiAgICAgIHF1ZXVlSWRzOiBxdWV1ZUlkcyxcbiAgICAgIHVzZXJJZHM6IHVzZXJJZHMsXG4gICAgICB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIG9yZ1VzZXJzOiBzdGF0ZS51c2Vyc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKE1ldHJpY3NSb290KVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9tb2R1bGVzL21ldHJpY3MvY29udGFpbmVycy9NZXRyaWNzL01ldHJpY3MudHN4XCI7aW1wb3J0IFJlYWN0LCB7bGF6eSwgU3VzcGVuc2V9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGhhbmRsZUNodW5rRXJyb3IgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2hhbmRsZUNodW5rRXJyb3InXG5cbmNvbnN0IE92ZXJ2aWV3ID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ092ZXJ2aWV3Q29udGFpbmVyJyAqLyAnLi4vT3ZlcnZpZXcvT3ZlcnZpZXdDb250YWluZXInKVxuICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVDaHVua0Vycm9yKGVycm9yKSlcbilcblxuY29uc3QgUXVldWVzID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ1F1ZXVlc0NvbnRhaW5lcicgKi8gJy4uL1F1ZXVlcy9RdWV1ZXNDb250YWluZXInKVxuICAuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVDaHVua0Vycm9yKGVycm9yKSlcbilcblxuY29uc3QgV29ya2VycyA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdXb3JrZXJzQ29udGFpbmVyJyAqLyAnLi4vV29ya2Vycy9Xb3JrZXJzQ29udGFpbmVyJylcbiAgLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5cbmNvbnN0IFF1ZXVlc1Jvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3F1ZXVlcywgc2V0QWN0aXZlLCBzZXRBY3RpdmVVc2VycywgcXVldWVJZHMsIHVzZXJzLCB1c2VySWRzLCB1c2VyfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdXNwZW5zZSwgeyBmYWxsYmFjazogJyAnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjN9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNH19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgIHBhdGg6IFwiL21ldHJpY3MvcXVldWVzXCIsXG4gICAgICAgICAgcmVuZGVyOiAocCkgPT4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZXMsIHtcbiAgICAgICAgICAgICAgLi4ucCxcbiAgICAgICAgICAgICAgcXVldWVzOiBxdWV1ZXMsXG4gICAgICAgICAgICAgIHF1ZXVlSWRzOiBxdWV1ZUlkcyxcbiAgICAgICAgICAgICAgc2V0QWN0aXZlOiBzZXRBY3RpdmUsXG4gICAgICAgICAgICAgIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1fX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiBcIi9tZXRyaWNzL3dvcmtlcnNcIixcbiAgICAgICAgICByZW5kZXI6IChwKSA9PiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtlcnMsIHtcbiAgICAgICAgICAgICAgc2V0QWN0aXZlVXNlcnM6IHNldEFjdGl2ZVVzZXJzLFxuICAgICAgICAgICAgICB1c2VySWRzOiB1c2VySWRzLFxuICAgICAgICAgICAgICB1c2VyczogdXNlcnMsXG4gICAgICAgICAgICAgIC4uLnAsXG4gICAgICAgICAgICAgIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL21ldHJpY3NcIiwgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChPdmVydmlldywgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlc1Jvb3RcbiJdLCJzb3VyY2VSb290IjoiIn0=