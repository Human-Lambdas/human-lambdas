(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ProfileContainer"],{

/***/ "./src/client/components/Spinner.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/Spinner.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Spinner.tsx";



const keyframesSpin = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1rnj20u0"
})({
  border: `2px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_GRAY}`,
  borderRadius: '50%',
  borderTop: `2px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN}`,
  width: 20,
  height: 20,
  animationName: keyframesSpin.toString(),
  animationDuration: '1s',
  animationIterationCount: 'infinite'
});

const Spinner = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

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

/***/ "./src/universal/modules/settings/components/Profile.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/settings/components/Profile.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageWrapper */ "./src/universal/modules/settings/components/PageWrapper.tsx");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Title */ "./src/universal/modules/settings/components/Title.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var _FieldLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FieldLine */ "./src/universal/modules/settings/components/FieldLine.tsx");
/* harmony import */ var _ButtonFieldLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonFieldLine */ "./src/universal/modules/settings/components/ButtonFieldLine.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/components/Profile.tsx";











const Profile = props => {
  const {
    handleSubmit,
    user,
    saved,
    isLoading
  } = props;
  const {
    email,
    name
  } = user || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      name,
      email
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__["userSchema"],
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
      lineNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FieldLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: 'i.e. Same Smith',
    type: "text",
    name: "name",
    value: values.name,
    error: touched.name && errors.name,
    onChange: handleChange,
    onBlur: handleBlur,
    isRequired: true,
    label: 'Full Name',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FieldLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: 'i.e. sam.smith@humanlambdas.com',
    type: "email",
    name: "email",
    error: touched.email && errors.email,
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    isRequired: true,
    label: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonFieldLine__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    disabled: !isValid || isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, isSubmitting || isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }) : saved)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

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

/***/ "./src/universal/modules/settings/containers/ProfileContainer.tsx":
/*!************************************************************************!*\
  !*** ./src/universal/modules/settings/containers/ProfileContainer.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Profile */ "./src/universal/modules/settings/components/Profile.tsx");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/ProfileContainer.tsx";






