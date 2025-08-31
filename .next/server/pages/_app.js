/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./common/components/modal/animations/ModalManager.animations.ts":
/*!***********************************************************************!*\
  !*** ./common/components/modal/animations/ModalManager.animations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgAnimation\": () => (/* binding */ bgAnimation),\n/* harmony export */   \"modalAnimation\": () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/constants/easings */ \"./common/constants/easings.ts\");\n\nconst transition = {\n    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwRDtBQUUxRCxNQUFNQyxVQUFVLEdBQUc7SUFBRUMsSUFBSSxFQUFFRixtRUFBWTtDQUFFO0FBRWxDLE1BQU1HLFdBQVcsR0FBRztJQUN6QkMsTUFBTSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVKLFVBQVU7S0FBRTtJQUNsQ0ssTUFBTSxFQUFFO1FBQUVELE9BQU8sRUFBRSxDQUFDO1FBQUVKLFVBQVU7S0FBRTtDQUNuQyxDQUFDO0FBRUssTUFBTU0sY0FBYyxHQUFHO0lBQzVCSCxNQUFNLEVBQUU7UUFBRUksQ0FBQyxFQUFFLENBQUMsR0FBRztRQUFFUCxVQUFVO0tBQUU7SUFDL0JLLE1BQU0sRUFBRTtRQUFFRSxDQUFDLEVBQUUsQ0FBQztRQUFFUCxVQUFVO0tBQUU7SUFDNUJRLE1BQU0sRUFBRTtRQUFFRCxDQUFDLEVBQUUsR0FBRztRQUFFUCxVQUFVO0tBQUU7Q0FDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHM/NzZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0VBU0UgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3NcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7IGVhc2U6IERFRkFVTFRfRUFTRSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJnQW5pbWF0aW9uID0ge1xyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgb3BlbmVkOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEFuaW1hdGlvbiA9IHtcclxuICBjbG9zZWQ6IHsgeTogLTEwMCwgdHJhbnNpdGlvbiB9LFxyXG4gIG9wZW5lZDogeyB5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgZXhpdGVkOiB7IHk6IDEwMCwgdHJhbnNpdGlvbiB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiREVGQVVMVF9FQVNFIiwidHJhbnNpdGlvbiIsImVhc2UiLCJiZ0FuaW1hdGlvbiIsImNsb3NlZCIsIm9wYWNpdHkiLCJvcGVuZWQiLCJtb2RhbEFuaW1hdGlvbiIsInkiLCJleGl0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "./common/components/modal/components/ModalManager.tsx":
