(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardRoot~ForgottenForm~InviteSignUpPage~JoinQueueSuccess~LoginPage~PasswordContainer~ProfileCon~1b4655b4"],{

/***/ "./src/client/utils/dateHelpers.ts":
/*!*****************************************!*\
  !*** ./src/client/utils/dateHelpers.ts ***!
  \*****************************************/
/*! exports provided: parseDateString, getDisplayFormat, toIsoString, transformDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateString", function() { return parseDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayFormat", function() { return getDisplayFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIsoString", function() { return toIsoString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformDates", function() { return transformDates; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



const parseDateString = function (value, originalValue) {
  if (originalValue) {
    const parsedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isDate"])(new Date(originalValue)) ? new Date(originalValue) : Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(originalValue, 'yyyy-MM-dd', new Date());
    return parsedDate;
  }

  return originalValue;
};
const getDisplayFormat = isoString => {
  if (!isoString) return isoString;
  return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(isoString), 'yyyy-MM-dd')), 'dd/MM/yyyy');
};
const toIsoString = value => {
  if (value && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isDate"])(value)) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(value), 'yyyy-MM-dd');
  }

  return value;
};
const transformDates = (block, values = {
  data: []
}) => {
  if (!block && _optionalChain([values, 'optionalAccess', _ => _.data])) {
    return _objectSpread(_objectSpread({}, values), {}, {
      data: values.data.map(transformDates)
    });
  }

  if (block.type !== universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE) return block;
  return _objectSpread(_objectSpread({}, block), {}, {
    [universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE]: _objectSpread(_objectSpread(_objectSpread({}, block[universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE]), _optionalChain([block, 'access', _2 => _2[universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE], 'optionalAccess', _3 => _3.value]) && {
      value: toIsoString(_optionalChain([block, 'access', _4 => _4[universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE], 'optionalAccess', _5 => _5.value]))
    }), _optionalChain([block, 'access', _6 => _6[universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE], 'optionalAccess', _7 => _7.placeholder]) && {
      placeholder: toIsoString(_optionalChain([block, 'access', _8 => _8[universal_utils_constants__WEBPACK_IMPORTED_MODULE_1__["BLOCK_TYPE"].DATE], 'optionalAccess', _9 => _9.placeholder]))
    })
  });
};

/***/ }),

/***/ "./src/universal/components/InputField.tsx":
/*!*************************************************!*\
  !*** ./src/universal/components/InputField.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/typography */ "./src/universal/styles/typography.ts");
/* harmony import */ var universal_components_StyledError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/StyledError */ "./src/universal/components/StyledError.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/components/InputField.tsx";





const Input = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
  target: "e1jceiyv0"
})(({
  error,
  disabled,
  readOnly
}) => ({
  display: 'block',
  appearance: 'none',
  outline: 'none',
  margin: 0,
  border: `1px solid ${error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_MAIN_GRAY}`,
  boxSizing: 'border-box',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN,
  fontFamily: universal_styles_typography__WEBPACK_IMPORTED_MODULE_3__["FONT_FAMILY"].SANS_SERIF,
  fontWeight: 400,
  cursor: disabled || readOnly ? 'not-allowed' : 'input',
  borderRadius: 4,
  fontSize: 15,
  lineHeight: '32px',
  backgroundColor: '#fff',
  height: 32,
  padding: '0 10px',
  transition: 'border-color 200ms ease-in',
  width: '100%',
  ':focus': {
    borderColor: error ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].ERROR_MAIN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  },
  ':hover': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].BORDER_HOVER
  },
  ':active, :focus': {
    borderColor: !readOnly && universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN
  }
}));

const Label = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv1"
})({
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '32px',
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_MAIN
});

const StyledLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv2"
})({
  name: "182kafx",
  styles: "display:flex;flex-direction:row;align-items:center;margin-left:5px;"
});

const LabelHelper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1jceiyv3"
})({
  fontSize: 12,
  fontWeight: 400,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].TEXT_GRAY,
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
    hideErrorMessage,
    onBlur,
    onFocus,
    onChange,
    onKeyDown,
    pattern,
    placeholder,
    value,
    label,
    style,
    spellCheck,
    readOnly,
    containerStyles,
    type
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
    style: _objectSpread({}, containerStyles),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, label), isRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, "Required"), isOptional && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelHelper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, "Optional")), error && !hideErrorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_StyledError__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    disabled: Boolean(disabled),
    name: name,
    pattern: pattern,
    placeholder: placeholder,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    onKeyDown: onKeyDown,
    ref: ref,
    type: type || 'text',
    value: value,
    error: Boolean(error) && Boolean(value !== ''),
    spellCheck: spellCheck,
    style: style,
    readOnly: readOnly,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/universal/components/StyledError.tsx":
/*!**************************************************!*\
  !*** ./src/universal/components/StyledError.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");



const StyledError = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1e67x3d0"
})({
  color: styles_palette__WEBPACK_IMPORTED_MODULE_1__["PALETTE"].ERROR_MAIN,
  width: '100%',
  textAlign: 'left',
  fontSize: '12px',
  lineHeight: '24px'
});

/* harmony default export */ __webpack_exports__["default"] = (StyledError);

/***/ }),

/***/ "./src/universal/utils/constants.ts":
/*!******************************************!*\
  !*** ./src/universal/utils/constants.ts ***!
  \******************************************/
/*! exports provided: BLOCK_TYPE, BLOCKS, TASK_STATUS, QUEUE_STATUS, SAMPLE_VALUES, FEATURE_TOGGLES, FILTER_BLOCK_TYPES, STAFF_ORG_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_TYPE", function() { return BLOCK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS", function() { return BLOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATUS", function() { return TASK_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUEUE_STATUS", function() { return QUEUE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_VALUES", function() { return SAMPLE_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_TOGGLES", function() { return FEATURE_TOGGLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_BLOCK_TYPES", function() { return FILTER_BLOCK_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAFF_ORG_ID", function() { return STAFF_ORG_ID; });
var BLOCK_TYPE;

(function (BLOCK_TYPE) {
  const TEXT = 'text';
  BLOCK_TYPE["TEXT"] = TEXT;
  const EMAIL = 'email';
  BLOCK_TYPE["EMAIL"] = EMAIL;
  const NUMBER = 'number';
  BLOCK_TYPE["NUMBER"] = NUMBER;
  const LINK = 'link';
  BLOCK_TYPE["LINK"] = LINK;
  const IMAGE = 'image';
  BLOCK_TYPE["IMAGE"] = IMAGE;
  const AUDIO = 'audio';
  BLOCK_TYPE["AUDIO"] = AUDIO;
  const VIDEO = 'video';
  BLOCK_TYPE["VIDEO"] = VIDEO;
  const BINARY = 'binary';
  BLOCK_TYPE["BINARY"] = BINARY;
  const EMBED = 'embed';
  BLOCK_TYPE["EMBED"] = EMBED;
  const PDF = 'pdf';
  BLOCK_TYPE["PDF"] = PDF;
  const NAMED_ENTITY_RECOGNITION = 'named_entity_recognition';
  BLOCK_TYPE["NAMED_ENTITY_RECOGNITION"] = NAMED_ENTITY_RECOGNITION;
  const SINGLE_SELECTION = 'single_selection';
  BLOCK_TYPE["SINGLE_SELECTION"] = SINGLE_SELECTION;
  const MULTIPLE_SELECTION = 'multiple_selection';
  BLOCK_TYPE["MULTIPLE_SELECTION"] = MULTIPLE_SELECTION;
  const FORM_SEQUENCE = 'form_sequence';
  BLOCK_TYPE["FORM_SEQUENCE"] = FORM_SEQUENCE;
  const RICH_TEXT = 'rich_text';
  BLOCK_TYPE["RICH_TEXT"] = RICH_TEXT;
  const BOUNDING_BOXES = 'bounding_boxes';
  BLOCK_TYPE["BOUNDING_BOXES"] = BOUNDING_BOXES;
  const TEXT_SEQUENCE = 'text_sequence';
  BLOCK_TYPE["TEXT_SEQUENCE"] = TEXT_SEQUENCE;
  const DATE = 'date';
  BLOCK_TYPE["DATE"] = DATE;
})(BLOCK_TYPE || (BLOCK_TYPE = {}));

const BLOCKS = [{
  title: 'Text',
  description: 'To display plain text data.',
  type: BLOCK_TYPE.TEXT,
  placeholder: 'A few words',
  icon: 'subject',
  iconColor: '#ff8282'
}, {
  title: 'Email',
  description: 'An email field with input validation.',
  type: BLOCK_TYPE.EMAIL,
  placeholder: 'alice@example.com',
  icon: 'alternate_email',
  iconColor: '#FFA6A0'
}, {
  title: 'Number',
  description: 'Displays numbers, such as integers and decimals.',
  type: BLOCK_TYPE.NUMBER,
  placeholder: '1923',
  icon: 'looks_5',
  iconColor: '#ffAf82'
}, {
  title: 'Date',
  description: 'A date, composed of day, month and year.',
  type: BLOCK_TYPE.DATE,
  placeholder: '2021-01-30',
  icon: 'today',
  iconColor: '#ffd482'
}, {
  title: 'Link',
  description: 'A URL field with input validation.',
  type: BLOCK_TYPE.LINK,
  placeholder: 'https://www.humanlambdas.com',
  icon: 'link',
  iconColor: '#C2E3F5'
}, {
  title: 'Image',
  description: 'Renders an image given a source URL.',
  type: BLOCK_TYPE.IMAGE,
  icon: 'image',
  iconColor: '#a9d6ae',
  placeholder: 'https://www.example.com/photo.png'
}, {
  title: 'PDF',
  description: 'Embeds a PDF given a valid URL.',
  hasLabel: false,
  type: BLOCK_TYPE.PDF,
  icon: 'picture_as_pdf',
  iconColor: '#BE9774',
  placeholder: 'https://example.com/example.pdf'
}, {
  title: 'Embed',
  description: 'Embeds a website given a valid URL.',
  hasLabel: false,
  type: BLOCK_TYPE.EMBED,
  icon: 'wysiwyg',
  iconColor: '#484849',
  placeholder: 'https://www.example.com'
}, {
  title: 'Video',
  description: 'Displays a video clip given a source URL.',
  type: BLOCK_TYPE.VIDEO,
  icon: 'videocam',
  iconColor: '#AFD8E1',
  placeholder: 'https://www.example.com/video.mp4'
}, {
  title: 'Audio',
  description: 'Plays an audio clip given a source URL.',
  type: BLOCK_TYPE.AUDIO,
  icon: 'graphic_eq',
  iconColor: '#829DFF',
  placeholder: 'https://www.example.com/audio.mp3'
}, {
  title: 'Rich Text',
  description: 'A rich text editor',
  type: BLOCK_TYPE.RICH_TEXT,
  placeholder: 'Tell a story',
  icon: 'text_format',
  iconColor: '#ff9882'
}, {
  title: 'Bounding Boxes',
  description: 'An image with bounding box masks.',
  hasLabel: false,
  type: BLOCK_TYPE.BOUNDING_BOXES,
  icon: 'crop_free',
  iconColor: '#7BECD1'
}, {
  title: 'Text Highlighting',
  description: 'For Named Entity Recognition annotations.',
  hasLabel: false,
  type: BLOCK_TYPE.NAMED_ENTITY_RECOGNITION,
  icon: 'format_shapes',
  iconColor: '#9ED3F0'
}, {
  title: 'Binary',
  description: 'A Yes/No selection.',
  hasLabel: false,
  type: BLOCK_TYPE.BINARY,
  icon: 'check_circle',
  iconColor: '#C590DE',
  placeholder: 'Is this a positive review?'
}, {
  title: 'Single Selection',
  description: 'Choose one option out of many.',
  hasLabel: false,
  type: BLOCK_TYPE.SINGLE_SELECTION,
  icon: 'radio_button_checked',
  iconColor: '#FF8282'
}, {
  title: 'Multiple Selection',
  description: 'Choose one or more options out of many.',
  hasLabel: false,
  type: BLOCK_TYPE.MULTIPLE_SELECTION,
  icon: 'check_box',
  iconColor: '#6648ee'
}, {
  title: 'Form Sequence',
  description: 'A sequence of questions. Supports logic jumps.',
  hasLabel: false,
  type: BLOCK_TYPE.FORM_SEQUENCE,
  icon: 'call_split',
  iconColor: 'rgba(102, 72, 238, 0.8)'
}, {
  title: 'Text Sequence',
  description: 'Displays and takes a list of text items.',
  type: BLOCK_TYPE.TEXT_SEQUENCE,
  placeholder: ['A sentence', 'Another sentence'],
  icon: 'list',
  iconColor: '#AEFBBF'
}];
var TASK_STATUS;

(function (TASK_STATUS) {
  const PENDING = 'pending';
  TASK_STATUS["PENDING"] = PENDING;
  const NEW = 'new';
  TASK_STATUS["NEW"] = NEW;
  const COMPLETED = 'completed';
  TASK_STATUS["COMPLETED"] = COMPLETED;
  const OPEN = 'open';
  TASK_STATUS["OPEN"] = OPEN;
  const IN_PROGRESS = 'in_progress';
  TASK_STATUS["IN_PROGRESS"] = IN_PROGRESS;
})(TASK_STATUS || (TASK_STATUS = {}));

var QUEUE_STATUS;

(function (QUEUE_STATUS) {
  const COMPLETED = 'completed';
  QUEUE_STATUS["COMPLETED"] = COMPLETED;
  const IN_PROGRESS = 'in_progress';
  QUEUE_STATUS["IN_PROGRESS"] = IN_PROGRESS;
  const OPEN = 'open';
  QUEUE_STATUS["OPEN"] = OPEN;
  const NEW = 'new';
  QUEUE_STATUS["NEW"] = NEW;
})(QUEUE_STATUS || (QUEUE_STATUS = {}));

const SAMPLE_VALUES = {
  text: 'This is some random text',
  image: 'https://example.com/random-picture.jpg',
  audio: 'https://example.com/random-song.mp3',
  video: 'https://example.com/random-video.mp4',
  email: 'alice@example.com',
  link: 'https://example.com',
  number: 42,
  date: '2021-01-30',
  embed: 'https://example.com',
  pdf: 'https://example.com/file.pdf',
  bounding_boxes: 'https://example.com/random-picture.jpg',
  named_entity_recognition: 'This is some random text',
  rich_text: 'Tell a story',
  binary: true,
  text_sequence: ['foo', 'bar']
};
const FEATURE_TOGGLES = {
  UPLOAD_CSV_REGION_ORGS: [9, 44]
};
const FILTER_BLOCK_TYPES = [BLOCK_TYPE.TEXT, BLOCK_TYPE.EMAIL, BLOCK_TYPE.NUMBER, BLOCK_TYPE.LINK];
const STAFF_ORG_ID = 1000000000;

/***/ }),

