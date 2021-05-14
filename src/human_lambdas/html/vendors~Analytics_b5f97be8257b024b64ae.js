(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~Analytics"],{

/***/ "./node_modules/@sentry/fullstory/dist/index.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/fullstory/dist/index.es.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _fullstory_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullstory/browser */ "./node_modules/@fullstory/browser/dist/index.esm.js");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Split the URL into different parts
 * taken from https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
 * @param {string} url
 */
var splitUrlIntoParts = function (url) {
    var reURLInformation = new RegExp([
        '^(https?:)//',
        '(([^:/?#]*)(?::([0-9]+))?)',
        '(/{0,1}[^?#]*)',
        '(\\?[^#]*|)',
        '(#.*|)$',
    ].join(''));
    return url.match(reURLInformation);
};
/**
 * Get the project ID from a Sentry DSN
 * @param {string} dsn
 */
var getProjectIdFromSentryDsn = function (dsn) {
    var parts = splitUrlIntoParts(dsn);
    if (!parts) {
        throw new Error('Cannot parse DSN');
    }
    return parts[5].replace('/', '');
};
var isError = function (exception) {
    return exception.message !== undefined;
};
/**
 * Get the message and name properties from the original exception
 * @param {EventHint} hint
 */
var getOriginalExceptionProperties = function (hint) {
    if (hint && hint.originalException && isError(hint.originalException)) {
        var originalException = hint.originalException;
        var name_1 = originalException.name, message = originalException.message;
        return { name: name_1, message: message };
    }
    return {};
};

var SentryFullStory = /** @class */ (function () {
    function SentryFullStory(sentryOrg, options) {
        if (options === void 0) { options = {}; }
        this.name = SentryFullStory.id;
        this.sentryOrg = sentryOrg;
        this.baseSentryUrl = options.baseSentryUrl || 'https://sentry.io';
    }
    SentryFullStory.prototype.setupOnce = function () {
        var _this = this;
        Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"])(function (event$1, hint) {
            //Returns the sentry URL of the error
            //If we cannot get the URL, return a string saying we cannot
            var getSentryUrl = function () {
                var _a;
                try {
                    //No docs on this but the SDK team assures me it works unless you bind another Sentry client
                    var dsn = (((_a = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient()) === null || _a === void 0 ? void 0 : _a.getOptions()) || {}).dsn;
                    if (!dsn) {
                        console.error('No sn');
                        return 'Could not retrieve url';
                    }
                    if (!hint) {
                        console.error('No event hint');
                        return 'Could not retrieve url';
                    }
                    var projectId = getProjectIdFromSentryDsn(dsn);
                    return _this.baseSentryUrl + "/organizations/" + _this.sentryOrg + "/issues/?project=" + projectId + "&query=" + hint.event_id;
                }
                catch (err) {
                    console.error('Error retrieving project ID from DSN', err);
                    //TODO: Could put link to a help here
                    return 'Could not retrieve url';
                }
            };
            var self = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getIntegration(SentryFullStory);
            // Run the integration ONLY when it was installed on the current Hub
            if (self) {
                // getCurrentSessionURL isn't available until after the FullStory script is fully bootstrapped.
                // If an error occurs before getCurrentSessionURL is ready, make a note in Sentry and move on.
                // More on getCurrentSessionURL here: https://help.fullstory.com/develop-js/getcurrentsessionurl
                event$1.contexts = __assign(__assign({}, event$1.contexts), { fullStory: {
                        fullStoryUrl: Object(_fullstory_browser__WEBPACK_IMPORTED_MODULE_1__["getCurrentSessionURL"])(true) ||
                            'current session URL API not ready',
                    } });
                // FS.event is immediately ready even if FullStory isn't fully bootstrapped
                Object(_fullstory_browser__WEBPACK_IMPORTED_MODULE_1__["event"])('Sentry Error', __assign({ sentryUrl: getSentryUrl() }, getOriginalExceptionProperties(hint)));
            }
            return event$1;
        });
    };
    SentryFullStory.id = 'SentryFullStory';
    return SentryFullStory;
}());

/* harmony default export */ __webpack_exports__["default"] = (SentryFullStory);


/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/angular.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/angular.js ***!
  \**********************************************************/
/*! exports provided: Angular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular", function() { return Angular; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


// See https://github.com/angular/angular.js/blob/v1.4.7/src/minErr.js
var angularPattern = /^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/;
/**
 * AngularJS integration
 *
 * Provides an $exceptionHandler for AngularJS
 */
var Angular = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Angular(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Angular.id;
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('You are still using the Angular integration, consider moving to @sentry/angular');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        this._angular = options.angular || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])().angular;
        if (!this._angular) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('AngularIntegration is missing an Angular instance');
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this._module = this._angular.module(Angular.moduleName, []);
    }
    /**
     * @inheritDoc
     */
    Angular.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        if (!this._module) {
            return;
        }
        this._getCurrentHub = getCurrentHub;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this._module.config([
            '$provide',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function ($provide) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                $provide.decorator('$exceptionHandler', ['$delegate', _this._$exceptionHandlerDecorator.bind(_this)]);
            },
        ]);
    };
    /**
     * Angular's exceptionHandler for Sentry integration
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Angular.prototype._$exceptionHandlerDecorator = function ($delegate) {
        var _this = this;
        return function (exception, cause) {
            var hub = _this._getCurrentHub && _this._getCurrentHub();
            if (hub && hub.getIntegration(Angular)) {
                hub.withScope(function (scope) {
                    if (cause) {
                        scope.setExtra('cause', cause);
                    }
                    scope.addEventProcessor(function (event) {
                        var ex = event.exception && event.exception.values && event.exception.values[0];
                        if (ex) {
                            var matches = angularPattern.exec(ex.value || '');
                            if (matches) {
                                // This type now becomes something like: $rootScope:inprog
                                ex.type = matches[1];
                                ex.value = matches[2];
                                event.message = ex.type + ": " + ex.value;
                                // auto set a new tag specifically for the angular error url
                                event.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.extra), { angularDocs: matches[3].substr(0, 250) });
                            }
                        }
                        return event;
                    });
                    hub.captureException(exception);
                });
            }
            $delegate(exception, cause);
        };
    };
    /**
     * @inheritDoc
     */
    Angular.id = 'AngularJS';
    /**
     * moduleName used in Angular's DI resolution algorithm
     */
    Angular.moduleName = 'ngSentry';
    return Angular;
}());

//# sourceMappingURL=angular.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/captureconsole.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/captureconsole.js ***!
  \*****************************************************************/
/*! exports provided: CaptureConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureConsole", function() { return CaptureConsole; });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
/** Send Console API calls as Sentry Events */
var CaptureConsole = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function CaptureConsole(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = CaptureConsole.id;
        /**
         * @inheritDoc
         */
        this._levels = ['log', 'info', 'warn', 'error', 'debug', 'assert'];
        if (options.levels) {
            this._levels = options.levels;
        }
    }
    /**
     * @inheritDoc
     */
    CaptureConsole.prototype.setupOnce = function (_, getCurrentHub) {
        if (!('console' in global)) {
            return;
        }
        this._levels.forEach(function (level) {
            if (!(level in global.console)) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global.console, level, function (originalConsoleLevel) { return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var hub = getCurrentHub();
                if (hub.getIntegration(CaptureConsole)) {
                    hub.withScope(function (scope) {
                        scope.setLevel(_sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"].fromString(level));
                        scope.setExtra('arguments', args);
                        scope.addEventProcessor(function (event) {
                            event.logger = 'console';
                            return event;
                        });
                        var message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["safeJoin"])(args, ' ');
                        if (level === 'assert') {
                            if (args[0] === false) {
                                message = "Assertion failed: " + (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["safeJoin"])(args.slice(1), ' ') || 'console.assert');
                                scope.setExtra('arguments', args.slice(1));
                                hub.captureMessage(message);
                            }
                        }
                        else {
                            hub.captureMessage(message);
                        }
                    });
                }
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            }; });
        });
    };
    /**
     * @inheritDoc
     */
    CaptureConsole.id = 'CaptureConsole';
    return CaptureConsole;
}());

//# sourceMappingURL=captureconsole.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/debug.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/debug.js ***!
  \********************************************************/
/*! exports provided: Debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return Debug; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


/** JSDoc */
var Debug = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Debug(options) {
        /**
         * @inheritDoc
         */
        this.name = Debug.id;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ debugger: false, stringify: false }, options);
    }
    /**
     * @inheritDoc
     */
    Debug.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(Debug);
            if (self) {
                if (self._options.debugger) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
                /* eslint-disable no-console */
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["consoleSandbox"])(function () {
                    if (self._options.stringify) {
                        console.log(JSON.stringify(event, null, 2));
                        if (hint) {
                            console.log(JSON.stringify(hint, null, 2));
                        }
                    }
                    else {
                        console.log(event);
                        if (hint) {
                            console.log(hint);
                        }
                    }
                });
                /* eslint-enable no-console */
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    Debug.id = 'Debug';
    return Debug;
}());

//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/dedupe.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/dedupe.js ***!
  \*********************************************************/
/*! exports provided: Dedupe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return Dedupe; });
/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (self._shouldDropEvent(currentEvent, self._previousEvent)) {
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /** JSDoc */
    Dedupe.prototype._shouldDropEvent = function (currentEvent, previousEvent) {
        if (!previousEvent) {
            return false;
        }
        if (this._isSameMessageEvent(currentEvent, previousEvent)) {
            return true;
        }
        if (this._isSameExceptionEvent(currentEvent, previousEvent)) {
            return true;
        }
        return false;
    };
    /** JSDoc */
    Dedupe.prototype._isSameMessageEvent = function (currentEvent, previousEvent) {
        var currentMessage = currentEvent.message;
        var previousMessage = previousEvent.message;
        // If neither event has a message property, they were both exceptions, so bail out
        if (!currentMessage && !previousMessage) {
            return false;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
            return false;
        }
        if (currentMessage !== previousMessage) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // @ts-ignore Object could be undefined
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        return undefined;
    };
    /** JSDoc */
    Dedupe.prototype._isSameStacktrace = function (currentEvent, previousEvent) {
        var currentFrames = this._getFramesFromEvent(currentEvent);
        var previousFrames = this._getFramesFromEvent(previousEvent);
        // If neither event has a stacktrace, they are assumed to be the same
        if (!currentFrames && !previousFrames) {
            return true;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
            return false;
        }
        currentFrames = currentFrames;
        previousFrames = previousFrames;
        // If number of frames differ, they are not the same
        if (previousFrames.length !== currentFrames.length) {
            return false;
        }
        // Otherwise, compare the two
        for (var i = 0; i < previousFrames.length; i++) {
            var frameA = previousFrames[i];
            var frameB = currentFrames[i];
            if (frameA.filename !== frameB.filename ||
                frameA.lineno !== frameB.lineno ||
                frameA.colno !== frameB.colno ||
                frameA.function !== frameB.function) {
                return false;
            }
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._getExceptionFromEvent = function (event) {
        return event.exception && event.exception.values && event.exception.values[0];
    };
    /** JSDoc */
    Dedupe.prototype._isSameExceptionEvent = function (currentEvent, previousEvent) {
        var previousException = this._getExceptionFromEvent(previousEvent);
        var currentException = this._getExceptionFromEvent(currentEvent);
        if (!previousException || !currentException) {
            return false;
        }
        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
            return false;
        }
        if (!this._isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this._isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype._isSameFingerprint = function (currentEvent, previousEvent) {
        var currentFingerprint = currentEvent.fingerprint;
        var previousFingerprint = previousEvent.fingerprint;
        // If neither event has a fingerprint, they are assumed to be the same
        if (!currentFingerprint && !previousFingerprint) {
            return true;
        }
        // If only one event has a fingerprint, but not the other one, they are not the same
        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
            return false;
        }
        currentFingerprint = currentFingerprint;
        previousFingerprint = previousFingerprint;
        // Otherwise, compare the two
        try {
            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
        }
        catch (_oO) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

//# sourceMappingURL=dedupe.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/ember.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/ember.js ***!
  \********************************************************/
/*! exports provided: Ember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ember", function() { return Ember; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");

/** JSDoc */
var Ember = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Ember(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Ember.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        this._Ember = options.Ember || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])().Ember;
    }
    /**
     * @inheritDoc
     */
    Ember.prototype.setupOnce = function (_, getCurrentHub) {
        var _this = this;
        if (!this._Ember) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error('EmberIntegration is missing an Ember instance');
            return;
        }
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        var oldOnError = this._Ember.onerror;
        this._Ember.onerror = function (error) {
            if (getCurrentHub().getIntegration(Ember)) {
                getCurrentHub().captureException(error, { originalException: error });
            }
            if (typeof oldOnError === 'function') {
                oldOnError.call(_this._Ember, error);
            }
            else if (_this._Ember.testing) {
                throw error;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._Ember.RSVP.on('error', function (reason) {
            if (getCurrentHub().getIntegration(Ember)) {
                getCurrentHub().withScope(function (scope) {
                    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isInstanceOf"])(reason, Error)) {
                        scope.setExtra('context', 'Unhandled Promise error detected');
                        getCurrentHub().captureException(reason, { originalException: reason });
                    }
                    else {
                        scope.setExtra('reason', reason);
                        getCurrentHub().captureMessage('Unhandled Promise error detected');
                    }
                });
            }
        });
    };
    /**
     * @inheritDoc
     */
    Ember.id = 'Ember';
    return Ember;
}());

//# sourceMappingURL=ember.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/extraerrordata.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/extraerrordata.js ***!
  \*****************************************************************/
/*! exports provided: ExtraErrorData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraErrorData", function() { return ExtraErrorData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


/** Patch toString calls to return proper name for wrapped functions */
var ExtraErrorData = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ExtraErrorData(_options) {
        if (_options === void 0) { _options = { depth: 3 }; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = ExtraErrorData.id;
    }
    /**
     * @inheritDoc
     */
    ExtraErrorData.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event, hint) {
            var self = getCurrentHub().getIntegration(ExtraErrorData);
            if (!self) {
                return event;
            }
            return self.enhanceEventWithErrorData(event, hint);
        });
    };
    /**
     * Attaches extracted information from the Error object to extra field in the Event
     */
    ExtraErrorData.prototype.enhanceEventWithErrorData = function (event, hint) {
        var _a;
        if (!hint || !hint.originalException || !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isError"])(hint.originalException)) {
            return event;
        }
        var name = hint.originalException.name || hint.originalException.constructor.name;
        var errorData = this._extractErrorData(hint.originalException);
        if (errorData) {
            var contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.contexts);
            var normalizedErrorData = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(errorData, this._options.depth);
            if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(normalizedErrorData)) {
                contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.contexts), (_a = {}, _a[name] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, normalizedErrorData), _a));
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { contexts: contexts });
        }
        return event;
    };
    /**
     * Extract extra information from the Error object
     */
    ExtraErrorData.prototype._extractErrorData = function (error) {
        var e_1, _a;
        var result = null;
        // We are trying to enhance already existing event, so no harm done if it won't succeed
        try {
            var nativeKeys_1 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber'];
            var errorKeys = Object.getOwnPropertyNames(error).filter(function (key) { return nativeKeys_1.indexOf(key) === -1; });
            if (errorKeys.length) {
                var extraErrorInfo = {};
                try {
                    for (var errorKeys_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(errorKeys), errorKeys_1_1 = errorKeys_1.next(); !errorKeys_1_1.done; errorKeys_1_1 = errorKeys_1.next()) {
                        var key = errorKeys_1_1.value;
                        var value = error[key];
                        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isError"])(value)) {
                            value = value.toString();
                        }
                        extraErrorInfo[key] = value;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (errorKeys_1_1 && !errorKeys_1_1.done && (_a = errorKeys_1.return)) _a.call(errorKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                result = extraErrorInfo;
            }
        }
        catch (oO) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Unable to extract extra data from the Error object:', oO);
        }
        return result;
    };
    /**
     * @inheritDoc
     */
    ExtraErrorData.id = 'ExtraErrorData';
    return ExtraErrorData;
}());

//# sourceMappingURL=extraerrordata.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/index.js ***!
  \********************************************************/
/*! exports provided: Angular, CaptureConsole, Debug, Dedupe, Ember, ExtraErrorData, Offline, ReportingObserver, RewriteFrames, SessionTiming, Transaction, Vue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular */ "./node_modules/@sentry/integrations/esm/angular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Angular", function() { return _angular__WEBPACK_IMPORTED_MODULE_0__["Angular"]; });

/* harmony import */ var _captureconsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captureconsole */ "./node_modules/@sentry/integrations/esm/captureconsole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptureConsole", function() { return _captureconsole__WEBPACK_IMPORTED_MODULE_1__["CaptureConsole"]; });

/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./node_modules/@sentry/integrations/esm/debug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return _debug__WEBPACK_IMPORTED_MODULE_2__["Debug"]; });

/* harmony import */ var _dedupe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dedupe */ "./node_modules/@sentry/integrations/esm/dedupe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return _dedupe__WEBPACK_IMPORTED_MODULE_3__["Dedupe"]; });

/* harmony import */ var _ember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ember */ "./node_modules/@sentry/integrations/esm/ember.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ember", function() { return _ember__WEBPACK_IMPORTED_MODULE_4__["Ember"]; });

/* harmony import */ var _extraerrordata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extraerrordata */ "./node_modules/@sentry/integrations/esm/extraerrordata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtraErrorData", function() { return _extraerrordata__WEBPACK_IMPORTED_MODULE_5__["ExtraErrorData"]; });

/* harmony import */ var _offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offline */ "./node_modules/@sentry/integrations/esm/offline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Offline", function() { return _offline__WEBPACK_IMPORTED_MODULE_6__["Offline"]; });

/* harmony import */ var _reportingobserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reportingobserver */ "./node_modules/@sentry/integrations/esm/reportingobserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportingObserver", function() { return _reportingobserver__WEBPACK_IMPORTED_MODULE_7__["ReportingObserver"]; });

/* harmony import */ var _rewriteframes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rewriteframes */ "./node_modules/@sentry/integrations/esm/rewriteframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RewriteFrames", function() { return _rewriteframes__WEBPACK_IMPORTED_MODULE_8__["RewriteFrames"]; });

/* harmony import */ var _sessiontiming__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sessiontiming */ "./node_modules/@sentry/integrations/esm/sessiontiming.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionTiming", function() { return _sessiontiming__WEBPACK_IMPORTED_MODULE_9__["SessionTiming"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/integrations/esm/transaction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transaction__WEBPACK_IMPORTED_MODULE_10__["Transaction"]; });

/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vue */ "./node_modules/@sentry/integrations/esm/vue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return _vue__WEBPACK_IMPORTED_MODULE_11__["Vue"]; });













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/offline.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/offline.js ***!
  \**********************************************************/
/*! exports provided: Offline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offline", function() { return Offline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



/**
 * cache offline errors and send when connected
 */
var Offline = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Offline(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Offline.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        this.maxStoredEvents = options.maxStoredEvents || 30; // set a reasonable default
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        this.offlineEventStore = localforage__WEBPACK_IMPORTED_MODULE_2___default.a.createInstance({
            name: 'sentry/offlineEventStore',
        });
    }
    /**
     * @inheritDoc
     */
    Offline.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        var _this = this;
        this.hub = getCurrentHub();
        if ('addEventListener' in this.global) {
            this.global.addEventListener('online', function () {
                _this._sendEvents().catch(function () {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('could not send cached events');
                });
            });
        }
        addGlobalEventProcessor(function (event) {
            if (_this.hub && _this.hub.getIntegration(Offline)) {
                // cache if we are positively offline
                if ('navigator' in _this.global && 'onLine' in _this.global.navigator && !_this.global.navigator.onLine) {
                    _this._cacheEvent(event)
                        .then(function (_event) { return _this._enforceMaxEvents(); })
                        .catch(function (_error) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('could not cache event while offline');
                    });
                    // return null on success or failure, because being offline will still result in an error
                    return null;
                }
            }
            return event;
        });
        // if online now, send any events stored in a previous offline session
        if ('navigator' in this.global && 'onLine' in this.global.navigator && this.global.navigator.onLine) {
            this._sendEvents().catch(function () {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('could not send cached events');
            });
        }
    };
    /**
     * cache an event to send later
     * @param event an event
     */
    Offline.prototype._cacheEvent = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.setItem(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])(), Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(event))];
            });
        });
    };
    /**
     * purge excess events if necessary
     */
    Offline.prototype._enforceMaxEvents = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var events;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                events = [];
                return [2 /*return*/, this.offlineEventStore
                        .iterate(function (event, cacheKey, _index) {
                        // aggregate events
                        events.push({ cacheKey: cacheKey, event: event });
                    })
                        .then(function () {
                        // this promise resolves when the iteration is finished
                        return _this._purgeEvents(
                        // purge all events past maxStoredEvents in reverse chronological order
                        events
                            .sort(function (a, b) { return (b.event.timestamp || 0) - (a.event.timestamp || 0); })
                            .slice(_this.maxStoredEvents < events.length ? _this.maxStoredEvents : events.length)
                            .map(function (event) { return event.cacheKey; }));
                    })
                        .catch(function (_error) {
                        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('could not enforce max events');
                    })];
            });
        });
    };
    /**
     * purge event from cache
     */
    Offline.prototype._purgeEvent = function (cacheKey) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.removeItem(cacheKey)];
            });
        });
    };
    /**
     * purge events from cache
     */
    Offline.prototype._purgeEvents = function (cacheKeys) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // trail with .then to ensure the return type as void and not void|void[]
                return [2 /*return*/, Promise.all(cacheKeys.map(function (cacheKey) { return _this._purgeEvent(cacheKey); })).then()];
            });
        });
    };
    /**
     * send all events
     */
    Offline.prototype._sendEvents = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.offlineEventStore.iterate(function (event, cacheKey, _index) {
                        if (_this.hub) {
                            _this.hub.captureEvent(event);
                            _this._purgeEvent(cacheKey).catch(function (_error) {
                                _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('could not purge event from cache');
                            });
                        }
                        else {
                            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('no hub found - could not send cached event');
                        }
                    })];
            });
        });
    };
    /**
     * @inheritDoc
     */
    Offline.id = 'Offline';
    return Offline;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/reportingobserver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/reportingobserver.js ***!
  \********************************************************************/
/*! exports provided: ReportingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingObserver", function() { return ReportingObserver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


/** JSDoc */
var ReportTypes;
(function (ReportTypes) {
    /** JSDoc */
    ReportTypes["Crash"] = "crash";
    /** JSDoc */
    ReportTypes["Deprecation"] = "deprecation";
    /** JSDoc */
    ReportTypes["Intervention"] = "intervention";
})(ReportTypes || (ReportTypes = {}));
/** Reporting API integration - https://w3c.github.io/reporting/ */
var ReportingObserver = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ReportingObserver(_options) {
        if (_options === void 0) { _options = {
            types: [ReportTypes.Crash, ReportTypes.Deprecation, ReportTypes.Intervention],
        }; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = ReportingObserver.id;
    }
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.setupOnce = function (_, getCurrentHub) {
        if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["supportsReportingObserver"])()) {
            return;
        }
        this._getCurrentHub = getCurrentHub;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var observer = new (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])().ReportingObserver)(this.handler.bind(this), {
            buffered: true,
            types: this._options.types,
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        observer.observe();
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.handler = function (reports) {
        var e_1, _a;
        var hub = this._getCurrentHub && this._getCurrentHub();
        if (!hub || !hub.getIntegration(ReportingObserver)) {
            return;
        }
        var _loop_1 = function (report) {
            hub.withScope(function (scope) {
                scope.setExtra('url', report.url);
                var label = "ReportingObserver [" + report.type + "]";
                var details = 'No details available';
                if (report.body) {
                    // Object.keys doesn't work on ReportBody, as all properties are inheirted
                    var plainBody = {};
                    // eslint-disable-next-line guard-for-in
                    for (var prop in report.body) {
                        plainBody[prop] = report.body[prop];
                    }
                    scope.setExtra('body', plainBody);
                    if (report.type === ReportTypes.Crash) {
                        var body = report.body;
                        // A fancy way to create a message out of crashId OR reason OR both OR fallback
                        details = [body.crashId || '', body.reason || ''].join(' ').trim() || details;
                    }
                    else {
                        var body = report.body;
                        details = body.message || details;
                    }
                }
                hub.captureMessage(label + ": " + details);
            });
        };
        try {
            for (var reports_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(reports), reports_1_1 = reports_1.next(); !reports_1_1.done; reports_1_1 = reports_1.next()) {
                var report = reports_1_1.value;
                _loop_1(report);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reports_1_1 && !reports_1_1.done && (_a = reports_1.return)) _a.call(reports_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.id = 'ReportingObserver';
    return ReportingObserver;
}());

//# sourceMappingURL=reportingobserver.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/rewriteframes.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/rewriteframes.js ***!
  \****************************************************************/
/*! exports provided: RewriteFrames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewriteFrames", function() { return RewriteFrames; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


/** Rewrite event frames paths */
var RewriteFrames = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function RewriteFrames(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = RewriteFrames.id;
        /**
         * @inheritDoc
         */
        this._prefix = 'app:///';
        /**
         * @inheritDoc
         */
        this._iteratee = function (frame) {
            if (!frame.filename) {
                return frame;
            }
            // Check if the frame filename begins with `/` or a Windows-style prefix such as `C:\`
            var isWindowsFrame = /^[A-Z]:\\/.test(frame.filename);
            var startsWithSlash = /^\//.test(frame.filename);
            if (isWindowsFrame || startsWithSlash) {
                var filename = isWindowsFrame
                    ? frame.filename
                        .replace(/^[A-Z]:/, '') // remove Windows-style prefix
                        .replace(/\\/g, '/') // replace all `\\` instances with `/`
                    : frame.filename;
                var base = _this._root ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])(_this._root, filename) : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["basename"])(filename);
                frame.filename = "" + _this._prefix + base;
            }
            return frame;
        };
        if (options.root) {
            this._root = options.root;
        }
        if (options.prefix) {
            this._prefix = options.prefix;
        }
        if (options.iteratee) {
            this._iteratee = options.iteratee;
        }
    }
    /**
     * @inheritDoc
     */
    RewriteFrames.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(RewriteFrames);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /** JSDoc */
    RewriteFrames.prototype.process = function (event) {
        if (event.exception && Array.isArray(event.exception.values)) {
            return this._processExceptionsEvent(event);
        }
        if (event.stacktrace) {
            return this._processStacktraceEvent(event);
        }
        return event;
    };
    /** JSDoc */
    RewriteFrames.prototype._processExceptionsEvent = function (event) {
        var _this = this;
        try {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { exception: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.exception), { 
                    // The check for this is performed inside `process` call itself, safe to skip here
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    values: event.exception.values.map(function (value) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), { stacktrace: _this._processStacktrace(value.stacktrace) })); }) }) });
        }
        catch (_oO) {
            return event;
        }
    };
    /** JSDoc */
    RewriteFrames.prototype._processStacktraceEvent = function (event) {
        try {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { stacktrace: this._processStacktrace(event.stacktrace) });
        }
        catch (_oO) {
            return event;
        }
    };
    /** JSDoc */
    RewriteFrames.prototype._processStacktrace = function (stacktrace) {
        var _this = this;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, stacktrace), { frames: stacktrace && stacktrace.frames && stacktrace.frames.map(function (f) { return _this._iteratee(f); }) });
    };
    /**
     * @inheritDoc
     */
    RewriteFrames.id = 'RewriteFrames';
    return RewriteFrames;
}());

//# sourceMappingURL=rewriteframes.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/sessiontiming.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/sessiontiming.js ***!
  \****************************************************************/
/*! exports provided: SessionTiming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionTiming", function() { return SessionTiming; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** This function adds duration since Sentry was initialized till the time event was sent */
var SessionTiming = /** @class */ (function () {
    function SessionTiming() {
        /**
         * @inheritDoc
         */
        this.name = SessionTiming.id;
        /** Exact time Client was initialized expressed in milliseconds since Unix Epoch. */
        this._startTime = Date.now();
    }
    /**
     * @inheritDoc
     */
    SessionTiming.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(SessionTiming);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    SessionTiming.prototype.process = function (event) {
        var _a;
        var now = Date.now();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { extra: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.extra), (_a = {}, _a['session:start'] = this._startTime, _a['session:duration'] = now - this._startTime, _a['session:end'] = now, _a)) });
    };
    /**
     * @inheritDoc
     */
    SessionTiming.id = 'SessionTiming';
    return SessionTiming;
}());

//# sourceMappingURL=sessiontiming.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/transaction.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/transaction.js ***!
  \**************************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/** Add node transaction to the event */
var Transaction = /** @class */ (function () {
    function Transaction() {
        /**
         * @inheritDoc
         */
        this.name = Transaction.id;
    }
    /**
     * @inheritDoc
     */
    Transaction.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var self = getCurrentHub().getIntegration(Transaction);
            if (self) {
                return self.process(event);
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.process = function (event) {
        var frames = this._getFramesFromEvent(event);
        // use for loop so we don't have to reverse whole frames array
        for (var i = frames.length - 1; i >= 0; i--) {
            var frame = frames[i];
            if (frame.in_app === true) {
                event.transaction = this._getTransaction(frame);
                break;
            }
        }
        return event;
    };
    /** JSDoc */
    Transaction.prototype._getFramesFromEvent = function (event) {
        var exception = event.exception && event.exception.values && event.exception.values[0];
        return (exception && exception.stacktrace && exception.stacktrace.frames) || [];
    };
    /** JSDoc */
    Transaction.prototype._getTransaction = function (frame) {
        return frame.module || frame.function ? (frame.module || '?') + "/" + (frame.function || '?') : '<unknown>';
    };
    /**
     * @inheritDoc
     */
    Transaction.id = 'Transaction';
    return Transaction;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/esm/vue.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/integrations/esm/vue.js ***!
  \******************************************************/
/*! exports provided: Vue, getActiveTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return Vue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return getActiveTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js");


/**
 * Used to extract Tracing integration from the current client,
 * without the need to import `Tracing` itself from the @sentry/apm package.
 * @deprecated as @sentry/tracing should be used over @sentry/apm.
 */
var TRACING_GETTER = {
    id: 'Tracing',
};
/**
 * Used to extract BrowserTracing integration from @sentry/tracing
 */
var BROWSER_TRACING_GETTER = {
    id: 'BrowserTracing',
};
// Mappings from operation to corresponding lifecycle hook.
var HOOKS = {
    activate: ['activated', 'deactivated'],
    create: ['beforeCreate', 'created'],
    destroy: ['beforeDestroy', 'destroyed'],
    mount: ['beforeMount', 'mounted'],
    update: ['beforeUpdate', 'updated'],
};
var COMPONENT_NAME_REGEXP = /(?:^|[-_/])(\w)/g;
var ROOT_COMPONENT_NAME = 'root';
var ANONYMOUS_COMPONENT_NAME = 'anonymous component';
/** JSDoc */
var Vue = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Vue(options) {
        var _this = this;
        /**
         * @inheritDoc
         */
        this.name = Vue.id;
        /**
         * Cache holding already processed component names
         */
        this._componentsCache = {};
        /** Keep it as attribute function, to keep correct `this` binding inside the hooks callbacks  */
        // eslint-disable-next-line @typescript-eslint/typedef
        this._applyTracingHooks = function (vm, getCurrentHub) {
            // Don't attach twice, just in case
            if (vm.$options.$_sentryPerfHook) {
                return;
            }
            vm.$options.$_sentryPerfHook = true;
            var name = _this._getComponentName(vm);
            var rootMount = name === ROOT_COMPONENT_NAME;
            var spans = {};
            // Render hook starts after once event is emitted,
            // but it ends before the second event of the same type.
            //
            // Because of this, we start measuring inside the first event,
            // but finish it before it triggers, to skip the event emitter timing itself.
            var rootHandler = function (hook) {
                var now = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
                // On the first handler call (before), it'll be undefined, as `$once` will add it in the future.
                // However, on the second call (after), it'll be already in place.
                if (_this._rootSpan) {
                    _this._finishRootSpan(now, getCurrentHub);
                }
                else {
                    vm.$once("hook:" + hook, function () {
                        // Create an activity on the first event call. There'll be no second call, as rootSpan will be in place,
                        // thus new event handler won't be attached.
                        // We do this whole dance with `TRACING_GETTER` to prevent `@sentry/apm` from becoming a peerDependency.
                        // We also need to ask for the `.constructor`, as `pushActivity` and `popActivity` are static, not instance methods.
                        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
                        // eslint-disable-next-line deprecation/deprecation
                        var tracingIntegration = getCurrentHub().getIntegration(TRACING_GETTER);
                        if (tracingIntegration) {
                            _this._tracingActivity = tracingIntegration.constructor.pushActivity('Vue Application Render');
                            var transaction = tracingIntegration.constructor.getTransaction();
                            if (transaction) {
                                _this._rootSpan = transaction.startChild({
                                    description: 'Application Render',
                                    op: 'Vue',
                                });
                            }
                            // Use functionality from @sentry/tracing
                        }
                        else {
                            var activeTransaction = getActiveTransaction(getCurrentHub());
                            if (activeTransaction) {
                                _this._rootSpan = activeTransaction.startChild({
                                    description: 'Application Render',
                                    op: 'Vue',
                                });
                            }
                        }
                        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
                    });
                }
            };
            var childHandler = function (hook, operation) {
                // Skip components that we don't want to track to minimize the noise and give a more granular control to the user
                var shouldTrack = Array.isArray(_this._options.tracingOptions.trackComponents)
                    ? _this._options.tracingOptions.trackComponents.indexOf(name) > -1
                    : _this._options.tracingOptions.trackComponents;
                if (!_this._rootSpan || !shouldTrack) {
                    return;
                }
                var now = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["timestampWithMs"])();
                var span = spans[operation];
                // On the first handler call (before), it'll be undefined, as `$once` will add it in the future.
                // However, on the second call (after), it'll be already in place.
                if (span) {
                    span.finish();
                    _this._finishRootSpan(now, getCurrentHub);
                }
                else {
                    vm.$once("hook:" + hook, function () {
                        if (_this._rootSpan) {
                            spans[operation] = _this._rootSpan.startChild({
                                description: "Vue <" + name + ">",
                                op: operation,
                            });
                        }
                    });
                }
            };
            // Each component has it's own scope, so all activities are only related to one of them
            _this._options.tracingOptions.hooks.forEach(function (operation) {
                // Retrieve corresponding hooks from Vue lifecycle.
                // eg. mount => ['beforeMount', 'mounted']
                var internalHooks = HOOKS[operation];
                if (!internalHooks) {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Unknown hook: " + operation);
                    return;
                }
                internalHooks.forEach(function (internalHook) {
                    var handler = rootMount
                        ? rootHandler.bind(_this, internalHook)
                        : childHandler.bind(_this, internalHook, operation);
                    var currentValue = vm.$options[internalHook];
                    if (Array.isArray(currentValue)) {
                        vm.$options[internalHook] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([handler], currentValue);
                    }
                    else if (typeof currentValue === 'function') {
                        vm.$options[internalHook] = [handler, currentValue];
                    }
                    else {
                        vm.$options[internalHook] = [handler];
                    }
                });
            });
        };
        _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('You are still using the Vue.js integration, consider moving to @sentry/vue');
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            Vue: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])().Vue, attachProps: true, logErrors: false, tracing: false }, options), { tracingOptions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ hooks: ['mount', 'update'], timeout: 2000, trackComponents: false }, options.tracingOptions) });
    }
    /**
     * @inheritDoc
     */
    Vue.prototype.setupOnce = function (_, getCurrentHub) {
        if (!this._options.Vue) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Vue integration is missing a Vue instance');
            return;
        }
        this._attachErrorHandler(getCurrentHub);
        if (this._options.tracing) {
            this._startTracing(getCurrentHub);
        }
    };
    /**
     * Extract component name from the ViewModel
     */
    Vue.prototype._getComponentName = function (vm) {
        // Such level of granularity is most likely not necessary, but better safe than sorry. — Kamil
        if (!vm) {
            return ANONYMOUS_COMPONENT_NAME;
        }
        if (vm.$root === vm) {
            return ROOT_COMPONENT_NAME;
        }
        if (!vm.$options) {
            return ANONYMOUS_COMPONENT_NAME;
        }
        if (vm.$options.name) {
            return vm.$options.name;
        }
        if (vm.$options._componentTag) {
            return vm.$options._componentTag;
        }
        // injected by vue-loader
        if (vm.$options.__file) {
            var unifiedFile = vm.$options.__file.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
            var filename = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["basename"])(unifiedFile, '.vue');
            return (this._componentsCache[filename] ||
                (this._componentsCache[filename] = filename.replace(COMPONENT_NAME_REGEXP, function (_, c) {
                    return c ? c.toUpperCase() : '';
                })));
        }
        return ANONYMOUS_COMPONENT_NAME;
    };
    /** Finish top-level span and activity with a debounce configured using `timeout` option */
    Vue.prototype._finishRootSpan = function (timestamp, getCurrentHub) {
        var _this = this;
        if (this._rootSpanTimer) {
            clearTimeout(this._rootSpanTimer);
        }
        this._rootSpanTimer = setTimeout(function () {
            if (_this._tracingActivity) {
                // We do this whole dance with `TRACING_GETTER` to prevent `@sentry/apm` from becoming a peerDependency.
                // We also need to ask for the `.constructor`, as `pushActivity` and `popActivity` are static, not instance methods.
                // eslint-disable-next-line deprecation/deprecation
                var tracingIntegration = getCurrentHub().getIntegration(TRACING_GETTER);
                if (tracingIntegration) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    tracingIntegration.constructor.popActivity(_this._tracingActivity);
                }
            }
            // We should always finish the span, only should pop activity if using @sentry/apm
            if (_this._rootSpan) {
                _this._rootSpan.finish(timestamp);
            }
        }, this._options.tracingOptions.timeout);
    };
    /** Inject configured tracing hooks into Vue's component lifecycles */
    Vue.prototype._startTracing = function (getCurrentHub) {
        var applyTracingHooks = this._applyTracingHooks;
        this._options.Vue.mixin({
            beforeCreate: function () {
                // eslint-disable-next-line deprecation/deprecation
                if (getCurrentHub().getIntegration(TRACING_GETTER) || getCurrentHub().getIntegration(BROWSER_TRACING_GETTER)) {
                    // `this` points to currently rendered component
                    applyTracingHooks(this, getCurrentHub);
                }
                else {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Vue integration has tracing enabled, but Tracing integration is not configured');
                }
            },
        });
    };
    /** Inject Sentry's handler into owns Vue's error handler  */
    Vue.prototype._attachErrorHandler = function (getCurrentHub) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var currentErrorHandler = this._options.Vue.config.errorHandler;
        this._options.Vue.config.errorHandler = function (error, vm, info) {
            var metadata = {};
            if (vm) {
                try {
                    metadata.componentName = _this._getComponentName(vm);
                    if (_this._options.attachProps) {
                        metadata.propsData = vm.$options.propsData;
                    }
                }
                catch (_oO) {
                    _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('Unable to extract metadata from Vue component.');
                }
            }
            if (info) {
                metadata.lifecycleHook = info;
            }
            if (getCurrentHub().getIntegration(Vue)) {
                // Capture exception in the next event loop, to make sure that all breadcrumbs are recorded in time.
                setTimeout(function () {
                    getCurrentHub().withScope(function (scope) {
                        scope.setContext('vue', metadata);
                        getCurrentHub().captureException(error);
                    });
                });
            }
            if (typeof currentErrorHandler === 'function') {
                currentErrorHandler.call(_this._options.Vue, error, vm, info);
            }
            if (_this._options.logErrors) {
                if (_this._options.Vue.util) {
                    _this._options.Vue.util.warn("Error in " + info + ": \"" + (error && error.toString()) + "\"", vm);
                }
                // eslint-disable-next-line no-console
                console.error(error);
            }
        };
    };
    /**
     * @inheritDoc
     */
    Vue.id = 'Vue';
    return Vue;
}());

/** Grabs active transaction off scope */
function getActiveTransaction(hub) {
    if (hub && hub.getScope) {
        var scope = hub.getScope();
        if (scope) {
            return scope.getTransaction();
        }
    }
    return undefined;
}
//# sourceMappingURL=vue.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/index.js ***!
  \***********************************************************************************/
/*! exports provided: LogLevel, SessionStatus, Severity, Status, TransactionSamplingMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loglevel */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/loglevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _loglevel__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStatus", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["SessionStatus"]; });

/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./severity */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _severity__WEBPACK_IMPORTED_MODULE_2__["Severity"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status__WEBPACK_IMPORTED_MODULE_3__["Status"]; });

/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction */ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/transaction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionSamplingMethod", function() { return _transaction__WEBPACK_IMPORTED_MODULE_4__["TransactionSamplingMethod"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/loglevel.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/loglevel.js ***!
  \**************************************************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/** Console logging verbosity for the SDK. */
var LogLevel;
(function (LogLevel) {
    /** No logs will be generated. */
    LogLevel[LogLevel["None"] = 0] = "None";
    /** Only SDK internal errors will be logged. */
    LogLevel[LogLevel["Error"] = 1] = "Error";
    /** Information useful for debugging the SDK will be logged. */
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    /** All SDK actions will be logged. */
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=loglevel.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/session.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/session.js ***!
  \*************************************************************************************/
/*! exports provided: SessionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStatus", function() { return SessionStatus; });
/**
 * Session Status
 */
var SessionStatus;
(function (SessionStatus) {
    /** JSDoc */
    SessionStatus["Ok"] = "ok";
    /** JSDoc */
    SessionStatus["Exited"] = "exited";
    /** JSDoc */
    SessionStatus["Crashed"] = "crashed";
    /** JSDoc */
    SessionStatus["Abnormal"] = "abnormal";
})(SessionStatus || (SessionStatus = {}));
//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/severity.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/severity.js ***!
  \**************************************************************************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
/** JSDoc */
// eslint-disable-next-line import/export
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity || (Severity = {}));
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/status.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/status.js ***!
  \************************************************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/** The status of an event. */
// eslint-disable-next-line import/export
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status || (Status = {}));
// eslint-disable-next-line @typescript-eslint/no-namespace, import/export
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status || (Status = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/transaction.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/types/esm/transaction.js ***!
  \*****************************************************************************************/
/*! exports provided: TransactionSamplingMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSamplingMethod", function() { return TransactionSamplingMethod; });
var TransactionSamplingMethod;
(function (TransactionSamplingMethod) {
    TransactionSamplingMethod["Explicit"] = "explicitly_set";
    TransactionSamplingMethod["Sampler"] = "client_sampler";
    TransactionSamplingMethod["Rate"] = "client_rate";
    TransactionSamplingMethod["Inheritance"] = "inheritance";
})(TransactionSamplingMethod || (TransactionSamplingMethod = {}));
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/async.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/async.js ***!
  \***********************************************************************************/
/*! exports provided: forget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return forget; });
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/browser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/browser.js ***!
  \*************************************************************************************/
/*! exports provided: htmlTreeAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el) {
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
        out.push("#" + elem.id);
    }
    // eslint-disable-next-line prefer-const
    className = elem.className;
    if (className && Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
            out.push("." + classes[i]);
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/dsn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/dsn.js ***!
  \*********************************************************************************/
/*! exports provided: Dsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return Dsn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/error.js");


/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
/** Error message */
var ERROR_MESSAGE = 'Invalid Dsn';
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this._fromString(from);
        }
        else {
            this._fromComponents(from);
        }
        this._validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, publicKey = _a.publicKey;
        return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype._fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE);
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        if (projectId) {
            var projectMatch = projectId.match(/^\d+/);
            if (projectMatch) {
                projectId = projectMatch[0];
            }
        }
        this._fromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype._fromComponents = function (components) {
        // TODO this is for backwards compatibility, and can be removed in a future version
        if ('user' in components && !('publicKey' in components)) {
            components.publicKey = components.user;
        }
        this.user = components.publicKey || '';
        this.protocol = components.protocol;
        this.publicKey = components.publicKey || '';
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype._validate = function () {
        var _this = this;
        ['protocol', 'publicKey', 'host', 'projectId'].forEach(function (component) {
            if (!_this[component]) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": " + component + " missing");
            }
        });
        if (!this.projectId.match(/^\d+$/)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid projectId " + this.projectId);
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid protocol " + this.protocol);
        }
        if (this.port && isNaN(parseInt(this.port, 10))) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"](ERROR_MESSAGE + ": Invalid port " + this.port);
        }
    };
    return Dsn;
}());

//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/error.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/error.js ***!
  \***********************************************************************************/
/*! exports provided: SentryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return SentryError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/polyfill.js");


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        Object(_polyfill__WEBPACK_IMPORTED_MODULE_1__["setPrototypeOf"])(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/index.js ***!
  \***********************************************************************************/
/*! exports provided: forget, htmlTreeAsString, Dsn, SentryError, addInstrumentationHandler, isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf, logger, Memo, getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, parseSemver, parseRetryAfterHeader, addContextToFrame, stripUrlQueryAndFragment, isNodeEnv, dynamicRequire, fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys, resolve, relative, normalizePath, isAbsolute, join, dirname, basename, PromiseBuffer, getFunctionName, truncate, snipLine, safeJoin, isMatchingPattern, supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, isNativeFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory, SyncPromise, dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return _async__WEBPACK_IMPORTED_MODULE_0__["forget"]; });

/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _browser__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"]; });

/* harmony import */ var _dsn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsn */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dsn", function() { return _dsn__WEBPACK_IMPORTED_MODULE_2__["Dsn"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error__WEBPACK_IMPORTED_MODULE_3__["SentryError"]; });

/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instrument */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isThenable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isSyntheticEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return _is__WEBPACK_IMPORTED_MODULE_5__["isInstanceOf"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_6__["logger"]; });

/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return _memo__WEBPACK_IMPORTED_MODULE_7__["Memo"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["uuid4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["getLocationHref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["addContextToFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _misc__WEBPACK_IMPORTED_MODULE_8__["stripUrlQueryAndFragment"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _node__WEBPACK_IMPORTED_MODULE_9__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _node__WEBPACK_IMPORTED_MODULE_9__["dynamicRequire"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["urlEncode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["walk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_10__["dropUndefinedKeys"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./path */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["resolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["basename"]; });

/* harmony import */ var _promisebuffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./promisebuffer */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return _promisebuffer__WEBPACK_IMPORTED_MODULE_12__["PromiseBuffer"]; });

/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _stacktrace__WEBPACK_IMPORTED_MODULE_13__["getFunctionName"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string__WEBPACK_IMPORTED_MODULE_14__["truncate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string__WEBPACK_IMPORTED_MODULE_14__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string__WEBPACK_IMPORTED_MODULE_14__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string__WEBPACK_IMPORTED_MODULE_14__["isMatchingPattern"]; });

/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["isNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsReportingObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports__WEBPACK_IMPORTED_MODULE_15__["supportsHistory"]; });

/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_16__["SyncPromise"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./time */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["dateTimestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["timestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["usingPerformanceAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["_browserPerformanceTimeOriginMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return _time__WEBPACK_IMPORTED_MODULE_17__["browserPerformanceTimeOrigin"]; });



















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/instrument.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/instrument.js ***!
  \****************************************************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/supports.js");







var global = Object(_misc__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('unknown instrumentation type:', type);
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(handler) {
    if (!handler || typeof handler.type !== 'string' || typeof handler.callback !== 'function') {
        return;
    }
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type].push(handler.callback);
    instrument(handler.type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_5__["getFunctionName"])(handler) + "\nError: " + e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.console, level, function (originalConsoleLevel) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleLevel) {
                    Function.prototype.apply.call(originalConsoleLevel, global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_6__["supportsNativeFetch"])()) {
        return;
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    // Poor man's implementation of ES6 `Map`, tracking and keeping in sync key and value separately.
    var requestKeys = [];
    var requestValues = [];
    var xhrproto = XMLHttpRequest.prototype;
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            };
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(url) && xhr.__sentry_xhr__.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        if (xhr.__sentry_xhr__) {
                            xhr.__sentry_xhr__.status_code = xhr.status;
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    try {
                        var requestPos = requestKeys.indexOf(xhr);
                        if (requestPos !== -1) {
                            // Make sure to pop both key and value to keep it in sync.
                            requestKeys.splice(requestPos);
                            var args_1 = requestValues.splice(requestPos)[0];
                            if (xhr.__sentry_xhr__ && args_1[0] !== undefined) {
                                xhr.__sentry_xhr__.body = args_1[0];
                            }
                        }
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            requestKeys.push(this);
            requestValues.push(args);
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_6__["supportsHistory"])()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'pushState', historyReplacementFunction);
    Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(global.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener('click', globalDOMEventHandler, false);
    global.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        Object(_object__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js ***!
  \********************************************************************************/
/*! exports provided: isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return isInstanceOf; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/logger.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/logger.js ***!
  \************************************************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

// TODO: Implement different loggers for different environments
var global = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this._enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this._enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this._enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.log(PREFIX + "[Log]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.warn(PREFIX + "[Warn]: " + args.join(' '));
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this._enabled) {
            return;
        }
        Object(_misc__WEBPACK_IMPORTED_MODULE_0__["consoleSandbox"])(function () {
            global.console.error(PREFIX + "[Error]: " + args.join(' '));
        });
    };
    return Logger;
}());
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global.__SENTRY__ = global.__SENTRY__ || {};
var logger = global.__SENTRY__.logger || (global.__SENTRY__.logger = new Logger());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/memo.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/memo.js ***!
  \**********************************************************************************/
/*! exports provided: Memo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memo", function() { return Memo; });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        this._hasWeakSet = typeof WeakSet === 'function';
        this._inner = this._hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this._hasWeakSet) {
            if (this._inner.has(obj)) {
                return true;
            }
            this._inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < this._inner.length; i++) {
            var value = this._inner[i];
            if (value === obj) {
                return true;
            }
        }
        this._inner.push(obj);
        return false;
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this._hasWeakSet) {
            this._inner.delete(obj);
        }
        else {
            for (var i = 0; i < this._inner.length; i++) {
                if (this._inner[i] === obj) {
                    this._inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js ***!
  \**********************************************************************************/
/*! exports provided: getGlobalObject, uuid4, parseUrl, getEventDescription, consoleSandbox, addExceptionTypeValue, addExceptionMechanism, getLocationHref, parseSemver, parseRetryAfterHeader, addContextToFrame, stripUrlQueryAndFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return parseSemver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return parseRetryAfterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return addContextToFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return stripUrlQueryAndFragment; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/string.js");


var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (Object(_node__WEBPACK_IMPORTED_MODULE_0__["isNodeEnv"])()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        return exception.type || exception.value || event.event_id || '<unknown>';
    }
    return event.event_id || '<unknown>';
}
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
    if (!('console' in global)) {
        return callback();
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (level in global.console && originalConsole[level].__sentry_original__) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}
/**
 * Adds exception mechanism to a given event.
 * @param event The event to modify.
 * @param mechanism Mechanism of the mechanism.
 * @hidden
 */
function addExceptionMechanism(event, mechanism) {
    if (mechanism === void 0) { mechanism = {}; }
    // TODO: Use real type with `keyof Mechanism` thingy and maybe make it better?
    try {
        // @ts-ignore Type 'Mechanism | {}' is not assignable to type 'Mechanism | undefined'
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        event.exception.values[0].mechanism = event.exception.values[0].mechanism || {};
        Object.keys(mechanism).forEach(function (key) {
            // @ts-ignore Mechanism has no index signature
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            event.exception.values[0].mechanism[key] = mechanism[key];
        });
    }
    catch (_oO) {
        // no-empty
    }
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    try {
        return document.location.href;
    }
    catch (oO) {
        return '';
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
var defaultRetryAfter = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param now current unix timestamp
 * @param header string representation of 'Retry-After' header
 */
function parseRetryAfterHeader(now, header) {
    if (!header) {
        return defaultRetryAfter;
    }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return defaultRetryAfter;
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
    frame.context_line = Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_1__["snipLine"])(line, 0); });
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
}
//# sourceMappingURL=misc.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/node.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/node.js ***!
  \**********************************************************************************/
/*! exports provided: isNodeEnv, dynamicRequire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
//# sourceMappingURL=node.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/object.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/object.js ***!
  \************************************************************************************/
/*! exports provided: fill, urlEncode, normalizeToSize, walk, normalize, extractExceptionKeysForMessage, dropUndefinedKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return dropUndefinedKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/string.js");






/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacementFactory A function that should be used to wrap a given method, returning the wrapped method which
 * will be substituted in for `source[name]`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __sentry_original__: {
                    enumerable: false,
                    value: original,
                },
            });
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function getWalkSource(value) {
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isError"])(value)) {
        var error = value;
        var err = {
            message: error.message,
            name: error.name,
            stack: error.stack,
        };
        for (var i in error) {
            if (Object.prototype.hasOwnProperty.call(error, i)) {
                err[i] = error[i];
            }
        }
        return err;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(value)) {
        var event_1 = value;
        var source = {};
        source.type = event_1.type;
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            source.target = Object(_is__WEBPACK_IMPORTED_MODULE_2__["isElement"])(event_1.target)
                ? Object(_browser__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(event_1.target)
                : Object.prototype.toString.call(event_1.target);
        }
        catch (_oO) {
            source.target = '<unknown>';
        }
        try {
            source.currentTarget = Object(_is__WEBPACK_IMPORTED_MODULE_2__["isElement"])(event_1.currentTarget)
                ? Object(_browser__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(event_1.currentTarget)
                : Object.prototype.toString.call(event_1.currentTarget);
        }
        catch (_oO) {
            source.currentTarget = '<unknown>';
        }
        if (typeof CustomEvent !== 'undefined' && Object(_is__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(value, CustomEvent)) {
            source.detail = event_1.detail;
        }
        for (var i in event_1) {
            if (Object.prototype.hasOwnProperty.call(event_1, i)) {
                source[i] = event_1;
            }
        }
        return source;
    }
    return value;
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var serialized = normalize(object, depth);
    if (jsonSize(serialized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return serialized;
}
/**
 * Transform any non-primitive, BigInt, or Symbol-type value into a string. Acts as a no-op on strings, numbers,
 * booleans, null, and undefined.
 *
 * @param value The value to stringify
 * @returns For non-primitive, BigInt, and Symbol-type values, a string denoting the value's type, type and value, or
 *  type and `description` property, respectively. For non-BigInt, non-Symbol primitives, returns the original value,
 *  unchanged.
 */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return value;
    }
    if (type === '[object Object]') {
        return '[Object]';
    }
    if (type === '[object Array]') {
        return '[Array]';
    }
    var normalized = normalizeValue(value);
    return Object(_is__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(normalized) ? normalized : type;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // React's SyntheticEvent thingy
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isSyntheticEvent"])(value)) {
        return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
        return '[NaN]';
    }
    if (value === void 0) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_4__["getFunctionName"])(value) + "]";
    }
    // symbols and bigints are considered primitives by TS, but aren't natively JSON-serilaizable
    if (typeof value === 'symbol') {
        return "[" + String(value) + "]";
    }
    if (typeof value === 'bigint') {
        return "[BigInt: " + String(value) + "]";
    }
    return value;
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function walk(key, value, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new _memo__WEBPACK_IMPORTED_MODULE_3__["Memo"](); }
    // If we reach the maximum depth, serialize whatever has left
    if (depth === 0) {
        return serializeValue(value);
    }
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // If value implements `toJSON` method, call it and return early
    if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
        return value.toJSON();
    }
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
    var normalized = normalizeValue(value, key);
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(normalized)) {
        return normalized;
    }
    // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
    var source = getWalkSource(value);
    // Create an accumulator that will act as a parent for all future itterations of that branch
    var acc = Array.isArray(value) ? [] : {};
    // If we already walked that branch, bail out, as it's circular reference
    if (memo.memoize(value)) {
        return '[Circular ~]';
    }
    // Walk all keys of the source
    for (var innerKey in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
            continue;
        }
        // Recursively walk through all the child nodes
        acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo);
    }
    // Once walked through all the branches, remove the parent from memo storage
    memo.unmemoize(value);
    // Return accumulated values
    return acc;
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function normalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth); }));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(getWalkSource(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return Object(_string__WEBPACK_IMPORTED_MODULE_5__["truncate"])(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return Object(_string__WEBPACK_IMPORTED_MODULE_5__["truncate"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
        var obj = val;
        var rv = {};
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof obj[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(obj[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/path.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/path.js ***!
  \**********************************************************************************/
/*! exports provided: resolve, relative, normalizePath, isAbsolute, join, dirname, basename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        // eslint-disable-next-line no-plusplus
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    /* eslint-disable no-param-reassign */
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    /* eslint-enable no-param-reassign */
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalizePath(args.join('/'));
}
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/polyfill.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/polyfill.js ***!
  \**************************************************************************************/
/*! exports provided: setPrototypeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return setPrototypeOf; });
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        // eslint-disable-next-line no-prototype-builtins
        if (!obj.hasOwnProperty(prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*******************************************************************************************/
/*! exports provided: PromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBuffer", function() { return PromiseBuffer; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/syncpromise.js");


/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(_limit) {
        this._limit = _limit;
        /** Internal set of queued Promises */
        this._buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this._limit === undefined || this.length() < this._limit;
    };
    /**
     * Add a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (task) {
        var _this = this;
        if (!this.isReady()) {
            return _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].reject(new _error__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Not adding Promise due to buffer limit reached.'));
        }
        if (this._buffer.indexOf(task) === -1) {
            this._buffer.push(task);
        }
        task
            .then(function () { return _this.remove(task); })
            .then(null, function () {
            return _this.remove(task).then(null, function () {
                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                // because it's a new Promise chain.
            });
        });
        return task;
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        var removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0];
        return removedTask;
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this._buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        var _this = this;
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve) {
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"].all(_this._buffer)
                .then(function () {
                clearTimeout(capturedSetTimeout);
                resolve(true);
            })
                .then(null, function () {
                resolve(true);
            });
        });
    };
    return PromiseBuffer;
}());

//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/stacktrace.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/stacktrace.js ***!
  \****************************************************************************************/
/*! exports provided: getFunctionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
//# sourceMappingURL=stacktrace.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/string.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/string.js ***!
  \************************************************************************************/
/*! exports provided: truncate, snipLine, safeJoin, isMatchingPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        // eslint-disable-next-line no-param-reassign
        colno = ll;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
        return false;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/supports.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/supports.js ***!
  \**************************************************************************************/
/*! exports provided: supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, isNativeFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return supportsErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return supportsDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return supportsDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return isNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return supportsReportingObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js");


/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === "function") {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = Object(_misc__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/syncpromise.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*****************************************************************************************/
/*! exports provided: SyncPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return SyncPromise; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/is.js");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States;
(function (States) {
    /** Pending */
    States["PENDING"] = "PENDING";
    /** Resolved / OK */
    States["RESOLVED"] = "RESOLVED";
    /** Rejected / Error */
    States["REJECTED"] = "REJECTED";
})(States || (States = {}));
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = States.PENDING;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(States.RESOLVED, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(States.REJECTED, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== States.PENDING) {
                return;
            }
            if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isThenable"])(value)) {
                value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        // TODO: FIXME
        /** JSDoc */
        this._attachHandler = function (handler) {
            _this._handlers = _this._handlers.concat(handler);
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === States.PENDING) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler.done) {
                    return;
                }
                if (_this._state === States.RESOLVED) {
                    if (handler.onfulfilled) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        handler.onfulfilled(_this._value);
                    }
                }
                if (_this._state === States.REJECTED) {
                    if (handler.onrejected) {
                        handler.onrejected(_this._value);
                    }
                }
                handler.done = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.resolve = function (value) {
        return new SyncPromise(function (resolve) {
            resolve(value);
        });
    };
    /** JSDoc */
    SyncPromise.reject = function (reason) {
        return new SyncPromise(function (_, reject) {
            reject(reason);
        });
    };
    /** JSDoc */
    SyncPromise.all = function (collection) {
        return new SyncPromise(function (resolve, reject) {
            if (!Array.isArray(collection)) {
                reject(new TypeError("Promise.all requires an array as input."));
                return;
            }
            if (collection.length === 0) {
                resolve([]);
                return;
            }
            var counter = collection.length;
            var resolvedCollection = [];
            collection.forEach(function (item, index) {
                SyncPromise.resolve(item)
                    .then(function (value) {
                    resolvedCollection[index] = value;
                    counter -= 1;
                    if (counter !== 0) {
                        return;
                    }
                    resolve(resolvedCollection);
                })
                    .then(null, reject);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._attachHandler({
                done: false,
                onfulfilled: function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                        return;
                    }
                    try {
                        resolve(onfulfilled(result));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
                onrejected: function (reason) {
                    if (!onrejected) {
                        reject(reason);
                        return;
                    }
                    try {
                        resolve(onrejected(reason));
                        return;
                    }
                    catch (e) {
                        reject(e);
                        return;
                    }
                },
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    /** JSDoc */
    SyncPromise.prototype.toString = function () {
        return '[object SyncPromise]';
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/time.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/time.js ***!
  \**********************************************************************************/
/*! exports provided: dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return dateTimestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return timestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return timestampWithMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return usingPerformanceAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _browserPerformanceTimeOriginMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return browserPerformanceTimeOrigin; });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/misc.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/integrations/node_modules/@sentry/utils/esm/node.js");


/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = Object(_node__WEBPACK_IMPORTED_MODULE_1__["dynamicRequire"])(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = Object(_node__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
var _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = Object(_misc__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])().performance;
    if (!performance) {
        _browserPerformanceTimeOriginMode = 'none';
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = 'timeOrigin';
            return performance.timeOrigin;
        }
        else {
            _browserPerformanceTimeOriginMode = 'navigationStart';
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = 'dateNow';
    return dateNow;
})();
//# sourceMappingURL=time.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9mdWxsc3RvcnkvZGlzdC9pbmRleC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL2FuZ3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL2VzbS9jYXB0dXJlY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL2RlYnVnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9lc20vZGVkdXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9lc20vZW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL2VzbS9leHRyYWVycm9yZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9lc20vb2ZmbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL3JlcG9ydGluZ29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9lc20vcmV3cml0ZWZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL3Nlc3Npb250aW1pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL2VzbS90cmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvZXNtL3Z1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdHlwZXMvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS90eXBlcy9lc20vbG9nbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3R5cGVzL2VzbS9zZXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS90eXBlcy9lc20vc2V2ZXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3R5cGVzL2VzbS9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3R5cGVzL2VzbS90cmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL2FzeW5jLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL2Rzbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL2Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9pbnN0cnVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9tZW1vLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS9wcm9taXNlYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vc3RhY2t0cmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHNlbnRyeS9pbnRlZ3JhdGlvbnMvbm9kZV9tb2R1bGVzL0BzZW50cnkvdXRpbHMvZXNtL3N1cHBvcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2VudHJ5L2ludGVncmF0aW9ucy9ub2RlX21vZHVsZXMvQHNlbnRyeS91dGlscy9lc20vc3luY3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvaW50ZWdyYXRpb25zL25vZGVfbW9kdWxlcy9Ac2VudHJ5L3V0aWxzL2VzbS90aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2NhbGZvcmFnZS9kaXN0L2xvY2FsZm9yYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDUjs7QUFFakU7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0I7QUFDRTtBQUNKO0FBQ0U7QUFDSztBQUNSO0FBQ0k7QUFDRjtBQUNBO0FBQ0E7QUFDRTtBQUNGO0FBQ1M7QUFDSDtBQUNKO0FBQ0U7QUFDRztBQUNQO0FBQ3ZCLGlDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0c7QUFDWjtBQUNPO0FBQ1Q7QUFDZTtBQUNtQjtBQUNsRSxhQUFhLDZEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNO0FB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NkRBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0NBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDLDZEQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUksNkJBQTZCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0JBQXdCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxDQUFDLEVBQUUsTUFBTTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxxSUFBcUk7QUFDdEksQ0FBQyxFQUFFLE1BQU07QUFDVDs7QUFFQSxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUI7QUFDckIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNuRztBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFD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QixpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxRQUFRO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCxpREFBaUQsUUFBUTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUU7QUFDbkU7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5RSxXQUFXO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxTQUFTO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRztBQUNkLENBQUMiLCJmaWxlIjoidmVuZG9yc35BbmFseXRpY3NfYjVmOTdiZTgyNTdiMDI0YjY0YWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1YiB9IGZyb20gJ0BzZW50cnkvYnJvd3Nlcic7XG5pbXBvcnQgeyBnZXRDdXJyZW50U2Vzc2lvblVSTCwgZXZlbnQgfSBmcm9tICdAZnVsbHN0b3J5L2Jyb3dzZXInO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcblxuLyoqXHJcbiAqIFNwbGl0IHRoZSBVUkwgaW50byBkaWZmZXJlbnQgcGFydHNcclxuICogdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MzY1MTMvaG93LWRvLWktcGFyc2UtYS11cmwtaW50by1ob3N0bmFtZS1hbmQtcGF0aC1pbi1qYXZhc2NyaXB0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICovXHJcbnZhciBzcGxpdFVybEludG9QYXJ0cyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHZhciByZVVSTEluZm9ybWF0aW9uID0gbmV3IFJlZ0V4cChbXHJcbiAgICAgICAgJ14oaHR0cHM/OikvLycsXHJcbiAgICAgICAgJygoW146Lz8jXSopKD86OihbMC05XSspKT8pJyxcclxuICAgICAgICAnKC97MCwxfVtePyNdKiknLFxyXG4gICAgICAgICcoXFxcXD9bXiNdKnwpJyxcclxuICAgICAgICAnKCMuKnwpJCcsXHJcbiAgICBdLmpvaW4oJycpKTtcclxuICAgIHJldHVybiB1cmwubWF0Y2gocmVVUkxJbmZvcm1hdGlvbik7XHJcbn07XHJcbi8qKlxyXG4gKiBHZXQgdGhlIHByb2plY3QgSUQgZnJvbSBhIFNlbnRyeSBEU05cclxuICogQHBhcmFtIHtzdHJpbmd9IGRzblxyXG4gKi9cclxudmFyIGdldFByb2plY3RJZEZyb21TZW50cnlEc24gPSBmdW5jdGlvbiAoZHNuKSB7XHJcbiAgICB2YXIgcGFydHMgPSBzcGxpdFVybEludG9QYXJ0cyhkc24pO1xyXG4gICAgaWYgKCFwYXJ0cykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBhcnNlIERTTicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnRzWzVdLnJlcGxhY2UoJy8nLCAnJyk7XHJcbn07XHJcbnZhciBpc0Vycm9yID0gZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xyXG4gICAgcmV0dXJuIGV4Y2VwdGlvbi5tZXNzYWdlICE9PSB1bmRlZmluZWQ7XHJcbn07XHJcbi8qKlxyXG4gKiBHZXQgdGhlIG1lc3NhZ2UgYW5kIG5hbWUgcHJvcGVydGllcyBmcm9tIHRoZSBvcmlnaW5hbCBleGNlcHRpb25cclxuICogQHBhcmFtIHtFdmVudEhpbnR9IGhpbnRcclxuICovXHJcbnZhciBnZXRPcmlnaW5hbEV4Y2VwdGlvblByb3BlcnRpZXMgPSBmdW5jdGlvbiAoaGludCkge1xyXG4gICAgaWYgKGhpbnQgJiYgaGludC5vcmlnaW5hbEV4Y2VwdGlvbiAmJiBpc0Vycm9yKGhpbnQub3JpZ2luYWxFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsRXhjZXB0aW9uID0gaGludC5vcmlnaW5hbEV4Y2VwdGlvbjtcclxuICAgICAgICB2YXIgbmFtZV8xID0gb3JpZ2luYWxFeGNlcHRpb24ubmFtZSwgbWVzc2FnZSA9IG9yaWdpbmFsRXhjZXB0aW9uLm1lc3NhZ2U7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZV8xLCBtZXNzYWdlOiBtZXNzYWdlIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XG5cbnZhciBTZW50cnlGdWxsU3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZW50cnlGdWxsU3Rvcnkoc2VudHJ5T3JnLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBTZW50cnlGdWxsU3RvcnkuaWQ7XHJcbiAgICAgICAgdGhpcy5zZW50cnlPcmcgPSBzZW50cnlPcmc7XHJcbiAgICAgICAgdGhpcy5iYXNlU2VudHJ5VXJsID0gb3B0aW9ucy5iYXNlU2VudHJ5VXJsIHx8ICdodHRwczovL3NlbnRyeS5pbyc7XHJcbiAgICB9XHJcbiAgICBTZW50cnlGdWxsU3RvcnkucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChldmVudCQxLCBoaW50KSB7XHJcbiAgICAgICAgICAgIC8vUmV0dXJucyB0aGUgc2VudHJ5IFVSTCBvZiB0aGUgZXJyb3JcclxuICAgICAgICAgICAgLy9JZiB3ZSBjYW5ub3QgZ2V0IHRoZSBVUkwsIHJldHVybiBhIHN0cmluZyBzYXlpbmcgd2UgY2Fubm90XHJcbiAgICAgICAgICAgIHZhciBnZXRTZW50cnlVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vTm8gZG9jcyBvbiB0aGlzIGJ1dCB0aGUgU0RLIHRlYW0gYXNzdXJlcyBtZSBpdCB3b3JrcyB1bmxlc3MgeW91IGJpbmQgYW5vdGhlciBTZW50cnkgY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRzbiA9ICgoKF9hID0gZ2V0Q3VycmVudEh1YigpLmdldENsaWVudCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0T3B0aW9ucygpKSB8fCB7fSkuZHNuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZHNuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHNuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ291bGQgbm90IHJldHJpZXZlIHVybCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBldmVudCBoaW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ291bGQgbm90IHJldHJpZXZlIHVybCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9qZWN0SWQgPSBnZXRQcm9qZWN0SWRGcm9tU2VudHJ5RHNuKGRzbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJhc2VTZW50cnlVcmwgKyBcIi9vcmdhbml6YXRpb25zL1wiICsgX3RoaXMuc2VudHJ5T3JnICsgXCIvaXNzdWVzLz9wcm9qZWN0PVwiICsgcHJvamVjdElkICsgXCImcXVlcnk9XCIgKyBoaW50LmV2ZW50X2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgcHJvamVjdCBJRCBmcm9tIERTTicsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBDb3VsZCBwdXQgbGluayB0byBhIGhlbHAgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnQ291bGQgbm90IHJldHJpZXZlIHVybCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKFNlbnRyeUZ1bGxTdG9yeSk7XHJcbiAgICAgICAgICAgIC8vIFJ1biB0aGUgaW50ZWdyYXRpb24gT05MWSB3aGVuIGl0IHdhcyBpbnN0YWxsZWQgb24gdGhlIGN1cnJlbnQgSHViXHJcbiAgICAgICAgICAgIGlmIChzZWxmKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXRDdXJyZW50U2Vzc2lvblVSTCBpc24ndCBhdmFpbGFibGUgdW50aWwgYWZ0ZXIgdGhlIEZ1bGxTdG9yeSBzY3JpcHQgaXMgZnVsbHkgYm9vdHN0cmFwcGVkLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3Igb2NjdXJzIGJlZm9yZSBnZXRDdXJyZW50U2Vzc2lvblVSTCBpcyByZWFkeSwgbWFrZSBhIG5vdGUgaW4gU2VudHJ5IGFuZCBtb3ZlIG9uLlxyXG4gICAgICAgICAgICAgICAgLy8gTW9yZSBvbiBnZXRDdXJyZW50U2Vzc2lvblVSTCBoZXJlOiBodHRwczovL2hlbHAuZnVsbHN0b3J5LmNvbS9kZXZlbG9wLWpzL2dldGN1cnJlbnRzZXNzaW9udXJsXHJcbiAgICAgICAgICAgICAgICBldmVudCQxLmNvbnRleHRzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGV2ZW50JDEuY29udGV4dHMpLCB7IGZ1bGxTdG9yeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsU3RvcnlVcmw6IGdldEN1cnJlbnRTZXNzaW9uVVJMKHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VycmVudCBzZXNzaW9uIFVSTCBBUEkgbm90IHJlYWR5JyxcclxuICAgICAgICAgICAgICAgICAgICB9IH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gRlMuZXZlbnQgaXMgaW1tZWRpYXRlbHkgcmVhZHkgZXZlbiBpZiBGdWxsU3RvcnkgaXNuJ3QgZnVsbHkgYm9vdHN0cmFwcGVkXHJcbiAgICAgICAgICAgICAgICBldmVudCgnU2VudHJ5IEVycm9yJywgX19hc3NpZ24oeyBzZW50cnlVcmw6IGdldFNlbnRyeVVybCgpIH0sIGdldE9yaWdpbmFsRXhjZXB0aW9uUHJvcGVydGllcyhoaW50KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudCQxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNlbnRyeUZ1bGxTdG9yeS5pZCA9ICdTZW50cnlGdWxsU3RvcnknO1xyXG4gICAgcmV0dXJuIFNlbnRyeUZ1bGxTdG9yeTtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VudHJ5RnVsbFN0b3J5O1xuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCwgbG9nZ2VyIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL3YxLjQuNy9zcmMvbWluRXJyLmpzXG52YXIgYW5ndWxhclBhdHRlcm4gPSAvXlxcWygoPzpbJGEtekEtWjAtOV0rOik/KD86WyRhLXpBLVowLTldKykpXFxdICguKj8pXFxuPyhcXFMrKSQvO1xuLyoqXG4gKiBBbmd1bGFySlMgaW50ZWdyYXRpb25cbiAqXG4gKiBQcm92aWRlcyBhbiAkZXhjZXB0aW9uSGFuZGxlciBmb3IgQW5ndWxhckpTXG4gKi9cbnZhciBBbmd1bGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBmdW5jdGlvbiBBbmd1bGFyKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBBbmd1bGFyLmlkO1xuICAgICAgICBsb2dnZXIubG9nKCdZb3UgYXJlIHN0aWxsIHVzaW5nIHRoZSBBbmd1bGFyIGludGVncmF0aW9uLCBjb25zaWRlciBtb3ZpbmcgdG8gQHNlbnRyeS9hbmd1bGFyJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgdGhpcy5fYW5ndWxhciA9IG9wdGlvbnMuYW5ndWxhciB8fCBnZXRHbG9iYWxPYmplY3QoKS5hbmd1bGFyO1xuICAgICAgICBpZiAoIXRoaXMuX2FuZ3VsYXIpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignQW5ndWxhckludGVncmF0aW9uIGlzIG1pc3NpbmcgYW4gQW5ndWxhciBpbnN0YW5jZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gdGhpcy5fYW5ndWxhci5tb2R1bGUoQW5ndWxhci5tb2R1bGVOYW1lLCBbXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQW5ndWxhci5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKF8sIGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nZXRDdXJyZW50SHViID0gZ2V0Q3VycmVudEh1YjtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICB0aGlzLl9tb2R1bGUuY29uZmlnKFtcbiAgICAgICAgICAgICckcHJvdmlkZScsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZnVuY3Rpb24gKCRwcm92aWRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICAgICAgICAgICRwcm92aWRlLmRlY29yYXRvcignJGV4Y2VwdGlvbkhhbmRsZXInLCBbJyRkZWxlZ2F0ZScsIF90aGlzLl8kZXhjZXB0aW9uSGFuZGxlckRlY29yYXRvci5iaW5kKF90aGlzKV0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbmd1bGFyJ3MgZXhjZXB0aW9uSGFuZGxlciBmb3IgU2VudHJ5IGludGVncmF0aW9uXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBBbmd1bGFyLnByb3RvdHlwZS5fJGV4Y2VwdGlvbkhhbmRsZXJEZWNvcmF0b3IgPSBmdW5jdGlvbiAoJGRlbGVnYXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXhjZXB0aW9uLCBjYXVzZSkge1xuICAgICAgICAgICAgdmFyIGh1YiA9IF90aGlzLl9nZXRDdXJyZW50SHViICYmIF90aGlzLl9nZXRDdXJyZW50SHViKCk7XG4gICAgICAgICAgICBpZiAoaHViICYmIGh1Yi5nZXRJbnRlZ3JhdGlvbihBbmd1bGFyKSkge1xuICAgICAgICAgICAgICAgIGh1Yi53aXRoU2NvcGUoZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXVzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2V0RXh0cmEoJ2NhdXNlJywgY2F1c2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmFkZEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4ID0gZXZlbnQuZXhjZXB0aW9uICYmIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgJiYgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gYW5ndWxhclBhdHRlcm4uZXhlYyhleC52YWx1ZSB8fCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB0eXBlIG5vdyBiZWNvbWVzIHNvbWV0aGluZyBsaWtlOiAkcm9vdFNjb3BlOmlucHJvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleC50eXBlID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXgudmFsdWUgPSBtYXRjaGVzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5tZXNzYWdlID0gZXgudHlwZSArIFwiOiBcIiArIGV4LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhdXRvIHNldCBhIG5ldyB0YWcgc3BlY2lmaWNhbGx5IGZvciB0aGUgYW5ndWxhciBlcnJvciB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZXh0cmEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQuZXh0cmEpLCB7IGFuZ3VsYXJEb2NzOiBtYXRjaGVzWzNdLnN1YnN0cigwLCAyNTApIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGh1Yi5jYXB0dXJlRXhjZXB0aW9uKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZGVsZWdhdGUoZXhjZXB0aW9uLCBjYXVzZSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIEFuZ3VsYXIuaWQgPSAnQW5ndWxhckpTJztcbiAgICAvKipcbiAgICAgKiBtb2R1bGVOYW1lIHVzZWQgaW4gQW5ndWxhcidzIERJIHJlc29sdXRpb24gYWxnb3JpdGhtXG4gICAgICovXG4gICAgQW5ndWxhci5tb2R1bGVOYW1lID0gJ25nU2VudHJ5JztcbiAgICByZXR1cm4gQW5ndWxhcjtcbn0oKSk7XG5leHBvcnQgeyBBbmd1bGFyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmd1bGFyLmpzLm1hcCIsImltcG9ydCB7IFNldmVyaXR5IH0gZnJvbSAnQHNlbnRyeS90eXBlcyc7XG5pbXBvcnQgeyBmaWxsLCBnZXRHbG9iYWxPYmplY3QsIHNhZmVKb2luIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4vKiogU2VuZCBDb25zb2xlIEFQSSBjYWxscyBhcyBTZW50cnkgRXZlbnRzICovXG52YXIgQ2FwdHVyZUNvbnNvbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDYXB0dXJlQ29uc29sZShvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gQ2FwdHVyZUNvbnNvbGUuaWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGV2ZWxzID0gWydsb2cnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJywgJ2RlYnVnJywgJ2Fzc2VydCddO1xuICAgICAgICBpZiAob3B0aW9ucy5sZXZlbHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldmVscyA9IG9wdGlvbnMubGV2ZWxzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgQ2FwdHVyZUNvbnNvbGUucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uIChfLCBnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIGlmICghKCdjb25zb2xlJyBpbiBnbG9iYWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGV2ZWxzLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgICAgICBpZiAoIShsZXZlbCBpbiBnbG9iYWwuY29uc29sZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZmlsbChnbG9iYWwuY29uc29sZSwgbGV2ZWwsIGZ1bmN0aW9uIChvcmlnaW5hbENvbnNvbGVMZXZlbCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaHViID0gZ2V0Q3VycmVudEh1YigpO1xuICAgICAgICAgICAgICAgIGlmIChodWIuZ2V0SW50ZWdyYXRpb24oQ2FwdHVyZUNvbnNvbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGh1Yi53aXRoU2NvcGUoZnVuY3Rpb24gKHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXRMZXZlbChTZXZlcml0eS5mcm9tU3RyaW5nKGxldmVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXRFeHRyYSgnYXJndW1lbnRzJywgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5hZGRFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5sb2dnZXIgPSAnY29uc29sZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHNhZmVKb2luKGFyZ3MsICcgJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPT09ICdhc3NlcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3NbMF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFzc2VydGlvbiBmYWlsZWQ6IFwiICsgKHNhZmVKb2luKGFyZ3Muc2xpY2UoMSksICcgJykgfHwgJ2NvbnNvbGUuYXNzZXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNldEV4dHJhKCdhcmd1bWVudHMnLCBhcmdzLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHViLmNhcHR1cmVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh1Yi5jYXB0dXJlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMgZmFpbHMgZm9yIHNvbWUgYnJvd3NlcnMuIDooXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsQ29uc29sZUxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKG9yaWdpbmFsQ29uc29sZUxldmVsLCBnbG9iYWwuY29uc29sZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBDYXB0dXJlQ29uc29sZS5pZCA9ICdDYXB0dXJlQ29uc29sZSc7XG4gICAgcmV0dXJuIENhcHR1cmVDb25zb2xlO1xufSgpKTtcbmV4cG9ydCB7IENhcHR1cmVDb25zb2xlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYXB0dXJlY29uc29sZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgY29uc29sZVNhbmRib3ggfSBmcm9tICdAc2VudHJ5L3V0aWxzJztcbi8qKiBKU0RvYyAqL1xudmFyIERlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGVidWcob3B0aW9ucykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IERlYnVnLmlkO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX19hc3NpZ24oeyBkZWJ1Z2dlcjogZmFsc2UsIHN0cmluZ2lmeTogZmFsc2UgfSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgRGVidWcucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uIChhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1Yikge1xuICAgICAgICBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQsIGhpbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKERlYnVnKTtcbiAgICAgICAgICAgIGlmIChzZWxmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX29wdGlvbnMuZGVidWdnZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgICAgICAgY29uc29sZVNhbmRib3goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fb3B0aW9ucy5zdHJpbmdpZnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGV2ZW50LCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGhpbnQsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIERlYnVnLmlkID0gJ0RlYnVnJztcbiAgICByZXR1cm4gRGVidWc7XG59KCkpO1xuZXhwb3J0IHsgRGVidWcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYnVnLmpzLm1hcCIsIi8qKiBEZWR1cGxpY2F0aW9uIGZpbHRlciAqL1xudmFyIERlZHVwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWR1cGUoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gRGVkdXBlLmlkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIERlZHVwZS5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChjdXJyZW50RXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKERlZHVwZSk7XG4gICAgICAgICAgICBpZiAoc2VsZikge1xuICAgICAgICAgICAgICAgIC8vIEp1dXVzdCBpbiBjYXNlIHNvbWV0aGluZyBnb2VzIHdyb25nXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX3Nob3VsZERyb3BFdmVudChjdXJyZW50RXZlbnQsIHNlbGYuX3ByZXZpb3VzRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZi5fcHJldmlvdXNFdmVudCA9IGN1cnJlbnRFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoc2VsZi5fcHJldmlvdXNFdmVudCA9IGN1cnJlbnRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEV2ZW50O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIERlZHVwZS5wcm90b3R5cGUuX3Nob3VsZERyb3BFdmVudCA9IGZ1bmN0aW9uIChjdXJyZW50RXZlbnQsIHByZXZpb3VzRXZlbnQpIHtcbiAgICAgICAgaWYgKCFwcmV2aW91c0V2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzU2FtZU1lc3NhZ2VFdmVudChjdXJyZW50RXZlbnQsIHByZXZpb3VzRXZlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNTYW1lRXhjZXB0aW9uRXZlbnQoY3VycmVudEV2ZW50LCBwcmV2aW91c0V2ZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgRGVkdXBlLnByb3RvdHlwZS5faXNTYW1lTWVzc2FnZUV2ZW50ID0gZnVuY3Rpb24gKGN1cnJlbnRFdmVudCwgcHJldmlvdXNFdmVudCkge1xuICAgICAgICB2YXIgY3VycmVudE1lc3NhZ2UgPSBjdXJyZW50RXZlbnQubWVzc2FnZTtcbiAgICAgICAgdmFyIHByZXZpb3VzTWVzc2FnZSA9IHByZXZpb3VzRXZlbnQubWVzc2FnZTtcbiAgICAgICAgLy8gSWYgbmVpdGhlciBldmVudCBoYXMgYSBtZXNzYWdlIHByb3BlcnR5LCB0aGV5IHdlcmUgYm90aCBleGNlcHRpb25zLCBzbyBiYWlsIG91dFxuICAgICAgICBpZiAoIWN1cnJlbnRNZXNzYWdlICYmICFwcmV2aW91c01lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBvbmx5IG9uZSBldmVudCBoYXMgYSBzdGFja3RyYWNlLCBidXQgbm90IHRoZSBvdGhlciBvbmUsIHRoZXkgYXJlIG5vdCB0aGUgc2FtZVxuICAgICAgICBpZiAoKGN1cnJlbnRNZXNzYWdlICYmICFwcmV2aW91c01lc3NhZ2UpIHx8ICghY3VycmVudE1lc3NhZ2UgJiYgcHJldmlvdXNNZXNzYWdlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50TWVzc2FnZSAhPT0gcHJldmlvdXNNZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc1NhbWVGaW5nZXJwcmludChjdXJyZW50RXZlbnQsIHByZXZpb3VzRXZlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc1NhbWVTdGFja3RyYWNlKGN1cnJlbnRFdmVudCwgcHJldmlvdXNFdmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIERlZHVwZS5wcm90b3R5cGUuX2dldEZyYW1lc0Zyb21FdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXhjZXB0aW9uID0gZXZlbnQuZXhjZXB0aW9uO1xuICAgICAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgT2JqZWN0IGNvdWxkIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHJldHVybiBleGNlcHRpb24udmFsdWVzWzBdLnN0YWNrdHJhY2UuZnJhbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuc3RhY2t0cmFjZSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnN0YWNrdHJhY2UuZnJhbWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBEZWR1cGUucHJvdG90eXBlLl9pc1NhbWVTdGFja3RyYWNlID0gZnVuY3Rpb24gKGN1cnJlbnRFdmVudCwgcHJldmlvdXNFdmVudCkge1xuICAgICAgICB2YXIgY3VycmVudEZyYW1lcyA9IHRoaXMuX2dldEZyYW1lc0Zyb21FdmVudChjdXJyZW50RXZlbnQpO1xuICAgICAgICB2YXIgcHJldmlvdXNGcmFtZXMgPSB0aGlzLl9nZXRGcmFtZXNGcm9tRXZlbnQocHJldmlvdXNFdmVudCk7XG4gICAgICAgIC8vIElmIG5laXRoZXIgZXZlbnQgaGFzIGEgc3RhY2t0cmFjZSwgdGhleSBhcmUgYXNzdW1lZCB0byBiZSB0aGUgc2FtZVxuICAgICAgICBpZiAoIWN1cnJlbnRGcmFtZXMgJiYgIXByZXZpb3VzRnJhbWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBvbmx5IG9uZSBldmVudCBoYXMgYSBzdGFja3RyYWNlLCBidXQgbm90IHRoZSBvdGhlciBvbmUsIHRoZXkgYXJlIG5vdCB0aGUgc2FtZVxuICAgICAgICBpZiAoKGN1cnJlbnRGcmFtZXMgJiYgIXByZXZpb3VzRnJhbWVzKSB8fCAoIWN1cnJlbnRGcmFtZXMgJiYgcHJldmlvdXNGcmFtZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZyYW1lcyA9IGN1cnJlbnRGcmFtZXM7XG4gICAgICAgIHByZXZpb3VzRnJhbWVzID0gcHJldmlvdXNGcmFtZXM7XG4gICAgICAgIC8vIElmIG51bWJlciBvZiBmcmFtZXMgZGlmZmVyLCB0aGV5IGFyZSBub3QgdGhlIHNhbWVcbiAgICAgICAgaWYgKHByZXZpb3VzRnJhbWVzLmxlbmd0aCAhPT0gY3VycmVudEZyYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIGNvbXBhcmUgdGhlIHR3b1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXZpb3VzRnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVBID0gcHJldmlvdXNGcmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZnJhbWVCID0gY3VycmVudEZyYW1lc1tpXTtcbiAgICAgICAgICAgIGlmIChmcmFtZUEuZmlsZW5hbWUgIT09IGZyYW1lQi5maWxlbmFtZSB8fFxuICAgICAgICAgICAgICAgIGZyYW1lQS5saW5lbm8gIT09IGZyYW1lQi5saW5lbm8gfHxcbiAgICAgICAgICAgICAgICBmcmFtZUEuY29sbm8gIT09IGZyYW1lQi5jb2xubyB8fFxuICAgICAgICAgICAgICAgIGZyYW1lQS5mdW5jdGlvbiAhPT0gZnJhbWVCLmZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgRGVkdXBlLnByb3RvdHlwZS5fZ2V0RXhjZXB0aW9uRnJvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5leGNlcHRpb24gJiYgZXZlbnQuZXhjZXB0aW9uLnZhbHVlcyAmJiBldmVudC5leGNlcHRpb24udmFsdWVzWzBdO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgRGVkdXBlLnByb3RvdHlwZS5faXNTYW1lRXhjZXB0aW9uRXZlbnQgPSBmdW5jdGlvbiAoY3VycmVudEV2ZW50LCBwcmV2aW91c0V2ZW50KSB7XG4gICAgICAgIHZhciBwcmV2aW91c0V4Y2VwdGlvbiA9IHRoaXMuX2dldEV4Y2VwdGlvbkZyb21FdmVudChwcmV2aW91c0V2ZW50KTtcbiAgICAgICAgdmFyIGN1cnJlbnRFeGNlcHRpb24gPSB0aGlzLl9nZXRFeGNlcHRpb25Gcm9tRXZlbnQoY3VycmVudEV2ZW50KTtcbiAgICAgICAgaWYgKCFwcmV2aW91c0V4Y2VwdGlvbiB8fCAhY3VycmVudEV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2aW91c0V4Y2VwdGlvbi50eXBlICE9PSBjdXJyZW50RXhjZXB0aW9uLnR5cGUgfHwgcHJldmlvdXNFeGNlcHRpb24udmFsdWUgIT09IGN1cnJlbnRFeGNlcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzU2FtZUZpbmdlcnByaW50KGN1cnJlbnRFdmVudCwgcHJldmlvdXNFdmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzU2FtZVN0YWNrdHJhY2UoY3VycmVudEV2ZW50LCBwcmV2aW91c0V2ZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgRGVkdXBlLnByb3RvdHlwZS5faXNTYW1lRmluZ2VycHJpbnQgPSBmdW5jdGlvbiAoY3VycmVudEV2ZW50LCBwcmV2aW91c0V2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50RmluZ2VycHJpbnQgPSBjdXJyZW50RXZlbnQuZmluZ2VycHJpbnQ7XG4gICAgICAgIHZhciBwcmV2aW91c0ZpbmdlcnByaW50ID0gcHJldmlvdXNFdmVudC5maW5nZXJwcmludDtcbiAgICAgICAgLy8gSWYgbmVpdGhlciBldmVudCBoYXMgYSBmaW5nZXJwcmludCwgdGhleSBhcmUgYXNzdW1lZCB0byBiZSB0aGUgc2FtZVxuICAgICAgICBpZiAoIWN1cnJlbnRGaW5nZXJwcmludCAmJiAhcHJldmlvdXNGaW5nZXJwcmludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgb25seSBvbmUgZXZlbnQgaGFzIGEgZmluZ2VycHJpbnQsIGJ1dCBub3QgdGhlIG90aGVyIG9uZSwgdGhleSBhcmUgbm90IHRoZSBzYW1lXG4gICAgICAgIGlmICgoY3VycmVudEZpbmdlcnByaW50ICYmICFwcmV2aW91c0ZpbmdlcnByaW50KSB8fCAoIWN1cnJlbnRGaW5nZXJwcmludCAmJiBwcmV2aW91c0ZpbmdlcnByaW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRGaW5nZXJwcmludCA9IGN1cnJlbnRGaW5nZXJwcmludDtcbiAgICAgICAgcHJldmlvdXNGaW5nZXJwcmludCA9IHByZXZpb3VzRmluZ2VycHJpbnQ7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgY29tcGFyZSB0aGUgdHdvXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gISEoY3VycmVudEZpbmdlcnByaW50LmpvaW4oJycpID09PSBwcmV2aW91c0ZpbmdlcnByaW50LmpvaW4oJycpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgRGVkdXBlLmlkID0gJ0RlZHVwZSc7XG4gICAgcmV0dXJuIERlZHVwZTtcbn0oKSk7XG5leHBvcnQgeyBEZWR1cGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZHVwZS5qcy5tYXAiLCJpbXBvcnQgeyBnZXRHbG9iYWxPYmplY3QsIGlzSW5zdGFuY2VPZiwgbG9nZ2VyIH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG4vKiogSlNEb2MgKi9cbnZhciBFbWJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgZnVuY3Rpb24gRW1iZXIob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IEVtYmVyLmlkO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgIHRoaXMuX0VtYmVyID0gb3B0aW9ucy5FbWJlciB8fCBnZXRHbG9iYWxPYmplY3QoKS5FbWJlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBFbWJlci5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKF8sIGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLl9FbWJlcikge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdFbWJlckludGVncmF0aW9uIGlzIG1pc3NpbmcgYW4gRW1iZXIgaW5zdGFuY2UnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbiAgICAgICAgdmFyIG9sZE9uRXJyb3IgPSB0aGlzLl9FbWJlci5vbmVycm9yO1xuICAgICAgICB0aGlzLl9FbWJlci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKEVtYmVyKSkge1xuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRIdWIoKS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yLCB7IG9yaWdpbmFsRXhjZXB0aW9uOiBlcnJvciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2xkT25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9sZE9uRXJyb3IuY2FsbChfdGhpcy5fRW1iZXIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLl9FbWJlci50ZXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHRoaXMuX0VtYmVyLlJTVlAub24oJ2Vycm9yJywgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgaWYgKGdldEN1cnJlbnRIdWIoKS5nZXRJbnRlZ3JhdGlvbihFbWJlcikpIHtcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50SHViKCkud2l0aFNjb3BlKGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnN0YW5jZU9mKHJlYXNvbiwgRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXRFeHRyYSgnY29udGV4dCcsICdVbmhhbmRsZWQgUHJvbWlzZSBlcnJvciBkZXRlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudEh1YigpLmNhcHR1cmVFeGNlcHRpb24ocmVhc29uLCB7IG9yaWdpbmFsRXhjZXB0aW9uOiByZWFzb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zZXRFeHRyYSgncmVhc29uJywgcmVhc29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRIdWIoKS5jYXB0dXJlTWVzc2FnZSgnVW5oYW5kbGVkIFByb21pc2UgZXJyb3IgZGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgRW1iZXIuaWQgPSAnRW1iZXInO1xuICAgIHJldHVybiBFbWJlcjtcbn0oKSk7XG5leHBvcnQgeyBFbWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1iZXIuanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Vycm9yLCBpc1BsYWluT2JqZWN0LCBsb2dnZXIsIG5vcm1hbGl6ZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuLyoqIFBhdGNoIHRvU3RyaW5nIGNhbGxzIHRvIHJldHVybiBwcm9wZXIgbmFtZSBmb3Igd3JhcHBlZCBmdW5jdGlvbnMgKi9cbnZhciBFeHRyYUVycm9yRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEV4dHJhRXJyb3JEYXRhKF9vcHRpb25zKSB7XG4gICAgICAgIGlmIChfb3B0aW9ucyA9PT0gdm9pZCAwKSB7IF9vcHRpb25zID0geyBkZXB0aDogMyB9OyB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBFeHRyYUVycm9yRGF0YS5pZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBFeHRyYUVycm9yRGF0YS5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChldmVudCwgaGludCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBnZXRDdXJyZW50SHViKCkuZ2V0SW50ZWdyYXRpb24oRXh0cmFFcnJvckRhdGEpO1xuICAgICAgICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZW5oYW5jZUV2ZW50V2l0aEVycm9yRGF0YShldmVudCwgaGludCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgZXh0cmFjdGVkIGluZm9ybWF0aW9uIGZyb20gdGhlIEVycm9yIG9iamVjdCB0byBleHRyYSBmaWVsZCBpbiB0aGUgRXZlbnRcbiAgICAgKi9cbiAgICBFeHRyYUVycm9yRGF0YS5wcm90b3R5cGUuZW5oYW5jZUV2ZW50V2l0aEVycm9yRGF0YSA9IGZ1bmN0aW9uIChldmVudCwgaGludCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghaGludCB8fCAhaGludC5vcmlnaW5hbEV4Y2VwdGlvbiB8fCAhaXNFcnJvcihoaW50Lm9yaWdpbmFsRXhjZXB0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gaGludC5vcmlnaW5hbEV4Y2VwdGlvbi5uYW1lIHx8IGhpbnQub3JpZ2luYWxFeGNlcHRpb24uY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdmFyIGVycm9yRGF0YSA9IHRoaXMuX2V4dHJhY3RFcnJvckRhdGEoaGludC5vcmlnaW5hbEV4Y2VwdGlvbik7XG4gICAgICAgIGlmIChlcnJvckRhdGEpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0cyA9IF9fYXNzaWduKHt9LCBldmVudC5jb250ZXh0cyk7XG4gICAgICAgICAgICB2YXIgbm9ybWFsaXplZEVycm9yRGF0YSA9IG5vcm1hbGl6ZShlcnJvckRhdGEsIHRoaXMuX29wdGlvbnMuZGVwdGgpO1xuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qobm9ybWFsaXplZEVycm9yRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudC5jb250ZXh0cyksIChfYSA9IHt9LCBfYVtuYW1lXSA9IF9fYXNzaWduKHt9LCBub3JtYWxpemVkRXJyb3JEYXRhKSwgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQpLCB7IGNvbnRleHRzOiBjb250ZXh0cyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGV4dHJhIGluZm9ybWF0aW9uIGZyb20gdGhlIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIEV4dHJhRXJyb3JEYXRhLnByb3RvdHlwZS5fZXh0cmFjdEVycm9yRGF0YSA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIC8vIFdlIGFyZSB0cnlpbmcgdG8gZW5oYW5jZSBhbHJlYWR5IGV4aXN0aW5nIGV2ZW50LCBzbyBubyBoYXJtIGRvbmUgaWYgaXQgd29uJ3Qgc3VjY2VlZFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUtleXNfMSA9IFsnbmFtZScsICdtZXNzYWdlJywgJ3N0YWNrJywgJ2xpbmUnLCAnY29sdW1uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnY29sdW1uTnVtYmVyJ107XG4gICAgICAgICAgICB2YXIgZXJyb3JLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXJyb3IpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBuYXRpdmVLZXlzXzEuaW5kZXhPZihrZXkpID09PSAtMTsgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3JLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBleHRyYUVycm9ySW5mbyA9IHt9O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yS2V5c18xID0gX192YWx1ZXMoZXJyb3JLZXlzKSwgZXJyb3JLZXlzXzFfMSA9IGVycm9yS2V5c18xLm5leHQoKTsgIWVycm9yS2V5c18xXzEuZG9uZTsgZXJyb3JLZXlzXzFfMSA9IGVycm9yS2V5c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGVycm9yS2V5c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlcnJvcltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFFcnJvckluZm9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JLZXlzXzFfMSAmJiAhZXJyb3JLZXlzXzFfMS5kb25lICYmIChfYSA9IGVycm9yS2V5c18xLnJldHVybikpIF9hLmNhbGwoZXJyb3JLZXlzXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZXh0cmFFcnJvckluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKG9PKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1VuYWJsZSB0byBleHRyYWN0IGV4dHJhIGRhdGEgZnJvbSB0aGUgRXJyb3Igb2JqZWN0OicsIG9PKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBFeHRyYUVycm9yRGF0YS5pZCA9ICdFeHRyYUVycm9yRGF0YSc7XG4gICAgcmV0dXJuIEV4dHJhRXJyb3JEYXRhO1xufSgpKTtcbmV4cG9ydCB7IEV4dHJhRXJyb3JEYXRhIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHRyYWVycm9yZGF0YS5qcy5tYXAiLCJleHBvcnQgeyBBbmd1bGFyIH0gZnJvbSAnLi9hbmd1bGFyJztcbmV4cG9ydCB7IENhcHR1cmVDb25zb2xlIH0gZnJvbSAnLi9jYXB0dXJlY29uc29sZSc7XG5leHBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4vZGVidWcnO1xuZXhwb3J0IHsgRGVkdXBlIH0gZnJvbSAnLi9kZWR1cGUnO1xuZXhwb3J0IHsgRW1iZXIgfSBmcm9tICcuL2VtYmVyJztcbmV4cG9ydCB7IEV4dHJhRXJyb3JEYXRhIH0gZnJvbSAnLi9leHRyYWVycm9yZGF0YSc7XG5leHBvcnQgeyBPZmZsaW5lIH0gZnJvbSAnLi9vZmZsaW5lJztcbmV4cG9ydCB7IFJlcG9ydGluZ09ic2VydmVyIH0gZnJvbSAnLi9yZXBvcnRpbmdvYnNlcnZlcic7XG5leHBvcnQgeyBSZXdyaXRlRnJhbWVzIH0gZnJvbSAnLi9yZXdyaXRlZnJhbWVzJztcbmV4cG9ydCB7IFNlc3Npb25UaW1pbmcgfSBmcm9tICcuL3Nlc3Npb250aW1pbmcnO1xuZXhwb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9uJztcbmV4cG9ydCB7IFZ1ZSB9IGZyb20gJy4vdnVlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXdhaXRlciwgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCwgbG9nZ2VyLCBub3JtYWxpemUsIHV1aWQ0IH0gZnJvbSAnQHNlbnRyeS91dGlscyc7XG5pbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuLyoqXG4gKiBjYWNoZSBvZmZsaW5lIGVycm9ycyBhbmQgc2VuZCB3aGVuIGNvbm5lY3RlZFxuICovXG52YXIgT2ZmbGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9mZmxpbmUob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IE9mZmxpbmUuaWQ7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHRoaXMuZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgICAgIHRoaXMubWF4U3RvcmVkRXZlbnRzID0gb3B0aW9ucy5tYXhTdG9yZWRFdmVudHMgfHwgMzA7IC8vIHNldCBhIHJlYXNvbmFibGUgZGVmYXVsdFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgIHRoaXMub2ZmbGluZUV2ZW50U3RvcmUgPSBsb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICBuYW1lOiAnc2VudHJ5L29mZmxpbmVFdmVudFN0b3JlJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgT2ZmbGluZS5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaHViID0gZ2V0Q3VycmVudEh1YigpO1xuICAgICAgICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHRoaXMuZ2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NlbmRFdmVudHMoKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdjb3VsZCBub3Qgc2VuZCBjYWNoZWQgZXZlbnRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5odWIgJiYgX3RoaXMuaHViLmdldEludGVncmF0aW9uKE9mZmxpbmUpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FjaGUgaWYgd2UgYXJlIHBvc2l0aXZlbHkgb2ZmbGluZVxuICAgICAgICAgICAgICAgIGlmICgnbmF2aWdhdG9yJyBpbiBfdGhpcy5nbG9iYWwgJiYgJ29uTGluZScgaW4gX3RoaXMuZ2xvYmFsLm5hdmlnYXRvciAmJiAhX3RoaXMuZ2xvYmFsLm5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NhY2hlRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoX2V2ZW50KSB7IHJldHVybiBfdGhpcy5fZW5mb3JjZU1heEV2ZW50cygpOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChfZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdjb3VsZCBub3QgY2FjaGUgZXZlbnQgd2hpbGUgb2ZmbGluZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG51bGwgb24gc3VjY2VzcyBvciBmYWlsdXJlLCBiZWNhdXNlIGJlaW5nIG9mZmxpbmUgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgb25saW5lIG5vdywgc2VuZCBhbnkgZXZlbnRzIHN0b3JlZCBpbiBhIHByZXZpb3VzIG9mZmxpbmUgc2Vzc2lvblxuICAgICAgICBpZiAoJ25hdmlnYXRvcicgaW4gdGhpcy5nbG9iYWwgJiYgJ29uTGluZScgaW4gdGhpcy5nbG9iYWwubmF2aWdhdG9yICYmIHRoaXMuZ2xvYmFsLm5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbmRFdmVudHMoKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ2NvdWxkIG5vdCBzZW5kIGNhY2hlZCBldmVudHMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBjYWNoZSBhbiBldmVudCB0byBzZW5kIGxhdGVyXG4gICAgICogQHBhcmFtIGV2ZW50IGFuIGV2ZW50XG4gICAgICovXG4gICAgT2ZmbGluZS5wcm90b3R5cGUuX2NhY2hlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLm9mZmxpbmVFdmVudFN0b3JlLnNldEl0ZW0odXVpZDQoKSwgbm9ybWFsaXplKGV2ZW50KSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogcHVyZ2UgZXhjZXNzIGV2ZW50cyBpZiBuZWNlc3NhcnlcbiAgICAgKi9cbiAgICBPZmZsaW5lLnByb3RvdHlwZS5fZW5mb3JjZU1heEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50cztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMub2ZmbGluZUV2ZW50U3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVyYXRlKGZ1bmN0aW9uIChldmVudCwgY2FjaGVLZXksIF9pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWdncmVnYXRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goeyBjYWNoZUtleTogY2FjaGVLZXksIGV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcHJvbWlzZSByZXNvbHZlcyB3aGVuIHRoZSBpdGVyYXRpb24gaXMgZmluaXNoZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fcHVyZ2VFdmVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwdXJnZSBhbGwgZXZlbnRzIHBhc3QgbWF4U3RvcmVkRXZlbnRzIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChiLmV2ZW50LnRpbWVzdGFtcCB8fCAwKSAtIChhLmV2ZW50LnRpbWVzdGFtcCB8fCAwKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoX3RoaXMubWF4U3RvcmVkRXZlbnRzIDwgZXZlbnRzLmxlbmd0aCA/IF90aGlzLm1heFN0b3JlZEV2ZW50cyA6IGV2ZW50cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50LmNhY2hlS2V5OyB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKF9lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ2NvdWxkIG5vdCBlbmZvcmNlIG1heCBldmVudHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogcHVyZ2UgZXZlbnQgZnJvbSBjYWNoZVxuICAgICAqL1xuICAgIE9mZmxpbmUucHJvdG90eXBlLl9wdXJnZUV2ZW50ID0gZnVuY3Rpb24gKGNhY2hlS2V5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5vZmZsaW5lRXZlbnRTdG9yZS5yZW1vdmVJdGVtKGNhY2hlS2V5KV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBwdXJnZSBldmVudHMgZnJvbSBjYWNoZVxuICAgICAqL1xuICAgIE9mZmxpbmUucHJvdG90eXBlLl9wdXJnZUV2ZW50cyA9IGZ1bmN0aW9uIChjYWNoZUtleXMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFpbCB3aXRoIC50aGVuIHRvIGVuc3VyZSB0aGUgcmV0dXJuIHR5cGUgYXMgdm9pZCBhbmQgbm90IHZvaWR8dm9pZFtdXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UuYWxsKGNhY2hlS2V5cy5tYXAoZnVuY3Rpb24gKGNhY2hlS2V5KSB7IHJldHVybiBfdGhpcy5fcHVyZ2VFdmVudChjYWNoZUtleSk7IH0pKS50aGVuKCldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc2VuZCBhbGwgZXZlbnRzXG4gICAgICovXG4gICAgT2ZmbGluZS5wcm90b3R5cGUuX3NlbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMub2ZmbGluZUV2ZW50U3RvcmUuaXRlcmF0ZShmdW5jdGlvbiAoZXZlbnQsIGNhY2hlS2V5LCBfaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5odWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5odWIuY2FwdHVyZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fcHVyZ2VFdmVudChjYWNoZUtleSkuY2F0Y2goZnVuY3Rpb24gKF9lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybignY291bGQgbm90IHB1cmdlIGV2ZW50IGZyb20gY2FjaGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdubyBodWIgZm91bmQgLSBjb3VsZCBub3Qgc2VuZCBjYWNoZWQgZXZlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBPZmZsaW5lLmlkID0gJ09mZmxpbmUnO1xuICAgIHJldHVybiBPZmZsaW5lO1xufSgpKTtcbmV4cG9ydCB7IE9mZmxpbmUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9mZmxpbmUuanMubWFwIiwiaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCwgc3VwcG9ydHNSZXBvcnRpbmdPYnNlcnZlciB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuLyoqIEpTRG9jICovXG52YXIgUmVwb3J0VHlwZXM7XG4oZnVuY3Rpb24gKFJlcG9ydFR5cGVzKSB7XG4gICAgLyoqIEpTRG9jICovXG4gICAgUmVwb3J0VHlwZXNbXCJDcmFzaFwiXSA9IFwiY3Jhc2hcIjtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBSZXBvcnRUeXBlc1tcIkRlcHJlY2F0aW9uXCJdID0gXCJkZXByZWNhdGlvblwiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFJlcG9ydFR5cGVzW1wiSW50ZXJ2ZW50aW9uXCJdID0gXCJpbnRlcnZlbnRpb25cIjtcbn0pKFJlcG9ydFR5cGVzIHx8IChSZXBvcnRUeXBlcyA9IHt9KSk7XG4vKiogUmVwb3J0aW5nIEFQSSBpbnRlZ3JhdGlvbiAtIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9yZXBvcnRpbmcvICovXG52YXIgUmVwb3J0aW5nT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSZXBvcnRpbmdPYnNlcnZlcihfb3B0aW9ucykge1xuICAgICAgICBpZiAoX29wdGlvbnMgPT09IHZvaWQgMCkgeyBfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHR5cGVzOiBbUmVwb3J0VHlwZXMuQ3Jhc2gsIFJlcG9ydFR5cGVzLkRlcHJlY2F0aW9uLCBSZXBvcnRUeXBlcy5JbnRlcnZlbnRpb25dLFxuICAgICAgICB9OyB9XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBSZXBvcnRpbmdPYnNlcnZlci5pZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBSZXBvcnRpbmdPYnNlcnZlci5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKF8sIGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgaWYgKCFzdXBwb3J0c1JlcG9ydGluZ09ic2VydmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nZXRDdXJyZW50SHViID0gZ2V0Q3VycmVudEh1YjtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgKGdldEdsb2JhbE9iamVjdCgpLlJlcG9ydGluZ09ic2VydmVyKSh0aGlzLmhhbmRsZXIuYmluZCh0aGlzKSwge1xuICAgICAgICAgICAgYnVmZmVyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlczogdGhpcy5fb3B0aW9ucy50eXBlcyxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBSZXBvcnRpbmdPYnNlcnZlci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChyZXBvcnRzKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgaHViID0gdGhpcy5fZ2V0Q3VycmVudEh1YiAmJiB0aGlzLl9nZXRDdXJyZW50SHViKCk7XG4gICAgICAgIGlmICghaHViIHx8ICFodWIuZ2V0SW50ZWdyYXRpb24oUmVwb3J0aW5nT2JzZXJ2ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAocmVwb3J0KSB7XG4gICAgICAgICAgICBodWIud2l0aFNjb3BlKGZ1bmN0aW9uIChzY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlLnNldEV4dHJhKCd1cmwnLCByZXBvcnQudXJsKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBcIlJlcG9ydGluZ09ic2VydmVyIFtcIiArIHJlcG9ydC50eXBlICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHMgPSAnTm8gZGV0YWlscyBhdmFpbGFibGUnO1xuICAgICAgICAgICAgICAgIGlmIChyZXBvcnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3Qua2V5cyBkb2Vzbid0IHdvcmsgb24gUmVwb3J0Qm9keSwgYXMgYWxsIHByb3BlcnRpZXMgYXJlIGluaGVpcnRlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhaW5Cb2R5ID0ge307XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiByZXBvcnQuYm9keSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhaW5Cb2R5W3Byb3BdID0gcmVwb3J0LmJvZHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2V0RXh0cmEoJ2JvZHknLCBwbGFpbkJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVwb3J0LnR5cGUgPT09IFJlcG9ydFR5cGVzLkNyYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlcG9ydC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQSBmYW5jeSB3YXkgdG8gY3JlYXRlIGEgbWVzc2FnZSBvdXQgb2YgY3Jhc2hJZCBPUiByZWFzb24gT1IgYm90aCBPUiBmYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IFtib2R5LmNyYXNoSWQgfHwgJycsIGJvZHkucmVhc29uIHx8ICcnXS5qb2luKCcgJykudHJpbSgpIHx8IGRldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHJlcG9ydC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IGJvZHkubWVzc2FnZSB8fCBkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGh1Yi5jYXB0dXJlTWVzc2FnZShsYWJlbCArIFwiOiBcIiArIGRldGFpbHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciByZXBvcnRzXzEgPSBfX3ZhbHVlcyhyZXBvcnRzKSwgcmVwb3J0c18xXzEgPSByZXBvcnRzXzEubmV4dCgpOyAhcmVwb3J0c18xXzEuZG9uZTsgcmVwb3J0c18xXzEgPSByZXBvcnRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcG9ydCA9IHJlcG9ydHNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIF9sb29wXzEocmVwb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9ydHNfMV8xICYmICFyZXBvcnRzXzFfMS5kb25lICYmIChfYSA9IHJlcG9ydHNfMS5yZXR1cm4pKSBfYS5jYWxsKHJlcG9ydHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgUmVwb3J0aW5nT2JzZXJ2ZXIuaWQgPSAnUmVwb3J0aW5nT2JzZXJ2ZXInO1xuICAgIHJldHVybiBSZXBvcnRpbmdPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXBvcnRpbmdPYnNlcnZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVwb3J0aW5nb2JzZXJ2ZXIuanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGJhc2VuYW1lLCByZWxhdGl2ZSB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuLyoqIFJld3JpdGUgZXZlbnQgZnJhbWVzIHBhdGhzICovXG52YXIgUmV3cml0ZUZyYW1lcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJld3JpdGVGcmFtZXMob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IFJld3JpdGVGcmFtZXMuaWQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW5oZXJpdERvY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcHJlZml4ID0gJ2FwcDovLy8nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2l0ZXJhdGVlID0gZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICBpZiAoIWZyYW1lLmZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGZyYW1lIGZpbGVuYW1lIGJlZ2lucyB3aXRoIGAvYCBvciBhIFdpbmRvd3Mtc3R5bGUgcHJlZml4IHN1Y2ggYXMgYEM6XFxgXG4gICAgICAgICAgICB2YXIgaXNXaW5kb3dzRnJhbWUgPSAvXltBLVpdOlxcXFwvLnRlc3QoZnJhbWUuZmlsZW5hbWUpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0c1dpdGhTbGFzaCA9IC9eXFwvLy50ZXN0KGZyYW1lLmZpbGVuYW1lKTtcbiAgICAgICAgICAgIGlmIChpc1dpbmRvd3NGcmFtZSB8fCBzdGFydHNXaXRoU2xhc2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSBpc1dpbmRvd3NGcmFtZVxuICAgICAgICAgICAgICAgICAgICA/IGZyYW1lLmZpbGVuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXltBLVpdOi8sICcnKSAvLyByZW1vdmUgV2luZG93cy1zdHlsZSBwcmVmaXhcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcL2csICcvJykgLy8gcmVwbGFjZSBhbGwgYFxcXFxgIGluc3RhbmNlcyB3aXRoIGAvYFxuICAgICAgICAgICAgICAgICAgICA6IGZyYW1lLmZpbGVuYW1lO1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gX3RoaXMuX3Jvb3QgPyByZWxhdGl2ZShfdGhpcy5fcm9vdCwgZmlsZW5hbWUpIDogYmFzZW5hbWUoZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIGZyYW1lLmZpbGVuYW1lID0gXCJcIiArIF90aGlzLl9wcmVmaXggKyBiYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgICAgICB9O1xuICAgICAgICBpZiAob3B0aW9ucy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLl9yb290ID0gb3B0aW9ucy5yb290O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5fcHJlZml4ID0gb3B0aW9ucy5wcmVmaXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaXRlcmF0ZWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZXJhdGVlID0gb3B0aW9ucy5pdGVyYXRlZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFJld3JpdGVGcmFtZXMucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uIChhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1Yikge1xuICAgICAgICBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKFJld3JpdGVGcmFtZXMpO1xuICAgICAgICAgICAgaWYgKHNlbGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wcm9jZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBSZXdyaXRlRnJhbWVzLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5leGNlcHRpb24gJiYgQXJyYXkuaXNBcnJheShldmVudC5leGNlcHRpb24udmFsdWVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NFeGNlcHRpb25zRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5zdGFja3RyYWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc1N0YWNrdHJhY2VFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgUmV3cml0ZUZyYW1lcy5wcm90b3R5cGUuX3Byb2Nlc3NFeGNlcHRpb25zRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQpLCB7IGV4Y2VwdGlvbjogX19hc3NpZ24oX19hc3NpZ24oe30sIGV2ZW50LmV4Y2VwdGlvbiksIHsgXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjaGVjayBmb3IgdGhpcyBpcyBwZXJmb3JtZWQgaW5zaWRlIGBwcm9jZXNzYCBjYWxsIGl0c2VsZiwgc2FmZSB0byBza2lwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBldmVudC5leGNlcHRpb24udmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdmFsdWUpLCB7IHN0YWNrdHJhY2U6IF90aGlzLl9wcm9jZXNzU3RhY2t0cmFjZSh2YWx1ZS5zdGFja3RyYWNlKSB9KSk7IH0pIH0pIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgUmV3cml0ZUZyYW1lcy5wcm90b3R5cGUuX3Byb2Nlc3NTdGFja3RyYWNlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQpLCB7IHN0YWNrdHJhY2U6IHRoaXMuX3Byb2Nlc3NTdGFja3RyYWNlKGV2ZW50LnN0YWNrdHJhY2UpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgUmV3cml0ZUZyYW1lcy5wcm90b3R5cGUuX3Byb2Nlc3NTdGFja3RyYWNlID0gZnVuY3Rpb24gKHN0YWNrdHJhY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGFja3RyYWNlKSwgeyBmcmFtZXM6IHN0YWNrdHJhY2UgJiYgc3RhY2t0cmFjZS5mcmFtZXMgJiYgc3RhY2t0cmFjZS5mcmFtZXMubWFwKGZ1bmN0aW9uIChmKSB7IHJldHVybiBfdGhpcy5faXRlcmF0ZWUoZik7IH0pIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBSZXdyaXRlRnJhbWVzLmlkID0gJ1Jld3JpdGVGcmFtZXMnO1xuICAgIHJldHVybiBSZXdyaXRlRnJhbWVzO1xufSgpKTtcbmV4cG9ydCB7IFJld3JpdGVGcmFtZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJld3JpdGVmcmFtZXMuanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbi8qKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZHVyYXRpb24gc2luY2UgU2VudHJ5IHdhcyBpbml0aWFsaXplZCB0aWxsIHRoZSB0aW1lIGV2ZW50IHdhcyBzZW50ICovXG52YXIgU2Vzc2lvblRpbWluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZXNzaW9uVGltaW5nKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IFNlc3Npb25UaW1pbmcuaWQ7XG4gICAgICAgIC8qKiBFeGFjdCB0aW1lIENsaWVudCB3YXMgaW5pdGlhbGl6ZWQgZXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcyBzaW5jZSBVbml4IEVwb2NoLiAqL1xuICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNlc3Npb25UaW1pbmcucHJvdG90eXBlLnNldHVwT25jZSA9IGZ1bmN0aW9uIChhZGRHbG9iYWxFdmVudFByb2Nlc3NvciwgZ2V0Q3VycmVudEh1Yikge1xuICAgICAgICBhZGRHbG9iYWxFdmVudFByb2Nlc3NvcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKFNlc3Npb25UaW1pbmcpO1xuICAgICAgICAgICAgaWYgKHNlbGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wcm9jZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFNlc3Npb25UaW1pbmcucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudCksIHsgZXh0cmE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudC5leHRyYSksIChfYSA9IHt9LCBfYVsnc2Vzc2lvbjpzdGFydCddID0gdGhpcy5fc3RhcnRUaW1lLCBfYVsnc2Vzc2lvbjpkdXJhdGlvbiddID0gbm93IC0gdGhpcy5fc3RhcnRUaW1lLCBfYVsnc2Vzc2lvbjplbmQnXSA9IG5vdywgX2EpKSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgU2Vzc2lvblRpbWluZy5pZCA9ICdTZXNzaW9uVGltaW5nJztcbiAgICByZXR1cm4gU2Vzc2lvblRpbWluZztcbn0oKSk7XG5leHBvcnQgeyBTZXNzaW9uVGltaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXNzaW9udGltaW5nLmpzLm1hcCIsIi8qKiBBZGQgbm9kZSB0cmFuc2FjdGlvbiB0byB0aGUgZXZlbnQgKi9cbnZhciBUcmFuc2FjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2FjdGlvbigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbmhlcml0RG9jXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBUcmFuc2FjdGlvbi5pZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yLCBnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIGFkZEdsb2JhbEV2ZW50UHJvY2Vzc29yKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBnZXRDdXJyZW50SHViKCkuZ2V0SW50ZWdyYXRpb24oVHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKHNlbGYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5wcm9jZXNzKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBmcmFtZXMgPSB0aGlzLl9nZXRGcmFtZXNGcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICAvLyB1c2UgZm9yIGxvb3Agc28gd2UgZG9uJ3QgaGF2ZSB0byByZXZlcnNlIHdob2xlIGZyYW1lcyBhcnJheVxuICAgICAgICBmb3IgKHZhciBpID0gZnJhbWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBmcmFtZXNbaV07XG4gICAgICAgICAgICBpZiAoZnJhbWUuaW5fYXBwID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudHJhbnNhY3Rpb24gPSB0aGlzLl9nZXRUcmFuc2FjdGlvbihmcmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLl9nZXRGcmFtZXNGcm9tRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IGV2ZW50LmV4Y2VwdGlvbiAmJiBldmVudC5leGNlcHRpb24udmFsdWVzICYmIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF07XG4gICAgICAgIHJldHVybiAoZXhjZXB0aW9uICYmIGV4Y2VwdGlvbi5zdGFja3RyYWNlICYmIGV4Y2VwdGlvbi5zdGFja3RyYWNlLmZyYW1lcykgfHwgW107XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuX2dldFRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgIHJldHVybiBmcmFtZS5tb2R1bGUgfHwgZnJhbWUuZnVuY3Rpb24gPyAoZnJhbWUubW9kdWxlIHx8ICc/JykgKyBcIi9cIiArIChmcmFtZS5mdW5jdGlvbiB8fCAnPycpIDogJzx1bmtub3duPic7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFRyYW5zYWN0aW9uLmlkID0gJ1RyYW5zYWN0aW9uJztcbiAgICByZXR1cm4gVHJhbnNhY3Rpb247XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNhY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zYWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduLCBfX3JlYWQsIF9fc3ByZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBiYXNlbmFtZSwgZ2V0R2xvYmFsT2JqZWN0LCBsb2dnZXIsIHRpbWVzdGFtcFdpdGhNcyB9IGZyb20gJ0BzZW50cnkvdXRpbHMnO1xuLyoqXG4gKiBVc2VkIHRvIGV4dHJhY3QgVHJhY2luZyBpbnRlZ3JhdGlvbiBmcm9tIHRoZSBjdXJyZW50IGNsaWVudCxcbiAqIHdpdGhvdXQgdGhlIG5lZWQgdG8gaW1wb3J0IGBUcmFjaW5nYCBpdHNlbGYgZnJvbSB0aGUgQHNlbnRyeS9hcG0gcGFja2FnZS5cbiAqIEBkZXByZWNhdGVkIGFzIEBzZW50cnkvdHJhY2luZyBzaG91bGQgYmUgdXNlZCBvdmVyIEBzZW50cnkvYXBtLlxuICovXG52YXIgVFJBQ0lOR19HRVRURVIgPSB7XG4gICAgaWQ6ICdUcmFjaW5nJyxcbn07XG4vKipcbiAqIFVzZWQgdG8gZXh0cmFjdCBCcm93c2VyVHJhY2luZyBpbnRlZ3JhdGlvbiBmcm9tIEBzZW50cnkvdHJhY2luZ1xuICovXG52YXIgQlJPV1NFUl9UUkFDSU5HX0dFVFRFUiA9IHtcbiAgICBpZDogJ0Jyb3dzZXJUcmFjaW5nJyxcbn07XG4vLyBNYXBwaW5ncyBmcm9tIG9wZXJhdGlvbiB0byBjb3JyZXNwb25kaW5nIGxpZmVjeWNsZSBob29rLlxudmFyIEhPT0tTID0ge1xuICAgIGFjdGl2YXRlOiBbJ2FjdGl2YXRlZCcsICdkZWFjdGl2YXRlZCddLFxuICAgIGNyZWF0ZTogWydiZWZvcmVDcmVhdGUnLCAnY3JlYXRlZCddLFxuICAgIGRlc3Ryb3k6IFsnYmVmb3JlRGVzdHJveScsICdkZXN0cm95ZWQnXSxcbiAgICBtb3VudDogWydiZWZvcmVNb3VudCcsICdtb3VudGVkJ10sXG4gICAgdXBkYXRlOiBbJ2JlZm9yZVVwZGF0ZScsICd1cGRhdGVkJ10sXG59O1xudmFyIENPTVBPTkVOVF9OQU1FX1JFR0VYUCA9IC8oPzpefFstXy9dKShcXHcpL2c7XG52YXIgUk9PVF9DT01QT05FTlRfTkFNRSA9ICdyb290JztcbnZhciBBTk9OWU1PVVNfQ09NUE9ORU5UX05BTUUgPSAnYW5vbnltb3VzIGNvbXBvbmVudCc7XG4vKiogSlNEb2MgKi9cbnZhciBWdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBWdWUob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGluaGVyaXREb2NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IFZ1ZS5pZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIGhvbGRpbmcgYWxyZWFkeSBwcm9jZXNzZWQgY29tcG9uZW50IG5hbWVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzQ2FjaGUgPSB7fTtcbiAgICAgICAgLyoqIEtlZXAgaXQgYXMgYXR0cmlidXRlIGZ1bmN0aW9uLCB0byBrZWVwIGNvcnJlY3QgYHRoaXNgIGJpbmRpbmcgaW5zaWRlIHRoZSBob29rcyBjYWxsYmFja3MgICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdHlwZWRlZlxuICAgICAgICB0aGlzLl9hcHBseVRyYWNpbmdIb29rcyA9IGZ1bmN0aW9uICh2bSwgZ2V0Q3VycmVudEh1Yikge1xuICAgICAgICAgICAgLy8gRG9uJ3QgYXR0YWNoIHR3aWNlLCBqdXN0IGluIGNhc2VcbiAgICAgICAgICAgIGlmICh2bS4kb3B0aW9ucy4kX3NlbnRyeVBlcmZIb29rKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0uJG9wdGlvbnMuJF9zZW50cnlQZXJmSG9vayA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF90aGlzLl9nZXRDb21wb25lbnROYW1lKHZtKTtcbiAgICAgICAgICAgIHZhciByb290TW91bnQgPSBuYW1lID09PSBST09UX0NPTVBPTkVOVF9OQU1FO1xuICAgICAgICAgICAgdmFyIHNwYW5zID0ge307XG4gICAgICAgICAgICAvLyBSZW5kZXIgaG9vayBzdGFydHMgYWZ0ZXIgb25jZSBldmVudCBpcyBlbWl0dGVkLFxuICAgICAgICAgICAgLy8gYnV0IGl0IGVuZHMgYmVmb3JlIHRoZSBzZWNvbmQgZXZlbnQgb2YgdGhlIHNhbWUgdHlwZS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBCZWNhdXNlIG9mIHRoaXMsIHdlIHN0YXJ0IG1lYXN1cmluZyBpbnNpZGUgdGhlIGZpcnN0IGV2ZW50LFxuICAgICAgICAgICAgLy8gYnV0IGZpbmlzaCBpdCBiZWZvcmUgaXQgdHJpZ2dlcnMsIHRvIHNraXAgdGhlIGV2ZW50IGVtaXR0ZXIgdGltaW5nIGl0c2VsZi5cbiAgICAgICAgICAgIHZhciByb290SGFuZGxlciA9IGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IHRpbWVzdGFtcFdpdGhNcygpO1xuICAgICAgICAgICAgICAgIC8vIE9uIHRoZSBmaXJzdCBoYW5kbGVyIGNhbGwgKGJlZm9yZSksIGl0J2xsIGJlIHVuZGVmaW5lZCwgYXMgYCRvbmNlYCB3aWxsIGFkZCBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgICAgIC8vIEhvd2V2ZXIsIG9uIHRoZSBzZWNvbmQgY2FsbCAoYWZ0ZXIpLCBpdCdsbCBiZSBhbHJlYWR5IGluIHBsYWNlLlxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fcm9vdFNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZpbmlzaFJvb3RTcGFuKG5vdywgZ2V0Q3VycmVudEh1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2bS4kb25jZShcImhvb2s6XCIgKyBob29rLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW4gYWN0aXZpdHkgb24gdGhlIGZpcnN0IGV2ZW50IGNhbGwuIFRoZXJlJ2xsIGJlIG5vIHNlY29uZCBjYWxsLCBhcyByb290U3BhbiB3aWxsIGJlIGluIHBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGh1cyBuZXcgZXZlbnQgaGFuZGxlciB3b24ndCBiZSBhdHRhY2hlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgd2hvbGUgZGFuY2Ugd2l0aCBgVFJBQ0lOR19HRVRURVJgIHRvIHByZXZlbnQgYEBzZW50cnkvYXBtYCBmcm9tIGJlY29taW5nIGEgcGVlckRlcGVuZGVuY3kuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gYXNrIGZvciB0aGUgYC5jb25zdHJ1Y3RvcmAsIGFzIGBwdXNoQWN0aXZpdHlgIGFuZCBgcG9wQWN0aXZpdHlgIGFyZSBzdGF0aWMsIG5vdCBpbnN0YW5jZSBtZXRob2RzLlxuICAgICAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFjaW5nSW50ZWdyYXRpb24gPSBnZXRDdXJyZW50SHViKCkuZ2V0SW50ZWdyYXRpb24oVFJBQ0lOR19HRVRURVIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNpbmdJbnRlZ3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90cmFjaW5nQWN0aXZpdHkgPSB0cmFjaW5nSW50ZWdyYXRpb24uY29uc3RydWN0b3IucHVzaEFjdGl2aXR5KCdWdWUgQXBwbGljYXRpb24gUmVuZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gdHJhY2luZ0ludGVncmF0aW9uLmNvbnN0cnVjdG9yLmdldFRyYW5zYWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9yb290U3BhbiA9IHRyYW5zYWN0aW9uLnN0YXJ0Q2hpbGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWNhdGlvbiBSZW5kZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdWdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGZ1bmN0aW9uYWxpdHkgZnJvbSBAc2VudHJ5L3RyYWNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVUcmFuc2FjdGlvbiA9IGdldEFjdGl2ZVRyYW5zYWN0aW9uKGdldEN1cnJlbnRIdWIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9yb290U3BhbiA9IGFjdGl2ZVRyYW5zYWN0aW9uLnN0YXJ0Q2hpbGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcHBsaWNhdGlvbiBSZW5kZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6ICdWdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNoaWxkSGFuZGxlciA9IGZ1bmN0aW9uIChob29rLCBvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGNvbXBvbmVudHMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIHRyYWNrIHRvIG1pbmltaXplIHRoZSBub2lzZSBhbmQgZ2l2ZSBhIG1vcmUgZ3JhbnVsYXIgY29udHJvbCB0byB0aGUgdXNlclxuICAgICAgICAgICAgICAgIHZhciBzaG91bGRUcmFjayA9IEFycmF5LmlzQXJyYXkoX3RoaXMuX29wdGlvbnMudHJhY2luZ09wdGlvbnMudHJhY2tDb21wb25lbnRzKVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLl9vcHRpb25zLnRyYWNpbmdPcHRpb25zLnRyYWNrQ29tcG9uZW50cy5pbmRleE9mKG5hbWUpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgOiBfdGhpcy5fb3B0aW9ucy50cmFjaW5nT3B0aW9ucy50cmFja0NvbXBvbmVudHM7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fcm9vdFNwYW4gfHwgIXNob3VsZFRyYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IHRpbWVzdGFtcFdpdGhNcygpO1xuICAgICAgICAgICAgICAgIHZhciBzcGFuID0gc3BhbnNbb3BlcmF0aW9uXTtcbiAgICAgICAgICAgICAgICAvLyBPbiB0aGUgZmlyc3QgaGFuZGxlciBjYWxsIChiZWZvcmUpLCBpdCdsbCBiZSB1bmRlZmluZWQsIGFzIGAkb25jZWAgd2lsbCBhZGQgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgICAgICAvLyBIb3dldmVyLCBvbiB0aGUgc2Vjb25kIGNhbGwgKGFmdGVyKSwgaXQnbGwgYmUgYWxyZWFkeSBpbiBwbGFjZS5cbiAgICAgICAgICAgICAgICBpZiAoc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZmluaXNoUm9vdFNwYW4obm93LCBnZXRDdXJyZW50SHViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRvbmNlKFwiaG9vazpcIiArIGhvb2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fcm9vdFNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuc1tvcGVyYXRpb25dID0gX3RoaXMuX3Jvb3RTcGFuLnN0YXJ0Q2hpbGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWdWUgPFwiICsgbmFtZSArIFwiPlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcDogb3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gRWFjaCBjb21wb25lbnQgaGFzIGl0J3Mgb3duIHNjb3BlLCBzbyBhbGwgYWN0aXZpdGllcyBhcmUgb25seSByZWxhdGVkIHRvIG9uZSBvZiB0aGVtXG4gICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy50cmFjaW5nT3B0aW9ucy5ob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZSBjb3JyZXNwb25kaW5nIGhvb2tzIGZyb20gVnVlIGxpZmVjeWNsZS5cbiAgICAgICAgICAgICAgICAvLyBlZy4gbW91bnQgPT4gWydiZWZvcmVNb3VudCcsICdtb3VudGVkJ11cbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJuYWxIb29rcyA9IEhPT0tTW29wZXJhdGlvbl07XG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbEhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiVW5rbm93biBob29rOiBcIiArIG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW50ZXJuYWxIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcm5hbEhvb2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSByb290TW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcm9vdEhhbmRsZXIuYmluZChfdGhpcywgaW50ZXJuYWxIb29rKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZEhhbmRsZXIuYmluZChfdGhpcywgaW50ZXJuYWxIb29rLCBvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gdm0uJG9wdGlvbnNbaW50ZXJuYWxIb29rXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJG9wdGlvbnNbaW50ZXJuYWxIb29rXSA9IF9fc3ByZWFkKFtoYW5kbGVyXSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kb3B0aW9uc1tpbnRlcm5hbEhvb2tdID0gW2hhbmRsZXIsIGN1cnJlbnRWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kb3B0aW9uc1tpbnRlcm5hbEhvb2tdID0gW2hhbmRsZXJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbG9nZ2VyLmxvZygnWW91IGFyZSBzdGlsbCB1c2luZyB0aGUgVnVlLmpzIGludGVncmF0aW9uLCBjb25zaWRlciBtb3ZpbmcgdG8gQHNlbnRyeS92dWUnKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHsgXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgICAgICBWdWU6IGdldEdsb2JhbE9iamVjdCgpLlZ1ZSwgYXR0YWNoUHJvcHM6IHRydWUsIGxvZ0Vycm9yczogZmFsc2UsIHRyYWNpbmc6IGZhbHNlIH0sIG9wdGlvbnMpLCB7IHRyYWNpbmdPcHRpb25zOiBfX2Fzc2lnbih7IGhvb2tzOiBbJ21vdW50JywgJ3VwZGF0ZSddLCB0aW1lb3V0OiAyMDAwLCB0cmFja0NvbXBvbmVudHM6IGZhbHNlIH0sIG9wdGlvbnMudHJhY2luZ09wdGlvbnMpIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFZ1ZS5wcm90b3R5cGUuc2V0dXBPbmNlID0gZnVuY3Rpb24gKF8sIGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLlZ1ZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdWdWUgaW50ZWdyYXRpb24gaXMgbWlzc2luZyBhIFZ1ZSBpbnN0YW5jZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F0dGFjaEVycm9ySGFuZGxlcihnZXRDdXJyZW50SHViKTtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMudHJhY2luZykge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnRUcmFjaW5nKGdldEN1cnJlbnRIdWIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGNvbXBvbmVudCBuYW1lIGZyb20gdGhlIFZpZXdNb2RlbFxuICAgICAqL1xuICAgIFZ1ZS5wcm90b3R5cGUuX2dldENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0pIHtcbiAgICAgICAgLy8gU3VjaCBsZXZlbCBvZiBncmFudWxhcml0eSBpcyBtb3N0IGxpa2VseSBub3QgbmVjZXNzYXJ5LCBidXQgYmV0dGVyIHNhZmUgdGhhbiBzb3JyeS4g4oCUIEthbWlsXG4gICAgICAgIGlmICghdm0pIHtcbiAgICAgICAgICAgIHJldHVybiBBTk9OWU1PVVNfQ09NUE9ORU5UX05BTUU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgICAgICAgcmV0dXJuIFJPT1RfQ09NUE9ORU5UX05BTUU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2bS4kb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIEFOT05ZTU9VU19DT01QT05FTlRfTkFNRTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm0uJG9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZtLiRvcHRpb25zLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLl9jb21wb25lbnRUYWcpIHtcbiAgICAgICAgICAgIHJldHVybiB2bS4kb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGluamVjdGVkIGJ5IHZ1ZS1sb2FkZXJcbiAgICAgICAgaWYgKHZtLiRvcHRpb25zLl9fZmlsZSkge1xuICAgICAgICAgICAgdmFyIHVuaWZpZWRGaWxlID0gdm0uJG9wdGlvbnMuX19maWxlLnJlcGxhY2UoL15bYS16QS1aXTovLCAnJykucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gYmFzZW5hbWUodW5pZmllZEZpbGUsICcudnVlJyk7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2NvbXBvbmVudHNDYWNoZVtmaWxlbmFtZV0gfHxcbiAgICAgICAgICAgICAgICAodGhpcy5fY29tcG9uZW50c0NhY2hlW2ZpbGVuYW1lXSA9IGZpbGVuYW1lLnJlcGxhY2UoQ09NUE9ORU5UX05BTUVfUkVHRVhQLCBmdW5jdGlvbiAoXywgYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFOT05ZTU9VU19DT01QT05FTlRfTkFNRTtcbiAgICB9O1xuICAgIC8qKiBGaW5pc2ggdG9wLWxldmVsIHNwYW4gYW5kIGFjdGl2aXR5IHdpdGggYSBkZWJvdW5jZSBjb25maWd1cmVkIHVzaW5nIGB0aW1lb3V0YCBvcHRpb24gKi9cbiAgICBWdWUucHJvdG90eXBlLl9maW5pc2hSb290U3BhbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RTcGFuVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yb290U3BhblRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290U3BhblRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX3RyYWNpbmdBY3Rpdml0eSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgd2hvbGUgZGFuY2Ugd2l0aCBgVFJBQ0lOR19HRVRURVJgIHRvIHByZXZlbnQgYEBzZW50cnkvYXBtYCBmcm9tIGJlY29taW5nIGEgcGVlckRlcGVuZGVuY3kuXG4gICAgICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIGFzayBmb3IgdGhlIGAuY29uc3RydWN0b3JgLCBhcyBgcHVzaEFjdGl2aXR5YCBhbmQgYHBvcEFjdGl2aXR5YCBhcmUgc3RhdGljLCBub3QgaW5zdGFuY2UgbWV0aG9kcy5cbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgdHJhY2luZ0ludGVncmF0aW9uID0gZ2V0Q3VycmVudEh1YigpLmdldEludGVncmF0aW9uKFRSQUNJTkdfR0VUVEVSKTtcbiAgICAgICAgICAgICAgICBpZiAodHJhY2luZ0ludGVncmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgdHJhY2luZ0ludGVncmF0aW9uLmNvbnN0cnVjdG9yLnBvcEFjdGl2aXR5KF90aGlzLl90cmFjaW5nQWN0aXZpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBhbHdheXMgZmluaXNoIHRoZSBzcGFuLCBvbmx5IHNob3VsZCBwb3AgYWN0aXZpdHkgaWYgdXNpbmcgQHNlbnRyeS9hcG1cbiAgICAgICAgICAgIGlmIChfdGhpcy5fcm9vdFNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcm9vdFNwYW4uZmluaXNoKHRpbWVzdGFtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuX29wdGlvbnMudHJhY2luZ09wdGlvbnMudGltZW91dCk7XG4gICAgfTtcbiAgICAvKiogSW5qZWN0IGNvbmZpZ3VyZWQgdHJhY2luZyBob29rcyBpbnRvIFZ1ZSdzIGNvbXBvbmVudCBsaWZlY3ljbGVzICovXG4gICAgVnVlLnByb3RvdHlwZS5fc3RhcnRUcmFjaW5nID0gZnVuY3Rpb24gKGdldEN1cnJlbnRIdWIpIHtcbiAgICAgICAgdmFyIGFwcGx5VHJhY2luZ0hvb2tzID0gdGhpcy5fYXBwbHlUcmFjaW5nSG9va3M7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuVnVlLm1peGluKHtcbiAgICAgICAgICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvblxuICAgICAgICAgICAgICAgIGlmIChnZXRDdXJyZW50SHViKCkuZ2V0SW50ZWdyYXRpb24oVFJBQ0lOR19HRVRURVIpIHx8IGdldEN1cnJlbnRIdWIoKS5nZXRJbnRlZ3JhdGlvbihCUk9XU0VSX1RSQUNJTkdfR0VUVEVSKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgdGhpc2AgcG9pbnRzIHRvIGN1cnJlbnRseSByZW5kZXJlZCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlUcmFjaW5nSG9va3ModGhpcywgZ2V0Q3VycmVudEh1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ1Z1ZSBpbnRlZ3JhdGlvbiBoYXMgdHJhY2luZyBlbmFibGVkLCBidXQgVHJhY2luZyBpbnRlZ3JhdGlvbiBpcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEluamVjdCBTZW50cnkncyBoYW5kbGVyIGludG8gb3ducyBWdWUncyBlcnJvciBoYW5kbGVyICAqL1xuICAgIFZ1ZS5wcm90b3R5cGUuX2F0dGFjaEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChnZXRDdXJyZW50SHViKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvdW5ib3VuZC1tZXRob2RcbiAgICAgICAgdmFyIGN1cnJlbnRFcnJvckhhbmRsZXIgPSB0aGlzLl9vcHRpb25zLlZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLl9vcHRpb25zLlZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9yLCB2bSwgaW5mbykge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICBpZiAodm0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb21wb25lbnROYW1lID0gX3RoaXMuX2dldENvbXBvbmVudE5hbWUodm0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX29wdGlvbnMuYXR0YWNoUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhLnByb3BzRGF0YSA9IHZtLiRvcHRpb25zLnByb3BzRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdVbmFibGUgdG8gZXh0cmFjdCBtZXRhZGF0YSBmcm9tIFZ1ZSBjb21wb25lbnQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5saWZlY3ljbGVIb29rID0gaW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRDdXJyZW50SHViKCkuZ2V0SW50ZWdyYXRpb24oVnVlKSkge1xuICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgZXhjZXB0aW9uIGluIHRoZSBuZXh0IGV2ZW50IGxvb3AsIHRvIG1ha2Ugc3VyZSB0aGF0IGFsbCBicmVhZGNydW1icyBhcmUgcmVjb3JkZWQgaW4gdGltZS5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q3VycmVudEh1YigpLndpdGhTY29wZShmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNldENvbnRleHQoJ3Z1ZScsIG1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEN1cnJlbnRIdWIoKS5jYXB0dXJlRXhjZXB0aW9uKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRFcnJvckhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3JIYW5kbGVyLmNhbGwoX3RoaXMuX29wdGlvbnMuVnVlLCBlcnJvciwgdm0sIGluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF90aGlzLl9vcHRpb25zLmxvZ0Vycm9ycykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucy5WdWUudXRpbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb3B0aW9ucy5WdWUudXRpbC53YXJuKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnJvciAmJiBlcnJvci50b1N0cmluZygpKSArIFwiXFxcIlwiLCB2bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIFZ1ZS5pZCA9ICdWdWUnO1xuICAgIHJldHVybiBWdWU7XG59KCkpO1xuZXhwb3J0IHsgVnVlIH07XG4vKiogR3JhYnMgYWN0aXZlIHRyYW5zYWN0aW9uIG9mZiBzY29wZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVRyYW5zYWN0aW9uKGh1Yikge1xuICAgIGlmIChodWIgJiYgaHViLmdldFNjb3BlKSB7XG4gICAgICAgIHZhciBzY29wZSA9IGh1Yi5nZXRTY29wZSgpO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5nZXRUcmFuc2FjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWUuanMubWFwIiwiZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcuL2xvZ2xldmVsJztcbmV4cG9ydCB7IFNlc3Npb25TdGF0dXMgfSBmcm9tICcuL3Nlc3Npb24nO1xuZXhwb3J0IHsgU2V2ZXJpdHkgfSBmcm9tICcuL3NldmVyaXR5JztcbmV4cG9ydCB7IFN0YXR1cyB9IGZyb20gJy4vc3RhdHVzJztcbmV4cG9ydCB7IFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2QsIH0gZnJvbSAnLi90cmFuc2FjdGlvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKiogQ29uc29sZSBsb2dnaW5nIHZlcmJvc2l0eSBmb3IgdGhlIFNESy4gKi9cbmV4cG9ydCB2YXIgTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XG4gICAgLyoqIE5vIGxvZ3Mgd2lsbCBiZSBnZW5lcmF0ZWQuICovXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICAvKiogT25seSBTREsgaW50ZXJuYWwgZXJyb3JzIHdpbGwgYmUgbG9nZ2VkLiAqL1xuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRXJyb3JcIl0gPSAxXSA9IFwiRXJyb3JcIjtcbiAgICAvKiogSW5mb3JtYXRpb24gdXNlZnVsIGZvciBkZWJ1Z2dpbmcgdGhlIFNESyB3aWxsIGJlIGxvZ2dlZC4gKi9cbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRlYnVnXCJdID0gMl0gPSBcIkRlYnVnXCI7XG4gICAgLyoqIEFsbCBTREsgYWN0aW9ucyB3aWxsIGJlIGxvZ2dlZC4gKi9cbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZlcmJvc2VcIl0gPSAzXSA9IFwiVmVyYm9zZVwiO1xufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ2xldmVsLmpzLm1hcCIsIi8qKlxuICogU2Vzc2lvbiBTdGF0dXNcbiAqL1xuZXhwb3J0IHZhciBTZXNzaW9uU3RhdHVzO1xuKGZ1bmN0aW9uIChTZXNzaW9uU3RhdHVzKSB7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2Vzc2lvblN0YXR1c1tcIk9rXCJdID0gXCJva1wiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNlc3Npb25TdGF0dXNbXCJFeGl0ZWRcIl0gPSBcImV4aXRlZFwiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNlc3Npb25TdGF0dXNbXCJDcmFzaGVkXCJdID0gXCJjcmFzaGVkXCI7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2Vzc2lvblN0YXR1c1tcIkFibm9ybWFsXCJdID0gXCJhYm5vcm1hbFwiO1xufSkoU2Vzc2lvblN0YXR1cyB8fCAoU2Vzc2lvblN0YXR1cyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXNzaW9uLmpzLm1hcCIsIi8qKiBKU0RvYyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHBvcnRcbmV4cG9ydCB2YXIgU2V2ZXJpdHk7XG4oZnVuY3Rpb24gKFNldmVyaXR5KSB7XG4gICAgLyoqIEpTRG9jICovXG4gICAgU2V2ZXJpdHlbXCJGYXRhbFwiXSA9IFwiZmF0YWxcIjtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTZXZlcml0eVtcIkVycm9yXCJdID0gXCJlcnJvclwiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiV2FybmluZ1wiXSA9IFwid2FybmluZ1wiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiTG9nXCJdID0gXCJsb2dcIjtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTZXZlcml0eVtcIkluZm9cIl0gPSBcImluZm9cIjtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTZXZlcml0eVtcIkRlYnVnXCJdID0gXCJkZWJ1Z1wiO1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFNldmVyaXR5W1wiQ3JpdGljYWxcIl0gPSBcImNyaXRpY2FsXCI7XG59KShTZXZlcml0eSB8fCAoU2V2ZXJpdHkgPSB7fSkpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2UsIGltcG9ydC9leHBvcnRcbihmdW5jdGlvbiAoU2V2ZXJpdHkpIHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0cmluZy1iYXNlZCBsZXZlbCBpbnRvIGEge0BsaW5rIFNldmVyaXR5fS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgU2V2ZXJpdHlcbiAgICAgKiBAcmV0dXJucyBTZXZlcml0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21TdHJpbmcobGV2ZWwpIHtcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgICAgICAgY2FzZSAnZGVidWcnOlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5EZWJ1ZztcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5JbmZvO1xuICAgICAgICAgICAgY2FzZSAnd2Fybic6XG4gICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V2ZXJpdHkuV2FybmluZztcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V2ZXJpdHkuRXJyb3I7XG4gICAgICAgICAgICBjYXNlICdmYXRhbCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNldmVyaXR5LkZhdGFsO1xuICAgICAgICAgICAgY2FzZSAnY3JpdGljYWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5Dcml0aWNhbDtcbiAgICAgICAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBTZXZlcml0eS5Mb2c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2V2ZXJpdHkuZnJvbVN0cmluZyA9IGZyb21TdHJpbmc7XG59KShTZXZlcml0eSB8fCAoU2V2ZXJpdHkgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2V2ZXJpdHkuanMubWFwIiwiLyoqIFRoZSBzdGF0dXMgb2YgYW4gZXZlbnQuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4cG9ydFxuZXhwb3J0IHZhciBTdGF0dXM7XG4oZnVuY3Rpb24gKFN0YXR1cykge1xuICAgIC8qKiBUaGUgc3RhdHVzIGNvdWxkIG5vdCBiZSBkZXRlcm1pbmVkLiAqL1xuICAgIFN0YXR1c1tcIlVua25vd25cIl0gPSBcInVua25vd25cIjtcbiAgICAvKiogVGhlIGV2ZW50IHdhcyBza2lwcGVkIGR1ZSB0byBjb25maWd1cmF0aW9uIG9yIGNhbGxiYWNrcy4gKi9cbiAgICBTdGF0dXNbXCJTa2lwcGVkXCJdID0gXCJza2lwcGVkXCI7XG4gICAgLyoqIFRoZSBldmVudCB3YXMgc2VudCB0byBTZW50cnkgc3VjY2Vzc2Z1bGx5LiAqL1xuICAgIFN0YXR1c1tcIlN1Y2Nlc3NcIl0gPSBcInN1Y2Nlc3NcIjtcbiAgICAvKiogVGhlIGNsaWVudCBpcyBjdXJyZW50bHkgcmF0ZSBsaW1pdGVkIGFuZCB3aWxsIHRyeSBhZ2FpbiBsYXRlci4gKi9cbiAgICBTdGF0dXNbXCJSYXRlTGltaXRcIl0gPSBcInJhdGVfbGltaXRcIjtcbiAgICAvKiogVGhlIGV2ZW50IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWQuICovXG4gICAgU3RhdHVzW1wiSW52YWxpZFwiXSA9IFwiaW52YWxpZFwiO1xuICAgIC8qKiBBIHNlcnZlci1zaWRlIGVycm9yIG9jdXJyZWQgZHVyaW5nIHN1Ym1pc3Npb24uICovXG4gICAgU3RhdHVzW1wiRmFpbGVkXCJdID0gXCJmYWlsZWRcIjtcbn0pKFN0YXR1cyB8fCAoU3RhdHVzID0ge30pKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlLCBpbXBvcnQvZXhwb3J0XG4oZnVuY3Rpb24gKFN0YXR1cykge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgSFRUUCBzdGF0dXMgY29kZSBpbnRvIGEge0BsaW5rIFN0YXR1c30uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZSBUaGUgSFRUUCByZXNwb25zZSBzdGF0dXMgY29kZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2VuZCBzdGF0dXMgb3Ige0BsaW5rIFN0YXR1cy5Vbmtub3dufS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tSHR0cENvZGUoY29kZSkge1xuICAgICAgICBpZiAoY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0YXR1cy5TdWNjZXNzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09PSA0MjkpIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXMuUmF0ZUxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID49IDQwMCAmJiBjb2RlIDwgNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzLkludmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPj0gNTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RhdHVzLkZhaWxlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RhdHVzLlVua25vd247XG4gICAgfVxuICAgIFN0YXR1cy5mcm9tSHR0cENvZGUgPSBmcm9tSHR0cENvZGU7XG59KShTdGF0dXMgfHwgKFN0YXR1cyA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0dXMuanMubWFwIiwiZXhwb3J0IHZhciBUcmFuc2FjdGlvblNhbXBsaW5nTWV0aG9kO1xuKGZ1bmN0aW9uIChUcmFuc2FjdGlvblNhbXBsaW5nTWV0aG9kKSB7XG4gICAgVHJhbnNhY3Rpb25TYW1wbGluZ01ldGhvZFtcIkV4cGxpY2l0XCJdID0gXCJleHBsaWNpdGx5X3NldFwiO1xuICAgIFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2RbXCJTYW1wbGVyXCJdID0gXCJjbGllbnRfc2FtcGxlclwiO1xuICAgIFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2RbXCJSYXRlXCJdID0gXCJjbGllbnRfcmF0ZVwiO1xuICAgIFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2RbXCJJbmhlcml0YW5jZVwiXSA9IFwiaW5oZXJpdGFuY2VcIjtcbn0pKFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2QgfHwgKFRyYW5zYWN0aW9uU2FtcGxpbmdNZXRob2QgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNhY3Rpb24uanMubWFwIiwiLyoqXG4gKiBDb25zdW1lcyB0aGUgcHJvbWlzZSBhbmQgbG9ncyB0aGUgZXJyb3Igd2hlbiBpdCByZWplY3RzLlxuICogQHBhcmFtIHByb21pc2UgQSBwcm9taXNlIHRvIGZvcmdldC5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBmdW5jdGlvbiBmb3JnZXQocHJvbWlzZSkge1xuICAgIHByb21pc2UudGhlbihudWxsLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBUT0RPOiBVc2UgYSBiZXR0ZXIgbG9nZ2luZyBtZWNoYW5pc21cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcCIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9pcyc7XG4vKipcbiAqIEdpdmVuIGEgY2hpbGQgRE9NIGVsZW1lbnQsIHJldHVybnMgYSBxdWVyeS1zZWxlY3RvciBzdGF0ZW1lbnQgZGVzY3JpYmluZyB0aGF0XG4gKiBhbmQgaXRzIGFuY2VzdG9yc1xuICogZS5nLiBbSFRNTEVsZW1lbnRdID0+IGJvZHkgPiBkaXYgPiBpbnB1dCNmb28uYnRuW25hbWU9YmF6XVxuICogQHJldHVybnMgZ2VuZXJhdGVkIERPTSBwYXRoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodG1sVHJlZUFzU3RyaW5nKGVsZW0pIHtcbiAgICAvLyB0cnkvY2F0Y2ggYm90aDpcbiAgICAvLyAtIGFjY2Vzc2luZyBldmVudC50YXJnZXQgKHNlZSBnZXRzZW50cnkvcmF2ZW4tanMjODM4LCAjNzY4KVxuICAgIC8vIC0gYGh0bWxUcmVlQXNTdHJpbmdgIGJlY2F1c2UgaXQncyBjb21wbGV4LCBhbmQganVzdCBhY2Nlc3NpbmcgdGhlIERPTSBpbmNvcnJlY3RseVxuICAgIC8vIC0gY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBpbiBzb21lIGNpcmN1bXN0YW5jZXMuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGN1cnJlbnRFbGVtID0gZWxlbTtcbiAgICAgICAgdmFyIE1BWF9UUkFWRVJTRV9IRUlHSFQgPSA1O1xuICAgICAgICB2YXIgTUFYX09VVFBVVF9MRU4gPSA4MDtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICAgIHZhciBzZXBhcmF0b3IgPSAnID4gJztcbiAgICAgICAgdmFyIHNlcExlbmd0aCA9IHNlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgIHZhciBuZXh0U3RyID0gdm9pZCAwO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtICYmIGhlaWdodCsrIDwgTUFYX1RSQVZFUlNFX0hFSUdIVCkge1xuICAgICAgICAgICAgbmV4dFN0ciA9IF9odG1sRWxlbWVudEFzU3RyaW5nKGN1cnJlbnRFbGVtKTtcbiAgICAgICAgICAgIC8vIGJhaWwgb3V0IGlmXG4gICAgICAgICAgICAvLyAtIG5leHRTdHIgaXMgdGhlICdodG1sJyBlbGVtZW50XG4gICAgICAgICAgICAvLyAtIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyB0aGF0IHdvdWxkIGJlIGNyZWF0ZWQgZXhjZWVkcyBNQVhfT1VUUFVUX0xFTlxuICAgICAgICAgICAgLy8gICAoaWdub3JlIHRoaXMgbGltaXQgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBpdGVyYXRpb24pXG4gICAgICAgICAgICBpZiAobmV4dFN0ciA9PT0gJ2h0bWwnIHx8IChoZWlnaHQgPiAxICYmIGxlbiArIG91dC5sZW5ndGggKiBzZXBMZW5ndGggKyBuZXh0U3RyLmxlbmd0aCA+PSBNQVhfT1VUUFVUX0xFTikpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dC5wdXNoKG5leHRTdHIpO1xuICAgICAgICAgICAgbGVuICs9IG5leHRTdHIubGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudEVsZW0gPSBjdXJyZW50RWxlbS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQucmV2ZXJzZSgpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9vTykge1xuICAgICAgICByZXR1cm4gJzx1bmtub3duPic7XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgc2ltcGxlLCBxdWVyeS1zZWxlY3RvciByZXByZXNlbnRhdGlvbiBvZiBhIERPTSBlbGVtZW50XG4gKiBlLmcuIFtIVE1MRWxlbWVudF0gPT4gaW5wdXQjZm9vLmJ0bltuYW1lPWJhel1cbiAqIEByZXR1cm5zIGdlbmVyYXRlZCBET00gcGF0aFxuICovXG5mdW5jdGlvbiBfaHRtbEVsZW1lbnRBc1N0cmluZyhlbCkge1xuICAgIHZhciBlbGVtID0gZWw7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIHZhciBjbGFzc05hbWU7XG4gICAgdmFyIGNsYXNzZXM7XG4gICAgdmFyIGtleTtcbiAgICB2YXIgYXR0cjtcbiAgICB2YXIgaTtcbiAgICBpZiAoIWVsZW0gfHwgIWVsZW0udGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIG91dC5wdXNoKGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoZWxlbS5pZCkge1xuICAgICAgICBvdXQucHVzaChcIiNcIiArIGVsZW0uaWQpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWU7XG4gICAgaWYgKGNsYXNzTmFtZSAmJiBpc1N0cmluZyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFwiLlwiICsgY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGFsbG93ZWRBdHRycyA9IFsndHlwZScsICduYW1lJywgJ3RpdGxlJywgJ2FsdCddO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhbGxvd2VkQXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga2V5ID0gYWxsb3dlZEF0dHJzW2ldO1xuICAgICAgICBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICAgIG91dC5wdXNoKFwiW1wiICsga2V5ICsgXCI9XFxcIlwiICsgYXR0ciArIFwiXFxcIl1cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXIuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTZW50cnlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHBhcnNlIGEgRHNuLiAqL1xudmFyIERTTl9SRUdFWCA9IC9eKD86KFxcdyspOilcXC9cXC8oPzooXFx3KykoPzo6KFxcdyspKT9AKShbXFx3Li1dKykoPzo6KFxcZCspKT9cXC8oLispLztcbi8qKiBFcnJvciBtZXNzYWdlICovXG52YXIgRVJST1JfTUVTU0FHRSA9ICdJbnZhbGlkIERzbic7XG4vKiogVGhlIFNlbnRyeSBEc24sIGlkZW50aWZ5aW5nIGEgU2VudHJ5IGluc3RhbmNlIGFuZCBwcm9qZWN0LiAqL1xudmFyIERzbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQ3JlYXRlcyBhIG5ldyBEc24gY29tcG9uZW50ICovXG4gICAgZnVuY3Rpb24gRHNuKGZyb20pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5fZnJvbVN0cmluZyhmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Zyb21Db21wb25lbnRzKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERzbi5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgd2lsbCByZW5kZXIgdGhlIHB1YmxpYyByZXByZXNlbnRhdGlvbiB3aXRob3V0IHRoZSBwYXNzd29yZFxuICAgICAqIGNvbXBvbmVudC4gVG8gZ2V0IHRoZSBkZXByZWNhdGVkIHByaXZhdGUgcmVwcmVzZW50YXRpb24sIHNldCBgd2l0aFBhc3N3b3JkYFxuICAgICAqIHRvIHRydWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2l0aFBhc3N3b3JkIFdoZW4gc2V0IHRvIHRydWUsIHRoZSBwYXNzd29yZCB3aWxsIGJlIGluY2x1ZGVkLlxuICAgICAqL1xuICAgIERzbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAod2l0aFBhc3N3b3JkKSB7XG4gICAgICAgIGlmICh3aXRoUGFzc3dvcmQgPT09IHZvaWQgMCkgeyB3aXRoUGFzc3dvcmQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBob3N0ID0gX2EuaG9zdCwgcGF0aCA9IF9hLnBhdGgsIHBhc3MgPSBfYS5wYXNzLCBwb3J0ID0gX2EucG9ydCwgcHJvamVjdElkID0gX2EucHJvamVjdElkLCBwcm90b2NvbCA9IF9hLnByb3RvY29sLCBwdWJsaWNLZXkgPSBfYS5wdWJsaWNLZXk7XG4gICAgICAgIHJldHVybiAocHJvdG9jb2wgKyBcIjovL1wiICsgcHVibGljS2V5ICsgKHdpdGhQYXNzd29yZCAmJiBwYXNzID8gXCI6XCIgKyBwYXNzIDogJycpICtcbiAgICAgICAgICAgIChcIkBcIiArIGhvc3QgKyAocG9ydCA/IFwiOlwiICsgcG9ydCA6ICcnKSArIFwiL1wiICsgKHBhdGggPyBwYXRoICsgXCIvXCIgOiBwYXRoKSArIHByb2plY3RJZCkpO1xuICAgIH07XG4gICAgLyoqIFBhcnNlcyBhIHN0cmluZyBpbnRvIHRoaXMgRHNuLiAqL1xuICAgIERzbi5wcm90b3R5cGUuX2Zyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IERTTl9SRUdFWC5leGVjKHN0cik7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW50cnlFcnJvcihFUlJPUl9NRVNTQUdFKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBfX3JlYWQobWF0Y2guc2xpY2UoMSksIDYpLCBwcm90b2NvbCA9IF9hWzBdLCBwdWJsaWNLZXkgPSBfYVsxXSwgX2IgPSBfYVsyXSwgcGFzcyA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iLCBob3N0ID0gX2FbM10sIF9jID0gX2FbNF0sIHBvcnQgPSBfYyA9PT0gdm9pZCAwID8gJycgOiBfYywgbGFzdFBhdGggPSBfYVs1XTtcbiAgICAgICAgdmFyIHBhdGggPSAnJztcbiAgICAgICAgdmFyIHByb2plY3RJZCA9IGxhc3RQYXRoO1xuICAgICAgICB2YXIgc3BsaXQgPSBwcm9qZWN0SWQuc3BsaXQoJy8nKTtcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHBhdGggPSBzcGxpdC5zbGljZSgwLCAtMSkuam9pbignLycpO1xuICAgICAgICAgICAgcHJvamVjdElkID0gc3BsaXQucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2plY3RJZCkge1xuICAgICAgICAgICAgdmFyIHByb2plY3RNYXRjaCA9IHByb2plY3RJZC5tYXRjaCgvXlxcZCsvKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SWQgPSBwcm9qZWN0TWF0Y2hbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZnJvbUNvbXBvbmVudHMoeyBob3N0OiBob3N0LCBwYXNzOiBwYXNzLCBwYXRoOiBwYXRoLCBwcm9qZWN0SWQ6IHByb2plY3RJZCwgcG9ydDogcG9ydCwgcHJvdG9jb2w6IHByb3RvY29sLCBwdWJsaWNLZXk6IHB1YmxpY0tleSB9KTtcbiAgICB9O1xuICAgIC8qKiBNYXBzIERzbiBjb21wb25lbnRzIGludG8gdGhpcyBpbnN0YW5jZS4gKi9cbiAgICBEc24ucHJvdG90eXBlLl9mcm9tQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wb25lbnRzKSB7XG4gICAgICAgIC8vIFRPRE8gdGhpcyBpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIGFuZCBjYW4gYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uXG4gICAgICAgIGlmICgndXNlcicgaW4gY29tcG9uZW50cyAmJiAhKCdwdWJsaWNLZXknIGluIGNvbXBvbmVudHMpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1YmxpY0tleSA9IGNvbXBvbmVudHMudXNlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZXIgPSBjb21wb25lbnRzLnB1YmxpY0tleSB8fCAnJztcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IGNvbXBvbmVudHMucHJvdG9jb2w7XG4gICAgICAgIHRoaXMucHVibGljS2V5ID0gY29tcG9uZW50cy5wdWJsaWNLZXkgfHwgJyc7XG4gICAgICAgIHRoaXMucGFzcyA9IGNvbXBvbmVudHMucGFzcyB8fCAnJztcbiAgICAgICAgdGhpcy5ob3N0ID0gY29tcG9uZW50cy5ob3N0O1xuICAgICAgICB0aGlzLnBvcnQgPSBjb21wb25lbnRzLnBvcnQgfHwgJyc7XG4gICAgICAgIHRoaXMucGF0aCA9IGNvbXBvbmVudHMucGF0aCB8fCAnJztcbiAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSBjb21wb25lbnRzLnByb2plY3RJZDtcbiAgICB9O1xuICAgIC8qKiBWYWxpZGF0ZXMgdGhpcyBEc24gYW5kIHRocm93cyBvbiBlcnJvci4gKi9cbiAgICBEc24ucHJvdG90eXBlLl92YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgWydwcm90b2NvbCcsICdwdWJsaWNLZXknLCAnaG9zdCcsICdwcm9qZWN0SWQnXS5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXNbY29tcG9uZW50XSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTZW50cnlFcnJvcihFUlJPUl9NRVNTQUdFICsgXCI6IFwiICsgY29tcG9uZW50ICsgXCIgbWlzc2luZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdGhpcy5wcm9qZWN0SWQubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VudHJ5RXJyb3IoRVJST1JfTUVTU0FHRSArIFwiOiBJbnZhbGlkIHByb2plY3RJZCBcIiArIHRoaXMucHJvamVjdElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm90b2NvbCAhPT0gJ2h0dHAnICYmIHRoaXMucHJvdG9jb2wgIT09ICdodHRwcycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW50cnlFcnJvcihFUlJPUl9NRVNTQUdFICsgXCI6IEludmFsaWQgcHJvdG9jb2wgXCIgKyB0aGlzLnByb3RvY29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3J0ICYmIGlzTmFOKHBhcnNlSW50KHRoaXMucG9ydCwgMTApKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbnRyeUVycm9yKEVSUk9SX01FU1NBR0UgKyBcIjogSW52YWxpZCBwb3J0IFwiICsgdGhpcy5wb3J0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERzbjtcbn0oKSk7XG5leHBvcnQgeyBEc24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRzbi5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHNldFByb3RvdHlwZU9mIH0gZnJvbSAnLi9wb2x5ZmlsbCc7XG4vKiogQW4gZXJyb3IgZW1pdHRlZCBieSBTZW50cnkgU0RLcyBhbmQgcmVsYXRlZCB1dGlsaXRpZXMuICovXG52YXIgU2VudHJ5RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbnRyeUVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbnRyeUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgX3RoaXMubmFtZSA9IF9uZXdUYXJnZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFNlbnRyeUVycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IHsgU2VudHJ5RXJyb3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYXN5bmMnO1xuZXhwb3J0ICogZnJvbSAnLi9icm93c2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZHNuJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3InO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0cnVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaXMnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tZW1vJztcbmV4cG9ydCAqIGZyb20gJy4vbWlzYyc7XG5leHBvcnQgKiBmcm9tICcuL25vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXRoJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvbWlzZWJ1ZmZlcic7XG5leHBvcnQgKiBmcm9tICcuL3N0YWNrdHJhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9zdXBwb3J0cyc7XG5leHBvcnQgKiBmcm9tICcuL3N5bmNwcm9taXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdGltZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzSW5zdGFuY2VPZiwgaXNTdHJpbmcgfSBmcm9tICcuL2lzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG5pbXBvcnQgeyBmaWxsIH0gZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IHsgZ2V0RnVuY3Rpb25OYW1lIH0gZnJvbSAnLi9zdGFja3RyYWNlJztcbmltcG9ydCB7IHN1cHBvcnRzSGlzdG9yeSwgc3VwcG9ydHNOYXRpdmVGZXRjaCB9IGZyb20gJy4vc3VwcG9ydHMnO1xudmFyIGdsb2JhbCA9IGdldEdsb2JhbE9iamVjdCgpO1xuLyoqXG4gKiBJbnN0cnVtZW50IG5hdGl2ZSBBUElzIHRvIGNhbGwgaGFuZGxlcnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgYnJlYWRjcnVtYnMsIEFQTSBzcGFucyBldGMuXG4gKiAgLSBDb25zb2xlIEFQSVxuICogIC0gRmV0Y2ggQVBJXG4gKiAgLSBYSFIgQVBJXG4gKiAgLSBIaXN0b3J5IEFQSVxuICogIC0gRE9NIEFQSSAoY2xpY2svdHlwaW5nKVxuICogIC0gRXJyb3IgQVBJXG4gKiAgLSBVbmhhbmRsZWRSZWplY3Rpb24gQVBJXG4gKi9cbnZhciBoYW5kbGVycyA9IHt9O1xudmFyIGluc3RydW1lbnRlZCA9IHt9O1xuLyoqIEluc3RydW1lbnRzIGdpdmVuIEFQSSAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudCh0eXBlKSB7XG4gICAgaWYgKGluc3RydW1lbnRlZFt0eXBlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGluc3RydW1lbnRlZFt0eXBlXSA9IHRydWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvbnNvbGUnOlxuICAgICAgICAgICAgaW5zdHJ1bWVudENvbnNvbGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb20nOlxuICAgICAgICAgICAgaW5zdHJ1bWVudERPTSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3hocic6XG4gICAgICAgICAgICBpbnN0cnVtZW50WEhSKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmV0Y2gnOlxuICAgICAgICAgICAgaW5zdHJ1bWVudEZldGNoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICAgICAgICBpbnN0cnVtZW50SGlzdG9yeSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIGluc3RydW1lbnRFcnJvcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VuaGFuZGxlZHJlamVjdGlvbic6XG4gICAgICAgICAgICBpbnN0cnVtZW50VW5oYW5kbGVkUmVqZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCd1bmtub3duIGluc3RydW1lbnRhdGlvbiB0eXBlOicsIHR5cGUpO1xuICAgIH1cbn1cbi8qKlxuICogQWRkIGhhbmRsZXIgdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIGdpdmVuIHR5cGUgb2YgaW5zdHJ1bWVudGF0aW9uIHRyaWdnZXJzLlxuICogVXNlIGF0IHlvdXIgb3duIHJpc2ssIHRoaXMgbWlnaHQgYnJlYWsgd2l0aG91dCBjaGFuZ2Vsb2cgbm90aWNlLCBvbmx5IHVzZWQgaW50ZXJuYWxseS5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEluc3RydW1lbnRhdGlvbkhhbmRsZXIoaGFuZGxlcikge1xuICAgIGlmICghaGFuZGxlciB8fCB0eXBlb2YgaGFuZGxlci50eXBlICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgaGFuZGxlci5jYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZXJzW2hhbmRsZXIudHlwZV0gPSBoYW5kbGVyc1toYW5kbGVyLnR5cGVdIHx8IFtdO1xuICAgIGhhbmRsZXJzW2hhbmRsZXIudHlwZV0ucHVzaChoYW5kbGVyLmNhbGxiYWNrKTtcbiAgICBpbnN0cnVtZW50KGhhbmRsZXIudHlwZSk7XG59XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVycyh0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGVfMSwgX2E7XG4gICAgaWYgKCF0eXBlIHx8ICFoYW5kbGVyc1t0eXBlXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoaGFuZGxlcnNbdHlwZV0gfHwgW10pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJFcnJvciB3aGlsZSB0cmlnZ2VyaW5nIGluc3RydW1lbnRhdGlvbiBoYW5kbGVyLlxcblR5cGU6IFwiICsgdHlwZSArIFwiXFxuTmFtZTogXCIgKyBnZXRGdW5jdGlvbk5hbWUoaGFuZGxlcikgKyBcIlxcbkVycm9yOiBcIiArIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudENvbnNvbGUoKSB7XG4gICAgaWYgKCEoJ2NvbnNvbGUnIGluIGdsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBbJ2RlYnVnJywgJ2luZm8nLCAnd2FybicsICdlcnJvcicsICdsb2cnLCAnYXNzZXJ0J10uZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgaWYgKCEobGV2ZWwgaW4gZ2xvYmFsLmNvbnNvbGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlsbChnbG9iYWwuY29uc29sZSwgbGV2ZWwsIGZ1bmN0aW9uIChvcmlnaW5hbENvbnNvbGVMZXZlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdjb25zb2xlJywgeyBhcmdzOiBhcmdzLCBsZXZlbDogbGV2ZWwgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBmYWlscyBmb3Igc29tZSBicm93c2Vycy4gOihcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxDb25zb2xlTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwob3JpZ2luYWxDb25zb2xlTGV2ZWwsIGdsb2JhbC5jb25zb2xlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudEZldGNoKCkge1xuICAgIGlmICghc3VwcG9ydHNOYXRpdmVGZXRjaCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlsbChnbG9iYWwsICdmZXRjaCcsIGZ1bmN0aW9uIChvcmlnaW5hbEZldGNoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFuZGxlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgICAgICBmZXRjaERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBnZXRGZXRjaE1ldGhvZChhcmdzKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBnZXRGZXRjaFVybChhcmdzKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyaWdnZXJIYW5kbGVycygnZmV0Y2gnLCBfX2Fzc2lnbih7fSwgaGFuZGxlckRhdGEpKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZldGNoLmFwcGx5KGdsb2JhbCwgYXJncykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VySGFuZGxlcnMoJ2ZldGNoJywgX19hc3NpZ24oX19hc3NpZ24oe30sIGhhbmRsZXJEYXRhKSwgeyBlbmRUaW1lc3RhbXA6IERhdGUubm93KCksIHJlc3BvbnNlOiByZXNwb25zZSB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdmZXRjaCcsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBoYW5kbGVyRGF0YSksIHsgZW5kVGltZXN0YW1wOiBEYXRlLm5vdygpLCBlcnJvcjogZXJyb3IgfSkpO1xuICAgICAgICAgICAgICAgIC8vIE5PVEU6IElmIHlvdSBhcmUgYSBTZW50cnkgdXNlciwgYW5kIHlvdSBhcmUgc2VlaW5nIHRoaXMgc3RhY2sgZnJhbWUsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgaXQgbWVhbnMgdGhlIHNlbnRyeS5qYXZhc2NyaXB0IFNESyBjYXVnaHQgYW4gZXJyb3IgaW52b2tpbmcgeW91ciBhcHBsaWNhdGlvbiBjb2RlLlxuICAgICAgICAgICAgICAgIC8vICAgICAgIFRoaXMgaXMgZXhwZWN0ZWQgYmVoYXZpb3IgYW5kIE5PVCBpbmRpY2F0aXZlIG9mIGEgYnVnIHdpdGggc2VudHJ5LmphdmFzY3JpcHQuXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuLyoqIEV4dHJhY3QgYG1ldGhvZGAgZnJvbSBmZXRjaCBjYWxsIGFyZ3VtZW50cyAqL1xuZnVuY3Rpb24gZ2V0RmV0Y2hNZXRob2QoZmV0Y2hBcmdzKSB7XG4gICAgaWYgKGZldGNoQXJncyA9PT0gdm9pZCAwKSB7IGZldGNoQXJncyA9IFtdOyB9XG4gICAgaWYgKCdSZXF1ZXN0JyBpbiBnbG9iYWwgJiYgaXNJbnN0YW5jZU9mKGZldGNoQXJnc1swXSwgUmVxdWVzdCkgJiYgZmV0Y2hBcmdzWzBdLm1ldGhvZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGZldGNoQXJnc1swXS5tZXRob2QpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChmZXRjaEFyZ3NbMV0gJiYgZmV0Y2hBcmdzWzFdLm1ldGhvZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGZldGNoQXJnc1sxXS5tZXRob2QpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiAnR0VUJztcbn1cbi8qKiBFeHRyYWN0IGB1cmxgIGZyb20gZmV0Y2ggY2FsbCBhcmd1bWVudHMgKi9cbmZ1bmN0aW9uIGdldEZldGNoVXJsKGZldGNoQXJncykge1xuICAgIGlmIChmZXRjaEFyZ3MgPT09IHZvaWQgMCkgeyBmZXRjaEFyZ3MgPSBbXTsgfVxuICAgIGlmICh0eXBlb2YgZmV0Y2hBcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcmdzWzBdO1xuICAgIH1cbiAgICBpZiAoJ1JlcXVlc3QnIGluIGdsb2JhbCAmJiBpc0luc3RhbmNlT2YoZmV0Y2hBcmdzWzBdLCBSZXF1ZXN0KSkge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcmdzWzBdLnVybDtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhmZXRjaEFyZ3NbMF0pO1xufVxuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudFhIUigpIHtcbiAgICBpZiAoISgnWE1MSHR0cFJlcXVlc3QnIGluIGdsb2JhbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBQb29yIG1hbidzIGltcGxlbWVudGF0aW9uIG9mIEVTNiBgTWFwYCwgdHJhY2tpbmcgYW5kIGtlZXBpbmcgaW4gc3luYyBrZXkgYW5kIHZhbHVlIHNlcGFyYXRlbHkuXG4gICAgdmFyIHJlcXVlc3RLZXlzID0gW107XG4gICAgdmFyIHJlcXVlc3RWYWx1ZXMgPSBbXTtcbiAgICB2YXIgeGhycHJvdG8gPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgZmlsbCh4aHJwcm90bywgJ29wZW4nLCBmdW5jdGlvbiAob3JpZ2luYWxPcGVuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICAgICAgICAgIHZhciB4aHIgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHVybCA9IGFyZ3NbMV07XG4gICAgICAgICAgICB4aHIuX19zZW50cnlfeGhyX18gPSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICAgICAgICAgIG1ldGhvZDogaXNTdHJpbmcoYXJnc1swXSkgPyBhcmdzWzBdLnRvVXBwZXJDYXNlKCkgOiBhcmdzWzBdLFxuICAgICAgICAgICAgICAgIHVybDogYXJnc1sxXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBpZiBTZW50cnkga2V5IGFwcGVhcnMgaW4gVVJMLCBkb24ndCBjYXB0dXJlIGl0IGFzIGEgcmVxdWVzdFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHVybCkgJiYgeGhyLl9fc2VudHJ5X3hocl9fLm1ldGhvZCA9PT0gJ1BPU1QnICYmIHVybC5tYXRjaCgvc2VudHJ5X2tleS8pKSB7XG4gICAgICAgICAgICAgICAgeGhyLl9fc2VudHJ5X293bl9yZXF1ZXN0X18gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9ucmVhZHlzdGF0ZWNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b3VjaGluZyBzdGF0dXNDb2RlIGluIHNvbWUgcGxhdGZvcm1zIHRocm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLl9fc2VudHJ5X3hocl9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9fc2VudHJ5X3hocl9fLnN0YXR1c19jb2RlID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogZG8gbm90aGluZyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdFBvcyA9IHJlcXVlc3RLZXlzLmluZGV4T2YoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0UG9zICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0byBwb3AgYm90aCBrZXkgYW5kIHZhbHVlIHRvIGtlZXAgaXQgaW4gc3luYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0S2V5cy5zcGxpY2UocmVxdWVzdFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3NfMSA9IHJlcXVlc3RWYWx1ZXMuc3BsaWNlKHJlcXVlc3RQb3MpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuX19zZW50cnlfeGhyX18gJiYgYXJnc18xWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9fc2VudHJ5X3hocl9fLmJvZHkgPSBhcmdzXzFbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBkbyBub3RoaW5nICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCd4aHInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHI6IHhocixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICgnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiB4aHIgJiYgdHlwZW9mIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBmaWxsKHhociwgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWR5U3RhdGVBcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbnJlYWR5c3RhdGVjaGFuZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkoeGhyLCByZWFkeVN0YXRlQXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIG9ucmVhZHlzdGF0ZWNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsT3Blbi5hcHBseSh4aHIsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGZpbGwoeGhycHJvdG8sICdzZW5kJywgZnVuY3Rpb24gKG9yaWdpbmFsU2VuZCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdEtleXMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHJlcXVlc3RWYWx1ZXMucHVzaChhcmdzKTtcbiAgICAgICAgICAgIHRyaWdnZXJIYW5kbGVycygneGhyJywge1xuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgeGhyOiB0aGlzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxTZW5kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxudmFyIGxhc3RIcmVmO1xuLyoqIEpTRG9jICovXG5mdW5jdGlvbiBpbnN0cnVtZW50SGlzdG9yeSgpIHtcbiAgICBpZiAoIXN1cHBvcnRzSGlzdG9yeSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9sZE9uUG9wU3RhdGUgPSBnbG9iYWwub25wb3BzdGF0ZTtcbiAgICBnbG9iYWwub25wb3BzdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG8gPSBnbG9iYWwubG9jYXRpb24uaHJlZjtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBVUkwgc3RhdGUsIGFzIHdlIGFsd2F5cyByZWNlaXZlIG9ubHkgdGhlIHVwZGF0ZWQgc3RhdGVcbiAgICAgICAgdmFyIGZyb20gPSBsYXN0SHJlZjtcbiAgICAgICAgbGFzdEhyZWYgPSB0bztcbiAgICAgICAgdHJpZ2dlckhhbmRsZXJzKCdoaXN0b3J5Jywge1xuICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvbGRPblBvcFN0YXRlKSB7XG4gICAgICAgICAgICAvLyBBcHBhcmVudGx5IHRoaXMgY2FuIHRocm93IGluIEZpcmVmb3ggd2hlbiBpbmNvcnJlY3RseSBpbXBsZW1lbnRlZCBwbHVnaW4gaXMgaW5zdGFsbGVkLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdC9pc3N1ZXMvMzM0NFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J1Z3NuYWcvYnVnc25hZy1qcy9pc3N1ZXMvNDY5XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRPblBvcFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAgICAgICAgIC8vIG5vLWVtcHR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBAaGlkZGVuICovXG4gICAgZnVuY3Rpb24gaGlzdG9yeVJlcGxhY2VtZW50RnVuY3Rpb24ob3JpZ2luYWxIaXN0b3J5RnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1cmwgPSBhcmdzLmxlbmd0aCA+IDIgPyBhcmdzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIC8vIGNvZXJjZSB0byBzdHJpbmcgKHRoaXMgaXMgd2hhdCBwdXNoU3RhdGUgZG9lcylcbiAgICAgICAgICAgICAgICB2YXIgZnJvbSA9IGxhc3RIcmVmO1xuICAgICAgICAgICAgICAgIHZhciB0byA9IFN0cmluZyh1cmwpO1xuICAgICAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgVVJMIHN0YXRlLCBhcyB3ZSBhbHdheXMgcmVjZWl2ZSBvbmx5IHRoZSB1cGRhdGVkIHN0YXRlXG4gICAgICAgICAgICAgICAgbGFzdEhyZWYgPSB0bztcbiAgICAgICAgICAgICAgICB0cmlnZ2VySGFuZGxlcnMoJ2hpc3RvcnknLCB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEhpc3RvcnlGdW5jdGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZmlsbChnbG9iYWwuaGlzdG9yeSwgJ3B1c2hTdGF0ZScsIGhpc3RvcnlSZXBsYWNlbWVudEZ1bmN0aW9uKTtcbiAgICBmaWxsKGdsb2JhbC5oaXN0b3J5LCAncmVwbGFjZVN0YXRlJywgaGlzdG9yeVJlcGxhY2VtZW50RnVuY3Rpb24pO1xufVxudmFyIGRlYm91bmNlRHVyYXRpb24gPSAxMDAwO1xudmFyIGRlYm91bmNlVGltZXJJRDtcbnZhciBsYXN0Q2FwdHVyZWRFdmVudDtcbi8qKlxuICogRGVjaWRlIHdoZXRoZXIgdGhlIGN1cnJlbnQgZXZlbnQgc2hvdWxkIGZpbmlzaCB0aGUgZGVib3VuY2Ugb2YgcHJldmlvdXNseSBjYXB0dXJlZCBvbmUuXG4gKiBAcGFyYW0gcHJldmlvdXMgcHJldmlvdXNseSBjYXB0dXJlZCBldmVudFxuICogQHBhcmFtIGN1cnJlbnQgZXZlbnQgdG8gYmUgY2FwdHVyZWRcbiAqL1xuZnVuY3Rpb24gc2hvdWxkU2hvcnRjaXJjdWl0UHJldmlvdXNEZWJvdW5jZShwcmV2aW91cywgY3VycmVudCkge1xuICAgIC8vIElmIHRoZXJlIHdhcyBubyBwcmV2aW91cyBldmVudCwgaXQgc2hvdWxkIGFsd2F5cyBiZSBzd2FwcGVkIGZvciB0aGUgbmV3IG9uZS5cbiAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiBib3RoIGV2ZW50cyBoYXZlIGRpZmZlcmVudCB0eXBlLCB0aGVuIHVzZXIgZGVmaW5pdGVseSBwZXJmb3JtZWQgdHdvIHNlcGFyYXRlIGFjdGlvbnMuIGUuZy4gY2xpY2sgKyBrZXlwcmVzcy5cbiAgICBpZiAocHJldmlvdXMudHlwZSAhPT0gY3VycmVudC50eXBlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyBJZiBib3RoIGV2ZW50cyBoYXZlIHRoZSBzYW1lIHR5cGUsIGl0J3Mgc3RpbGwgcG9zc2libGUgdGhhdCBhY3Rpb25zIHdlcmUgcGVyZm9ybWVkIG9uIGRpZmZlcmVudCB0YXJnZXRzLlxuICAgICAgICAvLyBlLmcuIDIgY2xpY2tzIG9uIGRpZmZlcmVudCBidXR0b25zLlxuICAgICAgICBpZiAocHJldmlvdXMudGFyZ2V0ICE9PSBjdXJyZW50LnRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8ganVzdCBhY2Nlc3NpbmcgYHRhcmdldGAgcHJvcGVydHkgY2FuIHRocm93IGFuIGV4Y2VwdGlvbiBpbiBzb21lIHJhcmUgY2lyY3Vtc3RhbmNlc1xuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzgzOFxuICAgIH1cbiAgICAvLyBJZiBib3RoIGV2ZW50cyBoYXZlIHRoZSBzYW1lIHR5cGUgX2FuZF8gc2FtZSBgdGFyZ2V0YCAoYW4gZWxlbWVudCB3aGljaCB0cmlnZ2VyZWQgYW4gZXZlbnQsIF9ub3QgbmVjZXNzYXJpbHlfXG4gICAgLy8gdG8gd2hpY2ggYW4gZXZlbnQgbGlzdGVuZXIgd2FzIGF0dGFjaGVkKSwgd2UgdHJlYXQgdGhlbSBhcyB0aGUgc2FtZSBhY3Rpb24sIGFzIHdlIHdhbnQgdG8gY2FwdHVyZVxuICAgIC8vIG9ubHkgb25lIGJyZWFkY3J1bWIuIGUuZy4gbXVsdGlwbGUgY2xpY2tzIG9uIHRoZSBzYW1lIGJ1dHRvbiwgb3IgdHlwaW5nIGluc2lkZSBhIHVzZXIgaW5wdXQgYm94LlxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogRGVjaWRlIHdoZXRoZXIgYW4gZXZlbnQgc2hvdWxkIGJlIGNhcHR1cmVkLlxuICogQHBhcmFtIGV2ZW50IGV2ZW50IHRvIGJlIGNhcHR1cmVkXG4gKi9cbmZ1bmN0aW9uIHNob3VsZFNraXBET01FdmVudChldmVudCkge1xuICAgIC8vIFdlIGFyZSBvbmx5IGludGVyZXN0ZWQgaW4gZmlsdGVyaW5nIGBrZXlwcmVzc2AgZXZlbnRzIGZvciBub3cuXG4gICAgaWYgKGV2ZW50LnR5cGUgIT09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE9ubHkgY29uc2lkZXIga2V5cHJlc3MgZXZlbnRzIG9uIGFjdHVhbCBpbnB1dCBlbGVtZW50cy4gVGhpcyB3aWxsIGRpc3JlZ2FyZCBrZXlwcmVzc2VzIHRhcmdldGluZyBib2R5XG4gICAgICAgIC8vIGUuZy50YWJiaW5nIHRocm91Z2ggZWxlbWVudHMsIGhvdGtleXMsIGV0Yy5cbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IHRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGp1c3QgYWNjZXNzaW5nIGB0YXJnZXRgIHByb3BlcnR5IGNhbiB0aHJvdyBhbiBleGNlcHRpb24gaW4gc29tZSByYXJlIGNpcmN1bXN0YW5jZXNcbiAgICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS1qYXZhc2NyaXB0L2lzc3Vlcy84MzhcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFdyYXBzIGFkZEV2ZW50TGlzdGVuZXIgdG8gY2FwdHVyZSBVSSBicmVhZGNydW1ic1xuICogQHBhcmFtIGhhbmRsZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHRyaWdnZXJlZFxuICogQHBhcmFtIGdsb2JhbExpc3RlbmVyIGluZGljYXRlcyB3aGV0aGVyIGV2ZW50IHdhcyBjYXB0dXJlZCBieSB0aGUgZ2xvYmFsIGV2ZW50IGxpc3RlbmVyXG4gKiBAcmV0dXJucyB3cmFwcGVkIGJyZWFkY3J1bWIgZXZlbnRzIGhhbmRsZXJcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24gbWFrZURPTUV2ZW50SGFuZGxlcihoYW5kbGVyLCBnbG9iYWxMaXN0ZW5lcikge1xuICAgIGlmIChnbG9iYWxMaXN0ZW5lciA9PT0gdm9pZCAwKSB7IGdsb2JhbExpc3RlbmVyID0gZmFsc2U7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhpcyBoYW5kbGVyIG1pZ2h0IHRyaWdnZXIgbXVsdGlwbGUgdGltZXMgZm9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGV2ZW50IChlLmcuIGV2ZW50IHByb3BhZ2F0aW9uIHRocm91Z2ggbm9kZSBhbmNlc3RvcnMpLlxuICAgICAgICAvLyBJZ25vcmUgaWYgd2UndmUgYWxyZWFkeSBjYXB0dXJlZCB0aGF0IGV2ZW50LlxuICAgICAgICBpZiAoIWV2ZW50IHx8IGxhc3RDYXB0dXJlZEV2ZW50ID09PSBldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIHNraXAgX3NvbWVfIGV2ZW50cy5cbiAgICAgICAgaWYgKHNob3VsZFNraXBET01FdmVudChldmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IGV2ZW50LnR5cGUgPT09ICdrZXlwcmVzcycgPyAnaW5wdXQnIDogZXZlbnQudHlwZTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gZGVib3VuY2UgdGltZXIsIGl0IG1lYW5zIHRoYXQgd2UgY2FuIHNhZmVseSBjYXB0dXJlIHRoZSBuZXcgZXZlbnQgYW5kIHN0b3JlIGl0IGZvciBmdXR1cmUgY29tcGFyaXNvbnMuXG4gICAgICAgIGlmIChkZWJvdW5jZVRpbWVySUQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiBnbG9iYWxMaXN0ZW5lcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGFzdENhcHR1cmVkRXZlbnQgPSBldmVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGRlYm91bmNlIGF3YWl0aW5nLCBzZWUgaWYgdGhlIG5ldyBldmVudCBpcyBkaWZmZXJlbnQgZW5vdWdoIHRvIHRyZWF0IGl0IGFzIGEgdW5pcXVlIG9uZS5cbiAgICAgICAgLy8gSWYgdGhhdCdzIHRoZSBjYXNlLCBlbWl0IHRoZSBwcmV2aW91cyBldmVudCBhbmQgc3RvcmUgbG9jYWxseSB0aGUgbmV3bHktY2FwdHVyZWQgRE9NIGV2ZW50LlxuICAgICAgICBlbHNlIGlmIChzaG91bGRTaG9ydGNpcmN1aXRQcmV2aW91c0RlYm91bmNlKGxhc3RDYXB0dXJlZEV2ZW50LCBldmVudCkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGdsb2JhbDogZ2xvYmFsTGlzdGVuZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhc3RDYXB0dXJlZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RhcnQgYSBuZXcgZGVib3VuY2UgdGltZXIgdGhhdCB3aWxsIHByZXZlbnQgdXMgZnJvbSBjYXB0dXJpbmcgbXVsdGlwbGUgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIGdyb3VwZWQgdG9nZXRoZXIuXG4gICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVySUQpO1xuICAgICAgICBkZWJvdW5jZVRpbWVySUQgPSBnbG9iYWwuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVySUQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0sIGRlYm91bmNlRHVyYXRpb24pO1xuICAgIH07XG59XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIGluc3RydW1lbnRET00oKSB7XG4gICAgaWYgKCEoJ2RvY3VtZW50JyBpbiBnbG9iYWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTWFrZSBpdCBzbyB0aGF0IGFueSBjbGljayBvciBrZXlwcmVzcyB0aGF0IGlzIHVuaGFuZGxlZCAvIGJ1YmJsZWQgdXAgYWxsIHRoZSB3YXkgdG8gdGhlIGRvY3VtZW50IHRyaWdnZXJzIG91ciBkb21cbiAgICAvLyBoYW5kbGVycy4gKE5vcm1hbGx5IHdlIGhhdmUgb25seSBvbmUsIHdoaWNoIGNhcHR1cmVzIGEgYnJlYWRjcnVtYiBmb3IgZWFjaCBjbGljayBvciBrZXlwcmVzcy4pIERvIHRoaXMgYmVmb3JlXG4gICAgLy8gd2UgaW5zdHJ1bWVudCBgYWRkRXZlbnRMaXN0ZW5lcmAgc28gdGhhdCB3ZSBkb24ndCBlbmQgdXAgYXR0YWNoaW5nIHRoaXMgaGFuZGxlciB0d2ljZS5cbiAgICB2YXIgdHJpZ2dlckRPTUhhbmRsZXIgPSB0cmlnZ2VySGFuZGxlcnMuYmluZChudWxsLCAnZG9tJyk7XG4gICAgdmFyIGdsb2JhbERPTUV2ZW50SGFuZGxlciA9IG1ha2VET01FdmVudEhhbmRsZXIodHJpZ2dlckRPTUhhbmRsZXIsIHRydWUpO1xuICAgIGdsb2JhbC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdsb2JhbERPTUV2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIGdsb2JhbC5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGdsb2JhbERPTUV2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgIC8vIEFmdGVyIGhvb2tpbmcgaW50byBjbGljayBhbmQga2V5cHJlc3MgZXZlbnRzIGJ1YmJsZWQgdXAgdG8gYGRvY3VtZW50YCwgd2UgYWxzbyBob29rIGludG8gdXNlci1oYW5kbGVkXG4gICAgLy8gY2xpY2tzICYga2V5cHJlc3NlcywgYnkgYWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIG9mIG91ciBvd24gdG8gYW55IGVsZW1lbnQgdG8gd2hpY2ggdGhleSBhZGQgYSBsaXN0ZW5lci4gVGhhdFxuICAgIC8vIHdheSwgd2hlbmV2ZXIgb25lIG9mIHRoZWlyIGhhbmRsZXJzIGlzIHRyaWdnZXJlZCwgb3VycyB3aWxsIGJlLCB0b28uIChUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZWlyIGhhbmRsZXJcbiAgICAvLyBjb3VsZCBwb3RlbnRpYWxseSBwcmV2ZW50IHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nIHVwIHRvIG91ciBnbG9iYWwgbGlzdGVuZXJzLiBUaGlzIHdheSwgb3VyIGhhbmRsZXIgYXJlIHN0aWxsXG4gICAgLy8gZ3VhcmFudGVlZCB0byBmaXJlIGF0IGxlYXN0IG9uY2UuKVxuICAgIFsnRXZlbnRUYXJnZXQnLCAnTm9kZSddLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICAgIHZhciBwcm90byA9IGdsb2JhbFt0YXJnZXRdICYmIGdsb2JhbFt0YXJnZXRdLnByb3RvdHlwZTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzcywgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgIGlmICghcHJvdG8gfHwgIXByb3RvLmhhc093blByb3BlcnR5IHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eSgnYWRkRXZlbnRMaXN0ZW5lcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlsbChwcm90bywgJ2FkZEV2ZW50TGlzdGVuZXInLCBmdW5jdGlvbiAob3JpZ2luYWxBZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycgfHwgdHlwZSA9PSAna2V5cHJlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJzXzEgPSAoZWwuX19zZW50cnlfaW5zdHJ1bWVudGF0aW9uX2hhbmRsZXJzX18gPSBlbC5fX3NlbnRyeV9pbnN0cnVtZW50YXRpb25faGFuZGxlcnNfXyB8fCB7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckZvclR5cGUgPSAoaGFuZGxlcnNfMVt0eXBlXSA9IGhhbmRsZXJzXzFbdHlwZV0gfHwgeyByZWZDb3VudDogMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlckZvclR5cGUuaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gbWFrZURPTUV2ZW50SGFuZGxlcih0cmlnZ2VyRE9NSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckZvclR5cGUuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyRm9yVHlwZS5yZWZDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBY2Nlc3NpbmcgZG9tIHByb3BlcnRpZXMgaXMgYWx3YXlzIGZyYWdpbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIGFsbG93cyB1cyB0byBza2lwIGBhZGRFdmVudExpc3RlbnJzYCBjYWxscyB3aXRoIG5vIHByb3BlciBgdGhpc2AgY29udGV4dC5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbGwocHJvdG8sICdyZW1vdmVFdmVudExpc3RlbmVyJywgZnVuY3Rpb24gKG9yaWdpbmFsUmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnY2xpY2snIHx8IHR5cGUgPT0gJ2tleXByZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyc18yID0gZWwuX19zZW50cnlfaW5zdHJ1bWVudGF0aW9uX2hhbmRsZXJzX18gfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckZvclR5cGUgPSBoYW5kbGVyc18yW3R5cGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJGb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlckZvclR5cGUucmVmQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbG9uZ2VyIGFueSBjdXN0b20gaGFuZGxlcnMgb2YgdGhlIGN1cnJlbnQgdHlwZSBvbiB0aGlzIGVsZW1lbnQsIHdlIGNhbiByZW1vdmUgb3VycywgdG9vLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRm9yVHlwZS5yZWZDb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGhhbmRsZXJGb3JUeXBlLmhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyRm9yVHlwZS5oYW5kbGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaGFuZGxlcnNfMlt0eXBlXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZHluYW1pYy1kZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGxvbmdlciBhbnkgY3VzdG9tIGhhbmRsZXJzIG9mIGFueSB0eXBlIG9uIHRoaXMgZWxlbWVudCwgY2xlYW51cCBldmVyeXRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhoYW5kbGVyc18yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsLl9fc2VudHJ5X2luc3RydW1lbnRhdGlvbl9oYW5kbGVyc19fO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWNjZXNzaW5nIGRvbSBwcm9wZXJ0aWVzIGlzIGFsd2F5cyBmcmFnaWxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyBhbGxvd3MgdXMgdG8gc2tpcCBgYWRkRXZlbnRMaXN0ZW5yc2AgY2FsbHMgd2l0aCBubyBwcm9wZXIgYHRoaXNgIGNvbnRleHQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIF9vbGRPbkVycm9ySGFuZGxlciA9IG51bGw7XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIGluc3RydW1lbnRFcnJvcigpIHtcbiAgICBfb2xkT25FcnJvckhhbmRsZXIgPSBnbG9iYWwub25lcnJvcjtcbiAgICBnbG9iYWwub25lcnJvciA9IGZ1bmN0aW9uIChtc2csIHVybCwgbGluZSwgY29sdW1uLCBlcnJvcikge1xuICAgICAgICB0cmlnZ2VySGFuZGxlcnMoJ2Vycm9yJywge1xuICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBsaW5lOiBsaW5lLFxuICAgICAgICAgICAgbXNnOiBtc2csXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfb2xkT25FcnJvckhhbmRsZXIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgICAgIHJldHVybiBfb2xkT25FcnJvckhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cbnZhciBfb2xkT25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVyID0gbnVsbDtcbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gaW5zdHJ1bWVudFVuaGFuZGxlZFJlamVjdGlvbigpIHtcbiAgICBfb2xkT25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uO1xuICAgIGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRyaWdnZXJIYW5kbGVycygndW5oYW5kbGVkcmVqZWN0aW9uJywgZSk7XG4gICAgICAgIGlmIChfb2xkT25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgICAgICByZXR1cm4gX29sZE9uVW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnN0cnVtZW50LmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIG9uZSBvZiBhIGZldyBFcnJvciBvciBFcnJvci1saWtlXG4gKiB7QGxpbmsgaXNFcnJvcn0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKHdhdCkge1xuICAgIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkpIHtcbiAgICAgICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgJ1tvYmplY3QgRXhjZXB0aW9uXSc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSAnW29iamVjdCBET01FeGNlcHRpb25dJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGlzSW5zdGFuY2VPZih3YXQsIEVycm9yKTtcbiAgICB9XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBFcnJvckV2ZW50XG4gKiB7QGxpbmsgaXNFcnJvckV2ZW50fS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3JFdmVudCh3YXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkgPT09ICdbb2JqZWN0IEVycm9yRXZlbnRdJztcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIERPTUVycm9yXG4gKiB7QGxpbmsgaXNET01FcnJvcn0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RPTUVycm9yKHdhdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2F0KSA9PT0gJ1tvYmplY3QgRE9NRXJyb3JdJztcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIERPTUV4Y2VwdGlvblxuICoge0BsaW5rIGlzRE9NRXhjZXB0aW9ufS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRE9NRXhjZXB0aW9uKHdhdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2F0KSA9PT0gJ1tvYmplY3QgRE9NRXhjZXB0aW9uXSc7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhIHN0cmluZ1xuICoge0BsaW5rIGlzU3RyaW5nfS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHdhdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2F0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgaXMgYSBwcmltaXRpdmUgKHVuZGVmaW5lZCwgbnVsbCwgbnVtYmVyLCBib29sZWFuLCBzdHJpbmcsIGJpZ2ludCwgc3ltYm9sKVxuICoge0BsaW5rIGlzUHJpbWl0aXZlfS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHdhdCkge1xuICAgIHJldHVybiB3YXQgPT09IG51bGwgfHwgKHR5cGVvZiB3YXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB3YXQgIT09ICdmdW5jdGlvbicpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSdzIHR5cGUgaXMgYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHtAbGluayBpc1BsYWluT2JqZWN0fS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qod2F0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3YXQpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEV2ZW50IGluc3RhbmNlXG4gKiB7QGxpbmsgaXNFdmVudH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50KHdhdCkge1xuICAgIHJldHVybiB0eXBlb2YgRXZlbnQgIT09ICd1bmRlZmluZWQnICYmIGlzSW5zdGFuY2VPZih3YXQsIEV2ZW50KTtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGFuIEVsZW1lbnQgaW5zdGFuY2VcbiAqIHtAbGluayBpc0VsZW1lbnR9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHJldHVybnMgQSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KHdhdCkge1xuICAgIHJldHVybiB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJbnN0YW5jZU9mKHdhdCwgRWxlbWVudCk7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiByZWdleHBcbiAqIHtAbGluayBpc1JlZ0V4cH0uXG4gKlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZ0V4cCh3YXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdhdCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBnaXZlbiB2YWx1ZSBoYXMgYSB0aGVuIGZ1bmN0aW9uLlxuICogQHBhcmFtIHdhdCBBIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RoZW5hYmxlKHdhdCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICByZXR1cm4gQm9vbGVhbih3YXQgJiYgd2F0LnRoZW4gJiYgdHlwZW9mIHdhdC50aGVuID09PSAnZnVuY3Rpb24nKTtcbn1cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgZ2l2ZW4gdmFsdWUncyB0eXBlIGlzIGEgU3ludGhldGljRXZlbnRcbiAqIHtAbGluayBpc1N5bnRoZXRpY0V2ZW50fS5cbiAqXG4gKiBAcGFyYW0gd2F0IEEgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiByZXByZXNlbnRpbmcgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3ludGhldGljRXZlbnQod2F0KSB7XG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3Qod2F0KSAmJiAnbmF0aXZlRXZlbnQnIGluIHdhdCAmJiAncHJldmVudERlZmF1bHQnIGluIHdhdCAmJiAnc3RvcFByb3BhZ2F0aW9uJyBpbiB3YXQ7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGdpdmVuIHZhbHVlJ3MgdHlwZSBpcyBhbiBpbnN0YW5jZSBvZiBwcm92aWRlZCBjb25zdHJ1Y3Rvci5cbiAqIHtAbGluayBpc0luc3RhbmNlT2Z9LlxuICpcbiAqIEBwYXJhbSB3YXQgQSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICogQHBhcmFtIGJhc2UgQSBjb25zdHJ1Y3RvciB0byBiZSB1c2VkIGluIGEgY2hlY2suXG4gKiBAcmV0dXJucyBBIGJvb2xlYW4gcmVwcmVzZW50aW5nIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luc3RhbmNlT2Yod2F0LCBiYXNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHdhdCBpbnN0YW5jZW9mIGJhc2U7XG4gICAgfVxuICAgIGNhdGNoIChfZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgY29uc29sZVNhbmRib3gsIGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG4vLyBUT0RPOiBJbXBsZW1lbnQgZGlmZmVyZW50IGxvZ2dlcnMgZm9yIGRpZmZlcmVudCBlbnZpcm9ubWVudHNcbnZhciBnbG9iYWwgPSBnZXRHbG9iYWxPYmplY3QoKTtcbi8qKiBQcmVmaXggZm9yIGxvZ2dpbmcgc3RyaW5ncyAqL1xudmFyIFBSRUZJWCA9ICdTZW50cnkgTG9nZ2VyICc7XG4vKiogSlNEb2MgKi9cbnZhciBMb2dnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEpTRG9jICovXG4gICAgZnVuY3Rpb24gTG9nZ2VyKCkge1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKiBKU0RvYyAqL1xuICAgIExvZ2dlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZVNhbmRib3goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLmNvbnNvbGUubG9nKFBSRUZJWCArIFwiW0xvZ106IFwiICsgYXJncy5qb2luKCcgJykpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIExvZ2dlci5wcm90b3R5cGUud2FybiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlU2FuZGJveChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWwuY29uc29sZS53YXJuKFBSRUZJWCArIFwiW1dhcm5dOiBcIiArIGFyZ3Muam9pbignICcpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBMb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGVTYW5kYm94KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdsb2JhbC5jb25zb2xlLmVycm9yKFBSRUZJWCArIFwiW0Vycm9yXTogXCIgKyBhcmdzLmpvaW4oJyAnKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExvZ2dlcjtcbn0oKSk7XG4vLyBFbnN1cmUgd2Ugb25seSBoYXZlIGEgc2luZ2xlIGxvZ2dlciBpbnN0YW5jZSwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBAc2VudHJ5L3V0aWxzIGFyZSBiZWluZyB1c2VkXG5nbG9iYWwuX19TRU5UUllfXyA9IGdsb2JhbC5fX1NFTlRSWV9fIHx8IHt9O1xudmFyIGxvZ2dlciA9IGdsb2JhbC5fX1NFTlRSWV9fLmxvZ2dlciB8fCAoZ2xvYmFsLl9fU0VOVFJZX18ubG9nZ2VyID0gbmV3IExvZ2dlcigpKTtcbmV4cG9ydCB7IGxvZ2dlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9nZ2VyLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuLyoqXG4gKiBNZW1vIGNsYXNzIHVzZWQgZm9yIGRlY3ljbGUganNvbiBvYmplY3RzLiBVc2VzIFdlYWtTZXQgaWYgYXZhaWxhYmxlIG90aGVyd2lzZSBhcnJheS5cbiAqL1xudmFyIE1lbW8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWVtbygpIHtcbiAgICAgICAgdGhpcy5faGFzV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB0aGlzLl9pbm5lciA9IHRoaXMuX2hhc1dlYWtTZXQgPyBuZXcgV2Vha1NldCgpIDogW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgb2JqIHRvIHJlbWVtYmVyLlxuICAgICAqIEBwYXJhbSBvYmogT2JqZWN0IHRvIHJlbWVtYmVyXG4gICAgICovXG4gICAgTWVtby5wcm90b3R5cGUubWVtb2l6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1dlYWtTZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbm5lci5oYXMob2JqKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5uZXIuYWRkKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faW5uZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2lubmVyW2ldO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbm5lci5wdXNoKG9iaik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgb2JqZWN0IGZyb20gaW50ZXJuYWwgc3RvcmFnZS5cbiAgICAgKiBAcGFyYW0gb2JqIE9iamVjdCB0byBmb3JnZXRcbiAgICAgKi9cbiAgICBNZW1vLnByb3RvdHlwZS51bm1lbW9pemUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNXZWFrU2V0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbm5lci5kZWxldGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5faW5uZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5uZXJbaV0gPT09IG9iaikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbm5lci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1lbW87XG59KCkpO1xuZXhwb3J0IHsgTWVtbyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVtby5qcy5tYXAiLCJpbXBvcnQgeyBpc05vZGVFbnYgfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHsgc25pcExpbmUgfSBmcm9tICcuL3N0cmluZyc7XG52YXIgZmFsbGJhY2tHbG9iYWxPYmplY3QgPSB7fTtcbi8qKlxuICogU2FmZWx5IGdldCBnbG9iYWwgc2NvcGUgb2JqZWN0XG4gKlxuICogQHJldHVybnMgR2xvYmFsIHNjb3BlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsT2JqZWN0KCkge1xuICAgIHJldHVybiAoaXNOb2RlRW52KClcbiAgICAgICAgPyBnbG9iYWxcbiAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyB3aW5kb3dcbiAgICAgICAgICAgIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgPyBzZWxmXG4gICAgICAgICAgICAgICAgOiBmYWxsYmFja0dsb2JhbE9iamVjdCk7XG59XG4vKipcbiAqIFVVSUQ0IGdlbmVyYXRvclxuICpcbiAqIEByZXR1cm5zIHN0cmluZyBHZW5lcmF0ZWQgVVVJRDQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1dWlkNCgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgdmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvO1xuICAgIGlmICghKGNyeXB0byA9PT0gdm9pZCAwKSAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIC8vIFVzZSB3aW5kb3cuY3J5cHRvIEFQSSBpZiBhdmFpbGFibGVcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50MTZBcnJheSg4KTtcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xuICAgICAgICAvLyBzZXQgNCBpbiBieXRlIDdcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgYXJyWzNdID0gKGFyclszXSAmIDB4ZmZmKSB8IDB4NDAwMDtcbiAgICAgICAgLy8gc2V0IDIgbW9zdCBzaWduaWZpY2FudCBiaXRzIG9mIGJ5dGUgOSB0byAnMTAnXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIGFycls0XSA9IChhcnJbNF0gJiAweDNmZmYpIHwgMHg4MDAwO1xuICAgICAgICB2YXIgcGFkID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICAgICAgdmFyIHYgPSBudW0udG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgd2hpbGUgKHYubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgICAgIHYgPSBcIjBcIiArIHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChwYWQoYXJyWzBdKSArIHBhZChhcnJbMV0pICsgcGFkKGFyclsyXSkgKyBwYWQoYXJyWzNdKSArIHBhZChhcnJbNF0pICsgcGFkKGFycls1XSkgKyBwYWQoYXJyWzZdKSArIHBhZChhcnJbN10pKTtcbiAgICB9XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0LzIxMTc1MjMjMjExNzUyM1xuICAgIHJldHVybiAneHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHZhciB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBQYXJzZXMgc3RyaW5nIGZvcm0gb2YgVVJMIGludG8gYW4gb2JqZWN0XG4gKiAvLyBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I2FwcGVuZGl4LUJcbiAqIC8vIGludGVudGlvbmFsbHkgdXNpbmcgcmVnZXggYW5kIG5vdCA8YS8+IGhyZWYgcGFyc2luZyB0cmljayBiZWNhdXNlIFJlYWN0IE5hdGl2ZSBhbmQgb3RoZXJcbiAqIC8vIGVudmlyb25tZW50cyB3aGVyZSBET00gbWlnaHQgbm90IGJlIGF2YWlsYWJsZVxuICogQHJldHVybnMgcGFyc2VkIFVSTCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKC9eKChbXjovPyNdKyk6KT8oXFwvXFwvKFteLz8jXSopKT8oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPyQvKTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLy8gY29lcmNlIHRvIHVuZGVmaW5lZCB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5nIHNvIHdlIGRvbid0IGdldCAndW5kZWZpbmVkJ1xuICAgIHZhciBxdWVyeSA9IG1hdGNoWzZdIHx8ICcnO1xuICAgIHZhciBmcmFnbWVudCA9IG1hdGNoWzhdIHx8ICcnO1xuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3Q6IG1hdGNoWzRdLFxuICAgICAgICBwYXRoOiBtYXRjaFs1XSxcbiAgICAgICAgcHJvdG9jb2w6IG1hdGNoWzJdLFxuICAgICAgICByZWxhdGl2ZTogbWF0Y2hbNV0gKyBxdWVyeSArIGZyYWdtZW50LFxuICAgIH07XG59XG4vKipcbiAqIEV4dHJhY3RzIGVpdGhlciBtZXNzYWdlIG9yIHR5cGUrdmFsdWUgZnJvbSBhbiBldmVudCB0aGF0IGNhbiBiZSB1c2VkIGZvciB1c2VyLWZhY2luZyBsb2dzXG4gKiBAcmV0dXJucyBldmVudCdzIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudERlc2NyaXB0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50Lm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm1lc3NhZ2U7XG4gICAgfVxuICAgIGlmIChldmVudC5leGNlcHRpb24gJiYgZXZlbnQuZXhjZXB0aW9uLnZhbHVlcyAmJiBldmVudC5leGNlcHRpb24udmFsdWVzWzBdKSB7XG4gICAgICAgIHZhciBleGNlcHRpb24gPSBldmVudC5leGNlcHRpb24udmFsdWVzWzBdO1xuICAgICAgICBpZiAoZXhjZXB0aW9uLnR5cGUgJiYgZXhjZXB0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhjZXB0aW9uLnR5cGUgKyBcIjogXCIgKyBleGNlcHRpb24udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbi50eXBlIHx8IGV4Y2VwdGlvbi52YWx1ZSB8fCBldmVudC5ldmVudF9pZCB8fCAnPHVua25vd24+JztcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50LmV2ZW50X2lkIHx8ICc8dW5rbm93bj4nO1xufVxuLyoqIEpTRG9jICovXG5leHBvcnQgZnVuY3Rpb24gY29uc29sZVNhbmRib3goY2FsbGJhY2spIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgdmFyIGxldmVscyA9IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJywgJ2xvZycsICdhc3NlcnQnXTtcbiAgICBpZiAoISgnY29uc29sZScgaW4gZ2xvYmFsKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgIHZhciBvcmlnaW5hbENvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgICB2YXIgd3JhcHBlZExldmVscyA9IHt9O1xuICAgIC8vIFJlc3RvcmUgYWxsIHdyYXBwZWQgY29uc29sZSBtZXRob2RzXG4gICAgbGV2ZWxzLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgICAgaWYgKGxldmVsIGluIGdsb2JhbC5jb25zb2xlICYmIG9yaWdpbmFsQ29uc29sZVtsZXZlbF0uX19zZW50cnlfb3JpZ2luYWxfXykge1xuICAgICAgICAgICAgd3JhcHBlZExldmVsc1tsZXZlbF0gPSBvcmlnaW5hbENvbnNvbGVbbGV2ZWxdO1xuICAgICAgICAgICAgb3JpZ2luYWxDb25zb2xlW2xldmVsXSA9IG9yaWdpbmFsQ29uc29sZVtsZXZlbF0uX19zZW50cnlfb3JpZ2luYWxfXztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFBlcmZvcm0gY2FsbGJhY2sgbWFuaXB1bGF0aW9uc1xuICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgIC8vIFJldmVydCByZXN0b3JhdGlvbiB0byB3cmFwcGVkIHN0YXRlXG4gICAgT2JqZWN0LmtleXMod3JhcHBlZExldmVscykuZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgICAgb3JpZ2luYWxDb25zb2xlW2xldmVsXSA9IHdyYXBwZWRMZXZlbHNbbGV2ZWxdO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEFkZHMgZXhjZXB0aW9uIHZhbHVlcywgdHlwZSBhbmQgdmFsdWUgdG8gYW4gc3ludGhldGljIEV4Y2VwdGlvbi5cbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHZhbHVlIFZhbHVlIG9mIHRoZSBleGNlcHRpb24uXG4gKiBAcGFyYW0gdHlwZSBUeXBlIG9mIHRoZSBleGNlcHRpb24uXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFeGNlcHRpb25UeXBlVmFsdWUoZXZlbnQsIHZhbHVlLCB0eXBlKSB7XG4gICAgZXZlbnQuZXhjZXB0aW9uID0gZXZlbnQuZXhjZXB0aW9uIHx8IHt9O1xuICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXMgPSBldmVudC5leGNlcHRpb24udmFsdWVzIHx8IFtdO1xuICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0gPSBldmVudC5leGNlcHRpb24udmFsdWVzWzBdIHx8IHt9O1xuICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0udmFsdWUgPSBldmVudC5leGNlcHRpb24udmFsdWVzWzBdLnZhbHVlIHx8IHZhbHVlIHx8ICcnO1xuICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0udHlwZSA9IGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0udHlwZSB8fCB0eXBlIHx8ICdFcnJvcic7XG59XG4vKipcbiAqIEFkZHMgZXhjZXB0aW9uIG1lY2hhbmlzbSB0byBhIGdpdmVuIGV2ZW50LlxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBtb2RpZnkuXG4gKiBAcGFyYW0gbWVjaGFuaXNtIE1lY2hhbmlzbSBvZiB0aGUgbWVjaGFuaXNtLlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRXhjZXB0aW9uTWVjaGFuaXNtKGV2ZW50LCBtZWNoYW5pc20pIHtcbiAgICBpZiAobWVjaGFuaXNtID09PSB2b2lkIDApIHsgbWVjaGFuaXNtID0ge307IH1cbiAgICAvLyBUT0RPOiBVc2UgcmVhbCB0eXBlIHdpdGggYGtleW9mIE1lY2hhbmlzbWAgdGhpbmd5IGFuZCBtYXliZSBtYWtlIGl0IGJldHRlcj9cbiAgICB0cnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlIFR5cGUgJ01lY2hhbmlzbSB8IHt9JyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdNZWNoYW5pc20gfCB1bmRlZmluZWQnXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgIGV2ZW50LmV4Y2VwdGlvbi52YWx1ZXNbMF0ubWVjaGFuaXNtID0gZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5tZWNoYW5pc20gfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKG1lY2hhbmlzbSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIE1lY2hhbmlzbSBoYXMgbm8gaW5kZXggc2lnbmF0dXJlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgZXZlbnQuZXhjZXB0aW9uLnZhbHVlc1swXS5tZWNoYW5pc21ba2V5XSA9IG1lY2hhbmlzbVtrZXldO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAvLyBuby1lbXB0eVxuICAgIH1cbn1cbi8qKlxuICogQSBzYWZlIGZvcm0gb2YgbG9jYXRpb24uaHJlZlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25IcmVmKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBjYXRjaCAob08pIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbi8vIGh0dHBzOi8vc2VtdmVyLm9yZy8jaXMtdGhlcmUtYS1zdWdnZXN0ZWQtcmVndWxhci1leHByZXNzaW9uLXJlZ2V4LXRvLWNoZWNrLWEtc2VtdmVyLXN0cmluZ1xudmFyIFNFTVZFUl9SRUdFWFAgPSAvXigwfFsxLTldXFxkKilcXC4oMHxbMS05XVxcZCopXFwuKDB8WzEtOV1cXGQqKSg/Oi0oKD86MHxbMS05XVxcZCp8XFxkKlthLXpBLVotXVswLTlhLXpBLVotXSopKD86XFwuKD86MHxbMS05XVxcZCp8XFxkKlthLXpBLVotXVswLTlhLXpBLVotXSopKSopKT8oPzpcXCsoWzAtOWEtekEtWi1dKyg/OlxcLlswLTlhLXpBLVotXSspKikpPyQvO1xuLyoqXG4gKiBQYXJzZXMgaW5wdXQgaW50byBhIFNlbVZlciBpbnRlcmZhY2VcbiAqIEBwYXJhbSBpbnB1dCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZW12ZXIgdmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZW12ZXIoaW5wdXQpIHtcbiAgICB2YXIgbWF0Y2ggPSBpbnB1dC5tYXRjaChTRU1WRVJfUkVHRVhQKSB8fCBbXTtcbiAgICB2YXIgbWFqb3IgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgIHZhciBtaW5vciA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG4gICAgdmFyIHBhdGNoID0gcGFyc2VJbnQobWF0Y2hbM10sIDEwKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZG1ldGFkYXRhOiBtYXRjaFs1XSxcbiAgICAgICAgbWFqb3I6IGlzTmFOKG1ham9yKSA/IHVuZGVmaW5lZCA6IG1ham9yLFxuICAgICAgICBtaW5vcjogaXNOYU4obWlub3IpID8gdW5kZWZpbmVkIDogbWlub3IsXG4gICAgICAgIHBhdGNoOiBpc05hTihwYXRjaCkgPyB1bmRlZmluZWQgOiBwYXRjaCxcbiAgICAgICAgcHJlcmVsZWFzZTogbWF0Y2hbNF0sXG4gICAgfTtcbn1cbnZhciBkZWZhdWx0UmV0cnlBZnRlciA9IDYwICogMTAwMDsgLy8gNjAgc2Vjb25kc1xuLyoqXG4gKiBFeHRyYWN0cyBSZXRyeS1BZnRlciB2YWx1ZSBmcm9tIHRoZSByZXF1ZXN0IGhlYWRlciBvciByZXR1cm5zIGRlZmF1bHQgdmFsdWVcbiAqIEBwYXJhbSBub3cgY3VycmVudCB1bml4IHRpbWVzdGFtcFxuICogQHBhcmFtIGhlYWRlciBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgJ1JldHJ5LUFmdGVyJyBoZWFkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmV0cnlBZnRlckhlYWRlcihub3csIGhlYWRlcikge1xuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0UmV0cnlBZnRlcjtcbiAgICB9XG4gICAgdmFyIGhlYWRlckRlbGF5ID0gcGFyc2VJbnQoXCJcIiArIGhlYWRlciwgMTApO1xuICAgIGlmICghaXNOYU4oaGVhZGVyRGVsYXkpKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXJEZWxheSAqIDEwMDA7XG4gICAgfVxuICAgIHZhciBoZWFkZXJEYXRlID0gRGF0ZS5wYXJzZShcIlwiICsgaGVhZGVyKTtcbiAgICBpZiAoIWlzTmFOKGhlYWRlckRhdGUpKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXJEYXRlIC0gbm93O1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJldHJ5QWZ0ZXI7XG59XG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBjb250ZXh0IChwcmUvcG9zdC9saW5lKSBsaW5lcyB0byB0aGUgcHJvdmlkZWQgZnJhbWVcbiAqXG4gKiBAcGFyYW0gbGluZXMgc3RyaW5nW10gY29udGFpbmluZyBhbGwgbGluZXNcbiAqIEBwYXJhbSBmcmFtZSBTdGFja0ZyYW1lIHRoYXQgd2lsbCBiZSBtdXRhdGVkXG4gKiBAcGFyYW0gbGluZXNPZkNvbnRleHQgbnVtYmVyIG9mIGNvbnRleHQgbGluZXMgd2Ugd2FudCB0byBhZGQgcHJlL3Bvc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRleHRUb0ZyYW1lKGxpbmVzLCBmcmFtZSwgbGluZXNPZkNvbnRleHQpIHtcbiAgICBpZiAobGluZXNPZkNvbnRleHQgPT09IHZvaWQgMCkgeyBsaW5lc09mQ29udGV4dCA9IDU7IH1cbiAgICB2YXIgbGluZW5vID0gZnJhbWUubGluZW5vIHx8IDA7XG4gICAgdmFyIG1heExpbmVzID0gbGluZXMubGVuZ3RoO1xuICAgIHZhciBzb3VyY2VMaW5lID0gTWF0aC5tYXgoTWF0aC5taW4obWF4TGluZXMsIGxpbmVubyAtIDEpLCAwKTtcbiAgICBmcmFtZS5wcmVfY29udGV4dCA9IGxpbmVzXG4gICAgICAgIC5zbGljZShNYXRoLm1heCgwLCBzb3VyY2VMaW5lIC0gbGluZXNPZkNvbnRleHQpLCBzb3VyY2VMaW5lKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBzbmlwTGluZShsaW5lLCAwKTsgfSk7XG4gICAgZnJhbWUuY29udGV4dF9saW5lID0gc25pcExpbmUobGluZXNbTWF0aC5taW4obWF4TGluZXMgLSAxLCBzb3VyY2VMaW5lKV0sIGZyYW1lLmNvbG5vIHx8IDApO1xuICAgIGZyYW1lLnBvc3RfY29udGV4dCA9IGxpbmVzXG4gICAgICAgIC5zbGljZShNYXRoLm1pbihzb3VyY2VMaW5lICsgMSwgbWF4TGluZXMpLCBzb3VyY2VMaW5lICsgMSArIGxpbmVzT2ZDb250ZXh0KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBzbmlwTGluZShsaW5lLCAwKTsgfSk7XG59XG4vKipcbiAqIFN0cmlwIHRoZSBxdWVyeSBzdHJpbmcgYW5kIGZyYWdtZW50IG9mZiBvZiBhIGdpdmVuIFVSTCBvciBwYXRoIChpZiBwcmVzZW50KVxuICpcbiAqIEBwYXJhbSB1cmxQYXRoIEZ1bGwgVVJMIG9yIHBhdGgsIGluY2x1ZGluZyBwb3NzaWJsZSBxdWVyeSBzdHJpbmcgYW5kL29yIGZyYWdtZW50XG4gKiBAcmV0dXJucyBVUkwgb3IgcGF0aCB3aXRob3V0IHF1ZXJ5IHN0cmluZyBvciBmcmFnbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBVcmxRdWVyeUFuZEZyYWdtZW50KHVybFBhdGgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICByZXR1cm4gdXJsUGF0aC5zcGxpdCgvW1xcPyNdLywgMSlbMF07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXNjLmpzLm1hcCIsIi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgd2UncmUgaW4gdGhlIE5vZGUuanMgb3IgQnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIEByZXR1cm5zIEFuc3dlciB0byBnaXZlbiBxdWVzdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRW52KCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnID8gcHJvY2VzcyA6IDApID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG59XG4vKipcbiAqIFJlcXVpcmVzIGEgbW9kdWxlIHdoaWNoIGlzIHByb3RlY3RlZCBhZ2FpbnN0IGJ1bmRsZXIgbWluaWZpY2F0aW9uLlxuICpcbiAqIEBwYXJhbSByZXF1ZXN0IFRoZSBtb2R1bGUgcGF0aCB0byByZXNvbHZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgZnVuY3Rpb24gZHluYW1pY1JlcXVpcmUobW9kLCByZXF1ZXN0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgIHJldHVybiBtb2QucmVxdWlyZShyZXF1ZXN0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUuanMubWFwIiwiaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGh0bWxUcmVlQXNTdHJpbmcgfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0Vycm9yLCBpc0V2ZW50LCBpc0luc3RhbmNlT2YsIGlzUGxhaW5PYmplY3QsIGlzUHJpbWl0aXZlLCBpc1N5bnRoZXRpY0V2ZW50IH0gZnJvbSAnLi9pcyc7XG5pbXBvcnQgeyBNZW1vIH0gZnJvbSAnLi9tZW1vJztcbmltcG9ydCB7IGdldEZ1bmN0aW9uTmFtZSB9IGZyb20gJy4vc3RhY2t0cmFjZSc7XG5pbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJy4vc3RyaW5nJztcbi8qKlxuICogV3JhcCBhIGdpdmVuIG9iamVjdCBtZXRob2Qgd2l0aCBhIGhpZ2hlci1vcmRlciBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSBzb3VyY2UgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBtZXRob2QgdG8gYmUgd3JhcHBlZC5cbiAqIEBwYXJhbSBuYW1lIEEgbmFtZSBvZiBtZXRob2QgdG8gYmUgd3JhcHBlZC5cbiAqIEBwYXJhbSByZXBsYWNlbWVudEZhY3RvcnkgQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHdyYXAgYSBnaXZlbiBtZXRob2QsIHJldHVybmluZyB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2hcbiAqIHdpbGwgYmUgc3Vic3RpdHV0ZWQgaW4gZm9yIGBzb3VyY2VbbmFtZV1gLlxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsbChzb3VyY2UsIG5hbWUsIHJlcGxhY2VtZW50RmFjdG9yeSkge1xuICAgIGlmICghKG5hbWUgaW4gc291cmNlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbCA9IHNvdXJjZVtuYW1lXTtcbiAgICB2YXIgd3JhcHBlZCA9IHJlcGxhY2VtZW50RmFjdG9yeShvcmlnaW5hbCk7XG4gICAgLy8gTWFrZSBzdXJlIGl0J3MgYSBmdW5jdGlvbiBmaXJzdCwgYXMgd2UgbmVlZCB0byBhdHRhY2ggYW4gZW1wdHkgcHJvdG90eXBlIGZvciBgZGVmaW5lUHJvcGVydGllc2AgdG8gd29ya1xuICAgIC8vIG90aGVyd2lzZSBpdCdsbCB0aHJvdyBcIlR5cGVFcnJvcjogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgY2FsbGVkIG9uIG5vbi1vYmplY3RcIlxuICAgIGlmICh0eXBlb2Ygd3JhcHBlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd3JhcHBlZC5wcm90b3R5cGUgPSB3cmFwcGVkLnByb3RvdHlwZSB8fCB7fTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBwZWQsIHtcbiAgICAgICAgICAgICAgICBfX3NlbnRyeV9vcmlnaW5hbF9fOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfT28pIHtcbiAgICAgICAgICAgIC8vIFRoaXMgY2FuIHRocm93IGlmIG11bHRpcGxlIGZpbGwgaGFwcGVucyBvbiBhIGdsb2JhbCBvYmplY3QgbGlrZSBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdC9pc3N1ZXMvMjA0M1xuICAgICAgICB9XG4gICAgfVxuICAgIHNvdXJjZVtuYW1lXSA9IHdyYXBwZWQ7XG59XG4vKipcbiAqIEVuY29kZXMgZ2l2ZW4gb2JqZWN0IGludG8gdXJsLWZyaWVuZGx5IGZvcm1hdFxuICpcbiAqIEBwYXJhbSBvYmplY3QgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc2VyaWFsaXphYmxlIHZhbHVlc1xuICogQHJldHVybnMgc3RyaW5nIEVuY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVybEVuY29kZShvYmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqZWN0W2tleV0pOyB9KVxuICAgICAgICAuam9pbignJicpO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIGFueSBvYmplY3QgaW50byBhbiBvYmplY3QgbGl0ZXJhbCB3aXRoIGFsbCBpdHMgYXR0cmlidXRlc1xuICogYXR0YWNoZWQgdG8gaXQuXG4gKlxuICogQHBhcmFtIHZhbHVlIEluaXRpYWwgc291cmNlIHRoYXQgd2UgaGF2ZSB0byB0cmFuc2Zvcm0gaW4gb3JkZXIgZm9yIGl0IHRvIGJlIHVzYWJsZSBieSB0aGUgc2VyaWFsaXplclxuICovXG5mdW5jdGlvbiBnZXRXYWxrU291cmNlKHZhbHVlKSB7XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHZhbHVlO1xuICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIG5hbWU6IGVycm9yLm5hbWUsXG4gICAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgaW4gZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXJyb3IsIGkpKSB7XG4gICAgICAgICAgICAgICAgZXJyW2ldID0gZXJyb3JbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG4gICAgaWYgKGlzRXZlbnQodmFsdWUpKSB7XG4gICAgICAgIHZhciBldmVudF8xID0gdmFsdWU7XG4gICAgICAgIHZhciBzb3VyY2UgPSB7fTtcbiAgICAgICAgc291cmNlLnR5cGUgPSBldmVudF8xLnR5cGU7XG4gICAgICAgIC8vIEFjY2Vzc2luZyBldmVudC50YXJnZXQgY2FuIHRocm93IChzZWUgZ2V0c2VudHJ5L3JhdmVuLWpzIzgzOCwgIzc2OClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNvdXJjZS50YXJnZXQgPSBpc0VsZW1lbnQoZXZlbnRfMS50YXJnZXQpXG4gICAgICAgICAgICAgICAgPyBodG1sVHJlZUFzU3RyaW5nKGV2ZW50XzEudGFyZ2V0KVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV2ZW50XzEudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX29PKSB7XG4gICAgICAgICAgICBzb3VyY2UudGFyZ2V0ID0gJzx1bmtub3duPic7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNvdXJjZS5jdXJyZW50VGFyZ2V0ID0gaXNFbGVtZW50KGV2ZW50XzEuY3VycmVudFRhcmdldClcbiAgICAgICAgICAgICAgICA/IGh0bWxUcmVlQXNTdHJpbmcoZXZlbnRfMS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGV2ZW50XzEuY3VycmVudFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9vTykge1xuICAgICAgICAgICAgc291cmNlLmN1cnJlbnRUYXJnZXQgPSAnPHVua25vd24+JztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc0luc3RhbmNlT2YodmFsdWUsIEN1c3RvbUV2ZW50KSkge1xuICAgICAgICAgICAgc291cmNlLmRldGFpbCA9IGV2ZW50XzEuZGV0YWlsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgaW4gZXZlbnRfMSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChldmVudF8xLCBpKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZVtpXSA9IGV2ZW50XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqIENhbGN1bGF0ZXMgYnl0ZXMgc2l6ZSBvZiBpbnB1dCBzdHJpbmcgKi9cbmZ1bmN0aW9uIHV0ZjhMZW5ndGgodmFsdWUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgIHJldHVybiB+LWVuY29kZVVSSSh2YWx1ZSkuc3BsaXQoLyUuLnwuLykubGVuZ3RoO1xufVxuLyoqIENhbGN1bGF0ZXMgYnl0ZXMgc2l6ZSBvZiBpbnB1dCBvYmplY3QgKi9cbmZ1bmN0aW9uIGpzb25TaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHV0ZjhMZW5ndGgoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRvU2l6ZShvYmplY3QsIFxuLy8gRGVmYXVsdCBOb2RlLmpzIFJFUEwgZGVwdGhcbmRlcHRoLCBcbi8vIDEwMGtCLCBhcyAyMDBrQiBpcyBtYXggcGF5bG9hZCBzaXplLCBzbyBoYWxmIHNvdW5kcyByZWFzb25hYmxlXG5tYXhTaXplKSB7XG4gICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHsgZGVwdGggPSAzOyB9XG4gICAgaWYgKG1heFNpemUgPT09IHZvaWQgMCkgeyBtYXhTaXplID0gMTAwICogMTAyNDsgfVxuICAgIHZhciBzZXJpYWxpemVkID0gbm9ybWFsaXplKG9iamVjdCwgZGVwdGgpO1xuICAgIGlmIChqc29uU2l6ZShzZXJpYWxpemVkKSA+IG1heFNpemUpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVRvU2l6ZShvYmplY3QsIGRlcHRoIC0gMSwgbWF4U2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemVkO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW55IG5vbi1wcmltaXRpdmUsIEJpZ0ludCwgb3IgU3ltYm9sLXR5cGUgdmFsdWUgaW50byBhIHN0cmluZy4gQWN0cyBhcyBhIG5vLW9wIG9uIHN0cmluZ3MsIG51bWJlcnMsXG4gKiBib29sZWFucywgbnVsbCwgYW5kIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0cmluZ2lmeVxuICogQHJldHVybnMgRm9yIG5vbi1wcmltaXRpdmUsIEJpZ0ludCwgYW5kIFN5bWJvbC10eXBlIHZhbHVlcywgYSBzdHJpbmcgZGVub3RpbmcgdGhlIHZhbHVlJ3MgdHlwZSwgdHlwZSBhbmQgdmFsdWUsIG9yXG4gKiAgdHlwZSBhbmQgYGRlc2NyaXB0aW9uYCBwcm9wZXJ0eSwgcmVzcGVjdGl2ZWx5LiBGb3Igbm9uLUJpZ0ludCwgbm9uLVN5bWJvbCBwcmltaXRpdmVzLCByZXR1cm5zIHRoZSBvcmlnaW5hbCB2YWx1ZSxcbiAqICB1bmNoYW5nZWQuXG4gKi9cbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICAgIC8vIE5vZGUuanMgUkVQTCBub3RhdGlvblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIHJldHVybiAnW09iamVjdF0nO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICByZXR1cm4gJ1tBcnJheV0nO1xuICAgIH1cbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gaXNQcmltaXRpdmUobm9ybWFsaXplZCkgPyBub3JtYWxpemVkIDogdHlwZTtcbn1cbi8qKlxuICogbm9ybWFsaXplVmFsdWUoKVxuICpcbiAqIFRha2VzIHVuc2VyaWFsaXphYmxlIGlucHV0IGFuZCBtYWtlIGl0IHNlcmlhbGl6YWJsZSBmcmllbmRseVxuICpcbiAqIC0gdHJhbnNsYXRlcyB1bmRlZmluZWQvTmFOIHZhbHVlcyB0byBcIlt1bmRlZmluZWRdXCIvXCJbTmFOXVwiIHJlc3BlY3RpdmVseSxcbiAqIC0gc2VyaWFsaXplcyBFcnJvciBvYmplY3RzXG4gKiAtIGZpbHRlciBnbG9iYWwgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RvbWFpbicgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5fZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiAnW0RvbWFpbl0nO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnZG9tYWluRW1pdHRlcicpIHtcbiAgICAgICAgcmV0dXJuICdbRG9tYWluRW1pdHRlcl0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgPT09IGdsb2JhbCkge1xuICAgICAgICByZXR1cm4gJ1tHbG9iYWxdJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSB3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuICdbV2luZG93XSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlID09PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gJ1tEb2N1bWVudF0nO1xuICAgIH1cbiAgICAvLyBSZWFjdCdzIFN5bnRoZXRpY0V2ZW50IHRoaW5neVxuICAgIGlmIChpc1N5bnRoZXRpY0V2ZW50KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ1tTeW50aGV0aWNFdmVudF0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICdbTmFOXSc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiAnW3VuZGVmaW5lZF0nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBcIltGdW5jdGlvbjogXCIgKyBnZXRGdW5jdGlvbk5hbWUodmFsdWUpICsgXCJdXCI7XG4gICAgfVxuICAgIC8vIHN5bWJvbHMgYW5kIGJpZ2ludHMgYXJlIGNvbnNpZGVyZWQgcHJpbWl0aXZlcyBieSBUUywgYnV0IGFyZW4ndCBuYXRpdmVseSBKU09OLXNlcmlsYWl6YWJsZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIFN0cmluZyh2YWx1ZSkgKyBcIl1cIjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgcmV0dXJuIFwiW0JpZ0ludDogXCIgKyBTdHJpbmcodmFsdWUpICsgXCJdXCI7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogV2Fsa3MgYW4gb2JqZWN0IHRvIHBlcmZvcm0gYSBub3JtYWxpemF0aW9uIG9uIGl0XG4gKlxuICogQHBhcmFtIGtleSBvZiBvYmplY3QgdGhhdCdzIHdhbGtlZCBpbiBjdXJyZW50IGl0ZXJhdGlvblxuICogQHBhcmFtIHZhbHVlIG9iamVjdCB0byBiZSB3YWxrZWRcbiAqIEBwYXJhbSBkZXB0aCBPcHRpb25hbCBudW1iZXIgaW5kaWNhdGluZyBob3cgZGVlcCBzaG91bGQgd2Fsa2luZyBiZSBwZXJmb3JtZWRcbiAqIEBwYXJhbSBtZW1vIE9wdGlvbmFsIE1lbW8gY2xhc3MgaGFuZGxpbmcgZGVjeWNsaW5nXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5leHBvcnQgZnVuY3Rpb24gd2FsayhrZXksIHZhbHVlLCBkZXB0aCwgbWVtbykge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gK0luZmluaXR5OyB9XG4gICAgaWYgKG1lbW8gPT09IHZvaWQgMCkgeyBtZW1vID0gbmV3IE1lbW8oKTsgfVxuICAgIC8vIElmIHdlIHJlYWNoIHRoZSBtYXhpbXVtIGRlcHRoLCBzZXJpYWxpemUgd2hhdGV2ZXIgaGFzIGxlZnRcbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4gICAgLy8gSWYgdmFsdWUgaW1wbGVtZW50cyBgdG9KU09OYCBtZXRob2QsIGNhbGwgaXQgYW5kIHJldHVybiBlYXJseVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuICAgIC8vIElmIG5vcm1hbGl6ZWQgdmFsdWUgaXMgYSBwcmltaXRpdmUsIHRoZXJlIGFyZSBubyBicmFuY2hlcyBsZWZ0IHRvIHdhbGssIHNvIHdlIGNhbiBqdXN0IGJhaWwgb3V0LCBhcyB0aGVyZXMgbm8gcG9pbnQgaW4gZ29pbmcgZG93biB0aGF0IGJyYW5jaCBhbnkgZnVydGhlclxuICAgIHZhciBub3JtYWxpemVkID0gbm9ybWFsaXplVmFsdWUodmFsdWUsIGtleSk7XG4gICAgaWYgKGlzUHJpbWl0aXZlKG5vcm1hbGl6ZWQpKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVkO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgc291cmNlIHRoYXQgd2Ugd2lsbCB1c2UgZm9yIG5leHQgaXR0ZXJhdGlvbnMsIGVpdGhlciBvYmplY3RpZmllZCBlcnJvciBvYmplY3QgKEVycm9yIHR5cGUgd2l0aCBleHRyYWN0ZWQga2V5czp2YWx1ZSBwYWlycykgb3IgdGhlIGlucHV0IGl0c2VsZlxuICAgIHZhciBzb3VyY2UgPSBnZXRXYWxrU291cmNlKHZhbHVlKTtcbiAgICAvLyBDcmVhdGUgYW4gYWNjdW11bGF0b3IgdGhhdCB3aWxsIGFjdCBhcyBhIHBhcmVudCBmb3IgYWxsIGZ1dHVyZSBpdHRlcmF0aW9ucyBvZiB0aGF0IGJyYW5jaFxuICAgIHZhciBhY2MgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFtdIDoge307XG4gICAgLy8gSWYgd2UgYWxyZWFkeSB3YWxrZWQgdGhhdCBicmFuY2gsIGJhaWwgb3V0LCBhcyBpdCdzIGNpcmN1bGFyIHJlZmVyZW5jZVxuICAgIGlmIChtZW1vLm1lbW9pemUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnW0NpcmN1bGFyIH5dJztcbiAgICB9XG4gICAgLy8gV2FsayBhbGwga2V5cyBvZiB0aGUgc291cmNlXG4gICAgZm9yICh2YXIgaW5uZXJLZXkgaW4gc291cmNlKSB7XG4gICAgICAgIC8vIEF2b2lkIGl0ZXJhdGluZyBvdmVyIGZpZWxkcyBpbiB0aGUgcHJvdG90eXBlIGlmIHRoZXkndmUgc29tZWhvdyBiZWVuIGV4cG9zZWQgdG8gZW51bWVyYXRpb24uXG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgaW5uZXJLZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNpdmVseSB3YWxrIHRocm91Z2ggYWxsIHRoZSBjaGlsZCBub2Rlc1xuICAgICAgICBhY2NbaW5uZXJLZXldID0gd2Fsayhpbm5lcktleSwgc291cmNlW2lubmVyS2V5XSwgZGVwdGggLSAxLCBtZW1vKTtcbiAgICB9XG4gICAgLy8gT25jZSB3YWxrZWQgdGhyb3VnaCBhbGwgdGhlIGJyYW5jaGVzLCByZW1vdmUgdGhlIHBhcmVudCBmcm9tIG1lbW8gc3RvcmFnZVxuICAgIG1lbW8udW5tZW1vaXplKHZhbHVlKTtcbiAgICAvLyBSZXR1cm4gYWNjdW11bGF0ZWQgdmFsdWVzXG4gICAgcmV0dXJuIGFjYztcbn1cbi8qKlxuICogbm9ybWFsaXplKClcbiAqXG4gKiAtIENyZWF0ZXMgYSBjb3B5IHRvIHByZXZlbnQgb3JpZ2luYWwgaW5wdXQgbXV0YXRpb25cbiAqIC0gU2tpcCBub24tZW51bWVyYWJsZXJzXG4gKiAtIENhbGxzIGB0b0pTT05gIGlmIGltcGxlbWVudGVkXG4gKiAtIFJlbW92ZXMgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICogLSBUcmFuc2xhdGVzIG5vbi1zZXJpYWxpemVhYmxlIHZhbHVlcyAodW5kZWZpbmVkL05hTi9GdW5jdGlvbnMpIHRvIHNlcmlhbGl6YWJsZSBmb3JtYXRcbiAqIC0gVHJhbnNsYXRlcyBrbm93biBnbG9iYWwgb2JqZWN0cy9DbGFzc2VzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uc1xuICogLSBUYWtlcyBjYXJlIG9mIEVycm9yIG9iamVjdHMgc2VyaWFsaXphdGlvblxuICogLSBPcHRpb25hbGx5IGxpbWl0IGRlcHRoIG9mIGZpbmFsIG91dHB1dFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShpbnB1dCwgZGVwdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbnB1dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHsgcmV0dXJuIHdhbGsoa2V5LCB2YWx1ZSwgZGVwdGgpOyB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChfb08pIHtcbiAgICAgICAgcmV0dXJuICcqKm5vbi1zZXJpYWxpemFibGUqKic7XG4gICAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbnkgY2FwdHVyZWQgZXhjZXB0aW9uLCBleHRyYWN0IGl0cyBrZXlzIGFuZCBjcmVhdGUgYSBzb3J0ZWRcbiAqIGFuZCB0cnVuY2F0ZWQgbGlzdCB0aGF0IHdpbGwgYmUgdXNlZCBpbnNpZGUgdGhlIGV2ZW50IG1lc3NhZ2UuXG4gKiBlZy4gYE5vbi1lcnJvciBleGNlcHRpb24gY2FwdHVyZWQgd2l0aCBrZXlzOiBmb28sIGJhciwgYmF6YFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RFeGNlcHRpb25LZXlzRm9yTWVzc2FnZShleGNlcHRpb24sIG1heExlbmd0aCkge1xuICAgIGlmIChtYXhMZW5ndGggPT09IHZvaWQgMCkgeyBtYXhMZW5ndGggPSA0MDsgfVxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ2V0V2Fsa1NvdXJjZShleGNlcHRpb24pKTtcbiAgICBrZXlzLnNvcnQoKTtcbiAgICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnW29iamVjdCBoYXMgbm8ga2V5c10nO1xuICAgIH1cbiAgICBpZiAoa2V5c1swXS5sZW5ndGggPj0gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0cnVuY2F0ZShrZXlzWzBdLCBtYXhMZW5ndGgpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpbmNsdWRlZEtleXMgPSBrZXlzLmxlbmd0aDsgaW5jbHVkZWRLZXlzID4gMDsgaW5jbHVkZWRLZXlzLS0pIHtcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBrZXlzLnNsaWNlKDAsIGluY2x1ZGVkS2V5cykuam9pbignLCAnKTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZWRLZXlzID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydW5jYXRlKHNlcmlhbGl6ZWQsIG1heExlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cbi8qKlxuICogR2l2ZW4gYW55IG9iamVjdCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0IHdpdGggcmVtb3ZlZCBrZXlzIHRoYXQgdmFsdWUgd2FzIGB1bmRlZmluZWRgLlxuICogV29ya3MgcmVjdXJzaXZlbHkgb24gb2JqZWN0cyBhbmQgYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJvcFVuZGVmaW5lZEtleXModmFsKSB7XG4gICAgdmFyIGVfMSwgX2E7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICB2YXIgb2JqID0gdmFsO1xuICAgICAgICB2YXIgcnYgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmtleXMob2JqKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcnZba2V5XSA9IGRyb3BVbmRlZmluZWRLZXlzKG9ialtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnY7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5tYXAoZHJvcFVuZGVmaW5lZEtleXMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LmpzLm1hcCIsIi8vIFNsaWdodGx5IG1vZGlmaWVkIChubyBJRTggc3VwcG9ydCwgRVM2KSBhbmQgdHJhbnNjcmliZWQgdG8gVHlwZVNjcmlwdFxuLy8gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NhbHZpbm1ldGNhbGYvcm9sbHVwLXBsdWdpbi1ub2RlLWJ1aWx0aW5zL21hc3Rlci9zcmMvZXM2L3BhdGguanNcbi8qKiBKU0RvYyAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gICAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgICB2YXIgdXAgPSAwO1xuICAgIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgICAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICAgICAgICB1cCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVwKSB7XG4gICAgICAgICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgICAgICAgIHVwLS07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICAgIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICAgICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbn1cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbcm9vdCwgZGlyLCBiYXNlbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID0gL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteL10rP3wpKFxcLlteLi9dKnwpKSg/OlsvXSopJC87XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIHNwbGl0UGF0aChmaWxlbmFtZSkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpO1xuICAgIHJldHVybiBwYXJ0cyA/IHBhcnRzLnNsaWNlKDEpIDogW107XG59XG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzb2x2ZWRQYXRoID0gJyc7XG4gICAgdmFyIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICAgICAgdmFyIHBhdGggPSBpID49IDAgPyBhcmdzW2ldIDogJy8nO1xuICAgICAgICAvLyBTa2lwIGVtcHR5IGVudHJpZXNcbiAgICAgICAgaWYgKCFwYXRoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgXCIvXCIgKyByZXNvbHZlZFBhdGg7XG4gICAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgIH1cbiAgICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gICAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG4gICAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gICAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJykuZmlsdGVyKGZ1bmN0aW9uIChwKSB7IHJldHVybiAhIXA7IH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuICAgIHJldHVybiAocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCB8fCAnLic7XG59XG4vKiogSlNEb2MgKi9cbmZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgICAgaWYgKGFycltlbmRdICE9PSAnJykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbn1cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG4vKiogSlNEb2MgKi9cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZShmcm9tLCB0bykge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgZnJvbSA9IHJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICAgIHRvID0gcmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICAgIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICAgIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICAgICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICAgIH1cbiAgICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuICAgIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59XG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuLyoqIEpTRG9jICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwYXRoKSB7XG4gICAgdmFyIGlzUGF0aEFic29sdXRlID0gaXNBYnNvbHV0ZShwYXRoKTtcbiAgICB2YXIgdHJhaWxpbmdTbGFzaCA9IHBhdGguc3Vic3RyKC0xKSA9PT0gJy8nO1xuICAgIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICAgIHZhciBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KHBhdGguc3BsaXQoJy8nKS5maWx0ZXIoZnVuY3Rpb24gKHApIHsgcmV0dXJuICEhcDsgfSksICFpc1BhdGhBYnNvbHV0ZSkuam9pbignLycpO1xuICAgIGlmICghbm9ybWFsaXplZFBhdGggJiYgIWlzUGF0aEFic29sdXRlKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRQYXRoID0gJy4nO1xuICAgIH1cbiAgICBpZiAobm9ybWFsaXplZFBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgICAgICBub3JtYWxpemVkUGF0aCArPSAnLyc7XG4gICAgfVxuICAgIHJldHVybiAoaXNQYXRoQWJzb2x1dGUgPyAnLycgOiAnJykgKyBub3JtYWxpemVkUGF0aDtcbn1cbi8vIHBvc2l4IHZlcnNpb25cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWJzb2x1dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuLy8gcG9zaXggdmVyc2lvblxuLyoqIEpTRG9jICovXG5leHBvcnQgZnVuY3Rpb24gam9pbigpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBhdGgoYXJncy5qb2luKCcvJykpO1xufVxuLyoqIEpTRG9jICovXG5leHBvcnQgZnVuY3Rpb24gZGlybmFtZShwYXRoKSB7XG4gICAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKTtcbiAgICB2YXIgcm9vdCA9IHJlc3VsdFswXTtcbiAgICB2YXIgZGlyID0gcmVzdWx0WzFdO1xuICAgIGlmICghcm9vdCAmJiAhZGlyKSB7XG4gICAgICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgICAgICByZXR1cm4gJy4nO1xuICAgIH1cbiAgICBpZiAoZGlyKSB7XG4gICAgICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIGRpciA9IGRpci5zdWJzdHIoMCwgZGlyLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdCArIGRpcjtcbn1cbi8qKiBKU0RvYyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgsIGV4dCkge1xuICAgIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAgIGlmIChleHQgJiYgZi5zdWJzdHIoZXh0Lmxlbmd0aCAqIC0xKSA9PT0gZXh0KSB7XG4gICAgICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gZjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwIiwiZXhwb3J0IHZhciBzZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSA/IHNldFByb3RvT2YgOiBtaXhpblByb3BlcnRpZXMpO1xuLyoqXG4gKiBzZXRQcm90b3R5cGVPZiBwb2x5ZmlsbCB1c2luZyBfX3Byb3RvX19cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHNldFByb3RvT2Yob2JqLCBwcm90bykge1xuICAgIC8vIEB0cy1pZ25vcmUgX19wcm90b19fIGRvZXMgbm90IGV4aXN0IG9uIG9ialxuICAgIG9iai5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBzZXRQcm90b3R5cGVPZiBwb2x5ZmlsbCB1c2luZyBtaXhpblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gbWl4aW5Qcm9wZXJ0aWVzKG9iaiwgcHJvdG8pIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHByb3RvKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdHlwZXNjcmlwdCBjb21wbGFpbnMgYWJvdXQgaW5kZXhpbmcgc28gd2UgcmVtb3ZlXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSBwcm90b1twcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWZpbGwuanMubWFwIiwiaW1wb3J0IHsgU2VudHJ5RXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IFN5bmNQcm9taXNlIH0gZnJvbSAnLi9zeW5jcHJvbWlzZSc7XG4vKiogQSBzaW1wbGUgcXVldWUgdGhhdCBob2xkcyBwcm9taXNlcy4gKi9cbnZhciBQcm9taXNlQnVmZmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb21pc2VCdWZmZXIoX2xpbWl0KSB7XG4gICAgICAgIHRoaXMuX2xpbWl0ID0gX2xpbWl0O1xuICAgICAgICAvKiogSW50ZXJuYWwgc2V0IG9mIHF1ZXVlZCBQcm9taXNlcyAqL1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2F5cyBpZiB0aGUgYnVmZmVyIGlzIHJlYWR5IHRvIHRha2UgbW9yZSByZXF1ZXN0c1xuICAgICAqL1xuICAgIFByb21pc2VCdWZmZXIucHJvdG90eXBlLmlzUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW1pdCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubGVuZ3RoKCkgPCB0aGlzLl9saW1pdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZCBhIHByb21pc2UgdG8gdGhlIHF1ZXVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRhc2sgQ2FuIGJlIGFueSBQcm9taXNlTGlrZTxUPlxuICAgICAqIEByZXR1cm5zIFRoZSBvcmlnaW5hbCBwcm9taXNlLlxuICAgICAqL1xuICAgIFByb21pc2VCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBTeW5jUHJvbWlzZS5yZWplY3QobmV3IFNlbnRyeUVycm9yKCdOb3QgYWRkaW5nIFByb21pc2UgZHVlIHRvIGJ1ZmZlciBsaW1pdCByZWFjaGVkLicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYnVmZmVyLmluZGV4T2YodGFzaykgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW1vdmUodGFzayk7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlKHRhc2spLnRoZW4obnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gYWRkIHRoaXMgY2F0Y2ggaGVyZSBvdGhlcndpc2Ugd2UgaGF2ZSBhbiB1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBpdCdzIGEgbmV3IFByb21pc2UgY2hhaW4uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcHJvbWlzZSB0byB0aGUgcXVldWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFzayBDYW4gYmUgYW55IFByb21pc2VMaWtlPFQ+XG4gICAgICogQHJldHVybnMgUmVtb3ZlZCBwcm9taXNlLlxuICAgICAqL1xuICAgIFByb21pc2VCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgIHZhciByZW1vdmVkVGFzayA9IHRoaXMuX2J1ZmZlci5zcGxpY2UodGhpcy5fYnVmZmVyLmluZGV4T2YodGFzayksIDEpWzBdO1xuICAgICAgICByZXR1cm4gcmVtb3ZlZFRhc2s7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIG51bWJlciBvZiB1bnJlc29sdmVkIHByb21pc2VzIGluIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBQcm9taXNlQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXIubGVuZ3RoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhpcyB3aWxsIGRyYWluIHRoZSB3aG9sZSBxdWV1ZSwgcmV0dXJucyB0cnVlIGlmIHF1ZXVlIGlzIGVtcHR5IG9yIGRyYWluZWQuXG4gICAgICogSWYgdGltZW91dCBpcyBwcm92aWRlZCBhbmQgdGhlIHF1ZXVlIHRha2VzIGxvbmdlciB0byBkcmFpbiwgdGhlIHByb21pc2Ugc3RpbGwgcmVzb2x2ZXMgYnV0IHdpdGggZmFsc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGltZW91dCBOdW1iZXIgaW4gbXMgdG8gd2FpdCB1bnRpbCBpdCByZXNvbHZlcyB3aXRoIGZhbHNlLlxuICAgICAqL1xuICAgIFByb21pc2VCdWZmZXIucHJvdG90eXBlLmRyYWluID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGNhcHR1cmVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICYmIHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgU3luY1Byb21pc2UuYWxsKF90aGlzLl9idWZmZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYXB0dXJlZFNldFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFByb21pc2VCdWZmZXI7XG59KCkpO1xuZXhwb3J0IHsgUHJvbWlzZUJ1ZmZlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvbWlzZWJ1ZmZlci5qcy5tYXAiLCJ2YXIgZGVmYXVsdEZ1bmN0aW9uTmFtZSA9ICc8YW5vbnltb3VzPic7XG4vKipcbiAqIFNhZmVseSBleHRyYWN0IGZ1bmN0aW9uIG5hbWUgZnJvbSBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bmN0aW9uTmFtZShmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICghZm4gfHwgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdEZ1bmN0aW9uTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm4ubmFtZSB8fCBkZWZhdWx0RnVuY3Rpb25OYW1lO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBKdXN0IGFjY2Vzc2luZyBjdXN0b20gcHJvcHMgaW4gc29tZSBTZWxlbml1bSBlbnZpcm9ubWVudHNcbiAgICAgICAgLy8gY2FuIGNhdXNlIGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGV4Y2VwdGlvbiAoc2VlIHJhdmVuLWpzIzQ5NSkuXG4gICAgICAgIHJldHVybiBkZWZhdWx0RnVuY3Rpb25OYW1lO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YWNrdHJhY2UuanMubWFwIiwiaW1wb3J0IHsgaXNSZWdFeHAsIGlzU3RyaW5nIH0gZnJvbSAnLi9pcyc7XG4vKipcbiAqIFRydW5jYXRlcyBnaXZlbiBzdHJpbmcgdG8gdGhlIG1heGltdW0gY2hhcmFjdGVycyBjb3VudFxuICpcbiAqIEBwYXJhbSBzdHIgQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc2VyaWFsaXphYmxlIHZhbHVlc1xuICogQHBhcmFtIG1heCBNYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHRydW5jYXRlZCBzdHJpbmcgKDAgPSB1bmxpbWl0ZWQpXG4gKiBAcmV0dXJucyBzdHJpbmcgRW5jb2RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGUoc3RyLCBtYXgpIHtcbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMDsgfVxuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBtYXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPD0gbWF4ID8gc3RyIDogc3RyLnN1YnN0cigwLCBtYXgpICsgXCIuLi5cIjtcbn1cbi8qKlxuICogVGhpcyBpcyBiYXNpY2FsbHkganVzdCBgdHJpbV9saW5lYCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2V0c2VudHJ5L3NlbnRyeS9ibG9iL21hc3Rlci9zcmMvc2VudHJ5L2xhbmcvamF2YXNjcmlwdC9wcm9jZXNzb3IucHkjTDY3XG4gKlxuICogQHBhcmFtIHN0ciBBbiBvYmplY3QgdGhhdCBjb250YWlucyBzZXJpYWxpemFibGUgdmFsdWVzXG4gKiBAcGFyYW0gbWF4IE1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gdHJ1bmNhdGVkIHN0cmluZ1xuICogQHJldHVybnMgc3RyaW5nIEVuY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNuaXBMaW5lKGxpbmUsIGNvbG5vKSB7XG4gICAgdmFyIG5ld0xpbmUgPSBsaW5lO1xuICAgIHZhciBsbCA9IG5ld0xpbmUubGVuZ3RoO1xuICAgIGlmIChsbCA8PSAxNTApIHtcbiAgICAgICAgcmV0dXJuIG5ld0xpbmU7XG4gICAgfVxuICAgIGlmIChjb2xubyA+IGxsKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBjb2xubyA9IGxsO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1heChjb2xubyAtIDYwLCAwKTtcbiAgICBpZiAoc3RhcnQgPCA1KSB7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG4gICAgdmFyIGVuZCA9IE1hdGgubWluKHN0YXJ0ICsgMTQwLCBsbCk7XG4gICAgaWYgKGVuZCA+IGxsIC0gNSkge1xuICAgICAgICBlbmQgPSBsbDtcbiAgICB9XG4gICAgaWYgKGVuZCA9PT0gbGwpIHtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heChlbmQgLSAxNDAsIDApO1xuICAgIH1cbiAgICBuZXdMaW5lID0gbmV3TGluZS5zbGljZShzdGFydCwgZW5kKTtcbiAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgIG5ld0xpbmUgPSBcIid7c25pcH0gXCIgKyBuZXdMaW5lO1xuICAgIH1cbiAgICBpZiAoZW5kIDwgbGwpIHtcbiAgICAgICAgbmV3TGluZSArPSAnIHtzbmlwfSc7XG4gICAgfVxuICAgIHJldHVybiBuZXdMaW5lO1xufVxuLyoqXG4gKiBKb2luIHZhbHVlcyBpbiBhcnJheVxuICogQHBhcmFtIGlucHV0IGFycmF5IG9mIHZhbHVlcyB0byBiZSBqb2luZWQgdG9nZXRoZXJcbiAqIEBwYXJhbSBkZWxpbWl0ZXIgc3RyaW5nIHRvIGJlIHBsYWNlZCBpbi1iZXR3ZWVuIHZhbHVlc1xuICogQHJldHVybnMgSm9pbmVkIHZhbHVlc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKb2luKGlucHV0LCBkZWxpbWl0ZXIpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLWZvci1vZlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRbaV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goJ1t2YWx1ZSBjYW5ub3QgYmUgc2VyaWFsaXplZF0nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oZGVsaW1pdGVyKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBtYXRjaGVzIGEgcmVnZXggb3IgaW5jbHVkZXMgdGhlIHN0cmluZ1xuICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gYmUgY2hlY2tlZCBhZ2FpbnN0XG4gKiBAcGFyYW0gcGF0dGVybiBFaXRoZXIgYSByZWdleCBvciBhIHN0cmluZyB0aGF0IG11c3QgYmUgY29udGFpbmVkIGluIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01hdGNoaW5nUGF0dGVybih2YWx1ZSwgcGF0dGVybikge1xuICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5pbmRleE9mKHBhdHRlcm4pICE9PSAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5nLmpzLm1hcCIsImltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGdldEdsb2JhbE9iamVjdCB9IGZyb20gJy4vbWlzYyc7XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBFcnJvckV2ZW50IG9iamVjdHNcbiAqIHtAbGluayBzdXBwb3J0c0Vycm9yRXZlbnR9LlxuICpcbiAqIEByZXR1cm5zIEFuc3dlciB0byB0aGUgZ2l2ZW4gcXVlc3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Vycm9yRXZlbnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IEVycm9yRXZlbnQoJycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogVGVsbHMgd2hldGhlciBjdXJyZW50IGVudmlyb25tZW50IHN1cHBvcnRzIERPTUVycm9yIG9iamVjdHNcbiAqIHtAbGluayBzdXBwb3J0c0RPTUVycm9yfS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNET01FcnJvcigpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBDaHJvbWU6IFZNODk6MSBVbmNhdWdodCBUeXBlRXJyb3I6IEZhaWxlZCB0byBjb25zdHJ1Y3QgJ0RPTUVycm9yJzpcbiAgICAgICAgLy8gMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlxuICAgICAgICAvLyBAdHMtaWdub3JlIEl0IHJlYWxseSBuZWVkcyAxIGFyZ3VtZW50LCBub3QgMC5cbiAgICAgICAgbmV3IERPTUVycm9yKCcnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBET01FeGNlcHRpb24gb2JqZWN0c1xuICoge0BsaW5rIHN1cHBvcnRzRE9NRXhjZXB0aW9ufS5cbiAqXG4gKiBAcmV0dXJucyBBbnN3ZXIgdG8gdGhlIGdpdmVuIHF1ZXN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNET01FeGNlcHRpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IERPTUV4Y2VwdGlvbignJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLyoqXG4gKiBUZWxscyB3aGV0aGVyIGN1cnJlbnQgZW52aXJvbm1lbnQgc3VwcG9ydHMgRmV0Y2ggQVBJXG4gKiB7QGxpbmsgc3VwcG9ydHNGZXRjaH0uXG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIHRoZSBnaXZlbiBxdWVzdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzRmV0Y2goKSB7XG4gICAgaWYgKCEoJ2ZldGNoJyBpbiBnZXRHbG9iYWxPYmplY3QoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBuZXcgSGVhZGVycygpO1xuICAgICAgICBuZXcgUmVxdWVzdCgnJyk7XG4gICAgICAgIG5ldyBSZXNwb25zZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbi8qKlxuICogaXNOYXRpdmVGZXRjaCBjaGVja3MgaWYgdGhlIGdpdmVuIGZ1bmN0aW9uIGlzIGEgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIGZldGNoKClcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBmdW5jdGlvbiBpc05hdGl2ZUZldGNoKGZ1bmMpIHtcbiAgICByZXR1cm4gZnVuYyAmJiAvXmZ1bmN0aW9uIGZldGNoXFwoXFwpXFxzK1xce1xccytcXFtuYXRpdmUgY29kZVxcXVxccytcXH0kLy50ZXN0KGZ1bmMudG9TdHJpbmcoKSk7XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBGZXRjaCBBUEkgbmF0aXZlbHlcbiAqIHtAbGluayBzdXBwb3J0c05hdGl2ZUZldGNofS5cbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIGB3aW5kb3cuZmV0Y2hgIGlzIG5hdGl2ZWx5IGltcGxlbWVudGVkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzTmF0aXZlRmV0Y2goKSB7XG4gICAgaWYgKCFzdXBwb3J0c0ZldGNoKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsT2JqZWN0KCk7XG4gICAgLy8gRmFzdCBwYXRoIHRvIGF2b2lkIERPTSBJL09cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kXG4gICAgaWYgKGlzTmF0aXZlRmV0Y2goZ2xvYmFsLmZldGNoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gd2luZG93LmZldGNoIGlzIGltcGxlbWVudGVkLCBidXQgaXMgcG9seWZpbGxlZCBvciBhbHJlYWR5IHdyYXBwZWQgKGUuZzogYnkgYSBjaHJvbWUgZXh0ZW5zaW9uKVxuICAgIC8vIHNvIGNyZWF0ZSBhIFwicHVyZVwiIGlmcmFtZSB0byBzZWUgaWYgdGhhdCBoYXMgbmF0aXZlIGZldGNoXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uXG4gICAgaWYgKGRvYyAmJiB0eXBlb2YgZG9jLmNyZWF0ZUVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHNhbmRib3ggPSBkb2MuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICBzYW5kYm94LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzYW5kYm94KTtcbiAgICAgICAgICAgIGlmIChzYW5kYm94LmNvbnRlbnRXaW5kb3cgJiYgc2FuZGJveC5jb250ZW50V2luZG93LmZldGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmJvdW5kLW1ldGhvZFxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlzTmF0aXZlRmV0Y2goc2FuZGJveC5jb250ZW50V2luZG93LmZldGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvYy5oZWFkLnJlbW92ZUNoaWxkKHNhbmRib3gpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCdDb3VsZCBub3QgY3JlYXRlIHNhbmRib3ggaWZyYW1lIGZvciBwdXJlIGZldGNoIGNoZWNrLCBiYWlsaW5nIHRvIHdpbmRvdy5mZXRjaDogJywgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBUZWxscyB3aGV0aGVyIGN1cnJlbnQgZW52aXJvbm1lbnQgc3VwcG9ydHMgUmVwb3J0aW5nT2JzZXJ2ZXIgQVBJXG4gKiB7QGxpbmsgc3VwcG9ydHNSZXBvcnRpbmdPYnNlcnZlcn0uXG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIHRoZSBnaXZlbiBxdWVzdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUmVwb3J0aW5nT2JzZXJ2ZXIoKSB7XG4gICAgcmV0dXJuICdSZXBvcnRpbmdPYnNlcnZlcicgaW4gZ2V0R2xvYmFsT2JqZWN0KCk7XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBSZWZlcnJlciBQb2xpY3kgQVBJXG4gKiB7QGxpbmsgc3VwcG9ydHNSZWZlcnJlclBvbGljeX0uXG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIHRoZSBnaXZlbiBxdWVzdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUmVmZXJyZXJQb2xpY3koKSB7XG4gICAgLy8gRGVzcGl0ZSBhbGwgc3RhcnMgaW4gdGhlIHNreSBzYXlpbmcgdGhhdCBFZGdlIHN1cHBvcnRzIG9sZCBkcmFmdCBzeW50YXgsIGFrYSAnbmV2ZXInLCAnYWx3YXlzJywgJ29yaWdpbicgYW5kICdkZWZhdWx0XG4gICAgLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jZmVhdD1yZWZlcnJlci1wb2xpY3lcbiAgICAvLyBJdCBkb2Vzbid0LiBBbmQgaXQgdGhyb3cgZXhjZXB0aW9uIGluc3RlYWQgb2YgaWdub3JpbmcgdGhpcyBwYXJhbWV0ZXIuLi5cbiAgICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvcmF2ZW4tanMvaXNzdWVzLzEyMzNcbiAgICBpZiAoIXN1cHBvcnRzRmV0Y2goKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG5ldyBSZXF1ZXN0KCdfJywge1xuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICdvcmlnaW4nLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIFRlbGxzIHdoZXRoZXIgY3VycmVudCBlbnZpcm9ubWVudCBzdXBwb3J0cyBIaXN0b3J5IEFQSVxuICoge0BsaW5rIHN1cHBvcnRzSGlzdG9yeX0uXG4gKlxuICogQHJldHVybnMgQW5zd2VyIHRvIHRoZSBnaXZlbiBxdWVzdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgICAvLyBOT1RFOiBpbiBDaHJvbWUgQXBwIGVudmlyb25tZW50LCB0b3VjaGluZyBoaXN0b3J5LnB1c2hTdGF0ZSwgKmV2ZW4gaW5zaWRlXG4gICAgLy8gICAgICAgYSB0cnkvY2F0Y2ggYmxvY2sqLCB3aWxsIGNhdXNlIENocm9tZSB0byBvdXRwdXQgYW4gZXJyb3IgdG8gY29uc29sZS5lcnJvclxuICAgIC8vIGJvcnJvd2VkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8xMzk0NS9maWxlc1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWxPYmplY3QoKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHZhciBjaHJvbWUgPSBnbG9iYWwuY2hyb21lO1xuICAgIHZhciBpc0Nocm9tZVBhY2thZ2VkQXBwID0gY2hyb21lICYmIGNocm9tZS5hcHAgJiYgY2hyb21lLmFwcC5ydW50aW1lO1xuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4gICAgdmFyIGhhc0hpc3RvcnlBcGkgPSAnaGlzdG9yeScgaW4gZ2xvYmFsICYmICEhZ2xvYmFsLmhpc3RvcnkucHVzaFN0YXRlICYmICEhZ2xvYmFsLmhpc3RvcnkucmVwbGFjZVN0YXRlO1xuICAgIHJldHVybiAhaXNDaHJvbWVQYWNrYWdlZEFwcCAmJiBoYXNIaXN0b3J5QXBpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VwcG9ydHMuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvdHlwZWRlZiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgaXNUaGVuYWJsZSB9IGZyb20gJy4vaXMnO1xuLyoqIFN5bmNQcm9taXNlIGludGVybmFsIHN0YXRlcyAqL1xudmFyIFN0YXRlcztcbihmdW5jdGlvbiAoU3RhdGVzKSB7XG4gICAgLyoqIFBlbmRpbmcgKi9cbiAgICBTdGF0ZXNbXCJQRU5ESU5HXCJdID0gXCJQRU5ESU5HXCI7XG4gICAgLyoqIFJlc29sdmVkIC8gT0sgKi9cbiAgICBTdGF0ZXNbXCJSRVNPTFZFRFwiXSA9IFwiUkVTT0xWRURcIjtcbiAgICAvKiogUmVqZWN0ZWQgLyBFcnJvciAqL1xuICAgIFN0YXRlc1tcIlJFSkVDVEVEXCJdID0gXCJSRUpFQ1RFRFwiO1xufSkoU3RhdGVzIHx8IChTdGF0ZXMgPSB7fSkpO1xuLyoqXG4gKiBUaGVuYWJsZSBjbGFzcyB0aGF0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UgYW5kIGZvbGxvd3MgaXQncyBpbnRlcmZhY2VcbiAqIGJ1dCBpcyBub3QgYXN5bmMgaW50ZXJuYWxseVxuICovXG52YXIgU3luY1Byb21pc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3luY1Byb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGF0ZXMuUEVORElORztcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLl9zZXRSZXN1bHQoU3RhdGVzLlJFU09MVkVELCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiBKU0RvYyAqL1xuICAgICAgICB0aGlzLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2V0UmVzdWx0KFN0YXRlcy5SRUpFQ1RFRCwgcmVhc29uKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX3NldFJlc3VsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc3RhdGUgIT09IFN0YXRlcy5QRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihfdGhpcy5fcmVzb2x2ZSwgX3RoaXMuX3JlamVjdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBfdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLl9leGVjdXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETzogRklYTUVcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX2F0dGFjaEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZXJzID0gX3RoaXMuX2hhbmRsZXJzLmNvbmNhdChoYW5kbGVyKTtcbiAgICAgICAgICAgIF90aGlzLl9leGVjdXRlSGFuZGxlcnMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIEpTRG9jICovXG4gICAgICAgIHRoaXMuX2V4ZWN1dGVIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc3RhdGUgPT09IFN0YXRlcy5QRU5ESU5HKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNhY2hlZEhhbmRsZXJzID0gX3RoaXMuX2hhbmRsZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgIGNhY2hlZEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uZnVsZmlsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm9uZnVsZmlsbGVkKF90aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLl9zdGF0ZSA9PT0gU3RhdGVzLlJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLm9ucmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub25yZWplY3RlZChfdGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZXIuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWN1dG9yKHRoaXMuX3Jlc29sdmUsIHRoaXMuX3JlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3luY1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBKU0RvYyAqL1xuICAgIFN5bmNQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoY29sbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IFN5bmNQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKFwiUHJvbWlzZS5hbGwgcmVxdWlyZXMgYW4gYXJyYXkgYXMgaW5wdXQuXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkQ29sbGVjdGlvbiA9IFtdO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIFN5bmNQcm9taXNlLnJlc29sdmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ29sbGVjdGlvbltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRlciAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihudWxsLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25mdWxmaWxsZWQsIG9ucmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5fYXR0YWNoSGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQ6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvbmZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogwq9cXF8o44OEKV8vwq9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEZJWE1FXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob25mdWxmaWxsZWQocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25yZWplY3RlZDogZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9ucmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9ucmVqZWN0ZWQocmVhc29uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25yZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbDsgfSwgb25yZWplY3RlZCk7XG4gICAgfTtcbiAgICAvKiogSlNEb2MgKi9cbiAgICBTeW5jUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChvbmZpbmFsbHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBTeW5jUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgdmFsO1xuICAgICAgICAgICAgdmFyIGlzUmVqZWN0ZWQ7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc1JlamVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG9uZmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICBvbmZpbmFsbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgaXNSZWplY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsID0gcmVhc29uO1xuICAgICAgICAgICAgICAgIGlmIChvbmZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb25maW5hbGx5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEpTRG9jICovXG4gICAgU3luY1Byb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ1tvYmplY3QgU3luY1Byb21pc2VdJztcbiAgICB9O1xuICAgIHJldHVybiBTeW5jUHJvbWlzZTtcbn0oKSk7XG5leHBvcnQgeyBTeW5jUHJvbWlzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3luY3Byb21pc2UuanMubWFwIiwiaW1wb3J0IHsgZ2V0R2xvYmFsT2JqZWN0IH0gZnJvbSAnLi9taXNjJztcbmltcG9ydCB7IGR5bmFtaWNSZXF1aXJlLCBpc05vZGVFbnYgfSBmcm9tICcuL25vZGUnO1xuLyoqXG4gKiBBIFRpbWVzdGFtcFNvdXJjZSBpbXBsZW1lbnRhdGlvbiBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhlIFBlcmZvcm1hbmNlIFdlYiBBUEkgbmF0aXZlbHkuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgVGltZXN0YW1wU291cmNlIGRvZXMgbm90IHVzZSBhIG1vbm90b25pYyBjbG9jay4gQSBjYWxsIHRvIGBub3dTZWNvbmRzYCBtYXkgcmV0dXJuIGEgdGltZXN0YW1wIGVhcmxpZXJcbiAqIHRoYW4gYSBwcmV2aW91c2x5IHJldHVybmVkIHZhbHVlLiBXZSBkbyBub3QgdHJ5IHRvIGVtdWxhdGUgYSBtb25vdG9uaWMgYmVoYXZpb3IgaW4gb3JkZXIgdG8gZmFjaWxpdGF0ZSBkZWJ1Z2dpbmcuIEl0XG4gKiBpcyBtb3JlIG9idmlvdXMgdG8gZXhwbGFpbiBcIndoeSBkb2VzIG15IHNwYW4gaGF2ZSBuZWdhdGl2ZSBkdXJhdGlvblwiIHRoYW4gXCJ3aHkgbXkgc3BhbnMgaGF2ZSB6ZXJvIGR1cmF0aW9uXCIuXG4gKi9cbnZhciBkYXRlVGltZXN0YW1wU291cmNlID0ge1xuICAgIG5vd1NlY29uZHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERhdGUubm93KCkgLyAxMDAwOyB9LFxufTtcbi8qKlxuICogUmV0dXJucyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgUGVyZm9ybWFuY2UgQVBJIGJyb3dzZXIgaW1wbGVtZW50YXRpb24sIG9yIHVuZGVmaW5lZCBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAqIHN1cHBvcnQgdGhlIEFQSS5cbiAqXG4gKiBXcmFwcGluZyB0aGUgbmF0aXZlIEFQSSB3b3JrcyBhcm91bmQgZGlmZmVyZW5jZXMgaW4gYmVoYXZpb3IgZnJvbSBkaWZmZXJlbnQgYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIGdldEJyb3dzZXJQZXJmb3JtYW5jZSgpIHtcbiAgICB2YXIgcGVyZm9ybWFuY2UgPSBnZXRHbG9iYWxPYmplY3QoKS5wZXJmb3JtYW5jZTtcbiAgICBpZiAoIXBlcmZvcm1hbmNlIHx8ICFwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gUmVwbGFjZSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIHdpdGggb3VyIG93biB0aW1lT3JpZ2luIGJhc2VkIG9uIERhdGUubm93KCkuXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGEgcGFydGlhbCB3b3JrYXJvdW5kIGZvciBicm93c2VycyByZXBvcnRpbmcgcGVyZm9ybWFuY2UudGltZU9yaWdpbiBzdWNoIHRoYXQgcGVyZm9ybWFuY2UudGltZU9yaWdpbiArXG4gICAgLy8gcGVyZm9ybWFuY2Uubm93KCkgZ2l2ZXMgYSBkYXRlIGFyYml0cmFyaWx5IGluIHRoZSBwYXN0LlxuICAgIC8vXG4gICAgLy8gQWRkaXRpb25hbGx5LCBjb21wdXRpbmcgdGltZU9yaWdpbiBpbiB0aGlzIHdheSBmaWxscyB0aGUgZ2FwIGZvciBicm93c2VycyB3aGVyZSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIGlzXG4gICAgLy8gdW5kZWZpbmVkLlxuICAgIC8vXG4gICAgLy8gVGhlIGFzc3VtcHRpb24gdGhhdCBwZXJmb3JtYW5jZS50aW1lT3JpZ2luICsgcGVyZm9ybWFuY2Uubm93KCkgfj0gRGF0ZS5ub3coKSBpcyBmbGF3ZWQsIGJ1dCB3ZSBkZXBlbmQgb24gaXQgdG9cbiAgICAvLyBpbnRlcmFjdCB3aXRoIGRhdGEgY29taW5nIG91dCBvZiBwZXJmb3JtYW5jZSBlbnRyaWVzLlxuICAgIC8vXG4gICAgLy8gTm90ZSB0aGF0IGRlc3BpdGUgcmVjb21tZW5kYXRpb25zIGFnYWluc3QgaXQgaW4gdGhlIHNwZWMsIGJyb3dzZXJzIGltcGxlbWVudCB0aGUgUGVyZm9ybWFuY2UgQVBJIHdpdGggYSBjbG9jayB0aGF0XG4gICAgLy8gbWlnaHQgc3RvcCB3aGVuIHRoZSBjb21wdXRlciBpcyBhc2xlZXAgKGFuZCBwZXJoYXBzIHVuZGVyIG90aGVyIGNpcmN1bXN0YW5jZXMpLiBTdWNoIGJlaGF2aW9yIGNhdXNlc1xuICAgIC8vIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gKyBwZXJmb3JtYW5jZS5ub3coKSB0byBoYXZlIGFuIGFyYml0cmFyeSBza2V3IG92ZXIgRGF0ZS5ub3coKS4gSW4gbGFwdG9wIGNvbXB1dGVycywgd2UgaGF2ZVxuICAgIC8vIG9ic2VydmVkIHNrZXdzIHRoYXQgY2FuIGJlIGFzIGxvbmcgYXMgZGF5cywgd2Vla3Mgb3IgbW9udGhzLlxuICAgIC8vXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzI1OTAuXG4gICAgLy9cbiAgICAvLyBCVUc6IGRlc3BpdGUgb3VyIGJlc3QgaW50ZW50aW9ucywgdGhpcyB3b3JrYXJvdW5kIGhhcyBpdHMgbGltaXRhdGlvbnMuIEl0IG1vc3RseSBhZGRyZXNzZXMgdGltaW5ncyBvZiBwYWdlbG9hZFxuICAgIC8vIHRyYW5zYWN0aW9ucywgYnV0IGlnbm9yZXMgdGhlIHNrZXcgYnVpbHQgdXAgb3ZlciB0aW1lIHRoYXQgY2FuIGF2ZXJzZWx5IGFmZmVjdCB0aW1lc3RhbXBzIG9mIG5hdmlnYXRpb25cbiAgICAvLyB0cmFuc2FjdGlvbnMgb2YgbG9uZy1saXZlZCB3ZWIgcGFnZXMuXG4gICAgdmFyIHRpbWVPcmlnaW4gPSBEYXRlLm5vdygpIC0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm93OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfSxcbiAgICAgICAgdGltZU9yaWdpbjogdGltZU9yaWdpbixcbiAgICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuYXRpdmUgUGVyZm9ybWFuY2UgQVBJIGltcGxlbWVudGF0aW9uIGZyb20gTm9kZS5qcy4gUmV0dXJucyB1bmRlZmluZWQgaW4gb2xkIE5vZGUuanMgdmVyc2lvbnMgdGhhdCBkb24ndFxuICogaW1wbGVtZW50IHRoZSBBUEkuXG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVQZXJmb3JtYW5jZSgpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcGVyZkhvb2tzID0gZHluYW1pY1JlcXVpcmUobW9kdWxlLCAncGVyZl9ob29rcycpO1xuICAgICAgICByZXR1cm4gcGVyZkhvb2tzLnBlcmZvcm1hbmNlO1xuICAgIH1cbiAgICBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8qKlxuICogVGhlIFBlcmZvcm1hbmNlIEFQSSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIGN1cnJlbnQgcGxhdGZvcm0sIGlmIGF2YWlsYWJsZS5cbiAqL1xudmFyIHBsYXRmb3JtUGVyZm9ybWFuY2UgPSBpc05vZGVFbnYoKSA/IGdldE5vZGVQZXJmb3JtYW5jZSgpIDogZ2V0QnJvd3NlclBlcmZvcm1hbmNlKCk7XG52YXIgdGltZXN0YW1wU291cmNlID0gcGxhdGZvcm1QZXJmb3JtYW5jZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBkYXRlVGltZXN0YW1wU291cmNlXG4gICAgOiB7XG4gICAgICAgIG5vd1NlY29uZHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChwbGF0Zm9ybVBlcmZvcm1hbmNlLnRpbWVPcmlnaW4gKyBwbGF0Zm9ybVBlcmZvcm1hbmNlLm5vdygpKSAvIDEwMDA7IH0sXG4gICAgfTtcbi8qKlxuICogUmV0dXJucyBhIHRpbWVzdGFtcCBpbiBzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoIHVzaW5nIHRoZSBEYXRlIEFQSS5cbiAqL1xuZXhwb3J0IHZhciBkYXRlVGltZXN0YW1wSW5TZWNvbmRzID0gZGF0ZVRpbWVzdGFtcFNvdXJjZS5ub3dTZWNvbmRzLmJpbmQoZGF0ZVRpbWVzdGFtcFNvdXJjZSk7XG4vKipcbiAqIFJldHVybnMgYSB0aW1lc3RhbXAgaW4gc2Vjb25kcyBzaW5jZSB0aGUgVU5JWCBlcG9jaCB1c2luZyBlaXRoZXIgdGhlIFBlcmZvcm1hbmNlIG9yIERhdGUgQVBJcywgZGVwZW5kaW5nIG9uIHRoZVxuICogYXZhaWxhYmlsaXR5IG9mIHRoZSBQZXJmb3JtYW5jZSBBUEkuXG4gKlxuICogU2VlIGB1c2luZ1BlcmZvcm1hbmNlQVBJYCB0byB0ZXN0IHdoZXRoZXIgdGhlIFBlcmZvcm1hbmNlIEFQSSBpcyB1c2VkLlxuICpcbiAqIEJVRzogTm90ZSB0aGF0IGJlY2F1c2Ugb2YgaG93IGJyb3dzZXJzIGltcGxlbWVudCB0aGUgUGVyZm9ybWFuY2UgQVBJLCB0aGUgY2xvY2sgbWlnaHQgc3RvcCB3aGVuIHRoZSBjb21wdXRlciBpc1xuICogYXNsZWVwLiBUaGlzIGNyZWF0ZXMgYSBza2V3IGJldHdlZW4gYGRhdGVUaW1lc3RhbXBJblNlY29uZHNgIGFuZCBgdGltZXN0YW1wSW5TZWNvbmRzYC4gVGhlXG4gKiBza2V3IGNhbiBncm93IHRvIGFyYml0cmFyeSBhbW91bnRzIGxpa2UgZGF5cywgd2Vla3Mgb3IgbW9udGhzLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9nZXRzZW50cnkvc2VudHJ5LWphdmFzY3JpcHQvaXNzdWVzLzI1OTAuXG4gKi9cbmV4cG9ydCB2YXIgdGltZXN0YW1wSW5TZWNvbmRzID0gdGltZXN0YW1wU291cmNlLm5vd1NlY29uZHMuYmluZCh0aW1lc3RhbXBTb3VyY2UpO1xuLy8gUmUtZXhwb3J0ZWQgd2l0aCBhbiBvbGQgbmFtZSBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkuXG5leHBvcnQgdmFyIHRpbWVzdGFtcFdpdGhNcyA9IHRpbWVzdGFtcEluU2Vjb25kcztcbi8qKlxuICogQSBib29sZWFuIHRoYXQgaXMgdHJ1ZSB3aGVuIHRpbWVzdGFtcEluU2Vjb25kcyB1c2VzIHRoZSBQZXJmb3JtYW5jZSBBUEkgdG8gcHJvZHVjZSBtb25vdG9uaWMgdGltZXN0YW1wcy5cbiAqL1xuZXhwb3J0IHZhciB1c2luZ1BlcmZvcm1hbmNlQVBJID0gcGxhdGZvcm1QZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkO1xuLyoqXG4gKiBJbnRlcm5hbCBoZWxwZXIgdG8gc3RvcmUgd2hhdCBpcyB0aGUgc291cmNlIG9mIGJyb3dzZXJQZXJmb3JtYW5jZVRpbWVPcmlnaW4gYmVsb3cuIEZvciBkZWJ1Z2dpbmcgb25seS5cbiAqL1xuZXhwb3J0IHZhciBfYnJvd3NlclBlcmZvcm1hbmNlVGltZU9yaWdpbk1vZGU7XG4vKipcbiAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBVTklYIGVwb2NoLiBUaGlzIHZhbHVlIGlzIG9ubHkgdXNhYmxlIGluIGEgYnJvd3NlciwgYW5kIG9ubHkgd2hlbiB0aGVcbiAqIHBlcmZvcm1hbmNlIEFQSSBpcyBhdmFpbGFibGUuXG4gKi9cbmV4cG9ydCB2YXIgYnJvd3NlclBlcmZvcm1hbmNlVGltZU9yaWdpbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVW5mb3J0dW5hdGVseSBicm93c2VycyBtYXkgcmVwb3J0IGFuIGluYWNjdXJhdGUgdGltZSBvcmlnaW4gZGF0YSwgdGhyb3VnaCBlaXRoZXIgcGVyZm9ybWFuY2UudGltZU9yaWdpbiBvclxuICAgIC8vIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQsIHdoaWNoIHJlc3VsdHMgaW4gcG9vciByZXN1bHRzIGluIHBlcmZvcm1hbmNlIGRhdGEuIFdlIG9ubHkgdHJlYXQgdGltZSBvcmlnaW5cbiAgICAvLyBkYXRhIGFzIHJlbGlhYmxlIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHJlYXNvbmFibGUgdGhyZXNob2xkIG9mIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgdmFyIHBlcmZvcm1hbmNlID0gZ2V0R2xvYmFsT2JqZWN0KCkucGVyZm9ybWFuY2U7XG4gICAgaWYgKCFwZXJmb3JtYW5jZSkge1xuICAgICAgICBfYnJvd3NlclBlcmZvcm1hbmNlVGltZU9yaWdpbk1vZGUgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciB0aHJlc2hvbGQgPSAzNjAwICogMTAwMDtcbiAgICB2YXIgcGVyZm9ybWFuY2VOb3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB2YXIgZGF0ZU5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gaWYgdGltZU9yaWdpbiBpc24ndCBhdmFpbGFibGUgc2V0IGRlbHRhIHRvIHRocmVzaG9sZCBzbyBpdCBpc24ndCB1c2VkXG4gICAgdmFyIHRpbWVPcmlnaW5EZWx0YSA9IHBlcmZvcm1hbmNlLnRpbWVPcmlnaW5cbiAgICAgICAgPyBNYXRoLmFicyhwZXJmb3JtYW5jZS50aW1lT3JpZ2luICsgcGVyZm9ybWFuY2VOb3cgLSBkYXRlTm93KVxuICAgICAgICA6IHRocmVzaG9sZDtcbiAgICB2YXIgdGltZU9yaWdpbklzUmVsaWFibGUgPSB0aW1lT3JpZ2luRGVsdGEgPCB0aHJlc2hvbGQ7XG4gICAgLy8gV2hpbGUgcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW4sIHBlcmZvcm1hbmNlLnRpbWVPcmlnaW5cbiAgICAvLyBpcyBub3QgYXMgd2lkZWx5IHN1cHBvcnRlZC4gTmFtZWx5LCBwZXJmb3JtYW5jZS50aW1lT3JpZ2luIGlzIHVuZGVmaW5lZCBpbiBTYWZhcmkgYXMgb2Ygd3JpdGluZy5cbiAgICAvLyBBbHNvIGFzIG9mIHdyaXRpbmcsIHBlcmZvcm1hbmNlLnRpbWluZyBpcyBub3QgYXZhaWxhYmxlIGluIFdlYiBXb3JrZXJzIGluIG1haW5zdHJlYW0gYnJvd3NlcnMsIHNvIGl0IGlzIG5vdCBhbHdheXNcbiAgICAvLyBhIHZhbGlkIGZhbGxiYWNrLiBJbiB0aGUgYWJzZW5jZSBvZiBhbiBpbml0aWFsIHRpbWUgcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIsIGZhbGxiYWNrIHRvIHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGVcbiAgICAvLyBEYXRlIEFQSS5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb24vZGVwcmVjYXRpb25cbiAgICB2YXIgbmF2aWdhdGlvblN0YXJ0ID0gcGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XG4gICAgdmFyIGhhc05hdmlnYXRpb25TdGFydCA9IHR5cGVvZiBuYXZpZ2F0aW9uU3RhcnQgPT09ICdudW1iZXInO1xuICAgIC8vIGlmIG5hdmlnYXRpb25TdGFydCBpc24ndCBhdmFpbGFibGUgc2V0IGRlbHRhIHRvIHRocmVzaG9sZCBzbyBpdCBpc24ndCB1c2VkXG4gICAgdmFyIG5hdmlnYXRpb25TdGFydERlbHRhID0gaGFzTmF2aWdhdGlvblN0YXJ0ID8gTWF0aC5hYnMobmF2aWdhdGlvblN0YXJ0ICsgcGVyZm9ybWFuY2VOb3cgLSBkYXRlTm93KSA6IHRocmVzaG9sZDtcbiAgICB2YXIgbmF2aWdhdGlvblN0YXJ0SXNSZWxpYWJsZSA9IG5hdmlnYXRpb25TdGFydERlbHRhIDwgdGhyZXNob2xkO1xuICAgIGlmICh0aW1lT3JpZ2luSXNSZWxpYWJsZSB8fCBuYXZpZ2F0aW9uU3RhcnRJc1JlbGlhYmxlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgbW9yZSByZWxpYWJsZSB0aW1lIG9yaWdpblxuICAgICAgICBpZiAodGltZU9yaWdpbkRlbHRhIDw9IG5hdmlnYXRpb25TdGFydERlbHRhKSB7XG4gICAgICAgICAgICBfYnJvd3NlclBlcmZvcm1hbmNlVGltZU9yaWdpbk1vZGUgPSAndGltZU9yaWdpbic7XG4gICAgICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2UudGltZU9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9icm93c2VyUGVyZm9ybWFuY2VUaW1lT3JpZ2luTW9kZSA9ICduYXZpZ2F0aW9uU3RhcnQnO1xuICAgICAgICAgICAgcmV0dXJuIG5hdmlnYXRpb25TdGFydDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFaXRoZXIgYm90aCB0aW1lT3JpZ2luIGFuZCBuYXZpZ2F0aW9uU3RhcnQgYXJlIHNrZXdlZCBvciBuZWl0aGVyIGlzIGF2YWlsYWJsZSwgZmFsbGJhY2sgdG8gRGF0ZS5cbiAgICBfYnJvd3NlclBlcmZvcm1hbmNlVGltZU9yaWdpbk1vZGUgPSAnZGF0ZU5vdyc7XG4gICAgcmV0dXJuIGRhdGVOb3c7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZS5qcy5tYXAiLCIvKiFcbiAgICBsb2NhbEZvcmFnZSAtLSBPZmZsaW5lIFN0b3JhZ2UsIEltcHJvdmVkXG4gICAgVmVyc2lvbiAxLjkuMFxuICAgIGh0dHBzOi8vbG9jYWxmb3JhZ2UuZ2l0aHViLmlvL2xvY2FsRm9yYWdlXG4gICAgKGMpIDIwMTMtMjAxNyBNb3ppbGxhLCBBcGFjaGUgTGljZW5zZSAyLjBcbiovXG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5sb2NhbGZvcmFnZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyAoZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLCBmKX12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbnZhciBNdXRhdGlvbiA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG52YXIgc2NoZWR1bGVEcmFpbjtcblxue1xuICBpZiAoTXV0YXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb24obmV4dFRpY2spO1xuICAgIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5kYXRhID0gKGNhbGxlZCA9ICsrY2FsbGVkICUgMik7XG4gICAgfTtcbiAgfSBlbHNlIGlmICghZ2xvYmFsLnNldEltbWVkaWF0ZSAmJiB0eXBlb2YgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjaGFubmVsID0gbmV3IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbmV4dFRpY2s7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgnZG9jdW1lbnQnIGluIGdsb2JhbCAmJiAnb25yZWFkeXN0YXRlY2hhbmdlJyBpbiBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5leHRUaWNrKCk7XG5cbiAgICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgc2NyaXB0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbCk7XG4gICAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICAgIH07XG4gICAgICBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KG5leHRUaWNrLCAwKTtcbiAgICB9O1xuICB9XG59XG5cbnZhciBkcmFpbmluZztcbnZhciBxdWV1ZSA9IFtdO1xuLy9uYW1lZCBuZXh0VGljayBmb3IgbGVzcyBjb25mdXNpbmcgc3RhY2sgdHJhY2VzXG5mdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgaSwgb2xkUXVldWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChsZW4pIHtcbiAgICBvbGRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgIG9sZFF1ZXVlW2ldKCk7XG4gICAgfVxuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltbWVkaWF0ZTtcbmZ1bmN0aW9uIGltbWVkaWF0ZSh0YXNrKSB7XG4gIGlmIChxdWV1ZS5wdXNoKHRhc2spID09PSAxICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlRHJhaW4oKTtcbiAgfVxufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xudmFyIGltbWVkaWF0ZSA9IF9kZXJlcV8oMSk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBJTlRFUk5BTCgpIHt9XG5cbnZhciBoYW5kbGVycyA9IHt9O1xuXG52YXIgUkVKRUNURUQgPSBbJ1JFSkVDVEVEJ107XG52YXIgRlVMRklMTEVEID0gWydGVUxGSUxMRUQnXTtcbnZhciBQRU5ESU5HID0gWydQRU5ESU5HJ107XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gIHRoaXMucXVldWUgPSBbXTtcbiAgdGhpcy5vdXRjb21lID0gdm9pZCAwO1xuICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB7XG4gICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHRoaXMsIHJlc29sdmVyKTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEIHx8XG4gICAgdHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKElOVEVSTkFMKTtcbiAgaWYgKHRoaXMuc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICB2YXIgcmVzb2x2ZXIgPSB0aGlzLnN0YXRlID09PSBGVUxGSUxMRUQgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XG4gICAgdW53cmFwKHByb21pc2UsIHJlc29sdmVyLCB0aGlzLm91dGNvbWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucXVldWUucHVzaChuZXcgUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5mdW5jdGlvbiBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMub25GdWxmaWxsZWQgPSBvbkZ1bGZpbGxlZDtcbiAgICB0aGlzLmNhbGxGdWxmaWxsZWQgPSB0aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZDtcbiAgfVxuICBpZiAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSBvblJlamVjdGVkO1xuICAgIHRoaXMuY2FsbFJlamVjdGVkID0gdGhpcy5vdGhlckNhbGxSZWplY3RlZDtcbiAgfVxufVxuUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlc29sdmUodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vbkZ1bGZpbGxlZCwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGhhbmRsZXJzLnJlamVjdCh0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25SZWplY3RlZCwgdmFsdWUpO1xufTtcblxuZnVuY3Rpb24gdW53cmFwKHByb21pc2UsIGZ1bmMsIHZhbHVlKSB7XG4gIGltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldHVyblZhbHVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gcHJvbWlzZSkge1xuICAgICAgaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGYnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgcmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmhhbmRsZXJzLnJlc29sdmUgPSBmdW5jdGlvbiAoc2VsZiwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKGdldFRoZW4sIHZhbHVlKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHNlbGYsIHJlc3VsdC52YWx1ZSk7XG4gIH1cbiAgdmFyIHRoZW5hYmxlID0gcmVzdWx0LnZhbHVlO1xuXG4gIGlmICh0aGVuYWJsZSkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICBzZWxmLm91dGNvbWUgPSB2YWx1ZTtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBzZWxmLnF1ZXVlW2ldLmNhbGxGdWxmaWxsZWQodmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5oYW5kbGVycy5yZWplY3QgPSBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcbiAgc2VsZi5zdGF0ZSA9IFJFSkVDVEVEO1xuICBzZWxmLm91dGNvbWUgPSBlcnJvcjtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgc2VsZi5xdWV1ZVtpXS5jYWxsUmVqZWN0ZWQoZXJyb3IpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufTtcblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgLy8gTWFrZSBzdXJlIHdlIG9ubHkgYWNjZXNzIHRoZSBhY2Nlc3NvciBvbmNlIGFzIHJlcXVpcmVkIGJ5IHRoZSBzcGVjXG4gIHZhciB0aGVuID0gb2JqICYmIG9iai50aGVuO1xuICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiBhcHB5VGhlbigpIHtcbiAgICAgIHRoZW4uYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKSB7XG4gIC8vIEVpdGhlciBmdWxmaWxsLCByZWplY3Qgb3IgcmVqZWN0IHdpdGggZXJyb3JcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBvbkVycm9yKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlamVjdChzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblN1Y2Nlc3ModmFsdWUpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgaGFuZGxlcnMucmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUb1Vud3JhcCgpIHtcbiAgICB0aGVuYWJsZShvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRyeVRvVW53cmFwKTtcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBvbkVycm9yKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5Q2F0Y2goZnVuYywgdmFsdWUpIHtcbiAgdmFyIG91dCA9IHt9O1xuICB0cnkge1xuICAgIG91dC52YWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgIG91dC5zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBvdXQuc3RhdHVzID0gJ2Vycm9yJztcbiAgICBvdXQudmFsdWUgPSBlO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cblByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5mdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIHRoaXMpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGhhbmRsZXJzLnJlc29sdmUobmV3IHRoaXMoSU5URVJOQUwpLCB2YWx1ZSk7XG59XG5cblByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcbiAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCByZWFzb24pO1xufVxuXG5Qcm9taXNlLmFsbCA9IGFsbDtcbmZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gIH1cblxuICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciByZXNvbHZlZCA9IDA7XG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBhbGxSZXNvbHZlcihpdGVyYWJsZVtpXSwgaSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIGFsbFJlc29sdmVyKHZhbHVlLCBpKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmVGcm9tQWxsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21BbGwob3V0VmFsdWUpIHtcbiAgICAgIHZhbHVlc1tpXSA9IG91dFZhbHVlO1xuICAgICAgaWYgKCsrcmVzb2x2ZWQgPT09IGxlbiAmJiAhY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgdmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5yYWNlID0gcmFjZTtcbmZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG5cbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHJlc29sdmVyKGl0ZXJhYmxlW2ldKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZTtcbiAgZnVuY3Rpb24gcmVzb2x2ZXIodmFsdWUpIHtcbiAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxufSx7XCIxXCI6MX1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xuaWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICBnbG9iYWwuUHJvbWlzZSA9IF9kZXJlcV8oMik7XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7XCIyXCI6Mn1dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIGdldElEQigpIHtcbiAgICAvKiBnbG9iYWwgaW5kZXhlZERCLHdlYmtpdEluZGV4ZWREQixtb3pJbmRleGVkREIsT0luZGV4ZWREQixtc0luZGV4ZWREQiAqL1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWJraXRJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3pJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbW96SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgT0luZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBPSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbXNJbmRleGVkREI7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbnZhciBpZGIgPSBnZXRJREIoKTtcblxuZnVuY3Rpb24gaXNJbmRleGVkREJWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbml0aWFsaXplIEluZGV4ZWREQjsgZmFsbCBiYWNrIHRvIHZlbmRvci1wcmVmaXhlZCB2ZXJzaW9uc1xuICAgICAgICAvLyBpZiBuZWVkZWQuXG4gICAgICAgIGlmICghaWRiIHx8ICFpZGIub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG1pbWljIFBvdWNoREIgaGVyZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgdGVzdCBmb3Igb3BlbkRhdGFiYXNlIGJlY2F1c2UgSUUgTW9iaWxlIGlkZW50aWZpZXMgaXRzZWxmXG4gICAgICAgIC8vIGFzIFNhZmFyaS4gT2ggdGhlIGx1bHouLi5cbiAgICAgICAgdmFyIGlzU2FmYXJpID0gdHlwZW9mIG9wZW5EYXRhYmFzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgLyhTYWZhcml8aVBob25lfGlQYWR8aVBvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9CbGFja0JlcnJ5Ly50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbiAgICAgICAgdmFyIGhhc0ZldGNoID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmIGZldGNoLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlJykgIT09IC0xO1xuXG4gICAgICAgIC8vIFNhZmFyaSA8MTAuMSBkb2VzIG5vdCBtZWV0IG91ciByZXF1aXJlbWVudHMgZm9yIElEQiBzdXBwb3J0XG4gICAgICAgIC8vIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvaXNzdWVzLzU1NzIpLlxuICAgICAgICAvLyBTYWZhcmkgMTAuMSBzaGlwcGVkIHdpdGggZmV0Y2gsIHdlIGNhbiB1c2UgdGhhdCB0byBkZXRlY3QgaXQuXG4gICAgICAgIC8vIE5vdGU6IHRoaXMgY3JlYXRlcyBpc3N1ZXMgd2l0aCBgd2luZG93LmZldGNoYCBwb2x5ZmlsbHMgYW5kXG4gICAgICAgIC8vIG92ZXJyaWRlczsgc2VlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UvaXNzdWVzLzg1NlxuICAgICAgICByZXR1cm4gKCFpc1NhZmFyaSB8fCBoYXNGZXRjaCkgJiYgdHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgLy8gc29tZSBvdXRkYXRlZCBpbXBsZW1lbnRhdGlvbnMgb2YgSURCIHRoYXQgYXBwZWFyIG9uIFNhbXN1bmdcbiAgICAgICAgLy8gYW5kIEhUQyBBbmRyb2lkIGRldmljZXMgPDQuNCBhcmUgbWlzc2luZyBJREJLZXlSYW5nZVxuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL2lzc3Vlcy8xMjhcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMjcyXG4gICAgICAgIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbi8vIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuLy8gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBuYXRpdmUgQmxvYiBjb25zdHJ1Y3Rvci4gKGkuZS5cbi8vIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuZnVuY3Rpb24gY3JlYXRlQmxvYihwYXJ0cywgcHJvcGVydGllcykge1xuICAgIC8qIGdsb2JhbCBCbG9iQnVpbGRlcixNU0Jsb2JCdWlsZGVyLE1vekJsb2JCdWlsZGVyLFdlYktpdEJsb2JCdWlsZGVyICovXG4gICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSAhPT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIEJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDogdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogV2ViS2l0QmxvYkJ1aWxkZXI7XG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQocGFydHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IocHJvcGVydGllcy50eXBlKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgaXMgQ29tbW9uSlMgYmVjYXVzZSBsaWUgaXMgYW4gZXh0ZXJuYWwgZGVwZW5kZW5jeSwgc28gUm9sbHVwXG4vLyBjYW4ganVzdCBpZ25vcmUgaXQuXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gSW4gdGhlIFwibm9wcm9taXNlc1wiIGJ1aWxkIHRoaXMgd2lsbCBqdXN0IHRocm93IGlmIHlvdSBkb24ndCBoYXZlXG4gICAgLy8gYSBnbG9iYWwgcHJvbWlzZSBvYmplY3QsIGJ1dCBpdCB3b3VsZCB0aHJvdyBhbnl3YXkgbGF0ZXIuXG4gICAgX2RlcmVxXygzKTtcbn1cbnZhciBQcm9taXNlJDEgPSBQcm9taXNlO1xuXG5mdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXShlcnJvckNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAgICAvLyBDYXN0IHRoZSBrZXkgdG8gYSBzdHJpbmcsIGFzIHRoYXQncyBhbGwgd2UgY2FuIHNldCBhcyBhIGtleS5cbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGtleSArICcgdXNlZCBhcyBhIGtleSwgYnV0IGl0IGlzIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2FsbGJhY2soKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgfVxufVxuXG4vLyBTb21lIGNvZGUgb3JpZ2luYWxseSBmcm9tIGFzeW5jX3N0b3JhZ2UuanMgaW5cbi8vIFtHYWlhXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS1iMmcvZ2FpYSkuXG5cbnZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2xvY2FsLWZvcmFnZS1kZXRlY3QtYmxvYi1zdXBwb3J0JztcbnZhciBzdXBwb3J0c0Jsb2JzID0gdm9pZCAwO1xudmFyIGRiQ29udGV4dHMgPSB7fTtcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIFRyYW5zYWN0aW9uIE1vZGVzXG52YXIgUkVBRF9PTkxZID0gJ3JlYWRvbmx5JztcbnZhciBSRUFEX1dSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbi8vIFRyYW5zZm9ybSBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYXJyYXkgYnVmZmVyLCBiZWNhdXNlIG90aGVyd2lzZVxuLy8gd2VpcmQgc3R1ZmYgaGFwcGVucyB3aGVuIHlvdSB0cnkgdG8gd29yayB3aXRoIHRoZSBiaW5hcnkgc3RyaW5nIGRpcmVjdGx5LlxuLy8gSXQgaXMga25vd24uXG4vLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG5mdW5jdGlvbiBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihiaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYmluLmxlbmd0aDtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCk7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1Zjtcbn1cblxuLy9cbi8vIEJsb2JzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGFsbCB2ZXJzaW9ucyBvZiBJbmRleGVkREIsIG5vdGFibHlcbi8vIENocm9tZSA8MzcgYW5kIEFuZHJvaWQgPDUuIEluIHRob3NlIHZlcnNpb25zLCBzdG9yaW5nIGEgYmxvYiB3aWxsIHRocm93LlxuLy9cbi8vIFZhcmlvdXMgb3RoZXIgYmxvYiBidWdzIGV4aXN0IGluIENocm9tZSB2MzctNDIgKGluY2x1c2l2ZSkuXG4vLyBEZXRlY3RpbmcgdGhlbSBpcyBleHBlbnNpdmUgYW5kIGNvbmZ1c2luZyB0byB1c2VycywgYW5kIENocm9tZSAzNy00MlxuLy8gaXMgYXQgdmVyeSBsb3cgdXNhZ2Ugd29ybGR3aWRlLCBzbyB3ZSBkbyBhIGhhY2t5IHVzZXJBZ2VudCBjaGVjayBpbnN0ZWFkLlxuLy9cbi8vIGNvbnRlbnQtdHlwZSBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00MDgxMjBcbi8vIDQwNCBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc5MTZcbi8vIEZpbGVSZWFkZXIgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3ODM2XG4vL1xuLy8gQ29kZSBib3Jyb3dlZCBmcm9tIFBvdWNoREIuIFNlZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3VjaGRiL3BvdWNoZGIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvbm9kZV9tb2R1bGVzL3BvdWNoZGItYWRhcHRlci1pZGIvc3JjL2Jsb2JTdXBwb3J0LmpzXG4vL1xuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgdHhuID0gaWRiLnRyYW5zYWN0aW9uKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUsIFJFQURfV1JJVEUpO1xuICAgICAgICB2YXIgYmxvYiA9IGNyZWF0ZUJsb2IoWycnXSk7XG4gICAgICAgIHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiwgJ2tleScpO1xuXG4gICAgICAgIHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgICAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHhuLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZENocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRFZGdlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pO1xuICAgICAgICAgICAgLy8gTVMgRWRnZSBwcmV0ZW5kcyB0byBiZSBDaHJvbWUgNDI6XG4gICAgICAgICAgICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2hoODY5MzAxJTI4dj12cy44NSUyOS5hc3B4XG4gICAgICAgICAgICByZXNvbHZlKG1hdGNoZWRFZGdlIHx8ICFtYXRjaGVkQ2hyb21lIHx8IHBhcnNlSW50KG1hdGNoZWRDaHJvbWVbMV0sIDEwKSA+PSA0Myk7XG4gICAgICAgIH07XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZXJyb3IsIHNvIGFzc3VtZSB1bnN1cHBvcnRlZFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydChpZGIpIHtcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQmxvYnMgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoc3VwcG9ydHNCbG9icyk7XG4gICAgfVxuICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3VwcG9ydHNCbG9icyA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNCbG9icztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2RlZmVyUmVhZGluZXNzKGRiSW5mbykge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIENyZWF0ZSBhIGRlZmVycmVkIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IHt9O1xuXG4gICAgZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuXG4gICAgLy8gRW5xdWV1ZSB0aGUgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucHVzaChkZWZlcnJlZE9wZXJhdGlvbik7XG5cbiAgICAvLyBDaGFpbiBpdHMgcHJvbWlzZSB0byB0aGUgZGF0YWJhc2UgcmVhZGluZXNzLlxuICAgIGlmICghZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGJDb250ZXh0LmRiUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfYWR2YW5jZVJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgIHZhciBkZWZlcnJlZE9wZXJhdGlvbiA9IGRiQ29udGV4dC5kZWZlcnJlZE9wZXJhdGlvbnMucG9wKCk7XG5cbiAgICAvLyBSZXNvbHZlIGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVqZWN0IGl0cyBwcm9taXNlICh3aGljaCBpcyBwYXJ0IG9mIHRoZSBkYXRhYmFzZSByZWFkaW5lc3NcbiAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgaWYgKGRlZmVycmVkT3BlcmF0aW9uKSB7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdChlcnIpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdXBncmFkZU5lZWRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXSB8fCBjcmVhdGVEYkNvbnRleHQoKTtcblxuICAgICAgICBpZiAoZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pO1xuICAgICAgICAgICAgICAgIGRiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShkYkluZm8uZGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRiQXJncyA9IFtkYkluZm8ubmFtZV07XG5cbiAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIGRiQXJncy5wdXNoKGRiSW5mby52ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVucmVxID0gaWRiLm9wZW4uYXBwbHkoaWRiLCBkYkFyZ3MpO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRiID0gb3BlbnJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9sZFZlcnNpb24gPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgd2hlbiBzdXBwb3J0IGZvciBibG9iIHNoaW1zIHdhcyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXgubmFtZSA9PT0gJ0NvbnN0cmFpbnRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGRhdGFiYXNlIFwiJyArIGRiSW5mby5uYW1lICsgJ1wiJyArICcgaGFzIGJlZW4gdXBncmFkZWQgZnJvbSB2ZXJzaW9uICcgKyBlLm9sZFZlcnNpb24gKyAnIHRvIHZlcnNpb24gJyArIGUubmV3VmVyc2lvbiArICcsIGJ1dCB0aGUgc3RvcmFnZSBcIicgKyBkYkluZm8uc3RvcmVOYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbnJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJlamVjdChvcGVucmVxLmVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBvcGVucmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUob3BlbnJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBkZWZhdWx0VmVyc2lvbikge1xuICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc05ld1N0b3JlID0gIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgdmFyIGlzVXBncmFkZSA9IGRiSW5mby52ZXJzaW9uID4gZGJJbmZvLmRiLnZlcnNpb247XG5cbiAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gaXMgbm90IHRoZSBkZWZhdWx0IG9uZVxuICAgICAgICAvLyB0aGVuIHdhcm4gZm9yIGltcG9zc2libGUgZG93bmdyYWRlLlxuICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxpZ24gdGhlIHZlcnNpb25zIHRvIHByZXZlbnQgZXJyb3JzLlxuICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgbmV3IHRoZW4gaW5jcmVtZW50IHRoZSB2ZXJzaW9uIChpZiBuZWVkZWQpLlxuICAgICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhbiBcInVwZ3JhZGVuZWVkZWRcIiBldmVudCB3aGljaCBpcyByZXF1aXJlZFxuICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgaWYgKGlzTmV3U3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbmNWZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgaWYgKGluY1ZlcnNpb24gPiBkYkluZm8udmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZW5jb2RlIGEgYmxvYiBmb3IgaW5kZXhlZGRiIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0IGJsb2JzXG5mdW5jdGlvbiBfZW5jb2RlQmxvYihibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIF9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlNjQsXG4gICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgICB9KTtcbn1cblxuLy8gZGVjb2RlIGFuIGVuY29kZWQgYmxvYlxuZnVuY3Rpb24gX2RlY29kZUJsb2IoZW5jb2RlZEJsb2IpIHtcbiAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2FycmF5QnVmZl0sIHsgdHlwZTogZW5jb2RlZEJsb2IudHlwZSB9KTtcbn1cblxuLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG5mdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I7XG59XG5cbi8vIFNwZWNpYWxpemUgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIGJ5IG1ha2luZyBpdCBkZXBlbmRlbnRcbi8vIG9uIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbnMuIFRodXMsIHRoZSBkcml2ZXIgd2lsbCBiZSBhY3R1YWxseVxuLy8gcmVhZHkgd2hlbiBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQgKGRlZmF1bHQpICphbmQqIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4vLyBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZSAoaW5pdGlhdGVkIGJ5IHNvbWUgb3RoZXIgaW5zdGFuY2VzKS5cbmZ1bmN0aW9uIF9mdWxseVJlYWR5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLl9pbml0UmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbi8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbi8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcblxuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICBpZiAoZm9yYWdlLl9kYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGJJbmZvLmRiID0gbnVsbDtcblxuICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbykpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGRiIHdhcyB1cGdyYWRlZFxuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgfVxuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG4vLyBGRiBkb2Vzbid0IGxpa2UgUHJvbWlzZXMgKG1pY3JvLXRhc2tzKSBhbmQgSUREQiBzdG9yZSBvcGVyYXRpb25zLFxuLy8gc28gd2UgaGF2ZSB0byBkbyBpdCB3aXRoIGNhbGxiYWNrc1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcykge1xuICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0cmllcyA9IDE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHR4ID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsIG1vZGUpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSkgJiYgZGJJbmZvLnZlcnNpb24gPD0gZGJJbmZvLmRiLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RyeVJlY29ubmVjdChkYkluZm8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVtcImNhdGNoXCJdKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUnVubmluZyBsb2NhbEZvcmFnZXMgc2hhcmluZyBhIGRhdGFiYXNlLlxuICAgICAgICBmb3JhZ2VzOiBbXSxcbiAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICBkYjogbnVsbCxcbiAgICAgICAgLy8gRGF0YWJhc2UgcmVhZGluZXNzIChwcm9taXNlKS5cbiAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgLy8gRGVmZXJyZWQgb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uczogW11cbiAgICB9O1xufVxuXG4vLyBPcGVuIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIC4uLm9yIGNyZWF0ZSBhIG5ldyBjb250ZXh0LlxuICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgIGRiQ29udGV4dCA9IGNyZWF0ZURiQ29udGV4dCgpO1xuICAgICAgICAvLyBSZWdpc3RlciB0aGUgbmV3IGNvbnRleHQgaW4gdGhlIGdsb2JhbCBjb250YWluZXIuXG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGl0c2VsZiBhcyBhIHJ1bm5pbmcgbG9jYWxGb3JhZ2UgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lhbGl6ZWQgb25lLlxuICAgIGlmICghc2VsZi5faW5pdFJlYWR5KSB7XG4gICAgICAgIHNlbGYuX2luaXRSZWFkeSA9IHNlbGYucmVhZHk7XG4gICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgaW5pdGlhbGl6YXRpb24gc3RhdGVzIG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG5cbiAgICBmdW5jdGlvbiBpZ25vcmVFcnJvcnMoKSB7XG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBlcnJvcnMgaGVyZSxcbiAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRiQ29udGV4dC5mb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBkYkNvbnRleHQuZm9yYWdlc1tqXTtcbiAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXMuc2xpY2UoMCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgLy8gYWxsIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICByZXR1cm4gUHJvbWlzZSQxLmFsbChpbml0UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGI7XG4gICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgc2VsZi5fZGVmYXVsdENvbmZpZy52ZXJzaW9uKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmb3JhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1trXTtcbiAgICAgICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IGRiSW5mby5kYjtcbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gZGJJbmZvLnZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbmZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGl0ZXJhdG9yIGNhbGxiYWNrIHJldHVybnMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG5vbi1gdW5kZWZpbmVkYCkgdmFsdWUsIHRoZW4gd2Ugc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVyYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGJJbmZvO1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydChkYkluZm8uZGIpLnRoZW4oZnVuY3Rpb24gKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW5jb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlYXNvbiB3ZSBkb24ndCBfc2F2ZV8gbnVsbCBpcyBiZWNhdXNlIElFIDEwIGRvZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHN1cHBvcnQgc2F2aW5nIHRoZSBgbnVsbGAgdHlwZSBpbiBJbmRleGVkREIuIEhvd1xuICAgICAgICAgICAgICAgICAgICAvLyBpcm9uaWMsIGdpdmVuIHRoZSBidWcgYmVsb3chXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzE2MVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byB1bmRlZmluZWQgc28gdGhlIHZhbHVlIHBhc3NlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2svcHJvbWlzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IG9uZSB3b3VsZCBnZXQgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgZ2V0SXRlbSgpYCBsYXRlci4gVGhpcyBsZWFkcyB0byBzb21lIHdlaXJkbmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKHNldEl0ZW0oJ2ZvbycsIHVuZGVmaW5lZCkgd2lsbCByZXR1cm4gYG51bGxgKSwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBteSBmYXVsdCBsb2NhbFN0b3JhZ2UgaXMgb3VyIGJhc2VsaW5lIGFuZCB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBhIEdydW50IHRhc2sgdG8gbWFrZSB0aGlzIHNhZmUgZm9yIElFIGFuZCBzb21lXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb25zIG9mIEFuZHJvaWQgKGluY2x1ZGluZyB0aG9zZSB1c2VkIGJ5IENvcmRvdmEpLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxseSBJRSB3b24ndCBsaWtlIGAuZGVsZXRlKClgIGFuZCB3aWxsIGluc2lzdCBvblxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBgWydkZWxldGUnXSgpYCwgYnV0IHdlIGhhdmUgYSBidWlsZCBzdGVwIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4ZXMgdGhpcyBmb3IgdXMgbm93LlxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmVbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2lsbCBiZSBhbHNvIGJlIGFib3J0ZWQgaWYgd2UndmUgZXhjZWVkZWQgb3VyIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5KG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkdmFuY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZXJlIHdlcmVuJ3QgZW5vdWdoIGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdGhlIGZpcnN0IGtleSwgcmV0dXJuIGl0IGlmIHRoYXQncyB3aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YW50ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFzayB0aGUgY3Vyc29yIHRvIHNraXAgYWhlYWQgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGhlcmUsIHdlJ3ZlIGdvdCB0aGUgbnRoIGtleS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2Uob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlzQ3VycmVudERiID0gb3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUgJiYgc2VsZi5fZGJJbmZvLmRiO1xuXG4gICAgICAgIHZhciBkYlByb21pc2UgPSBpc0N1cnJlbnREYiA/IFByb21pc2UkMS5yZXNvbHZlKHNlbGYuX2RiSW5mby5kYikgOiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wREJQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIuZGVsZXRlRGF0YWJhc2Uob3B0aW9ucy5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IHJlcS5vbmJsb2NrZWQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BEQlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoX2ZvcmFnZS5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMob3B0aW9ucy5zdG9yZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3VmVyc2lvbiA9IGRiLnZlcnNpb24gKyAxO1xuXG4gICAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8udmVyc2lvbiA9IG5ld1ZlcnNpb247XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRyb3BPYmplY3RQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIub3BlbihvcHRpb25zLm5hbWUsIG5ld1ZlcnNpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmRlbGV0ZU9iamVjdFN0b3JlKG9wdGlvbnMuc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkcm9wT2JqZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZTIgPSBmb3JhZ2VzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZvcmFnZTIuX2RiSW5mby5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoX2ZvcmFnZTIuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgYXN5bmNTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICdhc3luY1N0b3JhZ2UnLFxuICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlLFxuICAgIF9zdXBwb3J0OiBpc0luZGV4ZWREQlZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSxcbiAgICBnZXRJdGVtOiBnZXRJdGVtLFxuICAgIHNldEl0ZW06IHNldEl0ZW0sXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAga2V5OiBrZXksXG4gICAga2V5czoga2V5cyxcbiAgICBkcm9wSW5zdGFuY2U6IGRyb3BJbnN0YW5jZVxufTtcblxuZnVuY3Rpb24gaXNXZWJTUUxWYWxpZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9wZW5EYXRhYmFzZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLy8gU2FkbHksIHRoZSBiZXN0IHdheSB0byBzYXZlIGJpbmFyeSBkYXRhIGluIFdlYlNRTC9sb2NhbFN0b3JhZ2UgaXMgc2VyaWFsaXppbmdcbi8vIGl0IHRvIEJhc2U2NCwgc28gdGhpcyBpcyBob3cgd2Ugc3RvcmUgaXQgdG8gcHJldmVudCB2ZXJ5IHN0cmFuZ2UgZXJyb3JzIHdpdGggbGVzc1xuLy8gdmVyYm9zZSB3YXlzIG9mIGJpbmFyeSA8LT4gc3RyaW5nIGRhdGEgc3RvcmFnZS5cbnZhciBCQVNFX0NIQVJTID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG52YXIgQkxPQl9UWVBFX1BSRUZJWCA9ICd+fmxvY2FsX2ZvcmFnZV90eXBlfic7XG52YXIgQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCA9IC9efn5sb2NhbF9mb3JhZ2VfdHlwZX4oW15+XSspfi87XG5cbnZhciBTRVJJQUxJWkVEX01BUktFUiA9ICdfX2xmc2NfXzonO1xudmFyIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFNFUklBTElaRURfTUFSS0VSLmxlbmd0aDtcblxuLy8gT01HIHRoZSBzZXJpYWxpemF0aW9ucyFcbnZhciBUWVBFX0FSUkFZQlVGRkVSID0gJ2FyYmYnO1xudmFyIFRZUEVfQkxPQiA9ICdibG9iJztcbnZhciBUWVBFX0lOVDhBUlJBWSA9ICdzaTA4JztcbnZhciBUWVBFX1VJTlQ4QVJSQVkgPSAndWkwOCc7XG52YXIgVFlQRV9VSU5UOENMQU1QRURBUlJBWSA9ICd1aWM4JztcbnZhciBUWVBFX0lOVDE2QVJSQVkgPSAnc2kxNic7XG52YXIgVFlQRV9JTlQzMkFSUkFZID0gJ3NpMzInO1xudmFyIFRZUEVfVUlOVDE2QVJSQVkgPSAndXIxNic7XG52YXIgVFlQRV9VSU5UMzJBUlJBWSA9ICd1aTMyJztcbnZhciBUWVBFX0ZMT0FUMzJBUlJBWSA9ICdmbDMyJztcbnZhciBUWVBFX0ZMT0FUNjRBUlJBWSA9ICdmbDY0JztcbnZhciBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCArIFRZUEVfQVJSQVlCVUZGRVIubGVuZ3RoO1xuXG52YXIgdG9TdHJpbmckMSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpIHtcbiAgICAvLyBGaWxsIHRoZSBzdHJpbmcgaW50byBhIEFycmF5QnVmZmVyLlxuICAgIHZhciBidWZmZXJMZW5ndGggPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAqIDAuNzU7XG4gICAgdmFyIGxlbiA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBpO1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMl0gPT09ICc9Jykge1xuICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCk7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBlbmNvZGVkMSA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2ldKTtcbiAgICAgICAgZW5jb2RlZDIgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgMV0pO1xuICAgICAgICBlbmNvZGVkMyA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAyXSk7XG4gICAgICAgIGVuY29kZWQ0ID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDNdKTtcblxuICAgICAgICAvKmpzbGludCBiaXR3aXNlOiB0cnVlICovXG4gICAgICAgIGJ5dGVzW3ArK10gPSBlbmNvZGVkMSA8PCAyIHwgZW5jb2RlZDIgPj4gNDtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMiAmIDE1KSA8PCA0IHwgZW5jb2RlZDMgPj4gMjtcbiAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMyAmIDMpIDw8IDYgfCBlbmNvZGVkNCAmIDYzO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufVxuXG4vLyBDb252ZXJ0cyBhIGJ1ZmZlciB0byBhIHN0cmluZyB0byBzdG9yZSwgc2VyaWFsaXplZCwgaW4gdGhlIGJhY2tlbmRcbi8vIHN0b3JhZ2UgbGlicmFyeS5cbmZ1bmN0aW9uIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikge1xuICAgIC8vIGJhc2U2NC1hcnJheWJ1ZmZlclxuICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGJhc2U2NFN0cmluZyA9ICcnO1xuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbYnl0ZXNbaV0gPj4gMl07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTWyhieXRlc1tpXSAmIDMpIDw8IDQgfCBieXRlc1tpICsgMV0gPj4gNF07XG4gICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTWyhieXRlc1tpICsgMV0gJiAxNSkgPDwgMiB8IGJ5dGVzW2kgKyAyXSA+PiA2XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAyKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDEpICsgJz0nO1xuICAgIH0gZWxzZSBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMSkge1xuICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAyKSArICc9PSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NFN0cmluZztcbn1cblxuLy8gU2VyaWFsaXplIGEgdmFsdWUsIGFmdGVyd2FyZHMgZXhlY3V0aW5nIGEgY2FsbGJhY2sgKHdoaWNoIHVzdWFsbHlcbi8vIGluc3RydWN0cyB0aGUgYHNldEl0ZW0oKWAgY2FsbGJhY2svcHJvbWlzZSB0byBiZSBleGVjdXRlZCkuIFRoaXMgaXMgaG93XG4vLyB3ZSBzdG9yZSBiaW5hcnkgZGF0YSB3aXRoIGxvY2FsU3RvcmFnZS5cbmZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gJyc7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlVHlwZSA9IHRvU3RyaW5nJDEuY2FsbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2Fubm90IHVzZSBgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcmAgb3Igc3VjaCBoZXJlLCBhcyB0aGVzZVxuICAgIC8vIGNoZWNrcyBmYWlsIHdoZW4gcnVubmluZyB0aGUgdGVzdHMgdXNpbmcgY2FzcGVyLmpzLi4uXG4gICAgLy9cbiAgICAvLyBUT0RPOiBTZWUgd2h5IHRob3NlIHRlc3RzIGZhaWwgYW5kIHVzZSBhIGJldHRlciBzb2x1dGlvbi5cbiAgICBpZiAodmFsdWUgJiYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyB8fCB2YWx1ZS5idWZmZXIgJiYgdG9TdHJpbmckMS5jYWxsKHZhbHVlLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmluYXJ5IGFycmF5cyB0byBhIHN0cmluZyBhbmQgcHJlZml4IHRoZSBzdHJpbmcgd2l0aFxuICAgICAgICAvLyBhIHNwZWNpYWwgbWFya2VyLlxuICAgICAgICB2YXIgYnVmZmVyO1xuICAgICAgICB2YXIgbWFya2VyID0gU0VSSUFMSVpFRF9NQVJLRVI7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfQVJSQVlCVUZGRVI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIgPSB2YWx1ZS5idWZmZXI7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UOEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDE2QXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfRkxPQVQzMkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfRkxPQVQ2NEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgdHlwZSBmb3IgQmluYXJ5QXJyYXknKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhtYXJrZXIgKyBidWZmZXJUb1N0cmluZyhidWZmZXIpKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgIC8vIENvbnZlciB0aGUgYmxvYiB0byBhIGJpbmFyeUFycmF5IGFuZCB0aGVuIHRvIGEgc3RyaW5nLlxuICAgICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBwcmVmaXggZm9yIHRoZSBibG9iIHR5cGUuXG4gICAgICAgICAgICB2YXIgc3RyID0gQkxPQl9UWVBFX1BSRUZJWCArIHZhbHVlLnR5cGUgKyAnficgKyBidWZmZXJUb1N0cmluZyh0aGlzLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKFNFUklBTElaRURfTUFSS0VSICsgVFlQRV9CTE9CICsgc3RyKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGNvbnZlcnQgdmFsdWUgaW50byBhIEpTT04gc3RyaW5nOiBcIiwgdmFsdWUpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRGVzZXJpYWxpemUgZGF0YSB3ZSd2ZSBpbnNlcnRlZCBpbnRvIGEgdmFsdWUgY29sdW1uL2ZpZWxkLiBXZSBwbGFjZVxuLy8gc3BlY2lhbCBtYXJrZXJzIGludG8gb3VyIHN0cmluZ3MgdG8gbWFyayB0aGVtIGFzIGVuY29kZWQ7IHRoaXMgaXNuJ3Rcbi8vIGFzIG5pY2UgYXMgYSBtZXRhIGZpZWxkLCBidXQgaXQncyB0aGUgb25seSBzYW5lIHRoaW5nIHdlIGNhbiBkbyB3aGlsc3Rcbi8vIGtlZXBpbmcgbG9jYWxTdG9yYWdlIHN1cHBvcnQgaW50YWN0LlxuLy9cbi8vIE9mdGVudGltZXMgdGhpcyB3aWxsIGp1c3QgZGVzZXJpYWxpemUgSlNPTiBjb250ZW50LCBidXQgaWYgd2UgaGF2ZSBhXG4vLyBzcGVjaWFsIG1hcmtlciAoU0VSSUFMSVpFRF9NQVJLRVIsIGRlZmluZWQgYWJvdmUpLCB3ZSB3aWxsIGV4dHJhY3Rcbi8vIHNvbWUga2luZCBvZiBhcnJheWJ1ZmZlci9iaW5hcnkgZGF0YS90eXBlZCBhcnJheSBvdXQgb2YgdGhlIHN0cmluZy5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCBtYXJrZWQgdGhpcyBzdHJpbmcgYXMgYmVpbmcgc3BlY2lhbGx5IHNlcmlhbGl6ZWQgKGkuZS5cbiAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiBzZXJpYWxpemVkIEpTT04pLCB3ZSBjYW4ganVzdCByZXR1cm4gaXQgYW5kIGJlXG4gICAgLy8gZG9uZSB3aXRoIGl0LlxuICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMCwgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKSAhPT0gU0VSSUFMSVpFRF9NQVJLRVIpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBkZWFscyB3aXRoIGRlc2VyaWFsaXppbmcgc29tZSBraW5kIG9mIEJsb2Igb3JcbiAgICAvLyBUeXBlZEFycmF5LiBGaXJzdCB3ZSBzZXBhcmF0ZSBvdXQgdGhlIHR5cGUgb2YgZGF0YSB3ZSdyZSBkZWFsaW5nXG4gICAgLy8gd2l0aCBmcm9tIHRoZSBkYXRhIGl0c2VsZi5cbiAgICB2YXIgc2VyaWFsaXplZFN0cmluZyA9IHZhbHVlLnN1YnN0cmluZyhUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCk7XG4gICAgdmFyIHR5cGUgPSB2YWx1ZS5zdWJzdHJpbmcoU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RILCBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCk7XG5cbiAgICB2YXIgYmxvYlR5cGU7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgYmxvYiB0eXBlIHNlcmlhbGl6YXRpb24gc3RyYXRlZ3kuXG4gICAgLy8gREJzIGNyZWF0ZWQgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBsb2NhbEZvcmFnZSB3aWxsIHNpbXBseSBub3QgaGF2ZSB0aGUgYmxvYiB0eXBlLlxuICAgIGlmICh0eXBlID09PSBUWVBFX0JMT0IgJiYgQkxPQl9UWVBFX1BSRUZJWF9SRUdFWC50ZXN0KHNlcmlhbGl6ZWRTdHJpbmcpKSB7XG4gICAgICAgIHZhciBtYXRjaGVyID0gc2VyaWFsaXplZFN0cmluZy5tYXRjaChCTE9CX1RZUEVfUFJFRklYX1JFR0VYKTtcbiAgICAgICAgYmxvYlR5cGUgPSBtYXRjaGVyWzFdO1xuICAgICAgICBzZXJpYWxpemVkU3RyaW5nID0gc2VyaWFsaXplZFN0cmluZy5zdWJzdHJpbmcobWF0Y2hlclswXS5sZW5ndGgpO1xuICAgIH1cbiAgICB2YXIgYnVmZmVyID0gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZyk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIHJpZ2h0IHR5cGUgYmFzZWQgb24gdGhlIGNvZGUvdHlwZSBzZXQgZHVyaW5nXG4gICAgLy8gc2VyaWFsaXphdGlvbi5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBUWVBFX0FSUkFZQlVGRkVSOlxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgY2FzZSBUWVBFX0JMT0I6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBibG9iVHlwZSB9KTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDhBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UOENMQU1QRURBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0lOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfRkxPQVQ2NEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rb3duIHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG59XG5cbnZhciBsb2NhbGZvcmFnZVNlcmlhbGl6ZXIgPSB7XG4gICAgc2VyaWFsaXplOiBzZXJpYWxpemUsXG4gICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplLFxuICAgIHN0cmluZ1RvQnVmZmVyOiBzdHJpbmdUb0J1ZmZlcixcbiAgICBidWZmZXJUb1N0cmluZzogYnVmZmVyVG9TdHJpbmdcbn07XG5cbi8qXG4gKiBJbmNsdWRlcyBjb2RlIGZyb206XG4gKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgIHQuZXhlY3V0ZVNxbCgnQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIGtleSB1bmlxdWUsIHZhbHVlKScsIFtdLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG59XG5cbi8vIE9wZW4gdGhlIFdlYlNRTCBkYXRhYmFzZSAoYXV0b21hdGljYWxseSBjcmVhdGVzIG9uZSBpZiBvbmUgZGlkbid0XG4vLyBwcmV2aW91c2x5IGV4aXN0KSwgdXNpbmcgYW55IG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2UkMShvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7XG4gICAgICAgIGRiOiBudWxsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gdHlwZW9mIG9wdGlvbnNbaV0gIT09ICdzdHJpbmcnID8gb3B0aW9uc1tpXS50b1N0cmluZygpIDogb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYkluZm9Qcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIE9wZW4gdGhlIGRhdGFiYXNlOyB0aGUgb3BlbkRhdGFiYXNlIEFQSSB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gY3JlYXRlIGl0IGZvciB1cyBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGJJbmZvLmRiID0gb3BlbkRhdGFiYXNlKGRiSW5mby5uYW1lLCBTdHJpbmcoZGJJbmZvLnZlcnNpb24pLCBkYkluZm8uZGVzY3JpcHRpb24sIGRiSW5mby5zaXplKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBvdXIga2V5L3ZhbHVlIHRhYmxlIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZGJJbmZvLnNlcmlhbGl6ZXIgPSBsb2NhbGZvcmFnZVNlcmlhbGl6ZXI7XG4gICAgcmV0dXJuIGRiSW5mb1Byb21pc2U7XG59XG5cbmZ1bmN0aW9uIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCBzcWxTdGF0ZW1lbnQsIGFyZ3MsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gZXJyb3IuU1lOVEFYX0VSUikge1xuICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgJyArIFwiV0hFUkUgdHlwZT0ndGFibGUnIEFORCBuYW1lID0gP1wiLCBbZGJJbmZvLnN0b3JlTmFtZV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0YWJsZSBpcyBtaXNzaW5nICh3YXMgZGVsZXRlZClcbiAgICAgICAgICAgICAgICAgICAgLy8gcmUtY3JlYXRlIGl0IHRhYmxlIGFuZCByZXRyeVxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSwgZXJyb3JDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW0kMShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgKiBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBrZXkgPSA/IExJTUlUIDEnLCBba2V5XSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50IHdlIG5lZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gdW5wYWNrLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdGUkMShpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuXG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93cyA9IHJlc3VsdHMucm93cztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHJvd3MubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcm93cy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBpdGVtLmtleSwgaSArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2b2lkKDApIHByZXZlbnRzIHByb2JsZW1zIHdpdGggcmVkZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgdW5kZWZpbmVkYC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gX3NldEl0ZW0oa2V5LCB2YWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9jYWxTdG9yYWdlIEFQSSBkb2Vzbid0IHJldHVybiB1bmRlZmluZWQgdmFsdWVzIGluIGFuXG4gICAgICAgICAgICAvLyBcImV4cGVjdGVkXCIgd2F5LCBzbyB1bmRlZmluZWQgaXMgYWx3YXlzIGNhc3QgdG8gbnVsbCBpbiBhbGxcbiAgICAgICAgICAgIC8vIGRyaXZlcnMuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdJTlNFUlQgT1IgUkVQTEFDRSBJTlRPICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyAnICsgJyhrZXksIHZhbHVlKSBWQUxVRVMgKD8sID8pJywgW2tleSwgdmFsdWVdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdHJhbnNhY3Rpb24gZmFpbGVkOyBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gc2VlIGlmIGl0J3MgYSBxdW90YSBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcWxFcnJvci5jb2RlID09PSBzcWxFcnJvci5RVU9UQV9FUlIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSByZWplY3QgdGhlIGNhbGxiYWNrIG91dHJpZ2h0IGZvciBub3csIGJ1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgd29ydGggdHJ5aW5nIHRvIHJlLXJ1biB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXZlbiBpZiB0aGUgdXNlciBhY2NlcHRzIHRoZSBwcm9tcHQgdG8gdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9yZSBzdG9yYWdlIG9uIFNhZmFyaSwgdGhpcyBlcnJvciB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmUgY2FsbGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIHJlLXJ1biB0aGUgdHJhbnNhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJpZXNMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF9zZXRJdGVtLmFwcGx5KHNlbGYsIFtrZXksIG9yaWdpbmFsVmFsdWUsIGNhbGxiYWNrLCByZXRyaWVzTGVmdCAtIDFdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHNldEl0ZW0kMShrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBfc2V0SXRlbS5hcHBseSh0aGlzLCBba2V5LCB2YWx1ZSwgY2FsbGJhY2ssIDFdKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0RFTEVURSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBrZXkgPSA/JywgW2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIERlbGV0ZXMgZXZlcnkgaXRlbSBpbiB0aGUgdGFibGUuXG4vLyBUT0RPOiBGaW5kIG91dCBpZiB0aGlzIHJlc2V0cyB0aGUgQVVUT19JTkNSRU1FTlQgbnVtYmVyLlxuZnVuY3Rpb24gY2xlYXIkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0RFTEVURSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRG9lcyBhIHNpbXBsZSBgQ09VTlQoa2V5KWAgdG8gZ2V0IHRoZSBudW1iZXIgb2YgaXRlbXMgc3RvcmVkIGluXG4vLyBsb2NhbEZvcmFnZS5cbmZ1bmN0aW9uIGxlbmd0aCQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIC8vIEFoaGgsIFNRTCBtYWtlcyB0aGlzIG9uZSBzb29vb29vIGVhc3kuXG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1QgQ09VTlQoa2V5KSBhcyBjIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLml0ZW0oMCkuYztcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJldHVybiB0aGUga2V5IGxvY2F0ZWQgYXQga2V5IGluZGV4IFg7IGVzc2VudGlhbGx5IGdldHMgdGhlIGtleSBmcm9tIGFcbi8vIGBXSEVSRSBpZCA9ID9gLiBUaGlzIGlzIHRoZSBtb3N0IGVmZmljaWVudCB3YXkgSSBjYW4gdGhpbmsgdG8gaW1wbGVtZW50XG4vLyB0aGlzIHJhcmVseS11c2VkIChpbiBteSBleHBlcmllbmNlKSBwYXJ0IG9mIHRoZSBBUEksIGJ1dCBpdCBjYW4gc2VlbVxuLy8gaW5jb25zaXN0ZW50LCBiZWNhdXNlIHdlIGRvIGBJTlNFUlQgT1IgUkVQTEFDRSBJTlRPYCBvbiBgc2V0SXRlbSgpYCwgc29cbi8vIHRoZSBJRCBvZiBlYWNoIGtleSB3aWxsIGNoYW5nZSBldmVyeSB0aW1lIGl0J3MgdXBkYXRlZC4gUGVyaGFwcyBhIHN0b3JlZFxuLy8gcHJvY2VkdXJlIGZvciB0aGUgYHNldEl0ZW0oKWAgU1FMIHdvdWxkIHNvbHZlIHRoaXMgcHJvYmxlbT9cbi8vIFRPRE86IERvbid0IGNoYW5nZSBJRCBvbiBgc2V0SXRlbSgpYC5cbmZ1bmN0aW9uIGtleSQxKG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lICsgJyBXSEVSRSBpZCA9ID8gTElNSVQgMScsIFtuICsgMV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkua2V5IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMShjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXlzKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvd2ViZGF0YWJhc2UvI2RhdGFiYXNlc1xuLy8gPiBUaGVyZSBpcyBubyB3YXkgdG8gZW51bWVyYXRlIG9yIGRlbGV0ZSB0aGUgZGF0YWJhc2VzIGF2YWlsYWJsZSBmb3IgYW4gb3JpZ2luIGZyb20gdGhpcyBBUEkuXG5mdW5jdGlvbiBnZXRBbGxTdG9yZU5hbWVzKGRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBkYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgJyArIFwiV0hFUkUgdHlwZT0ndGFibGUnIEFORCBuYW1lIDw+ICdfX1dlYktpdERhdGFiYXNlSW5mb1RhYmxlX18nXCIsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZU5hbWVzID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzLnB1c2gocmVzdWx0cy5yb3dzLml0ZW0oaSkubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogc3RvcmVOYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMShvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICBvcHRpb25zLnN0b3JlTmFtZSA9IG9wdGlvbnMuc3RvcmVOYW1lIHx8IGN1cnJlbnRDb25maWcuc3RvcmVOYW1lO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGRiO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBkYiByZWZlcmVuY2Ugb2YgdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBkYiA9IHNlbGYuX2RiSW5mby5kYjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGIgPSBvcGVuRGF0YWJhc2Uob3B0aW9ucy5uYW1lLCAnJywgJycsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gZHJvcCBhbGwgZGF0YWJhc2UgdGFibGVzXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnZXRBbGxTdG9yZU5hbWVzKGRiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXM6IFtvcHRpb25zLnN0b3JlTmFtZV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAob3BlcmF0aW9uSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJvcFRhYmxlKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnRFJPUCBUQUJMRSBJRiBFWElTVFMgJyArIHN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25zLnB1c2goZHJvcFRhYmxlKG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZSQxLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgd2ViU1FMU3RvcmFnZSA9IHtcbiAgICBfZHJpdmVyOiAnd2ViU1FMU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UkMSxcbiAgICBfc3VwcG9ydDogaXNXZWJTUUxWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUkMSxcbiAgICBnZXRJdGVtOiBnZXRJdGVtJDEsXG4gICAgc2V0SXRlbTogc2V0SXRlbSQxLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0kMSxcbiAgICBjbGVhcjogY2xlYXIkMSxcbiAgICBsZW5ndGg6IGxlbmd0aCQxLFxuICAgIGtleToga2V5JDEsXG4gICAga2V5czoga2V5cyQxLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlJDFcbn07XG5cbmZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmICdzZXRJdGVtJyBpbiBsb2NhbFN0b3JhZ2UgJiZcbiAgICAgICAgLy8gaW4gSUU4IHR5cGVvZiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSA9PT0gJ29iamVjdCdcbiAgICAgICAgISFsb2NhbFN0b3JhZ2Uuc2V0SXRlbTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlQcmVmaXgob3B0aW9ucywgZGVmYXVsdENvbmZpZykge1xuICAgIHZhciBrZXlQcmVmaXggPSBvcHRpb25zLm5hbWUgKyAnLyc7XG5cbiAgICBpZiAob3B0aW9ucy5zdG9yZU5hbWUgIT09IGRlZmF1bHRDb25maWcuc3RvcmVOYW1lKSB7XG4gICAgICAgIGtleVByZWZpeCArPSBvcHRpb25zLnN0b3JlTmFtZSArICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGtleVByZWZpeDtcbn1cblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIHRocm93cyB3aGVuIHNhdmluZyBhbiBpdGVtXG5mdW5jdGlvbiBjaGVja0lmTG9jYWxTdG9yYWdlVGhyb3dzKCkge1xuICAgIHZhciBsb2NhbFN0b3JhZ2VUZXN0S2V5ID0gJ19sb2NhbGZvcmFnZV9zdXBwb3J0X3Rlc3QnO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSwgdHJ1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXkpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuLy8gQ2hlY2sgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBhbmQgYWxsb3dzIHRvIHNhdmUgYW4gaXRlbVxuLy8gVGhpcyBtZXRob2QgY2hlY2tzIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgaW4gU2FmYXJpIFByaXZhdGUgQnJvd3Npbmdcbi8vIG1vZGUsIG9yIGluIGFueSBvdGhlciBjYXNlIHdoZXJlIHRoZSBhdmFpbGFibGUgcXVvdGEgZm9yIGxvY2FsU3RvcmFnZVxuLy8gaXMgMCBhbmQgdGhlcmUgd2Fzbid0IGFueSBzYXZlZCBpdGVtcyB5ZXQuXG5mdW5jdGlvbiBfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSB7XG4gICAgcmV0dXJuICFjaGVja0lmTG9jYWxTdG9yYWdlVGhyb3dzKCkgfHwgbG9jYWxTdG9yYWdlLmxlbmd0aCA+IDA7XG59XG5cbi8vIENvbmZpZyB0aGUgbG9jYWxTdG9yYWdlIGJhY2tlbmQsIHVzaW5nIG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG5mdW5jdGlvbiBfaW5pdFN0b3JhZ2UkMihvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYkluZm8gPSB7fTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYkluZm8ua2V5UHJlZml4ID0gX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKTtcblxuICAgIGlmICghX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZWplY3QoKTtcbiAgICB9XG5cbiAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgZGJJbmZvLnNlcmlhbGl6ZXIgPSBsb2NhbGZvcmFnZVNlcmlhbGl6ZXI7XG5cbiAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBrZXlzIGZyb20gdGhlIGRhdGFzdG9yZSwgZWZmZWN0aXZlbHkgZGVzdHJveWluZyBhbGwgZGF0YSBpblxuLy8gdGhlIGFwcCdzIGtleS92YWx1ZSBzdG9yZSFcbmZ1bmN0aW9uIGNsZWFyJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBzZWxmLl9kYkluZm8ua2V5UHJlZml4O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJldHJpZXZlIGFuIGl0ZW0gZnJvbSB0aGUgc3RvcmUuIFVubGlrZSB0aGUgb3JpZ2luYWwgYXN5bmNfc3RvcmFnZVxuLy8gbGlicmFyeSBpbiBHYWlhLCB3ZSBkb24ndCBtb2RpZnkgcmV0dXJuIHZhbHVlcyBhdCBhbGwuIElmIGEga2V5J3MgdmFsdWVcbi8vIGlzIGB1bmRlZmluZWRgLCB3ZSBwYXNzIHRoYXQgdmFsdWUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gZ2V0SXRlbSQyKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSk7XG5cbiAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGUga2V5XG4gICAgICAgIC8vIGlzIGxpa2VseSB1bmRlZmluZWQgYW5kIHdlJ2xsIHBhc3MgaXQgc3RyYWlnaHQgdG8gdGhlXG4gICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIEl0ZXJhdGUgb3ZlciBhbGwgaXRlbXMgaW4gdGhlIHN0b3JlLlxuZnVuY3Rpb24gaXRlcmF0ZSQyKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gZGJJbmZvLmtleVByZWZpeDtcbiAgICAgICAgdmFyIGtleVByZWZpeExlbmd0aCA9IGtleVByZWZpeC5sZW5ndGg7XG4gICAgICAgIHZhciBsZW5ndGggPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuXG4gICAgICAgIC8vIFdlIHVzZSBhIGRlZGljYXRlZCBpdGVyYXRvciBpbnN0ZWFkIG9mIHRoZSBgaWAgdmFyaWFibGUgYmVsb3dcbiAgICAgICAgLy8gc28gb3RoZXIga2V5cyB3ZSBmZXRjaCBpbiBsb2NhbFN0b3JhZ2UgYXJlbid0IGNvdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIGBpdGVyYXRpb25OdW1iZXJgIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgYGl0ZXJhdGUoKWBcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFNlZTogZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDM1I2Rpc2N1c3Npb25fcjM4MDYxNTMwXG4gICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGEgcmVzdWx0IHdhcyBmb3VuZCwgcGFyc2UgaXQgZnJvbSB0aGUgc2VyaWFsaXplZFxuICAgICAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZVxuICAgICAgICAgICAgLy8ga2V5IGlzIGxpa2VseSB1bmRlZmluZWQgYW5kIHdlJ2xsIHBhc3MgaXQgc3RyYWlnaHRcbiAgICAgICAgICAgIC8vIHRvIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZXJhdG9yKHZhbHVlLCBrZXkuc3Vic3RyaW5nKGtleVByZWZpeExlbmd0aCksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFNhbWUgYXMgbG9jYWxTdG9yYWdlJ3Mga2V5KCkgbWV0aG9kLCBleGNlcHQgdGFrZXMgYSBjYWxsYmFjay5cbmZ1bmN0aW9uIGtleSQyKG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmtleShuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHByZWZpeCBmcm9tIHRoZSBrZXksIGlmIGEga2V5IGlzIGZvdW5kLlxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBrZXlzJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBsZW5ndGggPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChpdGVtS2V5LmluZGV4T2YoZGJJbmZvLmtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goaXRlbUtleS5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU3VwcGx5IHRoZSBudW1iZXIgb2Yga2V5cyBpbiB0aGUgZGF0YXN0b3JlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbmZ1bmN0aW9uIGxlbmd0aCQyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gc2VsZi5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZSwgbmljZSBhbmQgc2ltcGxlLlxuZnVuY3Rpb24gcmVtb3ZlSXRlbSQyKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFNldCBhIGtleSdzIHZhbHVlIGFuZCBydW4gYW4gb3B0aW9uYWwgY2FsbGJhY2sgb25jZSB0aGUgdmFsdWUgaXMgc2V0LlxuLy8gVW5saWtlIEdhaWEncyBpbXBsZW1lbnRhdGlvbiwgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgdmFsdWUsXG4vLyBpbiBjYXNlIHlvdSB3YW50IHRvIG9wZXJhdGUgb24gdGhhdCB2YWx1ZSBvbmx5IGFmdGVyIHlvdSdyZSBzdXJlIGl0XG4vLyBzYXZlZCwgb3Igc29tZXRoaW5nIGxpa2UgdGhhdC5cbmZ1bmN0aW9uIHNldEl0ZW0kMihrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdW5kZWZpbmVkIHZhbHVlcyB0byBudWxsLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZSBjYXBhY2l0eSBleGNlZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgdGhpcyBhIHNwZWNpZmljIGVycm9yL2V2ZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHwgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZHJvcEluc3RhbmNlJDIob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zLm5hbWUgKyAnLycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKF9nZXRLZXlQcmVmaXgob3B0aW9ucywgc2VsZi5fZGVmYXVsdENvbmZpZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChrZXlQcmVmaXgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgbG9jYWxTdG9yYWdlV3JhcHBlciA9IHtcbiAgICBfZHJpdmVyOiAnbG9jYWxTdG9yYWdlV3JhcHBlcicsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UkMixcbiAgICBfc3VwcG9ydDogaXNMb2NhbFN0b3JhZ2VWYWxpZCgpLFxuICAgIGl0ZXJhdGU6IGl0ZXJhdGUkMixcbiAgICBnZXRJdGVtOiBnZXRJdGVtJDIsXG4gICAgc2V0SXRlbTogc2V0SXRlbSQyLFxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0kMixcbiAgICBjbGVhcjogY2xlYXIkMixcbiAgICBsZW5ndGg6IGxlbmd0aCQyLFxuICAgIGtleToga2V5JDIsXG4gICAga2V5czoga2V5cyQyLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlJDJcbn07XG5cbnZhciBzYW1lVmFsdWUgPSBmdW5jdGlvbiBzYW1lVmFsdWUoeCwgeSkge1xuICAgIHJldHVybiB4ID09PSB5IHx8IHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicgJiYgaXNOYU4oeCkgJiYgaXNOYU4oeSk7XG59O1xuXG52YXIgaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgc2VhcmNoRWxlbWVudCkge1xuICAgIHZhciBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIGlmIChzYW1lVmFsdWUoYXJyYXlbaV0sIHNlYXJjaEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vLyBEcml2ZXJzIGFyZSBzdG9yZWQgaGVyZSB3aGVuIGBkZWZpbmVEcml2ZXIoKWAgaXMgY2FsbGVkLlxuLy8gVGhleSBhcmUgc2hhcmVkIGFjcm9zcyBhbGwgaW5zdGFuY2VzIG9mIGxvY2FsRm9yYWdlLlxudmFyIERlZmluZWREcml2ZXJzID0ge307XG5cbnZhciBEcml2ZXJTdXBwb3J0ID0ge307XG5cbnZhciBEZWZhdWx0RHJpdmVycyA9IHtcbiAgICBJTkRFWEVEREI6IGFzeW5jU3RvcmFnZSxcbiAgICBXRUJTUUw6IHdlYlNRTFN0b3JhZ2UsXG4gICAgTE9DQUxTVE9SQUdFOiBsb2NhbFN0b3JhZ2VXcmFwcGVyXG59O1xuXG52YXIgRGVmYXVsdERyaXZlck9yZGVyID0gW0RlZmF1bHREcml2ZXJzLklOREVYRUREQi5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5XRUJTUUwuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuTE9DQUxTVE9SQUdFLl9kcml2ZXJdO1xuXG52YXIgT3B0aW9uYWxEcml2ZXJNZXRob2RzID0gWydkcm9wSW5zdGFuY2UnXTtcblxudmFyIExpYnJhcnlNZXRob2RzID0gWydjbGVhcicsICdnZXRJdGVtJywgJ2l0ZXJhdGUnLCAna2V5JywgJ2tleXMnLCAnbGVuZ3RoJywgJ3JlbW92ZUl0ZW0nLCAnc2V0SXRlbSddLmNvbmNhdChPcHRpb25hbERyaXZlck1ldGhvZHMpO1xuXG52YXIgRGVmYXVsdENvbmZpZyA9IHtcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHJpdmVyOiBEZWZhdWx0RHJpdmVyT3JkZXIuc2xpY2UoKSxcbiAgICBuYW1lOiAnbG9jYWxmb3JhZ2UnLFxuICAgIC8vIERlZmF1bHQgREIgc2l6ZSBpcyBfSlVTVCBVTkRFUl8gNU1CLCBhcyBpdCdzIHRoZSBoaWdoZXN0IHNpemVcbiAgICAvLyB3ZSBjYW4gdXNlIHdpdGhvdXQgYSBwcm9tcHQuXG4gICAgc2l6ZTogNDk4MDczNixcbiAgICBzdG9yZU5hbWU6ICdrZXl2YWx1ZXBhaXJzJyxcbiAgICB2ZXJzaW9uOiAxLjBcbn07XG5cbmZ1bmN0aW9uIGNhbGxXaGVuUmVhZHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgbGlicmFyeU1ldGhvZCkge1xuICAgIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdLmFwcGx5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIF9hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgaWYgKGFyZykge1xuICAgICAgICAgICAgZm9yICh2YXIgX2tleSBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGFyZ1tfa2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtfa2V5XSA9IGFyZ1tfa2V5XS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbn1cblxudmFyIExvY2FsRm9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvY2FsRm9yYWdlKG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsRm9yYWdlKTtcblxuICAgICAgICBmb3IgKHZhciBkcml2ZXJUeXBlS2V5IGluIERlZmF1bHREcml2ZXJzKSB7XG4gICAgICAgICAgICBpZiAoRGVmYXVsdERyaXZlcnMuaGFzT3duUHJvcGVydHkoZHJpdmVyVHlwZUtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyID0gRGVmYXVsdERyaXZlcnNbZHJpdmVyVHlwZUtleV07XG4gICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXIuX2RyaXZlcjtcbiAgICAgICAgICAgICAgICB0aGlzW2RyaXZlclR5cGVLZXldID0gZHJpdmVyTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byB3YWl0IGZvciB0aGUgcHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgZHJpdmVycyBjYW4gYmUgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmluZURyaXZlcihkcml2ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb25maWcgPSBleHRlbmQoe30sIERlZmF1bHRDb25maWcpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBleHRlbmQoe30sIHRoaXMuX2RlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9kcml2ZXJTZXQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0RHJpdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGJJbmZvID0gbnVsbDtcblxuICAgICAgICB0aGlzLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcilbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGFueSBjb25maWcgdmFsdWVzIGZvciBsb2NhbEZvcmFnZTsgY2FuIGJlIGNhbGxlZCBhbnl0aW1lIGJlZm9yZVxuICAgIC8vIHRoZSBmaXJzdCBBUEkgY2FsbCAoZS5nLiBgZ2V0SXRlbWAsIGBzZXRJdGVtYCkuXG4gICAgLy8gV2UgbG9vcCB0aHJvdWdoIG9wdGlvbnMgc28gd2UgZG9uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGNvbmZpZ1xuICAgIC8vIHZhbHVlcy5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmNvbmZpZyA9IGZ1bmN0aW9uIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGFyZ3VtZW50IGlzIGFuIG9iamVjdCwgd2UgdXNlIGl0IHRvIHNldCB2YWx1ZXMuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgcmV0dXJuIGVpdGhlciBhIHNwZWNpZmllZCBjb25maWcgdmFsdWUgb3IgYWxsXG4gICAgICAgIC8vIGNvbmZpZyB2YWx1ZXMuXG4gICAgICAgIGlmICgodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbnMpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIElmIGxvY2FsZm9yYWdlIGlzIHJlYWR5IGFuZCBmdWxseSBpbml0aWFsaXplZCwgd2UgY2FuJ3Qgc2V0XG4gICAgICAgICAgICAvLyBhbnkgbmV3IGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBJbnN0ZWFkLCB3ZSByZXR1cm4gYW4gZXJyb3IuXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiQ2FuJ3QgY2FsbCBjb25maWcoKSBhZnRlciBsb2NhbGZvcmFnZSBcIiArICdoYXMgYmVlbiB1c2VkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3N0b3JlTmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tpXSA9IG9wdGlvbnNbaV0ucmVwbGFjZSgvXFxXL2csICdfJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09ICd2ZXJzaW9uJyAmJiB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignRGF0YWJhc2UgdmVyc2lvbiBtdXN0IGJlIGEgbnVtYmVyLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZ1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFmdGVyIGFsbCBjb25maWcgb3B0aW9ucyBhcmUgc2V0IGFuZFxuICAgICAgICAgICAgLy8gdGhlIGRyaXZlciBvcHRpb24gaXMgdXNlZCwgdHJ5IHNldHRpbmcgaXRcbiAgICAgICAgICAgIGlmICgnZHJpdmVyJyBpbiBvcHRpb25zICYmIG9wdGlvbnMuZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWdbb3B0aW9uc107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFVzZWQgdG8gZGVmaW5lIGEgY3VzdG9tIGRyaXZlciwgc2hhcmVkIGFjcm9zcyBhbGwgaW5zdGFuY2VzIG9mXG4gICAgLy8gbG9jYWxGb3JhZ2UuXG5cblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kZWZpbmVEcml2ZXIgPSBmdW5jdGlvbiBkZWZpbmVEcml2ZXIoZHJpdmVyT2JqZWN0LCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlck9iamVjdC5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGlhbmNlRXJyb3IgPSBuZXcgRXJyb3IoJ0N1c3RvbSBkcml2ZXIgbm90IGNvbXBsaWFudDsgc2VlICcgKyAnaHR0cHM6Ly9tb3ppbGxhLmdpdGh1Yi5pby9sb2NhbEZvcmFnZS8jZGVmaW5lZHJpdmVyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBIGRyaXZlciBuYW1lIHNob3VsZCBiZSBkZWZpbmVkIGFuZCBub3Qgb3ZlcmxhcCB3aXRoIHRoZVxuICAgICAgICAgICAgICAgIC8vIGxpYnJhcnktZGVmaW5lZCwgZGVmYXVsdCBkcml2ZXJzLlxuICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0Ll9kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kcyA9IExpYnJhcnlNZXRob2RzLmNvbmNhdCgnX2luaXRTdG9yYWdlJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlck1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlck1ldGhvZE5hbWUgPSBkcml2ZXJNZXRob2RzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHByb3BlcnR5IGlzIHRoZXJlLFxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgYSBtZXRob2QgZXZlbiB3aGVuIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1JlcXVpcmVkID0gIWluY2x1ZGVzKE9wdGlvbmFsRHJpdmVyTWV0aG9kcywgZHJpdmVyTWV0aG9kTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoaXNSZXF1aXJlZCB8fCBkcml2ZXJPYmplY3RbZHJpdmVyTWV0aG9kTmFtZV0pICYmIHR5cGVvZiBkcml2ZXJPYmplY3RbZHJpdmVyTWV0aG9kTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChjb21wbGlhbmNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzID0gZnVuY3Rpb24gY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3RvcnkgPSBmdW5jdGlvbiBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3RvcnkobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kTmFtZSArICcgaXMgbm90IGltcGxlbWVudGVkIGJ5IHRoZSBjdXJyZW50IGRyaXZlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBPcHRpb25hbERyaXZlck1ldGhvZHMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25hbERyaXZlck1ldGhvZCA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kc1tfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdID0gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG9wdGlvbmFsRHJpdmVyTWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNldERyaXZlclN1cHBvcnQgPSBmdW5jdGlvbiBzZXREcml2ZXJTdXBwb3J0KHN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ1JlZGVmaW5pbmcgTG9jYWxGb3JhZ2UgZHJpdmVyOiAnICsgZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0gPSBkcml2ZXJPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIERyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV0gPSBzdXBwb3J0O1xuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCB1c2UgYSB0aGVuLCBzbyB0aGF0IHdlIGNhbiBkZWZpbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJpdmVycyB0aGF0IGhhdmUgc2ltcGxlIF9zdXBwb3J0IG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoJ19zdXBwb3J0JyBpbiBkcml2ZXJPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyaXZlck9iamVjdC5fc3VwcG9ydCAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcml2ZXJPYmplY3QuX3N1cHBvcnQoKS50aGVuKHNldERyaXZlclN1cHBvcnQsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KCEhZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZHJpdmVyID0gZnVuY3Rpb24gZHJpdmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJpdmVyIHx8IG51bGw7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5nZXREcml2ZXIgPSBmdW5jdGlvbiBnZXREcml2ZXIoZHJpdmVyTmFtZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGdldERyaXZlclByb21pc2UgPSBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA/IFByb21pc2UkMS5yZXNvbHZlKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSA6IFByb21pc2UkMS5yZWplY3QobmV3IEVycm9yKCdEcml2ZXIgbm90IGZvdW5kLicpKTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKGdldERyaXZlclByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIGdldERyaXZlclByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5nZXRTZXJpYWxpemVyID0gZnVuY3Rpb24gZ2V0U2VyaWFsaXplcihjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VyaWFsaXplclByb21pc2UgPSBQcm9taXNlJDEucmVzb2x2ZShsb2NhbGZvcmFnZVNlcmlhbGl6ZXIpO1xuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHNlcmlhbGl6ZXJQcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gc2VsZi5fZHJpdmVyU2V0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3JlYWR5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBzZWxmLl9pbml0RHJpdmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnNldERyaXZlciA9IGZ1bmN0aW9uIHNldERyaXZlcihkcml2ZXJzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KGRyaXZlcnMpKSB7XG4gICAgICAgICAgICBkcml2ZXJzID0gW2RyaXZlcnNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN1cHBvcnRlZERyaXZlcnMgPSB0aGlzLl9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldERyaXZlclRvQ29uZmlnKCkge1xuICAgICAgICAgICAgc2VsZi5fY29uZmlnLmRyaXZlciA9IHNlbGYuZHJpdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRlbmRTZWxmV2l0aERyaXZlcihkcml2ZXIpIHtcbiAgICAgICAgICAgIHNlbGYuX2V4dGVuZChkcml2ZXIpO1xuICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcblxuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBzZWxmLl9pbml0U3RvcmFnZShzZWxmLl9jb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RHJpdmVySW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZHJpdmVyUHJvbWlzZUxvb3AoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RHJpdmVySW5kZXggPCBzdXBwb3J0ZWREcml2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBzdXBwb3J0ZWREcml2ZXJzW2N1cnJlbnREcml2ZXJJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJpdmVySW5kZXgrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0RHJpdmVyKGRyaXZlck5hbWUpLnRoZW4oZXh0ZW5kU2VsZldpdGhEcml2ZXIpW1wiY2F0Y2hcIl0oZHJpdmVyUHJvbWlzZUxvb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdObyBhdmFpbGFibGUgc3RvcmFnZSBtZXRob2QgZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZHJpdmVyU2V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkcml2ZXJQcm9taXNlTG9vcCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXJlIG1pZ2h0IGJlIGEgZHJpdmVyIGluaXRpYWxpemF0aW9uIGluIHByb2dyZXNzXG4gICAgICAgIC8vIHNvIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCBpbiBvcmRlciB0byBhdm9pZCBhIHBvc3NpYmxlXG4gICAgICAgIC8vIHJhY2UgY29uZGl0aW9uIHRvIHNldCBfZGJJbmZvXG4gICAgICAgIHZhciBvbGREcml2ZXJTZXREb25lID0gdGhpcy5fZHJpdmVyU2V0ICE9PSBudWxsID8gdGhpcy5fZHJpdmVyU2V0W1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgICAgIH0pIDogUHJvbWlzZSQxLnJlc29sdmUoKTtcblxuICAgICAgICB0aGlzLl9kcml2ZXJTZXQgPSBvbGREcml2ZXJTZXREb25lLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBzdXBwb3J0ZWREcml2ZXJzWzBdO1xuICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuX3JlYWR5ID0gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0RHJpdmVyKGRyaXZlck5hbWUpLnRoZW4oZnVuY3Rpb24gKGRyaXZlcikge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RyaXZlciA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5pdERyaXZlciA9IGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdObyBhdmFpbGFibGUgc3RvcmFnZSBtZXRob2QgZm91bmQuJyk7XG4gICAgICAgICAgICBzZWxmLl9kcml2ZXJTZXQgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3ModGhpcy5fZHJpdmVyU2V0LCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXJTZXQ7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zdXBwb3J0cyA9IGZ1bmN0aW9uIHN1cHBvcnRzKGRyaXZlck5hbWUpIHtcbiAgICAgICAgcmV0dXJuICEhRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl9leHRlbmQgPSBmdW5jdGlvbiBfZXh0ZW5kKGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcykge1xuICAgICAgICBleHRlbmQodGhpcywgbGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl9nZXRTdXBwb3J0ZWREcml2ZXJzID0gZnVuY3Rpb24gX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycykge1xuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBkcml2ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHMoZHJpdmVyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWREcml2ZXJzLnB1c2goZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZERyaXZlcnM7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5ID0gZnVuY3Rpb24gX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpIHtcbiAgICAgICAgLy8gQWRkIGEgc3R1YiBmb3IgZWFjaCBkcml2ZXIgQVBJIG1ldGhvZCB0aGF0IGRlbGF5cyB0aGUgY2FsbCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyBkcml2ZXIgbWV0aG9kIHVudGlsIGxvY2FsRm9yYWdlIGlzIHJlYWR5LiBUaGVzZSBzdHVic1xuICAgICAgICAvLyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBkcml2ZXIgbWV0aG9kcyBhcyBzb29uIGFzIHRoZSBkcml2ZXIgaXNcbiAgICAgICAgLy8gbG9hZGVkLCBzbyB0aGVyZSBpcyBubyBwZXJmb3JtYW5jZSBpbXBhY3QuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBMaWJyYXJ5TWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2FsbFdoZW5SZWFkeSh0aGlzLCBMaWJyYXJ5TWV0aG9kc1tpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2Uob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IExvY2FsRm9yYWdlKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTG9jYWxGb3JhZ2U7XG59KCk7XG5cbi8vIFRoZSBhY3R1YWwgbG9jYWxGb3JhZ2Ugb2JqZWN0IHRoYXQgd2UgZXhwb3NlIGFzIGEgbW9kdWxlIG9yIHZpYSBhXG4vLyBnbG9iYWwuIEl0J3MgZXh0ZW5kZWQgYnkgcHVsbGluZyBpbiBvbmUgb2Ygb3VyIG90aGVyIGxpYnJhcmllcy5cblxuXG52YXIgbG9jYWxmb3JhZ2VfanMgPSBuZXcgTG9jYWxGb3JhZ2UoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhbGZvcmFnZV9qcztcblxufSx7XCIzXCI6M31dfSx7fSxbNF0pKDQpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=