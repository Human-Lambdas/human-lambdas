(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ForgottenForm"],{

/***/ "./src/client/components/ForgottenForm.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/ForgottenForm.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ "./src/client/components/InputField.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var components_FlatButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LoginContainer */ "./src/client/components/LoginContainer.tsx");
/* harmony import */ var _modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginPage */ "./src/client/components/LoginPage.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ForgottenForm.tsx";














const FieldBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1w8em610"
})({
  name: "15poin4",
  styles: "margin-bottom:15px;"
});

const ForgottenForm = props => {
  const {
    dispatch
  } = props;
  Object(hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Forgotten password | Human Lambdas');
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ;

    (async function maybeLoggedIn() {
      const accessToken = await window.localStorage.getItem(utils_constants__WEBPACK_IMPORTED_MODULE_13__["APP_TOKEN_KEY"]);
      const {
        userId
      } = networker || {};

      if (userId && accessToken) {
        const {
          data: {
            current_organization_id
          },
          errors
        } = await networker.httpHandler(`/users/${userId}`, {
          method: 'GET'
        });

        if (errors === undefined && current_organization_id) {
          history.push(`/queues`);
        } else {
          console.error(`Error logging in user: ${userId}`);
        }
      }
    })();
  }, [networker]);
  const handleSubmitCredentials = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async (credentials, actions) => {
    const reqBody = {
      method: 'POST',
      data: credentials
    };
    const response = await networker.httpHandler('/users/forgotten-password', reqBody);

    if (response.errors) {
      response.errors.forEach(e => {
        dispatch(Object(_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__["addFailureNotification"])(e.message));
      });
      actions.setSubmitting(false);
    } else {
      dispatch(Object(_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__["addSuccessNotification"])(response.data.message));
      actions.setSubmitting(false);
      history.push('/');
    }
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_12__["FormikRoot"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      email: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_4__["forgottenSchema"],
    onSubmit: handleSubmitCredentials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tagLine: 'Enter your email to reset your password',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Email",
    type: "text",
    name: "email",
    value: values.email,
    error: touched.email && errors.email,
    onChange: handleChange,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_FlatButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    disabled: isSubmitting || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Send recovery email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_12__["LinkButton"], {
    onClick: () => history.push('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "Already have an account?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])()(ForgottenForm));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRm9yZ290dGVuRm9ybS50c3giXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiRmllbGRCbG9jayIsIkZvcmdvdHRlbkZvcm0iLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRG9jdW1lbnRUaXRsZSIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJ1c2VFZmZlY3QiLCJtYXliZUxvZ2dlZEluIiwiYWNjZXNzVG9rZW4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQVBQX1RPS0VOX0tFWSIsInVzZXJJZCIsImRhdGEiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsImVycm9ycyIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZVN1Ym1pdENyZWRlbnRpYWxzIiwidXNlQ2FsbGJhY2siLCJjcmVkZW50aWFscyIsImFjdGlvbnMiLCJyZXFCb2R5IiwicmVzcG9uc2UiLCJmb3JFYWNoIiwiZSIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwic2V0U3VibWl0dGluZyIsImFkZFN1Y2Nlc3NOb3RpZmljYXRpb24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtaWtSb290IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJGb3JtaWsiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJpbml0aWFsVmFsdWVzIiwiZW1haWwiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9yZ290dGVuU2NoZW1hIiwib25TdWJtaXQiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwiaXNWYWxpZCIsInZhbHVlcyIsImhhbmRsZUJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJMb2dpbkNvbnRhaW5lciIsInRhZ0xpbmUiLCJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJvbkJsdXIiLCJGbGF0QnV0dG9uIiwiZGlzYWJsZWQiLCJMaW5rQnV0dG9uIiwib25DbGljayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRywyRUFBckI7QUFBaUc7QUFFakc7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVVBLE1BQU1DLFVBQVUsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbkI7O0FBSUEsTUFBTUMsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0IsUUFBTTtBQUFDQztBQUFELE1BQWFELEtBQW5CO0FBQ0FFLHdFQUFnQixDQUFDLG9DQUFELENBQWhCO0FBQ0EsUUFBTTtBQUFDQztBQUFELE1BQVlDLCtEQUFTLEVBQTNCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxrRUFBWSxFQUE5QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZDs7QUFBQyxLQUFDLGVBQWVDLGFBQWYsR0FBK0I7QUFDL0IsWUFBTUMsV0FBVyxHQUFHLE1BQU1DLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEJDLDhEQUE1QixDQUExQjtBQUNBLFlBQU07QUFBQ0M7QUFBRCxVQUFXVCxTQUFTLElBQUksRUFBOUI7O0FBQ0EsVUFBSVMsTUFBTSxJQUFJTCxXQUFkLEVBQTJCO0FBQ3pCLGNBQU07QUFDSk0sY0FBSSxFQUFFO0FBQUNDO0FBQUQsV0FERjtBQUVKQztBQUZJLFlBR0YsTUFBTVosU0FBUyxDQUFDYSxXQUFWLENBQXVCLFVBQVNKLE1BQU8sRUFBdkMsRUFBMEM7QUFBQ0ssZ0JBQU0sRUFBRTtBQUFULFNBQTFDLENBSFY7O0FBSUEsWUFBSUYsTUFBTSxLQUFLRyxTQUFYLElBQXdCSix1QkFBNUIsRUFBcUQ7QUFDbkRiLGlCQUFPLENBQUNrQixJQUFSLENB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aUIsWUFBUSxFQUFFUixZQU5zQjtBQU9oQ1MsVUFBTSxFQUFFVixVQVB3QjtBQU9aaEIsVUFBTSxFQUFFLFNBUEk7QUFPRUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTVDLFlBQVg7QUFBeUI2QyxnQkFBVSxFQUFFO0FBQXJDO0FBUFosR0FBaEMsQ0FERixDQURKLGVBWUlOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J2QyxVQUFwQixFQUFnQztBQUFDeUMsVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRTVDLFlBQVg7QUFBeUI2QyxnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQWhDLGVBQ0VOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I2Qiw2REFBcEIsRUFBZ0M7QUFBRUwsUUFBSSxFQUFFLFFBQVI7QUFBa0JNLFlBQVEsRUFBRWYsWUFBWSxJQUFJLENBQUNDLE9BQTdDO0FBQXNEZCxVQUFNLEVBQUUsU0FBOUQ7QUFBb0VDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU1QyxZQUFYO0FBQXlCNkMsZ0JBQVUsRUFBRTtBQUFyQztBQUE5RSxHQUFoQyxFQUEwSixxQkFBMUosQ0FERixDQVpKLGVBaUJJTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK0Isc0RBQXBCLEVBQWdDO0FBQUVDLFdBQU8sRUFBRSxNQUFNbEUsT0FBTyxDQUFDa0IsSUFBUixDQUFhLEdBQWIsQ0FBakI7QUFBb0NrQixVQUFNLEVBQUUsU0FBNUM7QUFBa0RDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUU1QyxZQUFYO0FBQXlCNkMsZ0JBQVUsRUFBRTtBQUFyQztBQUE1RCxHQUFoQyxFQUF3SSwwQkFBeEksQ0FqQkosQ0FSRixDQURKLENBREY7QUFpQ0QsQ0E5RUQ7O0FBZ0ZlNEIsMEhBQU8sR0FBR3ZFLGFBQUgsQ0FBdEIsRSIsImZpbGUiOiJGb3Jnb3R0ZW5Gb3JtXzIyMmZmMjZjNGYwYWNmMWNhMWNhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ZvcmdvdHRlbkZvcm0udHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rm9ybWlrLH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnXG5pbXBvcnQge2ZvcmdvdHRlblNjaGVtYX0gZnJvbSAndW5pdmVyc2FsL3ZhbGlkYXRpb25zL3l1cFNjaGVtYSdcbmltcG9ydCB1c2VEb2N1bWVudFRpdGxlIGZyb20gJ2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0ZsYXRCdXR0b24nXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMb2dpbkNvbnRhaW5lciBmcm9tICcuL0xvZ2luQ29udGFpbmVyJ1xuaW1wb3J0IHtcbiAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbixcbiAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvblxufSBmcm9tICcuLi9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHtGb3JtaWtSb290LCBMaW5rQnV0dG9ufSBmcm9tICcuL0xvZ2luUGFnZSdcbmltcG9ydCB7QVBQX1RPS0VOX0tFWX0gZnJvbSAndXRpbHMvY29uc3RhbnRzJ1xuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRmllbGRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5jb25zdCBGb3Jnb3R0ZW5Gb3JtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtkaXNwYXRjaH0gPSBwcm9wc1xuICB1c2VEb2N1bWVudFRpdGxlKCdGb3Jnb3R0ZW4gcGFzc3dvcmQgfCBIdW1hbiBMYW1iZGFzJylcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICA7KGFzeW5jIGZ1bmN0aW9uIG1heWJlTG9nZ2VkSW4oKSB7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBUFBfVE9LRU5fS0VZKVxuICAgICAgY29uc3Qge3VzZXJJZH0gPSBuZXR3b3JrZXIgfHwge31cbiAgICAgIGlmICh1c2VySWQgJiYgYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRhdGE6IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZH0sXG4gICAgICAgICAgZXJyb3JzXG4gICAgICAgIH0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy8ke3VzZXJJZH1gLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICAgIGlmIChlcnJvcnMgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCkge1xuICAgICAgICAgIGhpc3RvcnkucHVzaChgL3F1ZXVlc2ApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9nZ2luZyBpbiB1c2VyOiAke3VzZXJJZH1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbbmV0d29ya2VyXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVkZW50aWFscyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IGNyZWRlbnRpYWxzXG4gICAgICB9IFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoJy91c2Vycy9mb3Jnb3R0ZW4tcGFzc3dvcmQnLCByZXFCb2R5KVxuICAgICAgaWYgKHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICByZXNwb25zZS5lcnJvcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZS5tZXNzYWdlKSlcbiAgICAgICAgfSlcbiAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpKVxuICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9XG4gICAgfSxcbiAgICBbbmV0d29ya2VyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1pa1Jvb3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzh9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge2VtYWlsOiAnJ30sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IGZvcmdvdHRlblNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdENyZWRlbnRpYWxzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzl9fVxuICAgICAgXG4gICAgICAgICwgKHt0b3VjaGVkLCBpc1N1Ym1pdHRpbmcsIGlzVmFsaWQsIHZhbHVlcywgZXJyb3JzLCBoYW5kbGVCbHVyLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2dpbkNvbnRhaW5lciwgeyB0YWdMaW5lOiAnRW50ZXIgeW91ciBlbWFpbCB0byByZXNldCB5b3VyIHBhc3N3b3JkJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg3fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg4fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1ciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDg5fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxhdEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFpc1ZhbGlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX0sIFwiU2VuZCByZWNvdmVyeSBlbWFpbFwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtCdXR0b24sIHsgb25DbGljazogKCkgPT4gaGlzdG9yeS5wdXNoKCcvJyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDR9fSwgXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIiAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEZvcmdvdHRlbkZvcm0pXG4iXSwic291cmNlUm9vdCI6IiJ9