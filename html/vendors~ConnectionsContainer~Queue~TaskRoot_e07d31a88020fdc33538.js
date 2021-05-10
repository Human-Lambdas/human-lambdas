(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~ConnectionsContainer~Queue~TaskRoot"],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@hypnosphi/create-react-context/lib/implementation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@hypnosphi/create-react-context/lib/implementation.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/@hypnosphi/create-react-context/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@hypnosphi/create-react-context/lib/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/@hypnosphi/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker-wrapper {\n  display: inline-block;\n  padding: 0;\n  border: 0;\n}\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px;\n}\n\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0;\n}\n\n.react-datepicker--time-only .react-datepicker__time,\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker-popper {\n  z-index: 1;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] {\n  margin-top: 10px;\n}\n\n.react-datepicker-popper[data-placement=\"bottom-end\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement=\"top-end\"] .react-datepicker__triangle {\n  left: auto;\n  right: 50px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] {\n  margin-bottom: 10px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] {\n  margin-left: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] .react-datepicker__triangle {\n  left: auto;\n  right: 42px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] {\n  margin-right: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] .react-datepicker__triangle {\n  left: 42px;\n  right: auto;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  padding-top: 8px;\n  position: relative;\n}\n\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.react-datepicker__header--time:not(.react-datepicker__header--time--only) {\n  border-top-left-radius: 0;\n}\n\n.react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation {\n  background: none;\n  line-height: 1.7rem;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  padding: 0;\n  border: 0.45rem solid transparent;\n  z-index: 1;\n  height: 10px;\n  width: 10px;\n  text-indent: -999em;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n\n.react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 95px;\n}\n\n.react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n\n.react-datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n\n.react-datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__month-container {\n  float: left;\n}\n\n.react-datepicker__year {\n  margin: 0.4rem;\n  text-align: center;\n}\n\n.react-datepicker__year-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 180px;\n}\n\n.react-datepicker__year .react-datepicker__year-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n\n.react-datepicker__month .react-datepicker__month-text,\n.react-datepicker__month .react-datepicker__quarter-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__input-time-container {\n  clear: both;\n  width: 100%;\n  float: left;\n  margin: 5px 0 10px 15px;\n  text-align: left;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__caption {\n  display: inline-block;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container {\n  display: inline-block;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n  width: auto;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-inner-spin-button,\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"] {\n  -moz-appearance: textfield;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 85px;\n}\n\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0;\n}\n\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 85px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 0px;\n  padding-left: 0px;\n  width: 100%;\n  box-sizing: content-box;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  height: 30px;\n  padding: 5px 10px;\n  white-space: nowrap;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,\n.react-datepicker__quarter--selected,\n.react-datepicker__quarter--in-selecting-range,\n.react-datepicker__quarter--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n\n.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,\n.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter--in-selecting-range:hover,\n.react-datepicker__quarter--in-range:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__month--disabled,\n.react-datepicker__quarter--disabled {\n  color: #ccc;\n  pointer-events: none;\n}\n\n.react-datepicker__month--disabled:hover,\n.react-datepicker__quarter--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__day,\n.react-datepicker__month-text,\n.react-datepicker__quarter-text,\n.react-datepicker__year-text {\n  cursor: pointer;\n}\n\n.react-datepicker__day:hover,\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover,\n.react-datepicker__year-text:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day--today,\n.react-datepicker__month-text--today,\n.react-datepicker__quarter-text--today,\n.react-datepicker__year-text--today {\n  font-weight: bold;\n}\n\n.react-datepicker__day--highlighted,\n.react-datepicker__month-text--highlighted,\n.react-datepicker__quarter-text--highlighted,\n.react-datepicker__year-text--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n\n.react-datepicker__day--highlighted:hover,\n.react-datepicker__month-text--highlighted:hover,\n.react-datepicker__quarter-text--highlighted:hover,\n.react-datepicker__year-text--highlighted:hover {\n  background-color: #32be3f;\n}\n\n.react-datepicker__day--highlighted-custom-1,\n.react-datepicker__month-text--highlighted-custom-1,\n.react-datepicker__quarter-text--highlighted-custom-1,\n.react-datepicker__year-text--highlighted-custom-1 {\n  color: magenta;\n}\n\n.react-datepicker__day--highlighted-custom-2,\n.react-datepicker__month-text--highlighted-custom-2,\n.react-datepicker__quarter-text--highlighted-custom-2,\n.react-datepicker__year-text--highlighted-custom-2 {\n  color: green;\n}\n\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range,\n.react-datepicker__quarter-text--selected,\n.react-datepicker__quarter-text--in-selecting-range,\n.react-datepicker__quarter-text--in-range,\n.react-datepicker__year-text--selected,\n.react-datepicker__year-text--in-selecting-range,\n.react-datepicker__year-text--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,\n.react-datepicker__month-text--selected:hover,\n.react-datepicker__month-text--in-selecting-range:hover,\n.react-datepicker__month-text--in-range:hover,\n.react-datepicker__quarter-text--selected:hover,\n.react-datepicker__quarter-text--in-selecting-range:hover,\n.react-datepicker__quarter-text--in-range:hover,\n.react-datepicker__year-text--selected:hover,\n.react-datepicker__year-text--in-selecting-range:hover,\n.react-datepicker__year-text--in-range:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--keyboard-selected,\n.react-datepicker__month-text--keyboard-selected,\n.react-datepicker__quarter-text--keyboard-selected,\n.react-datepicker__year-text--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2a87d0;\n  color: #fff;\n}\n\n.react-datepicker__day--keyboard-selected:hover,\n.react-datepicker__month-text--keyboard-selected:hover,\n.react-datepicker__quarter-text--keyboard-selected:hover,\n.react-datepicker__year-text--keyboard-selected:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--in-selecting-range ,\n.react-datepicker__month-text--in-selecting-range ,\n.react-datepicker__quarter-text--in-selecting-range ,\n.react-datepicker__year-text--in-selecting-range {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range\n.react-datepicker__month-text--in-range , .react-datepicker__month--selecting-range\n.react-datepicker__quarter-text--in-range , .react-datepicker__month--selecting-range\n.react-datepicker__year-text--in-range {\n  background-color: #f0f0f0;\n  color: #000;\n}\n\n.react-datepicker__day--disabled,\n.react-datepicker__month-text--disabled,\n.react-datepicker__quarter-text--disabled,\n.react-datepicker__year-text--disabled {\n  cursor: default;\n  color: #ccc;\n}\n\n.react-datepicker__day--disabled:hover,\n.react-datepicker__month-text--disabled:hover,\n.react-datepicker__quarter-text--disabled:hover,\n.react-datepicker__year-text--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__month--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\n.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\n  background-color: #216ba5;\n}\n\n.react-datepicker__month-text:hover,\n.react-datepicker__quarter-text:hover {\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n}\n\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  border-top-color: #ccc;\n  float: right;\n  margin-left: 20px;\n  top: 8px;\n  position: relative;\n  border-width: 0.45rem;\n}\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll;\n}\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px;\n}\n\n.react-datepicker__close-icon {\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  padding: 0px 6px 0px 0px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.react-datepicker__close-icon::after {\n  cursor: pointer;\n  background-color: #216ba5;\n  color: #fff;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  content: \"\\00d7\";\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left;\n}\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  z-index: 2147483647;\n}\n\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem;\n}\n\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n  .react-datepicker__portal .react-datepicker__day,\n  .react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem;\n  }\n}\n\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem;\n}\n\n.react-datepicker__portal .react-datepicker__navigation {\n  border: 0.81rem solid transparent;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous {\n  border-right-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next {\n  border-left-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};


/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./react-datepicker.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-datepicker/dist/react-datepicker.css");

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

/***/ "./node_modules/react-datepicker/dist/react-datepicker.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports,__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! date-fns/isDate */ "./node_modules/date-fns/esm/isDate/index.js"),__webpack_require__(/*! date-fns/isValid */ "./node_modules/date-fns/esm/isValid/index.js"),__webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js"),__webpack_require__(/*! date-fns/addMinutes */ "./node_modules/date-fns/esm/addMinutes/index.js"),__webpack_require__(/*! date-fns/addHours */ "./node_modules/date-fns/esm/addHours/index.js"),__webpack_require__(/*! date-fns/addDays */ "./node_modules/date-fns/esm/addDays/index.js"),__webpack_require__(/*! date-fns/addWeeks */ "./node_modules/date-fns/esm/addWeeks/index.js"),__webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js"),__webpack_require__(/*! date-fns/addYears */ "./node_modules/date-fns/esm/addYears/index.js"),__webpack_require__(/*! date-fns/subMinutes */ "./node_modules/date-fns/esm/subMinutes/index.js"),__webpack_require__(/*! date-fns/subHours */ "./node_modules/date-fns/esm/subHours/index.js"),__webpack_require__(/*! date-fns/subDays */ "./node_modules/date-fns/esm/subDays/index.js"),__webpack_require__(/*! date-fns/subWeeks */ "./node_modules/date-fns/esm/subWeeks/index.js"),__webpack_require__(/*! date-fns/subMonths */ "./node_modules/date-fns/esm/subMonths/index.js"),__webpack_require__(/*! date-fns/subYears */ "./node_modules/date-fns/esm/subYears/index.js"),__webpack_require__(/*! date-fns/getSeconds */ "./node_modules/date-fns/esm/getSeconds/index.js"),__webpack_require__(/*! date-fns/getMinutes */ "./node_modules/date-fns/esm/getMinutes/index.js"),__webpack_require__(/*! date-fns/getHours */ "./node_modules/date-fns/esm/getHours/index.js"),__webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js"),__webpack_require__(/*! date-fns/getDate */ "./node_modules/date-fns/esm/getDate/index.js"),__webpack_require__(/*! date-fns/getISOWeek */ "./node_modules/date-fns/esm/getISOWeek/index.js"),__webpack_require__(/*! date-fns/getMonth */ "./node_modules/date-fns/esm/getMonth/index.js"),__webpack_require__(/*! date-fns/getQuarter */ "./node_modules/date-fns/esm/getQuarter/index.js"),__webpack_require__(/*! date-fns/getYear */ "./node_modules/date-fns/esm/getYear/index.js"),__webpack_require__(/*! date-fns/getTime */ "./node_modules/date-fns/esm/getTime/index.js"),__webpack_require__(/*! date-fns/setSeconds */ "./node_modules/date-fns/esm/setSeconds/index.js"),__webpack_require__(/*! date-fns/setMinutes */ "./node_modules/date-fns/esm/setMinutes/index.js"),__webpack_require__(/*! date-fns/setHours */ "./node_modules/date-fns/esm/setHours/index.js"),__webpack_require__(/*! date-fns/setMonth */ "./node_modules/date-fns/esm/setMonth/index.js"),__webpack_require__(/*! date-fns/setQuarter */ "./node_modules/date-fns/esm/setQuarter/index.js"),__webpack_require__(/*! date-fns/setYear */ "./node_modules/date-fns/esm/setYear/index.js"),__webpack_require__(/*! date-fns/min */ "./node_modules/date-fns/esm/min/index.js"),__webpack_require__(/*! date-fns/max */ "./node_modules/date-fns/esm/max/index.js"),__webpack_require__(/*! date-fns/differenceInCalendarDays */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js"),__webpack_require__(/*! date-fns/differenceInCalendarMonths */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js"),__webpack_require__(/*! date-fns/differenceInCalendarWeeks */ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js"),__webpack_require__(/*! date-fns/differenceInCalendarYears */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js"),__webpack_require__(/*! date-fns/startOfDay */ "./node_modules/date-fns/esm/startOfDay/index.js"),__webpack_require__(/*! date-fns/startOfWeek */ "./node_modules/date-fns/esm/startOfWeek/index.js"),__webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js"),__webpack_require__(/*! date-fns/startOfQuarter */ "./node_modules/date-fns/esm/startOfQuarter/index.js"),__webpack_require__(/*! date-fns/startOfYear */ "./node_modules/date-fns/esm/startOfYear/index.js"),__webpack_require__(/*! date-fns/endOfDay */ "./node_modules/date-fns/esm/endOfDay/index.js"),__webpack_require__(/*! date-fns/endOfWeek */ "./node_modules/date-fns/esm/endOfWeek/index.js"),__webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js"),__webpack_require__(/*! date-fns/isEqual */ "./node_modules/date-fns/esm/isEqual/index.js"),__webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js"),__webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js"),__webpack_require__(/*! date-fns/isSameYear */ "./node_modules/date-fns/esm/isSameYear/index.js"),__webpack_require__(/*! date-fns/isSameQuarter */ "./node_modules/date-fns/esm/isSameQuarter/index.js"),__webpack_require__(/*! date-fns/isAfter */ "./node_modules/date-fns/esm/isAfter/index.js"),__webpack_require__(/*! date-fns/isBefore */ "./node_modules/date-fns/esm/isBefore/index.js"),__webpack_require__(/*! date-fns/isWithinInterval */ "./node_modules/date-fns/esm/isWithinInterval/index.js"),__webpack_require__(/*! date-fns/toDate */ "./node_modules/date-fns/esm/toDate/index.js"),__webpack_require__(/*! date-fns/parse */ "./node_modules/date-fns/esm/parse/index.js"),__webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js"),__webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js"),__webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js"),__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js")):undefined}(this,(function(e,t,r,a,n,o,s,i,p,l,d,c,u,f,h,m,y,v,D,w,k,g,b,C,S,_,M,P,E,N,O,Y,x,T,I,L,F,R,q,A,W,B,j,H,K,Q,V,U,$,z,G,J,X,Z,ee,te,re,ae,ne,oe,se,ie,pe){"use strict";function le(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var de=le(t),ce=le(a),ue=le(n),fe=le(o),he=le(s),me=le(i),ye=le(p),ve=le(l),De=le(d),we=le(c),ke=le(u),ge=le(m),be=le(y),Ce=le(v),Se=le(D),_e=le(w),Me=le(k),Pe=le(g),Ee=le(b),Ne=le(C),Oe=le(S),Ye=le(_),xe=le(M),Te=le(P),Ie=le(E),Le=le(N),Fe=le(O),Re=le(Y),qe=le(x),Ae=le(T),We=le(I),Be=le(L),je=le(F),He=le(R),Ke=le(q),Qe=le(W),Ve=le(B),Ue=le(j),$e=le(H),ze=le(K),Ge=le(Q),Je=le(V),Xe=le(z),Ze=le(G),et=le(J),tt=le(X),rt=le(Z),at=le(ee),nt=le(te),ot=le(re),st=le(ae),it=le(ne),pt=le(oe),lt=le(se),dt=le(pe);function ct(e){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ut(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ft(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ht(e,t,r){return t&&ft(e.prototype,t),r&&ft(e,r),e}function mt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function yt(){return(yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function vt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(r),!0).forEach((function(t){mt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function wt(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&gt(e,t)}function kt(e){return(kt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function gt(e,t){return(gt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function bt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ct(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?bt(e):t}function St(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=kt(e);if(t){var n=kt(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Ct(this,r)}}function _t(e){return function(e){if(Array.isArray(e))return Mt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Mt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Mt(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function Pt(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Et(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Nt={p:Et,P:function(e,t){var r,a=e.match(/(P+)(p+)?/),n=a[1],o=a[2];if(!o)return Pt(e,t);switch(n){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"})}return r.replace("{{date}}",Pt(n,t)).replace("{{time}}",Et(o,t))}},Ot=12,Yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function xt(e){var t=e?"string"==typeof e||e instanceof String?pt.default(e):st.default(e):new Date;return It(t)?t:null}function Tt(e,t,r,a){var n=null,o=Jt(r)||Jt(Gt()),s=!0;return Array.isArray(t)?(t.forEach((function(t){var r=it.default(e,t,new Date,{locale:o});a&&(s=It(r)&&e===he.default(r,t,{awareOfUnicodeTokens:!0})),It(r)&&s&&(n=r)})),n):(n=it.default(e,t,new Date,{locale:o}),a?s=It(n)&&e===he.default(n,t,{awareOfUnicodeTokens:!0}):It(n)||(t=t.match(Yt).map((function(e){var t=e[0];return"p"===t||"P"===t?o?(0,Nt[t])(e,o.formatLong):t:e})).join(""),e.length>0&&(n=it.default(e,t.slice(0,e.length),new Date)),It(n)||(n=new Date(e))),It(n)&&s?n:null)}function It(e){return fe.default(e)&&at.default(e,new Date("1/1/1000"))}function Lt(e,t,r){if("en"===r)return he.default(e,t,{awareOfUnicodeTokens:!0});var a=Jt(r);return r&&!a&&console.warn('A locale object was not found for the provided string ["'.concat(r,'"].')),!a&&Gt()&&Jt(Gt())&&(a=Jt(Gt())),he.default(e,t,{locale:a||null,awareOfUnicodeTokens:!0})}function Ft(e,t){var r=t.hour,a=void 0===r?0:r,n=t.minute,o=void 0===n?0:n,s=t.second,i=void 0===s?0:s;return Re.default(Fe.default(Le.default(e,i),o),a)}function Rt(e,t){var r=t&&Jt(t)||Gt()&&Jt(Gt());return Oe.default(e,r?{locale:r}:null)}function qt(e,t){return Lt(e,"ddd",t)}function At(e){return Ve.default(e)}function Wt(e,t){var r=Jt(t||Gt());return Ue.default(e,{locale:r})}function Bt(e){return $e.default(e)}function jt(e){return Ge.default(e)}function Ht(e){return ze.default(e)}function Kt(e,t){return e&&t?tt.default(e,t):!e&&!t}function Qt(e,t){return e&&t?et.default(e,t):!e&&!t}function Vt(e,t){return e&&t?rt.default(e,t):!e&&!t}function Ut(e,t){return e&&t?Ze.default(e,t):!e&&!t}function $t(e,t){return e&&t?Xe.default(e,t):!e&&!t}function zt(e,t,r){var a,n=Ve.default(t),o=Je.default(r);try{a=ot.default(e,{start:n,end:o})}catch(e){a=!1}return a}function Gt(){return("undefined"!=typeof window?window:global).__localeId__}function Jt(e){if("string"==typeof e){var t="undefined"!=typeof window?window:global;return t.__localeData__?t.__localeData__[e]:null}return e}function Xt(e,t){return Lt(qe.default(xt(),e),"LLLL",t)}function Zt(e,t){return Lt(qe.default(xt(),e),"LLL",t)}function er(e,t){return Lt(Ae.default(xt(),e),"QQQ",t)}function tr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.includeDates,s=t.filterDate;return pr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return Ut(e,t)}))||o&&!o.some((function(t){return Ut(e,t)}))||s&&!s(xt(e))||!1}function rr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeDates;return r&&r.some((function(t){return Ut(e,t)}))||!1}function ar(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.includeDates,s=t.filterDate;return pr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return Qt(e,t)}))||o&&!o.some((function(t){return Qt(e,t)}))||s&&!s(xt(e))||!1}function nr(e,t,r,a){var n=Te.default(e),o=Ye.default(e),s=Te.default(t),i=Ye.default(t),p=Te.default(a);return n===s&&n===p?o<=r&&r<=i:n<s?p===n&&o<=r||p===s&&i>=r||p<s&&p>n:void 0}function or(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=t.excludeDates,o=t.includeDates,s=t.filterDate;return pr(e,{minDate:r,maxDate:a})||n&&n.some((function(t){return Vt(e,t)}))||o&&!o.some((function(t){return Vt(e,t)}))||s&&!s(xt(e))||!1}function sr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate,n=new Date(e,0,1);return pr(n,{minDate:r,maxDate:a})||!1}function ir(e,t,r,a){var n=Te.default(e),o=xe.default(e),s=Te.default(t),i=xe.default(t),p=Te.default(a);return n===s&&n===p?o<=r&&r<=i:n<s?p===n&&o<=r||p===s&&i>=r||p<s&&p>n:void 0}function pr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.maxDate;return r&&He.default(e,r)<0||a&&He.default(e,a)>0}function lr(e,t){return t.some((function(t){return Pe.default(t)===Pe.default(e)&&Me.default(t)===Me.default(e)}))}function dr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeTimes,a=t.includeTimes,n=t.filterTime;return r&&lr(e,r)||a&&!lr(e,a)||n&&!n(e)||!1}function cr(e,t){var r=t.minTime,a=t.maxTime;if(!r||!a)throw new Error("Both minTime and maxTime props required");var n,o=xt(),s=Re.default(Fe.default(o,Me.default(e)),Pe.default(e)),i=Re.default(Fe.default(o,Me.default(r)),Pe.default(r)),p=Re.default(Fe.default(o,Me.default(a)),Pe.default(a));try{n=!ot.default(s,{start:i,end:p})}catch(e){n=!1}return n}function ur(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.includeDates,n=Ce.default(e,1);return r&&Ke.default(r,n)>0||a&&a.every((function(e){return Ke.default(e,n)>0}))||!1}function fr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.includeDates,n=we.default(e,1);return r&&Ke.default(n,r)>0||a&&a.every((function(e){return Ke.default(n,e)>0}))||!1}function hr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.includeDates,n=Se.default(e,1);return r&&Qe.default(r,n)>0||a&&a.every((function(e){return Qe.default(e,n)>0}))||!1}function mr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.includeDates,n=ke.default(e,1);return r&&Qe.default(n,r)>0||a&&a.every((function(e){return Qe.default(n,e)>0}))||!1}function yr(e){var t=e.minDate,r=e.includeDates;if(r&&t){var a=r.filter((function(e){return He.default(e,t)>=0}));return Be.default(a)}return r?Be.default(r):t}function vr(e){var t=e.maxDate,r=e.includeDates;if(r&&t){var a=r.filter((function(e){return He.default(e,t)<=0}));return je.default(a)}return r?je.default(r):t}function Dr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",r=new Map,a=0,n=e.length;a<n;a++){var o=e[a];if(ue.default(o)){var s=Lt(o,"MM.dd.yyyy"),i=r.get(s)||[];i.includes(t)||(i.push(t),r.set(s,i))}else if("object"===ct(o)){var p=Object.keys(o),l=p[0],d=o[p[0]];if("string"==typeof l&&d.constructor===Array)for(var c=0,u=d.length;c<u;c++){var f=Lt(d[c],"MM.dd.yyyy"),h=r.get(f)||[];h.includes(l)||(h.push(l),r.set(f,h))}}}return r}function wr(e,t,r,a,n){for(var o=n.length,s=[],i=0;i<o;i++){var p=me.default(ye.default(e,Pe.default(n[i])),Me.default(n[i])),l=me.default(e,(r+1)*a);at.default(p,t)&&nt.default(p,l)&&s.push(n[i])}return s}function kr(e){return e<10?"0".concat(e):"".concat(e)}function gr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ot,r=Math.ceil(Te.default(e)/t)*t,a=r-(t-1);return{startPeriod:a,endPeriod:r}}function br(e,t,r,a){for(var n=[],o=0;o<2*t+1;o++){var s=e+t-o,i=!0;r&&(i=Te.default(r)<=s),a&&i&&(i=Te.default(a)>=s),i&&n.push(s)}return n}var Cr=function(e){wt(r,e);var t=St(r);function r(e){var a;ut(this,r),mt(bt(a=t.call(this,e)),"renderOptions",(function(){var e=a.props.year,t=a.state.yearsList.map((function(t){return de.default.createElement("div",{className:e===t?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:t,onClick:a.onChange.bind(bt(a),t)},e===t?de.default.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",t)})),r=a.props.minDate?Te.default(a.props.minDate):null,n=a.props.maxDate?Te.default(a.props.maxDate):null;return n&&a.state.yearsList.find((function(e){return e===n}))||t.unshift(de.default.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:a.incrementYears},de.default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),r&&a.state.yearsList.find((function(e){return e===r}))||t.push(de.default.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:a.decrementYears},de.default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),t})),mt(bt(a),"onChange",(function(e){a.props.onChange(e)})),mt(bt(a),"handleClickOutside",(function(){a.props.onCancel()})),mt(bt(a),"shiftYears",(function(e){var t=a.state.yearsList.map((function(t){return t+e}));a.setState({yearsList:t})})),mt(bt(a),"incrementYears",(function(){return a.shiftYears(1)})),mt(bt(a),"decrementYears",(function(){return a.shiftYears(-1)}));var n=e.yearDropdownItemNumber,o=e.scrollableYearDropdown,s=n||(o?10:5);return a.state={yearsList:br(a.props.year,s,a.props.minDate,a.props.maxDate)},a}return ht(r,[{key:"render",value:function(){var e=ce.default({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return de.default.createElement("div",{className:e},this.renderOptions())}}]),r}(de.default.Component),Sr=lt.default(Cr),_r=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),mt(bt(e),"renderSelectOptions",(function(){for(var t=e.props.minDate?Te.default(e.props.minDate):1900,r=e.props.maxDate?Te.default(e.props.maxDate):2100,a=[],n=t;n<=r;n++)a.push(de.default.createElement("option",{key:n,value:n},n));return a})),mt(bt(e),"onSelectChange",(function(t){e.onChange(t.target.value)})),mt(bt(e),"renderSelectMode",(function(){return de.default.createElement("select",{value:e.props.year,className:"react-datepicker__year-select",onChange:e.onSelectChange},e.renderSelectOptions())})),mt(bt(e),"renderReadView",(function(t){return de.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(t){return e.toggleDropdown(t)}},de.default.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),de.default.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},e.props.year))})),mt(bt(e),"renderDropdown",(function(){return de.default.createElement(Sr,{key:"dropdown",year:e.props.year,onChange:e.onChange,onCancel:e.toggleDropdown,minDate:e.props.minDate,maxDate:e.props.maxDate,scrollableYearDropdown:e.props.scrollableYearDropdown,yearDropdownItemNumber:e.props.yearDropdownItemNumber})})),mt(bt(e),"renderScrollMode",(function(){var t=e.state.dropdownVisible,r=[e.renderReadView(!t)];return t&&r.unshift(e.renderDropdown()),r})),mt(bt(e),"onChange",(function(t){e.toggleDropdown(),t!==e.props.year&&e.props.onChange(t)})),mt(bt(e),"toggleDropdown",(function(t){e.setState({dropdownVisible:!e.state.dropdownVisible},(function(){e.props.adjustDateOnChange&&e.handleYearChange(e.props.date,t)}))})),mt(bt(e),"handleYearChange",(function(t,r){e.onSelect(t,r),e.setOpen()})),mt(bt(e),"onSelect",(function(t,r){e.props.onSelect&&e.props.onSelect(t,r)})),mt(bt(e),"setOpen",(function(){e.props.setOpen&&e.props.setOpen(!0)})),e}return ht(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode()}return de.default.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}(de.default.Component),Mr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"renderOptions",(function(){return e.props.monthNames.map((function(t,r){return de.default.createElement("div",{className:e.props.month===r?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:t,onClick:e.onChange.bind(bt(e),r)},e.props.month===r?de.default.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",t)}))})),mt(bt(e),"onChange",(function(t){return e.props.onChange(t)})),mt(bt(e),"handleClickOutside",(function(){return e.props.onCancel()})),e}return ht(r,[{key:"render",value:function(){return de.default.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}]),r}(de.default.Component),Pr=lt.default(Mr),Er=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),mt(bt(e),"renderSelectOptions",(function(e){return e.map((function(e,t){return de.default.createElement("option",{key:t,value:t},e)}))})),mt(bt(e),"renderSelectMode",(function(t){return de.default.createElement("select",{value:e.props.month,className:"react-datepicker__month-select",onChange:function(t){return e.onChange(t.target.value)}},e.renderSelectOptions(t))})),mt(bt(e),"renderReadView",(function(t,r){return de.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:e.toggleDropdown},de.default.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),de.default.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},r[e.props.month]))})),mt(bt(e),"renderDropdown",(function(t){return de.default.createElement(Pr,{key:"dropdown",month:e.props.month,monthNames:t,onChange:e.onChange,onCancel:e.toggleDropdown})})),mt(bt(e),"renderScrollMode",(function(t){var r=e.state.dropdownVisible,a=[e.renderReadView(!r,t)];return r&&a.unshift(e.renderDropdown(t)),a})),mt(bt(e),"onChange",(function(t){e.toggleDropdown(),t!==e.props.month&&e.props.onChange(t)})),mt(bt(e),"toggleDropdown",(function(){return e.setState({dropdownVisible:!e.state.dropdownVisible})})),e}return ht(r,[{key:"render",value:function(){var e,t=this,r=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(e){return Zt(e,t.props.locale)}:function(e){return Xt(e,t.props.locale)});switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode(r);break;case"select":e=this.renderSelectMode(r)}return de.default.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}(de.default.Component);function Nr(e,t){for(var r=[],a=Bt(e),n=Bt(t);!at.default(a,n);)r.push(xt(a)),a=we.default(a,1);return r}var Or=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"renderOptions",(function(){return a.state.monthYearsList.map((function(e){var t=Ie.default(e),r=Kt(a.props.date,e)&&Qt(a.props.date,e);return de.default.createElement("div",{className:r?"react-datepicker__month-year-option --selected_month-year":"react-datepicker__month-year-option",key:t,onClick:a.onChange.bind(bt(a),t)},r?de.default.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",Lt(e,a.props.dateFormat,a.props.locale))}))})),mt(bt(a),"onChange",(function(e){return a.props.onChange(e)})),mt(bt(a),"handleClickOutside",(function(){a.props.onCancel()})),a.state={monthYearsList:Nr(a.props.minDate,a.props.maxDate)},a}return ht(r,[{key:"render",value:function(){var e=ce.default({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return de.default.createElement("div",{className:e},this.renderOptions())}}]),r}(de.default.Component),Yr=lt.default(Or),xr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"state",{dropdownVisible:!1}),mt(bt(e),"renderSelectOptions",(function(){for(var t=Bt(e.props.minDate),r=Bt(e.props.maxDate),a=[];!at.default(t,r);){var n=Ie.default(t);a.push(de.default.createElement("option",{key:n,value:n},Lt(t,e.props.dateFormat,e.props.locale))),t=we.default(t,1)}return a})),mt(bt(e),"onSelectChange",(function(t){e.onChange(t.target.value)})),mt(bt(e),"renderSelectMode",(function(){return de.default.createElement("select",{value:Ie.default(Bt(e.props.date)),className:"react-datepicker__month-year-select",onChange:e.onSelectChange},e.renderSelectOptions())})),mt(bt(e),"renderReadView",(function(t){var r=Lt(e.props.date,e.props.dateFormat,e.props.locale);return de.default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(t){return e.toggleDropdown(t)}},de.default.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),de.default.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},r))})),mt(bt(e),"renderDropdown",(function(){return de.default.createElement(Yr,{key:"dropdown",date:e.props.date,dateFormat:e.props.dateFormat,onChange:e.onChange,onCancel:e.toggleDropdown,minDate:e.props.minDate,maxDate:e.props.maxDate,scrollableMonthYearDropdown:e.props.scrollableMonthYearDropdown,locale:e.props.locale})})),mt(bt(e),"renderScrollMode",(function(){var t=e.state.dropdownVisible,r=[e.renderReadView(!t)];return t&&r.unshift(e.renderDropdown()),r})),mt(bt(e),"onChange",(function(t){e.toggleDropdown();var r=xt(parseInt(t));Kt(e.props.date,r)&&Qt(e.props.date,r)||e.props.onChange(r)})),mt(bt(e),"toggleDropdown",(function(){return e.setState({dropdownVisible:!e.state.dropdownVisible})})),e}return ht(r,[{key:"render",value:function(){var e;switch(this.props.dropdownMode){case"scroll":e=this.renderScrollMode();break;case"select":e=this.renderSelectMode()}return de.default.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},e)}}]),r}(de.default.Component),Tr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"dayEl",de.default.createRef()),mt(bt(e),"handleClick",(function(t){!e.isDisabled()&&e.props.onClick&&e.props.onClick(t)})),mt(bt(e),"handleMouseEnter",(function(t){!e.isDisabled()&&e.props.onMouseEnter&&e.props.onMouseEnter(t)})),mt(bt(e),"handleOnKeyDown",(function(t){" "===t.key&&(t.preventDefault(),t.key="Enter"),e.props.handleOnKeyDown(t)})),mt(bt(e),"isSameDay",(function(t){return Ut(e.props.day,t)})),mt(bt(e),"isKeyboardSelected",(function(){return!e.props.disabledKeyboardNavigation&&!e.isSameDay(e.props.selected)&&e.isSameDay(e.props.preSelection)})),mt(bt(e),"isDisabled",(function(){return tr(e.props.day,e.props)})),mt(bt(e),"isExcluded",(function(){return rr(e.props.day,e.props)})),mt(bt(e),"getHighLightedClass",(function(t){var r=e.props,a=r.day,n=r.highlightDates;if(!n)return!1;var o=Lt(a,"MM.dd.yyyy");return n.get(o)})),mt(bt(e),"isInRange",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return!(!a||!n)&&zt(r,a,n)})),mt(bt(e),"isInSelectingRange",(function(){var t=e.props,r=t.day,a=t.selectsStart,n=t.selectsEnd,o=t.selectsRange,s=t.selectingDate,i=t.startDate,p=t.endDate;return!(!(a||n||o)||!s||e.isDisabled())&&(a&&p&&(nt.default(s,p)||$t(s,p))?zt(r,s,p):(n&&i&&(at.default(s,i)||$t(s,i))||!(!o||!i||p||!at.default(s,i)&&!$t(s,i)))&&zt(r,i,s))})),mt(bt(e),"isSelectingRangeStart",(function(){if(!e.isInSelectingRange())return!1;var t=e.props,r=t.day,a=t.selectingDate,n=t.startDate;return Ut(r,t.selectsStart?a:n)})),mt(bt(e),"isSelectingRangeEnd",(function(){if(!e.isInSelectingRange())return!1;var t=e.props,r=t.day,a=t.selectingDate,n=t.endDate;return Ut(r,t.selectsEnd?a:n)})),mt(bt(e),"isRangeStart",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return!(!a||!n)&&Ut(a,r)})),mt(bt(e),"isRangeEnd",(function(){var t=e.props,r=t.day,a=t.startDate,n=t.endDate;return!(!a||!n)&&Ut(n,r)})),mt(bt(e),"isWeekend",(function(){var t=Ee.default(e.props.day);return 0===t||6===t})),mt(bt(e),"isOutsideMonth",(function(){return void 0!==e.props.month&&e.props.month!==Ye.default(e.props.day)})),mt(bt(e),"getClassNames",(function(t){var r=e.props.dayClassName?e.props.dayClassName(t):void 0;return ce.default("react-datepicker__day",r,"react-datepicker__day--"+qt(e.props.day),{"react-datepicker__day--disabled":e.isDisabled(),"react-datepicker__day--excluded":e.isExcluded(),"react-datepicker__day--selected":e.isSameDay(e.props.selected),"react-datepicker__day--keyboard-selected":e.isKeyboardSelected(),"react-datepicker__day--range-start":e.isRangeStart(),"react-datepicker__day--range-end":e.isRangeEnd(),"react-datepicker__day--in-range":e.isInRange(),"react-datepicker__day--in-selecting-range":e.isInSelectingRange(),"react-datepicker__day--selecting-range-start":e.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":e.isSelectingRangeEnd(),"react-datepicker__day--today":e.isSameDay(xt()),"react-datepicker__day--weekend":e.isWeekend(),"react-datepicker__day--outside-month":e.isOutsideMonth()},e.getHighLightedClass("react-datepicker__day--highlighted"))})),mt(bt(e),"getAriaLabel",(function(){var t=e.props,r=t.day,a=t.ariaLabelPrefixWhenEnabled,n=void 0===a?"Choose":a,o=t.ariaLabelPrefixWhenDisabled,s=void 0===o?"Not available":o,i=e.isDisabled()||e.isExcluded()?s:n;return"".concat(i," ").concat(Lt(r,"PPPP"))})),mt(bt(e),"getTabIndex",(function(t,r){var a=t||e.props.selected,n=r||e.props.preSelection;return e.isKeyboardSelected()||e.isSameDay(a)&&Ut(n,a)?0:-1})),mt(bt(e),"handleFocusDay",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=!1;0===e.getTabIndex()&&!t.isInputFocused&&e.isSameDay(e.props.preSelection)&&(document.activeElement&&document.activeElement!==document.body||(r=!0),e.props.inline&&!e.props.shouldFocusDayInline&&(r=!1),e.props.containerRef&&e.props.containerRef.current&&e.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(r=!0)),r&&e.dayEl.current.focus({preventScroll:!0})})),mt(bt(e),"renderDayContents",(function(){if(e.isOutsideMonth()){if(e.props.monthShowsDuplicateDaysEnd&&Ne.default(e.props.day)<10)return null;if(e.props.monthShowsDuplicateDaysStart&&Ne.default(e.props.day)>20)return null}return e.props.renderDayContents?e.props.renderDayContents(Ne.default(e.props.day),e.props.day):Ne.default(e.props.day)})),mt(bt(e),"render",(function(){return de.default.createElement("div",{ref:e.dayEl,className:e.getClassNames(e.props.day),onKeyDown:e.handleOnKeyDown,onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,tabIndex:e.getTabIndex(),"aria-label":e.getAriaLabel(),role:"button","aria-disabled":e.isDisabled()},e.renderDayContents())})),e}return ht(r,[{key:"componentDidMount",value:function(){this.handleFocusDay()}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e)}}]),r}(de.default.Component),Ir=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"handleClick",(function(t){e.props.onClick&&e.props.onClick(t)})),e}return ht(r,[{key:"render",value:function(){var e=this.props,t=e.weekNumber,r=e.ariaLabelPrefix,a=void 0===r?"week ":r,n={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!e.onClick};return de.default.createElement("div",{className:ce.default(n),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick},t)}}]),r}(de.default.Component),Lr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"handleDayClick",(function(t,r){e.props.onDayClick&&e.props.onDayClick(t,r)})),mt(bt(e),"handleDayMouseEnter",(function(t){e.props.onDayMouseEnter&&e.props.onDayMouseEnter(t)})),mt(bt(e),"handleWeekClick",(function(t,r,a){"function"==typeof e.props.onWeekSelect&&e.props.onWeekSelect(t,r,a),e.props.shouldCloseOnSelect&&e.props.setOpen(!1)})),mt(bt(e),"formatWeekNumber",(function(t){return e.props.formatWeekNumber?e.props.formatWeekNumber(t):Rt(t)})),mt(bt(e),"renderDays",(function(){var t=Wt(e.props.day,e.props.locale),r=[],a=e.formatWeekNumber(t);if(e.props.showWeekNumber){var n=e.props.onWeekSelect?e.handleWeekClick.bind(bt(e),t,a):void 0;r.push(de.default.createElement(Ir,{key:"W",weekNumber:a,onClick:n,ariaLabelPrefix:e.props.ariaLabelPrefix}))}return r.concat([0,1,2,3,4,5,6].map((function(r){var a=ve.default(t,r);return de.default.createElement(Tr,{ariaLabelPrefixWhenEnabled:e.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:e.props.disabledDayAriaLabelPrefix,key:a.valueOf(),day:a,month:e.props.month,onClick:e.handleDayClick.bind(bt(e),a),onMouseEnter:e.handleDayMouseEnter.bind(bt(e),a),minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,includeDates:e.props.includeDates,highlightDates:e.props.highlightDates,selectingDate:e.props.selectingDate,filterDate:e.props.filterDate,preSelection:e.props.preSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,startDate:e.props.startDate,endDate:e.props.endDate,dayClassName:e.props.dayClassName,renderDayContents:e.props.renderDayContents,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,handleOnKeyDown:e.props.handleOnKeyDown,isInputFocused:e.props.isInputFocused,containerRef:e.props.containerRef,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:e.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:e.props.monthShowsDuplicateDaysStart})})))})),e}return ht(r,[{key:"render",value:function(){return de.default.createElement("div",{className:"react-datepicker__week"},this.renderDays())}}],[{key:"defaultProps",get:function(){return{shouldCloseOnSelect:!0}}}]),r}(de.default.Component),Fr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"MONTH_REFS",_t(Array(12)).map((function(){return de.default.createRef()}))),mt(bt(e),"isDisabled",(function(t){return tr(t,e.props)})),mt(bt(e),"isExcluded",(function(t){return rr(t,e.props)})),mt(bt(e),"handleDayClick",(function(t,r){e.props.onDayClick&&e.props.onDayClick(t,r,e.props.orderInDisplay)})),mt(bt(e),"handleDayMouseEnter",(function(t){e.props.onDayMouseEnter&&e.props.onDayMouseEnter(t)})),mt(bt(e),"handleMouseLeave",(function(){e.props.onMouseLeave&&e.props.onMouseLeave()})),mt(bt(e),"isRangeStartMonth",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return!(!n||!o)&&Qt(qe.default(a,t),n)})),mt(bt(e),"isRangeStartQuarter",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return!(!n||!o)&&Vt(Ae.default(a,t),n)})),mt(bt(e),"isRangeEndMonth",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return!(!n||!o)&&Qt(qe.default(a,t),o)})),mt(bt(e),"isRangeEndQuarter",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate;return!(!n||!o)&&Vt(Ae.default(a,t),o)})),mt(bt(e),"isWeekInMonth",(function(t){var r=e.props.day,a=ve.default(t,6);return Qt(t,r)||Qt(a,r)})),mt(bt(e),"renderWeeks",(function(){for(var t=[],r=e.props.fixedHeight,a=Wt(Bt(e.props.day),e.props.locale),n=0,o=!1;t.push(de.default.createElement(Lr,{ariaLabelPrefix:e.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:e.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:e.props.disabledDayAriaLabelPrefix,key:n,day:a,month:Ye.default(e.props.day),onDayClick:e.handleDayClick,onDayMouseEnter:e.handleDayMouseEnter,onWeekSelect:e.props.onWeekSelect,formatWeekNumber:e.props.formatWeekNumber,locale:e.props.locale,minDate:e.props.minDate,maxDate:e.props.maxDate,excludeDates:e.props.excludeDates,includeDates:e.props.includeDates,inline:e.props.inline,shouldFocusDayInline:e.props.shouldFocusDayInline,highlightDates:e.props.highlightDates,selectingDate:e.props.selectingDate,filterDate:e.props.filterDate,preSelection:e.props.preSelection,selected:e.props.selected,selectsStart:e.props.selectsStart,selectsEnd:e.props.selectsEnd,selectsRange:e.props.selectsRange,showWeekNumber:e.props.showWeekNumbers,startDate:e.props.startDate,endDate:e.props.endDate,dayClassName:e.props.dayClassName,setOpen:e.props.setOpen,shouldCloseOnSelect:e.props.shouldCloseOnSelect,disabledKeyboardNavigation:e.props.disabledKeyboardNavigation,renderDayContents:e.props.renderDayContents,handleOnKeyDown:e.props.handleOnKeyDown,isInputFocused:e.props.isInputFocused,containerRef:e.props.containerRef,monthShowsDuplicateDaysEnd:e.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:e.props.monthShowsDuplicateDaysStart})),!o;){n++,a=De.default(a,1);var s=r&&n>=6,i=!r&&!e.isWeekInMonth(a);if(s||i){if(!e.props.peekNextMonth)break;o=!0}}return t})),mt(bt(e),"onMonthClick",(function(t,r){e.handleDayClick(Bt(qe.default(e.props.day,r)),t)})),mt(bt(e),"handleMonthNavigation",(function(t,r){e.isDisabled(r)||e.isExcluded(r)||(e.props.setPreSelection(r),e.MONTH_REFS[t].current&&e.MONTH_REFS[t].current.focus())})),mt(bt(e),"onMonthKeyDown",(function(t,r){var a=t.key;if(!e.props.disabledKeyboardNavigation)switch(a){case"Enter":e.onMonthClick(t,r),e.props.setPreSelection(e.props.selected);break;case"ArrowRight":e.handleMonthNavigation(11===r?0:r+1,we.default(e.props.preSelection,1));break;case"ArrowLeft":e.handleMonthNavigation(0===r?11:r-1,Ce.default(e.props.preSelection,1))}})),mt(bt(e),"onQuarterClick",(function(t,r){e.handleDayClick(Ht(Ae.default(e.props.day,r)),t)})),mt(bt(e),"getMonthClassNames",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate,s=r.selected,i=r.minDate,p=r.maxDate,l=r.preSelection,d=r.monthClassName,c=d?d(a):void 0;return ce.default("react-datepicker__month-text","react-datepicker__month-".concat(t),c,{"react-datepicker__month--disabled":(i||p)&&ar(qe.default(a,t),e.props),"react-datepicker__month--selected":Ye.default(a)===t&&Te.default(a)===Te.default(s),"react-datepicker__month-text--keyboard-selected":Ye.default(l)===t,"react-datepicker__month--in-range":nr(n,o,t,a),"react-datepicker__month--range-start":e.isRangeStartMonth(t),"react-datepicker__month--range-end":e.isRangeEndMonth(t)})})),mt(bt(e),"getTabIndex",(function(t){var r=Ye.default(e.props.preSelection);return e.props.disabledKeyboardNavigation||t!==r?"-1":"0"})),mt(bt(e),"getAriaLabel",(function(t){var r=e.props,a=r.ariaLabelPrefix,n=void 0===a?"Choose":a,o=r.disabledDayAriaLabelPrefix,s=void 0===o?"Not available":o,i=r.day,p=qe.default(i,t),l=e.isDisabled(p)||e.isExcluded(p)?s:n;return"".concat(l," ").concat(Lt(p,"MMMM yyyy"))})),mt(bt(e),"getQuarterClassNames",(function(t){var r=e.props,a=r.day,n=r.startDate,o=r.endDate,s=r.selected,i=r.minDate,p=r.maxDate;return ce.default("react-datepicker__quarter-text","react-datepicker__quarter-".concat(t),{"react-datepicker__quarter--disabled":(i||p)&&or(Ae.default(a,t),e.props),"react-datepicker__quarter--selected":xe.default(a)===t&&Te.default(a)===Te.default(s),"react-datepicker__quarter--in-range":ir(n,o,t,a),"react-datepicker__quarter--range-start":e.isRangeStartQuarter(t),"react-datepicker__quarter--range-end":e.isRangeEndQuarter(t)})})),mt(bt(e),"renderMonths",(function(){var t=e.props,r=t.showFullMonthYearPicker,a=t.showTwoColumnMonthYearPicker,n=t.showFourColumnMonthYearPicker,o=t.locale;return(n?[[0,1,2,3],[4,5,6,7],[8,9,10,11]]:a?[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]]).map((function(t,a){return de.default.createElement("div",{className:"react-datepicker__month-wrapper",key:a},t.map((function(t,a){return de.default.createElement("div",{ref:e.MONTH_REFS[t],key:a,onClick:function(r){e.onMonthClick(r,t)},onKeyDown:function(r){e.onMonthKeyDown(r,t)},tabIndex:e.getTabIndex(t),className:e.getMonthClassNames(t),role:"button","aria-label":e.getAriaLabel(t)},r?Xt(t,o):Zt(t,o))})))}))})),mt(bt(e),"renderQuarters",(function(){return de.default.createElement("div",{className:"react-datepicker__quarter-wrapper"},[1,2,3,4].map((function(t,r){return de.default.createElement("div",{key:r,onClick:function(r){e.onQuarterClick(r,t)},className:e.getQuarterClassNames(t)},er(t,e.props.locale))})))})),mt(bt(e),"getClassNames",(function(){var t=e.props;t.day;var r=t.selectingDate,a=t.selectsStart,n=t.selectsEnd,o=t.showMonthYearPicker,s=t.showQuarterYearPicker;return ce.default("react-datepicker__month",{"react-datepicker__month--selecting-range":r&&(a||n)},{"react-datepicker__monthPicker":o},{"react-datepicker__quarterPicker":s})})),e}return ht(r,[{key:"render",value:function(){var e=this.props,t=e.showMonthYearPicker,r=e.showQuarterYearPicker,a=e.day,n=e.ariaLabelPrefix,o=void 0===n?"month ":n;return de.default.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,"aria-label":"".concat(o," ").concat(Lt(a,"yyyy-MM"))},t?this.renderMonths():r?this.renderQuarters():this.renderWeeks())}}]),r}(de.default.Component),Rr=function(e){wt(r,e);var t=St(r);function r(){var e;ut(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return mt(bt(e=t.call.apply(t,[this].concat(n))),"state",{height:null}),mt(bt(e),"handleClick",(function(t){(e.props.minTime||e.props.maxTime)&&cr(t,e.props)||(e.props.excludeTimes||e.props.includeTimes||e.props.filterTime)&&dr(t,e.props)||e.props.onChange(t)})),mt(bt(e),"liClasses",(function(t,r,a){var n=["react-datepicker__time-list-item",e.props.timeClassName?e.props.timeClassName(t,r,a):void 0];return e.props.selected&&r===Pe.default(t)&&a===Me.default(t)&&n.push("react-datepicker__time-list-item--selected"),((e.props.minTime||e.props.maxTime)&&cr(t,e.props)||(e.props.excludeTimes||e.props.includeTimes||e.props.filterTime)&&dr(t,e.props))&&n.push("react-datepicker__time-list-item--disabled"),e.props.injectTimes&&(60*Pe.default(t)+Me.default(t))%e.props.intervals!=0&&n.push("react-datepicker__time-list-item--injected"),n.join(" ")})),mt(bt(e),"renderTimes",(function(){for(var t=[],r=e.props.format?e.props.format:"p",a=e.props.intervals,n=At(xt(e.props.selected)),o=1440/a,s=e.props.injectTimes&&e.props.injectTimes.sort((function(e,t){return e-t})),i=e.props.selected||e.props.openToDate||xt(),p=Pe.default(i),l=Me.default(i),d=Re.default(Fe.default(n,l),p),c=0;c<o;c++){var u=me.default(n,c*a);if(t.push(u),s){var f=wr(n,u,c,a,s);t=t.concat(f)}}return t.map((function(t,a){return de.default.createElement("li",{key:a,onClick:e.handleClick.bind(bt(e),t),className:e.liClasses(t,p,l),ref:function(r){(nt.default(t,d)||$t(t,d))&&(e.centerLi=r)},tabIndex:"0"},Lt(t,r,e.props.locale))}))})),e}return ht(r,[{key:"componentDidMount",value:function(){this.list.scrollTop=r.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight})}},{key:"render",value:function(){var e=this,t=this.state.height;return de.default.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},de.default.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(t){e.header=t}},de.default.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),de.default.createElement("div",{className:"react-datepicker__time"},de.default.createElement("div",{className:"react-datepicker__time-box"},de.default.createElement("ul",{className:"react-datepicker__time-list",ref:function(t){e.list=t},style:t?{height:t}:{},tabIndex:"0"},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return{intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),r}(de.default.Component);mt(Rr,"calcCenterPosition",(function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)}));var qr=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"handleYearClick",(function(e,t){a.props.onDayClick&&a.props.onDayClick(e,t)})),mt(bt(a),"isSameDay",(function(e,t){return Ut(e,t)})),mt(bt(a),"isKeyboardSelected",(function(e){var t=jt(We.default(a.props.date,e));return!a.props.disabledKeyboardNavigation&&!a.props.inline&&!Ut(t,jt(a.props.selected))&&Ut(t,jt(a.props.preSelection))})),mt(bt(a),"onYearClick",(function(e,t){var r=a.props.date;a.handleYearClick(jt(We.default(r,t)),e)})),mt(bt(a),"getYearClassNames",(function(e){var t=a.props,r=t.minDate,n=t.maxDate,o=t.selected;return ce.default("react-datepicker__year-text",{"react-datepicker__year-text--selected":e===Te.default(o),"react-datepicker__year-text--disabled":(r||n)&&sr(e,a.props),"react-datepicker__year-text--keyboard-selected":a.isKeyboardSelected(e),"react-datepicker__year-text--today":e===Te.default(xt())})})),a}return ht(r,[{key:"render",value:function(){for(var e=this,t=[],r=this.props,a=gr(r.date,r.yearItemNumber),n=a.startPeriod,o=a.endPeriod,s=function(r){t.push(de.default.createElement("div",{onClick:function(t){e.onYearClick(t,r)},className:e.getYearClassNames(r),key:r},r))},i=n;i<=o;i++)s(i);return de.default.createElement("div",{className:"react-datepicker__year"},de.default.createElement("div",{className:"react-datepicker__year-wrapper"},t))}}]),r}(de.default.Component),Ar=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"onTimeChange",(function(e){a.setState({time:e});var t=new Date;t.setHours(e.split(":")[0]),t.setMinutes(e.split(":")[1]),a.props.onChange(t)})),mt(bt(a),"renderTimeInput",(function(){var e=a.state.time,t=a.props,r=t.date,n=t.timeString,o=t.customTimeInput;return o?de.default.cloneElement(o,{date:r,value:e,onChange:a.onTimeChange}):de.default.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:e,onChange:function(e){a.onTimeChange(e.target.value||n)}})})),a.state={time:a.props.timeString},a}return ht(r,[{key:"render",value:function(){return de.default.createElement("div",{className:"react-datepicker__input-time-container"},de.default.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),de.default.createElement("div",{className:"react-datepicker-time__input-container"},de.default.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.timeString!==t.time?{time:e.timeString}:null}}]),r}(de.default.Component);function Wr(e){var t=e.className,r=e.children,a=e.showPopperArrow,n=e.arrowProps,o=void 0===n?{}:n;return de.default.createElement("div",{className:t},a&&de.default.createElement("div",yt({className:"react-datepicker__triangle"},o)),r)}var Br=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],jr=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"handleClickOutside",(function(e){a.props.onClickOutside(e)})),mt(bt(a),"setClickOutsideRef",(function(){return a.containerRef.current})),mt(bt(a),"handleDropdownFocus",(function(e){(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).className||"").split(/\s+/);return Br.some((function(t){return e.indexOf(t)>=0}))})(e.target)&&a.props.onDropdownFocus()})),mt(bt(a),"getDateInView",(function(){var e=a.props,t=e.preSelection,r=e.selected,n=e.openToDate,o=yr(a.props),s=vr(a.props),i=xt(),p=n||r||t;return p||(o&&nt.default(i,o)?o:s&&at.default(i,s)?s:i)})),mt(bt(a),"increaseMonth",(function(){a.setState((function(e){var t=e.date;return{date:we.default(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}))})),mt(bt(a),"decreaseMonth",(function(){a.setState((function(e){var t=e.date;return{date:Ce.default(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}))})),mt(bt(a),"handleDayClick",(function(e,t,r){a.props.onSelect(e,t,r),a.props.setPreSelection&&a.props.setPreSelection(e)})),mt(bt(a),"handleDayMouseEnter",(function(e){a.setState({selectingDate:e}),a.props.onDayMouseEnter&&a.props.onDayMouseEnter(e)})),mt(bt(a),"handleMonthMouseLeave",(function(){a.setState({selectingDate:null}),a.props.onMonthMouseLeave&&a.props.onMonthMouseLeave()})),mt(bt(a),"handleYearChange",(function(e){a.props.onYearChange&&a.props.onYearChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e)})),mt(bt(a),"handleMonthChange",(function(e){a.props.onMonthChange&&a.props.onMonthChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e)})),mt(bt(a),"handleMonthYearChange",(function(e){a.handleYearChange(e),a.handleMonthChange(e)})),mt(bt(a),"changeYear",(function(e){a.setState((function(t){var r=t.date;return{date:We.default(r,e)}}),(function(){return a.handleYearChange(a.state.date)}))})),mt(bt(a),"changeMonth",(function(e){a.setState((function(t){var r=t.date;return{date:qe.default(r,e)}}),(function(){return a.handleMonthChange(a.state.date)}))})),mt(bt(a),"changeMonthYear",(function(e){a.setState((function(t){var r=t.date;return{date:We.default(qe.default(r,Ye.default(e)),Te.default(e))}}),(function(){return a.handleMonthYearChange(a.state.date)}))})),mt(bt(a),"header",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,t=Wt(e,a.props.locale),r=[];return a.props.showWeekNumbers&&r.push(de.default.createElement("div",{key:"W",className:"react-datepicker__day-name"},a.props.weekLabel||"#")),r.concat([0,1,2,3,4,5,6].map((function(e){var r=ve.default(t,e),n=a.formatWeekday(r,a.props.locale),o=a.props.weekDayClassName?a.props.weekDayClassName(r):void 0;return de.default.createElement("div",{key:e,className:ce.default("react-datepicker__day-name",o)},n)})))})),mt(bt(a),"formatWeekday",(function(e,t){return a.props.formatWeekDay?function(e,t,r){return t(Lt(e,"EEEE",r))}(e,a.props.formatWeekDay,t):a.props.useWeekdaysShort?function(e,t){return Lt(e,"EEE",t)}(e,t):function(e,t){return Lt(e,"EEEEEE",t)}(e,t)})),mt(bt(a),"decreaseYear",(function(){a.setState((function(e){var t=e.date;return{date:Se.default(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}))})),mt(bt(a),"renderPreviousButton",(function(){if(!a.props.renderCustomHeader){var e;switch(!0){case a.props.showMonthYearPicker:e=hr(a.state.date,a.props);break;case a.props.showYearPicker:e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,a=t.yearItemNumber,n=void 0===a?Ot:a,o=gr(jt(Se.default(e,n)),n).endPeriod,s=r&&Te.default(r);return s&&s>o||!1}(a.state.date,a.props);break;default:e=ur(a.state.date,a.props)}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!e)&&!a.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--previous"],r=a.decreaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(r=a.decreaseYear),e&&a.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--previous--disabled"),r=null);var n=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,o=a.props,s=o.previousMonthAriaLabel,i=void 0===s?"Previous Month":s,p=o.previousYearAriaLabel,l=void 0===p?"Previous Year":p;return de.default.createElement("button",{type:"button",className:t.join(" "),onClick:r,"aria-label":n?l:i},n?a.props.previousYearButtonLabel:a.props.previousMonthButtonLabel)}}})),mt(bt(a),"increaseYear",(function(){a.setState((function(e){var t=e.date;return{date:ke.default(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}))})),mt(bt(a),"renderNextButton",(function(){if(!a.props.renderCustomHeader){var e;switch(!0){case a.props.showMonthYearPicker:e=mr(a.state.date,a.props);break;case a.props.showYearPicker:e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,a=t.yearItemNumber,n=void 0===a?Ot:a,o=gr(ke.default(e,n),n).startPeriod,s=r&&Te.default(r);return s&&s<o||!1}(a.state.date,a.props);break;default:e=fr(a.state.date,a.props)}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!e)&&!a.props.showTimeSelectOnly){var t=["react-datepicker__navigation","react-datepicker__navigation--next"];a.props.showTimeSelect&&t.push("react-datepicker__navigation--next--with-time"),a.props.todayButton&&t.push("react-datepicker__navigation--next--with-today-button");var r=a.increaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(r=a.increaseYear),e&&a.props.showDisabledMonthNavigation&&(t.push("react-datepicker__navigation--next--disabled"),r=null);var n=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,o=a.props,s=o.nextMonthAriaLabel,i=void 0===s?"Next Month":s,p=o.nextYearAriaLabel,l=void 0===p?"Next Year":p;return de.default.createElement("button",{type:"button",className:t.join(" "),onClick:r,"aria-label":n?l:i},n?a.props.nextYearButtonLabel:a.props.nextMonthButtonLabel)}}})),mt(bt(a),"renderCurrentMonth",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,t=["react-datepicker__current-month"];return a.props.showYearDropdown&&t.push("react-datepicker__current-month--hasYearDropdown"),a.props.showMonthDropdown&&t.push("react-datepicker__current-month--hasMonthDropdown"),a.props.showMonthYearDropdown&&t.push("react-datepicker__current-month--hasMonthYearDropdown"),de.default.createElement("div",{className:t.join(" ")},Lt(e,a.props.dateFormat,a.props.locale))})),mt(bt(a),"renderYearDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showYearDropdown&&!e)return de.default.createElement(_r,{adjustDateOnChange:a.props.adjustDateOnChange,date:a.state.date,onSelect:a.props.onSelect,setOpen:a.props.setOpen,dropdownMode:a.props.dropdownMode,onChange:a.changeYear,minDate:a.props.minDate,maxDate:a.props.maxDate,year:Te.default(a.state.date),scrollableYearDropdown:a.props.scrollableYearDropdown,yearDropdownItemNumber:a.props.yearDropdownItemNumber})})),mt(bt(a),"renderMonthDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthDropdown&&!e)return de.default.createElement(Er,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,onChange:a.changeMonth,month:Ye.default(a.state.date),useShortMonthInDropdown:a.props.useShortMonthInDropdown})})),mt(bt(a),"renderMonthYearDropdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthYearDropdown&&!e)return de.default.createElement(xr,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,dateFormat:a.props.dateFormat,onChange:a.changeMonthYear,minDate:a.props.minDate,maxDate:a.props.maxDate,date:a.state.date,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown})})),mt(bt(a),"renderTodayButton",(function(){if(a.props.todayButton&&!a.props.showTimeSelectOnly)return de.default.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return a.props.onSelect(Ve.default(xt()),e)}},a.props.todayButton)})),mt(bt(a),"renderDefaultHeader",(function(e){var t=e.monthDate,r=e.i;return de.default.createElement("div",{className:"react-datepicker__header ".concat(a.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},a.renderCurrentMonth(t),de.default.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(a.props.dropdownMode),onFocus:a.handleDropdownFocus},a.renderMonthDropdown(0!==r),a.renderMonthYearDropdown(0!==r),a.renderYearDropdown(0!==r)),de.default.createElement("div",{className:"react-datepicker__day-names"},a.header(t)))})),mt(bt(a),"renderCustomHeader",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.monthDate,r=e.i;if(a.props.showTimeSelect&&!a.state.monthContainer||a.props.showTimeSelectOnly)return null;var n=ur(a.state.date,a.props),o=fr(a.state.date,a.props),s=hr(a.state.date,a.props),i=mr(a.state.date,a.props),p=!a.props.showMonthYearPicker&&!a.props.showQuarterYearPicker&&!a.props.showYearPicker;return de.default.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:a.props.onDropdownFocus},a.props.renderCustomHeader(Dt(Dt({},a.state),{},{customHeaderCount:r,changeMonth:a.changeMonth,changeYear:a.changeYear,decreaseMonth:a.decreaseMonth,increaseMonth:a.increaseMonth,decreaseYear:a.decreaseYear,increaseYear:a.increaseYear,prevMonthButtonDisabled:n,nextMonthButtonDisabled:o,prevYearButtonDisabled:s,nextYearButtonDisabled:i})),p&&de.default.createElement("div",{className:"react-datepicker__day-names"},a.header(t)))})),mt(bt(a),"renderYearHeader",(function(){var e=a.state.date,t=a.props,r=t.showYearPicker,n=gr(e,t.yearItemNumber),o=n.startPeriod,s=n.endPeriod;return de.default.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},r?"".concat(o," - ").concat(s):Te.default(e))})),mt(bt(a),"renderHeader",(function(e){switch(!0){case void 0!==a.props.renderCustomHeader:return a.renderCustomHeader(e);case a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker:return a.renderYearHeader(e);default:return a.renderDefaultHeader(e)}})),mt(bt(a),"renderMonths",(function(){if(!a.props.showTimeSelectOnly&&!a.props.showYearPicker){for(var e=[],t=a.props.showPreviousMonths?a.props.monthsShown-1:0,r=Ce.default(a.state.date,t),n=0;n<a.props.monthsShown;++n){var o=n-a.props.monthSelectedIn,s=we.default(r,o),i="month-".concat(n),p=n<a.props.monthsShown-1,l=n>0;e.push(de.default.createElement("div",{key:i,ref:function(e){a.monthContainer=e},className:"react-datepicker__month-container"},a.renderHeader({monthDate:s,i:n}),de.default.createElement(Fr,{chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,onChange:a.changeMonthYear,day:s,dayClassName:a.props.dayClassName,monthClassName:a.props.monthClassName,onDayClick:a.handleDayClick,handleOnKeyDown:a.props.handleOnKeyDown,onDayMouseEnter:a.handleDayMouseEnter,onMouseLeave:a.handleMonthMouseLeave,onWeekSelect:a.props.onWeekSelect,orderInDisplay:n,formatWeekNumber:a.props.formatWeekNumber,locale:a.props.locale,minDate:a.props.minDate,maxDate:a.props.maxDate,excludeDates:a.props.excludeDates,highlightDates:a.props.highlightDates,selectingDate:a.state.selectingDate,includeDates:a.props.includeDates,inline:a.props.inline,shouldFocusDayInline:a.props.shouldFocusDayInline,fixedHeight:a.props.fixedHeight,filterDate:a.props.filterDate,preSelection:a.props.preSelection,setPreSelection:a.props.setPreSelection,selected:a.props.selected,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,showWeekNumbers:a.props.showWeekNumbers,startDate:a.props.startDate,endDate:a.props.endDate,peekNextMonth:a.props.peekNextMonth,setOpen:a.props.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,renderDayContents:a.props.renderDayContents,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,isInputFocused:a.props.isInputFocused,containerRef:a.containerRef,monthShowsDuplicateDaysEnd:p,monthShowsDuplicateDaysStart:l})))}return e}})),mt(bt(a),"renderYears",(function(){if(!a.props.showTimeSelectOnly)return a.props.showYearPicker?de.default.createElement("div",{className:"react-datepicker__year--container"},a.renderHeader(),de.default.createElement(qr,yt({onDayClick:a.handleDayClick,date:a.state.date},a.props))):void 0})),mt(bt(a),"renderTimeSection",(function(){if(a.props.showTimeSelect&&(a.state.monthContainer||a.props.showTimeSelectOnly))return de.default.createElement(Rr,{selected:a.props.selected,openToDate:a.props.openToDate,onChange:a.props.onTimeChange,timeClassName:a.props.timeClassName,format:a.props.timeFormat,includeTimes:a.props.includeTimes,intervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,todayButton:a.props.todayButton,showMonthDropdown:a.props.showMonthDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,monthRef:a.state.monthContainer,injectTimes:a.props.injectTimes,locale:a.props.locale,showTimeSelectOnly:a.props.showTimeSelectOnly})})),mt(bt(a),"renderInputTimeSection",(function(){var e=new Date(a.props.selected),t=It(e)&&Boolean(a.props.selected)?"".concat(kr(e.getHours()),":").concat(kr(e.getMinutes())):"";if(a.props.showTimeInput)return de.default.createElement(Ar,{date:e,timeString:t,timeInputLabel:a.props.timeInputLabel,onChange:a.props.onTimeChange,customTimeInput:a.props.customTimeInput})})),a.containerRef=de.default.createRef(),a.state={date:a.getDateInView(),selectingDate:null,monthContainer:null},a}return ht(r,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}))}},{key:"componentDidUpdate",value:function(e){this.props.preSelection&&!Ut(this.props.preSelection,e.preSelection)?this.setState({date:this.props.preSelection}):this.props.openToDate&&!Ut(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate})}},{key:"render",value:function(){var e=this.props.container||Wr;return de.default.createElement("div",{ref:this.containerRef},de.default.createElement(e,{className:ce.default("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showPopperArrow:this.props.showPopperArrow,arrowProps:this.props.arrowProps},this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.props.children))}}],[{key:"defaultProps",get:function(){return{onDropdownFocus:function(){},monthsShown:1,monthSelectedIn:0,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:Ot}}}]),r}(de.default.Component),Hr=function(e){return!e.disabled&&-1!==e.tabIndex},Kr=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"getTabChildren",(function(){return Array.prototype.slice.call(a.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"),1,-1).filter(Hr)})),mt(bt(a),"handleFocusStart",(function(e){var t=a.getTabChildren();t&&t.length>1&&t[t.length-1].focus()})),mt(bt(a),"handleFocusEnd",(function(e){var t=a.getTabChildren();t&&t.length>1&&t[0].focus()})),a.tabLoopRef=de.default.createRef(),a}return ht(r,[{key:"render",value:function(){return this.props.enableTabLoop?de.default.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},de.default.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,de.default.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return{enableTabLoop:!0}}}]),r}(de.default.Component),Qr=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),(a=t.call(this,e)).el=document.createElement("div"),a}return ht(r,[{key:"componentDidMount",value:function(){this.portalRoot=document.getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),document.body.appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el)}},{key:"render",value:function(){return dt.default.createPortal(this.props.children,this.el)}}]),r}(de.default.Component),Vr=function(e){wt(r,e);var t=St(r);function r(){return ut(this,r),t.apply(this,arguments)}return ht(r,[{key:"render",value:function(){var e,t=this.props,r=t.className,a=t.wrapperClassName,n=t.hidePopper,o=t.popperComponent,s=t.popperModifiers,i=t.popperPlacement,p=t.popperProps,l=t.targetComponent,d=t.enableTabLoop,c=t.popperOnKeyDown,u=t.portalId;if(!n){var f=ce.default("react-datepicker-popper",r);e=de.default.createElement(ie.Popper,yt({modifiers:s,placement:i},p),(function(e){var t=e.ref,r=e.style,a=e.placement,n=e.arrowProps;return de.default.createElement(Kr,{enableTabLoop:d},de.default.createElement("div",{ref:t,style:r,className:f,"data-placement":a,onKeyDown:c},de.default.cloneElement(o,{arrowProps:n})))}))}this.props.popperContainer&&(e=de.default.createElement(this.props.popperContainer,{},e)),u&&!n&&(e=de.default.createElement(Qr,{portalId:u},e));var h=ce.default("react-datepicker-wrapper",a);return de.default.createElement(ie.Manager,{className:"react-datepicker-manager"},de.default.createElement(ie.Reference,null,(function(e){var t=e.ref;return de.default.createElement("div",{ref:t,className:h},l)})),e)}}],[{key:"defaultProps",get:function(){return{hidePopper:!0,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!0,boundariesElement:"viewport"}},popperProps:{},popperPlacement:"bottom-start"}}}]),r}(de.default.Component),Ur="react-datepicker-ignore-onclickoutside",$r=lt.default(jr);var zr="Date input not valid.",Gr=function(e){wt(r,e);var t=St(r);function r(e){var a;return ut(this,r),mt(bt(a=t.call(this,e)),"getPreSelection",(function(){return a.props.openToDate?a.props.openToDate:a.props.selectsEnd&&a.props.startDate?a.props.startDate:a.props.selectsStart&&a.props.endDate?a.props.endDate:xt()})),mt(bt(a),"calcInitialState",(function(){var e=a.getPreSelection(),t=yr(a.props),r=vr(a.props),n=t&&nt.default(e,Ve.default(t))?t:r&&at.default(e,Je.default(r))?r:e;return{open:a.props.startOpen||!1,preventFocus:!1,preSelection:a.props.selected?a.props.selected:n,highlightDates:Dr(a.props.highlightDates),focused:!1,shouldFocusDayInline:!1}})),mt(bt(a),"clearPreventFocusTimeout",(function(){a.preventFocusTimeout&&clearTimeout(a.preventFocusTimeout)})),mt(bt(a),"setFocus",(function(){a.input&&a.input.focus&&a.input.focus({preventScroll:!0})})),mt(bt(a),"setBlur",(function(){a.input&&a.input.blur&&a.input.blur(),a.cancelFocusInput()})),mt(bt(a),"setOpen",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.setState({open:e,preSelection:e&&a.state.open?a.state.preSelection:a.calcInitialState().preSelection,lastPreSelectChange:Xr},(function(){e||a.setState((function(e){return{focused:!!t&&e.focused}}),(function(){!t&&a.setBlur(),a.setState({inputValue:null})}))}))})),mt(bt(a),"inputOk",(function(){return ue.default(a.state.preSelection)})),mt(bt(a),"isCalendarOpen",(function(){return void 0===a.props.open?a.state.open&&!a.props.disabled&&!a.props.readOnly:a.props.open})),mt(bt(a),"handleFocus",(function(e){a.state.preventFocus||(a.props.onFocus(e),a.props.preventOpenOnFocus||a.props.readOnly||a.setOpen(!0)),a.setState({focused:!0})})),mt(bt(a),"cancelFocusInput",(function(){clearTimeout(a.inputFocusTimeout),a.inputFocusTimeout=null})),mt(bt(a),"deferFocusInput",(function(){a.cancelFocusInput(),a.inputFocusTimeout=setTimeout((function(){return a.setFocus()}),1)})),mt(bt(a),"handleDropdownFocus",(function(){a.cancelFocusInput()})),mt(bt(a),"handleBlur",(function(e){(!a.state.open||a.props.withPortal||a.props.showTimeInput)&&a.props.onBlur(e),a.setState({focused:!1})})),mt(bt(a),"handleCalendarClickOutside",(function(e){a.props.inline||a.setOpen(!1),a.props.onClickOutside(e),a.props.withPortal&&e.preventDefault()})),mt(bt(a),"handleChange",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(!a.props.onChangeRaw||(a.props.onChangeRaw.apply(bt(a),t),"function"==typeof n.isDefaultPrevented&&!n.isDefaultPrevented())){a.setState({inputValue:n.target.value,lastPreSelectChange:Jr});var o=Tt(n.target.value,a.props.dateFormat,a.props.locale,a.props.strictParsing);!o&&n.target.value||a.setSelected(o,n,!0)}})),mt(bt(a),"handleSelect",(function(e,t,r){a.setState({preventFocus:!0},(function(){return a.preventFocusTimeout=setTimeout((function(){return a.setState({preventFocus:!1})}),50),a.preventFocusTimeout})),a.props.onChangeRaw&&a.props.onChangeRaw(t),a.setSelected(e,t,!1,r),!a.props.shouldCloseOnSelect||a.props.showTimeSelect?a.setPreSelection(e):a.props.inline||a.setOpen(!1)})),mt(bt(a),"setSelected",(function(e,t,r,n){var o=e;if(null===o||!tr(o,a.props)){var s=a.props,i=s.onChange,p=s.selectsRange,l=s.startDate,d=s.endDate;if(!$t(a.props.selected,o)||a.props.allowSameDay||p)if(null!==o&&(!a.props.selected||r&&(a.props.showTimeSelect||a.props.showTimeSelectOnly||a.props.showTimeInput)||(o=Ft(o,{hour:Pe.default(a.props.selected),minute:Me.default(a.props.selected),second:_e.default(a.props.selected)})),a.props.inline||a.setState({preSelection:o}),a.props.focusSelectedMonth||a.setState({monthSelectedIn:n})),p){var c=l&&!d,u=l&&d;!l&&!d?i([o,null],t):c&&(nt.default(o,l)?i([o,null],t):i([l,o],t)),u&&i([o,null],t)}else i(o,t);r||(a.props.onSelect(o,t),a.setState({inputValue:null}))}})),mt(bt(a),"setPreSelection",(function(e){var t=void 0!==a.props.minDate,r=void 0!==a.props.maxDate,n=!0;if(e){var o=Ve.default(e);if(t&&r)n=zt(e,a.props.minDate,a.props.maxDate);else if(t){var s=Ve.default(a.props.minDate);n=at.default(e,s)||$t(o,s)}else if(r){var i=Je.default(a.props.maxDate);n=nt.default(e,i)||$t(o,i)}}n&&a.setState({preSelection:e})})),mt(bt(a),"handleTimeChange",(function(e){var t=Ft(a.props.selected?a.props.selected:a.getPreSelection(),{hour:Pe.default(e),minute:Me.default(e)});a.setState({preSelection:t}),a.props.onChange(t),a.props.shouldCloseOnSelect&&a.setOpen(!1),a.props.showTimeInput&&a.setOpen(!0),a.setState({inputValue:null})})),mt(bt(a),"onInputClick",(function(){a.props.disabled||a.props.readOnly||a.setOpen(!0),a.props.onInputClick()})),mt(bt(a),"onInputKeyDown",(function(e){a.props.onKeyDown(e);var t=e.key;if(a.state.open||a.props.inline||a.props.preventOpenOnFocus){if(a.state.open){if("ArrowDown"===t||"ArrowUp"===t){e.preventDefault();var r=a.calendar.componentNode&&a.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');return void(r&&r.focus({preventScroll:!0}))}var n=xt(a.state.preSelection);"Enter"===t?(e.preventDefault(),a.inputOk()&&a.state.lastPreSelectChange===Xr?(a.handleSelect(n,e),!a.props.shouldCloseOnSelect&&a.setPreSelection(n)):a.setOpen(!1)):"Escape"===t&&(e.preventDefault(),a.setOpen(!1)),a.inputOk()||a.props.onInputError({code:1,msg:zr})}}else"ArrowDown"!==t&&"ArrowUp"!==t&&"Enter"!==t||a.onInputClick()})),mt(bt(a),"onDayKeyDown",(function(e){a.props.onKeyDown(e);var t=e.key,r=xt(a.state.preSelection);if("Enter"===t)e.preventDefault(),a.handleSelect(r,e),!a.props.shouldCloseOnSelect&&a.setPreSelection(r);else if("Escape"===t)e.preventDefault(),a.setOpen(!1),a.inputOk()||a.props.onInputError({code:1,msg:zr});else if(!a.props.disabledKeyboardNavigation){var n;switch(t){case"ArrowLeft":n=ge.default(r,1);break;case"ArrowRight":n=ve.default(r,1);break;case"ArrowUp":n=be.default(r,1);break;case"ArrowDown":n=De.default(r,1);break;case"PageUp":n=Ce.default(r,1);break;case"PageDown":n=we.default(r,1);break;case"Home":n=Se.default(r,1);break;case"End":n=ke.default(r,1)}if(!n)return void(a.props.onInputError&&a.props.onInputError({code:1,msg:zr}));if(e.preventDefault(),a.setState({lastPreSelectChange:Xr}),a.props.adjustDateOnChange&&a.setSelected(n),a.setPreSelection(n),a.props.inline){var o=Ye.default(r),s=Ye.default(n),i=Te.default(r),p=Te.default(n);o!==s||i!==p?a.setState({shouldFocusDayInline:!0}):a.setState({shouldFocusDayInline:!1})}}})),mt(bt(a),"onPopperKeyDown",(function(e){"Escape"===e.key&&(e.preventDefault(),a.setState({preventFocus:!0},(function(){a.setOpen(!1),setTimeout((function(){a.setFocus(),a.setState({preventFocus:!1})}))})))})),mt(bt(a),"onClearClick",(function(e){e&&e.preventDefault&&e.preventDefault(),a.props.onChange(null,e),a.setState({inputValue:null})})),mt(bt(a),"clear",(function(){a.onClearClick()})),mt(bt(a),"onScroll",(function(e){"boolean"==typeof a.props.closeOnScroll&&a.props.closeOnScroll?e.target!==document&&e.target!==document.documentElement&&e.target!==document.body||a.setOpen(!1):"function"==typeof a.props.closeOnScroll&&a.props.closeOnScroll(e)&&a.setOpen(!1)})),mt(bt(a),"renderCalendar",(function(){return a.props.inline||a.isCalendarOpen()?de.default.createElement($r,{ref:function(e){a.calendar=e},locale:a.props.locale,chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,adjustDateOnChange:a.props.adjustDateOnChange,setOpen:a.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,dateFormat:a.props.dateFormatCalendar,useWeekdaysShort:a.props.useWeekdaysShort,formatWeekDay:a.props.formatWeekDay,dropdownMode:a.props.dropdownMode,selected:a.props.selected,preSelection:a.state.preSelection,onSelect:a.handleSelect,onWeekSelect:a.props.onWeekSelect,openToDate:a.props.openToDate,minDate:a.props.minDate,maxDate:a.props.maxDate,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,startDate:a.props.startDate,endDate:a.props.endDate,excludeDates:a.props.excludeDates,filterDate:a.props.filterDate,onClickOutside:a.handleCalendarClickOutside,formatWeekNumber:a.props.formatWeekNumber,highlightDates:a.state.highlightDates,includeDates:a.props.includeDates,includeTimes:a.props.includeTimes,injectTimes:a.props.injectTimes,inline:a.props.inline,shouldFocusDayInline:a.state.shouldFocusDayInline,peekNextMonth:a.props.peekNextMonth,showMonthDropdown:a.props.showMonthDropdown,showPreviousMonths:a.props.showPreviousMonths,useShortMonthInDropdown:a.props.useShortMonthInDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showWeekNumbers:a.props.showWeekNumbers,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,forceShowMonthNavigation:a.props.forceShowMonthNavigation,showDisabledMonthNavigation:a.props.showDisabledMonthNavigation,scrollableYearDropdown:a.props.scrollableYearDropdown,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown,todayButton:a.props.todayButton,weekLabel:a.props.weekLabel,outsideClickIgnoreClass:Ur,fixedHeight:a.props.fixedHeight,monthsShown:a.props.monthsShown,monthSelectedIn:a.state.monthSelectedIn,onDropdownFocus:a.handleDropdownFocus,onMonthChange:a.props.onMonthChange,onYearChange:a.props.onYearChange,dayClassName:a.props.dayClassName,weekDayClassName:a.props.weekDayClassName,monthClassName:a.props.monthClassName,timeClassName:a.props.timeClassName,showTimeSelect:a.props.showTimeSelect,showTimeSelectOnly:a.props.showTimeSelectOnly,onTimeChange:a.handleTimeChange,timeFormat:a.props.timeFormat,timeIntervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,className:a.props.calendarClassName,container:a.props.calendarContainer,yearItemNumber:a.props.yearItemNumber,yearDropdownItemNumber:a.props.yearDropdownItemNumber,previousMonthButtonLabel:a.props.previousMonthButtonLabel,nextMonthButtonLabel:a.props.nextMonthButtonLabel,previousYearButtonLabel:a.props.previousYearButtonLabel,nextYearButtonLabel:a.props.nextYearButtonLabel,timeInputLabel:a.props.timeInputLabel,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,renderCustomHeader:a.props.renderCustomHeader,popperProps:a.props.popperProps,renderDayContents:a.props.renderDayContents,onDayMouseEnter:a.props.onDayMouseEnter,onMonthMouseLeave:a.props.onMonthMouseLeave,showTimeInput:a.props.showTimeInput,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,showPopperArrow:a.props.showPopperArrow,excludeScrollbar:a.props.excludeScrollbar,handleOnKeyDown:a.onDayKeyDown,isInputFocused:a.state.focused,customTimeInput:a.props.customTimeInput,setPreSelection:a.setPreSelection},a.props.children):null})),mt(bt(a),"renderDateInput",(function(){var e,t,r,n,o,s=ce.default(a.props.className,mt({},Ur,a.state.open)),i=a.props.customInput||de.default.createElement("input",{type:"text"}),p=a.props.customInputRef||"ref",l="string"==typeof a.props.value?a.props.value:"string"==typeof a.state.inputValue?a.state.inputValue:(t=a.props.selected,r=a.props,n=r.dateFormat,o=r.locale,t&&Lt(t,Array.isArray(n)?n[0]:n,o)||"");return de.default.cloneElement(i,(mt(e={},p,(function(e){a.input=e})),mt(e,"value",l),mt(e,"onBlur",a.handleBlur),mt(e,"onChange",a.handleChange),mt(e,"onClick",a.onInputClick),mt(e,"onFocus",a.handleFocus),mt(e,"onKeyDown",a.onInputKeyDown),mt(e,"id",a.props.id),mt(e,"name",a.props.name),mt(e,"autoFocus",a.props.autoFocus),mt(e,"placeholder",a.props.placeholderText),mt(e,"disabled",a.props.disabled),mt(e,"autoComplete",a.props.autoComplete),mt(e,"className",ce.default(i.props.className,s)),mt(e,"title",a.props.title),mt(e,"readOnly",a.props.readOnly),mt(e,"required",a.props.required),mt(e,"tabIndex",a.props.tabIndex),mt(e,"aria-describedby",a.props.ariaDescribedBy),mt(e,"aria-invalid",a.props.ariaInvalid),mt(e,"aria-labelledby",a.props.ariaLabelledBy),mt(e,"aria-required",a.props.ariaRequired),e))})),mt(bt(a),"renderClearButton",(function(){var e=a.props,t=e.isClearable,r=e.selected,n=e.clearButtonTitle,o=e.clearButtonClassName,s=e.ariaLabelClose,i=void 0===s?"Close":s;return t&&null!=r?de.default.createElement("button",{type:"button",className:"react-datepicker__close-icon ".concat(o),"aria-label":i,onClick:a.onClearClick,title:n,tabIndex:-1}):null})),a.state=a.calcInitialState(),a}return ht(r,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0)}},{key:"componentDidUpdate",value:function(e,t){var r,a;e.inline&&(r=e.selected,a=this.props.selected,r&&a?Ye.default(r)!==Ye.default(a)||Te.default(r)!==Te.default(a):r!==a)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:Dr(this.props.highlightDates)}),t.focused||$t(e.selected,this.props.selected)||this.setState({inputValue:null}),t.open!==this.state.open&&(!1===t.open&&!0===this.state.open&&this.props.onCalendarOpen(),!0===t.open&&!1===this.state.open&&this.props.onCalendarClose())}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0)}},{key:"render",value:function(){var e=this.renderCalendar();return this.props.inline&&!this.props.withPortal?e:this.props.withPortal?de.default.createElement("div",null,this.props.inline?null:de.default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),this.state.open||this.props.inline?de.default.createElement("div",{className:"react-datepicker__portal"},e):null):de.default.createElement(Vr,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,popperModifiers:this.props.popperModifiers,targetComponent:de.default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),popperContainer:this.props.popperContainer,popperComponent:e,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop})}}],[{key:"defaultProps",get:function(){return{allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:Ot,renderDayContents:function(e){return e},focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null}}}]),r}(de.default.Component),Jr="input",Xr="navigate";e.CalendarContainer=Wr,e.default=Gr,e.getDefaultLocale=Gt,e.registerLocale=function(e,t){var r="undefined"!=typeof window?window:global;r.__localeData__||(r.__localeData__={}),r.__localeData__[e]=t},e.setDefaultLocale=function(e){("undefined"!=typeof window?window:global).__localeId__=e},Object.defineProperty(e,"__esModule",{value:!0})}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \***************************************************************************/
/*! exports provided: IGNORE_CLASS_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_CLASS_NAME", function() { return IGNORE_CLASS_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(instance);
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
    };

    return onClickOutside;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}


/* harmony default export */ __webpack_exports__["default"] = (onClickOutsideHOC);


/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/*!******************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Manager.js ***!
  \******************************************************/
/*! exports provided: ManagerReferenceNodeContext, ManagerReferenceNodeSetterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeContext", function() { return ManagerReferenceNodeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeSetterContext", function() { return ManagerReferenceNodeSetterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hypnosphi_create_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hypnosphi/create-react-context */ "./node_modules/@hypnosphi/create-react-context/lib/index.js");
/* harmony import */ var _hypnosphi_create_react_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hypnosphi_create_react_context__WEBPACK_IMPORTED_MODULE_4__);





var ManagerReferenceNodeContext = _hypnosphi_create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();
var ManagerReferenceNodeSetterContext = _hypnosphi_create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)), "referenceNode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Popper.js ***!
  \*****************************************************/
/*! exports provided: InnerPopper, placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_7__["default"](referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (false) {}

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_7__["default"].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_8__["ManagerReferenceNodeContext"].Consumer, null, function (referenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Reference.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerReferenceNodeSetterContext"].Consumer, null, function (setReferenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/index.js ***!
  \****************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/*! exports provided: unwrapArray, safeInvoke, shallowEqual, setRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
/*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/shim.js":
/*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "false" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AaHlwbm9zcGhpL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGh5cG5vc3BoaS9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3VkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1hcmd1bWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1yZWdleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL3NoaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvcHBlci5qcy9kaXN0L2VzbS9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcz85ZGY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW9uY2xpY2tvdXRzaWRlL2Rpc3QvcmVhY3Qtb25jbGlja291dHNpZGUuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL1BvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vUmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1wb3BwZXIvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3Mvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUNoQmE7O0FBRWI7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLHdDQUFLOztBQUV4Qjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsa0RBQVM7O0FBRWhDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsNkRBQVc7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsMkRBQWE7QUFDMUI7O0FBRUE7QUFDQSxHQUFHLENBQUMsK0NBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUU2QjtBQUNkLGdGQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDMVdqQztBQUFBO0FBQUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxPQUFvQjs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfkNvbm5lY3Rpb25zQ29udGFpbmVyflF1ZXVlflRhc2tSb290X2UwN2QzMWE4ODAyMGZkYzMzNTM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ndWQgPSByZXF1aXJlKCdndWQnKTtcblxudmFyIF9ndWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3VkKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG5cbi8vIElubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyAoMCwgX2d1ZDIuZGVmYXVsdCkoKSArICdfXyc7XG5cbiAgdmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZW1pdHRlciA9IGNyZWF0ZUV2ZW50RW1pdHRlcihfdGhpcy5wcm9wcy52YWx1ZSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltjb250ZXh0UHJvcF0gPSB0aGlzLmVtaXR0ZXIsIF9yZWY7XG4gICAgfTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgY2hhbmdlZEJpdHMgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKG9iamVjdElzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IDA7IC8vIE5vIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSgoY2hhbmdlZEJpdHMgJiBNQVhfU0lHTkVEXzMxX0JJVF9JTlQpID09PSBjaGFuZ2VkQml0cywgJ2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBFeHBlY3RlZCB0aGUgcmV0dXJuIHZhbHVlIHRvIGJlIGEgJyArICczMS1iaXQgaW50ZWdlci4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZEJpdHMgfD0gMDtcblxuICAgICAgICAgIGlmIChjaGFuZ2VkQml0cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnNldChuZXh0UHJvcHMudmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLCBfUHJvdmlkZXIkY2hpbGRDb250ZXgpO1xuXG4gIHZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhDb25zdW1lciwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudDIuY2FsbC5hcHBseShfQ29tcG9uZW50MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgfSwgX3RoaXMyLm9uVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gX3RoaXMyLm9ic2VydmVkQml0cyB8IDA7XG4gICAgICAgIGlmICgob2JzZXJ2ZWRCaXRzICYgY2hhbmdlZEJpdHMpICE9PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBfdGVtcDIpLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczIsIF9yZXQyKTtcbiAgICB9XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub24odGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIC8vIFN1YnNjcmliZSB0byBhbGwgY2hhbmdlcyBieSBkZWZhdWx0XG4gICAgICA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9mZih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29uc3VtZXIuY29udGV4dFR5cGVzID0gKF9Db25zdW1lciRjb250ZXh0VHlwZSA9IHt9LCBfQ29uc3VtZXIkY29udGV4dFR5cGVbY29udGV4dFByb3BdID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9Db25zdW1lciRjb250ZXh0VHlwZSk7XG5cblxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVhY3RDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1wbGVtZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCB8fCBfaW1wbGVtZW50YXRpb24yLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcImJvdHRvbVxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSwgLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwidG9wXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlLCAucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3cge1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcImJvdHRvbVxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSwgLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwidG9wXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlLCAucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3csIC5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcImJvdHRvbVxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZTo6YmVmb3JlLCAucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJ0b3BcXFwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fdHJpYW5nbGU6OmJlZm9yZSwgLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3LS1kb3duLWFycm93OjpiZWZvcmUsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJib3R0b21cXFwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fdHJpYW5nbGU6OmJlZm9yZSwgLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwidG9wXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlOjpiZWZvcmUsIC5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXctLWRvd24tYXJyb3c6OmJlZm9yZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxuICBsZWZ0OiAtOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2FlYWVhZTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwiYm90dG9tXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlIHtcXG4gIHRvcDogMDtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcImJvdHRvbVxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSwgLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwiYm90dG9tXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlOjpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcImJvdHRvbVxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZTo6YmVmb3JlIHtcXG4gIHRvcDogLTFweDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNhZWFlYWU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcInRvcFxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSwgLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3LS1kb3duLWFycm93LFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3LS1kb3duLWFycm93IHtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IC04cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcInRvcFxcXCJdIC5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSwgLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3LS1kb3duLWFycm93LFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3LS1kb3duLWFycm93LCAucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJ0b3BcXFwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fdHJpYW5nbGU6OmJlZm9yZSwgLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3LS1kb3duLWFycm93OjpiZWZvcmUsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJ0b3BcXFwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fdHJpYW5nbGU6OmJlZm9yZSwgLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3LS1kb3duLWFycm93OjpiZWZvcmUsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdzo6YmVmb3JlIHtcXG4gIGJvdHRvbTogLTFweDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNhZWFlYWU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZWFlYWU7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLS10aW1lLW9ubHkgLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlIHtcXG4gIGxlZnQ6IDM1cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLS10aW1lLW9ubHkgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtY29udGFpbmVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci0tdGltZS1vbmx5IC5yZWFjdC1kYXRlcGlja2VyX190aW1lLFxcbi5yZWFjdC1kYXRlcGlja2VyLS10aW1lLW9ubHkgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM3JlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MHB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXIge1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwiYm90dG9tXFxcIl0ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50PVxcXCJib3R0b20tZW5kXFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlLCAucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnQ9XFxcInRvcC1lbmRcXFwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fdHJpYW5nbGUge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJ0b3BcXFwiXSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJyaWdodFxcXCJdIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXBvcHBlcltkYXRhLXBsYWNlbWVudF49XFxcInJpZ2h0XFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogNDJweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXItcG9wcGVyW2RhdGEtcGxhY2VtZW50Xj1cXFwibGVmdFxcXCJdIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJbZGF0YS1wbGFjZW1lbnRePVxcXCJsZWZ0XFxcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX3RyaWFuZ2xlIHtcXG4gIGxlZnQ6IDQycHg7XFxuICByaWdodDogYXV0bztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZWFlYWU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyLS10aW1lIHtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlci0tdGltZTpub3QoLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlci0tdGltZS0tb25seSkge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlcjpub3QoLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlci0taGFzLXRpbWUtc2VsZWN0KSB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1kcm9wZG93bi1jb250YWluZXItLXNlbGVjdCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtZHJvcGRvd24tY29udGFpbmVyLS1zZWxlY3QsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItZHJvcGRvd24tY29udGFpbmVyLS1zZWxlY3QsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItZHJvcGRvd24tY29udGFpbmVyLS1zY3JvbGwsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLWRyb3Bkb3duLWNvbnRhaW5lci0tc2Nyb2xsLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLWRyb3Bkb3duLWNvbnRhaW5lci0tc2Nyb2xsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAycHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19jdXJyZW50LW1vbnRoLFxcbi5yZWFjdC1kYXRlcGlja2VyLXRpbWVfX2hlYWRlcixcXG4ucmVhY3QtZGF0ZXBpY2tlci15ZWFyLWhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45NDRyZW07XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyLXRpbWVfX2hlYWRlciB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMC40NXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHotaW5kZXg6IDE7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0tcHJldmlvdXMge1xcbiAgbGVmdDogMTBweDtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2NjYztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXByZXZpb3VzOmhvdmVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2IzYjNiMztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXByZXZpb3VzLS1kaXNhYmxlZCwgLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXByZXZpb3VzLS1kaXNhYmxlZDpob3ZlciB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNlNmU2ZTY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0IHtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS13aXRoLXRpbWU6bm90KC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS13aXRoLXRvZGF5LWJ1dHRvbikge1xcbiAgcmlnaHQ6IDk1cHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0OmhvdmVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjNiM2IzO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0tbmV4dC0tZGlzYWJsZWQsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS1kaXNhYmxlZDpob3ZlciB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2U2ZTZlNjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXllYXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy1wcmV2aW91cyB7XFxuICB0b3A6IDRweDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNjY2M7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy1wcmV2aW91czpob3ZlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjYjNiM2IzO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0teWVhcnMtdXBjb21pbmcge1xcbiAgdG9wOiAtNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NjYztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXllYXJzLXVwY29taW5nOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiM2IzYjM7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1jb250YWluZXIge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyIHtcXG4gIG1hcmdpbjogMC40cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXgtd2lkdGg6IDE4MHB4O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhciAucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aCB7XFxuICBtYXJnaW46IDAuNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aCAucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciB7XFxuICBjbGVhcjogYm90aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDVweCAwIDEwcHggMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19jYXB0aW9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LXRpbWUtY29udGFpbmVyIC5yZWFjdC1kYXRlcGlja2VyLXRpbWVfX2lucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dC1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXItdGltZV9faW5wdXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dC1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXItdGltZV9faW5wdXQgaW5wdXQge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dC1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXItdGltZV9faW5wdXQgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dC1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXItdGltZV9faW5wdXQgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LXRpbWUtY29udGFpbmVyIC5yZWFjdC1kYXRlcGlja2VyLXRpbWVfX2lucHV0LWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dCBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lciAucmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dC1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXItdGltZV9fZGVsaW1pdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX190aW1lLWNvbnRhaW5lciB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNhZWFlYWU7XFxuICB3aWR0aDogODVweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtY29udGFpbmVyLS13aXRoLXRvZGF5LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWVhZWFlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC03MnB4O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHtcXG4gIHdpZHRoOiA4NXB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHVsLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiBjYWxjKDE5NXB4ICsgKDEuN3JlbSAvIDIpKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtY29udGFpbmVyIC5yZWFjdC1kYXRlcGlja2VyX190aW1lIC5yZWFjdC1kYXRlcGlja2VyX190aW1lLWJveCB1bC5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QgbGkucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1saXN0LWl0ZW0ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHVsLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbGlzdCBsaS5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHVsLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbGlzdCBsaS5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbS0tc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNmJhNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHVsLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbGlzdCBsaS5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbS0tc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNmJhNTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtY29udGFpbmVyIC5yZWFjdC1kYXRlcGlja2VyX190aW1lIC5yZWFjdC1kYXRlcGlja2VyX190aW1lLWJveCB1bC5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QgbGkucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1saXN0LWl0ZW0tLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtYm94IHVsLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbGlzdCBsaS5yZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbS0tZGlzYWJsZWQ6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX193ZWVrLW51bWJlciB7XFxuICBjb2xvcjogI2NjYztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBsaW5lLWhlaWdodDogMS43cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjE2NnJlbTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3dlZWstbnVtYmVyLnJlYWN0LWRhdGVwaWNrZXJfX3dlZWstbnVtYmVyLS1jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fd2Vlay1udW1iZXIucmVhY3QtZGF0ZXBpY2tlcl9fd2Vlay1udW1iZXItLWNsaWNrYWJsZTpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LW5hbWVzLFxcbi5yZWFjdC1kYXRlcGlja2VyX193ZWVrIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LFxcbi5yZWFjdC1kYXRlcGlja2VyX190aW1lLW5hbWUge1xcbiAgY29sb3I6ICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMS43cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMC4xNjZyZW07XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC0tc2VsZWN0ZWQsIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC0taW4tc2VsZWN0aW5nLXJhbmdlLCAucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLWluLXJhbmdlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1zZWxlY3RlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci0taW4tc2VsZWN0aW5nLXJhbmdlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1pbi1yYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2YmE1O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC0taW4tc2VsZWN0aW5nLXJhbmdlOmhvdmVyLCAucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLWluLXJhbmdlOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1zZWxlY3RlZDpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci0taW4tc2VsZWN0aW5nLXJhbmdlOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1pbi1yYW5nZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1ZDkwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLWRpc2FibGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1kaXNhYmxlZCB7XFxuICBjb2xvcjogI2NjYztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLWRpc2FibGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1kaXNhYmxlZDpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LFxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5OmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0OmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQ6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dDpob3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS10b2RheSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC0tdG9kYXksXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItdGV4dC0tdG9kYXksXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dC0tdG9kYXkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWhpZ2hsaWdodGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1oaWdobGlnaHRlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1oaWdobGlnaHRlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1oaWdobGlnaHRlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RjYzRhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWhpZ2hsaWdodGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1oaWdobGlnaHRlZDpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1oaWdobGlnaHRlZDpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1oaWdobGlnaHRlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJiZTNmO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1oaWdobGlnaHRlZC1jdXN0b20tMSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC0taGlnaGxpZ2h0ZWQtY3VzdG9tLTEsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItdGV4dC0taGlnaGxpZ2h0ZWQtY3VzdG9tLTEsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dC0taGlnaGxpZ2h0ZWQtY3VzdG9tLTEge1xcbiAgY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWhpZ2hsaWdodGVkLWN1c3RvbS0yLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1oaWdobGlnaHRlZC1jdXN0b20tMixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1oaWdobGlnaHRlZC1jdXN0b20tMixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1oaWdobGlnaHRlZC1jdXN0b20tMiB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLXNlbGVjdGVkLCAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1pbi1zZWxlY3RpbmctcmFuZ2UsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLWluLXJhbmdlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1zZWxlY3RlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC0taW4tc2VsZWN0aW5nLXJhbmdlLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1pbi1yYW5nZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1zZWxlY3RlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1pbi1zZWxlY3RpbmctcmFuZ2UsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItdGV4dC0taW4tcmFuZ2UsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dC0tc2VsZWN0ZWQsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dC0taW4tc2VsZWN0aW5nLXJhbmdlLFxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWluLXJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTZiYTU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLWluLXNlbGVjdGluZy1yYW5nZTpob3ZlciwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0taW4tcmFuZ2U6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLXNlbGVjdGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1pbi1zZWxlY3RpbmctcmFuZ2U6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWluLXJhbmdlOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLXNlbGVjdGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLWluLXNlbGVjdGluZy1yYW5nZTpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1pbi1yYW5nZTpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1zZWxlY3RlZDpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1pbi1zZWxlY3RpbmctcmFuZ2U6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItdGV4dC0taW4tcmFuZ2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNWQ5MDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0ta2V5Ym9hcmQtc2VsZWN0ZWQsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTg3ZDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0ta2V5Ym9hcmQtc2VsZWN0ZWQ6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWtleWJvYXJkLXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDVkOTA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWluLXNlbGVjdGluZy1yYW5nZSAsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWluLXNlbGVjdGluZy1yYW5nZSAsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItdGV4dC0taW4tc2VsZWN0aW5nLXJhbmdlICxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1pbi1zZWxlY3RpbmctcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMTA3LCAxNjUsIDAuNSk7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC0tc2VsZWN0aW5nLXJhbmdlIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLWluLXJhbmdlICwgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1zZWxlY3RpbmctcmFuZ2VcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC0taW4tcmFuZ2UgLCAucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLXNlbGVjdGluZy1yYW5nZVxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLWluLXJhbmdlICwgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1zZWxlY3RpbmctcmFuZ2VcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1pbi1yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19kYXktLWRpc2FibGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LS1kaXNhYmxlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0LS1kaXNhYmxlZCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1kaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2RheS0tZGlzYWJsZWQ6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQtLWRpc2FibGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQtLWRpc2FibGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWRpc2FibGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC5yZWFjdC1kYXRlcGlja2VyX19tb250aC0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1pbi1yYW5nZTpob3ZlciwgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHQucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci0tc2VsZWN0ZWQ6aG92ZXIsIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC10ZXh0LnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItLWluLXJhbmdlOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLXNlbGVjdGVkOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLWluLXJhbmdlOmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHQucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci0tc2VsZWN0ZWQ6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItdGV4dC5yZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1pbi1yYW5nZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2YmE1O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dDpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci10ZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19pbnB1dC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtcmVhZC12aWV3LFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLXJlYWQtdmlldyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3OmhvdmVyLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXc6aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3OmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXc6aG92ZXIgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtcmVhZC12aWV3OmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtcmVhZC12aWV3OmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3OmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX195ZWFyLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1yZWFkLXZpZXc6aG92ZXIgLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdyB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjYjNiM2IzO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3csXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvdyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3cge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2NjYztcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdG9wOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItd2lkdGg6IDAuNDVyZW07XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1kcm9wZG93bixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1kcm9wZG93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGxlZnQ6IDI1JTtcXG4gIHRvcDogMzBweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWVhZWFlO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1kcm9wZG93bjpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtZHJvcGRvd246aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItZHJvcGRvd246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1kcm9wZG93bi0tc2Nyb2xsYWJsZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtZHJvcGRvd24tLXNjcm9sbGFibGUsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItZHJvcGRvd24tLXNjcm9sbGFibGUge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItb3B0aW9uLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1vcHRpb24sXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItb3B0aW9uIHtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1vcHRpb246Zmlyc3Qtb2YtdHlwZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtb3B0aW9uOmZpcnN0LW9mLXR5cGUsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItb3B0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItb3B0aW9uOmxhc3Qtb2YtdHlwZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtb3B0aW9uOmxhc3Qtb2YtdHlwZSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1vcHRpb246bGFzdC1vZi10eXBlIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1vcHRpb246aG92ZXIsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLW9wdGlvbjpob3ZlcixcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3llYXItb3B0aW9uOmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy11cGNvbWluZyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtb3B0aW9uOmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy11cGNvbWluZyxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1vcHRpb246aG92ZXIgLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXllYXJzLXVwY29taW5nIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNiM2IzYjM7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX195ZWFyLW9wdGlvbjpob3ZlciAucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0teWVhcnMtcHJldmlvdXMsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLW9wdGlvbjpob3ZlciAucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0teWVhcnMtcHJldmlvdXMsXFxuLnJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItb3B0aW9uOmhvdmVyIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy1wcmV2aW91cyB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjYjNiM2IzO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9feWVhci1vcHRpb24tLXNlbGVjdGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC1vcHRpb24tLXNlbGVjdGVkLFxcbi5yZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLW9wdGlvbi0tc2VsZWN0ZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTVweDtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2Nsb3NlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgcGFkZGluZzogMHB4IDZweCAwcHggMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX2Nsb3NlLWljb246OmFmdGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTZiYTU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBkN1xcXCI7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX190b2RheS1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWVhZWFlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGNsZWFyOiBsZWZ0O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheS1uYW1lLFxcbi5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheSxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX190aW1lLW5hbWUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSwgKG1heC1oZWlnaHQ6IDU1MHB4KSB7XFxuICAucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZSxcXG4gIC5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX2RheSxcXG4gIC5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX3RpbWUtbmFtZSB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIH1cXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbCAucmVhY3QtZGF0ZXBpY2tlcl9fY3VycmVudC1tb250aCxcXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyLXRpbWVfX2hlYWRlciB7XFxuICBmb250LXNpemU6IDEuNDRyZW07XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24ge1xcbiAgYm9yZGVyOiAwLjgxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1wcmV2aW91cyB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5yZWFjdC1kYXRlcGlja2VyX19wb3J0YWwgLnJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXByZXZpb3VzOmhvdmVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2IzYjNiMztcXG59XFxuXFxuLnJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbCAucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0tcHJldmlvdXMtLWRpc2FibGVkLCAucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1wcmV2aW91cy0tZGlzYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZTZlNmU2O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0OmhvdmVyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjNiM2IzO1xcbn1cXG5cXG4ucmVhY3QtZGF0ZXBpY2tlcl9fcG9ydGFsIC5yZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS1kaXNhYmxlZCwgLnJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbCAucmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0tbmV4dC0tZGlzYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNlNmU2ZTY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdpcy1hcmd1bWVudHMnKTtcbnZhciBpcyA9IHJlcXVpcmUoJ29iamVjdC1pcycpO1xudmFyIGlzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xudmFyIGZsYWdzID0gcmVxdWlyZSgncmVnZXhwLnByb3RvdHlwZS5mbGFncycpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG5cbnZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAob3B0cy5zdHJpY3QgPyBpcyhhY3R1YWwsIGV4cGVjdGVkKSA6IGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JywgZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8ICh0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGlzKGFjdHVhbCwgZXhwZWN0ZWQpIDogYWN0dWFsID09IGV4cGVjdGVkO1xuICB9XG5cbiAgLypcbiAgICogNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gICAqIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAgKiB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gICAqIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgICogY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgICogYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgLyogZXNsaW50IG1heC1zdGF0ZW1lbnRzOiBbMiwgNTBdICovXG4gIHZhciBpLCBrZXk7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGlzQXJndW1lbnRzKGEpICE9PSBpc0FyZ3VtZW50cyhiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB2YXIgYUlzUmVnZXggPSBpc1JlZ2V4KGEpO1xuICB2YXIgYklzUmVnZXggPSBpc1JlZ2V4KGIpO1xuICBpZiAoYUlzUmVnZXggIT09IGJJc1JlZ2V4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYUlzUmVnZXggfHwgYklzUmVnZXgpIHtcbiAgICByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGZsYWdzKGEpID09PSBmbGFncyhiKTtcbiAgfVxuXG4gIGlmIChpc0RhdGUoYSkgJiYgaXNEYXRlKGIpKSB7XG4gICAgcmV0dXJuIGdldFRpbWUuY2FsbChhKSA9PT0gZ2V0VGltZS5jYWxsKGIpO1xuICB9XG5cbiAgdmFyIGFJc0J1ZmZlciA9IGlzQnVmZmVyKGEpO1xuICB2YXIgYklzQnVmZmVyID0gaXNCdWZmZXIoYik7XG4gIGlmIChhSXNCdWZmZXIgIT09IGJJc0J1ZmZlcikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGFJc0J1ZmZlciB8fCBiSXNCdWZmZXIpIHsgLy8gJiYgd291bGQgd29yayB0b28sIGJlY2F1c2UgYm90aCBhcmUgdHJ1ZSBvciBib3RoIGZhbHNlIGhlcmVcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7IC8vIGhhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXMgaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyB0aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vIH5+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG4gIC8vIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kIH5+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwRXF1YWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yICh2YXIgXyBpbiBvYmopIHsgLy8ganNjczppZ25vcmUgZGlzYWxsb3dVbnVzZWRWYXJpYWJsZXNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsIi8vIEBmbG93XG4ndXNlIHN0cmljdCc7XG5cbnZhciBrZXkgPSAnX19nbG9iYWxfdW5pcXVlX2lkX18nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZ2xvYmFsW2tleV0gPSAoZ2xvYmFsW2tleV0gfHwgMCkgKyAxO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcblxudmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuICR0b1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxudmFyIGlzTGVnYWN5QXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGlzU3RhbmRhcmRBcmd1bWVudHModmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHQkdG9TdHJpbmcodmFsdWUpICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzKGFyZ3VtZW50cyk7XG59KCkpO1xuXG5pc1N0YW5kYXJkQXJndW1lbnRzLmlzTGVnYWN5QXJndW1lbnRzID0gaXNMZWdhY3lBcmd1bWVudHM7IC8vIGZvciB0ZXN0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPyBpc1N0YW5kYXJkQXJndW1lbnRzIDogaXNMZWdhY3lBcmd1bWVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVHZXREYXlDYWxsKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcbnZhciBoYXNUb1N0cmluZ1RhZyA9IGhhc1N5bWJvbHMgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG52YXIgaGFzO1xudmFyICRleGVjO1xudmFyIGlzUmVnZXhNYXJrZXI7XG52YXIgYmFkU3RyaW5naWZpZXI7XG5cbmlmIChoYXNUb1N0cmluZ1RhZykge1xuXHRoYXMgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHknKTtcblx0JGV4ZWMgPSBjYWxsQm91bmQoJ1JlZ0V4cC5wcm90b3R5cGUuZXhlYycpO1xuXHRpc1JlZ2V4TWFya2VyID0ge307XG5cblx0dmFyIHRocm93UmVnZXhNYXJrZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhyb3cgaXNSZWdleE1hcmtlcjtcblx0fTtcblx0YmFkU3RyaW5naWZpZXIgPSB7XG5cdFx0dG9TdHJpbmc6IHRocm93UmVnZXhNYXJrZXIsXG5cdFx0dmFsdWVPZjogdGhyb3dSZWdleE1hcmtlclxuXHR9O1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlID09PSAnc3ltYm9sJykge1xuXHRcdGJhZFN0cmluZ2lmaWVyW1N5bWJvbC50b1ByaW1pdGl2ZV0gPSB0aHJvd1JlZ2V4TWFya2VyO1xuXHR9XG59XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVG9TdHJpbmdUYWdcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cdD8gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRcdGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBkZXNjcmlwdG9yID0gZ09QRCh2YWx1ZSwgJ2xhc3RJbmRleCcpO1xuXHRcdHZhciBoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGhhcyhkZXNjcmlwdG9yLCAndmFsdWUnKTtcblx0XHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHQkZXhlYyh2YWx1ZSwgYmFkU3RyaW5naWZpZXIpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBlID09PSBpc1JlZ2V4TWFya2VyO1xuXHRcdH1cblx0fVxuXHQ6IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0XHQvLyBJbiBvbGRlciBicm93c2VycywgdHlwZW9mIHJlZ2V4IGluY29ycmVjdGx5IHJldHVybnMgJ2Z1bmN0aW9uJ1xuXHRcdGlmICghdmFsdWUgfHwgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiAkdG9TdHJpbmcodmFsdWUpID09PSByZWdleENsYXNzO1xuXHR9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbnVtYmVySXNOYU4gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXMoYSwgYikge1xuXHRpZiAoYSA9PT0gMCAmJiBiID09PSAwKSB7XG5cdFx0cmV0dXJuIDEgLyBhID09PSAxIC8gYjtcblx0fVxuXHRpZiAoYSA9PT0gYikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmIChudW1iZXJJc05hTihhKSAmJiBudW1iZXJJc05hTihiKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdjYWxsLWJpbmQnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHBvbHlmaWxsID0gY2FsbEJpbmQoZ2V0UG9seWZpbGwoKSwgT2JqZWN0KTtcblxuZGVmaW5lKHBvbHlmaWxsLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFBvbHlmaWxsKCkge1xuXHRyZXR1cm4gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbU9iamVjdElzKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRkZWZpbmUoT2JqZWN0LCB7IGlzOiBwb2x5ZmlsbCB9LCB7XG5cdFx0aXM6IGZ1bmN0aW9uIHRlc3RPYmplY3RJcygpIHtcblx0XHRcdHJldHVybiBPYmplY3QuaXMgIT09IHBvbHlmaWxsO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzU2hpbTtcbmlmICghT2JqZWN0LmtleXMpIHtcblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cblx0dmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cdHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcblx0dmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdHZhciBoYXNEb250RW51bUJ1ZyA9ICFpc0VudW1lcmFibGUuY2FsbCh7IHRvU3RyaW5nOiBudWxsIH0sICd0b1N0cmluZycpO1xuXHR2YXIgaGFzUHJvdG9FbnVtQnVnID0gaXNFbnVtZXJhYmxlLmNhbGwoZnVuY3Rpb24gKCkge30sICdwcm90b3R5cGUnKTtcblx0dmFyIGRvbnRFbnVtcyA9IFtcblx0XHQndG9TdHJpbmcnLFxuXHRcdCd0b0xvY2FsZVN0cmluZycsXG5cdFx0J3ZhbHVlT2YnLFxuXHRcdCdoYXNPd25Qcm9wZXJ0eScsXG5cdFx0J2lzUHJvdG90eXBlT2YnLFxuXHRcdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdFx0J2NvbnN0cnVjdG9yJ1xuXHRdO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHRcdHZhciBjdG9yID0gby5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gbztcblx0fTtcblx0dmFyIGV4Y2x1ZGVkS2V5cyA9IHtcblx0XHQkYXBwbGljYXRpb25DYWNoZTogdHJ1ZSxcblx0XHQkY29uc29sZTogdHJ1ZSxcblx0XHQkZXh0ZXJuYWw6IHRydWUsXG5cdFx0JGZyYW1lOiB0cnVlLFxuXHRcdCRmcmFtZUVsZW1lbnQ6IHRydWUsXG5cdFx0JGZyYW1lczogdHJ1ZSxcblx0XHQkaW5uZXJIZWlnaHQ6IHRydWUsXG5cdFx0JGlubmVyV2lkdGg6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmNoYW5nZTogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuZXJyb3I6IHRydWUsXG5cdFx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHRcdCRvdXRlcldpZHRoOiB0cnVlLFxuXHRcdCRwYWdlWE9mZnNldDogdHJ1ZSxcblx0XHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdFx0JHBhcmVudDogdHJ1ZSxcblx0XHQkc2Nyb2xsTGVmdDogdHJ1ZSxcblx0XHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHRcdCRzY3JvbGxYOiB0cnVlLFxuXHRcdCRzY3JvbGxZOiB0cnVlLFxuXHRcdCRzZWxmOiB0cnVlLFxuXHRcdCR3ZWJraXRJbmRleGVkREI6IHRydWUsXG5cdFx0JHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuXHRcdCR3aW5kb3c6IHRydWVcblx0fTtcblx0dmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmb3IgKHZhciBrIGluIHdpbmRvdykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFleGNsdWRlZEtleXNbJyQnICsga10gJiYgaGFzLmNhbGwod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSgpKTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnKSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUobyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRrZXlzU2hpbSA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG5cdFx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHRcdHZhciBpc0Z1bmN0aW9uID0gdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRcdHZhciBpc0FyZ3VtZW50cyA9IGlzQXJncyhvYmplY3QpO1xuXHRcdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFx0dmFyIHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdFx0fVxuXG5cdFx0dmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0Z1bmN0aW9uO1xuXHRcdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGlzQXJndW1lbnRzICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGopKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaGFzRG9udEVudW1CdWcpIHtcblx0XHRcdHZhciBza2lwQ29uc3RydWN0b3IgPSBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kob2JqZWN0KTtcblxuXHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdFx0aWYgKCEoc2tpcENvbnN0cnVjdG9yICYmIGRvbnRFbnVtc1trXSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bXNba10pKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKGRvbnRFbnVtc1trXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xuXG52YXIgb3JpZ0tleXMgPSBPYmplY3Qua2V5cztcbnZhciBrZXlzU2hpbSA9IG9yaWdLZXlzID8gZnVuY3Rpb24ga2V5cyhvKSB7IHJldHVybiBvcmlnS2V5cyhvKTsgfSA6IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIG9yaWdpbmFsS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHR2YXIgYXJncyA9IE9iamVjdC5rZXlzKGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gYXJncyAmJiBhcmdzLmxlbmd0aCA9PT0gYXJndW1lbnRzLmxlbmd0aDtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzID0ga2V5c1NoaW07XG5cdH1cblx0cmV0dXJuIE9iamVjdC5rZXlzIHx8IGtleXNTaGltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuIiwiLyoqIVxuICogQGZpbGVPdmVydmlldyBLaWNrYXNzIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBwbGFjZSBwb3BwZXJzIG5lYXIgdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnRzLlxuICogQHZlcnNpb24gMS4xNi4xXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciB0aW1lb3V0RHVyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59KCk7XG5cbmZ1bmN0aW9uIG1pY3JvdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGVkID0gZmFsc2U7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2U7XG5cbi8qKlxuKiBDcmVhdGUgYSBkZWJvdW5jZWQgdmVyc2lvbiBvZiBhIG1ldGhvZCwgdGhhdCdzIGFzeW5jaHJvbm91c2x5IGRlZmVycmVkXG4qIGJ1dCBjYWxsZWQgaW4gdGhlIG1pbmltdW0gdGltZSBwb3NzaWJsZS5cbipcbiogQG1ldGhvZFxuKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4qIEBhcmd1bWVudCB7RnVuY3Rpb259IGZuXG4qIEByZXR1cm5zIHtGdW5jdGlvbn1cbiovXG52YXIgZGVib3VuY2UgPSBzdXBwb3J0c01pY3JvVGFza3MgPyBtaWNyb3Rhc2tEZWJvdW5jZSA6IHRhc2tEZWJvdW5jZTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFyaWFibGUgaXMgYSBmdW5jdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBbnl9IGZ1bmN0aW9uVG9DaGVjayAtIHZhcmlhYmxlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvOiBpcyBhIGZ1bmN0aW9uP1xuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmN0aW9uVG9DaGVjaykge1xuICB2YXIgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIHZhciBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cbiAgdmFyIF9nZXRTdHlsZUNvbXB1dGVkUHJvcCA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1k7XG5cbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlZmVyZW5jZSBub2RlIG9mIHRoZSByZWZlcmVuY2Ugb2JqZWN0LCBvciB0aGUgcmVmZXJlbmNlIG9iamVjdCBpdHNlbGYuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkge1xuICByZXR1cm4gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlID8gcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgOiByZWZlcmVuY2U7XG59XG5cbnZhciBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG52YXIgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5mdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIHZhciBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgdmFyIG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cblxuZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgdmFyIG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gIHZhciBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgdmFyIGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICB2YXIgY29tbW9uQW5jZXN0b3JDb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcblxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG5cbiAgaWYgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJiBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgfHwgc3RhcnQuY29udGFpbnMoZW5kKSkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgdmFyIGVsZW1lbnQxcm9vdCA9IGdldFJvb3QoZWxlbWVudDEpO1xuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQpIHtcbiAgdmFyIHNpZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0b3AnO1xuXG4gIHZhciB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuXG4vKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCAtIFJlY3Qgb2JqZWN0IHlvdSB3YW50IHRvIGNoYW5nZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjdCAtIFRoZSBtb2RpZmllciByZWN0IG9iamVjdFxuICovXG5mdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQpIHtcbiAgdmFyIHN1YnRyYWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgdmFyIG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuXG4vKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIHZhciBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICB2YXIgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10pICsgcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQiArICdXaWR0aCddKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSgxMCkgPyBwYXJzZUludChodG1sWydvZmZzZXQnICsgYXhpc10pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnKV0pICsgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0JyldKSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudCkge1xuICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpXG4gIH07XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IG9mZnNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IENsaWVudFJlY3QgbGlrZSBvdXRwdXRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb2Zmc2V0cywge1xuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgdmFyIHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICB2YXIgd2lkdGggPSBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuaGVpZ2h0O1xuXG4gIHZhciBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgdmFyIHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIGlzSUUxMCA9IGlzSUUoMTApO1xuICB2YXIgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIHZhciBjaGlsZHJlblJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xuICB2YXIgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KHBhcmVudCk7XG4gIHZhciBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcbiAgdmFyIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmIChmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xuICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gIH1cbiAgdmFyIG9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvbiA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gIHZhciBleGNsdWRlU2Nyb2xsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgdmFyIHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIHZhciBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgdmFyIG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG4gIHZhciBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgdmFyIGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgdmFyIGJvdW5kYXJpZXNOb2RlID0gdm9pZCAwO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoYm91bmRhcmllc05vZGUsIG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICB2YXIgX2dldFdpbmRvd1NpemVzID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpLFxuICAgICAgICAgIGhlaWdodCA9IF9nZXRXaW5kb3dTaXplcy5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfZ2V0V2luZG93U2l6ZXMud2lkdGg7XG5cbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgdmFyIGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgYm91bmRhcmllcy5sZWZ0ICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQgfHwgMDtcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7XG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDtcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcuYm90dG9tIHx8IDA7XG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFyZWEoX3JlZikge1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgcmVmUmVjdCwgcG9wcGVyLCByZWZlcmVuY2UsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBwYWRkaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAwO1xuXG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICB2YXIgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIHZhciBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHJlY3RzW2tleV0sIHtcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLmFyZWEgLSBhLmFyZWE7XG4gIH0pO1xuXG4gIHZhciBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG4gICAgcmV0dXJuIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodDtcbiAgfSk7XG5cbiAgdmFyIGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXS5rZXkgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICB2YXIgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCBnZXRSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZSkpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHZhciBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICB2YXIgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIHZhciBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHRcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIHZhciBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xuICB2YXIgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG5cbi8qKlxuICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmQoYXJyLCBjaGVjaykge1xuICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgIHJldHVybiBhcnIuZmluZChjaGVjayk7XG4gIH1cblxuICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICByZXR1cm4gYXJyLmZpbHRlcihjaGVjaylbMF07XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgIHJldHVybiBjdXJbcHJvcF0gPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgdmFyIG1hdGNoID0gZmluZChhcnIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqW3Byb3BdID09PSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG59XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgdmFyIG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkID8gbW9kaWZpZXJzIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICB2YXIgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9XG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRoaXMuc3RhdGUsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgZW5hYmxlZCA9IF9yZWYuZW5hYmxlZDtcbiAgICByZXR1cm4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWU7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSBvciBQYXNjYWxDYXNlLCBkZXBlbmRpbmcgb24gdGhlIHZlbmRvciBwcmVmaXgpXG4gKi9cbmZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICB2YXIgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgdmFyIHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgdG9DaGVjayA9IHByZWZpeCA/ICcnICsgcHJlZml4ICsgdXBwZXJQcm9wIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBwb3BwZXIuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gIC8vIHRvdWNoIERPTSBvbmx5IGlmIGBhcHBseVN0eWxlYCBtb2RpZmllciBpcyBlbmFibGVkXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZVtnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXSA9ICcnO1xuICB9XG5cbiAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAvLyByZW1vdmUgdGhlIHBvcHBlciBpZiB1c2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cyk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgb3B0aW9ucywgc3RhdGUsIHVwZGF0ZUJvdW5kKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgdmFyIHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucywgdGhpcy5zdGF0ZSwgdGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIHZhciBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChvcHRpb25zLnBsYWNlbWVudCwgcmVmZXJlbmNlT2Zmc2V0cywgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IHNob3VsZFJvdW5kIC0gSWYgdGhlIG9mZnNldHMgc2hvdWxkIGJlIHJvdW5kZWQgYXQgYWxsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcG9wcGVyJ3MgcG9zaXRpb24gb2Zmc2V0cyByb3VuZGVkXG4gKlxuICogVGhlIHRhbGUgb2YgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZy4gSXQncyBzdGlsbCBub3QgMTAwJSBwZXJmZWN0LCBidXQgYXNcbiAqIGdvb2QgYXMgaXQgY2FuIGJlIHdpdGhpbiByZWFzb24uXG4gKiBEaXNjdXNzaW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL3B1bGwvNzE1XG4gKlxuICogTG93IERQSSBzY3JlZW5zIGNhdXNlIGEgcG9wcGVyIHRvIGJlIGJsdXJyeSBpZiBub3QgdXNpbmcgZnVsbCBwaXhlbHMgKFNhZmFyaVxuICogYXMgd2VsbCBvbiBIaWdoIERQSSBzY3JlZW5zKS5cbiAqXG4gKiBGaXJlZm94IHByZWZlcnMgbm8gcm91bmRpbmcgZm9yIHBvc2l0aW9uaW5nIGFuZCBkb2VzIG5vdCBoYXZlIGJsdXJyaW5lc3Mgb25cbiAqIGhpZ2ggRFBJIHNjcmVlbnMuXG4gKlxuICogT25seSBob3Jpem9udGFsIHBsYWNlbWVudCBhbmQgbGVmdC9yaWdodCB2YWx1ZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkLlxuICovXG5mdW5jdGlvbiBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCBzaG91bGRSb3VuZCkge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciByb3VuZCA9IE1hdGgucm91bmQsXG4gICAgICBmbG9vciA9IE1hdGguZmxvb3I7XG5cbiAgdmFyIG5vUm91bmQgPSBmdW5jdGlvbiBub1JvdW5kKHYpIHtcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICB2YXIgcmVmZXJlbmNlV2lkdGggPSByb3VuZChyZWZlcmVuY2Uud2lkdGgpO1xuICB2YXIgcG9wcGVyV2lkdGggPSByb3VuZChwb3BwZXIud2lkdGgpO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgaXNWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5pbmRleE9mKCctJykgIT09IC0xO1xuICB2YXIgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gIHZhciBib3RoT2RkV2lkdGggPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IDEgJiYgcG9wcGVyV2lkdGggJSAyID09PSAxO1xuXG4gIHZhciBob3Jpem9udGFsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IGlzVmVydGljYWwgfHwgaXNWYXJpYXRpb24gfHwgc2FtZVdpZHRoUGFyaXR5ID8gcm91bmQgOiBmbG9vcjtcbiAgdmFyIHZlcnRpY2FsVG9JbnRlZ2VyID0gIXNob3VsZFJvdW5kID8gbm9Sb3VuZCA6IHJvdW5kO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogaG9yaXpvbnRhbFRvSW50ZWdlcihib3RoT2RkV2lkdGggJiYgIWlzVmFyaWF0aW9uICYmIHNob3VsZFJvdW5kID8gcG9wcGVyLmxlZnQgLSAxIDogcG9wcGVyLmxlZnQpLFxuICAgIHRvcDogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLnRvcCksXG4gICAgYm90dG9tOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogaG9yaXpvbnRhbFRvSW50ZWdlcihwb3BwZXIucmlnaHQpXG4gIH07XG59XG5cbnZhciBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgL0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlU3R5bGUoZGF0YSwgb3B0aW9ucykge1xuICB2YXIgeCA9IG9wdGlvbnMueCxcbiAgICAgIHkgPSBvcHRpb25zLnk7XG4gIHZhciBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuXG4gIHZhciBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGUnO1xuICB9KS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGdwdUFjY2VsZXJhdGlvbmAgb3B0aW9uIG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyIGFuZCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBvcHBlci5qcyEnKTtcbiAgfVxuICB2YXIgZ3B1QWNjZWxlcmF0aW9uID0gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gOiBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbjtcblxuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogcG9wcGVyLnBvc2l0aW9uXG4gIH07XG5cbiAgdmFyIG9mZnNldHMgPSBnZXRSb3VuZGVkT2Zmc2V0cyhkYXRhLCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgfHwgIWlzRmlyZWZveCk7XG5cbiAgdmFyIHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgdmFyIHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIHZhciBsZWZ0ID0gdm9pZCAwLFxuICAgICAgdG9wID0gdm9pZCAwO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50UmVjdC53aWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gJ3RyYW5zbGF0ZTNkKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4LCAwKSc7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIHZhciBpbnZlcnRUb3AgPSBzaWRlQSA9PT0gJ2JvdHRvbScgPyAtMSA6IDE7XG4gICAgdmFyIGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IHNpZGVBICsgJywgJyArIHNpZGVCO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywgZGF0YS5hdHRyaWJ1dGVzKTtcbiAgZGF0YS5zdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBkYXRhLnN0eWxlcyk7XG4gIGRhdGEuYXJyb3dTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLmFycm93LCBkYXRhLmFycm93U3R5bGVzKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gKiBJdCBjaGVja3MgaWYgdGhlIG5lZWRlZCBtb2RpZmllciBpcyBsaXN0ZWQgYW5kIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMgLSBsaXN0IG9mIG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKG1vZGlmaWVycywgcmVxdWVzdGluZ05hbWUsIHJlcXVlc3RlZE5hbWUpIHtcbiAgdmFyIHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICByZXR1cm4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWU7XG4gIH0pO1xuXG4gIHZhciBpc1JlcXVpcmVkID0gISFyZXF1ZXN0aW5nICYmIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmIG1vZGlmaWVyLmVuYWJsZWQgJiYgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyO1xuICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICB2YXIgX3JlcXVlc3RpbmcgPSAnYCcgKyByZXF1ZXN0aW5nTmFtZSArICdgJztcbiAgICB2YXIgcmVxdWVzdGVkID0gJ2AnICsgcmVxdWVzdGVkTmFtZSArICdgJztcbiAgICBjb25zb2xlLndhcm4ocmVxdWVzdGVkICsgJyBtb2RpZmllciBpcyByZXF1aXJlZCBieSAnICsgX3JlcXVlc3RpbmcgKyAnIG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJyArIF9yZXF1ZXN0aW5nICsgJyEnKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGFycm93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMkYXJyb3c7XG5cbiAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2Fycm93JywgJ2tlZXBUb2dldGhlcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYXJyb3dFbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZSBhcnJvd0VsZW1lbnQgaXNuJ3QgYSBxdWVyeSBzZWxlY3RvciB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlXG4gICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICB2YXIgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICB2YXIgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIHZhciBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09IHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9IHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIHZhciBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgcG9wcGVyIG9mZnNldHNcbiAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgdmFyIGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbJ21hcmdpbicgKyBzaWRlQ2FwaXRhbGl6ZWRdKTtcbiAgdmFyIHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1snYm9yZGVyJyArIHNpZGVDYXBpdGFsaXplZCArICdXaWR0aCddKTtcbiAgdmFyIHNpZGVWYWx1ZSA9IGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0gKF9kYXRhJG9mZnNldHMkYXJyb3cgPSB7fSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgc2lkZSwgTWF0aC5yb3VuZChzaWRlVmFsdWUpKSwgZGVmaW5lUHJvcGVydHkoX2RhdGEkb2Zmc2V0cyRhcnJvdywgYWx0U2lkZSwgJycpLCBfZGF0YSRvZmZzZXRzJGFycm93KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCB2YXJpYXRpb25cbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50IHZhcmlhdGlvblxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pIHtcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICByZXR1cm4gJ3N0YXJ0JztcbiAgfSBlbHNlIGlmICh2YXJpYXRpb24gPT09ICdzdGFydCcpIHtcbiAgICByZXR1cm4gJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIHZhcmlhdGlvbjtcbn1cblxuLyoqXG4gKiBMaXN0IG9mIGFjY2VwdGVkIHBsYWNlbWVudHMgdG8gdXNlIGFzIHZhbHVlcyBvZiB0aGUgYHBsYWNlbWVudGAgb3B0aW9uLjxiciAvPlxuICogVmFsaWQgcGxhY2VtZW50cyBhcmU6XG4gKiAtIGBhdXRvYFxuICogLSBgdG9wYFxuICogLSBgcmlnaHRgXG4gKiAtIGBib3R0b21gXG4gKiAtIGBsZWZ0YFxuICpcbiAqIEVhY2ggcGxhY2VtZW50IGNhbiBoYXZlIGEgdmFyaWF0aW9uIGZyb20gdGhpcyBsaXN0OlxuICogLSBgLXN0YXJ0YFxuICogLSBgLWVuZGBcbiAqXG4gKiBWYXJpYXRpb25zIGFyZSBpbnRlcnByZXRlZCBlYXNpbHkgaWYgeW91IHRoaW5rIG9mIHRoZW0gYXMgdGhlIGxlZnQgdG8gcmlnaHRcbiAqIHdyaXR0ZW4gbGFuZ3VhZ2VzLiBIb3Jpem9udGFsbHkgKGB0b3BgIGFuZCBgYm90dG9tYCksIGBzdGFydGAgaXMgbGVmdCBhbmQgYGVuZGBcbiAqIGlzIHJpZ2h0LjxiciAvPlxuICogVmVydGljYWxseSAoYGxlZnRgIGFuZCBgcmlnaHRgKSwgYHN0YXJ0YCBpcyB0b3AgYW5kIGBlbmRgIGlzIGJvdHRvbS5cbiAqXG4gKiBTb21lIHZhbGlkIGV4YW1wbGVzIGFyZTpcbiAqIC0gYHRvcC1lbmRgIChvbiB0b3Agb2YgcmVmZXJlbmNlLCByaWdodCBhbGlnbmVkKVxuICogLSBgcmlnaHQtc3RhcnRgIChvbiByaWdodCBvZiByZWZlcmVuY2UsIHRvcCBhbGlnbmVkKVxuICogLSBgYm90dG9tYCAob24gYm90dG9tLCBjZW50ZXJlZClcbiAqIC0gYGF1dG8tZW5kYCAob24gdGhlIHNpZGUgd2l0aCBtb3JlIHNwYWNlIGF2YWlsYWJsZSwgYWxpZ25tZW50IGRlcGVuZHMgYnkgcGxhY2VtZW50KVxuICpcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBlbnVtIHtTdHJpbmd9XG4gKiBAcmVhZG9ubHlcbiAqIEBtZXRob2QgcGxhY2VtZW50c1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgcGxhY2VtZW50cyA9IFsnYXV0by1zdGFydCcsICdhdXRvJywgJ2F1dG8tZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnLCAndG9wLWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICdyaWdodC1lbmQnLCAnYm90dG9tLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2xlZnQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCddO1xuXG4vLyBHZXQgcmlkIG9mIGBhdXRvYCBgYXV0by1zdGFydGAgYW5kIGBhdXRvLWVuZGBcbnZhciB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQpIHtcbiAgdmFyIGNvdW50ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIHZhciBhcnIgPSB2YWxpZFBsYWNlbWVudHMuc2xpY2UoaW5kZXggKyAxKS5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cblxudmFyIEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZSdcbn07XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBmbGlwKGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gaWYgYGlubmVyYCBtb2RpZmllciBpcyBlbmFibGVkLCB3ZSBjYW4ndCB1c2UgdGhlIGBmbGlwYCBtb2RpZmllclxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdpbm5lcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YS5mbGlwcGVkICYmIGRhdGEucGxhY2VtZW50ID09PSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50KSB7XG4gICAgLy8gc2VlbXMgbGlrZSBmbGlwIGlzIHRyeWluZyB0byBsb29wLCBwcm9iYWJseSB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2Ugb24gYW55IG9mIHRoZSBmbGlwcGFibGUgc2lkZXNcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgdmFyIGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIHBvcHBlck9mZnNldHMgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuICAgIHZhciByZWZPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcblxuICAgIC8vIHVzaW5nIGZsb29yIGJlY2F1c2UgdGhlIHJlZmVyZW5jZSBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIG92ZXJsYXBzUmVmID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihyZWZPZmZzZXRzLmxlZnQpIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IocmVmT2Zmc2V0cy5yaWdodCkgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihyZWZPZmZzZXRzLnRvcCkgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihyZWZPZmZzZXRzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzTGVmdCA9IGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihib3VuZGFyaWVzLmxlZnQpO1xuICAgIHZhciBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgdmFyIG92ZXJmbG93c1RvcCA9IGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKGJvdW5kYXJpZXMudG9wKTtcbiAgICB2YXIgb3ZlcmZsb3dzQm90dG9tID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0JvdW5kYXJpZXMgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQgPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NMZWZ0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20gfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NUb3ApO1xuXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSBmbGlwcGVkVmFyaWF0aW9uQnlSZWYgfHwgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudDtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgZGF0YS5vZmZzZXRzLnBvcHBlciwgZ2V0UG9wcGVyT2Zmc2V0cyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpKTtcblxuICAgICAgZGF0YSA9IHJ1bk1vZGlmaWVycyhkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZGF0YSwgJ2ZsaXAnKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5mdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIHZhciBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIHZhciB2YWx1ZSA9ICtzcGxpdFsxXTtcbiAgdmFyIHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB2b2lkIDA7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICB2YXIgc2l6ZSA9IHZvaWQgMDtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5mdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMsIGJhc2VQbGFjZW1lbnQpIHtcbiAgdmFyIG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICB2YXIgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgdmFyIGZyYWdtZW50cyA9IG9mZnNldC5zcGxpdCgvKFxcK3xcXC0pLykubWFwKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcudHJpbSgpO1xuICB9KTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgdmFyIGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihmaW5kKGZyYWdtZW50cywgZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy5zZWFyY2goLyx8XFxzLykgIT09IC0xO1xuICB9KSk7XG5cbiAgaWYgKGZyYWdtZW50c1tkaXZpZGVyXSAmJiBmcmFnbWVudHNbZGl2aWRlcl0uaW5kZXhPZignLCcpID09PSAtMSkge1xuICAgIGNvbnNvbGUud2FybignT2Zmc2V0cyBzZXBhcmF0ZWQgYnkgd2hpdGUgc3BhY2UocykgYXJlIGRlcHJlY2F0ZWQsIHVzZSBhIGNvbW1hICgsKSBpbnN0ZWFkLicpO1xuICB9XG5cbiAgLy8gSWYgZGl2aWRlciBpcyBmb3VuZCwgd2UgZGl2aWRlIHRoZSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHMgdG8gZGl2aWRlXG4gIC8vIHRoZW0gYnkgb2ZzZXQgWCBhbmQgWS5cbiAgdmFyIHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICB2YXIgb3BzID0gZGl2aWRlciAhPT0gLTEgPyBbZnJhZ21lbnRzLnNsaWNlKDAsIGRpdmlkZXIpLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpKV0gOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgdmFyIG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodCkgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIG9wXG4gICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgLm1hcChmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gTG9vcCB0cm91Z2ggdGhlIG9mZnNldHMgYXJyYXlzIGFuZCBleGVjdXRlIHRoZSBvcGVyYXRpb25zXG4gIG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChvcCwgaW5kZXgpIHtcbiAgICBvcC5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnLCBpbmRleDIpIHtcbiAgICAgIGlmIChpc051bWVyaWMoZnJhZykpIHtcbiAgICAgICAgb2Zmc2V0c1tpbmRleF0gKz0gZnJhZyAqIChvcFtpbmRleDIgLSAxXSA9PT0gJy0nID8gLTEgOiAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEBhcmd1bWVudCB7TnVtYmVyfFN0cmluZ30gb3B0aW9ucy5vZmZzZXQ9MFxuICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIG9mZnNldChkYXRhLCBfcmVmKSB7XG4gIHZhciBvZmZzZXQgPSBfcmVmLm9mZnNldDtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LFxuICAgICAgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICB2YXIgb2Zmc2V0cyA9IHZvaWQgMDtcbiAgaWYgKGlzTnVtZXJpYygrb2Zmc2V0KSkge1xuICAgIG9mZnNldHMgPSBbK29mZnNldCwgMF07XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0cyA9IHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyLCByZWZlcmVuY2UsIGJhc2VQbGFjZW1lbnQpO1xuICB9XG5cbiAgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAndG9wJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCAtPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMV07XG4gIH1cblxuICBkYXRhLnBvcHBlciA9IHBvcHBlcjtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBib3VuZGFyaWVzRWxlbWVudCA9IG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICB2YXIgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIHZhciBwb3BwZXJTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxuICB2YXIgdG9wID0gcG9wcGVyU3R5bGVzLnRvcCxcbiAgICAgIGxlZnQgPSBwb3BwZXJTdHlsZXMubGVmdCxcbiAgICAgIHRyYW5zZm9ybSA9IHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXTtcblxuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBzdHlsZSBwcm9wZXJ0aWVzIGFmdGVyIHRoZSBvZmZzZXRzIGhhdmUgYmVlbiBjb21wdXRlZFxuICBwb3BwZXJTdHlsZXMudG9wID0gdG9wO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9IGxlZnQ7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybTtcblxuICBvcHRpb25zLmJvdW5kYXJpZXMgPSBib3VuZGFyaWVzO1xuXG4gIHZhciBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIHZhciBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIHZhciBjaGVjayA9IHtcbiAgICBwcmltYXJ5OiBmdW5jdGlvbiBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBwbGFjZW1lbnQsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNlY29uZGFyeTogZnVuY3Rpb24gc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihwb3BwZXJbbWFpblNpZGVdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0gLSAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCBtYWluU2lkZSwgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICB2YXIgc2lkZSA9IFsnbGVmdCcsICd0b3AnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG4gICAgcG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgY2hlY2tbc2lkZV0ocGxhY2VtZW50KSk7XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcjtcblxuICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIHNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIHZhciBib3VuZCA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAncHJldmVudE92ZXJmbG93JztcbiAgfSkuYm91bmRhcmllcztcblxuICBpZiAocmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHwgcmVmUmVjdC5sZWZ0ID4gYm91bmQucmlnaHQgfHwgcmVmUmVjdC50b3AgPiBib3VuZC5ib3R0b20gfHwgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnQpIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSB0cnVlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IGZhbHNlO1xuICAgIGRhdGEuYXR0cmlidXRlc1sneC1vdXQtb2YtYm91bmRhcmllcyddID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaW5uZXIoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNIb3JpeiA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBzdWJ0cmFjdExlbmd0aCA9IFsndG9wJywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID09PSAtMTtcblxuICBwb3BwZXJbaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnXSA9IHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtIChzdWJ0cmFjdExlbmd0aCA/IHBvcHBlcltpc0hvcml6ID8gJ3dpZHRoJyA6ICdoZWlnaHQnXSA6IDApO1xuXG4gIGRhdGEucGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QocG9wcGVyKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBNb2RpZmllciBmdW5jdGlvbiwgZWFjaCBtb2RpZmllciBjYW4gaGF2ZSBhIGZ1bmN0aW9uIG9mIHRoaXMgdHlwZSBhc3NpZ25lZFxuICogdG8gaXRzIGBmbmAgcHJvcGVydHkuPGJyIC8+XG4gKiBUaGVzZSBmdW5jdGlvbnMgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCB1cGRhdGUsIHRoaXMgbWVhbnMgdGhhdCB5b3UgbXVzdFxuICogbWFrZSBzdXJlIHRoZXkgYXJlIHBlcmZvcm1hbnQgZW5vdWdoIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGJvdHRsZW5lY2tzLlxuICpcbiAqIEBmdW5jdGlvbiBNb2RpZmllckZuXG4gKiBAYXJndW1lbnQge2RhdGFPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge2RhdGFPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuXG4vKipcbiAqIE1vZGlmaWVycyBhcmUgcGx1Z2lucyB1c2VkIHRvIGFsdGVyIHRoZSBiZWhhdmlvciBvZiB5b3VyIHBvcHBlcnMuPGJyIC8+XG4gKiBQb3BwZXIuanMgdXNlcyBhIHNldCBvZiA5IG1vZGlmaWVycyB0byBwcm92aWRlIGFsbCB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0aWVzXG4gKiBuZWVkZWQgYnkgdGhlIGxpYnJhcnkuXG4gKlxuICogVXN1YWxseSB5b3UgZG9uJ3Qgd2FudCB0byBvdmVycmlkZSB0aGUgYG9yZGVyYCwgYGZuYCBhbmQgYG9uTG9hZGAgcHJvcHMuXG4gKiBBbGwgdGhlIG90aGVyIHByb3BlcnRpZXMgYXJlIGNvbmZpZ3VyYXRpb25zIHRoYXQgY291bGQgYmUgdHdlYWtlZC5cbiAqIEBuYW1lc3BhY2UgbW9kaWZpZXJzXG4gKi9cbnZhciBtb2RpZmllcnMgPSB7XG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHNoaWZ0IHRoZSBwb3BwZXIgb24gdGhlIHN0YXJ0IG9yIGVuZCBvZiBpdHMgcmVmZXJlbmNlXG4gICAqIGVsZW1lbnQuPGJyIC8+XG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgdmFyaWF0aW9uIG9mIHRoZSBgcGxhY2VtZW50YCBwcm9wZXJ0eS48YnIgLz5cbiAgICogSXQgY2FuIGJlIG9uZSBlaXRoZXIgYC1lbmRgIG9yIGAtc3RhcnRgLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgc2hpZnQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAxMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBzaGlmdFxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgYG9mZnNldGAgbW9kaWZpZXIgY2FuIHNoaWZ0IHlvdXIgcG9wcGVyIG9uIGJvdGggaXRzIGF4aXMuXG4gICAqXG4gICAqIEl0IGFjY2VwdHMgdGhlIGZvbGxvd2luZyB1bml0czpcbiAgICogLSBgcHhgIG9yIHVuaXQtbGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgYGhlaWdodGAuXG4gICAqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSB2YWx1ZSAoYXMgYE51bWJlcmAgb3IgYFN0cmluZ2ApLCBvciBhIHBhaXIgb2YgdmFsdWVzXG4gICAqIGFzIGBTdHJpbmdgIGRpdmlkZWQgYnkgYSBjb21tYSBvciBvbmUgKG9yIG1vcmUpIHdoaXRlIHNwYWNlcy48YnIgLz5cbiAgICogVGhlIGxhdHRlciBpcyBhIGRlcHJlY2F0ZWQgbWV0aG9kIGJlY2F1c2UgaXQgbGVhZHMgdG8gY29uZnVzaW9uIGFuZCB3aWxsIGJlXG4gICAqIHJlbW92ZWQgaW4gdjIuPGJyIC8+XG4gICAqIEFkZGl0aW9uYWxseSwgaXQgYWNjZXB0cyBhZGRpdGlvbnMgYW5kIHN1YnRyYWN0aW9ucyBiZXR3ZWVuIGRpZmZlcmVudCB1bml0cy5cbiAgICogTm90ZSB0aGF0IG11bHRpcGxpY2F0aW9ucyBhbmQgZGl2aXNpb25zIGFyZW4ndCBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIFZhbGlkIGV4YW1wbGVzIGFyZTpcbiAgICogYGBgXG4gICAqIDEwXG4gICAqICcxMCUnXG4gICAqICcxMCwgMTAnXG4gICAqICcxMCUsIDEwJ1xuICAgKiAnMTAgKyAxMCUnXG4gICAqICcxMCAtIDV2aCArIDMlJ1xuICAgKiAnLTEwcHggKyA1dmgsIDVweCAtIDYlJ1xuICAgKiBgYGBcbiAgICogPiAqKk5CKio6IElmIHlvdSBkZXNpcmUgdG8gYXBwbHkgb2Zmc2V0cyB0byB5b3VyIHBvcHBlcnMgaW4gYSB3YXkgdGhhdCBtYXkgbWFrZSB0aGVtIG92ZXJsYXBcbiAgICogPiB3aXRoIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50LCB1bmZvcnR1bmF0ZWx5LCB5b3Ugd2lsbCBoYXZlIHRvIGRpc2FibGUgdGhlIGBmbGlwYCBtb2RpZmllci5cbiAgICogPiBZb3UgY2FuIHJlYWQgbW9yZSBvbiB0aGlzIGF0IHRoaXMgW2lzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIG9mZnNldDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0yMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDIwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IG9mZnNldCxcbiAgICAvKiogQHByb3Age051bWJlcnxTdHJpbmd9IG9mZnNldD0wXG4gICAgICogVGhlIG9mZnNldCB2YWx1ZSBhcyBkZXNjcmliZWQgaW4gdGhlIG1vZGlmaWVyIGRlc2NyaXB0aW9uXG4gICAgICovXG4gICAgb2Zmc2V0OiAwXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSBzdXJlIHRoZSByZWZlcmVuY2UgYW5kIGl0cyBwb3BwZXIgc3RheSBuZWFyIGVhY2ggb3RoZXJcbiAgICogd2l0aG91dCBsZWF2aW5nIGFueSBnYXAgYmV0d2VlbiB0aGUgdHdvLiBFc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHRoZSBhcnJvdyBpc1xuICAgKiBlbmFibGVkIGFuZCB5b3Ugd2FudCB0byBlbnN1cmUgdGhhdCBpdCBwb2ludHMgdG8gaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBJdCBjYXJlcyBvbmx5IGFib3V0IHRoZSBmaXJzdCBheGlzLiBZb3UgY2FuIHN0aWxsIGhhdmUgcG9wcGVycyB3aXRoIG1hcmdpblxuICAgKiBiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGtlZXBUb2dldGhlcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj00MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDQwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGtlZXBUb2dldGhlclxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1vZGlmaWVyIGlzIHVzZWQgdG8gbW92ZSB0aGUgYGFycm93RWxlbWVudGAgb2YgdGhlIHBvcHBlciB0byBtYWtlXG4gICAqIHN1cmUgaXQgaXMgcG9zaXRpb25lZCBiZXR3ZWVuIHRoZSByZWZlcmVuY2UgZWxlbWVudCBhbmQgaXRzIHBvcHBlciBlbGVtZW50LlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIG91dGVyIHNpemUgb2YgdGhlIGBhcnJvd0VsZW1lbnRgIG5vZGUgdG8gZGV0ZWN0IGhvdyBtYW55XG4gICAqIHBpeGVscyBvZiBjb25qdW5jdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdXIgb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkXG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBEZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiBmdW5jdGlvbiBvbkNyZWF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIHVwZGF0ZWQuIFRoaXMgY2FsbGJhY2sgaXMgbm90IGNhbGxlZFxuICAgKiBvbiB0aGUgaW5pdGlhbGl6YXRpb24vY3JlYXRpb24gb2YgdGhlIHBvcHBlciwgYnV0IG9ubHkgb24gc3Vic2VxdWVudFxuICAgKiB1cGRhdGVzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvblVwZGF0ZX1cbiAgICovXG4gIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHt9LFxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vZGlmaWVycyB1c2VkIHRvIG1vZGlmeSB0aGUgb2Zmc2V0cyBiZWZvcmUgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLlxuICAgKiBUaGV5IHByb3ZpZGUgbW9zdCBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIFBvcHBlci5qcy5cbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVyczogbW9kaWZpZXJzXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8vIFV0aWxzXG4vLyBNZXRob2RzXG52YXIgUG9wcGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2UuXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIC8gWE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wcGVyKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLnVwZGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30sIG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSwgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pO1xuICAgIH0pXG4gICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllck9wdGlvbnMpIHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHZhciBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuXG5cbiAgY3JlYXRlQ2xhc3MoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICAgKiBpbmNsdWRlIGBwb3BwZXItdXRpbHMuanNgIGJlZm9yZSBgcG9wcGVyLmpzYC5cbiAgICAgKlxuICAgICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICAgKiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHYyISBVc2UgdGhlIFBvcHBlclV0aWxzIG1vZHVsZSBkaXJlY3RseSBpbnN0ZWFkLlxuICAgICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS44XG4gICAgICogQG1lbWJlciBVdGlsc1xuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuICB9XSk7XG4gIHJldHVybiBQb3BwZXI7XG59KCk7XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAuXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cblxuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVhY3QtZGF0ZXBpY2tlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyxyZXF1aXJlKFwicmVhY3RcIikscmVxdWlyZShcInByb3AtdHlwZXNcIikscmVxdWlyZShcImNsYXNzbmFtZXNcIikscmVxdWlyZShcImRhdGUtZm5zL2lzRGF0ZVwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNWYWxpZFwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZm9ybWF0XCIpLHJlcXVpcmUoXCJkYXRlLWZucy9hZGRNaW51dGVzXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9hZGRIb3Vyc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvYWRkRGF5c1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvYWRkV2Vla3NcIikscmVxdWlyZShcImRhdGUtZm5zL2FkZE1vbnRoc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvYWRkWWVhcnNcIikscmVxdWlyZShcImRhdGUtZm5zL3N1Yk1pbnV0ZXNcIikscmVxdWlyZShcImRhdGUtZm5zL3N1YkhvdXJzXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zdWJEYXlzXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zdWJXZWVrc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvc3ViTW9udGhzXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zdWJZZWFyc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0U2Vjb25kc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0TWludXRlc1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0SG91cnNcIikscmVxdWlyZShcImRhdGUtZm5zL2dldERheVwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0RGF0ZVwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0SVNPV2Vla1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZ2V0TW9udGhcIikscmVxdWlyZShcImRhdGUtZm5zL2dldFF1YXJ0ZXJcIikscmVxdWlyZShcImRhdGUtZm5zL2dldFllYXJcIikscmVxdWlyZShcImRhdGUtZm5zL2dldFRpbWVcIikscmVxdWlyZShcImRhdGUtZm5zL3NldFNlY29uZHNcIikscmVxdWlyZShcImRhdGUtZm5zL3NldE1pbnV0ZXNcIikscmVxdWlyZShcImRhdGUtZm5zL3NldEhvdXJzXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zZXRNb250aFwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvc2V0UXVhcnRlclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvc2V0WWVhclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvbWluXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9tYXhcIikscmVxdWlyZShcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcIikscmVxdWlyZShcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3NcIikscmVxdWlyZShcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNcIikscmVxdWlyZShcImRhdGUtZm5zL3N0YXJ0T2ZEYXlcIikscmVxdWlyZShcImRhdGUtZm5zL3N0YXJ0T2ZXZWVrXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zdGFydE9mTW9udGhcIikscmVxdWlyZShcImRhdGUtZm5zL3N0YXJ0T2ZRdWFydGVyXCIpLHJlcXVpcmUoXCJkYXRlLWZucy9zdGFydE9mWWVhclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZW5kT2ZEYXlcIikscmVxdWlyZShcImRhdGUtZm5zL2VuZE9mV2Vla1wiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvZW5kT2ZNb250aFwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNFcXVhbFwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNTYW1lRGF5XCIpLHJlcXVpcmUoXCJkYXRlLWZucy9pc1NhbWVNb250aFwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNTYW1lWWVhclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNTYW1lUXVhcnRlclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNBZnRlclwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvaXNCZWZvcmVcIikscmVxdWlyZShcImRhdGUtZm5zL2lzV2l0aGluSW50ZXJ2YWxcIikscmVxdWlyZShcImRhdGUtZm5zL3RvRGF0ZVwiKSxyZXF1aXJlKFwiZGF0ZS1mbnMvcGFyc2VcIikscmVxdWlyZShcImRhdGUtZm5zL3BhcnNlSVNPXCIpLHJlcXVpcmUoXCJyZWFjdC1vbmNsaWNrb3V0c2lkZVwiKSxyZXF1aXJlKFwicmVhY3QtcG9wcGVyXCIpLHJlcXVpcmUoXCJyZWFjdC1kb21cIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiLFwicmVhY3RcIixcInByb3AtdHlwZXNcIixcImNsYXNzbmFtZXNcIixcImRhdGUtZm5zL2lzRGF0ZVwiLFwiZGF0ZS1mbnMvaXNWYWxpZFwiLFwiZGF0ZS1mbnMvZm9ybWF0XCIsXCJkYXRlLWZucy9hZGRNaW51dGVzXCIsXCJkYXRlLWZucy9hZGRIb3Vyc1wiLFwiZGF0ZS1mbnMvYWRkRGF5c1wiLFwiZGF0ZS1mbnMvYWRkV2Vla3NcIixcImRhdGUtZm5zL2FkZE1vbnRoc1wiLFwiZGF0ZS1mbnMvYWRkWWVhcnNcIixcImRhdGUtZm5zL3N1Yk1pbnV0ZXNcIixcImRhdGUtZm5zL3N1YkhvdXJzXCIsXCJkYXRlLWZucy9zdWJEYXlzXCIsXCJkYXRlLWZucy9zdWJXZWVrc1wiLFwiZGF0ZS1mbnMvc3ViTW9udGhzXCIsXCJkYXRlLWZucy9zdWJZZWFyc1wiLFwiZGF0ZS1mbnMvZ2V0U2Vjb25kc1wiLFwiZGF0ZS1mbnMvZ2V0TWludXRlc1wiLFwiZGF0ZS1mbnMvZ2V0SG91cnNcIixcImRhdGUtZm5zL2dldERheVwiLFwiZGF0ZS1mbnMvZ2V0RGF0ZVwiLFwiZGF0ZS1mbnMvZ2V0SVNPV2Vla1wiLFwiZGF0ZS1mbnMvZ2V0TW9udGhcIixcImRhdGUtZm5zL2dldFF1YXJ0ZXJcIixcImRhdGUtZm5zL2dldFllYXJcIixcImRhdGUtZm5zL2dldFRpbWVcIixcImRhdGUtZm5zL3NldFNlY29uZHNcIixcImRhdGUtZm5zL3NldE1pbnV0ZXNcIixcImRhdGUtZm5zL3NldEhvdXJzXCIsXCJkYXRlLWZucy9zZXRNb250aFwiLFwiZGF0ZS1mbnMvc2V0UXVhcnRlclwiLFwiZGF0ZS1mbnMvc2V0WWVhclwiLFwiZGF0ZS1mbnMvbWluXCIsXCJkYXRlLWZucy9tYXhcIixcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1wiLFwiZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcIixcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3NcIixcImRhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNcIixcImRhdGUtZm5zL3N0YXJ0T2ZEYXlcIixcImRhdGUtZm5zL3N0YXJ0T2ZXZWVrXCIsXCJkYXRlLWZucy9zdGFydE9mTW9udGhcIixcImRhdGUtZm5zL3N0YXJ0T2ZRdWFydGVyXCIsXCJkYXRlLWZucy9zdGFydE9mWWVhclwiLFwiZGF0ZS1mbnMvZW5kT2ZEYXlcIixcImRhdGUtZm5zL2VuZE9mV2Vla1wiLFwiZGF0ZS1mbnMvZW5kT2ZNb250aFwiLFwiZGF0ZS1mbnMvaXNFcXVhbFwiLFwiZGF0ZS1mbnMvaXNTYW1lRGF5XCIsXCJkYXRlLWZucy9pc1NhbWVNb250aFwiLFwiZGF0ZS1mbnMvaXNTYW1lWWVhclwiLFwiZGF0ZS1mbnMvaXNTYW1lUXVhcnRlclwiLFwiZGF0ZS1mbnMvaXNBZnRlclwiLFwiZGF0ZS1mbnMvaXNCZWZvcmVcIixcImRhdGUtZm5zL2lzV2l0aGluSW50ZXJ2YWxcIixcImRhdGUtZm5zL3RvRGF0ZVwiLFwiZGF0ZS1mbnMvcGFyc2VcIixcImRhdGUtZm5zL3BhcnNlSVNPXCIsXCJyZWFjdC1vbmNsaWNrb3V0c2lkZVwiLFwicmVhY3QtcG9wcGVyXCIsXCJyZWFjdC1kb21cIl0sdCk6dCgoZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLkRhdGVQaWNrZXI9e30sZS5SZWFjdCxlLlByb3BUeXBlcyxlLmNsYXNzTmFtZXMsZS5pc0RhdGUsZS5pc1ZhbGlkRGF0ZSxlLmZvcm1hdCxlLmFkZE1pbnV0ZXMsZS5hZGRIb3VycyxlLmFkZERheXMsZS5hZGRXZWVrcyxlLmFkZE1vbnRocyxlLmFkZFllYXJzLG51bGwsbnVsbCxlLnN1YkRheXMsZS5zdWJXZWVrcyxlLnN1Yk1vbnRocyxlLnN1YlllYXJzLGUuZ2V0U2Vjb25kcyxlLmdldE1pbnV0ZXMsZS5nZXRIb3VycyxlLmdldERheSxlLmdldERhdGUsZS5nZXRJU09XZWVrLGUuZ2V0TW9udGgsZS5nZXRRdWFydGVyLGUuZ2V0WWVhcixlLmdldFRpbWUsZS5zZXRTZWNvbmRzLGUuc2V0TWludXRlcyxlLnNldEhvdXJzLGUuc2V0TW9udGgsZS5zZXRRdWFydGVyLGUuc2V0WWVhcixlLm1pbixlLm1heCxlLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxlLmRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLG51bGwsZS5kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzLGUuc3RhcnRPZkRheSxlLnN0YXJ0T2ZXZWVrLGUuc3RhcnRPZk1vbnRoLGUuc3RhcnRPZlF1YXJ0ZXIsZS5zdGFydE9mWWVhcixlLmVuZE9mRGF5LG51bGwsbnVsbCxlLmRmSXNFcXVhbCxlLmRmSXNTYW1lRGF5LGUuZGZJc1NhbWVNb250aCxlLmRmSXNTYW1lWWVhcixlLmRmSXNTYW1lUXVhcnRlcixlLmlzQWZ0ZXIsZS5pc0JlZm9yZSxlLmlzV2l0aGluSW50ZXJ2YWwsZS50b0RhdGUsZS5wYXJzZSxlLnBhcnNlSVNPLGUub25DbGlja091dHNpZGUsZS5SZWFjdFBvcHBlcixlLlJlYWN0RE9NKX0odGhpcywoZnVuY3Rpb24oZSx0LHIsYSxuLG8scyxpLHAsbCxkLGMsdSxmLGgsbSx5LHYsRCx3LGssZyxiLEMsUyxfLE0sUCxFLE4sTyxZLHgsVCxJLEwsRixSLHEsQSxXLEIsaixILEssUSxWLFUsJCx6LEcsSixYLFosZWUsdGUscmUsYWUsbmUsb2Usc2UsaWUscGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGxlKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJkZWZhdWx0XCJpbiBlP2U6e2RlZmF1bHQ6ZX19dmFyIGRlPWxlKHQpLGNlPWxlKGEpLHVlPWxlKG4pLGZlPWxlKG8pLGhlPWxlKHMpLG1lPWxlKGkpLHllPWxlKHApLHZlPWxlKGwpLERlPWxlKGQpLHdlPWxlKGMpLGtlPWxlKHUpLGdlPWxlKG0pLGJlPWxlKHkpLENlPWxlKHYpLFNlPWxlKEQpLF9lPWxlKHcpLE1lPWxlKGspLFBlPWxlKGcpLEVlPWxlKGIpLE5lPWxlKEMpLE9lPWxlKFMpLFllPWxlKF8pLHhlPWxlKE0pLFRlPWxlKFApLEllPWxlKEUpLExlPWxlKE4pLEZlPWxlKE8pLFJlPWxlKFkpLHFlPWxlKHgpLEFlPWxlKFQpLFdlPWxlKEkpLEJlPWxlKEwpLGplPWxlKEYpLEhlPWxlKFIpLEtlPWxlKHEpLFFlPWxlKFcpLFZlPWxlKEIpLFVlPWxlKGopLCRlPWxlKEgpLHplPWxlKEspLEdlPWxlKFEpLEplPWxlKFYpLFhlPWxlKHopLFplPWxlKEcpLGV0PWxlKEopLHR0PWxlKFgpLHJ0PWxlKFopLGF0PWxlKGVlKSxudD1sZSh0ZSksb3Q9bGUocmUpLHN0PWxlKGFlKSxpdD1sZShuZSkscHQ9bGUob2UpLGx0PWxlKHNlKSxkdD1sZShwZSk7ZnVuY3Rpb24gY3QoZSl7cmV0dXJuKGN0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiB1dChlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gZnQoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTthLmVudW1lcmFibGU9YS5lbnVtZXJhYmxlfHwhMSxhLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBhJiYoYS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsYS5rZXksYSl9fWZ1bmN0aW9uIGh0KGUsdCxyKXtyZXR1cm4gdCYmZnQoZS5wcm90b3R5cGUsdCksciYmZnQoZSxyKSxlfWZ1bmN0aW9uIG10KGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiB5dCgpe3JldHVybih5dD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBhIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsYSkmJihlW2FdPXJbYV0pfXJldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHZ0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGE9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYoYT1hLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixhKX1yZXR1cm4gcn1mdW5jdGlvbiBEdChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj92dChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe210KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTp2dChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiB3dChlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmZ3QoZSx0KX1mdW5jdGlvbiBrdChlKXtyZXR1cm4oa3Q9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0pKGUpfWZ1bmN0aW9uIGd0KGUsdCl7cmV0dXJuKGd0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5fX3Byb3RvX189dCxlfSkoZSx0KX1mdW5jdGlvbiBidChlKXtpZih2b2lkIDA9PT1lKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZX1mdW5jdGlvbiBDdChlLHQpe3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9idChlKTp0fWZ1bmN0aW9uIFN0KGUpe3ZhciB0PWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sW10sKGZ1bmN0aW9uKCl7fSkpKSwhMH1jYXRjaChlKXtyZXR1cm4hMX19KCk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHIsYT1rdChlKTtpZih0KXt2YXIgbj1rdCh0aGlzKS5jb25zdHJ1Y3RvcjtyPVJlZmxlY3QuY29uc3RydWN0KGEsYXJndW1lbnRzLG4pfWVsc2Ugcj1hLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gQ3QodGhpcyxyKX19ZnVuY3Rpb24gX3QoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIE10KGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBNdChlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiBNdChlLHQpfShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBNdChlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLGE9bmV3IEFycmF5KHQpO3I8dDtyKyspYVtyXT1lW3JdO3JldHVybiBhfWZ1bmN0aW9uIFB0KGUsdCl7c3dpdGNoKGUpe2Nhc2VcIlBcIjpyZXR1cm4gdC5kYXRlKHt3aWR0aDpcInNob3J0XCJ9KTtjYXNlXCJQUFwiOnJldHVybiB0LmRhdGUoe3dpZHRoOlwibWVkaXVtXCJ9KTtjYXNlXCJQUFBcIjpyZXR1cm4gdC5kYXRlKHt3aWR0aDpcImxvbmdcIn0pO2Nhc2VcIlBQUFBcIjpkZWZhdWx0OnJldHVybiB0LmRhdGUoe3dpZHRoOlwiZnVsbFwifSl9fWZ1bmN0aW9uIEV0KGUsdCl7c3dpdGNoKGUpe2Nhc2VcInBcIjpyZXR1cm4gdC50aW1lKHt3aWR0aDpcInNob3J0XCJ9KTtjYXNlXCJwcFwiOnJldHVybiB0LnRpbWUoe3dpZHRoOlwibWVkaXVtXCJ9KTtjYXNlXCJwcHBcIjpyZXR1cm4gdC50aW1lKHt3aWR0aDpcImxvbmdcIn0pO2Nhc2VcInBwcHBcIjpkZWZhdWx0OnJldHVybiB0LnRpbWUoe3dpZHRoOlwiZnVsbFwifSl9fXZhciBOdD17cDpFdCxQOmZ1bmN0aW9uKGUsdCl7dmFyIHIsYT1lLm1hdGNoKC8oUCspKHArKT8vKSxuPWFbMV0sbz1hWzJdO2lmKCFvKXJldHVybiBQdChlLHQpO3N3aXRjaChuKXtjYXNlXCJQXCI6cj10LmRhdGVUaW1lKHt3aWR0aDpcInNob3J0XCJ9KTticmVhaztjYXNlXCJQUFwiOnI9dC5kYXRlVGltZSh7d2lkdGg6XCJtZWRpdW1cIn0pO2JyZWFrO2Nhc2VcIlBQUFwiOnI9dC5kYXRlVGltZSh7d2lkdGg6XCJsb25nXCJ9KTticmVhaztjYXNlXCJQUFBQXCI6ZGVmYXVsdDpyPXQuZGF0ZVRpbWUoe3dpZHRoOlwiZnVsbFwifSl9cmV0dXJuIHIucmVwbGFjZShcInt7ZGF0ZX19XCIsUHQobix0KSkucmVwbGFjZShcInt7dGltZX19XCIsRXQobyx0KSl9fSxPdD0xMixZdD0vUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztmdW5jdGlvbiB4dChlKXt2YXIgdD1lP1wic3RyaW5nXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgU3RyaW5nP3B0LmRlZmF1bHQoZSk6c3QuZGVmYXVsdChlKTpuZXcgRGF0ZTtyZXR1cm4gSXQodCk/dDpudWxsfWZ1bmN0aW9uIFR0KGUsdCxyLGEpe3ZhciBuPW51bGwsbz1KdChyKXx8SnQoR3QoKSkscz0hMDtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT8odC5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgcj1pdC5kZWZhdWx0KGUsdCxuZXcgRGF0ZSx7bG9jYWxlOm99KTthJiYocz1JdChyKSYmZT09PWhlLmRlZmF1bHQocix0LHthd2FyZU9mVW5pY29kZVRva2VuczohMH0pKSxJdChyKSYmcyYmKG49cil9KSksbik6KG49aXQuZGVmYXVsdChlLHQsbmV3IERhdGUse2xvY2FsZTpvfSksYT9zPUl0KG4pJiZlPT09aGUuZGVmYXVsdChuLHQse2F3YXJlT2ZVbmljb2RlVG9rZW5zOiEwfSk6SXQobil8fCh0PXQubWF0Y2goWXQpLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXTtyZXR1cm5cInBcIj09PXR8fFwiUFwiPT09dD9vPygwLE50W3RdKShlLG8uZm9ybWF0TG9uZyk6dDplfSkpLmpvaW4oXCJcIiksZS5sZW5ndGg+MCYmKG49aXQuZGVmYXVsdChlLHQuc2xpY2UoMCxlLmxlbmd0aCksbmV3IERhdGUpKSxJdChuKXx8KG49bmV3IERhdGUoZSkpKSxJdChuKSYmcz9uOm51bGwpfWZ1bmN0aW9uIEl0KGUpe3JldHVybiBmZS5kZWZhdWx0KGUpJiZhdC5kZWZhdWx0KGUsbmV3IERhdGUoXCIxLzEvMTAwMFwiKSl9ZnVuY3Rpb24gTHQoZSx0LHIpe2lmKFwiZW5cIj09PXIpcmV0dXJuIGhlLmRlZmF1bHQoZSx0LHthd2FyZU9mVW5pY29kZVRva2VuczohMH0pO3ZhciBhPUp0KHIpO3JldHVybiByJiYhYSYmY29uc29sZS53YXJuKCdBIGxvY2FsZSBvYmplY3Qgd2FzIG5vdCBmb3VuZCBmb3IgdGhlIHByb3ZpZGVkIHN0cmluZyBbXCInLmNvbmNhdChyLCdcIl0uJykpLCFhJiZHdCgpJiZKdChHdCgpKSYmKGE9SnQoR3QoKSkpLGhlLmRlZmF1bHQoZSx0LHtsb2NhbGU6YXx8bnVsbCxhd2FyZU9mVW5pY29kZVRva2VuczohMH0pfWZ1bmN0aW9uIEZ0KGUsdCl7dmFyIHI9dC5ob3VyLGE9dm9pZCAwPT09cj8wOnIsbj10Lm1pbnV0ZSxvPXZvaWQgMD09PW4/MDpuLHM9dC5zZWNvbmQsaT12b2lkIDA9PT1zPzA6cztyZXR1cm4gUmUuZGVmYXVsdChGZS5kZWZhdWx0KExlLmRlZmF1bHQoZSxpKSxvKSxhKX1mdW5jdGlvbiBSdChlLHQpe3ZhciByPXQmJkp0KHQpfHxHdCgpJiZKdChHdCgpKTtyZXR1cm4gT2UuZGVmYXVsdChlLHI/e2xvY2FsZTpyfTpudWxsKX1mdW5jdGlvbiBxdChlLHQpe3JldHVybiBMdChlLFwiZGRkXCIsdCl9ZnVuY3Rpb24gQXQoZSl7cmV0dXJuIFZlLmRlZmF1bHQoZSl9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgcj1KdCh0fHxHdCgpKTtyZXR1cm4gVWUuZGVmYXVsdChlLHtsb2NhbGU6cn0pfWZ1bmN0aW9uIEJ0KGUpe3JldHVybiAkZS5kZWZhdWx0KGUpfWZ1bmN0aW9uIGp0KGUpe3JldHVybiBHZS5kZWZhdWx0KGUpfWZ1bmN0aW9uIEh0KGUpe3JldHVybiB6ZS5kZWZhdWx0KGUpfWZ1bmN0aW9uIEt0KGUsdCl7cmV0dXJuIGUmJnQ/dHQuZGVmYXVsdChlLHQpOiFlJiYhdH1mdW5jdGlvbiBRdChlLHQpe3JldHVybiBlJiZ0P2V0LmRlZmF1bHQoZSx0KTohZSYmIXR9ZnVuY3Rpb24gVnQoZSx0KXtyZXR1cm4gZSYmdD9ydC5kZWZhdWx0KGUsdCk6IWUmJiF0fWZ1bmN0aW9uIFV0KGUsdCl7cmV0dXJuIGUmJnQ/WmUuZGVmYXVsdChlLHQpOiFlJiYhdH1mdW5jdGlvbiAkdChlLHQpe3JldHVybiBlJiZ0P1hlLmRlZmF1bHQoZSx0KTohZSYmIXR9ZnVuY3Rpb24genQoZSx0LHIpe3ZhciBhLG49VmUuZGVmYXVsdCh0KSxvPUplLmRlZmF1bHQocik7dHJ5e2E9b3QuZGVmYXVsdChlLHtzdGFydDpuLGVuZDpvfSl9Y2F0Y2goZSl7YT0hMX1yZXR1cm4gYX1mdW5jdGlvbiBHdCgpe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpnbG9iYWwpLl9fbG9jYWxlSWRfX31mdW5jdGlvbiBKdChlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6Z2xvYmFsO3JldHVybiB0Ll9fbG9jYWxlRGF0YV9fP3QuX19sb2NhbGVEYXRhX19bZV06bnVsbH1yZXR1cm4gZX1mdW5jdGlvbiBYdChlLHQpe3JldHVybiBMdChxZS5kZWZhdWx0KHh0KCksZSksXCJMTExMXCIsdCl9ZnVuY3Rpb24gWnQoZSx0KXtyZXR1cm4gTHQocWUuZGVmYXVsdCh4dCgpLGUpLFwiTExMXCIsdCl9ZnVuY3Rpb24gZXIoZSx0KXtyZXR1cm4gTHQoQWUuZGVmYXVsdCh4dCgpLGUpLFwiUVFRXCIsdCl9ZnVuY3Rpb24gdHIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5taW5EYXRlLGE9dC5tYXhEYXRlLG49dC5leGNsdWRlRGF0ZXMsbz10LmluY2x1ZGVEYXRlcyxzPXQuZmlsdGVyRGF0ZTtyZXR1cm4gcHIoZSx7bWluRGF0ZTpyLG1heERhdGU6YX0pfHxuJiZuLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBVdChlLHQpfSkpfHxvJiYhby5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gVXQoZSx0KX0pKXx8cyYmIXMoeHQoZSkpfHwhMX1mdW5jdGlvbiBycihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj10LmV4Y2x1ZGVEYXRlcztyZXR1cm4gciYmci5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gVXQoZSx0KX0pKXx8ITF9ZnVuY3Rpb24gYXIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5taW5EYXRlLGE9dC5tYXhEYXRlLG49dC5leGNsdWRlRGF0ZXMsbz10LmluY2x1ZGVEYXRlcyxzPXQuZmlsdGVyRGF0ZTtyZXR1cm4gcHIoZSx7bWluRGF0ZTpyLG1heERhdGU6YX0pfHxuJiZuLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBRdChlLHQpfSkpfHxvJiYhby5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gUXQoZSx0KX0pKXx8cyYmIXMoeHQoZSkpfHwhMX1mdW5jdGlvbiBucihlLHQscixhKXt2YXIgbj1UZS5kZWZhdWx0KGUpLG89WWUuZGVmYXVsdChlKSxzPVRlLmRlZmF1bHQodCksaT1ZZS5kZWZhdWx0KHQpLHA9VGUuZGVmYXVsdChhKTtyZXR1cm4gbj09PXMmJm49PT1wP288PXImJnI8PWk6bjxzP3A9PT1uJiZvPD1yfHxwPT09cyYmaT49cnx8cDxzJiZwPm46dm9pZCAwfWZ1bmN0aW9uIG9yKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxyPXQubWluRGF0ZSxhPXQubWF4RGF0ZSxuPXQuZXhjbHVkZURhdGVzLG89dC5pbmNsdWRlRGF0ZXMscz10LmZpbHRlckRhdGU7cmV0dXJuIHByKGUse21pbkRhdGU6cixtYXhEYXRlOmF9KXx8biYmbi5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gVnQoZSx0KX0pKXx8byYmIW8uc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIFZ0KGUsdCl9KSl8fHMmJiFzKHh0KGUpKXx8ITF9ZnVuY3Rpb24gc3IoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5taW5EYXRlLGE9dC5tYXhEYXRlLG49bmV3IERhdGUoZSwwLDEpO3JldHVybiBwcihuLHttaW5EYXRlOnIsbWF4RGF0ZTphfSl8fCExfWZ1bmN0aW9uIGlyKGUsdCxyLGEpe3ZhciBuPVRlLmRlZmF1bHQoZSksbz14ZS5kZWZhdWx0KGUpLHM9VGUuZGVmYXVsdCh0KSxpPXhlLmRlZmF1bHQodCkscD1UZS5kZWZhdWx0KGEpO3JldHVybiBuPT09cyYmbj09PXA/bzw9ciYmcjw9aTpuPHM/cD09PW4mJm88PXJ8fHA9PT1zJiZpPj1yfHxwPHMmJnA+bjp2b2lkIDB9ZnVuY3Rpb24gcHIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5taW5EYXRlLGE9dC5tYXhEYXRlO3JldHVybiByJiZIZS5kZWZhdWx0KGUscik8MHx8YSYmSGUuZGVmYXVsdChlLGEpPjB9ZnVuY3Rpb24gbHIoZSx0KXtyZXR1cm4gdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gUGUuZGVmYXVsdCh0KT09PVBlLmRlZmF1bHQoZSkmJk1lLmRlZmF1bHQodCk9PT1NZS5kZWZhdWx0KGUpfSkpfWZ1bmN0aW9uIGRyKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxyPXQuZXhjbHVkZVRpbWVzLGE9dC5pbmNsdWRlVGltZXMsbj10LmZpbHRlclRpbWU7cmV0dXJuIHImJmxyKGUscil8fGEmJiFscihlLGEpfHxuJiYhbihlKXx8ITF9ZnVuY3Rpb24gY3IoZSx0KXt2YXIgcj10Lm1pblRpbWUsYT10Lm1heFRpbWU7aWYoIXJ8fCFhKXRocm93IG5ldyBFcnJvcihcIkJvdGggbWluVGltZSBhbmQgbWF4VGltZSBwcm9wcyByZXF1aXJlZFwiKTt2YXIgbixvPXh0KCkscz1SZS5kZWZhdWx0KEZlLmRlZmF1bHQobyxNZS5kZWZhdWx0KGUpKSxQZS5kZWZhdWx0KGUpKSxpPVJlLmRlZmF1bHQoRmUuZGVmYXVsdChvLE1lLmRlZmF1bHQocikpLFBlLmRlZmF1bHQocikpLHA9UmUuZGVmYXVsdChGZS5kZWZhdWx0KG8sTWUuZGVmYXVsdChhKSksUGUuZGVmYXVsdChhKSk7dHJ5e249IW90LmRlZmF1bHQocyx7c3RhcnQ6aSxlbmQ6cH0pfWNhdGNoKGUpe249ITF9cmV0dXJuIG59ZnVuY3Rpb24gdXIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5taW5EYXRlLGE9dC5pbmNsdWRlRGF0ZXMsbj1DZS5kZWZhdWx0KGUsMSk7cmV0dXJuIHImJktlLmRlZmF1bHQocixuKT4wfHxhJiZhLmV2ZXJ5KChmdW5jdGlvbihlKXtyZXR1cm4gS2UuZGVmYXVsdChlLG4pPjB9KSl8fCExfWZ1bmN0aW9uIGZyKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxyPXQubWF4RGF0ZSxhPXQuaW5jbHVkZURhdGVzLG49d2UuZGVmYXVsdChlLDEpO3JldHVybiByJiZLZS5kZWZhdWx0KG4scik+MHx8YSYmYS5ldmVyeSgoZnVuY3Rpb24oZSl7cmV0dXJuIEtlLmRlZmF1bHQobixlKT4wfSkpfHwhMX1mdW5jdGlvbiBocihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj10Lm1pbkRhdGUsYT10LmluY2x1ZGVEYXRlcyxuPVNlLmRlZmF1bHQoZSwxKTtyZXR1cm4gciYmUWUuZGVmYXVsdChyLG4pPjB8fGEmJmEuZXZlcnkoKGZ1bmN0aW9uKGUpe3JldHVybiBRZS5kZWZhdWx0KGUsbik+MH0pKXx8ITF9ZnVuY3Rpb24gbXIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5tYXhEYXRlLGE9dC5pbmNsdWRlRGF0ZXMsbj1rZS5kZWZhdWx0KGUsMSk7cmV0dXJuIHImJlFlLmRlZmF1bHQobixyKT4wfHxhJiZhLmV2ZXJ5KChmdW5jdGlvbihlKXtyZXR1cm4gUWUuZGVmYXVsdChuLGUpPjB9KSl8fCExfWZ1bmN0aW9uIHlyKGUpe3ZhciB0PWUubWluRGF0ZSxyPWUuaW5jbHVkZURhdGVzO2lmKHImJnQpe3ZhciBhPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gSGUuZGVmYXVsdChlLHQpPj0wfSkpO3JldHVybiBCZS5kZWZhdWx0KGEpfXJldHVybiByP0JlLmRlZmF1bHQocik6dH1mdW5jdGlvbiB2cihlKXt2YXIgdD1lLm1heERhdGUscj1lLmluY2x1ZGVEYXRlcztpZihyJiZ0KXt2YXIgYT1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIEhlLmRlZmF1bHQoZSx0KTw9MH0pKTtyZXR1cm4gamUuZGVmYXVsdChhKX1yZXR1cm4gcj9qZS5kZWZhdWx0KHIpOnR9ZnVuY3Rpb24gRHIoKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOltdLHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1oaWdobGlnaHRlZFwiLHI9bmV3IE1hcCxhPTAsbj1lLmxlbmd0aDthPG47YSsrKXt2YXIgbz1lW2FdO2lmKHVlLmRlZmF1bHQobykpe3ZhciBzPUx0KG8sXCJNTS5kZC55eXl5XCIpLGk9ci5nZXQocyl8fFtdO2kuaW5jbHVkZXModCl8fChpLnB1c2godCksci5zZXQocyxpKSl9ZWxzZSBpZihcIm9iamVjdFwiPT09Y3Qobykpe3ZhciBwPU9iamVjdC5rZXlzKG8pLGw9cFswXSxkPW9bcFswXV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGwmJmQuY29uc3RydWN0b3I9PT1BcnJheSlmb3IodmFyIGM9MCx1PWQubGVuZ3RoO2M8dTtjKyspe3ZhciBmPUx0KGRbY10sXCJNTS5kZC55eXl5XCIpLGg9ci5nZXQoZil8fFtdO2guaW5jbHVkZXMobCl8fChoLnB1c2gobCksci5zZXQoZixoKSl9fX1yZXR1cm4gcn1mdW5jdGlvbiB3cihlLHQscixhLG4pe2Zvcih2YXIgbz1uLmxlbmd0aCxzPVtdLGk9MDtpPG87aSsrKXt2YXIgcD1tZS5kZWZhdWx0KHllLmRlZmF1bHQoZSxQZS5kZWZhdWx0KG5baV0pKSxNZS5kZWZhdWx0KG5baV0pKSxsPW1lLmRlZmF1bHQoZSwocisxKSphKTthdC5kZWZhdWx0KHAsdCkmJm50LmRlZmF1bHQocCxsKSYmcy5wdXNoKG5baV0pfXJldHVybiBzfWZ1bmN0aW9uIGtyKGUpe3JldHVybiBlPDEwP1wiMFwiLmNvbmNhdChlKTpcIlwiLmNvbmNhdChlKX1mdW5jdGlvbiBncihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06T3Qscj1NYXRoLmNlaWwoVGUuZGVmYXVsdChlKS90KSp0LGE9ci0odC0xKTtyZXR1cm57c3RhcnRQZXJpb2Q6YSxlbmRQZXJpb2Q6cn19ZnVuY3Rpb24gYnIoZSx0LHIsYSl7Zm9yKHZhciBuPVtdLG89MDtvPDIqdCsxO28rKyl7dmFyIHM9ZSt0LW8saT0hMDtyJiYoaT1UZS5kZWZhdWx0KHIpPD1zKSxhJiZpJiYoaT1UZS5kZWZhdWx0KGEpPj1zKSxpJiZuLnB1c2gocyl9cmV0dXJuIG59dmFyIENyPWZ1bmN0aW9uKGUpe3d0KHIsZSk7dmFyIHQ9U3Qocik7ZnVuY3Rpb24gcihlKXt2YXIgYTt1dCh0aGlzLHIpLG10KGJ0KGE9dC5jYWxsKHRoaXMsZSkpLFwicmVuZGVyT3B0aW9uc1wiLChmdW5jdGlvbigpe3ZhciBlPWEucHJvcHMueWVhcix0PWEuc3RhdGUueWVhcnNMaXN0Lm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6ZT09PXQ/XCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLW9wdGlvbiByZWFjdC1kYXRlcGlja2VyX195ZWFyLW9wdGlvbi0tc2VsZWN0ZWRfeWVhclwiOlwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci1vcHRpb25cIixrZXk6dCxvbkNsaWNrOmEub25DaGFuZ2UuYmluZChidChhKSx0KX0sZT09PXQ/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLW9wdGlvbi0tc2VsZWN0ZWRcIn0sXCLinJNcIik6XCJcIix0KX0pKSxyPWEucHJvcHMubWluRGF0ZT9UZS5kZWZhdWx0KGEucHJvcHMubWluRGF0ZSk6bnVsbCxuPWEucHJvcHMubWF4RGF0ZT9UZS5kZWZhdWx0KGEucHJvcHMubWF4RGF0ZSk6bnVsbDtyZXR1cm4gbiYmYS5zdGF0ZS55ZWFyc0xpc3QuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1ufSkpfHx0LnVuc2hpZnQoZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3llYXItb3B0aW9uXCIsa2V5OlwidXBjb21pbmdcIixvbkNsaWNrOmEuaW5jcmVtZW50WWVhcnN9LGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbiByZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycyByZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS15ZWFycy11cGNvbWluZ1wifSkpKSxyJiZhLnN0YXRlLnllYXJzTGlzdC5maW5kKChmdW5jdGlvbihlKXtyZXR1cm4gZT09PXJ9KSl8fHQucHVzaChkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci1vcHRpb25cIixrZXk6XCJwcmV2aW91c1wiLG9uQ2xpY2s6YS5kZWNyZW1lbnRZZWFyc30sZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uIHJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXllYXJzIHJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLXllYXJzLXByZXZpb3VzXCJ9KSkpLHR9KSksbXQoYnQoYSksXCJvbkNoYW5nZVwiLChmdW5jdGlvbihlKXthLnByb3BzLm9uQ2hhbmdlKGUpfSkpLG10KGJ0KGEpLFwiaGFuZGxlQ2xpY2tPdXRzaWRlXCIsKGZ1bmN0aW9uKCl7YS5wcm9wcy5vbkNhbmNlbCgpfSkpLG10KGJ0KGEpLFwic2hpZnRZZWFyc1wiLChmdW5jdGlvbihlKXt2YXIgdD1hLnN0YXRlLnllYXJzTGlzdC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0K2V9KSk7YS5zZXRTdGF0ZSh7eWVhcnNMaXN0OnR9KX0pKSxtdChidChhKSxcImluY3JlbWVudFllYXJzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGEuc2hpZnRZZWFycygxKX0pKSxtdChidChhKSxcImRlY3JlbWVudFllYXJzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGEuc2hpZnRZZWFycygtMSl9KSk7dmFyIG49ZS55ZWFyRHJvcGRvd25JdGVtTnVtYmVyLG89ZS5zY3JvbGxhYmxlWWVhckRyb3Bkb3duLHM9bnx8KG8/MTA6NSk7cmV0dXJuIGEuc3RhdGU9e3llYXJzTGlzdDpicihhLnByb3BzLnllYXIscyxhLnByb3BzLm1pbkRhdGUsYS5wcm9wcy5tYXhEYXRlKX0sYX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9Y2UuZGVmYXVsdCh7XCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duXCI6ITAsXCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duLS1zY3JvbGxhYmxlXCI6dGhpcy5wcm9wcy5zY3JvbGxhYmxlWWVhckRyb3Bkb3dufSk7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6ZX0sdGhpcy5yZW5kZXJPcHRpb25zKCkpfX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksU3I9bHQuZGVmYXVsdChDciksX3I9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKCl7dmFyIGU7dXQodGhpcyxyKTtmb3IodmFyIGE9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheShhKSxvPTA7bzxhO28rKyluW29dPWFyZ3VtZW50c1tvXTtyZXR1cm4gbXQoYnQoZT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KG4pKSksXCJzdGF0ZVwiLHtkcm9wZG93blZpc2libGU6ITF9KSxtdChidChlKSxcInJlbmRlclNlbGVjdE9wdGlvbnNcIiwoZnVuY3Rpb24oKXtmb3IodmFyIHQ9ZS5wcm9wcy5taW5EYXRlP1RlLmRlZmF1bHQoZS5wcm9wcy5taW5EYXRlKToxOTAwLHI9ZS5wcm9wcy5tYXhEYXRlP1RlLmRlZmF1bHQoZS5wcm9wcy5tYXhEYXRlKToyMTAwLGE9W10sbj10O248PXI7bisrKWEucHVzaChkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIix7a2V5Om4sdmFsdWU6bn0sbikpO3JldHVybiBhfSkpLG10KGJ0KGUpLFwib25TZWxlY3RDaGFuZ2VcIiwoZnVuY3Rpb24odCl7ZS5vbkNoYW5nZSh0LnRhcmdldC52YWx1ZSl9KSksbXQoYnQoZSksXCJyZW5kZXJTZWxlY3RNb2RlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLHt2YWx1ZTplLnByb3BzLnllYXIsY2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci1zZWxlY3RcIixvbkNoYW5nZTplLm9uU2VsZWN0Q2hhbmdlfSxlLnJlbmRlclNlbGVjdE9wdGlvbnMoKSl9KSksbXQoYnQoZSksXCJyZW5kZXJSZWFkVmlld1wiLChmdW5jdGlvbih0KXtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2tleTpcInJlYWRcIixzdHlsZTp7dmlzaWJpbGl0eTp0P1widmlzaWJsZVwiOlwiaGlkZGVuXCJ9LGNsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3llYXItcmVhZC12aWV3XCIsb25DbGljazpmdW5jdGlvbih0KXtyZXR1cm4gZS50b2dnbGVEcm9wZG93bih0KX19LGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXctLWRvd24tYXJyb3dcIn0pLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci1yZWFkLXZpZXctLXNlbGVjdGVkLXllYXJcIn0sZS5wcm9wcy55ZWFyKSl9KSksbXQoYnQoZSksXCJyZW5kZXJEcm9wZG93blwiLChmdW5jdGlvbigpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3Ise2tleTpcImRyb3Bkb3duXCIseWVhcjplLnByb3BzLnllYXIsb25DaGFuZ2U6ZS5vbkNoYW5nZSxvbkNhbmNlbDplLnRvZ2dsZURyb3Bkb3duLG1pbkRhdGU6ZS5wcm9wcy5taW5EYXRlLG1heERhdGU6ZS5wcm9wcy5tYXhEYXRlLHNjcm9sbGFibGVZZWFyRHJvcGRvd246ZS5wcm9wcy5zY3JvbGxhYmxlWWVhckRyb3Bkb3duLHllYXJEcm9wZG93bkl0ZW1OdW1iZXI6ZS5wcm9wcy55ZWFyRHJvcGRvd25JdGVtTnVtYmVyfSl9KSksbXQoYnQoZSksXCJyZW5kZXJTY3JvbGxNb2RlXCIsKGZ1bmN0aW9uKCl7dmFyIHQ9ZS5zdGF0ZS5kcm9wZG93blZpc2libGUscj1bZS5yZW5kZXJSZWFkVmlldyghdCldO3JldHVybiB0JiZyLnVuc2hpZnQoZS5yZW5kZXJEcm9wZG93bigpKSxyfSkpLG10KGJ0KGUpLFwib25DaGFuZ2VcIiwoZnVuY3Rpb24odCl7ZS50b2dnbGVEcm9wZG93bigpLHQhPT1lLnByb3BzLnllYXImJmUucHJvcHMub25DaGFuZ2UodCl9KSksbXQoYnQoZSksXCJ0b2dnbGVEcm9wZG93blwiLChmdW5jdGlvbih0KXtlLnNldFN0YXRlKHtkcm9wZG93blZpc2libGU6IWUuc3RhdGUuZHJvcGRvd25WaXNpYmxlfSwoZnVuY3Rpb24oKXtlLnByb3BzLmFkanVzdERhdGVPbkNoYW5nZSYmZS5oYW5kbGVZZWFyQ2hhbmdlKGUucHJvcHMuZGF0ZSx0KX0pKX0pKSxtdChidChlKSxcImhhbmRsZVllYXJDaGFuZ2VcIiwoZnVuY3Rpb24odCxyKXtlLm9uU2VsZWN0KHQsciksZS5zZXRPcGVuKCl9KSksbXQoYnQoZSksXCJvblNlbGVjdFwiLChmdW5jdGlvbih0LHIpe2UucHJvcHMub25TZWxlY3QmJmUucHJvcHMub25TZWxlY3QodCxyKX0pKSxtdChidChlKSxcInNldE9wZW5cIiwoZnVuY3Rpb24oKXtlLnByb3BzLnNldE9wZW4mJmUucHJvcHMuc2V0T3BlbighMCl9KSksZX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU7c3dpdGNoKHRoaXMucHJvcHMuZHJvcGRvd25Nb2RlKXtjYXNlXCJzY3JvbGxcIjplPXRoaXMucmVuZGVyU2Nyb2xsTW9kZSgpO2JyZWFrO2Nhc2VcInNlbGVjdFwiOmU9dGhpcy5yZW5kZXJTZWxlY3RNb2RlKCl9cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duLWNvbnRhaW5lciByZWFjdC1kYXRlcGlja2VyX195ZWFyLWRyb3Bkb3duLWNvbnRhaW5lci0tXCIuY29uY2F0KHRoaXMucHJvcHMuZHJvcGRvd25Nb2RlKX0sZSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxNcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTt1dCh0aGlzLHIpO2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGEpLG89MDtvPGE7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBtdChidChlPXQuY2FsbC5hcHBseSh0LFt0aGlzXS5jb25jYXQobikpKSxcInJlbmRlck9wdGlvbnNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZS5wcm9wcy5tb250aE5hbWVzLm1hcCgoZnVuY3Rpb24odCxyKXtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTplLnByb3BzLm1vbnRoPT09cj9cInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLW9wdGlvbiByZWFjdC1kYXRlcGlja2VyX19tb250aC1vcHRpb24tLXNlbGVjdGVkX21vbnRoXCI6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC1vcHRpb25cIixrZXk6dCxvbkNsaWNrOmUub25DaGFuZ2UuYmluZChidChlKSxyKX0sZS5wcm9wcy5tb250aD09PXI/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC1vcHRpb24tLXNlbGVjdGVkXCJ9LFwi4pyTXCIpOlwiXCIsdCl9KSl9KSksbXQoYnQoZSksXCJvbkNoYW5nZVwiLChmdW5jdGlvbih0KXtyZXR1cm4gZS5wcm9wcy5vbkNoYW5nZSh0KX0pKSxtdChidChlKSxcImhhbmRsZUNsaWNrT3V0c2lkZVwiLChmdW5jdGlvbigpe3JldHVybiBlLnByb3BzLm9uQ2FuY2VsKCl9KSksZX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC1kcm9wZG93blwifSx0aGlzLnJlbmRlck9wdGlvbnMoKSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxQcj1sdC5kZWZhdWx0KE1yKSxFcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTt1dCh0aGlzLHIpO2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGEpLG89MDtvPGE7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBtdChidChlPXQuY2FsbC5hcHBseSh0LFt0aGlzXS5jb25jYXQobikpKSxcInN0YXRlXCIse2Ryb3Bkb3duVmlzaWJsZTohMX0pLG10KGJ0KGUpLFwicmVuZGVyU2VsZWN0T3B0aW9uc1wiLChmdW5jdGlvbihlKXtyZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLHtrZXk6dCx2YWx1ZTp0fSxlKX0pKX0pKSxtdChidChlKSxcInJlbmRlclNlbGVjdE1vZGVcIiwoZnVuY3Rpb24odCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLHt2YWx1ZTplLnByb3BzLm1vbnRoLGNsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXNlbGVjdFwiLG9uQ2hhbmdlOmZ1bmN0aW9uKHQpe3JldHVybiBlLm9uQ2hhbmdlKHQudGFyZ2V0LnZhbHVlKX19LGUucmVuZGVyU2VsZWN0T3B0aW9ucyh0KSl9KSksbXQoYnQoZSksXCJyZW5kZXJSZWFkVmlld1wiLChmdW5jdGlvbih0LHIpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7a2V5OlwicmVhZFwiLHN0eWxlOnt2aXNpYmlsaXR5OnQ/XCJ2aXNpYmxlXCI6XCJoaWRkZW5cIn0sY2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtcmVhZC12aWV3XCIsb25DbGljazplLnRvZ2dsZURyb3Bkb3dufSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXJlYWQtdmlldy0tZG93bi1hcnJvd1wifSksZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC1yZWFkLXZpZXctLXNlbGVjdGVkLW1vbnRoXCJ9LHJbZS5wcm9wcy5tb250aF0pKX0pKSxtdChidChlKSxcInJlbmRlckRyb3Bkb3duXCIsKGZ1bmN0aW9uKHQpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHIse2tleTpcImRyb3Bkb3duXCIsbW9udGg6ZS5wcm9wcy5tb250aCxtb250aE5hbWVzOnQsb25DaGFuZ2U6ZS5vbkNoYW5nZSxvbkNhbmNlbDplLnRvZ2dsZURyb3Bkb3dufSl9KSksbXQoYnQoZSksXCJyZW5kZXJTY3JvbGxNb2RlXCIsKGZ1bmN0aW9uKHQpe3ZhciByPWUuc3RhdGUuZHJvcGRvd25WaXNpYmxlLGE9W2UucmVuZGVyUmVhZFZpZXcoIXIsdCldO3JldHVybiByJiZhLnVuc2hpZnQoZS5yZW5kZXJEcm9wZG93bih0KSksYX0pKSxtdChidChlKSxcIm9uQ2hhbmdlXCIsKGZ1bmN0aW9uKHQpe2UudG9nZ2xlRHJvcGRvd24oKSx0IT09ZS5wcm9wcy5tb250aCYmZS5wcm9wcy5vbkNoYW5nZSh0KX0pKSxtdChidChlKSxcInRvZ2dsZURyb3Bkb3duXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUuc2V0U3RhdGUoe2Ryb3Bkb3duVmlzaWJsZTohZS5zdGF0ZS5kcm9wZG93blZpc2libGV9KX0pKSxlfXJldHVybiBodChyLFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMscj1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0ubWFwKHRoaXMucHJvcHMudXNlU2hvcnRNb250aEluRHJvcGRvd24/ZnVuY3Rpb24oZSl7cmV0dXJuIFp0KGUsdC5wcm9wcy5sb2NhbGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gWHQoZSx0LnByb3BzLmxvY2FsZSl9KTtzd2l0Y2godGhpcy5wcm9wcy5kcm9wZG93bk1vZGUpe2Nhc2VcInNjcm9sbFwiOmU9dGhpcy5yZW5kZXJTY3JvbGxNb2RlKHIpO2JyZWFrO2Nhc2VcInNlbGVjdFwiOmU9dGhpcy5yZW5kZXJTZWxlY3RNb2RlKHIpfXJldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtZHJvcGRvd24tY29udGFpbmVyIHJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLWRyb3Bkb3duLWNvbnRhaW5lci0tXCIuY29uY2F0KHRoaXMucHJvcHMuZHJvcGRvd25Nb2RlKX0sZSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KTtmdW5jdGlvbiBOcihlLHQpe2Zvcih2YXIgcj1bXSxhPUJ0KGUpLG49QnQodCk7IWF0LmRlZmF1bHQoYSxuKTspci5wdXNoKHh0KGEpKSxhPXdlLmRlZmF1bHQoYSwxKTtyZXR1cm4gcn12YXIgT3I9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKGUpe3ZhciBhO3JldHVybiB1dCh0aGlzLHIpLG10KGJ0KGE9dC5jYWxsKHRoaXMsZSkpLFwicmVuZGVyT3B0aW9uc1wiLChmdW5jdGlvbigpe3JldHVybiBhLnN0YXRlLm1vbnRoWWVhcnNMaXN0Lm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9SWUuZGVmYXVsdChlKSxyPUt0KGEucHJvcHMuZGF0ZSxlKSYmUXQoYS5wcm9wcy5kYXRlLGUpO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnI/XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLW9wdGlvbiAtLXNlbGVjdGVkX21vbnRoLXllYXJcIjpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItb3B0aW9uXCIsa2V5OnQsb25DbGljazphLm9uQ2hhbmdlLmJpbmQoYnQoYSksdCl9LHI/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLW9wdGlvbi0tc2VsZWN0ZWRcIn0sXCLinJNcIik6XCJcIixMdChlLGEucHJvcHMuZGF0ZUZvcm1hdCxhLnByb3BzLmxvY2FsZSkpfSkpfSkpLG10KGJ0KGEpLFwib25DaGFuZ2VcIiwoZnVuY3Rpb24oZSl7cmV0dXJuIGEucHJvcHMub25DaGFuZ2UoZSl9KSksbXQoYnQoYSksXCJoYW5kbGVDbGlja091dHNpZGVcIiwoZnVuY3Rpb24oKXthLnByb3BzLm9uQ2FuY2VsKCl9KSksYS5zdGF0ZT17bW9udGhZZWFyc0xpc3Q6TnIoYS5wcm9wcy5taW5EYXRlLGEucHJvcHMubWF4RGF0ZSl9LGF9cmV0dXJuIGh0KHIsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWNlLmRlZmF1bHQoe1wicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1kcm9wZG93blwiOiEwLFwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgteWVhci1kcm9wZG93bi0tc2Nyb2xsYWJsZVwiOnRoaXMucHJvcHMuc2Nyb2xsYWJsZU1vbnRoWWVhckRyb3Bkb3dufSk7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6ZX0sdGhpcy5yZW5kZXJPcHRpb25zKCkpfX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksWXI9bHQuZGVmYXVsdChPcikseHI9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKCl7dmFyIGU7dXQodGhpcyxyKTtmb3IodmFyIGE9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheShhKSxvPTA7bzxhO28rKyluW29dPWFyZ3VtZW50c1tvXTtyZXR1cm4gbXQoYnQoZT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KG4pKSksXCJzdGF0ZVwiLHtkcm9wZG93blZpc2libGU6ITF9KSxtdChidChlKSxcInJlbmRlclNlbGVjdE9wdGlvbnNcIiwoZnVuY3Rpb24oKXtmb3IodmFyIHQ9QnQoZS5wcm9wcy5taW5EYXRlKSxyPUJ0KGUucHJvcHMubWF4RGF0ZSksYT1bXTshYXQuZGVmYXVsdCh0LHIpOyl7dmFyIG49SWUuZGVmYXVsdCh0KTthLnB1c2goZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIse2tleTpuLHZhbHVlOm59LEx0KHQsZS5wcm9wcy5kYXRlRm9ybWF0LGUucHJvcHMubG9jYWxlKSkpLHQ9d2UuZGVmYXVsdCh0LDEpfXJldHVybiBhfSkpLG10KGJ0KGUpLFwib25TZWxlY3RDaGFuZ2VcIiwoZnVuY3Rpb24odCl7ZS5vbkNoYW5nZSh0LnRhcmdldC52YWx1ZSl9KSksbXQoYnQoZSksXCJyZW5kZXJTZWxlY3RNb2RlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLHt2YWx1ZTpJZS5kZWZhdWx0KEJ0KGUucHJvcHMuZGF0ZSkpLGNsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItc2VsZWN0XCIsb25DaGFuZ2U6ZS5vblNlbGVjdENoYW5nZX0sZS5yZW5kZXJTZWxlY3RPcHRpb25zKCkpfSkpLG10KGJ0KGUpLFwicmVuZGVyUmVhZFZpZXdcIiwoZnVuY3Rpb24odCl7dmFyIHI9THQoZS5wcm9wcy5kYXRlLGUucHJvcHMuZGF0ZUZvcm1hdCxlLnByb3BzLmxvY2FsZSk7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6XCJyZWFkXCIsc3R5bGU6e3Zpc2liaWxpdHk6dD9cInZpc2libGVcIjpcImhpZGRlblwifSxjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLXJlYWQtdmlld1wiLG9uQ2xpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIGUudG9nZ2xlRHJvcGRvd24odCl9fSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3LS1kb3duLWFycm93XCJ9KSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItcmVhZC12aWV3LS1zZWxlY3RlZC1tb250aC15ZWFyXCJ9LHIpKX0pKSxtdChidChlKSxcInJlbmRlckRyb3Bkb3duXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChZcix7a2V5OlwiZHJvcGRvd25cIixkYXRlOmUucHJvcHMuZGF0ZSxkYXRlRm9ybWF0OmUucHJvcHMuZGF0ZUZvcm1hdCxvbkNoYW5nZTplLm9uQ2hhbmdlLG9uQ2FuY2VsOmUudG9nZ2xlRHJvcGRvd24sbWluRGF0ZTplLnByb3BzLm1pbkRhdGUsbWF4RGF0ZTplLnByb3BzLm1heERhdGUsc2Nyb2xsYWJsZU1vbnRoWWVhckRyb3Bkb3duOmUucHJvcHMuc2Nyb2xsYWJsZU1vbnRoWWVhckRyb3Bkb3duLGxvY2FsZTplLnByb3BzLmxvY2FsZX0pfSkpLG10KGJ0KGUpLFwicmVuZGVyU2Nyb2xsTW9kZVwiLChmdW5jdGlvbigpe3ZhciB0PWUuc3RhdGUuZHJvcGRvd25WaXNpYmxlLHI9W2UucmVuZGVyUmVhZFZpZXcoIXQpXTtyZXR1cm4gdCYmci51bnNoaWZ0KGUucmVuZGVyRHJvcGRvd24oKSkscn0pKSxtdChidChlKSxcIm9uQ2hhbmdlXCIsKGZ1bmN0aW9uKHQpe2UudG9nZ2xlRHJvcGRvd24oKTt2YXIgcj14dChwYXJzZUludCh0KSk7S3QoZS5wcm9wcy5kYXRlLHIpJiZRdChlLnByb3BzLmRhdGUscil8fGUucHJvcHMub25DaGFuZ2Uocil9KSksbXQoYnQoZSksXCJ0b2dnbGVEcm9wZG93blwiLChmdW5jdGlvbigpe3JldHVybiBlLnNldFN0YXRlKHtkcm9wZG93blZpc2libGU6IWUuc3RhdGUuZHJvcGRvd25WaXNpYmxlfSl9KSksZX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU7c3dpdGNoKHRoaXMucHJvcHMuZHJvcGRvd25Nb2RlKXtjYXNlXCJzY3JvbGxcIjplPXRoaXMucmVuZGVyU2Nyb2xsTW9kZSgpO2JyZWFrO2Nhc2VcInNlbGVjdFwiOmU9dGhpcy5yZW5kZXJTZWxlY3RNb2RlKCl9cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLWRyb3Bkb3duLWNvbnRhaW5lciByZWFjdC1kYXRlcGlja2VyX19tb250aC15ZWFyLWRyb3Bkb3duLWNvbnRhaW5lci0tXCIuY29uY2F0KHRoaXMucHJvcHMuZHJvcGRvd25Nb2RlKX0sZSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxUcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTt1dCh0aGlzLHIpO2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGEpLG89MDtvPGE7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBtdChidChlPXQuY2FsbC5hcHBseSh0LFt0aGlzXS5jb25jYXQobikpKSxcImRheUVsXCIsZGUuZGVmYXVsdC5jcmVhdGVSZWYoKSksbXQoYnQoZSksXCJoYW5kbGVDbGlja1wiLChmdW5jdGlvbih0KXshZS5pc0Rpc2FibGVkKCkmJmUucHJvcHMub25DbGljayYmZS5wcm9wcy5vbkNsaWNrKHQpfSkpLG10KGJ0KGUpLFwiaGFuZGxlTW91c2VFbnRlclwiLChmdW5jdGlvbih0KXshZS5pc0Rpc2FibGVkKCkmJmUucHJvcHMub25Nb3VzZUVudGVyJiZlLnByb3BzLm9uTW91c2VFbnRlcih0KX0pKSxtdChidChlKSxcImhhbmRsZU9uS2V5RG93blwiLChmdW5jdGlvbih0KXtcIiBcIj09PXQua2V5JiYodC5wcmV2ZW50RGVmYXVsdCgpLHQua2V5PVwiRW50ZXJcIiksZS5wcm9wcy5oYW5kbGVPbktleURvd24odCl9KSksbXQoYnQoZSksXCJpc1NhbWVEYXlcIiwoZnVuY3Rpb24odCl7cmV0dXJuIFV0KGUucHJvcHMuZGF5LHQpfSkpLG10KGJ0KGUpLFwiaXNLZXlib2FyZFNlbGVjdGVkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIWUucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24mJiFlLmlzU2FtZURheShlLnByb3BzLnNlbGVjdGVkKSYmZS5pc1NhbWVEYXkoZS5wcm9wcy5wcmVTZWxlY3Rpb24pfSkpLG10KGJ0KGUpLFwiaXNEaXNhYmxlZFwiLChmdW5jdGlvbigpe3JldHVybiB0cihlLnByb3BzLmRheSxlLnByb3BzKX0pKSxtdChidChlKSxcImlzRXhjbHVkZWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcnIoZS5wcm9wcy5kYXksZS5wcm9wcyl9KSksbXQoYnQoZSksXCJnZXRIaWdoTGlnaHRlZENsYXNzXCIsKGZ1bmN0aW9uKHQpe3ZhciByPWUucHJvcHMsYT1yLmRheSxuPXIuaGlnaGxpZ2h0RGF0ZXM7aWYoIW4pcmV0dXJuITE7dmFyIG89THQoYSxcIk1NLmRkLnl5eXlcIik7cmV0dXJuIG4uZ2V0KG8pfSkpLG10KGJ0KGUpLFwiaXNJblJhbmdlXCIsKGZ1bmN0aW9uKCl7dmFyIHQ9ZS5wcm9wcyxyPXQuZGF5LGE9dC5zdGFydERhdGUsbj10LmVuZERhdGU7cmV0dXJuISghYXx8IW4pJiZ6dChyLGEsbil9KSksbXQoYnQoZSksXCJpc0luU2VsZWN0aW5nUmFuZ2VcIiwoZnVuY3Rpb24oKXt2YXIgdD1lLnByb3BzLHI9dC5kYXksYT10LnNlbGVjdHNTdGFydCxuPXQuc2VsZWN0c0VuZCxvPXQuc2VsZWN0c1JhbmdlLHM9dC5zZWxlY3RpbmdEYXRlLGk9dC5zdGFydERhdGUscD10LmVuZERhdGU7cmV0dXJuISghKGF8fG58fG8pfHwhc3x8ZS5pc0Rpc2FibGVkKCkpJiYoYSYmcCYmKG50LmRlZmF1bHQocyxwKXx8JHQocyxwKSk/enQocixzLHApOihuJiZpJiYoYXQuZGVmYXVsdChzLGkpfHwkdChzLGkpKXx8ISghb3x8IWl8fHB8fCFhdC5kZWZhdWx0KHMsaSkmJiEkdChzLGkpKSkmJnp0KHIsaSxzKSl9KSksbXQoYnQoZSksXCJpc1NlbGVjdGluZ1JhbmdlU3RhcnRcIiwoZnVuY3Rpb24oKXtpZighZS5pc0luU2VsZWN0aW5nUmFuZ2UoKSlyZXR1cm4hMTt2YXIgdD1lLnByb3BzLHI9dC5kYXksYT10LnNlbGVjdGluZ0RhdGUsbj10LnN0YXJ0RGF0ZTtyZXR1cm4gVXQocix0LnNlbGVjdHNTdGFydD9hOm4pfSkpLG10KGJ0KGUpLFwiaXNTZWxlY3RpbmdSYW5nZUVuZFwiLChmdW5jdGlvbigpe2lmKCFlLmlzSW5TZWxlY3RpbmdSYW5nZSgpKXJldHVybiExO3ZhciB0PWUucHJvcHMscj10LmRheSxhPXQuc2VsZWN0aW5nRGF0ZSxuPXQuZW5kRGF0ZTtyZXR1cm4gVXQocix0LnNlbGVjdHNFbmQ/YTpuKX0pKSxtdChidChlKSxcImlzUmFuZ2VTdGFydFwiLChmdW5jdGlvbigpe3ZhciB0PWUucHJvcHMscj10LmRheSxhPXQuc3RhcnREYXRlLG49dC5lbmREYXRlO3JldHVybiEoIWF8fCFuKSYmVXQoYSxyKX0pKSxtdChidChlKSxcImlzUmFuZ2VFbmRcIiwoZnVuY3Rpb24oKXt2YXIgdD1lLnByb3BzLHI9dC5kYXksYT10LnN0YXJ0RGF0ZSxuPXQuZW5kRGF0ZTtyZXR1cm4hKCFhfHwhbikmJlV0KG4scil9KSksbXQoYnQoZSksXCJpc1dlZWtlbmRcIiwoZnVuY3Rpb24oKXt2YXIgdD1FZS5kZWZhdWx0KGUucHJvcHMuZGF5KTtyZXR1cm4gMD09PXR8fDY9PT10fSkpLG10KGJ0KGUpLFwiaXNPdXRzaWRlTW9udGhcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09ZS5wcm9wcy5tb250aCYmZS5wcm9wcy5tb250aCE9PVllLmRlZmF1bHQoZS5wcm9wcy5kYXkpfSkpLG10KGJ0KGUpLFwiZ2V0Q2xhc3NOYW1lc1wiLChmdW5jdGlvbih0KXt2YXIgcj1lLnByb3BzLmRheUNsYXNzTmFtZT9lLnByb3BzLmRheUNsYXNzTmFtZSh0KTp2b2lkIDA7cmV0dXJuIGNlLmRlZmF1bHQoXCJyZWFjdC1kYXRlcGlja2VyX19kYXlcIixyLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1cIitxdChlLnByb3BzLmRheSkse1wicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1kaXNhYmxlZFwiOmUuaXNEaXNhYmxlZCgpLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1leGNsdWRlZFwiOmUuaXNFeGNsdWRlZCgpLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1zZWxlY3RlZFwiOmUuaXNTYW1lRGF5KGUucHJvcHMuc2VsZWN0ZWQpLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1rZXlib2FyZC1zZWxlY3RlZFwiOmUuaXNLZXlib2FyZFNlbGVjdGVkKCksXCJyZWFjdC1kYXRlcGlja2VyX19kYXktLXJhbmdlLXN0YXJ0XCI6ZS5pc1JhbmdlU3RhcnQoKSxcInJlYWN0LWRhdGVwaWNrZXJfX2RheS0tcmFuZ2UtZW5kXCI6ZS5pc1JhbmdlRW5kKCksXCJyZWFjdC1kYXRlcGlja2VyX19kYXktLWluLXJhbmdlXCI6ZS5pc0luUmFuZ2UoKSxcInJlYWN0LWRhdGVwaWNrZXJfX2RheS0taW4tc2VsZWN0aW5nLXJhbmdlXCI6ZS5pc0luU2VsZWN0aW5nUmFuZ2UoKSxcInJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0aW5nLXJhbmdlLXN0YXJ0XCI6ZS5pc1NlbGVjdGluZ1JhbmdlU3RhcnQoKSxcInJlYWN0LWRhdGVwaWNrZXJfX2RheS0tc2VsZWN0aW5nLXJhbmdlLWVuZFwiOmUuaXNTZWxlY3RpbmdSYW5nZUVuZCgpLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS10b2RheVwiOmUuaXNTYW1lRGF5KHh0KCkpLFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS13ZWVrZW5kXCI6ZS5pc1dlZWtlbmQoKSxcInJlYWN0LWRhdGVwaWNrZXJfX2RheS0tb3V0c2lkZS1tb250aFwiOmUuaXNPdXRzaWRlTW9udGgoKX0sZS5nZXRIaWdoTGlnaHRlZENsYXNzKFwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1oaWdobGlnaHRlZFwiKSl9KSksbXQoYnQoZSksXCJnZXRBcmlhTGFiZWxcIiwoZnVuY3Rpb24oKXt2YXIgdD1lLnByb3BzLHI9dC5kYXksYT10LmFyaWFMYWJlbFByZWZpeFdoZW5FbmFibGVkLG49dm9pZCAwPT09YT9cIkNob29zZVwiOmEsbz10LmFyaWFMYWJlbFByZWZpeFdoZW5EaXNhYmxlZCxzPXZvaWQgMD09PW8/XCJOb3QgYXZhaWxhYmxlXCI6byxpPWUuaXNEaXNhYmxlZCgpfHxlLmlzRXhjbHVkZWQoKT9zOm47cmV0dXJuXCJcIi5jb25jYXQoaSxcIiBcIikuY29uY2F0KEx0KHIsXCJQUFBQXCIpKX0pKSxtdChidChlKSxcImdldFRhYkluZGV4XCIsKGZ1bmN0aW9uKHQscil7dmFyIGE9dHx8ZS5wcm9wcy5zZWxlY3RlZCxuPXJ8fGUucHJvcHMucHJlU2VsZWN0aW9uO3JldHVybiBlLmlzS2V5Ym9hcmRTZWxlY3RlZCgpfHxlLmlzU2FtZURheShhKSYmVXQobixhKT8wOi0xfSkpLG10KGJ0KGUpLFwiaGFuZGxlRm9jdXNEYXlcIiwoZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30scj0hMTswPT09ZS5nZXRUYWJJbmRleCgpJiYhdC5pc0lucHV0Rm9jdXNlZCYmZS5pc1NhbWVEYXkoZS5wcm9wcy5wcmVTZWxlY3Rpb24pJiYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudCE9PWRvY3VtZW50LmJvZHl8fChyPSEwKSxlLnByb3BzLmlubGluZSYmIWUucHJvcHMuc2hvdWxkRm9jdXNEYXlJbmxpbmUmJihyPSExKSxlLnByb3BzLmNvbnRhaW5lclJlZiYmZS5wcm9wcy5jb250YWluZXJSZWYuY3VycmVudCYmZS5wcm9wcy5jb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSYmZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFjdC1kYXRlcGlja2VyX19kYXlcIikmJihyPSEwKSksciYmZS5kYXlFbC5jdXJyZW50LmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSl9KSksbXQoYnQoZSksXCJyZW5kZXJEYXlDb250ZW50c1wiLChmdW5jdGlvbigpe2lmKGUuaXNPdXRzaWRlTW9udGgoKSl7aWYoZS5wcm9wcy5tb250aFNob3dzRHVwbGljYXRlRGF5c0VuZCYmTmUuZGVmYXVsdChlLnByb3BzLmRheSk8MTApcmV0dXJuIG51bGw7aWYoZS5wcm9wcy5tb250aFNob3dzRHVwbGljYXRlRGF5c1N0YXJ0JiZOZS5kZWZhdWx0KGUucHJvcHMuZGF5KT4yMClyZXR1cm4gbnVsbH1yZXR1cm4gZS5wcm9wcy5yZW5kZXJEYXlDb250ZW50cz9lLnByb3BzLnJlbmRlckRheUNvbnRlbnRzKE5lLmRlZmF1bHQoZS5wcm9wcy5kYXkpLGUucHJvcHMuZGF5KTpOZS5kZWZhdWx0KGUucHJvcHMuZGF5KX0pKSxtdChidChlKSxcInJlbmRlclwiLChmdW5jdGlvbigpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOmUuZGF5RWwsY2xhc3NOYW1lOmUuZ2V0Q2xhc3NOYW1lcyhlLnByb3BzLmRheSksb25LZXlEb3duOmUuaGFuZGxlT25LZXlEb3duLG9uQ2xpY2s6ZS5oYW5kbGVDbGljayxvbk1vdXNlRW50ZXI6ZS5oYW5kbGVNb3VzZUVudGVyLHRhYkluZGV4OmUuZ2V0VGFiSW5kZXgoKSxcImFyaWEtbGFiZWxcIjplLmdldEFyaWFMYWJlbCgpLHJvbGU6XCJidXR0b25cIixcImFyaWEtZGlzYWJsZWRcIjplLmlzRGlzYWJsZWQoKX0sZS5yZW5kZXJEYXlDb250ZW50cygpKX0pKSxlfXJldHVybiBodChyLFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaGFuZGxlRm9jdXNEYXkoKX19LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUZvY3VzRGF5KGUpfX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksSXI9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKCl7dmFyIGU7dXQodGhpcyxyKTtmb3IodmFyIGE9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheShhKSxvPTA7bzxhO28rKyluW29dPWFyZ3VtZW50c1tvXTtyZXR1cm4gbXQoYnQoZT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KG4pKSksXCJoYW5kbGVDbGlja1wiLChmdW5jdGlvbih0KXtlLnByb3BzLm9uQ2xpY2smJmUucHJvcHMub25DbGljayh0KX0pKSxlfXJldHVybiBodChyLFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53ZWVrTnVtYmVyLHI9ZS5hcmlhTGFiZWxQcmVmaXgsYT12b2lkIDA9PT1yP1wid2VlayBcIjpyLG49e1wicmVhY3QtZGF0ZXBpY2tlcl9fd2Vlay1udW1iZXJcIjohMCxcInJlYWN0LWRhdGVwaWNrZXJfX3dlZWstbnVtYmVyLS1jbGlja2FibGVcIjohIWUub25DbGlja307cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6Y2UuZGVmYXVsdChuKSxcImFyaWEtbGFiZWxcIjpcIlwiLmNvbmNhdChhLFwiIFwiKS5jb25jYXQodGhpcy5wcm9wcy53ZWVrTnVtYmVyKSxvbkNsaWNrOnRoaXMuaGFuZGxlQ2xpY2t9LHQpfX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksTHI9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKCl7dmFyIGU7dXQodGhpcyxyKTtmb3IodmFyIGE9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheShhKSxvPTA7bzxhO28rKyluW29dPWFyZ3VtZW50c1tvXTtyZXR1cm4gbXQoYnQoZT10LmNhbGwuYXBwbHkodCxbdGhpc10uY29uY2F0KG4pKSksXCJoYW5kbGVEYXlDbGlja1wiLChmdW5jdGlvbih0LHIpe2UucHJvcHMub25EYXlDbGljayYmZS5wcm9wcy5vbkRheUNsaWNrKHQscil9KSksbXQoYnQoZSksXCJoYW5kbGVEYXlNb3VzZUVudGVyXCIsKGZ1bmN0aW9uKHQpe2UucHJvcHMub25EYXlNb3VzZUVudGVyJiZlLnByb3BzLm9uRGF5TW91c2VFbnRlcih0KX0pKSxtdChidChlKSxcImhhbmRsZVdlZWtDbGlja1wiLChmdW5jdGlvbih0LHIsYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5wcm9wcy5vbldlZWtTZWxlY3QmJmUucHJvcHMub25XZWVrU2VsZWN0KHQscixhKSxlLnByb3BzLnNob3VsZENsb3NlT25TZWxlY3QmJmUucHJvcHMuc2V0T3BlbighMSl9KSksbXQoYnQoZSksXCJmb3JtYXRXZWVrTnVtYmVyXCIsKGZ1bmN0aW9uKHQpe3JldHVybiBlLnByb3BzLmZvcm1hdFdlZWtOdW1iZXI/ZS5wcm9wcy5mb3JtYXRXZWVrTnVtYmVyKHQpOlJ0KHQpfSkpLG10KGJ0KGUpLFwicmVuZGVyRGF5c1wiLChmdW5jdGlvbigpe3ZhciB0PVd0KGUucHJvcHMuZGF5LGUucHJvcHMubG9jYWxlKSxyPVtdLGE9ZS5mb3JtYXRXZWVrTnVtYmVyKHQpO2lmKGUucHJvcHMuc2hvd1dlZWtOdW1iZXIpe3ZhciBuPWUucHJvcHMub25XZWVrU2VsZWN0P2UuaGFuZGxlV2Vla0NsaWNrLmJpbmQoYnQoZSksdCxhKTp2b2lkIDA7ci5wdXNoKGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJcix7a2V5OlwiV1wiLHdlZWtOdW1iZXI6YSxvbkNsaWNrOm4sYXJpYUxhYmVsUHJlZml4OmUucHJvcHMuYXJpYUxhYmVsUHJlZml4fSkpfXJldHVybiByLmNvbmNhdChbMCwxLDIsMyw0LDUsNl0ubWFwKChmdW5jdGlvbihyKXt2YXIgYT12ZS5kZWZhdWx0KHQscik7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChUcix7YXJpYUxhYmVsUHJlZml4V2hlbkVuYWJsZWQ6ZS5wcm9wcy5jaG9vc2VEYXlBcmlhTGFiZWxQcmVmaXgsYXJpYUxhYmVsUHJlZml4V2hlbkRpc2FibGVkOmUucHJvcHMuZGlzYWJsZWREYXlBcmlhTGFiZWxQcmVmaXgsa2V5OmEudmFsdWVPZigpLGRheTphLG1vbnRoOmUucHJvcHMubW9udGgsb25DbGljazplLmhhbmRsZURheUNsaWNrLmJpbmQoYnQoZSksYSksb25Nb3VzZUVudGVyOmUuaGFuZGxlRGF5TW91c2VFbnRlci5iaW5kKGJ0KGUpLGEpLG1pbkRhdGU6ZS5wcm9wcy5taW5EYXRlLG1heERhdGU6ZS5wcm9wcy5tYXhEYXRlLGV4Y2x1ZGVEYXRlczplLnByb3BzLmV4Y2x1ZGVEYXRlcyxpbmNsdWRlRGF0ZXM6ZS5wcm9wcy5pbmNsdWRlRGF0ZXMsaGlnaGxpZ2h0RGF0ZXM6ZS5wcm9wcy5oaWdobGlnaHREYXRlcyxzZWxlY3RpbmdEYXRlOmUucHJvcHMuc2VsZWN0aW5nRGF0ZSxmaWx0ZXJEYXRlOmUucHJvcHMuZmlsdGVyRGF0ZSxwcmVTZWxlY3Rpb246ZS5wcm9wcy5wcmVTZWxlY3Rpb24sc2VsZWN0ZWQ6ZS5wcm9wcy5zZWxlY3RlZCxzZWxlY3RzU3RhcnQ6ZS5wcm9wcy5zZWxlY3RzU3RhcnQsc2VsZWN0c0VuZDplLnByb3BzLnNlbGVjdHNFbmQsc2VsZWN0c1JhbmdlOmUucHJvcHMuc2VsZWN0c1JhbmdlLHN0YXJ0RGF0ZTplLnByb3BzLnN0YXJ0RGF0ZSxlbmREYXRlOmUucHJvcHMuZW5kRGF0ZSxkYXlDbGFzc05hbWU6ZS5wcm9wcy5kYXlDbGFzc05hbWUscmVuZGVyRGF5Q29udGVudHM6ZS5wcm9wcy5yZW5kZXJEYXlDb250ZW50cyxkaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbjplLnByb3BzLmRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uLGhhbmRsZU9uS2V5RG93bjplLnByb3BzLmhhbmRsZU9uS2V5RG93bixpc0lucHV0Rm9jdXNlZDplLnByb3BzLmlzSW5wdXRGb2N1c2VkLGNvbnRhaW5lclJlZjplLnByb3BzLmNvbnRhaW5lclJlZixpbmxpbmU6ZS5wcm9wcy5pbmxpbmUsc2hvdWxkRm9jdXNEYXlJbmxpbmU6ZS5wcm9wcy5zaG91bGRGb2N1c0RheUlubGluZSxtb250aFNob3dzRHVwbGljYXRlRGF5c0VuZDplLnByb3BzLm1vbnRoU2hvd3NEdXBsaWNhdGVEYXlzRW5kLG1vbnRoU2hvd3NEdXBsaWNhdGVEYXlzU3RhcnQ6ZS5wcm9wcy5tb250aFNob3dzRHVwbGljYXRlRGF5c1N0YXJ0fSl9KSkpfSkpLGV9cmV0dXJuIGh0KHIsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fd2Vla1wifSx0aGlzLnJlbmRlckRheXMoKSl9fV0sW3trZXk6XCJkZWZhdWx0UHJvcHNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57c2hvdWxkQ2xvc2VPblNlbGVjdDohMH19fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxGcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTt1dCh0aGlzLHIpO2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGEpLG89MDtvPGE7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBtdChidChlPXQuY2FsbC5hcHBseSh0LFt0aGlzXS5jb25jYXQobikpKSxcIk1PTlRIX1JFRlNcIixfdChBcnJheSgxMikpLm1hcCgoZnVuY3Rpb24oKXtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVSZWYoKX0pKSksbXQoYnQoZSksXCJpc0Rpc2FibGVkXCIsKGZ1bmN0aW9uKHQpe3JldHVybiB0cih0LGUucHJvcHMpfSkpLG10KGJ0KGUpLFwiaXNFeGNsdWRlZFwiLChmdW5jdGlvbih0KXtyZXR1cm4gcnIodCxlLnByb3BzKX0pKSxtdChidChlKSxcImhhbmRsZURheUNsaWNrXCIsKGZ1bmN0aW9uKHQscil7ZS5wcm9wcy5vbkRheUNsaWNrJiZlLnByb3BzLm9uRGF5Q2xpY2sodCxyLGUucHJvcHMub3JkZXJJbkRpc3BsYXkpfSkpLG10KGJ0KGUpLFwiaGFuZGxlRGF5TW91c2VFbnRlclwiLChmdW5jdGlvbih0KXtlLnByb3BzLm9uRGF5TW91c2VFbnRlciYmZS5wcm9wcy5vbkRheU1vdXNlRW50ZXIodCl9KSksbXQoYnQoZSksXCJoYW5kbGVNb3VzZUxlYXZlXCIsKGZ1bmN0aW9uKCl7ZS5wcm9wcy5vbk1vdXNlTGVhdmUmJmUucHJvcHMub25Nb3VzZUxlYXZlKCl9KSksbXQoYnQoZSksXCJpc1JhbmdlU3RhcnRNb250aFwiLChmdW5jdGlvbih0KXt2YXIgcj1lLnByb3BzLGE9ci5kYXksbj1yLnN0YXJ0RGF0ZSxvPXIuZW5kRGF0ZTtyZXR1cm4hKCFufHwhbykmJlF0KHFlLmRlZmF1bHQoYSx0KSxuKX0pKSxtdChidChlKSxcImlzUmFuZ2VTdGFydFF1YXJ0ZXJcIiwoZnVuY3Rpb24odCl7dmFyIHI9ZS5wcm9wcyxhPXIuZGF5LG49ci5zdGFydERhdGUsbz1yLmVuZERhdGU7cmV0dXJuISghbnx8IW8pJiZWdChBZS5kZWZhdWx0KGEsdCksbil9KSksbXQoYnQoZSksXCJpc1JhbmdlRW5kTW9udGhcIiwoZnVuY3Rpb24odCl7dmFyIHI9ZS5wcm9wcyxhPXIuZGF5LG49ci5zdGFydERhdGUsbz1yLmVuZERhdGU7cmV0dXJuISghbnx8IW8pJiZRdChxZS5kZWZhdWx0KGEsdCksbyl9KSksbXQoYnQoZSksXCJpc1JhbmdlRW5kUXVhcnRlclwiLChmdW5jdGlvbih0KXt2YXIgcj1lLnByb3BzLGE9ci5kYXksbj1yLnN0YXJ0RGF0ZSxvPXIuZW5kRGF0ZTtyZXR1cm4hKCFufHwhbykmJlZ0KEFlLmRlZmF1bHQoYSx0KSxvKX0pKSxtdChidChlKSxcImlzV2Vla0luTW9udGhcIiwoZnVuY3Rpb24odCl7dmFyIHI9ZS5wcm9wcy5kYXksYT12ZS5kZWZhdWx0KHQsNik7cmV0dXJuIFF0KHQscil8fFF0KGEscil9KSksbXQoYnQoZSksXCJyZW5kZXJXZWVrc1wiLChmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxyPWUucHJvcHMuZml4ZWRIZWlnaHQsYT1XdChCdChlLnByb3BzLmRheSksZS5wcm9wcy5sb2NhbGUpLG49MCxvPSExO3QucHVzaChkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTHIse2FyaWFMYWJlbFByZWZpeDplLnByb3BzLndlZWtBcmlhTGFiZWxQcmVmaXgsY2hvb3NlRGF5QXJpYUxhYmVsUHJlZml4OmUucHJvcHMuY2hvb3NlRGF5QXJpYUxhYmVsUHJlZml4LGRpc2FibGVkRGF5QXJpYUxhYmVsUHJlZml4OmUucHJvcHMuZGlzYWJsZWREYXlBcmlhTGFiZWxQcmVmaXgsa2V5Om4sZGF5OmEsbW9udGg6WWUuZGVmYXVsdChlLnByb3BzLmRheSksb25EYXlDbGljazplLmhhbmRsZURheUNsaWNrLG9uRGF5TW91c2VFbnRlcjplLmhhbmRsZURheU1vdXNlRW50ZXIsb25XZWVrU2VsZWN0OmUucHJvcHMub25XZWVrU2VsZWN0LGZvcm1hdFdlZWtOdW1iZXI6ZS5wcm9wcy5mb3JtYXRXZWVrTnVtYmVyLGxvY2FsZTplLnByb3BzLmxvY2FsZSxtaW5EYXRlOmUucHJvcHMubWluRGF0ZSxtYXhEYXRlOmUucHJvcHMubWF4RGF0ZSxleGNsdWRlRGF0ZXM6ZS5wcm9wcy5leGNsdWRlRGF0ZXMsaW5jbHVkZURhdGVzOmUucHJvcHMuaW5jbHVkZURhdGVzLGlubGluZTplLnByb3BzLmlubGluZSxzaG91bGRGb2N1c0RheUlubGluZTplLnByb3BzLnNob3VsZEZvY3VzRGF5SW5saW5lLGhpZ2hsaWdodERhdGVzOmUucHJvcHMuaGlnaGxpZ2h0RGF0ZXMsc2VsZWN0aW5nRGF0ZTplLnByb3BzLnNlbGVjdGluZ0RhdGUsZmlsdGVyRGF0ZTplLnByb3BzLmZpbHRlckRhdGUscHJlU2VsZWN0aW9uOmUucHJvcHMucHJlU2VsZWN0aW9uLHNlbGVjdGVkOmUucHJvcHMuc2VsZWN0ZWQsc2VsZWN0c1N0YXJ0OmUucHJvcHMuc2VsZWN0c1N0YXJ0LHNlbGVjdHNFbmQ6ZS5wcm9wcy5zZWxlY3RzRW5kLHNlbGVjdHNSYW5nZTplLnByb3BzLnNlbGVjdHNSYW5nZSxzaG93V2Vla051bWJlcjplLnByb3BzLnNob3dXZWVrTnVtYmVycyxzdGFydERhdGU6ZS5wcm9wcy5zdGFydERhdGUsZW5kRGF0ZTplLnByb3BzLmVuZERhdGUsZGF5Q2xhc3NOYW1lOmUucHJvcHMuZGF5Q2xhc3NOYW1lLHNldE9wZW46ZS5wcm9wcy5zZXRPcGVuLHNob3VsZENsb3NlT25TZWxlY3Q6ZS5wcm9wcy5zaG91bGRDbG9zZU9uU2VsZWN0LGRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uOmUucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24scmVuZGVyRGF5Q29udGVudHM6ZS5wcm9wcy5yZW5kZXJEYXlDb250ZW50cyxoYW5kbGVPbktleURvd246ZS5wcm9wcy5oYW5kbGVPbktleURvd24saXNJbnB1dEZvY3VzZWQ6ZS5wcm9wcy5pc0lucHV0Rm9jdXNlZCxjb250YWluZXJSZWY6ZS5wcm9wcy5jb250YWluZXJSZWYsbW9udGhTaG93c0R1cGxpY2F0ZURheXNFbmQ6ZS5wcm9wcy5tb250aFNob3dzRHVwbGljYXRlRGF5c0VuZCxtb250aFNob3dzRHVwbGljYXRlRGF5c1N0YXJ0OmUucHJvcHMubW9udGhTaG93c0R1cGxpY2F0ZURheXNTdGFydH0pKSwhbzspe24rKyxhPURlLmRlZmF1bHQoYSwxKTt2YXIgcz1yJiZuPj02LGk9IXImJiFlLmlzV2Vla0luTW9udGgoYSk7aWYoc3x8aSl7aWYoIWUucHJvcHMucGVla05leHRNb250aClicmVhaztvPSEwfX1yZXR1cm4gdH0pKSxtdChidChlKSxcIm9uTW9udGhDbGlja1wiLChmdW5jdGlvbih0LHIpe2UuaGFuZGxlRGF5Q2xpY2soQnQocWUuZGVmYXVsdChlLnByb3BzLmRheSxyKSksdCl9KSksbXQoYnQoZSksXCJoYW5kbGVNb250aE5hdmlnYXRpb25cIiwoZnVuY3Rpb24odCxyKXtlLmlzRGlzYWJsZWQocil8fGUuaXNFeGNsdWRlZChyKXx8KGUucHJvcHMuc2V0UHJlU2VsZWN0aW9uKHIpLGUuTU9OVEhfUkVGU1t0XS5jdXJyZW50JiZlLk1PTlRIX1JFRlNbdF0uY3VycmVudC5mb2N1cygpKX0pKSxtdChidChlKSxcIm9uTW9udGhLZXlEb3duXCIsKGZ1bmN0aW9uKHQscil7dmFyIGE9dC5rZXk7aWYoIWUucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24pc3dpdGNoKGEpe2Nhc2VcIkVudGVyXCI6ZS5vbk1vbnRoQ2xpY2sodCxyKSxlLnByb3BzLnNldFByZVNlbGVjdGlvbihlLnByb3BzLnNlbGVjdGVkKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6ZS5oYW5kbGVNb250aE5hdmlnYXRpb24oMTE9PT1yPzA6cisxLHdlLmRlZmF1bHQoZS5wcm9wcy5wcmVTZWxlY3Rpb24sMSkpO2JyZWFrO2Nhc2VcIkFycm93TGVmdFwiOmUuaGFuZGxlTW9udGhOYXZpZ2F0aW9uKDA9PT1yPzExOnItMSxDZS5kZWZhdWx0KGUucHJvcHMucHJlU2VsZWN0aW9uLDEpKX19KSksbXQoYnQoZSksXCJvblF1YXJ0ZXJDbGlja1wiLChmdW5jdGlvbih0LHIpe2UuaGFuZGxlRGF5Q2xpY2soSHQoQWUuZGVmYXVsdChlLnByb3BzLmRheSxyKSksdCl9KSksbXQoYnQoZSksXCJnZXRNb250aENsYXNzTmFtZXNcIiwoZnVuY3Rpb24odCl7dmFyIHI9ZS5wcm9wcyxhPXIuZGF5LG49ci5zdGFydERhdGUsbz1yLmVuZERhdGUscz1yLnNlbGVjdGVkLGk9ci5taW5EYXRlLHA9ci5tYXhEYXRlLGw9ci5wcmVTZWxlY3Rpb24sZD1yLm1vbnRoQ2xhc3NOYW1lLGM9ZD9kKGEpOnZvaWQgMDtyZXR1cm4gY2UuZGVmYXVsdChcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXRleHRcIixcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLVwiLmNvbmNhdCh0KSxjLHtcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1kaXNhYmxlZFwiOihpfHxwKSYmYXIocWUuZGVmYXVsdChhLHQpLGUucHJvcHMpLFwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLXNlbGVjdGVkXCI6WWUuZGVmYXVsdChhKT09PXQmJlRlLmRlZmF1bHQoYSk9PT1UZS5kZWZhdWx0KHMpLFwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtdGV4dC0ta2V5Ym9hcmQtc2VsZWN0ZWRcIjpZZS5kZWZhdWx0KGwpPT09dCxcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1pbi1yYW5nZVwiOm5yKG4sbyx0LGEpLFwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtLXJhbmdlLXN0YXJ0XCI6ZS5pc1JhbmdlU3RhcnRNb250aCh0KSxcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLS1yYW5nZS1lbmRcIjplLmlzUmFuZ2VFbmRNb250aCh0KX0pfSkpLG10KGJ0KGUpLFwiZ2V0VGFiSW5kZXhcIiwoZnVuY3Rpb24odCl7dmFyIHI9WWUuZGVmYXVsdChlLnByb3BzLnByZVNlbGVjdGlvbik7cmV0dXJuIGUucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb258fHQhPT1yP1wiLTFcIjpcIjBcIn0pKSxtdChidChlKSxcImdldEFyaWFMYWJlbFwiLChmdW5jdGlvbih0KXt2YXIgcj1lLnByb3BzLGE9ci5hcmlhTGFiZWxQcmVmaXgsbj12b2lkIDA9PT1hP1wiQ2hvb3NlXCI6YSxvPXIuZGlzYWJsZWREYXlBcmlhTGFiZWxQcmVmaXgscz12b2lkIDA9PT1vP1wiTm90IGF2YWlsYWJsZVwiOm8saT1yLmRheSxwPXFlLmRlZmF1bHQoaSx0KSxsPWUuaXNEaXNhYmxlZChwKXx8ZS5pc0V4Y2x1ZGVkKHApP3M6bjtyZXR1cm5cIlwiLmNvbmNhdChsLFwiIFwiKS5jb25jYXQoTHQocCxcIk1NTU0geXl5eVwiKSl9KSksbXQoYnQoZSksXCJnZXRRdWFydGVyQ2xhc3NOYW1lc1wiLChmdW5jdGlvbih0KXt2YXIgcj1lLnByb3BzLGE9ci5kYXksbj1yLnN0YXJ0RGF0ZSxvPXIuZW5kRGF0ZSxzPXIuc2VsZWN0ZWQsaT1yLm1pbkRhdGUscD1yLm1heERhdGU7cmV0dXJuIGNlLmRlZmF1bHQoXCJyZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLXRleHRcIixcInJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItXCIuY29uY2F0KHQpLHtcInJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItLWRpc2FibGVkXCI6KGl8fHApJiZvcihBZS5kZWZhdWx0KGEsdCksZS5wcm9wcyksXCJyZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1zZWxlY3RlZFwiOnhlLmRlZmF1bHQoYSk9PT10JiZUZS5kZWZhdWx0KGEpPT09VGUuZGVmYXVsdChzKSxcInJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItLWluLXJhbmdlXCI6aXIobixvLHQsYSksXCJyZWFjdC1kYXRlcGlja2VyX19xdWFydGVyLS1yYW5nZS1zdGFydFwiOmUuaXNSYW5nZVN0YXJ0UXVhcnRlcih0KSxcInJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXItLXJhbmdlLWVuZFwiOmUuaXNSYW5nZUVuZFF1YXJ0ZXIodCl9KX0pKSxtdChidChlKSxcInJlbmRlck1vbnRoc1wiLChmdW5jdGlvbigpe3ZhciB0PWUucHJvcHMscj10LnNob3dGdWxsTW9udGhZZWFyUGlja2VyLGE9dC5zaG93VHdvQ29sdW1uTW9udGhZZWFyUGlja2VyLG49dC5zaG93Rm91ckNvbHVtbk1vbnRoWWVhclBpY2tlcixvPXQubG9jYWxlO3JldHVybihuP1tbMCwxLDIsM10sWzQsNSw2LDddLFs4LDksMTAsMTFdXTphP1tbMCwxXSxbMiwzXSxbNCw1XSxbNiw3XSxbOCw5XSxbMTAsMTFdXTpbWzAsMSwyXSxbMyw0LDVdLFs2LDcsOF0sWzksMTAsMTFdXSkubWFwKChmdW5jdGlvbih0LGEpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtd3JhcHBlclwiLGtleTphfSx0Lm1hcCgoZnVuY3Rpb24odCxhKXtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3JlZjplLk1PTlRIX1JFRlNbdF0sa2V5OmEsb25DbGljazpmdW5jdGlvbihyKXtlLm9uTW9udGhDbGljayhyLHQpfSxvbktleURvd246ZnVuY3Rpb24ocil7ZS5vbk1vbnRoS2V5RG93bihyLHQpfSx0YWJJbmRleDplLmdldFRhYkluZGV4KHQpLGNsYXNzTmFtZTplLmdldE1vbnRoQ2xhc3NOYW1lcyh0KSxyb2xlOlwiYnV0dG9uXCIsXCJhcmlhLWxhYmVsXCI6ZS5nZXRBcmlhTGFiZWwodCl9LHI/WHQodCxvKTpadCh0LG8pKX0pKSl9KSl9KSksbXQoYnQoZSksXCJyZW5kZXJRdWFydGVyc1wiLChmdW5jdGlvbigpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fcXVhcnRlci13cmFwcGVyXCJ9LFsxLDIsMyw0XS5tYXAoKGZ1bmN0aW9uKHQscil7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6cixvbkNsaWNrOmZ1bmN0aW9uKHIpe2Uub25RdWFydGVyQ2xpY2socix0KX0sY2xhc3NOYW1lOmUuZ2V0UXVhcnRlckNsYXNzTmFtZXModCl9LGVyKHQsZS5wcm9wcy5sb2NhbGUpKX0pKSl9KSksbXQoYnQoZSksXCJnZXRDbGFzc05hbWVzXCIsKGZ1bmN0aW9uKCl7dmFyIHQ9ZS5wcm9wczt0LmRheTt2YXIgcj10LnNlbGVjdGluZ0RhdGUsYT10LnNlbGVjdHNTdGFydCxuPXQuc2VsZWN0c0VuZCxvPXQuc2hvd01vbnRoWWVhclBpY2tlcixzPXQuc2hvd1F1YXJ0ZXJZZWFyUGlja2VyO3JldHVybiBjZS5kZWZhdWx0KFwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGhcIix7XCJyZWFjdC1kYXRlcGlja2VyX19tb250aC0tc2VsZWN0aW5nLXJhbmdlXCI6ciYmKGF8fG4pfSx7XCJyZWFjdC1kYXRlcGlja2VyX19tb250aFBpY2tlclwiOm99LHtcInJlYWN0LWRhdGVwaWNrZXJfX3F1YXJ0ZXJQaWNrZXJcIjpzfSl9KSksZX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuc2hvd01vbnRoWWVhclBpY2tlcixyPWUuc2hvd1F1YXJ0ZXJZZWFyUGlja2VyLGE9ZS5kYXksbj1lLmFyaWFMYWJlbFByZWZpeCxvPXZvaWQgMD09PW4/XCJtb250aCBcIjpuO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnRoaXMuZ2V0Q2xhc3NOYW1lcygpLG9uTW91c2VMZWF2ZTp0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXCJhcmlhLWxhYmVsXCI6XCJcIi5jb25jYXQobyxcIiBcIikuY29uY2F0KEx0KGEsXCJ5eXl5LU1NXCIpKX0sdD90aGlzLnJlbmRlck1vbnRocygpOnI/dGhpcy5yZW5kZXJRdWFydGVycygpOnRoaXMucmVuZGVyV2Vla3MoKSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxScj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoKXt2YXIgZTt1dCh0aGlzLHIpO2Zvcih2YXIgYT1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KGEpLG89MDtvPGE7bysrKW5bb109YXJndW1lbnRzW29dO3JldHVybiBtdChidChlPXQuY2FsbC5hcHBseSh0LFt0aGlzXS5jb25jYXQobikpKSxcInN0YXRlXCIse2hlaWdodDpudWxsfSksbXQoYnQoZSksXCJoYW5kbGVDbGlja1wiLChmdW5jdGlvbih0KXsoZS5wcm9wcy5taW5UaW1lfHxlLnByb3BzLm1heFRpbWUpJiZjcih0LGUucHJvcHMpfHwoZS5wcm9wcy5leGNsdWRlVGltZXN8fGUucHJvcHMuaW5jbHVkZVRpbWVzfHxlLnByb3BzLmZpbHRlclRpbWUpJiZkcih0LGUucHJvcHMpfHxlLnByb3BzLm9uQ2hhbmdlKHQpfSkpLG10KGJ0KGUpLFwibGlDbGFzc2VzXCIsKGZ1bmN0aW9uKHQscixhKXt2YXIgbj1bXCJyZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbVwiLGUucHJvcHMudGltZUNsYXNzTmFtZT9lLnByb3BzLnRpbWVDbGFzc05hbWUodCxyLGEpOnZvaWQgMF07cmV0dXJuIGUucHJvcHMuc2VsZWN0ZWQmJnI9PT1QZS5kZWZhdWx0KHQpJiZhPT09TWUuZGVmYXVsdCh0KSYmbi5wdXNoKFwicmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1saXN0LWl0ZW0tLXNlbGVjdGVkXCIpLCgoZS5wcm9wcy5taW5UaW1lfHxlLnByb3BzLm1heFRpbWUpJiZjcih0LGUucHJvcHMpfHwoZS5wcm9wcy5leGNsdWRlVGltZXN8fGUucHJvcHMuaW5jbHVkZVRpbWVzfHxlLnByb3BzLmZpbHRlclRpbWUpJiZkcih0LGUucHJvcHMpKSYmbi5wdXNoKFwicmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1saXN0LWl0ZW0tLWRpc2FibGVkXCIpLGUucHJvcHMuaW5qZWN0VGltZXMmJig2MCpQZS5kZWZhdWx0KHQpK01lLmRlZmF1bHQodCkpJWUucHJvcHMuaW50ZXJ2YWxzIT0wJiZuLnB1c2goXCJyZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3QtaXRlbS0taW5qZWN0ZWRcIiksbi5qb2luKFwiIFwiKX0pKSxtdChidChlKSxcInJlbmRlclRpbWVzXCIsKGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLHI9ZS5wcm9wcy5mb3JtYXQ/ZS5wcm9wcy5mb3JtYXQ6XCJwXCIsYT1lLnByb3BzLmludGVydmFscyxuPUF0KHh0KGUucHJvcHMuc2VsZWN0ZWQpKSxvPTE0NDAvYSxzPWUucHJvcHMuaW5qZWN0VGltZXMmJmUucHJvcHMuaW5qZWN0VGltZXMuc29ydCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS10fSkpLGk9ZS5wcm9wcy5zZWxlY3RlZHx8ZS5wcm9wcy5vcGVuVG9EYXRlfHx4dCgpLHA9UGUuZGVmYXVsdChpKSxsPU1lLmRlZmF1bHQoaSksZD1SZS5kZWZhdWx0KEZlLmRlZmF1bHQobixsKSxwKSxjPTA7YzxvO2MrKyl7dmFyIHU9bWUuZGVmYXVsdChuLGMqYSk7aWYodC5wdXNoKHUpLHMpe3ZhciBmPXdyKG4sdSxjLGEscyk7dD10LmNvbmNhdChmKX19cmV0dXJuIHQubWFwKChmdW5jdGlvbih0LGEpe3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtrZXk6YSxvbkNsaWNrOmUuaGFuZGxlQ2xpY2suYmluZChidChlKSx0KSxjbGFzc05hbWU6ZS5saUNsYXNzZXModCxwLGwpLHJlZjpmdW5jdGlvbihyKXsobnQuZGVmYXVsdCh0LGQpfHwkdCh0LGQpKSYmKGUuY2VudGVyTGk9cil9LHRhYkluZGV4OlwiMFwifSxMdCh0LHIsZS5wcm9wcy5sb2NhbGUpKX0pKX0pKSxlfXJldHVybiBodChyLFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGlzdC5zY3JvbGxUb3A9ci5jYWxjQ2VudGVyUG9zaXRpb24odGhpcy5wcm9wcy5tb250aFJlZj90aGlzLnByb3BzLm1vbnRoUmVmLmNsaWVudEhlaWdodC10aGlzLmhlYWRlci5jbGllbnRIZWlnaHQ6dGhpcy5saXN0LmNsaWVudEhlaWdodCx0aGlzLmNlbnRlckxpKSx0aGlzLnByb3BzLm1vbnRoUmVmJiZ0aGlzLmhlYWRlciYmdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OnRoaXMucHJvcHMubW9udGhSZWYuY2xpZW50SGVpZ2h0LXRoaXMuaGVhZGVyLmNsaWVudEhlaWdodH0pfX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMuc3RhdGUuaGVpZ2h0O3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fdGltZS1jb250YWluZXIgXCIuY29uY2F0KHRoaXMucHJvcHMudG9kYXlCdXR0b24/XCJyZWFjdC1kYXRlcGlja2VyX190aW1lLWNvbnRhaW5lci0td2l0aC10b2RheS1idXR0b25cIjpcIlwiKX0sZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciByZWFjdC1kYXRlcGlja2VyX19oZWFkZXItLXRpbWUgXCIuY29uY2F0KHRoaXMucHJvcHMuc2hvd1RpbWVTZWxlY3RPbmx5P1wicmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyLS10aW1lLS1vbmx5XCI6XCJcIikscmVmOmZ1bmN0aW9uKHQpe2UuaGVhZGVyPXR9fSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlci10aW1lX19oZWFkZXJcIn0sdGhpcy5wcm9wcy50aW1lQ2FwdGlvbikpLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX190aW1lXCJ9LGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX190aW1lLWJveFwifSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX190aW1lLWxpc3RcIixyZWY6ZnVuY3Rpb24odCl7ZS5saXN0PXR9LHN0eWxlOnQ/e2hlaWdodDp0fTp7fSx0YWJJbmRleDpcIjBcIn0sdGhpcy5yZW5kZXJUaW1lcygpKSkpKX19XSxbe2tleTpcImRlZmF1bHRQcm9wc1wiLGdldDpmdW5jdGlvbigpe3JldHVybntpbnRlcnZhbHM6MzAsb25UaW1lQ2hhbmdlOmZ1bmN0aW9uKCl7fSx0b2RheUJ1dHRvbjpudWxsLHRpbWVDYXB0aW9uOlwiVGltZVwifX19XSkscn0oZGUuZGVmYXVsdC5Db21wb25lbnQpO210KFJyLFwiY2FsY0NlbnRlclBvc2l0aW9uXCIsKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQub2Zmc2V0VG9wLShlLzItdC5jbGllbnRIZWlnaHQvMil9KSk7dmFyIHFyPWZ1bmN0aW9uKGUpe3d0KHIsZSk7dmFyIHQ9U3Qocik7ZnVuY3Rpb24gcihlKXt2YXIgYTtyZXR1cm4gdXQodGhpcyxyKSxtdChidChhPXQuY2FsbCh0aGlzLGUpKSxcImhhbmRsZVllYXJDbGlja1wiLChmdW5jdGlvbihlLHQpe2EucHJvcHMub25EYXlDbGljayYmYS5wcm9wcy5vbkRheUNsaWNrKGUsdCl9KSksbXQoYnQoYSksXCJpc1NhbWVEYXlcIiwoZnVuY3Rpb24oZSx0KXtyZXR1cm4gVXQoZSx0KX0pKSxtdChidChhKSxcImlzS2V5Ym9hcmRTZWxlY3RlZFwiLChmdW5jdGlvbihlKXt2YXIgdD1qdChXZS5kZWZhdWx0KGEucHJvcHMuZGF0ZSxlKSk7cmV0dXJuIWEucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24mJiFhLnByb3BzLmlubGluZSYmIVV0KHQsanQoYS5wcm9wcy5zZWxlY3RlZCkpJiZVdCh0LGp0KGEucHJvcHMucHJlU2VsZWN0aW9uKSl9KSksbXQoYnQoYSksXCJvblllYXJDbGlja1wiLChmdW5jdGlvbihlLHQpe3ZhciByPWEucHJvcHMuZGF0ZTthLmhhbmRsZVllYXJDbGljayhqdChXZS5kZWZhdWx0KHIsdCkpLGUpfSkpLG10KGJ0KGEpLFwiZ2V0WWVhckNsYXNzTmFtZXNcIiwoZnVuY3Rpb24oZSl7dmFyIHQ9YS5wcm9wcyxyPXQubWluRGF0ZSxuPXQubWF4RGF0ZSxvPXQuc2VsZWN0ZWQ7cmV0dXJuIGNlLmRlZmF1bHQoXCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHRcIix7XCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLXNlbGVjdGVkXCI6ZT09PVRlLmRlZmF1bHQobyksXCJyZWFjdC1kYXRlcGlja2VyX195ZWFyLXRleHQtLWRpc2FibGVkXCI6KHJ8fG4pJiZzcihlLGEucHJvcHMpLFwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS1rZXlib2FyZC1zZWxlY3RlZFwiOmEuaXNLZXlib2FyZFNlbGVjdGVkKGUpLFwicmVhY3QtZGF0ZXBpY2tlcl9feWVhci10ZXh0LS10b2RheVwiOmU9PT1UZS5kZWZhdWx0KHh0KCkpfSl9KSksYX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD1bXSxyPXRoaXMucHJvcHMsYT1ncihyLmRhdGUsci55ZWFySXRlbU51bWJlciksbj1hLnN0YXJ0UGVyaW9kLG89YS5lbmRQZXJpb2Qscz1mdW5jdGlvbihyKXt0LnB1c2goZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse29uQ2xpY2s6ZnVuY3Rpb24odCl7ZS5vblllYXJDbGljayh0LHIpfSxjbGFzc05hbWU6ZS5nZXRZZWFyQ2xhc3NOYW1lcyhyKSxrZXk6cn0scikpfSxpPW47aTw9bztpKyspcyhpKTtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3llYXJcIn0sZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3llYXItd3JhcHBlclwifSx0KSl9fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxBcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoZSl7dmFyIGE7cmV0dXJuIHV0KHRoaXMsciksbXQoYnQoYT10LmNhbGwodGhpcyxlKSksXCJvblRpbWVDaGFuZ2VcIiwoZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSh7dGltZTplfSk7dmFyIHQ9bmV3IERhdGU7dC5zZXRIb3VycyhlLnNwbGl0KFwiOlwiKVswXSksdC5zZXRNaW51dGVzKGUuc3BsaXQoXCI6XCIpWzFdKSxhLnByb3BzLm9uQ2hhbmdlKHQpfSkpLG10KGJ0KGEpLFwicmVuZGVyVGltZUlucHV0XCIsKGZ1bmN0aW9uKCl7dmFyIGU9YS5zdGF0ZS50aW1lLHQ9YS5wcm9wcyxyPXQuZGF0ZSxuPXQudGltZVN0cmluZyxvPXQuY3VzdG9tVGltZUlucHV0O3JldHVybiBvP2RlLmRlZmF1bHQuY2xvbmVFbGVtZW50KG8se2RhdGU6cix2YWx1ZTplLG9uQ2hhbmdlOmEub25UaW1lQ2hhbmdlfSk6ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIix7dHlwZTpcInRpbWVcIixjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyLXRpbWVfX2lucHV0XCIscGxhY2Vob2xkZXI6XCJUaW1lXCIsbmFtZTpcInRpbWUtaW5wdXRcIixyZXF1aXJlZDohMCx2YWx1ZTplLG9uQ2hhbmdlOmZ1bmN0aW9uKGUpe2Eub25UaW1lQ2hhbmdlKGUudGFyZ2V0LnZhbHVlfHxuKX19KX0pKSxhLnN0YXRlPXt0aW1lOmEucHJvcHMudGltZVN0cmluZ30sYX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19pbnB1dC10aW1lLWNvbnRhaW5lclwifSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlci10aW1lX19jYXB0aW9uXCJ9LHRoaXMucHJvcHMudGltZUlucHV0TGFiZWwpLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyLXRpbWVfX2lucHV0LWNvbnRhaW5lclwifSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlci10aW1lX19pbnB1dFwifSx0aGlzLnJlbmRlclRpbWVJbnB1dCgpKSkpfX1dLFt7a2V5OlwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS50aW1lU3RyaW5nIT09dC50aW1lP3t0aW1lOmUudGltZVN0cmluZ306bnVsbH19XSkscn0oZGUuZGVmYXVsdC5Db21wb25lbnQpO2Z1bmN0aW9uIFdyKGUpe3ZhciB0PWUuY2xhc3NOYW1lLHI9ZS5jaGlsZHJlbixhPWUuc2hvd1BvcHBlckFycm93LG49ZS5hcnJvd1Byb3BzLG89dm9pZCAwPT09bj97fTpuO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOnR9LGEmJmRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHl0KHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX190cmlhbmdsZVwifSxvKSkscil9dmFyIEJyPVtcInJlYWN0LWRhdGVwaWNrZXJfX3llYXItc2VsZWN0XCIsXCJyZWFjdC1kYXRlcGlja2VyX19tb250aC1zZWxlY3RcIixcInJlYWN0LWRhdGVwaWNrZXJfX21vbnRoLXllYXItc2VsZWN0XCJdLGpyPWZ1bmN0aW9uKGUpe3d0KHIsZSk7dmFyIHQ9U3Qocik7ZnVuY3Rpb24gcihlKXt2YXIgYTtyZXR1cm4gdXQodGhpcyxyKSxtdChidChhPXQuY2FsbCh0aGlzLGUpKSxcImhhbmRsZUNsaWNrT3V0c2lkZVwiLChmdW5jdGlvbihlKXthLnByb3BzLm9uQ2xpY2tPdXRzaWRlKGUpfSkpLG10KGJ0KGEpLFwic2V0Q2xpY2tPdXRzaWRlUmVmXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGEuY29udGFpbmVyUmVmLmN1cnJlbnR9KSksbXQoYnQoYSksXCJoYW5kbGVEcm9wZG93bkZvY3VzXCIsKGZ1bmN0aW9uKGUpeyhmdW5jdGlvbigpe3ZhciBlPSgoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9KS5jbGFzc05hbWV8fFwiXCIpLnNwbGl0KC9cXHMrLyk7cmV0dXJuIEJyLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmluZGV4T2YodCk+PTB9KSl9KShlLnRhcmdldCkmJmEucHJvcHMub25Ecm9wZG93bkZvY3VzKCl9KSksbXQoYnQoYSksXCJnZXREYXRlSW5WaWV3XCIsKGZ1bmN0aW9uKCl7dmFyIGU9YS5wcm9wcyx0PWUucHJlU2VsZWN0aW9uLHI9ZS5zZWxlY3RlZCxuPWUub3BlblRvRGF0ZSxvPXlyKGEucHJvcHMpLHM9dnIoYS5wcm9wcyksaT14dCgpLHA9bnx8cnx8dDtyZXR1cm4gcHx8KG8mJm50LmRlZmF1bHQoaSxvKT9vOnMmJmF0LmRlZmF1bHQoaSxzKT9zOmkpfSkpLG10KGJ0KGEpLFwiaW5jcmVhc2VNb250aFwiLChmdW5jdGlvbigpe2Euc2V0U3RhdGUoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0ZTtyZXR1cm57ZGF0ZTp3ZS5kZWZhdWx0KHQsMSl9fSksKGZ1bmN0aW9uKCl7cmV0dXJuIGEuaGFuZGxlTW9udGhDaGFuZ2UoYS5zdGF0ZS5kYXRlKX0pKX0pKSxtdChidChhKSxcImRlY3JlYXNlTW9udGhcIiwoZnVuY3Rpb24oKXthLnNldFN0YXRlKChmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGU7cmV0dXJue2RhdGU6Q2UuZGVmYXVsdCh0LDEpfX0pLChmdW5jdGlvbigpe3JldHVybiBhLmhhbmRsZU1vbnRoQ2hhbmdlKGEuc3RhdGUuZGF0ZSl9KSl9KSksbXQoYnQoYSksXCJoYW5kbGVEYXlDbGlja1wiLChmdW5jdGlvbihlLHQscil7YS5wcm9wcy5vblNlbGVjdChlLHQsciksYS5wcm9wcy5zZXRQcmVTZWxlY3Rpb24mJmEucHJvcHMuc2V0UHJlU2VsZWN0aW9uKGUpfSkpLG10KGJ0KGEpLFwiaGFuZGxlRGF5TW91c2VFbnRlclwiLChmdW5jdGlvbihlKXthLnNldFN0YXRlKHtzZWxlY3RpbmdEYXRlOmV9KSxhLnByb3BzLm9uRGF5TW91c2VFbnRlciYmYS5wcm9wcy5vbkRheU1vdXNlRW50ZXIoZSl9KSksbXQoYnQoYSksXCJoYW5kbGVNb250aE1vdXNlTGVhdmVcIiwoZnVuY3Rpb24oKXthLnNldFN0YXRlKHtzZWxlY3RpbmdEYXRlOm51bGx9KSxhLnByb3BzLm9uTW9udGhNb3VzZUxlYXZlJiZhLnByb3BzLm9uTW9udGhNb3VzZUxlYXZlKCl9KSksbXQoYnQoYSksXCJoYW5kbGVZZWFyQ2hhbmdlXCIsKGZ1bmN0aW9uKGUpe2EucHJvcHMub25ZZWFyQ2hhbmdlJiZhLnByb3BzLm9uWWVhckNoYW5nZShlKSxhLnByb3BzLmFkanVzdERhdGVPbkNoYW5nZSYmKGEucHJvcHMub25TZWxlY3QmJmEucHJvcHMub25TZWxlY3QoZSksYS5wcm9wcy5zZXRPcGVuJiZhLnByb3BzLnNldE9wZW4oITApKSxhLnByb3BzLnNldFByZVNlbGVjdGlvbiYmYS5wcm9wcy5zZXRQcmVTZWxlY3Rpb24oZSl9KSksbXQoYnQoYSksXCJoYW5kbGVNb250aENoYW5nZVwiLChmdW5jdGlvbihlKXthLnByb3BzLm9uTW9udGhDaGFuZ2UmJmEucHJvcHMub25Nb250aENoYW5nZShlKSxhLnByb3BzLmFkanVzdERhdGVPbkNoYW5nZSYmKGEucHJvcHMub25TZWxlY3QmJmEucHJvcHMub25TZWxlY3QoZSksYS5wcm9wcy5zZXRPcGVuJiZhLnByb3BzLnNldE9wZW4oITApKSxhLnByb3BzLnNldFByZVNlbGVjdGlvbiYmYS5wcm9wcy5zZXRQcmVTZWxlY3Rpb24oZSl9KSksbXQoYnQoYSksXCJoYW5kbGVNb250aFllYXJDaGFuZ2VcIiwoZnVuY3Rpb24oZSl7YS5oYW5kbGVZZWFyQ2hhbmdlKGUpLGEuaGFuZGxlTW9udGhDaGFuZ2UoZSl9KSksbXQoYnQoYSksXCJjaGFuZ2VZZWFyXCIsKGZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoKGZ1bmN0aW9uKHQpe3ZhciByPXQuZGF0ZTtyZXR1cm57ZGF0ZTpXZS5kZWZhdWx0KHIsZSl9fSksKGZ1bmN0aW9uKCl7cmV0dXJuIGEuaGFuZGxlWWVhckNoYW5nZShhLnN0YXRlLmRhdGUpfSkpfSkpLG10KGJ0KGEpLFwiY2hhbmdlTW9udGhcIiwoZnVuY3Rpb24oZSl7YS5zZXRTdGF0ZSgoZnVuY3Rpb24odCl7dmFyIHI9dC5kYXRlO3JldHVybntkYXRlOnFlLmRlZmF1bHQocixlKX19KSwoZnVuY3Rpb24oKXtyZXR1cm4gYS5oYW5kbGVNb250aENoYW5nZShhLnN0YXRlLmRhdGUpfSkpfSkpLG10KGJ0KGEpLFwiY2hhbmdlTW9udGhZZWFyXCIsKGZ1bmN0aW9uKGUpe2Euc2V0U3RhdGUoKGZ1bmN0aW9uKHQpe3ZhciByPXQuZGF0ZTtyZXR1cm57ZGF0ZTpXZS5kZWZhdWx0KHFlLmRlZmF1bHQocixZZS5kZWZhdWx0KGUpKSxUZS5kZWZhdWx0KGUpKX19KSwoZnVuY3Rpb24oKXtyZXR1cm4gYS5oYW5kbGVNb250aFllYXJDaGFuZ2UoYS5zdGF0ZS5kYXRlKX0pKX0pKSxtdChidChhKSxcImhlYWRlclwiLChmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTphLnN0YXRlLmRhdGUsdD1XdChlLGEucHJvcHMubG9jYWxlKSxyPVtdO3JldHVybiBhLnByb3BzLnNob3dXZWVrTnVtYmVycyYmci5wdXNoKGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6XCJXXCIsY2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fZGF5LW5hbWVcIn0sYS5wcm9wcy53ZWVrTGFiZWx8fFwiI1wiKSksci5jb25jYXQoWzAsMSwyLDMsNCw1LDZdLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHI9dmUuZGVmYXVsdCh0LGUpLG49YS5mb3JtYXRXZWVrZGF5KHIsYS5wcm9wcy5sb2NhbGUpLG89YS5wcm9wcy53ZWVrRGF5Q2xhc3NOYW1lP2EucHJvcHMud2Vla0RheUNsYXNzTmFtZShyKTp2b2lkIDA7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6ZSxjbGFzc05hbWU6Y2UuZGVmYXVsdChcInJlYWN0LWRhdGVwaWNrZXJfX2RheS1uYW1lXCIsbyl9LG4pfSkpKX0pKSxtdChidChhKSxcImZvcm1hdFdlZWtkYXlcIiwoZnVuY3Rpb24oZSx0KXtyZXR1cm4gYS5wcm9wcy5mb3JtYXRXZWVrRGF5P2Z1bmN0aW9uKGUsdCxyKXtyZXR1cm4gdChMdChlLFwiRUVFRVwiLHIpKX0oZSxhLnByb3BzLmZvcm1hdFdlZWtEYXksdCk6YS5wcm9wcy51c2VXZWVrZGF5c1Nob3J0P2Z1bmN0aW9uKGUsdCl7cmV0dXJuIEx0KGUsXCJFRUVcIix0KX0oZSx0KTpmdW5jdGlvbihlLHQpe3JldHVybiBMdChlLFwiRUVFRUVFXCIsdCl9KGUsdCl9KSksbXQoYnQoYSksXCJkZWNyZWFzZVllYXJcIiwoZnVuY3Rpb24oKXthLnNldFN0YXRlKChmdW5jdGlvbihlKXt2YXIgdD1lLmRhdGU7cmV0dXJue2RhdGU6U2UuZGVmYXVsdCh0LGEucHJvcHMuc2hvd1llYXJQaWNrZXI/YS5wcm9wcy55ZWFySXRlbU51bWJlcjoxKX19KSwoZnVuY3Rpb24oKXtyZXR1cm4gYS5oYW5kbGVZZWFyQ2hhbmdlKGEuc3RhdGUuZGF0ZSl9KSl9KSksbXQoYnQoYSksXCJyZW5kZXJQcmV2aW91c0J1dHRvblwiLChmdW5jdGlvbigpe2lmKCFhLnByb3BzLnJlbmRlckN1c3RvbUhlYWRlcil7dmFyIGU7c3dpdGNoKCEwKXtjYXNlIGEucHJvcHMuc2hvd01vbnRoWWVhclBpY2tlcjplPWhyKGEuc3RhdGUuZGF0ZSxhLnByb3BzKTticmVhaztjYXNlIGEucHJvcHMuc2hvd1llYXJQaWNrZXI6ZT1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj10Lm1pbkRhdGUsYT10LnllYXJJdGVtTnVtYmVyLG49dm9pZCAwPT09YT9PdDphLG89Z3IoanQoU2UuZGVmYXVsdChlLG4pKSxuKS5lbmRQZXJpb2Qscz1yJiZUZS5kZWZhdWx0KHIpO3JldHVybiBzJiZzPm98fCExfShhLnN0YXRlLmRhdGUsYS5wcm9wcyk7YnJlYWs7ZGVmYXVsdDplPXVyKGEuc3RhdGUuZGF0ZSxhLnByb3BzKX1pZigoYS5wcm9wcy5mb3JjZVNob3dNb250aE5hdmlnYXRpb258fGEucHJvcHMuc2hvd0Rpc2FibGVkTW9udGhOYXZpZ2F0aW9ufHwhZSkmJiFhLnByb3BzLnNob3dUaW1lU2VsZWN0T25seSl7dmFyIHQ9W1wicmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvblwiLFwicmVhY3QtZGF0ZXBpY2tlcl9fbmF2aWdhdGlvbi0tcHJldmlvdXNcIl0scj1hLmRlY3JlYXNlTW9udGg7KGEucHJvcHMuc2hvd01vbnRoWWVhclBpY2tlcnx8YS5wcm9wcy5zaG93UXVhcnRlclllYXJQaWNrZXJ8fGEucHJvcHMuc2hvd1llYXJQaWNrZXIpJiYocj1hLmRlY3JlYXNlWWVhciksZSYmYS5wcm9wcy5zaG93RGlzYWJsZWRNb250aE5hdmlnYXRpb24mJih0LnB1c2goXCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1wcmV2aW91cy0tZGlzYWJsZWRcIikscj1udWxsKTt2YXIgbj1hLnByb3BzLnNob3dNb250aFllYXJQaWNrZXJ8fGEucHJvcHMuc2hvd1F1YXJ0ZXJZZWFyUGlja2VyfHxhLnByb3BzLnNob3dZZWFyUGlja2VyLG89YS5wcm9wcyxzPW8ucHJldmlvdXNNb250aEFyaWFMYWJlbCxpPXZvaWQgMD09PXM/XCJQcmV2aW91cyBNb250aFwiOnMscD1vLnByZXZpb3VzWWVhckFyaWFMYWJlbCxsPXZvaWQgMD09PXA/XCJQcmV2aW91cyBZZWFyXCI6cDtyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse3R5cGU6XCJidXR0b25cIixjbGFzc05hbWU6dC5qb2luKFwiIFwiKSxvbkNsaWNrOnIsXCJhcmlhLWxhYmVsXCI6bj9sOml9LG4/YS5wcm9wcy5wcmV2aW91c1llYXJCdXR0b25MYWJlbDphLnByb3BzLnByZXZpb3VzTW9udGhCdXR0b25MYWJlbCl9fX0pKSxtdChidChhKSxcImluY3JlYXNlWWVhclwiLChmdW5jdGlvbigpe2Euc2V0U3RhdGUoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZGF0ZTtyZXR1cm57ZGF0ZTprZS5kZWZhdWx0KHQsYS5wcm9wcy5zaG93WWVhclBpY2tlcj9hLnByb3BzLnllYXJJdGVtTnVtYmVyOjEpfX0pLChmdW5jdGlvbigpe3JldHVybiBhLmhhbmRsZVllYXJDaGFuZ2UoYS5zdGF0ZS5kYXRlKX0pKX0pKSxtdChidChhKSxcInJlbmRlck5leHRCdXR0b25cIiwoZnVuY3Rpb24oKXtpZighYS5wcm9wcy5yZW5kZXJDdXN0b21IZWFkZXIpe3ZhciBlO3N3aXRjaCghMCl7Y2FzZSBhLnByb3BzLnNob3dNb250aFllYXJQaWNrZXI6ZT1tcihhLnN0YXRlLmRhdGUsYS5wcm9wcyk7YnJlYWs7Y2FzZSBhLnByb3BzLnNob3dZZWFyUGlja2VyOmU9ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LHI9dC5tYXhEYXRlLGE9dC55ZWFySXRlbU51bWJlcixuPXZvaWQgMD09PWE/T3Q6YSxvPWdyKGtlLmRlZmF1bHQoZSxuKSxuKS5zdGFydFBlcmlvZCxzPXImJlRlLmRlZmF1bHQocik7cmV0dXJuIHMmJnM8b3x8ITF9KGEuc3RhdGUuZGF0ZSxhLnByb3BzKTticmVhaztkZWZhdWx0OmU9ZnIoYS5zdGF0ZS5kYXRlLGEucHJvcHMpfWlmKChhLnByb3BzLmZvcmNlU2hvd01vbnRoTmF2aWdhdGlvbnx8YS5wcm9wcy5zaG93RGlzYWJsZWRNb250aE5hdmlnYXRpb258fCFlKSYmIWEucHJvcHMuc2hvd1RpbWVTZWxlY3RPbmx5KXt2YXIgdD1bXCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uXCIsXCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0XCJdO2EucHJvcHMuc2hvd1RpbWVTZWxlY3QmJnQucHVzaChcInJlYWN0LWRhdGVwaWNrZXJfX25hdmlnYXRpb24tLW5leHQtLXdpdGgtdGltZVwiKSxhLnByb3BzLnRvZGF5QnV0dG9uJiZ0LnB1c2goXCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS13aXRoLXRvZGF5LWJ1dHRvblwiKTt2YXIgcj1hLmluY3JlYXNlTW9udGg7KGEucHJvcHMuc2hvd01vbnRoWWVhclBpY2tlcnx8YS5wcm9wcy5zaG93UXVhcnRlclllYXJQaWNrZXJ8fGEucHJvcHMuc2hvd1llYXJQaWNrZXIpJiYocj1hLmluY3JlYXNlWWVhciksZSYmYS5wcm9wcy5zaG93RGlzYWJsZWRNb250aE5hdmlnYXRpb24mJih0LnB1c2goXCJyZWFjdC1kYXRlcGlja2VyX19uYXZpZ2F0aW9uLS1uZXh0LS1kaXNhYmxlZFwiKSxyPW51bGwpO3ZhciBuPWEucHJvcHMuc2hvd01vbnRoWWVhclBpY2tlcnx8YS5wcm9wcy5zaG93UXVhcnRlclllYXJQaWNrZXJ8fGEucHJvcHMuc2hvd1llYXJQaWNrZXIsbz1hLnByb3BzLHM9by5uZXh0TW9udGhBcmlhTGFiZWwsaT12b2lkIDA9PT1zP1wiTmV4dCBNb250aFwiOnMscD1vLm5leHRZZWFyQXJpYUxhYmVsLGw9dm9pZCAwPT09cD9cIk5leHQgWWVhclwiOnA7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHt0eXBlOlwiYnV0dG9uXCIsY2xhc3NOYW1lOnQuam9pbihcIiBcIiksb25DbGljazpyLFwiYXJpYS1sYWJlbFwiOm4/bDppfSxuP2EucHJvcHMubmV4dFllYXJCdXR0b25MYWJlbDphLnByb3BzLm5leHRNb250aEJ1dHRvbkxhYmVsKX19fSkpLG10KGJ0KGEpLFwicmVuZGVyQ3VycmVudE1vbnRoXCIsKGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmEuc3RhdGUuZGF0ZSx0PVtcInJlYWN0LWRhdGVwaWNrZXJfX2N1cnJlbnQtbW9udGhcIl07cmV0dXJuIGEucHJvcHMuc2hvd1llYXJEcm9wZG93biYmdC5wdXNoKFwicmVhY3QtZGF0ZXBpY2tlcl9fY3VycmVudC1tb250aC0taGFzWWVhckRyb3Bkb3duXCIpLGEucHJvcHMuc2hvd01vbnRoRHJvcGRvd24mJnQucHVzaChcInJlYWN0LWRhdGVwaWNrZXJfX2N1cnJlbnQtbW9udGgtLWhhc01vbnRoRHJvcGRvd25cIiksYS5wcm9wcy5zaG93TW9udGhZZWFyRHJvcGRvd24mJnQucHVzaChcInJlYWN0LWRhdGVwaWNrZXJfX2N1cnJlbnQtbW9udGgtLWhhc01vbnRoWWVhckRyb3Bkb3duXCIpLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6dC5qb2luKFwiIFwiKX0sTHQoZSxhLnByb3BzLmRhdGVGb3JtYXQsYS5wcm9wcy5sb2NhbGUpKX0pKSxtdChidChhKSxcInJlbmRlclllYXJEcm9wZG93blwiLChmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07aWYoYS5wcm9wcy5zaG93WWVhckRyb3Bkb3duJiYhZSlyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yLHthZGp1c3REYXRlT25DaGFuZ2U6YS5wcm9wcy5hZGp1c3REYXRlT25DaGFuZ2UsZGF0ZTphLnN0YXRlLmRhdGUsb25TZWxlY3Q6YS5wcm9wcy5vblNlbGVjdCxzZXRPcGVuOmEucHJvcHMuc2V0T3Blbixkcm9wZG93bk1vZGU6YS5wcm9wcy5kcm9wZG93bk1vZGUsb25DaGFuZ2U6YS5jaGFuZ2VZZWFyLG1pbkRhdGU6YS5wcm9wcy5taW5EYXRlLG1heERhdGU6YS5wcm9wcy5tYXhEYXRlLHllYXI6VGUuZGVmYXVsdChhLnN0YXRlLmRhdGUpLHNjcm9sbGFibGVZZWFyRHJvcGRvd246YS5wcm9wcy5zY3JvbGxhYmxlWWVhckRyb3Bkb3duLHllYXJEcm9wZG93bkl0ZW1OdW1iZXI6YS5wcm9wcy55ZWFyRHJvcGRvd25JdGVtTnVtYmVyfSl9KSksbXQoYnQoYSksXCJyZW5kZXJNb250aERyb3Bkb3duXCIsKGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihhLnByb3BzLnNob3dNb250aERyb3Bkb3duJiYhZSlyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEVyLHtkcm9wZG93bk1vZGU6YS5wcm9wcy5kcm9wZG93bk1vZGUsbG9jYWxlOmEucHJvcHMubG9jYWxlLG9uQ2hhbmdlOmEuY2hhbmdlTW9udGgsbW9udGg6WWUuZGVmYXVsdChhLnN0YXRlLmRhdGUpLHVzZVNob3J0TW9udGhJbkRyb3Bkb3duOmEucHJvcHMudXNlU2hvcnRNb250aEluRHJvcGRvd259KX0pKSxtdChidChhKSxcInJlbmRlck1vbnRoWWVhckRyb3Bkb3duXCIsKGZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihhLnByb3BzLnNob3dNb250aFllYXJEcm9wZG93biYmIWUpcmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh4cix7ZHJvcGRvd25Nb2RlOmEucHJvcHMuZHJvcGRvd25Nb2RlLGxvY2FsZTphLnByb3BzLmxvY2FsZSxkYXRlRm9ybWF0OmEucHJvcHMuZGF0ZUZvcm1hdCxvbkNoYW5nZTphLmNoYW5nZU1vbnRoWWVhcixtaW5EYXRlOmEucHJvcHMubWluRGF0ZSxtYXhEYXRlOmEucHJvcHMubWF4RGF0ZSxkYXRlOmEuc3RhdGUuZGF0ZSxzY3JvbGxhYmxlTW9udGhZZWFyRHJvcGRvd246YS5wcm9wcy5zY3JvbGxhYmxlTW9udGhZZWFyRHJvcGRvd259KX0pKSxtdChidChhKSxcInJlbmRlclRvZGF5QnV0dG9uXCIsKGZ1bmN0aW9uKCl7aWYoYS5wcm9wcy50b2RheUJ1dHRvbiYmIWEucHJvcHMuc2hvd1RpbWVTZWxlY3RPbmx5KXJldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fdG9kYXktYnV0dG9uXCIsb25DbGljazpmdW5jdGlvbihlKXtyZXR1cm4gYS5wcm9wcy5vblNlbGVjdChWZS5kZWZhdWx0KHh0KCkpLGUpfX0sYS5wcm9wcy50b2RheUJ1dHRvbil9KSksbXQoYnQoYSksXCJyZW5kZXJEZWZhdWx0SGVhZGVyXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWUubW9udGhEYXRlLHI9ZS5pO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyIFwiLmNvbmNhdChhLnByb3BzLnNob3dUaW1lU2VsZWN0P1wicmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyLS1oYXMtdGltZS1zZWxlY3RcIjpcIlwiKX0sYS5yZW5kZXJDdXJyZW50TW9udGgodCksZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlcl9fZHJvcGRvd24gcmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyX19kcm9wZG93bi0tXCIuY29uY2F0KGEucHJvcHMuZHJvcGRvd25Nb2RlKSxvbkZvY3VzOmEuaGFuZGxlRHJvcGRvd25Gb2N1c30sYS5yZW5kZXJNb250aERyb3Bkb3duKDAhPT1yKSxhLnJlbmRlck1vbnRoWWVhckRyb3Bkb3duKDAhPT1yKSxhLnJlbmRlclllYXJEcm9wZG93bigwIT09cikpLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZXNcIn0sYS5oZWFkZXIodCkpKX0pKSxtdChidChhKSxcInJlbmRlckN1c3RvbUhlYWRlclwiLChmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWUubW9udGhEYXRlLHI9ZS5pO2lmKGEucHJvcHMuc2hvd1RpbWVTZWxlY3QmJiFhLnN0YXRlLm1vbnRoQ29udGFpbmVyfHxhLnByb3BzLnNob3dUaW1lU2VsZWN0T25seSlyZXR1cm4gbnVsbDt2YXIgbj11cihhLnN0YXRlLmRhdGUsYS5wcm9wcyksbz1mcihhLnN0YXRlLmRhdGUsYS5wcm9wcykscz1ocihhLnN0YXRlLmRhdGUsYS5wcm9wcyksaT1tcihhLnN0YXRlLmRhdGUsYS5wcm9wcykscD0hYS5wcm9wcy5zaG93TW9udGhZZWFyUGlja2VyJiYhYS5wcm9wcy5zaG93UXVhcnRlclllYXJQaWNrZXImJiFhLnByb3BzLnNob3dZZWFyUGlja2VyO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyIHJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlci0tY3VzdG9tXCIsb25Gb2N1czphLnByb3BzLm9uRHJvcGRvd25Gb2N1c30sYS5wcm9wcy5yZW5kZXJDdXN0b21IZWFkZXIoRHQoRHQoe30sYS5zdGF0ZSkse30se2N1c3RvbUhlYWRlckNvdW50OnIsY2hhbmdlTW9udGg6YS5jaGFuZ2VNb250aCxjaGFuZ2VZZWFyOmEuY2hhbmdlWWVhcixkZWNyZWFzZU1vbnRoOmEuZGVjcmVhc2VNb250aCxpbmNyZWFzZU1vbnRoOmEuaW5jcmVhc2VNb250aCxkZWNyZWFzZVllYXI6YS5kZWNyZWFzZVllYXIsaW5jcmVhc2VZZWFyOmEuaW5jcmVhc2VZZWFyLHByZXZNb250aEJ1dHRvbkRpc2FibGVkOm4sbmV4dE1vbnRoQnV0dG9uRGlzYWJsZWQ6byxwcmV2WWVhckJ1dHRvbkRpc2FibGVkOnMsbmV4dFllYXJCdXR0b25EaXNhYmxlZDppfSkpLHAmJmRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19kYXktbmFtZXNcIn0sYS5oZWFkZXIodCkpKX0pKSxtdChidChhKSxcInJlbmRlclllYXJIZWFkZXJcIiwoZnVuY3Rpb24oKXt2YXIgZT1hLnN0YXRlLmRhdGUsdD1hLnByb3BzLHI9dC5zaG93WWVhclBpY2tlcixuPWdyKGUsdC55ZWFySXRlbU51bWJlciksbz1uLnN0YXJ0UGVyaW9kLHM9bi5lbmRQZXJpb2Q7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19oZWFkZXIgcmVhY3QtZGF0ZXBpY2tlci15ZWFyLWhlYWRlclwifSxyP1wiXCIuY29uY2F0KG8sXCIgLSBcIikuY29uY2F0KHMpOlRlLmRlZmF1bHQoZSkpfSkpLG10KGJ0KGEpLFwicmVuZGVySGVhZGVyXCIsKGZ1bmN0aW9uKGUpe3N3aXRjaCghMCl7Y2FzZSB2b2lkIDAhPT1hLnByb3BzLnJlbmRlckN1c3RvbUhlYWRlcjpyZXR1cm4gYS5yZW5kZXJDdXN0b21IZWFkZXIoZSk7Y2FzZSBhLnByb3BzLnNob3dNb250aFllYXJQaWNrZXJ8fGEucHJvcHMuc2hvd1F1YXJ0ZXJZZWFyUGlja2VyfHxhLnByb3BzLnNob3dZZWFyUGlja2VyOnJldHVybiBhLnJlbmRlclllYXJIZWFkZXIoZSk7ZGVmYXVsdDpyZXR1cm4gYS5yZW5kZXJEZWZhdWx0SGVhZGVyKGUpfX0pKSxtdChidChhKSxcInJlbmRlck1vbnRoc1wiLChmdW5jdGlvbigpe2lmKCFhLnByb3BzLnNob3dUaW1lU2VsZWN0T25seSYmIWEucHJvcHMuc2hvd1llYXJQaWNrZXIpe2Zvcih2YXIgZT1bXSx0PWEucHJvcHMuc2hvd1ByZXZpb3VzTW9udGhzP2EucHJvcHMubW9udGhzU2hvd24tMTowLHI9Q2UuZGVmYXVsdChhLnN0YXRlLmRhdGUsdCksbj0wO248YS5wcm9wcy5tb250aHNTaG93bjsrK24pe3ZhciBvPW4tYS5wcm9wcy5tb250aFNlbGVjdGVkSW4scz13ZS5kZWZhdWx0KHIsbyksaT1cIm1vbnRoLVwiLmNvbmNhdChuKSxwPW48YS5wcm9wcy5tb250aHNTaG93bi0xLGw9bj4wO2UucHVzaChkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7a2V5OmkscmVmOmZ1bmN0aW9uKGUpe2EubW9udGhDb250YWluZXI9ZX0sY2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fbW9udGgtY29udGFpbmVyXCJ9LGEucmVuZGVySGVhZGVyKHttb250aERhdGU6cyxpOm59KSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRnIse2Nob29zZURheUFyaWFMYWJlbFByZWZpeDphLnByb3BzLmNob29zZURheUFyaWFMYWJlbFByZWZpeCxkaXNhYmxlZERheUFyaWFMYWJlbFByZWZpeDphLnByb3BzLmRpc2FibGVkRGF5QXJpYUxhYmVsUHJlZml4LHdlZWtBcmlhTGFiZWxQcmVmaXg6YS5wcm9wcy53ZWVrQXJpYUxhYmVsUHJlZml4LG9uQ2hhbmdlOmEuY2hhbmdlTW9udGhZZWFyLGRheTpzLGRheUNsYXNzTmFtZTphLnByb3BzLmRheUNsYXNzTmFtZSxtb250aENsYXNzTmFtZTphLnByb3BzLm1vbnRoQ2xhc3NOYW1lLG9uRGF5Q2xpY2s6YS5oYW5kbGVEYXlDbGljayxoYW5kbGVPbktleURvd246YS5wcm9wcy5oYW5kbGVPbktleURvd24sb25EYXlNb3VzZUVudGVyOmEuaGFuZGxlRGF5TW91c2VFbnRlcixvbk1vdXNlTGVhdmU6YS5oYW5kbGVNb250aE1vdXNlTGVhdmUsb25XZWVrU2VsZWN0OmEucHJvcHMub25XZWVrU2VsZWN0LG9yZGVySW5EaXNwbGF5Om4sZm9ybWF0V2Vla051bWJlcjphLnByb3BzLmZvcm1hdFdlZWtOdW1iZXIsbG9jYWxlOmEucHJvcHMubG9jYWxlLG1pbkRhdGU6YS5wcm9wcy5taW5EYXRlLG1heERhdGU6YS5wcm9wcy5tYXhEYXRlLGV4Y2x1ZGVEYXRlczphLnByb3BzLmV4Y2x1ZGVEYXRlcyxoaWdobGlnaHREYXRlczphLnByb3BzLmhpZ2hsaWdodERhdGVzLHNlbGVjdGluZ0RhdGU6YS5zdGF0ZS5zZWxlY3RpbmdEYXRlLGluY2x1ZGVEYXRlczphLnByb3BzLmluY2x1ZGVEYXRlcyxpbmxpbmU6YS5wcm9wcy5pbmxpbmUsc2hvdWxkRm9jdXNEYXlJbmxpbmU6YS5wcm9wcy5zaG91bGRGb2N1c0RheUlubGluZSxmaXhlZEhlaWdodDphLnByb3BzLmZpeGVkSGVpZ2h0LGZpbHRlckRhdGU6YS5wcm9wcy5maWx0ZXJEYXRlLHByZVNlbGVjdGlvbjphLnByb3BzLnByZVNlbGVjdGlvbixzZXRQcmVTZWxlY3Rpb246YS5wcm9wcy5zZXRQcmVTZWxlY3Rpb24sc2VsZWN0ZWQ6YS5wcm9wcy5zZWxlY3RlZCxzZWxlY3RzU3RhcnQ6YS5wcm9wcy5zZWxlY3RzU3RhcnQsc2VsZWN0c0VuZDphLnByb3BzLnNlbGVjdHNFbmQsc2VsZWN0c1JhbmdlOmEucHJvcHMuc2VsZWN0c1JhbmdlLHNob3dXZWVrTnVtYmVyczphLnByb3BzLnNob3dXZWVrTnVtYmVycyxzdGFydERhdGU6YS5wcm9wcy5zdGFydERhdGUsZW5kRGF0ZTphLnByb3BzLmVuZERhdGUscGVla05leHRNb250aDphLnByb3BzLnBlZWtOZXh0TW9udGgsc2V0T3BlbjphLnByb3BzLnNldE9wZW4sc2hvdWxkQ2xvc2VPblNlbGVjdDphLnByb3BzLnNob3VsZENsb3NlT25TZWxlY3QscmVuZGVyRGF5Q29udGVudHM6YS5wcm9wcy5yZW5kZXJEYXlDb250ZW50cyxkaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbjphLnByb3BzLmRpc2FibGVkS2V5Ym9hcmROYXZpZ2F0aW9uLHNob3dNb250aFllYXJQaWNrZXI6YS5wcm9wcy5zaG93TW9udGhZZWFyUGlja2VyLHNob3dGdWxsTW9udGhZZWFyUGlja2VyOmEucHJvcHMuc2hvd0Z1bGxNb250aFllYXJQaWNrZXIsc2hvd1R3b0NvbHVtbk1vbnRoWWVhclBpY2tlcjphLnByb3BzLnNob3dUd29Db2x1bW5Nb250aFllYXJQaWNrZXIsc2hvd0ZvdXJDb2x1bW5Nb250aFllYXJQaWNrZXI6YS5wcm9wcy5zaG93Rm91ckNvbHVtbk1vbnRoWWVhclBpY2tlcixzaG93WWVhclBpY2tlcjphLnByb3BzLnNob3dZZWFyUGlja2VyLHNob3dRdWFydGVyWWVhclBpY2tlcjphLnByb3BzLnNob3dRdWFydGVyWWVhclBpY2tlcixpc0lucHV0Rm9jdXNlZDphLnByb3BzLmlzSW5wdXRGb2N1c2VkLGNvbnRhaW5lclJlZjphLmNvbnRhaW5lclJlZixtb250aFNob3dzRHVwbGljYXRlRGF5c0VuZDpwLG1vbnRoU2hvd3NEdXBsaWNhdGVEYXlzU3RhcnQ6bH0pKSl9cmV0dXJuIGV9fSkpLG10KGJ0KGEpLFwicmVuZGVyWWVhcnNcIiwoZnVuY3Rpb24oKXtpZighYS5wcm9wcy5zaG93VGltZVNlbGVjdE9ubHkpcmV0dXJuIGEucHJvcHMuc2hvd1llYXJQaWNrZXI/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3llYXItLWNvbnRhaW5lclwifSxhLnJlbmRlckhlYWRlcigpLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChxcix5dCh7b25EYXlDbGljazphLmhhbmRsZURheUNsaWNrLGRhdGU6YS5zdGF0ZS5kYXRlfSxhLnByb3BzKSkpOnZvaWQgMH0pKSxtdChidChhKSxcInJlbmRlclRpbWVTZWN0aW9uXCIsKGZ1bmN0aW9uKCl7aWYoYS5wcm9wcy5zaG93VGltZVNlbGVjdCYmKGEuc3RhdGUubW9udGhDb250YWluZXJ8fGEucHJvcHMuc2hvd1RpbWVTZWxlY3RPbmx5KSlyZXR1cm4gZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJyLHtzZWxlY3RlZDphLnByb3BzLnNlbGVjdGVkLG9wZW5Ub0RhdGU6YS5wcm9wcy5vcGVuVG9EYXRlLG9uQ2hhbmdlOmEucHJvcHMub25UaW1lQ2hhbmdlLHRpbWVDbGFzc05hbWU6YS5wcm9wcy50aW1lQ2xhc3NOYW1lLGZvcm1hdDphLnByb3BzLnRpbWVGb3JtYXQsaW5jbHVkZVRpbWVzOmEucHJvcHMuaW5jbHVkZVRpbWVzLGludGVydmFsczphLnByb3BzLnRpbWVJbnRlcnZhbHMsbWluVGltZTphLnByb3BzLm1pblRpbWUsbWF4VGltZTphLnByb3BzLm1heFRpbWUsZXhjbHVkZVRpbWVzOmEucHJvcHMuZXhjbHVkZVRpbWVzLGZpbHRlclRpbWU6YS5wcm9wcy5maWx0ZXJUaW1lLHRpbWVDYXB0aW9uOmEucHJvcHMudGltZUNhcHRpb24sdG9kYXlCdXR0b246YS5wcm9wcy50b2RheUJ1dHRvbixzaG93TW9udGhEcm9wZG93bjphLnByb3BzLnNob3dNb250aERyb3Bkb3duLHNob3dNb250aFllYXJEcm9wZG93bjphLnByb3BzLnNob3dNb250aFllYXJEcm9wZG93bixzaG93WWVhckRyb3Bkb3duOmEucHJvcHMuc2hvd1llYXJEcm9wZG93bix3aXRoUG9ydGFsOmEucHJvcHMud2l0aFBvcnRhbCxtb250aFJlZjphLnN0YXRlLm1vbnRoQ29udGFpbmVyLGluamVjdFRpbWVzOmEucHJvcHMuaW5qZWN0VGltZXMsbG9jYWxlOmEucHJvcHMubG9jYWxlLHNob3dUaW1lU2VsZWN0T25seTphLnByb3BzLnNob3dUaW1lU2VsZWN0T25seX0pfSkpLG10KGJ0KGEpLFwicmVuZGVySW5wdXRUaW1lU2VjdGlvblwiLChmdW5jdGlvbigpe3ZhciBlPW5ldyBEYXRlKGEucHJvcHMuc2VsZWN0ZWQpLHQ9SXQoZSkmJkJvb2xlYW4oYS5wcm9wcy5zZWxlY3RlZCk/XCJcIi5jb25jYXQoa3IoZS5nZXRIb3VycygpKSxcIjpcIikuY29uY2F0KGtyKGUuZ2V0TWludXRlcygpKSk6XCJcIjtpZihhLnByb3BzLnNob3dUaW1lSW5wdXQpcmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcix7ZGF0ZTplLHRpbWVTdHJpbmc6dCx0aW1lSW5wdXRMYWJlbDphLnByb3BzLnRpbWVJbnB1dExhYmVsLG9uQ2hhbmdlOmEucHJvcHMub25UaW1lQ2hhbmdlLGN1c3RvbVRpbWVJbnB1dDphLnByb3BzLmN1c3RvbVRpbWVJbnB1dH0pfSkpLGEuY29udGFpbmVyUmVmPWRlLmRlZmF1bHQuY3JlYXRlUmVmKCksYS5zdGF0ZT17ZGF0ZTphLmdldERhdGVJblZpZXcoKSxzZWxlY3RpbmdEYXRlOm51bGwsbW9udGhDb250YWluZXI6bnVsbH0sYX1yZXR1cm4gaHQocixbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3RoaXMucHJvcHMuc2hvd1RpbWVTZWxlY3QmJih0aGlzLmFzc2lnbk1vbnRoQ29udGFpbmVyPXZvaWQgZS5zZXRTdGF0ZSh7bW9udGhDb250YWluZXI6ZS5tb250aENvbnRhaW5lcn0pKX19LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnByb3BzLnByZVNlbGVjdGlvbiYmIVV0KHRoaXMucHJvcHMucHJlU2VsZWN0aW9uLGUucHJlU2VsZWN0aW9uKT90aGlzLnNldFN0YXRlKHtkYXRlOnRoaXMucHJvcHMucHJlU2VsZWN0aW9ufSk6dGhpcy5wcm9wcy5vcGVuVG9EYXRlJiYhVXQodGhpcy5wcm9wcy5vcGVuVG9EYXRlLGUub3BlblRvRGF0ZSkmJnRoaXMuc2V0U3RhdGUoe2RhdGU6dGhpcy5wcm9wcy5vcGVuVG9EYXRlfSl9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLmNvbnRhaW5lcnx8V3I7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6dGhpcy5jb250YWluZXJSZWZ9LGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChlLHtjbGFzc05hbWU6Y2UuZGVmYXVsdChcInJlYWN0LWRhdGVwaWNrZXJcIix0aGlzLnByb3BzLmNsYXNzTmFtZSx7XCJyZWFjdC1kYXRlcGlja2VyLS10aW1lLW9ubHlcIjp0aGlzLnByb3BzLnNob3dUaW1lU2VsZWN0T25seX0pLHNob3dQb3BwZXJBcnJvdzp0aGlzLnByb3BzLnNob3dQb3BwZXJBcnJvdyxhcnJvd1Byb3BzOnRoaXMucHJvcHMuYXJyb3dQcm9wc30sdGhpcy5yZW5kZXJQcmV2aW91c0J1dHRvbigpLHRoaXMucmVuZGVyTmV4dEJ1dHRvbigpLHRoaXMucmVuZGVyTW9udGhzKCksdGhpcy5yZW5kZXJZZWFycygpLHRoaXMucmVuZGVyVG9kYXlCdXR0b24oKSx0aGlzLnJlbmRlclRpbWVTZWN0aW9uKCksdGhpcy5yZW5kZXJJbnB1dFRpbWVTZWN0aW9uKCksdGhpcy5wcm9wcy5jaGlsZHJlbikpfX1dLFt7a2V5OlwiZGVmYXVsdFByb3BzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJue29uRHJvcGRvd25Gb2N1czpmdW5jdGlvbigpe30sbW9udGhzU2hvd246MSxtb250aFNlbGVjdGVkSW46MCxmb3JjZVNob3dNb250aE5hdmlnYXRpb246ITEsdGltZUNhcHRpb246XCJUaW1lXCIscHJldmlvdXNZZWFyQnV0dG9uTGFiZWw6XCJQcmV2aW91cyBZZWFyXCIsbmV4dFllYXJCdXR0b25MYWJlbDpcIk5leHQgWWVhclwiLHByZXZpb3VzTW9udGhCdXR0b25MYWJlbDpcIlByZXZpb3VzIE1vbnRoXCIsbmV4dE1vbnRoQnV0dG9uTGFiZWw6XCJOZXh0IE1vbnRoXCIsY3VzdG9tVGltZUlucHV0Om51bGwseWVhckl0ZW1OdW1iZXI6T3R9fX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksSHI9ZnVuY3Rpb24oZSl7cmV0dXJuIWUuZGlzYWJsZWQmJi0xIT09ZS50YWJJbmRleH0sS3I9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKGUpe3ZhciBhO3JldHVybiB1dCh0aGlzLHIpLG10KGJ0KGE9dC5jYWxsKHRoaXMsZSkpLFwiZ2V0VGFiQ2hpbGRyZW5cIiwoZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYS50YWJMb29wUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChcIlt0YWJpbmRleF0sIGEsIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIiksMSwtMSkuZmlsdGVyKEhyKX0pKSxtdChidChhKSxcImhhbmRsZUZvY3VzU3RhcnRcIiwoZnVuY3Rpb24oZSl7dmFyIHQ9YS5nZXRUYWJDaGlsZHJlbigpO3QmJnQubGVuZ3RoPjEmJnRbdC5sZW5ndGgtMV0uZm9jdXMoKX0pKSxtdChidChhKSxcImhhbmRsZUZvY3VzRW5kXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWEuZ2V0VGFiQ2hpbGRyZW4oKTt0JiZ0Lmxlbmd0aD4xJiZ0WzBdLmZvY3VzKCl9KSksYS50YWJMb29wUmVmPWRlLmRlZmF1bHQuY3JlYXRlUmVmKCksYX1yZXR1cm4gaHQocixbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMuZW5hYmxlVGFiTG9vcD9kZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fdGFiLWxvb3BcIixyZWY6dGhpcy50YWJMb29wUmVmfSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlcl9fdGFiLWxvb3BfX3N0YXJ0XCIsdGFiSW5kZXg6XCIwXCIsb25Gb2N1czp0aGlzLmhhbmRsZUZvY3VzU3RhcnR9KSx0aGlzLnByb3BzLmNoaWxkcmVuLGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX190YWItbG9vcF9fZW5kXCIsdGFiSW5kZXg6XCIwXCIsb25Gb2N1czp0aGlzLmhhbmRsZUZvY3VzRW5kfSkpOnRoaXMucHJvcHMuY2hpbGRyZW59fV0sW3trZXk6XCJkZWZhdWx0UHJvcHNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57ZW5hYmxlVGFiTG9vcDohMH19fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxRcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoZSl7dmFyIGE7cmV0dXJuIHV0KHRoaXMsciksKGE9dC5jYWxsKHRoaXMsZSkpLmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYX1yZXR1cm4gaHQocixbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnBvcnRhbFJvb3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5wb3J0YWxJZCksdGhpcy5wb3J0YWxSb290fHwodGhpcy5wb3J0YWxSb290PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5wb3J0YWxSb290LnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5wcm9wcy5wb3J0YWxJZCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcnRhbFJvb3QpKSx0aGlzLnBvcnRhbFJvb3QuYXBwZW5kQ2hpbGQodGhpcy5lbCl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucG9ydGFsUm9vdC5yZW1vdmVDaGlsZCh0aGlzLmVsKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkdC5kZWZhdWx0LmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLHRoaXMuZWwpfX1dKSxyfShkZS5kZWZhdWx0LkNvbXBvbmVudCksVnI9ZnVuY3Rpb24oZSl7d3QocixlKTt2YXIgdD1TdChyKTtmdW5jdGlvbiByKCl7cmV0dXJuIHV0KHRoaXMsciksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGh0KHIsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5wcm9wcyxyPXQuY2xhc3NOYW1lLGE9dC53cmFwcGVyQ2xhc3NOYW1lLG49dC5oaWRlUG9wcGVyLG89dC5wb3BwZXJDb21wb25lbnQscz10LnBvcHBlck1vZGlmaWVycyxpPXQucG9wcGVyUGxhY2VtZW50LHA9dC5wb3BwZXJQcm9wcyxsPXQudGFyZ2V0Q29tcG9uZW50LGQ9dC5lbmFibGVUYWJMb29wLGM9dC5wb3BwZXJPbktleURvd24sdT10LnBvcnRhbElkO2lmKCFuKXt2YXIgZj1jZS5kZWZhdWx0KFwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIixyKTtlPWRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpZS5Qb3BwZXIseXQoe21vZGlmaWVyczpzLHBsYWNlbWVudDppfSxwKSwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZWYscj1lLnN0eWxlLGE9ZS5wbGFjZW1lbnQsbj1lLmFycm93UHJvcHM7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChLcix7ZW5hYmxlVGFiTG9vcDpkfSxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOnQsc3R5bGU6cixjbGFzc05hbWU6ZixcImRhdGEtcGxhY2VtZW50XCI6YSxvbktleURvd246Y30sZGUuZGVmYXVsdC5jbG9uZUVsZW1lbnQobyx7YXJyb3dQcm9wczpufSkpKX0pKX10aGlzLnByb3BzLnBvcHBlckNvbnRhaW5lciYmKGU9ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMucG9wcGVyQ29udGFpbmVyLHt9LGUpKSx1JiYhbiYmKGU9ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFFyLHtwb3J0YWxJZDp1fSxlKSk7dmFyIGg9Y2UuZGVmYXVsdChcInJlYWN0LWRhdGVwaWNrZXItd3JhcHBlclwiLGEpO3JldHVybiBkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoaWUuTWFuYWdlcix7Y2xhc3NOYW1lOlwicmVhY3QtZGF0ZXBpY2tlci1tYW5hZ2VyXCJ9LGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChpZS5SZWZlcmVuY2UsbnVsbCwoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZWY7cmV0dXJuIGRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtyZWY6dCxjbGFzc05hbWU6aH0sbCl9KSksZSl9fV0sW3trZXk6XCJkZWZhdWx0UHJvcHNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57aGlkZVBvcHBlcjohMCxwb3BwZXJNb2RpZmllcnM6e3ByZXZlbnRPdmVyZmxvdzp7ZW5hYmxlZDohMCxlc2NhcGVXaXRoUmVmZXJlbmNlOiEwLGJvdW5kYXJpZXNFbGVtZW50Olwidmlld3BvcnRcIn19LHBvcHBlclByb3BzOnt9LHBvcHBlclBsYWNlbWVudDpcImJvdHRvbS1zdGFydFwifX19XSkscn0oZGUuZGVmYXVsdC5Db21wb25lbnQpLFVyPVwicmVhY3QtZGF0ZXBpY2tlci1pZ25vcmUtb25jbGlja291dHNpZGVcIiwkcj1sdC5kZWZhdWx0KGpyKTt2YXIgenI9XCJEYXRlIGlucHV0IG5vdCB2YWxpZC5cIixHcj1mdW5jdGlvbihlKXt3dChyLGUpO3ZhciB0PVN0KHIpO2Z1bmN0aW9uIHIoZSl7dmFyIGE7cmV0dXJuIHV0KHRoaXMsciksbXQoYnQoYT10LmNhbGwodGhpcyxlKSksXCJnZXRQcmVTZWxlY3Rpb25cIiwoZnVuY3Rpb24oKXtyZXR1cm4gYS5wcm9wcy5vcGVuVG9EYXRlP2EucHJvcHMub3BlblRvRGF0ZTphLnByb3BzLnNlbGVjdHNFbmQmJmEucHJvcHMuc3RhcnREYXRlP2EucHJvcHMuc3RhcnREYXRlOmEucHJvcHMuc2VsZWN0c1N0YXJ0JiZhLnByb3BzLmVuZERhdGU/YS5wcm9wcy5lbmREYXRlOnh0KCl9KSksbXQoYnQoYSksXCJjYWxjSW5pdGlhbFN0YXRlXCIsKGZ1bmN0aW9uKCl7dmFyIGU9YS5nZXRQcmVTZWxlY3Rpb24oKSx0PXlyKGEucHJvcHMpLHI9dnIoYS5wcm9wcyksbj10JiZudC5kZWZhdWx0KGUsVmUuZGVmYXVsdCh0KSk/dDpyJiZhdC5kZWZhdWx0KGUsSmUuZGVmYXVsdChyKSk/cjplO3JldHVybntvcGVuOmEucHJvcHMuc3RhcnRPcGVufHwhMSxwcmV2ZW50Rm9jdXM6ITEscHJlU2VsZWN0aW9uOmEucHJvcHMuc2VsZWN0ZWQ/YS5wcm9wcy5zZWxlY3RlZDpuLGhpZ2hsaWdodERhdGVzOkRyKGEucHJvcHMuaGlnaGxpZ2h0RGF0ZXMpLGZvY3VzZWQ6ITEsc2hvdWxkRm9jdXNEYXlJbmxpbmU6ITF9fSkpLG10KGJ0KGEpLFwiY2xlYXJQcmV2ZW50Rm9jdXNUaW1lb3V0XCIsKGZ1bmN0aW9uKCl7YS5wcmV2ZW50Rm9jdXNUaW1lb3V0JiZjbGVhclRpbWVvdXQoYS5wcmV2ZW50Rm9jdXNUaW1lb3V0KX0pKSxtdChidChhKSxcInNldEZvY3VzXCIsKGZ1bmN0aW9uKCl7YS5pbnB1dCYmYS5pbnB1dC5mb2N1cyYmYS5pbnB1dC5mb2N1cyh7cHJldmVudFNjcm9sbDohMH0pfSkpLG10KGJ0KGEpLFwic2V0Qmx1clwiLChmdW5jdGlvbigpe2EuaW5wdXQmJmEuaW5wdXQuYmx1ciYmYS5pbnB1dC5ibHVyKCksYS5jYW5jZWxGb2N1c0lucHV0KCl9KSksbXQoYnQoYSksXCJzZXRPcGVuXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07YS5zZXRTdGF0ZSh7b3BlbjplLHByZVNlbGVjdGlvbjplJiZhLnN0YXRlLm9wZW4/YS5zdGF0ZS5wcmVTZWxlY3Rpb246YS5jYWxjSW5pdGlhbFN0YXRlKCkucHJlU2VsZWN0aW9uLGxhc3RQcmVTZWxlY3RDaGFuZ2U6WHJ9LChmdW5jdGlvbigpe2V8fGEuc2V0U3RhdGUoKGZ1bmN0aW9uKGUpe3JldHVybntmb2N1c2VkOiEhdCYmZS5mb2N1c2VkfX0pLChmdW5jdGlvbigpeyF0JiZhLnNldEJsdXIoKSxhLnNldFN0YXRlKHtpbnB1dFZhbHVlOm51bGx9KX0pKX0pKX0pKSxtdChidChhKSxcImlucHV0T2tcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdWUuZGVmYXVsdChhLnN0YXRlLnByZVNlbGVjdGlvbil9KSksbXQoYnQoYSksXCJpc0NhbGVuZGFyT3BlblwiLChmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1hLnByb3BzLm9wZW4/YS5zdGF0ZS5vcGVuJiYhYS5wcm9wcy5kaXNhYmxlZCYmIWEucHJvcHMucmVhZE9ubHk6YS5wcm9wcy5vcGVufSkpLG10KGJ0KGEpLFwiaGFuZGxlRm9jdXNcIiwoZnVuY3Rpb24oZSl7YS5zdGF0ZS5wcmV2ZW50Rm9jdXN8fChhLnByb3BzLm9uRm9jdXMoZSksYS5wcm9wcy5wcmV2ZW50T3Blbk9uRm9jdXN8fGEucHJvcHMucmVhZE9ubHl8fGEuc2V0T3BlbighMCkpLGEuc2V0U3RhdGUoe2ZvY3VzZWQ6ITB9KX0pKSxtdChidChhKSxcImNhbmNlbEZvY3VzSW5wdXRcIiwoZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoYS5pbnB1dEZvY3VzVGltZW91dCksYS5pbnB1dEZvY3VzVGltZW91dD1udWxsfSkpLG10KGJ0KGEpLFwiZGVmZXJGb2N1c0lucHV0XCIsKGZ1bmN0aW9uKCl7YS5jYW5jZWxGb2N1c0lucHV0KCksYS5pbnB1dEZvY3VzVGltZW91dD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3JldHVybiBhLnNldEZvY3VzKCl9KSwxKX0pKSxtdChidChhKSxcImhhbmRsZURyb3Bkb3duRm9jdXNcIiwoZnVuY3Rpb24oKXthLmNhbmNlbEZvY3VzSW5wdXQoKX0pKSxtdChidChhKSxcImhhbmRsZUJsdXJcIiwoZnVuY3Rpb24oZSl7KCFhLnN0YXRlLm9wZW58fGEucHJvcHMud2l0aFBvcnRhbHx8YS5wcm9wcy5zaG93VGltZUlucHV0KSYmYS5wcm9wcy5vbkJsdXIoZSksYS5zZXRTdGF0ZSh7Zm9jdXNlZDohMX0pfSkpLG10KGJ0KGEpLFwiaGFuZGxlQ2FsZW5kYXJDbGlja091dHNpZGVcIiwoZnVuY3Rpb24oZSl7YS5wcm9wcy5pbmxpbmV8fGEuc2V0T3BlbighMSksYS5wcm9wcy5vbkNsaWNrT3V0c2lkZShlKSxhLnByb3BzLndpdGhQb3J0YWwmJmUucHJldmVudERlZmF1bHQoKX0pKSxtdChidChhKSxcImhhbmRsZUNoYW5nZVwiLChmdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKXRbcl09YXJndW1lbnRzW3JdO3ZhciBuPXRbMF07aWYoIWEucHJvcHMub25DaGFuZ2VSYXd8fChhLnByb3BzLm9uQ2hhbmdlUmF3LmFwcGx5KGJ0KGEpLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4uaXNEZWZhdWx0UHJldmVudGVkJiYhbi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkpe2Euc2V0U3RhdGUoe2lucHV0VmFsdWU6bi50YXJnZXQudmFsdWUsbGFzdFByZVNlbGVjdENoYW5nZTpKcn0pO3ZhciBvPVR0KG4udGFyZ2V0LnZhbHVlLGEucHJvcHMuZGF0ZUZvcm1hdCxhLnByb3BzLmxvY2FsZSxhLnByb3BzLnN0cmljdFBhcnNpbmcpOyFvJiZuLnRhcmdldC52YWx1ZXx8YS5zZXRTZWxlY3RlZChvLG4sITApfX0pKSxtdChidChhKSxcImhhbmRsZVNlbGVjdFwiLChmdW5jdGlvbihlLHQscil7YS5zZXRTdGF0ZSh7cHJldmVudEZvY3VzOiEwfSwoZnVuY3Rpb24oKXtyZXR1cm4gYS5wcmV2ZW50Rm9jdXNUaW1lb3V0PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGEuc2V0U3RhdGUoe3ByZXZlbnRGb2N1czohMX0pfSksNTApLGEucHJldmVudEZvY3VzVGltZW91dH0pKSxhLnByb3BzLm9uQ2hhbmdlUmF3JiZhLnByb3BzLm9uQ2hhbmdlUmF3KHQpLGEuc2V0U2VsZWN0ZWQoZSx0LCExLHIpLCFhLnByb3BzLnNob3VsZENsb3NlT25TZWxlY3R8fGEucHJvcHMuc2hvd1RpbWVTZWxlY3Q/YS5zZXRQcmVTZWxlY3Rpb24oZSk6YS5wcm9wcy5pbmxpbmV8fGEuc2V0T3BlbighMSl9KSksbXQoYnQoYSksXCJzZXRTZWxlY3RlZFwiLChmdW5jdGlvbihlLHQscixuKXt2YXIgbz1lO2lmKG51bGw9PT1vfHwhdHIobyxhLnByb3BzKSl7dmFyIHM9YS5wcm9wcyxpPXMub25DaGFuZ2UscD1zLnNlbGVjdHNSYW5nZSxsPXMuc3RhcnREYXRlLGQ9cy5lbmREYXRlO2lmKCEkdChhLnByb3BzLnNlbGVjdGVkLG8pfHxhLnByb3BzLmFsbG93U2FtZURheXx8cClpZihudWxsIT09byYmKCFhLnByb3BzLnNlbGVjdGVkfHxyJiYoYS5wcm9wcy5zaG93VGltZVNlbGVjdHx8YS5wcm9wcy5zaG93VGltZVNlbGVjdE9ubHl8fGEucHJvcHMuc2hvd1RpbWVJbnB1dCl8fChvPUZ0KG8se2hvdXI6UGUuZGVmYXVsdChhLnByb3BzLnNlbGVjdGVkKSxtaW51dGU6TWUuZGVmYXVsdChhLnByb3BzLnNlbGVjdGVkKSxzZWNvbmQ6X2UuZGVmYXVsdChhLnByb3BzLnNlbGVjdGVkKX0pKSxhLnByb3BzLmlubGluZXx8YS5zZXRTdGF0ZSh7cHJlU2VsZWN0aW9uOm99KSxhLnByb3BzLmZvY3VzU2VsZWN0ZWRNb250aHx8YS5zZXRTdGF0ZSh7bW9udGhTZWxlY3RlZEluOm59KSkscCl7dmFyIGM9bCYmIWQsdT1sJiZkOyFsJiYhZD9pKFtvLG51bGxdLHQpOmMmJihudC5kZWZhdWx0KG8sbCk/aShbbyxudWxsXSx0KTppKFtsLG9dLHQpKSx1JiZpKFtvLG51bGxdLHQpfWVsc2UgaShvLHQpO3J8fChhLnByb3BzLm9uU2VsZWN0KG8sdCksYS5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTpudWxsfSkpfX0pKSxtdChidChhKSxcInNldFByZVNlbGVjdGlvblwiLChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDAhPT1hLnByb3BzLm1pbkRhdGUscj12b2lkIDAhPT1hLnByb3BzLm1heERhdGUsbj0hMDtpZihlKXt2YXIgbz1WZS5kZWZhdWx0KGUpO2lmKHQmJnIpbj16dChlLGEucHJvcHMubWluRGF0ZSxhLnByb3BzLm1heERhdGUpO2Vsc2UgaWYodCl7dmFyIHM9VmUuZGVmYXVsdChhLnByb3BzLm1pbkRhdGUpO249YXQuZGVmYXVsdChlLHMpfHwkdChvLHMpfWVsc2UgaWYocil7dmFyIGk9SmUuZGVmYXVsdChhLnByb3BzLm1heERhdGUpO249bnQuZGVmYXVsdChlLGkpfHwkdChvLGkpfX1uJiZhLnNldFN0YXRlKHtwcmVTZWxlY3Rpb246ZX0pfSkpLG10KGJ0KGEpLFwiaGFuZGxlVGltZUNoYW5nZVwiLChmdW5jdGlvbihlKXt2YXIgdD1GdChhLnByb3BzLnNlbGVjdGVkP2EucHJvcHMuc2VsZWN0ZWQ6YS5nZXRQcmVTZWxlY3Rpb24oKSx7aG91cjpQZS5kZWZhdWx0KGUpLG1pbnV0ZTpNZS5kZWZhdWx0KGUpfSk7YS5zZXRTdGF0ZSh7cHJlU2VsZWN0aW9uOnR9KSxhLnByb3BzLm9uQ2hhbmdlKHQpLGEucHJvcHMuc2hvdWxkQ2xvc2VPblNlbGVjdCYmYS5zZXRPcGVuKCExKSxhLnByb3BzLnNob3dUaW1lSW5wdXQmJmEuc2V0T3BlbighMCksYS5zZXRTdGF0ZSh7aW5wdXRWYWx1ZTpudWxsfSl9KSksbXQoYnQoYSksXCJvbklucHV0Q2xpY2tcIiwoZnVuY3Rpb24oKXthLnByb3BzLmRpc2FibGVkfHxhLnByb3BzLnJlYWRPbmx5fHxhLnNldE9wZW4oITApLGEucHJvcHMub25JbnB1dENsaWNrKCl9KSksbXQoYnQoYSksXCJvbklucHV0S2V5RG93blwiLChmdW5jdGlvbihlKXthLnByb3BzLm9uS2V5RG93bihlKTt2YXIgdD1lLmtleTtpZihhLnN0YXRlLm9wZW58fGEucHJvcHMuaW5saW5lfHxhLnByb3BzLnByZXZlbnRPcGVuT25Gb2N1cyl7aWYoYS5zdGF0ZS5vcGVuKXtpZihcIkFycm93RG93blwiPT09dHx8XCJBcnJvd1VwXCI9PT10KXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHI9YS5jYWxlbmRhci5jb21wb25lbnROb2RlJiZhLmNhbGVuZGFyLmNvbXBvbmVudE5vZGUucXVlcnlTZWxlY3RvcignLnJlYWN0LWRhdGVwaWNrZXJfX2RheVt0YWJpbmRleD1cIjBcIl0nKTtyZXR1cm4gdm9pZChyJiZyLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiEwfSkpfXZhciBuPXh0KGEuc3RhdGUucHJlU2VsZWN0aW9uKTtcIkVudGVyXCI9PT10PyhlLnByZXZlbnREZWZhdWx0KCksYS5pbnB1dE9rKCkmJmEuc3RhdGUubGFzdFByZVNlbGVjdENoYW5nZT09PVhyPyhhLmhhbmRsZVNlbGVjdChuLGUpLCFhLnByb3BzLnNob3VsZENsb3NlT25TZWxlY3QmJmEuc2V0UHJlU2VsZWN0aW9uKG4pKTphLnNldE9wZW4oITEpKTpcIkVzY2FwZVwiPT09dCYmKGUucHJldmVudERlZmF1bHQoKSxhLnNldE9wZW4oITEpKSxhLmlucHV0T2soKXx8YS5wcm9wcy5vbklucHV0RXJyb3Ioe2NvZGU6MSxtc2c6enJ9KX19ZWxzZVwiQXJyb3dEb3duXCIhPT10JiZcIkFycm93VXBcIiE9PXQmJlwiRW50ZXJcIiE9PXR8fGEub25JbnB1dENsaWNrKCl9KSksbXQoYnQoYSksXCJvbkRheUtleURvd25cIiwoZnVuY3Rpb24oZSl7YS5wcm9wcy5vbktleURvd24oZSk7dmFyIHQ9ZS5rZXkscj14dChhLnN0YXRlLnByZVNlbGVjdGlvbik7aWYoXCJFbnRlclwiPT09dCllLnByZXZlbnREZWZhdWx0KCksYS5oYW5kbGVTZWxlY3QocixlKSwhYS5wcm9wcy5zaG91bGRDbG9zZU9uU2VsZWN0JiZhLnNldFByZVNlbGVjdGlvbihyKTtlbHNlIGlmKFwiRXNjYXBlXCI9PT10KWUucHJldmVudERlZmF1bHQoKSxhLnNldE9wZW4oITEpLGEuaW5wdXRPaygpfHxhLnByb3BzLm9uSW5wdXRFcnJvcih7Y29kZToxLG1zZzp6cn0pO2Vsc2UgaWYoIWEucHJvcHMuZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb24pe3ZhciBuO3N3aXRjaCh0KXtjYXNlXCJBcnJvd0xlZnRcIjpuPWdlLmRlZmF1bHQociwxKTticmVhaztjYXNlXCJBcnJvd1JpZ2h0XCI6bj12ZS5kZWZhdWx0KHIsMSk7YnJlYWs7Y2FzZVwiQXJyb3dVcFwiOm49YmUuZGVmYXVsdChyLDEpO2JyZWFrO2Nhc2VcIkFycm93RG93blwiOm49RGUuZGVmYXVsdChyLDEpO2JyZWFrO2Nhc2VcIlBhZ2VVcFwiOm49Q2UuZGVmYXVsdChyLDEpO2JyZWFrO2Nhc2VcIlBhZ2VEb3duXCI6bj13ZS5kZWZhdWx0KHIsMSk7YnJlYWs7Y2FzZVwiSG9tZVwiOm49U2UuZGVmYXVsdChyLDEpO2JyZWFrO2Nhc2VcIkVuZFwiOm49a2UuZGVmYXVsdChyLDEpfWlmKCFuKXJldHVybiB2b2lkKGEucHJvcHMub25JbnB1dEVycm9yJiZhLnByb3BzLm9uSW5wdXRFcnJvcih7Y29kZToxLG1zZzp6cn0pKTtpZihlLnByZXZlbnREZWZhdWx0KCksYS5zZXRTdGF0ZSh7bGFzdFByZVNlbGVjdENoYW5nZTpYcn0pLGEucHJvcHMuYWRqdXN0RGF0ZU9uQ2hhbmdlJiZhLnNldFNlbGVjdGVkKG4pLGEuc2V0UHJlU2VsZWN0aW9uKG4pLGEucHJvcHMuaW5saW5lKXt2YXIgbz1ZZS5kZWZhdWx0KHIpLHM9WWUuZGVmYXVsdChuKSxpPVRlLmRlZmF1bHQocikscD1UZS5kZWZhdWx0KG4pO28hPT1zfHxpIT09cD9hLnNldFN0YXRlKHtzaG91bGRGb2N1c0RheUlubGluZTohMH0pOmEuc2V0U3RhdGUoe3Nob3VsZEZvY3VzRGF5SW5saW5lOiExfSl9fX0pKSxtdChidChhKSxcIm9uUG9wcGVyS2V5RG93blwiLChmdW5jdGlvbihlKXtcIkVzY2FwZVwiPT09ZS5rZXkmJihlLnByZXZlbnREZWZhdWx0KCksYS5zZXRTdGF0ZSh7cHJldmVudEZvY3VzOiEwfSwoZnVuY3Rpb24oKXthLnNldE9wZW4oITEpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7YS5zZXRGb2N1cygpLGEuc2V0U3RhdGUoe3ByZXZlbnRGb2N1czohMX0pfSkpfSkpKX0pKSxtdChidChhKSxcIm9uQ2xlYXJDbGlja1wiLChmdW5jdGlvbihlKXtlJiZlLnByZXZlbnREZWZhdWx0JiZlLnByZXZlbnREZWZhdWx0KCksYS5wcm9wcy5vbkNoYW5nZShudWxsLGUpLGEuc2V0U3RhdGUoe2lucHV0VmFsdWU6bnVsbH0pfSkpLG10KGJ0KGEpLFwiY2xlYXJcIiwoZnVuY3Rpb24oKXthLm9uQ2xlYXJDbGljaygpfSkpLG10KGJ0KGEpLFwib25TY3JvbGxcIiwoZnVuY3Rpb24oZSl7XCJib29sZWFuXCI9PXR5cGVvZiBhLnByb3BzLmNsb3NlT25TY3JvbGwmJmEucHJvcHMuY2xvc2VPblNjcm9sbD9lLnRhcmdldCE9PWRvY3VtZW50JiZlLnRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmZS50YXJnZXQhPT1kb2N1bWVudC5ib2R5fHxhLnNldE9wZW4oITEpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGEucHJvcHMuY2xvc2VPblNjcm9sbCYmYS5wcm9wcy5jbG9zZU9uU2Nyb2xsKGUpJiZhLnNldE9wZW4oITEpfSkpLG10KGJ0KGEpLFwicmVuZGVyQ2FsZW5kYXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYS5wcm9wcy5pbmxpbmV8fGEuaXNDYWxlbmRhck9wZW4oKT9kZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJHIse3JlZjpmdW5jdGlvbihlKXthLmNhbGVuZGFyPWV9LGxvY2FsZTphLnByb3BzLmxvY2FsZSxjaG9vc2VEYXlBcmlhTGFiZWxQcmVmaXg6YS5wcm9wcy5jaG9vc2VEYXlBcmlhTGFiZWxQcmVmaXgsZGlzYWJsZWREYXlBcmlhTGFiZWxQcmVmaXg6YS5wcm9wcy5kaXNhYmxlZERheUFyaWFMYWJlbFByZWZpeCx3ZWVrQXJpYUxhYmVsUHJlZml4OmEucHJvcHMud2Vla0FyaWFMYWJlbFByZWZpeCxhZGp1c3REYXRlT25DaGFuZ2U6YS5wcm9wcy5hZGp1c3REYXRlT25DaGFuZ2Usc2V0T3BlbjphLnNldE9wZW4sc2hvdWxkQ2xvc2VPblNlbGVjdDphLnByb3BzLnNob3VsZENsb3NlT25TZWxlY3QsZGF0ZUZvcm1hdDphLnByb3BzLmRhdGVGb3JtYXRDYWxlbmRhcix1c2VXZWVrZGF5c1Nob3J0OmEucHJvcHMudXNlV2Vla2RheXNTaG9ydCxmb3JtYXRXZWVrRGF5OmEucHJvcHMuZm9ybWF0V2Vla0RheSxkcm9wZG93bk1vZGU6YS5wcm9wcy5kcm9wZG93bk1vZGUsc2VsZWN0ZWQ6YS5wcm9wcy5zZWxlY3RlZCxwcmVTZWxlY3Rpb246YS5zdGF0ZS5wcmVTZWxlY3Rpb24sb25TZWxlY3Q6YS5oYW5kbGVTZWxlY3Qsb25XZWVrU2VsZWN0OmEucHJvcHMub25XZWVrU2VsZWN0LG9wZW5Ub0RhdGU6YS5wcm9wcy5vcGVuVG9EYXRlLG1pbkRhdGU6YS5wcm9wcy5taW5EYXRlLG1heERhdGU6YS5wcm9wcy5tYXhEYXRlLHNlbGVjdHNTdGFydDphLnByb3BzLnNlbGVjdHNTdGFydCxzZWxlY3RzRW5kOmEucHJvcHMuc2VsZWN0c0VuZCxzZWxlY3RzUmFuZ2U6YS5wcm9wcy5zZWxlY3RzUmFuZ2Usc3RhcnREYXRlOmEucHJvcHMuc3RhcnREYXRlLGVuZERhdGU6YS5wcm9wcy5lbmREYXRlLGV4Y2x1ZGVEYXRlczphLnByb3BzLmV4Y2x1ZGVEYXRlcyxmaWx0ZXJEYXRlOmEucHJvcHMuZmlsdGVyRGF0ZSxvbkNsaWNrT3V0c2lkZTphLmhhbmRsZUNhbGVuZGFyQ2xpY2tPdXRzaWRlLGZvcm1hdFdlZWtOdW1iZXI6YS5wcm9wcy5mb3JtYXRXZWVrTnVtYmVyLGhpZ2hsaWdodERhdGVzOmEuc3RhdGUuaGlnaGxpZ2h0RGF0ZXMsaW5jbHVkZURhdGVzOmEucHJvcHMuaW5jbHVkZURhdGVzLGluY2x1ZGVUaW1lczphLnByb3BzLmluY2x1ZGVUaW1lcyxpbmplY3RUaW1lczphLnByb3BzLmluamVjdFRpbWVzLGlubGluZTphLnByb3BzLmlubGluZSxzaG91bGRGb2N1c0RheUlubGluZTphLnN0YXRlLnNob3VsZEZvY3VzRGF5SW5saW5lLHBlZWtOZXh0TW9udGg6YS5wcm9wcy5wZWVrTmV4dE1vbnRoLHNob3dNb250aERyb3Bkb3duOmEucHJvcHMuc2hvd01vbnRoRHJvcGRvd24sc2hvd1ByZXZpb3VzTW9udGhzOmEucHJvcHMuc2hvd1ByZXZpb3VzTW9udGhzLHVzZVNob3J0TW9udGhJbkRyb3Bkb3duOmEucHJvcHMudXNlU2hvcnRNb250aEluRHJvcGRvd24sc2hvd01vbnRoWWVhckRyb3Bkb3duOmEucHJvcHMuc2hvd01vbnRoWWVhckRyb3Bkb3duLHNob3dXZWVrTnVtYmVyczphLnByb3BzLnNob3dXZWVrTnVtYmVycyxzaG93WWVhckRyb3Bkb3duOmEucHJvcHMuc2hvd1llYXJEcm9wZG93bix3aXRoUG9ydGFsOmEucHJvcHMud2l0aFBvcnRhbCxmb3JjZVNob3dNb250aE5hdmlnYXRpb246YS5wcm9wcy5mb3JjZVNob3dNb250aE5hdmlnYXRpb24sc2hvd0Rpc2FibGVkTW9udGhOYXZpZ2F0aW9uOmEucHJvcHMuc2hvd0Rpc2FibGVkTW9udGhOYXZpZ2F0aW9uLHNjcm9sbGFibGVZZWFyRHJvcGRvd246YS5wcm9wcy5zY3JvbGxhYmxlWWVhckRyb3Bkb3duLHNjcm9sbGFibGVNb250aFllYXJEcm9wZG93bjphLnByb3BzLnNjcm9sbGFibGVNb250aFllYXJEcm9wZG93bix0b2RheUJ1dHRvbjphLnByb3BzLnRvZGF5QnV0dG9uLHdlZWtMYWJlbDphLnByb3BzLndlZWtMYWJlbCxvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzczpVcixmaXhlZEhlaWdodDphLnByb3BzLmZpeGVkSGVpZ2h0LG1vbnRoc1Nob3duOmEucHJvcHMubW9udGhzU2hvd24sbW9udGhTZWxlY3RlZEluOmEuc3RhdGUubW9udGhTZWxlY3RlZEluLG9uRHJvcGRvd25Gb2N1czphLmhhbmRsZURyb3Bkb3duRm9jdXMsb25Nb250aENoYW5nZTphLnByb3BzLm9uTW9udGhDaGFuZ2Usb25ZZWFyQ2hhbmdlOmEucHJvcHMub25ZZWFyQ2hhbmdlLGRheUNsYXNzTmFtZTphLnByb3BzLmRheUNsYXNzTmFtZSx3ZWVrRGF5Q2xhc3NOYW1lOmEucHJvcHMud2Vla0RheUNsYXNzTmFtZSxtb250aENsYXNzTmFtZTphLnByb3BzLm1vbnRoQ2xhc3NOYW1lLHRpbWVDbGFzc05hbWU6YS5wcm9wcy50aW1lQ2xhc3NOYW1lLHNob3dUaW1lU2VsZWN0OmEucHJvcHMuc2hvd1RpbWVTZWxlY3Qsc2hvd1RpbWVTZWxlY3RPbmx5OmEucHJvcHMuc2hvd1RpbWVTZWxlY3RPbmx5LG9uVGltZUNoYW5nZTphLmhhbmRsZVRpbWVDaGFuZ2UsdGltZUZvcm1hdDphLnByb3BzLnRpbWVGb3JtYXQsdGltZUludGVydmFsczphLnByb3BzLnRpbWVJbnRlcnZhbHMsbWluVGltZTphLnByb3BzLm1pblRpbWUsbWF4VGltZTphLnByb3BzLm1heFRpbWUsZXhjbHVkZVRpbWVzOmEucHJvcHMuZXhjbHVkZVRpbWVzLGZpbHRlclRpbWU6YS5wcm9wcy5maWx0ZXJUaW1lLHRpbWVDYXB0aW9uOmEucHJvcHMudGltZUNhcHRpb24sY2xhc3NOYW1lOmEucHJvcHMuY2FsZW5kYXJDbGFzc05hbWUsY29udGFpbmVyOmEucHJvcHMuY2FsZW5kYXJDb250YWluZXIseWVhckl0ZW1OdW1iZXI6YS5wcm9wcy55ZWFySXRlbU51bWJlcix5ZWFyRHJvcGRvd25JdGVtTnVtYmVyOmEucHJvcHMueWVhckRyb3Bkb3duSXRlbU51bWJlcixwcmV2aW91c01vbnRoQnV0dG9uTGFiZWw6YS5wcm9wcy5wcmV2aW91c01vbnRoQnV0dG9uTGFiZWwsbmV4dE1vbnRoQnV0dG9uTGFiZWw6YS5wcm9wcy5uZXh0TW9udGhCdXR0b25MYWJlbCxwcmV2aW91c1llYXJCdXR0b25MYWJlbDphLnByb3BzLnByZXZpb3VzWWVhckJ1dHRvbkxhYmVsLG5leHRZZWFyQnV0dG9uTGFiZWw6YS5wcm9wcy5uZXh0WWVhckJ1dHRvbkxhYmVsLHRpbWVJbnB1dExhYmVsOmEucHJvcHMudGltZUlucHV0TGFiZWwsZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb246YS5wcm9wcy5kaXNhYmxlZEtleWJvYXJkTmF2aWdhdGlvbixyZW5kZXJDdXN0b21IZWFkZXI6YS5wcm9wcy5yZW5kZXJDdXN0b21IZWFkZXIscG9wcGVyUHJvcHM6YS5wcm9wcy5wb3BwZXJQcm9wcyxyZW5kZXJEYXlDb250ZW50czphLnByb3BzLnJlbmRlckRheUNvbnRlbnRzLG9uRGF5TW91c2VFbnRlcjphLnByb3BzLm9uRGF5TW91c2VFbnRlcixvbk1vbnRoTW91c2VMZWF2ZTphLnByb3BzLm9uTW9udGhNb3VzZUxlYXZlLHNob3dUaW1lSW5wdXQ6YS5wcm9wcy5zaG93VGltZUlucHV0LHNob3dNb250aFllYXJQaWNrZXI6YS5wcm9wcy5zaG93TW9udGhZZWFyUGlja2VyLHNob3dGdWxsTW9udGhZZWFyUGlja2VyOmEucHJvcHMuc2hvd0Z1bGxNb250aFllYXJQaWNrZXIsc2hvd1R3b0NvbHVtbk1vbnRoWWVhclBpY2tlcjphLnByb3BzLnNob3dUd29Db2x1bW5Nb250aFllYXJQaWNrZXIsc2hvd0ZvdXJDb2x1bW5Nb250aFllYXJQaWNrZXI6YS5wcm9wcy5zaG93Rm91ckNvbHVtbk1vbnRoWWVhclBpY2tlcixzaG93WWVhclBpY2tlcjphLnByb3BzLnNob3dZZWFyUGlja2VyLHNob3dRdWFydGVyWWVhclBpY2tlcjphLnByb3BzLnNob3dRdWFydGVyWWVhclBpY2tlcixzaG93UG9wcGVyQXJyb3c6YS5wcm9wcy5zaG93UG9wcGVyQXJyb3csZXhjbHVkZVNjcm9sbGJhcjphLnByb3BzLmV4Y2x1ZGVTY3JvbGxiYXIsaGFuZGxlT25LZXlEb3duOmEub25EYXlLZXlEb3duLGlzSW5wdXRGb2N1c2VkOmEuc3RhdGUuZm9jdXNlZCxjdXN0b21UaW1lSW5wdXQ6YS5wcm9wcy5jdXN0b21UaW1lSW5wdXQsc2V0UHJlU2VsZWN0aW9uOmEuc2V0UHJlU2VsZWN0aW9ufSxhLnByb3BzLmNoaWxkcmVuKTpudWxsfSkpLG10KGJ0KGEpLFwicmVuZGVyRGF0ZUlucHV0XCIsKGZ1bmN0aW9uKCl7dmFyIGUsdCxyLG4sbyxzPWNlLmRlZmF1bHQoYS5wcm9wcy5jbGFzc05hbWUsbXQoe30sVXIsYS5zdGF0ZS5vcGVuKSksaT1hLnByb3BzLmN1c3RvbUlucHV0fHxkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLHt0eXBlOlwidGV4dFwifSkscD1hLnByb3BzLmN1c3RvbUlucHV0UmVmfHxcInJlZlwiLGw9XCJzdHJpbmdcIj09dHlwZW9mIGEucHJvcHMudmFsdWU/YS5wcm9wcy52YWx1ZTpcInN0cmluZ1wiPT10eXBlb2YgYS5zdGF0ZS5pbnB1dFZhbHVlP2Euc3RhdGUuaW5wdXRWYWx1ZToodD1hLnByb3BzLnNlbGVjdGVkLHI9YS5wcm9wcyxuPXIuZGF0ZUZvcm1hdCxvPXIubG9jYWxlLHQmJkx0KHQsQXJyYXkuaXNBcnJheShuKT9uWzBdOm4sbyl8fFwiXCIpO3JldHVybiBkZS5kZWZhdWx0LmNsb25lRWxlbWVudChpLChtdChlPXt9LHAsKGZ1bmN0aW9uKGUpe2EuaW5wdXQ9ZX0pKSxtdChlLFwidmFsdWVcIixsKSxtdChlLFwib25CbHVyXCIsYS5oYW5kbGVCbHVyKSxtdChlLFwib25DaGFuZ2VcIixhLmhhbmRsZUNoYW5nZSksbXQoZSxcIm9uQ2xpY2tcIixhLm9uSW5wdXRDbGljayksbXQoZSxcIm9uRm9jdXNcIixhLmhhbmRsZUZvY3VzKSxtdChlLFwib25LZXlEb3duXCIsYS5vbklucHV0S2V5RG93biksbXQoZSxcImlkXCIsYS5wcm9wcy5pZCksbXQoZSxcIm5hbWVcIixhLnByb3BzLm5hbWUpLG10KGUsXCJhdXRvRm9jdXNcIixhLnByb3BzLmF1dG9Gb2N1cyksbXQoZSxcInBsYWNlaG9sZGVyXCIsYS5wcm9wcy5wbGFjZWhvbGRlclRleHQpLG10KGUsXCJkaXNhYmxlZFwiLGEucHJvcHMuZGlzYWJsZWQpLG10KGUsXCJhdXRvQ29tcGxldGVcIixhLnByb3BzLmF1dG9Db21wbGV0ZSksbXQoZSxcImNsYXNzTmFtZVwiLGNlLmRlZmF1bHQoaS5wcm9wcy5jbGFzc05hbWUscykpLG10KGUsXCJ0aXRsZVwiLGEucHJvcHMudGl0bGUpLG10KGUsXCJyZWFkT25seVwiLGEucHJvcHMucmVhZE9ubHkpLG10KGUsXCJyZXF1aXJlZFwiLGEucHJvcHMucmVxdWlyZWQpLG10KGUsXCJ0YWJJbmRleFwiLGEucHJvcHMudGFiSW5kZXgpLG10KGUsXCJhcmlhLWRlc2NyaWJlZGJ5XCIsYS5wcm9wcy5hcmlhRGVzY3JpYmVkQnkpLG10KGUsXCJhcmlhLWludmFsaWRcIixhLnByb3BzLmFyaWFJbnZhbGlkKSxtdChlLFwiYXJpYS1sYWJlbGxlZGJ5XCIsYS5wcm9wcy5hcmlhTGFiZWxsZWRCeSksbXQoZSxcImFyaWEtcmVxdWlyZWRcIixhLnByb3BzLmFyaWFSZXF1aXJlZCksZSkpfSkpLG10KGJ0KGEpLFwicmVuZGVyQ2xlYXJCdXR0b25cIiwoZnVuY3Rpb24oKXt2YXIgZT1hLnByb3BzLHQ9ZS5pc0NsZWFyYWJsZSxyPWUuc2VsZWN0ZWQsbj1lLmNsZWFyQnV0dG9uVGl0bGUsbz1lLmNsZWFyQnV0dG9uQ2xhc3NOYW1lLHM9ZS5hcmlhTGFiZWxDbG9zZSxpPXZvaWQgMD09PXM/XCJDbG9zZVwiOnM7cmV0dXJuIHQmJm51bGwhPXI/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse3R5cGU6XCJidXR0b25cIixjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19jbG9zZS1pY29uIFwiLmNvbmNhdChvKSxcImFyaWEtbGFiZWxcIjppLG9uQ2xpY2s6YS5vbkNsZWFyQ2xpY2ssdGl0bGU6bix0YWJJbmRleDotMX0pOm51bGx9KSksYS5zdGF0ZT1hLmNhbGNJbml0aWFsU3RhdGUoKSxhfXJldHVybiBodChyLFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCwhMCl9fSx7a2V5OlwiY29tcG9uZW50RGlkVXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcixhO2UuaW5saW5lJiYocj1lLnNlbGVjdGVkLGE9dGhpcy5wcm9wcy5zZWxlY3RlZCxyJiZhP1llLmRlZmF1bHQocikhPT1ZZS5kZWZhdWx0KGEpfHxUZS5kZWZhdWx0KHIpIT09VGUuZGVmYXVsdChhKTpyIT09YSkmJnRoaXMuc2V0UHJlU2VsZWN0aW9uKHRoaXMucHJvcHMuc2VsZWN0ZWQpLHZvaWQgMCE9PXRoaXMuc3RhdGUubW9udGhTZWxlY3RlZEluJiZlLm1vbnRoc1Nob3duIT09dGhpcy5wcm9wcy5tb250aHNTaG93biYmdGhpcy5zZXRTdGF0ZSh7bW9udGhTZWxlY3RlZEluOjB9KSxlLmhpZ2hsaWdodERhdGVzIT09dGhpcy5wcm9wcy5oaWdobGlnaHREYXRlcyYmdGhpcy5zZXRTdGF0ZSh7aGlnaGxpZ2h0RGF0ZXM6RHIodGhpcy5wcm9wcy5oaWdobGlnaHREYXRlcyl9KSx0LmZvY3VzZWR8fCR0KGUuc2VsZWN0ZWQsdGhpcy5wcm9wcy5zZWxlY3RlZCl8fHRoaXMuc2V0U3RhdGUoe2lucHV0VmFsdWU6bnVsbH0pLHQub3BlbiE9PXRoaXMuc3RhdGUub3BlbiYmKCExPT09dC5vcGVuJiYhMD09PXRoaXMuc3RhdGUub3BlbiYmdGhpcy5wcm9wcy5vbkNhbGVuZGFyT3BlbigpLCEwPT09dC5vcGVuJiYhMT09PXRoaXMuc3RhdGUub3BlbiYmdGhpcy5wcm9wcy5vbkNhbGVuZGFyQ2xvc2UoKSl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuY2xlYXJQcmV2ZW50Rm9jdXNUaW1lb3V0KCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLm9uU2Nyb2xsLCEwKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVuZGVyQ2FsZW5kYXIoKTtyZXR1cm4gdGhpcy5wcm9wcy5pbmxpbmUmJiF0aGlzLnByb3BzLndpdGhQb3J0YWw/ZTp0aGlzLnByb3BzLndpdGhQb3J0YWw/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsbnVsbCx0aGlzLnByb3BzLmlubGluZT9udWxsOmRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19pbnB1dC1jb250YWluZXJcIn0sdGhpcy5yZW5kZXJEYXRlSW5wdXQoKSx0aGlzLnJlbmRlckNsZWFyQnV0dG9uKCkpLHRoaXMuc3RhdGUub3Blbnx8dGhpcy5wcm9wcy5pbmxpbmU/ZGUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInJlYWN0LWRhdGVwaWNrZXJfX3BvcnRhbFwifSxlKTpudWxsKTpkZS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVnIse2NsYXNzTmFtZTp0aGlzLnByb3BzLnBvcHBlckNsYXNzTmFtZSx3cmFwcGVyQ2xhc3NOYW1lOnRoaXMucHJvcHMud3JhcHBlckNsYXNzTmFtZSxoaWRlUG9wcGVyOiF0aGlzLmlzQ2FsZW5kYXJPcGVuKCkscG9ydGFsSWQ6dGhpcy5wcm9wcy5wb3J0YWxJZCxwb3BwZXJNb2RpZmllcnM6dGhpcy5wcm9wcy5wb3BwZXJNb2RpZmllcnMsdGFyZ2V0Q29tcG9uZW50OmRlLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJyZWFjdC1kYXRlcGlja2VyX19pbnB1dC1jb250YWluZXJcIn0sdGhpcy5yZW5kZXJEYXRlSW5wdXQoKSx0aGlzLnJlbmRlckNsZWFyQnV0dG9uKCkpLHBvcHBlckNvbnRhaW5lcjp0aGlzLnByb3BzLnBvcHBlckNvbnRhaW5lcixwb3BwZXJDb21wb25lbnQ6ZSxwb3BwZXJQbGFjZW1lbnQ6dGhpcy5wcm9wcy5wb3BwZXJQbGFjZW1lbnQscG9wcGVyUHJvcHM6dGhpcy5wcm9wcy5wb3BwZXJQcm9wcyxwb3BwZXJPbktleURvd246dGhpcy5vblBvcHBlcktleURvd24sZW5hYmxlVGFiTG9vcDp0aGlzLnByb3BzLmVuYWJsZVRhYkxvb3B9KX19XSxbe2tleTpcImRlZmF1bHRQcm9wc1wiLGdldDpmdW5jdGlvbigpe3JldHVybnthbGxvd1NhbWVEYXk6ITEsZGF0ZUZvcm1hdDpcIk1NL2RkL3l5eXlcIixkYXRlRm9ybWF0Q2FsZW5kYXI6XCJMTExMIHl5eXlcIixvbkNoYW5nZTpmdW5jdGlvbigpe30sZGlzYWJsZWQ6ITEsZGlzYWJsZWRLZXlib2FyZE5hdmlnYXRpb246ITEsZHJvcGRvd25Nb2RlOlwic2Nyb2xsXCIsb25Gb2N1czpmdW5jdGlvbigpe30sb25CbHVyOmZ1bmN0aW9uKCl7fSxvbktleURvd246ZnVuY3Rpb24oKXt9LG9uSW5wdXRDbGljazpmdW5jdGlvbigpe30sb25TZWxlY3Q6ZnVuY3Rpb24oKXt9LG9uQ2xpY2tPdXRzaWRlOmZ1bmN0aW9uKCl7fSxvbk1vbnRoQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvbkNhbGVuZGFyT3BlbjpmdW5jdGlvbigpe30sb25DYWxlbmRhckNsb3NlOmZ1bmN0aW9uKCl7fSxwcmV2ZW50T3Blbk9uRm9jdXM6ITEsb25ZZWFyQ2hhbmdlOmZ1bmN0aW9uKCl7fSxvbklucHV0RXJyb3I6ZnVuY3Rpb24oKXt9LG1vbnRoc1Nob3duOjEscmVhZE9ubHk6ITEsd2l0aFBvcnRhbDohMSxzaG91bGRDbG9zZU9uU2VsZWN0OiEwLHNob3dUaW1lU2VsZWN0OiExLHNob3dUaW1lSW5wdXQ6ITEsc2hvd1ByZXZpb3VzTW9udGhzOiExLHNob3dNb250aFllYXJQaWNrZXI6ITEsc2hvd0Z1bGxNb250aFllYXJQaWNrZXI6ITEsc2hvd1R3b0NvbHVtbk1vbnRoWWVhclBpY2tlcjohMSxzaG93Rm91ckNvbHVtbk1vbnRoWWVhclBpY2tlcjohMSxzaG93WWVhclBpY2tlcjohMSxzaG93UXVhcnRlclllYXJQaWNrZXI6ITEsc3RyaWN0UGFyc2luZzohMSx0aW1lSW50ZXJ2YWxzOjMwLHRpbWVDYXB0aW9uOlwiVGltZVwiLHByZXZpb3VzTW9udGhCdXR0b25MYWJlbDpcIlByZXZpb3VzIE1vbnRoXCIsbmV4dE1vbnRoQnV0dG9uTGFiZWw6XCJOZXh0IE1vbnRoXCIscHJldmlvdXNZZWFyQnV0dG9uTGFiZWw6XCJQcmV2aW91cyBZZWFyXCIsbmV4dFllYXJCdXR0b25MYWJlbDpcIk5leHQgWWVhclwiLHRpbWVJbnB1dExhYmVsOlwiVGltZVwiLGVuYWJsZVRhYkxvb3A6ITAseWVhckl0ZW1OdW1iZXI6T3QscmVuZGVyRGF5Q29udGVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGZvY3VzU2VsZWN0ZWRNb250aDohMSxzaG93UG9wcGVyQXJyb3c6ITAsZXhjbHVkZVNjcm9sbGJhcjohMCxjdXN0b21UaW1lSW5wdXQ6bnVsbH19fV0pLHJ9KGRlLmRlZmF1bHQuQ29tcG9uZW50KSxKcj1cImlucHV0XCIsWHI9XCJuYXZpZ2F0ZVwiO2UuQ2FsZW5kYXJDb250YWluZXI9V3IsZS5kZWZhdWx0PUdyLGUuZ2V0RGVmYXVsdExvY2FsZT1HdCxlLnJlZ2lzdGVyTG9jYWxlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6Z2xvYmFsO3IuX19sb2NhbGVEYXRhX198fChyLl9fbG9jYWxlRGF0YV9fPXt9KSxyLl9fbG9jYWxlRGF0YV9fW2VdPXR9LGUuc2V0RGVmYXVsdExvY2FsZT1mdW5jdGlvbihlKXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6Z2xvYmFsKS5fX2xvY2FsZUlkX189ZX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHNvbWUgRE9NIG5vZGUgaXMgb3VyIENvbXBvbmVudCdzIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGlzTm9kZUZvdW5kKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gU1ZHIDx1c2UvPiBlbGVtZW50cyBkbyBub3QgdGVjaG5pY2FsbHkgcmVzaWRlIGluIHRoZSByZW5kZXJlZCBET00sIHNvXG4gIC8vIHRoZXkgZG8gbm90IGhhdmUgY2xhc3NMaXN0IGRpcmVjdGx5LCBidXQgdGhleSBvZmZlciBhIGxpbmsgdG8gdGhlaXJcbiAgLy8gY29ycmVzcG9uZGluZyBlbGVtZW50LCB3aGljaCBjYW4gaGF2ZSBjbGFzc0xpc3QuIFRoaXMgZXh0cmEgY2hlY2sgaXMgZm9yXG4gIC8vIHRoYXQgY2FzZS5cbiAgLy8gU2VlOiBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9zdHJ1Y3QuaHRtbCNJbnRlcmZhY2VTVkdVc2VFbGVtZW50XG4gIC8vIERpc2N1c3Npb246IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb21heC9yZWFjdC1vbmNsaWNrb3V0c2lkZS9wdWxsLzE3XG5cblxuICBpZiAoY3VycmVudC5jb3JyZXNwb25kaW5nRWxlbWVudCkge1xuICAgIHJldHVybiBjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhpZ25vcmVDbGFzcyk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoaWdub3JlQ2xhc3MpO1xufVxuLyoqXG4gKiBUcnkgdG8gZmluZCBvdXIgbm9kZSBpbiBhIGhpZXJhcmNoeSBvZiBub2RlcywgcmV0dXJuaW5nIHRoZSBkb2N1bWVudFxuICogbm9kZSBhcyBoaWdoZXN0IG5vZGUgaWYgb3VyIG5vZGUgaXMgbm90IGZvdW5kIGluIHRoZSBwYXRoIHVwLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXN0KGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgc291cmNlPWxvY2FsIHRoZW4gdGhpcyBldmVudCBjYW1lIGZyb20gJ3NvbWV3aGVyZSdcbiAgLy8gaW5zaWRlIGFuZCBzaG91bGQgYmUgaWdub3JlZC4gV2UgY291bGQgaGFuZGxlIHRoaXMgd2l0aFxuICAvLyBhIGxheWVyZWQgYXBwcm9hY2gsIHRvbywgYnV0IHRoYXQgcmVxdWlyZXMgZ29pbmcgYmFjayB0b1xuICAvLyB0aGlua2luZyBpbiB0ZXJtcyBvZiBEb20gbm9kZSBuZXN0aW5nLCBydW5uaW5nIGNvdW50ZXJcbiAgLy8gdG8gUmVhY3QncyAneW91IHNob3VsZG4ndCBjYXJlIGFib3V0IHRoZSBET00nIHBoaWxvc29waHkuXG5cblxuICB3aGlsZSAoY3VycmVudC5wYXJlbnROb2RlKSB7XG4gICAgaWYgKGlzTm9kZUZvdW5kKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50O1xufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgYnJvd3NlciBzY3JvbGxiYXIgd2FzIGNsaWNrZWRcbiAqL1xuXG5mdW5jdGlvbiBjbGlja2VkU2Nyb2xsYmFyKGV2dCkge1xuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IGV2dC5jbGllbnRYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPD0gZXZ0LmNsaWVudFk7XG59XG5cbi8vIGlkZWFsbHkgd2lsbCBnZXQgcmVwbGFjZWQgd2l0aCBleHRlcm5hbCBkZXBcbi8vIHdoZW4gcmFmcmV4L2RldGVjdC1wYXNzaXZlLWV2ZW50cyM0IGFuZCByYWZyZXgvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzIzUgZ2V0IG1lcmdlZCBpblxudmFyIHRlc3RQYXNzaXZlRXZlbnRTdXBwb3J0ID0gZnVuY3Rpb24gdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFzc2l2ZSA9IGZhbHNlO1xuICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBwYXNzaXZlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVFdmVudFN1cHBvcnQnLCBub29wLCBvcHRpb25zKTtcbiAgcmV0dXJuIHBhc3NpdmU7XG59O1xuXG5mdW5jdGlvbiBhdXRvSW5jKHNlZWQpIHtcbiAgaWYgKHNlZWQgPT09IHZvaWQgMCkge1xuICAgIHNlZWQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKytzZWVkO1xuICB9O1xufVxuXG52YXIgdWlkID0gYXV0b0luYygpO1xuXG52YXIgcGFzc2l2ZUV2ZW50U3VwcG9ydDtcbnZhciBoYW5kbGVyc01hcCA9IHt9O1xudmFyIGVuYWJsZWRJbnN0YW5jZXMgPSB7fTtcbnZhciB0b3VjaEV2ZW50cyA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXTtcbnZhciBJR05PUkVfQ0xBU1NfTkFNRSA9ICdpZ25vcmUtcmVhY3Qtb25jbGlja291dHNpZGUnO1xuLyoqXG4gKiBPcHRpb25zIGZvciBhZGRFdmVudEhhbmRsZXIgYW5kIHJlbW92ZUV2ZW50SGFuZGxlclxuICovXG5cbmZ1bmN0aW9uIGdldEV2ZW50SGFuZGxlck9wdGlvbnMoaW5zdGFuY2UsIGV2ZW50TmFtZSkge1xuICB2YXIgaGFuZGxlck9wdGlvbnMgPSBudWxsO1xuICB2YXIgaXNUb3VjaEV2ZW50ID0gdG91Y2hFdmVudHMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMTtcblxuICBpZiAoaXNUb3VjaEV2ZW50ICYmIHBhc3NpdmVFdmVudFN1cHBvcnQpIHtcbiAgICBoYW5kbGVyT3B0aW9ucyA9IHtcbiAgICAgIHBhc3NpdmU6ICFpbnN0YW5jZS5wcm9wcy5wcmV2ZW50RGVmYXVsdFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gaGFuZGxlck9wdGlvbnM7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIHRoZSBIT0MgZnVuY3Rpb24gdGhhdCB5b3UnbGwgdXNlXG4gKiBpbiBvcmRlciB0byBpbXBhcnQgb25PdXRzaWRlQ2xpY2sgbGlzdGVuaW5nIHRvIGFuXG4gKiBhcmJpdHJhcnkgY29tcG9uZW50LiBJdCBnZXRzIGNhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZVxuICogYm9vdHN0cmFwcGluZyBjb2RlIHRvIHlpZWxkIGFuIGluc3RhbmNlIG9mIHRoZVxuICogb25DbGlja091dHNpZGVIT0MgZnVuY3Rpb24gZGVmaW5lZCBpbnNpZGUgc2V0dXBIT0MoKS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlSE9DKFdyYXBwZWRDb21wb25lbnQsIGNvbmZpZykge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgY29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2Uob25DbGlja091dHNpZGUsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gb25DbGlja091dHNpZGUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG5cbiAgICAgIF90aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzLl9fY2xpY2tPdXRzaWRlSGFuZGxlclByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpcy5fX2NsaWNrT3V0c2lkZUhhbmRsZXJQcm9wKGV2ZW50KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IF90aGlzLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZS5wcm9wcy5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5oYW5kbGVDbGlja091dHNpZGUoZXZlbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcmFwcGVkQ29tcG9uZW50OiBcIiArIGNvbXBvbmVudE5hbWUgKyBcIiBsYWNrcyBhIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkgZnVuY3Rpb24gZm9yIHByb2Nlc3Npbmcgb3V0c2lkZSBjbGljayBldmVudHMuXCIpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX19nZXRDb21wb25lbnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBfdGhpcy5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZy5zZXRDbGlja091dHNpZGVSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnLnNldENsaWNrT3V0c2lkZVJlZigpKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2Uuc2V0Q2xpY2tPdXRzaWRlUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldENsaWNrT3V0c2lkZVJlZigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCBlbmFibGVkSW5zdGFuY2VzW190aGlzLl91aWRdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXNzaXZlRXZlbnRTdXBwb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHBhc3NpdmVFdmVudFN1cHBvcnQgPSB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXSA9IHRydWU7XG4gICAgICAgIHZhciBldmVudHMgPSBfdGhpcy5wcm9wcy5ldmVudFR5cGVzO1xuXG4gICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcbiAgICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZXJzTWFwW190aGlzLl91aWRdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKF90aGlzLmNvbXBvbmVudE5vZGUgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuZXhjbHVkZVNjcm9sbGJhciAmJiBjbGlja2VkU2Nyb2xsYmFyKGV2ZW50KSkgcmV0dXJuO1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgaWYgKGZpbmRIaWdoZXN0KGN1cnJlbnQsIF90aGlzLmNvbXBvbmVudE5vZGUsIF90aGlzLnByb3BzLm91dHNpZGVDbGlja0lnbm9yZUNsYXNzKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcnNNYXBbX3RoaXMuX3VpZF0sIGdldEV2ZW50SGFuZGxlck9wdGlvbnMoX3RoaXMsIGV2ZW50TmFtZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIGVuYWJsZWRJbnN0YW5jZXNbX3RoaXMuX3VpZF07XG4gICAgICAgIHZhciBmbiA9IGhhbmRsZXJzTWFwW190aGlzLl91aWRdO1xuXG4gICAgICAgIGlmIChmbiAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFyIGV2ZW50cyA9IF90aGlzLnByb3BzLmV2ZW50VHlwZXM7XG5cbiAgICAgICAgICBpZiAoIWV2ZW50cy5mb3JFYWNoKSB7XG4gICAgICAgICAgICBldmVudHMgPSBbZXZlbnRzXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBnZXRFdmVudEhhbmRsZXJPcHRpb25zKF90aGlzLCBldmVudE5hbWUpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWxldGUgaGFuZGxlcnNNYXBbX3RoaXMuX3VpZF07XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmluc3RhbmNlUmVmID0gcmVmO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3VpZCA9IHVpZCgpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgdGhlIFdyYXBwZWRDb21wb25lbnQncyBpbnN0YW5jZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIF9wcm90byA9IG9uQ2xpY2tPdXRzaWRlLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgaWYgKCFXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVmID0gdGhpcy5pbnN0YW5jZVJlZjtcbiAgICAgIHJldHVybiByZWYuZ2V0SW5zdGFuY2UgPyByZWYuZ2V0SW5zdGFuY2UoKSA6IHJlZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGNsaWNrIGxpc3RlbmVycyB0byB0aGUgY3VycmVudCBkb2N1bWVudCxcbiAgICAgKiBsaW5rZWQgdG8gdGhpcyBjb21wb25lbnQncyBzdGF0ZS5cbiAgICAgKi9cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIElmIHdlIGFyZSBpbiBhbiBlbnZpcm9ubWVudCB3aXRob3V0IGEgRE9NIHN1Y2hcbiAgICAgIC8vIGFzIHNoYWxsb3cgcmVuZGVyaW5nIG9yIHNuYXBzaG90cyB0aGVuIHdlIGV4aXRcbiAgICAgIC8vIGVhcmx5IHRvIHByZXZlbnQgYW55IHVuaGFuZGxlZCBlcnJvcnMgYmVpbmcgdGhyb3duLlxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XG5cbiAgICAgIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZy5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fX2NsaWNrT3V0c2lkZUhhbmRsZXJQcm9wID0gY29uZmlnLmhhbmRsZUNsaWNrT3V0c2lkZShpbnN0YW5jZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9fY2xpY2tPdXRzaWRlSGFuZGxlclByb3AgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcmFwcGVkQ29tcG9uZW50OiBcIiArIGNvbXBvbmVudE5hbWUgKyBcIiBsYWNrcyBhIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIG91dHNpZGUgY2xpY2sgZXZlbnRzIHNwZWNpZmllZCBieSB0aGUgaGFuZGxlQ2xpY2tPdXRzaWRlIGNvbmZpZyBvcHRpb24uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcG9uZW50Tm9kZSA9IHRoaXMuX19nZXRDb21wb25lbnROb2RlKCk7IC8vIHJldHVybiBlYXJseSBzbyB3ZSBkb250IGluaXRpYXRlIG9uQ2xpY2tPdXRzaWRlXG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSkgcmV0dXJuO1xuICAgICAgdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5jb21wb25lbnROb2RlID0gdGhpcy5fX2dldENvbXBvbmVudE5vZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZG9jdW1lbnQncyBldmVudCBsaXN0ZW5lcnMgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICovXG5cblxuICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbiBiZSBjYWxsZWQgdG8gZXhwbGljaXRseSBlbmFibGUgZXZlbnQgbGlzdGVuaW5nXG4gICAgICogZm9yIGNsaWNrcyBhbmQgdG91Y2hlcyBvdXRzaWRlIG9mIHRoaXMgZWxlbWVudC5cbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogUGFzcy10aHJvdWdoIHJlbmRlclxuICAgICAqL1xuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGV4Y2x1ZGVTY3JvbGxiYXIgPSBfcHJvcHMuZXhjbHVkZVNjcm9sbGJhcixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcImV4Y2x1ZGVTY3JvbGxiYXJcIl0pO1xuXG4gICAgICBpZiAoV3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICBwcm9wcy5yZWYgPSB0aGlzLmdldFJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLndyYXBwZWRSZWYgPSB0aGlzLmdldFJlZjtcbiAgICAgIH1cblxuICAgICAgcHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGU7XG4gICAgICBwcm9wcy5lbmFibGVPbkNsaWNrT3V0c2lkZSA9IHRoaXMuZW5hYmxlT25DbGlja091dHNpZGU7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBvbkNsaWNrT3V0c2lkZTtcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBcIk9uQ2xpY2tPdXRzaWRlKFwiICsgY29tcG9uZW50TmFtZSArIFwiKVwiLCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGV2ZW50VHlwZXM6IFsnbW91c2Vkb3duJywgJ3RvdWNoc3RhcnQnXSxcbiAgICBleGNsdWRlU2Nyb2xsYmFyOiBjb25maWcgJiYgY29uZmlnLmV4Y2x1ZGVTY3JvbGxiYXIgfHwgZmFsc2UsXG4gICAgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3M6IElHTk9SRV9DTEFTU19OQU1FLFxuICAgIHByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlXG4gIH0sIF9jbGFzcy5nZXRDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5nZXRDbGFzcyA/IFdyYXBwZWRDb21wb25lbnQuZ2V0Q2xhc3MoKSA6IFdyYXBwZWRDb21wb25lbnQ7XG4gIH0sIF90ZW1wO1xufVxuXG5leHBvcnQgeyBJR05PUkVfQ0xBU1NfTkFNRSB9O1xuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGVIT0M7XG4iLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ29udGV4dCBmcm9tICdAaHlwbm9zcGhpL2NyZWF0ZS1yZWFjdC1jb250ZXh0JztcbmV4cG9ydCB2YXIgTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IHZhciBNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbnZhciBNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hbmFnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1hbmFnZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwicmVmZXJlbmNlTm9kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInNldFJlZmVyZW5jZU5vZGVcIiwgZnVuY3Rpb24gKG5ld1JlZmVyZW5jZU5vZGUpIHtcbiAgICAgIGlmIChuZXdSZWZlcmVuY2VOb2RlICYmIF90aGlzLnJlZmVyZW5jZU5vZGUgIT09IG5ld1JlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgX3RoaXMucmVmZXJlbmNlTm9kZSA9IG5ld1JlZmVyZW5jZU5vZGU7XG5cbiAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlZmVyZW5jZU5vZGUgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5yZWZlcmVuY2VOb2RlXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnNldFJlZmVyZW5jZU5vZGVcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hbmFnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7IE1hbmFnZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tIFwiZGVlcC1lcXVhbFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHBlckpTIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQgeyBNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQgfSBmcm9tICcuL01hbmFnZXInO1xuaW1wb3J0IHsgdW53cmFwQXJyYXksIHNldFJlZiwgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi91dGlscyc7XG52YXIgaW5pdGlhbFN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICBvcGFjaXR5OiAwLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbn07XG52YXIgaW5pdGlhbEFycm93U3R5bGUgPSB7fTtcbmV4cG9ydCB2YXIgSW5uZXJQb3BwZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5uZXJQb3BwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElubmVyUG9wcGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInN0YXRlXCIsIHtcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIHBsYWNlbWVudDogdW5kZWZpbmVkXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwicG9wcGVySW5zdGFuY2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJwb3BwZXJOb2RlXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImFycm93Tm9kZVwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzZXRQb3BwZXJOb2RlXCIsIGZ1bmN0aW9uIChwb3BwZXJOb2RlKSB7XG4gICAgICBpZiAoIXBvcHBlck5vZGUgfHwgX3RoaXMucG9wcGVyTm9kZSA9PT0gcG9wcGVyTm9kZSkgcmV0dXJuO1xuICAgICAgc2V0UmVmKF90aGlzLnByb3BzLmlubmVyUmVmLCBwb3BwZXJOb2RlKTtcbiAgICAgIF90aGlzLnBvcHBlck5vZGUgPSBwb3BwZXJOb2RlO1xuXG4gICAgICBfdGhpcy51cGRhdGVQb3BwZXJJbnN0YW5jZSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInNldEFycm93Tm9kZVwiLCBmdW5jdGlvbiAoYXJyb3dOb2RlKSB7XG4gICAgICBfdGhpcy5hcnJvd05vZGUgPSBhcnJvd05vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwidXBkYXRlU3RhdGVNb2RpZmllclwiLCB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgb3JkZXI6IDkwMCxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihkYXRhKSB7XG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJnZXRPcHRpb25zXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogX3RoaXMucHJvcHMucGxhY2VtZW50LFxuICAgICAgICBldmVudHNFbmFibGVkOiBfdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkLFxuICAgICAgICBwb3NpdGlvbkZpeGVkOiBfdGhpcy5wcm9wcy5wb3NpdGlvbkZpeGVkLFxuICAgICAgICBtb2RpZmllcnM6IF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcy5tb2RpZmllcnMsIHtcbiAgICAgICAgICBhcnJvdzogX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLm1vZGlmaWVycyAmJiBfdGhpcy5wcm9wcy5tb2RpZmllcnMuYXJyb3csIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6ICEhX3RoaXMuYXJyb3dOb2RlLFxuICAgICAgICAgICAgZWxlbWVudDogX3RoaXMuYXJyb3dOb2RlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXBwbHlTdHlsZToge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZVN0YXRlTW9kaWZpZXI6IF90aGlzLnVwZGF0ZVN0YXRlTW9kaWZpZXJcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiZ2V0UG9wcGVyU3R5bGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFfdGhpcy5wb3BwZXJOb2RlIHx8ICFfdGhpcy5zdGF0ZS5kYXRhID8gaW5pdGlhbFN0eWxlIDogX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogX3RoaXMuc3RhdGUuZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvblxuICAgICAgfSwgX3RoaXMuc3RhdGUuZGF0YS5zdHlsZXMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImdldFBvcHBlclBsYWNlbWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmRhdGEgPyB1bmRlZmluZWQgOiBfdGhpcy5zdGF0ZS5wbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwiZ2V0QXJyb3dTdHlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLmFycm93Tm9kZSB8fCAhX3RoaXMuc3RhdGUuZGF0YSA/IGluaXRpYWxBcnJvd1N0eWxlIDogX3RoaXMuc3RhdGUuZGF0YS5hcnJvd1N0eWxlcztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJnZXRPdXRPZkJvdW5kYXJpZXNTdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZGF0YSA/IF90aGlzLnN0YXRlLmRhdGEuaGlkZSA6IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJkZXN0cm95UG9wcGVySW5zdGFuY2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wb3BwZXJJbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG5cbiAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJ1cGRhdGVQb3BwZXJJbnN0YW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICAgIHBvcHBlck5vZGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucG9wcGVyTm9kZTtcblxuICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBfdGhpcy5wcm9wcy5yZWZlcmVuY2VFbGVtZW50O1xuICAgICAgaWYgKCFyZWZlcmVuY2VFbGVtZW50IHx8ICFwb3BwZXJOb2RlKSByZXR1cm47XG4gICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZSA9IG5ldyBQb3BwZXJKUyhyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJOb2RlLCBfdGhpcy5nZXRPcHRpb25zKCkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInNjaGVkdWxlVXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZS5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElubmVyUG9wcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gSWYgdGhlIFBvcHBlci5qcyBvcHRpb25zIGhhdmUgY2hhbmdlZCwgdXBkYXRlIHRoZSBpbnN0YW5jZSAoZGVzdHJveSArIGNyZWF0ZSlcbiAgICBpZiAodGhpcy5wcm9wcy5wbGFjZW1lbnQgIT09IHByZXZQcm9wcy5wbGFjZW1lbnQgfHwgdGhpcy5wcm9wcy5yZWZlcmVuY2VFbGVtZW50ICE9PSBwcmV2UHJvcHMucmVmZXJlbmNlRWxlbWVudCB8fCB0aGlzLnByb3BzLnBvc2l0aW9uRml4ZWQgIT09IHByZXZQcm9wcy5wb3NpdGlvbkZpeGVkIHx8ICFkZWVwRXF1YWwodGhpcy5wcm9wcy5tb2RpZmllcnMsIHByZXZQcm9wcy5tb2RpZmllcnMsIHtcbiAgICAgIHN0cmljdDogdHJ1ZVxuICAgIH0pKSB7XG4gICAgICAvLyBkZXZlbG9wIG9ubHkgY2hlY2sgdGhhdCBtb2RpZmllcnMgaXNuJ3QgYmVpbmcgdXBkYXRlZCBuZWVkbGVzc2x5XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RpZmllcnMgIT09IHByZXZQcm9wcy5tb2RpZmllcnMgJiYgdGhpcy5wcm9wcy5tb2RpZmllcnMgIT0gbnVsbCAmJiBwcmV2UHJvcHMubW9kaWZpZXJzICE9IG51bGwgJiYgc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMubW9kaWZpZXJzLCBwcmV2UHJvcHMubW9kaWZpZXJzKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIidtb2RpZmllcnMnIHByb3AgcmVmZXJlbmNlIHVwZGF0ZWQgZXZlbiB0aG91Z2ggYWxsIHZhbHVlcyBhcHBlYXIgdGhlIHNhbWUuXFxuQ29uc2lkZXIgbWVtb2l6aW5nIHRoZSAnbW9kaWZpZXJzJyBvYmplY3QgdG8gYXZvaWQgbmVlZGxlc3MgcmVuZGVyaW5nLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVBvcHBlckluc3RhbmNlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQgIT09IHByZXZQcm9wcy5ldmVudHNFbmFibGVkICYmIHRoaXMucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCA/IHRoaXMucG9wcGVySW5zdGFuY2UuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSA6IHRoaXMucG9wcGVySW5zdGFuY2UuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBBIHBsYWNlbWVudCBkaWZmZXJlbmNlIGluIHN0YXRlIG1lYW5zIHBvcHBlciBkZXRlcm1pbmVkIGEgbmV3IHBsYWNlbWVudFxuICAgIC8vIGFwYXJ0IGZyb20gdGhlIHByb3BzIHZhbHVlLiBCeSB0aGUgdGltZSB0aGUgcG9wcGVyIGVsZW1lbnQgaXMgcmVuZGVyZWQgd2l0aFxuICAgIC8vIHRoZSBuZXcgcG9zaXRpb24gUG9wcGVyIGhhcyBhbHJlYWR5IG1lYXN1cmVkIGl0LCBpZiB0aGUgcGxhY2UgY2hhbmdlIHRyaWdnZXJzXG4gICAgLy8gYSBzaXplIGNoYW5nZSBpdCB3aWxsIHJlc3VsdCBpbiBhIG1pc2FsaWduZWQgcG9wcGVyLiBTbyB3ZSBzY2hlZHVsZSBhbiB1cGRhdGUgdG8gYmUgc3VyZS5cblxuXG4gICAgaWYgKHByZXZTdGF0ZS5wbGFjZW1lbnQgIT09IHRoaXMuc3RhdGUucGxhY2VtZW50KSB7XG4gICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldFJlZih0aGlzLnByb3BzLmlubmVyUmVmLCBudWxsKTtcbiAgICB0aGlzLmRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKHtcbiAgICAgIHJlZjogdGhpcy5zZXRQb3BwZXJOb2RlLFxuICAgICAgc3R5bGU6IHRoaXMuZ2V0UG9wcGVyU3R5bGUoKSxcbiAgICAgIHBsYWNlbWVudDogdGhpcy5nZXRQb3BwZXJQbGFjZW1lbnQoKSxcbiAgICAgIG91dE9mQm91bmRhcmllczogdGhpcy5nZXRPdXRPZkJvdW5kYXJpZXNTdGF0ZSgpLFxuICAgICAgc2NoZWR1bGVVcGRhdGU6IHRoaXMuc2NoZWR1bGVVcGRhdGUsXG4gICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgIHJlZjogdGhpcy5zZXRBcnJvd05vZGUsXG4gICAgICAgIHN0eWxlOiB0aGlzLmdldEFycm93U3R5bGUoKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbm5lclBvcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KElubmVyUG9wcGVyLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG4gIHJlZmVyZW5jZUVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgcG9zaXRpb25GaXhlZDogZmFsc2Vcbn0pO1xuXG52YXIgcGxhY2VtZW50cyA9IFBvcHBlckpTLnBsYWNlbWVudHM7XG5leHBvcnQgeyBwbGFjZW1lbnRzIH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3BwZXIoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IF9yZWYucmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wicmVmZXJlbmNlRWxlbWVudFwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAocmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KElubmVyUG9wcGVyLCBfZXh0ZW5kcyh7XG4gICAgICByZWZlcmVuY2VFbGVtZW50OiByZWZlcmVuY2VFbGVtZW50ICE9PSB1bmRlZmluZWQgPyByZWZlcmVuY2VFbGVtZW50IDogcmVmZXJlbmNlTm9kZVxuICAgIH0sIHByb3BzKSk7XG4gIH0pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCB7IE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dCB9IGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgeyBzYWZlSW52b2tlLCB1bndyYXBBcnJheSwgc2V0UmVmIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBJbm5lclJlZmVyZW5jZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbm5lclJlZmVyZW5jZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5uZXJSZWZlcmVuY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwicmVmSGFuZGxlclwiLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc2V0UmVmKF90aGlzLnByb3BzLmlubmVyUmVmLCBub2RlKTtcbiAgICAgIHNhZmVJbnZva2UoX3RoaXMucHJvcHMuc2V0UmVmZXJlbmNlTm9kZSwgbm9kZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJSZWZlcmVuY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldFJlZih0aGlzLnByb3BzLmlubmVyUmVmLCBudWxsKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHdhcm5pbmcoQm9vbGVhbih0aGlzLnByb3BzLnNldFJlZmVyZW5jZU5vZGUpLCAnYFJlZmVyZW5jZWAgc2hvdWxkIG5vdCBiZSB1c2VkIG91dHNpZGUgb2YgYSBgTWFuYWdlcmAgY29tcG9uZW50LicpO1xuICAgIHJldHVybiB1bndyYXBBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSh7XG4gICAgICByZWY6IHRoaXMucmVmSGFuZGxlclxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbm5lclJlZmVyZW5jZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmZXJlbmNlKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNldFJlZmVyZW5jZU5vZGUpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbm5lclJlZmVyZW5jZSwgX2V4dGVuZHMoe1xuICAgICAgc2V0UmVmZXJlbmNlTm9kZTogc2V0UmVmZXJlbmNlTm9kZVxuICAgIH0sIHByb3BzKSk7XG4gIH0pO1xufSIsIi8vIFB1YmxpYyBjb21wb25lbnRzXG5pbXBvcnQgUG9wcGVyLCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL1BvcHBlcic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tICcuL1JlZmVyZW5jZSc7XG5leHBvcnQgeyBQb3BwZXIsIHBsYWNlbWVudHMsIE1hbmFnZXIsIFJlZmVyZW5jZSB9OyAvLyBQdWJsaWMgdHlwZXMiLCIvKipcbiAqIFRha2VzIGFuIGFyZ3VtZW50IGFuZCBpZiBpdCdzIGFuIGFycmF5LCByZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheSxcbiAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBhcmd1bWVudC4gVXNlZCBmb3IgUHJlYWN0IGNvbXBhdGliaWxpdHkuXG4gKi9cbmV4cG9ydCB2YXIgdW53cmFwQXJyYXkgPSBmdW5jdGlvbiB1bndyYXBBcnJheShhcmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKSA/IGFyZ1swXSA6IGFyZztcbn07XG4vKipcbiAqIFRha2VzIGEgbWF5YmUtdW5kZWZpbmVkIGZ1bmN0aW9uIGFuZCBhcmJpdHJhcnkgYXJncyBhbmQgaW52b2tlcyB0aGUgZnVuY3Rpb25cbiAqIG9ubHkgaWYgaXQgaXMgZGVmaW5lZC5cbiAqL1xuXG5leHBvcnQgdmFyIHNhZmVJbnZva2UgPSBmdW5jdGlvbiBzYWZlSW52b2tlKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICB9XG59O1xuLyoqXG4gKiBEb2VzIGEgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBvZiB0d28gb2JqZWN0cyBieSBjb21wYXJpbmcgdGhlIHJlZmVyZW5jZVxuICogZXF1YWxpdHkgb2YgZWFjaCB2YWx1ZS5cbiAqL1xuXG5leHBvcnQgdmFyIHNoYWxsb3dFcXVhbCA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoYktleXMubGVuZ3RoICE9PSBhS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuXG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBTZXRzIGEgcmVmIHVzaW5nIGVpdGhlciBhIHJlZiBjYWxsYmFjayBvciBhIHJlZiBvYmplY3RcbiAqL1xuXG5leHBvcnQgdmFyIHNldFJlZiA9IGZ1bmN0aW9uIHNldFJlZihyZWYsIG5vZGUpIHtcbiAgLy8gaWYgaXRzIGEgZnVuY3Rpb24gY2FsbCBpdFxuICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNhZmVJbnZva2UocmVmLCBub2RlKTtcbiAgfSAvLyBvdGhlcndpc2Ugd2Ugc2hvdWxkIHRyZWF0IGl0IGFzIGEgcmVmIG9iamVjdFxuICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYWdzKCkge1xuXHRpZiAodGhpcyAhPSBudWxsICYmIHRoaXMgIT09ICRPYmplY3QodGhpcykpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVnRXhwLnByb3RvdHlwZS5mbGFncyBnZXR0ZXIgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gJyc7XG5cdGlmICh0aGlzLmdsb2JhbCkge1xuXHRcdHJlc3VsdCArPSAnZyc7XG5cdH1cblx0aWYgKHRoaXMuaWdub3JlQ2FzZSkge1xuXHRcdHJlc3VsdCArPSAnaSc7XG5cdH1cblx0aWYgKHRoaXMubXVsdGlsaW5lKSB7XG5cdFx0cmVzdWx0ICs9ICdtJztcblx0fVxuXHRpZiAodGhpcy5kb3RBbGwpIHtcblx0XHRyZXN1bHQgKz0gJ3MnO1xuXHR9XG5cdGlmICh0aGlzLnVuaWNvZGUpIHtcblx0XHRyZXN1bHQgKz0gJ3UnO1xuXHR9XG5cdGlmICh0aGlzLnN0aWNreSkge1xuXHRcdHJlc3VsdCArPSAneSc7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBmbGFnc0JvdW5kID0gY2FsbEJpbmQoaW1wbGVtZW50YXRpb24pO1xuXG5kZWZpbmUoZmxhZ3NCb3VuZCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhZ3NCb3VuZDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciAkZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZ0V4cC5wcm90b3R5cGUuZmxhZ3MgcmVxdWlyZXMgYSB0cnVlIEVTNSBlbnZpcm9ubWVudCB0aGF0IHN1cHBvcnRzIHByb3BlcnR5IGRlc2NyaXB0b3JzJyk7XG5cdH1cblx0aWYgKCgvYS9taWcpLmZsYWdzID09PSAnZ2ltJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gJGdPUEQoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJyk7XG5cdFx0aWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiAoL2EvKS5kb3RBbGwgPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuIGRlc2NyaXB0b3IuZ2V0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBUeXBlRXJyID0gVHlwZUVycm9yO1xudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIHJlZ2V4ID0gL2EvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1GbGFncygpIHtcblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzIHx8ICFnZXRQcm90bykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIHJlcXVpcmVzIGEgdHJ1ZSBFUzUgZW52aXJvbm1lbnQgdGhhdCBzdXBwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycycpO1xuXHR9XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdHZhciBwcm90byA9IGdldFByb3RvKHJlZ2V4KTtcblx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCAnZmxhZ3MnKTtcblx0aWYgKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3IuZ2V0ICE9PSBwb2x5ZmlsbCkge1xuXHRcdGRlZmluZVByb3BlcnR5KHByb3RvLCAnZmxhZ3MnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogcG9seWZpbGxcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==