(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["QueuesRoot"],{

/***/ "./src/client/modules/queues/QueuesRoot.tsx":
/*!**************************************************!*\
  !*** ./src/client/modules/queues/QueuesRoot.tsx ***!
  \**************************************************/
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

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/queues/QueuesRoot.tsx";
/**
* TODO
* Relocate queues container to universal
*/




const QueuesContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | QueuesContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~b5e00a13"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("QueuesContainer")]).then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/QueuesContainer */ "./src/universal/modules/queue/containers/QueuesContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const ConnectionsContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | ConnectionsContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~b5e00a13"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~ConnectionsContainer~Queue~TaskRoot"), __webpack_require__.e("vendors~APIKeyContainer~CompanyContainer~ConnectionsContainer"), __webpack_require__.e("vendors~ConnectionsContainer"), __webpack_require__.e("ConnectionsContainer")]).then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/ConnectionsContainer */ "./src/universal/modules/queue/containers/ConnectionsContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const QueueContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() | QueueContainer */ "QueueContainer").then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/QueueContainer */ "./src/universal/modules/queue/containers/QueueContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));

const QueuesRoot = props => {
  const {
    user,
    organizations
  } = props || {};
  if (!user.email) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: ' ',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/queues/:queueId/connections",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectionsContainer, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/queues/:queueId",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueueContainer, _objectSpread(_objectSpread({
      organizations: organizations
    }, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/queues/:queueId",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueueContainer, _objectSpread(_objectSpread({
      organizations: organizations
    }, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/queues",
    render: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QueuesContainer, _objectSpread(_objectSpread({}, p), {}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcXVldWVzL1F1ZXVlc1Jvb3QudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIlF1ZXVlc0NvbnRhaW5lciIsImxhenkiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlQ2h1bmtFcnJvciIsIkNvbm5lY3Rpb25zQ29udGFpbmVyIiwiUXVldWVDb250YWluZXIiLCJRdWV1ZXNSb290IiwicHJvcHMiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImVtYWlsIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiU3dpdGNoIiwiUm91dGUiLCJleGFjdCIsInBhdGgiLCJyZW5kZXIiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsNEVBQXJCO0FBQWtHO0FBQ2xHO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNQyxlQUFlLGdCQUFHQyxrREFBSSxDQUFDLE1BQzNCLDBxQkFFRUMsS0FGRixDQUVTQyxLQUFELElBQVdDLGdGQUFnQixDQUFDRCxLQUFELENBRm5DLENBRDBCLENBQTVCO0FBS0EsTUFBTUUsb0JBQW9CLGdCQUFHSixrREFBSSxDQUFDLE1BQ2hDLGl2QkFFRUMsS0FGRixDQUVTQyxLQUFELElBQVdDLGdGQUFnQixDQUFDRCxLQUFELENBRm5DLENBRCtCLENBQWpDO0FBS0EsTUFBTUcsY0FBYyxnQkFBR0wsa0RBQUksQ0FBQyxNQUMxQixzT0FFRUMsS0FGRixDQUVTQyxLQUFELElBQVdDLGdGQUFnQixDQUFDRCxLQUFELENBRm5DLENBRHlCLENBQTNCOztBQU1BLE1BQU1JLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQzVCLFFBQU07QUFBQ0MsUUFBRDtBQUFPQztBQUFQLE1BQXdCRixLQUFLLElBQUksRUFBdkM7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QyxnQkFBUSxFQUFFbkIsWUFBWDtBQUF5Qm9CLGtCQUFVLEVBQUU7QUFBckM7QUFBakYsT0FBbEM7QUFBZ0tILFVBQU0sRUFBRSxTQUF4SztBQUE4S0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRW5CLFlBQVg7QUFBeUJvQixnQkFBVSxFQUFFO0FBQXJDO0FBQXhMLEdBQTNCLENBaEJGLENBREosQ0FERjtBQXNCRCxDQTFCRDs7QUE0QmVaLHlFQUFmLEUiLCJmaWxlIjoiUXVldWVzUm9vdF8zNzBhNTJlZjFhOTE3MTkyNTEyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy9xdWV1ZXMvUXVldWVzUm9vdC50c3hcIjsvKipcbiAqIFRPRE9cbiAqIFJlbG9jYXRlIHF1ZXVlcyBjb250YWluZXIgdG8gdW5pdmVyc2FsXG4gKi9cbmltcG9ydCBSZWFjdCwge2xhenksIFN1c3BlbnNlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBoYW5kbGVDaHVua0Vycm9yIGZyb20gJ3VuaXZlcnNhbC91dGlscy9oYW5kbGVDaHVua0Vycm9yJ1xuXG5cblxuXG5cbmNvbnN0IFF1ZXVlc0NvbnRhaW5lciA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdRdWV1ZXNDb250YWluZXInICovICd1bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlc0NvbnRhaW5lcidcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuY29uc3QgQ29ubmVjdGlvbnNDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQ29ubmVjdGlvbnNDb250YWluZXInICovICd1bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL0Nvbm5lY3Rpb25zQ29udGFpbmVyJ1xuICApLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5jb25zdCBRdWV1ZUNvbnRhaW5lciA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdRdWV1ZUNvbnRhaW5lcicgKi8gJ3VuaXZlcnNhbC9tb2R1bGVzL3F1ZXVlL2NvbnRhaW5lcnMvUXVldWVDb250YWluZXInXG4gICkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVDaHVua0Vycm9yKGVycm9yKSlcbilcblxuY29uc3QgUXVldWVzUm9vdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlciwgb3JnYW5pemF0aW9uc30gPSBwcm9wcyB8fCB7fVxuICBpZiAoIXVzZXIuZW1haWwpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN1c3BlbnNlLCB7IGZhbGxiYWNrOiAnICcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgcGF0aDogXCIvcXVldWVzLzpxdWV1ZUlkL2Nvbm5lY3Rpb25zXCIsXG4gICAgICAgICAgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0aW9uc0NvbnRhaW5lciwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzZ9fVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgIHBhdGg6IFwiL3F1ZXVlcy86cXVldWVJZFwiLFxuICAgICAgICAgIHJlbmRlcjogKHApID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVDb250YWluZXIsIHsgb3JnYW5pemF0aW9uczogb3JnYW5pemF0aW9ucywgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiBcIi9xdWV1ZXMvOnF1ZXVlSWRcIixcbiAgICAgICAgICByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlQ29udGFpbmVyLCB7IG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsIC4uLnAsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19XG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHBhdGg6IFwiL3F1ZXVlc1wiLCByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlc0NvbnRhaW5lciwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXVlc1Jvb3RcbiJdLCJzb3VyY2VSb290IjoiIn0=