(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Queue~TaskRoot"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.dropping {\n  visibility: hidden;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n  opacity: 0;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.react-resizable-hide > .react-resizable-handle {\n  display: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-item.react-grid-placeholder {\n  background-color: #6648ee;\n  opacity: 0.15;\n  z-index: 10;\n}\n\n.react-draggable-dragging, .react-draggable.resizing {\n  z-index: 100 !important;\n}\n\n.react-grid-item:hover > .react-resizable-handle {\n  opacity: 1;\n}\n\n.react-grid-item.cssTransforms {\n  transition-property: none;\n}\n.animated .react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/client/components/InputField.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/InputField.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StyledError */ "./src/client/components/StyledError.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/InputField.tsx";





const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "e10b86x70"
})(({
  error,
  disabled
}) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontFamily: styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].SANS_SERIF,
  fontWeight: 400,
  cursor: disabled ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    boxShadow: `0 0 0 3px ${error ? '#ffdacc' : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
    borderColor: error ? styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x71"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x72"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e10b86x73"
})({
  fontSize: 12,
  fontWeight: 400,
  color: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
  marginLeft: 6
});

const InputField = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    disabled,
    error,
    isOptional,
    isRequired,
    name,
    onBlur,
    onFocus,
    onChange,
    placeholder,
    type = 'text',
    value,
    label,
    style,
    spellCheck
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "Optional")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    disabled: Boolean(disabled),
    name: name,
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    ref: ref,
    type: type,
    value: value,
    error: Boolean(error),
    spellCheck: spellCheck,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, error));
});
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/client/components/ListFilter.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/ListFilter.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputField */ "./src/client/components/InputField.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/ListFilter.tsx";




const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1op9xzz0"
})({
  name: "iktmnx",
  styles: "margin:10px 0px;"
});

const ListFilter = ({
  list,
  setList,
  keys
}) => {
  const handleChange = e => {
    const term = e.target.value;
    setList(Object(match_sorter__WEBPACK_IMPORTED_MODULE_2__["matchSorter"])(list, term, {
      keys
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Filter",
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListFilter);

/***/ }),

/***/ "./src/universal/components/AppHeader.tsx":
/*!************************************************!*\
  !*** ./src/universal/components/AppHeader.tsx ***!
  \************************************************/
/*! exports provided: APP_HEADER_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_HEADER_HEIGHT", function() { return APP_HEADER_HEIGHT; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/isEmptyArray */ "./src/universal/utils/isEmptyArray.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/AppHeader.tsx";



const APP_HEADER_HEIGHT = 50;

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1vjj9hv0"
})({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 25px',
  backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BACKGROUND_MAIN,
  borderBottom: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_GRAY_NEW}`,
  minHeight: APP_HEADER_HEIGHT,
  minWidth: '100%'
});

const FlexItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1vjj9hv1"
})(prop => {
  return {
    flex: '1 1 0',
    textAlign: prop.center ? 'center' : 'inherit'
  };
});

const AppHeader = props => {
  const {
    leftBarItems,
    rightBarItems,
    midBarItems
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, rightBarItems), !Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_3__["default"])(rightBarItems) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    center: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, midBarItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, leftBarItems));
};

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./src/universal/components/BlockComponent.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/components/BlockComponent.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_blocks_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/blocks/Image */ "./src/universal/components/blocks/Image.tsx");
/* harmony import */ var universal_components_blocks_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/blocks/Number */ "./src/universal/components/blocks/Number.tsx");
/* harmony import */ var universal_components_blocks_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/blocks/Text */ "./src/universal/components/blocks/Text.tsx");
/* harmony import */ var universal_components_blocks_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/blocks/Email */ "./src/universal/components/blocks/Email.tsx");
/* harmony import */ var universal_components_blocks_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/blocks/Link */ "./src/universal/components/blocks/Link.tsx");
/* harmony import */ var universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/blocks/MediaBlock */ "./src/universal/components/blocks/MediaBlock.tsx");
/* harmony import */ var universal_components_blocks_Binary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/blocks/Binary */ "./src/universal/components/blocks/Binary.tsx");
/* harmony import */ var universal_components_blocks_Embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/blocks/Embed */ "./src/universal/components/blocks/Embed.tsx");
/* harmony import */ var universal_components_blocks_PdfReader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/blocks/PdfReader */ "./src/universal/components/blocks/PdfReader.tsx");
/* harmony import */ var universal_components_blocks_SingleSelection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/blocks/SingleSelection */ "./src/universal/components/blocks/SingleSelection.tsx");
/* harmony import */ var universal_components_blocks_NamedEntityRecognition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/blocks/NamedEntityRecognition */ "./src/universal/components/blocks/NamedEntityRecognition.tsx");
/* harmony import */ var universal_components_blocks_MultipleSelection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/components/blocks/MultipleSelection */ "./src/universal/components/blocks/MultipleSelection.tsx");
/* harmony import */ var universal_components_blocks_FormSequence__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/components/blocks/FormSequence */ "./src/universal/components/blocks/FormSequence.tsx");
/* harmony import */ var universal_components_blocks_RichTextEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! universal/components/blocks/RichTextEditor */ "./src/universal/components/blocks/RichTextEditor.tsx");
/* harmony import */ var universal_components_blocks_BoundingBoxes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! universal/components/blocks/BoundingBoxes */ "./src/universal/components/blocks/BoundingBoxes.tsx");
/* harmony import */ var universal_components_blocks_TextSequence__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! universal/components/blocks/TextSequence */ "./src/universal/components/blocks/TextSequence.tsx");
/* harmony import */ var universal_components_blocks_Date__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! universal/components/blocks/Date */ "./src/universal/components/blocks/Date.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/BlockComponent.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}




















const BlockComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(props => {
  const {
    isAudits,
    setFieldValue,
    isEditing,
    index,
    block,
    onDelete,
    handleChange,
    handleBlur,
    onEdit,
    errors
  } = props || {};
  let renderCmp;

  switch (block.type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].TEXT:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].EMAIL:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Email__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        error: _optionalChain([errors, 'optionalAccess', _ => _.email]),
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        handleBlur: handleBlur,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].NUMBER:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Number__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].LINK:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        error: _optionalChain([errors, 'optionalAccess', _2 => _2.link]),
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        handleBlur: handleBlur,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].IMAGE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].AUDIO:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].VIDEO:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MediaBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].BINARY:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Binary__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_NamedEntityRecognition__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].BOUNDING_BOXES:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_BoundingBoxes__WEBPACK_IMPORTED_MODULE_16__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        block: block,
        index: index,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].EMBED:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Embed__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].PDF:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_PdfReader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        error: errors,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].SINGLE_SELECTION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_SingleSelection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].MULTIPLE_SELECTION:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_MultipleSelection__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].FORM_SEQUENCE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_FormSequence__WEBPACK_IMPORTED_MODULE_14__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onEdit: onEdit,
        onDelete: onDelete,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].RICH_TEXT:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_RichTextEditor__WEBPACK_IMPORTED_MODULE_15__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].TEXT_SEQUENCE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_TextSequence__WEBPACK_IMPORTED_MODULE_17__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      });
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE:
      renderCmp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_blocks_Date__WEBPACK_IMPORTED_MODULE_18__["default"], {
        isAudits: isAudits,
        isEditing: isEditing,
        index: index,
        block: block,
        onDelete: onDelete,
        onEdit: onEdit,
        handleChange: handleChange,
        setFieldValue: setFieldValue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      });
      break;

    default:
      renderCmp = null;
  }

  return renderCmp;
});
/* harmony default export */ __webpack_exports__["default"] = (BlockComponent);

/***/ }),

/***/ "./src/universal/components/BlockHeader.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/BlockHeader.tsx ***!
  \**************************************************/
/*! exports provided: Container, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/IconButton */ "./src/universal/components/IconButton.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var client_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/BlockHeader.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}






const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ec495x90"
})({
  name: "1tvufdm",
  styles: "display:grid;grid-template-columns:25px 25px;visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.250s linear;position:absolute;right:-5px;background-color:#fff;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "ec495x91"
})({
  textAlign: 'center',
  display: 'block',
  fontSize: 18,
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].PRIMARY_MAIN
});

const TypeIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(StyledIcon, {
  target: "ec495x92"
})({
  color: client_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_GRAY_MID,
  cursor: 'default'
});

const BlockHeader = props => {
  const {
    onDelete,
    onEdit,
    isEditing,
    blockType
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "button",
    onClick: onEdit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "button",
    onClick: onDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "delete"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TypeIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _optionalChain([universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCKS"], 'access', _ => _.find, 'call', _2 => _2(b => b.type === blockType), 'optionalAccess', _3 => _3.icon])));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockHeader);

/***/ }),

/***/ "./src/universal/components/BlockWrapper.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/BlockWrapper.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const BlockWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e91a4cv0"
})(({
  type,
  index
}) => ({
  width: '100%',
  backgroundColor: '#fff !important',
  borderRadius: 4,
  border: '1px solid #e7e9ec',
  boxShadow: 'rgba(0, 0, 0, 0.025) 0px 2px 4px',
  zIndex: type === 'date' ? 10 - index : 1
}));

/* harmony default export */ __webpack_exports__["default"] = (BlockWrapper);

/***/ }),

/***/ "./src/universal/components/IconButton.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/IconButton.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/IconButton.tsx";




const Container = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "ek186l90"
})({
  cursor: 'pointer',
  backgroundColor: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  width: 25,
  height: 25,
  padding: 0,
  margin: 0,
  transition: 'all 200ms ease-in',
  ':hover': {
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
});

const IconButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    onClick,
    type,
    children,
    style
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: ref,
    onClick: onClick,
    type: type,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/universal/components/RGL.tsx":
/*!******************************************!*\
  !*** ./src/universal/components/RGL.tsx ***!
  \******************************************/
/*! exports provided: RGL_COLUMNS, RGL_ROWS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGL_COLUMNS", function() { return RGL_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGL_ROWS", function() { return RGL_ROWS; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/css/react-grid-layout.css */ "./src/universal/styles/css/react-grid-layout.css");
/* harmony import */ var universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/css/react-resizable.css */ "./src/universal/styles/css/react-resizable.css");
/* harmony import */ var universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/css/rgl-overide.css */ "./src/universal/styles/css/rgl-overide.css");
/* harmony import */ var universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(universal_styles_css_rgl_overide_css__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/RGL.tsx";





const RGLWidthProvider = Object(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["WidthProvider"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__["Responsive"]);
const RGL_COLUMNS = 20;
const RGL_ROWS = 40;

const RGLContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(RGLWidthProvider, {
  target: "epfjvic0"
})({
  name: "1xs5ypw",
  styles: "width:100%;min-height:calc(100vh - 50px);background-color:#f8f8fa;"
});

const RGLWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "epfjvic1"
})({
  name: "kjhdb2",
  styles: "height:100%;width:100%;overflow:scroll;"
});

const RGL = props => {
  const {
    children,
    isDraggable,
    isDroppable,
    isResizable,
    onDragStart,
    onDragStop,
    onDrop,
    onLayoutChange,
    layouts,
    droppingItem
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RGLWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RGLContainer, _objectSpread(_objectSpread({}, props), {}, {
    autoSize: true,
    breakpoints: {
      all: RGL_COLUMNS
    },
    cols: {
      all: RGL_COLUMNS
    },
    compactType: 'vertical',
    isDraggable: isDraggable,
    isDroppable: isDroppable,
    isBounded: true,
    droppingItem: droppingItem,
    isResizable: isResizable,
    layouts: {
      all: layouts
    },
    measureBeforeMount: true,
    useCSSTransforms: true,
    preventCollision: false,
    containerPadding: [10, 10],
    margin: [10, 10],
    onDragStart: onDragStart,
    onDragStop: onDragStop,
    onDrop: onDrop,
    rowHeight: RGL_ROWS,
    onLayoutChange: onLayoutChange,
    draggableHandle: ".drag-handle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), children));
};

/* harmony default export */ __webpack_exports__["default"] = (RGL);

/***/ }),

/***/ "./src/universal/components/TaggableListWrapper.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/TaggableListWrapper.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TaggableListWrapper.tsx";






const ListWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox0"
})({
  name: "2apgry",
  styles: "width:195px;min-width:195px;user-select:none;"
});

const List = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox1"
})({
  name: "u70tf2",
  styles: "cursor:auto;"
});

const ListLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1fn2uox2"
})({
  name: "1ut2p5e",
  styles: "font-weight:400;margin-top:20px;"
});

const CategoryButton = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox3"
})(({
  active
}) => ({
  cursor: 'pointer',
  background: 'white',
  clear: 'both',
  width: '100%',
  marginBottom: '5px',
  padding: '10px 10px',
  textAlign: 'left',
  border: active ? '1px solid #6648EE !important' : '1px solid #E8ECEE',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  ':hover': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.024)'
  }
}));

const EntityText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox4"
})({
  name: "qv8mh2",
  styles: "background:white;clear:both;width:100%;marginbottom:5px;padding:10px 10px;position:relative;textalign:left;border:1px solid white;boxshadow:0px 2px 4px rgba(0,0,0,0.024);borderradius:4px;display:flex;flexdirection:row;alignitems:center;cursor:default;&::selection{background:transparent;}&:hover{border:1px solid #e8ecee !important;border-radius:4px;i{display:block !important;opacity:0.6 !important;}}i{cursor:pointer;}"
});

const ColorArtifact = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1fn2uox5"
})(({
  color
}) => ({
  background: color,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  marginRight: '10px',
  border: `1px solid ${Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.3, color)}`
}));

const TaggableListWrapper = props => {
  const {
    options,
    text,
    selectedCategory,
    onSelect,
    disabled,
    objects,
    onHover,
    onClick
  } = props;

  const getOptionIndex = id => {
    let index;
    options.map((option, i) => {
      if (option.id === id) {
        index = i;
      }
    });
    return index;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CategoryButton, {
    key: optionIndex,
    onClick: () => {
      if (!disabled) {
        onSelect({
          tag: option.id,
          color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(optionIndex)
        });
      }
    },
    type: "button",
    active: !disabled && selectedCategory.tag === option.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(optionIndex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }), option.name))), Array.isArray(text) && text.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, "Entities"), text.map((item, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntityText, {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
      key: key,
      color: item.color,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      }
    }), item.text);
  })), Array.isArray(objects) && objects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Objects"), objects.map((item, key) => {
    const name = item.category.replace('_', ' ');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntityText, {
      key: key,
      onMouseEnter: () => {
        onHover(key);
      },
      onMouseLeave: () => {
        onHover(null);
      },
      onClick: e => {
        e.stopPropagation();
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorArtifact, {
      key: key,
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_5__["colorByIndex"])(getOptionIndex(item.category)),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      }
    }), name.charAt(0).toUpperCase() + name.slice(1), !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        fontSize: 18,
        position: 'absolute',
        right: '5px',
        top: '11px',
        display: 'none',
        color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN
      },
      onClick: () => {
        onClick(key);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      }
    }, "close"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaggableListWrapper);

/***/ }),

/***/ "./src/universal/components/TextSequence.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/TextSequence.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var client_components_RootButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/RootButton */ "./src/client/components/RootButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getItemStyle */ "./src/universal/utils/getItemStyle.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/TextSequence.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}











const portal = document.createElement('div');

if (!document.body) {
  throw new Error('body not ready for portal creation!');
}

document.body.appendChild(portal);

const IconButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_RootButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
  target: "e14q0dhs0"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].PRIMARY_MAIN
});

const FieldWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs1"
})({
  name: "139y8lg",
  styles: "display:grid;margin-bottom:2.5px;margin-top:2.5px;align-items:center;"
});

const ContentWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(FieldWrapper, {
  target: "e14q0dhs2"
})("grid-template-columns:1fr;", ({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && !orderingDisabled && !deleteDisabled ? `
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    &.focused {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
    &:hover {
      grid-template-columns: auto 1fr auto;
      grid-gap: 10px;
    }
` : ``, " ", ({
  isEditing
}) => isEditing ? `
  &.focused {
    grid-template-columns: 1fr auto;
  }
  &:hover {
    grid-template-columns: 1fr auto;
  }
` : ``, " ", ({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && orderingDisabled && !deleteDisabled ? `
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
  ` : ``, " ", ({
  isTask,
  deleteDisabled,
  orderingDisabled
}) => isTask && deleteDisabled && !orderingDisabled ? `
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
` : ``, " ", ({
  isAudits
}) => isAudits ? `
    grid-template-columns: 1fr;
  ` : ``);

const ContentBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs3"
})({
  name: "1hb0vzk",
  styles: "padding:5px 0;display:flex;flex-direction:column;"
});

const InputWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14q0dhs4"
})(({
  isTask,
  orderingDisabled,
  deleteDisabled
}) => isTask && !orderingDisabled && !deleteDisabled ? `
      margin: 0px;
      ` : ``, " ", ({
  isTask,
  deleteDisabled,
  orderingDisabled
}) => isTask && deleteDisabled && orderingDisabled ? `
      margin: 0px;
      ` : ``, " ", ({
  isEditing,
  deleteDisabled
}) => isEditing && !deleteDisabled ? `
      margin-right: 25px;
      ${ContentWrapper}:hover & {
        margin-right: 10px;
      }
      &.focused {
        margin-right: 10px;
      }
      ` : ``);

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
  target: "e14q0dhs5"
})(({
  isTask,
  orderingDisabled
}) => isTask && !orderingDisabled ? `
    visibility: hidden;
    &.focused {
      visibility: visible;
    }
    ${ContentWrapper}:hover & {
      visibility: visible;
    }
  ` : ``, " ", ({
  isTask,
  orderingDisabled
}) => isTask && orderingDisabled ? `
    display: none;
  ` : ``, " ", ({
  isEditing
}) => isEditing ? `
      display: none;
      &.focused {
        display: block;
      }

      ${ContentWrapper}:hover & {
        display: block;
      }
    ` : ``);

const BlockInput = ({
  provided,
  snapshot,
  seqIdx,
  data,
  index,
  type,
  setFieldValue,
  targetName,
  placeholder,
  isAudits,
  arrayHelpers,
  isEditing,
  settings
}) => {
  const setFocusStyles = (elements, action) => {
    elements.forEach(id => {
      const element = document.getElementById(id);

      _optionalChain([element, 'optionalAccess', _2 => _2.classList, 'access', _3 => _3[action], 'call', _4 => _4('focused')]);
    });
  };

  const isTask = !isEditing && !isAudits;
  const showDelete = isAudits ? false : !settings.deleteDisabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, _objectSpread(_objectSpread({}, provided.draggableProps), {}, {
    ref: provided.innerRef,
    style: Object(universal_utils_getItemStyle__WEBPACK_IMPORTED_MODULE_10__["default"])(snapshot.isDragging, provided.draggableProps.style),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }), data.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    id: `content-wrapper-${seqIdx}`,
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    orderingDisabled: settings.orderingDisabled,
    deleteDisabled: settings.deleteDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, isTask && !settings.orderingDisabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, _objectSpread(_objectSpread({}, provided.dragHandleProps), {}, {
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    id: `drag-icon-${seqIdx}`,
    orderingDisabled: settings.orderingDisabled,
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].TEXT_MAIN
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }), "drag_indicator") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
    id: `input-wrapper-${seqIdx}`,
    isAudits: isAudits,
    isEditing: isEditing,
    isTask: isTask,
    orderingDisabled: settings.orderingDisabled,
    deleteDisabled: settings.deleteDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: `data[${index}][${type}].value[${seqIdx}]`,
    cacheMeasurements: true,
    type: "text",
    onFocus: () => setFocusStyles([`content-wrapper-${seqIdx}`, `drag-icon-${seqIdx}`, `close-icon-${seqIdx}`, `input-wrapper-${seqIdx}`], 'add'),
    onBlur: () => setFocusStyles([`content-wrapper-${seqIdx}`, `drag-icon-${seqIdx}`, `close-icon-${seqIdx}`, `input-wrapper-${seqIdx}`], 'remove'),
    onKeyDown: e => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    },
    onChange: e => {
      const {
        value
      } = e.target;
      setFieldValue(`${targetName}[${seqIdx}]`, value);
    },
    value: data[seqIdx],
    placeholder: _optionalChain([placeholder, 'optionalAccess', _5 => _5[seqIdx]]) || 'Text',
    readOnly: isAudits,
    disabled: settings.editDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    }
  })), showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconButton, {
    type: "button",
    disabled: isAudits,
    onClick: () => arrayHelpers.remove(seqIdx),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    isAudits: isAudits,
    isEditing: isEditing,
    deleteDisabled: settings.deleteDisabled,
    id: `close-icon-${seqIdx}`,
    style: {
      fontSize: 15,
      color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_8__["PALETTE"].TEXT_MAIN
    },
    isTask: isTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    }
  }, "close"))));
};

const TextSequence = props => {
  const {
    name,
    data,
    index,
    isEditing,
    type,
    isAudits,
    targetName,
    setFieldValue,
    placeholder,
    settings
  } = props;
  const onDragEnd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(result => {
    const {
      destination,
      source,
      draggableId
    } = result;

    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const changedItem = data[draggableId];
    const newList = data;
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, changedItem);
    setFieldValue(`data[${index}][${type}].value`, newList);
  }, [data, index]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
    name: name,
    render: arrayHelpers => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["DragDropContext"], {
        onDragEnd: onDragEnd,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Droppable"], {
        droppableId: "dropable-list",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, provided => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', _objectSpread(_objectSpread({}, provided.droppableProps), {}, {
        ref: provided.innerRef,
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldWrapper, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, Array.isArray(data) && data.map((_, seqIdx) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
          key: seqIdx,
          draggableId: String(seqIdx),
          isDragDisabled: isEditing || isAudits || settings.orderingDisabled,
          index: seqIdx,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          }
        }, (provided, snapshot) => {
          const usePortal = snapshot.isDragging;
          const child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlockInput, {
            provided: provided,
            snapshot: snapshot,
            seqIdx: seqIdx,
            data: data,
            index: index,
            type: type,
            setFieldValue: setFieldValue,
            targetName: targetName,
            placeholder: placeholder,
            isAudits: isAudits,
            arrayHelpers: arrayHelpers,
            isEditing: isEditing,
            settings: settings,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            }
          });

          if (!usePortal) {
            return child;
          }

          return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(child, portal);
        });
      })), provided.placeholder, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentBlock, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: "button",
        disabled: isAudits || settings.editDisabled,
        onClick: () => {
          arrayHelpers.push('');
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, "Add Item")))));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    }
  });
};

TextSequence.defaultProps = {
  settings: {
    deleteDisabled: false,
    editDisabled: false,
    orderingDisabled: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TextSequence);

/***/ }),

/***/ "./src/universal/components/bbox-annotator/BBoxAnnotator.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/components/bbox-annotator/BBoxAnnotator.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BBoxSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BBoxSelector */ "./src/universal/components/bbox-annotator/BBoxSelector.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/bbox-annotator/BBoxAnnotator.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}






