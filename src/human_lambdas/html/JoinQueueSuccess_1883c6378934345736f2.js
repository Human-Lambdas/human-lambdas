(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["JoinQueueSuccess"],{

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

/***/ "./src/client/components/JoinQueueSuccess.tsx":
/*!****************************************************!*\
  !*** ./src/client/components/JoinQueueSuccess.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingPage */ "./src/client/components/LoadingPage.tsx");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginPage */ "./src/client/components/LoginPage.tsx");
/* harmony import */ var _CheckValidToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckValidToken */ "./src/client/components/CheckValidToken.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/JoinQueueSuccess.tsx";









const JoinQueueSuccess = props => {
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [succeeded, setSucceeded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const token = props.match.params.inviteId;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ;

    (async function verifySignUp() {
      const payload = {
        method: 'POST'
      };
      const response = await networker.httpHandler(`/users/invitation/${token}`, payload);

      if (response.errors) {
        response.errors.forEach(e => {
          props.addFailureNotification(e.message);
        });
        history.push('/');
      } else {
        props.addSuccessNotification('You have now joined this organization!');
        setEmail(response.data.email);
        setSucceeded(true);
      }
    })();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, succeeded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    email: email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckValidToken__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: `/users/invitation/${token}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(JoinQueueSuccess));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQ2hlY2tWYWxpZFRva2VuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSm9pblF1ZXVlU3VjY2Vzcy50c3giXSwibmFtZXMiOlsiQ2hlY2tWYWxpZEludml0ZVRva2VuIiwicHJvcHMiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwibWF5YmVMb2dnZWRJbiIsInJlc3BvbnNlIiwiaHR0cEhhbmRsZXIiLCJ1cmwiLCJtZXRob2QiLCJlcnJvcnMiLCJmb3JFYWNoIiwiZSIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwicHVzaCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYXJnIiwiY29ubmVjdCIsIl9qc3hGaWxlTmFtZSIsIkpvaW5RdWV1ZVN1Y2Nlc3MiLCJzdWNjZWVkZWQiLCJzZXRTdWNjZWVkZWQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJ0b2tlbiIsIm1hdGNoIiwicGFyYW1zIiwiaW52aXRlSWQiLCJ2ZXJpZnlTaWduVXAiLCJwYXlsb2FkIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRhdGEiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkxvZ2luUGFnZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxNQUFNQSxxQkFBcUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR0Msa0VBQVksRUFBOUI7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBWUMsK0RBQVMsRUFBM0I7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7O0FBQUMsS0FBQyxlQUFlQyxhQUFmLEdBQStCO0FBQy9CLFlBQU1DLFFBQVEsR0FBRyxNQUFNTixTQUFTLENBQUNPLFdBQVYsQ0FBc0JSLEtBQUssQ0FBQ1MsR0FBNUIsRUFBaUM7QUFDdERDLGNBQU0sRUFBRTtBQUQ4QyxPQUFqQyxDQUF2Qjs7QUFJQSxVQUFJSCxRQUFRLENBQUNJLE1BQWIsRUFBcUI7QUFDbkJKLGdCQUFRLENBQUNJLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXlCQyxDQUFELElBQU87QUFDN0JiLGVBQUssQ0FBQ2Msc0JBQU4sQ0FBNkJELENBQUMsQ0FBQ0UsT0FBL0I7QUFDRCxTQUZEO0FBR0FaLGVBQU8sQ0FBQ2EsSUFBUixDQUFhLEdBQWI7QUFDRDtBQUNGLEtBWEE7QUFZRixHQWJRLEVBYU4sRUFiTSxDQUFUO0FBY0EsU0FBTyxJQUFQO0FBQ0QsQ0FuQkQ7O0FBcUJBLE1BQU1DLGtCQUFrQixHQUFJQyxRQUFELElBQWM7QUFDdkMsU0FBTztBQUNMSiwwQkFBc0IsRUFBR0ssR0FBRCxJQUFTRCxRQUFRLENBQUNKLHNIQUFzQixDQUFDSyxHQUFELENBQXZCO0FBRHBDLEdBQVA7QUFHRCxDQUpEOztBQU1lQywwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ2xCLHFCQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1zQixZQUFZLEdBQUcsOEVBQXJCO0FBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBLE1BQU1DLGdCQUFnQixHQUFJdEIsS0FBRCxJQUFXO0FBQ2xDLFFBQU07QUFBQ0c7QUFBRCxNQUFZQywrREFBUyxFQUEzQjtBQUNBLFFBQU1ILFNBQVMsR0FBR0Msa0VBQVksRUFBOUI7QUFDQSxRQUFNLENBQUNxQixTQUFELEVBQVlDLFlBQVosSUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CRixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNRyxLQUFLLEdBQUc1QixLQUFLLENBQUM2QixLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFFBQWpDO0FBRUExQix5REFBUyxDQUFDLE1BQU07QUFDZDs7QUFBQyxLQUFDLGVBQWUyQixZQUFmLEdBQThCO0FBQzlCLFlBQU1DLE9BQU8sR0FBRztBQUNkdkIsY0FBTSxFQUFFO0FBRE0sT0FBaEI7QUFHQSxZQUFNSCxRQUFRLEdBQUcsTUFBTU4sU0FBUyxDQUFDTyxXQUFWLENBQXVCLHFCQUFvQm9CLEtBQU0sRUFBakQsRUFBb0RLLE9BQXBELENBQXZCOztBQUVBLFVBQUkxQixRQUFRLENBQUNJLE1BQWIsRUFBcUI7QUFDbkJKLGdCQUFRLENBQUNJLE1BQVQsQ0FBZ0JDLE9BQWhCLENBQXlCQyxDQUFELElBQU87QUFDN0JiLGVBQUssQ0FBQ2Msc0JBQU4sQ0FBNkJELENBQUMsQ0FBQ0UsT0FBL0I7QUFDRCxTQUZEO0FBR0FaLGVBQU8sQ0FBQ2EsSUFBUixDQUFhLEdBQWI7QUFDRCxPQUxELE1BS087QUFDTGhCLGFBQUssQ0FBQ2tDLHNCQUFOLENBQTZCLHdDQUE3QjtBQUNBUCxnQkFBUSxDQUFDcEIsUUFBUSxDQUFDNEIsSUFBVCxDQUFjVCxLQUFmLENBQVI7QUFDQUYsb0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLEtBaEJBO0FBaUJGLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQ7QUFvQkEsc0JBQ0VZLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JELDRDQUFLLENBQUNFLFFBQTFCLEVBQW9DLElBQXBDLEVBQ0lmLFNBQVMsZ0JBQUdhLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JFLGtEQUFwQixFQUErQjtBQUFFYixTQUFLLEVBQUVBLEtBQVQ7QUFBZ0JjLFVBQU0sRUFBRSxTQUF4QjtBQUE4QkMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixnQkFBVSxFQUFFO0FBQXJDO0FBQXhDLEdBQS9CLENBQUgsZ0JBQXdIUCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CTyxvREFBcEIsRUFBNkI7QUFBQ0osVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixnQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEdBQTdCLENBRHJJLGVBRUlQLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0J0Qyx3REFBcEIsRUFBMkM7QUFBRVUsT0FBRyxFQUFHLHFCQUFvQm1CLEtBQU0sRUFBbEM7QUFBcUNZLFVBQU0sRUFBRSxTQUE3QztBQUFtREMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixnQkFBVSxFQUFFO0FBQXJDO0FBQTdELEdBQTNDLENBRkosQ0FERjtBQU1ELENBakNEOztBQW1DQSxNQUFNMUIsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUN2QyxTQUFPO0FBQ0xKLDBCQUFzQixFQUFHSyxHQUFELElBQVNELFFBQVEsQ0FBQ0osc0hBQXNCLENBQUNLLEdBQUQsQ0FBdkIsQ0FEcEM7QUFFTGUsMEJBQXNCLEVBQUdmLEdBQUQsSUFBU0QsUUFBUSxDQUFDZ0Isc0hBQXNCLENBQUNmLEdBQUQsQ0FBdkI7QUFGcEMsR0FBUDtBQUlELENBTEQ7O0FBT2VDLDBIQUFPLENBQUMsSUFBRCxFQUFPSCxrQkFBUCxDQUFQLENBQWtDSyxnQkFBbEMsQ0FBZixFIiwiZmlsZSI6IkpvaW5RdWV1ZVN1Y2Nlc3NfMTg4M2M2Mzc4OTM0MzQ1NzM2ZjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB7YWRkRmFpbHVyZU5vdGlmaWNhdGlvbn0gZnJvbSAnbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2hvb2tzL3VzZVJvdXRlcidcblxuXG5cblxuXG5cbmNvbnN0IENoZWNrVmFsaWRJbnZpdGVUb2tlbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKSBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIDsoYXN5bmMgZnVuY3Rpb24gbWF5YmVMb2dnZWRJbigpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHByb3BzLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbXSlcbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkRmFpbHVyZU5vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGVja1ZhbGlkSW52aXRlVG9rZW4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSm9pblF1ZXVlU3VjY2Vzcy50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nUGFnZSdcbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQge1xuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uLFxuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uXG59IGZyb20gJ21vZHVsZXMvbm90aWZpY2F0aW9uU3lzdGVtL2R1Y2tzL25vdGlmaWNhdGlvblN5c3RlbUR1Y2snXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IExvZ2luUGFnZSBmcm9tICcuL0xvZ2luUGFnZSdcbmltcG9ydCBDaGVja1ZhbGlkSW52aXRlVG9rZW4gZnJvbSAnLi9DaGVja1ZhbGlkVG9rZW4nXG5cbmNvbnN0IEpvaW5RdWV1ZVN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IFtzdWNjZWVkZWQsIHNldFN1Y2NlZWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgdG9rZW4gPSBwcm9wcy5tYXRjaC5wYXJhbXMuaW52aXRlSWRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIDsoYXN5bmMgZnVuY3Rpb24gdmVyaWZ5U2lnblVwKCkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgIH0gXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzL2ludml0YXRpb24vJHt0b2tlbn1gLCBwYXlsb2FkKVxuXG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIHJlc3BvbnNlLmVycm9ycy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgcHJvcHMuYWRkRmFpbHVyZU5vdGlmaWNhdGlvbihlLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5hZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdZb3UgaGF2ZSBub3cgam9pbmVkIHRoaXMgb3JnYW5pemF0aW9uIScpXG4gICAgICAgIHNldEVtYWlsKHJlc3BvbnNlLmRhdGEuZW1haWwpXG4gICAgICAgIHNldFN1Y2NlZWRlZCh0cnVlKVxuICAgICAgfVxuICAgIH0pKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIHN1Y2NlZWRlZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9naW5QYWdlLCB7IGVtYWlsOiBlbWFpbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX0gKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja1ZhbGlkSW52aXRlVG9rZW4sIHsgdXJsOiBgL3VzZXJzL2ludml0YXRpb24vJHt0b2tlbn1gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDR9fSApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEZhaWx1cmVOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oYXJnKSksXG4gICAgYWRkU3VjY2Vzc05vdGlmaWNhdGlvbjogKGFyZykgPT4gZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbihhcmcpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShKb2luUXVldWVTdWNjZXNzKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==