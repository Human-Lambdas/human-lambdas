(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AuditsRoot~UsersRoot"],{

/***/ "./src/client/components/ListPage/ListPage.tsx":
/*!*****************************************************!*\
  !*** ./src/client/components/ListPage/ListPage.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListPageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListPageHeader */ "./src/client/components/ListPage/ListPageHeader.tsx");
/* harmony import */ var _ListPageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListPageContent */ "./src/client/components/ListPage/ListPageContent.tsx");
/* harmony import */ var _ListPageFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListPageFooter */ "./src/client/components/ListPage/ListPageFooter.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListPage/ListPage.tsx";





const Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eamy8350"
})({
  name: "8d67xr",
  styles: "display:flex;flex:1;overflow:auto;flex-direction:column;background-color:#fff;"
});

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eamy8351"
})({
  name: "ljth4h",
  styles: "margin-top:40px;display:flex;flex:1;justify-container:center;background-color:#fff;"
});

const Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eamy8352"
})({
  name: "w4dr9m",
  styles: "width:100%;margin:0 auto;height:100%;display:flex;flex-direction:column;"
});

const ListPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    pageHeader,
    itemList,
    emptyList,
    pageFooter
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListPageHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageHeader: pageHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), !itemList.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, emptyList ? emptyList : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListPageContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemList: itemList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), pageFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListPageFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pageFooter: pageFooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (ListPage);

/***/ }),

/***/ "./src/client/components/ListPage/ListPageContent.tsx":
/*!************************************************************!*\
  !*** ./src/client/components/ListPage/ListPageContent.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListPage/ListPageContent.tsx";



const List = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eerstjz0"
})({
  boxSizing: 'border-box',
  borderBottom: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY}`,
  borderLeft: '2px solid transparent',
  paddingLeft: 35,
  ':hover': {
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
    borderLeft: `2px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN}`
  }
});

const ListPageContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    itemList = []
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, itemList.map((el, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, el)));
});
/* harmony default export */ __webpack_exports__["default"] = (ListPageContent);

/***/ }),

/***/ "./src/client/components/ListPage/ListPageFooter.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/ListPage/ListPageFooter.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListPage/ListPageFooter.tsx";



const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e12nfas60"
})({
  name: "1guy3t5",
  styles: "position:fixed;bottom:0px;height:45px;width:100%;background-color:#fff;"
});

const StyledFooter = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("footer", {
  target: "e12nfas61"
})({
  paddingLeft: 35,
  paddingRight: 35,
  display: 'grid',
  borderTop: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY}`,
  width: '100%',
  position: 'relative'
});

const ListPageFooter = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    pageFooter
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFooter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, pageFooter));
});
/* harmony default export */ __webpack_exports__["default"] = (ListPageFooter);

/***/ }),

/***/ "./src/client/components/ListPage/ListPageHeader.tsx":
/*!***********************************************************!*\
  !*** ./src/client/components/ListPage/ListPageHeader.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListPage/ListPageHeader.tsx";



const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ecvzs9x0"
})({
  name: "1qs0zt4",
  styles: "position:sticky;top:0;background-color:#fff;width:100%;"
});

const StyledHeader = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header", {
  target: "ecvzs9x1"
})({
  paddingLeft: 35,
  display: 'grid',
  borderBottom: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY}`,
  width: '100%'
});

const ListPageHeader = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    pageHeader
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledHeader, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, pageHeader));
});
/* harmony default export */ __webpack_exports__["default"] = (ListPageHeader);

/***/ }),

/***/ "./src/client/components/ListPage/ListTitle.tsx":
/*!******************************************************!*\
  !*** ./src/client/components/ListPage/ListTitle.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");



const ListTitle = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1abmjfh0"
})(({
  align,
  padLeft
}) => ({
  paddingLeft: padLeft ? padLeft : 'none',
  display: 'flex',
  justifyContent: align ? align : 'left',
  alignItems: 'center',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].TEXT_MAIN,
  fontSize: 15,
  fontWeight: 500,
  userSelect: 'none',
  '&:last-child': {
    borderRight: 0
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (ListTitle);

/***/ }),

/***/ "./src/client/components/StyledError.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/StyledError.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");



const StyledError = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e19ph0k60"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].ERROR_MAIN,
  width: '100%',
  textAlign: 'left',
  fontSize: '12px',
  lineHeight: '24px',
  marginLeft: 5
});

/* harmony default export */ __webpack_exports__["default"] = (StyledError);

/***/ }),

