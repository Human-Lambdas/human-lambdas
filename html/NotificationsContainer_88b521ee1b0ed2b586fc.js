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
        console.error('Error fetching notification data!', JSON.stringify(errors));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbnRhaW5lcnMvTm90aWZpY2F0aW9uc0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiTGFiZWwiLCJjb2xvciIsIlBBTEVUVEUiLCJURVhUX0dSQVkiLCJiYWNrZ3JvdW5kIiwiY3Vyc29yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmdMZWZ0IiwicG9zaXRpb24iLCJ1c2VyU2VsZWN0IiwidHJhbnNpdGlvbiIsIndpZHRoIiwiQkFDS0dST1VORF9NQUlOIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQk9SREVSX01BSU5fR1JBWSIsImNvbnRlbnQiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiSW5wdXQiLCJQUklNQVJZX01BSU4iLCJDaGVja2JveCIsIm1lbW8iLCJwcm9wcyIsImF1dG9Gb2N1cyIsImRpc2FibGVkIiwiaWQiLCJjaGVja2VkIiwibmFtZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ2YWx1ZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidHlwZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiaHRtbEZvciIsIlBhZ2VXcmFwcGVyIiwiVGl0bGUiLCJTdWJ0aXRsZSIsIm1hcmdpbkJvdHRvbSIsIk5vdGlmaWNhdGlvblJvdyIsIk5vdGlmaWNhdGlvbkhlYWRlclJvdyIsIlF1ZXVlTmFtZSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0T3ZlcmZsb3ciLCJDaGVja2JveENvbnRhaW5lciIsIk5vdGlmaWNhdGlvbnNDb250YWluZXIiLCJub3RpZmljYXRpb25EYXRhIiwic2V0Tm90aWZpY2F0aW9uRGF0YSIsInVzZVN0YXRlIiwibmV0d29ya2VyIiwidXNlTmV0d29ya2VyIiwidXNlRWZmZWN0IiwiZmV0Y2hOb3RpZmljYXRpb25EYXRhIiwicGF5bG9hZCIsIm1ldGhvZCIsInJlcyIsImh0dHBIYW5kbGVyIiwiZXJyb3JzIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVCRSIsIm5vdGlmaWNhdGlvbkluZm8iLCJhcnJheSIsImZvckVhY2giLCJhZGRGYWlsdXJlTm90aWZpY2F0aW9uIiwibWVzc2FnZSIsImVuYWJsZWQiLCJxdWV1ZV9ub3RpZmljYXRpb25zIiwidW5kZWZpbmVkIiwibWFwIiwibm90aWZpY2F0aW9uIiwia2V5IiwicXVldWVfaWQiLCJxdWV1ZV9uYW1lIiwibmV3Tm90aWZpY2F0aW9uRGF0YUFycmF5IiwiZmluZEluZGV4IiwiZWxlbWVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCIsIm92ZXJmbG93Iiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyx5RUFBckI7QUFBK0Y7QUFFL0Y7O0FBYUEsTUFBTUMsS0FBSyxHQUFHO0FBQUE7QUFBQSxHQUFhO0FBQUM7QUFBc0I7QUFDaERDLE9BQUssRUFBRUMsZ0VBQU8sQ0FBQ0MsU0FEaUM7QUFFaERDLFlBQVUsRUFBRSxNQUZvQztBQUdoREMsUUFBTSxFQUFFLFNBSHdDO0FBSWhEQyxTQUFPLEVBQUUsTUFKdUM7QUFLaERDLGdCQUFjLEVB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LEdBQUc7QUFDbkJ5QyxVQUFRLEVBQUUsUUFEUztBQUVuQnpDLGNBQVksRUFBRSxVQUZLO0FBR25CMEMsWUFBVSxFQUFFO0FBSE8sQ0FBckI7QUFNZTFDLDJFQUFmLEUiLCJmaWxlIjoiTm90aWZpY2F0aW9uc0NvbnRhaW5lcl84OGI1MjFlZTFiMGVkMmI1ODZmYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveC50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbCgoLyoge2Rpc2FibGVkfSAqLykgPT4gKHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGZvbnRTaXplOiAxMixcbiAgcGFkZGluZ0xlZnQ6IDM1LFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYWxsJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiBQQUxFVFRFLkJBQ0tHUk9VTkRfTUFJTixcbiAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gICAgY29udGVudDogJ1wiXCInLFxuICAgIGhlaWdodDogJzIwcHgnLFxuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgbGVmdDogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICdjYWxjKDUwJSAtIDEwcHgpJyxcbiAgICB0cmFuc2l0aW9uOiAnLjNzIGVhc2UgYmFja2dyb3VuZC1jb2xvcidcbiAgfVxufSkpXG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJjpjaGVja2VkICsgJHtMYWJlbH0ge1xuICAgIC8qIGJhY2tncm91bmQ6ICR7UEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFU1R9OyAqL1xuICAgIGJvcmRlci1jb2xvcjogJHtQQUxFVFRFLlBSSU1BUllfTUFJTn07XG4gIH1cbiAgJjpjaGVja2VkICsgJHtMYWJlbH06YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OGMzWm5JSGRwWkhSb1BTSXlOaUlnYUdWcFoyaDBQU0l5TUNJZ2RtVnljMmx2YmowaU1TNHhJaUIyYVdWM1FtOTRQU0l5TGpBeU9UWTRJQzAwTUM0d09UQXpJREkySURJd0lpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OElTMHRSMlZ1WlhKaGRHVmtJR0o1SUVsS1UxWkhJQ2hvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YVdOdmJtcGhjaTlKU2xOV1J5a3RMVDQ4Y0dGMGFDQmtQU0pOTWpjdU9UYzBNeXd0TXpZdU1USTNNbU13TERBdU5EUTJOREk0SUMwd0xqRTFOakkxTERBdU9ESTFPRGt6SUMwd0xqUTJPRGMxTERFdU1UTTRNemxzTFRFeUxqRXlNRFVzTVRJdU1USXdOV3d0TWk0eU56WTNPU3d5TGpJM05qYzVZeTB3TGpNeE1qVXNNQzR6TVRJMUlDMHdMalk1TVRrMk5Dd3dMalEyT0RjMUlDMHhMakV6T0RNNUxEQXVORFk0TnpWakxUQXVORFEyTkRJNExEQWdMVEF1T0RJMU9Ea3pMQzB3TGpFMU5qSTFJQzB4TGpFek9ETTVMQzB3TGpRMk9EYzFiQzB5TGpJM05qYzVMQzB5TGpJM05qYzViQzAyTGpBMk1ESTNMQzAyTGpBMk1ESTNZeTB3TGpNeE1qVXNMVEF1TXpFeU5TQXRNQzQwTmpnM05Td3RNQzQyT1RFNU5qVWdMVEF1TkRZNE56VXNMVEV1TVRNNE16bGpNQ3d0TUM0ME5EWTBNamtnTUM0eE5UWXlOU3d0TUM0NE1qVTRPVE1nTUM0ME5qZzNOU3d0TVM0eE16Z3pPV3d5TGpJM05qYzVMQzB5TGpJM05qYzVZekF1TXpFeU5Td3RNQzR6TVRJMUlEQXVOamt4T1RZMUxDMHdMalEyT0RjMUlERXVNVE00TXprc0xUQXVORFk0TnpWak1DNDBORFkwTWprc01DQXdMamd5TlRnNU15d3dMakUxTmpJMUlERXVNVE00TXprc01DNDBOamczTld3MExqa3lNVGc0TERRdU9UTTROakpzTVRBdU9UZ3lNU3d0TVRBdU9UazRPV013TGpNeE1qVXNMVEF1TXpFeU5TQXdMalk1TVRrMk5Dd3RNQzQwTmpnM05TQXhMakV6T0RNNUxDMHdMalEyT0RjMVl6QXVORFEyTkRJNExEQWdNQzQ0TWpVNE9UTXNNQzR4TlRZeU5TQXhMakV6T0RNNUxEQXVORFk0TnpWc01pNHlOelkzT0N3eUxqSTNOamM1WXpBdU16RXlOU3d3TGpNeE1qVWdNQzQwTmpnM05Td3dMalk1TVRrMk5DQXdMalEyT0RjMUxERXVNVE00TXpsYUlpQjBjbUZ1YzJadmNtMDlJbk5qWVd4bEtERXVNREF4T1RncElpQm1hV3hzUFNJalptWm1JajQ4TDNCaGRHZytQQzl6ZG1jKycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOXB4O1xuICB9XG5gXG5cbmNvbnN0IENoZWNrYm94ID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2F1dG9Gb2N1cywgZGlzYWJsZWQsIGlkLCBjaGVja2VkLCBuYW1lLCBvbkNoYW5nZSwgbGFiZWwsIHZhbHVlfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX1cbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBodG1sRm9yOiBpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc0fX0gLyogZGlzYWJsZWQ9e2Rpc2FibGVkfSAqLywgbGFiZWwpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgbWF4V2lkdGg6IDYwMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgcGFkZGluZzogJzEwMHB4IDAgMzBweCAwJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL05vdGlmaWNhdGlvbnNDb250YWluZXIudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHthZGRGYWlsdXJlTm90aWZpY2F0aW9ufSBmcm9tICdjbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9oZWxwZXJzL3RleHRPdmVyZmxvdydcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCBDaGVja2JveCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9DaGVja2JveCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBtYXJnaW5Cb3R0b206IDM1XG59KVxuXG5jb25zdCBOb3RpZmljYXRpb25Sb3cgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luQm90dG9tOiA0LFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGhlaWdodDogNDYsXG4gIGZvbnRTaXplOiAxNlxufSlcblxuY29uc3QgTm90aWZpY2F0aW9uSGVhZGVyUm93ID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMjQsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgaGVpZ2h0OiA0NixcbiAgZm9udFNpemU6IDE2LFxuICB3aWR0aDogJzEwMCUnXG59KVxuXG5jb25zdCBRdWV1ZU5hbWUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAuLi50ZXh0T3ZlcmZsb3dcbn0pXG5cbmNvbnN0IENoZWNrYm94Q29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBkaXNwbGF5OiAnZmxleCdcbn0pXG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW25vdGlmaWNhdGlvbkRhdGEsIHNldE5vdGlmaWNhdGlvbkRhdGFdID0gdXNlU3RhdGUoe30gKVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hOb3RpZmljYXRpb25EYXRhKCkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvbm90aWZpY2F0aW9uc2AsIHBheWxvYWQpXG4gICAgICBjb25zdCB7ZXJyb3JzLCBkYXRhfSA9IHJlcyB8fCB7fVxuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBub3RpZmljYXRpb24gZGF0YSEnLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uRGF0YShkYXRhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoTm90aWZpY2F0aW9uRGF0YSgpXG4gIH0sIFtdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUJFKG5vdGlmaWNhdGlvbkluZm8pIHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgZGF0YTogbm90aWZpY2F0aW9uSW5mb1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy9ub3RpZmljYXRpb25zYCwgcGF5bG9hZClcbiAgICBpZiAocmVzLmVycm9ycykge1xuICAgICAgcmVzLmVycm9ycy5hcnJheS5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICBwcm9wcy5hZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5OH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fSwgXCJOb3RpZmljYXRpb25zXCIpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VidGl0bGUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX0sIFwiRW1haWwgbWUgZXZlcnkgdGltZSBhIG5ldyB0YXNrIGlzIGNyZWF0ZWQuXCIgICAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb25IZWFkZXJSb3csIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXVlTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDJ9fSwgXCJBbGwgcXVldWVzXCIgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3hDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tib3gsIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHVwZGF0ZUJFKHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAhbm90aWZpY2F0aW9uRGF0YS5lbmFibGVkLFxuICAgICAgICAgICAgICAgIHF1ZXVlX25vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbkRhdGEucXVldWVfbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICFub3RpZmljYXRpb25EYXRhLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgcXVldWVfbm90aWZpY2F0aW9uczogbm90aWZpY2F0aW9uRGF0YS5xdWV1ZV9ub3RpZmljYXRpb25zXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWQ6IFwiZ2xvYmFsTm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgbmFtZTogXCJnbG9iYWxOb3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICAgIGNoZWNrZWQ6IG5vdGlmaWNhdGlvbkRhdGEuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIG5vdGlmaWNhdGlvbkRhdGEuZW5hYmxlZCxcbiAgICAgICAgICAgIHZhbHVlOiAnZ2xvYmFsTm90aWZpY2F0aW9ucycsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDR9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBub3RpZmljYXRpb25EYXRhLnF1ZXVlX25vdGlmaWNhdGlvbnMgJiYgIW5vdGlmaWNhdGlvbkRhdGEuZW5hYmxlZCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI1fX1cbiAgICAgICAgICAsIG5vdGlmaWNhdGlvbkRhdGEucXVldWVfbm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb25Sb3csIHsga2V5OiBub3RpZmljYXRpb24ucXVldWVfaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjh9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZU5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI5fX0sIG5vdGlmaWNhdGlvbi5xdWV1ZV9uYW1lKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzB9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld05vdGlmaWNhdGlvbkRhdGFBcnJheSA9IFsuLi5ub3RpZmljYXRpb25EYXRhLnF1ZXVlX25vdGlmaWNhdGlvbnNdXG5cbiAgICAgICAgICAgICAgICAgICAgICBuZXdOb3RpZmljYXRpb25EYXRhQXJyYXlbXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdOb3RpZmljYXRpb25EYXRhQXJyYXkuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5xdWV1ZV9pZCA9PT0gbm90aWZpY2F0aW9uLnF1ZXVlX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXS5lbmFibGVkID0gIW5vdGlmaWNhdGlvbi5lbmFibGVkXG5cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVCRSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBub3RpZmljYXRpb25EYXRhLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZV9ub3RpZmljYXRpb25zOiBuZXdOb3RpZmljYXRpb25EYXRhQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Tm90aWZpY2F0aW9uRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBub3RpZmljYXRpb25EYXRhLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZV9ub3RpZmljYXRpb25zOiBuZXdOb3RpZmljYXRpb25EYXRhQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpZDogbm90aWZpY2F0aW9uLnF1ZXVlX2lkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBub3RpZmljYXRpb24ucXVldWVfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG5vdGlmaWNhdGlvbi5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm90aWZpY2F0aW9uLnF1ZXVlX25hbWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzF9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShOb3RpZmljYXRpb25zQ29udGFpbmVyKVxuIiwiY29uc3QgdGV4dE92ZXJmbG93ID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGV4dE92ZXJmbG93XG4iXSwic291cmNlUm9vdCI6IiJ9