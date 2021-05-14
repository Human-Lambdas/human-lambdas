(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AuditsRoot~TaskRoot"],{

/***/ "./src/universal/components/AssignTaskMenu.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/components/AssignTaskMenu.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! client/components/Menu */ "./src/client/components/Menu.tsx");
/* harmony import */ var client_components_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/components/MenuItem */ "./src/client/components/MenuItem.tsx");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/modules/task/components/Sidebar */ "./src/universal/modules/task/components/Sidebar.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/AssignTaskMenu.tsx";








const Item = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yfu2sq0"
})({
  name: "7oc49d",
  styles: "display:flex;flex-direction:row;padding:5px;align-items:center;justify-content:center;"
});

const Name = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yfu2sq1"
})({
  name: "1y6ic72",
  styles: "margin-left:10px;"
});

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yfu2sq2"
})({
  name: "1fkzs83",
  styles: "max-width:250px;"
});

const AssignTaskMenu = props => {
  const {
    users,
    assignedUser,
    menuProps,
    onAssign
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
    ariaLabel: 'Assign task'
  }, menuProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), assignedUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
      style: universal_modules_task_components_Sidebar__WEBPACK_IMPORTED_MODULE_7__["avatarStyle"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, "Unassigned")),
    onClick: () => onAssign(null, assignedUser),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), users.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_5__["default"])(user.name),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_6__["colorFromString"])(user.name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }, user.name)),
    onClick: () => onAssign(user.id, assignedUser),
    key: user.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AssignTaskMenu);

/***/ }),

/***/ "./src/universal/components/Avatar.tsx":
/*!*********************************************!*\
  !*** ./src/universal/components/Avatar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/getFirstLetter */ "./src/universal/utils/getFirstLetter.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/Avatar.tsx";



const Avatar = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    initials,
    color,
    onClick,
    style,
    trim = true
  } = props;
  const backgroundColor = color || _client_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN;

  const AvatarBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
    target: "ebmair80"
  })({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    testAlign: 'center',
    height: `20px`,
    width: `20px`,
    minWidth: `20px`,
    fontWeight: 700,
    fontSize: 11,
    color: '#fff',
    borderRadius: '100%',
    backgroundColor: backgroundColor,
    userSelect: 'none',
    margin: '0px 2px'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBlock, {
    ref: ref,
    onClick: onClick,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, trim ? Object(universal_utils_getFirstLetter__WEBPACK_IMPORTED_MODULE_3__["default"])(initials) : initials);
});
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/universal/components/StatusTag.tsx":
/*!************************************************!*\
  !*** ./src/universal/components/StatusTag.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_utils_getQueueStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/utils/getQueueStatus */ "./src/universal/utils/getQueueStatus.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/StatusTag.tsx";





const StatusTag = ({
  status,
  centered
}) => {
  let backgroundColor;

  switch (status) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].OPEN:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].OPEN;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].IN_PROGRESS:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].IN_PROGRESS;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].NEW:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].NEW;
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_3__["QUEUE_STATUS"].COMPLETED:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].COMPLETED;
      break;

    default:
      backgroundColor = universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["STATUS_PALETTE"].IN_PROGRESS;
  }

  const Tag = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
    target: "e1ciaeyc0"
  })(_objectSpread({
    padding: '5px 15px',
    borderRadius: 5,
    display: 'inline-block',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#fff',
    userSelect: 'none',
    backgroundColor
  }, centered && {
    margin: '0px auto'
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, Object(universal_utils_getQueueStatus__WEBPACK_IMPORTED_MODULE_4__["default"])(status));
};

/* harmony default export */ __webpack_exports__["default"] = (StatusTag);

/***/ }),

/***/ "./src/universal/modules/task/components/Sidebar.tsx":
/*!***********************************************************!*\
  !*** ./src/universal/modules/task/components/Sidebar.tsx ***!
  \***********************************************************/
/*! exports provided: AuditDecisionIcon, avatarStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditDecisionIcon", function() { return AuditDecisionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarStyle", function() { return avatarStyle; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");
/* harmony import */ var universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/utils/getInitials */ "./src/universal/utils/getInitials.ts");
/* harmony import */ var universal_components_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/Avatar */ "./src/universal/components/Avatar.tsx");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");
/* harmony import */ var client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/hooks/useMenu */ "./src/client/hooks/useMenu.ts");
/* harmony import */ var client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/hooks/useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var universal_components_AssignTaskMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/AssignTaskMenu */ "./src/universal/components/AssignTaskMenu.tsx");
/* harmony import */ var universal_utils_getColor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/utils/getColor */ "./src/universal/utils/getColor.ts");
/* harmony import */ var client_components_TextArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/components/TextArea */ "./src/client/components/TextArea.tsx");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var universal_components_StatusTag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! universal/components/StatusTag */ "./src/universal/components/StatusTag.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/task/components/Sidebar.tsx";


















const SIDEBAR_WIDTH = 370;

const Container = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng0"
})({
  backgroundColor: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BACKGROUND_MAIN,
  borderRight: `1px solid ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_GRAY}`,
  paddingTop: '35px',
  width: SIDEBAR_WIDTH,
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  overflow: 'hidden'
});

const Block = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng1"
})({
  name: "1n5nf7o",
  styles: "display:flex;justify-content:space-between;flex-direction:row;align-items:center;margin:0px 25px;margin-bottom:25px;"
});

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng2"
})({
  fontSize: 14,
  fontWeight: 600,
  minWidth: 100,
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARKER_GRAY
});

const StyledName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng3"
})(_objectSpread(_objectSpread({}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
  marginLeft: 5,
  fontWeight: 600,
  maxWidth: 85
}));

const StyledAvatarName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng4"
})(_objectSpread(_objectSpread({}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
  marginLeft: 5,
  fontWeight: 600,
  maxWidth: SIDEBAR_WIDTH - 150
}));

const MenuBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng5"
})({
  name: "1pzdwmt",
  styles: "display:flex;flex-direction:row;align-items:center;width:135px;justify-content:center;"
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "eandhng6"
})({
  cursor: 'pointer',
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_MAIN
});

const AuditDecisionIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
  target: "eandhng7"
})("margin:0 auto;color:", ({
  color
}) => color, ";");

const ActivityBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng8"
})(({
  isStaff
}) => ({
  borderTop: `1px solid ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].BORDER_GRAY}`,
  display: 'flex',
  flexFlow: 'column',
  height: 'auto',
  overflow: 'auto'
}));

const ButtonContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng9"
})({
  name: "ptuorf",
  styles: "margin-top:12px;display:flex;flex-direction:row-reverse;"
});

const Activity = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng10"
})({
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARKER_GRAY,
  fontWeight: 600,
  fontSize: 22,
  margin: '20px 0px'
});

const TimeStamp = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng11"
})({
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_LIGHT_GRAY,
  fontSize: 12
});

const Info = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng12"
})({
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARK_GRAY,
  margin: '4px 0',
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: 'pre-line'
});

const Notification = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng13"
})({
  name: "m4ra40",
  styles: "padding:10px 0px;"
});

const Comment = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng14"
})({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  fontWeight: 500,
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARK_GRAY
});

const Description = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng15"
})({
  lineBreak: 'anywhere',
  whiteSpace: 'pre-wrap',
  fontSize: 14,
  fontWeight: 500,
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARK_GRAY
});

const Bold = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "eandhng16"
})({
  name: "1vg6q84",
  styles: "font-weight:700;"
});

const Delete = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "eandhng17"
})({
  name: "1lglquy",
  styles: "cursor:pointer;text-decoration:underline;"
});

const Notifications = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng18"
})({
  name: "d4e44w",
  styles: "flex-direction:column;display:flex;overflow:auto;padding:0px 25px;word-wrap:break-word;"
});

const ActivityInfo = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng19"
})({
  padding: '0px 25px 8px 25px',
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].TEXT_DARKER_GRAY
});

const AvatarName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng20"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const CommentAvatar = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng21"
})({
  name: "70qvj9",
  styles: "display:flex;align-items:center;"
});

const Section = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eandhng22"
})(({
  isStaff
}) => _objectSpread({}, isStaff && {
  overflowY: 'auto',
  height: 'auto',
  maxHeight: '45%'
}));

const avatarStyle = {
  height: '20px',
  width: '20px',
  minWidth: '20px',
  fontSize: '11px',
  fontWeight: 700,
  borderRadius: '100'
};

function generateActivityMessage(activityPoint) {
  return activityPoint.action === 'saved' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Saved by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, activityPoint.created_by_name)) : activityPoint.action === 'created' ? activityPoint.source === 'manual' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Created Manually by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    }
  }, activityPoint.created_by_name)) : activityPoint.source === 'api' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Created via API by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    }
  }, activityPoint.created_by_name)) : activityPoint.source === 'zapier' ? `Task Created via Zapier` : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Created via CSV by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    }
  }, activityPoint.created_by_name)) : activityPoint.action === 'completed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Completed by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    }
  }, activityPoint.created_by_name)) : activityPoint.action === 'comment' ? activityPoint.comment : activityPoint.action === 'assigned' ? activityPoint.assignee_name === null ? 'Task has been Unassigned' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Assigned to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    }
  }, activityPoint.assignee_name)) : activityPoint.action === 'audited_correct' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Approved by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    }
  }, activityPoint.created_by_name), " in Audit") : activityPoint.action === 'audited_incorrect' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Task Rejected by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    }
  }, activityPoint.created_by_name), " in Audit") : activityPoint.action === 'audited_empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Audit Decision Reverted by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Bold, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    }
  }, activityPoint.created_by_name)) : '';
}

const Sidebar = props => {
  const {
    task,
    onDelete,
    onPost,
    isAudits,
    users,
    onAssign,
    orgId,
    assignedTo,
    activity,
    correct,
    isStaff,
    queue
  } = props;
  let description, guidelinesUrl, isRunning;

  if (queue) {
    description = queue.task_description;
    guidelinesUrl = queue.guidelines_url;
    isRunning = queue.is_running;
  }

  const {
    assigned_to,
    status
  } = task;
  const assignedUser = assignedTo;
  const user = users.filter(user => user.id === assignedUser)[0];
  const [comment, setComment] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  let name = '';

  if (user && user.name) {
    name = user.name;
  } else if (task.completed_by) {
    // when the task is assigned to a user outside of your org (e.g. when staff handle a users ticket) then we directly
    // access the name of the worker, as user is unavailable
    // note: `completed_by` is set for all assigned tasks, even non-complete ones
    name = task.completed_by;
  }

  const initials = Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_6__["default"])(name);
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const {
    userId: loggedInUser
  } = networker || {};
  const {
    menuPortal,
    togglePortal,
    originRef,
    menuProps
  } = Object(client_hooks_useMenu__WEBPACK_IMPORTED_MODULE_9__["default"])(client_hooks_useCoords__WEBPACK_IMPORTED_MODULE_10__["MenuPosition"].UPPER_RIGHT, {
    isDropdown: true
  });
  const auditDecisionIcon = {
    null: null,
    false: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuditDecisionIcon, {
      color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["STATUS_PALETTE"].IN_PROGRESS,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      }
    }, "cancel"),
    true: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuditDecisionIcon, {
      color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["STATUS_PALETTE"].COMPLETED,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      }
    }, "check_circle")
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    isStaff: isStaff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_StatusTag__WEBPACK_IMPORTED_MODULE_17__["default"], {
    status: status,
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    }
  }, "Assigned to"), assignedUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    initials: initials,
    color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_12__["colorFromString"])(name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    }
  }, name)), !isAudits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    ref: originRef,
    onClick: togglePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    }
  }, "more_horiz")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    }
  }, "Unassigned"), !isAudits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    ref: originRef,
    onClick: togglePortal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    }
  }, "more_horiz"))), status === 'completed' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    }
  }, "Audit"), auditDecisionIcon[correct]), isStaff && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, guidelinesUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_3___default.a, {
    componentDecorator: (href, text, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
        href: href,
        key: key,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].LINK
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }, "guidelines");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    }
  }, "See ", guidelinesUrl, " for more.")))), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    }
  }, "Task Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Block, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_3___default.a, {
    componentDecorator: (href, text, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
        href: href,
        key: key,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].LINK
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, text);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    }
  }, description)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActivityBlock, {
    isStaff: isStaff,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActivityInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Activity, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    }
  }, "Activity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
    minRows: 3,
    maxRows: 9,
    onChange: event => {
      setComment(event.target.value);
    },
    value: comment,
    placeholder: 'Write a comment',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: comment.length === 0,
    onClick: () => {
      onPost(comment);
      setComment('');
    },
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    }
  }, "Send"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Notifications, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    }
  }, activity.map(activityPoint => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Notification, {
      key: activityPoint.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      }
    }, activityPoint.action === 'comment' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommentAvatar, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      initials: Object(universal_utils_getInitials__WEBPACK_IMPORTED_MODULE_6__["default"])(activityPoint.created_by_name),
      color: Object(universal_utils_getColor__WEBPACK_IMPORTED_MODULE_12__["colorFromString"])(activityPoint.created_by_name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAvatarName, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      }
    }, activityPoint.created_by_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_3___default.a, {
      componentDecorator: (href, text, key) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('a', {
          href: href,
          key: key,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            color: _styles_palette__WEBPACK_IMPORTED_MODULE_4__["PALETTE"].LINK
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          }
        }, text);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      }
    }, generateActivityMessage(activityPoint))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeStamp, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      }
    }, `${dayjs__WEBPACK_IMPORTED_MODULE_16___default()(activityPoint.created_at).format('DD/MM/YYYY')} at ${dayjs__WEBPACK_IMPORTED_MODULE_16___default()(activityPoint.created_at).format('HH:mm')}`, activityPoint.action === 'comment' && loggedInUser === activityPoint.created_by && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ' ', "· ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Delete, {
      onClick: () => onDelete(activityPoint.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      }
    }, "Delete"))));
  }))), menuPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_AssignTaskMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    menuProps: menuProps,
    users: users.filter(user => user.id !== assignedUser),
    onAssign: onAssign,
    assignedUser: assignedUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    }
  })));
};

