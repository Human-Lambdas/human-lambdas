(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TaskRoot"],{

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

/***/ "./src/universal/modules/audits/components/AuditDecision.tsx":
/*!*******************************************************************!*\
  !*** ./src/universal/modules/audits/components/AuditDecision.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/components/PlainButton */ "./src/client/components/PlainButton.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/Icon */ "./src/universal/components/Icon.tsx");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/audits/components/AuditDecision.tsx";





const DecisionButton = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(client_components_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e1k1yrn20"
})(props => {
  const {
    isApprove,
    isActive
  } = props;
  const color = isApprove ? universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].PRIMARY_GREEN : universal_styles_palette__WEBPACK_IMPORTED_MODULE_3__["PALETTE"].ERROR_MAIN;
  return {
    width: 'auto',
    backgroundColor: isActive ? color : 'white',
    color: isActive ? 'white' : color,
    border: `1px solid ${isActive ? 'white' : color}`,
    fontSize: '14px',
    fontWeight: 500,
    boxShadow: 'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 2px',
    outline: 0,
    transition: 'all 0.25s ease-in-out',
    ':hover': {
      boxShadow: `0 4px 8px ${isApprove ? 'rgba(0,173,69,0.05)' : 'rgba(255,74,0,0.05)'}`
    },
    ':active': {
      backgroundColor: isActive ? 'white' : color,
      color: isActive ? color : 'white',
      border: `1px solid ${isActive ? color : 'white'}`
    }
  };
});

const StyledIcon = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(universal_components_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
  target: "e1k1yrn21"
})({
  name: "1283jhr",
  styles: "margin:0;padding:0;font-size:16px;"
});
/*
Key parameters:
- decision: true if the button is Approve, false if the button is Reject
- correct: current audit decision

We flip the state of the button by comparing decision and correct: ie if decision is true, the state can only flip between true and null.

The server takes some time to respond (onAuditDecision) which results in a feedback delay, so we change its state directly (setCorrectState) on click
*/


function clickHandler(onAuditDecision, setCorrectState, correct, decision) {
  const newDecision = correct === decision ? null : decision;
  setCorrectState(newDecision);
  onAuditDecision(newDecision);
}

const AuditDecision = props => {
  const {
    correct,
    onAuditDecision
  } = props;
  const [correctState, setCorrectState] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(correct);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setCorrectState(correct);
  }, [correct]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DecisionButton, {
    key: "approve",
    type: "button",
    onClick: () => {
      clickHandler(onAuditDecision, setCorrectState, correctState, true);
    },
    isApprove: true,
    isActive: correctState === true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "done")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DecisionButton, {
    key: "reject",
    type: "button",
    onClick: () => {
      clickHandler(onAuditDecision, setCorrectState, correctState, false);
    },
    isApprove: false,
    isActive: correctState === false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "close")));
};

/* harmony default export */ __webpack_exports__["default"] = (AuditDecision);

/***/ }),

/***/ "./src/universal/modules/task/TaskRoot.tsx":
/*!*************************************************!*\
  !*** ./src/universal/modules/task/TaskRoot.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Task */ "./src/universal/modules/task/components/Task.tsx");
/* harmony import */ var client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! client/hooks/useNetworker */ "./src/client/hooks/useNetworker.ts");
/* harmony import */ var client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! client/utils/segmentIo */ "./src/client/utils/segmentIo.ts");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! client/modules/notificationSystem/ducks/notificationSystemDuck */ "./src/client/modules/notificationSystem/ducks/notificationSystemDuck.tsx");
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
/* harmony import */ var universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! universal/utils/isEmptyArray */ "./src/universal/utils/isEmptyArray.ts");
/* harmony import */ var universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/utils/formatValues */ "./src/universal/utils/formatValues.ts");
/* harmony import */ var client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! client/utils/isUserStaff */ "./src/client/utils/isUserStaff.ts");
/* harmony import */ var client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! client/utils/dateHelpers */ "./src/client/utils/dateHelpers.ts");
const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/task/TaskRoot.tsx";

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
/**
* TODO handle server errors
*/

















const TaskRoot = props => {
  const networker = Object(client_hooks_useNetworker__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    user
  } = props;
  const {
    id: userId,
    email,
    orgId
  } = user || {};
  const {
    taskId,
    queueId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const [task, setTask] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [taskLoading, setTaskLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [activity, setActivity] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [activityLoading, setActivityLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [taskNav, setTaskNav] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [isStaff, setIsStaff] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    location: {
      pathname,
      state
    }
  } = history || {};
  const isAuditsRequestedFromUrl = pathname.includes('audit');
  const parsedURL = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search);

  async function getTask() {
    const payload = {
      method: 'GET'
    };
    const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}`;
    const auditsUrl = `/orgs/${orgId}/queues/tasks/${taskId}/audit`;
    setTaskLoading(true);

    if (isAuditsRequestedFromUrl) {
      const {
        data: task
      } = await networker.httpHandler(auditsUrl, {
        params: parsedURL,
        method: 'GET'
      });
      const {
        result,
        next,
        previous
      } = task || {};
      setTask(result);
      setTaskNav({
        previous,
        next
      });
    } else {
      const {
        data: task
      } = await networker.httpHandler(url, payload);
      setTask(task);
    }

    const {
      data: orgs
    } = await networker.httpHandler(`/orgs`, {
      method: 'GET'
    });
    setIsStaff(Object(client_utils_isUserStaff__WEBPACK_IMPORTED_MODULE_12__["default"])(orgs, orgId));
    setTaskLoading(false);
  }

  async function getRefreshedTask() {
    const payload = {
      method: 'GET'
    };
    const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/refresh`;
    const {
      data: task,
      errors
    } = await networker.httpHandler(url, payload);

    if (Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_10__["default"])(errors)) {
      setTask(task);
    } else {
      console.error('Error fetching refreshed token');
    }
  }

  const getActivity = async () => {
    const {
      id: taskId,
      queue_id: queueId
    } = task || {};

    if (taskId && queueId) {
      setActivityLoading(true);
      const payload = {
        method: 'GET'
      };
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity`;
      const {
        data,
        errors
      } = await _optionalChain([networker, 'optionalAccess', _ => _.httpHandler, 'call', _2 => _2(url, payload)]);

      if (Object(universal_utils_isEmptyArray__WEBPACK_IMPORTED_MODULE_10__["default"])(errors)) {
        setActivity(data);
      } else {
        console.error('Error: Unable to fetch activity data');
      }
    }

    setActivityLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_optionalChain([state, 'optionalAccess', _3 => _3.nextTask, 'optionalAccess', _4 => _4.id])) {
      setTask(state.nextTask);
    } else if (taskId && orgId) {
      getTask();
    }
  }, [taskId, orgId, user, queueId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      id,
      queue_id: queueId
    } = task || {};

    if (id && queueId) {
      getActivity();
    }
  }, [taskId, _optionalChain([task, 'optionalAccess', _5 => _5.id])]);
  const onSubmit = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async (e, values, orgId) => {
    const {
      id: taskId
    } = values;
    let nextUrl;

    if (taskId && orgId) {
      const config = {
        method: 'PATCH',
        data: Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_13__["transformDates"])(null, Object(universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_11__["default"])(values))
      };
      const updateUrl = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}`;
      const nextTaskUrl = `/orgs/${orgId}/queues/${queueId}/tasks/next`;
      let requiredType;
      let requiredName;

      const required = block => {
        if (!universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].FORM_SEQUENCE) {
          const {
            type,
            name
          } = block;
          const {
            is_required: isRequired,
            value: blockValue
          } = block[type];
          requiredName = name;
          requiredType = type;
          return isRequired && blockValue === '' || isRequired && !blockValue;
        } else {
          return false;
        }
      };

      const requiredError = Object(universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_11__["default"])(values.data).map(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_13__["transformDates"]).some(required);
      const requiredValue = requiredType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].TEXT || requiredType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].NUMBER || requiredType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].EMAIL || requiredType === universal_utils_constants__WEBPACK_IMPORTED_MODULE_9__["BLOCK_TYPE"].LINK ? 'value' : 'selection';

      if (requiredError) {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])(`A ${requiredValue} is required for ${requiredName}`));
        return;
      } // Update task


      const {
        errors: updateErrors
      } = await _optionalChain([networker, 'optionalAccess', _6 => _6.httpHandler, 'call', _7 => _7(updateUrl, config)]);

      if (updateErrors) {
        console.error(`Error updating task: ${JSON.stringify(updateErrors)}`);
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])('Error updating task please try again later'));
      } else {
        Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__["segmentTrack"])('Task Completed', {
          taskId: taskId,
          orgId,
          userId,
          email,
          queueId
        });
        const {
          data: nextTask,
          errors: nextTaskErrors
        } = await _optionalChain([networker, 'optionalAccess', _8 => _8.httpHandler, 'call', _9 => _9(nextTaskUrl, {
          method: 'GET'
        })]);

        if (nextTaskErrors || nextTaskErrors === null && nextTask === null) {
          return history.replace(`/queues/${queueId}`);
        } else {
          if (nextTask.id) {
            nextUrl = `/queues/${queueId}/tasks/${nextTask.id}`;
            Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__["segmentTrack"])('Task Fetched', {
              taskId: nextTask.id,
              orgId,
              userId,
              email,
              queueId
            });
            history.push({
              pathname: nextUrl,
              state: {
                nextTask
              }
            });
          } else {
            dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addSuccessNotification"])('Congratulations! You have completed all tasks in this queue.'));
            Object(client_utils_segmentIo__WEBPACK_IMPORTED_MODULE_6__["segmentTrack"])('All Tasks Completed', {
              orgId,
              userId,
              email,
              queueId
            });
            return history.replace(`/queues/${queueId}`);
          }
        }
      }
    } else {
      console.error('Failed to submit task');
    }
  }, []);
  const onSave = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async values => {
    if (task.id) {
      const config = {
        method: 'PATCH',
        data: Object(client_utils_dateHelpers__WEBPACK_IMPORTED_MODULE_13__["transformDates"])(null, Object(universal_utils_formatValues__WEBPACK_IMPORTED_MODULE_11__["default"])(values))
      };
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${task.id}/save`;
      const {
        errors: saveErrors
      } = await _optionalChain([networker, 'optionalAccess', _10 => _10.httpHandler, 'call', _11 => _11(url, config)]);

      if (saveErrors) {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])('Failed to save task'));
        console.error(`Error saving task ${JSON.stringify(saveErrors)}`);
      } else {
        getRefreshedTask();
        getActivity();
      }
    } else {
      console.error('Invalid task');
    }
  }, [task, orgId]);
  const onPost = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async comment => {
    const {
      id: taskId,
      queue_id: queueId
    } = task || {};

    if (taskId && queueId) {
      const payload = {
        method: 'POST',
        data: {
          action: 'comment',
          comment: comment
        }
      };
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity`;
      await _optionalChain([networker, 'optionalAccess', _12 => _12.httpHandler, 'call', _13 => _13(url, payload)]);
      getActivity();
    }
  }, [task, orgId, queueId]);
  const onDelete = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async deleteId => {
    const {
      id: taskId,
      queue_id: queueId
    } = task || {};

    if (taskId && queueId) {
      const payload = {
        method: 'DELETE'
      };
      const url = `/orgs/${orgId}/queues/${queueId}/tasks/${taskId}/activity/${deleteId}`;
      await _optionalChain([networker, 'optionalAccess', _14 => _14.httpHandler, 'call', _15 => _15(url, payload)]);
      getActivity();
    }
  }, [task, orgId, queueId]);
  const onAuditDecision = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async correct => {
    const {
      id: taskId
    } = task || {};

    if (taskId && orgId) {
      const payload = {
        method: 'PUT',
        data: {
          correct: correct
        }
      };
      const url = `/orgs/${orgId}/queues/tasks/${taskId}/audit`;
      const {
        errors
      } = await _optionalChain([networker, 'optionalAccess', _16 => _16.httpHandler, 'call', _17 => _17(url, payload)]);

      if (Array.isArray(errors)) {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])(errors[0].message));
      }

      getTask();
      getActivity();
    }
  }, [task, orgId, queueId]);
  const onAssign = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(async userId => {
    const config = {
      method: 'POST',
      data: {
        assigned_to: userId
      }
    };
    const url = `/orgs/${orgId}/queues/${queueId}/tasks/${task.id}/assign`;
    const {
      errors
    } = await networker.httpHandler(url, config);

    if (errors) {
      if (userId) {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])('Failed to assign task'));
      } else {
        dispatch(Object(client_modules_notificationSystem_ducks_notificationSystemDuck__WEBPACK_IMPORTED_MODULE_8__["addFailureNotification"])('Failed to unassign task'));
      }

      console.error('Error assigning task');
    } else {
      getRefreshedTask();
      getActivity();
    }
  }, [task]);
  if (!_optionalChain([task, 'optionalAccess', _18 => _18.id])) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Task__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userId: userId,
    isAudits: _optionalChain([task, 'optionalAccess', _19 => _19.status]) === 'completed',
    task: task,
    onSubmit: onSubmit,
    orgId: orgId,
    onSave: onSave,
    onPost: onPost,
    onDelete: onDelete,
    onAssign: onAssign,
    taskNav: taskNav,
    activity: activity,
    isStaff: isStaff,
    onAuditDecision: onAuditDecision,
    isLoading: taskLoading || activityLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaskRoot);

/***/ }),

/***/ "./src/universal/modules/task/components/Task.tsx":
/*!********************************************************!*\
  !*** ./src/universal/modules/task/components/Task.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var universal_components_RGL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/RGL */ "./src/universal/components/RGL.tsx");
/* harmony import */ var universal_components_BlockComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal/components/BlockComponent */ "./src/universal/components/BlockComponent.tsx");
/* harmony import */ var universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! universal/styles/palette */ "./src/universal/styles/palette.ts");
/* harmony import */ var universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal/components/PrimaryButton */ "./src/universal/components/PrimaryButton.tsx");
/* harmony import */ var universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal/components/SecondaryButton */ "./src/universal/components/SecondaryButton.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ "./src/universal/modules/task/components/Sidebar.tsx");
/* harmony import */ var client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/hooks/useRouter */ "./src/client/hooks/useRouter.ts");
/* harmony import */ var universal_components_AppHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! universal/components/AppHeader */ "./src/universal/components/AppHeader.tsx");
/* harmony import */ var universal_components_BlockWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! universal/components/BlockWrapper */ "./src/universal/components/BlockWrapper.tsx");
/* harmony import */ var universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! universal/validations/yupSchema */ "./src/universal/validations/yupSchema.ts");
/* harmony import */ var universal_modules_audits_components_AuditDecision__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! universal/modules/audits/components/AuditDecision */ "./src/universal/modules/audits/components/AuditDecision.tsx");
/* harmony import */ var client_components_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! client/components/Spinner */ "./src/client/components/Spinner.tsx");
/* harmony import */ var client_hooks_useModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! client/hooks/useModal */ "./src/client/hooks/useModal.ts");
/* harmony import */ var client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! client/components/ConfirmationModal */ "./src/client/components/ConfirmationModal.tsx");
/* harmony import */ var client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! client/redux/queuesReducers */ "./src/client/redux/queuesReducers.ts");

const _jsxFileName = "/Users/a/git/Human-Lambdas/hl-web/src/universal/modules/task/components/Task.tsx";

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




















