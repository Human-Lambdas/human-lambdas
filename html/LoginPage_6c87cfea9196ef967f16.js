(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginPage"],{

/***/ "./src/client/components/FlatButton.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/FlatButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");




const FlatButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "ef4saif0"
})(props => {
  const {
    waiting,
    disabled
  } = props;
  const isDisabled = disabled || waiting;
  return {
    backgroundColor: styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
    color: '#fff',
    borderRadius: 4,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    ':hover': {
      backgroundColor: !isDisabled && styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK
    },
    ':active, :focus': {
      boxShadow: `0 0 0 3px ${styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BOX_SHADOW_PRIMARY}`,
      backgroundColor: !isDisabled && styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_LIGHTER
    }
  };
});

/* harmony default export */ __webpack_exports__["default"] = (FlatButton);

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

/***/ "./src/client/components/LoginContainer.tsx":
/*!**************************************************!*\
  !*** ./src/client/components/LoginContainer.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/typography */ "./src/client/styles/typography.ts");
/* harmony import */ var universal_styles_theme_logos_HLLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/styles/theme/logos/HLLogo */ "./src/universal/styles/theme/logos/HLLogo.tsx");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/LoginContainer.tsx";







const Header = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emgkdj70"
})({
  name: "ucbi2i",
  styles: "display:flex;flex-direction:column;align-items:center;position:relative;"
});

const Tagline = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emgkdj71"
})({
  marginTop: 15,
  marginBottom: 15,
  fontFamily: _styles_typography__WEBPACK_IMPORTED_MODULE_4__["FONT_FAMILY"].SANS_SERIF,
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY,
  fontWeight: 500,
  fontSize: 15
});

const Content = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  target: "emgkdj72"
})({
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  borderRadius: 4,
  backgroundColor: '#fff',
  boxShadow: client_utils_constants__WEBPACK_IMPORTED_MODULE_6__["BoxShadow"].TOP_BAR
});

const BetaPill = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "emgkdj73"
})({
  name: "1w8nru0",
  styles: "user-select:none;display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:115px;width:48px;height:29px;border-radius:100px;color:#3E0BB0;font-weight:500;font-size:13px;background-color:#A4E3FF;"
});

const LoginContainer = props => {
  const {
    children,
    tagLine
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_styles_theme_logos_HLLogo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BetaPill, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Beta"), tagLine && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tagline, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, tagLine)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginContainer);

/***/ }),

/***/ "./src/client/components/LoginPage.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/LoginPage.tsx ***!
  \*********************************************/
/*! exports provided: FormikRoot, LinkButton, FieldBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikRoot", function() { return FormikRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBlock", function() { return FieldBlock; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/palette */ "./src/client/styles/palette.ts");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputField */ "./src/client/components/InputField.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var client_components_FlatButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/components/FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LoginContainer */ "./src/client/components/LoginContainer.tsx");
/* harmony import */ var universal_components_PublicSignUpPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! universal/components/PublicSignUpPage */ "./src/universal/components/PublicSignUpPage.tsx");
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");
/* harmony import */ var universal_components_GoogleAuthButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! universal/components/GoogleAuthButton */ "./src/universal/components/GoogleAuthButton.tsx");
/* harmony import */ var client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! client/utils/isUserStaff */ "./src/client/utils/isUserStaff.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/LoginPage.tsx";





















const SubLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eibj7tj0"
})({
  name: "1itz35z",
  styles: "width:100%;text-align:center;margin-bottom:8px;"
});

const FormikRoot = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "eibj7tj1"
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: _styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].BACKGROUND_MAIN
});
const LinkButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
  target: "eibj7tj2"
})({
  color: _styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN,
  fontSize: 13,
  textAlign: 'center',
  fontWeight: 500,
  height: 18,
  lineHeight: '18px',
  ':hover': {
    color: _styles_palette__WEBPACK_IMPORTED_MODULE_5__["PALETTE"].PRIMARY_MAIN_DARK
  }
});
const FieldBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "eibj7tj3"
})({
  name: "15poin4",
  styles: "margin-bottom:15px;"
});

const LoginPage = props => {
  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_8__["default"])('Login | Human Lambdas');
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const {
    dispatch
  } = props;
  const initialEmailValue = props.email ? props.email : '';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ;

    (async function maybeLoggedIn() {
      const accessToken = await window.localStorage.getItem(client_utils_constants__WEBPACK_IMPORTED_MODULE_12__["APP_TOKEN_KEY"]);
      const {
        accessObj = {}
      } = networker || {};
      const {
        user_id: userId
      } = accessObj || {};

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
          const {
            data: organizations
          } = await networker.httpHandler(`/orgs`, {
            method: 'GET'
          });

          if (Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_20__["default"])(organizations, current_organization_id)) {
            history.push(`/outstanding-queues`);
          } else {
            history.push(`/queues`);
          }
        } else {
          console.error(`Error logging in user: ${userId}`);
        }
      }
    })();
  }, [networker]);
  const handleSubmitCredentials = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async credentials => {
    const reqBody = {
      method: 'POST',
      data: credentials
    };
    const {
      data,
      errors
    } = await networker.httpHandler('/users/token', reqBody);

    if (!errors) {
      const {
        access,
        refresh
      } = data || {};

      if (access && refresh) {
        networker.setAccessToken(access);
        networker.setRefreshToken(refresh);
        const {
          user_id,
          name,
          email
        } = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(access);
        const {
          data: {
            current_organization_id
          }
        } = await networker.httpHandler(`/users/${user_id}`, {
          method: 'GET'
        }); // segment track

        Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_14__["segmentTrack"])('Logged In', {
          orgId: current_organization_id,
          fullName: name,
          userId: user_id,
          email,
          login_type: 'manual'
        });
        const {
          data: organizations
        } = await networker.httpHandler(`/orgs`, {
          method: 'GET'
        });

        if (Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_20__["default"])(organizations, current_organization_id)) {
          history.push(`/outstanding-queues`);
        } else {
          history.push(`/queues`);
        }
      }
    } else {
      errors.forEach(error => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_13__["addFailureNotification"])(error.message)));
    }
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormikRoot, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      email: initialEmailValue,
      password: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_7__["loginSchema"],
    onSubmit: handleSubmitCredentials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange,
    dirty
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_16__["default"], {
    tagLine: 'Log in to Human Lambdas',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_GoogleAuthButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
    label: "Log in with Google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 153
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 164
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FieldBlock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_FlatButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "submit",
    disabled: isSubmitting || !dirty || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    }
  }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    }
  }) : `Log in`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubLine, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, "Don't have an account?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PublicSignUpPage__WEBPACK_IMPORTED_MODULE_17__["Link"], {
    onClick: () => {
      history.push('/signup');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, "Sign up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkButton, {
    onClick: () => {
      history.push('/forgot/');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, "Forgot your password?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])()(LoginPage));

/***/ }),

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

/***/ "./src/client/utils/isUserStaff.ts":
/*!*****************************************!*\
  !*** ./src/client/utils/isUserStaff.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");


const isUserStaff = (organizations, current_organization_id) => {
  for (const org of organizations) {
    if (org.id === universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["STAFF_ORG_ID"] && current_organization_id === universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["STAFF_ORG_ID"]) return true;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (isUserStaff);

/***/ }),

/***/ "./src/client/utils/segmentIo.ts":
/*!***************************************!*\
  !*** ./src/client/utils/segmentIo.ts ***!
  \***************************************/
/*! exports provided: segmentTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentTrack", function() { return segmentTrack; });
const segmentTrack = async (event, properties) => {
  const {
    analytics
  } = window || undefined;
  if (!analytics) return;
  analytics.track(event, properties);
};

/***/ }),