const ProfileContainer = props => {
  const [saved, setSaved] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Save');
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    userId
  } = networker || {};
  const {
    dispatch
  } = props;
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.user);
  const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (credentials, actions) => {
    setIsLoading(true);
    const reqBody = {
      method: 'PATCH',
      data: credentials
    };
    const {
      data,
      errors
    } = await networker.httpHandler(`/users/${userId}`, reqBody);

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_3__["addFailureNotification"])(error.message));
      });
    } else {
      await setUser(data);
    }

    actions.setSubmitting(false);
    actions.resetForm();
    setTimeout(() => {
      setSaved('Saved!');
      setIsLoading(false);
    }, 1000);
  }, [user]);
  setTimeout(() => {
    setSaved('Save');
  }, 2000);
  return user && !user.id ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    handleSubmit: handleSubmit,
    saved: saved,
    isLoading: isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(ProfileContainer));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL0J1dHRvbkZpZWxkTGluZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvRmllbGRMaW5lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9QYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL1Byb2ZpbGVDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsImtleWZyYW1lc1NwaW4iLCJrZXlmcmFtZXMiLCJMb2FkZXIiLCJib3JkZXIiLCJQQUxFVFRFIiwiQk9SREVSX0dSQVkiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJUb3AiLCJQUklNQVJZX01BSU4iLCJ3aWR0aCIsImhlaWdodCIsImFuaW1hdGlvbk5hbWUiLCJ0b1N0cmluZyIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJTcGlubmVyIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJQcmltYXJ5QnV0dG9uIiwiUGxhaW5CdXR0b24iLCJwcm9wcyIsImhpZGVGb2N1cyIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsIlBSSU1BUllfTUFJTl9EQVJLIiwiQnV0dG9uRmllbGRMaW5lIiwiRmllbGRMaW5lIiwiUGFnZVdyYXBwZXIiLCJQcm9maWxlIiwiaGFuZGxlU3VibWl0IiwidXNlciIsInNhdmVkIiwiaXNMb2FkaW5nIiwiZW1haWwiLCJuYW1lIiwiRm9ybWlrIiwiZW5hYmxlUmVpbml0aWFsaXplIiwidmFsaWRhdGVPbkNoYW5nZSIsInZhbGlkYXRlT25CbHVyIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJ1c2VyU2NoZW1hIiwib25TdWJtaXQiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwiaXNWYWxpZCIsInZhbHVlcyIsImVycm9ycyIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJGb3JtIiwiVGl0bGUiLCJJbnB1dEZpZWxkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJlcnJvciIsIm9uQ2hhbmdlIiwib25CbHVyIiwiaXNSZXF1aXJlZCIsImxhYmVsIiwiZGlzYWJsZWQiLCJQcm9maWxlQ29udGFpbmVyIiwic2V0U2F2ZWQiLCJ1c2VTdGF0ZSIsInNldElzTG9hZGluZyIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsInVzZXJJZCIsImRpc3BhdGNoIiwic2V0VXNlciIsInVzZUNhbGxiYWNrIiwiY3JlZGVudGlhbHMiLCJhY3Rpb25zIiwicmVxQm9keSIsIm1ldGhvZCIsImRhdGEiLCJodHRwSGFuZGxlciIsImZvckVhY2giLCJhZGRGYWlsdXJlTm90aWZpY2F0aW9uIiwibWVzc2FnZSIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJzZXRUaW1lb3V0IiwiaWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7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QUFDQSxRQUFJM0IsTUFBSixFQUFZO0FBQ1ZBLFlBQU0sQ0FBQytCLE9BQVAsQ0FBZ0J0QixLQUFELElBQVc7QUFDeEJhLGdCQUFRLENBQUNVLDZIQUFzQixDQUFDdkIsS0FBSyxDQUFDd0IsT0FBUCxDQUF2QixDQUFSO0FBQ0QsT0FGRDtBQUdELEtBSkQsTUFJTztBQUNMLFlBQU1WLE9BQU8sQ0FBQ00sSUFBRCxDQUFiO0FBQ0Q7O0FBQ0RILFdBQU8sQ0FBQ1EsYUFBUixDQUFzQixLQUF0QjtBQUNBUixXQUFPLENBQUNTLFNBQVI7QUFDQUMsY0FBVSxDQUFDLE1BQU07QUFDZnBCLGNBQVEsQ0FBQyxRQUFELENBQVI7QUFDQUUsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUQsR0F0QjZCLEVBdUI5QixDQUFDbkMsSUFBRCxDQXZCOEIsQ0FBaEM7QUEwQkFxRCxZQUFVLENBQUMsTUFBTTtBQUNmcEIsWUFBUSxDQUFDLE1BQUQsQ0FBUjtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxTQUFPakMsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ3NELEVBQWQsR0FBbUIsSUFBbkIsZ0JBQ0xoRiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CdUIsMkRBQXBCLEVBQTZCO0FBQUVFLFFBQUksRUFBRUEsSUFBUjtBQUFjRCxnQkFBWSxFQUFFQSxZQUE1QjtBQUEwQ0UsU0FBSyxFQUFFQSxLQUFqRDtBQUF3REMsYUFBUyxFQUFFQSxTQUFuRTtBQUE4RTFCLFVBQU0sRUFBRSxTQUF0RjtBQUE0RkMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixnQkFBVSxFQUFFO0FBQXJDO0FBQXRHLEdBQTdCLENBREY7QUFHRCxDQXpDRDs7QUEyQ2U0RSwwSEFBTyxHQUFHdkIsZ0JBQUgsQ0FBdEIsRSIsImZpbGUiOiJQcm9maWxlQ29udGFpbmVyX2JlZmE2MmI5MmY2NDE5MTM4YzAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtrZXlmcmFtZXN9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IGtleWZyYW1lc1NwaW4gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gXG5cbmNvbnN0IExvYWRlciA9IHN0eWxlZC5kaXYoe1xuICBib3JkZXI6IGAycHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIGJvcmRlclRvcDogYDJweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOfWAsXG4gIHdpZHRoOiAyMCxcbiAgaGVpZ2h0OiAyMCxcbiAgYW5pbWF0aW9uTmFtZToga2V5ZnJhbWVzU3Bpbi50b1N0cmluZygpLFxuICBhbmltYXRpb25EdXJhdGlvbjogJzFzJyxcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZSdcbn0pXG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNn19IClcblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuIiwiXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgUHJpbWFyeUJ1dHRvbiA9IHN0eWxlZChQbGFpbkJ1dHRvbikoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoaWRlRm9jdXN9ID0gcHJvcHNcbiAgLy9jb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgd2FpdGluZ1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAwLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBib3JkZXI6IGAxcHggc29saWQgdHJhbnNwYXJlbnRgLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMgZWFzZS1pbi1vdXQnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLfWBcbiAgICB9LFxuICAgIC4uLighaGlkZUZvY3VzICYmIHtcbiAgICAgICc6Zm9jdXMsIDphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSSyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUJ1dHRvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEJ1dHRvbkZpZWxkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkZpZWxkTGluZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEZpZWxkTGluZSA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZExpbmVcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQYWdlV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIG1heFdpZHRoOiA2MDAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VXcmFwcGVyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9Qcm9maWxlLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Rm9ybWlrLCBGb3JtfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkJ1xuXG5pbXBvcnQge3VzZXJTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TcGlubmVyJ1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gJy4vUGFnZVdyYXBwZXInXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgRmllbGRMaW5lIGZyb20gJy4vRmllbGRMaW5lJ1xuaW1wb3J0IEJ1dHRvbkZpZWxkTGluZSBmcm9tICcuL0J1dHRvbkZpZWxkTGluZSdcblxuXG5cblxuXG5cblxuXG5jb25zdCBQcm9maWxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoYW5kbGVTdWJtaXQsIHVzZXIsIHNhdmVkLCBpc0xvYWRpbmd9ID0gcHJvcHNcbiAgY29uc3Qge2VtYWlsLCBuYW1lfSA9IHVzZXIgfHwge31cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZVdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjV9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7bmFtZSwgZW1haWx9LFxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiB1c2VyU2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjZ9fVxuICAgICAgXG4gICAgICAgICwgKHt0b3VjaGVkLCBpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgZXJyb3JzLCBoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaXRsZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19LCBcIlByb2ZpbGVcIilcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZExpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzd9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnaS5lLiBTYW1lIFNtaXRoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRnVsbCBOYW1lJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdpLmUuIHNhbS5zbWl0aEBodW1hbmxhbWJkYXMuY29tJyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRW1haWxcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkZpZWxkTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19IClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6ICFpc1ZhbGlkIHx8IGlzU3VibWl0dGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY1fX1cbiAgICAgICAgICAgICAgICAsIGlzU3VibWl0dGluZyB8fCBpc0xvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fSApIDogc2F2ZWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFdlaWdodDogNjAwLFxuICBmb250U2l6ZTogJzI0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIHBhZGRpbmc6ICcxMDBweCAwIDMwcHggMCdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29udGFpbmVycy9Qcm9maWxlQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZSdcbmltcG9ydCB7YWRkRmFpbHVyZU5vdGlmaWNhdGlvbn0gZnJvbSAnY2xpZW50L21vZHVsZXMvbm90aWZpY2F0aW9uU3lzdGVtL2R1Y2tzL25vdGlmaWNhdGlvblN5c3RlbUR1Y2snXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBQcm9maWxlQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzYXZlZCwgc2V0U2F2ZWRdID0gdXNlU3RhdGUoJ1NhdmUnKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHt1c2VySWR9ID0gbmV0d29ya2VyIHx8IHt9XG4gIGNvbnN0IHtkaXNwYXRjaH0gPSBwcm9wc1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShwcm9wcy51c2VyKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCByZXFCb2R5ID0ge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGRhdGE6IGNyZWRlbnRpYWxzXG4gICAgICB9IFxuXG4gICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzLyR7dXNlcklkfWAsIHJlcUJvZHkpXG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBzZXRVc2VyKGRhdGEpXG4gICAgICB9XG4gICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2F2ZWQoJ1NhdmVkIScpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0sIDEwMDApXG4gICAgfSxcbiAgICBbdXNlcl1cbiAgKVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldFNhdmVkKCdTYXZlJylcbiAgfSwgMjAwMClcblxuICByZXR1cm4gdXNlciAmJiAhdXNlci5pZCA/IG51bGwgOiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm9maWxlLCB7IHVzZXI6IHVzZXIsIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0LCBzYXZlZDogc2F2ZWQsIGlzTG9hZGluZzogaXNMb2FkaW5nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTl9fSApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFByb2ZpbGVDb250YWluZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9