/***/ "./src/client/components/TextArea.tsx":
/*!********************************************!*\
  !*** ./src/client/components/TextArea.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StyledError */ "./src/client/components/StyledError.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/TextArea.tsx"; // https://github.com/andreypopp/react-textarea-autosize






const StyledTextArea = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
  target: "eegneta0"
})(({
  error,
  disabled,
  readOnly,
  scrollable
}) => ({
  cursor: disabled || readOnly ? 'not-allowed' : 'text',
  backgroundColor: '#fff',
  borderRadius: 4,
  border: `1px solid ${error === 'true' ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BORDER_MAIN_GRAY}`,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  display: 'block',
  fontSize: 15,
  overflow: scrollable ? 'auto' : 'hidden',
  outline: 'none',
  padding: '5px 10px',
  resize: 'none',
  width: '100%',
  transition: 'border-color 200ms ease-in',
  ':focus': {
    borderColor: error === 'true' ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta1"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta2"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eegneta3"
})({
  fontSize: 12,
  fontWeight: 400,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  marginLeft: 6
});

const BasicTextArea = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    autoFocus,
    disabled,
    isOptional,
    isRequired,
    minRows,
    maxRows,
    error,
    maxLength,
    label,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    value,
    style,
    cacheMeasurements,
    readOnly,
    positionErrorBelow,
    scrollable
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Optional")), !positionErrorBelow && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledTextArea, {
    ref: ref,
    autoFocus: autoFocus,
    disabled: disabled,
    minRows: minRows,
    maxRows: maxRows,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    style: style,
    value: value,
    maxLength: maxLength,
    error: String(Boolean(error)),
    cacheMeasurements: cacheMeasurements,
    readOnly: readOnly,
    scrollable: scrollable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }), positionErrorBelow && error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, error));
});
BasicTextArea.defaultProps = {
  positionErrorBelow: true,
  scrollable: false
};
/* harmony default export */ __webpack_exports__["default"] = (BasicTextArea);

/***/ }),

/***/ "./src/client/hooks/useDocumentTitle.ts":
/*!**********************************************!*\
  !*** ./src/client/hooks/useDocumentTitle.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useDocumentTitle = title => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.title = title;
  }, [title]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDocumentTitle);

/***/ }),

/***/ "./src/universal/utils/getColor.ts":
/*!*****************************************!*\
  !*** ./src/universal/utils/getColor.ts ***!
  \*****************************************/
/*! exports provided: colorFromString, colorByIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorFromString", function() { return colorFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorByIndex", function() { return colorByIndex; });
/* harmony import */ var _stringToHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringToHash */ "./src/universal/utils/stringToHash.ts");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");



const getColor = identifier => client_styles_palette__WEBPACK_IMPORTED_MODULE_1__["BackgroundColors"][identifier % client_styles_palette__WEBPACK_IMPORTED_MODULE_1__["BackgroundColors"].length];

const colorFromString = string => getColor(Math.abs(Object(_stringToHash__WEBPACK_IMPORTED_MODULE_0__["default"])(string)));
const colorByIndex = index => getColor(index);

/***/ }),

/***/ "./src/universal/utils/stringToHash.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/stringToHash.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stringToHash = string => {
  let hash = 0,
      i,
      chr;

  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return hash;
};