/***/ "./src/universal/components/GoogleAuthButton.tsx":
/*!*******************************************************!*\
  !*** ./src/universal/components/GoogleAuthButton.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/GoogleAuthButton.tsx";

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












const StyledGoogleLoginButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(react_google_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLogin"], {
  target: "e1yoggot0"
})({
  name: "1oegxvb",
  styles: "justify-content:center;border:1px solid #6648ee !important;box-shadow:none !important;border-radius:4px !important;width:100%;&:focus{outline:none;}div{margin-right:0 !important;padding:0 10px 0 0 !important;}span{font-family:Lambdas,-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:500 !important;font-size:15px !important;color:#6648ee !important;}"
});

const ButtonWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1yoggot1"
})({
  name: "1j33kj2",
  styles: "width:100%;height:41px;margin-top:15px;margin-bottom:15px;justify-content:center;"
});

const GoogleAuthButton = props => {
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    dispatch,
    label
  } = props;
  const [isSubmitting, setIsSubmitting] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    location: {
      search
    }
  } = history;
  const params = qs__WEBPACK_IMPORTED_MODULE_9___default.a.parse(search.slice(search.lastIndexOf('?') + 1));
  const template_id = _optionalChain([params, 'optionalAccess', _ => _.template_id]) ? Number(params.template_id) : undefined;

  const logInIfNoError = async (data, login_type) => {
    const {
      access,
      refresh
    } = data || {};

    if (access && refresh) {
      networker.setAccessToken(access);
      networker.setRefreshToken(refresh);
      const {
        user_id,
        name,
        email
      } = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(access);
      const {
        data: {
          current_organization_id
        }
      } = await networker.httpHandler(`/users/${user_id}`, {
        method: 'GET'
      }); // segment track

      Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_4__["segmentTrack"])('Logged In', {
        orgId: current_organization_id,
        fullName: name,
        userId: user_id,
        email,
        login_type
      });
      history.push(`/queues`);
    }
  };

  const checkIfErrorIsForNonExistingUser = errors => {
    return Array.isArray(errors) && errors.length === 1 && errors[0].message && errors[0].message.indexOf('no user exists for') === 0;
  };

  const fetchToken = async tokenId => {
    const reqBody = {
      method: 'POST',
      data: {
        token: tokenId
      }
    };

    _optionalChain([networker, 'optionalAccess', _2 => _2.getAccessToken, 'call', _3 => _3(window)]);

    _optionalChain([networker, 'optionalAccess', _4 => _4.getRefreshToken, 'call', _5 => _5(window)]);

    const {
      data,
      errors
    } = await networker.httpHandler('/users/token/google', reqBody);
    return {
      data,
      errors
    };
  };

  const handleResponseFromGoogle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async response => {
    setIsSubmitting(true);
    const {
      accessToken,
      tokenId,
      profileObj
    } = response;
    const {
      name,
      email
    } = profileObj || {};

    if (accessToken && tokenId && name && email) {
      const {
        data,
        errors
      } = await fetchToken(tokenId);

      if (!errors) {
        await logInIfNoError(data, 'google');
      } else if (checkIfErrorIsForNonExistingUser(errors)) {
        try {
          let payload = {
            email,
            name,
            template_id: template_id || 0
          };
          const reqBodyForRegister = {
            method: 'POST',
            data: payload
          };
          const res = await networker.httpHandler('/users/register', reqBodyForRegister);

          if (!res.errors) {
            Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_4__["segmentTrack"])('Organization Join Successful', {
              email
            });
            const {
              data,
              errors
            } = await fetchToken(tokenId);

            if (!errors) {
              await logInIfNoError(data, 'google');
            }
          }
        } catch (e) {
          setIsSubmitting(false);
          console.error('User signup failed', e);
          Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_4__["segmentTrack"])('Signup Failed');
        }
      } else {
        setIsSubmitting(false);
        errors.forEach(error => dispatch(addFailureNotification(error.message)));
      }
    }

    setIsSubmitting(false);
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonWrapper, {
    style: isSubmitting ? {
      marginLeft: '50%',
      paddingTop: '10px'
    } : {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    }
  }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledGoogleLoginButton, {
    clientId: client_utils_constants__WEBPACK_IMPORTED_MODULE_3__["GOOGLE_AUTH_ID"],
    buttonText: label,
    onSuccess: handleResponseFromGoogle,
    onFailure: handleResponseFromGoogle,
    cookiePolicy: 'single_host_origin',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(GoogleAuthButton));

/***/ }),

/***/ "./src/universal/components/PublicSignUpPage.tsx":
/*!*******************************************************!*\
  !*** ./src/universal/components/PublicSignUpPage.tsx ***!
  \*******************************************************/
/*! exports provided: Link, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputField */ "./src/universal/components/InputField.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/hooks/useDocumentTitle */ "./src/client/hooks/useDocumentTitle.ts");
/* harmony import */ var client_components_FlatButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/components/FlatButton */ "./src/client/components/FlatButton.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var client_components_LoginContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/components/LoginContainer */ "./src/client/components/LoginContainer.tsx");
/* harmony import */ var client_components_LoginPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! client/components/LoginPage */ "./src/client/components/LoginPage.tsx");
/* harmony import */ var client_utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");
/* harmony import */ var universal_components_GoogleAuthButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! universal/components/GoogleAuthButton */ "./src/universal/components/GoogleAuthButton.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/PublicSignUpPage.tsx";

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




















const SubLine = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1u14kiu0"
})({
  name: "q9ru2w",
  styles: "width:100%;text-align:center;margin-top:8px;"
});

const SubSubLine = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(SubLine, {
  target: "e1u14kiu1"
})({
  name: "1qxtz39",
  styles: "font-size:12px;"
});

const Link = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("span", {
  target: "e1u14kiu2"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_16__["PALETTE"].PRIMARY_MAIN,
  cursor: 'pointer'
});

const SmallLink = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a", {
  target: "e1u14kiu3"
})({
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_16__["PALETTE"].PRIMARY_MAIN,
  fontSize: 12
});

const PublicSignUpPage = props => {
  Object(client_hooks_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__["default"])('Sign Up | Human Lambdas');
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    location: {
      search
    }
  } = history;
  const params = qs__WEBPACK_IMPORTED_MODULE_3___default.a.parse(search.slice(search.lastIndexOf('?') + 1));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ;

    (async function maybeLoggedIn() {
      const accessToken = await window.localStorage.getItem(client_utils_constants__WEBPACK_IMPORTED_MODULE_15__["APP_TOKEN_KEY"]);
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
    const template_id = _optionalChain([params, 'optionalAccess', _ => _.template_id]) ? Number(params.template_id) : undefined;

    try {
      const payload = {
        email: credentials.email,
        name: credentials.name,
        password: credentials.password,
        template_id
      };
      const reqBody = {
        method: 'POST',
        data: payload
      };
      const res = await networker.httpHandler('/users/register', reqBody);
      Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_10__["segmentTrack"])('Organization Join Successful', {
        email: credentials.email
      });

      if (res.errors) {
        res.errors.forEach(error => {
          props.addFailureNotification(error.message);
        });
        throw 'Error signing up';
      } else {
        props.addSuccessNotification('You have successfuly joined this organization');
      }

      const tokenReqBody = {
        method: 'POST',
        data: {
          email: credentials.email,
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
    } catch (e) {
      console.error('User signup failed', e);
      Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_10__["segmentTrack"])('Signup Failed');
    }
  }, [networker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_LoginPage__WEBPACK_IMPORTED_MODULE_14__["FormikRoot"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      email: '',
      name: '',
      password: ''
    },
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_5__["PublicSignUpSchema"],
    onSubmit: handleSubmitCredentials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, ({
    touched,
    isSubmitting,
    isValid,
    values,
    errors,
    handleBlur,
    handleChange,
    dirty
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_LoginContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    tagLine: 'Create an account',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_GoogleAuthButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
    label: "Sign up with Google",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_LoginPage__WEBPACK_IMPORTED_MODULE_14__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 148
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_LoginPage__WEBPACK_IMPORTED_MODULE_14__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 159
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_LoginPage__WEBPACK_IMPORTED_MODULE_14__["FieldBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 170
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_FlatButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    disabled: isSubmitting || !dirty || !isValid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }) : `Sign up`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubLine, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    }
  }, "Already have an account?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    onClick: () => {
      history.push('/');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubSubLine, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }, "By clicking Sign Up, you agree to the Human Lambdas", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallLink, {
    target: '_blank',
    href: 'https://humanlambdas.com/legal/terms-of-service',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }, "Terms Of Service"), ",", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SmallLink, {
    target: "_blank",
    href: "https://humanlambdas.com/legal/privacy-policy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    }
  }, "Privacy Policy"), ' ', "and to receiving occasional emails relating to your account"))));
};

const mapDispatchToProps = dispatch => {
  return {
    addFailureNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__["addFailureNotification"])(arg)),
    addSuccessNotification: arg => dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_11__["addSuccessNotification"])(arg))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(null, mapDispatchToProps)(PublicSignUpPage));