const BBoxAnnotator = ({
  url,
  borderWidth = 2,
  selectedLabel,
  onChange,
  objects,
  disabled,
  highlightIndex
}) => {
  const [pointer, setPointer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [offset, setOffset] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [entries, setEntries] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(objects);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onChange(entries.map(entry => ({
      w: +parseFloat(entry.w).toFixed(2),
      h: +parseFloat(entry.h).toFixed(2),
      y: +parseFloat(entry.y).toFixed(2),
      x: +parseFloat(entry.x).toFixed(2),
      category: entry.category,
      color: entry.color
    })));
  }, [entries]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Array.isArray(objects) && Array.isArray(entries) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEqual(objects.sort(), entries.sort())) {
      setEntries(objects);
    }
  }, [objects]);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('free');
  const [imageFrameStyle, setImageFrameStyle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const bBoxImageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const imageElement = new Image();
    imageElement.src = url;

    imageElement.onload = () => {
      const width = imageElement.width;
      const height = imageElement.height;
      setImageFrameStyle({
        backgroundImageSrc: imageElement.src,
        width: width,
        height: height
      });
    };
  }, [bBoxImageRef, url]);

  const crop = (pageX, pageY) => {
    const x = bBoxImageRef.current && imageFrameStyle.width ? Math.min(Math.max(Math.round(pageX - bBoxImageRef.current.getBoundingClientRect().x), 0), _optionalChain([bBoxImageRef, 'access', _2 => _2.current, 'optionalAccess', _3 => _3.offsetWidth])) / _optionalChain([bBoxImageRef, 'access', _4 => _4.current, 'optionalAccess', _5 => _5.offsetWidth]) * 100 : 0;
    const y = bBoxImageRef.current && imageFrameStyle.height ? Math.min(Math.max(Math.round(pageY - bBoxImageRef.current.getBoundingClientRect().y), 0), _optionalChain([bBoxImageRef, 'access', _6 => _6.current, 'optionalAccess', _7 => _7.offsetHeight])) / _optionalChain([bBoxImageRef, 'access', _8 => _8.current, 'optionalAccess', _9 => _9.offsetHeight]) * 100 : 0;
    return {
      x,
      y
    };
  };

  const updateRectangle = (pageX, pageY) => {
    setPointer(crop(pageX, pageY));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!disabled) {
      const mouseMoveHandler = e => {
        e.preventDefault();

        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY);
        }
      };

      _optionalChain([bBoxImageRef, 'access', _10 => _10.current, 'optionalAccess', _11 => _11.addEventListener, 'call', _12 => _12('mousemove', mouseMoveHandler)]);

      return () => _optionalChain([bBoxImageRef, 'access', _13 => _13.current, 'optionalAccess', _14 => _14.removeEventListener, 'call', _15 => _15('mousemove', mouseMoveHandler)]);
    }
  }, [status]);

  const mouseDownHandler = e => {
    e.stopPropagation();

    if (e.button !== 2 && !disabled) {
      setOffset(crop(e.pageX, e.pageY));
      setPointer(crop(e.pageX, e.pageY));
      setStatus('hold');
    }
  };

  const mouseMoveHandler = e => {
    e.stopPropagation();
    const currentPointer = crop(e.pageX, e.pageY);
    setPointer(currentPointer);

    const hasMoved = currentPointer.x !== _optionalChain([offset, 'optionalAccess', _16 => _16.x]) && currentPointer.y !== _optionalChain([offset, 'optionalAccess', _17 => _17.y]);

    if (status === 'hold' && hasMoved) {
      setStatus('moved');
    }
  };

  const rectangle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const x1 = offset && pointer ? Math.min(offset.x, pointer.x) : 0;
    const x2 = offset && pointer ? Math.max(offset.x, pointer.x) : 0;
    const y1 = offset && pointer ? Math.min(offset.y, pointer.y) : 0;
    const y2 = offset && pointer ? Math.max(offset.y, pointer.y) : 0;
    return {
      x: x1,
      y: y1,
      w: x2 - x1,
      h: y2 - y1
    };
  }, [pointer, offset]);
  const rect = rectangle();
  const boxRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!disabled) {
      const mouseUpHandler = e => {
        e.preventDefault();
        e.stopPropagation();

        if (status === 'moved') {
          updateRectangle(e.pageX, e.pageY);
          setEntries([...entries, _objectSpread(_objectSpread({}, rect), {}, {
            category: selectedLabel.tag,
            color: selectedLabel.color
          })]);
        }

        setStatus('free');
      };

      _optionalChain([boxRef, 'optionalAccess', _18 => _18.current, 'optionalAccess', _19 => _19.addEventListener, 'call', _20 => _20('mouseup', mouseUpHandler)]);

      return () => _optionalChain([boxRef, 'optionalAccess', _21 => _21.current, 'optionalAccess', _22 => _22.removeEventListener, 'call', _23 => _23('mouseup', mouseUpHandler)]);
    }
  }, [boxRef, status, rect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    onMouseDownCapture: mouseDownHandler,
    onMouseMoveCapture: mouseMoveHandler,
    draggable: false,
    ref: boxRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      position: 'relative',
      float: `left`,
      cursor: !disabled ? 'crosshair' : 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
    draggable: false,
    style: {
      maxWidth: `100%`,
      maxHeight: `100%`,
      float: `left`
    },
    ref: bBoxImageRef,
    src: imageFrameStyle.backgroundImageSrc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }), status === 'moved' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BBoxSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rectangle: rect,
    color: selectedLabel.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }) : null, entries.map((entry, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      border: `${borderWidth}px solid ${entry.color || Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__["colorByIndex"])(i)}`,
      position: 'absolute',
      top: `${entry.y}%`,
      left: `${entry.x}%`,
      width: `${entry.w}%`,
      height: `${entry.h}%`,
      pointerEvents: 'none'
    },
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      height: `100%`,
      background: `${entry.color || Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_2__["colorByIndex"])(i)}`,
      opacity: highlightIndex === i ? `0.5` : `0.2`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (BBoxAnnotator);

/***/ }),

/***/ "./src/universal/components/bbox-annotator/BBoxSelector.tsx":
/*!******************************************************************!*\
  !*** ./src/universal/components/bbox-annotator/BBoxSelector.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/bbox-annotator/BBoxSelector.tsx";


const BBoxSelector = ({
  rectangle,
  borderWidth = 2,
  color
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      left: `${rectangle.x}%`,
      top: `${rectangle.y}%`,
      width: `${rectangle.w}%`,
      height: `${rectangle.h}%`,
      border: `${borderWidth || 2}px solid ${color}`,
      borderWidth: `${borderWidth || 2}px`,
      position: 'absolute',
      pointerEvents: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    draggable: false,
    style: {
      width: `100%`,
      height: `100%`,
      background: `${color}`,
      opacity: `0.2`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BBoxSelector);

/***/ }),

/***/ "./src/universal/components/blocks/Binary.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/blocks/Binary.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Binary.tsx";









const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "etqvrm70"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const Binary = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    setFieldValue,
    index
  } = props || {};
  const {
    binary,
    name,
    id,
    _id
  } = block;
  const {
    value
  } = binary || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].BINARY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    autoFocus: false,
    name: `data.${index}.binary.value`,
    id: `${_id}-true`,
    value: "true",
    label: "Yes",
    onChange: () => setFieldValue(`data.${index}.binary.value`, true),
    checked: value === true,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    autoFocus: false,
    name: `data.${index}.binary.value`,
    id: `${_id}-false`,
    value: "false",
    label: "No",
    onChange: () => setFieldValue(`data.${index}.binary.value`, false),
    checked: value === false,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Binary);

/***/ }),

/***/ "./src/universal/components/blocks/BoundingBoxes.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/components/blocks/BoundingBoxes.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/TaggableListWrapper */ "./src/universal/components/TaggableListWrapper.tsx");
/* harmony import */ var _bbox_annotator_BBoxAnnotator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bbox-annotator/BBoxAnnotator */ "./src/universal/components/bbox-annotator/BBoxAnnotator.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/BoundingBoxes.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}












const ImageWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "es0uq7l0"
})({
  name: "1w4x1lc",
  styles: "flex-grow:1;margin-right:10px;margin-bottom:10px;overflow:hidden;position:relative;width:100%;"
});

const BoundingBoxes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing,
    setFieldValue,
    index,
    isAudits
  } = props;
  const {
    name
  } = block;
  const {
    placeholder,
    options,
    value
  } = block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES] || {};
  const [objects, setObjects] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_optionalChain([value, 'optionalAccess', _2 => _2.objects]) || []);
  const [highlightIndex, setHighlightIndex] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const renderValue = isEditing || value.image === '' ? placeholder || '' : value.image;
  const [selectedLabel, setSelectedLabel] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    tag: options[0].id,
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_10__["colorByIndex"])(0)
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setObjects(_optionalChain([value, 'optionalAccess', _3 => _3.objects]));
  }, [block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES]]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES}].value.objects`, isEditing ? [] : _optionalChain([value, 'optionalAccess', _4 => _4.objects]));
    setObjects(isEditing ? [] : _optionalChain([value, 'optionalAccess', _5 => _5.objects]));
  }, [placeholder, options]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    style: {
      display: 'block',
      maxWidth: '100%',
      minWidth: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    row: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWrapper, {
    onMouseDown: e => {
      e.stopPropagation();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, renderValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bbox_annotator_BBoxAnnotator__WEBPACK_IMPORTED_MODULE_9__["default"], {
    url: renderValue,
    selectedLabel: selectedLabel,
    objects: objects,
    highlightIndex: highlightIndex,
    disabled: isAudits,
    onChange: e => {
      setObjects(e);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].BOUNDING_BOXES}].value.objects`, e);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    options: options,
    objects: objects,
    disabled: isAudits,
    onSelect: label => {
      setSelectedLabel(label);
    },
    onHover: index => {
      setHighlightIndex(index);
    },
    onClick: index => {
      setObjects(objects.filter((_, i) => i !== index));
    },
    selectedCategory: selectedLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (BoundingBoxes);

/***/ }),

/***/ "./src/universal/components/blocks/Content.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/components/blocks/Content.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentWrapper; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Content.tsx";




const Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1eg38ed0"
})("height:100%;padding:10px;display:flex;flex-direction:column;z-index:1;overflow:", ({
  overflow
}) => overflow ? overflow : 'auto', ";&:hover ", _components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["Container"], "{visibility:visible;opacity:1;}");

const ContentContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1eg38ed1"
})({
  name: "1g4yje1",
  styles: "display:flex;flex-direction:column;height:100%;"
});

const DragHandle = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
  target: "e1eg38ed2"
})("height:30px;width:30px;position:fixed;left:50%;z-index:10;top:-15px;cursor:", ({
  isEditing
}) => isEditing ? 'grab' : 'inherit', ";display:none !important;display:", ({
  isEditing
}) => isEditing ? 'block' : 'none', ";", ContentContainer, ":hover &{display:", ({
  isEditing
}) => isEditing ? 'block' : 'none', " !important;}&.dragging{cursor:grabbing;}");

function ContentWrapper({
  children,
  isEditing,
  overflow
}) {
  const addDraggingStyles = e => {
    e.target.classList.add('dragging');
  };

  const removeDraggingStyles = e => {
    e.target.classList.remove('dragging');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DragHandle, {
    className: "drag-handle",
    isEditing: isEditing,
    style: {
      fontSize: 18,
      color: '#686869'
    },
    onMouseOut: removeDraggingStyles,
    onMouseDown: addDraggingStyles,
    onMouseUp: removeDraggingStyles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, "drag_handle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    isEditing: isEditing,
    overflow: overflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, children));
}

/***/ }),

/***/ "./src/universal/components/blocks/Date.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Date.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/DatePicker */ "./src/universal/components/DatePicker.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Date.tsx";










const DateBlock = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    setFieldValue,
    isEditing,
    index
  } = props;
  const {
    date,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = date || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].DATE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, readOnly || isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_8__["getDisplayFormat"])(renderValue)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_DatePicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.date.value`,
    value: renderValue,
    readOnly: readOnly || isAudits,
    placeholder: placeholder,
    setFieldValue: setFieldValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DateBlock);

/***/ }),

/***/ "./src/universal/components/blocks/Email.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Email.tsx ***!
  \***************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Email; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Email.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}










const StyledLink = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "e16yuwdr0"
})({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].LINK,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word'
});
function Email(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    index,
    error,
    handleBlur,
    handleChange
  } = props;
  const {
    email,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = email || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].EMAIL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "email",
    name: `data.${index}.email.value`,
    value: renderValue || "",
    hideErrorMessage: true,
    error: _optionalChain([error, 'optionalAccess', _ => _.value]),
    autoFocus: false,
    onChange: handleChange,
    onBlur: handleBlur,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    href: `mailto:${renderValue}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, renderValue)));
}

/***/ }),

/***/ "./src/universal/components/blocks/Embed.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Embed.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Embed.tsx";








const IFrame = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("iframe", {
  target: "eevjo720"
})({
  name: "np0iat",
  styles: "width:100%;height:100%;border:0;"
});

const Embed = props => {
  const {
    block,
    onEdit,
    onDelete,
    isEditing,
    error,
    index
  } = props || {};
  const {
    embed,
    name
  } = block;
  const {
    value,
    placeholder
  } = embed || {};
  let sourceUrl = isEditing ? placeholder : value;

  if (error.data && error.data[index] && error.data.length) {
    sourceUrl = '';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    overflow: `hidden`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].EMBED,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IFrame, {
    src: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Embed);

/***/ }),

/***/ "./src/universal/components/blocks/FormSequence.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/blocks/FormSequence.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/TaskCheckbox */ "./src/universal/components/TaskCheckbox.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/FormSequence.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}
















const ButtonBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox0"
})({
  name: "1hx5wtv",
  styles: "display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;flex:0 0 auto;"
});

const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox1"
})({
  name: "o6l5fu",
  styles: "padding:5px 0;"
});

const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox2"
})({
  name: "tjjfeh",
  styles: "height:100%;width:100%;display:flex;flex-direction:column;"
});

const Item = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emzfyox3"
})({
  name: "1rr4qq7",
  styles: "flex:1;"
});

const assignNextAndBackVisibility = (currentIdx, currentType, nextBlockId, nextBlockIndex, value, data) => {
  let isNextDisabled = false;
  let isBackDisabled = false;
  isBackDisabled = currentIdx === 0;

  if (currentIdx === data.length - 1) {
    if (nextBlockIndex === -1) {
      isNextDisabled = true;
    }
  } else {
    if (currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION || currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY) {
      if (!value) isNextDisabled = true;
    } else {
      if (value === '' || value === null) {
        isNextDisabled = true;
      } else {
        isNextDisabled = false;
      }
    }
  }

  if (!nextBlockId !== null && nextBlockId !== undefined) {
    isNextDisabled = false;
  } else if (nextBlockId === null) {
    isNextDisabled = true;
  }

  return {
    isNextDisabled,
    isBackDisabled
  };
};

const FormSequence = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const [currentIdx, setCurrentIdx] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    isAudits,
    block,
    onDelete,
    handleChange,
    index,
    isEditing,
    onEdit,
    setFieldValue
  } = props;
  const {
    name,
    type,
    _id
  } = block || {};
  const {
    data,
    history = []
  } = block[type];
  const currentBlock = data[currentIdx];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isAudits) return;

    if (currentBlock && _optionalChain([history, 'optionalAccess', _ => _.length]) > 0) {
      const lastBlockId = history.pop();
      const lastBlockIdx = data.findIndex(({
        id
      }) => id === lastBlockId);
      setCurrentIdx(lastBlockIdx + 1);
    }
  }, []);
  if (!currentBlock) return null;
  const {
    type: currentType,
    name: currentBlockName
  } = currentBlock;
  const {
    value = ''
  } = currentBlock[currentType];
  const nextBlockId = _optionalChain([currentBlock, 'optionalAccess', _2 => _2.logic_jump]) ? currentBlock.logic_jump[value] : undefined;
  const nextBlockIndex = data.findIndex(block => block.id === nextBlockId);
  const logicBlocks = [universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY, universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION];

  const handleNext = arrayHelpers => {
    if (logicBlocks.includes(currentType)) {
      if (!nextBlockId) {
        arrayHelpers.push(currentBlock.id);
        setCurrentIdx(currentIdx + 1);
      } else {
        if (nextBlockIndex !== -1) {
          arrayHelpers.push(currentBlock.id);
          setCurrentIdx(nextBlockIndex);
        } else {
          console.error('Error: unable to find next block ID');
        }
      }
    } else {
      // pop current index into history
      arrayHelpers.push(currentBlock.id);
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleBack = () => {
    if (_optionalChain([history, 'optionalAccess', _3 => _3.length]) <= 0) {
      setCurrentIdx(0);
    } else {
      const stackedId = history.pop();
      const nextBlockIndex = data.findIndex(block => block.id === stackedId);

      if (nextBlockIndex !== -1) {
        setCurrentIdx(nextBlockIndex);
      } else {
        setCurrentIdx(0);
      }
    }
  };

  const {
    isNextDisabled,
    isBackDisabled
  } = assignNextAndBackVisibility(currentIdx, currentType, nextBlockId, nextBlockIndex, value, data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["FieldArray"], {
    name: `data.${index}.${type}.history`,
    render: arrayHelpers => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_14__["default"], _objectSpread(_objectSpread({}, props), {}, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      }
    }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      }
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onDelete: onDelete,
      onEdit: onEdit,
      isEditing: isEditing,
      blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].FORM_SEQUENCE,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: "button",
      disabled: isBackDisabled,
      onClick: () => handleBack(arrayHelpers),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      }
    }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "button",
      disabled: isNextDisabled,
      onClick: () => handleNext(arrayHelpers),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      }
    }, "Next")), currentBlockName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      }
    }, currentBlockName), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].TEXT && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      autoFocus: false,
      value: value,
      style: {
        flex: 1
      },
      disabled: isAudits,
      key: _optionalChain([currentBlock, 'optionalAccess', _4 => _4.id]),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      }
    }), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].NUMBER && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "number",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].EMAIL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "email",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].LINK && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      onChange: handleChange,
      type: "text",
      autoFocus: false,
      value: value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      }
    })), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].BINARY && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${_id}-${currentIdx}-true`,
      value: "true",
      label: "Yes",
      onChange: () => setFieldValue(`data.${index}.${type}.data.${currentIdx}.${currentType}.value`, true),
      checked: value === true,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${_id}-${currentIdx}-false`,
      value: "false",
      label: "No",
      onChange: () => setFieldValue(`data.${index}.${type}.data.${currentIdx}.${currentType}.value`, false),
      checked: value === false,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      }
    }))), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].SINGLE_SELECTION && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      }
    }, currentBlock[currentType].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${index}-${optionIndex}`,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: option.id === value,
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      }
    })))), currentType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_5__["BLOCK_TYPE"].MULTIPLE_SELECTION && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      }
    }, currentBlock[currentType].options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
      key: optionIndex,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: `data.${index}.${type}.data.${currentIdx}.${currentType}.value`,
      id: `${index}-${optionIndex}`,
      value: option.id,
      label: option.name,
      onChange: handleChange,
      checked: value && value.includes(option.id),
      disabled: isAudits,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      }
    }))))))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (FormSequence);

/***/ }),

/***/ "./src/universal/components/blocks/HeaderContainer.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/components/blocks/HeaderContainer.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/HeaderContainer.tsx";


const HeaderContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e20h3ap0"
})({
  name: "gum8km",
  styles: "align-items:center;display:flex;flex-direction:row;justify-content:space-between;flex:0 0 auto;height:auto;background:white;z-index:11;position:relative;user-select:none;"
});

/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
}, children));

/***/ }),

/***/ "./src/universal/components/blocks/Image.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Image.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Image.tsx";








const StyledImg = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("img", {
  target: "e1vflmxe0"
})({
  name: "10tv4cy",
  styles: "object-fit:contain;max-width:100%;max-height:100%;width:auto;height:auto;"
});

const Image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["memo"](props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing
  } = props;
  const {
    name,
    type,
    id,
    image
  } = block;
  const {
    value,
    placeholder
  } = image || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, props), {}, {
    style: {
      display: 'block',
      maxWidth: '100%',
      minWidth: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].IMAGE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, renderValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](StyledImg, {
    src: renderValue,
    alt: name || type,
    title: name || type,
    onDragStart: e => e.preventDefault(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/universal/components/blocks/Label.tsx":
/*!***************************************************!*\
  !*** ./src/universal/components/blocks/Label.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e13k15rh0"
})({
  name: "18ugfwx",
  styles: "font-weight:500;font-size:15px;"
});

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/universal/components/blocks/Link.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Link.tsx ***!
  \**************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Link.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}










const StyledLink = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "e1fp8dlm0"
})({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_7__["PALETTE"].LINK,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word'
});
function Link(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    isEditing,
    index,
    error,
    handleBlur,
    handleChange
  } = props;
  const {
    link,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = link || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].LINK,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "text",
    name: `data.${index}.link.value`,
    value: renderValue || "",
    hideErrorMessage: true,
    error: _optionalChain([error, 'optionalAccess', _ => _.value]),
    autoFocus: false,
    onChange: handleChange,
    onBlur: handleBlur,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    href: `${renderValue}`,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, renderValue)));
}

/***/ }),

/***/ "./src/universal/components/blocks/MediaBlock.tsx":
/*!********************************************************!*\
  !*** ./src/universal/components/blocks/MediaBlock.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/hooks/usePrevious */ "./src/universal/hooks/usePrevious.ts");
/* harmony import */ var _BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_9__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/MediaBlock.tsx";









const options = {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
};

const VideoPlayer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ez974t10"
})(({
  show,
  hideOverflow
}) => ({
  display: show === false ? 'none' : 'block',
  overflow: hideOverflow ? 'hidden' : 'visible',
  zIndex: 1
}));

const MediaBlock = props => {
  const {
    block,
    onDelete,
    onEdit,
    isEditing
  } = props;
  const {
    name,
    type,
    id
  } = block;
  const {
    value,
    placeholder
  } = block[type] || {};
  const sourceUrl = isEditing ? value || placeholder : value;
  const prevSourceUrl = Object(universal_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__["default"])(sourceUrl);
  const sources = {
    type: type,
    sources: [{
      src: sourceUrl
    }]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (prevSourceUrl !== sourceUrl) {
      const el = document.getElementById(`plyr-${id}`); // @ts-ignore

      const player = new plyr__WEBPACK_IMPORTED_MODULE_8___default.a(el, options); // @ts-ignore

      player.source = sources;
      return () => player.destroy();
    }

    return;
  }, [sourceUrl]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoPlayer, {
    show: sourceUrl !== '' && sourceUrl !== undefined,
    hideOverflow: type === 'video',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('video', {
    id: `plyr-${id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MediaBlock);

/***/ }),

/***/ "./src/universal/components/blocks/MultipleSelection.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/components/blocks/MultipleSelection.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskCheckbox */ "./src/universal/components/TaskCheckbox.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/ListFilter */ "./src/client/components/ListFilter.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/MultipleSelection.tsx";










const Checkbox = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ayrd540"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const MultiClass = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    isAudits,
    block,
    onDelete,
    handleChange,
    index,
    isEditing,
    onEdit
  } = props;
  const {
    name,
    type
  } = block;
  const {
    value
  } = block['multiple_selection'] || {};
  const isTask = !isEditing && !isAudits;
  const [list, setList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(block[type].options);
  const options = isEditing ? block[type].options : list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].MULTIPLE_SELECTION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })), isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    list: block[type].options,
    setList: setList,
    keys: ['name'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Checkbox, {
    key: optionIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskCheckbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: `data.${index}.multiple_selection.value`,
    id: `${index}-${optionIndex}`,
    value: option.id,
    label: option.name,
    onChange: handleChange,
    checked: value && value.includes(option.id),
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (MultiClass);

/***/ }),

/***/ "./src/universal/components/blocks/NamedEntityRecognition.tsx":
/*!********************************************************************!*\
  !*** ./src/universal/components/blocks/NamedEntityRecognition.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/components/TaggableListWrapper */ "./src/universal/components/TaggableListWrapper.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_text_annotator_TextAnnotator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/text-annotator/TextAnnotator */ "./src/universal/components/text-annotator/TextAnnotator.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/NamedEntityRecognition.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}















const ButtonBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis0"
})({
  name: "12h07at",
  styles: "display:grid;margin-bottom:10px;margin-top:10px;grid-template-columns:80px 80px;grid-gap:10px;"
});

const Wrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis1"
})(({
  editMode
}) => _objectSpread({}, editMode && {
  display: 'grid',
  gridTemplateRows: 'auto 50px'
}));

const TextWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1gz0wis2"
})(({
  highlightColor
}) => `
    cursor: auto;
    flex-grow: 1;
    padding-right: 10px;
    padding-bottom: 10px;
    line-height: 25px;
    margin-left: -10px;
    white-space: pre-wrap;
    & mark {
      padding: 4px !important;
      position: relative;
      cursor: pointer;
      &:hover:after {
        font-size: 8px;
        color: #000;
        white-space:nowrap;
        top: 0;
        line-height: 11px;
        left: 0;
        position: absolute;
        content: 'x';
        font-weight: bold;
        z-index: 11;
        width: 11px;
        background: white;
        text-align: center;
        opacity: 0.5;
      }
    }
    & mark > span {
      display: none;
    }

    & span {

      &::selection {
        background: ${highlightColor};
      }
    }
`);

const NamedEntityRecognition = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    block,
    onDelete,
    isEditing,
    onEdit,
    setFieldValue,
    index,
    isAudits
  } = props;
  const {
    name
  } = block;
  const {
    allow_edits: allowEdits,
    placeholder,
    options,
    value = '',
    entities = []
  } = block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION] || {};
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(entities);
  const [userSelect, setUserSelect] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [disableSelection, setDisableSelection] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [editMode, togglEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [selectedCategory, setSelectedCategory] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    tag: options[0].id,
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(0)
  });
  const renderText = isEditing || value === '' ? placeholder || '' : value;
  let textFieldName = `data.${index}.${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}.value`;

  if (isEditing || value === '') {
    textFieldName = `data.${index}.${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}.placeholder`;
  }

  const [textFieldValue, setTextFieldValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(renderText);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // reset tags when placeholder and options changed
    if (isEditing) {
      setText([]);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, []);
    } else {
      setText(entities);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, entities);
    }
  }, [placeholder, options]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, isEditing ? [] : text);
  }, [text]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSelectedCategory({
      tag: options[0].id,
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(0)
    });
  }, [options]);
  const handleTextChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    const {
      value
    } = e.target;
    setTextFieldValue(value);
  }, [textFieldValue]);

  const formatEntitiesForUIRendering = entities => {
    const entitiesInstance = entities;
    return entitiesInstance.filter(itm => {
      const [optionName, index] = findOptionNameFromId(itm.tag);

      if (!optionName) {
        return false;
      }

      itm.color = Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_13__["colorByIndex"])(index);
      return itm;
    });
  };

  const findOptionNameFromId = id => {
    let name;
    let index;
    options.map((option, i) => {
      if (option.id === id) {
        name = option.name;
        index = i;
      }
    });
    return [name, index];
  };

  const handleAnnotate = text => {
    if (userSelect) {
      setUserSelect(false);
      return false;
    }

    if (!isAudits) {
      setText(text);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, isEditing ? [] : text);
      setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].value`, renderText);
    }
  };

  const boxRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const inputRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (boxRef !== undefined && boxRef.current !== undefined) {
      boxRef.current.addEventListener('mouseup', e => {
        if (e.detail >= 3) {
          setUserSelect(true);
          e.preventDefault();
        }
      });
    }
  }, [boxRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (_optionalChain([inputRef, 'optionalAccess', _ => _.current])) {
      _optionalChain([inputRef, 'optionalAccess', _2 => _2.current, 'optionalAccess', _3 => _3.style, 'access', _4 => _4.setProperty, 'call', _5 => _5('height', '100%', 'important')]);
    }
  }, [inputRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    row: true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 195px',
      gridGap: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    editMode: editMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    style: {
      height: '90% !important'
    },
    positionErrorBelow: false,
    value: textFieldValue,
    onChange: handleTextChange,
    scrollable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, {
    onMouseDown: e => {
      e.stopPropagation();
    },
    onMouseEnter: () => {
      setDisableSelection(false);
    },
    onMouseLeave: () => {
      setDisableSelection(true);
      window.getSelection().empty();
    },
    style: {
      userSelect: disableSelection ? 'none' : 'auto'
    },
    highlightColor: selectedCategory.color,
    ref: boxRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_text_annotator_TextAnnotator__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      paddingLeft: '10px'
    },
    content: renderText,
    value: formatEntitiesForUIRendering(text),
    onChange: handleAnnotate,
    getSpan: span => _objectSpread(_objectSpread({}, span), selectedCategory),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    }
  })), allowEdits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    }
  }, editMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: '100%',
      marginRight: 10
    },
    type: "button",
    disabled: false,
    onClick: () => {
      togglEditMode(false);
      setTextFieldValue(renderText);
    },
    hideFocus: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: '100%'
    },
    type: "button",
    disabled: false,
    onClick: () => {
      if (!isEditing) {
        setText([]);
        setFieldValue(`data[${index}][${universal_utils_constants__WEBPACK_IMPORTED_MODULE_11__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION}].entities`, []);
      }

      setFieldValue(textFieldName, textFieldValue);
      togglEditMode(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    }
  }, "Save")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: '100%'
    },
    type: "button",
    onClick: () => togglEditMode(true),
    hideFocus: true,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    }
  }, "Edit Text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaggableListWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: options,
    onSelect: category => {
      setSelectedCategory(category);
    },
    selectedCategory: selectedCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (NamedEntityRecognition);

/***/ }),

/***/ "./src/universal/components/blocks/Number.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/blocks/Number.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_InputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Number.tsx";








function NumberBlock(props) {
  const {
    block,
    onDelete,
    handleChange,
    index,
    isAudits,
    isEditing,
    onEdit
  } = props;
  const {
    number,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = number || {};
  const renderValue = isEditing ? value || placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].NUMBER,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_BodyContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, readOnly || isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('div', {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, renderValue) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](universal_components_InputField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.number.value`,
    onChange: handleChange,
    type: "number",
    autoFocus: false,
    value: renderValue || "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })));
}

