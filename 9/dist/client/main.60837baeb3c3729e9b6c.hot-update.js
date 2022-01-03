webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Post/Comments/ReplyForm/replyform.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Post/Comments/ReplyForm/replyform.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".replyform__form--wfvKy {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  \\r\\n  .replyform__input--OXBKA {\\r\\n    height: 89px;\\r\\n    border: 1px solid #D9D9D9;\\r\\n    padding: 16px;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 3px 3px 0px 0px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 16px;\\r\\n    line-height: 19px;\\r\\n    color: #999999;\\r\\n    resize: none;\\r\\n  }\\r\\n  \\r\\n  .replyform__input--OXBKA[aria-invalid] {\\r\\n    border-color: red;\\r\\n  }\\r\\n  \\r\\n  .replyform__button--3xDsw {\\r\\n    margin-top: 10px;\\r\\n    width: 220px;\\r\\n    height: 50px;\\r\\n    background: #CC6633;\\r\\n    border-radius: 0px 0px 3px 0px;\\r\\n    align-self: flex-end;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    text-align: center;\\r\\n    color: #FFFFFF;\\r\\n  }\\r\\n  \\r\\n  .replyform__button--3xDsw:disabled {\\r\\n    opacity: 0.5;\\r\\n    cursor: default;\\r\\n  }\\r\\n  \", \"\"]);\n// Exports\nexports.locals = {\n\t\"form\": \"replyform__form--wfvKy\",\n\t\"input\": \"replyform__input--OXBKA\",\n\t\"button\": \"replyform__button--3xDsw\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/replyform.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Context/replyContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Context/replyContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.replyContext = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nexports.replyContext = react_1.default.createContext({\r\n    value: ``,\r\n    onChange: () => { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/replyContext.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyForm = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst replyContext_1 = __webpack_require__(/*! ../../../Context/replyContext */ \"./src/shared/Context/replyContext.tsx\");\r\nconst replyform_css_1 = __importDefault(__webpack_require__(/*! ./replyform.css */ \"./src/shared/Post/Comments/ReplyForm/replyform.css\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nfunction ReplyForm(props) {\r\n    const ref = react_1.useRef(null);\r\n    react_1.useEffect(() => {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return () => {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    const node = document.querySelector('#answer_root');\r\n    if (!node)\r\n        return null;\r\n    const { value, onChange } = react_1.useContext(replyContext_1.replyContext);\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", null, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam ullam tempore rem enim perferendis iste dignissimos, exercitationem corrupti vero reiciendis nemo unde eius? Quae officiis neque quam minus itaque?\")\r\n        ,\r\n            react_1.default.createElement(\"div\", { ref: ref },\r\n                react_1.default.createElement(\"form\", { className: replyform_css_1.default.form, onSubmit: handleSubmit },\r\n                    react_1.default.createElement(\"textarea\", { className: replyform_css_1.default.input, value: value, onChange: handleChange }),\r\n                    react_1.default.createElement(\"button\", { type: 'submit', className: replyform_css_1.default.button }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")))), node);\r\n}\r\nexports.ReplyForm = ReplyForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comments/ReplyForm/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Post/Comments/ReplyForm/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ReplyForm */ \"./src/shared/Post/Comments/ReplyForm/ReplyForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Comments/ReplyForm/replyform.css":
/*!**********************************************************!*\
  !*** ./src/shared/Post/Comments/ReplyForm/replyform.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./replyform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Post/Comments/ReplyForm/replyform.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./replyform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Post/Comments/ReplyForm/replyform.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./replyform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Post/Comments/ReplyForm/replyform.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Post/Comments/ReplyForm/replyform.css?");

/***/ })

})