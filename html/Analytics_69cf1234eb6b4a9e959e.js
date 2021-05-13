(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Analytics"],{

/***/ "./src/client/components/Analytics.tsx":
/*!*********************************************!*\
  !*** ./src/client/components/Analytics.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/integrations */ "./node_modules/@sentry/integrations/esm/index.js");
/* harmony import */ var hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var hooks_useScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/useScript */ "./src/client/hooks/useScript.ts");
/* harmony import */ var _sentry_fullstory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/fullstory */ "./node_modules/@sentry/fullstory/dist/index.es.js");







const Analytics = () => {
  const dsn = "sentry_dsn_key" || false;
  const segmentKey = "segment_key" || false;
  const networker = Object(hooks_useNetworker__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    accessObj
  } = networker;
  const {
    href,
    pathname
  } = location;
  const {
    user_id,
    email,
    name
  } = accessObj || {};
  if (true) return null;
  const [isLoaded] = Object(hooks_useScript__WEBPACK_IMPORTED_MODULE_4__["default"])(`https://cdn.segment.com/analytics.js/v1/${segmentKey}/analytics.min.js`);
  const {
    analytics
  } = window; // sentry

  if (dsn) {
    _sentry_browser__WEBPACK_IMPORTED_MODULE_1__["init"]({
      dsn,
      release: "1.1.1",
      integrations: [new _sentry_fullstory__WEBPACK_IMPORTED_MODULE_5__["default"]('human-lambdas'), new _sentry_integrations__WEBPACK_IMPORTED_MODULE_2__["CaptureConsole"]({
        levels: ['error']
      })]
    });
  } else {
    console.error('Missing Sentry DSN!');
  } // FullStory


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!user_id || !email || !analytics || window.FS === undefined) return;
    window.FS.identify(user_id, {
      displayName: name,
      email
    });
  }, [networker, accessObj]); // Segment

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isLoaded || !analytics) return;

    if (email && user_id) {
      analytics.identify(user_id, {
        fullName: name,
        email
      });
    }
  }, [isLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isLoaded || !analytics) return;
    setTimeout(() => {
      const title = document.title || '';
      const [pageName] = title.split(' | ');
      analytics.page(pageName, {
        title,
        path: pathname,
        url: href
      });
    });
  }, [isLoaded, pathname]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Analytics);

/***/ }),

