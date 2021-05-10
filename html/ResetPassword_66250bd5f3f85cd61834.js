(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ResetPassword"],{

/***/ "./src/client/components/CheckValidToken.tsx":
/*!***************************************************!*\
  !*** ./src/client/components/CheckValidToken.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");






const CheckValidInviteToken = props => {
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ;

    (async function maybeLoggedIn() {
      const response = await networker.httpHandler(props.url, {
        method: 'GET'
      });

      if (response.errors) {
        response.errors.forEach(e => {
          props.addFailureNotification(e.message);
        });
        history.push('/');
      }
    })();
  }, []);
  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_2__["addFailureNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(CheckValidInviteToken));

/***/ }),

/***/ "./src/client/components/ResetPassword.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/ResetPassword.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ "./src/client/components/InputField.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var components_FlatButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CheckValidToken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckValidToken */ "./src/client/components/CheckValidToken.tsx");
/* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LoginContainer */ "./src/client/components/LoginContainer.tsx");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginPage */ "./src/client/components/LoginPage.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ResetPassword.tsx";














const ResetPassword = props => {
  Object(hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Reset Password | Human Lambdas');
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const token = props.match.params.forgottenId;
  const handleSubmitCredentials = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (credentials, actions) => {
    const payload = {
      password: credentials.password
    };
    const reqBody = {
      method: 'POST',
      data: payload
    };
    const response = await networker.httpHandler(`/users/forgotten-password-token/${token}`, reqBody);

    if (response.errors) {
      response.errors.forEach(e => {
        props.addFailureNotification(e.message);
      });
    } else {
      props.addSuccessNotification(response.data.message);
      actions.resetForm();
      history.push('/');
    }
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_12__["FormikRoot"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      password: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__["resetSchema"],
    onSubmit: handleSubmitCredentials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    tagLine: 'Human-in-the-loop tasks at any scale',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_12__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "New password",
    type: "password",
    name: "password",
    error: touched.password && errors.password,
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FlatButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    disabled: isSubmitting || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "Reset"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckValidToken__WEBPACK_IMPORTED_MODULE_10__["default"], {
    url: `/users/forgotten-password-token/${token}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(ResetPassword));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ2hlY2tWYWxpZFRva2VuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUmVzZXRQYXNzd29yZC50c3giXSwibmFtZXMiOlsiQ2hlY2tWYWxpZEludml0ZVRva2VuIiwicHJvcHMiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibWF5YmVMb2dnZWRJbiIsInJlc3BvbnNlIiwiaHR0cEhhbmRsZXIiLCJ1cmwiLCJtZXRob2QiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZSIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwicHVzaCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCIsIl9qc3hGaWxlTmFtZSIsIlJlc2V0UGFzc3dvcmQiLCJ1c2VEb2N1bWVudFRpdGxlIiwidG9rZW4iLCJtYXRjaCIsInBhcmFtcyIsImZvcmdvdHRlbklkIiwiaGFuZGxlU3VibWl0Q3JlZGVudGlhbHMiLCJ1c2VDYWxsYmFjayIsImNyZWRlbnRpYWxzIiwiYWN0aW9ucyIsInBheWxvYWQiLCJwYXNzd29yZCIsInJlcUJvZHkiLCJkYXRhIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsInJlc2V0Rm9ybSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkZvcm1pa1Jvb3QiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZvcm1payIsInZhbGlkYXRlT25DaGFuZ2UiLCJ2YWxpZGF0ZU9uQmx1ciIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0aW9uU2NoZW1hIiwicmVzZXRTY2hlbWEiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwidmFsdWVzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsIkxvZ2luQ29udGFpbmVyIiwidGFnTGluZSIsIkZpZWxkQmxvY2siLCJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsImVycm9yIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIkZsYXRCdXR0b24iLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxxQkFBcUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR0Msa0VBQVksRUFBOUI7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBWUMsK0RBQVMsRUFBM0I7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7O0FBQUMsS0FBQyxlQUFlQyxhQUFmLEdBQStCO0FBQy9CLFlBQU1DLFFBQVEsR0FBRyxNQUFNTixTQUFTLENBQUNPLFdBQVYsQ0FBc0JSLEtBQUssQ0FBQ1MsR0FBNUIsRUFBaUM7QUFDdERDLGNBQU0sRUFBRTtBQUQ4QyxPQUFqQyxDQUF2Qjs7QUFJQSxVQUFJSCxRQUFRLENBQUNJLE1BQWIsRUFBcUI7QUFDbkJKLGdCQUFRLENBQUNJLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXlCQyxDQUFELElBQU87QUFDN0JiLGVBQUssQ0FBQ2Msc0JBQU4sQ0FBNkJELENBQUMsQ0FBQ0UsT0FBL0I7QUFDRCxTQUZEO0FBR0FaLGVBQU8sQ0FBQ2EsSUFBUixDQUFhLEdBQWI7QUFDRDtBQUNGLEtBWEE7QUFZRixHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0EsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDdkMsU0FBTztBQUNMSiwwQkFBc0IsRUFBR0ssR0FBRCxJQUFTRCxRQUFRLENBQUNKLHNIQUFzQixDQUFDSyxHQUFELENBQXZCO0FBRHBDLEdBQVA7QUFHRCxDQUpEOztBQU1lQywwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FB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QUFJQyxRQUFELElBQWM7QUFDdkMsU0FBTztBQUNMSiwwQkFBc0IsRUFBR0ssR0FBRCxJQUFTRCxRQUFRLENBQUNKLHNIQUFzQixDQUFDSyxHQUFELENBQXZCLENBRHBDO0FBRUxpQiwwQkFBc0IsRUFBR2pCLEdBQUQsSUFBU0QsUUFBUSxDQUFDa0Isc0hBQXNCLENBQUNqQixHQUFELENBQXZCO0FBRnBDLEdBQVA7QUFJRCxDQUxEOztBQU9lQywwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ0ssYUFBbEMsQ0FBZixFIiwiZmlsZSI6IlJlc2V0UGFzc3dvcmRfNjYyNTBiZDVmM2Y4NWNkNjE4MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7YWRkRmFpbHVyZU5vdGlmaWNhdGlvbn0gZnJvbSAnbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2hvb2tzL3VzZVJvdXRlcidcblxuXG5cblxuXG5cbmNvbnN0IENoZWNrVmFsaWRJbnZpdGVUb2tlbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIDsoYXN5bmMgZnVuY3Rpb24gbWF5YmVMb2dnZWRJbigpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHByb3BzLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbXSlcbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGVja1ZhbGlkSW52aXRlVG9rZW4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUmVzZXRQYXNzd29yZC50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1payx9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dEZpZWxkJ1xuaW1wb3J0IHtyZXNldFNjaGVtYX0gZnJvbSAndW5pdmVyc2FsL3ZhbGlkYXRpb25zL3l1cFNjaGVtYSdcbmltcG9ydCB1c2VEb2N1bWVudFRpdGxlIGZyb20gJ2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0ZsYXRCdXR0b24nXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtcbiAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbixcbiAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvblxufSBmcm9tICdtb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBDaGVja1ZhbGlkSW52aXRlVG9rZW4gZnJvbSAnLi9DaGVja1ZhbGlkVG9rZW4nXG5pbXBvcnQgTG9naW5Db250YWluZXIgZnJvbSAnLi9Mb2dpbkNvbnRhaW5lcidcbmltcG9ydCB7Rm9ybWlrUm9vdCwgRmllbGRCbG9ja30gZnJvbSAnLi9Mb2dpblBhZ2UnXG5cblxuXG5cblxuY29uc3QgUmVzZXRQYXNzd29yZCA9IChwcm9wcykgPT4ge1xuICB1c2VEb2N1bWVudFRpdGxlKCdSZXNldCBQYXNzd29yZCB8IEh1bWFuIExhbWJkYXMnKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3QgdG9rZW4gPSBwcm9wcy5tYXRjaC5wYXJhbXMuZm9yZ290dGVuSWRcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVkZW50aWFscyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBwYXlsb2FkXG4gICAgICB9IFxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihcbiAgICAgICAgYC91c2Vycy9mb3Jnb3R0ZW4tcGFzc3dvcmQtdG9rZW4vJHt0b2tlbn1gLFxuICAgICAgICByZXFCb2R5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgcmVzcG9uc2UuZXJyb3JzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBwcm9wcy5hZGRGYWlsdXJlTm90aWZpY2F0aW9uKGUubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmFkZFN1Y2Nlc3NOb3RpZmljYXRpb24ocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9XG4gICAgfSxcbiAgICBbbmV0d29ya2VyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1pa1Jvb3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge3Bhc3N3b3JkOiAnJ30sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IHJlc2V0U2NoZW1hLFxuICAgICAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0Q3JlZGVudGlhbHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MH19XG4gICAgICBcbiAgICAgICAgLCAoe3RvdWNoZWQsIGlzU3VibWl0dGluZywgaXNWYWxpZCwgdmFsdWVzLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZX0pID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luQ29udGFpbmVyLCB7IHRhZ0xpbmU6ICdIdW1hbi1pbi10aGUtbG9vcCB0YXNrcyBhdCBhbnkgc2NhbGUnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjh9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5ldyBwYXNzd29yZFwiICxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxhdEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFpc1ZhbGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODB9fSwgXCJSZXNldFwiXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja1ZhbGlkSW52aXRlVG9rZW4sIHsgdXJsOiBgL3VzZXJzL2ZvcmdvdHRlbi1wYXNzd29yZC10b2tlbi8ke3Rva2VufWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19IClcbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihhcmcpKSxcbiAgICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uOiAoYXJnKSA9PiBkaXNwYXRjaChhZGRTdWNjZXNzTm90aWZpY2F0aW9uKGFyZykpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlc2V0UGFzc3dvcmQpXG4iXSwic291cmNlUm9vdCI6IiJ9