(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WorkersContainer"],{

/***/ "./src/client/modules/metrics/containers/Workers/WorkersContainer.tsx":
/*!****************************************************************************!*\
  !*** ./src/client/modules/metrics/containers/Workers/WorkersContainer.tsx ***!
  \****************************************************************************/
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
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/metrics/containers/Workers/WorkersContainer.tsx";







const WorkersContainer = props => {
  const {
    setActiveUsers,
    users,
    userIds,
    user
  } = props;
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [range, setRange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('weekly');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const orgId = user.current_organization_id;
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchWorkers() {
      setLoading(true);
      const type = [utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].COMPLETED, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].AHT, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].ACCURACY];
      const {
        data
      } = await networker.httpHandler(`/orgs/${orgId}/metrics/workers`, {
        method: 'GET',
        params: {
          range,
          type,
          worker_id: userIds
        },
        paramsSerializer: params => qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params, {
          arrayFormat: 'repeat'
        }),
        data: {
          range,
          type,
          worker_id: userIds
        }
      });
      setChartData(data);
      setLoading(false);
    }

    fetchWorkers();
  }, [range, userIds]);
  let renderComp;
  const {
    completed,
    aht,
    accuracy
  } = chartData || {};
  const charts = [{
    data: completed,
    title: 'Completed Tasks Over Time',
    lines: users
  }, {
    data: aht,
    title: 'Average Handling Time (AHT)',
    inSeconds: true,
    lines: users
  }, {
    data: accuracy,
    title: 'Accuracy',
    inPercent: true,
    lines: users
  }];

  if (completed && aht && accuracy) {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Charts_Charts__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loading: loading,
      filterMenu: true,
      charts: charts,
      range: range,
      setRange: setRange,
      setActive: setActiveUsers,
      lines: users,
      title: 'Worker Performance',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    });
  } else {
    renderComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LoadingPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    });
  }

  return renderComp;
};