/***/ "./src/client/hooks/useScript.ts":
/*!***************************************!*\
  !*** ./src/client/hooks/useScript.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// https://usehooks.com/useScript/

const cachedScripts = [];

const useScript = src => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loaded: false,
    error: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      cachedScripts.push(src);
      const script = document.createElement('script');
      script.src = src;
      script.async = true; // Script event listener callbacks for load and error

      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false
        });
      };

      const onScriptError = () => {
        // Remove from cachedScripts we can try loading again
        const index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
        script.remove();
        setState({
          loaded: true,
          error: true
        });
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);
      document.body.appendChild(script);
      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, [src]);
  return [state.loaded, state.error];
};

/* harmony default export */ __webpack_exports__["default"] = (useScript);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvQW5hbHl0aWNzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2hvb2tzL3VzZVNjcmlwdC50cyJdLCJuYW1lcyI6WyJBbmFseXRpY3MiLCJkc24iLCJwcm9jZXNzIiwic2VnbWVudEtleSIsIm5ldHdvcmtlciIsInVzZU5ldHdvcmtlciIsImFjY2Vzc09iaiIsImhyZWYiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwidXNlcl9pZCIsImVtYWlsIiwibmFtZSIsImlzTG9hZGVkIiwidXNlU2NyaXB0IiwiYW5hbHl0aWNzIiwid2luZG93IiwiU2VudHJ5IiwicmVsZWFzZSIsIl9fQVBQX1ZFUlNJT05fXyIsImludGVncmF0aW9ucyIsIlNlbnRyeUZ1bGxTdG9yeSIsIkNhcHR1cmVDb25zb2xlIiwibGV2ZWxzIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0IiwiRlMiLCJ1bmRlZmluZWQiLCJpZGVudGlmeSIsImRpc3BsYXlOYW1lIiwiZnVsbE5hbWUiLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJkb2N1bWVudCIsInBhZ2VOYW1lIiwic3BsaXQiLCJwYWdlIiwicGF0aCIsInVybCIsImNhY2hlZFNjcmlwdHMiLCJzcmMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJsb2FkZWQiLCJpbmNsdWRlcyIsInB1c2giLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJvblNjcmlwdExvYWQiLCJvblNjcmlwdEVycm9yIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1B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Q0FBQ1ksbUJBQVAsQ0FBMkIsTUFBM0IsRUFBbUNULFlBQW5DO0FBQ0FILGNBQU0sQ0FBQ1ksbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NSLGFBQXBDO0FBQ0QsT0FIRDtBQUlEO0FBQ0YsR0ExQ1EsRUEwQ04sQ0FBQ1gsR0FBRCxDQTFDTSxDQUFUO0FBNENBLFNBQU8sQ0FBQ0MsS0FBSyxDQUFDRyxNQUFQLEVBQWVILEtBQUssQ0FBQ2pCLEtBQXJCLENBQVA7QUFDRCxDQW5ERDs7QUFxRGVYLHdFQUFmLEUiLCJmaWxlIjoiQW5hbHl0aWNzXzY5Y2YxMjM0ZWI2YjRhOWU5NTllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvYnJvd3NlcidcbmltcG9ydCB7IENhcHR1cmVDb25zb2xlIH0gZnJvbSAnQHNlbnRyeS9pbnRlZ3JhdGlvbnMnXG5pbXBvcnQgdXNlTmV0d29ya2VyIGZyb20gJ2hvb2tzL3VzZU5ldHdvcmtlcidcbmltcG9ydCB1c2VTY3JpcHQgZnJvbSAnaG9va3MvdXNlU2NyaXB0J1xuaW1wb3J0IFNlbnRyeUZ1bGxTdG9yeSBmcm9tICdAc2VudHJ5L2Z1bGxzdG9yeSdcblxuY29uc3QgQW5hbHl0aWNzID0gKCkgPT4ge1xuICBjb25zdCBkc24gPSBwcm9jZXNzLmVudi5TRU5UUllfRFNOIHx8ICcnXG4gIGNvbnN0IHNlZ21lbnRLZXkgPSBwcm9jZXNzLmVudi5TRUdNRU5UX0tFWSB8fCAnJ1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7YWNjZXNzT2JqfSA9IG5ldHdvcmtlciBcbiAgY29uc3Qge2hyZWYsIHBhdGhuYW1lfSA9IGxvY2F0aW9uXG4gIGNvbnN0IHt1c2VyX2lkLCBlbWFpbCwgbmFtZX0gPSBhY2Nlc3NPYmogfHwge31cblxuICBpZiAoIV9fUFJPRFVDVElPTl9fKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IFtpc0xvYWRlZF0gPSB1c2VTY3JpcHQoXG4gICAgYGh0dHBzOi8vY2RuLnNlZ21lbnQuY29tL2FuYWx5dGljcy5qcy92MS8ke3NlZ21lbnRLZXl9L2FuYWx5dGljcy5taW4uanNgXG4gIClcblxuICBjb25zdCB7YW5hbHl0aWNzfSA9IHdpbmRvd1xuXG4gIC8vIHNlbnRyeVxuICBpZiAoZHNuKSB7XG4gICAgU2VudHJ5LmluaXQoe1xuICAgICAgZHNuLFxuICAgICAgcmVsZWFzZTogX19BUFBfVkVSU0lPTl9fLFxuICAgICAgaW50ZWdyYXRpb25zOiBbXG4gICAgICAgIG5ldyBTZW50cnlGdWxsU3RvcnkoJ2h1bWFuLWxhbWJkYXMnKSxcbiAgICAgICAgbmV3IENhcHR1cmVDb25zb2xlKHtcbiAgICAgICAgICBsZXZlbHM6IFsnZXJyb3InXVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignTWlzc2luZyBTZW50cnkgRFNOIScpXG4gIH1cblxuICAvLyBGdWxsU3RvcnlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXJfaWQgfHwgIWVtYWlsIHx8ICFhbmFseXRpY3MgfHwgd2luZG93LkZTID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgIHdpbmRvdy5GUy5pZGVudGlmeSh1c2VyX2lkLCB7XG4gICAgICBkaXNwbGF5TmFtZTogbmFtZSxcbiAgICAgIGVtYWlsXG4gICAgfSlcbiAgfSwgW25ldHdvcmtlciwgYWNjZXNzT2JqXSlcblxuICAvLyBTZWdtZW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0xvYWRlZCB8fCAhYW5hbHl0aWNzKSByZXR1cm5cbiAgICBpZiAoZW1haWwgJiYgdXNlcl9pZCkge1xuICAgICAgYW5hbHl0aWNzLmlkZW50aWZ5KHVzZXJfaWQsIHtcbiAgICAgICAgZnVsbE5hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2lzTG9hZGVkXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNMb2FkZWQgfHwgIWFuYWx5dGljcykgcmV0dXJuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnRpdGxlIHx8ICcnXG4gICAgICBjb25zdCBbcGFnZU5hbWVdID0gdGl0bGUuc3BsaXQoJyB8ICcpXG4gICAgICBhbmFseXRpY3MucGFnZShwYWdlTmFtZSwge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgcGF0aDogcGF0aG5hbWUsXG4gICAgICAgIHVybDogaHJlZlxuICAgICAgfSlcbiAgICB9KVxuICB9LCBbaXNMb2FkZWQsIHBhdGhuYW1lXSlcblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXRpY3NcbiIsIi8vIGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZVNjcmlwdC9cbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGNhY2hlZFNjcmlwdHMgPSBbXVxuY29uc3QgdXNlU2NyaXB0ID0gKHNyYykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIGVycm9yOiBmYWxzZVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNhY2hlZFNjcmlwdHMuaW5jbHVkZXMoc3JjKSkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVkU2NyaXB0cy5wdXNoKHNyYylcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG5cbiAgICAgIC8vIFNjcmlwdCBldmVudCBsaXN0ZW5lciBjYWxsYmFja3MgZm9yIGxvYWQgYW5kIGVycm9yXG4gICAgICBjb25zdCBvblNjcmlwdExvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9uU2NyaXB0RXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGNhY2hlZFNjcmlwdHMgd2UgY2FuIHRyeSBsb2FkaW5nIGFnYWluXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2FjaGVkU2NyaXB0cy5pbmRleE9mKHNyYylcbiAgICAgICAgaWYgKGluZGV4ID49IDApIGNhY2hlZFNjcmlwdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBzY3JpcHQucmVtb3ZlKClcblxuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkKVxuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25TY3JpcHRFcnJvcilcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25TY3JpcHRMb2FkKVxuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblNjcmlwdEVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3NyY10pXG5cbiAgcmV0dXJuIFtzdGF0ZS5sb2FkZWQsIHN0YXRlLmVycm9yXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTY3JpcHRcbiJdLCJzb3VyY2VSb290IjoiIn0=