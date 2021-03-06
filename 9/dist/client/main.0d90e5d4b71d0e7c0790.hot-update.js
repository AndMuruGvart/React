webpackHotUpdate("main",{

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
false,

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
false,

/***/ "./node_modules/react-hot-loader/index.js":
false,

/***/ "./node_modules/react-hot-loader/root.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/webpack/buildin/amd-define.js":
false,

/***/ "./node_modules/webpack/buildin/amd-options.js":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nconst Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nconst Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nconst Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nconst CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nconst useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nconst tokenContext_1 = __webpack_require__(/*! ./shared/Context/tokenContext */ \"./src/shared/Context/tokenContext.ts\");\r\nconst userContext_1 = __webpack_require__(/*! ./shared/Context/userContext */ \"./src/shared/Context/userContext.tsx\");\r\nconst postsContext_1 = __webpack_require__(/*! ./shared/Context/postsContext */ \"./src/shared/Context/postsContext.tsx\");\r\nconst commentContext_1 = __webpack_require__(/*! ./shared/Context/commentContext */ \"./src/shared/Context/commentContext.tsx\");\r\nconst replyContext_1 = __webpack_require__(/*! ./shared/Context/replyContext */ \"./src/shared/Context/replyContext.tsx\");\r\nfunction AppComponent() {\r\n    const [token] = useToken_1.useToken();\r\n    const [commentValue, setCommentValue] = react_1.useState('');\r\n    const [replyValue, setReplyValue] = react_1.useState('');\r\n    const CommentProvider = commentContext_1.commentContext.Provider;\r\n    const ReplyProvider = replyContext_1.replyContext.Provider;\r\n    return (react_1.default.createElement(ReplyProvider, { value: {\r\n            value: replyValue,\r\n            onChange: setReplyValue,\r\n        } },\r\n        react_1.default.createElement(CommentProvider, { value: {\r\n                value: commentValue,\r\n                onChange: setCommentValue,\r\n            } },\r\n            react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n                react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                    react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                        react_1.default.createElement(Layout_1.Layout, null,\r\n                            react_1.default.createElement(Header_1.Header, null),\r\n                            react_1.default.createElement(Content_1.Content, null,\r\n                                react_1.default.createElement(CardsList_1.CardsList, null),\r\n                                react_1.default.createElement(\"br\", null))))))),\r\n        \"); }; export const App=hot(()=>\",\r\n        react_1.default.createElement(AppComponent, null),\r\n        \");\"));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nconst App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener('load', () => {\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/Context/replyContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Context/replyContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.replyContext = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nexports.replyContext = react_1.default.createContext({\r\n    value: '',\r\n    onChange: () => { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/Context/replyContext.tsx?");

/***/ })

})