/***/ }),

/***/ "./src/universal/styles/theme/logos/HLLogo.tsx":
/*!*****************************************************!*\
  !*** ./src/universal/styles/theme/logos/HLLogo.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/styles/theme/logos/HLLogo.tsx";

const HLLogo = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('svg', {
    width: 70,
    height: 70,
    viewBox: "0 0 175 175",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    width: "175",
    height: "175",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    x: "17",
    y: "18",
    width: "28.5185",
    height: "140",
    rx: "4",
    fill: "#8268F7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M54.9312 23.995C53.3967 21.3283 55.3216 18 58.3982 18L77.6868 18C79.118 18 80.4401 18.7647 81.1539 20.0052L157.103 152.005C158.637 154.672 156.712 158 153.636 158L134.352 158C132.92 158 131.598 157.235 130.885 155.995L54.9312 23.995Z",
    fill: "#8268F7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
    d: "M54.9462 151.999C53.4065 154.666 55.3315 157.999 58.411 157.999L77.6913 157.996C79.1199 157.995 80.44 157.233 81.1545 155.996L111.561 103.342C113.101 100.675 111.176 97.3417 108.097 97.3418L88.8114 97.3424C87.3824 97.3425 86.0619 98.1048 85.3474 99.3424L54.9462 151.999Z",
    fill: "#8268F7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', {
    x: "17",
    y: "102.259",
    width: "28.5185",
    height: "93.3333",
    rx: "4",
    transform: "rotate(-90 17 102.259)",
    fill: "#8268F7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (HLLogo);

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

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvRmxhdEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9Mb2dpbkNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0xvZ2luUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9TdHlsZWRFcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ob29rcy91c2VEb2N1bWVudFRpdGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9zZWdtZW50SW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0dvb2dsZUF1dGhCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9QdWJsaWNTaWduVXBQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL3N0eWxlcy90aGVtZS9sb2dvcy9ITExvZ28udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHkudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC5pbnNwZWN0IChpZ25vcmVkKSJdLCJuYW1lcyI6WyJGbGF0QnV0dG9uIiwiUGxhaW5CdXR0b24iLCJwcm9wcyIsIndhaXRpbmciLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQQUxFVFRFIiwiUFJJTUFSWV9NQUlOIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJvdXRsaW5lIiwiUFJJTUFSWV9NQUlOX0RBUksiLCJCT1hfU0hBRE9XX1BSSU1BUlkiLCJQUklNQVJZX01BSU5fTElHSFRFUiIsIl9qc3hGaWxlTmFtZSIsIklucHV0IiwiZXJyb3IiLCJkaXNwbGF5IiwiYXBwZWFyYW5jZSIsIm1hcmdpbiIsImJvcmRlciIsIkVSUk9SX01BSU4iLCJCT1JERVJfTUFJTl9HUkFZIiwiYm94U2l6aW5nIiwiVEVYVF9NQUlOIiwiZm9udEZhbWlseSIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJoZWlnaHQiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsIndpZHRoIiwiYm9yZGVyQ29sb3IiLCJMYWJlbCIsIlN0eWxlZExhYmVsIiwiTGFiZWxIZWxwZXIiLCJURVhUX0dSQVkiLCJtYXJnaW5MZWZ0IiwiSW5wdXRGaWVsZCIsImZvcndhcmRSZWYiLCJyZWYiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJpc09wdGlvbmFsIiwiaXNSZXF1aXJlZCIsIm5hbWUiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsImxhYmVsIiwic3R5bGUiLCJzcGVsbENoZWNrIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkJvb2xlYW4iLCJTdHlsZWRFcnJvciIsIkhlYWRlciIsIlRhZ2xpbmUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJDb250ZW50IiwiRm9ybSIsImZsZXhEaXJlY3Rpb24iLCJCb3hTaGFkb3ciLCJUT1BfQkFSIiwiQmV0YVBpbGwiLCJMb2dpbkNvbnRhaW5lciIsImNoaWxkcmVuIiwidGFnTGluZSIsIkhMTG9nbyIsIlN1YkxpbmUiLCJGb3JtaWtSb290IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiQkFDS0dST1VORF9NQUlOIiwiTGlua0J1dHRvbiIsInRleHRBbGlnbiIsIkZpZWxkQmxvY2siLCJMb2dpblBhZ2UiLCJ1c2VEb2N1bWVudFRpdGxlIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsImRpc3BhdGNoIiwiaW5pdGlhbEVtYWlsVmFsdWUiLCJlbWFpbCIsInVzZUVmZmVjdCIsIm1heWJlTG9nZ2VkSW4iLCJhY2Nlc3NUb2tlbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBUFBfVE9LRU5fS0VZIiwiYWNjZXNzT2JqIiwidXNlcl9pZCIsInVzZXJJZCIsImRhdGEiLCJjdXJyZW50X29yZ2FuaXphdGlvbl9pZCIsImVycm9ycyIsImh0dHBIYW5kbGVyIiwibWV0aG9kIiwidW5kZWZpbmVkIiwib3JnYW5pemF0aW9ucyIsImlzVXNlclN0YWZmIiwicHVzaCIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXRDcmVkZW50aWFscyIsInVzZUNhbGxiYWNrIiwiY3JlZGVudGlhbHMiLCJyZXFCb2R5IiwiYWNjZXNzIiwicmVmcmVzaCIsInNldEFjY2Vzc1Rva2VuIiwic2V0UmVmcmVzaFRva2VuIiwiand0RGVjb2RlIiwic2VnbWVudFRyYWNrIiwib3JnSWQiLCJmdWxsTmFtZSIsImxvZ2luX3R5cGUiLCJmb3JFYWNoIiwiYWRkRmFpbHVyZU5vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJGb3JtaWsiLCJ2YWxpZGF0ZU9uQ2hhbmdlIiwidmFsaWRhdGVPbkJsdXIiLCJpbml0aWFsVmFsdWVzIiwicGFzc3dvcmQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwibG9naW5TY2hlbWEiLCJvblN1Ym1pdCIsInRvdWNoZWQiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwidmFsdWVzIiwiaGFuZGxlQmx1ciIsImhhbmRsZUNoYW5nZSIsImRpcnR5IiwiR29vZ2xlQXV0aEJ1dHRvbiIsIlNwaW5uZXIiLCJMaW5rIiwib25DbGljayIsImNvbm5lY3QiLCJrZXlmcmFtZXNTcGluIiwia2V5ZnJhbWVzIiwiTG9hZGVyIiwiQk9SREVSX0dSQVkiLCJib3JkZXJUb3AiLCJhbmltYXRpb25OYW1lIiwidG9TdHJpbmciLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwidGl0bGUiLCJkb2N1bWVudCIsIm9yZyIsImlkIiwiU1RBRkZfT1JHX0lEIiwiZXZlbnQiLCJwcm9wZXJ0aWVzIiwiYW5hbHl0aWNzIiwidHJhY2siLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiU3R5bGVkR29vZ2xlTG9naW5CdXR0b24iLCJHb29nbGVMb2dpbiIsIkJ1dHRvbldyYXBwZXIiLCJzZXRJc1N1Ym1pdHRpbmciLCJ1c2VTdGF0ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFyYW1zIiwicXMiLCJwYXJzZSIsInNsaWNlIiwibGFzdEluZGV4T2YiLCJ0ZW1wbGF0ZV9pZCIsIl8iLCJOdW1iZXIiLCJsb2dJbklmTm9FcnJvciIsImNoZWNrSWZFcnJvcklzRm9yTm9uRXhpc3RpbmdVc2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImZldGNoVG9rZW4iLCJ0b2tlbklkIiwidG9rZW4iLCJfMiIsImdldEFjY2Vzc1Rva2VuIiwiXzMiLCJfNCIsImdldFJlZnJlc2hUb2tlbiIsIl81IiwiaGFuZGxlUmVzcG9uc2VGcm9tR29vZ2xlIiwicmVzcG9uc2UiLCJwcm9maWxlT2JqIiwicGF5bG9hZCIsInJlcUJvZHlGb3JSZWdpc3RlciIsInJlcyIsImUiLCJwYWRkaW5nVG9wIiwiY2xpZW50SWQiLCJHT09HTEVfQVVUSF9JRCIsImJ1dHRvblRleHQiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJjb29raWVQb2xpY3kiLCJTdWJTdWJMaW5lIiwiU21hbGxMaW5rIiwiUHVibGljU2lnblVwUGFnZSIsImFjdGlvbnMiLCJhZGRTdWNjZXNzTm90aWZpY2F0aW9uIiwidG9rZW5SZXFCb2R5IiwidXJsIiwic2V0U3VibWl0dGluZyIsIlB1YmxpY1NpZ25VcFNjaGVtYSIsInRhcmdldCIsImhyZWYiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhcmciLCJtZW1vIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsIngiLCJ5IiwicngiLCJkIiwidHJhbnNmb3JtIiwiTU9OT1NQQUNFIiwiSUNPTl9TSVpFIiwiTUQxNiIsIk1EMTgiLCJNRDIyIiwiTUQyNCIsIk1EMzYiLCJNRDQ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQVVBLE1BQU1BLFVBQVUsR0FBRyxrRkFBT0Msb0RBQVA7QUFBQTtBQUFBLEdBQXFCQyxLQUFELElBQVc7QUFDaEQsUUFBTTtBQUFDQyxXQUFEO0FBQVVDO0FBQVYsTUFBc0JGLEtBQTVCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHRCxRQUFRLElBQUlELE9BQS9CO0FBQ0EsU0FBTztBQUNMRyxtQkFBZSxFQUFFQyxzREFBTyxDQUFDQyxZQURwQjtBQUVMQyxTQUFLLEVBQUUsTUFGRjtBQUdMQyxnQkFBWSxFQUFFLENBSFQ7QUFJTEMsYUFBUyxFQUFFLGdGQUpOO0FBS0xDLFdBQU8sRUFBRSxDQUxKO0FBTUwsY0FBVTtBQUNSTixxQkFBZSxFQUFFLENBQUNELFVBQUQsSUFBZUUsc0RBQU8sQ0FBQ007QUFEaEMsS0FOTDtBQVNMLHVCQUFtQjtBQUNqQkYsZUFBUyxFQUFHLGFBQVlKLHNEQUFPLENBQUNPLGtCQUFtQixFQURsQztBQUVqQlIscUJBQWUsRUFBRSxDQUFDRCxVQUFELElBQWVFLHNEQUFPLENBQUNRO0FBRnZCO0FBVGQsR0FBUDtBQWNELENBakJrQixDQUFuQjs7QUFtQmVmLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBLE1BQU1nQixZQUFZLEdBQUcsd0VBQXJCO0FBQThGO0FBRTlGO0FBQ0E7QUFDQTs7QUEwQkEsTUFBTUMsS0FBSyxHQUFHO0FBQUE7QUFBQSxHQUFhLENBQUM7QUFBQ0MsT0FBRDtB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cUJELFdBQVMsQ0FBQyxNQUFELENBQVQsR0FBb0JDLElBQXBCO0FBQ3JCLFFBQU1DLElBQUksR0FBRyxNQUFiO0FBQXFCRixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CRSxJQUFwQjtBQUNyQixRQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUFxQkgsV0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQkcsSUFBcEI7QUFDckIsUUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFBcUJKLFdBQVMsQ0FBQyxNQUFELENBQVQsR0FBb0JJLElBQXBCO0FBQ3JCLFFBQU1DLElBQUksR0FBRyxNQUFiO0FBQXFCTCxXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CSyxJQUFwQjtBQUNyQixRQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUFxQk4sV0FBUyxDQUFDLE1BQUQsQ0FBVCxHQUFvQk0sSUFBcEI7QUFDdEIsQ0FQcUIsRUFPbkJOLFNBQVMsS0FBS0EsU0FBUyxHQUFHLEVBQWpCLENBUFUsRTs7Ozs7Ozs7Ozs7QUNMdEIsZSIsImZpbGUiOiJMb2dpblBhZ2VfNmM4N2NmZWE5MTk2ZWY5NjdmMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFBsYWluQnV0dG9uLCB7fSBmcm9tICcuL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IEZsYXRCdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKChwcm9wcykgPT4ge1xuICBjb25zdCB7d2FpdGluZywgZGlzYWJsZWR9ID0gcHJvcHNcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLXG4gICAgfSxcbiAgICAnOmFjdGl2ZSwgOmZvY3VzJzoge1xuICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7UEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogIWlzRGlzYWJsZWQgJiYgUEFMRVRURS5QUklNQVJZX01BSU5fTElHSFRFUlxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRmxhdEJ1dHRvblxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtGT05UX0ZBTUlMWX0gZnJvbSAnc3R5bGVzL3R5cG9ncmFwaHknXG5pbXBvcnQgU3R5bGVkRXJyb3IgZnJvbSAnY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQoKHtlcnJvciwgZGlzYWJsZWR9KSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgbWFyZ2luOiAwLFxuICBib3JkZXI6IGAxcHggc29saWQgJHtlcnJvciA/IFBBTEVUVEUuRVJST1JfTUFJTiA6IFBBTEVUVEUuQk9SREVSX01BSU5fR1JBWX1gLFxuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOLFxuICBmb250RmFtaWx5OiBGT05UX0ZBTUlMWS5TQU5TX1NFUklGLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ2lucHV0JyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBmb250U2l6ZTogMTUsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGhlaWdodDogMzIsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDIwMG1zIGVhc2UtaW4nLFxuICB3aWR0aDogJzEwMCUnLFxuICAnOmZvY3VzJzoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke2Vycm9yID8gJyNmZmRhY2MnIDogUEFMRVRURS5CT1hfU0hBRE9XX1BSSU1BUll9YCxcbiAgICBib3JkZXJDb2xvcjogZXJyb3IgPyBQQUxFVFRFLkVSUk9SX01BSU4gOiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG59KVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuY29uc3QgTGFiZWxIZWxwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEyLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luTGVmdDogNlxufSlcblxuY29uc3QgSW5wdXRGaWVsZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgZXJyb3IsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG5hbWUsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbFxuICAgICAgLCBsYWJlbCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAwfX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAxfX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMn19LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTAzfX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgIHJlZjogcmVmLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSxcbiAgICAgICAgc3BlbGxDaGVjazogc3BlbGxDaGVjayxcbiAgICAgICAgc3R5bGU6IHN0eWxlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTA2fX1cbiAgICAgIClcbiAgICAgICwgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRFcnJvciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMjJ9fSwgZXJyb3IpXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTG9naW5Db250YWluZXIudHN4XCI7aW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge0Zvcm19IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge0ZPTlRfRkFNSUxZfSBmcm9tICcuLi9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBITExvZ28gZnJvbSAndW5pdmVyc2FsL3N0eWxlcy90aGVtZS9sb2dvcy9ITExvZ28nXG5pbXBvcnQge0JveFNoYWRvd30gZnJvbSAnY2xpZW50L3V0aWxzL2NvbnN0YW50cydcblxuXG5cblxuXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn0pXG5cbmNvbnN0IFRhZ2xpbmUgPSBzdHlsZWQuZGl2KHtcbiAgbWFyZ2luVG9wOiAxNSxcbiAgbWFyZ2luQm90dG9tOiAxNSxcbiAgZm9udEZhbWlseTogRk9OVF9GQU1JTFkuU0FOU19TRVJJRixcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9HUkFZLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGZvbnRTaXplOiAxNVxufSlcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZChGb3JtKSh7XG4gIHBhZGRpbmc6ICcyNXB4JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgd2lkdGg6IDQwMCxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgYm94U2hhZG93OiBCb3hTaGFkb3cuVE9QX0JBUlxufSlcblxuY29uc3QgQmV0YVBpbGwgPSBzdHlsZWQuZGl2KHtcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAxMTUsXG4gIHdpZHRoOiA0OCxcbiAgaGVpZ2h0OiAyOSxcbiAgYm9yZGVyUmFkaXVzOiAxMDAsXG4gIC8vIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgY29sb3I6ICcjM0UwQkIwJyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250U2l6ZTogMTMsXG4gIGJhY2tncm91bmRDb2xvcjogJyNBNEUzRkYnXG59KVxuXG5jb25zdCBMb2dpbkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7Y2hpbGRyZW4sIHRhZ0xpbmV9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2Mn19XG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChITExvZ28sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjN9fSApXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChCZXRhUGlsbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NH19LCBcIkJldGFcIilcbiAgICAgICAgLCB0YWdMaW5lICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFnbGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2NX19LCB0YWdMaW5lKVxuICAgICAgKVxuICAgICAgLCBjaGlsZHJlblxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRhaW5lclxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9jb21wb25lbnRzL0xvZ2luUGFnZS50c3hcIjtpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtGb3JtaWt9IGZyb20gJ2Zvcm1paydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXG5cbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnXG5pbXBvcnQge2xvZ2luU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9GbGF0QnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtBUFBfVE9LRU5fS0VZfSBmcm9tICdjbGllbnQvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHthZGRGYWlsdXJlTm90aWZpY2F0aW9ufSBmcm9tICdjbGllbnQvbW9kdWxlcy9ub3RpZmljYXRpb25TeXN0ZW0vZHVja3Mvbm90aWZpY2F0aW9uU3lzdGVtRHVjaydcbmltcG9ydCB7c2VnbWVudFRyYWNrfSBmcm9tICdjbGllbnQvdXRpbHMvc2VnbWVudElvJ1xuaW1wb3J0IFBsYWluQnV0dG9uIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IExvZ2luQ29udGFpbmVyIGZyb20gJy4vTG9naW5Db250YWluZXInXG5pbXBvcnQge0xpbmt9IGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1B1YmxpY1NpZ25VcFBhZ2UnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TcGlubmVyJ1xuaW1wb3J0IEdvb2dsZUF1dGhCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvR29vZ2xlQXV0aEJ1dHRvbidcbmltcG9ydCBpc1VzZXJTdGFmZiBmcm9tICdjbGllbnQvdXRpbHMvaXNVc2VyU3RhZmYnXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgU3ViTGluZSA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBtYXJnaW5Cb3R0b206IDhcbn0pXG5cbmV4cG9ydCBjb25zdCBGb3JtaWtSb290ID0gc3R5bGVkKCdkaXYnKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGJhY2tncm91bmRDb2xvcjogUEFMRVRURS5CQUNLR1JPVU5EX01BSU5cbn0pXG5cbmV4cG9ydCBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSh7XG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgZm9udFNpemU6IDEzLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGhlaWdodDogMTgsXG4gIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU5fREFSS1xuICB9XG59KVxuXG5leHBvcnQgY29uc3QgRmllbGRCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBtYXJnaW5Cb3R0b206IDE1XG59KVxuXG5jb25zdCBMb2dpblBhZ2UgPSAocHJvcHMpID0+IHtcbiAgdXNlRG9jdW1lbnRUaXRsZSgnTG9naW4gfCBIdW1hbiBMYW1iZGFzJylcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHtkaXNwYXRjaH0gPSBwcm9wc1xuICBjb25zdCBpbml0aWFsRW1haWxWYWx1ZSA9IHByb3BzLmVtYWlsID8gcHJvcHMuZW1haWwgOiAnJ1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgOyhhc3luYyBmdW5jdGlvbiBtYXliZUxvZ2dlZEluKCkge1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQVBQX1RPS0VOX0tFWSlcbiAgICAgIGNvbnN0IHthY2Nlc3NPYmogPSB7fX0gPSBuZXR3b3JrZXIgfHwge31cbiAgICAgIGNvbnN0IHt1c2VyX2lkOiB1c2VySWR9ID0gYWNjZXNzT2JqIHx8IHt9XG4gICAgICBpZiAodXNlcklkICYmIGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBkYXRhOiB7Y3VycmVudF9vcmdhbml6YXRpb25faWR9LFxuICAgICAgICAgIGVycm9yc1xuICAgICAgICB9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGAvdXNlcnMvJHt1c2VySWR9YCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgICBpZiAoZXJyb3JzID09PSB1bmRlZmluZWQgJiYgY3VycmVudF9vcmdhbml6YXRpb25faWQpIHtcbiAgICAgICAgICBjb25zdCB7ZGF0YTogb3JnYW5pemF0aW9uc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzYCwge21ldGhvZDogJ0dFVCd9KVxuXG4gICAgICAgICAgaWYgKGlzVXNlclN0YWZmKG9yZ2FuaXphdGlvbnMsIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkKSkge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvb3V0c3RhbmRpbmctcXVldWVzYClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvcXVldWVzYClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9nZ2luZyBpbiB1c2VyOiAke3VzZXJJZH1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbbmV0d29ya2VyXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVkZW50aWFscyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IGNyZWRlbnRpYWxzXG4gICAgICB9IFxuXG4gICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcignL3VzZXJzL3Rva2VuJywgcmVxQm9keSlcblxuICAgICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgICAgY29uc3Qge2FjY2VzcywgcmVmcmVzaH0gPSBkYXRhIHx8IHt9XG5cbiAgICAgICAgaWYgKGFjY2VzcyAmJiByZWZyZXNoKSB7XG4gICAgICAgICAgbmV0d29ya2VyLnNldEFjY2Vzc1Rva2VuKGFjY2VzcylcbiAgICAgICAgICBuZXR3b3JrZXIuc2V0UmVmcmVzaFRva2VuKHJlZnJlc2gpXG4gICAgICAgICAgY29uc3Qge3VzZXJfaWQsIG5hbWUsIGVtYWlsfSA9IGp3dERlY29kZShhY2Nlc3MpXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGF0YToge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkfVxuICAgICAgICAgIH0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy8ke3VzZXJfaWR9YCwge21ldGhvZDogJ0dFVCd9KVxuXG4gICAgICAgICAgLy8gc2VnbWVudCB0cmFja1xuICAgICAgICAgIHNlZ21lbnRUcmFjaygnTG9nZ2VkIEluJywge1xuICAgICAgICAgICAgb3JnSWQ6IGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkLFxuICAgICAgICAgICAgZnVsbE5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJfaWQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIGxvZ2luX3R5cGU6ICdtYW51YWwnXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IHtkYXRhOiBvcmdhbml6YXRpb25zfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3NgLCB7bWV0aG9kOiAnR0VUJ30pXG5cbiAgICAgICAgICBpZiAoaXNVc2VyU3RhZmYob3JnYW5pemF0aW9ucywgY3VycmVudF9vcmdhbml6YXRpb25faWQpKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYC9vdXRzdGFuZGluZy1xdWV1ZXNgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXNgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UpKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtuZXR3b3JrZXJdXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrUm9vdCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge2VtYWlsOiBpbml0aWFsRW1haWxWYWx1ZSwgcGFzc3dvcmQ6ICcnfSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogbG9naW5TY2hlbWEsXG4gICAgICAgIG9uU3VibWl0OiBoYW5kbGVTdWJtaXRDcmVkZW50aWFscywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE0Mn19XG4gICAgICBcbiAgICAgICAgLCAoe3RvdWNoZWQsIGlzU3VibWl0dGluZywgaXNWYWxpZCwgdmFsdWVzLCBlcnJvcnMsIGhhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZSwgZGlydHl9KSA9PiAoXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2dpbkNvbnRhaW5lciwgeyB0YWdMaW5lOiAnTG9nIGluIHRvIEh1bWFuIExhbWJkYXMnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUwfX1cbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChHb29nbGVBdXRoQnV0dG9uLCB7IGxhYmVsOiBcIkxvZyBpbiB3aXRoIEdvb2dsZVwiICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUxfX0gKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTUyfX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLmVtYWlsLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogaGFuZGxlQmx1ciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE1M319XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZEJsb2NrLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2M319XG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEZpZWxkLCB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY0fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTc0fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZsYXRCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB8fCAhZGlydHkgfHwgIWlzVmFsaWQsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzV9fVxuICAgICAgICAgICAgICAgICwgaXNTdWJtaXR0aW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3Nn19ICkgOiBgTG9nIGluYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ViTGluZSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzl9fSwgXCJEb24ndCBoYXZlIGFuIGFjY291bnQ/XCJcbiAgICAgICAgICAgICAgICAgLCAnICdcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9zaWdudXAnKVxuICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxODF9fVxuICAgICAgICAgICAgICAsIFwiU2lnbiB1cFwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmtCdXR0b24sIHtcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnL2ZvcmdvdC8nKVxuICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg5fX1cbiAgICAgICAgICAgICwgXCJGb3Jnb3QgeW91ciBwYXNzd29yZD9cIlxuXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShMb2dpblBhZ2UpXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2tleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3Qga2V5ZnJhbWVzU3BpbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbmBcblxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdih7XG4gIGJvcmRlcjogYDJweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVl9YCxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgYm9yZGVyVG9wOiBgMnB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU59YCxcbiAgd2lkdGg6IDIwLFxuICBoZWlnaHQ6IDIwLFxuICBhbmltYXRpb25OYW1lOiBrZXlmcmFtZXNTcGluLnRvU3RyaW5nKCksXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJ1xufSlcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2fX0gKVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UEFMRVRURX0gZnJvbSAnc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkLmRpdih7XG4gIGNvbG9yOiBQQUxFVFRFLkVSUk9SX01BSU4sXG4gIHdpZHRoOiAnMTAwJScsXG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIG1hcmdpbkxlZnQ6IDVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEVycm9yXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZURvY3VtZW50VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0sIFt0aXRsZV0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURvY3VtZW50VGl0bGVcbiIsImltcG9ydCB7U1RBRkZfT1JHX0lEfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBpc1VzZXJTdGFmZiA9IChvcmdhbml6YXRpb25zLCBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCkgPT4ge1xuICBmb3IgKGNvbnN0IG9yZyBvZiBvcmdhbml6YXRpb25zKSB7XG4gICAgaWYgKG9yZy5pZCA9PT0gU1RBRkZfT1JHX0lEICYmIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkID09PSBTVEFGRl9PUkdfSUQpIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IGlzVXNlclN0YWZmXG4iLCJleHBvcnQgY29uc3Qgc2VnbWVudFRyYWNrID0gYXN5bmMgKGV2ZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHthbmFseXRpY3N9ID0gd2luZG93IHx8IHVuZGVmaW5lZFxuICBpZiAoIWFuYWx5dGljcykgcmV0dXJuXG4gIGFuYWx5dGljcy50cmFjayhldmVudCwgcHJvcGVydGllcylcbn1cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9Hb29nbGVBdXRoQnV0dG9uLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0dPT0dMRV9BVVRIX0lEfSBmcm9tICdjbGllbnQvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ2NsaWVudC91dGlscy9zZWdtZW50SW8nXG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnXG5pbXBvcnQge0dvb2dsZUxvZ2lufSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2NsaWVudC9ob29rcy91c2VOZXR3b3JrZXInXG5cbmltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBTcGlubmVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXInXG5cblxuXG5cblxuXG5jb25zdCBTdHlsZWRHb29nbGVMb2dpbkJ1dHRvbiA9IHN0eWxlZChHb29nbGVMb2dpbilgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY0OGVlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBMYW1iZGFzLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLFxuICAgICAgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNjY0OGVlICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQxcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBHb29nbGVBdXRoQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpIFxuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7ZGlzcGF0Y2gsIGxhYmVsfSA9IHByb3BzXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7XG4gICAgbG9jYXRpb246IHtzZWFyY2h9XG4gIH0gPSBoaXN0b3J5XG4gIGNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKHNlYXJjaC5zbGljZShzZWFyY2gubGFzdEluZGV4T2YoJz8nKSArIDEpKVxuICBjb25zdCB0ZW1wbGF0ZV9pZCA9IF9vcHRpb25hbENoYWluKFtwYXJhbXMsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy50ZW1wbGF0ZV9pZF0pID8gTnVtYmVyKHBhcmFtcy50ZW1wbGF0ZV9pZCkgOiB1bmRlZmluZWRcblxuICBjb25zdCBsb2dJbklmTm9FcnJvciA9IGFzeW5jIChkYXRhLCBsb2dpbl90eXBlKSA9PiB7XG4gICAgY29uc3Qge2FjY2VzcywgcmVmcmVzaH0gPSBkYXRhIHx8IHt9XG5cbiAgICBpZiAoYWNjZXNzICYmIHJlZnJlc2gpIHtcbiAgICAgIG5ldHdvcmtlci5zZXRBY2Nlc3NUb2tlbihhY2Nlc3MpXG4gICAgICBuZXR3b3JrZXIuc2V0UmVmcmVzaFRva2VuKHJlZnJlc2gpXG4gICAgICBjb25zdCB7dXNlcl9pZCwgbmFtZSwgZW1haWx9ID0gand0RGVjb2RlKGFjY2VzcylcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YToge2N1cnJlbnRfb3JnYW5pemF0aW9uX2lkfVxuICAgICAgfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL3VzZXJzLyR7dXNlcl9pZH1gLCB7bWV0aG9kOiAnR0VUJ30pXG5cbiAgICAgIC8vIHNlZ21lbnQgdHJhY2tcbiAgICAgIHNlZ21lbnRUcmFjaygnTG9nZ2VkIEluJywge1xuICAgICAgICBvcmdJZDogY3VycmVudF9vcmdhbml6YXRpb25faWQsXG4gICAgICAgIGZ1bGxOYW1lOiBuYW1lLFxuICAgICAgICB1c2VySWQ6IHVzZXJfaWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsb2dpbl90eXBlXG4gICAgICB9KVxuXG4gICAgICBoaXN0b3J5LnB1c2goYC9xdWV1ZXNgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZFcnJvcklzRm9yTm9uRXhpc3RpbmdVc2VyID0gKGVycm9ycykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBBcnJheS5pc0FycmF5KGVycm9ycykgJiZcbiAgICAgIGVycm9ycy5sZW5ndGggPT09IDEgJiZcbiAgICAgIGVycm9yc1swXS5tZXNzYWdlICYmXG4gICAgICBlcnJvcnNbMF0ubWVzc2FnZS5pbmRleE9mKCdubyB1c2VyIGV4aXN0cyBmb3InKSA9PT0gMFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGZldGNoVG9rZW4gPSBhc3luYyAodG9rZW5JZCkgPT4ge1xuICAgIGNvbnN0IHJlcUJvZHkgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdG9rZW46IHRva2VuSWRcbiAgICAgIH1cbiAgICB9IFxuICAgIF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8yID0+IF8yLmdldEFjY2Vzc1Rva2VuLCAnY2FsbCcsIF8zID0+IF8zKHdpbmRvdyldKVxuICAgIF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80LmdldFJlZnJlc2hUb2tlbiwgJ2NhbGwnLCBfNSA9PiBfNSh3aW5kb3cpXSlcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcignL3VzZXJzL3Rva2VuL2dvb2dsZScsIHJlcUJvZHkpXG5cbiAgICByZXR1cm4ge2RhdGEsIGVycm9yc31cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlRnJvbUdvb2dsZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpXG4gICAgICBjb25zdCB7YWNjZXNzVG9rZW4sIHRva2VuSWQsIHByb2ZpbGVPYmp9ID0gcmVzcG9uc2VcbiAgICAgIGNvbnN0IHtuYW1lLCBlbWFpbH0gPSBwcm9maWxlT2JqIHx8IHt9XG5cbiAgICAgIGlmIChhY2Nlc3NUb2tlbiAmJiB0b2tlbklkICYmIG5hbWUgJiYgZW1haWwpIHtcbiAgICAgICAgY29uc3Qge2RhdGEsIGVycm9yc30gPSBhd2FpdCBmZXRjaFRva2VuKHRva2VuSWQpXG5cbiAgICAgICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgICAgICBhd2FpdCBsb2dJbklmTm9FcnJvcihkYXRhLCAnZ29vZ2xlJylcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0lmRXJyb3JJc0Zvck5vbkV4aXN0aW5nVXNlcihlcnJvcnMpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgdGVtcGxhdGVfaWQ6IHRlbXBsYXRlX2lkIHx8IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVxQm9keUZvclJlZ2lzdGVyID0ge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZFxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKCcvdXNlcnMvcmVnaXN0ZXInLCByZXFCb2R5Rm9yUmVnaXN0ZXIpXG5cbiAgICAgICAgICAgIGlmICghcmVzLmVycm9ycykge1xuICAgICAgICAgICAgICBzZWdtZW50VHJhY2soJ09yZ2FuaXphdGlvbiBKb2luIFN1Y2Nlc3NmdWwnLCB7XG4gICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBjb25zdCB7ZGF0YSwgZXJyb3JzfSA9IGF3YWl0IGZldGNoVG9rZW4odG9rZW5JZClcblxuICAgICAgICAgICAgICBpZiAoIWVycm9ycykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGxvZ0luSWZOb0Vycm9yKGRhdGEsICdnb29nbGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVXNlciBzaWdudXAgZmFpbGVkJywgZSlcbiAgICAgICAgICAgIHNlZ21lbnRUcmFjaygnU2lnbnVwIEZhaWxlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSlcbiAgICAgICAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSkpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpXG4gICAgfSxcbiAgICBbbmV0d29ya2VyXVxuICApXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbldyYXBwZXIsIHsgc3R5bGU6IGlzU3VibWl0dGluZyA/IHttYXJnaW5MZWZ0OiAnNTAlJywgcGFkZGluZ1RvcDogJzEwcHgnfSA6IHt9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYxfX1cbiAgICAgICwgaXNTdWJtaXR0aW5nID8gKFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTYzfX0gKVxuICAgICAgKSA6IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRHb29nbGVMb2dpbkJ1dHRvbiwge1xuICAgICAgICAgIGNsaWVudElkOiBHT09HTEVfQVVUSF9JRCxcbiAgICAgICAgICBidXR0b25UZXh0OiBsYWJlbCxcbiAgICAgICAgICBvblN1Y2Nlc3M6IGhhbmRsZVJlc3BvbnNlRnJvbUdvb2dsZSxcbiAgICAgICAgICBvbkZhaWx1cmU6IGhhbmRsZVJlc3BvbnNlRnJvbUdvb2dsZSxcbiAgICAgICAgICBjb29raWVQb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY1fX1cbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoR29vZ2xlQXV0aEJ1dHRvbilcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9QdWJsaWNTaWduVXBQYWdlLnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtGb3JtaWssfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4vSW5wdXRGaWVsZCdcbmltcG9ydCB7UHVibGljU2lnblVwU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuaW1wb3J0IHVzZURvY3VtZW50VGl0bGUgZnJvbSAnY2xpZW50L2hvb2tzL3VzZURvY3VtZW50VGl0bGUnXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdjbGllbnQvY29tcG9uZW50cy9GbGF0QnV0dG9uJ1xuaW1wb3J0IHVzZVJvdXRlciBmcm9tICdjbGllbnQvaG9va3MvdXNlUm91dGVyJ1xuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ2NsaWVudC91dGlscy9zZWdtZW50SW8nXG5cbmltcG9ydCB7XG4gIGFkZEZhaWx1cmVOb3RpZmljYXRpb24sXG4gIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb25cbn0gZnJvbSAnY2xpZW50L21vZHVsZXMvbm90aWZpY2F0aW9uU3lzdGVtL2R1Y2tzL25vdGlmaWNhdGlvblN5c3RlbUR1Y2snXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgTG9naW5Db250YWluZXIgZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvTG9naW5Db250YWluZXInXG5pbXBvcnQge0Zvcm1pa1Jvb3QsIEZpZWxkQmxvY2t9IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0xvZ2luUGFnZSdcbmltcG9ydCB7QVBQX1RPS0VOX0tFWX0gZnJvbSAnY2xpZW50L3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdjbGllbnQvY29tcG9uZW50cy9TcGlubmVyJ1xuaW1wb3J0IEdvb2dsZUF1dGhCdXR0b24gZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvR29vZ2xlQXV0aEJ1dHRvbidcblxuXG5cblxuXG5cblxuY29uc3QgU3ViTGluZSA9IHN0eWxlZC5kaXYoe1xuICB3aWR0aDogJzEwMCUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBtYXJnaW5Ub3A6IDhcbn0pXG5cbmNvbnN0IFN1YlN1YkxpbmUgPSBzdHlsZWQoU3ViTGluZSkoe2ZvbnRTaXplOiAxMn0pXG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkLnNwYW4oe1xuICBjb2xvcjogUEFMRVRURS5QUklNQVJZX01BSU4sXG4gIGN1cnNvcjogJ3BvaW50ZXInXG59KVxuXG5jb25zdCBTbWFsbExpbmsgPSBzdHlsZWQuYSh7XG4gIGNvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTixcbiAgZm9udFNpemU6IDEyXG59KVxuXG5jb25zdCBQdWJsaWNTaWduVXBQYWdlID0gKHByb3BzKSA9PiB7XG4gIHVzZURvY3VtZW50VGl0bGUoJ1NpZ24gVXAgfCBIdW1hbiBMYW1iZGFzJylcbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHtcbiAgICBsb2NhdGlvbjoge3NlYXJjaH1cbiAgfSA9IGhpc3RvcnlcbiAgY29uc3QgcGFyYW1zID0gcXMucGFyc2Uoc2VhcmNoLnNsaWNlKHNlYXJjaC5sYXN0SW5kZXhPZignPycpICsgMSkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICA7KGFzeW5jIGZ1bmN0aW9uIG1heWJlTG9nZ2VkSW4oKSB7XG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShBUFBfVE9LRU5fS0VZKVxuICAgICAgY29uc3Qge3VzZXJJZH0gPSBuZXR3b3JrZXIgfHwge31cbiAgICAgIGlmICh1c2VySWQgJiYgYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRhdGE6IHtjdXJyZW50X29yZ2FuaXphdGlvbl9pZH0sXG4gICAgICAgICAgZXJyb3JzXG4gICAgICAgIH0gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC91c2Vycy8ke3VzZXJJZH1gLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICAgIGlmIChlcnJvcnMgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCkge1xuICAgICAgICAgIGhpc3RvcnkucHVzaChgL3F1ZXVlc2ApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9nZ2luZyBpbiB1c2VyOiAke3VzZXJJZH1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKVxuICB9LCBbbmV0d29ya2VyXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDcmVkZW50aWFscyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChjcmVkZW50aWFscywgYWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVfaWQgPSBfb3B0aW9uYWxDaGFpbihbcGFyYW1zLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8udGVtcGxhdGVfaWRdKSA/IE51bWJlcihwYXJhbXMudGVtcGxhdGVfaWQpIDogdW5kZWZpbmVkXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgICBuYW1lOiBjcmVkZW50aWFscy5uYW1lLFxuICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB0ZW1wbGF0ZV9pZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxQm9keSA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiBwYXlsb2FkXG4gICAgICAgIH0gXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKCcvdXNlcnMvcmVnaXN0ZXInLCByZXFCb2R5KVxuXG4gICAgICAgIHNlZ21lbnRUcmFjaygnT3JnYW5pemF0aW9uIEpvaW4gU3VjY2Vzc2Z1bCcsIHtcbiAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAocmVzLmVycm9ycykge1xuICAgICAgICAgIHJlcy5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmFkZEZhaWx1cmVOb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRocm93ICdFcnJvciBzaWduaW5nIHVwJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzLmFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oJ1lvdSBoYXZlIHN1Y2Nlc3NmdWx5IGpvaW5lZCB0aGlzIG9yZ2FuaXphdGlvbicpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2tlblJlcUJvZHkgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnN0IHVybCA9ICcvdXNlcnMvdG9rZW4nXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcih1cmwsIHRva2VuUmVxQm9keSlcbiAgICAgICAgY29uc3Qge2FjY2VzcywgcmVmcmVzaH0gPSBkYXRhIHx8IHt9XG5cbiAgICAgICAgaWYgKGFjY2VzcyAmJiByZWZyZXNoKSB7XG4gICAgICAgICAgbmV0d29ya2VyLnNldEFjY2Vzc1Rva2VuKGFjY2VzcylcbiAgICAgICAgICBuZXR3b3JrZXIuc2V0UmVmcmVzaFRva2VuKHJlZnJlc2gpXG4gICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKVxuICAgICAgICAgIGhpc3RvcnkucHVzaChgL3F1ZXVlc2ApXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVXNlciBzaWdudXAgZmFpbGVkJywgZSlcbiAgICAgICAgc2VnbWVudFRyYWNrKCdTaWdudXAgRmFpbGVkJylcbiAgICAgIH1cbiAgICB9LFxuICAgIFtuZXR3b3JrZXJdXG4gIClcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrUm9vdCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMzZ9fVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge2VtYWlsOiAnJywgbmFtZTogJycsIHBhc3N3b3JkOiAnJ30sXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFB1YmxpY1NpZ25VcFNjaGVtYSxcbiAgICAgICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdENyZWRlbnRpYWxzLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM3fX1cbiAgICAgIFxuICAgICAgICAsICh7dG91Y2hlZCwgaXNTdWJtaXR0aW5nLCBpc1ZhbGlkLCB2YWx1ZXMsIGVycm9ycywgaGFuZGxlQmx1ciwgaGFuZGxlQ2hhbmdlLCBkaXJ0eX0pID0+IChcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luQ29udGFpbmVyLCB7IHRhZ0xpbmU6ICdDcmVhdGUgYW4gYWNjb3VudCcsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDV9fVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEdvb2dsZUF1dGhCdXR0b24sIHsgbGFiZWw6IFwiU2lnbiB1cCB3aXRoIEdvb2dsZVwiICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ2fX0gKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTQ3fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy5uYW1lLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDh9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRCbG9jaywge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNTh9fVxuICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRGaWVsZCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMuZW1haWwsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRvdWNoZWQuZW1haWwgJiYgZXJyb3JzLmVtYWlsLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTU5fX1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTY5fX1cbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0RmllbGQsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IGhhbmRsZUJsdXIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzB9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmxhdEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIHx8ICFkaXJ0eSB8fCAhaXNWYWxpZCwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MH19XG4gICAgICAgICAgICAgICwgaXNTdWJtaXR0aW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4MX19ICkgOiBgU2lnbiB1cGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdWJMaW5lLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE4M319LCBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiXG4gICAgICAgICAgICAgICAgICwgJyAnXG4gICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7XG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg1fX1cbiAgICAgICAgICAgICAgLCBcIkxvZyBpblwiXG5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN1YlN1YkxpbmUsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTkzfX0sIFwiQnkgY2xpY2tpbmcgU2lnbiBVcCwgeW91IGFncmVlIHRvIHRoZSBIdW1hbiBMYW1iZGFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgLCAnICdcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNtYWxsTGluaywgeyB0YXJnZXQ6ICdfYmxhbmsnLCBocmVmOiAnaHR0cHM6Ly9odW1hbmxhbWJkYXMuY29tL2xlZ2FsL3Rlcm1zLW9mLXNlcnZpY2UnLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTk1fX0sIFwiVGVybXMgT2YgU2VydmljZVwiXG5cbiAgICAgICAgICAgICAgKSwgXCIsXCJcbiAgICAgICAgICAgICAgLCAnICdcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFNtYWxsTGluaywgeyB0YXJnZXQ6IFwiX2JsYW5rXCIsIGhyZWY6IFwiaHR0cHM6Ly9odW1hbmxhbWJkYXMuY29tL2xlZ2FsL3ByaXZhY3ktcG9saWN5XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTl9fSwgXCJQcml2YWN5IFBvbGljeVwiXG5cbiAgICAgICAgICAgICAgKSwgJyAnLCBcImFuZCB0byByZWNlaXZpbmcgb2NjYXNpb25hbCBlbWFpbHMgcmVsYXRpbmcgdG8geW91ciBhY2NvdW50XCJcblxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uOiAoYXJnKSA9PiBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGFyZykpLFxuICAgIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb246IChhcmcpID0+IGRpc3BhdGNoKGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24oYXJnKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHVibGljU2lnblVwUGFnZSlcbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvc3R5bGVzL3RoZW1lL2xvZ29zL0hMTG9nby50c3hcIjtpbXBvcnQgUmVhY3QsIHttZW1vfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSExMb2dvID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgd2lkdGg6IDcwLFxuICAgICAgaGVpZ2h0OiA3MCxcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDE3NSAxNzVcIiAgICxcbiAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDV9fVxuICAgIFxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdyZWN0JywgeyB3aWR0aDogXCIxNzVcIiwgaGVpZ2h0OiBcIjE3NVwiLCBmaWxsOiBcIndoaXRlXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMn19IClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgeDogXCIxN1wiLCB5OiBcIjE4XCIsIHdpZHRoOiBcIjI4LjUxODVcIiwgaGVpZ2h0OiBcIjE0MFwiLCByeDogXCI0XCIsIGZpbGw6IFwiIzgyNjhGN1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTN9fSApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgIGQ6IFwiTTU0LjkzMTIgMjMuOTk1QzUzLjM5NjcgMjEuMzI4MyA1NS4zMjE2IDE4IDU4LjM5ODIgMThMNzcuNjg2OCAxOEM3OS4xMTggMTggODAuNDQwMSAxOC43NjQ3IDgxLjE1MzkgMjAuMDA1MkwxNTcuMTAzIDE1Mi4wMDVDMTU4LjYzNyAxNTQuNjcyIDE1Ni43MTIgMTU4IDE1My42MzYgMTU4TDEzNC4zNTIgMTU4QzEzMi45MiAxNTggMTMxLjU5OCAxNTcuMjM1IDEzMC44ODUgMTU1Ljk5NUw1NC45MzEyIDIzLjk5NVpcIiAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgIGZpbGw6IFwiIzgyNjhGN1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTR9fVxuICAgICAgKVxuICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgICBkOiBcIk01NC45NDYyIDE1MS45OTlDNTMuNDA2NSAxNTQuNjY2IDU1LjMzMTUgMTU3Ljk5OSA1OC40MTEgMTU3Ljk5OUw3Ny42OTEzIDE1Ny45OTZDNzkuMTE5OSAxNTcuOTk1IDgwLjQ0IDE1Ny4yMzMgODEuMTU0NSAxNTUuOTk2TDExMS41NjEgMTAzLjM0MkMxMTMuMTAxIDEwMC42NzUgMTExLjE3NiA5Ny4zNDE3IDEwOC4wOTcgOTcuMzQxOEw4OC44MTE0IDk3LjM0MjRDODcuMzgyNCA5Ny4zNDI1IDg2LjA2MTkgOTguMTA0OCA4NS4zNDc0IDk5LjM0MjRMNTQuOTQ2MiAxNTEuOTk5WlwiICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgZmlsbDogXCIjODI2OEY3XCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOH19XG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7XG4gICAgICAgIHg6IFwiMTdcIixcbiAgICAgICAgeTogXCIxMDIuMjU5XCIsXG4gICAgICAgIHdpZHRoOiBcIjI4LjUxODVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjkzLjMzMzNcIixcbiAgICAgICAgcng6IFwiNFwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKC05MCAxNyAxMDIuMjU5KVwiICAsXG4gICAgICAgIGZpbGw6IFwiIzgyNjhGN1wiLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjJ9fVxuICAgICAgKVxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSExMb2dvXG4iLCJleHBvcnQgdmFyIEZPTlRfRkFNSUxZOyAoZnVuY3Rpb24gKEZPTlRfRkFNSUxZKSB7XG4gIGNvbnN0IFNBTlNfU0VSSUYgPSAnTGFtYmRhcywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZic7IEZPTlRfRkFNSUxZW1wiU0FOU19TRVJJRlwiXSA9IFNBTlNfU0VSSUY7XG4gIGNvbnN0IE1PTk9TUEFDRSA9ICdTRiBNb25vLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UnOyBGT05UX0ZBTUlMWVtcIk1PTk9TUEFDRVwiXSA9IE1PTk9TUEFDRTtcbn0pKEZPTlRfRkFNSUxZIHx8IChGT05UX0ZBTUlMWSA9IHt9KSk7XG5cbmV4cG9ydCB2YXIgSUNPTl9TSVpFOyAoZnVuY3Rpb24gKElDT05fU0laRSkge1xuICBjb25zdCBNRDE2ID0gJzE2cHgnOyBJQ09OX1NJWkVbXCJNRDE2XCJdID0gTUQxNjtcbiAgY29uc3QgTUQxOCA9ICcxOHB4JzsgSUNPTl9TSVpFW1wiTUQxOFwiXSA9IE1EMTg7XG4gIGNvbnN0IE1EMjIgPSAnMjJweCc7IElDT05fU0laRVtcIk1EMjJcIl0gPSBNRDIyO1xuICBjb25zdCBNRDI0ID0gJzI0cHgnOyBJQ09OX1NJWkVbXCJNRDI0XCJdID0gTUQyNDtcbiAgY29uc3QgTUQzNiA9ICczNnB4JzsgSUNPTl9TSVpFW1wiTUQzNlwiXSA9IE1EMzY7XG4gIGNvbnN0IE1ENDggPSAnNDhweCc7IElDT05fU0laRVtcIk1ENDhcIl0gPSBNRDQ4O1xufSkoSUNPTl9TSVpFIHx8IChJQ09OX1NJWkUgPSB7fSkpO1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==