(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["InviteSignUpPage"],{

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

/***/ "./src/client/components/InviteSignUpPage.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/InviteSignUpPage.tsx ***!
  \****************************************************/
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
/* harmony import */ var utils_segmentIo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginContainer */ "./src/client/components/LoginContainer.tsx");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoginPage */ "./src/client/components/LoginPage.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/InviteSignUpPage.tsx";















const InviteSignUpPage = props => {
  Object(hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Sign Up | Human Lambdas');
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const token = props.match.params.inviteId;
  const handleSubmitCredentials = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (credentials, actions) => {
    try {
      let returnedEmail = '';
      const payload = {
        name: credentials.name,
        password: credentials.password
      };
      const reqBody = {
        method: 'POST',
        data: payload
      };
      const {
        data
      } = await networker.httpHandler(`/users/invitation/${token}`, reqBody);
      returnedEmail = data.email;
      Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_11__["segmentTrack"])('Organization Join Successful', {
        email: data.email
      });

      if (data.status === 200) {
        props.addSuccessNotification('You have successfuly joined this organization');
        history.push('/');
      } else if (data.message) {
        props.addSuccessNotification(data.message);
      }

      {
        const tokenReqBody = {
          method: 'POST',
          data: {
            email: returnedEmail,
            password: credentials.password
          }
        };
        const url = '/users/token';
        const {
          data
        } = await networker.httpHandler(url, tokenReqBody);
        const {
          access,
          refresh
        } = data || {};

        if (access && refresh) {
          networker.setAccessToken(access);
          networker.setRefreshToken(refresh);
          actions.setSubmitting(false);
          history.push(`/queues`);
        }
      }
    } catch (e) {
      console.error('User signup failed', e);
      Object(utils_segmentIo__WEBPACK_IMPORTED_MODULE_11__["segmentTrack"])('Signup Failed');
    }
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_13__["FormikRoot"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_3__["InviteSignUpSchema"],
    onSubmit: handleSubmitCredentials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    tagLine: 'Human-in-the-loop tasks at any scale',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_13__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Name",
    type: "text",
    name: "name",
    value: values.name,
    error: touched.name && errors.name,
    onChange: handleChange,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_13__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Password",
    type: "password",
    name: "password",
    error: touched.password && errors.password,
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FlatButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit",
    disabled: isSubmitting || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckValidToken__WEBPACK_IMPORTED_MODULE_10__["default"], {
    url: `/users/invitation/${token}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(InviteSignUpPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ2hlY2tWYWxpZFRva2VuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSW52aXRlU2lnblVwUGFnZS50c3giXSwibmFtZXMiOlsiQ2hlY2tWYWxpZEludml0ZVRva2VuIiwicHJvcHMiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibWF5YmVMb2dnZWRJbiIsInJlc3BvbnNlIiwiaHR0cEhhbmRsZXIiLCJ1cmwiLCJtZXRob2QiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZSIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwicHVzaCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCIsIl9qc3hGaWxlTmFtZSIsIkludml0ZVNpZ25VcFBhZ2UiLCJ1c2VEb2N1bWVudFRpdGxlIiwidG9rZW4iLCJtYXRjaCIsInBhcmFtcyIsImludml0ZUlkIiwiaGFuZGxlU3VibWl0Q3JlZGVudGlhbHMiLCJ1c2VDYWxsYmFjayIsImNyZWRlbnRpYWxzIiwiYWN0aW9ucyIsInJldHVybmVkRW1haWwiLCJwYXlsb2FkIiwibmFtZSIsInBhc3N3b3JkIiwicmVxQm9keSIsImRhdGEiLCJlbWFpbCIsInNlZ21lbnRUcmFjayIsInN0YXR1cyIsImFkZFN1Y2Nlc3NOb3RpZmljYXRpb24iLCJ0b2tlblJlcUJvZHkiLCJhY2Nlc3MiLCJyZWZyZXNoIiwic2V0QWNjZXNzVG9rZW4iLCJzZXRSZWZyZXNoVG9rZW4iLCJzZXRTdWJtaXR0aW5nIiwiY29uc29sZSIsImVycm9yIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRm9ybWlrUm9vdCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiRm9ybWlrIiwidmFsaWRhdGVPbkNoYW5nZSIsInZhbGlkYXRlT25CbHVyIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRpb25TY2hlbWEiLCJJbnZpdGVTaWduVXBTY2hlbWEiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwidmFsdWVzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsIkxvZ2luQ29udGFpbmVyIiwidGFnTGluZSIsIkZpZWxkQmxvY2siLCJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIkZsYXRCdXR0b24iLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxxQkFBcUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR0Msa0VBQVksRUFBOUI7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBWUMsK0RBQVMsRUFBM0I7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7O0FBQUMsS0FBQyxlQUFlQyxhQUFmLEdBQStCO0FBQy9CLFlBQU1DLFFBQVEsR0FBRyxNQUFNTixTQUFTLENBQUNPLFdBQVYsQ0FBc0JSLEtBQUssQ0FBQ1MsR0FBNUIsRUFBaUM7QUFDdERDLGNBQU0sRUFBRTtBQUQ4QyxPQUFqQyxDQUF2Qjs7QUFJQSxVQUFJSCxRQUFRLENBQUNJLE1BQWIsRUFBcUI7QUFDbkJKLGdCQUFRLENBQUNJLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXlCQyxDQUFELElBQU87QUFDN0JiLGVBQUssQ0FBQ2Msc0JBQU4sQ0FBNkJELENBQUMsQ0FBQ0UsT0FBL0I7QUFDRCxTQUZEO0FBR0FaLGVBQU8sQ0FBQ2EsSUFBUixDQUFhLEdBQWI7QUFDRDtBQUNGLEtBWEE7QUFZRixHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0EsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFE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RUFBRWxDLFlBQVg7QUFBeUJtQyxnQkFBVSxFQUFFO0FBQXJDO0FBUFosR0FBaEMsQ0FERixDQVpKLGVBdUJJTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CNEIsNkRBQXBCLEVBQWdDO0FBQUVKLFFBQUksRUFBRSxRQUFSO0FBQWtCSyxZQUFRLEVBQUVmLFlBQVksSUFBSSxDQUFDQyxPQUE3QztBQUFzRGIsVUFBTSxFQUFFLFNBQTlEO0FBQW9FQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFbEMsWUFBWDtBQUF5Qm1DLGdCQUFVLEVBQUU7QUFBckM7QUFBOUUsR0FBaEMsRUFBMEosU0FBMUosQ0F2QkosQ0FSRixDQURKLGVBc0NJTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcEQseURBQXBCLEVBQTJDO0FBQUVVLE9BQUcsRUFBRyxxQkFBb0JlLEtBQU0sRUFBbEM7QUFBcUM2QixVQUFNLEVBQUUsU0FBN0M7QUFBbURDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVsQyxZQUFYO0FBQXlCbUMsZ0JBQVUsRUFBRTtBQUFyQztBQUE3RCxHQUEzQyxDQXRDSixDQURGO0FBMENELENBekdEOztBQTJHQSxNQUFNdkMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUN2QyxTQUFPO0FBQ0xKLDBCQUFzQixFQUFHSyxHQUFELElBQVNELFFBQVEsQ0FBQ0osc0hBQXNCLENBQUNLLEdBQUQsQ0FBdkIsQ0FEcEM7QUFFTHNCLDBCQUFzQixFQUFHdEIsR0FBRCxJQUFTRCxRQUFRLENBQUN1QixzSEFBc0IsQ0FBQ3RCLEdBQUQsQ0FBdkI7QUFGcEMsR0FBUDtBQUlELENBTEQ7O0FBT2VDLDBIQUFPLENBQUMsSUFBRCxFQUFPSCxrQkFBUCxDQUFQLENBQWtDSyxnQkFBbEMsQ0FBZixFIiwiZmlsZSI6Ikludml0ZVNpZ25VcFBhZ2VfN2ZkODMwMWMxZGYyZTUwNTRkMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7YWRkRmFpbHVyZU5vdGlmaWNhdGlvbn0gZnJvbSAnbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2hvb2tzL3VzZVJvdXRlcidcblxuXG5cblxuXG5cbmNvbnN0IENoZWNrVmFsaWRJbnZpdGVUb2tlbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIDsoYXN5bmMgZnVuY3Rpb24gbWF5YmVMb2dnZWRJbigpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHByb3BzLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbXSlcbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGVja1ZhbGlkSW52aXRlVG9rZW4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSW52aXRlU2lnblVwUGFnZS50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Zvcm1payx9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dEZpZWxkJ1xuaW1wb3J0IHtJbnZpdGVTaWduVXBTY2hlbWF9IGZyb20gJ3VuaXZlcnNhbC92YWxpZGF0aW9ucy95dXBTY2hlbWEnXG5pbXBvcnQgdXNlRG9jdW1lbnRUaXRsZSBmcm9tICdob29rcy91c2VEb2N1bWVudFRpdGxlJ1xuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnY29tcG9uZW50cy9GbGF0QnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7XG4gIGFkZEZhaWx1cmVOb3RpZmljYXRpb24sXG4gIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb25cbn0gZnJvbSAnbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ2hlY2tWYWxpZEludml0ZVRva2VuIGZyb20gJy4vQ2hlY2tWYWxpZFRva2VuJ1xuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ3V0aWxzL3NlZ21lbnRJbydcbmltcG9ydCBMb2dpbkNvbnRhaW5lciBmcm9tICcuL0xvZ2luQ29udGFpbmVyJ1xuaW1wb3J0IHtGb3JtaWtSb290LCBGaWVsZEJsb2NrfSBmcm9tICcuL0xvZ2luUGFnZSdcblxuXG5cblxuXG5cbmNvbnN0IEludml0ZVNpZ25VcFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgdXNlRG9jdW1lbnRUaXRsZSgnU2lnbiBVcCB8IEh1bWFuIExhbWJkYXMnKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcbiAgY29uc3QgbmV0d29ya2VyID0gdXNlTmV0d29ya2VyKClcbiAgY29uc3QgdG9rZW4gPSBwcm9wcy5tYXRjaC5wYXJhbXMuaW52aXRlSWRcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVkZW50aWFscyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJldHVybmVkRW1haWwgPSAnJ1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgbmFtZTogY3JlZGVudGlhbHMubmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogcGF5bG9hZFxuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzL2ludml0YXRpb24vJHt0b2tlbn1gLCByZXFCb2R5KVxuXG4gICAgICAgIHJldHVybmVkRW1haWwgPSBkYXRhLmVtYWlsXG5cbiAgICAgICAgc2VnbWVudFRyYWNrKCdPcmdhbml6YXRpb24gSm9pbiBTdWNjZXNzZnVsJywge1xuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBwcm9wcy5hZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdZb3UgaGF2ZSBzdWNjZXNzZnVseSBqb2luZWQgdGhpcyBvcmdhbml6YXRpb24nKVxuICAgICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgcHJvcHMuYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihkYXRhLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHRva2VuUmVxQm9keSA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbDogcmV0dXJuZWRFbWFpbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGNvbnN0IHVybCA9ICcvdXNlcnMvdG9rZW4nXG4gICAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHVybCwgdG9rZW5SZXFCb2R5KVxuICAgICAgICAgIGNvbnN0IHthY2Nlc3MsIHJlZnJlc2h9ID0gZGF0YSB8fCB7fVxuXG4gICAgICAgICAgaWYgKGFjY2VzcyAmJiByZWZyZXNoKSB7XG4gICAgICAgICAgICBuZXR3b3JrZXIuc2V0QWNjZXNzVG9rZW4oYWNjZXNzKVxuICAgICAgICAgICAgbmV0d29ya2VyLnNldFJlZnJlc2hUb2tlbihyZWZyZXNoKVxuICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVzYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVXNlciBzaWdudXAgZmFpbGVkJywgZSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdTaWdudXAgRmFpbGVkJylcbiAgICAgIH1cbiAgICB9LFxuICAgIFtuZXR3b3JrZXJdXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrUm9vdCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7bmFtZTogJycsIHBhc3N3b3JkOiAnJ30sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IEludml0ZVNpZ25VcFNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdENyZWRlbnRpYWxzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTB9fVxuICAgICAgXG4gICAgICAgICwgKHt0b3VjaGVkLCBpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgZXJyb3JzLCBoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2dpbkNvbnRhaW5lciwgeyB0YWdMaW5lOiAnSHVtYW4taW4tdGhlLWxvb3AgdGFza3MgYXQgYW55IHNjYWxlJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk4fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTB9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBlcnJvcjogdG91Y2hlZC5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1ciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExMX19XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGbGF0QnV0dG9uLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcgfHwgIWlzVmFsaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjF9fSwgXCJTaWduIFVwXCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrVmFsaWRJbnZpdGVUb2tlbiwgeyB1cmw6IGAvdXNlcnMvaW52aXRhdGlvbi8ke3Rva2VufWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjd9fSApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEZhaWx1cmVOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oYXJnKSksXG4gICAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnZpdGVTaWduVXBQYWdlKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==