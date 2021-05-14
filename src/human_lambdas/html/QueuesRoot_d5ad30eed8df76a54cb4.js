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




const QueuesContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | QueuesContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~d8756f7a"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("OverviewContainer~QueuesContainer~WorkersContainer"), __webpack_require__.e("QueuesContainer")]).then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/QueuesContainer */ "./src/universal/modules/queue/containers/QueuesContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const ConnectionsContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | ConnectionsContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~d8756f7a"), __webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~2d85f44e"), __webpack_require__.e("vendors~ConnectionsContainer~Queue~QueueContainer~TaskRoot"), __webpack_require__.e("vendors~APIKeyContainer~CompanyContainer~ConnectionsContainer"), __webpack_require__.e("vendors~ConnectionsContainer"), __webpack_require__.e("ConnectionsContainer")]).then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/ConnectionsContainer */ "./src/universal/modules/queue/containers/ConnectionsContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));
const QueueContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() | QueueContainer */[__webpack_require__.e("vendors~ConnectionsContainer~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~OverviewConta~d8756f7a"), __webpack_require__.e("vendors~ConnectionsContainer~Queue~QueueContainer~TaskRoot"), __webpack_require__.e("vendors~Queue~QueueContainer~TaskRoot"), __webpack_require__.e("Queue~QueueContainer~TaskRoot"), __webpack_require__.e("QueueContainer")]).then(__webpack_require__.bind(null, /*! universal/modules/queue/containers/QueueContainer */ "./src/universal/modules/queue/containers/QueueContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_2__["default"])(error)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvcXVldWVzL1F1ZXVlc1Jvb3QudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIlF1ZXVlc0NvbnRhaW5lciIsImxhenkiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlQ2h1bmtFcnJvciIsIkNvbm5lY3Rpb25zQ29udGFpbmVyIiwiUXVldWVDb250YWluZXIiLCJRdWV1ZXNSb290IiwicHJvcHMiLCJ1c2VyIiwib3JnYW5pemF0aW9ucyIsImVtYWlsIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiU3dpdGNoIiwiUm91dGUiLCJleGFjdCIsInBhdGgiLCJyZW5kZXIiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsNEVBQXJCO0FBQWtHO0FBQ2xHO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNQyxlQUFlLGdCQUFHQyxrREFBSSxDQUFDLE1BQzNCLDBxQkFFRUMsS0FGRixDQUVTQyxLQUFELElBQVdDLGdGQUFnQixDQUFDRCxLQUFELENBRm5DLENBRDBCLENBQTVCO0FBS0EsTUFBTUUsb0JBQW9CLGdCQUFHSixrREFBSSxDQUFDLE1BQ2hDLGd3QkFFRUMsS0FGRixDQUVTQyxLQUFELElBQVdDLGdGQUFnQixDQUFDRCxLQUFELENBRm5DLENBRCtCLENBQWpDO0FBS0EsTUFBTUcsY0FBYyxnQkFBR0wsa0RBQUksQ0FBQyxNQUMxQix5a0JBRUVDLEtBRkYsQ0FFU0MsS0FBRCxJQUFXQyxnRkFBZ0IsQ0FBQ0QsS0FBRCxDQUZuQyxDQUR5QixDQUEzQjs7QUFNQSxNQUFNSSxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUM1QixRQUFNO0FBQUNDLFFBQUQ7QUFBT0M7QUFBUCxNQUF3QkYsS0FBSyxJQUFJLEVBQXZD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Q0MsZ0JBQVEsRUFBRW5CLFlBQVg7QUFBeUJvQixrQkFBVSxFQUFFO0FBQXJDO0FBQWpGLE9BQWxDO0FBQWdLSCxVQUFNLEVBQUUsU0FBeEs7QUFBOEtDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVuQixZQUFYO0FBQXlCb0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF4TCxHQUEzQixDQWhCRixDQURKLENBREY7QUFzQkQsQ0ExQkQ7O0FBNEJlWix5RUFBZixFIiwiZmlsZSI6IlF1ZXVlc1Jvb3RfZDVhZDMwZWVkOGRmNzZhNTRjYjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L21vZHVsZXMvcXVldWVzL1F1ZXVlc1Jvb3QudHN4XCI7LyoqXG4gKiBUT0RPXG4gKiBSZWxvY2F0ZSBxdWV1ZXMgY29udGFpbmVyIHRvIHVuaXZlcnNhbFxuICovXG5pbXBvcnQgUmVhY3QsIHtsYXp5LCBTdXNwZW5zZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgaGFuZGxlQ2h1bmtFcnJvciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaGFuZGxlQ2h1bmtFcnJvcidcblxuXG5cblxuXG5jb25zdCBRdWV1ZXNDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUXVldWVzQ29udGFpbmVyJyAqLyAndW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29udGFpbmVycy9RdWV1ZXNDb250YWluZXInXG4gICkuY2F0Y2goKGVycm9yKSA9PiBoYW5kbGVDaHVua0Vycm9yKGVycm9yKSlcbilcbmNvbnN0IENvbm5lY3Rpb25zQ29udGFpbmVyID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogJ0Nvbm5lY3Rpb25zQ29udGFpbmVyJyAqLyAndW5pdmVyc2FsL21vZHVsZXMvcXVldWUvY29udGFpbmVycy9Db25uZWN0aW9uc0NvbnRhaW5lcidcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuY29uc3QgUXVldWVDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUXVldWVDb250YWluZXInICovICd1bml2ZXJzYWwvbW9kdWxlcy9xdWV1ZS9jb250YWluZXJzL1F1ZXVlQ29udGFpbmVyJ1xuICApLmNhdGNoKChlcnJvcikgPT4gaGFuZGxlQ2h1bmtFcnJvcihlcnJvcikpXG4pXG5cbmNvbnN0IFF1ZXVlc1Jvb3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXIsIG9yZ2FuaXphdGlvbnN9ID0gcHJvcHMgfHwge31cbiAgaWYgKCF1c2VyLmVtYWlsKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdXNwZW5zZSwgeyBmYWxsYmFjazogJyAnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzR9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgIHBhdGg6IFwiL3F1ZXVlcy86cXVldWVJZC9jb25uZWN0aW9uc1wiLFxuICAgICAgICAgIHJlbmRlcjogKHApID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdGlvbnNDb250YWluZXIsIHsgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5fX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2fX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiBcIi9xdWV1ZXMvOnF1ZXVlSWRcIixcbiAgICAgICAgICByZW5kZXI6IChwKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlQ29udGFpbmVyLCB7IG9yZ2FuaXphdGlvbnM6IG9yZ2FuaXphdGlvbnMsIC4uLnAsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NH19ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgcGF0aDogXCIvcXVldWVzLzpxdWV1ZUlkXCIsXG4gICAgICAgICAgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZUNvbnRhaW5lciwgeyBvcmdhbml6YXRpb25zOiBvcmdhbml6YXRpb25zLCAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDl9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwgeyBwYXRoOiBcIi9xdWV1ZXNcIiwgcmVuZGVyOiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZXNDb250YWluZXIsIHsgLi4ucCwgdXNlcjogdXNlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX0gKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX0gKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZXNSb290XG4iXSwic291cmNlUm9vdCI6IiJ9