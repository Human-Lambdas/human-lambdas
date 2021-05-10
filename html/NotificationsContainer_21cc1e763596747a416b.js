(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NotificationsContainer"],{

/***/ "./src/universal/components/Checkbox.tsx":
/*!***********************************************!*\
  !*** ./src/universal/components/Checkbox.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/Checkbox.tsx";



const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("label", {
  target: "esvdrc80"
})(() => (
/* {disabled} */
{
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  background: '#fff',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 400,
  fontSize: 12,
  paddingLeft: 35,
  position: 'relative',
  userSelect: 'none',
  transition: '.3s ease all',
  width: '100%',
  '&::before': {
    background: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
    borderRadius: 2,
    border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
    content: '""',
    height: '20px',
    width: '20px',
    left: 0,
    position: 'absolute',
    top: 'calc(50% - 10px)',
    transition: '.3s ease background-color'
  }
}));

const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "esvdrc81"
})("position:absolute;visibility:hidden;&:checked + ", Label, "{border-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";}&:checked + ", Label, ":before{background-color:", universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN, ";background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNiIgaGVpZ2h0PSIyMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIyLjAyOTY4IC00MC4wOTAzIDI2IDIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdGVkIGJ5IElKU1ZHIChodHRwczovL2dpdGh1Yi5jb20vaWNvbmphci9JSlNWRyktLT48cGF0aCBkPSJNMjcuOTc0MywtMzYuMTI3MmMwLDAuNDQ2NDI4IC0wLjE1NjI1LDAuODI1ODkzIC0wLjQ2ODc1LDEuMTM4MzlsLTEyLjEyMDUsMTIuMTIwNWwtMi4yNzY3OSwyLjI3Njc5Yy0wLjMxMjUsMC4zMTI1IC0wLjY5MTk2NCwwLjQ2ODc1IC0xLjEzODM5LDAuNDY4NzVjLTAuNDQ2NDI4LDAgLTAuODI1ODkzLC0wLjE1NjI1IC0xLjEzODM5LC0wLjQ2ODc1bC0yLjI3Njc5LC0yLjI3Njc5bC02LjA2MDI3LC02LjA2MDI3Yy0wLjMxMjUsLTAuMzEyNSAtMC40Njg3NSwtMC42OTE5NjUgLTAuNDY4NzUsLTEuMTM4MzljMCwtMC40NDY0MjkgMC4xNTYyNSwtMC44MjU4OTMgMC40Njg3NSwtMS4xMzgzOWwyLjI3Njc5LC0yLjI3Njc5YzAuMzEyNSwtMC4zMTI1IDAuNjkxOTY1LC0wLjQ2ODc1IDEuMTM4MzksLTAuNDY4NzVjMC40NDY0MjksMCAwLjgyNTg5MywwLjE1NjI1IDEuMTM4MzksMC40Njg3NWw0LjkyMTg4LDQuOTM4NjJsMTAuOTgyMSwtMTAuOTk4OWMwLjMxMjUsLTAuMzEyNSAwLjY5MTk2NCwtMC40Njg3NSAxLjEzODM5LC0wLjQ2ODc1YzAuNDQ2NDI4LDAgMC44MjU4OTMsMC4xNTYyNSAxLjEzODM5LDAuNDY4NzVsMi4yNzY3OCwyLjI3Njc5YzAuMzEyNSwwLjMxMjUgMC40Njg3NSwwLjY5MTk2NCAwLjQ2ODc1LDEuMTM4MzlaIiB0cmFuc2Zvcm09InNjYWxlKDEuMDAxOTgpIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-position:center;background-size:9px;}");

const Checkbox = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    autoFocus,
    disabled,
    id,
    checked,
    name,
    onChange,
    label,
    value
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoFocus: autoFocus,
    disabled: disabled,
    checked: checked,
    id: id,
    name: name,
    type: "checkbox",
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }
  /* disabled={disabled} */
  , label));
});
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/universal/modules/settings/components/PageWrapper.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/modules/settings/components/PageWrapper.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const PageWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yt5stn0"
})({
  name: "2oq6pe",
  styles: "display:flex;max-width:600px;width:100%;height:100%;flex-direction:column;background-color:#fff;"
});

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/universal/modules/settings/components/Title.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/modules/settings/components/Title.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const Title = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "el4y3bt0"
})({
  name: "9vcn3f",
  styles: "font-weight:600;font-size:24px;line-height:32px;padding:100px 0 30px 0;"
});

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/universal/modules/settings/containers/NotificationsContainer.tsx":
/*!******************************************************************************!*\
  !*** ./src/universal/modules/settings/containers/NotificationsContainer.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/Checkbox */ "./src/universal/components/Checkbox.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/universal/modules/settings/components/PageWrapper.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Title */ "./src/universal/modules/settings/components/Title.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/NotificationsContainer.tsx";










const Subtitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "es0bezq0"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  fontSize: 15,
  fontWeight: 400,
  marginBottom: 35
});

const NotificationRow = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "es0bezq1"
})({
  name: "qxzjor",
  styles: "margin-bottom:4px;display:flex;justify-content:space-between;height:46px;font-size:16px;"
});

const NotificationHeaderRow = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "es0bezq2"
})({
  name: "1lv1lmi",
  styles: "margin-bottom:24px;display:flex;justify-content:space-between;height:46px;font-size:16px;width:100%;"
});

const QueueName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "es0bezq3"
})(_objectSpread({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_4__["default"]));

const CheckboxContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "es0bezq4"
})({
  name: "fv3lde",
  styles: "align-items:center;display:flex;"
});

const NotificationsContainer = props => {
  const [notificationData, setNotificationData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function fetchNotificationData() {
      const payload = {
        method: 'GET'
      };
      const res = await networker.httpHandler(`/users/notifications`, payload);
      const {
        errors,
        data
      } = res || {};

      if (errors) {
        console.error('Error fetching notification data!', errors);
      } else {
        setNotificationData(data);
      }
    }

    fetchNotificationData();
  }, []);

  async function updateBE(notificationInfo) {
    const payload = {
      method: 'PATCH',
      data: notificationInfo
    };
    const res = await networker.httpHandler(`/users/notifications`, payload);

    if (res.errors) {
      res.errors.array.forEach(error => {
        props.addFailureNotification(error.message);
      });
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "Notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Email me every time a new task is created."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationHeaderRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "All queues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: () => {
      updateBE({
        enabled: !notificationData.enabled,
        queue_notifications: notificationData.queue_notifications
      });
      setNotificationData({
        enabled: !notificationData.enabled,
        queue_notifications: notificationData.queue_notifications
      });
    },
    id: "globalNotifications",
    name: "globalNotifications",
    label: "",
    checked: notificationData.enabled !== undefined && notificationData.enabled,
    value: 'globalNotifications',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }))), notificationData.queue_notifications && !notificationData.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, notificationData.queue_notifications.map(notification => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationRow, {
      key: notification.queue_id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueName, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      }
    }, notification.queue_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: () => {
        let newNotificationDataArray = [...notificationData.queue_notifications];
        newNotificationDataArray[newNotificationDataArray.findIndex(element => element.queue_id === notification.queue_id)].enabled = !notification.enabled;
        updateBE({
          enabled: notificationData.enabled,
          queue_notifications: newNotificationDataArray
        });
        setNotificationData({
          enabled: notificationData.enabled,
          queue_notifications: newNotificationDataArray
        });
      },
      id: notification.queue_id,
      name: notification.queue_name,
      label: "",
      checked: notification.enabled,
      value: notification.queue_name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    })));
  })));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_3__["addFailureNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(NotificationsContainer));

/***/ }),

