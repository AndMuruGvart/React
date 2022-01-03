webpackHotUpdate("main",{

/***/ "./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyForm = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst replyContext_1 = __webpack_require__(/*! ../../../Context/replyContext */ \"./src/shared/Context/replyContext.tsx\");\r\nconst replyform_css_1 = __importDefault(__webpack_require__(/*! ./replyform.css */ \"./src/shared/Post/Comments/ReplyForm/replyform.css\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nfunction ReplyForm(props) {\r\n    const ref = react_1.useRef(null);\r\n    react_1.useEffect(() => {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return () => {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    const node = document.querySelector('#answer_root');\r\n    if (!node)\r\n        return null;\r\n    const { value, onChange } = react_1.useContext(replyContext_1.replyContext);\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { ref: ref },\r\n        react_1.default.createElement(\"form\", { className: replyform_css_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"input\", { className: replyform_css_1.default.input, value: value, onChange: handleChange }),\r\n            react_1.default.createElement(\"button\", { type: 'submit', className: replyform_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")))), node);\r\n}\r\nexports.ReplyForm = ReplyForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/ReplyForm/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Post/Comments/ReplyForm/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ReplyForm */ \"./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/index.ts?");

/***/ })

})