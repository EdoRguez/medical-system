"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/chartjs-adapter-moment";
exports.ids = ["vendor-chunks/chartjs-adapter-moment"];
exports.modules = {

/***/ "(ssr)/./node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"(ssr)/./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(ssr)/./node_modules/chart.js/dist/chart.js\");\n/*!\n  * chartjs-adapter-moment v1.0.1\n  * https://www.chartjs.org\n  * (c) 2022 chartjs-adapter-moment Contributors\n  * Released under the MIT license\n  */ \n\nconst FORMATS = {\n    datetime: \"MMM D, YYYY, h:mm:ss a\",\n    millisecond: \"h:mm:ss.SSS a\",\n    second: \"h:mm:ss a\",\n    minute: \"h:mm a\",\n    hour: \"hA\",\n    day: \"MMM D\",\n    week: \"ll\",\n    month: \"MMM YYYY\",\n    quarter: \"[Q]Q - YYYY\",\n    year: \"YYYY\"\n};\nchart_js__WEBPACK_IMPORTED_MODULE_1__._adapters._date.override(typeof (moment__WEBPACK_IMPORTED_MODULE_0___default()) === \"function\" ? {\n    _id: \"moment\",\n    formats: function() {\n        return FORMATS;\n    },\n    parse: function(value, format) {\n        if (typeof value === \"string\" && typeof format === \"string\") {\n            value = moment__WEBPACK_IMPORTED_MODULE_0___default()(value, format);\n        } else if (!(value instanceof (moment__WEBPACK_IMPORTED_MODULE_0___default()))) {\n            value = moment__WEBPACK_IMPORTED_MODULE_0___default()(value);\n        }\n        return value.isValid() ? value.valueOf() : null;\n    },\n    format: function(time, format) {\n        return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).format(format);\n    },\n    add: function(time, amount, unit) {\n        return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).add(amount, unit).valueOf();\n    },\n    diff: function(max, min, unit) {\n        return moment__WEBPACK_IMPORTED_MODULE_0___default()(max).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(min), unit);\n    },\n    startOf: function(time, unit, weekday) {\n        time = moment__WEBPACK_IMPORTED_MODULE_0___default()(time);\n        if (unit === \"isoWeek\") {\n            weekday = Math.trunc(Math.min(Math.max(0, weekday), 6));\n            return time.isoWeekday(weekday).startOf(\"day\").valueOf();\n        }\n        return time.startOf(unit).valueOf();\n    },\n    endOf: function(time, unit) {\n        return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).endOf(unit).valueOf();\n    }\n} : {});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2hhcnRqcy1hZGFwdGVyLW1vbWVudC9kaXN0L2NoYXJ0anMtYWRhcHRlci1tb21lbnQuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7RUFLRSxHQUMwQjtBQUNTO0FBRXJDLE1BQU1FLFVBQVU7SUFDZEMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxNQUFNO0lBQ05DLEtBQUs7SUFDTEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLFNBQVM7SUFDVEMsTUFBTTtBQUNSO0FBRUFYLCtDQUFTQSxDQUFDWSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxPQUFPZCwrQ0FBTUEsS0FBSyxhQUFhO0lBQ3REZSxLQUFLO0lBRUxDLFNBQVM7UUFDUCxPQUFPZDtJQUNUO0lBRUFlLE9BQU8sU0FBU0MsS0FBSyxFQUFFQyxNQUFNO1FBQzNCLElBQUksT0FBT0QsVUFBVSxZQUFZLE9BQU9DLFdBQVcsVUFBVTtZQUMzREQsUUFBUWxCLDZDQUFNQSxDQUFDa0IsT0FBT0M7UUFDeEIsT0FBTyxJQUFJLENBQUVELENBQUFBLGlCQUFpQmxCLCtDQUFLLEdBQUk7WUFDckNrQixRQUFRbEIsNkNBQU1BLENBQUNrQjtRQUNqQjtRQUNBLE9BQU9BLE1BQU1FLE9BQU8sS0FBS0YsTUFBTUcsT0FBTyxLQUFLO0lBQzdDO0lBRUFGLFFBQVEsU0FBU0csSUFBSSxFQUFFSCxNQUFNO1FBQzNCLE9BQU9uQiw2Q0FBTUEsQ0FBQ3NCLE1BQU1ILE1BQU0sQ0FBQ0E7SUFDN0I7SUFFQUksS0FBSyxTQUFTRCxJQUFJLEVBQUVFLE1BQU0sRUFBRUMsSUFBSTtRQUM5QixPQUFPekIsNkNBQU1BLENBQUNzQixNQUFNQyxHQUFHLENBQUNDLFFBQVFDLE1BQU1KLE9BQU87SUFDL0M7SUFFQUssTUFBTSxTQUFTQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUgsSUFBSTtRQUMzQixPQUFPekIsNkNBQU1BLENBQUMyQixLQUFLRCxJQUFJLENBQUMxQiw2Q0FBTUEsQ0FBQzRCLE1BQU1IO0lBQ3ZDO0lBRUFJLFNBQVMsU0FBU1AsSUFBSSxFQUFFRyxJQUFJLEVBQUVLLE9BQU87UUFDbkNSLE9BQU90Qiw2Q0FBTUEsQ0FBQ3NCO1FBQ2QsSUFBSUcsU0FBUyxXQUFXO1lBQ3RCSyxVQUFVQyxLQUFLQyxLQUFLLENBQUNELEtBQUtILEdBQUcsQ0FBQ0csS0FBS0osR0FBRyxDQUFDLEdBQUdHLFVBQVU7WUFDcEQsT0FBT1IsS0FBS1csVUFBVSxDQUFDSCxTQUFTRCxPQUFPLENBQUMsT0FBT1IsT0FBTztRQUN4RDtRQUNBLE9BQU9DLEtBQUtPLE9BQU8sQ0FBQ0osTUFBTUosT0FBTztJQUNuQztJQUVBYSxPQUFPLFNBQVNaLElBQUksRUFBRUcsSUFBSTtRQUN4QixPQUFPekIsNkNBQU1BLENBQUNzQixNQUFNWSxLQUFLLENBQUNULE1BQU1KLE9BQU87SUFDekM7QUFDRixJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS8uL25vZGVfbW9kdWxlcy9jaGFydGpzLWFkYXB0ZXItbW9tZW50L2Rpc3QvY2hhcnRqcy1hZGFwdGVyLW1vbWVudC5lc20uanM/ODI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBjaGFydGpzLWFkYXB0ZXItbW9tZW50IHYxLjAuMVxuICAqIGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnXG4gICogKGMpIDIwMjIgY2hhcnRqcy1hZGFwdGVyLW1vbWVudCBDb250cmlidXRvcnNcbiAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgKi9cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IF9hZGFwdGVycyB9IGZyb20gJ2NoYXJ0LmpzJztcblxuY29uc3QgRk9STUFUUyA9IHtcbiAgZGF0ZXRpbWU6ICdNTU0gRCwgWVlZWSwgaDptbTpzcyBhJyxcbiAgbWlsbGlzZWNvbmQ6ICdoOm1tOnNzLlNTUyBhJyxcbiAgc2Vjb25kOiAnaDptbTpzcyBhJyxcbiAgbWludXRlOiAnaDptbSBhJyxcbiAgaG91cjogJ2hBJyxcbiAgZGF5OiAnTU1NIEQnLFxuICB3ZWVrOiAnbGwnLFxuICBtb250aDogJ01NTSBZWVlZJyxcbiAgcXVhcnRlcjogJ1tRXVEgLSBZWVlZJyxcbiAgeWVhcjogJ1lZWVknXG59O1xuXG5fYWRhcHRlcnMuX2RhdGUub3ZlcnJpZGUodHlwZW9mIG1vbWVudCA9PT0gJ2Z1bmN0aW9uJyA/IHtcbiAgX2lkOiAnbW9tZW50JywgLy8gREVCVUcgT05MWVxuXG4gIGZvcm1hdHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBGT1JNQVRTO1xuICB9LFxuXG4gIHBhcnNlOiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHZhbHVlLCBmb3JtYXQpO1xuICAgIH0gZWxzZSBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIG1vbWVudCkpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmlzVmFsaWQoKSA/IHZhbHVlLnZhbHVlT2YoKSA6IG51bGw7XG4gIH0sXG5cbiAgZm9ybWF0OiBmdW5jdGlvbih0aW1lLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gbW9tZW50KHRpbWUpLmZvcm1hdChmb3JtYXQpO1xuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odGltZSwgYW1vdW50LCB1bml0KSB7XG4gICAgcmV0dXJuIG1vbWVudCh0aW1lKS5hZGQoYW1vdW50LCB1bml0KS52YWx1ZU9mKCk7XG4gIH0sXG5cbiAgZGlmZjogZnVuY3Rpb24obWF4LCBtaW4sIHVuaXQpIHtcbiAgICByZXR1cm4gbW9tZW50KG1heCkuZGlmZihtb21lbnQobWluKSwgdW5pdCk7XG4gIH0sXG5cbiAgc3RhcnRPZjogZnVuY3Rpb24odGltZSwgdW5pdCwgd2Vla2RheSkge1xuICAgIHRpbWUgPSBtb21lbnQodGltZSk7XG4gICAgaWYgKHVuaXQgPT09ICdpc29XZWVrJykge1xuICAgICAgd2Vla2RheSA9IE1hdGgudHJ1bmMoTWF0aC5taW4oTWF0aC5tYXgoMCwgd2Vla2RheSksIDYpKTtcbiAgICAgIHJldHVybiB0aW1lLmlzb1dlZWtkYXkod2Vla2RheSkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuICAgIH1cbiAgICByZXR1cm4gdGltZS5zdGFydE9mKHVuaXQpLnZhbHVlT2YoKTtcbiAgfSxcblxuICBlbmRPZjogZnVuY3Rpb24odGltZSwgdW5pdCkge1xuICAgIHJldHVybiBtb21lbnQodGltZSkuZW5kT2YodW5pdCkudmFsdWVPZigpO1xuICB9XG59IDoge30pO1xuIl0sIm5hbWVzIjpbIm1vbWVudCIsIl9hZGFwdGVycyIsIkZPUk1BVFMiLCJkYXRldGltZSIsIm1pbGxpc2Vjb25kIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsIndlZWsiLCJtb250aCIsInF1YXJ0ZXIiLCJ5ZWFyIiwiX2RhdGUiLCJvdmVycmlkZSIsIl9pZCIsImZvcm1hdHMiLCJwYXJzZSIsInZhbHVlIiwiZm9ybWF0IiwiaXNWYWxpZCIsInZhbHVlT2YiLCJ0aW1lIiwiYWRkIiwiYW1vdW50IiwidW5pdCIsImRpZmYiLCJtYXgiLCJtaW4iLCJzdGFydE9mIiwid2Vla2RheSIsIk1hdGgiLCJ0cnVuYyIsImlzb1dlZWtkYXkiLCJlbmRPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js\n");

/***/ })

};
;