/***/ "./src/universal/validations/yupSchema.ts":
/*!************************************************!*\
  !*** ./src/universal/validations/yupSchema.ts ***!
  \************************************************/
/*! exports provided: loginSchema, InviteSignUpSchema, PublicSignUpSchema, forgottenSchema, resetSchema, ChangePasswordSchema, emailListSchema, userSchema, organizationSchema, csvDownloadSchema, queueSchema, queueSettingsSchema, taskMenuSchema, taskSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSchema", function() { return loginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteSignUpSchema", function() { return InviteSignUpSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicSignUpSchema", function() { return PublicSignUpSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgottenSchema", function() { return forgottenSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSchema", function() { return resetSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordSchema", function() { return ChangePasswordSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailListSchema", function() { return emailListSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSchema", function() { return userSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizationSchema", function() { return organizationSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvDownloadSchema", function() { return csvDownloadSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueSchema", function() { return queueSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueSettingsSchema", function() { return queueSettingsSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskMenuSchema", function() { return taskMenuSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskSchema", function() { return taskSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
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





const {
  boolean,
  string,
  array,
  object,
  lazy,
  mixed,
  addMethod,
  date
} = yup__WEBPACK_IMPORTED_MODULE_0__; // Uniqueness validation

addMethod(array, 'unique', function (message, path, identifier = null) {
  return this.test('unique', message, function (list) {
    const mapper = x => lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(x, path);

    const set = [...new Set(list.map(mapper))];
    const isUnique = list.length === set.length;

    if (isUnique) {
      return true;
    }

    const idx = list.findIndex((l, i) => mapper(l) !== set[i]);
    const id = identifier ? `[${idx}].${identifier}` : `[${idx}].${path}`;
    return this.createError({
      path: id,
      message
    });
  });
}); // Login

const loginSchema = object().shape({
  email: string().email('Email must be a valid email').required('Email is required'),
  password: string().required('Password is required')
}); // Invite SignUp

const InviteSignUpSchema = object().shape({
  name: string().required('Name is required'),
  password: string().min(8, 'Password must contain at least 8 characters').required('Password is required')
}); // Public SignUp

const PublicSignUpSchema = object().shape({
  email: string().required('Email is required'),
  name: string().required('Name is required'),
  password: string().min(8, 'Password must contain at least 8 characters').required('Password is required')
}); // Forgotten password schema

const forgottenSchema = object().shape({
  email: string().required('Email is required')
}); // Reset password schema

const resetSchema = object().shape({
  password: string().required('Your new password is required').min(8, 'Your new password must be at least 8 characters')
}); // Change Password

const ChangePasswordSchema = object().shape({
  currentPassword: string().required('Your current password is required'),
  newPassword: string().min(8, 'Password must contain at least 8 characters').required('Your new password is required')
}); // Email list

const emailListSchema = object().shape({
  emails: array().transform(function (value, originalValue) {
    if (this.isType(value) && value !== null) {
      return value;
    }

    return originalValue ? originalValue.split(/[\s,]+/) : [];
  }).of(string().email(({
    value
  }) => `${value} is not a valid email`)).required()
}); // User

const userSchema = object().shape({
  email: string().email('Please check your email and try again').required('Email is required'),
  name: string().min(2, 'This name is too short').required('Your fullname is required')
}); // Organization

const organizationSchema = object().shape({
  name: string().min(2, 'This organization name is too short').max(200, 'This organization name is too long').required('Organization name is required')
}); // CSV Download

const csvDownloadSchema = object().shape({
  startDate: date().nullable().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"]).max(new Date(), "Start Date can't be in the future"),
  endDate: date().nullable().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"]).min(yup__WEBPACK_IMPORTED_MODULE_0__["ref"]('startDate'), "End date can't be before Start date").max(new Date(), "End Date can't be in the future")
}); // Queues

const queueSchema = object().shape({
  name: string().max(150, 'Queue name is too long').min(1, 'Queue name is too short').required('Queue name is required'),
  data: array().of(lazy(obj => {
    if ([universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].LINK, universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].VIDEO, universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].IMAGE, universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].AUDIO].includes(obj.type)) {
      return object().shape({
        id: string().required('Field ID is required'),
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().url('A valid URL is required for this field').required(),
            otherwise: string().url('A valid URL is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMBED) {
      return object().shape({
        id: string().required('Field ID is required'),
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().matches(/\bhttps:\/\/\S*\b/).required(),
            otherwise: string().matches(/\bhttps:\/\/\S*\b/)
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].PDF) {
      return object().shape({
        id: string().required('Field ID is required'),
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().matches(/\bhttps:\/\/\S*\.pdf\b/).required(),
            otherwise: string().matches(/\bhttps:\/\/\S*\.pdf\b/)
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMAIL) {
      return object().shape({
        id: string().required('Field ID is required'),
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().email('A valid email is required for this field').required(),
            otherwise: string().email('A valid email is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].SINGLE_SELECTION || obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].MULTIPLE_SELECTION) {
      return object().shape({
        id: string().required('Field ID is required'),
        name: string().required('Field ID is required'),
        [obj.type]: object().shape({
          options: array().of(object().shape({})).unique('Field ID has to be unique', 'id', `${obj.type}.options.id`)
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION) {
      return object().shape({
        id: string().required('Field ID is required'),
        name: string().required('Field ID is required'),
        [obj.type]: object().shape({
          options: array().of(object().shape({
            id: string().required('Field ID is required')
          })).unique('Field ID has to be unique', 'id', `${obj.type}.options.id`),
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().required('A value is required for this field'),
            otherwise: string('A value is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].FORM_SEQUENCE) {
      return object().shape({
        id: string().required('Field ID is required'),
        name: string().required('Field ID is required'),
        [obj.type]: object().shape({
          data: array().of(object().shape({
            id: string().required('Field ID is required'),
            single_selection: object().shape({
              options: array().of(object().shape({
                id: string().required('Field ID is required')
              }))
            }),
            multiple_selection: object().shape({
              options: array().of(object().shape({
                id: string().required('Field ID is required')
              }))
            })
          })).min(1).unique('Field ID has to be unique', 'id')
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].NUMBER || obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].TEXT || obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].RICH_TEXT) {
      return object().shape({
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: string().required('A value is required for this field'),
            otherwise: string('A value is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].DATE) {
      return object().shape({
        [obj.type]: object().shape({
          placeholder: mixed().when('use_placeholder', {
            is: true,
            then: date().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"]).required('A Valid date is required'),
            otherwise: date().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"])
          })
        })
      });
    } else {
      return object().shape({
        id: string().required('Field ID is required'),
        name: string().required('Field ID is required')
      });
    }
  })).min(1, 'There should be at least one block').unique('Field ID has to be unique', 'id')
}); // Queue Settings

const queueSettingsSchema = object().shape({
  task_description: string().nullable().required('Description is required'),
  guidelines_url: string().nullable().url('A valid URL is required for this field')
}); // Task Menu

const validateUrlFortaskMenuSchema = () => lazy(obj => object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, () => {
  return string().url('A valid URL is required for this field').min(1);
})));

const taskMenuSchema = lazy(formValues => {
  return object().shape({
    data: object().shape({
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMAIL]: lazy(obj => object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, () => {
        return string().email('A valid email is required for this field');
      }))),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].LINK]: validateUrlFortaskMenuSchema(),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].VIDEO]: validateUrlFortaskMenuSchema(),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].IMAGE]: validateUrlFortaskMenuSchema(),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].AUDIO]: validateUrlFortaskMenuSchema(),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMBED]: lazy(obj => object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, () => {
        return string().matches(/\bhttps:\/\/\S*\b/);
      }))),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].PDF]: lazy(obj => object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, () => {
        return string().matches(/\bhttps:\/\/\S*\.pdf\b/);
      }))),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].DATE]: lazy(obj => object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, (_key, id) => {
        if (_optionalChain([formValues, 'access', _2 => _2.required, 'access', _3 => _3[universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].DATE], 'optionalAccess', _4 => _4[id]])) {
          return date().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"]).required('A Valid date is required');
        }
      }))),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION]: lazy(obj => {
        return object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, (key, id) => {
          if (_optionalChain([formValues, 'access', _5 => _5.required, 'access', _6 => _6[universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION], 'optionalAccess', _7 => _7[id]])) {
            return string('A value is required').nullable();
          }
        }));
      }),
      [universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].BOUNDING_BOXES]: lazy(obj => {
        return object(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.mapValues(obj, (key, id) => {
          if (_optionalChain([formValues, 'access', _8 => _8.required, 'access', _9 => _9[universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].BOUNDING_BOXES], 'optionalAccess', _10 => _10[id]])) {
            return object().shape({
              image: string().url('A valid URL is required for this field')
            });
          } else {
            return object().shape({
              image: string().url('A valid URL is required for this field')
            });
          }
        }));
      })
    })
  });
}); // Tasks

const taskSchema = object().shape({
  data: array().of(lazy(obj => {
    if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].FORM_SEQUENCE) {
      return object().shape({
        [obj.type]: object().shape({
          data: array().of(lazy(nestedObj => {
            if (nestedObj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMAIL) {
              return object().shape({
                email: object().shape({
                  value: string().nullable().email('A valid email is required for this field')
                })
              });
            } else if (nestedObj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].LINK) {
              return object().shape({
                link: object().shape({
                  value: string().nullable().url('A valid URL is required for this field')
                })
              });
            } else {
              return object().shape({
                [nestedObj.type]: object().shape({
                  value: mixed().nullable()
                })
              });
            }
          })).strict().required()
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].DATE) {
      return object().shape({
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: date().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"]).required('A Valid date is required'),
            otherwise: date().transform(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_3__["parseDateString"])
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].EMAIL) {
      return object().shape({
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: string().email().required('A value is required for one or more blocks'),
            otherwise: string().nullable().email('A valid email is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION) {
      return object().shape({
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: string().required('A value is required for one or more blocks')
          }),
          entities: mixed().when('is_required', {
            is: true,
            then: array().test('Field is required', 'Field is required', value => {
              return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(value) && value.length > 0;
            })
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].BOUNDING_BOXES) {
      return object().shape({
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: object().shape({
              objects: array().test('Field is required', 'Field is required', value => {
                return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(value) && value.length > 0;
              })
            })
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].LINK) {
      return object().shape({
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: string().nullable().url().required('A value is required for one or more blocks'),
            otherwise: string().nullable().url('A valid URL is required for this field')
          })
        })
      });
    } else if (obj.type === universal_utils_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_TYPE"].RICH_TEXT) {
      return object().shape({
        id: string().required('Field ID is required'),
        name: string().required('Field Name is required'),
        [obj.type]: object().shape({
          value: mixed().when('is_required', {
            is: true,
            then: string().required('A value is required for this field')
          })
        })
      });
    } else {
      return object().shape({
        [obj.type]: object().shape({
          is_required: boolean(),
          value: mixed().when('is_required', {
            is: true,
            then: mixed().nullable().required('A value is required for one or more blocks')
          })
        })
      });
    }
  })).required('The `data` field is required on a task')
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvU3R5bGVkRXJyb3IudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hLnRzIl0sIm5hbWVzIjpbIl9vcHRpb25hbENoYWluIiwib3BzIiwibGFzdEFjY2Vzc0xIUyIsInVuZGVmaW5lZCIsInZhbHVlIiwiaSIsImxlbmd0aCIsIm9wIiwiZm4iLCJhcmdzIiwiY2FsbCIsInBhcnNlRGF0ZVN0cmluZyIsIm9yaWdpbmFsVmFsdWUiLCJwYXJzZWREYXRlIiwiaXNEYXRlIiwiRGF0ZSIsInBhcnNlIiwiZ2V0RGlzcGxheUZvcm1hdCIsImlzb1N0cmluZyIsImZvcm1hdCIsInRvSXNvU3RyaW5nIiwidHJhbnNmb3JtRGF0ZXMiLCJibG9jayIsInZhbHVlcyIsImRhdGEiLCJfIiwibWFwIiwidHlwZSIsIkJMT0NLX1RZUEUiLCJEQVRFIiwiXzIiLCJfMyIsIl80IiwiXzUiLCJfNiIsIl83IiwicGxhY2Vob2xkZXIiLCJfOCIsIl85IiwiX2pzeEZpbGVOYW1lIiwiSW5wdXQiLCJlcnJvciIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJkaXNwbGF5IiwiYXBwZWFyYW5jZSIsIm91dGxpbmUiLCJtYXJnaW4iLCJib3JkZXIiLCJQQUxFVFRFIiwiRVJST1JfTUFJTiIsIkJPUkRFUl9NQUlOX0dSQVkiLCJib3hTaXppbmciLCJjb2xvciIsIlRFWFRfTUFJTiIsImZvbnRGYW1pbHkiLCJGT05UX0ZBTUlMWSIsIlNBTlNfU0VSSUYiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwicGFkZGluZyIsInRyYW5zaXRpb24iLCJ3aWR0aCIsImJvcmRlckNvbG9yIiwiUFJJTUFSWV9NQUlOIiwiQk9SREVSX0hPVkVSIiwiTGFiZWwiLCJTdHlsZWRMYWJlbCIsIkxhYmVsSGVscGVyIiwiVEVYVF9HUkFZIiwibWFyZ2luTGVmdCIsIklucHV0RmllbGQiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJpc09wdGlvbmFsIiwiaXNSZXF1aXJlZCIsIm5hbWUiLCJoaWRlRXJyb3JNZXNzYWdlIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicGF0dGVybiIsImxhYmVsIiwic3R5bGUiLCJzcGVsbENoZWNrIiwiY29udGFpbmVyU3R5bGVzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJTdHlsZWRFcnJvciIsIkJvb2xlYW4iLCJ0ZXh0QWxpZ24iLCJURVhUIiwiRU1BSUwiLCJOVU1CRVIiLCJMSU5LIiwiSU1BR0UiLCJBVURJTyIsIlZJREVPIiwiQklOQVJZIiwiRU1CRUQiLCJQREYiLCJOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04iLCJTSU5HTEVfU0VMRUNUSU9OIiwiTVVMVElQTEVfU0VMRUNUSU9OIiwiRk9STV9TRVFVRU5DRSIsIlJJQ0hfVEVYVCIsIkJPVU5ESU5HX0JPWEVTIiwiVEVYVF9TRVFVRU5DRSIsIkJMT0NLUyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiaWNvbkNvbG9yIiwiaGFzTGFiZWwiLCJUQVNLX1NUQVRVUyIsIlBFTkRJTkciLCJORVciLCJDT01QTEVURUQiLCJPUEVOIiwiSU5fUFJPR1JFU1MiLCJRVUVVRV9TVEFUVVMiLCJTQU1QTEVfVkFMVUVTIiwidGV4dCIsImltYWdlIiwiYXVkaW8iLCJ2aWRlbyIsImVtYWlsIiwibGluayIsIm51bWJlciIsImRhdGUiLCJlbWJlZCIsInBkZiIsImJvdW5kaW5nX2JveGVzIiwibmFtZWRfZW50aXR5X3JlY29nbml0aW9uIiwicmljaF90ZXh0IiwiYmluYXJ5IiwidGV4dF9zZXF1ZW5jZSIsIkZFQVRVUkVfVE9HR0xFUyIsIlVQTE9BRF9DU1ZfUkVHSU9OX09SR1MiLCJGSUxURVJfQkxPQ0tfVFlQRVMiLCJTVEFGRl9PUkdfSUQiLCJib29sZWFuIiwic3RyaW5nIiwiYXJyYXkiLCJvYmplY3QiLCJsYXp5IiwibWl4ZWQiLCJhZGRNZXRob2QiLCJ5dXAiLCJtZXNzYWdlIiwicGF0aCIsImlkZW50aWZpZXIiLCJ0ZXN0IiwibGlzdCIsIm1hcHBlciIsIngiLCJnZXQiLCJzZXQiLCJTZXQiLCJpc1VuaXF1ZSIsImlkeCIsImZpbmRJbmRleCIsImwiLCJpZCIsImNyZWF0ZUVycm9yIiwibG9naW5TY2hlbWEiLCJzaGFwZSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJJbnZpdGVTaWduVXBTY2hlbWEiLCJtaW4iLCJQdWJsaWNTaWduVXBTY2hlbWEiLCJmb3Jnb3R0ZW5TY2hlbWEiLCJyZXNldFNjaGVtYSIsIkNoYW5nZVBhc3N3b3JkU2NoZW1hIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJlbWFpbExpc3RTY2hlbWEiLCJlbWFpbHMiLCJ0cmFuc2Zvcm0iLCJpc1R5cGUiLCJzcGxpdCIsIm9mIiwidXNlclNjaGVtYSIsIm9yZ2FuaXphdGlvblNjaGVtYSIsIm1heCIsImNzdkRvd25sb2FkU2NoZW1hIiwic3RhcnREYXRlIiwibnVsbGFibGUiLCJlbmREYXRlIiwicXVldWVTY2hlbWEiLCJvYmoiLCJpbmNsdWRlcyIsIndoZW4iLCJpcyIsInRoZW4iLCJ1cmwiLCJvdGhlcndpc2UiLCJtYXRjaGVzIiwib3B0aW9ucyIsInVuaXF1ZSIsInNpbmdsZV9zZWxlY3Rpb24iLCJtdWx0aXBsZV9zZWxlY3Rpb24iLCJxdWV1ZVNldHRpbmdzU2NoZW1hIiwidGFza19kZXNjcmlwdGlvbiIsImd1aWRlbGluZXNfdXJsIiwidmFsaWRhdGVVcmxGb3J0YXNrTWVudVNjaGVtYSIsIm1hcFZhbHVlcyIsInRhc2tNZW51U2NoZW1hIiwiZm9ybVZhbHVlcyIsIl9rZXkiLCJrZXkiLCJfMTAiLCJ0YXNrU2NoZW1hIiwibmVzdGVkT2JqIiwic3RyaWN0IiwiZW50aXRpZXMiLCJpc0FycmF5Iiwib2JqZWN0cyIsImlzX3JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLFNBQVNBLGNBQVQsQ0FBd0JDLEdBQXhCLEVBQTZCO0FBQUUsTUFBSUMsYUFBYSxHQUFHQyxTQUFwQjtBQUErQixNQUFJQyxLQUFLLEdBQUdILEdBQUcsQ0FBQyxDQUFELENBQWY7QUFBb0IsTUFBSUksQ0FBQyxHQUFHLENBQVI7O0FBQVcsU0FBT0EsQ0FBQyxHQUFHSixHQUFHLENBQUNLLE1BQWYsRUFBdUI7QUFBRSxVQUFNQyxFQUFFLEdBQUdOLEdBQUcsQ0FBQ0ksQ0FBRCxDQUFkO0FBQW1CLFVBQU1HLEVBQUUsR0FBR1AsR0FBRyxDQUFDSSxDQUFDLEdBQUcsQ0FBTCxDQUFkO0FBQXVCQSxLQUFDLElBQUksQ0FBTDs7QUFBUSxRQUFJLENBQUNFLEVBQUUsS0FBSyxnQkFBUCxJQUEyQkEsRUFBRSxLQUFLLGNBQW5DLEtBQXNESCxLQUFLLElBQUksSUFBbkUsRUFBeUU7QUFBRSxhQUFPRCxTQUFQO0FBQW1COztBQUFDLFFBQUlJLEVBQUUsS0FBSyxRQUFQLElBQW1CQSxFQUFFLEtBQUssZ0JBQTlCLEVBQWdEO0FBQUVMLG1CQUFhLEdBQUdFLEtBQWhCO0FBQXVCQSxXQUFLLEdBQUdJLEVBQUUsQ0FBQ0osS0FBRCxDQUFWO0FBQW9CLEtBQTdGLE1BQW1HLElBQUlHLEVBQUUsS0FBSyxNQUFQLElBQWlCQSxFQUFFLEtBQUssY0FBNUIsRUFBNEM7QUFBRUgsV0FBSyxHQUFHSSxFQUFFLENBQUMsQ0FBQyxHQUFHQyxJQUFKLEtBQWFMLEtBQUssQ0FBQ00sSUFBTixDQUFX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QUNGLEdBckhHLENBRkYsRUF5SEhBLFFBekhHLENBeUhNLHdDQXpITjtBQURpQyxDQUFmLENBQW5CLEMiLCJmaWxlIjoiRGFzaGJvYXJkUm9vdH5Gb3Jnb3R0ZW5Gb3Jtfkludml0ZVNpZ25VcFBhZ2V+Sm9pblF1ZXVlU3VjY2Vzc35Mb2dpblBhZ2V+UGFzc3dvcmRDb250YWluZXJ+UHJvZmlsZUNvbn4xYjQ2NTViNF82MDYxYTczNTgxYWE3ZGEyMzA3YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCB7cGFyc2UsIGlzRGF0ZSwgZm9ybWF0fSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7QkxPQ0tfVFlQRX0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IHBhcnNlRGF0ZVN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICBpZiAob3JpZ2luYWxWYWx1ZSkge1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBpc0RhdGUobmV3IERhdGUob3JpZ2luYWxWYWx1ZSkpXG4gICAgICA/IG5ldyBEYXRlKG9yaWdpbmFsVmFsdWUpXG4gICAgICA6IHBhcnNlKG9yaWdpbmFsVmFsdWUsICd5eXl5LU1NLWRkJywgbmV3IERhdGUoKSlcblxuICAgIHJldHVybiBwYXJzZWREYXRlXG4gIH1cbiAgcmV0dXJuIG9yaWdpbmFsVmFsdWVcbn1cblxuZXhwb3J0IGNvbnN0IGdldERpc3BsYXlGb3JtYXQgPSAoaXNvU3RyaW5nKSA9PiB7XG4gIGlmICghaXNvU3RyaW5nKSByZXR1cm4gaXNvU3RyaW5nXG4gIHJldHVybiBmb3JtYXQobmV3IERhdGUoZm9ybWF0KG5ldyBEYXRlKGlzb1N0cmluZyksICd5eXl5LU1NLWRkJykpLCAnZGQvTU0veXl5eScpXG59XG5cbmV4cG9ydCBjb25zdCB0b0lzb1N0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgJiYgaXNEYXRlKHZhbHVlKSkge1xuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUodmFsdWUpLCAneXl5eS1NTS1kZCcpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1EYXRlcyA9IChibG9jaywgdmFsdWVzID0ge2RhdGE6IFtdfSkgPT4ge1xuICBpZiAoIWJsb2NrICYmIF9vcHRpb25hbENoYWluKFt2YWx1ZXMsICdvcHRpb25hbEFjY2VzcycsIF8gPT4gXy5kYXRhXSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgZGF0YTogdmFsdWVzLmRhdGEubWFwKHRyYW5zZm9ybURhdGVzKVxuICAgIH1cbiAgfVxuICBpZiAoYmxvY2sudHlwZSAhPT0gQkxPQ0tfVFlQRS5EQVRFKSByZXR1cm4gYmxvY2tcbiAgcmV0dXJuIHtcbiAgICAuLi5ibG9jayxcbiAgICBbQkxPQ0tfVFlQRS5EQVRFXToge1xuICAgICAgLi4uYmxvY2tbQkxPQ0tfVFlQRS5EQVRFXSxcbiAgICAgIC4uLihfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfMiA9PiBfMltCTE9DS19UWVBFLkRBVEVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMyA9PiBfMy52YWx1ZV0pICYmIHtcbiAgICAgICAgdmFsdWU6IHRvSXNvU3RyaW5nKF9vcHRpb25hbENoYWluKFtibG9jaywgJ2FjY2VzcycsIF80ID0+IF80W0JMT0NLX1RZUEUuREFURV0sICdvcHRpb25hbEFjY2VzcycsIF81ID0+IF81LnZhbHVlXSkpXG4gICAgICB9KSxcbiAgICAgIC4uLihfb3B0aW9uYWxDaGFpbihbYmxvY2ssICdhY2Nlc3MnLCBfNiA9PiBfNltCTE9DS19UWVBFLkRBVEVdLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNyA9PiBfNy5wbGFjZWhvbGRlcl0pICYmIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRvSXNvU3RyaW5nKF9vcHRpb25hbENoYWluKFtibG9jaywgJ2FjY2VzcycsIF84ID0+IF84W0JMT0NLX1RZUEUuREFURV0sICdvcHRpb25hbEFjY2VzcycsIF85ID0+IF85LnBsYWNlaG9sZGVyXSkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL0lucHV0RmllbGQudHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZix9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7Rk9OVF9GQU1JTFl9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvdHlwb2dyYXBoeSdcbmltcG9ydCBTdHlsZWRFcnJvciBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TdHlsZWRFcnJvcidcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0KCh7ZXJyb3IsIGRpc2FibGVkLCByZWFkT25seX0pID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBtYXJnaW46IDAsXG4gIGJvcmRlcjogYDFweCBzb2xpZCAke2Vycm9yID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5CT1JERVJfTUFJTl9HUkFZfWAsXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBjb2xvcjogUEFMRVRURS5URVhUX01BSU4sXG4gIGZvbnRGYW1pbHk6IEZPTlRfRkFNSUxZLlNBTlNfU0VSSUYsXG4gIGZvbnRXZWlnaHQ6IDQwMCxcbiAgY3Vyc29yOiBkaXNhYmxlZCB8fCByZWFkT25seSA/ICdub3QtYWxsb3dlZCcgOiAnaW5wdXQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGZvbnRTaXplOiAxNSxcbiAgbGluZUhlaWdodDogJzMycHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgaGVpZ2h0OiAzMixcbiAgcGFkZGluZzogJzAgMTBweCcsXG4gIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMjAwbXMgZWFzZS1pbicsXG4gIHdpZHRoOiAnMTAwJScsXG4gICc6Zm9jdXMnOiB7XG4gICAgYm9yZGVyQ29sb3I6IGVycm9yID8gUEFMRVRURS5FUlJPUl9NQUlOIDogUEFMRVRURS5QUklNQVJZX01BSU5cbiAgfSxcbiAgJzpob3Zlcic6IHtcbiAgICBib3JkZXJDb2xvcjogIXJlYWRPbmx5ICYmIFBBTEVUVEUuQk9SREVSX0hPVkVSXG4gIH0sXG4gICc6YWN0aXZlLCA6Zm9jdXMnOiB7XG4gICAgYm9yZGVyQ29sb3I6ICFyZWFkT25seSAmJiBQQUxFVFRFLlBSSU1BUllfTUFJTlxuICB9XG59KSlcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDE1LFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgY29sb3I6IFBBTEVUVEUuVEVYVF9NQUlOXG59KVxuXG5jb25zdCBTdHlsZWRMYWJlbCA9IHN0eWxlZC5kaXYoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogNVxufSlcblxuY29uc3QgTGFiZWxIZWxwZXIgPSBzdHlsZWQuZGl2KHtcbiAgZm9udFNpemU6IDEyLFxuICBmb250V2VpZ2h0OiA0MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfR1JBWSxcbiAgbWFyZ2luTGVmdDogNlxufSlcblxuY29uc3QgSW5wdXRGaWVsZCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQsXG4gICAgZXJyb3IsXG4gICAgaXNPcHRpb25hbCxcbiAgICBpc1JlcXVpcmVkLFxuICAgIG5hbWUsXG4gICAgaGlkZUVycm9yTWVzc2FnZSxcbiAgICBvbkJsdXIsXG4gICAgb25Gb2N1cyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbktleURvd24sXG4gICAgcGF0dGVybixcbiAgICBwbGFjZWhvbGRlcixcbiAgICB2YWx1ZSxcbiAgICBsYWJlbCxcbiAgICBzdHlsZSxcbiAgICBzcGVsbENoZWNrLFxuICAgIHJlYWRPbmx5LFxuICAgIGNvbnRhaW5lclN0eWxlcyxcbiAgICB0eXBlXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogey4uLmNvbnRhaW5lclN0eWxlc30sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMTN9fVxuICAgICAgLCBsYWJlbCAmJiAoXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE1fX1cbiAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE2fX0sIGxhYmVsKVxuICAgICAgICAgICwgaXNSZXF1aXJlZCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsSGVscGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDExN319LCBcIlJlcXVpcmVkXCIpXG4gICAgICAgICAgLCBpc09wdGlvbmFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWxIZWxwZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTE4fX0sIFwiT3B0aW9uYWxcIilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLCBlcnJvciAmJiAhaGlkZUVycm9yTWVzc2FnZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEVycm9yLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEyMX19LCBlcnJvcilcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuKGRpc2FibGVkKSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcGF0dGVybjogcGF0dGVybixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICBvbkJsdXI6IG9uQmx1cixcbiAgICAgICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHR5cGU6IHR5cGUgfHwgJ3RleHQnLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVycm9yOiBCb29sZWFuKGVycm9yKSAmJiBCb29sZWFuKHZhbHVlICE9PSAnJyksXG4gICAgICAgIHNwZWxsQ2hlY2s6IHNwZWxsQ2hlY2ssXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTIyfX1cbiAgICAgIClcbiAgICApXG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQuZGl2KHtcbiAgY29sb3I6IFBBTEVUVEUuRVJST1JfTUFJTixcbiAgd2lkdGg6ICcxMDAlJyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGZvbnRTaXplOiAnMTJweCcsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4J1xufSlcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkRXJyb3JcbiIsImV4cG9ydCB2YXIgQkxPQ0tfVFlQRTsgKGZ1bmN0aW9uIChCTE9DS19UWVBFKSB7XG4gIGNvbnN0IFRFWFQgPSAndGV4dCc7IEJMT0NLX1RZUEVbXCJURVhUXCJdID0gVEVYVDtcbiAgY29uc3QgRU1BSUwgPSAnZW1haWwnOyBCTE9DS19UWVBFW1wiRU1BSUxcIl0gPSBFTUFJTDtcbiAgY29uc3QgTlVNQkVSID0gJ251bWJlcic7IEJMT0NLX1RZUEVbXCJOVU1CRVJcIl0gPSBOVU1CRVI7XG4gIGNvbnN0IExJTksgPSAnbGluayc7IEJMT0NLX1RZUEVbXCJMSU5LXCJdID0gTElOSztcbiAgY29uc3QgSU1BR0UgPSAnaW1hZ2UnOyBCTE9DS19UWVBFW1wiSU1BR0VcIl0gPSBJTUFHRTtcbiAgY29uc3QgQVVESU8gPSAnYXVkaW8nOyBCTE9DS19UWVBFW1wiQVVESU9cIl0gPSBBVURJTztcbiAgY29uc3QgVklERU8gPSAndmlkZW8nOyBCTE9DS19UWVBFW1wiVklERU9cIl0gPSBWSURFTztcbiAgY29uc3QgQklOQVJZID0gJ2JpbmFyeSc7IEJMT0NLX1RZUEVbXCJCSU5BUllcIl0gPSBCSU5BUlk7XG4gIGNvbnN0IEVNQkVEID0gJ2VtYmVkJzsgQkxPQ0tfVFlQRVtcIkVNQkVEXCJdID0gRU1CRUQ7XG4gIGNvbnN0IFBERiA9ICdwZGYnOyBCTE9DS19UWVBFW1wiUERGXCJdID0gUERGO1xuICBjb25zdCBOQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04gPSAnbmFtZWRfZW50aXR5X3JlY29nbml0aW9uJzsgQkxPQ0tfVFlQRVtcIk5BTUVEX0VOVElUWV9SRUNPR05JVElPTlwiXSA9IE5BTUVEX0VOVElUWV9SRUNPR05JVElPTjtcbiAgY29uc3QgU0lOR0xFX1NFTEVDVElPTiA9ICdzaW5nbGVfc2VsZWN0aW9uJzsgQkxPQ0tfVFlQRVtcIlNJTkdMRV9TRUxFQ1RJT05cIl0gPSBTSU5HTEVfU0VMRUNUSU9OO1xuICBjb25zdCBNVUxUSVBMRV9TRUxFQ1RJT04gPSAnbXVsdGlwbGVfc2VsZWN0aW9uJzsgQkxPQ0tfVFlQRVtcIk1VTFRJUExFX1NFTEVDVElPTlwiXSA9IE1VTFRJUExFX1NFTEVDVElPTjtcbiAgY29uc3QgRk9STV9TRVFVRU5DRSA9ICdmb3JtX3NlcXVlbmNlJzsgQkxPQ0tfVFlQRVtcIkZPUk1fU0VRVUVOQ0VcIl0gPSBGT1JNX1NFUVVFTkNFO1xuICBjb25zdCBSSUNIX1RFWFQgPSAncmljaF90ZXh0JzsgQkxPQ0tfVFlQRVtcIlJJQ0hfVEVYVFwiXSA9IFJJQ0hfVEVYVDtcbiAgY29uc3QgQk9VTkRJTkdfQk9YRVMgPSAnYm91bmRpbmdfYm94ZXMnOyBCTE9DS19UWVBFW1wiQk9VTkRJTkdfQk9YRVNcIl0gPSBCT1VORElOR19CT1hFUztcbiAgY29uc3QgVEVYVF9TRVFVRU5DRSA9ICd0ZXh0X3NlcXVlbmNlJzsgQkxPQ0tfVFlQRVtcIlRFWFRfU0VRVUVOQ0VcIl0gPSBURVhUX1NFUVVFTkNFO1xuICBjb25zdCBEQVRFID0gJ2RhdGUnOyBCTE9DS19UWVBFW1wiREFURVwiXSA9IERBVEU7XG59KShCTE9DS19UWVBFIHx8IChCTE9DS19UWVBFID0ge30pKTtcblxuZXhwb3J0IGNvbnN0IEJMT0NLUyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVGV4dCcsXG4gICAgZGVzY3JpcHRpb246ICdUbyBkaXNwbGF5IHBsYWluIHRleHQgZGF0YS4nLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuVEVYVCxcbiAgICBwbGFjZWhvbGRlcjogJ0EgZmV3IHdvcmRzJyxcbiAgICBpY29uOiAnc3ViamVjdCcsXG4gICAgaWNvbkNvbG9yOiAnI2ZmODI4MidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRW1haWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnQW4gZW1haWwgZmllbGQgd2l0aCBpbnB1dCB2YWxpZGF0aW9uLicsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5FTUFJTCxcbiAgICBwbGFjZWhvbGRlcjogJ2FsaWNlQGV4YW1wbGUuY29tJyxcbiAgICBpY29uOiAnYWx0ZXJuYXRlX2VtYWlsJyxcbiAgICBpY29uQ29sb3I6ICcjRkZBNkEwJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOdW1iZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgbnVtYmVycywgc3VjaCBhcyBpbnRlZ2VycyBhbmQgZGVjaW1hbHMuJyxcbiAgICB0eXBlOiBCTE9DS19UWVBFLk5VTUJFUixcbiAgICBwbGFjZWhvbGRlcjogJzE5MjMnLFxuICAgIGljb246ICdsb29rc181JyxcbiAgICBpY29uQ29sb3I6ICcjZmZBZjgyJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdEYXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgZGF0ZSwgY29tcG9zZWQgb2YgZGF5LCBtb250aCBhbmQgeWVhci4nLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuREFURSxcbiAgICBwbGFjZWhvbGRlcjogJzIwMjEtMDEtMzAnLFxuICAgIGljb246ICd0b2RheScsXG4gICAgaWNvbkNvbG9yOiAnI2ZmZDQ4MidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTGluaycsXG4gICAgZGVzY3JpcHRpb246ICdBIFVSTCBmaWVsZCB3aXRoIGlucHV0IHZhbGlkYXRpb24uJyxcbiAgICB0eXBlOiBCTE9DS19UWVBFLkxJTkssXG4gICAgcGxhY2Vob2xkZXI6ICdodHRwczovL3d3dy5odW1hbmxhbWJkYXMuY29tJyxcbiAgICBpY29uOiAnbGluaycsXG4gICAgaWNvbkNvbG9yOiAnI0MyRTNGNSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSW1hZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVuZGVycyBhbiBpbWFnZSBnaXZlbiBhIHNvdXJjZSBVUkwuJyxcbiAgICB0eXBlOiBCTE9DS19UWVBFLklNQUdFLFxuICAgIGljb246ICdpbWFnZScsXG4gICAgaWNvbkNvbG9yOiAnI2E5ZDZhZScsXG4gICAgcGxhY2Vob2xkZXI6ICdodHRwczovL3d3dy5leGFtcGxlLmNvbS9waG90by5wbmcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BERicsXG4gICAgZGVzY3JpcHRpb246ICdFbWJlZHMgYSBQREYgZ2l2ZW4gYSB2YWxpZCBVUkwuJyxcbiAgICBoYXNMYWJlbDogZmFsc2UsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5QREYsXG4gICAgaWNvbjogJ3BpY3R1cmVfYXNfcGRmJyxcbiAgICBpY29uQ29sb3I6ICcjQkU5Nzc0JyxcbiAgICBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vZXhhbXBsZS5jb20vZXhhbXBsZS5wZGYnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0VtYmVkJyxcbiAgICBkZXNjcmlwdGlvbjogJ0VtYmVkcyBhIHdlYnNpdGUgZ2l2ZW4gYSB2YWxpZCBVUkwuJyxcbiAgICBoYXNMYWJlbDogZmFsc2UsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5FTUJFRCxcbiAgICBpY29uOiAnd3lzaXd5ZycsXG4gICAgaWNvbkNvbG9yOiAnIzQ4NDg0OScsXG4gICAgcGxhY2Vob2xkZXI6ICdodHRwczovL3d3dy5leGFtcGxlLmNvbSdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVmlkZW8nLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgYSB2aWRlbyBjbGlwIGdpdmVuIGEgc291cmNlIFVSTC4nLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuVklERU8sXG4gICAgaWNvbjogJ3ZpZGVvY2FtJyxcbiAgICBpY29uQ29sb3I6ICcjQUZEOEUxJyxcbiAgICBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3ZpZGVvLm1wNCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQXVkaW8nLFxuICAgIGRlc2NyaXB0aW9uOiAnUGxheXMgYW4gYXVkaW8gY2xpcCBnaXZlbiBhIHNvdXJjZSBVUkwuJyxcbiAgICB0eXBlOiBCTE9DS19UWVBFLkFVRElPLFxuICAgIGljb246ICdncmFwaGljX2VxJyxcbiAgICBpY29uQ29sb3I6ICcjODI5REZGJyxcbiAgICBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL2F1ZGlvLm1wMydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUmljaCBUZXh0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgcmljaCB0ZXh0IGVkaXRvcicsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5SSUNIX1RFWFQsXG4gICAgcGxhY2Vob2xkZXI6ICdUZWxsIGEgc3RvcnknLFxuICAgIGljb246ICd0ZXh0X2Zvcm1hdCcsXG4gICAgaWNvbkNvbG9yOiAnI2ZmOTg4MidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQm91bmRpbmcgQm94ZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQW4gaW1hZ2Ugd2l0aCBib3VuZGluZyBib3ggbWFza3MuJyxcbiAgICBoYXNMYWJlbDogZmFsc2UsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFUyxcbiAgICBpY29uOiAnY3JvcF9mcmVlJyxcbiAgICBpY29uQ29sb3I6ICcjN0JFQ0QxJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUZXh0IEhpZ2hsaWdodGluZycsXG4gICAgZGVzY3JpcHRpb246ICdGb3IgTmFtZWQgRW50aXR5IFJlY29nbml0aW9uIGFubm90YXRpb25zLicsXG4gICAgaGFzTGFiZWw6IGZhbHNlLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OLFxuICAgIGljb246ICdmb3JtYXRfc2hhcGVzJyxcbiAgICBpY29uQ29sb3I6ICcjOUVEM0YwJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdCaW5hcnknLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBZZXMvTm8gc2VsZWN0aW9uLicsXG4gICAgaGFzTGFiZWw6IGZhbHNlLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuQklOQVJZLFxuICAgIGljb246ICdjaGVja19jaXJjbGUnLFxuICAgIGljb25Db2xvcjogJyNDNTkwREUnLFxuICAgIHBsYWNlaG9sZGVyOiAnSXMgdGhpcyBhIHBvc2l0aXZlIHJldmlldz8nXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NpbmdsZSBTZWxlY3Rpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hvb3NlIG9uZSBvcHRpb24gb3V0IG9mIG1hbnkuJyxcbiAgICBoYXNMYWJlbDogZmFsc2UsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5TSU5HTEVfU0VMRUNUSU9OLFxuICAgIGljb246ICdyYWRpb19idXR0b25fY2hlY2tlZCcsXG4gICAgaWNvbkNvbG9yOiAnI0ZGODI4MidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTXVsdGlwbGUgU2VsZWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Nob29zZSBvbmUgb3IgbW9yZSBvcHRpb25zIG91dCBvZiBtYW55LicsXG4gICAgaGFzTGFiZWw6IGZhbHNlLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuTVVMVElQTEVfU0VMRUNUSU9OLFxuICAgIGljb246ICdjaGVja19ib3gnLFxuICAgIGljb25Db2xvcjogJyM2NjQ4ZWUnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0Zvcm0gU2VxdWVuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzZXF1ZW5jZSBvZiBxdWVzdGlvbnMuIFN1cHBvcnRzIGxvZ2ljIGp1bXBzLicsXG4gICAgaGFzTGFiZWw6IGZhbHNlLFxuICAgIHR5cGU6IEJMT0NLX1RZUEUuRk9STV9TRVFVRU5DRSxcbiAgICBpY29uOiAnY2FsbF9zcGxpdCcsXG4gICAgaWNvbkNvbG9yOiAncmdiYSgxMDIsIDcyLCAyMzgsIDAuOCknXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RleHQgU2VxdWVuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgYW5kIHRha2VzIGEgbGlzdCBvZiB0ZXh0IGl0ZW1zLicsXG4gICAgdHlwZTogQkxPQ0tfVFlQRS5URVhUX1NFUVVFTkNFLFxuICAgIHBsYWNlaG9sZGVyOiBbJ0Egc2VudGVuY2UnLCAnQW5vdGhlciBzZW50ZW5jZSddLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBpY29uQ29sb3I6ICcjQUVGQkJGJ1xuICB9XG5dXG5cbmV4cG9ydCB2YXIgVEFTS19TVEFUVVM7IChmdW5jdGlvbiAoVEFTS19TVEFUVVMpIHtcbiAgY29uc3QgUEVORElORyA9ICdwZW5kaW5nJzsgVEFTS19TVEFUVVNbXCJQRU5ESU5HXCJdID0gUEVORElORztcbiAgY29uc3QgTkVXID0gJ25ldyc7IFRBU0tfU1RBVFVTW1wiTkVXXCJdID0gTkVXO1xuICBjb25zdCBDT01QTEVURUQgPSAnY29tcGxldGVkJzsgVEFTS19TVEFUVVNbXCJDT01QTEVURURcIl0gPSBDT01QTEVURUQ7XG4gIGNvbnN0IE9QRU4gPSAnb3Blbic7IFRBU0tfU1RBVFVTW1wiT1BFTlwiXSA9IE9QRU47XG4gIGNvbnN0IElOX1BST0dSRVNTID0gJ2luX3Byb2dyZXNzJzsgVEFTS19TVEFUVVNbXCJJTl9QUk9HUkVTU1wiXSA9IElOX1BST0dSRVNTO1xufSkoVEFTS19TVEFUVVMgfHwgKFRBU0tfU1RBVFVTID0ge30pKTtcblxuZXhwb3J0IHZhciBRVUVVRV9TVEFUVVM7IChmdW5jdGlvbiAoUVVFVUVfU1RBVFVTKSB7XG4gIGNvbnN0IENPTVBMRVRFRCA9ICdjb21wbGV0ZWQnOyBRVUVVRV9TVEFUVVNbXCJDT01QTEVURURcIl0gPSBDT01QTEVURUQ7XG4gIGNvbnN0IElOX1BST0dSRVNTID0gJ2luX3Byb2dyZXNzJzsgUVVFVUVfU1RBVFVTW1wiSU5fUFJPR1JFU1NcIl0gPSBJTl9QUk9HUkVTUztcbiAgY29uc3QgT1BFTiA9ICdvcGVuJzsgUVVFVUVfU1RBVFVTW1wiT1BFTlwiXSA9IE9QRU47XG4gIGNvbnN0IE5FVyA9ICduZXcnOyBRVUVVRV9TVEFUVVNbXCJORVdcIl0gPSBORVc7XG59KShRVUVVRV9TVEFUVVMgfHwgKFFVRVVFX1NUQVRVUyA9IHt9KSk7XG5cbmV4cG9ydCBjb25zdCBTQU1QTEVfVkFMVUVTID0ge1xuICB0ZXh0OiAnVGhpcyBpcyBzb21lIHJhbmRvbSB0ZXh0JyxcbiAgaW1hZ2U6ICdodHRwczovL2V4YW1wbGUuY29tL3JhbmRvbS1waWN0dXJlLmpwZycsXG4gIGF1ZGlvOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tc29uZy5tcDMnLFxuICB2aWRlbzogJ2h0dHBzOi8vZXhhbXBsZS5jb20vcmFuZG9tLXZpZGVvLm1wNCcsXG4gIGVtYWlsOiAnYWxpY2VAZXhhbXBsZS5jb20nLFxuICBsaW5rOiAnaHR0cHM6Ly9leGFtcGxlLmNvbScsXG4gIG51bWJlcjogNDIsXG4gIGRhdGU6ICcyMDIxLTAxLTMwJyxcbiAgZW1iZWQ6ICdodHRwczovL2V4YW1wbGUuY29tJyxcbiAgcGRmOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9maWxlLnBkZicsXG4gIGJvdW5kaW5nX2JveGVzOiAnaHR0cHM6Ly9leGFtcGxlLmNvbS9yYW5kb20tcGljdHVyZS5qcGcnLFxuICBuYW1lZF9lbnRpdHlfcmVjb2duaXRpb246ICdUaGlzIGlzIHNvbWUgcmFuZG9tIHRleHQnLFxuICByaWNoX3RleHQ6ICdUZWxsIGEgc3RvcnknLFxuICBiaW5hcnk6IHRydWUsXG4gIHRleHRfc2VxdWVuY2U6IFsnZm9vJywgJ2JhciddXG59XG5cbmV4cG9ydCBjb25zdCBGRUFUVVJFX1RPR0dMRVMgPSB7XG4gIFVQTE9BRF9DU1ZfUkVHSU9OX09SR1M6IFs5LCA0NF1cbn1cblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9CTE9DS19UWVBFUyA9IFtCTE9DS19UWVBFLlRFWFQsIEJMT0NLX1RZUEUuRU1BSUwsIEJMT0NLX1RZUEUuTlVNQkVSLCBCTE9DS19UWVBFLkxJTktdXG5cbmV4cG9ydCBjb25zdCBTVEFGRl9PUkdfSUQgPSAxMDAwMDAwMDAwXG4iLCIgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH1pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtwYXJzZURhdGVTdHJpbmd9IGZyb20gJ2NsaWVudC91dGlscy9kYXRlSGVscGVycydcblxuY29uc3Qge2Jvb2xlYW4sIHN0cmluZywgYXJyYXksIG9iamVjdCwgbGF6eSwgbWl4ZWQsIGFkZE1ldGhvZCwgZGF0ZX0gPSB5dXBcblxuLy8gVW5pcXVlbmVzcyB2YWxpZGF0aW9uXG5hZGRNZXRob2QoYXJyYXksICd1bmlxdWUnLCBmdW5jdGlvbiAobWVzc2FnZSwgcGF0aCwgaWRlbnRpZmllciA9IG51bGwpIHtcbiAgcmV0dXJuIHRoaXMudGVzdCgndW5pcXVlJywgbWVzc2FnZSwgZnVuY3Rpb24gKGxpc3QpIHtcbiAgICBjb25zdCBtYXBwZXIgPSAoeCkgPT4gXy5nZXQoeCwgcGF0aClcbiAgICBjb25zdCBzZXQgPSBbLi4ubmV3IFNldChsaXN0Lm1hcChtYXBwZXIpKV1cbiAgICBjb25zdCBpc1VuaXF1ZSA9IGxpc3QubGVuZ3RoID09PSBzZXQubGVuZ3RoXG4gICAgaWYgKGlzVW5pcXVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGlkeCA9IGxpc3QuZmluZEluZGV4KChsLCBpKSA9PiBtYXBwZXIobCkgIT09IHNldFtpXSlcbiAgICBjb25zdCBpZCA9IGlkZW50aWZpZXIgPyBgWyR7aWR4fV0uJHtpZGVudGlmaWVyfWAgOiBgWyR7aWR4fV0uJHtwYXRofWBcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKHtwYXRoOiBpZCwgbWVzc2FnZX0pXG4gIH0pXG59KVxuXG4vLyBMb2dpblxuZXhwb3J0IGNvbnN0IGxvZ2luU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICBlbWFpbDogc3RyaW5nKCkuZW1haWwoJ0VtYWlsIG11c3QgYmUgYSB2YWxpZCBlbWFpbCcpLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxuICBwYXNzd29yZDogc3RyaW5nKCkucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJylcbn0pXG5cbi8vIEludml0ZSBTaWduVXBcbmV4cG9ydCBjb25zdCBJbnZpdGVTaWduVXBTY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIG5hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdOYW1lIGlzIHJlcXVpcmVkJyksXG4gIHBhc3N3b3JkOiBzdHJpbmcoKVxuICAgIC5taW4oOCwgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMnKVxuICAgIC5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKVxufSlcblxuLy8gUHVibGljIFNpZ25VcFxuZXhwb3J0IGNvbnN0IFB1YmxpY1NpZ25VcFNjaGVtYSA9IG9iamVjdCgpLnNoYXBlKHtcbiAgZW1haWw6IHN0cmluZygpLnJlcXVpcmVkKCdFbWFpbCBpcyByZXF1aXJlZCcpLFxuICBuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnTmFtZSBpcyByZXF1aXJlZCcpLFxuICBwYXNzd29yZDogc3RyaW5nKClcbiAgICAubWluKDgsICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJylcbiAgICAucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJylcbn0pXG5cbi8vIEZvcmdvdHRlbiBwYXNzd29yZCBzY2hlbWFcbmV4cG9ydCBjb25zdCBmb3Jnb3R0ZW5TY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIGVtYWlsOiBzdHJpbmcoKS5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQnKVxufSlcblxuLy8gUmVzZXQgcGFzc3dvcmQgc2NoZW1hXG5leHBvcnQgY29uc3QgcmVzZXRTY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIHBhc3N3b3JkOiBzdHJpbmcoKVxuICAgIC5yZXF1aXJlZCgnWW91ciBuZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnKVxuICAgIC5taW4oOCwgJ1lvdXIgbmV3IHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzJylcbn0pXG5cbi8vIENoYW5nZSBQYXNzd29yZFxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZygpLnJlcXVpcmVkKCdZb3VyIGN1cnJlbnQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZygpXG4gICAgLm1pbig4LCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IDggY2hhcmFjdGVycycpXG4gICAgLnJlcXVpcmVkKCdZb3VyIG5ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KVxuXG4vLyBFbWFpbCBsaXN0XG5leHBvcnQgY29uc3QgZW1haWxMaXN0U2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICBlbWFpbHM6IGFycmF5KClcbiAgICAudHJhbnNmb3JtKGZ1bmN0aW9uICh2YWx1ZSwgb3JpZ2luYWxWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaXNUeXBlKHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlID8gb3JpZ2luYWxWYWx1ZS5zcGxpdCgvW1xccyxdKy8pIDogW11cbiAgICB9KVxuICAgIC5vZihzdHJpbmcoKS5lbWFpbCgoe3ZhbHVlfSkgPT4gYCR7dmFsdWV9IGlzIG5vdCBhIHZhbGlkIGVtYWlsYCkpXG4gICAgLnJlcXVpcmVkKClcbn0pXG5cbi8vIFVzZXJcbmV4cG9ydCBjb25zdCB1c2VyU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICBlbWFpbDogc3RyaW5nKCkuZW1haWwoJ1BsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGFuZCB0cnkgYWdhaW4nKS5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQnKSxcbiAgbmFtZTogc3RyaW5nKCkubWluKDIsICdUaGlzIG5hbWUgaXMgdG9vIHNob3J0JykucmVxdWlyZWQoJ1lvdXIgZnVsbG5hbWUgaXMgcmVxdWlyZWQnKVxufSlcblxuLy8gT3JnYW5pemF0aW9uXG5leHBvcnQgY29uc3Qgb3JnYW5pemF0aW9uU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICBuYW1lOiBzdHJpbmcoKVxuICAgIC5taW4oMiwgJ1RoaXMgb3JnYW5pemF0aW9uIG5hbWUgaXMgdG9vIHNob3J0JylcbiAgICAubWF4KDIwMCwgJ1RoaXMgb3JnYW5pemF0aW9uIG5hbWUgaXMgdG9vIGxvbmcnKVxuICAgIC5yZXF1aXJlZCgnT3JnYW5pemF0aW9uIG5hbWUgaXMgcmVxdWlyZWQnKVxufSlcblxuLy8gQ1NWIERvd25sb2FkXG5leHBvcnQgY29uc3QgY3N2RG93bmxvYWRTY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIHN0YXJ0RGF0ZTogZGF0ZSgpXG4gICAgLm51bGxhYmxlKClcbiAgICAudHJhbnNmb3JtKHBhcnNlRGF0ZVN0cmluZylcbiAgICAubWF4KG5ldyBEYXRlKCksIFwiU3RhcnQgRGF0ZSBjYW4ndCBiZSBpbiB0aGUgZnV0dXJlXCIpLFxuICBlbmREYXRlOiBkYXRlKClcbiAgICAubnVsbGFibGUoKVxuICAgIC50cmFuc2Zvcm0ocGFyc2VEYXRlU3RyaW5nKVxuICAgIC5taW4oeXVwLnJlZignc3RhcnREYXRlJyksIFwiRW5kIGRhdGUgY2FuJ3QgYmUgYmVmb3JlIFN0YXJ0IGRhdGVcIilcbiAgICAubWF4KG5ldyBEYXRlKCksIFwiRW5kIERhdGUgY2FuJ3QgYmUgaW4gdGhlIGZ1dHVyZVwiKVxufSlcblxuLy8gUXVldWVzXG5leHBvcnQgY29uc3QgcXVldWVTY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIG5hbWU6IHN0cmluZygpXG4gICAgLm1heCgxNTAsICdRdWV1ZSBuYW1lIGlzIHRvbyBsb25nJylcbiAgICAubWluKDEsICdRdWV1ZSBuYW1lIGlzIHRvbyBzaG9ydCcpXG4gICAgLnJlcXVpcmVkKCdRdWV1ZSBuYW1lIGlzIHJlcXVpcmVkJyksXG4gIGRhdGE6IGFycmF5KClcbiAgICAub2YoXG4gICAgICBsYXp5KChvYmopID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIFtCTE9DS19UWVBFLkxJTkssIEJMT0NLX1RZUEUuVklERU8sIEJMT0NLX1RZUEUuSU1BR0UsIEJMT0NLX1RZUEUuQVVESU9dLmluY2x1ZGVzKG9iai50eXBlKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWl4ZWQoKS53aGVuKCd1c2VfcGxhY2Vob2xkZXInLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogc3RyaW5nKCkudXJsKCdBIHZhbGlkIFVSTCBpcyByZXF1aXJlZCBmb3IgdGhpcyBmaWVsZCcpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiBzdHJpbmcoKS51cmwoJ0EgdmFsaWQgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5FTUJFRCkge1xuICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICBpZDogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIElEIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBbb2JqLnR5cGVdOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtaXhlZCgpLndoZW4oJ3VzZV9wbGFjZWhvbGRlcicsIHtcbiAgICAgICAgICAgICAgICBpczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aGVuOiBzdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgLm1hdGNoZXMoL1xcYmh0dHBzOlxcL1xcL1xcUypcXGIvKVxuICAgICAgICAgICAgICAgICAgLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiBzdHJpbmcoKS5tYXRjaGVzKC9cXGJodHRwczpcXC9cXC9cXFMqXFxiLylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5QREYpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWl4ZWQoKS53aGVuKCd1c2VfcGxhY2Vob2xkZXInLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgIC5tYXRjaGVzKC9cXGJodHRwczpcXC9cXC9cXFMqXFwucGRmXFxiLylcbiAgICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgIG90aGVyd2lzZTogc3RyaW5nKCkubWF0Y2hlcygvXFxiaHR0cHM6XFwvXFwvXFxTKlxcLnBkZlxcYi8pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob2JqLnR5cGUgPT09IEJMT0NLX1RZUEUuRU1BSUwpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWl4ZWQoKS53aGVuKCd1c2VfcGxhY2Vob2xkZXInLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogc3RyaW5nKCkuZW1haWwoJ0EgdmFsaWQgZW1haWwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgIG90aGVyd2lzZTogc3RyaW5nKCkuZW1haWwoJ0EgdmFsaWQgZW1haWwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG9iai50eXBlID09PSBCTE9DS19UWVBFLlNJTkdMRV9TRUxFQ1RJT04gfHxcbiAgICAgICAgICBvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5NVUxUSVBMRV9TRUxFQ1RJT05cbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBzdHJpbmcoKS5yZXF1aXJlZCgnRmllbGQgSUQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBvcHRpb25zOiBhcnJheSgpXG4gICAgICAgICAgICAgICAgLm9mKG9iamVjdCgpLnNoYXBlKHt9KSlcbiAgICAgICAgICAgICAgICAudW5pcXVlKCdGaWVsZCBJRCBoYXMgdG8gYmUgdW5pcXVlJywgJ2lkJywgYCR7b2JqLnR5cGV9Lm9wdGlvbnMuaWRgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTikge1xuICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICBpZDogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIElEIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnRmllbGQgSUQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgb3B0aW9uczogYXJyYXkoKVxuICAgICAgICAgICAgICAgIC5vZihcbiAgICAgICAgICAgICAgICAgIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudW5pcXVlKCdGaWVsZCBJRCBoYXMgdG8gYmUgdW5pcXVlJywgJ2lkJywgYCR7b2JqLnR5cGV9Lm9wdGlvbnMuaWRgKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1peGVkKCkud2hlbigndXNlX3BsYWNlaG9sZGVyJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IHN0cmluZygpLnJlcXVpcmVkKCdBIHZhbHVlIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJyksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiBzdHJpbmcoJ0EgdmFsdWUgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgbmFtZTogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIElEIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBbb2JqLnR5cGVdOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgIGRhdGE6IGFycmF5KClcbiAgICAgICAgICAgICAgICAub2YoXG4gICAgICAgICAgICAgICAgICBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBzdHJpbmcoKS5yZXF1aXJlZCgnRmllbGQgSUQgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlX3NlbGVjdGlvbjogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGFycmF5KCkub2YoXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzdHJpbmcoKS5yZXF1aXJlZCgnRmllbGQgSUQgaXMgcmVxdWlyZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZV9zZWxlY3Rpb246IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBhcnJheSgpLm9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIElEIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1pbigxKVxuICAgICAgICAgICAgICAgIC51bmlxdWUoJ0ZpZWxkIElEIGhhcyB0byBiZSB1bmlxdWUnLCAnaWQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG9iai50eXBlID09PSBCTE9DS19UWVBFLk5VTUJFUiB8fFxuICAgICAgICAgIG9iai50eXBlID09PSBCTE9DS19UWVBFLlRFWFQgfHxcbiAgICAgICAgICBvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5SSUNIX1RFWFRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1peGVkKCkud2hlbigndXNlX3BsYWNlaG9sZGVyJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IHN0cmluZygpLnJlcXVpcmVkKCdBIHZhbHVlIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJyksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiBzdHJpbmcoJ0EgdmFsdWUgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLkRBVEUpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWl4ZWQoKS53aGVuKCd1c2VfcGxhY2Vob2xkZXInLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogZGF0ZSgpLnRyYW5zZm9ybShwYXJzZURhdGVTdHJpbmcpLnJlcXVpcmVkKCdBIFZhbGlkIGRhdGUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBvdGhlcndpc2U6IGRhdGUoKS50cmFuc2Zvcm0ocGFyc2VEYXRlU3RyaW5nKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICBpZDogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIElEIGlzIHJlcXVpcmVkJyksXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmcoKS5yZXF1aXJlZCgnRmllbGQgSUQgaXMgcmVxdWlyZWQnKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuICAgIC5taW4oMSwgJ1RoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCBvbmUgYmxvY2snKVxuICAgIC51bmlxdWUoJ0ZpZWxkIElEIGhhcyB0byBiZSB1bmlxdWUnLCAnaWQnKVxufSlcblxuLy8gUXVldWUgU2V0dGluZ3NcbmV4cG9ydCBjb25zdCBxdWV1ZVNldHRpbmdzU2NoZW1hID0gb2JqZWN0KCkuc2hhcGUoe1xuICB0YXNrX2Rlc2NyaXB0aW9uOiBzdHJpbmcoKS5udWxsYWJsZSgpLnJlcXVpcmVkKCdEZXNjcmlwdGlvbiBpcyByZXF1aXJlZCcpLFxuICBndWlkZWxpbmVzX3VybDogc3RyaW5nKCkubnVsbGFibGUoKS51cmwoJ0EgdmFsaWQgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbn0pXG5cbi8vIFRhc2sgTWVudVxuY29uc3QgdmFsaWRhdGVVcmxGb3J0YXNrTWVudVNjaGVtYSA9ICgpID0+XG4gIGxhenkoKG9iaikgPT5cbiAgICBvYmplY3QoXG4gICAgICBfLm1hcFZhbHVlcyhvYmosICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cmluZygpLnVybCgnQSB2YWxpZCBVUkwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKS5taW4oMSlcbiAgICAgIH0pXG4gICAgKVxuICApXG5cbmV4cG9ydCBjb25zdCB0YXNrTWVudVNjaGVtYSA9IGxhenkoKGZvcm1WYWx1ZXMpID0+IHtcbiAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICBkYXRhOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICBbQkxPQ0tfVFlQRS5FTUFJTF06IGxhenkoKG9iaikgPT5cbiAgICAgICAgb2JqZWN0KFxuICAgICAgICAgIF8ubWFwVmFsdWVzKG9iaiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZygpLmVtYWlsKCdBIHZhbGlkIGVtYWlsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgW0JMT0NLX1RZUEUuTElOS106IHZhbGlkYXRlVXJsRm9ydGFza01lbnVTY2hlbWEoKSxcbiAgICAgIFtCTE9DS19UWVBFLlZJREVPXTogdmFsaWRhdGVVcmxGb3J0YXNrTWVudVNjaGVtYSgpLFxuICAgICAgW0JMT0NLX1RZUEUuSU1BR0VdOiB2YWxpZGF0ZVVybEZvcnRhc2tNZW51U2NoZW1hKCksXG4gICAgICBbQkxPQ0tfVFlQRS5BVURJT106IHZhbGlkYXRlVXJsRm9ydGFza01lbnVTY2hlbWEoKSxcbiAgICAgIFtCTE9DS19UWVBFLkVNQkVEXTogbGF6eSgob2JqKSA9PlxuICAgICAgICBvYmplY3QoXG4gICAgICAgICAgXy5tYXBWYWx1ZXMob2JqLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nKCkubWF0Y2hlcygvXFxiaHR0cHM6XFwvXFwvXFxTKlxcYi8pXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFtCTE9DS19UWVBFLlBERl06IGxhenkoKG9iaikgPT5cbiAgICAgICAgb2JqZWN0KFxuICAgICAgICAgIF8ubWFwVmFsdWVzKG9iaiwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZygpLm1hdGNoZXMoL1xcYmh0dHBzOlxcL1xcL1xcUypcXC5wZGZcXGIvKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBbQkxPQ0tfVFlQRS5EQVRFXTogbGF6eSgob2JqKSA9PlxuICAgICAgICBvYmplY3QoXG4gICAgICAgICAgXy5tYXBWYWx1ZXMob2JqLCAoX2tleSwgaWQpID0+IHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9uYWxDaGFpbihbZm9ybVZhbHVlcywgJ2FjY2VzcycsIF8yID0+IF8yLnJlcXVpcmVkLCAnYWNjZXNzJywgXzMgPT4gXzNbQkxPQ0tfVFlQRS5EQVRFXSwgJ29wdGlvbmFsQWNjZXNzJywgXzQgPT4gXzRbaWRdXSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGUoKS50cmFuc2Zvcm0ocGFyc2VEYXRlU3RyaW5nKS5yZXF1aXJlZCgnQSBWYWxpZCBkYXRlIGlzIHJlcXVpcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgW0JMT0NLX1RZUEUuTkFNRURfRU5USVRZX1JFQ09HTklUSU9OXTogbGF6eSgob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmplY3QoXG4gICAgICAgICAgXy5tYXBWYWx1ZXMob2JqLCAoa2V5LCBpZCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9vcHRpb25hbENoYWluKFtmb3JtVmFsdWVzLCAnYWNjZXNzJywgXzUgPT4gXzUucmVxdWlyZWQsICdhY2Nlc3MnLCBfNiA9PiBfNltCTE9DS19UWVBFLk5BTUVEX0VOVElUWV9SRUNPR05JVElPTl0sICdvcHRpb25hbEFjY2VzcycsIF83ID0+IF83W2lkXV0pKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdHJpbmcoJ0EgdmFsdWUgaXMgcmVxdWlyZWQnKS5udWxsYWJsZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU106IGxhenkoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqZWN0KFxuICAgICAgICAgIF8ubWFwVmFsdWVzKG9iaiwgKGtleSwgaWQpID0+IHtcbiAgICAgICAgICAgIGlmIChfb3B0aW9uYWxDaGFpbihbZm9ybVZhbHVlcywgJ2FjY2VzcycsIF84ID0+IF84LnJlcXVpcmVkLCAnYWNjZXNzJywgXzkgPT4gXzlbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU10sICdvcHRpb25hbEFjY2VzcycsIF8xMCA9PiBfMTBbaWRdXSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogc3RyaW5nKCkudXJsKCdBIHZhbGlkIFVSTCBpcyByZXF1aXJlZCBmb3IgdGhpcyBmaWVsZCcpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICAgIGltYWdlOiBzdHJpbmcoKS51cmwoJ0EgdmFsaWQgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59KVxuXG4vLyBUYXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tTY2hlbWEgPSBvYmplY3QoKS5zaGFwZSh7XG4gIGRhdGE6IGFycmF5KClcbiAgICAub2YoXG4gICAgICBsYXp5KChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICBkYXRhOiBhcnJheSgpXG4gICAgICAgICAgICAgICAgLm9mKFxuICAgICAgICAgICAgICAgICAgbGF6eSgobmVzdGVkT2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRPYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5FTUFJTCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubnVsbGFibGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbCgnQSB2YWxpZCBlbWFpbCBpcyByZXF1aXJlZCBmb3IgdGhpcyBmaWVsZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmVzdGVkT2JqLnR5cGUgPT09IEJMT0NLX1RZUEUuTElOSykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmcoKS5udWxsYWJsZSgpLnVybCgnQSB2YWxpZCBVUkwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBbbmVzdGVkT2JqLnR5cGVdOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtaXhlZCgpLm51bGxhYmxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN0cmljdCgpXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5EQVRFKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1peGVkKCkud2hlbignaXNfcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogZGF0ZSgpLnRyYW5zZm9ybShwYXJzZURhdGVTdHJpbmcpLnJlcXVpcmVkKCdBIFZhbGlkIGRhdGUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgICAgICBvdGhlcndpc2U6IGRhdGUoKS50cmFuc2Zvcm0ocGFyc2VEYXRlU3RyaW5nKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLkVNQUlMKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1peGVkKCkud2hlbignaXNfcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgnQSB2YWx1ZSBpcyByZXF1aXJlZCBmb3Igb25lIG9yIG1vcmUgYmxvY2tzJyksXG4gICAgICAgICAgICAgICAgb3RoZXJ3aXNlOiBzdHJpbmcoKS5udWxsYWJsZSgpLmVtYWlsKCdBIHZhbGlkIGVtYWlsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT04pIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgW29iai50eXBlXTogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICB2YWx1ZTogbWl4ZWQoKS53aGVuKCdpc19yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICBpczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aGVuOiBzdHJpbmcoKS5yZXF1aXJlZCgnQSB2YWx1ZSBpcyByZXF1aXJlZCBmb3Igb25lIG9yIG1vcmUgYmxvY2tzJylcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGVudGl0aWVzOiBtaXhlZCgpLndoZW4oJ2lzX3JlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IGFycmF5KCkudGVzdCgnRmllbGQgaXMgcmVxdWlyZWQnLCAnRmllbGQgaXMgcmVxdWlyZWQnLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfLmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9iai50eXBlID09PSBCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTKSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1peGVkKCkud2hlbignaXNfcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgb2JqZWN0czogYXJyYXkoKS50ZXN0KCdGaWVsZCBpcyByZXF1aXJlZCcsICdGaWVsZCBpcyByZXF1aXJlZCcsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob2JqLnR5cGUgPT09IEJMT0NLX1RZUEUuTElOSykge1xuICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICBbb2JqLnR5cGVdOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgIHZhbHVlOiBtaXhlZCgpLndoZW4oJ2lzX3JlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IHN0cmluZygpXG4gICAgICAgICAgICAgICAgICAubnVsbGFibGUoKVxuICAgICAgICAgICAgICAgICAgLnVybCgpXG4gICAgICAgICAgICAgICAgICAucmVxdWlyZWQoJ0EgdmFsdWUgaXMgcmVxdWlyZWQgZm9yIG9uZSBvciBtb3JlIGJsb2NrcycpLFxuICAgICAgICAgICAgICAgIG90aGVyd2lzZTogc3RyaW5nKCkubnVsbGFibGUoKS51cmwoJ0EgdmFsaWQgVVJMIGlzIHJlcXVpcmVkIGZvciB0aGlzIGZpZWxkJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvYmoudHlwZSA9PT0gQkxPQ0tfVFlQRS5SSUNIX1RFWFQpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IHN0cmluZygpLnJlcXVpcmVkKCdGaWVsZCBJRCBpcyByZXF1aXJlZCcpLFxuICAgICAgICAgICAgbmFtZTogc3RyaW5nKCkucmVxdWlyZWQoJ0ZpZWxkIE5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICAgICAgICAgIFtvYmoudHlwZV06IG9iamVjdCgpLnNoYXBlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1peGVkKCkud2hlbignaXNfcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgaXM6IHRydWUsXG4gICAgICAgICAgICAgICAgdGhlbjogc3RyaW5nKCkucmVxdWlyZWQoJ0EgdmFsdWUgaXMgcmVxdWlyZWQgZm9yIHRoaXMgZmllbGQnKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICBbb2JqLnR5cGVdOiBvYmplY3QoKS5zaGFwZSh7XG4gICAgICAgICAgICAgIGlzX3JlcXVpcmVkOiBib29sZWFuKCksXG4gICAgICAgICAgICAgIHZhbHVlOiBtaXhlZCgpLndoZW4oJ2lzX3JlcXVpcmVkJywge1xuICAgICAgICAgICAgICAgIGlzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IG1peGVkKCkubnVsbGFibGUoKS5yZXF1aXJlZCgnQSB2YWx1ZSBpcyByZXF1aXJlZCBmb3Igb25lIG9yIG1vcmUgYmxvY2tzJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG4gICAgLnJlcXVpcmVkKCdUaGUgYGRhdGFgIGZpZWxkIGlzIHJlcXVpcmVkIG9uIGEgdGFzaycpXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==