const FormContainer = /*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
  target: "e90iyce0"
})({
  name: "py5jdu",
  styles: "display:flex;height:100%;flex-direction:column;"
});

const Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e90iyce1"
})({
  name: "t40y15",
  styles: "display:flex;flex-direction:row;width:100%;height:100%;overflow:hidden;"
});

const ActionBlock = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e90iyce2"
})("width:100%;display:grid;grid-template-columns:min-content ", props => props.audits ? '35px 35px' : '', " min-content;column-gap:20px;justify-content:flex-end;flex-direction:row;");

const QueueName = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e90iyce3"
})({
  fontWeight: 500,
  color: universal_styles_palette__WEBPACK_IMPORTED_MODULE_6__["PALETTE"].TEXT_MAIN
});

const Task = props => {
  const {
    onDelete,
    onPost,
    userId,
    activity,
    task,
    onSubmit,
    taskNav,
    orgId,
    onSave,
    users,
    onAssign,
    isAudits,
    onAuditDecision,
    isLoading,
    isStaff,
    queues,
    setSelectedQueue
  } = props;
  const {
    id: taskId,
    queue_id: queueId,
    correct: correct
  } = task || {};
  const {
    history
  } = Object(client_hooks_useRouter__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [assignedTo, setAssignedTo] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(taskId);
  const {
    next,
    previous
  } = taskNav || {};
  const returnUrl = `/queues/${queueId}` || 'queues';
  const {
    queue
  } = task || '';
  const layouts = task.data.map(block => block.layout);
  const isNotAssignedToMe = assignedTo !== userId;
  let readOnly = isAudits || isNotAssignedToMe;

  if (isStaff && isNotAssignedToMe) {
    readOnly = true;
  }

  const [isSubmiting, setSubmiting] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isSaving, setSaving] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [view, setView] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [assigneeDetails, setAssigneeDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    location: {
      pathname,
      state: locationState
    }
  } = history || {};
  const formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [taskChanged, setTaskChanged] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_optionalChain([locationState, 'optionalAccess', _ => _.taskChanged]) || false);
  const {
    modalPortal: confirmTask,
    togglePortal: toggleTaskModal,
    closePortal: closeTaskModal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const {
    modalPortal: confirmAssignee,
    togglePortal: toggleAssigneeModal,
    closePortal: closeAssigneeModal
  } = Object(client_hooks_useModal__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const isAuditsRequestedFromUrl = pathname.includes('audit');
  const isLoadingPrevious = view === 'previous';
  const isLoadingNext = view === 'next';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      assigned_to
    } = task || {};
    setAssignedTo(assigned_to);

    if (isAudits) {
      const currentQueue = queues.find(q => q.id === task.queue_id);

      if (currentQueue) {
        setSelectedQueue(currentQueue);
      }
    }
  }, [isAudits, task]);

  const resetView = () => setView(null);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    enableReinitialize: true,
    initialValues: task,
    onSubmit: (_values, formikBag) => {
      formikBag.setSubmitting(false);
    },
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: universal_validations_yupSchema__WEBPACK_IMPORTED_MODULE_13__["taskSchema"],
    innerRef: formRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, ({
    handleChange,
    values,
    setFieldValue,
    isSubmitting,
    isValid,
    errors,
    handleBlur,
    validateForm
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      }
    }, isAudits && isAuditsRequestedFromUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_AppHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      leftBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: "back",
        type: "button",
        onClick: () => history.replace('/audits'),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, "Back"),
      midBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueName, {
        key: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, queue),
      rightBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBlock, {
        audits: !isStaff ? true : false,
        key: "nav_block",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        hideFocus: true,
        disabled: !previous,
        type: "button",
        onClick: () => {
          setView('previous');
          history.replace(previous);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, isLoadingPrevious && isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }) : `Previous`), !isStaff && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_modules_audits_components_AuditDecision__WEBPACK_IMPORTED_MODULE_14__["default"], {
        orgId: orgId,
        queueId: queueId,
        taskId: taskId,
        correct: correct,
        onAuditDecision: args => {
          resetView();
          onAuditDecision(args);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        hideFocus: true,
        disabled: !next,
        type: "button",
        onClick: () => {
          setView('next');
          history.replace(next);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, isLoadingNext && isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }) : `Next`)),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_AppHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      leftBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: "back",
        type: "button",
        onClick: () => {
          if (taskChanged && formRef.current.dirty) {
            toggleTaskModal();
          } else {
            history.replace(returnUrl);
          }
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, "Back"),
      midBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueueName, {
        key: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, queue),
      rightBarItems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ActionBlock, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        hideFocus: true,
        disabled: readOnly || isSubmitting,
        type: "button",
        onClick: async () => {
          setSaving(true);
          await onSave(values);
          setTaskChanged(false);
          setSaving(false);
          validateForm(values);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, isSaving ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }) : `Save`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        hideFocus: true,
        disabled: readOnly || isSubmitting || !isValid,
        type: "submit",
        onClick: async e => {
          setSubmiting(true);
          await onSubmit(e, values, orgId);
          setSubmiting(false);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, isSubmiting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }) : `Submit`)),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["FieldArray"], {
      name: "data",
      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onPost: args => {
          resetView();
          onPost(args);
        },
        onDelete: args => {
          resetView();
          onDelete(args);
        },
        assignedTo: assignedTo,
        task: task,
        users: users,
        onAssign: (assignee, assignor) => {
          resetView();
          setAssigneeDetails({
            assignee,
            assignor
          });

          if (taskChanged && formRef.current.dirty) {
            toggleAssigneeModal();
          } else {
            onAssign(assignee, assignor);
          }
        },
        queueId: queueId,
        orgId: orgId,
        activity: activity,
        isAudits: isAudits,
        correct: correct,
        queue: queue,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
        style: {
          width: '100%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, !(isAudits && isLoadingNext && isLoading || isLoadingPrevious && isLoading) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_RGL__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isDraggable: false,
        isDroppable: false,
        isResizable: false,
        layouts: layouts,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, values.data.map((block, idx) => {
        let errorsForBlock = {};

        if (errors.data && errors.data[idx] !== undefined) {
          errorsForBlock = errors.data[idx];
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: block.id,
          'data-grid': block.layout,
          index: idx,
          type: block.type,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(universal_components_BlockComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
          setFieldValue: (field, data) => {
            setTaskChanged(true);
            setFieldValue(field, data);
          },
          block: block,
          errors: errorsForBlock,
          handleChange: e => {
            setTaskChanged(true);
            handleChange(e);
          },
          handleBlur: handleBlur,
          index: idx,
          isEditing: false,
          isAudits: readOnly,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          }
        }));
      }))), confirmTask( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        closePortal: closeTaskModal,
        label: `Exit without saving`,
        cancelLabel: `Save and Exit`,
        message: `You have made changes but they haven't been saved.`,
        onConfirm: () => {
          history.replace(returnUrl);
        },
        onCancel: async () => {
          setSaving(true);
          await onSave(values);
          setTaskChanged(false);
          setSaving(false);
          history.replace(returnUrl);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      })), confirmAssignee( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(client_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
        closePortal: closeAssigneeModal,
        label: `Reassign without saving`,
        cancelLabel: `Save and Reassign`,
        message: `You have made changes but they haven't been saved.`,
        onConfirm: () => {
          resetView();
          onAssign(assigneeDetails.assignee, assigneeDetails.assignor);
          setAssigneeDetails(null);
        },
        onCancel: async () => {
          setSaving(true);
          await onSave(values);
          setTaskChanged(false);
          setSaving(false);
          resetView();
          onAssign(assigneeDetails.assignee, assigneeDetails.assignor);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }))),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      }
    }));
  }));
};

const mapStateToProps = state => ({
  users: state.users,
  queues: state.queues.queues
});

const mapDispatchToProps = dispatch => ({
  setSelectedQueue: arg => dispatch(client_redux_queuesReducers__WEBPACK_IMPORTED_MODULE_18__["workfllowActions"].setSelectedQueue(arg))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Task));

/***/ }),

/***/ "./src/universal/utils/formatValues.ts":
/*!*********************************************!*\
  !*** ./src/universal/utils/formatValues.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal/utils/constants */ "./src/universal/utils/constants.ts");
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



const formatValues = values => {
  let fields;

  if (Array.isArray(values.data)) {
    fields = values.data;
  } else if (Array.isArray(values)) {
    fields = values;
  } else {
    return values;
  }

  fields.filter(val => {
    if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION] !== undefined) {
      _optionalChain([val, 'access', _ => _[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].NAMED_ENTITY_RECOGNITION], 'access', _2 => _2.entities, 'optionalAccess', _3 => _3.filter, 'call', _4 => _4(entity => {
        delete entity.color;
        delete entity.text;
      })]);
    }

    if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES] !== undefined) {
      if (Array.isArray(val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.objects)) {
        val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.objects.filter(entity => {
          delete entity.color;
        });
      }

      if (val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.image === '') {
        val[universal_utils_constants__WEBPACK_IMPORTED_MODULE_0__["BLOCK_TYPE"].BOUNDING_BOXES].value.image = null;
      }
    }

    return val;
  });
  return values;
};

