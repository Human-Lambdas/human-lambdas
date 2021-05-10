(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SettingsRoot"],{

/***/ "./src/client/components/IconButton.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/IconButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/IconButton.tsx";






const BtnWrapper = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(components_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  target: "e1v05y7e0"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  fontSize: 18,
  height: 30,
  width: 30,
  borderRadius: 100,
  border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY}`,
  padding: '0 5px',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    border: `1px solid ${styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN}`,
    color: styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN
  }
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
  target: "e1v05y7e1"
})({
  fontSize: styles_typography__WEBPACK_IMPORTED_MODULE_4__["ICON_SIZE"].MD18,
  color: 'inherit'
});

const IconButton = ({
  icon,
  onClick,
  type
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BtnWrapper, {
    onClick: onClick,
    type: type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, icon));
};

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "./src/client/components/NotFound.tsx":
/*!********************************************!*\
  !*** ./src/client/components/NotFound.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorComponent */ "./src/client/components/ErrorComponent.tsx");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/NotFound.tsx";



const NotFound = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: '404.',
  message: 'This page might have been removed, or is temporarily unavailable.',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  }
});

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/universal/components/Icon.tsx":
/*!*******************************************!*\
  !*** ./src/universal/components/Icon.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/typography */ "./src/universal/styles/typography.ts");



const Icon = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("i", {
  target: "e1pj66vr0"
})({
  fontFamily: 'Material Icons',
  fontWeight: 'normal',
  fontStyle: 'normal',
  // Default icon size (24px)
  fontSize: _styles_typography__WEBPACK_IMPORTED_MODULE_1__["ICON_SIZE"].MD24,
  display: 'inline-block',
  lineHeight: 1,
  textTransform: 'none',
  letterSpacing: 'normal',
  wordWrap: 'normal',
  whiteSpace: 'nowrap',
  direction: 'ltr',
  // Support for all WebKit browsers
  WebkitFontSmoothing: 'antialiased',
  // Support for Safari and Chrome
  textRendering: 'optimizeLegibility',
  // Support for Firefox
  mozOsxFontSmoothing: 'grayscale',
  // Support for IE
  fontFeatureSettings: 'liga'
});

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./src/universal/modules/settings/SettingsRoot.tsx":
/*!*********************************************************!*\
  !*** ./src/universal/modules/settings/SettingsRoot.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_SettingsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/SettingsContainer */ "./src/universal/modules/settings/containers/SettingsContainer.tsx");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/SettingsRoot.tsx";




const SettingsRoot = () => {
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    accessObj: {
      user_id: userId
    }
  } = networker;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getUser() {
      if (userId) {
        try {
          const {
            data
          } = await networker.httpHandler(`/users/${userId}`, {
            method: 'GET'
          });
          setUser(data);
        } catch (e) {
          console.error(e);
        }
      }
    }

    getUser();
  }, []);
  const handleProfileSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (credentials, actions) => {
    const reqBody = {
      method: 'PATCH',
      data: credentials
    };

    try {
      const {
        data
      } = await networker.httpHandler(`/users/${userId}`, reqBody);
      setUser(data);
    } catch (e) {
      console.error(e);
    }

    actions.setSubmitting(false);
    actions.resetForm();
  }, [user, setUser]);
  if (user && !user.id) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SettingsContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    orgId: String(user.current_organization_id),
    user: user,
    handleProfileSubmit: handleProfileSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsRoot);

/***/ }),

/***/ "./src/universal/modules/settings/components/Sidebar.tsx":
/*!***************************************************************!*\
  !*** ./src/universal/modules/settings/components/Sidebar.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/components/IconButton */ "./src/client/components/IconButton.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/components/Sidebar.tsx";








const SidebarContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e59huaq0"
})({
  position: 'relative',
  backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BACKGROUND_MAIN,
  width: 250,
  overflow: 'hidden',
  borderRight: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BORDER_MAIN_GRAY}`,
  height: '100%',
  userSelect: 'none'
});

const NavContents = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e59huaq1"
})({
  name: "102fcjz",
  styles: "display:flex;flex-direction:column;height:100%;padding:0;overflow-y:auto;"
});

const NavBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e59huaq2"
})({
  name: "fc7mus",
  styles: "height:50px;display:flex;flex-direction:row;margin:25px 25px 0;"
});

const NavItems = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e59huaq3"
})({
  name: "j7qwjs",
  styles: "display:flex;flex-direction:column;"
});

const NavSection = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e59huaq4"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_GRAY,
  fontSize: 13,
  fontWeight: 500,
  paddingLeft: 25,
  textTransform: 'uppercase',
  marginBottom: 10,
  marginTop: 45
});

const NavItem = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
  target: "e59huaq5"
})({
  textDecoration: 'none',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN,
  borderRadius: 4,
  fontWeight: 400,
  height: 30,
  lineHeight: '30px',
  paddingLeft: 15,
  margin: '2px 10px',
  opacity: 0.75,
  fontSize: 15,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  transition: 'all 0.25s ease-in-out',
  ':hover': {
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BACKGROUND_HOVER_LIGHT,
    color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].TEXT_MAIN,
    opacity: 1
  }
});

const activeLinkStyles = {
  backgroundColor: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BACKGROUND_HOVER} !important`,
  color: `${universal_styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN} !important`,
  opacity: '1 !important'
};

const Sidebar = props => {
  const {
    user,
    isStaff
  } = props;
  const {
    is_admin: isAdmin
  } = user || {};
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SidebarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavContents, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "arrow_back",
    onClick: () => {
      const queuesLink = isStaff ? '/outstanding-queues' : '/queues';
      history.push(queuesLink);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItems, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ClassNames"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, ({
    css
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, "Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/settings/profile`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      }
    }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/settings/password`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      }
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/settings/notifications`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }, "Notifications"), isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavSection, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      }
    }, "Organization"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/settings/company`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      }
    }, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavItem, {
      to: `/settings/api`,
      activeClassName: css(activeLinkStyles),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      }
    }, "API")));
  }))));
};

const mapStateToProps = state => ({
  isStaff: state.currentUser.isStaff
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Sidebar));

/***/ }),

/***/ "./src/universal/modules/settings/containers/SettingsContainer.tsx":
/*!*************************************************************************!*\
  !*** ./src/universal/modules/settings/containers/SettingsContainer.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./src/universal/modules/settings/components/Sidebar.tsx");
/* harmony import */ var universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/utils/handleChunkError */ "./src/universal/utils/handleChunkError.ts");
/* harmony import */ var client_components_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/components/NotFound */ "./src/client/components/NotFound.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/settings/containers/SettingsContainer.tsx";






const Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ibda7m0"
})({
  name: "1lu0h34",
  styles: "display:flex;overflow:hidden;height:100vh;"
});

const Main = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1ibda7m1"
})({
  name: "18bh7sd",
  styles: "display:flex;flex:1;height:100%;justify-content:center;padding:0 100px;background-color:#fff;overflow:auto;"
});

const APIKeyContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | APIKeyContainer */[__webpack_require__.e("vendors~APIKeyContainer~CompanyContainer~ConnectionsContainer"), __webpack_require__.e("APIKeyContainer")]).then(__webpack_require__.bind(null, /*! ./APIKeyContainer */ "./src/universal/modules/settings/containers/APIKeyContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__["default"])(error)));
const ProfileContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | ProfileContainer */[__webpack_require__.e("vendors~CompanyContainer~DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~Pas~b68adfbe"), __webpack_require__.e("vendors~DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~PasswordContainer~Pr~9eb49506"), __webpack_require__.e("DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~PasswordContainer~ProfileCon~1b4655b4"), __webpack_require__.e("ProfileContainer")]).then(__webpack_require__.bind(null, /*! ./ProfileContainer */ "./src/universal/modules/settings/containers/ProfileContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__["default"])(error)));
const CompanyContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | CompanyContainer */[__webpack_require__.e("vendors~CompanyContainer~DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~Pas~b68adfbe"), __webpack_require__.e("vendors~APIKeyContainer~CompanyContainer~ConnectionsContainer"), __webpack_require__.e("CompanyContainer")]).then(__webpack_require__.bind(null, /*! ./CompanyContainer */ "./src/universal/modules/settings/containers/CompanyContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__["default"])(error)));
const PasswordContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => Promise.all(/*! import() | PasswordContainer */[__webpack_require__.e("vendors~CompanyContainer~DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~Pas~b68adfbe"), __webpack_require__.e("vendors~DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~PasswordContainer~Pr~9eb49506"), __webpack_require__.e("DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~PasswordContainer~ProfileCon~1b4655b4"), __webpack_require__.e("PasswordContainer")]).then(__webpack_require__.bind(null, /*! ./PasswordContainer */ "./src/universal/modules/settings/containers/PasswordContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__["default"])(error)));
const NotificationsContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(() => __webpack_require__.e(/*! import() | NotificationsContainer */ "NotificationsContainer").then(__webpack_require__.bind(null, /*! ./NotificationsContainer */ "./src/universal/modules/settings/containers/NotificationsContainer.tsx")).catch(error => Object(universal_utils_handleChunkError__WEBPACK_IMPORTED_MODULE_4__["default"])(error)));

const SettingsContainer = props => {
  const {
    orgId,
    user
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orgId: orgId,
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/settings/profile",
    component: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileContainer, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/settings/api",
    component: APIKeyContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/settings/company",
    render: p => user.is_admin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CompanyContainer, _objectSpread(_objectSpread({}, p), {}, {
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/settings/password",
    component: PasswordContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/settings/notifications",
    component: p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NotificationsContainer, _objectSpread(_objectSpread({}, p), {}, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsContainer);

/***/ }),

/***/ "./src/universal/styles/typography.ts":
/*!********************************************!*\
  !*** ./src/universal/styles/typography.ts ***!
  \********************************************/
/*! exports provided: FONT_FAMILY, ICON_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FAMILY", function() { return FONT_FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_SIZE", function() { return ICON_SIZE; });
var FONT_FAMILY;

(function (FONT_FAMILY) {
  const SANS_SERIF = 'Lambdas, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif';
  FONT_FAMILY["SANS_SERIF"] = SANS_SERIF;
  const MONOSPACE = 'SF Mono, Menlo, Monaco, Consolas, "Courier New", monospace';
  FONT_FAMILY["MONOSPACE"] = MONOSPACE;
})(FONT_FAMILY || (FONT_FAMILY = {}));

var ICON_SIZE;

(function (ICON_SIZE) {
  const MD16 = '16px';
  ICON_SIZE["MD16"] = MD16;
  const MD18 = '18px';
  ICON_SIZE["MD18"] = MD18;
  const MD22 = '22px';
  ICON_SIZE["MD22"] = MD22;
  const MD24 = '24px';
  ICON_SIZE["MD24"] = MD24;
  const MD36 = '36px';
  ICON_SIZE["MD36"] = MD36;
  const MD48 = '48px';
  ICON_SIZE["MD48"] = MD48;
})(ICON_SIZE || (ICON_SIZE = {}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvSWNvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL05vdEZvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL1NldHRpbmdzUm9vdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3NldHRpbmdzL2NvbnRhaW5lcnMvU2V0dGluZ3NDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHkudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQnRuV3JhcHBlciIsIlBsYWluQnV0dG9uIiwiY29sb3IiLCJQQUxFVFRFIiwiVEVYVF9HUkFZIiwiZm9udFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwiVEVYVF9NQUlOIiwiU3R5bGVkSWNvbiIsIkljb24iLCJJQ09OX1NJWkUiLCJNRDE4IiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiTm90Rm91bmQiLCJFcnJvckNvbXBvbmVudCIsInRpdGxlIiwibWVzc2FnZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwiTUQyNCIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3b3JkV3JhcCIsIndoaXRlU3BhY2UiLCJkaXJlY3Rpb24iLCJXZWJraXRGb250U21vb3RoaW5nIiwidGV4dFJlbmRlcmluZyIsIm1vek9zeEZvbnRTbW9vdGhpbmciLCJmb250RmVhdHVyZVNldHRpbmdzIiwiU2V0dGluZ3NSb290IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsImFjY2Vzc09iaiIsInVzZXJfaWQiLCJ1c2VySWQiLCJ1c2VFZmZlY3QiLCJnZXRVc2VyIiwiZGF0YSIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImhhbmRsZVByb2ZpbGVTdWJtaXQiLCJ1c2VDYWxsYmFjayIsImNyZWRlbnRpYWxzIiwiYWN0aW9ucyIsInJlcUJvZHkiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwiaWQiLCJTZXR0aW5nc0NvbnRhaW5lciIsIm9yZ0lkIiwiU3RyaW5nIiwiY3VycmVudF9vcmdhbml6YXRpb25faWQiLCJTaWRlYmFyQ29udGFpbmVyIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJCQUNLR1JPVU5EX01BSU4iLCJvdmVyZmxvdyIsImJvcmRlclJpZ2h0IiwiQk9SREVSX01BSU5fR1JBWSIsInVzZXJTZWxlY3QiLCJOYXZDb250ZW50cyIsIk5hdkJsb2NrIiwiTmF2SXRlbXMiLCJOYXZTZWN0aW9uIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJOYXZJdGVtIiwiTmF2TGluayIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luIiwib3BhY2l0eSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQkFDS0dST1VORF9IT1ZFUl9MSUdIVCIsImFjdGl2ZUxpbmtTdHlsZXMiLCJCQUNLR1JPVU5EX0hPVkVSIiwiUFJJTUFSWV9NQUlOIiwiU2lkZWJhciIsInByb3BzIiwiaXNTdGFmZiIsImlzX2FkbWluIiwiaXNBZG1pbiIsImhpc3RvcnkiLCJ1c2VSb3V0ZXIiLCJxdWV1ZXNMaW5rIiwicHVzaCIsIkNsYXNzTmFtZXMiLCJjc3MiLCJGcmFnbWVudCIsInRvIiwiYWN0aXZlQ2xhc3NOYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjdXJyZW50VXNlciIsImNvbm5lY3QiLCJMYXlvdXQiLCJNYWluIiwiQVBJS2V5Q29udGFpbmVyIiwibGF6eSIsImNhdGNoIiwiaGFuZGxlQ2h1bmtFcnJvciIsIlByb2ZpbGVDb250YWluZXIiLCJDb21wYW55Q29udGFpbmVyIiwiUGFzc3dvcmRDb250YWluZXIiLCJOb3RpZmljYXRpb25zQ29udGFpbmVyIiwiU3dpdGNoIiwiUm91dGUiLCJleGFjdCIsInBhdGgiLCJjb21wb25lbnQiLCJwIiwicmVuZGVyIiwiRk9OVF9GQU1JTFkiLCJTQU5TX1NFUklGIiwiTU9OT1NQQUNFIiwiTUQxNiIsIk1EMjIiLCJNRDM2IiwiTUQ0OCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyx3RUFBckI7QUFBOEY7QUFFOUY7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUMsVUFBVSxHQUFHLGtGQUFPQyw4REFBUDtBQUFBO0FBQUEsR0FBb0I7QUFDckNDLE9BQUssRUFBRUMsc0RBQU8sQ0FBQ0MsU0FEc0I7QUFFckNDLFVBQVEsRUFBRSxFQUYyQjtBQUdyQ0MsUUFBTSxFQUFFLEVBSDZCO0FBSXJDQyxPQUFLLEVBQUUsRUFKOEI7QUFLckNDLGNBQVksRUFBRSxHQUx1QjtBQU1yQ0MsUUFBTSxFQUFHLGFBQVlOLHNEQUFPLENBQUNDLFNBQVUsRUFORjtBQU9yQ00sU0FBTyxFQUFFLE9BUDRCO0FBUXJDQyxZQUFVLEVBQUUsdUJBUnlCO0FBU3JDLFlBQVU7QUFDUkYsVUFBTSxFQUFHLGFBQVlOLHNEQUFPLENBQUNTLFNBQVUsRUFEL0I7QUFFUlYsU0FBSyxFQUFFQyxzREFBTyxDQUFDUztBQUZQO0FBVDJCLENBQXBCLENBQW5COztBQWVBLE1BQU1DLFVBQVUsR0FBRyxrRkFBT0MsaUVBQVA7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LElBQXBCO0FBQ3JCLFFBQU0zSCxJQUFJLEdBQUcsTUFBYjtBQUFxQkQsV0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQkMsSUFBcEI7QUFDckIsUUFBTTRILElBQUksR0FBRyxNQUFiO0FBQXFCN0gsV0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQjZILElBQXBCO0FBQ3JCLFFBQU0xRyxJQUFJLEdBQUcsTUFBYjtBQUFxQm5CLFdBQVMsQ0FBQyxNQUFELENBQVQsR0FBb0JtQixJQUFwQjtBQUNyQixRQUFNMkcsSUFBSSxHQUFHLE1BQWI7QUFBcUI5SCxXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9COEgsSUFBcEI7QUFDckIsUUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFBcUIvSCxXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CK0gsSUFBcEI7QUFDdEIsQ0FQcUIsRUFPbkIvSCxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQVBVLEUiLCJmaWxlIjoiU2V0dGluZ3NSb290XzE5YWM1NTE5MzFkMWVmMDI4MGE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0ljb25CdXR0b24udHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJ2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtJQ09OX1NJWkV9IGZyb20gJ3N0eWxlcy90eXBvZ3JhcGh5J1xuaW1wb3J0IEljb24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbidcblxuXG5cblxuXG5cblxuY29uc3QgQnRuV3JhcHBlciA9IHN0eWxlZChQbGFpbkJ1dHRvbikoe1xuICBjb2xvcjogUEFMRVRURS5URVhUX0dSQVksXG4gIGZvbnRTaXplOiAxOCxcbiAgaGVpZ2h0OiAzMCxcbiAgd2lkdGg6IDMwLFxuICBib3JkZXJSYWRpdXM6IDEwMCxcbiAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5URVhUX0dSQVl9YCxcbiAgcGFkZGluZzogJzAgNXB4JyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICc6aG92ZXInOiB7XG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5URVhUX01BSU59YCxcbiAgICBjb2xvcjogUEFMRVRURS5URVhUX01BSU5cbiAgfVxufSlcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKSh7XG4gIGZvbnRTaXplOiBJQ09OX1NJWkUuTUQxOCxcbiAgY29sb3I6ICdpbmhlcml0J1xufSlcblxuY29uc3QgSWNvbkJ1dHRvbiA9ICh7aWNvbiwgb25DbGljaywgdHlwZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ0bldyYXBwZXIsIHsgb25DbGljazogb25DbGljaywgdHlwZTogdHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM2fX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDM3fX0sIGljb24pXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9Ob3RGb3VuZC50c3hcIjtpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBFcnJvckNvbXBvbmVudCBmcm9tICcuL0Vycm9yQ29tcG9uZW50J1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChFcnJvckNvbXBvbmVudCwge1xuICAgIHRpdGxlOiAnNDA0LicsXG4gICAgbWVzc2FnZTogJ1RoaXMgcGFnZSBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZCwgb3IgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuJywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDV9fVxuICApXG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7SUNPTl9TSVpFfSBmcm9tICcuLi9zdHlsZXMvdHlwb2dyYXBoeSdcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5pKHtcbiAgZm9udEZhbWlseTogJ01hdGVyaWFsIEljb25zJyxcbiAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gIC8vIERlZmF1bHQgaWNvbiBzaXplICgyNHB4KVxuICBmb250U2l6ZTogSUNPTl9TSVpFLk1EMjQsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBsaW5lSGVpZ2h0OiAxLFxuICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gIGxldHRlclNwYWNpbmc6ICdub3JtYWwnLFxuICB3b3JkV3JhcDogJ25vcm1hbCcsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBkaXJlY3Rpb246ICdsdHInLFxuICAvLyBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIC8vIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lXG4gIHRleHRSZW5kZXJpbmc6ICdvcHRpbWl6ZUxlZ2liaWxpdHknLFxuICAvLyBTdXBwb3J0IGZvciBGaXJlZm94XG4gIG1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAvLyBTdXBwb3J0IGZvciBJRVxuICBmb250RmVhdHVyZVNldHRpbmdzOiAnbGlnYSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9TZXR0aW5nc1Jvb3QudHN4XCI7aW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2V0dGluZ3NDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1NldHRpbmdzQ29udGFpbmVyJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdob29rcy91c2VOZXR3b3JrZXInXG5cblxuXG5cblxuXG5jb25zdCBTZXR0aW5nc1Jvb3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7XG4gICAgYWNjZXNzT2JqOiB7dXNlcl9pZDogdXNlcklkfVxuICB9ID0gbmV0d29ya2VyXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzLyR7dXNlcklkfWAsIHttZXRob2Q6ICdHRVQnfSlcbiAgICAgICAgICBzZXRVc2VyKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRVc2VyKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlUHJvZmlsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiBjcmVkZW50aWFsc1xuICAgICAgfSBcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvJHt1c2VySWR9YCwgcmVxQm9keSlcbiAgICAgICAgc2V0VXNlcihkYXRhKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICB9XG4gICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXG4gICAgICBhY3Rpb25zLnJlc2V0Rm9ybSgpXG4gICAgfSxcbiAgICBbdXNlciwgc2V0VXNlcl1cbiAgKVxuXG4gIGlmICh1c2VyICYmICF1c2VyLmlkKSByZXR1cm4gbnVsbFxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2V0dGluZ3NDb250YWluZXIsIHtcbiAgICAgIG9yZ0lkOiBTdHJpbmcodXNlci5jdXJyZW50X29yZ2FuaXphdGlvbl9pZCksXG4gICAgICB1c2VyOiB1c2VyLFxuICAgICAgaGFuZGxlUHJvZmlsZVN1Ym1pdDogaGFuZGxlUHJvZmlsZVN1Ym1pdCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDU0fX1cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NSb290XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvc2V0dGluZ3MvY29tcG9uZW50cy9TaWRlYmFyLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Q2xhc3NOYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7TmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy9wYWxldHRlJ1xuXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9JY29uQnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuXG5cblxuXG5cblxuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdih7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9NQUlOLFxuICB3aWR0aDogMjUwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGhlaWdodDogJzEwMCUnLFxuICB1c2VyU2VsZWN0OiAnbm9uZSdcbn0pXG5cbmNvbnN0IE5hdkNvbnRlbnRzID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICBwYWRkaW5nOiAwLFxuICBvdmVyZmxvd1k6ICdhdXRvJ1xufSlcblxuY29uc3QgTmF2QmxvY2sgPSBzdHlsZWQuZGl2KHtcbiAgaGVpZ2h0OiA1MCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgbWFyZ2luOiAnMjVweCAyNXB4IDAnXG59KVxuXG5jb25zdCBOYXZJdGVtcyA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBOYXZTZWN0aW9uID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgZm9udFNpemU6IDEzLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIHBhZGRpbmdMZWZ0OiAyNSxcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gIG1hcmdpbkJvdHRvbTogMTAsXG4gIG1hcmdpblRvcDogNDVcbn0pXG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQoTmF2TGluaykoe1xuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGJvcmRlclJhZGl1czogNCxcbiAgZm9udFdlaWdodDogNDAwLFxuICBoZWlnaHQ6IDMwLFxuICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gIHBhZGRpbmdMZWZ0OiAxNSxcbiAgbWFyZ2luOiAnMnB4IDEwcHgnLFxuICBvcGFjaXR5OiAwLjc1LFxuICBmb250U2l6ZTogMTUsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgJzpob3Zlcic6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuQkFDS0dST1VORF9IT1ZFUl9MSUdIVCxcbiAgICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gICAgb3BhY2l0eTogMVxuICB9XG59KVxuXG5jb25zdCBhY3RpdmVMaW5rU3R5bGVzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IGAke1BBTEVUVEUuQkFDS0dST1VORF9IT1ZFUn0gIWltcG9ydGFudGAsXG4gIGNvbG9yOiBgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn0gIWltcG9ydGFudGAsXG4gIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnXG59XG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3VzZXIsIGlzU3RhZmZ9ID0gcHJvcHNcbiAgY29uc3Qge2lzX2FkbWluOiBpc0FkbWlufSA9IHVzZXIgfHwge31cbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaWRlYmFyQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZDb250ZW50cywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MX19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5Mn19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHtcbiAgICAgICAgICAgIGljb246IFwiYXJyb3dfYmFja1wiLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBxdWV1ZXNMaW5rID0gaXNTdGFmZiA/ICcvb3V0c3RhbmRpbmctcXVldWVzJyA6ICcvcXVldWVzJ1xuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2gocXVldWVzTGluaylcbiAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5M319XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZJdGVtcywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChDbGFzc05hbWVzLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19XG4gICAgICAgICAgICAsICh7Y3NzfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZTZWN0aW9uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwNn19LCBcIk1lXCIpXG4gICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9zZXR0aW5ncy9wcm9maWxlYCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDd9fSwgXCJQcm9maWxlXCJcblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvc2V0dGluZ3MvcGFzc3dvcmRgLCBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExMH19LCBcIlBhc3N3b3JkXCJcblxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdkl0ZW0sIHsgdG86IGAvc2V0dGluZ3Mvbm90aWZpY2F0aW9uc2AsIGFjdGl2ZUNsYXNzTmFtZTogY3NzKGFjdGl2ZUxpbmtTdHlsZXMpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTEzfX0sIFwiTm90aWZpY2F0aW9uc1wiXG5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgaXNBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2U2VjdGlvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTh9fSwgXCJPcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9zZXR0aW5ncy9jb21wYW55YCwgYWN0aXZlQ2xhc3NOYW1lOiBjc3MoYWN0aXZlTGlua1N0eWxlcyksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTl9fSwgXCJDb21wYW55XCJcblxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2SXRlbSwgeyB0bzogYC9zZXR0aW5ncy9hcGlgLCBhY3RpdmVDbGFzc05hbWU6IGNzcyhhY3RpdmVMaW5rU3R5bGVzKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMn19LCBcIkFQSVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBpc1N0YWZmOiBzdGF0ZS5jdXJyZW50VXNlci5pc1N0YWZmXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoU2lkZWJhcilcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy9zZXR0aW5ncy9jb250YWluZXJzL1NldHRpbmdzQ29udGFpbmVyLnRzeFwiO2ltcG9ydCBSZWFjdCwge2xhenl9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmltcG9ydCBoYW5kbGVDaHVua0Vycm9yIGZyb20gJ3VuaXZlcnNhbC91dGlscy9oYW5kbGVDaHVua0Vycm9yJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL05vdEZvdW5kJ1xuXG5cblxuXG5cblxuXG5jb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGhlaWdodDogJzEwMHZoJ1xufSlcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGhlaWdodDogJzEwMCUnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBhZGRpbmc6ICcwIDEwMHB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIG92ZXJmbG93OiAnYXV0bydcbn0pXG5cbmNvbnN0IEFQSUtleUNvbnRhaW5lciA9IGxhenkoKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdBUElLZXlDb250YWluZXInICovICcuL0FQSUtleUNvbnRhaW5lcicpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IFByb2ZpbGVDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnUHJvZmlsZUNvbnRhaW5lcicgKi8gJy4vUHJvZmlsZUNvbnRhaW5lcicpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IENvbXBhbnlDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnQ29tcGFueUNvbnRhaW5lcicgKi8gJy4vQ29tcGFueUNvbnRhaW5lcicpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IFBhc3N3b3JkQ29udGFpbmVyID0gbGF6eSgoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ1Bhc3N3b3JkQ29udGFpbmVyJyAqLyAnLi9QYXNzd29yZENvbnRhaW5lcicpLmNhdGNoKChlcnJvcikgPT5cbiAgICBoYW5kbGVDaHVua0Vycm9yKGVycm9yKVxuICApXG4pXG5cbmNvbnN0IE5vdGlmaWNhdGlvbnNDb250YWluZXIgPSBsYXp5KCgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnTm90aWZpY2F0aW9uc0NvbnRhaW5lcicgKi8gJy4vTm90aWZpY2F0aW9uc0NvbnRhaW5lcidcbiAgKS5jYXRjaCgoZXJyb3IpID0+IGhhbmRsZUNodW5rRXJyb3IoZXJyb3IpKVxuKVxuXG5jb25zdCBTZXR0aW5nc0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7b3JnSWQsIHVzZXJ9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwgeyBvcmdJZDogb3JnSWQsIHVzZXI6IHVzZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChNYWluLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDY2fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2N319XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHBhdGg6IFwiL3NldHRpbmdzL3Byb2ZpbGVcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogKHApID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvZmlsZUNvbnRhaW5lciwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzF9fSApLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjh9fVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3NldHRpbmdzL2FwaVwiLCBjb21wb25lbnQ6IEFQSUtleUNvbnRhaW5lciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDczfX0gKVxuICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgICAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgICAgICBwYXRoOiBcIi9zZXR0aW5ncy9jb21wYW55XCIsXG4gICAgICAgICAgICByZW5kZXI6IChwKSA9PiAodXNlci5pc19hZG1pbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcGFueUNvbnRhaW5lciwgeyAuLi5wLCB1c2VyOiB1c2VyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzd9fSApIDogUmVhY3QuY3JlYXRlRWxlbWVudChOb3RGb3VuZCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3N319ICkpLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNzR9fVxuICAgICAgICAgIClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHsgZXhhY3Q6IHRydWUsIHBhdGg6IFwiL3NldHRpbmdzL3Bhc3N3b3JkXCIsIGNvbXBvbmVudDogUGFzc3dvcmRDb250YWluZXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA3OX19IClcbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICAgICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICAgICAgcGF0aDogXCIvc2V0dGluZ3Mvbm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgY29tcG9uZW50OiAocCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb25zQ29udGFpbmVyLCB7IC4uLnAsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4M319ICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQ29udGFpbmVyXG4iLCJleHBvcnQgdmFyIEZPTlRfRkFNSUxZOyAoZnVuY3Rpb24gKEZPTlRfRkFNSUxZKSB7XG4gIGNvbnN0IFNBTlNfU0VSSUYgPSAnTGFtYmRhcywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZic7IEZPTlRfRkFNSUxZW1wiU0FOU19TRVJJRlwiXSA9IFNBTlNfU0VSSUY7XG4gIGNvbnN0IE1PTk9TUEFDRSA9ICdTRiBNb25vLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UnOyBGT05UX0ZBTUlMWVtcIk1PTk9TUEFDRVwiXSA9IE1PTk9TUEFDRTtcbn0pKEZPTlRfRkFNSUxZIHx8IChGT05UX0ZBTUlMWSA9IHt9KSk7XG5cbmV4cG9ydCB2YXIgSUNPTl9TSVpFOyAoZnVuY3Rpb24gKElDT05fU0laRSkge1xuICBjb25zdCBNRDE2ID0gJzE2cHgnOyBJQ09OX1NJWkVbXCJNRDE2XCJdID0gTUQxNjtcbiAgY29uc3QgTUQxOCA9ICcxOHB4JzsgSUNPTl9TSVpFW1wiTUQxOFwiXSA9IE1EMTg7XG4gIGNvbnN0IE1EMjIgPSAnMjJweCc7IElDT05fU0laRVtcIk1EMjJcIl0gPSBNRDIyO1xuICBjb25zdCBNRDI0ID0gJzI0cHgnOyBJQ09OX1NJWkVbXCJNRDI0XCJdID0gTUQyNDtcbiAgY29uc3QgTUQzNiA9ICczNnB4JzsgSUNPTl9TSVpFW1wiTUQzNlwiXSA9IE1EMzY7XG4gIGNvbnN0IE1ENDggPSAnNDhweCc7IElDT05fU0laRVtcIk1ENDhcIl0gPSBNRDQ4O1xufSkoSUNPTl9TSVpFIHx8IChJQ09OX1NJWkUgPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==