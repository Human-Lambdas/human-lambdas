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
      console.error('Error fetching refreshed task', JSON.stringify(errors));
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
        console.error('Error: Unable to fetch activity data', JSON.stringify(errors));
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

      console.error('Error assigning task', JSON.stringify(errors));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC91dGlscy9pc1VzZXJTdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXREZWNpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC9tb2R1bGVzL3Rhc2svVGFza1Jvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy91bml2ZXJzYWwvbW9kdWxlcy90YXNrL2NvbXBvbmVudHMvVGFzay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuaXZlcnNhbC91dGlscy9mb3JtYXRWYWx1ZXMudHMiXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwia2V5ZnJhbWVzU3BpbiIsImtleWZyYW1lcyIsIkxvYWRlciIsImJvcmRlciIsIlBBTEVUVEUiLCJCT1JERVJfR1JBWSIsImJvcmRlclJhZGl1cyIsImJvcmRlclRvcCIsIlBSSU1BUllfTUFJTiIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0aW9uTmFtZSIsInRvU3RyaW5nIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsIlNwaW5uZXIiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImlzVXNlclN0YWZmIiwib3JnYW5pemF0aW9ucyIsImN1cnJlbnRfb3JnYW5pemF0aW9uX2lkIiwib3JnIiwiaWQiLCJTVEFGRl9PUkdfSUQiLCJEZWNpc2lvbkJ1dHRvbiIsIlBsYWluQnV0dG9uIiwicHJvcHMiLCJpc0FwcHJvdmUiLCJpc0FjdGl2ZSIsImNvbG9yIiwiUFJJTUFSWV9HUkVFTiIsIkVSUk9SX01BSU4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJib3hTaGFkb3ciLCJvdXRsaW5lIiwidHJhbnNpdGlvbiIsIlN0eWxlZEljb24iLCJJY29uIiwiY2xpY2tIYW5kbGVyIiwib25BdWRpdERlY2lzaW9uIiwic2V0Q29ycmVjdFN0YXRlIiwiY29ycmVjdCIsImRlY2lzaW9uIiwibmV3RGVjaXNpb24iLCJBdWRpdERlY2lzaW9uIiwiY29ycmVjdFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsImtleSIsInR5cGUiLCJvbkNsaWNrIiwiX29wdGlvbmFsQ2hhaW4iLCJvcHMiLCJsYXN0QWNjZXNzTEhTIiwidW5kZWZpbmVkIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwib3AiLCJmbiIsImFyZ3MiLCJjYWxsIiwiVGFza1Jvb3QiLCJuZXR3b3JrZXIiLCJ1c2VOZXR3b3JrZXIiLCJoaXN0b3J5IiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXIiLCJ1c2VySWQiLCJlbWFpbCIsIm9yZ0lkIiwidGFza0lkIiwicXVldWVJZCIsInVzZVBhcmFtcyIsInRhc2siLCJzZXRUYXNrIiwidGFza0xvYWRpbmciLCJzZXRUYXNrTG9hZGluZyIsImFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJhY3Rpdml0eUxvYWRpbmciLCJzZXRBY3Rpdml0eUxvYWRpbmciLCJ0YXNrTmF2Iiwic2V0VGFza05hdiIsImlzU3RhZmYiLCJzZXRJc1N0YWZmIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXRlIiwiaXNBdWRpdHNSZXF1ZXN0ZWRGcm9tVXJsIiwiaW5jbHVkZXMiLCJwYXJzZWRVUkwiLCJxU3RyaW5nIiwicGFyc2UiLCJzZWFyY2giLCJnZXRUYXNrIiwicGF5bG9hZCIsIm1ldGhvZCIsInVybCIsImF1ZGl0c1VybCIsImRhdGEiLCJodHRwSGFuZGxlciIsInBhcmFtcyIsInJlc3VsdCIsIm5leHQiLCJwcmV2aW91cyIsIm9yZ3MiLCJnZXRSZWZyZXNoZWRUYXNrIiwiZXJyb3JzIiwiaXNFbXB0eUFycmF5IiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEFjdGl2aXR5IiwicXVldWVfaWQiLCJfIiwiXzIiLCJfMyIsIm5leHRUYXNrIiwiXzQiLCJfNSIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWVzIiwibmV4dFVybCIsImNvbmZpZyIsInRyYW5zZm9ybURhdGVzIiwiZm9ybWF0VmFsdWVzIiwidXBkYXRlVXJsIiwibmV4dFRhc2tVcmwiLCJyZXF1aXJlZFR5cGUiLCJyZXF1aXJlZE5hbWUiLCJyZXF1aXJlZCIsImJsb2NrIiwiQkxPQ0tfVFlQRSIsIkZPUk1fU0VRVUVOQ0UiLCJuYW1lIiwiaXNfcmVxdWlyZWQiLCJpc1JlcXVpcmVkIiwiYmxvY2tWYWx1ZSIsInJlcXVpcmVkRXJyb3IiLCJtYXAiLCJzb21lIiwicmVxdWlyZWRWYWx1ZSIsIlRFWFQiLCJOVU1CRVIiLCJFTUFJTCIsIkxJTksiLCJhZGRGYWlsdXJlTm90aWZpY2F0aW9uIiwidXBkYXRlRXJyb3JzIiwiXzYiLCJfNyIsInNlZ21lbnRUcmFjayIsIm5leHRUYXNrRXJyb3JzIiwiXzgiLCJfOSIsInJlcGxhY2UiLCJwdXNoIiwiYWRkU3VjY2Vzc05vdGlmaWNhdGlvbiIsIm9uU2F2ZSIsInNhdmVFcnJvcnMiLCJfMTAiLCJfMTEiLCJvblBvc3QiLCJjb21tZW50IiwiYWN0aW9uIiwiXzEyIiwiXzEzIiwib25EZWxldGUiLCJkZWxldGVJZCIsIl8xNCIsIl8xNSIsIl8xNiIsIl8xNyIsIkFycmF5IiwiaXNBcnJheSIsIm1lc3NhZ2UiLCJvbkFzc2lnbiIsImFzc2lnbmVkX3RvIiwiXzE4IiwiVGFzayIsImlzQXVkaXRzIiwiXzE5Iiwic3RhdHVzIiwiaXNMb2FkaW5nIiwiRm9ybUNvbnRhaW5lciIsIkZvcm0iLCJDb250ZW50IiwiQWN0aW9uQmxvY2siLCJhdWRpdHMiLCJRdWV1ZU5hbWUiLCJURVhUX01BSU4iLCJ1c2VycyIsInF1ZXVlcyIsInNldFNlbGVjdGVkUXVldWUiLCJhc3NpZ25lZFRvIiwic2V0QXNzaWduZWRUbyIsInJldHVyblVybCIsInF1ZXVlIiwibGF5b3V0cyIsImxheW91dCIsImlzTm90QXNzaWduZWRUb01lIiwicmVhZE9ubHkiLCJpc1N1Ym1pdGluZyIsInNldFN1Ym1pdGluZyIsImlzU2F2aW5nIiwic2V0U2F2aW5nIiwidmlldyIsInNldFZpZXciLCJhc3NpZ25lZURldGFpbHMiLCJzZXRBc3NpZ25lZURldGFpbHMiLCJsb2NhdGlvblN0YXRlIiwiZm9ybVJlZiIsInVzZVJlZiIsInRhc2tDaGFuZ2VkIiwic2V0VGFza0NoYW5nZWQiLCJtb2RhbFBvcnRhbCIsImNvbmZpcm1UYXNrIiwidG9nZ2xlUG9ydGFsIiwidG9nZ2xlVGFza01vZGFsIiwiY2xvc2VQb3J0YWwiLCJjbG9zZVRhc2tNb2RhbCIsInVzZU1vZGFsIiwiY29uZmlybUFzc2lnbmVlIiwidG9nZ2xlQXNzaWduZWVNb2RhbCIsImNsb3NlQXNzaWduZWVNb2RhbCIsImlzTG9hZGluZ1ByZXZpb3VzIiwiaXNMb2FkaW5nTmV4dCIsImN1cnJlbnRRdWV1ZSIsImZpbmQiLCJxIiwicmVzZXRWaWV3IiwiRm9ybWlrIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiaW5pdGlhbFZhbHVlcyIsIl92YWx1ZXMiLCJmb3JtaWtCYWciLCJzZXRTdWJtaXR0aW5nIiwidmFsaWRhdGVPbkNoYW5nZSIsInZhbGlkYXRlT25CbHVyIiwidmFsaWRhdGVPbk1vdW50IiwidmFsaWRhdGlvblNjaGVtYSIsInRhc2tTY2hlbWEiLCJpbm5lclJlZiIsImhhbmRsZUNoYW5nZSIsInNldEZpZWxkVmFsdWUiLCJpc1N1Ym1pdHRpbmciLCJpc1ZhbGlkIiwiaGFuZGxlQmx1ciIsInZhbGlkYXRlRm9ybSIsIkFwcEhlYWRlciIsImxlZnRCYXJJdGVtcyIsIlNlY29uZGFyeUJ1dHRvbiIsIm1pZEJhckl0ZW1zIiwicmlnaHRCYXJJdGVtcyIsImhpZGVGb2N1cyIsImRpc2FibGVkIiwiUHJpbWFyeUJ1dHRvbiIsImN1cnJlbnQiLCJkaXJ0eSIsIkZpZWxkQXJyYXkiLCJyZW5kZXIiLCJTaWRlYmFyIiwiYXNzaWduZWUiLCJhc3NpZ25vciIsInN0eWxlIiwiUkdMIiwiaXNEcmFnZ2FibGUiLCJpc0Ryb3BwYWJsZSIsImlzUmVzaXphYmxlIiwiaWR4IiwiZXJyb3JzRm9yQmxvY2siLCJCbG9ja1dyYXBwZXIiLCJpbmRleCIsIkJsb2NrQ29tcG9uZW50IiwiZmllbGQiLCJpc0VkaXRpbmciLCJDb25maXJtYXRpb25Nb2RhbCIsImxhYmVsIiwiY2FuY2VsTGFiZWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsIndvcmtmbGxvd0FjdGlvbnMiLCJjb25uZWN0IiwiZmllbGRzIiwiZmlsdGVyIiwidmFsIiwiTkFNRURfRU5USVRZX1JFQ09HTklUSU9OIiwiZW50aXRpZXMiLCJlbnRpdHkiLCJ0ZXh0IiwiQk9VTkRJTkdfQk9YRVMiLCJvYmplY3RzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLHFFQUFyQjtBQUEyRjtBQUMzRjtBQUVBO0FBRUEsTUFBTUMsYUFBYSxHQUFHQyx1REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBBOztBQVNBLE1BQU1DLE1BQU0sR0FBRztBQUFBO0FBQUEsR0FBVztBQUN4QkMsUUFBTSxFQUFHLGFBQVlDLHNEQUFPLENBQUNDLFdBQVksRUFEakI7QUFFeEJDLGNBQVksRUFBRSxLQUZVO0FBR3hCQyxXQUFTLEVBQUcsYUFBWUgsc0RBQU8sQ0FBQ0ksWUFBYSxFQUhyQjtBQUl4QkMsT0FBSyxFQUFFLEVBSmlCO0FBS3hCQyxRQUFNLEVBQUUsRUFMZ0I7QUFNeEJDLGVBQWEsRUFBRVgsYUFBYSxDQUFDWSxRQUFkLEVBTlM7QUFPeEJDLG1CQUFpQixFQUFFLElBUEs7QUFReEJDLHlCQUF1QixFQUFFO0FBUkQsQ0FBWCxDQUFmOztBQVdBLE1BQU1DLE9BQU8sR0FBRyxtQkFBTUMsNENBQUssQ0FBQ0Ms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QUFJMlEsR0FBRyxDQUFDM0osb0VBQVUsQ0FBQ2dLLGNBQVosQ0FBSCxDQUErQm5QLEtBQS9CLENBQXFDcVAsS0FBckMsS0FBK0MsRUFBbkQsRUFBdUQ7QUFDckRQLFdBQUcsQ0FBQzNKLG9FQUFVLENBQUNnSyxjQUFaLENBQUgsQ0FBK0JuUCxLQUEvQixDQUFxQ3FQLEtBQXJDLEdBQTZDLElBQTdDO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPUCxHQUFQO0FBQ0QsR0FsQkQ7QUFtQkEsU0FBT3RLLE1BQVA7QUFDRCxDQS9CRDs7QUFpQ2VJLDJFQUFmLEUiLCJmaWxlIjoiVGFza1Jvb3RfMjA0OWNjZDE1M2FkMzAyYTk4YmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU3Bpbm5lci50c3hcIjtpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2tleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICdzdHlsZXMvcGFsZXR0ZSdcblxuY29uc3Qga2V5ZnJhbWVzU3BpbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbmBcblxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdih7XG4gIGJvcmRlcjogYDJweCBzb2xpZCAke1BBTEVUVEUuQk9SREVSX0dSQVl9YCxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgYm9yZGVyVG9wOiBgMnB4IHNvbGlkICR7UEFMRVRURS5QUklNQVJZX01BSU59YCxcbiAgd2lkdGg6IDIwLFxuICBoZWlnaHQ6IDIwLFxuICBhbmltYXRpb25OYW1lOiBrZXlmcmFtZXNTcGluLnRvU3RyaW5nKCksXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAnMXMnLFxuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogJ2luZmluaXRlJ1xufSlcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2fX0gKVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXG4iLCJpbXBvcnQge1NUQUZGX09SR19JRH0gZnJvbSAndW5pdmVyc2FsL3V0aWxzL2NvbnN0YW50cydcblxuY29uc3QgaXNVc2VyU3RhZmYgPSAob3JnYW5pemF0aW9ucywgY3VycmVudF9vcmdhbml6YXRpb25faWQpID0+IHtcbiAgZm9yIChjb25zdCBvcmcgb2Ygb3JnYW5pemF0aW9ucykge1xuICAgIGlmIChvcmcuaWQgPT09IFNUQUZGX09SR19JRCAmJiBjdXJyZW50X29yZ2FuaXphdGlvbl9pZCA9PT0gU1RBRkZfT1JHX0lEKSByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5leHBvcnQgZGVmYXVsdCBpc1VzZXJTdGFmZlxuIiwiY29uc3QgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvYS9naXQvSHVtYW4tTGFtYmRhcy9obC13ZWIvc3JjL3VuaXZlcnNhbC9tb2R1bGVzL2F1ZGl0cy9jb21wb25lbnRzL0F1ZGl0RGVjaXNpb24udHN4XCI7aW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUGxhaW5CdXR0b24sIHt9IGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1BsYWluQnV0dG9uJ1xuaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgSWNvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9JY29uJ1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IERlY2lzaW9uQnV0dG9uID0gc3R5bGVkKFBsYWluQnV0dG9uKSgocHJvcHMpID0+IHtcbiAgY29uc3Qge2lzQXBwcm92ZSwgaXNBY3RpdmV9ID0gcHJvcHNcbiAgY29uc3QgY29sb3IgPSBpc0FwcHJvdmUgPyBQQUxFVFRFLlBSSU1BUllfR1JFRU4gOiBQQUxFVFRFLkVSUk9SX01BSU5cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0FjdGl2ZSA/IGNvbG9yIDogJ3doaXRlJyxcbiAgICBjb2xvcjogaXNBY3RpdmUgPyAnd2hpdGUnIDogY29sb3IsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7aXNBY3RpdmUgPyAnd2hpdGUnIDogY29sb3J9YCxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBib3hTaGFkb3c6ICdyZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDE1LCAxNSwgMTUsIDAuMSkgMHB4IDFweCAycHgnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogYDAgNHB4IDhweCAke2lzQXBwcm92ZSA/ICdyZ2JhKDAsMTczLDY5LDAuMDUpJyA6ICdyZ2JhKDI1NSw3NCwwLDAuMDUpJ31gXG4gICAgfSxcbiAgICAnOmFjdGl2ZSc6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaXNBY3RpdmUgPyAnd2hpdGUnIDogY29sb3IsXG4gICAgICBjb2xvcjogaXNBY3RpdmUgPyBjb2xvciA6ICd3aGl0ZScsXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtpc0FjdGl2ZSA/IGNvbG9yIDogJ3doaXRlJ31gXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pKHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBmb250U2l6ZTogMTZcbn0pXG5cbi8qXG5LZXkgcGFyYW1ldGVyczpcbi0gZGVjaXNpb246IHRydWUgaWYgdGhlIGJ1dHRvbiBpcyBBcHByb3ZlLCBmYWxzZSBpZiB0aGUgYnV0dG9uIGlzIFJlamVjdFxuLSBjb3JyZWN0OiBjdXJyZW50IGF1ZGl0IGRlY2lzaW9uXG5cbldlIGZsaXAgdGhlIHN0YXRlIG9mIHRoZSBidXR0b24gYnkgY29tcGFyaW5nIGRlY2lzaW9uIGFuZCBjb3JyZWN0OiBpZSBpZiBkZWNpc2lvbiBpcyB0cnVlLCB0aGUgc3RhdGUgY2FuIG9ubHkgZmxpcCBiZXR3ZWVuIHRydWUgYW5kIG51bGwuXG5cblRoZSBzZXJ2ZXIgdGFrZXMgc29tZSB0aW1lIHRvIHJlc3BvbmQgKG9uQXVkaXREZWNpc2lvbikgd2hpY2ggcmVzdWx0cyBpbiBhIGZlZWRiYWNrIGRlbGF5LCBzbyB3ZSBjaGFuZ2UgaXRzIHN0YXRlIGRpcmVjdGx5IChzZXRDb3JyZWN0U3RhdGUpIG9uIGNsaWNrXG4qL1xuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKFxuICBvbkF1ZGl0RGVjaXNpb24sXG4gIHNldENvcnJlY3RTdGF0ZSxcbiAgY29ycmVjdCxcbiAgZGVjaXNpb25cbikge1xuICBjb25zdCBuZXdEZWNpc2lvbiA9IGNvcnJlY3QgPT09IGRlY2lzaW9uID8gbnVsbCA6IGRlY2lzaW9uXG4gIHNldENvcnJlY3RTdGF0ZShuZXdEZWNpc2lvbilcbiAgb25BdWRpdERlY2lzaW9uKG5ld0RlY2lzaW9uKVxufVxuXG5jb25zdCBBdWRpdERlY2lzaW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtjb3JyZWN0LCBvbkF1ZGl0RGVjaXNpb259ID0gcHJvcHNcbiAgY29uc3QgW2NvcnJlY3RTdGF0ZSwgc2V0Q29ycmVjdFN0YXRlXSA9IHVzZVN0YXRlKGNvcnJlY3QpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3JyZWN0U3RhdGUoY29ycmVjdClcbiAgfSwgW2NvcnJlY3RdKVxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MH19XG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjaXNpb25CdXR0b24sIHtcbiAgICAgICAga2V5OiBcImFwcHJvdmVcIixcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgIGNsaWNrSGFuZGxlcihvbkF1ZGl0RGVjaXNpb24sIHNldENvcnJlY3RTdGF0ZSwgY29ycmVjdFN0YXRlLCB0cnVlKVxuICAgICAgICB9LFxuICAgICAgICBpc0FwcHJvdmU6IHRydWUsXG4gICAgICAgIGlzQWN0aXZlOiBjb3JyZWN0U3RhdGUgPT09IHRydWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiA4MX19XG4gICAgICBcbiAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlZEljb24sIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogOTB9fSwgXCJkb25lXCIpXG4gICAgICApXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjaXNpb25CdXR0b24sIHtcbiAgICAgICAga2V5OiBcInJlamVjdFwiLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyKG9uQXVkaXREZWNpc2lvbiwgc2V0Q29ycmVjdFN0YXRlLCBjb3JyZWN0U3RhdGUsIGZhbHNlKVxuICAgICAgICB9LFxuICAgICAgICBpc0FwcHJvdmU6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZTogY29ycmVjdFN0YXRlID09PSBmYWxzZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDkyfX1cbiAgICAgIFxuICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkSWNvbiwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxMDF9fSwgXCJjbG9zZVwiKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpdERlY2lzaW9uXG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvdGFzay9UYXNrUm9vdC50c3hcIjsgZnVuY3Rpb24gX29wdGlvbmFsQ2hhaW4ob3BzKSB7IGxldCBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyBsZXQgdmFsdWUgPSBvcHNbMF07IGxldCBpID0gMTsgd2hpbGUgKGkgPCBvcHMubGVuZ3RoKSB7IGNvbnN0IG9wID0gb3BzW2ldOyBjb25zdCBmbiA9IG9wc1tpICsgMV07IGkgKz0gMjsgaWYgKChvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpICYmIHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBpZiAob3AgPT09ICdhY2Nlc3MnIHx8IG9wID09PSAnb3B0aW9uYWxBY2Nlc3MnKSB7IGxhc3RBY2Nlc3NMSFMgPSB2YWx1ZTsgdmFsdWUgPSBmbih2YWx1ZSk7IH0gZWxzZSBpZiAob3AgPT09ICdjYWxsJyB8fCBvcCA9PT0gJ29wdGlvbmFsQ2FsbCcpIHsgdmFsdWUgPSBmbigoLi4uYXJncykgPT4gdmFsdWUuY2FsbChsYXN0QWNjZXNzTEhTLCAuLi5hcmdzKSk7IGxhc3RBY2Nlc3NMSFMgPSB1bmRlZmluZWQ7IH0gfSByZXR1cm4gdmFsdWU7IH0vKipcbiAqIFRPRE8gaGFuZGxlIHNlcnZlciBlcnJvcnNcbiAqL1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHFTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9jb21wb25lbnRzL1Rhc2snXG5cbmltcG9ydCB1c2VOZXR3b3JrZXIgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU5ldHdvcmtlcidcblxuaW1wb3J0IHtzZWdtZW50VHJhY2t9IGZyb20gJ2NsaWVudC91dGlscy9zZWdtZW50SW8nXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQge1xuICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uLFxuICBhZGRGYWlsdXJlTm90aWZpY2F0aW9uXG59IGZyb20gJ2NsaWVudC9tb2R1bGVzL25vdGlmaWNhdGlvblN5c3RlbS9kdWNrcy9ub3RpZmljYXRpb25TeXN0ZW1EdWNrJ1xuaW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IGlzRW1wdHlBcnJheSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvaXNFbXB0eUFycmF5J1xuaW1wb3J0IGZvcm1hdFZhbHVlcyBmcm9tICd1bml2ZXJzYWwvdXRpbHMvZm9ybWF0VmFsdWVzJ1xuaW1wb3J0IGlzVXNlclN0YWZmIGZyb20gJ2NsaWVudC91dGlscy9pc1VzZXJTdGFmZidcbmltcG9ydCB7dHJhbnNmb3JtRGF0ZXN9IGZyb20gJ2NsaWVudC91dGlscy9kYXRlSGVscGVycydcblxuXG5cblxuXG5jb25zdCBUYXNrUm9vdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBuZXR3b3JrZXIgPSB1c2VOZXR3b3JrZXIoKVxuICBjb25zdCB7aGlzdG9yeX0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qge3VzZXJ9ID0gcHJvcHNcbiAgY29uc3Qge2lkOiB1c2VySWQsIGVtYWlsLCBvcmdJZH0gPSB1c2VyIHx8IHt9XG4gIGNvbnN0IHt0YXNrSWQsIHF1ZXVlSWR9ID0gdXNlUGFyYW1zKClcbiAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFt0YXNrTG9hZGluZywgc2V0VGFza0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthY3Rpdml0eSwgc2V0QWN0aXZpdHldID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFthY3Rpdml0eUxvYWRpbmcsIHNldEFjdGl2aXR5TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Rhc2tOYXYsIHNldFRhc2tOYXZdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtpc1N0YWZmLCBzZXRJc1N0YWZmXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHtcbiAgICBsb2NhdGlvbjoge3BhdGhuYW1lLCBzdGF0ZX1cbiAgfSA9IGhpc3RvcnkgfHwge31cblxuICBjb25zdCBpc0F1ZGl0c1JlcXVlc3RlZEZyb21VcmwgPSBwYXRobmFtZS5pbmNsdWRlcygnYXVkaXQnKVxuICBjb25zdCBwYXJzZWRVUkwgPSBxU3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaClcblxuICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7bWV0aG9kOiAnR0VUJ30gXG4gICAgY29uc3QgdXJsID0gYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzLyR7dGFza0lkfWBcbiAgICBjb25zdCBhdWRpdHNVcmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzL3Rhc2tzLyR7dGFza0lkfS9hdWRpdGBcbiAgICBzZXRUYXNrTG9hZGluZyh0cnVlKVxuICAgIGlmIChpc0F1ZGl0c1JlcXVlc3RlZEZyb21VcmwpIHtcbiAgICAgIGNvbnN0IHtkYXRhOiB0YXNrfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcihhdWRpdHNVcmwsIHtcbiAgICAgICAgcGFyYW1zOiBwYXJzZWRVUkwsXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pXG4gICAgICBjb25zdCB7cmVzdWx0LCBuZXh0LCBwcmV2aW91c30gPSB0YXNrIHx8IHt9XG4gICAgICBzZXRUYXNrKHJlc3VsdClcbiAgICAgIHNldFRhc2tOYXYoe3ByZXZpb3VzLCBuZXh0fSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qge2RhdGE6IHRhc2t9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHVybCwgcGF5bG9hZClcbiAgICAgIHNldFRhc2sodGFzaylcbiAgICB9XG5cbiAgICBjb25zdCB7ZGF0YTogb3Jnc30gPSBhd2FpdCBuZXR3b3JrZXIuaHR0cEhhbmRsZXIoYC9vcmdzYCwge21ldGhvZDogJ0dFVCd9KVxuICAgIHNldElzU3RhZmYoaXNVc2VyU3RhZmYob3Jncywgb3JnSWQpKVxuXG4gICAgc2V0VGFza0xvYWRpbmcoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRSZWZyZXNoZWRUYXNrKCkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7bWV0aG9kOiAnR0VUJ30gXG4gICAgY29uc3QgdXJsID0gYC9vcmdzLyR7b3JnSWR9L3F1ZXVlcy8ke3F1ZXVlSWR9L3Rhc2tzLyR7dGFza0lkfS9yZWZyZXNoYFxuICAgIGNvbnN0IHtkYXRhOiB0YXNrLCBlcnJvcnN9ID0gYXdhaXQgbmV0d29ya2VyLmh0dHBIYW5kbGVyKHVybCwgcGF5bG9hZClcbiAgICBpZiAoaXNFbXB0eUFycmF5KGVycm9ycykpIHtcbiAgICAgIHNldFRhc2sodGFzaylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVmcmVzaGVkIHRhc2snLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgaWYgKHRhc2tJZCAmJiBxdWV1ZUlkKSB7XG4gICAgICBzZXRBY3Rpdml0eUxvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7bWV0aG9kOiAnR0VUJ30gXG4gICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9L2FjdGl2aXR5YFxuICAgICAgY29uc3Qge2RhdGEsIGVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8uaHR0cEhhbmRsZXIsICdjYWxsJywgXzIgPT4gXzIodXJsLCBwYXlsb2FkKV0pXG4gICAgICBpZiAoaXNFbXB0eUFycmF5KGVycm9ycykpIHtcbiAgICAgICAgc2V0QWN0aXZpdHkoZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBVbmFibGUgdG8gZmV0Y2ggYWN0aXZpdHkgZGF0YScsIEpTT04uc3RyaW5naWZ5KGVycm9ycykpXG4gICAgICB9XG4gICAgfVxuICAgIHNldEFjdGl2aXR5TG9hZGluZyhmYWxzZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9vcHRpb25hbENoYWluKFtzdGF0ZSwgJ29wdGlvbmFsQWNjZXNzJywgXzMgPT4gXzMubmV4dFRhc2ssICdvcHRpb25hbEFjY2VzcycsIF80ID0+IF80LmlkXSkpIHtcbiAgICAgIHNldFRhc2soc3RhdGUubmV4dFRhc2spXG4gICAgfSBlbHNlIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgIGdldFRhc2soKVxuICAgIH1cbiAgfSwgW3Rhc2tJZCwgb3JnSWQsIHVzZXIsIHF1ZXVlSWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge2lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgaWYgKGlkICYmIHF1ZXVlSWQpIHtcbiAgICAgIGdldEFjdGl2aXR5KClcbiAgICB9XG4gIH0sIFt0YXNrSWQsIF9vcHRpb25hbENoYWluKFt0YXNrLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNSA9PiBfNS5pZF0pXSlcblxuICBjb25zdCBvblN1Ym1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChlLCB2YWx1ZXMsIG9yZ0lkKSA9PiB7XG4gICAgY29uc3Qge2lkOiB0YXNrSWR9ID0gdmFsdWVzXG5cbiAgICBsZXQgbmV4dFVybFxuICAgIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICBkYXRhOiB0cmFuc2Zvcm1EYXRlcyhudWxsLCBmb3JtYXRWYWx1ZXModmFsdWVzKSlcbiAgICAgIH0gXG4gICAgICBjb25zdCB1cGRhdGVVcmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrSWR9YFxuICAgICAgY29uc3QgbmV4dFRhc2tVcmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvbmV4dGBcblxuICAgICAgbGV0IHJlcXVpcmVkVHlwZVxuICAgICAgbGV0IHJlcXVpcmVkTmFtZVxuICAgICAgY29uc3QgcmVxdWlyZWQgPSAoYmxvY2spID0+IHtcbiAgICAgICAgaWYgKCFCTE9DS19UWVBFLkZPUk1fU0VRVUVOQ0UpIHtcbiAgICAgICAgICBjb25zdCB7dHlwZSwgbmFtZX0gPSBibG9ja1xuICAgICAgICAgIGNvbnN0IHtpc19yZXF1aXJlZDogaXNSZXF1aXJlZCwgdmFsdWU6IGJsb2NrVmFsdWV9ID0gYmxvY2tbdHlwZV1cbiAgICAgICAgICByZXF1aXJlZE5hbWUgPSBuYW1lXG4gICAgICAgICAgcmVxdWlyZWRUeXBlID0gdHlwZVxuICAgICAgICAgIHJldHVybiAoaXNSZXF1aXJlZCAmJiBibG9ja1ZhbHVlID09PSAnJykgfHwgKGlzUmVxdWlyZWQgJiYgIWJsb2NrVmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVxdWlyZWRFcnJvciA9IGZvcm1hdFZhbHVlcyh2YWx1ZXMuZGF0YSkubWFwKHRyYW5zZm9ybURhdGVzKS5zb21lKHJlcXVpcmVkKVxuICAgICAgY29uc3QgcmVxdWlyZWRWYWx1ZSA9XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5URVhUIHx8XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5OVU1CRVIgfHxcbiAgICAgICAgcmVxdWlyZWRUeXBlID09PSBCTE9DS19UWVBFLkVNQUlMIHx8XG4gICAgICAgIHJlcXVpcmVkVHlwZSA9PT0gQkxPQ0tfVFlQRS5MSU5LXG4gICAgICAgICAgPyAndmFsdWUnXG4gICAgICAgICAgOiAnc2VsZWN0aW9uJ1xuXG4gICAgICBpZiAocmVxdWlyZWRFcnJvcikge1xuICAgICAgICBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGBBICR7cmVxdWlyZWRWYWx1ZX0gaXMgcmVxdWlyZWQgZm9yICR7cmVxdWlyZWROYW1lfWApKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHRhc2tcbiAgICAgIGNvbnN0IHtlcnJvcnM6IHVwZGF0ZUVycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfNiA9PiBfNi5odHRwSGFuZGxlciwgJ2NhbGwnLCBfNyA9PiBfNyh1cGRhdGVVcmwsIGNvbmZpZyldKVxuICAgICAgaWYgKHVwZGF0ZUVycm9ycykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB1cGRhdGluZyB0YXNrOiAke0pTT04uc3RyaW5naWZ5KHVwZGF0ZUVycm9ycyl9YClcbiAgICAgICAgZGlzcGF0Y2goYWRkRmFpbHVyZU5vdGlmaWNhdGlvbignRXJyb3IgdXBkYXRpbmcgdGFzayBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyJykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50VHJhY2soJ1Rhc2sgQ29tcGxldGVkJywge3Rhc2tJZDogdGFza0lkLCBvcmdJZCwgdXNlcklkLCBlbWFpbCwgcXVldWVJZH0pXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBkYXRhOiBuZXh0VGFzayxcbiAgICAgICAgICBlcnJvcnM6IG5leHRUYXNrRXJyb3JzXG4gICAgICAgIH0gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfOCA9PiBfOC5odHRwSGFuZGxlciwgJ2NhbGwnLCBfOSA9PiBfOShuZXh0VGFza1VybCwge21ldGhvZDogJ0dFVCd9KV0pXG5cbiAgICAgICAgaWYgKG5leHRUYXNrRXJyb3JzIHx8IChuZXh0VGFza0Vycm9ycyA9PT0gbnVsbCAmJiBuZXh0VGFzayA9PT0gbnVsbCkpIHtcbiAgICAgICAgICByZXR1cm4gaGlzdG9yeS5yZXBsYWNlKGAvcXVldWVzLyR7cXVldWVJZH1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXh0VGFzay5pZCkge1xuICAgICAgICAgICAgbmV4dFVybCA9IGAvcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHtuZXh0VGFzay5pZH1gXG4gICAgICAgICAgICBzZWdtZW50VHJhY2soJ1Rhc2sgRmV0Y2hlZCcsIHt0YXNrSWQ6IG5leHRUYXNrLmlkLCBvcmdJZCwgdXNlcklkLCBlbWFpbCwgcXVldWVJZH0pXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogbmV4dFVybCxcbiAgICAgICAgICAgICAgc3RhdGU6IHtuZXh0VGFza31cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgICAgICBhZGRTdWNjZXNzTm90aWZpY2F0aW9uKCdDb25ncmF0dWxhdGlvbnMhIFlvdSBoYXZlIGNvbXBsZXRlZCBhbGwgdGFza3MgaW4gdGhpcyBxdWV1ZS4nKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgc2VnbWVudFRyYWNrKCdBbGwgVGFza3MgQ29tcGxldGVkJywge29yZ0lkLCB1c2VySWQsIGVtYWlsLCBxdWV1ZUlkfSlcbiAgICAgICAgICAgIHJldHVybiBoaXN0b3J5LnJlcGxhY2UoYC9xdWV1ZXMvJHtxdWV1ZUlkfWApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzdWJtaXQgdGFzaycpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvblNhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIGRhdGE6IHRyYW5zZm9ybURhdGVzKG51bGwsIGZvcm1hdFZhbHVlcyh2YWx1ZXMpKVxuICAgICAgICB9IFxuICAgICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrLmlkfS9zYXZlYFxuICAgICAgICBjb25zdCB7ZXJyb3JzOiBzYXZlRXJyb3JzfSA9IGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xMCA9PiBfMTAuaHR0cEhhbmRsZXIsICdjYWxsJywgXzExID0+IF8xMSh1cmwsIGNvbmZpZyldKVxuICAgICAgICBpZiAoc2F2ZUVycm9ycykge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBzYXZlIHRhc2snKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBzYXZpbmcgdGFzayAke0pTT04uc3RyaW5naWZ5KHNhdmVFcnJvcnMpfWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0UmVmcmVzaGVkVGFzaygpXG4gICAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRhc2snKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkXVxuICApXG5cbiAgY29uc3Qgb25Qb3N0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgICBpZiAodGFza0lkICYmIHF1ZXVlSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7YWN0aW9uOiAnY29tbWVudCcsIGNvbW1lbnQ6IGNvbW1lbnR9XG4gICAgICAgIH0gXG4gICAgICAgIGNvbnN0IHVybCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy8ke3Rhc2tJZH0vYWN0aXZpdHlgXG4gICAgICAgIGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xMiA9PiBfMTIuaHR0cEhhbmRsZXIsICdjYWxsJywgXzEzID0+IF8xMyh1cmwsIHBheWxvYWQpXSlcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25EZWxldGUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGVsZXRlSWQpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkLCBxdWV1ZV9pZDogcXVldWVJZH0gPSB0YXNrIHx8IHt9XG4gICAgICBpZiAodGFza0lkICYmIHF1ZXVlSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICAgIH0gXG4gICAgICAgIGNvbnN0IHVybCA9IGAvb3Jncy8ke29yZ0lkfS9xdWV1ZXMvJHtxdWV1ZUlkfS90YXNrcy8ke3Rhc2tJZH0vYWN0aXZpdHkvJHtkZWxldGVJZH1gXG4gICAgICAgIGF3YWl0IF9vcHRpb25hbENoYWluKFtuZXR3b3JrZXIsICdvcHRpb25hbEFjY2VzcycsIF8xNCA9PiBfMTQuaHR0cEhhbmRsZXIsICdjYWxsJywgXzE1ID0+IF8xNSh1cmwsIHBheWxvYWQpXSlcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25BdWRpdERlY2lzaW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGNvcnJlY3QpID0+IHtcbiAgICAgIGNvbnN0IHtpZDogdGFza0lkfSA9IHRhc2sgfHwge31cbiAgICAgIGlmICh0YXNrSWQgJiYgb3JnSWQpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgIGRhdGE6IHtjb3JyZWN0OiBjb3JyZWN0fVxuICAgICAgICB9IFxuICAgICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzL3Rhc2tzLyR7dGFza0lkfS9hdWRpdGBcbiAgICAgICAgY29uc3Qge2Vycm9yc30gPSBhd2FpdCBfb3B0aW9uYWxDaGFpbihbbmV0d29ya2VyLCAnb3B0aW9uYWxBY2Nlc3MnLCBfMTYgPT4gXzE2Lmh0dHBIYW5kbGVyLCAnY2FsbCcsIF8xNyA9PiBfMTcodXJsLCBwYXlsb2FkKV0pXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVycm9ycykpIHtcbiAgICAgICAgICBkaXNwYXRjaChhZGRGYWlsdXJlTm90aWZpY2F0aW9uKGVycm9yc1swXS5tZXNzYWdlKSlcbiAgICAgICAgfVxuICAgICAgICBnZXRUYXNrKClcbiAgICAgICAgZ2V0QWN0aXZpdHkoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW3Rhc2ssIG9yZ0lkLCBxdWV1ZUlkXVxuICApXG5cbiAgY29uc3Qgb25Bc3NpZ24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICBhc3luYyAodXNlcklkKSA9PiB7XG4gICAgICBjb25zdCBjb25maWcgPSB7bWV0aG9kOiAnUE9TVCcsIGRhdGE6IHthc3NpZ25lZF90bzogdXNlcklkfX0gXG4gICAgICBjb25zdCB1cmwgPSBgL29yZ3MvJHtvcmdJZH0vcXVldWVzLyR7cXVldWVJZH0vdGFza3MvJHt0YXNrLmlkfS9hc3NpZ25gXG4gICAgICBjb25zdCB7ZXJyb3JzfSA9IGF3YWl0IG5ldHdvcmtlci5odHRwSGFuZGxlcih1cmwsIGNvbmZpZylcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBhc3NpZ24gdGFzaycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGFkZEZhaWx1cmVOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byB1bmFzc2lnbiB0YXNrJykpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXNzaWduaW5nIHRhc2snLCBKU09OLnN0cmluZ2lmeShlcnJvcnMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UmVmcmVzaGVkVGFzaygpXG4gICAgICAgIGdldEFjdGl2aXR5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIFt0YXNrXVxuICApXG5cbiAgaWYgKCFfb3B0aW9uYWxDaGFpbihbdGFzaywgJ29wdGlvbmFsQWNjZXNzJywgXzE4ID0+IF8xOC5pZF0pKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYXNrLCB7XG4gICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgIGlzQXVkaXRzOiBfb3B0aW9uYWxDaGFpbihbdGFzaywgJ29wdGlvbmFsQWNjZXNzJywgXzE5ID0+IF8xOS5zdGF0dXNdKSA9PT0gJ2NvbXBsZXRlZCcsXG4gICAgICB0YXNrOiB0YXNrLFxuICAgICAgb25TdWJtaXQ6IG9uU3VibWl0LFxuICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgb25TYXZlOiBvblNhdmUsXG4gICAgICBvblBvc3Q6IG9uUG9zdCxcbiAgICAgIG9uRGVsZXRlOiBvbkRlbGV0ZSxcbiAgICAgIG9uQXNzaWduOiBvbkFzc2lnbixcbiAgICAgIHRhc2tOYXY6IHRhc2tOYXYsXG4gICAgICBhY3Rpdml0eTogYWN0aXZpdHksXG4gICAgICBpc1N0YWZmOiBpc1N0YWZmLFxuICAgICAgb25BdWRpdERlY2lzaW9uOiBvbkF1ZGl0RGVjaXNpb24sXG4gICAgICBpc0xvYWRpbmc6IHRhc2tMb2FkaW5nIHx8IGFjdGl2aXR5TG9hZGluZywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI4OH19XG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tSb290XG4iLCJjb25zdCBfanN4RmlsZU5hbWUgPSBcIi9Vc2Vycy9hL2dpdC9IdW1hbi1MYW1iZGFzL2hsLXdlYi9zcmMvdW5pdmVyc2FsL21vZHVsZXMvdGFzay9jb21wb25lbnRzL1Rhc2sudHN4XCI7IGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZEFycmF5fSBmcm9tICdmb3JtaWsnXG5pbXBvcnQgUkdMIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL1JHTCdcbmltcG9ydCBCbG9ja0NvbXBvbmVudCBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9CbG9ja0NvbXBvbmVudCdcblxuaW1wb3J0IHtQQUxFVFRFfSBmcm9tICd1bml2ZXJzYWwvc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICd1bml2ZXJzYWwvY29tcG9uZW50cy9TZWNvbmRhcnlCdXR0b24nXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5pbXBvcnQgdXNlUm91dGVyIGZyb20gJ2NsaWVudC9ob29rcy91c2VSb3V0ZXInXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJ3VuaXZlcnNhbC9jb21wb25lbnRzL0FwcEhlYWRlcidcbmltcG9ydCBCbG9ja1dyYXBwZXIgZnJvbSAndW5pdmVyc2FsL2NvbXBvbmVudHMvQmxvY2tXcmFwcGVyJ1xuaW1wb3J0IHt0YXNrU2NoZW1hfSBmcm9tICd1bml2ZXJzYWwvdmFsaWRhdGlvbnMveXVwU2NoZW1hJ1xuaW1wb3J0IEF1ZGl0RGVjaXNpb24gZnJvbSAndW5pdmVyc2FsL21vZHVsZXMvYXVkaXRzL2NvbXBvbmVudHMvQXVkaXREZWNpc2lvbidcbmltcG9ydCBTcGlubmVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL1NwaW5uZXInXG5pbXBvcnQgdXNlTW9kYWwgZnJvbSAnY2xpZW50L2hvb2tzL3VzZU1vZGFsJ1xuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsJ1xuaW1wb3J0IHt3b3JrZmxsb3dBY3Rpb25zfSBmcm9tICdjbGllbnQvcmVkdXgvcXVldWVzUmVkdWNlcnMnXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZChGb3JtKSh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59KVxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0pXG5cbmNvbnN0IEFjdGlvbkJsb2NrID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgJHsocHJvcHMpID0+IChwcm9wcy5hdWRpdHMgPyAnMzVweCAzNXB4JyA6ICcnKX0gbWluLWNvbnRlbnQ7XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmNvbnN0IFF1ZXVlTmFtZSA9IHN0eWxlZC5kaXYoe1xuICBmb250V2VpZ2h0OiA1MDAsXG4gIGNvbG9yOiBQQUxFVFRFLlRFWFRfTUFJTlxufSlcblxuY29uc3QgVGFzayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25EZWxldGUsXG4gICAgb25Qb3N0LFxuICAgIHVzZXJJZCxcbiAgICBhY3Rpdml0eSxcbiAgICB0YXNrLFxuICAgIG9uU3VibWl0LFxuICAgIHRhc2tOYXYsXG4gICAgb3JnSWQsXG4gICAgb25TYXZlLFxuICAgIHVzZXJzLFxuICAgIG9uQXNzaWduLFxuICAgIGlzQXVkaXRzLFxuICAgIG9uQXVkaXREZWNpc2lvbixcbiAgICBpc0xvYWRpbmcsXG4gICAgaXNTdGFmZixcbiAgICBxdWV1ZXMsXG4gICAgc2V0U2VsZWN0ZWRRdWV1ZVxuICB9ID0gcHJvcHNcbiAgY29uc3Qge2lkOiB0YXNrSWQsIHF1ZXVlX2lkOiBxdWV1ZUlkLCBjb3JyZWN0OiBjb3JyZWN0fSA9IHRhc2sgfHwge31cbiAgY29uc3Qge2hpc3Rvcnl9ID0gdXNlUm91dGVyKCkgXG4gIGNvbnN0IFthc3NpZ25lZFRvLCBzZXRBc3NpZ25lZFRvXSA9IHVzZVN0YXRlKHRhc2tJZClcbiAgY29uc3Qge25leHQsIHByZXZpb3VzfSA9IHRhc2tOYXYgfHwge31cbiAgY29uc3QgcmV0dXJuVXJsID0gYC9xdWV1ZXMvJHtxdWV1ZUlkfWAgfHwgJ3F1ZXVlcydcbiAgY29uc3Qge3F1ZXVlfSA9IHRhc2sgfHwgJydcbiAgY29uc3QgbGF5b3V0cyA9IHRhc2suZGF0YS5tYXAoKGJsb2NrKSA9PiBibG9jay5sYXlvdXQpXG4gIGNvbnN0IGlzTm90QXNzaWduZWRUb01lID0gYXNzaWduZWRUbyAhPT0gdXNlcklkXG4gIGxldCByZWFkT25seSA9IGlzQXVkaXRzIHx8IGlzTm90QXNzaWduZWRUb01lXG4gIGlmIChpc1N0YWZmICYmIGlzTm90QXNzaWduZWRUb01lKSB7XG4gICAgcmVhZE9ubHkgPSB0cnVlXG4gIH1cbiAgY29uc3QgW2lzU3VibWl0aW5nLCBzZXRTdWJtaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc1NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYXNzaWduZWVEZXRhaWxzLCBzZXRBc3NpZ25lZURldGFpbHNdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3Qge1xuICAgIGxvY2F0aW9uOiB7cGF0aG5hbWUsIHN0YXRlOiBsb2NhdGlvblN0YXRlfVxuICB9ID0gaGlzdG9yeSB8fCB7fVxuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKClcblxuICBjb25zdCBbdGFza0NoYW5nZWQsIHNldFRhc2tDaGFuZ2VkXSA9IHVzZVN0YXRlKF9vcHRpb25hbENoYWluKFtsb2NhdGlvblN0YXRlLCAnb3B0aW9uYWxBY2Nlc3MnLCBfID0+IF8udGFza0NoYW5nZWRdKSB8fCBmYWxzZSlcblxuICBjb25zdCB7XG4gICAgbW9kYWxQb3J0YWw6IGNvbmZpcm1UYXNrLFxuICAgIHRvZ2dsZVBvcnRhbDogdG9nZ2xlVGFza01vZGFsLFxuICAgIGNsb3NlUG9ydGFsOiBjbG9zZVRhc2tNb2RhbFxuICB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCB7XG4gICAgbW9kYWxQb3J0YWw6IGNvbmZpcm1Bc3NpZ25lZSxcbiAgICB0b2dnbGVQb3J0YWw6IHRvZ2dsZUFzc2lnbmVlTW9kYWwsXG4gICAgY2xvc2VQb3J0YWw6IGNsb3NlQXNzaWduZWVNb2RhbFxuICB9ID0gdXNlTW9kYWwoKVxuXG4gIGNvbnN0IGlzQXVkaXRzUmVxdWVzdGVkRnJvbVVybCA9IHBhdGhuYW1lLmluY2x1ZGVzKCdhdWRpdCcpXG4gIGNvbnN0IGlzTG9hZGluZ1ByZXZpb3VzID0gdmlldyA9PT0gJ3ByZXZpb3VzJ1xuICBjb25zdCBpc0xvYWRpbmdOZXh0ID0gdmlldyA9PT0gJ25leHQnXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7YXNzaWduZWRfdG99ID0gdGFzayB8fCB7fVxuICAgIHNldEFzc2lnbmVkVG8oYXNzaWduZWRfdG8pXG4gICAgaWYgKGlzQXVkaXRzKSB7XG4gICAgICBjb25zdCBjdXJyZW50UXVldWUgPSBxdWV1ZXMuZmluZCgocSkgPT4gcS5pZCA9PT0gdGFzay5xdWV1ZV9pZClcbiAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRRdWV1ZShjdXJyZW50UXVldWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNBdWRpdHMsIHRhc2tdKVxuXG4gIGNvbnN0IHJlc2V0VmlldyA9ICgpID0+IHNldFZpZXcobnVsbClcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsXG4gICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB7XG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICAgICAgaW5pdGlhbFZhbHVlczogdGFzayxcbiAgICAgICAgb25TdWJtaXQ6IChfdmFsdWVzLCBmb3JtaWtCYWcpID0+IHtcbiAgICAgICAgICBmb3JtaWtCYWcuc2V0U3VibWl0dGluZyhmYWxzZSlcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGVPbkJsdXI6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25Nb3VudDogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogdGFza1NjaGVtYSxcbiAgICAgICAgaW5uZXJSZWY6IGZvcm1SZWYsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNDF9fVxuICAgICAgXG4gICAgICAgICwgKHtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIHNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgZXJyb3JzLFxuICAgICAgICAgIGhhbmRsZUJsdXIsXG4gICAgICAgICAgdmFsaWRhdGVGb3JtXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udGFpbmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2NH19XG4gICAgICAgICAgICAgICwgaXNBdWRpdHMgJiYgaXNBdWRpdHNSZXF1ZXN0ZWRGcm9tVXJsID8gKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0QmFySXRlbXM6IFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBoaXN0b3J5LnJlcGxhY2UoJy9hdWRpdHMnKSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2OH19XG4gICAgICAgICAgICAgICAgICAgICwgXCJCYWNrXCJcblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICBtaWRCYXJJdGVtczogUmVhY3QuY3JlYXRlRWxlbWVudChRdWV1ZU5hbWUsIHsga2V5OiBcIm5hbWVcIiwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE3Nn19LCBxdWV1ZSksXG4gICAgICAgICAgICAgICAgICByaWdodEJhckl0ZW1zOiBcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25CbG9jaywgeyBhdWRpdHM6ICFpc1N0YWZmID8gdHJ1ZSA6IGZhbHNlLCBrZXk6IFwibmF2X2Jsb2NrXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzh9fVxuICAgICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudChTZWNvbmRhcnlCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhcHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KCdwcmV2aW91cycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxNzl9fVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLCBpc0xvYWRpbmdQcmV2aW91cyAmJiBpc0xvYWRpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMTg4fX0gKSA6IGBQcmV2aW91c2BcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgLCAhaXNTdGFmZiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEF1ZGl0RGVjaXNpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZUlkOiBxdWV1ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrSWQ6IHRhc2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdWRpdERlY2lzaW9uOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BdWRpdERlY2lzaW9uKGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAxOTF9fVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFuZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldygnbmV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZShuZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIwMn19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGlzTG9hZGluZ05leHQgJiYgaXNMb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDIxMX19ICkgOiBgTmV4dGBcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDE2Nn19XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwSGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgICBsZWZ0QmFySXRlbXM6IFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY29uZGFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJiYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFza0NoYW5nZWQgJiYgZm9ybVJlZi5jdXJyZW50LmRpcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRhc2tNb2RhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UocmV0dXJuVXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMTl9fVxuICAgICAgICAgICAgICAgICAgICAsIFwiQmFja1wiXG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgbWlkQmFySXRlbXM6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVldWVOYW1lLCB7IGtleTogXCJuYW1lXCIsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyMzN9fSwgcXVldWUpLFxuICAgICAgICAgICAgICAgICAgcmlnaHRCYXJJdGVtczogXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWN0aW9uQmxvY2ssIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM1fX1cbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Vjb25kYXJ5QnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogcmVhZE9ubHkgfHwgaXNTdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2aW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG9uU2F2ZSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tDaGFuZ2VkKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjM2fX1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICwgaXNTYXZpbmcgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIHtfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjQ4fX0gKSA6IGBTYXZlYFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJpbWFyeUJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHJlYWRPbmx5IHx8IGlzU3VibWl0dGluZyB8fCAhaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgb25TdWJtaXQoZSwgdmFsdWVzLCBvcmdJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0aW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI1MH19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGlzU3VibWl0aW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChTcGlubmVyLCB7X19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDI2MH19ICkgOiBgU3VibWl0YFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMjE3fX1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkQXJyYXksIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRhdGFcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6ICgpID0+IChcbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge19fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjl9fVxuICAgICAgICAgICAgICAgICAgICAsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwge1xuICAgICAgICAgICAgICAgICAgICAgIG9uUG9zdDogKGFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvc3QoYXJncylcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlOiAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlKGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25lZFRvOiBhc3NpZ25lZFRvLFxuICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIG9uQXNzaWduOiAoYXNzaWduZWUsIGFzc2lnbm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldFZpZXcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNzaWduZWVEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tDaGFuZ2VkICYmIGZvcm1SZWYuY3VycmVudC5kaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVBc3NpZ25lZU1vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQXNzaWduKGFzc2lnbmVlLCBhc3NpZ25vcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlSWQ6IHF1ZXVlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgb3JnSWQ6IG9yZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5OiBhY3Rpdml0eSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0F1ZGl0czogaXNBdWRpdHMsXG4gICAgICAgICAgICAgICAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBxdWV1ZTogcXVldWUsIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNzB9fVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZToge3dpZHRoOiAnMTAwJSd9LCBfX3NlbGY6IHRoaXMsIF9fc291cmNlOiB7ZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSwgbGluZU51bWJlcjogMzAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAsICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNBdWRpdHMgJiYgaXNMb2FkaW5nTmV4dCAmJiBpc0xvYWRpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNMb2FkaW5nUHJldmlvdXMgJiYgaXNMb2FkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSR0wsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3BwYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVzaXphYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0czogbGF5b3V0cywgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMwNn19XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLCB2YWx1ZXMuZGF0YS5tYXAoKGJsb2NrLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzRm9yQmxvY2sgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMuZGF0YSAmJiBlcnJvcnMuZGF0YVtpZHhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yc0ZvckJsb2NrID0gZXJyb3JzLmRhdGFbaWR4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCbG9ja1dyYXBwZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZ3JpZCc6IGJsb2NrLmxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYmxvY2sudHlwZSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMxOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2NrQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogKGZpZWxkLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrQ2hhbmdlZCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBibG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9yc0ZvckJsb2NrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tDaGFuZ2VkKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXI6IGhhbmRsZUJsdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXVkaXRzOiByZWFkT25seSwgX19zZWxmOiB0aGlzLCBfX3NvdXJjZToge2ZpbGVOYW1lOiBfanN4RmlsZU5hbWUsIGxpbmVOdW1iZXI6IDMyNH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgLCBjb25maXJtVGFzayhcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VUYXNrTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYEV4aXQgd2l0aG91dCBzYXZpbmdgLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6IGBTYXZlIGFuZCBFeGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHJldHVyblVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXZpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgb25TYXZlKHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGFza0NoYW5nZWQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHJldHVyblVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNDh9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAsIGNvbmZpcm1Bc3NpZ25lZShcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpcm1hdGlvbk1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcnRhbDogY2xvc2VBc3NpZ25lZU1vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBSZWFzc2lnbiB3aXRob3V0IHNhdmluZ2AsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogYFNhdmUgYW5kIFJlYXNzaWduYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBZb3UgaGF2ZSBtYWRlIGNoYW5nZXMgYnV0IHRoZXkgaGF2ZW4ndCBiZWVuIHNhdmVkLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Bc3NpZ24oYXNzaWduZWVEZXRhaWxzLmFzc2lnbmVlLCBhc3NpZ25lZURldGFpbHMuYXNzaWdub3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzc2lnbmVlRGV0YWlscyhudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmluZyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBvblNhdmUodmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUYXNrQ2hhbmdlZChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2F2aW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFZpZXcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFzc2lnbihhc3NpZ25lZURldGFpbHMuYXNzaWduZWUsIGFzc2lnbmVlRGV0YWlscy5hc3NpZ25vcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAzNjZ9fVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksIF9fc2VsZjogdGhpcywgX19zb3VyY2U6IHtmaWxlTmFtZTogX2pzeEZpbGVOYW1lLCBsaW5lTnVtYmVyOiAyNjZ9fVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICBxdWV1ZXM6IHN0YXRlLnF1ZXVlcy5xdWV1ZXNcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgc2V0U2VsZWN0ZWRRdWV1ZTogKGFyZykgPT4gZGlzcGF0Y2god29ya2ZsbG93QWN0aW9ucy5zZXRTZWxlY3RlZFF1ZXVlKGFyZykpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUYXNrKVxuIiwiIGZ1bmN0aW9uIF9vcHRpb25hbENoYWluKG9wcykgeyBsZXQgbGFzdEFjY2Vzc0xIUyA9IHVuZGVmaW5lZDsgbGV0IHZhbHVlID0gb3BzWzBdOyBsZXQgaSA9IDE7IHdoaWxlIChpIDwgb3BzLmxlbmd0aCkgeyBjb25zdCBvcCA9IG9wc1tpXTsgY29uc3QgZm4gPSBvcHNbaSArIDFdOyBpICs9IDI7IGlmICgob3AgPT09ICdvcHRpb25hbEFjY2VzcycgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSAmJiB2YWx1ZSA9PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gaWYgKG9wID09PSAnYWNjZXNzJyB8fCBvcCA9PT0gJ29wdGlvbmFsQWNjZXNzJykgeyBsYXN0QWNjZXNzTEhTID0gdmFsdWU7IHZhbHVlID0gZm4odmFsdWUpOyB9IGVsc2UgaWYgKG9wID09PSAnY2FsbCcgfHwgb3AgPT09ICdvcHRpb25hbENhbGwnKSB7IHZhbHVlID0gZm4oKC4uLmFyZ3MpID0+IHZhbHVlLmNhbGwobGFzdEFjY2Vzc0xIUywgLi4uYXJncykpOyBsYXN0QWNjZXNzTEhTID0gdW5kZWZpbmVkOyB9IH0gcmV0dXJuIHZhbHVlOyB9aW1wb3J0IHtCTE9DS19UWVBFfSBmcm9tICd1bml2ZXJzYWwvdXRpbHMvY29uc3RhbnRzJ1xuXG5jb25zdCBmb3JtYXRWYWx1ZXMgPSAodmFsdWVzKSA9PiB7XG4gIGxldCBmaWVsZHNcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMuZGF0YSkpIHtcbiAgICBmaWVsZHMgPSB2YWx1ZXMuZGF0YVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIGZpZWxkcyA9IHZhbHVlc1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIGZpZWxkcy5maWx0ZXIoKHZhbCkgPT4ge1xuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF9vcHRpb25hbENoYWluKFt2YWwsICdhY2Nlc3MnLCBfID0+IF9bQkxPQ0tfVFlQRS5OQU1FRF9FTlRJVFlfUkVDT0dOSVRJT05dLCAnYWNjZXNzJywgXzIgPT4gXzIuZW50aXRpZXMsICdvcHRpb25hbEFjY2VzcycsIF8zID0+IF8zLmZpbHRlciwgJ2NhbGwnLCBfNCA9PiBfNCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBlbnRpdHkuY29sb3JcbiAgICAgICAgZGVsZXRlIGVudGl0eS50ZXh0XG4gICAgICB9KV0pXG4gICAgfVxuICAgIGlmICh2YWxbQkxPQ0tfVFlQRS5CT1VORElOR19CT1hFU10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLm9iamVjdHMpKSB7XG4gICAgICAgIHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5vYmplY3RzLmZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICAgICAgZGVsZXRlIGVudGl0eS5jb2xvclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHZhbFtCTE9DS19UWVBFLkJPVU5ESU5HX0JPWEVTXS52YWx1ZS5pbWFnZSA9PT0gJycpIHtcbiAgICAgICAgdmFsW0JMT0NLX1RZUEUuQk9VTkRJTkdfQk9YRVNdLnZhbHVlLmltYWdlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH0pXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0VmFsdWVzXG4iXSwic291cmNlUm9vdCI6IiJ9