/***/ }),

/***/ "./src/universal/components/blocks/PdfReader.tsx":
/*!*******************************************************!*\
  !*** ./src/universal/components/blocks/PdfReader.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/PdfReader.tsx";








const IFrame = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("iframe", {
  target: "eiejtyd0"
})({
  name: "np0iat",
  styles: "width:100%;height:100%;border:0;"
});

const PdfReader = props => {
  const {
    block,
    onEdit,
    onDelete,
    isEditing,
    error,
    index
  } = props || {};
  const {
    pdf,
    name
  } = block;
  const {
    value,
    placeholder
  } = pdf || {};
  let sourceUrl = isEditing ? placeholder : value;

  if (error.data && error.data[index] && error.data.length) {
    sourceUrl = '';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    overflow: `hidden`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].PDF,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IFrame, {
    src: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PdfReader);

/***/ }),

/***/ "./src/universal/components/blocks/RichTextEditor.tsx":
/*!************************************************************!*\
  !*** ./src/universal/components/blocks/RichTextEditor.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/components/TextEditor */ "./src/universal/components/TextEditor.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/RichTextEditor.tsx";








const RichTextEditor = props => {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    setFieldValue,
    isEditing,
    index
  } = props;
  const {
    rich_text: richText,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = '',
    format
  } = richText || {};
  const renderValue = isEditing ? placeholder : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BLOCK_TYPE"].RICH_TEXT,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: `data.${index}.rich_text.value`,
    value: renderValue,
    readOnly: readOnly || isAudits,
    placeholder: placeholder,
    setFieldValue: setFieldValue,
    format: format,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ }),

/***/ "./src/universal/components/blocks/SingleSelection.tsx":
/*!*************************************************************!*\
  !*** ./src/universal/components/blocks/SingleSelection.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/TaskRadio */ "./src/universal/components/TaskRadio.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/ListFilter */ "./src/client/components/ListFilter.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/SingleSelection.tsx";










const Radio = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eg86qua0"
})({
  name: "1r2f04i",
  styles: "margin-bottom:10px;"
});

const SingleSelection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props => {
  const {
    block,
    onDelete,
    isAudits,
    handleChange,
    index,
    isEditing,
    onEdit
  } = props;
  const {
    name,
    type
  } = block;
  const {
    value
  } = block['single_selection'] || {};
  const isTask = !isEditing && !isAudits;
  const [list, setList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(block[type].options);
  const options = isEditing ? block[type].options : list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BLOCK_TYPE"].SINGLE_SELECTION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), isTask && Array.isArray(block[type].options) && block[type].options.length > 10 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ListFilter__WEBPACK_IMPORTED_MODULE_9__["default"], {
    list: block[type].options,
    setList: setList,
    keys: ['name'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Radio, {
    key: optionIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TaskRadio__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: `data.${index}.single_selection.value`,
    id: `${index}-${optionIndex}`,
    value: option.id,
    label: option.name,
    onChange: handleChange,
    checked: option.id === value,
    disabled: isAudits,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (SingleSelection);

/***/ }),

/***/ "./src/universal/components/blocks/Text.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/blocks/Text.tsx ***!
  \**************************************************/
/*! exports provided: StyledText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledText", function() { return StyledText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/BasicTextArea */ "./src/universal/components/BasicTextArea.tsx");
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/Text.tsx";










const StyledText = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p", {
  target: "efy0fkk0"
})({
  fontSize: 16,
  lineHeight: 1.35,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].TEXT_MAIN,
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
  cursor: 'text'
});
function Text(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    handleChange,
    isEditing,
    index
  } = props;
  const {
    text,
    name
  } = block;
  const {
    placeholder,
    read_only: readOnly,
    value = ''
  } = text || {};
  const renderValue = isEditing ? placeholder : value;
  const decorator = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((href, text, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
      href: href,
      key: key,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_9__["PALETTE"].LINK
        /* textDecoration: 'underline' */

      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }, text);
  }, [renderValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_10__["BLOCK_TYPE"].TEXT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, !readOnly && !isAudits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BasicTextArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: `data.${index}.text.value`,
    onChange: handleChange,
    autoFocus: false,
    style: {
      height: '100%'
    },
    value: renderValue || value,
    readOnly: readOnly,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_2___default.a, {
    componentDecorator: decorator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, renderValue))));
}

/***/ }),

/***/ "./src/universal/components/blocks/TextSequence.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/blocks/TextSequence.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextSequence; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/BlockHeader */ "./src/universal/components/BlockHeader.tsx");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./src/universal/components/blocks/Label.tsx");
/* harmony import */ var _HeaderContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderContainer */ "./src/universal/components/blocks/HeaderContainer.tsx");
/* harmony import */ var _BodyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BodyContainer */ "./src/universal/components/blocks/BodyContainer.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./src/universal/components/blocks/Content.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_components_TextSequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/TextSequence */ "./src/universal/components/TextSequence.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/blocks/TextSequence.tsx";

function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;

  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;

    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }

    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = undefined;
    }
  }

  return value;
}










const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "ef6bqbm0"
})({
  name: "1hx5wtv",
  styles: "display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;flex:0 0 auto;"
});

function TextSequence(props) {
  const {
    isAudits,
    block,
    onEdit,
    onDelete,
    handleChange,
    isEditing,
    index,
    setFieldValue
  } = props;
  const {
    name,
    type
  } = block || {};
  const data = isEditing ? block[type].placeholder : block[type].value;
  const {
    delete_disabled: deleteDisabled,
    edit_disabled: editDisabled,
    ordering_disabled: orderingDisabled
  } = block[type];
  const settings = {
    deleteDisabled,
    editDisabled,
    orderingDisabled
  };
  const targetName = isEditing ? `data[${index}][${type}].placeholder` : `data[${index}][${type}].value`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HeaderContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDelete: onDelete,
    onEdit: onEdit,
    isEditing: isEditing,
    blockType: universal_utils_constants__WEBPACK_IMPORTED_MODULE_7__["BLOCK_TYPE"].TEXT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BodyContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_TextSequence__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: targetName,
    targetName: targetName,
    data: data,
    type: type,
    setFieldValue: setFieldValue,
    index: index,
    handleChange: handleChange,
    isEditing: isEditing,
    isAudits: isAudits,
    placeholder: _optionalChain([block, 'access', _ => _[type], 'optionalAccess', _2 => _2.placeholder]) || [],
    settings: settings,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }))));
}

/***/ }),

/***/ "./src/universal/components/text-annotator/Functions.ts":
/*!**************************************************************!*\
  !*** ./src/universal/components/text-annotator/Functions.ts ***!
  \**************************************************************/
/*! exports provided: splitWithOffsets, splitTokensWithOffsets, selectionIsEmpty, selectionIsBackwards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitWithOffsets", function() { return splitWithOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitTokensWithOffsets", function() { return splitTokensWithOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionIsEmpty", function() { return selectionIsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionIsBackwards", function() { return selectionIsBackwards; });
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.sortby */ "./node_modules/lodash.sortby/index.js");
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sortby__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const splitWithOffsets = (text, offsets) => {
  let lastEnd = 0;
  const splits = [];

  for (let offset of lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default()(offsets, o => o.start)) {
    const {
      start,
      end
    } = offset;

    if (lastEnd < start) {
      splits.push({
        start: lastEnd,
        end: start,
        content: text.slice(lastEnd, start)
      });
    }

    splits.push(_objectSpread(_objectSpread({}, offset), {}, {
      mark: true,
      content: text.slice(start, end)
    }));
    lastEnd = end;
  }

  if (lastEnd < text.length) {
    splits.push({
      start: lastEnd,
      end: text.length,
      content: text.slice(lastEnd, text.length)
    });
  }

  return splits;
};
const splitTokensWithOffsets = (text, offsets) => {
  let lastEnd = 0;
  const splits = [];

  for (let offset of lodash_sortby__WEBPACK_IMPORTED_MODULE_0___default()(offsets, o => o.start)) {
    const {
      start,
      end
    } = offset;

    if (lastEnd < start) {
      for (let i = lastEnd; i < start; i++) {
        splits.push({
          i,
          content: text[i]
        });
      }
    }

    splits.push(_objectSpread(_objectSpread({}, offset), {}, {
      mark: true,
      content: text.slice(start, end).join(' ')
    }));
    lastEnd = end;
  }

  for (let i = lastEnd; i < text.length; i++) {
    splits.push({
      i,
      content: text[i]
    });
  }

  return splits;
};
const selectionIsEmpty = selection => {
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
  return position === 0 && selection.focusOffset === selection.anchorOffset;
};
const selectionIsBackwards = selection => {
  if (selectionIsEmpty(selection)) return false;
  let position = selection.anchorNode.compareDocumentPosition(selection.focusNode);
  let backward = false;
  if (!position && selection.anchorOffset > selection.focusOffset || position === Node.DOCUMENT_POSITION_PRECEDING) backward = true;
  return backward;
};

/***/ }),

/***/ "./src/universal/components/text-annotator/Mark.tsx":
/*!**********************************************************!*\
  !*** ./src/universal/components/text-annotator/Mark.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/text-annotator/Mark.tsx";


const Mark = props => {
  const {
    color,
    start,
    end,
    content,
    tag,
    onClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('mark', {
    style: {
      backgroundColor: color || '#84d2ff',
      padding: '0 4px'
    },
    'data-start': start,
    'data-end': end,
    onClick: () => onClick({
      start,
      end
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, content, tag && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
    style: {
      fontSize: '0.7em',
      fontWeight: 500,
      marginLeft: 6
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, tag));
};

/* harmony default export */ __webpack_exports__["default"] = (Mark);

/***/ }),

/***/ "./src/universal/components/text-annotator/TextAnnotator.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/components/text-annotator/TextAnnotator.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mark */ "./src/universal/components/text-annotator/Mark.tsx");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Functions */ "./src/universal/components/text-annotator/Functions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/text-annotator/TextAnnotator.tsx";




const Split = props => {
  if (props.mark) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mark__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, props), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', {
    'data-start': props.start,
    'data-end': props.end,
    onClick: () => props.onClick({
      start: props.start,
      end: props.end
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.content);
};

const TextAnnotator = props => {
  const getSpan = span => {
    // TODO: Better typings here.
    if (props.getSpan) return props.getSpan(span);
    return {
      start: span.start,
      end: span.end
    };
  };

  const handleMouseUp = () => {
    if (!props.onChange) return;
    const selection = window.getSelection();
    if (!selection.anchorNode || !selection.focusNode || Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["selectionIsEmpty"])(selection)) return;
    let start = parseInt(selection.anchorNode.parentElement.getAttribute('data-start'), 10) + selection.anchorOffset;
    let end = parseInt(selection.focusNode.parentElement.getAttribute('data-start'), 10) + selection.focusOffset;

    if (!Number.isInteger(start) || !Number.isInteger(end) || selection.anchorNode.compareDocumentPosition(selection.focusNode) !== 0) {
      window.getSelection().empty();
      return;
    }

    if (Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["selectionIsBackwards"])(selection)) {
      ;
      [start, end] = [end, start];
    }

    props.onChange([...props.value, getSpan({
      start,
      end,
      text: content.slice(start, end)
    })]);
    window.getSelection().empty();
  };

  const handleSplitClick = ({
    start,
    end
  }) => {
    // Find and remove the matching split.
    const splitIndex = props.value.findIndex(s => s.start === start && s.end === end);

    if (splitIndex >= 0) {
      props.onChange([...props.value.slice(0, splitIndex), ...props.value.slice(splitIndex + 1)]);
    }
  };

  const {
    content,
    value,
    style
  } = props;
  const splits = Object(_Functions__WEBPACK_IMPORTED_MODULE_2__["splitWithOffsets"])(content, value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    style: style,
    onMouseUp: handleMouseUp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, splits.map(split => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Split, _objectSpread(_objectSpread({
    key: `${split.start}-${split.end}`
  }, split), {}, {
    onClick: handleSplitClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAnnotator);

/***/ }),

/***/ "./src/universal/hooks/usePrevious.ts":
/*!********************************************!*\
  !*** ./src/universal/hooks/usePrevious.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const usePrevious = value => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ }),

/***/ "./src/universal/styles/css/react-grid-layout.css":
/*!********************************************************!*\
  !*** ./src/universal/styles/css/react-grid-layout.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./react-grid-layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-grid-layout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/styles/css/react-resizable.css":
/*!******************************************************!*\
  !*** ./src/universal/styles/css/react-resizable.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./react-resizable.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/react-resizable.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/styles/css/rgl-overide.css":
/*!**************************************************!*\
  !*** ./src/universal/styles/css/rgl-overide.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./rgl-overide.css */ "./node_modules/css-loader/dist/cjs.js!./src/universal/styles/css/rgl-overide.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/universal/utils/getItemStyle.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/getItemStyle.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getItemStyle = (_isDragging, draggableStyle) => {
  const {
    transform
  } = draggableStyle;
  let activeTransform = {};

  if (transform) {
    activeTransform = {
      transform: `translate(0, ${transform.substring(transform.indexOf(',') + 1, transform.indexOf(')'))})`
    };
  }

  return _objectSpread(_objectSpread({
    userSelect: 'none',
    // background: isDragging ? '#fff' : '#fff',
    background: '#fff',
    outline: 'none',
    width: '100%',
    height: '100%'
  }, draggableStyle), activeTransform);
};

/* harmony default export */ __webpack_exports__["default"] = (getItemStyle);

/***/ }),

