webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/CommentForm/commentform.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".commentform__form--Cs1Oi {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  \\n  .commentform__input--2fC-z {\\n    height: 89px;\\n    border: 1px solid #D9D9D9;\\n    padding: 16px;\\n    box-sizing: border-box;\\n    border-radius: 3px 3px 0px 0px;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-size: 16px;\\n    line-height: 19px;\\n    color: #999999;\\n    resize: none;\\n  }\\n  \\n  .commentform__input--2fC-z[aria-invalid] {\\n    border-color: red;\\n  }\\n  \\n  .commentform__button--35eLT {\\n    width: 220px;\\n    height: 50px;\\n    background: #CC6633;\\n    border-radius: 0px 0px 3px 0px;\\n    align-self: flex-end;\\n    font-family: Roboto;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 14px;\\n    line-height: 16px;\\n    text-align: center;\\n    color: #FFFFFF;\\n  }\\n  \\n  .commentform__button--35eLT:disabled {\\n    opacity: 0.5;\\n    cursor: default;\\n  }\\n  \", \"\"]);\n// Exports\nexports.locals = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(props) {\r\n    const [value, setValue] = react_1.useState('');\r\n    const [touched, setTouched] = react_1.useState(false);\r\n    const [valueError, setValueError] = react_1.useState('');\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        setTouched(true);\r\n        setValueError(validateValue());\r\n        const isFormValid = !validateValue();\r\n        if (!isFormValid)\r\n            return;\r\n        alert('Форма отправлена');\r\n    }\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    function validateValue() {\r\n        if (value.length <= 3)\r\n            return 'Введите больше трех символов';\r\n        return '';\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, value: value, onChange: handleChange, \"aria-invalid\": valueError ? 'true' : undefined }),\r\n        touched && valueError && (react_1.default.createElement(\"div\", null, validateValue())),\r\n        react_1.default.createElement(\"button\", { type: 'submit', className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n    // const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({defaultValues: {commentForm:'10fsdf'}});\r\n    // const onSubmit: SubmitHandler<FormData> = (data) =>  alert(JSON.stringify(data));\r\n    // return (\r\n    //   <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>\r\n    //     <textarea value={120} className={styles.input} {...register(\r\n    //           'commentForm', { required: true, minLength: { value: 4, message: 'Введите больше трех символов'}}\r\n    //         )}\r\n    //         onChange={(event:ChangeEvent<HTMLTextAreaElement>) => {\r\n    //           const text=event.target.value;\r\n    //           setValue(\"commentForm\", text);\r\n    //         }}\r\n    //         aria-invalid={errors.commentForm ? 'true': undefined}\r\n    //         />\r\n    //          {errors.commentForm && (<div>{'Введите больше трех символов'}</div>)};\r\n    //     <button type=\"submit\"\r\n    //     className={styles.button}>\r\n    //       Комментировать\r\n    //     </button>\r\n    //   </form>\r\n    // );\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./commentform.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/CommentForm/commentform.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})