/* harmony default export */ __webpack_exports__["default"] = (WorkersContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9jb250YWluZXJzL1dvcmtlcnMvV29ya2Vyc0NvbnRhaW5lci50c3giXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiV29ya2Vyc0NvbnRhaW5lciIsInByb3BzIiwic2V0QWN0aXZlVXNlcnMiLCJ1c2VycyIsInVzZXJJZHMiLCJ1c2VyIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwidXNlU3RhdGUiLCJyYW5nZSIsInNldFJhbmdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcmdJZCIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwidXNlRWZmZWN0IiwiZmV0Y2hXb3JrZXJzIiwidHlwZSIsIkNoYXJ0IiwiQ09NUExFVEVEIiwiQUhUIiwiQUNDVVJBQ1kiLCJkYXRhIiwiaHR0cEhhbmRsZXIiLCJtZXRob2QiLCJwYXJhbXMiLCJ3b3JrZXJfaWQiLCJwYXJhbXNTZXJpYWxpemVyIiwicXMiLCJzdHJpbmdpZnkiLCJhcnJheUZvcm1hdCIsInJlbmRlckNvbXAiLCJjb21wbGV0ZWQiLCJhaHQiLCJhY2N1cmFjeSIsImNoYXJ0cyIsInRpdGxlIiwibGluZXMiLCJpblNlY29uZHMiLCJpblBlcmNlbnQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJDaGFydHMiLCJmaWx0ZXJNZW51Iiwic2V0QWN0aXZlIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJMb2FkaW5nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLFlBQVksR0FBRyxzR0FBckI7QUFBNEg7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDLFFBQU07QUFBQ0Ms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Z0JBQUdTLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JRLDhEQUFwQixFQUFpQztBQUFDSixZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRWxELFlBQVg7QUFBeUJtRCxrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQWpDLENBQWI7QUFDRDs7QUFFRCxTQUFPakIsVUFBUDtBQUNELENBMUREOztBQTREZWpDLCtFQUFmLEUiLCJmaWxlIjoiV29ya2Vyc0NvbnRhaW5lcl82ZGE1OGQ5YmU2MzYxYjk0YzNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy9tZXRyaWNzL2NvbnRhaW5lcnMvV29ya2Vycy9Xb3JrZXJzQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IENoYXJ0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXJ0cy9DaGFydHMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7Q2hhcnR9IGZyb20gJ3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tICdjb21wb25lbnRzL0xvYWRpbmdQYWdlJ1xuXG5jb25zdCBXb3JrZXJzQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtzZXRBY3RpdmVVc2VycywgdXNlcnMsIHVzZXJJZHMsIHVzZXJ9ID0gcHJvcHNcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbcmFuZ2UsIHNldFJhbmdlXSA9IHVzZVN0YXRlKCd3ZWVrbHknKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgb3JnSWQgPSB1c2VyLmN1cnJlbnRfb3JnYW5pemF0aW9uX2lkXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFdvcmtlcnMoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IHR5cGUgPSBbQ2hhcnQuQ09NUExFVEVELCBDaGFydC5BSFQsIENoYXJ0LkFDQ1VSQUNZXVxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9tZXRyaWNzL3dvcmtlcnNgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHJhbmdlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgd29ya2VyX2lkOiB1c2VySWRzXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtc1NlcmlhbGl6ZXI6IChwYXJhbXMpID0+IHFzLnN0cmluZ2lmeShwYXJhbXMsIHthcnJheUZvcm1hdDogJ3JlcGVhdCd9KSxcbiAgICAgICAgZGF0YToge3JhbmdlLCB0eXBlLCB3b3JrZXJfaWQ6IHVzZXJJZHN9XG4gICAgICB9KVxuXG4gICAgICBzZXRDaGFydERhdGEoZGF0YSlcblxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG5cbiAgICBmZXRjaFdvcmtlcnMoKVxuICB9LCBbcmFuZ2UsIHVzZXJJZHNdKVxuXG4gIGxldCByZW5kZXJDb21wXG4gIGNvbnN0IHtjb21wbGV0ZWQsIGFodCwgYWNjdXJhY3l9ID0gY2hhcnREYXRhIHx8IHt9XG4gIGNvbnN0IGNoYXJ0cyA9IFtcbiAgICB7ZGF0YTogY29tcGxldGVkLCB0aXRsZTogJ0NvbXBsZXRlZCBUYXNrcyBPdmVyIFRpbWUnLCBsaW5lczogdXNlcnN9LFxuICAgIHtkYXRhOiBhaHQsIHRpdGxlOiAnQXZlcmFnZSBIYW5kbGluZyBUaW1lIChBSFQpJywgaW5TZWNvbmRzOiB0cnVlLCBsaW5lczogdXNlcnN9LFxuICAgIHtkYXRhOiBhY2N1cmFjeSwgdGl0bGU6ICdBY2N1cmFjeScsIGluUGVyY2VudDogdHJ1ZSwgbGluZXM6IHVzZXJzfVxuICBdXG5cbiAgaWYgKGNvbXBsZXRlZCAmJiBhaHQgJiYgYWNjdXJhY3kpIHtcbiAgICByZW5kZXJDb21wID0gKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFydHMsIHtcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgZmlsdGVyTWVudTogdHJ1ZSxcbiAgICAgICAgY2hhcnRzOiBjaGFydHMsXG4gICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgc2V0UmFuZ2U6IHNldFJhbmdlLFxuICAgICAgICBzZXRBY3RpdmU6IHNldEFjdGl2ZVVzZXJzLFxuICAgICAgICBsaW5lczogdXNlcnMsXG4gICAgICAgIHRpdGxlOiAnV29ya2VyIFBlcmZvcm1hbmNlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX1cbiAgICAgIClcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyQ29tcCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ1BhZ2UsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjJ9fSApXG4gIH1cblxuICByZXR1cm4gcmVuZGVyQ29tcFxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZXJzQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9