/* harmony default export */ __webpack_exports__["default"] = (stringToHash);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZUNvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZUZvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0xpc3RQYWdlL0xpc3RQYWdlSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTGlzdFBhZ2UvTGlzdFRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3R5bGVkRXJyb3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9UZXh0QXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ob29rcy91c2VEb2N1bWVudFRpdGxlLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9zdHJpbmdUb0hhc2gudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiTGF5b3V0IiwiQ29udGFpbmVyIiwiQ29udGVudCIsIkxpc3RQYWdlIiwibWVtbyIsInByb3BzIiwicGFnZUhlYWRlciIsIml0ZW1MaXN0IiwiZW1wdHlMaXN0IiwicGFnZUZvb3RlciIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiTGlzdFBhZ2VIZWFkZXIiLCJsZW5ndGgiLCJGcmFnbWVudCIsIkxpc3RQYWdlQ29udGVudCIsIkxpc3RQYWdlRm9vdGVyIiwiTGlzdCIsImJveFNpemluZyIsImJvcmRlckJvdHRvbSIsIlBBTEVUVEUiLCJCT1JERVJfR1JBWSIsImJvcmRlckxlZnQiLCJwYWRkaW5nTGVmdCIsImJhY2tncm91bmRDb2xvciIsIkJBQ0tHUk9VTkRfTUFJTiIsIlBSSU1BUllfTUFJTiIsIm1hcCIsImVsIiwiaSIsImtleSIsIlN0eWxlZEZvb3RlciIsInBhZGRpbmdSaWdodCIsImRpc3BsYXkiLCJib3JkZXJUb3AiLCJ3aWR0aCIsInBvc2l0aW9uIiwiU3R5bGVkSGVhZGVyIiwiTGlzdFRpdGxlIiwiYWxpZ24iLCJwYWRMZWZ0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJURVhUX01BSU4iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ1c2VyU2VsZWN0IiwiYm9yZGVyUmlnaHQiLCJTdHlsZWRFcnJvciIsIkVSUk9SX01BSU4iLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibWFyZ2luTGVmdCIsIlN0eWxlZFRleHRBcmVhIiwiVGV4dEFyZWEiLCJlcnJvciIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJzY3JvbGxhYmxlIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQk9SREVSX01BSU5fR1JBWSIsIm92ZXJmbG93Iiwib3V0bGluZSIsInBhZGRpbmciLCJyZXNpemUiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyQ29sb3IiLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJCYXNpY1RleHRBcmVhIiwiZm9yd2FyZFJlZiIsInJlZiIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibWluUm93cyIsIm1heFJvd3MiLCJtYXhMZW5ndGgiLCJsYWJlbCIsIm5hbWUiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwic3R5bGUiLCJjYWNoZU1lYXN1cmVtZW50cyIsInBvc2l0aW9uRXJyb3JCZWxvdyIsIlN0cmluZyIsIkJvb2xlYW4iLCJkZWZhdWx0UHJvcHMiLCJ1c2VEb2N1bWVudFRpdGxlIiwidGl0bGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldENvbG9yIiwiaWRlbnRpZmllciIsIkJhY2tncm91bmRDb2xvcnMiLCJjb2xvckZyb21TdHJpbmciLCJzdHJpbmciLCJNYXRoIiwiYWJzIiwic3RyaW5nVG9IYXNoIiwiY29sb3JCeUluZGV4IiwiaW5kZXgiLCJoYXNoIiwiY2hyIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLCtFQUFyQjtBQUFxRztBQUVyRztBQUNBO0FBQ0E7O0FBU0EsTUFBTUMsTUFBTSxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFmOztBQVFBLE1BQU1DLFNBQVMsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbEI7O0FBUUEsTUFBTUMsT0FBTyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFoQjs7QUFRQSxNQUFNQyxRQUFRLGdCQUFHQyxrREFBSSxDQUFFQyxLQUFELElBQVc7QUFDL0IsUUFBTTtBQUFDQyxjQUFEO0FBQWFDLFlBQWI7QUFBdUJDLGFBQXZCO0FBQWtDQztBQUFsQyxNQUFnREosS0FBdEQ7QUFDQSxzQkFDRUssNENBQUssQ0FBQ0MsYUFBTixDQUFvQlgsTUFBcEIsRUFBNEI7QUFBQ1ksVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRWYsWUFBWDtBQUF5QmdCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBNUIsZUFDSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlYsU0FBcEIsRUFBK0I7QUFBQ1csVUFBTSxFQUFFLFNBQVQ7QUFBZUMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRWYsWUFBWDtBQUF5QmdCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBL0IsZUFDRUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlQsT0FBcEIsRUFBNkI7QUFBQ1UsVUFBTSxFQUFFLFNBQVQ7QUFBZUMs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Q0E7O0FBRUEsTUFBTUksUUFBUSxHQUFJQyxVQUFELElBQWdCQyxzRUFBZ0IsQ0FBQ0QsVUFBVSxHQUFHQyxzRUFBZ0IsQ0FBQ3pGLE1BQS9CLENBQWpEOztBQUVPLE1BQU0wRixlQUFlLEdBQUlDLE1BQUQsSUFBWUosUUFBUSxDQUFDSyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsNkRBQVksQ0FBQ0gsTUFBRCxDQUFyQixDQUFELENBQTVDO0FBRUEsTUFBTUksWUFBWSxHQUFJQyxLQUFELElBQVdULFFBQVEsQ0FBQ1MsS0FBRCxDQUF4QyxDOzs7Ozs7Ozs7Ozs7QUNQUDtBQUFBLE1BQU1GLFlBQVksR0FBSUgsTUFBRCxJQUFZO0FBQy9CLE1BQUlNLElBQUksR0FBRyxDQUFYO0FBQUEsTUFDRWpGLENBREY7QUFBQSxNQUVFa0YsR0FGRjs7QUFHQSxPQUFLbEYsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHMkUsTUFBTSxDQUFDM0YsTUFBdkIsRUFBK0JnQixDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDa0YsT0FBRyxHQUFHUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0JuRixDQUFsQixDQUFOO0FBQ0FpRixRQUFJLEdBQUcsQ0FBQ0EsSUFBSSxJQUFJLENBQVQsSUFBY0EsSUFBZCxHQUFxQkMsR0FBNUI7QUFDQUQsUUFBSSxJQUFJLENBQVI7QUFDRDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0QsQ0FWRDs7QUFZZUgsMkVBQWYsRSIsImZpbGUiOiJBdWRpdHNSb290flVzZXJzUm9vdF9mNDcxY2Q5M2FiMTlhMzEyNzVjNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZS50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBMaXN0UGFnZUhlYWRlciBmcm9tICcuL0xpc3RQYWdlSGVhZGVyJ1xuaW1wb3J0IExpc3RQYWdlQ29udGVudCBmcm9tICcuL0xpc3RQYWdlQ29udGVudCdcbmltcG9ydCBMaXN0UGFnZUZvb3RlciBmcm9tICcuL0xpc3RQYWdlRm9vdGVyJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIG92ZXJmbG93OiAnYXV0bycsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpblRvcDogNDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAganVzdGlmeUNvbnRhaW5lcjogJ2NlbnRlcicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnXG59KVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzAgYXV0bycsXG4gIGhlaWdodDogJzEwMCUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBMaXN0UGFnZSA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtwYWdlSGVhZGVyLCBpdGVtTGlzdCwgZW1wdHlMaXN0LCBwYWdlRm9vdGVyfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYXlvdXQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBhZ2VIZWFkZXIsIHsgcGFnZUhlYWRlcjogcGFnZUhlYWRlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX0gKVxuICAgICAgICAgICwgIWl0ZW1MaXN0Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGVtcHR5TGlzdCA/IGVtcHR5TGlzdCA6IG51bGwpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RQYWdlQ29udGVudCwgeyBpdGVtTGlzdDogaXRlbUxpc3QsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19IClcbiAgICAgICAgICAgICAgLCBwYWdlRm9vdGVyICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFBhZ2VGb290ZXIsIHsgcGFnZUZvb3RlcjogcGFnZUZvb3RlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX0gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhZ2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZUNvbnRlbnQudHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtbyx9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5cblxuXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2KHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVl9YCxcbiAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgJzpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICAgIGJvcmRlckxlZnQ6IGAycHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn1gXG4gIH1cbn0pXG5cbmNvbnN0IExpc3RQYWdlQ29udGVudCA9IG1lbW8oXG4gIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtpdGVtTGlzdCA9IFtdfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgLCBpdGVtTGlzdC5tYXAoKGVsLCBpKSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7IGtleTogaSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2fX0sIGVsKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIClcbiAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0UGFnZUNvbnRlbnRcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZUZvb3Rlci50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBib3R0b206ICcwcHgnLFxuICBoZWlnaHQ6IDQ1LFxuICB3aWR0aDogJzEwMCUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3Rlcih7XG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgcGFkZGluZ1JpZ2h0OiAzNSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBib3JkZXJUb3A6IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCBMaXN0UGFnZUZvb3RlciA9IG1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtwYWdlRm9vdGVyfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEZvb3Rlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMH19LCBwYWdlRm9vdGVyKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhZ2VGb290ZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0UGFnZS9MaXN0UGFnZUhlYWRlci50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgdG9wOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgd2lkdGg6ICcxMDAlJ1xufSlcblxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcih7XG4gIHBhZGRpbmdMZWZ0OiAzNSxcbiAgZGlzcGxheTogJ2dyaWQnLFxuICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtQQUxFVFRFLkJPUkRFUl9HUkFZfWAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pXG5cbmNvbnN0IExpc3RQYWdlSGVhZGVyID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge3BhZ2VIZWFkZXJ9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSGVhZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3fX0sIHBhZ2VIZWFkZXIpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0UGFnZUhlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuZGl2KCh7YWxpZ24sIHBhZExlZnR9KSA9PiAoe1xuICBwYWRkaW5nTGVmdDogcGFkTGVmdCA/IHBhZExlZnQgOiAnbm9uZScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6IGFsaWduID8gYWxpZ24gOiAnbGVmdCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgYm9yZGVyUmlnaHQ6IDBcbiAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RUaXRsZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBTdHlsZWRFcnJvciA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5FUlJPUl9NQUlOLFxuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRFcnJvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL1RleHRBcmVhLnRzeFwiOy8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL3JlYWN0LXRleHRhcmVhLWF1dG9zaXplXG5pbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBTdHlsZWRFcnJvciBmcm9tICdjb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3R5bGVkVGV4dEFyZWEgPSBzdHlsZWQoVGV4dEFyZWEpKCh7ZXJyb3IsIGRpc2FibGVkLCByZWFkT25seSwgc2Nyb2xsYWJsZX0pID0+ICh7XG4gIGN1cnNvcjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyAnbm90LWFsbG93ZWQnIDogJ3RleHQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA9PT0gJ3RydWUnID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZm9udFNpemU6IDE1LFxuICBvdmVyZmxvdzogc2Nyb2xsYWJsZSA/ICdhdXRvJyA6ICdoaWRkZW4nLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gIHJlc2l6ZTogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICAnOmZvY3VzJzoge1xuICAgIGJvcmRlckNvbG9yOiBlcnJvciA9PT0gJ3RydWUnID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSkpXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxNSxcbiAgZm9udFdlaWdodDogNTAwLFxuICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgU3R5bGVkTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkxlZnQ6IDVcbn0pXG5cbmNvbnN0IExhYmVsSGVscGVyID0gc3R5bGVkLmRpdih7XG4gIGZvbnRTaXplOiAxMixcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIG1hcmdpbkxlZnQ6IDZcbn0pXG5cbmNvbnN0IEJhc2ljVGV4dEFyZWEgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG1pblJvd3MsXG4gICAgbWF4Um93cyxcbiAgICBlcnJvcixcbiAgICBtYXhMZW5ndGgsXG4gICAgbGFiZWwsXG4gICAgbmFtZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB2YWx1ZSxcbiAgICBzdHlsZSxcbiAgICBjYWNoZU1lYXN1cmVtZW50cyxcbiAgICByZWFkT25seSxcbiAgICBwb3NpdGlvbkVycm9yQmVsb3csXG4gICAgc2Nyb2xsYWJsZVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICwgbGFiZWwgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDk4fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTl9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsICFwb3NpdGlvbkVycm9yQmVsb3cgJiYgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDR9fSwgZXJyb3IpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkVGV4dEFyZWEsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG1pblJvd3M6IG1pblJvd3MsXG4gICAgICAgIG1heFJvd3M6IG1heFJvd3MsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoLFxuICAgICAgICBlcnJvcjogU3RyaW5nKEJvb2xlYW4oZXJyb3IpKSxcbiAgICAgICAgY2FjaGVNZWFzdXJlbWVudHM6IGNhY2hlTWVhc3VyZW1lbnRzLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDV9fVxuICAgICAgKVxuICAgICAgLCBwb3NpdGlvbkVycm9yQmVsb3cgJiYgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjR9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5CYXNpY1RleHRBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb25FcnJvckJlbG93OiB0cnVlLFxuICBzY3JvbGxhYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY1RleHRBcmVhXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZURvY3VtZW50VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0sIFt0aXRsZV0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURvY3VtZW50VGl0bGVcbiIsImltcG9ydCBzdHJpbmdUb0hhc2ggZnJvbSAnLi9zdHJpbmdUb0hhc2gnXG5pbXBvcnQge0JhY2tncm91bmRDb2xvcnN9IGZyb20gJ2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgZ2V0Q29sb3IgPSAoaWRlbnRpZmllcikgPT4gQmFja2dyb3VuZENvbG9yc1tpZGVudGlmaWVyICUgQmFja2dyb3VuZENvbG9ycy5sZW5ndGhdXG5cbmV4cG9ydCBjb25zdCBjb2xvckZyb21TdHJpbmcgPSAoc3RyaW5nKSA9PiBnZXRDb2xvcihNYXRoLmFicyhzdHJpbmdUb0hhc2goc3RyaW5nKSkpXG5cbmV4cG9ydCBjb25zdCBjb2xvckJ5SW5kZXggPSAoaW5kZXgpID0+IGdldENvbG9yKGluZGV4KVxuIiwiY29uc3Qgc3RyaW5nVG9IYXNoID0gKHN0cmluZykgPT4ge1xuICBsZXQgaGFzaCA9IDAsXG4gICAgaSxcbiAgICBjaHJcbiAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNociA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNoclxuICAgIGhhc2ggfD0gMFxuICB9XG4gIHJldHVybiBoYXNoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvSGFzaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==