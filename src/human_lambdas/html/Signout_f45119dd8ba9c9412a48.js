(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Signout"],{

/***/ "./src/client/components/Signout.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/Signout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var _modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");






const Signout = ({
  dispatch
}) => {
  const {
    history
  } = Object(hooks_useRouter__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!window) return;
    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["APP_REFRESH_TOKEN_KEY"]);
    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__["APP_TOKEN_KEY"]);
    dispatch(Object(_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_4__["addSuccessNotification"])('You’ve successfully signed out.'));
    setTimeout(() => history.replace('/'), 100);
  }, []);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(Signout));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU2lnbm91dC50c3giXSwibmFtZXMiOlsiU2lnbm91dCIsImRpc3BhdGNoIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJBUFBfUkVGUkVTSF9UT0tFTl9LRVkiLCJBUFBfVE9LRU5fS0VZIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsInNldFRpbWVvdXQiLCJyZXBsYWNlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDOUIsUUFBTTtBQUFDQztBQUFELE1BQVlDLCtEQUFTLEVBQTNCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ2JDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0JDLHNFQUF4QjtBQUNBRixnQkFBWSxDQUFDQyxVQUFiLENBQXdCRSw4REFBeEI7QUFFQVIsWUFBUSxDQUFDUyx1SEFBc0IsQ0FBQyxpQ0FBRCxDQUF2QixDQUFSO0FBRUFDLGNBQVUsQ0FBQyxNQUFNVCxPQUFPLENBQUNVLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBUCxFQUE2QixHQUE3QixDQUFWO0FBQ0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQU8sSUFBUDtBQUNELENBYkQ7O0FBZWVDLDBIQUFPLEdBQUdiLE9BQUgsQ0FBdEIsRSIsImZpbGUiOiJTaWdub3V0X2Y0NTExOWRkOGJhOWM5NDEyYTQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IHtBUFBfUkVGUkVTSF9UT0tFTl9LRVksIEFQUF9UT0tFTl9LRVl9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7YWRkU3VjY2Vzc05vdGlmaWNhdGlvbn0gZnJvbSAnLi4vbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcblxuY29uc3QgU2lnbm91dCA9ICh7ZGlzcGF0Y2h9KSA9PiB7XG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cpIHJldHVyblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFQUF9SRUZSRVNIX1RPS0VOX0tFWSlcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBUFBfVE9LRU5fS0VZKVxuXG4gICAgZGlzcGF0Y2goYWRkU3VjY2Vzc05vdGlmaWNhdGlvbignWW914oCZdmUgc3VjY2Vzc2Z1bGx5IHNpZ25lZCBvdXQuJykpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGhpc3RvcnkucmVwbGFjZSgnLycpLCAxMDApXG4gIH0sIFtdKVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoU2lnbm91dClcbiJdLCJzb3VyY2VSb290IjoiIn0=