"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/login",{

/***/ "../../../../.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../../../.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx ***!
  \***************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginPassword\": function() { return /* binding */ LoginPassword; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../../../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atls_ui_proto_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @atls-ui-proto/button */ \"../../../../.yarn/__virtual__/@atls-ui-proto-button-virtual-d4ebe111a2/0/cache/@atls-ui-proto-button-npm-0.0.8-7c0e7e28e7-aaebbfab11.zip/node_modules/@atls-ui-proto/button/dist/index.js\");\n/* harmony import */ var _atls_ui_proto_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_atls_ui_proto_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atls_ui_proto_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atls-ui-proto/input */ \"../../../../.yarn/__virtual__/@atls-ui-proto-input-virtual-d90ff9e050/0/cache/@atls-ui-proto-input-npm-0.0.12-2f5e173275-dc30422251.zip/node_modules/@atls-ui-proto/input/dist/index.js\");\n/* harmony import */ var _atls_ui_proto_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_atls_ui_proto_input__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../../../.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ \"../../../../.yarn/__virtual__/react-intl-virtual-7d6d78b994/0/cache/react-intl-npm-5.23.0-ff33737be8-8dc254355f.zip/node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _identity_messages_fragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @identity/messages-fragment */ \"../../../../.yarn/__virtual__/@identity-messages-fragment-virtual-629d07fabe/1/identity/fragments/messages/src/index.tsx\");\n/* harmony import */ var _ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ui/layout */ \"../../../../.yarn/__virtual__/@ui-layout-virtual-b1ac508d48/1/ui/layout/src/index.ts\");\n/* harmony import */ var _ui_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ui/link */ \"../../../../.yarn/__virtual__/@ui-link-virtual-78fdd9e68c/1/ui/link/src/index.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LoginPassword = function() {\n    _s();\n    var formatMessage = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)().formatMessage;\n    var refLogin = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var onChangePass = function(event) {\n        console.log(\"search\", event.match(/[а-яА-Я]*$/i));\n        if (Boolean(event.match(/[а-яА-Я]/))) console.log(\"\\u043A\\u0438\\u0440\\u0438\\u043B\\u0438\\u0446\\u0430 \\u0434\\u0435\\u0442\\u0442\\u0435\\u043A\\u0442\\u0438\\u0434\", event);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Column, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                height: 80,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Column, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                            height: 56,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atls_ui_proto_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                id: \"login_field\",\n                                placeholder: formatMessage({\n                                    id: \"login_password.your_login\"\n                                }),\n                                onChange: onChangePass\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n                            flexBasis: 12\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_identity_messages_fragment__WEBPACK_IMPORTED_MODULE_4__.FieldMessages, {\n                            messages: [\n                                {\n                                    id: 0,\n                                    text: \"strings\",\n                                    type: \"error\"\n                                }\n                            ]\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                height: 80,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Column, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                            height: 56,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atls_ui_proto_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                placeholder: formatMessage({\n                                    id: \"login_password.password\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n                            flexBasis: 12\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atls_ui_proto_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                type: \"submit\",\n                size: \"large\",\n                style: {\n                    width: 240\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {\n                    id: \"login_password.login\",\n                    defaultMessage: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n                flexBasis: 16\n            }, void 0, false, {\n                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n                        flexBasis: 12\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Layout, {\n                        width: [\n                            \"100%\",\n                            \"100%\",\n                            240\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_link__WEBPACK_IMPORTED_MODULE_6__.NextLink, {\n                            path: \"/auth/registration\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atls_ui_proto_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_7__.FormattedMessage, {\n                                    id: \"login_password.create_account\",\n                                    defaultMessage: \"Create account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikitasoroko/Desktop/\\u0410\\u043A\\u0430\\u0434\\u0435\\u043C\\u0438\\u044F/Gradesor.github.io/.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoginPassword, \"RZjtt0MDL4xzzrQW7ElTyFFsE00=\", false, function() {\n    return [\n        react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl\n    ];\n});\n_c = LoginPassword;\n\nvar _c;\n$RefreshReg$(_c, \"LoginPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vQGlkZW50aXR5LWxvZ2luLXBhc3N3b3JkLWZyYWdtZW50LXZpcnR1YWwtYzFmZmY0MWYwMy8xL2lkZW50aXR5L2ZyYWdtZW50cy9sb2dpbi1wYXNzd29yZC9zcmMvbG9naW4tcGFzc3dvcmQuY29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdEO0FBQ0Q7QUFFZjtBQUVBO0FBQ0s7QUFDQTtBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Y7O0FBRTNDLElBQU1XLGFBQWEsR0FBTyxXQUFNOztJQUM5QixJQUFNLGFBQWUsR0FBS04sbURBQU8sRUFBRSxDQUEzQk8sYUFBYTtJQUNyQixJQUFNQyxRQUFRLEdBQUdWLDZDQUFNLENBQW1CLElBQUksQ0FBQztJQUMvQyxJQUFNVyxZQUFZLEdBQUcsU0FBQ0MsS0FBYSxFQUFLO1FBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLEtBQUssQ0FBQ0csS0FBSztRQUM3QixJQUFBQyxPQUFPLENBQUNKLEtBQUssQ0FBQ0csS0FBSyxnQkFBWSxDQUFLLEVBQ2xDRixPQUFHLENBQUNDLEdBQUcsQ0FBQyx5R0FBb0IsRUFBRUY7S0FDckM7SUFDRCxxQkFDRSw4REFBQ1IsOENBQU07OzBCQUNMLDhEQUFDQywyQ0FBRztnQkFBQ1ksTUFBTSxFQUFFLEVBQUU7MEJBQ2IsNEVBQUNiLDhDQUFNOztzQ0FDTCw4REFBQ0MsMkNBQUc7NEJBQUNZLE1BQU0sRUFBRSxFQUFFO3NDQUNiLDRFQUFDbkIsdURBQUs7Z0NBQ0pvQixFQUFFLEVBQUMsYUFBYTtnQ0FDaEJDLFdBQVcsRUFBRVYsYUFBYSxDQUFDO29DQUN6QlMsRUFBRSxFQUFFLDJCQUEyQjtpQ0FDaEMsQ0FBQztnQ0FDRkUsUUFBUSxFQUFFVCxZQUFZOzs7OztxQ0FDdEI7Ozs7O2lDQUNFO3NDQUNOLDhEQUFDTCw4Q0FBTTs0QkFBQ2UsU0FBUyxFQUFFLEVBQUU7Ozs7O2lDQUFJO3NDQUN6Qiw4REFBQ2xCLHNFQUFhOzRCQUNabUIsUUFBUSxFQUFFO2dDQUFDO29DQUFFSixFQUFFLEVBQUUsQ0FBQztvQ0FBRUssSUFBSSxFQUFFLFNBQVM7b0NBQUVDLElBQUksRUFBRSxPQUFPO2lDQUFFOzZCQUFDOzs7OztpQ0FDckQ7Ozs7Ozt5QkFDSzs7Ozs7cUJBQ0w7MEJBQ04sOERBQUNuQiwyQ0FBRztnQkFBQ1ksTUFBTSxFQUFFLEVBQUU7MEJBQ2IsNEVBQUNiLDhDQUFNOztzQ0FDTCw4REFBQ0MsMkNBQUc7NEJBQUNZLE1BQU0sRUFBRSxFQUFFO3NDQUNiLDRFQUFDbkIsdURBQUs7Z0NBQ0pxQixXQUFXLEVBQUVWLGFBQWEsQ0FBQztvQ0FDekJTLEVBQUUsRUFBRSx5QkFBeUI7aUNBQzlCLENBQUM7Ozs7O3FDQUNGOzs7OztpQ0FDRTtzQ0FDTiw4REFBQ1osOENBQU07NEJBQUNlLFNBQVMsRUFBRSxFQUFFOzs7OztpQ0FBSTs7Ozs7O3lCQUNsQjs7Ozs7cUJBQ0w7MEJBQ04sOERBQUN4Qix5REFBTTtnQkFBQzJCLElBQUksRUFBQyxRQUFRO2dCQUFDQyxJQUFJLEVBQUMsT0FBTztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsR0FBRztpQkFBRTswQkFDdEQsNEVBQUMxQix3REFBZ0I7b0JBQUNpQixFQUFFLEVBQUMsc0JBQXNCO29CQUFDVSxjQUFjLEVBQUMsT0FBTzs7Ozs7eUJBQUc7Ozs7O3FCQUM5RDswQkFDVCw4REFBQ3RCLDhDQUFNO2dCQUFDZSxTQUFTLEVBQUUsRUFBRTs7Ozs7cUJBQUk7MEJBQ3pCLDhEQUFDaEIsMkNBQUc7O2tDQUNGLDhEQUFDQyw4Q0FBTTt3QkFBQ2UsU0FBUyxFQUFFLEVBQUU7Ozs7OzZCQUFJO2tDQUN6Qiw4REFBQ2YsOENBQU07d0JBQUNxQixLQUFLLEVBQUU7NEJBQUMsTUFBTTs0QkFBRSxNQUFNO0FBQUUsK0JBQUc7eUJBQUM7a0NBQ2xDLDRFQUFDcEIsOENBQVE7NEJBQUNzQixJQUFJLEVBQUMsb0JBQW9CO3NDQUNqQyw0RUFBQ2hDLHlEQUFNOzBDQUNMLDRFQUFDSSx3REFBZ0I7b0NBQ2ZpQixFQUFFLEVBQUMsK0JBQStCO29DQUNsQ1UsY0FBYyxFQUFDLGdCQUFnQjs7Ozs7eUNBQy9COzs7OztxQ0FDSzs7Ozs7aUNBQ0E7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0w7Ozs7OzthQUNDLENBQ1Q7Q0FDSDtHQTFES3BCLGFBQWE7O1FBQ1NOLCtDQUFPOzs7QUFEN0JNLEtBQUFBLGFBQWE7QUE0REsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL0BpZGVudGl0eS1sb2dpbi1wYXNzd29yZC1mcmFnbWVudC12aXJ0dWFsLWMxZmZmNDFmMDMvMS9pZGVudGl0eS9mcmFnbWVudHMvbG9naW4tcGFzc3dvcmQvc3JjL2xvZ2luLXBhc3N3b3JkLmNvbXBvbmVudC50c3g/Y2E2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSAgICAgICAgICAgZnJvbSAnQGF0bHMtdWktcHJvdG8vYnV0dG9uJ1xuaW1wb3J0IHsgSW5wdXQgfSAgICAgICAgICAgIGZyb20gJ0BhdGxzLXVpLXByb3RvL2lucHV0J1xuXG5pbXBvcnQgUmVhY3QgICAgICAgICAgICAgICAgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGQyB9ICAgICAgICAgICAgICAgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYgfSAgICAgICAgICAgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCdcbmltcG9ydCB7IHVzZUludGwgfSAgICAgICAgICBmcm9tICdyZWFjdC1pbnRsJ1xuXG5pbXBvcnQgeyBGaWVsZE1lc3NhZ2VzIH0gZnJvbSBcIkBpZGVudGl0eS9tZXNzYWdlcy1mcmFnbWVudFwiO1xuaW1wb3J0IHsgQ29sdW1uIH0gICAgICAgICAgIGZyb20gJ0B1aS9sYXlvdXQnXG5pbXBvcnQgeyBSb3cgfSAgICAgICAgICAgICAgZnJvbSAnQHVpL2xheW91dCdcbmltcG9ydCB7IExheW91dCB9ICAgICAgICAgICBmcm9tICdAdWkvbGF5b3V0J1xuaW1wb3J0IHsgTmV4dExpbmsgfSAgICAgICAgIGZyb20gJ0B1aS9saW5rJ1xuXG5jb25zdCBMb2dpblBhc3N3b3JkOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKClcbiAgY29uc3QgcmVmTG9naW4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9uQ2hhbmdlUGFzcyA9IChldmVudDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hcIiwgZXZlbnQubWF0Y2goL1vQsC3Rj9CQLdCvXSokL2kpKTtcbiAgICBpZiAoQm9vbGVhbihldmVudC5tYXRjaCgvW9CwLdGP0JAt0K9dLykpKVxuICAgICAgY29uc29sZS5sb2coXCLQutC40YDQuNC70LjRhtCwINC00LXRgtGC0LXQutGC0LjQtFwiLCBldmVudCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPENvbHVtbj5cbiAgICAgIDxSb3cgaGVpZ2h0PXs4MH0+XG4gICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgPFJvdyBoZWlnaHQ9ezU2fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImxvZ2luX2ZpZWxkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGlkOiBcImxvZ2luX3Bhc3N3b3JkLnlvdXJfbG9naW5cIixcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxMYXlvdXQgZmxleEJhc2lzPXsxMn0gLz5cbiAgICAgICAgICA8RmllbGRNZXNzYWdlc1xuICAgICAgICAgICAgbWVzc2FnZXM9e1t7IGlkOiAwLCB0ZXh0OiBcInN0cmluZ3NcIiwgdHlwZTogXCJlcnJvclwiIH1dfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGhlaWdodD17ODB9PlxuICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgIDxSb3cgaGVpZ2h0PXs1Nn0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGlkOiBcImxvZ2luX3Bhc3N3b3JkLnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8TGF5b3V0IGZsZXhCYXNpcz17MTJ9IC8+XG4gICAgICAgIDwvQ29sdW1uPlxuICAgICAgPC9Sb3c+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibGFyZ2VcIiBzdHlsZT17eyB3aWR0aDogMjQwIH19PlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImxvZ2luX3Bhc3N3b3JkLmxvZ2luXCIgZGVmYXVsdE1lc3NhZ2U9XCJMb2dpblwiIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxMYXlvdXQgZmxleEJhc2lzPXsxNn0gLz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxMYXlvdXQgZmxleEJhc2lzPXsxMn0gLz5cbiAgICAgICAgPExheW91dCB3aWR0aD17W1wiMTAwJVwiLCBcIjEwMCVcIiwgMjQwXX0+XG4gICAgICAgICAgPE5leHRMaW5rIHBhdGg9XCIvYXV0aC9yZWdpc3RyYXRpb25cIj5cbiAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgaWQ9XCJsb2dpbl9wYXNzd29yZC5jcmVhdGVfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJDcmVhdGUgYWNjb3VudFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29sdW1uPlxuICApO1xufVxuXG5leHBvcnQgeyBMb2dpblBhc3N3b3JkIH1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsIlJlYWN0IiwidXNlUmVmIiwiRm9ybWF0dGVkTWVzc2FnZSIsInVzZUludGwiLCJGaWVsZE1lc3NhZ2VzIiwiQ29sdW1uIiwiUm93IiwiTGF5b3V0IiwiTmV4dExpbmsiLCJMb2dpblBhc3N3b3JkIiwiZm9ybWF0TWVzc2FnZSIsInJlZkxvZ2luIiwib25DaGFuZ2VQYXNzIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJCb29sZWFuIiwiaGVpZ2h0IiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZmxleEJhc2lzIiwibWVzc2FnZXMiLCJ0ZXh0IiwidHlwZSIsInNpemUiLCJzdHlsZSIsIndpZHRoIiwiZGVmYXVsdE1lc3NhZ2UiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../.yarn/__virtual__/@identity-login-password-fragment-virtual-c1fff41f03/1/identity/fragments/login-password/src/login-password.component.tsx\n"));

/***/ })

});