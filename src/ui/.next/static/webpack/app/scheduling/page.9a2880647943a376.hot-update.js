"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/scheduling/page",{

/***/ "(app-pages-browser)/./app/components/fullcalendar/SchedulingCalendar.tsx":
/*!************************************************************!*\
  !*** ./app/components/fullcalendar/SchedulingCalendar.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _SchedulingCalendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulingCalendar.css */ \"(app-pages-browser)/./app/components/fullcalendar/SchedulingCalendar.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/react */ \"(app-pages-browser)/./node_modules/@fullcalendar/react/dist/index.js\");\n/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ \"(app-pages-browser)/./node_modules/@fullcalendar/daygrid/index.js\");\n/* harmony import */ var _fullcalendar_multimonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/multimonth */ \"(app-pages-browser)/./node_modules/@fullcalendar/multimonth/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst SchedulingCalendar = ()=>{\n    const handleDateClick = (arg)=>{\n        alert(arg.dateStr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        plugins: [\n            _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            _fullcalendar_multimonth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        ],\n        initialView: \"dayGridMonth\",\n        selectable: true,\n        eventClick: handleDateClick\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Projects\\\\medical-system\\\\src\\\\ui\\\\app\\\\components\\\\fullcalendar\\\\SchedulingCalendar.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SchedulingCalendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SchedulingCalendar);\nvar _c;\n$RefreshReg$(_c, \"SchedulingCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Z1bGxjYWxlbmRhci9TY2hlZHVsaW5nQ2FsZW5kYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVrQztBQUVSO0FBQ3FCO0FBQ0c7QUFDSztBQUV2RCxNQUFNSSxxQkFBcUI7SUFDekIsTUFBTUMsa0JBQXVCLENBQUNDO1FBQzVCQyxNQUFNRCxJQUFJRSxPQUFPO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNQLDJEQUFZQTtRQUNYUSxTQUFTO1lBQUNQLDZEQUFhQTtZQUFFQyxnRUFBZ0JBO1NBQUM7UUFDMUNPLGFBQVk7UUFDWkMsWUFBWTtRQUNaQyxZQUFZUDs7Ozs7O0FBR2xCO0tBYk1EO0FBZU4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9mdWxsY2FsZW5kYXIvU2NoZWR1bGluZ0NhbGVuZGFyLnRzeD8wNzYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFwiLi9TY2hlZHVsaW5nQ2FsZW5kYXIuY3NzXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIjtcclxuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZFwiO1xyXG5pbXBvcnQgbXVsdGlNb250aFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL211bHRpbW9udGgnXHJcblxyXG5jb25zdCBTY2hlZHVsaW5nQ2FsZW5kYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlRGF0ZUNsaWNrOiBhbnkgPSAoYXJnOiBhbnkpID0+IHsgLy8gYmluZCB3aXRoIGFuIGFycm93IGZ1bmN0aW9uXHJcbiAgICBhbGVydChhcmcuZGF0ZVN0cilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnVsbENhbGVuZGFyXHJcbiAgICAgIHBsdWdpbnM9e1tkYXlHcmlkUGx1Z2luLCBtdWx0aU1vbnRoUGx1Z2luXX1cclxuICAgICAgaW5pdGlhbFZpZXc9XCJkYXlHcmlkTW9udGhcIlxyXG4gICAgICBzZWxlY3RhYmxlPXt0cnVlfVxyXG4gICAgICBldmVudENsaWNrPXtoYW5kbGVEYXRlQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2hlZHVsaW5nQ2FsZW5kYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZ1bGxDYWxlbmRhciIsImRheUdyaWRQbHVnaW4iLCJtdWx0aU1vbnRoUGx1Z2luIiwiU2NoZWR1bGluZ0NhbGVuZGFyIiwiaGFuZGxlRGF0ZUNsaWNrIiwiYXJnIiwiYWxlcnQiLCJkYXRlU3RyIiwicGx1Z2lucyIsImluaXRpYWxWaWV3Iiwic2VsZWN0YWJsZSIsImV2ZW50Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/fullcalendar/SchedulingCalendar.tsx\n"));

/***/ })

});