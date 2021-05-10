(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardRoot~Queue~TaskRoot"],{

/***/ "./src/client/components/Menu.tsx":
/*!****************************************!*\
  !*** ./src/client/components/Menu.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/Menu.tsx";


const isMenuItem = node => node && node.onClick;

const REACT_ELEMENT = Symbol.for('react.element');

const isReactElement = child => child && child.$$typeof === REACT_ELEMENT;

const MenuStyles = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "e1gy4c0u0"
})({
  name: "whfp88",
  styles: "outline:0;user-select:none;max-height:225px;max-width:600px;padding:0 10px;overflow-x:hidden;"
});

const Menu = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    ariaLabel,
    children,
    className,
    closePortal,
    defaultActiveIdx,
    isDropdown,
    keepParentFocus,
    resetActiveOnChanges,
    portalStatus,
    tabReturns
  } = props;
  const [activeIdx, setActiveIdx] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultActiveIdx || 0);
  const menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const itemHandles = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, () => ({
    handleKeyDown
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (defaultActiveIdx === undefined) {
      const firstMenuItemIdx = itemHandles.current.findIndex(isMenuItem);
      setActiveIdx(Math.max(0, firstMenuItemIdx));

      if (!keepParentFocus) {
        menuRef.current && menuRef.current.focus();
      }
    }
  }, resetActiveOnChanges || []);
  const handleMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (keepParentFocus) e.preventDefault();
  }, [keepParentFocus]);
  const setSafeIdx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(idx => {
    const childArr = itemHandles.current;
    let nextIdx;

    if (activeIdx < idx) {
      for (let ii = idx; ii < childArr.length; ii++) {
        const nextChild = childArr[ii];

        if (isMenuItem(nextChild)) {
          nextIdx = ii;
          break;
        }
      }
    } else if (activeIdx > idx) {
      for (let ii = idx; ii >= 0; ii--) {
        const nextChild = childArr[ii];

        if (isMenuItem(nextChild)) {
          nextIdx = ii;
          break;
        } else {
          const {
            current
          } = menuRef;
          if (!current) return;
          const el = current.parentElement || current; // if we're at the top & there's a header, put the header into view

          el.scrollTo(0, 0);
        }
      }
    }

    if (nextIdx === null || nextIdx === undefined || nextIdx === activeIdx || nextIdx < 0 || nextIdx >= childArr.length) {
      return;
    }

    setActiveIdx(nextIdx);
  }, [activeIdx]);
  const makeSmartChildren = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(children => {
    /**
     * toArray removes bools whereas map does not.
     * Use the filter to remove possible portals
     */
    const childArr = react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(children);
    return childArr.map((child, idx) => {
      if (!child) return null;
      if (!isReactElement(child)) return child; // overloading a ref callback with useful props means intermediary components only need to forward the ref

      const ref = c => {
        itemHandles.current[idx] = c;
      };

      ref.closePortal = closePortal; // ref.isActive = activeIdx === idx

      ref.activate = () => setSafeIdx(idx);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
        key: `mi${child.key || child}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
        ref
      }));
    });
  }, [activeIdx, setSafeIdx, closePortal, isDropdown, portalStatus]);
  const handleKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSafeIdx(activeIdx + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSafeIdx(activeIdx - 1);
    } else if (e.key === 'Enter' || tabReturns && e.key === 'Tab') {
      e.preventDefault();
      const itemHandle = itemHandles.current[activeIdx];
      itemHandle && itemHandle.onClick(e);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      closePortal();
    }

    return e.defaultPrevented;
  }, [activeIdx, tabReturns, closePortal, setSafeIdx]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuStyles, {
    role: "menu",
    'aria-label': ariaLabel,
    className: className,
    tabIndex: -1,
    onMouseDown: handleMouseDown,
    onKeyDown: handleKeyDown,
    ref: menuRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, makeSmartChildren(children));
});
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/client/components/MenuContents.tsx":
/*!************************************************!*\
  !*** ./src/client/components/MenuContents.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/usePortal */ "./src/client/hooks/usePortal.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const animations = portalStatus => {
  switch (portalStatus) {
    case _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Mounted:
      return {
        opacity: 0
      };

    case _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Entering:
    case _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Entered:
      return {
        opacity: 1,
        transition: `opacity 188ms cubic-bezier(0, 0, .2, 1)`
      };

    case _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Exiting:
      return {
        opacity: 0,
        transition: `opacity 120ms cubic-bezier(0, 0, .2, 1)`
      };

    default:
      return {};
  }
};

const MenuContents = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "e1ig0vs10"
})(({
  minWidth,
  menuContentStyles = {},
  portalStatus
}) => _objectSpread(_objectSpread({
  borderRadius: utils_constants__WEBPACK_IMPORTED_MODULE_1__["Radius"].MENU,
  outline: 0,
  overflowY: portalStatus >= _hooks_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Entered ? 'auto' : 'hidden',
  paddingBottom: 8,
  paddingTop: 8,
  textAlign: 'left',
  width: '100%',
  opacity: 0,
  transition: `opacity 100ms cubic-bezier(0, 0, .2, 1)`,
  minWidth
}, animations(portalStatus)), menuContentStyles));

/* harmony default export */ __webpack_exports__["default"] = (MenuContents);

/***/ }),

/***/ "./src/client/components/MenuItem.tsx":
/*!********************************************!*\
  !*** ./src/client/components/MenuItem.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuItemLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItemLabel */ "./src/client/components/MenuItemLabel.tsx");
/* harmony import */ var styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/palette */ "./src/client/styles/palette.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/components/MenuItem.tsx";




const MenuItemStyles = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "e1mw5l1u0"
})(({
  isActive,
  isDisabled,
  extraSpace
}) => ({
  borderRadius: 4,
  alignItems: 'center',
  backgroundColor: isActive ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_LIGHT_GRAY : undefined,
  color: isDisabled ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_GRAY : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].TEXT_MAIN,
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  display: 'block',
  marginTop: extraSpace ? 10 : 0,
  borderRadius: 4,
  '&:hover,:focus': {
    backgroundColor: isActive ? styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER : styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].BACKGROUND_HOVER_LIGHT,
    outline: 0
  }
}));

const MenuItem = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((props, ref) => {
  const {
    isDisabled,
    label,
    noCloseOnClick,
    onMouseEnter,
    onClick,
    isActive,
    extraSpace
  } = props;
  const itemRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    activate,
    closePortal
  } = ref;

  const handleClick = e => {
    if (isDisabled) return;

    if (noCloseOnClick) {
      activate();
    } else if (closePortal) {
      closePortal();
    }

    if (onClick) {
      onClick(e);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, () => ({
    onClick: handleClick
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuItemStyles, {
    isDisabled: isDisabled,
    role: "menuitem",
    ref: itemRef,
    isActive: isActive,
    extraSpace: extraSpace,
    onClick: handleClick,
    onMouseEnter: onMouseEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, typeof label === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItemLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, label) : label);
});
/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./src/client/components/MenuItemLabel.tsx":
/*!*************************************************!*\
  !*** ./src/client/components/MenuItemLabel.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/styles/helpers/textOverflow */ "./src/universal/styles/helpers/textOverflow.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MenuItemLabel = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e14wx8u0"
})(_objectSpread(_objectSpread({}, universal_styles_helpers_textOverflow__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  fontSize: 14,
  lineHeight: '24px',
  padding: `4px 15px 4px 15px`
}));

/* harmony default export */ __webpack_exports__["default"] = (MenuItemLabel);

/***/ }),

/***/ "./src/client/hooks/MenuBackground.ts":
/*!********************************************!*\
  !*** ./src/client/hooks/MenuBackground.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var _useCoords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var _usePortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePortal */ "./src/client/hooks/usePortal.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const transformOrigins = {
  [_useCoords__WEBPACK_IMPORTED_MODULE_2__["MenuPosition"].UPPER_RIGHT]: 'top right',
  [_useCoords__WEBPACK_IMPORTED_MODULE_2__["MenuPosition"].UPPER_LEFT]: 'top left',
  [_useCoords__WEBPACK_IMPORTED_MODULE_2__["MenuPosition"].LOWER_LEFT]: 'bottom left',
  [_useCoords__WEBPACK_IMPORTED_MODULE_2__["MenuPosition"].LOWER_RIGHT]: 'bottom right'
};

const backgroundStyles = (portalStatus, isDropdown) => {
  switch (portalStatus) {
    case _usePortal__WEBPACK_IMPORTED_MODULE_3__["PortalStatus"].Entering:
    case _usePortal__WEBPACK_IMPORTED_MODULE_3__["PortalStatus"].Entered:
      return {
        opacity: 1,
        transform: isDropdown ? 'scaleY(1)' : 'scale(1)',
        transition: `all 188ms cubic-bezier(0, 0, .2, 1)`
      };

    case _usePortal__WEBPACK_IMPORTED_MODULE_3__["PortalStatus"].Exiting:
      return {
        opacity: 0,
        transition: `all 120ms cubic-bezier(0, 0, .2, 1)`
      };

    case _usePortal__WEBPACK_IMPORTED_MODULE_3__["PortalStatus"].Mounted:
      return {
        transform: isDropdown ? 'scaleY(0)' : 'scale(0)'
      };

    default:
      return {};
  }
};

const MenuBackground = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
  target: "e1mvh3070"
})(({
  menuPosition,
  portalStatus,
  isDropdown
}) => _objectSpread({
  background: '#fff',
  height: '100%',
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: utils_constants__WEBPACK_IMPORTED_MODULE_1__["Radius"].MENU,
  boxShadow: utils_constants__WEBPACK_IMPORTED_MODULE_1__["BoxShadow"].MENU,
  position: 'absolute',
  zIndex: -1,
  transformOrigin: transformOrigins[menuPosition]
}, backgroundStyles(portalStatus, isDropdown)));

/* harmony default export */ __webpack_exports__["default"] = (MenuBackground);

/***/ }),

/***/ "./src/client/hooks/useCoords.ts":
/*!***************************************!*\
  !*** ./src/client/hooks/useCoords.ts ***!
  \***************************************/
/*! exports provided: MenuPosition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPosition", function() { return MenuPosition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useRefState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRefState */ "./src/client/hooks/useRefState.ts");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useResizeObserver */ "./src/client/hooks/useResizeObserver.ts");
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




var MenuPosition;

(function (MenuPosition) {
  const UPPER_LEFT = 0;
  MenuPosition[MenuPosition["UPPER_LEFT"] = UPPER_LEFT] = "UPPER_LEFT";
  const UPPER_RIGHT = UPPER_LEFT + 1;
  MenuPosition[MenuPosition["UPPER_RIGHT"] = UPPER_RIGHT] = "UPPER_RIGHT";
  const UPPER_CENTER = UPPER_RIGHT + 1;
  MenuPosition[MenuPosition["UPPER_CENTER"] = UPPER_CENTER] = "UPPER_CENTER";
  const LOWER_LEFT = UPPER_CENTER + 1;
  MenuPosition[MenuPosition["LOWER_LEFT"] = LOWER_LEFT] = "LOWER_LEFT";
  const LOWER_RIGHT = LOWER_LEFT + 1;
  MenuPosition[MenuPosition["LOWER_RIGHT"] = LOWER_RIGHT] = "LOWER_RIGHT";
  const LOWER_CENTER = LOWER_RIGHT + 1;
  MenuPosition[MenuPosition["LOWER_CENTER"] = LOWER_CENTER] = "LOWER_CENTER";
})(MenuPosition || (MenuPosition = {}));

const getOffset = (orientation, fullWidth) => {
  if (orientation === 'center') {
    return fullWidth / 2;
  } else if (orientation === 'right' || orientation === 'bottom') {
    return fullWidth;
  }

  return 0;
};

const anchorLookup = {
  [MenuPosition.UPPER_LEFT]: {
    targetAnchor: {
      horizontal: 'left',
      vertical: 'top'
    },
    originAnchor: {
      horizontal: 'left',
      vertical: 'bottom'
    }
  },
  [MenuPosition.UPPER_RIGHT]: {
    targetAnchor: {
      horizontal: 'right',
      vertical: 'top'
    },
    originAnchor: {
      horizontal: 'right',
      vertical: 'bottom'
    }
  },
  [MenuPosition.UPPER_CENTER]: {
    targetAnchor: {
      horizontal: 'center',
      vertical: 'top'
    },
    originAnchor: {
      horizontal: 'center',
      vertical: 'bottom'
    }
  },
  [MenuPosition.LOWER_LEFT]: {
    targetAnchor: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    originAnchor: {
      horizontal: 'left',
      vertical: 'top'
    }
  },
  [MenuPosition.LOWER_RIGHT]: {
    targetAnchor: {
      horizontal: 'right',
      vertical: 'bottom'
    },
    originAnchor: {
      horizontal: 'right',
      vertical: 'top'
    }
  },
  [MenuPosition.LOWER_CENTER]: {
    targetAnchor: {
      horizontal: 'center',
      vertical: 'bottom'
    },
    originAnchor: {
      horizontal: 'center',
      vertical: 'top'
    }
  }
};
const lowerLookup = {
  [MenuPosition.UPPER_LEFT]: MenuPosition.LOWER_LEFT,
  [MenuPosition.UPPER_RIGHT]: MenuPosition.LOWER_RIGHT
};
const MENU_PADDING = 4;

const getNextCoords = (targetBBox, originBBox, preferredMenuPosition) => {
  const {
    height: modalHeight,
    width: modalWidth
  } = targetBBox;
  const {
    height: originHeight,
    width: originWidth,
    left: originLeft,
    top: originTop
  } = originBBox;
  const {
    originAnchor,
    targetAnchor
  } = anchorLookup[preferredMenuPosition];
  const nextCoords = {};
  const originLeftOffset = getOffset(originAnchor.horizontal, originWidth);
  const {
    scrollX,
    scrollY,
    innerHeight
  } = window; // Do not use window.innerWidth because that does not account for the scrollbar width

  const pageWidth = document.documentElement.clientWidth;

  if (targetAnchor.horizontal !== 'right') {
    const targetLeftOffset = getOffset(targetAnchor.horizontal, modalWidth);
    const left = scrollX + originLeft + originLeftOffset - targetLeftOffset;
    const maxLeft = pageWidth - modalWidth + scrollX;
    nextCoords.left = Math.min(left, maxLeft);
  } else {
    const right = pageWidth - (originLeft + originLeftOffset) - scrollX;
    const maxRight = pageWidth - modalWidth - scrollX;
    nextCoords.right = Math.min(right, maxRight);
  }

  if (targetAnchor.vertical !== 'bottom') {
    const originTopOffset = getOffset(originAnchor.vertical, originHeight);
    const targetTopOffset = getOffset(targetAnchor.vertical, modalHeight);
    const top = scrollY + originTop + originTopOffset - targetTopOffset;
    const isBelow = top + modalHeight < innerHeight + scrollY;

    if (isBelow) {
      nextCoords.top = top + MENU_PADDING;
    }
  }

  const menuPosition = nextCoords.top === undefined && lowerLookup[preferredMenuPosition] || preferredMenuPosition; // if by choice or circumstance, put it above & anchor it from the bottom

  if (nextCoords.top === undefined) {
    const bottom = innerHeight - originTop - scrollY;
    const maxBottom = innerHeight - modalHeight + scrollY;
    nextCoords.bottom = Math.min(bottom, maxBottom) + MENU_PADDING;
  }

  return {
    coords: nextCoords,
    menuPosition
  };
};

const useWindowResize = (coordsRef, currentTargetRef, setCoords) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const resizeWindow = () => {
      const {
        coords,
        menuPosition
      } = coordsRef.current;

      if (currentTargetRef && ('right' in coords || 'bottom' in coords)) {
        const targetCoords = currentTargetRef.getBoundingClientRect();
        setCoords({
          coords: {
            left: targetCoords.left,
            top: targetCoords.top
          },
          menuPosition
        });
      }
    };

    window.addEventListener('resize', resizeWindow, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [coordsRef, currentTargetRef, setCoords]);
};

const useCoords = (preferredMenuPosition, options = {}) => {
  const targetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const originRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [coordsRef, setCoords] = Object(_useRefState__WEBPACK_IMPORTED_MODULE_1__["default"])({
    coords: {
      left: 0,
      top: 0
    },
    menuPosition: preferredMenuPosition
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (!targetRef.current || !originRef.current) return; // Bounding adjustments mimic native (flip from below to above for Y, but adjust pixel-by-pixel for X)

    const targetBBox = _optionalChain([targetRef, 'access', _ => _.current, 'optionalAccess', _2 => _2.getBoundingClientRect, 'call', _3 => _3()]);

    const originBBox = _optionalChain([originRef, 'access', _4 => _4.current, 'optionalAccess', _5 => _5.getBoundingClientRect, 'call', _6 => _6()]);

    if (targetBBox && originBBox) {
      const coordState = getNextCoords(targetBBox, originBBox, preferredMenuPosition);
      setCoords(coordState);
    }
  }, [targetRef.current, setCoords, options.originCoords, preferredMenuPosition, options.portalStatus]);
  Object(_useResizeObserver__WEBPACK_IMPORTED_MODULE_2__["default"])(targetRef.current, () => {
    const targetBBox = _optionalChain([targetRef, 'access', _7 => _7.current, 'optionalAccess', _8 => _8.getBoundingClientRect, 'call', _9 => _9()]);

    const originBBox = _optionalChain([originRef, 'access', _10 => _10.current, 'optionalAccess', _11 => _11.getBoundingClientRect, 'call', _12 => _12()]);

    if (targetBBox && originBBox) {
      const coordState = getNextCoords(targetBBox, originBBox, preferredMenuPosition);
      setCoords(coordState);
    }
  });
  useWindowResize(coordsRef, targetRef.current, setCoords);
  const {
    coords,
    menuPosition
  } = coordsRef.current;
  return {
    targetRef,
    originRef,
    coords,
    menuPosition
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useCoords);

/***/ }),

/***/ "./src/client/hooks/useMenu.ts":
/*!*************************************!*\
  !*** ./src/client/hooks/useMenu.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getBBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBBox */ "./src/client/utils/getBBox.ts");
/* harmony import */ var _useMenuPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMenuPortal */ "./src/client/hooks/useMenuPortal.tsx");
/* harmony import */ var _usePortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePortal */ "./src/client/hooks/usePortal.tsx");
/* harmony import */ var _useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCoords */ "./src/client/hooks/useCoords.ts");
/* harmony import */ var _useLoadingDelay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useLoadingDelay */ "./src/client/hooks/useLoadingDelay.ts");







const useMenu = (preferredMenuPosition, options = {}) => {
  const {
    onOpen,
    onClose,
    id,
    parentId,
    originCoords,
    menuContentStyles,
    menuContentRef
  } = options;
  const isDropdown = !!options.isDropdown;
  const {
    targetRef,
    originRef,
    coords,
    menuPosition
  } = Object(_useCoords__WEBPACK_IMPORTED_MODULE_4__["default"])(preferredMenuPosition, {
    originCoords
  });

  if (originCoords) {
    ;
    originRef.current = {
      getBoundingClientRect: () => originCoords
    };
  }

  const {
    portal,
    closePortal,
    togglePortal,
    portalStatus,
    setPortalStatus,
    openPortal
  } = Object(_usePortal__WEBPACK_IMPORTED_MODULE_3__["default"])({
    id,
    onOpen,
    onClose,
    parentId
  });
  const loadingWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (options.loadingWidth) return options.loadingWidth;
    const bbox = Object(_utils_getBBox__WEBPACK_IMPORTED_MODULE_1__["default"])(originRef.current);
    return Math.max(40, bbox ? bbox.width : 40);
  }, [originRef.current]);
  const {
    loadingDelay,
    loadingDelayRef
  } = Object(_useLoadingDelay__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const menuPortal = Object(_useMenuPortal__WEBPACK_IMPORTED_MODULE_2__["default"])(portal, targetRef, loadingWidth, coords, portalStatus, setPortalStatus, isDropdown, menuPosition, loadingDelayRef, menuContentStyles, menuContentRef);
  const menuProps = {
    portalStatus,
    closePortal,
    isDropdown
  };
  return {
    togglePortal,
    originRef,
    menuPortal,
    menuProps,
    loadingDelay,
    loadingWidth,
    portalStatus,
    openPortal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMenu);

/***/ }),

/***/ "./src/client/hooks/useMenuPortal.tsx":
/*!********************************************!*\
  !*** ./src/client/hooks/useMenuPortal.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _usePortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePortal */ "./src/client/hooks/usePortal.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/constants */ "./src/client/utils/constants.ts");
/* harmony import */ var _MenuBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuBackground */ "./src/client/hooks/MenuBackground.ts");
/* harmony import */ var _components_MenuContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MenuContents */ "./src/client/components/MenuContents.tsx");
/* harmony import */ var components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ErrorBoundary */ "./src/client/components/ErrorBoundary.tsx");
/* harmony import */ var components_LoadingComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/LoadingComponent */ "./src/client/components/LoadingComponent.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/client/hooks/useMenuPortal.tsx";








const MenuBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e1wydov10"
})({
  position: 'absolute',
  zIndex: utils_constants__WEBPACK_IMPORTED_MODULE_3__["ZIndex"].MENU
});

const useMenuPortal = (portal, targetRef, minWidth, coords, portalStatus, setPortalStatus, isDropdown, menuPosition, loadingDelayRef, menuContentStyles = {}, menuContentRef) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let isMounted = true;

    if (portalStatus === _usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Entering) {
      setTimeout(() => {
        if (isMounted) {
          setPortalStatus(_usePortal__WEBPACK_IMPORTED_MODULE_2__["PortalStatus"].Entered);
        }
      }, utils_constants__WEBPACK_IMPORTED_MODULE_3__["Duration"].MENU_OPEN_MAX);
    }

    return () => {
      isMounted = false;
    };
  }, [portalStatus, setPortalStatus]);
  return reactEl => {
    return portal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBlock, {
      ref: targetRef,
      style: _objectSpread({}, coords),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menuPosition: menuPosition,
      portalStatus: portalStatus,
      isDropdown: isDropdown,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuContents__WEBPACK_IMPORTED_MODULE_5__["default"], {
      minWidth: minWidth,
      portalStatus: portalStatus,
      menuContentStyles: menuContentStyles,
      ref: menuContentRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_LoadingComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        loadingDelayRef: loadingDelayRef,
        width: minWidth,
        showAfter: 0,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, reactEl)))));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useMenuPortal);

/***/ }),

/***/ "./src/client/hooks/useResizeObserver.ts":
/*!***********************************************!*\
  !*** ./src/client/hooks/useResizeObserver.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventCallback */ "./src/client/hooks/useEventCallback.ts");



const ResizeObserver = window.ResizeObserver || resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"];

const useResizeObserver = (el, cb) => {
  const eventCb = Object(_useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"])(cb);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!el) return;
    const resizeObserver = new ResizeObserver(eventCb);
    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
    };
  }, [el, eventCb]);
};

/* harmony default export */ __webpack_exports__["default"] = (useResizeObserver);

/***/ }),

/***/ "./src/client/utils/getBBox.ts":
/*!*************************************!*\
  !*** ./src/client/utils/getBBox.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cache = new Map();
let timer;

const getBBox = el => {
  if (!el || !('getBoundingClientRect' in el)) return null;

  if (!cache.has(el)) {
    const {
      height,
      width,
      top,
      left
    } = el.getBoundingClientRect();
    cache.set(el, {
      height,
      width,
      top,
      left
    });

    if (!timer) {
      timer = setTimeout(() => {
        timer = undefined;
        cache.clear();
      });
    }
  }

  return cache.get(el) || null;
};

/* harmony default export */ __webpack_exports__["default"] = (getBBox);

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

/***/ "./src/universal/components/PrimaryButton.tsx":
/*!****************************************************!*\
  !*** ./src/universal/components/PrimaryButton.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const PrimaryButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(_client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e1jbkvpx0"
})(props => {
  const {
    hideFocus
  } = props; //const isDisabled = disabled || waiting

  return _objectSpread({
    width: 'fit-content',
    lineHeight: '22px',
    color: '#fff',
    backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN,
    fontWeight: 500,
    fontSize: 14,
    outline: 0,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    margin: 0,
    borderRadius: 4,
    border: `1px solid transparent`,
    transition: 'all 0.25s ease-in-out',
    padding: '0 10px',
    ':hover': {
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  }, !hideFocus && {
    ':focus, :active': {
      backgroundColor: universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK,
      border: `1px solid ${universal_styles_palette__WEBPACK_IMPORTED_MODULE_2__["PALETTE"].PRIMARY_MAIN_DARK}`
    }
  });
});

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/universal/styles/helpers/textOverflow.ts":
/*!******************************************************!*\
  !*** ./src/universal/styles/helpers/textOverflow.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const textOverflow = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
/* harmony default export */ __webpack_exports__["default"] = (textOverflow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL01lbnVDb250ZW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL01lbnVJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUl0ZW1MYWJlbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ob29rcy9NZW51QmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2hvb2tzL3VzZUNvb3Jkcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2hvb2tzL3VzZU1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9ob29rcy91c2VNZW51UG9ydGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2hvb2tzL3VzZVJlc2l6ZU9ic2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvdXRpbHMvZ2V0QkJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL2NvbXBvbmVudHMvSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9jb21wb25lbnRzL1ByaW1hcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93LnRzIiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvc3R5bGVzL3R5cG9ncmFwaHkudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiaXNNZW51SXRlbSIsIm5vZGUiLCJvbkNsaWNrIiwiUkVBQ1RfRUxFTUVOVCIsIlN5bWJvbCIsImZvciIsImlzUmVhY3RFbGVtZW50IiwiY2hpbGQiLCIkJHR5cGVvZiIsIk1lbnVTdHlsZXMiLCJNZW51IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiYXJpYUxhYmVsIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjbG9zZVBvcnRhbCIsImRlZmF1bHRBY3RpdmVJZHgiLCJpc0Ryb3Bkb3duIiwia2VlcFBhcmVudEZvY3VzIiwicmVzZXRBY3RpdmVPbkNoYW5nZXMiLCJwb3J0YWxTdGF0dXMiLCJ0YWJSZXR1cm5zIiwiYWN0aXZlSWR4Iiwic2V0QWN0aXZlSWR4IiwidXNlU3RhdGUiLCJtZW51UmVmIiwidXNlUmVmIiwiaXRlbUhhbmRsZXMiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiaGFuZGxlS2V5RG93biIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsImZpcnN0TWVudUl0ZW1JZHgiLCJjdXJyZW50IiwiZmluZEluZGV4IiwiTWF0aCIsIm1heCIsImZvY3VzIiwiaGFuZGxlTW91c2VEb3duIiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTYWZlSWR4IiwiaWR4IiwiY2hpbGRBcnIiLCJuZXh0SWR4IiwiaWkiLCJsZW5ndGgiLCJuZXh0Q2hpbGQiLCJlbCIsInBhcmVudEVsZW1lbnQiLCJzY3JvbGxUbyIsIm1ha2VTbWFydENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwibWFwIiwiYyIsImFjdGl2YXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjbG9uZUVsZW1lbnQiLCJpdGVtSGFuZGxlIiwiZGVmYXVsdFByZXZlbnRlZCIsInJvbGUiLCJ0YWJJbmRleCIsIm9uTW91c2VEb3duIiwib25LZXlEb3duIiwiYW5pbWF0aW9ucyIsIlBvcnRhbFN0YXR1cyIsIk1vdW50ZWQiLCJvcGFjaXR5IiwiRW50ZXJpbmciLCJFbnRlcmVkIiwidHJhbnNpdGlvbiIsIkV4aXRpbmciLCJNZW51Q29udGVudHMiLCJtaW5XaWR0aCIsIm1lbnVDb250ZW50U3R5bGVzIiwiYm9yZGVyUmFkaXVzIiwiUmFkaXVzIiwiTUVOVSIsIm91dGxpbmUiLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsIndpZHRoIiwiTWVudUl0ZW1TdHlsZXMiLCJpc0FjdGl2ZSIsImlzRGlzYWJsZWQiLCJleHRyYVNwYWNlIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIlBBTEVUVEUiLCJCQUNLR1JPVU5EX0xJR0hUX0dSQVkiLCJjb2xvciIsIlRFWFRfR1JBWSIsIlRFWFRfTUFJTiIsImN1cnNvciIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJCQUNLR1JPVU5EX0hPVkVSIiwiQkFDS0dST1VORF9IT1ZFUl9MSUdIVCIsIk1lbnVJdGVtIiwibGFiZWwiLCJub0Nsb3NlT25DbGljayIsIm9uTW91c2VFbnRlciIsIml0ZW1SZWYiLCJoYW5kbGVDbGljayIsIk1lbnVJdGVtTGFiZWwiLCJ0ZXh0T3ZlcmZsb3ciLCJmbGV4IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsInRyYW5zZm9ybU9yaWdpbnMiLCJNZW51UG9zaXRpb24iLCJVUFBFUl9SSUdIVCIsIlVQUEVSX0xFRlQiLCJMT1dFUl9MRUZUIiwiTE9XRVJfUklHSFQiLCJiYWNrZ3JvdW5kU3R5bGVzIiwidHJhbnNmb3JtIiwiTWVudUJhY2tncm91bmQiLCJtZW51UG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiYm94U2hhZG93IiwiQm94U2hhZG93IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJfb3B0aW9uYWxDaGFpbiIsIm9wcyIsImxhc3RBY2Nlc3NMSFMiLCJ2YWx1ZSIsImkiLCJvcCIsImZuIiwiYXJncyIsImNhbGwiLCJVUFBFUl9DRU5URVIiLCJMT1dFUl9DRU5URVIiLCJnZXRPZmZzZXQiLCJvcmllbnRhdGlvbiIsImZ1bGxXaWR0aCIsImFuY2hvckxvb2t1cCIsInRhcmdldEFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsIm9yaWdpbkFuY2hvciIsImxvd2VyTG9va3VwIiwiTUVOVV9QQURESU5HIiwiZ2V0TmV4dENvb3JkcyIsInRhcmdldEJCb3giLCJvcmlnaW5CQm94IiwicHJlZmVycmVkTWVudVBvc2l0aW9uIiwibW9kYWxIZWlnaHQiLCJtb2RhbFdpZHRoIiwib3JpZ2luSGVpZ2h0Iiwib3JpZ2luV2lkdGgiLCJsZWZ0Iiwib3JpZ2luTGVmdCIsInRvcCIsIm9yaWdpblRvcCIsIm5leHRDb29yZHMiLCJvcmlnaW5MZWZ0T2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsIndpbmRvdyIsInBhZ2VXaWR0aCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ0YXJnZXRMZWZ0T2Zmc2V0IiwibWF4TGVmdCIsIm1pbiIsInJpZ2h0IiwibWF4UmlnaHQiLCJvcmlnaW5Ub3BPZmZzZXQiLCJ0YXJnZXRUb3BPZmZzZXQiLCJpc0JlbG93IiwiYm90dG9tIiwibWF4Qm90dG9tIiwiY29vcmRzIiwidXNlV2luZG93UmVzaXplIiwiY29vcmRzUmVmIiwiY3VycmVudFRhcmdldFJlZiIsInNldENvb3JkcyIsInJlc2l6ZVdpbmRvdyIsInRhcmdldENvb3JkcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUNvb3JkcyIsIm9wdGlvbnMiLCJ0YXJnZXRSZWYiLCJvcmlnaW5SZWYiLCJ1c2VSZWZTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsIl8iLCJfMiIsIl8zIiwiXzQiLCJfNSIsIl82IiwiY29vcmRTdGF0ZSIsIm9yaWdpbkNvb3JkcyIsInVzZVJlc2l6ZU9ic2VydmVyIiwiXzciLCJfOCIsIl85IiwiXzEwIiwiXzExIiwiXzEyIiwidXNlTWVudSIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJpZCIsInBhcmVudElkIiwibWVudUNvbnRlbnRSZWYiLCJwb3J0YWwiLCJ0b2dnbGVQb3J0YWwiLCJzZXRQb3J0YWxTdGF0dXMiLCJvcGVuUG9ydGFsIiwidXNlUG9ydGFsIiwibG9hZGluZ1dpZHRoIiwidXNlTWVtbyIsImJib3giLCJnZXRCQm94IiwibG9hZGluZ0RlbGF5IiwibG9hZGluZ0RlbGF5UmVmIiwidXNlTG9hZGluZ0RlbGF5IiwibWVudVBvcnRhbCIsInVzZU1lbnVQb3J0YWwiLCJtZW51UHJvcHMiLCJNZW51QmxvY2siLCJaSW5kZXgiLCJpc01vdW50ZWQiLCJzZXRUaW1lb3V0IiwiRHVyYXRpb24iLCJNRU5VX09QRU5fTUFYIiwicmVhY3RFbCIsInN0eWxlIiwiRXJyb3JCb3VuZGFyeSIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJMb2FkaW5nQ29tcG9uZW50Iiwic2hvd0FmdGVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlclBvbHlmaWxsIiwiY2IiLCJldmVudENiIiwidXNlRXZlbnRDYWxsYmFjayIsInJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJjYWNoZSIsIk1hcCIsInRpbWVyIiwiaGFzIiwic2V0IiwiY2xlYXIiLCJnZXQiLCJJY29uIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJJQ09OX1NJWkUiLCJNRDI0IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3b3JkV3JhcCIsIndoaXRlU3BhY2UiLCJkaXJlY3Rpb24iLCJXZWJraXRGb250U21vb3RoaW5nIiwidGV4dFJlbmRlcmluZyIsIm1vek9zeEZvbnRTbW9vdGhpbmciLCJmb250RmVhdHVyZVNldHRpbmdzIiwiUHJpbWFyeUJ1dHRvbiIsIlBsYWluQnV0dG9uIiwiaGlkZUZvY3VzIiwiUFJJTUFSWV9NQUlOIiwibWFyZ2luIiwiYm9yZGVyIiwiUFJJTUFSWV9NQUlOX0RBUksiLCJvdmVyZmxvdyIsIkZPTlRfRkFNSUxZIiwiU0FOU19TRVJJRiIsIk1PTk9TUEFDRSIsIk1EMTYiLCJNRDE4IiwiTUQyMiIsIk1EMzYiLCJNRDQ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxN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OUMsUUFBTUMsVUFBVSxHQUFHLG9HQUFuQjtBQUF5SEQsYUFBVyxDQUFDLFlBQUQsQ0FBWCxHQUE0QkMsVUFBNUI7QUFDekgsUUFBTUMsU0FBUyxHQUFHLDREQUFsQjtBQUFnRkYsYUFBVyxDQUFDLFdBQUQsQ0FBWCxHQUEyQkUsU0FBM0I7QUFDakYsQ0FIdUIsRUFHckJGLFdBQVcsS0FBS0EsV0FBVyxHQUFHLEVBQW5CLENBSFU7O0FBS2pCLElBQUluQixTQUFKOztBQUFlLENBQUMsVUFBVUEsU0FBVixFQUFxQjtBQUMxQyxRQUFNc0IsSUFBSSxHQUFHLE1BQWI7QUFBcUJ0QixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9Cc0IsSUFBcEI7QUFDckIsUUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFBcUJ2QixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CdUIsSUFBcEI7QUFDckIsUUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFBcUJ4QixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9Cd0IsSUFBcEI7QUFDckIsUUFBTXZCLElBQUksR0FBRyxNQUFiO0FBQXFCRCxXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CQyxJQUFwQjtBQUNyQixRQUFNd0IsSUFBSSxHQUFHLE1BQWI7QUFBcUJ6QixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CeUIsSUFBcEI7QUFDckIsUUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFBcUIxQixXQUFTLENBQUMsTUFBRCxDQUFULEdBQW9CMEIsSUFBcEI7QUFDdEIsQ0FQcUIsRUFPbkIxQixTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQVBVLEUiLCJmaWxlIjoiRGFzaGJvYXJkUm9vdH5RdWV1ZX5UYXNrUm9vdF8yM2Q4NzYyNGJmMDQwZGM5YmQ0Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9NZW51LnRzeFwiO2ltcG9ydCBSZWFjdCwge1xuICBDaGlsZHJlbixcbiAgY2xvbmVFbGVtZW50LFxuICBmb3J3YXJkUmVmLFxuXG5cbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZVxufSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5cbmNvbnN0IGlzTWVudUl0ZW0gPSAobm9kZSkgPT4gbm9kZSAmJiBub2RlLm9uQ2xpY2tcbmNvbnN0IFJFQUNUX0VMRU1FTlQgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JylcbmNvbnN0IGlzUmVhY3RFbGVtZW50ID0gKGNoaWxkKSA9PiBjaGlsZCAmJiBjaGlsZC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVFxuXG5jb25zdCBNZW51U3R5bGVzID0gc3R5bGVkKCdkaXYnKSh7XG4gIG91dGxpbmU6IDAsXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgbWF4SGVpZ2h0OiAyMjUsXG4gIG1heFdpZHRoOiA2MDAsXG4gIHBhZGRpbmc6ICcwIDEwcHgnLFxuICBvdmVyZmxvd1g6ICdoaWRkZW4nXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IE1lbnUgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhcmlhTGFiZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGNsb3NlUG9ydGFsLFxuICAgIGRlZmF1bHRBY3RpdmVJZHgsXG4gICAgaXNEcm9wZG93bixcbiAgICBrZWVwUGFyZW50Rm9jdXMsXG4gICAgcmVzZXRBY3RpdmVPbkNoYW5nZXMsXG4gICAgcG9ydGFsU3RhdHVzLFxuICAgIHRhYlJldHVybnNcbiAgfSA9IHByb3BzXG4gIGNvbnN0IFthY3RpdmVJZHgsIHNldEFjdGl2ZUlkeF0gPSB1c2VTdGF0ZShkZWZhdWx0QWN0aXZlSWR4IHx8IDApXG4gIGNvbnN0IG1lbnVSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgaXRlbUhhbmRsZXMgPSB1c2VSZWYoW10pXG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgaGFuZGxlS2V5RG93blxuICB9KSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWZhdWx0QWN0aXZlSWR4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWVudUl0ZW1JZHggPSBpdGVtSGFuZGxlcy5jdXJyZW50LmZpbmRJbmRleChpc01lbnVJdGVtKVxuICAgICAgc2V0QWN0aXZlSWR4KE1hdGgubWF4KDAsIGZpcnN0TWVudUl0ZW1JZHgpKVxuICAgICAgaWYgKCFrZWVwUGFyZW50Rm9jdXMpIHtcbiAgICAgICAgbWVudVJlZi5jdXJyZW50ICYmIG1lbnVSZWYuY3VycmVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICB9LCByZXNldEFjdGl2ZU9uQ2hhbmdlcyB8fCBbXSlcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGtlZXBQYXJlbnRGb2N1cykgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSxcbiAgICBba2VlcFBhcmVudEZvY3VzXVxuICApXG5cbiAgY29uc3Qgc2V0U2FmZUlkeCA9IHVzZUNhbGxiYWNrKFxuICAgIChpZHgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkQXJyID0gaXRlbUhhbmRsZXMuY3VycmVudFxuICAgICAgbGV0IG5leHRJZHhcbiAgICAgIGlmIChhY3RpdmVJZHggPCBpZHgpIHtcbiAgICAgICAgZm9yIChsZXQgaWkgPSBpZHg7IGlpIDwgY2hpbGRBcnIubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgY29uc3QgbmV4dENoaWxkID0gY2hpbGRBcnJbaWldXG4gICAgICAgICAgaWYgKGlzTWVudUl0ZW0obmV4dENoaWxkKSkge1xuICAgICAgICAgICAgbmV4dElkeCA9IGlpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVJZHggPiBpZHgpIHtcbiAgICAgICAgZm9yIChsZXQgaWkgPSBpZHg7IGlpID49IDA7IGlpLS0pIHtcbiAgICAgICAgICBjb25zdCBuZXh0Q2hpbGQgPSBjaGlsZEFycltpaV1cbiAgICAgICAgICBpZiAoaXNNZW51SXRlbShuZXh0Q2hpbGQpKSB7XG4gICAgICAgICAgICBuZXh0SWR4ID0gaWlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHtjdXJyZW50fSA9IG1lbnVSZWZcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCBlbCA9IGN1cnJlbnQucGFyZW50RWxlbWVudCB8fCBjdXJyZW50XG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBhdCB0aGUgdG9wICYgdGhlcmUncyBhIGhlYWRlciwgcHV0IHRoZSBoZWFkZXIgaW50byB2aWV3XG4gICAgICAgICAgICBlbC5zY3JvbGxUbygwLCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBuZXh0SWR4ID09PSBudWxsIHx8XG4gICAgICAgIG5leHRJZHggPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBuZXh0SWR4ID09PSBhY3RpdmVJZHggfHxcbiAgICAgICAgbmV4dElkeCA8IDAgfHxcbiAgICAgICAgbmV4dElkeCA+PSBjaGlsZEFyci5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHNldEFjdGl2ZUlkeChuZXh0SWR4KVxuICAgIH0sXG4gICAgW2FjdGl2ZUlkeF1cbiAgKVxuXG4gIGNvbnN0IG1ha2VTbWFydENoaWxkcmVuID0gdXNlQ2FsbGJhY2soXG4gICAgKGNoaWxkcmVuKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIHRvQXJyYXkgcmVtb3ZlcyBib29scyB3aGVyZWFzIG1hcCBkb2VzIG5vdC5cbiAgICAgICAqIFVzZSB0aGUgZmlsdGVyIHRvIHJlbW92ZSBwb3NzaWJsZSBwb3J0YWxzXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGNoaWxkQXJyID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilcbiAgICAgIHJldHVybiBjaGlsZEFyci5tYXAoKGNoaWxkLCBpZHgpID0+IHtcbiAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIG51bGxcbiAgICAgICAgaWYgKCFpc1JlYWN0RWxlbWVudChjaGlsZCkpIHJldHVybiBjaGlsZFxuICAgICAgICAvLyBvdmVybG9hZGluZyBhIHJlZiBjYWxsYmFjayB3aXRoIHVzZWZ1bCBwcm9wcyBtZWFucyBpbnRlcm1lZGlhcnkgY29tcG9uZW50cyBvbmx5IG5lZWQgdG8gZm9yd2FyZCB0aGUgcmVmXG4gICAgICAgIGNvbnN0IHJlZiA9IChjKSA9PiB7XG4gICAgICAgICAgaXRlbUhhbmRsZXMuY3VycmVudFtpZHhdID0gY1xuICAgICAgICB9XG4gICAgICAgIHJlZi5jbG9zZVBvcnRhbCA9IGNsb3NlUG9ydGFsXG4gICAgICAgIC8vIHJlZi5pc0FjdGl2ZSA9IGFjdGl2ZUlkeCA9PT0gaWR4XG4gICAgICAgIHJlZi5hY3RpdmF0ZSA9ICgpID0+IHNldFNhZmVJZHgoaWR4KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiBgbWkkeyhjaGlsZCApLmtleSB8fCBjaGlsZH1gLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTM5fX1cbiAgICAgICAgICAgICwgY2xvbmVFbGVtZW50KGNoaWxkICwge3JlZn0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2FjdGl2ZUlkeCwgc2V0U2FmZUlkeCwgY2xvc2VQb3J0YWwsIGlzRHJvcGRvd24sIHBvcnRhbFN0YXR1c11cbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0U2FmZUlkeChhY3RpdmVJZHggKyAxKVxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRTYWZlSWR4KGFjdGl2ZUlkeCAtIDEpXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8ICh0YWJSZXR1cm5zICYmIGUua2V5ID09PSAnVGFiJykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGl0ZW1IYW5kbGUgPSBpdGVtSGFuZGxlcy5jdXJyZW50W2FjdGl2ZUlkeF1cbiAgICAgICAgaXRlbUhhbmRsZSAmJiBpdGVtSGFuZGxlLm9uQ2xpY2soZSlcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjbG9zZVBvcnRhbCgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZS5kZWZhdWx0UHJldmVudGVkXG4gICAgfSxcbiAgICBbYWN0aXZlSWR4LCB0YWJSZXR1cm5zLCBjbG9zZVBvcnRhbCwgc2V0U2FmZUlkeF1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51U3R5bGVzLCB7XG4gICAgICByb2xlOiBcIm1lbnVcIixcbiAgICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICB0YWJJbmRleDogLTEsXG4gICAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duLFxuICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgcmVmOiBtZW51UmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTcwfX1cbiAgICBcbiAgICAgICwgbWFrZVNtYXJ0Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgKVxuICApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBNZW51XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7UmFkaXVzfSBmcm9tICd1dGlscy9jb25zdGFudHMnXG5pbXBvcnQge1BvcnRhbFN0YXR1c30gZnJvbSAnLi4vaG9va3MvdXNlUG9ydGFsJ1xuXG5jb25zdCBhbmltYXRpb25zID0gKHBvcnRhbFN0YXR1cykgPT4ge1xuICBzd2l0Y2ggKHBvcnRhbFN0YXR1cykge1xuICAgIGNhc2UgUG9ydGFsU3RhdHVzLk1vdW50ZWQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9XG4gICAgY2FzZSBQb3J0YWxTdGF0dXMuRW50ZXJpbmc6XG4gICAgY2FzZSBQb3J0YWxTdGF0dXMuRW50ZXJlZDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5IDE4OG1zIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSlgXG4gICAgICB9XG4gICAgY2FzZSBQb3J0YWxTdGF0dXMuRXhpdGluZzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5IDEyMG1zIGN1YmljLWJlemllcigwLCAwLCAuMiwgMSlgXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7fVxuICB9XG59XG5cblxuXG5cblxuXG5cbmNvbnN0IE1lbnVDb250ZW50cyA9IHN0eWxlZCgnZGl2JykoXG4gICh7bWluV2lkdGgsIG1lbnVDb250ZW50U3R5bGVzID0ge30sIHBvcnRhbFN0YXR1c30pID0+ICh7XG4gICAgYm9yZGVyUmFkaXVzOiBSYWRpdXMuTUVOVSxcbiAgICBvdXRsaW5lOiAwLFxuICAgIG92ZXJmbG93WTogcG9ydGFsU3RhdHVzID49IFBvcnRhbFN0YXR1cy5FbnRlcmVkID8gJ2F1dG8nIDogJ2hpZGRlbicsXG4gICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICBwYWRkaW5nVG9wOiA4LFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAxMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpYCxcbiAgICBtaW5XaWR0aCxcbiAgICAuLi5hbmltYXRpb25zKHBvcnRhbFN0YXR1cyksXG4gICAgLi4ubWVudUNvbnRlbnRTdHlsZXNcbiAgfSlcbilcblxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbnRlbnRzXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvTWVudUl0ZW0udHN4XCI7aW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IE1lbnVJdGVtTGFiZWwgZnJvbSAnLi9NZW51SXRlbUxhYmVsJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgTWVudUl0ZW1TdHlsZXMgPSBzdHlsZWQoJ2RpdicpKFxuICAoe2lzQWN0aXZlLCBpc0Rpc2FibGVkLCBleHRyYVNwYWNlfSkgPT4gKHtcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/IFBBTEVUVEUuQkFDS0dST1VORF9MSUdIVF9HUkFZIDogdW5kZWZpbmVkLFxuICAgIGNvbG9yOiBpc0Rpc2FibGVkID8gUEFMRVRURS5URVhUX0dSQVkgOiBQQUxFVFRFLlRFWFRfTUFJTixcbiAgICBjdXJzb3I6IGlzRGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luVG9wOiBleHRyYVNwYWNlID8gMTAgOiAwLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAnJjpob3Zlciw6Zm9jdXMnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlID8gUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSIDogUEFMRVRURS5CQUNLR1JPVU5EX0hPVkVSX0xJR0hULFxuICAgICAgb3V0bGluZTogMFxuICAgIH1cbiAgfSlcbilcblxuY29uc3QgTWVudUl0ZW0gPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtpc0Rpc2FibGVkLCBsYWJlbCwgbm9DbG9zZU9uQ2xpY2ssIG9uTW91c2VFbnRlciwgb25DbGljaywgaXNBY3RpdmUsIGV4dHJhU3BhY2V9ID0gcHJvcHNcbiAgY29uc3QgaXRlbVJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCB7YWN0aXZhdGUsIGNsb3NlUG9ydGFsfSA9IHJlZiBcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVyblxuICAgIGlmIChub0Nsb3NlT25DbGljaykge1xuICAgICAgYWN0aXZhdGUoKVxuICAgIH0gZWxzZSBpZiAoY2xvc2VQb3J0YWwpIHtcbiAgICAgIGNsb3NlUG9ydGFsKClcbiAgICB9XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZSlcbiAgICB9XG4gIH1cblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGlja1xuICB9KSlcblxuICByZXR1cm4gKFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW1TdHlsZXMsIHtcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICByb2xlOiBcIm1lbnVpdGVtXCIsXG4gICAgICByZWY6IGl0ZW1SZWYsXG4gICAgICBpc0FjdGl2ZTogaXNBY3RpdmUsXG4gICAgICBleHRyYVNwYWNlOiBleHRyYVNwYWNlLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlciwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDYwfX1cbiAgICBcbiAgICAgICwgdHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW1MYWJlbCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA2OX19LCBsYWJlbCkgOiBsYWJlbFxuICAgIClcbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgTWVudUl0ZW1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHRleHRPdmVyZmxvdyBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL2hlbHBlcnMvdGV4dE92ZXJmbG93J1xuXG5jb25zdCBNZW51SXRlbUxhYmVsID0gc3R5bGVkLmRpdih7XG4gIC4uLnRleHRPdmVyZmxvdyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleDogMSxcbiAgZm9udFNpemU6IDE0LFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIHBhZGRpbmc6IGA0cHggMTVweCA0cHggMTVweGBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtTGFiZWxcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtCb3hTaGFkb3csIFJhZGl1c30gZnJvbSAndXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHtNZW51UG9zaXRpb259IGZyb20gJy4vdXNlQ29vcmRzJ1xuaW1wb3J0IHtQb3J0YWxTdGF0dXN9IGZyb20gJy4vdXNlUG9ydGFsJ1xuXG5cblxuXG5cblxuXG5jb25zdCB0cmFuc2Zvcm1PcmlnaW5zID0ge1xuICBbTWVudVBvc2l0aW9uLlVQUEVSX1JJR0hUXTogJ3RvcCByaWdodCcsXG4gIFtNZW51UG9zaXRpb24uVVBQRVJfTEVGVF06ICd0b3AgbGVmdCcsXG4gIFtNZW51UG9zaXRpb24uTE9XRVJfTEVGVF06ICdib3R0b20gbGVmdCcsXG4gIFtNZW51UG9zaXRpb24uTE9XRVJfUklHSFRdOiAnYm90dG9tIHJpZ2h0J1xufVxuXG5jb25zdCBiYWNrZ3JvdW5kU3R5bGVzID0gKHBvcnRhbFN0YXR1cywgaXNEcm9wZG93bikgPT4ge1xuICBzd2l0Y2ggKHBvcnRhbFN0YXR1cykge1xuICAgIGNhc2UgUG9ydGFsU3RhdHVzLkVudGVyaW5nOlxuICAgIGNhc2UgUG9ydGFsU3RhdHVzLkVudGVyZWQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06IGlzRHJvcGRvd24gPyAnc2NhbGVZKDEpJyA6ICdzY2FsZSgxKScsXG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgMTg4bXMgY3ViaWMtYmV6aWVyKDAsIDAsIC4yLCAxKWBcbiAgICAgIH1cbiAgICBjYXNlIFBvcnRhbFN0YXR1cy5FeGl0aW5nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogYGFsbCAxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgLjIsIDEpYFxuICAgICAgfVxuICAgIGNhc2UgUG9ydGFsU3RhdHVzLk1vdW50ZWQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IGlzRHJvcGRvd24gPyAnc2NhbGVZKDApJyA6ICdzY2FsZSgwKSdcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuY29uc3QgTWVudUJhY2tncm91bmQgPSBzdHlsZWQoJ2RpdicpKFxuICAoe21lbnVQb3NpdGlvbiwgcG9ydGFsU3RhdHVzLCBpc0Ryb3Bkb3dufSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJSYWRpdXM6IFJhZGl1cy5NRU5VLFxuICAgIGJveFNoYWRvdzogQm94U2hhZG93Lk1FTlUsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgekluZGV4OiAtMSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHRyYW5zZm9ybU9yaWdpbnNbbWVudVBvc2l0aW9uXSxcbiAgICAuLi5iYWNrZ3JvdW5kU3R5bGVzKHBvcnRhbFN0YXR1cywgaXNEcm9wZG93bilcbiAgfSlcbilcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJhY2tncm91bmRcbiIsIiBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfWltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuXG5cbmltcG9ydCB1c2VSZWZTdGF0ZSBmcm9tICcuL3VzZVJlZlN0YXRlJ1xuaW1wb3J0IHVzZVJlc2l6ZU9ic2VydmVyIGZyb20gJy4vdXNlUmVzaXplT2JzZXJ2ZXInXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgdmFyIE1lbnVQb3NpdGlvbjsgKGZ1bmN0aW9uIChNZW51UG9zaXRpb24pIHtcbiAgY29uc3QgVVBQRVJfTEVGVCA9IDA7IE1lbnVQb3NpdGlvbltNZW51UG9zaXRpb25bXCJVUFBFUl9MRUZUXCJdID0gVVBQRVJfTEVGVF0gPSBcIlVQUEVSX0xFRlRcIjtcbiAgY29uc3QgVVBQRVJfUklHSFQgPSBVUFBFUl9MRUZUICsgMTsgTWVudVBvc2l0aW9uW01lbnVQb3NpdGlvbltcIlVQUEVSX1JJR0hUXCJdID0gVVBQRVJfUklHSFRdID0gXCJVUFBFUl9SSUdIVFwiO1xuICBjb25zdCBVUFBFUl9DRU5URVIgPSBVUFBFUl9SSUdIVCArIDE7IE1lbnVQb3NpdGlvbltNZW51UG9zaXRpb25bXCJVUFBFUl9DRU5URVJcIl0gPSBVUFBFUl9DRU5URVJdID0gXCJVUFBFUl9DRU5URVJcIjtcbiAgY29uc3QgTE9XRVJfTEVGVCA9IFVQUEVSX0NFTlRFUiArIDE7IE1lbnVQb3NpdGlvbltNZW51UG9zaXRpb25bXCJMT1dFUl9MRUZUXCJdID0gTE9XRVJfTEVGVF0gPSBcIkxPV0VSX0xFRlRcIjtcbiAgY29uc3QgTE9XRVJfUklHSFQgPSBMT1dFUl9MRUZUICsgMTsgTWVudVBvc2l0aW9uW01lbnVQb3NpdGlvbltcIkxPV0VSX1JJR0hUXCJdID0gTE9XRVJfUklHSFRdID0gXCJMT1dFUl9SSUdIVFwiO1xuICBjb25zdCBMT1dFUl9DRU5URVIgPSBMT1dFUl9SSUdIVCArIDE7IE1lbnVQb3NpdGlvbltNZW51UG9zaXRpb25bXCJMT1dFUl9DRU5URVJcIl0gPSBMT1dFUl9DRU5URVJdID0gXCJMT1dFUl9DRU5URVJcIjtcbn0pKE1lbnVQb3NpdGlvbiB8fCAoTWVudVBvc2l0aW9uID0ge30pKTtcblxuY29uc3QgZ2V0T2Zmc2V0ID0gKG9yaWVudGF0aW9uLCBmdWxsV2lkdGgpID0+IHtcbiAgaWYgKG9yaWVudGF0aW9uID09PSAnY2VudGVyJykge1xuICAgIHJldHVybiBmdWxsV2lkdGggLyAyXG4gIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICdyaWdodCcgfHwgb3JpZW50YXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgcmV0dXJuIGZ1bGxXaWR0aFxuICB9XG4gIHJldHVybiAwXG59XG5cbmNvbnN0IGFuY2hvckxvb2t1cCA9IHtcbiAgW01lbnVQb3NpdGlvbi5VUFBFUl9MRUZUXToge1xuICAgIHRhcmdldEFuY2hvcjoge1xuICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgdmVydGljYWw6ICd0b3AnXG4gICAgfSxcbiAgICBvcmlnaW5BbmNob3I6IHtcbiAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJ1xuICAgIH1cbiAgfSxcbiAgW01lbnVQb3NpdGlvbi5VUFBFUl9SSUdIVF06IHtcbiAgICB0YXJnZXRBbmNob3I6IHtcbiAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB2ZXJ0aWNhbDogJ3RvcCdcbiAgICB9LFxuICAgIG9yaWdpbkFuY2hvcjoge1xuICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJ1xuICAgIH1cbiAgfSxcbiAgW01lbnVQb3NpdGlvbi5VUFBFUl9DRU5URVJdOiB7XG4gICAgdGFyZ2V0QW5jaG9yOiB7XG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsOiAndG9wJ1xuICAgIH0sXG4gICAgb3JpZ2luQW5jaG9yOiB7XG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJ1xuICAgIH1cbiAgfSxcbiAgW01lbnVQb3NpdGlvbi5MT1dFUl9MRUZUXToge1xuICAgIHRhcmdldEFuY2hvcjoge1xuICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgdmVydGljYWw6ICdib3R0b20nXG4gICAgfSxcbiAgICBvcmlnaW5BbmNob3I6IHtcbiAgICAgIGhvcml6b250YWw6ICdsZWZ0JyxcbiAgICAgIHZlcnRpY2FsOiAndG9wJ1xuICAgIH1cbiAgfSxcbiAgW01lbnVQb3NpdGlvbi5MT1dFUl9SSUdIVF06IHtcbiAgICB0YXJnZXRBbmNob3I6IHtcbiAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbSdcbiAgICB9LFxuICAgIG9yaWdpbkFuY2hvcjoge1xuICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIHZlcnRpY2FsOiAndG9wJ1xuICAgIH1cbiAgfSxcbiAgW01lbnVQb3NpdGlvbi5MT1dFUl9DRU5URVJdOiB7XG4gICAgdGFyZ2V0QW5jaG9yOiB7XG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJ1xuICAgIH0sXG4gICAgb3JpZ2luQW5jaG9yOiB7XG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsOiAndG9wJ1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBsb3dlckxvb2t1cCA9IHtcbiAgW01lbnVQb3NpdGlvbi5VUFBFUl9MRUZUXTogTWVudVBvc2l0aW9uLkxPV0VSX0xFRlQsXG4gIFtNZW51UG9zaXRpb24uVVBQRVJfUklHSFRdOiBNZW51UG9zaXRpb24uTE9XRVJfUklHSFRcbn1cblxuY29uc3QgTUVOVV9QQURESU5HID0gNFxuXG5jb25zdCBnZXROZXh0Q29vcmRzID0gKHRhcmdldEJCb3gsIG9yaWdpbkJCb3gsIHByZWZlcnJlZE1lbnVQb3NpdGlvbikgPT4ge1xuICBjb25zdCB7aGVpZ2h0OiBtb2RhbEhlaWdodCwgd2lkdGg6IG1vZGFsV2lkdGh9ID0gdGFyZ2V0QkJveFxuICBjb25zdCB7aGVpZ2h0OiBvcmlnaW5IZWlnaHQsIHdpZHRoOiBvcmlnaW5XaWR0aCwgbGVmdDogb3JpZ2luTGVmdCwgdG9wOiBvcmlnaW5Ub3B9ID0gb3JpZ2luQkJveFxuICBjb25zdCB7b3JpZ2luQW5jaG9yLCB0YXJnZXRBbmNob3J9ID0gYW5jaG9yTG9va3VwW3ByZWZlcnJlZE1lbnVQb3NpdGlvbl1cbiAgY29uc3QgbmV4dENvb3JkcyA9IHt9IFxuXG4gIGNvbnN0IG9yaWdpbkxlZnRPZmZzZXQgPSBnZXRPZmZzZXQob3JpZ2luQW5jaG9yLmhvcml6b250YWwsIG9yaWdpbldpZHRoKVxuICBjb25zdCB7c2Nyb2xsWCwgc2Nyb2xsWSwgaW5uZXJIZWlnaHR9ID0gd2luZG93XG4gIC8vIERvIG5vdCB1c2Ugd2luZG93LmlubmVyV2lkdGggYmVjYXVzZSB0aGF0IGRvZXMgbm90IGFjY291bnQgZm9yIHRoZSBzY3JvbGxiYXIgd2lkdGhcbiAgY29uc3QgcGFnZVdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIGlmICh0YXJnZXRBbmNob3IuaG9yaXpvbnRhbCAhPT0gJ3JpZ2h0Jykge1xuICAgIGNvbnN0IHRhcmdldExlZnRPZmZzZXQgPSBnZXRPZmZzZXQodGFyZ2V0QW5jaG9yLmhvcml6b250YWwsIG1vZGFsV2lkdGgpXG4gICAgY29uc3QgbGVmdCA9IHNjcm9sbFggKyBvcmlnaW5MZWZ0ICsgb3JpZ2luTGVmdE9mZnNldCAtIHRhcmdldExlZnRPZmZzZXRcbiAgICBjb25zdCBtYXhMZWZ0ID0gcGFnZVdpZHRoIC0gbW9kYWxXaWR0aCArIHNjcm9sbFhcbiAgICBuZXh0Q29vcmRzLmxlZnQgPSBNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJpZ2h0ID0gcGFnZVdpZHRoIC0gKG9yaWdpbkxlZnQgKyBvcmlnaW5MZWZ0T2Zmc2V0KSAtIHNjcm9sbFhcbiAgICBjb25zdCBtYXhSaWdodCA9IHBhZ2VXaWR0aCAtIG1vZGFsV2lkdGggLSBzY3JvbGxYXG4gICAgbmV4dENvb3Jkcy5yaWdodCA9IE1hdGgubWluKHJpZ2h0LCBtYXhSaWdodClcbiAgfVxuXG4gIGlmICh0YXJnZXRBbmNob3IudmVydGljYWwgIT09ICdib3R0b20nKSB7XG4gICAgY29uc3Qgb3JpZ2luVG9wT2Zmc2V0ID0gZ2V0T2Zmc2V0KG9yaWdpbkFuY2hvci52ZXJ0aWNhbCwgb3JpZ2luSGVpZ2h0KVxuICAgIGNvbnN0IHRhcmdldFRvcE9mZnNldCA9IGdldE9mZnNldCh0YXJnZXRBbmNob3IudmVydGljYWwsIG1vZGFsSGVpZ2h0KVxuICAgIGNvbnN0IHRvcCA9IHNjcm9sbFkgKyBvcmlnaW5Ub3AgKyBvcmlnaW5Ub3BPZmZzZXQgLSB0YXJnZXRUb3BPZmZzZXRcbiAgICBjb25zdCBpc0JlbG93ID0gdG9wICsgbW9kYWxIZWlnaHQgPCBpbm5lckhlaWdodCArIHNjcm9sbFlcbiAgICBpZiAoaXNCZWxvdykge1xuICAgICAgbmV4dENvb3Jkcy50b3AgPSB0b3AgKyBNRU5VX1BBRERJTkdcbiAgICB9XG4gIH1cbiAgY29uc3QgbWVudVBvc2l0aW9uID1cbiAgICAobmV4dENvb3Jkcy50b3AgPT09IHVuZGVmaW5lZCAmJiBsb3dlckxvb2t1cFtwcmVmZXJyZWRNZW51UG9zaXRpb25dKSB8fCBwcmVmZXJyZWRNZW51UG9zaXRpb25cbiAgLy8gaWYgYnkgY2hvaWNlIG9yIGNpcmN1bXN0YW5jZSwgcHV0IGl0IGFib3ZlICYgYW5jaG9yIGl0IGZyb20gdGhlIGJvdHRvbVxuICBpZiAobmV4dENvb3Jkcy50b3AgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IGlubmVySGVpZ2h0IC0gb3JpZ2luVG9wIC0gc2Nyb2xsWVxuICAgIGNvbnN0IG1heEJvdHRvbSA9IGlubmVySGVpZ2h0IC0gbW9kYWxIZWlnaHQgKyBzY3JvbGxZXG4gICAgbmV4dENvb3Jkcy5ib3R0b20gPSBNYXRoLm1pbihib3R0b20sIG1heEJvdHRvbSkgKyBNRU5VX1BBRERJTkdcbiAgfVxuICByZXR1cm4ge2Nvb3JkczogbmV4dENvb3JkcyAsIG1lbnVQb3NpdGlvbn1cbn1cblxuXG5cblxuXG5cbmNvbnN0IHVzZVdpbmRvd1Jlc2l6ZSA9IChcbiAgY29vcmRzUmVmLFxuICBjdXJyZW50VGFyZ2V0UmVmLFxuICBzZXRDb29yZHNcbikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZVdpbmRvdyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtjb29yZHMsIG1lbnVQb3NpdGlvbn0gPSBjb29yZHNSZWYuY3VycmVudFxuICAgICAgaWYgKGN1cnJlbnRUYXJnZXRSZWYgJiYgKCdyaWdodCcgaW4gY29vcmRzIHx8ICdib3R0b20nIGluIGNvb3JkcykpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q29vcmRzID0gY3VycmVudFRhcmdldFJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBzZXRDb29yZHMoe1xuICAgICAgICAgIGNvb3Jkczoge1xuICAgICAgICAgICAgbGVmdDogdGFyZ2V0Q29vcmRzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHRhcmdldENvb3Jkcy50b3BcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lbnVQb3NpdGlvblxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplV2luZG93LCB7cGFzc2l2ZTogdHJ1ZX0pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVXaW5kb3cpXG4gICAgfVxuICB9LCBbY29vcmRzUmVmLCBjdXJyZW50VGFyZ2V0UmVmLCBzZXRDb29yZHNdKVxufVxuXG5jb25zdCB1c2VDb29yZHMgPSBcblxuXG4oXG4gIHByZWZlcnJlZE1lbnVQb3NpdGlvbixcbiAgb3B0aW9ucyA9IHt9XG4pID0+IHtcbiAgY29uc3QgdGFyZ2V0UmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IG9yaWdpblJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbY29vcmRzUmVmLCBzZXRDb29yZHNdID0gdXNlUmVmU3RhdGUoe1xuICAgIGNvb3Jkczoge2xlZnQ6IDAsIHRvcDogMH0sXG4gICAgbWVudVBvc2l0aW9uOiBwcmVmZXJyZWRNZW51UG9zaXRpb25cbiAgfSlcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRhcmdldFJlZi5jdXJyZW50IHx8ICFvcmlnaW5SZWYuY3VycmVudCkgcmV0dXJuXG4gICAgLy8gQm91bmRpbmcgYWRqdXN0bWVudHMgbWltaWMgbmF0aXZlIChmbGlwIGZyb20gYmVsb3cgdG8gYWJvdmUgZm9yIFksIGJ1dCBhZGp1c3QgcGl4ZWwtYnktcGl4ZWwgZm9yIFgpXG4gICAgY29uc3QgdGFyZ2V0QkJveCA9IF9vcHRpb25hbENoYWluKFt0YXJnZXRSZWYsICdhY2Nlc3MnLCBfID0+IF8uY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzIgPT4gXzIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0LCAnY2FsbCcsIF8zID0+IF8zKCldKVxuICAgIGNvbnN0IG9yaWdpbkJCb3ggPSBfb3B0aW9uYWxDaGFpbihbb3JpZ2luUmVmLCAnYWNjZXNzJywgXzQgPT4gXzQuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzUgPT4gXzUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0LCAnY2FsbCcsIF82ID0+IF82KCldKVxuICAgIGlmICh0YXJnZXRCQm94ICYmIG9yaWdpbkJCb3gpIHtcbiAgICAgIGNvbnN0IGNvb3JkU3RhdGUgPSBnZXROZXh0Q29vcmRzKHRhcmdldEJCb3gsIG9yaWdpbkJCb3gsIHByZWZlcnJlZE1lbnVQb3NpdGlvbilcbiAgICAgIHNldENvb3Jkcyhjb29yZFN0YXRlKVxuICAgIH1cbiAgfSwgW1xuICAgIHRhcmdldFJlZi5jdXJyZW50LFxuICAgIHNldENvb3JkcyxcbiAgICBvcHRpb25zLm9yaWdpbkNvb3JkcyxcbiAgICBwcmVmZXJyZWRNZW51UG9zaXRpb24sXG4gICAgb3B0aW9ucy5wb3J0YWxTdGF0dXNcbiAgXSlcblxuICB1c2VSZXNpemVPYnNlcnZlcih0YXJnZXRSZWYuY3VycmVudCwgKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEJCb3ggPSBfb3B0aW9uYWxDaGFpbihbdGFyZ2V0UmVmLCAnYWNjZXNzJywgXzcgPT4gXzcuY3VycmVudCwgJ29wdGlvbmFsQWNjZXNzJywgXzggPT4gXzguZ2V0Qm91bmRpbmdDbGllbnRSZWN0LCAnY2FsbCcsIF85ID0+IF85KCldKVxuICAgIGNvbnN0IG9yaWdpbkJCb3ggPSBfb3B0aW9uYWxDaGFpbihbb3JpZ2luUmVmLCAnYWNjZXNzJywgXzEwID0+IF8xMC5jdXJyZW50LCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTEgPT4gXzExLmdldEJvdW5kaW5nQ2xpZW50UmVjdCwgJ2NhbGwnLCBfMTIgPT4gXzEyKCldKVxuICAgIGlmICh0YXJnZXRCQm94ICYmIG9yaWdpbkJCb3gpIHtcbiAgICAgIGNvbnN0IGNvb3JkU3RhdGUgPSBnZXROZXh0Q29vcmRzKHRhcmdldEJCb3gsIG9yaWdpbkJCb3gsIHByZWZlcnJlZE1lbnVQb3NpdGlvbilcbiAgICAgIHNldENvb3Jkcyhjb29yZFN0YXRlKVxuICAgIH1cbiAgfSlcblxuICB1c2VXaW5kb3dSZXNpemUoY29vcmRzUmVmLCB0YXJnZXRSZWYuY3VycmVudCwgc2V0Q29vcmRzKVxuICBjb25zdCB7Y29vcmRzLCBtZW51UG9zaXRpb259ID0gY29vcmRzUmVmLmN1cnJlbnRcblxuICByZXR1cm4ge3RhcmdldFJlZiwgb3JpZ2luUmVmLCBjb29yZHMsIG1lbnVQb3NpdGlvbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQ29vcmRzXG4iLCJpbXBvcnQge3VzZU1lbW8sfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRCQm94LCB7fSBmcm9tICcuLi91dGlscy9nZXRCQm94J1xuaW1wb3J0IHVzZU1lbnVQb3J0YWwgZnJvbSAnLi91c2VNZW51UG9ydGFsJ1xuaW1wb3J0IHVzZVBvcnRhbCwge30gZnJvbSAnLi91c2VQb3J0YWwnXG5pbXBvcnQgdXNlQ29vcmRzLCB7fSBmcm9tICcuL3VzZUNvb3JkcydcbmltcG9ydCB1c2VMb2FkaW5nRGVsYXkgZnJvbSAnLi91c2VMb2FkaW5nRGVsYXknXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgdXNlTWVudSA9IChwcmVmZXJyZWRNZW51UG9zaXRpb24sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7b25PcGVuLCBvbkNsb3NlLCBpZCwgcGFyZW50SWQsIG9yaWdpbkNvb3JkcywgbWVudUNvbnRlbnRTdHlsZXMsIG1lbnVDb250ZW50UmVmfSA9IG9wdGlvbnNcbiAgY29uc3QgaXNEcm9wZG93biA9ICEhb3B0aW9ucy5pc0Ryb3Bkb3duXG4gIGNvbnN0IHt0YXJnZXRSZWYsIG9yaWdpblJlZiwgY29vcmRzLCBtZW51UG9zaXRpb259ID0gdXNlQ29vcmRzKHByZWZlcnJlZE1lbnVQb3NpdGlvbiwge1xuICAgIG9yaWdpbkNvb3Jkc1xuICB9KVxuICBpZiAob3JpZ2luQ29vcmRzKSB7XG4gICAgOyhvcmlnaW5SZWYgKS5jdXJyZW50ID0ge2dldEJvdW5kaW5nQ2xpZW50UmVjdDogKCkgPT4gb3JpZ2luQ29vcmRzfSBcbiAgfVxuICBjb25zdCB7cG9ydGFsLCBjbG9zZVBvcnRhbCwgdG9nZ2xlUG9ydGFsLCBwb3J0YWxTdGF0dXMsIHNldFBvcnRhbFN0YXR1cywgb3BlblBvcnRhbH0gPSB1c2VQb3J0YWwoe1xuICAgIGlkLFxuICAgIG9uT3BlbixcbiAgICBvbkNsb3NlLFxuICAgIHBhcmVudElkXG4gIH0pXG4gIGNvbnN0IGxvYWRpbmdXaWR0aCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLmxvYWRpbmdXaWR0aCkgcmV0dXJuIG9wdGlvbnMubG9hZGluZ1dpZHRoXG4gICAgY29uc3QgYmJveCA9IGdldEJCb3gob3JpZ2luUmVmLmN1cnJlbnQpXG4gICAgcmV0dXJuIE1hdGgubWF4KDQwLCBiYm94ID8gYmJveC53aWR0aCA6IDQwKVxuICB9LCBbb3JpZ2luUmVmLmN1cnJlbnRdKVxuICBjb25zdCB7bG9hZGluZ0RlbGF5LCBsb2FkaW5nRGVsYXlSZWZ9ID0gdXNlTG9hZGluZ0RlbGF5KClcbiAgY29uc3QgbWVudVBvcnRhbCA9IHVzZU1lbnVQb3J0YWwoXG4gICAgcG9ydGFsLFxuICAgIHRhcmdldFJlZixcbiAgICBsb2FkaW5nV2lkdGgsXG4gICAgY29vcmRzLFxuICAgIHBvcnRhbFN0YXR1cyxcbiAgICBzZXRQb3J0YWxTdGF0dXMsXG4gICAgaXNEcm9wZG93bixcbiAgICBtZW51UG9zaXRpb24sXG4gICAgbG9hZGluZ0RlbGF5UmVmLFxuICAgIG1lbnVDb250ZW50U3R5bGVzLFxuICAgIG1lbnVDb250ZW50UmVmXG4gIClcbiAgY29uc3QgbWVudVByb3BzID0ge3BvcnRhbFN0YXR1cywgY2xvc2VQb3J0YWwsIGlzRHJvcGRvd259XG4gIHJldHVybiB7XG4gICAgdG9nZ2xlUG9ydGFsLFxuICAgIG9yaWdpblJlZixcbiAgICBtZW51UG9ydGFsLFxuICAgIG1lbnVQcm9wcyxcbiAgICBsb2FkaW5nRGVsYXksXG4gICAgbG9hZGluZ1dpZHRoLFxuICAgIHBvcnRhbFN0YXR1cyxcbiAgICBvcGVuUG9ydGFsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTWVudVxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL2NsaWVudC9ob29rcy91c2VNZW51UG9ydGFsLnRzeFwiO2ltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BvcnRhbFN0YXR1c30gZnJvbSAnLi91c2VQb3J0YWwnXG5pbXBvcnQge0R1cmF0aW9uLCBaSW5kZXh9IGZyb20gJ3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCBNZW51QmFja2dyb3VuZCBmcm9tICcuL01lbnVCYWNrZ3JvdW5kJ1xuaW1wb3J0IE1lbnVDb250ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL01lbnVDb250ZW50cydcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeSdcblxuXG5pbXBvcnQgTG9hZGluZ0NvbXBvbmVudCBmcm9tICdjb21wb25lbnRzL0xvYWRpbmdDb21wb25lbnQnXG5cbmNvbnN0IE1lbnVCbG9jayA9IHN0eWxlZC5kaXYoe1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgekluZGV4OiBaSW5kZXguTUVOVVxufSlcblxuY29uc3QgdXNlTWVudVBvcnRhbCA9IChcbiAgcG9ydGFsLFxuICB0YXJnZXRSZWYsXG4gIG1pbldpZHRoLFxuICBjb29yZHMsXG4gIHBvcnRhbFN0YXR1cyxcbiAgc2V0UG9ydGFsU3RhdHVzLFxuICBpc0Ryb3Bkb3duLFxuICBtZW51UG9zaXRpb24sXG4gIGxvYWRpbmdEZWxheVJlZixcbiAgbWVudUNvbnRlbnRTdHlsZXMgPSB7fSxcbiAgbWVudUNvbnRlbnRSZWZcbikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlXG4gICAgaWYgKHBvcnRhbFN0YXR1cyA9PT0gUG9ydGFsU3RhdHVzLkVudGVyaW5nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xuICAgICAgICAgIHNldFBvcnRhbFN0YXR1cyhQb3J0YWxTdGF0dXMuRW50ZXJlZClcbiAgICAgICAgfVxuICAgICAgfSwgRHVyYXRpb24uTUVOVV9PUEVOX01BWClcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlXG4gICAgfVxuICB9LCBbcG9ydGFsU3RhdHVzLCBzZXRQb3J0YWxTdGF0dXNdKVxuICByZXR1cm4gKHJlYWN0RWwpID0+IHtcbiAgICByZXR1cm4gcG9ydGFsKFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51QmxvY2ssIHsgcmVmOiB0YXJnZXRSZWYsIHN0eWxlOiB7Li4uY29vcmRzfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ1fX1cbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVCYWNrZ3JvdW5kLCB7XG4gICAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb24sXG4gICAgICAgICAgcG9ydGFsU3RhdHVzOiBwb3J0YWxTdGF0dXMsXG4gICAgICAgICAgaXNEcm9wZG93bjogaXNEcm9wZG93biwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDQ2fX1cbiAgICAgICAgKVxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JCb3VuZGFyeSwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA1MX19XG4gICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVDb250ZW50cywge1xuICAgICAgICAgICAgbWluV2lkdGg6IG1pbldpZHRoLFxuICAgICAgICAgICAgcG9ydGFsU3RhdHVzOiBwb3J0YWxTdGF0dXMsXG4gICAgICAgICAgICBtZW51Q29udGVudFN0eWxlczogbWVudUNvbnRlbnRTdHlsZXMsXG4gICAgICAgICAgICByZWY6IG1lbnVDb250ZW50UmVmLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTJ9fVxuICAgICAgICAgIFxuICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN1c3BlbnNlLCB7XG4gICAgICAgICAgICAgIGZhbGxiYWNrOiBcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmdEZWxheVJlZjogbG9hZGluZ0RlbGF5UmVmLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgICAgICAgICAgICAgc2hvd0FmdGVyOiAwLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNjB9fVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogNTh9fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICwgcmVhY3RFbFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNZW51UG9ydGFsXG4iLCJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXJQb2x5ZmlsbCBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnXG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snXG5cblxuXG5cblxuXG5cbmNvbnN0IFJlc2l6ZU9ic2VydmVyID0gd2luZG93LlJlc2l6ZU9ic2VydmVyIHx8IChSZXNpemVPYnNlcnZlclBvbHlmaWxsIClcblxuY29uc3QgdXNlUmVzaXplT2JzZXJ2ZXIgPSAoZWwsIGNiKSA9PiB7XG4gIGNvbnN0IGV2ZW50Q2IgPSB1c2VFdmVudENhbGxiYWNrKGNiKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZWwpIHJldHVyblxuICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGV2ZW50Q2IpXG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBbZWwsIGV2ZW50Q2JdKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNpemVPYnNlcnZlclxuIiwiXG5cblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwKClcbmxldCB0aW1lclxuXG5cblxuXG5cbmNvbnN0IGdldEJCb3ggPSAoZWwpID0+IHtcbiAgaWYgKCFlbCB8fCAhKCdnZXRCb3VuZGluZ0NsaWVudFJlY3QnIGluIGVsKSkgcmV0dXJuIG51bGxcbiAgaWYgKCFjYWNoZS5oYXMoZWwpKSB7XG4gICAgY29uc3Qge2hlaWdodCwgd2lkdGgsIHRvcCwgbGVmdH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNhY2hlLnNldChlbCwge2hlaWdodCwgd2lkdGgsIHRvcCwgbGVmdH0pXG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZXIgPSB1bmRlZmluZWRcbiAgICAgICAgY2FjaGUuY2xlYXIoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhY2hlLmdldChlbCkgfHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCQm94XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7SUNPTl9TSVpFfSBmcm9tICcuLi9zdHlsZXMvdHlwb2dyYXBoeSdcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5pKHtcbiAgZm9udEZhbWlseTogJ01hdGVyaWFsIEljb25zJyxcbiAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gIC8vIERlZmF1bHQgaWNvbiBzaXplICgyNHB4KVxuICBmb250U2l6ZTogSUNPTl9TSVpFLk1EMjQsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBsaW5lSGVpZ2h0OiAxLFxuICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gIGxldHRlclNwYWNpbmc6ICdub3JtYWwnLFxuICB3b3JkV3JhcDogJ25vcm1hbCcsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBkaXJlY3Rpb246ICdsdHInLFxuICAvLyBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIC8vIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lXG4gIHRleHRSZW5kZXJpbmc6ICdvcHRpbWl6ZUxlZ2liaWxpdHknLFxuICAvLyBTdXBwb3J0IGZvciBGaXJlZm94XG4gIG1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAvLyBTdXBwb3J0IGZvciBJRVxuICBmb250RmVhdHVyZVNldHRpbmdzOiAnbGlnYSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiIsIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IFByaW1hcnlCdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKChwcm9wcykgPT4ge1xuICBjb25zdCB7aGlkZUZvY3VzfSA9IHByb3BzXG4gIC8vY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8IHdhaXRpbmdcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogMCxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDFweCAycHgnLFxuICAgIG1hcmdpbjogMCxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkIHRyYW5zcGFyZW50YCxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBQQUxFVFRFLlBSSU1BUllfTUFJTl9EQVJLLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU5fREFSS31gXG4gICAgfSxcbiAgICAuLi4oIWhpZGVGb2N1cyAmJiB7XG4gICAgICAnOmZvY3VzLCA6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFBBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkssXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1BBTEVUVEUuUFJJTUFSWV9NQUlOX0RBUkt9YFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlCdXR0b25cbiIsImNvbnN0IHRleHRPdmVyZmxvdyA9IHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRleHRPdmVyZmxvd1xuIiwiZXhwb3J0IHZhciBGT05UX0ZBTUlMWTsgKGZ1bmN0aW9uIChGT05UX0ZBTUlMWSkge1xuICBjb25zdCBTQU5TX1NFUklGID0gJ0xhbWJkYXMsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnOyBGT05UX0ZBTUlMWVtcIlNBTlNfU0VSSUZcIl0gPSBTQU5TX1NFUklGO1xuICBjb25zdCBNT05PU1BBQ0UgPSAnU0YgTW9ubywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlJzsgRk9OVF9GQU1JTFlbXCJNT05PU1BBQ0VcIl0gPSBNT05PU1BBQ0U7XG59KShGT05UX0ZBTUlMWSB8fCAoRk9OVF9GQU1JTFkgPSB7fSkpO1xuXG5leHBvcnQgdmFyIElDT05fU0laRTsgKGZ1bmN0aW9uIChJQ09OX1NJWkUpIHtcbiAgY29uc3QgTUQxNiA9ICcxNnB4JzsgSUNPTl9TSVpFW1wiTUQxNlwiXSA9IE1EMTY7XG4gIGNvbnN0IE1EMTggPSAnMThweCc7IElDT05fU0laRVtcIk1EMThcIl0gPSBNRDE4O1xuICBjb25zdCBNRDIyID0gJzIycHgnOyBJQ09OX1NJWkVbXCJNRDIyXCJdID0gTUQyMjtcbiAgY29uc3QgTUQyNCA9ICcyNHB4JzsgSUNPTl9TSVpFW1wiTUQyNFwiXSA9IE1EMjQ7XG4gIGNvbnN0IE1EMzYgPSAnMzZweCc7IElDT05fU0laRVtcIk1EMzZcIl0gPSBNRDM2O1xuICBjb25zdCBNRDQ4ID0gJzQ4cHgnOyBJQ09OX1NJWkVbXCJNRDQ4XCJdID0gTUQ0ODtcbn0pKElDT05fU0laRSB8fCAoSUNPTl9TSVpFID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=