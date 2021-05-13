(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PasswordContainer"],{

/***/ "./src/universal/components/PrimaryButton.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/PrimaryButton.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const PrimaryButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e1jbkvpx0"
})(props => {
  const {
    hideFocus
  } = props; //const isDisabled = disabled || waiting

  return _objectSpread({
    width: 'fit-content',
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
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
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  }, !hideFocus && {
    ':focus, :active': {
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/universal/modules/settings/components/ButtonFieldLine.tsx":
/*!***********************************************************************!*\
  !*** ./src/universal/modules/settings/components/ButtonFieldLine.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const ButtonFieldLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eppwgta0"
})({
  name: "l256j9",
  styles: "display:flex;flex-direction:row-reverse;"
});

/* harmony default export */ __webpack_exports__["default"] = (ButtonFieldLine);

/***/ }),

/***/ "./src/universal/modules/settings/components/FieldLine.tsx":
/*!*****************************************************************!*\
  !*** ./src/universal/modules/settings/components/FieldLine.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const FieldLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14zl4v0"
})({
  name: "10beoar",
  styles: "display:flex;flex-direction:column;width:100%;margin-bottom:15px;"
});

/* harmony default export */ __webpack_exports__["default"] = (FieldLine);

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

/***/ "./src/universal/modules/settings/containers/PasswordContainer.tsx":
/*!*************************************************************************!*\
  !*** ./src/universal/modules/settings/containers/PasswordContainer.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/universal/modules/settings/components/PageWrapper.tsx");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Title */ "./src/universal/modules/settings/components/Title.tsx");
/* harmony import */ var _components_FieldLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FieldLine */ "./src/universal/modules/settings/components/FieldLine.tsx");
/* harmony import */ var _components_ButtonFieldLine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ButtonFieldLine */ "./src/universal/modules/settings/components/ButtonFieldLine.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/PasswordContainer.tsx";













const PasswordContainer = props => {
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const handleSubmitPassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (passwords, actions) => {
    const passwordReqBody = {
      method: 'PATCH',
      data: {
        currentPassword: passwords.currentPassword,
        password: passwords.newPassword
      }
    };
    const {
      userId
    } = networker;
    const url = `/users/${userId}`;
    const response = await networker.httpHandler(url, passwordReqBody);

    if (response.errors) {
      response.errors.forEach(e => {
        props.addFailureNotification(e.message);
      });
    } else {
      props.addSuccessNotification('Your password has been changed!');
    }

    actions.resetForm();
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordSchema"],
    initialValues: {
      currentPassword: '',
      newPassword: ''
    },
    onSubmit: handleSubmitPassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FieldLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "password",
    autoComplete: "on",
    name: "currentPassword",
    placeholder: "*********",
    value: values.currentPassword,
    error: touched.currentPassword && errors.currentPassword,
    onChange: handleChange,
    onBlur: handleBlur,
    isRequired: true,
    label: 'Current Password',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FieldLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "password",
    autoComplete: "on",
    name: "newPassword",
    placeholder: "*********",
    error: touched.newPassword && errors.newPassword,
    value: values.newPassword,
    onChange: handleChange,
    onBlur: handleBlur,
    isRequired: true,
    label: "New Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ButtonFieldLine__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    disabled: !isValid || isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, "Save")))));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(PasswordContainer));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvQnV0dG9uRmllbGRMaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9GaWVsZExpbmUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbnRhaW5lcnMvUGFzc3dvcmRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIlByaW1hcnlCdXR0b24iLCJQbGFpbkJ1dHRvbiIsInByb3BzIiwiaGlkZUZvY3VzIiwid2lkdGgiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQQUxFVFRFIiwiUFJJTUFSWV9NQUlOIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwib3V0bGluZSIsImJveFNoYWRvdyIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInRyYW5zaXRpb24iLCJwYWRkaW5nIiwiUFJJTUFSWV9NQUlOX0RBUksiLCJCdXR0b25GaWVsZExpbmUiLCJGaWVsZExpbmUiLCJQYWdlV3JhcHBlciIsIlRpdGxlIiwiX2pzeEZpbGVOYW1lIiwiUGFzc3dvcmRDb250YWluZXIiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoYW5kbGVTdWJtaXRQYXNzd29yZCIsInVzZUNhbGxiYWNrIiwicGFzc3dvcmRzIiwiYWN0aW9ucyIsInBhc3N3b3JkUmVxQm9keSIsIm1ldGhvZCIsImRhdGEiLCJjdXJyZW50UGFzc3dvcmQiLCJwYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidXNlcklkIiwidXJsIiwicmVzcG9uc2UiLCJodHRwSGFuZGxlciIsImVycm9ycyIsImZvckVhY2giLCJlIiwiYWRkRmFpbHVyZU5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJhZGRTdWNjZXNzTm90aWZpY2F0aW9uIiwicmVzZXRGb3JtIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGb3JtaWsiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiQ2hhbmdlUGFzc3dvcmRTY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwiaXNWYWxpZCIsInZhbHVlcyIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJGb3JtIiwiSW5wdXRGaWVsZCIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImVycm9yIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJpc1JlcXVpcmVkIiwibGFiZWwiLCJkaXNhYmxlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBV0EsTUFBTUEsYUFBYSxHQUFHLGtGQUFPQyxzRUFBUDtBQUFBO0FBQUEsR0FBcUJDLEtBQUQsSUFBVztBQUNuRCxRQUFNO0FBQUNDO0FBQUQsTUFBY0QsS0FBcEIsQ0FEbUQsQ0FFbkQ7O0FBQ0E7QUFDRUUsU0FBSyxFQUFFLGFBRFQ7QUFFRUMsY0FBVSxFQUFFLE1BRmQ7QUFHRUMsU0FBSyxFQUFFLE1BSFQ7QUFJRUMsbUJBQWUsRUFBRUMsZ0VBQU8sQ0FBQ0MsWUFKM0I7QUFLRUMsY0FBVSxFQUFFLEdBTGQ7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UGFzc3dvcmRDb250YWluZXJfYTlhNDIzMzMxODg1ZGFlODc3NmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuLi8uLi9jbGllbnQvY29tcG9uZW50cy9QbGFpbkJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQcmltYXJ5QnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSgocHJvcHMpID0+IHtcbiAgY29uc3Qge2hpZGVGb2N1c30gPSBwcm9wc1xuICAvL2NvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCB3YWl0aW5nXG4gIHJldHVybiB7XG4gICAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6IDAsXG4gICAgYm94U2hhZG93OiAncmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAwcHggMHB4IDFweCBpbnNldCwgcmdiYSgxNSwgMTUsIDE1LCAwLjEpIDBweCAxcHggMnB4JyxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCB0cmFuc3BhcmVudGAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgcGFkZGluZzogJzAgMTBweCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgIH0sXG4gICAgLi4uKCFoaWRlRm9jdXMgJiYge1xuICAgICAgJzpmb2N1cywgOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5QnV0dG9uXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgQnV0dG9uRmllbGRMaW5lID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uRmllbGRMaW5lXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgRmllbGRMaW5lID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbkJvdHRvbTogMTVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkTGluZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgbWF4V2lkdGg6IDYwMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAnMjRweCcsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgcGFkZGluZzogJzEwMHB4IDAgMzBweCAwJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL1Bhc3N3b3JkQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybWlrLCBGb3JtfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Q2hhbmdlUGFzc3dvcmRTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgUGFnZVdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xuaW1wb3J0IEZpZWxkTGluZSBmcm9tICcuLi9jb21wb25lbnRzL0ZpZWxkTGluZSdcbmltcG9ydCBCdXR0b25GaWVsZExpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25GaWVsZExpbmUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQYXNzd29yZENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFBhc3N3b3JkID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHBhc3N3b3JkcywgYWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcGFzc3dvcmRSZXFCb2R5ID0ge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjdXJyZW50UGFzc3dvcmQ6IHBhc3N3b3Jkcy5jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3Jkcy5uZXdQYXNzd29yZFxuICAgICAgICB9XG4gICAgICB9IFxuXG4gICAgICBjb25zdCB7dXNlcklkfSA9IG5ldHdvcmtlclxuXG4gICAgICBjb25zdCB1cmwgPSBgL3VzZXJzLyR7dXNlcklkfWBcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIodXJsLCBwYXNzd29yZFJlcUJvZHkpXG5cbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3JzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBwcm9wcy5hZGRGYWlsdXJlTm90aWZpY2F0aW9uKGUubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oJ1lvdXIgcGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZCEnKVxuICAgICAgfVxuXG4gICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpXG4gICAgfSxcbiAgICBbbmV0d29ya2VyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VXcmFwcGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtaWssIHtcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IENoYW5nZVBhc3N3b3JkU2NoZW1hLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7Y3VycmVudFBhc3N3b3JkOiAnJywgbmV3UGFzc3dvcmQ6ICcnfSxcbiAgICAgICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdFBhc3N3b3JkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjd9fVxuICAgICAgXG4gICAgICAgICwgKHt0b3VjaGVkLCBpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgZXJyb3JzLCBoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc1fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3Nn19LCBcIkNoYW5nZSBQYXNzd29yZFwiIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZExpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzd9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU6IFwib25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImN1cnJlbnRQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIioqKioqKioqKlwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLmN1cnJlbnRQYXNzd29yZCAmJiBlcnJvcnMuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDdXJyZW50IFBhc3N3b3JkJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc4fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZTogXCJvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwibmV3UGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIqKioqKioqKipcIixcbiAgICAgICAgICAgICAgICBlcnJvcjogdG91Y2hlZC5uZXdQYXNzd29yZCAmJiBlcnJvcnMubmV3UGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5uZXdQYXNzd29yZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5ldyBQYXNzd29yZFwiICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDV9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX0gKVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIWlzVmFsaWQgfHwgaXNTdWJtaXR0aW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA3fX0sIFwiU2F2ZVwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uOiAoYXJnKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGFyZykpLFxuICAgIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYXJnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFzc3dvcmRDb250YWluZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9