/***/ "./src/universal/utils/isEmptyArray.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/isEmptyArray.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isEmptyArray = value => {
  if (value === null || value === undefined) return true;

  if (Array.isArray(value) || typeof value === 'string' || typeof value.splice === 'function') {
    return !value.length;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmptyArray);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy9jc3MvcmVhY3QtZ3JpZC1sYXlvdXQuY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZWFjdC1yZXNpemFibGUuY3NzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZ2wtb3ZlcmlkZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0RmlsdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXBwSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9SR0wudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9UYWdnYWJsZUxpc3RXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvVGV4dFNlcXVlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmJveC1hbm5vdGF0b3IvQkJveEFubm90YXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jib3gtYW5ub3RhdG9yL0JCb3hTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9CaW5hcnkudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvQm91bmRpbmdCb3hlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0RhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRW1haWwudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRW1iZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRm9ybVNlcXVlbmNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0hlYWRlckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9JbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MYWJlbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL01lZGlhQmxvY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvTXVsdGlwbGVTZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvTmFtZWRFbnRpdHlSZWNvZ25pdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9OdW1iZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvUGRmUmVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1JpY2hUZXh0RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1NpbmdsZVNlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1RleHRTZXF1ZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL3RleHQtYW5ub3RhdG9yL0Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvdGV4dC1hbm5vdGF0b3IvTWFyay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL3RleHQtYW5ub3RhdG9yL1RleHRBbm5vdGF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvaG9va3MvdXNlUHJldmlvdXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvY3NzL3JlYWN0LWdyaWQtbGF5b3V0LmNzcz9iOWY5Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZWFjdC1yZXNpemFibGUuY3NzP2I3NzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9zdHlsZXMvY3NzL3JnbC1vdmVyaWRlLmNzcz9kN2YxIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0SXRlbVN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5LnRzIl0sIm5hbWVzIjpbIl9qc3hGaWxlTmFtZSIsIklucHV0IiwiZXJyb3IiLCJkaXNhYmxlZCIsImRpc3BsYXkiLCJhcHBlYXJhbmNlIiwib3V0bGluZSIsIm1hcmdpbiIsImJvcmRlciIsIlBBTEVUVEUiLCJFUlJPUl9NQUlOIiwiQk9SREVSX01BSU5fR1JBWSIsImJveFNpemluZyIsImNvbG9yIiwiVEVYVF9NQUlOIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiYm94U2hhZG93IiwiQk9YX1NIQURPV19QUklNQVJZIiwiYm9yZGVyQ29sb3IiLCJQUklNQVJZX01BSU4iLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImF1dG9Db21wbGV0ZSIsImF1dG9Gb2N1cyIsImlzT3B0aW9uYWwiLCJpc1JlcXVpcmVkIiwibmFtZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJzdHlsZSIsInNwZWxsQ2hlY2siLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiQm9vbGVhbiIsIlN0eWxlZEVycm9yIiwiV3JhcHBlciIsIkxpc3RGaWx0ZXIiLCJsaXN0Iiwic2V0TGlzdCIsImtleXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGVybSIsInRhcmdldCIsIm1hdGNoU29ydGVyIiwiQVBQX0hFQURFUl9IRUlHSFQiLCJDb250YWluZXIiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiQkFDS0dST1VORF9NQUlOIiwiYm9yZGVyQm90dG9tIiwiQk9SREVSX0dSQVlfTkVXIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJGbGV4SXRlbSIsInByb3AiLCJmbGV4IiwidGV4dEFsaWduIiwiY2VudGVyIiwiQXBwSGVhZGVyIiwibGVmdEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsIm1pZEJhckl0ZW1zIiwiaXNFbXB0eUFycmF5IiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsIm9wIiwiZm4iLCJhcmdzIiwiY2FsbCIsIkJsb2NrQ29tcG9uZW50IiwibWVtbyIsImlzQXVkaXRzIiwic2V0RmllbGRWYWx1ZSIsImlzRWRpdGluZyIsImluZGV4IiwiYmxvY2siLCJvbkRlbGV0ZSIsImhhbmRsZUJsdXIiLCJvbkVkaXQiLCJlcnJvcnMiLCJyZW5kZXJDbXAiLCJCTE9DS19UWVBFIiwiVEVYVCIsIlRleHQiLCJFTUFJTCIsIkVtYWlsIiwiXyIsImVtYWlsIiwiTlVNQkVSIiwiTnVtYmVyIiwiTElOSyIsIkxpbmsiLCJfMiIsImxpbmsiLCJJTUFHRSIsIkltYWdlIiwiQVVESU8iLCJNZWRpYUJsb2NrIiwiVklERU8iLCJCSU5BUlkiLCJCaW5hcnkiLCJOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04iLCJOYW1lZEVudGl0eVJlY29nbml0aW9uIiwiQk9VTkRJTkdfQk9YRVMiLCJCb3VuZGluZ0JveGVzIiwiRU1CRUQiLCJFbWJlZCIsIlBERiIsIlBkZlJlYWRlciIsIlNJTkdMRV9TRUxFQ1RJT04iLCJTaW5nbGVTZWxlY3Rpb24iLCJNVUxUSVBMRV9TRUxFQ1RJT04iLCJNdWx0aXBsZVNlbGVjdGlvbiIsIkZPUk1fU0VRVUVOQ0UiLCJGb3JtU2VxdWVuY2UiLCJSSUNIX1RFWFQiLCJSaWNoVGV4dEVkaXRvciIsIlRFWFRfU0VRVUVOQ0UiLCJUZXh0U2VxdWVuY2UiLCJEQVRFIiwiRGF0ZSIsIlN0eWxlZEljb24iLCJJY29uIiwiVHlwZUljb24iLCJCQUNLR1JPVU5EX0dSQVlfTUlEIiwiQmxvY2tIZWFkZXIiLCJibG9ja1R5cGUiLCJJY29uQnV0dG9uIiwib25DbGljayIsIkJMT0NLUyIsImZpbmQiLCJiIiwiXzMiLCJpY29uIiwiQmxvY2tXcmFwcGVyIiwiekluZGV4IiwiUGxhaW5CdXR0b24iLCJjaGlsZHJlbiIsIlJHTFdpZHRoUHJvdmlkZXIiLCJXaWR0aFByb3ZpZGVyIiwiUmVzcG9uc2l2ZSIsIlJHTF9DT0xVTU5TIiwiUkdMX1JPV1MiLCJSR0xDb250YWluZXIiLCJSR0xXcmFwcGVyIiwiUkdMIiwiaXNEcmFnZ2FibGUiLCJpc0Ryb3BwYWJsZSIsImlzUmVzaXphYmxlIiwib25EcmFnU3RhcnQiLCJvbkRyYWdTdG9wIiwib25Ecm9wIiwib25MYXlvdXRDaGFuZ2UiLCJsYXlvdXRzIiwiZHJvcHBpbmdJdGVtIiwiYXV0b1NpemUiLCJicmVha3BvaW50cyIsImFsbCIsImNvbHMiLCJjb21wYWN0VHlwZSIsImlzQm91bmRlZCIsIm1lYXN1cmVCZWZvcmVNb3VudCIsInVzZUNTU1RyYW5zZm9ybXMiLCJwcmV2ZW50Q29sbGlzaW9uIiwiY29udGFpbmVyUGFkZGluZyIsInJvd0hlaWdodCIsImRyYWdnYWJsZUhhbmRsZSIsIkxpc3RXcmFwcGVyIiwiTGlzdCIsIkxpc3RMYWJlbCIsIkNhdGVnb3J5QnV0dG9uIiwiYWN0aXZlIiwiYmFja2dyb3VuZCIsImNsZWFyIiwibWFyZ2luQm90dG9tIiwiRW50aXR5VGV4dCIsIkNvbG9yQXJ0aWZhY3QiLCJtYXJnaW5SaWdodCIsImRhcmtlbiIsIlRhZ2dhYmxlTGlzdFdyYXBwZXIiLCJvcHRpb25zIiwidGV4dCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJvblNlbGVjdCIsIm9iamVjdHMiLCJvbkhvdmVyIiwiZ2V0T3B0aW9uSW5kZXgiLCJpZCIsIm1hcCIsIm9wdGlvbiIsIm9wdGlvbkluZGV4Iiwia2V5IiwidGFnIiwiY29sb3JCeUluZGV4IiwiQXJyYXkiLCJpc0FycmF5IiwiaXRlbSIsImNhdGVnb3J5IiwicmVwbGFjZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwicG9ydGFsIiwiZG9jdW1lbnQiLCJib2R5IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsIlJvb3RCdXR0b24iLCJGaWVsZFdyYXBwZXIiLCJDb250ZW50V3JhcHBlciIsImlzVGFzayIsIm9yZGVyaW5nRGlzYWJsZWQiLCJkZWxldGVEaXNhYmxlZCIsIkNvbnRlbnRCbG9jayIsIklucHV0V3JhcHBlciIsIkJsb2NrSW5wdXQiLCJwcm92aWRlZCIsInNuYXBzaG90Iiwic2VxSWR4IiwiZGF0YSIsInRhcmdldE5hbWUiLCJhcnJheUhlbHBlcnMiLCJzZXR0aW5ncyIsInNldEZvY3VzU3R5bGVzIiwiZWxlbWVudHMiLCJhY3Rpb24iLCJmb3JFYWNoIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiXzQiLCJzaG93RGVsZXRlIiwiZHJhZ2dhYmxlUHJvcHMiLCJpbm5lclJlZiIsImdldEl0ZW1TdHlsZSIsImlzRHJhZ2dpbmciLCJkcmFnSGFuZGxlUHJvcHMiLCJUZXh0QXJlYSIsImNhY2hlTWVhc3VyZW1lbnRzIiwib25LZXlEb3duIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiXzUiLCJyZWFkT25seSIsImVkaXREaXNhYmxlZCIsInJlbW92ZSIsIm9uRHJhZ0VuZCIsInVzZUNhbGxiYWNrIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcmFnZ2FibGVJZCIsImRyb3BwYWJsZUlkIiwiY2hhbmdlZEl0ZW0iLCJuZXdMaXN0Iiwic3BsaWNlIiwiRmllbGRBcnJheSIsInJlbmRlciIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsImRyb3BwYWJsZVByb3BzIiwiRHJhZ2dhYmxlIiwiU3RyaW5nIiwiaXNEcmFnRGlzYWJsZWQiLCJ1c2VQb3J0YWwiLCJjaGlsZCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiU2Vjb25kYXJ5QnV0dG9uIiwicHVzaCIsImRlZmF1bHRQcm9wcyIsIkJCb3hBbm5vdGF0b3IiLCJ1cmwiLCJib3JkZXJXaWR0aCIsInNlbGVjdGVkTGFiZWwiLCJoaWdobGlnaHRJbmRleCIsInBvaW50ZXIiLCJzZXRQb2ludGVyIiwidXNlU3RhdGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJlbnRyaWVzIiwic2V0RW50cmllcyIsInVzZUVmZmVjdCIsImVudHJ5IiwidyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaCIsInkiLCJ4IiwiaXNFcXVhbCIsInNvcnQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpbWFnZUZyYW1lU3R5bGUiLCJzZXRJbWFnZUZyYW1lU3R5bGUiLCJiQm94SW1hZ2VSZWYiLCJ1c2VSZWYiLCJpbWFnZUVsZW1lbnQiLCJzcmMiLCJvbmxvYWQiLCJiYWNrZ3JvdW5kSW1hZ2VTcmMiLCJjcm9wIiwicGFnZVgiLCJwYWdlWSIsImN1cnJlbnQiLCJNYXRoIiwibWluIiwibWF4Iiwicm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXRXaWR0aCIsIl82IiwiXzciLCJvZmZzZXRIZWlnaHQiLCJfOCIsIl85IiwidXBkYXRlUmVjdGFuZ2xlIiwibW91c2VNb3ZlSGFuZGxlciIsIl8xMCIsIl8xMSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfMTIiLCJfMTMiLCJfMTQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiXzE1IiwibW91c2VEb3duSGFuZGxlciIsImJ1dHRvbiIsImN1cnJlbnRQb2ludGVyIiwiaGFzTW92ZWQiLCJfMTYiLCJfMTciLCJyZWN0YW5nbGUiLCJ4MSIsIngyIiwieTEiLCJ5MiIsInJlY3QiLCJib3hSZWYiLCJtb3VzZVVwSGFuZGxlciIsIl8xOCIsIl8xOSIsIl8yMCIsIl8yMSIsIl8yMiIsIl8yMyIsIm9uTW91c2VEb3duQ2FwdHVyZSIsIm9uTW91c2VNb3ZlQ2FwdHVyZSIsImRyYWdnYWJsZSIsImZsb2F0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJCQm94U2VsZWN0b3IiLCJsZWZ0IiwicG9pbnRlckV2ZW50cyIsIm9wYWNpdHkiLCJCbG9jayIsImJpbmFyeSIsIl9pZCIsIkNvbnRlbnQiLCJIZWFkZXJDb250YWluZXIiLCJCb2R5Q29udGFpbmVyIiwiVGFza1JhZGlvIiwiY2hlY2tlZCIsIkltYWdlV3JhcHBlciIsInNldE9iamVjdHMiLCJzZXRIaWdobGlnaHRJbmRleCIsInJlbmRlclZhbHVlIiwiaW1hZ2UiLCJzZXRTZWxlY3RlZExhYmVsIiwicm93Iiwib25Nb3VzZURvd24iLCJmaWx0ZXIiLCJvdmVyZmxvdyIsIkNvbnRlbnRDb250YWluZXIiLCJEcmFnSGFuZGxlIiwiYWRkRHJhZ2dpbmdTdHlsZXMiLCJhZGQiLCJyZW1vdmVEcmFnZ2luZ1N0eWxlcyIsImNsYXNzTmFtZSIsIm9uTW91c2VPdXQiLCJvbk1vdXNlVXAiLCJEYXRlQmxvY2siLCJkYXRlIiwicmVhZF9vbmx5IiwiZ2V0RGlzcGxheUZvcm1hdCIsIkRhdGVQaWNrZXIiLCJTdHlsZWRMaW5rIiwid2hpdGVTcGFjZSIsIndvcmRXcmFwIiwid29yZEJyZWFrIiwiaGlkZUVycm9yTWVzc2FnZSIsImhyZWYiLCJJRnJhbWUiLCJlbWJlZCIsInNvdXJjZVVybCIsIkJ1dHRvbkJsb2NrIiwiSXRlbSIsImFzc2lnbk5leHRBbmRCYWNrVmlzaWJpbGl0eSIsImN1cnJlbnRJZHgiLCJjdXJyZW50VHlwZSIsIm5leHRCbG9ja0lkIiwibmV4dEJsb2NrSW5kZXgiLCJpc05leHREaXNhYmxlZCIsImlzQmFja0Rpc2FibGVkIiwic2V0Q3VycmVudElkeCIsImhpc3RvcnkiLCJjdXJyZW50QmxvY2siLCJsYXN0QmxvY2tJZCIsInBvcCIsImxhc3RCbG9ja0lkeCIsImZpbmRJbmRleCIsImN1cnJlbnRCbG9ja05hbWUiLCJsb2dpY19qdW1wIiwibG9naWNCbG9ja3MiLCJoYW5kbGVOZXh0IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwiaGFuZGxlQmFjayIsInN0YWNrZWRJZCIsIlByaW1hcnlCdXR0b24iLCJCYXNpY1RleHRBcmVhIiwiVGFza0NoZWNrYm94IiwiU3R5bGVkSW1nIiwiYWx0IiwidGl0bGUiLCJjb250cm9scyIsIlZpZGVvUGxheWVyIiwic2hvdyIsImhpZGVPdmVyZmxvdyIsInByZXZTb3VyY2VVcmwiLCJ1c2VQcmV2aW91cyIsInNvdXJjZXMiLCJlbCIsInBsYXllciIsIlBseXIiLCJkZXN0cm95IiwiQ2hlY2tib3giLCJNdWx0aUNsYXNzIiwiZWRpdE1vZGUiLCJncmlkVGVtcGxhdGVSb3dzIiwiVGV4dFdyYXBwZXIiLCJoaWdobGlnaHRDb2xvciIsImFsbG93X2VkaXRzIiwiYWxsb3dFZGl0cyIsImVudGl0aWVzIiwic2V0VGV4dCIsInVzZXJTZWxlY3QiLCJzZXRVc2VyU2VsZWN0IiwiZGlzYWJsZVNlbGVjdGlvbiIsInNldERpc2FibGVTZWxlY3Rpb24iLCJ0b2dnbEVkaXRNb2RlIiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInJlbmRlclRleHQiLCJ0ZXh0RmllbGROYW1lIiwidGV4dEZpZWxkVmFsdWUiLCJzZXRUZXh0RmllbGRWYWx1ZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJmb3JtYXRFbnRpdGllc0ZvclVJUmVuZGVyaW5nIiwiZW50aXRpZXNJbnN0YW5jZSIsIml0bSIsIm9wdGlvbk5hbWUiLCJmaW5kT3B0aW9uTmFtZUZyb21JZCIsImhhbmRsZUFubm90YXRlIiwiaW5wdXRSZWYiLCJjcmVhdGVSZWYiLCJkZXRhaWwiLCJzZXRQcm9wZXJ0eSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwicG9zaXRpb25FcnJvckJlbG93Iiwic2Nyb2xsYWJsZSIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImVtcHR5IiwiVGV4dEFubm90YXRvciIsInBhZGRpbmdMZWZ0IiwiY29udGVudCIsImdldFNwYW4iLCJzcGFuIiwiaGlkZUZvY3VzIiwiTnVtYmVyQmxvY2siLCJudW1iZXIiLCJwZGYiLCJyaWNoX3RleHQiLCJyaWNoVGV4dCIsImZvcm1hdCIsIlRleHRFZGl0b3IiLCJSYWRpbyIsIlN0eWxlZFRleHQiLCJkZWNvcmF0b3IiLCJyZWwiLCJMaW5raWZ5IiwiY29tcG9uZW50RGVjb3JhdG9yIiwiZGVsZXRlX2Rpc2FibGVkIiwiZWRpdF9kaXNhYmxlZCIsIm9yZGVyaW5nX2Rpc2FibGVkIiwiU2VxdWVuY2UiLCJzcGxpdFdpdGhPZmZzZXRzIiwib2Zmc2V0cyIsImxhc3RFbmQiLCJzcGxpdHMiLCJzb3J0QnkiLCJvIiwic3RhcnQiLCJlbmQiLCJtYXJrIiwic3BsaXRUb2tlbnNXaXRoT2Zmc2V0cyIsImpvaW4iLCJzZWxlY3Rpb25Jc0VtcHR5Iiwic2VsZWN0aW9uIiwiYW5jaG9yTm9kZSIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiZm9jdXNOb2RlIiwiZm9jdXNPZmZzZXQiLCJhbmNob3JPZmZzZXQiLCJzZWxlY3Rpb25Jc0JhY2t3YXJkcyIsImJhY2t3YXJkIiwiTm9kZSIsIkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyIsIk1hcmsiLCJTcGxpdCIsImhhbmRsZU1vdXNlVXAiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpc0ludGVnZXIiLCJoYW5kbGVTcGxpdENsaWNrIiwic3BsaXRJbmRleCIsInMiLCJzcGxpdCIsIl9pc0RyYWdnaW5nIiwiZHJhZ2dhYmxlU3R5bGUiLCJ0cmFuc2Zvcm0iLCJhY3RpdmVUcmFuc2Zvcm0iLCJzdWJzdHJpbmciLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHVCQUF1Qix1QkFBdUIsa0NBQWtDLEdBQUcsb0JBQW9CLCtCQUErQixtQ0FBbUMsR0FBRyxrQ0FBa0MsbUNBQW1DLEdBQUcsNkJBQTZCLGVBQWUsK0JBQStCLEdBQUcsK0NBQStDLHFCQUFxQixlQUFlLDJCQUEyQixHQUFHLCtC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S0VxQixTQUFLLEVBQUUsTUFMVDtBQU1FSCxVQUFNLEVBQUU7QUFOVixLQU9LdWlCLGNBUEwsR0FRS0UsZUFSTDtBQVVELENBckJEOztBQXVCZTlTLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBLE1BQU10TCxZQUFZLEdBQUkxQyxLQUFELElBQVc7QUFDOUIsTUFBSUEsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSzhDLFNBQWhDLEVBQTJDLE9BQU8sSUFBUDs7QUFDM0MsTUFBSW9JLEtBQUssQ0FBQ0MsT0FBTixDQUFjbkwsS0FBZCxLQUF3QixPQUFPQSxLQUFQLEtBQWlCLFFBQXpDLElBQXFELE9BQU9BLEtBQUssQ0FBQ3FQLE1BQWIsS0FBd0IsVUFBakYsRUFBNkY7QUFDM0YsV0FBTyxDQUFDclAsS0FBSyxDQUFDZ0QsTUFBZDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTkQ7O0FBUWVOLDJFQUFmLEUiLCJmaWxlIjoiUXVldWV+VGFza1Jvb3RfMjAxZTdmMDFhMDU0Yjc2ZjQ5ZTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LWdyaWQtbGF5b3V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcyBlYXNlO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtIHtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgdG9wO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtLmNzc1RyYW5zZm9ybXMge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtLnJlc2l6aW5nIHtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWxsLWNoYW5nZTogd2lkdGgsIGhlaWdodDtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmcge1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIHotaW5kZXg6IDM7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtLmRyb3BwaW5nIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1ncmlkLXBsYWNlaG9sZGVyIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xcbiAgei1pbmRleDogMjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIHJpZ2h0OiAtMTBweDtcXG4gIGN1cnNvcjogc2UtcmVzaXplO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzcHg7XFxuICBib3R0b206IDNweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5yZWFjdC1yZXNpemFibGUtaGlkZSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXJlc2l6YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EySURZaUlITjBlV3hsUFNKaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lObVptWm1abVl3TUNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhkcFpIUm9QU0kyY0hnaUlHaGxhV2RvZEQwaU5uQjRJajQ4WnlCdmNHRmphWFI1UFNJd0xqTXdNaUkrUEhCaGRHZ2daRDBpVFNBMklEWWdUQ0F3SURZZ1RDQXdJRFF1TWlCTUlEUWdOQzR5SUV3Z05DNHlJRFF1TWlCTUlEUXVNaUF3SUV3Z05pQXdJRXdnTmlBMklFd2dOaUEySUZvaUlHWnBiR3c5SWlNd01EQXdNREFpTHo0OEwyYytQQzl6ZG1jKycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcbiAgcGFkZGluZzogMCAzcHggM3B4IDA7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2Uge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbncge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGN1cnNvcjogbnctcmVzaXplO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmUge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IG5lLXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcsXFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZSB7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcge1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWUge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLFxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXMge1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4ge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtcyB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LWdyaWQtaXRlbS5yZWFjdC1ncmlkLXBsYWNlaG9sZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjQ4ZWU7XFxuICBvcGFjaXR5OiAwLjE1O1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5yZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmcsIC5yZWFjdC1kcmFnZ2FibGUucmVzaXppbmcge1xcbiAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW06aG92ZXIgPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtLmNzc1RyYW5zZm9ybXMge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcXG59XFxuLmFuaW1hdGVkIC5yZWFjdC1ncmlkLWl0ZW0uY3NzVHJhbnNmb3JtcyB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSW5wdXRGaWVsZC50c3hcIjtpbXBvcnQgUmVhY3QsIHtmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICdzdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBTdHlsZWRFcnJvciBmcm9tICdjb21wb25lbnRzL1N0eWxlZEVycm9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dCgoe2Vycm9yLCBkaXNhYmxlZH0pID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBtYXJnaW46IDAsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke2Vycm9yID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUYsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY3Vyc29yOiBkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAnaW5wdXQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGZvbnRTaXplOiAxNSxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgaGVpZ2h0OiAzMixcbiAgcGFkZGluZzogJzAgMTBweCcsXG4gIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gICc6Zm9jdXMnOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7ZXJyb3IgPyAnI2ZmZGFjYycgOiBQQUxFVFRFLkJPWF9TSEFET1dfUFJJTUFSWX1gLFxuICAgIGJvcmRlckNvbG9yOiBlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG4gIH1cbn0pKVxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTUsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbn0pXG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBtYXJnaW5MZWZ0OiA1XG59KVxuXG5jb25zdCBMYWJlbEhlbHBlciA9IHN0eWxlZC5kaXYoe1xuICBmb250U2l6ZTogMTIsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBtYXJnaW5MZWZ0OiA2XG59KVxuXG5jb25zdCBJbnB1dEZpZWxkID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZCxcbiAgICBlcnJvcixcbiAgICBpc09wdGlvbmFsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgbmFtZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIHZhbHVlLFxuICAgIGxhYmVsLFxuICAgIHN0eWxlLFxuICAgIHNwZWxsQ2hlY2tcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIGxhYmVsICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDB9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fSwgbGFiZWwpXG4gICAgICAgICAgLCBpc1JlcXVpcmVkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAyfX0sIFwiUmVxdWlyZWRcIilcbiAgICAgICAgICAsIGlzT3B0aW9uYWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbEhlbHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDN9fSwgXCJPcHRpb25hbFwiKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbihkaXNhYmxlZCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4oZXJyb3IpLFxuICAgICAgICBzcGVsbENoZWNrOiBzcGVsbENoZWNrLFxuICAgICAgICBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDZ9fVxuICAgICAgKVxuICAgICAgLCBlcnJvciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVycm9yLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19LCBlcnJvcilcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGRcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9MaXN0RmlsdGVyLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHttYXRjaFNvcnRlcn0gZnJvbSAnbWF0Y2gtc29ydGVyJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnLi9JbnB1dEZpZWxkJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggMHB4O1xuYFxuXG5jb25zdCBMaXN0RmlsdGVyID0gKHtsaXN0LCBzZXRMaXN0LCBrZXlzfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRlcm0gPSBlLnRhcmdldC52YWx1ZVxuICAgIHNldExpc3QobWF0Y2hTb3J0ZXIobGlzdCwgdGVybSwge2tleXN9KSlcbiAgfVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNX19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwgeyBwbGFjZWhvbGRlcjogXCJGaWx0ZXJcIiwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2fX0gKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RmlsdGVyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXBwSGVhZGVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IGlzRW1wdHlBcnJheSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5J1xuXG5leHBvcnQgY29uc3QgQVBQX0hFQURFUl9IRUlHSFQgPSA1MFxuXG5cblxuXG5cblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgcGFkZGluZzogJzAgMjVweCcsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX01BSU4sXG4gIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVlfTkVXfWAsXG4gIG1pbkhlaWdodDogQVBQX0hFQURFUl9IRUlHSFQsXG4gIG1pbldpZHRoOiAnMTAwJSdcbn0pXG5cbmNvbnN0IEZsZXhJdGVtID0gc3R5bGVkLmRpdigocHJvcCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZsZXg6ICcxIDEgMCcsXG4gICAgdGV4dEFsaWduOiBwcm9wLmNlbnRlciA/ICdjZW50ZXInOiAnaW5oZXJpdCcgXG4gIH1cbn0pXG5cbmNvbnN0IEFwcEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7bGVmdEJhckl0ZW1zLCByaWdodEJhckl0ZW1zLCBtaWRCYXJJdGVtc30gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGbGV4SXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzN319LCByaWdodEJhckl0ZW1zKVxuICAgICAgLCAhaXNFbXB0eUFycmF5KHJpZ2h0QmFySXRlbXMpICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleEl0ZW0sIHsgY2VudGVyOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fSwgbWlkQmFySXRlbXMpXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxleEl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fSwgbGVmdEJhckl0ZW1zKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBIZWFkZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0NvbXBvbmVudC50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuaW1wb3J0IEltYWdlIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9JbWFnZSdcbmltcG9ydCBOdW1iZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL051bWJlcidcbmltcG9ydCBUZXh0IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0J1xuaW1wb3J0IEVtYWlsIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9FbWFpbCdcbmltcG9ydCBMaW5rIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MaW5rJ1xuaW1wb3J0IE1lZGlhQmxvY2sgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL01lZGlhQmxvY2snXG5pbXBvcnQgQmluYXJ5IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9CaW5hcnknXG5pbXBvcnQgRW1iZWQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYmVkJ1xuaW1wb3J0IFBkZlJlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvUGRmUmVhZGVyJ1xuaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvU2luZ2xlU2VsZWN0aW9uJ1xuaW1wb3J0IE5hbWVkRW50aXR5UmVjb2duaXRpb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL05hbWVkRW50aXR5UmVjb2duaXRpb24nXG5pbXBvcnQgTXVsdGlwbGVTZWxlY3Rpb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL011bHRpcGxlU2VsZWN0aW9uJ1xuaW1wb3J0IEZvcm1TZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRm9ybVNlcXVlbmNlJ1xuaW1wb3J0IFJpY2hUZXh0RWRpdG9yIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9SaWNoVGV4dEVkaXRvcidcbmltcG9ydCBCb3VuZGluZ0JveGVzIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Cb3VuZGluZ0JveGVzJ1xuaW1wb3J0IFRleHRTZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvVGV4dFNlcXVlbmNlJ1xuaW1wb3J0IERhdGUgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0RhdGUnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQmxvY2tDb21wb25lbnQgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgc2V0RmllbGRWYWx1ZSxcbiAgICBpc0VkaXRpbmcsXG4gICAgaW5kZXgsXG4gICAgYmxvY2ssXG4gICAgb25EZWxldGUsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIGhhbmRsZUJsdXIsXG4gICAgb25FZGl0LFxuICAgIGVycm9yc1xuICB9ID0gcHJvcHMgfHwge31cbiAgbGV0IHJlbmRlckNtcFxuXG4gIHN3aXRjaCAoYmxvY2sudHlwZSkge1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5URVhUOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkVNQUlMOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVtYWlsLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgZXJyb3I6IF9vcHRpb25hbENoYWluKFtlcnJvcnMsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5lbWFpbF0pLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjZ9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5OVU1CRVI6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTnVtYmVyLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogODF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5MSU5LOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBlcnJvcjogX29wdGlvbmFsQ2hhaW4oW2Vycm9ycywgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIubGlua10pLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBoYW5kbGVCbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTR9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5JTUFHRTpcbiAgICAgIHJlbmRlckNtcCA9IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA5fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQVVESU86XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVkaWFCbG9jaywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIwfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuVklERU86XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVkaWFCbG9jaywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTMxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQklOQVJZOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJpbmFyeSwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hbWVkRW50aXR5UmVjb2duaXRpb24sIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBlcnJvcjogZXJyb3JzLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU2fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVM6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm91bmRpbmdCb3hlcywge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuRU1CRUQ6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1iZWQsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBlcnJvcjogZXJyb3JzLFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg1fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIEJMT0NLX1RZUEUuUERGOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBkZlJlYWRlciwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGVycm9yOiBlcnJvcnMsXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDB9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVNlbGVjdGlvbiwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTjpcbiAgICAgIHJlbmRlckNtcCA9IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNdWx0aXBsZVNlbGVjdGlvbiwge1xuICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyOH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0U6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybVNlcXVlbmNlLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDF9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5SSUNIX1RFWFQ6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRFZGl0b3IsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1NX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBCTE9DS19UWVBFLlRFWFRfU0VRVUVOQ0U6XG4gICAgICByZW5kZXJDbXAgPSAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFNlcXVlbmNlLCB7XG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBibG9jazogYmxvY2ssXG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjh9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICBicmVha1xuICAgIGNhc2UgQkxPQ0tfVFlQRS5EQVRFOlxuICAgICAgcmVuZGVyQ21wID0gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGUsIHtcbiAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4Mn19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlbmRlckNtcCA9IG51bGxcbiAgfVxuICByZXR1cm4gcmVuZGVyQ21wXG59KVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0NvbXBvbmVudFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb25CdXR0b24nXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdjbGllbnQvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JMT0NLUyx9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZ3JpZCcsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyNXB4IDI1cHgnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgb3BhY2l0eTogMCxcbiAgdHJhbnNpdGlvbjogJ3Zpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC4yNTBzIGxpbmVhcicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICByaWdodDogJy01cHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJ1xufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZvbnRTaXplOiAxOCxcbiAgY29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOXG59KVxuXG5jb25zdCBUeXBlSWNvbiA9IHN0eWxlZChTdHlsZWRJY29uKSh7XG4gIGNvbG9yOiBQQUxFVFRFLkJBQ0tHUk9VTkRfR1JBWV9NSUQsXG4gIGN1cnNvcjogJ2RlZmF1bHQnXG59KVxuXG5jb25zdCBCbG9ja0hlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nLCBibG9ja1R5cGV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyfX1cbiAgICAgICwgaXNFZGl0aW5nICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDR9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IG9uRWRpdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX0sIFwic2V0dGluZ3NcIilcbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogb25EZWxldGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OH19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19LCBcImRlbGV0ZVwiKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX0sIF9vcHRpb25hbENoYWluKFtCTE9DS1MsICdhY2Nlc3MnLCBfID0+IF8uZmluZCwgJ2NhbGwnLCBfMiA9PiBfMihiID0+IGIudHlwZSA9PT0gYmxvY2tUeXBlKSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuaWNvbl0pKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0hlYWRlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IEJsb2NrV3JhcHBlciA9IHN0eWxlZC5kaXYoKHt0eXBlLCBpbmRleH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYgIWltcG9ydGFudCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNlN2U5ZWMnLFxuICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMDI1KSAwcHggMnB4IDRweCcsXG4gIHpJbmRleDogdHlwZSA9PT0gJ2RhdGUnID8gMTAgLSBpbmRleCA6IDFcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1dyYXBwZXJcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JY29uQnV0dG9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWYsfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUGxhaW5CdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5cblxuXG5cblxuXG5cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBib3JkZXJSYWRpdXM6IDUwLFxuICB3aWR0aDogMjUsXG4gIGhlaWdodDogMjUsXG4gIHBhZGRpbmc6IDAsXG4gIG1hcmdpbjogMCxcbiAgdHJhbnNpdGlvbjogJ2FsbCAyMDBtcyBlYXNlLWluJyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfVxufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge29uQ2xpY2ssIHR5cGUsIGNoaWxkcmVuLCBzdHlsZX0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCB0eXBlOiB0eXBlLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319XG4gICAgICAsIGNoaWxkcmVuXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvUkdMLnRzeFwiO2ltcG9ydCBSZWFjdCwge30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UmVzcG9uc2l2ZSwgV2lkdGhQcm92aWRlcix9IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0J1xuXG5cbmltcG9ydCAndW5pdmVyc2FsL3N0eWxlcy9jc3MvcmVhY3QtZ3JpZC1sYXlvdXQuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZWFjdC1yZXNpemFibGUuY3NzJ1xuaW1wb3J0ICd1bml2ZXJzYWwvc3R5bGVzL2Nzcy9yZ2wtb3ZlcmlkZS5jc3MnXG5cbmNvbnN0IFJHTFdpZHRoUHJvdmlkZXIgPSBXaWR0aFByb3ZpZGVyKFJlc3BvbnNpdmUpXG5leHBvcnQgY29uc3QgUkdMX0NPTFVNTlMgPSAyMFxuZXhwb3J0IGNvbnN0IFJHTF9ST1dTID0gNDBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSR0xDb250YWluZXIgPSBzdHlsZWQoUkdMV2lkdGhQcm92aWRlcikoe1xuICB3aWR0aDogJzEwMCUnLFxuICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNTBweCknLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhmOGZhJ1xufSlcblxuY29uc3QgUkdMV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdzY3JvbGwnXG59KVxuXG5jb25zdCBSR0wgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGlzRHJhZ2dhYmxlLFxuICAgIGlzRHJvcHBhYmxlLFxuICAgIGlzUmVzaXphYmxlLFxuICAgIG9uRHJhZ1N0YXJ0LFxuICAgIG9uRHJhZ1N0b3AsXG4gICAgb25Ecm9wLFxuICAgIG9uTGF5b3V0Q2hhbmdlLFxuICAgIGxheW91dHMsXG4gICAgZHJvcHBpbmdJdGVtXG4gIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUkdMV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUkdMQ29udGFpbmVyLCB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBhdXRvU2l6ZTogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHthbGw6IFJHTF9DT0xVTU5TfSxcbiAgICAgICAgY29sczoge2FsbDogUkdMX0NPTFVNTlN9LFxuICAgICAgICBjb21wYWN0VHlwZTogJ3ZlcnRpY2FsJyxcbiAgICAgICAgaXNEcmFnZ2FibGU6IGlzRHJhZ2dhYmxlLFxuICAgICAgICBpc0Ryb3BwYWJsZTogaXNEcm9wcGFibGUsXG4gICAgICAgIGlzQm91bmRlZDogdHJ1ZSxcbiAgICAgICAgZHJvcHBpbmdJdGVtOiBkcm9wcGluZ0l0ZW0sXG4gICAgICAgIGlzUmVzaXphYmxlOiBpc1Jlc2l6YWJsZSxcbiAgICAgICAgbGF5b3V0czoge2FsbDogbGF5b3V0c30sXG4gICAgICAgIG1lYXN1cmVCZWZvcmVNb3VudDogdHJ1ZSxcbiAgICAgICAgdXNlQ1NTVHJhbnNmb3JtczogdHJ1ZSxcbiAgICAgICAgcHJldmVudENvbGxpc2lvbjogZmFsc2UsXG4gICAgICAgIGNvbnRhaW5lclBhZGRpbmc6IFsxMCwgMTBdLFxuICAgICAgICBtYXJnaW46IFsxMCwgMTBdLFxuICAgICAgICBvbkRyYWdTdGFydDogb25EcmFnU3RhcnQsXG4gICAgICAgIG9uRHJhZ1N0b3A6IG9uRHJhZ1N0b3AsXG4gICAgICAgIG9uRHJvcDogb25Ecm9wLFxuICAgICAgICByb3dIZWlnaHQ6IFJHTF9ST1dTLFxuICAgICAgICBvbkxheW91dENoYW5nZTogb25MYXlvdXRDaGFuZ2UsXG4gICAgICAgIGRyYWdnYWJsZUhhbmRsZTogXCIuZHJhZy1oYW5kbGVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX1cbiAgICAgIFxuICAgICAgICAsIGNoaWxkcmVuXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJHTFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1RhZ2dhYmxlTGlzdFdyYXBwZXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge2Rhcmtlbn0gZnJvbSAncG9saXNoZWQnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge2NvbG9yQnlJbmRleH0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldENvbG9yJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2KHtcbiAgd2lkdGg6ICcxOTVweCcsXG4gIG1pbldpZHRoOiAnMTk1cHgnLFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAnYXV0bydcbn0pXG5cbmNvbnN0IExpc3RMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgbWFyZ2luVG9wOiAnMjBweCdcbn0pXG5cbmNvbnN0IENhdGVnb3J5QnV0dG9uID0gc3R5bGVkLnNwYW4oKHthY3RpdmV9KSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgY2xlYXI6ICdib3RoJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgcGFkZGluZzogJzEwcHggMTBweCcsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBib3JkZXI6IGFjdGl2ZSA/ICcxcHggc29saWQgIzY2NDhFRSAhaW1wb3J0YW50JyA6ICcxcHggc29saWQgI0U4RUNFRScsXG4gIGJvcmRlclJhZGl1czogJzRweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAnOmhvdmVyJzoge1xuICAgIGJveFNoYWRvdzogJzBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMjQpJ1xuICB9XG59KSlcblxuY29uc3QgRW50aXR5VGV4dCA9IHN0eWxlZC5zcGFuYFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW5ib3R0b206IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHRhbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJveHNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyNCk7XG4gIGJvcmRlcnJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4ZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduaXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICY6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZWNlZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmBcblxuY29uc3QgQ29sb3JBcnRpZmFjdCA9IHN0eWxlZC5zcGFuKCh7Y29sb3J9KSA9PiAoe1xuICBiYWNrZ3JvdW5kOiBjb2xvcixcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHdpZHRoOiAnMjBweCcsXG4gIGhlaWdodDogJzIwcHgnLFxuICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtkYXJrZW4oMC4zLCBjb2xvcil9YFxufSkpXG5cbmNvbnN0IFRhZ2dhYmxlTGlzdFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge29wdGlvbnMsIHRleHQsIHNlbGVjdGVkQ2F0ZWdvcnksIG9uU2VsZWN0LCBkaXNhYmxlZCwgb2JqZWN0cywgb25Ib3Zlciwgb25DbGlja30gPSBwcm9wc1xuICBjb25zdCBnZXRPcHRpb25JbmRleCA9IChpZCkgPT4ge1xuICAgIGxldCBpbmRleFxuICAgIG9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgIGlmIChvcHRpb24uaWQgPT09IGlkKSB7XG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5kZXhcbiAgfVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFdyYXBwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwN319XG4gICAgICAgICwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhdGVnb3J5QnV0dG9uLCB7XG4gICAgICAgICAgICBrZXk6IG9wdGlvbkluZGV4LFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3Qoe3RhZzogb3B0aW9uLmlkLCBjb2xvcjogY29sb3JCeUluZGV4KG9wdGlvbkluZGV4KX0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgYWN0aXZlOiAhZGlzYWJsZWQgJiYgc2VsZWN0ZWRDYXRlZ29yeS50YWcgPT09IG9wdGlvbi5pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwOX19XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sb3JBcnRpZmFjdCwgeyBjb2xvcjogY29sb3JCeUluZGV4KG9wdGlvbkluZGV4KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExOX19IClcbiAgICAgICAgICAgICwgb3B0aW9uLm5hbWVcbiAgICAgICAgICApXG4gICAgICAgICkpXG4gICAgICApXG5cbiAgICAgICwgQXJyYXkuaXNBcnJheSh0ZXh0KSAmJiB0ZXh0Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTI2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyN319LCBcIkVudGl0aWVzXCIpXG4gICAgICAgICAgLCB0ZXh0Lm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEVudGl0eVRleHQsIHsga2V5OiBrZXksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzB9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xvckFydGlmYWN0LCB7IGtleToga2V5LCBjb2xvcjogaXRlbS5jb2xvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEzMX19IClcbiAgICAgICAgICAgICAgICAsIGl0ZW0udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICAsIEFycmF5LmlzQXJyYXkob2JqZWN0cykgJiYgb2JqZWN0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0MH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3RMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fSwgXCJPYmplY3RzXCIpXG4gICAgICAgICAgLCBvYmplY3RzLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaXRlbS5jYXRlZ29yeS5yZXBsYWNlKCdfJywgJyAnKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFbnRpdHlUZXh0LCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkhvdmVyKGtleSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25Ib3ZlcihudWxsKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ1fX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbG9yQXJ0aWZhY3QsIHsga2V5OiBrZXksIGNvbG9yOiBjb2xvckJ5SW5kZXgoZ2V0T3B0aW9uSW5kZXgoaXRlbS5jYXRlZ29yeSkpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU3fX0gKVxuICAgICAgICAgICAgICAgICwgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSlcblxuICAgICAgICAgICAgICAgICwgIWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAnMTFweCcsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljayhrZXkpXG4gICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjF9fVxuICAgICAgICAgICAgICAgICAgLCBcImNsb3NlXCJcblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnZ2FibGVMaXN0V3JhcHBlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1RleHRTZXF1ZW5jZS50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0ZpZWxkQXJyYXl9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7RHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZX0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9UZXh0QXJlYSdcbmltcG9ydCBTZWNvbmRhcnlCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvU2Vjb25kYXJ5QnV0dG9uJ1xuaW1wb3J0IFJvb3RCdXR0b24gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUm9vdEJ1dHRvbidcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcbmltcG9ydCBnZXRJdGVtU3R5bGUgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEl0ZW1TdHlsZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgcG9ydGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuaWYgKCFkb2N1bWVudC5ib2R5KSB7XG4gIHRocm93IG5ldyBFcnJvcignYm9keSBub3QgcmVhZHkgZm9yIHBvcnRhbCBjcmVhdGlvbiEnKVxufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcnRhbClcblxuY29uc3QgSWNvbkJ1dHRvbiA9IHN0eWxlZChSb290QnV0dG9uKSh7XG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxufSlcblxuY29uc3QgRmllbGRXcmFwcGVyID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgbWFyZ2luQm90dG9tOiAyLjUsXG4gIG1hcmdpblRvcDogMi41LFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQoRmllbGRXcmFwcGVyKWBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICR7KHtpc1Rhc2ssIG9yZGVyaW5nRGlzYWJsZWQsIGRlbGV0ZURpc2FibGVkfSkgPT5cbiAgICBpc1Rhc2sgJiYgIW9yZGVyaW5nRGlzYWJsZWQgJiYgIWRlbGV0ZURpc2FibGVkXG4gICAgICA/IGBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgJi5mb2N1c2VkIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbiAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIH1cbmBcbiAgICAgIDogYGB9XG5cbiAgJHsoe2lzRWRpdGluZ30pID0+XG4gICAgaXNFZGl0aW5nXG4gICAgICA/IGBcbiAgJi5mb2N1c2VkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIH1cbmBcbiAgICAgIDogYGB9XG4gICR7KHtpc1Rhc2ssIG9yZGVyaW5nRGlzYWJsZWQsIGRlbGV0ZURpc2FibGVkfSkgPT5cbiAgICBpc1Rhc2sgJiYgb3JkZXJpbmdEaXNhYmxlZCAmJiAhZGVsZXRlRGlzYWJsZWRcbiAgICAgID8gYFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gIGBcbiAgICAgIDogYGB9XG5cbiAgJHsoe2lzVGFzaywgZGVsZXRlRGlzYWJsZWQsIG9yZGVyaW5nRGlzYWJsZWR9KSA9PlxuICAgIGlzVGFzayAmJiBkZWxldGVEaXNhYmxlZCAmJiAhb3JkZXJpbmdEaXNhYmxlZFxuICAgICAgPyBgXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuYFxuICAgICAgOiBgYH1cbiAgJHsoe2lzQXVkaXRzfSkgPT5cbiAgICBpc0F1ZGl0c1xuICAgICAgPyBgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGBcbiAgICAgIDogYGB9XG5gXG5cbmNvbnN0IENvbnRlbnRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnNXB4IDAnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAkeyh7aXNUYXNrLCBvcmRlcmluZ0Rpc2FibGVkLCBkZWxldGVEaXNhYmxlZH0pID0+XG4gICAgaXNUYXNrICYmICFvcmRlcmluZ0Rpc2FibGVkICYmICFkZWxldGVEaXNhYmxlZFxuICAgICAgPyBgXG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGBcbiAgICAgIDogYGB9XG5cbiAgJHsoe2lzVGFzaywgZGVsZXRlRGlzYWJsZWQsIG9yZGVyaW5nRGlzYWJsZWR9KSA9PlxuICAgIGlzVGFzayAmJiBkZWxldGVEaXNhYmxlZCAmJiBvcmRlcmluZ0Rpc2FibGVkXG4gICAgICA/IGBcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgYFxuICAgICAgOiBgYH1cblxuICAkeyh7aXNFZGl0aW5nLCBkZWxldGVEaXNhYmxlZH0pID0+XG4gICAgaXNFZGl0aW5nICYmICFkZWxldGVEaXNhYmxlZFxuICAgICAgPyBgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAke0NvbnRlbnRXcmFwcGVyfTpob3ZlciAmIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgJi5mb2N1c2VkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgYFxuICAgICAgOiBgYH1cbmBcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgJHsoe2lzVGFzaywgb3JkZXJpbmdEaXNhYmxlZH0pID0+XG4gICAgaXNUYXNrICYmICFvcmRlcmluZ0Rpc2FibGVkXG4gICAgICA/IGBcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgJi5mb2N1c2VkIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICAgICR7Q29udGVudFdyYXBwZXJ9OmhvdmVyICYge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIGBcbiAgICAgIDogYGB9XG4gICR7KHtpc1Rhc2ssIG9yZGVyaW5nRGlzYWJsZWR9KSA9PlxuICAgIGlzVGFzayAmJiBvcmRlcmluZ0Rpc2FibGVkXG4gICAgICA/IGBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgXG4gICAgICA6IGBgfVxuICAkeyh7aXNFZGl0aW5nfSkgPT5cbiAgICBpc0VkaXRpbmdcbiAgICAgID8gYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICYuZm9jdXNlZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAke0NvbnRlbnRXcmFwcGVyfTpob3ZlciAmIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICAgICAgOiBgYH1cbmBcblxuY29uc3QgQmxvY2tJbnB1dCA9ICh7XG4gIHByb3ZpZGVkLFxuICBzbmFwc2hvdCxcbiAgc2VxSWR4LFxuICBkYXRhLFxuICBpbmRleCxcbiAgdHlwZSxcbiAgc2V0RmllbGRWYWx1ZSxcbiAgdGFyZ2V0TmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIGlzQXVkaXRzLFxuICBhcnJheUhlbHBlcnMsXG4gIGlzRWRpdGluZyxcbiAgc2V0dGluZ3Ncbn0pID0+IHtcbiAgY29uc3Qgc2V0Rm9jdXNTdHlsZXMgPSAoZWxlbWVudHMsIGFjdGlvbikgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICBfb3B0aW9uYWxDaGFpbihbZWxlbWVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIuY2xhc3NMaXN0LCAnYWNjZXNzJywgXzMgPT4gXzNbYWN0aW9uXSwgJ2NhbGwnLCBfNCA9PiBfNCgnZm9jdXNlZCcpXSlcbiAgICB9KVxuICB9XG4gIGNvbnN0IGlzVGFzayA9ICFpc0VkaXRpbmcgJiYgIWlzQXVkaXRzXG4gIGNvbnN0IHNob3dEZWxldGUgPSBpc0F1ZGl0cyA/IGZhbHNlIDogIXNldHRpbmdzLmRlbGV0ZURpc2FibGVkXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50QmxvY2ssIHtcbiAgICAgIC4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzLFxuICAgICAgcmVmOiBwcm92aWRlZC5pbm5lclJlZixcbiAgICAgIHN0eWxlOiBnZXRJdGVtU3R5bGUoc25hcHNob3QuaXNEcmFnZ2luZywgcHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGUpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjAxfX1cbiAgICBcbiAgICAgICwgZGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50V3JhcHBlciwge1xuICAgICAgICAgIGlkOiBgY29udGVudC13cmFwcGVyLSR7c2VxSWR4fWAsXG4gICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGlzVGFzazogaXNUYXNrLFxuICAgICAgICAgIG9yZGVyaW5nRGlzYWJsZWQ6IHNldHRpbmdzLm9yZGVyaW5nRGlzYWJsZWQsXG4gICAgICAgICAgZGVsZXRlRGlzYWJsZWQ6IHNldHRpbmdzLmRlbGV0ZURpc2FibGVkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA3fX1cbiAgICAgICAgXG4gICAgICAgICAgLCBpc1Rhc2sgJiYgIXNldHRpbmdzLm9yZGVyaW5nRGlzYWJsZWQgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtcbiAgICAgICAgICAgICAgLi4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzLFxuICAgICAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgICAgICBpc1Rhc2s6IGlzVGFzayxcbiAgICAgICAgICAgICAgaWQ6IGBkcmFnLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgb3JkZXJpbmdEaXNhYmxlZDogc2V0dGluZ3Mub3JkZXJpbmdEaXNhYmxlZCxcbiAgICAgICAgICAgICAgc3R5bGU6IHtmb250U2l6ZTogMTUsIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTn0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTZ9fVxuICAgICAgICAgICAgLCBcImRyYWdfaW5kaWNhdG9yXCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcblxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dFdyYXBwZXIsIHtcbiAgICAgICAgICAgIGlkOiBgaW5wdXQtd3JhcHBlci0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgICBpc1Rhc2s6IGlzVGFzayxcbiAgICAgICAgICAgIG9yZGVyaW5nRGlzYWJsZWQ6IHNldHRpbmdzLm9yZGVyaW5nRGlzYWJsZWQsXG4gICAgICAgICAgICBkZWxldGVEaXNhYmxlZDogc2V0dGluZ3MuZGVsZXRlRGlzYWJsZWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzF9fVxuICAgICAgICAgIFxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7XG4gICAgICAgICAgICAgIG5hbWU6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS52YWx1ZVske3NlcUlkeH1dYCxcbiAgICAgICAgICAgICAgY2FjaGVNZWFzdXJlbWVudHM6IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBvbkZvY3VzOiAoKSA9PlxuICAgICAgICAgICAgICAgIHNldEZvY3VzU3R5bGVzKFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBgY29udGVudC13cmFwcGVyLSR7c2VxSWR4fWAsXG4gICAgICAgICAgICAgICAgICAgIGBkcmFnLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICAgICAgYGNsb3NlLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICAgICAgYGlucHV0LXdyYXBwZXItJHtzZXFJZHh9YFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICdhZGQnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgIG9uQmx1cjogKCkgPT5cbiAgICAgICAgICAgICAgICBzZXRGb2N1c1N0eWxlcyhcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgYGNvbnRlbnQtd3JhcHBlci0ke3NlcUlkeH1gLFxuICAgICAgICAgICAgICAgICAgICBgZHJhZy1pY29uLSR7c2VxSWR4fWAsXG4gICAgICAgICAgICAgICAgICAgIGBjbG9zZS1pY29uLSR7c2VxSWR4fWAsXG4gICAgICAgICAgICAgICAgICAgIGBpbnB1dC13cmFwcGVyLSR7c2VxSWR4fWBcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAncmVtb3ZlJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICBvbktleURvd246IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShgJHt0YXJnZXROYW1lfVske3NlcUlkeH1dYCwgdmFsdWUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHZhbHVlOiBkYXRhW3NlcUlkeF0sXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfb3B0aW9uYWxDaGFpbihbcGxhY2Vob2xkZXIsICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81W3NlcUlkeF1dKSB8fCAnVGV4dCcsXG4gICAgICAgICAgICAgIHJlYWRPbmx5OiBpc0F1ZGl0cyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHNldHRpbmdzLmVkaXREaXNhYmxlZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzOX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgc2hvd0RlbGV0ZSAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBhcnJheUhlbHBlcnMucmVtb3ZlKHNlcUlkeCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyODF9fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7XG4gICAgICAgICAgICAgICAgaXNBdWRpdHM6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgICAgICAgIGRlbGV0ZURpc2FibGVkOiBzZXR0aW5ncy5kZWxldGVEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBpZDogYGNsb3NlLWljb24tJHtzZXFJZHh9YCxcbiAgICAgICAgICAgICAgICBzdHlsZToge2ZvbnRTaXplOiAxNSwgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOfSxcbiAgICAgICAgICAgICAgICBpc1Rhc2s6IGlzVGFzaywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4Nn19XG4gICAgICAgICAgICAgICwgXCJjbG9zZVwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBUZXh0U2VxdWVuY2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgZGF0YSxcbiAgICBpbmRleCxcbiAgICBpc0VkaXRpbmcsXG4gICAgdHlwZSxcbiAgICBpc0F1ZGl0cyxcbiAgICB0YXJnZXROYW1lLFxuICAgIHNldEZpZWxkVmFsdWUsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgc2V0dGluZ3NcbiAgfSA9IHByb3BzXG4gIGNvbnN0IG9uRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHtkZXN0aW5hdGlvbiwgc291cmNlLCBkcmFnZ2FibGVJZH0gPSByZXN1bHRcbiAgICAgIGlmIChcbiAgICAgICAgIWRlc3RpbmF0aW9uIHx8XG4gICAgICAgIChkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmIGRlc3RpbmF0aW9uLmluZGV4ID09PSBzb3VyY2UuaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYW5nZWRJdGVtID0gZGF0YVtkcmFnZ2FibGVJZF1cblxuICAgICAgY29uc3QgbmV3TGlzdCA9IGRhdGFcbiAgICAgIG5ld0xpc3Quc3BsaWNlKHNvdXJjZS5pbmRleCwgMSlcbiAgICAgIG5ld0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCBjaGFuZ2VkSXRlbSlcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7dHlwZX1dLnZhbHVlYCwgbmV3TGlzdClcbiAgICB9LFxuICAgIFtkYXRhLCBpbmRleF1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEFycmF5LCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcmVuZGVyOiAoYXJyYXlIZWxwZXJzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcmFnRHJvcENvbnRleHQsIHsgb25EcmFnRW5kOiBvbkRyYWdFbmQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDJ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3BwYWJsZSwgeyBkcm9wcGFibGVJZDogXCJkcm9wYWJsZS1saXN0XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDN9fVxuICAgICAgICAgICAgICAsIChwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgLi4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHMsIHJlZjogcHJvdmlkZWQuaW5uZXJSZWYsIHN0eWxlOiB7d2lkdGg6ICcxMDAlJ30sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDV9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDZ9fVxuICAgICAgICAgICAgICAgICAgICAsIEFycmF5LmlzQXJyYXkoZGF0YSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoXywgc2VxSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYWdnYWJsZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogc2VxSWR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkOiBTdHJpbmcoc2VxSWR4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RyYWdEaXNhYmxlZDogaXNFZGl0aW5nIHx8IGlzQXVkaXRzIHx8IHNldHRpbmdzLm9yZGVyaW5nRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHNlcUlkeCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgKHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlUG9ydGFsID0gc25hcHNob3QuaXNEcmFnZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tJbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVkOiBwcm92aWRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdDogc25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VxSWR4OiBzZXFJZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5hbWU6IHRhcmdldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUhlbHBlcnM6IGFycmF5SGVscGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogc2V0dGluZ3MsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNTl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZVBvcnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZCwgcG9ydGFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIHByb3ZpZGVkLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4Nn19XG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cyB8fCBzZXR0aW5ncy5lZGl0RGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlIZWxwZXJzLnB1c2goJycpXG4gICAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4N319XG4gICAgICAgICAgICAgICAgICAgICwgXCJBZGQgSXRlbVwiXG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzOH19XG4gICAgKVxuICApXG59XG5cblRleHRTZXF1ZW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNldHRpbmdzOiB7XG4gICAgZGVsZXRlRGlzYWJsZWQ6IGZhbHNlLFxuICAgIGVkaXREaXNhYmxlZDogZmFsc2UsXG4gICAgb3JkZXJpbmdEaXNhYmxlZDogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0U2VxdWVuY2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9iYm94LWFubm90YXRvci9CQm94QW5ub3RhdG9yLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJCb3hTZWxlY3RvciBmcm9tICcuL0JCb3hTZWxlY3RvcidcbmltcG9ydCB7Y29sb3JCeUluZGV4fSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBCQm94QW5ub3RhdG9yID0gKHtcbiAgdXJsLFxuICBib3JkZXJXaWR0aCA9IDIsXG4gIHNlbGVjdGVkTGFiZWwsXG4gIG9uQ2hhbmdlLFxuICBvYmplY3RzLFxuICBkaXNhYmxlZCxcbiAgaGlnaGxpZ2h0SW5kZXhcbn0pID0+IHtcbiAgY29uc3QgW3BvaW50ZXIsIHNldFBvaW50ZXJdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtlbnRyaWVzLCBzZXRFbnRyaWVzXSA9IHVzZVN0YXRlKG9iamVjdHMpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkNoYW5nZShcbiAgICAgIGVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgdzogK3BhcnNlRmxvYXQoZW50cnkudykudG9GaXhlZCgyKSxcbiAgICAgICAgaDogK3BhcnNlRmxvYXQoZW50cnkuaCkudG9GaXhlZCgyKSxcbiAgICAgICAgeTogK3BhcnNlRmxvYXQoZW50cnkueSkudG9GaXhlZCgyKSxcbiAgICAgICAgeDogK3BhcnNlRmxvYXQoZW50cnkueCkudG9GaXhlZCgyKSxcbiAgICAgICAgY2F0ZWdvcnk6IGVudHJ5LmNhdGVnb3J5LFxuICAgICAgICBjb2xvcjogZW50cnkuY29sb3JcbiAgICAgIH0pKVxuICAgIClcbiAgfSwgW2VudHJpZXNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShvYmplY3RzKSAmJlxuICAgICAgQXJyYXkuaXNBcnJheShlbnRyaWVzKSAmJlxuICAgICAgIV8uaXNFcXVhbChvYmplY3RzLnNvcnQoKSwgZW50cmllcy5zb3J0KCkpXG4gICAgKSB7XG4gICAgICBzZXRFbnRyaWVzKG9iamVjdHMpXG4gICAgfVxuICB9LCBbb2JqZWN0c10pXG5cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCdmcmVlJylcbiAgY29uc3QgW2ltYWdlRnJhbWVTdHlsZSwgc2V0SW1hZ2VGcmFtZVN0eWxlXSA9IHVzZVN0YXRlXG5cblxuXG4oe30pXG5cbiAgY29uc3QgYkJveEltYWdlUmVmID0gdXNlUmVmKG51bGwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKClcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gdXJsXG4gICAgaW1hZ2VFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VFbGVtZW50LndpZHRoXG4gICAgICBjb25zdCBoZWlnaHQgPSBpbWFnZUVsZW1lbnQuaGVpZ2h0XG4gICAgICBzZXRJbWFnZUZyYW1lU3R5bGUoe1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2VTcmM6IGltYWdlRWxlbWVudC5zcmMsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYkJveEltYWdlUmVmLCB1cmxdKVxuXG4gIGNvbnN0IGNyb3AgPSAocGFnZVgsIHBhZ2VZKSA9PiB7XG4gICAgY29uc3QgeCA9XG4gICAgICBiQm94SW1hZ2VSZWYuY3VycmVudCAmJiBpbWFnZUZyYW1lU3R5bGUud2lkdGhcbiAgICAgICAgPyAoTWF0aC5taW4oXG4gICAgICAgICAgICBNYXRoLm1heChNYXRoLnJvdW5kKHBhZ2VYIC0gYkJveEltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCksIDApLFxuICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2JCb3hJbWFnZVJlZiwgJ2FjY2VzcycsIF8yID0+IF8yLmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLm9mZnNldFdpZHRoXSlcbiAgICAgICAgICApIC9cbiAgICAgICAgICAgIF9vcHRpb25hbENoYWluKFtiQm94SW1hZ2VSZWYsICdhY2Nlc3MnLCBfNCA9PiBfNC5jdXJyZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5vZmZzZXRXaWR0aF0pKSAqXG4gICAgICAgICAgMTAwXG4gICAgICAgIDogMFxuXG4gICAgY29uc3QgeSA9XG4gICAgICBiQm94SW1hZ2VSZWYuY3VycmVudCAmJiBpbWFnZUZyYW1lU3R5bGUuaGVpZ2h0XG4gICAgICAgID8gKE1hdGgubWluKFxuICAgICAgICAgICAgTWF0aC5tYXgoTWF0aC5yb3VuZChwYWdlWSAtIGJCb3hJbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpLCAwKSxcbiAgICAgICAgICAgIF9vcHRpb25hbENoYWluKFtiQm94SW1hZ2VSZWYsICdhY2Nlc3MnLCBfNiA9PiBfNi5jdXJyZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfNyA9PiBfNy5vZmZzZXRIZWlnaHRdKVxuICAgICAgICAgICkgL1xuICAgICAgICAgICAgX29wdGlvbmFsQ2hhaW4oW2JCb3hJbWFnZVJlZiwgJ2FjY2VzcycsIF84ID0+IF84LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF85ID0+IF85Lm9mZnNldEhlaWdodF0pKSAqXG4gICAgICAgICAgMTAwXG4gICAgICAgIDogMFxuXG4gICAgcmV0dXJuIHt4LCB5fVxuICB9XG4gIGNvbnN0IHVwZGF0ZVJlY3RhbmdsZSA9IChwYWdlWCwgcGFnZVkpID0+IHtcbiAgICBzZXRQb2ludGVyKGNyb3AocGFnZVgsIHBhZ2VZKSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAoc3RhdHVzID09PSAnbW92ZWQnKSB7XG4gICAgICAgICAgdXBkYXRlUmVjdGFuZ2xlKGUucGFnZVgsIGUucGFnZVkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX29wdGlvbmFsQ2hhaW4oW2JCb3hJbWFnZVJlZiwgJ2FjY2VzcycsIF8xMCA9PiBfMTAuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzExID0+IF8xMS5hZGRFdmVudExpc3RlbmVyLCAnY2FsbCcsIF8xMiA9PiBfMTIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpXSlcbiAgICAgIHJldHVybiAoKSA9PiBfb3B0aW9uYWxDaGFpbihbYkJveEltYWdlUmVmLCAnYWNjZXNzJywgXzEzID0+IF8xMy5jdXJyZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTQgPT4gXzE0LnJlbW92ZUV2ZW50TGlzdGVuZXIsICdjYWxsJywgXzE1ID0+IF8xNSgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcildKVxuICAgIH1cbiAgfSwgW3N0YXR1c10pXG5cbiAgY29uc3QgbW91c2VEb3duSGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChlLmJ1dHRvbiAhPT0gMiAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIHNldE9mZnNldChjcm9wKGUucGFnZVgsIGUucGFnZVkpKVxuICAgICAgc2V0UG9pbnRlcihjcm9wKGUucGFnZVgsIGUucGFnZVkpKVxuICAgICAgc2V0U3RhdHVzKCdob2xkJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgY3VycmVudFBvaW50ZXIgPSBjcm9wKGUucGFnZVgsIGUucGFnZVkpXG4gICAgc2V0UG9pbnRlcihjdXJyZW50UG9pbnRlcilcbiAgICBjb25zdCBoYXNNb3ZlZCA9IGN1cnJlbnRQb2ludGVyLnggIT09IF9vcHRpb25hbENoYWluKFtvZmZzZXQsICdvcHRpb25hbEFjY2VzcycsIF8xNiA9PiBfMTYueF0pICYmIGN1cnJlbnRQb2ludGVyLnkgIT09IF9vcHRpb25hbENoYWluKFtvZmZzZXQsICdvcHRpb25hbEFjY2VzcycsIF8xNyA9PiBfMTcueV0pXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2hvbGQnICYmIGhhc01vdmVkKSB7XG4gICAgICBzZXRTdGF0dXMoJ21vdmVkJylcbiAgICB9XG4gIH1cblxuICBjb25zdCByZWN0YW5nbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeDEgPSBvZmZzZXQgJiYgcG9pbnRlciA/IE1hdGgubWluKG9mZnNldC54LCBwb2ludGVyLngpIDogMFxuICAgIGNvbnN0IHgyID0gb2Zmc2V0ICYmIHBvaW50ZXIgPyBNYXRoLm1heChvZmZzZXQueCwgcG9pbnRlci54KSA6IDBcbiAgICBjb25zdCB5MSA9IG9mZnNldCAmJiBwb2ludGVyID8gTWF0aC5taW4ob2Zmc2V0LnksIHBvaW50ZXIueSkgOiAwXG4gICAgY29uc3QgeTIgPSBvZmZzZXQgJiYgcG9pbnRlciA/IE1hdGgubWF4KG9mZnNldC55LCBwb2ludGVyLnkpIDogMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHgxLFxuICAgICAgeTogeTEsXG4gICAgICB3OiB4MiAtIHgxLFxuICAgICAgaDogeTIgLSB5MVxuICAgIH1cbiAgfSwgW3BvaW50ZXIsIG9mZnNldF0pXG5cbiAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZSgpXG4gIGNvbnN0IGJveFJlZiA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBtb3VzZVVwSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdtb3ZlZCcpIHtcbiAgICAgICAgICB1cGRhdGVSZWN0YW5nbGUoZS5wYWdlWCwgZS5wYWdlWSlcbiAgICAgICAgICBzZXRFbnRyaWVzKFtcbiAgICAgICAgICAgIC4uLmVudHJpZXMsXG4gICAgICAgICAgICB7Li4ucmVjdCwgY2F0ZWdvcnk6IHNlbGVjdGVkTGFiZWwudGFnLCBjb2xvcjogc2VsZWN0ZWRMYWJlbC5jb2xvcn1cbiAgICAgICAgICBdKVxuICAgICAgICB9XG4gICAgICAgIHNldFN0YXR1cygnZnJlZScpXG4gICAgICB9XG4gICAgICBfb3B0aW9uYWxDaGFpbihbYm94UmVmLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTggPT4gXzE4LmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF8xOSA9PiBfMTkuYWRkRXZlbnRMaXN0ZW5lciwgJ2NhbGwnLCBfMjAgPT4gXzIwKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpXSlcbiAgICAgIHJldHVybiAoKSA9PiBfb3B0aW9uYWxDaGFpbihbYm94UmVmLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMjEgPT4gXzIxLmN1cnJlbnQsICdvcHRpb25hbEFjY2VzcycsIF8yMiA9PiBfMjIucmVtb3ZlRXZlbnRMaXN0ZW5lciwgJ2NhbGwnLCBfMjMgPT4gXzIzKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpXSlcbiAgICB9XG4gIH0sIFtib3hSZWYsIHN0YXR1cywgcmVjdF0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBvbk1vdXNlRG93bkNhcHR1cmU6IG1vdXNlRG93bkhhbmRsZXIsXG4gICAgICBvbk1vdXNlTW92ZUNhcHR1cmU6IG1vdXNlTW92ZUhhbmRsZXIsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgcmVmOiBib3hSZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IGAxMDAlYCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBmbG9hdDogYGxlZnRgLFxuICAgICAgICAgIGN1cnNvcjogIWRpc2FibGVkID8gJ2Nyb3NzaGFpcicgOiAnYXV0bydcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4NH19XG4gICAgICBcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6IGAxMDAlYCxcbiAgICAgICAgICAgIG1heEhlaWdodDogYDEwMCVgLFxuICAgICAgICAgICAgZmxvYXQ6IGBsZWZ0YFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVmOiBiQm94SW1hZ2VSZWYsXG4gICAgICAgICAgc3JjOiBpbWFnZUZyYW1lU3R5bGUuYmFja2dyb3VuZEltYWdlU3JjLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX1cbiAgICAgICAgKVxuICAgICAgICAsIHN0YXR1cyA9PT0gJ21vdmVkJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQkJveFNlbGVjdG9yLCB7IHJlY3RhbmdsZTogcmVjdCwgY29sb3I6IHNlbGVjdGVkTGFiZWwuY29sb3IsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMDN9fSApIDogbnVsbFxuICAgICAgICAsIGVudHJpZXMubWFwKChlbnRyeSwgaSkgPT4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBib3JkZXI6IGAke2JvcmRlcldpZHRofXB4IHNvbGlkICR7ZW50cnkuY29sb3IgfHwgY29sb3JCeUluZGV4KGkpfWAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IGAke2VudHJ5Lnl9JWAsXG4gICAgICAgICAgICAgIGxlZnQ6IGAke2VudHJ5Lnh9JWAsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHtlbnRyeS53fSVgLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke2VudHJ5Lmh9JWAsXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleTogaSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNX19XG4gICAgICAgICAgXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYDEwMCVgLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYDEwMCVgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGAke2VudHJ5LmNvbG9yIHx8IGNvbG9yQnlJbmRleChpKX1gLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IGhpZ2hsaWdodEluZGV4ID09PSBpID8gYDAuNWAgOiBgMC4yYFxuICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE4fX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICkpXG4gICAgICApXG4gICAgKVxuICApXG59XG5leHBvcnQgZGVmYXVsdCBCQm94QW5ub3RhdG9yXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmJveC1hbm5vdGF0b3IvQkJveFNlbGVjdG9yLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5cblxuXG5cbmNvbnN0IEJCb3hTZWxlY3RvciA9ICh7cmVjdGFuZ2xlLCBib3JkZXJXaWR0aCA9IDIsIGNvbG9yfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICBzdHlsZToge1xuICAgICAgICBsZWZ0OiBgJHtyZWN0YW5nbGUueH0lYCxcbiAgICAgICAgdG9wOiBgJHtyZWN0YW5nbGUueX0lYCxcbiAgICAgICAgd2lkdGg6IGAke3JlY3RhbmdsZS53fSVgLFxuICAgICAgICBoZWlnaHQ6IGAke3JlY3RhbmdsZS5ofSVgLFxuICAgICAgICBib3JkZXI6IGAke2JvcmRlcldpZHRoIHx8IDJ9cHggc29saWQgJHtjb2xvcn1gLFxuICAgICAgICBib3JkZXJXaWR0aDogYCR7Ym9yZGVyV2lkdGggfHwgMn1weGAsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMH19XG4gICAgXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogYDEwMCVgLFxuICAgICAgICAgIGhlaWdodDogYDEwMCVgLFxuICAgICAgICAgIGJhY2tncm91bmQ6IGAke2NvbG9yfWAsXG4gICAgICAgICAgb3BhY2l0eTogYDAuMmBcbiAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzfX1cbiAgICAgIClcbiAgICApXG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJCb3hTZWxlY3RvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9CaW5hcnkudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcblxuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEJsb2NrID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMTBcbn0pXG5cbmNvbnN0IEJpbmFyeSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBpc0VkaXRpbmcsIHNldEZpZWxkVmFsdWUsIGluZGV4fSA9IHByb3BzIHx8IHt9XG4gIGNvbnN0IHtiaW5hcnksIG5hbWUsIGlkLCBfaWR9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlfSA9IGJpbmFyeSB8fCB7fVxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzJ9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLkJJTkFSWSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDF9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDJ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUYXNrUmFkaW8sIHtcbiAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS5iaW5hcnkudmFsdWVgLFxuICAgICAgICAgICAgaWQ6IGAke19pZH0tdHJ1ZWAsXG4gICAgICAgICAgICB2YWx1ZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJZZXNcIixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhLiR7aW5kZXh9LmJpbmFyeS52YWx1ZWAsIHRydWUpLFxuICAgICAgICAgICAgY2hlY2tlZDogdmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LmJpbmFyeS52YWx1ZWAsXG4gICAgICAgICAgICBpZDogYCR7X2lkfS1mYWxzZWAsXG4gICAgICAgICAgICB2YWx1ZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiTm9cIixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiBzZXRGaWVsZFZhbHVlKGBkYXRhLiR7aW5kZXh9LmJpbmFyeS52YWx1ZWAsIGZhbHNlKSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU1fX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0JvdW5kaW5nQm94ZXMudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IFRhZ2dhYmxlTGlzdFdyYXBwZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFnZ2FibGVMaXN0V3JhcHBlcidcbmltcG9ydCBCQm94QW5ub3RhdG9yLCB7fSBmcm9tICcuLi9iYm94LWFubm90YXRvci9CQm94QW5ub3RhdG9yJ1xuaW1wb3J0IHtjb2xvckJ5SW5kZXh9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpYFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgQm91bmRpbmdCb3hlcyA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nLCBzZXRGaWVsZFZhbHVlLCBpbmRleCwgaXNBdWRpdHN9ID0gcHJvcHNcbiAgY29uc3Qge25hbWV9ID0gYmxvY2tcblxuICBjb25zdCB7cGxhY2Vob2xkZXIsIG9wdGlvbnMsIHZhbHVlfSA9IGJsb2NrW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdIHx8IHt9XG5cbiAgY29uc3QgW29iamVjdHMsIHNldE9iamVjdHNdID0gdXNlU3RhdGUoX29wdGlvbmFsQ2hhaW4oW3ZhbHVlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMiA9PiBfMi5vYmplY3RzXSkgfHwgW10pXG4gIGNvbnN0IFtoaWdobGlnaHRJbmRleCwgc2V0SGlnaGxpZ2h0SW5kZXhdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyB8fCB2YWx1ZS5pbWFnZSA9PT0gJycgPyBwbGFjZWhvbGRlciB8fCAnJyA6IHZhbHVlLmltYWdlXG5cbiAgY29uc3QgW3NlbGVjdGVkTGFiZWwsIHNldFNlbGVjdGVkTGFiZWxdID0gdXNlU3RhdGUoe1xuICAgIHRhZzogb3B0aW9uc1swXS5pZCxcbiAgICBjb2xvcjogY29sb3JCeUluZGV4KDApXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPYmplY3RzKF9vcHRpb25hbENoYWluKFt2YWx1ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMub2JqZWN0c10pKVxuICB9LCBbYmxvY2tbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU11dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmllbGRWYWx1ZShcbiAgICAgIGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVN9XS52YWx1ZS5vYmplY3RzYCxcbiAgICAgIGlzRWRpdGluZyA/IFtdIDogX29wdGlvbmFsQ2hhaW4oW3ZhbHVlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNCA9PiBfNC5vYmplY3RzXSlcbiAgICApXG4gICAgc2V0T2JqZWN0cyhpc0VkaXRpbmcgPyBbXSA6IF9vcHRpb25hbENoYWluKFt2YWx1ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUub2JqZWN0c10pKVxuICB9LCBbcGxhY2Vob2xkZXIsIG9wdGlvbnNdKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBzdHlsZToge2Rpc3BsYXk6ICdibG9jaycsIG1heFdpZHRoOiAnMTAwJScsIG1pbldpZHRoOiAnMTAwJSd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjJ9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY0fX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7IHJvdzogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlV3JhcHBlciwge1xuICAgICAgICAgIG9uTW91c2VEb3duOiAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3M319XG4gICAgICAgIFxuICAgICAgICAgICwgcmVuZGVyVmFsdWUgJiYgKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCQm94QW5ub3RhdG9yLCB7XG4gICAgICAgICAgICAgIHVybDogcmVuZGVyVmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkTGFiZWw6IHNlbGVjdGVkTGFiZWwsXG4gICAgICAgICAgICAgIG9iamVjdHM6IG9iamVjdHMsXG4gICAgICAgICAgICAgIGhpZ2hsaWdodEluZGV4OiBoaWdobGlnaHRJbmRleCxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRPYmplY3RzKGUpXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTfV0udmFsdWUub2JqZWN0c2AsIGUpXG4gICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OX19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUYWdnYWJsZUxpc3RXcmFwcGVyLCB7XG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBvYmplY3RzOiBvYmplY3RzLFxuICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cyxcbiAgICAgICAgICBvblNlbGVjdDogKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZExhYmVsKGxhYmVsKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Ib3ZlcjogKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRJbmRleChpbmRleClcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2xpY2s6IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgc2V0T2JqZWN0cyhvYmplY3RzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogc2VsZWN0ZWRMYWJlbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQm91bmRpbmdCb3hlc1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Db250ZW50LnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuXG5cblxuXG5cblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6ICR7KHtvdmVyZmxvd30pID0+IChvdmVyZmxvdyA/IG92ZXJmbG93IDogJ2F1dG8nKX07XG4gICY6aG92ZXIgJHtDb250YWluZXJ9IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmBcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmNvbnN0IERyYWdIYW5kbGUgPSBzdHlsZWQoSWNvbilgXG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAtMTVweDtcbiAgY3Vyc29yOiAkeyh7aXNFZGl0aW5nfSkgPT4gKGlzRWRpdGluZyA/ICdncmFiJyA6ICdpbmhlcml0Jyl9O1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6ICR7KHtpc0VkaXRpbmd9KSA9PiAoaXNFZGl0aW5nID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xuICAke0NvbnRlbnRDb250YWluZXJ9OmhvdmVyICYge1xuICAgIGRpc3BsYXk6ICR7KHtpc0VkaXRpbmd9KSA9PiAoaXNFZGl0aW5nID8gJ2Jsb2NrJyA6ICdub25lJyl9ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50V3JhcHBlcih7Y2hpbGRyZW4sIGlzRWRpdGluZywgb3ZlcmZsb3d9KSB7XG4gIGNvbnN0IGFkZERyYWdnaW5nU3R5bGVzID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpXG4gIH1cblxuICBjb25zdCByZW1vdmVEcmFnZ2luZ1N0eWxlcyA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKVxuICB9XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEcmFnSGFuZGxlLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJkcmFnLWhhbmRsZVwiLFxuICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogMTgsXG4gICAgICAgICAgY29sb3I6ICcjNjg2ODY5J1xuICAgICAgICB9LFxuICAgICAgICBvbk1vdXNlT3V0OiByZW1vdmVEcmFnZ2luZ1N0eWxlcyxcbiAgICAgICAgb25Nb3VzZURvd246IGFkZERyYWdnaW5nU3R5bGVzLFxuICAgICAgICBvbk1vdXNlVXA6IHJlbW92ZURyYWdnaW5nU3R5bGVzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTd9fVxuICAgICAgLCBcImRyYWdfaGFuZGxlXCJcblxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgaXNFZGl0aW5nOiBpc0VkaXRpbmcsIG92ZXJmbG93OiBvdmVyZmxvdywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDcwfX1cbiAgICAgICAgLCBjaGlsZHJlblxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9EYXRlLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0RhdGVQaWNrZXInXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCB7Z2V0RGlzcGxheUZvcm1hdH0gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRGF0ZUJsb2NrID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtpc0F1ZGl0cywgYmxvY2ssIG9uRWRpdCwgb25EZWxldGUsIHNldEZpZWxkVmFsdWUsIGlzRWRpdGluZywgaW5kZXh9ID0gcHJvcHNcbiAgY29uc3Qge2RhdGUsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IGRhdGUgfHwge31cblxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzJ9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzM319LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLkRBVEUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgLCByZWFkT25seSB8fCBpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX0sIGdldERpc3BsYXlGb3JtYXQocmVuZGVyVmFsdWUpKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZVBpY2tlciwge1xuICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0uZGF0ZS52YWx1ZWAsXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHkgfHwgaXNBdWRpdHMsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDV9fVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlQmxvY2tcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvRW1haWwudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IElucHV0RmllbGQgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSW5wdXRGaWVsZCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYSh7XG4gIGZvbnRTaXplOiAxNixcbiAgbGluZUhlaWdodDogMS41LFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLkxJTkssXG4gIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWFpbChwcm9wcykge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgYmxvY2ssXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBpbmRleCxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZUNoYW5nZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2VtYWlsLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVhZF9vbmx5OiByZWFkT25seSwgdmFsdWUgPSAnJ30gPSBlbWFpbCB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTN9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLkVNQUlMLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICwgIXJlYWRPbmx5ICYmICFpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LmVtYWlsLnZhbHVlYCxcbiAgICAgICAgICAgIHZhbHVlOiByZW5kZXJWYWx1ZSB8fCBcIlwiLFxuICAgICAgICAgICAgaGlkZUVycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBfb3B0aW9uYWxDaGFpbihbZXJyb3IsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy52YWx1ZV0pLFxuICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGluaywgeyBocmVmOiBgbWFpbHRvOiR7cmVuZGVyVmFsdWV9YCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDc2fX0sIHJlbmRlclZhbHVlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0VtYmVkLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgQ29udGVudFdyYXBwZXIgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSUZyYW1lID0gc3R5bGVkLmlmcmFtZSh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBib3JkZXI6IDBcbn0pXG5cbmNvbnN0IEVtYmVkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25FZGl0LCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBlcnJvciwgaW5kZXh9ID0gcHJvcHMgfHwge31cbiAgY29uc3Qge2VtYmVkLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHt2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gZW1iZWQgfHwge31cblxuICBsZXQgc291cmNlVXJsID0gaXNFZGl0aW5nID8gcGxhY2Vob2xkZXIgOiB2YWx1ZVxuXG4gIGlmIChlcnJvci5kYXRhICYmIGVycm9yLmRhdGFbaW5kZXhdICYmIGVycm9yLmRhdGEubGVuZ3RoKSB7XG4gICAgc291cmNlVXJsID0gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50V3JhcHBlciwgeyAuLi5wcm9wcywgb3ZlcmZsb3c6IGBoaWRkZW5gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDB9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MX19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuRU1CRUQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0M319XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUwfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElGcmFtZSwgeyBzcmM6IHNvdXJjZVVybCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX0gKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWJlZFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9Gb3JtU2VxdWVuY2UudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7bWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7RmllbGRBcnJheSx9IGZyb20gJ2Zvcm1paydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcblxuaW1wb3J0IEJhc2ljVGV4dEFyZWEgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmFzaWNUZXh0QXJlYSdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcbmltcG9ydCBUYXNrQ2hlY2tib3ggZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvVGFza0NoZWNrYm94J1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgQnV0dG9uQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgZmxleDogJzAgMCBhdXRvJ1xufSlcblxuY29uc3QgQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgcGFkZGluZzogJzVweCAwJ1xufSlcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXYoe1xuICBoZWlnaHQ6ICcxMDAlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufSlcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXYoe1xuICBmbGV4OiAxXG59KVxuXG5jb25zdCBhc3NpZ25OZXh0QW5kQmFja1Zpc2liaWxpdHkgPSAoXG4gIGN1cnJlbnRJZHgsXG4gIGN1cnJlbnRUeXBlLFxuICBuZXh0QmxvY2tJZCxcbiAgbmV4dEJsb2NrSW5kZXgsXG4gIHZhbHVlLFxuICBkYXRhXG4pID0+IHtcbiAgbGV0IGlzTmV4dERpc2FibGVkID0gZmFsc2VcbiAgbGV0IGlzQmFja0Rpc2FibGVkID0gZmFsc2VcblxuICBpc0JhY2tEaXNhYmxlZCA9IGN1cnJlbnRJZHggPT09IDBcblxuICBpZiAoY3VycmVudElkeCA9PT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgaWYgKG5leHRCbG9ja0luZGV4ID09PSAtMSkge1xuICAgICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChjdXJyZW50VHlwZSA9PT0gQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OIHx8IGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkJJTkFSWSkge1xuICAgICAgaWYgKCF2YWx1ZSkgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc05leHREaXNhYmxlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFuZXh0QmxvY2tJZCAhPT0gbnVsbCAmJiBuZXh0QmxvY2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaXNOZXh0RGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2UgaWYgKG5leHRCbG9ja0lkID09PSBudWxsKSB7XG4gICAgaXNOZXh0RGlzYWJsZWQgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzTmV4dERpc2FibGVkLFxuICAgIGlzQmFja0Rpc2FibGVkXG4gIH1cbn1cblxuY29uc3QgRm9ybVNlcXVlbmNlID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJZHgsIHNldEN1cnJlbnRJZHhdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qge2lzQXVkaXRzLCBibG9jaywgb25EZWxldGUsIGhhbmRsZUNoYW5nZSwgaW5kZXgsIGlzRWRpdGluZywgb25FZGl0LCBzZXRGaWVsZFZhbHVlfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBfaWR9ID0gYmxvY2sgfHwge31cbiAgY29uc3Qge2RhdGEsIGhpc3RvcnkgPSBbXX0gPSBibG9ja1t0eXBlXVxuXG4gIGNvbnN0IGN1cnJlbnRCbG9jayA9IGRhdGFbY3VycmVudElkeF1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0F1ZGl0cykgcmV0dXJuXG4gICAgaWYgKGN1cnJlbnRCbG9jayAmJiBfb3B0aW9uYWxDaGFpbihbaGlzdG9yeSwgJ29wdGlvbmFsQWNjZXNzJywgXyA9PiBfLmxlbmd0aF0pID4gMCkge1xuICAgICAgY29uc3QgbGFzdEJsb2NrSWQgPSBoaXN0b3J5LnBvcCgpXG4gICAgICBjb25zdCBsYXN0QmxvY2tJZHggPSBkYXRhLmZpbmRJbmRleCgoe2lkfSkgPT4gaWQgPT09IGxhc3RCbG9ja0lkKVxuICAgICAgc2V0Q3VycmVudElkeChsYXN0QmxvY2tJZHggKyAxKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKCFjdXJyZW50QmxvY2spIHJldHVybiBudWxsXG5cbiAgY29uc3Qge3R5cGU6IGN1cnJlbnRUeXBlLCBuYW1lOiBjdXJyZW50QmxvY2tOYW1lfSA9IGN1cnJlbnRCbG9ja1xuICBjb25zdCB7dmFsdWUgPSAnJ30gPSBjdXJyZW50QmxvY2tbY3VycmVudFR5cGVdXG4gIGNvbnN0IG5leHRCbG9ja0lkID0gX29wdGlvbmFsQ2hhaW4oW2N1cnJlbnRCbG9jaywgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIubG9naWNfanVtcF0pID8gY3VycmVudEJsb2NrLmxvZ2ljX2p1bXBbdmFsdWVdIDogdW5kZWZpbmVkXG4gIGNvbnN0IG5leHRCbG9ja0luZGV4ID0gZGF0YS5maW5kSW5kZXgoKGJsb2NrKSA9PiBibG9jay5pZCA9PT0gbmV4dEJsb2NrSWQpXG4gIGNvbnN0IGxvZ2ljQmxvY2tzID0gW0JMT0NLX1RZUEUuQklOQVJZLCBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT05dXG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9IChhcnJheUhlbHBlcnMpID0+IHtcbiAgICBpZiAobG9naWNCbG9ja3MuaW5jbHVkZXMoY3VycmVudFR5cGUpKSB7XG4gICAgICBpZiAoIW5leHRCbG9ja0lkKSB7XG4gICAgICAgIGFycmF5SGVscGVycy5wdXNoKGN1cnJlbnRCbG9jay5pZClcbiAgICAgICAgc2V0Q3VycmVudElkeChjdXJyZW50SWR4ICsgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0QmxvY2tJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBhcnJheUhlbHBlcnMucHVzaChjdXJyZW50QmxvY2suaWQpXG4gICAgICAgICAgc2V0Q3VycmVudElkeChuZXh0QmxvY2tJbmRleClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogdW5hYmxlIHRvIGZpbmQgbmV4dCBibG9jayBJRCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcG9wIGN1cnJlbnQgaW5kZXggaW50byBoaXN0b3J5XG4gICAgICBhcnJheUhlbHBlcnMucHVzaChjdXJyZW50QmxvY2suaWQpXG4gICAgICBzZXRDdXJyZW50SWR4KGN1cnJlbnRJZHggKyAxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtoaXN0b3J5LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy5sZW5ndGhdKSA8PSAwKSB7XG4gICAgICBzZXRDdXJyZW50SWR4KDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YWNrZWRJZCA9IGhpc3RvcnkucG9wKClcbiAgICAgIGNvbnN0IG5leHRCbG9ja0luZGV4ID0gZGF0YS5maW5kSW5kZXgoKGJsb2NrKSA9PiBibG9jay5pZCA9PT0gc3RhY2tlZElkKVxuICAgICAgaWYgKG5leHRCbG9ja0luZGV4ICE9PSAtMSkge1xuICAgICAgICBzZXRDdXJyZW50SWR4KG5leHRCbG9ja0luZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q3VycmVudElkeCgwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHtpc05leHREaXNhYmxlZCwgaXNCYWNrRGlzYWJsZWR9ID0gYXNzaWduTmV4dEFuZEJhY2tWaXNpYmlsaXR5KFxuICAgIGN1cnJlbnRJZHgsXG4gICAgY3VycmVudFR5cGUsXG4gICAgbmV4dEJsb2NrSWQsXG4gICAgbmV4dEJsb2NrSW5kZXgsXG4gICAgdmFsdWUsXG4gICAgZGF0YVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uaGlzdG9yeWAsXG4gICAgICByZW5kZXI6IChhcnJheUhlbHBlcnMpID0+IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY1fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjZ9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjd9fVxuICAgICAgICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNjh9fSwgbmFtZSlcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5GT1JNX1NFUVVFTkNFLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc2fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3N319XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNCYWNrRGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBoYW5kbGVCYWNrKGFycmF5SGVscGVycyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgICAgICAgICAgICAgICwgXCJCYWNrXCJcblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzTmV4dERpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gaGFuZGxlTmV4dChhcnJheUhlbHBlcnMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg1fX1cbiAgICAgICAgICAgICAgICAsIFwiTmV4dFwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBjdXJyZW50QmxvY2tOYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX0sIGN1cnJlbnRCbG9ja05hbWUpXG4gICAgICAgICAgICAgICwgY3VycmVudFR5cGUgPT09IEJMT0NLX1RZUEUuVEVYVCAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7ZmxleDogMX0sXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsXG4gICAgICAgICAgICAgICAgICBrZXk6IF9vcHRpb25hbENoYWluKFtjdXJyZW50QmxvY2ssICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80LmlkXSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTV9fVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLk5VTUJFUiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGlzQXVkaXRzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjA3fX1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBjdXJyZW50VHlwZSA9PT0gQkxPQ0tfVFlQRS5FTUFJTCAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxOH19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkxJTksgJiYgKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzB9fVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0uJHt0eXBlfS5kYXRhLiR7Y3VycmVudElkeH0uJHtjdXJyZW50VHlwZX0udmFsdWVgLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzF9fVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLkJJTkFSWSAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0Mn19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQzfX1cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7X2lkfS0ke2N1cnJlbnRJZHh9LXRydWVgLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJZZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDR9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjU5fX1cbiAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tSYWRpbywge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LiR7dHlwZX0uZGF0YS4ke2N1cnJlbnRJZHh9LiR7Y3VycmVudFR5cGV9LnZhbHVlYCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7X2lkfS0ke2N1cnJlbnRJZHh9LWZhbHNlYCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjB9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgY3VycmVudFR5cGUgPT09IEJMT0NLX1RZUEUuU0lOR0xFX1NFTEVDVElPTiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI3OH19XG4gICAgICAgICAgICAgICAgICAsIGN1cnJlbnRCbG9ja1tjdXJyZW50VHlwZV0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjgwfX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogb3B0aW9uLmlkID09PSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4MX19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAsIGN1cnJlbnRUeXBlID09PSBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTiAmJiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5NX19XG4gICAgICAgICAgICAgICAgICAsIGN1cnJlbnRCbG9ja1tjdXJyZW50VHlwZV0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjk3fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza0NoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS4ke3R5cGV9LmRhdGEuJHtjdXJyZW50SWR4fS4ke2N1cnJlbnRUeXBlfS52YWx1ZWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdmFsdWUgJiYgdmFsdWUuaW5jbHVkZXMob3B0aW9uLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0F1ZGl0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI5OH19XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Mn19XG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2VxdWVuY2VcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9ibG9ja3MvSGVhZGVyQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFJlYWN0LCB7fSBmcm9tICdyZWFjdCdcblxuXG5cblxuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGZsZXg6ICcwIDAgYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nLFxuICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICB6SW5kZXg6IDExLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjF9fSwgY2hpbGRyZW4pXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL0ltYWdlLnRzeFwiO2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZC5pbWcoe1xuICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnYXV0bycsXG4gIGhlaWdodDogJ2F1dG8nXG59KVxuXG5jb25zdCBJbWFnZSA9IFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBpZCwgaW1hZ2V9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlLCBwbGFjZWhvbGRlcn0gPSBpbWFnZSB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgc3R5bGU6IHtkaXNwbGF5OiAnYmxvY2snLCBtYXhXaWR0aDogJzEwMCUnLCBtaW5XaWR0aDogJzEwMCUnfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzV9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLklNQUdFLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzd9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NH19XG4gICAgICAgICwgcmVuZGVyVmFsdWUgJiYgKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSW1nLCB7XG4gICAgICAgICAgICBzcmM6IHJlbmRlclZhbHVlLFxuICAgICAgICAgICAgYWx0OiBuYW1lIHx8IHR5cGUsXG4gICAgICAgICAgICB0aXRsZTogbmFtZSB8fCB0eXBlLFxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Nn19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmRpdih7XG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udFNpemU6IDE1XG59KVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbFxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9MaW5rLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkLmEoe1xuICBmb250U2l6ZTogMTYsXG4gIGxpbmVIZWlnaHQ6IDEuNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5MSU5LLFxuICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxuICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICB3b3JkQnJlYWs6ICdicmVhay13b3JkJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICBjb25zdCB7XG4gICAgaXNBdWRpdHMsXG4gICAgYmxvY2ssXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIGlzRWRpdGluZyxcbiAgICBpbmRleCxcbiAgICBlcnJvcixcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZUNoYW5nZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2xpbmssIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IGxpbmsgfHwge31cbiAgY29uc3QgcmVuZGVyVmFsdWUgPSBpc0VkaXRpbmcgPyBwbGFjZWhvbGRlciA6IHZhbHVlXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgLi4ucHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUzfX1cbiAgICAgICAgLCBuYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTR9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5MSU5LLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTV9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICwgIXJlYWRPbmx5ICYmICFpc0F1ZGl0cyA/IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgbmFtZTogYGRhdGEuJHtpbmRleH0ubGluay52YWx1ZWAsXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUgfHwgXCJcIixcbiAgICAgICAgICAgIGhpZGVFcnJvck1lc3NhZ2U6IHRydWUsXG4gICAgICAgICAgICBlcnJvcjogX29wdGlvbmFsQ2hhaW4oW2Vycm9yLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8udmFsdWVdKSxcbiAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZExpbmssIHsgaHJlZjogYCR7cmVuZGVyVmFsdWV9YCwgdGFyZ2V0OiBcIl9ibGFua1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzZ9fVxuICAgICAgICAgICAgLCByZW5kZXJWYWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9NZWRpYUJsb2NrLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ3VuaXZlcnNhbC9ob29rcy91c2VQcmV2aW91cydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICcuLi9CbG9ja0hlYWRlcidcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBQbHlyIGZyb20gJ3BseXInXG5cbmltcG9ydCAncGx5ci9kaXN0L3BseXIuY3NzJ1xuXG5cblxuXG5cblxuXG5cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgY29udHJvbHM6IFsncGxheScsICdwcm9ncmVzcycsICdjdXJyZW50LXRpbWUnLCAnbXV0ZScsICd2b2x1bWUnLCAnc2V0dGluZ3MnLCAnZnVsbHNjcmVlbiddXG59XG5cbmNvbnN0IFZpZGVvUGxheWVyID0gc3R5bGVkLmRpdigoe3Nob3csIGhpZGVPdmVyZmxvd30pID0+ICh7XG4gIGRpc3BsYXk6IHNob3cgPT09IGZhbHNlID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgb3ZlcmZsb3c6IGhpZGVPdmVyZmxvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICB6SW5kZXg6IDFcbn0pKVxuXG5jb25zdCBNZWRpYUJsb2NrID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtibG9jaywgb25EZWxldGUsIG9uRWRpdCwgaXNFZGl0aW5nfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlLCBpZH0gPSBibG9ja1xuICBjb25zdCB7dmFsdWUsIHBsYWNlaG9sZGVyfSA9IGJsb2NrW3R5cGVdIHx8IHt9XG4gIGNvbnN0IHNvdXJjZVVybCA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICBjb25zdCBwcmV2U291cmNlVXJsID0gdXNlUHJldmlvdXMoc291cmNlVXJsKVxuXG4gIGNvbnN0IHNvdXJjZXMgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzb3VyY2VzOiBbe3NyYzogc291cmNlVXJsfV1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZTb3VyY2VVcmwgIT09IHNvdXJjZVVybCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGx5ci0ke2lkfWApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGx5cihlbCwgb3B0aW9ucylcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHBsYXllci5zb3VyY2UgPSBzb3VyY2VzXG5cbiAgICAgIHJldHVybiAoKSA9PiBwbGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9LCBbc291cmNlVXJsXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU5fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjB9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MX19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHsgb25EZWxldGU6IG9uRGVsZXRlLCBvbkVkaXQ6IG9uRWRpdCwgaXNFZGl0aW5nOiBpc0VkaXRpbmcsIGJsb2NrVHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX0gKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjR9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlkZW9QbGF5ZXIsIHsgc2hvdzogc291cmNlVXJsICE9PSAnJyAmJiBzb3VyY2VVcmwgIT09IHVuZGVmaW5lZCwgaGlkZU92ZXJmbG93OiB0eXBlID09PSAndmlkZW8nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjV9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgndmlkZW8nLCB7IGlkOiBgcGx5ci0ke2lkfWAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Nn19IClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYUJsb2NrXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL011bHRpcGxlU2VsZWN0aW9uLnRzeFwiO2ltcG9ydCBSZWFjdCwge21lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFRhc2tDaGVja2JveCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UYXNrQ2hlY2tib3gnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5cbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBMaXN0RmlsdGVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xpc3RGaWx0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENoZWNrYm94ID0gc3R5bGVkLmRpdih7XG4gIG1hcmdpbkJvdHRvbTogMTBcbn0pXG5cbmNvbnN0IE11bHRpQ2xhc3MgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNFZGl0aW5nLCBvbkVkaXR9ID0gcHJvcHNcbiAgY29uc3Qge25hbWUsIHR5cGV9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlfSA9IGJsb2NrWydtdWx0aXBsZV9zZWxlY3Rpb24nXSB8fCB7fVxuICBjb25zdCBpc1Rhc2sgPSAhaXNFZGl0aW5nICYmICFpc0F1ZGl0c1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShibG9ja1t0eXBlXS5vcHRpb25zKVxuICBjb25zdCBvcHRpb25zID0gaXNFZGl0aW5nID8gYmxvY2tbdHlwZV0ub3B0aW9ucyA6IGxpc3RcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk1VTFRJUExFX1NFTEVDVElPTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBpc1Rhc2sgJiYgQXJyYXkuaXNBcnJheShibG9ja1t0eXBlXS5vcHRpb25zKSAmJiBibG9ja1t0eXBlXS5vcHRpb25zLmxlbmd0aCA+IDEwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEZpbHRlciwgeyBsaXN0OiBibG9ja1t0eXBlXS5vcHRpb25zLCBzZXRMaXN0OiBzZXRMaXN0LCBrZXlzOiBbJ25hbWUnXSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ4fX0gKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDl9fVxuICAgICAgICAsIG9wdGlvbnMubWFwKChvcHRpb24sIG9wdGlvbkluZGV4KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwgeyBrZXk6IG9wdGlvbkluZGV4LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhc2tDaGVja2JveCwge1xuICAgICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS5tdWx0aXBsZV9zZWxlY3Rpb24udmFsdWVgLFxuICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOiB2YWx1ZSAmJiB2YWx1ZS5pbmNsdWRlcyhvcHRpb24uaWQpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1Mn19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlDbGFzc1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9OYW1lZEVudGl0eVJlY29nbml0aW9uLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge21lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEnXG5cbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQm9keUNvbnRhaW5lciBmcm9tICcuL0JvZHlDb250YWluZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1NlY29uZGFyeUJ1dHRvbidcbmltcG9ydCBUYWdnYWJsZUxpc3RXcmFwcGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1RhZ2dhYmxlTGlzdFdyYXBwZXInXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgVGV4dEFubm90YXRvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy90ZXh0LWFubm90YXRvci9UZXh0QW5ub3RhdG9yJ1xuaW1wb3J0IHtjb2xvckJ5SW5kZXh9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEJ1dHRvbkJsb2NrID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdncmlkJyxcbiAgbWFyZ2luQm90dG9tOiAxMCxcbiAgbWFyZ2luVG9wOiAxMCxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzgwcHggODBweCcsXG4gIGdyaWRHYXA6IDEwXG59KVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdigoe2VkaXRNb2RlfSkgPT4gKHtcbiAgLi4uKGVkaXRNb2RlICYmIHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZFRlbXBsYXRlUm93czogJ2F1dG8gNTBweCdcbiAgfSlcbn0pKVxuXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXYoXG4gICh7aGlnaGxpZ2h0Q29sb3J9KSA9PiBgXG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgJiBtYXJrIHtcbiAgICAgIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICd4JztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICB3aWR0aDogMTFweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgICAmIG1hcmsgPiBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJiBzcGFuIHtcblxuICAgICAgJjo6c2VsZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHtoaWdobGlnaHRDb2xvcn07XG4gICAgICB9XG4gICAgfVxuYFxuKVxuXG5jb25zdCBOYW1lZEVudGl0eVJlY29nbml0aW9uID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3Qge2Jsb2NrLCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBvbkVkaXQsIHNldEZpZWxkVmFsdWUsIGluZGV4LCBpc0F1ZGl0c30gPSBwcm9wc1xuICBjb25zdCB7bmFtZX0gPSBibG9ja1xuXG4gIGNvbnN0IHthbGxvd19lZGl0czogYWxsb3dFZGl0cywgcGxhY2Vob2xkZXIsIG9wdGlvbnMsIHZhbHVlID0gJycsIGVudGl0aWVzID0gW119ID1cbiAgICBibG9ja1tCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTl0gfHwge31cblxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShlbnRpdGllcylcbiAgY29uc3QgW3VzZXJTZWxlY3QsIHNldFVzZXJTZWxlY3RdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkaXNhYmxlU2VsZWN0aW9uLCBzZXREaXNhYmxlU2VsZWN0aW9uXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtlZGl0TW9kZSwgdG9nZ2xFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSh7XG4gICAgdGFnOiBvcHRpb25zWzBdLmlkLFxuICAgIGNvbG9yOiBjb2xvckJ5SW5kZXgoMClcbiAgfSlcblxuICBjb25zdCByZW5kZXJUZXh0ID0gaXNFZGl0aW5nIHx8IHZhbHVlID09PSAnJyA/IHBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWVcbiAgbGV0IHRleHRGaWVsZE5hbWUgPSBgZGF0YS4ke2luZGV4fS4ke0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfS52YWx1ZWBcbiAgaWYgKGlzRWRpdGluZyB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICB0ZXh0RmllbGROYW1lID0gYGRhdGEuJHtpbmRleH0uJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn0ucGxhY2Vob2xkZXJgXG4gIH1cblxuICBjb25zdCBbdGV4dEZpZWxkVmFsdWUsIHNldFRleHRGaWVsZFZhbHVlXSA9IHVzZVN0YXRlKHJlbmRlclRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyByZXNldCB0YWdzIHdoZW4gcGxhY2Vob2xkZXIgYW5kIG9wdGlvbnMgY2hhbmdlZFxuICAgIGlmIChpc0VkaXRpbmcpIHtcbiAgICAgIHNldFRleHQoW10pXG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0uZW50aXRpZXNgLCBbXSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGV4dChlbnRpdGllcylcbiAgICAgIHNldEZpZWxkVmFsdWUoYGRhdGFbJHtpbmRleH1dWyR7QkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT059XS5lbnRpdGllc2AsIGVudGl0aWVzKVxuICAgIH1cbiAgfSwgW3BsYWNlaG9sZGVyLCBvcHRpb25zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICBgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn1dLmVudGl0aWVzYCxcbiAgICAgIGlzRWRpdGluZyA/IFtdIDogdGV4dFxuICAgIClcbiAgfSwgW3RleHRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeSh7XG4gICAgICB0YWc6IG9wdGlvbnNbMF0uaWQsXG4gICAgICBjb2xvcjogY29sb3JCeUluZGV4KDApXG4gICAgfSlcbiAgfSwgW29wdGlvbnNdKVxuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICBzZXRUZXh0RmllbGRWYWx1ZSh2YWx1ZSlcbiAgICB9LFxuICAgIFt0ZXh0RmllbGRWYWx1ZV1cbiAgKVxuXG4gIGNvbnN0IGZvcm1hdEVudGl0aWVzRm9yVUlSZW5kZXJpbmcgPSAoZW50aXRpZXMpID0+IHtcbiAgICBjb25zdCBlbnRpdGllc0luc3RhbmNlID0gZW50aXRpZXNcbiAgICByZXR1cm4gZW50aXRpZXNJbnN0YW5jZS5maWx0ZXIoKGl0bSkgPT4ge1xuICAgICAgY29uc3QgW29wdGlvbk5hbWUsIGluZGV4XSA9IGZpbmRPcHRpb25OYW1lRnJvbUlkKGl0bS50YWcpXG4gICAgICBpZiAoIW9wdGlvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpdG0uY29sb3IgPSBjb2xvckJ5SW5kZXgoaW5kZXgpXG4gICAgICByZXR1cm4gaXRtXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGZpbmRPcHRpb25OYW1lRnJvbUlkID0gKGlkKSA9PiB7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgaW5kZXhcbiAgICBvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICBpZiAob3B0aW9uLmlkID09PSBpZCkge1xuICAgICAgICBuYW1lID0gb3B0aW9uLm5hbWVcbiAgICAgICAgaW5kZXggPSBpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBbbmFtZSwgaW5kZXhdXG4gIH1cblxuICBjb25zdCBoYW5kbGVBbm5vdGF0ZSA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKHVzZXJTZWxlY3QpIHtcbiAgICAgIHNldFVzZXJTZWxlY3QoZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWlzQXVkaXRzKSB7XG4gICAgICBzZXRUZXh0KHRleHQpXG4gICAgICBzZXRGaWVsZFZhbHVlKFxuICAgICAgICBgZGF0YVske2luZGV4fV1bJHtCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTn1dLmVudGl0aWVzYCxcbiAgICAgICAgaXNFZGl0aW5nID8gW10gOiB0ZXh0XG4gICAgICApXG4gICAgICBzZXRGaWVsZFZhbHVlKGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0udmFsdWVgLCByZW5kZXJUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJveFJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChib3hSZWYgIT09IHVuZGVmaW5lZCAmJiBib3hSZWYuY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBib3hSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZGV0YWlsID49IDMpIHtcbiAgICAgICAgICBzZXRVc2VyU2VsZWN0KHRydWUpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYm94UmVmXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChfb3B0aW9uYWxDaGFpbihbaW5wdXRSZWYsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5jdXJyZW50XSkpIHtcbiAgICAgIF9vcHRpb25hbENoYWluKFtpbnB1dFJlZiwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMuc3R5bGUsICdhY2Nlc3MnLCBfNCA9PiBfNC5zZXRQcm9wZXJ0eSwgJ2NhbGwnLCBfNSA9PiBfNSgnaGVpZ2h0JywgJzEwMCUnLCAnaW1wb3J0YW50JyldKVxuICAgIH1cbiAgfSwgW2lucHV0UmVmXSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwNn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwN319XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwOX19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7XG4gICAgICAgIHJvdzogdHJ1ZSxcbiAgICAgICAgc3R5bGU6IHtkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDE5NXB4JywgZ3JpZEdhcDogMjB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE2fX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyBlZGl0TW9kZTogZWRpdE1vZGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjB9fVxuICAgICAgICAgICwgZWRpdE1vZGUgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRBcmVhLCB7XG4gICAgICAgICAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnOTAlICFpbXBvcnRhbnQnfSxcbiAgICAgICAgICAgICAgcG9zaXRpb25FcnJvckJlbG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IHRleHRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlVGV4dENoYW5nZSxcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIyMn19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dFdyYXBwZXIsIHtcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlU2VsZWN0aW9uKGZhbHNlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlU2VsZWN0aW9uKHRydWUpXG4gICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IHt1c2VyU2VsZWN0OiBkaXNhYmxlU2VsZWN0aW9uID8gJ25vbmUnIDogJ2F1dG8nfSxcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IHNlbGVjdGVkQ2F0ZWdvcnkuY29sb3IsXG4gICAgICAgICAgICAgIHJlZjogYm94UmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjMxfX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEFubm90YXRvciwge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiByZW5kZXJUZXh0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXRFbnRpdGllc0ZvclVJUmVuZGVyaW5nKHRleHQpLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVBbm5vdGF0ZSxcbiAgICAgICAgICAgICAgICBnZXRTcGFuOiAoc3BhbikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnNwYW4sXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgfSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDZ9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgICwgYWxsb3dFZGl0cyAmJiAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2MX19XG4gICAgICAgICAgICAgICwgZWRpdE1vZGUgPyAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJScsIG1hcmdpblJpZ2h0OiAxMH0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsRWRpdE1vZGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dEZpZWxkVmFsdWUocmVuZGVyVGV4dClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjY0fX1cbiAgICAgICAgICAgICAgICAgICwgXCJDYW5jZWxcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRWRpdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dChbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBkYXRhWyR7aW5kZXh9XVske0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OfV0uZW50aXRpZXNgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKHRleHRGaWVsZE5hbWUsIHRleHRGaWVsZFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsRWRpdE1vZGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzZ9fVxuICAgICAgICAgICAgICAgICAgLCBcIlNhdmVcIlxuXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICBzdHlsZToge3dpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRvZ2dsRWRpdE1vZGUodHJ1ZSksXG4gICAgICAgICAgICAgICAgICBoaWRlRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOTZ9fVxuICAgICAgICAgICAgICAgICwgXCJFZGl0IFRleHRcIlxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZ2dhYmxlTGlzdFdyYXBwZXIsIHtcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgIG9uU2VsZWN0OiAoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5OiBzZWxlY3RlZENhdGVnb3J5LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzEwfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTmFtZWRFbnRpdHlSZWNvZ25pdGlvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9OdW1iZXIudHN4XCI7aW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQnXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVyQmxvY2socHJvcHMpIHtcbiAgY29uc3Qge2Jsb2NrLCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNBdWRpdHMsIGlzRWRpdGluZywgb25FZGl0fSA9IHByb3BzXG4gIGNvbnN0IHtudW1iZXIsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IG51bWJlciB8fCB7fVxuICBjb25zdCByZW5kZXJWYWx1ZSA9IGlzRWRpdGluZyA/IHZhbHVlIHx8IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjl9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMH19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLk5VTUJFUiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fVxuICAgICAgICAsIHJlYWRPbmx5IHx8IGlzQXVkaXRzID8gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDB9fSwgcmVuZGVyVmFsdWUpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS5udW1iZXIudmFsdWVgLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHJlbmRlclZhbHVlIHx8IFwiXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1BkZlJlYWRlci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IENvbnRlbnRXcmFwcGVyIGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IElGcmFtZSA9IHN0eWxlZC5pZnJhbWUoe1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgYm9yZGVyOiAwXG59KVxuXG5jb25zdCBQZGZSZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2Jsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBpc0VkaXRpbmcsIGVycm9yLCBpbmRleH0gPSBwcm9wcyB8fCB7fVxuICBjb25zdCB7cGRmLCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHt2YWx1ZSwgcGxhY2Vob2xkZXJ9ID0gcGRmIHx8IHt9XG5cbiAgbGV0IHNvdXJjZVVybCA9IGlzRWRpdGluZyA/IHBsYWNlaG9sZGVyIDogdmFsdWVcblxuICBpZiAoZXJyb3IuZGF0YSAmJiBlcnJvci5kYXRhW2luZGV4XSAmJiBlcnJvci5kYXRhLmxlbmd0aCkge1xuICAgIHNvdXJjZVVybCA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFdyYXBwZXIsIHsgLi4ucHJvcHMsIG92ZXJmbG93OiBgaGlkZGVuYCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDF9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Mn19LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLlBERiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQzfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTB9fVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSUZyYW1lLCB7IHNyYzogc291cmNlVXJsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTF9fSApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBkZlJlYWRlclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9SaWNoVGV4dEVkaXRvci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0RWRpdG9yJ1xuXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tIZWFkZXInXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCdcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9IZWFkZXJDb250YWluZXInXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSaWNoVGV4dEVkaXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBzZXRGaWVsZFZhbHVlLCBpc0VkaXRpbmcsIGluZGV4fSA9IHByb3BzXG4gIGNvbnN0IHtyaWNoX3RleHQ6IHJpY2hUZXh0LCBuYW1lfSA9IGJsb2NrXG4gIGNvbnN0IHtwbGFjZWhvbGRlciwgcmVhZF9vbmx5OiByZWFkT25seSwgdmFsdWUgPSAnJywgZm9ybWF0fSA9IHJpY2hUZXh0IHx8IHt9XG4gIGNvbnN0IHJlbmRlclZhbHVlID0gaXNFZGl0aW5nID8gcGxhY2Vob2xkZXIgOiB2YWx1ZVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjh9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyOX19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuUklDSF9URVhULCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzF9fVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RWRpdG9yLCB7XG4gICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LnJpY2hfdGV4dC52YWx1ZWAsXG4gICAgICAgIHZhbHVlOiByZW5kZXJWYWx1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5IHx8IGlzQXVkaXRzLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgICAgIGZvcm1hdDogZm9ybWF0LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEVkaXRvclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9TaW5nbGVTZWxlY3Rpb24udHN4XCI7aW1wb3J0IFJlYWN0LCB7bWVtbywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgVGFza1JhZGlvIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1Rhc2tSYWRpbydcbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcblxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IExpc3RGaWx0ZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTGlzdEZpbHRlcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBSYWRpbyA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDEwXG59KVxuXG5jb25zdCBTaW5nbGVTZWxlY3Rpb24gPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCB7YmxvY2ssIG9uRGVsZXRlLCBpc0F1ZGl0cywgaGFuZGxlQ2hhbmdlLCBpbmRleCwgaXNFZGl0aW5nLCBvbkVkaXR9ID0gcHJvcHNcbiAgY29uc3Qge25hbWUsIHR5cGV9ID0gYmxvY2tcbiAgY29uc3Qge3ZhbHVlfSA9IGJsb2NrWydzaW5nbGVfc2VsZWN0aW9uJ10gfHwge31cbiAgY29uc3QgaXNUYXNrID0gIWlzRWRpdGluZyAmJiAhaXNBdWRpdHNcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoYmxvY2tbdHlwZV0ub3B0aW9ucylcbiAgY29uc3Qgb3B0aW9ucyA9IGlzRWRpdGluZyA/IGJsb2NrW3R5cGVdLm9wdGlvbnMgOiBsaXN0XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHsgLi4ucHJvcHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNn19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3fX1cbiAgICAgICAgLCBuYW1lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzh9fSwgbmFtZSlcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrSGVhZGVyLCB7XG4gICAgICAgICAgb25EZWxldGU6IG9uRGVsZXRlLFxuICAgICAgICAgIG9uRWRpdDogb25FZGl0LFxuICAgICAgICAgIGlzRWRpdGluZzogaXNFZGl0aW5nLFxuICAgICAgICAgIGJsb2NrVHlwZTogQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgICApXG4gICAgICApXG4gICAgICAsIGlzVGFzayAmJiBBcnJheS5pc0FycmF5KGJsb2NrW3R5cGVdLm9wdGlvbnMpICYmIGJsb2NrW3R5cGVdLm9wdGlvbnMubGVuZ3RoID4gMTAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0RmlsdGVyLCB7IGxpc3Q6IGJsb2NrW3R5cGVdLm9wdGlvbnMsIHNldExpc3Q6IHNldExpc3QsIGtleXM6IFsnbmFtZSddLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDZ9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9keUNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0N319XG4gICAgICAgICwgb3B0aW9ucy5tYXAoKG9wdGlvbiwgb3B0aW9uSW5kZXgpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJhZGlvLCB7IGtleTogb3B0aW9uSW5kZXgsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0OX19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFza1JhZGlvLCB7XG4gICAgICAgICAgICAgIG5hbWU6IGBkYXRhLiR7aW5kZXh9LnNpbmdsZV9zZWxlY3Rpb24udmFsdWVgLFxuICAgICAgICAgICAgICBpZDogYCR7aW5kZXh9LSR7b3B0aW9uSW5kZXh9YCxcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOiBvcHRpb24uaWQgPT09IHZhbHVlLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogaXNBdWRpdHMsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MH19XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApKVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2VsZWN0aW9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvYmxvY2tzL1RleHQudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgTGlua2lmeSBmcm9tICdyZWFjdC1saW5raWZ5J1xuXG5pbXBvcnQgQmFzaWNUZXh0QXJlYSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CYXNpY1RleHRBcmVhJ1xuaW1wb3J0IEJsb2NrSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0Jsb2NrSGVhZGVyJ1xuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyJ1xuaW1wb3J0IEJvZHlDb250YWluZXIgZnJvbSAnLi9Cb2R5Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQucCh7XG4gIGZvbnRTaXplOiAxNixcbiAgbGluZUhlaWdodDogMS4zNSxcbiAgZm9udFdlaWdodDogNDAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxuICBjdXJzb3I6ICd0ZXh0J1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dChwcm9wcykge1xuICBjb25zdCB7aXNBdWRpdHMsIGJsb2NrLCBvbkVkaXQsIG9uRGVsZXRlLCBoYW5kbGVDaGFuZ2UsIGlzRWRpdGluZywgaW5kZXh9ID0gcHJvcHNcbiAgY29uc3Qge3RleHQsIG5hbWV9ID0gYmxvY2tcbiAgY29uc3Qge3BsYWNlaG9sZGVyLCByZWFkX29ubHk6IHJlYWRPbmx5LCB2YWx1ZSA9ICcnfSA9IHRleHQgfHwge31cbiAgY29uc3QgcmVuZGVyVmFsdWUgPSBpc0VkaXRpbmcgPyBwbGFjZWhvbGRlciA6IHZhbHVlXG5cbiAgY29uc3QgZGVjb3JhdG9yID0gdXNlQ2FsbGJhY2soXG4gICAgKGhyZWYsIHRleHQsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiICxcbiAgICAgICAgICBzdHlsZToge2NvbG9yOiBQQUxFVFRFLkxJTksgLyogdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnICovfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0fX1cbiAgICAgICAgXG4gICAgICAgICAgLCB0ZXh0XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9LFxuICAgIFtyZW5kZXJWYWx1ZV1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7IC4uLnByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTl9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2MH19XG4gICAgICAgICwgbmFtZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYxfX0sIG5hbWUpXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja0hlYWRlciwge1xuICAgICAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgICAgICBvbkVkaXQ6IG9uRWRpdCxcbiAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICBibG9ja1R5cGU6IEJMT0NLX1RZUEUuVEVYVCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvZHlDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjl9fVxuICAgICAgICAsICFyZWFkT25seSAmJiAhaXNBdWRpdHMgPyAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY1RleHRBcmVhLCB7XG4gICAgICAgICAgICBuYW1lOiBgZGF0YS4ke2luZGV4fS50ZXh0LnZhbHVlYCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogcmVuZGVyVmFsdWUgfHwgdmFsdWUsXG4gICAgICAgICAgICByZWFkT25seTogcmVhZE9ubHksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3MX19XG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua2lmeSwgeyBjb21wb25lbnREZWNvcmF0b3I6IGRlY29yYXRvciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgyfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRUZXh0LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgzfX0sIHJlbmRlclZhbHVlKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL2Jsb2Nrcy9UZXh0U2VxdWVuY2UudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0hlYWRlcidcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJ1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcidcbmltcG9ydCBCb2R5Q29udGFpbmVyIGZyb20gJy4vQm9keUNvbnRhaW5lcidcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9UZXh0U2VxdWVuY2UnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBtYXJnaW5Cb3R0b206IDEwLFxuICBmbGV4OiAnMCAwIGF1dG8nXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0U2VxdWVuY2UocHJvcHMpIHtcbiAgY29uc3Qge2lzQXVkaXRzLCBibG9jaywgb25FZGl0LCBvbkRlbGV0ZSwgaGFuZGxlQ2hhbmdlLCBpc0VkaXRpbmcsIGluZGV4LCBzZXRGaWVsZFZhbHVlfSA9IHByb3BzXG4gIGNvbnN0IHtuYW1lLCB0eXBlfSA9IGJsb2NrIHx8IHt9XG4gIGNvbnN0IGRhdGEgPSBpc0VkaXRpbmcgPyBibG9ja1t0eXBlXS5wbGFjZWhvbGRlciA6IGJsb2NrW3R5cGVdLnZhbHVlXG4gIGNvbnN0IHtcbiAgICBkZWxldGVfZGlzYWJsZWQ6IGRlbGV0ZURpc2FibGVkLFxuICAgIGVkaXRfZGlzYWJsZWQ6IGVkaXREaXNhYmxlZCxcbiAgICBvcmRlcmluZ19kaXNhYmxlZDogb3JkZXJpbmdEaXNhYmxlZFxuICB9ID0gYmxvY2tbdHlwZV1cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZGVsZXRlRGlzYWJsZWQsXG4gICAgZWRpdERpc2FibGVkLFxuICAgIG9yZGVyaW5nRGlzYWJsZWRcbiAgfVxuXG4gIGNvbnN0IHRhcmdldE5hbWUgPSBpc0VkaXRpbmdcbiAgICA/IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS5wbGFjZWhvbGRlcmBcbiAgICA6IGBkYXRhWyR7aW5kZXh9XVske3R5cGV9XS52YWx1ZWBcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUxfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb250YWluZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTJ9fVxuICAgICAgICAsIG5hbWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1M319LCBuYW1lKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2tIZWFkZXIsIHtcbiAgICAgICAgICBvbkRlbGV0ZTogb25EZWxldGUsXG4gICAgICAgICAgb25FZGl0OiBvbkVkaXQsXG4gICAgICAgICAgaXNFZGl0aW5nOiBpc0VkaXRpbmcsXG4gICAgICAgICAgYmxvY2tUeXBlOiBCTE9DS19UWVBFLlRFWFQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5Q29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYxfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYyfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VxdWVuY2UsIHtcbiAgICAgICAgICAgIG5hbWU6IHRhcmdldE5hbWUsXG4gICAgICAgICAgICB0YXJnZXROYW1lOiB0YXJnZXROYW1lLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBpc0VkaXRpbmc6IGlzRWRpdGluZyxcbiAgICAgICAgICAgIGlzQXVkaXRzOiBpc0F1ZGl0cyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfID0+IF9bdHlwZV0sICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yLnBsYWNlaG9sZGVyXSkgfHwgW10sXG4gICAgICAgICAgICBzZXR0aW5nczogc2V0dGluZ3MsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2M319XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCJpbXBvcnQgc29ydEJ5IGZyb20gJ2xvZGFzaC5zb3J0YnknXG5cblxuXG5cblxuXG5leHBvcnQgY29uc3Qgc3BsaXRXaXRoT2Zmc2V0cyA9ICh0ZXh0LCBvZmZzZXRzKSA9PiB7XG4gIGxldCBsYXN0RW5kID0gMFxuICBjb25zdCBzcGxpdHMgPSBbXVxuXG4gIGZvciAobGV0IG9mZnNldCBvZiBzb3J0Qnkob2Zmc2V0cywgKG8pID0+IG8uc3RhcnQpKSB7XG4gICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gb2Zmc2V0XG4gICAgaWYgKGxhc3RFbmQgPCBzdGFydCkge1xuICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICBzdGFydDogbGFzdEVuZCxcbiAgICAgICAgZW5kOiBzdGFydCxcbiAgICAgICAgY29udGVudDogdGV4dC5zbGljZShsYXN0RW5kLCBzdGFydClcbiAgICAgIH0pXG4gICAgfVxuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIC4uLm9mZnNldCxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgfSlcbiAgICBsYXN0RW5kID0gZW5kXG4gIH1cbiAgaWYgKGxhc3RFbmQgPCB0ZXh0Lmxlbmd0aCkge1xuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIHN0YXJ0OiBsYXN0RW5kLFxuICAgICAgZW5kOiB0ZXh0Lmxlbmd0aCxcbiAgICAgIGNvbnRlbnQ6IHRleHQuc2xpY2UobGFzdEVuZCwgdGV4dC5sZW5ndGgpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzcGxpdHNcbn1cblxuZXhwb3J0IGNvbnN0IHNwbGl0VG9rZW5zV2l0aE9mZnNldHMgPSAodGV4dCwgb2Zmc2V0cykgPT4ge1xuICBsZXQgbGFzdEVuZCA9IDBcbiAgY29uc3Qgc3BsaXRzID0gW11cblxuICBmb3IgKGxldCBvZmZzZXQgb2Ygc29ydEJ5KG9mZnNldHMsIChvKSA9PiBvLnN0YXJ0KSkge1xuICAgIGNvbnN0IHtzdGFydCwgZW5kfSA9IG9mZnNldFxuICAgIGlmIChsYXN0RW5kIDwgc3RhcnQpIHtcbiAgICAgIGZvciAobGV0IGkgPSBsYXN0RW5kOyBpIDwgc3RhcnQ7IGkrKykge1xuICAgICAgICBzcGxpdHMucHVzaCh7XG4gICAgICAgICAgaSxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0W2ldXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgIC4uLm9mZnNldCxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpLmpvaW4oJyAnKVxuICAgIH0pXG4gICAgbGFzdEVuZCA9IGVuZFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IGxhc3RFbmQ7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3BsaXRzLnB1c2goe1xuICAgICAgaSxcbiAgICAgIGNvbnRlbnQ6IHRleHRbaV1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHNwbGl0c1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uSXNFbXB0eSA9IChzZWxlY3Rpb24pID0+IHtcbiAgbGV0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmFuY2hvck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oc2VsZWN0aW9uLmZvY3VzTm9kZSlcblxuICByZXR1cm4gcG9zaXRpb24gPT09IDAgJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0ID09PSBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0XG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25Jc0JhY2t3YXJkcyA9IChzZWxlY3Rpb24pID0+IHtcbiAgaWYgKHNlbGVjdGlvbklzRW1wdHkoc2VsZWN0aW9uKSkgcmV0dXJuIGZhbHNlXG5cbiAgbGV0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmFuY2hvck5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oc2VsZWN0aW9uLmZvY3VzTm9kZSlcblxuICBsZXQgYmFja3dhcmQgPSBmYWxzZVxuICBpZiAoXG4gICAgKCFwb3NpdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSB8fFxuICAgIHBvc2l0aW9uID09PSBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElOR1xuICApXG4gICAgYmFja3dhcmQgPSB0cnVlXG5cbiAgcmV0dXJuIGJhY2t3YXJkXG59XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvdGV4dC1hbm5vdGF0b3IvTWFyay50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTWFyayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y29sb3IsIHN0YXJ0LCBlbmQsIGNvbnRlbnQsIHRhZywgb25DbGlja30gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbWFyaycsIHtcbiAgICAgIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiBjb2xvciB8fCAnIzg0ZDJmZicsIHBhZGRpbmc6ICcwIDRweCd9LFxuICAgICAgJ2RhdGEtc3RhcnQnOiBzdGFydCxcbiAgICAgICdkYXRhLWVuZCc6IGVuZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IG9uQ2xpY2soe3N0YXJ0LCBlbmR9KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3fX1cbiAgICBcbiAgICAgICwgY29udGVudFxuICAgICAgLCB0YWcgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgc3R5bGU6IHtmb250U2l6ZTogJzAuN2VtJywgZm9udFdlaWdodDogNTAwLCBtYXJnaW5MZWZ0OiA2fSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI0fX0sIHRhZylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL3RleHQtYW5ub3RhdG9yL1RleHRBbm5vdGF0b3IudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWFyayBmcm9tICcuL01hcmsnXG5pbXBvcnQge3NlbGVjdGlvbklzRW1wdHksIHNlbGVjdGlvbklzQmFja3dhcmRzLCBzcGxpdFdpdGhPZmZzZXRzfSBmcm9tICcuL0Z1bmN0aW9ucydcblxuXG5jb25zdCBTcGxpdCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMubWFyaykgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFyaywgeyAuLi5wcm9wcywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDh9fSApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgJ2RhdGEtc3RhcnQnOiBwcm9wcy5zdGFydCxcbiAgICAgICdkYXRhLWVuZCc6IHByb3BzLmVuZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHByb3BzLm9uQ2xpY2soe3N0YXJ0OiBwcm9wcy5zdGFydCwgZW5kOiBwcm9wcy5lbmR9KSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExfX1cbiAgICBcbiAgICAgICwgcHJvcHMuY29udGVudFxuICAgIClcbiAgKVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgVGV4dEFubm90YXRvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBnZXRTcGFuID0gKHNwYW4pID0+IHtcbiAgICAvLyBUT0RPOiBCZXR0ZXIgdHlwaW5ncyBoZXJlLlxuICAgIGlmIChwcm9wcy5nZXRTcGFuKSByZXR1cm4gcHJvcHMuZ2V0U3BhbihzcGFuKSBcbiAgICByZXR1cm4ge3N0YXJ0OiBzcGFuLnN0YXJ0LCBlbmQ6IHNwYW4uZW5kfSBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5vbkNoYW5nZSkgcmV0dXJuXG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcblxuICAgIGlmICghc2VsZWN0aW9uLmFuY2hvck5vZGUgfHwgIXNlbGVjdGlvbi5mb2N1c05vZGUgfHwgc2VsZWN0aW9uSXNFbXB0eShzZWxlY3Rpb24pKSByZXR1cm5cblxuICAgIGxldCBzdGFydCA9XG4gICAgICBwYXJzZUludChzZWxlY3Rpb24uYW5jaG9yTm9kZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgK1xuICAgICAgc2VsZWN0aW9uLmFuY2hvck9mZnNldFxuICAgIGxldCBlbmQgPVxuICAgICAgcGFyc2VJbnQoc2VsZWN0aW9uLmZvY3VzTm9kZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpLCAxMCkgK1xuICAgICAgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0XG5cbiAgICBpZiAoXG4gICAgICAhTnVtYmVyLmlzSW50ZWdlcihzdGFydCkgfHxcbiAgICAgICFOdW1iZXIuaXNJbnRlZ2VyKGVuZCkgfHxcbiAgICAgIHNlbGVjdGlvbi5hbmNob3JOb2RlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHNlbGVjdGlvbi5mb2N1c05vZGUpICE9PSAwXG4gICAgKSB7XG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvbklzQmFja3dhcmRzKHNlbGVjdGlvbikpIHtcbiAgICAgIDtbc3RhcnQsIGVuZF0gPSBbZW5kLCBzdGFydF1cbiAgICB9XG5cbiAgICBwcm9wcy5vbkNoYW5nZShbLi4ucHJvcHMudmFsdWUsIGdldFNwYW4oe3N0YXJ0LCBlbmQsIHRleHQ6IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCl9KV0pXG5cbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3BsaXRDbGljayA9ICh7c3RhcnQsIGVuZH0pID0+IHtcbiAgICAvLyBGaW5kIGFuZCByZW1vdmUgdGhlIG1hdGNoaW5nIHNwbGl0LlxuICAgIGNvbnN0IHNwbGl0SW5kZXggPSBwcm9wcy52YWx1ZS5maW5kSW5kZXgoKHMpID0+IHMuc3RhcnQgPT09IHN0YXJ0ICYmIHMuZW5kID09PSBlbmQpXG4gICAgaWYgKHNwbGl0SW5kZXggPj0gMCkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoWy4uLnByb3BzLnZhbHVlLnNsaWNlKDAsIHNwbGl0SW5kZXgpLCAuLi5wcm9wcy52YWx1ZS5zbGljZShzcGxpdEluZGV4ICsgMSldKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHtjb250ZW50LCB2YWx1ZSwgc3R5bGV9ID0gcHJvcHNcbiAgY29uc3Qgc3BsaXRzID0gc3BsaXRXaXRoT2Zmc2V0cyhjb250ZW50LCB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHN0eWxlLCBvbk1vdXNlVXA6IGhhbmRsZU1vdXNlVXAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4Nn19XG4gICAgICAsIHNwbGl0cy5tYXAoKHNwbGl0KSA9PiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3BsaXQsIHsga2V5OiBgJHtzcGxpdC5zdGFydH0tJHtzcGxpdC5lbmR9YCwgLi4uc3BsaXQsIG9uQ2xpY2s6IGhhbmRsZVNwbGl0Q2xpY2ssIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4OH19IClcbiAgICAgICkpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBbm5vdGF0b3JcbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VQcmV2aW91cyA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByZXZpb3VzIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlYWN0LWdyaWQtbGF5b3V0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlYWN0LXJlc2l6YWJsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZ2wtb3ZlcmlkZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGdldEl0ZW1TdHlsZSA9IChfaXNEcmFnZ2luZywgZHJhZ2dhYmxlU3R5bGUpID0+IHtcbiAgY29uc3Qge3RyYW5zZm9ybX0gPSBkcmFnZ2FibGVTdHlsZVxuICBsZXQgYWN0aXZlVHJhbnNmb3JtID0ge31cbiAgaWYgKHRyYW5zZm9ybSkge1xuICAgIGFjdGl2ZVRyYW5zZm9ybSA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAke3RyYW5zZm9ybS5zdWJzdHJpbmcoXG4gICAgICAgIHRyYW5zZm9ybS5pbmRleE9mKCcsJykgKyAxLFxuICAgICAgICB0cmFuc2Zvcm0uaW5kZXhPZignKScpXG4gICAgICApfSlgXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIC8vIGJhY2tncm91bmQ6IGlzRHJhZ2dpbmcgPyAnI2ZmZicgOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIC4uLmRyYWdnYWJsZVN0eWxlLFxuICAgIC4uLmFjdGl2ZVRyYW5zZm9ybVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEl0ZW1TdHlsZVxuIiwiY29uc3QgaXNFbXB0eUFycmF5ID0gKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUuc3BsaWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGhcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eUFycmF5XG4iXSwic291cmNlUm9vdCI6IiJ9