/*!*************************************************************!*\
  !*** ./common/components/modal/components/ModalManager.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/recoil/modal */ \"./common/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"./common/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened , modal  }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { 0: portalNode , 1: setPortalNode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!portalNode) {\n            const node = document.getElementById(\"portal\");\n            if (node) setPortalNode(node);\n            return;\n        }\n        if (opened) {\n            portalNode.style.pointerEvents = \"all\";\n        } else {\n            portalNode.style.pointerEvents = \"none\";\n        }\n    }, [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                }),\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation(),\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL01vZGFsTWFuYWdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUVZO0FBQ2hCO0FBRU07QUFFTTtBQUlMO0FBRS9DLE1BQU1TLFlBQVksR0FBRyxJQUFNO0lBQ3pCLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRSxFQUFFQyxRQUFRLENBQUMsR0FBR1Isc0RBQWMsQ0FBQ0MsNERBQVMsQ0FBQztJQUUvRCxNQUFNLEtBQUNRLFVBQVUsTUFBRUMsYUFBYSxNQUFJYiwrQ0FBUSxFQUFlO0lBRTNERCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNhLFVBQVUsRUFBRTtZQUNmLE1BQU1FLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQzlDLElBQUlGLElBQUksRUFBRUQsYUFBYSxDQUFDQyxJQUFJLENBQUMsQ0FBQztZQUM5QixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUlMLE1BQU0sRUFBRTtZQUNWRyxVQUFVLENBQUNLLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxPQUFPO1lBQ0xOLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ1QsTUFBTTtRQUFFRyxVQUFVO0tBQUMsQ0FBQyxDQUFDO0lBRXpCLHFCQUNFLDhEQUFDUCxpRUFBTTtrQkFDTCw0RUFBQ0gscURBQVU7WUFDVGtCLFNBQVMsRUFBQyw4RUFBOEU7WUFDeEZDLE9BQU8sRUFBRSxJQUFNVixRQUFRLENBQUM7b0JBQUVELEtBQUssZ0JBQUUsNklBQUs7b0JBQUVELE1BQU0sRUFBRSxLQUFLO2lCQUFFLENBQUM7WUFDeERhLFFBQVEsRUFBRWhCLDRFQUFXO1lBQ3JCaUIsT0FBTyxFQUFDLFFBQVE7WUFDaEJDLE9BQU8sRUFBRWYsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRO3NCQUVyQyw0RUFBQ1IsMERBQWU7MEJBQ2JRLE1BQU0sa0JBQ0wsOERBQUNQLHFEQUFVO29CQUNUb0IsUUFBUSxFQUFFZiwrRUFBYztvQkFDeEJnQixPQUFPLEVBQUMsUUFBUTtvQkFDaEJDLE9BQU8sRUFBQyxRQUFRO29CQUNoQkMsSUFBSSxFQUFDLFFBQVE7b0JBQ2JKLE9BQU8sRUFBRSxDQUFDSyxDQUFDLEdBQUtBLENBQUMsQ0FBQ0MsZUFBZSxFQUFFO29CQUNuQ1AsU0FBUyxFQUFDLEtBQUs7OEJBRWRWLEtBQUs7Ozs7OzZCQUNLOzs7Ozt5QkFFQzs7Ozs7cUJBQ1A7Ozs7O2lCQUNOLENBQ1Q7QUFDSixDQUFDO0FBRUQsaUVBQWVGLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeD8xOWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgbW9kYWxBdG9tIGZyb20gXCJAL2NvbW1vbi9yZWNvaWwvbW9kYWxcIjtcclxuXHJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uLy4uL3BvcnRhbC9jb21wb25lbnRzL1BvcnRhbFwiO1xyXG5pbXBvcnQge1xyXG4gIGJnQW5pbWF0aW9uLFxyXG4gIG1vZGFsQW5pbWF0aW9uLFxyXG59IGZyb20gXCIuLi9hbmltYXRpb25zL01vZGFsTWFuYWdlci5hbmltYXRpb25zXCI7XHJcblxyXG5jb25zdCBNb2RhbE1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3sgb3BlbmVkLCBtb2RhbCB9LCBzZXRNb2RhbF0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xyXG5cclxuICBjb25zdCBbcG9ydGFsTm9kZSwgc2V0UG9ydGFsTm9kZV0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcG9ydGFsTm9kZSkge1xyXG4gICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XHJcbiAgICAgIGlmIChub2RlKSBzZXRQb3J0YWxOb2RlKG5vZGUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wZW5lZCkge1xyXG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcG9ydGFsTm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfSwgW29wZW5lZCwgcG9ydGFsTm9kZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcnRhbD5cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTQwIGZsZXggbWluLWgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzgwXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbCh7IG1vZGFsOiA8PjwvPiwgb3BlbmVkOiBmYWxzZSB9KX1cclxuICAgICAgICB2YXJpYW50cz17YmdBbmltYXRpb259XHJcbiAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgICAgYW5pbWF0ZT17b3BlbmVkID8gXCJvcGVuZWRcIiA6IFwiY2xvc2VkXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAge29wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e21vZGFsQW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuZWRcIlxyXG4gICAgICAgICAgICAgIGV4aXQ9XCJleGl0ZWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bW9kYWx9XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvUG9ydGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1hbmFnZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZVJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwiUG9ydGFsIiwiYmdBbmltYXRpb24iLCJtb2RhbEFuaW1hdGlvbiIsIk1vZGFsTWFuYWdlciIsIm9wZW5lZCIsIm1vZGFsIiwic2V0TW9kYWwiLCJwb3J0YWxOb2RlIiwic2V0UG9ydGFsTm9kZSIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children  })=>{\n    const { 0: portal , 1: setPortal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = document.getElementById(\"portal\");\n        if (node) setPortal(node);\n    }, []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFFSDtBQUV6QyxNQUFNRyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQTZDLEdBQUs7SUFDMUUsTUFBTSxLQUFDQyxNQUFNLE1BQUVDLFNBQVMsTUFBSUwsK0NBQVEsRUFBZTtJQUVuREQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8sSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSUYsSUFBSSxFQUFFRCxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQ0YsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXpCLE9BQU9ILHVEQUFZLENBQUNFLFFBQVEsRUFBRUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jb21tb24vY29tcG9uZW50cy9wb3J0YWwvY29tcG9uZW50cy9Qb3J0YWwudHM/ZjU5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5jb25zdCBQb3J0YWwgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfSkgPT4ge1xyXG4gIGNvbnN0IFtwb3J0YWwsIHNldFBvcnRhbF0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRhbFwiKTtcclxuICAgIGlmIChub2RlKSBzZXRQb3J0YWwobm9kZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIXBvcnRhbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiBjcmVhdGVQb3J0YWwoY2hpbGRyZW4sIHBvcnRhbCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVBvcnRhbCIsIlBvcnRhbCIsImNoaWxkcmVuIiwicG9ydGFsIiwic2V0UG9ydGFsIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_EASE\": () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUFDLE9BQUc7QUFBRSxRQUFJO0lBQUUsQ0FBQyxJQUFJO0FBQUUsT0FBRztDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3MudHM/NjM3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVGQVVMVF9FQVNFID0gWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./common/constants/easings.ts\n");

/***/ }),

