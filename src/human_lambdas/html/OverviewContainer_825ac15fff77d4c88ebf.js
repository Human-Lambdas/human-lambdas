(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["OverviewContainer"],{

/***/ "./src/client/modules/metrics/containers/Overview/OverviewContainer.tsx":
/*!******************************************************************************!*\
  !*** ./src/client/modules/metrics/containers/Overview/OverviewContainer.tsx ***!
  \******************************************************************************/
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
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/modules/metrics/containers/Overview/OverviewContainer.tsx";







const OverviewContainer = ({
  user
}) => {
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [range, setRange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('weekly');
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const orgId = user.current_organization_id;
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchOverview() {
      setLoading(true);
      const payload = {
        range: range,
        type: [utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].COMPLETED, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].PENDING, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].AHT, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].TAT, utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].ACCURACY]
      };
      const {
        data,
        erorrs
      } = await networker.httpHandler(`/orgs/${orgId}/metrics`, {
        method: 'GET',
        params: payload,
        paramsSerializer: params => qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params, {
          arrayFormat: 'repeat'
        }),
        data: payload
      });

      if (!erorrs) {
        setChartData(data);
      } else {
        console.error('Error fetching overview data', JSON.stringify(erorrs));
      }

      setLoading(false);
    }

    fetchOverview();
  }, [range]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Charts_Charts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Performance Overview",
    range: range,
    setRange: setRange,
    loading: loading,
    charts: [{
      data: chartData,
      title: 'Completed and Pending Tasks Over Time',
      lines: [{
        dataKey: utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].PENDING,
        fill: '#fff',
        stroke: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].ERROR_MAIN
      }, {
        dataKey: utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].COMPLETED,
        fill: '#fff',
        stroke: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_GREEN_DARK
      }]
    }, {
      data: chartData,
      title: 'Average Handling Time (AHT)',
      inSeconds: true,
      lines: [{
        dataKey: utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].AHT,
        fill: '#fff',
        stroke: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].LINK
      }]
    }, {
      data: chartData,
      title: 'Turn Around Time (TAT)',
      inSeconds: true,
      lines: [{
        dataKey: utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].TAT,
        fill: '#fff',
        stroke: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN
      }]
    }, {
      data: chartData,
      title: 'Accuracy',
      inPercent: true,
      lines: [{
        dataKey: utils_constants__WEBPACK_IMPORTED_MODULE_4__["Chart"].ACCURACY,
        fill: '#fff',
        stroke: styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN
      }]
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OverviewContainer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWV0cmljcy9jb250YWluZXJzL092ZXJ2aWV3L092ZXJ2aWV3Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJfanN4RmlsZU5hbWUiLCJPdmVydmlld0NvbnRhaW5lciIsInVzZXIiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJ1c2VTdGF0ZSIsInJhbmdlIiwic2V0UmFuZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9yZ0lkIiwiY3VycmVudF9vcmdhbml6YXRpb25faWQiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJ1c2VFZmZlY3QiLCJmZXRjaE92ZXJ2aWV3IiwicGF5bG9hZCIsInR5cGUiLCJDaGFydCIsIkNPTVBMRVRFRCIsIlBFTkRJTkciLCJBSFQiLCJUQVQiLCJBQ0NVUkFDWSIsImRhdGEiLCJlcm9ycnMiLCJodHRwSGFuZGxlciIsIm1ldGhvZCIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJxcyIsInN0cmluZ2lmeSIsImFycmF5Rm9ybWF0IiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkNoYXJ0cyIsInRpdGxlIiwiY2hhcnRzIiwibGluZXMiLCJkYXRhS2V5IiwiZmlsbCIsInN0cm9rZSIsIlBBTEVUVEUiLCJFUlJPUl9NQUlOIiwiUFJJTUFSWV9HUkVFTl9EQVJLIiwiaW5TZWNvbmRzIiwiTElOSyIsIlRFWFRfTUFJTiIsImluUGVyY2VudCIsIlBSSU1BUllfTUFJTiIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsWUFBWSxHQUFHLHdHQUFyQjtBQUE4SDtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLE1BQU1DLGlCQUFpQixH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RVAsV0FBSyxFQUFFLENBQUM7QUFBQ0MsZUFBTyxFQUFFeEIscURBQUssQ0FBQ0ksR0FBaEI7QUFBcUJxQixZQUFJLEVBQUUsTUFBM0I7QUFBbUNDLGNBQU0sRUFBRUMsc0RBQU8sQ0FBQ0s7QUFBbkQsT0FBRDtBQUpULEtBZk0sRUFxQk47QUFDRTFCLFVBQUksRUFBRXJCLFNBRFI7QUFFRW9DLFdBQUssRUFBRSxVQUZUO0FBR0VZLGVBQVMsRUFBRSxJQUhiO0FBSUVWLFdBQUssRUFBRSxDQUFDO0FBQUNDLGVBQU8sRUFBRXhCLHFEQUFLLENBQUNLLFFBQWhCO0FBQTBCb0IsWUFBSSxFQUFFLE1BQWhDO0FBQXdDQyxjQUFNLEVBQUVDLHNEQUFPLENBQUNPO0FBQXhELE9BQUQ7QUFKVCxLQXJCTSxDQUxrQjtBQWdDdkJDLFVBQU0sRUFBRSxTQWhDZTtBQWdDVEMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXZELFlBQVg7QUFBeUJ3RCxnQkFBVSxFQUFFO0FBQXJDO0FBaENELEdBQTVCLENBREY7QUFvQ0QsQ0FuRUQ7O0FBcUVldkQsZ0ZBQWYsRSIsImZpbGUiOiJPdmVydmlld0NvbnRhaW5lcl84MjVhYzE1ZmZmNzdkNGM4OGViZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvbW9kdWxlcy9tZXRyaWNzL2NvbnRhaW5lcnMvT3ZlcnZpZXcvT3ZlcnZpZXdDb250YWluZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcXMgZnJvbSAncXMnXG5pbXBvcnQgQ2hhcnRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2hhcnRzL0NoYXJ0cydcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtDaGFydH0gZnJvbSAndXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cbmNvbnN0IE92ZXJ2aWV3Q29udGFpbmVyID0gKHt1c2VyfSkgPT4ge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtyYW5nZSwgc2V0UmFuZ2VdID0gdXNlU3RhdGUoJ3dlZWtseScpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBvcmdJZCA9IHVzZXIuY3VycmVudF9vcmdhbml6YXRpb25faWRcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3ZlcnZpZXcoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgIHR5cGU6IFtDaGFydC5DT01QTEVURUQsIENoYXJ0LlBFTkRJTkcsIENoYXJ0LkFIVCwgQ2hhcnQuVEFULCBDaGFydC5BQ0NVUkFDWV1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHtkYXRhLCBlcm9ycnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvb3Jncy8ke29yZ0lkfS9tZXRyaWNzYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBwYXJhbXM6IHBheWxvYWQsXG4gICAgICAgIHBhcmFtc1NlcmlhbGl6ZXI6IChwYXJhbXMpID0+IHFzLnN0cmluZ2lmeShwYXJhbXMsIHthcnJheUZvcm1hdDogJ3JlcGVhdCd9KSxcbiAgICAgICAgZGF0YTogcGF5bG9hZFxuICAgICAgfSlcbiAgICAgIGlmICghZXJvcnJzKSB7XG4gICAgICAgIHNldENoYXJ0RGF0YShkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3ZlcnZpZXcgZGF0YScsIEpTT04uc3RyaW5naWZ5KGVyb3JycykpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cblxuICAgIGZldGNoT3ZlcnZpZXcoKVxuICB9LCBbcmFuZ2VdKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGFydHMsIHtcbiAgICAgIHRpdGxlOiBcIlBlcmZvcm1hbmNlIE92ZXJ2aWV3XCIgLFxuICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgc2V0UmFuZ2U6IHNldFJhbmdlLFxuICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgIGNoYXJ0czogW1xuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhLFxuICAgICAgICAgIHRpdGxlOiAnQ29tcGxldGVkIGFuZCBQZW5kaW5nIFRhc2tzIE92ZXIgVGltZScsXG4gICAgICAgICAgbGluZXM6IFtcbiAgICAgICAgICAgIHtkYXRhS2V5OiBDaGFydC5QRU5ESU5HLCBmaWxsOiAnI2ZmZicsIHN0cm9rZTogUEFMRVRURS5FUlJPUl9NQUlOfSxcbiAgICAgICAgICAgIHtkYXRhS2V5OiBDaGFydC5DT01QTEVURUQsIGZpbGw6ICcjZmZmJywgc3Ryb2tlOiBQQUxFVFRFLlBSSU1BUllfR1JFRU5fREFSS31cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgdGl0bGU6ICdBdmVyYWdlIEhhbmRsaW5nIFRpbWUgKEFIVCknLFxuICAgICAgICAgIGluU2Vjb25kczogdHJ1ZSxcbiAgICAgICAgICBsaW5lczogW3tkYXRhS2V5OiBDaGFydC5BSFQsIGZpbGw6ICcjZmZmJywgc3Ryb2tlOiBQQUxFVFRFLkxJTkt9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogY2hhcnREYXRhLFxuICAgICAgICAgIHRpdGxlOiAnVHVybiBBcm91bmQgVGltZSAoVEFUKScsXG4gICAgICAgICAgaW5TZWNvbmRzOiB0cnVlLFxuICAgICAgICAgIGxpbmVzOiBbe2RhdGFLZXk6IENoYXJ0LlRBVCwgZmlsbDogJyNmZmYnLCBzdHJva2U6IFBBTEVUVEUuVEVYVF9NQUlOfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YSxcbiAgICAgICAgICB0aXRsZTogJ0FjY3VyYWN5JyxcbiAgICAgICAgICBpblBlcmNlbnQ6IHRydWUsXG4gICAgICAgICAgbGluZXM6IFt7ZGF0YUtleTogQ2hhcnQuQUNDVVJBQ1ksIGZpbGw6ICcjZmZmJywgc3Ryb2tlOiBQQUxFVFRFLlBSSU1BUllfTUFJTn1dXG4gICAgICAgIH1cbiAgICAgIF0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NX19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3Q29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9