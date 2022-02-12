webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nconst react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\r\nconst easy_peasy_1 = __webpack_require__(/*! easy-peasy */ \"./node_modules/easy-peasy/dist/index.js\");\r\nconst value = easy_peasy_1.useStoreState((state) => state.commentText);\r\nconst updateComment = easy_peasy_1.useStoreActions((actions) => actions.add);\r\n// interface ICommentForm {\r\n//   onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;\r\n//   value: {text: string};\r\n// }\r\n// export interface ICommentValue {\r\n//   text: string;\r\n// }\r\nfunction CommentForm() {\r\n    // const [value, setValue]=useState('');\r\n    // const [touched, setTouched]=useState(false);\r\n    // const [valueError, setValueError]=useState('');\r\n    // function handleSubmit(event:FormEvent) {\r\n    //   event.preventDefault();\r\n    //   setTouched(true);\r\n    //   setValueError(validateValue())\r\n    //   const isFormValid=!validateValue();\r\n    //   if (!isFormValid) return;\r\n    //   alert('Форма отправлена')\r\n    // }\r\n    // function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {\r\n    //   setValue(event.target.value);\r\n    // }\r\n    // function validateValue() {\r\n    //   if (value.length<=3) return 'Введите больше трех символов';\r\n    //   return '';\r\n    // }\r\n    // return (\r\n    //   <form className={styles.form} onSubmit={handleSubmit}> \r\n    //      <textarea\r\n    //          className={styles.input}\r\n    //          value={value}\r\n    //          onChange={handleChange}\r\n    //          aria-invalid={valueError ? 'true': undefined}/> \r\n    //         {touched && valueError && (<div>{validateValue()}</div>)}\r\n    //      <button type='submit' className={styles.button} >Комментировать</button>\r\n    //   </form>\r\n    // );\r\n    const { register, setValue, handleSubmit, formState: { errors } } = react_hook_form_1.useForm({ defaultValues: { commentForm: props.value.text } });\r\n    const onSubmit = (data) => alert(JSON.stringify(data));\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(onSubmit) },\r\n        react_1.default.createElement(\"textarea\", Object.assign({ className: commentform_css_1.default.input }, register('commentForm', { required: true, minLength: { value: 4, message: 'Введите больше трех символов' } }), { onChange: (event) => {\r\n                const text = event.target.value;\r\n                setValue(\"commentForm\", text);\r\n            }, \"aria-invalid\": errors.commentForm ? 'true' : undefined })),\r\n        errors.commentForm && (react_1.default.createElement(\"div\", null, 'Введите больше трех символов')),\r\n        \";\",\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

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