/***/ "./common/recoil/modal/index.ts":
/*!**************************************!*\
  !*** ./common/recoil/modal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useModal\": () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"./common/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDQTtBQUV6QyxpRUFBZUEsa0RBQVMsRUFBQztBQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY29tbW9uL3JlY29pbC9tb2RhbC9pbmRleC50cz8yYWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGFsQXRvbSB9IGZyb20gXCIuL21vZGFsLmF0b21cIjtcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC5ob29rc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kYWxBdG9tO1xyXG5cclxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcclxuIl0sIm5hbWVzIjpbIm1vZGFsQXRvbSIsInVzZU1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./common/recoil/modal/index.ts\n");

/***/ }),

/***/ "./common/recoil/modal/modal.atom.tsx":
/*!********************************************!*\
  !*** ./common/recoil/modal/modal.atom.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalAtom\": () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmF0b20udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFdkIsTUFBTUMsU0FBUyxHQUFHRCw0Q0FBSSxDQUcxQjtJQUNERSxHQUFHLEVBQUUsT0FBTztJQUNaQyxPQUFPLEVBQUU7UUFDUEMsS0FBSyxnQkFBRSw2SUFBSztRQUNaQyxNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY29tbW9uL3JlY29pbC9tb2RhbC9tb2RhbC5hdG9tLnRzeD8wMTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxBdG9tID0gYXRvbTx7XHJcbiAgbW9kYWw6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXTtcclxuICBvcGVuZWQ6IGJvb2xlYW47XHJcbn0+KHtcclxuICBrZXk6IFwibW9kYWxcIixcclxuICBkZWZhdWx0OiB7XHJcbiAgICBtb2RhbDogPD48Lz4sXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYXRvbSIsIm1vZGFsQXRvbSIsImtleSIsImRlZmF1bHQiLCJtb2RhbCIsIm9wZW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "./common/recoil/modal/modal.hooks.tsx":
/*!*********************************************!*\
  !*** ./common/recoil/modal/modal.hooks.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"./common/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        });\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        });\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vcmVjb2lsL21vZGFsL21vZGFsLmhvb2tzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEyQztBQUVGO0FBRXpDLE1BQU1FLFFBQVEsR0FBRyxJQUFNO0lBQ3JCLE1BQU1DLFFBQVEsR0FBR0gseURBQWlCLENBQUNDLGtEQUFTLENBQUM7SUFFN0MsTUFBTUcsU0FBUyxHQUFHLENBQUNDLEtBQWtDLEdBQ25ERixRQUFRLENBQUM7WUFBRUUsS0FBSztZQUFFQyxNQUFNLEVBQUUsSUFBSTtTQUFFLENBQUM7SUFFbkMsTUFBTUMsVUFBVSxHQUFHLElBQU1KLFFBQVEsQ0FBQztZQUFFRSxLQUFLLGdCQUFFLDZJQUFLO1lBQUVDLE1BQU0sRUFBRSxLQUFLO1NBQUUsQ0FBQztJQUVsRSxPQUFPO1FBQUVGLFNBQVM7UUFBRUcsVUFBVTtLQUFFLENBQUM7QUFDbkMsQ0FBQztBQUVtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4Pzg1NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XHJcblxyXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBzZXRNb2RhbCA9IHVzZVNldFJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdKSA9PlxyXG4gICAgc2V0TW9kYWwoeyBtb2RhbCwgb3BlbmVkOiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSk7XHJcblxyXG4gIHJldHVybiB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcclxuIl0sIm5hbWVzIjpbInVzZVNldFJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwidXNlTW9kYWwiLCJzZXRNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwib3BlbmVkIiwiY2xvc2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/modal/components/ModalManager */ \"./common/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Collabio | Online Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\MCA-RVCE\\\\Projects\\\\Real-Time-Collaborative-Whiteboard-\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFDO0FBRVI7QUFDbUI7QUFDWjtBQUV5QztBQUUxQjtBQUVuRCxNQUFNSSxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxHQUFLO0lBQ2xELHFCQUNFOzswQkFDRSw4REFBQ04sa0RBQUk7O2tDQUNILDhEQUFDTyxPQUFLO2tDQUFDLDhCQUE0Qjs7Ozs7aUNBQVE7a0NBQzNDLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O2lDQUFHOzs7Ozs7eUJBQ2xDOzBCQUNQLDhEQUFDUiw4Q0FBVTs7a0NBQ1QsOERBQUNELDBEQUFjOzs7O2lDQUFHO2tDQUNsQiw4REFBQ0Usd0ZBQVk7Ozs7aUNBQUc7a0NBQ2hCLDhEQUFDRSxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7O2lDQUFJOzs7Ozs7eUJBQ2pCOztvQkFDWixDQUNIO0FBQ0osQ0FBQztBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2NvbW1vbi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkAvY29tbW9uL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9Nb2RhbE1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q29sbGFiaW8gfCBPbmxpbmUgV2hpdGVib2FyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxSZWNvaWxSb290PlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxNb2RhbE1hbmFnZXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmVjb2lsUm9vdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJSZWNvaWxSb290IiwiTW9kYWxNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();