const mapStateToProps = state => ({
  isStaff: state.currentUser.isStaff,
  queue: state.queues.selectedQueue
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Sidebar));

/***/ }),

/***/ "./src/universal/utils/getFirstLetter.ts":
/*!***********************************************!*\
  !*** ./src/universal/utils/getFirstLetter.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getFirstLetter = str => {
  let firstLetter = str;

  if (str && str.length > 1) {
    firstLetter = str.charAt(0).toUpperCase();
  }

  return firstLetter;
};

/* harmony default export */ __webpack_exports__["default"] = (getFirstLetter);

/***/ }),

/***/ "./src/universal/utils/getInitials.ts":
/*!********************************************!*\
  !*** ./src/universal/utils/getInitials.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getInitials = str => {
  if (!str || str === '') return;
  const initials = str.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
};

/* harmony default export */ __webpack_exports__["default"] = (getInitials);

/***/ }),

/***/ "./src/universal/utils/getQueueStatus.ts":
/*!***********************************************!*\
  !*** ./src/universal/utils/getQueueStatus.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


const getQueueStatus = type => {
  let status = '';

  switch (type) {
    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].COMPLETED:
      status = 'COMPLETED';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].NEW:
      status = 'NEW';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].IN_PROGRESS:
      status = 'IN PROGRESS';
      break;

    case universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["QUEUE_STATUS"].OPEN:
      status = 'OPEN';
      break;

    default:
      break;
  }

  return status;
};

/* harmony default export */ __webpack_exports__["default"] = (getQueueStatus);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXNzaWduVGFza01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9TdGF0dXNUYWcudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy90YXNrL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9nZXRGaXJzdExldHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvZ2V0UXVldWVTdGF0dXMudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiSXRlbSIsIk5hbWUiLCJDb250YWluZXIiLCJBc3NpZ25UYXNrTWVudSIsInByb3BzIiwidXNlcnMiLCJhc3NpZ25lZFVzZXIiLCJtZW51UHJvcHMiLCJvbkFzc2lnbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiTWVudSIsImFyaWFMYWJlbCIsIk1lbnVJdGVtIiwibGFiZWwiLCJzdHlsZSIsImF2YXRhclN0eWxlIiwib25DbGljayIsIm1hcCIsInVzZXIiLCJBdmF0YXIiLCJpbml0aWFscyIsImdldEluaXRpYWxzIiwibmFtZSIsImNvbG9yIiwiY29sb3JGcm9tU3RyaW5nIiwiaWQiLCJrZXkiLCJmb3J3YXJkUmVmIiwicmVmIiwidHJpbSIsImJhY2tncm91bmRDb2xvciIsIlBBTEVUVEUiLCJQUklNQVJZX01BSU4iLCJBdmF0YXJCbG9jayIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0ZXN0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1pbldpZHRoIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwidXNlclNlbGVjdCIsIm1hcmdpbiIsImdldEZpcnN0TGV0dGVyIiwiU3RhdHVzVGFnIiwic3RhdHVzIiwiY2VudGVyZWQiLCJRVUVVRV9TVEFUVVMiLCJPUEVOIiwiU1RBVFVTX1BBTEVUVEUiLCJJTl9QUk9HUkVTUyIsIk5FVyIsIkNPTVBMRVRFRCIsIlRhZyIsInBhZGRpbmciLCJ0ZXh0VHJhbnNmb3JtIiwiZ2V0UXVldWVTdGF0dXMiLCJTSURFQkFSX1dJRFRIIiwiQkFDS0dST1VORF9NQUlOIiwiYm9yZGVyUmlnaHQiLCJCT1JERVJfR1JBWSIsInBhZGRpbmdUb3AiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3ciLCJCbG9jayIsIkxhYmVsIiwiVEVYVF9EQVJLRVJfR1JBWSIsIlN0eWxlZE5hbWUiLCJ0ZXh0T3ZlcmZsb3ciLCJtYXJnaW5MZWZ0IiwibWF4V2lkdGgiLCJTdHlsZWRBdmF0YXJOYW1lIiwiTWVudUJsb2NrIiwiU3R5bGVkSWNvbiIsIkljb24iLCJjdXJzb3IiLCJURVhUX01BSU4iLCJBdWRpdERlY2lzaW9uSWNvbiIsIkFjdGl2aXR5QmxvY2siLCJpc1N0YWZmIiwiYm9yZGVyVG9wIiwiZmxleEZsb3ciLCJCdXR0b25Db250YWluZXIiLCJBY3Rpdml0eSIsIlRpbWVTdGFtcCIsIlRFWFRfTElHSFRfR1JBWSIsIkluZm8iLCJURVhUX0RBUktfR1JBWSIsIndoaXRlU3BhY2UiLCJOb3RpZmljYXRpb24iLCJDb21tZW50IiwiRGVzY3JpcHRpb24iLCJsaW5lQnJlYWsiLCJCb2xkIiwiRGVsZXRlIiwiTm90aWZpY2F0aW9ucyIsIkFjdGl2aXR5SW5mbyIsIkF2YXRhck5hbWUiLCJDb21tZW50QXZhdGFyIiwiU2VjdGlvbiIsIm92ZXJmbG93WSIsIm1heEhlaWdodCIsImdlbmVyYXRlQWN0aXZpdHlNZXNzYWdlIiwiYWN0aXZpdHlQb2ludCIsImFjdGlvbiIsIkZyYWdtZW50IiwiY3JlYXRlZF9ieV9uYW1lIiwic291cmNlIiwiY29tbWVudCIsImFzc2lnbmVlX25hbWUiLCJTaWRlYmFyIiwidGFzayIsIm9uRGVsZXRlIiwib25Qb3N0IiwiaXNBdWRpdHMiLCJvcmdJZCIsImFzc2lnbmVkVG8iLCJhY3Rpdml0eSIsImNvcnJlY3QiLCJxdWV1ZSIsImRlc2NyaXB0aW9uIiwiZ3VpZGVsaW5lc1VybCIsImlzUnVubmluZyIsInRhc2tfZGVzY3JpcHRpb24iLCJndWlkZWxpbmVzX3VybCIsImlzX3J1bm5pbmciLCJhc3NpZ25lZF90byIsImZpbHRlciIsInNldENvbW1lbnQiLCJ1c2VTdGF0ZSIsImNvbXBsZXRlZF9ieSIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsInVzZXJJZCIsImxvZ2dlZEluVXNlciIsIm1lbnVQb3J0YWwiLCJ0b2dnbGVQb3J0YWwiLCJvcmlnaW5SZWYiLCJ1c2VNZW51IiwiTWVudVBvc2l0aW9uIiwiVVBQRVJfUklHSFQiLCJpc0Ryb3Bkb3duIiwiYXVkaXREZWNpc2lvbkljb24iLCJudWxsIiwiZmFsc2UiLCJ0cnVlIiwiTGlua2lmeSIsImNvbXBvbmVudERlY29yYXRvciIsImhyZWYiLCJ0ZXh0IiwidGFyZ2V0IiwicmVsIiwiTElOSyIsIlRleHRBcmVhIiwibWluUm93cyIsIm1heFJvd3MiLCJvbkNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIlByaW1hcnlCdXR0b24iLCJkaXNhYmxlZCIsImxlbmd0aCIsInR5cGUiLCJkYXlqcyIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJjcmVhdGVkX2J5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjdXJyZW50VXNlciIsInF1ZXVlcyIsInNlbGVjdGVkUXVldWUiLCJjb25uZWN0Iiwic3RyIiwiZmlyc3RMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoIiwic2hpZnQiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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TWUvSiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7O0FBRUEsTUFBTXNDLGNBQWMsR0FBSTJHLElBQUQsSUFBVTtBQUMvQixNQUFJdEgsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsVUFBUXNILElBQVI7QUFDRSxTQUFLcEgsc0VBQVksQ0FBQ0ssU0FBbEI7QUFDRVAsWUFBTSxHQUFHLFdBQVQ7QUFDQTs7QUFDRixTQUFLRSxzRUFBWSxDQUFDSSxHQUFsQjtBQUNFTixZQUFNLEdBQUcsS0FBVDtBQUNBOztBQUNGLFNBQUtFLHNFQUFZLENBQUNHLFdBQWxCO0FBQ0VMLFlBQU0sR0FBRyxhQUFUO0FBQ0E7O0FBQ0YsU0FBS0Usc0VBQVksQ0FBQ0MsSUFBbEI7QUFDRUgsWUFBTSxHQUFHLE1BQVQ7QUFDQTs7QUFDRjtBQUNFO0FBZEo7O0FBZ0JBLFNBQU9BLE1BQVA7QUFDRCxDQW5CRDs7QUFxQmVXLDZFQUFmLEUiLCJmaWxlIjoiQXVkaXRzUm9vdH5UYXNrUm9vdF81OTEwY2FkMWE5NDQwMjVkN2ZiYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9Bc3NpZ25UYXNrTWVudS50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBNZW51IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL01lbnUnXG5cbmltcG9ydCBNZW51SXRlbSBmcm9tICdjbGllbnQvY29tcG9uZW50cy9NZW51SXRlbSdcblxuaW1wb3J0IEF2YXRhciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgZ2V0SW5pdGlhbHMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IHtjb2xvckZyb21TdHJpbmd9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9nZXRDb2xvcidcbmltcG9ydCB7YXZhdGFyU3R5bGV9IGZyb20gJ3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svY29tcG9uZW50cy9TaWRlYmFyJ1xuXG5cblxuXG5cblxuXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgcGFkZGluZzogJzVweCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbn0pXG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luTGVmdDogMTBcbn0pXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBtYXhXaWR0aDogMjUwXG59KVxuXG5jb25zdCBBc3NpZ25UYXNrTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7dXNlcnMsIGFzc2lnbmVkVXNlciwgbWVudVByb3BzLCBvbkFzc2lnbn0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM4fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IGFyaWFMYWJlbDogJ0Fzc2lnbiB0YXNrJywgLi4ubWVudVByb3BzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzl9fVxuICAgICAgICAsIGFzc2lnbmVkVXNlciAmJiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgICAgbGFiZWw6IFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDN9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogYXZhdGFyU3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NH19IClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0NX19LCBcIlVuYXNzaWduZWRcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25Bc3NpZ24obnVsbCwgYXNzaWduZWRVc2VyKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQxfX1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCB1c2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICBsYWJlbDogXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSXRlbSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NH19XG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwge1xuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM6IGdldEluaXRpYWxzKHVzZXIubmFtZSksXG4gICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JGcm9tU3RyaW5nKHVzZXIubmFtZSksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1NX19XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU5fX0sIHVzZXIubmFtZSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gb25Bc3NpZ24odXNlci5pZCwgYXNzaWduZWRVc2VyKSxcbiAgICAgICAgICAgIGtleTogdXNlci5pZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDUyfX1cbiAgICAgICAgICApXG4gICAgICAgICkpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2lnblRhc2tNZW51XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvQXZhdGFyLnRzeFwiO2ltcG9ydCBSZWFjdCwge2ZvcndhcmRSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJy4uLy4uL2NsaWVudC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBnZXRGaXJzdExldHRlciBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Rmlyc3RMZXR0ZXInXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEF2YXRhciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge2luaXRpYWxzLCBjb2xvciwgb25DbGljaywgc3R5bGUsIHRyaW0gPSB0cnVlfSA9IHByb3BzXG5cbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgfHwgUEFMRVRURS5QUklNQVJZX01BSU5cblxuICBjb25zdCBBdmF0YXJCbG9jayA9IHN0eWxlZC5zcGFuKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB0ZXN0QWxpZ246ICdjZW50ZXInLFxuICAgIGhlaWdodDogYDIwcHhgLFxuICAgIHdpZHRoOiBgMjBweGAsXG4gICAgbWluV2lkdGg6IGAyMHB4YCxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgZm9udFNpemU6IDExLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIG1hcmdpbjogJzBweCAycHgnXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhckJsb2NrLCB7IHJlZjogcmVmLCBvbkNsaWNrOiBvbkNsaWNrLCBzdHlsZTogc3R5bGUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzOH19XG4gICAgICAsIHRyaW0gPyBnZXRGaXJzdExldHRlcihpbml0aWFscykgOiBpbml0aWFsc1xuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvU3RhdHVzVGFnLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtTVEFUVVNfUEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtRVUVVRV9TVEFUVVN9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgZ2V0UXVldWVTdGF0dXMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldFF1ZXVlU3RhdHVzJ1xuXG5cblxuXG5cblxuY29uc3QgU3RhdHVzVGFnID0gKHtzdGF0dXMsIGNlbnRlcmVkfSkgPT4ge1xuICBsZXQgYmFja2dyb3VuZENvbG9yXG5cbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5PUEVOOlxuICAgICAgYmFja2dyb3VuZENvbG9yID0gU1RBVFVTX1BBTEVUVEUuT1BFTlxuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5JTl9QUk9HUkVTUzpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTXG4gICAgICBicmVha1xuICAgIGNhc2UgUVVFVUVfU1RBVFVTLk5FVzpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLk5FV1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5DT01QTEVURUQ6XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBTVEFUVVNfUEFMRVRURS5DT01QTEVURURcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTXG4gIH1cblxuICBjb25zdCBUYWcgPSBzdHlsZWQuZGl2KHtcbiAgICBwYWRkaW5nOiAnNXB4IDE1cHgnLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250U2l6ZTogMTEsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAuLi4oY2VudGVyZWQgJiYge21hcmdpbjogJzBweCBhdXRvJ30pXG4gIH0pXG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX0sIGdldFF1ZXVlU3RhdHVzKHN0YXR1cykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c1RhZ1xuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svY29tcG9uZW50cy9TaWRlYmFyLnRzeFwiO2ltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBMaW5raWZ5IGZyb20gJ3JlYWN0LWxpbmtpZnknXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy9wYWxldHRlJ1xuXG5pbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvaGVscGVycy90ZXh0T3ZlcmZsb3cnXG5pbXBvcnQgZ2V0SW5pdGlhbHMgZnJvbSAndW5pdmVyc2FsL3V0aWxzL2dldEluaXRpYWxzJ1xuaW1wb3J0IEF2YXRhciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9BdmF0YXInXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuaW1wb3J0IHVzZU1lbnUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1lbnUnXG5pbXBvcnQge01lbnVQb3NpdGlvbn0gZnJvbSAnY2xpZW50L2hvb2tzL3VzZUNvb3JkcydcbmltcG9ydCBBc3NpZ25UYXNrTWVudSBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9Bc3NpZ25UYXNrTWVudSdcbmltcG9ydCB7Y29sb3JGcm9tU3RyaW5nfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZ2V0Q29sb3InXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvVGV4dEFyZWEnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IFN0YXR1c1RhZyBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TdGF0dXNUYWcnXG5pbXBvcnQge1NUQVRVU19QQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFNJREVCQVJfV0lEVEggPSAzNzBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoe1xuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVl9YCxcbiAgcGFkZGluZ1RvcDogJzM1cHgnLFxuICB3aWR0aDogU0lERUJBUl9XSURUSCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBoZWlnaHQ6ICcxMDAlJyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufSlcblxuY29uc3QgQmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbjogJzBweCAyNXB4JyxcbiAgbWFyZ2luQm90dG9tOiAyNVxufSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE0LFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIG1pbldpZHRoOiAxMDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfREFSS0VSX0dSQVlcbn0pXG5cbmNvbnN0IFN0eWxlZE5hbWUgPSBzdHlsZWQuZGl2KHtcbiAgLi4udGV4dE92ZXJmbG93LFxuICBtYXJnaW5MZWZ0OiA1LFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIG1heFdpZHRoOiA4NVxufSlcblxuY29uc3QgU3R5bGVkQXZhdGFyTmFtZSA9IHN0eWxlZC5kaXYoe1xuICAuLi50ZXh0T3ZlcmZsb3csXG4gIG1hcmdpbkxlZnQ6IDUsXG4gIGZvbnRXZWlnaHQ6IDYwMCxcbiAgbWF4V2lkdGg6IFNJREVCQVJfV0lEVEggLSAxNTBcbn0pXG5cbmNvbnN0IE1lbnVCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgd2lkdGg6IDEzNSxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuZXhwb3J0IGNvbnN0IEF1ZGl0RGVjaXNpb25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICR7KHtjb2xvcn0pID0+IGNvbG9yfTtcbmBcblxuY29uc3QgQWN0aXZpdHlCbG9jayA9IHN0eWxlZC5kaXYoKHtpc1N0YWZmfSkgPT4gKHtcbiAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhGbG93OiAnY29sdW1uJyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIG92ZXJmbG93OiAnYXV0bydcbn0pKVxuXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luVG9wOiAxMixcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnXG59KVxuXG5jb25zdCBBY3Rpdml0eSA9IHN0eWxlZC5kaXYoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktFUl9HUkFZLFxuICBmb250V2VpZ2h0OiA2MDAsXG4gIGZvbnRTaXplOiAyMixcbiAgbWFyZ2luOiAnMjBweCAwcHgnXG59KVxuXG5jb25zdCBUaW1lU3RhbXAgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9MSUdIVF9HUkFZLFxuICBmb250U2l6ZTogMTJcbn0pXG5cbmNvbnN0IEluZm8gPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9EQVJLX0dSQVksXG4gIG1hcmdpbjogJzRweCAwJyxcbiAgZm9udFNpemU6IDE0LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIHdoaXRlU3BhY2U6ICdwcmUtbGluZSdcbn0pXG5cbmNvbnN0IE5vdGlmaWNhdGlvbiA9IHN0eWxlZC5kaXYoe1xuICBwYWRkaW5nOiAnMTBweCAwcHgnXG59KVxuXG5jb25zdCBDb21tZW50ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgZm9udFNpemU6IDE0LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfREFSS19HUkFZXG59KVxuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXYoe1xuICBsaW5lQnJlYWs6ICdhbnl3aGVyZScsXG4gIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gIGZvbnRTaXplOiAxNCxcbiAgZm9udFdlaWdodDogNTAwLFxuICBjb2xvcjogUEFMRVRURS5URVhUX0RBUktfR1JBWVxufSlcblxuY29uc3QgQm9sZCA9IHN0eWxlZC5zcGFuKHtcbiAgZm9udFdlaWdodDogNzAwXG59KVxuXG5jb25zdCBEZWxldGUgPSBzdHlsZWQuc3Bhbih7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbn0pXG5cbmNvbnN0IE5vdGlmaWNhdGlvbnMgPSBzdHlsZWQuZGl2KHtcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgcGFkZGluZzogJzBweCAyNXB4JyxcbiAgd29yZFdyYXA6ICdicmVhay13b3JkJ1xufSlcblxuY29uc3QgQWN0aXZpdHlJbmZvID0gc3R5bGVkLmRpdih7XG4gIHBhZGRpbmc6ICcwcHggMjVweCA4cHggMjVweCcsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfREFSS0VSX0dSQVlcbn0pXG5cbmNvbnN0IEF2YXRhck5hbWUgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xufSlcblxuY29uc3QgQ29tbWVudEF2YXRhciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KVxuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLmRpdigoe2lzU3RhZmZ9KSA9PiAoe1xuICAuLi4oaXNTdGFmZiAmJiB7XG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgbWF4SGVpZ2h0OiAnNDUlJ1xuICB9KVxufSkpXG5cbmV4cG9ydCBjb25zdCBhdmF0YXJTdHlsZSA9IHtcbiAgaGVpZ2h0OiAnMjBweCcsXG4gIHdpZHRoOiAnMjBweCcsXG4gIG1pbldpZHRoOiAnMjBweCcsXG4gIGZvbnRTaXplOiAnMTFweCcsXG4gIGZvbnRXZWlnaHQ6IDcwMCxcbiAgYm9yZGVyUmFkaXVzOiAnMTAwJ1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFjdGl2aXR5TWVzc2FnZShhY3Rpdml0eVBvaW50KSB7XG4gIHJldHVybiBhY3Rpdml0eVBvaW50LmFjdGlvbiA9PT0gJ3NhdmVkJyA/IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIlRhc2sgU2F2ZWQgYnkgXCJcbiAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2xkLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxNX19LCBhY3Rpdml0eVBvaW50LmNyZWF0ZWRfYnlfbmFtZSlcbiAgICApXG4gICkgOiBhY3Rpdml0eVBvaW50LmFjdGlvbiA9PT0gJ2NyZWF0ZWQnID8gKFxuICAgIGFjdGl2aXR5UG9pbnQuc291cmNlID09PSAnbWFudWFsJyA/IChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFwiVGFzayBDcmVhdGVkIE1hbnVhbGx5IGJ5IFwiXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9sZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjB9fSwgYWN0aXZpdHlQb2ludC5jcmVhdGVkX2J5X25hbWUpXG4gICAgICApXG4gICAgKSA6IGFjdGl2aXR5UG9pbnQuc291cmNlID09PSAnYXBpJyA/IChcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIFwiVGFzayBDcmVhdGVkIHZpYSBBUEkgYnkgXCJcbiAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9sZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMjR9fSwgYWN0aXZpdHlQb2ludC5jcmVhdGVkX2J5X25hbWUpXG4gICAgICApXG4gICAgKSA6IGFjdGl2aXR5UG9pbnQuc291cmNlID09PSAnemFwaWVyJyA/IChcbiAgICAgIGBUYXNrIENyZWF0ZWQgdmlhIFphcGllcmBcbiAgICApIDogKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgXCJUYXNrIENyZWF0ZWQgdmlhIENTViBieSBcIlxuICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCb2xkLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIzMH19LCBhY3Rpdml0eVBvaW50LmNyZWF0ZWRfYnlfbmFtZSlcbiAgICAgIClcbiAgICApXG4gICkgOiBhY3Rpdml0eVBvaW50LmFjdGlvbiA9PT0gJ2NvbXBsZXRlZCcgPyAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgXCJUYXNrIENvbXBsZXRlZCBieSBcIlxuICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvbGQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM1fX0sIGFjdGl2aXR5UG9pbnQuY3JlYXRlZF9ieV9uYW1lKVxuICAgIClcbiAgKSA6IGFjdGl2aXR5UG9pbnQuYWN0aW9uID09PSAnY29tbWVudCcgPyAoXG4gICAgYWN0aXZpdHlQb2ludC5jb21tZW50XG4gICkgOiBhY3Rpdml0eVBvaW50LmFjdGlvbiA9PT0gJ2Fzc2lnbmVkJyA/IChcbiAgICBhY3Rpdml0eVBvaW50LmFzc2lnbmVlX25hbWUgPT09IG51bGwgPyAoXG4gICAgICAnVGFzayBoYXMgYmVlbiBVbmFzc2lnbmVkJ1xuICAgICkgOiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIlRhc2sgQXNzaWduZWQgdG8gXCJcbiAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvbGQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQ0fX0sIGFjdGl2aXR5UG9pbnQuYXNzaWduZWVfbmFtZSlcbiAgICAgIClcbiAgICApXG4gICkgOiBhY3Rpdml0eVBvaW50LmFjdGlvbiA9PT0gJ2F1ZGl0ZWRfY29ycmVjdCcgPyAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgXCJUYXNrIEFwcHJvdmVkIGJ5IFwiXG4gICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9sZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNDl9fSwgYWN0aXZpdHlQb2ludC5jcmVhdGVkX2J5X25hbWUpLCBcIiBpbiBBdWRpdFwiXG4gICAgKVxuICApIDogYWN0aXZpdHlQb2ludC5hY3Rpb24gPT09ICdhdWRpdGVkX2luY29ycmVjdCcgPyAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgXCJUYXNrIFJlamVjdGVkIGJ5IFwiXG4gICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9sZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNTN9fSwgYWN0aXZpdHlQb2ludC5jcmVhdGVkX2J5X25hbWUpLCBcIiBpbiBBdWRpdFwiXG4gICAgKVxuICApIDogYWN0aXZpdHlQb2ludC5hY3Rpb24gPT09ICdhdWRpdGVkX2VtcHR5JyA/IChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIkF1ZGl0IERlY2lzaW9uIFJldmVydGVkIGJ5IFwiXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJvbGQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjU3fX0sIGFjdGl2aXR5UG9pbnQuY3JlYXRlZF9ieV9uYW1lKVxuICAgIClcbiAgKSA6IChcbiAgICAnJ1xuICApXG59XG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRhc2ssXG4gICAgb25EZWxldGUsXG4gICAgb25Qb3N0LFxuICAgIGlzQXVkaXRzLFxuICAgIHVzZXJzLFxuICAgIG9uQXNzaWduLFxuICAgIG9yZ0lkLFxuICAgIGFzc2lnbmVkVG8sXG4gICAgYWN0aXZpdHksXG4gICAgY29ycmVjdCxcbiAgICBpc1N0YWZmLFxuICAgIHF1ZXVlXG4gIH0gPSBwcm9wc1xuXG4gIGxldCBkZXNjcmlwdGlvbiwgZ3VpZGVsaW5lc1VybCwgaXNSdW5uaW5nXG5cbiAgaWYgKHF1ZXVlKSB7XG4gICAgZGVzY3JpcHRpb24gPSBxdWV1ZS50YXNrX2Rlc2NyaXB0aW9uXG4gICAgZ3VpZGVsaW5lc1VybCA9IHF1ZXVlLmd1aWRlbGluZXNfdXJsXG4gICAgaXNSdW5uaW5nID0gcXVldWUuaXNfcnVubmluZ1xuICB9XG5cbiAgY29uc3Qge2Fzc2lnbmVkX3RvLCBzdGF0dXN9ID0gdGFza1xuICBjb25zdCBhc3NpZ25lZFVzZXIgPSBhc3NpZ25lZFRvXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgPT09IGFzc2lnbmVkVXNlcilbMF1cbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpXG5cbiAgbGV0IG5hbWUgPSAnJ1xuXG4gIGlmICh1c2VyICYmIHVzZXIubmFtZSkge1xuICAgIG5hbWUgPSB1c2VyLm5hbWVcbiAgfSBlbHNlIGlmICh0YXNrLmNvbXBsZXRlZF9ieSkge1xuICAgIC8vIHdoZW4gdGhlIHRhc2sgaXMgYXNzaWduZWQgdG8gYSB1c2VyIG91dHNpZGUgb2YgeW91ciBvcmcgKGUuZy4gd2hlbiBzdGFmZiBoYW5kbGUgYSB1c2VycyB0aWNrZXQpIHRoZW4gd2UgZGlyZWN0bHlcbiAgICAvLyBhY2Nlc3MgdGhlIG5hbWUgb2YgdGhlIHdvcmtlciwgYXMgdXNlciBpcyB1bmF2YWlsYWJsZVxuICAgIC8vIG5vdGU6IGBjb21wbGV0ZWRfYnlgIGlzIHNldCBmb3IgYWxsIGFzc2lnbmVkIHRhc2tzLCBldmVuIG5vbi1jb21wbGV0ZSBvbmVzXG4gICAgbmFtZSA9IHRhc2suY29tcGxldGVkX2J5XG4gIH1cblxuICBjb25zdCBpbml0aWFscyA9IGdldEluaXRpYWxzKG5hbWUpXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG5cbiAgY29uc3Qge3VzZXJJZDogbG9nZ2VkSW5Vc2VyfSA9IG5ldHdvcmtlciB8fCB7fVxuXG4gIGNvbnN0IHttZW51UG9ydGFsLCB0b2dnbGVQb3J0YWwsIG9yaWdpblJlZiwgbWVudVByb3BzfSA9IHVzZU1lbnUoTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hULCB7XG4gICAgaXNEcm9wZG93bjogdHJ1ZVxuICB9KVxuXG4gIGNvbnN0IGF1ZGl0RGVjaXNpb25JY29uID0ge1xuICAgIG51bGw6IG51bGwsXG4gICAgZmFsc2U6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXREZWNpc2lvbkljb24sIHsgY29sb3I6IFNUQVRVU19QQUxFVFRFLklOX1BST0dSRVNTLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzE1fX0sIFwiY2FuY2VsXCIpLFxuICAgIHRydWU6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXVkaXREZWNpc2lvbkljb24sIHsgY29sb3I6IFNUQVRVU19QQUxFVFRFLkNPTVBMRVRFRCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxNn19LCBcImNoZWNrX2NpcmNsZVwiKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjB9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb24sIHsgaXNTdGFmZjogaXNTdGFmZiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyMX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjJ9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjN9fSwgXCJTdGF0dXNcIilcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdHVzVGFnLCB7IHN0YXR1czogc3RhdHVzLCBjZW50ZXJlZDogdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyNH19IClcbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzI2fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzI3fX0sIFwiQXNzaWduZWQgdG9cIiApXG4gICAgICAgICAgLCBhc3NpZ25lZFVzZXIgPyAoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMjl9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXZhdGFyTmFtZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzMzB9fVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHsgaW5pdGlhbHM6IGluaXRpYWxzLCBjb2xvcjogY29sb3JGcm9tU3RyaW5nKG5hbWUpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzMxfX0gKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWROYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzMn19LCBuYW1lKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICwgIWlzQXVkaXRzICYmIChcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHsgcmVmOiBvcmlnaW5SZWYsIG9uQ2xpY2s6IHRvZ2dsZVBvcnRhbCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMzNX19LCBcIm1vcmVfaG9yaXpcIlxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0MX19XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWROYW1lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM0Mn19LCBcIlVuYXNzaWduZWRcIilcbiAgICAgICAgICAgICAgLCAhaXNBdWRpdHMgJiYgKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwgeyByZWY6IG9yaWdpblJlZiwgb25DbGljazogdG9nZ2xlUG9ydGFsLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzQ0fX0sIFwibW9yZV9ob3JpelwiXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBzdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmIChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM1Mn19XG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzUzfX0sIFwiQXVkaXRcIilcbiAgICAgICAgICAgICwgYXVkaXREZWNpc2lvbkljb25bY29ycmVjdF1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBpc1N0YWZmICYmIChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAsIGd1aWRlbGluZXNVcmwgJiYgKFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2MX19XG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlua2lmeSwge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREZWNvcmF0b3I6IChocmVmLCB0ZXh0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Y29sb3I6IFBBTEVUVEUuTElOS30sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNjV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLCBcImd1aWRlbGluZXNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzYyfX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNzd9fSwgXCJTZWUgXCIgLCBndWlkZWxpbmVzVXJsLCBcIiBmb3IgbW9yZS5cIiAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg0fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzODV9fSwgXCJUYXNrIERlc2NyaXB0aW9uXCIgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg3fX1cbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5raWZ5LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERlY29yYXRvcjogKGhyZWYsIHRleHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtjb2xvcjogUEFMRVRURS5MSU5LfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM5MX19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzg4fX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVzY3JpcHRpb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDAzfX0sIGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aXZpdHlCbG9jaywgeyBpc1N0YWZmOiBpc1N0YWZmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDEyfX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGl2aXR5SW5mbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTN9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpdml0eSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MTR9fSwgXCJBY3Rpdml0eVwiKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwge1xuICAgICAgICAgICAgbWluUm93czogMyxcbiAgICAgICAgICAgIG1heFJvd3M6IDksXG4gICAgICAgICAgICBvbkNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbW1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiBjb21tZW50LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdXcml0ZSBhIGNvbW1lbnQnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDE1fX1cbiAgICAgICAgICApXG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbkNvbnRhaW5lciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0MjR9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFByaW1hcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNvbW1lbnQubGVuZ3RoID09PSAwLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25Qb3N0KGNvbW1lbnQpXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudCgnJylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQyNX19XG4gICAgICAgICAgICAsIFwiU2VuZFwiXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5vdGlmaWNhdGlvbnMsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDM3fX1cbiAgICAgICAgICAsIGFjdGl2aXR5Lm1hcCgoYWN0aXZpdHlQb2ludCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb24sIHsga2V5OiBhY3Rpdml0eVBvaW50LmlkLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQwfX1cbiAgICAgICAgICAgICAgICAsIGFjdGl2aXR5UG9pbnQuYWN0aW9uID09PSAnY29tbWVudCcgJiYgKFxuICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0Mn19XG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50QXZhdGFyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ0M319XG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEF2YXRhciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbHM6IGdldEluaXRpYWxzKGFjdGl2aXR5UG9pbnQuY3JlYXRlZF9ieV9uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvckZyb21TdHJpbmcoYWN0aXZpdHlQb2ludC5jcmVhdGVkX2J5X25hbWUpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQ0fX1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEF2YXRhck5hbWUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDQ4fX0sIGFjdGl2aXR5UG9pbnQuY3JlYXRlZF9ieV9uYW1lKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5raWZ5LCB7XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnREZWNvcmF0b3I6IChocmVmLCB0ZXh0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge2NvbG9yOiBQQUxFVFRFLkxJTkt9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDU1fX1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICwgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1Mn19XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mbywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0Njd9fSwgZ2VuZXJhdGVBY3Rpdml0eU1lc3NhZ2UoYWN0aXZpdHlQb2ludCkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChUaW1lU3RhbXAsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNDY5fX1cbiAgICAgICAgICAgICAgICAgICwgYCR7ZGF5anMoYWN0aXZpdHlQb2ludC5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKX0gYXQgJHtkYXlqcyhcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHlQb2ludC5jcmVhdGVkX2F0XG4gICAgICAgICAgICAgICAgICApLmZvcm1hdCgnSEg6bW0nKX1gXG4gICAgICAgICAgICAgICAgICAsIGFjdGl2aXR5UG9pbnQuYWN0aW9uID09PSAnY29tbWVudCcgJiYgbG9nZ2VkSW5Vc2VyID09PSBhY3Rpdml0eVBvaW50LmNyZWF0ZWRfYnkgJiYgKFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgLCAnICcsIFwiwrcgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KERlbGV0ZSwgeyBvbkNsaWNrOiAoKSA9PiBvbkRlbGV0ZShhY3Rpdml0eVBvaW50LmlkKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ3Nn19LCBcIkRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBtZW51UG9ydGFsKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFzc2lnblRhc2tNZW51LCB7XG4gICAgICAgICAgbWVudVByb3BzOiBtZW51UHJvcHMsXG4gICAgICAgICAgdXNlcnM6IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gYXNzaWduZWRVc2VyKSxcbiAgICAgICAgICBvbkFzc2lnbjogb25Bc3NpZ24sXG4gICAgICAgICAgYXNzaWduZWRVc2VyOiBhc3NpZ25lZFVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA0ODZ9fVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgaXNTdGFmZjogc3RhdGUuY3VycmVudFVzZXIuaXNTdGFmZixcbiAgcXVldWU6IHN0YXRlLnF1ZXVlcy5zZWxlY3RlZFF1ZXVlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2lkZWJhcilcbiIsImNvbnN0IGdldEZpcnN0TGV0dGVyID0gKHN0cikgPT4ge1xuICBsZXQgZmlyc3RMZXR0ZXIgPSBzdHJcblxuICBpZiAoc3RyICYmIHN0ci5sZW5ndGggPiAxKSB7XG4gICAgZmlyc3RMZXR0ZXIgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBmaXJzdExldHRlclxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRGaXJzdExldHRlclxuIiwiY29uc3QgZ2V0SW5pdGlhbHMgPSAoc3RyKSA9PiB7XG4gIGlmICghc3RyIHx8IHN0ciA9PT0gJycpIHJldHVyblxuICBjb25zdCBpbml0aWFscyA9IHN0ci5tYXRjaCgvXFxiXFx3L2cpIHx8IFtdXG4gIHJldHVybiAoKGluaXRpYWxzLnNoaWZ0KCkgfHwgJycpICsgKGluaXRpYWxzLnBvcCgpIHx8ICcnKSkudG9VcHBlckNhc2UoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJbml0aWFsc1xuIiwiaW1wb3J0IHtRVUVVRV9TVEFUVVN9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5cbmNvbnN0IGdldFF1ZXVlU3RhdHVzID0gKHR5cGUpID0+IHtcbiAgbGV0IHN0YXR1cyA9ICcnXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUVVFVUVfU1RBVFVTLkNPTVBMRVRFRDpcbiAgICAgIHN0YXR1cyA9ICdDT01QTEVURUQnXG4gICAgICBicmVha1xuICAgIGNhc2UgUVVFVUVfU1RBVFVTLk5FVzpcbiAgICAgIHN0YXR1cyA9ICdORVcnXG4gICAgICBicmVha1xuICAgIGNhc2UgUVVFVUVfU1RBVFVTLklOX1BST0dSRVNTOlxuICAgICAgc3RhdHVzID0gJ0lOIFBST0dSRVNTJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFFVRVVFX1NUQVRVUy5PUEVOOlxuICAgICAgc3RhdHVzID0gJ09QRU4nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBzdGF0dXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UXVldWVTdGF0dXNcbiJdLCJzb3VyY2VSb290IjoiIn0=