/***/ "./src/universal/styles/helpers/textOverflow.ts":
/*!******************************************************!*\
  !*** ./src/universal/styles/helpers/textOverflow.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const textOverflow = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
/* harmony default export */ __webpack_exports__["default"] = (textOverflow);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbnRhaW5lcnMvTm90aWZpY2F0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiTGFiZWwiLCJjb2xvciIsIlBBTEVUVEUiLCJURVhUX0dSQVkiLCJiYWNrZ3JvdW5kIiwiY3Vyc29yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdMZWZ0IiwicG9zaXRpb24iLCJ1c2VyU2VsZWN0IiwidHJhbnNpdGlvbiIsIndpZHRoIiwiQkFDS0dST1VORF9NQUlOIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQk9SREVSX01BSU5fR1JBWSIsImNvbnRlbnQiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiSW5wdXQiLCJQUklNQVJZX01BSU4iLCJDaGVja2JveCIsIm1lbW8iLCJwcm9wcyIsImF1dG9Gb2N1cyIsImRpc2FibGVkIiwiaWQiLCJjaGVja2VkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ2YWx1ZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidHlwZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiaHRtbEZvciIsIlBhZ2VXcmFwcGVyIiwiVGl0bGUiLCJTdWJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsIk5vdGlmaWNhdGlvblJvdyIsIk5vdGlmaWNhdGlvbkhlYWRlclJvdyIsIlF1ZXVlTmFtZSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0T3ZlcmZsb3ciLCJDaGVja2JveENvbnRhaW5lciIsIk5vdGlmaWNhdGlvbnNDb250YWluZXIiLCJub3RpZmljYXRpb25EYXRhIiwic2V0Tm90aWZpY2F0aW9uRGF0YSIsInVzZVN0YXRlIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwidXNlRWZmZWN0IiwiZmV0Y2hOb3RpZmljYXRpb25EYXRhIiwicGF5bG9hZCIsIm1ldGhvZCIsInJlcyIsImh0dHBIYW5kbGVyIiwiZXJyb3JzIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInVwZGF0ZUJFIiwibm90aWZpY2F0aW9uSW5mbyIsImFycmF5IiwiZm9yRWFjaCIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwiZW5hYmxlZCIsInF1ZXVlX25vdGlmaWNhdGlvbnMiLCJ1bmRlZmluZWQiLCJtYXAiLCJub3RpZmljYXRpb24iLCJrZXkiLCJxdWV1ZV9pZCIsInF1ZXVlX25hbWUiLCJuZXdOb3RpZmljYXRpb25EYXRhQXJyYXkiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhcmciLCJjb25uZWN0Iiwib3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHlFQUFyQjtBQUErRjtBQUUvRjs7QUFhQSxNQUFNQyxLQUFLLEdBQUc7QUFBQTtBQUFBLEdBQWE7QUFBQztBQUFzQjtBQUNoREMsT0FBSyxFQUFFQyxnRUFBTyxDQUFDQyxTQURpQztBQUVoREMsWUFBVSxFQUFFLE1BRm9DO0FBR2hEQyxRQUFNLEVBQUUsU0FId0M7QUFJaERDLFNBQU8sRUFBRSxNQUp1QztBQUtoREMsZ0JBQWMsRUFBRSxlQUxnQztBQU1oREMsWUFB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LFVBRks7QUFHbkJ3QyxZQUFVLEVBQUU7QUFITyxDQUFyQjtBQU1leEMsMkVBQWYsRSIsImZpbGUiOiJOb3RpZmljYXRpb25zQ29udGFpbmVyXzIxY2MxZTc2MzU5Njc0N2E0MTZiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0NoZWNrYm94LnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW99IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsKCgvKiB7ZGlzYWJsZWR9ICovKSA9PiAoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgZm9udFNpemU6IDEyLFxuICBwYWRkaW5nTGVmdDogMzUsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIHRyYW5zaXRpb246ICcuM3MgZWFzZSBhbGwnLFxuICB3aWR0aDogJzEwMCUnLFxuICAnJjo6YmVmb3JlJzoge1xuICAgIGJhY2tncm91bmQ6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9NQUlOX0dSQVl9YCxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBsZWZ0OiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJ2NhbGMoNTAlIC0gMTBweCknLFxuICAgIHRyYW5zaXRpb246ICcuM3MgZWFzZSBiYWNrZ3JvdW5kLWNvbG9yJ1xuICB9XG59KSlcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAmOmNoZWNrZWQgKyAke0xhYmVsfSB7XG4gICAgLyogYmFja2dyb3VuZDogJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9MSUdIVEVTVH07ICovXG4gICAgYm9yZGVyLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgfVxuICAmOmNoZWNrZWQgKyAke0xhYmVsfTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7UEFMRVRURS5QUklNQVJZX01BSU59O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4YzNabklIZHBaSFJvUFNJeU5pSWdhR1ZwWjJoMFBTSXlNQ0lnZG1WeWMybHZiajBpTVM0eElpQjJhV1YzUW05NFBTSXlMakF5T1RZNElDMDBNQzR3T1RBeklESTJJREl3SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajQ4SVMwdFIyVnVaWEpoZEdWa0lHSjVJRWxLVTFaSElDaG9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhV052Ym1waGNpOUpTbE5XUnlrdExUNDhjR0YwYUNCa1BTSk5NamN1T1RjME15d3RNell1TVRJM01tTXdMREF1TkRRMk5ESTRJQzB3TGpFMU5qSTFMREF1T0RJMU9Ea3pJQzB3TGpRMk9EYzFMREV1TVRNNE16bHNMVEV5TGpFeU1EVXNNVEl1TVRJd05Xd3RNaTR5TnpZM09Td3lMakkzTmpjNVl5MHdMak14TWpVc01DNHpNVEkxSUMwd0xqWTVNVGsyTkN3d0xqUTJPRGMxSUMweExqRXpPRE01TERBdU5EWTROelZqTFRBdU5EUTJOREk0TERBZ0xUQXVPREkxT0RrekxDMHdMakUxTmpJMUlDMHhMakV6T0RNNUxDMHdMalEyT0RjMWJDMHlMakkzTmpjNUxDMHlMakkzTmpjNWJDMDJMakEyTURJM0xDMDJMakEyTURJM1l5MHdMak14TWpVc0xUQXVNekV5TlNBdE1DNDBOamczTlN3dE1DNDJPVEU1TmpVZ0xUQXVORFk0TnpVc0xURXVNVE00TXpsak1Dd3RNQzQwTkRZME1qa2dNQzR4TlRZeU5Td3RNQzQ0TWpVNE9UTWdNQzQwTmpnM05Td3RNUzR4TXpnek9Xd3lMakkzTmpjNUxDMHlMakkzTmpjNVl6QXVNekV5TlN3dE1DNHpNVEkxSURBdU5qa3hPVFkxTEMwd0xqUTJPRGMxSURFdU1UTTRNemtzTFRBdU5EWTROelZqTUM0ME5EWTBNamtzTUNBd0xqZ3lOVGc1TXl3d0xqRTFOakkxSURFdU1UTTRNemtzTUM0ME5qZzNOV3cwTGpreU1UZzRMRFF1T1RNNE5qSnNNVEF1T1RneU1Td3RNVEF1T1RrNE9XTXdMak14TWpVc0xUQXVNekV5TlNBd0xqWTVNVGsyTkN3dE1DNDBOamczTlNBeExqRXpPRE01TEMwd0xqUTJPRGMxWXpBdU5EUTJOREk0TERBZ01DNDRNalU0T1RNc01DNHhOVFl5TlNBeExqRXpPRE01TERBdU5EWTROelZzTWk0eU56WTNPQ3d5TGpJM05qYzVZekF1TXpFeU5Td3dMak14TWpVZ01DNDBOamczTlN3d0xqWTVNVGsyTkNBd0xqUTJPRGMxTERFdU1UTTRNemxhSWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RFdU1EQXhPVGdwSWlCbWFXeHNQU0lqWm1abUlqNDhMM0JoZEdnK1BDOXpkbWMrJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5cHg7XG4gIH1cbmBcblxuY29uc3QgQ2hlY2tib3ggPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YXV0b0ZvY3VzLCBkaXNhYmxlZCwgaWQsIGNoZWNrZWQsIG5hbWUsIG9uQ2hhbmdlLCBsYWJlbCwgdmFsdWV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzR9fSAvKiBkaXNhYmxlZD17ZGlzYWJsZWR9ICovLCBsYWJlbClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBtYXhXaWR0aDogNjAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgZm9udFNpemU6ICcyNHB4JyxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBwYWRkaW5nOiAnMTAwcHggMCAzMHB4IDAnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbnRhaW5lcnMvTm90aWZpY2F0aW9uc0NvbnRhaW5lci50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge2FkZEZhaWx1cmVOb3RpZmljYXRpb259IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0NoZWNrYm94J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN1YnRpdGxlID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIG1hcmdpbkJvdHRvbTogMzVcbn0pXG5cbmNvbnN0IE5vdGlmaWNhdGlvblJvdyA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDQsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA0NixcbiAgZm9udFNpemU6IDE2XG59KVxuXG5jb25zdCBOb3RpZmljYXRpb25IZWFkZXJSb3cgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiAyNCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBoZWlnaHQ6IDQ2LFxuICBmb250U2l6ZTogMTYsXG4gIHdpZHRoOiAnMTAwJSdcbn0pXG5cbmNvbnN0IFF1ZXVlTmFtZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gIC4uLnRleHRPdmVyZmxvd1xufSlcblxuY29uc3QgQ2hlY2tib3hDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4J1xufSlcblxuY29uc3QgTm90aWZpY2F0aW9uc0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbm90aWZpY2F0aW9uRGF0YSwgc2V0Tm90aWZpY2F0aW9uRGF0YV0gPSB1c2VTdGF0ZSh7fSApXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE5vdGlmaWNhdGlvbkRhdGEoKSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy9ub3RpZmljYXRpb25zYCwgcGF5bG9hZClcbiAgICAgIGNvbnN0IHtlcnJvcnMsIGRhdGF9ID0gcmVzIHx8IHt9XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5vdGlmaWNhdGlvbiBkYXRhIScsIGVycm9ycylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldE5vdGlmaWNhdGlvbkRhdGEoZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaE5vdGlmaWNhdGlvbkRhdGEoKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVCRShub3RpZmljYXRpb25JbmZvKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGRhdGE6IG5vdGlmaWNhdGlvbkluZm9cbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvbm90aWZpY2F0aW9uc2AsIHBheWxvYWQpXG4gICAgaWYgKHJlcy5lcnJvcnMpIHtcbiAgICAgIHJlcy5lcnJvcnMuYXJyYXkuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZVdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTh9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk5fX0sIFwiTm90aWZpY2F0aW9uc1wiKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YnRpdGxlLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMH19LCBcIkVtYWlsIG1lIGV2ZXJ5IHRpbWUgYSBuZXcgdGFzayBpcyBjcmVhdGVkLlwiICAgICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpY2F0aW9uSGVhZGVyUm93LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZU5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAyfX0sIFwiQWxsIHF1ZXVlc1wiIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwM319XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7XG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVCRSh7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogIW5vdGlmaWNhdGlvbkRhdGEuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICBxdWV1ZV9ub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25EYXRhLnF1ZXVlX25vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAhbm90aWZpY2F0aW9uRGF0YS5lbmFibGVkLFxuICAgICAgICAgICAgICAgIHF1ZXVlX25vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbkRhdGEucXVldWVfbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlkOiBcImdsb2JhbE5vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICAgIG5hbWU6IFwiZ2xvYmFsTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICBjaGVja2VkOiBub3RpZmljYXRpb25EYXRhLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBub3RpZmljYXRpb25EYXRhLmVuYWJsZWQsXG4gICAgICAgICAgICB2YWx1ZTogJ2dsb2JhbE5vdGlmaWNhdGlvbnMnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA0fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgbm90aWZpY2F0aW9uRGF0YS5xdWV1ZV9ub3RpZmljYXRpb25zICYmICFub3RpZmljYXRpb25EYXRhLmVuYWJsZWQgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyNX19XG4gICAgICAgICAgLCBub3RpZmljYXRpb25EYXRhLnF1ZXVlX25vdGlmaWNhdGlvbnMubWFwKChub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90aWZpY2F0aW9uUm93LCB7IGtleTogbm90aWZpY2F0aW9uLnF1ZXVlX2lkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI4fX1cbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVOYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyOX19LCBub3RpZmljYXRpb24ucXVldWVfbmFtZSlcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3hDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMwfX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdOb3RpZmljYXRpb25EYXRhQXJyYXkgPSBbLi4ubm90aWZpY2F0aW9uRGF0YS5xdWV1ZV9ub3RpZmljYXRpb25zXVxuXG4gICAgICAgICAgICAgICAgICAgICAgbmV3Tm90aWZpY2F0aW9uRGF0YUFycmF5W1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Tm90aWZpY2F0aW9uRGF0YUFycmF5LmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQucXVldWVfaWQgPT09IG5vdGlmaWNhdGlvbi5xdWV1ZV9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0uZW5hYmxlZCA9ICFub3RpZmljYXRpb24uZW5hYmxlZFxuXG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQkUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogbm90aWZpY2F0aW9uRGF0YS5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVfbm90aWZpY2F0aW9uczogbmV3Tm90aWZpY2F0aW9uRGF0YUFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogbm90aWZpY2F0aW9uRGF0YS5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVfbm90aWZpY2F0aW9uczogbmV3Tm90aWZpY2F0aW9uRGF0YUFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5vdGlmaWNhdGlvbi5xdWV1ZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbm90aWZpY2F0aW9uLnF1ZXVlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBub3RpZmljYXRpb24uZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vdGlmaWNhdGlvbi5xdWV1ZV9uYW1lLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMxfX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEZhaWx1cmVOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oYXJnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTm90aWZpY2F0aW9uc0NvbnRhaW5lcilcbiIsImNvbnN0IHRleHRPdmVyZmxvdyA9IHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRleHRPdmVyZmxvd1xuIl0sInNvdXJjZVJvb3QiOiIifQ==