/* harmony default export */ __webpack_exports__["default"] = (formatValues);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9pc1VzZXJTdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXREZWNpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svVGFza1Jvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy90YXNrL2NvbXBvbmVudHMvVGFzay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9mb3JtYXRWYWx1ZXMudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwia2V5ZnJhbWVzU3BpbiIsImtleWZyYW1lcyIsIkxvYWRlciIsImJvcmRlciIsIlBBTEVUVEUiLCJCT1JERVJfR1JBWSIsImJvcmRlclJhZGl1cyIsImJvcmRlclRvcCIsIlBSSU1BUllfTUFJTiIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0aW9uTmFtZSIsInRvU3RyaW5nIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsIlNwaW5uZXIiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImlzVXNlclN0YWZmIiwib3JnYW5pemF0aW9ucyIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwib3JnIiwiaWQiLCJTVEFGRl9PUkdfSUQiLCJEZWNpc2lvbkJ1dHRvbiIsIlBsYWluQnV0dG9uIiwicHJvcHMiLCJpc0FwcHJvdmUiLCJpc0FjdGl2ZSIsImNvbG9yIiwiUFJJTUFSWV9HUkVFTiIsIkVSUk9SX01BSU4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJib3hTaGFkb3ciLCJvdXRsaW5lIiwidHJhbnNpdGlvbiIsIlN0eWxlZEljb24iLCJJY29uIiwiY2xpY2tIYW5kbGVyIiwib25BdWRpdERlY2lzaW9uIiwic2V0Q29ycmVjdFN0YXRlIiwiY29ycmVjdCIsImRlY2lzaW9uIiwibmV3RGVjaXNpb24iLCJBdWRpdERlY2lzaW9uIiwiY29ycmVjdFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsImtleSIsInR5cGUiLCJvbkNsaWNrIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidW5kZWZpbmVkIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiVGFza1Jvb3QiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJ1c2VySWQiLCJlbWFpbCIsIm9yZ0lkIiwidGFza0lkIiwicXVldWVJZCIsInVzZVBhcmFtcyIsInRhc2siLCJzZXRUYXNrIiwidGFza0xvYWRpbmciLCJzZXRUYXNrTG9hZGluZyIsImFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJhY3Rpdml0eUxvYWRpbmciLCJzZXRBY3Rpdml0eUxvYWRpbmciLCJ0YXNrTmF2Iiwic2V0VGFza05hdiIsImlzU3RhZmYiLCJzZXRJc1N0YWZmIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXRlIiwiaXNBdWRpdHNSZXF1ZXN0ZWRGcm9tVXJsIiwiaW5jbHVkZXMiLCJwYXJzZWRVUkwiLCJxU3RyaW5nIiwicGFyc2UiLCJzZWFyY2giLCJnZXRUYXNrIiwicGF5bG9hZCIsIm1ldGhvZCIsInVybCIsImF1ZGl0c1VybCIsImRhdGEiLCJodHRwSGFuZGxlciIsInBhcmFtcyIsInJlc3VsdCIsIm5leHQiLCJwcmV2aW91cyIsIm9yZ3MiLCJnZXRSZWZyZXNoZWRUYXNrIiwiZXJyb3JzIiwiaXNFbXB0eUFycmF5IiwiY29uc29sZSIsImVycm9yIiwiZ2V0QWN0aXZpdHkiLCJxdWV1ZV9pZCIsIl8iLCJfMiIsIl8zIiwibmV4dFRhc2siLCJfNCIsIl81Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZXMiLCJuZXh0VXJsIiwiY29uZmlnIiwidHJhbnNmb3JtRGF0ZXMiLCJmb3JtYXRWYWx1ZXMiLCJ1cGRhdGVVcmwiLCJuZXh0VGFza1VybCIsInJlcXVpcmVkVHlwZSIsInJlcXVpcmVkTmFtZSIsInJlcXVpcmVkIiwiYmxvY2siLCJCTE9DS19UWVBFIiwiRk9STV9TRVFVRU5DRSIsIm5hbWUiLCJpc19yZXF1aXJlZCIsImlzUmVxdWlyZWQiLCJibG9ja1ZhbHVlIiwicmVxdWlyZWRFcnJvciIsIm1hcCIsInNvbWUiLCJyZXF1aXJlZFZhbHVlIiwiVEVYVCIsIk5VTUJFUiIsIkVNQUlMIiwiTElOSyIsImFkZEZhaWx1cmVOb3RpZmljYXRpb24iLCJ1cGRhdGVFcnJvcnMiLCJfNiIsIl83IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZ21lbnRUcmFjayIsIm5leHRUYXNrRXJyb3JzIiwiXzgiLCJfOSIsInJlcGxhY2UiLCJwdXNoIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm9uU2F2ZSIsInNhdmVFcnJvcnMiLCJfMTAiLCJfMTEiLCJvblBvc3QiLCJjb21tZW50IiwiYWN0aW9uIiwiXzEyIiwiXzEzIiwib25EZWxldGUiLCJkZWxldGVJZCIsIl8xNCIsIl8xNSIsIl8xNiIsIl8xNyIsIkFycmF5IiwiaXNBcnJheSIsIm1lc3NhZ2UiLCJvbkFzc2lnbiIsImFzc2lnbmVkX3RvIiwiXzE4IiwiVGFzayIsImlzQXVkaXRzIiwiXzE5Iiwic3RhdHVzIiwiaXNMb2FkaW5nIiwiRm9ybUNvbnRhaW5lciIsIkZvcm0iLCJDb250ZW50IiwiQWN0aW9uQmxvY2siLCJhdWRpdHMiLCJRdWV1ZU5hbWUiLCJURVhUX01BSU4iLCJ1c2VycyIsInF1ZXVlcyIsInNldFNlbGVjdGVkUXVldWUiLCJhc3NpZ25lZFRvIiwic2V0QXNzaWduZWRUbyIsInJldHVyblVybCIsInF1ZXVlIiwibGF5b3V0cyIsImxheW91dCIsImlzTm90QXNzaWduZWRUb01lIiwicmVhZE9ubHkiLCJpc1N1Ym1pdGluZyIsInNldFN1Ym1pdGluZyIsImlzU2F2aW5nIiwic2V0U2F2aW5nIiwidmlldyIsInNldFZpZXciLCJhc3NpZ25lZURldGFpbHMiLCJzZXRBc3NpZ25lZURldGFpbHMiLCJsb2NhdGlvblN0YXRlIiwiZm9ybVJlZiIsInVzZVJlZiIsInRhc2tDaGFuZ2VkIiwic2V0VGFza0NoYW5nZWQiLCJtb2RhbFBvcnRhbCIsImNvbmZpcm1UYXNrIiwidG9nZ2xlUG9ydGFsIiwidG9nZ2xlVGFza01vZGFsIiwiY2xvc2VQb3J0YWwiLCJjbG9zZVRhc2tNb2RhbCIsInVzZU1vZGFsIiwiY29uZmlybUFzc2lnbmVlIiwidG9nZ2xlQXNzaWduZWVNb2RhbCIsImNsb3NlQXNzaWduZWVNb2RhbCIsImlzTG9hZGluZ1ByZXZpb3VzIiwiaXNMb2FkaW5nTmV4dCIsImN1cnJlbnRRdWV1ZSIsImZpbmQiLCJxIiwicmVzZXRWaWV3IiwiRm9ybWlrIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaW5pdGlhbFZhbHVlcyIsIl92YWx1ZXMiLCJmb3JtaWtCYWciLCJzZXRTdWJtaXR0aW5nIiwidmFsaWRhdGVPbkNoYW5nZSIsInZhbGlkYXRlT25CbHVyIiwidmFsaWRhdGVPbk1vdW50IiwidmFsaWRhdGlvblNjaGVtYSIsInRhc2tTY2hlbWEiLCJpbm5lclJlZiIsImhhbmRsZUNoYW5nZSIsInNldEZpZWxkVmFsdWUiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwiaGFuZGxlQmx1ciIsInZhbGlkYXRlRm9ybSIsIkFwcEhlYWRlciIsImxlZnRCYXJJdGVtcyIsIlNlY29uZGFyeUJ1dHRvbiIsIm1pZEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsImhpZGVGb2N1cyIsImRpc2FibGVkIiwiUHJpbWFyeUJ1dHRvbiIsImN1cnJlbnQiLCJkaXJ0eSIsIkZpZWxkQXJyYXkiLCJyZW5kZXIiLCJTaWRlYmFyIiwiYXNzaWduZWUiLCJhc3NpZ25vciIsInN0eWxlIiwiUkdMIiwiaXNEcmFnZ2FibGUiLCJpc0Ryb3BwYWJsZSIsImlzUmVzaXphYmxlIiwiaWR4IiwiZXJyb3JzRm9yQmxvY2siLCJCbG9ja1dyYXBwZXIiLCJpbmRleCIsIkJsb2NrQ29tcG9uZW50IiwiZmllbGQiLCJpc0VkaXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsImxhYmVsIiwiY2FuY2VsTGFiZWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsIndvcmtmbGxvd0FjdGlvbnMiLCJjb25uZWN0IiwiZmllbGRzIiwiZmlsdGVyIiwidmFsIiwiTkFNRURfRU5USVRZX1JFQ09HTklUSU9OIiwiZW50aXRpZXMiLCJlbnRpdHkiLCJ0ZXh0IiwiQk9VTkRJTkdfQk9YRVMiLCJvYmplY3RzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHFFQUFyQjtBQUEyRjtBQUMzRjtBQUVBO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyx1REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLE1BQU1DLE1BQU0sR0FBRztBQUFBO0FBQUEsR0FBVztBQUN4QkMsUUFBTSxFQUFHLGFBQVlDLHNEQUFPLENBQUNDLFdBQVksRUFEakI7QUFFeEJDLGNBQVksRUFBRSxLQUZVO0FBR3hCQyxXQUFTLEVBQUcsYUFBWUgsc0RBQU8sQ0FBQ0ksWUFBYSxFQUhyQjtBQUl4QkMsT0FBSyxFQUFFLEVBSmlCO0FBS3hCQyxRQUFNLEVBQUUsRUFMZ0I7QUFNeEJDLGVBQWEsRUFBRVgsYUFBYSxDQUFDWSxRQUFkLEVBTlM7QUFPeEJDLG1CQUFpQixFQUFFLElBUEs7QUFReEJDLHlCQUF1QixFQUFFO0FBUkQsQ0FBWCxDQUFmOztBQVdBLE1BQU1DLE9BQU8sR0FBRyxtQkFBTUMsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmYsTUFBcEIsRUFBNEI7QUFBQ2dCLFFBQU0sRUFBRSxTQUFUO0FBQWVDLFVBQVEsRUFBRTtBQUFDQyxZQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsY0FBVSxFQUFFO0FBQXJDO0FBQXpCLENBQTVCLENBQXRCOztBQUVlTixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBOztBQUVBLE1BQU1PLFdBQVcsR0FBRyxDQUFDQyxhQUFELEVBQWdCQyx1QkFBaEIsS0FBNEM7QUFDOUQsT0FBSyxNQUFNQyxHQUFYLElBQWtCRixhQUFsQixFQUFpQztBQUMvQixRQUFJRSxHQUFHLENBQUNDLEVBQUosS0FBV0Msc0VBQVgsSUFBMkJILHVCQUF1QixLQUFLRyxzRUFBM0QsRUFBeUUsT0FBTyxJQUFQO0FBQzFFOztBQUVELFNBQU8sS0FBUDtBQUNELENBTkQ7O0FBT2VMLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsTUFBTXZCLFlBQVksR0FBRyw2RkFBckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlQSxNQUFNNkIsY0FBYyxHQUFHLGtGQUFPQyxxRUFBUDtBQUFBO0FBQUEsR0FBcUJDLEtBQUQsSUFBVztBQUNwRCxRQUFNO0FBQUNDLGFBQUQ7QUFBWUM7QUFBWixNQUF3QkYsS0FBOUI7QUFDQSxRQUFNRyxLQUFLLEdBQUdGLFNBQVMsR0FBRzNCLGdFQUFPLENBQUM4QixhQUFYLEdBQTJCOUIsZ0VBQU8sQ0FBQytCLFVBQTFEO0FBRUEsU0FBTztBQUNMMUIsU0FBSyxFQUFFLE1BREY7QUFFTDJCLG1CQUFlLEVBQUVKLFFBQVEsR0FBR0MsS0FBSCxHQUFXLE9BRi9CO0FBR0xBLFNBQUssRUFBRUQsUUFBUSxHQUFHLE9BQUgsR0FBYUMsS0FIdkI7QUFJTDlCLFVBQU0sRUFBRyxhQUFZNkIsUUFBUSxHQUFHLE9BQUgsR0FBYUMsS0FBTSxFQUozQztBQUtMSSxZQUFRLEVBQUUsTUFMTDtBQU1MQyxjQUFVLEVBQUUsR0FOUDtBQU9MQyxhQUFTLEVBQUUsZ0ZBUE47QUFRTEMsV0FBTyxFQUFFLENBUko7QUFTTEMsY0FBVSxFQUFFLHVCQVRQO0FBVUwsY0FBVTtBQUNSRixlQUFTLEVBQUcsYUFBWVIsU0FBUyxHQUFHLHFCQUFILEdBQTJCLHFCQUFzQjtBQUQxRSxLQVZMO0FBYUwsZUFBVztBQUNUSyxxQkFBZSxFQUFFSixRQUFRLEdBQUcsT0FBSCxHQUFhQyxLQUQ3QjtBQUVUQSxXQUFLLEVBQUVELFFBQVEsR0FBR0MsS0FBSCxHQUFXLE9BRmpCO0FBR1Q5QixZQUFNLEVBQUcsYUFBWTZCLFFBQVEsR0FBR0MsS0FBSCxHQUFXLE9BQVE7QUFIdkM7QUFiTixHQUFQO0FBbUJELENBdkJzQixDQUF2Qjs7QUF5QkEsTUFBTVMsVUFBVSxHQUFHLGtGQUFPQyxpRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBbkI7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLFlBQVQsQ0FDRUMsZUFERixFQUVFQyxlQUZGLEVBR0VDLE9BSEYsRUFJRUMsUUFKRixFQUtFO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixPQUFPLEtBQUtDLFFBQVosR0FBdUIsSUFBdkIsR0FBOEJBLFFBQWxEO0FBQ0FGLGlCQUFlLENBQUNHLFdBQUQsQ0FBZjtBQUNBSixpQkFBZSxDQUFDSSxXQUFELENBQWY7QUFDRDs7QUFFRCxNQUFNQyxhQUFhLEdBQUlwQixLQUFELElBQVc7QUFDL0IsUUFBTTtBQUFDaUIsV0FBRDtBQUFVRjtBQUFWLE1BQTZCZixLQUFuQztBQUNBLFFBQU0sQ0FBQ3FCLFlBQUQsRUFBZUwsZUFBZixJQUFrQ00sc0RBQVEsQ0FBQ0wsT0FBRCxDQUFoRDtBQUVBTSx5REFBUyxDQUFDLE1BQU07QUFDZFAsbUJBQWUsQ0FBQ0MsT0FBRCxDQUFmO0FBQ0QsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0UvQiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CcUMsOENBQXBCLEVBQThCO0FBQUNwQyxVQUFNLEVBQUUsU0FBVDtBQUFlQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFckIsWUFBWDtBQUF5QnNCLGdCQUFVLEVBQUU7QUFBckM7QUFBekIsR0FBOUIsZUFDSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlcsY0FBcEIsRUFBb0M7QUFDcEMyQixPQUFHLEVBQUUsU0FEK0I7QUFFcENDLFFBQUksRUFBRSxRQUY4QjtBQUdwQ0MsV0FBTyxFQUFFLE1BQU07QUFDYmIsa0JBQVksQ0FBQ0MsZUFBRCxFQUFrQkMsZUFBbEIsRUFBbUNLLFlBQW5DLEVBQWlELElBQWpELENBQVo7QUFDRCxLQUxtQztBQU1wQ3BCLGFBQVMsRUFBRSxJQU55QjtBQU9wQ0MsWUFBUSxFQUFFbUIsWUFBWSxLQUFLLElBUFM7QUFPSGpDLFVBQU0sRUFBRSxTQVBMO0FBT1dDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsZ0JBQVUsRUFBRTtBQUFyQztBQVByQixHQUFwQyxlQVNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CeUIsVUFBcEIsRUFBZ0M7QUFBQ3hCLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUFoQyxFQUFvRyxNQUFwRyxDQVRGLENBREosZUFZSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQlcsY0FBcEIsRUFBb0M7QUFDcEMyQixPQUFHLEVBQUUsUUFEK0I7QUFFcENDLFFBQUksRUFBRSxRQUY4QjtBQUdwQ0MsV0FBTyxFQUFFLE1BQU07QUFDYmIsa0JBQVksQ0FBQ0MsZUFBRCxFQUFrQkMsZUFBbEIsRUFBbUNLLFlBQW5DLEVBQWlELEtBQWpELENBQVo7QUFDRCxLQUxtQztBQU1wQ3BCLGFBQVMsRUFBRSxLQU55QjtBQU9wQ0MsWUFBUSxFQUFFbUIsWUFBWSxLQUFLLEtBUFM7QUFPRmpDLFVBQU0sRUFBRSxTQVBOO0FBT1lDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsZ0JBQVUsRUFBRTtBQUFyQztBQVB0QixHQUFwQyxlQVNFTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CeUIsVUFBcEIsRUFBZ0M7QUFBQ3hCLFVBQU0sRUFBRSxTQUFUO0FBQWVDLFlBQVEsRUFBRTtBQUFDQyxjQUFRLEVBQUVyQixZQUFYO0FBQXlCc0IsZ0JBQVUsRUFBRTtBQUFyQztBQUF6QixHQUFoQyxFQUFxRyxPQUFyRyxDQVRGLENBWkosQ0FERjtBQTBCRCxDQWxDRDs7QUFvQ2U2Qiw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUMxR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1uRCxZQUFZLEdBQUcsMkVBQXJCOztBQUFrRyxTQUFTMkQsY0FBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFBRSxNQUFJQyxhQUFhLEdBQUdDLFNBQXBCO0FBQStCLE1BQUlDLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBZjtBQUFvQixNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFBVyxTQUFPQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBZixFQUF1QjtBQUFFLFVBQU1DLEVBQUUsR0FBR04sR0FBRyxDQUFDSSxDQUFELENBQWQ7QUFBbUIsVUFBTUcsRUFBRSxHQUFHUCxHQUFHLENBQUNJLENBQUMsR0FBRyxDQUFMLENBQWQ7QUFBdUJBLEtBQUMsSUFBSSxDQUFMOztBQUFRLFFBQUksQ0FBQ0UsRUFBRSxLQUFLLGdCQUFQLElBQTJCQSxFQUFFLEtBQUssY0FBbkMsS0FBc0RILEtBQUssSUFBSSxJQUFuRSxFQUF5RTtBQUFFLGFBQU9ELFNBQVA7QUFBbUI7O0FBQUMsUUFBSUksRUFBRSxLQUFLLFFBQVAsSUFBbUJBLEVBQUUsS0FBSyxnQkFBOUIsRUFBZ0Q7QUFBRUwsbUJBQWEsR0FBR0UsS0FBaEI7QUFBdUJBLFdBQUssR0FBR0ksRUFBRSxDQUFDSixLQUFELENBQVY7QUFBb0IsS0FBN0YsTUFBbUcsSUFBSUcsRUFBRSxLQUFLLE1BQVAsSUFBaUJBLEVBQUUsS0FBSyxjQUE1QixFQUE0QztBQUFFSCxXQUFLLEdBQUdJLEVBQUUsQ0FBQyxDQUFDLEdBQUdDLElBQUosS0FBYUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSLGFBQVgsRUFBMEIsR0FBR08sSUFBN0IsQ0FBZCxDQUFWO0FBQTZEUCxtQkFBYSxHQUFHQyxTQUFoQjtBQUE0QjtBQUFFOztBQUFDLFNBQU9DLEtBQVA7QUFBZTtBQUFBO0FBQ3JtQjtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLE1BQU1PLFFBQVEsR0FBSXZDLEtBQUQsSUFBVztBQUMxQixRQUFNd0MsU0FBUyxHQUFHQyx5RUFBWSxFQUE5QjtBQUNBLFFBQU07QUFBQ0M7QUFBRCxNQUFZQyxzRUFBUyxFQUEzQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBUzlDLEtBQWY7QUFDQSxRQUFNO0FBQUNKLE1BQUUsRUFBRW1ELE1BQUw7QUFBYUMsU0FBYjtBQUFvQkM7QUFBcEIsTUFBNkJILElBQUksSUFBSSxFQUEzQztBQUNBLFFBQU07QUFBQ0ksVUFBRDtBQUFTQztBQUFULE1BQW9CQyxrRUFBUyxFQUFuQztBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCaEMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTSxDQUFDaUMsV0FBRCxFQUFjQyxjQUFkLElBQWdDbEMsc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTSxDQUFDbUMsUUFBRCxFQUFXQyxXQUFYLElBQTBCcEMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTSxDQUFDcUMsZUFBRCxFQUFrQkMsa0JBQWxCLElBQXdDdEMsc0RBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTSxDQUFDdUMsT0FBRCxFQUFVQyxVQUFWLElBQXdCeEMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTSxDQUFDeUMsT0FBRCxFQUFVQyxVQUFWLElBQXdCMUMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsUUFBTTtBQUNKMkMsWUFBUSxFQUFFO0FBQUNDLGNBQUQ7QUFBV0M7QUFBWDtBQUROLE1BRUZ6QixPQUFPLElBQUksRUFGZjtBQUlBLFFBQU0wQix3QkFBd0IsR0FBR0YsUUFBUSxDQUFDRyxRQUFULENBQWtCLE9BQWxCLENBQWpDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxtREFBTyxDQUFDQyxLQUFSLENBQWNQLFFBQVEsQ0FBQ1EsTUFBdkIsQ0FBbEI7O0FBRUEsaUJBQWVDLE9BQWYsR0FBeUI7QUFDdkIsVUFBTUMsT0FBTyxHQUFHO0FBQUNDLFlBQU0sRUFBRTtBQUFULEtBQWhCO0FBQ0EsVUFBTUMsR0FBRyxHQUFJLFNBQVE1QixLQUFNLFdBQVVFLE9BQVEsVUFBU0QsTUFBTyxFQUE3RDtBQUNBLFVBQU00QixTQUFTLEdBQUksU0FBUTdCLEtBQU0saUJBQWdCQyxNQUFPLFFBQXhEO0FBQ0FNLGtCQUFjLENBQUMsSUFBRCxDQUFkOztBQUNBLFFBQUlZLHdCQUFKLEVBQThCO0FBQzVCLFlBQU07QUFBQ1csWUFBSSxFQUFFMUI7QUFBUCxVQUFlLE1BQU1iLFNBQVMsQ0FBQ3dDLFdBQVYsQ0FBc0JGLFNBQXRCLEVBQWlDO0FBQzFERyxjQUFNLEVBQUVYLFNBRGtEO0FBRTFETSxjQUFNLEVBQUU7QUFGa0QsT0FBakMsQ0FBM0I7QUFJQSxZQUFNO0FBQUNNLGNBQUQ7QUFBU0MsWUFBVDtBQUFlQztBQUFmLFVBQTJCL0IsSUFBSSxJQUFJLEVBQXpDO0FBQ0FDLGFBQU8sQ0FBQzRCLE1BQUQsQ0FBUDtBQUNBcEIsZ0JBQVUsQ0FBQztBQUFDc0IsZ0JBQUQ7QUFBV0Q7QUFBWCxPQUFELENBQVY7QUFDRCxLQVJELE1BUU87QUFDTCxZQUFNO0FBQUNKLFlBQUksRUFBRTFCO0FBQVAsVUFBZSxNQUFNYixTQUFTLENBQUN3QyxXQUFWLENBQXNCSCxHQUF0QixFQUEyQkYsT0FBM0IsQ0FBM0I7QUFDQXJCLGFBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsVUFBTTtBQUFDMEIsVUFBSSxFQUFFTTtBQUFQLFFBQWUsTUFBTTdDLFNBQVMsQ0FBQ3dDLFdBQVYsQ0FBdUIsT0FBdkIsRUFBK0I7QUFBQ0osWUFBTSxFQUFFO0FBQVQsS0FBL0IsQ0FBM0I7QUFDQVosY0FBVSxDQUFDeEUseUVBQVcsQ0FBQzZGLElBQUQsRUFBT3BDLEtBQVAsQ0FBWixDQUFWO0FBRUFPLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0Q7O0FBRUQsaUJBQWU4QixnQkFBZixHQUFrQztBQUNoQyxVQUFNWCxPQUFPLEdBQUc7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBaEI7QUFDQSxVQUFNQyxHQUFHLEdBQUksU0FBUTVCLEtBQU0sV0FBVUUsT0FBUSxVQUFTRCxNQUFPLFVBQTdEO0FBQ0EsVUFBTTtBQUFDNkIsVUFBSSxFQUFFMUIsSUFBUDtBQUFha0M7QUFBYixRQUF1QixNQUFNL0MsU0FBUyxDQUFDd0MsV0FBVixDQUFzQkgsR0FBdEIsRUFBMkJGLE9BQTNCLENBQW5DOztBQUNBLFFBQUlhLDZFQUFZLENBQUNELE1BQUQsQ0FBaEIsRUFBMEI7QUFDeEJqQyxhQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMb0MsYUFBTyxDQUFDQyxLQUFSLENBQWMsZ0NBQWQ7QUFDRDtBQUNGOztBQUVELFFBQU1DLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFVBQU07QUFBQy9GLFFBQUUsRUFBRXNELE1BQUw7QUFBYTBDLGNBQVEsRUFBRXpDO0FBQXZCLFFBQWtDRSxJQUFJLElBQUksRUFBaEQ7O0FBQ0EsUUFBSUgsTUFBTSxJQUFJQyxPQUFkLEVBQXVCO0FBQ3JCUyx3QkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0EsWUFBTWUsT0FBTyxHQUFHO0FBQUNDLGNBQU0sRUFBRTtBQUFULE9BQWhCO0FBQ0EsWUFBTUMsR0FBRyxHQUFJLFNBQVE1QixLQUFNLFdBQVVFLE9BQVEsVUFBU0QsTUFBTyxXQUE3RDtBQUNBLFlBQU07QUFBQzZCLFlBQUQ7QUFBT1E7QUFBUCxVQUFpQixNQUFNM0QsY0FBYyxDQUFDLENBQUNZLFNBQUQsRUFBWSxnQkFBWixFQUE4QnFELENBQUMsSUFBSUEsQ0FBQyxDQUFDYixXQUFyQyxFQUFrRCxNQUFsRCxFQUEwRGMsRUFBRSxJQUFJQSxFQUFFLENBQUNqQixHQUFELEVBQU1GLE9BQU4sQ0FBbEUsQ0FBRCxDQUEzQzs7QUFDQSxVQUFJYSw2RUFBWSxDQUFDRCxNQUFELENBQWhCLEVBQTBCO0FBQ3hCN0IsbUJBQVcsQ0FBQ3FCLElBQUQsQ0FBWDtBQUNELE9BRkQsTUFFTztBQUNMVSxlQUFPLENBQUNDLEtBQVIsQ0FBYyxzQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0Q5QixzQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBQ0QsR0FkRDs7QUFnQkFyQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJSyxjQUFjLENBQUMsQ0FBQ3VDLEtBQUQsRUFBUSxnQkFBUixFQUEwQjRCLEVBQUUsSUFBSUEsRUFBRSxDQUFDQyxRQUFuQyxFQUE2QyxnQkFBN0MsRUFBK0RDLEVBQUUsSUFBSUEsRUFBRSxDQUFDckcsRUFBeEUsQ0FBRCxDQUFsQixFQUFpRztBQUMvRjBELGFBQU8sQ0FBQ2EsS0FBSyxDQUFDNkIsUUFBUCxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUk5QyxNQUFNLElBQUlELEtBQWQsRUFBcUI7QUFDMUJ5QixhQUFPO0FBQ1I7QUFDRixHQU5RLEVBTU4sQ0FBQ3hCLE1BQUQsRUFBU0QsS0FBVCxFQUFnQkgsSUFBaEIsRUFBc0JLLE9BQXRCLENBTk0sQ0FBVDtBQVFBNUIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTTtBQUFDM0IsUUFBRDtBQUFLZ0csY0FBUSxFQUFFekM7QUFBZixRQUEwQkUsSUFBSSxJQUFJLEVBQXhDOztBQUNBLFFBQUl6RCxFQUFFLElBQUl1RCxPQUFWLEVBQW1CO0FBQ2pCd0MsaUJBQVc7QUFDWjtBQUNGLEdBTFEsRUFLTixDQUFDekMsTUFBRCxFQUFTdEIsY0FBYyxDQUFDLENBQUN5QixJQUFELEVBQU8sZ0JBQVAsRUFBeUI2QyxFQUFFLElBQUlBLEVBQUUsQ0FBQ3RHLEVBQWxDLENBQUQsQ0FBdkIsQ0FMTSxDQUFUO0FBT0EsUUFBTXVHLFFBQVEsR0FBR2pILDRDQUFLLENBQUNrSCxXQUFOLENBQWtCLE9BQU9DLENBQVAsRUFBVUMsTUFBVixFQUFrQnJELEtBQWxCLEtBQTRCO0FBQzdELFVBQU07QUFBQ3JELFFBQUUsRUFBRXNEO0FBQUwsUUFBZW9ELE1BQXJCO0FBRUEsUUFBSUMsT0FBSjs7QUFDQSxRQUFJckQsTUFBTSxJQUFJRCxLQUFkLEVBQXFCO0FBQ25CLFlBQU11RCxNQUFNLEdBQUc7QUFDYjVCLGNBQU0sRUFBRSxPQURLO0FBRWJHLFlBQUksRUFBRTBCLGdGQUFjLENBQUMsSUFBRCxFQUFPQyw2RUFBWSxDQUFDSixNQUFELENBQW5CO0FBRlAsT0FBZjtBQUlBLFlBQU1LLFNBQVMsR0FBSSxTQUFRMUQsS0FBTSxXQUFVRSxPQUFRLFVBQVNELE1BQU8sRUFBbkU7QUFDQSxZQUFNMEQsV0FBVyxHQUFJLFNBQVEzRCxLQUFNLFdBQVVFLE9BQVEsYUFBckQ7QUFFQSxVQUFJMEQsWUFBSjtBQUNBLFVBQUlDLFlBQUo7O0FBQ0EsWUFBTUMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsWUFBSSxDQUFDQyxvRUFBVSxDQUFDQyxhQUFoQixFQUErQjtBQUM3QixnQkFBTTtBQUFDeEYsZ0JBQUQ7QUFBT3lGO0FBQVAsY0FBZUgsS0FBckI7QUFDQSxnQkFBTTtBQUFDSSx1QkFBVyxFQUFFQyxVQUFkO0FBQTBCckYsaUJBQUssRUFBRXNGO0FBQWpDLGNBQStDTixLQUFLLENBQUN0RixJQUFELENBQTFEO0FBQ0FvRixzQkFBWSxHQUFHSyxJQUFmO0FBQ0FOLHNCQUFZLEdBQUduRixJQUFmO0FBQ0EsaUJBQVEyRixVQUFVLElBQUlDLFVBQVUsS0FBSyxFQUE5QixJQUFzQ0QsVUFBVSxJQUFJLENBQUNDLFVBQTVEO0FBQ0QsU0FORCxNQU1PO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FWRDs7QUFZQSxZQUFNQyxhQUFhLEdBQUdiLDZFQUFZLENBQUNKLE1BQU0sQ0FBQ3ZCLElBQVIsQ0FBWixDQUEwQnlDLEdBQTFCLENBQThCZix3RUFBOUIsRUFBOENnQixJQUE5QyxDQUFtRFYsUUFBbkQsQ0FBdEI7QUFDQSxZQUFNVyxhQUFhLEdBQ2pCYixZQUFZLEtBQUtJLG9FQUFVLENBQUNVLElBQTVCLElBQ0FkLFlBQVksS0FBS0ksb0VBQVUsQ0FBQ1csTUFENUIsSUFFQWYsWUFBWSxLQUFLSSxvRUFBVSxDQUFDWSxLQUY1QixJQUdBaEIsWUFBWSxLQUFLSSxvRUFBVSxDQUFDYSxJQUg1QixHQUlJLE9BSkosR0FLSSxXQU5OOztBQVFBLFVBQUlQLGFBQUosRUFBbUI7QUFDakIzRSxnQkFBUSxDQUFDbUYsNkhBQXNCLENBQUUsS0FBSUwsYUFBYyxvQkFBbUJaLFlBQWEsRUFBcEQsQ0FBdkIsQ0FBUjtBQUNBO0FBQ0QsT0FsQ2tCLENBb0NuQjs7O0FBQ0EsWUFBTTtBQUFDdkIsY0FBTSxFQUFFeUM7QUFBVCxVQUF5QixNQUFNcEcsY0FBYyxDQUFDLENBQUNZLFNBQUQsRUFBWSxnQkFBWixFQUE4QnlGLEVBQUUsSUFBSUEsRUFBRSxDQUFDakQsV0FBdkMsRUFBb0QsTUFBcEQsRUFBNERrRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ3ZCLFNBQUQsRUFBWUgsTUFBWixDQUFwRSxDQUFELENBQW5EOztBQUNBLFVBQUl3QixZQUFKLEVBQWtCO0FBQ2hCdkMsZUFBTyxDQUFDQyxLQUFSLENBQWUsd0JBQXVCeUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFlBQWYsQ0FBNkIsRUFBbkU7QUFDQXBGLGdCQUFRLENBQUNtRiw2SEFBc0IsQ0FBQyw0Q0FBRCxDQUF2QixDQUFSO0FBQ0QsT0FIRCxNQUdPO0FBQ0xNLG1GQUFZLENBQUMsZ0JBQUQsRUFBbUI7QUFBQ25GLGdCQUFNLEVBQUVBLE1BQVQ7QUFBaUJELGVBQWpCO0FBQXdCRixnQkFBeEI7QUFBZ0NDLGVBQWhDO0FBQXVDRztBQUF2QyxTQUFuQixDQUFaO0FBQ0EsY0FBTTtBQUNKNEIsY0FBSSxFQUFFaUIsUUFERjtBQUVKVCxnQkFBTSxFQUFFK0M7QUFGSixZQUdGLE1BQU0xRyxjQUFjLENBQUMsQ0FBQ1ksU0FBRCxFQUFZLGdCQUFaLEVBQThCK0YsRUFBRSxJQUFJQSxFQUFFLENBQUN2RCxXQUF2QyxFQUFvRCxNQUFwRCxFQUE0RHdELEVBQUUsSUFBSUEsRUFBRSxDQUFDNUIsV0FBRCxFQUFjO0FBQUNoQyxnQkFBTSxFQUFFO0FBQVQsU0FBZCxDQUFwRSxDQUFELENBSHhCOztBQUtBLFlBQUkwRCxjQUFjLElBQUtBLGNBQWMsS0FBSyxJQUFuQixJQUEyQnRDLFFBQVEsS0FBSyxJQUEvRCxFQUFzRTtBQUNwRSxpQkFBT3RELE9BQU8sQ0FBQytGLE9BQVIsQ0FBaUIsV0FBVXRGLE9BQVEsRUFBbkMsQ0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUk2QyxRQUFRLENBQUNwRyxFQUFiLEVBQWlCO0FBQ2YyRyxtQkFBTyxHQUFJLFdBQVVwRCxPQUFRLFVBQVM2QyxRQUFRLENBQUNwRyxFQUFHLEVBQWxEO0FBQ0F5SSx1RkFBWSxDQUFDLGNBQUQsRUFBaUI7QUFBQ25GLG9CQUFNLEVBQUU4QyxRQUFRLENBQUNwRyxFQUFsQjtBQUFzQnFELG1CQUF0QjtBQUE2QkYsb0JBQTdCO0FBQXFDQyxtQkFBckM7QUFBNENHO0FBQTVDLGFBQWpCLENBQVo7QUFDQVQsbUJBQU8sQ0FBQ2dHLElBQVIsQ0FBYTtBQUNYeEUsc0JBQVEsRUFBRXFDLE9BREM7QUFFWHBDLG1CQUFLLEVBQUU7QUFBQzZCO0FBQUQ7QUFGSSxhQUFiO0FBSUQsV0FQRCxNQU9PO0FBQ0xwRCxvQkFBUSxDQUNOK0YsNkhBQXNCLENBQUMsOERBQUQsQ0FEaEIsQ0FBUjtBQUdBTix1RkFBWSxDQUFDLHFCQUFELEVBQXdCO0FBQUNwRixtQkFBRDtBQUFRRixvQkFBUjtBQUFnQkMsbUJBQWhCO0FBQXVCRztBQUF2QixhQUF4QixDQUFaO0FBQ0EsbUJBQU9ULE9BQU8sQ0FBQytGLE9BQVIsQ0FBaUIsV0FBVXRGLE9BQVEsRUFBbkMsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBbkVELE1BbUVPO0FBQ0xzQyxhQUFPLENBQUNDLEtBQVIsQ0FBYyx1QkFBZDtBQUNEO0FBQ0YsR0ExRWdCLEVBMEVkLEVBMUVjLENBQWpCO0FBNEVBLFFBQU1rRCxNQUFNLEdBQUcxSiw0Q0FBSyxDQUFDa0gsV0FBTixDQUNiLE1BQU9FLE1BQVAsSUFBa0I7QUFDaEIsUUFBSWpELElBQUksQ0FBQ3pELEVBQVQsRUFBYTtBQUNYLFlBQU00RyxNQUFNLEdBQUc7QUFDYjVCLGNBQU0sRUFBRSxPQURLO0FBRWJHLFlBQUksRUFBRTBCLGdGQUFjLENBQUMsSUFBRCxFQUFPQyw2RUFBWSxDQUFDSixNQUFELENBQW5CO0FBRlAsT0FBZjtBQUlBLFlBQU16QixHQUFHLEdBQUksU0FBUTVCLEtBQU0sV0FBVUUsT0FBUSxVQUFTRSxJQUFJLENBQUN6RCxFQUFHLE9BQTlEO0FBQ0EsWUFBTTtBQUFDMkYsY0FBTSxFQUFFc0Q7QUFBVCxVQUF1QixNQUFNakgsY0FBYyxDQUFDLENBQUNZLFNBQUQsRUFBWSxnQkFBWixFQUE4QnNHLEdBQUcsSUFBSUEsR0FBRyxDQUFDOUQsV0FBekMsRUFBc0QsTUFBdEQsRUFBOEQrRCxHQUFHLElBQUlBLEdBQUcsQ0FBQ2xFLEdBQUQsRUFBTTJCLE1BQU4sQ0FBeEUsQ0FBRCxDQUFqRDs7QUFDQSxVQUFJcUMsVUFBSixFQUFnQjtBQUNkakcsZ0JBQVEsQ0FBQ21GLDZIQUFzQixDQUFDLHFCQUFELENBQXZCLENBQVI7QUFDQXRDLGVBQU8sQ0FBQ0MsS0FBUixDQUFlLHFCQUFvQnlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUyxVQUFmLENBQTJCLEVBQTlEO0FBQ0QsT0FIRCxNQUdPO0FBQ0x2RCx3QkFBZ0I7QUFDaEJLLG1CQUFXO0FBQ1o7QUFDRixLQWRELE1BY087QUFDTEYsYUFBTyxDQUFDQyxLQUFSLENBQWMsY0FBZDtBQUNEO0FBQ0YsR0FuQlksRUFvQmIsQ0FBQ3JDLElBQUQsRUFBT0osS0FBUCxDQXBCYSxDQUFmO0FBdUJBLFFBQU0rRixNQUFNLEdBQUc5Siw0Q0FBSyxDQUFDa0gsV0FBTixDQUNiLE1BQU82QyxPQUFQLElBQW1CO0FBQ2pCLFVBQU07QUFBQ3JKLFFBQUUsRUFBRXNELE1BQUw7QUFBYTBDLGNBQVEsRUFBRXpDO0FBQXZCLFFBQWtDRSxJQUFJLElBQUksRUFBaEQ7O0FBQ0EsUUFBSUgsTUFBTSxJQUFJQyxPQUFkLEVBQXVCO0FBQ3JCLFlBQU13QixPQUFPLEdBQUc7QUFDZEMsY0FBTSxFQUFFLE1BRE07QUFFZEcsWUFBSSxFQUFFO0FBQUNtRSxnQkFBTSxFQUFFLFNBQVQ7QUFBb0JELGlCQUFPLEVBQUVBO0FBQTdCO0FBRlEsT0FBaEI7QUFJQSxZQUFNcEUsR0FBRyxHQUFJLFNBQVE1QixLQUFNLFdBQVVFLE9BQVEsVUFBU0QsTUFBTyxXQUE3RDtBQUNBLFlBQU10QixjQUFjLENBQUMsQ0FBQ1ksU0FBRCxFQUFZLGdCQUFaLEVBQThCMkcsR0FBRyxJQUFJQSxHQUFHLENBQUNuRSxXQUF6QyxFQUFzRCxNQUF0RCxFQUE4RG9FLEdBQUcsSUFBSUEsR0FBRyxDQUFDdkUsR0FBRCxFQUFNRixPQUFOLENBQXhFLENBQUQsQ0FBcEI7QUFDQWdCLGlCQUFXO0FBQ1o7QUFDRixHQVpZLEVBYWIsQ0FBQ3RDLElBQUQsRUFBT0osS0FBUCxFQUFjRSxPQUFkLENBYmEsQ0FBZjtBQWdCQSxRQUFNa0csUUFBUSxHQUFHbkssNENBQUssQ0FBQ2tILFdBQU4sQ0FDZixNQUFPa0QsUUFBUCxJQUFvQjtBQUNsQixVQUFNO0FBQUMxSixRQUFFLEVBQUVzRCxNQUFMO0FBQWEwQyxjQUFRLEVBQUV6QztBQUF2QixRQUFrQ0UsSUFBSSxJQUFJLEVBQWhEOztBQUNBLFFBQUlILE1BQU0sSUFBSUMsT0FBZCxFQUF1QjtBQUNyQixZQUFNd0IsT0FBTyxHQUFHO0FBQ2RDLGNBQU0sRUFBRTtBQURNLE9BQWhCO0FBR0EsWUFBTUMsR0FBRyxHQUFJLFNBQVE1QixLQUFNLFdBQVVFLE9BQVEsVUFBU0QsTUFBTyxhQUFZb0csUUFBUyxFQUFsRjtBQUNBLFlBQU0xSCxjQUFjLENBQUMsQ0FBQ1ksU0FBRCxFQUFZLGdCQUFaLEVBQThCK0csR0FBRyxJQUFJQSxHQUFHLENBQUN2RSxXQUF6QyxFQUFzRCxNQUF0RCxFQUE4RHdFLEdBQUcsSUFBSUEsR0FBRyxDQUFDM0UsR0FBRCxFQUFNRixPQUFOLENBQXhFLENBQUQsQ0FBcEI7QUFDQWdCLGlCQUFXO0FBQ1o7QUFDRixHQVhjLEVBWWYsQ0FBQ3RDLElBQUQsRUFBT0osS0FBUCxFQUFjRSxPQUFkLENBWmUsQ0FBakI7QUFlQSxRQUFNcEMsZUFBZSxHQUFHN0IsNENBQUssQ0FBQ2tILFdBQU4sQ0FDdEIsTUFBT25GLE9BQVAsSUFBbUI7QUFDakIsVUFBTTtBQUFDckIsUUFBRSxFQUFFc0Q7QUFBTCxRQUFlRyxJQUFJLElBQUksRUFBN0I7O0FBQ0EsUUFBSUgsTUFBTSxJQUFJRCxLQUFkLEVBQXFCO0FBQ25CLFlBQU0wQixPQUFPLEdBQUc7QUFDZEMsY0FBTSxFQUFFLEtBRE07QUFFZEcsWUFBSSxFQUFFO0FBQUM5RCxpQkFBTyxFQUFFQTtBQUFWO0FBRlEsT0FBaEI7QUFJQSxZQUFNNEQsR0FBRyxHQUFJLFNBQVE1QixLQUFNLGlCQUFnQkMsTUFBTyxRQUFsRDtBQUNBLFlBQU07QUFBQ3FDO0FBQUQsVUFBVyxNQUFNM0QsY0FBYyxDQUFDLENBQUNZLFNBQUQsRUFBWSxnQkFBWixFQUE4QmlILEdBQUcsSUFBSUEsR0FBRyxDQUFDekUsV0FBekMsRUFBc0QsTUFBdEQsRUFBOEQwRSxHQUFHLElBQUlBLEdBQUcsQ0FBQzdFLEdBQUQsRUFBTUYsT0FBTixDQUF4RSxDQUFELENBQXJDOztBQUNBLFVBQUlnRixLQUFLLENBQUNDLE9BQU4sQ0FBY3JFLE1BQWQsQ0FBSixFQUEyQjtBQUN6QjNDLGdCQUFRLENBQUNtRiw2SEFBc0IsQ0FBQ3hDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVXNFLE9BQVgsQ0FBdkIsQ0FBUjtBQUNEOztBQUNEbkYsYUFBTztBQUNQaUIsaUJBQVc7QUFDWjtBQUNGLEdBaEJxQixFQWlCdEIsQ0FBQ3RDLElBQUQsRUFBT0osS0FBUCxFQUFjRSxPQUFkLENBakJzQixDQUF4QjtBQW9CQSxRQUFNMkcsUUFBUSxHQUFHNUssNENBQUssQ0FBQ2tILFdBQU4sQ0FDZixNQUFPckQsTUFBUCxJQUFrQjtBQUNoQixVQUFNeUQsTUFBTSxHQUFHO0FBQUM1QixZQUFNLEVBQUUsTUFBVDtBQUFpQkcsVUFBSSxFQUFFO0FBQUNnRixtQkFBVyxFQUFFaEg7QUFBZDtBQUF2QixLQUFmO0FBQ0EsVUFBTThCLEdBQUcsR0FBSSxTQUFRNUIsS0FBTSxXQUFVRSxPQUFRLFVBQVNFLElBQUksQ0FBQ3pELEVBQUcsU0FBOUQ7QUFDQSxVQUFNO0FBQUMyRjtBQUFELFFBQVcsTUFBTS9DLFNBQVMsQ0FBQ3dDLFdBQVYsQ0FBc0JILEdBQXRCLEVBQTJCMkIsTUFBM0IsQ0FBdkI7O0FBQ0EsUUFBSWpCLE1BQUosRUFBWTtBQUNWLFVBQUl4QyxNQUFKLEVBQVk7QUFDVkgsZ0JBQVEsQ0FBQ21GLDZIQUFzQixDQUFDLHVCQUFELENBQXZCLENBQVI7QUFDRCxPQUZELE1BRU87QUFDTG5GLGdCQUFRLENBQUNtRiw2SEFBc0IsQ0FBQyx5QkFBRCxDQUF2QixDQUFSO0FBQ0Q7O0FBQ0R0QyxhQUFPLENBQUNDLEtBQVIsQ0FBYyxzQkFBZDtBQUNELEtBUEQsTUFPTztBQUNMSixzQkFBZ0I7QUFDaEJLLGlCQUFXO0FBQ1o7QUFDRixHQWhCYyxFQWlCZixDQUFDdEMsSUFBRCxDQWpCZSxDQUFqQjtBQW9CQSxNQUFJLENBQUN6QixjQUFjLENBQUMsQ0FBQ3lCLElBQUQsRUFBTyxnQkFBUCxFQUF5QjJHLEdBQUcsSUFBSUEsR0FBRyxDQUFDcEssRUFBcEMsQ0FBRCxDQUFuQixFQUE4RCxPQUFPLElBQVA7QUFFOUQsc0JBQ0VWLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I4Syx3REFBcEIsRUFBMEI7QUFDeEJsSCxVQUFNLEVBQUVBLE1BRGdCO0FBRXhCbUgsWUFBUSxFQUFFdEksY0FBYyxDQUFDLENBQUN5QixJQUFELEVBQU8sZ0JBQVAsRUFBeUI4RyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsTUFBcEMsQ0FBRCxDQUFkLEtBQWdFLFdBRmxEO0FBR3hCL0csUUFBSSxFQUFFQSxJQUhrQjtBQUl4QjhDLFlBQVEsRUFBRUEsUUFKYztBQUt4QmxELFNBQUssRUFBRUEsS0FMaUI7QUFNeEIyRixVQUFNLEVBQUVBLE1BTmdCO0FBT3hCSSxVQUFNLEVBQUVBLE1BUGdCO0FBUXhCSyxZQUFRLEVBQUVBLFFBUmM7QUFTeEJTLFlBQVEsRUFBRUEsUUFUYztBQVV4QmpHLFdBQU8sRUFBRUEsT0FWZTtBQVd4QkosWUFBUSxFQUFFQSxRQVhjO0FBWXhCTSxXQUFPLEVBQUVBLE9BWmU7QUFheEJoRCxtQkFBZSxFQUFFQSxlQWJPO0FBY3hCc0osYUFBUyxFQUFFOUcsV0FBVyxJQUFJSSxlQWRGO0FBY21CdkUsVUFBTSxFQUFFLFNBZDNCO0FBY2lDQyxZQUFRLEVBQUU7QUFBQ0MsY0FBUSxFQUFFckIsWUFBWDtBQUF5QnNCLGdCQUFVLEVBQUU7QUFBckM7QUFkM0MsR0FBMUIsQ0FERjtBQWtCRCxDQXJSRDs7QUF1UmVnRCx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFRBLE1BQU10RSxZQUFZLEdBQUcsa0ZBQXJCOztBQUF5RyxTQUFTMkQsY0FBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFBRSxNQUFJQyxhQUFhLEdBQUdDLFNBQXBCO0FBQStCLE1BQUlDLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBZjtBQUFvQixNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFBVyxTQUFPQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBZixFQUF1QjtBQUFFLFVBQU1DLEVBQUUsR0FBR04sR0FBRyxDQUFDSSxDQUFELENBQWQ7QUFBbUIsVUFBTUcsRUFBRSxHQUFHUCxHQUFHLENBQUNJLENBQUMsR0FBRyxDQUFMLENBQWQ7QUFBdUJBLEtBQUMsSUFBSSxDQUFMOztBQUFRLFFBQUksQ0FBQ0UsRUFBRSxLQUFLLGdCQUFQLElBQTJCQSxFQUFFLEtBQUssY0FBbkMsS0FBc0RILEtBQUssSUFBSSxJQUFuRSxFQUF5RTtBQUFFLGFBQU9ELFNBQVA7QUFBbUI7O0FBQUMsUUFBSUksRUFBRSxLQUFLLFFBQVAsSUFBbUJBLEVBQUUsS0FBSyxnQkFBOUIsRUFBZ0Q7QUFBRUwsbUJBQWEsR0FBR0UsS0FBaEI7QUFBdUJBLFdBQUssR0FBR0ksRUFBRSxDQUFDSixLQUFELENBQVY7QUFBb0IsS0FBN0YsTUFBbUcsSUFBSUcsRUFBRSxLQUFLLE1BQVAsSUFBaUJBLEVBQUUsS0FBSyxjQUE1QixFQUE0QztBQUFFSCxXQUFLLEdBQUdJLEVBQUUsQ0FBQyxDQUFDLEdBQUdDLElBQUosS0FBYUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSLGFBQVgsRUFBMEIsR0FBR08sSUFBN0IsQ0FBZCxDQUFWO0FBQTZEUCxtQkFBYSxHQUFHQyxTQUFoQjtBQUE0QjtBQUFFOztBQUFDLFNBQU9DLEtBQVA7QUFBZTs7QUFBQTtBQUM1bUI7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkEsTUFBTXNJLGFBQWEsR0FBRyxrRkFBT0MsMkNBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXRCOztBQU1BLE1BQU1DLE9BQU8sR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBaEI7O0FBUUEsTUFBTUMsV0FBVyxHQUFHO0FBQUg7QUFBQSxpRUFHdUJ6SyxLQUFELElBQVlBLEtBQUssQ0FBQzBLLE1BQU4sR0FBZSxXQUFmLEdBQTZCLEVBSC9ELDhFQUFqQjs7QUFTQSxNQUFNQyxTQUFTLEdBQUc7QUFBQTtBQUFBLEdBQVc7QUFDM0JuSyxZQUFVLEVBQUUsR0FEZTtBQUUzQkwsT0FBSyxFQUFFN0IsZ0VBQU8sQ0FBQ3NNO0FBRlksQ0FBWCxDQUFsQjs7QUFLQSxNQUFNWCxJQUFJLEdBQUlqSyxLQUFELElBQVc7QUFDdEIsUUFBTTtBQUNKcUosWUFESTtBQUVKTCxVQUZJO0FBR0pqRyxVQUhJO0FBSUpVLFlBSkk7QUFLSkosUUFMSTtBQU1KOEMsWUFOSTtBQU9KdEMsV0FQSTtBQVFKWixTQVJJO0FBU0oyRixVQVRJO0FBVUppQyxTQVZJO0FBV0pmLFlBWEk7QUFZSkksWUFaSTtBQWFKbkosbUJBYkk7QUFjSnNKLGFBZEk7QUFlSnRHLFdBZkk7QUFnQkorRyxVQWhCSTtBQWlCSkM7QUFqQkksTUFrQkYvSyxLQWxCSjtBQW1CQSxRQUFNO0FBQUNKLE1BQUUsRUFBRXNELE1BQUw7QUFBYTBDLFlBQVEsRUFBRXpDLE9BQXZCO0FBQWdDbEMsV0FBTyxFQUFFQTtBQUF6QyxNQUFvRG9DLElBQUksSUFBSSxFQUFsRTtBQUNBLFFBQU07QUFBQ1g7QUFBRCxNQUFZQyx1RUFBUyxFQUEzQjtBQUNBLFFBQU0sQ0FBQ3FJLFVBQUQsRUFBYUMsYUFBYixJQUE4QjNKLHNEQUFRLENBQUM0QixNQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFDaUMsUUFBRDtBQUFPQztBQUFQLE1BQW1CdkIsT0FBTyxJQUFJLEVBQXBDO0FBQ0EsUUFBTXFILFNBQVMsR0FBSSxXQUFVL0gsT0FBUSxFQUFuQixJQUF3QixRQUExQztBQUNBLFFBQU07QUFBQ2dJO0FBQUQsTUFBVTlILElBQUksSUFBSSxFQUF4QjtBQUNBLFFBQU0rSCxPQUFPLEdBQUcvSCxJQUFJLENBQUMwQixJQUFMLENBQVV5QyxHQUFWLENBQWVSLEtBQUQsSUFBV0EsS0FBSyxDQUFDcUUsTUFBL0IsQ0FBaEI7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR04sVUFBVSxLQUFLakksTUFBekM7QUFDQSxNQUFJd0ksUUFBUSxHQUFHckIsUUFBUSxJQUFJb0IsaUJBQTNCOztBQUNBLE1BQUl2SCxPQUFPLElBQUl1SCxpQkFBZixFQUFrQztBQUNoQ0MsWUFBUSxHQUFHLElBQVg7QUFDRDs7QUFDRCxRQUFNLENBQUNDLFdBQUQsRUFBY0MsWUFBZCxJQUE4Qm5LLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU0sQ0FBQ29LLFFBQUQsRUFBV0MsU0FBWCxJQUF3QnJLLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU0sQ0FBQ3NLLElBQUQsRUFBT0MsT0FBUCxJQUFrQnZLLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUNBLFFBQU0sQ0FBQ3dLLGVBQUQsRUFBa0JDLGtCQUFsQixJQUF3Q3pLLHNEQUFRLENBQUMsSUFBRCxDQUF0RDtBQUNBLFFBQU07QUFDSjJDLFlBQVEsRUFBRTtBQUFDQyxjQUFEO0FBQVdDLFdBQUssRUFBRTZIO0FBQWxCO0FBRE4sTUFFRnRKLE9BQU8sSUFBSSxFQUZmO0FBR0EsUUFBTXVKLE9BQU8sR0FBR0Msb0RBQU0sRUFBdEI7QUFFQSxRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQzlLLHNEQUFRLENBQUNNLGNBQWMsQ0FBQyxDQUFDb0ssYUFBRCxFQUFnQixnQkFBaEIsRUFBa0NuRyxDQUFDLElBQUlBLENBQUMsQ0FBQ3NHLFdBQXpDLENBQUQsQ0FBZCxJQUF5RSxLQUExRSxDQUE5QztBQUVBLFFBQU07QUFDSkUsZUFBVyxFQUFFQyxXQURUO0FBRUpDLGdCQUFZLEVBQUVDLGVBRlY7QUFHSkMsZUFBVyxFQUFFQztBQUhULE1BSUZDLHNFQUFRLEVBSlo7QUFLQSxRQUFNO0FBQ0pOLGVBQVcsRUFBRU8sZUFEVDtBQUVKTCxnQkFBWSxFQUFFTSxtQkFGVjtBQUdKSixlQUFXLEVBQUVLO0FBSFQsTUFJRkgsc0VBQVEsRUFKWjtBQU1BLFFBQU12SSx3QkFBd0IsR0FBR0YsUUFBUSxDQUFDRyxRQUFULENBQWtCLE9BQWxCLENBQWpDO0FBQ0EsUUFBTTBJLGlCQUFpQixHQUFHbkIsSUFBSSxLQUFLLFVBQW5DO0FBQ0EsUUFBTW9CLGFBQWEsR0FBR3BCLElBQUksS0FBSyxNQUEvQjtBQUVBcksseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTTtBQUFDd0k7QUFBRCxRQUFnQjFHLElBQUksSUFBSSxFQUE5QjtBQUNBNEgsaUJBQWEsQ0FBQ2xCLFdBQUQsQ0FBYjs7QUFDQSxRQUFJRyxRQUFKLEVBQWM7QUFDWixZQUFNK0MsWUFBWSxHQUFHbkMsTUFBTSxDQUFDb0MsSUFBUCxDQUFhQyxDQUFELElBQU9BLENBQUMsQ0FBQ3ZOLEVBQUYsS0FBU3lELElBQUksQ0FBQ3VDLFFBQWpDLENBQXJCOztBQUNBLFVBQUlxSCxZQUFKLEVBQWtCO0FBQ2hCbEMsd0JBQWdCLENBQUNrQyxZQUFELENBQWhCO0FBQ0Q7QUFDRjtBQUNGLEdBVFEsRUFTTixDQUFDL0MsUUFBRCxFQUFXN0csSUFBWCxDQVRNLENBQVQ7O0FBV0EsUUFBTStKLFNBQVMsR0FBRyxNQUFNdkIsT0FBTyxDQUFDLElBQUQsQ0FBL0I7O0FBQ0Esc0JBQ0UzTSw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRCw0Q0FBSyxDQUFDc0MsUUFBMUIsRUFBb0MsSUFBcEMsZUFDSXRDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JrTyw2Q0FBcEIsRUFBNEI7QUFDNUJDLHNCQUFrQixFQUFFLElBRFE7QUFFNUJDLGlCQUFhLEVBQUVsSyxJQUZhO0FBRzVCOEMsWUFBUSxFQUFFLENBQUNxSCxPQUFELEVBQVVDLFNBQVYsS0FBd0I7QUFDaENBLGVBQVMsQ0FBQ0MsYUFBVixDQUF3QixLQUF4QjtBQUNELEtBTDJCO0FBTTVCQyxvQkFBZ0IsRUFBRSxJQU5VO0FBTzVCQyxrQkFBYyxFQUFFLElBUFk7QUFRNUJDLG1CQUFlLEVBQUUsSUFSVztBQVM1QkMsb0JBQWdCLEVBQUVDLDJFQVRVO0FBVTVCQyxZQUFRLEVBQUUvQixPQVZrQjtBQVVUN00sVUFBTSxFQUFFLFNBVkM7QUFVS0MsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixnQkFBVSxFQUFFO0FBQXJDO0FBVmYsR0FBNUIsRUFZRSxDQUFDO0FBQ0QwTyxnQkFEQztBQUVEM0gsVUFGQztBQUdENEgsaUJBSEM7QUFJREMsZ0JBSkM7QUFLREMsV0FMQztBQU1EN0ksVUFOQztBQU9EOEksY0FQQztBQVFEQztBQVJDLEdBQUQsS0FTSTtBQUNKLHdCQUNFcFAsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm1MLGFBQXBCLEVBQW1DO0FBQUNsTCxZQUFNLEVBQUUsU0FBVDtBQUFlQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixrQkFBVSxFQUFFO0FBQXJDO0FBQXpCLEtBQW5DLEVBQ0kySyxRQUFRLElBQUk5Rix3QkFBWixnQkFDQWxGLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvUCx1RUFBcEIsRUFBK0I7QUFDN0JDLGtCQUFZLGVBQ1Z0UCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc1AsNEVBQXBCLEVBQXFDO0FBQ25DaE4sV0FBRyxFQUFFLE1BRDhCO0FBRW5DQyxZQUFJLEVBQUUsUUFGNkI7QUFHbkNDLGVBQU8sRUFBRSxNQUFNZSxPQUFPLENBQUMrRixPQUFSLENBQWdCLFNBQWhCLENBSG9CO0FBR1FySixjQUFNLEVBQUUsU0FIaEI7QUFHc0JDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBSGhDLE9BQXJDLEVBSUUsTUFKRixDQUYyQjtBQVU3Qm1QLGlCQUFXLGVBQUV4UCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cd0wsU0FBcEIsRUFBK0I7QUFBRWxKLFdBQUcsRUFBRSxNQUFQO0FBQWVyQyxjQUFNLEVBQUUsU0FBdkI7QUFBNkJDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBQXZDLE9BQS9CLEVBQWtINEwsS0FBbEgsQ0FWZ0I7QUFXN0J3RCxtQkFBYSxlQUNYelAsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnNMLFdBQXBCLEVBQWlDO0FBQUVDLGNBQU0sRUFBRSxDQUFDM0csT0FBRCxHQUFXLElBQVgsR0FBa0IsS0FBNUI7QUFBbUN0QyxXQUFHLEVBQUUsV0FBeEM7QUFBcURyQyxjQUFNLEVBQUUsU0FBN0Q7QUFBbUVDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBQTdFLE9BQWpDLGVBQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JzUCw0RUFBcEIsRUFBcUM7QUFDckNHLGlCQUFTLEVBQUUsSUFEMEI7QUFFckNDLGdCQUFRLEVBQUUsQ0FBQ3pKLFFBRjBCO0FBR3JDMUQsWUFBSSxFQUFFLFFBSCtCO0FBSXJDQyxlQUFPLEVBQUUsTUFBTTtBQUNia0ssaUJBQU8sQ0FBQyxVQUFELENBQVA7QUFDQW5KLGlCQUFPLENBQUMrRixPQUFSLENBQWdCckQsUUFBaEI7QUFDRCxTQVBvQztBQU9sQ2hHLGNBQU0sRUFBRSxTQVAwQjtBQU9wQkMsZ0JBQVEsRUFBRTtBQUFDQyxrQkFBUSxFQUFFckIsWUFBWDtBQUF5QnNCLG9CQUFVLEVBQUU7QUFBckM7QUFQVSxPQUFyQyxFQVNFd04saUJBQWlCLElBQUkxQyxTQUFyQixnQkFBaUNuTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CRixrRUFBcEIsRUFBNkI7QUFBQ0csY0FBTSxFQUFFLFNBQVQ7QUFBZUMsZ0JBQVEsRUFBRTtBQUFDQyxrQkFBUSxFQUFFckIsWUFBWDtBQUF5QnNCLG9CQUFVLEVBQUU7QUFBckM7QUFBekIsT0FBN0IsQ0FBakMsR0FBdUksVUFUekksQ0FESixFQVlJLENBQUN3RSxPQUFELGlCQUNBN0UsNENBQUssQ0FBQ0MsYUFBTixDQUFvQmlDLDBGQUFwQixFQUFtQztBQUNqQzZCLGFBQUssRUFBRUEsS0FEMEI7QUFFakNFLGVBQU8sRUFBRUEsT0FGd0I7QUFHakNELGNBQU0sRUFBRUEsTUFIeUI7QUFJakNqQyxlQUFPLEVBQUVBLE9BSndCO0FBS2pDRix1QkFBZSxFQUFHc0IsSUFBRCxJQUFVO0FBQ3pCK0ssbUJBQVM7QUFDVHJNLHlCQUFlLENBQUNzQixJQUFELENBQWY7QUFDRCxTQVJnQztBQVE5QmpELGNBQU0sRUFBRSxTQVJzQjtBQVFoQkMsZ0JBQVEsRUFBRTtBQUFDQyxrQkFBUSxFQUFFckIsWUFBWDtBQUF5QnNCLG9CQUFVLEVBQUU7QUFBckM7QUFSTSxPQUFuQyxDQWJKLGVBd0JJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMlAsMEVBQXBCLEVBQW1DO0FBQ25DRixpQkFBUyxFQUFFLElBRHdCO0FBRW5DQyxnQkFBUSxFQUFFLENBQUMxSixJQUZ3QjtBQUduQ3pELFlBQUksRUFBRSxRQUg2QjtBQUluQ0MsZUFBTyxFQUFFLE1BQU07QUFDYmtLLGlCQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FuSixpQkFBTyxDQUFDK0YsT0FBUixDQUFnQnRELElBQWhCO0FBQ0QsU0FQa0M7QUFPaEMvRixjQUFNLEVBQUUsU0FQd0I7QUFPbEJDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBUFEsT0FBbkMsRUFTRXlOLGFBQWEsSUFBSTNDLFNBQWpCLGdCQUE2Qm5MLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JGLGtFQUFwQixFQUE2QjtBQUFDRyxjQUFNLEVBQUUsU0FBVDtBQUFlQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUF6QixPQUE3QixDQUE3QixHQUFtSSxNQVRySSxDQXhCSixDQVoyQjtBQWdEM0JILFlBQU0sRUFBRSxTQWhEbUI7QUFnRGJDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFckIsWUFBWDtBQUF5QnNCLGtCQUFVLEVBQUU7QUFBckM7QUFoREcsS0FBL0IsQ0FEQSxnQkFvREFMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JvUCx1RUFBcEIsRUFBK0I7QUFDN0JDLGtCQUFZLGVBQ1Z0UCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc1AsNEVBQXBCLEVBQXFDO0FBQ25DaE4sV0FBRyxFQUFFLE1BRDhCO0FBRW5DQyxZQUFJLEVBQUUsUUFGNkI7QUFHbkNDLGVBQU8sRUFBRSxNQUFNO0FBQ2IsY0FBSXdLLFdBQVcsSUFBSUYsT0FBTyxDQUFDOEMsT0FBUixDQUFnQkMsS0FBbkMsRUFBMEM7QUFDeEN4QywyQkFBZTtBQUNoQixXQUZELE1BRU87QUFDTDlKLG1CQUFPLENBQUMrRixPQUFSLENBQWdCeUMsU0FBaEI7QUFDRDtBQUNGLFNBVGtDO0FBU2hDOUwsY0FBTSxFQUFFLFNBVHdCO0FBU2xCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQVRRLE9BQXJDLEVBVUUsTUFWRixDQUYyQjtBQWdCN0JtUCxpQkFBVyxlQUFFeFAsNENBQUssQ0FBQ0MsYUFBTixDQUFvQndMLFNBQXBCLEVBQStCO0FBQUVsSixXQUFHLEVBQUUsTUFBUDtBQUFlckMsY0FBTSxFQUFFLFNBQXZCO0FBQTZCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUF2QyxPQUEvQixFQUFrSDRMLEtBQWxILENBaEJnQjtBQWlCN0J3RCxtQkFBYSxlQUNYelAsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnNMLFdBQXBCLEVBQWlDO0FBQUNyTCxjQUFNLEVBQUUsU0FBVDtBQUFlQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUF6QixPQUFqQyxlQUNJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cc1AsNEVBQXBCLEVBQXFDO0FBQ3JDRyxpQkFBUyxFQUFFLElBRDBCO0FBRXJDQyxnQkFBUSxFQUFFdEQsUUFBUSxJQUFJNEMsWUFGZTtBQUdyQ3pNLFlBQUksRUFBRSxRQUgrQjtBQUlyQ0MsZUFBTyxFQUFFLFlBQVk7QUFDbkJnSyxtQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLGdCQUFNL0MsTUFBTSxDQUFDdEMsTUFBRCxDQUFaO0FBQ0E4Rix3QkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBVCxtQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBMkMsc0JBQVksQ0FBQ2hJLE1BQUQsQ0FBWjtBQUNELFNBVm9DO0FBVWxDbEgsY0FBTSxFQUFFLFNBVjBCO0FBVXBCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQVZVLE9BQXJDLEVBWUVtTSxRQUFRLGdCQUFHeE0sNENBQUssQ0FBQ0MsYUFBTixDQUFvQkYsa0VBQXBCLEVBQTZCO0FBQUNHLGNBQU0sRUFBRSxTQUFUO0FBQWVDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBQXpCLE9BQTdCLENBQUgsR0FBeUcsTUFabkgsQ0FESixlQWVJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CMlAsMEVBQXBCLEVBQW1DO0FBQ25DRixpQkFBUyxFQUFFLElBRHdCO0FBRW5DQyxnQkFBUSxFQUFFdEQsUUFBUSxJQUFJNEMsWUFBWixJQUE0QixDQUFDQyxPQUZKO0FBR25DMU0sWUFBSSxFQUFFLFFBSDZCO0FBSW5DQyxlQUFPLEVBQUUsTUFBTzBFLENBQVAsSUFBYTtBQUNwQm9GLHNCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0EsZ0JBQU10RixRQUFRLENBQUNFLENBQUQsRUFBSUMsTUFBSixFQUFZckQsS0FBWixDQUFkO0FBQ0F3SSxzQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELFNBUmtDO0FBUWhDck0sY0FBTSxFQUFFLFNBUndCO0FBUWxCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQVJRLE9BQW5DLEVBVUVpTSxXQUFXLGdCQUFHdE0sNENBQUssQ0FBQ0MsYUFBTixDQUFvQkYsa0VBQXBCLEVBQTZCO0FBQUNHLGNBQU0sRUFBRSxTQUFUO0FBQWVDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBQXpCLE9BQTdCLENBQUgsR0FBeUcsUUFWdEgsQ0FmSixDQWxCMkI7QUE4QzNCSCxZQUFNLEVBQUUsU0E5Q21CO0FBOENiQyxjQUFRLEVBQUU7QUFBQ0MsZ0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixrQkFBVSxFQUFFO0FBQXJDO0FBOUNHLEtBQS9CLENBckRKLGVBc0dJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9COFAsaURBQXBCLEVBQWdDO0FBQ2hDOUgsVUFBSSxFQUFFLE1BRDBCO0FBRWhDK0gsWUFBTSxFQUFFLG1CQUNOaFEsNENBQUssQ0FBQ0MsYUFBTixDQUFvQnFMLE9BQXBCLEVBQTZCO0FBQUNwTCxjQUFNLEVBQUUsU0FBVDtBQUFlQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUF6QixPQUE3QixlQUNJTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CZ1EsZ0RBQXBCLEVBQTZCO0FBQzdCbkcsY0FBTSxFQUFHM0csSUFBRCxJQUFVO0FBQ2hCK0ssbUJBQVM7QUFDVHBFLGdCQUFNLENBQUMzRyxJQUFELENBQU47QUFDRCxTQUo0QjtBQUs3QmdILGdCQUFRLEVBQUdoSCxJQUFELElBQVU7QUFDbEIrSyxtQkFBUztBQUNUL0Qsa0JBQVEsQ0FBQ2hILElBQUQsQ0FBUjtBQUNELFNBUjRCO0FBUzdCMkksa0JBQVUsRUFBRUEsVUFUaUI7QUFVN0IzSCxZQUFJLEVBQUVBLElBVnVCO0FBVzdCd0gsYUFBSyxFQUFFQSxLQVhzQjtBQVk3QmYsZ0JBQVEsRUFBRSxDQUFDc0YsUUFBRCxFQUFXQyxRQUFYLEtBQXdCO0FBQ2hDakMsbUJBQVM7QUFDVHJCLDRCQUFrQixDQUFDO0FBQ2pCcUQsb0JBRGlCO0FBRWpCQztBQUZpQixXQUFELENBQWxCOztBQUlBLGNBQUlsRCxXQUFXLElBQUlGLE9BQU8sQ0FBQzhDLE9BQVIsQ0FBZ0JDLEtBQW5DLEVBQTBDO0FBQ3hDbkMsK0JBQW1CO0FBQ3BCLFdBRkQsTUFFTztBQUNML0Msb0JBQVEsQ0FBQ3NGLFFBQUQsRUFBV0MsUUFBWCxDQUFSO0FBQ0Q7QUFDRixTQXZCNEI7QUF3QjdCbE0sZUFBTyxFQUFFQSxPQXhCb0I7QUF5QjdCRixhQUFLLEVBQUVBLEtBekJzQjtBQTBCN0JRLGdCQUFRLEVBQUVBLFFBMUJtQjtBQTJCN0J5RyxnQkFBUSxFQUFFQSxRQTNCbUI7QUE0QjdCakosZUFBTyxFQUFFQSxPQTVCb0I7QUE2QjdCa0ssYUFBSyxFQUFFQSxLQTdCc0I7QUE2QmYvTCxjQUFNLEVBQUUsU0E3Qk87QUE2QkRDLGdCQUFRLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixvQkFBVSxFQUFFO0FBQXJDO0FBN0JULE9BQTdCLENBREosZUFnQ0lMLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRW1RLGFBQUssRUFBRTtBQUFDM1EsZUFBSyxFQUFFO0FBQVIsU0FBVDtBQUEwQlMsY0FBTSxFQUFFLFNBQWxDO0FBQXdDQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUFsRCxPQUEzQixFQUNFLEVBQ0MySyxRQUFRLElBQUk4QyxhQUFaLElBQTZCM0MsU0FBOUIsSUFDQzBDLGlCQUFpQixJQUFJMUMsU0FGdEIsa0JBSUFuTCw0Q0FBSyxDQUFDQyxhQUFOLENBQW9Cb1EsZ0VBQXBCLEVBQXlCO0FBQ3ZCQyxtQkFBVyxFQUFFLEtBRFU7QUFFdkJDLG1CQUFXLEVBQUUsS0FGVTtBQUd2QkMsbUJBQVcsRUFBRSxLQUhVO0FBSXZCdEUsZUFBTyxFQUFFQSxPQUpjO0FBSUxoTSxjQUFNLEVBQUUsU0FKSDtBQUlTQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQUpuQixPQUF6QixFQU1JK0csTUFBTSxDQUFDdkIsSUFBUCxDQUFZeUMsR0FBWixDQUFnQixDQUFDUixLQUFELEVBQVEySSxHQUFSLEtBQWdCO0FBQ2hDLFlBQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxZQUFJckssTUFBTSxDQUFDUixJQUFQLElBQWVRLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZNEssR0FBWixNQUFxQjVOLFNBQXhDLEVBQW1EO0FBQ2pENk4sd0JBQWMsR0FBR3JLLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZNEssR0FBWixDQUFqQjtBQUNEOztBQUNELDRCQUNFelEsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjBRLDBFQUFwQixFQUFrQztBQUNoQ3BPLGFBQUcsRUFBRXVGLEtBQUssQ0FBQ3BILEVBRHFCO0FBRWhDLHVCQUFhb0gsS0FBSyxDQUFDcUUsTUFGYTtBQUdoQ3lFLGVBQUssRUFBRUgsR0FIeUI7QUFJaENqTyxjQUFJLEVBQUVzRixLQUFLLENBQUN0RixJQUpvQjtBQUlkdEMsZ0JBQU0sRUFBRSxTQUpNO0FBSUFDLGtCQUFRLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixzQkFBVSxFQUFFO0FBQXJDO0FBSlYsU0FBbEMsZUFNSUwsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjRRLDJFQUFwQixFQUFvQztBQUNwQzdCLHVCQUFhLEVBQUUsQ0FBQzhCLEtBQUQsRUFBUWpMLElBQVIsS0FBaUI7QUFDOUJxSCwwQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBOEIseUJBQWEsQ0FBQzhCLEtBQUQsRUFBUWpMLElBQVIsQ0FBYjtBQUNELFdBSm1DO0FBS3BDaUMsZUFBSyxFQUFFQSxLQUw2QjtBQU1wQ3pCLGdCQUFNLEVBQUVxSyxjQU40QjtBQU9wQzNCLHNCQUFZLEVBQUc1SCxDQUFELElBQU87QUFDbkIrRiwwQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBNkIsd0JBQVksQ0FBQzVILENBQUQsQ0FBWjtBQUNELFdBVm1DO0FBV3BDZ0ksb0JBQVUsRUFBRUEsVUFYd0I7QUFZcEN5QixlQUFLLEVBQUVILEdBWjZCO0FBYXBDTSxtQkFBUyxFQUFFLEtBYnlCO0FBY3BDL0Ysa0JBQVEsRUFBRXFCLFFBZDBCO0FBY2hCbk0sZ0JBQU0sRUFBRSxTQWRRO0FBY0ZDLGtCQUFRLEVBQUU7QUFBQ0Msb0JBQVEsRUFBRXJCLFlBQVg7QUFBeUJzQixzQkFBVSxFQUFFO0FBQXJDO0FBZFIsU0FBcEMsQ0FOSixDQURGO0FBeUJELE9BOUJDLENBTkosQ0FMRixDQWhDSixFQThFSStNLFdBQVcsZUFDWHBOLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IrUSw0RUFBcEIsRUFBdUM7QUFDckN6RCxtQkFBVyxFQUFFQyxjQUR3QjtBQUVyQ3lELGFBQUssRUFBRyxxQkFGNkI7QUFHckNDLG1CQUFXLEVBQUcsZUFIdUI7QUFJckN2RyxlQUFPLEVBQUcsb0RBSjJCO0FBS3JDd0csaUJBQVMsRUFBRSxNQUFNO0FBQ2YzTixpQkFBTyxDQUFDK0YsT0FBUixDQUFnQnlDLFNBQWhCO0FBQ0QsU0FQb0M7QUFRckNvRixnQkFBUSxFQUFFLFlBQVk7QUFDcEIzRSxtQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLGdCQUFNL0MsTUFBTSxDQUFDdEMsTUFBRCxDQUFaO0FBQ0E4Rix3QkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBVCxtQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBakosaUJBQU8sQ0FBQytGLE9BQVIsQ0FBZ0J5QyxTQUFoQjtBQUNELFNBZG9DO0FBY2xDOUwsY0FBTSxFQUFFLFNBZDBCO0FBY3BCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQWRVLE9BQXZDLENBRFcsQ0E5RWYsRUFnR0lxTixlQUFlLGVBQ2YxTiw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CK1EsNEVBQXBCLEVBQXVDO0FBQ3JDekQsbUJBQVcsRUFBRUssa0JBRHdCO0FBRXJDcUQsYUFBSyxFQUFHLHlCQUY2QjtBQUdyQ0MsbUJBQVcsRUFBRyxtQkFIdUI7QUFJckN2RyxlQUFPLEVBQUcsb0RBSjJCO0FBS3JDd0csaUJBQVMsRUFBRSxNQUFNO0FBQ2ZqRCxtQkFBUztBQUNUdEQsa0JBQVEsQ0FBQ2dDLGVBQWUsQ0FBQ3NELFFBQWpCLEVBQTJCdEQsZUFBZSxDQUFDdUQsUUFBM0MsQ0FBUjtBQUNBdEQsNEJBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNELFNBVG9DO0FBVXJDdUUsZ0JBQVEsRUFBRSxZQUFZO0FBQ3BCM0UsbUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxnQkFBTS9DLE1BQU0sQ0FBQ3RDLE1BQUQsQ0FBWjtBQUNBOEYsd0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQVQsbUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQXlCLG1CQUFTO0FBQ1R0RCxrQkFBUSxDQUFDZ0MsZUFBZSxDQUFDc0QsUUFBakIsRUFBMkJ0RCxlQUFlLENBQUN1RCxRQUEzQyxDQUFSO0FBQ0QsU0FqQm9DO0FBaUJsQ2pRLGNBQU0sRUFBRSxTQWpCMEI7QUFpQnBCQyxnQkFBUSxFQUFFO0FBQUNDLGtCQUFRLEVBQUVyQixZQUFYO0FBQXlCc0Isb0JBQVUsRUFBRTtBQUFyQztBQWpCVSxPQUF2QyxDQURlLENBaEduQixDQUg4QjtBQXlIN0JILFlBQU0sRUFBRSxTQXpIcUI7QUF5SGZDLGNBQVEsRUFBRTtBQUFDQyxnQkFBUSxFQUFFckIsWUFBWDtBQUF5QnNCLGtCQUFVLEVBQUU7QUFBckM7QUF6SEssS0FBaEMsQ0F0R0osQ0FERjtBQW9PRCxHQTFQRCxDQURKLENBREY7QUFnUUQsQ0F0VUQ7O0FBd1VBLE1BQU1nUixlQUFlLEdBQUlwTSxLQUFELEtBQVk7QUFDbEMwRyxPQUFLLEVBQUUxRyxLQUFLLENBQUMwRyxLQURxQjtBQUVsQ0MsUUFBTSxFQUFFM0csS0FBSyxDQUFDMkcsTUFBTixDQUFhQTtBQUZhLENBQVosQ0FBeEI7O0FBS0EsTUFBTTBGLGtCQUFrQixHQUFJNU4sUUFBRCxLQUFlO0FBQ3hDbUksa0JBQWdCLEVBQUcwRixHQUFELElBQVM3TixRQUFRLENBQUM4Tiw2RUFBZ0IsQ0FBQzNGLGdCQUFqQixDQUFrQzBGLEdBQWxDLENBQUQ7QUFESyxDQUFmLENBQTNCOztBQUllRSwwSEFBTyxDQUFDSixlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q3ZHLElBQTdDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDclpDO0FBQUE7QUFBQSxTQUFTckksY0FBVCxDQUF3QkMsR0FBeEIsRUFBNkI7QUFBRSxNQUFJQyxhQUFhLEdBQUdDLFNBQXBCO0FBQStCLE1BQUlDLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBZjtBQUFvQixNQUFJSSxDQUFDLEdBQUcsQ0FBUjs7QUFBVyxTQUFPQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBZixFQUF1QjtBQUFFLFVBQU1DLEVBQUUsR0FBR04sR0FBRyxDQUFDSSxDQUFELENBQWQ7QUFBbUIsVUFBTUcsRUFBRSxHQUFHUCxHQUFHLENBQUNJLENBQUMsR0FBRyxDQUFMLENBQWQ7QUFBdUJBLEtBQUMsSUFBSSxDQUFMOztBQUFRLFFBQUksQ0FBQ0UsRUFBRSxLQUFLLGdCQUFQLElBQTJCQSxFQUFFLEtBQUssY0FBbkMsS0FBc0RILEtBQUssSUFBSSxJQUFuRSxFQUF5RTtBQUFFLGFBQU9ELFNBQVA7QUFBbUI7O0FBQUMsUUFBSUksRUFBRSxLQUFLLFFBQVAsSUFBbUJBLEVBQUUsS0FBSyxnQkFBOUIsRUFBZ0Q7QUFBRUwsbUJBQWEsR0FBR0UsS0FBaEI7QUFBdUJBLFdBQUssR0FBR0ksRUFBRSxDQUFDSixLQUFELENBQVY7QUFBb0IsS0FBN0YsTUFBbUcsSUFBSUcsRUFBRSxLQUFLLE1BQVAsSUFBaUJBLEVBQUUsS0FBSyxjQUE1QixFQUE0QztBQUFFSCxXQUFLLEdBQUdJLEVBQUUsQ0FBQyxDQUFDLEdBQUdDLElBQUosS0FBYUwsS0FBSyxDQUFDTSxJQUFOLENBQVdSLGFBQVgsRUFBMEIsR0FBR08sSUFBN0IsQ0FBZCxDQUFWO0FBQTZEUCxtQkFBYSxHQUFHQyxTQUFoQjtBQUE0QjtBQUFFOztBQUFDLFNBQU9DLEtBQVA7QUFBZTs7QUFBQTs7QUFFcGdCLE1BQU0wRSxZQUFZLEdBQUlKLE1BQUQsSUFBWTtBQUMvQixNQUFJc0ssTUFBSjs7QUFFQSxNQUFJakgsS0FBSyxDQUFDQyxPQUFOLENBQWN0RCxNQUFNLENBQUN2QixJQUFyQixDQUFKLEVBQWdDO0FBQzlCNkwsVUFBTSxHQUFHdEssTUFBTSxDQUFDdkIsSUFBaEI7QUFDRCxHQUZELE1BRU8sSUFBSTRFLEtBQUssQ0FBQ0MsT0FBTixDQUFjdEQsTUFBZCxDQUFKLEVBQTJCO0FBQ2hDc0ssVUFBTSxHQUFHdEssTUFBVDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU9BLE1BQVA7QUFDRDs7QUFFRHNLLFFBQU0sQ0FBQ0MsTUFBUCxDQUFlQyxHQUFELElBQVM7QUFDckIsUUFBSUEsR0FBRyxDQUFDN0osb0VBQVUsQ0FBQzhKLHdCQUFaLENBQUgsS0FBNkNoUCxTQUFqRCxFQUE0RDtBQUMxREgsb0JBQWMsQ0FBQyxDQUFDa1AsR0FBRCxFQUFNLFFBQU4sRUFBZ0JqTCxDQUFDLElBQUlBLENBQUMsQ0FBQ29CLG9FQUFVLENBQUM4Six3QkFBWixDQUF0QixFQUE2RCxRQUE3RCxFQUF1RWpMLEVBQUUsSUFBSUEsRUFBRSxDQUFDa0wsUUFBaEYsRUFBMEYsZ0JBQTFGLEVBQTRHakwsRUFBRSxJQUFJQSxFQUFFLENBQUM4SyxNQUFySCxFQUE2SCxNQUE3SCxFQUFxSTVLLEVBQUUsSUFBSUEsRUFBRSxDQUFFZ0wsTUFBRCxJQUFZO0FBQ3ZLLGVBQU9BLE1BQU0sQ0FBQzlRLEtBQWQ7QUFDQSxlQUFPOFEsTUFBTSxDQUFDQyxJQUFkO0FBQ0QsT0FIMkosQ0FBN0ksQ0FBRCxDQUFkO0FBSUQ7O0FBQ0QsUUFBSUosR0FBRyxDQUFDN0osb0VBQVUsQ0FBQ2tLLGNBQVosQ0FBSCxLQUFtQ3BQLFNBQXZDLEVBQWtEO0FBQ2hELFVBQUk0SCxLQUFLLENBQUNDLE9BQU4sQ0FBY2tILEdBQUcsQ0FBQzdKLG9FQUFVLENBQUNrSyxjQUFaLENBQUgsQ0FBK0JuUCxLQUEvQixDQUFxQ29QLE9BQW5ELENBQUosRUFBaUU7QUFDL0ROLFdBQUcsQ0FBQzdKLG9FQUFVLENBQUNrSyxjQUFaLENBQUgsQ0FBK0JuUCxLQUEvQixDQUFxQ29QLE9BQXJDLENBQTZDUCxNQUE3QyxDQUFxREksTUFBRCxJQUFZO0FBQzlELGlCQUFPQSxNQUFNLENBQUM5USxLQUFkO0FBQ0QsU0FGRDtBQUdEOztBQUNELFVBQUkyUSxHQUFHLENBQUM3SixvRUFBVSxDQUFDa0ssY0FBWixDQUFILENBQStCblAsS0FBL0IsQ0FBcUNxUCxLQUFyQyxLQUErQyxFQUFuRCxFQUF1RDtBQUNyRFAsV0FBRyxDQUFDN0osb0VBQVUsQ0FBQ2tLLGNBQVosQ0FBSCxDQUErQm5QLEtBQS9CLENBQXFDcVAsS0FBckMsR0FBNkMsSUFBN0M7QUFDRDtBQUNGOztBQUNELFdBQU9QLEdBQVA7QUFDRCxHQWxCRDtBQW1CQSxTQUFPeEssTUFBUDtBQUNELENBL0JEOztBQWlDZUksMkVBQWYsRSIsImZpbGUiOiJUYXNrUm9vdF9kN2Y4MjYzNjkxNTQxZTAyZWFjMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy9jbGllbnQvY29tcG9uZW50cy9TcGlubmVyLnRzeFwiO2ltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7a2V5ZnJhbWVzfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3N0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBrZXlmcmFtZXNTcGluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuYFxuXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2KHtcbiAgYm9yZGVyOiBgMnB4IHNvbGlkICR7UEFMRVRURS5CT1JERVJfR1JBWX1gLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBib3JkZXJUb3A6IGAycHggc29saWQgJHtQQUxFVFRFLlBSSU1BUllfTUFJTn1gLFxuICB3aWR0aDogMjAsXG4gIGhlaWdodDogMjAsXG4gIGFuaW1hdGlvbk5hbWU6IGtleWZyYW1lc1NwaW4udG9TdHJpbmcoKSxcbiAgYW5pbWF0aW9uRHVyYXRpb246ICcxcycsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnXG59KVxuXG5jb25zdCBTcGlubmVyID0gKCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjZ9fSApXG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcbiIsImltcG9ydCB7U1RBRkZfT1JHX0lEfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBpc1VzZXJTdGFmZiA9IChvcmdhbml6YXRpb25zLCBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCkgPT4ge1xuICBmb3IgKGNvbnN0IG9yZyBvZiBvcmdhbml6YXRpb25zKSB7XG4gICAgaWYgKG9yZy5pZCA9PT0gU1RBRkZfT1JHX0lEICYmIGN1cnJlbnRfb3JnYW5pemF0aW9uX2lkID09PSBTVEFGRl9PUkdfSUQpIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IGlzVXNlclN0YWZmXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXREZWNpc2lvbi50c3hcIjtpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQbGFpbkJ1dHRvbiwge30gZnJvbSAnY2xpZW50L2NvbXBvbmVudHMvUGxhaW5CdXR0b24nXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BBTEVUVEV9IGZyb20gJ3VuaXZlcnNhbC9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCBJY29uIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0ljb24nXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRGVjaXNpb25CdXR0b24gPSBzdHlsZWQoUGxhaW5CdXR0b24pKChwcm9wcykgPT4ge1xuICBjb25zdCB7aXNBcHByb3ZlLCBpc0FjdGl2ZX0gPSBwcm9wc1xuICBjb25zdCBjb2xvciA9IGlzQXBwcm92ZSA/IFBBTEVUVEUuUFJJTUFSWV9HUkVFTiA6IFBBTEVUVEUuRVJST1JfTUFJTlxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzQWN0aXZlID8gY29sb3IgOiAnd2hpdGUnLFxuICAgIGNvbG9yOiBpc0FjdGl2ZSA/ICd3aGl0ZScgOiBjb2xvcixcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtpc0FjdGl2ZSA/ICd3aGl0ZScgOiBjb2xvcn1gLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGJveFNoYWRvdzogJ3JnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMHB4IDBweCAxcHggaW5zZXQsIHJnYmEoMTUsIDE1LCAxNSwgMC4xKSAwcHggMXB4IDJweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzIGVhc2UtaW4tb3V0JyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiBgMCA0cHggOHB4ICR7aXNBcHByb3ZlID8gJ3JnYmEoMCwxNzMsNjksMC4wNSknIDogJ3JnYmEoMjU1LDc0LDAsMC4wNSknfWBcbiAgICB9LFxuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/ICd3aGl0ZScgOiBjb2xvcixcbiAgICAgIGNvbG9yOiBpc0FjdGl2ZSA/IGNvbG9yIDogJ3doaXRlJyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2lzQWN0aXZlID8gY29sb3IgOiAnd2hpdGUnfWBcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoSWNvbikoe1xuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIGZvbnRTaXplOiAxNlxufSlcblxuLypcbktleSBwYXJhbWV0ZXJzOlxuLSBkZWNpc2lvbjogdHJ1ZSBpZiB0aGUgYnV0dG9uIGlzIEFwcHJvdmUsIGZhbHNlIGlmIHRoZSBidXR0b24gaXMgUmVqZWN0XG4tIGNvcnJlY3Q6IGN1cnJlbnQgYXVkaXQgZGVjaXNpb25cblxuV2UgZmxpcCB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiBieSBjb21wYXJpbmcgZGVjaXNpb24gYW5kIGNvcnJlY3Q6IGllIGlmIGRlY2lzaW9uIGlzIHRydWUsIHRoZSBzdGF0ZSBjYW4gb25seSBmbGlwIGJldHdlZW4gdHJ1ZSBhbmQgbnVsbC5cblxuVGhlIHNlcnZlciB0YWtlcyBzb21lIHRpbWUgdG8gcmVzcG9uZCAob25BdWRpdERlY2lzaW9uKSB3aGljaCByZXN1bHRzIGluIGEgZmVlZGJhY2sgZGVsYXksIHNvIHdlIGNoYW5nZSBpdHMgc3RhdGUgZGlyZWN0bHkgKHNldENvcnJlY3RTdGF0ZSkgb24gY2xpY2tcbiovXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoXG4gIG9uQXVkaXREZWNpc2lvbixcbiAgc2V0Q29ycmVjdFN0YXRlLFxuICBjb3JyZWN0LFxuICBkZWNpc2lvblxuKSB7XG4gIGNvbnN0IG5ld0RlY2lzaW9uID0gY29ycmVjdCA9PT0gZGVjaXNpb24gPyBudWxsIDogZGVjaXNpb25cbiAgc2V0Q29ycmVjdFN0YXRlKG5ld0RlY2lzaW9uKVxuICBvbkF1ZGl0RGVjaXNpb24obmV3RGVjaXNpb24pXG59XG5cbmNvbnN0IEF1ZGl0RGVjaXNpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2NvcnJlY3QsIG9uQXVkaXREZWNpc2lvbn0gPSBwcm9wc1xuICBjb25zdCBbY29ycmVjdFN0YXRlLCBzZXRDb3JyZWN0U3RhdGVdID0gdXNlU3RhdGUoY29ycmVjdClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvcnJlY3RTdGF0ZShjb3JyZWN0KVxuICB9LCBbY29ycmVjdF0pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgwfX1cbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEZWNpc2lvbkJ1dHRvbiwge1xuICAgICAgICBrZXk6IFwiYXBwcm92ZVwiLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyKG9uQXVkaXREZWNpc2lvbiwgc2V0Q29ycmVjdFN0YXRlLCBjb3JyZWN0U3RhdGUsIHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIGlzQXBwcm92ZTogdHJ1ZSxcbiAgICAgICAgaXNBY3RpdmU6IGNvcnJlY3RTdGF0ZSA9PT0gdHJ1ZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDgxfX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA5MH19LCBcImRvbmVcIilcbiAgICAgIClcbiAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChEZWNpc2lvbkJ1dHRvbiwge1xuICAgICAgICBrZXk6IFwicmVqZWN0XCIsXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICBjbGlja0hhbmRsZXIob25BdWRpdERlY2lzaW9uLCBzZXRDb3JyZWN0U3RhdGUsIGNvcnJlY3RTdGF0ZSwgZmFsc2UpXG4gICAgICAgIH0sXG4gICAgICAgIGlzQXBwcm92ZTogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlOiBjb3JyZWN0U3RhdGUgPT09IGZhbHNlLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTJ9fVxuICAgICAgXG4gICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZWRJY29uLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDEwMX19LCBcImNsb3NlXCIpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGl0RGVjaXNpb25cbiIsImNvbnN0IF9qc3hGaWxlTmFtZSA9IFwiL1VzZXJzL2EvZ2l0L0h1bWFuLUxhbWJkYXMvaGwtd2ViL3NyYy91bml2ZXJzYWwvbW9kdWxlcy90YXNrL1Rhc2tSb290LnRzeFwiOyBmdW5jdGlvbiBfb3B0aW9uYWxDaGFpbihvcHMpIHsgbGV0IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IGxldCB2YWx1ZSA9IG9wc1swXTsgbGV0IGkgPSAxOyB3aGlsZSAoaSA8IG9wcy5sZW5ndGgpIHsgY29uc3Qgb3AgPSBvcHNbaV07IGNvbnN0IGZuID0gb3BzW2kgKyAxXTsgaSArPSAyOyBpZiAoKG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgJiYgdmFsdWUgPT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGlmIChvcCA9PT0gJ2FjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbEFjY2VzcycpIHsgbGFzdEFjY2Vzc0xIUyA9IHZhbHVlOyB2YWx1ZSA9IGZuKHZhbHVlKTsgfSBlbHNlIGlmIChvcCA9PT0gJ2NhbGwnIHx8IG9wID09PSAnb3B0aW9uYWxDYWxsJykgeyB2YWx1ZSA9IGZuKCguLi5hcmdzKSA9PiB2YWx1ZS5jYWxsKGxhc3RBY2Nlc3NMSFMsIC4uLmFyZ3MpKTsgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgfSB9IHJldHVybiB2YWx1ZTsgfS8qKlxuICogVE9ETyBoYW5kbGUgc2VydmVyIGVycm9yc1xuICovXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnXG5pbXBvcnQgVGFzayBmcm9tICcuL2NvbXBvbmVudHMvVGFzaydcblxuaW1wb3J0IHVzZU5ldHdvcmtlciBmcm9tICdjbGllbnQvaG9va3MvdXNlTmV0d29ya2VyJ1xuXG5pbXBvcnQge3NlZ21lbnRUcmFja30gZnJvbSAnY2xpZW50L3V0aWxzL3NlZ21lbnRJbydcbmltcG9ydCB1c2VSb3V0ZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZVJvdXRlcidcbmltcG9ydCB7XG4gIGFkZFN1Y2Nlc3NOb3RpZmljYXRpb24sXG4gIGFkZEZhaWx1cmVOb3RpZmljYXRpb25cbn0gZnJvbSAnY2xpZW50L21vZHVsZXMvbm90aWZpY2F0aW9uU3lzdGVtL2R1Y2tzL25vdGlmaWNhdGlvblN5c3RlbUR1Y2snXG5pbXBvcnQge0JMT0NLX1RZUEV9IGZyb20gJ3VuaXZlcnNhbC91dGlscy9jb25zdGFudHMnXG5pbXBvcnQgaXNFbXB0eUFycmF5IGZyb20gJ3VuaXZlcnNhbC91dGlscy9pc0VtcHR5QXJyYXknXG5pbXBvcnQgZm9ybWF0VmFsdWVzIGZyb20gJ3VuaXZlcnNhbC91dGlscy9mb3JtYXRWYWx1ZXMnXG5pbXBvcnQgaXNVc2VyU3RhZmYgZnJvbSAnY2xpZW50L3V0aWxzL2lzVXNlclN0YWZmJ1xuaW1wb3J0IHt0cmFuc2Zvcm1EYXRlc30gZnJvbSAnY2xpZW50L3V0aWxzL2RhdGVIZWxwZXJzJ1xuXG5cblxuXG5cbmNvbnN0IFRhc2tSb290ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG5ldHdvcmtlciA9IHVzZU5ldHdvcmtlcigpXG4gIGNvbnN0IHtoaXN0b3J5fSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICBjb25zdCB7dXNlcn0gPSBwcm9wc1xuICBjb25zdCB7aWQ6IHVzZXJJZCwgZW1haWwsIG9yZ0lkfSA9IHVzZXIgfHwge31cbiAgY29uc3Qge3Rhc2tJZCwgcXVldWVJZH0gPSB1c2VQYXJhbXMoKVxuICBjb25zdCBbdGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3Rhc2tMb2FkaW5nLCBzZXRUYXNrTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2FjdGl2aXR5LCBzZXRBY3Rpdml0eV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2FjdGl2aXR5TG9hZGluZywgc2V0QWN0aXZpdHlMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdGFza05hdiwgc2V0VGFza05hdl0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2lzU3RhZmYsIHNldElzU3RhZmZdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qge1xuICAgIGxvY2F0aW9uOiB7cGF0aG5hbWUsIHN0YXRlfVxuICB9ID0gaGlzdG9yeSB8fCB7fVxuXG4gIGNvbnN0IGlzQXVkaXRzUmVxdWVzdGVkRnJvbVVybCA9IHBhdGhuYW1lLmluY2x1ZGVzKCdhdWRpdCcpXG4gIGNvbnN0IHBhcnNlZFVSTCA9IHFTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHttZXRob2Q6ICdHRVQnfSBcbiAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9YFxuICAgIGNvbnN0IGF1ZGl0c1VybCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvdGFza3MvJHt0YXNrSWR9L2F1ZGl0YFxuICAgIHNldFRhc2tMb2FkaW5nKHRydWUpXG4gICAgaWYgKGlzQXVkaXRzUmVxdWVzdGVkRnJvbVVybCkge1xuICAgICAgY29uc3Qge2RhdGE6IHRhc2t9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKGF1ZGl0c1VybCwge1xuICAgICAgICBwYXJhbXM6IHBhcnNlZFVSTCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSlcbiAgICAgIGNvbnN0IHtyZXN1bHQsIG5leHQsIHByZXZpb3VzfSA9IHRhc2sgfHwge31cbiAgICAgIHNldFRhc2socmVzdWx0KVxuICAgICAgc2V0VGFza05hdih7cHJldmlvdXMsIG5leHR9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7ZGF0YTogdGFza30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIodXJsLCBwYXlsb2FkKVxuICAgICAgc2V0VGFzayh0YXNrKVxuICAgIH1cblxuICAgIGNvbnN0IHtkYXRhOiBvcmdzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihgL29yZ3NgLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgc2V0SXNTdGFmZihpc1VzZXJTdGFmZihvcmdzLCBvcmdJZCkpXG5cbiAgICBzZXRUYXNrTG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFJlZnJlc2hlZFRhc2soKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHttZXRob2Q6ICdHRVQnfSBcbiAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9L3JlZnJlc2hgXG4gICAgY29uc3Qge2RhdGE6IHRhc2ssIGVycm9yc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIodXJsLCBwYXlsb2FkKVxuICAgIGlmIChpc0VtcHR5QXJyYXkoZXJyb3JzKSkge1xuICAgICAgc2V0VGFzayh0YXNrKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZWZyZXNoZWQgdG9rZW4nKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgaWYgKHRhc2tJZCAmJiBxdWV1ZUlkKSB7XG4gICAgICBzZXRBY3Rpdml0eUxvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7bWV0aG9kOiAnR0VUJ30gXG4gICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9L2FjdGl2aXR5YFxuICAgICAgY29uc3Qge2RhdGEsIGVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uaHR0cEhhbmRsZXIsICdjYWxsJywgXzIgPT4gXzIodXJsLCBwYXlsb2FkKV0pXG4gICAgICBpZiAoaXNFbXB0eUFycmF5KGVycm9ycykpIHtcbiAgICAgICAgc2V0QWN0aXZpdHkoZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBVbmFibGUgdG8gZmV0Y2ggYWN0aXZpdHkgZGF0YScpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEFjdGl2aXR5TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtzdGF0ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMubmV4dFRhc2ssICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80LmlkXSkpIHtcbiAgICAgIHNldFRhc2soc3RhdGUubmV4dFRhc2spXG4gICAgfSBlbHNlIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgIGdldFRhc2soKVxuICAgIH1cbiAgfSwgW3Rhc2tJZCwgb3JnSWQsIHVzZXIsIHF1ZXVlSWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge2lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgaWYgKGlkICYmIHF1ZXVlSWQpIHtcbiAgICAgIGdldEFjdGl2aXR5KClcbiAgICB9XG4gIH0sIFt0YXNrSWQsIF9vcHRpb25hbENoYWluKFt0YXNrLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5pZF0pXSlcblxuICBjb25zdCBvblN1Ym1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChlLCB2YWx1ZXMsIG9yZ0lkKSA9PiB7XG4gICAgY29uc3Qge2lkOiB0YXNrSWR9ID0gdmFsdWVzXG5cbiAgICBsZXQgbmV4dFVybFxuICAgIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiB0cmFuc2Zvcm1EYXRlcyhudWxsLCBmb3JtYXRWYWx1ZXModmFsdWVzKSlcbiAgICAgIH0gXG4gICAgICBjb25zdCB1cGRhdGVVcmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9YFxuICAgICAgY29uc3QgbmV4dFRhc2tVcmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvbmV4dGBcblxuICAgICAgbGV0IHJlcXVpcmVkVHlwZVxuICAgICAgbGV0IHJlcXVpcmVkTmFtZVxuICAgICAgY29uc3QgcmVxdWlyZWQgPSAoYmxvY2spID0+IHtcbiAgICAgICAgaWYgKCFCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UpIHtcbiAgICAgICAgICBjb25zdCB7dHlwZSwgbmFtZX0gPSBibG9ja1xuICAgICAgICAgIGNvbnN0IHtpc19yZXF1aXJlZDogaXNSZXF1aXJlZCwgdmFsdWU6IGJsb2NrVmFsdWV9ID0gYmxvY2tbdHlwZV1cbiAgICAgICAgICByZXF1aXJlZE5hbWUgPSBuYW1lXG4gICAgICAgICAgcmVxdWlyZWRUeXBlID0gdHlwZVxuICAgICAgICAgIHJldHVybiAoaXNSZXF1aXJlZCAmJiBibG9ja1ZhbHVlID09PSAnJykgfHwgKGlzUmVxdWlyZWQgJiYgIWJsb2NrVmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVxdWlyZWRFcnJvciA9IGZvcm1hdFZhbHVlcyh2YWx1ZXMuZGF0YSkubWFwKHRyYW5zZm9ybURhdGVzKS5zb21lKHJlcXVpcmVkKVxuICAgICAgY29uc3QgcmVxdWlyZWRWYWx1ZSA9XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5URVhUIHx8XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5OVU1CRVIgfHxcbiAgICAgICAgcmVxdWlyZWRUeXBlID09PSBCTE9DS19UWVBFLkVNQUlMIHx8XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5MSU5LXG4gICAgICAgICAgPyAndmFsdWUnXG4gICAgICAgICAgOiAnc2VsZWN0aW9uJ1xuXG4gICAgICBpZiAocmVxdWlyZWRFcnJvcikge1xuICAgICAgICBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGBBICR7cmVxdWlyZWRWYWx1ZX0gaXMgcmVxdWlyZWQgZm9yICR7cmVxdWlyZWROYW1lfWApKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRhc2tcbiAgICAgIGNvbnN0IHtlcnJvcnM6IHVwZGF0ZUVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi5odHRwSGFuZGxlciwgJ2NhbGwnLCBfNyA9PiBfNyh1cGRhdGVVcmwsIGNvbmZpZyldKVxuICAgICAgaWYgKHVwZGF0ZUVycm9ycykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB1cGRhdGluZyB0YXNrOiAke0pTT04uc3RyaW5naWZ5KHVwZGF0ZUVycm9ycyl9YClcbiAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignRXJyb3IgdXBkYXRpbmcgdGFzayBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50VHJhY2soJ1Rhc2sgQ29tcGxldGVkJywge3Rhc2tJZDogdGFza0lkLCBvcmdJZCwgdXNlcklkLCBlbWFpbCwgcXVldWVJZH0pXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBkYXRhOiBuZXh0VGFzayxcbiAgICAgICAgICBlcnJvcnM6IG5leHRUYXNrRXJyb3JzXG4gICAgICAgIH0gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOCA9PiBfOC5odHRwSGFuZGxlciwgJ2NhbGwnLCBfOSA9PiBfOShuZXh0VGFza1VybCwge21ldGhvZDogJ0dFVCd9KV0pXG5cbiAgICAgICAgaWYgKG5leHRUYXNrRXJyb3JzIHx8IChuZXh0VGFza0Vycm9ycyA9PT0gbnVsbCAmJiBuZXh0VGFzayA9PT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeS5yZXBsYWNlKGAvcXVldWVzLyR7cXVldWVJZH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXh0VGFzay5pZCkge1xuICAgICAgICAgICAgbmV4dFVybCA9IGAvcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHtuZXh0VGFzay5pZH1gXG4gICAgICAgICAgICBzZWdtZW50VHJhY2soJ1Rhc2sgRmV0Y2hlZCcsIHt0YXNrSWQ6IG5leHRUYXNrLmlkLCBvcmdJZCwgdXNlcklkLCBlbWFpbCwgcXVldWVJZH0pXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogbmV4dFVybCxcbiAgICAgICAgICAgICAgc3RhdGU6IHtuZXh0VGFza31cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdDb25ncmF0dWxhdGlvbnMhIFlvdSBoYXZlIGNvbXBsZXRlZCBhbGwgdGFza3MgaW4gdGhpcyBxdWV1ZS4nKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc2VnbWVudFRyYWNrKCdBbGwgVGFza3MgQ29tcGxldGVkJywge29yZ0lkLCB1c2VySWQsIGVtYWlsLCBxdWV1ZUlkfSlcbiAgICAgICAgICAgIHJldHVybiBoaXN0b3J5LnJlcGxhY2UoYC9xdWV1ZXMvJHtxdWV1ZUlkfWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzdWJtaXQgdGFzaycpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvblNhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIGRhdGE6IHRyYW5zZm9ybURhdGVzKG51bGwsIGZvcm1hdFZhbHVlcyh2YWx1ZXMpKVxuICAgICAgICB9IFxuICAgICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrLmlkfS9zYXZlYFxuICAgICAgICBjb25zdCB7ZXJyb3JzOiBzYXZlRXJyb3JzfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xMCA9PiBfMTAuaHR0cEhhbmRsZXIsICdjYWxsJywgXzExID0+IF8xMSh1cmwsIGNvbmZpZyldKVxuICAgICAgICBpZiAoc2F2ZUVycm9ycykge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBzYXZlIHRhc2snKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgdGFzayAke0pTT04uc3RyaW5naWZ5KHNhdmVFcnJvcnMpfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0UmVmcmVzaGVkVGFzaygpXG4gICAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRhc2snKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkXVxuICApXG5cbiAgY29uc3Qgb25Qb3N0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgICBpZiAodGFza0lkICYmIHF1ZXVlSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7YWN0aW9uOiAnY29tbWVudCcsIGNvbW1lbnQ6IGNvbW1lbnR9XG4gICAgICAgIH0gXG4gICAgICAgIGNvbnN0IHVybCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy8ke3Rhc2tJZH0vYWN0aXZpdHlgXG4gICAgICAgIGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xMiA9PiBfMTIuaHR0cEhhbmRsZXIsICdjYWxsJywgXzEzID0+IF8xMyh1cmwsIHBheWxvYWQpXSlcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25EZWxldGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGVsZXRlSWQpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgICBpZiAodGFza0lkICYmIHF1ZXVlSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgIH0gXG4gICAgICAgIGNvbnN0IHVybCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy8ke3Rhc2tJZH0vYWN0aXZpdHkvJHtkZWxldGVJZH1gXG4gICAgICAgIGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xNCA9PiBfMTQuaHR0cEhhbmRsZXIsICdjYWxsJywgXzE1ID0+IF8xNSh1cmwsIHBheWxvYWQpXSlcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25BdWRpdERlY2lzaW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGNvcnJlY3QpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkfSA9IHRhc2sgfHwge31cbiAgICAgIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgIGRhdGE6IHtjb3JyZWN0OiBjb3JyZWN0fVxuICAgICAgICB9IFxuICAgICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzL3Rhc2tzLyR7dGFza0lkfS9hdWRpdGBcbiAgICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTYgPT4gXzE2Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8xNyA9PiBfMTcodXJsLCBwYXlsb2FkKV0pXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVycm9ycykpIHtcbiAgICAgICAgICBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yc1swXS5tZXNzYWdlKSlcbiAgICAgICAgfVxuICAgICAgICBnZXRUYXNrKClcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25Bc3NpZ24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSB7bWV0aG9kOiAnUE9TVCcsIGRhdGE6IHthc3NpZ25lZF90bzogdXNlcklkfX0gXG4gICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrLmlkfS9hc3NpZ25gXG4gICAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcih1cmwsIGNvbmZpZylcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBhc3NpZ24gdGFzaycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byB1bmFzc2lnbiB0YXNrJykpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXNzaWduaW5nIHRhc2snKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UmVmcmVzaGVkVGFzaygpXG4gICAgICAgIGdldEFjdGl2aXR5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIFt0YXNrXVxuICApXG5cbiAgaWYgKCFfb3B0aW9uYWxDaGFpbihbdGFzaywgJ29wdGlvbmFsQWNjZXNzJywgXzE4ID0+IF8xOC5pZF0pKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYXNrLCB7XG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIGlzQXVkaXRzOiBfb3B0aW9uYWxDaGFpbihbdGFzaywgJ29wdGlvbmFsQWNjZXNzJywgXzE5ID0+IF8xOS5zdGF0dXNdKSA9PT0gJ2NvbXBsZXRlZCcsXG4gICAgICB0YXNrOiB0YXNrLFxuICAgICAgb25TdWJtaXQ6IG9uU3VibWl0LFxuICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgb25TYXZlOiBvblNhdmUsXG4gICAgICBvblBvc3Q6IG9uUG9zdCxcbiAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgIG9uQXNzaWduOiBvbkFzc2lnbixcbiAgICAgIHRhc2tOYXY6IHRhc2tOYXYsXG4gICAgICBhY3Rpdml0eTogYWN0aXZpdHksXG4gICAgICBpc1N0YWZmOiBpc1N0YWZmLFxuICAgICAgb25BdWRpdERlY2lzaW9uOiBvbkF1ZGl0RGVjaXNpb24sXG4gICAgICBpc0xvYWRpbmc6IHRhc2tMb2FkaW5nIHx8IGFjdGl2aXR5TG9hZGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4OH19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tSb290XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvdGFzay9jb21wb25lbnRzL1Rhc2sudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZEFycmF5fSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgUkdMIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1JHTCdcbmltcG9ydCBCbG9ja0NvbXBvbmVudCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0NvbXBvbmVudCdcblxuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TZWNvbmRhcnlCdXR0b24nXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0FwcEhlYWRlcidcbmltcG9ydCBCbG9ja1dyYXBwZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tXcmFwcGVyJ1xuaW1wb3J0IHt0YXNrU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuaW1wb3J0IEF1ZGl0RGVjaXNpb24gZnJvbSAndW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXREZWNpc2lvbidcbmltcG9ydCBTcGlubmVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXInXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1vZGFsJ1xuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsJ1xuaW1wb3J0IHt3b3JrZmxsb3dBY3Rpb25zfSBmcm9tICdjbGllbnQvcmVkdXgvcXVldWVzUmVkdWNlcnMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0pXG5cbmNvbnN0IEFjdGlvbkJsb2NrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgJHsocHJvcHMpID0+IChwcm9wcy5hdWRpdHMgPyAnMzVweCAzNXB4JyA6ICcnKX0gbWluLWNvbnRlbnQ7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmNvbnN0IFF1ZXVlTmFtZSA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA1MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgVGFzayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25EZWxldGUsXG4gICAgb25Qb3N0LFxuICAgIHVzZXJJZCxcbiAgICBhY3Rpdml0eSxcbiAgICB0YXNrLFxuICAgIG9uU3VibWl0LFxuICAgIHRhc2tOYXYsXG4gICAgb3JnSWQsXG4gICAgb25TYXZlLFxuICAgIHVzZXJzLFxuICAgIG9uQXNzaWduLFxuICAgIGlzQXVkaXRzLFxuICAgIG9uQXVkaXREZWNpc2lvbixcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNTdGFmZixcbiAgICBxdWV1ZXMsXG4gICAgc2V0U2VsZWN0ZWRRdWV1ZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2lkOiB0YXNrSWQsIHF1ZXVlX2lkOiBxdWV1ZUlkLCBjb3JyZWN0OiBjb3JyZWN0fSA9IHRhc2sgfHwge31cbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IFthc3NpZ25lZFRvLCBzZXRBc3NpZ25lZFRvXSA9IHVzZVN0YXRlKHRhc2tJZClcbiAgY29uc3Qge25leHQsIHByZXZpb3VzfSA9IHRhc2tOYXYgfHwge31cbiAgY29uc3QgcmV0dXJuVXJsID0gYC9xdWV1ZXMvJHtxdWV1ZUlkfWAgfHwgJ3F1ZXVlcydcbiAgY29uc3Qge3F1ZXVlfSA9IHRhc2sgfHwgJydcbiAgY29uc3QgbGF5b3V0cyA9IHRhc2suZGF0YS5tYXAoKGJsb2NrKSA9PiBibG9jay5sYXlvdXQpXG4gIGNvbnN0IGlzTm90QXNzaWduZWRUb01lID0gYXNzaWduZWRUbyAhPT0gdXNlcklkXG4gIGxldCByZWFkT25seSA9IGlzQXVkaXRzIHx8IGlzTm90QXNzaWduZWRUb01lXG4gIGlmIChpc1N0YWZmICYmIGlzTm90QXNzaWduZWRUb01lKSB7XG4gICAgcmVhZE9ubHkgPSB0cnVlXG4gIH1cbiAgY29uc3QgW2lzU3VibWl0aW5nLCBzZXRTdWJtaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYXNzaWduZWVEZXRhaWxzLCBzZXRBc3NpZ25lZURldGFpbHNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3Qge1xuICAgIGxvY2F0aW9uOiB7cGF0aG5hbWUsIHN0YXRlOiBsb2NhdGlvblN0YXRlfVxuICB9ID0gaGlzdG9yeSB8fCB7fVxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKClcblxuICBjb25zdCBbdGFza0NoYW5nZWQsIHNldFRhc2tDaGFuZ2VkXSA9IHVzZVN0YXRlKF9vcHRpb25hbENoYWluKFtsb2NhdGlvblN0YXRlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8udGFza0NoYW5nZWRdKSB8fCBmYWxzZSlcblxuICBjb25zdCB7XG4gICAgbW9kYWxQb3J0YWw6IGNvbmZpcm1UYXNrLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlVGFza01vZGFsLFxuICAgIGNsb3NlUG9ydGFsOiBjbG9zZVRhc2tNb2RhbFxuICB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7XG4gICAgbW9kYWxQb3J0YWw6IGNvbmZpcm1Bc3NpZ25lZSxcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZUFzc2lnbmVlTW9kYWwsXG4gICAgY2xvc2VQb3J0YWw6IGNsb3NlQXNzaWduZWVNb2RhbFxuICB9ID0gdXNlTW9kYWwoKVxuXG4gIGNvbnN0IGlzQXVkaXRzUmVxdWVzdGVkRnJvbVVybCA9IHBhdGhuYW1lLmluY2x1ZGVzKCdhdWRpdCcpXG4gIGNvbnN0IGlzTG9hZGluZ1ByZXZpb3VzID0gdmlldyA9PT0gJ3ByZXZpb3VzJ1xuICBjb25zdCBpc0xvYWRpbmdOZXh0ID0gdmlldyA9PT0gJ25leHQnXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7YXNzaWduZWRfdG99ID0gdGFzayB8fCB7fVxuICAgIHNldEFzc2lnbmVkVG8oYXNzaWduZWRfdG8pXG4gICAgaWYgKGlzQXVkaXRzKSB7XG4gICAgICBjb25zdCBjdXJyZW50UXVldWUgPSBxdWV1ZXMuZmluZCgocSkgPT4gcS5pZCA9PT0gdGFzay5xdWV1ZV9pZClcbiAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRRdWV1ZShjdXJyZW50UXVldWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNBdWRpdHMsIHRhc2tdKVxuXG4gIGNvbnN0IHJlc2V0VmlldyA9ICgpID0+IHNldFZpZXcobnVsbClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczogdGFzayxcbiAgICAgICAgb25TdWJtaXQ6IChfdmFsdWVzLCBmb3JtaWtCYWcpID0+IHtcbiAgICAgICAgICBmb3JtaWtCYWcuc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25Nb3VudDogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogdGFza1NjaGVtYSxcbiAgICAgICAgaW5uZXJSZWY6IGZvcm1SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fVxuICAgICAgXG4gICAgICAgICwgKHtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgdmFsaWRhdGVGb3JtXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2NH19XG4gICAgICAgICAgICAgICwgaXNBdWRpdHMgJiYgaXNBdWRpdHNSZXF1ZXN0ZWRGcm9tVXJsID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0QmFySXRlbXM6IFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBoaXN0b3J5LnJlcGxhY2UoJy9hdWRpdHMnKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2OH19XG4gICAgICAgICAgICAgICAgICAgICwgXCJCYWNrXCJcblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICBtaWRCYXJJdGVtczogUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZU5hbWUsIHsga2V5OiBcIm5hbWVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3Nn19LCBxdWV1ZSksXG4gICAgICAgICAgICAgICAgICByaWdodEJhckl0ZW1zOiBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CbG9jaywgeyBhdWRpdHM6ICFpc1N0YWZmID8gdHJ1ZSA6IGZhbHNlLCBrZXk6IFwibmF2X2Jsb2NrXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhcHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KCdwcmV2aW91cycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzl9fVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBpc0xvYWRpbmdQcmV2aW91cyAmJiBpc0xvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg4fX0gKSA6IGBQcmV2aW91c2BcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLCAhaXNTdGFmZiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF1ZGl0RGVjaXNpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrSWQ6IHRhc2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdWRpdERlY2lzaW9uOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdWRpdERlY2lzaW9uKGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFuZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldygnbmV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShuZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwMn19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGlzTG9hZGluZ05leHQgJiYgaXNMb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxMX19ICkgOiBgTmV4dGBcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Nn19XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0QmFySXRlbXM6IFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza0NoYW5nZWQgJiYgZm9ybVJlZi5jdXJyZW50LmRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhc2tNb2RhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UocmV0dXJuVXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fVxuICAgICAgICAgICAgICAgICAgICAsIFwiQmFja1wiXG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgbWlkQmFySXRlbXM6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVOYW1lLCB7IGtleTogXCJuYW1lXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzN9fSwgcXVldWUpLFxuICAgICAgICAgICAgICAgICAgcmlnaHRCYXJJdGVtczogXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM1fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogcmVhZE9ubHkgfHwgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2aW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG9uU2F2ZSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tDaGFuZ2VkKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICwgaXNTYXZpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQ4fX0gKSA6IGBTYXZlYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHJlYWRPbmx5IHx8IGlzU3VibWl0dGluZyB8fCAhaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgb25TdWJtaXQoZSwgdmFsdWVzLCBvcmdJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0aW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1MH19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGlzU3VibWl0aW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2MH19ICkgOiBgU3VibWl0YFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE3fX1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjl9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwge1xuICAgICAgICAgICAgICAgICAgICAgIG9uUG9zdDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvc3QoYXJncylcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlKGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25lZFRvOiBhc3NpZ25lZFRvLFxuICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQXNzaWduOiAoYXNzaWduZWUsIGFzc2lnbm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFZpZXcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNzaWduZWVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tDaGFuZ2VkICYmIGZvcm1SZWYuY3VycmVudC5kaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVBc3NpZ25lZU1vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXNzaWduKGFzc2lnbmVlLCBhc3NpZ25vcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5OiBhY3Rpdml0eSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogcXVldWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzB9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZToge3dpZHRoOiAnMTAwJSd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAsICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNBdWRpdHMgJiYgaXNMb2FkaW5nTmV4dCAmJiBpc0xvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNMb2FkaW5nUHJldmlvdXMgJiYgaXNMb2FkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSR0wsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3BwYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0czogbGF5b3V0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwNn19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCB2YWx1ZXMuZGF0YS5tYXAoKGJsb2NrLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzRm9yQmxvY2sgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuZGF0YSAmJiBlcnJvcnMuZGF0YVtpZHhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc0ZvckJsb2NrID0gZXJyb3JzLmRhdGFbaWR4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja1dyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZ3JpZCc6IGJsb2NrLmxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYmxvY2sudHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogKGZpZWxkLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrQ2hhbmdlZCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yc0ZvckJsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tDaGFuZ2VkKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXVkaXRzOiByZWFkT25seSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyNH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgLCBjb25maXJtVGFzayhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VUYXNrTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYEV4aXQgd2l0aG91dCBzYXZpbmdgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6IGBTYXZlIGFuZCBFeGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHJldHVyblVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgb25TYXZlKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza0NoYW5nZWQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHJldHVyblVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDh9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIGNvbmZpcm1Bc3NpZ25lZShcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VBc3NpZ25lZU1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBSZWFzc2lnbiB3aXRob3V0IHNhdmluZ2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogYFNhdmUgYW5kIFJlYXNzaWduYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Bc3NpZ24oYXNzaWduZWVEZXRhaWxzLmFzc2lnbmVlLCBhc3NpZ25lZURldGFpbHMuYXNzaWdub3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzc2lnbmVlRGV0YWlscyhudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmluZyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBvblNhdmUodmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrQ2hhbmdlZChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2aW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFZpZXcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFzc2lnbihhc3NpZ25lZURldGFpbHMuYXNzaWduZWUsIGFzc2lnbmVlRGV0YWlscy5hc3NpZ25vcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNjZ9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjZ9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICBxdWV1ZXM6IHN0YXRlLnF1ZXVlcy5xdWV1ZXNcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgc2V0U2VsZWN0ZWRRdWV1ZTogKGFyZykgPT4gZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy5zZXRTZWxlY3RlZFF1ZXVlKGFyZykpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUYXNrKVxuIiwiIGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBmb3JtYXRWYWx1ZXMgPSAodmFsdWVzKSA9PiB7XG4gIGxldCBmaWVsZHNcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMuZGF0YSkpIHtcbiAgICBmaWVsZHMgPSB2YWx1ZXMuZGF0YVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZpZWxkcyA9IHZhbHVlc1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIGZpZWxkcy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9vcHRpb25hbENoYWluKFt2YWwsICdhY2Nlc3MnLCBfID0+IF9bQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dLCAnYWNjZXNzJywgXzIgPT4gXzIuZW50aXRpZXMsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmZpbHRlciwgJ2NhbGwnLCBfNCA9PiBfNCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBlbnRpdHkuY29sb3JcbiAgICAgICAgZGVsZXRlIGVudGl0eS50ZXh0XG4gICAgICB9KV0pXG4gICAgfVxuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLm9iamVjdHMpKSB7XG4gICAgICAgIHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5vYmplY3RzLmZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGVudGl0eS5jb2xvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5pbWFnZSA9PT0gJycpIHtcbiAgICAgICAgdmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLmltYWdlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH0pXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VmFsdWVzXG4iXSwic291cmNlUm9vdCI6IiJ9